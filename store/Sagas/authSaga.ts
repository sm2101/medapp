import { call, put, takeEvery } from "redux-saga/effects";
import {
  loginUserSuccess,
  loginUserError,
  logoutUserSuccess,
  logoutUserError,
} from "../actions";
import { handleSignIn } from "../../lib/firebaseAuth";
import { LOGIN_USER } from "../constants";

function* loginUser() {
  try {
    console.log("login user");
    const data = yield call(handleSignIn);
    console.log(data);
    yield put(loginUserSuccess(data));
  } catch (errors) {
    yield put(loginUserError({ errors }));
  }
}

export function* authSaga() {
  yield takeEvery(LOGIN_USER, loginUser);
}
