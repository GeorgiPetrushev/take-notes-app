import React from "react";
import SearchBarStyle from "./style/search-bar.style";

const SearchBar = ({ setSearch }) => {


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
      <input type="date" id="start" name="trip-start"></input>
    </SearchBarStyle>
  );
};

export default SearchBar;
