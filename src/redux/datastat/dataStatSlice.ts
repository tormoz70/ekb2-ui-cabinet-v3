import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {emptyDataStat, DataStatFilter, DataStatState} from "./types";
import {DataStatListResponse} from "../../ekb2-api";
import {Pagginator} from "../types";
import {GridSortModel} from "@mui/x-data-grid";

export const dataStatSlice = createSlice({
    name: "dataStatState",
    initialState: emptyDataStat,
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
        setSorter: (state: DataStatState, action: PayloadAction<GridSortModel>) => {
            state.sorter = action.payload;
        }

    }
});

export default dataStatSlice.reducer;

