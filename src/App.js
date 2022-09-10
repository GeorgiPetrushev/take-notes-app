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

  const addNote = (data) => {
    const datata = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 
    console.log(datata)
  };

  return (
    <div className="container">
      <NoteList note={note}  addNote={addNote}/>
    </div>
  );
};

export default App;
