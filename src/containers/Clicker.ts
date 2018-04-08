import { connect, Dispatch } from "react-redux";

import { addEnergy } from "../actions/materials";
import { toggleTicker } from "../actions/timers";

import Clicker from "../components/Clicker";

import { IState } from "../reducers";
import { MaterialTypes } from "../reducers/materials";

interface IClickerContainerProps {
  type: string;
}

const mapStateToProps = (state: IState, props: IClickerContainerProps) => {
  let label: string;
  switch (props.type) {
    case MaterialTypes.energy:
      label = "energy";
      break;
    case MaterialTypes.ticks:
      label = "toggle ticker";
      break;
  }

  return {
    label,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>, props: IClickerContainerProps) => {
  let onClick: any;
  switch (props.type) {
    case MaterialTypes.energy:
      onClick = addEnergy();
      break;
    case MaterialTypes.ticks:
      onClick = toggleTicker();
      break;
  }

  return {
    onClick: () => {
      dispatch(onClick);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Clicker);
