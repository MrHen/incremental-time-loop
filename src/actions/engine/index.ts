import ActionTypes from "../ActionTypes";

import addEnergyFromTick from "./addEnergyFromTick";
import recalculateCost from "./recalculateCost";
import recalculateCosts from "./recalculateCosts";
import recalculateRates from "./recalculateRates";
import setEnergyPerSecond, { ISetEnergyPerSecondAction } from "./setEnergyPerSecond";

export type IEngineAction = ISetEnergyPerSecondAction;

const actions = {
  [ActionTypes.AddEnergyFromTick]: addEnergyFromTick,
  [ActionTypes.RecalculateCost]: recalculateCost,
  [ActionTypes.RecalculateCosts]: recalculateCosts,
  [ActionTypes.RecalculateRates]: recalculateRates,
  [ActionTypes.SetEnergyPerSecond]: setEnergyPerSecond,
};

export default actions;
