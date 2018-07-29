import ActionTypes_ from "./ActionTypes";

import engineActions from "./engine";
import materialActions from "./materials";
import timerActions from "./timers";

export const ActionTypes = ActionTypes_;

const actions = {
  ...engineActions,
  ...timerActions,
  ...materialActions,
};

export default actions;
