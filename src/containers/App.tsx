import * as React from "react";
import { connect } from "react-redux";

import { GeneratorTypes } from "../models/generators";

import Generator from "./Generator";
import Scoreboard from "./Scoreboard";
import Ticker from "./Ticker";

const App = () => {
  return (
    <div>
      <Scoreboard />
      <Ticker />
      <Generator type={GeneratorTypes.Basic} />
      <Generator type={GeneratorTypes.AlphaOne} />
    </div>
  );
};

export default connect()(App);
