import { combineReducers } from "redux";
import generators from "./generators";
import materials from "./materials";
import timers from "./timers";

export default combineReducers({
  generators,
  materials,
  timers,
});
