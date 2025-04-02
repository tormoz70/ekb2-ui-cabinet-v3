import {createSlice} from "@reduxjs/toolkit"
import {emptyUserMenu, UserMenuState} from "../../../routes/types";

export const userMenuSlice = createSlice({
    name: "userMenuState",
    initialState: emptyUserMenu,
    reducers: {
        loadUserMenuStart(state: UserMenuState) {
            state.isLoading = true;
            state.isLoaded = false;
        },
        loadUserMenuSuccess: (state: UserMenuState, action) => {
            state.items = action.payload;
            state.isLoading = false;
            state.isLoaded = true;
            state.error = undefined;
        },
        loadUserMenuFailed: (state: UserMenuState, action) => {
            state.items = [];
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

export const {
    loadUserMenuStart,
    loadUserMenuSuccess,
    loadUserMenuFailed
} = userMenuSlice.actions;

export default userMenuSlice.reducer;

