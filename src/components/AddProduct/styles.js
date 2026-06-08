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
  position: fixed;
  inset: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(32, 32, 30, 0.28);
  padding: 1rem;
  box-sizing: border-box;
`;

export const ContainerCard = styled.div`
  z-index: 3;
  width: min(100%, 34rem);
  max-height: calc(100vh - 2rem);
  background-color: white;
  border-radius: 1.25rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  box-shadow: 0 1.5rem 4rem rgba(32, 32, 30, 0.18);
  overflow: hidden;
`;

export const ModalContent = styled.div`
  max-height: calc(100vh - 2rem);
  overflow-y: auto;
  padding: 1.5rem;
  box-sizing: border-box;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    label {
      font-size: 0.88rem;
      font-weight: 700;
      color: #3d3a35;
    }

    input:not([type='file']),
    textarea {
      ${fieldStyles}
    }

    input[type='file'] {
      font-size: 0.86rem;
    }

    textarea {
      min-height: 6.5rem;
      resize: vertical;
      font: inherit;
    }

    .info {
      display: flex;
      flex-direction: column;
      gap: 0.45rem;

      div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 0.4rem;
      }
    }

    .optional {
      color: #716e68;
      font-size: 0.78rem;
      font-weight: 500;
    }

    .textarea {
      letter-spacing: 0;
      font-size: 0.92rem;
    }

    span {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      padding-top: 0.5rem;
    }

    span > img {
      width: 4.6rem;
    }

    .elementos-tabela {
      display: grid;
      grid-template-columns: 1fr 9rem;
      align-items: center;
      gap: 1rem;
      width: 100%;
    }
  }

  @media only screen and (max-width: 520px) {
    padding: 1rem;

    form .elementos-tabela {
      grid-template-columns: 1fr;
      gap: 0.4rem;
    }
  }
`;

export const ModalHeader = styled.div`
  position: sticky;
  top: -1.5rem;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin: -1.5rem -1.5rem 1rem;
  padding: 1.5rem 1.5rem 1rem;
  background: white;

  h3 {
    margin: 0;
    color: #20201e;
    font-size: 1.25rem;
    line-height: 1.25;
  }

  button {
    width: 2.25rem;
    height: 2.25rem;
    flex: 0 0 auto;
    border: none;
    border-radius: 999px;
    background: #f3f5f1;
    color: #44524a;
    font-size: 1.8rem;
    line-height: 1;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 0.2rem;
    transition: background 0.15s ease, transform 0.15s ease;

    &:hover {
      background: #e6ece7;
      transform: scale(1.03);
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(127, 164, 146, 0.22);
    }
  }

  @media only screen and (max-width: 520px) {
    top: -1rem;
    margin: -1rem -1rem 1rem;
    padding: 1rem 1rem 0.8rem;
  }
`;

export const ContainerTags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: 0.2rem;
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;

  p {
    font-size: 0.9rem;
    font-weight: 700;
    cursor: pointer;
    margin: 0;
    color: #3d3a35;
  }

  button {
    background: #7fa492;
    border-radius: 999px;
    padding: 0.7rem 1rem;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
    border: none;
  }
`;