import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import movieData from "../fixtures/movies.json";
import seriesData from "../fixtures/series.json";
import { Carousel } from "../components";
import FooterContainer from "./footer";

export function MovieContainer() {

  const [trendingMovieeData, setTrendingMovieeData] = useState([]);
  const [popularMovieeData, setPopularMovieeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {

      await axios.get('http://localhost:8000/myapp/movies/trending')
        .then(res => { setTrendingMovieeData(res.data);})
        .catch(err => console.log(err))


      await axios.get('http://localhost:8000/myapp/movies/popular/')
        .then(res => { setPopularMovieeData(res.data);})
        .catch(err => console.log(err))

    }
    fetchData();

  }, [])

  return (
    <>
      <Carousel.Title>Coming This Week</Carousel.Title>
      <Carousel style={{ background: "transparent" }}>
        {movieData.map((item) => {
          return (
            <Carousel.Image
              key={`${item.id}`}
              // alt={`${item.alt}`}
              src={`${item.image}`}
              style={{ background: "transparent" }}
            />
          );
        })}
      </Carousel>
      <Carousel.Title>For You</Carousel.Title>
      <Carousel style={{ background: "transparent" }}>
        {seriesData.map((item) => {
          return (
            <Carousel.Image
              key={`${item.id}`}
              alt={`${item.alt}`}
              src={`${item.image}`}
              style={{ background: "transparent" }}
            />
          );
        })}
      </Carousel>
      <Carousel.Title>Recently Watched</Carousel.Title>
      <Carousel style={{ background: "transparent" }}>
        {seriesData.map((item) => {
          return (
            <Carousel.Image
              key={`${item.id}`}
              alt={`${item.alt}`}
              src={`${item.image}`}
              style={{ background: "transparent" }}
            />
          );
        })}
      </Carousel>
      <Carousel.Title>Popular on Netflix</Carousel.Title>
      <Carousel style={{ background: "transparent" }}>
        {popularMovieeData.map((item) => {
          return (
            <Link to={`/movie/${item.id}`}> <Carousel.Image
              key={`${item.id}`}
              // alt={`${item.alt}`}
              src={`http://localhost:8000${item.movie_poster}`}
              style={{ background: "transparent" }}
            />
            </Link>
          );
        })}
      </Carousel>
      <Carousel.Title>New Releases</Carousel.Title>
      <Carousel style={{ background: "transparent" }}>
        {seriesData.map((item) => {
          return (
            <Carousel.Image
              key={`${item.id}`}
              alt={`${item.alt}`}
              src={`${item.image}`}
              style={{ background: "transparent" }}
            />
          );
        })}
      </Carousel>
      <Carousel.Title>Trending Now</Carousel.Title>
      <Carousel style={{ background: "transparent" }}>
        {trendingMovieeData.map((item) => {
          return (
            <Link to={`/movie/${item.id}`}> <Carousel.Image
              key={`${item.id}`}
              // alt={`${item.alt}`}
              src={`http://localhost:8000${item.movie_poster}`}
              style={{ background: "transparent" }}
            />
            </Link>
          );
        })}
      </Carousel>
      <FooterContainer />
    </>
  );
}
