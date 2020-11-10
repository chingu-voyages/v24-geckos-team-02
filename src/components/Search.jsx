import React from "react";
import SearchBar from "./SearchBar";

let errorMsgStyle = {
  position: "relative",
  marginTop: "5px",
  padding: "2px",
  textAlign: "center",
  backgroundColor: "white",
  color: "#B30000",
};

export default function Search({ handleSubmit, error, queryHistory, query }) {
  return (
    <div>
      <SearchBar
        handleSubmit={handleSubmit}
        queryHistory={queryHistory}
        query={query}
      />
      {error !== "" && (
        <div className="search-error" style={errorMsgStyle}>
          {error && error}
        </div>
      )}
    </div>
  );
}
