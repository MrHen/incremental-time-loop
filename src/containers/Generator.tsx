import * as React from "react";
import { connect, Dispatch } from "react-redux";

import actions from "../actions";
import { GeneratorTypes } from "../actions/generators";
import GeneratorView, { IGeneratorProps } from "../components/GeneratorView";
import { IState } from "../reducers/state";

interface IGeneratorContainerProps {
  type: GeneratorTypes;
}

interface IGeneratorDispatchProps {
  onClick: () => void;
}

type IGeneratorInnerProps = IGeneratorProps & IGeneratorContainerProps;

const mapStateToProps = (state: IState, props: IGeneratorContainerProps) => {
  const generator = state.generators[props.type];

  // TODO: Handle invalid situation
  if (!generator) {
    return;
  }

  return {
    costBase: generator.costBase,
    costScaling: generator.costScaling,
    name: generator.name,
    owned: generator.owned,
    type: props.type,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>, props: IGeneratorContainerProps) => {
  const onClick = actions.GENERATOR_PURCHASE({ generatorType: props.type });

  return {
    onClick: () => {
      dispatch(onClick);
    },
  };
};

@connect<
  IGeneratorContainerProps,
  IGeneratorDispatchProps,
  IGeneratorInnerProps,
  IState
>(mapStateToProps, mapDispatchToProps)
class GeneratorContainer extends React.PureComponent<IGeneratorInnerProps, {}> {
  public render(): React.ReactNode {
    const {
      props: {
        name,
        owned,
        costScaling,
        costBase,
        onClick,
      },
    } = this;

    return (
      <GeneratorView
        name={name}
        owned={owned}
        costBase={costBase}
        costScaling={costScaling}
        onClick={onClick}
      />
    );
  }
}

// https://github.com/Microsoft/TypeScript/issues/25103
export default GeneratorContainer as React.ComponentClass<IGeneratorContainerProps>;
