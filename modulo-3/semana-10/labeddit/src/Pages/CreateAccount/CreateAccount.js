import React from "react";
import { useNavigate } from "react-router-dom";
import { goToLoginPage } from "../../Routes/coordinator";
import useForm from "../../Hooks/useForm";
import axios from "axios";
import { LabelFloat } from "../../StyledComponents/FloatingLabelStyled";
import { BASE_URL } from "../../Scripts/baseURL"
import {
  Container,
  ContainerTitle,
  ContainerInputs,
  ContainerAgreed,
} from "./StyledCreatePage";
import styled from "styled-components";

function CreateAccount() {
  const navigate = useNavigate();

  const { form, onChange, clearFields } = useForm({
    username: "",
    email: "",
    password: "",
  });

  const onSubmitCreateAccount = (event) => {
    event.preventDefault();

    axios
      .post(`${BASE_URL}/users/signup`, form)
      .then((res) => {
        alert("Conta criada com sucesso.");
        goToLoginPage(navigate);
      })
      .catch((err) => {
        alert(`${err.response.data}`);
      });
    clearFields();
  };

  return (
    <Container>
      <ContainerTitle>
        <p>Olá, boas vindas ao LabEddit ;)</p>
      </ContainerTitle>
      <ContainerInputs>
        <form onSubmit={onSubmitCreateAccount}>
          <LabelFloat>
            <input
              name="username"
              value={form.username}
              onChange={onChange}
              placeholder=" "
              required
            />
            <label>Nome de usuário</label>
          </LabelFloat>
          <LabelFloat>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              placeholder=" "
              required
            />
            <label>E-mail</label>
          </LabelFloat>
          <LabelFloat>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={onChange}
              placeholder=" "
              required
              pattern={"^.{8,30}"}
              title={"Senha deve possuir no mínimo 8 e no máximo 30 caracteres"}
            />
            <label>Senha</label>
          </LabelFloat>
          <ContainerAgreed>
            <p>
              Ao continuar, você concorda com o nosso{" "}
              <span>Contrato de usuário</span> e nossa{" "}
              <span>Política de Privacidade</span>
            </p>
            <div>
              <input type="checkbox" required />
              <p>
                Eu concordo em receber emails sobre coisas legais no Labeddit
              </p>
            </div>
          </ContainerAgreed>
          <button type="submit" id="button-registration">Cadastrar</button>
        </form>
      </ContainerInputs>
    </Container>
  );
}

export default CreateAccount;
