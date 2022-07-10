import React from "react";
import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Login from "./Components/Login";
import LoginError from "./Components/LoginError";
import Profile from "./Components/Profile";
import ProfileDois from "./Components/ProfileDois";
import Matches from "./Components/Matches";
import { ChakraProvider } from "@chakra-ui/react";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    /* cursor: url("https://uploads.codesandbox.io/uploads/user/b3e56831-8b98-4fee-b941-0e27f39883ab/Ad1_-cursor.png")
      39 39,
    auto; */
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 100vh;
  background-color: #d0d0d0;
  position: relative;
`;

function App() {
  const [currentScreen, setCurrentScreen] = useState("login");
  const [currentUser, setCurrentUser] = useState("usuario");

  const renderScreen = () => {
    switch (currentScreen) {
      case "login":
        return (
          <Login
            changeScreen={changeScreen}
            changeUser={changeUser}
            changeScreenNameRequired={changeScreenNameRequired}
          />
        );
      case "profile":
        return (
          <Profile changeScreen={changeScreen} currentUser={currentUser} />
        );
      case "profile2":
        return (
          <ProfileDois changeScreen={changeScreen} currentUser={currentUser} />
        );
      case "matches":
        return (
          <Matches changeScreen={changeScreen} currentUser={currentUser} />
        );
      default:
        return (
          <LoginError
            changeScreen={changeScreen}
            changeUser={changeUser}
            changeScreenNameRequired={changeScreenNameRequired}
          />
        );
    }
  };

  const changeUser = (user) => {
    setCurrentUser(user);
  };

  const changeScreen = (screen) => {
    setCurrentScreen(screen);
    if (screen === "login") {
      changeUser("usuario");
    }
  };

  const changeScreenNameRequired = (screen) => {
    var inputNome = document.querySelector("#perguntaNome");
    var nome = inputNome.value;

    if (nome === "") {
      setCurrentScreen("loginError");
    } else {
      setCurrentScreen(screen);
    }
  };

  return (
    <ChakraProvider>
      <Container>
        <GlobalStyle />
        {renderScreen()}
      </Container>
    </ChakraProvider>
  );
}

export default App;
