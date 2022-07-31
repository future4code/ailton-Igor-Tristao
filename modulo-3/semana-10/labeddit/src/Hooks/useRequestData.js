import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../Scripts/baseURL"

export const useRequestData = (visible, reRenderPosts) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const token = localStorage.getItem('token')
    axios
      .get(`${BASE_URL}/posts/?size=${visible}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        setData(res.data)
        setIsLoading(false)
      }).catch((err) => {
        setIsLoading(false)
      })
  }, [visible, reRenderPosts]);

  return [ data, isLoading]
};
