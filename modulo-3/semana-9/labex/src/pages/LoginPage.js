import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../routes/coordinator";
import styled from "styled-components";
import { goToAdminHomePage } from "../routes/coordinator";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

function LoginPage() {
  const navigate = useNavigate();

  return (
    <Container>
      LoginPage
      <button onClick={() => goToAdminHomePage(navigate)}>Entrar</button>
      <button onClick={() => goBack(navigate)}>Voltar</button>
    </Container>
  );
}

export default LoginPage;
