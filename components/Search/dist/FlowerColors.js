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
var FlowerColors = function (_a) {
    var onColorChange = _a.onColorChange;
    var _b = react_1["default"].useState([
        { id: 1, color: "#008000", name: "ירוק", isActive: true },
        { id: 2, color: "#660022", name: "בורדו", isActive: false },
        { id: 3, color: "##ffb3cc", name: "ורוד", isActive: false },
        { id: 4, color: "#cce6ff", name: "תכלת", isActive: false },
        { id: 5, color: "#f2f2f2", name: "לבן", isActive: false },
        { id: 6, color: "#9900cc", name: "סגול", isActive: false },
        { id: 7, color: "#c20a38", name: "אדום", isActive: false },
        { id: 8, color: "#fbd9b6", name: "קרם", isActive: false },
        { id: 9, color: "#cccc00", name: "צהוב", isActive: false },
        { id: 10, color: "#664400", name: "חום", isActive: false },
        { id: 11, color: "#333333", name: "שחור", isActive: false },
        { id: 12, color: "#c2660a", name: "כתום", isActive: false },
    ]), colors = _b[0], setColors = _b[1];
    return (react_1["default"].createElement("div", { className: "" },
        react_1["default"].createElement("div", { className: "grid grid-cols-4 row-gap grid-cols-reverse gap-1  max-w-[200px] gap-y-2 gap-x-4" }, colors.map(function (item, index) {
            return (react_1["default"].createElement("div", { key: index, className: "flex-1 text-1  w-[30px] h-[30px] rounded border border-gray-300 " + (item.isActive
                    ? "border-2 border-orange-500 shadow"
                    : "border-gray-300") + " cursor-pointer hover:scale-[1.1] transition duration-75", style: { background: item.color }, onClick: function () {
                    var newItem = colors[index];
                    newItem.isActive = !newItem.isActive;
                    colors[index] = newItem;
                    setColors(__spreadArrays(colors));
                    onColorChange(newItem.name, newItem.isActive);
                } }, "\u00A0"));
        }))));
};
exports["default"] = FlowerColors;
