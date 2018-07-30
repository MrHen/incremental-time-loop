import ActionTypes from "../ActionTypes";

const addTick = (amount: number = 1) => {
  return {
    amount,
    type: ActionTypes.AddTick,
  };
};

export default addTick;
