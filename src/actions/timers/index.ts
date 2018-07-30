import ActionTypes from "../ActionTypes";

import addTick from "./addTick";
import tickerLoop from "./tickerLoop";
import tickerStart from "./tickerStart";
import tickerStep from "./tickerStep";
import tickerStop from "./tickerStop";
import tickerToggle from "./tickerToggle";

const actions = {
  [ActionTypes.AddTick]: addTick,
  [ActionTypes.TickerStart]: tickerStart,
  [ActionTypes.TickerStop]: tickerStop,
  [ActionTypes.TickerLoop]: tickerLoop,
  [ActionTypes.TickerStep]: tickerStep,
  [ActionTypes.ToggleTicker]: tickerToggle,
};

export default actions;
