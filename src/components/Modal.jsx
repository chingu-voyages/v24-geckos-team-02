import React from "react"

export default function Modal({book, toggleModal, showModal}) {
  console.log(book);
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
    retailPrice
  } = book
  const date = new Date(publishedDate)
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();
  const readablePublishedDate = year + "/" + month + "/" + day;
console.log(showModal);
  return(
    <div className="modal-container"
      style={{
        display: showModal ? "block" : "none"
        // opacity: showModal ? "1" : 0
      }}
    >
      <h3>{title}</h3>
      {/* change rating by stars */}
      <span>{averageRating} / 5 ({ratingsCount} {ratingsCount > 1 ? "votes" : "vote"})</span>
      <p>{categories}</p>
      <p>Published date: {readablePublishedDate}</p>
      <p>{description}</p>
      <p><a href={webReaderLink} target="blank" >preview</a></p>
      <p><a href={infoLink} target="blank" >info</a></p>
      <p><a href={buyLink} target="blank" >buy for {retailPrice.amount}{retailPrice.currencyCode}</a></p>
      
      <button onClick={()=>toggleModal()}>close</button>
    </div>
  )
};
