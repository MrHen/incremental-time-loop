import ActionTypes_ from "./ActionTypes";

import engineActions, { IEngineAction } from "./engine";
import generatorActions, { IGeneratorAction } from "./generators";
import materialActions from "./materials";
import timerActions from "./timers";

export const ActionTypes = ActionTypes_;

export type IAction = IEngineAction | IGeneratorAction;

const actions = {
  ...engineActions,
  ...generatorActions,
  ...timerActions,
  ...materialActions,
};

export default actions;
