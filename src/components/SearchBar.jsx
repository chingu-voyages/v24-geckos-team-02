import React, { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ handleSubmit, queryHistory }) {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div id="search-bar">
      <form onSubmit={(e) => handleSubmit(e, searchTerm)} className={searchTerm === "" ? "arrow-visible" : undefined}>
        <input type="text" list="query-history" onChange={handleSearchTerm} value={searchTerm} />
        <datalist id="query-history">
          {queryHistory.map((query) => {
            return searchTerm !== query ? <option value={query} key={query}></option> : false;
          })}
        </datalist>
        <button>Search</button>
      </form>
    </div>
  );
}
