import {handleResponse} from "./handlers/responseHandler";
import {handleError} from "./handlers/errorHandler";
import axios from 'axios';
import {Pagginator} from "../redux/types";
import {GridSortModel} from "@mui/x-data-grid";
import {FilmsRegFilter} from "../redux/filmsreg/types";

const baseApiUrl = process.env.REACT_APP_API_URL + "/api/v1";
const loadMenuUrl = baseApiUrl + "/filmsreg";


export async function filmsRegApi(
    stoken: string,
    filter: FilmsRegFilter,
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
        queryParams.push(['seld_from', filter.seldFrom]);
        queryParams.push(['seld_to', filter.seldTo]);
        queryParams.push(['holding', filter.holding]);
        queryParams.push(['org', filter.org]);
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
