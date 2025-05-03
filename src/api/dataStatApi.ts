import {handleResponse} from "./handlers/responseHandler";
import {handleError} from "./handlers/errorHandler";
import axios from 'axios';
import {Pagginator, Sorter} from "../redux/types";
import {DataStatFilter} from "../redux/datastat/types";

const baseApiUrl = process.env.REACT_APP_API_URL + "/api/v1";
const loadMenuUrl = baseApiUrl + "/datastat";


export async function dataStatApi(
    stoken: string,
    filter: DataStatFilter,
    pagginator: Pagginator,
    sorter: Sorter
) {
    if(stoken) {
        const sorterJson = JSON.stringify([sorter]);
        const queryParams = [];
        queryParams.push(['page', ""+pagginator.page]);
        queryParams.push(['limit', ""+pagginator.limit]);
        queryParams.push(['show_date_from', filter.showDateFrom]);
        queryParams.push(['show_date_to', filter.showDateTo]);
        queryParams.push(['org_id', filter.orgId]);
        if(filter.sroomId) queryParams.push(['sroom_id', filter.sroomId]);
        if(filter.film) queryParams.push(['film', filter.film]);
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
