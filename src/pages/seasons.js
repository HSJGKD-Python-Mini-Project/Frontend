import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { Header, Carousel } from "../components";

const Series = () => {

  // const seriesNumber = useParams(1);
  const seriesNumber = 1;
  const [seasons, setSeasons] = useState([]);
  const [seasonSelected, setSeasonSelected] = useState(false);
  const [episodes, setEpisodes] = useState([]);

  useEffect(async () => {
    await axios.get(`http://localhost:8000/myapp/series/${seriesNumber}/`)
      .then(res => { setSeasons(res.data.seasons); seasonSelected(seasonSelected=>!seasonSelected)})
      .catch(err => console.log(err))

  }, [])


  const getEpisodes =async ()=>{
    await axios.get(`http://localhost:8000/myapp/episodes/`)
      .then(res => { setEpisodes(res.data); console.log(res.data)})
      .catch(err => console.log(err))
  }

  return (
    <>
      
    <Carousel.Title>Seasons for Series</Carousel.Title>
    <Carousel style={{ background: "transparent" }}>
      {seasons.map((item) => {
        return (
          <div onClick={getEpisodes}>
            <p style={{color: "white"}}>Season {item.id}</p>
          </div>
        );
      })}
    </Carousel>


    <Carousel.Title>Episodes for Seasons</Carousel.Title>
    <Carousel style={{ background: "transparent" }}>
        {
        seasonSelected? episodes.map((item) => {
          return (
            // <video src={item.video_file} width="350" height="200" controls autoplay />
            <p style={{color: "white"}}>Episode {item.id}</p>
          );
        }):<p  style={{color: "white"}}>kfk</p>
      }
      </Carousel>

    
    </>
  )
}

export default Series
