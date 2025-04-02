import {loadLoadStatFailed, loadLoadStatStart, loadLoadStatSuccess} from "./loadStatSlice";
import {loadLoadStatApi} from "../../api/loadStatApi";
import {LoadStatListResponse} from "../../ekb2-api";

export const loadLoadStat: any = (page: number,
                                  limit: number) => async (dispatch: any) => {
    try {
        dispatch(loadLoadStatStart());
        const response: LoadStatListResponse = await loadLoadStatApi(page, limit);
        console.log("loadLoadStatApi-response: " + response);
        if(response) {
            console.log("response: ", response);
        }
        dispatch(loadLoadStatSuccess(response));
    } catch (error) {
        debugger;
        dispatch(loadLoadStatFailed(error));
    }
};

