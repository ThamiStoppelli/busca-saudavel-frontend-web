import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f6f6f6;
  padding: 4rem 2rem 6rem;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: min(100%, 38rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  border: 1px solid #e3dfd6;
  border-radius: 1.5rem;
  padding: 2rem;
  box-sizing: border-box;
  box-shadow: 0 1rem 2.8rem rgba(61, 58, 53, 0.07);

  h1 {
    font-family: 'Palanquin', sans-serif;
    font-weight: 700;
    font-size: clamp(1.65rem, 3vw, 2rem);
    line-height: 1.2;
    margin: 0 0 2rem;
    width: 100%;
    color: #3d3a35;
  }

  form {
    width: 100%;
  }

  label {
    font-size: 0.92rem;
    font-weight: 700;
    display: block;
    color: #3d3a35;
  }

  input {
    width: 100%;
    box-sizing: border-box;
    font-size: 0.98rem;
    margin: 0.45rem 0 1rem;
  }

  .inputText {
    height: 3rem;
    border: 1px solid #cfc9be;
    border-radius: 0.85rem;
    background: #ffffff;
    padding: 0 0.95rem;
    transition: border-color 0.16s ease, box-shadow 0.16s ease;
  }

  .inputText:focus {
    outline: none;
    border-color: #7fa492;
    box-shadow: 0 0 0 3px rgba(127, 164, 146, 0.18);
  }

  .botao {
    height: 3.15rem;
    background: #7fa492;
    border: 1px solid #7fa492;
    border-radius: 999px;
    font-size: 1rem;
    font-weight: 700;
    color: #ffffff;
    margin-top: 2rem;
    cursor: pointer;
    transition: background-color 0.16s ease, transform 0.16s ease;
  }

  .botao:hover {
    background-color: #6f927f;
    transform: translateY(-1px);
  }

  .textoSenha {
    text-align: end;
    margin-top: 0.25rem;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
  }

  .textoCadastro {
    text-align: center;
    margin-top: 1rem;
    font-size: 0.92rem;
    font-weight: 500;
  }

  .textoFuncionalidade {
    text-align: center;
    margin-top: 2rem;
    font-size: 0.92rem;
    font-weight: 500;
    color: #716e68;
  }

  .link,
  .active-link {
    color: #3d3a35;
  }

  @media only screen and (max-width: 470px) {
    padding: 1.25rem;
  }
`;
