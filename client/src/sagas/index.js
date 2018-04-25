import { takeEvery, takeLatest } from "redux-saga/effects";
import { LOGOUT_REQUESTED } from "../constants/actions";
import { logout } from "./auth.sagas";
export default function*() {
  yield takeLatest(LOGOUT_REQUESTED, logout);
}
