import { ActionCreator } from "redux";

import materialsActions from "../materials";
import { StateThunkAction } from "../StateActions";

const recalculateRates: ActionCreator<StateThunkAction> = () => {
  const thunk: StateThunkAction = (dispatch, getState) => {
    const {
      engine: {
        energyPerSecond,
      },
      timers: {
        rate,
      },
    } = getState();

    const amount = rate / 1000 * energyPerSecond;

    dispatch(materialsActions.MATERIALS_ADD_ENERGY({ amount }));
  };

  return thunk;
};

export default recalculateRates;
