import { STORE_USER_INFO, LOGOUT, StoreUserInfoAction } from "./userActions";
import { User } from "./user";
import Action from "../action";

export type UserState = {user: User};

const initialState:UserState = {
    user : new User()
}

export const userReducer = function(state:UserState = initialState, action:Action):any {
    console.log("Received action: ", action);
    switch (action.type) {
        case STORE_USER_INFO: {
            console.log("Dispatch store user info!", action);
            const storeUserInfoAction = <StoreUserInfoAction> action;
            console.log("Dispatch store user info 2!", storeUserInfoAction);
            return {
                ...state,
                user: storeUserInfoAction.user
            };
        }
        case LOGOUT: {
            console.log("Dispatch logout!", action);
            return {
                ...state,
                user: new User()
            }
        }
        default:
            return state;
    }
}