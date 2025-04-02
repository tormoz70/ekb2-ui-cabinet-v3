import {EkbError} from "./EkbError";

export class EkbLoginError extends EkbError {
    constructor(msg: string) {
        super(msg);
        Object.setPrototypeOf(this, EkbLoginError.prototype);
    }
}