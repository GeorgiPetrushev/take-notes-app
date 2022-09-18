import styled from "styled-components";

const HeaderStyle = styled.div`
    display: flex;
    justify-content:space-between;
    max-width: 1200px;
    margin: auto;
    font-size: 1.5rem;
    .logo{
        background-color: rgb(194, 194, 194);
        padding: 0.5rem;
        border-radius: 1rem;
    }
    button{
        font-size: 1.5rem;
        border-radius: 1rem;
        display: flex;
        align-items: center;
    }
 
    .dote{
        color: green;
    }
    .dote-active{
        color: red;
    }
`;

export default HeaderStyle;