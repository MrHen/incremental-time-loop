import {
  GeneratorTypes,
  IGenerator,
} from "./generators";

export interface IEngineState {
  energyPerSecond: number;
}

export interface IGeneratorsState {
  [GeneratorTypes.Basic]: IGenerator;
}

export const GeneratorsDefaults: IGeneratorsState = {
  [GeneratorTypes.Basic]: {
    costBase: 1,
    costScaling: 1.1,
    name: "basic",
    owned: 0,
    type: GeneratorTypes.Basic,
  },
};

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
