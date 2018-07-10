import * as React from "react";

export interface IClickerProps {
  onClick: any;
  label: string;
}

export class ClickerView extends React.PureComponent<IClickerProps, null> {
  public render() {
    return (
      <div>
        <button onClick={this.props.onClick}>{this.props.label}</button>
      </div>
    );
  }
}

export default ClickerView;
