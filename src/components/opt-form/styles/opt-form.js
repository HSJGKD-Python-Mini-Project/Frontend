import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 20px;
  flex-wrap: wrap;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.input`
  max-width: 500px;
  width: 100%;
  border: 0;
  padding: 10px;
  height: 70px;
  box-sizing: border-box;
  background: #fff;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 70px;
  background: #e50914;
  color: #fff;
  font-size: 23px;
  padding: 0 32px;
  border: 0;
  cursor: pointer;
  &:hover {
    background-color: #f40612;
  }

  @media (max-width: 1000px) {
    height: 50px;
    font-size: 16px;
    margin-top: 20px;
    font-weight: bold;
  }
  svg {
    margin-left: 10px;
    background: #e50914 !important;
    width: 24px;
    height: 24px;
    @media (max-width: 1000px) {
      width: 16px;
    }
  }
`;

export const Text = styled.p`
  text-align: center;
  margin: 1em 2em 0 2em;
  padding: 1em 2em;
  color: #fff;
  font-size: 19.2px;
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
