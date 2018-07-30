import { ActionCreator } from "redux";

import { getRecalculatedRates } from "../../models/engine";

import { StateThunkAction } from "../StateActions";

import setEnergyPerSecond from "./setEnergyPerSecond";

const recalculateRates: ActionCreator<StateThunkAction> = () => {
  const thunk: StateThunkAction = (dispatch, getState) => {
    const { generators } = getState();
    const energyPerSecond = getRecalculatedRates(generators);
    dispatch(setEnergyPerSecond({ energyPerSecond }));
  };

  return thunk;
};

export default recalculateRates;
