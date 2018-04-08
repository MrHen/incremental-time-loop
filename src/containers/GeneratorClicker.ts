import _get from "lodash-es/get";
import { connect, Dispatch } from "react-redux";

import {
  GeneratorTypes,
  purchase,
} from "../actions/generators";
import Clicker, { IClickerProps } from "../components/Clicker";
import { IState } from "../reducers";

interface IClickerContainerProps {
  type: GeneratorTypes;
}

const mapStateToProps = (state: IState, props: IClickerContainerProps) => {
  let label: string;
  switch (props.type) {
    case GeneratorTypes.BASIC:
      label = `basic (${state.generators[props.type].owned})`;
      break;
  }

  return {
    label,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>, props: IClickerContainerProps) => {
  const onClick = purchase({ generatorType: props.type});

  return {
    onClick: () => {
      dispatch(onClick);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Clicker);
