import { useEffect } from "react";
import { goToLoginPage } from "../Routes/coordinator";

export const useProtectedPage = (navigate) => {

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    if (token === null) {
      goToLoginPage(navigate)
    }
  }, [navigate]);
};
