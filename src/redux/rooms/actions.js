import callApi from "../../helpers/axios";
import { setRoom, setMessage } from "./reducer";

export const getRooms = () => async (dispatch) => {
  try {
    const res = await callApi.get("/room");
    console.log(res.room);
    dispatch(setRoom(res));
  } catch (e) {
    console.log(e);
  }
};

export const checkUserInRoom = ({ idUser, history }) => async (dispatch) => {
  try {
    const res = await callApi.get(`/users/${idUser}`);
    // console.log(res.room);
    if (res.room._id) {
      const res2 = await callApi.get(`/room/${res.room._id}`);
      dispatch(setMessage(res2));
      history.push(`/room/${res.room._id}`);
    }
  } catch (e) {
    console.log(e);
  }
};

export const findMessageInRoom = ({ idRoom, history }) => async (dispatch) => {
  try {
    const res = await callApi.get(`/room/${idRoom}`);
    // console.log(res);

    dispatch(setMessage(res));
  } catch (error) {}
};
