import styled from 'styled-components';

const fieldStyles = `
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #cfc9be;
  border-radius: 0.85rem;
  background: #fff;
  color: #20201e;
  font-size: 0.98rem;
  padding: 0.8rem 0.95rem;

  &:focus {
    outline: none;
    border-color: #7fa492;
    box-shadow: 0 0 0 3px rgba(127, 164, 146, 0.18);
  }
`;

export const OuterContainer = styled.div`
  background-color: #f6f6f6;
  padding: 4rem 2rem 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.section`
  box-sizing: border-box;
  border: 1px solid #dfe6e1;
  border-radius: 1.5rem;
  width: 100%;
  max-width: 62rem;
  padding: 1.5rem;
  background: #ffffff;
  box-shadow: 0 1rem 2.8rem rgba(61, 58, 53, 0.07);
`;

export const ContainerNome = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 3rem 1fr 3rem;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;

  p {
    font-size: 1.35rem;
    font-weight: 700;
    text-align: center;
    color: #20201e;
    margin: 0;
  }
`;

export const ContainerConteudo = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 16rem 1fr;
  gap: 1.5rem;
  align-items: center;

  .containerImage {
    background: linear-gradient(135deg, #eef5ef 0%, #ffffff 100%);
    border: 1px solid #ede8df;
    border-radius: 1.25rem;
    aspect-ratio: 1 / 1;
    padding: 1rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .image-input {
    margin-top: 0.9rem;
    width: 100%;
    font-size: 0.86rem;
  }

  .image-div {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
  }

  @media only screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const Content = styled.div`
  display: grid;
  gap: 0.55rem;

  p {
    font-size: 0.95rem;
    margin: 0.45rem 0 0;
    color: #3d3a35;
  }

  .bold {
    font-weight: 700;
    color: #20201e;
  }

  input {
    ${fieldStyles}
  }
`;

export const Botoes = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;

  .btnSalvar,
  .btnCancelar {
    min-width: 10rem;
    text-align: center;
    padding: 0.85rem 1.5rem;
    border-radius: 999px;
    font-size: 0.98rem;
    font-weight: 700;
    cursor: pointer;
  }

  .btnSalvar {
    background-color: #7fa492;
    color: white;
  }

  .btnCancelar {
    color: #3d3a35;
  }

  @media only screen and (max-width: 520px) {
    flex-direction: column-reverse;

    .btnSalvar,
    .btnCancelar {
      width: 100%;
      box-sizing: border-box;
    }
  }
`;
