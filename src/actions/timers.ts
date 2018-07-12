import {
  addEnergyFromTick,
  recalculateCosts,
  recalculateRates,
} from "./engine";

export enum TimerActionTypes {
  AddTick = "TIMERS_ADD_TICK",
  ToggleTicker = "TIMERS_TOGGLE",
  TickerStart = "TIMERS_TICKER_START",
  TickerStep = "TIMERS_TICKER_STEP",
  TickerStop = "TIMERS_TICKER_STOP",
  TickerLoop = "TIMERS_TICKER_LOOP",
}

export const addTick = (amount: number = 1) => {
  return {
    amount,
    type: TimerActionTypes.AddTick,
  };
};

export const tickerStart = (rate: number = 1000) => {
  return (dispatch: any) => {
    dispatch(tickerLoop(rate));
    return dispatch({
      rate,
      type: TimerActionTypes.TickerStart,
    });
  };
};

export const tickerStop = () => {
  return {
    type: TimerActionTypes.TickerStop,
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
      type: TimerActionTypes.TickerLoop,
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
  [TimerActionTypes.AddTick]: addTick,
  [TimerActionTypes.TickerStart]: tickerStart,
  [TimerActionTypes.TickerStop]: tickerStop,
  [TimerActionTypes.TickerLoop]: tickerLoop,
  [TimerActionTypes.TickerStep]: tickerStep,
  [TimerActionTypes.ToggleTicker]: tickerToggle,
};

export default actions;
