import { connect } from "react-redux";

import { addEnergy } from "../actions";
import Scoreboard from "../components/Scoreboard";
import { IState } from "../reducers";

const mapStateToProps = (state: IState) => {
  return {
    energy: state.materials.energy,
    ticks: state.materials.ticks,
  };
};

export default connect(mapStateToProps)(Scoreboard);
