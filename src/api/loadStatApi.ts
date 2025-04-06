import {handleResponse} from "./handlers/responseHandler";
import {handleError} from "./handlers/errorHandler";
import axios from 'axios';
import {LoadStatFilterState} from "../redux/loadstat/types";

const baseApiUrl = process.env.REACT_APP_API_URL + "/api/v1";
const loadMenuUrl = baseApiUrl + "/loadstat/loadlog";


export async function loadLoadStatApi(
    stoken: string,
    filter: LoadStatFilterState
) {
    if(stoken) {
        const queryParams = [];
        queryParams.push(['page', ""+filter.page]);
        queryParams.push(['limit', ""+filter.limit]);
        queryParams.push(['force_org_id', "" + filter.forceOrgId]);
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
