import React from "react";

import MovieDetailHeader from "./MovieDetailHeader";
import MovieDetailDescription from "./MovieDetailDescription";
import MovieDetailList from "./MovieDetailList";

export default function MovieDetailContent({
  title,
  director,
  producer,
  description,
  characters,
  planets,
  species,
  starships,
  vehicles,
}) {
  return (
    <section className="main-wrapper">
      <MovieDetailHeader
        title={title}
        director={director}
        producer={producer}
      />
      <MovieDetailDescription description={description} />
      <MovieDetailList label="Characters" list={characters} />
      <MovieDetailList label="Planets" list={planets} />
      <MovieDetailList label="Species" list={species} />
      <MovieDetailList label="Starships" list={starships} />
      <MovieDetailList label="Vehicles" list={vehicles} />
    </section>
  );
}
