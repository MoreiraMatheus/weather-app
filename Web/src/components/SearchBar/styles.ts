import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  column-gap: 24px;

  @media (max-width: 600px) {
    height: 55px;
  }
`

export const Input = styled.input`
  padding-left: 16px;
  width: 100%; 
  background-color: #88AEB7;
  border: none;
  border-radius: 4px;
  outline: none;
  font-size: 2em;
  font-weight: bold;
  
  @media (max-width: 1000px) {
    max-width: 75%; 
  }
  @media (max-width: 600px) {
    max-width: 78%; 
  }
  @media (max-width: 550px) {
    max-width: 75%; 
  }
  @media (max-width: 450px) {
    max-width: 73%; 
  }

  ::placeholder{
    color: #fff;
  }
`

export const SearchButton = styled.button`
  background-color: #88AEB7;
  width: 80px;
  height: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  @media (max-width: 600px) {
    width: 55px;
  }

  :hover{
    background-color: #72939A;
    transition: 0.3s;
  }
`
