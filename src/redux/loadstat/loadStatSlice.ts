import {createSlice} from "@reduxjs/toolkit"
import {emptyLoadStat, LoadStatState} from "./types";

export const loadStatSlice = createSlice({
    name: "loadStatState",
    initialState: emptyLoadStat,
    reducers: {
        loadLoadStatStart(state: LoadStatState) {
            state.isLoading = true;
            state.isLoaded = false;
        },
        loadLoadStatSuccess: (state: LoadStatState, action) => {
            state.response = action.payload;
            state.isLoading = false;
            state.isLoaded = true;
            state.error = undefined;
        },
        loadLoadStatFailed: (state: LoadStatState, action) => {
            state.response = undefined;
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

export const {
    loadLoadStatStart,
    loadLoadStatSuccess,
    loadLoadStatFailed
} = loadStatSlice.actions;

export default loadStatSlice.reducer;

