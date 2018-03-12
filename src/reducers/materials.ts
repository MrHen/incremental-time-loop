import { MaterialActions } from "../actions";

interface IAction {
  type: string;
  amount?: number;
}

export interface IMaterial {
  energy: number;
  ticks: number;
}

export type IMaterialsState = IMaterial;

const materialDefaults: IMaterial = {
  energy: 0,
  ticks: 0,
};

const materials = (state: IMaterialsState = materialDefaults, action: IAction): IMaterialsState => {
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
