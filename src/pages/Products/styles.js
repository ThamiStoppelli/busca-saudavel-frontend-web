import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f6f6f6;
  padding: 3rem 4rem 6rem;

  h2 {
    font-size: clamp(1.8rem, 3vw, 2.25rem);
    font-weight: 700;
    color: #3d3a35;
    text-align: center;
    margin: 0 0 2rem;
  }

  @media only screen and (max-width: 1024px) {
    padding: 3rem 2rem 5rem;
  }

  @media only screen and (max-width: 600px) {
    padding: 2rem 1rem 4rem;
  }
`;

export const ContainerBusca = styled.div`
  width: 100%;
  max-width: 76rem;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  input {
    background-color: #ffffff;
    width: min(100%, 34rem);
    height: 3rem;
    border-radius: 999px;
    border: 1px solid #cfc9be;
    padding: 0 1rem;
    color: #3d3a35;
    font-size: 0.95rem;
    box-sizing: border-box;
    transition: border-color 0.16s ease, box-shadow 0.16s ease;
  }

  input:focus {
    outline: none;
    border-color: #7fa492;
    box-shadow: 0 0 0 3px rgba(127, 164, 146, 0.18);
  }

  div {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: #7fa492;
    border-radius: 999px;
    min-height: 3rem;
    padding: 0 1.25rem;
    font-size: 0.95rem;
    font-weight: 700;
    color: white;
    cursor: pointer;
    white-space: nowrap;
    transition: background-color 0.16s ease, transform 0.16s ease;
  }

  div:hover {
    background-color: #6f927f;
    transform: translateY(-1px);
  }

  img {
    height: 1rem;
    margin-right: 0.5rem;
  }

  p {
    margin: 0;
  }

  @media only screen and (max-width: 712px) {
    flex-direction: column;
    align-items: stretch;

    input,
    div {
      width: 100%;
      box-sizing: border-box;
    }
  }
`;

export const ContainerProdutos = styled.div`
  width: 100%;
  max-width: 76rem;
  margin: 1.5rem auto 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
