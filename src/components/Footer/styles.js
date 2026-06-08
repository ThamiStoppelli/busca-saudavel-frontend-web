import styled from 'styled-components';

export const ContainerGeral = styled.footer`
  background-color: #7fa492;
  margin: 0;
  padding: 2rem 5rem 1.25rem;
  color: white;

  .copyright {
    text-align: center;
    margin: 2rem 0 0;
    color: rgba(255, 255, 255, 0.88);
    font-size: 0.95rem;
  }

  .icon {
    height: 1.5rem;
    width: 1.5rem;
    transition: transform 0.15s ease, opacity 0.15s ease;
  }

  .icon:hover {
    transform: translateY(-2px);
    opacity: 0.86;
  }

  .logo {
    width: 18rem;
    max-width: 100%;
  }

  @media only screen and (max-width: 1024px) {
    padding: 2rem 3rem 1.25rem;

    .logo {
      width: 15rem;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 2rem 2rem 1.25rem;
  }

  @media only screen and (max-width: 425px) {
    padding: 2rem 1.25rem 1.25rem;

    .logo {
      width: 13rem;
    }
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 75rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 4rem;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const ContainerDados = styled.div`
  width: 21rem;
  flex-shrink: 0;

  p {
    color: rgba(255, 255, 255, 0.92);
    font-size: 1rem;
    line-height: 1.45;
    margin: 1rem 0 1.25rem;
  }

  .socialLinks {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  @media only screen and (max-width: 1024px) {
    width: 18rem;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ContainerDadosLink = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;

  ul {
    padding: 0;
    margin: 0;
  }

  p {
    color: white;
    font-size: 0.9rem;
    font-weight: 800;
    letter-spacing: 0.04em;
    margin: 0 0 1rem;
  }

  li {
    list-style: none;
    margin-bottom: 0.75rem;
  }

  a {
    color: rgba(255, 255, 255, 0.88);
    text-decoration: none;
    font-size: 0.98rem;
    line-height: 1.3;
    transition: color 0.15s ease, opacity 0.15s ease;
  }

  a:hover {
    color: white;
    opacity: 0.82;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
  }

  @media only screen and (max-width: 560px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;