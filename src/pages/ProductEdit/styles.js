import styled from 'styled-components';

const fieldStyles = `
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #cfc9be;
  border-radius: 0.85rem;
  background: #fff;
  color: #20201e;
  font-size: 0.98rem;
  line-height: 1.4;
  padding: 0.8rem 0.95rem;
  transition: border-color 0.16s ease, box-shadow 0.16s ease;

  &:focus {
    outline: none;
    border-color: #7fa492;
    box-shadow: 0 0 0 3px rgba(127, 164, 146, 0.18);
  }
`;

export const Container = styled.div`
  background-color: #f6f6f6;
  padding: 2rem 4rem 6rem;

  h2 {
    font-size: 1.6rem;
    font-weight: 600;
    color: #716e68;
    text-align: center;
  }

  @media only screen and (max-width: 1024px) {
    padding: 3rem 2rem 5rem;
  }

  @media only screen and (max-width: 550px) {
    padding: 2rem 1rem 4rem;
  }
`;

export const Breadcrumb = styled.div`
  width: 100%;
  max-width: 76rem;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #3d3a35;
  font-size: 0.95rem;

  img {
    width: 0.85rem;
    transform: rotate(180deg);
  }

  .textoCinza {
    color: #828282;
    cursor: pointer;
  }
`;

export const ContainerProduto = styled.section`
  width: 100%;
  max-width: 76rem;
  margin: 0 auto;
  border: 1px solid #dfe6e1;
  border-radius: 1.5rem;
  padding: 1.5rem;
  background: #ffffff;
  box-shadow: 0 1rem 2.8rem rgba(61, 58, 53, 0.07);

  @media only screen and (max-width: 550px) {
    padding: 1rem;
  }
`;

export const ContainerNome = styled.div`
  display: grid;
  grid-template-columns: 3rem 1fr 3rem;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;

  input {
    ${fieldStyles}
    max-width: 42rem;
    margin: 0 auto;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 700;
  }

  img {
    width: 2.25rem;
    height: 2.25rem;
    padding: 0.55rem;
    border: 1px solid #e3dfd6;
    border-radius: 999px;
    background: #fff;
    box-sizing: border-box;
    cursor: pointer;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr auto;

    > span:first-child {
      display: none;
    }

    input {
      text-align: left;
    }
  }
`;

export const DadosProduto = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 23rem;
  gap: 1.5rem;
  align-items: start;

  @media only screen and (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`;

export const DadosProdutoInfo = styled.div`
  display: grid;
  grid-template-columns: 20rem minmax(0, 1fr);
  gap: 1.5rem;

  @media only screen and (max-width: 780px) {
    grid-template-columns: 1fr;
  }
`;

export const PrimeiraParte = styled.div`
  display: flex;
  flex-direction: column;

  .containerImagem {
    width: 100%;
    aspect-ratio: 1 / 1;
    background: linear-gradient(135deg, #eef5ef 0%, #ffffff 100%);
    border: 1px solid #ede8df;
    border-radius: 1.25rem;
    padding: 1.25rem;
    overflow: hidden;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .foto {
    height: 100%;
    width: 100%;
    object-fit: contain;
    display: block;
  }

  .info input[type='file'] {
    margin: 0.9rem 0 0;
    width: 100%;
    font-size: 0.86rem;
  }

  p {
    margin: 1rem 0 0.75rem;
    font-size: 0.98rem;
    font-weight: 700;
    color: #20201e;
  }

  .containerTags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
  }
`;

export const SegundaParte = styled.div`
  display: grid;
  align-content: start;
  gap: 0.7rem;

  p {
    font-size: 1rem;
    line-height: 1.5;
    margin: 0;
  }

  .bold {
    margin-top: 0.5rem;
    color: #20201e;
    font-weight: 700;
  }

  textarea {
    ${fieldStyles}
    min-height: 8.5rem;
    resize: vertical;
  }
`;

export const TerceiraParte = styled.aside`
  width: 100%;
  background-color: #7fa492;
  border-radius: 1.25rem;
  color: #ffffff;
  padding: 1.5rem;
  box-sizing: border-box;

  p {
    text-align: center;
    margin: 0 0 1rem;
    font-size: 1.05rem;
    font-weight: 700;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  td {
    font-size: 0.9rem;
    line-height: 1.35;
    padding: 0.45rem 0;
    border-top: 1px solid rgba(255, 255, 255, 0.18);
  }

  input {
    width: 7.2rem;
    box-sizing: border-box;
    border: 1px solid rgba(255, 255, 255, 0.36);
    border-radius: 0.55rem;
    padding: 0.5rem 0.6rem;
    color: #20201e;
    font-size: 0.86rem;
  }

  td:last-child {
    text-align: right;
  }

  @media only screen and (max-width: 1080px) {
    max-width: 42rem;
    margin: 0 auto;
  }

  @media only screen and (max-width: 500px) {
    overflow-x: auto;
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
