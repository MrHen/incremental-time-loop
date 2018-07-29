import ActionTypes from "./ActionTypes";

export const addEnergy = ({amount = 1} = {}) => {
  return {
    amount,
    type: ActionTypes.AddEnergy,
  };
};

const actions = {
  [ActionTypes.AddEnergy]: addEnergy,
};

export default actions;
