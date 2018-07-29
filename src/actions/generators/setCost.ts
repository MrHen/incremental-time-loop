import { Action, ActionCreator } from "redux";

import {
  GeneratorTypes,
} from "../../models/generators";

import ActionTypes from "../ActionTypes";

export interface IGeneratorSetCostAction extends Action {
  cost: number;
  generatorType: GeneratorTypes;
  type: ActionTypes.GeneratorSetCost;
}

const setCost: ActionCreator<IGeneratorSetCostAction> = ({
  cost,
  generatorType,
}) => {
  return {
    cost,
    generatorType,
    type: ActionTypes.GeneratorSetCost,
  };
};

export default setCost;
