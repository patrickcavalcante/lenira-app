import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
  margin-top: -5rem;
  max-width: 1120px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-top: -15rem;
    max-width: 380px;
  }
  div {
    background: ${(props) => props.theme.colors.shape};
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: ${(props) => props.theme.colors.textTitle};
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }
    img {
      height: 32px;
    }
    &.highlight-background {
      background: ${(props) => props.theme.colors.green};
      color: #fff;
    }
  }
`;
