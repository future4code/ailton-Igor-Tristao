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
  height: 14vh;
  display: flex;
  align-items: center;
  z-index: 1;
  padding: 0 10px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 86vh;
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

const TripDetails = styled.div`
  box-shadow: 1px 1px 4px black;
  padding: 1%;
  border-radius: 6px;
  height: 100%;
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.p`
  margin: 5px;
  color: black;
  font-size: 18px;
`;
const TripCandidates = styled.div`
  height: 100%;
  width: 35%;
  margin-top: 5px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CandidatesEmpty = styled.div`
  height: 100%;
  width: 35%;
  box-shadow: 1px 1px 6px black;
  margin-top: 5px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: black;
`;

const CandidateContainer = styled.div`
  height: 100%;
  width: 100%;
  box-shadow: 1px 1px 6px black;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  color: black;
`;

const TripApproved = styled.div`
  height: 100%;
  width: 35%;
  box-shadow: 1px 1px 6px black;
  margin-top: 5px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 20px;
  color: black;
`;

const ApprovedEmpty = styled.div`
  height: 100%;
  width: 35%;
  box-shadow: 1px 1px 6px black;
  margin-top: 5px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: black;
`;

const TextName = styled.p`
  font-size: 36px;
  color: black;
  font-weight: bold;
`;

const TextsContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2% 0;
  gap: 10px;
`;

const LoadingContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 15%;
`

export { LoadingContainer, Container, Header, MainContainer, TitleHeader, BackgroundContainer, TripDetails, Text, TripCandidates, CandidatesEmpty, CandidateContainer, TripApproved, ApprovedEmpty, TextName, TextsContainer, ButtonsContainer}