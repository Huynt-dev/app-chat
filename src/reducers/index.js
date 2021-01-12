import { combineReducers } from "redux";

import loginReducer from "./auth/reducer";

const combine = combineReducers({
  loginReducer,
});

export default combine;
