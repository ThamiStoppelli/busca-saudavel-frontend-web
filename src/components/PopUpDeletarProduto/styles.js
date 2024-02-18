import styled from "styled-components";

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

  .delete-button {
    border-radius: 4px;
    margin-bottom: 20px;
    background-color: #CA282C;
    color: white;
    font-size: 14px;
    font-weight: 500;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    padding: 16px 48px;
    height: 2.4rem;
  }
`;
