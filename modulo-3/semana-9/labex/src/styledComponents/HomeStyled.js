import styled from 'styled-components'

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
  padding: 1% 0 1% 3%;
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
  background-image: linear-gradient(to right, #684b9e, #3b236c);
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
  color: black;
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
  border-radius: 4px;
  position: absolute;
  left: 28%;
  color: black;
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

const TripTextDescription = styled.p`
min-height: 50px;
`
export { TripTextDescription, ContainerInput, ButtonLogin, ContainerAnimationLogin, SecondTitle, ButtonApply, DataAndDuration, FloatingText, Title, BackgroundContainer, TripTextPlanet, TripTextName, TripTexts, TripContainer, TripsContainer, MainContainer, Header, Container, ContainerFiltros}