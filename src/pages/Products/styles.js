import styled from 'styled-components';

export const Container = styled.div` 
  background-color: #F6F6F6;
  padding: 2rem 4rem 6rem;
  h2{
    font-size: 36px;
    font-weight: 500;
    color: #716E68;
    text-align: center;
    margin-bottom: 4rem;
  }
  @media only screen and (max-width: 1024px) {
    padding: 4rem 2rem;
  }
`;


export const ContainerBusca = styled.div` 
  width: 100%;
  max-width: 1183px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;  

  input {
    background-color: #F6F6F6;
    margin: 0 auto;
    width: 33rem;
    max-width: 80%;
    height: 3rem;
    border-radius: 1rem;
    border: 0.1rem solid #716E68;
    padding: 0 1rem;
  }

  div {
    display: flex;
    align-items: center;
    background-color: #7FA492;
    border-radius: 1rem;
    height: 3rem;
    padding: 0 3rem;
    font-size: 1rem;
    color: white;
    cursor: pointer;
  }

  img {
    height: 1.5rem;
    margin-right: 0.5rem;
  }

  @media only screen and (max-width: 1024px) {
    justify-content: space-between;

    input {
      margin: 0;
      max-width: 50%;
    }
  }

  @media only screen and (max-width: 712px) {
    flex-direction: column;

    input {
      max-width: 80%;
      margin-bottom: 2rem;
    }
  }
`;

export const ContainerProdutos = styled.div` 
  width: 100%;
  max-width: 1183px;
  margin: 0 auto;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;