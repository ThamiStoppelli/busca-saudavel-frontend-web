import React, { useState, useEffect, useContext } from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer';
import PopUpDeletarProduto from '../../components/PopUpDeletarProduto';
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/auth';
import api from '../../services/api';
import Tag from '../../components/Tag';
import Voltar from '../../assets/icons/anterior-preto.svg';
import semImagem from '../../assets/images/sem-imagem.png';
import coracao from '../../assets/icons/not-favorited.png';
import trash from '../../assets/icons/trash.svg';
import edit from '../../assets/icons/edit.svg';
import { Container, Breadcrumb, ContainerProduto, ContainerNome, DadosProduto, DadosProdutoInfo, PrimeiraParte, SegundaParte, TerceiraParte } from './styles'

const Product = () => {
  const navigate = useNavigate();
  const { user, userType } = useContext(AuthContext)

  const params = useParams();
  const [ popUp, setPopUp ] = useState(false);
  const [produto, setProduto] = useState();

  function Redirecionar(id) {
    navigate(`/produto/editar/${id}`);
  }

  function getProduto(){
    api
      .get(`/product/get/${params.id}`)
      .then(res => {
        setProduto(res.data)
        console.log(res.data)
      })
      .catch(e => {
        console.error(e.message)
      })
  }

  useEffect(() => { getProduto() }, [])

  return (
    <>
      <Header />
      <Container>
        {produto ?
          <>
            <Breadcrumb>
              <span className='textoCinza' onClick={() => { navigate(`/`)}}>Produtos</span>
              <img src={Voltar} alt='Voltar'/>
              <span>{produto.name}</span>
            </Breadcrumb>
            <ContainerProduto>
              <ContainerNome>
                <span />
                <h3>{produto.name}</h3>
                { user? user.name == produto.brand ? 
                  <div>
                    <img src={edit} alt='Editar' onClick={() => Redirecionar(produto._id)}/>
                    <img src={trash} alt='Deletar' onClick={() => { setPopUp(true) }}/>
                  </div>
                : <span/>
                : <span/> }
              </ContainerNome>
              <DadosProduto>
                <DadosProdutoInfo>
                  <PrimeiraParte>
                    <div className='containerImagem'>
                      {  produto.image ? 
                        <img src={`data:image/png;base64,${produto.image}`} alt='' className='foto'/>
                        :  <img src={semImagem} alt='' className='foto'/>
                      }
                      { userType == 1 ? null : 
                      <img src={coracao} alt='favoritar' className='icon' />}
                    </div>
                    <p>Não contém:</p>
                    <div className='containerTags'>
                      {produto.tags ? produto.tags.map (tag => {
                        return (
                          <Tag dados={tag.free_of} status='false'/>
                          )
                        }) : null}
                    </div>
                  </PrimeiraParte>
                  <SegundaParte>
                    <p className='bold'>Marca</p>
                    <p>{produto.brand}</p>
                    <p className='bold'>Ingredientes</p>
                    <p>{produto.ingredients}</p>
                    <p className='bold'>Descrição</p>
                    <p>{produto.description}</p>
                  </SegundaParte>
                </DadosProdutoInfo>
                <TerceiraParte>
                  <p>Tabela Nutricional</p>
                  <table>
                    <tbody>
                      <tr>
                        <td>Quantidade da porção</td>
                        <td className='info'>{produto.nutrition_facts.serving_size}</td>
                      </tr>
                      <tr>
                        <td>Valor Energético</td>
                        <td className='info'>{produto.nutrition_facts.energy_value}</td>
                      </tr>
                      <tr>
                        <td>Carboidratos</td>
                        <td className='info'>{produto.nutrition_facts.carbohydrate}</td>
                      </tr>
                      <tr>
                        <td>Proteínas</td>
                        <td className='info'>{produto.nutrition_facts.protein}</td>
                      </tr>
                      <tr>
                        <td>Gorduras Totais</td>
                        <td className='info'>{produto.nutrition_facts.total_fat}</td>
                      </tr>
                      <tr>
                        <td>Gorduras Saturadas</td>
                        <td className='info'>{produto.nutrition_facts.fat_saturated}</td>
                      </tr>
                      <tr>
                        <td>Gorduras Trans</td>
                        <td className='info'>{produto.nutrition_facts.fat_trans}</td>
                      </tr>
                      <tr>
                        <td>Fibra Alimentar</td>
                        <td className='info'>{produto.nutrition_facts.fiber}</td>
                      </tr>
                      <tr>
                        <td>Sódio</td>
                        <td className='info'>{produto.nutrition_facts.sodium}</td>
                      </tr>
                      <tr>
                        <td>Outros minerais</td>
                        <td className='info'>{produto.nutrition_facts.minerals}</td>
                      </tr>
                      <tr>
                        <td>Vitaminas</td>
                        <td className='info'>{produto.nutrition_facts.vitamins}</td>
                      </tr>
                    </tbody>
                  </table>
                </TerceiraParte>
              </DadosProduto>
            </ContainerProduto>
            { popUp ?
              <PopUpDeletarProduto status={popUp} setStatus={setPopUp} id={produto._id} nome={produto.name}/>
            : null }
          </>
        : null}
      </Container>
      <Footer />
    </>
  )
}

export default Product;