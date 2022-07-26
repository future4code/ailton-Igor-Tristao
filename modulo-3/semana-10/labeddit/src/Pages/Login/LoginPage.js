import React from "react";
import { useNavigate } from "react-router-dom";
import { goToCreateAccountPage, goToFeedPage } from "../../Routes/coordinator";
import axios from "axios";
import useForm from "../../Hooks/useForm";
import labenuIcon from "../../assets/labenuicone.png";
import { LabelFloat } from "../FloatingLabelStyled";
import { Container, ContainerTitle, ContainerInputs, Form, ButtonContinue, ButtonCreateAccount, Hr, ImageLabenu } from "./StyledLoginPage"

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
        alert("Login ou senha incorreta.");
      });
    clearFields();
  };

  return (
    <Container>
      <ContainerTitle>
        <ImageLabenu src={labenuIcon} alt="labenu-icone" />
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
          <ButtonContinue type="submit">Continuar</ButtonContinue>
          <Hr />
          <ButtonCreateAccount onClick={() => goToCreateAccountPage(navigate)}>
            Crie uma conta!
          </ButtonCreateAccount>
        </Form>
      </ContainerInputs>
    </Container>
  );
}

export default LoginPage;
