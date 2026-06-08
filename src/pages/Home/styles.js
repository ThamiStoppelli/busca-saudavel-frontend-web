import styled from 'styled-components';

export const Container = styled.main`
  background: #f8f7f3;
  min-height: 70vh;
  padding: 4rem 1.5rem 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .hero-search {
    width: 100%;
    max-width: 56rem;
    text-align: center;
    margin-bottom: 2rem;
  }

  .eyebrow {
    margin: 0 0 0.75rem;
    color: #7fa492;
    font-size: 0.875rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  h2 {
    margin: 0;
    color: #3d3a35;
    font-size: clamp(2rem, 4vw, 3rem);
    line-height: 1.1;
    font-weight: 700;
    letter-spacing: -0.03em;
  }

  .subtitle {
    max-width: 42rem;
    margin: 1rem auto 0;
    color: #716e68;
    font-size: 1rem;
    line-height: 1.6;
  }

  @media only screen and (max-width: 768px) {
    padding: 3rem 1rem 4rem;
  }
`;

export const ContainerBusca = styled.section`
  width: 100%;
  max-width: 58rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;

  input {
    width: 100%;
    height: 3rem;
    border-radius: 999px;
    border: 1px solid #d9d5cc;
    background-color: #ffffff;
    color: #3d3a35;
    font-size: 0.95rem;
    line-height: 1;
    padding: 0 1.25rem;
    box-sizing: border-box;
    box-shadow: 0 0.5rem 1.5rem rgba(113, 110, 104, 0.08);
    outline: none;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }

  input::placeholder {
    color: #8b8881;
  }

  input:focus {
    border-color: #7fa492;
    box-shadow: 0 0 0 4px rgba(127, 164, 146, 0.18);
  }
`;

export const ContainerTags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.6rem;
`;

export const SearchSummary = styled.p`
  width: 100%;
  max-width: 75rem;
  margin: 2rem auto 0.75rem;
  color: #716e68;
  font-size: 0.95rem;
  text-align: left;

  strong {
    color: #3d3a35;
  }

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const ContainerProdutos = styled.section`
  width: 100%;
  max-width: 75rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(14.5rem, 1fr));
  gap: 1.25rem;
`;

export const ContainerPaginacao = styled.div`
  width: 100%;
  max-width: 50rem;
  margin: 2rem auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EmptyState = styled.div`
  width: 100%;
  max-width: 42rem;
  margin: 1.5rem auto 0;
  padding: 2rem;
  border: 1px solid #e3dfd6;
  border-radius: 1.25rem;
  background: #ffffff;
  color: #716e68;
  text-align: center;
  box-sizing: border-box;
`;
