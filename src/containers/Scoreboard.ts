import { connect, Dispatch, MapStateToPropsParam } from "react-redux";

import { addEnergy } from "../actions";
import Counter, { ICounterProps } from "../components/Counter";
import { IState } from "../reducers";

interface IScoreboardProps {
  label: string;
}

const mapStateToProps = (state: IState, ownProps: IScoreboardProps) => {
  return {
    value: state.materials.energy,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>, ownProps: IScoreboardProps) => {
  return {
    onClick: () => {
      dispatch(addEnergy());
    },
  };
};

const Scoreboard = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default Scoreboard;
