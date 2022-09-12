import React from "react";
import Note from "./Note";
import NoteListStyle from "./style/noteList.style";
import AddList from "./AddList";

const NoteList = ({ note, addNote , deleteNote}) => {
  const newNoteList = note.map((note) => (
    <Note id={note.id} text={note.text} data={note.data} deleteNote={deleteNote} key={note.id} />
  ));
  return (
    <NoteListStyle>
      {newNoteList}
      <AddList addNote={addNote} />
    </NoteListStyle>
  );
};

export default NoteList;
