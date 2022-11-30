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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("@chakra-ui/react");
var react_2 = require("react");
var userAPI_1 = require("../../apis/userAPI");
var initialUser = {
    password: '',
    confirm_password: '',
    username: '',
    f_name: '',
    l_name: '',
    email: '',
    phone: '',
    settlement: '',
    sex: '',
    accept_terms_of_service: false,
    userName: ''
};
var Register = function () {
    var _a = react_2.useState(initialUser), user = _a[0], setUser = _a[1];
    var _b = react_2.useState(__assign(__assign({}, initialUser), { accept_terms_of_service: true })), errors = _b[0], setErrors = _b[1];
    var onChange = function (e) {
        var _a;
        var name = e.currentTarget.name;
        var value = e.currentTarget.value;
        setUser(__assign(__assign({}, user), (_a = {}, _a[name] = value, _a)));
    };
    var onAcceptTerms = function (e) {
        var _a;
        var name = e.target.name;
        var value = e.target.checked;
        setUser(__assign(__assign({}, user), (_a = {}, _a[name] = value, _a)));
    };
    var validateForm = function () {
        var isValid = true;
        if (user.f_name.length < 1) {
            setErrors(function (prev) {
                return __assign(__assign({}, prev), { f_name: 'שם פרטי - חובה' });
            });
            isValid = false;
        }
        if (user.l_name.length < 1) {
            setErrors(function (prev) {
                return __assign(__assign({}, prev), { l_name: 'שם משפחה - חובה' });
            });
            isValid = false;
        }
        if (user.userName.length < 1) {
            console.log('testing');
            setErrors(function (prev) {
                return __assign(__assign({}, prev), { userName: 'שם משתמש - חובה' });
            });
            isValid = false;
        }
        if (!isValidEmail(user.email)) {
            setErrors(function (prev) {
                return __assign(__assign({}, prev), { email: 'דוא"ל לא תקני' });
            });
            isValid = false;
        }
        if (user.password.length < 1) {
            setErrors(function (prev) {
                return __assign(__assign({}, prev), { password: 'סיסמה - חובה' });
            });
            isValid = false;
        }
        else if (user.password !== user.confirm_password) {
            setErrors(function (prev) {
                return __assign(__assign({}, prev), { password: 'סיסמאות לא תואמות' });
            });
            isValid = false;
        }
        if (!user.accept_terms_of_service) {
            setErrors(function (prev) {
                return __assign(__assign({}, prev), { accept_terms_of_service: false });
            });
            isValid = false;
        }
        console.log(user.sex);
        if (!user.sex || user.sex === '0') {
            setErrors(function (prev) {
                return __assign(__assign({}, prev), { sex: 'יש לבחור מגדר.' });
            });
            isValid = false;
        }
        return isValid;
    };
    var onSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var data, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setErrors(__assign(__assign({}, initialUser), { accept_terms_of_service: true }));
                    if (!validateForm())
                        return [2 /*return*/];
                    console.log('here');
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, userAPI_1["default"].post('users/createUser', user)];
                case 2:
                    data = (_a.sent()).data;
                    console.log(data);
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    console.log(err_1);
                    return [3 /*break*/, 4];
                case 4:
                    console.log('succes', errors);
                    return [2 /*return*/];
            }
        });
    }); };
    var isError = function (p) {
        var isError = p.length > 1;
        return isError;
    };
    var isValidEmail = function (email) {
        var isValid = /\S+@\S+\.\S+/.test(email);
        return isValid;
    };
    react_2.useEffect(function () { }, [errors]);
    return (react_2["default"].createElement("div", { style: { overflow: 'hidden' }, className: 'flex  flex-col items-center  justify-center ' },
        react_2["default"].createElement("div", { className: 'flex flex-col sm:flex-row gap-1 sm:gap-4' },
            react_2["default"].createElement("div", { className: 'flex flex-col' },
                react_2["default"].createElement("p", { className: 'text-sm text-secondary font-bold mb-2' }, "\u05E9\u05DD \u05E4\u05E8\u05D8\u05D9"),
                react_2["default"].createElement("input", { className: 'input w-full', name: 'f_name', value: user.f_name, onChange: onChange }),
                react_2["default"].createElement("p", { className: (isError(errors.f_name) ? '' : 'hidden') + " bg-red-300 text-sm text-white rounded px-1 p-[.5px] my-1 text-center" }, errors.f_name)),
            react_2["default"].createElement("div", { className: 'flex flex-col' },
                react_2["default"].createElement("p", { className: 'text-sm text-secondary font-bold mb-2' },
                    "\u05D8\u05DC\u05E4\u05D5\u05DF\u00A0",
                    react_2["default"].createElement("span", { className: 'text-xs text-gray-400' }, "(\u05D0\u05D5\u05E4\u05E6\u05D9\u05D5\u05E0\u05DC\u05D9)")),
                react_2["default"].createElement("input", { className: 'input w-full' }))),
        react_2["default"].createElement("div", { className: 'flex flex-col sm:flex-row   gap-1 sm:gap-4' },
            react_2["default"].createElement("div", { className: 'flex flex-col' },
                react_2["default"].createElement("p", { className: 'text-sm text-secondary font-bold mb-2' }, "\u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4"),
                react_2["default"].createElement("input", { className: 'input w-full', name: 'l_name', value: user.l_name, onChange: onChange }),
                react_2["default"].createElement("p", { className: (isError(errors.l_name) ? '' : 'hidden') + "bg-red-300 text-sm text-white rounded px-1 p-[.5px] my-1 text-center" }, errors.l_name)),
            react_2["default"].createElement("div", { className: 'flex flex-col' },
                react_2["default"].createElement("p", { className: 'text-sm text-secondary font-bold mb-2' },
                    "\u05D9\u05E9\u05D5\u05D1\u00A0",
                    react_2["default"].createElement("span", { className: 'text-xs text-gray-400' }, "(\u05D0\u05D5\u05E4\u05E6\u05D9\u05D5\u05E0\u05DC\u05D9)")),
                react_2["default"].createElement("input", { className: 'input w-full', name: 'settlement', value: user.settlement, onChange: onChange }))),
        react_2["default"].createElement("div", { className: 'flex flex-col sm:flex-row gap-1 sm:gap-4' },
            react_2["default"].createElement("div", { className: 'flex flex-col' },
                react_2["default"].createElement("p", { className: 'text-sm text-secondary font-bold mb-2' }, "\u05D0\u05D9\u05D9\u05DE\u05D9\u05DC"),
                react_2["default"].createElement("input", { className: 'input w-full', name: 'email', value: user.email, onChange: onChange }),
                react_2["default"].createElement("p", { className: (isError(errors.email) ? '' : 'hidden') + "bg-red-300 text-sm text-white rounded px-1 p-[.5px] my-1 text-center" }, errors.email)),
            react_2["default"].createElement("div", { className: 'flex flex-col' },
                react_2["default"].createElement("p", { className: 'text-sm text-secondary font-bold mb-2' },
                    "\u05D8\u05DC\u05E4\u05D5\u05DF\u00A0",
                    react_2["default"].createElement("span", { className: 'text-xs text-gray-400' }, "(\u05D0\u05D5\u05E4\u05E6\u05D9\u05D5\u05E0\u05DC\u05D9)")),
                react_2["default"].createElement("input", { className: 'input w-full', name: 'phone', value: user.phone, onChange: onChange }))),
        react_2["default"].createElement("div", { className: 'flex flex-col sm:flex-row gap-1 sm:gap-4' },
            react_2["default"].createElement("div", { className: 'flex flex-col' },
                react_2["default"].createElement("p", { className: 'text-sm text-secondary font-bold mb-2' }, "\u05E9\u05DD \u05DE\u05E9\u05EA\u05DE\u05E9"),
                react_2["default"].createElement("input", { className: 'input w-full', name: 'userName', value: user.userName, onChange: onChange }),
                react_2["default"].createElement("p", { className: (isError(errors.userName) ? '' : 'hidden') + "bg-red-300 text-sm text-white rounded px-1 p-[.5px] my-1 text-center" }, errors.userName)),
            react_2["default"].createElement("div", { className: 'flex flex-col' },
                react_2["default"].createElement("p", { className: 'text-sm text-secondary font-bold mb-2' }, "\u05DE\u05D2\u05D3\u05E8\u00A0"),
                react_2["default"].createElement(react_1.Select, null,
                    react_2["default"].createElement("option", { value: '0' }, "-- \u05D1\u05D7\u05E8 \u05DE\u05D2\u05D3\u05E8 --"),
                    react_2["default"].createElement("option", { value: '\u05D6\u05DB\u05E8' }, "\u05D6\u05DB\u05E8"),
                    react_2["default"].createElement("option", { value: '\u05E0\u05E7\u05D1\u05D4' }, "\u05E0\u05E7\u05D1\u05D4")),
                react_2["default"].createElement("p", { className: (isError(errors.sex) ? '' : 'hidden') + "bg-red-300 text-sm text-white rounded px-1 p-[.5px] my-1 text-center" }, errors.sex))),
        react_2["default"].createElement("div", { className: 'flex flex-col' },
            react_2["default"].createElement("div", { className: 'flex flex-col sm:flex-row gap-4 w-[100%]' },
                react_2["default"].createElement("div", { className: 'flex flex-col' },
                    react_2["default"].createElement("p", { className: 'text-sm text-secondary font-bold mb-2' }, "\u05E1\u05D9\u05E1\u05DE\u05D4"),
                    react_2["default"].createElement("input", { type: 'password', className: 'input w-full', name: 'password', value: user.password, onChange: onChange })),
                react_2["default"].createElement("div", { className: 'flex flex-col' },
                    react_2["default"].createElement("p", { className: 'text-sm text-secondary font-bold mb-2' }, "\u05D0\u05D9\u05DE\u05D5\u05EA \u05E1\u05D9\u05E1\u05DE\u05D4\u00A0"),
                    react_2["default"].createElement("input", { type: 'password', className: 'input w-full', name: 'confirm_password', value: user.confirm_password, onChange: onChange }))),
            react_2["default"].createElement("p", { className: (isError(errors.password) ? '' : 'hidden') + "bg-red-300 text-sm text-white rounded px-1 p-[.5px] my-1 text-center" }, errors.password)),
        react_2["default"].createElement("div", { className: 'mt-4 flex gap-1 ' },
            react_2["default"].createElement("input", { type: 'checkbox', name: 'accept_terms_of_service', checked: user.accept_terms_of_service, onChange: onAcceptTerms }),
            react_2["default"].createElement("p", { className: 'text-xs text-secondary' }, "\u05D0\u05E0\u05D9 \u05DE\u05D0\u05E9\u05E8\\\u05EA \u05D0\u05EA \u05EA\u05E0\u05D0\u05D9 \u05D4\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05D0\u05E0\u05E6\u05D9\u05E7\u05DC\u05D5\u05E4\u05E8\u05D7")),
        react_2["default"].createElement("p", { className: (!errors.accept_terms_of_service ? '' : 'hidden') + " w-full  bg-red-300 text-sm text-white rounded px-1 p-[.5px] my-1 text-center" }, "\u05D9\u05E9 \u05DC\u05D0\u05E9\u05E8 \u05D0\u05EA \u05EA\u05E0\u05D0\u05D9 \u05D4\u05E9\u05D9\u05DE\u05D5\u05E9."),
        react_2["default"].createElement("div", { className: 'w-full px-20 mt-6' },
            react_2["default"].createElement("button", { className: 'button-primary w-full', onClick: onSubmit }, "\u05D4\u05D9\u05E8\u05E9\u05DD"))));
};
exports["default"] = Register;
