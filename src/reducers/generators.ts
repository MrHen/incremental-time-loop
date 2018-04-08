import {
  cloneDeep as _cloneDeep,
} from "lodash-es";

import {
  GeneratorActionTypes,
  GeneratorTypes,
  IGeneratorPurchaseAction,
} from "../actions/generators";

export interface IGenerator {
  owned: number;
}

export interface IGeneratorsState {
  [GeneratorTypes.BASIC]: IGenerator;
}

const generatorDefaults: IGeneratorsState = {
  [GeneratorTypes.BASIC]: {
    owned: 0,
  },
};

const generators = (
  state: IGeneratorsState = generatorDefaults,
  action: IGeneratorPurchaseAction,
): IGeneratorsState => {
  switch (action.type) {
    case GeneratorActionTypes.GENERATOR_PURCHASE:
      const next = _cloneDeep(state);
      next[action.generatorType].owned += action.amount;
      return next;

    default:
      return state;
  }
};

export default generators;
