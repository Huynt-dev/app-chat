import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./redux";
import callApi from "./helpers/axios";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const checkAuth = () => (next) => (action) => {
  if (
    action.type === "persist/REHYDRATE" &&
    action.payload &&
    action.payload.auth
  ) {
    const { token } = action.payload.auth;
    callApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  return next(action);
};

// const store = createStore(
// rootReducer: rootReducer,
//   applyMiddleware([thunk, logger, ..])
// );

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(checkAuth),
});

export const persistor = persistStore(store);

export default store;
