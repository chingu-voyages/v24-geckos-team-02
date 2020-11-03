import React, { Fragment } from "react";
import Card from "./Card";

export default function CardList({books, query, isLastPage}) {
  const card = (book, index) => <Card book={book} key={index} query={query} />;
  return (
    <Fragment>
      <div className="card-list">{books.map(card)}</div>
      {isLastPage && books.length > 3 && (
        <div className="scroll-end-message">
          <em>No more results!</em>
        </div>
      )}
    </Fragment>
  );
}
