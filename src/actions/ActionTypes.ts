enum ActionTypes {
  GeneratorAdd = "GENERATOR_ADD",
  GeneratorPurchase = "GENERATOR_PURCHASE",
  GeneratorSetCost = "GENERATOR_SET_COST",

  AddEnergyFromTick = "ADD_ENERGY_FROM_TICK",
  RecalculateCost = "RECALCULATE_COST",
  RecalculateCosts = "RECALCULATE_COSTS",
  RecalculateRates = "RECALCULATE_RATES",
  SetEnergyPerSecond = "SET_ENERGY_PER_SECOND",

  AddEnergy = "MATERIALS_ADD_ENERGY",

  AddTick = "TIMERS_ADD_TICK",
  ToggleTicker = "TIMERS_TOGGLE",
  TickerStart = "TIMERS_TICKER_START",
  TickerStep = "TIMERS_TICKER_STEP",
  TickerStop = "TIMERS_TICKER_STOP",
  TickerLoop = "TIMERS_TICKER_LOOP",
}

export default ActionTypes;
