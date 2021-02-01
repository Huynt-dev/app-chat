import callApi from "../../helpers/axios";
import { setLoginData } from "./reducer";

export const login = ({ email, password, history }) => async (dispatch) => {
  try {
    const res = await callApi.post("/auth/login", {
      email,
      password,
    });

    dispatch(setLoginData(res));
    callApi.defaults.headers.common["Authorization"] = `Bearer ${res.token}`;
    history.push("/");
  } catch (e) {
    // history.push("/login");
    console.log(e);
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

    history.push("/login");
    console.log("register success");
  } catch (error) {}
};
