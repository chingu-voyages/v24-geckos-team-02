import React, { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ handleSubmit, queryHistory }) {
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
      <form onSubmit={(e) => handleSubmit(e, searchTerm, orderBy)} className={searchTerm === "" && "arrow-visible"}>
        <input type="text" list="query-history" onChange={handleSearchTerm} value={searchTerm} />
        <datalist id="query-history">
          {queryHistory.map((query) => {
            return searchTerm !== query ? <option value={query} key={query}></option> : false;
          })}
        </datalist>
        <button>Search</button>
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
      </form>
    </div>
  );
}
