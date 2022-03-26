import { User } from '../user/user';
import { Trms } from '../trms/trms';
import * as Actions from './actions';

export interface UserState {
  user: User;
  loginUser: User;
}
export interface TrmsState {
  allTrms: Trms[];
  trms: Trms;
}

export interface AppState extends UserState, TrmsState {}

export const initialState: AppState = {
  user: new User(),
  loginUser: new User(),
  trms: new Trms(),
  allTrms: [] as Trms[],
};

const reducer = (state: AppState = initialState, action: Actions.AppAction) => {
  const newState = { ...state };
  switch (action.type) {
    case Actions.UserActions.GetUser:
      newState.user = action.payload as User;
      newState.loginUser = new User();
      return newState;
    case Actions.UserActions.LoginChange:
      newState.loginUser = action.payload as User;
      return newState;
    case Actions.TrmsActions.GetAllTrms:
      newState.allTrms = action.payload as Trms[];
      return newState;
    case Actions.TrmsActions.ChangeTrms:
      newState.trms = action.payload as Trms;
      return newState;
    default:
      return state;
  }
};

export default reducer;
