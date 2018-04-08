export enum GeneratorActions {
  BuyGenerator = "BUY_GENERATOR",
}

export const buyGenerator = ({
  amount = 1,
  generatorType = "basic",
}) => {
  return {
    amount,
    generatorType,
    type: GeneratorActions.BuyGenerator,
  };
};

const actions = {
  buyGenerator,
};

export default actions;
