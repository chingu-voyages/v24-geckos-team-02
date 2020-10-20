import React from "react";
import Card from "./Card";

export default function CardList(props) {
  const volumes = props.books;
  const card = (volume, index) => <Card {...volume} handleBooksDetails={props.handleBooksDetails} key={index} />;
  return <div>{volumes.map(card)}</div>;
}
