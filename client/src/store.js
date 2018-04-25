import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";

import { navigationMiddleware } from "./navigation";
import reducer from "./reducers";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  reducer,
  {}, // initial state
  composeWithDevTools(applyMiddleware(sagaMiddleware, navigationMiddleware))
);

sagaMiddleware.run(sagas);

// persistent storage
export const persistor = persistStore(store);
