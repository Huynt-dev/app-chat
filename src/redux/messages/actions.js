import callApi from "../../helpers/axios";
import { setMessages } from "./reducer";

export const getMessage = ({ idUser }) => async (dispatch) => {
  try {
    const res = await callApi.get(`/messages/${idUser}`);
    console.log(res);
    dispatch(setMessages(res));
  } catch (e) {
    console.log(e);
  }
};
