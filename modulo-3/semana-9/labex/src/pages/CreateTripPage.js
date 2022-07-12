import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../routes/coordinator";

function CreateTripPage() {
  const navigate = useNavigate();

  return (
    <div>
      CreateTripPage
      <button onClick={() => goBack(navigate)}>Voltar</button>
    </div>
  );
}

export default CreateTripPage;
