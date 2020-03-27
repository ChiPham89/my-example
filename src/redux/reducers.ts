import { combineReducers } from "redux";
import { userReducer, UserState } from "./users/userReducer";

export default combineReducers({userReducer});

export type StoreState = {
    userReducer: UserState
}