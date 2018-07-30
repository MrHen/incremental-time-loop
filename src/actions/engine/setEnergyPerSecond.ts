import { Action, ActionCreator } from "redux";

import ActionTypes from "../ActionTypes";

export interface ISetEnergyPerSecondAction extends Action {
  energyPerSecond: number;
  type: ActionTypes.SetEnergyPerSecond;
}

const setEnergyPerSecond: ActionCreator<ISetEnergyPerSecondAction> = ({ energyPerSecond = 1 }) => {
  return {
    energyPerSecond,
    type: ActionTypes.SetEnergyPerSecond,
  };
};

export default setEnergyPerSecond;
