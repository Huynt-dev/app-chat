import callApi from "../../helpers/axios";
import { setLoginData, updateUser } from "./reducer";
import { message } from "antd";

export const login = ({ email, password, history }) => async (dispatch) => {
  try {
    const res = await callApi.post("/auth/login", {
      email,
      password,
    });

    dispatch(setLoginData(res));
    callApi.defaults.headers.common["Authorization"] = `Bearer ${res.token}`;
    message.success("login success");
    history.push("/");
  } catch (e) {
    message.error("Email or Password is invalid");
  }
};

export const registerA = ({
  firstName,
  lastName,
  email,
  nickName,
  password,
  gender,
  history,
}) => async () => {
  try {
    await callApi.post("/auth/register", {
      firstName,
      lastName,
      email,
      nickName,
      password,
      gender,
    });
    message.success("Register success");
    history.push("/login");
  } catch (error) {
    message.success(error);
  }
};

export const changeInfo = (data) => async (dispatch) => {
  try {
    const res = await callApi.post(`/profile/i/`, {
      data,
    });
    dispatch(updateUser(res));

    message.success("Change success");
  } catch (error) {
    message.success(error);
  }
};

export const changePass = (data) => async (dispatch) => {
  try {
    await callApi.post(`/profile/p/`, {
      data,
    });
    dispatch(
      setLoginData({
        token: null,
        user: {},
      })
    );
    message.success("Change Password success");
  } catch (error) {
    message.error(error);
  }
};
