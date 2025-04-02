import {LoadStatListResponse} from "../../ekb2-api";

export interface LoadStatState {
    response: LoadStatListResponse | undefined,
    error: Error | undefined,
    isLoading: boolean,
    isLoaded: boolean
}

export const emptyLoadStat: LoadStatState = {
    response: undefined,
    error: undefined,
    isLoading: false,
    isLoaded: false
}
