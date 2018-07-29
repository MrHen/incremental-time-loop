import { ActionTypes } from "../actions";
import { ITimerState } from "../models/state";

interface IAction {
  type: string;
  rate?: number;
  timer?: number;
}

const timerDefaults: ITimerState = {
  rate: 1000,
  timer: null,
};

const timers = (state: ITimerState = timerDefaults, action: IAction): ITimerState => {
  switch (action.type) {
    case ActionTypes.TickerStart:
      return {
        ...state,
        rate: action.rate,
      };
    case ActionTypes.TickerStop:
      if (state.timer) {
        clearInterval(state.timer);
      }

      return {
        ...state,
        timer: null,
      };
    case ActionTypes.TickerLoop:
      if (state.timer && state.timer !== action.timer) {
        clearInterval(state.timer);
      }

      return {
        ...state,
        timer: action.timer,
      };
    default:
      return state;
  }
};

export default timers;
