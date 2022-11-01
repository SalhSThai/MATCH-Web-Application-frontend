import { createSlice } from "@reduxjs/toolkit";
import { Navigate } from "react-router-dom";
import {
  loginApi,
  registerApi,
  rememberMeApi,
  getInformation,
  updateUser,
} from "../../api/authApi";
import { addAccessToken, removeAccessToken } from "../../utils/localStorage";
import { loading } from "./LoadingSlice";

const authSlice = createSlice({

  name: 'auth',
  initialState: { loginState: false, userInfo: {}, online: false,getInformationState: {} },
  reducers: {
    login: (state, action) => {
      state.loginState = true;
      state.userInfo = action.payload;
    },
    logout: (state, action) => {
      removeAccessToken();
      state.loginState = false;
      state.userInfo = {};
    },
    information: (state, action) => {
      state.getInformationState = action.payload;
    },
    online: (state, action) => {
      state.online = action.payload
    }
  }
});

export const thunkRegister = (registerInfo) => async (dispatch) => {
  try {
    dispatch(loading(true));
    const res = await registerApi(registerInfo);
    dispatch(login(res.data.userInfo));
    addAccessToken(res.data.token);
  } catch (error) {
    throw error;
  } finally {
    dispatch(loading(false));
  }
};
export const thunkLogin = (loginInfo) => async (dispatch) => {
  try {
    dispatch(loading(true));
    const res = await loginApi(loginInfo);
    addAccessToken(res.data.token);
    dispatch(login(res.data.user));
  } catch (error) {
    throw error;
  } finally {
    dispatch(loading(false));
  }
};
export const thunkRemember = () => async (dispatch) => {
  try {
    await dispatch(loading(true));
    const user = await rememberMeApi();
    user && (await dispatch(login(user?.data)));
  } catch (error) {
    throw error;
  } finally {
    await dispatch(loading(false));
  }
};

export const thunkGetInformation = () => async (dispatch) => {
  try {
    dispatch(loading(true));
    const res = await getInformation();
    dispatch(information(res.data.oneUser));
  } catch (error) {
    throw error;
  } finally {
    dispatch(loading(false));
  }
};

export const thunkUpdateInformation = (input) => async (dispatch) => {
  try {
    dispatch(loading(true));
    const res = await updateUser(input);
    console.log("res.data", res.data);
    dispatch(information(res.data));
  } catch (error) {
    throw error;
  } finally {
    dispatch(loading(false));
  }
};

export default authSlice.reducer;

const { login, logout,online, register, rememberLogin,information, updateProfile } =
  authSlice.actions;
export { login, logout,online, register, rememberLogin,information, updateProfile };
