import React from "react";
import { AiFillDelete } from "react-icons/ai";
import NoteStyle from "./style/note.style";

const Note = ({ id, text, data ,deleteNote }) => {
  
  return (
    <NoteStyle className="note-container">
      <div className="note-top">{text}</div>
      <div className="note-bottom">
        <div>{data}</div>
        <AiFillDelete className="icon-delete" onClick={() =>{ deleteNote(id);}} />
      </div>
    </NoteStyle>
  );
};

export default Note;
