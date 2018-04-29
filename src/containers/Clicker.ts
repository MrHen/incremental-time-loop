import { connect, Dispatch } from "react-redux";

import actions from "../actions";

import Clicker from "../components/Clicker";

import { IState } from "../reducers";
import { MaterialTypes } from "../reducers/materials";

interface IClickerContainerProps {
  type: string;
}

const mapStateToProps = (state: IState, props: IClickerContainerProps) => {
  let label: string;
  switch (props.type) {
    case MaterialTypes.Energy:
      label = "energy";
      break;
    case MaterialTypes.Ticks:
      label = "tick";
      break;
  }

  return {
    label,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>, props: IClickerContainerProps) => {
  let onClick: any;
  switch (props.type) {
    case MaterialTypes.Energy:
      onClick = actions.MATERIALS_ADD_ENERGY();
      break;
    case MaterialTypes.Ticks:
      onClick = actions.TIMERS_TOGGLE();
      break;
  }

  return {
    onClick: () => {
      dispatch(onClick);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Clicker);
