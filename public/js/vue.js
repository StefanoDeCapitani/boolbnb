/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@tomtom-international/web-sdk-plugin-searchbox/dist/SearchBox.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@tomtom-international/web-sdk-plugin-searchbox/dist/SearchBox.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {!function(t,e){if(true)module.exports=e();else { var n, r; }}(self,(function(){return function(){var t={2131:function(t,e,r){"use strict";var n=r(4963),o=r(7057);e.Z=function(t,e,r){void 0===r&&(r={});var i=n.getCoord(t),a=n.getCoord(e),s=o.degreesToRadians(a[1]-i[1]),u=o.degreesToRadians(a[0]-i[0]),c=o.degreesToRadians(i[1]),l=o.degreesToRadians(a[1]),f=Math.pow(Math.sin(s/2),2)+Math.pow(Math.sin(u/2),2)*Math.cos(c)*Math.cos(l);return o.radiansToLength(2*Math.atan2(Math.sqrt(f),Math.sqrt(1-f)),r.units)}},7057:function(t,e){"use strict";function r(t,e,r){void 0===r&&(r={});var n={type:"Feature"};return(0===r.id||r.id)&&(n.id=r.id),r.bbox&&(n.bbox=r.bbox),n.properties=e||{},n.geometry=t,n}function n(t,e,n){return void 0===n&&(n={}),r({type:"Point",coordinates:t},e,n)}function o(t,e,n){void 0===n&&(n={});for(var o=0,i=t;o<i.length;o++){var a=i[o];if(a.length<4)throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");for(var s=0;s<a[a.length-1].length;s++)if(a[a.length-1][s]!==a[0][s])throw new Error("First and last Position are not equivalent.")}return r({type:"Polygon",coordinates:t},e,n)}function i(t,e,n){if(void 0===n&&(n={}),t.length<2)throw new Error("coordinates must be an array of two or more positions");return r({type:"LineString",coordinates:t},e,n)}function a(t,e){void 0===e&&(e={});var r={type:"FeatureCollection"};return e.id&&(r.id=e.id),e.bbox&&(r.bbox=e.bbox),r.features=t,r}function s(t,e,n){return void 0===n&&(n={}),r({type:"MultiLineString",coordinates:t},e,n)}function u(t,e,n){return void 0===n&&(n={}),r({type:"MultiPoint",coordinates:t},e,n)}function c(t,e,n){return void 0===n&&(n={}),r({type:"MultiPolygon",coordinates:t},e,n)}function l(t,r){void 0===r&&(r="kilometers");var n=e.factors[r];if(!n)throw new Error(r+" units is invalid");return t*n}function f(t,r){void 0===r&&(r="kilometers");var n=e.factors[r];if(!n)throw new Error(r+" units is invalid");return t/n}function p(t){return 180*(t%(2*Math.PI))/Math.PI}function d(t){return!isNaN(t)&&null!==t&&!Array.isArray(t)&&!/^\s*$/.test(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.earthRadius=6371008.8,e.factors={centimeters:100*e.earthRadius,centimetres:100*e.earthRadius,degrees:e.earthRadius/111325,feet:3.28084*e.earthRadius,inches:39.37*e.earthRadius,kilometers:e.earthRadius/1e3,kilometres:e.earthRadius/1e3,meters:e.earthRadius,metres:e.earthRadius,miles:e.earthRadius/1609.344,millimeters:1e3*e.earthRadius,millimetres:1e3*e.earthRadius,nauticalmiles:e.earthRadius/1852,radians:1,yards:e.earthRadius/1.0936},e.unitsFactors={centimeters:100,centimetres:100,degrees:1/111325,feet:3.28084,inches:39.37,kilometers:.001,kilometres:.001,meters:1,metres:1,miles:1/1609.344,millimeters:1e3,millimetres:1e3,nauticalmiles:1/1852,radians:1/e.earthRadius,yards:1/1.0936},e.areaFactors={acres:247105e-9,centimeters:1e4,centimetres:1e4,feet:10.763910417,inches:1550.003100006,kilometers:1e-6,kilometres:1e-6,meters:1,metres:1,miles:386e-9,millimeters:1e6,millimetres:1e6,yards:1.195990046},e.feature=r,e.geometry=function(t,e,r){switch(void 0===r&&(r={}),t){case"Point":return n(e).geometry;case"LineString":return i(e).geometry;case"Polygon":return o(e).geometry;case"MultiPoint":return u(e).geometry;case"MultiLineString":return s(e).geometry;case"MultiPolygon":return c(e).geometry;default:throw new Error(t+" is invalid")}},e.point=n,e.points=function(t,e,r){return void 0===r&&(r={}),a(t.map((function(t){return n(t,e)})),r)},e.polygon=o,e.polygons=function(t,e,r){return void 0===r&&(r={}),a(t.map((function(t){return o(t,e)})),r)},e.lineString=i,e.lineStrings=function(t,e,r){return void 0===r&&(r={}),a(t.map((function(t){return i(t,e)})),r)},e.featureCollection=a,e.multiLineString=s,e.multiPoint=u,e.multiPolygon=c,e.geometryCollection=function(t,e,n){return void 0===n&&(n={}),r({type:"GeometryCollection",geometries:t},e,n)},e.round=function(t,e){if(void 0===e&&(e=0),e&&!(e>=0))throw new Error("precision must be a positive number");var r=Math.pow(10,e||0);return Math.round(t*r)/r},e.radiansToLength=l,e.lengthToRadians=f,e.lengthToDegrees=function(t,e){return p(f(t,e))},e.bearingToAzimuth=function(t){var e=t%360;return e<0&&(e+=360),e},e.radiansToDegrees=p,e.degreesToRadians=function(t){return t%360*Math.PI/180},e.convertLength=function(t,e,r){if(void 0===e&&(e="kilometers"),void 0===r&&(r="kilometers"),!(t>=0))throw new Error("length must be a positive number");return l(f(t,e),r)},e.convertArea=function(t,r,n){if(void 0===r&&(r="meters"),void 0===n&&(n="kilometers"),!(t>=0))throw new Error("area must be a positive number");var o=e.areaFactors[r];if(!o)throw new Error("invalid original units");var i=e.areaFactors[n];if(!i)throw new Error("invalid final units");return t/o*i},e.isNumber=d,e.isObject=function(t){return!!t&&t.constructor===Object},e.validateBBox=function(t){if(!t)throw new Error("bbox is required");if(!Array.isArray(t))throw new Error("bbox must be an Array");if(4!==t.length&&6!==t.length)throw new Error("bbox must be an Array of 4 or 6 numbers");t.forEach((function(t){if(!d(t))throw new Error("bbox must only contain numbers")}))},e.validateId=function(t){if(!t)throw new Error("id is required");if(-1===["string","number"].indexOf(typeof t))throw new Error("id must be a number or a string")},e.radians2degrees=function(){throw new Error("method has been renamed to `radiansToDegrees`")},e.degrees2radians=function(){throw new Error("method has been renamed to `degreesToRadians`")},e.distanceToDegrees=function(){throw new Error("method has been renamed to `lengthToDegrees`")},e.distanceToRadians=function(){throw new Error("method has been renamed to `lengthToRadians`")},e.radiansToDistance=function(){throw new Error("method has been renamed to `radiansToLength`")},e.bearingToAngle=function(){throw new Error("method has been renamed to `bearingToAzimuth`")},e.convertDistance=function(){throw new Error("method has been renamed to `convertLength`")}},4963:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(7057);e.getCoord=function(t){if(!t)throw new Error("coord is required");if(!Array.isArray(t)){if("Feature"===t.type&&null!==t.geometry&&"Point"===t.geometry.type)return t.geometry.coordinates;if("Point"===t.type)return t.coordinates}if(Array.isArray(t)&&t.length>=2&&!Array.isArray(t[0])&&!Array.isArray(t[1]))return t;throw new Error("coord must be GeoJSON Point or an Array of numbers")},e.getCoords=function(t){if(Array.isArray(t))return t;if("Feature"===t.type){if(null!==t.geometry)return t.geometry.coordinates}else if(t.coordinates)return t.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")},e.containsNumber=function t(e){if(e.length>1&&n.isNumber(e[0])&&n.isNumber(e[1]))return!0;if(Array.isArray(e[0])&&e[0].length)return t(e[0]);throw new Error("coordinates must only contain numbers")},e.geojsonType=function(t,e,r){if(!e||!r)throw new Error("type and name required");if(!t||t.type!==e)throw new Error("Invalid input to "+r+": must be a "+e+", given "+t.type)},e.featureOf=function(t,e,r){if(!t)throw new Error("No feature passed");if(!r)throw new Error(".featureOf() requires a name");if(!t||"Feature"!==t.type||!t.geometry)throw new Error("Invalid input to "+r+", Feature with geometry required");if(!t.geometry||t.geometry.type!==e)throw new Error("Invalid input to "+r+": must be a "+e+", given "+t.geometry.type)},e.collectionOf=function(t,e,r){if(!t)throw new Error("No featureCollection passed");if(!r)throw new Error(".collectionOf() requires a name");if(!t||"FeatureCollection"!==t.type)throw new Error("Invalid input to "+r+", FeatureCollection required");for(var n=0,o=t.features;n<o.length;n++){var i=o[n];if(!i||"Feature"!==i.type||!i.geometry)throw new Error("Invalid input to "+r+", Feature with geometry required");if(!i.geometry||i.geometry.type!==e)throw new Error("Invalid input to "+r+": must be a "+e+", given "+i.geometry.type)}},e.getGeom=function(t){return"Feature"===t.type?t.geometry:t},e.getType=function(t,e){return"FeatureCollection"===t.type?"FeatureCollection":"GeometryCollection"===t.type?"GeometryCollection":"Feature"===t.type&&null!==t.geometry?t.geometry.type:t.type}},9669:function(t,e,r){t.exports=r(1609)},5448:function(t,e,r){"use strict";var n=r(4867),o=r(6026),i=r(4372),a=r(5327),s=r(4097),u=r(4109),c=r(7985),l=r(5061);t.exports=function(t){return new Promise((function(e,r){var f=t.data,p=t.headers,d=t.responseType;n.isFormData(f)&&delete p["Content-Type"];var h=new XMLHttpRequest;if(t.auth){var _=t.auth.username||"",m=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";p.Authorization="Basic "+btoa(_+":"+m)}var y=s(t.baseURL,t.url);function v(){if(h){var n="getAllResponseHeaders"in h?u(h.getAllResponseHeaders()):null,i={data:d&&"text"!==d&&"json"!==d?h.response:h.responseText,status:h.status,statusText:h.statusText,headers:n,config:t,request:h};o(e,r,i),h=null}}if(h.open(t.method.toUpperCase(),a(y,t.params,t.paramsSerializer),!0),h.timeout=t.timeout,"onloadend"in h?h.onloadend=v:h.onreadystatechange=function(){h&&4===h.readyState&&(0!==h.status||h.responseURL&&0===h.responseURL.indexOf("file:"))&&setTimeout(v)},h.onabort=function(){h&&(r(l("Request aborted",t,"ECONNABORTED",h)),h=null)},h.onerror=function(){r(l("Network Error",t,null,h)),h=null},h.ontimeout=function(){var e="timeout of "+t.timeout+"ms exceeded";t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),r(l(e,t,t.transitional&&t.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",h)),h=null},n.isStandardBrowserEnv()){var g=(t.withCredentials||c(y))&&t.xsrfCookieName?i.read(t.xsrfCookieName):void 0;g&&(p[t.xsrfHeaderName]=g)}"setRequestHeader"in h&&n.forEach(p,(function(t,e){void 0===f&&"content-type"===e.toLowerCase()?delete p[e]:h.setRequestHeader(e,t)})),n.isUndefined(t.withCredentials)||(h.withCredentials=!!t.withCredentials),d&&"json"!==d&&(h.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&h.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&h.upload&&h.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then((function(t){h&&(h.abort(),r(t),h=null)})),f||(f=null),h.send(f)}))}},1609:function(t,e,r){"use strict";var n=r(4867),o=r(1849),i=r(321),a=r(7185);function s(t){var e=new i(t),r=o(i.prototype.request,e);return n.extend(r,i.prototype,e),n.extend(r,e),r}var u=s(r(5655));u.Axios=i,u.create=function(t){return s(a(u.defaults,t))},u.Cancel=r(5263),u.CancelToken=r(4972),u.isCancel=r(6502),u.all=function(t){return Promise.all(t)},u.spread=r(8713),u.isAxiosError=r(6268),t.exports=u,t.exports.default=u},5263:function(t){"use strict";function e(t){this.message=t}e.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},e.prototype.__CANCEL__=!0,t.exports=e},4972:function(t,e,r){"use strict";var n=r(5263);function o(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(t){e=t}));var r=this;t((function(t){r.reason||(r.reason=new n(t),e(r.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var t;return{token:new o((function(e){t=e})),cancel:t}},t.exports=o},6502:function(t){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},321:function(t,e,r){"use strict";var n=r(4867),o=r(5327),i=r(782),a=r(3572),s=r(7185),u=r(4875),c=u.validators;function l(t){this.defaults=t,this.interceptors={request:new i,response:new i}}l.prototype.request=function(t){"string"==typeof t?(t=arguments[1]||{}).url=arguments[0]:t=t||{},(t=s(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var e=t.transitional;void 0!==e&&u.assertOptions(e,{silentJSONParsing:c.transitional(c.boolean,"1.0.0"),forcedJSONParsing:c.transitional(c.boolean,"1.0.0"),clarifyTimeoutError:c.transitional(c.boolean,"1.0.0")},!1);var r=[],n=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(n=n&&e.synchronous,r.unshift(e.fulfilled,e.rejected))}));var o,i=[];if(this.interceptors.response.forEach((function(t){i.push(t.fulfilled,t.rejected)})),!n){var l=[a,void 0];for(Array.prototype.unshift.apply(l,r),l=l.concat(i),o=Promise.resolve(t);l.length;)o=o.then(l.shift(),l.shift());return o}for(var f=t;r.length;){var p=r.shift(),d=r.shift();try{f=p(f)}catch(t){d(t);break}}try{o=a(f)}catch(t){return Promise.reject(t)}for(;i.length;)o=o.then(i.shift(),i.shift());return o},l.prototype.getUri=function(t){return t=s(this.defaults,t),o(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(t){l.prototype[t]=function(e,r){return this.request(s(r||{},{method:t,url:e,data:(r||{}).data}))}})),n.forEach(["post","put","patch"],(function(t){l.prototype[t]=function(e,r,n){return this.request(s(n||{},{method:t,url:e,data:r}))}})),t.exports=l},782:function(t,e,r){"use strict";var n=r(4867);function o(){this.handlers=[]}o.prototype.use=function(t,e,r){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1},o.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},o.prototype.forEach=function(t){n.forEach(this.handlers,(function(e){null!==e&&t(e)}))},t.exports=o},4097:function(t,e,r){"use strict";var n=r(1793),o=r(7303);t.exports=function(t,e){return t&&!n(e)?o(t,e):e}},5061:function(t,e,r){"use strict";var n=r(481);t.exports=function(t,e,r,o,i){var a=new Error(t);return n(a,e,r,o,i)}},3572:function(t,e,r){"use strict";var n=r(4867),o=r(8527),i=r(6502),a=r(5655);function s(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){return s(t),t.headers=t.headers||{},t.data=o.call(t,t.data,t.headers,t.transformRequest),t.headers=n.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]})),(t.adapter||a.adapter)(t).then((function(e){return s(t),e.data=o.call(t,e.data,e.headers,t.transformResponse),e}),(function(e){return i(e)||(s(t),e&&e.response&&(e.response.data=o.call(t,e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)}))}},481:function(t){"use strict";t.exports=function(t,e,r,n,o){return t.config=e,r&&(t.code=r),t.request=n,t.response=o,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},t}},7185:function(t,e,r){"use strict";var n=r(4867);t.exports=function(t,e){e=e||{};var r={},o=["url","method","data"],i=["headers","auth","proxy","params"],a=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function u(t,e){return n.isPlainObject(t)&&n.isPlainObject(e)?n.merge(t,e):n.isPlainObject(e)?n.merge({},e):n.isArray(e)?e.slice():e}function c(o){n.isUndefined(e[o])?n.isUndefined(t[o])||(r[o]=u(void 0,t[o])):r[o]=u(t[o],e[o])}n.forEach(o,(function(t){n.isUndefined(e[t])||(r[t]=u(void 0,e[t]))})),n.forEach(i,c),n.forEach(a,(function(o){n.isUndefined(e[o])?n.isUndefined(t[o])||(r[o]=u(void 0,t[o])):r[o]=u(void 0,e[o])})),n.forEach(s,(function(n){n in e?r[n]=u(t[n],e[n]):n in t&&(r[n]=u(void 0,t[n]))}));var l=o.concat(i).concat(a).concat(s),f=Object.keys(t).concat(Object.keys(e)).filter((function(t){return-1===l.indexOf(t)}));return n.forEach(f,c),r}},6026:function(t,e,r){"use strict";var n=r(5061);t.exports=function(t,e,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?e(n("Request failed with status code "+r.status,r.config,null,r.request,r)):t(r)}},8527:function(t,e,r){"use strict";var n=r(4867),o=r(5655);t.exports=function(t,e,r){var i=this||o;return n.forEach(r,(function(r){t=r.call(i,t,e)})),t}},5655:function(t,e,r){"use strict";var n=r(4867),o=r(6016),i=r(481),a={"Content-Type":"application/x-www-form-urlencoded"};function s(t,e){!n.isUndefined(t)&&n.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var u,c={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(u=r(5448)),u),transformRequest:[function(t,e){return o(e,"Accept"),o(e,"Content-Type"),n.isFormData(t)||n.isArrayBuffer(t)||n.isBuffer(t)||n.isStream(t)||n.isFile(t)||n.isBlob(t)?t:n.isArrayBufferView(t)?t.buffer:n.isURLSearchParams(t)?(s(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):n.isObject(t)||e&&"application/json"===e["Content-Type"]?(s(e,"application/json"),function(t,e,r){if(n.isString(t))try{return(e||JSON.parse)(t),n.trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(r||JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){var e=this.transitional,r=e&&e.silentJSONParsing,o=e&&e.forcedJSONParsing,a=!r&&"json"===this.responseType;if(a||o&&n.isString(t)&&t.length)try{return JSON.parse(t)}catch(t){if(a){if("SyntaxError"===t.name)throw i(t,this,"E_JSON_PARSE");throw t}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(t){return t>=200&&t<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},n.forEach(["delete","get","head"],(function(t){c.headers[t]={}})),n.forEach(["post","put","patch"],(function(t){c.headers[t]=n.merge(a)})),t.exports=c},1849:function(t){"use strict";t.exports=function(t,e){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return t.apply(e,r)}}},5327:function(t,e,r){"use strict";var n=r(4867);function o(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,r){if(!e)return t;var i;if(r)i=r(e);else if(n.isURLSearchParams(e))i=e.toString();else{var a=[];n.forEach(e,(function(t,e){null!=t&&(n.isArray(t)?e+="[]":t=[t],n.forEach(t,(function(t){n.isDate(t)?t=t.toISOString():n.isObject(t)&&(t=JSON.stringify(t)),a.push(o(e)+"="+o(t))})))})),i=a.join("&")}if(i){var s=t.indexOf("#");-1!==s&&(t=t.slice(0,s)),t+=(-1===t.indexOf("?")?"?":"&")+i}return t}},7303:function(t){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},4372:function(t,e,r){"use strict";var n=r(4867);t.exports=n.isStandardBrowserEnv()?{write:function(t,e,r,o,i,a){var s=[];s.push(t+"="+encodeURIComponent(e)),n.isNumber(r)&&s.push("expires="+new Date(r).toGMTString()),n.isString(o)&&s.push("path="+o),n.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},1793:function(t){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},6268:function(t){"use strict";t.exports=function(t){return"object"==typeof t&&!0===t.isAxiosError}},7985:function(t,e,r){"use strict";var n=r(4867);t.exports=n.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(t){var n=t;return e&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return t=o(window.location.href),function(e){var r=n.isString(e)?o(e):e;return r.protocol===t.protocol&&r.host===t.host}}():function(){return!0}},6016:function(t,e,r){"use strict";var n=r(4867);t.exports=function(t,e){n.forEach(t,(function(r,n){n!==e&&n.toUpperCase()===e.toUpperCase()&&(t[e]=r,delete t[n])}))}},4109:function(t,e,r){"use strict";var n=r(4867),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,r,i,a={};return t?(n.forEach(t.split("\n"),(function(t){if(i=t.indexOf(":"),e=n.trim(t.substr(0,i)).toLowerCase(),r=n.trim(t.substr(i+1)),e){if(a[e]&&o.indexOf(e)>=0)return;a[e]="set-cookie"===e?(a[e]?a[e]:[]).concat([r]):a[e]?a[e]+", "+r:r}})),a):a}},8713:function(t){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},4875:function(t,e,r){"use strict";var n=r(696),o={};["object","boolean","number","function","string","symbol"].forEach((function(t,e){o[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}}));var i={},a=n.version.split(".");function s(t,e){for(var r=e?e.split("."):a,n=t.split("."),o=0;o<3;o++){if(r[o]>n[o])return!0;if(r[o]<n[o])return!1}return!1}o.transitional=function(t,e,r){var o=e&&s(e);function a(t,e){return"[Axios v"+n.version+"] Transitional option '"+t+"'"+e+(r?". "+r:"")}return function(r,n,s){if(!1===t)throw new Error(a(n," has been removed in "+e));return o&&!i[n]&&(i[n]=!0,console.warn(a(n," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(r,n,s)}},t.exports={isOlderVersion:s,assertOptions:function(t,e,r){if("object"!=typeof t)throw new TypeError("options must be an object");for(var n=Object.keys(t),o=n.length;o-- >0;){var i=n[o],a=e[i];if(a){var s=t[i],u=void 0===s||a(s,i,t);if(!0!==u)throw new TypeError("option "+i+" must be "+u)}else if(!0!==r)throw Error("Unknown option "+i)}},validators:o}},4867:function(t,e,r){"use strict";var n=r(1849),o=Object.prototype.toString;function i(t){return"[object Array]"===o.call(t)}function a(t){return void 0===t}function s(t){return null!==t&&"object"==typeof t}function u(t){if("[object Object]"!==o.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype}function c(t){return"[object Function]"===o.call(t)}function l(t,e){if(null!=t)if("object"!=typeof t&&(t=[t]),i(t))for(var r=0,n=t.length;r<n;r++)e.call(null,t[r],r,t);else for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.call(null,t[o],o,t)}t.exports={isArray:i,isArrayBuffer:function(t){return"[object ArrayBuffer]"===o.call(t)},isBuffer:function(t){return null!==t&&!a(t)&&null!==t.constructor&&!a(t.constructor)&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)},isFormData:function(t){return"undefined"!=typeof FormData&&t instanceof FormData},isArrayBufferView:function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isObject:s,isPlainObject:u,isUndefined:a,isDate:function(t){return"[object Date]"===o.call(t)},isFile:function(t){return"[object File]"===o.call(t)},isBlob:function(t){return"[object Blob]"===o.call(t)},isFunction:c,isStream:function(t){return s(t)&&c(t.pipe)},isURLSearchParams:function(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:l,merge:function t(){var e={};function r(r,n){u(e[n])&&u(r)?e[n]=t(e[n],r):u(r)?e[n]=t({},r):i(r)?e[n]=r.slice():e[n]=r}for(var n=0,o=arguments.length;n<o;n++)l(arguments[n],r);return e},extend:function(t,e,r){return l(e,(function(e,o){t[o]=r&&"function"==typeof e?n(e,r):e})),t},trim:function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")},stripBOM:function(t){return 65279===t.charCodeAt(0)&&(t=t.slice(1)),t}}},696:function(t){"use strict";t.exports=JSON.parse('{"name":"axios","version":"0.21.4","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://axios-http.com","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.14.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}],"_resolved":"https://registry.npmjs.org/axios/-/axios-0.21.4.tgz","_integrity":"sha512-ut5vewkiu8jjGBdqpM44XxjuCjq9LAKeHVmoVfHVzy8eHgxxq8SbAVQNovDA8mVi05kP0Ea/n/UzcSHcTJQfNg==","_from":"axios@0.21.4"}')},3213:function(t,e,r){"use strict";r.d(e,{default:function(){return Wt}});r(5666);var n=40,o=38,i=46,a=13,s=27,u=8,c="FUZZY_SEARCH",l="AUTOCOMPLETE",f="brand",p="category",d={ic_map_poi_066:[9361067,9361050],ic_map_poi_048:[9374],ic_map_poi_047:[9373,9373002,9373003,9361038],ic_map_poi_115:[7391],ic_map_poi_116:[9663,9663005,9663004,9663003,9663002],ic_map_poi_021:[7321,7321005,7321004,7321003,7321002,7321005,7321004,7321003],ic_map_poi_054:[7326],ic_map_poi_049:[9375],ic_map_poi_117:[9153],ic_map_poi_120:[9376,9376002,9376006,9376004,9376007,9376003,9376005,9379004,9379006,7315039,7315143,7315039,9379007],ic_map_poi_074:[7315015],ic_map_poi_079:[7315012],ic_map_poi_031:[7315,7315081,7315002,7315082,7315003,7315083,7315084,7315085,7315062,7315086,7315004,7315146,7315005,7315087,7315006,7315007,7315088,7315089,7315072,7315008,7315142,7315090,7315091,7315147,7315009,7315092,7315010,7315011,7315070,7315093,7315012,7315094,7315095,7315063,7315013,7315096,7315097,7315068,7315098,7315099,7315057,7315079,7315014,7315100,7315101,7315132,7315102,7315133,7315015,7315016,7315104,7315134,7315017,7315071,7315018,7315019,7315020,7315054,7315069,7315021,7315058,7315052,7315022,7315078,7315023,7315024,7315073,7315105,7315065,7315106,7315025,7315066,7315026,7315027,7315028,7315067,7315029,7315030,7315107,7315135,7315108,7315031,7315109,7315032,7315033,7315034,7315110,7315074,7315136,7315111,7315112,7315075,7315035,7315127,7315061,7315036,7315037,7315129,7315038,7315130,7315039,7315041,7315131,7315040,7315143,7315042,7315113,7315114,7315115,7315043,7315053,7315055,7315056,7315116,7315117,7315080,7315139,7315064,7315140,7315044,7315045,7315118,7315046,7315148,7315119,7315047,7315120,7315059,7315145,7315076,7315121,7315048,7315122,7315123,7315049,7315124,7315050,7315125,7315051,7315126,7315060,7315149],ic_map_poi_057:[7349],ic_map_poi_041:[7377,7377002,7377003,7372009],ic_map_poi_085:[9361064,9361048],ic_map_poi_070:[7372,7372012,7372003,7372015,7372016,7372006,7372010,7372014,7372004,7372005,7372002,7372007,7372013,7372011,7372009,7372008],ic_map_poi_133:[],ic_map_poi_132:[7376002],ic_map_poi_010:[7339002],ic_map_poi_081:[7363],ic_map_poi_015:[9363],ic_map_poi_040:[7365],ic_map_poi_077:[7328],ic_map_poi_068:[7392],ic_map_poi_000:[7367],"ic_map_poi_---":[9154],ic_map_poi_065:[9352023],ic_map_poi_064:[9352023],ic_map_poi_052:[9913],ic_map_poi_106:[9388],ic_map_poi_134:[9152],ic_map_poi_027:[7339,7339007,7339002,7339006,7339003,7339008,7339004,7339005],ic_map_poi_039:[7322],ic_map_poi_097:[9932,9932002,9932003,9932004,9932006,9932005],ic_map_poi_100:[9157],ic_map_poi_113:[9151],ic_map_poi_102:[7378],ic_map_poi_053:[7310,7310002,7310003,7310004,7310008,7310005,7310006,7310009,7310007,7310004,7310006],ic_map_poi_042:[7397],ic_map_poi_098:[9382],ic_map_poi_013:[9352,9352003,9352012,9352034,9352045,9352013,9352041,9352035,9352025,9352027,9352039,9352040,9352043,9352014,9352029,9352004,9352005,9352032,9352006,9352038,9352036,9352044,9352042,9352007,9352037,9352023,9352008,9352011,9352016,9352031,9352033,9352021,9352030,9352018,9352017,9352019,9352009,9352010,9352002,9352022,9352026,9352020,9352024,9352046,9352015],ic_map_poi_080:[9361009],ic_map_poi_104:[7327],ic_map_poi_096:[9160,9160003,9160002],ic_map_poi_091:[],ic_map_poi_092:[7311],ic_map_poi_118:[7332,7332004,7332002,7332003,7332005,9361020,9361021],ic_map_poi_101:[9158],ic_map_poi_105:[9159],ic_map_poi_028:[7324,7324002,7324003],ic_map_poi_029:[7312],ic_map_poi_032:[9361,9361073,9361048,9361049,9361058,9361067,9361050,9361072,9361083,9361002,9361003,9361044,9361082,9361004,9361005,9361006,9361007,9361079,9361008,9361042,9361009,9361060,9361076,9361051,9361010,9361052,9361011,9361012,9361013,9361014,9361016,9361017,9361018,9361019,9361020,9361021,9361022,9361023,9361024,9361025,9361054,9361026,9361055,9361027,9361069,9361053,9361028,9361029,9361030,9361031,9361032,9361080,9361033,9361034,9361035,9361036,9361045,9361056,9361071,9361065,9361043,9361075,9361059,9361068,9361037,9361038,9361070,9361064,9361046,9361047,9361015,9361057,9361063,9361078,9361062,9361061,9361039,9361074,9361077,9361040,9361041,9361081,9361066],ic_map_poi_033:[7373],ic_map_poi_082:[9352020,9352040],ic_map_poi_126:[7301,7301002],ic_map_poi_119:[],ic_map_poi_088:[9902,9902002,9902003,9902004],ic_map_poi_009:[7341],ic_map_poi_087:[],ic_map_poi_011:[7342,7342003,7342003],ic_map_poi_131:[9937,9937002,9937003],ic_map_poi_014:[7318002],ic_map_poi_060:[9377],ic_map_poi_121:[],ic_map_poi_061:[9378,9378002,9378003,9378004,9378005,9378006],ic_map_poi_050:[9379,9379004,9379006,9379009,9379002,9379008,9379010,9379003,9379007],ic_map_poi_026:[7318004],ic_map_poi_072:[],ic_map_poi_034:[7374,7374002,7374009,7374012,7374003,7374010,7374005,7374008,7374011,7374006,7374014,7374013,7374007,7374004],ic_map_poi_056:[7338],ic_map_poi_035:[7318,7318007,7318006,7318002,7318008,7318003,7318004,7318005,7318006],ic_map_poi_037:[9927003,9927,9927004,9927002,9927005,9927003],ic_map_poi_016:[7319],ic_map_poi_017:[9377],ic_map_poi_025:[7317],ic_map_poi_058:[7360,7360003,7360002],ic_map_poi_083:[],ic_map_poi_130:[7304,7304006,7304004,7304005,7304002,7304003],ic_map_poi_022:[7314,7314002,7314007,7314004,7314003,7314006,7314005,7314008,7314003],ic_map_poi_078:[],ic_map_poi_107:[7335,7335004,7335002,7335003,9361073,9352012],ic_map_poi_095:[9383],ic_map_poi_099:[9156,9352011],ic_map_poi_036:[7316],ic_map_poi_114:[9910,9910009,9910004,9910008,9910002,9910003,9910005,9910006,9910007],ic_map_poi_008:[9910002],ic_map_poi_067:[9155,9155003],ic_map_poi_004:[],ic_map_poi_076:[7368],ic_map_poi_219:[9910006],ic_map_poi_019:[7366,7389,7389002,7389004,7389003],ic_map_poi_110:[7366,7389,7389002,7389004,7389003],ic_map_poi_007:[7383,7383005,7383004,7383003,7383002],ic_map_poi_069:[9942002],ic_map_poi_109:[],ic_map_poi_073:[7309],ic_map_poi_018:[7352],ic_map_poi_123:[7308],ic_map_poi_137:[],ic_map_poi_005:[7380,7380004,7380002,7380005,7380003,7380006,7380002,7380003],ic_map_poi_084:[],ic_map_poi_129:[],ic_map_poi_128:[],ic_map_poi_112:[7358],ic_map_poi_111:[7359,7359003],ic_map_poi_089:[],ic_map_poi_002:[7369,7369002],ic_map_poi_003:[7313],ic_map_poi_030:[9930],ic_map_poi_071:[7358],ic_map_poi_043:[9357,9937002],ic_map_poi_127:[8099,8099016,8099020,8099003,8099017,8099005,8099018,8099025,8099022,8099019,8099027,8099023,8099021,8099002,8099011,8099009,8099007,8099008,8099026,8099015,8099014,8099013,8099004,8099024,8099012,8099006,8099010],ic_map_poi_090:[],ic_map_poi_023:[7376,7376012,7376010,7376002,7376007,7376011,7376003,7376005,7376006,7376013,7376009,7376008,7376014,7376004],ic_map_poi_062:[7347,7347002,7347003,7347003],ic_map_poi_024:[],ic_map_poi_001:[],ic_map_poi_125:[9389],ic_map_poi_059:[9362,9362002,9362032,9362003,9362017,9362016,9362015,9362004,9362005,9362006,9362007,9362030,9362025,9362008,9362009,9362033,9362010,9362011,9362013,9362026,9362014,9362036],ic_map_poi_006:[7395],ic_map_poi_055:[7337,9362036],ic_map_poi_124:[7302,7302003,7302004,7302002,7302006,7302005],ic_map_poi_122:[7305],ic_map_poi_020:[9911],ic_map_poi_044:[9360],ic_map_poi_038:[7320,7320002,7320003,7320005],ic_map_poi_045:[9369],ic_map_poi_046:[9371,9378006],ic_map_poi_012:[],ic_map_poi_998:[],ic_map_poi_093:[],ic_map_poi_999:[],ic_map_poi_063:[],ic_map_poi_108:[9150],ic_map_poi_103:[7303,7303006,7303003,7303004,7303002,7303005],ic_map_poi_075:[],ic_map_address:[8099,8099016,8099020,8099003,8099017,8099005,8099018,8099025,8099022,8099019,8099027,8099023,8099021,8099002,8099011,8099009,8099007,8099008,8099026,8099015,8099014,8099013,8099004,8099024,8099012,8099006,8099010]},h={"#E6655A":[9361067,9361050,9374,9373,9373002,9373003,9361038,7391,9663,9663005,9663004,9663003,9663002,7321,7321005,7321004,7321003,7321002,7321005,7321004,7321003,7326,9375,9153],"#F08A3F":[9376,9376002,9376006,9376004,9376007,9376003,9376005,9379004,9379006,7315039,7315143,7315039,9379007,7315015,7315012,7315,7315081,7315002,7315082,7315003,7315083,7315084,7315085,7315062,7315086,7315004,7315146,7315005,7315087,7315006,7315007,7315088,7315089,7315072,7315008,7315142,7315090,7315091,7315147,7315009,7315092,7315010,7315011,7315070,7315093,7315012,7315094,7315095,7315063,7315013,7315096,7315097,7315068,7315098,7315099,7315057,7315079,7315014,7315100,7315101,7315132,7315102,7315133,7315015,7315016,7315104,7315134,7315017,7315071,7315018,7315019,7315020,7315054,7315069,7315021,7315058,7315052,7315022,7315078,7315023,7315024,7315073,7315105,7315065,7315106,7315025,7315066,7315026,7315027,7315028,7315067,7315029,7315030,7315107,7315135,7315108,7315031,7315109,7315032,7315033,7315034,7315110,7315074,7315136,7315111,7315112,7315075,7315035,7315127,7315061,7315036,7315037,7315129,7315038,7315130,7315039,7315041,7315131,7315040,7315143,7315042,7315113,7315114,7315115,7315043,7315053,7315055,7315056,7315116,7315117,7315080,7315139,7315064,7315140,7315044,7315045,7315118,7315046,7315148,7315119,7315047,7315120,7315059,7315145,7315076,7315121,7315048,7315122,7315123,7315049,7315124,7315050,7315125,7315051,7315126,7315060,7315149,7349],"#BEB2A2":[7377,7377002,7377003,7372009,9361064,9361048,7372,7372012,7372003,7372015,7372016,7372006,7372010,7372014,7372004,7372005,7372002,7372007,7372013,7372011,7372009,7372008],"#A9909E":[7376002,7339002,7363,9363,7365,7328,7392,7367,9154,9352023,9352023,9913,9388,9152,7339,7339007,7339002,7339006,7339003,7339008,7339004,7339005,7322,9932,9932002,9932003,9932004,9932006,9932005,9157,9151],"#C272D0":[7378,7310,7310002,7310003,7310004,7310008,7310005,7310006,7310009,7310007,7310004,7310006,7397,9382,9352,9352003,9352012,9352034,9352045,9352013,9352041,9352035,9352025,9352027,9352039,9352040,9352043,9352014,9352029,9352004,9352005,9352032,9352006,9352038,9352036,9352044,9352042,9352007,9352037,9352023,9352008,9352011,9352016,9352031,9352033,9352021,9352030,9352018,9352017,9352019,9352009,9352010,9352002,9352022,9352026,9352020,9352024,9352046,9352015,9361009,7327,9160,9160003,9160002,7311,7332,7332004,7332002,7332003,7332005,9361020,9361021,9158,9159,7324,7324002,7324003,7312,9361,9361073,9361048,9361049,9361058,9361067,9361050,9361072,9361083,9361002,9361003,9361044,9361082,9361004,9361005,9361006,9361007,9361079,9361008,9361042,9361009,9361060,9361076,9361051,9361010,9361052,9361011,9361012,9361013,9361014,9361016,9361017,9361018,9361019,9361020,9361021,9361022,9361023,9361024,9361025,9361054,9361026,9361055,9361027,9361069,9361053,9361028,9361029,9361030,9361031,9361032,9361080,9361033,9361034,9361035,9361036,9361045,9361056,9361071,9361065,9361043,9361075,9361059,9361068,9361037,9361038,9361070,9361064,9361046,9361047,9361015,9361057,9361063,9361078,9361062,9361061,9361039,9361074,9361077,9361040,9361041,9361081,9361066,7373,9352020,9352040,7301,7301002],"#ED73BE":[9902,9902002,9902003,9902004,7341,7342,7342003,7342003,9937,9937002,9937003,7318002,9377,9378,9378002,9378003,9378004,9378005,9378006,9379,9379004,9379006,9379009,9379002,9379008,9379010,9379003,9379007,7318004,7374,7374002,7374009,7374012,7374003,7374010,7374005,7374008,7374011,7374006,7374014,7374013,7374007,7374004,7338,7318,7318007,7318006,7318002,7318008,7318003,7318004,7318005,7318006,9927003,9927,9927004,9927002,9927005,9927003,7319,9377,7317],"9088DA":[7360,7360003,7360002,7304,7304006,7304004,7304005,7304002,7304003,7314,7314002,7314007,7314004,7314003,7314006,7314005,7314008,7314003],"9496B4":[7335,7335004,7335002,7335003,9361073,9352012,9383,9156,9352011,7316],"2D81C6":[9910,9910009,9910004,9910008,9910002,9910003,9910005,9910006,9910007,9910002,9155,9155003,7368,9910006,7366,7389,7389002,7389004,7389003,7366,7389,7389002,7389004,7389003,7383,7383005,7383004,7383003,7383002,9942002,7309,7352,7308,7380,7380004,7380002,7380005,7380003,7380006,7380002,7380003,7358,7359,7359003],"#2BAEFF":[7369,7369002,7313,9930,7358],"#1FB18E":[9357,9937002,8099,8099016,8099020,8099003,8099017,8099005,8099018,8099025,8099022,8099019,8099027,8099023,8099021,8099002,8099011,8099009,8099007,8099008,8099026,8099015,8099014,8099013,8099004,8099024,8099012,8099006,8099010,7376,7376012,7376010,7376002,7376007,7376011,7376003,7376005,7376006,7376013,7376009,7376008,7376014,7376004,7347,7347002,7347003,7347003,9389,9362,9362002,9362032,9362003,9362017,9362016,9362015,9362004,9362005,9362006,9362007,9362030,9362025,9362008,9362009,9362033,9362010,9362011,9362013,9362026,9362014,9362036,7395,7337,9362036,7302,7302003,7302004,7302002,7302006,7302005,7305,9911,9360,7320,7320002,7320003,7320005,9369,9371,9378006],"#999A9B":[9150,7303,7303006,7303003,7303004,7303002,7303005,8099,8099016,8099020,8099003,8099017,8099005,8099018,8099025,8099022,8099019,8099027,8099023,8099021,8099002,8099011,8099009,8099007,8099008,8099026,8099015,8099014,8099013,8099004,8099024,8099012,8099006,8099010]},_='\n    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13" viewBox="0 0 15 13">\n    <path d="M15.512418,11.5 L19.9637666,7.28870352 C20.1223719,7.13865149 20.1223719,6.89512441 19.9637666,6.74507238 L18.2390424,5.11253903 C18.0795704,4.96248699 17.8221618,4.96248699 17.6635565,5.11253903 L13.2122078,9.3238355 L8.7608592,5.11253903 C8.68545669,5.04120281 8.58145321,5.00020499 8.47398296,5.00020499 C8.36564601,5.00020499 8.26250923,5.04120281 8.18624002,5.11253903 L6.46064906,6.74507238 C6.38437985,6.81722855 6.34191176,6.91480337 6.34191176,7.01729793 C6.34191176,7.11979249 6.38437985,7.21736731 6.46064906,7.28952348 L10.9119977,11.5 L6.46064906,15.7112965 C6.38437985,15.7834526 6.34191176,15.8810275 6.34191176,15.9827021 C6.34191176,16.0851966 6.38437985,16.1827715 6.46064906,16.2549276 L8.18624002,17.887461 C8.26250923,17.9596171 8.36564601,17.999795 8.47398296,17.999795 C8.58145321,17.999795 8.68545669,17.9596171 8.7608592,17.887461 L13.2122078,13.6761645 L17.6635565,17.887461 C17.8221618,18.037513 18.0795704,18.037513 18.2390424,17.887461 L19.9637666,16.2549276 C20.1223719,16.1048756 20.1223719,15.8613485 19.9637666,15.7112965 L15.512418,11.5 Z" transform="translate(-5.544 -5)"/>\n    </svg>';function m(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==s.return||s.return()}finally{if(o)throw i}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return y(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function v(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function g(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function b(t,e,r){return e&&g(t.prototype,e),r&&g(t,r),t}function w(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var j=function(){function t(e,r,n,o,i){var a=this;v(this,t),w(this,"_onSelect",(function(){a._actions.onResultSelected(a._index)})),w(this,"_searchInMapping",(function(t,e){var r;for(var n in e)if(e[n].includes(parseInt(t,10))){r=n;break}return r})),w(this,"_getResultIconName",(function(){var t="ic_map_poi_address";return"FUZZY_SEARCH"===a._type&&"POI"===a._result.type&&(t=a._searchInMapping(a._result.poi.categorySet[0].id,d)),t})),w(this,"_getSuggestionIconName",(function(t,e){var r="ic_map_poi_address";return r="category"===t?a._searchInMapping(e.id,d)||r:"ic_map_poi_brand"})),w(this,"_getSuggestionColor",(function(t,e){var r="#999A9B";return r="category"===t?a._searchInMapping(e.id,h)||r:"#BBBBBB"})),this._options=n,this._actions=o,this._result=e,this._type=r,this._index=i,this._createResultElement()}return b(t,[{key:"getContainer",value:function(){return this._container}},{key:"_getAddressLines",value:function(){var t=this._result,e=t.address,r=t.poi,n=t.type;if("Point Address"===n||"Address Range"===n||"Cross Street"===n)return[e.freeformAddress,"".concat(e.municipality,", ").concat(e.country)];if("POI"===n)return[r.name,e.freeformAddress];if("Street"===n)return[e.streetName,"".concat(e.postalCode," ").concat(e.municipality)];if("Geography"!==n)return[e.freeformAddress];switch(this._result.entityType){case"Municipality":return[e.municipality,e.country];case"MunicipalitySubdivision":return[e.municipalitySubdivision,e.municipality];case"Country":return[e.country,e.country];case"CountrySubdivision":return[e.countrySubdivision,e.country];default:return[e.freeformAddress]}}},{key:"_createResultElement",value:function(){var t=this;this._container=document.createElement("div"),this._container.onmousedown=function(t){return t.preventDefault()},this._container.onclick=this._onSelect,this._container.className="tt-search-box-result-list",this._container.setAttribute("data-testid","result-item");var e,r=function(t){return'<span class="tt-search-box-result-list-bold">'.concat(t,"</span>")},n=function(t){return'<div class="tt-search-box-result-list-text-content">'.concat(t,"</div>")};switch(this._type){case c:var o=m(this._getAddressLines(),2),i=o[0],a=o[1];this._container.innerHTML='\n                <div class="tt-search-box-result-list-address">\n                    '.concat((e=this._getResultIconName(),'<div class="tt-icon-searchbox-'.concat(e,' tt-search-box-result-category-icon"></div>')),"\n                    ").concat(r(i),"\n                    ").concat(a?n("".concat(a)):"","\n                </div>\n            "),this._options.distanceFromPoint&&(this._container.innerHTML+='<div class="tt-search-box-result-list-distance">'.concat(this._getDistance(),"</div>"));break;case l:var s=this._getSuggestionName(),u=this._getSuggestionType();if(s&&u){var f="plaintext"===u?"":" ".concat(this._options.labels.suggestions[u]);this._container.innerHTML='\n                    <span class="tt-search-box-result-list-text-suggestion">\n                        '.concat(function(e,r){var n=t._getSuggestionIconName(e,r),o=t._getSuggestionColor(e,r);return'<div class="tt-icon-searchbox-suggestion-'.concat(n,"\n                tt-search-box-result-suggestion-icon -").concat(e,'" style="background-color: ').concat(o,'">\n            </div>')}(u,this._result),"\n                        ").concat(r(s),"\n                        ").concat(n(f),'\n                    </span>\n                    <div class="tt-search-box-result-list-suggestion-arrow">\n                        ').concat('\n    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n        <title>arrow_pasteSVG/</title>\n        <g id="arrow_paste" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n            <path d="M17.7071,16.2929 C18.0976,16.6834 18.0976,17.3166 17.7071,17.7071 C17.3166,18.0976 16.6834,18.0976 16.2929,17.7071 L17.7071,16.2929 Z M6,7 C6,6.44771 6.44771,6 7,6 L14,6 C14.5523,6 15,6.44771 15,7 C15,7.55228 14.5523,8 14,8 L8,8 L8,15 C8,15.5523 7.55228,16 7,16 C6.44771,16 6,15.5523 6,15 L6,7 Z M16.29289,17.7071 L6.29289,7.70711 L7.70711,6.29289 L17.7071,16.29289 L16.29289,17.7071 Z" id="Shape" fill="#373737" fill-rule="nonzero"></path>\n        </g>\n    </svg>',"\n                    </div>")}}}},{key:"_getDistance",value:function(){var t=this._result.dist,e="kilometers"===this._options.units?"km":"mi";return"".concat(("km"===e?t/1e3:621371e-9*t).toFixed(1)," ").concat(e)}},{key:"_getSuggestionName",value:function(){return this._result.value?this._result.value:null}},{key:"_getSuggestionType",value:function(){return this._result.type?this._result.type:null}}]),t}(),x=function(){function t(e){v(this,t),this._container=document.createElement("div"),this._container.className="tt-search-box-result-list",this._container.innerText=e}return b(t,[{key:"select",value:function(){}},{key:"getContainer",value:function(){return this._container}}]),t}(),O={resultListElement:function(t,e,r,n,o,i){return new j(t,e,r,n,o,i)},noResultsListElement:function(t){return new x(t)}};function S(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var E=function t(e,r,n){var o=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),S(this,"_setVisibility",(function(t){t?o._container.removeAttribute("hidden"):o._container.setAttribute("hidden",!0)})),S(this,"_convertSearchResponseToListElements",(function(t){var e=o.store.getCurrentState().options;return t.length?t.map((function(t,r){return O.resultListElement(t.result,t.type,e,o.actions,r)})):[O.noResultsListElement(e.labels.noResultsMessage)]})),S(this,"_clearResults",(function(){for(;o._container.firstChild;)o._container.removeChild(o._container.firstChild),o._container.style.height="0px"})),S(this,"_updateHighlightedElementStyle",(function(t,e){var r=o._container.childNodes[e];r&&(r.classList[t]("-highlighted"),"add"===t&&function(t,e,r){(!r||r&&!function(t,e){var r=t.scrollTop,n=r+t.clientHeight,o=e.offsetTop,i=o+e.clientHeight;return o>=r&&i<=n}(t,e))&&(t.scrollTop=e.offsetTop-t.offsetTop)}(o._container,r,!0))})),S(this,"_appendResults",(function(t){o._clearResults();var e=o._convertSearchResponseToListElements(t);e.forEach((function(t){var r=e[e.indexOf(t)-1];t._type===c&&r&&r._type===l&&r._container.classList.add("suggestion"),o._container.appendChild(t.getContainer())}),o),o._container.style.height="auto"})),S(this,"update",(function(){var t=o.store.getCurrentState(),e=t.resultData,r=t.showResultList,n=t.resultIndexPosition;o._setVisibility(r),e?(o._appendResults(e),o._updateHighlightedElementStyle(-1!==n?"add":"remove",n)):o._clearResults()})),this.actions=n,this.store=r,this._container=document.createElement("div"),this._container.className="tt-search-box-result-list-container",this._container.setAttribute("hidden",!0),e.appendChild(this._container)},A=r(1296),C=r.n(A);function P(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var R=function t(e,r,c){var l=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),P(this,"_create",(function(){l._inputContainer=document.createElement("div"),l._inputContainer.className="tt-search-box-input-container",l._inputContainer.onmousedown=function(t){return t.preventDefault()},l._inputContainer.oninput=C()((function(){l._enterKeyPressed||l.actions.runQuery(!1,!0)}),l.store.getCurrentState().options.idleTimePress),l._inputContainer.addEventListener("input",(function(t){return l.actions.setNewValue(t.target.value)})),l._inputContainer.onkeydown=l._onKeyDown,l._addSearchIcon(),l._addFilter(),l._addInput(),l._addClearIcon()})),P(this,"_addSearchIcon",(function(){l.store.getCurrentState().options.showSearchButton&&(l._searchIcon=document.createElement("div"),l._searchIcon.innerHTML='\n    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n            <path d="M10.5,4 C14.0898509,4 17,6.91014913 17,10.5 C17,11.9337106 16.5358211,13.2590065 15.7495478,14.3338028 L19.7071068,18.2928932 C20.0976311,18.6834175 20.0976311,19.3165825 19.7071068,19.7071068 C19.3165825,20.0976311 18.6834175,20.0976311 18.2928932,19.7071068 L14.3338028,15.7495478 C13.2590065,16.5358211 11.9337106,17 10.5,17 C6.91014913,17 4,14.0898509 4,10.5 C4,6.91014913 6.91014913,4 10.5,4 Z M10.5,6 C8.01471863,6 6,8.01471863 6,10.5 C6,12.9852814 8.01471863,15 10.5,15 C12.9852814,15 15,12.9852814 15,10.5 C15,8.01471863 12.9852814,6 10.5,6 Z" id="Shape"></path>\n    </svg>',l._inputContainer.appendChild(l._searchIcon))})),P(this,"_addFilter",(function(){l._filter=document.createElement("div"),l._filter.classList.add("tt-searchbox-filter-label"),l._filter.setAttribute("style","display: none;"),l._filterText=document.createElement("div"),l._filterText.classList.add("tt-searchbox-filter-label__text"),l._filterRemoveButton=document.createElement("div"),l._filterRemoveButton.classList.add("tt-searchbox-filter-label__close-button"),l._filterRemoveButton.innerHTML=_,l._filter.appendChild(l._filterText),l._filter.appendChild(l._filterRemoveButton),l._inputContainer.appendChild(l._filter)})),P(this,"_addInput",(function(){l._input=document.createElement("input"),l._input.className="tt-search-box-input",l._setPlaceholder(),l._input.onmousedown=function(t){return t.stopPropagation()},l._input.onfocus=function(){return l.actions.updateFocus(!0)},l._input.onblur=function(){return l.actions.updateFocus(!1)},l._inputContainer.appendChild(l._input)})),P(this,"_indicateFilterRemoval",(function(t){l._filter.classList.toggle("-highlighted",t),l._isDeletionConfirmed=t})),P(this,"_onBackspaceOrDelete",(function(t){var e=l.store.getCurrentState().filter,r=0===l._input.selectionStart,n=l._input.selectionEnd-l._input.selectionStart,o=0!==n&&n===l._input.value.length;r&&e&&(l._isDeletionConfirmed?(l._indicateFilterRemoval(!1),l.actions.onClearFilterClick()):!o&&t&&l._indicateFilterRemoval(!0))})),P(this,"_onKeyDown",(function(t){var e=t.keyCode||t.which,r=e===u||e===i,c=e===u;l._enterKeyPressed=!1,c||l._indicateFilterRemoval(!1),r&&l._onBackspaceOrDelete(c),e!==o&&e!==n||(t.preventDefault(),l._onArrowUpDownPress(e)),e===a&&(t.preventDefault(),l._enterKeyPressed=!0,l.actions.onEnterKeyPress()),e===s&&(t.preventDefault(),l.actions.onEscKeyPress())})),P(this,"_onArrowUpDownPress",(function(t){var e,r=l.store.getCurrentState(),n=r.resultIndexPosition,i=r.resultData,a=void 0===i?[]:i;t===o&&-1===n||!a.length||(e=t===o?n-1<0?-1:n-1:n+1>=a.length?0:n+1,l.actions.updateOnArrowPress(e))})),P(this,"_addClearIcon",(function(){l._closeIcon=document.createElement("div"),l._closeIcon.className="tt-search-box-close-icon -hidden",l._closeIcon.innerHTML=_,l._inputContainer.appendChild(l._closeIcon),l._closeIcon.onclick=function(){l._indicateFilterRemoval(!1),l.actions.onClearClick()}})),P(this,"_setPlaceholder",(function(){var t=l.store.getCurrentState().options;l._input.setAttribute("placeholder",t.labels.placeholder)})),P(this,"_updateFilter",(function(t){l._filterText.innerText=t.text,l._filter.setAttribute("style","display: flex"),l._filterRemoveButton.onclick=function(){l._indicateFilterRemoval(!1),l.actions.onClearFilterClick()}})),P(this,"update",(function(){var t=l.store.getCurrentState(),e=t.resultData,r=t.value,n=void 0===r?"":r,o=t.filter,i=t.isFocused;l._input.value!==n&&(l._input.value=n),l._closeIcon.classList[e||n.length||o?"remove":"add"]("-hidden"),l._setPlaceholder(),l._input[i?"focus":"blur"](),l._inputContainer.classList[i?"add":"remove"]("-focused"),o?l._updateFilter(o):l._filter.setAttribute("style","display: none;"),l._indicateFilterRemoval(l._isDeletionConfirmed)})),this.actions=c,this.store=r,this._create(),e.appendChild(this._inputContainer),this._isDeletionConfirmed=!1,this._enterKeyPressed=!1};r.p;function T(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function k(t){return function(t){if(Array.isArray(t))return L(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return L(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return L(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function I(t,e,r){var n=t[e];n||(n=[],t[e]=n),n.push(r)}function F(t,e,r){var n=t[e];return n&&n.forEach((function(t){t.apply(void 0,k(r))})),n}var D=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.eventToHandlersMap={},this.onceEventToHandlersMap={}}var e,r,n;return e=t,(r=[{key:"fire",value:function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];F(this.eventToHandlersMap,t,r),F(this.onceEventToHandlersMap,t,r)&&delete this.onceEventToHandlersMap[t]}},{key:"on",value:function(t,e){I(this.eventToHandlersMap,t,e)}},{key:"off",value:function(t){t?(delete this.eventToHandlersMap[t],delete this.onceEventToHandlersMap[t]):(this.eventToHandlersMap={},this.onceEventToHandlersMap={})}},{key:"once",value:function(t,e){I(this.onceEventToHandlersMap,t,e)}}])&&T(e.prototype,r),n&&T(e,n),t}();function N(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return M(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return M(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return a=t.done,t},e:function(t){s=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(s)throw i}}}}function M(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function B(t){var e,r=!1,n=N(document.styleSheets);try{for(n.s();!(e=n.n()).done;){var o=e.value.href;if(o&&-1!==o.indexOf(t)){r=!0;break}}}catch(t){n.e(t)}finally{n.f()}r||console.warn('It seems that you forgot to add "'.concat(t,'" to your page, that is ')+"why some information might not be visible on your map. You can find the missing asset on our Downloads page: https://developer.tomtom.com/maps-sdk-web-js/downloads")}function U(t){var e,r=N(t);try{for(r.s();!(e=r.n()).done;){B(e.value)}}catch(t){r.e(t)}finally{r.f()}}var z=r(2307),q=r.n(z),H=r(905),$=r.n(H);function V(t){return function(t){if(Array.isArray(t))return J(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||K(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function G(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==s.return||s.return()}finally{if(o)throw i}}return r}(t,e)||K(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function K(t,e){if(t){if("string"==typeof t)return J(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?J(t,e):void 0}}function J(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function Z(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function W(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function Q(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?W(Object(r),!0).forEach((function(e){X(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function X(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var Y={placeholder:"",suggestions:{brand:"Suggested brand",category:"Suggested category"},noResultsMessage:"No results found."};function tt(t){return $()(t,(function(t){if(t&&t._sw&&t._ne){var e=new t.constructor;for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(t[r]instanceof Object?e[r]=tt(t[r]):e[r]=t[r]);return e}}))}var et=function(){function t(e,r,n){var o=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),X(this,"__updater",(function(t){return function(){for(var e=tt(o._state),r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];t.apply(o,n),q()(o._state,e)||o.onUpdate()}})),X(this,"_getInitialState",(function(){return{value:"",showClearButton:!1,isFocused:!1,resultData:void 0,showResultList:!1,resultIndexPosition:-1,filter:void 0,restoreData:void 0}})),X(this,"_processOptions",(function(t){var e=o._state&&o._state.options||{idleTimePress:200,minNumberOfCharacters:3,searchOptions:null,autocompleteOptions:null,showSearchButton:!0,cssStyleCheck:!0,units:"kilometers"},r=Object.assign({},e,t);return r.distanceFromPoint&&(r.distanceFromPoint=o._convertPointToArray(r.distanceFromPoint,"distanceFromPoint")),r.labels=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.labels&&e.labels.placeholder||e.placeholder,n=e.labels&&e.labels.noResultsMessage||e.noResultsMessage,o=Q({},e.labels);return r&&(o.placeholder=r),n&&(o.noResultsMessage=n),Object.assign({},t,o,{suggestions:Object.assign({},t.suggestions,o.suggestions)})}(Y,t),r})),X(this,"_findAutocompleteResponseSegments",(function(t,e){var r={};for(var n in t){var o=t[n].segments;for(var i in o){if(Object.keys(r).length===e)break;var a=o[i];"plaintext"!==a.type&&(r[a.type+a.value]=a)}}return r})),X(this,"_hasAnyResults",(function(t,e){return!(t&&t.results&&t.results.length||e&&e.results&&e.results.length)})),X(this,"_combineSearchResponse",(function(t){var e=G(t,2),r=e[0],n=e[1];o._hasAnyResults(r,n)&&(o._state.combinedResults=[]);var i=[];if(n&&n.results){var a=o._findAutocompleteResponseSegments(n.results,2);i.push.apply(i,V(Object.values(a).map((function(t){return{result:t,type:l}}))))}return r&&i.push.apply(i,V(r.results.map((function(t){return{result:t,type:c}})))),i})),X(this,"_getResultText",(function(t){switch(t.type){case c:return t.result.poi?t.result.poi.name+", "+t.result.address.freeformAddress:t.result.address.freeformAddress;case l:return t.result.value}return""})),X(this,"_getTextForFilterResult",(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!t.matches||!Array.isArray(t.matches.inputQuery))return"";var r=t.matches.inputQuery[0],n=r.offset,o=r.length;return e.split(e.slice(n,n+o)).join("").trim()})),X(this,"_updateInputAndFilterStateOnResultChanged",(function(t){if(o._state.resultData&&o._state.resultData.length){var e=o._state.resultData[t],r=e.result;if(e.type===l){var n=r.type;o._state.filter=Q(Q(Q({},n===p&&{categorySet:r.id}),n===f&&{brandSet:r.value}),{},{type:n,text:o._getResultText(e)});var i=o._state.restoreData&&o._state.restoreData.value||o._state.value;o._state.value=o._getTextForFilterResult(e.result,i)}else o._state.filter=void 0,o._state.value=o._getResultText(e)}})),X(this,"_emitResultEvent",(function(t,e){if(o._state.resultData&&o._state.resultData.length){var r=o._state.resultData[t];o.events[e]({result:r.result,text:o._getResultText(r)})}})),X(this,"_restoreInput",(function(){o._state.value=o._state.restoreData.value,o._state.filter=o._state.restoreData.filter,o.events.inputRestored()})),X(this,"getCurrentState",(function(){return tt(o._state)})),X(this,"getMapCenter",(function(){return o.mapCenter})),X(this,"storeOptions",this.__updater((function(t){o._state.options=o._processOptions(t)}))),X(this,"storeInputManually",(function(t){o._state.resultIndexPosition=-1,o._state.resultData=void 0,o.storeInput(t)})),X(this,"storeInput",this.__updater((function(t){o._state.value=t,t.length?o._state.restoreData={value:t,filter:o._state.filter}:o._state.filter||(o._state.resultIndexPosition=-1,o._state.resultData=void 0,o.events.resultsCleared(),o._state.showResultList=!1)}))),X(this,"reset",this.__updater((function(){o._state=Q(Q(Q({},o._state),o._getInitialState()),{},{isFocused:!0}),o._state.options.searchOptions&&(delete o._state.options.searchOptions.categorySet,delete o._state.options.searchOptions.brandSet)}))),X(this,"updateResults",this.__updater((function(t){o._state.resultData=o._combineSearchResponse(t),o._state.resultIndexPosition=-1}))),X(this,"storeResults",(function(t){o._state.showResultList=!0,o.updateResults(t)})),X(this,"updateOnUpDownPress",this.__updater((function(t){o._state.resultIndexPosition=t,-1!==o._state.resultIndexPosition?(o._state.showResultList=!0,o._emitResultEvent(o._state.resultIndexPosition,"resultFocused"),o._updateInputAndFilterStateOnResultChanged(o._state.resultIndexPosition)):o._restoreInput()}))),X(this,"onResultSelected",this.__updater((function(t){o._emitResultEvent(t,"resultSelected"),o._updateInputAndFilterStateOnResultChanged(t),o._state.resultData=void 0,o._state.showResultList=!1,o._state.resultIndexPosition=-1,o._state.restoreData=void 0}))),X(this,"onRemoveFilter",this.__updater((function(){o._state.filter=void 0,o._state.resultIndexPosition=-1,o._state.restoreData&&(o._state.restoreData.filter=void 0),o._state.value.length&&""!==o._state.value?(o._state.restoreData=o._state.restoreData||{},o._state.restoreData.value=o._state.value):(o._state.resultData=void 0,o._state.restoreData=void 0,o._state.showResultList=!1,o.events.resultsCleared()),o._state.options.searchOptions&&(delete o._state.options.searchOptions.categorySet,delete o._state.options.searchOptions.brandSet)}))),X(this,"onEnterKeyPress",this.__updater((function(){o._state.showResultList=!1,o._state.resultIndexPosition=-1}))),X(this,"onEscKeyPress",this.__updater((function(){!1===o._state.showResultList&&(o._state.isFocused=!1),o._state.showResultList=!1}))),X(this,"updateFocus",this.__updater((function(t){o._state.isFocused=t,o._state.resultData&&(o._state.showResultList=t)}))),X(this,"setNewFilter",this.__updater((function(t){o._state.filter=t,o._state.restoreData=Q(Q({},o._state.restoreData&&o._state.restoreData||{}),{},{filter:o._state.filter}),o._state.options.searchOptions&&(o._state.options.searchOptions.categorySet=t.categorySet||void 0,o._state.options.searchOptions.brandSet=t.brandSet||void 0)}))),this.onUpdate=e,this.events=n,this._state=Q(Q({},this._getInitialState()),{},{options:this._processOptions(r)})}var e,r,n;return e=t,(r=[{key:"_convertPointToArray",value:function(t,e){var r;if(Array.isArray(t))r=t;else if("string"==typeof t)r=t.split(",");else{var n=t.latitude||t.lat;r=[t.longitude||t.lng||t.lon,n]}if(2!==r.length||!r[0]||!r[1])throw new Error("Searchbox: ".concat(e," is not valid."));return r}},{key:"setMapCenter",value:function(t){this.mapCenter=t}}])&&Z(e.prototype,r),n&&Z(e,n),t}(),rt=r(2131),nt=r(7057),ot="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),it=new Uint8Array(16);function at(){if(!ot)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return ot(it)}var st=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var ut=function(t){return"string"==typeof t&&st.test(t)},ct=[],lt=0;lt<256;++lt)ct.push((lt+256).toString(16).substr(1));var ft=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(ct[t[e+0]]+ct[t[e+1]]+ct[t[e+2]]+ct[t[e+3]]+"-"+ct[t[e+4]]+ct[t[e+5]]+"-"+ct[t[e+6]]+ct[t[e+7]]+"-"+ct[t[e+8]]+ct[t[e+9]]+"-"+ct[t[e+10]]+ct[t[e+11]]+ct[t[e+12]]+ct[t[e+13]]+ct[t[e+14]]+ct[t[e+15]]).toLowerCase();if(!ut(r))throw TypeError("Stringified UUID is invalid");return r};var pt=function(t,e,r){var n=(t=t||{}).random||(t.rng||at)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,e){r=r||0;for(var o=0;o<16;++o)e[r+o]=n[o];return e}return ft(n)};function dt(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var ht=new function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),dt(this,"_create",(function(){e._sessionId=pt()})),dt(this,"reset",(function(){return e._create()})),dt(this,"getSessionId",(function(){return e._sessionId})),this._sessionId=null,this._create()};function _t(t,e,r,n,o,i,a){try{var s=t[i](a),u=s.value}catch(t){return void r(t)}s.done?e(u):Promise.resolve(u).then(n,o)}function mt(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){_t(i,n,o,a,s,"next",t)}function s(t){_t(i,n,o,a,s,"throw",t)}a(void 0)}))}}function yt(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==s.return||s.return()}finally{if(o)throw i}}return r}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return vt(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return vt(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function vt(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function gt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function bt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?gt(Object(r),!0).forEach((function(e){wt(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):gt(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function wt(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function jt(t,e,r){function n(t){return t?"submit":"input"}function o(r,n,o){var i=t.getCurrentState().filter,a=t.getMapCenter(),s=Boolean(i),u=ht.getSessionId(),c=(new Date).toISOString(),l={};if(r.searchOptions){var f=bt(bt({},s&&i.categorySet&&{categorySet:i.categorySet}),s&&i.brandSet&&{brandSet:i.brandSet}),p=bt(bt(bt(bt({query:n,typeahead:s||o},a&&{center:a}),r.searchOptions),f),{},{sessionId:u,clientTime:c});l.fuzzySearch=e.fuzzySearch(p)}if(r.autocompleteOptions&&!s){var d=bt(bt(bt({query:n},a&&{center:a}),r.autocompleteOptions),{},{sessionId:u,clientTime:c});l.autocomplete=e.autocomplete(d)}return function(t){return Promise.all(Object.entries(t).map((function(t){var e=yt(t,2),r=e[0];return e[1].then((function(t){return{name:r,value:t,resolved:!0}})).catch((function(t){return{name:r,value:t,rejected:!0}}))}))).then((function(t){return{results:t.filter((function(t){return t.resolved})).reduce((function(t,e){var r=e.name,n=e.value;return bt(bt({},t),{},wt({},r,n))}),{}),errors:t.filter((function(t){return t.rejected})).reduce((function(t,e){var r=e.name,n=e.value;return bt(bt({},t),{},wt({},r,n))}),{})}}))}(l)}function i(t,e){return t.map((function(t){var r=bt({},t),n=r.position,o=n.lng,i=n.lat,a=(0,rt.Z)((0,nt.point)([o,i]),(0,nt.point)(e),{units:"kilometers"});return r.dist=1e3*a,r}))}var a,s=mt(regeneratorRuntime.mark((function e(){var s,u,c,l,f,p,d,h,_,m,y,v,g,b,w,j,x=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=x.length>0&&void 0!==x[0]?x[0]:{},u=s.triggeredBySubmit,c=void 0!==u&&u,l=s.useTypeahead,f=void 0===l||l,p=Date.now(),a=p,d=t.getCurrentState(),h=d.value,_=d.options,m=d.filter,!(h.length<_.minNumberOfCharacters&&!m||0===h.trim().length&&!m)){e.next=6;break}return e.abrupt("return",void 0);case 6:return e.next=8,o(_,h,f);case 8:if(y=e.sent,v=y.results,g=y.errors,b=v.autocomplete,(w=v.fuzzySearch)&&w.results&&(_.filterSearchResults&&(w.results=w.results.filter(_.filterSearchResults)),w.results=w.results.map((function(t,e){return t.__resultListIdx__=e,t})),_.distanceFromPoint&&(w.results=i(w.results,_.distanceFromPoint))),p!==a){e.next=18;break}return j=n(c),r.resultsFound({triggeredBy:j,results:v,errors:g}),c&&r.loadingFinished(j),e.abrupt("return",[w,b]);case 18:return e.abrupt("return",void 0);case 19:case"end":return e.stop()}}),e)})));function u(e,o){var i=t.getCurrentState().options,a=o||i.searchOptions&&i.searchOptions.typeahead||!1,u=n(e);r.loadingStarted(u),s({useTypeahead:a,triggeredBySubmit:e}).then((function(n){n&&(e?t.updateResults(n):t.storeResults(n)),e||r.loadingFinished(u)}))}return{onClearClick:function(){ht.reset(),t.reset(),r.resultsCleared()},onResultSelected:function(e){t.onResultSelected(e)},onClearFilterClick:function(){t.onRemoveFilter(),t.updateFocus(!0),u(!1,!0)},onEnterKeyPress:function(){var e=t.getCurrentState().resultIndexPosition;-1!==e?t.onResultSelected(e):(t.onEnterKeyPress(),u(!0,!1))},updateOnArrowPress:function(e){t.updateOnUpDownPress(e)},onEscKeyPress:function(){t.onEscKeyPress()},updateFocus:function(e){t.updateFocus(e)},runQuery:u,setNewValue:function(e){e.length||ht.reset(),t.storeInput(e)},setNewValueManually:function(e){ht.reset(),t.storeInputManually(e)},setNewFilter:function(e){t.setNewFilter(e)},setMapCenter:function(e){t.setMapCenter(e)},removeFilter:function(){t.onRemoveFilter()}}}var xt="tomtom.searchbox.resultscleared",Ot="tomtom.searchbox.resultsfound",St="tomtom.searchbox.resultselected",Et="tomtom.searchbox.resultfocused",At="tomtom.searchbox.inputrestored",Ct="tomtom.searchbox.loadingstarted",Pt="tomtom.searchbox.loadingfinished",Rt=function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.data=e},Tt=function(t){return new Rt(t)};function kt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function Lt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?kt(Object(r),!0).forEach((function(e){It(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):kt(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function It(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Ft(t){return{resultsFound:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.triggeredBy,n=e.results,o=e.errors;t.fire(Ot,Tt(Lt(Lt({metadata:{triggeredBy:r}},Object.keys(n).length>0&&{results:n}),Object.keys(o).length>0&&{errors:o})))},resultsCleared:function(){t.fire(xt)},resultSelected:function(e){var r=e.result,n=e.text;t.fire(St,Tt({result:r,text:n}))},resultFocused:function(e){var r=e.result,n=e.text;t.fire(Et,Tt({result:r,text:n}))},inputRestored:function(){t.fire(At)},loadingStarted:function(e){t.fire(Ct,Tt({metadata:{triggeredBy:e}}))},loadingFinished:function(e){t.fire(Pt,Tt({metadata:{triggeredBy:e}}))}}}var Dt=r(9669),Nt=r.n(Dt),Mt="3.1.12";function Bt(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var Ut=/^([^/ ]+?)\/([^ /]*?)( \(.*?\))? ([^/ ]+?)\/([^ /]*?)( \(.*?\))?$/,zt=new function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),Bt(this,"init",(function(t,r){e._searchbox=t,e._options=r,e._searchbox.on(St,e._onResultSelected)})),Bt(this,"_onResultSelected",(function(t){var n=t.data.result;if(!n.matches){var o={};r.g.__tomtomAnalyticsInfo_&&r.g.__tomtomAnalyticsInfo_.productInfo&&(o["TomTom-User-Agent"]="web-sdk-plugin-searchbox/".concat(Mt," ").concat(r.g.__tomtomAnalyticsInfo_.productInfo));var i={sessionId:ht.getSessionId(),clientTime:(new Date).toISOString(),key:e._options.searchOptions&&e._options.searchOptions.key},a={type:"SELECTED",resultId:n.id,position:n.__resultListIdx__};e._fuzzySearchEventRequest(o,i,a)}})),Bt(this,"_validateParams",(function(t,e,r){if(!t["TomTom-User-Agent"]||!Ut.test(t["TomTom-User-Agent"]))return!1;if(!e.key)return!1;var n=r.type,o=r.resultId,i=r.position;return void 0!==n&&void 0!==o&&void 0!==i})),Bt(this,"_fuzzySearchEventRequest",(function(t,r,n){try{if(!e._validateParams(t,r,n))return;Nt()({url:"https://api.tomtom.com/search/2/event/search.json",headers:t,params:r,data:n,method:"POST"})}catch(t){}})),this._searchbox=null};function qt(t){return(qt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Ht(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function $t(t,e){return($t=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Vt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Jt(t);if(e){var o=Jt(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Gt(this,r)}}function Gt(t,e){return!e||"object"!==qt(e)&&"function"!=typeof e?Kt(t):e}function Kt(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Jt(t){return(Jt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Zt(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var Wt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&$t(t,e)}(r,t);var e=Vt(r);function r(t){var n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Ht(this,r),Zt(Kt(n=e.call(this)),"_onStoreChange",(function(){n._inputWrapper.update(),n._resultList.update()})),Zt(Kt(n),"_createSearchBoxContainer",(function(){return n._container=document.createElement("div"),n._container.className="tt-search-box",n._inputWrapper=new R(n._container,n.store,n.userActions),n._resultList=new E(n._container,n.store,n.userActions),n._container})),Zt(Kt(n),"getOptions",(function(){return n.store.getCurrentState().options})),Zt(Kt(n),"updateOptions",(function(t){n.store.storeOptions(t)})),Zt(Kt(n),"getSearchBoxHTML",(function(){return n._container})),Zt(Kt(n),"onAdd",(function(t){return n.store.getCurrentState().options.cssStyleCheck&&U(["SearchBox.css"]),n._map=t,n._map.on("move",(function(){return n.userActions.setMapCenter(t.getCenter())})),n._container.classList.add("mapboxgl-ctrl","tt-ctrl"),n._container})),Zt(Kt(n),"onRemove",(function(){n._container.parentNode.removeChild(n._container),n._map=void 0})),Zt(Kt(n),"query",(function(){n.userActions.runQuery(!0)})),Zt(Kt(n),"setValue",(function(t){n.userActions.setNewValueManually(t)})),Zt(Kt(n),"getValue",(function(){return n.store.getCurrentState().value||""})),Zt(Kt(n),"setFilter",(function(t){var e,r=t.value,o=t.type,i=n.store.getCurrentState().options;if(!o||!r)throw new Error("setFilter: Invalid filterOptions format passed. Expected object properties are[type] and [value]");if(!i.searchOptions)throw new Error("setFilter: You can not use setFilter without setting searchOptions.");if("category"===o)e={categorySet:r.id,text:r.name,type:"category"};else{if("brand"!==o)throw new Error("setFilter: Filter type is expected to be 'category' or 'brand'.");e={brandSet:r.name,text:r.name,type:"category"}}n.userActions.setNewFilter(e)})),Zt(Kt(n),"removeFilter",(function(){n.store.getCurrentState().options.searchOptions&&n.userActions.removeFilter()}));var i=Ft(Kt(n));return n.store=new et(n._onStoreChange,o,i),n.userActions=jt(n.store,t,i),!1!==o._FBLActive_&&zt.init(Kt(n),o),n._createSearchBoxContainer(),n}return r}(D)},905:function(t,e,r){t=r.nmd(t);var n="__lodash_hash_undefined__",o=9007199254740991,i="[object Arguments]",a="[object Boolean]",s="[object Date]",u="[object Function]",c="[object GeneratorFunction]",l="[object Map]",f="[object Number]",p="[object Object]",d="[object Promise]",h="[object RegExp]",_="[object Set]",m="[object String]",y="[object Symbol]",v="[object WeakMap]",g="[object ArrayBuffer]",b="[object DataView]",w="[object Float32Array]",j="[object Float64Array]",x="[object Int8Array]",O="[object Int16Array]",S="[object Int32Array]",E="[object Uint8Array]",A="[object Uint8ClampedArray]",C="[object Uint16Array]",P="[object Uint32Array]",R=/\w*$/,T=/^\[object .+?Constructor\]$/,k=/^(?:0|[1-9]\d*)$/,L={};L[i]=L["[object Array]"]=L[g]=L[b]=L[a]=L[s]=L[w]=L[j]=L[x]=L[O]=L[S]=L[l]=L[f]=L[p]=L[h]=L[_]=L[m]=L[y]=L[E]=L[A]=L[C]=L[P]=!0,L["[object Error]"]=L[u]=L[v]=!1;var I="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,F="object"==typeof self&&self&&self.Object===Object&&self,D=I||F||Function("return this")(),N=e&&!e.nodeType&&e,M=N&&t&&!t.nodeType&&t,B=M&&M.exports===N;function U(t,e){return t.set(e[0],e[1]),t}function z(t,e){return t.add(e),t}function q(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function H(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function $(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function V(t,e){return function(r){return t(e(r))}}function G(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var K,J=Array.prototype,Z=Function.prototype,W=Object.prototype,Q=D["__core-js_shared__"],X=(K=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+K:"",Y=Z.toString,tt=W.hasOwnProperty,et=W.toString,rt=RegExp("^"+Y.call(tt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),nt=B?D.Buffer:void 0,ot=D.Symbol,it=D.Uint8Array,at=V(Object.getPrototypeOf,Object),st=Object.create,ut=W.propertyIsEnumerable,ct=J.splice,lt=Object.getOwnPropertySymbols,ft=nt?nt.isBuffer:void 0,pt=V(Object.keys,Object),dt=Mt(D,"DataView"),ht=Mt(D,"Map"),_t=Mt(D,"Promise"),mt=Mt(D,"Set"),yt=Mt(D,"WeakMap"),vt=Mt(Object,"create"),gt=Ht(dt),bt=Ht(ht),wt=Ht(_t),jt=Ht(mt),xt=Ht(yt),Ot=ot?ot.prototype:void 0,St=Ot?Ot.valueOf:void 0;function Et(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function At(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Ct(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Pt(t){this.__data__=new At(t)}function Rt(t,e){var r=Vt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Gt(t)}(t)&&tt.call(t,"callee")&&(!ut.call(t,"callee")||et.call(t)==i)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var a in t)!e&&!tt.call(t,a)||o&&("length"==a||zt(a,n))||r.push(a);return r}function Tt(t,e,r){var n=t[e];tt.call(t,e)&&$t(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function kt(t,e){for(var r=t.length;r--;)if($t(t[r][0],e))return r;return-1}function Lt(t,e,r,n,o,d,v){var T;if(n&&(T=d?n(t,o,d,v):n(t)),void 0!==T)return T;if(!Zt(t))return t;var k=Vt(t);if(k){if(T=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&tt.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,T)}else{var I=Ut(t),F=I==u||I==c;if(Kt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(I==p||I==i||F&&!d){if(H(t))return d?t:{};if(T=function(t){return"function"!=typeof t.constructor||qt(t)?{}:(e=at(t),Zt(e)?st(e):{});var e}(F?{}:t),!e)return function(t,e){return Dt(t,Bt(t),e)}(t,function(t,e){return t&&Dt(e,Wt(e),t)}(T,t))}else{if(!L[I])return d?t:{};T=function(t,e,r,n){var o=t.constructor;switch(e){case g:return Ft(t);case a:case s:return new o(+t);case b:return function(t,e){var r=e?Ft(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case w:case j:case x:case O:case S:case E:case A:case C:case P:return function(t,e){var r=e?Ft(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case l:return function(t,e,r){return q(e?r($(t),!0):$(t),U,new t.constructor)}(t,n,r);case f:case m:return new o(t);case h:return function(t){var e=new t.constructor(t.source,R.exec(t));return e.lastIndex=t.lastIndex,e}(t);case _:return function(t,e,r){return q(e?r(G(t),!0):G(t),z,new t.constructor)}(t,n,r);case y:return i=t,St?Object(St.call(i)):{}}var i}(t,I,Lt,e)}}v||(v=new Pt);var D=v.get(t);if(D)return D;if(v.set(t,T),!k)var N=r?function(t){return function(t,e,r){var n=e(t);return Vt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Wt,Bt)}(t):Wt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(N||t,(function(o,i){N&&(o=t[i=o]),Tt(T,i,Lt(o,e,r,n,i,t,v))})),T}function It(t){return!(!Zt(t)||(e=t,X&&X in e))&&(Jt(t)||H(t)?rt:T).test(Ht(t));var e}function Ft(t){var e=new t.constructor(t.byteLength);return new it(e).set(new it(t)),e}function Dt(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var a=e[o],s=n?n(r[a],t[a],a,r,t):void 0;Tt(r,a,void 0===s?t[a]:s)}return r}function Nt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Mt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return It(r)?r:void 0}Et.prototype.clear=function(){this.__data__=vt?vt(null):{}},Et.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Et.prototype.get=function(t){var e=this.__data__;if(vt){var r=e[t];return r===n?void 0:r}return tt.call(e,t)?e[t]:void 0},Et.prototype.has=function(t){var e=this.__data__;return vt?void 0!==e[t]:tt.call(e,t)},Et.prototype.set=function(t,e){return this.__data__[t]=vt&&void 0===e?n:e,this},At.prototype.clear=function(){this.__data__=[]},At.prototype.delete=function(t){var e=this.__data__,r=kt(e,t);return!(r<0)&&(r==e.length-1?e.pop():ct.call(e,r,1),!0)},At.prototype.get=function(t){var e=this.__data__,r=kt(e,t);return r<0?void 0:e[r][1]},At.prototype.has=function(t){return kt(this.__data__,t)>-1},At.prototype.set=function(t,e){var r=this.__data__,n=kt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},Ct.prototype.clear=function(){this.__data__={hash:new Et,map:new(ht||At),string:new Et}},Ct.prototype.delete=function(t){return Nt(this,t).delete(t)},Ct.prototype.get=function(t){return Nt(this,t).get(t)},Ct.prototype.has=function(t){return Nt(this,t).has(t)},Ct.prototype.set=function(t,e){return Nt(this,t).set(t,e),this},Pt.prototype.clear=function(){this.__data__=new At},Pt.prototype.delete=function(t){return this.__data__.delete(t)},Pt.prototype.get=function(t){return this.__data__.get(t)},Pt.prototype.has=function(t){return this.__data__.has(t)},Pt.prototype.set=function(t,e){var r=this.__data__;if(r instanceof At){var n=r.__data__;if(!ht||n.length<199)return n.push([t,e]),this;r=this.__data__=new Ct(n)}return r.set(t,e),this};var Bt=lt?V(lt,Object):function(){return[]},Ut=function(t){return et.call(t)};function zt(t,e){return!!(e=null==e?o:e)&&("number"==typeof t||k.test(t))&&t>-1&&t%1==0&&t<e}function qt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||W)}function Ht(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function $t(t,e){return t===e||t!=t&&e!=e}(dt&&Ut(new dt(new ArrayBuffer(1)))!=b||ht&&Ut(new ht)!=l||_t&&Ut(_t.resolve())!=d||mt&&Ut(new mt)!=_||yt&&Ut(new yt)!=v)&&(Ut=function(t){var e=et.call(t),r=e==p?t.constructor:void 0,n=r?Ht(r):void 0;if(n)switch(n){case gt:return b;case bt:return l;case wt:return d;case jt:return _;case xt:return v}return e});var Vt=Array.isArray;function Gt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}(t.length)&&!Jt(t)}var Kt=ft||function(){return!1};function Jt(t){var e=Zt(t)?et.call(t):"";return e==u||e==c}function Zt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Wt(t){return Gt(t)?Rt(t):function(t){if(!qt(t))return pt(t);var e=[];for(var r in Object(t))tt.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t,e){return Lt(t,!0,!0,e)}},1296:function(t,e,r){var n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,s=parseInt,u="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),f=Object.prototype.toString,p=Math.max,d=Math.min,h=function(){return l.Date.now()};function _(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function m(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==f.call(t)}(t))return NaN;if(_(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=_(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(n,"");var r=i.test(t);return r||a.test(t)?s(t.slice(2),r?2:8):o.test(t)?NaN:+t}t.exports=function(t,e,r){var n,o,i,a,s,u,c=0,l=!1,f=!1,y=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function v(e){var r=n,i=o;return n=o=void 0,c=e,a=t.apply(i,r)}function g(t){return c=t,s=setTimeout(w,e),l?v(t):a}function b(t){var r=t-u;return void 0===u||r>=e||r<0||f&&t-c>=i}function w(){var t=h();if(b(t))return j(t);s=setTimeout(w,function(t){var r=e-(t-u);return f?d(r,i-(t-c)):r}(t))}function j(t){return s=void 0,y&&n?v(t):(n=o=void 0,a)}function x(){var t=h(),r=b(t);if(n=arguments,o=this,u=t,r){if(void 0===s)return g(u);if(f)return s=setTimeout(w,e),v(u)}return void 0===s&&(s=setTimeout(w,e)),a}return e=m(e)||0,_(r)&&(l=!!r.leading,i=(f="maxWait"in r)?p(m(r.maxWait)||0,e):i,y="trailing"in r?!!r.trailing:y),x.cancel=function(){void 0!==s&&clearTimeout(s),c=0,n=u=o=s=void 0},x.flush=function(){return void 0===s?a:j(h())},x}},2307:function(t,e,r){t=r.nmd(t);var n="__lodash_hash_undefined__",o=9007199254740991,i="[object Arguments]",a="[object Array]",s="[object Boolean]",u="[object Date]",c="[object Error]",l="[object Function]",f="[object Map]",p="[object Number]",d="[object Object]",h="[object Promise]",_="[object RegExp]",m="[object Set]",y="[object String]",v="[object Symbol]",g="[object WeakMap]",b="[object ArrayBuffer]",w="[object DataView]",j=/^\[object .+?Constructor\]$/,x=/^(?:0|[1-9]\d*)$/,O={};O["[object Float32Array]"]=O["[object Float64Array]"]=O["[object Int8Array]"]=O["[object Int16Array]"]=O["[object Int32Array]"]=O["[object Uint8Array]"]=O["[object Uint8ClampedArray]"]=O["[object Uint16Array]"]=O["[object Uint32Array]"]=!0,O[i]=O[a]=O[b]=O[s]=O[w]=O[u]=O[c]=O[l]=O[f]=O[p]=O[d]=O[_]=O[m]=O[y]=O[g]=!1;var S="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,E="object"==typeof self&&self&&self.Object===Object&&self,A=S||E||Function("return this")(),C=e&&!e.nodeType&&e,P=C&&t&&!t.nodeType&&t,R=P&&P.exports===C,T=R&&S.process,k=function(){try{return T&&T.binding&&T.binding("util")}catch(t){}}(),L=k&&k.isTypedArray;function I(t,e){for(var r=-1,n=null==t?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1}function F(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function D(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var N,M,B,U=Array.prototype,z=Function.prototype,q=Object.prototype,H=A["__core-js_shared__"],$=z.toString,V=q.hasOwnProperty,G=(N=/[^.]+$/.exec(H&&H.keys&&H.keys.IE_PROTO||""))?"Symbol(src)_1."+N:"",K=q.toString,J=RegExp("^"+$.call(V).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Z=R?A.Buffer:void 0,W=A.Symbol,Q=A.Uint8Array,X=q.propertyIsEnumerable,Y=U.splice,tt=W?W.toStringTag:void 0,et=Object.getOwnPropertySymbols,rt=Z?Z.isBuffer:void 0,nt=(M=Object.keys,B=Object,function(t){return M(B(t))}),ot=kt(A,"DataView"),it=kt(A,"Map"),at=kt(A,"Promise"),st=kt(A,"Set"),ut=kt(A,"WeakMap"),ct=kt(Object,"create"),lt=Dt(ot),ft=Dt(it),pt=Dt(at),dt=Dt(st),ht=Dt(ut),_t=W?W.prototype:void 0,mt=_t?_t.valueOf:void 0;function yt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function vt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function gt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function bt(t){var e=-1,r=null==t?0:t.length;for(this.__data__=new gt;++e<r;)this.add(t[e])}function wt(t){var e=this.__data__=new vt(t);this.size=e.size}function jt(t,e){var r=Bt(t),n=!r&&Mt(t),o=!r&&!n&&Ut(t),i=!r&&!n&&!o&&Vt(t),a=r||n||o||i,s=a?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],u=s.length;for(var c in t)!e&&!V.call(t,c)||a&&("length"==c||o&&("offset"==c||"parent"==c)||i&&("buffer"==c||"byteLength"==c||"byteOffset"==c)||Ft(c,u))||s.push(c);return s}function xt(t,e){for(var r=t.length;r--;)if(Nt(t[r][0],e))return r;return-1}function Ot(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":tt&&tt in Object(t)?function(t){var e=V.call(t,tt),r=t[tt];try{t[tt]=void 0;var n=!0}catch(t){}var o=K.call(t);n&&(e?t[tt]=r:delete t[tt]);return o}(t):function(t){return K.call(t)}(t)}function St(t){return $t(t)&&Ot(t)==i}function Et(t,e,r,n,o){return t===e||(null==t||null==e||!$t(t)&&!$t(e)?t!=t&&e!=e:function(t,e,r,n,o,l){var h=Bt(t),g=Bt(e),j=h?a:It(t),x=g?a:It(e),O=(j=j==i?d:j)==d,S=(x=x==i?d:x)==d,E=j==x;if(E&&Ut(t)){if(!Ut(e))return!1;h=!0,O=!1}if(E&&!O)return l||(l=new wt),h||Vt(t)?Pt(t,e,r,n,o,l):function(t,e,r,n,o,i,a){switch(r){case w:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case b:return!(t.byteLength!=e.byteLength||!i(new Q(t),new Q(e)));case s:case u:case p:return Nt(+t,+e);case c:return t.name==e.name&&t.message==e.message;case _:case y:return t==e+"";case f:var l=F;case m:var d=1&n;if(l||(l=D),t.size!=e.size&&!d)return!1;var h=a.get(t);if(h)return h==e;n|=2,a.set(t,e);var g=Pt(l(t),l(e),n,o,i,a);return a.delete(t),g;case v:if(mt)return mt.call(t)==mt.call(e)}return!1}(t,e,j,r,n,o,l);if(!(1&r)){var A=O&&V.call(t,"__wrapped__"),C=S&&V.call(e,"__wrapped__");if(A||C){var P=A?t.value():t,R=C?e.value():e;return l||(l=new wt),o(P,R,r,n,l)}}if(!E)return!1;return l||(l=new wt),function(t,e,r,n,o,i){var a=1&r,s=Rt(t),u=s.length,c=Rt(e).length;if(u!=c&&!a)return!1;var l=u;for(;l--;){var f=s[l];if(!(a?f in e:V.call(e,f)))return!1}var p=i.get(t);if(p&&i.get(e))return p==e;var d=!0;i.set(t,e),i.set(e,t);var h=a;for(;++l<u;){var _=t[f=s[l]],m=e[f];if(n)var y=a?n(m,_,f,e,t,i):n(_,m,f,t,e,i);if(!(void 0===y?_===m||o(_,m,r,n,i):y)){d=!1;break}h||(h="constructor"==f)}if(d&&!h){var v=t.constructor,g=e.constructor;v==g||!("constructor"in t)||!("constructor"in e)||"function"==typeof v&&v instanceof v&&"function"==typeof g&&g instanceof g||(d=!1)}return i.delete(t),i.delete(e),d}(t,e,r,n,o,l)}(t,e,r,n,Et,o))}function At(t){return!(!Ht(t)||function(t){return!!G&&G in t}(t))&&(zt(t)?J:j).test(Dt(t))}function Ct(t){if(r=(e=t)&&e.constructor,n="function"==typeof r&&r.prototype||q,e!==n)return nt(t);var e,r,n,o=[];for(var i in Object(t))V.call(t,i)&&"constructor"!=i&&o.push(i);return o}function Pt(t,e,r,n,o,i){var a=1&r,s=t.length,u=e.length;if(s!=u&&!(a&&u>s))return!1;var c=i.get(t);if(c&&i.get(e))return c==e;var l=-1,f=!0,p=2&r?new bt:void 0;for(i.set(t,e),i.set(e,t);++l<s;){var d=t[l],h=e[l];if(n)var _=a?n(h,d,l,e,t,i):n(d,h,l,t,e,i);if(void 0!==_){if(_)continue;f=!1;break}if(p){if(!I(e,(function(t,e){if(a=e,!p.has(a)&&(d===t||o(d,t,r,n,i)))return p.push(e);var a}))){f=!1;break}}else if(d!==h&&!o(d,h,r,n,i)){f=!1;break}}return i.delete(t),i.delete(e),f}function Rt(t){return function(t,e,r){var n=e(t);return Bt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Gt,Lt)}function Tt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function kt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return At(r)?r:void 0}yt.prototype.clear=function(){this.__data__=ct?ct(null):{},this.size=0},yt.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},yt.prototype.get=function(t){var e=this.__data__;if(ct){var r=e[t];return r===n?void 0:r}return V.call(e,t)?e[t]:void 0},yt.prototype.has=function(t){var e=this.__data__;return ct?void 0!==e[t]:V.call(e,t)},yt.prototype.set=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=ct&&void 0===e?n:e,this},vt.prototype.clear=function(){this.__data__=[],this.size=0},vt.prototype.delete=function(t){var e=this.__data__,r=xt(e,t);return!(r<0)&&(r==e.length-1?e.pop():Y.call(e,r,1),--this.size,!0)},vt.prototype.get=function(t){var e=this.__data__,r=xt(e,t);return r<0?void 0:e[r][1]},vt.prototype.has=function(t){return xt(this.__data__,t)>-1},vt.prototype.set=function(t,e){var r=this.__data__,n=xt(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this},gt.prototype.clear=function(){this.size=0,this.__data__={hash:new yt,map:new(it||vt),string:new yt}},gt.prototype.delete=function(t){var e=Tt(this,t).delete(t);return this.size-=e?1:0,e},gt.prototype.get=function(t){return Tt(this,t).get(t)},gt.prototype.has=function(t){return Tt(this,t).has(t)},gt.prototype.set=function(t,e){var r=Tt(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this},bt.prototype.add=bt.prototype.push=function(t){return this.__data__.set(t,n),this},bt.prototype.has=function(t){return this.__data__.has(t)},wt.prototype.clear=function(){this.__data__=new vt,this.size=0},wt.prototype.delete=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r},wt.prototype.get=function(t){return this.__data__.get(t)},wt.prototype.has=function(t){return this.__data__.has(t)},wt.prototype.set=function(t,e){var r=this.__data__;if(r instanceof vt){var n=r.__data__;if(!it||n.length<199)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new gt(n)}return r.set(t,e),this.size=r.size,this};var Lt=et?function(t){return null==t?[]:(t=Object(t),function(t,e){for(var r=-1,n=null==t?0:t.length,o=0,i=[];++r<n;){var a=t[r];e(a,r,t)&&(i[o++]=a)}return i}(et(t),(function(e){return X.call(t,e)})))}:function(){return[]},It=Ot;function Ft(t,e){return!!(e=null==e?o:e)&&("number"==typeof t||x.test(t))&&t>-1&&t%1==0&&t<e}function Dt(t){if(null!=t){try{return $.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Nt(t,e){return t===e||t!=t&&e!=e}(ot&&It(new ot(new ArrayBuffer(1)))!=w||it&&It(new it)!=f||at&&It(at.resolve())!=h||st&&It(new st)!=m||ut&&It(new ut)!=g)&&(It=function(t){var e=Ot(t),r=e==d?t.constructor:void 0,n=r?Dt(r):"";if(n)switch(n){case lt:return w;case ft:return f;case pt:return h;case dt:return m;case ht:return g}return e});var Mt=St(function(){return arguments}())?St:function(t){return $t(t)&&V.call(t,"callee")&&!X.call(t,"callee")},Bt=Array.isArray;var Ut=rt||function(){return!1};function zt(t){if(!Ht(t))return!1;var e=Ot(t);return e==l||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}function qt(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}function Ht(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function $t(t){return null!=t&&"object"==typeof t}var Vt=L?function(t){return function(e){return t(e)}}(L):function(t){return $t(t)&&qt(t.length)&&!!O[Ot(t)]};function Gt(t){return null!=(e=t)&&qt(e.length)&&!zt(e)?jt(t):Ct(t);var e}t.exports=function(t,e){return Et(t,e)}},5666:function(t){var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function u(t,e,r,n){var o=e&&e.prototype instanceof _?e:_,i=Object.create(o.prototype),a=new A(n||[]);return i._invoke=function(t,e,r){var n=l;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=O(a,r);if(s){if(s===h)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=c(t,e,r);if("normal"===u.type){if(n=r.done?d:f,u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=d,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function c(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var l="suspendedStart",f="suspendedYield",p="executing",d="completed",h={};function _(){}function m(){}function y(){}var v={};v[i]=function(){return this};var g=Object.getPrototypeOf,b=g&&g(g(C([])));b&&b!==r&&n.call(b,i)&&(v=b);var w=y.prototype=_.prototype=Object.create(v);function j(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function x(t,e){function r(o,i,a,s){var u=c(t[o],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,s)}),(function(t){r("throw",t,a,s)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,s)}))}s(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function O(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method))return h;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var o=c(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,h;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,h):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function C(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:P}}function P(){return{value:e,done:!0}}return m.prototype=w.constructor=y,y.constructor=m,y[s]=m.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},j(x.prototype),x.prototype[a]=function(){return this},t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(w),w[s]="Generator",w[i]=function(){return this},w.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=C,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),h}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}},e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={id:n,loaded:!1,exports:{}};return t[n](o,o.exports,r),o.loaded=!0,o.exports}r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t},function(){var t;r.g.importScripts&&(t=r.g.location+"");var e=r.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=t+"../../../"}();var n=r(3213);return n=n.default}()}));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/@tomtom-international/web-sdk-services/dist/services.min.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@tomtom-international/web-sdk-services/dist/services.min.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){if(true)module.exports=t();else { var r, n; }}(self,(function(){return function(){var e=[,function(e){const t="api.tomtom.com";e.exports={"sdk.name":"MapsWebSDK","sdk.version":"6.18.0","sdk.examples.version":"SDK-${version}","analytics.header.name":"TomTom-User-Agent","analytics.header.sdkName":"MapsWebSDK","endpoints.copyrightsWorld":"".concat(t,"/map/1/copyrights.{contentType}"),"endpoints.copyrightsBounds":"".concat(t,"/map/1/copyrights/{minLon}/{minLat}/{maxLon}/{maxLat}.{contentType}"),"endpoints.copyrightsZoom":"".concat(t,"/map/1/copyrights/{zoom}/{x}/{y}.{contentType}"),"endpoints.caption":"".concat(t,"/map/1/copyrights/caption.{contentType}"),"endpoints.copyrightsV2":"".concat(t,"/map/2/copyrights"),"endpoints.captionV2":"".concat(t,"/map/2/copyrights/caption.{contentType}"),"endpoints.geocode":"".concat(t,"/search/2/geocode/{query}.{contentType}"),"endpoints.structuredGeocode":"".concat(t,"/search/2/structuredGeocode.{contentType}"),"endpoints.search":"".concat(t,"/search/2/{type}/{query}.{contentType}"),"endpoints.nearbySearch":"".concat(t,"/search/2/nearbySearch/.{contentType}"),"endpoints.batchNearbySearchQuery":"/{type}/.{contentType}","endpoints.batchSearch":"".concat(t,"/search/2/batch.{contentType}"),"endpoints.batchSyncSearch":"".concat(t,"/search/2/batch/sync.{contentType}"),"endpoints.batchSearchQuery":"/{type}/{query}.{contentType}","endpoints.batchStructuredGeocodeQuery":"/structuredGeocode.{contentType}","endpoints.adp":"".concat(t,"/search/2/additionalData.{contentType}"),"endpoints.batchAdpQuery":"/additionalData.{contentType}","endpoints.reverseGeocode":"".concat(t,"/search/2/{type}/{position}.{contentType}"),"endpoints.batchReverseGeocodeQuery":"/{type}/{position}.{contentType}","endpoints.autocomplete":"".concat(t,"/search/2/autocomplete/{query}.{contentType}"),"endpoints.poiCategories":"".concat(t,"/search/2/poiCategories.{contentType}"),"endpoints.chargingAvailability":"".concat(t,"/search/2/chargingAvailability.{contentType}"),"endpoints.batchChargingAvailabilityQuery":"/chargingAvailability.{contentType}","endpoints.poiDetails":"".concat(t,"/search/2/poiDetails.{contentType}"),"endpoints.poiPhotos":"".concat(t,"/search/2/poiPhoto"),"endpoints.placeById":"".concat(t,"/search/2/place.{contentType}"),"endpoints.incidentDetails":"".concat(t,"/traffic/services/4/incidentDetails/{style}/{minLat},{minLon},{maxLat},{maxLon}/{zoom}/{trafficModelID}/{contentType}"),"endpoints.incidentDetailsV5":"".concat(t,"/traffic/services/5/incidentDetails"),"endpoints.incidentViewport":"".concat(t,"/traffic/services/4/incidentViewport/0,0,.1,.1/0/0,0,.1,.1/0/false/{contentType}"),"endpoints.flowSegmentData":"".concat(t,"/traffic/services/4/flowSegmentData/{style}/{zoom}/{contentType}"),"endpoints.incidentRegions":"".concat(t,"/traffic/services/4/incidentRegions/{contentType}"),"endpoints.rasterTrafficIncidentTilesLayer":"{s}.".concat(t,"/traffic/map/4/tile/incidents/{style}/{z}/{x}/{y}.png?tileSize={tileSize}"),"endpoints.vectorTrafficIncidentTilesLayer":"{s}.".concat(t,"/traffic/map/4/tile/incidents/{z}/{x}/{y}.pbf"),"endpoints.rasterTrafficFlowTilesLayer":"{s}.".concat(t,"/traffic/map/4/tile/flow/{style}/{z}/{x}/{y}.png"),"endpoints.vectorTrafficFlowTilesLayer":"{s}.".concat(t,"/traffic/map/4/tile/flow/{style}/{z}/{x}/{y}.pbf"),"endpoints.tileLayer":"{s}.".concat(t,"/map/1/tile/{layer}/{style}/{z}/{x}/{y}.png?tileSize={tileSize}"),"endpoints.wmsLayer":"{s}.".concat(t,"/map/1/wms/?service=WMS&version=1.1.1&request=GetMap&bbox={bbox-epsg-3857}&srs=EPSG:3857&width=512&height=512&layers=basic&styles=&format={format}"),"endpoints.vectorTileLayer":"{s}.".concat(t,"/map/1/tile/{layer}/{style}/{z}/{x}/{y}.pbf"),"endpoints.routing":"".concat(t,"/routing/1/calculateRoute/{locations}/{contentType}"),"endpoints.calculateReachableRange":"".concat(t,"/routing/1/calculateReachableRange/{origin}/{contentType}"),"endpoints.batchRouting":"".concat(t,"/routing/1/batch/{contentType}"),"endpoints.batchSyncRouting":"".concat(t,"/routing/1/batch/sync/{contentType}"),"endpoints.batchRoutingQuery":"/calculateRoute/{locations}/{contentType}","endpoints.batchReachableRangeQuery":"/calculateReachableRange/{origin}/{contentType}","endpoints.matrixRouting":"".concat(t,"/routing/1/matrix/{contentType}"),"endpoints.matrixSyncRouting":"".concat(t,"/routing/1/matrix/sync/{contentType}"),"endpoints.longDistanceEVRouting":"".concat(t,"/routing/1/calculateLongDistanceEVRoute/{locations}/{contentType}"),"endpoints.staticImage":"https://".concat(t,"/map/1/staticimage"),"vector.glyphs":"https://"+t+"/maps-sdk-js/6.18.0/glyphs/{fontstack}/{range}.pbf","vector.sprites":"https://"+t+"/maps-sdk-js/6.18.0/sprites/sprite","endpoints.styles":"https://".concat(t,"/style/1/style/{version}?map=basic_main&traffic_incidents=incidents_day&traffic_flow=flow_relative0&poi=poi_main"),origin:t,hostedStylesVersion:"21.1.0-*"}},function(e,t,n){var r=n(3),o=n(9);e.exports=function(e){if(!o(e))return!1;var t=r(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},function(e,t,n){var r=n(4),o=n(7),a=n(8),i=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?o(e):a(e)}},function(e,t,n){var r=n(5).Symbol;e.exports=r},function(e,t,n){var r=n(6),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();e.exports=a},function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},function(e,t,n){var r=n(4),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,s=r?r.toStringTag:void 0;e.exports=function(e){var t=a.call(e,s),n=e[s];try{e[s]=void 0;var r=!0}catch(e){}var o=i.call(e);return r&&(t?e[s]=n:delete e[s]),o}},function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},function(e,t,n){var r=n(3),o=n(11),a=n(12);e.exports=function(e){return"string"==typeof e||!o(e)&&a(e)&&"[object String]"==r(e)}},function(e){var t=Array.isArray;e.exports=t},function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},function(e){e.exports=function(e){return null==e}},function(e,t,n){var r=n(15);e.exports=function(e){return"number"==typeof e&&e==r(e)}},function(e,t,n){var r=n(16);e.exports=function(e){var t=r(e),n=t%1;return t==t?n?t-n:t:0}},function(e,t,n){var r=n(17),o=1/0;e.exports=function(e){return e?(e=r(e))===o||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}},function(e,t,n){var r=n(9),o=n(18),a=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return NaN;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=s.test(e);return n||c.test(e)?l(e.slice(2),n?2:8):i.test(e)?NaN:+e}},function(e,t,n){var r=n(3),o=n(12);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==r(e)}},function(e,t,n){var r=n(20),o=n(21);e.exports=function(e,t){return null!=e&&o(e,t,r)}},function(e){var t=Object.prototype.hasOwnProperty;e.exports=function(e,n){return null!=e&&t.call(e,n)}},function(e,t,n){var r=n(22),o=n(60),a=n(11),i=n(62),s=n(63),c=n(64);e.exports=function(e,t,n){for(var l=-1,u=(t=r(t,e)).length,p=!1;++l<u;){var d=c(t[l]);if(!(p=null!=e&&n(e,d)))break;e=e[d]}return p||++l!=u?p:!!(u=null==e?0:e.length)&&s(u)&&i(d,u)&&(a(e)||o(e))}},function(e,t,n){var r=n(11),o=n(23),a=n(24),i=n(57);e.exports=function(e,t){return r(e)?e:o(e,t)?[e]:a(i(e))}},function(e,t,n){var r=n(11),o=n(18),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/;e.exports=function(e,t){if(r(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!o(e))||(i.test(e)||!a.test(e)||null!=t&&e in Object(t))}},function(e,t,n){var r=n(25),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,i=r((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(o,(function(e,n,r,o){t.push(r?o.replace(a,"$1"):n||e)})),t}));e.exports=i},function(e,t,n){var r=n(26);e.exports=function(e){var t=r(e,(function(e){return 500===n.size&&n.clear(),e})),n=t.cache;return t}},function(e,t,n){var r=n(27);function o(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],a=n.cache;if(a.has(o))return a.get(o);var i=e.apply(this,r);return n.cache=a.set(o,i)||a,i};return n.cache=new(o.Cache||r),n}o.Cache=r,e.exports=o},function(e,t,n){var r=n(28),o=n(51),a=n(54),i=n(55),s=n(56);function c(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=i,c.prototype.set=s,e.exports=c},function(e,t,n){var r=n(29),o=n(42),a=n(50);e.exports=function(){this.size=0,this.__data__={hash:new r,map:new(a||o),string:new r}}},function(e,t,n){var r=n(30),o=n(38),a=n(39),i=n(40),s=n(41);function c(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=i,c.prototype.set=s,e.exports=c},function(e,t,n){var r=n(31);e.exports=function(){this.__data__=r?r(null):{},this.size=0}},function(e,t,n){var r=n(32)(Object,"create");e.exports=r},function(e,t,n){var r=n(33),o=n(37);e.exports=function(e,t){var n=o(e,t);return r(n)?n:void 0}},function(e,t,n){var r=n(2),o=n(34),a=n(9),i=n(36),s=/^\[object .+?Constructor\]$/,c=Function.prototype,l=Object.prototype,u=c.toString,p=l.hasOwnProperty,d=RegExp("^"+u.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(e){return!(!a(e)||o(e))&&(r(e)?d:s).test(i(e))}},function(e,t,n){var r,o=n(35),a=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";e.exports=function(e){return!!a&&a in e}},function(e,t,n){var r=n(5)["__core-js_shared__"];e.exports=r},function(e){var t=Function.prototype.toString;e.exports=function(e){if(null!=e){try{return t.call(e)}catch(e){}try{return e+""}catch(e){}}return""}},function(e){e.exports=function(e,t){return null==e?void 0:e[t]}},function(e){e.exports=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}},function(e,t,n){var r=n(31),o=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;if(r){var n=t[e];return"__lodash_hash_undefined__"===n?void 0:n}return o.call(t,e)?t[e]:void 0}},function(e,t,n){var r=n(31),o=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;return r?void 0!==t[e]:o.call(t,e)}},function(e,t,n){var r=n(31);e.exports=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=r&&void 0===t?"__lodash_hash_undefined__":t,this}},function(e,t,n){var r=n(43),o=n(44),a=n(47),i=n(48),s=n(49);function c(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}c.prototype.clear=r,c.prototype.delete=o,c.prototype.get=a,c.prototype.has=i,c.prototype.set=s,e.exports=c},function(e){e.exports=function(){this.__data__=[],this.size=0}},function(e,t,n){var r=n(45),o=Array.prototype.splice;e.exports=function(e){var t=this.__data__,n=r(t,e);return!(n<0)&&(n==t.length-1?t.pop():o.call(t,n,1),--this.size,!0)}},function(e,t,n){var r=n(46);e.exports=function(e,t){for(var n=e.length;n--;)if(r(e[n][0],t))return n;return-1}},function(e){e.exports=function(e,t){return e===t||e!=e&&t!=t}},function(e,t,n){var r=n(45);e.exports=function(e){var t=this.__data__,n=r(t,e);return n<0?void 0:t[n][1]}},function(e,t,n){var r=n(45);e.exports=function(e){return r(this.__data__,e)>-1}},function(e,t,n){var r=n(45);e.exports=function(e,t){var n=this.__data__,o=r(n,e);return o<0?(++this.size,n.push([e,t])):n[o][1]=t,this}},function(e,t,n){var r=n(32)(n(5),"Map");e.exports=r},function(e,t,n){var r=n(52);e.exports=function(e){var t=r(this,e).delete(e);return this.size-=t?1:0,t}},function(e,t,n){var r=n(53);e.exports=function(e,t){var n=e.__data__;return r(t)?n["string"==typeof t?"string":"hash"]:n.map}},function(e){e.exports=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}},function(e,t,n){var r=n(52);e.exports=function(e){return r(this,e).get(e)}},function(e,t,n){var r=n(52);e.exports=function(e){return r(this,e).has(e)}},function(e,t,n){var r=n(52);e.exports=function(e,t){var n=r(this,e),o=n.size;return n.set(e,t),this.size+=n.size==o?0:1,this}},function(e,t,n){var r=n(58);e.exports=function(e){return null==e?"":r(e)}},function(e,t,n){var r=n(4),o=n(59),a=n(11),i=n(18),s=r?r.prototype:void 0,c=s?s.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(a(t))return o(t,e)+"";if(i(t))return c?c.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n}},function(e){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}},function(e,t,n){var r=n(61),o=n(12),a=Object.prototype,i=a.hasOwnProperty,s=a.propertyIsEnumerable,c=r(function(){return arguments}())?r:function(e){return o(e)&&i.call(e,"callee")&&!s.call(e,"callee")};e.exports=c},function(e,t,n){var r=n(3),o=n(12);e.exports=function(e){return o(e)&&"[object Arguments]"==r(e)}},function(e){var t=/^(?:0|[1-9]\d*)$/;e.exports=function(e,n){var r=typeof e;return!!(n=null==n?9007199254740991:n)&&("number"==r||"symbol"!=r&&t.test(e))&&e>-1&&e%1==0&&e<n}},function(e){e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}},function(e,t,n){var r=n(18);e.exports=function(e){if("string"==typeof e||r(e))return e;var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"v1",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"v3",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"v4",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"v5",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"NIL",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"version",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"validate",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"stringify",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"parse",{enumerable:!0,get:function(){return p.default}});var r=d(n(66)),o=d(n(71)),a=d(n(75)),i=d(n(76)),s=d(n(78)),c=d(n(79)),l=d(n(69)),u=d(n(68)),p=d(n(73));function d(e){return e&&e.__esModule?e:{default:e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(67)),o=a(n(68));function a(e){return e&&e.__esModule?e:{default:e}}let i,s,c=0,l=0;var u=function(e,t,n){let a=t&&n||0;const u=t||new Array(16);let p=(e=e||{}).node||i,d=void 0!==e.clockseq?e.clockseq:s;if(null==p||null==d){const t=e.random||(e.rng||r.default)();null==p&&(p=i=[1|t[0],t[1],t[2],t[3],t[4],t[5]]),null==d&&(d=s=16383&(t[6]<<8|t[7]))}let f=void 0!==e.msecs?e.msecs:Date.now(),h=void 0!==e.nsecs?e.nsecs:l+1;const y=f-c+(h-l)/1e4;if(y<0&&void 0===e.clockseq&&(d=d+1&16383),(y<0||f>c)&&void 0===e.nsecs&&(h=0),h>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");c=f,l=h,s=d,f+=122192928e5;const v=(1e4*(268435455&f)+h)%4294967296;u[a++]=v>>>24&255,u[a++]=v>>>16&255,u[a++]=v>>>8&255,u[a++]=255&v;const g=f/4294967296*1e4&268435455;u[a++]=g>>>8&255,u[a++]=255&g,u[a++]=g>>>24&15|16,u[a++]=g>>>16&255,u[a++]=d>>>8|128,u[a++]=255&d;for(let e=0;e<6;++e)u[a+e]=p[e];return t||(0,o.default)(u)};t.default=u},function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){if(!n&&(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),!n))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(r)};const r=new Uint8Array(16)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=(r=n(69))&&r.__esModule?r:{default:r};const a=[];for(let e=0;e<256;++e)a.push((e+256).toString(16).substr(1));var i=function(e,t=0){const n=(a[e[t+0]]+a[e[t+1]]+a[e[t+2]]+a[e[t+3]]+"-"+a[e[t+4]]+a[e[t+5]]+"-"+a[e[t+6]]+a[e[t+7]]+"-"+a[e[t+8]]+a[e[t+9]]+"-"+a[e[t+10]]+a[e[t+11]]+a[e[t+12]]+a[e[t+13]]+a[e[t+14]]+a[e[t+15]]).toLowerCase();if(!(0,o.default)(n))throw TypeError("Stringified UUID is invalid");return n};t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=(r=n(70))&&r.__esModule?r:{default:r};var a=function(e){return"string"==typeof e&&o.default.test(e)};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(72)),o=a(n(74));function a(e){return e&&e.__esModule?e:{default:e}}var i=(0,r.default)("v3",48,o.default);t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){function a(e,a,i,s){if("string"==typeof e&&(e=function(e){e=unescape(encodeURIComponent(e));const t=[];for(let n=0;n<e.length;++n)t.push(e.charCodeAt(n));return t}(e)),"string"==typeof a&&(a=(0,o.default)(a)),16!==a.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");let c=new Uint8Array(16+e.length);if(c.set(a),c.set(e,a.length),c=n(c),c[6]=15&c[6]|t,c[8]=63&c[8]|128,i){s=s||0;for(let e=0;e<16;++e)i[s+e]=c[e];return i}return(0,r.default)(c)}try{a.name=e}catch(e){}return a.DNS=i,a.URL=s,a},t.URL=t.DNS=void 0;var r=a(n(68)),o=a(n(73));function a(e){return e&&e.__esModule?e:{default:e}}const i="6ba7b810-9dad-11d1-80b4-00c04fd430c8";t.DNS=i;const s="6ba7b811-9dad-11d1-80b4-00c04fd430c8";t.URL=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=(r=n(69))&&r.__esModule?r:{default:r};var a=function(e){if(!(0,o.default)(e))throw TypeError("Invalid UUID");let t;const n=new Uint8Array(16);return n[0]=(t=parseInt(e.slice(0,8),16))>>>24,n[1]=t>>>16&255,n[2]=t>>>8&255,n[3]=255&t,n[4]=(t=parseInt(e.slice(9,13),16))>>>8,n[5]=255&t,n[6]=(t=parseInt(e.slice(14,18),16))>>>8,n[7]=255&t,n[8]=(t=parseInt(e.slice(19,23),16))>>>8,n[9]=255&t,n[10]=(t=parseInt(e.slice(24,36),16))/1099511627776&255,n[11]=t/4294967296&255,n[12]=t>>>24&255,n[13]=t>>>16&255,n[14]=t>>>8&255,n[15]=255&t,n};t.default=a},function(e,t){"use strict";function n(e){return 14+(e+64>>>9<<4)+1}function r(e,t){const n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function o(e,t,n,o,a,i){return r((s=r(r(t,e),r(o,i)))<<(c=a)|s>>>32-c,n);var s,c}function a(e,t,n,r,a,i,s){return o(t&n|~t&r,e,t,a,i,s)}function i(e,t,n,r,a,i,s){return o(t&r|n&~r,e,t,a,i,s)}function s(e,t,n,r,a,i,s){return o(t^n^r,e,t,a,i,s)}function c(e,t,n,r,a,i,s){return o(n^(t|~r),e,t,a,i,s)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(e){if("string"==typeof e){const t=unescape(encodeURIComponent(e));e=new Uint8Array(t.length);for(let n=0;n<t.length;++n)e[n]=t.charCodeAt(n)}return function(e){const t=[],n=32*e.length,r="0123456789abcdef";for(let o=0;o<n;o+=8){const n=e[o>>5]>>>o%32&255,a=parseInt(r.charAt(n>>>4&15)+r.charAt(15&n),16);t.push(a)}return t}(function(e,t){e[t>>5]|=128<<t%32,e[n(t)-1]=t;let o=1732584193,l=-271733879,u=-1732584194,p=271733878;for(let t=0;t<e.length;t+=16){const n=o,d=l,f=u,h=p;o=a(o,l,u,p,e[t],7,-680876936),p=a(p,o,l,u,e[t+1],12,-389564586),u=a(u,p,o,l,e[t+2],17,606105819),l=a(l,u,p,o,e[t+3],22,-1044525330),o=a(o,l,u,p,e[t+4],7,-176418897),p=a(p,o,l,u,e[t+5],12,1200080426),u=a(u,p,o,l,e[t+6],17,-1473231341),l=a(l,u,p,o,e[t+7],22,-45705983),o=a(o,l,u,p,e[t+8],7,1770035416),p=a(p,o,l,u,e[t+9],12,-1958414417),u=a(u,p,o,l,e[t+10],17,-42063),l=a(l,u,p,o,e[t+11],22,-1990404162),o=a(o,l,u,p,e[t+12],7,1804603682),p=a(p,o,l,u,e[t+13],12,-40341101),u=a(u,p,o,l,e[t+14],17,-1502002290),l=a(l,u,p,o,e[t+15],22,1236535329),o=i(o,l,u,p,e[t+1],5,-165796510),p=i(p,o,l,u,e[t+6],9,-1069501632),u=i(u,p,o,l,e[t+11],14,643717713),l=i(l,u,p,o,e[t],20,-373897302),o=i(o,l,u,p,e[t+5],5,-701558691),p=i(p,o,l,u,e[t+10],9,38016083),u=i(u,p,o,l,e[t+15],14,-660478335),l=i(l,u,p,o,e[t+4],20,-405537848),o=i(o,l,u,p,e[t+9],5,568446438),p=i(p,o,l,u,e[t+14],9,-1019803690),u=i(u,p,o,l,e[t+3],14,-187363961),l=i(l,u,p,o,e[t+8],20,1163531501),o=i(o,l,u,p,e[t+13],5,-1444681467),p=i(p,o,l,u,e[t+2],9,-51403784),u=i(u,p,o,l,e[t+7],14,1735328473),l=i(l,u,p,o,e[t+12],20,-1926607734),o=s(o,l,u,p,e[t+5],4,-378558),p=s(p,o,l,u,e[t+8],11,-2022574463),u=s(u,p,o,l,e[t+11],16,1839030562),l=s(l,u,p,o,e[t+14],23,-35309556),o=s(o,l,u,p,e[t+1],4,-1530992060),p=s(p,o,l,u,e[t+4],11,1272893353),u=s(u,p,o,l,e[t+7],16,-155497632),l=s(l,u,p,o,e[t+10],23,-1094730640),o=s(o,l,u,p,e[t+13],4,681279174),p=s(p,o,l,u,e[t],11,-358537222),u=s(u,p,o,l,e[t+3],16,-722521979),l=s(l,u,p,o,e[t+6],23,76029189),o=s(o,l,u,p,e[t+9],4,-640364487),p=s(p,o,l,u,e[t+12],11,-421815835),u=s(u,p,o,l,e[t+15],16,530742520),l=s(l,u,p,o,e[t+2],23,-995338651),o=c(o,l,u,p,e[t],6,-198630844),p=c(p,o,l,u,e[t+7],10,1126891415),u=c(u,p,o,l,e[t+14],15,-1416354905),l=c(l,u,p,o,e[t+5],21,-57434055),o=c(o,l,u,p,e[t+12],6,1700485571),p=c(p,o,l,u,e[t+3],10,-1894986606),u=c(u,p,o,l,e[t+10],15,-1051523),l=c(l,u,p,o,e[t+1],21,-2054922799),o=c(o,l,u,p,e[t+8],6,1873313359),p=c(p,o,l,u,e[t+15],10,-30611744),u=c(u,p,o,l,e[t+6],15,-1560198380),l=c(l,u,p,o,e[t+13],21,1309151649),o=c(o,l,u,p,e[t+4],6,-145523070),p=c(p,o,l,u,e[t+11],10,-1120210379),u=c(u,p,o,l,e[t+2],15,718787259),l=c(l,u,p,o,e[t+9],21,-343485551),o=r(o,n),l=r(l,d),u=r(u,f),p=r(p,h)}return[o,l,u,p]}(function(e){if(0===e.length)return[];const t=8*e.length,r=new Uint32Array(n(t));for(let n=0;n<t;n+=8)r[n>>5]|=(255&e[n/8])<<n%32;return r}(e),8*e.length))};t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(67)),o=a(n(68));function a(e){return e&&e.__esModule?e:{default:e}}var i=function(e,t,n){const a=(e=e||{}).random||(e.rng||r.default)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=a[e];return t}return(0,o.default)(a)};t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(72)),o=a(n(77));function a(e){return e&&e.__esModule?e:{default:e}}var i=(0,r.default)("v5",80,o.default);t.default=i},function(e,t){"use strict";function n(e,t,n,r){switch(e){case 0:return t&n^~t&r;case 1:return t^n^r;case 2:return t&n^t&r^n&r;case 3:return t^n^r}}function r(e,t){return e<<t|e>>>32-t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){const t=[1518500249,1859775393,2400959708,3395469782],o=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof e){const t=unescape(encodeURIComponent(e));e=[];for(let n=0;n<t.length;++n)e.push(t.charCodeAt(n))}else Array.isArray(e)||(e=Array.prototype.slice.call(e));e.push(128);const a=e.length/4+2,i=Math.ceil(a/16),s=new Array(i);for(let t=0;t<i;++t){const n=new Uint32Array(16);for(let r=0;r<16;++r)n[r]=e[64*t+4*r]<<24|e[64*t+4*r+1]<<16|e[64*t+4*r+2]<<8|e[64*t+4*r+3];s[t]=n}s[i-1][14]=8*(e.length-1)/Math.pow(2,32),s[i-1][14]=Math.floor(s[i-1][14]),s[i-1][15]=8*(e.length-1)&4294967295;for(let e=0;e<i;++e){const a=new Uint32Array(80);for(let t=0;t<16;++t)a[t]=s[e][t];for(let e=16;e<80;++e)a[e]=r(a[e-3]^a[e-8]^a[e-14]^a[e-16],1);let i=o[0],c=o[1],l=o[2],u=o[3],p=o[4];for(let e=0;e<80;++e){const o=Math.floor(e/20),s=r(i,5)+n(o,c,l,u)+p+t[o]+a[e]>>>0;p=u,u=l,l=r(c,30)>>>0,c=i,i=s}o[0]=o[0]+i>>>0,o[1]=o[1]+c>>>0,o[2]=o[2]+l>>>0,o[3]=o[3]+u>>>0,o[4]=o[4]+p>>>0}return[o[0]>>24&255,o[0]>>16&255,o[0]>>8&255,255&o[0],o[1]>>24&255,o[1]>>16&255,o[1]>>8&255,255&o[1],o[2]>>24&255,o[2]>>16&255,o[2]>>8&255,255&o[2],o[3]>>24&255,o[3]>>16&255,o[3]>>8&255,255&o[3],o[4]>>24&255,o[4]>>16&255,o[4]>>8&255,255&o[4]]};t.default=o},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default="00000000-0000-0000-0000-000000000000"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=(r=n(69))&&r.__esModule?r:{default:r};var a=function(e){if(!(0,o.default)(e))throw TypeError("Invalid UUID");return parseInt(e.substr(14,1),16)};t.default=a},function(e){e.exports=function(e){return void 0===e}},function(e,t,n){var r=n(82),o=n(86),a=n(60),i=n(11),s=n(91),c=n(92),l=n(83),u=n(94),p=Object.prototype.hasOwnProperty;e.exports=function(e){if(null==e)return!0;if(s(e)&&(i(e)||"string"==typeof e||"function"==typeof e.splice||c(e)||u(e)||a(e)))return!e.length;var t=o(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(l(e))return!r(e).length;for(var n in e)if(p.call(e,n))return!1;return!0}},function(e,t,n){var r=n(83),o=n(84),a=Object.prototype.hasOwnProperty;e.exports=function(e){if(!r(e))return o(e);var t=[];for(var n in Object(e))a.call(e,n)&&"constructor"!=n&&t.push(n);return t}},function(e){var t=Object.prototype;e.exports=function(e){var n=e&&e.constructor;return e===("function"==typeof n&&n.prototype||t)}},function(e,t,n){var r=n(85)(Object.keys,Object);e.exports=r},function(e){e.exports=function(e,t){return function(n){return e(t(n))}}},function(e,t,n){var r=n(87),o=n(50),a=n(88),i=n(89),s=n(90),c=n(3),l=n(36),u="[object Map]",p="[object Promise]",d="[object Set]",f="[object WeakMap]",h="[object DataView]",y=l(r),v=l(o),g=l(a),m=l(i),b=l(s),w=c;(r&&w(new r(new ArrayBuffer(1)))!=h||o&&w(new o)!=u||a&&w(a.resolve())!=p||i&&w(new i)!=d||s&&w(new s)!=f)&&(w=function(e){var t=c(e),n="[object Object]"==t?e.constructor:void 0,r=n?l(n):"";if(r)switch(r){case y:return h;case v:return u;case g:return p;case m:return d;case b:return f}return t}),e.exports=w},function(e,t,n){var r=n(32)(n(5),"DataView");e.exports=r},function(e,t,n){var r=n(32)(n(5),"Promise");e.exports=r},function(e,t,n){var r=n(32)(n(5),"Set");e.exports=r},function(e,t,n){var r=n(32)(n(5),"WeakMap");e.exports=r},function(e,t,n){var r=n(2),o=n(63);e.exports=function(e){return null!=e&&o(e.length)&&!r(e)}},function(e,t,n){e=n.nmd(e);var r=n(5),o=n(93),a=t&&!t.nodeType&&t,i=a&&e&&!e.nodeType&&e,s=i&&i.exports===a?r.Buffer:void 0,c=(s?s.isBuffer:void 0)||o;e.exports=c},function(e){e.exports=function(){return!1}},function(e,t,n){var r=n(95),o=n(96),a=n(97),i=a&&a.isTypedArray,s=i?o(i):r;e.exports=s},function(e,t,n){var r=n(3),o=n(63),a=n(12),i={};i["[object Float32Array]"]=i["[object Float64Array]"]=i["[object Int8Array]"]=i["[object Int16Array]"]=i["[object Int32Array]"]=i["[object Uint8Array]"]=i["[object Uint8ClampedArray]"]=i["[object Uint16Array]"]=i["[object Uint32Array]"]=!0,i["[object Arguments]"]=i["[object Array]"]=i["[object ArrayBuffer]"]=i["[object Boolean]"]=i["[object DataView]"]=i["[object Date]"]=i["[object Error]"]=i["[object Function]"]=i["[object Map]"]=i["[object Number]"]=i["[object Object]"]=i["[object RegExp]"]=i["[object Set]"]=i["[object String]"]=i["[object WeakMap]"]=!1,e.exports=function(e){return a(e)&&o(e.length)&&!!i[r(e)]}},function(e){e.exports=function(e){return function(t){return e(t)}}},function(e,t,n){e=n.nmd(e);var r=n(6),o=t&&!t.nodeType&&t,a=o&&e&&!e.nodeType&&e,i=a&&a.exports===o&&r.process,s=function(){try{var e=a&&a.require&&a.require("util").types;return e||i&&i.binding&&i.binding("util")}catch(e){}}();e.exports=s},function(e,t,n){var r=n(11);e.exports=function(){if(!arguments.length)return[];var e=arguments[0];return r(e)?e:[e]}},function(e,t,n){var r=n(100);e.exports=function(e){return(null==e?0:e.length)?r(e,1):[]}},function(e,t,n){var r=n(101),o=n(102);e.exports=function e(t,n,a,i,s){var c=-1,l=t.length;for(a||(a=o),s||(s=[]);++c<l;){var u=t[c];n>0&&a(u)?n>1?e(u,n-1,a,i,s):r(s,u):i||(s[s.length]=u)}return s}},function(e){e.exports=function(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e}},function(e,t,n){var r=n(4),o=n(60),a=n(11),i=r?r.isConcatSpreadable:void 0;e.exports=function(e){return a(e)||o(e)||!!(i&&e&&e[i])}}],t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={id:r,loaded:!1,exports:{}};return e[r](o,o.exports,n),o.loaded=!0,o.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e};var r={};return function(){"use strict";n.r(r),n.d(r,{default:function(){return fi}});var e={};n.r(e),n.d(e,{additionalData:function(){return Pr},alongRouteSearch:function(){return Kr},autocomplete:function(){return Fo},categorySearch:function(){return mo},crossStreetLookup:function(){return na},evChargingStationsAvailability:function(){return wo},fuzzySearch:function(){return Oo},geocode:function(){return ta},geometrySearch:function(){return So},nearbySearch:function(){return Eo},placeById:function(){return Io},poiCategories:function(){return Ao},poiDetails:function(){return Co},poiPhotos:function(){return Ro},poiSearch:function(){return Vo},reverseGeocode:function(){return Xo},structuredGeocode:function(){return aa}});var t={};n.r(t),n.d(t,{calculateReachableRange:function(){return da},calculateRoute:function(){return _a},longDistanceEVRouting:function(){return Sa},matrixRouting:function(){return ja}});var o={};n.r(o),n.d(o,{incidentDetails:function(){return Za},incidentDetailsV5:function(){return Qa},incidentViewport:function(){return ka},trafficFlowSegmentData:function(){return Ma}});var a={};n.r(a),n.d(a,{copyrights:function(){return ri},copyrightsCaption:function(){return ai},copyrightsCaptionV2:function(){return li},copyrightsV2:function(){return si},staticImage:function(){return ti}});var i=n(1),s=n.n(i);const c=s()["analytics.header.sdkName"]+"/"+s()["sdk.version"],l=s()["analytics.header.name"],u=()=>(n.g.__tomtomAnalyticsInfo_=n.g.__tomtomAnalyticsInfo_?n.g.__tomtomAnalyticsInfo_:{},n.g.__tomtomAnalyticsInfo_),p=()=>{const e=void 0!==u().productInfo?" "+u().productInfo:"";return c+e},d=()=>{const e={};return e[l]=p(),e},f="EXTENDED_SEARCH",h="MAP",y="ROUTING",v="SEARCH",g="TRAFFIC_FLOW",m="TRAFFIC_INCIDENTS";function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){_(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function O(e){return"number"==typeof e&&isFinite(e)}function P(e){return null!=e&&!function(e){return e!=e}(e)}function S(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&(Array.isArray(e[n])?t[n]=e[n].slice(0):"object"==typeof e[n]?(t[n]={},S(e[n],t[n])):t[n]=e[n])}function x(e,t,n){var r;e[t]=void 0===(r=e[t])?{}:r;for(const r in n[t])Object.prototype.hasOwnProperty.call(n[t],r)&&(e[t][r]=n[t][r])}function E(e,t){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}function T(e,t,n){if(-1===t.indexOf(e))throw new TypeError(n);return e}function I(e){if("string"!=typeof e)return{};let t=-1;const n=new RegExp("[a-zA-Z]");return function r(o){let a={},i="";for(;++t<e.length;){const s=e.charAt(t);switch(s){case"}":return""!==i&&(a[i]=!0),a;case"{":""===i?o?a=r():r():(a[i]=r(),i="");break;case",":""!==i&&(a[i]=!0),i="";break;default:n.test(s)&&(i+=s)}}return""!==i&&(a[i]=!0),a}(!0)}function j(e){const t={};return S(e,t),t}const A=/(-?\d+(?:\.\d+)?)(?:\s+|\s*,\s*)(-?\d+(?:\.\d+)?)/,k=/circle\((-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*,\s*(\d+)\)/;function C(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=w({},t);for(const t in e)Object.prototype.hasOwnProperty.call(e,t)&&x(n,t,e);return n}var L=n(2),R=n.n(L),D=n(10),V=n.n(D),M=n(13),F=n.n(M),U=n(14),N=n.n(U);const B={"af-ZA":{synonyms:{af:null,afr:null,"af-za":null,af_za:null,afrikaans:null},label:"Afrikaans"},ar:{synonyms:{ar:null,ara:null,"ar-ar":null,ar_ar:null,arabic:null},label:"Arabic"},"bg-BG":{synonyms:{bg:null,bul:null,"bg-bg":null,bg_bg:null,bulgarian:null},label:"Bulgarian"},"ca-ES":{synonyms:{ca:null,cat:null,"ca-fr":null,ca_fr:null,"ca-es":null,ca_es:null,catalan:null},label:"Catalan"},"zh-CN":{synonyms:{"zh-cn":null,zh_cn:null},label:"Chinese (PRC)"},"zh-TW":{synonyms:{zh:null,chi:null,"zh-tw":null,zh_tw:null,chinese:null},label:"Chinese (Taiwan)"},"cs-CZ":{synonyms:{cs:null,cz:null,cze:null,"cs-cz":null,cs_cz:null,czech:null},label:"Czech"},"da-DK":{synonyms:{da:null,dan:null,"da-dk":null,da_dk:null,danish:null},label:"Danish"},"nl-BE":{synonyms:{"nl-be":null,nl_be:null,"dutch belgium":null},label:"Dutch (Belgium)"},"nl-NL":{synonyms:{nl:null,dut:null,"nl-nl":null,nl_nl:null,dutch:null},label:"Dutch"},"en-AU":{synonyms:{aue:null,aus:null,"en-au":null,en_au:null,"english au":null},label:"English (Australia)"},"en-GB":{synonyms:{en:null,eng:null,"en-gb":null,en_gb:null,english:null,default:null},label:"English (Great Britain)"},"en-NZ":{synonyms:{"en-nz":null,en_nz:null,"english new zealand":null},label:"English (New Zealand)"},"en-US":{synonyms:{us:null,ame:null,"en-us":null,en_us:null,"english us":null},label:"English (US)"},"et-EE":{synonyms:{"et-ee":null,et_ee:null,estonian:null},label:"Estonian"},"eu-ES":{synonyms:{"eu-es":null,eu_es:null,basque:null},label:"Basque (Spain)"},"fi-FI":{synonyms:{fi:null,fin:null,"fi-fi":null,fi_fi:null,finnish:null},label:"Finnish"},"fr-CA":{synonyms:{"fr-ca":null,fr_ca:null,"french canadian":null},label:"French (Canadian)"},"fr-FR":{synonyms:{fr:null,fre:null,"fr-fr":null,fr_fr:null,french:null},label:"French"},"de-DE":{synonyms:{de:null,ger:null,"de-de":null,de_de:null,german:null},label:"German"},"el-GR":{synonyms:{el:null,gre:null,"el-gr":null,el_gr:null,greek:null},label:"Greek"},"gl-ES":{synonyms:{"gl-es":null,gl_es:null,galician:null},label:"Galician (Spain)"},"he-IL":{synonyms:{"he-il":null,he_il:null,hebrew:null},label:"Hebrew (Israel)"},"hr-HR":{synonyms:{hr:null,"hr-hr":null,hr_hr:null,croatian:null},label:"Croatian"},"hu-HU":{synonyms:{hu:null,hun:null,"hu-hu":null,hu_hu:null,hungarian:null},label:"Hungarian"},"id-ID":{synonyms:{id:null,ind:null,"id-id":null,id_id:null,indonesian:null},label:"Indonesian"},"it-IT":{synonyms:{it:null,ita:null,"it-it":null,it_it:null,italian:null},label:"Italian"},"kk-KZ":{synonyms:{"kk-kz":null,kk_kz:null,kazakh:null},label:"Kazakh (Kazakhstan)"},"lv-LV":{synonyms:{lt:null,"lv-lv":null,lv_lv:null,latvian:null},label:"Latvian"},"lt-LT":{synonyms:{lt:null,lit:null,"lt-lt":null,lt_lt:null,lithuanian:null},label:"Lithuanian"},"ms-MY":{synonyms:{ms:null,mal:null,"ms-my":null,ms_my:null,malay:null},label:"Malay"},"no-NO":{synonyms:{no:null,nb:null,nor:null,"nb-no":null,nb_no:null,"no-no":null,no_no:null,norwegian:null},label:"Norwegian"},"pl-PL":{synonyms:{pl:null,pol:null,"pl-pl":null,pl_pl:null,polish:null},label:"Polish"},"ro-RO":{synonyms:{"ro-ro":null,ro_ro:null,romanian:null},label:"Romanian"},"ru-RU":{synonyms:{ru:null,rus:null,"ru-ru":null,ru_ru:null,russian:null},label:"Russian"},"sr-RS":{synonyms:{"sr-rs":null,sr_rs:null,serbian:null},label:"Serbian"},"sk-SK":{synonyms:{sk:null,slo:null,"sk-sk":null,sk_sk:null,slovak:null},label:"Slovak"},"sl-SI":{synonyms:{sl:null,slv:null,"sl-si":null,sl_si:null,slovenian:null},label:"Slovenian"},"es-ES":{synonyms:{es:null,spa:null,"es-es":null,es_es:null,spanish:null},label:"Spanish"},"es-419":{synonyms:{"es-419":null,es_419:null,"latin america spanish":null},label:"Latin American Spanish"},"sv-SE":{synonyms:{sv:null,swe:null,"sv-se":null,sv_se:null,swedish:null},label:"Swedish"},"th-TH":{synonyms:{th:null,tha:null,"th-th":null,th_th:null,thai:null},label:"Thai"},"tr-TR":{synonyms:{tr:null,tur:null,"tr-tr":null,tr_tr:null,turkish:null},label:"Turkish"},"uk-UA":{synonyms:{"uk-ua":null,uk_ua:null,ukrainian:null},label:"Ukrainian"},"vi-VN":{synonyms:{"vi-vn":null,vi_vn:null,vietnamese:null},label:"Vietnamese (Viet Nam)"},NGT:{synonyms:{ngt:null},label:"Neutral Ground Truth"},"NGT-Latn":{synonyms:{"ngt-latn":null},label:"Neutral Ground Truth - Latin exonyms"},"en-CA":{synonyms:{"en-ca":null,en_ca:null,"english canadian":null},label:"English (Canada)"},"ko-KR":{synonyms:{ko:null,kor:null,"ko-kr":null,ko_kr:null,korean:null},label:"Korean"},"nb-NO":{synonyms:{nb:null,nor:null,"nb-no":null,nb_no:null,norwegian:null},label:"Norwegian"},"pt-BR":{synonyms:{br:null,pob:null,"pt-br":null,pt_br:null,"portuguese br":null},label:"Portuguese (BR)"},"pt-PT":{synonyms:{pt:null,por:null,"pt-pt":null,pt_pt:null,portuguese:null},label:"Portuguese"},"ru-Latn-RU":{synonyms:{"ru-latn-ru":null,ru_latn_ru:null},label:"Russian (Latin)"},"ru-Cyrl-RU":{synonyms:{"ru-cyrl-ru":null,ru_cyrl_ru:null},label:"Russian (Cyrlic)"},"es-MX":{synonyms:{mx:null,spm:null,"es-mx":null,es_mx:null,"spanish mx":null},label:"Spanish (Mexico)"},defaultValue:{value:"en-GB",label:"English (Great Britain)"}},W={ar:B.ar,ca:B["ca-ES"],cs:B["cs-CZ"],da:B["da-DK"],de:B["de-DE"],el:B["el-GR"],en:{synonyms:{en:null,eng:null,"en-gb":null,en_gb:null,english:null,us:null,ame:null,"en-us":null,en_us:null,"english us":null,default:null},label:"English"},es:{synonyms:{es:null,spa:null,"es-es":null,es_es:null,spanish:null,mx:null,spm:null,"es-mx":null,es_mx:null,"spanish mx":null},label:"Spanish"},et:B["et-EE"],fi:B["fi-FI"],fr:B["fr-FR"],he:B["he-IL"],hu:B["hu-HU"],id:B["id-ID"],it:B["it-IT"],lt:B["lt-LT"],lv:B["lv-LV"],nb:B["nb-NO"],nl:B["nl-NL"],no:B["no-NO"],pl:B["pl-PL"],pt:{synonyms:{br:null,por:null,"pt-br":null,pt_br:null,portuguese:null,pt:null,pob:null,"pt-pt":null,pt_pt:null,"portuguese br":null},label:"Portuguese"},ro:B["ro-RO"],ru:B["ru-RU"],sk:B["sk-SK"],sv:B["sv-SE"],th:B["th-TH"],tr:B["tr-TR"],zh:B["zh-TW"],defaultValue:{value:"en",label:"English (Great Britain)"}},q={ar:B.ar,"af-ZA":B["af-ZA"],"bg-BG":B["bg-BG"],"zh-TW":B["zh-TW"],"cs-CZ":B["cs-CZ"],"da-DK":B["da-DK"],"nl-NL":B["nl-NL"],"en-GB":B["en-GB"],"en-US":B["en-US"],"fi-FI":B["fi-FI"],"fr-FR":B["fr-FR"],"de-DE":B["de-DE"],"el-GR":B["el-GR"],"hu-HU":B["hu-HU"],"id-ID":B["id-ID"],"it-IT":B["it-IT"],"ko-KR":B["ko-KR"],"lt-LT":B["lt-LT"],"ms-MY":B["ms-MY"],"nb-NO":B["nb-NO"],"pl-PL":B["pl-PL"],"pt-BR":B["pt-BR"],"pt-PT":B["pt-PT"],"ru-RU":B["ru-RU"],"sk-SK":B["sk-SK"],"sl-SI":B["sl-SI"],"es-ES":B["es-ES"],"es-MX":B["es-MX"],"sv-SE":B["sv-SE"],"th-TH":B["th-TH"],"tr-TR":B["tr-TR"],defaultValue:B.defaultValue},z={NGT:B.NGT,"NGT-Latn":B["NGT-Latn"],"af-ZA":B["af-ZA"],ar:B.ar,"eu-ES":B["eu-ES"],"bg-BG":B["bg-BG"],"ca-ES":B["ca-ES"],"zh-CN":B["zh-CN"],"zh-TW":B["zh-TW"],"cs-CZ":B["cs-CZ"],"da-DK":B["da-DK"],"nl-BE":B["nl-BE"],"nl-NL":B["nl-NL"],"en-AU":B["en-AU"],"en-NZ":B["en-NZ"],"en-GB":B["en-GB"],"en-US":B["en-US"],"et-EE":B["et-EE"],"fi-FI":B["fi-FI"],"fr-CA":B["fr-CA"],"fr-FR":B["fr-FR"],"gl-ES":B["gl-ES"],"de-DE":B["de-DE"],"el-GR":B["el-GR"],"hr-HR":B["hr-HR"],"he-IL":B["he-IL"],"hu-HU":B["hu-HU"],"id-ID":B["id-ID"],"it-IT":B["it-IT"],"kk-KZ":B["kk-KZ"],"lv-LV":B["lv-LV"],"lt-LT":B["lt-LT"],"ms-MY":B["ms-MY"],"no-NO":B["no-NO"],"nb-NO":B["nb-NO"],"pl-PL":B["pl-PL"],"pt-BR":B["pt-BR"],"pt-PT":B["pt-PT"],"ro-RO":B["ro-RO"],"ru-RU":B["ru-RU"],"ru-Latn-RU":B["ru-Latn-RU"],"ru-Cyrl-RU":B["ru-Cyrl-RU"],"sr-RS":B["sr-RS"],"sk-SK":B["sk-SK"],"sl-SI":B["sl-SI"],"es-ES":B["es-ES"],"es-419":B["es-419"],"sv-SE":B["sv-SE"],"th-TH":B["th-TH"],"tr-TR":B["tr-TR"],"uk-UA":B["uk-UA"],"vi-VN":B["vi-VN"],defaultValue:B.defaultValue},G={ar:B.ar,"ca-ES":B["ca-ES"],"cs-CZ":B["cs-CZ"],"da-DK":B["da-DK"],"de-DE":B["de-DE"],"el-GR":B["el-GR"],"en-GB":B["en-GB"],"en-US":B["en-US"],"es-ES":B["es-ES"],"et-EE":B["et-EE"],"fi-FI":B["fi-FI"],"fr-FR":B["fr-FR"],"he-IL":B["he-IL"],"hu-HU":B["hu-HU"],"id-ID":B["id-ID"],"it-IT":B["it-IT"],"lt-LT":B["lt-LT"],"lv-LV":B["lv-LV"],"nb-NO":B["nb-NO"],"nl-NL":B["nl-NL"],"pl-PL":B["pl-PL"],"pt-PT":B["pt-PT"],"ro-RO":B["ro-RO"],"ru-RU":B["ru-RU"],"sk-SK":B["sk-SK"],"sv-SE":B["sv-SE"],"th-TH":B["th-TH"],"tr-TR":B["tr-TR"],"zh-TW":B["zh-TW"],defaultValue:B.defaultValue};function H(e){if(!V()(e)&&!R()(e))throw new TypeError("Unsupported key type",e);return e}function K(e){const t=parseFloat(e);if(!isFinite(t))throw new TypeError("a number is expected, but "+e+" ["+typeof e+"] given");return t}function Z(e,t){return n=>T(n,e,"Supported "+t+" is expected (one of: "+e+"), but "+n+" ["+typeof n+"] was given.")}const $=["StandardHouseholdCountrySpecific","IEC62196Type2CableAttached","IEC60309AC1PhaseBlue","IEC60309AC3PhaseRed","IEC62196Type2Outlet","IEC62196Type1CCS","IEC62196Type2CCS","IEC60309DCWhite","IEC62196Type1","IEC62196Type3","GBT20234Part2","GBT20234Part3","Chademo","Tesla"],Q=["Small_Paddle_Inductive","Large_Paddle_Inductive","IEC_60309_1_Phase","IEC_60309_3_Phase","IEC_62196_Type_1_Outlet","IEC_62196_Type_2_Outlet","IEC_62196_Type_3_Outlet","IEC_62196_Type_1_Connector_Cable_Attached","IEC_62196_Type_2_Connector_Cable_Attached","IEC_62196_Type_3_Connector_Cable_Attached","Combo_to_IEC_62196_Type_1_Base","Combo_to_IEC_62196_Type_2_Base","Type_E_French_Standard_CEE_7_5","Type_F_Schuko_CEE_7_4","Type_G_British_Standard_BS_1363","Type_J_Swiss_Standard_SEV_1011","China_GB_Part_2","China_GB_Part_3","IEC_309_DC_Plug","AVCON_Connector","Tesla_Connector","NEMA_5_20","CHAdeMO","SAE_J1772","TEPCO","Better_Place_Socket","Marechal_Socket","Standard_Household_Country_Specific"],X=["Battery_Exchange","Charge_100_to_120V_1_Phase_at_8A","Charge_100_to_120V_1_Phase_at_10A","Charge_100_to_120V_1_Phase_at_12A","Charge_100_to_120V_1_Phase_at_13A","Charge_100_to_120V_1_Phase_at_16A","Charge_100_to_120V_1_Phase_at_32A","Charge_200_to_240V_1_Phase_at_8A","Charge_200_to_240V_1_Phase_at_10A","Charge_200_to_240V_1_Phase_at_12A","Charge_200_to_240V_1_Phase_at_16A","Charge_200_to_240V_1_Phase_at_20A","Charge_200_to_240V_1_Phase_at_32A","Charge_200_to_240V_1_Phase_above_32A","Charge_200_to_240V_3_Phase_at_16A","Charge_200_to_240V_3_Phase_at_32A","Charge_380_to_480V_3_Phase_at_16A","Charge_380_to_480V_3_Phase_at_32A","Charge_380_to_480V_3_Phase_at_63A","Charge_50_to_500V_Direct_Current_at_62A_25kW","Charge_50_to_500V_Direct_Current_at_125A_50kW","Charge_200_to_450V_Direct_Current_at_200A_90kW","Charge_200_to_480V_Direct_Current_at_255A_120kW","Charge_Direct_Current_at_20kW","Charge_Direct_Current_at_50kW","Charge_Direct_Current_above_50kW"],J=["NGT","NGT-Latn","ar","bg-BG","zh-TW","cs-CZ","da-DK","nl-NL","en-AU","en-CA","en-GB","en-NZ","en-US","fi-FI","fr-FR","de-DE","el-GR","hu-HU","id-ID","it-IT","ko-KR","lt-LT","ms-MY","nb-NO","pl-PL","pt-BR","pt-PT","ru-RU","ru-Latn-RU","ru-Cyrl-RU","sk-SK","sl-SI","es-ES","es-MX","sv-SE","th-TH","tr-TR"],Y=["Petrol","LPG","Diesel","Biodiesel","DieselForCommercialVehicles","E85","LNG","CNG","Hydrogen","AdBlue"],ee="\n    {\n        incidents {\n            type,\n            geometry {\n                type,\n                coordinates\n            },\n            properties {\n                id,\n                iconCategory,\n                magnitudeOfDelay,\n                events {\n                    description,\n                    code,\n                    iconCategory\n                },\n                startTime,\n                endTime,\n                from,\n                to,\n                length,\n                delay,\n                roadNumbers,\n                aci {\n                    probabilityOfOccurrence,\n                    numberOfReports,\n                    lastReportTime\n                }\n            }\n        }\n    }";function te(e){return e.toString().match(/(\d\d\d\d)(-)?(\d\d)(-)?(\d\d)(T)?(\d\d)(:)?(\d\d)(:)?(\d\d)(\.\d+)?(Z|([+-])(\d\d)(:)?(\d\d))/)}function ne(e,t,n){return isFinite(e)&&e>=t&&e<=n}function re(e){return e.constructor.toString().indexOf("Array")<0}function oe(e,t){if(e)throw new TypeError(t)}function ae(e){const t=parseFloat(e);if(!ne(t,-180,180))throw new TypeError("an longitude <-180,180> is expected, but "+e+" ["+typeof e+"] given");return t}function ie(e){var t;return oe((t=e,!(Object.prototype.hasOwnProperty.call(t,"chargingConnections")&&Object.prototype.hasOwnProperty.call(t,"chargingCurve"))),"a chargingMode is expected, but "+e+" ["+typeof e+"] given"),se(e.chargingCurve),de(e.chargingConnections),e}function se(e){if(e.length>10)throw new Error("Given chargingCurve array contains more than 10 elements.");return e.forEach((e=>{ce(e)})),e}function ce(e){var t;return oe((t=e,!(Object.prototype.hasOwnProperty.call(t,"chargeInkWh")&&Object.prototype.hasOwnProperty.call(t,"timeToChargeInSeconds"))),"a chargingCurveSupportPoint is expected, but "+e+" ["+typeof e+"] given"),oe(!ne(e.chargeInkWh,0,Number.MAX_VALUE),"a chargeInkWh is expected, but "+e.chargeInkWh+" ["+typeof e.chargeInkWh+"] given"),oe(!ne(e.timeToChargeInSeconds,0,Number.MAX_VALUE),"a timeToChargeInSeconds is expected, but "+e.timeToChargeInSeconds+" ["+typeof e.timeToChargeInSeconds+"] given"),e}function le(e){var t;return oe((t=e,!(Object.prototype.hasOwnProperty.call(t,"facilityType")&&Object.prototype.hasOwnProperty.call(t,"plugType"))),"a chargingConnection is expected, but "+e+" ["+typeof e+"] given"),ue(e.plugType),pe(e.facilityType),e}function ue(e){return T(e,Q,"Plug type is expected to be one of supported values, but "+e+" ["+typeof e+"] given")}function pe(e){return T(e,X,"Facility type is expected to be one of supported values, but "+e+" ["+typeof e+"] given")}function de(e){if(e.length>20)throw new Error("Given chargingConnections array contains more than 20 elements.");return e.forEach((e=>{le(e)})),e}function fe(e){const t=parseFloat(e);if(!ne(t,-90,90))throw new TypeError("an latitude <-90,90> is expected, but "+e+" ["+typeof e+"] given");return t}function he(e){let t,n;if(Array.isArray(e)){if(2!==e.length||2!==e.filter(isFinite).length)throw new TypeError("Invalid point array in route points");t=e[1],n=e[0]}else{if(!isFinite(e.lat)||!isFinite(e.lon)&&!isFinite(e.lng))throw new TypeError("Invalid point object in route points");t=e.lat,n=void 0!==e.lon?e.lon:e.lng}if(!("number"==typeof t||t instanceof Number)||!("number"==typeof n||n instanceof Number))throw new TypeError("Lat and lon components of point should be finite numbers");ae(n),fe(t)}function ye(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(Object.prototype.hasOwnProperty.call(t,n)&&Array.isArray(e[n].validators))for(const r of e[n].validators)R()(r)&&(t[n]=r(t[n]));if(!0===e[n].required&&!Object.prototype.hasOwnProperty.call(t,n))throw new Error("Missing required "+n)}}function ve(e,t,n,r){if(F()(e)||F()(t))throw new TypeError("Number in interval validator requires min and max value parameters");return function(o){const a=parseFloat(o);if(!ne(a,e,t)||r&&!N()(a))throw new TypeError(n+", but "+o+" ["+typeof o+"] given");return a}}function ge(e,t,n){return ve(e,t,n,!0)}function me(e,t,n){if(V()(e)&&(e=e.split(",")),Array.isArray(e)&&e.length>0){for(let r=0;r<e.length;r+=1)T(e[r],n,t);return e.join(",")}throw new TypeError(t)}function be(e,t){if(!te(e))throw new TypeError('Invalid "'.concat(t,'" parameter value.\n        Valid format: YYYY-MM-DDThh:mm:ss.SSSTZD'));return e}function we(e){if(V()(e)&&/^[a-zA-Z0-9-]{1,100}$/.test(e))return e;throw new TypeError("a string matching regular expression ^[a-zA-Z0-9-]{1,100}$ is expected, but "+e+" ["+typeof e+"] given")}function _e(e){return"false"!==e&&Boolean(e)}function Oe(e){const t=parseFloat(e);if(!N()(t)||t<0)throw new TypeError("a natural integer (greater than or equal 0) is expected, but "+e+" ["+typeof e+"] given");return t}function Pe(e){const t=parseFloat(e);if(!N()(t)||t<=0)throw new TypeError("a positive integer (greater than 0) is expected, but "+e+" ["+typeof e+"] given");return t}function Se(e){const t=parseFloat(e);if(!N()(t))throw new TypeError("an integer is expected, but "+e+" ["+typeof e+"] given");return t}function xe(e){return oe(!function(e){return Object.prototype.hasOwnProperty.call(e,"minLon")&&Object.prototype.hasOwnProperty.call(e,"maxLon")&&Object.prototype.hasOwnProperty.call(e,"minLat")&&Object.prototype.hasOwnProperty.call(e,"maxLat")}(e),"a bounding box is expected, but "+e+" ["+typeof e+"] given"),oe(!ne(e.minLat,-90,90),"a bounding box minimal latitude is expected "+e.minLat+" ["+typeof e.minLat+"] given"),oe(!ne(e.maxLat,-90,90),"a bounding box maximal latitude is expected "+e.maxLat+" ["+typeof e.maxLat+"] given"),oe(!ne(e.minLon,-270,180),"a bounding box minimal longitude is expected "+e.minLon+" ["+typeof e.minLon+"] given"),oe(!ne(e.maxLon,-180,270),"a bounding box maximal longitude is expected "+e.maxLon+" ["+typeof e.maxLon+"] given"),oe(function(e){return parseFloat(e.maxLat)<=parseFloat(e.minLat)||parseFloat(e.maxLon)<=parseFloat(e.minLon)}(e),"a bounding box expected but max <= min"),e}function Ee(e,t){return ve(e,t,"a number in interval <"+e+", "+t+"> is expected")}function Te(e,t){return ge(e,t,"an integer in interval <"+e+", "+t+"> is expected")}function Ie(e){if(!V()(e))throw new TypeError("a string is expected, but "+e+" ["+typeof e+"] given");return e}function je(e){return ge(0,22,"zoom level <0, 22> is expected")(e)}function Ae(e){if(!V()(e)||3!==e.length&&2!==e.length)throw new TypeError("a 2 or 3-characters long country name is expected, but "+e+" ["+typeof e+"] given");return e}function ke(e){const t=Object.keys(z);if(!V()(e)||t.indexOf(e)<0)throw new TypeError("One of pre-defined language codes was expected: "+t+", but "+e+" ["+typeof e+"] given");return e}function Ce(e){oe(!V()(e)&&re(e),"An array of string country names or string (divided with commas) of country names (two or three-characters long) is expected, but "+e+" ["+typeof e+"] given");const t=V()(e)?e:e.join();return oe(!t.match(/^([a-zA-z]{2,3},)*[a-zA-z]{2,3}$/),"An array of string country names or string (divided with commas) of country names (two or three-characters long) is expected, but "+e+" ["+typeof e+"] given"),t}function Le(e){return me(e,"List of pre-defined EV connector names was expected,but "+e+" ["+typeof e+"] given",$)}function Re(e){return me(e,"List of pre-defined Fuel types names was expected,but "+e+" ["+typeof e+"] given",Y)}function De(e){const t=["Local","International","Alternative"],n="List of pre-defined mapcode types names was expected,but "+e+" ["+typeof e+"] given";if(V()(e)&&(e=e.split(",")),Array.isArray(e)&&e.length>0){for(let r=0;r<e.length;r+=1)T(e[r],t,n);return e.join(",")}throw new TypeError(n)}function Ve(e,t){oe(!V()(t)&&re(t),"An array of string country names or string (divided with commas) of country names (three-characters long) is expected, but "+t+" ["+typeof t+"] given");const n=V()(t)?t:t.join();return e&&""===n||oe(!n.match(/^([a-zA-z]{3},)*[a-zA-z]{3}$/),"An array of string country names or string (divided with commas) of country names (three-characters long) is expected, but "+t+" ["+typeof t+"] given"),t}function Me(e){return function(e){if(!V()(e)||!A.test(e))throw new TypeError("A point is expected, but "+e+" ["+typeof e+"] given")}(e),e}function Fe(e){return ge(1,4,"Fuzziness level value (a positive integer lower than 5) is expected")(e)}function Ue(e){return ge(1,100,"Limit value (a positive integer lower than 100) is expected")(e)}function Ne(e){return ge(0,1900,"Offset an integer value <0, 1900> is expected")(e)}function Be(e){const t=["Country","CountrySubdivision","CountrySecondarySubdivision","CountryTertiarySubdivision","Municipality","MunicipalitySubdivision","Neighbourhood","PostalCodeArea"];for(const n of e.split(","))if(-1===t.indexOf(n))throw new TypeError("Entity type (".concat(t,") is expected, but ").concat(e," [").concat(typeof e,"] given"));return e}function We(e,t){return n=>{const r="Supported "+t+" type is expected (array with one of: "+e+"), but "+n+" ["+typeof n+"] given";if(re(n))throw new TypeError("an array is expected, but "+n+"  ["+typeof n+"] given");for(let t=0;t<n.length;t+=1)T(n[t],e,r);return n}}function qe(e){if(oe(re(e),"An array of geometry objects is expected, but "+e+" ["+typeof e+"] given"),!(e.length>0))throw new TypeError("An array of geometry objects is expected, but "+e+" ["+typeof e+"] given");for(let t=0;t<e.length;t+=1){const n=e[t];oe(!(Object.prototype.hasOwnProperty.call(n,"type")&&(Object.prototype.hasOwnProperty.call(n,"vertices")||Object.prototype.hasOwnProperty.call(n,"position")&&Object.prototype.hasOwnProperty.call(n,"radius"))),"An array of geometry objects is expected, but "+e+" ["+typeof e+"] given")}return e}function ze(e){if(isNaN(e)||!N()(e)||!(120===e||e>=5&&e<=60))throw new TypeError("Invalid `waitTimeSeconds` parameter value. Must be 120 or an integer between 5 and 60.");return e}function Ge(e){return be(e,"clientTime")}var He=n(19),Ke=n.n(He);class Ze{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.options=e}convert(e){return this._isSinglePoint(e)?this._convertPoint(e):this._convertToArrayOfPoints(e)}_isSinglePoint(e){if(Array.isArray(e))return 2===e.length&&"object"!=typeof e[0];if(V()(e)){if(e.split(":").length>=2)return!1}return!0}_convertToArrayOfPoints(e){return V()(e)?e.split(":").map(this._convertPoint.bind(this)):e.map(this._convertPoint.bind(this))}_convertPoint(e){return Ke()(e,"lat")&&Ke()(e,"lon")?this._covertToDefaultFormat(e.lon,e.lat):Ke()(e,"latitude")&&Ke()(e,"longitude")?this._covertToDefaultFormat(e.longitude,e.latitude):Ke()(e,"x")&&Ke()(e,"y")?this._covertToDefaultFormat(e.x,e.y):Array.isArray(e)&&2===e.length?this.options.isLatLon?this._covertToDefaultFormat(e[1],e[0]):this._covertToDefaultFormat(e[0],e[1]):V()(e)?this._convertStringPoint(e):e}_convertStringPoint(e){const t=e.split(",");if(!/^-?\d+(\.\d+)?,-?\d+(\.\d+)?$/.test(e)||2!==t.length)throw new Error("The point is not valid: "+e);return this.options.isLatLon?this._covertToDefaultFormat(t[1],t[0]):this._covertToDefaultFormat(t[0],t[1])}_covertToDefaultFormat(e,t){if(!e&&0!==e||!t&&0!==t)throw new Error("Longitude and latitude must be provided.");return R()(this.options.customPointConverter)?this.options.customPointConverter(e,t):{lng:parseFloat(e),lat:parseFloat(t)}}}var $e=n(9),Qe=n.n($e);const Xe=new Ze,Je=e=>{e&&(e.boundingBox&&(e.boundingBox.btmRightPoint=Xe.convert(e.boundingBox.btmRightPoint),e.boundingBox.topLeftPoint=Xe.convert(e.boundingBox.topLeftPoint)),e.viewport&&(e.viewport.btmRightPoint=Xe.convert(e.viewport.btmRightPoint),e.viewport.topLeftPoint=Xe.convert(e.viewport.topLeftPoint)),e.position&&(e.position=Xe.convert(e.position)),e.summary&&e.summary.geoBias&&(e.summary.geoBias=Xe.convert(e.summary.geoBias)))},Ye=(e,t,n)=>{F()(n)||(e[t]=n)},et=(e,t)=>({type:"Feature",geometry:{type:t,coordinates:[]},properties:e}),tt=e=>{const t={};t.id=e.id,Qe()(e)&&Object.keys(e).forEach((n=>{Ye(t,n,e[n])}));const n=et(t,"Point");return n.geometry.coordinates=[e.position.lng,e.position.lat],n},nt=e=>{const t={type:"FeatureCollection",features:[]};for(let n=0;n<e.results.length;n++){const r=tt(e.results[n]);t.features.push(r)}return t};function rt(e){e&&e.entryPoints&&Array.isArray(e.entryPoints)&&e.entryPoints.forEach((e=>{Je(e)}))}function ot(e){return e?(Array.isArray(e.results)?e.results.forEach((e=>{Array.isArray(e)?e.forEach((e=>{Je(e),rt(e)})):(Je(e),rt(e))})):(Je(e),rt(e)),Object.assign(e,{toGeoJson:()=>nt(e)})):e}function at(e){return Array.isArray(e.batchItems)?(e.batchItems=e.batchItems.map((e=>e.response.error?{error:e.response.error}:ot(e.response))),e):null}var it="POST",st="PATH",ct="QUERY",lt="OTHER",ut="HEADER";function pt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function dt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ft(e,t){let{data:n,trackingId:r}=e;const o="string"==typeof n?{data:n}:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?pt(Object(n),!0).forEach((function(t){dt(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):pt(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n),a=t?t(n):o;return a.getTrackingId=()=>r||null,a}var ht=n(65);const yt=s()["endpoints.copyrightsWorld"],vt=s()["endpoints.copyrightsBounds"],gt=s()["endpoints.copyrightsZoom"],mt=s()["endpoints.caption"],bt=s()["endpoints.copyrightsV2"],wt=s()["endpoints.captionV2"],_t=s()["endpoints.batchSearch"],Ot=s()["endpoints.batchSyncSearch"],Pt=s()["endpoints.batchSearchQuery"],St=s()["endpoints.geocode"],xt=s()["endpoints.reverseGeocode"],Et=s()["endpoints.batchReverseGeocodeQuery"],Tt=s()["endpoints.structuredGeocode"],It=s()["endpoints.search"],jt=s()["endpoints.batchStructuredGeocodeQuery"],At=s()["endpoints.adp"],kt=s()["endpoints.batchAdpQuery"],Ct=s()["endpoints.nearbySearch"],Lt=s()["endpoints.batchNearbySearchQuery"],Rt=s()["endpoints.autocomplete"],Dt=s()["endpoints.poiCategories"],Vt=s()["endpoints.chargingAvailability"],Mt=s()["endpoints.batchChargingAvailabilityQuery"],Ft=s()["endpoints.poiDetails"],Ut=s()["endpoints.poiPhotos"],Nt=s()["endpoints.placeById"],Bt=s()["endpoints.routing"],Wt=s()["endpoints.calculateReachableRange"],qt=s()["endpoints.batchRoutingQuery"],zt=s()["endpoints.batchRouting"],Gt=s()["endpoints.batchSyncRouting"],Ht=s()["endpoints.matrixRouting"],Kt=s()["endpoints.matrixSyncRouting"],Zt=s()["endpoints.batchReachableRangeQuery"],$t=s()["endpoints.longDistanceEVRouting"],Qt=s()["endpoints.incidentDetails"],Xt=s()["endpoints.incidentDetailsV5"],Jt=s()["endpoints.incidentViewport"],Yt=s()["endpoints.flowSegmentData"],en=(s()["endpoints.incidentRegions"],s()["endpoints.trafficLayer"],s()["endpoints.rasterTrafficFlowTilesLayer"],s()["endpoints.vectorTrafficFlowTilesLayer"],s()["endpoints.tileLayer"],s()["endpoints.staticImage"]),tn=s().origin;class nn extends Error{constructor(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];super(...n),Error.captureStackTrace&&Error.captureStackTrace(this,nn);let o="\n";e.forEach((e=>{o+=e.message+"\n"})),this.errors=e,this.message="Validation errors occured: "+o}}const rn=/^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/;class on{constructor(e){let{validators:t,converters:n,required:r,defaultValue:o,deprecationDate:a}=e;Object.assign(this,{validators:t,converters:n,required:r,defaultValue:o,deprecationDate:a}),this._validateFields()}_isArrayOfFunctions(e){if(!Array.isArray(e))return!1;for(let t=0;t<e.length;t++)if(!R()(e[t]))return!1;return!0}_validateFields(){if(null===this.validators||this.validators&&!this._isArrayOfFunctions(this.validators))throw new Error("Validators are not an array of functions.");if(null===this.converters||this.converters&&!this._isArrayOfFunctions(this.converters))throw new Error("Converters are not an array of functions.");if(void 0!==this.required&&"boolean"!=typeof this.required)throw new Error("Required must be a Boolean.");if(this.deprecationDate&&(Number.isNaN(Date.parse(this.deprecationDate))||!rn.test(this.deprecationDate)))throw new Error("deprecationDate must contain a valid date")}getDefaultValue(){return R()(this.defaultValue)?this.defaultValue():this.defaultValue}getConverters(){return this.converters?this.converters:[]}getValidators(){return this.validators?this.validators:[]}getDeprecationDate(){return this.deprecationDate}isRequired(){return!0===this.required}}var an=new class{constructor(){this.log={}}_isLogPrinted(e,t){const n=this.log[e];return!!n&&n[t]}_setLog(e,t){this.log[e]=this.log[e]||{},this.log[e][t]=!0}_displayWarning(e,t,n){const r=Date.now()>Date.parse(t),o="default"!==n?"(used in ".concat(n,") "):"";r?console.error("[DEPRECATION WARNING] The parameter '".concat(e,"' ").concat(o," deprecation period ")+"has ended. It is recommended to stop using it as it may stop working. Please refer to https://developer.tomtom.com/maps-sdk-web-js/documentation for more information"):console.warn("[DEPRECATION NOTICE] The parameter '".concat(e,"' ").concat(o,"is deprecated. ")+"By ".concat(t," we can not guarantee that it will continue to work. ")+"Please refer to https://developer.tomtom.com/maps-sdk-web-js/documentation for more information")}checkDeprecation(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"default";F()(e)||F()(t)||this._isLogPrinted(n,e)||(this._displayWarning(e,t,n),this._setLog(n,e))}};function sn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function cn(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?sn(Object(n),!0).forEach((function(t){ln(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):sn(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ln(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function un(e,t,n,r,o,a,i){try{var s=e[a](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,o)}function pn(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){un(a,r,o,i,s,"next",e)}function s(e){un(a,r,o,i,s,"throw",e)}i(void 0)}))}}const dn=(e,t,n,r)=>{const o=[];for(const a of t)try{a(e,n,r)}catch(e){o.push(e)}return o},fn=e=>{const t={};for(const[n,r]of Object.entries(e))t[n]=new on(r);return t},hn=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const r=fn(e);let o=[];for(const[e,a]of Object.entries(r)){const r=t[e],i="__all"===e;if(F()(r)&&a.isRequired())o.push(new Error("".concat(e," is a required field.")));else if(!F()(r)||i){an.checkDeprecation(e,a.getDeprecationDate(),n);const i=dn(r,a.getValidators(),t,e);o=[...o,...i]}}return o},yn=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const r=fn(e),o={};for(const[e,a]of Object.entries(r)){const r=a.getDefaultValue();let i=t[e];if(F()(i)||""===i){if(F()(r))continue;i=r}const s=a.getConverters();o[e]=s.reduce(((e,t)=>t(e,n)),i)}return o};function vn(e,t,n,r){const o={};let a=[];if(e.batchItems&&t.batchItems&&(o.batchItems=t.batchItems.map((t=>{const o=yn(e.batchItems,t,n);return a=a.concat(hn(e.batchItems,o,r)),o})),t.batchMode&&(o.batchMode=Z(["sync","async","redirect"],"batchMode")(t.batchMode)),t.key&&(o.key=H(t.key)),o.trackingId=t.trackingId?we(t.trackingId):(0,ht.v4)(),t.waitTimeSeconds)){if(K(t.waitTimeSeconds),!(120===t.waitTimeSeconds||t.waitTimeSeconds>=5&&t.waitTimeSeconds<=60))throw new Error("Invalid `waitTimeSeconds` parameter value. Must be 120 or an integer between 5 and 60.");o.waitTimeSeconds=t.waitTimeSeconds}return{batchProperties:o,batchErrors:a}}function gn(e){return mn.apply(this,arguments)}function mn(){return(mn=pn((function*(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0,a=arguments.length>5?arguments[5]:void 0,i=yn(e,t,n),s=hn(e,i,r);if(e.batchItems&&t.batchItems){const{batchProperties:o,batchErrors:a}=vn(e,t,n,r);i=cn(cn({},i),o),s=s.concat(a)}if(s.length)throw new nn(s);return o(i,a)}))).apply(this,arguments)}function bn(e,t,n,r,o){const a={batchItems:e};return function(){let i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c=r,l=i,u=e;return i.batchItems&&R()(o)&&(l={trackingId:i.trackingId,batchMode:i.batchMode,waitTimeSeconds:i.waitTimeSeconds,batchItems:i.batchItems,key:i.key},c=o,u=a),gn(u,l,t,n,c,s.abortSignal)}}var wn=n(80),_n=n.n(wn);function On(e,t){return e.replace(/\{ *([\w_]+) *\}/g,((e,n)=>{let r=t[n];return _n()(r)?"{"+n+"}":(R()(r)&&(r=r(n)),"query"===n?encodeURIComponent(r):r)}))}var Pn=window.fetch;function Sn(e,t,n,r,o,a,i){try{var s=e[a](i),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,o)}function xn(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){Sn(a,r,o,i,s,"next",e)}function s(e){Sn(a,r,o,i,s,"throw",e)}i(void 0)}))}}function En(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Tn(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?En(Object(n),!0).forEach((function(t){In(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):En(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function In(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function jn(e,t,n){e.pathParameters=e.pathParameters||{},e.pathParameters.contentType=n,e.pathParameters.protocol=e.pathParameters.protocol||"https";const r=On(e.url,e.pathParameters),o=d();o.Accept="application/json",e.headers&&e.headers.trackingId&&(o["Tracking-ID"]=e.headers.trackingId);let a=Tn({method:"GET",headers:o,mode:"cors"},e.abortSignal&&{signal:e.abortSignal});return t&&(a=Tn(Tn({},a),{},{transformResponse:t})),{options:e,url:r,requestOptions:a}}function An(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3?arguments[3]:void 0;return Pn(Rn(e,t),n).then(function(){var t=xn((function*(t){const n=yield r(t);if(!t.ok)return Promise.reject({response:t,data:n});if(e._getOriginalResponse)return t;if("batch"===e.requestType&&202===t.status)return t.headers.location;const o=t.headers&&(t.headers.get("tracking-id")||t.headers.get("Tracking-ID"));return Tn({data:n},o&&{trackingId:o})}));return function(e){return t.apply(this,arguments)}}()).catch((function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(n.signal&&!0===n.signal.aborted)return Promise.reject(t);const{response:r,data:o}=t,a=e._getOriginalResponse?r||t:Ln(o,r&&r.status)||t;return Promise.reject(a)}))}function kn(e){return e.text()}function Cn(e){return e.json()}const Ln=(e,t)=>{if(!e)return;const{error:n,detailedError:r}=e;return n&&r?{message:n.description,data:r,status:t}:e};function Rn(e,t){if(!e.queryParameters)return t;return t+"?"+Object.keys(e.queryParameters).map((function(t){return function(e,t){const n=e.queryParameters[t];let r="";r=Array.isArray(n)?n.map((function(e){return Dn(t,e)})).join("&"):Dn(t,e.queryParameters[t]);return r}(e,t)})).join("&")}function Dn(e,t){return encodeURIComponent(e)+"="+encodeURIComponent(t)}function Vn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Mn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Fn(e,t){const n=function(e){try{return JSON.stringify(e)}catch(e){return null}}(e);if(!n)throw new Error("Unsupported request body type: "+e);return function(e,t,n){e.headers||(e.headers={}),e.headers[t]||e.headers[t.toLowerCase()]||(e.headers[t]=n)}(t,"Content-Type","application/json"),n}const Un=function(e,t){const n=jn(e,t,"json");return An(n.options,n.url,n.requestOptions,Cn)},Nn=function(e){e.pathParameters=e.pathParameters||{},e.pathParameters.contentType="json",e.pathParameters.protocol=e.pathParameters.protocol||"https";const t=On(e.url,e.pathParameters),n=d();n.Accept="application/json",e.headers&&e.headers.trackingId&&(n["Tracking-ID"]=e.headers.trackingId);const r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Vn(Object(n),!0).forEach((function(t){Mn(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Vn(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({method:"POST",headers:n,mode:"cors",redirect:"follow"},e.abortSignal&&{signal:e.abortSignal});return function(e,t){const n=e.bodyParameters;let r;n&&(Qe()(n)?r=Fn(n,t):V()(n)&&(r=n),t.body=r)}(e,r),An(e,t,r,Cn)},Bn=function(e,t){const n=jn(e,t,"text");return An(n.options,n.url,n.requestOptions,kn)};let Wn=!1;const qn=()=>Wn?"http":"https";var zn=(e,t)=>{e.protocol=e&&e.protocol||qn();const n=e.pathParameters;return n&&"text"===n.contentType?Bn(e,t):Un(e,t)},Gn=e=>(e.protocol=e.protocol||qn(),Nn(e));function Hn(e){const t=e[1];return!t.application||t.application===ct}function Kn(e){return e[1].application===st}function Zn(e){return e[1].application===it}function $n(e){return e[1].application===lt}function Qn(e){return e[1].application===ut}function Xn(e){return{name:e[0],fieldName:e[2]}}function Jn(e,t){let n=Object.keys(e).map((r=e,e=>[r[e]&&r[e].name||e,r[e],e]));var r;return n=n.filter(t),n=n.map(Xn),n}function Yn(e){return Jn(e,Hn)}function er(e){return Jn(e,Kn)}function tr(e){return Jn(e,Zn)}function nr(e){return Jn(e,$n)}function rr(e){return Jn(e,Qn)}function or(e,t,n){const r={};return t(e).forEach((t=>{if(t.fieldName in n){const o=e[t.fieldName],a=n[t.fieldName];o.cast?o.cast(a,r):r[t.name]=a}})),r}function ar(e,t){return{pathParams:or(e,er,t),queryParams:or(e,Yn,t),postParams:or(e,tr,t),otherParams:or(e,nr,t),headerParams:or(e,rr,t)}}var ir=n(81),sr=n.n(ir);const cr="contentType";function lr(e){const t=Object.assign({},e);return t[cr]={application:st},t}function ur(e){return e[cr]=e[cr]||"json",e}const pr=e=>(t,n,r)=>{const{pathParams:o,queryParams:a,postParams:i,headerParams:s}=ar(lr(t),ur(n)),c={headers:s,url:"{protocol}://"+e,pathParameters:o,queryParameters:a,abortSignal:r};return sr()(i)?zn(c):(c.bodyParameters=i,Gn(c))};var dr=(e,t)=>{if(null==e)throw new TypeError(t);return e};function fr(e,t){return encodeURIComponent(e)+"="+encodeURIComponent(t)}function hr(e,t){if(!t)return e;return e+"?"+Object.keys(t).map((e=>function(e,t){const n=t[e];let r="";return r=Array.isArray(n)?n.map((function(t){return fr(e,t)})).join("&"):fr(e,t[e]),r}(e,t))).join("&")}var yr=(e,t,n)=>hr(On(e,t),n);function vr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function gr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function mr(e){let t;switch(e.batchMode){case"async":t=e.endpoints.async;break;case"sync":t=e.endpoints.sync;break;default:t=e.endpoints.async,e.queryParams.redirectMode="manual"}return"sync"!==e.batchMode&&e.waitTimeSeconds?e.queryParams.waitTimeSeconds=e.waitTimeSeconds:e.queryParams&&e.queryParams.waitTimeSeconds&&delete e.queryParams.waitTimeSeconds,Gn(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?vr(Object(n),!0).forEach((function(t){gr(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):vr(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({url:"{protocol}://"+t,queryParameters:e.queryParams,bodyParameters:e.bodyParams,headers:e.headers,requestType:"batch"},e.abortSignal&&{abortSignal:e.abortSignal})).then((t=>"manual"===e.queryParams.redirectMode?zn({url:"{protocol}://"+tn+t}):t))}const br=(e,t)=>(n,r,o)=>{const a={},i={};a.key=r.key;const s={};r.trackingId&&(s.trackingId=r.trackingId);const c=dr(r.batchItems);n=lr(n),i.batchItems=c.map((function(e){const{pathParams:r,queryParams:o,postParams:a}=ar(n,ur(e)),i={query:yr(t.single,r,o)};return sr()(a)||(i.post=a),i}));return mr({batchMode:r.batchMode||(i.batchItems.length<=e?"sync":"redirect"),waitTimeSeconds:r.waitTimeSeconds,queryParams:a,bodyParams:i,headers:s,endpoints:{sync:t.batchSync,async:t.batch},abortSignal:o})},wr=["origins","destinations"];function _r(e){const t={origins:e.origins,destinations:e.destinations},n=function(e){const t=Object.keys(e).filter((e=>-1===wr.indexOf(e)));return t.length?t.reduce(((t,n)=>(t[n]=e[n],t)),{}):null}(e);return n&&(t.options={post:n}),t}const Or={key:{validators:[Ie]},trackingId:{validators:[we],application:ut,defaultValue:ht.v4},geometries:{validators:[function(e){if(re(e))throw new TypeError("an array is expected, but "+e+"  ["+typeof e+"] given");return e}],required:!0},geometriesZoom:{validators:[function(e){return ve(0,22,"a geometries zoom value <0, 22> is expected")(e)}]}};function Pr(e,t){const n=pr(At),r=br(100,{single:kt,batchSync:Ot,batch:_t});return bn(Or,v,"additionalData",(function(e,t){return n(Or,e,t).then(ft)}),(function(e,t){return r(Or,e,t).then((e=>ft(e,at)))}))(e,t)}var Sr=n(98),xr=n.n(Sr);function Er(e,t){if(e)throw new TypeError(t)}function Tr(e){const t=parseFloat(e);if(!isFinite(t))throw new TypeError("an number is expected, but "+e+" ["+typeof e+"] given");return t-180*Math.ceil((t-90)/180)}function Ir(e){const t=parseFloat(e);if(!isFinite(t))throw new TypeError("an number is expected, but "+e+" ["+typeof e+"] given");return t-360*Math.ceil((t-180)/360)}function jr(e){if(Array.isArray(e)&&2===e.length)return[...e].reverse();if(V()(e)){const t=e.match(A);return Er(!t||!t[1]||!t[2],"A point is expected, but "+e+" ["+typeof e+"] given"),[t[2],t[1]]}if(function(e){return R()(e.lat)&&R()(e.lng)}(e))return[e.lat(),e.lng()];if(r=e,Object.prototype.hasOwnProperty.call(r,"lat")&&(Object.prototype.hasOwnProperty.call(r,"lon")||Object.prototype.hasOwnProperty.call(r,"lng")))return[e.lat,(t=e.lon,n=e.lng,void 0===t?n:t)];var t,n,r,o;if(o=e,Object.prototype.hasOwnProperty.call(o,"x")&&Object.prototype.hasOwnProperty.call(o,"y"))return[e.y,e.x];if(function(e){return Object.prototype.hasOwnProperty.call(e,"latitude")&&Object.prototype.hasOwnProperty.call(e,"longitude")}(e))return[e.latitude,e.longitude];throw new TypeError("A point is expected, but "+e+" ["+typeof e+"] given")}function Ar(e){let t,n;if(function(e){return Object.prototype.hasOwnProperty.call(e,"minLon")&&Object.prototype.hasOwnProperty.call(e,"minLat")&&Object.prototype.hasOwnProperty.call(e,"maxLon")&&Object.prototype.hasOwnProperty.call(e,"maxLat")}(e))return e;if(function(e){return Object.prototype.hasOwnProperty.call(e,"left")&&Object.prototype.hasOwnProperty.call(e,"bottom")&&Object.prototype.hasOwnProperty.call(e,"right")&&Object.prototype.hasOwnProperty.call(e,"top")}(e))return{minLon:e.left,minLat:e.bottom,maxLon:e.right,maxLat:e.top};if(function(e){return R()(e.getWest)&&R()(e.getEast)&&R()(e.getSouth)&&R()(e.getNorth)}(e))return{minLon:e.getWest(),minLat:e.getSouth(),maxLon:e.getEast(),maxLat:e.getNorth()};if(R()(e.getNorthEast)&&R()(e.getSouthWest))return n=jr(e.getNorthEast()),t=jr(e.getSouthWest()),{minLon:t[1],minLat:t[0],maxLon:n[1],maxLat:n[0]};if(Array.isArray(e)&&4===e.length)return{minLon:e[0],minLat:e[1],maxLon:e[2],maxLat:e[3]};if(Array.isArray(e)&&2===e.length)return t=jr(e[0]),n=jr(e[1]),{minLon:t[1],minLat:t[0],maxLon:n[1],maxLat:n[0]};if(V()(e)&&4===(e=e.trim().split(/\s*,\s*/)).length)return{minLon:parseFloat(e[0]),minLat:parseFloat(e[1]),maxLon:parseFloat(e[2]),maxLat:parseFloat(e[3])};throw new TypeError("Unable to cast "+e+" ["+typeof e+"] to bounding box")}function kr(e,t){if(F()(e)||""===e)return"";if(t[e])return e;e=e.toLowerCase();for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&"defaultValue"!==n&&Object.prototype.hasOwnProperty.call(t[n].synonyms,e))return n;return console.warn("Value provided is invalid ("+e+"). Default value ("+t.defaultValue.value+") will be used instead."),t.defaultValue.value}function Cr(e){const t=jr(e);return Tr(t[0])+","+Ir(t[1])}function Lr(e){return V()(e)&&e.indexOf("circle")>-1?function(e){const t=e.match(k);Er(!(t&&t[1]&&t[2]&&t[3]),"Unable to cast "+e+" ["+typeof e+"] to circle");const n=parseFloat(t[2]),r=parseFloat(t[1]),o=parseFloat(t[3]);return Er(!isFinite(n)||!isFinite(r),"Unable to cast "+e+" ["+typeof e+"] to circle"),"circle("+n+","+r+","+o+")"}(e):Array.isArray(e)&&3===e.length?"circle("+Tr(e[1])+","+Ir(e[0])+","+e[2]+")":Cr(e)}function Rr(e){const t=[];for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(Cr(e[n]));return t}function Dr(e){if(!V()(e))return e;const t=e.split(",");return{latitude:t[0],longitude:t[1]}}function Vr(e){return function(e){let t=e.minLon,n=e.maxLon,r=e.minLat,o=e.maxLat;if(n-t>360)n=180,t=-180;else{if(n>270){const e=Math.ceil(t/360);n-=360*e,t-=360*e}if(t<-270){const e=Math.ceil(-n/360);n+=360*e,t+=360*e}}return r=r<-90?-90:r,o=o>90?90:o,{minLon:t,minLat:r,maxLon:n,maxLat:o}}(Ar(e))}function Mr(e){return Cr(e)}function Fr(e){if(e&&e instanceof Date)return e.toISOString();if(!e||!V()(e))throw new TypeError("Unable to cast "+e+" ["+typeof e+"] to datetime value.");return"now"!==e&&(e=new Date(e).toISOString()),e}function Ur(e){let t;Er(!e||!Array.isArray(e),"Unable to cast "+e+" ["+typeof e+"] to geometry list (array)");for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t=e[n],"POLYGON"===t.type?t.vertices=Rr(t.vertices):"CIRCLE"===t.type&&(t.position=Cr(t.position)));return e}function Nr(e){return kr(e,z)}function Br(e){if(!e)return[];if(V()(e))return(e=e.trim().replace(/\s*[,;]\s*/g,",")).split(/[,;]+/);if(Array.isArray(e))return e;throw new TypeError("Unable to cast "+e+" ["+typeof e+"] to array of strings")}function Wr(e){return Math.round(Number(e))}function qr(e){if(V()(e))return e;if(!Array.isArray(e))throw new TypeError("An array is required");return e.join(":")}function zr(e){if(Array.isArray(e))return e.join();throw new TypeError("An array is required")}function Gr(e){return xr()(e)}const Hr={key:{validators:[H]},trackingId:{validators:[we],application:ut,defaultValue:ht.v4},maxDetourTime:{validators:[Te(1,3600)],required:!0},spreadingMode:{validators:[Z(["auto"],"spreading mode")]},route:{required:!0,converters:[function(e){return{points:e.map(jr).map((e=>{let[t,n]=e;return{lat:t,lon:n}}))}}],validators:[function(e){let t;if(void 0===e.points)throw new TypeError("Invalid structure of the route object");if(t=e.points,t&&!(Array.isArray(t)&&t.length>2))throw new TypeError("Provided route array "+t+" is not valid. It should be an array with at least 2 points.");return t.forEach(he),e}],application:it},query:{required:!0,validators:[Ie],application:st},limit:{validators:[Te(1,20)]},type:{validators:[Ie],defaultValue:"searchAlongRoute",application:st},brandSet:{validators:[Ie]},categorySet:{validators:[Ie]},connectorSet:{validators:[Le]},minPowerKW:{validators:[K]},maxPowerKW:{validators:[K]},openingHours:{validators:[Z(["nextSevenDays"],"openingHours parameter")]},timeZone:{validators:[Z(["iana"],"timeZone parameter")]},sortBy:{validators:[Z(["detourTime","detourOffset","detourDistance"],"sortBy")]},detourOffset:{validators:[_e]},view:{validators:[Ie]}};function Kr(e,t){const n=pr(It),r=br(100,{single:Pt,batchSync:Ot,batch:_t});return bn(Hr,v,"alongRouteSearch",((e,t)=>n(Hr,e,t).then((e=>ft(e,ot)))),((e,t)=>r(Hr,e,t).then((e=>ft(e,ot)))))(e,t)}const Zr="combustion",$r="electric",Qr="any";function Xr(e){if(isNaN(parseFloat(e))||!isFinite(e))throw new Error("A value parsable to float is expected, but "+e+" ["+typeof e+"] given")}function Jr(e){const t={};e.forEach((function(e){const n=e.split(",");if(2!==n.length)throw new Error("Invalid number of parameters in the pair around "+e);if(0===n[0].trim().length)throw new Error("Speed value must not be empty.");if(0===n[1].trim().length)throw new Error("Consumption value must not be empty.");if(Xr(n[0]),Xr(n[1]),Object.prototype.hasOwnProperty.call(t,parseFloat(n[0])))throw new Error("Duplicate speed: "+n[0]);t[parseFloat(n[0])]=parseFloat(n[1])})),Object.keys(t).length>1&&function(e){const t=Object.keys(e).sort((function(e,t){return parseFloat(e)>parseFloat(t)})),n=t.length;if(e[t[n-2]]>e[t[n-1]])throw new Error("Consumption for two highest speeds should be increasing")}(t)}function Yr(e,t){if(e.vehicleEngineType&&e.vehicleEngineType!==t&&t!==Qr)throw new Error("Expecting vehicleEngineType set to "+t)}function eo(e,t,n){if(!e[t]||!e[n])throw new Error("Missing dependant parameter. Expecting both defined: "+t+", "+n)}function to(e){if("bicycle"===e.travelMode||"pedestrian"===e.travelMode)throw new Error("Consumption model parameters cannot be set if travelMode is set to bicycle or pedestrian")}function no(e){if(!e.constantSpeedConsumptionInLitersPerHundredkm&&!e.constantSpeedConsumptionInkWhPerHundredkm)throw new Error("Consumption model cannot be used without setting constant speed consumption parameter")}function ro(e){return(t,n)=>{if(null==t)return;if(to(n),Yr(n,e),!V()(t))throw new TypeError('Expecting a String like "15.2,12.2:8.0,9.0"');const r=t.split(":");if(r.length<1||r.length>25)throw new Error("Incorrect amount of speed-consumption pairs provided. Expecting 1-25, but got "+t.length);Jr(r)}}function oo(e,t){return function(n,r){if(n&&(to(r),no(r),Yr(r,e),Xr(n),n<0))throw new Error(t+": Expecting positive value")}}function ao(e,t){return function(n,r){n&&(to(r),no(r),Yr(r,Qr),eo(r,e,t),eo(r,e,"vehicleWeight"),r.vehicleEngineType===Zr&&eo(r,e,"fuelEnergyDensityInMJoulesPerLiter"),function(e,t,n){if(e[t]*e[n]>1)throw new Error("Product of "+t+" and "+n+" cannot exceed 1")}(r,e,t),Xr(n))}}function io(e,t){return function(n,r){n&&(to(r),no(r),Yr(r,$r),eo(r,e,t),Xr(n))}}function so(e,t){let n,r;if("electric"===t.vehicleEngineType){if(n=t.currentChargeInkWh,r=t.energyBudgetInkWh,r>n)throw new Error("Energy budget may not be greater than current energy.")}else if(n=t.currentFuelInLiters,r=t.fuelBudgetInLiters,r>n)throw new Error("Fuel budget may not be greater than current fuel.");if(r<0)throw new Error("Budget may not be negative.")}function co(e,t,n){const r="constantSpeedConsumptionInLitersPerHundredkm"in t,o="constantSpeedConsumptionInkWhPerHundredkm"in t,a="electric"===t.vehicleEngineType;if("energyBudgetInkWh"===n&&e){if(!a)throw new Error('Engine type should be "electric" when energyBudgetInkWh is set');if(!o)throw new Error("Missing constant speed consumption for electric engine.")}else if("fuelBudgetInLiters"===n&&e){if(a)throw new Error('Engine type should be "combustion" or undefined when fuelBudgetInLiters is set');if(!r)throw new Error("Missing constant speed consumption for combustion engine.")}}function lo(e,t){return function(n,r){if(n&&Object.prototype.hasOwnProperty.call(r,t)&&P(r[t]))throw new Error(e+" parameter cannot be used in conjunction with "+t)}}function uo(e,t){return function(n,r){if(n&&!Object.prototype.hasOwnProperty.call(r,t))throw new Error(t+" must be specified when using with "+e)}}function po(e,t){const n=sr()(t.query),r=sr()(t.brandSet),o=sr()(t.categorySet);if(n&&r&&o)throw new Error("Empty query parameter is only allowed when used with brandSet or categorySet filters")}function fo(e,t){const n=t.recuperationInkWhPerkmAltitudeLoss,r=t.consumptionInkWhPerkmAltitudeGain;if(Xr(n),Xr(r),r<n)throw new Error("consumptionInkWhPerkmAltitudeGain must be greater than recuperationInkWhPerkmAltitudeLoss");if(r>500)throw new Error("recuperationInkWhPerkmAltitudeLoss and less than 500.0");if(n<0)throw new Error("recuperationInkWhPerkmAltitudeLoss must be greater than 0.0")}var ho=()=>({__all:{validators:[po]},key:{validators:[Ie]},trackingId:{validators:[we],application:ut,defaultValue:ht.v4},query:{validators:[Ie],application:st,defaultValue:""},typeahead:{validators:[_e]},limit:{validators:[Ue]},offset:{validators:[Ne],name:"ofs"},language:{validators:[ke],converters:[Nr]},countrySet:{validators:[Ce]},radius:{validators:[Oe]},center:{converters:[Mr],validators:[Me],cast:(e,t)=>{const n=e.split(",");t.lat=n[0],t.lon=n[1]}},type:{validators:[Ie],defaultValue:"search",application:st},bestResult:{validators:[_e],cast:(e,t)=>{e&&(t.limit=1,t.ofs=0)}},protocol:{validators:[Z(["http","https"],"protocol")]},extendedPostalCodesFor:{validators:[Ie]},view:{validators:[Z(["IL","MA","IN","PK","Unified","RU","TR","AR","CN"],"view")]},brandSet:{validators:[Ie]},categorySet:{validators:[Ie]},connectorSet:{validators:[Le]},minPowerKW:{validators:[K]},maxPowerKW:{validators:[K]},openingHours:{validators:[Z(["nextSevenDays"],"openingHours parameter")]},timeZone:{validators:[Z(["iana"],"timeZone parameter")]},mapcodes:{validators:[De]},fuelSet:{validators:[Re]},relatedPois:{validators:[Z(["off","child","parent","all"],"relatedPois")]}});const yo=()=>({validators:[xe],converters:[Vr],cast:(e,t)=>{t.topLeft="".concat(e.maxLat,",").concat(e.minLon),t.btmRight="".concat(e.minLat,",").concat(e.maxLon)}});class vo{constructor(e,t){this.options=e,this.additionalOptions=t,this.defaultFields=j(ho()),this.fields={}}_getRestService(){return{search:pr(It),batch:br(100,{single:Pt,batchSync:Ot,batch:_t})}}handleBatchServiceCall(e,t){return this._getRestService().batch(this.fields,e,t).then((e=>ft(e,at)))}handleServiceCall(e,t){return this._getRestService().search(this.fields,e,t).then((t=>{let{data:n,trackingId:r}=t;return ft({data:e.bestResult?n.results[0]:n,trackingId:r},ot)}))}construct(e){this.fields=C(this.fields,this.defaultFields);return bn(this.fields,v,e||"search",this.handleServiceCall.bind(this),this.handleBatchServiceCall.bind(this))(this.options,this.additionalOptions)}}class go extends vo{constructor(e,t){super(e,t),this.fields.type={defaultValue:"categorySearch",visible:!1},this.fields.boundingBox=yo()}}function mo(e,t){return new go(e,t).construct("categorySearch")}const bo={key:{validators:[H]},chargingAvailability:{validators:[Ie],required:!0},trackingId:{validators:[we],application:ut,defaultValue:ht.v4},connectorSet:{validators:[Le]},minPowerKW:{validators:[K]},maxPowerKW:{validators:[K]}};function wo(e,t){const n=pr(Vt),r=br(100,{single:Mt,batchSync:Ot,batch:_t});return bn(bo,f,"chargingAvailability",(function(e,t){return n(bo,e,t).then(ft)}),(function(e,t){return r(bo,e,t).then((e=>ft(e,at)))}))(e,t)}class _o extends vo{constructor(e,t){super(e,t),this.fields.minFuzzyLevel={validators:[Fe],defaultValue:1},this.fields.maxFuzzyLevel={validators:[Fe],defaultValue:2},this.fields.idxSet={validators:[Ie]},this.fields.entityTypeSet={converters:[Gr,zr],validators:[Be]},this.fields.sessionId={validators:[Ie]},this.fields.clientTime={validators:[Ge]},this.fields.boundingBox=yo()}}function Oo(e,t){return new _o(e,t).construct("fuzzySearch")}class Po extends vo{constructor(e,t){super(e,t),this.fields.type={defaultValue:"geometrySearch",visible:!1,application:st},this.fields.key={validators:[H]},this.fields.limit={validators:[Ue]},this.fields.language={validators:[ke]},this.fields.geometryList={validators:[qe],converters:[Ur],application:it},this.fields.idxSet={validators:[Ie]},this.fields.protocol={validators:[Z(["http","https"],"protocol")]},this.fields.extendedPostalCodesFor={validators:[Ie]},this.fields.entityTypeSet={converters:[Gr,zr],validators:[Be]},this.fields.boundingBox=yo()}}function So(e,t){return new Po(e,t).construct("geometrySearch")}class xo extends vo{constructor(e,t){super(e,t),this.fields.__all={validators:[]},this.fields.type={defaultValue:"nearbySearch",visible:!1},this.fields.query={visible:!1},this.fields.center={required:!0},this.fields.radius={required:!1,validators:[Ee(1,5e4)]},this.fields.typeahead={visible:!1}}_getRestService(){return{search:pr(Ct),batch:br(100,{single:Lt,batchSync:Ot,batch:_t})}}}function Eo(e,t){return new xo(e,t).construct("nearbySearch")}const To={key:{validators:[Ie]},trackingId:{validators:[we],application:ut,defaultValue:ht.v4},entityId:{validators:[Ie],required:!0},language:{validators:[ke],converters:[Nr]},relatedPois:{validators:[Z(["off","child","parent","all"],"relatedPois")]},mapcodes:{validators:[De]},timeZone:{validators:[Z(["iana"],"timeZone parameter")]},openingHours:{validators:[Z(["nextSevenDays"],"openingHours parameter")]},view:{validators:[Z(["AR","IL","MA","IN","PK","Unified","RU","TR","CN"],"view")]}};function Io(e,t){const n=pr(Nt);return bn(To,v,"placeById",((e,t)=>n(To,e,t).then((e=>ft(e,ot)))))(e,t)}const jo={key:{validators:[Ie]},trackingId:{validators:[we],application:ut,defaultValue:ht.v4},language:{validators:[ke]}};function Ao(e,t){return bn(jo,v,"poiCategories",((e,t)=>pr(Dt)(jo,e,t).then(ft)))(e,t)}const ko={key:{validators:[Ie],required:!0},trackingId:{validators:[we],application:ut,defaultValue:ht.v4},id:{validators:[Ie],required:!0}};function Co(e,t){const n=pr(Ft);return bn(ko,v,"poiDetails",(function(e,t){return n(ko,e,t).then(ft)}))(e,t)}const Lo={key:{validators:[Ie],required:!0},id:{validators:[Ie],required:!0},height:{validators:[Se],converters:[Wr]},width:{validators:[Se],converters:[Wr]}};function Ro(e,t){return bn(Lo,v,"poiPhotos",(function(e){return"https://"+yr(Ut,{},e)}))(e,t)}class Do extends vo{constructor(e,t){super(e,t),this.fields.type={defaultValue:"poiSearch",visible:!1},this.fields.boundingBox=yo()}}function Vo(e,t){return new Do(e,t).construct("poiSearch")}const Mo={key:{validators:[Ie]},trackingId:{validators:[we],application:ut,defaultValue:ht.v4},query:{validators:[Ie],required:!0,application:st},language:{validators:[ke],converters:[Nr],required:!0},limit:{validators:[Ue]},countrySet:{validators:[Ce]},radius:{validators:[Oe]},resultSet:{validators:[Ie]},center:{converters:[Mr],validators:[Me],cast:(e,t)=>{const n=e.split(",");t.lat=n[0],t.lon=n[1]}},sessionId:{validators:[Ie]},clientTime:{validators:[Ge]}};function Fo(e,t){const n=pr(Rt);return bn(Mo,v,"autocomplete",(function(e,t){return n(Mo,e,t).then((e=>ft(e)))}))(e,t)}const Uo=new Ze({isLatLon:!0}),No=e=>{e.position&&(e.position=Uo.convert(e.position)),e.address&&e.address.boundingBox&&(e.address.boundingBox.northEast=Uo.convert(e.address.boundingBox.northEast),e.address.boundingBox.southWest=Uo.convert(e.address.boundingBox.southWest))};function Bo(e){return e.addresses.forEach((e=>{Array.isArray(e)&&e.forEach((e=>{No(e)})),No(e)})),e}function Wo(e){return e.batchItems instanceof Array?(e.batchItems=e.batchItems.map((e=>e.response.error?{error:e.response.error}:Bo(e.response))),e):null}function qo(e,t){this.options=e,this.additionalOptions=t,this.fields={}}function zo(e){return new qo(e).construct()}qo.prototype.TYPE={reverseGeocode:"reverseGeocode",crossStreetLookup:"reverseGeocode/crossStreet"},qo.prototype.construct=function(e){return bn(C(this.fields,this.defaultFields),v,e||"reverseGeocodeBase",this.handleServiceCall.bind(this),this.handleBatchServiceCall.bind(this))(this.options,this.additionalOptions)},qo.prototype.handleServiceCall=function(e,t){return pr(xt)(this.fields,e,t).then((e=>ft(e,Bo)))},qo.prototype.handleBatchServiceCall=function(e,t){return br(100,{single:Et,batch:_t,batchSync:Ot})(this.fields,e,t).then((e=>ft(e,Wo)))},zo.prototype.constructor=qo;const Go="reverseGeocode",Ho="reverseGeocode/crossStreet",Ko={key:{validators:[Ie]},trackingId:{validators:[we],application:ut,defaultValue:ht.v4},language:{validators:[ke]},position:{converters:[Mr],validators:[Me],required:!0,application:st},heading:{validators:[K]},radius:{validators:[Oe]},protocol:{validators:[Z(["http","https"],"protocol")]},view:{validators:[Z(["AR","IL","MA","IN","PK","Unified","RU","TR","CN"],"view")]},allowFreeformNewline:{validators:[_e]}},Zo={type:{defaultValue:Go,visible:!1,application:st},entityType:{converters:[Gr,zr],validators:[Be]},returnSpeedLimit:{validators:[_e]},number:{validators:[Ie]},returnRoadUse:{validators:[_e]},roadUse:{converters:[function(e){if(V()(e))return'["'+e.replace(/["']|^\s+|\s+$/g,"").split(/[\s,]+/).join('","')+'"]';if(Array.isArray(e)){for(let t=0;t<e.length;t+=1)e[t]=String(e[t]).replace(/["']|^\s+|\s+$/g,"");return'["'+e.join('","')+'"]'}throw new TypeError("Unable to cast "+e+" ["+typeof e+"] to road use string")}],validators:[function(e){const t=["LimitedAccess","Arterial","Terminal","Ramp","Rotary","LocalStreet"];oe(!V()(e)||!e.match(/^\[("\w*",?)+\]$/),"Road use is expected, but "+e+"  ["+typeof e+"] given");const n=e.replace(/["[\]]/g,"").split(",");for(let r=0;r<n.length;r+=1)oe(t.indexOf(n[r])<0,"Road use ("+t+") is expected, but "+e+"  ["+typeof e+"] given");return e}]},streetNumber:{validators:[Ie]},returnMatchType:{validators:[_e]},mapcodes:{validators:[De]},dateTime:{validators:[function(e){return be(e,"dateTime")}]}},$o={type:{defaultValue:Ho,visible:!1,application:st},limit:{validators:[Ue]}};function Qo(e){if(e===Go)return Object.assign({},Ko,Zo);if(e===Ho)return Object.assign({},Ko,$o);throw new Error("Unsupported geocode type: "+e)}function Xo(e,t){const n=zo.prototype.constructor;function r(e,t){n.call(this,e,t),this.fields=Qo(Go)}return r.prototype=new n,r.prototype.constructor=r,new r(e,t).construct("reverseGeocode")}function Jo(e){return e?(Array.isArray(e.results)&&e.results.forEach((e=>{Array.isArray(e)?e.forEach((e=>{Je(e)})):Je(e)})),Je(e),Object.assign(e,{toGeoJson:()=>nt(e)})):e}function Yo(e){return e.batchItems instanceof Array?(e.batchItems=e.batchItems.map((e=>e.response.error?{error:e.response.error}:Jo(e.response))),e):null}const ea=(()=>({extendedPostalCodesFor:{validators:[Ie]},type:{defaultValue:"geocode",application:st},key:{validators:[Ie]},trackingId:{validators:[we],application:ut,defaultValue:ht.v4},query:{validators:[Ie],required:!0,application:st},typeahead:{validators:[_e]},limit:{validators:[Pe]},view:{validators:[Z(["AR","IL","MA","IN","PK","Unified","RU","TR","CN"],"view")]},offset:{validators:[Oe],name:"ofs"},language:{validators:[ke]},boundingBox:{validators:[xe],converters:[Vr],cast:(e,t)=>{t.topLeft="".concat(e.maxLat,",").concat(e.minLon),t.btmRight="".concat(e.minLat,",").concat(e.maxLon)}},center:{converters:[Mr],validators:[Me],cast:(e,t)=>{const n=e.split(",");t.lat=n[0],t.lon=n[1]}},countrySet:{validators:[Ce]},radius:{validators:[Oe]},bestResult:{validators:[_e],cast:(e,t)=>{e&&(t.limit=1,t.ofs=0)}},protocol:{validators:[Z(["http","https"],"protocol")]},timeZone:{validators:[Z(["iana"],"timeZone parameter")]},entityTypeSet:{converters:[Gr,zr],validators:[Be]}}))();function ta(e,t){const n=pr(St),r=br(100,{single:Pt,batchSync:Ot,batch:_t});return bn(ea,v,"geocode",(function(e,t){return n(ea,e,t).then((t=>{let{data:n,trackingId:r}=t;return ft({data:e.bestResult?n.results[0]:n,trackingId:r},Jo)}))}),(function(e,t){return r(ea,e,t).then((e=>ft(e,Yo)))}))(e,t)}function na(e,t){const n=zo.prototype.constructor;function r(e,t){n.call(this,e,t),this.fields=Qo(Ho)}return r.prototype=new n,r.prototype.constructor=r,new r(e,t).construct("crossStreetLookup")}const ra={key:{validators:[Ie]},trackingId:{validators:[we],application:ut,defaultValue:ht.v4},countryCode:{validators:[Ae],required:!0},limit:{validators:[Ue]},view:{validators:[Z(["AR","IL","MA","IN","PK","Unified","RU","TR","CN"],"view")]},offset:{validator:[Oe],name:"ofs"},language:{validators:[ke]},streetNumber:{validators:[Ie]},streetName:{validators:[Ie]},crossStreet:{validators:[Ie]},municipality:{validators:[Ie]},municipalitySubdivision:{validators:[Ie]},countryTertiarySubdivision:{validators:[Ie]},countrySecondarySubdivision:{validators:[Ie]},countrySubdivision:{validators:[Ie]},postalCode:{validators:[Ie]},protocol:{validators:[Z(["http","https"],"protocol")]},bestResult:{validators:[_e]},timeZone:{validators:[Z(["iana"],"timeZone parameter")]},extendedPostalCodesFor:{validators:[Ie]},entityTypeSet:{converters:[Gr,zr],validators:[Be]}};function oa(e){(function(e){const t=Boolean(e.bestResult);return delete e.bestResult,t})(e)&&(e.limit=1,e.offset=0)}function aa(e,t){const n=br(100,{single:jt,batch:_t,batchSync:Ot}),r=pr(Tt);return bn(ra,v,"structuredGeocode",(function(e,t){const n=Boolean(e.bestResult);return oa(e),r(ra,e,t).then((e=>{let{data:t,trackingId:r}=e;return ft({data:n?t.results[0]:t,trackingId:r},Jo)}))}),(function(e,t){return e.batchItems.forEach(oa),n(ra,e,t).then((e=>ft(e,Yo)))}))(e,t)}const ia={key:{validators:[H]},trackingId:{validators:[we],application:ut,defaultValue:ht.v4},routeType:{validators:[Z(["fastest","shortest","eco","thrilling"],"route type")]},traffic:{validators:[_e]},avoid:{validators:[We(["tollRoads","motorways","ferries","unpavedRoads","carpools","alreadyUsedRoads"],"avoid")],converters:[Br]},departAt:{validators:[function(e){if("now"===e||te(e)&&Date.now()<Date.parse(e))return e;throw new TypeError("Supported departAt is now or rfc3339 format and no earlier than now(), but "+e+" ["+typeof e+"] given")}],converters:[Fr]},arriveAt:{validators:[function(e){if(te(e)&&Date.now()<Date.parse(e))return e;throw new TypeError("Supported arriveAt is rfc3339 format, but and no earlier than now() "+e+" ["+typeof e+"] given")}],converters:[Fr]},travelMode:{validators:[Z(["car","truck","taxi","bus","van","motorcycle","bicycle","pedestrian"],"travel mode")]},hilliness:{validators:[Z(["low","normal","high"],"hilliness")]},windingness:{validators:[Z(["low","normal","high"],"windingness")]},report:{validators:[Z(["effectiveSettings"],"report")]},vehicleEngineType:{validators:[Z(["combustion","electric"],"vehicle engine type")]},vehicleMaxSpeed:{validators:[Oe]},vehicleWeight:{validators:[Oe,function(e,t){if(function(e){return e.accelerationEfficiency||e.decelerationEfficiency||e.uphillEfficiency||e.downhillEfficiency}(t)&&void 0===e)throw new Error("vehicleWeight parameter must be set if any efficiency parameters is present")}]},vehicleAxleWeight:{validators:[Oe]},vehicleLength:{validators:[Ee(0,Number.MAX_VALUE)]},vehicleWidth:{validators:[Ee(0,Number.MAX_VALUE)]},vehicleHeight:{validators:[Ee(0,Number.MAX_VALUE)]},vehicleCommercial:{validators:[_e]},vehicleLoadType:{validators:[We(["USHazmatClass1","USHazmatClass2","USHazmatClass3","USHazmatClass4","USHazmatClass5","USHazmatClass6","USHazmatClass7","USHazmatClass8","USHazmatClass9","otherHazmatExplosive","otherHazmatGeneral","otherHazmatHarmfulToWater"],"vehicle load type")],converters:[Br]},constantSpeedConsumptionInLitersPerHundredkm:{validators:[ro("combustion")],converters:[qr]},currentFuelInLiters:{validators:[oo("combustion","currentFuelInLiters")]},auxiliaryPowerInLitersPerHour:{validators:[oo("combustion","auxiliaryPowerInLitersPerHour")]},fuelEnergyDensityInMJoulesPerLiter:{validators:[function(e,t){e&&(to(t),Xr(e),no(t),Yr(t,"combustion"),function(e,t){if(!(P(e.accelerationEfficiency)&&P(e.decelerationEfficiency)&&P(e.uphillEfficiency)&&P(e.downhillEfficiency)))throw new Error("Efficiency parameters are required when using "+t)}(t,"fuelEnergyDensityInMJoulesPerLiter"))}]},accelerationEfficiency:{validators:[ao("accelerationEfficiency","decelerationEfficiency")]},decelerationEfficiency:{validators:[ao("decelerationEfficiency","accelerationEfficiency")]},uphillEfficiency:{validators:[ao("uphillEfficiency","downhillEfficiency")]},downhillEfficiency:{validators:[ao("downhillEfficiency","uphillEfficiency")]},constantSpeedConsumptionInkWhPerHundredkm:{validators:[ro("electric")],converters:[qr]},currentChargeInkWh:{validators:[io("currentChargeInkWh","maxChargeInkWh")]},maxChargeInkWh:{validators:[io("maxChargeInkWh","currentChargeInkWh")]},auxiliaryPowerInkW:{validators:[oo("electric","auxiliaryPowerInkW")]},protocol:{validators:[Z(["http","https"],"protocol")]},avoidAreas:{converters:[function(e){if(!Array.isArray(e))throw new TypeError("An array is required");return{rectangles:e.map((e=>({southWestCorner:Dr(Cr(e.southWestCorner)),northEastCorner:Dr(Cr(e.northEastCorner))})))}}],application:it},avoidVignette:{validators:[Ve.bind(void 0,!1),lo("avoidVignette","allowVignette")],converters:[Br],application:it},allowVignette:{validators:[Ve.bind(void 0,!0),lo("allowVignette","avoidVignette")],converters:[Br],application:it},recuperationInkWhPerkmAltitudeLoss:{validators:[uo("recuperationInkWhPerkmAltitudeLoss","consumptionInkWhPerkmAltitudeGain"),fo]},consumptionInkWhPerkmAltitudeGain:{validators:[uo("consumptionInkWhPerkmAltitudeGain","recuperationInkWhPerkmAltitudeLoss"),fo]},vehicleAdrTunnelRestrictionCode:{validators:[Z(["B","C","D","E"],"vehicleAdrTunnelRestrictionCode")]}};let sa={__all:{validators:[function(e,t){const n=["fuelBudgetInLiters"in t,"energyBudgetInkWh"in t,"timeBudgetInSec"in t,"distanceBudgetInMeters"in t].filter((e=>e)).length;if(0===n||n>1)throw new Error("Exactly one of fuelBudgetInLiters, energyBudgetInkWh, timeBudgetInSec and distanceBudgetInMeters must be set.")},function(e,t){const n="alreadyUsedRoads";if("avoid"in t&&t.avoid.indexOf(n)>-1)throw new Error(n+" is not allowed value for avoid parameter in Calculate Reachable Route request.");if("travelMode"in t&&["bicycle","pedestrian"].indexOf(t.travelMode)>-1)throw new Error(t.travelMode+" is not allowed value for travelMode parameter in Calculate Reachable Route request.");if("arriveAt"in t)throw new Error("arriveAt parameter is not allowed in Calculate Reachable Route request.")}]},origin:{validators:[Me],converters:[Mr],application:st},fuelBudgetInLiters:{validators:[co,so]},energyBudgetInkWh:{validators:[co,so]},distanceBudgetInMeters:{validators:[Ee(0,Number.MAX_VALUE)]},timeBudgetInSec:{validators:[Ee(0,Number.MAX_VALUE)]}};sa=E(sa,ia);const ca=new Ze;var la=e=>(e.reachableRange&&e.reachableRange.boundary&&Array.isArray(e.reachableRange.boundary)&&(e.reachableRange.boundary=ca.convert(e.reachableRange.boundary),e.reachableRange.center=ca.convert(e.reachableRange.center)),Object.assign(e,{toGeoJson:()=>(e=>({type:"Feature",geometry:{type:"Polygon",coordinates:[e.reachableRange.boundary.map((e=>[e.lng,e.lat]))]}}))(e)})),ua=e=>Array.isArray(e.batchItems)?(e.batchItems=e.batchItems.map((e=>e.response.error?{error:e.response.error}:la(e.response))),e):null;const pa=(e=>{const t=j(sa);return e instanceof Array&&e.forEach((function(e){delete t[e]})),t})();function da(e,t){const n=pr(Wt),r=br(100,{batchSync:Gt,batch:zt,single:Zt});return bn(pa,y,"calculateReachableRange",((e,t)=>n(pa,e,t).then((e=>ft(e,la)))),((e,t)=>r(pa,e,t).then((e=>ft(e,ua)))))(e,t)}function fa(e){const t=[];for(let n=0;n<e.length;n+=1)t.push([e[n].lng,e[n].lat]);return t}function ha(e){const t=e.legs.length>1,n=function(e){return{type:"Feature",properties:{summary:e.summary,sections:e.sections,segmentSummary:[]}}}(e);for(let r=0;r<e.legs.length;r+=1)n.properties.segmentSummary.push(e.legs[r].summary),e.legs[r].points&&(n.geometry=n.geometry||{coordinates:[]},t?(n.geometry.type="MultiLineString",n.geometry.coordinates.push(fa(e.legs[r].points))):(n.geometry.type="LineString",n.geometry.coordinates=fa(e.legs[r].points)));return e.guidance&&(n.properties.guidance=e.guidance),n}const ya=new Ze,va=(e,t,n)=>{n&&(e[t]=n)};function ga(e){const t=e.routes;return t&&t.length&&t.forEach((e=>{e.legs.forEach((e=>{e.points=ya.convert(e.points)}))})),Object.assign(e,{toGeoJson:()=>(e=>{const t={type:"FeatureCollection",features:[]};if(!e||!e.routes)return t;for(let n=0;n<e.routes.length;n+=1)t.features.push(ha(e.routes[n]));return t})(e),toRouteSectionsCollection:()=>(e=>{const t=[];return e&&e.routes?(e.routes.forEach((e=>{const n=[];for(let t=0;t<e.legs.length;t+=1)n.push(...e.legs[t].points);const r={type:"FeatureCollection",features:[]};e.sections.forEach((e=>{let t=n.slice(e.startPointIndex,e.endPointIndex+1);t=t.map((e=>[e.lng,e.lat]));const o={type:"Feature",geometry:{type:"LineString"},properties:{}};o.geometry.coordinates=t,va(o.properties,"sectionType",e.sectionType),va(o.properties,"travelMode",e.travelMode),va(o.properties,"countryCode",e.countryCode),va(o.properties,"simpleCategory",e.simpleCategory),va(o.properties,"effectiveSpeedInKmh",e.effectiveSpeedInKmh),va(o.properties,"delayInSeconds",e.delayInSeconds),va(o.properties,"magnitudeOfDelay",e.delayInSeconds),va(o.properties,"tec",e.tec),r.features.push(o)})),t.push(r)})),t):t})(e)})}function ma(e){return Array.isArray(e.batchItems)?(e.batchItems=e.batchItems.map((e=>e.response.error?{error:e.response.error}:ga(e.response))),e):null}let ba={alternativeType:{validators:[Z(["anyRoute","betterRoute"],"alternativeType")]},locations:{validators:[function(e){const t=A,n=k;e.constructor.toString().indexOf("Array")>-1&&(e=e.join(":"));const r=new RegExp("^"+t.source+":(?:(?:"+t.source+"|"+n.source+"):)*"+t.source+"$");if(!e.match(r))throw new TypeError("Routing location is expected. But "+e+" ["+typeof e+"] given");return e}],converters:[function(e){const t=[];if(V()(e))return e.split(":").map((e=>e.split(",").reverse().join(","))).join(":");if(Array.isArray(e)){Er(e.length<2,"Unable to cast "+e+" ["+typeof e+"] to routing locations string"),t.push(Cr(e[0]));for(let n=1;n<e.length-1;n+=1)t.push(Lr(e[n]));return t.push(Cr(e[e.length-1])),t.join(":")}throw new TypeError("Unable to cast "+e+" ["+typeof e+"] to routing locations string")}],required:!0,application:st},maxAlternatives:{validators:[Ee(0,5)]},instructionsType:{validators:[Z(["coded","text","tagged"],"instructions type")]},language:{validators:[function(e){const t=Object.keys(q);return T(e,t,"Supported routing guidance language is expected to be one of: "+t+"), but "+e+" ["+typeof e+"] given")}],converters:[function(e){return kr(e,q)}]},computeBestOrder:{validators:[_e]},routeRepresentation:{validators:[Z(["polyline","none"],"route representation")]},computeTravelTimeFor:{validators:[Z(["none","all"],"compute travel time for")]},vehicleHeading:{validators:[Te(0,359)]},minDeviationDistance:{validators:[Oe,lo("minDeviationDistance","arriveAt"),uo("minDeviationDistance","supportingPoints")]},minDeviationTime:{validators:[Oe,lo("minDeviationTime","arriveAt"),uo("minDeviationTime","supportingPoints")]},supportingPoints:{validators:[function(e){if(!Array.isArray(e))throw new TypeError("Expecting array in supporting points validator");if(!e.length||e.length<2)throw new TypeError("There should be at least two supporting points");return e}],converters:[function(e){const t=[];if(V()(e)&&(e=e.split(":")),Array.isArray(e))for(let n=0;n<e.length;n++)t.push(Cr(e[n]));else t.push(Cr(e));return function(e){return e.map(Dr)}(t)}],application:it},sectionType:{validators:[We(["carTrain","country","ferry","motorway","pedestrian","tollRoad","tollVignette","travelMode","tunnel","traffic"],"sectionType")],converters:[Br]}};function wa(e){ba=E(ba,ia);const t=j(ba);return e instanceof Array&&e.forEach((function(e){delete t[e]})),t}function _a(e,t){const n=wa(),r=pr(Bt),o=br(100,{batchSync:Gt,batch:zt,single:qt});return bn(n,y,"calculateRoute",(function(e,t){return r(n,e,t).then((e=>ft(e,ga)))}),(function(e,t){return o(n,e,t).then((e=>ft(e,ma)))}))(e,t)}const Oa=["arriveAt","travelMode","computeTravelTimeFor","alternativeType","maxAlternatives","instructionsType","language","computeBestOrder","routeRepresentation","supportingPoints","minDeviationDistance","minDeviationTime","constantSpeedConsumptionInLitersPerHundredkm","currentFuelInLiters","fuelEnergyDensityInMJoulesPerLiter","hilliness","windingness","routeType","vehicleEngineType","currentChargeInkWh","maxChargeInkWh","constantSpeedConsumptionInkWhPerHundredkm"],Pa={auxiliaryPowerInkW:{validators:[oo("electric","auxiliaryPowerInkW")]},constantSpeedConsumptionInkWhPerHundredkm:{validators:[ro("electric")],converters:[qr],required:!0},currentChargeInkWh:{validators:[io("currentChargeInkWh","maxChargeInkWh")],required:!0},maxChargeInkWh:{validators:[io("maxChargeInkWh","currentChargeInkWh")],required:!0},vehicleEngineType:{validators:[Z(["electric"],"vehicleEngineType")],required:!0},chargingModes:{validators:[function(e){if(e.length>10)throw new Error("Given chargingModes array contains more than 10 elements.");return e.forEach((e=>{ie(e)})),e}],required:!0,application:it},minChargeAtDestinationInkWh:{validators:[Ee(0,Number.MAX_VALUE)],required:!0},minChargeAtChargingStopsInkWh:{validators:[Ee(0,Number.MAX_VALUE)],required:!0},recuperationInkWhPerkmAltitudeLoss:{validators:[uo("recuperationInkWhPerkmAltitudeLoss","consumptionInkWhPerkmAltitudeGain"),fo]},consumptionInkWhPerkmAltitudeGain:{validators:[uo("consumptionInkWhPerkmAltitudeGain","recuperationInkWhPerkmAltitudeLoss"),fo]},vehicleAdrTunnelRestrictionCode:{validators:[Z(["B","C","D","E"],"vehicleAdrTunnelRestrictionCode")]},travelMode:{validators:[Z(["car"],"travel mode")]}};function Sa(e,t){const n=E(wa(Oa),Pa),r=pr($t);return bn(n,y,"longDistanceEVRouting",((e,t)=>r(n,e,t).then((e=>ft(e,ga)))))(e,t)}function xa(e){return e.error?{error:e.error}:e.matrix?e:null}const Ea=["locations","maxAlternatives","instructionsType","language","computeBestOrder","routeRepresentation","vehicleHeading","report","callback","minDeviationTime","minDeviationDistance","alternativeType","sectionType","supportingPoints","allowVignette","avoidAreas","batchMode","consumptionInkWhPerkmAltitudeGain","recuperationInkWhPerkmAltitudeLoss"],Ta={validators:[function(e){return t=>(t.forEach((t=>ye(e,t))),t)}({point:{validators:[(Ia={latitude:{validators:[function(e){return fe(e)}],required:!0},longitude:{validators:[function(e){return ae(e)}],required:!0}},e=>(ye(Ia,e),e))]}})],converters:[function(e){return t=>(t.forEach((t=>{for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&Object.prototype.hasOwnProperty.call(e,n)&&Array.isArray(e[n].converters)&&e[n].converters.forEach((e=>{R()(e)&&(t[n]=e(t[n]))}))})),t)}({point:{converters:[function(e){return t=>{for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&Object.prototype.hasOwnProperty.call(e,n)&&R()(e[n].converter)&&(t[n]=e[n].converter(t[n]));return t}}({latitude:{converters:[function(e){return Tr(e)}],required:!0},longitude:{converters:[function(e){return Ir(e)}],required:!0}})]}})],required:!0,application:it};var Ia;function ja(e,t){const n=function(e){const t=wa(Ea);t.origins=Ta,t.destinations=Ta,t.batchMode={application:lt},t.waitTimeSeconds={application:ct,validators:[ze]};const n=j(t);return e instanceof Array&&e.forEach((function(e){delete n[e]})),n}(),r=function(e,t){return(n,r,o)=>{const a=ar(n,r),i=_r(a.postParams),s=a.queryParams,c=a.headerParams;return mr({batchMode:r.batchMode||(i.origins.length*i.destinations.length<=e?"sync":"redirect"),headers:c,waitTimeSeconds:r.waitTimeSeconds,queryParams:s,bodyParams:i,endpoints:{sync:t.sync,async:t.async},abortSignal:o})}}(100,{sync:Kt,async:Ht});return bn(n,y,"matrixRouting",((e,t)=>r(n,e,t).then((e=>ft(e,xa)))))(e,t)}const Aa={key:{validators:[H]},trackingId:{validators:[we],application:ut,defaultValue:ht.v4},protocol:{validators:[Z(["http","https"],"protocol")]},sessionId:{validators:[Ie]}};function ka(e,t){const n=pr(Jt);return bn(Aa,m,"incidentViewport",(function(e,t){return n(Aa,e,t).then(ft)}))(e,t)}function Ca(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function La(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ca(Object(n),!0).forEach((function(t){Ra(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ca(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Ra(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Da(e){const t=e.flowSegmentData.coordinates.coordinate.map((e=>({lat:e.latitude,lng:e.longitude})));return Object.assign(e,{flowSegmentData:La(La({},e.flowSegmentData),{},{coordinates:{coordinate:t}})})}const Va={key:{validators:[Ie]},trackingId:{validators:[we],application:ut,defaultValue:ht.v4},zoom:{validators:[je],required:!0,application:st},style:{validators:[Z(["absolute","relative","relative-delay","relative0","relative0-dark","reduced-sensitivity"],"traffic flow style")],required:!0,application:st},point:{converters:[Mr],validators:[Me],required:!0},unit:{validators:[Z(["KMPH","MPH"])]},thickness:{validators:[Ee(1,20)]},openLr:{validators:[_e]}};function Ma(e,t){const n=pr(Yt);return bn(Va,g,"trafficFlowSegmentData",((e,t)=>n(Va,e,t).then((e=>ft(e,Da)))))(e,t)}function Fa(e,t){return e===t}var Ua=n(99),Na=n.n(Ua);const Ba=new Ze,Wa={0:"Unknown",1:"Accident",2:"Fog",3:"Dangerous Conditions",4:"Rain",5:"Ice",6:"Jam",7:"Lane Closed",8:"Road Closed",9:"Road Works",10:"Wind",11:"Flooding",12:"Detour",13:"Cluster",14:"Broken down vehicle"},qa={0:"unknown",1:"minor",2:"moderate",3:"major",4:"undefined"},za=(e,t)=>{const n=[],r={};if(r.id=e.id,F()(e.cbl)||F()(e.ctr)||(r.clusterBounds=[[e.cbl.lng,e.cbl.lat],[e.ctr.lng,e.ctr.lat]]),F()(e.op)||(r.originalPosition=[e.op.lng,e.op.lat]),F()(e.ic)||(r.incidentCategory=Wa[e.ic]),F()(e.ty)||(r.incidentSeverity=qa[e.ty]),F()(e.v)||(r.vectorGeometry=e.v),Ye(r,"clusterSize",e.cs),Ye(r,"description",e.d),Ye(r,"incidentCause",e.c),Ye(r,"from",e.f),Ye(r,"to",e.t),Ye(r,"roadNumber",e.r),Ye(r,"delaySeconds",e.dl),Ye(r,"lengthMeters",e.l),Ye(r,"endDate",e.ed),e.cpoi&&!t)n.push(...Na()(e.cpoi.map((e=>za(e,!1)))));else{e.cpoi&&(r.features=Na()(e.cpoi.map((e=>za(e,!0)))));const t=et(r,"Point");t.geometry.coordinates=[e.p.lng,e.p.lat],n.push(t)}return n},Ga=(e,t)=>{const n={type:"FeatureCollection",features:[]},r=e[0]||e;if(!r||!r.tm||!r.tm.poi)return n;e.length>1&&(r.tm.poi=((e,t,n)=>{n||(n=Fa);const r=e.concat(t);for(let t=0;t<e.length;t+=1)for(let o=e.length;o<r.length;o+=1)n(r[t],r[o])&&(r.splice(o,1),o-=1);return r})(e[0].tm.poi,e[1].tm.poi,(function(e,t){return e.id===t.id})));for(let e=0;e<r.tm.poi.length;e+=1)n.features.push(...za(r.tm.poi[e],t));return n};function Ha(e){return t=>(t=(e=>{const t=e=>e&&e.tm&&e.tm.poi?(e.tm.poi.forEach((e=>{e.cbl&&(e.cbl=Ba.convert(e.cbl)),e.ctr&&(e.ctr=Ba.convert(e.ctr)),e.p&&(e.p=Ba.convert(e.p)),e.cpoi&&Array.isArray(e.cpoi)&&e.cpoi.forEach((e=>{e.p=Ba.convert(e.p)})),e.op&&(e.op=Ba.convert(e.op))})),e):e;return Array.isArray(e)?e.map(t):t(e)})(t),Object.assign(t,{toGeoJson:()=>Ga(t,e)}))}const Ka={key:{validators:[H]},trackingId:{validators:[we],application:ut,defaultValue:ht.v4},zoomLevel:{validators:[je],required:!0,application:st,name:"zoom"},boundingBox:{converters:[Vr],validators:[xe],required:!0,application:st,cast:(e,t)=>{t.minLon=e.minLon,t.maxLon=e.maxLon,t.minLat=e.minLat,t.maxLat=e.maxLat}},style:{validators:[Z(["s0","s0-dark","s1","s2","s3","night"],"traffic style")],required:!0,application:st},language:{converters:[function(e){return kr(e,W)}],validators:[function(e){const t=["ar","ca","cs","da","de","el","en","en-GB","en-US","es","et","fi","fr","he","hu","id","it","lt","lv","nb","nl","no","pl","pt","ro","ru","sk","sv","th","tr","zh"];return T(e,t,"Supported traffic incidents language is expected to be one of: "+t+"), but "+e+" ["+typeof e+"] given")}]},trafficModelID:{validators:[Ie],defaultValue:"-1",application:st},geometries:{validators:[Z(["shifted","original"],"traffic geometries")]},expandCluster:{validators:[_e],defaultValue:!1},preserveCluster:{validators:[_e],defaultValue:!1},originalPosition:{validators:[_e],defaultValue:!1},protocol:{validators:[Z(["http","https"],"protocol")]},projection:{defaultValue:"EPSG4326"}};function Za(e,t){const n=pr(Qt);return bn(Ka,m,"incidentDetails",(function(e,t){const r=Ha(e.preserveCluster);return n(Ka,e,t).then((e=>ft(e,r)))}))(e,t)}const $a={key:{validators:[H]},trackingId:{validators:[we],application:ut,defaultValue:ht.v4},boundingBox:{required:!0,validators:[xe],converters:[Vr],cast:(e,t)=>{t.bbox="".concat(e.minLon,",").concat(e.minLat,",").concat(e.maxLon,",").concat(e.maxLat)}},fields:{validators:[Ie,function(e){const t=I(ee),n=I(e),r=(e,t)=>{Object.keys(e).forEach((function(n){if(!t.hasOwnProperty(n)||typeof e[n]!=typeof t[n])throw new TypeError("Property ".concat(n," not matches available fields: ")+ee);"object"==typeof e[n]&&r(e[n],t[n])}))};return r(n,t),e}],converters:[function(e){if("string"==typeof e)return e.replace(/\s/g,"");throw new TypeError("A string is required")}]},t:{validators:[Ie]},language:{validators:[ke],converters:[function(e){return kr(e,G)}]}};function Qa(e,t){const n=pr(Xt);return bn($a,m,"incidentDetailsV5",(function(e,t){return n($a,e,t).then(ft)}))(e,t)}const Xa=en,Ja={basic:["jpg","jpeg","png"],hybrid:["png"],labels:["png"]},Ya={layer:{validators:[Z(["basic","hybrid","labels"],"layers")],defaultValue:"basic"},style:{validators:[Z(["main","night"],"styles")],defaultValue:"main"},format:{validators:[Z(["png","jpg","jpeg"],"formats")],defaultValue:"png"},key:{validators:[H]},zoom:{validators:[Te(0,23)],converters:[Wr]},center:{converters:[Mr],validators:[Me]},width:{validators:[Te(1,8192)]},height:{validators:[Te(1,8192)]},bbox:{validators:[xe],converters:[Vr]},view:{validators:[Z(["Unified","IL","IN","MA","PK","AR","Arabic","TR","RU","CN"],"view")]},language:{validators:[function(e){return T(e,J,"Supported maps language is expected to be one of: "+J+"), but "+e+" ["+typeof e+"] given")}]}};function ei(e){const t=Object.keys(Ya).reduce((function(t,n){let r=e[n];return void 0!==r&&(r=function(e,t){if("bbox"===e)t=(n=t).minLon+","+n.minLat+","+n.maxLon+","+n.maxLat;else{if("zoom"===e)return String(parseInt(t,10));if("center"===e){const e=t.split(","),n=[parseFloat(e[1]),parseFloat(e[0])];return n[0]+","+n[1]}}var n;return t}(n,r),t.push(n+"="+encodeURI(r))),t}),[]);return Xa+"?"+t.join("&")}function ti(e,t){return bn(Ya,h,"staticImage",(function(e){return function(e){if(!Ja[e.layer]||-1===Ja[e.layer].indexOf(e.format))throw new Error("Unsupported layer. Please change to PNG or use basic layer.");if(e.bbox&&e.center)throw new Error("The bbox and center properties cannot be used together");if(!e.bbox&&!e.center)throw new Error("Either bbox or center property must be provided");if(e.bbox&&(O(e.width)||O(e.height)))throw new Error("The bbox, width and height properties cannot be used together")}(e),ei(e)}))(e,t)}const ni=(()=>({key:{validators:[Ie]},trackingId:{validators:[we],application:ut,defaultValue:ht.v4},boundingBox:{validators:[xe],converters:[Vr],application:st,cast:(e,t)=>{t.minLon=e.minLon,t.maxLon=e.maxLon,t.minLat=e.minLat,t.maxLat=e.maxLat}},zoom:{validators:[je],converters:[Wr],application:st},x:{validators:[Se],converters:[Wr],application:st},y:{validators:[Se],converters:[Wr],application:st},protocol:{validators:[Z(["http","https"],"protocol")]},sessionId:{validators:[Ie]}}))();function ri(e,t){const n=pr(vt),r=pr(gt),o=pr(yt);return bn(ni,h,"copyrights",(function(e,t){return function(e,t,a){return t.boundingBox?n(e,t,a):t.zoom?r(e,t,a):o(e,t,a)}(ni,e,t).then(ft)}))(e,t)}const oi={key:{validators:[H]},trackingId:{validators:[we],application:ut,defaultValue:ht.v4},protocol:{validators:[Z(["http","https"],"protocol")]},sessionId:{validators:[Ie]}};function ai(e,t){const n=pr(mt);return bn(oi,h,"copyrightsCaption",(function(e,t){return n(oi,e,t).then(ft)}))(e,t)}const ii={key:{validators:[Ie]},trackingId:{validators:[we],application:ut,defaultValue:ht.v4}};function si(e,t){const n=pr(bt);return bn(ii,h,"copyrights",(function(e,t){return e.contentType="text",n(ii,e,t).then(ft)}))(e,t)}const ci={key:{validators:[H]},trackingId:{validators:[we],application:ut,defaultValue:ht.v4}};function li(e,t){const n=pr(wt);return bn(ci,h,"copyrightsCaptionV2",(function(e,t){return n(ci,e,t).then(ft)}))(e,t)}function ui(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function pi(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ui(Object(n),!0).forEach((function(t){di(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ui(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function di(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var fi={sdkInfo:{version:s()["sdk.version"]},setProductInfo:(e,t)=>{if(!e)throw new Error("ProductId needs to be set");const n=t||0===t?"/"+t:"";u().productInfo=e+n},services:pi(pi(pi(pi({},e),t),o),a)}}(),r=r.default}()}));
//# sourceMappingURL=services.min.js.map

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilterData.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilterData.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tomtom_international_web_sdk_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tomtom-international/web-sdk-services */ "./node_modules/@tomtom-international/web-sdk-services/dist/services.min.js");
/* harmony import */ var _tomtom_international_web_sdk_services__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tomtom_international_web_sdk_services__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'FilterData',
  props: {
    services: Array
  },
  data: function data() {
    return {
      filters: {
        rooms: 1,
        beds: 1,
        bathrooms: 1,
        activeServices: [],
        range: ""
      }
    };
  },
  mounted: function mounted() {},
  methods: {
    apply: function apply() {
      this.$emit('apply-filter', this.filters);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FlatsResults.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FlatsResults.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'FlatsResults'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MyMap.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MyMap.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MyMap'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SearchPage.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SearchPage.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyMap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyMap.vue */ "./resources/js/components/MyMap.vue");
/* harmony import */ var _FlatsResults_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FlatsResults.vue */ "./resources/js/components/FlatsResults.vue");
/* harmony import */ var _tomtom_international_web_sdk_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tomtom-international/web-sdk-services */ "./node_modules/@tomtom-international/web-sdk-services/dist/services.min.js");
/* harmony import */ var _tomtom_international_web_sdk_services__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tomtom_international_web_sdk_services__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tomtom_international_web_sdk_plugin_searchbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tomtom-international/web-sdk-plugin-searchbox */ "./node_modules/@tomtom-international/web-sdk-plugin-searchbox/dist/SearchBox.js");
/* harmony import */ var _tomtom_international_web_sdk_plugin_searchbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tomtom_international_web_sdk_plugin_searchbox__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _FilterData_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FilterData.vue */ "./resources/js/components/FilterData.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "SearchPage",
  props: {
    services: Array
  },
  components: {
    MyMap: _MyMap_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    FlatsResults: _FlatsResults_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    FilterData: _FilterData_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      results: null,
      flats: [],
      filter: {
        polygon: []
      }
    };
  },
  mounted: function mounted() {
    // this.position = this.$cookies.get("location")
    this.results = JSON.parse(sessionStorage.getItem("location"));
    this.getReachableRange(20000);
    var searchBox = this.$refs.searchbox;
    var options = {
      searchOptions: {
        key: "xBR8QUT6VbrPi6uqGXoWGBZbcR4mSfgR",
        language: "it-IT",
        limit: 1,
        countrySet: "IT"
      },
      autocompleteOptions: {
        key: "xBR8QUT6VbrPi6uqGXoWGBZbcR4mSfgR",
        language: "it-IT"
      }
    };
    var ttSearchBox = new _tomtom_international_web_sdk_plugin_searchbox__WEBPACK_IMPORTED_MODULE_3___default.a(_tomtom_international_web_sdk_services__WEBPACK_IMPORTED_MODULE_2__["services"], options);
    var searchHtml = ttSearchBox.getSearchBoxHTML();
    searchBox.append(searchHtml);
    ttSearchBox.setValue(this.results.address.freeformAddress);
    ttSearchBox.on("tomtom.searchbox.resultsfound", function (data) {
      if (data.data.metadata.triggeredBy === "submit") {
        this.results = data.data.results.fuzzySearch.results[0];
        this.callAxios();
      }
    });
    this.callAxios();
  },
  methods: {
    callAxios: function callAxios() {
      var _this = this;

      axios.get('/api/search', {
        params: this.filter
      }).then(function (resp) {
        _this.flats = resp.data;
        console.log(resp.data);
      });
    },
    getReachableRange: function getReachableRange(range) {
      var _this2 = this;

      _tomtom_international_web_sdk_services__WEBPACK_IMPORTED_MODULE_2__["services"].calculateReachableRange({
        key: 'xBR8QUT6VbrPi6uqGXoWGBZbcR4mSfgR',
        origin: this.results.position,
        distanceBudgetInMeters: range
      }).then(function (rangeData) {
        _this2.filter.polygon = rangeData.toGeoJson().geometry.coordinates[0];
      })["catch"](function (error) {
        console.error(error);
      });
    },
    applyFilter: function applyFilter(event) {
      this.filter = event;
      this.getReachableRange(event.range);
    }
  }
});

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilterData.vue?vue&type=template&id=2b7e2226&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilterData.vue?vue&type=template&id=2b7e2226& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "button",
      {
        staticClass: "btn btn-primary",
        attrs: {
          type: "button",
          "data-bs-toggle": "modal",
          "data-bs-target": "#exampleModal",
        },
      },
      [_vm._v("\nFiltra\n")]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: {
          id: "exampleModal",
          tabindex: "-1",
          "aria-labelledby": "exampleModalLabel",
          "aria-hidden": "true",
        },
      },
      [
        _c(
          "div",
          { staticClass: "modal-dialog modal-lg modal-fullscreen-sm-down" },
          [
            _c("div", { staticClass: " modal-content " }, [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c("div", [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("numero stanze"),
                  ]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      on: {
                        click: function ($event) {
                          _vm.filters.rooms--
                        },
                      },
                    },
                    [_vm._v("-")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.filters.rooms,
                        expression: "filters.rooms",
                      },
                    ],
                    attrs: { type: "text", readonly: "" },
                    domProps: { value: _vm.filters.rooms },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.filters, "rooms", $event.target.value)
                      },
                    },
                  }),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      on: {
                        click: function ($event) {
                          _vm.filters.rooms++
                        },
                      },
                    },
                    [_vm._v("+")]
                  ),
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("label", { attrs: { for: "" } }, [_vm._v("numero letti")]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      on: {
                        click: function ($event) {
                          _vm.filters.beds--
                        },
                      },
                    },
                    [_vm._v("-")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.filters.beds,
                        expression: "filters.beds",
                      },
                    ],
                    attrs: { type: "text", readonly: "" },
                    domProps: { value: _vm.filters.beds },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.filters, "beds", $event.target.value)
                      },
                    },
                  }),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      on: {
                        click: function ($event) {
                          _vm.filters.beds++
                        },
                      },
                    },
                    [_vm._v("+")]
                  ),
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("label", { attrs: { for: "" } }, [_vm._v("numero bagni")]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      on: {
                        click: function ($event) {
                          _vm.filters.bathrooms--
                        },
                      },
                    },
                    [_vm._v("-")]
                  ),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.filters.bathrooms,
                        expression: "filters.bathrooms",
                      },
                    ],
                    attrs: { type: "text", readonly: "" },
                    domProps: { value: _vm.filters.bathrooms },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.filters, "bathrooms", $event.target.value)
                      },
                    },
                  }),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      on: {
                        click: function ($event) {
                          _vm.filters.bathrooms++
                        },
                      },
                    },
                    [_vm._v("+")]
                  ),
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  _vm._l(_vm.services, function (service) {
                    return _c("div", { key: service.id }, [
                      _c("label", { attrs: { for: service.name } }, [
                        _vm._v(_vm._s(service.name)),
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.filters.activeServices,
                            expression: "filters.activeServices",
                          },
                        ],
                        attrs: { id: service.name, type: "checkbox" },
                        domProps: {
                          value: service.id,
                          checked: Array.isArray(_vm.filters.activeServices)
                            ? _vm._i(_vm.filters.activeServices, service.id) >
                              -1
                            : _vm.filters.activeServices,
                        },
                        on: {
                          change: function ($event) {
                            var $$a = _vm.filters.activeServices,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = service.id,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 &&
                                  _vm.$set(
                                    _vm.filters,
                                    "activeServices",
                                    $$a.concat([$$v])
                                  )
                              } else {
                                $$i > -1 &&
                                  _vm.$set(
                                    _vm.filters,
                                    "activeServices",
                                    $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                  )
                              }
                            } else {
                              _vm.$set(_vm.filters, "activeServices", $$c)
                            }
                          },
                        },
                      }),
                    ])
                  }),
                  0
                ),
                _vm._v(" "),
                _c("div", [
                  _c("label", { attrs: { for: "" } }, [
                    _vm._v("Seleziona raggio di ricerca"),
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.filters.range,
                          expression: "filters.range",
                        },
                      ],
                      on: {
                        change: function ($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function (o) {
                              return o.selected
                            })
                            .map(function (o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.filters,
                            "range",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        },
                      },
                    },
                    [
                      _c("option", { attrs: { value: "10000" } }, [
                        _vm._v("10 km"),
                      ]),
                      _vm._v(" "),
                      _c(
                        "option",
                        { attrs: { value: "20000", selected: "" } },
                        [_vm._v("20 km")]
                      ),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "50000" } }, [
                        _vm._v("50 km"),
                      ]),
                    ]
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "modal-footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-secondary",
                    attrs: { type: "button" },
                  },
                  [_vm._v("Reset")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary",
                    attrs: { type: "button", "data-bs-dismiss": "modal" },
                    on: {
                      click: function ($event) {
                        return _vm.apply()
                      },
                    },
                  },
                  [_vm._v("Applica")]
                ),
              ]),
            ]),
          ]
        ),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c(
        "h5",
        { staticClass: "modal-title", attrs: { id: "exampleModalLabel" } },
        [_vm._v("Filtri")]
      ),
      _vm._v(" "),
      _c("button", {
        staticClass: "btn-close",
        attrs: {
          type: "button",
          "data-bs-dismiss": "modal",
          "aria-label": "Close",
        },
      }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FlatsResults.vue?vue&type=template&id=d5bb6f32&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FlatsResults.vue?vue&type=template&id=d5bb6f32& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { id: "flats-results" } }, [
      _c("h1", [_vm._v("flats")]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MyMap.vue?vue&type=template&id=bbffbe96&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MyMap.vue?vue&type=template&id=bbffbe96& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { id: "my-map" } }, [_c("h1", [_vm._v("map")])])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SearchPage.vue?vue&type=template&id=3f64d182&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SearchPage.vue?vue&type=template&id=3f64d182& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "search-page" } },
    [
      _c("div", { ref: "searchbox" }),
      _vm._v(" "),
      _c("div"),
      _vm._v(" "),
      _c("FilterData", {
        attrs: { services: _vm.services },
        on: {
          "apply-filter": function ($event) {
            return _vm.applyFilter($event)
          },
        },
      }),
      _vm._v(" "),
      _c("MyMap"),
      _vm._v(" "),
      _c("FlatsResults"),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue/dist/vue.common.dev.js":
/*!*************************************************!*\
  !*** ./node_modules/vue/dist/vue.common.dev.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */


/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Generate a string containing static keys from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

{
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if (!config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (isUndef(target) || isPrimitive(target)
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (isUndef(target) || isPrimitive(target)
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
{
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i], vm);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  var haveExpectedTypes = expectedTypes.some(function (t) { return t; });
  if (!valid && haveExpectedTypes) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol|BigInt)$/;

function assertType (value, type, vm) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    try {
      valid = value instanceof type;
    } catch (e) {
      warn('Invalid prop type: "' + String(type) + '" is not a constructor', vm);
      valid = false;
    }
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

var functionTypeCheckRE = /^\s*function (\w+)/;

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(functionTypeCheckRE);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  // check if we need to specify expected value
  if (
    expectedTypes.length === 1 &&
    isExplicable(expectedType) &&
    isExplicable(typeof value) &&
    !isBoolean(expectedType, receivedType)
  ) {
    message += " with value " + (styleValue(value, expectedType));
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + (styleValue(value, receivedType)) + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

var EXPLICABLE_TYPES = ['string', 'number', 'boolean'];
function isExplicable (value) {
  return EXPLICABLE_TYPES.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var isUsingMicroTask = false;

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

var mark;
var measure;

{
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

{
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
      warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    var vnode = res && res[0];
    return res && (
      !vnode ||
      (res.length === 1 && vnode.isComment && !isAsyncPlaceholder(vnode)) // #9658, #10391
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallbackRender,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) {
    // scoped slot
    props = props || {};
    if (bindObject) {
      if (!isObject(bindObject)) {
        warn('slot v-bind without argument expects an Object', this);
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes =
      scopedSlotFn(props) ||
      (typeof fallbackRender === 'function' ? fallbackRender() : fallbackRender);
  } else {
    nodes =
      this.$slots[name] ||
      (typeof fallbackRender === 'function' ? fallbackRender() : fallbackRender);
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
  return eventKeyCode === undefined
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if (key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  // we know it's MountedComponentVNode but flow doesn't
  vnode,
  // activeInstance in lifecycle state
  parent
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if (isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if (isDef(data) && isDef(data.nativeOn) && data.tag !== 'component') {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  }
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
      warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                "timeout (" + (res.timeout) + "ms)"
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key) ||
    (!newScopedSlots && vm.$scopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if (!config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = expOrFn.toString();
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
      warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        var info = "callback for watcher \"" + (this.expression) + "\"";
        invokeWithErrorHandling(this.cb, this.vm, [value, oldValue], this.vm, info);
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      } else if (vm.$options.methods && key in vm.$options.methods) {
        warn(("The computed property \"" + key + "\" is already defined as a method."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if (sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      var info = "callback for immediate watcher \"" + (watcher.expression) + "\"";
      pushTarget();
      invokeWithErrorHandling(cb, vm, [watcher.value], vm, info);
      popTarget();
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    {
      initProxy(vm);
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if (!(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */





function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var entry = cache[key];
    if (entry) {
      var name = entry.name;
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var entry = cache[key];
  if (entry && (!current || entry.tag !== current.tag)) {
    entry.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  methods: {
    cacheVNode: function cacheVNode() {
      var ref = this;
      var cache = ref.cache;
      var keys = ref.keys;
      var vnodeToCache = ref.vnodeToCache;
      var keyToCache = ref.keyToCache;
      if (vnodeToCache) {
        var tag = vnodeToCache.tag;
        var componentInstance = vnodeToCache.componentInstance;
        var componentOptions = vnodeToCache.componentOptions;
        cache[keyToCache] = {
          name: getComponentName(componentOptions),
          tag: tag,
          componentInstance: componentInstance,
        };
        keys.push(keyToCache);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
        this.vnodeToCache = null;
      }
    }
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.cacheVNode();
    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  updated: function updated () {
    this.cacheVNode();
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        // delay setting the cache until update
        this.vnodeToCache = vnode;
        this.keyToCache = key;
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.14';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

var convertEnumeratedValue = function (key, value) {
  return isFalsyAttrValue(value) || value === 'false'
    ? 'false'
    // allow arbitrary string value for contenteditable
    : key === 'contenteditable' && isValidContentEditableValue(value)
      ? value
      : 'true'
};

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key &&
    a.asyncFactory === b.asyncFactory && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (
    oldVnode,
    vnode,
    insertedVnodeQueue,
    ownerArray,
    index,
    removeOnly
  ) {
    if (oldVnode === vnode) {
      return
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        {
          checkDuplicateKeys(ch);
        }
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if (typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if (typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm)) {
          removeVnodes([oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur, vnode.data.pre);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value, isInPre) {
  if (isInPre || el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && value !== '' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
  }
}

/*  */



/* eslint-disable no-unused-vars */
function baseWarn (msg, range) {
  console.error(("[Vue compiler]: " + msg));
}
/* eslint-enable no-unused-vars */

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value, range, dynamic) {
  (el.props || (el.props = [])).push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
  el.plain = false;
}

function addAttr (el, name, value, range, dynamic) {
  var attrs = dynamic
    ? (el.dynamicAttrs || (el.dynamicAttrs = []))
    : (el.attrs || (el.attrs = []));
  attrs.push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
  el.plain = false;
}

// add a raw attr (use this in preTransforms)
function addRawAttr (el, name, value, range) {
  el.attrsMap[name] = value;
  el.attrsList.push(rangeSetItem({ name: name, value: value }, range));
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  isDynamicArg,
  modifiers,
  range
) {
  (el.directives || (el.directives = [])).push(rangeSetItem({
    name: name,
    rawName: rawName,
    value: value,
    arg: arg,
    isDynamicArg: isDynamicArg,
    modifiers: modifiers
  }, range));
  el.plain = false;
}

function prependModifierMarker (symbol, name, dynamic) {
  return dynamic
    ? ("_p(" + name + ",\"" + symbol + "\")")
    : symbol + name // mark the event as captured
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn,
  range,
  dynamic
) {
  modifiers = modifiers || emptyObject;
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    warn &&
    modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.',
      range
    );
  }

  // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.
  if (modifiers.right) {
    if (dynamic) {
      name = "(" + name + ")==='click'?'contextmenu':(" + name + ")";
    } else if (name === 'click') {
      name = 'contextmenu';
      delete modifiers.right;
    }
  } else if (modifiers.middle) {
    if (dynamic) {
      name = "(" + name + ")==='click'?'mouseup':(" + name + ")";
    } else if (name === 'click') {
      name = 'mouseup';
    }
  }

  // check capture modifier
  if (modifiers.capture) {
    delete modifiers.capture;
    name = prependModifierMarker('!', name, dynamic);
  }
  if (modifiers.once) {
    delete modifiers.once;
    name = prependModifierMarker('~', name, dynamic);
  }
  /* istanbul ignore if */
  if (modifiers.passive) {
    delete modifiers.passive;
    name = prependModifierMarker('&', name, dynamic);
  }

  var events;
  if (modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = rangeSetItem({ value: value.trim(), dynamic: dynamic }, range);
  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }

  el.plain = false;
}

function getRawBindingAttr (
  el,
  name
) {
  return el.rawAttrsMap[':' + name] ||
    el.rawAttrsMap['v-bind:' + name] ||
    el.rawAttrsMap[name]
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

function getAndRemoveAttrByRegex (
  el,
  name
) {
  var list = el.attrsList;
  for (var i = 0, l = list.length; i < l; i++) {
    var attr = list[i];
    if (name.test(attr.name)) {
      list.splice(i, 1);
      return attr
    }
  }
}

function rangeSetItem (
  item,
  range
) {
  if (range) {
    if (range.start != null) {
      item.start = range.start;
    }
    if (range.end != null) {
      item.end = range.end;
    }
  }
  return item
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
      "? " + baseValueExpression + ".trim()" +
      ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: JSON.stringify(value),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len, str, chr, index$1, expressionPos, expressionEndPos;



function parseModel (val) {
  // Fix https://github.com/vuejs/vue/pull/7730
  // allow v-model="obj.val " (trailing whitespace)
  val = val.trim();
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead.",
        el.rawAttrsMap['v-model']
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.',
      el.rawAttrsMap['v-model']
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
    "?_i(" + value + "," + valueBinding + ")>-1" + (
      trueValueBinding === 'true'
        ? (":(" + value + ")")
        : (":_q(" + value + "," + trueValueBinding + ")")
    )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
      "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;

  // warn if v-bind:value conflicts with v-model
  // except for inputs with v-bind:type
  {
    var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
    var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (value$1 && !typeBinding) {
      var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
      warn$1(
        binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
        'because the latter already expands to a value binding internally',
        el.rawAttrsMap[binding]
      );
    }
  }

  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1 (event, handler, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

// #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.
var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

function add$1 (
  name,
  handler,
  capture,
  passive
) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler;
    handler = original._wrapper = function (e) {
      if (
        // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        e.target === e.currentTarget ||
        // event is fired after handler attachment
        e.timeStamp >= attachedTimestamp ||
        // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        e.timeStamp <= 0 ||
        // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        e.target.ownerDocument !== document
      ) {
        return original.apply(this, arguments)
      }
    };
  }
  target$1.addEventListener(
    name,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  name,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    name,
    handler._wrapper || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

var svgContainer;

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (!(key in props)) {
      elm[key] = '';
    }
  }

  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      svgContainer = svgContainer || document.createElement('div');
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;
      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }
      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if (
      // skip the update if old and new VDOM state is the same.
      // `value` is handled separately because the DOM value may be temporarily
      // out of sync with VDOM state due to focus, composition and modifiers.
      // This  #4521 by skipping the unnecessary `checked` update.
      cur !== oldProps[key]
    ) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

var whitespaceRE = /\s+/;

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  // JSDOM may return undefined for transition properties
  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs (s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    context = transitionNode.context;
    transitionNode = transitionNode.parent;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if (explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if (isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

var isVShowDirective = function (d) { return d.name === 'show'; };

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(isNotTextNode);
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if (mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  beforeMount: function beforeMount () {
    var this$1 = this;

    var update = this._update;
    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1);
      // force removing pass
      this$1.__patch__(
        this$1._vnode,
        this$1.kept,
        false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
      );
      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (e && e.target !== el) {
            return
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if (config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});



function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var rawTokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, tokenValue;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index));
      tokens.push(JSON.stringify(tokenValue));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    rawTokens.push({ '@binding': exp });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex));
    tokens.push(JSON.stringify(tokenValue));
  }
  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if (staticClass) {
    var res = parseText(staticClass, options.delimiters);
    if (res) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.',
        el.rawAttrsMap['class']
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
};

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    {
      var res = parseText(staticStyle, options.delimiters);
      if (res) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.',
          el.rawAttrsMap['style']
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
};

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
};

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
var dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+?\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
var ncname = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + (unicodeRegExp.source) + "]*";
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
// #7298: escape - to avoid being passed as HTML comment when inlined in page
var comment = /^<!\--/;
var conditionalComment = /^<!\[/;

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t',
  '&#39;': "'"
};
var encodedAttr = /&(?:lt|gt|quot|amp|#39);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#39|#10|#9);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd), index, index + commentEnd + 3);
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
      }

      if (textEnd < 0) {
        text = html;
      }

      if (text) {
        advance(text.length);
      }

      if (options.chars && text) {
        options.chars(text, index - text.length, index);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if (!stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""), { start: index + html.length });
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(dynamicArgAttribute) || html.match(attribute))) {
        attr.start = index;
        advance(attr[0].length);
        attr.end = index;
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };
      if (options.outputSourceRange) {
        attrs[i].start = args.start + args[0].match(/^\s*/).length;
        attrs[i].end = args.end;
      }
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs, start: match.start, end: match.end });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    // Find the closest opened tag of the same type
    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if (i > pos || !tagName &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag."),
            { start: stack[i].start, end: stack[i].end }
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:|^#/;
var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;
var dynamicArgRE = /^\[.*\]$/;

var argRE = /:(.*)$/;
var bindRE = /^:|^\.|^v-bind:/;
var modifierRE = /\.[^.\]]+(?=[^\]]*$)/g;

var slotRE = /^v-slot(:|$)|^#/;

var lineBreakRE = /[\r\n]/;
var whitespaceRE$1 = /[ \f\t\r\n]+/g;

var invalidAttributeRE = /[\s"'<>\/=]/;

var decodeHTMLCached = cached(he.decode);

var emptySlotScopeToken = "_empty_";

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;
var maybeComponent;

function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    rawAttrsMap: {},
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;
  var isReservedTag = options.isReservedTag || no;
  maybeComponent = function (el) { return !!(
    el.component ||
    el.attrsMap[':is'] ||
    el.attrsMap['v-bind:is'] ||
    !(el.attrsMap.is ? isReservedTag(el.attrsMap.is) : isReservedTag(el.tag))
  ); };
  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var whitespaceOption = options.whitespace;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg, range) {
    if (!warned) {
      warned = true;
      warn$2(msg, range);
    }
  }

  function closeElement (element) {
    trimEndingWhitespace(element);
    if (!inVPre && !element.processed) {
      element = processElement(element, options);
    }
    // tree management
    if (!stack.length && element !== root) {
      // allow root elements with v-if, v-else-if and v-else
      if (root.if && (element.elseif || element.else)) {
        {
          checkRootConstraints(element);
        }
        addIfCondition(root, {
          exp: element.elseif,
          block: element
        });
      } else {
        warnOnce(
          "Component template should contain exactly one root element. " +
          "If you are using v-if on multiple elements, " +
          "use v-else-if to chain them instead.",
          { start: element.start }
        );
      }
    }
    if (currentParent && !element.forbidden) {
      if (element.elseif || element.else) {
        processIfConditions(element, currentParent);
      } else {
        if (element.slotScope) {
          // scoped slot
          // keep it in the children list so that v-else(-if) conditions can
          // find it as the prev node.
          var name = element.slotTarget || '"default"'
          ;(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        }
        currentParent.children.push(element);
        element.parent = currentParent;
      }
    }

    // final children cleanup
    // filter out scoped slots
    element.children = element.children.filter(function (c) { return !(c).slotScope; });
    // remove trailing whitespace node again
    trimEndingWhitespace(element);

    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
    // apply post-transforms
    for (var i = 0; i < postTransforms.length; i++) {
      postTransforms[i](element, options);
    }
  }

  function trimEndingWhitespace (el) {
    // remove trailing whitespace node
    if (!inPre) {
      var lastNode;
      while (
        (lastNode = el.children[el.children.length - 1]) &&
        lastNode.type === 3 &&
        lastNode.text === ' '
      ) {
        el.children.pop();
      }
    }
  }

  function checkRootConstraints (el) {
    if (el.tag === 'slot' || el.tag === 'template') {
      warnOnce(
        "Cannot use <" + (el.tag) + "> as component root element because it may " +
        'contain multiple nodes.',
        { start: el.start }
      );
    }
    if (el.attrsMap.hasOwnProperty('v-for')) {
      warnOnce(
        'Cannot use v-for on stateful component root element because ' +
        'it renders multiple elements.',
        el.rawAttrsMap['v-for']
      );
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    outputSourceRange: options.outputSourceRange,
    start: function start (tag, attrs, unary, start$1, end) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      {
        if (options.outputSourceRange) {
          element.start = start$1;
          element.end = end;
          element.rawAttrsMap = element.attrsList.reduce(function (cumulated, attr) {
            cumulated[attr.name] = attr;
            return cumulated
          }, {});
        }
        attrs.forEach(function (attr) {
          if (invalidAttributeRE.test(attr.name)) {
            warn$2(
              "Invalid dynamic argument expression: attribute names cannot contain " +
              "spaces, quotes, <, >, / or =.",
              {
                start: attr.start + attr.name.indexOf("["),
                end: attr.start + attr.name.length
              }
            );
          }
        });
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.',
          { start: element.start }
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
      }

      if (!root) {
        root = element;
        {
          checkRootConstraints(root);
        }
      }

      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        closeElement(element);
      }
    },

    end: function end (tag, start, end$1) {
      var element = stack[stack.length - 1];
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      if (options.outputSourceRange) {
        element.end = end$1;
      }
      closeElement(element);
    },

    chars: function chars (text, start, end) {
      if (!currentParent) {
        {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.',
              { start: start }
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored."),
              { start: start }
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      if (inPre || text.trim()) {
        text = isTextTag(currentParent) ? text : decodeHTMLCached(text);
      } else if (!children.length) {
        // remove the whitespace-only node right after an opening tag
        text = '';
      } else if (whitespaceOption) {
        if (whitespaceOption === 'condense') {
          // in condense mode, remove the whitespace node if it contains
          // line break, otherwise condense to a single space
          text = lineBreakRE.test(text) ? '' : ' ';
        } else {
          text = ' ';
        }
      } else {
        text = preserveWhitespace ? ' ' : '';
      }
      if (text) {
        if (!inPre && whitespaceOption === 'condense') {
          // condense consecutive whitespaces into single space
          text = text.replace(whitespaceRE$1, ' ');
        }
        var res;
        var child;
        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          child = {
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text: text
          };
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          child = {
            type: 3,
            text: text
          };
        }
        if (child) {
          if (options.outputSourceRange) {
            child.start = start;
            child.end = end;
          }
          children.push(child);
        }
      }
    },
    comment: function comment (text, start, end) {
      // adding anything as a sibling to the root node is forbidden
      // comments should still be allowed, but ignored
      if (currentParent) {
        var child = {
          type: 3,
          text: text,
          isComment: true
        };
        if (options.outputSourceRange) {
          child.start = start;
          child.end = end;
        }
        currentParent.children.push(child);
      }
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var list = el.attrsList;
  var len = list.length;
  if (len) {
    var attrs = el.attrs = new Array(len);
    for (var i = 0; i < len; i++) {
      attrs[i] = {
        name: list[i].name,
        value: JSON.stringify(list[i].value)
      };
      if (list[i].start != null) {
        attrs[i].start = list[i].start;
        attrs[i].end = list[i].end;
      }
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (
  element,
  options
) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = (
    !element.key &&
    !element.scopedSlots &&
    !element.attrsList.length
  );

  processRef(element);
  processSlotContent(element);
  processSlotOutlet(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
  return element
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    {
      if (el.tag === 'template') {
        warn$2(
          "<template> cannot be keyed. Place the key on real elements instead.",
          getRawBindingAttr(el, 'key')
        );
      }
      if (el.for) {
        var iterator = el.iterator2 || el.iterator1;
        var parent = el.parent;
        if (iterator && iterator === exp && parent && parent.tag === 'transition-group') {
          warn$2(
            "Do not use v-for index as key on <transition-group> children, " +
            "this is the same as not using keys.",
            getRawBindingAttr(el, 'key'),
            true /* tip */
          );
        }
      }
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var res = parseFor(exp);
    if (res) {
      extend(el, res);
    } else {
      warn$2(
        ("Invalid v-for expression: " + exp),
        el.rawAttrsMap['v-for']
      );
    }
  }
}



function parseFor (exp) {
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) { return }
  var res = {};
  res.for = inMatch[2].trim();
  var alias = inMatch[1].trim().replace(stripParensRE, '');
  var iteratorMatch = alias.match(forIteratorRE);
  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, '').trim();
    res.iterator1 = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim();
    }
  } else {
    res.alias = alias;
  }
  return res
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if.",
      el.rawAttrsMap[el.elseif ? 'v-else-if' : 'v-else']
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if (children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored.",
          children[i]
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

// handle content being passed to a component as slot,
// e.g. <template slot="xxx">, <div slot-scope="xxx">
function processSlotContent (el) {
  var slotScope;
  if (el.tag === 'template') {
    slotScope = getAndRemoveAttr(el, 'scope');
    /* istanbul ignore if */
    if (slotScope) {
      warn$2(
        "the \"scope\" attribute for scoped slots have been deprecated and " +
        "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
        "can also be used on plain elements in addition to <template> to " +
        "denote scoped slots.",
        el.rawAttrsMap['scope'],
        true
      );
    }
    el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
  } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
    /* istanbul ignore if */
    if (el.attrsMap['v-for']) {
      warn$2(
        "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
        "(v-for takes higher priority). Use a wrapper <template> for the " +
        "scoped slot to make it clearer.",
        el.rawAttrsMap['slot-scope'],
        true
      );
    }
    el.slotScope = slotScope;
  }

  // slot="xxx"
  var slotTarget = getBindingAttr(el, 'slot');
  if (slotTarget) {
    el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
    el.slotTargetDynamic = !!(el.attrsMap[':slot'] || el.attrsMap['v-bind:slot']);
    // preserve slot as an attribute for native shadow DOM compat
    // only for non-scoped slots.
    if (el.tag !== 'template' && !el.slotScope) {
      addAttr(el, 'slot', slotTarget, getRawBindingAttr(el, 'slot'));
    }
  }

  // 2.6 v-slot syntax
  {
    if (el.tag === 'template') {
      // v-slot on <template>
      var slotBinding = getAndRemoveAttrByRegex(el, slotRE);
      if (slotBinding) {
        {
          if (el.slotTarget || el.slotScope) {
            warn$2(
              "Unexpected mixed usage of different slot syntaxes.",
              el
            );
          }
          if (el.parent && !maybeComponent(el.parent)) {
            warn$2(
              "<template v-slot> can only appear at the root level inside " +
              "the receiving component",
              el
            );
          }
        }
        var ref = getSlotName(slotBinding);
        var name = ref.name;
        var dynamic = ref.dynamic;
        el.slotTarget = name;
        el.slotTargetDynamic = dynamic;
        el.slotScope = slotBinding.value || emptySlotScopeToken; // force it into a scoped slot for perf
      }
    } else {
      // v-slot on component, denotes default slot
      var slotBinding$1 = getAndRemoveAttrByRegex(el, slotRE);
      if (slotBinding$1) {
        {
          if (!maybeComponent(el)) {
            warn$2(
              "v-slot can only be used on components or <template>.",
              slotBinding$1
            );
          }
          if (el.slotScope || el.slotTarget) {
            warn$2(
              "Unexpected mixed usage of different slot syntaxes.",
              el
            );
          }
          if (el.scopedSlots) {
            warn$2(
              "To avoid scope ambiguity, the default slot should also use " +
              "<template> syntax when there are other named slots.",
              slotBinding$1
            );
          }
        }
        // add the component's children to its default slot
        var slots = el.scopedSlots || (el.scopedSlots = {});
        var ref$1 = getSlotName(slotBinding$1);
        var name$1 = ref$1.name;
        var dynamic$1 = ref$1.dynamic;
        var slotContainer = slots[name$1] = createASTElement('template', [], el);
        slotContainer.slotTarget = name$1;
        slotContainer.slotTargetDynamic = dynamic$1;
        slotContainer.children = el.children.filter(function (c) {
          if (!c.slotScope) {
            c.parent = slotContainer;
            return true
          }
        });
        slotContainer.slotScope = slotBinding$1.value || emptySlotScopeToken;
        // remove children as they are returned from scopedSlots now
        el.children = [];
        // mark el non-plain so data gets generated
        el.plain = false;
      }
    }
  }
}

function getSlotName (binding) {
  var name = binding.name.replace(slotRE, '');
  if (!name) {
    if (binding.name[0] !== '#') {
      name = 'default';
    } else {
      warn$2(
        "v-slot shorthand syntax requires a slot name.",
        binding
      );
    }
  }
  return dynamicArgRE.test(name)
    // dynamic [name]
    ? { name: name.slice(1, -1), dynamic: true }
    // static name
    : { name: ("\"" + name + "\""), dynamic: false }
}

// handle <slot/> outlets
function processSlotOutlet (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if (el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead.",
        getRawBindingAttr(el, 'key')
      );
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, syncGen, isDynamic;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name.replace(dirRE, ''));
      // support .foo shorthand syntax for the .prop modifier
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isDynamic = dynamicArgRE.test(name);
        if (isDynamic) {
          name = name.slice(1, -1);
        }
        if (
          value.trim().length === 0
        ) {
          warn$2(
            ("The value for a v-bind expression cannot be empty. Found in \"v-bind:" + name + "\"")
          );
        }
        if (modifiers) {
          if (modifiers.prop && !isDynamic) {
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel && !isDynamic) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            syncGen = genAssignmentCode(value, "$event");
            if (!isDynamic) {
              addHandler(
                el,
                ("update:" + (camelize(name))),
                syncGen,
                null,
                false,
                warn$2,
                list[i]
              );
              if (hyphenate(name) !== camelize(name)) {
                addHandler(
                  el,
                  ("update:" + (hyphenate(name))),
                  syncGen,
                  null,
                  false,
                  warn$2,
                  list[i]
                );
              }
            } else {
              // handler w/ dynamic event name
              addHandler(
                el,
                ("\"update:\"+(" + name + ")"),
                syncGen,
                null,
                false,
                warn$2,
                list[i],
                true // dynamic
              );
            }
          }
        }
        if ((modifiers && modifiers.prop) || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value, list[i], isDynamic);
        } else {
          addAttr(el, name, value, list[i], isDynamic);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        isDynamic = dynamicArgRE.test(name);
        if (isDynamic) {
          name = name.slice(1, -1);
        }
        addHandler(el, name, value, modifiers, false, warn$2, list[i], isDynamic);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        isDynamic = false;
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
          if (dynamicArgRE.test(arg)) {
            arg = arg.slice(1, -1);
            isDynamic = true;
          }
        }
        addDirective(el, name, rawName, value, arg, isDynamic, modifiers, list[i]);
        if (name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      {
        var res = parseText(value, delimiters);
        if (res) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.',
            list[i]
          );
        }
      }
      addAttr(el, name, JSON.stringify(value), list[i]);
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component &&
          name === 'muted' &&
          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true', list[i]);
      }
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name, attrs[i]);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead.",
        el.rawAttrsMap['v-model']
      );
    }
    _el = _el.parent;
  }
}

/*  */

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (!map['v-model']) {
      return
    }

    var typeBinding;
    if (map[':type'] || map['v-bind:type']) {
      typeBinding = getBindingAttr(el, 'type');
    }
    if (!map.type && !typeBinding && map['v-bind']) {
      typeBinding = "(" + (map['v-bind']) + ").type";
    }

    if (typeBinding) {
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });

      if (hasElse) {
        branch0.else = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

var model$1 = {
  preTransformNode: preTransformNode
};

var modules$1 = [
  klass$1,
  style$1,
  model$1
];

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"), dir);
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"), dir);
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
};

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/;
var fnInvokeRE = /\([^)]*?\);*$/;
var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

// KeyboardEvent.keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// KeyboardEvent.key aliases
var keyNames = {
  // #7880: IE11 and Edge use `Esc` for Escape key name.
  esc: ['Esc', 'Escape'],
  tab: 'Tab',
  enter: 'Enter',
  // #9112: IE11 uses `Spacebar` for Space key name.
  space: [' ', 'Spacebar'],
  // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
  up: ['Up', 'ArrowUp'],
  left: ['Left', 'ArrowLeft'],
  right: ['Right', 'ArrowRight'],
  down: ['Down', 'ArrowDown'],
  // #9112: IE11 uses `Del` for Delete key name.
  'delete': ['Backspace', 'Delete', 'Del']
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative
) {
  var prefix = isNative ? 'nativeOn:' : 'on:';
  var staticHandlers = "";
  var dynamicHandlers = "";
  for (var name in events) {
    var handlerCode = genHandler(events[name]);
    if (events[name] && events[name].dynamic) {
      dynamicHandlers += name + "," + handlerCode + ",";
    } else {
      staticHandlers += "\"" + name + "\":" + handlerCode + ",";
    }
  }
  staticHandlers = "{" + (staticHandlers.slice(0, -1)) + "}";
  if (dynamicHandlers) {
    return prefix + "_d(" + staticHandlers + ",[" + (dynamicHandlers.slice(0, -1)) + "])"
  } else {
    return prefix + staticHandlers
  }
}

function genHandler (handler) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);
  var isFunctionInvocation = simplePathRE.test(handler.value.replace(fnInvokeRE, ''));

  if (!handler.modifiers) {
    if (isMethodPath || isFunctionExpression) {
      return handler.value
    }
    return ("function($event){" + (isFunctionInvocation ? ("return " + (handler.value)) : handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? ("return " + (handler.value) + ".apply(null, arguments)")
      : isFunctionExpression
        ? ("return (" + (handler.value) + ").apply(null, arguments)")
        : isFunctionInvocation
          ? ("return " + (handler.value))
          : handler.value;
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return (
    // make sure the key filters only apply to KeyboardEvents
    // #9441: can't use 'keyCode' in $event because Chrome autofill fires fake
    // key events that do not have keyCode property...
    "if(!$event.type.indexOf('key')&&" +
    (keys.map(genFilterCode).join('&&')) + ")return null;"
  )
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var keyCode = keyCodes[key];
  var keyName = keyNames[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(keyCode)) + "," +
    "$event.key," +
    "" + (JSON.stringify(keyName)) +
    ")"
  )
}

/*  */

function on (el, dir) {
  if (dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
};

/*  */





var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !!el.component || !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
  this.pre = false;
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  // fix #11483, Root level <script> tags should not be rendered.
  var code = ast ? (ast.tag === 'script' ? 'null' : genElement(ast, state)) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.parent) {
    el.pre = el.pre || el.parent.pre;
  }

  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data;
      if (!el.plain || (el.pre && state.maybeComponent(el))) {
        data = genData$2(el, state);
      }

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  // Some elements (templates) need to behave differently inside of a v-pre
  // node.  All pre nodes are static roots, so we can use this as a location to
  // wrap a state change and reset it upon exiting the pre node.
  var originalPreState = state.pre;
  if (el.pre) {
    state.pre = el.pre;
  }
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  state.pre = originalPreState;
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      state.warn(
        "v-once can only be used inside v-for that is keyed. ",
        el.rawAttrsMap['v-once']
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if (state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      el.rawAttrsMap['v-for'],
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:" + (genProps(el.attrs)) + ",";
  }
  // DOM props
  if (el.props) {
    data += "domProps:" + (genProps(el.props)) + ",";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el, el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind dynamic argument wrap
  // v-bind with dynamic arguments must be applied using the same v-bind object
  // merge helper so that class/style/mustUseProp attrs are handled correctly.
  if (el.dynamicAttrs) {
    data = "_b(" + data + ",\"" + (el.tag) + "\"," + (genProps(el.dynamicAttrs)) + ")";
  }
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:" + (dir.isDynamicArg ? dir.arg : ("\"" + (dir.arg) + "\""))) : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if (el.children.length !== 1 || ast.type !== 1) {
    state.warn(
      'Inline-template components must have exactly one child element.',
      { start: el.start }
    );
  }
  if (ast && ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  el,
  slots,
  state
) {
  // by default scoped slots are considered "stable", this allows child
  // components with only scoped slots to skip forced updates from parent.
  // but in some cases we have to bail-out of this optimization
  // for example if the slot contains dynamic names, has v-if or v-for on them...
  var needsForceUpdate = el.for || Object.keys(slots).some(function (key) {
    var slot = slots[key];
    return (
      slot.slotTargetDynamic ||
      slot.if ||
      slot.for ||
      containsSlotChild(slot) // is passing down slot from parent which may be dynamic
    )
  });

  // #9534: if a component with scoped slots is inside a conditional branch,
  // it's possible for the same component to be reused but with different
  // compiled slot content. To avoid that, we generate a unique key based on
  // the generated code of all the slot contents.
  var needsKey = !!el.if;

  // OR when it is inside another scoped slot or v-for (the reactivity may be
  // disconnected due to the intermediate scope variable)
  // #9438, #9506
  // TODO: this can be further optimized by properly analyzing in-scope bindings
  // and skip force updating ones that do not actually use scope variables.
  if (!needsForceUpdate) {
    var parent = el.parent;
    while (parent) {
      if (
        (parent.slotScope && parent.slotScope !== emptySlotScopeToken) ||
        parent.for
      ) {
        needsForceUpdate = true;
        break
      }
      if (parent.if) {
        needsKey = true;
      }
      parent = parent.parent;
    }
  }

  var generatedSlots = Object.keys(slots)
    .map(function (key) { return genScopedSlot(slots[key], state); })
    .join(',');

  return ("scopedSlots:_u([" + generatedSlots + "]" + (needsForceUpdate ? ",null,true" : "") + (!needsForceUpdate && needsKey ? (",null,false," + (hash(generatedSlots))) : "") + ")")
}

function hash(str) {
  var hash = 5381;
  var i = str.length;
  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }
  return hash >>> 0
}

function containsSlotChild (el) {
  if (el.type === 1) {
    if (el.tag === 'slot') {
      return true
    }
    return el.children.some(containsSlotChild)
  }
  return false
}

function genScopedSlot (
  el,
  state
) {
  var isLegacySyntax = el.attrsMap['slot-scope'];
  if (el.if && !el.ifProcessed && !isLegacySyntax) {
    return genIf(el, state, genScopedSlot, "null")
  }
  if (el.for && !el.forProcessed) {
    return genFor(el, state, genScopedSlot)
  }
  var slotScope = el.slotScope === emptySlotScopeToken
    ? ""
    : String(el.slotScope);
  var fn = "function(" + slotScope + "){" +
    "return " + (el.tag === 'template'
      ? el.if && isLegacySyntax
        ? ("(" + (el.if) + ")?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  // reverse proxy v-slot without scope on this.$slots
  var reverseProxy = slotScope ? "" : ",proxy:true";
  return ("{key:" + (el.slotTarget || "\"default\"") + ",fn:" + fn + reverseProxy + "}")
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      var normalizationType = checkSkip
        ? state.maybeComponent(el$1) ? ",1" : ",0"
        : "";
      return ("" + ((altGenElement || genElement)(el$1, state)) + normalizationType)
    }
    var normalizationType$1 = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType$1 ? ("," + normalizationType$1) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } else if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? (",function(){return " + children + "}") : '');
  var attrs = el.attrs || el.dynamicAttrs
    ? genProps((el.attrs || []).concat(el.dynamicAttrs || []).map(function (attr) { return ({
        // slot props are camelized
        name: camelize(attr.name),
        value: attr.value,
        dynamic: attr.dynamic
      }); }))
    : null;
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var staticProps = "";
  var dynamicProps = "";
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    var value = transformSpecialNewlines(prop.value);
    if (prop.dynamic) {
      dynamicProps += (prop.name) + "," + value + ",";
    } else {
      staticProps += "\"" + (prop.name) + "\":" + value + ",";
    }
  }
  staticProps = "{" + (staticProps.slice(0, -1)) + "}";
  if (dynamicProps) {
    return ("_d(" + staticProps + ",[" + (dynamicProps.slice(0, -1)) + "])")
  } else {
    return staticProps
  }
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */



// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast, warn) {
  if (ast) {
    checkNode(ast, warn);
  }
}

function checkNode (node, warn) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          var range = node.rawAttrsMap[name];
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), warn, range);
          } else if (name === 'v-slot' || name[0] === '#') {
            checkFunctionParameterExpression(value, (name + "=\"" + value + "\""), warn, range);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), warn, range);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), warn, range);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], warn);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, warn, node);
  }
}

function checkEvent (exp, text, warn, range) {
  var stripped = exp.replace(stripStringRE, '');
  var keywordMatch = stripped.match(unaryOperatorsRE);
  if (keywordMatch && stripped.charAt(keywordMatch.index - 1) !== '$') {
    warn(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim()),
      range
    );
  }
  checkExpression(exp, text, warn, range);
}

function checkFor (node, text, warn, range) {
  checkExpression(node.for || '', text, warn, range);
  checkIdentifier(node.alias, 'v-for alias', text, warn, range);
  checkIdentifier(node.iterator1, 'v-for iterator', text, warn, range);
  checkIdentifier(node.iterator2, 'v-for iterator', text, warn, range);
}

function checkIdentifier (
  ident,
  type,
  text,
  warn,
  range
) {
  if (typeof ident === 'string') {
    try {
      new Function(("var " + ident + "=_"));
    } catch (e) {
      warn(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())), range);
    }
  }
}

function checkExpression (exp, text, warn, range) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      warn(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim()),
        range
      );
    } else {
      warn(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n",
        range
      );
    }
  }
}

function checkFunctionParameterExpression (exp, text, warn, range) {
  try {
    new Function(exp, '');
  } catch (e) {
    warn(
      "invalid function parameter expression: " + (e.message) + " in\n\n" +
      "    " + exp + "\n\n" +
      "  Raw expression: " + (text.trim()) + "\n",
      range
    );
  }
}

/*  */

var range = 2;

function generateCodeFrame (
  source,
  start,
  end
) {
  if ( start === void 0 ) start = 0;
  if ( end === void 0 ) end = source.length;

  var lines = source.split(/\r?\n/);
  var count = 0;
  var res = [];
  for (var i = 0; i < lines.length; i++) {
    count += lines[i].length + 1;
    if (count >= start) {
      for (var j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length) { continue }
        res.push(("" + (j + 1) + (repeat$1(" ", 3 - String(j + 1).length)) + "|  " + (lines[j])));
        var lineLength = lines[j].length;
        if (j === i) {
          // push underline
          var pad = start - (count - lineLength) + 1;
          var length = end > count ? lineLength - pad : end - start;
          res.push("   |  " + repeat$1(" ", pad) + repeat$1("^", length));
        } else if (j > i) {
          if (end > count) {
            var length$1 = Math.min(end - count, lineLength);
            res.push("   |  " + repeat$1("^", length$1));
          }
          count += lineLength + 1;
        }
      }
      break
    }
  }
  return res.join('\n')
}

function repeat$1 (str, n) {
  var result = '';
  if (n > 0) {
    while (true) { // eslint-disable-line
      if (n & 1) { result += str; }
      n >>>= 1;
      if (n <= 0) { break }
      str += str;
    }
  }
  return result
}

/*  */



function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    {
      if (compiled.errors && compiled.errors.length) {
        if (options.outputSourceRange) {
          compiled.errors.forEach(function (e) {
            warn$$1(
              "Error compiling template:\n\n" + (e.msg) + "\n\n" +
              generateCodeFrame(template, e.start, e.end),
              vm
            );
          });
        } else {
          warn$$1(
            "Error compiling template:\n\n" + template + "\n\n" +
            compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
            vm
          );
        }
      }
      if (compiled.tips && compiled.tips.length) {
        if (options.outputSourceRange) {
          compiled.tips.forEach(function (e) { return tip(e.msg, vm); });
        } else {
          compiled.tips.forEach(function (msg) { return tip(msg, vm); });
        }
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];

      var warn = function (msg, range, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        if (options.outputSourceRange) {
          // $flow-disable-line
          var leadingSpaceLength = template.match(/^\s*/)[0].length;

          warn = function (msg, range, tip) {
            var data = { msg: msg };
            if (range) {
              if (range.start != null) {
                data.start = range.start + leadingSpaceLength;
              }
              if (range.end != null) {
                data.end = range.end + leadingSpaceLength;
              }
            }
            (tip ? tips : errors).push(data);
          };
        }
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives || null),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      finalOptions.warn = warn;

      var compiled = baseCompile(template.trim(), finalOptions);
      {
        detectErrors(compiled.ast, warn);
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    optimize(ast, options);
  }
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compile = ref$1.compile;
var compileToFunctions = ref$1.compileToFunctions;

/*  */

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode (href) {
  div = div || document.createElement('div');
  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
  return div.innerHTML.indexOf('&#10;') > 0
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue.prototype.$mount;
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if (!template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if (config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        outputSourceRange: "development" !== 'production',
        shouldDecodeNewlines: shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if (config.performance && mark) {
        mark('compile end');
        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue.compile = compileToFunctions;

module.exports = Vue;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/vue/dist/vue.common.js":
/*!*********************************************!*\
  !*** ./node_modules/vue/dist/vue.common.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) {} else {
  module.exports = __webpack_require__(/*! ./vue.common.dev.js */ "./node_modules/vue/dist/vue.common.dev.js")
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./resources/js/components/FilterData.vue":
/*!************************************************!*\
  !*** ./resources/js/components/FilterData.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FilterData_vue_vue_type_template_id_2b7e2226___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilterData.vue?vue&type=template&id=2b7e2226& */ "./resources/js/components/FilterData.vue?vue&type=template&id=2b7e2226&");
/* harmony import */ var _FilterData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilterData.vue?vue&type=script&lang=js& */ "./resources/js/components/FilterData.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FilterData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FilterData_vue_vue_type_template_id_2b7e2226___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FilterData_vue_vue_type_template_id_2b7e2226___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FilterData.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FilterData.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/FilterData.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FilterData.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilterData.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterData_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FilterData.vue?vue&type=template&id=2b7e2226&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/FilterData.vue?vue&type=template&id=2b7e2226& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterData_vue_vue_type_template_id_2b7e2226___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./FilterData.vue?vue&type=template&id=2b7e2226& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilterData.vue?vue&type=template&id=2b7e2226&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterData_vue_vue_type_template_id_2b7e2226___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterData_vue_vue_type_template_id_2b7e2226___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FlatsResults.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/FlatsResults.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FlatsResults_vue_vue_type_template_id_d5bb6f32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FlatsResults.vue?vue&type=template&id=d5bb6f32& */ "./resources/js/components/FlatsResults.vue?vue&type=template&id=d5bb6f32&");
/* harmony import */ var _FlatsResults_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FlatsResults.vue?vue&type=script&lang=js& */ "./resources/js/components/FlatsResults.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FlatsResults_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FlatsResults_vue_vue_type_template_id_d5bb6f32___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FlatsResults_vue_vue_type_template_id_d5bb6f32___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FlatsResults.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FlatsResults.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/FlatsResults.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlatsResults_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FlatsResults.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FlatsResults.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FlatsResults_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FlatsResults.vue?vue&type=template&id=d5bb6f32&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/FlatsResults.vue?vue&type=template&id=d5bb6f32& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FlatsResults_vue_vue_type_template_id_d5bb6f32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./FlatsResults.vue?vue&type=template&id=d5bb6f32& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FlatsResults.vue?vue&type=template&id=d5bb6f32&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FlatsResults_vue_vue_type_template_id_d5bb6f32___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FlatsResults_vue_vue_type_template_id_d5bb6f32___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/MyMap.vue":
/*!*******************************************!*\
  !*** ./resources/js/components/MyMap.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyMap_vue_vue_type_template_id_bbffbe96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyMap.vue?vue&type=template&id=bbffbe96& */ "./resources/js/components/MyMap.vue?vue&type=template&id=bbffbe96&");
/* harmony import */ var _MyMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyMap.vue?vue&type=script&lang=js& */ "./resources/js/components/MyMap.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MyMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MyMap_vue_vue_type_template_id_bbffbe96___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MyMap_vue_vue_type_template_id_bbffbe96___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/MyMap.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/MyMap.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/components/MyMap.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MyMap.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MyMap.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/MyMap.vue?vue&type=template&id=bbffbe96&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/MyMap.vue?vue&type=template&id=bbffbe96& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyMap_vue_vue_type_template_id_bbffbe96___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./MyMap.vue?vue&type=template&id=bbffbe96& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MyMap.vue?vue&type=template&id=bbffbe96&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyMap_vue_vue_type_template_id_bbffbe96___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyMap_vue_vue_type_template_id_bbffbe96___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/SearchPage.vue":
/*!************************************************!*\
  !*** ./resources/js/components/SearchPage.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchPage_vue_vue_type_template_id_3f64d182___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchPage.vue?vue&type=template&id=3f64d182& */ "./resources/js/components/SearchPage.vue?vue&type=template&id=3f64d182&");
/* harmony import */ var _SearchPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchPage.vue?vue&type=script&lang=js& */ "./resources/js/components/SearchPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SearchPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SearchPage_vue_vue_type_template_id_3f64d182___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SearchPage_vue_vue_type_template_id_3f64d182___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SearchPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/SearchPage.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/SearchPage.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SearchPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SearchPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SearchPage.vue?vue&type=template&id=3f64d182&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/SearchPage.vue?vue&type=template&id=3f64d182& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPage_vue_vue_type_template_id_3f64d182___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SearchPage.vue?vue&type=template&id=3f64d182& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SearchPage.vue?vue&type=template&id=3f64d182&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPage_vue_vue_type_template_id_3f64d182___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchPage_vue_vue_type_template_id_3f64d182___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/vue.js":
/*!*****************************!*\
  !*** ./resources/js/vue.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_SearchPage_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/SearchPage.vue */ "./resources/js/components/SearchPage.vue");
window.Vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */
// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

var app = new Vue({
  el: '#app',
  components: {
    SearchPage: _components_SearchPage_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** multi ./resources/js/vue.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\andre\Boolean\Classe-#43\Progetto-finale\boolbnb\resources\js\vue.js */"./resources/js/vue.js");


/***/ })

/******/ });