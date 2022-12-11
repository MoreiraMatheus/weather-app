import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: #fff;
  }

  body{
    background-color: #ccc;
  }

  main{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > div{
      margin: auto;
      width: 50%;
      height: 85%;
      display: flex;
      flex-direction: column;
      row-gap: 20px;
      
      @media (max-width: 800px) {
        width: 70%;
      }

      @media (max-width: 375px) {
        width: 90%;
        height: 80%;
      }
    }
  }

  footer{
    width: 100vw;
    max-height: 20vh;
    padding: 16px 0;
    text-align: center;
    background-color: #72939A;
    a {
      text-decoration: none;
      font-weight: bold;
    }
  }
`

export default GlobalStyle