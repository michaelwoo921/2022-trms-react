import { ThunkAction } from 'redux-thunk';
import trmsService from '../trms/trms.service';
import userService from '../user/user.service';
import { getAllTrms, getUser } from './actions';

export const thunkGetAllTrms = () => async (dispatch: any) => {
  const asyncResp = await trmsService.getAllTrms();
  dispatch(getAllTrms(asyncResp));
};

export const thunkGetUser = () => async (dispatch: any) => {
  const asyncResp = await userService.getLogin();
  dispatch(getUser(asyncResp));
};
