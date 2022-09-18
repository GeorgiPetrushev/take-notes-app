import React from "react";
import HeaderStyle from "./style/header.style";

const Header = ({ setDarkMode, darkMode }) => {
  const changeMode = () => {
    setDarkMode((e) => !e);
  };
  return (
    <HeaderStyle>
      <div className="logo">Notes</div>
      <button onClick={changeMode} >Dark Mode <span className="dote">·</span></button>
    </HeaderStyle>
  );
}; 

export default Header;
