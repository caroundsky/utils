/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @public
 * @typedef Options
 * @property {string} [url] the URL to request
 * @property {'get'|'post'|'put'|'patch'|'delete'|'options'|'head'|'GET'|'POST'|'PUT'|'PATCH'|'DELETE'|'OPTIONS'|'HEAD'} [method="get"] HTTP method, case-insensitive
 * @property {Headers} [headers] Request headers
 * @property {FormData|string|object} [body] a body, optionally encoded, to send
 * @property {'text'|'json'|'stream'|'blob'|'arrayBuffer'|'formData'|'stream'} [responseType="json"] An encoding to use for the response
 * @property {Record<string,any>|URLSearchParams} [params] querystring parameters
 * @property {(params: Options['params']) => string} [paramsSerializer] custom function to stringify querystring parameters
 * @property {boolean} [withCredentials] Send the request with credentials like cookies
 * @property {string} [auth] Authorization header value to send with the request
 * @property {string} [xsrfCookieName] Pass an Cross-site Request Forgery prevention cookie value as a header defined by `xsrfHeaderName`
 * @property {string} [xsrfHeaderName] The name of a header to use for passing XSRF cookies
 * @property {(status: number) => boolean} [validateStatus] Override status code handling (default: 200-399 is a success)
 * @property {Array<(body: any, headers: Headers) => any?>} [transformRequest] An array of transformations to apply to the outgoing request
 * @property {string} [baseURL] a base URL from which to resolve all URLs
 * @property {typeof window.fetch} [fetch] Custom window.fetch implementation
 * @property {any} [data]
 */
/**
 * @public
 * @typedef Headers
 * @type {{[name: string]: string}}
 */
/**
 * @public
 * @template T
 * @typedef Response
 * @property {number} status
 * @property {string} statusText
 * @property {Options} config the request configuration
 * @property {T} data the decoded response body
 * @property {Headers} headers
 * @property {boolean} redirect
 * @property {string} url
 * @property {ResponseType} type
 * @property {ReadableStream<Uint8Array> | null} body
 * @property {boolean} bodyUsed
 */
/**
 * @typedef BodylessMethod
 * @type {<T=any>(url: string, config?: Options) => Promise<Response<T>>}
 */
/**
 * @typedef BodyMethod
 * @type {<T=any>(url: string, body?: any, config?: Options) => Promise<Response<T>>}
 */
/** */
// @ts-nocheck
// export default (function create(/** @type {Options} */ defaults) {
var defaults = defaults || {};
/**
 * @public
 * @template T
 * @type {(<T = any>(config?: Options) => Promise<Response<T>>) | (<T = any>(url: string, config?: Options) => Promise<Response<T>>)}
 */
redaxios.request = redaxios;
/** @public @type {BodylessMethod} */
redaxios.get = function (url, config) { return redaxios(url, config, "get"); };
/** @public @type {BodylessMethod} */
redaxios.delete = function (url, config) { return redaxios(url, config, "delete"); };
/** @public @type {BodylessMethod} */
redaxios.head = function (url, config) { return redaxios(url, config, "head"); };
/** @public @type {BodylessMethod} */
redaxios.options = function (url, config) { return redaxios(url, config, "options"); };
/** @public @type {BodyMethod} */
redaxios.post = function (url, data, config) { return redaxios(url, config, "post", data); };
/** @public @type {BodyMethod} */
redaxios.put = function (url, data, config) { return redaxios(url, config, "put", data); };
/** @public @type {BodyMethod} */
redaxios.patch = function (url, data, config) { return redaxios(url, config, "patch", data); };
/** @public */
redaxios.all = Promise.all.bind(Promise);
/**
 * @public
 * @template Args, R
 * @param {(...args: Args[]) => R} fn
 * @returns {(array: Args[]) => R}
 */
redaxios.spread = function (fn) {
    return function (results) {
        return fn.apply(this, results);
    };
};
// 3b smaller:
// redaxios.spread = (fn) => /** @type {any} */ (fn.apply.bind(fn, fn));
/**
 * @private
 * @param {Record<string,any>} opts
 * @param {Record<string,any>} [overrides]
 * @param {boolean} [lowerCase]
 * @returns {Partial<opts>}
 */
function deepMerge(opts, overrides, lowerCase) {
    var out = {}, i;
    if (Array.isArray(opts)) {
        return opts.concat(overrides);
    }
    for (i in opts) {
        var key = lowerCase ? i.toLowerCase() : i;
        out[key] = opts[i];
    }
    for (i in overrides) {
        var key = lowerCase ? i.toLowerCase() : i;
        var value = /** @type {any} */ overrides[i];
        out[key] =
            key in out && typeof value == "object"
                ? deepMerge(out[key], value, false)
                : value;
    }
    return out;
}
/**
 * Issues a request.
 * @public
 * @template T
 * @param {string | Options} url
 * @param {Options} [config]
 * @param {any} [_method]
 * @param {any} [_data]
 * @returns {Promise<Response<T>>}
 */
function redaxios(url, config, _method, _data) {
    if (typeof url !== "string") {
        config = url;
        url = config.url;
    }
    var response = /** @type {Response<any>} */ { config: config };
    /** @type {Options} */
    var options = deepMerge(defaults, config);
    /** @type {Headers} */
    var customHeaders = {};
    var data = _data || options.data;
    (options.transformRequest || []).map(function (f) {
        data = f(data, options.headers) || data;
    });
    if (data && typeof data === "object" && typeof data.append !== "function") {
        data = JSON.stringify(data);
        customHeaders["Content-Type"] = "application/json;charset=UTF-8";
    }
    var m = typeof document !== "undefined" &&
        document.cookie.match(RegExp("(^|; )" + options.xsrfCookieName + "=([^;]*)"));
    if (m)
        customHeaders[options.xsrfHeaderName] = decodeURIComponent(m[2]);
    if (options.auth) {
        customHeaders.authorization = options.auth;
    }
    if (options.baseURL) {
        url = url.replace(/^(?!.*\/\/)\/?(.*)$/, options.baseURL + "/$1");
    }
    if (options.params) {
        var divider = ~url.indexOf("?") ? "&" : "?";
        var query = options.paramsSerializer
            ? options.paramsSerializer(options.params)
            : new URLSearchParams(options.params);
        url += divider + query;
    }
    var fetchFunc = options.fetch || fetch;
    return fetchFunc(url, {
        method: _method || options.method,
        body: data,
        headers: deepMerge(options.headers, customHeaders, false),
        credentials: options.withCredentials ? "include" : "same-origin",
    }).then(function (res) {
        for (var i in res) {
            if (typeof res[i] != "function")
                response[i] = res[i];
        }
        var ok = options.validateStatus
            ? options.validateStatus(res.status)
            : res.ok;
        if (options.responseType == "stream") {
            response.data = res.body;
            return response;
        }
        return res[options.responseType || "text"]()
            .then(function (data) {
            response.data = data;
            // its okay if this fails: response.data will be the unparsed value:
            response.data = JSON.parse(data);
        })
            .catch(Object)
            .then(function () {
            if (ok) {
                return response;
            }
            else {
                response.msg = response.status + " " + response.statusText;
                return Promise.reject(response);
            }
        });
    });
}
/**
 * @public
 * @type {AbortController}
 */
redaxios.CancelToken =
    /** @type {any} */ typeof AbortController == "function"
        ? AbortController
        : Object;
/**
 * @public
 * @type {Options}
 */
redaxios.defaults = defaults;
var Redaxios = (function (cfg) { return redaxios(cfg); });

var setDefalut = function (sourceData, defaultData) {
    Object.keys(defaultData).forEach(function (key) {
        if (!sourceData.hasOwnProperty(key)) {
            sourceData[key] = defaultData[key];
        }
    });
    return sourceData;
};
var Axios = Redaxios;

var DEFAULT_VALUE = {
    suffix: "xlsx",
    errMatch: '"msg',
};
function downLoadFile(url, options) {
    var _this = this;
    var _a = setDefalut(options, DEFAULT_VALUE), fileName = _a.fileName, suffix = _a.suffix, errMatch = _a.errMatch, transformResponse = _a.transformResponse, config = __rest(_a, ["fileName", "suffix", "errMatch", "transformResponse"]);
    config["headers"] = { Accept: "application/json, text/plain, */*" };
    return new Promise(function (resolve, reject) {
        Axios(__assign({ url: url, method: "post", responseType: "blob", withCredentials: true, validateStatus: function (status) {
                return [200].includes(status);
            } }, config))
            .then(function (res) { return __awaiter(_this, void 0, void 0, function () {
            var headers, data, status, _fileName, disposition, filenameRegex, matches, content, e_1, URL, downloadUrl, a;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof transformResponse === "function") {
                            res = transformResponse(res);
                        }
                        headers = res.headers, data = res.data, status = res.status;
                        if (status !== 200)
                            return [2 /*return*/, reject({
                                    errMsg: res,
                                })];
                        _fileName = "";
                        if (fileName) {
                            _fileName = "".concat(fileName, ".").concat(suffix);
                        }
                        else {
                            disposition = headers.get("content-disposition");
                            if (disposition && disposition.indexOf("attchement") !== -1) {
                                filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
                                matches = filenameRegex.exec(disposition);
                                if (matches != null && matches[1]) {
                                    _fileName = decodeURI(matches[1].replace(/['"]/g, ""));
                                }
                            }
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, data.text()];
                    case 2:
                        content = _a.sent();
                        if (JSON.stringify(content).indexOf(errMatch) > -1) {
                            return [2 /*return*/, reject({
                                    errMsg: content,
                                })];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.log(e_1);
                        alert("您的浏览器版本太低，可能会导致导出失败，建议升级您的浏览器版本");
                        return [3 /*break*/, 4];
                    case 4:
                        URL = window.URL || window.webkitURL;
                        downloadUrl = URL.createObjectURL(data);
                        if (_fileName) {
                            a = document.createElement("a");
                            // safari 还不支持 HTML a[download] 方式
                            if (typeof a.download === "undefined") {
                                window.location.href = downloadUrl;
                            }
                            else {
                                a.href = downloadUrl;
                                a.download = _fileName;
                                document.body.appendChild(a);
                                a.click();
                                a.remove();
                            }
                        }
                        else {
                            window.open(downloadUrl);
                        }
                        setTimeout(function () { return URL.revokeObjectURL(downloadUrl); }, 100);
                        resolve();
                        return [2 /*return*/];
                }
            });
        }); })
            .catch(function (err) {
            return reject({
                errMsg: err,
            });
        });
    });
}

/**
 * URL 参数 转换成对象
 * @param {*} url 网址
 * @return {Object} 对象
 */
var formatUrl = function (url) {
    var params = url.split("?")[1];
    var param = params.split("&");
    var obj = {};
    for (var i = 0; i < param.length; i++) {
        var paramsA = param[i].split("=");
        var keyA = paramsA[0];
        var value = paramsA[1];
        if (obj[keyA]) {
            obj[keyA] = Array.isArray(obj[keyA]) ? obj[keyA] : [obj[keyA]];
            obj[keyA].push(value);
        }
        else {
            obj[keyA] = value;
        }
    }
    return obj;
};

function zip() {
    console.log("zip");
}

/* Automatically generated by './build/gen-entry.js' */
var components = {
    downloadFile: downLoadFile,
    formatUrl: formatUrl,
    zip: zip
};

export { components as default, downLoadFile as downloadFile, formatUrl, zip };
