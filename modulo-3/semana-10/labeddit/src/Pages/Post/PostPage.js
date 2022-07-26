import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import arrowup from "../../assets/arrowup.png";
import arrowdown from "../../assets/arrow.png";
import arrowred from "../../assets/arrowred.png";
import arrowgreen from "../../assets/arrowgreen.png";
import comment from "../../assets/comment.png";

const ContainerPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 5px;

  hr {
    width: 100%;
    height: 1px;
    border: none;
    transform: rotate(0.32deg);
    background: grey;
  }

  p {
    margin: 0;
  }

  textarea {
    width: 90%;
    min-height: 70px;
    height: 100%;
    border-radius: 8px;
    background: #ededed;
    border: none;
    font-family: "IBM Plex Sans";
    color: #6f6f6f;
    font-weight: 400;
    font-size: 18px;
    padding: 4% 0 0 4%;
  }

  button {
    width: 94%;
    height: 2rem;
    border: 1px solid black;
    border: none;
    margin: 8px 0 12px 0;
    border-radius: 12px;
    background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
    color: white;
    font-size: 18px;
    font-weight: 700;
    font-family: "Noto Sans";
  }
`;

const Post = styled.div`
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

  #body {
    font-size: 18px;
    font-weight: 400;
    color: black;
    height: 100%;
    text-align: start;
    margin: 20px 0 25px 0;
  }
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
`;

function PostPage(props) {
  const token = localStorage.getItem("token");
  const [comments, setComments] = useState([]);
  const [reRenderPosts, setReRenderPosts] = useState(true);
  const [inputComment, setInputComment] = useState("");

  useEffect(() => {
    getPostComments();
  }, [reRenderPosts]);

  const getPostComments = () => {
    axios
      .get(`https://labeddit.herokuapp.com/posts/${props.id}/comments`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setComments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const createCommentVote = (id, choice) => {
    const body = {
      direction: choice,
    };

    axios
      .post(`https://labeddit.herokuapp.com/comments/${id}/votes`, body, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setReRenderPosts(!reRenderPosts);
      })
      .catch((err) => {});
  };

  const deleteCommentVote = (id) => {
    axios
      .delete(`https://labeddit.herokuapp.com/comments/${id}/votes`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setReRenderPosts(!reRenderPosts);
      })
      .catch((err) => {});
  };

  const createComment = () => {
    const body = {
      body: inputComment,
    };
    axios
      .post(`https://labeddit.herokuapp.com/posts/${props.id}/comments`, body, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        alert(res);
        getPostComments();
        setInputComment("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const renderComments = comments.map((comment) => {
    return (
      <Post key={comment.id}>
        <p id="username">Enviado por: {comment.username}</p>
        <p id="body">{comment.body}</p>
        <Votes>
          <div id="votes">
            {(comment.userVote === null || comment.userVote === -1) && (
              <img
                src={arrowup}
                alt="+"
                onClick={() => createCommentVote(comment.id, 1)}
              />
            )}
            {comment.userVote === 1 && (
              <img
                src={arrowgreen}
                alt="+"
                onClick={() => deleteCommentVote(comment.id)}
              />
            )}
            <p>{comment.voteSum ? `${comment.voteSum}` : 0}</p>
            {(comment.userVote === null || comment.userVote === 1) && (
              <img
                src={arrowdown}
                alt="-"
                onClick={() => createCommentVote(comment.id, -1)}
              />
            )}
            {comment.userVote === -1 && (
              <img
                src={arrowred}
                alt="-"
                onClick={() => deleteCommentVote(comment.id)}
              />
            )}
          </div>
        </Votes>
      </Post>
    );
  });

  return (
    <ContainerPost>
      <hr />
      <textarea
        value={inputComment}
        onChange={(e) => setInputComment(e.target.value)}
        placeholder="Adicionar comentário"
        required
      ></textarea>
      <button onClick={() => createComment(props.id)}>Responder</button>
      {renderComments}
    </ContainerPost>
  );
}

export default PostPage;
