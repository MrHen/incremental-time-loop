import { Action, ActionCreator } from "redux";

import {
  GeneratorTypes,
} from "../../models/generators";

import {
  MaterialTypes,
} from "../../models/materials";

import ActionTypes from "../ActionTypes";
import generatorActions from "../generators";
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
}: IGeneratorPurchaseAction) => {
  const thunk: StateThunkAction = (dispatch, getState) => {
    const {
      materials: {
        energy = 0,
      },
      generators,
      generators: {
        [generatorType]: {
          cost,
          costType,
        },
      },
    } = getState();

    let action;
    let owned;
    switch (costType) {
      case MaterialTypes.Energy:
        owned = energy;
        action = materialsActions.MATERIALS_ADD_ENERGY({ amount: -cost });
        break;
      case GeneratorTypes.AlphaOne:
        owned = generators[GeneratorTypes.AlphaOne].owned;
        action = generatorActions.GENERATOR_ADD({
          amount: -cost,
          generatorType: GeneratorTypes.AlphaOne,
        });
        break;
    }

    if (action && owned >= cost) {
      dispatch(action);
      dispatch(add({ amount, generatorType }));
    }
  };

  return thunk;
};

export default purchase;
