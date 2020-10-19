import React, { useState } from "react";

export default function SearchBar({ handleSubmit }) {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div id="search-bar">
      <form onSubmit={(e) => handleSubmit(e, searchTerm)}>
        <input type="text" onChange={handleSearchTerm} value={searchTerm} />
        <button>Search</button>
      </form>
    </div>
  );
}
