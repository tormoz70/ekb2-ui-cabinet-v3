import {loadStatSlice} from "./loadStatSlice";
import {loadLoadStatApi} from "../../api/loadStatApi";
import {LoadStatListResponse} from "../../ekb2-api";
import {AppDispatch} from "../store";
import {LoadStatFilter} from "./types";

export const loadLoadStat: any = (stoken: string, filter: LoadStatFilter) => async (dispatch: AppDispatch) => {
    try {
        dispatch(loadStatSlice.actions.loadLoadStatStart());
        const response: LoadStatListResponse = await loadLoadStatApi(stoken, filter);
        console.log("loadLoadStatApi-response: " + response);
        if(response) {
            console.log("response: ", response);
        }
        dispatch(loadStatSlice.actions.loadLoadStatSuccess(response));
    } catch (error) {
        debugger;
        dispatch(loadStatSlice.actions.loadLoadStatFailed(error));
    }
};


export const setLoadStatFilter: any = (filter: LoadStatFilter) => async (dispatch: AppDispatch) => {
    dispatch(loadStatSlice.actions.setFilter(filter));
};
