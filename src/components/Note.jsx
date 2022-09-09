import React from "react";
const Note = ({id,text,data}) => {

  return <div className="note">
    <div>{text}</div>
    <div>{data}</div>
  
  
  </div>;
};

export default Note;
