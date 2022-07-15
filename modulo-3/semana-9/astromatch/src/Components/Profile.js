import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TinderCard from "react-tinder-card";
import { Icon, Spinner } from "@chakra-ui/react";
import fire from "../assets/fire.png";
import { FaUserFriends } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { CloseIcon } from "@chakra-ui/icons";
import {
  MainContainer,
  Header,
  ProfileContainer,
  CardProfile,
  Card,
  ProfileImage,
  BlurImaged,
  Info,
  Like,
  Dislike,
  InfoNameAge,
  Name,
  Age,
  Description,
  Loading,
  ButtonsMatch,
  ButtonChoice,
  NoMoreProfiles,
  Title,
  FireImage,
  ContainerSearch,
  CircleSearch,
  ResetMatchText,
  TitleContainer,
} from "./styledComponents/ProfileStyled";

function Profile(props) {
  const [infoProfile, setInfoProfile] = useState({});
  const [choice, setChoice] = useState("none");

  useEffect(() => {
    getProfile();
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
      props.changeScreen("profile2");
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
      props.changeScreen("profile2");
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
                <BlurImaged src={infoProfile.photo} alt="profile-picture" />
                <ProfileImage src={infoProfile.photo} alt="profile-picture" />
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

export default Profile;
