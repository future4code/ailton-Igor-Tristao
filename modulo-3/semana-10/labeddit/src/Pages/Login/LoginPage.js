import React from "react";
import { useNavigate } from "react-router-dom";
import { goToCreateAccountPage, goToFeedPage } from "../../Routes/coordinator";
import axios from "axios";
import useForm from "../../Hooks/useForm";
import labenuIcon from "../../assets/labenuicone.png";
import { LabelFloat } from "../../StyledComponents/FloatingLabelStyled";
import { BASE_URL } from "../../Scripts/baseURL"
import { Container, ContainerTitle, ContainerInputs, Form } from "./StyledLoginPage"

function LoginPage() {
  const navigate = useNavigate();

  const { form, onChange, clearFields } = useForm({ email: "", password: "" });

  const onSubmitLogin = (event) => {
    event.preventDefault();

    axios
      .post(`${BASE_URL}/users/login`, form)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        goToFeedPage(navigate);
      })
      .catch((err) => {
        alert("Login ou senha incorreta.");
      });
    clearFields();
  };

  return (
    <Container>
      <ContainerTitle>
        <img src={labenuIcon} alt="labenu-icone" />
        <p>LabEddit</p>
        <span>O projeto de rede social da Labenu</span>
      </ContainerTitle>
      <ContainerInputs>
        <Form onSubmit={onSubmitLogin}>
          <LabelFloat>
            <input
              name="email"
              type="email"
              placeholder=" "
              value={form.email}
              onChange={onChange}
              required
            />
            <label>Nome</label>
          </LabelFloat>
          <LabelFloat>
            <input
              name="password"
              type="password"
              placeholder=" "
              value={form.password}
              onChange={onChange}
              required
            />
            <label>Senha</label>
          </LabelFloat>
          <button id="button-enter" type="submit">Continuar</button>
          <hr />
          <button id="button-create" onClick={() => goToCreateAccountPage(navigate)}>
            Crie uma conta!
          </button>
        </Form>
      </ContainerInputs>
    </Container>
  );
}

export default LoginPage;
