import React from "react";
import SearchBar from "./SearchBar";

export default function Search({ handleSubmit, error, queryHistory }) {
  return (
    <div id="search-section">
      <SearchBar handleSubmit={handleSubmit} queryHistory={queryHistory} />
      <div className="search-error" style={{ color: "red" }}>
        {error && error}
      </div>
    </div>
  );
}
