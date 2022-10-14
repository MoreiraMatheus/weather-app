import styled from "styled-components";

export const Loading = styled.h1`
  @keyframes loadingAnimate {
    0%{background-color: #72939A;}

    100%{background-color:#88AEB7;}
  }

  width: 100%;
  padding: 4px;
  background-color: #72939A;
  border-radius: 8px;
  text-align: center;

  animation: loadingAnimate 0.4s linear infinite alternate;
`