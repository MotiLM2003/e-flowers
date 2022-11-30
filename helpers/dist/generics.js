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
    var _a;
    var _b;
    console.log(state);
    var searchResults = {};
    for (var item in state) {
        if (((_b = state[item]) === null || _b === void 0 ? void 0 : _b.length) && state[item].length > 0) {
            searchResults = __assign(__assign({}, searchResults), (_a = {}, _a[item] = state[item], _a));
        }
    }
    console.log('results', searchResults);
    return searchResults;
};
