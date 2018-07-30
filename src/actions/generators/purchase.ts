import { Action, ActionCreator } from "redux";

import {
  GeneratorTypes,
} from "../../models/generators";

import ActionTypes from "../ActionTypes";
import materialsActions from "../materials";
import { StateThunkAction } from "../StateActions";

import add from "./add";

export interface IGeneratorPurchaseAction extends Action {
  amount: number;
  generatorType: GeneratorTypes;
  type: ActionTypes.GeneratorPurchase;
}

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
      dispatch(materialsActions.MATERIALS_ADD_ENERGY({ amount: -cost }));
      dispatch(add({ amount, generatorType }));
    }
  };

  return thunk;
};

export default purchase;
