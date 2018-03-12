import * as React from "react";
import { connect } from "react-redux";

import { addEnergy } from "../actions";
import { IState } from "../reducers";
import { MaterialTypes } from "../reducers/materials";

import Clicker from "./Clicker";
import Scoreboard from "./Scoreboard";

const App = () => {
  return (
    <div>
      <Scoreboard />
      <Clicker type={MaterialTypes.energy} />
    </div>
  );
};

export default connect()(App);
