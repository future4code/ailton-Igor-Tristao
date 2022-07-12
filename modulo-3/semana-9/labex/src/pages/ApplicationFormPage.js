import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { goBack } from "../routes/coordinator";

function ApplicationForm() {
  const navigate = useNavigate();
  //   const params = useParams();

  return (
    <div>
      FormPage
      <button onClick={() => goBack(navigate)}>Voltar</button>
    </div>
  );
}

export default ApplicationForm;
