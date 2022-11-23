"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var Layout_1 = require("../../components/Layout/Layout");
var react_2 = require("@chakra-ui/react");
// Custom components
var EnvTypes_1 = require("../../components/Search/EnvTypes");
var FlowersMonths_1 = require("../../components/Search/FlowersMonths");
var FlowerColors_1 = require("../../components/Search/FlowerColors");
var Select_1 = require("../../components/Select/Select");
// Images
var map_png_1 = require("../../images/map.png");
var FlowerShape_1 = require("./FlowerShape");
var react_3 = require("@chakra-ui/react");
var lifeForm = [
    'חד-שנתי',
    'גיאופיט (בצל או פקעת)',
    'עשבוני רב-שנתי',
    'שיח',
    'בן-שיח',
    'מטפס',
    'עץ',
    'צמח מים',
    'טפיל',
    'שרכים',
    'דו-שנתי',
    'טחבים',
];
var growAreas = [
    'חולות',
    'קרקעות קלות',
    'בתות',
    'בתות של הרים גבוהים',
    'חברות שיחים',
    'ערבות-שיחים',
    'קרקעות כבדות',
    'בתי גידול לחים',
    'מדבר',
    'מחשופי סלע קשה',
    'קירות וחומות',
    'סביבות חמות - צמחים אוהבי חום',
    'קרקעות מלוחות',
    'חורש',
    'בתה עשבונית ים-תיכונית',
    'נטע אדם',
    'שטחים מופרים',
    'שדות ושטחים מעובדים',
    'יער',
    'חוף הים התיכון',
    'קרקעות עשירות בנוטריינטים',
    'מחשופי סלע מוצלים',
    'יער ספר הררי',
    'בתות טרגקנטיות של הרים גבוהים',
];
var leafShapeList = ['עגול', 'מצולע', 'חסר גבעול', 'מרובע', 'משולש'];
var kozim = ['ענפים', 'עלים', 'גבעולים', 'פירות', 'פרחים'];
// Main component
var Search = function () {
    var _a = react_1["default"].useState('1'), value = _a[0], setValue = _a[1];
    var _b = react_1.useState({
        name_text: '',
        colors: [],
        location_names: [],
        flowering_seasons: [],
        petals: ['חסר עלי כותרת'],
        leaf_shapes: ['פשוט'],
        leaf_edges: ['תמימה'],
        leaf_arrangements: ['מסורגים (עלה אחד בכל מפרק)'],
        life_forms: ['חד-שנתי'],
        habitats: ['חולות'],
        stem_shapes: ['עגול'],
        spine: ['ענפים'],
        red: false,
        invasive: false,
        danger: false,
        rare: false,
        protected: false,
        page: 1
    }), state = _b[0], setState = _b[1];
    var onChange = function (name, value) {
        var _a;
        setState(__assign(__assign({}, state), (_a = {}, _a[name] = value, _a)));
        console.log(name);
    };
    var onMonthChange = function (month, isIn) {
        if (!isIn) {
            setState(__assign(__assign({}, state), { flowering_seasons: state.flowering_seasons.filter(function (x) { return x !== month; }) }));
        }
        else {
            var months = __spreadArrays(state.flowering_seasons);
            months.push(month);
            setState(__assign(__assign({}, state), { flowering_seasons: months }));
        }
    };
    var onColorChange = function (color, isIn) {
        if (!isIn) {
            setState(__assign(__assign({}, state), { colors: state.colors.filter(function (x) { return x !== color; }) }));
        }
        else {
            var colors = __spreadArrays(state.colors);
            colors.push(color);
            setState(__assign(__assign({}, state), { colors: colors }));
        }
    };
    return (react_1["default"].createElement(Layout_1["default"], null,
        react_1["default"].createElement("div", { className: 'default-container' },
            react_1["default"].createElement("div", { className: 'flex flex-col justify-center items-center' },
                react_1["default"].createElement("div", { className: 'flex items-center justify-center my-5' },
                    react_1["default"].createElement("p", { className: 'font-bold text-secondary  border-b-4  border-b-primary mb-7 text-2xl  w-[320px] text-center ' }, "\u05D7\u05D9\u05E4\u05D5\u05E9 \u05E6\u05DE\u05D7 \u05DC\u05E4\u05D9 \u05DE\u05D0\u05E4\u05D9\u05D9\u05E0\u05D9\u05DD")),
                react_1["default"].createElement("div", { className: 'flex flex-col items-center' },
                    react_1["default"].createElement("div", { className: 'w-[90%] md:w-[50%]' },
                        react_1["default"].createElement("p", { className: 'text-secondary mb-2 font-bold text-md' }, "\u05D7\u05D9\u05E4\u05D5\u05E9 \u05DC\u05E4\u05D9 \u05E9\u05DD \u05E6\u05DE\u05D7"),
                        react_1["default"].createElement("div", { className: 'w-full' },
                            react_1["default"].createElement(react_3.Input, { placeholder: '\u05D4\u05E7\u05DC\u05D3 \u05E9\u05DD \u05E6\u05DE\u05D7', value: state.name_text, onChange: function (e) {
                                    onChange('name_text', e.target.value);
                                } }))),
                    react_1["default"].createElement("div", { className: 'flex flex-col md:gap-5  md:flex-row mt-5 w-full' },
                        react_1["default"].createElement("div", { className: 'grow-1' },
                            react_1["default"].createElement("div", { className: 'flex flex-col items-center justify-center my-5' },
                                react_1["default"].createElement("p", { className: 'font-bold text-secondary  border-b-4 border-b-primary mb-5 text-md  text-center  md:w-[60%] ' }, "\u05E9\u05DE\u05D9\u05E8\u05EA \u05D8\u05D1\u05E2"),
                                react_1["default"].createElement("div", null,
                                    react_1["default"].createElement(EnvTypes_1["default"], { state: state, onChange: onChange })),
                                react_1["default"].createElement("div", null,
                                    react_1["default"].createElement(image_1["default"], { src: map_png_1["default"], objectFit: 'contain', width: 300, height: 300, alt: 'Map Image' })),
                                react_1["default"].createElement("div", { className: 'w-full' },
                                    react_1["default"].createElement(Select_1["default"], null,
                                        react_1["default"].createElement(react_1["default"].Fragment, null,
                                            react_1["default"].createElement("option", null, "\u05E6\u05D5\u05E8\u05EA \u05D7\u05D9\u05D9\u05DD"),
                                            lifeForm.map(function (item) {
                                                return (react_1["default"].createElement("option", { key: item, value: item }, item));
                                            })))))),
                        react_1["default"].createElement("div", { className: 'grow-2 flex flex-col items-center' },
                            react_1["default"].createElement("div", { className: 'flex items-center justify-center my-5 w-full' },
                                react_1["default"].createElement("p", { className: 'font-bold text-secondary  border-b-4 border-b-primary text-md  text-center   md:w-[60%]  ' }, "\u05E4\u05E8\u05D9\u05D7\u05D4")),
                            react_1["default"].createElement(FlowersMonths_1["default"], { onMonthChange: onMonthChange }),
                            react_1["default"].createElement("p", { className: 'font-bold text-secondary text-sm  text-center   md:w-[60%]  md:mt-8 mb-3' }, "\u05E6\u05D1\u05E2 \u05E4\u05E8\u05D9\u05D7\u05D4"),
                            react_1["default"].createElement("div", { className: 'w-full flex flex-col items-center justify-center' },
                                react_1["default"].createElement(FlowerColors_1["default"], { onColorChange: onColorChange }),
                                react_1["default"].createElement("p", { className: 'font-bold text-secondary mt-3 mb-2 text-sm  text-center  md:w-[60%] ' }, "\u05DE\u05E1\u05E4\u05E8 \u05E2\u05DC\u05D9 \u05DB\u05D5\u05EA\u05E8\u05EA"),
                                react_1["default"].createElement("div", { className: 'mb-[3.2rem]' },
                                    react_1["default"].createElement(react_2.RadioGroup, { onChange: setValue, value: value, className: 'search-rb' },
                                        react_1["default"].createElement("div", { className: 'flex flex-reverse  max-w-[180px] justify-center gap-3' },
                                            react_1["default"].createElement("div", null,
                                                react_1["default"].createElement(react_2.Radio, { size: 'sm', colorScheme: 'orange', value: '1' }, "1")),
                                            react_1["default"].createElement("div", null,
                                                react_1["default"].createElement(react_2.Radio, { size: 'sm', colorScheme: 'orange', value: '2' }, "2")),
                                            react_1["default"].createElement("div", null,
                                                react_1["default"].createElement(react_2.Radio, { size: 'sm', colorScheme: 'orange', value: '3' }, "3")),
                                            react_1["default"].createElement("div", null,
                                                react_1["default"].createElement(react_2.Radio, { size: 'sm', colorScheme: 'orange', value: '4' }, "4")),
                                            react_1["default"].createElement("div", null,
                                                react_1["default"].createElement(react_2.Radio, { size: 'sm', colorScheme: 'orange', value: '5' }, "5"))))),
                                react_1["default"].createElement(Select_1["default"], null,
                                    react_1["default"].createElement(react_1["default"].Fragment, null,
                                        react_1["default"].createElement("option", null, "\u05D1\u05D9\u05EA \u05D2\u05D9\u05D3\u05D5\u05DC"),
                                        growAreas.map(function (item) {
                                            return (react_1["default"].createElement("option", { key: item, value: item }, item));
                                        }))),
                                react_1["default"].createElement("div", { style: { direction: 'ltr' }, className: 'text-xs' },
                                    react_1["default"].createElement("pre", null, JSON.stringify(state, null, 2))))),
                        react_1["default"].createElement("div", { className: 'grow-1' },
                            react_1["default"].createElement("div", { className: 'flex flex-col items-center justify-center my-5' },
                                react_1["default"].createElement("p", { className: 'font-bold text-secondary  border-b-4 border-b-primary mb-7 text-md  text-center  ' }, "\u05EA\u05DB\u05D5\u05E0\u05D5\u05EA \u05D5\u05DE\u05D1\u05E0\u05D4"),
                                react_1["default"].createElement("p", { className: 'font-bold text-secondary    mb-3 text-sm  text-center  ' }, "\u05E6\u05D5\u05E8\u05D5\u05EA \u05E2\u05DC\u05D4"),
                                react_1["default"].createElement(FlowerShape_1["default"], { startIngIndex: 0 }),
                                react_1["default"].createElement("p", { className: 'font-bold text-secondary    my-3 text-sm  text-center  ' }, "\u05E1\u05D9\u05D3\u05D5\u05E8 \u05E2\u05DC\u05D9\u05DD"),
                                react_1["default"].createElement(FlowerShape_1["default"], { startIngIndex: 4 }),
                                react_1["default"].createElement("p", { className: 'font-bold text-secondary    my-3 text-sm  text-center  ' }, "\u05E1\u05D9\u05D3\u05D5\u05E8 \u05E2\u05DC\u05D9\u05DD"),
                                react_1["default"].createElement(FlowerShape_1["default"], { startIngIndex: 5 }),
                                react_1["default"].createElement(Select_1["default"], { cssClass: 'mt-8' },
                                    react_1["default"].createElement(react_1["default"].Fragment, null,
                                        react_1["default"].createElement("option", null, "\u05E6\u05D5\u05E8\u05EA \u05D2\u05D1\u05E2\u05D5\u05DC"),
                                        leafShapeList.map(function (item) {
                                            return (react_1["default"].createElement("option", { key: item, value: item }, item));
                                        }))),
                                react_1["default"].createElement(Select_1["default"], { cssClass: 'mt-10' },
                                    react_1["default"].createElement(react_1["default"].Fragment, null,
                                        react_1["default"].createElement("option", null, "\u05E7\u05D5\u05E6\u05D9\u05DD"),
                                        kozim.map(function (item) {
                                            return (react_1["default"].createElement("option", { key: item, value: item }, item));
                                        }))))))),
                react_1["default"].createElement("div", { className: 'w-[90%] md:w-[30%] md:hover:w-[33%]  mt-1 md:mt-[3rem] rounded transition-all duration-500' },
                    react_1["default"].createElement("button", { className: 'bg-green p-2 w-full rounded hover:bg-dark-green hover:text-white  transition duration-1000' },
                        "\u05D7\u05D9\u05E4\u05D5\u05E9",
                        ' '))))));
};
exports["default"] = Search;
