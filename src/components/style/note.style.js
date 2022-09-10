import styled, { css } from "styled-components";

const NoteStyle = styled.div`
  background-color: white;
  padding: 1rem;
  border: 0.5px black solid;
  border-radius: 1rem;
  min-height: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${(props) =>
    props.primary &&
    css`
      background: rgb(0, 204, 255,0.5);
    `}

  .note-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .icon-delete {
      font-size: 1.5rem;
      padding: 0.5rem;
      transition: 500ms;
      &:hover {
        background-color: red;
        color: white;
        border-radius: 50%;
      }
    }
  }
  .icon-save {
      font-size: 1.5rem;
      padding: 0.5rem;
      transition: 500ms;
      &:hover {
        background-color: green;
        color: white;
        border-radius: 50%;
      }
    }
  textarea {
    margin: auto;
    font-size: 1rem;
    background-color: transparent;
    border: none;
    resize: none;
    &:focus {
      border: none;
      overflow: auto;
      outline: none;
      resize: none;
    }
  }
`;

export default NoteStyle;
