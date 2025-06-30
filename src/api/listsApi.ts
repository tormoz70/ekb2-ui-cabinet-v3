import {handleResponse} from "./handlers/responseHandler";
import {handleError} from "./handlers/errorHandler";
import axios from 'axios';
import {ListItemDto} from "../ekb2-api";

const baseApiUrl = process.env.REACT_APP_API_URL + "/api/v1";
const loadMenuUrl = baseApiUrl + "/list";


export async function listsApi(
    stoken: string,
    listName: string,
    filter: string,
): Promise<ListItemDto> {
    if(stoken) {
        const queryParams = [];
        queryParams.push(['filter', filter]);
        const requestConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': stoken
            },
            params: new URLSearchParams(queryParams)
        };
        return await axios.get(loadMenuUrl + "/" + listName, requestConfig)
            .then(handleResponse)
            .catch(handleError);
    }
}
