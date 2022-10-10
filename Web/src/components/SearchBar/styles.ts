import styled from "styled-components";

export const Wrapper = styled.div`
  width: 70vw;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  height: 60px;
  padding: 8px;
`

export const SearchButton = styled.button`
  background-color: #88AEB7;
  border: none;
  border-radius: 8px;
  margin-left: 8px;
  font-weight: bold;
  padding: 8px;
  cursor: pointer;

  :hover{
    background-color: #72939A;
    transition: 0.3s;
  }
`

export const Input = styled.input`
  flex: 1;
  padding: 8px;
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