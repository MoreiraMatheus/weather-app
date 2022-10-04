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

  main{
    width: 100vw;
    height: 100vh;
    background-color: #ccc;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  footer{
    height: 26vh;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    background-color: #72939A;
  }
`

export default GlobalStyle