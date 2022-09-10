import React from "react";
import Note from "./Note";
import NoteListStyle from "./style/noteList.style";
import AddList from "./AddList";

const NoteList = ({ note, addNote }) => {
  const newNoteList = note.map((note) => (
    <Note key={note.key} text={note.text} data={note.data} />
  ));
  return (
    <NoteListStyle>
      {newNoteList}
      <AddList addNote={addNote} />
    </NoteListStyle>
  );
};

export default NoteList;
