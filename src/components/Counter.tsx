import * as PropTypes from "prop-types";
import * as React from "react";

export interface ICounterProps {
  onClick: any;
  value: number;
}

export class Counter extends React.Component<ICounterProps, any> {
  public render() {
    return (
      <div>
        <p>{this.props.value}</p>
        <button onClick={this.props.onClick}>CLICK</button>
      </div>
    );
  }
}

export default Counter;
