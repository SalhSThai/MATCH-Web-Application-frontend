import { createSlice } from '@reduxjs/toolkit';
import {
  loginApi,
  registerApi,
  rememberMeApi,
  updateMeApi,
} from '../../api/authApi';
import { addAccessToken, removeAccessToken } from '../../utils/localStorage';
import { loading } from './LoadingSlice';

const authSlice = createSlice({
  name: 'auth',
  initialState: { loginState: false, userInfo: {} },
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
  },
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
export const thunkUpdateUser = () => async (dispatch) => {
  try {
    dispatch(loading(true));
    const res = await updateMeApi();
    dispatch(updateProfile(res.data.uesr.id));
  } catch (error) {
    throw error;
  } finally {
    dispatch(loading(false));
  }
};

export default authSlice.reducer;
const { login, register, rememberLogin, updateProfile } = authSlice.actions;
export { login, register, rememberLogin, updateProfile };
