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
        padding: 0.5rem;
        border: none;
        display: flex;
        align-items: center;
    }
 
    .on{
        color: white;
        background-color: rgb(33, 33, 33);
        .icon{
            color: green;
        }


    }
    .off{
        color: black;
        background-color: gray;
        .icon{
            color: red;
        }
    }
`;

export default HeaderStyle;