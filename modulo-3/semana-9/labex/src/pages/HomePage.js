import React from "react";
import { useNavigate } from "react-router-dom";
import { goToLoginPage, goToApplicationPage } from "../routes/coordinator";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

function HomePage() {
  const navigate = useNavigate();

  return (
    <Container>
      <p>HomePage</p>
      <p>Lista de viagens</p>
      <p>Formulario (renderizado condicionalmente)</p>
      <button onClick={() => goToLoginPage(navigate)}>Login page</button>
      <button onClick={() => goToApplicationPage(navigate)}>
        Aplication form page
      </button>
    </Container>
  );
}

export default HomePage;
