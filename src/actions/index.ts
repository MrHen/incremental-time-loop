import generatorActions, { GeneratorActions } from "./generators";

export enum MaterialActions {
  AddEnergy = "ADD_ENERGY",
  AddTick = "ADD_TICK",
}

export type ActionTypes = MaterialActions | GeneratorActions;

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
  addEnergy,
  addTick,
  generators: generatorActions,
  toggleTicker,
};

export default actions;
