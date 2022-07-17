import React from "react";
import { createGlobalStyle } from "styled-components";
import { Router } from "./routes/Router";
import { ChakraProvider } from "@chakra-ui/react";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };
  `;

function App() {
  return (
    <ChakraProvider>
      <GlobalStyle></GlobalStyle>
      <Router />
    </ChakraProvider>
  );
}

export default App;
