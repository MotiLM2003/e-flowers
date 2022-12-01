"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.removeEmptyValues = void 0;
exports.removeEmptyValues = function (state) {
    console.log(state);
    var searchResults = {};
    var item;
    Object.entries(state).forEach(function (_a) {
        var _b;
        var key = _a[0], value = _a[1];
        if (typeof value === 'object') {
            if (value.length > 0) {
                searchResults = __assign(__assign({}, searchResults), (_b = {}, _b[key] = value, _b));
            }
        }
    });
    return searchResults;
};
