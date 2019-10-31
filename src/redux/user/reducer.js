import { SET_USER_DATA } from "./types";

const initialState = {
  name: "Ana",
  lastName: "Max"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      };
  }

  return state;
};

export default reducer;
