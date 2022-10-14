import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background-color: #88AEB7;
  flex: 1;
  display: flex;
  flex-direction: column;
  border-radius: 4px;

  h1{
    width: 100%;
    height: 15%;
    padding: 2%;
    background-color: #72939A;
    font-size: 1.8em;
    border-radius: 4px 4px 0 0;

    > img{
      width: 30px;
    }
  }

  > div{
    width: 100%;
    height: 85%;
    display: inherit;
    border-radius: 4px;
  }
`

export const KeyInformations = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;

  h1{
    background-color: inherit;
    font-size: 5em;
    width: auto;
    height: auto;
  }

  h2{
    margin-top: -25px;
    font-size: 1.5em;
  }

  p{
    font-size: 1.2em;
    display: flex;
    align-items: center;
  }

  span{
    color: #ccc;
  }
`