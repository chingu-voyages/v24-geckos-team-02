import React from "react";
import Card from "./Card";

export default function CardList({books, query}) {
  const card = (book, index) => <Card book={book} key={index} query={query} />;
  return <div>{books.map(card)}</div>;
}
