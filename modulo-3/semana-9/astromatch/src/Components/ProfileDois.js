import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TinderCard from "react-tinder-card";
import { Button, Container, Icon, Spinner } from "@chakra-ui/react";
import fire from "../assets/fire.png";
import { FaUserFriends } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { CloseIcon } from "@chakra-ui/icons";

const MainContainer = styled.div`
  border: 1px solid black;
  width: 400px;
  min-height: 90vh;
  border-radius: 4px;
  background-color: white;
  position: relative;
  background-image: linear-gradient(white, #f7f0f0, white);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  height: 7vh;
  position: relative;
  border-bottom: 1px solid lightgray;
`;

const ProfileContainer = styled.div`
  height: 82vh;
  border-radius: 4px;
`;

const CardProfile = styled.div`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  border-radius: 4px;
  height: 420px;
  width: 360px;
  box-shadow: rgb(117 117 117 / 77%) 0px 2px 8px 0px;
`;

const ImagemFundo = styled.img`
  max-height: 420px;
  width: 100%;
  position: absolute;
  border-radius: 4px;
  z-index: 1;
`;

const ImagemFundoBorrada = styled.img`
  height: 91%;
  width: 92%;
  border-radius: 4px;
  filter: blur(20px);
  position: absolute;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
  border-radius: 4px;
  color: #fdfdfd;
  padding: 0 0 20px 10px;
  width: 100%;
  height: 18%;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
`;

const Like = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 360px;
  height: 420px;
  right: 0;
  top: 0;
  z-index: 2;
  border-radius: 4px;
  background-color: rgba(124, 252, 0, 0.4); /* Black w/opacity/see-through */
`;

const Dislike = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 360px;
  height: 420px;
  right: 0;
  top: 0;
  z-index: 2;
  border-radius: 4px;
  border-radius: 4px;
  background-color: rgba(255, 0, 0, 0.4); /* Black w/opacity/see-through */
`;

const InfoNameAge = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.p`
  margin: 0;
  font-size: 25px;
`;

const Age = styled.p`
  margin: 4px 0 0 0;
  font-size: 20px;
`;

const Description = styled.p`
  margin: 0;
  font-size: 16px;
`;

const Loading = styled.div`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonsMatch = styled.div`
  position: absolute;
  height: 16vh;
  width: 100%;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const ButtonChoice = styled.div`
  border: 1px solid black;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 6px solid #f1f1f1;
  &:hover {
    cursor: pointer;
    border: 5px solid #f2ecec;
  }
`;

const NoMoreProfiles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContainerSearch = styled.div`
  width: 20rem;
  height: 20rem;
  margin: 0 auto;
  display: block;
  position: relative;
`;

const CircleSearch = styled.div`
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  display: block;
  border-radius: 50%;
  position: absolute;
  border: 2px solid #f25a6d;
  transform: translate(-50%, -50%);
  background: rgba(255, 182, 193, 0.4);
  animation: ripple 2s ease infinite;

  @keyframes ripple {
    from {
      width: 0.1%;
      height: 0.1%;
      opacity: 1;
    }
    to {
      width: 90%;
      height: 90%;
      opacity: 0;
    }
  }
`;

const ResetMatchText = styled.p`
  font-size: 14px;
`;

const TitleContainer = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: bold;
`;

const Title = styled.p`
  font-family: "Bebas Neue", cursive;
  background: -webkit-radial-gradient(#e04a7c, #f65e69);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const FireImage = styled.img`
  width: 30px;
  height: 30px;
`;

function ProfileDois(props) {
  const [infoProfile, setInfoProfile] = useState({});
  const [choice, setChoice] = useState("none");

  useEffect(() => {
    getProfile();
    console.log(infoProfile);
  }, []);

  const getProfile = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:${props.currentUser}/person`
      )
      .then((response) => {
        if (response.data.profile) {
          setInfoProfile(response.data.profile);
        } else {
          setInfoProfile("empty");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const ChooseProfile = (id, choice) => {
    const body = {
      id: id,
      choice: choice,
    };

    axios
      .post(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:${props.currentUser}/choose-person`,
        body
      )
      .then((response) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  const swipe = (dir) => {
    infoProfile.current.swipe(dir);
    if (dir === "left") {
      ChooseProfile(infoProfile.id, false);
      setChoice("dislike");
    } else {
      ChooseProfile(infoProfile.id, true);
      setChoice("like");
    }
    setTimeout(function () {
      props.changeScreen("profile");
    }, 250);
  };

  const swipeScreen = (dir) => {
    if (dir === "left") {
      ChooseProfile(infoProfile.id, false);
      setChoice("dislike");
    } else {
      ChooseProfile(infoProfile.id, true);
      setChoice("like");
    }
    setTimeout(function () {
      props.changeScreen("profile");
    }, 300);
  };

  return (
    <MainContainer>
      <Header>
        <Icon
          as={BiLogOut}
          onClick={() => props.changeScreen("login")}
          width="25px"
          height="25px"
          cursor="pointer"
        />
        <TitleContainer>
          <FireImage src={fire} />
          <Title>Astromatch</Title>
        </TitleContainer>
        <Icon
          as={FaUserFriends}
          onClick={() => props.changeScreen("matches")}
          width="25px"
          height="25px"
          cursor="pointer"
        />
      </Header>
      <ProfileContainer>
        {infoProfile.photo && infoProfile.id ? (
          <CardProfile>
            <TinderCard
              ref={infoProfile}
              // preventSwipe={["up", "down"]}
              // onCardLeftScreen={(dir) => swipeScreen(dir)}
              swipeRequirementType={"position"}
              swipeThreshold={250}
              onSwipeRequirementFulfilled={(dir) => swipeScreen(dir)}
            >
              <Card>
                <ImagemFundoBorrada
                  src={infoProfile.photo}
                  alt="profile-picture"
                />
                <ImagemFundo src={infoProfile.photo} alt="profile-picture" />
                {choice === "like" && <Like></Like>}
                {choice === "dislike" && <Dislike></Dislike>}
                <Info>
                  <InfoNameAge>
                    <Name>{infoProfile.name},</Name>
                    <Age>&nbsp;{infoProfile.age}</Age>
                  </InfoNameAge>
                  <Description>{infoProfile.bio}</Description>
                </Info>
              </Card>
            </TinderCard>
          </CardProfile>
        ) : (
          <Loading>
            {infoProfile === "empty" ? (
              <NoMoreProfiles>
                <ContainerSearch>
                  <CircleSearch></CircleSearch>
                </ContainerSearch>
                <p>Não há ninguém perto de você.</p>
                <ResetMatchText>(Tente resetar seus matches)</ResetMatchText>
              </NoMoreProfiles>
            ) : (
              <Spinner size="sm" color="#f65e69" />
            )}
          </Loading>
        )}
        {infoProfile.photo && infoProfile.id ? (
          <ButtonsMatch>
            <ButtonChoice onClick={() => swipe("left")}>
              <CloseIcon color="#ff6c6b" width="20px" height="20px" />
            </ButtonChoice>
            <ButtonChoice onClick={() => swipe("right")}>
              <Icon
                as={FaHeart}
                color="#4ccb93"
                width="25px"
                height="25px"
                _hover={{ width: "28px", height: "28px" }}
              />
            </ButtonChoice>
          </ButtonsMatch>
        ) : (
          <div></div>
        )}
      </ProfileContainer>
    </MainContainer>
  );
}

export default ProfileDois;
