export enum GeneratorActionTypes {
  GENERATOR_PURCHASE = "GENERATOR_PURCHASE",
}

export enum GeneratorTypes {
  BASIC = "BASIC",
}

export interface IGeneratorPurchaseAction {
  amount: number;
  generatorType: GeneratorTypes;
  type: string;
}

export const purchase = ({
  amount = 1,
  generatorType = GeneratorTypes.BASIC,
}): IGeneratorPurchaseAction => {
  return {
    amount,
    generatorType,
    type: GeneratorActionTypes.GENERATOR_PURCHASE,
  };
};

const actions = {
  purchase,
};

export default actions;
