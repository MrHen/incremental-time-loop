import { ActionCreator } from "redux";

import generatorActions from "../generators";

import { StateThunkAction } from "../StateActions";

const recalculateCost: ActionCreator<StateThunkAction> = ({ generator }) => {
  const thunk: StateThunkAction = (dispatch, getState) => {
    const {
      costBase,
      costScaling,
      owned,
    } = generator;

    const cost = Math.ceil(costBase * (costScaling ** owned));
    dispatch(generatorActions.GENERATOR_SET_COST({
      cost,
      generatorType: generator.type,
    }));
  };

  return thunk;
};

export default recalculateCost;
