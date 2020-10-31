import React, { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ handleSubmit, queryHistory }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [orderBy, setOrderBy] = useState("relevance");
  const [selectBy, setSelectBy] = useState("relevance")

  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleOrderByChange = (e) => {
    setOrderBy(e.target.value);
  };

  // Update: Diemention

  const handleSelectBy = (e) => {

    const { name, value } = e.target
    console.log({ selectBy })
    console.log(name, value)
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
        <select name="selectBy" value={selectBy} onChange={handleSelectBy}>
          <option value="relevance" >Most Relevant</option>
          <option value="newest" >Newest</option>
        </select>
        <h3>Results are by: {selectBy}</h3>
      </form>
    </div>
  );
}
