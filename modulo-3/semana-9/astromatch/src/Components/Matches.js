import axios from "axios";
import React, { useEffect, useState } from "react";
import fire from "../assets/fire.png";
import { Button, Icon, Spinner } from "@chakra-ui/react";
import { IoIosReturnLeft } from "react-icons/io";
import { RiWechatFill } from "react-icons/ri";
import {
  MainContainer,
  Header,
  Title,
  TitleContainer,
  Loading,
  FireImage,
  ContainerMatches,
  ContainerMatch,
  MatchImage,
  ContainerProfilePicture,
  NoMoreProfiles,
} from "./styledComponents/MatchesStyled";

function Matches(props) {
  const [matches, setMatches] = useState([]);
  const [noMoreMatches, setNoMoreMatches] = useState(false);

  useEffect(() => {
    getMatches();
  }, []);

  const getMatches = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:${props.currentUser}/matches`
      )
      .then((response) => {
        if (response.data.matches.length === 0) {
          setNoMoreMatches(true);
          setMatches(response.data.matches);
        } else {
          setMatches(response.data.matches);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const clearMatches = () => {
    axios
      .put(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:${props.currentUser}/clear`
      )
      .then((response) => {
        alert("Você desfez seus matches.");
        getMatches();
        setNoMoreMatches(!false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const renderMatches = matches.map((match) => {
    return (
      <ContainerMatch key={match.id}>
        <ContainerProfilePicture>
          <MatchImage src={match.photo} alt="match" />
          <p>
            {match.name}, {match.age}
          </p>
        </ContainerProfilePicture>
        <div>
          <Icon
            as={RiWechatFill}
            color="blackAlpha.700"
            cursor="pointer"
            paddingTop="5px"
            width="30px"
            height="30px"
          />
        </div>
      </ContainerMatch>
    );
  });

  return (
    <MainContainer>
      <Header>
        <Icon
          cursor="pointer"
          width="35px"
          height="35px"
          as={IoIosReturnLeft}
          onClick={() => props.changeScreen("profile")}
        />
        <TitleContainer>
          <FireImage src={fire} />
          <Title>Matches</Title>
        </TitleContainer>
      </Header>
      {matches[0] ? (
        <ContainerMatches>
          {renderMatches}
          <Button
            transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
            _active={{
              transform: "scale(1.02)",
            }}
            marginTop="10px"
            height="32px"
            marginBottom="10px"
            _hover={{ bg: "linear-gradient(#f57a83, #df638d)" }}
            color="white"
            backgroundImage="linear-gradient(#f65e69, #e04a7c)"
            onClick={() => clearMatches()}
          >
            Desfazer matches
          </Button>
        </ContainerMatches>
      ) : (
        <Loading>
          {noMoreMatches === true ? (
            <NoMoreProfiles>
              <p>Você ainda não deu um match!</p>
              <Button
                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                _active={{
                  transform: "scale(1.02)",
                }}
                marginTop="10px"
                height="32px"
                marginBottom="10px"
                _hover={{ bg: "linear-gradient(#f57a83, #df638d)" }}
                color="white"
                backgroundImage="linear-gradient(#f65e69, #e04a7c)"
                onClick={() => clearMatches()}
              >
                Resetar matches
              </Button>
            </NoMoreProfiles>
          ) : (
            <Spinner size="sm" color="#f65e69" />
          )}
        </Loading>
      )}
    </MainContainer>
  );
}

export default Matches;
