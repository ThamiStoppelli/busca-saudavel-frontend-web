import styled from 'styled-components';

export const Container = styled.article`
  box-sizing: border-box;
  width: 100%;
  display: grid;
  grid-template-columns: 10.5rem 1fr;
  gap: 1.25rem;
  align-items: stretch;
  border: 1px solid #e3dfd6;
  border-radius: 1.25rem;
  background: #ffffff;
  padding: 1rem;
  box-shadow: 0 0.75rem 2rem rgba(61, 58, 53, 0.06);
  transition: transform 0.16s ease, box-shadow 0.16s ease, border-color 0.16s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: #c0dccc;
    box-shadow: 0 1rem 2.4rem rgba(61, 58, 53, 0.1);
  }

  @media only screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductImage = styled.button`
  border: 0;
  border-radius: 1rem;
  background: linear-gradient(135deg, #eef5ef 0%, #ffffff 100%);
  padding: 0.75rem;
  min-height: 9rem;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    min-height: 7.5rem;
    object-fit: contain;
    display: block;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 0;
  padding: 0.25rem 0.25rem 0.25rem 0;
`;

export const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  .eyebrow {
    margin: 0 0 0.25rem;
    color: #7fa492;
    font-size: 0.76rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  h3 {
    margin: 0;
    color: #3d3a35;
    font-size: 1.2rem;
    line-height: 1.25;
    cursor: pointer;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-shrink: 0;

  button {
    width: 2.25rem;
    height: 2.25rem;
    border: 1px solid #e3dfd6;
    border-radius: 999px;
    background: #ffffff;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.16s ease, box-shadow 0.16s ease;
  }

  button:hover {
    transform: translateY(-1px);
    box-shadow: 0 0.45rem 1.1rem rgba(61, 58, 53, 0.12);
  }

  img {
    width: 1rem;
    height: 1rem;
  }
`;

export const MetaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
  margin: 1rem 0 0.9rem;

  div {
    border: 1px solid #ede8df;
    border-radius: 0.9rem;
    padding: 0.75rem;
    background: #faf9f6;
  }

  span {
    display: block;
    margin-bottom: 0.25rem;
    color: #716e68;
    font-size: 0.78rem;
  }

  strong {
    color: #3d3a35;
    font-size: 0.92rem;
    font-weight: 700;
  }

  @media only screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const TagsPreview = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;

  span {
    display: inline-flex;
    align-items: center;
    min-height: 1.45rem;
    padding: 0.2rem 0.55rem;
    border-radius: 999px;
    background: #edf4ef;
    color: #5f7f70;
    font-size: 0.72rem;
    font-weight: 700;
  }
`;
