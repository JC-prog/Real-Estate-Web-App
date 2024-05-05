import axios from "axios";
import { UserProfileToken } from "../Models/User";
import {handleError } from "../Helpers/ErrorHandler";

const api = "http://localhost:3000/api";

export const  loginAPI = async (username: string, password: string) => {
    try {
        const data = await axios.post<UserProfileToken>(api + "account/login", {
            username: username,
            password: password,
        });
        return data;
    } catch (error) {
        handleError(error)
    }
};

export const  registerAPI = async (username: string, password: string) => {
    try {
        const data = await axios.post<UserProfileToken>(api + "account/register", {
            username: username,
            password: password,
        });
        return data;
    } catch (error) {
        handleError(error)
    }
};