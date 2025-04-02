import {currentApi, loginApi} from "../../api/userApi";
import {loginUserFailed, loginUserStart, loginUserSuccess} from "./userProfileSlice";
import {UserProfile} from "./types";
import {setCurrentSToken} from "../appState/appStateSlice";
import {AppDispatch} from "../store";

export const loginUser: any = (userName:string, password: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(loginUserStart());
        const response: UserProfile = await loginApi(userName, password);
        dispatch(setCurrentSToken(response.user.stoken??""));
        dispatch(loginUserSuccess(response.user));
    } catch (error) {
        debugger;
        dispatch(loginUserFailed(error));
    }
};


export const currentUser: any = (stoken: string) => async (dispatch: any) => {
    try {
        dispatch(loginUserStart());
        const response: UserProfile = await currentApi(stoken);
        dispatch(loginUserSuccess(response));
    } catch (error) {
        debugger;
        dispatch(loginUserFailed(error));
    }
};

export const restoreSToken: any = () => async (dispatch: any) => {
    const storedSToken = localStorage.getItem("stoken");
    dispatch(setCurrentSToken(storedSToken ?? undefined));
}

