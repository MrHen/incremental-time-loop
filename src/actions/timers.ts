export enum TimerActionTypes {
  AddTick = "TIMERS_ADD_TICK",
}

export const addTick = (amount: number = 1) => {
  return {
    amount,
    type: TimerActionTypes.AddTick,
  };
};

let timer: number = null;
export const toggleTicker = (rate: number = 1) => {
  return (dispatch: any) => {
    if (timer) {
      clearInterval(timer);
      timer = null;
    } else {
      timer = window.setInterval(() => dispatch(addTick(rate)), rate * 1000);
    }
  };
};

const actions = {
  addTick,
  toggleTicker,
};

export default actions;
