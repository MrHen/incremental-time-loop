import ActionTypes from "../ActionTypes";

import add, { IGeneratorAddAction } from "./add";
import purchase, { IGeneratorPurchaseAction } from "./purchase";
import setCost, { IGeneratorSetCostAction } from "./setCost";

export type IGeneratorAction = IGeneratorSetCostAction | IGeneratorPurchaseAction | IGeneratorAddAction;

const actions = {
  [ActionTypes.GeneratorAdd]: add,
  [ActionTypes.GeneratorPurchase]: purchase,
  [ActionTypes.GeneratorSetCost]: setCost,
};

export default actions;
