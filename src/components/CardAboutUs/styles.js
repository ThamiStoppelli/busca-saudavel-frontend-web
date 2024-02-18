import styled from 'styled-components';

export const Container = styled.div` 
  background-color: #C0DCCC;
  padding: 2.6rem 1.5rem;
  margin-right: 4rem;
  border-radius: 1rem;
  width: 48rem;
  min-width: 48rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  h3{
    font-size: 1.125;
    font-weight: 700;
    color: #716E68;
  }
  p{
    font-size: 1.125;
    font-weight: 500;
    color: #716E68;
    line-height: 2rem;
  }
  .foto {
    width: 12rem;
    height: 12rem;
    border-radius:50%;
    margin-right: 2rem;
  }
  .icone{
    margin-right: 1rem;
    height: 2.25rem;
    width: 2.25rem;
  }

  @media only screen and (max-width: 1024px) {
    margin-right: 0;
    margin-bottom: 2rem;
    width: 90%;
    min-width: 0;
    .foto {
      width: 8rem;
      height: 8rem;
      margin-right: 2rem;
    }
  }

   screen and (max-width: 560px) {
    .foto {
      width: 6rem;
      height: 6rem;
      margin-right: 1rem;
    }
    p{
      display: none;
    }
  }
`;