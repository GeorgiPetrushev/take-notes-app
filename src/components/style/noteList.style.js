import styled from "styled-components"; 

 const NoteListStyle = styled.div`
 display: grid;
 margin: 1.5rem auto;
 padding: 1rem;
 max-width: 1160px;
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(300px ,1fr));
 grid-gap: 1rem;
`;

export default NoteListStyle;