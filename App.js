import React from "react";
import { Provider } from "react-redux";
import store from "./src/redux";

import User from "./src/Components/User";

const App = () => {
  return (
    <Provider store={store}>
      <User />
    </Provider>
  );
};

export default App;
