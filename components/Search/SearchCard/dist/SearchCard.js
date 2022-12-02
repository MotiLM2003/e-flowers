"use strict";
exports.__esModule = true;
/* eslint-disable @next/next/no-img-element */
var react_1 = require("react");
var globalObjects_1 = require("helpers/globalObjects");
var PageLinesIcon_1 = require("components/Icons/PageLinesIcon");
var FlaskIcon_1 = require("components/Icons/FlaskIcon");
var PaintBrush_1 = require("components/Icons/PaintBrush");
var getColors = function (color) {
    var _a;
    var newColor = (_a = globalObjects_1.globalColors === null || globalObjects_1.globalColors === void 0 ? void 0 : globalObjects_1.globalColors.find(function (x) { return x.name === color; })) === null || _a === void 0 ? void 0 : _a.color;
    if (newColor === undefined)
        newColor = '#fff';
    return newColor;
};
var SearchCard = function (_a) {
    var item = _a.item;
    react_1.useEffect(function () { }, []);
    return (react_1["default"].createElement("div", { className: 'flex flex-col   w-full sm:w-[20rem]  px-2 py-5 my-4\r\n          bg-white rounded-xl transform transition-all hover:-translate-y-2 shadow hover:shadow-xl\r\n          duration-300 ' },
        react_1["default"].createElement("img", { src: "https://storage.googleapis.com/ef-prod/plants-images/thumbnails/" + item.image, className: 'h-40 object-cover rounded-xl w-full', alt: '' }),
        react_1["default"].createElement("div", { className: 'p-2 flex flex-col justify-center gap-2' },
            react_1["default"].createElement("div", { className: 'flex items-center gap-4' },
                react_1["default"].createElement(PageLinesIcon_1["default"], { size: 20, color: '#0f4871' }),
                react_1["default"].createElement("h2", { className: 'font-bold text-lg text-primary' }, item.heb_name)),
            react_1["default"].createElement("div", { className: 'flex items-center gap-4' },
                react_1["default"].createElement(FlaskIcon_1["default"], { size: 20, color: '#0f4871' }),
                react_1["default"].createElement("p", { className: 'text-sm  text-secondary font-bold' },
                    "\u05E9\u05DD \u05DE\u05D3\u05E2\u05D9:",
                    react_1["default"].createElement("span", { className: '' },
                        "\u00A0",
                        item.science_name))),
            react_1["default"].createElement("div", { className: 'flex items-center gap-4' },
                react_1["default"].createElement(PaintBrush_1["default"], { size: 20, color: '#0f4871' }),
                react_1["default"].createElement("p", { className: 'text-sm  text-secondary font-bold flex items-center gap-3' },
                    "\u05E6\u05D1\u05E2\u05D9\u05DD \u05D1\u05D8\u05D1\u05E2:",
                    react_1["default"].createElement("div", { className: 'flex gap-1 ' }, item.colors.map(function (color) {
                        var bgColor = getColors(color);
                        return (react_1["default"].createElement("div", { key: color, className: "rounded-full w-[14px] h-[14px] border border-gray-700 '", style: { backgroundColor: "" + bgColor } }, "\u00A0"));
                    }))))),
        react_1["default"].createElement("div", { className: 'mt-2 self-center' },
            react_1["default"].createElement("a", { role: 'button', href: '#', className: 'text-white transform transition-all duration-300  bg-gradient-to-t from-[#FFA500] to-[#FFD700] hover:from-[#FFD700] hover:to-[#FFA500] px-3 py-1 rounded-md ' }, "\u05D1\u05E7\u05E8 \u05D1\u05D3\u05E3 \u05D4\u05E6\u05DE\u05D7"))));
};
exports["default"] = SearchCard;
