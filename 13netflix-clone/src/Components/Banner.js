import React, { useState, useEffect } from "react";
import axios from "../axios";

import request from "../request";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(request.fetchNetflixOriginals);
      setMovie(
        requests.data.results[
          Math.floor(Math.random() * requests.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_content banner_title">
        {/* title */}
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        {/* 2 buttons */}
        <div>
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>

        {/* description */}
        <h1 className="movie_description">{movie?.overview}</h1>
      </div>
      <div className="banner_fadeBottom" />
    </header>
  );
};

export default Banner;
