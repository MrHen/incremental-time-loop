import * as React from "react";
import { connect, Dispatch } from "react-redux";

import actions from "../actions";
import ClickerView, { IClickerProps } from "../components/ClickerView";
import { IState } from "../models/state";

interface ITickerDispatchProps {
  onClick: () => void;
}

type ITickerInnerProps = IClickerProps;

const mapStateToProps = (state: IState) => {
  return {
    label: "step",
    ticks: state.materials.ticks,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  const onClick = actions.TIMERS_TICKER_STEP();

  return {
    onClick: () => {
      dispatch(onClick);
    },
  };
};

@connect<
  {},
  ITickerDispatchProps,
  ITickerInnerProps,
  IState
>(mapStateToProps, mapDispatchToProps)
class TickerContainer extends React.PureComponent<ITickerInnerProps, {}> {
  public render(): React.ReactNode {
    return <ClickerView {...this.props} />;
  }
}

// https://github.com/Microsoft/TypeScript/issues/25103
export default TickerContainer as React.ComponentClass<{}>;
