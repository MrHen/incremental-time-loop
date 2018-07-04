import engineActions, { EngineActionTypes } from "./engine";
import generatorActions, { GeneratorActionTypes } from "./generators";
import materialActions, { MaterialActionTypes } from "./materials";
import timerActions, { TimerActionTypes } from "./timers";

export type ActionTypes = MaterialActionTypes | GeneratorActionTypes | TimerActionTypes | EngineActionTypes;

const actions = {
  ...engineActions,
  ...timerActions,
  ...materialActions,
  ...generatorActions,
};

export default actions;
