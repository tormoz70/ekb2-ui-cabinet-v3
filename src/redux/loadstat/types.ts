import {LoadStatListResponse} from "../../ekb2-api";
import {Pagginator} from "../types";
import {GridSortModel} from '@mui/x-data-grid';
import {DateUtils} from "../../utils/DateUtils";

export interface LoadStatState {
    response: LoadStatListResponse | undefined,
    error: Error | undefined,
    isLoading: boolean,
    isLoaded: boolean,
    filter: LoadStatFilter,
    pagginator: Pagginator,
    sorter: GridSortModel
}

export interface LoadStatFilter {
    regFrom: string;
    regTo?: string | undefined;
    orgId: string;
    sessPrntOrgId: string;
    sessOrgId: string;
    packetName: string;
    curPstate: string;
    message: string;
    ip: string;
    loadMethod: string;
    isTest: string;
};

const defaultFilter = {
    regFrom: DateUtils.toString(DateUtils.subtractDays(new Date(), 7)),
    regTo: DateUtils.toString(new Date()),
    orgId: '',
    sessPrntOrgId: '',
    sessOrgId: '',
    packetName: '',
    curPstate: '',
    message: '',
    ip: '',
    loadMethod: '',
    isTest: '',
} as LoadStatFilter;

export const emptyLoadStat: LoadStatState = {
    response: undefined,
    error: undefined,
    isLoading: false,
    isLoaded: false,
    filter: defaultFilter,
    pagginator: {
        page: 0,
        pageSize: 50,
    },
    sorter: [
        {
            field: 'id',
            sort: 'desc',
        },
    ]
};
