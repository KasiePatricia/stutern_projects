import React from "react";
import "./Movie.scss";
import formatDate from "../../helpers/formatDate";
import { Link } from "react-router-dom";

const Movie = ({ title, releaseDate, description, id }) => {
  return (
    <div className="movie">
      <div className="movie__inner-box">
        <div className="movie__title">
          <h3>
            <Link to={`/movie/${id}`}>{title}</Link>
          </h3>
          <span>{formatDate(releaseDate)}</span>
        </div>
        <p className="movie__details">{description.substring(0, 260)}...</p>
        <p className="movie__link">
          <Link to={`/movie/${id}`}>More info</Link>
        </p>
      </div>
    </div>
  );
};

export default Movie;
