export enum MaterialActionTypes {
  AddEnergy = "ADD_ENERGY",
}

export const addEnergy = (amount: number = 1) => {
  return {
    amount,
    type: MaterialActionTypes.AddEnergy,
  };
};

const actions = {
  addEnergy,
};

export default actions;
