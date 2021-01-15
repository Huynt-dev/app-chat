import callApi from "../../helpers/axios";
import { setUsers } from "./reducer";

export const getUsers = () => async (dispatch) => {
  try {
    console.log("call api");
    const res = await callApi.get("/users");

    dispatch(setUsers(res));
  } catch (e) {
    console.log(e);
  }
};
