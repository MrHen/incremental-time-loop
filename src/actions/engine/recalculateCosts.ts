import { forEach as _forEach } from "lodash-es";
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

const recalculateCosts: ActionCreator<StateThunkAction> = () => {
  const thunk: StateThunkAction = (dispatch, getState) => {
    const { generators } = getState();
    // TODO: Promises
    _forEach(generators, (generator) => {
      dispatch(recalculateCost({ generator }));
    });
  };

  return thunk;
};

export default recalculateCosts;
