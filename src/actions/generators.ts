import { addEnergy } from "./materials";

export enum GeneratorActionTypes {
  GeneratorAdd = "GENERATOR_ADD",
  GeneratorPurchase = "GENERATOR_PURCHASE",
}

export enum GeneratorTypes {
  Basic = "BASIC",
}

export interface IGeneratorPurchaseAction {
  amount: number;
  generatorType: GeneratorTypes;
  type: string;
}

export const add = ({
  amount = 1,
  generatorType = GeneratorTypes.Basic,
}): IGeneratorPurchaseAction => {
  return {
    amount,
    generatorType,
    type: GeneratorActionTypes.GeneratorAdd,
  };
};

export const purchase = ({
  amount = 1,
  generatorType = GeneratorTypes.Basic,
}) => {
  return (dispatch: any, getState: any) => {
    const {
      materials: {
        energy = 0,
      },
    } = getState();

    if (energy >= 1) {
      dispatch(addEnergy(-1));
      dispatch(add({ amount, generatorType }));
    }
  };
};

const actions = {
  [GeneratorActionTypes.GeneratorAdd]: add,
  [GeneratorActionTypes.GeneratorPurchase]: purchase,
};

export default actions;
