import React from "react";

// functional component responsible to render one individual Card aka Volume (Book, Magazine or Newspaper)
export default function Card(props) {
  return (
    <div className="card">
      <img
        className="cover"
        src={props.thumbnailImageLink}
        alt="cover thumbnail"
      />
      <h2 className="title">{props.title}</h2>
      <h3 className="subtitle">{props.subtitle}</h3>
      <p className="authors">{props.authors.join(", ")}</p>
      <p className="publisher">{props.publisher}</p>
    </div>
  );
}
