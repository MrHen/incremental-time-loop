export enum MaterialActions {
  AddEnergy = "ADD_ENERGY",
  AddTick = "ADD_TICK",
}

export const addEnergy = (amount: number = 1) => {
  return {
    amount,
    type: MaterialActions.AddEnergy,
  };
};

export const addTick = (amount: number = 1) => {
  return {
    amount,
    type: MaterialActions.AddTick,
  };
};

let timer: NodeJS.Timer = null;
export const toggleTicker = (rate: number = 1) => {
  return (dispatch: any) => {
    if (timer) {
      clearInterval(timer);
      timer = null;
    } else {
      timer = setInterval(() => dispatch(addTick(rate)), rate * 1000);
    }
  };
};
