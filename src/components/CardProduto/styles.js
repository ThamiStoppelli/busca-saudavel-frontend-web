import styled from 'styled-components';

export const Container = styled.div` 
  border: 1px solid #C0DCCC;
  border-radius: 1rem;
  height: 18.563rem;
  width: 16.375rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  `;

export const ContainerImagem = styled.div` 
  height: 10.438rem;
  border-radius: 1rem 1rem 0 0;
  width: 16.375rem;
  overflow: hidden;
  background-color: #ffffff;
  padding: 1rem;
  box-sizing: border-box;

  img {
    height:90%;
    width: 90%;
    border-radius: 1rem 1rem 0 0;
    object-fit: contain;
    margin: 0 auto;
    margin-left: 0.5rem;
  }

`;

export const ContainerInformacoes = styled.div` 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #C0DCCC;
  height: 8.125rem;
  border-radius: 0 0 1rem 1rem;
  padding: 1rem 1.625rem;
  color: #716E68;
  overflow-y: hidden;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  p{
    margin: 0;
    font-size: 0.875rem;
  }

  .icon {
    width: 1.688rem;
    height: 1.5rem;
    cursor: pointer;
    margin-left: 0.5rem;
  }
`;

export const Botao = styled.button` 
  border: 1px solid #7FA492;
  border-radius: 1rem;
  background-color: #7FA492;
  color: #ffffff;
  font-size: 0.875rem;
  padding: 0.375rem 1.563rem;
  cursor: pointer;
`;