import _get from "lodash-es/get";
import { connect, Dispatch } from "react-redux";

import { buyGenerator } from "../actions";
import Clicker, { IClickerProps } from "../components/Clicker";
import { IState } from "../reducers";
import { GeneratorTypes } from "../reducers/generators";

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
  const onClick = buyGenerator({ generatorType: props.type});

  return {
    onClick: () => {
      dispatch(onClick);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Clicker);
