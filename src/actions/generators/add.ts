import { Action, ActionCreator } from "redux";

import {
  GeneratorTypes,
} from "../../models/generators";

import ActionTypes from "../ActionTypes";

export interface IGeneratorAddAction extends Action {
  amount: number;
  generatorType: GeneratorTypes;
  type: ActionTypes.GeneratorAdd;
}

const add: ActionCreator<IGeneratorAddAction> = ({
  amount = 1,
  generatorType = GeneratorTypes.Basic,
}) => {
  return {
    amount,
    generatorType,
    type: ActionTypes.GeneratorAdd,
  };
};

export default add;
