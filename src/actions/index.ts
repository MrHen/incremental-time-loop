import generatorActions, { GeneratorActionTypes } from "./generators";
import timerActions, { TimerActionTypes } from "./timers";

export enum MaterialActions {
  AddEnergy = "ADD_ENERGY",
  AddTick = "ADD_TICK",
}

export type ActionTypes = MaterialActions | GeneratorActionTypes | TimerActionTypes;

export const addEnergy = (amount: number = 1) => {
  return {
    amount,
    type: MaterialActions.AddEnergy,
  };
};

const actions = {
  addEnergy,
  addTick: timerActions.addTick,
  generators: generatorActions,
  toggleTicker: timerActions.toggleTicker,
};

export default actions;
