import React, { useState } from "react";

export default function SearchBar({ handleSubmit }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [orderBy, setOrderBy] = useState("relevance");

  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleOrderByChange = (e) => {
    setOrderBy(e.target.value);
  };

  return (
    <div id="search-bar">
      <form onSubmit={(e) => handleSubmit(e, searchTerm, orderBy)}>
        <input type="text" onChange={handleSearchTerm} value={searchTerm} />
        <button>Search</button>
        <label>
          <input
            value="relevant"
            checked
            onChange={handleOrderByChange}
            name="orderBy"
            type="radio"
          />
          Most relevant
        </label>
        <label>
          <input
            value="newest"
            onChange={handleOrderByChange}
            name="orderBy"
            type="radio"
          />
          Newest
        </label>
      </form>
    </div>
  );
}
