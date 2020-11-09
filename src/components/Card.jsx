import React, { useState, useEffect } from "react";

import Modal from "./Modal";

// functional component responsible to render one individual Card aka Volume (Book, Magazine or Newspaper)
export default function Card({ book, query }) {
  const [showModal, setshowModal] = useState(false);
  const {
    thumbnailImageLink,
    title,
    subtitle,
    authors,
    categories,
    publisher,
  } = book;

  useEffect(() => {
    setshowModal(false);
  }, [query]);

  const toggleModal = () => {
    setshowModal((prev) => !prev);
  };

  const style = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "rgba(0, 0, 0, 0.6)",
    display: showModal ? "block" : "none",
  };

  console.log(title, publisher);

  return (
    <>
      <div className="modal-overlay" style={style} onClick={toggleModal}></div>
      <div className="card">
        <div className="card-left">
          {thumbnailImageLink !== undefined ? (
            <img
              className="card-image"
              src={thumbnailImageLink}
              alt="cover thumbnail"
            />
          ) : (
            <p>Image not available</p>
          )}
        </div>
        <div className="card-right">
          <h2 className="card-title">{title}</h2>
          <h3 className="card-subtitle">{subtitle}</h3>
          {authors.length !== 0 ? (
            <p className="card-authors">By: {authors.join(", ")}</p>
          ) : null}

          {/* <p className="card-authors">{categories.join(", ")}</p> */}
          {publisher !== "" ? (
            <p className="card-publisher">Published by: {publisher}</p>
          ) : null}
          <button className="card-btn" onClick={() => toggleModal()}>
            {showModal ? "close" : "more details"}
          </button>
        </div>
      </div>
      {showModal ? <Modal book={book} toggleModal={toggleModal} /> : null}
    </>
  );
}
