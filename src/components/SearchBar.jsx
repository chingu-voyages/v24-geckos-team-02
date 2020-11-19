import React, { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ handleSubmit, queryHistory, query }) {
  const [searchTerm, setSearchTerm] = useState(query !== "" ? query : "");
  const [orderBy, setOrderBy] = useState("relevance");

  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleOrderByChange = (e) => {
    setOrderBy(e.target.value);
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e, searchTerm, orderBy)}
      id="search-section"
    >
      <div className="search-bar">
        <input
          className="input-field"
          type="text"
          list="query-history"
          onChange={handleSearchTerm}
          value={searchTerm}
        />
        <datalist id="query-history">
          {queryHistory.map((query) => {
            return searchTerm !== query ? (
              <option value={query} key={query}></option>
            ) : (
              false
            );
          })}
        </datalist>
        <button className="search-btn">Search </button>
      </div>

      <div className="search-options">
        <label>
          <input
            value="relevance"
            checked={orderBy === "relevance"}
            onChange={handleOrderByChange}
            name="orderBy"
            type="radio"
          />
          Most relevant
        </label>
        <label>
          <input
            value="newest"
            checked={orderBy === "newest"}
            onChange={handleOrderByChange}
            name="orderBy"
            type="radio"
          />
          Newest
        </label>
      </div>
    </form>
  );
}
