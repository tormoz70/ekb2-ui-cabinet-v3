import {handleResponse} from "./handlers/responseHandler";
import {handleError} from "./handlers/errorHandler";
import axios from 'axios';
import {LoadStatFilter} from "../redux/loadstat/types";
import {Pagginator, Sorter} from "../redux/types";

const baseApiUrl = process.env.REACT_APP_API_URL + "/api/v1";
const loadMenuUrl = baseApiUrl + "/loadstat/loadlog";


export async function loadLoadStatApi(
    stoken: string,
    filter: LoadStatFilter,
    pagginator: Pagginator,
    sorter: Sorter
) {
    if(stoken) {
        const sorterJson = JSON.stringify([sorter]);
        const queryParams = [];
        queryParams.push(['page', ""+pagginator.page]);
        queryParams.push(['limit', ""+pagginator.limit]);
        queryParams.push(['reg_from', filter.regFrom]);
        queryParams.push(['reg_to', filter.regTo]);
        if(filter.orgId) queryParams.push(['org_id', filter.orgId]);
        if(filter.sessPrntOrgId) queryParams.push(['sess_prnt_org_id', filter.sessPrntOrgId]);
        if(filter.sessOrgId) queryParams.push(['sess_org_id', filter.sessOrgId]);
        if(filter.packetName) queryParams.push(['packet_name', filter.packetName]);
        if(filter.ip) queryParams.push(['ip', filter.ip]);
        if(filter.curPstate) queryParams.push(['cur_pstate', filter.curPstate]);
        if(filter.message) queryParams.push(['message', filter.message]);
        if(filter.loadMethod) queryParams.push(['load_method', filter.loadMethod]);
        if(filter.isTest) queryParams.push(['test', filter.isTest]);
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
