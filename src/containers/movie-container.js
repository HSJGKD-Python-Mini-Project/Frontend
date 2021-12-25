import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import FooterContainer from "./footer";

export function IndividualMovieContainer() {
  const { id } = useParams();

  const [imageInfo, setImageInfo] = useState({
    id: "",
    movie_name: "",
    movie_category: {
      id: "",
      name: "",
    },
    year_released: "",
    description: "",
    imdb_rating: "",
    video_file: "",
    movie_poster: "",
  });
  const getData = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/myapp/movies/${id}`);
      setImageInfo(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    //alert(id);
    getData();
  }, []);
  return (
    <>
      <div
        style={{
          width: "750px",
          margin: "0 auto 0 auto",
          backgroundColor: "transparent",
          wordSpacing: "2px",
          letterSpacing: "0.5px",
          lineHeight: "30px",
        }}
      >
        <video
          src={imageInfo.video_file}
          width="750"
          height="500"
          controls
          autoplay
        />
        <h1
          style={{
            backgroundColor: "transparent",
            color: "white",
            textTransform: "uppercase",
          }}
        >
          {imageInfo.movie_name}
        </h1>
        <div
          style={{
            color: "white",
            fontSize: "28px",
            fontFamily: "Forte",
            marginBottom: "20px",
          }}
        >
          {imageInfo.year_released}
        </div>
        <div
          style={{
            color: "white",
            fontSize: "16px",
            marginBottom: "20px",
            backgroundColor: "transparent",
          }}
        >
          {imageInfo.description}
        </div>
        <div
          style={{
            color: "white",
            fontSize: "20px",
            marginBottom: "20px",
            backgroundColor: "transparent",
          }}
        >
          <span
            style={{
              fontWeight: "bold",
              fontSize: "20px",
              backgroundColor: "transparent",
            }}
          >
            Rating [IMDB]
          </span>
          {" : "}
          {imageInfo.imdb_rating + "  "}
          <input
            type="range"
            value={Number(imageInfo.imdb_rating) * 10}
            min={0}
            max={100}
            disabled
          />
        </div>
        <div
          style={{
            color: "white",
            fontSize: "20px",
            backgroundColor: "transparent",
          }}
        >
          Category : {imageInfo.movie_category.name}
        </div>
      </div>
      <FooterContainer />
    </>
  );
}
