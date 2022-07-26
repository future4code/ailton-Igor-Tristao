import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { goToLoginPage, goToPostPage } from "../../Routes/coordinator";
import { useProtectedPage } from "../../Hooks/useProtectedData";
import { useRequestData } from "../../Hooks/useRequestData";
import labenuIcon from "../../assets/labenu.jpg";
import useForm from "../../Hooks/useForm";
import axios from "axios";
import PostPage from "../Post/PostPage";
import arrowup from "../../assets/arrowup.png";
import arrowdown from "../../assets/arrow.png";
import arrowred from "../../assets/arrowred.png";
import arrowgreen from "../../assets/arrowgreen.png";
import comment from "../../assets/comment.png";

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  p {
    margin: 0;
  }

  header {
    width: 100%;
    height: 8vh;
    background: #ededed;
    display: flex;
    justify-content: end;
    align-items: center;

    button {
      border: none;
      color: #4088cb;
      font-family: "Noto Sans";
      font-size: 18px;
      font-weight: 600;
      margin-right: 1rem;
    }

    img {
      width: 8%;
      height: 40px;
      margin-right: 5.3rem;
    }
  }
`;

const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 1rem;
`;

const Form = styled.form`
  height: 200px;
  width: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 10px;

  input {
    border-radius: 8px;
    background: #ededed;
    border: none;
    font-family: "IBM Plex Sans";
    color: #6f6f6f;
    font-weight: 400;
    font-size: 18px;
    width: 100%;
    height: 20%;
    padding: 0 0 0 4%;
  }

  textarea {
    width: 100%;
    height: 60%;
    border-radius: 8px;
    background: #ededed;
    border: none;
    font-family: "IBM Plex Sans";
    color: #6f6f6f;
    font-weight: 400;
    font-size: 18px;
    padding: 4% 0 0 4%;
  }
`;

const Hr = styled.hr`
  width: 80%;
  margin: 6px 0;
  height: 1px;
  border: none;
  transform: rotate(0.32deg);
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
`;

const ButtonPost = styled.button`
  width: 100%;
  height: 3.2rem;
  border: 1px solid black;
  border: none;
  border-radius: 12px;
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  color: white;
  font-size: 18px;
  font-weight: 700;
  font-family: "Noto Sans";
`;

const ContainerPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 15px;
`;

const Post = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 150px;
`;

const Votes = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  div {
    display: flex;
    background: #fbfbfb;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    justify-content: space-between;
    padding: 6px 10px;

    img {
      width: 16px;
      height: 18px;
    }
  }

  #votes {
    width: 80px;
    display: flex;
    align-items: center;

    p {
      color: #6f6f6f;
      font-size: 13px;
      font-weight: 700;
    }
  }

  #comments {
    width: 45px;
    display: flex;
    align-items: center;

    p {
      font-family: "IBM Plex Sans";
      font-style: normal;
      font-weight: 700;
      font-size: 13px;
      color: #6F6F6F;
    }
  }
`;

const ContainerPostMap = styled.div`
  width: 80%;
  height: 100%;
  background: #fbfbfb;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 9px 10px;
  font-family: "IBM Plex Sans";

  #username {
    font-size: 12px;
    font-weight: 400;
    color: #6f6f6f;
  }

  #title {
    font-size: 18px;
    font-weight: 400;
    color: black;
    align-self: center;
    margin-top: 10px;
  }

  #body {
    font-size: 18px;
    font-weight: 400;
    color: black;
    text-align: start;
    margin: 10px 0 45px 0;
  }
`;

function FeedPage() {
  const navigate = useNavigate();

  const [visible, setVisible] = useState(5);
  const [reRenderPosts, setReRenderPosts] = useState(true);
  const [showCommentsArray, setShowCommentsArray] = useState([]);

  const token = localStorage.getItem("token");

  useProtectedPage(navigate);

  const data = useRequestData(visible, reRenderPosts);

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

  const renderPosts = data.map((post) => {
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
              <img src={comment} alt="comment" />
              <p>{post.commentCount ? `${post.commentCount}` : 0}</p>
            </div>
          </Votes>
        </Post>
        {showCommentsArray.includes(post.id) && <PostPage id={post.id} />}
      </ContainerPostMap>
    );
  });

  const createPost = () => {
    axios
      .post("https://labeddit.herokuapp.com/posts", form, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        alert("Post criado com sucesso!");
      })
      .catch((err) => {});
    clearFields();
  };

  const createPostVote = (id, choice) => {
    const body = {
      direction: choice,
    };

    axios
      .post(`https://labeddit.herokuapp.com/posts/${id}/votes`, body, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setReRenderPosts(!reRenderPosts);
      })
      .catch((err) => {});
  };

  const deletePostVote = (id) => {
    axios
      .delete(`https://labeddit.herokuapp.com/posts/${id}/votes`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setReRenderPosts(!reRenderPosts);
      })
      .catch((err) => {});
  };

  return (
    <Container>
      <header>
        <img src={labenuIcon} alt="labenu-icone" />
        <button onClick={() => goToLoginPage(navigate, "logout")}>
          Logout
        </button>
      </header>
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
          placeholder="Escreva seu post"
          required
        ></textarea>
        <ButtonPost type="submit">Postar</ButtonPost>
      </Form>
      <Hr />
      <ContainerPost>{renderPosts}</ContainerPost>
      <button onClick={() => setVisible(visible + 5)}>Ver mais</button>
      <ContainerInputs></ContainerInputs>
    </Container>
  );
}

export default FeedPage;
