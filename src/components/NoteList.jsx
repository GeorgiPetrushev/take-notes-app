import React from "react";
import Note from "./Note";

const NoteLins = ({note}) => {
  const newNoteList = note.map((note) => <Note 
    key={note.key}
    text={note.text}
    data={note.data}
  />);
  return <div className="note-list">{newNoteList}</div>;
};

export default NoteLins;
