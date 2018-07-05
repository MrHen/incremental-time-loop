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
    costBase: 1,
    costScaling: 0.5,
    name: "basic",
    owned: 0,
    type: GeneratorTypes.Basic,
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
