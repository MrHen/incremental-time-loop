import {
  cloneDeep as _cloneDeep,
} from "lodash-es";

import {
  GeneratorActionTypes,
  GeneratorTypes,
  IGeneratorPurchaseAction,
} from "../actions/generators";

import {
  IGeneratorsState,
} from "./state";

const generatorDefaults: IGeneratorsState = {
  [GeneratorTypes.Basic]: {
    owned: 0,
  },
};

const generators = (
  state: IGeneratorsState = generatorDefaults,
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
