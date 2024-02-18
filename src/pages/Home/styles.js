import styled from 'styled-components';

export const Container = styled.div` 
  background-color: #F6F6F6;
  padding: 2rem 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 32px;
    font-weight: 500;
    color: #716E68;
    text-align: center;
    margin-bottom: 4rem;
    width: 80%;
    padding: 0rem 2rem;
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
  flex-direction: column;

  input {
    background-color: #F6F6F6;
    margin: 0 auto;
    width: 43.75rem;
    max-width: 80%;
    height: 2rem;
    border-radius: 0.5rem;
    border: 0.1rem solid #716E68;
    padding: 0 1rem;
  }
`;

export const ContainerTags = styled.div` 
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
  gap:0.75rem;

  .tag {
    width: 20%;
  }
`;

export const ContainerProdutos = styled.div` 
  width: 100%;
  max-width: 75rem;
  margin: 1rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const ContainerPaginacao = styled.div` 
  width: 100%;
  max-width: 50rem;
  margin: 1rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BotaoTag = styled.div` 
  padding: 0.5rem 1.438rem;
  border: 2px solid #C0DCCC;
  background-color: #C0DCCC;
  border-radius: 1rem;
  margin-right: 1.813rem;
  cursor: pointer;
  margin-bottom: 1rem;

  span { 
    font-size: 1.125rem;
    font-weight: 500;
    color: #7FA492;
  }
`;