import callApi from "../../helpers/axios";
import { setUsers } from "./reducer";
import { message } from "antd";

export const getUsers = () => async (dispatch) => {
  try {
    const res = await callApi.get("/users");
    await dispatch(setUsers(res.dataUsers));
  } catch (e) {
    console.log(e);
  }
};

export const searchUser = (textLower) => async (dispatch) => {
  try {
    const res = await callApi.get(`/search?q=${textLower}`);

    await dispatch(setUsers(res.dataUsers));
  } catch (e) {
    console.log(e);
  }
};
