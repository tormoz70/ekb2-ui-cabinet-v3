import {handleResponse} from "./handlers/responseHandler";
import {handleError} from "./handlers/errorHandler";
import axios from 'axios';
import {Pagginator, Sorter} from "../redux/types";
import {DataStatFilter} from "../redux/datastat/types";

const baseApiUrl = process.env.REACT_APP_API_URL + "/api/v1";
const loadMenuUrl = baseApiUrl + "/loo/srooms";


export async function sroomsApi(
    stoken: string,
    orgId: number,
    filter: string,
) {
    if(stoken) {
        const queryParams = [];
        queryParams.push(['org_id', orgId]);
        queryParams.push(['filter', filter]);
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
