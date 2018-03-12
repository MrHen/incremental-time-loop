import * as React from "react";
import { connect } from "react-redux";

import { addEnergy } from "../actions";
import { IState } from "../reducers";

import Clicker from "./Clicker";
import Scoreboard from "./Scoreboard";

const App = () => {
  return (
    <div>
      <Scoreboard />
      <Clicker />
    </div>
  );
};

export default connect()(App);
