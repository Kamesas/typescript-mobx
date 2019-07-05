import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "./store/index";

import App from "./App";

console.log(configureStore().getState());

const Root = () => (
  <Provider store={configureStore()}>
    <App />
  </Provider>
);

render(<Root />, document.getElementById("root"));
