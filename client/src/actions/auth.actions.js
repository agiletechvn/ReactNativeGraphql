import { client, wsClient } from "../app";
import { SET_CURRENT_USER } from "../constants/actions";

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  user
});
