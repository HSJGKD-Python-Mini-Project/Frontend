import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  background-color: transparent;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  a {
    display: flex;
  }
  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.p`
  color: white;
  font-size: 22px;
  background-color: transparent;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;
