"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _universalCookie = _interopRequireDefault(require("universal-cookie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cookie = new _universalCookie["default"]();
var baseURL = process.env.NEXT_PUBLIC_BASE_URL;
var headers = {};
headers.Authorization = "Bearer ".concat(cookie.get('token'));

var axiosInstance = _axios["default"].create({
  baseURL: baseURL // headers,
  // withCredentials: true,

});

axiosInstance.interceptors.request.use(function (config) {
  var token = cookie.get('token');

  if (token) {// config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
}, function (error) {
  return Promise.reject(error);
});
var _default = axiosInstance;
exports["default"] = _default;