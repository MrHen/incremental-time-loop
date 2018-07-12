import * as React from "react";
import { connect, Dispatch } from "react-redux";

import actions from "../actions";
import GeneratorView, {
  IGeneratorViewDispatchProps,
  IGeneratorViewStateProps,
} from "../components/GeneratorView";
import { GeneratorTypes } from "../models/generators";
import { IState } from "../models/state";

interface IGeneratorContainerProps {
  type: GeneratorTypes;
}

type IGeneratorStateProps = IGeneratorContainerProps & IGeneratorViewStateProps;
type IGeneratorDispatchProps = IGeneratorViewDispatchProps;
type IGeneratorInnerProps = IGeneratorStateProps & IGeneratorDispatchProps;

const mapStateToProps = (
  state: IState,
  props: IGeneratorContainerProps,
): IGeneratorStateProps => {
  const generator = state.generators[props.type];

  // TODO: Handle invalid situation
  if (!generator) {
    return;
  }

  const {
    name,
    owned,
    cost,
    costBase,
    costScaling,
  } = generator;

  return {
    ...props,

    cost,
    name,
    owned,
    scaling: `${costBase}*(${costScaling}^${owned})`,
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<any>,
  props: IGeneratorContainerProps,
): IGeneratorDispatchProps => {
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
    return <GeneratorView {...this.props} />;
  }
}

// https://github.com/Microsoft/TypeScript/issues/25103
export default GeneratorContainer as React.ComponentClass<IGeneratorContainerProps>;
