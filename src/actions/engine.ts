import { forEach as _forEach } from "lodash-es";
import { Action, ActionCreator } from "redux";

import generatorActions from "../actions/generators";
import { getRecalculatedRates } from "../models/engine";
import { addEnergy } from "./materials";

import { StateThunkAction } from "./StateActions";

export enum EngineActionTypes {
  AddEnergyFromTick = "ADD_ENERGY_FROM_TICK",
  RecalculateCost = "RECALCULATE_COST",
  RecalculateCosts = "RECALCULATE_COSTS",
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
    const { generators } = getState();
    const energyPerSecond = getRecalculatedRates(generators);
    dispatch(setEnergyPerSecond({ energyPerSecond }));
  };

  return thunk;
};

export const recalculateCost: ActionCreator<StateThunkAction> = ({ generator }) => {
  const thunk: StateThunkAction = (dispatch, getState) => {
    const {
      costBase,
      costScaling,
      owned,
    } = generator;

    const cost = Math.ceil(costBase * (costScaling ** owned));
    dispatch(generatorActions.GENERATOR_SET_COST({
      cost,
      generatorType: generator.type,
    }));
  };

  return thunk;
};

export const recalculateCosts: ActionCreator<StateThunkAction> = () => {
  const thunk: StateThunkAction = (dispatch, getState) => {
    const { generators } = getState();
    // TODO: Promises
    _forEach(generators, (generator) => {
      dispatch(recalculateCost({ generator }));
    });
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
