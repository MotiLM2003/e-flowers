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
var globalObjects_1 = require("helpers/globalObjects");
var FlowerColors = function (_a) {
    var onColorChange = _a.onColorChange;
    var _b = react_1["default"].useState(globalObjects_1.globalColors), colors = _b[0], setColors = _b[1];
    react_1.useEffect(function () { }, [colors]);
    return (react_1["default"].createElement("div", { className: '' },
        react_1["default"].createElement("div", { className: 'grid grid-cols-4 row-gap grid-cols-reverse gap-1  max-w-[200px] gap-y-2 gap-x-4' }, colors &&
            colors.map(function (item, index) {
                return (react_1["default"].createElement("div", { key: index, className: "flex-1 text-1  w-[30px] h-[30px] rounded border border-gray-300 " + (item.isActive
                        ? 'border-2 border-orange-500 shadow'
                        : 'border-gray-300') + " cursor-pointer hover:scale-[1.1] transition duration-75", style: { background: item.color }, onClick: function () {
                        var newItem = colors[index];
                        newItem.isActive = !newItem.isActive;
                        colors[index] = newItem;
                        setColors(__spreadArrays(colors));
                        onColorChange(newItem.name, newItem.isActive);
                    } }, "\u00A0"));
            }))));
};
exports["default"] = FlowerColors;
