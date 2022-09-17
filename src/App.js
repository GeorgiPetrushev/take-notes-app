import React, { useState } from "react";
import NoteList from "./components/NoteList";
import { nanoid } from "nanoid";
import SearchBar from "./components/SearchBar";

const dummyNotes = [
  {
    id: nanoid(),
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    data: "1/6/2022",
  },
  {
    id: nanoid(),
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    data: "2/27/2022",
  },
  {
    id: nanoid(),
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    data: "4/11/2022",
  },
  {
    id: nanoid(),
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    data: "5/3/2022",
  },
  {
    id: nanoid(),
    text: "Laoreet non curabitur gravida arcu. Arcu cursus euismod quis viverra nibh cras pulvinar. ",
    data: "7/19/2022",
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
