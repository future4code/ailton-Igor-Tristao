import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../routes/coordinator";
import styled from "styled-components";
import { goToAdminHomePage, goToHomePage } from "../routes/coordinator";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
`;

const Header = styled.div`
  height: 10vh;
  display: flex;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  min-height: 80vh;
`;

const Footer = styled.div`
  height: 10vh;
  display: flex;
`;
const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onSubmitLogin = () => {
    const body = {
      email,
      password,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/igor-castro-ailton/login",
        body
      )
      .then((res) => {
        console.log(res.data.token);
        localStorage.setItem('token', res.data.token)
        goToAdminHomePage(navigate)
      })
      .catch((err) => {
        console.log(err.response.data.message);
        setEmail("")
        setPassword("")
      });
  };

  return (
    <Container>
      <Header>Header</Header>
      <MainContainer>
        LoginPage
        <input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <ButtonsContainer>
          <button onClick={() => onSubmitLogin()}>Entrar</button>
          <button onClick={() => goToHomePage(navigate)}>Voltar</button>
        </ButtonsContainer>
      </MainContainer>
      <Footer>Footer</Footer>
    </Container>
  );
}

export default LoginPage;
