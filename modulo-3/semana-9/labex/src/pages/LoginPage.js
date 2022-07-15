import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../routes/coordinator";
import styled from "styled-components";
import { goToAdminHomePage, goToHomePage } from "../routes/coordinator";
import axios from "axios";
import useForm from "../Hooks/useForm";

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

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

function LoginPage() {
  const { form, onChange, clearFields } = useForm({ email: "", password: "" });

  const navigate = useNavigate();

  const onSubmitLogin = (event) => {
    event.preventDefault();

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/igor-castro-ailton/login",
        form
      )
      .then((res) => {
        console.log(res.data.token);
        localStorage.setItem("token", res.data.token);
        goToAdminHomePage(navigate);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
    clearFields();
  };

  return (
    <Container>
      <Header>Header</Header>
      <MainContainer>
        LoginPage
        <Form onSubmit={onSubmitLogin}>
          <input
            name="email"
            type="email"
            placeholder="Insira seu email"
            value={form.email}
            onChange={onChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Insira sua senha"
            value={form.password}
            onChange={onChange}
            required
          />
          <button>Entrar</button>
        </Form>
        <button onClick={() => goToHomePage(navigate)}>Voltar</button>
      </MainContainer>
      <Footer>Footer</Footer>
    </Container>
  );
}

export default LoginPage;
