import { store } from "../redux/store";
import {handleResponse} from "./handlers/responseHandler";
import {handleError} from "./handlers/errorHandler";
import axios from 'axios';
import {AxiosError} from "axios/index";

const baseAuthUrl = process.env.REACT_APP_API_URL + "/auth/v1";
const baseApiUrl = process.env.REACT_APP_API_URL + "/api/v1";
const loginUrl = baseAuthUrl + "/login";
const currentUserUrl = baseApiUrl + "/user/current";
const loadMenuUrl = baseApiUrl + "/menu/main";
const appToken = process.env.REACT_APP_API_TOKEN;


export async function loginApi(userName: string, password: string) {
    const requestConfig = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const data = {
        username: userName,
        password: password,
        apptoken: appToken
    };
    return await axios.post(loginUrl, data, requestConfig)
        .then(handleResponse)
        .catch(handleError);
}

export async function currentApi(stoken: string) {
    const requestConfig = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': stoken
        }
    }
    return await axios.get(currentUserUrl, requestConfig)
        .then(handleResponse)
        .catch(handleError);
}

export async function loadUserMenuApi(onError?: (error: AxiosError) => void) {
    const userProfile = store.getState().userProfileState;

    if(userProfile.user.stoken) {
        const requestConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': userProfile.user.stoken
            }
        }
        return await axios.get(loadMenuUrl, requestConfig)
            .then(handleResponse)
            .catch(onError ?? handleError);
    }
}


// export function saveDummyObject(dummyObject) {
//     return fetch(baseUrl + (dummyObject.id || ""), {
//         // POST for create, PUT to update when id already exists.
//         method: dummyObject.id ? "PUT" : "POST",
//         headers: { "content-type": "application/json" },
//         body: JSON.stringify(dummyObject)
//     })
//         .then(handleResponse)
//         .catch(handleError);
// }
//
// export function deleteDummyObject(dummyObjectId) {
//     return fetch(baseUrl + dummyObjectId, { method: "DELETE" })
//         .then(handleResponse)
//         .catch(handleError);
// }
