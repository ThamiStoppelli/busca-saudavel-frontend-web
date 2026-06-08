import styled from 'styled-components';

export const Container = styled.article`
  background-color: #ffffff;
  border: 1px solid rgba(127, 164, 146, 0.4);
  border-radius: 1.5rem;
  padding: 1.5rem;
  box-sizing: border-box;
  width: 100%;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 1.25rem 3rem rgba(32, 32, 30, 0.06);
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 1.5rem 3.5rem rgba(32, 32, 30, 0.09);
  }

  .foto {
    width: 7.5rem;
    height: 7.5rem;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #f3f8f5;
    margin-bottom: 1rem;
  }

  .content {
    width: 100%;
  }

  h3 {
    font-size: 1.05rem;
    line-height: 1.25;
    font-weight: 800;
    color: #20201e;
    margin: 0 0 0.6rem;
  }

  p {
    font-size: 0.92rem;
    font-weight: 500;
    color: #716e68;
    line-height: 1.5;
    margin: 0 0 1rem;
  }

  .socialLinks {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
  }

  a {
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 999px;
    border: 1px solid #e7e1d7;
    background: #f9f8f6;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: background 0.15s ease, transform 0.15s ease;
  }

  a:hover {
    background: #f0f5f2;
    transform: translateY(-1px);
  }

  .icone {
    height: 1.15rem;
    width: 1.15rem;
    object-fit: contain;
  }

  @media only screen and (max-width: 620px) {
    flex-direction: row;
    text-align: left;
    align-items: center;
    gap: 1rem;

    .foto {
      width: 5.5rem;
      height: 5.5rem;
      margin-bottom: 0;
      flex: 0 0 auto;
    }

    .socialLinks {
      justify-content: flex-start;
    }
  }

  @media only screen and (max-width: 420px) {
    flex-direction: column;
    text-align: center;

    .foto {
      width: 6rem;
      height: 6rem;
    }

    .socialLinks {
      justify-content: center;
    }
  }
`;