import React, { useState, useEffect } from "react";

import Modal from "./Modal";

// functional component responsible to render one individual Card aka Volume (Book, Magazine or Newspaper)
export default function Card({ book, query }) {
  const [showModal, setshowModal] = useState(false);
  const {thumbnailImageLink, title, subtitle, authors, categories, publisher } = book

  useEffect(() => {
    setshowModal(false)
  }, [query])
  

  const toggleModal = () => {
    setshowModal(prev=>!prev)
  }

  const style = {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      background: "rgba(0, 0, 0, 0.6)",
      display: showModal ? "block" : "none"
  }

  return (
    <>
    <div className="modal-overlay" style={style} onClick={toggleModal}></div>
    <div className="card" style={{zIndex: "100"}}>
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
    </>
  );
}
