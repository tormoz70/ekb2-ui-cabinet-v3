import {filmsRegSlice} from "./filmsRegSlice";
import {FilmsRegListResponse} from "../../ekb2-api";
import {AppDispatch} from "../store";
import {FilmsRegFilter} from "./types";
import {Pagginator} from "../types";
import {GridSortModel} from "@mui/x-data-grid";
import {filmsRegApi} from "../../api/filmsRegApi.ts";

export const loadFilmsReg: any = (stoken: string, filter: FilmsRegFilter, pagginator: Pagginator, sorter: GridSortModel) => async (dispatch: AppDispatch) => {
    if(filter.seldFrom === undefined || filter.seldFrom === "") {
        return;
    }
    try {
        dispatch(filmsRegSlice.actions.loadFilmsRegStart());
        const response: FilmsRegListResponse = await filmsRegApi(stoken, filter, pagginator, sorter);
        if(response) {
            dispatch(filmsRegSlice.actions.loadFilmsRegSuccess(response));
        }

    } catch (error) {
        //debugger;
        dispatch(filmsRegSlice.actions.loadFilmsRegFailed(error));
    }
};


export const setFilmsRegFilter: any = (filter: FilmsRegFilter) => async (dispatch: AppDispatch) => {
    dispatch(filmsRegSlice.actions.setFilter(filter));
};

export const setFilmsRegPagginator: any = (pagginator: Pagginator) => async (dispatch: AppDispatch) => {
    dispatch(filmsRegSlice.actions.setPagginator(pagginator));
};

export const setFilmsRegSorter: any = (sorter: GridSortModel) => async (dispatch: AppDispatch) => {
    dispatch(filmsRegSlice.actions.setSorter(sorter));
};
