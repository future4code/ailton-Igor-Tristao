import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../Pages/Login/LoginPage";
import CreateAccount from "../Pages/CreateAccount/CreateAccount";
import FeedPage from "../Pages/Feed/FeedPage";
import PostPage from "../Pages/Post/PostPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/create" element={<CreateAccount />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/post/:id" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
