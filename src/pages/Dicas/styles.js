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
  background-color: #f6f6f6;
  padding: 4rem 2rem 6rem;

  .hero {
    max-width: 48rem;
    margin: 0 auto 2.5rem;
    text-align: center;
  }

  .hero h2 {
    font-size: clamp(2rem, 4vw, 2.5rem);
    font-weight: 700;
    color: #3d3a35;
    line-height: 1.1;
    margin: 0 0 1rem;
  }

  .hero p {
    color: #716e68;
    font-size: 1rem;
    line-height: 1.55;
    margin: 0;
  }

  @media only screen and (max-width: 560px) {
    padding: 2.5rem 1rem 4rem;
  }
`;

export const ContainerBusca = styled.div`
  width: 100%;
  max-width: 48rem;
  margin: 0 auto 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    ${fieldStyles}
    max-width: 43.75rem;
  }

  .resultCount {
    color: #716e68;
    font-size: 0.92rem;
    margin: 1rem 0 0;
  }
`;

export const ContainerTags = styled.div`
  width: 100%;
  margin: 1.25rem auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.6rem;
`;

export const ContainerCards = styled.div`
  width: 100%;
  max-width: 64rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  .emptyState {
    background: #ffffff;
    border: 1px solid rgba(127, 164, 146, 0.35);
    border-radius: 1.5rem;
    padding: 2rem;
    text-align: center;
    box-shadow: 0 1.25rem 3rem rgba(32, 32, 30, 0.06);
  }

  .emptyState h3 {
    margin: 0 0 0.5rem;
    color: #20201e;
    font-size: 1.25rem;
  }

  .emptyState p {
    margin: 0;
    color: #716e68;
    font-size: 0.95rem;
  }
`;