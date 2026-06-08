import styled from 'styled-components';

export const Container = styled.article`
  box-sizing: border-box;
  width: 100%;
  background: #ffffff;
  border: 1px solid rgba(127, 164, 146, 0.4);
  border-radius: 1.5rem;
  padding: 1.5rem;
  overflow: hidden;
  box-shadow: 0 1.25rem 3rem rgba(32, 32, 30, 0.06);
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 1.5rem 3.5rem rgba(32, 32, 30, 0.09);
  }

  @media only screen and (max-width: 700px) {
    padding: 1rem;
    border-radius: 1.25rem;
  }
`;

export const ContainerTitulo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.25rem;

  h3 {
    color: #3d3a35;
    font-size: clamp(1.25rem, 2vw, 1.55rem);
    font-weight: 800;
    line-height: 1.2;
    margin: 0;
  }

  p {
    color: #716e68;
    font-size: 0.9rem;
    margin: 0.35rem 0 0;
  }

  button {
    width: 2.5rem;
    height: 2.5rem;
    flex: 0 0 auto;
    border: 1px solid #e7e1d7;
    border-radius: 999px;
    background: #f9f8f6;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.15s ease, transform 0.15s ease;
  }

  button:hover {
    background: #f0f5f2;
    transform: scale(1.03);
  }

  button img {
    width: 1.25rem;
    height: 1.25rem;
    object-fit: contain;
  }
`;

export const ContainerConteudo = styled.div`
  display: grid;
  grid-template-columns: 18rem 1fr;
  gap: 1.5rem;
  align-items: start;

  img {
    width: 100%;
    height: 13rem;
    object-fit: cover;
    border-radius: 1.1rem;
    background: #f6f6f6;
  }

  div {
    min-width: 0;
  }

  p {
    color: #3d3a35;
    font-size: 1rem;
    line-height: 1.6;
    margin: 0;
  }

  @media only screen and (max-width: 830px) {
    grid-template-columns: 1fr;

    img {
      height: 15rem;
    }
  }

  @media only screen and (max-width: 550px) {
    img {
      height: 12rem;
    }

    p {
      font-size: 0.95rem;
    }
  }
`;

export const ContainerNutri = styled.div`
  margin-top: 1.5rem;
  padding-top: 1.25rem;
  border-top: 1px solid #ebe6dc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;

  .nutri {
    display: flex;
    align-items: center;
    gap: 0.85rem;
    min-width: 0;
  }

  .nutri img {
    border-radius: 50%;
    height: 3.5rem;
    width: 3.5rem;
    object-fit: cover;
    flex: 0 0 auto;
  }

  span {
    display: block;
    color: #716e68;
    font-size: 0.78rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    margin-bottom: 0.25rem;
  }

  p {
    color: #20201e;
    font-size: 0.95rem;
    font-weight: 700;
    margin: 0;
  }

  .tags {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 0.5rem;
  }

  li {
    color: #527462;
    background: #f3f8f5;
    border: 1px solid rgba(127, 164, 146, 0.35);
    border-radius: 999px;
    padding: 0.4rem 0.7rem;
    font-size: 0.82rem;
    font-weight: 700;
  }

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;

    .tags {
      align-items: flex-start;
    }

    ul {
      justify-content: flex-start;
    }
  }
`;