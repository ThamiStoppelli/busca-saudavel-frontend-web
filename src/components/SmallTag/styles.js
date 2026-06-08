import styled from 'styled-components';

const base = `
  min-height: 1.85rem;
  padding: 0.35rem 0.7rem;
  border: 1px solid #7fa492;
  border-radius: 999px;
  cursor: pointer;
  margin: 0;
  transition: transform 0.16s ease, box-shadow 0.16s ease;

  span {
    font-size: 0.78rem;
    font-weight: 700;
  }

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 0.45rem 1rem rgba(127, 164, 146, 0.16);
  }
`;

export const Container = styled.button`
  ${base}
  background: #ffffff;

  span {
    color: #5f7f70;
  }
`;

export const ContainerAtivo = styled.button`
  ${base}
  background-color: #7fa492;

  span {
    color: #ffffff;
  }
`;
