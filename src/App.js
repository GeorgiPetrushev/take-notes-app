import React, { useState } from "react";
import NoteList from "./components/NoteList";
import { nanoid } from "nanoid";

const dummyNotes = [
  {
    key: nanoid(),
    text: "note one",
    data: "10/10/2022",
  },
  {
    key: nanoid(),
    text: "note 2",
    data: "10/10/2022",
  },
  {
    key: nanoid(),
    text: "note 3",
    data: "10/10/2022",
  },
  {
    key: nanoid(),
    text: "note 3",
    data: "10/10/2022",
  },
  {
    key: nanoid(),
    text: "note 3",
    data: "10/10/2022",
  },
];

const App = () => {
  const [note, setNote] = useState(dummyNotes);

  const addNote = (text) => {
    if (text.length > 0) {
      const data = new Date().toLocaleDateString();
      const newNote = {
        key: nanoid(),
        text: text,
        data: data,
      };
      const newNoteList = [...note, newNote];
      setNote(newNoteList);
    }
  };

  return (
    <div className="container">
      <NoteList note={note} addNote={addNote} />
    </div>
  );
};

export default App;
