import * as React from "react";

export interface IGeneratorViewStateProps {
  name: string;
  owned: number;
  cost: number;
  scaling: string;

  renderCost?: React.StatelessComponent<IGeneratorViewProps>;
  renderLabel?: React.StatelessComponent<IGeneratorViewProps>;
  renderScaling?: React.StatelessComponent<IGeneratorViewProps>;
}

export interface IGeneratorViewDispatchProps {
  onClick: any;
}

export type IGeneratorViewProps = IGeneratorViewStateProps & IGeneratorViewDispatchProps;

export class GeneratorView extends React.PureComponent<IGeneratorViewProps, null> {
  private static renderCost(data: IGeneratorViewProps) {
    const {
      cost,
    } = data;

    return <span>{cost}</span>;
  }

  private static renderLabel(data: IGeneratorViewProps) {
    const {
      name,
      owned,
    } = data;

    return <span>{name} ({owned})</span>;
  }

  private static renderScaling(data: IGeneratorViewProps) {
    const {
      scaling,
    } = data;

    return <code>{scaling}</code>;
  }

  public render() {
    const {
      props: {
        onClick,
        renderCost = GeneratorView.renderCost,
        renderLabel = GeneratorView.renderLabel,
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
        <div>{renderLabel(this.props)}</div>
        <div>{renderCost(this.props)}</div>
        <div>{renderScaling(this.props)}</div>
      </div>
    );
  }
}

export default GeneratorView;
