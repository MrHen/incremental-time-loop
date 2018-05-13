export enum MaterialActionTypes {
  AddEnergy = "MATERIALS_ADD_ENERGY",
}

export const addEnergy = (amount: number = 1) => {
  return {
    amount,
    type: MaterialActionTypes.AddEnergy,
  };
};

const actions = {
  [MaterialActionTypes.AddEnergy]: addEnergy,
};

export default actions;
