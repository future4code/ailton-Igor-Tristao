import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { goToAdminHomePage } from "../routes/coordinator";
import { useProtectedPage } from "../Hooks/useProtectedPage";
import { useGetTripDetails } from "../Hooks/useGetTripDetails";
import axios from "axios";
import { Player } from "@lottiefiles/react-lottie-player";
import { Button } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import {
  Container,
  Header,
  MainContainer,
  TitleHeader,
  BackgroundContainer,
  TripDetails,
  Text,
  TripCandidates,
  CandidatesEmpty,
  CandidateContainer,
  TripApproved,
  ApprovedEmpty,
  TextName,
  TextsContainer,
  ButtonsContainer,
  LoadingContainer,
} from "../styledComponents/TripDetailsPage";

function TripDetailsPage() {
  const [showCandidates, setShowCandidates] = useState(false);
  const [showApproveds, setShowApproveds] = useState(false);

  const navigate = useNavigate();
  const pathParams = useParams();
  useProtectedPage(navigate);

  const [trip, candidates, approveds, isLoading] = useGetTripDetails(
    pathParams.id
  );

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
        if (decision === true) {
          alert("Candidatura aprovada.");
        } else {
          alert("Candidatura reprovada.");
        }
      })
      .catch((err) => {
      });
  };

  const fixDate = () => {
    if (trip.date) {
      return `${trip.date.slice(8, 10)}-${trip.date.slice(
        5,
        7
      )}-${trip.date.slice(0, 4)}`;
    }
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
        <TextsContainer>
          <p>
            <strong>Nome:</strong> {candidate.name}
          </p>
          <p>
            <strong>Profissão:</strong> {candidate.profession}
          </p>
          <p>
            <strong>Idade:</strong> {candidate.age}
          </p>
          <p>
            <strong>País:</strong> {candidate.country}
          </p>
          <p>
            <strong>Texto de candidatura:</strong>{" "}
          </p>
          <p>{candidate.applicationText}</p>
        </TextsContainer>
        <ButtonsContainer>
          <Button onClick={() => decideCandidate(candidate.id, true)}>
            Aprovar
          </Button>
          <Button onClick={() => decideCandidate(candidate.id, false)}>
            Reprovar
          </Button>
        </ButtonsContainer>
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
      <BackgroundContainer>
        <Player
          backgroundSize="cover"
          backgroundRepeat="repeat"
          autoplay
          loop
          src="https://assets8.lottiefiles.com/private_files/lf30_nSM2dY.json"
          style={{ height: "100%", width: "100%" }}
        />
      </BackgroundContainer>
      <Header>
        <TitleHeader>LabeX</TitleHeader>
      </Header>
      <MainContainer>
        {!isLoading ? (
          <TripDetails>
            <TextName>{trip.name}</TextName>
            <TextsContainer>
              <Text>
                <strong>Descrição: </strong>
                {trip.description}
              </Text>
              <Text>
                <strong>Planeta: </strong>
                {trip.planet}
              </Text>
              <Text>
                <strong>Duração: </strong>
                {trip.durationInDays}
              </Text>
              <Text>
                <strong>Data: </strong>
                {fixDate()}
              </Text>
            </TextsContainer>
            <ButtonsContainer>
              <Button onClick={() => renderCondicional("candidates")}>
                Candidatos
              </Button>
              <Button onClick={() => renderCondicional("approveds")}>
                Aprovados
              </Button>
            </ButtonsContainer>
          </TripDetails>
        ) : (
          <LoadingContainer>
            <Spinner />
          </LoadingContainer>
        )}
        {showCandidates && candidates.length > 0 && (
          <TripCandidates>{renderCandidates}</TripCandidates>
        )}
        {showCandidates && candidates.length === 0 && (
          <CandidatesEmpty>Não há nenhum candidato.</CandidatesEmpty>
        )}
        {showApproveds && approveds.length > 0 && (
          <TripApproved>
            <p>
              <strong>Candidatos aprovados:</strong>
            </p>
            {renderApproved}
          </TripApproved>
        )}
        {showApproveds && approveds.length === 0 && (
          <ApprovedEmpty>Não há nenhum candidato aprovado.</ApprovedEmpty>
        )}
        {!isLoading && (
          <Button marginTop="5px" onClick={() => goToAdminHomePage(navigate)}>
            Voltar
          </Button>
        )}
      </MainContainer>
    </Container>
  );
}

export default TripDetailsPage;
