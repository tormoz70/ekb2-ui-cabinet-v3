import {handleResponse} from "./handlers/responseHandler";
import {handleError} from "./handlers/errorHandler";
import axios from 'axios';
import {ListItemDto, ListResponse} from "../ekb2-api";

const baseApiUrl = process.env.REACT_APP_API_URL + "/api/v1";
const loadUrl = baseApiUrl + "/loo/films";


export async function filmsApi(
    stoken: string,
    filter: string,
    id: number
): Promise<ListResponse> {
    if(stoken) {
        const queryParams = [];
        if(id && id > 0) {
            queryParams.push(['id', id]);
        } else {
            queryParams.push(['filter', filter]);
        }
        const requestConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': stoken
            },
            params: new URLSearchParams(queryParams)
        };
        return await axios.get(loadUrl, requestConfig)
            .then(handleResponse)
            .catch(handleError);
    }
}
