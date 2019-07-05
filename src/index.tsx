import * as React from "react";
import { render } from "react-dom";
//import {createStore} from 'redux';
//import { Provider } from "react-redux";
import { Test } from "./test";

import App from "./App";

//const store = createStore();

Test();

const Root = () => (
  // <Provider store={store}>
  <App />
  // </Provider>
);

render(<Root />, document.getElementById("root"));
