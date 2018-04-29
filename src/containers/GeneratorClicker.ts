import { connect, Dispatch } from "react-redux";

import actions from "../actions";
import {
  GeneratorTypes,
} from "../actions/generators";
import Clicker from "../components/Clicker";
import { IState } from "../reducers";

interface IClickerContainerProps {
  type: GeneratorTypes;
}

const mapStateToProps = (state: IState, props: IClickerContainerProps) => {
  let label: string;
  switch (props.type) {
    case GeneratorTypes.Basic:
      label = `basic (${state.generators[props.type].owned})`;
      break;
  }

  return {
    label,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>, props: IClickerContainerProps) => {
  const onClick = actions.GENERATOR_PURCHASE({ generatorType: props.type });

  return {
    onClick: () => {
      dispatch(onClick);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Clicker);
