export const goToLoginPage = (navigate, logout) => {

  navigate("/login");
  if(logout === 'logout') {
    window.localStorage.clear();
  }
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

export const goToTripDetailsPage = (navigate, id) => {
  navigate(`/admin/tripDetails/${id}`);
};

export const goToApplicationPage = (navigate, name, id) => {
  navigate(`/application/${name}/${id}`);
};

export const goBack = (navigate) => {
  navigate(-1);
};
