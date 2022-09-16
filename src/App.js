import React, { useState } from "react";
import NoteList from "./components/NoteList";
import { nanoid } from "nanoid";
import SearchBar from "./components/SearchBar";

const dummyNotes = [
  {
    id: nanoid(),
    text: "Aaaa",
    data: "2022-09-21",
  },
  {
    id: nanoid(),
    text: "aaaBbbb",
    data: "2022-09-21",
  },
  {
    id: nanoid(),
    text: "aaabbbCccc",
    data: "2022-09-21",
  },
  {
    id: nanoid(),
    text: "Dddd",
    data: "2022-09-21",
  },
  {
    id: nanoid(),
    text: "Ffff",
    data: "2022-09-21",
  },
];

const App = () => {
  const [note, setNote] = useState(dummyNotes);
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState("");

  // ADD NOTE
  const addNote = (text, data) => {
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
      <SearchBar setSearch={setSearch} setSearchData={setSearchData} />
      <NoteList
        note={
          note.filter((arr) => arr.text.toLowerCase().includes(search)) ||
          note.filter((arr) => arr.data.includes(searchData))
        }
        addNote={addNote}
        deleteNote={deleteNote}
      />
    </div>
  );
};

export default App;
