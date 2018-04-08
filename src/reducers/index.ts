import { combineReducers } from "redux";
import generators from "./generators";
import materials from "./materials";

import { IGeneratorState } from "../reducers/generators";
import { IMaterialsState } from "../reducers/materials";

export interface IState {
  materials: IMaterialsState;
  generators: IGeneratorState;
}

export default combineReducers({
  generators,
  materials,
});
