import ActionTypes from "./ActionTypes";

import {
  addEnergyFromTick,
  recalculateCosts,
  recalculateRates,
} from "./engine";

export const addTick = (amount: number = 1) => {
  return {
    amount,
    type: ActionTypes.AddTick,
  };
};

export const tickerStart = (rate: number = 1000) => {
  return (dispatch: any) => {
    dispatch(tickerLoop(rate));
    return dispatch({
      rate,
      type: ActionTypes.TickerStart,
    });
  };
};

export const tickerStop = () => {
  return {
    type: ActionTypes.TickerStop,
  };
};

export const tickerToggle = (rate?: number) => {
  return (dispatch: any, getState: any) => {
    if (getState().timers.timer) {
      return dispatch(tickerStop());
    }

    return dispatch(tickerStart(rate));
  };
};

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

const tickerStep = () => {
  return (dispatch: any) => {
    // TODO: Use promises
    dispatch(addTick());
    dispatch(recalculateRates());
    dispatch(recalculateCosts());
    dispatch(addEnergyFromTick());
  };
};

const actions = {
  [ActionTypes.AddTick]: addTick,
  [ActionTypes.TickerStart]: tickerStart,
  [ActionTypes.TickerStop]: tickerStop,
  [ActionTypes.TickerLoop]: tickerLoop,
  [ActionTypes.TickerStep]: tickerStep,
  [ActionTypes.ToggleTicker]: tickerToggle,
};

export default actions;
