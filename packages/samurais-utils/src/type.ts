
export function isArray<D = any>(params: any): params is Array<D> {
    return Array.isArray(params);
}

export function isUndefined(params: any): params is undefined {
    return typeof params === 'undefined';
}

export function isNull(params: any) {
    return !params && !isUndefined(params) && params === null
}

export function isEmpty(params: any) {
    if ((isArray(params) && params.length) || (isObject(params) && Object.keys(params).length) || (isString(params) && !!params)) return false;
    return true;
}

export function isFunction(params: any): params is Function {
    return typeof params === "function";
}

export function isNumber(params: any): params is number {
    return typeof params === 'number';
}

export function isString(params: any): params is string {
    return typeof params === "string";
}

export function isObject<K = any>(params: any): params is Record<string, K> {
    return (typeof params === 'object') && !isArray(params);
}