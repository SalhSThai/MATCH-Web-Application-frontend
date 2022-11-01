import axios from "../config/axios";

export const registerApi = (input) => axios.post("/auth/register", input);
export const loginApi = (input) => axios.post("/auth/login", input);
export const rememberMeApi = () => axios.post("/auth/me");
export const getInformation = () => axios.post("/auth/getInformation");
export const updateUser = (input) => axios.patch("auth/updateUser", input);
