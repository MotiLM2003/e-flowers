"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@chakra-ui/react");
var framer_motion_1 = require("framer-motion");
var Loader = function (_a) {
    var _b = _a.text, text = _b === void 0 ? 'Loading...' : _b, isLoading = _a.isLoading;
    return (react_1["default"].createElement("div", null,
        isLoading && (react_1["default"].createElement(framer_motion_1.motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } },
            react_1["default"].createElement(framer_motion_1.AnimatePresence, null,
                react_1["default"].createElement("div", { className: 'wof-loader' },
                    react_1["default"].createElement("div", { className: 'loader-bg' }),
                    react_1["default"].createElement("div", { className: 'wof-loader-content' },
                        react_1["default"].createElement("div", { className: 'flex items-center  flex-col gap-0 justify-center' },
                            react_1["default"].createElement("div", null,
                                react_1["default"].createElement(react_2.Spinner, { color: 'white', emptyColor: 'gray.300', size: 'xl', thickness: '15px', speed: '1.5s' })),
                            react_1["default"].createElement("div", null, text))))))),
        ";"));
};
exports["default"] = Loader;
