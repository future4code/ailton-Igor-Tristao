import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { goToLoginPage, goToAdminHomePage } from "../routes/coordinator";
import styled from "styled-components";
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
`;

const Footer = styled.div`
  height: 10vh;
  display: flex;
`;

const ContainerFiltros = styled.div`
  height: 100%;
  width: 100%;
  justify-content: center;
  display: flex;
`;

const TripsContainer = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  width: 100%;
`;

const TripContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  gap: 8px;
  padding: 5px;
  width: 20%;
  height: 200px;
  border: 1px solid black;
`;

const TripTexts = styled.p`
  margin: 0;
`;

const TripTextName = styled.p`
  margin: 0;
  display: flex;
  align-self: center;
`;

const ApplicationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 200px;
  justify-content: center;
`;

function HomePage() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [applicationText, setApplicationText] = useState("");
  const [profession, setProfession] = useState("");
  const [country, setCountry] = useState("");
  const [tripName, setTripName] = useState("");
  const [tripId, setTripId] = useState("");

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const trips = useRequestData(
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/igor-castro-ailton/trips"
  );

  const renderTrips = trips?.map((trip) => {
    return (
      <TripContainer key={trip.id}>
        <TripTextName>{trip.name}</TripTextName>
        <TripTexts>{trip.description}</TripTexts>
        <TripTexts>{trip.planet}</TripTexts>
        <TripTexts>Data: {trip.date}</TripTexts>
        <TripTexts>Duração: {trip.durationInDays}</TripTexts>
        <button onClick={() => saveTripNameAndId(trip.name, trip.id)}>
          Aplicar para a viagem
        </button>
      </TripContainer>
    );
  });

  const saveTripNameAndId = (name, id) => {
    setTripName(name);
    setTripId(id);
  };

  const applicationTrip = (id) => {
    const body = {
      name,
      age,
      applicationText,
      profession,
      country,
    };

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/igor-castro-ailton/trips/${id}/apply`,
        body
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setName("");
    setAge("");
    setApplicationText("");
    setProfession("");
    setCountry("");
  };

  return (
    <Container>
      <Header>
        {token ? (
          <button onClick={() => goToAdminHomePage(navigate)}>
            Admin Page
          </button>
        ) : (
          <button onClick={() => goToLoginPage(navigate)}>Login page</button>
        )}
      </Header>
      <MainContainer>
        <ContainerFiltros>
          <input placeholder="inputs filtros" />
        </ContainerFiltros>
        <p>Lista de viagens</p>
        <TripsContainer>{renderTrips}</TripsContainer>
        {tripName !== "" && (
          <ApplicationContainer>
            <p>Aplicando para a viagem:</p>
            <p>{tripName}</p>
            <input
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="Idade"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <input
              placeholder="Motivos para ser aceito"
              value={applicationText}
              onChange={(e) => setApplicationText(e.target.value)}
            />
            <input
              placeholder="Profissão"
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
            />
            <input
              placeholder="País de origem"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            <button onClick={() => applicationTrip(tripId)}>Aplicar</button>
          </ApplicationContainer>
        )}
      </MainContainer>
      <Footer>Footer</Footer>
    </Container>
  );
}

export default HomePage;
