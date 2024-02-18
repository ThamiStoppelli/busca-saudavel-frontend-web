import styled from "styled-components";

export const OuterContainer = styled.div`
  background-color: #f6f6f6;
  padding: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Container = styled.div`
  box-sizing: border-box;
  border: 0.2rem solid #7FA492;
  border-radius: 1rem;
  width: 100%;
  max-width: 75rem;
  max-height: 25.509rem;
  padding: 2rem;
  overflow: hidden;

  @media only screen and (max-width: 1024px) {
    max-height: 30rem;
  }

  @media only screen and (max-width: 700px) {
    max-height: 60rem;
    padding: 1.5rem;
  }
`;

export const ContainerNome = styled.div` 
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 1.366rem;
    font-weight: 600;
    margin: 0;
    cursor: pointer;
  }

  img:hover {
    cursor: pointer;
  }

  div {
    display: flex;
    gap: 1rem;
    img {
      width: 2rem;
    }
  }
`;

export const ContainerConteudo = styled.div` 
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  .containerImage{
    background-color: white;
    height: 16.48rem;
    width: 16.48rem;
    margin: 0 auto;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    height: 120px;
    width: 180px;
    max-height: 100%;
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }

  @media only screen and (max-width: 425px) {
    .containerImage{
      width: 60%;
      height: auto;
      margin: 2rem auto;
    }
  }
`;

export const Content = styled.div` 
  width: 65%;
  padding-left: 2rem;
  height: auto;
  display: flex;
  justify-content: space-between;

  p {
    font-size: 1.117rem;
    margin-bottom: 1.5rem;
  }

  .bold{
    font-weight: 600;
    margin-bottom: 0.3rem;
  }

  div {
    width: 50%;
  }

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    div {
        width: 90%;
    }
  }

  @media only screen and (max-width: 700px) {
    padding-left: 0;
    width: 100%;
  }
`;