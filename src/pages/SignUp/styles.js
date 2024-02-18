import styled from "styled-components";

export const Container = styled.div`
  background-color: #f6f6f6;
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
  justify-content: center;

  .button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  button {
    height: 4rem;
    background: #7fa492;
    border: 2px solid #7fa492;
    border-radius: 10px;
    font-size: 20px;
    font-weight: 600;
    color: #ffffff;
    margin-top: 2rem;
    cursor: pointer;
    width: 30rem;
  }

  .type-user {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .type-user h4 {
    font-weight: 500;
    font-size:16px;
  }

  .radio-button label {
    padding-left: 0.5rem;
  }

  .radio-button input[type="radio"] {
    accent-color: #716e68;
  }
`;

export const InputContent = styled.div`
  margin: 2rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: left;

  label {
    font-size: 16px;
    font-weight: 400;
    display: block;
  }

  input {
    width: 37rem;
    font-size: 16px;
    margin: 0.5rem 0 1rem 0;
  }

  .inputText {
    height: 3rem;
    border: 2px solid #716e68;
    border-radius: 0.5rem;
    font-size: 16px;
  }
`;
