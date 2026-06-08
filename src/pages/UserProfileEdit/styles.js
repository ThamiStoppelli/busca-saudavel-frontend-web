import styled from "styled-components";

const fieldStyles = `
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #cfc9be;
  border-radius: 0.85rem;
  background: #fff;
  color: #20201e;
  font-size: 0.92rem;
  line-height: 1.4;
  padding: 0.72rem 0.85rem;

  &:focus {
    outline: none;
    border-color: #7fa492;
    box-shadow: 0 0 0 3px rgba(127, 164, 146, 0.18);
  }
`;

export const OuterContainer = styled.div`
  background-color: #f6f6f6;
  padding: 4rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 560px) {
    padding: 2rem 1rem;
  }
`;

export const Container = styled.div`
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid rgba(127, 164, 146, 0.4);
  border-radius: 1.5rem;
  width: 100%;
  max-width: 64rem;
  padding: 2rem;
  box-shadow: 0 1.25rem 3rem rgba(32, 32, 30, 0.08);

  form {
    width: 100%;
  }

  @media only screen and (max-width: 700px) {
    padding: 1.25rem;
    border-radius: 1.25rem;
  }
`;

export const ContainerNome = styled.div`
  width: 100%;
  margin-bottom: 2rem;

  p {
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 800;
    margin: 0;
    color: #20201e;
    line-height: 1.2;
  }

  span {
    display: block;
    color: #716e68;
    font-size: 0.95rem;
    margin-top: 0.35rem;
  }
`;

export const ContainerConteudo = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 14rem 1fr;
  gap: 2rem;
  align-items: start;

  .image-div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .containerImage {
    background-color: #f6f6f6;
    border-radius: 1.25rem;
    width: 14rem;
    height: 14rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border: 1px solid #e7e1d7;
  }

  .containerImage img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .image-input {
    display: none;
  }

  .uploadButton {
    margin-top: 1rem;
    border: 1px solid #7fa492;
    border-radius: 999px;
    color: #527462;
    background: #ffffff;
    font-size: 0.9rem;
    font-weight: 700;
    padding: 0.65rem 1rem;
    cursor: pointer;
    transition: background 0.15s ease, transform 0.15s ease;
  }

  .uploadButton:hover {
    background: #f0f5f2;
    transform: translateY(-1px);
  }

  @media only screen and (max-width: 700px) {
    grid-template-columns: 1fr;

    .containerImage {
      width: 12rem;
      height: 12rem;
      margin: 0 auto;
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  .fieldGroup {
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
  }

  label {
    font-size: 0.88rem;
    font-weight: 700;
    color: #3d3a35;
  }

  input {
    ${fieldStyles}
  }

  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Botoes = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;

  button {
    border: none;
    border-radius: 999px;
    font-size: 0.95rem;
    font-weight: 700;
    cursor: pointer;
    padding: 0.8rem 1.4rem;
    min-width: 8rem;
    transition: transform 0.15s ease, opacity 0.15s ease, background 0.15s ease;
  }

  button:hover {
    transform: translateY(-1px);
  }

  .btnSalvar {
    background-color: #7fa492;
    color: white;
  }

  .btnSalvar:hover {
    opacity: 0.92;
  }

  .btnCancelar {
    background: transparent;
    color: #3d3a35;
  }

  .btnCancelar:hover {
    background: #f3f1ed;
  }

  @media only screen and (max-width: 520px) {
    flex-direction: column-reverse;

    button {
      width: 100%;
    }
  }
`;