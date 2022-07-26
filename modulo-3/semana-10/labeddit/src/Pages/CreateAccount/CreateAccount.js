import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { goBack, goToLoginPage } from "../../Routes/coordinator";
import useForm from "../../Hooks/useForm";
import axios from "axios";
import { LabelFloat } from "../FloatingLabelStyled";

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContainerTitle = styled.div`
  height: 45vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-family: "IBM Plex Sans";
    font-size: 33px;
    font-weight: 700;
    width: 90%;
    color: #373737;
  }

  button {
    align-self: start;
  }

  @media screen and (max-width: 400px) {
    height: 32vh;
  }
`;

const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  height: 55vh;
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 55vh;
  width: 100%;
  gap: 5px;

  @media screen and (max-width: 400px) {
    height: 65vh;
  }
`;
const ButtonCreate = styled.button`
  width: 90%;
  height: 3.2rem;
  border: none;
  border-radius: 27px;
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  color: white;
  font-size: 18px;
  font-weight: 700;
  font-family: "Noto Sans";
`;

const ContainerAgreed = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  gap: 10px;
  margin: 3rem 0 1rem 0;

  p {
    font-size: 14px;
    font-family: "Noto Sans";
    font-weight: 400;
    color: black;
    margin: 0;
  }

  span {
    color: #4088cb;
  }

  div {
    display: flex;
    gap: 8px;
    align-items: center;
  }

`;

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
      .post("https://labeddit.herokuapp.com/users/signup", form)
      .then((res) => {
        console.log(res);
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
        {/* <button onClick={() => goBack(navigate)}>Voltar</button> */}
        <p>Olá, boas vindas ao LabEddit ;)</p>
      </ContainerTitle>
      <ContainerInputs>
        <Form onSubmit={onSubmitCreateAccount}>
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
              <input type="checkbox" required/>
              <p>
                Eu concordo em receber emails sobre coisas legais no Labeddit
              </p>
            </div>
          </ContainerAgreed>
          <ButtonCreate type="submit">Cadastrar</ButtonCreate>
        </Form>
      </ContainerInputs>
    </Container>
  );
}

export default CreateAccount;
