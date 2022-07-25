import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { goToCreateAccountPage, goToFeedPage } from "../../Routes/coordinator";
import axios from "axios";
import useForm from "../../Hooks/useForm";

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 1rem;
`;

function LoginPage() {
  const navigate = useNavigate();

  const { form, onChange, clearFields } = useForm({ email: "", password: "" });

  const onSubmitLogin = (event) => {
    event.preventDefault();

    axios
      .post("https://labeddit.herokuapp.com/users/login", form)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        goToFeedPage(navigate);
      })
      .catch((err) => {
        alert('Login ou senha incorreta.')
      });
    clearFields();
  };

  return (
    <Container>
      <p>LoginPage</p>
      <ContainerInputs>
        <form onSubmit={onSubmitLogin}>
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
          <button type="submit">Continuar</button>
          <button onClick={() => goToCreateAccountPage(navigate)}>
            Cadastrar
          </button>
        </form>
      </ContainerInputs>
    </Container>
  );
}

export default LoginPage;
