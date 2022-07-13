import { useEffect, useNavigate } from "react";
import { goToLoginPage } from "../routes/coordinator";

export const useProtectedPage = (navigate) => {

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token === null) {
      goToLoginPage(navigate)
    }
  }, []);
};
