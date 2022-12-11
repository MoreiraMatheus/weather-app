import styled from "styled-components";

export const Wrapper = styled.div`
  @keyframes apears {
    0%{
      opacity: 0;
    }

    100%{
      opacity: 100%;
    }
  }

  width: 100%;
  background-color: #88AEB7;
  flex: 1;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  animation: apears 1s;

  h1{
    width: 100%;
    height: 15%;
    padding: 3% 2%;
    background-color: #72939A;
    font-size: 1.8em;
    text-align: left;
    border-radius: 4px 4px 0 0;

    
    @media (max-width: 700px) {
      font-size: 1.4em;
    }
    @media (max-width: 600px) {
      font-size: 1.2em;
      height: 13%;
    }
    @media (max-width: 500px) {
      height: 11%;
    }
    @media (max-width: 380px) {
      font-size: 1.1em;
      height: 9%;
    }
    
    > img{
      width: 30px;

      @media (max-width: 600px) {
        width: 20px;
      }
    }
  }

  > div{
    width: 100%;
    height: 85%;
    display: inherit;
    border-radius: 4px;
  }
`

export const Data = styled.div`
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

    @media (max-width: 700px) {
      font-size: 4em;
    }
  }

  h2{
    margin-top: -25px;
    font-size: 1.5em;

    @media (max-width: 700px) {
      font-size: 1.3em;
    }
    @media (max-width: 375px) {
      font-size: 1.2em;
    }
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

export const Information = styled.abbr`
  width: 30px;
  height: 30px;
  margin: 10px;
  align-self: flex-end;
`