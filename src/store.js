import { createStore, combineReducers } from "redux";

const reducer = combineReducers({});

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
