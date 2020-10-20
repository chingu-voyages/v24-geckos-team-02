import React from "react";

// functional component responsible to render one individual Card aka Volume (Book, Magazine or Newspaper)
export default function Card(props) {

  const handleClick = (id) => {
    props.handleBooksDetails(id);
  }

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
      <div className="book-details-btn" onClick={()=>handleClick(props.id)}>more details</div>
    </div>
  );
}
