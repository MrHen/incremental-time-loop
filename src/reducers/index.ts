import { combineReducers } from "redux";
import materials from "./materials";

import { IMaterialsState } from "../reducers/materials";

export interface IState {
  materials: IMaterialsState;
}

export default combineReducers({
  materials,
});
