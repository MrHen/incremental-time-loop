import { MaterialActions } from "../actions";

export enum MaterialTypes {
  energy = "ENERGY",
  ticks = "TICKS",
}

interface IAction {
  type: string;
  amount?: number;
}

export interface IMaterialState {
  energy: number;
  ticks: number;
}

const materialDefaults: IMaterialState = {
  energy: 0,
  ticks: 0,
};

const materials = (state: IMaterialState = materialDefaults, action: IAction): IMaterialState => {
  switch (action.type) {
    case MaterialActions.AddTick:
      return {
        ...state,
        ticks: state.ticks + action.amount,
      };
    case MaterialActions.AddEnergy:
      return {
        ...state,
        energy: state.energy + action.amount,
      };
    default:
      return state;
  }
};

export default materials;
