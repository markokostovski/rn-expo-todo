import React from "react";
import { Provider } from "react-redux";
import store from "./src/redux";

import User from "./src/Components/User";
import Input from "./src/Components/Input";

const App = () => {
  return (
    <Provider store={store}>
      {/* Router */}
      {/* Navigation */}
      <User />
      <Input />
    </Provider>
  );
};

export default App;
