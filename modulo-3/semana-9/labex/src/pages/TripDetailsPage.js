import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { goToAdminHomePage } from "../routes/coordinator";
import { useProtectedPage } from "../Hooks/useProtectedPage";
import axios from "axios";

function TripDetailsPage() {
  const navigate = useNavigate();
  const pathParams = useParams();
  useProtectedPage(navigate);

  const [trip, setTrip] = useState({})
  const [candidates, setCandidates] = useState([])
  const [approved, setApproved] = useState([])

    useEffect(() => {
      getTripDetails();
    }, []);

  const getTripDetails = () => {
    const token = localStorage.getItem("token");

    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/igor-castro-ailton/trip/${pathParams.id}`,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((res) => {
        console.log(res);
        setTrip(res.data.trip)
        setCandidates(res.data.trip.candidates)
        setApproved(res.data.trip.approved)
      })
      .catch((err) => {
        console.log(err);
      });
  };

//   Trip = objeto com as infos
//   candidates = array com os candidatos (map)
//   approved = array com os aprovados (map)

  return (
    <div>
      <p>{trip.name}</p>
      <button onClick={() => goToAdminHomePage(navigate)}>Voltar</button>
    </div>
  );
}

export default TripDetailsPage;
