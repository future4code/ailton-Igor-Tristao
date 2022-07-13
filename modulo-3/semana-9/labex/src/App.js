import React from "react";
import { createGlobalStyle } from "styled-components";
import { Router } from "./routes/Router";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    /* font-family: 'Bebas Neue', cursive; */
    box-sizing: border-box;
  };
  `;

function App() {
  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <Router />
    </div>
  );
}

export default App;
