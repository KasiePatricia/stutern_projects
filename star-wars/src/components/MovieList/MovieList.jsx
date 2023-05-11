import React from "react";

import MovieItem from "../Movie/Movie";
import "./MovieList.scss";
import "../MovieDetail/MovieDetail.scss";
import Loader from "../Loader/Loader";

import useMovieList from "../../hooks/useMovieList";

export default function MovieList() {
  const { loading, movieList } = useMovieList();

  return (
    <div className="container">
      <div className="row">
        {loading ? (
          <Loader />
        ) : (
          movieList.map((movie) => (
            <MovieItem
              key={movie.id}
              id={movie.id}
              description={movie.description}
              releaseDate={movie.releaseDate}
              title={movie.title}
            />
          ))
        )}
      </div>
    </div>
  );
}
