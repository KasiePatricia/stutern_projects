import React from "react";
import { useParams } from "react-router-dom";
import "./MovieDetail.scss";
import Loader from "../Loader/Loader";

import MovieDetailContent from "./MovieDetailContent";

import useMovieDetail from "../../hooks/useMovieDetail";

export default function MovieDetail() {
  const { id } = useParams();
  const { loading, movieDetail } = useMovieDetail(Number(id));

  return (
    <div className="container">
      {loading ? (
        <Loader />
      ) : (
        <MovieDetailContent
          title={movieDetail.title}
          director={movieDetail.director}
          producer={movieDetail.producer}
          description={movieDetail.description}
          characters={movieDetail.characters}
          planets={movieDetail.planets}
          species={movieDetail.species}
          starships={movieDetail.starships}
          vehicles={movieDetail.vehicles}
        />
      )}
    </div>
  );
}
