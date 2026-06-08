import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Content = styled.li`
  a {
    min-width: 2.4rem;
    min-height: 2.4rem;
    padding: 0 0.85rem;
    border: 1px solid #d9d5cc;
    border-radius: 999px;
    background-color: #ffffff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #5f7f70;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 700;
    box-sizing: border-box;
    transition: background-color 0.16s ease, color 0.16s ease, border-color 0.16s ease;
  }

  a:hover {
    border-color: #7fa492;
    background-color: #edf4ef;
  }

  &.active a {
    border-color: #7fa492;
    background-color: #7fa492;
    color: #ffffff;
  }

  a.disabled {
    color: #b8b3aa;
    pointer-events: none;
    background-color: #f4f2ee;
  }
`;
