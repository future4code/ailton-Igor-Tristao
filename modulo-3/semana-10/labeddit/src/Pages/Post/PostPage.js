import React, { useEffect, useState } from "react";
import axios from "axios";
import arrowup from "../../assets/arrowup.png";
import arrowdown from "../../assets/arrow.png";
import arrowred from "../../assets/arrowred.png";
import arrowgreen from "../../assets/arrowgreen.png";
import { ContainerPost, Post, Votes } from "./StyledPostPage";
import { BASE_URL } from "../../Scripts/baseURL";
import { Spinner } from "../../StyledComponents/SpinnerStyled";
import styled from "styled-components";
import { useGetComments } from "../../Hooks/useGetComments";

function PostPage(props) {
  const token = localStorage.getItem("token");
  const [reRenderComments, setReRenderComments] = useState(false);
  const [inputComment, setInputComment] = useState("");

  const [data, isLoading] = useGetComments(props.id, reRenderComments);

  const createCommentVote = (id, choice) => {
    const body = {
      direction: choice,
    };

    axios
      .post(`${BASE_URL}/comments/${id}/votes`, body, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setReRenderComments(!reRenderComments);
      })
      .catch((err) => {
      });
  };

  const deleteCommentVote = (id) => {
    axios
      .delete(`${BASE_URL}/comments/${id}/votes`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setReRenderComments(!reRenderComments);
      })
      .catch((err) => {
      });
  };

  const createComment = () => {
    const body = {
      body: inputComment,
    };
    axios
      .post(`${BASE_URL}/posts/${props.id}/comments`, body, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setReRenderComments(!reRenderComments);
        setInputComment("");
      })
      .catch((err) => {
      });
  };

  const renderComments = data.map((comment) => {
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
      <button id="button-comment" onClick={() => createComment(props.id)}>
        Responder
      </button>
      {renderComments.length > 0 && (
        <div id="container-comments">{renderComments} </div>
      )}
      {renderComments.length >= 0 && isLoading === true && (
        <Spinner value="0"></Spinner>
      )}
    </ContainerPost>
  );
}

export default PostPage;
