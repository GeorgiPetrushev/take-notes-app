import React from "react";
import HeaderStyle from "./style/header.style";
import {TbPoint} from "react-icons/tb"

const Header = ({ setDarkMode, darkMode }) => {
  const changeMode = () => {
    setDarkMode((e) => !e);
  };
  return (
    <HeaderStyle>
      <div className="logo">Notes</div>
      <button onClick={changeMode} >Dark Mode <TbPoint className={ darkMode ? "dote" : "dote-active"}/></button>
    </HeaderStyle>
  );
}; 

export default Header;
