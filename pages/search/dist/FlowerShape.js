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
// Images
var leaf_arrangements_1_png_1 = require("../../images/leafs/leaf_arrangements_1.png");
var leaf_arrangements_2_png_1 = require("../../images/leafs/leaf_arrangements_2.png");
var leaf_arrangements_3_png_1 = require("../../images/leafs/leaf_arrangements_3.png");
var leaf_arrangements_4_png_1 = require("../../images/leafs/leaf_arrangements_4.png");
var leaf_shape_1_png_1 = require("../../images/leafs/leaf_shape_1.png");
var leaf_shape_2_png_1 = require("../../images/leafs/leaf_shape_2.png");
var leaf_shape_3_png_1 = require("../../images/leafs/leaf_shape_3.png");
var leaf_shape_4_png_1 = require("../../images/leafs/leaf_shape_4.png");
var leaf_shape_5_png_1 = require("../../images/leafs/leaf_shape_5.png");
var leaf_shape_6_png_1 = require("../../images/leafs/leaf_shape_6.png");
var leaf_shape_7_png_1 = require("../../images/leafs/leaf_shape_7.png");
var leaf_shape_8_png_1 = require("../../images/leafs/leaf_shape_8.png");
var leaf_shape_9_png_1 = require("../../images/leafs/leaf_shape_9.png");
var leaf_shape_10_png_1 = require("../../images/leafs/leaf_shape_10.png");
var leaf_edges_1_png_1 = require("../../images/leafs/leaf_edges_1.png");
var leaf_edges_2_png_1 = require("../../images/leafs/leaf_edges_2.png");
var leaf_edges_3_png_1 = require("../../images/leafs/leaf_edges_3.png");
var shapes = [
    { image: leaf_shape_1_png_1["default"], name: 'גזור', isActive: false },
    { image: leaf_shape_2_png_1["default"], name: 'גליל', isActive: false },
    { image: leaf_shape_3_png_1["default"], name: 'דמוי לב', isActive: false },
    { image: leaf_shape_4_png_1["default"], name: 'מאוצבע', isActive: false },
    { image: leaf_shape_5_png_1["default"], name: 'מחולק לאונות', isActive: false },
    { image: leaf_shape_6_png_1["default"], name: 'מחטני', isActive: false },
    { image: leaf_shape_7_png_1["default"], name: 'מנוצה פעמיים', isActive: false },
    { image: leaf_shape_8_png_1["default"], name: 'מנוצה', isActive: false },
    { image: leaf_shape_9_png_1["default"], name: 'סרגלני', isActive: false },
    { image: leaf_shape_10_png_1["default"], name: 'קשקשי', isActive: false },
];
var shape2 = [
    { image: leaf_arrangements_1_png_1["default"], name: 'דורים', isActive: false },
    { image: leaf_arrangements_2_png_1["default"], name: 'מסורגים', isActive: false },
    { image: leaf_arrangements_3_png_1["default"], name: 'נגדיים', isActive: false },
    { image: leaf_arrangements_4_png_1["default"], name: 'שושנת עלים', isActive: false },
];
var shape3 = [
    { image: leaf_edges_1_png_1["default"], name: 'שפת עלה מופרצת', isActive: false },
    { image: leaf_edges_2_png_1["default"], name: 'שפת עלה משוננת', isActive: false },
    { image: leaf_edges_3_png_1["default"], name: 'שפת עלה תמימה', isActive: false },
];
var getShape = function (startIngIndex) {
    if (startIngIndex === 0) {
        return shapes;
    }
    else if (startIngIndex === 4) {
        return shape2;
    }
    else {
        return shape3;
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
