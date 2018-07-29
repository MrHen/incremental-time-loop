import {
  cloneDeep as _cloneDeep,
} from "lodash-es";

import { ActionTypes, IAction } from "../actions";

import {
  GeneratorsDefaults,
  IGeneratorsState,
} from "../models/generators";

const generators = (
  state: IGeneratorsState = GeneratorsDefaults,
  action: IAction,
): IGeneratorsState => {
  let next = null;
  switch (action.type) {
    case ActionTypes.GeneratorAdd:
      next = _cloneDeep(state);
      next[action.generatorType].owned += action.amount;
      break;

    case ActionTypes.GeneratorSetCost:
      next = _cloneDeep(state);
      next[action.generatorType].cost = action.cost;
      break;

    default:
      next = state;
      break;
  }

  return next;
};

export default generators;
