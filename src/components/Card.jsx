import React, { useState } from "react";
import "./Card.css";

// functional component responsible to render one individual Card aka Volume (Book, Magazine or Newspaper)
export default function Card(props) {
  const [isCoverZoomed, setIsCoverZoomed] = useState(false);

  return (
    <div className="card">
      <img
        className={isCoverZoomed ? "zoomedCover" : "cover"}
        src={isCoverZoomed ? props.thumbnailLink : props.smallThumbnailLink}
        alt="cover thumbnail"
        onClick={() => setIsCoverZoomed(!isCoverZoomed)}
      />
      <h2 className="title">{props.title}</h2>
      <h3 className="subtitle">{props.subtitle}</h3>
      <p className="authors">{props.authors.join(", ")}</p>
      <p className="publisher">{props.publisher}</p>
    </div>
  );
}
