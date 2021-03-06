import React from "react";
import formatLanguage from "../utils/isoLang";
import formatDate from "../utils/formatDate";
import formatURL from "../utils/formatURL";
import formatRatingCount from "../utils/formatRatingCount";

export default function Modal({ book, toggleModal }) {
  const {
    title,
    averageRating,
    categories,
    publishedDate,
    description,
    previewLink,
    infoLink,
    buyLink,
    authors,
    publisher,
    retailPrice,
    pageCount,
    language,
    thumbnailImageLink,
    saleability,
  } = book;

  let { ratingsCount } = book;

  let readablePublishedDate = formatDate(publishedDate);

  let formattedLanguage = formatLanguage(language);

  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    zIndex: 200,
  };

  return (
    <div className="modal-container" style={style}>
      <h3>{title}</h3>
      {thumbnailImageLink !== undefined ? (
        <img
          className="cover"
          src={formatURL(thumbnailImageLink)}
          alt="cover thumbnail"
        />
      ) : null}
      <span>
        {averageRating} / 5 ({formatRatingCount(ratingsCount)})
      </span>
      {authors.length !== 0 ? (
        <p className="card-authors">By: {authors.join(", ")}</p>
      ) : null}

      {publisher !== "" ? (
        <p className="card-publisher">Published by: {publisher}</p>
      ) : null}
      {saleability === "FREE" ? <p>FREE BOOK</p> : null}
      {categories.length !== 0 ? <p>Category: {categories}</p> : null}
      {publishedDate !== "" ? (
        <p>Published date: {readablePublishedDate}</p>
      ) : null}
      <p id="modal-description">{description}</p>
      <p>
        {pageCount} pages, Language: {formattedLanguage}
      </p>
      <p>
        <a href={previewLink} target="blank">
          preview
        </a>
      </p>
      <p>
        <a href={infoLink} target="blank">
          info
        </a>
      </p>
      {retailPrice.amount ? (
        <p>
          <a href={buyLink} target="blank">
            buy for {retailPrice.amount}
            {retailPrice.currencyCode}
          </a>
        </p>
      ) : null}

      <button onClick={() => toggleModal()}>close</button>
    </div>
  );
}
