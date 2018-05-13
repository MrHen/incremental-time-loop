import { Action, ActionCreator } from "redux";

import { StateThunkAction} from "../reducers/state";

import { addEnergy } from "./materials";

export enum GeneratorActionTypes {
  GeneratorAdd = "GENERATOR_ADD",
  GeneratorPurchase = "GENERATOR_PURCHASE",
}

export enum GeneratorTypes {
  Basic = "BASIC",
}

export interface IGeneratorPurchaseAction extends Action {
  amount: number;
  generatorType: GeneratorTypes;
  type: GeneratorActionTypes.GeneratorAdd;
}

export const add: ActionCreator<IGeneratorPurchaseAction> = ({
  amount = 1,
  generatorType = GeneratorTypes.Basic,
}) => {
  return {
    amount,
    generatorType,
    type: GeneratorActionTypes.GeneratorAdd,
  };
};

export const purchase: ActionCreator<StateThunkAction> = ({
  amount = 1,
  generatorType = GeneratorTypes.Basic,
}) => {
  const thunk: StateThunkAction = (dispatch, getState) => {
    const {
      materials: {
        energy = 0,
      },
    } = getState();

    if (energy >= 1) {
      dispatch(addEnergy(-1));
      dispatch(add({ amount, generatorType }));
    }
  };

  return thunk;
};

const actions = {
  [GeneratorActionTypes.GeneratorAdd]: add,
  [GeneratorActionTypes.GeneratorPurchase]: purchase,
};

export default actions;
