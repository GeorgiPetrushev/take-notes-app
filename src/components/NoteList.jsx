import React from "react";
import Note from "./Note";

const NoteLins = (notes) => {
  console.log(notes);
  console.log(notes.prop);
  const newNoteList = notes.prop.map(() => <Note />);
  return <div>{newNoteList}</div>;
};

export default NoteLins;
