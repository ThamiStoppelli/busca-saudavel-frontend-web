import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PopUpDeletarProduto from '../PopUpDeletarProduto';
import Edit from '../../assets/icons/edit.svg';
import Trash from '../../assets/icons/trash.svg';
import { getImageSource } from '../../utils/image';

import { Container, ProductImage, Content, HeaderRow, MetaGrid, TagsPreview, Actions } from './styles';

function formatDate(value) {
  if (!value) return 'Data não informada';
  return new Intl.DateTimeFormat('pt-BR').format(new Date(value));
}

function CardProdutoFornecedor({ dados }) {
  const navigate = useNavigate();
  const [popUp, setPopUp] = useState(false);

  function Redirecionar(id) {
    navigate(`/produto/${id}`);
  }

  function RedirecionarEditar(id) {
    navigate(`/produto/editar/${id}`);
  }

  return (
    <>
      <Container>
        <ProductImage onClick={() => Redirecionar(dados._id)}>
          <img src={getImageSource(dados)} alt={dados.name || 'Produto'} />
        </ProductImage>

        <Content>
          <HeaderRow>
            <div>
              <p className="eyebrow">Produto cadastrado</p>
              <h3 onClick={() => Redirecionar(dados._id)}>{dados.name}</h3>
            </div>
            <Actions>
              <button type="button" onClick={() => RedirecionarEditar(dados._id)} aria-label="Editar produto">
                <img src={Edit} alt="" />
              </button>
              <button type="button" onClick={() => setPopUp(true)} aria-label="Deletar produto">
                <img src={Trash} alt="" />
              </button>
            </Actions>
          </HeaderRow>

          <MetaGrid>
            <div>
              <span>Marca</span>
              <strong>{dados.brand}</strong>
            </div>
            <div>
              <span>Cadastro</span>
              <strong>{formatDate(dados.createdAt)}</strong>
            </div>
          </MetaGrid>

          <TagsPreview>
            {(dados.tags || []).slice(0, 4).map((tag) => (
              <span key={tag._id || tag.free_of}>{tag.free_of}</span>
            ))}
            {(dados.tags || []).length > 4 ? <span>+{dados.tags.length - 4}</span> : null}
          </TagsPreview>
        </Content>
      </Container>
      {popUp ? (
        <PopUpDeletarProduto status={popUp} setStatus={setPopUp} id={dados._id} nome={dados.name} />
      ) : null}
    </>
  );
}

export default CardProdutoFornecedor;
