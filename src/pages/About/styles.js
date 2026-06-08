import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f6f6f6;
  padding: 4rem 2rem 6rem;

  .hero,
  .teamHeader {
    max-width: 48rem;
    margin: 0 auto 2.5rem;
    text-align: center;
  }

  .teamHeader {
    margin-top: 4rem;
  }

  h2 {
    font-family: 'Palanquin', sans-serif;
    font-weight: 700;
    font-size: clamp(2rem, 4vw, 3rem);
    line-height: 1.1;
    margin: 0 0 1rem;
    color: #3d3a35;
  }

  .hero p,
  .teamHeader p {
    color: #716e68;
    font-size: 1rem;
    line-height: 1.55;
    margin: 0;
  }

  @media only screen and (max-width: 560px) {
    padding: 2.5rem 1rem 4rem;
  }
`;

export const Content = styled.section`
  width: 100%;
  max-width: 64rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 18rem 1fr;
  gap: 2rem;
  align-items: center;
  background: #ffffff;
  border: 1px solid rgba(127, 164, 146, 0.4);
  border-radius: 1.5rem;
  padding: 2rem;
  box-sizing: border-box;
  box-shadow: 0 1.25rem 3rem rgba(32, 32, 30, 0.08);

  .logoCard {
    background: #f6f6f6;
    border: 1px solid #e7e1d7;
    border-radius: 1.25rem;
    width: 18rem;
    height: 18rem;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    box-sizing: border-box;
  }

  .logoCard img {
    width: 80%;
    height: auto;
    object-fit: contain;
  }

  .textCard {
    min-width: 0;
  }

  h3 {
    color: #3d3a35;
    font-size: clamp(1.2rem, 2.5vw, 1.8em);
    font-weight: 700;
    line-height: 1.2;
    margin: 0 0 1rem;
  }

  p {
    color: #3d3a35;
    font-size: 1rem;
    line-height: 1.65;
    margin: 0 0 1rem;
  }

  p:last-child {
    margin-bottom: 0;
  }

  @media only screen and (max-width: 850px) {
    grid-template-columns: 1fr;
    text-align: left;

    .logoCard {
      width: 14rem;
      height: 14rem;
      margin: 0 auto;
    }
  }

  @media only screen and (max-width: 560px) {
    padding: 1.25rem;
    border-radius: 1.25rem;

    .logoCard {
      width: 12rem;
      height: 12rem;
    }
  }
`;

export const ContentCards = styled.div`
  width: 100%;
  max-width: 64rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.25rem;

  @media only screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media only screen and (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;