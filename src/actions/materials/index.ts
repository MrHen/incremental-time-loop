import ActionTypes from "../ActionTypes";

import addEnergy from "./addEnergy";

const actions = {
  [ActionTypes.AddEnergy]: addEnergy,
};

export default actions;
