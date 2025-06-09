import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {emptyLoadStat, LoadStatFilter, LoadStatState} from "./types";
import {LoadStatListResponse} from "../../ekb2-api";
import {Pagginator} from "../types";
import {GridSortModel} from "@mui/x-data-grid";

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
        },
        setPagginator: (state: LoadStatState, action: PayloadAction<Pagginator>) => {
            state.pagginator = action.payload;
        },
        setSorter: (state: LoadStatState, action: PayloadAction<GridSortModel>) => {
            state.sorter = action.payload;
        }

    }
});

export default loadStatSlice.reducer;

