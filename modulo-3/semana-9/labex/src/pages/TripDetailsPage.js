import React from "react";
import { useNavigate } from "react-router-dom";
import { goToAdminHomePage } from "../routes/coordinator";

function TripDetailsPage() {
  const navigate = useNavigate();

  return (
    <div>
      TripDetailsPage
      <button onClick={() => goToAdminHomePage(navigate)}>Voltar</button>
    </div>
  );
}

export default TripDetailsPage;
