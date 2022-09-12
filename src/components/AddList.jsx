import React, { useState } from "react";
import NoteStyle from "./style/note.style";
import { IoIosSave } from "react-icons/io";


const AddList = ({ addNote }) => {
  const [textValue, setTextValue] = useState("");
  const [dataValue, setDataValue] = useState("");
  const handleChange = (e) => {
    if (textValue.length < 10) {
      setTextValue(e.target.value);
    }
  };
  const pickUpData = (e) => {
    setDataValue(e.target.value);
  };

  const addNewNote = () => {
    addNote(textValue,dataValue);
    setTextValue("");
    setDataValue("");
  };

  return (
    <NoteStyle primary>
      <div className="add-list">
        <div className="note-top">
          <textarea
            name="text"
            id="1"
            cols="28"
            rows="10"
            placeholder="Add New Note ..."
            value={textValue}
            onChange={handleChange}
          ></textarea>
          <input
            type="date"
            id="start"
            name="trip-start"
            value={dataValue}
            onChange={pickUpData}
          ></input>
        </div>
        <div className="note-bottom">
          <div>{150 - textValue.length} Remaining</div>
          <IoIosSave className="icon-save" onClick={addNewNote} />
        </div>
      </div>
    </NoteStyle>
  );
};

export default AddList;
