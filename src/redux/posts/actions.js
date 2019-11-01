import {
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  FETCH_POSTS_START
} from "./types";

import axios from "axios";

export const fetchPosts = () => dispatch => {
  dispatch({ type: FETCH_POSTS_START });
  return axios
    .get("https://jsonplaceholder.typiode.com/posts")
    .then(response => {
      dispatch({ type: FETCH_POSTS_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: FETCH_POSTS_ERROR, error: error.message });
    });
};
