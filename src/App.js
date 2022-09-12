import React, { useState } from "react";
import NoteList from "./components/NoteList";
import { nanoid } from "nanoid";

const dummyNotes = [
  {
    id: nanoid(),
    text: "1",
    data: "2022-09-21",
  },
  {
    id: nanoid(),
    text: "2",
    data: "2022-09-21",
  },
  {
    id: nanoid(),
    text: "3",
    data: "2022-09-21",
  },
  {
    id: nanoid(),
    text: "4",
    data: "2022-09-21",
  },
  {
    id: nanoid(),
    text: "5",
    data: "2022-09-21",
  },
];

const App = () => {
  const [note, setNote] = useState(dummyNotes);

  // ADD NOTE
  const addNote = (text,data) => {
    if (text.length > 0) {
      const newNote = {
        id: nanoid(),
        text: text,
        data: data,
      };
      const newNoteList = [...note, newNote];
      setNote(newNoteList);
    }
  };

  //DELETE NOTE
  const deleteNote = (id) => {
    const newNoteList = note.filter((arr) => arr.id !== id);
    setNote(newNoteList);
  };

  return (
    <div className="container">
      <NoteList note={note} addNote={addNote} deleteNote={deleteNote} />
    </div>
  );
};

export default App;
