import { isEmpty, isObject, isString } from 'samurais-utils';
import { ICatch, IMessage } from "./interface";


const tagLevelColor = new Map([
    ['success', '#03913C'],
    ['env', '#1A83EC'],
    ['info', '#06A598'],
    ['error', '#E40662']
]);
export type LOGTYPE = "success" | "info" | "error" | 'env';

export class Logger {

    private static log(level: LOGTYPE, label: string, value: unknown) {
        if (!window || !window.console) return;
        console.log(
            `%c${label}%c${value}`,
            "background: #6f5a5a; color: #fff;border-top-left-radius: 2px; border-bottom-left-radius: 2px; padding: 2px 10px;",
            `background: ${tagLevelColor.get(
                level,
            )};color: #fff;border-top-right-radius: 2px; border-bottom-right-radius: 2px;padding: 2px 10px;`,
        );
    }

    static error(params: ICatch) {
        let _message: string = '{ type: "empty", message: "empty"}';
        if (isObject(params) && !isEmpty(params)) {
            _message = JSON.stringify(params);
        }
        Logger.log("error", params.type, _message)
        throw new Error(_message);
    }


    static info(params: IMessage) {
        let _message: string = '{ type: "empty", message: "empty"}';
        if (isObject(params) && !isEmpty(params)) {
            _message = JSON.stringify(params);
        }
        Logger.log("info", params.type, _message)
    }
}

