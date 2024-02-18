import styled from "styled-components";

export const ContainerGeral = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: flex-end;
`;

export const Container = styled.div`
  width: 20rem;
  background-color: #7fa492;

  @media only screen and (max-width: 760px) {
    width: 40vw;
  }

  @media only screen and (max-width: 600px) {
    width: 60vw;
  }

  @media only screen and (max-width: 340px) {
    width: 15rem;
  }
`;

export const BtnFechar = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
  height: 2rem;

  :hover {
    cursor: pointer;
  }
`;

export const Lista = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 4rem 1rem;
  justify-content: space-between;
  align-items: flex-start;
  height: 85vh;

  h2 {
    font-size: 22px;
    margin-top: 1rem;
    color: #ffffff;
    font-weight: 600;
  }

  h2 :hover {
    cursor: pointer;
    text-decoration: underline;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .login-button {
    display: flex;
    flex-direction: row;
    gap: 0.6rem;
    cursor: pointer;
    margin-top: 1rem;
    margin-bottom: -0.8rem;
  }

  h3 {
    font-size: 20px;
    text-decoration: none;
    margin-top: 1rem;
    color: #ffffff;
    font-weight: 600;
  }

  @media only screen and (max-height: 480px) {
    height: 80vh;

    h2 {
      font-size: 18px;
    }

    h3 {
      font-size: 18px;
    }

    .content {
      gap: 0rem;
    }
  }
`;

export const ConfirmPopUp = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: hsla(0, 0%, 15%, 0.171);

  .confirm-popup {
    display: flex;
    flex-direction: column;
    gap: 18px;
    background-color: white;
    width: 20rem;
    border-radius: 8px;
    justify-content: center;
    align-items: left;
    cursor: default;
  }

  .textarea-popup {
    margin-left: 1.2rem;
    margin-top: 1.2rem;
    margin-right: 1.2rem;
  }

  .textarea-popup p {
    margin-bottom: 0.8rem;
    margin-top: 0.5rem;
    font-size: 18px;
    font-weight: 500;
  }

  .textarea-popup span {
    font-size: 14px;
    margin-bottom: 0.8rem;
  }

  .buttons-popup {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-right: 20px;
    gap: 10px;
  }

  .cancel-button {
    background-color: white;
    width: 80px;
    height: 45px;
    border-radius: 4px;
    margin-bottom: 20px;
    font-size: 14px;
    font-weight: 500;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .exit-button {
    border-radius: 4px;
    margin-bottom: 20px;
    background-color: #ca282c;
    color: white;
    font-size: 14px;
    font-weight: 500;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 2.4rem;
  }
`;
