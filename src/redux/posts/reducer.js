import {
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  FETCH_POSTS_START
} from "./types";

const initialState = {
  data: [],
  error: null,
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_START:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: null,
        loading: false
      };
    case FETCH_POSTS_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false
      };
  }

  return state;
};

export default reducer;
