
export class EkbError extends Error {
    constructor(msg: string) {
        super(msg);
        Object.setPrototypeOf(this, EkbError.prototype);
    }
}