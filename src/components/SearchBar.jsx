import React from "react";
import SearchBarStyle from "./style/search-bar.style";

const SearchBar = ({ setSearch, setSearchData }) => {
  return (
    <SearchBarStyle>
      <div className="search-icon">ICON</div>
      <textarea
        name="text"
        cols="28"
        rows="1"
        placeholder="Note Search ..."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      ></textarea>
      <input
        type="date"
        id="start"
        name="trip-start"
        onChange={(e) => {
          setSearchData(e.target.value);
        }}
      ></input>
    </SearchBarStyle>
  );
};

export default SearchBar;
