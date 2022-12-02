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
var image_1 = require("next/image");
var flowersShapeObjects_1 = require("helpers/flowersShapeObjects");
var getShape = function (startIngIndex) {
    if (startIngIndex === 0) {
        return flowersShapeObjects_1.leafShapes;
    }
    else if (startIngIndex === 4) {
        return flowersShapeObjects_1.leafArrangements;
    }
    else {
        return flowersShapeObjects_1.leafEdges;
    }
};
var FlowerShape = function (_a) {
    var startIngIndex = _a.startIngIndex, onShapeChange = _a.onShapeChange;
    var _b = react_1["default"].useState(getShape(startIngIndex)), currentShapes = _b[0], setShape = _b[1];
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("div", { className: 'grid grid-cols-3 row-gap grid-cols-reverse gap-1  max-w-[200px] gap-y-6 gap-x-6' }, currentShapes.map(function (shape, index) {
            return (react_1["default"].createElement("div", { key: index, className: "border  " + (shape.isActive ? 'border-primary border-2' : 'border-gray-400') + " p-[3px] rounded-xl cursor-pointer transition duration-300 hover:scale-[1.2]", onClick: function () {
                    var newItem = currentShapes[index];
                    newItem.isActive = !newItem.isActive;
                    currentShapes[index] = newItem;
                    setShape(__spreadArrays(currentShapes));
                    onShapeChange(newItem.name, newItem.isActive);
                } },
                react_1["default"].createElement(image_1["default"], { src: shape.image, objectFit: 'contain', width: 50, height: 50, alt: 'Map Image' })));
        }))));
};
exports["default"] = FlowerShape;
