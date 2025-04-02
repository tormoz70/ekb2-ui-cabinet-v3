import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {emptyUser, emptyUserProfile, UserProfile} from "./types";
import {SsoUser} from "../../ekb2-api";

export const userProfileSlice = createSlice({
    name: "userProfileState",
    initialState: emptyUserProfile,
    reducers: {
        loginUserStart(state: UserProfile) {
            state.isLoading = true;
            state.isLoaded = false;
        },
        loginUserSuccess: (state: UserProfile, action: PayloadAction<SsoUser>) => {
            state.user = action.payload;
            state.isLoading = false;
            state.isLoaded = true;
            state.error = undefined;
        },
        loginUserFailed: (state: UserProfile, action: PayloadAction<Error | undefined>) => {
            state.user = emptyUser;
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

export const {
    loginUserStart,
    loginUserSuccess,
    loginUserFailed
} = userProfileSlice.actions;

export default userProfileSlice.reducer;

