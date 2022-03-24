import { User } from '../user/user';
export enum UserActions {
  GetUser = 'GET_USER',
  LoginChange = 'CHANGE_LOGIN',
}

export enum TrmsActions {}

export interface AppAction {
  type: string;
  payload: any;
}

export interface UserAction extends AppAction {
  type: UserActions;
  payload: User;
}

export function getUser(u: User): UserAction {
  const action = {
    type: UserActions.GetUser,
    payload: u,
  };
  return action;
}

export function loginAction(u: User): UserAction {
  const action = {
    type: UserActions.LoginChange,
    payload: u,
  };
  return action;
}
