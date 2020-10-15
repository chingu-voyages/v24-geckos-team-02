import React from "react";
import SearchBar from "./SearchBar";

export default function Search({ handleSubmit, error }) {
  return (
    <div id="search-section">
      <SearchBar handleSubmit={handleSubmit} />
      <div>{error && error}</div>
    </div>
  );
}
