import { TimerActionTypes } from "../actions/timers";

interface IAction {
  type: string;
  rate?: number;
  timer?: number;
}

export interface ITimerState {
  timer?: number;
  rate: number;
}

const timerDefaults: ITimerState = {
  rate: 1,
  timer: null,
};

const timers = (state: ITimerState = timerDefaults, action: IAction): ITimerState => {
  switch (action.type) {
    case TimerActionTypes.TickerStart:
      return {
        ...state,
        rate: action.rate,
      };
    case TimerActionTypes.TickerStop:
      if (state.timer) {
        clearInterval(state.timer);
      }

      return {
        ...state,
        timer: null,
      };
    case TimerActionTypes.TickerLoop:
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
