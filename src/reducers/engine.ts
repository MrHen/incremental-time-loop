import {
  cloneDeep as _cloneDeep,
} from "lodash-es";

import { ActionTypes, IAction } from "../actions";

import {
  IEngineState,
} from "../models/state";

const engineDefaults: IEngineState = {
  energyPerSecond: 0,
};

const engine = (
  state: IEngineState = engineDefaults,
  action: IAction,
): IEngineState => {
  switch (action.type) {
    case ActionTypes.SetEnergyPerSecond:
      const next = _cloneDeep(state);
      next.energyPerSecond = action.energyPerSecond;
      return next;

    default:
      return state;
  }
};

export default engine;
