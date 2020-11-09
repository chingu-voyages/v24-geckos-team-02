import React, { useState, useEffect } from "react";

import Modal from "./Modal";

// functional component responsible to render one individual Card aka Volume (Book, Magazine or Newspaper)
export default function Card({ book, query }) {
  const [showModal, setshowModal] = useState(false);
  const { thumbnailImageLink, title, subtitle, authors, categories, publisher } = book

  useEffect(() => {
    setshowModal(false)
  }, [query])


  const toggleModal = () => {
    setshowModal(prev => !prev)
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
      <div className="card">
        <div className="card-left">
          <img
            className="card-image"
            src={"https://www.google.com/search?q=image+no+available&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiArZuk9ZfrAhUBuaQKHSUxCkIQ_AUoAXoECAwQAw&biw=2560&bih=1258#imgrc=c9HhSMkB_LemLM&imgdii=bjitzqYIP9hbJM"}
            alt="cover thumbnail"
          />
        </div>
        <div className="card-right">
          <h2 className="card-title">{title}</h2>
          <h3 className="card-subtitle">{subtitle}</h3>
          <p className="card-authors">By: {authors.join(", ")}</p>
          {/* <p className="card-authors">{categories.join(", ")}</p> */}
          <p className="card-publisher">Published by: {publisher}</p>
          <button className="card-btn" onClick={() => toggleModal()}>{showModal ? "close" : "more details"}</button>
        </div>
      </div>
      {showModal ? <Modal book={book} toggleModal={toggleModal} /> : null}


    </>
  );
}


