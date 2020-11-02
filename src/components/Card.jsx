import React from "react";

// functional component responsible to render one individual Card aka Volume (Book, Magazine or Newspaper)
export default function Card(props) {
  return (
    <div className="card">
      <div className="card-left">
        <img
          className="card-image"
          src={props.thumbnailImageLink}
          alt="cover thumbnail"
        />
      </div>
      <div className="card-right">
        <h2 className="card-title">{props.title}</h2>
        <h3 className="card-subtitle">{props.subtitle}</h3>
        <p className="card-authors">By: {props.authors.join(", ")}</p>
        <p className="card-publisher">Published by: {props.publisher}</p>
        <button className="card-btn">Find out more</button>
      </div>
    </div>
  );
}
