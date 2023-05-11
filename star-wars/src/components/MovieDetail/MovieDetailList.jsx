import React from "react";
import "./MovieDetail.scss";

export default function MovieDetailList({ label, list }) {
  return (
    <div className="wrapper-custom">
      <h4 className="wrapper-custom__label">{label}</h4>
      {list?.length ? (
        <ul>
          {list.map((data, i) => (
            <li key={i}>{data}</li>
          ))}
        </ul>
      ) : (
        <p className="text">We don't have any {label} data yet!</p>
      )}
    </div>
  );
}
