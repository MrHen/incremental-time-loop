import * as React from "react";
import { connect } from "react-redux";

import { GeneratorTypes } from "../actions/generators";

import { MaterialTypes } from "../reducers/materials";

import Clicker from "./Clicker";
import Generator from "./Generator";
import Scoreboard from "./Scoreboard";

const App = () => {
  return (
    <div>
      <Scoreboard />
      <Clicker type={MaterialTypes.Energy} />
      <Clicker type={MaterialTypes.Ticks} />
      <Generator type={GeneratorTypes.Basic} />
    </div>
  );
};

export default connect()(App);
