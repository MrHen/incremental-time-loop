import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import Scoreboard from "./containers/Scoreboard";
import reducers from "./reducers";

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Scoreboard label="Hello"/>
  </Provider>,
  document.getElementById("root"),
);
