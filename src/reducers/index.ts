import { combineReducers } from "redux";
import generators, { IGeneratorsState } from "./generators";
import materials, { IMaterialState } from "./materials";
import timers, { ITimerState } from "./timers";

export interface IState {
  materials: IMaterialState;
  generators: IGeneratorsState;
  timers: ITimerState;
}

export default combineReducers({
  generators,
  materials,
  timers,
});
