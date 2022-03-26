import { User } from '../user/user';
import { Trms } from '../trms/trms';
export enum UserActions {
  GetUser = 'GET_USER',
  LoginChange = 'CHANGE_LOGIN',
}

export enum TrmsActions {
  GetAllTrms = 'GET_ALL_TRMS',
  ChangeTrms = 'CHANGE_TRMS',
}

export interface AppAction {
  type: string;
  payload: any;
}

export interface UserAction extends AppAction {
  type: UserActions;
  payload: User;
}

export interface TrmsAction extends AppAction {
  type: TrmsActions;
  payload: Trms | Trms[];
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

export function getAllTrms(t: Trms[]): TrmsAction {
  const action: TrmsAction = {
    type: TrmsActions.GetAllTrms,
    payload: t,
  };
  return action;
}
export function changeTrms(t: Trms): TrmsAction {
  const action: TrmsAction = {
    type: TrmsActions.ChangeTrms,
    payload: t,
  };
  return action;
}
