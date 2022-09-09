import styled from "styled-components"; 

 const NoteListStyle = styled.div`
 display: grid;
 margin: 1.5rem auto;
 padding: 1rem;
 max-width: 960px;
 display: grid;
 grid-template-columns: repeat(auto-fit, minmax(240px ,1fr));
 grid-gap: 1rem;
`;

export default NoteListStyle;