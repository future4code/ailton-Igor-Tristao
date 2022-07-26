export const goToCreateAccountPage = (navigate) => {
  navigate("/create");
};

export const goToLoginPage = (navigate, logout) => {
  navigate("/");
  if (logout === "logout") {
    window.localStorage.clear();
  }
};

export const goBack = (navigate) => {
  navigate(-1);
};

export const goToFeedPage = (navigate) => {
  navigate("/feed");
};

export const goToPostPage = (navigate, id) => {
  navigate(`/post/${id}`);
};
