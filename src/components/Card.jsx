import React, { useState } from "react";
import axios from "axios";
import "./Card.css";

// functional component responsible to render one individual Card aka Volume (Book, Magazine or Newspaper)
export default function Card(props) {
  const [isCoverZoomed, setIsCoverZoomed] = useState(false);
  const [largeImgSrc, setLargeImgSrc] = useState("");

  const handleClick = () => {
    // if largeImgSrc hasn't been requested yet
    if (largeImgSrc === "") {
      axios
        .get("https://www.googleapis.com/books/v1/volumes/" + props.volumeId)
        .then((res) => {
          // axios.get(props.selfLink).then((res) => {
          console.log(res);
          const largeImgSrc_ = res["data"]["volumeInfo"]["imageLinks"]["small"];
          console.log(largeImgSrc_);
          if (largeImgSrc !== undefined) {
            setLargeImgSrc(largeImgSrc_);
            setIsCoverZoomed(!isCoverZoomed);
          }
        });
    } else {
      setIsCoverZoomed(!isCoverZoomed);
    }
  };

  return (
    <div className="card">
      <img
        className={isCoverZoomed ? "zoomedCover" : "cover"}
        src={isCoverZoomed ? largeImgSrc : props.thumbnailLink}
        alt="cover thumbnail"
        onClick={handleClick}
      />
      <h2 className="title">{props.title}</h2>
      <h3 className="subtitle">{props.subtitle}</h3>
      <p className="authors">{props.authors.join(", ")}</p>
      <p className="publisher">{props.publisher}</p>
    </div>
  );
}
