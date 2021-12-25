import React from "react";
import { Container, Image, Title } from "./styles/carousel";

function Carousel({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Carousel.Image = function CarouselImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>;
};

Carousel.Title = function CarouselTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

export default Carousel;
