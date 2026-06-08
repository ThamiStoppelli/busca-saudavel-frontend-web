import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f6f6f6;
  padding: 2rem 4rem 6rem;

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

  h3 {
    text-align: center;
    font-size: 1.55rem;
    line-height: 1.25;
    margin: 0;
    color: #20201e;
  }

  @media only screen and (max-width: 550px) {
    padding: 1rem;
    border-radius: 1.25rem;
  }
`;

export const ContainerNome = styled.div`
  display: grid;
  grid-template-columns: 4rem 1fr 4rem;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;

  div {
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
  }

  img {
    width: 1.1rem;
    cursor: pointer;
  }

  div img {
    width: 2.25rem;
    height: 2.25rem;
    padding: 0.55rem;
    border: 1px solid #e3dfd6;
    border-radius: 999px;
    box-sizing: border-box;
    background: #fff;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr auto;

    > span:first-child {
      display: none;
    }

    h3 {
      text-align: left;
    }
  }
`;

export const DadosProduto = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 23rem;
  gap: 1.5rem;
  align-items: start;

  @media only screen and (max-width: 1050px) {
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
    position: relative;
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

  .icon {
    position: absolute;
    width: 2.35rem;
    height: 2.35rem;
    padding: 0.62rem;
    border: 1px solid #e3dfd6;
    border-radius: 999px;
    background: #fff;
    box-sizing: border-box;
    cursor: pointer;
    bottom: 1rem;
    right: 1rem;
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
  color: #3d3a35;

  p {
    font-size: 1rem;
    line-height: 1.7;
    margin: 0;
  }

  .bold {
    margin-top: 0.5rem;
    color: #20201e;
    font-weight: 700;
    line-height: 1.2;
  }
`;

export const TerceiraParte = styled.aside`
  display: flex;
  flex-direction: column;
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
    font-size: 0.92rem;
    line-height: 1.35;
    padding: 0.55rem 0;
    border-top: 1px solid rgba(255, 255, 255, 0.18);
  }

  .info {
    padding-left: 1rem;
    text-align: right;
    font-weight: 700;
    white-space: nowrap;
  }
`;
