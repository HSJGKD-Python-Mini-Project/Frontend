import React from "react";
// import { Link as ReactRouterLink } from "react-router-dom";
import { Container, Data } from "./styles/movie-container";

export default function MovieContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

MovieContainer.Data = function MovieContainerData({ children, ...restProps }) {
  return <Data {...restProps}>{children}</Data>;
};
