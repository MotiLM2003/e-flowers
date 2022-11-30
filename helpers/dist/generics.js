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
    console.log(state);
    var searchResults = {};
    for (var item in state) {
        var currentITem = item;
        if ((currentITem === null || currentITem === void 0 ? void 0 : currentITem.length) && currentITem.length > 0) {
            searchResults = __assign(__assign({}, searchResults), (_a = {}, _a[item] = currentITem, _a));
        }
    }
    console.log('results', searchResults);
    return searchResults;
};
