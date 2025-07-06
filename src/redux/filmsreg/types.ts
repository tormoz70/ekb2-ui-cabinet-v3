import {FilmsRegListResponse} from "../../ekb2-api";
import {Pagginator} from "../types";
import {GridSortModel} from "@mui/x-data-grid";
import {DateUtils} from "../../utils/DateUtils";

export interface FilmsRegState {
    response: FilmsRegListResponse | undefined,
    error: Error | undefined,
    isLoading: boolean,
    isLoaded: boolean,
    filter: FilmsRegFilter,
    pagginator: Pagginator,
    sorter: GridSortModel
}

export const emptyFilmsReg: FilmsRegState = {
    response: undefined,
    error: undefined,
    isLoading: false,
    isLoaded: false,
    filter: {
        showDateFrom: DateUtils.toString(DateUtils.subtractDays(new Date(), 7)),
        showDateTo: DateUtils.toString(DateUtils.addDays(new Date(), 7)),
    } as FilmsRegFilter,
    pagginator: {
        page: 0,
        pageSize: 50,
    },
    sorter: [{
        field: "id",
        direction: "desc"
    }]
};

export interface FilmsRegFilter {
    seldFrom: string;
    seldTo: string;
    filmName?: string;
    holding?: number;
    org?: number;
    puVerified?: boolean
};

