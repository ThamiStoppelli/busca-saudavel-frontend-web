import styled from 'styled-components';

export const Container = styled.article`
  border: 1px solid #e3dfd6;
  border-radius: 1.25rem;
  min-height: 21rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0 0.75rem 2rem rgba(61, 58, 53, 0.07);
  transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: #c0dccc;
    box-shadow: 0 1rem 2.5rem rgba(61, 58, 53, 0.11);
  }
`;

export const ContainerImagem = styled.div`
  height: 11rem;
  width: 100%;
  overflow: hidden;
  background: linear-gradient(135deg, #eef5ef 0%, #ffffff 100%);
  padding: 1rem;
  box-sizing: border-box;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
    display: block;
  }
`;

export const ContainerInformacoes = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  color: #3d3a35;

  .product-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.75rem;
  }

  h3 {
    margin: 0.2rem 0 0;
    font-size: 1rem;
    line-height: 1.25;
    font-weight: 700;
    color: #3d3a35;
  }

  .brand {
    margin: 0;
    color: #7fa492;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .favorite-button {
    width: 2.25rem;
    height: 2.25rem;
    border: 1px solid #e3dfd6;
    border-radius: 999px;
    background: #ffffff;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: transform 0.16s ease, box-shadow 0.16s ease;
  }

  .favorite-button:hover {
    transform: scale(1.04);
    box-shadow: 0 0.4rem 1rem rgba(61, 58, 53, 0.12);
  }

  .favorite-button img {
    width: 1.1rem;
    height: 1rem;
  }
`;

export const TagsPreview = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin: 0.9rem 0 1rem;

  span {
    display: inline-flex;
    align-items: center;
    min-height: 1.5rem;
    padding: 0.2rem 0.55rem;
    border-radius: 999px;
    background: #edf4ef;
    color: #5f7f70;
    font-size: 0.72rem;
    font-weight: 700;
  }
`;

export const Botao = styled.button`
  width: 100%;
  border: 1px solid #7fa492;
  border-radius: 999px;
  background-color: #7fa492;
  color: #ffffff;
  font-size: 0.9rem;
  font-weight: 700;
  padding: 0.7rem 1rem;
  cursor: pointer;
  transition: background-color 0.16s ease, transform 0.16s ease;

  &:hover {
    background-color: #6f927f;
    transform: translateY(-1px);
  }
`;
