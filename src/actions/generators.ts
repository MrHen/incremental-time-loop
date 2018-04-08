export enum GeneratorActionTypes {
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

export const purchase = ({
  amount = 1,
  generatorType = GeneratorTypes.Basic,
}): IGeneratorPurchaseAction => {
  return {
    amount,
    generatorType,
    type: GeneratorActionTypes.GeneratorPurchase,
  };
};

const actions = {
  [GeneratorActionTypes.GeneratorPurchase]: purchase,
};

export default actions;
