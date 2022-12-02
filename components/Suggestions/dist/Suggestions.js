"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var react_1 = require("react");
var link_png_1 = require("../../images/link.png");
var heart_svg_1 = require("../../images/heart.svg");
var Suggestions = function () {
    return (react_1["default"].createElement("div", { className: 'bg-gray-100 rounded shadow hover:shadow-lg  hover:bg-white  relative    transition duration-100 p-2 mb-8 w-[80%]' },
        react_1["default"].createElement("div", { className: 'flex flex-col md:flex-row  p-2' },
            react_1["default"].createElement("div", { className: 'basis-1/2' },
                react_1["default"].createElement("p", { className: 'text-orange-300 mb-1' }, "\u05E9\u05DC\u05D5\u05DE\u05D9\u05EA \u05DC\u05D5\u05D9"),
                react_1["default"].createElement("p", { className: 'text-secondary' },
                    "\u05E9\u05DC\u05D5\u05DD \u05E8\u05D1, \u05D0\u05E9\u05DE\u05D7 \u05D0\u05DD \u05EA\u05E2\u05D6\u05E8\u05D5 \u05DC\u05D9 \u05DC\u05D6\u05D4\u05D5\u05EA ",
                    react_1["default"].createElement("br", null),
                    " \u05D0\u05EA \u05D4\u05E4\u05E8\u05D7 \u05D4\u05D9\u05E4\u05D4 \u05D4\u05D6\u05D4 :) ",
                    react_1["default"].createElement("br", null),
                    "\u05EA\u05D5\u05D3\u05D4.")),
            react_1["default"].createElement("div", { className: 'flex flex-col justify-center items-center md:flex-row gap-3 mt-2' },
                react_1["default"].createElement("div", { className: 'suggestions-image' },
                    react_1["default"].createElement(image_1["default"], { objectFit: 'fill', layout: 'fill', className: 'h-fit', src: 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=pexels-pixabay-56866.jpg&fm=jpg', alt: 'example ' })),
                react_1["default"].createElement("div", { className: 'suggestions-image' },
                    react_1["default"].createElement(image_1["default"], { objectFit: 'fill', layout: 'fill', className: 'h-fit', src: 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=pexels-pixabay-56866.jpg&fm=jpg', alt: 'example ' })),
                react_1["default"].createElement("div", { className: 'suggestions-image' },
                    react_1["default"].createElement(image_1["default"], { objectFit: 'fill', layout: 'fill', className: 'h-fit', src: 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=pexels-pixabay-56866.jpg&fm=jpg', alt: 'example ' })))),
        react_1["default"].createElement("div", { className: 'absolute left-2 bottom-[-30px]' },
            react_1["default"].createElement("div", { className: 'flex gap-3 flex-row-reverse items-center justify-center' },
                react_1["default"].createElement("div", { className: 'relative h-[16px] w-[16px] cursor-pointer' },
                    react_1["default"].createElement(image_1["default"], { objectFit: 'contain', layout: 'fill', src: link_png_1["default"], alt: 'example ' })),
                react_1["default"].createElement("div", { className: 'flex gap-1 flex-row-reverse items-center cursor-pointer' },
                    react_1["default"].createElement("div", { className: 'relative h-[16px] w-[16px] flex' },
                        react_1["default"].createElement(image_1["default"], { objectFit: 'contain', layout: 'fill', src: heart_svg_1["default"], alt: 'example ' })),
                    react_1["default"].createElement("p", { className: 'text-xs text-gray-400' }, "322")),
                react_1["default"].createElement("p", { className: 'text-xs text-gray-400' }, "22.10.22")))));
};
exports["default"] = Suggestions;
