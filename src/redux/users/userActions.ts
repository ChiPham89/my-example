import UserCredential from "./userCredential";
import { User } from "./user";
import Action from "../action";
import UsersApi from "../../apiCall/users/users";

export const STORE_USER_INFO: string = "STORE_USER_INFO";
export const LOGOUT: string = "LOGOUT";

export interface StoreUserInfoAction extends Action {
  readonly user:User;
}

// export const storeUserInfo = (user: User):StoreUserInfoAction => {
  export const storeUserInfo = (credential:UserCredential):StoreUserInfoAction => {  
  console.log("Received credential: ", credential);
  const user = UsersApi.login(credential);
  console.log("Found user: ", user);
  return {
    type: STORE_USER_INFO,
    user
  };
}

export type LoginAction = (credential:UserCredential) => Function;

// export const login:LoginAction = (credential:UserCredential):Function => {
//   console.log("Action login");
//   return (dispatch:Function, getState:Function) => {
//     console.log("Received credential: ", credential);
//     const user = UsersApi.login(credential);
//     console.log("Found user: ", user);
//     if (user) {
//       dispatch(storeUserInfo(user));
//     }
//   }
// }

export interface LogoutAction extends Action {
  
}

export const logout = ():LogoutAction => {
  console.log("Fire logout action");
  return {type: LOGOUT}
};

