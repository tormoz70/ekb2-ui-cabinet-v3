import {appStateSlice} from "../redux/appState/appStateSlice";
import {EkbApiError} from "../model/EkbApiError";
import {useEffect} from "react";
import {loadUserMenu} from "../redux/userMenu/userMenuThunk";
import {RootState, useAppDispatch, useAppSelector} from "../redux/store";
import {currentUser} from "../redux/userProfile/userProfileThunk";

const MainBootstrap = () => {
    const dispatch = useAppDispatch();

    const { userMenuState } = useAppSelector((state: RootState) => state.userMenuState);
    const { currentSToken } = useAppSelector((state: RootState) => state.appStateState)
    const { userProfileState } = useAppSelector((state: RootState) => state)

    useEffect(() => {
        if(currentSToken !== undefined) {
            localStorage.setItem("stoken", currentSToken);
            if (currentSToken) {
                dispatch(appStateSlice.actions.setBlockingWaiting("Загрузка профиля..."));
                dispatch(currentUser(currentSToken))
            } else {
                dispatch(appStateSlice.actions.setLoginOpened(true));
            }
        }
    }, [currentSToken]);

    useEffect(() => {
        if(!userProfileState.isLoading) {
            dispatch(appStateSlice.actions.setBlockingWaiting(undefined));
        }
        if(userProfileState.error instanceof EkbApiError) {
            dispatch(appStateSlice.actions.setCurrentSToken(undefined));
            dispatch(appStateSlice.actions.setBlockingError(userProfileState.error));

        }
        if(userProfileState.user.name) {
            dispatch(loadUserMenu());
        }
    }, [userProfileState]);

    useEffect(() => {
        if(!userProfileState.isLoading) {
            dispatch(appStateSlice.actions.setBlockingWaiting(undefined));
        }
        if(userMenuState.isLoading) {
            dispatch(appStateSlice.actions.setBlockingWaiting("Загрузка основного меню пользователя..."));
        }
        if(userMenuState.error instanceof EkbApiError) {
            dispatch(appStateSlice.actions.setBlockingError(userMenuState.error));
        }
    }, [userMenuState]);

    return (
        < ></>
    );
}

export default MainBootstrap;
