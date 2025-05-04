import {dataStatSlice} from "./dataStatSlice";
import {DataStatListResponse} from "../../ekb2-api";
import {AppDispatch} from "../store";
import {DataStatFilter} from "./types";
import {Pagginator, Sorter} from "../types";
import {dataStatApi} from "../../api/dataStatApi";

export const loadDataStat: any = (stoken: string, filter: DataStatFilter, pagginator: Pagginator, sorter: Sorter) => async (dispatch: AppDispatch) => {
    if(filter.showDateFrom === undefined || filter.showDateFrom === "") {
        return;
    }
    try {
        dispatch(dataStatSlice.actions.loadDataStatStart());
        const response: DataStatListResponse = await dataStatApi(stoken, filter, pagginator, sorter);
        console.log("loadLoadStatApi-response: " + response);
        if(response) {
            console.log("response: ", response);
        }
        dispatch(dataStatSlice.actions.loadDataStatSuccess(response));
    } catch (error) {
        debugger;
        dispatch(dataStatSlice.actions.loadDataStatFailed(error));
    }
};


export const setDataStatFilter: any = (filter: DataStatFilter) => async (dispatch: AppDispatch) => {
    dispatch(dataStatSlice.actions.setFilter(filter));
};

export const setDataStatPagginator: any = (pagginator: Pagginator) => async (dispatch: AppDispatch) => {
    dispatch(dataStatSlice.actions.setPagginator(pagginator));
};

export const setDataStatSorter: any = (sorter: Sorter) => async (dispatch: AppDispatch) => {
    dispatch(dataStatSlice.actions.setSorter(sorter));
};
