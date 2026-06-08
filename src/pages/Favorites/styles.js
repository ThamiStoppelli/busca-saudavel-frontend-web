import styled from 'styled-components';

export const Container = styled.div` 
  background-color: #F6F6F6;
  padding: 2rem 4rem 6rem;
  h2 {
    font-family: 'Palanquin', sans-serif;
    font-weight: 700;
    font-size: clamp(2rem, 4vw, 3rem);
    line-height: 2;
    margin: 0 0 1rem;
    color: #3d3a35;
    text-align: center;
  }
  @media only screen and (max-width: 1024px) {
    padding: 4rem 2rem;
  }
`;

export const ContainerProdutos = styled.div` 
  width: 100%;
  max-width: 75rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  gap: 1.25rem;
  // display: flex;
  // align-items: center;
  // justify-content: center;
`;