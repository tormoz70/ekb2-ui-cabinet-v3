import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainLayout from "./MainLayout";
import {generateRoute} from "../routes";
import {
    setBlockingError,
    setBlockingWaiting,
    setCurrentSToken,
    setLoginOpened
} from "../redux/_main/faetures/appStateSlice";
import {EkbApiError} from "../model/EkbApiError";
import {useEffect} from "react";
import {loadUserMenu} from "../redux/_main/thunks/userMenuThunk";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/store";
import {currentUser} from "../redux/_main/thunks/userProfileThunk";

const MainBootstrap = () => {
    const dispatch = useDispatch();

    const { userMenuState } = useSelector((state: RootState) => state);
    const { currentSToken } = useSelector((state: RootState) => state.appStateState)
    const { userProfileState } = useSelector((state: RootState) => state)

    useEffect(() => {
        if(currentSToken !== undefined) {
            localStorage.setItem("stoken", currentSToken);
            if (currentSToken) {
                dispatch(setBlockingWaiting("Загрузка профиля..."));
                dispatch(currentUser(currentSToken))
            } else {
                dispatch(setLoginOpened(true));
            }
        }
    }, [currentSToken]);

    useEffect(() => {
        if(!userProfileState.isLoading) {
            dispatch(setBlockingWaiting(undefined));
        }
        if(userProfileState.error instanceof EkbApiError) {
            dispatch(setCurrentSToken(undefined));
            dispatch(setBlockingError(userProfileState.error));

        }
        if(userProfileState.user.name) {
            dispatch(loadUserMenu());
        }
    }, [userProfileState]);

    useEffect(() => {
        if(!userProfileState.isLoading) {
            dispatch(setBlockingWaiting(undefined));
        }
        if(userMenuState.isLoading) {
            dispatch(setBlockingWaiting("Загрузка основного меню пользователя..."));
        }
        if(userMenuState.error instanceof EkbApiError) {
            dispatch(setBlockingError(userMenuState.error));
        }
    }, [userMenuState]);

    return (
        < ></>
    );
}

export default MainBootstrap;
