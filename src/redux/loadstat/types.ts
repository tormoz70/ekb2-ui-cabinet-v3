import {LoadStatListResponse} from "../../ekb2-api";

export interface LoadStatState {
    response: LoadStatListResponse | undefined,
    error: Error | undefined,
    isLoading: boolean,
    isLoaded: boolean,
    filter: LoadStatFilter,
    pagginator: Pagginator,
    sorter: Sorter
}

export const emptyLoadStat: LoadStatState = {
    response: undefined,
    error: undefined,
    isLoading: false,
    isLoaded: false,
    filter: {
        regFrom: undefined,
        regTo: undefined
    },
    pagginator: {
        page: undefined,
        limit: undefined,
    },
    sorter: {
        fieldName: undefined,
        direction: "acs"
    }
};

export interface LoadStatFilter {
    regFrom: string | undefined;
    regTo: string  | undefined;
    orgId?: string | undefined;
    sessPrntOrgId?: string | undefined;
    sessOrgId?: string | undefined;
    packetName?: string | undefined;
    curPstate?: string | undefined;
    message?: string | undefined;
    ip?: string | undefined;
    loadMethod?: string | undefined;
    isTest?: string | undefined;

};

export interface Sorter {
    fieldName: string | undefined;
    direction: "acs" | "desc";
};

export interface Pagginator {
    page: number | undefined;
    limit: number | undefined;
};

