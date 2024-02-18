import styled from 'styled-components';

export const Container = styled.ul` 
  display: flex;
  justify-content: center;
  gap: 0.8rem;
`;

export const Content = styled.li` 
  display: flex;
  justify-content: center;
  background-color: #7FA492;
  padding: 0.5rem;
  border-radius: 0.61rem;

  a {
    text-decoration: none;
    color: white;
  }

  img {
    height: 0.8rem;
  }
`;

