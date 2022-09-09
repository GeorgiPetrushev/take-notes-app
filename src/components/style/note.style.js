import styled from "styled-components";

const NoteStyle = styled.div`
  background-color: white;
  padding: 1rem;
  border: 0.5px black solid;
  border-radius: 1rem;
  min-height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .note-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .icon{
        font-size: 1.5rem;
        padding: 0.5rem;
        &:hover{
            background-color: red;
            color: white;
            border-radius:50%;
        }
    }
  }
`;

export default NoteStyle;
