import styled from 'styled-components';

export const Container = styled.header`
  background: ${(props) => props.theme.colors.blue};
  width: 100vw;
`;

export const Content = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  padding: 2rem 1rem 18rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    width: 240px;
    justify-content: center;
    align-items: center;

    img {
      width: 48px;
    }

    h1 {
      font-size: 24px;
      color: #fff;
      margin-top: 0px;
      margin-left: 15px;
    }
  }
`;

export const Card = styled.div`
  font-size: 1rem;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  button {
    color: #fff;
    background: ${(props) => props.theme.colors.blueLight};
    padding: 0 1.5em;
    border-radius: 0.25rem;
    height: 3rem;
    border: none;
    transition: filter 0.2s;
    border: none;
    font-size: 18px;
    justify-content: center;
    align-items: center;
    display: flex;
    cursor: pointer;
  }
  img {
    height: 24px;
    width: 24px !important;
    margin-right: 10px;
  }
  &:hover {
    filter: brightness(0.9);
  }
`;
