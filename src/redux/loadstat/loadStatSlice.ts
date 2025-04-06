import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {emptyLoadStat, LoadStatFilter, LoadStatState} from "./types";
import {LoadStatListResponse} from "../../ekb2-api";

export const loadStatSlice = createSlice({
    name: "loadStatState",
    initialState: emptyLoadStat,
    reducers: {
        loadLoadStatStart(state: LoadStatState) {
            state.isLoading = true;
            state.isLoaded = false;
        },
        loadLoadStatSuccess: (state: LoadStatState, action: PayloadAction<LoadStatListResponse>) => {
            state.response = action.payload;
            state.isLoading = false;
            state.isLoaded = true;
            state.error = undefined;
        },
        loadLoadStatFailed: (state: LoadStatState, action: PayloadAction<Error>) => {
            state.response = undefined;
            state.isLoading = false;
            state.error = action.payload;
        },
        setFilter: (state: LoadStatState, action: PayloadAction<LoadStatFilter>) => {
            state.filter = action.payload;
        }

    }
});

export default loadStatSlice.reducer;

