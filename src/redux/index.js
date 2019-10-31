import thunk from "redux-thunk";
import logger from "redux-logger";
import { combineReducers, createStore, applyMiddleware } from "redux";

import userReducer from "./user/reducer";

const initialState = {};

const rootReducer = combineReducers({
  user: userReducer
});

const configureStore = () => {
  return createStore(rootReducer, initialState, applyMiddleware(thunk, logger));
};

const store = configureStore();

export default store;
