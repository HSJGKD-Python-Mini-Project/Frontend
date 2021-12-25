import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { Header, Carousel } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";
import FooterContainer from "./footer";

export function BrowseContainer() {
  const history = useHistory();

  const [movieData, setMovieData] = useState([]);
  const [seriesData, setSeriesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("http://localhost:8000/myapp/movies/")
        .then((res) => {
          setMovieData(res.data);
          console.log(movieData);
        })
        .catch((err) => console.log(err));

      await axios
        .get("http://localhost:8000/myapp/series/")
        .then((res) => {
          setSeriesData(res.data);
          console.log("Series data" + seriesData);
        })
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []);

  return (
    <>
      <Header src="joker1" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
          </Header.Group>
        </Header.Frame>

        <Header.Feature styles={{ background: "transparent" }}>
          <Header.FeatureCallOut styles={{ background: "transparent" }}>
            Watch Joker Now
          </Header.FeatureCallOut>
          <Header.Text styles={{ background: "transparent" }}>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he's part of the world
            around him.
          </Header.Text>
          <Header.PlayButton
            styles={{ background: "transparent" }}
            onClick={() => history.push("/movie/6")}
          >
            Play
          </Header.PlayButton>
        </Header.Feature>
      </Header>
      <Carousel.Title to={ROUTES.MOVIES}>Movies</Carousel.Title>
      <Carousel style={{ background: "transparent" }}>
        {movieData.map((item) => {
          return (
            <Link to={`/movie/${item.id}`}>
              {" "}
              <Carousel.Image
                key={`${item.id}`}
                src={`${item.movie_poster}`}
                style={{ background: "transparent" }}
              />
            </Link>
          );
        })}
      </Carousel>
      <Carousel.Title to={ROUTES.MOVIES}>Series</Carousel.Title>
      <Carousel style={{ background: "transparent" }}>
        {seriesData.map((item) => {
          return (
            <Link to={`/series/${item.id}`}>
              <Carousel.Image
                key={`${item.id}`}
                src={`${item.series_poster}`}
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
