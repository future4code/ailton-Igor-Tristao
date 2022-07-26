import { useState, useEffect } from "react";
import axios from "axios";

export const useRequestData = (visible, reRenderPosts) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token')
    axios
      .get(`https://labeddit.herokuapp.com/posts/?size=${visible}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setData(res.data)
      })
  }, [visible, reRenderPosts]);

  return data
};
