import {EkbError} from "./EkbError";

export class EkbApiError extends EkbError {
    constructor(msg: string) {
        super(msg);
        Object.setPrototypeOf(this, EkbApiError.prototype);
    }
}