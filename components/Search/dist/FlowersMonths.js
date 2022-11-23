"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@chakra-ui/react");
var months = [
    'ינואר',
    'פברואר',
    'מרץ',
    'אפריל',
    'מאי',
    'יוני',
    'יולי',
    'אוגוסט',
    'ספטמבר',
    'אוקטובר',
    'נובמבר',
    'דצמבר',
];
var FlowersMonths = function (_a) {
    var onMonthChange = _a.onMonthChange;
    return (react_1["default"].createElement("div", { className: 'grid grid-cols-4  grid-cols-reverse gap-1 ' }, months.map(function (month, index) {
        return (react_1["default"].createElement("div", { key: index, className: 'flex-1 text-1' },
            react_1["default"].createElement(react_2.Checkbox, { size: 'sm', colorScheme: 'orange', onChange: function (e) {
                    console.log(e.target.checked);
                    onMonthChange(String(index), e.target.checked);
                } }, month)));
    })));
};
exports["default"] = FlowersMonths;
