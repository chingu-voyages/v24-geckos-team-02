import React from "react";
import SearchBar from "./SearchBar";

let errorMsgStyle = {
  position: "relative",
  marginTop: "5px",
  padding: "2px",
  textAlign: "center",
  backgroundColor: "white",
  color: "#B30000",
};

export default function Search({ handleSubmit, error, queryHistory }) {
  return (
    <div className="search-section">
      <SearchBar handleSubmit={handleSubmit} queryHistory={queryHistory} />
      {error !== "" && 
        <div className="search-error" style={errorMsgStyle}>
          {error && error}
        </div>
      }
    </div>
  );
}
