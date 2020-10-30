import React, { useState, useEffect } from "react";

import Modal from "./Modal";

// functional component responsible to render one individual Card aka Volume (Book, Magazine or Newspaper)
export default function Card({ book, query }) {
  const [showModal, setshowModal] = useState(false);

  useEffect(() => {
    console.log(query);
    setshowModal(false)
  }, [query])
  
  const {thumbnailImageLink, title, subtitle, authors, categories, publisher } = book

  const toggleModal = () => {
    setshowModal(prev=>!prev)
  }

  return (
    <div className="card">
      <img
        className="cover"
        src={thumbnailImageLink}
        alt="cover thumbnail"
      />
      <h2 className="title">{title}</h2>
      <h3 className="subtitle">{subtitle}</h3>
      <p className="authors">{authors.join(", ")}</p>
      <p className="authors">{categories.join(", ")}</p>
      <p className="publisher">{publisher}</p>
      <button className="book-details-btn" onClick={()=>toggleModal()}>{showModal ? "close" : "more details"}</button>
      {showModal ? <Modal book={book} toggleModal={toggleModal} /> : null}
    </div>
  );
}
