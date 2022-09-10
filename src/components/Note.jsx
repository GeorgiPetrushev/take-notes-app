import React from "react";
import { AiFillDelete } from "react-icons/ai";
import NoteStyle from "./style/note.style";

const Note = ({ id, text, data }) => {
  return (
    <NoteStyle className="note-container" key={id}>
      <div className="note-top">{text}</div>
      <div className="note-bottom">
        <div>{data}</div>
        <AiFillDelete className="icon-delete" />
      </div>
    </NoteStyle>
  );
};

export default Note;
