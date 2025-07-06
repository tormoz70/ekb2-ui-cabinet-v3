import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {emptyFilmsReg, FilmsRegFilter, FilmsRegState} from "./types";
import {FilmsRegListResponse} from "../../ekb2-api";
import {Pagginator} from "../types";
import {GridSortModel} from "@mui/x-data-grid";

export const filmsRegSlice = createSlice({
    name: "filmsRegState",
    initialState: emptyFilmsReg,
    reducers: {
        loadFilmsRegStart(state: FilmsRegState) {
            state.isLoading = true;
            state.isLoaded = false;
        },
        loadFilmsRegSuccess: (state: FilmsRegState, action: PayloadAction<FilmsRegListResponse>) => {
            state.response = action.payload;
            state.isLoading = false;
            state.isLoaded = true;
            state.error = undefined;
        },
        loadFilmsRegFailed: (state: FilmsRegState, action: PayloadAction<Error>) => {
            state.response = undefined;
            state.isLoading = false;
            state.error = action.payload;
        },
        setFilter: (state: FilmsRegState, action: PayloadAction<FilmsRegFilter>) => {
            state.filter = action.payload;
        },
        setPagginator: (state: FilmsRegState, action: PayloadAction<Pagginator>) => {
            state.pagginator = action.payload;
        },
        setSorter: (state: FilmsRegState, action: PayloadAction<GridSortModel>) => {
            state.sorter = action.payload;
        }

    }
});

export default filmsRegSlice.reducer;

