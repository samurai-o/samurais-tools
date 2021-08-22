
export function isArray<D = any>(params: any): params is Array<D> {
    return Array.isArray(params);
}

export function isUndefined(params: any): params is undefined {
    return typeof params === 'undefined';
}

export function isNull(params: any): params is null {
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

export function isSymbol(params: any): params is symbol {
    return typeof params === 'symbol';
}

export function isBoolean(params: any): params is boolean {
    return typeof params === 'boolean';
}

export function isBigint(params: any): params is bigint {
    return typeof params === 'bigint';
}