import {
  cloneDeep as _cloneDeep,
  update as _update,
} from "lodash-es";

import { GeneratorActions } from "../actions/generators";

interface IGeneratorPurchaseAction {
  amount: number;
  generatorType: GeneratorTypes;
  type: string;
}

export interface IGenerator {
  owned: number;
}

export enum GeneratorTypes {
  BASIC = "BASIC",
}

type GeneratorMap = {
  [key in GeneratorTypes]: IGenerator;
};

export type IGeneratorState = GeneratorMap;

const generatorDefaults: IGeneratorState = {
  BASIC: {
    owned: 0,
  },
};

const generators = (
  state: IGeneratorState = generatorDefaults,
  action: IGeneratorPurchaseAction,
): IGeneratorState => {
  switch (action.type) {
    case GeneratorActions.BuyGenerator:
      const next = _cloneDeep(state);
      next[action.generatorType].owned += action.amount;
      return next;

    default:
      return state;
  }
};

export default generators;
