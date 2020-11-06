import React, { useState, useEffect } from "react";

import Modal from "../Modal/Modal";

import styles from "./Card.module.scss"

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
<div className={styles.modaloverlay} style={style} onClick={toggleModal}></div>
    <div className={styles.card}>
      <div className={styles.cardLeft}>
        <img
          className={styles.cardImage}
          src={thumbnailImageLink}
          alt="cover thumbnail"
        />
      </div>
      <div className={styles.cardRight}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <h3 className={styles.cardSubtitle}>{subtitle}</h3>
        <p className={styles.cardAuthors}>By: {authors.join(", ")}</p>
        <p className={styles.cardAuthors}>{categories.join(", ")}</p>
        <p className={styles.cardPublisher}>Published by: {publisher}</p>
        <button className={styles.cardBtn} onClick={()=>toggleModal()}>{showModal ? "close" : "more details"}</button>
      </div>
    </div>
      {showModal ? <Modal book={book} toggleModal={toggleModal} /> : null}
 

</>
  );
}


