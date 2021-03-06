import callApi from "../../helpers/axios";
import { setUsers, getInfo } from "./reducer";

export const getUsers = () => async (dispatch) => {
  try {
    const res = await callApi.get("/users");
    await dispatch(setUsers(res.dataUsers));
  } catch (e) {}
};

export const showUser = (data) => async (dispatch) => {
  try {
    const res = await callApi.get(`/users/i/${data.userId}`);
    await dispatch(getInfo(res.userInfo));
  } catch (e) {}
};

export const searchUser = (textLower) => async (dispatch) => {
  try {
    const res = await callApi.get(`/search?q=${textLower}`);

    await dispatch(setUsers(res.dataUsers));
  } catch (e) {}
};
