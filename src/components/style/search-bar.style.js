import styled from "styled-components";

const SearchBarStyle = styled.div`
  margin: auto;
  margin-top: 1rem;
  background-color: rgb(194, 194, 194 , 0.9);
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1160px;
  min-height: 3rem;
  padding: 0rem 1rem;
  border-radius: 1rem;
  .search-icon {
    font-size: 1.5rem;
  }
  .search-area {
    width: 100%;
    margin-left: 0.5rem;
    font-size: 1.5rem;
    background-color: transparent;
    border: none;
    &:focus {
      border: none;
      overflow: auto;
      outline: none;
      resize: none;
    }
  }
`;

export default SearchBarStyle;
