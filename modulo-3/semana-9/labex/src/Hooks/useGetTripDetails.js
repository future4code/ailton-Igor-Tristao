import { useState, useEffect } from "react";
import axios from "axios";

export const useGetTripDetails = (id) => {
  const [trip, setTrip] = useState({});
  const [candidates, setCandidates] = useState([]);
  const [approveds, setApproveds] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/igor-castro-ailton/trip/${id}`,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((res) => {
        setTrip(res.data.trip);
        setCandidates(res.data.trip.candidates);
        setApproveds(res.data.trip.approved);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return [ trip, candidates, approveds ];
};
