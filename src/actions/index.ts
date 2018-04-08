export enum MaterialActions {
  AddEnergy = "ADD_ENERGY",
  AddTick = "ADD_TICK",
  BuyGenerator = "BUY_GENERATOR",
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

export const buyGenerator = ({
  amount = 1,
  generatorType = "basic",
}) => {
  return {
    amount,
    generatorType,
    type: MaterialActions.BuyGenerator,
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
