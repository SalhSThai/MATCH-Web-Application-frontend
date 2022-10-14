import { createSlice } from "@reduxjs/toolkit";
import { loginApi, registerApi, rememberMeApi } from "../../api/authApi";
import { addAccessToken, getAccessToken,removeAccessToken } from "../../utils/localStorage";
import {loading} from './LoadingSlice'

const authSlice = createSlice({
    name: 'auth',
    initialState: { loginState: false ,userInfo:{}},
    reducers: {
        login: (state, action) => {
            state.loginState = true
            state.userInfo = action.payload
        },
        logout: (state, action) => {
            removeAccessToken();
            state.loginState = false;
            state.userInfo={};
        },
    }
})


export const thunkRegister = registerInfo => async dispatch => {
    try {
        dispatch(loading(true))
        const res = await registerApi(registerInfo);
        res.data.status === 'success' && dispatch(register(true))
    } catch (error) {
        throw error
    }
    finally{
        dispatch(loading(false))
    }
}
export const thunkLogin = loginInfo => async dispatch => {
    try {
        dispatch(loading(true))
        const res = await loginApi(loginInfo)
            addAccessToken(res.data.token);
            dispatch(login(res.data.user))
    } catch (error) {
        throw error
    }
    finally{
        dispatch(loading(false))
    }
}
export const thunkRemember =  () => async dispatch => {
    try {
        dispatch(loading(true))
        const user = await rememberMeApi(getAccessToken())
        user && dispatch(login(user?.data));

    } catch (error) {
        throw error
    }
    finally{
        dispatch(loading(false))
    }
}


export default authSlice.reducer
const { login, register,rememberLogin} = authSlice.actions;
export { login, register,rememberLogin }