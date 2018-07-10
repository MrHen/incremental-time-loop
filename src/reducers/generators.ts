import {
  cloneDeep as _cloneDeep,
} from "lodash-es";

import {
  GeneratorActionTypes,
  IGeneratorPurchaseAction,
} from "../actions/generators";

import {
  GeneratorsDefaults,
  IGeneratorsState,
} from "../models/state";

const generators = (
  state: IGeneratorsState = GeneratorsDefaults,
  action: IGeneratorPurchaseAction,
): IGeneratorsState => {
  switch (action.type) {
    case GeneratorActionTypes.GeneratorAdd:
      const next = _cloneDeep(state);
      next[action.generatorType].owned += action.amount;
      return next;

    default:
      return state;
  }
};

export default generators;
