export enum GeneratorTypes {
  Basic = "BASIC",
  AlphaOne = "ALPHA_ONE",
}

export interface IGenerator {
  type: GeneratorTypes;
  name: string;
  costBase: number;
  costScaling: number;
  owned: number;
  value: number;
}

export interface IGeneratorsState {
  [GeneratorTypes.Basic]: IGenerator;
  [GeneratorTypes.AlphaOne]: IGenerator;
}

export const GeneratorsDefaults: IGeneratorsState = {
  [GeneratorTypes.Basic]: {
    costBase: 1,
    costScaling: 1.1,
    name: "basic",
    owned: 1,
    type: GeneratorTypes.Basic,
    value: 1,
  },
  [GeneratorTypes.AlphaOne]: {
    costBase: 10,
    costScaling: 1.1,
    name: "alpha",
    owned: 0,
    type: GeneratorTypes.AlphaOne,
    value: 2,
  },
};

export function getGeneratorCost({
  costBase,
  costScaling,
  owned,
}: IGenerator) {
  return Math.ceil(costBase * (costScaling ** owned));
}

// TODO: Support multiple materials
export function getGeneratorValue({
  owned,
  value,
}: IGenerator) {
  return owned * value;
}
