import styled from 'styled-components';

export const Container = styled.div` 
  background-color: #F6F6F6;
  padding: 2rem 4rem 6rem;
  
  h2 {
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
  max-width: 1183px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  input {
    background-color: #F6F6F6;
    margin: 3rem auto;
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
`;