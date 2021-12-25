import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Seasonepisode() {
  const { id } = useParams();

  const [videoInfo, setVideoInfo] = useState({});

  const getData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8000/myapp/episodes/${id}/`
      );
      setVideoInfo(res.data);
      console.log(res.data);
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
          height: "100vh",
          margin: "0 auto 0 auto",
          backgroundColor: "transparent",
          wordSpacing: "2px",
          letterSpacing: "0.5px",
          lineHeight: "30px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <video
          src={videoInfo.video_file}
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
          {videoInfo.title}
        </h1>
        <div
          style={{
            color: "white",
            fontSize: "28px",
            fontFamily: "Forte",
            marginBottom: "20px",
          }}
        >
          uploaded on : {videoInfo.uploaded}
        </div>
        <div
          style={{
            color: "white",
            fontSize: "16px",
            marginBottom: "20px",
            backgroundColor: "transparent",
          }}
        >
          Modified on : {videoInfo.modified}
        </div>
      </div>
    </>
  );
}
