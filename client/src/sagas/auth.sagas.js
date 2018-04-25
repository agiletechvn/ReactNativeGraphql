import { put } from "redux-saga/effects";
import { client, wsClient } from "../app";
import { LOGOUT } from "../constants/actions";

export function* logout(action) {
  client.resetStore();
  wsClient.unsubscribeAll(); // unsubscribe from all subscriptions
  wsClient.close(); // close the WebSocket connection
  yield put({ type: LOGOUT });
}
