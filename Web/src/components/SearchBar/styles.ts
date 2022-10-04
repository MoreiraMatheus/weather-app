import styled from "styled-components";

const SearchBar = styled.input`
  width: 70vw;
  height: 50px;
  padding: 8px;
  margin-top: 30px;
  background-color: #88AEB7;
  border: none;
  border-radius: 8px;
  outline: none;
  font-size: 1.5em;
  font-weight: bold;

  ::placeholder{
    color: #fff;
  }
`

export default SearchBar