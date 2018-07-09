import * as React from "react";

import { getGeneratorCost, IGenerator } from "../models/generators";

export interface IGeneratorProps {
  onClick: any;
  generator: IGenerator;
  renderCost?: React.StatelessComponent<IGeneratorProps>;
  renderScaling?: React.StatelessComponent<IGeneratorProps>;
}

export class GeneratorView extends React.PureComponent<IGeneratorProps, null> {
  private static renderCost(data: IGeneratorProps) {
    const {
      generator,
    } = data;

    return <span>{getGeneratorCost(generator)}</span>;
  }

  private static renderScaling(data: IGeneratorProps) {
    const {
      generator: {
        owned,
        costScaling,
        costBase,
      },
    } = data;

    return <code>{costBase}*({costScaling}^{owned})</code>;
  }

  public render() {
    const {
      props: {
        generator: {
          name,
          owned,
        },
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
