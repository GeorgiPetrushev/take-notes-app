import React, { useState } from "react";
import NoteStyle from "./style/note.style";
import { IoIosSave } from "react-icons/io";

const AddList = ({addNote}) => {
 
    
  const handleChange = (e) => {
    setTextValue(e.target.value);
  };


  const addNewNote = () => {
    addNote(textValue);
    setTextValue("");
  };

  const [textValue, setTextValue] = useState("");

  return (
    <NoteStyle primary>
      <div className="add-list">
        <div className="note-top">
          <textarea
            name="text"
            id="1"
            cols="28"
            rows="10"
            value={textValue}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="note-bottom">
          <div>200 Remaining</div>
          <IoIosSave className="icon-save" onClick={addNewNote} />
        </div>
      </div>
    </NoteStyle>
  );
};

export default AddList;
