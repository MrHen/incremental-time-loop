import { connect } from "react-redux";

import Scoreboard from "../components/Scoreboard";
import { IState } from "../models/GameState";

const mapStateToProps = (state: IState) => {
  return {
    energy: state.materials.energy,
    ticks: state.materials.ticks,
  };
};

export default connect(mapStateToProps)(Scoreboard);
