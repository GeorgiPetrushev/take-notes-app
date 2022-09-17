import React, { useState } from "react";
import NoteList from "./components/NoteList";
import { nanoid } from "nanoid";
import SearchBar from "./components/SearchBar";

const dummyNotes = [
  {
    id: nanoid(),
    text: "Aaaa",
    data: "9/16/2022",
  },
  {
    id: nanoid(),
    text: "aaaBbbb",
    data: "9/16/2022",
  },
  {
    id: nanoid(),
    text: "aaabbbCccc",
    data: "9/16/2022",
  },
  {
    id: nanoid(),
    text: "Dddd",
    data: "9/16/2022",
  },
  {
    id: nanoid(),
    text: "Ffff",
    data: "9/16/2022",
  },
];

const App = () => {
  const [note, setNote] = useState(dummyNotes);
  const [search, setSearch] = useState("");

  // ADD NOTE
  const addNote = (text) => {
    if (text.length > 0) {
      const date = new Date();
      const newNote = {
        id: nanoid(),
        text: text,
        data: date.toLocaleDateString(),
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
      <SearchBar setSearch={setSearch} />
      <NoteList
        note={note.filter((arr) => arr.text.toLowerCase().includes(search))}
        addNote={addNote}
        deleteNote={deleteNote}
      />
    </div>
  );
};

export default App;
