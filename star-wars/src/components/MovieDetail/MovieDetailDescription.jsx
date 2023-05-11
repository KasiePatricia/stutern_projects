import React from "react";
import "./MovieDetail.scss";

export default function MovieDetailDescription({ description }) {
  return (
    <div className="wrapper">
      <h4 className="label">Description</h4>
      <p className="text">{description}</p>
    </div>
  );
}
