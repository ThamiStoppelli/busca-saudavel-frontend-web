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
  max-width: 40rem;
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
    font-size: clamp(1.8rem, 4vw, 2rem);
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
    width: 100%;
  }

  .button {
    display: flex;
    justify-content: flex-end;
    margin-top: 2rem;
  }

  button {
    background: #7fa492;
    border: none;
    border-radius: 999px;
    font-size: 1rem;
    font-weight: 700;
    color: #ffffff;
    cursor: pointer;
    padding: 0.85rem 1.5rem;
    min-width: 10rem;
    transition: transform 0.15s ease, opacity 0.15s ease;
  }

  button:hover {
    transform: translateY(-1px);
    opacity: 0.92;
  }

  .type-user {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .type-user h4 {
    font-weight: 800;
    font-size: 0.95rem;
    color: #3d3a35;
    margin: 0 0 0.25rem;
  }

  .optionCard {
    display: flex;
    gap: 0.75rem;
    align-items: flex-start;
    border: 1px solid #e1dbd1;
    border-radius: 1rem;
    padding: 1rem;
    cursor: pointer;
    background: #ffffff;
    transition: border-color 0.15s ease, background 0.15s ease, box-shadow 0.15s ease;
  }

  .optionCard:hover {
    border-color: #7fa492;
    background: #f9fbfa;
  }

  .optionCard.active {
    border-color: #7fa492;
    background: #f3f8f5;
    box-shadow: 0 0 0 3px rgba(127, 164, 146, 0.12);
  }

  .optionCard input[type="radio"] {
    accent-color: #7fa492;
    margin-top: 0.2rem;
  }

  .optionCard span {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .optionCard strong {
    color: #20201e;
    font-size: 0.98rem;
  }

  .optionCard small {
    color: #716e68;
    font-size: 0.88rem;
    line-height: 1.35;
  }

  @media only screen and (max-width: 560px) {
    padding: 1.25rem;
    border-radius: 1.25rem;

    .button {
      justify-content: stretch;
    }

    button {
      width: 100%;
    }
  }
`;

export const InputContent = styled.div`
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: 1fr;
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

  .inputText {
    ${fieldStyles}
  }
`;