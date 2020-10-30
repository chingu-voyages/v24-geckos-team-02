import React from "react";

export default function Header() {
  const styleBooks = {
    fontFamily: "Concert One",
    color: "#34AAE6",
    fontSize: "2rem",
    fontWeight: 700,
    padding: 10
  }

  const stylePlus = {
    color: "#206DB1"
  }

  return (
    <header>
      <div style={styleBooks}>
        BOOKS<span style={stylePlus}>PLUS</span>
      </div>
    </header>
  );
}
