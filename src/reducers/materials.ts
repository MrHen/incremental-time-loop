import { MaterialActions } from "../actions";

interface IAction {
  id: string;
  type: string;
  text: string;
  amount?: number;
}

export interface IMaterial {
  completed?: boolean;
  id?: string;
  text?: string;
  energy: number;
}

export type IMaterialsState = IMaterial;

const materialDefaults: IMaterial = {
  energy: 0,
};

const materials = (state: IMaterialsState = materialDefaults, action: IAction): IMaterialsState => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        ...{
          completed: false,
          energy: 0,
          id: action.id,
          text: action.text,
        },
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
