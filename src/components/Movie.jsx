import React from "react";
import moment from "moment";
import { convertTime24to12 } from "../utilities";

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
        <img src={'https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg'} alt="" className="card__img" />
        <span className="card__footer pb-2">
            <span className="text-capitalize">{data.title}</span>
            <span>{convertTime24to12(data.showTime)}</span>
        </span>
    </a>

  );
}
