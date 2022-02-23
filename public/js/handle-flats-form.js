/******/ (function (modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {};
    /******/
    /******/ // The require function
    /******/ function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/ if (installedModules[moduleId]) {
            /******/ return installedModules[moduleId].exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/ var module = (installedModules[moduleId] = {
            /******/ i: moduleId,
            /******/ l: false,
            /******/ exports: {},
            /******/
        });
        /******/
        /******/ // Execute the module function
        /******/ modules[moduleId].call(
            module.exports,
            module,
            module.exports,
            __webpack_require__
        );
        /******/
        /******/ // Flag the module as loaded
        /******/ module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/ return module.exports;
        /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/ __webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/ __webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/ __webpack_require__.d = function (exports, name, getter) {
        /******/ if (!__webpack_require__.o(exports, name)) {
            /******/ Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter,
            });
            /******/
        }
        /******/
    };
    /******/
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = function (exports) {
        /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
            /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                value: "Module",
            });
            /******/
        }
        /******/ Object.defineProperty(exports, "__esModule", { value: true });
        /******/
    };
    /******/
    /******/ // create a fake namespace object
    /******/ // mode & 1: value is a module id, require it
    /******/ // mode & 2: merge all properties of value into the ns
    /******/ // mode & 4: return value when already ns object
    /******/ // mode & 8|1: behave like require
    /******/ __webpack_require__.t = function (value, mode) {
        /******/ if (mode & 1) value = __webpack_require__(value);
        /******/ if (mode & 8) return value;
        /******/ if (
            mode & 4 &&
            typeof value === "object" &&
            value &&
            value.__esModule
        )
            return value;
        /******/ var ns = Object.create(null);
        /******/ __webpack_require__.r(ns);
        /******/ Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value,
        });
        /******/ if (mode & 2 && typeof value != "string")
            for (var key in value)
                __webpack_require__.d(
                    ns,
                    key,
                    function (key) {
                        return value[key];
                    }.bind(null, key)
                );
        /******/ return ns;
        /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = function (module) {
        /******/ var getter =
            module && module.__esModule
                ? /******/ function getDefault() {
                      return module["default"];
                  }
                : /******/ function getModuleExports() {
                      return module;
                  };
        /******/ __webpack_require__.d(getter, "a", getter);
        /******/ return getter;
        /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/ __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/ __webpack_require__.p = "/";
    /******/
    /******/
    /******/ // Load entry module and return exports
    /******/ return __webpack_require__((__webpack_require__.s = 2));
    /******/
})(
    /************************************************************************/
    /******/ {
        /***/ "./node_modules/@tomtom-international/web-sdk-services/dist/services.min.js":
            /*!**********************************************************************************!*\
  !*** ./node_modules/@tomtom-international/web-sdk-services/dist/services.min.js ***!
  \**********************************************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                !(function (e, t) {
                    if (true) module.exports = t();
                    else {
                        var r, n;
                    }
                })(self, function () {
                    return (function () {
                        var e = [
                                ,
                                function (e) {
                                    const t = "api.tomtom.com";
                                    e.exports = {
                                        "sdk.name": "MapsWebSDK",
                                        "sdk.version": "6.18.0",
                                        "sdk.examples.version":
                                            "SDK-${version}",
                                        "analytics.header.name":
                                            "TomTom-User-Agent",
                                        "analytics.header.sdkName":
                                            "MapsWebSDK",
                                        "endpoints.copyrightsWorld": "".concat(
                                            t,
                                            "/map/1/copyrights.{contentType}"
                                        ),
                                        "endpoints.copyrightsBounds": "".concat(
                                            t,
                                            "/map/1/copyrights/{minLon}/{minLat}/{maxLon}/{maxLat}.{contentType}"
                                        ),
                                        "endpoints.copyrightsZoom": "".concat(
                                            t,
                                            "/map/1/copyrights/{zoom}/{x}/{y}.{contentType}"
                                        ),
                                        "endpoints.caption": "".concat(
                                            t,
                                            "/map/1/copyrights/caption.{contentType}"
                                        ),
                                        "endpoints.copyrightsV2": "".concat(
                                            t,
                                            "/map/2/copyrights"
                                        ),
                                        "endpoints.captionV2": "".concat(
                                            t,
                                            "/map/2/copyrights/caption.{contentType}"
                                        ),
                                        "endpoints.geocode": "".concat(
                                            t,
                                            "/search/2/geocode/{query}.{contentType}"
                                        ),
                                        "endpoints.structuredGeocode":
                                            "".concat(
                                                t,
                                                "/search/2/structuredGeocode.{contentType}"
                                            ),
                                        "endpoints.search": "".concat(
                                            t,
                                            "/search/2/{type}/{query}.{contentType}"
                                        ),
                                        "endpoints.nearbySearch": "".concat(
                                            t,
                                            "/search/2/nearbySearch/.{contentType}"
                                        ),
                                        "endpoints.batchNearbySearchQuery":
                                            "/{type}/.{contentType}",
                                        "endpoints.batchSearch": "".concat(
                                            t,
                                            "/search/2/batch.{contentType}"
                                        ),
                                        "endpoints.batchSyncSearch": "".concat(
                                            t,
                                            "/search/2/batch/sync.{contentType}"
                                        ),
                                        "endpoints.batchSearchQuery":
                                            "/{type}/{query}.{contentType}",
                                        "endpoints.batchStructuredGeocodeQuery":
                                            "/structuredGeocode.{contentType}",
                                        "endpoints.adp": "".concat(
                                            t,
                                            "/search/2/additionalData.{contentType}"
                                        ),
                                        "endpoints.batchAdpQuery":
                                            "/additionalData.{contentType}",
                                        "endpoints.reverseGeocode": "".concat(
                                            t,
                                            "/search/2/{type}/{position}.{contentType}"
                                        ),
                                        "endpoints.batchReverseGeocodeQuery":
                                            "/{type}/{position}.{contentType}",
                                        "endpoints.autocomplete": "".concat(
                                            t,
                                            "/search/2/autocomplete/{query}.{contentType}"
                                        ),
                                        "endpoints.poiCategories": "".concat(
                                            t,
                                            "/search/2/poiCategories.{contentType}"
                                        ),
                                        "endpoints.chargingAvailability":
                                            "".concat(
                                                t,
                                                "/search/2/chargingAvailability.{contentType}"
                                            ),
                                        "endpoints.batchChargingAvailabilityQuery":
                                            "/chargingAvailability.{contentType}",
                                        "endpoints.poiDetails": "".concat(
                                            t,
                                            "/search/2/poiDetails.{contentType}"
                                        ),
                                        "endpoints.poiPhotos": "".concat(
                                            t,
                                            "/search/2/poiPhoto"
                                        ),
                                        "endpoints.placeById": "".concat(
                                            t,
                                            "/search/2/place.{contentType}"
                                        ),
                                        "endpoints.incidentDetails": "".concat(
                                            t,
                                            "/traffic/services/4/incidentDetails/{style}/{minLat},{minLon},{maxLat},{maxLon}/{zoom}/{trafficModelID}/{contentType}"
                                        ),
                                        "endpoints.incidentDetailsV5":
                                            "".concat(
                                                t,
                                                "/traffic/services/5/incidentDetails"
                                            ),
                                        "endpoints.incidentViewport": "".concat(
                                            t,
                                            "/traffic/services/4/incidentViewport/0,0,.1,.1/0/0,0,.1,.1/0/false/{contentType}"
                                        ),
                                        "endpoints.flowSegmentData": "".concat(
                                            t,
                                            "/traffic/services/4/flowSegmentData/{style}/{zoom}/{contentType}"
                                        ),
                                        "endpoints.incidentRegions": "".concat(
                                            t,
                                            "/traffic/services/4/incidentRegions/{contentType}"
                                        ),
                                        "endpoints.rasterTrafficIncidentTilesLayer":
                                            "{s}.".concat(
                                                t,
                                                "/traffic/map/4/tile/incidents/{style}/{z}/{x}/{y}.png?tileSize={tileSize}"
                                            ),
                                        "endpoints.vectorTrafficIncidentTilesLayer":
                                            "{s}.".concat(
                                                t,
                                                "/traffic/map/4/tile/incidents/{z}/{x}/{y}.pbf"
                                            ),
                                        "endpoints.rasterTrafficFlowTilesLayer":
                                            "{s}.".concat(
                                                t,
                                                "/traffic/map/4/tile/flow/{style}/{z}/{x}/{y}.png"
                                            ),
                                        "endpoints.vectorTrafficFlowTilesLayer":
                                            "{s}.".concat(
                                                t,
                                                "/traffic/map/4/tile/flow/{style}/{z}/{x}/{y}.pbf"
                                            ),
                                        "endpoints.tileLayer": "{s}.".concat(
                                            t,
                                            "/map/1/tile/{layer}/{style}/{z}/{x}/{y}.png?tileSize={tileSize}"
                                        ),
                                        "endpoints.wmsLayer": "{s}.".concat(
                                            t,
                                            "/map/1/wms/?service=WMS&version=1.1.1&request=GetMap&bbox={bbox-epsg-3857}&srs=EPSG:3857&width=512&height=512&layers=basic&styles=&format={format}"
                                        ),
                                        "endpoints.vectorTileLayer":
                                            "{s}.".concat(
                                                t,
                                                "/map/1/tile/{layer}/{style}/{z}/{x}/{y}.pbf"
                                            ),
                                        "endpoints.routing": "".concat(
                                            t,
                                            "/routing/1/calculateRoute/{locations}/{contentType}"
                                        ),
                                        "endpoints.calculateReachableRange":
                                            "".concat(
                                                t,
                                                "/routing/1/calculateReachableRange/{origin}/{contentType}"
                                            ),
                                        "endpoints.batchRouting": "".concat(
                                            t,
                                            "/routing/1/batch/{contentType}"
                                        ),
                                        "endpoints.batchSyncRouting": "".concat(
                                            t,
                                            "/routing/1/batch/sync/{contentType}"
                                        ),
                                        "endpoints.batchRoutingQuery":
                                            "/calculateRoute/{locations}/{contentType}",
                                        "endpoints.batchReachableRangeQuery":
                                            "/calculateReachableRange/{origin}/{contentType}",
                                        "endpoints.matrixRouting": "".concat(
                                            t,
                                            "/routing/1/matrix/{contentType}"
                                        ),
                                        "endpoints.matrixSyncRouting":
                                            "".concat(
                                                t,
                                                "/routing/1/matrix/sync/{contentType}"
                                            ),
                                        "endpoints.longDistanceEVRouting":
                                            "".concat(
                                                t,
                                                "/routing/1/calculateLongDistanceEVRoute/{locations}/{contentType}"
                                            ),
                                        "endpoints.staticImage":
                                            "https://".concat(
                                                t,
                                                "/map/1/staticimage"
                                            ),
                                        "vector.glyphs":
                                            "https://" +
                                            t +
                                            "/maps-sdk-js/6.18.0/glyphs/{fontstack}/{range}.pbf",
                                        "vector.sprites":
                                            "https://" +
                                            t +
                                            "/maps-sdk-js/6.18.0/sprites/sprite",
                                        "endpoints.styles": "https://".concat(
                                            t,
                                            "/style/1/style/{version}?map=basic_main&traffic_incidents=incidents_day&traffic_flow=flow_relative0&poi=poi_main"
                                        ),
                                        origin: t,
                                        hostedStylesVersion: "21.1.0-*",
                                    };
                                },
                                function (e, t, n) {
                                    var r = n(3),
                                        o = n(9);
                                    e.exports = function (e) {
                                        if (!o(e)) return !1;
                                        var t = r(e);
                                        return (
                                            "[object Function]" == t ||
                                            "[object GeneratorFunction]" == t ||
                                            "[object AsyncFunction]" == t ||
                                            "[object Proxy]" == t
                                        );
                                    };
                                },
                                function (e, t, n) {
                                    var r = n(4),
                                        o = n(7),
                                        a = n(8),
                                        i = r ? r.toStringTag : void 0;
                                    e.exports = function (e) {
                                        return null == e
                                            ? void 0 === e
                                                ? "[object Undefined]"
                                                : "[object Null]"
                                            : i && i in Object(e)
                                            ? o(e)
                                            : a(e);
                                    };
                                },
                                function (e, t, n) {
                                    var r = n(5).Symbol;
                                    e.exports = r;
                                },
                                function (e, t, n) {
                                    var r = n(6),
                                        o =
                                            "object" == typeof self &&
                                            self &&
                                            self.Object === Object &&
                                            self,
                                        a = r || o || Function("return this")();
                                    e.exports = a;
                                },
                                function (e, t, n) {
                                    var r =
                                        "object" == typeof n.g &&
                                        n.g &&
                                        n.g.Object === Object &&
                                        n.g;
                                    e.exports = r;
                                },
                                function (e, t, n) {
                                    var r = n(4),
                                        o = Object.prototype,
                                        a = o.hasOwnProperty,
                                        i = o.toString,
                                        s = r ? r.toStringTag : void 0;
                                    e.exports = function (e) {
                                        var t = a.call(e, s),
                                            n = e[s];
                                        try {
                                            e[s] = void 0;
                                            var r = !0;
                                        } catch (e) {}
                                        var o = i.call(e);
                                        return (
                                            r && (t ? (e[s] = n) : delete e[s]),
                                            o
                                        );
                                    };
                                },
                                function (e) {
                                    var t = Object.prototype.toString;
                                    e.exports = function (e) {
                                        return t.call(e);
                                    };
                                },
                                function (e) {
                                    e.exports = function (e) {
                                        var t = typeof e;
                                        return (
                                            null != e &&
                                            ("object" == t || "function" == t)
                                        );
                                    };
                                },
                                function (e, t, n) {
                                    var r = n(3),
                                        o = n(11),
                                        a = n(12);
                                    e.exports = function (e) {
                                        return (
                                            "string" == typeof e ||
                                            (!o(e) &&
                                                a(e) &&
                                                "[object String]" == r(e))
                                        );
                                    };
                                },
                                function (e) {
                                    var t = Array.isArray;
                                    e.exports = t;
                                },
                                function (e) {
                                    e.exports = function (e) {
                                        return (
                                            null != e && "object" == typeof e
                                        );
                                    };
                                },
                                function (e) {
                                    e.exports = function (e) {
                                        return null == e;
                                    };
                                },
                                function (e, t, n) {
                                    var r = n(15);
                                    e.exports = function (e) {
                                        return (
                                            "number" == typeof e && e == r(e)
                                        );
                                    };
                                },
                                function (e, t, n) {
                                    var r = n(16);
                                    e.exports = function (e) {
                                        var t = r(e),
                                            n = t % 1;
                                        return t == t ? (n ? t - n : t) : 0;
                                    };
                                },
                                function (e, t, n) {
                                    var r = n(17),
                                        o = 1 / 0;
                                    e.exports = function (e) {
                                        return e
                                            ? (e = r(e)) === o || e === -1 / 0
                                                ? 17976931348623157e292 *
                                                  (e < 0 ? -1 : 1)
                                                : e == e
                                                ? e
                                                : 0
                                            : 0 === e
                                            ? e
                                            : 0;
                                    };
                                },
                                function (e, t, n) {
                                    var r = n(9),
                                        o = n(18),
                                        a = /^\s+|\s+$/g,
                                        i = /^[-+]0x[0-9a-f]+$/i,
                                        s = /^0b[01]+$/i,
                                        c = /^0o[0-7]+$/i,
                                        l = parseInt;
                                    e.exports = function (e) {
                                        if ("number" == typeof e) return e;
                                        if (o(e)) return NaN;
                                        if (r(e)) {
                                            var t =
                                                "function" == typeof e.valueOf
                                                    ? e.valueOf()
                                                    : e;
                                            e = r(t) ? t + "" : t;
                                        }
                                        if ("string" != typeof e)
                                            return 0 === e ? e : +e;
                                        e = e.replace(a, "");
                                        var n = s.test(e);
                                        return n || c.test(e)
                                            ? l(e.slice(2), n ? 2 : 8)
                                            : i.test(e)
                                            ? NaN
                                            : +e;
                                    };
                                },
                                function (e, t, n) {
                                    var r = n(3),
                                        o = n(12);
                                    e.exports = function (e) {
                                        return (
                                            "symbol" == typeof e ||
                                            (o(e) && "[object Symbol]" == r(e))
                                        );
                                    };
                                },
                                function (e, t, n) {
                                    var r = n(20),
                                        o = n(21);
                                    e.exports = function (e, t) {
                                        return null != e && o(e, t, r);
                                    };
                                },
                                function (e) {
                                    var t = Object.prototype.hasOwnProperty;
                                    e.exports = function (e, n) {
                                        return null != e && t.call(e, n);
                                    };
                                },
                                function (e, t, n) {
                                    var r = n(22),
                                        o = n(60),
                                        a = n(11),
                                        i = n(62),
                                        s = n(63),
                                        c = n(64);
                                    e.exports = function (e, t, n) {
                                        for (
                                            var l = -1,
                                                u = (t = r(t, e)).length,
                                                p = !1;
                                            ++l < u;

                                        ) {
                                            var d = c(t[l]);
                                            if (!(p = null != e && n(e, d)))
                                                break;
                                            e = e[d];
                                        }
                                        return p || ++l != u
                                            ? p
                                            : !!(u =
                                                  null == e ? 0 : e.length) &&
                                                  s(u) &&
                                                  i(d, u) &&
                                                  (a(e) || o(e));
                                    };
                                },
                                function (e, t, n) {
                                    var r = n(11),
                                        o = n(23),
                                        a = n(24),
                                        i = n(57);
                                    e.exports = function (e, t) {
                                        return r(e)
                                            ? e
                                            : o(e, t)
                                            ? [e]
                                            : a(i(e));
                                    };
                                },
                                function (e, t, n) {
                                    var r = n(11),
                                        o = n(18),
                                        a =
                                            /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                                        i = /^\w*$/;
                                    e.exports = function (e, t) {
                                        if (r(e)) return !1;
                                        var n = typeof e;
                                        return (
                                            !(
                                                "number" != n &&
                                                "symbol" != n &&
                                                "boolean" != n &&
                                                null != e &&
                                                !o(e)
                                            ) ||
                                            i.test(e) ||
                                            !a.test(e) ||
                                            (null != t && e in Object(t))
                                        );
                                    };
                                },
                                function (e, t, n) {
                                    var r = n(25),
                                        o =
                                            /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                                        a = /\\(\\)?/g,
                                        i = r(function (e) {
                                            var t = [];
                                            return (
                                                46 === e.charCodeAt(0) &&
                                                    t.push(""),
                                                e.replace(
                                                    o,
                                                    function (e, n, r, o) {
                                                        t.push(
                                                            r
                                                                ? o.replace(
                                                                      a,
                                                                      "$1"
                                                                  )
                                                                : n || e
                                                        );
                                                    }
                                                ),
                                                t
                                            );
                                        });
                                    e.exports = i;
                                },
                                function (e, t, n) {
                                    var r = n(26);
                                    e.exports = function (e) {
                                        var t = r(e, function (e) {
                                                return (
                                                    500 === n.size && n.clear(),
                                                    e
                                                );
                                            }),
                                            n = t.cache;
                                        return t;
                                    };
                                },
                                function (e, t, n) {
                                    var r = n(27);
                                    function o(e, t) {
                                        if (
                                            "function" != typeof e ||
                                            (null != t &&
                                                "function" != typeof t)
                                        )
                                            throw new TypeError(
                                                "Expected a function"
                                            );
                                        var n = function () {
                                            var r = arguments,
                                                o = t ? t.apply(this, r) : r[0],
                                                a = n.cache;
                                            if (a.has(o)) return a.get(o);
                                            var i = e.apply(this, r);
                                            return (
                                                (n.cache = a.set(o, i) || a), i
                                            );
                                        };
                                        return (
                                            (n.cache = new (o.Cache || r)()), n
                                        );
                                    }
                                    (o.Cache = r), (e.exports = o);
                                },
                                function (e, t, n) {
                                    var r = n(28),
                                        o = n(51),
                                        a = n(54),
                                        i = n(55),
                                        s = n(56);
                                    function c(e) {
                                        var t = -1,
                                            n = null == e ? 0 : e.length;
                                        for (this.clear(); ++t < n; ) {
                                            var r = e[t];
                                            this.set(r[0], r[1]);
                                        }
                                    }
                                    (c.prototype.clear = r),
                                        (c.prototype.delete = o),
                                        (c.prototype.get = a),
                                        (c.prototype.has = i),
                                        (c.prototype.set = s),
                                        (e.exports = c);
                                },
                                function (e, t, n) {
                                    var r = n(29),
                                        o = n(42),
                                        a = n(50);
                                    e.exports = function () {
                                        (this.size = 0),
                                            (this.__data__ = {
                                                hash: new r(),
                                                map: new (a || o)(),
                                                string: new r(),
                                            });
                                    };
                                },
                                function (e, t, n) {
                                    var r = n(30),
                                        o = n(38),
                                        a = n(39),
                                        i = n(40),
                                        s = n(41);
                                    function c(e) {
                                        var t = -1,
                                            n = null == e ? 0 : e.length;
                                        for (this.clear(); ++t < n; ) {
                                            var r = e[t];
                                            this.set(r[0], r[1]);
                                        }
                                    }
                                    (c.prototype.clear = r),
                                        (c.prototype.delete = o),
                                        (c.prototype.get = a),
                                        (c.prototype.has = i),
                                        (c.prototype.set = s),
                                        (e.exports = c);
                                },
                                function (e, t, n) {
                                    var r = n(31);
                                    e.exports = function () {
                                        (this.__data__ = r ? r(null) : {}),
                                            (this.size = 0);
                                    };
                                },
                                function (e, t, n) {
                                    var r = n(32)(Object, "create");
                                    e.exports = r;
                                },
                                function (e, t, n) {
                                    var r = n(33),
                                        o = n(37);
                                    e.exports = function (e, t) {
                                        var n = o(e, t);
                                        return r(n) ? n : void 0;
                                    };
                                },
                                function (e, t, n) {
                                    var r = n(2),
                                        o = n(34),
                                        a = n(9),
                                        i = n(36),
                                        s = /^\[object .+?Constructor\]$/,
                                        c = Function.prototype,
                                        l = Object.prototype,
                                        u = c.toString,
                                        p = l.hasOwnProperty,
                                        d = RegExp(
                                            "^" +
                                                u
                                                    .call(p)
                                                    .replace(
                                                        /[\\^$.*+?()[\]{}|]/g,
                                                        "\\$&"
                                                    )
                                                    .replace(
                                                        /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                                                        "$1.*?"
                                                    ) +
                                                "$"
                                        );
                                    e.exports = function (e) {
                                        return (
                                            !(!a(e) || o(e)) &&
                                            (r(e) ? d : s).test(i(e))
                                        );
                                    };
                                },
                                function (e, t, n) {
                                    var r,
                                        o = n(35),
                                        a = (r = /[^.]+$/.exec(
                                            (o && o.keys && o.keys.IE_PROTO) ||
                                                ""
                                        ))
                                            ? "Symbol(src)_1." + r
                                            : "";
                                    e.exports = function (e) {
                                        return !!a && a in e;
                                    };
                                },
                                function (e, t, n) {
                                    var r = n(5)["__core-js_shared__"];
                                    e.exports = r;
                                },
                                function (e) {
                                    var t = Function.prototype.toString;
                                    e.exports = function (e) {
                                        if (null != e) {
                                            try {
                                                return t.call(e);
                                            } catch (e) {}
                                            try {
                                                return e + "";
                                            } catch (e) {}
                                        }
                                        return "";
                                    };
                                },
                                function (e) {
                                    e.exports = function (e, t) {
                                        return null == e ? void 0 : e[t];
                                    };
                                },
                                function (e) {
                                    e.exports = function (e) {
                                        var t =
                                            this.has(e) &&
                                            delete this.__data__[e];
                                        return (this.size -= t ? 1 : 0), t;
                                    };
                                },
                                function (e, t, n) {
                                    var r = n(31),
                                        o = Object.prototype.hasOwnProperty;
                                    e.exports = function (e) {
                                        var t = this.__data__;
                                        if (r) {
                                            var n = t[e];
                                            return "__lodash_hash_undefined__" ===
                                                n
                                                ? void 0
                                                : n;
                                        }
                                        return o.call(t, e) ? t[e] : void 0;
                                    };
                                },
                                function (e, t, n) {
                                    var r = n(31),
                                        o = Object.prototype.hasOwnProperty;
                                    e.exports = function (e) {
                                        var t = this.__data__;
                                        return r
                                            ? void 0 !== t[e]
                                            : o.call(t, e);
                                    };
                                },
                                function (e, t, n) {
                                    var r = n(31);
                                    e.exports = function (e, t) {
                                        var n = this.__data__;
                                        return (
                                            (this.size += this.has(e) ? 0 : 1),
                                            (n[e] =
                                                r && void 0 === t
                                                    ? "__lodash_hash_undefined__"
                                                    : t),
                                            this
                                        );
                                    };
                                },
                                function (e, t, n) {
                                    var r = n(43),
                                        o = n(44),
                                        a = n(47),
                                        i = n(48),
                                        s = n(49);
                                    function c(e) {
                                        var t = -1,
                                            n = null == e ? 0 : e.length;
                                        for (this.clear(); ++t < n; ) {
                                            var r = e[t];
                                            this.set(r[0], r[1]);
                                        }
                                    }
                                    (c.prototype.clear = r),
                                        (c.prototype.delete = o),
                                        (c.prototype.get = a),
                                        (c.prototype.has = i),
                                        (c.prototype.set = s),
                                        (e.exports = c);
                                },
                                function (e) {
                                    e.exports = function () {
                                        (this.__data__ = []), (this.size = 0);
                                    };
                                },
                                function (e, t, n) {
                                    var r = n(45),
                                        o = Array.prototype.splice;
                                    e.exports = function (e) {
                                        var t = this.__data__,
                                            n = r(t, e);
                                        return (
                                            !(n < 0) &&
                                            (n == t.length - 1
                                                ? t.pop()
                                                : o.call(t, n, 1),
                                            --this.size,
                                            !0)
                                        );
                                    };
                                },
                                function (e, t, n) {
                                    var r = n(46);
                                    e.exports = function (e, t) {
                                        for (var n = e.length; n--; )
                                            if (r(e[n][0], t)) return n;
                                        return -1;
                                    };
                                },
                                function (e) {
                                    e.exports = function (e, t) {
                                        return e === t || (e != e && t != t);
                                    };
                                },
                                function (e, t, n) {
                                    var r = n(45);
                                    e.exports = function (e) {
                                        var t = this.__data__,
                                            n = r(t, e);
                                        return n < 0 ? void 0 : t[n][1];
                                    };
                                },
                                function (e, t, n) {
                                    var r = n(45);
                                    e.exports = function (e) {
                                        return r(this.__data__, e) > -1;
                                    };
                                },
                                function (e, t, n) {
                                    var r = n(45);
                                    e.exports = function (e, t) {
                                        var n = this.__data__,
                                            o = r(n, e);
                                        return (
                                            o < 0
                                                ? (++this.size, n.push([e, t]))
                                                : (n[o][1] = t),
                                            this
                                        );
                                    };
                                },
                                function (e, t, n) {
                                    var r = n(32)(n(5), "Map");
                                    e.exports = r;
                                },
                                function (e, t, n) {
                                    var r = n(52);
                                    e.exports = function (e) {
                                        var t = r(this, e).delete(e);
                                        return (this.size -= t ? 1 : 0), t;
                                    };
                                },
                                function (e, t, n) {
                                    var r = n(53);
                                    e.exports = function (e, t) {
                                        var n = e.__data__;
                                        return r(t)
                                            ? n[
                                                  "string" == typeof t
                                                      ? "string"
                                                      : "hash"
                                              ]
                                            : n.map;
                                    };
                                },
                                function (e) {
                                    e.exports = function (e) {
                                        var t = typeof e;
                                        return "string" == t ||
                                            "number" == t ||
                                            "symbol" == t ||
                                            "boolean" == t
                                            ? "__proto__" !== e
                                            : null === e;
                                    };
                                },
                                function (e, t, n) {
                                    var r = n(52);
                                    e.exports = function (e) {
                                        return r(this, e).get(e);
                                    };
                                },
                                function (e, t, n) {
                                    var r = n(52);
                                    e.exports = function (e) {
                                        return r(this, e).has(e);
                                    };
                                },
                                function (e, t, n) {
                                    var r = n(52);
                                    e.exports = function (e, t) {
                                        var n = r(this, e),
                                            o = n.size;
                                        return (
                                            n.set(e, t),
                                            (this.size += n.size == o ? 0 : 1),
                                            this
                                        );
                                    };
                                },
                                function (e, t, n) {
                                    var r = n(58);
                                    e.exports = function (e) {
                                        return null == e ? "" : r(e);
                                    };
                                },
                                function (e, t, n) {
                                    var r = n(4),
                                        o = n(59),
                                        a = n(11),
                                        i = n(18),
                                        s = r ? r.prototype : void 0,
                                        c = s ? s.toString : void 0;
                                    e.exports = function e(t) {
                                        if ("string" == typeof t) return t;
                                        if (a(t)) return o(t, e) + "";
                                        if (i(t)) return c ? c.call(t) : "";
                                        var n = t + "";
                                        return "0" == n && 1 / t == -Infinity
                                            ? "-0"
                                            : n;
                                    };
                                },
                                function (e) {
                                    e.exports = function (e, t) {
                                        for (
                                            var n = -1,
                                                r = null == e ? 0 : e.length,
                                                o = Array(r);
                                            ++n < r;

                                        )
                                            o[n] = t(e[n], n, e);
                                        return o;
                                    };
                                },
                                function (e, t, n) {
                                    var r = n(61),
                                        o = n(12),
                                        a = Object.prototype,
                                        i = a.hasOwnProperty,
                                        s = a.propertyIsEnumerable,
                                        c = r(
                                            (function () {
                                                return arguments;
                                            })()
                                        )
                                            ? r
                                            : function (e) {
                                                  return (
                                                      o(e) &&
                                                      i.call(e, "callee") &&
                                                      !s.call(e, "callee")
                                                  );
                                              };
                                    e.exports = c;
                                },
                                function (e, t, n) {
                                    var r = n(3),
                                        o = n(12);
                                    e.exports = function (e) {
                                        return (
                                            o(e) && "[object Arguments]" == r(e)
                                        );
                                    };
                                },
                                function (e) {
                                    var t = /^(?:0|[1-9]\d*)$/;
                                    e.exports = function (e, n) {
                                        var r = typeof e;
                                        return (
                                            !!(n =
                                                null == n
                                                    ? 9007199254740991
                                                    : n) &&
                                            ("number" == r ||
                                                ("symbol" != r && t.test(e))) &&
                                            e > -1 &&
                                            e % 1 == 0 &&
                                            e < n
                                        );
                                    };
                                },
                                function (e) {
                                    e.exports = function (e) {
                                        return (
                                            "number" == typeof e &&
                                            e > -1 &&
                                            e % 1 == 0 &&
                                            e <= 9007199254740991
                                        );
                                    };
                                },
                                function (e, t, n) {
                                    var r = n(18);
                                    e.exports = function (e) {
                                        if ("string" == typeof e || r(e))
                                            return e;
                                        var t = e + "";
                                        return "0" == t && 1 / e == -Infinity
                                            ? "-0"
                                            : t;
                                    };
                                },
                                function (e, t, n) {
                                    "use strict";
                                    Object.defineProperty(t, "__esModule", {
                                        value: !0,
                                    }),
                                        Object.defineProperty(t, "v1", {
                                            enumerable: !0,
                                            get: function () {
                                                return r.default;
                                            },
                                        }),
                                        Object.defineProperty(t, "v3", {
                                            enumerable: !0,
                                            get: function () {
                                                return o.default;
                                            },
                                        }),
                                        Object.defineProperty(t, "v4", {
                                            enumerable: !0,
                                            get: function () {
                                                return a.default;
                                            },
                                        }),
                                        Object.defineProperty(t, "v5", {
                                            enumerable: !0,
                                            get: function () {
                                                return i.default;
                                            },
                                        }),
                                        Object.defineProperty(t, "NIL", {
                                            enumerable: !0,
                                            get: function () {
                                                return s.default;
                                            },
                                        }),
                                        Object.defineProperty(t, "version", {
                                            enumerable: !0,
                                            get: function () {
                                                return c.default;
                                            },
                                        }),
                                        Object.defineProperty(t, "validate", {
                                            enumerable: !0,
                                            get: function () {
                                                return l.default;
                                            },
                                        }),
                                        Object.defineProperty(t, "stringify", {
                                            enumerable: !0,
                                            get: function () {
                                                return u.default;
                                            },
                                        }),
                                        Object.defineProperty(t, "parse", {
                                            enumerable: !0,
                                            get: function () {
                                                return p.default;
                                            },
                                        });
                                    var r = d(n(66)),
                                        o = d(n(71)),
                                        a = d(n(75)),
                                        i = d(n(76)),
                                        s = d(n(78)),
                                        c = d(n(79)),
                                        l = d(n(69)),
                                        u = d(n(68)),
                                        p = d(n(73));
                                    function d(e) {
                                        return e && e.__esModule
                                            ? e
                                            : { default: e };
                                    }
                                },
                                function (e, t, n) {
                                    "use strict";
                                    Object.defineProperty(t, "__esModule", {
                                        value: !0,
                                    }),
                                        (t.default = void 0);
                                    var r = a(n(67)),
                                        o = a(n(68));
                                    function a(e) {
                                        return e && e.__esModule
                                            ? e
                                            : { default: e };
                                    }
                                    let i,
                                        s,
                                        c = 0,
                                        l = 0;
                                    var u = function (e, t, n) {
                                        let a = (t && n) || 0;
                                        const u = t || new Array(16);
                                        let p = (e = e || {}).node || i,
                                            d =
                                                void 0 !== e.clockseq
                                                    ? e.clockseq
                                                    : s;
                                        if (null == p || null == d) {
                                            const t =
                                                e.random ||
                                                (e.rng || r.default)();
                                            null == p &&
                                                (p = i =
                                                    [
                                                        1 | t[0],
                                                        t[1],
                                                        t[2],
                                                        t[3],
                                                        t[4],
                                                        t[5],
                                                    ]),
                                                null == d &&
                                                    (d = s =
                                                        16383 &
                                                        ((t[6] << 8) | t[7]));
                                        }
                                        let f =
                                                void 0 !== e.msecs
                                                    ? e.msecs
                                                    : Date.now(),
                                            h =
                                                void 0 !== e.nsecs
                                                    ? e.nsecs
                                                    : l + 1;
                                        const y = f - c + (h - l) / 1e4;
                                        if (
                                            (y < 0 &&
                                                void 0 === e.clockseq &&
                                                (d = (d + 1) & 16383),
                                            (y < 0 || f > c) &&
                                                void 0 === e.nsecs &&
                                                (h = 0),
                                            h >= 1e4)
                                        )
                                            throw new Error(
                                                "uuid.v1(): Can't create more than 10M uuids/sec"
                                            );
                                        (c = f),
                                            (l = h),
                                            (s = d),
                                            (f += 122192928e5);
                                        const v =
                                            (1e4 * (268435455 & f) + h) %
                                            4294967296;
                                        (u[a++] = (v >>> 24) & 255),
                                            (u[a++] = (v >>> 16) & 255),
                                            (u[a++] = (v >>> 8) & 255),
                                            (u[a++] = 255 & v);
                                        const g =
                                            ((f / 4294967296) * 1e4) &
                                            268435455;
                                        (u[a++] = (g >>> 8) & 255),
                                            (u[a++] = 255 & g),
                                            (u[a++] = ((g >>> 24) & 15) | 16),
                                            (u[a++] = (g >>> 16) & 255),
                                            (u[a++] = (d >>> 8) | 128),
                                            (u[a++] = 255 & d);
                                        for (let e = 0; e < 6; ++e)
                                            u[a + e] = p[e];
                                        return t || (0, o.default)(u);
                                    };
                                    t.default = u;
                                },
                                function (e, t) {
                                    "use strict";
                                    let n;
                                    Object.defineProperty(t, "__esModule", {
                                        value: !0,
                                    }),
                                        (t.default = function () {
                                            if (
                                                !n &&
                                                ((n =
                                                    ("undefined" !=
                                                        typeof crypto &&
                                                        crypto.getRandomValues &&
                                                        crypto.getRandomValues.bind(
                                                            crypto
                                                        )) ||
                                                    ("undefined" !=
                                                        typeof msCrypto &&
                                                        "function" ==
                                                            typeof msCrypto.getRandomValues &&
                                                        msCrypto.getRandomValues.bind(
                                                            msCrypto
                                                        ))),
                                                !n)
                                            )
                                                throw new Error(
                                                    "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
                                                );
                                            return n(r);
                                        });
                                    const r = new Uint8Array(16);
                                },
                                function (e, t, n) {
                                    "use strict";
                                    Object.defineProperty(t, "__esModule", {
                                        value: !0,
                                    }),
                                        (t.default = void 0);
                                    var r,
                                        o =
                                            (r = n(69)) && r.__esModule
                                                ? r
                                                : { default: r };
                                    const a = [];
                                    for (let e = 0; e < 256; ++e)
                                        a.push(
                                            (e + 256).toString(16).substr(1)
                                        );
                                    var i = function (e, t = 0) {
                                        const n = (
                                            a[e[t + 0]] +
                                            a[e[t + 1]] +
                                            a[e[t + 2]] +
                                            a[e[t + 3]] +
                                            "-" +
                                            a[e[t + 4]] +
                                            a[e[t + 5]] +
                                            "-" +
                                            a[e[t + 6]] +
                                            a[e[t + 7]] +
                                            "-" +
                                            a[e[t + 8]] +
                                            a[e[t + 9]] +
                                            "-" +
                                            a[e[t + 10]] +
                                            a[e[t + 11]] +
                                            a[e[t + 12]] +
                                            a[e[t + 13]] +
                                            a[e[t + 14]] +
                                            a[e[t + 15]]
                                        ).toLowerCase();
                                        if (!(0, o.default)(n))
                                            throw TypeError(
                                                "Stringified UUID is invalid"
                                            );
                                        return n;
                                    };
                                    t.default = i;
                                },
                                function (e, t, n) {
                                    "use strict";
                                    Object.defineProperty(t, "__esModule", {
                                        value: !0,
                                    }),
                                        (t.default = void 0);
                                    var r,
                                        o =
                                            (r = n(70)) && r.__esModule
                                                ? r
                                                : { default: r };
                                    var a = function (e) {
                                        return (
                                            "string" == typeof e &&
                                            o.default.test(e)
                                        );
                                    };
                                    t.default = a;
                                },
                                function (e, t) {
                                    "use strict";
                                    Object.defineProperty(t, "__esModule", {
                                        value: !0,
                                    }),
                                        (t.default = void 0);
                                    t.default =
                                        /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
                                },
                                function (e, t, n) {
                                    "use strict";
                                    Object.defineProperty(t, "__esModule", {
                                        value: !0,
                                    }),
                                        (t.default = void 0);
                                    var r = a(n(72)),
                                        o = a(n(74));
                                    function a(e) {
                                        return e && e.__esModule
                                            ? e
                                            : { default: e };
                                    }
                                    var i = (0, r.default)("v3", 48, o.default);
                                    t.default = i;
                                },
                                function (e, t, n) {
                                    "use strict";
                                    Object.defineProperty(t, "__esModule", {
                                        value: !0,
                                    }),
                                        (t.default = function (e, t, n) {
                                            function a(e, a, i, s) {
                                                if (
                                                    ("string" == typeof e &&
                                                        (e = (function (e) {
                                                            e = unescape(
                                                                encodeURIComponent(
                                                                    e
                                                                )
                                                            );
                                                            const t = [];
                                                            for (
                                                                let n = 0;
                                                                n < e.length;
                                                                ++n
                                                            )
                                                                t.push(
                                                                    e.charCodeAt(
                                                                        n
                                                                    )
                                                                );
                                                            return t;
                                                        })(e)),
                                                    "string" == typeof a &&
                                                        (a = (0, o.default)(a)),
                                                    16 !== a.length)
                                                )
                                                    throw TypeError(
                                                        "Namespace must be array-like (16 iterable integer values, 0-255)"
                                                    );
                                                let c = new Uint8Array(
                                                    16 + e.length
                                                );
                                                if (
                                                    (c.set(a),
                                                    c.set(e, a.length),
                                                    (c = n(c)),
                                                    (c[6] = (15 & c[6]) | t),
                                                    (c[8] = (63 & c[8]) | 128),
                                                    i)
                                                ) {
                                                    s = s || 0;
                                                    for (let e = 0; e < 16; ++e)
                                                        i[s + e] = c[e];
                                                    return i;
                                                }
                                                return (0, r.default)(c);
                                            }
                                            try {
                                                a.name = e;
                                            } catch (e) {}
                                            return (a.DNS = i), (a.URL = s), a;
                                        }),
                                        (t.URL = t.DNS = void 0);
                                    var r = a(n(68)),
                                        o = a(n(73));
                                    function a(e) {
                                        return e && e.__esModule
                                            ? e
                                            : { default: e };
                                    }
                                    const i =
                                        "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
                                    t.DNS = i;
                                    const s =
                                        "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
                                    t.URL = s;
                                },
                                function (e, t, n) {
                                    "use strict";
                                    Object.defineProperty(t, "__esModule", {
                                        value: !0,
                                    }),
                                        (t.default = void 0);
                                    var r,
                                        o =
                                            (r = n(69)) && r.__esModule
                                                ? r
                                                : { default: r };
                                    var a = function (e) {
                                        if (!(0, o.default)(e))
                                            throw TypeError("Invalid UUID");
                                        let t;
                                        const n = new Uint8Array(16);
                                        return (
                                            (n[0] =
                                                (t = parseInt(
                                                    e.slice(0, 8),
                                                    16
                                                )) >>> 24),
                                            (n[1] = (t >>> 16) & 255),
                                            (n[2] = (t >>> 8) & 255),
                                            (n[3] = 255 & t),
                                            (n[4] =
                                                (t = parseInt(
                                                    e.slice(9, 13),
                                                    16
                                                )) >>> 8),
                                            (n[5] = 255 & t),
                                            (n[6] =
                                                (t = parseInt(
                                                    e.slice(14, 18),
                                                    16
                                                )) >>> 8),
                                            (n[7] = 255 & t),
                                            (n[8] =
                                                (t = parseInt(
                                                    e.slice(19, 23),
                                                    16
                                                )) >>> 8),
                                            (n[9] = 255 & t),
                                            (n[10] =
                                                ((t = parseInt(
                                                    e.slice(24, 36),
                                                    16
                                                )) /
                                                    1099511627776) &
                                                255),
                                            (n[11] = (t / 4294967296) & 255),
                                            (n[12] = (t >>> 24) & 255),
                                            (n[13] = (t >>> 16) & 255),
                                            (n[14] = (t >>> 8) & 255),
                                            (n[15] = 255 & t),
                                            n
                                        );
                                    };
                                    t.default = a;
                                },
                                function (e, t) {
                                    "use strict";
                                    function n(e) {
                                        return 14 + (((e + 64) >>> 9) << 4) + 1;
                                    }
                                    function r(e, t) {
                                        const n = (65535 & e) + (65535 & t);
                                        return (
                                            (((e >> 16) +
                                                (t >> 16) +
                                                (n >> 16)) <<
                                                16) |
                                            (65535 & n)
                                        );
                                    }
                                    function o(e, t, n, o, a, i) {
                                        return r(
                                            ((s = r(r(t, e), r(o, i))) <<
                                                (c = a)) |
                                                (s >>> (32 - c)),
                                            n
                                        );
                                        var s, c;
                                    }
                                    function a(e, t, n, r, a, i, s) {
                                        return o(
                                            (t & n) | (~t & r),
                                            e,
                                            t,
                                            a,
                                            i,
                                            s
                                        );
                                    }
                                    function i(e, t, n, r, a, i, s) {
                                        return o(
                                            (t & r) | (n & ~r),
                                            e,
                                            t,
                                            a,
                                            i,
                                            s
                                        );
                                    }
                                    function s(e, t, n, r, a, i, s) {
                                        return o(t ^ n ^ r, e, t, a, i, s);
                                    }
                                    function c(e, t, n, r, a, i, s) {
                                        return o(n ^ (t | ~r), e, t, a, i, s);
                                    }
                                    Object.defineProperty(t, "__esModule", {
                                        value: !0,
                                    }),
                                        (t.default = void 0);
                                    var l = function (e) {
                                        if ("string" == typeof e) {
                                            const t = unescape(
                                                encodeURIComponent(e)
                                            );
                                            e = new Uint8Array(t.length);
                                            for (let n = 0; n < t.length; ++n)
                                                e[n] = t.charCodeAt(n);
                                        }
                                        return (function (e) {
                                            const t = [],
                                                n = 32 * e.length,
                                                r = "0123456789abcdef";
                                            for (let o = 0; o < n; o += 8) {
                                                const n =
                                                        (e[o >> 5] >>> o % 32) &
                                                        255,
                                                    a = parseInt(
                                                        r.charAt(
                                                            (n >>> 4) & 15
                                                        ) + r.charAt(15 & n),
                                                        16
                                                    );
                                                t.push(a);
                                            }
                                            return t;
                                        })(
                                            (function (e, t) {
                                                (e[t >> 5] |= 128 << t % 32),
                                                    (e[n(t) - 1] = t);
                                                let o = 1732584193,
                                                    l = -271733879,
                                                    u = -1732584194,
                                                    p = 271733878;
                                                for (
                                                    let t = 0;
                                                    t < e.length;
                                                    t += 16
                                                ) {
                                                    const n = o,
                                                        d = l,
                                                        f = u,
                                                        h = p;
                                                    (o = a(
                                                        o,
                                                        l,
                                                        u,
                                                        p,
                                                        e[t],
                                                        7,
                                                        -680876936
                                                    )),
                                                        (p = a(
                                                            p,
                                                            o,
                                                            l,
                                                            u,
                                                            e[t + 1],
                                                            12,
                                                            -389564586
                                                        )),
                                                        (u = a(
                                                            u,
                                                            p,
                                                            o,
                                                            l,
                                                            e[t + 2],
                                                            17,
                                                            606105819
                                                        )),
                                                        (l = a(
                                                            l,
                                                            u,
                                                            p,
                                                            o,
                                                            e[t + 3],
                                                            22,
                                                            -1044525330
                                                        )),
                                                        (o = a(
                                                            o,
                                                            l,
                                                            u,
                                                            p,
                                                            e[t + 4],
                                                            7,
                                                            -176418897
                                                        )),
                                                        (p = a(
                                                            p,
                                                            o,
                                                            l,
                                                            u,
                                                            e[t + 5],
                                                            12,
                                                            1200080426
                                                        )),
                                                        (u = a(
                                                            u,
                                                            p,
                                                            o,
                                                            l,
                                                            e[t + 6],
                                                            17,
                                                            -1473231341
                                                        )),
                                                        (l = a(
                                                            l,
                                                            u,
                                                            p,
                                                            o,
                                                            e[t + 7],
                                                            22,
                                                            -45705983
                                                        )),
                                                        (o = a(
                                                            o,
                                                            l,
                                                            u,
                                                            p,
                                                            e[t + 8],
                                                            7,
                                                            1770035416
                                                        )),
                                                        (p = a(
                                                            p,
                                                            o,
                                                            l,
                                                            u,
                                                            e[t + 9],
                                                            12,
                                                            -1958414417
                                                        )),
                                                        (u = a(
                                                            u,
                                                            p,
                                                            o,
                                                            l,
                                                            e[t + 10],
                                                            17,
                                                            -42063
                                                        )),
                                                        (l = a(
                                                            l,
                                                            u,
                                                            p,
                                                            o,
                                                            e[t + 11],
                                                            22,
                                                            -1990404162
                                                        )),
                                                        (o = a(
                                                            o,
                                                            l,
                                                            u,
                                                            p,
                                                            e[t + 12],
                                                            7,
                                                            1804603682
                                                        )),
                                                        (p = a(
                                                            p,
                                                            o,
                                                            l,
                                                            u,
                                                            e[t + 13],
                                                            12,
                                                            -40341101
                                                        )),
                                                        (u = a(
                                                            u,
                                                            p,
                                                            o,
                                                            l,
                                                            e[t + 14],
                                                            17,
                                                            -1502002290
                                                        )),
                                                        (l = a(
                                                            l,
                                                            u,
                                                            p,
                                                            o,
                                                            e[t + 15],
                                                            22,
                                                            1236535329
                                                        )),
                                                        (o = i(
                                                            o,
                                                            l,
                                                            u,
                                                            p,
                                                            e[t + 1],
                                                            5,
                                                            -165796510
                                                        )),
                                                        (p = i(
                                                            p,
                                                            o,
                                                            l,
                                                            u,
                                                            e[t + 6],
                                                            9,
                                                            -1069501632
                                                        )),
                                                        (u = i(
                                                            u,
                                                            p,
                                                            o,
                                                            l,
                                                            e[t + 11],
                                                            14,
                                                            643717713
                                                        )),
                                                        (l = i(
                                                            l,
                                                            u,
                                                            p,
                                                            o,
                                                            e[t],
                                                            20,
                                                            -373897302
                                                        )),
                                                        (o = i(
                                                            o,
                                                            l,
                                                            u,
                                                            p,
                                                            e[t + 5],
                                                            5,
                                                            -701558691
                                                        )),
                                                        (p = i(
                                                            p,
                                                            o,
                                                            l,
                                                            u,
                                                            e[t + 10],
                                                            9,
                                                            38016083
                                                        )),
                                                        (u = i(
                                                            u,
                                                            p,
                                                            o,
                                                            l,
                                                            e[t + 15],
                                                            14,
                                                            -660478335
                                                        )),
                                                        (l = i(
                                                            l,
                                                            u,
                                                            p,
                                                            o,
                                                            e[t + 4],
                                                            20,
                                                            -405537848
                                                        )),
                                                        (o = i(
                                                            o,
                                                            l,
                                                            u,
                                                            p,
                                                            e[t + 9],
                                                            5,
                                                            568446438
                                                        )),
                                                        (p = i(
                                                            p,
                                                            o,
                                                            l,
                                                            u,
                                                            e[t + 14],
                                                            9,
                                                            -1019803690
                                                        )),
                                                        (u = i(
                                                            u,
                                                            p,
                                                            o,
                                                            l,
                                                            e[t + 3],
                                                            14,
                                                            -187363961
                                                        )),
                                                        (l = i(
                                                            l,
                                                            u,
                                                            p,
                                                            o,
                                                            e[t + 8],
                                                            20,
                                                            1163531501
                                                        )),
                                                        (o = i(
                                                            o,
                                                            l,
                                                            u,
                                                            p,
                                                            e[t + 13],
                                                            5,
                                                            -1444681467
                                                        )),
                                                        (p = i(
                                                            p,
                                                            o,
                                                            l,
                                                            u,
                                                            e[t + 2],
                                                            9,
                                                            -51403784
                                                        )),
                                                        (u = i(
                                                            u,
                                                            p,
                                                            o,
                                                            l,
                                                            e[t + 7],
                                                            14,
                                                            1735328473
                                                        )),
                                                        (l = i(
                                                            l,
                                                            u,
                                                            p,
                                                            o,
                                                            e[t + 12],
                                                            20,
                                                            -1926607734
                                                        )),
                                                        (o = s(
                                                            o,
                                                            l,
                                                            u,
                                                            p,
                                                            e[t + 5],
                                                            4,
                                                            -378558
                                                        )),
                                                        (p = s(
                                                            p,
                                                            o,
                                                            l,
                                                            u,
                                                            e[t + 8],
                                                            11,
                                                            -2022574463
                                                        )),
                                                        (u = s(
                                                            u,
                                                            p,
                                                            o,
                                                            l,
                                                            e[t + 11],
                                                            16,
                                                            1839030562
                                                        )),
                                                        (l = s(
                                                            l,
                                                            u,
                                                            p,
                                                            o,
                                                            e[t + 14],
                                                            23,
                                                            -35309556
                                                        )),
                                                        (o = s(
                                                            o,
                                                            l,
                                                            u,
                                                            p,
                                                            e[t + 1],
                                                            4,
                                                            -1530992060
                                                        )),
                                                        (p = s(
                                                            p,
                                                            o,
                                                            l,
                                                            u,
                                                            e[t + 4],
                                                            11,
                                                            1272893353
                                                        )),
                                                        (u = s(
                                                            u,
                                                            p,
                                                            o,
                                                            l,
                                                            e[t + 7],
                                                            16,
                                                            -155497632
                                                        )),
                                                        (l = s(
                                                            l,
                                                            u,
                                                            p,
                                                            o,
                                                            e[t + 10],
                                                            23,
                                                            -1094730640
                                                        )),
                                                        (o = s(
                                                            o,
                                                            l,
                                                            u,
                                                            p,
                                                            e[t + 13],
                                                            4,
                                                            681279174
                                                        )),
                                                        (p = s(
                                                            p,
                                                            o,
                                                            l,
                                                            u,
                                                            e[t],
                                                            11,
                                                            -358537222
                                                        )),
                                                        (u = s(
                                                            u,
                                                            p,
                                                            o,
                                                            l,
                                                            e[t + 3],
                                                            16,
                                                            -722521979
                                                        )),
                                                        (l = s(
                                                            l,
                                                            u,
                                                            p,
                                                            o,
                                                            e[t + 6],
                                                            23,
                                                            76029189
                                                        )),
                                                        (o = s(
                                                            o,
                                                            l,
                                                            u,
                                                            p,
                                                            e[t + 9],
                                                            4,
                                                            -640364487
                                                        )),
                                                        (p = s(
                                                            p,
                                                            o,
                                                            l,
                                                            u,
                                                            e[t + 12],
                                                            11,
                                                            -421815835
                                                        )),
                                                        (u = s(
                                                            u,
                                                            p,
                                                            o,
                                                            l,
                                                            e[t + 15],
                                                            16,
                                                            530742520
                                                        )),
                                                        (l = s(
                                                            l,
                                                            u,
                                                            p,
                                                            o,
                                                            e[t + 2],
                                                            23,
                                                            -995338651
                                                        )),
                                                        (o = c(
                                                            o,
                                                            l,
                                                            u,
                                                            p,
                                                            e[t],
                                                            6,
                                                            -198630844
                                                        )),
                                                        (p = c(
                                                            p,
                                                            o,
                                                            l,
                                                            u,
                                                            e[t + 7],
                                                            10,
                                                            1126891415
                                                        )),
                                                        (u = c(
                                                            u,
                                                            p,
                                                            o,
                                                            l,
                                                            e[t + 14],
                                                            15,
                                                            -1416354905
                                                        )),
                                                        (l = c(
                                                            l,
                                                            u,
                                                            p,
                                                            o,
                                                            e[t + 5],
                                                            21,
                                                            -57434055
                                                        )),
                                                        (o = c(
                                                            o,
                                                            l,
                                                            u,
                                                            p,
                                                            e[t + 12],
                                                            6,
                                                            1700485571
                                                        )),
                                                        (p = c(
                                                            p,
                                                            o,
                                                            l,
                                                            u,
                                                            e[t + 3],
                                                            10,
                                                            -1894986606
                                                        )),
                                                        (u = c(
                                                            u,
                                                            p,
                                                            o,
                                                            l,
                                                            e[t + 10],
                                                            15,
                                                            -1051523
                                                        )),
                                                        (l = c(
                                                            l,
                                                            u,
                                                            p,
                                                            o,
                                                            e[t + 1],
                                                            21,
                                                            -2054922799
                                                        )),
                                                        (o = c(
                                                            o,
                                                            l,
                                                            u,
                                                            p,
                                                            e[t + 8],
                                                            6,
                                                            1873313359
                                                        )),
                                                        (p = c(
                                                            p,
                                                            o,
                                                            l,
                                                            u,
                                                            e[t + 15],
                                                            10,
                                                            -30611744
                                                        )),
                                                        (u = c(
                                                            u,
                                                            p,
                                                            o,
                                                            l,
                                                            e[t + 6],
                                                            15,
                                                            -1560198380
                                                        )),
                                                        (l = c(
                                                            l,
                                                            u,
                                                            p,
                                                            o,
                                                            e[t + 13],
                                                            21,
                                                            1309151649
                                                        )),
                                                        (o = c(
                                                            o,
                                                            l,
                                                            u,
                                                            p,
                                                            e[t + 4],
                                                            6,
                                                            -145523070
                                                        )),
                                                        (p = c(
                                                            p,
                                                            o,
                                                            l,
                                                            u,
                                                            e[t + 11],
                                                            10,
                                                            -1120210379
                                                        )),
                                                        (u = c(
                                                            u,
                                                            p,
                                                            o,
                                                            l,
                                                            e[t + 2],
                                                            15,
                                                            718787259
                                                        )),
                                                        (l = c(
                                                            l,
                                                            u,
                                                            p,
                                                            o,
                                                            e[t + 9],
                                                            21,
                                                            -343485551
                                                        )),
                                                        (o = r(o, n)),
                                                        (l = r(l, d)),
                                                        (u = r(u, f)),
                                                        (p = r(p, h));
                                                }
                                                return [o, l, u, p];
                                            })(
                                                (function (e) {
                                                    if (0 === e.length)
                                                        return [];
                                                    const t = 8 * e.length,
                                                        r = new Uint32Array(
                                                            n(t)
                                                        );
                                                    for (
                                                        let n = 0;
                                                        n < t;
                                                        n += 8
                                                    )
                                                        r[n >> 5] |=
                                                            (255 & e[n / 8]) <<
                                                            n % 32;
                                                    return r;
                                                })(e),
                                                8 * e.length
                                            )
                                        );
                                    };
                                    t.default = l;
                                },
                                function (e, t, n) {
                                    "use strict";
                                    Object.defineProperty(t, "__esModule", {
                                        value: !0,
                                    }),
                                        (t.default = void 0);
                                    var r = a(n(67)),
                                        o = a(n(68));
                                    function a(e) {
                                        return e && e.__esModule
                                            ? e
                                            : { default: e };
                                    }
                                    var i = function (e, t, n) {
                                        const a =
                                            (e = e || {}).random ||
                                            (e.rng || r.default)();
                                        if (
                                            ((a[6] = (15 & a[6]) | 64),
                                            (a[8] = (63 & a[8]) | 128),
                                            t)
                                        ) {
                                            n = n || 0;
                                            for (let e = 0; e < 16; ++e)
                                                t[n + e] = a[e];
                                            return t;
                                        }
                                        return (0, o.default)(a);
                                    };
                                    t.default = i;
                                },
                                function (e, t, n) {
                                    "use strict";
                                    Object.defineProperty(t, "__esModule", {
                                        value: !0,
                                    }),
                                        (t.default = void 0);
                                    var r = a(n(72)),
                                        o = a(n(77));
                                    function a(e) {
                                        return e && e.__esModule
                                            ? e
                                            : { default: e };
                                    }
                                    var i = (0, r.default)("v5", 80, o.default);
                                    t.default = i;
                                },
                                function (e, t) {
                                    "use strict";
                                    function n(e, t, n, r) {
                                        switch (e) {
                                            case 0:
                                                return (t & n) ^ (~t & r);
                                            case 1:
                                                return t ^ n ^ r;
                                            case 2:
                                                return (
                                                    (t & n) ^ (t & r) ^ (n & r)
                                                );
                                            case 3:
                                                return t ^ n ^ r;
                                        }
                                    }
                                    function r(e, t) {
                                        return (e << t) | (e >>> (32 - t));
                                    }
                                    Object.defineProperty(t, "__esModule", {
                                        value: !0,
                                    }),
                                        (t.default = void 0);
                                    var o = function (e) {
                                        const t = [
                                                1518500249, 1859775393,
                                                2400959708, 3395469782,
                                            ],
                                            o = [
                                                1732584193, 4023233417,
                                                2562383102, 271733878,
                                                3285377520,
                                            ];
                                        if ("string" == typeof e) {
                                            const t = unescape(
                                                encodeURIComponent(e)
                                            );
                                            e = [];
                                            for (let n = 0; n < t.length; ++n)
                                                e.push(t.charCodeAt(n));
                                        } else
                                            Array.isArray(e) ||
                                                (e =
                                                    Array.prototype.slice.call(
                                                        e
                                                    ));
                                        e.push(128);
                                        const a = e.length / 4 + 2,
                                            i = Math.ceil(a / 16),
                                            s = new Array(i);
                                        for (let t = 0; t < i; ++t) {
                                            const n = new Uint32Array(16);
                                            for (let r = 0; r < 16; ++r)
                                                n[r] =
                                                    (e[64 * t + 4 * r] << 24) |
                                                    (e[64 * t + 4 * r + 1] <<
                                                        16) |
                                                    (e[64 * t + 4 * r + 2] <<
                                                        8) |
                                                    e[64 * t + 4 * r + 3];
                                            s[t] = n;
                                        }
                                        (s[i - 1][14] =
                                            (8 * (e.length - 1)) /
                                            Math.pow(2, 32)),
                                            (s[i - 1][14] = Math.floor(
                                                s[i - 1][14]
                                            )),
                                            (s[i - 1][15] =
                                                (8 * (e.length - 1)) &
                                                4294967295);
                                        for (let e = 0; e < i; ++e) {
                                            const a = new Uint32Array(80);
                                            for (let t = 0; t < 16; ++t)
                                                a[t] = s[e][t];
                                            for (let e = 16; e < 80; ++e)
                                                a[e] = r(
                                                    a[e - 3] ^
                                                        a[e - 8] ^
                                                        a[e - 14] ^
                                                        a[e - 16],
                                                    1
                                                );
                                            let i = o[0],
                                                c = o[1],
                                                l = o[2],
                                                u = o[3],
                                                p = o[4];
                                            for (let e = 0; e < 80; ++e) {
                                                const o = Math.floor(e / 20),
                                                    s =
                                                        (r(i, 5) +
                                                            n(o, c, l, u) +
                                                            p +
                                                            t[o] +
                                                            a[e]) >>>
                                                        0;
                                                (p = u),
                                                    (u = l),
                                                    (l = r(c, 30) >>> 0),
                                                    (c = i),
                                                    (i = s);
                                            }
                                            (o[0] = (o[0] + i) >>> 0),
                                                (o[1] = (o[1] + c) >>> 0),
                                                (o[2] = (o[2] + l) >>> 0),
                                                (o[3] = (o[3] + u) >>> 0),
                                                (o[4] = (o[4] + p) >>> 0);
                                        }
                                        return [
                                            (o[0] >> 24) & 255,
                                            (o[0] >> 16) & 255,
                                            (o[0] >> 8) & 255,
                                            255 & o[0],
                                            (o[1] >> 24) & 255,
                                            (o[1] >> 16) & 255,
                                            (o[1] >> 8) & 255,
                                            255 & o[1],
                                            (o[2] >> 24) & 255,
                                            (o[2] >> 16) & 255,
                                            (o[2] >> 8) & 255,
                                            255 & o[2],
                                            (o[3] >> 24) & 255,
                                            (o[3] >> 16) & 255,
                                            (o[3] >> 8) & 255,
                                            255 & o[3],
                                            (o[4] >> 24) & 255,
                                            (o[4] >> 16) & 255,
                                            (o[4] >> 8) & 255,
                                            255 & o[4],
                                        ];
                                    };
                                    t.default = o;
                                },
                                function (e, t) {
                                    "use strict";
                                    Object.defineProperty(t, "__esModule", {
                                        value: !0,
                                    }),
                                        (t.default = void 0);
                                    t.default =
                                        "00000000-0000-0000-0000-000000000000";
                                },
                                function (e, t, n) {
                                    "use strict";
                                    Object.defineProperty(t, "__esModule", {
                                        value: !0,
                                    }),
                                        (t.default = void 0);
                                    var r,
                                        o =
                                            (r = n(69)) && r.__esModule
                                                ? r
                                                : { default: r };
                                    var a = function (e) {
                                        if (!(0, o.default)(e))
                                            throw TypeError("Invalid UUID");
                                        return parseInt(e.substr(14, 1), 16);
                                    };
                                    t.default = a;
                                },
                                function (e) {
                                    e.exports = function (e) {
                                        return void 0 === e;
                                    };
                                },
                                function (e, t, n) {
                                    var r = n(82),
                                        o = n(86),
                                        a = n(60),
                                        i = n(11),
                                        s = n(91),
                                        c = n(92),
                                        l = n(83),
                                        u = n(94),
                                        p = Object.prototype.hasOwnProperty;
                                    e.exports = function (e) {
                                        if (null == e) return !0;
                                        if (
                                            s(e) &&
                                            (i(e) ||
                                                "string" == typeof e ||
                                                "function" == typeof e.splice ||
                                                c(e) ||
                                                u(e) ||
                                                a(e))
                                        )
                                            return !e.length;
                                        var t = o(e);
                                        if (
                                            "[object Map]" == t ||
                                            "[object Set]" == t
                                        )
                                            return !e.size;
                                        if (l(e)) return !r(e).length;
                                        for (var n in e)
                                            if (p.call(e, n)) return !1;
                                        return !0;
                                    };
                                },
                                function (e, t, n) {
                                    var r = n(83),
                                        o = n(84),
                                        a = Object.prototype.hasOwnProperty;
                                    e.exports = function (e) {
                                        if (!r(e)) return o(e);
                                        var t = [];
                                        for (var n in Object(e))
                                            a.call(e, n) &&
                                                "constructor" != n &&
                                                t.push(n);
                                        return t;
                                    };
                                },
                                function (e) {
                                    var t = Object.prototype;
                                    e.exports = function (e) {
                                        var n = e && e.constructor;
                                        return (
                                            e ===
                                            (("function" == typeof n &&
                                                n.prototype) ||
                                                t)
                                        );
                                    };
                                },
                                function (e, t, n) {
                                    var r = n(85)(Object.keys, Object);
                                    e.exports = r;
                                },
                                function (e) {
                                    e.exports = function (e, t) {
                                        return function (n) {
                                            return e(t(n));
                                        };
                                    };
                                },
                                function (e, t, n) {
                                    var r = n(87),
                                        o = n(50),
                                        a = n(88),
                                        i = n(89),
                                        s = n(90),
                                        c = n(3),
                                        l = n(36),
                                        u = "[object Map]",
                                        p = "[object Promise]",
                                        d = "[object Set]",
                                        f = "[object WeakMap]",
                                        h = "[object DataView]",
                                        y = l(r),
                                        v = l(o),
                                        g = l(a),
                                        m = l(i),
                                        b = l(s),
                                        w = c;
                                    ((r && w(new r(new ArrayBuffer(1))) != h) ||
                                        (o && w(new o()) != u) ||
                                        (a && w(a.resolve()) != p) ||
                                        (i && w(new i()) != d) ||
                                        (s && w(new s()) != f)) &&
                                        (w = function (e) {
                                            var t = c(e),
                                                n =
                                                    "[object Object]" == t
                                                        ? e.constructor
                                                        : void 0,
                                                r = n ? l(n) : "";
                                            if (r)
                                                switch (r) {
                                                    case y:
                                                        return h;
                                                    case v:
                                                        return u;
                                                    case g:
                                                        return p;
                                                    case m:
                                                        return d;
                                                    case b:
                                                        return f;
                                                }
                                            return t;
                                        }),
                                        (e.exports = w);
                                },
                                function (e, t, n) {
                                    var r = n(32)(n(5), "DataView");
                                    e.exports = r;
                                },
                                function (e, t, n) {
                                    var r = n(32)(n(5), "Promise");
                                    e.exports = r;
                                },
                                function (e, t, n) {
                                    var r = n(32)(n(5), "Set");
                                    e.exports = r;
                                },
                                function (e, t, n) {
                                    var r = n(32)(n(5), "WeakMap");
                                    e.exports = r;
                                },
                                function (e, t, n) {
                                    var r = n(2),
                                        o = n(63);
                                    e.exports = function (e) {
                                        return (
                                            null != e && o(e.length) && !r(e)
                                        );
                                    };
                                },
                                function (e, t, n) {
                                    e = n.nmd(e);
                                    var r = n(5),
                                        o = n(93),
                                        a = t && !t.nodeType && t,
                                        i = a && e && !e.nodeType && e,
                                        s =
                                            i && i.exports === a
                                                ? r.Buffer
                                                : void 0,
                                        c = (s ? s.isBuffer : void 0) || o;
                                    e.exports = c;
                                },
                                function (e) {
                                    e.exports = function () {
                                        return !1;
                                    };
                                },
                                function (e, t, n) {
                                    var r = n(95),
                                        o = n(96),
                                        a = n(97),
                                        i = a && a.isTypedArray,
                                        s = i ? o(i) : r;
                                    e.exports = s;
                                },
                                function (e, t, n) {
                                    var r = n(3),
                                        o = n(63),
                                        a = n(12),
                                        i = {};
                                    (i["[object Float32Array]"] =
                                        i["[object Float64Array]"] =
                                        i["[object Int8Array]"] =
                                        i["[object Int16Array]"] =
                                        i["[object Int32Array]"] =
                                        i["[object Uint8Array]"] =
                                        i["[object Uint8ClampedArray]"] =
                                        i["[object Uint16Array]"] =
                                        i["[object Uint32Array]"] =
                                            !0),
                                        (i["[object Arguments]"] =
                                            i["[object Array]"] =
                                            i["[object ArrayBuffer]"] =
                                            i["[object Boolean]"] =
                                            i["[object DataView]"] =
                                            i["[object Date]"] =
                                            i["[object Error]"] =
                                            i["[object Function]"] =
                                            i["[object Map]"] =
                                            i["[object Number]"] =
                                            i["[object Object]"] =
                                            i["[object RegExp]"] =
                                            i["[object Set]"] =
                                            i["[object String]"] =
                                            i["[object WeakMap]"] =
                                                !1),
                                        (e.exports = function (e) {
                                            return (
                                                a(e) && o(e.length) && !!i[r(e)]
                                            );
                                        });
                                },
                                function (e) {
                                    e.exports = function (e) {
                                        return function (t) {
                                            return e(t);
                                        };
                                    };
                                },
                                function (e, t, n) {
                                    e = n.nmd(e);
                                    var r = n(6),
                                        o = t && !t.nodeType && t,
                                        a = o && e && !e.nodeType && e,
                                        i = a && a.exports === o && r.process,
                                        s = (function () {
                                            try {
                                                var e =
                                                    a &&
                                                    a.require &&
                                                    a.require("util").types;
                                                return (
                                                    e ||
                                                    (i &&
                                                        i.binding &&
                                                        i.binding("util"))
                                                );
                                            } catch (e) {}
                                        })();
                                    e.exports = s;
                                },
                                function (e, t, n) {
                                    var r = n(11);
                                    e.exports = function () {
                                        if (!arguments.length) return [];
                                        var e = arguments[0];
                                        return r(e) ? e : [e];
                                    };
                                },
                                function (e, t, n) {
                                    var r = n(100);
                                    e.exports = function (e) {
                                        return (null == e ? 0 : e.length)
                                            ? r(e, 1)
                                            : [];
                                    };
                                },
                                function (e, t, n) {
                                    var r = n(101),
                                        o = n(102);
                                    e.exports = function e(t, n, a, i, s) {
                                        var c = -1,
                                            l = t.length;
                                        for (
                                            a || (a = o), s || (s = []);
                                            ++c < l;

                                        ) {
                                            var u = t[c];
                                            n > 0 && a(u)
                                                ? n > 1
                                                    ? e(u, n - 1, a, i, s)
                                                    : r(s, u)
                                                : i || (s[s.length] = u);
                                        }
                                        return s;
                                    };
                                },
                                function (e) {
                                    e.exports = function (e, t) {
                                        for (
                                            var n = -1,
                                                r = t.length,
                                                o = e.length;
                                            ++n < r;

                                        )
                                            e[o + n] = t[n];
                                        return e;
                                    };
                                },
                                function (e, t, n) {
                                    var r = n(4),
                                        o = n(60),
                                        a = n(11),
                                        i = r ? r.isConcatSpreadable : void 0;
                                    e.exports = function (e) {
                                        return (
                                            a(e) || o(e) || !!(i && e && e[i])
                                        );
                                    };
                                },
                            ],
                            t = {};
                        function n(r) {
                            if (t[r]) return t[r].exports;
                            var o = (t[r] = { id: r, loaded: !1, exports: {} });
                            return (
                                e[r](o, o.exports, n),
                                (o.loaded = !0),
                                o.exports
                            );
                        }
                        (n.n = function (e) {
                            var t =
                                e && e.__esModule
                                    ? function () {
                                          return e.default;
                                      }
                                    : function () {
                                          return e;
                                      };
                            return n.d(t, { a: t }), t;
                        }),
                            (n.d = function (e, t) {
                                for (var r in t)
                                    n.o(t, r) &&
                                        !n.o(e, r) &&
                                        Object.defineProperty(e, r, {
                                            enumerable: !0,
                                            get: t[r],
                                        });
                            }),
                            (n.g = (function () {
                                if ("object" == typeof globalThis)
                                    return globalThis;
                                try {
                                    return (
                                        this || new Function("return this")()
                                    );
                                } catch (e) {
                                    if ("object" == typeof window)
                                        return window;
                                }
                            })()),
                            (n.o = function (e, t) {
                                return Object.prototype.hasOwnProperty.call(
                                    e,
                                    t
                                );
                            }),
                            (n.r = function (e) {
                                "undefined" != typeof Symbol &&
                                    Symbol.toStringTag &&
                                    Object.defineProperty(
                                        e,
                                        Symbol.toStringTag,
                                        { value: "Module" }
                                    ),
                                    Object.defineProperty(e, "__esModule", {
                                        value: !0,
                                    });
                            }),
                            (n.nmd = function (e) {
                                return (
                                    (e.paths = []),
                                    e.children || (e.children = []),
                                    e
                                );
                            });
                        var r = {};
                        return (
                            (function () {
                                "use strict";
                                n.r(r),
                                    n.d(r, {
                                        default: function () {
                                            return fi;
                                        },
                                    });
                                var e = {};
                                n.r(e),
                                    n.d(e, {
                                        additionalData: function () {
                                            return Pr;
                                        },
                                        alongRouteSearch: function () {
                                            return Kr;
                                        },
                                        autocomplete: function () {
                                            return Fo;
                                        },
                                        categorySearch: function () {
                                            return mo;
                                        },
                                        crossStreetLookup: function () {
                                            return na;
                                        },
                                        evChargingStationsAvailability:
                                            function () {
                                                return wo;
                                            },
                                        fuzzySearch: function () {
                                            return Oo;
                                        },
                                        geocode: function () {
                                            return ta;
                                        },
                                        geometrySearch: function () {
                                            return So;
                                        },
                                        nearbySearch: function () {
                                            return Eo;
                                        },
                                        placeById: function () {
                                            return Io;
                                        },
                                        poiCategories: function () {
                                            return Ao;
                                        },
                                        poiDetails: function () {
                                            return Co;
                                        },
                                        poiPhotos: function () {
                                            return Ro;
                                        },
                                        poiSearch: function () {
                                            return Vo;
                                        },
                                        reverseGeocode: function () {
                                            return Xo;
                                        },
                                        structuredGeocode: function () {
                                            return aa;
                                        },
                                    });
                                var t = {};
                                n.r(t),
                                    n.d(t, {
                                        calculateReachableRange: function () {
                                            return da;
                                        },
                                        calculateRoute: function () {
                                            return _a;
                                        },
                                        longDistanceEVRouting: function () {
                                            return Sa;
                                        },
                                        matrixRouting: function () {
                                            return ja;
                                        },
                                    });
                                var o = {};
                                n.r(o),
                                    n.d(o, {
                                        incidentDetails: function () {
                                            return Za;
                                        },
                                        incidentDetailsV5: function () {
                                            return Qa;
                                        },
                                        incidentViewport: function () {
                                            return ka;
                                        },
                                        trafficFlowSegmentData: function () {
                                            return Ma;
                                        },
                                    });
                                var a = {};
                                n.r(a),
                                    n.d(a, {
                                        copyrights: function () {
                                            return ri;
                                        },
                                        copyrightsCaption: function () {
                                            return ai;
                                        },
                                        copyrightsCaptionV2: function () {
                                            return li;
                                        },
                                        copyrightsV2: function () {
                                            return si;
                                        },
                                        staticImage: function () {
                                            return ti;
                                        },
                                    });
                                var i = n(1),
                                    s = n.n(i);
                                const c =
                                        s()["analytics.header.sdkName"] +
                                        "/" +
                                        s()["sdk.version"],
                                    l = s()["analytics.header.name"],
                                    u = () => (
                                        (n.g.__tomtomAnalyticsInfo_ = n.g
                                            .__tomtomAnalyticsInfo_
                                            ? n.g.__tomtomAnalyticsInfo_
                                            : {}),
                                        n.g.__tomtomAnalyticsInfo_
                                    ),
                                    p = () => {
                                        const e =
                                            void 0 !== u().productInfo
                                                ? " " + u().productInfo
                                                : "";
                                        return c + e;
                                    },
                                    d = () => {
                                        const e = {};
                                        return (e[l] = p()), e;
                                    },
                                    f = "EXTENDED_SEARCH",
                                    h = "MAP",
                                    y = "ROUTING",
                                    v = "SEARCH",
                                    g = "TRAFFIC_FLOW",
                                    m = "TRAFFIC_INCIDENTS";
                                function b(e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var r = Object.getOwnPropertySymbols(e);
                                        t &&
                                            (r = r.filter(function (t) {
                                                return Object.getOwnPropertyDescriptor(
                                                    e,
                                                    t
                                                ).enumerable;
                                            })),
                                            n.push.apply(n, r);
                                    }
                                    return n;
                                }
                                function w(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n =
                                            null != arguments[t]
                                                ? arguments[t]
                                                : {};
                                        t % 2
                                            ? b(Object(n), !0).forEach(
                                                  function (t) {
                                                      _(e, t, n[t]);
                                                  }
                                              )
                                            : Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(
                                                  e,
                                                  Object.getOwnPropertyDescriptors(
                                                      n
                                                  )
                                              )
                                            : b(Object(n)).forEach(function (
                                                  t
                                              ) {
                                                  Object.defineProperty(
                                                      e,
                                                      t,
                                                      Object.getOwnPropertyDescriptor(
                                                          n,
                                                          t
                                                      )
                                                  );
                                              });
                                    }
                                    return e;
                                }
                                function _(e, t, n) {
                                    return (
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: n,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = n),
                                        e
                                    );
                                }
                                function O(e) {
                                    return "number" == typeof e && isFinite(e);
                                }
                                function P(e) {
                                    return (
                                        null != e &&
                                        !(function (e) {
                                            return e != e;
                                        })(e)
                                    );
                                }
                                function S(e, t) {
                                    for (const n in e)
                                        Object.prototype.hasOwnProperty.call(
                                            e,
                                            n
                                        ) &&
                                            (Array.isArray(e[n])
                                                ? (t[n] = e[n].slice(0))
                                                : "object" == typeof e[n]
                                                ? ((t[n] = {}), S(e[n], t[n]))
                                                : (t[n] = e[n]));
                                }
                                function x(e, t, n) {
                                    var r;
                                    e[t] = void 0 === (r = e[t]) ? {} : r;
                                    for (const r in n[t])
                                        Object.prototype.hasOwnProperty.call(
                                            n[t],
                                            r
                                        ) && (e[t][r] = n[t][r]);
                                }
                                function E(e, t) {
                                    for (const n in t)
                                        Object.prototype.hasOwnProperty.call(
                                            t,
                                            n
                                        ) && (e[n] = t[n]);
                                    return e;
                                }
                                function T(e, t, n) {
                                    if (-1 === t.indexOf(e))
                                        throw new TypeError(n);
                                    return e;
                                }
                                function I(e) {
                                    if ("string" != typeof e) return {};
                                    let t = -1;
                                    const n = new RegExp("[a-zA-Z]");
                                    return (function r(o) {
                                        let a = {},
                                            i = "";
                                        for (; ++t < e.length; ) {
                                            const s = e.charAt(t);
                                            switch (s) {
                                                case "}":
                                                    return (
                                                        "" !== i && (a[i] = !0),
                                                        a
                                                    );
                                                case "{":
                                                    "" === i
                                                        ? o
                                                            ? (a = r())
                                                            : r()
                                                        : ((a[i] = r()),
                                                          (i = ""));
                                                    break;
                                                case ",":
                                                    "" !== i && (a[i] = !0),
                                                        (i = "");
                                                    break;
                                                default:
                                                    n.test(s) && (i += s);
                                            }
                                        }
                                        return "" !== i && (a[i] = !0), a;
                                    })(!0);
                                }
                                function j(e) {
                                    const t = {};
                                    return S(e, t), t;
                                }
                                const A =
                                        /(-?\d+(?:\.\d+)?)(?:\s+|\s*,\s*)(-?\d+(?:\.\d+)?)/,
                                    k =
                                        /circle\((-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\s*,\s*(\d+)\)/;
                                function C(e) {
                                    let t =
                                        arguments.length > 1 &&
                                        void 0 !== arguments[1]
                                            ? arguments[1]
                                            : {};
                                    const n = w({}, t);
                                    for (const t in e)
                                        Object.prototype.hasOwnProperty.call(
                                            e,
                                            t
                                        ) && x(n, t, e);
                                    return n;
                                }
                                var L = n(2),
                                    R = n.n(L),
                                    D = n(10),
                                    V = n.n(D),
                                    M = n(13),
                                    F = n.n(M),
                                    U = n(14),
                                    N = n.n(U);
                                const B = {
                                        "af-ZA": {
                                            synonyms: {
                                                af: null,
                                                afr: null,
                                                "af-za": null,
                                                af_za: null,
                                                afrikaans: null,
                                            },
                                            label: "Afrikaans",
                                        },
                                        ar: {
                                            synonyms: {
                                                ar: null,
                                                ara: null,
                                                "ar-ar": null,
                                                ar_ar: null,
                                                arabic: null,
                                            },
                                            label: "Arabic",
                                        },
                                        "bg-BG": {
                                            synonyms: {
                                                bg: null,
                                                bul: null,
                                                "bg-bg": null,
                                                bg_bg: null,
                                                bulgarian: null,
                                            },
                                            label: "Bulgarian",
                                        },
                                        "ca-ES": {
                                            synonyms: {
                                                ca: null,
                                                cat: null,
                                                "ca-fr": null,
                                                ca_fr: null,
                                                "ca-es": null,
                                                ca_es: null,
                                                catalan: null,
                                            },
                                            label: "Catalan",
                                        },
                                        "zh-CN": {
                                            synonyms: {
                                                "zh-cn": null,
                                                zh_cn: null,
                                            },
                                            label: "Chinese (PRC)",
                                        },
                                        "zh-TW": {
                                            synonyms: {
                                                zh: null,
                                                chi: null,
                                                "zh-tw": null,
                                                zh_tw: null,
                                                chinese: null,
                                            },
                                            label: "Chinese (Taiwan)",
                                        },
                                        "cs-CZ": {
                                            synonyms: {
                                                cs: null,
                                                cz: null,
                                                cze: null,
                                                "cs-cz": null,
                                                cs_cz: null,
                                                czech: null,
                                            },
                                            label: "Czech",
                                        },
                                        "da-DK": {
                                            synonyms: {
                                                da: null,
                                                dan: null,
                                                "da-dk": null,
                                                da_dk: null,
                                                danish: null,
                                            },
                                            label: "Danish",
                                        },
                                        "nl-BE": {
                                            synonyms: {
                                                "nl-be": null,
                                                nl_be: null,
                                                "dutch belgium": null,
                                            },
                                            label: "Dutch (Belgium)",
                                        },
                                        "nl-NL": {
                                            synonyms: {
                                                nl: null,
                                                dut: null,
                                                "nl-nl": null,
                                                nl_nl: null,
                                                dutch: null,
                                            },
                                            label: "Dutch",
                                        },
                                        "en-AU": {
                                            synonyms: {
                                                aue: null,
                                                aus: null,
                                                "en-au": null,
                                                en_au: null,
                                                "english au": null,
                                            },
                                            label: "English (Australia)",
                                        },
                                        "en-GB": {
                                            synonyms: {
                                                en: null,
                                                eng: null,
                                                "en-gb": null,
                                                en_gb: null,
                                                english: null,
                                                default: null,
                                            },
                                            label: "English (Great Britain)",
                                        },
                                        "en-NZ": {
                                            synonyms: {
                                                "en-nz": null,
                                                en_nz: null,
                                                "english new zealand": null,
                                            },
                                            label: "English (New Zealand)",
                                        },
                                        "en-US": {
                                            synonyms: {
                                                us: null,
                                                ame: null,
                                                "en-us": null,
                                                en_us: null,
                                                "english us": null,
                                            },
                                            label: "English (US)",
                                        },
                                        "et-EE": {
                                            synonyms: {
                                                "et-ee": null,
                                                et_ee: null,
                                                estonian: null,
                                            },
                                            label: "Estonian",
                                        },
                                        "eu-ES": {
                                            synonyms: {
                                                "eu-es": null,
                                                eu_es: null,
                                                basque: null,
                                            },
                                            label: "Basque (Spain)",
                                        },
                                        "fi-FI": {
                                            synonyms: {
                                                fi: null,
                                                fin: null,
                                                "fi-fi": null,
                                                fi_fi: null,
                                                finnish: null,
                                            },
                                            label: "Finnish",
                                        },
                                        "fr-CA": {
                                            synonyms: {
                                                "fr-ca": null,
                                                fr_ca: null,
                                                "french canadian": null,
                                            },
                                            label: "French (Canadian)",
                                        },
                                        "fr-FR": {
                                            synonyms: {
                                                fr: null,
                                                fre: null,
                                                "fr-fr": null,
                                                fr_fr: null,
                                                french: null,
                                            },
                                            label: "French",
                                        },
                                        "de-DE": {
                                            synonyms: {
                                                de: null,
                                                ger: null,
                                                "de-de": null,
                                                de_de: null,
                                                german: null,
                                            },
                                            label: "German",
                                        },
                                        "el-GR": {
                                            synonyms: {
                                                el: null,
                                                gre: null,
                                                "el-gr": null,
                                                el_gr: null,
                                                greek: null,
                                            },
                                            label: "Greek",
                                        },
                                        "gl-ES": {
                                            synonyms: {
                                                "gl-es": null,
                                                gl_es: null,
                                                galician: null,
                                            },
                                            label: "Galician (Spain)",
                                        },
                                        "he-IL": {
                                            synonyms: {
                                                "he-il": null,
                                                he_il: null,
                                                hebrew: null,
                                            },
                                            label: "Hebrew (Israel)",
                                        },
                                        "hr-HR": {
                                            synonyms: {
                                                hr: null,
                                                "hr-hr": null,
                                                hr_hr: null,
                                                croatian: null,
                                            },
                                            label: "Croatian",
                                        },
                                        "hu-HU": {
                                            synonyms: {
                                                hu: null,
                                                hun: null,
                                                "hu-hu": null,
                                                hu_hu: null,
                                                hungarian: null,
                                            },
                                            label: "Hungarian",
                                        },
                                        "id-ID": {
                                            synonyms: {
                                                id: null,
                                                ind: null,
                                                "id-id": null,
                                                id_id: null,
                                                indonesian: null,
                                            },
                                            label: "Indonesian",
                                        },
                                        "it-IT": {
                                            synonyms: {
                                                it: null,
                                                ita: null,
                                                "it-it": null,
                                                it_it: null,
                                                italian: null,
                                            },
                                            label: "Italian",
                                        },
                                        "kk-KZ": {
                                            synonyms: {
                                                "kk-kz": null,
                                                kk_kz: null,
                                                kazakh: null,
                                            },
                                            label: "Kazakh (Kazakhstan)",
                                        },
                                        "lv-LV": {
                                            synonyms: {
                                                lt: null,
                                                "lv-lv": null,
                                                lv_lv: null,
                                                latvian: null,
                                            },
                                            label: "Latvian",
                                        },
                                        "lt-LT": {
                                            synonyms: {
                                                lt: null,
                                                lit: null,
                                                "lt-lt": null,
                                                lt_lt: null,
                                                lithuanian: null,
                                            },
                                            label: "Lithuanian",
                                        },
                                        "ms-MY": {
                                            synonyms: {
                                                ms: null,
                                                mal: null,
                                                "ms-my": null,
                                                ms_my: null,
                                                malay: null,
                                            },
                                            label: "Malay",
                                        },
                                        "no-NO": {
                                            synonyms: {
                                                no: null,
                                                nb: null,
                                                nor: null,
                                                "nb-no": null,
                                                nb_no: null,
                                                "no-no": null,
                                                no_no: null,
                                                norwegian: null,
                                            },
                                            label: "Norwegian",
                                        },
                                        "pl-PL": {
                                            synonyms: {
                                                pl: null,
                                                pol: null,
                                                "pl-pl": null,
                                                pl_pl: null,
                                                polish: null,
                                            },
                                            label: "Polish",
                                        },
                                        "ro-RO": {
                                            synonyms: {
                                                "ro-ro": null,
                                                ro_ro: null,
                                                romanian: null,
                                            },
                                            label: "Romanian",
                                        },
                                        "ru-RU": {
                                            synonyms: {
                                                ru: null,
                                                rus: null,
                                                "ru-ru": null,
                                                ru_ru: null,
                                                russian: null,
                                            },
                                            label: "Russian",
                                        },
                                        "sr-RS": {
                                            synonyms: {
                                                "sr-rs": null,
                                                sr_rs: null,
                                                serbian: null,
                                            },
                                            label: "Serbian",
                                        },
                                        "sk-SK": {
                                            synonyms: {
                                                sk: null,
                                                slo: null,
                                                "sk-sk": null,
                                                sk_sk: null,
                                                slovak: null,
                                            },
                                            label: "Slovak",
                                        },
                                        "sl-SI": {
                                            synonyms: {
                                                sl: null,
                                                slv: null,
                                                "sl-si": null,
                                                sl_si: null,
                                                slovenian: null,
                                            },
                                            label: "Slovenian",
                                        },
                                        "es-ES": {
                                            synonyms: {
                                                es: null,
                                                spa: null,
                                                "es-es": null,
                                                es_es: null,
                                                spanish: null,
                                            },
                                            label: "Spanish",
                                        },
                                        "es-419": {
                                            synonyms: {
                                                "es-419": null,
                                                es_419: null,
                                                "latin america spanish": null,
                                            },
                                            label: "Latin American Spanish",
                                        },
                                        "sv-SE": {
                                            synonyms: {
                                                sv: null,
                                                swe: null,
                                                "sv-se": null,
                                                sv_se: null,
                                                swedish: null,
                                            },
                                            label: "Swedish",
                                        },
                                        "th-TH": {
                                            synonyms: {
                                                th: null,
                                                tha: null,
                                                "th-th": null,
                                                th_th: null,
                                                thai: null,
                                            },
                                            label: "Thai",
                                        },
                                        "tr-TR": {
                                            synonyms: {
                                                tr: null,
                                                tur: null,
                                                "tr-tr": null,
                                                tr_tr: null,
                                                turkish: null,
                                            },
                                            label: "Turkish",
                                        },
                                        "uk-UA": {
                                            synonyms: {
                                                "uk-ua": null,
                                                uk_ua: null,
                                                ukrainian: null,
                                            },
                                            label: "Ukrainian",
                                        },
                                        "vi-VN": {
                                            synonyms: {
                                                "vi-vn": null,
                                                vi_vn: null,
                                                vietnamese: null,
                                            },
                                            label: "Vietnamese (Viet Nam)",
                                        },
                                        NGT: {
                                            synonyms: { ngt: null },
                                            label: "Neutral Ground Truth",
                                        },
                                        "NGT-Latn": {
                                            synonyms: { "ngt-latn": null },
                                            label: "Neutral Ground Truth - Latin exonyms",
                                        },
                                        "en-CA": {
                                            synonyms: {
                                                "en-ca": null,
                                                en_ca: null,
                                                "english canadian": null,
                                            },
                                            label: "English (Canada)",
                                        },
                                        "ko-KR": {
                                            synonyms: {
                                                ko: null,
                                                kor: null,
                                                "ko-kr": null,
                                                ko_kr: null,
                                                korean: null,
                                            },
                                            label: "Korean",
                                        },
                                        "nb-NO": {
                                            synonyms: {
                                                nb: null,
                                                nor: null,
                                                "nb-no": null,
                                                nb_no: null,
                                                norwegian: null,
                                            },
                                            label: "Norwegian",
                                        },
                                        "pt-BR": {
                                            synonyms: {
                                                br: null,
                                                pob: null,
                                                "pt-br": null,
                                                pt_br: null,
                                                "portuguese br": null,
                                            },
                                            label: "Portuguese (BR)",
                                        },
                                        "pt-PT": {
                                            synonyms: {
                                                pt: null,
                                                por: null,
                                                "pt-pt": null,
                                                pt_pt: null,
                                                portuguese: null,
                                            },
                                            label: "Portuguese",
                                        },
                                        "ru-Latn-RU": {
                                            synonyms: {
                                                "ru-latn-ru": null,
                                                ru_latn_ru: null,
                                            },
                                            label: "Russian (Latin)",
                                        },
                                        "ru-Cyrl-RU": {
                                            synonyms: {
                                                "ru-cyrl-ru": null,
                                                ru_cyrl_ru: null,
                                            },
                                            label: "Russian (Cyrlic)",
                                        },
                                        "es-MX": {
                                            synonyms: {
                                                mx: null,
                                                spm: null,
                                                "es-mx": null,
                                                es_mx: null,
                                                "spanish mx": null,
                                            },
                                            label: "Spanish (Mexico)",
                                        },
                                        defaultValue: {
                                            value: "en-GB",
                                            label: "English (Great Britain)",
                                        },
                                    },
                                    W = {
                                        ar: B.ar,
                                        ca: B["ca-ES"],
                                        cs: B["cs-CZ"],
                                        da: B["da-DK"],
                                        de: B["de-DE"],
                                        el: B["el-GR"],
                                        en: {
                                            synonyms: {
                                                en: null,
                                                eng: null,
                                                "en-gb": null,
                                                en_gb: null,
                                                english: null,
                                                us: null,
                                                ame: null,
                                                "en-us": null,
                                                en_us: null,
                                                "english us": null,
                                                default: null,
                                            },
                                            label: "English",
                                        },
                                        es: {
                                            synonyms: {
                                                es: null,
                                                spa: null,
                                                "es-es": null,
                                                es_es: null,
                                                spanish: null,
                                                mx: null,
                                                spm: null,
                                                "es-mx": null,
                                                es_mx: null,
                                                "spanish mx": null,
                                            },
                                            label: "Spanish",
                                        },
                                        et: B["et-EE"],
                                        fi: B["fi-FI"],
                                        fr: B["fr-FR"],
                                        he: B["he-IL"],
                                        hu: B["hu-HU"],
                                        id: B["id-ID"],
                                        it: B["it-IT"],
                                        lt: B["lt-LT"],
                                        lv: B["lv-LV"],
                                        nb: B["nb-NO"],
                                        nl: B["nl-NL"],
                                        no: B["no-NO"],
                                        pl: B["pl-PL"],
                                        pt: {
                                            synonyms: {
                                                br: null,
                                                por: null,
                                                "pt-br": null,
                                                pt_br: null,
                                                portuguese: null,
                                                pt: null,
                                                pob: null,
                                                "pt-pt": null,
                                                pt_pt: null,
                                                "portuguese br": null,
                                            },
                                            label: "Portuguese",
                                        },
                                        ro: B["ro-RO"],
                                        ru: B["ru-RU"],
                                        sk: B["sk-SK"],
                                        sv: B["sv-SE"],
                                        th: B["th-TH"],
                                        tr: B["tr-TR"],
                                        zh: B["zh-TW"],
                                        defaultValue: {
                                            value: "en",
                                            label: "English (Great Britain)",
                                        },
                                    },
                                    q = {
                                        ar: B.ar,
                                        "af-ZA": B["af-ZA"],
                                        "bg-BG": B["bg-BG"],
                                        "zh-TW": B["zh-TW"],
                                        "cs-CZ": B["cs-CZ"],
                                        "da-DK": B["da-DK"],
                                        "nl-NL": B["nl-NL"],
                                        "en-GB": B["en-GB"],
                                        "en-US": B["en-US"],
                                        "fi-FI": B["fi-FI"],
                                        "fr-FR": B["fr-FR"],
                                        "de-DE": B["de-DE"],
                                        "el-GR": B["el-GR"],
                                        "hu-HU": B["hu-HU"],
                                        "id-ID": B["id-ID"],
                                        "it-IT": B["it-IT"],
                                        "ko-KR": B["ko-KR"],
                                        "lt-LT": B["lt-LT"],
                                        "ms-MY": B["ms-MY"],
                                        "nb-NO": B["nb-NO"],
                                        "pl-PL": B["pl-PL"],
                                        "pt-BR": B["pt-BR"],
                                        "pt-PT": B["pt-PT"],
                                        "ru-RU": B["ru-RU"],
                                        "sk-SK": B["sk-SK"],
                                        "sl-SI": B["sl-SI"],
                                        "es-ES": B["es-ES"],
                                        "es-MX": B["es-MX"],
                                        "sv-SE": B["sv-SE"],
                                        "th-TH": B["th-TH"],
                                        "tr-TR": B["tr-TR"],
                                        defaultValue: B.defaultValue,
                                    },
                                    z = {
                                        NGT: B.NGT,
                                        "NGT-Latn": B["NGT-Latn"],
                                        "af-ZA": B["af-ZA"],
                                        ar: B.ar,
                                        "eu-ES": B["eu-ES"],
                                        "bg-BG": B["bg-BG"],
                                        "ca-ES": B["ca-ES"],
                                        "zh-CN": B["zh-CN"],
                                        "zh-TW": B["zh-TW"],
                                        "cs-CZ": B["cs-CZ"],
                                        "da-DK": B["da-DK"],
                                        "nl-BE": B["nl-BE"],
                                        "nl-NL": B["nl-NL"],
                                        "en-AU": B["en-AU"],
                                        "en-NZ": B["en-NZ"],
                                        "en-GB": B["en-GB"],
                                        "en-US": B["en-US"],
                                        "et-EE": B["et-EE"],
                                        "fi-FI": B["fi-FI"],
                                        "fr-CA": B["fr-CA"],
                                        "fr-FR": B["fr-FR"],
                                        "gl-ES": B["gl-ES"],
                                        "de-DE": B["de-DE"],
                                        "el-GR": B["el-GR"],
                                        "hr-HR": B["hr-HR"],
                                        "he-IL": B["he-IL"],
                                        "hu-HU": B["hu-HU"],
                                        "id-ID": B["id-ID"],
                                        "it-IT": B["it-IT"],
                                        "kk-KZ": B["kk-KZ"],
                                        "lv-LV": B["lv-LV"],
                                        "lt-LT": B["lt-LT"],
                                        "ms-MY": B["ms-MY"],
                                        "no-NO": B["no-NO"],
                                        "nb-NO": B["nb-NO"],
                                        "pl-PL": B["pl-PL"],
                                        "pt-BR": B["pt-BR"],
                                        "pt-PT": B["pt-PT"],
                                        "ro-RO": B["ro-RO"],
                                        "ru-RU": B["ru-RU"],
                                        "ru-Latn-RU": B["ru-Latn-RU"],
                                        "ru-Cyrl-RU": B["ru-Cyrl-RU"],
                                        "sr-RS": B["sr-RS"],
                                        "sk-SK": B["sk-SK"],
                                        "sl-SI": B["sl-SI"],
                                        "es-ES": B["es-ES"],
                                        "es-419": B["es-419"],
                                        "sv-SE": B["sv-SE"],
                                        "th-TH": B["th-TH"],
                                        "tr-TR": B["tr-TR"],
                                        "uk-UA": B["uk-UA"],
                                        "vi-VN": B["vi-VN"],
                                        defaultValue: B.defaultValue,
                                    },
                                    G = {
                                        ar: B.ar,
                                        "ca-ES": B["ca-ES"],
                                        "cs-CZ": B["cs-CZ"],
                                        "da-DK": B["da-DK"],
                                        "de-DE": B["de-DE"],
                                        "el-GR": B["el-GR"],
                                        "en-GB": B["en-GB"],
                                        "en-US": B["en-US"],
                                        "es-ES": B["es-ES"],
                                        "et-EE": B["et-EE"],
                                        "fi-FI": B["fi-FI"],
                                        "fr-FR": B["fr-FR"],
                                        "he-IL": B["he-IL"],
                                        "hu-HU": B["hu-HU"],
                                        "id-ID": B["id-ID"],
                                        "it-IT": B["it-IT"],
                                        "lt-LT": B["lt-LT"],
                                        "lv-LV": B["lv-LV"],
                                        "nb-NO": B["nb-NO"],
                                        "nl-NL": B["nl-NL"],
                                        "pl-PL": B["pl-PL"],
                                        "pt-PT": B["pt-PT"],
                                        "ro-RO": B["ro-RO"],
                                        "ru-RU": B["ru-RU"],
                                        "sk-SK": B["sk-SK"],
                                        "sv-SE": B["sv-SE"],
                                        "th-TH": B["th-TH"],
                                        "tr-TR": B["tr-TR"],
                                        "zh-TW": B["zh-TW"],
                                        defaultValue: B.defaultValue,
                                    };
                                function H(e) {
                                    if (!V()(e) && !R()(e))
                                        throw new TypeError(
                                            "Unsupported key type",
                                            e
                                        );
                                    return e;
                                }
                                function K(e) {
                                    const t = parseFloat(e);
                                    if (!isFinite(t))
                                        throw new TypeError(
                                            "a number is expected, but " +
                                                e +
                                                " [" +
                                                typeof e +
                                                "] given"
                                        );
                                    return t;
                                }
                                function Z(e, t) {
                                    return (n) =>
                                        T(
                                            n,
                                            e,
                                            "Supported " +
                                                t +
                                                " is expected (one of: " +
                                                e +
                                                "), but " +
                                                n +
                                                " [" +
                                                typeof n +
                                                "] was given."
                                        );
                                }
                                const $ = [
                                        "StandardHouseholdCountrySpecific",
                                        "IEC62196Type2CableAttached",
                                        "IEC60309AC1PhaseBlue",
                                        "IEC60309AC3PhaseRed",
                                        "IEC62196Type2Outlet",
                                        "IEC62196Type1CCS",
                                        "IEC62196Type2CCS",
                                        "IEC60309DCWhite",
                                        "IEC62196Type1",
                                        "IEC62196Type3",
                                        "GBT20234Part2",
                                        "GBT20234Part3",
                                        "Chademo",
                                        "Tesla",
                                    ],
                                    Q = [
                                        "Small_Paddle_Inductive",
                                        "Large_Paddle_Inductive",
                                        "IEC_60309_1_Phase",
                                        "IEC_60309_3_Phase",
                                        "IEC_62196_Type_1_Outlet",
                                        "IEC_62196_Type_2_Outlet",
                                        "IEC_62196_Type_3_Outlet",
                                        "IEC_62196_Type_1_Connector_Cable_Attached",
                                        "IEC_62196_Type_2_Connector_Cable_Attached",
                                        "IEC_62196_Type_3_Connector_Cable_Attached",
                                        "Combo_to_IEC_62196_Type_1_Base",
                                        "Combo_to_IEC_62196_Type_2_Base",
                                        "Type_E_French_Standard_CEE_7_5",
                                        "Type_F_Schuko_CEE_7_4",
                                        "Type_G_British_Standard_BS_1363",
                                        "Type_J_Swiss_Standard_SEV_1011",
                                        "China_GB_Part_2",
                                        "China_GB_Part_3",
                                        "IEC_309_DC_Plug",
                                        "AVCON_Connector",
                                        "Tesla_Connector",
                                        "NEMA_5_20",
                                        "CHAdeMO",
                                        "SAE_J1772",
                                        "TEPCO",
                                        "Better_Place_Socket",
                                        "Marechal_Socket",
                                        "Standard_Household_Country_Specific",
                                    ],
                                    X = [
                                        "Battery_Exchange",
                                        "Charge_100_to_120V_1_Phase_at_8A",
                                        "Charge_100_to_120V_1_Phase_at_10A",
                                        "Charge_100_to_120V_1_Phase_at_12A",
                                        "Charge_100_to_120V_1_Phase_at_13A",
                                        "Charge_100_to_120V_1_Phase_at_16A",
                                        "Charge_100_to_120V_1_Phase_at_32A",
                                        "Charge_200_to_240V_1_Phase_at_8A",
                                        "Charge_200_to_240V_1_Phase_at_10A",
                                        "Charge_200_to_240V_1_Phase_at_12A",
                                        "Charge_200_to_240V_1_Phase_at_16A",
                                        "Charge_200_to_240V_1_Phase_at_20A",
                                        "Charge_200_to_240V_1_Phase_at_32A",
                                        "Charge_200_to_240V_1_Phase_above_32A",
                                        "Charge_200_to_240V_3_Phase_at_16A",
                                        "Charge_200_to_240V_3_Phase_at_32A",
                                        "Charge_380_to_480V_3_Phase_at_16A",
                                        "Charge_380_to_480V_3_Phase_at_32A",
                                        "Charge_380_to_480V_3_Phase_at_63A",
                                        "Charge_50_to_500V_Direct_Current_at_62A_25kW",
                                        "Charge_50_to_500V_Direct_Current_at_125A_50kW",
                                        "Charge_200_to_450V_Direct_Current_at_200A_90kW",
                                        "Charge_200_to_480V_Direct_Current_at_255A_120kW",
                                        "Charge_Direct_Current_at_20kW",
                                        "Charge_Direct_Current_at_50kW",
                                        "Charge_Direct_Current_above_50kW",
                                    ],
                                    J = [
                                        "NGT",
                                        "NGT-Latn",
                                        "ar",
                                        "bg-BG",
                                        "zh-TW",
                                        "cs-CZ",
                                        "da-DK",
                                        "nl-NL",
                                        "en-AU",
                                        "en-CA",
                                        "en-GB",
                                        "en-NZ",
                                        "en-US",
                                        "fi-FI",
                                        "fr-FR",
                                        "de-DE",
                                        "el-GR",
                                        "hu-HU",
                                        "id-ID",
                                        "it-IT",
                                        "ko-KR",
                                        "lt-LT",
                                        "ms-MY",
                                        "nb-NO",
                                        "pl-PL",
                                        "pt-BR",
                                        "pt-PT",
                                        "ru-RU",
                                        "ru-Latn-RU",
                                        "ru-Cyrl-RU",
                                        "sk-SK",
                                        "sl-SI",
                                        "es-ES",
                                        "es-MX",
                                        "sv-SE",
                                        "th-TH",
                                        "tr-TR",
                                    ],
                                    Y = [
                                        "Petrol",
                                        "LPG",
                                        "Diesel",
                                        "Biodiesel",
                                        "DieselForCommercialVehicles",
                                        "E85",
                                        "LNG",
                                        "CNG",
                                        "Hydrogen",
                                        "AdBlue",
                                    ],
                                    ee =
                                        "\n    {\n        incidents {\n            type,\n            geometry {\n                type,\n                coordinates\n            },\n            properties {\n                id,\n                iconCategory,\n                magnitudeOfDelay,\n                events {\n                    description,\n                    code,\n                    iconCategory\n                },\n                startTime,\n                endTime,\n                from,\n                to,\n                length,\n                delay,\n                roadNumbers,\n                aci {\n                    probabilityOfOccurrence,\n                    numberOfReports,\n                    lastReportTime\n                }\n            }\n        }\n    }";
                                function te(e) {
                                    return e
                                        .toString()
                                        .match(
                                            /(\d\d\d\d)(-)?(\d\d)(-)?(\d\d)(T)?(\d\d)(:)?(\d\d)(:)?(\d\d)(\.\d+)?(Z|([+-])(\d\d)(:)?(\d\d))/
                                        );
                                }
                                function ne(e, t, n) {
                                    return isFinite(e) && e >= t && e <= n;
                                }
                                function re(e) {
                                    return (
                                        e.constructor
                                            .toString()
                                            .indexOf("Array") < 0
                                    );
                                }
                                function oe(e, t) {
                                    if (e) throw new TypeError(t);
                                }
                                function ae(e) {
                                    const t = parseFloat(e);
                                    if (!ne(t, -180, 180))
                                        throw new TypeError(
                                            "an longitude <-180,180> is expected, but " +
                                                e +
                                                " [" +
                                                typeof e +
                                                "] given"
                                        );
                                    return t;
                                }
                                function ie(e) {
                                    var t;
                                    return (
                                        oe(
                                            ((t = e),
                                            !(
                                                Object.prototype.hasOwnProperty.call(
                                                    t,
                                                    "chargingConnections"
                                                ) &&
                                                Object.prototype.hasOwnProperty.call(
                                                    t,
                                                    "chargingCurve"
                                                )
                                            )),
                                            "a chargingMode is expected, but " +
                                                e +
                                                " [" +
                                                typeof e +
                                                "] given"
                                        ),
                                        se(e.chargingCurve),
                                        de(e.chargingConnections),
                                        e
                                    );
                                }
                                function se(e) {
                                    if (e.length > 10)
                                        throw new Error(
                                            "Given chargingCurve array contains more than 10 elements."
                                        );
                                    return (
                                        e.forEach((e) => {
                                            ce(e);
                                        }),
                                        e
                                    );
                                }
                                function ce(e) {
                                    var t;
                                    return (
                                        oe(
                                            ((t = e),
                                            !(
                                                Object.prototype.hasOwnProperty.call(
                                                    t,
                                                    "chargeInkWh"
                                                ) &&
                                                Object.prototype.hasOwnProperty.call(
                                                    t,
                                                    "timeToChargeInSeconds"
                                                )
                                            )),
                                            "a chargingCurveSupportPoint is expected, but " +
                                                e +
                                                " [" +
                                                typeof e +
                                                "] given"
                                        ),
                                        oe(
                                            !ne(
                                                e.chargeInkWh,
                                                0,
                                                Number.MAX_VALUE
                                            ),
                                            "a chargeInkWh is expected, but " +
                                                e.chargeInkWh +
                                                " [" +
                                                typeof e.chargeInkWh +
                                                "] given"
                                        ),
                                        oe(
                                            !ne(
                                                e.timeToChargeInSeconds,
                                                0,
                                                Number.MAX_VALUE
                                            ),
                                            "a timeToChargeInSeconds is expected, but " +
                                                e.timeToChargeInSeconds +
                                                " [" +
                                                typeof e.timeToChargeInSeconds +
                                                "] given"
                                        ),
                                        e
                                    );
                                }
                                function le(e) {
                                    var t;
                                    return (
                                        oe(
                                            ((t = e),
                                            !(
                                                Object.prototype.hasOwnProperty.call(
                                                    t,
                                                    "facilityType"
                                                ) &&
                                                Object.prototype.hasOwnProperty.call(
                                                    t,
                                                    "plugType"
                                                )
                                            )),
                                            "a chargingConnection is expected, but " +
                                                e +
                                                " [" +
                                                typeof e +
                                                "] given"
                                        ),
                                        ue(e.plugType),
                                        pe(e.facilityType),
                                        e
                                    );
                                }
                                function ue(e) {
                                    return T(
                                        e,
                                        Q,
                                        "Plug type is expected to be one of supported values, but " +
                                            e +
                                            " [" +
                                            typeof e +
                                            "] given"
                                    );
                                }
                                function pe(e) {
                                    return T(
                                        e,
                                        X,
                                        "Facility type is expected to be one of supported values, but " +
                                            e +
                                            " [" +
                                            typeof e +
                                            "] given"
                                    );
                                }
                                function de(e) {
                                    if (e.length > 20)
                                        throw new Error(
                                            "Given chargingConnections array contains more than 20 elements."
                                        );
                                    return (
                                        e.forEach((e) => {
                                            le(e);
                                        }),
                                        e
                                    );
                                }
                                function fe(e) {
                                    const t = parseFloat(e);
                                    if (!ne(t, -90, 90))
                                        throw new TypeError(
                                            "an latitude <-90,90> is expected, but " +
                                                e +
                                                " [" +
                                                typeof e +
                                                "] given"
                                        );
                                    return t;
                                }
                                function he(e) {
                                    let t, n;
                                    if (Array.isArray(e)) {
                                        if (
                                            2 !== e.length ||
                                            2 !== e.filter(isFinite).length
                                        )
                                            throw new TypeError(
                                                "Invalid point array in route points"
                                            );
                                        (t = e[1]), (n = e[0]);
                                    } else {
                                        if (
                                            !isFinite(e.lat) ||
                                            (!isFinite(e.lon) &&
                                                !isFinite(e.lng))
                                        )
                                            throw new TypeError(
                                                "Invalid point object in route points"
                                            );
                                        (t = e.lat),
                                            (n =
                                                void 0 !== e.lon
                                                    ? e.lon
                                                    : e.lng);
                                    }
                                    if (
                                        !(
                                            "number" == typeof t ||
                                            t instanceof Number
                                        ) ||
                                        !(
                                            "number" == typeof n ||
                                            n instanceof Number
                                        )
                                    )
                                        throw new TypeError(
                                            "Lat and lon components of point should be finite numbers"
                                        );
                                    ae(n), fe(t);
                                }
                                function ye(e, t) {
                                    for (const n in e)
                                        if (
                                            Object.prototype.hasOwnProperty.call(
                                                e,
                                                n
                                            )
                                        ) {
                                            if (
                                                Object.prototype.hasOwnProperty.call(
                                                    t,
                                                    n
                                                ) &&
                                                Array.isArray(e[n].validators)
                                            )
                                                for (const r of e[n].validators)
                                                    R()(r) && (t[n] = r(t[n]));
                                            if (
                                                !0 === e[n].required &&
                                                !Object.prototype.hasOwnProperty.call(
                                                    t,
                                                    n
                                                )
                                            )
                                                throw new Error(
                                                    "Missing required " + n
                                                );
                                        }
                                }
                                function ve(e, t, n, r) {
                                    if (F()(e) || F()(t))
                                        throw new TypeError(
                                            "Number in interval validator requires min and max value parameters"
                                        );
                                    return function (o) {
                                        const a = parseFloat(o);
                                        if (!ne(a, e, t) || (r && !N()(a)))
                                            throw new TypeError(
                                                n +
                                                    ", but " +
                                                    o +
                                                    " [" +
                                                    typeof o +
                                                    "] given"
                                            );
                                        return a;
                                    };
                                }
                                function ge(e, t, n) {
                                    return ve(e, t, n, !0);
                                }
                                function me(e, t, n) {
                                    if (
                                        (V()(e) && (e = e.split(",")),
                                        Array.isArray(e) && e.length > 0)
                                    ) {
                                        for (let r = 0; r < e.length; r += 1)
                                            T(e[r], n, t);
                                        return e.join(",");
                                    }
                                    throw new TypeError(t);
                                }
                                function be(e, t) {
                                    if (!te(e))
                                        throw new TypeError(
                                            'Invalid "'.concat(
                                                t,
                                                '" parameter value.\n        Valid format: YYYY-MM-DDThh:mm:ss.SSSTZD'
                                            )
                                        );
                                    return e;
                                }
                                function we(e) {
                                    if (
                                        V()(e) &&
                                        /^[a-zA-Z0-9-]{1,100}$/.test(e)
                                    )
                                        return e;
                                    throw new TypeError(
                                        "a string matching regular expression ^[a-zA-Z0-9-]{1,100}$ is expected, but " +
                                            e +
                                            " [" +
                                            typeof e +
                                            "] given"
                                    );
                                }
                                function _e(e) {
                                    return "false" !== e && Boolean(e);
                                }
                                function Oe(e) {
                                    const t = parseFloat(e);
                                    if (!N()(t) || t < 0)
                                        throw new TypeError(
                                            "a natural integer (greater than or equal 0) is expected, but " +
                                                e +
                                                " [" +
                                                typeof e +
                                                "] given"
                                        );
                                    return t;
                                }
                                function Pe(e) {
                                    const t = parseFloat(e);
                                    if (!N()(t) || t <= 0)
                                        throw new TypeError(
                                            "a positive integer (greater than 0) is expected, but " +
                                                e +
                                                " [" +
                                                typeof e +
                                                "] given"
                                        );
                                    return t;
                                }
                                function Se(e) {
                                    const t = parseFloat(e);
                                    if (!N()(t))
                                        throw new TypeError(
                                            "an integer is expected, but " +
                                                e +
                                                " [" +
                                                typeof e +
                                                "] given"
                                        );
                                    return t;
                                }
                                function xe(e) {
                                    return (
                                        oe(
                                            !(function (e) {
                                                return (
                                                    Object.prototype.hasOwnProperty.call(
                                                        e,
                                                        "minLon"
                                                    ) &&
                                                    Object.prototype.hasOwnProperty.call(
                                                        e,
                                                        "maxLon"
                                                    ) &&
                                                    Object.prototype.hasOwnProperty.call(
                                                        e,
                                                        "minLat"
                                                    ) &&
                                                    Object.prototype.hasOwnProperty.call(
                                                        e,
                                                        "maxLat"
                                                    )
                                                );
                                            })(e),
                                            "a bounding box is expected, but " +
                                                e +
                                                " [" +
                                                typeof e +
                                                "] given"
                                        ),
                                        oe(
                                            !ne(e.minLat, -90, 90),
                                            "a bounding box minimal latitude is expected " +
                                                e.minLat +
                                                " [" +
                                                typeof e.minLat +
                                                "] given"
                                        ),
                                        oe(
                                            !ne(e.maxLat, -90, 90),
                                            "a bounding box maximal latitude is expected " +
                                                e.maxLat +
                                                " [" +
                                                typeof e.maxLat +
                                                "] given"
                                        ),
                                        oe(
                                            !ne(e.minLon, -270, 180),
                                            "a bounding box minimal longitude is expected " +
                                                e.minLon +
                                                " [" +
                                                typeof e.minLon +
                                                "] given"
                                        ),
                                        oe(
                                            !ne(e.maxLon, -180, 270),
                                            "a bounding box maximal longitude is expected " +
                                                e.maxLon +
                                                " [" +
                                                typeof e.maxLon +
                                                "] given"
                                        ),
                                        oe(
                                            (function (e) {
                                                return (
                                                    parseFloat(e.maxLat) <=
                                                        parseFloat(e.minLat) ||
                                                    parseFloat(e.maxLon) <=
                                                        parseFloat(e.minLon)
                                                );
                                            })(e),
                                            "a bounding box expected but max <= min"
                                        ),
                                        e
                                    );
                                }
                                function Ee(e, t) {
                                    return ve(
                                        e,
                                        t,
                                        "a number in interval <" +
                                            e +
                                            ", " +
                                            t +
                                            "> is expected"
                                    );
                                }
                                function Te(e, t) {
                                    return ge(
                                        e,
                                        t,
                                        "an integer in interval <" +
                                            e +
                                            ", " +
                                            t +
                                            "> is expected"
                                    );
                                }
                                function Ie(e) {
                                    if (!V()(e))
                                        throw new TypeError(
                                            "a string is expected, but " +
                                                e +
                                                " [" +
                                                typeof e +
                                                "] given"
                                        );
                                    return e;
                                }
                                function je(e) {
                                    return ge(
                                        0,
                                        22,
                                        "zoom level <0, 22> is expected"
                                    )(e);
                                }
                                function Ae(e) {
                                    if (
                                        !V()(e) ||
                                        (3 !== e.length && 2 !== e.length)
                                    )
                                        throw new TypeError(
                                            "a 2 or 3-characters long country name is expected, but " +
                                                e +
                                                " [" +
                                                typeof e +
                                                "] given"
                                        );
                                    return e;
                                }
                                function ke(e) {
                                    const t = Object.keys(z);
                                    if (!V()(e) || t.indexOf(e) < 0)
                                        throw new TypeError(
                                            "One of pre-defined language codes was expected: " +
                                                t +
                                                ", but " +
                                                e +
                                                " [" +
                                                typeof e +
                                                "] given"
                                        );
                                    return e;
                                }
                                function Ce(e) {
                                    oe(
                                        !V()(e) && re(e),
                                        "An array of string country names or string (divided with commas) of country names (two or three-characters long) is expected, but " +
                                            e +
                                            " [" +
                                            typeof e +
                                            "] given"
                                    );
                                    const t = V()(e) ? e : e.join();
                                    return (
                                        oe(
                                            !t.match(
                                                /^([a-zA-z]{2,3},)*[a-zA-z]{2,3}$/
                                            ),
                                            "An array of string country names or string (divided with commas) of country names (two or three-characters long) is expected, but " +
                                                e +
                                                " [" +
                                                typeof e +
                                                "] given"
                                        ),
                                        t
                                    );
                                }
                                function Le(e) {
                                    return me(
                                        e,
                                        "List of pre-defined EV connector names was expected,but " +
                                            e +
                                            " [" +
                                            typeof e +
                                            "] given",
                                        $
                                    );
                                }
                                function Re(e) {
                                    return me(
                                        e,
                                        "List of pre-defined Fuel types names was expected,but " +
                                            e +
                                            " [" +
                                            typeof e +
                                            "] given",
                                        Y
                                    );
                                }
                                function De(e) {
                                    const t = [
                                            "Local",
                                            "International",
                                            "Alternative",
                                        ],
                                        n =
                                            "List of pre-defined mapcode types names was expected,but " +
                                            e +
                                            " [" +
                                            typeof e +
                                            "] given";
                                    if (
                                        (V()(e) && (e = e.split(",")),
                                        Array.isArray(e) && e.length > 0)
                                    ) {
                                        for (let r = 0; r < e.length; r += 1)
                                            T(e[r], t, n);
                                        return e.join(",");
                                    }
                                    throw new TypeError(n);
                                }
                                function Ve(e, t) {
                                    oe(
                                        !V()(t) && re(t),
                                        "An array of string country names or string (divided with commas) of country names (three-characters long) is expected, but " +
                                            t +
                                            " [" +
                                            typeof t +
                                            "] given"
                                    );
                                    const n = V()(t) ? t : t.join();
                                    return (
                                        (e && "" === n) ||
                                            oe(
                                                !n.match(
                                                    /^([a-zA-z]{3},)*[a-zA-z]{3}$/
                                                ),
                                                "An array of string country names or string (divided with commas) of country names (three-characters long) is expected, but " +
                                                    t +
                                                    " [" +
                                                    typeof t +
                                                    "] given"
                                            ),
                                        t
                                    );
                                }
                                function Me(e) {
                                    return (
                                        (function (e) {
                                            if (!V()(e) || !A.test(e))
                                                throw new TypeError(
                                                    "A point is expected, but " +
                                                        e +
                                                        " [" +
                                                        typeof e +
                                                        "] given"
                                                );
                                        })(e),
                                        e
                                    );
                                }
                                function Fe(e) {
                                    return ge(
                                        1,
                                        4,
                                        "Fuzziness level value (a positive integer lower than 5) is expected"
                                    )(e);
                                }
                                function Ue(e) {
                                    return ge(
                                        1,
                                        100,
                                        "Limit value (a positive integer lower than 100) is expected"
                                    )(e);
                                }
                                function Ne(e) {
                                    return ge(
                                        0,
                                        1900,
                                        "Offset an integer value <0, 1900> is expected"
                                    )(e);
                                }
                                function Be(e) {
                                    const t = [
                                        "Country",
                                        "CountrySubdivision",
                                        "CountrySecondarySubdivision",
                                        "CountryTertiarySubdivision",
                                        "Municipality",
                                        "MunicipalitySubdivision",
                                        "Neighbourhood",
                                        "PostalCodeArea",
                                    ];
                                    for (const n of e.split(","))
                                        if (-1 === t.indexOf(n))
                                            throw new TypeError(
                                                "Entity type ("
                                                    .concat(
                                                        t,
                                                        ") is expected, but "
                                                    )
                                                    .concat(e, " [")
                                                    .concat(typeof e, "] given")
                                            );
                                    return e;
                                }
                                function We(e, t) {
                                    return (n) => {
                                        const r =
                                            "Supported " +
                                            t +
                                            " type is expected (array with one of: " +
                                            e +
                                            "), but " +
                                            n +
                                            " [" +
                                            typeof n +
                                            "] given";
                                        if (re(n))
                                            throw new TypeError(
                                                "an array is expected, but " +
                                                    n +
                                                    "  [" +
                                                    typeof n +
                                                    "] given"
                                            );
                                        for (let t = 0; t < n.length; t += 1)
                                            T(n[t], e, r);
                                        return n;
                                    };
                                }
                                function qe(e) {
                                    if (
                                        (oe(
                                            re(e),
                                            "An array of geometry objects is expected, but " +
                                                e +
                                                " [" +
                                                typeof e +
                                                "] given"
                                        ),
                                        !(e.length > 0))
                                    )
                                        throw new TypeError(
                                            "An array of geometry objects is expected, but " +
                                                e +
                                                " [" +
                                                typeof e +
                                                "] given"
                                        );
                                    for (let t = 0; t < e.length; t += 1) {
                                        const n = e[t];
                                        oe(
                                            !(
                                                Object.prototype.hasOwnProperty.call(
                                                    n,
                                                    "type"
                                                ) &&
                                                (Object.prototype.hasOwnProperty.call(
                                                    n,
                                                    "vertices"
                                                ) ||
                                                    (Object.prototype.hasOwnProperty.call(
                                                        n,
                                                        "position"
                                                    ) &&
                                                        Object.prototype.hasOwnProperty.call(
                                                            n,
                                                            "radius"
                                                        )))
                                            ),
                                            "An array of geometry objects is expected, but " +
                                                e +
                                                " [" +
                                                typeof e +
                                                "] given"
                                        );
                                    }
                                    return e;
                                }
                                function ze(e) {
                                    if (
                                        isNaN(e) ||
                                        !N()(e) ||
                                        !(120 === e || (e >= 5 && e <= 60))
                                    )
                                        throw new TypeError(
                                            "Invalid `waitTimeSeconds` parameter value. Must be 120 or an integer between 5 and 60."
                                        );
                                    return e;
                                }
                                function Ge(e) {
                                    return be(e, "clientTime");
                                }
                                var He = n(19),
                                    Ke = n.n(He);
                                class Ze {
                                    constructor() {
                                        let e =
                                            arguments.length > 0 &&
                                            void 0 !== arguments[0]
                                                ? arguments[0]
                                                : {};
                                        this.options = e;
                                    }
                                    convert(e) {
                                        return this._isSinglePoint(e)
                                            ? this._convertPoint(e)
                                            : this._convertToArrayOfPoints(e);
                                    }
                                    _isSinglePoint(e) {
                                        if (Array.isArray(e))
                                            return (
                                                2 === e.length &&
                                                "object" != typeof e[0]
                                            );
                                        if (V()(e)) {
                                            if (e.split(":").length >= 2)
                                                return !1;
                                        }
                                        return !0;
                                    }
                                    _convertToArrayOfPoints(e) {
                                        return V()(e)
                                            ? e
                                                  .split(":")
                                                  .map(
                                                      this._convertPoint.bind(
                                                          this
                                                      )
                                                  )
                                            : e.map(
                                                  this._convertPoint.bind(this)
                                              );
                                    }
                                    _convertPoint(e) {
                                        return Ke()(e, "lat") && Ke()(e, "lon")
                                            ? this._covertToDefaultFormat(
                                                  e.lon,
                                                  e.lat
                                              )
                                            : Ke()(e, "latitude") &&
                                              Ke()(e, "longitude")
                                            ? this._covertToDefaultFormat(
                                                  e.longitude,
                                                  e.latitude
                                              )
                                            : Ke()(e, "x") && Ke()(e, "y")
                                            ? this._covertToDefaultFormat(
                                                  e.x,
                                                  e.y
                                              )
                                            : Array.isArray(e) && 2 === e.length
                                            ? this.options.isLatLon
                                                ? this._covertToDefaultFormat(
                                                      e[1],
                                                      e[0]
                                                  )
                                                : this._covertToDefaultFormat(
                                                      e[0],
                                                      e[1]
                                                  )
                                            : V()(e)
                                            ? this._convertStringPoint(e)
                                            : e;
                                    }
                                    _convertStringPoint(e) {
                                        const t = e.split(",");
                                        if (
                                            !/^-?\d+(\.\d+)?,-?\d+(\.\d+)?$/.test(
                                                e
                                            ) ||
                                            2 !== t.length
                                        )
                                            throw new Error(
                                                "The point is not valid: " + e
                                            );
                                        return this.options.isLatLon
                                            ? this._covertToDefaultFormat(
                                                  t[1],
                                                  t[0]
                                              )
                                            : this._covertToDefaultFormat(
                                                  t[0],
                                                  t[1]
                                              );
                                    }
                                    _covertToDefaultFormat(e, t) {
                                        if ((!e && 0 !== e) || (!t && 0 !== t))
                                            throw new Error(
                                                "Longitude and latitude must be provided."
                                            );
                                        return R()(
                                            this.options.customPointConverter
                                        )
                                            ? this.options.customPointConverter(
                                                  e,
                                                  t
                                              )
                                            : {
                                                  lng: parseFloat(e),
                                                  lat: parseFloat(t),
                                              };
                                    }
                                }
                                var $e = n(9),
                                    Qe = n.n($e);
                                const Xe = new Ze(),
                                    Je = (e) => {
                                        e &&
                                            (e.boundingBox &&
                                                ((e.boundingBox.btmRightPoint =
                                                    Xe.convert(
                                                        e.boundingBox
                                                            .btmRightPoint
                                                    )),
                                                (e.boundingBox.topLeftPoint =
                                                    Xe.convert(
                                                        e.boundingBox
                                                            .topLeftPoint
                                                    ))),
                                            e.viewport &&
                                                ((e.viewport.btmRightPoint =
                                                    Xe.convert(
                                                        e.viewport.btmRightPoint
                                                    )),
                                                (e.viewport.topLeftPoint =
                                                    Xe.convert(
                                                        e.viewport.topLeftPoint
                                                    ))),
                                            e.position &&
                                                (e.position = Xe.convert(
                                                    e.position
                                                )),
                                            e.summary &&
                                                e.summary.geoBias &&
                                                (e.summary.geoBias = Xe.convert(
                                                    e.summary.geoBias
                                                )));
                                    },
                                    Ye = (e, t, n) => {
                                        F()(n) || (e[t] = n);
                                    },
                                    et = (e, t) => ({
                                        type: "Feature",
                                        geometry: { type: t, coordinates: [] },
                                        properties: e,
                                    }),
                                    tt = (e) => {
                                        const t = {};
                                        (t.id = e.id),
                                            Qe()(e) &&
                                                Object.keys(e).forEach((n) => {
                                                    Ye(t, n, e[n]);
                                                });
                                        const n = et(t, "Point");
                                        return (
                                            (n.geometry.coordinates = [
                                                e.position.lng,
                                                e.position.lat,
                                            ]),
                                            n
                                        );
                                    },
                                    nt = (e) => {
                                        const t = {
                                            type: "FeatureCollection",
                                            features: [],
                                        };
                                        for (
                                            let n = 0;
                                            n < e.results.length;
                                            n++
                                        ) {
                                            const r = tt(e.results[n]);
                                            t.features.push(r);
                                        }
                                        return t;
                                    };
                                function rt(e) {
                                    e &&
                                        e.entryPoints &&
                                        Array.isArray(e.entryPoints) &&
                                        e.entryPoints.forEach((e) => {
                                            Je(e);
                                        });
                                }
                                function ot(e) {
                                    return e
                                        ? (Array.isArray(e.results)
                                              ? e.results.forEach((e) => {
                                                    Array.isArray(e)
                                                        ? e.forEach((e) => {
                                                              Je(e), rt(e);
                                                          })
                                                        : (Je(e), rt(e));
                                                })
                                              : (Je(e), rt(e)),
                                          Object.assign(e, {
                                              toGeoJson: () => nt(e),
                                          }))
                                        : e;
                                }
                                function at(e) {
                                    return Array.isArray(e.batchItems)
                                        ? ((e.batchItems = e.batchItems.map(
                                              (e) =>
                                                  e.response.error
                                                      ? {
                                                            error: e.response
                                                                .error,
                                                        }
                                                      : ot(e.response)
                                          )),
                                          e)
                                        : null;
                                }
                                var it = "POST",
                                    st = "PATH",
                                    ct = "QUERY",
                                    lt = "OTHER",
                                    ut = "HEADER";
                                function pt(e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var r = Object.getOwnPropertySymbols(e);
                                        t &&
                                            (r = r.filter(function (t) {
                                                return Object.getOwnPropertyDescriptor(
                                                    e,
                                                    t
                                                ).enumerable;
                                            })),
                                            n.push.apply(n, r);
                                    }
                                    return n;
                                }
                                function dt(e, t, n) {
                                    return (
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: n,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = n),
                                        e
                                    );
                                }
                                function ft(e, t) {
                                    let { data: n, trackingId: r } = e;
                                    const o =
                                            "string" == typeof n
                                                ? { data: n }
                                                : (function (e) {
                                                      for (
                                                          var t = 1;
                                                          t < arguments.length;
                                                          t++
                                                      ) {
                                                          var n =
                                                              null !=
                                                              arguments[t]
                                                                  ? arguments[t]
                                                                  : {};
                                                          t % 2
                                                              ? pt(
                                                                    Object(n),
                                                                    !0
                                                                ).forEach(
                                                                    function (
                                                                        t
                                                                    ) {
                                                                        dt(
                                                                            e,
                                                                            t,
                                                                            n[t]
                                                                        );
                                                                    }
                                                                )
                                                              : Object.getOwnPropertyDescriptors
                                                              ? Object.defineProperties(
                                                                    e,
                                                                    Object.getOwnPropertyDescriptors(
                                                                        n
                                                                    )
                                                                )
                                                              : pt(
                                                                    Object(n)
                                                                ).forEach(
                                                                    function (
                                                                        t
                                                                    ) {
                                                                        Object.defineProperty(
                                                                            e,
                                                                            t,
                                                                            Object.getOwnPropertyDescriptor(
                                                                                n,
                                                                                t
                                                                            )
                                                                        );
                                                                    }
                                                                );
                                                      }
                                                      return e;
                                                  })({}, n),
                                        a = t ? t(n) : o;
                                    return (
                                        (a.getTrackingId = () => r || null), a
                                    );
                                }
                                var ht = n(65);
                                const yt = s()["endpoints.copyrightsWorld"],
                                    vt = s()["endpoints.copyrightsBounds"],
                                    gt = s()["endpoints.copyrightsZoom"],
                                    mt = s()["endpoints.caption"],
                                    bt = s()["endpoints.copyrightsV2"],
                                    wt = s()["endpoints.captionV2"],
                                    _t = s()["endpoints.batchSearch"],
                                    Ot = s()["endpoints.batchSyncSearch"],
                                    Pt = s()["endpoints.batchSearchQuery"],
                                    St = s()["endpoints.geocode"],
                                    xt = s()["endpoints.reverseGeocode"],
                                    Et =
                                        s()[
                                            "endpoints.batchReverseGeocodeQuery"
                                        ],
                                    Tt = s()["endpoints.structuredGeocode"],
                                    It = s()["endpoints.search"],
                                    jt =
                                        s()[
                                            "endpoints.batchStructuredGeocodeQuery"
                                        ],
                                    At = s()["endpoints.adp"],
                                    kt = s()["endpoints.batchAdpQuery"],
                                    Ct = s()["endpoints.nearbySearch"],
                                    Lt =
                                        s()["endpoints.batchNearbySearchQuery"],
                                    Rt = s()["endpoints.autocomplete"],
                                    Dt = s()["endpoints.poiCategories"],
                                    Vt = s()["endpoints.chargingAvailability"],
                                    Mt =
                                        s()[
                                            "endpoints.batchChargingAvailabilityQuery"
                                        ],
                                    Ft = s()["endpoints.poiDetails"],
                                    Ut = s()["endpoints.poiPhotos"],
                                    Nt = s()["endpoints.placeById"],
                                    Bt = s()["endpoints.routing"],
                                    Wt =
                                        s()[
                                            "endpoints.calculateReachableRange"
                                        ],
                                    qt = s()["endpoints.batchRoutingQuery"],
                                    zt = s()["endpoints.batchRouting"],
                                    Gt = s()["endpoints.batchSyncRouting"],
                                    Ht = s()["endpoints.matrixRouting"],
                                    Kt = s()["endpoints.matrixSyncRouting"],
                                    Zt =
                                        s()[
                                            "endpoints.batchReachableRangeQuery"
                                        ],
                                    $t = s()["endpoints.longDistanceEVRouting"],
                                    Qt = s()["endpoints.incidentDetails"],
                                    Xt = s()["endpoints.incidentDetailsV5"],
                                    Jt = s()["endpoints.incidentViewport"],
                                    Yt = s()["endpoints.flowSegmentData"],
                                    en =
                                        (s()["endpoints.incidentRegions"],
                                        s()["endpoints.trafficLayer"],
                                        s()[
                                            "endpoints.rasterTrafficFlowTilesLayer"
                                        ],
                                        s()[
                                            "endpoints.vectorTrafficFlowTilesLayer"
                                        ],
                                        s()["endpoints.tileLayer"],
                                        s()["endpoints.staticImage"]),
                                    tn = s().origin;
                                class nn extends Error {
                                    constructor(e) {
                                        for (
                                            var t = arguments.length,
                                                n = new Array(
                                                    t > 1 ? t - 1 : 0
                                                ),
                                                r = 1;
                                            r < t;
                                            r++
                                        )
                                            n[r - 1] = arguments[r];
                                        super(...n),
                                            Error.captureStackTrace &&
                                                Error.captureStackTrace(
                                                    this,
                                                    nn
                                                );
                                        let o = "\n";
                                        e.forEach((e) => {
                                            o += e.message + "\n";
                                        }),
                                            (this.errors = e),
                                            (this.message =
                                                "Validation errors occured: " +
                                                o);
                                    }
                                }
                                const rn = /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/;
                                class on {
                                    constructor(e) {
                                        let {
                                            validators: t,
                                            converters: n,
                                            required: r,
                                            defaultValue: o,
                                            deprecationDate: a,
                                        } = e;
                                        Object.assign(this, {
                                            validators: t,
                                            converters: n,
                                            required: r,
                                            defaultValue: o,
                                            deprecationDate: a,
                                        }),
                                            this._validateFields();
                                    }
                                    _isArrayOfFunctions(e) {
                                        if (!Array.isArray(e)) return !1;
                                        for (let t = 0; t < e.length; t++)
                                            if (!R()(e[t])) return !1;
                                        return !0;
                                    }
                                    _validateFields() {
                                        if (
                                            null === this.validators ||
                                            (this.validators &&
                                                !this._isArrayOfFunctions(
                                                    this.validators
                                                ))
                                        )
                                            throw new Error(
                                                "Validators are not an array of functions."
                                            );
                                        if (
                                            null === this.converters ||
                                            (this.converters &&
                                                !this._isArrayOfFunctions(
                                                    this.converters
                                                ))
                                        )
                                            throw new Error(
                                                "Converters are not an array of functions."
                                            );
                                        if (
                                            void 0 !== this.required &&
                                            "boolean" != typeof this.required
                                        )
                                            throw new Error(
                                                "Required must be a Boolean."
                                            );
                                        if (
                                            this.deprecationDate &&
                                            (Number.isNaN(
                                                Date.parse(this.deprecationDate)
                                            ) ||
                                                !rn.test(this.deprecationDate))
                                        )
                                            throw new Error(
                                                "deprecationDate must contain a valid date"
                                            );
                                    }
                                    getDefaultValue() {
                                        return R()(this.defaultValue)
                                            ? this.defaultValue()
                                            : this.defaultValue;
                                    }
                                    getConverters() {
                                        return this.converters
                                            ? this.converters
                                            : [];
                                    }
                                    getValidators() {
                                        return this.validators
                                            ? this.validators
                                            : [];
                                    }
                                    getDeprecationDate() {
                                        return this.deprecationDate;
                                    }
                                    isRequired() {
                                        return !0 === this.required;
                                    }
                                }
                                var an = new (class {
                                    constructor() {
                                        this.log = {};
                                    }
                                    _isLogPrinted(e, t) {
                                        const n = this.log[e];
                                        return !!n && n[t];
                                    }
                                    _setLog(e, t) {
                                        (this.log[e] = this.log[e] || {}),
                                            (this.log[e][t] = !0);
                                    }
                                    _displayWarning(e, t, n) {
                                        const r = Date.now() > Date.parse(t),
                                            o =
                                                "default" !== n
                                                    ? "(used in ".concat(
                                                          n,
                                                          ") "
                                                      )
                                                    : "";
                                        r
                                            ? console.error(
                                                  "[DEPRECATION WARNING] The parameter '"
                                                      .concat(e, "' ")
                                                      .concat(
                                                          o,
                                                          " deprecation period "
                                                      ) +
                                                      "has ended. It is recommended to stop using it as it may stop working. Please refer to https://developer.tomtom.com/maps-sdk-web-js/documentation for more information"
                                              )
                                            : console.warn(
                                                  "[DEPRECATION NOTICE] The parameter '"
                                                      .concat(e, "' ")
                                                      .concat(
                                                          o,
                                                          "is deprecated. "
                                                      ) +
                                                      "By ".concat(
                                                          t,
                                                          " we can not guarantee that it will continue to work. "
                                                      ) +
                                                      "Please refer to https://developer.tomtom.com/maps-sdk-web-js/documentation for more information"
                                              );
                                    }
                                    checkDeprecation(e, t) {
                                        let n =
                                            arguments.length > 2 &&
                                            void 0 !== arguments[2]
                                                ? arguments[2]
                                                : "default";
                                        F()(e) ||
                                            F()(t) ||
                                            this._isLogPrinted(n, e) ||
                                            (this._displayWarning(e, t, n),
                                            this._setLog(n, e));
                                    }
                                })();
                                function sn(e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var r = Object.getOwnPropertySymbols(e);
                                        t &&
                                            (r = r.filter(function (t) {
                                                return Object.getOwnPropertyDescriptor(
                                                    e,
                                                    t
                                                ).enumerable;
                                            })),
                                            n.push.apply(n, r);
                                    }
                                    return n;
                                }
                                function cn(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n =
                                            null != arguments[t]
                                                ? arguments[t]
                                                : {};
                                        t % 2
                                            ? sn(Object(n), !0).forEach(
                                                  function (t) {
                                                      ln(e, t, n[t]);
                                                  }
                                              )
                                            : Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(
                                                  e,
                                                  Object.getOwnPropertyDescriptors(
                                                      n
                                                  )
                                              )
                                            : sn(Object(n)).forEach(function (
                                                  t
                                              ) {
                                                  Object.defineProperty(
                                                      e,
                                                      t,
                                                      Object.getOwnPropertyDescriptor(
                                                          n,
                                                          t
                                                      )
                                                  );
                                              });
                                    }
                                    return e;
                                }
                                function ln(e, t, n) {
                                    return (
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: n,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = n),
                                        e
                                    );
                                }
                                function un(e, t, n, r, o, a, i) {
                                    try {
                                        var s = e[a](i),
                                            c = s.value;
                                    } catch (e) {
                                        return void n(e);
                                    }
                                    s.done
                                        ? t(c)
                                        : Promise.resolve(c).then(r, o);
                                }
                                function pn(e) {
                                    return function () {
                                        var t = this,
                                            n = arguments;
                                        return new Promise(function (r, o) {
                                            var a = e.apply(t, n);
                                            function i(e) {
                                                un(a, r, o, i, s, "next", e);
                                            }
                                            function s(e) {
                                                un(a, r, o, i, s, "throw", e);
                                            }
                                            i(void 0);
                                        });
                                    };
                                }
                                const dn = (e, t, n, r) => {
                                        const o = [];
                                        for (const a of t)
                                            try {
                                                a(e, n, r);
                                            } catch (e) {
                                                o.push(e);
                                            }
                                        return o;
                                    },
                                    fn = (e) => {
                                        const t = {};
                                        for (const [n, r] of Object.entries(e))
                                            t[n] = new on(r);
                                        return t;
                                    },
                                    hn = function (e) {
                                        let t =
                                                arguments.length > 1 &&
                                                void 0 !== arguments[1]
                                                    ? arguments[1]
                                                    : {},
                                            n =
                                                arguments.length > 2
                                                    ? arguments[2]
                                                    : void 0;
                                        const r = fn(e);
                                        let o = [];
                                        for (const [e, a] of Object.entries(
                                            r
                                        )) {
                                            const r = t[e],
                                                i = "__all" === e;
                                            if (F()(r) && a.isRequired())
                                                o.push(
                                                    new Error(
                                                        "".concat(
                                                            e,
                                                            " is a required field."
                                                        )
                                                    )
                                                );
                                            else if (!F()(r) || i) {
                                                an.checkDeprecation(
                                                    e,
                                                    a.getDeprecationDate(),
                                                    n
                                                );
                                                const i = dn(
                                                    r,
                                                    a.getValidators(),
                                                    t,
                                                    e
                                                );
                                                o = [...o, ...i];
                                            }
                                        }
                                        return o;
                                    },
                                    yn = function (e) {
                                        let t =
                                                arguments.length > 1 &&
                                                void 0 !== arguments[1]
                                                    ? arguments[1]
                                                    : {},
                                            n =
                                                arguments.length > 2
                                                    ? arguments[2]
                                                    : void 0;
                                        const r = fn(e),
                                            o = {};
                                        for (const [e, a] of Object.entries(
                                            r
                                        )) {
                                            const r = a.getDefaultValue();
                                            let i = t[e];
                                            if (F()(i) || "" === i) {
                                                if (F()(r)) continue;
                                                i = r;
                                            }
                                            const s = a.getConverters();
                                            o[e] = s.reduce(
                                                (e, t) => t(e, n),
                                                i
                                            );
                                        }
                                        return o;
                                    };
                                function vn(e, t, n, r) {
                                    const o = {};
                                    let a = [];
                                    if (
                                        e.batchItems &&
                                        t.batchItems &&
                                        ((o.batchItems = t.batchItems.map(
                                            (t) => {
                                                const o = yn(
                                                    e.batchItems,
                                                    t,
                                                    n
                                                );
                                                return (
                                                    (a = a.concat(
                                                        hn(e.batchItems, o, r)
                                                    )),
                                                    o
                                                );
                                            }
                                        )),
                                        t.batchMode &&
                                            (o.batchMode = Z(
                                                ["sync", "async", "redirect"],
                                                "batchMode"
                                            )(t.batchMode)),
                                        t.key && (o.key = H(t.key)),
                                        (o.trackingId = t.trackingId
                                            ? we(t.trackingId)
                                            : (0, ht.v4)()),
                                        t.waitTimeSeconds)
                                    ) {
                                        if (
                                            (K(t.waitTimeSeconds),
                                            !(
                                                120 === t.waitTimeSeconds ||
                                                (t.waitTimeSeconds >= 5 &&
                                                    t.waitTimeSeconds <= 60)
                                            ))
                                        )
                                            throw new Error(
                                                "Invalid `waitTimeSeconds` parameter value. Must be 120 or an integer between 5 and 60."
                                            );
                                        o.waitTimeSeconds = t.waitTimeSeconds;
                                    }
                                    return {
                                        batchProperties: o,
                                        batchErrors: a,
                                    };
                                }
                                function gn(e) {
                                    return mn.apply(this, arguments);
                                }
                                function mn() {
                                    return (mn = pn(function* (e) {
                                        let t =
                                                arguments.length > 1 &&
                                                void 0 !== arguments[1]
                                                    ? arguments[1]
                                                    : {},
                                            n =
                                                arguments.length > 2
                                                    ? arguments[2]
                                                    : void 0,
                                            r =
                                                arguments.length > 3
                                                    ? arguments[3]
                                                    : void 0,
                                            o =
                                                arguments.length > 4
                                                    ? arguments[4]
                                                    : void 0,
                                            a =
                                                arguments.length > 5
                                                    ? arguments[5]
                                                    : void 0,
                                            i = yn(e, t, n),
                                            s = hn(e, i, r);
                                        if (e.batchItems && t.batchItems) {
                                            const {
                                                batchProperties: o,
                                                batchErrors: a,
                                            } = vn(e, t, n, r);
                                            (i = cn(cn({}, i), o)),
                                                (s = s.concat(a));
                                        }
                                        if (s.length) throw new nn(s);
                                        return o(i, a);
                                    })).apply(this, arguments);
                                }
                                function bn(e, t, n, r, o) {
                                    const a = { batchItems: e };
                                    return function () {
                                        let i =
                                                arguments.length > 0 &&
                                                void 0 !== arguments[0]
                                                    ? arguments[0]
                                                    : {},
                                            s =
                                                arguments.length > 1 &&
                                                void 0 !== arguments[1]
                                                    ? arguments[1]
                                                    : {},
                                            c = r,
                                            l = i,
                                            u = e;
                                        return (
                                            i.batchItems &&
                                                R()(o) &&
                                                ((l = {
                                                    trackingId: i.trackingId,
                                                    batchMode: i.batchMode,
                                                    waitTimeSeconds:
                                                        i.waitTimeSeconds,
                                                    batchItems: i.batchItems,
                                                    key: i.key,
                                                }),
                                                (c = o),
                                                (u = a)),
                                            gn(u, l, t, n, c, s.abortSignal)
                                        );
                                    };
                                }
                                var wn = n(80),
                                    _n = n.n(wn);
                                function On(e, t) {
                                    return e.replace(
                                        /\{ *([\w_]+) *\}/g,
                                        (e, n) => {
                                            let r = t[n];
                                            return _n()(r)
                                                ? "{" + n + "}"
                                                : (R()(r) && (r = r(n)),
                                                  "query" === n
                                                      ? encodeURIComponent(r)
                                                      : r);
                                        }
                                    );
                                }
                                var Pn = window.fetch;
                                function Sn(e, t, n, r, o, a, i) {
                                    try {
                                        var s = e[a](i),
                                            c = s.value;
                                    } catch (e) {
                                        return void n(e);
                                    }
                                    s.done
                                        ? t(c)
                                        : Promise.resolve(c).then(r, o);
                                }
                                function xn(e) {
                                    return function () {
                                        var t = this,
                                            n = arguments;
                                        return new Promise(function (r, o) {
                                            var a = e.apply(t, n);
                                            function i(e) {
                                                Sn(a, r, o, i, s, "next", e);
                                            }
                                            function s(e) {
                                                Sn(a, r, o, i, s, "throw", e);
                                            }
                                            i(void 0);
                                        });
                                    };
                                }
                                function En(e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var r = Object.getOwnPropertySymbols(e);
                                        t &&
                                            (r = r.filter(function (t) {
                                                return Object.getOwnPropertyDescriptor(
                                                    e,
                                                    t
                                                ).enumerable;
                                            })),
                                            n.push.apply(n, r);
                                    }
                                    return n;
                                }
                                function Tn(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n =
                                            null != arguments[t]
                                                ? arguments[t]
                                                : {};
                                        t % 2
                                            ? En(Object(n), !0).forEach(
                                                  function (t) {
                                                      In(e, t, n[t]);
                                                  }
                                              )
                                            : Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(
                                                  e,
                                                  Object.getOwnPropertyDescriptors(
                                                      n
                                                  )
                                              )
                                            : En(Object(n)).forEach(function (
                                                  t
                                              ) {
                                                  Object.defineProperty(
                                                      e,
                                                      t,
                                                      Object.getOwnPropertyDescriptor(
                                                          n,
                                                          t
                                                      )
                                                  );
                                              });
                                    }
                                    return e;
                                }
                                function In(e, t, n) {
                                    return (
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: n,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = n),
                                        e
                                    );
                                }
                                function jn(e, t, n) {
                                    (e.pathParameters = e.pathParameters || {}),
                                        (e.pathParameters.contentType = n),
                                        (e.pathParameters.protocol =
                                            e.pathParameters.protocol ||
                                            "https");
                                    const r = On(e.url, e.pathParameters),
                                        o = d();
                                    (o.Accept = "application/json"),
                                        e.headers &&
                                            e.headers.trackingId &&
                                            (o["Tracking-ID"] =
                                                e.headers.trackingId);
                                    let a = Tn(
                                        {
                                            method: "GET",
                                            headers: o,
                                            mode: "cors",
                                        },
                                        e.abortSignal && {
                                            signal: e.abortSignal,
                                        }
                                    );
                                    return (
                                        t &&
                                            (a = Tn(
                                                Tn({}, a),
                                                {},
                                                { transformResponse: t }
                                            )),
                                        {
                                            options: e,
                                            url: r,
                                            requestOptions: a,
                                        }
                                    );
                                }
                                function An(e, t) {
                                    let n =
                                            arguments.length > 2 &&
                                            void 0 !== arguments[2]
                                                ? arguments[2]
                                                : {},
                                        r =
                                            arguments.length > 3
                                                ? arguments[3]
                                                : void 0;
                                    return Pn(Rn(e, t), n)
                                        .then(
                                            (function () {
                                                var t = xn(function* (t) {
                                                    const n = yield r(t);
                                                    if (!t.ok)
                                                        return Promise.reject({
                                                            response: t,
                                                            data: n,
                                                        });
                                                    if (e._getOriginalResponse)
                                                        return t;
                                                    if (
                                                        "batch" ===
                                                            e.requestType &&
                                                        202 === t.status
                                                    )
                                                        return t.headers
                                                            .location;
                                                    const o =
                                                        t.headers &&
                                                        (t.headers.get(
                                                            "tracking-id"
                                                        ) ||
                                                            t.headers.get(
                                                                "Tracking-ID"
                                                            ));
                                                    return Tn(
                                                        { data: n },
                                                        o && { trackingId: o }
                                                    );
                                                });
                                                return function (e) {
                                                    return t.apply(
                                                        this,
                                                        arguments
                                                    );
                                                };
                                            })()
                                        )
                                        .catch(function () {
                                            let t =
                                                arguments.length > 0 &&
                                                void 0 !== arguments[0]
                                                    ? arguments[0]
                                                    : {};
                                            if (
                                                n.signal &&
                                                !0 === n.signal.aborted
                                            )
                                                return Promise.reject(t);
                                            const { response: r, data: o } = t,
                                                a = e._getOriginalResponse
                                                    ? r || t
                                                    : Ln(o, r && r.status) || t;
                                            return Promise.reject(a);
                                        });
                                }
                                function kn(e) {
                                    return e.text();
                                }
                                function Cn(e) {
                                    return e.json();
                                }
                                const Ln = (e, t) => {
                                    if (!e) return;
                                    const { error: n, detailedError: r } = e;
                                    return n && r
                                        ? {
                                              message: n.description,
                                              data: r,
                                              status: t,
                                          }
                                        : e;
                                };
                                function Rn(e, t) {
                                    if (!e.queryParameters) return t;
                                    return (
                                        t +
                                        "?" +
                                        Object.keys(e.queryParameters)
                                            .map(function (t) {
                                                return (function (e, t) {
                                                    const n =
                                                        e.queryParameters[t];
                                                    let r = "";
                                                    r = Array.isArray(n)
                                                        ? n
                                                              .map(function (
                                                                  e
                                                              ) {
                                                                  return Dn(
                                                                      t,
                                                                      e
                                                                  );
                                                              })
                                                              .join("&")
                                                        : Dn(
                                                              t,
                                                              e.queryParameters[
                                                                  t
                                                              ]
                                                          );
                                                    return r;
                                                })(e, t);
                                            })
                                            .join("&")
                                    );
                                }
                                function Dn(e, t) {
                                    return (
                                        encodeURIComponent(e) +
                                        "=" +
                                        encodeURIComponent(t)
                                    );
                                }
                                function Vn(e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var r = Object.getOwnPropertySymbols(e);
                                        t &&
                                            (r = r.filter(function (t) {
                                                return Object.getOwnPropertyDescriptor(
                                                    e,
                                                    t
                                                ).enumerable;
                                            })),
                                            n.push.apply(n, r);
                                    }
                                    return n;
                                }
                                function Mn(e, t, n) {
                                    return (
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: n,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = n),
                                        e
                                    );
                                }
                                function Fn(e, t) {
                                    const n = (function (e) {
                                        try {
                                            return JSON.stringify(e);
                                        } catch (e) {
                                            return null;
                                        }
                                    })(e);
                                    if (!n)
                                        throw new Error(
                                            "Unsupported request body type: " +
                                                e
                                        );
                                    return (
                                        (function (e, t, n) {
                                            e.headers || (e.headers = {}),
                                                e.headers[t] ||
                                                    e.headers[
                                                        t.toLowerCase()
                                                    ] ||
                                                    (e.headers[t] = n);
                                        })(
                                            t,
                                            "Content-Type",
                                            "application/json"
                                        ),
                                        n
                                    );
                                }
                                const Un = function (e, t) {
                                        const n = jn(e, t, "json");
                                        return An(
                                            n.options,
                                            n.url,
                                            n.requestOptions,
                                            Cn
                                        );
                                    },
                                    Nn = function (e) {
                                        (e.pathParameters =
                                            e.pathParameters || {}),
                                            (e.pathParameters.contentType =
                                                "json"),
                                            (e.pathParameters.protocol =
                                                e.pathParameters.protocol ||
                                                "https");
                                        const t = On(e.url, e.pathParameters),
                                            n = d();
                                        (n.Accept = "application/json"),
                                            e.headers &&
                                                e.headers.trackingId &&
                                                (n["Tracking-ID"] =
                                                    e.headers.trackingId);
                                        const r = (function (e) {
                                            for (
                                                var t = 1;
                                                t < arguments.length;
                                                t++
                                            ) {
                                                var n =
                                                    null != arguments[t]
                                                        ? arguments[t]
                                                        : {};
                                                t % 2
                                                    ? Vn(Object(n), !0).forEach(
                                                          function (t) {
                                                              Mn(e, t, n[t]);
                                                          }
                                                      )
                                                    : Object.getOwnPropertyDescriptors
                                                    ? Object.defineProperties(
                                                          e,
                                                          Object.getOwnPropertyDescriptors(
                                                              n
                                                          )
                                                      )
                                                    : Vn(Object(n)).forEach(
                                                          function (t) {
                                                              Object.defineProperty(
                                                                  e,
                                                                  t,
                                                                  Object.getOwnPropertyDescriptor(
                                                                      n,
                                                                      t
                                                                  )
                                                              );
                                                          }
                                                      );
                                            }
                                            return e;
                                        })(
                                            {
                                                method: "POST",
                                                headers: n,
                                                mode: "cors",
                                                redirect: "follow",
                                            },
                                            e.abortSignal && {
                                                signal: e.abortSignal,
                                            }
                                        );
                                        return (
                                            (function (e, t) {
                                                const n = e.bodyParameters;
                                                let r;
                                                n &&
                                                    (Qe()(n)
                                                        ? (r = Fn(n, t))
                                                        : V()(n) && (r = n),
                                                    (t.body = r));
                                            })(e, r),
                                            An(e, t, r, Cn)
                                        );
                                    },
                                    Bn = function (e, t) {
                                        const n = jn(e, t, "text");
                                        return An(
                                            n.options,
                                            n.url,
                                            n.requestOptions,
                                            kn
                                        );
                                    };
                                let Wn = !1;
                                const qn = () => (Wn ? "http" : "https");
                                var zn = (e, t) => {
                                        e.protocol = (e && e.protocol) || qn();
                                        const n = e.pathParameters;
                                        return n && "text" === n.contentType
                                            ? Bn(e, t)
                                            : Un(e, t);
                                    },
                                    Gn = (e) => (
                                        (e.protocol = e.protocol || qn()), Nn(e)
                                    );
                                function Hn(e) {
                                    const t = e[1];
                                    return (
                                        !t.application || t.application === ct
                                    );
                                }
                                function Kn(e) {
                                    return e[1].application === st;
                                }
                                function Zn(e) {
                                    return e[1].application === it;
                                }
                                function $n(e) {
                                    return e[1].application === lt;
                                }
                                function Qn(e) {
                                    return e[1].application === ut;
                                }
                                function Xn(e) {
                                    return { name: e[0], fieldName: e[2] };
                                }
                                function Jn(e, t) {
                                    let n = Object.keys(e).map(
                                        ((r = e),
                                        (e) => [
                                            (r[e] && r[e].name) || e,
                                            r[e],
                                            e,
                                        ])
                                    );
                                    var r;
                                    return (
                                        (n = n.filter(t)), (n = n.map(Xn)), n
                                    );
                                }
                                function Yn(e) {
                                    return Jn(e, Hn);
                                }
                                function er(e) {
                                    return Jn(e, Kn);
                                }
                                function tr(e) {
                                    return Jn(e, Zn);
                                }
                                function nr(e) {
                                    return Jn(e, $n);
                                }
                                function rr(e) {
                                    return Jn(e, Qn);
                                }
                                function or(e, t, n) {
                                    const r = {};
                                    return (
                                        t(e).forEach((t) => {
                                            if (t.fieldName in n) {
                                                const o = e[t.fieldName],
                                                    a = n[t.fieldName];
                                                o.cast
                                                    ? o.cast(a, r)
                                                    : (r[t.name] = a);
                                            }
                                        }),
                                        r
                                    );
                                }
                                function ar(e, t) {
                                    return {
                                        pathParams: or(e, er, t),
                                        queryParams: or(e, Yn, t),
                                        postParams: or(e, tr, t),
                                        otherParams: or(e, nr, t),
                                        headerParams: or(e, rr, t),
                                    };
                                }
                                var ir = n(81),
                                    sr = n.n(ir);
                                const cr = "contentType";
                                function lr(e) {
                                    const t = Object.assign({}, e);
                                    return (t[cr] = { application: st }), t;
                                }
                                function ur(e) {
                                    return (e[cr] = e[cr] || "json"), e;
                                }
                                const pr = (e) => (t, n, r) => {
                                    const {
                                            pathParams: o,
                                            queryParams: a,
                                            postParams: i,
                                            headerParams: s,
                                        } = ar(lr(t), ur(n)),
                                        c = {
                                            headers: s,
                                            url: "{protocol}://" + e,
                                            pathParameters: o,
                                            queryParameters: a,
                                            abortSignal: r,
                                        };
                                    return sr()(i)
                                        ? zn(c)
                                        : ((c.bodyParameters = i), Gn(c));
                                };
                                var dr = (e, t) => {
                                    if (null == e) throw new TypeError(t);
                                    return e;
                                };
                                function fr(e, t) {
                                    return (
                                        encodeURIComponent(e) +
                                        "=" +
                                        encodeURIComponent(t)
                                    );
                                }
                                function hr(e, t) {
                                    if (!t) return e;
                                    return (
                                        e +
                                        "?" +
                                        Object.keys(t)
                                            .map((e) =>
                                                (function (e, t) {
                                                    const n = t[e];
                                                    let r = "";
                                                    return (
                                                        (r = Array.isArray(n)
                                                            ? n
                                                                  .map(
                                                                      function (
                                                                          t
                                                                      ) {
                                                                          return fr(
                                                                              e,
                                                                              t
                                                                          );
                                                                      }
                                                                  )
                                                                  .join("&")
                                                            : fr(e, t[e])),
                                                        r
                                                    );
                                                })(e, t)
                                            )
                                            .join("&")
                                    );
                                }
                                var yr = (e, t, n) => hr(On(e, t), n);
                                function vr(e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var r = Object.getOwnPropertySymbols(e);
                                        t &&
                                            (r = r.filter(function (t) {
                                                return Object.getOwnPropertyDescriptor(
                                                    e,
                                                    t
                                                ).enumerable;
                                            })),
                                            n.push.apply(n, r);
                                    }
                                    return n;
                                }
                                function gr(e, t, n) {
                                    return (
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: n,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = n),
                                        e
                                    );
                                }
                                function mr(e) {
                                    let t;
                                    switch (e.batchMode) {
                                        case "async":
                                            t = e.endpoints.async;
                                            break;
                                        case "sync":
                                            t = e.endpoints.sync;
                                            break;
                                        default:
                                            (t = e.endpoints.async),
                                                (e.queryParams.redirectMode =
                                                    "manual");
                                    }
                                    return (
                                        "sync" !== e.batchMode &&
                                        e.waitTimeSeconds
                                            ? (e.queryParams.waitTimeSeconds =
                                                  e.waitTimeSeconds)
                                            : e.queryParams &&
                                              e.queryParams.waitTimeSeconds &&
                                              delete e.queryParams
                                                  .waitTimeSeconds,
                                        Gn(
                                            (function (e) {
                                                for (
                                                    var t = 1;
                                                    t < arguments.length;
                                                    t++
                                                ) {
                                                    var n =
                                                        null != arguments[t]
                                                            ? arguments[t]
                                                            : {};
                                                    t % 2
                                                        ? vr(
                                                              Object(n),
                                                              !0
                                                          ).forEach(function (
                                                              t
                                                          ) {
                                                              gr(e, t, n[t]);
                                                          })
                                                        : Object.getOwnPropertyDescriptors
                                                        ? Object.defineProperties(
                                                              e,
                                                              Object.getOwnPropertyDescriptors(
                                                                  n
                                                              )
                                                          )
                                                        : vr(Object(n)).forEach(
                                                              function (t) {
                                                                  Object.defineProperty(
                                                                      e,
                                                                      t,
                                                                      Object.getOwnPropertyDescriptor(
                                                                          n,
                                                                          t
                                                                      )
                                                                  );
                                                              }
                                                          );
                                                }
                                                return e;
                                            })(
                                                {
                                                    url: "{protocol}://" + t,
                                                    queryParameters:
                                                        e.queryParams,
                                                    bodyParameters:
                                                        e.bodyParams,
                                                    headers: e.headers,
                                                    requestType: "batch",
                                                },
                                                e.abortSignal && {
                                                    abortSignal: e.abortSignal,
                                                }
                                            )
                                        ).then((t) =>
                                            "manual" ===
                                            e.queryParams.redirectMode
                                                ? zn({
                                                      url:
                                                          "{protocol}://" +
                                                          tn +
                                                          t,
                                                  })
                                                : t
                                        )
                                    );
                                }
                                const br = (e, t) => (n, r, o) => {
                                        const a = {},
                                            i = {};
                                        a.key = r.key;
                                        const s = {};
                                        r.trackingId &&
                                            (s.trackingId = r.trackingId);
                                        const c = dr(r.batchItems);
                                        (n = lr(n)),
                                            (i.batchItems = c.map(function (e) {
                                                const {
                                                        pathParams: r,
                                                        queryParams: o,
                                                        postParams: a,
                                                    } = ar(n, ur(e)),
                                                    i = {
                                                        query: yr(
                                                            t.single,
                                                            r,
                                                            o
                                                        ),
                                                    };
                                                return (
                                                    sr()(a) || (i.post = a), i
                                                );
                                            }));
                                        return mr({
                                            batchMode:
                                                r.batchMode ||
                                                (i.batchItems.length <= e
                                                    ? "sync"
                                                    : "redirect"),
                                            waitTimeSeconds: r.waitTimeSeconds,
                                            queryParams: a,
                                            bodyParams: i,
                                            headers: s,
                                            endpoints: {
                                                sync: t.batchSync,
                                                async: t.batch,
                                            },
                                            abortSignal: o,
                                        });
                                    },
                                    wr = ["origins", "destinations"];
                                function _r(e) {
                                    const t = {
                                            origins: e.origins,
                                            destinations: e.destinations,
                                        },
                                        n = (function (e) {
                                            const t = Object.keys(e).filter(
                                                (e) => -1 === wr.indexOf(e)
                                            );
                                            return t.length
                                                ? t.reduce(
                                                      (t, n) => (
                                                          (t[n] = e[n]), t
                                                      ),
                                                      {}
                                                  )
                                                : null;
                                        })(e);
                                    return n && (t.options = { post: n }), t;
                                }
                                const Or = {
                                    key: { validators: [Ie] },
                                    trackingId: {
                                        validators: [we],
                                        application: ut,
                                        defaultValue: ht.v4,
                                    },
                                    geometries: {
                                        validators: [
                                            function (e) {
                                                if (re(e))
                                                    throw new TypeError(
                                                        "an array is expected, but " +
                                                            e +
                                                            "  [" +
                                                            typeof e +
                                                            "] given"
                                                    );
                                                return e;
                                            },
                                        ],
                                        required: !0,
                                    },
                                    geometriesZoom: {
                                        validators: [
                                            function (e) {
                                                return ve(
                                                    0,
                                                    22,
                                                    "a geometries zoom value <0, 22> is expected"
                                                )(e);
                                            },
                                        ],
                                    },
                                };
                                function Pr(e, t) {
                                    const n = pr(At),
                                        r = br(100, {
                                            single: kt,
                                            batchSync: Ot,
                                            batch: _t,
                                        });
                                    return bn(
                                        Or,
                                        v,
                                        "additionalData",
                                        function (e, t) {
                                            return n(Or, e, t).then(ft);
                                        },
                                        function (e, t) {
                                            return r(Or, e, t).then((e) =>
                                                ft(e, at)
                                            );
                                        }
                                    )(e, t);
                                }
                                var Sr = n(98),
                                    xr = n.n(Sr);
                                function Er(e, t) {
                                    if (e) throw new TypeError(t);
                                }
                                function Tr(e) {
                                    const t = parseFloat(e);
                                    if (!isFinite(t))
                                        throw new TypeError(
                                            "an number is expected, but " +
                                                e +
                                                " [" +
                                                typeof e +
                                                "] given"
                                        );
                                    return t - 180 * Math.ceil((t - 90) / 180);
                                }
                                function Ir(e) {
                                    const t = parseFloat(e);
                                    if (!isFinite(t))
                                        throw new TypeError(
                                            "an number is expected, but " +
                                                e +
                                                " [" +
                                                typeof e +
                                                "] given"
                                        );
                                    return t - 360 * Math.ceil((t - 180) / 360);
                                }
                                function jr(e) {
                                    if (Array.isArray(e) && 2 === e.length)
                                        return [...e].reverse();
                                    if (V()(e)) {
                                        const t = e.match(A);
                                        return (
                                            Er(
                                                !t || !t[1] || !t[2],
                                                "A point is expected, but " +
                                                    e +
                                                    " [" +
                                                    typeof e +
                                                    "] given"
                                            ),
                                            [t[2], t[1]]
                                        );
                                    }
                                    if (
                                        (function (e) {
                                            return R()(e.lat) && R()(e.lng);
                                        })(e)
                                    )
                                        return [e.lat(), e.lng()];
                                    if (
                                        ((r = e),
                                        Object.prototype.hasOwnProperty.call(
                                            r,
                                            "lat"
                                        ) &&
                                            (Object.prototype.hasOwnProperty.call(
                                                r,
                                                "lon"
                                            ) ||
                                                Object.prototype.hasOwnProperty.call(
                                                    r,
                                                    "lng"
                                                )))
                                    )
                                        return [
                                            e.lat,
                                            ((t = e.lon),
                                            (n = e.lng),
                                            void 0 === t ? n : t),
                                        ];
                                    var t, n, r, o;
                                    if (
                                        ((o = e),
                                        Object.prototype.hasOwnProperty.call(
                                            o,
                                            "x"
                                        ) &&
                                            Object.prototype.hasOwnProperty.call(
                                                o,
                                                "y"
                                            ))
                                    )
                                        return [e.y, e.x];
                                    if (
                                        (function (e) {
                                            return (
                                                Object.prototype.hasOwnProperty.call(
                                                    e,
                                                    "latitude"
                                                ) &&
                                                Object.prototype.hasOwnProperty.call(
                                                    e,
                                                    "longitude"
                                                )
                                            );
                                        })(e)
                                    )
                                        return [e.latitude, e.longitude];
                                    throw new TypeError(
                                        "A point is expected, but " +
                                            e +
                                            " [" +
                                            typeof e +
                                            "] given"
                                    );
                                }
                                function Ar(e) {
                                    let t, n;
                                    if (
                                        (function (e) {
                                            return (
                                                Object.prototype.hasOwnProperty.call(
                                                    e,
                                                    "minLon"
                                                ) &&
                                                Object.prototype.hasOwnProperty.call(
                                                    e,
                                                    "minLat"
                                                ) &&
                                                Object.prototype.hasOwnProperty.call(
                                                    e,
                                                    "maxLon"
                                                ) &&
                                                Object.prototype.hasOwnProperty.call(
                                                    e,
                                                    "maxLat"
                                                )
                                            );
                                        })(e)
                                    )
                                        return e;
                                    if (
                                        (function (e) {
                                            return (
                                                Object.prototype.hasOwnProperty.call(
                                                    e,
                                                    "left"
                                                ) &&
                                                Object.prototype.hasOwnProperty.call(
                                                    e,
                                                    "bottom"
                                                ) &&
                                                Object.prototype.hasOwnProperty.call(
                                                    e,
                                                    "right"
                                                ) &&
                                                Object.prototype.hasOwnProperty.call(
                                                    e,
                                                    "top"
                                                )
                                            );
                                        })(e)
                                    )
                                        return {
                                            minLon: e.left,
                                            minLat: e.bottom,
                                            maxLon: e.right,
                                            maxLat: e.top,
                                        };
                                    if (
                                        (function (e) {
                                            return (
                                                R()(e.getWest) &&
                                                R()(e.getEast) &&
                                                R()(e.getSouth) &&
                                                R()(e.getNorth)
                                            );
                                        })(e)
                                    )
                                        return {
                                            minLon: e.getWest(),
                                            minLat: e.getSouth(),
                                            maxLon: e.getEast(),
                                            maxLat: e.getNorth(),
                                        };
                                    if (
                                        R()(e.getNorthEast) &&
                                        R()(e.getSouthWest)
                                    )
                                        return (
                                            (n = jr(e.getNorthEast())),
                                            (t = jr(e.getSouthWest())),
                                            {
                                                minLon: t[1],
                                                minLat: t[0],
                                                maxLon: n[1],
                                                maxLat: n[0],
                                            }
                                        );
                                    if (Array.isArray(e) && 4 === e.length)
                                        return {
                                            minLon: e[0],
                                            minLat: e[1],
                                            maxLon: e[2],
                                            maxLat: e[3],
                                        };
                                    if (Array.isArray(e) && 2 === e.length)
                                        return (
                                            (t = jr(e[0])),
                                            (n = jr(e[1])),
                                            {
                                                minLon: t[1],
                                                minLat: t[0],
                                                maxLon: n[1],
                                                maxLat: n[0],
                                            }
                                        );
                                    if (
                                        V()(e) &&
                                        4 ===
                                            (e = e.trim().split(/\s*,\s*/))
                                                .length
                                    )
                                        return {
                                            minLon: parseFloat(e[0]),
                                            minLat: parseFloat(e[1]),
                                            maxLon: parseFloat(e[2]),
                                            maxLat: parseFloat(e[3]),
                                        };
                                    throw new TypeError(
                                        "Unable to cast " +
                                            e +
                                            " [" +
                                            typeof e +
                                            "] to bounding box"
                                    );
                                }
                                function kr(e, t) {
                                    if (F()(e) || "" === e) return "";
                                    if (t[e]) return e;
                                    e = e.toLowerCase();
                                    for (const n in t)
                                        if (
                                            Object.prototype.hasOwnProperty.call(
                                                t,
                                                n
                                            ) &&
                                            "defaultValue" !== n &&
                                            Object.prototype.hasOwnProperty.call(
                                                t[n].synonyms,
                                                e
                                            )
                                        )
                                            return n;
                                    return (
                                        console.warn(
                                            "Value provided is invalid (" +
                                                e +
                                                "). Default value (" +
                                                t.defaultValue.value +
                                                ") will be used instead."
                                        ),
                                        t.defaultValue.value
                                    );
                                }
                                function Cr(e) {
                                    const t = jr(e);
                                    return Tr(t[0]) + "," + Ir(t[1]);
                                }
                                function Lr(e) {
                                    return V()(e) && e.indexOf("circle") > -1
                                        ? (function (e) {
                                              const t = e.match(k);
                                              Er(
                                                  !(t && t[1] && t[2] && t[3]),
                                                  "Unable to cast " +
                                                      e +
                                                      " [" +
                                                      typeof e +
                                                      "] to circle"
                                              );
                                              const n = parseFloat(t[2]),
                                                  r = parseFloat(t[1]),
                                                  o = parseFloat(t[3]);
                                              return (
                                                  Er(
                                                      !isFinite(n) ||
                                                          !isFinite(r),
                                                      "Unable to cast " +
                                                          e +
                                                          " [" +
                                                          typeof e +
                                                          "] to circle"
                                                  ),
                                                  "circle(" +
                                                      n +
                                                      "," +
                                                      r +
                                                      "," +
                                                      o +
                                                      ")"
                                              );
                                          })(e)
                                        : Array.isArray(e) && 3 === e.length
                                        ? "circle(" +
                                          Tr(e[1]) +
                                          "," +
                                          Ir(e[0]) +
                                          "," +
                                          e[2] +
                                          ")"
                                        : Cr(e);
                                }
                                function Rr(e) {
                                    const t = [];
                                    for (const n in e)
                                        Object.prototype.hasOwnProperty.call(
                                            e,
                                            n
                                        ) && t.push(Cr(e[n]));
                                    return t;
                                }
                                function Dr(e) {
                                    if (!V()(e)) return e;
                                    const t = e.split(",");
                                    return { latitude: t[0], longitude: t[1] };
                                }
                                function Vr(e) {
                                    return (function (e) {
                                        let t = e.minLon,
                                            n = e.maxLon,
                                            r = e.minLat,
                                            o = e.maxLat;
                                        if (n - t > 360) (n = 180), (t = -180);
                                        else {
                                            if (n > 270) {
                                                const e = Math.ceil(t / 360);
                                                (n -= 360 * e), (t -= 360 * e);
                                            }
                                            if (t < -270) {
                                                const e = Math.ceil(-n / 360);
                                                (n += 360 * e), (t += 360 * e);
                                            }
                                        }
                                        return (
                                            (r = r < -90 ? -90 : r),
                                            (o = o > 90 ? 90 : o),
                                            {
                                                minLon: t,
                                                minLat: r,
                                                maxLon: n,
                                                maxLat: o,
                                            }
                                        );
                                    })(Ar(e));
                                }
                                function Mr(e) {
                                    return Cr(e);
                                }
                                function Fr(e) {
                                    if (e && e instanceof Date)
                                        return e.toISOString();
                                    if (!e || !V()(e))
                                        throw new TypeError(
                                            "Unable to cast " +
                                                e +
                                                " [" +
                                                typeof e +
                                                "] to datetime value."
                                        );
                                    return (
                                        "now" !== e &&
                                            (e = new Date(e).toISOString()),
                                        e
                                    );
                                }
                                function Ur(e) {
                                    let t;
                                    Er(
                                        !e || !Array.isArray(e),
                                        "Unable to cast " +
                                            e +
                                            " [" +
                                            typeof e +
                                            "] to geometry list (array)"
                                    );
                                    for (const n in e)
                                        Object.prototype.hasOwnProperty.call(
                                            e,
                                            n
                                        ) &&
                                            ((t = e[n]),
                                            "POLYGON" === t.type
                                                ? (t.vertices = Rr(t.vertices))
                                                : "CIRCLE" === t.type &&
                                                  (t.position = Cr(
                                                      t.position
                                                  )));
                                    return e;
                                }
                                function Nr(e) {
                                    return kr(e, z);
                                }
                                function Br(e) {
                                    if (!e) return [];
                                    if (V()(e))
                                        return (e = e
                                            .trim()
                                            .replace(/\s*[,;]\s*/g, ",")).split(
                                            /[,;]+/
                                        );
                                    if (Array.isArray(e)) return e;
                                    throw new TypeError(
                                        "Unable to cast " +
                                            e +
                                            " [" +
                                            typeof e +
                                            "] to array of strings"
                                    );
                                }
                                function Wr(e) {
                                    return Math.round(Number(e));
                                }
                                function qr(e) {
                                    if (V()(e)) return e;
                                    if (!Array.isArray(e))
                                        throw new TypeError(
                                            "An array is required"
                                        );
                                    return e.join(":");
                                }
                                function zr(e) {
                                    if (Array.isArray(e)) return e.join();
                                    throw new TypeError("An array is required");
                                }
                                function Gr(e) {
                                    return xr()(e);
                                }
                                const Hr = {
                                    key: { validators: [H] },
                                    trackingId: {
                                        validators: [we],
                                        application: ut,
                                        defaultValue: ht.v4,
                                    },
                                    maxDetourTime: {
                                        validators: [Te(1, 3600)],
                                        required: !0,
                                    },
                                    spreadingMode: {
                                        validators: [
                                            Z(["auto"], "spreading mode"),
                                        ],
                                    },
                                    route: {
                                        required: !0,
                                        converters: [
                                            function (e) {
                                                return {
                                                    points: e
                                                        .map(jr)
                                                        .map((e) => {
                                                            let [t, n] = e;
                                                            return {
                                                                lat: t,
                                                                lon: n,
                                                            };
                                                        }),
                                                };
                                            },
                                        ],
                                        validators: [
                                            function (e) {
                                                let t;
                                                if (void 0 === e.points)
                                                    throw new TypeError(
                                                        "Invalid structure of the route object"
                                                    );
                                                if (
                                                    ((t = e.points),
                                                    t &&
                                                        !(
                                                            Array.isArray(t) &&
                                                            t.length > 2
                                                        ))
                                                )
                                                    throw new TypeError(
                                                        "Provided route array " +
                                                            t +
                                                            " is not valid. It should be an array with at least 2 points."
                                                    );
                                                return t.forEach(he), e;
                                            },
                                        ],
                                        application: it,
                                    },
                                    query: {
                                        required: !0,
                                        validators: [Ie],
                                        application: st,
                                    },
                                    limit: { validators: [Te(1, 20)] },
                                    type: {
                                        validators: [Ie],
                                        defaultValue: "searchAlongRoute",
                                        application: st,
                                    },
                                    brandSet: { validators: [Ie] },
                                    categorySet: { validators: [Ie] },
                                    connectorSet: { validators: [Le] },
                                    minPowerKW: { validators: [K] },
                                    maxPowerKW: { validators: [K] },
                                    openingHours: {
                                        validators: [
                                            Z(
                                                ["nextSevenDays"],
                                                "openingHours parameter"
                                            ),
                                        ],
                                    },
                                    timeZone: {
                                        validators: [
                                            Z(["iana"], "timeZone parameter"),
                                        ],
                                    },
                                    sortBy: {
                                        validators: [
                                            Z(
                                                [
                                                    "detourTime",
                                                    "detourOffset",
                                                    "detourDistance",
                                                ],
                                                "sortBy"
                                            ),
                                        ],
                                    },
                                    detourOffset: { validators: [_e] },
                                    view: { validators: [Ie] },
                                };
                                function Kr(e, t) {
                                    const n = pr(It),
                                        r = br(100, {
                                            single: Pt,
                                            batchSync: Ot,
                                            batch: _t,
                                        });
                                    return bn(
                                        Hr,
                                        v,
                                        "alongRouteSearch",
                                        (e, t) =>
                                            n(Hr, e, t).then((e) => ft(e, ot)),
                                        (e, t) =>
                                            r(Hr, e, t).then((e) => ft(e, ot))
                                    )(e, t);
                                }
                                const Zr = "combustion",
                                    $r = "electric",
                                    Qr = "any";
                                function Xr(e) {
                                    if (isNaN(parseFloat(e)) || !isFinite(e))
                                        throw new Error(
                                            "A value parsable to float is expected, but " +
                                                e +
                                                " [" +
                                                typeof e +
                                                "] given"
                                        );
                                }
                                function Jr(e) {
                                    const t = {};
                                    e.forEach(function (e) {
                                        const n = e.split(",");
                                        if (2 !== n.length)
                                            throw new Error(
                                                "Invalid number of parameters in the pair around " +
                                                    e
                                            );
                                        if (0 === n[0].trim().length)
                                            throw new Error(
                                                "Speed value must not be empty."
                                            );
                                        if (0 === n[1].trim().length)
                                            throw new Error(
                                                "Consumption value must not be empty."
                                            );
                                        if (
                                            (Xr(n[0]),
                                            Xr(n[1]),
                                            Object.prototype.hasOwnProperty.call(
                                                t,
                                                parseFloat(n[0])
                                            ))
                                        )
                                            throw new Error(
                                                "Duplicate speed: " + n[0]
                                            );
                                        t[parseFloat(n[0])] = parseFloat(n[1]);
                                    }),
                                        Object.keys(t).length > 1 &&
                                            (function (e) {
                                                const t = Object.keys(e).sort(
                                                        function (e, t) {
                                                            return (
                                                                parseFloat(e) >
                                                                parseFloat(t)
                                                            );
                                                        }
                                                    ),
                                                    n = t.length;
                                                if (e[t[n - 2]] > e[t[n - 1]])
                                                    throw new Error(
                                                        "Consumption for two highest speeds should be increasing"
                                                    );
                                            })(t);
                                }
                                function Yr(e, t) {
                                    if (
                                        e.vehicleEngineType &&
                                        e.vehicleEngineType !== t &&
                                        t !== Qr
                                    )
                                        throw new Error(
                                            "Expecting vehicleEngineType set to " +
                                                t
                                        );
                                }
                                function eo(e, t, n) {
                                    if (!e[t] || !e[n])
                                        throw new Error(
                                            "Missing dependant parameter. Expecting both defined: " +
                                                t +
                                                ", " +
                                                n
                                        );
                                }
                                function to(e) {
                                    if (
                                        "bicycle" === e.travelMode ||
                                        "pedestrian" === e.travelMode
                                    )
                                        throw new Error(
                                            "Consumption model parameters cannot be set if travelMode is set to bicycle or pedestrian"
                                        );
                                }
                                function no(e) {
                                    if (
                                        !e.constantSpeedConsumptionInLitersPerHundredkm &&
                                        !e.constantSpeedConsumptionInkWhPerHundredkm
                                    )
                                        throw new Error(
                                            "Consumption model cannot be used without setting constant speed consumption parameter"
                                        );
                                }
                                function ro(e) {
                                    return (t, n) => {
                                        if (null == t) return;
                                        if ((to(n), Yr(n, e), !V()(t)))
                                            throw new TypeError(
                                                'Expecting a String like "15.2,12.2:8.0,9.0"'
                                            );
                                        const r = t.split(":");
                                        if (r.length < 1 || r.length > 25)
                                            throw new Error(
                                                "Incorrect amount of speed-consumption pairs provided. Expecting 1-25, but got " +
                                                    t.length
                                            );
                                        Jr(r);
                                    };
                                }
                                function oo(e, t) {
                                    return function (n, r) {
                                        if (
                                            n &&
                                            (to(r),
                                            no(r),
                                            Yr(r, e),
                                            Xr(n),
                                            n < 0)
                                        )
                                            throw new Error(
                                                t + ": Expecting positive value"
                                            );
                                    };
                                }
                                function ao(e, t) {
                                    return function (n, r) {
                                        n &&
                                            (to(r),
                                            no(r),
                                            Yr(r, Qr),
                                            eo(r, e, t),
                                            eo(r, e, "vehicleWeight"),
                                            r.vehicleEngineType === Zr &&
                                                eo(
                                                    r,
                                                    e,
                                                    "fuelEnergyDensityInMJoulesPerLiter"
                                                ),
                                            (function (e, t, n) {
                                                if (e[t] * e[n] > 1)
                                                    throw new Error(
                                                        "Product of " +
                                                            t +
                                                            " and " +
                                                            n +
                                                            " cannot exceed 1"
                                                    );
                                            })(r, e, t),
                                            Xr(n));
                                    };
                                }
                                function io(e, t) {
                                    return function (n, r) {
                                        n &&
                                            (to(r),
                                            no(r),
                                            Yr(r, $r),
                                            eo(r, e, t),
                                            Xr(n));
                                    };
                                }
                                function so(e, t) {
                                    let n, r;
                                    if ("electric" === t.vehicleEngineType) {
                                        if (
                                            ((n = t.currentChargeInkWh),
                                            (r = t.energyBudgetInkWh),
                                            r > n)
                                        )
                                            throw new Error(
                                                "Energy budget may not be greater than current energy."
                                            );
                                    } else if (
                                        ((n = t.currentFuelInLiters),
                                        (r = t.fuelBudgetInLiters),
                                        r > n)
                                    )
                                        throw new Error(
                                            "Fuel budget may not be greater than current fuel."
                                        );
                                    if (r < 0)
                                        throw new Error(
                                            "Budget may not be negative."
                                        );
                                }
                                function co(e, t, n) {
                                    const r =
                                            "constantSpeedConsumptionInLitersPerHundredkm" in
                                            t,
                                        o =
                                            "constantSpeedConsumptionInkWhPerHundredkm" in
                                            t,
                                        a = "electric" === t.vehicleEngineType;
                                    if ("energyBudgetInkWh" === n && e) {
                                        if (!a)
                                            throw new Error(
                                                'Engine type should be "electric" when energyBudgetInkWh is set'
                                            );
                                        if (!o)
                                            throw new Error(
                                                "Missing constant speed consumption for electric engine."
                                            );
                                    } else if (
                                        "fuelBudgetInLiters" === n &&
                                        e
                                    ) {
                                        if (a)
                                            throw new Error(
                                                'Engine type should be "combustion" or undefined when fuelBudgetInLiters is set'
                                            );
                                        if (!r)
                                            throw new Error(
                                                "Missing constant speed consumption for combustion engine."
                                            );
                                    }
                                }
                                function lo(e, t) {
                                    return function (n, r) {
                                        if (
                                            n &&
                                            Object.prototype.hasOwnProperty.call(
                                                r,
                                                t
                                            ) &&
                                            P(r[t])
                                        )
                                            throw new Error(
                                                e +
                                                    " parameter cannot be used in conjunction with " +
                                                    t
                                            );
                                    };
                                }
                                function uo(e, t) {
                                    return function (n, r) {
                                        if (
                                            n &&
                                            !Object.prototype.hasOwnProperty.call(
                                                r,
                                                t
                                            )
                                        )
                                            throw new Error(
                                                t +
                                                    " must be specified when using with " +
                                                    e
                                            );
                                    };
                                }
                                function po(e, t) {
                                    const n = sr()(t.query),
                                        r = sr()(t.brandSet),
                                        o = sr()(t.categorySet);
                                    if (n && r && o)
                                        throw new Error(
                                            "Empty query parameter is only allowed when used with brandSet or categorySet filters"
                                        );
                                }
                                function fo(e, t) {
                                    const n =
                                            t.recuperationInkWhPerkmAltitudeLoss,
                                        r = t.consumptionInkWhPerkmAltitudeGain;
                                    if ((Xr(n), Xr(r), r < n))
                                        throw new Error(
                                            "consumptionInkWhPerkmAltitudeGain must be greater than recuperationInkWhPerkmAltitudeLoss"
                                        );
                                    if (r > 500)
                                        throw new Error(
                                            "recuperationInkWhPerkmAltitudeLoss and less than 500.0"
                                        );
                                    if (n < 0)
                                        throw new Error(
                                            "recuperationInkWhPerkmAltitudeLoss must be greater than 0.0"
                                        );
                                }
                                var ho = () => ({
                                    __all: { validators: [po] },
                                    key: { validators: [Ie] },
                                    trackingId: {
                                        validators: [we],
                                        application: ut,
                                        defaultValue: ht.v4,
                                    },
                                    query: {
                                        validators: [Ie],
                                        application: st,
                                        defaultValue: "",
                                    },
                                    typeahead: { validators: [_e] },
                                    limit: { validators: [Ue] },
                                    offset: { validators: [Ne], name: "ofs" },
                                    language: {
                                        validators: [ke],
                                        converters: [Nr],
                                    },
                                    countrySet: { validators: [Ce] },
                                    radius: { validators: [Oe] },
                                    center: {
                                        converters: [Mr],
                                        validators: [Me],
                                        cast: (e, t) => {
                                            const n = e.split(",");
                                            (t.lat = n[0]), (t.lon = n[1]);
                                        },
                                    },
                                    type: {
                                        validators: [Ie],
                                        defaultValue: "search",
                                        application: st,
                                    },
                                    bestResult: {
                                        validators: [_e],
                                        cast: (e, t) => {
                                            e && ((t.limit = 1), (t.ofs = 0));
                                        },
                                    },
                                    protocol: {
                                        validators: [
                                            Z(["http", "https"], "protocol"),
                                        ],
                                    },
                                    extendedPostalCodesFor: {
                                        validators: [Ie],
                                    },
                                    view: {
                                        validators: [
                                            Z(
                                                [
                                                    "IL",
                                                    "MA",
                                                    "IN",
                                                    "PK",
                                                    "Unified",
                                                    "RU",
                                                    "TR",
                                                    "AR",
                                                    "CN",
                                                ],
                                                "view"
                                            ),
                                        ],
                                    },
                                    brandSet: { validators: [Ie] },
                                    categorySet: { validators: [Ie] },
                                    connectorSet: { validators: [Le] },
                                    minPowerKW: { validators: [K] },
                                    maxPowerKW: { validators: [K] },
                                    openingHours: {
                                        validators: [
                                            Z(
                                                ["nextSevenDays"],
                                                "openingHours parameter"
                                            ),
                                        ],
                                    },
                                    timeZone: {
                                        validators: [
                                            Z(["iana"], "timeZone parameter"),
                                        ],
                                    },
                                    mapcodes: { validators: [De] },
                                    fuelSet: { validators: [Re] },
                                    relatedPois: {
                                        validators: [
                                            Z(
                                                [
                                                    "off",
                                                    "child",
                                                    "parent",
                                                    "all",
                                                ],
                                                "relatedPois"
                                            ),
                                        ],
                                    },
                                });
                                const yo = () => ({
                                    validators: [xe],
                                    converters: [Vr],
                                    cast: (e, t) => {
                                        (t.topLeft = ""
                                            .concat(e.maxLat, ",")
                                            .concat(e.minLon)),
                                            (t.btmRight = ""
                                                .concat(e.minLat, ",")
                                                .concat(e.maxLon));
                                    },
                                });
                                class vo {
                                    constructor(e, t) {
                                        (this.options = e),
                                            (this.additionalOptions = t),
                                            (this.defaultFields = j(ho())),
                                            (this.fields = {});
                                    }
                                    _getRestService() {
                                        return {
                                            search: pr(It),
                                            batch: br(100, {
                                                single: Pt,
                                                batchSync: Ot,
                                                batch: _t,
                                            }),
                                        };
                                    }
                                    handleBatchServiceCall(e, t) {
                                        return this._getRestService()
                                            .batch(this.fields, e, t)
                                            .then((e) => ft(e, at));
                                    }
                                    handleServiceCall(e, t) {
                                        return this._getRestService()
                                            .search(this.fields, e, t)
                                            .then((t) => {
                                                let { data: n, trackingId: r } =
                                                    t;
                                                return ft(
                                                    {
                                                        data: e.bestResult
                                                            ? n.results[0]
                                                            : n,
                                                        trackingId: r,
                                                    },
                                                    ot
                                                );
                                            });
                                    }
                                    construct(e) {
                                        this.fields = C(
                                            this.fields,
                                            this.defaultFields
                                        );
                                        return bn(
                                            this.fields,
                                            v,
                                            e || "search",
                                            this.handleServiceCall.bind(this),
                                            this.handleBatchServiceCall.bind(
                                                this
                                            )
                                        )(this.options, this.additionalOptions);
                                    }
                                }
                                class go extends vo {
                                    constructor(e, t) {
                                        super(e, t),
                                            (this.fields.type = {
                                                defaultValue: "categorySearch",
                                                visible: !1,
                                            }),
                                            (this.fields.boundingBox = yo());
                                    }
                                }
                                function mo(e, t) {
                                    return new go(e, t).construct(
                                        "categorySearch"
                                    );
                                }
                                const bo = {
                                    key: { validators: [H] },
                                    chargingAvailability: {
                                        validators: [Ie],
                                        required: !0,
                                    },
                                    trackingId: {
                                        validators: [we],
                                        application: ut,
                                        defaultValue: ht.v4,
                                    },
                                    connectorSet: { validators: [Le] },
                                    minPowerKW: { validators: [K] },
                                    maxPowerKW: { validators: [K] },
                                };
                                function wo(e, t) {
                                    const n = pr(Vt),
                                        r = br(100, {
                                            single: Mt,
                                            batchSync: Ot,
                                            batch: _t,
                                        });
                                    return bn(
                                        bo,
                                        f,
                                        "chargingAvailability",
                                        function (e, t) {
                                            return n(bo, e, t).then(ft);
                                        },
                                        function (e, t) {
                                            return r(bo, e, t).then((e) =>
                                                ft(e, at)
                                            );
                                        }
                                    )(e, t);
                                }
                                class _o extends vo {
                                    constructor(e, t) {
                                        super(e, t),
                                            (this.fields.minFuzzyLevel = {
                                                validators: [Fe],
                                                defaultValue: 1,
                                            }),
                                            (this.fields.maxFuzzyLevel = {
                                                validators: [Fe],
                                                defaultValue: 2,
                                            }),
                                            (this.fields.idxSet = {
                                                validators: [Ie],
                                            }),
                                            (this.fields.entityTypeSet = {
                                                converters: [Gr, zr],
                                                validators: [Be],
                                            }),
                                            (this.fields.sessionId = {
                                                validators: [Ie],
                                            }),
                                            (this.fields.clientTime = {
                                                validators: [Ge],
                                            }),
                                            (this.fields.boundingBox = yo());
                                    }
                                }
                                function Oo(e, t) {
                                    return new _o(e, t).construct(
                                        "fuzzySearch"
                                    );
                                }
                                class Po extends vo {
                                    constructor(e, t) {
                                        super(e, t),
                                            (this.fields.type = {
                                                defaultValue: "geometrySearch",
                                                visible: !1,
                                                application: st,
                                            }),
                                            (this.fields.key = {
                                                validators: [H],
                                            }),
                                            (this.fields.limit = {
                                                validators: [Ue],
                                            }),
                                            (this.fields.language = {
                                                validators: [ke],
                                            }),
                                            (this.fields.geometryList = {
                                                validators: [qe],
                                                converters: [Ur],
                                                application: it,
                                            }),
                                            (this.fields.idxSet = {
                                                validators: [Ie],
                                            }),
                                            (this.fields.protocol = {
                                                validators: [
                                                    Z(
                                                        ["http", "https"],
                                                        "protocol"
                                                    ),
                                                ],
                                            }),
                                            (this.fields.extendedPostalCodesFor =
                                                { validators: [Ie] }),
                                            (this.fields.entityTypeSet = {
                                                converters: [Gr, zr],
                                                validators: [Be],
                                            }),
                                            (this.fields.boundingBox = yo());
                                    }
                                }
                                function So(e, t) {
                                    return new Po(e, t).construct(
                                        "geometrySearch"
                                    );
                                }
                                class xo extends vo {
                                    constructor(e, t) {
                                        super(e, t),
                                            (this.fields.__all = {
                                                validators: [],
                                            }),
                                            (this.fields.type = {
                                                defaultValue: "nearbySearch",
                                                visible: !1,
                                            }),
                                            (this.fields.query = {
                                                visible: !1,
                                            }),
                                            (this.fields.center = {
                                                required: !0,
                                            }),
                                            (this.fields.radius = {
                                                required: !1,
                                                validators: [Ee(1, 5e4)],
                                            }),
                                            (this.fields.typeahead = {
                                                visible: !1,
                                            });
                                    }
                                    _getRestService() {
                                        return {
                                            search: pr(Ct),
                                            batch: br(100, {
                                                single: Lt,
                                                batchSync: Ot,
                                                batch: _t,
                                            }),
                                        };
                                    }
                                }
                                function Eo(e, t) {
                                    return new xo(e, t).construct(
                                        "nearbySearch"
                                    );
                                }
                                const To = {
                                    key: { validators: [Ie] },
                                    trackingId: {
                                        validators: [we],
                                        application: ut,
                                        defaultValue: ht.v4,
                                    },
                                    entityId: {
                                        validators: [Ie],
                                        required: !0,
                                    },
                                    language: {
                                        validators: [ke],
                                        converters: [Nr],
                                    },
                                    relatedPois: {
                                        validators: [
                                            Z(
                                                [
                                                    "off",
                                                    "child",
                                                    "parent",
                                                    "all",
                                                ],
                                                "relatedPois"
                                            ),
                                        ],
                                    },
                                    mapcodes: { validators: [De] },
                                    timeZone: {
                                        validators: [
                                            Z(["iana"], "timeZone parameter"),
                                        ],
                                    },
                                    openingHours: {
                                        validators: [
                                            Z(
                                                ["nextSevenDays"],
                                                "openingHours parameter"
                                            ),
                                        ],
                                    },
                                    view: {
                                        validators: [
                                            Z(
                                                [
                                                    "AR",
                                                    "IL",
                                                    "MA",
                                                    "IN",
                                                    "PK",
                                                    "Unified",
                                                    "RU",
                                                    "TR",
                                                    "CN",
                                                ],
                                                "view"
                                            ),
                                        ],
                                    },
                                };
                                function Io(e, t) {
                                    const n = pr(Nt);
                                    return bn(To, v, "placeById", (e, t) =>
                                        n(To, e, t).then((e) => ft(e, ot))
                                    )(e, t);
                                }
                                const jo = {
                                    key: { validators: [Ie] },
                                    trackingId: {
                                        validators: [we],
                                        application: ut,
                                        defaultValue: ht.v4,
                                    },
                                    language: { validators: [ke] },
                                };
                                function Ao(e, t) {
                                    return bn(jo, v, "poiCategories", (e, t) =>
                                        pr(Dt)(jo, e, t).then(ft)
                                    )(e, t);
                                }
                                const ko = {
                                    key: { validators: [Ie], required: !0 },
                                    trackingId: {
                                        validators: [we],
                                        application: ut,
                                        defaultValue: ht.v4,
                                    },
                                    id: { validators: [Ie], required: !0 },
                                };
                                function Co(e, t) {
                                    const n = pr(Ft);
                                    return bn(
                                        ko,
                                        v,
                                        "poiDetails",
                                        function (e, t) {
                                            return n(ko, e, t).then(ft);
                                        }
                                    )(e, t);
                                }
                                const Lo = {
                                    key: { validators: [Ie], required: !0 },
                                    id: { validators: [Ie], required: !0 },
                                    height: {
                                        validators: [Se],
                                        converters: [Wr],
                                    },
                                    width: {
                                        validators: [Se],
                                        converters: [Wr],
                                    },
                                };
                                function Ro(e, t) {
                                    return bn(Lo, v, "poiPhotos", function (e) {
                                        return "https://" + yr(Ut, {}, e);
                                    })(e, t);
                                }
                                class Do extends vo {
                                    constructor(e, t) {
                                        super(e, t),
                                            (this.fields.type = {
                                                defaultValue: "poiSearch",
                                                visible: !1,
                                            }),
                                            (this.fields.boundingBox = yo());
                                    }
                                }
                                function Vo(e, t) {
                                    return new Do(e, t).construct("poiSearch");
                                }
                                const Mo = {
                                    key: { validators: [Ie] },
                                    trackingId: {
                                        validators: [we],
                                        application: ut,
                                        defaultValue: ht.v4,
                                    },
                                    query: {
                                        validators: [Ie],
                                        required: !0,
                                        application: st,
                                    },
                                    language: {
                                        validators: [ke],
                                        converters: [Nr],
                                        required: !0,
                                    },
                                    limit: { validators: [Ue] },
                                    countrySet: { validators: [Ce] },
                                    radius: { validators: [Oe] },
                                    resultSet: { validators: [Ie] },
                                    center: {
                                        converters: [Mr],
                                        validators: [Me],
                                        cast: (e, t) => {
                                            const n = e.split(",");
                                            (t.lat = n[0]), (t.lon = n[1]);
                                        },
                                    },
                                    sessionId: { validators: [Ie] },
                                    clientTime: { validators: [Ge] },
                                };
                                function Fo(e, t) {
                                    const n = pr(Rt);
                                    return bn(
                                        Mo,
                                        v,
                                        "autocomplete",
                                        function (e, t) {
                                            return n(Mo, e, t).then((e) =>
                                                ft(e)
                                            );
                                        }
                                    )(e, t);
                                }
                                const Uo = new Ze({ isLatLon: !0 }),
                                    No = (e) => {
                                        e.position &&
                                            (e.position = Uo.convert(
                                                e.position
                                            )),
                                            e.address &&
                                                e.address.boundingBox &&
                                                ((e.address.boundingBox.northEast =
                                                    Uo.convert(
                                                        e.address.boundingBox
                                                            .northEast
                                                    )),
                                                (e.address.boundingBox.southWest =
                                                    Uo.convert(
                                                        e.address.boundingBox
                                                            .southWest
                                                    )));
                                    };
                                function Bo(e) {
                                    return (
                                        e.addresses.forEach((e) => {
                                            Array.isArray(e) &&
                                                e.forEach((e) => {
                                                    No(e);
                                                }),
                                                No(e);
                                        }),
                                        e
                                    );
                                }
                                function Wo(e) {
                                    return e.batchItems instanceof Array
                                        ? ((e.batchItems = e.batchItems.map(
                                              (e) =>
                                                  e.response.error
                                                      ? {
                                                            error: e.response
                                                                .error,
                                                        }
                                                      : Bo(e.response)
                                          )),
                                          e)
                                        : null;
                                }
                                function qo(e, t) {
                                    (this.options = e),
                                        (this.additionalOptions = t),
                                        (this.fields = {});
                                }
                                function zo(e) {
                                    return new qo(e).construct();
                                }
                                (qo.prototype.TYPE = {
                                    reverseGeocode: "reverseGeocode",
                                    crossStreetLookup:
                                        "reverseGeocode/crossStreet",
                                }),
                                    (qo.prototype.construct = function (e) {
                                        return bn(
                                            C(this.fields, this.defaultFields),
                                            v,
                                            e || "reverseGeocodeBase",
                                            this.handleServiceCall.bind(this),
                                            this.handleBatchServiceCall.bind(
                                                this
                                            )
                                        )(this.options, this.additionalOptions);
                                    }),
                                    (qo.prototype.handleServiceCall = function (
                                        e,
                                        t
                                    ) {
                                        return pr(xt)(this.fields, e, t).then(
                                            (e) => ft(e, Bo)
                                        );
                                    }),
                                    (qo.prototype.handleBatchServiceCall =
                                        function (e, t) {
                                            return br(100, {
                                                single: Et,
                                                batch: _t,
                                                batchSync: Ot,
                                            })(this.fields, e, t).then((e) =>
                                                ft(e, Wo)
                                            );
                                        }),
                                    (zo.prototype.constructor = qo);
                                const Go = "reverseGeocode",
                                    Ho = "reverseGeocode/crossStreet",
                                    Ko = {
                                        key: { validators: [Ie] },
                                        trackingId: {
                                            validators: [we],
                                            application: ut,
                                            defaultValue: ht.v4,
                                        },
                                        language: { validators: [ke] },
                                        position: {
                                            converters: [Mr],
                                            validators: [Me],
                                            required: !0,
                                            application: st,
                                        },
                                        heading: { validators: [K] },
                                        radius: { validators: [Oe] },
                                        protocol: {
                                            validators: [
                                                Z(
                                                    ["http", "https"],
                                                    "protocol"
                                                ),
                                            ],
                                        },
                                        view: {
                                            validators: [
                                                Z(
                                                    [
                                                        "AR",
                                                        "IL",
                                                        "MA",
                                                        "IN",
                                                        "PK",
                                                        "Unified",
                                                        "RU",
                                                        "TR",
                                                        "CN",
                                                    ],
                                                    "view"
                                                ),
                                            ],
                                        },
                                        allowFreeformNewline: {
                                            validators: [_e],
                                        },
                                    },
                                    Zo = {
                                        type: {
                                            defaultValue: Go,
                                            visible: !1,
                                            application: st,
                                        },
                                        entityType: {
                                            converters: [Gr, zr],
                                            validators: [Be],
                                        },
                                        returnSpeedLimit: { validators: [_e] },
                                        number: { validators: [Ie] },
                                        returnRoadUse: { validators: [_e] },
                                        roadUse: {
                                            converters: [
                                                function (e) {
                                                    if (V()(e))
                                                        return (
                                                            '["' +
                                                            e
                                                                .replace(
                                                                    /["']|^\s+|\s+$/g,
                                                                    ""
                                                                )
                                                                .split(/[\s,]+/)
                                                                .join('","') +
                                                            '"]'
                                                        );
                                                    if (Array.isArray(e)) {
                                                        for (
                                                            let t = 0;
                                                            t < e.length;
                                                            t += 1
                                                        )
                                                            e[t] = String(
                                                                e[t]
                                                            ).replace(
                                                                /["']|^\s+|\s+$/g,
                                                                ""
                                                            );
                                                        return (
                                                            '["' +
                                                            e.join('","') +
                                                            '"]'
                                                        );
                                                    }
                                                    throw new TypeError(
                                                        "Unable to cast " +
                                                            e +
                                                            " [" +
                                                            typeof e +
                                                            "] to road use string"
                                                    );
                                                },
                                            ],
                                            validators: [
                                                function (e) {
                                                    const t = [
                                                        "LimitedAccess",
                                                        "Arterial",
                                                        "Terminal",
                                                        "Ramp",
                                                        "Rotary",
                                                        "LocalStreet",
                                                    ];
                                                    oe(
                                                        !V()(e) ||
                                                            !e.match(
                                                                /^\[("\w*",?)+\]$/
                                                            ),
                                                        "Road use is expected, but " +
                                                            e +
                                                            "  [" +
                                                            typeof e +
                                                            "] given"
                                                    );
                                                    const n = e
                                                        .replace(/["[\]]/g, "")
                                                        .split(",");
                                                    for (
                                                        let r = 0;
                                                        r < n.length;
                                                        r += 1
                                                    )
                                                        oe(
                                                            t.indexOf(n[r]) < 0,
                                                            "Road use (" +
                                                                t +
                                                                ") is expected, but " +
                                                                e +
                                                                "  [" +
                                                                typeof e +
                                                                "] given"
                                                        );
                                                    return e;
                                                },
                                            ],
                                        },
                                        streetNumber: { validators: [Ie] },
                                        returnMatchType: { validators: [_e] },
                                        mapcodes: { validators: [De] },
                                        dateTime: {
                                            validators: [
                                                function (e) {
                                                    return be(e, "dateTime");
                                                },
                                            ],
                                        },
                                    },
                                    $o = {
                                        type: {
                                            defaultValue: Ho,
                                            visible: !1,
                                            application: st,
                                        },
                                        limit: { validators: [Ue] },
                                    };
                                function Qo(e) {
                                    if (e === Go)
                                        return Object.assign({}, Ko, Zo);
                                    if (e === Ho)
                                        return Object.assign({}, Ko, $o);
                                    throw new Error(
                                        "Unsupported geocode type: " + e
                                    );
                                }
                                function Xo(e, t) {
                                    const n = zo.prototype.constructor;
                                    function r(e, t) {
                                        n.call(this, e, t),
                                            (this.fields = Qo(Go));
                                    }
                                    return (
                                        (r.prototype = new n()),
                                        (r.prototype.constructor = r),
                                        new r(e, t).construct("reverseGeocode")
                                    );
                                }
                                function Jo(e) {
                                    return e
                                        ? (Array.isArray(e.results) &&
                                              e.results.forEach((e) => {
                                                  Array.isArray(e)
                                                      ? e.forEach((e) => {
                                                            Je(e);
                                                        })
                                                      : Je(e);
                                              }),
                                          Je(e),
                                          Object.assign(e, {
                                              toGeoJson: () => nt(e),
                                          }))
                                        : e;
                                }
                                function Yo(e) {
                                    return e.batchItems instanceof Array
                                        ? ((e.batchItems = e.batchItems.map(
                                              (e) =>
                                                  e.response.error
                                                      ? {
                                                            error: e.response
                                                                .error,
                                                        }
                                                      : Jo(e.response)
                                          )),
                                          e)
                                        : null;
                                }
                                const ea = (() => ({
                                    extendedPostalCodesFor: {
                                        validators: [Ie],
                                    },
                                    type: {
                                        defaultValue: "geocode",
                                        application: st,
                                    },
                                    key: { validators: [Ie] },
                                    trackingId: {
                                        validators: [we],
                                        application: ut,
                                        defaultValue: ht.v4,
                                    },
                                    query: {
                                        validators: [Ie],
                                        required: !0,
                                        application: st,
                                    },
                                    typeahead: { validators: [_e] },
                                    limit: { validators: [Pe] },
                                    view: {
                                        validators: [
                                            Z(
                                                [
                                                    "AR",
                                                    "IL",
                                                    "MA",
                                                    "IN",
                                                    "PK",
                                                    "Unified",
                                                    "RU",
                                                    "TR",
                                                    "CN",
                                                ],
                                                "view"
                                            ),
                                        ],
                                    },
                                    offset: { validators: [Oe], name: "ofs" },
                                    language: { validators: [ke] },
                                    boundingBox: {
                                        validators: [xe],
                                        converters: [Vr],
                                        cast: (e, t) => {
                                            (t.topLeft = ""
                                                .concat(e.maxLat, ",")
                                                .concat(e.minLon)),
                                                (t.btmRight = ""
                                                    .concat(e.minLat, ",")
                                                    .concat(e.maxLon));
                                        },
                                    },
                                    center: {
                                        converters: [Mr],
                                        validators: [Me],
                                        cast: (e, t) => {
                                            const n = e.split(",");
                                            (t.lat = n[0]), (t.lon = n[1]);
                                        },
                                    },
                                    countrySet: { validators: [Ce] },
                                    radius: { validators: [Oe] },
                                    bestResult: {
                                        validators: [_e],
                                        cast: (e, t) => {
                                            e && ((t.limit = 1), (t.ofs = 0));
                                        },
                                    },
                                    protocol: {
                                        validators: [
                                            Z(["http", "https"], "protocol"),
                                        ],
                                    },
                                    timeZone: {
                                        validators: [
                                            Z(["iana"], "timeZone parameter"),
                                        ],
                                    },
                                    entityTypeSet: {
                                        converters: [Gr, zr],
                                        validators: [Be],
                                    },
                                }))();
                                function ta(e, t) {
                                    const n = pr(St),
                                        r = br(100, {
                                            single: Pt,
                                            batchSync: Ot,
                                            batch: _t,
                                        });
                                    return bn(
                                        ea,
                                        v,
                                        "geocode",
                                        function (e, t) {
                                            return n(ea, e, t).then((t) => {
                                                let { data: n, trackingId: r } =
                                                    t;
                                                return ft(
                                                    {
                                                        data: e.bestResult
                                                            ? n.results[0]
                                                            : n,
                                                        trackingId: r,
                                                    },
                                                    Jo
                                                );
                                            });
                                        },
                                        function (e, t) {
                                            return r(ea, e, t).then((e) =>
                                                ft(e, Yo)
                                            );
                                        }
                                    )(e, t);
                                }
                                function na(e, t) {
                                    const n = zo.prototype.constructor;
                                    function r(e, t) {
                                        n.call(this, e, t),
                                            (this.fields = Qo(Ho));
                                    }
                                    return (
                                        (r.prototype = new n()),
                                        (r.prototype.constructor = r),
                                        new r(e, t).construct(
                                            "crossStreetLookup"
                                        )
                                    );
                                }
                                const ra = {
                                    key: { validators: [Ie] },
                                    trackingId: {
                                        validators: [we],
                                        application: ut,
                                        defaultValue: ht.v4,
                                    },
                                    countryCode: {
                                        validators: [Ae],
                                        required: !0,
                                    },
                                    limit: { validators: [Ue] },
                                    view: {
                                        validators: [
                                            Z(
                                                [
                                                    "AR",
                                                    "IL",
                                                    "MA",
                                                    "IN",
                                                    "PK",
                                                    "Unified",
                                                    "RU",
                                                    "TR",
                                                    "CN",
                                                ],
                                                "view"
                                            ),
                                        ],
                                    },
                                    offset: { validator: [Oe], name: "ofs" },
                                    language: { validators: [ke] },
                                    streetNumber: { validators: [Ie] },
                                    streetName: { validators: [Ie] },
                                    crossStreet: { validators: [Ie] },
                                    municipality: { validators: [Ie] },
                                    municipalitySubdivision: {
                                        validators: [Ie],
                                    },
                                    countryTertiarySubdivision: {
                                        validators: [Ie],
                                    },
                                    countrySecondarySubdivision: {
                                        validators: [Ie],
                                    },
                                    countrySubdivision: { validators: [Ie] },
                                    postalCode: { validators: [Ie] },
                                    protocol: {
                                        validators: [
                                            Z(["http", "https"], "protocol"),
                                        ],
                                    },
                                    bestResult: { validators: [_e] },
                                    timeZone: {
                                        validators: [
                                            Z(["iana"], "timeZone parameter"),
                                        ],
                                    },
                                    extendedPostalCodesFor: {
                                        validators: [Ie],
                                    },
                                    entityTypeSet: {
                                        converters: [Gr, zr],
                                        validators: [Be],
                                    },
                                };
                                function oa(e) {
                                    (function (e) {
                                        const t = Boolean(e.bestResult);
                                        return delete e.bestResult, t;
                                    })(e) && ((e.limit = 1), (e.offset = 0));
                                }
                                function aa(e, t) {
                                    const n = br(100, {
                                            single: jt,
                                            batch: _t,
                                            batchSync: Ot,
                                        }),
                                        r = pr(Tt);
                                    return bn(
                                        ra,
                                        v,
                                        "structuredGeocode",
                                        function (e, t) {
                                            const n = Boolean(e.bestResult);
                                            return (
                                                oa(e),
                                                r(ra, e, t).then((e) => {
                                                    let {
                                                        data: t,
                                                        trackingId: r,
                                                    } = e;
                                                    return ft(
                                                        {
                                                            data: n
                                                                ? t.results[0]
                                                                : t,
                                                            trackingId: r,
                                                        },
                                                        Jo
                                                    );
                                                })
                                            );
                                        },
                                        function (e, t) {
                                            return (
                                                e.batchItems.forEach(oa),
                                                n(ra, e, t).then((e) =>
                                                    ft(e, Yo)
                                                )
                                            );
                                        }
                                    )(e, t);
                                }
                                const ia = {
                                    key: { validators: [H] },
                                    trackingId: {
                                        validators: [we],
                                        application: ut,
                                        defaultValue: ht.v4,
                                    },
                                    routeType: {
                                        validators: [
                                            Z(
                                                [
                                                    "fastest",
                                                    "shortest",
                                                    "eco",
                                                    "thrilling",
                                                ],
                                                "route type"
                                            ),
                                        ],
                                    },
                                    traffic: { validators: [_e] },
                                    avoid: {
                                        validators: [
                                            We(
                                                [
                                                    "tollRoads",
                                                    "motorways",
                                                    "ferries",
                                                    "unpavedRoads",
                                                    "carpools",
                                                    "alreadyUsedRoads",
                                                ],
                                                "avoid"
                                            ),
                                        ],
                                        converters: [Br],
                                    },
                                    departAt: {
                                        validators: [
                                            function (e) {
                                                if (
                                                    "now" === e ||
                                                    (te(e) &&
                                                        Date.now() <
                                                            Date.parse(e))
                                                )
                                                    return e;
                                                throw new TypeError(
                                                    "Supported departAt is now or rfc3339 format and no earlier than now(), but " +
                                                        e +
                                                        " [" +
                                                        typeof e +
                                                        "] given"
                                                );
                                            },
                                        ],
                                        converters: [Fr],
                                    },
                                    arriveAt: {
                                        validators: [
                                            function (e) {
                                                if (
                                                    te(e) &&
                                                    Date.now() < Date.parse(e)
                                                )
                                                    return e;
                                                throw new TypeError(
                                                    "Supported arriveAt is rfc3339 format, but and no earlier than now() " +
                                                        e +
                                                        " [" +
                                                        typeof e +
                                                        "] given"
                                                );
                                            },
                                        ],
                                        converters: [Fr],
                                    },
                                    travelMode: {
                                        validators: [
                                            Z(
                                                [
                                                    "car",
                                                    "truck",
                                                    "taxi",
                                                    "bus",
                                                    "van",
                                                    "motorcycle",
                                                    "bicycle",
                                                    "pedestrian",
                                                ],
                                                "travel mode"
                                            ),
                                        ],
                                    },
                                    hilliness: {
                                        validators: [
                                            Z(
                                                ["low", "normal", "high"],
                                                "hilliness"
                                            ),
                                        ],
                                    },
                                    windingness: {
                                        validators: [
                                            Z(
                                                ["low", "normal", "high"],
                                                "windingness"
                                            ),
                                        ],
                                    },
                                    report: {
                                        validators: [
                                            Z(["effectiveSettings"], "report"),
                                        ],
                                    },
                                    vehicleEngineType: {
                                        validators: [
                                            Z(
                                                ["combustion", "electric"],
                                                "vehicle engine type"
                                            ),
                                        ],
                                    },
                                    vehicleMaxSpeed: { validators: [Oe] },
                                    vehicleWeight: {
                                        validators: [
                                            Oe,
                                            function (e, t) {
                                                if (
                                                    (function (e) {
                                                        return (
                                                            e.accelerationEfficiency ||
                                                            e.decelerationEfficiency ||
                                                            e.uphillEfficiency ||
                                                            e.downhillEfficiency
                                                        );
                                                    })(t) &&
                                                    void 0 === e
                                                )
                                                    throw new Error(
                                                        "vehicleWeight parameter must be set if any efficiency parameters is present"
                                                    );
                                            },
                                        ],
                                    },
                                    vehicleAxleWeight: { validators: [Oe] },
                                    vehicleLength: {
                                        validators: [Ee(0, Number.MAX_VALUE)],
                                    },
                                    vehicleWidth: {
                                        validators: [Ee(0, Number.MAX_VALUE)],
                                    },
                                    vehicleHeight: {
                                        validators: [Ee(0, Number.MAX_VALUE)],
                                    },
                                    vehicleCommercial: { validators: [_e] },
                                    vehicleLoadType: {
                                        validators: [
                                            We(
                                                [
                                                    "USHazmatClass1",
                                                    "USHazmatClass2",
                                                    "USHazmatClass3",
                                                    "USHazmatClass4",
                                                    "USHazmatClass5",
                                                    "USHazmatClass6",
                                                    "USHazmatClass7",
                                                    "USHazmatClass8",
                                                    "USHazmatClass9",
                                                    "otherHazmatExplosive",
                                                    "otherHazmatGeneral",
                                                    "otherHazmatHarmfulToWater",
                                                ],
                                                "vehicle load type"
                                            ),
                                        ],
                                        converters: [Br],
                                    },
                                    constantSpeedConsumptionInLitersPerHundredkm:
                                        {
                                            validators: [ro("combustion")],
                                            converters: [qr],
                                        },
                                    currentFuelInLiters: {
                                        validators: [
                                            oo(
                                                "combustion",
                                                "currentFuelInLiters"
                                            ),
                                        ],
                                    },
                                    auxiliaryPowerInLitersPerHour: {
                                        validators: [
                                            oo(
                                                "combustion",
                                                "auxiliaryPowerInLitersPerHour"
                                            ),
                                        ],
                                    },
                                    fuelEnergyDensityInMJoulesPerLiter: {
                                        validators: [
                                            function (e, t) {
                                                e &&
                                                    (to(t),
                                                    Xr(e),
                                                    no(t),
                                                    Yr(t, "combustion"),
                                                    (function (e, t) {
                                                        if (
                                                            !(
                                                                P(
                                                                    e.accelerationEfficiency
                                                                ) &&
                                                                P(
                                                                    e.decelerationEfficiency
                                                                ) &&
                                                                P(
                                                                    e.uphillEfficiency
                                                                ) &&
                                                                P(
                                                                    e.downhillEfficiency
                                                                )
                                                            )
                                                        )
                                                            throw new Error(
                                                                "Efficiency parameters are required when using " +
                                                                    t
                                                            );
                                                    })(
                                                        t,
                                                        "fuelEnergyDensityInMJoulesPerLiter"
                                                    ));
                                            },
                                        ],
                                    },
                                    accelerationEfficiency: {
                                        validators: [
                                            ao(
                                                "accelerationEfficiency",
                                                "decelerationEfficiency"
                                            ),
                                        ],
                                    },
                                    decelerationEfficiency: {
                                        validators: [
                                            ao(
                                                "decelerationEfficiency",
                                                "accelerationEfficiency"
                                            ),
                                        ],
                                    },
                                    uphillEfficiency: {
                                        validators: [
                                            ao(
                                                "uphillEfficiency",
                                                "downhillEfficiency"
                                            ),
                                        ],
                                    },
                                    downhillEfficiency: {
                                        validators: [
                                            ao(
                                                "downhillEfficiency",
                                                "uphillEfficiency"
                                            ),
                                        ],
                                    },
                                    constantSpeedConsumptionInkWhPerHundredkm: {
                                        validators: [ro("electric")],
                                        converters: [qr],
                                    },
                                    currentChargeInkWh: {
                                        validators: [
                                            io(
                                                "currentChargeInkWh",
                                                "maxChargeInkWh"
                                            ),
                                        ],
                                    },
                                    maxChargeInkWh: {
                                        validators: [
                                            io(
                                                "maxChargeInkWh",
                                                "currentChargeInkWh"
                                            ),
                                        ],
                                    },
                                    auxiliaryPowerInkW: {
                                        validators: [
                                            oo(
                                                "electric",
                                                "auxiliaryPowerInkW"
                                            ),
                                        ],
                                    },
                                    protocol: {
                                        validators: [
                                            Z(["http", "https"], "protocol"),
                                        ],
                                    },
                                    avoidAreas: {
                                        converters: [
                                            function (e) {
                                                if (!Array.isArray(e))
                                                    throw new TypeError(
                                                        "An array is required"
                                                    );
                                                return {
                                                    rectangles: e.map((e) => ({
                                                        southWestCorner: Dr(
                                                            Cr(
                                                                e.southWestCorner
                                                            )
                                                        ),
                                                        northEastCorner: Dr(
                                                            Cr(
                                                                e.northEastCorner
                                                            )
                                                        ),
                                                    })),
                                                };
                                            },
                                        ],
                                        application: it,
                                    },
                                    avoidVignette: {
                                        validators: [
                                            Ve.bind(void 0, !1),
                                            lo(
                                                "avoidVignette",
                                                "allowVignette"
                                            ),
                                        ],
                                        converters: [Br],
                                        application: it,
                                    },
                                    allowVignette: {
                                        validators: [
                                            Ve.bind(void 0, !0),
                                            lo(
                                                "allowVignette",
                                                "avoidVignette"
                                            ),
                                        ],
                                        converters: [Br],
                                        application: it,
                                    },
                                    recuperationInkWhPerkmAltitudeLoss: {
                                        validators: [
                                            uo(
                                                "recuperationInkWhPerkmAltitudeLoss",
                                                "consumptionInkWhPerkmAltitudeGain"
                                            ),
                                            fo,
                                        ],
                                    },
                                    consumptionInkWhPerkmAltitudeGain: {
                                        validators: [
                                            uo(
                                                "consumptionInkWhPerkmAltitudeGain",
                                                "recuperationInkWhPerkmAltitudeLoss"
                                            ),
                                            fo,
                                        ],
                                    },
                                    vehicleAdrTunnelRestrictionCode: {
                                        validators: [
                                            Z(
                                                ["B", "C", "D", "E"],
                                                "vehicleAdrTunnelRestrictionCode"
                                            ),
                                        ],
                                    },
                                };
                                let sa = {
                                    __all: {
                                        validators: [
                                            function (e, t) {
                                                const n = [
                                                    "fuelBudgetInLiters" in t,
                                                    "energyBudgetInkWh" in t,
                                                    "timeBudgetInSec" in t,
                                                    "distanceBudgetInMeters" in
                                                        t,
                                                ].filter((e) => e).length;
                                                if (0 === n || n > 1)
                                                    throw new Error(
                                                        "Exactly one of fuelBudgetInLiters, energyBudgetInkWh, timeBudgetInSec and distanceBudgetInMeters must be set."
                                                    );
                                            },
                                            function (e, t) {
                                                const n = "alreadyUsedRoads";
                                                if (
                                                    "avoid" in t &&
                                                    t.avoid.indexOf(n) > -1
                                                )
                                                    throw new Error(
                                                        n +
                                                            " is not allowed value for avoid parameter in Calculate Reachable Route request."
                                                    );
                                                if (
                                                    "travelMode" in t &&
                                                    [
                                                        "bicycle",
                                                        "pedestrian",
                                                    ].indexOf(t.travelMode) > -1
                                                )
                                                    throw new Error(
                                                        t.travelMode +
                                                            " is not allowed value for travelMode parameter in Calculate Reachable Route request."
                                                    );
                                                if ("arriveAt" in t)
                                                    throw new Error(
                                                        "arriveAt parameter is not allowed in Calculate Reachable Route request."
                                                    );
                                            },
                                        ],
                                    },
                                    origin: {
                                        validators: [Me],
                                        converters: [Mr],
                                        application: st,
                                    },
                                    fuelBudgetInLiters: {
                                        validators: [co, so],
                                    },
                                    energyBudgetInkWh: { validators: [co, so] },
                                    distanceBudgetInMeters: {
                                        validators: [Ee(0, Number.MAX_VALUE)],
                                    },
                                    timeBudgetInSec: {
                                        validators: [Ee(0, Number.MAX_VALUE)],
                                    },
                                };
                                sa = E(sa, ia);
                                const ca = new Ze();
                                var la = (e) => (
                                        e.reachableRange &&
                                            e.reachableRange.boundary &&
                                            Array.isArray(
                                                e.reachableRange.boundary
                                            ) &&
                                            ((e.reachableRange.boundary =
                                                ca.convert(
                                                    e.reachableRange.boundary
                                                )),
                                            (e.reachableRange.center =
                                                ca.convert(
                                                    e.reachableRange.center
                                                ))),
                                        Object.assign(e, {
                                            toGeoJson: () =>
                                                ((e) => ({
                                                    type: "Feature",
                                                    geometry: {
                                                        type: "Polygon",
                                                        coordinates: [
                                                            e.reachableRange.boundary.map(
                                                                (e) => [
                                                                    e.lng,
                                                                    e.lat,
                                                                ]
                                                            ),
                                                        ],
                                                    },
                                                }))(e),
                                        })
                                    ),
                                    ua = (e) =>
                                        Array.isArray(e.batchItems)
                                            ? ((e.batchItems = e.batchItems.map(
                                                  (e) =>
                                                      e.response.error
                                                          ? {
                                                                error: e
                                                                    .response
                                                                    .error,
                                                            }
                                                          : la(e.response)
                                              )),
                                              e)
                                            : null;
                                const pa = ((e) => {
                                    const t = j(sa);
                                    return (
                                        e instanceof Array &&
                                            e.forEach(function (e) {
                                                delete t[e];
                                            }),
                                        t
                                    );
                                })();
                                function da(e, t) {
                                    const n = pr(Wt),
                                        r = br(100, {
                                            batchSync: Gt,
                                            batch: zt,
                                            single: Zt,
                                        });
                                    return bn(
                                        pa,
                                        y,
                                        "calculateReachableRange",
                                        (e, t) =>
                                            n(pa, e, t).then((e) => ft(e, la)),
                                        (e, t) =>
                                            r(pa, e, t).then((e) => ft(e, ua))
                                    )(e, t);
                                }
                                function fa(e) {
                                    const t = [];
                                    for (let n = 0; n < e.length; n += 1)
                                        t.push([e[n].lng, e[n].lat]);
                                    return t;
                                }
                                function ha(e) {
                                    const t = e.legs.length > 1,
                                        n = (function (e) {
                                            return {
                                                type: "Feature",
                                                properties: {
                                                    summary: e.summary,
                                                    sections: e.sections,
                                                    segmentSummary: [],
                                                },
                                            };
                                        })(e);
                                    for (let r = 0; r < e.legs.length; r += 1)
                                        n.properties.segmentSummary.push(
                                            e.legs[r].summary
                                        ),
                                            e.legs[r].points &&
                                                ((n.geometry = n.geometry || {
                                                    coordinates: [],
                                                }),
                                                t
                                                    ? ((n.geometry.type =
                                                          "MultiLineString"),
                                                      n.geometry.coordinates.push(
                                                          fa(e.legs[r].points)
                                                      ))
                                                    : ((n.geometry.type =
                                                          "LineString"),
                                                      (n.geometry.coordinates =
                                                          fa(
                                                              e.legs[r].points
                                                          ))));
                                    return (
                                        e.guidance &&
                                            (n.properties.guidance =
                                                e.guidance),
                                        n
                                    );
                                }
                                const ya = new Ze(),
                                    va = (e, t, n) => {
                                        n && (e[t] = n);
                                    };
                                function ga(e) {
                                    const t = e.routes;
                                    return (
                                        t &&
                                            t.length &&
                                            t.forEach((e) => {
                                                e.legs.forEach((e) => {
                                                    e.points = ya.convert(
                                                        e.points
                                                    );
                                                });
                                            }),
                                        Object.assign(e, {
                                            toGeoJson: () =>
                                                ((e) => {
                                                    const t = {
                                                        type: "FeatureCollection",
                                                        features: [],
                                                    };
                                                    if (!e || !e.routes)
                                                        return t;
                                                    for (
                                                        let n = 0;
                                                        n < e.routes.length;
                                                        n += 1
                                                    )
                                                        t.features.push(
                                                            ha(e.routes[n])
                                                        );
                                                    return t;
                                                })(e),
                                            toRouteSectionsCollection: () =>
                                                ((e) => {
                                                    const t = [];
                                                    return e && e.routes
                                                        ? (e.routes.forEach(
                                                              (e) => {
                                                                  const n = [];
                                                                  for (
                                                                      let t = 0;
                                                                      t <
                                                                      e.legs
                                                                          .length;
                                                                      t += 1
                                                                  )
                                                                      n.push(
                                                                          ...e
                                                                              .legs[
                                                                              t
                                                                          ]
                                                                              .points
                                                                      );
                                                                  const r = {
                                                                      type: "FeatureCollection",
                                                                      features:
                                                                          [],
                                                                  };
                                                                  e.sections.forEach(
                                                                      (e) => {
                                                                          let t =
                                                                              n.slice(
                                                                                  e.startPointIndex,
                                                                                  e.endPointIndex +
                                                                                      1
                                                                              );
                                                                          t =
                                                                              t.map(
                                                                                  (
                                                                                      e
                                                                                  ) => [
                                                                                      e.lng,
                                                                                      e.lat,
                                                                                  ]
                                                                              );
                                                                          const o =
                                                                              {
                                                                                  type: "Feature",
                                                                                  geometry:
                                                                                      {
                                                                                          type: "LineString",
                                                                                      },
                                                                                  properties:
                                                                                      {},
                                                                              };
                                                                          (o.geometry.coordinates =
                                                                              t),
                                                                              va(
                                                                                  o.properties,
                                                                                  "sectionType",
                                                                                  e.sectionType
                                                                              ),
                                                                              va(
                                                                                  o.properties,
                                                                                  "travelMode",
                                                                                  e.travelMode
                                                                              ),
                                                                              va(
                                                                                  o.properties,
                                                                                  "countryCode",
                                                                                  e.countryCode
                                                                              ),
                                                                              va(
                                                                                  o.properties,
                                                                                  "simpleCategory",
                                                                                  e.simpleCategory
                                                                              ),
                                                                              va(
                                                                                  o.properties,
                                                                                  "effectiveSpeedInKmh",
                                                                                  e.effectiveSpeedInKmh
                                                                              ),
                                                                              va(
                                                                                  o.properties,
                                                                                  "delayInSeconds",
                                                                                  e.delayInSeconds
                                                                              ),
                                                                              va(
                                                                                  o.properties,
                                                                                  "magnitudeOfDelay",
                                                                                  e.delayInSeconds
                                                                              ),
                                                                              va(
                                                                                  o.properties,
                                                                                  "tec",
                                                                                  e.tec
                                                                              ),
                                                                              r.features.push(
                                                                                  o
                                                                              );
                                                                      }
                                                                  ),
                                                                      t.push(r);
                                                              }
                                                          ),
                                                          t)
                                                        : t;
                                                })(e),
                                        })
                                    );
                                }
                                function ma(e) {
                                    return Array.isArray(e.batchItems)
                                        ? ((e.batchItems = e.batchItems.map(
                                              (e) =>
                                                  e.response.error
                                                      ? {
                                                            error: e.response
                                                                .error,
                                                        }
                                                      : ga(e.response)
                                          )),
                                          e)
                                        : null;
                                }
                                let ba = {
                                    alternativeType: {
                                        validators: [
                                            Z(
                                                ["anyRoute", "betterRoute"],
                                                "alternativeType"
                                            ),
                                        ],
                                    },
                                    locations: {
                                        validators: [
                                            function (e) {
                                                const t = A,
                                                    n = k;
                                                e.constructor
                                                    .toString()
                                                    .indexOf("Array") > -1 &&
                                                    (e = e.join(":"));
                                                const r = new RegExp(
                                                    "^" +
                                                        t.source +
                                                        ":(?:(?:" +
                                                        t.source +
                                                        "|" +
                                                        n.source +
                                                        "):)*" +
                                                        t.source +
                                                        "$"
                                                );
                                                if (!e.match(r))
                                                    throw new TypeError(
                                                        "Routing location is expected. But " +
                                                            e +
                                                            " [" +
                                                            typeof e +
                                                            "] given"
                                                    );
                                                return e;
                                            },
                                        ],
                                        converters: [
                                            function (e) {
                                                const t = [];
                                                if (V()(e))
                                                    return e
                                                        .split(":")
                                                        .map((e) =>
                                                            e
                                                                .split(",")
                                                                .reverse()
                                                                .join(",")
                                                        )
                                                        .join(":");
                                                if (Array.isArray(e)) {
                                                    Er(
                                                        e.length < 2,
                                                        "Unable to cast " +
                                                            e +
                                                            " [" +
                                                            typeof e +
                                                            "] to routing locations string"
                                                    ),
                                                        t.push(Cr(e[0]));
                                                    for (
                                                        let n = 1;
                                                        n < e.length - 1;
                                                        n += 1
                                                    )
                                                        t.push(Lr(e[n]));
                                                    return (
                                                        t.push(
                                                            Cr(e[e.length - 1])
                                                        ),
                                                        t.join(":")
                                                    );
                                                }
                                                throw new TypeError(
                                                    "Unable to cast " +
                                                        e +
                                                        " [" +
                                                        typeof e +
                                                        "] to routing locations string"
                                                );
                                            },
                                        ],
                                        required: !0,
                                        application: st,
                                    },
                                    maxAlternatives: { validators: [Ee(0, 5)] },
                                    instructionsType: {
                                        validators: [
                                            Z(
                                                ["coded", "text", "tagged"],
                                                "instructions type"
                                            ),
                                        ],
                                    },
                                    language: {
                                        validators: [
                                            function (e) {
                                                const t = Object.keys(q);
                                                return T(
                                                    e,
                                                    t,
                                                    "Supported routing guidance language is expected to be one of: " +
                                                        t +
                                                        "), but " +
                                                        e +
                                                        " [" +
                                                        typeof e +
                                                        "] given"
                                                );
                                            },
                                        ],
                                        converters: [
                                            function (e) {
                                                return kr(e, q);
                                            },
                                        ],
                                    },
                                    computeBestOrder: { validators: [_e] },
                                    routeRepresentation: {
                                        validators: [
                                            Z(
                                                ["polyline", "none"],
                                                "route representation"
                                            ),
                                        ],
                                    },
                                    computeTravelTimeFor: {
                                        validators: [
                                            Z(
                                                ["none", "all"],
                                                "compute travel time for"
                                            ),
                                        ],
                                    },
                                    vehicleHeading: {
                                        validators: [Te(0, 359)],
                                    },
                                    minDeviationDistance: {
                                        validators: [
                                            Oe,
                                            lo(
                                                "minDeviationDistance",
                                                "arriveAt"
                                            ),
                                            uo(
                                                "minDeviationDistance",
                                                "supportingPoints"
                                            ),
                                        ],
                                    },
                                    minDeviationTime: {
                                        validators: [
                                            Oe,
                                            lo("minDeviationTime", "arriveAt"),
                                            uo(
                                                "minDeviationTime",
                                                "supportingPoints"
                                            ),
                                        ],
                                    },
                                    supportingPoints: {
                                        validators: [
                                            function (e) {
                                                if (!Array.isArray(e))
                                                    throw new TypeError(
                                                        "Expecting array in supporting points validator"
                                                    );
                                                if (!e.length || e.length < 2)
                                                    throw new TypeError(
                                                        "There should be at least two supporting points"
                                                    );
                                                return e;
                                            },
                                        ],
                                        converters: [
                                            function (e) {
                                                const t = [];
                                                if (
                                                    (V()(e) &&
                                                        (e = e.split(":")),
                                                    Array.isArray(e))
                                                )
                                                    for (
                                                        let n = 0;
                                                        n < e.length;
                                                        n++
                                                    )
                                                        t.push(Cr(e[n]));
                                                else t.push(Cr(e));
                                                return (function (e) {
                                                    return e.map(Dr);
                                                })(t);
                                            },
                                        ],
                                        application: it,
                                    },
                                    sectionType: {
                                        validators: [
                                            We(
                                                [
                                                    "carTrain",
                                                    "country",
                                                    "ferry",
                                                    "motorway",
                                                    "pedestrian",
                                                    "tollRoad",
                                                    "tollVignette",
                                                    "travelMode",
                                                    "tunnel",
                                                    "traffic",
                                                ],
                                                "sectionType"
                                            ),
                                        ],
                                        converters: [Br],
                                    },
                                };
                                function wa(e) {
                                    ba = E(ba, ia);
                                    const t = j(ba);
                                    return (
                                        e instanceof Array &&
                                            e.forEach(function (e) {
                                                delete t[e];
                                            }),
                                        t
                                    );
                                }
                                function _a(e, t) {
                                    const n = wa(),
                                        r = pr(Bt),
                                        o = br(100, {
                                            batchSync: Gt,
                                            batch: zt,
                                            single: qt,
                                        });
                                    return bn(
                                        n,
                                        y,
                                        "calculateRoute",
                                        function (e, t) {
                                            return r(n, e, t).then((e) =>
                                                ft(e, ga)
                                            );
                                        },
                                        function (e, t) {
                                            return o(n, e, t).then((e) =>
                                                ft(e, ma)
                                            );
                                        }
                                    )(e, t);
                                }
                                const Oa = [
                                        "arriveAt",
                                        "travelMode",
                                        "computeTravelTimeFor",
                                        "alternativeType",
                                        "maxAlternatives",
                                        "instructionsType",
                                        "language",
                                        "computeBestOrder",
                                        "routeRepresentation",
                                        "supportingPoints",
                                        "minDeviationDistance",
                                        "minDeviationTime",
                                        "constantSpeedConsumptionInLitersPerHundredkm",
                                        "currentFuelInLiters",
                                        "fuelEnergyDensityInMJoulesPerLiter",
                                        "hilliness",
                                        "windingness",
                                        "routeType",
                                        "vehicleEngineType",
                                        "currentChargeInkWh",
                                        "maxChargeInkWh",
                                        "constantSpeedConsumptionInkWhPerHundredkm",
                                    ],
                                    Pa = {
                                        auxiliaryPowerInkW: {
                                            validators: [
                                                oo(
                                                    "electric",
                                                    "auxiliaryPowerInkW"
                                                ),
                                            ],
                                        },
                                        constantSpeedConsumptionInkWhPerHundredkm:
                                            {
                                                validators: [ro("electric")],
                                                converters: [qr],
                                                required: !0,
                                            },
                                        currentChargeInkWh: {
                                            validators: [
                                                io(
                                                    "currentChargeInkWh",
                                                    "maxChargeInkWh"
                                                ),
                                            ],
                                            required: !0,
                                        },
                                        maxChargeInkWh: {
                                            validators: [
                                                io(
                                                    "maxChargeInkWh",
                                                    "currentChargeInkWh"
                                                ),
                                            ],
                                            required: !0,
                                        },
                                        vehicleEngineType: {
                                            validators: [
                                                Z(
                                                    ["electric"],
                                                    "vehicleEngineType"
                                                ),
                                            ],
                                            required: !0,
                                        },
                                        chargingModes: {
                                            validators: [
                                                function (e) {
                                                    if (e.length > 10)
                                                        throw new Error(
                                                            "Given chargingModes array contains more than 10 elements."
                                                        );
                                                    return (
                                                        e.forEach((e) => {
                                                            ie(e);
                                                        }),
                                                        e
                                                    );
                                                },
                                            ],
                                            required: !0,
                                            application: it,
                                        },
                                        minChargeAtDestinationInkWh: {
                                            validators: [
                                                Ee(0, Number.MAX_VALUE),
                                            ],
                                            required: !0,
                                        },
                                        minChargeAtChargingStopsInkWh: {
                                            validators: [
                                                Ee(0, Number.MAX_VALUE),
                                            ],
                                            required: !0,
                                        },
                                        recuperationInkWhPerkmAltitudeLoss: {
                                            validators: [
                                                uo(
                                                    "recuperationInkWhPerkmAltitudeLoss",
                                                    "consumptionInkWhPerkmAltitudeGain"
                                                ),
                                                fo,
                                            ],
                                        },
                                        consumptionInkWhPerkmAltitudeGain: {
                                            validators: [
                                                uo(
                                                    "consumptionInkWhPerkmAltitudeGain",
                                                    "recuperationInkWhPerkmAltitudeLoss"
                                                ),
                                                fo,
                                            ],
                                        },
                                        vehicleAdrTunnelRestrictionCode: {
                                            validators: [
                                                Z(
                                                    ["B", "C", "D", "E"],
                                                    "vehicleAdrTunnelRestrictionCode"
                                                ),
                                            ],
                                        },
                                        travelMode: {
                                            validators: [
                                                Z(["car"], "travel mode"),
                                            ],
                                        },
                                    };
                                function Sa(e, t) {
                                    const n = E(wa(Oa), Pa),
                                        r = pr($t);
                                    return bn(
                                        n,
                                        y,
                                        "longDistanceEVRouting",
                                        (e, t) =>
                                            r(n, e, t).then((e) => ft(e, ga))
                                    )(e, t);
                                }
                                function xa(e) {
                                    return e.error
                                        ? { error: e.error }
                                        : e.matrix
                                        ? e
                                        : null;
                                }
                                const Ea = [
                                        "locations",
                                        "maxAlternatives",
                                        "instructionsType",
                                        "language",
                                        "computeBestOrder",
                                        "routeRepresentation",
                                        "vehicleHeading",
                                        "report",
                                        "callback",
                                        "minDeviationTime",
                                        "minDeviationDistance",
                                        "alternativeType",
                                        "sectionType",
                                        "supportingPoints",
                                        "allowVignette",
                                        "avoidAreas",
                                        "batchMode",
                                        "consumptionInkWhPerkmAltitudeGain",
                                        "recuperationInkWhPerkmAltitudeLoss",
                                    ],
                                    Ta = {
                                        validators: [
                                            (function (e) {
                                                return (t) => (
                                                    t.forEach((t) => ye(e, t)),
                                                    t
                                                );
                                            })({
                                                point: {
                                                    validators: [
                                                        ((Ia = {
                                                            latitude: {
                                                                validators: [
                                                                    function (
                                                                        e
                                                                    ) {
                                                                        return fe(
                                                                            e
                                                                        );
                                                                    },
                                                                ],
                                                                required: !0,
                                                            },
                                                            longitude: {
                                                                validators: [
                                                                    function (
                                                                        e
                                                                    ) {
                                                                        return ae(
                                                                            e
                                                                        );
                                                                    },
                                                                ],
                                                                required: !0,
                                                            },
                                                        }),
                                                        (e) => (ye(Ia, e), e)),
                                                    ],
                                                },
                                            }),
                                        ],
                                        converters: [
                                            (function (e) {
                                                return (t) => (
                                                    t.forEach((t) => {
                                                        for (const n in t)
                                                            Object.prototype.hasOwnProperty.call(
                                                                t,
                                                                n
                                                            ) &&
                                                                Object.prototype.hasOwnProperty.call(
                                                                    e,
                                                                    n
                                                                ) &&
                                                                Array.isArray(
                                                                    e[n]
                                                                        .converters
                                                                ) &&
                                                                e[
                                                                    n
                                                                ].converters.forEach(
                                                                    (e) => {
                                                                        R()(
                                                                            e
                                                                        ) &&
                                                                            (t[
                                                                                n
                                                                            ] =
                                                                                e(
                                                                                    t[
                                                                                        n
                                                                                    ]
                                                                                ));
                                                                    }
                                                                );
                                                    }),
                                                    t
                                                );
                                            })({
                                                point: {
                                                    converters: [
                                                        (function (e) {
                                                            return (t) => {
                                                                for (const n in t)
                                                                    Object.prototype.hasOwnProperty.call(
                                                                        t,
                                                                        n
                                                                    ) &&
                                                                        Object.prototype.hasOwnProperty.call(
                                                                            e,
                                                                            n
                                                                        ) &&
                                                                        R()(
                                                                            e[n]
                                                                                .converter
                                                                        ) &&
                                                                        (t[n] =
                                                                            e[
                                                                                n
                                                                            ].converter(
                                                                                t[
                                                                                    n
                                                                                ]
                                                                            ));
                                                                return t;
                                                            };
                                                        })({
                                                            latitude: {
                                                                converters: [
                                                                    function (
                                                                        e
                                                                    ) {
                                                                        return Tr(
                                                                            e
                                                                        );
                                                                    },
                                                                ],
                                                                required: !0,
                                                            },
                                                            longitude: {
                                                                converters: [
                                                                    function (
                                                                        e
                                                                    ) {
                                                                        return Ir(
                                                                            e
                                                                        );
                                                                    },
                                                                ],
                                                                required: !0,
                                                            },
                                                        }),
                                                    ],
                                                },
                                            }),
                                        ],
                                        required: !0,
                                        application: it,
                                    };
                                var Ia;
                                function ja(e, t) {
                                    const n = (function (e) {
                                            const t = wa(Ea);
                                            (t.origins = Ta),
                                                (t.destinations = Ta),
                                                (t.batchMode = {
                                                    application: lt,
                                                }),
                                                (t.waitTimeSeconds = {
                                                    application: ct,
                                                    validators: [ze],
                                                });
                                            const n = j(t);
                                            return (
                                                e instanceof Array &&
                                                    e.forEach(function (e) {
                                                        delete n[e];
                                                    }),
                                                n
                                            );
                                        })(),
                                        r = (function (e, t) {
                                            return (n, r, o) => {
                                                const a = ar(n, r),
                                                    i = _r(a.postParams),
                                                    s = a.queryParams,
                                                    c = a.headerParams;
                                                return mr({
                                                    batchMode:
                                                        r.batchMode ||
                                                        (i.origins.length *
                                                            i.destinations
                                                                .length <=
                                                        e
                                                            ? "sync"
                                                            : "redirect"),
                                                    headers: c,
                                                    waitTimeSeconds:
                                                        r.waitTimeSeconds,
                                                    queryParams: s,
                                                    bodyParams: i,
                                                    endpoints: {
                                                        sync: t.sync,
                                                        async: t.async,
                                                    },
                                                    abortSignal: o,
                                                });
                                            };
                                        })(100, { sync: Kt, async: Ht });
                                    return bn(n, y, "matrixRouting", (e, t) =>
                                        r(n, e, t).then((e) => ft(e, xa))
                                    )(e, t);
                                }
                                const Aa = {
                                    key: { validators: [H] },
                                    trackingId: {
                                        validators: [we],
                                        application: ut,
                                        defaultValue: ht.v4,
                                    },
                                    protocol: {
                                        validators: [
                                            Z(["http", "https"], "protocol"),
                                        ],
                                    },
                                    sessionId: { validators: [Ie] },
                                };
                                function ka(e, t) {
                                    const n = pr(Jt);
                                    return bn(
                                        Aa,
                                        m,
                                        "incidentViewport",
                                        function (e, t) {
                                            return n(Aa, e, t).then(ft);
                                        }
                                    )(e, t);
                                }
                                function Ca(e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var r = Object.getOwnPropertySymbols(e);
                                        t &&
                                            (r = r.filter(function (t) {
                                                return Object.getOwnPropertyDescriptor(
                                                    e,
                                                    t
                                                ).enumerable;
                                            })),
                                            n.push.apply(n, r);
                                    }
                                    return n;
                                }
                                function La(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n =
                                            null != arguments[t]
                                                ? arguments[t]
                                                : {};
                                        t % 2
                                            ? Ca(Object(n), !0).forEach(
                                                  function (t) {
                                                      Ra(e, t, n[t]);
                                                  }
                                              )
                                            : Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(
                                                  e,
                                                  Object.getOwnPropertyDescriptors(
                                                      n
                                                  )
                                              )
                                            : Ca(Object(n)).forEach(function (
                                                  t
                                              ) {
                                                  Object.defineProperty(
                                                      e,
                                                      t,
                                                      Object.getOwnPropertyDescriptor(
                                                          n,
                                                          t
                                                      )
                                                  );
                                              });
                                    }
                                    return e;
                                }
                                function Ra(e, t, n) {
                                    return (
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: n,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = n),
                                        e
                                    );
                                }
                                function Da(e) {
                                    const t =
                                        e.flowSegmentData.coordinates.coordinate.map(
                                            (e) => ({
                                                lat: e.latitude,
                                                lng: e.longitude,
                                            })
                                        );
                                    return Object.assign(e, {
                                        flowSegmentData: La(
                                            La({}, e.flowSegmentData),
                                            {},
                                            { coordinates: { coordinate: t } }
                                        ),
                                    });
                                }
                                const Va = {
                                    key: { validators: [Ie] },
                                    trackingId: {
                                        validators: [we],
                                        application: ut,
                                        defaultValue: ht.v4,
                                    },
                                    zoom: {
                                        validators: [je],
                                        required: !0,
                                        application: st,
                                    },
                                    style: {
                                        validators: [
                                            Z(
                                                [
                                                    "absolute",
                                                    "relative",
                                                    "relative-delay",
                                                    "relative0",
                                                    "relative0-dark",
                                                    "reduced-sensitivity",
                                                ],
                                                "traffic flow style"
                                            ),
                                        ],
                                        required: !0,
                                        application: st,
                                    },
                                    point: {
                                        converters: [Mr],
                                        validators: [Me],
                                        required: !0,
                                    },
                                    unit: { validators: [Z(["KMPH", "MPH"])] },
                                    thickness: { validators: [Ee(1, 20)] },
                                    openLr: { validators: [_e] },
                                };
                                function Ma(e, t) {
                                    const n = pr(Yt);
                                    return bn(
                                        Va,
                                        g,
                                        "trafficFlowSegmentData",
                                        (e, t) =>
                                            n(Va, e, t).then((e) => ft(e, Da))
                                    )(e, t);
                                }
                                function Fa(e, t) {
                                    return e === t;
                                }
                                var Ua = n(99),
                                    Na = n.n(Ua);
                                const Ba = new Ze(),
                                    Wa = {
                                        0: "Unknown",
                                        1: "Accident",
                                        2: "Fog",
                                        3: "Dangerous Conditions",
                                        4: "Rain",
                                        5: "Ice",
                                        6: "Jam",
                                        7: "Lane Closed",
                                        8: "Road Closed",
                                        9: "Road Works",
                                        10: "Wind",
                                        11: "Flooding",
                                        12: "Detour",
                                        13: "Cluster",
                                        14: "Broken down vehicle",
                                    },
                                    qa = {
                                        0: "unknown",
                                        1: "minor",
                                        2: "moderate",
                                        3: "major",
                                        4: "undefined",
                                    },
                                    za = (e, t) => {
                                        const n = [],
                                            r = {};
                                        if (
                                            ((r.id = e.id),
                                            F()(e.cbl) ||
                                                F()(e.ctr) ||
                                                (r.clusterBounds = [
                                                    [e.cbl.lng, e.cbl.lat],
                                                    [e.ctr.lng, e.ctr.lat],
                                                ]),
                                            F()(e.op) ||
                                                (r.originalPosition = [
                                                    e.op.lng,
                                                    e.op.lat,
                                                ]),
                                            F()(e.ic) ||
                                                (r.incidentCategory = Wa[e.ic]),
                                            F()(e.ty) ||
                                                (r.incidentSeverity = qa[e.ty]),
                                            F()(e.v) ||
                                                (r.vectorGeometry = e.v),
                                            Ye(r, "clusterSize", e.cs),
                                            Ye(r, "description", e.d),
                                            Ye(r, "incidentCause", e.c),
                                            Ye(r, "from", e.f),
                                            Ye(r, "to", e.t),
                                            Ye(r, "roadNumber", e.r),
                                            Ye(r, "delaySeconds", e.dl),
                                            Ye(r, "lengthMeters", e.l),
                                            Ye(r, "endDate", e.ed),
                                            e.cpoi && !t)
                                        )
                                            n.push(
                                                ...Na()(
                                                    e.cpoi.map((e) => za(e, !1))
                                                )
                                            );
                                        else {
                                            e.cpoi &&
                                                (r.features = Na()(
                                                    e.cpoi.map((e) => za(e, !0))
                                                ));
                                            const t = et(r, "Point");
                                            (t.geometry.coordinates = [
                                                e.p.lng,
                                                e.p.lat,
                                            ]),
                                                n.push(t);
                                        }
                                        return n;
                                    },
                                    Ga = (e, t) => {
                                        const n = {
                                                type: "FeatureCollection",
                                                features: [],
                                            },
                                            r = e[0] || e;
                                        if (!r || !r.tm || !r.tm.poi) return n;
                                        e.length > 1 &&
                                            (r.tm.poi = ((e, t, n) => {
                                                n || (n = Fa);
                                                const r = e.concat(t);
                                                for (
                                                    let t = 0;
                                                    t < e.length;
                                                    t += 1
                                                )
                                                    for (
                                                        let o = e.length;
                                                        o < r.length;
                                                        o += 1
                                                    )
                                                        n(r[t], r[o]) &&
                                                            (r.splice(o, 1),
                                                            (o -= 1));
                                                return r;
                                            })(
                                                e[0].tm.poi,
                                                e[1].tm.poi,
                                                function (e, t) {
                                                    return e.id === t.id;
                                                }
                                            ));
                                        for (
                                            let e = 0;
                                            e < r.tm.poi.length;
                                            e += 1
                                        )
                                            n.features.push(
                                                ...za(r.tm.poi[e], t)
                                            );
                                        return n;
                                    };
                                function Ha(e) {
                                    return (t) => (
                                        (t = ((e) => {
                                            const t = (e) =>
                                                e && e.tm && e.tm.poi
                                                    ? (e.tm.poi.forEach((e) => {
                                                          e.cbl &&
                                                              (e.cbl =
                                                                  Ba.convert(
                                                                      e.cbl
                                                                  )),
                                                              e.ctr &&
                                                                  (e.ctr =
                                                                      Ba.convert(
                                                                          e.ctr
                                                                      )),
                                                              e.p &&
                                                                  (e.p =
                                                                      Ba.convert(
                                                                          e.p
                                                                      )),
                                                              e.cpoi &&
                                                                  Array.isArray(
                                                                      e.cpoi
                                                                  ) &&
                                                                  e.cpoi.forEach(
                                                                      (e) => {
                                                                          e.p =
                                                                              Ba.convert(
                                                                                  e.p
                                                                              );
                                                                      }
                                                                  ),
                                                              e.op &&
                                                                  (e.op =
                                                                      Ba.convert(
                                                                          e.op
                                                                      ));
                                                      }),
                                                      e)
                                                    : e;
                                            return Array.isArray(e)
                                                ? e.map(t)
                                                : t(e);
                                        })(t)),
                                        Object.assign(t, {
                                            toGeoJson: () => Ga(t, e),
                                        })
                                    );
                                }
                                const Ka = {
                                    key: { validators: [H] },
                                    trackingId: {
                                        validators: [we],
                                        application: ut,
                                        defaultValue: ht.v4,
                                    },
                                    zoomLevel: {
                                        validators: [je],
                                        required: !0,
                                        application: st,
                                        name: "zoom",
                                    },
                                    boundingBox: {
                                        converters: [Vr],
                                        validators: [xe],
                                        required: !0,
                                        application: st,
                                        cast: (e, t) => {
                                            (t.minLon = e.minLon),
                                                (t.maxLon = e.maxLon),
                                                (t.minLat = e.minLat),
                                                (t.maxLat = e.maxLat);
                                        },
                                    },
                                    style: {
                                        validators: [
                                            Z(
                                                [
                                                    "s0",
                                                    "s0-dark",
                                                    "s1",
                                                    "s2",
                                                    "s3",
                                                    "night",
                                                ],
                                                "traffic style"
                                            ),
                                        ],
                                        required: !0,
                                        application: st,
                                    },
                                    language: {
                                        converters: [
                                            function (e) {
                                                return kr(e, W);
                                            },
                                        ],
                                        validators: [
                                            function (e) {
                                                const t = [
                                                    "ar",
                                                    "ca",
                                                    "cs",
                                                    "da",
                                                    "de",
                                                    "el",
                                                    "en",
                                                    "en-GB",
                                                    "en-US",
                                                    "es",
                                                    "et",
                                                    "fi",
                                                    "fr",
                                                    "he",
                                                    "hu",
                                                    "id",
                                                    "it",
                                                    "lt",
                                                    "lv",
                                                    "nb",
                                                    "nl",
                                                    "no",
                                                    "pl",
                                                    "pt",
                                                    "ro",
                                                    "ru",
                                                    "sk",
                                                    "sv",
                                                    "th",
                                                    "tr",
                                                    "zh",
                                                ];
                                                return T(
                                                    e,
                                                    t,
                                                    "Supported traffic incidents language is expected to be one of: " +
                                                        t +
                                                        "), but " +
                                                        e +
                                                        " [" +
                                                        typeof e +
                                                        "] given"
                                                );
                                            },
                                        ],
                                    },
                                    trafficModelID: {
                                        validators: [Ie],
                                        defaultValue: "-1",
                                        application: st,
                                    },
                                    geometries: {
                                        validators: [
                                            Z(
                                                ["shifted", "original"],
                                                "traffic geometries"
                                            ),
                                        ],
                                    },
                                    expandCluster: {
                                        validators: [_e],
                                        defaultValue: !1,
                                    },
                                    preserveCluster: {
                                        validators: [_e],
                                        defaultValue: !1,
                                    },
                                    originalPosition: {
                                        validators: [_e],
                                        defaultValue: !1,
                                    },
                                    protocol: {
                                        validators: [
                                            Z(["http", "https"], "protocol"),
                                        ],
                                    },
                                    projection: { defaultValue: "EPSG4326" },
                                };
                                function Za(e, t) {
                                    const n = pr(Qt);
                                    return bn(
                                        Ka,
                                        m,
                                        "incidentDetails",
                                        function (e, t) {
                                            const r = Ha(e.preserveCluster);
                                            return n(Ka, e, t).then((e) =>
                                                ft(e, r)
                                            );
                                        }
                                    )(e, t);
                                }
                                const $a = {
                                    key: { validators: [H] },
                                    trackingId: {
                                        validators: [we],
                                        application: ut,
                                        defaultValue: ht.v4,
                                    },
                                    boundingBox: {
                                        required: !0,
                                        validators: [xe],
                                        converters: [Vr],
                                        cast: (e, t) => {
                                            t.bbox = ""
                                                .concat(e.minLon, ",")
                                                .concat(e.minLat, ",")
                                                .concat(e.maxLon, ",")
                                                .concat(e.maxLat);
                                        },
                                    },
                                    fields: {
                                        validators: [
                                            Ie,
                                            function (e) {
                                                const t = I(ee),
                                                    n = I(e),
                                                    r = (e, t) => {
                                                        Object.keys(e).forEach(
                                                            function (n) {
                                                                if (
                                                                    !t.hasOwnProperty(
                                                                        n
                                                                    ) ||
                                                                    typeof e[
                                                                        n
                                                                    ] !=
                                                                        typeof t[
                                                                            n
                                                                        ]
                                                                )
                                                                    throw new TypeError(
                                                                        "Property ".concat(
                                                                            n,
                                                                            " not matches available fields: "
                                                                        ) + ee
                                                                    );
                                                                "object" ==
                                                                    typeof e[
                                                                        n
                                                                    ] &&
                                                                    r(
                                                                        e[n],
                                                                        t[n]
                                                                    );
                                                            }
                                                        );
                                                    };
                                                return r(n, t), e;
                                            },
                                        ],
                                        converters: [
                                            function (e) {
                                                if ("string" == typeof e)
                                                    return e.replace(/\s/g, "");
                                                throw new TypeError(
                                                    "A string is required"
                                                );
                                            },
                                        ],
                                    },
                                    t: { validators: [Ie] },
                                    language: {
                                        validators: [ke],
                                        converters: [
                                            function (e) {
                                                return kr(e, G);
                                            },
                                        ],
                                    },
                                };
                                function Qa(e, t) {
                                    const n = pr(Xt);
                                    return bn(
                                        $a,
                                        m,
                                        "incidentDetailsV5",
                                        function (e, t) {
                                            return n($a, e, t).then(ft);
                                        }
                                    )(e, t);
                                }
                                const Xa = en,
                                    Ja = {
                                        basic: ["jpg", "jpeg", "png"],
                                        hybrid: ["png"],
                                        labels: ["png"],
                                    },
                                    Ya = {
                                        layer: {
                                            validators: [
                                                Z(
                                                    [
                                                        "basic",
                                                        "hybrid",
                                                        "labels",
                                                    ],
                                                    "layers"
                                                ),
                                            ],
                                            defaultValue: "basic",
                                        },
                                        style: {
                                            validators: [
                                                Z(["main", "night"], "styles"),
                                            ],
                                            defaultValue: "main",
                                        },
                                        format: {
                                            validators: [
                                                Z(
                                                    ["png", "jpg", "jpeg"],
                                                    "formats"
                                                ),
                                            ],
                                            defaultValue: "png",
                                        },
                                        key: { validators: [H] },
                                        zoom: {
                                            validators: [Te(0, 23)],
                                            converters: [Wr],
                                        },
                                        center: {
                                            converters: [Mr],
                                            validators: [Me],
                                        },
                                        width: { validators: [Te(1, 8192)] },
                                        height: { validators: [Te(1, 8192)] },
                                        bbox: {
                                            validators: [xe],
                                            converters: [Vr],
                                        },
                                        view: {
                                            validators: [
                                                Z(
                                                    [
                                                        "Unified",
                                                        "IL",
                                                        "IN",
                                                        "MA",
                                                        "PK",
                                                        "AR",
                                                        "Arabic",
                                                        "TR",
                                                        "RU",
                                                        "CN",
                                                    ],
                                                    "view"
                                                ),
                                            ],
                                        },
                                        language: {
                                            validators: [
                                                function (e) {
                                                    return T(
                                                        e,
                                                        J,
                                                        "Supported maps language is expected to be one of: " +
                                                            J +
                                                            "), but " +
                                                            e +
                                                            " [" +
                                                            typeof e +
                                                            "] given"
                                                    );
                                                },
                                            ],
                                        },
                                    };
                                function ei(e) {
                                    const t = Object.keys(Ya).reduce(function (
                                        t,
                                        n
                                    ) {
                                        let r = e[n];
                                        return (
                                            void 0 !== r &&
                                                ((r = (function (e, t) {
                                                    if ("bbox" === e)
                                                        t =
                                                            (n = t).minLon +
                                                            "," +
                                                            n.minLat +
                                                            "," +
                                                            n.maxLon +
                                                            "," +
                                                            n.maxLat;
                                                    else {
                                                        if ("zoom" === e)
                                                            return String(
                                                                parseInt(t, 10)
                                                            );
                                                        if ("center" === e) {
                                                            const e =
                                                                    t.split(
                                                                        ","
                                                                    ),
                                                                n = [
                                                                    parseFloat(
                                                                        e[1]
                                                                    ),
                                                                    parseFloat(
                                                                        e[0]
                                                                    ),
                                                                ];
                                                            return (
                                                                n[0] +
                                                                "," +
                                                                n[1]
                                                            );
                                                        }
                                                    }
                                                    var n;
                                                    return t;
                                                })(n, r)),
                                                t.push(n + "=" + encodeURI(r))),
                                            t
                                        );
                                    },
                                    []);
                                    return Xa + "?" + t.join("&");
                                }
                                function ti(e, t) {
                                    return bn(
                                        Ya,
                                        h,
                                        "staticImage",
                                        function (e) {
                                            return (
                                                (function (e) {
                                                    if (
                                                        !Ja[e.layer] ||
                                                        -1 ===
                                                            Ja[e.layer].indexOf(
                                                                e.format
                                                            )
                                                    )
                                                        throw new Error(
                                                            "Unsupported layer. Please change to PNG or use basic layer."
                                                        );
                                                    if (e.bbox && e.center)
                                                        throw new Error(
                                                            "The bbox and center properties cannot be used together"
                                                        );
                                                    if (!e.bbox && !e.center)
                                                        throw new Error(
                                                            "Either bbox or center property must be provided"
                                                        );
                                                    if (
                                                        e.bbox &&
                                                        (O(e.width) ||
                                                            O(e.height))
                                                    )
                                                        throw new Error(
                                                            "The bbox, width and height properties cannot be used together"
                                                        );
                                                })(e),
                                                ei(e)
                                            );
                                        }
                                    )(e, t);
                                }
                                const ni = (() => ({
                                    key: { validators: [Ie] },
                                    trackingId: {
                                        validators: [we],
                                        application: ut,
                                        defaultValue: ht.v4,
                                    },
                                    boundingBox: {
                                        validators: [xe],
                                        converters: [Vr],
                                        application: st,
                                        cast: (e, t) => {
                                            (t.minLon = e.minLon),
                                                (t.maxLon = e.maxLon),
                                                (t.minLat = e.minLat),
                                                (t.maxLat = e.maxLat);
                                        },
                                    },
                                    zoom: {
                                        validators: [je],
                                        converters: [Wr],
                                        application: st,
                                    },
                                    x: {
                                        validators: [Se],
                                        converters: [Wr],
                                        application: st,
                                    },
                                    y: {
                                        validators: [Se],
                                        converters: [Wr],
                                        application: st,
                                    },
                                    protocol: {
                                        validators: [
                                            Z(["http", "https"], "protocol"),
                                        ],
                                    },
                                    sessionId: { validators: [Ie] },
                                }))();
                                function ri(e, t) {
                                    const n = pr(vt),
                                        r = pr(gt),
                                        o = pr(yt);
                                    return bn(
                                        ni,
                                        h,
                                        "copyrights",
                                        function (e, t) {
                                            return (function (e, t, a) {
                                                return t.boundingBox
                                                    ? n(e, t, a)
                                                    : t.zoom
                                                    ? r(e, t, a)
                                                    : o(e, t, a);
                                            })(ni, e, t).then(ft);
                                        }
                                    )(e, t);
                                }
                                const oi = {
                                    key: { validators: [H] },
                                    trackingId: {
                                        validators: [we],
                                        application: ut,
                                        defaultValue: ht.v4,
                                    },
                                    protocol: {
                                        validators: [
                                            Z(["http", "https"], "protocol"),
                                        ],
                                    },
                                    sessionId: { validators: [Ie] },
                                };
                                function ai(e, t) {
                                    const n = pr(mt);
                                    return bn(
                                        oi,
                                        h,
                                        "copyrightsCaption",
                                        function (e, t) {
                                            return n(oi, e, t).then(ft);
                                        }
                                    )(e, t);
                                }
                                const ii = {
                                    key: { validators: [Ie] },
                                    trackingId: {
                                        validators: [we],
                                        application: ut,
                                        defaultValue: ht.v4,
                                    },
                                };
                                function si(e, t) {
                                    const n = pr(bt);
                                    return bn(
                                        ii,
                                        h,
                                        "copyrights",
                                        function (e, t) {
                                            return (
                                                (e.contentType = "text"),
                                                n(ii, e, t).then(ft)
                                            );
                                        }
                                    )(e, t);
                                }
                                const ci = {
                                    key: { validators: [H] },
                                    trackingId: {
                                        validators: [we],
                                        application: ut,
                                        defaultValue: ht.v4,
                                    },
                                };
                                function li(e, t) {
                                    const n = pr(wt);
                                    return bn(
                                        ci,
                                        h,
                                        "copyrightsCaptionV2",
                                        function (e, t) {
                                            return n(ci, e, t).then(ft);
                                        }
                                    )(e, t);
                                }
                                function ui(e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var r = Object.getOwnPropertySymbols(e);
                                        t &&
                                            (r = r.filter(function (t) {
                                                return Object.getOwnPropertyDescriptor(
                                                    e,
                                                    t
                                                ).enumerable;
                                            })),
                                            n.push.apply(n, r);
                                    }
                                    return n;
                                }
                                function pi(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n =
                                            null != arguments[t]
                                                ? arguments[t]
                                                : {};
                                        t % 2
                                            ? ui(Object(n), !0).forEach(
                                                  function (t) {
                                                      di(e, t, n[t]);
                                                  }
                                              )
                                            : Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(
                                                  e,
                                                  Object.getOwnPropertyDescriptors(
                                                      n
                                                  )
                                              )
                                            : ui(Object(n)).forEach(function (
                                                  t
                                              ) {
                                                  Object.defineProperty(
                                                      e,
                                                      t,
                                                      Object.getOwnPropertyDescriptor(
                                                          n,
                                                          t
                                                      )
                                                  );
                                              });
                                    }
                                    return e;
                                }
                                function di(e, t, n) {
                                    return (
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: n,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = n),
                                        e
                                    );
                                }
                                var fi = {
                                    sdkInfo: { version: s()["sdk.version"] },
                                    setProductInfo: (e, t) => {
                                        if (!e)
                                            throw new Error(
                                                "ProductId needs to be set"
                                            );
                                        const n = t || 0 === t ? "/" + t : "";
                                        u().productInfo = e + n;
                                    },
                                    services: pi(pi(pi(pi({}, e), t), o), a),
                                };
                            })(),
                            (r = r.default)
                        );
                    })();
                });
                //# sourceMappingURL=services.min.js.map

                /***/
            },

        /***/ "./resources/js/handle-flats-form.js":
            /*!*******************************************!*\
  !*** ./resources/js/handle-flats-form.js ***!
  \*******************************************/
            /*! no exports provided */
            /***/ function (module, __webpack_exports__, __webpack_require__) {
                "use strict";
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */ var _tomtom_international_web_sdk_services__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! @tomtom-international/web-sdk-services */ "./node_modules/@tomtom-international/web-sdk-services/dist/services.min.js"
                    );
                /* harmony import */ var _tomtom_international_web_sdk_services__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(
                        _tomtom_international_web_sdk_services__WEBPACK_IMPORTED_MODULE_0__
                    );

                var form = document.getElementById("create-form-try");
                var services = document.getElementById("services");
                var lat = document.getElementById("lat");
                var lng = document.getElementById("lng");
                form.addEventListener("submit", function (event) {
                    console.log("ciaoo");
                    event.preventDefault();
                    var formData = new FormData(event.target);

                    if (formData.has("service")) {
                        services.value = formData.getAll("service");
                    }

                    var address = formData.get("address");
                    _tomtom_international_web_sdk_services__WEBPACK_IMPORTED_MODULE_0___default.a.services
                        .geocode({
                            key: "xBR8QUT6VbrPi6uqGXoWGBZbcR4mSfgR",
                            limit: 1,
                            query: address,
                        })
                        .then(function (result) {
                            var latData = result.results[0].position.lat;
                            var lngData = result.results[0].position.lng;
                            lat.value = latData;
                            lng.value = lngData;
                            form.submit();
                        });
                });

                /***/
            },

        /***/ 2:
            /*!*************************************************!*\
  !*** multi ./resources/js/handle-flats-form.js ***!
  \*************************************************/
            /*! no static exports found */
            /***/ function (module, exports, __webpack_require__) {
                module.exports = __webpack_require__(
                    /*! C:\Users\matte\Desktop\classe43BOOLEAN\boolbnb\resources\js\handle-flats-form.js */ "./resources/js/handle-flats-form.js"
                );

                /***/
            },

        /******/
    }
);
