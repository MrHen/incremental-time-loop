import {
  cloneDeep as _cloneDeep,
} from "lodash-es";

import { ActionTypes } from "../actions";

import {
  ISetEnergyPerSecondAction,
} from "../actions/engine";

import {
  IEngineState,
} from "../models/state";

const engineDefaults: IEngineState = {
  energyPerSecond: 0,
};

const engine = (
  state: IEngineState = engineDefaults,
  action: ISetEnergyPerSecondAction,
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
