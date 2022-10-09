import styled from "styled-components";

export const Wrapper = styled.div`
  height: 50vh;
  width: 45vw;
  background-color: #88AEB7;
  display: flex;
  flex-direction: column;

  h1{
    width: 100%;
    height: 15%;
    padding: 8px;
    background-color: #72939A;
    font-size: 1.8em;
  }

  > div{
    width: 100%;
    height: 85%;
    display: inherit;
  }
`

export const KeyInformations = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1{
    background-color: inherit;
    font-size: 5em;
    width: auto;
    height: auto;
  }

  h2{
    margin-top: -20px;
    margin-bottom: 20px;
  }

  p{
    margin: 4px 0;
    display: flex;
    
  }

  span{
    color: #ccc;
  }
`

export const ImageWrapper = styled.div`
  width: 50%;
  height: 100%;

  img{
    width: 80%;
  }
`