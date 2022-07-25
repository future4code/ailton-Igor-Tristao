import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { goBack } from "../../Routes/coordinator";
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
  align-items: center;
  justify-content: center;
  width: 50%;
  gap: 1rem;
`;

function CreateAccount() {
  const navigate = useNavigate();

  const { form, onChange, clearFields } = useForm({
    username: "",
    email: "",
    password: "",
  });

  const deuCerto = (event) => {
    event.preventDefault();
    alert("deu certo");
  };

  return (
    <Container>
      <button onClick={() => goBack(navigate)}>Voltar</button>
      <p>Create Accont</p>
      <form onSubmit={deuCerto} style={{ width: "100%", display: 'flex', justifyContent: 'center' }}>
        <ContainerInputs>
          <input
            name="username"
            value={form.username}
            onChange={onChange}
            placeholder="nome de usuario"
            required
          />
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            placeholder="email"
            required
          />
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={onChange}
            placeholder="senha"
            required
          />
          <button type="submit">Cadastrar</button>
        </ContainerInputs>
      </form>
    </Container>
  );
}

export default CreateAccount;
