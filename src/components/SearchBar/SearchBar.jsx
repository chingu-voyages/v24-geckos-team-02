import React, { useState } from "react";
import styles from "./SearchBar.module.scss";

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

      <form onSubmit={(e) => handleSubmit(e, searchTerm, orderBy)} className={searchTerm === "" ? styles.arrowVisible : undefined} id={styles.searchSection}>
        
        <div className={styles.searchBar}>
        <input className={styles.inputField} type="text" list="query-history" onChange={handleSearchTerm} value={searchTerm} />
        <datalist id={styles.queryHistory}>
          {queryHistory.map((query) => {
            return searchTerm !== query ? <option value={query} key={query}></option> : false;
          })}
        </datalist>
        <button className={styles.searchBtn}>Search </button>
        </div>

        <div className={styles.searchOptions}>
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
