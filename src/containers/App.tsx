import * as React from "react";
import { connect } from "react-redux";

import { addEnergy } from "../actions";
import { GeneratorTypes } from "../actions/generators";

import { IState } from "../reducers";
import { MaterialTypes } from "../reducers/materials";

import Clicker from "./Clicker";
import GeneratorClcker from "./GeneratorClicker";
import Scoreboard from "./Scoreboard";

const App = () => {
  return (
    <div>
      <Scoreboard />
      <Clicker type={MaterialTypes.energy} />
      <Clicker type={MaterialTypes.ticks} />
      <GeneratorClcker type={GeneratorTypes.BASIC} />
    </div>
  );
};

export default connect()(App);
