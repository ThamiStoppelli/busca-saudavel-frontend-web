import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../context/auth';
import notFavorited from '../../assets/icons/not-favorited.png';
import favorited from '../../assets/icons/favorited.svg';
import semImagem from '../../assets/images/sem-imagem.png';

import { Container, ContainerImagem, ContainerInformacoes, Botao } from './styles';

function CardProduto({ dados, clickFavorite, favorite }) {

  const navigate = useNavigate();
  const { user, userType } = useContext(AuthContext)

  function Redirecionar(id) {
    navigate(`/produto/${id}`);
  }

  return (
    <>
      {dados ?
        <Container>
          <ContainerImagem>
            { dados.image ?
                <img src={`data:image/png;base64,${dados.image}`} alt='' />
              : <img src={semImagem} alt='' />
            }
          </ContainerImagem>
          <ContainerInformacoes>
            <div>
              <p>{dados.name}</p>
              { userType == 1 ? null : 
              <img
                src={favorite ? favorited : notFavorited}
                alt='favoritar'
                className='icon'
                onClick={clickFavorite} 
              />}
              {/* checar se usuario esta logado */}
            </div>
            <p>{dados.brand}</p>
            <Botao onClick={() => { Redirecionar(dados._id) }}>Saiba mais</Botao>
          </ContainerInformacoes>
        </Container>
        : null}
    </>
  )
}

export default CardProduto;