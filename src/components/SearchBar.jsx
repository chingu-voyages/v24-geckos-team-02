import React, { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ handleSubmit, queryHistory }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectBy, setSelectBy] = useState("relevance")

  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelectBy = (e) => {
    const { name, value } = e.target
    setSelectBy(value)
  }

  return (
    <div id="search-bar">
      <form onSubmit={(e) => handleSubmit(e, searchTerm, selectBy)} className={searchTerm === "" ? "arrow-visible" : undefined}>
        <input type="text" list="query-history" onChange={handleSearchTerm} value={searchTerm} />
        <datalist id="query-history">
          {queryHistory.map((query) => {
            return searchTerm !== query ? <option value={query} key={query}></option> : false;
          })}
        </datalist>
        <button>Search</button>
        <select name="selectBy" value={selectBy} onChange={handleSelectBy}>
          <option value="relevance" >Most Relevant</option>
          <option value="newest" >Newest</option>
        </select>
        <h3>Results are by: {selectBy}</h3>
      </form>
    </div>
  );
}
