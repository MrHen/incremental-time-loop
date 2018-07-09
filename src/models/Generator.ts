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
