import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {emptyLoadStat, DataStatFilter, DataStatState} from "./types";
import {DataStatListResponse} from "../../ekb2-api";
import {Pagginator, Sorter} from "../types";

export const dataStatSlice = createSlice({
    name: "loadStatState",
    initialState: emptyLoadStat,
    reducers: {
        loadDataStatStart(state: DataStatState) {
            state.isLoading = true;
            state.isLoaded = false;
        },
        loadDataStatSuccess: (state: DataStatState, action: PayloadAction<DataStatListResponse>) => {
            state.response = action.payload;
            state.isLoading = false;
            state.isLoaded = true;
            state.error = undefined;
        },
        loadDataStatFailed: (state: DataStatState, action: PayloadAction<Error>) => {
            state.response = undefined;
            state.isLoading = false;
            state.error = action.payload;
        },
        setFilter: (state: DataStatState, action: PayloadAction<DataStatFilter>) => {
            state.filter = action.payload;
        },
        setPagginator: (state: DataStatState, action: PayloadAction<Pagginator>) => {
            state.pagginator = action.payload;
        },
        setSorter: (state: DataStatState, action: PayloadAction<Sorter>) => {
            state.sorter = action.payload;
        }

    }
});

export default dataStatSlice.reducer;

