"use strict";
exports.__esModule = true;
/* eslint-disable @next/next/no-img-element */
var react_1 = require("react");
var PageLinesIcon_1 = require("components/Icons/PageLinesIcon");
var flaskIcon_1 = require("components/Icons/flaskIcon");
var SearchCard = function (_a) {
    var item = _a.item;
    react_1.useEffect(function () {
        document.addEventListener('DOMContentLoaded', function (event) {
            var images = document.querySelectorAll('img');
            console.log('images', images);
            images.forEach(function (img) {
                img.onerror = function () {
                    this.style.display = 'none';
                };
            });
        });
    }, []);
    return (react_1["default"].createElement("div", { className: 'flex flex-col   w-full sm:w-[20rem]  px-2 py-5 my-4\r\n          bg-white rounded-xl transform transition-all hover:-translate-y-2 shadow hover:shadow-xl\r\n          duration-300 ' },
        react_1["default"].createElement("img", { src: "https://storage.googleapis.com/ef-prod/plants-images/thumbnails/" + item.image, className: 'h-40 object-cover rounded-xl w-full', alt: '' }),
        react_1["default"].createElement("div", { className: 'p-2 flex flex-col justify-center gap-2' },
            react_1["default"].createElement("div", { className: 'flex items-center gap-4' },
                react_1["default"].createElement(PageLinesIcon_1["default"], { size: 20, color: '#0f4871' }),
                react_1["default"].createElement("h2", { className: 'font-bold text-lg text-primary' }, item.heb_name)),
            react_1["default"].createElement("div", { className: 'flex items-center gap-4' },
                react_1["default"].createElement(flaskIcon_1["default"], { size: 20, color: '#0f4871' }),
                react_1["default"].createElement("p", { className: 'text-sm  text-secondary font-bold' },
                    "\u05E9\u05DD \u05DE\u05D3\u05E2\u05D9:",
                    react_1["default"].createElement("span", { className: '' },
                        "\u00A0",
                        item.science_name)))),
        react_1["default"].createElement("div", { className: 'mt-2 self-center' },
            react_1["default"].createElement("a", { role: 'button', href: '#', className: 'text-white transform transition-all duration-300  bg-gradient-to-t from-[#FFA500] to-[#FFD700] hover:from-[#FFD700] hover:to-[#FFA500] px-3 py-1 rounded-md ' }, "\u05D1\u05E7\u05E8 \u05D1\u05D3\u05E3 \u05D4\u05E6\u05DE\u05D7"))));
};
exports["default"] = SearchCard;
