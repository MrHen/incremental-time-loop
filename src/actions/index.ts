import generatorActions, { GeneratorActionTypes } from "./generators";
import materialActions, { MaterialActionTypes } from "./materials";
import timerActions, { TimerActionTypes } from "./timers";

export type ActionTypes = MaterialActionTypes | GeneratorActionTypes | TimerActionTypes;

const actions = {
  addEnergy: materialActions.addEnergy,
  addTick: timerActions.addTick,
  generators: generatorActions,
  toggleTicker: timerActions.toggleTicker,
};

export default actions;
