import React from "react";
import SearchBarStyle from "./style/search-bar.style";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({ setSearch }) => {
  return (
    <SearchBarStyle>
      <AiOutlineSearch className="search-icon" />
      <textarea
        className="search-area"
        name="text"
        cols="28"
        rows="1"
        placeholder="Note Search ..."
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      ></textarea>
    </SearchBarStyle>
  );
};

export default SearchBar;
