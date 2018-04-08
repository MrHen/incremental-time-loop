import {
  cloneDeep as _cloneDeep,
  update as _update,
} from "lodash-es";

import { MaterialActions } from "../actions";

interface IBuyGeneratorAction {
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
  action: IBuyGeneratorAction,
): IGeneratorState => {
  switch (action.type) {
    case MaterialActions.BuyGenerator:
      const next = _cloneDeep(state);
      next[action.generatorType].owned += action.amount;
      return next;

    default:
      return state;
  }
};

export default generators;
