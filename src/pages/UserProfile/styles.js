import styled from "styled-components";

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

  @media only screen and (max-width: 700px) {
    padding: 1.25rem;
    border-radius: 1.25rem;
  }
`;

export const ContainerNome = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.5rem;
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

  button {
    border: none;
    border-radius: 999px;
    background: #7fa492;
    color: #ffffff;
    font-size: 0.95rem;
    font-weight: 700;
    padding: 0.7rem 1rem;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    transition: transform 0.15s ease, opacity 0.15s ease;
  }

  button:hover {
    transform: translateY(-1px);
    opacity: 0.92;
  }

  button img {
    width: 1rem;
    height: 1rem;
    filter: brightness(0) invert(1);
  }

  @media only screen and (max-width: 560px) {
    flex-direction: column;

    button {
      width: 100%;
      justify-content: center;
    }
  }
`;

export const ContainerConteudo = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 14rem 1fr;
  gap: 2rem;
  align-items: start;

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

  .profileField {
    background: #f9f8f6;
    border: 1px solid #ebe6dc;
    border-radius: 1rem;
    padding: 1rem;
    box-sizing: border-box;
  }

  .label {
    font-size: 0.82rem;
    font-weight: 800;
    color: #716e68;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    margin: 0 0 0.4rem;
  }

  .value {
    color: #20201e;
    font-size: 1rem;
    line-height: 1.4;
    margin: 0;
    word-break: break-word;
  }

  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;