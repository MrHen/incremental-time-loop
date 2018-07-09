import * as React from "react";

export interface IGeneratorProps {
  onClick: any;
  name: string;
  owned: number;
  costBase: number;
  costScaling: number;
  renderCost?: React.StatelessComponent<IGeneratorProps>;
  renderScaling?: React.StatelessComponent<IGeneratorProps>;
}

export class GeneratorView extends React.PureComponent<IGeneratorProps, null> {
  private static renderCost(data: IGeneratorProps) {
    const {
      owned,
      costScaling,
      costBase,
    } = data;

    return <span>{Math.ceil(costBase * (costScaling ** owned))}</span>;
  }

  private static renderScaling(data: IGeneratorProps) {
    const {
      owned,
      costScaling,
      costBase,
    } = data;

    return <code>{costBase}*({costScaling}^{owned})</code>;
  }

  public render() {
    const {
      props: {
        name,
        owned,
        onClick,

        renderCost = GeneratorView.renderCost,
        renderScaling = GeneratorView.renderScaling,
      },
    } = this;

    return (
      <div
        style={{
          height: 100,
          width: 100,

          border: "1px solid grey",

          margin: 10,
          padding: 10,

          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}

        onClick={onClick}
      >
        <div>{name} ({owned})</div>
        <div>{renderCost(this.props)}</div>
        <div>{renderScaling(this.props)}</div>
      </div>
    );
  }
}

export default GeneratorView;
