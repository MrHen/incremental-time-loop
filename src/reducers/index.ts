import { combineReducers } from "redux";

import engine from "./engine";
import generators from "./generators";
import materials from "./materials";
import timers from "./timers";

export default combineReducers({
  engine,
  generators,
  materials,
  timers,
});
