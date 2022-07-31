import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { goToLoginPage } from "../../Routes/coordinator";
import { useProtectedPage } from "../../Hooks/useProtectedData";
import labenuIcon from "../../assets/labenu.jpg";
import useForm from "../../Hooks/useForm";
import axios from "axios";
import PostPage from "../Post/PostPage";
import arrowup from "../../assets/arrowup.png";
import arrowdown from "../../assets/arrow.png";
import arrowred from "../../assets/arrowred.png";
import arrowgreen from "../../assets/arrowgreen.png";
import comment from "../../assets/comment.png";
import commenting from "../../assets/commenting.png";
import share from "../../assets/share.png";
import sharing from "../../assets/sharing.png";
import { BASE_URL } from "../../Scripts/baseURL";
import { Spinner } from "../../StyledComponents/SpinnerStyled";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";
import {
  Container,
  Form,
  Post,
  Votes,
  ContainerPostMap,
  LabelFloat,
} from "./StyledFeedPage";
import { useRequestData } from "../../Hooks/useRequestData";

function FeedPage() {
  const navigate = useNavigate();
  useProtectedPage(navigate);
  const token = localStorage.getItem("token");

  const [visible, setVisible] = useState(5);
  const [reRenderPosts, setReRenderPosts] = useState(false);
  const [showCommentsArray, setShowCommentsArray] = useState([]);
  const [showShareArray, setShowShareArray] = useState([]);
  const [inputSearch, setInputSearch] = useState("");

  const [data, isLoading] = useRequestData(visible, reRenderPosts);

  const { form, onChange, clearFields } = useForm({
    title: "",
    body: "",
  });

  const showComments = (postId) => {
    if (showCommentsArray.includes(postId)) {
      const newArray = showCommentsArray.filter((id) => {
        return id !== postId;
      });
      setShowCommentsArray(newArray);
    } else {
      setShowCommentsArray([...showCommentsArray, postId]);
    }
  };

  const showShareButtons = (postId) => {
    if (showShareArray.includes(postId)) {
      const newArray = showShareArray.filter((id) => {
        return id !== postId;
      });
      setShowShareArray(newArray);
    } else {
      setShowShareArray([...showShareArray, postId]);
    }
  };

  const createPost = () => {
    axios
      .post(`${BASE_URL}/posts`, form, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {})
      .catch((err) => {});
    clearFields();
  };

  const createPostVote = (id, choice) => {
    const body = {
      direction: choice,
    };

    axios
      .post(`${BASE_URL}/posts/${id}/votes`, body, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setReRenderPosts(!reRenderPosts);
      })
      .catch((err) => {
      });
  };

  const deletePostVote = (id) => {
    axios
      .delete(`${BASE_URL}/posts/${id}/votes`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setReRenderPosts(!reRenderPosts);
      })
      .catch((err) => {
      });
  };

  const renderPosts = data
    .filter((post) => {
      return (
        inputSearch === "" ||
        post.title.toLowerCase().includes(inputSearch.toLowerCase()) ||
        post.body.toLowerCase().includes(inputSearch.toLowerCase())
      );
    })
    .map((post) => {
      return (
        <ContainerPostMap key={post.id}>
          <Post>
            <p id="username">Enviado por: {post.username}</p>
            <p id="title">{post.title}</p>
            <p id="body">{post.body}</p>
            <Votes>
              <div id="votes">
                {(post.userVote === null || post.userVote === -1) && (
                  <img
                    src={arrowup}
                    alt="+"
                    onClick={() => createPostVote(post.id, 1)}
                  />
                )}
                {post.userVote === 1 && (
                  <img
                    src={arrowgreen}
                    alt="+"
                    onClick={() => deletePostVote(post.id)}
                  />
                )}
                <p>{post.voteSum ? `${post.voteSum}` : 0}</p>
                {(post.userVote === null || post.userVote === 1) && (
                  <img
                    src={arrowdown}
                    alt="-"
                    onClick={() => createPostVote(post.id, -1)}
                  />
                )}
                {post.userVote === -1 && (
                  <img
                    src={arrowred}
                    alt="-"
                    onClick={() => deletePostVote(post.id)}
                  />
                )}
              </div>
              <div id="comments" onClick={() => showComments(post.id)}>
                {showCommentsArray.includes(post.id) ? (
                  <img src={commenting} alt="comment" />
                ) : (
                  <img src={comment} alt="comment" />
                )}
                <p>{post.commentCount ? `${post.commentCount}` : 0}</p>
              </div>
              <div id="share" onClick={() => showShareButtons(post.id)}>
                {showShareArray.includes(post.id) ? (
                  <img src={sharing} alt="share" />
                ) : (
                  <img src={share} alt="share" />
                )}
              </div>
            </Votes>
          </Post>
          {showShareArray.includes(post.id) && (
            <div id="share-container">
              <FacebookShareButton url={"https://labeddit-igorr.surge.sh/feed"}>
                <FacebookIcon size={32} round={true}></FacebookIcon>
              </FacebookShareButton>

              <TwitterShareButton url={"https://labeddit-igorr.surge.sh/feed"}>
                <TwitterIcon size={32} round={true}></TwitterIcon>
              </TwitterShareButton>

              <WhatsappShareButton url={"https://labeddit-igorr.surge.sh/feed"}>
                <WhatsappIcon size={32} round={true}></WhatsappIcon>
              </WhatsappShareButton>

              <TelegramShareButton url={"https://labeddit-igorr.surge.sh/feed"}>
                <TelegramIcon size={32} round={true}></TelegramIcon>
              </TelegramShareButton>

              <EmailShareButton url={"https://labeddit-igorr.surge.sh/feed"}>
                <EmailIcon size={32} round={true}></EmailIcon>
              </EmailShareButton>
            </div>
          )}
          {showCommentsArray.includes(post.id) && <PostPage id={post.id} />}
        </ContainerPostMap>
      );
    });

  return (
    <Container>
      <header>
        <img src={labenuIcon} alt="labenu-icone" />
        <button
          id="button-logout"
          onClick={() => goToLoginPage(navigate, "logout")}
        >
          Logout
        </button>
      </header>
      <LabelFloat>
        <input
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          placeholder=" "
        />
        <label>Buscar</label>
      </LabelFloat>
      <Form onSubmit={createPost}>
        <input
          name="title"
          value={form.title}
          onChange={onChange}
          placeholder="Título"
          required
        />
        <textarea
          name="body"
          value={form.body}
          onChange={onChange}
          placeholder="Escreva seu post..."
          required
        ></textarea>
        <button id="button-post" onClick={() => createPost()}>
          Postar
        </button>
      </Form>
      <hr />
      {renderPosts.length > 0 && <div id="container-posts">{renderPosts} </div>}
      {renderPosts.length >= 0 && isLoading === true && (
        <Spinner value="25%"></Spinner>
      )}
      {renderPosts.length > 0 && (
        <button id="button-more-posts" onClick={() => setVisible(visible + 5)}>
          Ver mais
        </button>
      )}
    </Container>
  );
}

export default FeedPage;
