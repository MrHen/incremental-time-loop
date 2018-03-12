import { connect, Dispatch } from "react-redux";

import { addEnergy } from "../actions";
import Clicker, { IClickerProps } from "../components/Clicker";
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
  }

  return {
    onClick: () => {
      dispatch(onClick);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Clicker);
