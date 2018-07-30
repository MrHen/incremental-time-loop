import engineActions from "../engine";

import addTick from "./addTick";

const tickerStep = () => {
  return (dispatch: any) => {
    // TODO: Use promises
    dispatch(addTick());
    dispatch(engineActions.RECALCULATE_RATES());
    dispatch(engineActions.RECALCULATE_COSTS());
    dispatch(engineActions.ADD_ENERGY_FROM_TICK());
  };
};

export default tickerStep;
