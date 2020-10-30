import React from "react"
import formatLanguage from "../utils/isoLang"
import formatDate from "../utils/formatDate"

export default function Modal({book, toggleModal}) {
  const {
    title, 
    averageRating, 
    ratingsCount, 
    categories, 
    publishedDate, 
    description, 
    webReaderLink, 
    infoLink, 
    buyLink, 
    retailPrice,
    pageCount,
    language
  } = book

  let readablePublishedDate = formatDate(publishedDate)

  let formattedLanguage = formatLanguage(language);

  return(
    <div className="modal-container">
      <h3>{title}</h3>
      {/* change rating by stars? */}
      <span>{averageRating} / 5 ({ratingsCount} {ratingsCount > 1 ? "votes" : "vote"})</span>
      <p>{categories}</p>
      <p>Published date: {readablePublishedDate}</p>
      <p>{description}</p>
      <p>{pageCount} pages, language: {formattedLanguage}</p>
      <p><a href={webReaderLink} target="blank" >preview</a></p>
      <p><a href={infoLink} target="blank" >info</a></p>
      <p><a href={buyLink} target="blank" >buy for {retailPrice.amount}{retailPrice.currencyCode}</a></p>
      
      <button onClick={()=>toggleModal()}>close</button>
    </div>
  )
};

