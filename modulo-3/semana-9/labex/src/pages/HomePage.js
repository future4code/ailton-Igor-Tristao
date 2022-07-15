import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  goToLoginPage,
  goToAdminHomePage,
  goToApplicationPage,
} from "../routes/coordinator";
import {
  Icon,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import styled from "styled-components";
import { useRequestData } from "../Hooks/useRequestData";
import { Player } from "@lottiefiles/react-lottie-player";
import { SearchIcon } from "@chakra-ui/icons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  background-color: #271a5c;
  z-index: -1;
`;

const Header = styled.div`
  height: 14vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 86vh;
  z-index: 1;
`;

const ContainerFiltros = styled.div`
  height: 100%;
  width: 100%;
  height: 80px;
  padding-left: 3%;
  display: flex;
  align-items: center;
  position: relative;
`;

const TripsContainer = styled.div`
  display: flex;
  justify-content: start;
  padding: 1% 0 0 3%;
  flex-wrap: wrap;
  overflow: auto;
  width: 100%;
  height: 67vh;
  gap: 18px;
`;

const TripContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  color: black;
  gap: 4px;
  padding: 5px 5px 0 5px;
  width: 23%;
  border-radius: 4px;
  height: 200px;
  box-shadow: 2px 2px 5px black;
  background-image: linear-gradient(#684b9e, #3b236c);
`;

const TripTexts = styled.p`
  margin: 0;
  font-weight: normal;
`;

const TripTextName = styled.p`
  margin: 0;
  display: flex;
  align-self: center;
  font-size: 18px;
  font-weight: bold;
`;

const TripTextPlanet = styled.p`
  display: flex;
  margin: 0;
  align-self: center;
`;

const BackgroundContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  overflow: hidden;
  z-index: 0;
`;

const Title = styled.p`
  font-family: "Audiowide", cursive;
  font-size: 70px;
  width: 21%;
  letter-spacing: 8px;
  margin-left: 39.2%;
`;

const FloatingText = styled.div`
  position: absolute;
  bottom: 0;
  white-space: nowrap;
  -webkit-animation: linear infinite;
  -webkit-animation-name: floatIcon;
  -webkit-animation-duration: 25s;
  width: 100px;

  @keyframes floatIcon {
    0% {
      left: 0;
    }
    48% {
      -webkit-transform: rotateY(0deg);
    }
    50% {
      left: calc(100% - 100px);
      -webkit-transform: rotateY(180deg);
    }
    98% {
      -webkit-transform: rotateY(180deg);
    }
    100% {
      left: 0;
      -webkit-transform: rotateY(0deg);
    }
  }
`;

const DataAndDuration = styled.div`
  display: flex;
  gap: 12px;
`;

const ButtonApply = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 8%;
  left: 33%;
`;

const SecondTitle = styled.p`
  font-size: 35px;
  padding: 0 5px;
  font-weight: bold;
  box-shadow: 1px 1px 3px black;
  border-radius: 4px;
  position: absolute;
  left: 28%;
`;

const ContainerAnimationLogin = styled.div`
  display: flex;
  position: absolute;
  right: 3.7%;
  top: 16px;
`;

const ButtonLogin = styled.div`
  display: flex;
  position: absolute;
  right: 4%;
  top: 24px;
  border-radius: 6px;
`;

const ContainerInput = styled.div`
  box-shadow: 1px 1px 4px black;
  border-radius: 4px;
`;

function HomePage() {
  const navigate = useNavigate();

  const [filterPlanet, setFilterPlanet] = useState("")
  const token = localStorage.getItem("token");

  const trips = useRequestData(
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/igor-castro-ailton/trips"
  );

  const fixDate = (date) => {
    return `${date.slice(8, 10)}-${date.slice(5, 7)}-${date.slice(0, 4)}`;
  };

  const renderTrips = trips?.filter((trip) => {
    return filterPlanet === "" || trip.planet.toLowerCase().includes(filterPlanet.toLowerCase())
  })
  .map((trip) => {
    return (
      <TripContainer key={trip.id}>
        <TripTextName>{trip.name}</TripTextName>
        <TripTexts>{trip.description}</TripTexts>
        <TripTextPlanet>Planeta: {trip.planet}</TripTextPlanet>
        <DataAndDuration>
          <TripTexts>Data: {fixDate(trip.date)}</TripTexts>
          <TripTexts>Duração: {trip.durationInDays} dias</TripTexts>
        </DataAndDuration>
        <ButtonApply>
          <Button
            variant="outline"
            border="none"
            bg="#593b92"
            _hover={{
              background: "white",
              color: "#593b92",
            }}
            color="white"
            fontWeight="thin"
            width="100px"
            height="30px"
            fontSize="15px"
            onClick={() => goToApplicationPage(navigate, trip.name, trip.id)}
          >
            Inscreva-se
          </Button>
        </ButtonApply>
      </TripContainer>
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
          src="https://assets9.lottiefiles.com/packages/lf20_f24znioj.json"
          style={{ height: "100%", width: "125%" }}
        />
      </BackgroundContainer>
      <ContainerAnimationLogin>
        <Player
          autoplay
          loop
          src="https://assets9.lottiefiles.com/packages/lf20_Ns4TLz.json"
          style={{ height: "150px", width: "150px" }}
        />
      </ContainerAnimationLogin>
      <Header>
        <Title>LabeX</Title>
        {token ? (
          <ButtonLogin>
            <Button
              width="101px"
              height="58px"
              bg="#e89fff"
              fontSize="24px"
              fontWeight="bold"
              color="#421384"
              onClick={() => goToAdminHomePage(navigate)}
            >
              Admin
            </Button>
          </ButtonLogin>
        ) : (
          <ButtonLogin>
            <Button
              width="102px"
              height="59px"
              bg="#e89fff"
              fontSize="24px"
              fontWeight="bold"
              color="#421384"
              onClick={() => goToLoginPage(navigate)}
            >
              Entrar
            </Button>
          </ButtonLogin>
        )}
      </Header>
      <MainContainer>
        <ContainerFiltros>
          <ContainerInput>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color="white"
                fontSize="1.2em"
                children={<SearchIcon color="#e89fff" />}
              />
              <Input
                placeholder="Buscar por planetas"
                _placeholder={{ opacity: 1, color: "white", fontWeight: "thin" }}
                type="text"
                variant="outline"
                border="none"
                focusBorderColor="none"
                color="white"
                width="250px"
                fontWeight="normal"
                fontSize="18px"
                value={filterPlanet}
                onChange={(e) => setFilterPlanet(e.target.value)}
              />
            </InputGroup>
          </ContainerInput>
          <SecondTitle>Encontre a sua viagem dos sonhos!</SecondTitle>
        </ContainerFiltros>
        <TripsContainer>{renderTrips}</TripsContainer>
        <FloatingText>
          <Player
            autoplay
            loop
            src="https://assets9.lottiefiles.com/packages/lf20_pzbtwwgr.json"
            style={{ height: "120px", width: "120px" }}
          />
        </FloatingText>
      </MainContainer>
    </Container>
  );
}

export default HomePage;
