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