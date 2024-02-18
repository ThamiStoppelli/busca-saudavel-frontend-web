import styled from 'styled-components';

export const Container = styled.div` 
  background-color: #F6F6F6;
  padding: 4rem 4rem 6rem;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 2rem;
  }
`;

export const Content = styled.div` 
  width: 37rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: 'Palanquin', sans-serif;
    font-weight: 700;
    font-size: 2rem;
    margin-bottom: 4rem;
    margin-top: 0;
    width: 100%;
  }

  h4 {
    font-weight: 400;
    margin-top: 0;
    margin-bottom: 2rem;
  }

  label{
    font-size: 16px;
    font-weight: 400;
    display: block;
  }

  input {
    width: 37rem;
    font-size: 16px;
    margin: 0.5rem 0 1rem 0;
  }

  .inputText{
    height: 3rem;
    border: 2px solid #716E68;
    border-radius: 0.5rem;
  }

  .botao {
    height: 4rem;
    background: #7FA492;
    border: 2px solid #7FA492;
    border-radius: 10px;
    font-size: 1.563rem;
    color:#FFFFFF;
    margin-top: 4rem;
    cursor: pointer;
  }

  .textoSenha {
    text-align: end;
    margin-top: 1.438rem;
    font-size: 1rem;
    cursor: pointer;
  }

  .textoCadastro {
    text-align: center;
    margin-top: 1.438rem;
    font-size: 1rem;
  }

  .textoFuncionalidade {
    text-align: center;
    margin-top: 4.5rem;
    font-size: 1rem;
  }

  .link {
    color: #000
  }

  .active-link {
    color: #000
  }

  .resend-email {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    gap: 0.6rem;
  }

  .resend-email img {
    margin-top: 1.2rem;
  }

  @media only screen and (max-width: 768px) {
    width: 30rem;

    input {
      max-width: 30rem;
    }
  }

  @media only screen and (max-width: 590px) {
    width: 25rem;

    input {
      max-width: 25rem;
    }
  }

  @media only screen and (max-width: 470px) {
    width: 18rem;

    input {
      max-width: 18rem;
    }

    h1 {
      font-size: 1.5rem;
    }

    .inputText{
      height: 3rem;
    }

    .botao {
      height: 3.5rem;
      font-size: 1.3rem;
    }
  }
`;
