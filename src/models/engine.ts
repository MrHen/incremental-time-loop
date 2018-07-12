import { GeneratorTypes, getGeneratorValue, IGeneratorsState } from "../models/generators";

export const getRecalculatedRates = ({
  [GeneratorTypes.Basic]: basic,
  [GeneratorTypes.AlphaOne]: alphaOne,
}: IGeneratorsState) => {
    let energyPerSecond = 0;
    energyPerSecond += getGeneratorValue(basic);
    energyPerSecond += getGeneratorValue(alphaOne);
    return energyPerSecond;
};
