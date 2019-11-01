import thunk from "redux-thunk";
import logger from "redux-logger";
import { combineReducers, createStore, applyMiddleware } from "redux";

import userReducer from "./user/reducer";
import postsReducer from "./posts/reducer";

const initialState = {};

const rootReducer = combineReducers({
  user: userReducer,
  posts: postsReducer
});

const configureStore = () => {
  return createStore(rootReducer, initialState, applyMiddleware(thunk, logger));
};

const store = configureStore();

export default store;
