import React from "react";
import Card from "./Card";

export default function CardList() {
  const volumes = [];
  const card = (volume) => <Card {...volume} />;
  return <div>{volumes.map(card)}</div>;
}
