import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {AppState, emptyState} from "./types";



export const appStateSlice = createSlice({
    name: "appStateState",
    initialState: emptyState,
    reducers: {
        setCurrentSToken: (state: AppState, action: PayloadAction<string | undefined>) => {
            state.currentSToken = action.payload
        },
        setSelectedPage: (state: AppState, action: PayloadAction<string>) => {
            state.selectedPage = action.payload
        },
        setNavOpened: (state: AppState, action: PayloadAction<boolean>) => {
            state.navOpened = action.payload
        },
        setLoginOpened: (state: AppState, action: PayloadAction<boolean>) => {
            state.loginOpened = action.payload
        },
        setLoginError: (state: AppState, action: PayloadAction<Error | undefined>) => {
            state.loginError = action.payload
        },
        setBlockingWaiting: (state: AppState, action: PayloadAction<string | undefined>) => {
            state.blockingWaiting = action.payload
        },
        setBlockingError: (state: AppState, action: PayloadAction<Error | undefined>) => {
            state.blockingError = action.payload
        },
        setBlockingCallback: (state: AppState, action: PayloadAction<Function | undefined>) => {
            state.blockingCallback = action.payload
        },
        setMainViewportHeight: (state: AppState, action: PayloadAction<number | undefined>) => {
            state.mainViewportHeight = action.payload
        }
    }
});

export const {
    setCurrentSToken,
    setSelectedPage,
    setNavOpened,
    setLoginOpened,
    setLoginError,
    setBlockingWaiting,
    setBlockingError,
    setBlockingCallback,
    setMainViewportHeight
} = appStateSlice.actions;

export default appStateSlice.reducer;
