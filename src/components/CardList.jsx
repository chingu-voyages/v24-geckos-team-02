import React, { Fragment } from "react";
import Card from "./Card";

export default function CardList({ books, query, isLastPage, accessToken, buttonType, removeFavorite }) {
  const card = (book, index) => (
    <Card book={book} key={index} query={query} accessToken={accessToken} buttonType={buttonType} removeFavorite={removeFavorite} />
  );
  return (
    <Fragment>
      <div className="card-list" id="cardList">
        {books.map(card)}
      </div>
      {isLastPage && books.length > 3 && <div className="scroll-end-message">No more results!</div>}
    </Fragment>
  );
}
