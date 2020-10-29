import React from "react"
import isoLangs from "../utils/isoLang"

export default function Modal({book, toggleModal, showModal}) {
  console.log("modal load");
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
  const date = new Date(publishedDate)
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();
  const readablePublishedDate = year + "/" + month + "/" + day;
  let formattedLanguage;
  for (var i = 0; i < isoLangs.length; i++) {
      if (language === isoLangs[i][0]) {
        formattedLanguage = isoLangs[i][1]['name'];
      }
  }
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

