import React from "react";
import moment from "moment";

const defaultImages = {
  drop: "/rider.jpg",
  delivery: "/food.jpeg",
};

export default function Movie({ data, styles = {},}) {

  return (
    <a href="#" className="action-card m-3 text-black px-0 position-relative" style={styles}>
        <div className="ribbon pe-4 text-capitalize right">
            {data.category}
        </div>
        <img src={'https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg'} className="card__img" />
        <span className="card__footer pb-2">
            <span className="text-capitalize">{data.moviename}</span>
            <span>{data.time}</span>
        </span>
    </a>

  );
}
