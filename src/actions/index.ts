import generatorActions, { GeneratorActionTypes } from "./generators";
import materialActions, { MaterialActionTypes } from "./materials";
import timerActions, { TimerActionTypes } from "./timers";

export type ActionTypes = MaterialActionTypes | GeneratorActionTypes | TimerActionTypes;

const actions = {
  ...timerActions,
  ...materialActions,
  ...generatorActions,
};

export default actions;
