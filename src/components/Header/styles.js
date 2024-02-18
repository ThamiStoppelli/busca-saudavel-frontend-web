import styled from "styled-components";

export const Container = styled.div`
  background-color: #7fa492;

  .active-link {
    text-decoration: underline;
    text-underline-offset: 12px;
    color: #ffffff;
    h2 {
      font-weight: 600;
    }
  }

  .link {
    text-decoration: none;
    color: #ffffff;
  }

  .access {
    text-decoration: none;
    color: #ffffff;
    h3 {
      font-weight: 600;
    }
  }
  @media only screen and (max-width: 760px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: #ffffff;
  margin: 0rem 4rem 0rem 2.8rem;
  padding: 1.2rem 0.4rem;

  .logo {
    max-width: 25rem;
    min-width: 10rem;
    width: 28%;
    margin-left: -2rem;
  }

  .navbar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    margin-left: -10%;
  }

  h2 {
    font-family: "Palanquin", sans-serif;
    font-weight: 500;
    font-size: 20px;
  }

  h3 {
    font-family: "Palanquin", sans-serif;
    font-weight: 500;
    font-size: 16px;
  }

  .login-button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    cursor: pointer;
  }

  @media only screen and (max-width: 950px) {
    .navbar {
      gap: 1.5rem;
      margin-left: -4rem;
    }

    h2 {
      font-size: 16px;
    }

    h3 {
      font-size: 14px;
    }
  }

  @media only screen and (max-width: 760px) {
    .navbar {
      display: none;
    }
    .login-button {
      display: none;
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

export const Menu = styled.img`
  display: none;

  @media only screen and (max-width: 760px) {
    display: flex;
    height: 2rem;
    margin-right: 2rem;
  }

  :hover {
    cursor: pointer;
  }
`;
