export const goToLoginPage = (navigate) => {
  navigate("/login");
};

export const goToHomePage = (navigate) => {
  navigate("/");
};

export const goToAdminHomePage = (navigate) => {
  navigate("/admin");
};

export const goToCreateTripPage = (navigate) => {
  navigate(`/admin/create`);
};

export const goToTripDetailsPage = (navigate) => {
  navigate(`/admin/tripDetails`);
};

export const goToApplicationPage = (navigate) => {
  navigate(`/application`);
};

export const goBack = (navigate) => {
  navigate(-1);
};
