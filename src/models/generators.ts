import { MaterialTypes } from "./materials";

export enum GeneratorTypes {
  Basic = "BASIC",
  AlphaOne = "ALPHA_ONE",
  AlphaTwo = "ALPHA_TWO",
}

export type GeneratorCostType = GeneratorTypes | MaterialTypes;

export interface IGenerator {
  type: GeneratorTypes;
  name: string;
  cost?: number;
  costBase: number;
  costScaling: number;
  costType: GeneratorCostType;
  owned: number;
  value: number;
}

export interface IGeneratorsState {
  [GeneratorTypes.Basic]: IGenerator;
  [GeneratorTypes.AlphaOne]: IGenerator;
  [GeneratorTypes.AlphaTwo]: IGenerator;
}

export const GeneratorsDefaults: IGeneratorsState = {
  [GeneratorTypes.Basic]: {
    costBase: 1,
    costScaling: 1.1,
    costType: MaterialTypes.Energy,
    name: "basic",
    owned: 1,
    type: GeneratorTypes.Basic,
    value: 1,
  },
  [GeneratorTypes.AlphaOne]: {
    costBase: 10,
    costScaling: 1.1,
    costType: MaterialTypes.Energy,
    name: "alpha",
    owned: 0,
    type: GeneratorTypes.AlphaOne,
    value: 2,
  },
  [GeneratorTypes.AlphaTwo]: {
    costBase: 10,
    costScaling: 1.1,
    costType: GeneratorTypes.AlphaOne,
    name: "alpha 2",
    owned: 0,
    type: GeneratorTypes.AlphaTwo,
    value: 3,
  },
};

// TODO: Support multiple materials
export function getGeneratorValue({
  owned,
  value,
}: IGenerator) {
  return owned * value;
}
