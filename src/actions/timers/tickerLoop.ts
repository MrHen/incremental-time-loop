import ActionTypes from "../ActionTypes";

import tickerStep from "./tickerStep";

const tickerLoop = (rate: number = 1000) => {
  return (dispatch: any) => {
    const timer = window.setTimeout(
      () => {
        dispatch(tickerStep());
        dispatch(tickerLoop(rate));
      },
      rate,
    );

    return dispatch({
      timer,
      type: ActionTypes.TickerLoop,
    });
  };
};

export default tickerLoop;
