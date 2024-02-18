import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { ConfirmPopUp } from './styles'
import { AuthContext } from '../../context/auth';
import api from '../../services/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PopUpDeletarProduto({ status, setStatus, id, nome }){
  const { token, produtos, setProdutos, user } = useContext(AuthContext)
  const navigate = useNavigate();

  function Redirecionar() {
    navigate(`/produtos`);
  }

  function deletarProduto(){
    api
      .delete(`/product/delete/${id}`, 
      {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      .then( res => {
        toast.success("Produto deletado com sucesso")
        // const myTimeout = setTimeout(Redirecionar(), 3000)
        api
        .get(`/product/search?search=${user.name}`)
        .then(res => {
          setProdutos(res.data)
        })
        .catch(e => {
          console.error(e.message)
        })
      })
      .catch( e => {
        console.error(e.message)
      })
  }

  return(
    <>
      { status == true ? 
        <ConfirmPopUp>
          <div className="confirm-popup">
            <div className="textarea-popup">
              <p>Deletar Produto</p>
              <span>Deseja realmente deletar {nome}?</span>
            </div>
            <div className="buttons-popup">
              <button className="cancel-button" onClick={() => setStatus(false)}>
                Cancelar
              </button>
              <button className="delete-button" onClick={deletarProduto}>
                Deletar
              </button>
            </div>
          </div>
        </ConfirmPopUp>
      : null}
    </>
  )
}
  
export default PopUpDeletarProduto;