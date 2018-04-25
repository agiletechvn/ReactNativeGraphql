import { AsyncStorage } from "react-native";
import { persistCombineReducers } from "redux-persist";
import { apolloReducer } from "apollo-cache-redux";
import { navigationReducer } from "../navigation";
import auth from "./auth.reducer";

const config = {
  key: "root",
  storage: AsyncStorage,
  blacklist: ["nav", "apollo"] // don't persist nav for now
};

const reducer = persistCombineReducers(config, {
  apollo: apolloReducer,
  nav: navigationReducer,
  auth
});

export default reducer;
