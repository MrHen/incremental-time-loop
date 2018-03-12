export enum MaterialActions {
  AddEnergy = "ADD_ENERGY",
  AddTick = "ADD_TICK",
}

export const addEnergy = (amount: number = 1) => {
  return {
    amount,
    type: MaterialActions.AddEnergy,
  };
};

export const addTick = (amount: number = 1) => {
  return {
    amount,
    type: MaterialActions.AddTick,
  };
};
