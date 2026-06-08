import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../context/auth';
import notFavorited from '../../assets/icons/not-favorited.png';
import favorited from '../../assets/icons/favorited.svg';
import { getImageSource } from '../../utils/image';

import { Container, ContainerImagem, ContainerInformacoes, Botao, TagsPreview } from './styles';

function CardProduto({ dados, clickFavorite, favorite }) {
  const navigate = useNavigate();
  const { userType } = useContext(AuthContext);

  function Redirecionar(id) {
    navigate(`/produto/${id}`);
  }

  return dados ? (
    <Container>
      <ContainerImagem>
        <img src={getImageSource(dados)} alt={dados.name || 'Produto'} />
      </ContainerImagem>
      <ContainerInformacoes>
        <div className="product-header">
          <div>
            <p className="brand">{dados.brand}</p>
            <h3>{dados.name}</h3>
          </div>
          {userType === 1 ? null : (
            <button className="favorite-button" onClick={clickFavorite} aria-label="Favoritar produto">
              <img src={favorite ? favorited : notFavorited} alt="" />
            </button>
          )}
        </div>

        <TagsPreview>
          {(dados.tags || []).slice(0, 2).map((tag) => (
            <span key={tag._id || tag.free_of}>{tag.free_of}</span>
          ))}
          {(dados.tags || []).length > 2 ? <span>+{dados.tags.length - 2}</span> : null}
        </TagsPreview>

        <Botao onClick={() => Redirecionar(dados._id)}>Ver detalhes</Botao>
      </ContainerInformacoes>
    </Container>
  ) : null;
}

export default CardProduto;
