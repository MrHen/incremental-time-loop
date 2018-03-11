export enum MaterialActions {
  AddEnergy = "ADD_ENERGY",
}

export const addEnergy = (amount: number = 1) => {
  return {
    amount,
    type: MaterialActions.AddEnergy,
  };
};
