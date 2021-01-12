import { createStore } from "redux";

import combine from "./reducers";

const store = createStore(combine);

export default store;
