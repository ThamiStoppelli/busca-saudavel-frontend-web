import styled from "styled-components";

export const Container = styled.div`
  /* background-color: #f6f6f6;
  padding: 4rem 4rem 6rem;
  display: flex;
  justify-content: center; */
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 99999;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 2rem;
  }
`;

export const Content = styled.div`
  /* width: 37rem;
  display: flex;
  flex-direction: column;
  align-items: center; */
  width: 30rem;
  height: 38rem;
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  grid-gap: 2vh;
  border: 2px solid #828282;
  padding: 2% 2%;

  .close-icon {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }

  .close-icon div {
    width: 4rem;
    height: 4rem;
  }

  .close-icon img {
    width: 2rem;
    cursor: pointer;
  }

  .header img {
    width: 10rem;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -2rem;
  }

  h1 {
    font-family: "Palanquin", sans-serif;
    font-weight: 700;
    font-size: 22px;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    width: 100%;
  }

  label {
    font-size: 14px;
    font-weight: 400;
    display: block;
  }

  input {
    width: 100%;
    padding: 0rem 0.6rem;
    font-size: 14px;
    margin: 0.5rem 0 1rem 0;
  }

  .inputText {
    height: 3rem;
    border: 2px solid #716e68;
    border-radius: 0.5rem;
    width: 95%;
  }

  .botao {
    height: 3.5rem;
    background: #7fa492;
    border: 2px solid #7fa492;
    border-radius: 10px;
    font-size: 18px;
    color: #ffffff;
    margin-top: 4rem;
    cursor: pointer;
  }

  .textoSenha {
    text-align: end;
    margin-top: 1.438rem;
    font-size: 14px;
  }

  .textoCadastro {
    text-align: center;
    margin-top: 1.438rem;
    font-size: 14px;
  }

  .textoFuncionalidade {
    text-align: center;
    margin-top: 4.5rem;
    font-size: 14px;
  }

  .link {
    color: #000;
  }

  .active-link {
    color: #000;
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
  }
`;
