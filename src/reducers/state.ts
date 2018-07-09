import { ThunkAction } from "redux-thunk";

import { IState } from "../models/GameState";

export type StateGetter = () => IState;
export type StateThunkAction = ThunkAction<void, IState, void>;
