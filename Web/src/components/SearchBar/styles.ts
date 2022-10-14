import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  column-gap: 24px;
`

export const Input = styled.input`
  padding-left: 16px;
  flex: 1;
  background-color: #88AEB7;
  border: none;
  border-radius: 4px;
  outline: none;
  font-size: 2em;
  font-weight: bold;

  ::placeholder{
    color: #fff;
  }
`

export const SearchButton = styled.button`
  background-color: #88AEB7;
  width: 80px;
  height: 80px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  :hover{
    background-color: #72939A;
    transition: 0.3s;
  }
`
