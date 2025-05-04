import {DataStatListResponse} from "../../ekb2-api";
import {Pagginator, Sorter} from "../types";

export interface DataStatState {
    response: DataStatListResponse | undefined,
    error: Error | undefined,
    isLoading: boolean,
    isLoaded: boolean,
    filter: DataStatFilter,
    pagginator: Pagginator,
    sorter: Sorter
}

export const emptyDataStat: DataStatState = {
    response: undefined,
    error: undefined,
    isLoading: false,
    isLoaded: false,
    filter: {
        showDateFrom: '',
        showDateTo: ''
    } as DataStatFilter,
    pagginator: {
        page: undefined,
        limit: undefined,
    },
    sorter: {
        fieldName: undefined,
        direction: "acs"
    }
};

export interface DataStatFilter {
    showDateFrom: string;
    showDateTo: string;
    orgId?: string;
    sroomId?: number;
    film?: string;
};

