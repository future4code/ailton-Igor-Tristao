import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  z-index: -1;
  background-color: #c7c9ce;
`;

const Header = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;
  z-index: 1;
  padding: 0 10px;
`;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 86vh;
  width: 100%;
  color: white;
  z-index: 1;
`;

const TitleHeader = styled.p`
  font-family: "Audiowide", cursive;
  font-size: 35px;
  width: 21%;
  letter-spacing: 8px;
  color: black;
`;

const BackgroundContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  overflow: hidden;
  z-index: 0;
`;

const TripContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  justify-content: space-between;
  padding: 5px;
  width: 280px;
  height: 100px;
  margin: 10px 0;
  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: 1px 1px 3px black;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    box-shadow: 1px 1px 5px black;
  }
`;

const TripTextName = styled.p`
  margin: 0;
  display: flex;
  align-self: center;
  font-size: 24px;
`;

const TripsContainer = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  width: 100%;
  justify-content: start;
  overflow: auto;
  padding-left: 4%;
`;

const TripManagement = styled.div`
  display: flex;
  width: 47%;
  height: 84vh;
  flex-direction: column;
  align-items: center;
  box-shadow: 1px 1px 6px -1px black;
  border-radius: 6px;
  padding-bottom: 1%;
`;

const Panel = styled.div`
  display: flex;
  width: 47%;
  height: 84vh;
  flex-direction: column;
  align-items: center;
  box-shadow: 1px 1px 6px -1px black;
  border-radius: 6px;
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: end;
  gap: 15px;
  padding: 0 10px;
`;

const TextManagement = styled.p`
  font-size: 40px;
  margin: 5px 0 10px 0;
`;

const ButtonsPanel = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 20px;
`;

const ShipContainer = styled.div`
  margin-top: 8%;
`;

export { ShipContainer, ButtonsPanel, TextManagement, IconsContainer, Panel, TripManagement, TripsContainer, TripTextName, TripContainer, BackgroundContainer, TitleHeader, MainContainer, Header, Container}