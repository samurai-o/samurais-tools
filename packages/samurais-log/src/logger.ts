import { isEmpty, isObject, isString } from 'samurais-utils';
import { ICatch } from "./interface";

export class Logger {
    static error(params: ICatch) {
        let _message: string = '{ type: "empty", message: "empty"}';
        if (isObject(params) && !isEmpty(params)) {
            _message = JSON.stringify(params);
        }
        throw new Error(_message);
    }
}