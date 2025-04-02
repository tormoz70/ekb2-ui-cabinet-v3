import {AxiosResponse} from "axios";
import {extractAnError} from "./errorHandler";

export async function handleResponse(response: AxiosResponse) {
    if (response.status === 200) {
        return response.data;
    } else {
        const error = extractAnError(response) ?? response.statusText;
        throw new Error(error);
    }
}

