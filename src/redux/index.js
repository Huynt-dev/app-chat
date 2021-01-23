import { combineReducers } from "redux";

import authReducer from "./auth/reducer";
import userReducer from "./users/reducer";
import roomReducer from "./rooms/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  rooms: roomReducer,
});

export default rootReducer;

// config
