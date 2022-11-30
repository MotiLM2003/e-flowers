"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var MultipleChoice = function (_a) {
    var list = _a.list, onChange = _a.onChange, _b = _a.isSingSelection, isSingSelection = _b === void 0 ? false : _b;
    var _c = react_1["default"].useState(list), state = _c[0], setState = _c[1];
    return (react_1["default"].createElement("div", { className: 'flex flex-wrap max-w-[340px] gap-2 p-2 justify-center' }, state.map(function (item, index) {
        return (react_1["default"].createElement("div", { key: item.name, className: "p-1 border rounded-xl text-xs\n\t\t\t\t\t\t " + (item.isActive
                ? 'text-primary border-primary'
                : 'text-gray-500 border-gray-400') + " \n\t\t\t\t\t\t  min-w-[40px] text-center cursor-pointer transition duration-500 ", onClick: function () {
                if (isSingSelection)
                    state.map(function (item) { return (item.isActive = false); });
                var newItem = state[index];
                console.log(newItem);
                newItem.isActive = !newItem.isActive || isSingSelection;
                state[index] = newItem;
                setState(__spreadArrays(state));
                onChange(newItem.name, newItem.isActive);
            } }, item.name));
    })));
};
exports["default"] = MultipleChoice;
