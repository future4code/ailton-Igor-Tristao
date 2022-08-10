import { createGlobalStyle } from "styled-components";
import Router from "./Routes/router"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;
function App() {
  return (
    <div>
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
