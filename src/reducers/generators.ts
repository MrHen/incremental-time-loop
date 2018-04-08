import {
  cloneDeep as _cloneDeep,
  update as _update,
} from "lodash-es";

import { MaterialActions } from "../actions";

interface IBuyGeneratorAction {
  amount: number;
  generatorType: string;
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

const generatorDefaults: GeneratorMap = {
  BASIC: {
    owned: 0,
  },
};

const generators = (state: GeneratorMap = generatorDefaults, action: IBuyGeneratorAction): GeneratorMap => {
  switch (action.type) {
    case MaterialActions.BuyGenerator:
      const next = _cloneDeep(state);
      _update(next, `${action.type}.owned`, (generator: IGenerator) => {
        return {
          ...generator,
          owned: generator.owned + action.amount,
        };
      });
      return next;

    default:
      return state;
  }
};

export default generators;
