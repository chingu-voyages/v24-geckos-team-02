import React from "react";
import Card from "./Card";

export default function CardList({books}) {
  const card = (book, index) => <Card book={book} key={index} />;
  return <div>{books.map(card)}</div>;
}
