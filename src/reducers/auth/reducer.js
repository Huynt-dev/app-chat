import * as types from "./types";

const initValue = {
  values: 0,
};

const loginReducer = (state = initValue, action) => {
  console.log(types.LOGIN);
  switch (action.type) {
    case types.LOGIN:
      return { values: state.values + 1 };
    case "test":
      return { values: state.values - 1 };
    default:
      return state;
  }
};

export default loginReducer;
