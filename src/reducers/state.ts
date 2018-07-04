import { ThunkAction } from "redux-thunk";

import {
  GeneratorTypes,
} from "../actions/generators";

export interface IGenerator {
  owned: number;
}

export interface IEngineState {
  energyPerSecond: number;
}

export interface IGeneratorsState {
  [GeneratorTypes.Basic]: IGenerator;
}

export interface IMaterialState {
  energy: number;
  ticks: number;
}

export interface ITimerState {
  timer?: number;
  rate: number;
}

export interface IState {
  engine: IEngineState;
  materials: IMaterialState;
  generators: IGeneratorsState;
  timers: ITimerState;
}

export type StateGetter = () => IState;
export type StateThunkAction = ThunkAction<void, IState, void>;
