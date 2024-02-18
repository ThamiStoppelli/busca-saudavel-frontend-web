import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);

  /* background-color: #F6F6F6;
  padding: 2rem 4rem 6rem;
  h2{
    font-size: 36px;
    font-weight: 500;
    color: #716E68;
    text-align: center;
    margin-bottom: 4rem;
  }
  @media only screen and (max-width: 1024px) {
    padding: 4rem 2rem;
  } */
`;

export const ContainerCard = styled.div`
  z-index: 3;
  width: 30rem;
  background-color: white;
  position: absolute;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  grid-gap: 2vh;
  padding: 1.4% 2%;
  align-items: center;
  justify-content: center;

  h3 {
    margin-top: 0.4rem;
    margin-bottom: 0.6rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 28rem;

    label {
      font-size: 14px;
      font-weight: 500;
    }

    .info {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;

      div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 0.4rem;
      }
    }

    .optional {
      color: #716E68;
      font-size: 12px;
    }

    .textarea {
      letter-spacing: -1.2px;
      font-size: 12px;
    }
  
    span {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }

    img {
      width: 5rem;
    }

    .elementos-tabela {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 80%;
    }
  }
`;

export const ContainerTags = styled.div` 
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 0.4rem;
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1rem;
  gap: 1rem;

  p {
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
  }

  button {
    background: #7FA492;
    border-radius: 4px;
    padding: 0.6rem 0.8rem;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    border: none;
  }
`;
