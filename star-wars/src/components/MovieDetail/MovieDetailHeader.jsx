import React from "react";
import { Link } from "react-router-dom";
import "./MovieDetail.scss";

export default function MovieDetailHeader({ title, director, producer }) {
  return (
    <div className="detail-header">
      <p className="detail-header__link">
        <Link to="/">&larr; Back to list</Link>
      </p>
      <h2 className="detail-header__title">{title}</h2>
      <p className="detail-header__desc">Director : {director}</p>
      <p className="detail-header__desc">Producer : {producer}</p>
    </div>
  );
}
