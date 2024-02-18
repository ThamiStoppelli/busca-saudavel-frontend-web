import styled from 'styled-components';

export const Container = styled.div` 
  box-sizing: border-box;
  width: 100%;
  max-width: 1183px;
  border: 0.2rem solid #7FA492;
  border-radius: 0.5rem;
  margin: 0 auto;
  margin-bottom: 2.813rem;
  padding: 2.5rem;
  overflow: hidden;

  @media only screen and (max-width: 700px) {
    padding: 1.5rem;
  }
`;

export const ContainerTitulo = styled.div`
  display: flexbox;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  p {
    font-size:1.375rem;
    font-weight: 600;
  }

  .icon {
    width:1.688rem;
    height:1.5rem;
    cursor: pointer;
  }

  @media only screen and (max-width: 830px) {
    margin-bottom: 2.5rem;
  }

  @media only screen and (max-width: 550px) {
    margin-bottom: 2rem;

    p {
      font-size:1.125rem;
    }

    .icon {
      width:1.3rem;
      height: auto;
      margin-left: 1rem;
    }
  }
`;

export const ContainerConteudo = styled.div`
  display: flexbox;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
  div {
    overflow: clip;
    width: 60%;
    max-height: 21.313rem;
    text-align: justify;
  }

  p {
    font-size:1.125rem;
    font-weight: 500;
    margin-top: 0;
  }

  img {
    width:21.313rem;
    max-height:21.313rem;
    object-fit: cover;
    border-radius: 0.5rem;
  }

  @media only screen and (max-width: 1200px) {
    p {
      margin-left: 2rem;
    }
  }

  @media only screen and (max-width: 1024px) {
    img {
      width:18rem;
      height:auto;
    }

    div {
      height: 18rem;
    }
  }

  @media only screen and (max-width: 830px) {
    flex-flow: column wrap;
    justify-content: center;

    div {
      width: 100%;
      margin: 0;
      margin-top: 2rem;
    }

    p{
      margin: 0;
    }

    img {
      max-height: 18rem;
      width: auto;
      max-width: 90%;
    }
  }

  @media only screen and (max-width: 550px) {
    img {
      max-height: 15rem;
      max-width: 100%;
    }

    p {
      font-size:1rem;
    }
  }
`;

export const ContainerNutri = styled.div`
  margin-top: 2rem;
  display: flexbox;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  img {
    border-radius: 50%;
    height: 6.679rem;
    width:6.679rem;
    object-fit: cover;
    margin-right: 1.5rem;
  }

  p {
    font-size:1.125rem;
    font-weight: 600;
    margin-top: 0; 
  }

  .nutri {
    display: flexbox;
    flex-direction: row;
    align-items: center;
    width:21.313rem;
    overflow: hidden;
  }

  .tags {
    width: 60%;
  }
  
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden; 
  }

  li {
    float: left;
    padding: 1rem;
  }

  @media only screen and (max-width: 1200px) {
    .tags {
      margin-left: 4rem;
    }
  }

  @media only screen and (max-width: 1130px) {
    .tags {
      margin-left: 3.5rem;
    }
  }

  @media only screen and (max-width: 1024px) {
    img {
      height: 5rem;
      width:5rem;
    }

    .nutri {
      width: 15rem;
    }
  }

  @media only screen and (max-width: 830px) {
    flex-flow: column wrap;

    .nutri {
      width: 100%;
      margin: 0;
    }

    .tags {
      width: 100%;
      margin:0;
      margin-top: 2rem;
    }
  }

  @media only screen and (max-width: 550px) {
    p {
      font-size:1rem;
    }

    img {
      height: 4rem;
      width: 4rem;
    }
  }

`;