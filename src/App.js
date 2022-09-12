import React, {  useState } from "react";
import NoteList from "./components/NoteList";
import { nanoid } from "nanoid";

const dummyNotes = [
  {
    id: nanoid(),
    text: "1",
    data: "9/10/2022",
  },
  {
    id: nanoid(),
    text: "2",
    data: "11/10/2022",
  },
  {
    id: nanoid(),
    text: "3",
    data: "10/25/2021",
  },
  {
    id: nanoid(),
    text: "4",
    data: "10/10/2020",
  },
  {
    id: nanoid(),
    text: "5",
    data: "10/9/2022",
  },
];


const App = () => {
  const [note, setNote] = useState(dummyNotes);

  const addNote = (text) => {
    if (text.length > 0) {
      const data = new Date().toLocaleDateString();
      const newNote = {
        id: nanoid(),
        text: text,
        data: data,
      };
      const newNoteList = [...note, newNote];
      setNote(newNoteList);
    }
  };

  const deleteNote = (id) =>{
    const newNoteList = note.filter(arr =>  arr.id !== id );
    setNote(newNoteList);
  }

  return (
    <div className="container">
      <NoteList note={note} addNote={addNote} deleteNote={deleteNote} />
    </div>
  );
};

export default App;
