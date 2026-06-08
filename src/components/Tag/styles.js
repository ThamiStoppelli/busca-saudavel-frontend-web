import styled from 'styled-components';

export const Container = styled.button`
  min-height: 2.5rem;
  padding: 0.55rem 1rem;
  border: 1px solid ${({ $active }) => ($active ? '#7FA492' : '#cfd8d2')};
  border-radius: 999px;
  background-color: ${({ $active }) => ($active ? '#7FA492' : '#ffffff')};
  color: ${({ $active }) => ($active ? '#ffffff' : '#5f7f70')};
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1;
  transition: transform 0.16s ease, box-shadow 0.16s ease, background-color 0.16s ease, border-color 0.16s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 0.45rem 1.25rem rgba(127, 164, 146, 0.18);
    border-color: #7FA492;
  }

  &:focus-visible {
    outline: 3px solid rgba(127, 164, 146, 0.28);
    outline-offset: 2px;
  }
`;
