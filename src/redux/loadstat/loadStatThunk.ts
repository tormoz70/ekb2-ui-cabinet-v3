import {loadStatSlice} from "./loadStatSlice";
import {loadLoadStatApi} from "../../api/loadStatApi";
import {LoadStatListResponse} from "../../ekb2-api";
import {AppDispatch} from "../store";

export const loadLoadStat: any = (page: number,
                                  limit: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(loadStatSlice.actions.loadLoadStatStart());
        const response: LoadStatListResponse = await loadLoadStatApi(page, limit);
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

