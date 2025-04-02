import {AxiosError, AxiosResponse} from "axios";
import {EkbApiError} from "../../model/EkbApiError";

export const extractAnError = (response: AxiosResponse | undefined): string | undefined => {
    if (response && response.data) {
        const { errorMessage } = response.data;
        return errorMessage;
    } else {
        return undefined;
    }
}

const extractError = (error: Error): string => {
    if(error instanceof AxiosError) {
        const axiosError = error as AxiosError;
        return extractAnError(axiosError.response) ?? axiosError.message;
    } else {
        return error.message;
    }
}

export function handleError(error: AxiosError) {
    throw new EkbApiError("Ошибка при обращении к API сервера: " + extractError(error));
}

