import { combineReducers } from "redux";
import generators from "./generators";
import materials from "./materials";

import { IGeneratorsState } from "../reducers/generators";
import { IMaterialState } from "../reducers/materials";

export interface IState {
  materials: IMaterialState;
  generators: IGeneratorsState;
}

export default combineReducers({
  generators,
  materials,
});
