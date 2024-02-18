import styled from 'styled-components';

export const Container = styled.div` 
  background-color: #F6F6F6;
  padding: 2rem 4rem 6rem;

  @media only screen and (max-width: 1424px) {
    padding: 4rem 2rem;
  }

  @media only screen and (max-width: 550px) {
    padding: 2rem 1rem;
  }
`;

export const Breadcrumb = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;

  img {
    margin: 0 0.5rem;
  }

  .textoCinza {
    color: #828282;
    cursor: pointer;
  }
`;

export const ContainerProduto = styled.div` 
  width: 100%;
  max-width: 75rem;
  margin: 1rem auto;
  border: 0.2rem solid #7FA492;
  border-radius: 1rem;
  padding: 2rem;
  
  h3 {
    text-align: center;
    font-size: 1.375rem;
    margin: 0;
  }

  @media only screen and (max-width: 1424px) {
    max-width: 90%;
  }

  @media only screen and (max-width: 550px) {
    padding: 1rem;
  }
`;

export const ContainerNome = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    gap: 1.5rem;
  }

  img {
    width: 2rem;
    cursor: pointer;
  }
`;

export const DadosProduto = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 3rem;
  margin: 2rem 0;

  @media only screen and (max-width: 1250px) {
    gap: 1.5rem;
  }

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
  }

  @media only screen and (max-width: 600px) {
    gap: 0;
  }
`;

export const DadosProdutoInfo = styled.div `
  display: flex;
  flex-direction: row;
  gap: 3rem;

  @media only screen and (max-width: 1250px) {
    gap: 1.5rem;
  }

  @media only screen and (max-width: 1024px) {
    gap: 3rem;
    margin: 0 auto;
  }

  @media only screen and (max-width: 768px) {
    gap:1.5rem;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    gap: 2rem;
  }
`

export const PrimeiraParte = styled.div `
  display: flex;
  flex-direction: column;
  max-width: 21.625rem;
  
  .containerImagem {
    width: 21.625rem;
    height: 23.25rem;
    background-color: #ffffff;
    border-radius: 1rem;
    padding: 0.5rem;
    overflow: hidden;
    box-sizing: border-box;
    position: relative;
    display: flex;
    justify-content: center;
  }

  .foto {
    height:70%;
    width: 70%;
    border-radius: 1rem 1rem 0 0;
    object-fit: contain;
    align-self: center;
  }

  .icon {
    position: absolute;
    width: 1.688rem;
    height: 1.5rem;
    cursor: pointer;
    bottom: 1rem;
    right: 1rem;
  }

  p {
    font-size: 1.125rem;
    font-weight: bold;
  }

  .containerTags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  @media only screen and (max-width: 1250px) {
    max-width: 17rem;

    .containerImagem {
      width: 17rem;
      height: 19rem;
    }
  }

  @media only screen and (max-width: 768px) {
    max-width: 14rem;

    .containerImagem {
      width: 14rem;
      height: 16rem;
    }
  }

  @media only screen and (max-width: 600px) {
    max-width: 100rem;
    width: 100%;

    .containerImagem {
      margin: 0 auto;
      width: 12rem;
      height: 14rem;
    }
  }
`;

export const SegundaParte = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 24rem;

  p {
    font-size: 1.125rem;
    line-height: 2rem;
    margin: 0;
  }

  .bold {
    font-weight: bold;
  }

  @media only screen and (max-width: 1424px) {
    max-width: 21rem;
  }

  @media only screen and (max-width: 1250px) {
    max-width: 18rem;
  }

  @media only screen and (max-width: 1024px) {
    max-width: 23rem;
  }
`;

export const TerceiraParte = styled.div `
  display: flex;
  flex-direction: column;
  max-width: 23.313rem;
  background-color: #7FA492;
  border-radius: 1rem;
  color: #FFFFFF;
  padding: 2rem;

  p {
    text-align: center;
  }

  td {
    font-size: 1rem;
    padding-top: 1rem;
  }

  .info {
    padding-left: 1.5rem;
  }

  @media only screen and (max-width: 1024px) {
    margin: 0 auto;
    max-width: 90%;
    width: 43rem;
  }

  @media only screen and (max-width: 830px) {
    margin: 0 auto;
    max-width: 90%;
    width: 40rem;
  }
  
  @media only screen and (max-width: 650px) {
    width: 30rem;
  }

  @media only screen and (max-width: 600px) {
    width: 20rem;
    margin-top: 2rem;
  }

  @media only screen and (max-width: 520px) {
    width: 18rem;
  }

  @media only screen and (max-width: 375px) {
    width: 12rem;
  }
`;