import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./SingleMovie.css";

const SingleMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const Api = "http://localhost:5000";

  const fetchMovies = async (url) => {
    const response = await axios.get(url);
    const movieData = response.data;
    console.log(movieData);
    setMovie(movieData);
  };

  useEffect(() => {
    fetchMovies(`${Api}/${id}`);
  }, [id]);
  return (
    <div className="div1">
      <img
        className="movieimg"
        src={movie.poster_path}
        alt="poster not available"
      />
      <div className="div2">
        <div className="div3">{movie.title}</div>
        <div className="div4">
          <div>DATE: {movie.release_date}</div>
          <div>RATING: {movie.vote_average}</div>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
