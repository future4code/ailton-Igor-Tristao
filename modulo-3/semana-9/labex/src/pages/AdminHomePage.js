import React, { useEffect, useState } from "react";
import {
  goToCreateTripPage,
  goToTripDetailsPage,
  goToLoginPage,
} from "../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../Hooks/useProtectedPage";
import { Player } from "@lottiefiles/react-lottie-player";
import { Icon, Button } from "@chakra-ui/react";
import { IoMdSettings } from "react-icons/io";
import { BsFillTrashFill } from "react-icons/bs";
import axios from "axios";
import { ShipContainer, ButtonsPanel, TextManagement, IconsContainer, Panel, TripManagement, TripsContainer, TripTextName, TripContainer, BackgroundContainer, TitleHeader, MainContainer, Header, Container} from "../styledComponents/AdminHomePage"

function AdminHomePage() {
  const navigate = useNavigate();

  useProtectedPage(navigate);

  const [trips, setTrips] = useState([]);

  useEffect(() => {
    getTrip();
  }, []);

  const deleteTrip = (id) => {
    const token = localStorage.getItem("token");

    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/igor-castro-ailton/trips/${id}`,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((res) => {
        alert("Viagem deletada com sucesso.");
        getTrip();
      })
      .catch((err) => {
      });
  };

  const getTrip = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/igor-castro-ailton/trips`
      )
      .then((res) => {
        setTrips(res.data.trips);
      })
      .catch((err) => {
      });
  };

  const renderTrips = trips?.map((trip) => {
    return (
      <TripContainer key={trip.id}>
        <TripTextName>{trip.name}</TripTextName>
        <IconsContainer>
          <Icon
            width="20px"
            height="20px"
            as={IoMdSettings}
            _hover={{ cursor: "pointer" }}
            onClick={() => goToTripDetailsPage(navigate, trip.id)}
          />
          <Icon
            onClick={() => deleteTrip(trip.id)}
            width="20px"
            height="20px"
            as={BsFillTrashFill}
            _hover={{ cursor: "pointer" }}
          />
        </IconsContainer>
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
          src="https://assets8.lottiefiles.com/private_files/lf30_nSM2dY.json"
          style={{ height: "100%", width: "100%" }}
        />
      </BackgroundContainer>
      <Header>
        <TitleHeader>LabeX</TitleHeader>
      </Header>
      <MainContainer>
        <TripManagement>
          <TextManagement>Gerencie suas viagens</TextManagement>
          <TripsContainer>{renderTrips}</TripsContainer>
        </TripManagement>
        <Panel>
          <TextManagement>Painel</TextManagement>
          <ButtonsPanel>
            <Button
              width="140px"
              color="black"
              onClick={() => goToCreateTripPage(navigate)}
            >
              Cadastrar viagens
            </Button>
            <Button
              width="140px"
              color="black"
              onClick={() => goToLoginPage(navigate, "logout")}
            >
              Logout
            </Button>
          </ButtonsPanel>
          <ShipContainer>
            <Player
              autoplay
              loop
              src="https://assets8.lottiefiles.com/packages/lf20_st6x0keq.json"
              style={{ height: "250px", width: "250px" }}
            />
          </ShipContainer>
        </Panel>
      </MainContainer>
    </Container>
  );
}

export default AdminHomePage;
