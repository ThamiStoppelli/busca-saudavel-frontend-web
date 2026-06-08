import styled from 'styled-components';

export const OuterContainer = styled.div`
  background-color: #f6f6f6;
  padding: 4rem 2rem 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.section`
  box-sizing: border-box;
  border: 1px solid #dfe6e1;
  border-radius: 1.5rem;
  width: 100%;
  max-width: 62rem;
  padding: 1.5rem;
  background: #ffffff;
  box-shadow: 0 1rem 2.8rem rgba(61, 58, 53, 0.07);
`;

export const ContainerNome = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 3rem 1fr 3rem;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;

  p {
    font-size: 1.35rem;
    font-weight: 700;
    text-align: center;
    color: #20201e;
    margin: 0;
  }

  img {
    width: 2.25rem;
    height: 2.25rem;
    padding: 0.55rem;
    border: 1px solid #e3dfd6;
    border-radius: 999px;
    background: #fff;
    box-sizing: border-box;
    cursor: pointer;
  }
`;

export const ContainerConteudo = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 16rem 1fr;
  gap: 1.5rem;
  align-items: center;

  .containerImage {
    background: linear-gradient(135deg, #eef5ef 0%, #ffffff 100%);
    border: 1px solid #ede8df;
    border-radius: 1.25rem;
    aspect-ratio: 1 / 1;
    padding: 1rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media only screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const Content = styled.div`
  display: grid;
  gap: 0.35rem;

  p {
    font-size: 1rem;
    margin: 0 0 0.65rem;
    color: #3d3a35;
  }

  .bold {
    font-weight: 700;
    margin-bottom: 0;
    color: #20201e;
  }
`;
