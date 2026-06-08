import styled from 'styled-components';

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

export const Container = styled.div`
  background-color: #f6f6f6;
  padding: 4rem 2rem 6rem;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 560px) {
    padding: 2rem 1rem 4rem;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 34rem;
  background: #ffffff;
  border: 1px solid rgba(127, 164, 146, 0.4);
  border-radius: 1.5rem;
  padding: 2rem;
  box-sizing: border-box;
  box-shadow: 0 1.25rem 3rem rgba(32, 32, 30, 0.08);

  .headerText {
    margin-bottom: 2rem;
  }

  h1 {
    font-family: 'Palanquin', sans-serif;
    font-weight: 700;
    font-size: clamp(1.7rem, 4vw, 2rem);
    line-height: 1.15;
    margin: 0 0 0.75rem;
    color: #3d3a35;
  }

  .headerText p {
    color: #716e68;
    font-size: 1rem;
    line-height: 1.45;
    margin: 0;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

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

  .inputText {
    ${fieldStyles}
  }

  .botao {
    width: 100%;
    min-height: 3.2rem;
    background: #7fa492;
    border: none;
    border-radius: 999px;
    font-size: 1rem;
    font-weight: 700;
    color: #ffffff;
    cursor: pointer;
    transition: transform 0.15s ease, opacity 0.15s ease;
  }

  .botao:hover {
    transform: translateY(-1px);
    opacity: 0.92;
  }

  .linksArea {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    text-align: center;
  }

  .linksArea p {
    margin: 0;
    font-size: 0.95rem;
    color: #716e68;
  }

  .link,
  .active-link {
    color: #527462;
    font-weight: 700;
    text-decoration: none;
  }

  .link:hover,
  .active-link:hover {
    text-decoration: underline;
  }

  @media only screen and (max-width: 560px) {
    padding: 1.25rem;
    border-radius: 1.25rem;
  }
`;