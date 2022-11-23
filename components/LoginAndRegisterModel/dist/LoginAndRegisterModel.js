"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@chakra-ui/react");
var Register_1 = require("../Register/Register");
var LoginAndRegisterModel = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose;
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(react_2.Modal, { isCentered: true, isOpen: isOpen, onClose: onClose, size: '2xl' },
            react_1["default"].createElement(react_2.ModalOverlay, { bg: 'none', backdropFilter: 'auto', backdropInvert: '0%', backdropBlur: '5px' }),
            react_1["default"].createElement(react_2.ModalContent, null,
                react_1["default"].createElement(react_2.ModalCloseButton, null),
                react_1["default"].createElement(react_2.ModalBody, { className: 'mt-[2rem]' },
                    react_1["default"].createElement(react_2.Tabs, { variant: 'enclosed' },
                        react_1["default"].createElement(react_2.TabList, null,
                            react_1["default"].createElement(react_2.Tab, null,
                                react_1["default"].createElement("p", { className: 'text-lg font-bold text-secondary border-b-4 border-primary max-w-[200px] text-center mb-4' }, "\u05D4\u05EA\u05D7\u05D1\u05E8\u05D5\u05EA")),
                            react_1["default"].createElement(react_2.Tab, null,
                                react_1["default"].createElement("p", { className: 'text-lg font-bold text-secondary border-b-4 border-primary max-w-[200px] text-center mb-4' }, "\u05D4\u05E8\u05E9\u05DE\u05D4"))),
                        react_1["default"].createElement(react_2.TabPanels, { className: 'min-h-[350px] flex items-center justify-center' },
                            react_1["default"].createElement(react_2.TabPanel, null,
                                react_1["default"].createElement("div", { style: { overflow: 'hidden' }, className: 'flex  flex-col items-center  justify-center ' },
                                    react_1["default"].createElement("div", null,
                                        react_1["default"].createElement("div", { className: ' flex flex-col gap-4 w-[200px]   md:w-[300px]' },
                                            react_1["default"].createElement("div", null,
                                                react_1["default"].createElement("input", { className: 'input w-full', placeholder: '\u05D3\u05D5\u05D0"\u05DC' })),
                                            react_1["default"].createElement("div", null,
                                                react_1["default"].createElement("input", { className: 'input w-full', placeholder: '\u05D3\u05D5\u05D0"\u05DC' })),
                                            react_1["default"].createElement("div", null,
                                                react_1["default"].createElement("input", { type: 'button', className: 'button-primary input w-full font-bold', value: '\u05D4\u05EA\u05D7\u05D1\u05E8 >>' })),
                                            react_1["default"].createElement("p", { className: 'text-secondary text-xs font-bold underline' }, "\u05E9\u05D7\u05DB\u05EA \u05E1\u05D9\u05E1\u05DE\u05D0?"))))),
                            react_1["default"].createElement(react_2.TabPanel, null,
                                react_1["default"].createElement(Register_1["default"], null)))))))));
};
exports["default"] = LoginAndRegisterModel;
