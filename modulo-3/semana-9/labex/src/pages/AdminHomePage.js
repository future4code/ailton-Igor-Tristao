import React from "react";
import styled from "styled-components";
import {
  goToCreateTripPage,
  goToTripDetailsPage,
  goToHomePage,
} from "../routes/coordinator";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

function AdminHomePage() {
  const navigate = useNavigate();

  return (
    <Container>
      AdminHomePage
      <button onClick={() => goToCreateTripPage(navigate)}>
        Cadastrar viagens
      </button>
      <button onClick={() => goToTripDetailsPage(navigate)}>
        Detalhes da viagem
      </button>
      <button onClick={() => goToHomePage(navigate)}>Logout</button>
    </Container>
  );
}

export default AdminHomePage;
