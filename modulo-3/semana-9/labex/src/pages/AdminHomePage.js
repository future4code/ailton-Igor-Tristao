import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import {
  goToCreateTripPage,
  goToTripDetailsPage,
  goToLoginPage,
  goToHomePage,
} from "../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../Hooks/useProtectedPage";
import { useRequestData } from "../Hooks/useRequestData";

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
  gap: 30px;
`;

const Footer = styled.div`
  height: 10vh;
  display: flex;
`;

const TripContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  gap: 8px;
  padding: 5px;
  width: 15%;
  height: 50px;
  border: 1px solid black;
`;

const TripTextName = styled.p`
  margin: 0;
  display: flex;
  align-self: center;
`;

const TripsContainer = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  width: 100%;
`;

function AdminHomePage() {
  const navigate = useNavigate();

  useProtectedPage(navigate);

  const trips = useRequestData(
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/igor-castro-ailton/trips"
  );


  const renderTrips = trips?.map((trip) => {
    return (
      <TripContainer key={trip.id}>
        <TripTextName>{trip.name}</TripTextName>
        <button onClick={() => goToTripDetailsPage(navigate, trip.id)}>
          Detalhes da viagem
        </button>
      </TripContainer>
    );
  });

  return (
    <Container>
      <Header>AdminHomePage</Header>
      <MainContainer>
        <button onClick={() => goToCreateTripPage(navigate)}>
          Cadastrar viagens
        </button>
        <TripsContainer>{renderTrips}</TripsContainer>
        <button onClick={() => goToLoginPage(navigate, "logout")}>
          Logout
        </button>
      </MainContainer>
      <Footer>Footer</Footer>
    </Container>
  );
}

export default AdminHomePage;
