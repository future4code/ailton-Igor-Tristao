import React, { useEffect, useState } from "react";
import fire from "../assets/fire.png";
import { Button, Input, Stack } from "@chakra-ui/react";
import {
  MainContainer,
  LoginContainer,
  TitleContainer,
  FireImage,
  Title,
  LoginButtons,
  TextError,
} from "./styledComponents/LoginStyled";

function LoginError(props) {
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (username !== "") {
      props.changeUser(username);
    }
  }, [username]);

  return (
    <MainContainer>
      <LoginContainer>
        <TitleContainer>
          <FireImage src={fire} />
          <Title>Astromatch</Title>
        </TitleContainer>
        <LoginButtons>
          <TextError>Obrigatório inserir um nome</TextError>
          <Input
            width="50%"
            height="30px"
            fontSize="14px"
            borderTopRadius="20px"
            borderRadius="0"
            textAlign="center"
            placeholder="Insira seu nome *"
            _placeholder={{ opacity: 0.9, color: "red" }}
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            bg="white"
            id="perguntaNome"
          />
          <Stack direction="column" spacing={4} align="center" width="100%">
            <Button
              bg="white"
              color="black"
              variant="solid"
              width="95%"
              height="35px"
              fontSize="15px"
              fontWeight="normal"
              borderRadius="20px"
              onClick={() => props.changeScreenNameRequired("profile")}
            >
              Entrar
            </Button>
            <Button
              bg="white"
              color="black"
              variant="solid"
              width="95%"
              height="35px"
              fontSize="15px"
              fontWeight="normal"
              borderRadius="20px"
              onClick={() => props.changeScreen("profile")}
            >
              Entrar como visitante
            </Button>
          </Stack>
        </LoginButtons>
      </LoginContainer>
    </MainContainer>
  );
}

export default LoginError;
