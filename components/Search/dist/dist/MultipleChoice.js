"use strict";
exports.__esModule = true;
var react_1 = require("react");
var MultipleChoice = function (_a) {
    var list = _a.list;
    return (react_1["default"].createElement("div", { className: 'flex flex-wrap max-w-[340px] gap-2 p-2 justify-center' }, list.map(function (item) {
        return (react_1["default"].createElement("div", { key: item.name, className: ' p-1 border border-gray-400 rounded-xl text-gray-500 text-xs min-w-[40px] text-center' }, item.name));
    })));
};
exports["default"] = MultipleChoice;
