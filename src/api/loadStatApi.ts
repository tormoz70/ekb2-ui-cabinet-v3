import {handleResponse} from "./handlers/responseHandler";
import {handleError} from "./handlers/errorHandler";
import axios from 'axios';
import {store} from "../redux/store";

const baseApiUrl = process.env.REACT_APP_API_URL + "/api/v1";
const loadMenuUrl = baseApiUrl + "/loadstat/loadlog";


export async function loadLoadStatApi(
    page: number,
    limit: number,
    forceOrgId?: bigint | undefined,
    regFrom?: string | undefined,
    regTo?: string | undefined,
    orgId?: string | undefined,
    sessPrntOrgId?: string | undefined,
    sessOrgId?: string | undefined,
    packetName?: string | undefined,
    curPstate?: string | undefined,
    message?: string | undefined,
    ip?: string | undefined,
    loadMethod?: string | undefined,
    isTest?: string | undefined
) {
    const userProfile = store.getState().userProfileState;

    if(userProfile.user.stoken) {
        const queryParams = [];
        queryParams.push(['page', ""+page]);
        queryParams.push(['limit', ""+limit]);
        if(forceOrgId) queryParams.push(['force_org_id', ""+forceOrgId]);
        if(regFrom) queryParams.push(['reg_from', regFrom]);
        if(regTo) queryParams.push(['reg_to', regTo]);
        if(orgId) queryParams.push(['org_id', orgId]);
        if(sessPrntOrgId) queryParams.push(['sess_prnt_org_id', sessPrntOrgId]);
        if(sessOrgId) queryParams.push(['sess_org_id', sessOrgId]);
        if(packetName) queryParams.push(['packet_name', packetName]);
        if(ip) queryParams.push(['ip', ip]);
        if(curPstate) queryParams.push(['cur_pstate', curPstate]);
        if(message) queryParams.push(['message', message]);
        if(loadMethod) queryParams.push(['load_method', loadMethod]);
        if(isTest) queryParams.push(['test', isTest]);
        const requestConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': userProfile.user.stoken
            },
            params: new URLSearchParams(queryParams)
        };
        return await axios.get(loadMenuUrl, requestConfig)
            .then(handleResponse)
            .catch(handleError);
    }
}
