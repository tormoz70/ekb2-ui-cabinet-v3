import {currentApi, loginApi} from "../../api/userApi";
import {userProfileSlice} from "./userProfileSlice";
import {UserProfile} from "./types";
import {appStateSlice} from "../appState/appStateSlice";
import {AppDispatch} from "../store";
import {SsoUser} from "../../ekb2-api";

export const loginUser: any = (userName:string, password: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(userProfileSlice.actions.loginUserStart());
        const response: UserProfile = await loginApi(userName, password);
        dispatch(appStateSlice.actions.setCurrentSToken(response.user.stoken??""));
        dispatch(userProfileSlice.actions.loginUserSuccess(response.user));
    } catch (error) {
        debugger;
        dispatch(userProfileSlice.actions.loginUserFailed(error));
    }
};


export const currentUser: any = (stoken: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(userProfileSlice.actions.loginUserStart());
        const response: SsoUser = await currentApi(stoken);
        dispatch(userProfileSlice.actions.loginUserSuccess(response));
    } catch (error) {
        debugger;
        dispatch(userProfileSlice.actions.loginUserFailed(error));
    }
};

export const restoreSToken: any = () => async (dispatch: AppDispatch) => {
    const storedSToken = localStorage.getItem("stoken");
    dispatch(appStateSlice.actions.setCurrentSToken(storedSToken ?? undefined));
}

