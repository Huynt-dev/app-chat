import callApi from "../../helpers/axios";
import { setRoom, setMessage } from "./reducer";

export const getRooms = () => async (dispatch) => {
  try {
    const res = await callApi.get("/room");
    dispatch(setRoom(res));
  } catch (e) {
    console.log(e);
  }
};

export const checkUserInRoom = ({ idUser, history }) => async (dispatch) => {
  try {
    const res = await callApi.get(`/users/${idUser}`);
    if (res.room._id) {
      const res2 = await callApi.get(`/room/${res.room._id}/${idUser}`);
      dispatch(setMessage(res2));
      history.push(`/room/${res.room._id}/${idUser}`);
    }
  } catch (e) {
    console.log(e);
  }
};

export const findMessageInRoom = ({ idRoom, toUser, history }) => async (
  dispatch
) => {
  try {
    const res = await callApi.get(`/room/${idRoom}/${toUser}`);
    await history.push(`/room/${idRoom}/${toUser}`);
    await dispatch(setMessage(res));
  } catch (error) {}
};

export const searchRoom = (textLower) => async (dispatch) => {
  try {
    const res = await callApi.get(`/search/room?r=${textLower}`);
    await dispatch(setRoom(res));
  } catch (e) {
    console.log(e);
  }
};
