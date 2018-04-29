import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {
  applyMiddleware,
  compose,
  createStore,
} from "redux";
import thunk from "redux-thunk";

import App from "./containers/App";
import DevTools from "./containers/DevTools";
import reducers from "./reducers";

const enhancer = compose(
  applyMiddleware(
    thunk,
  ),
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument(),
);

const store = createStore(reducers, {}, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
      <DevTools />
    </div>
  </Provider>,
  document.getElementById("root"),
);
