import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "mobx-react";
import { autorun, configure } from "mobx";
import { appState } from "./store";

configure({ enforceActions: "always" });

const Root = () => (
  <Provider {...appState}>
    <App />
  </Provider>
);

autorun(() => {
  ReactDOM.render(<Root />, document.getElementById("root"));
});

serviceWorker.unregister();
