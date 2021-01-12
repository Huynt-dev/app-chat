import { connect } from "react-redux";
import { HomePage } from "../containers";
import { loginAction } from "../reducers/auth/actions";

const mapStateToProps = (state) => {
  console.log({ state });
  return {
    loginA: state.loginReducer,
  };
};

const mapActionToProps = (dispatch) => ({
  loginActionA: () => dispatch(loginAction()),
});

export default connect(mapStateToProps, mapActionToProps)(HomePage);
