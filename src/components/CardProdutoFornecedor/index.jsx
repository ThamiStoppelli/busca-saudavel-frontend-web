import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PopUpDeletarProduto from '../PopUpDeletarProduto';
import Tag from '../../components/Tag';
import Trash from '../../assets/icons/trash.svg';
import Edit from '../../assets/icons/edit.svg';
import semImagem from '../../assets/images/sem-imagem.png';

import { Container, ContainerNome, ContainerConteudo, Content, ContainerTag } from './styles'

function CardProdutoFornecedor({ dados }) {
  const navigate = useNavigate();
  const [popUp, setPopUp] = useState(false);

  function Redirecionar(id) {
    navigate(`/produto/${id}`);
  }

  function RedirecionarEditar(id) {
    navigate(`/produto/editar/${id}`);
  }

  useEffect(() => {
    console.log(dados.tags)
  }, [])

  return (
    <>
      <Container>
        <ContainerNome>
          <span style={{ width: '1rem' }} />
          <p onClick={() => { Redirecionar(dados._id) }}>{dados.name}</p>
          <div>
            <img src={Edit} alt='editar' onClick={() => RedirecionarEditar(dados._id)} />
            <img src={Trash} alt='deletar' onClick={() => { setPopUp(true) }} />
          </div>
        </ContainerNome>
        <ContainerConteudo>
          <div className='containerImage'>
            {dados.image ?
              <img src={`data:image/png;base64,${dados.image}`} alt='' onClick={() => { Redirecionar(dados._id) }} />
              :
              <img src={semImagem} alt='' />
            }
          </div>
          <Content>
            <p className='bold'>Marca</p>
            <p>{dados.brand}</p>
            <p className='bold'>Data de Cadastro</p>
            <p>{dados.createdAt.split('-')[2].split('')[0] + dados.createdAt.split('-')[2].split('')[1]}/{dados.createdAt.split('-')[1]}/{dados.createdAt.split('-')[0]}</p>
            <p className='bold'>Tags</p>
            <ContainerTag>
              {dados.tags ? dados.tags.map(tag => {
                return (
                  <Tag dados={tag.free_of} status='false' />
                )
              }) : null}
            </ContainerTag>
          </Content>
        </ContainerConteudo>
      </Container>
      {popUp ?
        <PopUpDeletarProduto status={popUp} setStatus={setPopUp} id={dados._id} nome={dados.name} />
        : null}
    </>
  )
}

export default CardProdutoFornecedor;