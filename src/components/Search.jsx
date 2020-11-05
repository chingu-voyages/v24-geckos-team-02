import React from "react";
import SearchBar from "./SearchBar";

export default function Search({ handleSubmit, error, queryHistory }) {
  return (
    <div className="search-section">
      <SearchBar handleSubmit={handleSubmit} queryHistory={queryHistory} />
      <div className="search-error" style={{ position:"relative", marginTop:"5px", textAlign: "center", backgroundColor: "white", color: "#B30000" }}>
        {error && error}
      </div>
    </div>
  );
}
