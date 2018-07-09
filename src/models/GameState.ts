import {
  GeneratorTypes,
  IGenerator,
} from "./Generator";

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
