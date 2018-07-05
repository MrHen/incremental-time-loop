import * as React from "react";

export interface IScoreboardProps {
  ticks: number;
  energy: number;
}

export class Scoreboard extends React.PureComponent<IScoreboardProps, any> {
  public render() {
    return (
      <table>
        <tbody>
          <tr>
            <td>Ticks</td>
            <td>{this.props.ticks}</td>
          </tr>
          <tr>
            <td>Energy</td>
            <td>{this.props.energy}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Scoreboard;
