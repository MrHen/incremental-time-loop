import ActionTypes from "../ActionTypes";

import tickerLoop from "./tickerLoop";

const tickerStart = (rate: number = 1000) => {
  return (dispatch: any) => {
    dispatch(tickerLoop(rate));
    return dispatch({
      rate,
      type: ActionTypes.TickerStart,
    });
  };
};

export default tickerStart;
