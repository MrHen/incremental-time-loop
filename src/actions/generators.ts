import { Action, ActionCreator } from "redux";

import {
  GeneratorTypes,
} from "../models/generators";

import { StateThunkAction } from "./StateActions";

import { addEnergy } from "./materials";

export enum GeneratorActionTypes {
  GeneratorAdd = "GENERATOR_ADD",
  GeneratorPurchase = "GENERATOR_PURCHASE",
  GeneratorSetCost = "GENERATOR_SET_COST",
}

export interface IGeneratorAddAction extends Action {
  amount: number;
  generatorType: GeneratorTypes;
  type: GeneratorActionTypes.GeneratorAdd;
}

export interface IGeneratorPurchaseAction extends Action {
  amount: number;
  generatorType: GeneratorTypes;
  type: GeneratorActionTypes.GeneratorPurchase;
}

export interface IGeneratorSetCostAction extends Action {
  cost: number;
  generatorType: GeneratorTypes;
  type: GeneratorActionTypes.GeneratorSetCost;
}

const add: ActionCreator<IGeneratorAddAction> = ({
  amount = 1,
  generatorType = GeneratorTypes.Basic,
}) => {
  return {
    amount,
    generatorType,
    type: GeneratorActionTypes.GeneratorAdd,
  };
};

const purchase: ActionCreator<StateThunkAction> = ({
  amount = 1,
  generatorType = GeneratorTypes.Basic,
}) => {
  const thunk: StateThunkAction = (dispatch, getState) => {
    const {
      materials: {
        energy = 0,
      },
      generators: {
        [generatorType]: {
          cost,
        },
      },
    } = getState();

    if (energy >= cost) {
      dispatch(addEnergy({ amount: -cost }));
      dispatch(add({ amount, generatorType }));
    }
  };

  return thunk;
};

const setCost: ActionCreator<IGeneratorSetCostAction> = ({
  cost,
  generatorType,
}) => {
  return {
    cost,
    generatorType,
    type: GeneratorActionTypes.GeneratorSetCost,
  };
};

const actions = {
  [GeneratorActionTypes.GeneratorAdd]: add,
  [GeneratorActionTypes.GeneratorPurchase]: purchase,
  [GeneratorActionTypes.GeneratorSetCost]: setCost,
};

export type IGeneratorAction = IGeneratorSetCostAction | IGeneratorPurchaseAction | IGeneratorAddAction;

export default actions;
