import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_ERROR,
} from "../Constants/authConstants";

export const loginUser = (): object => {
  return {
    type: LOGIN_USER,
    payload: null,
  };
};

export const loginUserSuccess = (params: {
  token: string;
  user: object;
}): object => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: { ...params },
  };
};

export const loginUserError = (params: { errors: object }): object => {
  return {
    type: LOGIN_USER_ERROR,
    payload: params,
  };
};

export const logoutUser = (): object => {
  return {
    type: LOGOUT_USER,
    payload: null,
  };
};

export const logoutUserSuccess = (): object => {
  return {
    type: LOGOUT_USER_SUCCESS,
    payload: null,
  };
};

export const logoutUserError = (params: { errors: object }): object => {
  return {
    type: LOGOUT_USER_ERROR,
    payload: { ...params },
  };
};
