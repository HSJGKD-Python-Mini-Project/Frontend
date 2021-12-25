import styled from "styled-components/macro";
import { Link as ReachRouterLink } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const Image = styled.img`
  padding: 20px;
  border-radius: 30px;
  transition: transform 0.3s ease-in;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Title = styled(ReachRouterLink)`
  text-decoration: none;
  cursor: pointer;
  font-size: 28px;
  font-weight: 700;
  color: #fff;
  padding-left: 25px;
`;
