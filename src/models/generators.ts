export enum GeneratorTypes {
  Basic = "BASIC",
}

export interface IGenerator {
  type: GeneratorTypes;
  name: string;
  costBase: number;
  costScaling: number;
  owned: number;
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

export function getGeneratorCost({
  costBase,
  costScaling,
  owned,
}: IGenerator) {
  return Math.ceil(costBase * (costScaling ** owned));
}
