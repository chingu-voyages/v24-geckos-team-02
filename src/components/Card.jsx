import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "./Modal";
import { useSnackbar } from "react-simple-snackbar";

// functional component responsible to render one individual Card aka Volume (Book, Magazine or Newspaper)
export default function Card({ book, query, accessToken, buttonType, removeFavorite }) {
  const [showModal, setshowModal] = useState(false);
  const [snackbar] = useSnackbar();
  const { thumbnailImageLink, title, subtitle, authors, categories, publisher, id } = book;

  useEffect(() => {
    setshowModal(false);
  }, [query]);

  const toggleModal = () => {
    setshowModal((prev) => !prev);
  };

  const handleAddFavorite = (id) => {
    if (accessToken.value) {
      axios({
        method: "POST",
        url: "https://www.googleapis.com/books/v1/mylibrary/bookshelves/0/addVolume",
        params: { key: process.env.REACT_APP_GOOGLE_BOOKS_API_KEY, volumeId: id },
        headers: {
          Authorization: `Bearer ${accessToken.value}`,
        },
      }).then((res) => {
        snackbar("Added to favorites!");
      });
    } else {
      snackbar("You need to login first to add favorites");
    }
  };

  const handleRemoveFavorite = (id) => {
    if (accessToken.value) {
      axios({
        method: "POST",
        url: "https://www.googleapis.com/books/v1/mylibrary/bookshelves/0/removeVolume",
        params: { key: process.env.REACT_APP_GOOGLE_BOOKS_API_KEY, volumeId: id },
        headers: {
          Authorization: `Bearer ${accessToken.value}`,
        },
      }).then((res) => {
        removeFavorite(id);
        snackbar("Removed from favorites!");
      });
    }
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

  return (
    <>
      <div className="modal-overlay" style={style} onClick={toggleModal}></div>
      <div className="card">
        <div className="card-left">
          <img className="card-image" src={thumbnailImageLink} alt="cover thumbnail" />
        </div>
        <div className="card-right">
          <h2 className="card-title">{title}</h2>
          <h3 className="card-subtitle">{subtitle}</h3>
          <p className="card-authors">By: {authors.join(", ")}</p>
          {/* <p className="card-authors">{categories.join(", ")}</p> */}
          <p className="card-publisher">Published by: {publisher}</p>
          <div style={{ display: "flex", justifyContent: "space-around", width: "100%" }}>
            <button className="card-btn" onClick={() => toggleModal()}>
              {showModal ? "close" : "more details"}
            </button>
            {buttonType === "favorite" ? (
              <button className="card-btn" onClick={() => handleAddFavorite(id)}>
                <span role="img" aria-label="favorite">
                  ❤️
                </span>
              </button>
            ) : (
              <button className="card-btn" onClick={() => handleRemoveFavorite(id)}>
                <span role="img" aria-label="unfavorite">
                  🗑️
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
      {showModal ? <Modal book={book} toggleModal={toggleModal} /> : null}
    </>
  );
}
