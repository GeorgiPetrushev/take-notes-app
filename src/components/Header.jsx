import React from "react";
import HeaderStyle from "./style/header.style";
import {FaDotCircle} from "react-icons/fa"

const Header = ({ setDarkMode, darkMode }) => {
  const changeMode = () => {
    setDarkMode((e) => !e);
  };
  return (
    <HeaderStyle>
      <div className="logo">Notes</div>
      <button onClick={changeMode}className={ darkMode ? "on" : "off"}>Dark Mode <FaDotCircle className="icon"/> </button>
    </HeaderStyle>
  );
}; 

export default Header;
