import styled from 'styled-components';

export const ContainerGeral = styled.div` 
  background-color: #7FA492;
  margin: 0px;
  padding: 1.25rem 5rem;

  p{
    color: white;
    font-size:1.125rem;
  }

  .icon {
    height: 1.875rem;
    margin-right: 1.25rem;
    margin-top: 0.5rem;
  }

  @media only screen and (max-width: 1024px) {
    padding: 1.25rem 3rem;
    .logo {
      width: 15rem;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 1.25rem 3rem;
  }

  @media only screen and (max-width: 375px) {
    .logo {
      width: 12rem;
    }
  }
`;

export const Container = styled.div` 
  margin: 0 auto;
  max-width: 75rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContainerDados = styled.div` 
  width: 20rem;
  margin-right: 3rem;

  @media only screen and (max-width: 1024px) {
    margin-right: 1rem;
    width: 15rem;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ContainerDadosLink = styled.div` 
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  li{
    list-style: none;
    color: white;
    font-size: 1.125rem;
    margin-bottom: 1rem;
    cursor: pointer;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-top: 1.5rem;
    margin-bottom: 1rem;

    ul {
      padding: 0px;
    }
  }

  @media only screen and (max-width: 560px) {
    flex-direction: column;

    ul {
      padding-bottom: 0.5rem;
    }
  }
`;