import { ThunkAction } from "redux-thunk";
import { IState } from "../models/state";

export type StateThunkAction = ThunkAction<void, IState, void>;
