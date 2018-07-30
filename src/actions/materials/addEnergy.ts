import ActionTypes from "../ActionTypes";

const addEnergy = ({amount = 1} = {}) => {
  return {
    amount,
    type: ActionTypes.AddEnergy,
  };
};

export default addEnergy;
