import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import FooterContainer from "../containers/footer";

function Series() {
  const { id } = useParams();

  const [season, setSeason] = useState({});
  const [selectSeason, setSelectSeason] = useState({});
  const [seasonList, setSeasonList] = useState([]);
  const [episodesData, setEpisodesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`http://localhost:8000/myapp/series/${id}/`)
        .then((res) => {
          setSeason(res.data);
          setSeasonList(res.data.seasons);
          console.log(res.data);
        })
        .catch((err) => console.log(err));

      await axios
        .get("http://localhost:8000/myapp/episodes/")
        .then((res) => {
          setEpisodesData(res.data);
          console.log(episodesData);
        })
        .catch((err) => console.log(err));
    };

    fetchData();
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          backgroundImage: `url(${season.series_background_image})`,
          backgroundSize: "100% 100%",
          backgroundColor: "transparent",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            overflowX: "hidden",
            backgroundSize: "100% 100%",
            backgroundColor: "transparent",
            paddingLeft: "50px",
          }}
        >
          <h1 style={{ color: "white", background: "transparent" }}>
            {season && season.name}
          </h1>
          <h2 style={{ color: "white", background: "transparent" }}>
            {season && season.series_category && season.series_category.name}
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              background: "transparent",
            }}
          >
            <label
              for="season"
              style={{ color: "white", background: "transparent" }}
            >
              Choose a season:{" "}
            </label>

            <select
              name="season"
              id="season"
              style={{
                color: "white",
                background: "transparent",
                width: "50px",
              }}
              onChange={(e) => setSelectSeason(e.target.value)}
            >
              {seasonList.map((seasn) => {
                return (
                  <option value={seasn.season_number}>
                    {seasn.season_number}
                  </option>
                );
              })}
            </select>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              // justifyContent: "space-around",
              background: "transparent",
            }}
          >
            <h2 style={{ color: "white", background: "transparent" }}>
              Season:{" "}
              {season && season.seasons && season.seasons[0].season_number}
            </h2>
            <h2 style={{ color: "white", background: "transparent" }}>
              Number of episodes:{" "}
              {season && season.seasons && season.seasons[0].number_of_episodes}
            </h2>
            <h2 style={{ color: "white", background: "transparent" }}>
              Release year:{" "}
              {season && season.seasons && season.seasons[0].release_year}
            </h2>
          </div>
          <ul
            style={{
              listStyleType: "none",
              background: "transparent",
              display: "flex",
              flexDirection: "column",
              // justifyContent: "space-evenly",
            }}
          >
            {episodesData.map((item) => {
              return (
                <div
                  style={{
                    background: "transparent",
                    display: "flex",
                    // flexDirection: "row",
                  }}
                >
                  <Link to={`/series/episodes/${item.id}`}>
                    <li
                      key={`${item.id}`}
                      style={{ background: "transparent", color: "white" }}
                    >
                      {item.title}
                    </li>
                  </Link>
                  <br />
                </div>
              );
            })}
          </ul>
        </div>
      </div>
      <FooterContainer />
    </>
  );
}

export default Series;
