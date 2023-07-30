import React, { useState, useEffect } from "react";
import axios from "axios";
import CardView from "./CardView";
import "./Movies.css";
import { NavLink } from "react-router-dom";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const Api = "http://localhost:5000/";
    const response = await axios.get(Api);
    const movieData = response.data;
    console.log(movieData);
    setMovies(movieData);
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div>
      <h2 className="heading">Latest Movies</h2>
      <div id="container">
        {movies.map((m) => (
          <NavLink className="nav" to={`movie/${m.movie_id}`} key={m.movie_id}>
            <CardView item={m} />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Movies;
