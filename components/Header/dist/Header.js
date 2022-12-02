"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var link_1 = require("next/link");
var logo_png_1 = require("../../images/logo.png");
var heart_svg_1 = require("../../images/heart.svg");
var account_png_1 = require("../../images/account.png");
var universal_cookie_1 = require("universal-cookie");
var Menu_1 = require("../MenuIcon/Menu");
var LoginAndRegisterModel_1 = require("../LoginAndRegisterModel/LoginAndRegisterModel");
var react_2 = require("@chakra-ui/react");
// Icons components
var NotificationsIcon_1 = require("../Icons/NotificationsIcon");
var cookies = new universal_cookie_1["default"]();
var menuItems = [
    { text: 'בית', url: '/' },
    { text: 'זיהוי צמח', url: '/ai' },
    { text: 'חיפוש צמח', url: '/search' },
    { text: 'שאלות מהקהילה', url: '/ai' },
    { text: ' פרסומים ותצפיות', url: '/' },
    { text: 'תומכים', url: '/support' },
    { text: 'עדכונים', url: '/ai' },
    { text: 'כתבו לנו', url: '/ai' },
    { text: 'תנאי שימוש', url: '/ai' },
    { text: 'אודות', url: '/about' },
];
var Header = function () {
    var _a = react_1["default"].useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var _b = react_1.useState(0), menuId = _b[0], setMenuId = _b[1];
    var _c = react_1.useState(false), isLoginOpen = _c[0], setIsLoginOpen = _c[1];
    var openLogin = function () { return setIsLoginOpen(true); };
    var handleMenuId = function (id) {
        setMenuId(id);
        cookies.set('menuId', id, { path: '/' });
    };
    react_1.useEffect(function () {
        var menuCookie = cookies.get('menuId');
        if (!menuCookie) {
            console.log('undefiend');
        }
        else {
            console.log('found menuId: ' + menuCookie);
            setMenuId(Number(menuCookie));
        }
    }, []);
    var renderMenu = function (isSeperator) {
        return (react_1["default"].createElement(react_1["default"].Fragment, null, menuItems.map(function (item, index) {
            return (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement("div", { key: index, onClick: function () { return handleMenuId(index); }, className: (menuId === index ? 'text-primary' : '') + " cursor-pointer " + (!isSeperator
                        ? 'border-2 border-transparent border-b-orange-100 w-full text-center p-1 pb-3'
                        : null) },
                    react_1["default"].createElement(link_1["default"], { href: "" + item.url }, item.text)),
                isSeperator ? react_1["default"].createElement("div", null, "|") : ''));
        })));
    };
    return (react_1["default"].createElement("header", { className: 'flex flex-col gap-4 default-container pb-2' },
        react_1["default"].createElement("div", { className: 'flex items-center flex-row-reverse ' },
            react_1["default"].createElement("div", { className: 'flex flex-col items-center justify-center p-2 md:p-4 w-[80px]  cursor-pointer' },
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement(image_1["default"], { src: heart_svg_1["default"], alt: 'Heart' })),
                react_1["default"].createElement("div", null, "\u05EA\u05D5\u05DE\u05DB\u05D9\u05DD")),
            react_1["default"].createElement("div", { className: 'grow flex items-center justify-center cursor-pointer ' },
                react_1["default"].createElement(link_1["default"], { href: '/' },
                    react_1["default"].createElement(image_1["default"], { src: logo_png_1["default"], alt: 'Logo' }))),
            react_1["default"].createElement("div", { className: 'flex flex-col items-center justify-center p-2 md:p-4 ' },
                react_1["default"].createElement("div", { className: 'flex gap-2 md:gap-5 align-center justify-center flex-row-reverse' },
                    react_1["default"].createElement("div", { className: ' cursor-pointer' },
                        react_1["default"].createElement(NotificationsIcon_1["default"], null)),
                    react_1["default"].createElement("div", { className: ' flex flex-col justify-center items-center  cursor-pointer', onClick: function () { return setIsLoginOpen(true); } },
                        react_1["default"].createElement("div", null,
                            react_1["default"].createElement(image_1["default"], { src: account_png_1["default"], alt: 'Logo' })),
                        react_1["default"].createElement("div", { className: 'hidden md:block text-xs' }, "\u05D4\u05EA\u05D7\u05D1\u05E8 \\ \u05D4\u05E8\u05E9\u05DD")),
                    react_1["default"].createElement("div", { className: 'md:hidden', onClick: function () { return setIsOpen(true); } },
                        react_1["default"].createElement(Menu_1["default"], null))))),
        react_1["default"].createElement("nav", { className: ' gap-2 text-sm px-2 md:px-4 justify-center hidden md:flex' }, renderMenu(true)),
        react_1["default"].createElement(LoginAndRegisterModel_1["default"], { isOpen: isLoginOpen, onClose: function () {
                setIsLoginOpen(false);
            } }),
        react_1["default"].createElement(react_2.Modal, { isCentered: true, isOpen: isOpen, onClose: function () { return setIsOpen(false); }, size: '2xl' },
            react_1["default"].createElement(react_2.ModalOverlay, { bg: 'none', backdropFilter: 'auto', backdropInvert: '0%', backdropBlur: '5px' }),
            react_1["default"].createElement(react_2.ModalContent, null,
                react_1["default"].createElement(react_2.ModalCloseButton, null),
                react_1["default"].createElement(react_2.ModalBody, { className: 'mt-[2rem]' },
                    react_1["default"].createElement("nav", { className: 'flex flex-col justify-center items-center gap-2 pb-8' }, renderMenu(false)))))));
};
exports["default"] = Header;
