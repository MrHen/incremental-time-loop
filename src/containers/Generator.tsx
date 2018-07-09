import * as React from "react";
import { connect, Dispatch } from "react-redux";

import actions from "../actions";
import GeneratorView, { IGeneratorProps } from "../components/GeneratorView";
import { IState } from "../models/GameState";
import { GeneratorTypes } from "../models/generators";

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
    ...props,
    generator,
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
        generator,
        onClick,
      },
    } = this;

    return (
      <GeneratorView
        generator={generator}
        onClick={onClick}
      />
    );
  }
}

// https://github.com/Microsoft/TypeScript/issues/25103
export default GeneratorContainer as React.ComponentClass<IGeneratorContainerProps>;
