import { ActionTypes } from "../actions";

import { IMaterialState } from "../models/state";

export enum MaterialTypes {
  Energy = "ENERGY",
  Ticks = "TICKS",
}

interface IAction {
  type: string;
  amount?: number;
}

const materialDefaults: IMaterialState = {
  energy: 0,
  ticks: 0,
};

const materials = (state: IMaterialState = materialDefaults, action: IAction): IMaterialState => {
  switch (action.type) {
    case ActionTypes.AddTick:
      return {
        ...state,
        ticks: state.ticks + action.amount,
      };
    case ActionTypes.AddEnergy:
      return {
        ...state,
        energy: state.energy + action.amount,
      };
    default:
      return state;
  }
};

export default materials;
