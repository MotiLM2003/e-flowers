"use strict";
exports.__esModule = true;
/* eslint-disable @next/next/no-img-element */
var react_1 = require("react");
var SearchCard = function (_a) {
    var item = _a.item;
    return (react_1["default"].createElement("div", { className: 'flex flex-col items-center  w-full sm:w-[20rem]  px-2 py-5 my-4\r\n          bg-white rounded-xl transform transition-all hover:-translate-y-2 shadow hover:shadow-xl\r\n          duration-300 ' },
        react_1["default"].createElement("img", { src: "https://storage.googleapis.com/ef-prod/plants-images/thumbnails/" + item.image, className: 'h-40 object-cover rounded-xl w-full', alt: '' }),
        react_1["default"].createElement("div", { className: 'p-2' },
            react_1["default"].createElement("h2", { className: 'font-bold text-lg text-primary' }, item.heb_name),
            react_1["default"].createElement("p", { className: 'text-sm  text-secondary' },
                "\u05E9\u05DD \u05DE\u05D3\u05E2\u05D9: ",
                item.science_name)),
        react_1["default"].createElement("div", { className: 'mt-2' },
            react_1["default"].createElement("a", { role: 'button', href: '#', className: 'text-white transform transition-all duration-300  bg-gradient-to-t from-[#FFA500] to-[#FFD700] hover:from-[#FFD700] hover:to-[#FFA500] px-3 py-1 rounded-md ' }, "\u05D1\u05E7\u05E8 \u05D1\u05D3\u05E3 \u05D4\u05E6\u05DE\u05D7"))));
};
exports["default"] = SearchCard;
