import React from "react";
import Note from "./Note";
import NoteListStyle from "./style/noteList.style"

const NoteList = ({note}) => {
  const newNoteList = note.map((note) => <Note 
    key={note.key}
    text={note.text}
    data={note.data}
  />);
  return <NoteListStyle className="note-list">{newNoteList}</NoteListStyle>;
};

export default NoteList;
