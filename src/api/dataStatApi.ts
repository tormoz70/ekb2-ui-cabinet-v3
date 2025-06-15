import {handleResponse} from "./handlers/responseHandler";
import {handleError} from "./handlers/errorHandler";
import axios from 'axios';
import {Pagginator} from "../redux/types";
import {DataStatFilter} from "../redux/datastat/types";
import {GridSortModel} from "@mui/x-data-grid";
import {StringUtils} from "../utils/StringUtils";

const baseApiUrl = process.env.REACT_APP_API_URL + "/api/v1";
const loadMenuUrl = baseApiUrl + "/datastat";


export async function dataStatApi(
    stoken: string,
    filter: DataStatFilter,
    pagginator: Pagginator,
    sorter: GridSortModel
) {
    if(stoken) {
        const sorterJson = JSON.stringify([{
            fieldName: sorter[0]?.field,
            direction: sorter[0]?.sort
        }]);
        const queryParams = [];
        queryParams.push(['page', ""+pagginator.page]);
        queryParams.push(['limit', ""+pagginator.pageSize]);
        queryParams.push(['show_date_from', filter.showDateFrom]);
        queryParams.push(['show_date_to', filter.showDateTo]);
        queryParams.push(['org_id', StringUtils.isEmpty(filter.orgId) ? "0" : filter.orgId]);
        if(filter.selectedSRoomId) queryParams.push(['sroom_id', filter.selectedSRoomId]);
        if(filter.selectedPuId) queryParams.push(['selected_pu_id', filter.selectedPuId]);
        if(sorter) queryParams.push(['sort', sorterJson]);
        const requestConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': stoken
            },
            params: new URLSearchParams(queryParams)
        };
        return await axios.get(loadMenuUrl, requestConfig)
            .then(handleResponse)
            .catch(handleError);
    }
}
