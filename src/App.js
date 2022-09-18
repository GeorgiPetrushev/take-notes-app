import React, { useState, useEffect } from "react";
import NoteList from "./components/NoteList";
import { nanoid } from "nanoid";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import { dummyNotes } from "./dummy-data";
import { AppStyle } from "./components/style/app.style";

const App = () => {
  const [note, setNote] = useState(dummyNotes);
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);
   


  //ADD  NOTES TO THE LOCAL STORAGE
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setNote(items);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(note));
  }, [note]);




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
    <AppStyle>
      <div className={darkMode ? "dark" : "dark-off"}>
        <Header setDarkMode={setDarkMode} darkMode={darkMode} />
        <SearchBar setSearch={setSearch} />
        <NoteList
          note={note.filter((arr) => arr.text.toLowerCase().includes(search))}
          addNote={addNote}
          deleteNote={deleteNote}
        />
      </div>
    </AppStyle>
  );
};

export default App;
