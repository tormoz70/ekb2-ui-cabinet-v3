import {DataStatListResponse} from "../../ekb2-api";
import {Pagginator} from "../types";
import {GridSortModel} from "@mui/x-data-grid";
import {DateUtils} from "../../utils/DateUtils";

export interface DataStatState {
    response: DataStatListResponse | undefined,
    error: Error | undefined,
    isLoading: boolean,
    isLoaded: boolean,
    filter: DataStatFilter,
    pagginator: Pagginator,
    sorter: GridSortModel
}

export const emptyDataStat: DataStatState = {
    response: undefined,
    error: undefined,
    isLoading: false,
    isLoaded: false,
    filter: {
        showDateFrom: DateUtils.toString(DateUtils.subtractDays(new Date(), 7)),
        showDateTo: DateUtils.toString(DateUtils.addDays(new Date(), 7)),
    } as DataStatFilter,
    pagginator: {
        page: 0,
        pageSize: 50,
    },
    sorter: [{
        field: "id",
        direction: "desc"
    }]
};

export interface DataStatFilter {
    showDateFrom: string;
    showDateTo: string;
    orgId?: string;
    selectedSRoomId?: number;
    selectedPuId?: number;
};

