import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  goToLoginPage,
  goToAdminHomePage,
  goToApplicationPage,
} from "../routes/coordinator";
import { Button, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRequestData } from "../Hooks/useRequestData";
import { Player } from "@lottiefiles/react-lottie-player";
import { SearchIcon } from "@chakra-ui/icons";
import {
  ContainerInput,
  ButtonLogin,
  ContainerAnimationLogin,
  SecondTitle,
  ButtonApply,
  DataAndDuration,
  FloatingText,
  Title,
  BackgroundContainer,
  TripTextPlanet,
  TripTextName,
  TripTexts,
  TripContainer,
  TripsContainer,
  MainContainer,
  Header,
  Container,
  ContainerFiltros,
  TripTextDescription,
} from "../styledComponents/HomeStyled";

function HomePage() {
  const navigate = useNavigate();

  const [filterPlanet, setFilterPlanet] = useState("");
  const token = localStorage.getItem("token");

  const trips = useRequestData(
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/igor-castro-ailton/trips"
  );

  const fixDate = (date) => {
    return `${date.slice(8, 10)}-${date.slice(5, 7)}-${date.slice(0, 4)}`;
  };

  const renderTrips = trips
    ?.filter((trip) => {
      return (
        filterPlanet === "" ||
        trip.planet.toLowerCase().includes(filterPlanet.toLowerCase())
      );
    })
    .map((trip) => {
      return (
        <TripContainer key={trip.id}>
          <TripTextName>{trip.name}</TripTextName>
          <TripTextDescription>{trip.description}</TripTextDescription>
          <TripTextPlanet>
            <strong>Planeta: </strong>&nbsp;{trip.planet}
          </TripTextPlanet>
          <DataAndDuration>
            <TripTexts>
              <strong>Data: </strong> {fixDate(trip.date)}
            </TripTexts>
            <TripTexts>
              <strong>Duração: </strong> {trip.durationInDays} dias
            </TripTexts>
          </DataAndDuration>
          <ButtonApply>
            <Button
              variant="outline"
              border="2px solid #593b92"
              borderColor="#3a226b"
              bg="#593b92"
              _hover={{
                background: "white",
                color: "#3a226b",
              }}
              color="white"
              fontWeight="normal"
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
                _placeholder={{
                  opacity: 1,
                  color: "white",
                  fontWeight: "thin",
                }}
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
