import * as React from "react";

export interface IGeneratorProps {
  onClick: any;
  name: string;
  owned: number;
  costBase: number;
  costScaling: number;
}

export class GeneratorView extends React.PureComponent<IGeneratorProps, null> {
  public render() {
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
        <div><code>{costBase}^({costScaling}*{owned})</code></div>
      </div>
    );
  }
}

export default GeneratorView;
