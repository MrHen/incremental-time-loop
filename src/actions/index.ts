import engineActions, { EngineActionTypes } from "./engine";
import materialActions, { MaterialActionTypes } from "./materials";
import timerActions, { TimerActionTypes } from "./timers";

export type ActionTypes = MaterialActionTypes | TimerActionTypes | EngineActionTypes;

const actions = {
  ...engineActions,
  ...timerActions,
  ...materialActions,
};

export default actions;
