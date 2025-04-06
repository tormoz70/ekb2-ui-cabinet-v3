import {appStateSlice} from "../redux/appState/appStateSlice";
import {EkbApiError} from "../model/EkbApiError";
import {useEffect} from "react";
import {loadUserMenu} from "../redux/userMenu/userMenuThunk";
import {RootState, useAppDispatch, useAppSelector} from "../redux/store";
import {currentUser} from "../redux/userProfile/userProfileThunk";
import {SsoUser} from "../ekb2-api";

const MainBootstrap = () => {
    const dispatch = useAppDispatch();

    const usrMenu: { isLoading, error } = useAppSelector((state: RootState) => state.userMenuState );
    const { currentSToken } = useAppSelector((state: RootState) => state.appStateState);
    const usrProfile: { isLoading: boolean, error: Error, user: SsoUser } = useAppSelector((state: RootState) => state.userProfileState );

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
        if(!usrProfile.isLoading) {
            dispatch(appStateSlice.actions.setBlockingWaiting(undefined));
        }
        if(usrProfile.error instanceof EkbApiError) {
            dispatch(appStateSlice.actions.setCurrentSToken(undefined));
            dispatch(appStateSlice.actions.setBlockingError(usrProfile.error));

        }
        if(usrProfile.user && usrProfile.user.stoken) {
            dispatch(loadUserMenu(usrProfile.user.stoken));
        }
    }, [usrProfile]);

    useEffect(() => {
        if(!usrProfile.isLoading) {
            dispatch(appStateSlice.actions.setBlockingWaiting(undefined));
        }
        if(usrMenu.isLoading) {
            dispatch(appStateSlice.actions.setBlockingWaiting("Загрузка основного меню пользователя..."));
        }
        if(usrMenu.error instanceof EkbApiError) {
            dispatch(appStateSlice.actions.setBlockingError(usrMenu.error));
        }
    }, [usrProfile.isLoading, usrMenu]);

    return (
        < ></>
    );
}

export default MainBootstrap;
