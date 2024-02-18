import React, { useState, useEffect, useContext } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from '../../components/Header'
import Footer from '../../components/Footer';
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/auth';
import api from '../../services/api';
import EditIcon from '../../assets/icons/edit.svg'
import semImagem from '../../assets/images/sem-imagem.png';

import { OuterContainer, Container, Content, ContainerNome, ContainerConteudo, Botoes } from './styles'

const CompanyProfileEdit = () => {
  const navigate = useNavigate();
  const { user, token, initialToken, userType } = useContext(AuthContext)
  const [userInfo, setUserInfo] = useState([]);
  const params = useParams();
  const [produto, setProduto] = useState();
  const [image, setImage] = useState()
  const [name, setName] = useState('');
  const [CNPJ, setCNPJ] = useState('');
  const [email, setEmail] = useState('');

  function getInfoPerfil() {
    api
      .get(`/user/get/${user._id}`)
      .then(res => {
        setUserInfo(res.data)

        setName(res.data.name)
        setImage(res.data.image)
        setCNPJ(res.data.crm_cnpj)
        setEmail(res.data.email)
      })
      .catch(e => {
        console.log(e.message)
      })
  }

  useEffect(() => {
    getInfoPerfil();
  }, [])

  function atualizar() {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("crm_cnpj", CNPJ);
    formData.append("email", email);
    formData.append("image", image);
    api
      .put(`/user/update/${user._id}`,
        formData,
        {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        })
      .then(res => {
        toast.success('Perfil editado com sucesso')
        const myTimeout = setTimeout(navigate('/perfilempresa'), 3000)
      })
      .catch(e => {
        console.log(e.message)
      })
  }

  return (
    <>

      <Header />
      <OuterContainer>
        <Container>
          <ContainerNome>
            <span style={{ width: '1rem' }} />
            <p>Dados da empresa</p>
            <span style={{ width: '1rem' }} />
          </ContainerNome>
          <ContainerConteudo>
            <div className="image-div">

              <div className='containerImage'>
                {image ?
                  <img src={`data:image/png;base64,${image}`} alt='' />
                  :
                  <img src={semImagem} alt='' />
                }
              </div>
              <input type="file" id="image" className='image-input'
                onChange={(event) => {
                  console.log(event.target.files[0])
                  setImage(event.target.files[0]);
                }}
              />
            </div>
            <Content>
              <p className='bold'>Nome do fornecedor</p>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
              <p className='bold'>CNPJ</p>
              <input type="text" value={CNPJ} onChange={(e) => setCNPJ(e.target.value)} />
              <p className='bold'>E-mail</p>
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Content>
          </ContainerConteudo>

        </Container>
        <Botoes>
          <p className='btnCancelar' onClick={() => navigate('/perfilempresa')}>Cancelar</p>
          <p className='btnSalvar' onClick={() => { atualizar() }}>Salvar</p>
        </Botoes>
      </OuterContainer>
      <Footer />
    </>
  )
}

export default CompanyProfileEdit;