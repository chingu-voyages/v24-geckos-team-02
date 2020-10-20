import React from "react"

export default function Modal({book, closeModal}) {
  console.log(book);
  return(
    <div>
      <div>{book.volumeInfo.title}</div>
      <div>{book.volumeInfo.description}</div>
      <button onClick={()=>closeModal()}>close</button>
    </div>
  )
};
