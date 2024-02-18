import styled from 'styled-components';

export const Container = styled.div` 
  background-color: #F6F6F6;
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
  }
`;

export const Content = styled.div` 
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
  img {
    width: 45%;
    height: auto;
    max-width:666px;
    margin-right: 2rem;
  }
  p{
    width: 45%;
    max-width:555px;
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 2rem;
  }

  @media only screen and (max-width: 1024px) {
    flex-direction: column;

    img {
      width: auto;
      height: 12rem;
      margin-bottom: 1rem;
      margin-right: 0;
    }
    p{
      width: 90%;
    }
  }

  @media only screen and (max-width: 560px) {
    img {
      height: 9rem;
    }
    p{
      width: 100%;
    }
  }
`;

export const ContentCards = styled.div` 
  display: flex;
  flex-direction: row;
  overflow-x: scroll;

  @media only screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
  }
`;