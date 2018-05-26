import { Action, ActionCreator } from "redux";

import { StateThunkAction} from "../reducers/state";

import { GeneratorTypes } from "./generators";
import { addEnergy } from "./materials";

export enum EngineActionTypes {
  AddEnergyFromTick = "ADD_ENERGY_FROM_TICK",
  RecalculateRates = "RECALCULATE_RATES",
  SetEnergyPerSecond = "SET_ENERGY_PER_SECOND",
}

export interface ISetEnergyPerSecondAction extends Action {
  energyPerSecond: number;
  type: EngineActionTypes.SetEnergyPerSecond;
}

export const setEnergyPerSecond: ActionCreator<ISetEnergyPerSecondAction> = ({ energyPerSecond = 1 }) => {
  return {
    energyPerSecond,
    type: EngineActionTypes.SetEnergyPerSecond,
  };
};

export const recalculateRates: ActionCreator<StateThunkAction> = () => {
  const thunk: StateThunkAction = (dispatch, getState) => {
    const {
      generators: {
        [GeneratorTypes.Basic]: basic,
      },
    } = getState();

    const energyPerSecond = basic.owned;

    dispatch(setEnergyPerSecond({ energyPerSecond }));
  };

  return thunk;
};

export const addEnergyFromTick: ActionCreator<StateThunkAction> = () => {
  const thunk: StateThunkAction = (dispatch, getState) => {
    const {
      engine: {
        energyPerSecond,
      },
      timers: {
        rate,
      },
    } = getState();

    const amount = rate / 1000 * energyPerSecond;

    dispatch(addEnergy({ amount }));
  };

  return thunk;
};
const actions = {
  [EngineActionTypes.AddEnergyFromTick]: addEnergyFromTick,
  [EngineActionTypes.RecalculateRates]: recalculateRates,
  [EngineActionTypes.SetEnergyPerSecond]: setEnergyPerSecond,
};

export default actions;
