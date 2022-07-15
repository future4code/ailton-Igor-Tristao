import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { goToAdminHomePage } from "../routes/coordinator";
import { useProtectedPage } from "../Hooks/useProtectedPage";
import { useGetTripDetails } from "../Hooks/useGetTripDetails";
import axios from "axios";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
`;

const Header = styled.div`
  display: flex;
  height: 12vh;
  align-items: center;
  justify-content: start;
  padding-left: 10px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 86vh;
`;

const Title = styled.p`
  font-family: "Audiowide", cursive;
  font-size: 35px;
  width: 21%;
  letter-spacing: 8px;
`;

const TripDetails = styled.div`
  border: 1px solid black;
  height: 200px;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.p`
  margin: 5px;
`;
const TripCandidates = styled.div`
  height: 100%;
  width: 40%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CandidateContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid red;
`;

const TripApproved = styled.div`
  width: 37%;
  padding: 20px;
  height: 100%;
  border: 1px solid blue;
`;

function TripDetailsPage() {
  const [showCandidates, setShowCandidates] = useState(false);
  const [showApproveds, setShowApproveds] = useState(false);

  const navigate = useNavigate();
  const pathParams = useParams();
  useProtectedPage(navigate);

  const [trip, candidates, approveds] = useGetTripDetails(pathParams.id);

  const decideCandidate = (id, decision) => {
    const token = localStorage.getItem("token");
    const body = {
      approve: decision,
    };

    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/igor-castro-ailton/trips/${trip.id}/candidates/${id}/decide`,
        body,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((res) => {
        alert("Candidatura aprovada!");
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  const renderCondicional = (info) => {
    switch (info) {
      case "candidates":
        return setShowCandidates(!showCandidates);
      default:
        return setShowApproveds(!showApproveds);
    }
  };

  const renderCandidates = candidates.map((candidate) => {
    return (
      <CandidateContainer key={candidate.id}>
        <p>Nome: {candidate.name}</p>
        <p>Profissão: {candidate.profission}</p>
        <p>Idade: {candidate.age}</p>
        <p>País: {candidate.country}</p>
        <p>Texto de candidatura: </p>
        <p>{candidate.applicationText}</p>
        <button onClick={() => decideCandidate(candidate.id, true)}>
          Aprovar
        </button>
        <button onClick={() => decideCandidate(candidate.id, false)}>
          Reprovar
        </button>
      </CandidateContainer>
    );
  });

  const renderApproved = approveds.map((approved) => {
    return (
      <div key={approved.id}>
        <p>{approved.name}</p>
      </div>
    );
  });

  return (
    <Container>
      <Header>
        <Title>LabeX</Title>
      </Header>
      <MainContainer>
        <TripDetails>
          <Text>{trip.name}</Text>
          <Text>{trip.description}</Text>
          <Text>{trip.planet}</Text>
          <Text>{trip.durationInDays}</Text>
          <Text>{trip.date}</Text>
          <button onClick={() => renderCondicional("candidates")}>
            Candidatos
          </button>
          <button onClick={() => renderCondicional("approveds")}>
            Aprovados
          </button>
        </TripDetails>
        {showCandidates && <TripCandidates>{renderCandidates}</TripCandidates>}
        {showApproveds && <TripApproved>{renderApproved}</TripApproved>}
        <button onClick={() => goToAdminHomePage(navigate)}>Voltar</button>
      </MainContainer>
    </Container>
  );
}

export default TripDetailsPage;
