import styled from "styled-components";

const MainContainer = styled.div`
  border: 1px solid black;
  width: 400px;
  min-height: 90vh;
  height: 100%;
  border-radius: 4px;
  background-color: white;
  background-image: linear-gradient(#f7f0f0, white, #f7f0f0);
  /* display: flex; */

`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  height: 7vh;
  position: relative;
  border-bottom: 1px solid lightgray;
  margin-bottom: 5px;
`;

const Title = styled.p`
  font-family: "Bebas Neue", cursive;
  background: -webkit-radial-gradient(#e04a7c, #f65e69);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const TitleContainer = styled.div`
  display: flex;
  width: 30%;
  font-size: 20px;
  margin-right: 36%;
  font-weight: bold;
`;

const Loading = styled.div`
  min-height: 70vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FireImage = styled.img`
  width: 30px;
  height: 30px;
`;

const ContainerMatches = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ContainerMatch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px 0 2px;
  /* box-shadow: 20px 30px 50px 10px white inset; */
  box-shadow: 2px 1px 8px 2px rgba(0, 0, 0, 0.05),
    0px 2px 1px -1px rgb(0 0 0 / 30%);
  margin: 5px;
  border-radius: 8px;
  width: 90%;
  height: 65px;
  color: black;
  &:hover {
    background-image: linear-gradient(#f65e69, #e04a7c);
    cursor: pointer;
    border: 1px solid #f78890;
    color: white;
  }
`;

const MatchImage = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  margin-right: 10px;
`;

const ContainerProfilePicture = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const NoMoreProfiles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 35px;
`;


export {
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
};
