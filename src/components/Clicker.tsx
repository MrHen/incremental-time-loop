import * as PropTypes from "prop-types";
import * as React from "react";

export interface IClickerProps {
  onClick: any;
  label: string;
}

export class Clicker extends React.Component<IClickerProps, any> {
  public render() {
    return (
      <div>
        <button onClick={this.props.onClick}>{this.props.label}</button>
      </div>
    );
  }
}

export default Clicker;
