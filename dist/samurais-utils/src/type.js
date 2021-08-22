"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObject = exports.isString = exports.isNumber = exports.isFunction = exports.isArray = void 0;
function isArray(params) {
    return Array.isArray(params);
}
exports.isArray = isArray;
function isFunction(params) {
    return typeof params === "function";
}
exports.isFunction = isFunction;
function isNumber(params) {
    return typeof params === 'number';
}
exports.isNumber = isNumber;
function isString(params) {
    return typeof params === "string";
}
exports.isString = isString;
function isObject(params) {
    if (!params || isArray(params))
        return false;
}
exports.isObject = isObject;
//# sourceMappingURL=type.js.map