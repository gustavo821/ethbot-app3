(window.webpackJsonp = window.webpackJsonp || []).push([
    [2], {
        103: function(t, e, n) {
            "use strict";
            e.a = {
                etherscanAddr: function(t) {
                    return "https://bscscan.com/address/".concat(t)
                },
                etherscanTx: function(t) {
                    return "https://bscscan.com/tx/".concat(t)
                },
                formatDate: function(t) {
                    return t
                },
                shortAddr: function(t) {
                    return t.substr(0, 6) + "..." + t.substr(-4)
                }
            }
        },
        11: function(t, e, n) {
            "use strict";
            n.d(e, "k", (function() {
                return y
            })), n.d(e, "m", (function() {
                return x
            })), n.d(e, "l", (function() {
                return w
            })), n.d(e, "e", (function() {
                return k
            })), n.d(e, "b", (function() {
                return _
            })), n.d(e, "r", (function() {
                return C
            })), n.d(e, "g", (function() {
                return P
            })), n.d(e, "h", (function() {
                return $
            })), n.d(e, "d", (function() {
                return O
            })), n.d(e, "q", (function() {
                return j
            })), n.d(e, "j", (function() {
                return B
            })), n.d(e, "s", (function() {
                return E
            })), n.d(e, "n", (function() {
                return T
            })), n.d(e, "p", (function() {
                return M
            })), n.d(e, "f", (function() {
                return U
            })), n.d(e, "c", (function() {
                return N
            })), n.d(e, "i", (function() {
                return D
            })), n.d(e, "o", (function() {
                return R
            })), n.d(e, "a", (function() {
                return W
            }));
            n(126), n(58), n(46), n(63), n(91), n(92);
            var r = n(67),
                o = (n(175), n(176), n(177), n(51)),
                c = (n(36), n(37), n(179), n(182), n(88), n(35), n(15)),
                l = (n(57), n(45), n(23), n(94), n(49), n(80)),
                d = n(12);

            function f(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function h(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? f(Object(source), !0).forEach((function(e) {
                        Object(l.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : f(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }

            function m(t) {
                if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (t = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return v(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(n);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return v(t, e)
                        }(t))) {
                        var i = 0,
                            e = function() {};
                        return {
                            s: e,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: e
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var n, r, o = !0,
                    c = !1;
                return {
                    s: function() {
                        n = t[Symbol.iterator]()
                    },
                    n: function() {
                        var t = n.next();
                        return o = t.done, t
                    },
                    e: function(t) {
                        c = !0, r = t
                    },
                    f: function() {
                        try {
                            o || null == n.return || n.return()
                        } finally {
                            if (c) throw r
                        }
                    }
                }
            }

            function v(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n
            }

            function y(t) {
                d.default.config.errorHandler && d.default.config.errorHandler(t)
            }

            function x(t) {
                return t.then((function(t) {
                    return t.default || t
                }))
            }

            function w(t) {
                return t.$options && "function" == typeof t.$options.fetch && !t.$options.fetch.length
            }

            function k(t) {
                var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    r = t.$children || [],
                    o = m(r);
                try {
                    for (o.s(); !(e = o.n()).done;) {
                        var c = e.value;
                        c.$fetch ? n.push(c) : c.$children && k(c, n)
                    }
                } catch (t) {
                    o.e(t)
                } finally {
                    o.f()
                }
                return n
            }

            function _(t, e) {
                if (e || !t.options.__hasNuxtData) {
                    var n = t.options._originDataFn || t.options.data || function() {
                        return {}
                    };
                    t.options._originDataFn = n, t.options.data = function() {
                        var data = n.call(this, this);
                        return this.$ssrContext && (e = this.$ssrContext.asyncData[t.cid]), h(h({}, data), e)
                    }, t.options.__hasNuxtData = !0, t._Ctor && t._Ctor.options && (t._Ctor.options.data = t.options.data)
                }
            }

            function C(t) {
                return t.options && t._Ctor === t || (t.options ? (t._Ctor = t, t.extendOptions = t.options) : (t = d.default.extend(t))._Ctor = t, !t.options.name && t.options.__file && (t.options.name = t.options.__file)), t
            }

            function P(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "components";
                return Array.prototype.concat.apply([], t.matched.map((function(t, r) {
                    return Object.keys(t[n]).map((function(o) {
                        return e && e.push(r), t[n][o]
                    }))
                })))
            }

            function $(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return P(t, e, "instances")
            }

            function O(t, e) {
                return Array.prototype.concat.apply([], t.matched.map((function(t, n) {
                    return Object.keys(t.components).reduce((function(r, o) {
                        return t.components[o] ? r.push(e(t.components[o], t.instances[o], t, o, n)) : delete t.components[o], r
                    }), [])
                })))
            }

            function j(t, e) {
                return Promise.all(O(t, function() {
                    var t = Object(c.a)(regeneratorRuntime.mark((function t(n, r, o, c) {
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if ("function" != typeof n || n.options) {
                                        t.next = 4;
                                        break
                                    }
                                    return t.next = 3, n();
                                case 3:
                                    n = t.sent;
                                case 4:
                                    return o.components[c] = n = C(n), t.abrupt("return", "function" == typeof e ? e(n, r, o, c) : n);
                                case 6:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e, n, r, o) {
                        return t.apply(this, arguments)
                    }
                }()))
            }

            function B(t) {
                return S.apply(this, arguments)
            }

            function S() {
                return (S = Object(c.a)(regeneratorRuntime.mark((function t(e) {
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (e) {
                                    t.next = 2;
                                    break
                                }
                                return t.abrupt("return");
                            case 2:
                                return t.next = 4, j(e);
                            case 4:
                                return t.abrupt("return", h(h({}, e), {}, {
                                    meta: P(e).map((function(t, n) {
                                        return h(h({}, t.options.meta), (e.matched[n] || {}).meta)
                                    }))
                                }));
                            case 5:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function E(t, e) {
                return A.apply(this, arguments)
            }

            function A() {
                return (A = Object(c.a)(regeneratorRuntime.mark((function t(e, n) {
                    var c, l, d, f;
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return e.context || (e.context = {
                                    isStatic: !0,
                                    isDev: !1,
                                    isHMR: !1,
                                    app: e,
                                    store: e.store,
                                    payload: n.payload,
                                    error: n.error,
                                    base: "/",
                                    env: {}
                                }, n.ssrContext && (e.context.ssrContext = n.ssrContext), e.context.redirect = function(t, path, n) {
                                    if (t) {
                                        e.context._redirected = !0;
                                        var r = Object(o.a)(path);
                                        if ("number" == typeof t || "undefined" !== r && "object" !== r || (n = path || {}, path = t, r = Object(o.a)(path), t = 302), "object" === r && (path = e.router.resolve(path).route.fullPath), !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) throw path = H(path, n), window.location.replace(path), new Error("ERR_REDIRECT");
                                        e.context.next({
                                            path: path,
                                            query: n,
                                            status: t
                                        })
                                    }
                                }, e.context.nuxtState = window.__NUXT__), t.next = 3, Promise.all([B(n.route), B(n.from)]);
                            case 3:
                                c = t.sent, l = Object(r.a)(c, 2), d = l[0], f = l[1], n.route && (e.context.route = d), n.from && (e.context.from = f), e.context.next = n.next, e.context._redirected = !1, e.context._errored = !1, e.context.isHMR = !1, e.context.params = e.context.route.params || {}, e.context.query = e.context.route.query || {};
                            case 15:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function T(t, e) {
                return !t.length || e._redirected || e._errored ? Promise.resolve() : M(t[0], e).then((function() {
                    return T(t.slice(1), e)
                }))
            }

            function M(t, e) {
                var n;
                return (n = 2 === t.length ? new Promise((function(n) {
                    t(e, (function(t, data) {
                        t && e.error(t), n(data = data || {})
                    }))
                })) : t(e)) && n instanceof Promise && "function" == typeof n.then ? n : Promise.resolve(n)
            }

            function U(base, t) {
                var path = decodeURI(window.location.pathname);
                return "hash" === t ? window.location.hash.replace(/^#\//, "") : (base && 0 === path.indexOf(base) && (path = path.slice(base.length)), (path || "/") + window.location.search + window.location.hash)
            }

            function N(t, e) {
                return function(t, e) {
                    for (var n = new Array(t.length), i = 0; i < t.length; i++) "object" === Object(o.a)(t[i]) && (n[i] = new RegExp("^(?:" + t[i].pattern + ")$", K(e)));
                    return function(e, r) {
                        for (var path = "", data = e || {}, o = (r || {}).pretty ? I : encodeURIComponent, c = 0; c < t.length; c++) {
                            var l = t[c];
                            if ("string" != typeof l) {
                                var d = data[l.name || "pathMatch"],
                                    f = void 0;
                                if (null == d) {
                                    if (l.optional) {
                                        l.partial && (path += l.prefix);
                                        continue
                                    }
                                    throw new TypeError('Expected "' + l.name + '" to be defined')
                                }
                                if (Array.isArray(d)) {
                                    if (!l.repeat) throw new TypeError('Expected "' + l.name + '" to not repeat, but received `' + JSON.stringify(d) + "`");
                                    if (0 === d.length) {
                                        if (l.optional) continue;
                                        throw new TypeError('Expected "' + l.name + '" to not be empty')
                                    }
                                    for (var h = 0; h < d.length; h++) {
                                        if (f = o(d[h]), !n[c].test(f)) throw new TypeError('Expected all "' + l.name + '" to match "' + l.pattern + '", but received `' + JSON.stringify(f) + "`");
                                        path += (0 === h ? l.prefix : l.delimiter) + f
                                    }
                                } else {
                                    if (f = l.asterisk ? I(d, !0) : o(d), !n[c].test(f)) throw new TypeError('Expected "' + l.name + '" to match "' + l.pattern + '", but received "' + f + '"');
                                    path += l.prefix + f
                                }
                            } else path += l
                        }
                        return path
                    }
                }(function(t, e) {
                    var n, r = [],
                        o = 0,
                        c = 0,
                        path = "",
                        l = e && e.delimiter || "/";
                    for (; null != (n = L.exec(t));) {
                        var d = n[0],
                            f = n[1],
                            h = n.index;
                        if (path += t.slice(c, h), c = h + d.length, f) path += f[1];
                        else {
                            var m = t[c],
                                v = n[2],
                                y = n[3],
                                x = n[4],
                                w = n[5],
                                k = n[6],
                                _ = n[7];
                            path && (r.push(path), path = "");
                            var C = null != v && null != m && m !== v,
                                P = "+" === k || "*" === k,
                                $ = "?" === k || "*" === k,
                                O = n[2] || l,
                                pattern = x || w;
                            r.push({
                                name: y || o++,
                                prefix: v || "",
                                delimiter: O,
                                optional: $,
                                repeat: P,
                                partial: C,
                                asterisk: Boolean(_),
                                pattern: pattern ? z(pattern) : _ ? ".*" : "[^" + F(O) + "]+?"
                            })
                        }
                    }
                    c < t.length && (path += t.substr(c));
                    path && r.push(path);
                    return r
                }(t, e), e)
            }

            function D(t, e) {
                var n = {},
                    r = h(h({}, t), e);
                for (var o in r) String(t[o]) !== String(e[o]) && (n[o] = !0);
                return n
            }

            function R(t) {
                var e;
                if (t.message || "string" == typeof t) e = t.message || t;
                else try {
                    e = JSON.stringify(t, null, 2)
                } catch (n) {
                    e = "[".concat(t.constructor.name, "]")
                }
                return h(h({}, t), {}, {
                    message: e,
                    statusCode: t.statusCode || t.status || t.response && t.response.status || 500
                })
            }
            window.onNuxtReadyCbs = [], window.onNuxtReady = function(t) {
                window.onNuxtReadyCbs.push(t)
            };
            var L = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");

            function I(t, e) {
                var n = e ? /[?#]/g : /[/?#]/g;
                return encodeURI(t).replace(n, (function(t) {
                    return "%" + t.charCodeAt(0).toString(16).toUpperCase()
                }))
            }

            function F(t) {
                return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
            }

            function z(t) {
                return t.replace(/([=!:$/()])/g, "\\$1")
            }

            function K(t) {
                return t && t.sensitive ? "" : "i"
            }

            function H(t, e) {
                var n, o = t.indexOf("://"); - 1 !== o ? (n = t.substring(0, o), t = t.substring(o + 3)) : t.startsWith("//") && (t = t.substring(2));
                var c, l = t.split("/"),
                    d = (n ? n + "://" : "//") + l.shift(),
                    path = l.join("/");
                if ("" === path && 1 === l.length && (d += "/"), 2 === (l = path.split("#")).length) {
                    var f = l,
                        h = Object(r.a)(f, 2);
                    path = h[0], c = h[1]
                }
                return d += path ? "/" + path : "", e && "{}" !== JSON.stringify(e) && (d += (2 === t.split("?").length ? "&" : "?") + function(t) {
                    return Object.keys(t).sort().map((function(e) {
                        var n = t[e];
                        return null == n ? "" : Array.isArray(n) ? n.slice().map((function(t) {
                            return [e, "=", t].join("")
                        })).join("&") : e + "=" + n
                    })).filter(Boolean).join("&")
                }(e)), d += c ? "#" + c : ""
            }

            function W(t, e, n) {
                t.$options[e] || (t.$options[e] = []), t.$options[e].includes(n) || t.$options[e].push(n)
            }
        },
        127: function(t, e, n) {
            var content = n(186);
            "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(56).default)("72daabed", content, !0, {
                sourceMap: !1
            })
        },
        128: function(t, e, n) {
            var content = n(188);
            "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(56).default)("3191d5ad", content, !0, {
                sourceMap: !1
            })
        },
        129: function(t, e, n) {
            "use strict";
            t.exports = {
                chainId: 56,
                cows: [{
                    id: 1,
                    name: "ETHBot (ETHB)",
                    avatar: "/ETHBonly.png",
                    desc: "Earn ETHB by Staking your ETHB Tokens!",
                    initialized: !0,
                    routeLink: "/ethb",
                    address: "xxx",
                    stakeToken: {
                        address: "0xa1048c1962Ff508E7bC90Ecf3744D2421C1C1320",
                        decimals: 18,
                        symbol: "ETHB"
                    },
                    yieldToken: {
                        address: "0xa1048c1962Ff508E7bC90Ecf3744D2421C1C1320",
                        decimals: 18,
                        symbol: "ETHB"
                    }
                }, {
                    id: 2,
                    name: "ETHB-BNB",
                    avatar: "/ethbBNB.png",
                    desc: "Earn ETHB by Staking your ETHB-BNB LP!",
                    routeLink: "/ethbbnb",
                    initialized: !0,
                    totalAmount: 2e3,
                    address: "xxx",
                    stakeToken: {
                        address: "xxx",
                        decimals: 18,
                        symbol: "ETHB-BNB LP"
                    },
                    yieldToken: {
                        address: "0xa1048c1962Ff508E7bC90Ecf3744D2421C1C1320",
                        decimals: 18,
                        symbol: "ETHB"
                    }
                }, {
                    id: 3,
                    name: "ETHB-BUSD",
                    avatar: "/ethbBUSD.png",
                    desc: "Earn ETHB by Staking your ETHB-BUSD LP!",
                    totalAmount: 2e3,
                    initialized: !0,
                    routeLink: "/ethbbusd",
                    address: "xxx",
                    stakeToken: {
                        address: "xxx",
                        decimals: 18,
                        symbol: "ETHB-BUSD LP"
                    },
                    yieldToken: {
                        address: "0xa1048c1962Ff508E7bC90Ecf3744D2421C1C1320",
                        decimals: 18,
                        symbol: "ETHB"
                    }
                }],
                hybird: {
                    id: 4,
                    name: "Holstein younger sister",
                    avatar: "🐄",
                    desc: "",
                    totalAmount: 2e3,
                    initialized: !0,
                    address: "0x62A5e32EBdf6F98B4C2AFcee7351b4B9eB044F29",
                    stakeToken: {
                        address: "0x0000000000000000000000000000000000000000",
                        decimals: 18,
                        symbol: "BNB"
                    },
                    yieldToken: {
                        address: "0x8e9f5173e16ff93f81579d73a7f9723324d6b6af",
                        decimals: 18,
                        symbol: "MILK"
                    }
                },
                tokens: [{
                    symbol: "bnb",
                    address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
                    decimal: 18
                }, {
                    symbol: "USDT",
                    address: "0x55d398326f99059ff775485246999027b3197955",
                    decimals: 18
                }, {
                    symbol: "WBNB",
                    address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
                    decimals: 18
                }, {
                    symbol: "DOT",
                    address: "0x7083609fce4d1d8dc0c979aab8c869ea2c873402",
                    decimals: 18
                }],
                oracle: "0x05fF2B0DB69458A0750badebc4f9e13aDd608C7F",
                pair_MILK_BNB: "0x6330c052e35f23ad219ad9afbaddf53a68f2b2b2",
                web3Provider: "https://bsc-dataseed1.binance.org",
                cowHero: "0x9086C38D86509d61c9aE4845aad7019dAA2dE48C",
                lockPool: "0x4039DA3341b70345f742C52e0f035c74F7f4F7b1",
                lockToken: {
                    address: "0x6330c052e35f23ad219ad9afbaddf53a68f2b2b2",
                    decimals: 18,
                    symbol: "BNB-MILK LP"
                },
                milk: {
                    address: "0x8e9f5173e16ff93f81579d73a7f9723324d6b6af",
                    decimals: 18,
                    symbol: "MILK"
                }
            }
        },
        130: function(t, e, n) {
            "use strict";
            t.exports = {
                chainId: 56,
                cows: [{
                    id: 1,
                    name: "ETHBot (ETHB)",
                    avatar: "/ETHBonly.png",
                    desc: "Earn ETHB by Staking your ETHB Tokens!",
                    initialized: !0,
                    routeLink: "/ethb",
                    address: "xxx",
                    stakeToken: {
                        address: "0xa1048c1962Ff508E7bC90Ecf3744D2421C1C1320",
                        decimals: 18,
                        symbol: "ETHB"
                    },
                    yieldToken: {
                        address: "0xa1048c1962Ff508E7bC90Ecf3744D2421C1C1320",
                        decimals: 18,
                        symbol: "ETHB"
                    }
                }, {
                    id: 2,
                    name: "ETHB-BNB",
                    avatar: "/ethbBNB.png",
                    desc: "Earn ETHB by Staking your ETHB-BNB LP!",
                    routeLink: "/ethbbnb",
                    initialized: !0,
                    totalAmount: 2e3,
                    address: "xxx",
                    stakeToken: {
                        address: "xxx",
                        decimals: 18,
                        symbol: "ETHB-BNB LP"
                    },
                    yieldToken: {
                        address: "0xa1048c1962Ff508E7bC90Ecf3744D2421C1C1320",
                        decimals: 18,
                        symbol: "ETHB"
                    }
                }, {
                    id: 3,
                    name: "ETHB-BUSD",
                    avatar: "/ethbBUSD.png",
                    desc: "Earn ETHB by Staking your ETHB-BUSD LP!",
                    totalAmount: 2e3,
                    initialized: !0,
                    routeLink: "/ethbbusd",
                    address: "xxx",
                    stakeToken: {
                        address: "xxx",
                        decimals: 18,
                        symbol: "ETHB-BUSD LP"
                    },
                    yieldToken: {
                        address: "0xa1048c1962Ff508E7bC90Ecf3744D2421C1C1320",
                        decimals: 18,
                        symbol: "ETHB"
                    }
                }, {
                    id: 4,
                    name: "ETHB-CAKE",
                    avatar: "/ethbCAKE.png",
                    desc: "Earn ETHB by Staking your ETHB-CAKE LP!",
                    totalAmount: 2e3,
                    initialized: !0,
                    routeLink: "/",
                    address: "xxx",
                    stakeToken: {
                        address: "xxx",
                        decimals: 18,
                        symbol: "ETHB-CAKE LP"
                    },
                    yieldToken: {
                        address: "0xa1048c1962Ff508E7bC90Ecf3744D2421C1C1320",
                        decimals: 18,
                        symbol: "ETHB"
                    }
                }, {
                    id: 5,
                    name: "ETHB-ETH",
                    avatar: "/ethbETH.png",
                    desc: "Earn ETHB by Staking your ETHB-ETH LP!",
                    totalAmount: 2e3,
                    initialized: !0,
                    routeLink: "/",
                    address: "xxx",
                    stakeToken: {
                        address: "xxx",
                        decimals: 18,
                        symbol: "ETHB-ETH LP"
                    },
                    yieldToken: {
                        address: "0xa1048c1962Ff508E7bC90Ecf3744D2421C1C1320",
                        decimals: 18,
                        symbol: "ETHB"
                    }
                }, {
                    id: 6,
                    name: "ETHB-BUSDT",
                    avatar: "/ethbBUSDT.png",
                    desc: "Earn ETHB by Staking your ETHB-BUSDT LP!",
                    totalAmount: 2e3,
                    initialized: !0,
                    routeLink: "/",
                    address: "xxx",
                    stakeToken: {
                        address: "xxx",
                        decimals: 18,
                        symbol: "ETHB-BUSDT LP"
                    },
                    yieldToken: {
                        address: "0xa1048c1962Ff508E7bC90Ecf3744D2421C1C1320",
                        decimals: 18,
                        symbol: "ETHB"
                    }
                }, {
                    id: 7,
                    name: "ETHB-DOGE",
                    avatar: "/ethbDOGE.png",
                    desc: "Earn ETHB by Staking your ETHB-DOGE LP!",
                    totalAmount: 2e3,
                    initialized: !0,
                    routeLink: "/",
                    address: "xxx",
                    stakeToken: {
                        address: "xxx",
                        decimals: 18,
                        symbol: "ETHB-DOGE LP"
                    },
                    yieldToken: {
                        address: "0xa1048c1962Ff508E7bC90Ecf3744D2421C1C1320",
                        decimals: 18,
                        symbol: "ETHB"
                    }
                }, {
                    id: 8,
                    name: "ETHB-ADA",
                    avatar: "/ethbADA.png",
                    desc: "Earn ETHB by Staking your ETHB-ADA LP!",
                    totalAmount: 2e3,
                    initialized: !0,
                    routeLink: "/",
                    address: "xxx",
                    stakeToken: {
                        address: "xxx",
                        decimals: 18,
                        symbol: "ETHB-ADA LP"
                    },
                    yieldToken: {
                        address: "0xa1048c1962Ff508E7bC90Ecf3744D2421C1C1320",
                        decimals: 18,
                        symbol: "ETHB"
                    }
                }, {
                    id: 9,
                    name: "ETHB-DOT",
                    avatar: "/ethbDOT.png",
                    desc: "Earn ETHB by Staking your ETHB-DOT LP!",
                    totalAmount: 2e3,
                    initialized: !0,
                    routeLink: "/",
                    address: "xxx",
                    stakeToken: {
                        address: "xxx",
                        decimals: 18,
                        symbol: "ETHB-DOT LP"
                    },
                    yieldToken: {
                        address: "0xa1048c1962Ff508E7bC90Ecf3744D2421C1C1320",
                        decimals: 18,
                        symbol: "ETHB"
                    }
                }, {
                    id: 10,
                    name: "IDO Launchpad Pair",
                    avatar: "/launchpad.png",
                    desc: "Earn ETHB by Staking your ETHB-DOT LP!",
                    totalAmount: 2e3,
                    initialized: !0,
                    routeLink: "/",
                    address: "xxx",
                    stakeToken: {
                        address: "xxx",
                        decimals: 18,
                        symbol: "ETHB-DOT LP"
                    },
                    yieldToken: {
                        address: "0xa1048c1962Ff508E7bC90Ecf3744D2421C1C1320",
                        decimals: 18,
                        symbol: "ETHB"
                    }
                }, {
                    id: 11,
                    name: "IDO Launchpad Pair",
                    avatar: "/launchpad.png",
                    desc: "Earn ETHB by Staking your ETHB-DOT LP!",
                    totalAmount: 2e3,
                    initialized: !0,
                    routeLink: "/",
                    address: "xxx",
                    stakeToken: {
                        address: "xxx",
                        decimals: 18,
                        symbol: "ETHB-DOT LP"
                    },
                    yieldToken: {
                        address: "0xa1048c1962Ff508E7bC90Ecf3744D2421C1C1320",
                        decimals: 18,
                        symbol: "ETHB"
                    }
                }, {
                    id: 12,
                    name: "IDO Launchpad Pair",
                    avatar: "/launchpad.png",
                    desc: "Earn ETHB by Staking your ETHB-DOT LP!",
                    totalAmount: 2e3,
                    initialized: !0,
                    routeLink: "/",
                    address: "xxx",
                    stakeToken: {
                        address: "xxx",
                        decimals: 18,
                        symbol: "ETHB-DOT LP"
                    },
                    yieldToken: {
                        address: "0xa1048c1962Ff508E7bC90Ecf3744D2421C1C1320",
                        decimals: 18,
                        symbol: "ETHB"
                    }
                }],
                hybird: {
                    id: 4,
                    name: "Holstein younger sister",
                    avatar: "🐄",
                    desc: "",
                    totalAmount: 2e3,
                    initialized: !0,
                    address: "0x62A5e32EBdf6F98B4C2AFcee7351b4B9eB044F29",
                    stakeToken: {
                        address: "0x0000000000000000000000000000000000000000",
                        decimals: 18,
                        symbol: "BNB"
                    },
                    yieldToken: {
                        address: "0x8e9f5173e16ff93f81579d73a7f9723324d6b6af",
                        decimals: 18,
                        symbol: "MILK"
                    }
                },
                tokens: [{
                    symbol: "bnb",
                    address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
                    decimal: 18
                }, {
                    symbol: "USDT",
                    address: "0x55d398326f99059ff775485246999027b3197955",
                    decimals: 18
                }, {
                    symbol: "WBNB",
                    address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
                    decimals: 18
                }, {
                    symbol: "DOT",
                    address: "0x7083609fce4d1d8dc0c979aab8c869ea2c873402",
                    decimals: 18
                }],
                oracle: "0x05fF2B0DB69458A0750badebc4f9e13aDd608C7F",
                pair_MILK_BNB: "0x6330c052e35f23ad219ad9afbaddf53a68f2b2b2",
                web3Provider: "https://bsc-dataseed1.binance.org",
                cowHero: "0x9086C38D86509d61c9aE4845aad7019dAA2dE48C",
                lockPool: "0x4039DA3341b70345f742C52e0f035c74F7f4F7b1",
                lockToken: {
                    address: "0x6330c052e35f23ad219ad9afbaddf53a68f2b2b2",
                    decimals: 18,
                    symbol: "BNB-MILK LP"
                },
                milk: {
                    address: "0x8e9f5173e16ff93f81579d73a7f9723324d6b6af",
                    decimals: 18,
                    symbol: "MILK"
                }
            }
        },
        131: function(t, e, n) {
            var content = n(196);
            "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, n(56).default)("932a8f60", content, !0, {
                sourceMap: !1
            })
        },
        144: function(t, e, n) {
            "use strict";
            n(23), n(35);
            var r = n(15),
                o = n(12),
                c = n(11),
                l = window.__NUXT__;

            function d() {
                if (!this._hydrated) return this.$fetch()
            }

            function f() {
                if ((t = this).$vnode && t.$vnode.elm && t.$vnode.elm.dataset && t.$vnode.elm.dataset.fetchKey) {
                    var t;
                    this._hydrated = !0, this._fetchKey = +this.$vnode.elm.dataset.fetchKey;
                    var data = l.fetch[this._fetchKey];
                    if (data && data._error) this.$fetchState.error = data._error;
                    else
                        for (var e in data) o.default.set(this.$data, e, data[e])
                }
            }

            function h() {
                var t = this;
                return this._fetchPromise || (this._fetchPromise = m.call(this).then((function() {
                    delete t._fetchPromise
                }))), this._fetchPromise
            }

            function m() {
                return v.apply(this, arguments)
            }

            function v() {
                return (v = Object(r.a)(regeneratorRuntime.mark((function t() {
                    var e, n, r, o = this;
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return this.$nuxt.nbFetching++, this.$fetchState.pending = !0, this.$fetchState.error = null, this._hydrated = !1, e = null, n = Date.now(), t.prev = 6, t.next = 9, this.$options.fetch.call(this);
                            case 9:
                                t.next = 15;
                                break;
                            case 11:
                                t.prev = 11, t.t0 = t.catch(6), e = Object(c.o)(t.t0);
                            case 15:
                                if (!((r = this._fetchDelay - (Date.now() - n)) > 0)) {
                                    t.next = 19;
                                    break
                                }
                                return t.next = 19, new Promise((function(t) {
                                    return setTimeout(t, r)
                                }));
                            case 19:
                                this.$fetchState.error = e, this.$fetchState.pending = !1, this.$fetchState.timestamp = Date.now(), this.$nextTick((function() {
                                    return o.$nuxt.nbFetching--
                                }));
                            case 23:
                            case "end":
                                return t.stop()
                        }
                    }), t, this, [
                        [6, 11]
                    ])
                })))).apply(this, arguments)
            }
            e.a = {
                beforeCreate: function() {
                    Object(c.l)(this) && (this._fetchDelay = "number" == typeof this.$options.fetchDelay ? this.$options.fetchDelay : 200, o.default.util.defineReactive(this, "$fetchState", {
                        pending: !1,
                        error: null,
                        timestamp: Date.now()
                    }), this.$fetch = h.bind(this), Object(c.a)(this, "created", f), Object(c.a)(this, "beforeMount", d))
                }
            }
        },
        148: function(t, e, n) {
            t.exports = n(149)
        },
        149: function(t, e, n) {
            "use strict";
            n.r(e),
                function(t) {
                    n(58), n(46), n(63), n(36), n(37), n(88), n(57);
                    var e = n(51),
                        r = (n(35), n(160), n(15)),
                        o = (n(91), n(92), n(45), n(23), n(94), n(49), n(121), n(163), n(171), n(173), n(12)),
                        c = n(140),
                        l = n(97),
                        d = n(11),
                        f = n(29),
                        h = n(144),
                        m = n(81);

                    function v(t) {
                        if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                            if (Array.isArray(t) || (t = function(t, e) {
                                    if (!t) return;
                                    if ("string" == typeof t) return y(t, e);
                                    var n = Object.prototype.toString.call(t).slice(8, -1);
                                    "Object" === n && t.constructor && (n = t.constructor.name);
                                    if ("Map" === n || "Set" === n) return Array.from(n);
                                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return y(t, e)
                                }(t))) {
                                var i = 0,
                                    e = function() {};
                                return {
                                    s: e,
                                    n: function() {
                                        return i >= t.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: t[i++]
                                        }
                                    },
                                    e: function(t) {
                                        throw t
                                    },
                                    f: e
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var n, r, o = !0,
                            c = !1;
                        return {
                            s: function() {
                                n = t[Symbol.iterator]()
                            },
                            n: function() {
                                var t = n.next();
                                return o = t.done, t
                            },
                            e: function(t) {
                                c = !0, r = t
                            },
                            f: function() {
                                try {
                                    o || null == n.return || n.return()
                                } finally {
                                    if (c) throw r
                                }
                            }
                        }
                    }

                    function y(t, e) {
                        (null == e || e > t.length) && (e = t.length);
                        for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                        return n
                    }
                    o.default.__nuxt__fetch__mixin__ || (o.default.mixin(h.a), o.default.__nuxt__fetch__mixin__ = !0), o.default.component(m.a.name, m.a), o.default.component("NLink", m.a), t.fetch || (t.fetch = c.a);
                    var x, w, k = [],
                        _ = window.__NUXT__ || {};
                    Object.assign(o.default.config, {
                        silent: !0,
                        performance: !1
                    });
                    var C = o.default.config.errorHandler || console.error;

                    function P(t, e, n) {
                        for (var r = function(component) {
                                var t = function(component, t) {
                                    if (!component || !component.options || !component.options[t]) return {};
                                    var option = component.options[t];
                                    if ("function" == typeof option) {
                                        for (var e = arguments.length, n = new Array(e > 2 ? e - 2 : 0), r = 2; r < e; r++) n[r - 2] = arguments[r];
                                        return option.apply(void 0, n)
                                    }
                                    return option
                                }(component, "transition", e, n) || {};
                                return "string" == typeof t ? {
                                    name: t
                                } : t
                            }, o = n ? Object(d.g)(n) : [], c = Math.max(t.length, o.length), l = [], f = function(i) {
                                var e = Object.assign({}, r(t[i])),
                                    n = Object.assign({}, r(o[i]));
                                Object.keys(e).filter((function(t) {
                                    return void 0 !== e[t] && !t.toLowerCase().includes("leave")
                                })).forEach((function(t) {
                                    n[t] = e[t]
                                })), l.push(n)
                            }, i = 0; i < c; i++) f(i);
                        return l
                    }

                    function $(t, e, n) {
                        return O.apply(this, arguments)
                    }

                    function O() {
                        return (O = Object(r.a)(regeneratorRuntime.mark((function t(e, n, r) {
                            var o, c, l, f, h = this;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (this._routeChanged = Boolean(x.nuxt.err) || n.name !== e.name, this._paramChanged = !this._routeChanged && n.path !== e.path, this._queryChanged = !this._paramChanged && n.fullPath !== e.fullPath, this._diffQuery = this._queryChanged ? Object(d.i)(e.query, n.query) : [], (this._routeChanged || this._paramChanged) && this.$loading.start && !this.$loading.manual && this.$loading.start(), t.prev = 5, !this._queryChanged) {
                                            t.next = 12;
                                            break
                                        }
                                        return t.next = 9, Object(d.q)(e, (function(t, e) {
                                            return {
                                                Component: t,
                                                instance: e
                                            }
                                        }));
                                    case 9:
                                        o = t.sent, o.some((function(t) {
                                            var r = t.Component,
                                                o = t.instance,
                                                c = r.options.watchQuery;
                                            return !0 === c || (Array.isArray(c) ? c.some((function(t) {
                                                return h._diffQuery[t]
                                            })) : "function" == typeof c && c.apply(o, [e.query, n.query]))
                                        })) && this.$loading.start && !this.$loading.manual && this.$loading.start();
                                    case 12:
                                        r(), t.next = 26;
                                        break;
                                    case 15:
                                        if (t.prev = 15, t.t0 = t.catch(5), c = t.t0 || {}, l = c.statusCode || c.status || c.response && c.response.status || 500, f = c.message || "", !/^Loading( CSS)? chunk (\d)+ failed\./.test(f)) {
                                            t.next = 23;
                                            break
                                        }
                                        return window.location.reload(!0), t.abrupt("return");
                                    case 23:
                                        this.error({
                                            statusCode: l,
                                            message: f
                                        }), this.$nuxt.$emit("routeChanged", e, n, c), r();
                                    case 26:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [5, 15]
                            ])
                        })))).apply(this, arguments)
                    }

                    function j(t, e) {
                        return _.serverRendered && e && Object(d.b)(t, e), t._Ctor = t, t
                    }

                    function B(t) {
                        var path = Object(d.f)(t.options.base, t.options.mode);
                        return Object(d.d)(t.match(path), function() {
                            var t = Object(r.a)(regeneratorRuntime.mark((function t(e, n, r, o, c) {
                                var l;
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if ("function" != typeof e || e.options) {
                                                t.next = 4;
                                                break
                                            }
                                            return t.next = 3, e();
                                        case 3:
                                            e = t.sent;
                                        case 4:
                                            return l = j(Object(d.r)(e), _.data ? _.data[c] : null), r.components[o] = l, t.abrupt("return", l);
                                        case 7:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function(e, n, r, o, c) {
                                return t.apply(this, arguments)
                            }
                        }())
                    }

                    function S(t, e, n) {
                        var r = this,
                            o = [],
                            c = !1;
                        if (void 0 !== n && (o = [], (n = Object(d.r)(n)).options.middleware && (o = o.concat(n.options.middleware)), t.forEach((function(t) {
                                t.options.middleware && (o = o.concat(t.options.middleware))
                            }))), o = o.map((function(t) {
                                return "function" == typeof t ? t : ("function" != typeof l.a[t] && (c = !0, r.error({
                                    statusCode: 500,
                                    message: "Unknown middleware " + t
                                })), l.a[t])
                            })), !c) return Object(d.n)(o, e)
                    }

                    function E(t, e, n) {
                        return A.apply(this, arguments)
                    }

                    function A() {
                        return (A = Object(r.a)(regeneratorRuntime.mark((function t(e, n, o) {
                            var c, l, h, m, y, w, _, C, $, O, j, B, E, A, T, M = this;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return", o());
                                    case 2:
                                        return e === n ? k = [] : (c = [], k = Object(d.g)(n, c).map((function(t, i) {
                                            return Object(d.c)(n.matched[c[i]].path)(n.params)
                                        }))), l = !1, h = function(path) {
                                            n.path === path.path && M.$loading.finish && M.$loading.finish(), n.path !== path.path && M.$loading.pause && M.$loading.pause(), l || (l = !0, o(path))
                                        }, t.next = 7, Object(d.s)(x, {
                                            route: e,
                                            from: n,
                                            next: h.bind(this)
                                        });
                                    case 7:
                                        if (this._dateLastError = x.nuxt.dateErr, this._hadError = Boolean(x.nuxt.err), m = [], (y = Object(d.g)(e, m)).length) {
                                            t.next = 26;
                                            break
                                        }
                                        return t.next = 14, S.call(this, y, x.context);
                                    case 14:
                                        if (!l) {
                                            t.next = 16;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 16:
                                        return w = (f.a.options || f.a).layout, t.next = 19, this.loadLayout("function" == typeof w ? w.call(f.a, x.context) : w);
                                    case 19:
                                        return _ = t.sent, t.next = 22, S.call(this, y, x.context, _);
                                    case 22:
                                        if (!l) {
                                            t.next = 24;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 24:
                                        return x.context.error({
                                            statusCode: 404,
                                            message: "This page could not be found"
                                        }), t.abrupt("return", o());
                                    case 26:
                                        return y.forEach((function(t) {
                                            t._Ctor && t._Ctor.options && (t.options.asyncData = t._Ctor.options.asyncData, t.options.fetch = t._Ctor.options.fetch)
                                        })), this.setTransitions(P(y, e, n)), t.prev = 28, t.next = 31, S.call(this, y, x.context);
                                    case 31:
                                        if (!l) {
                                            t.next = 33;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 33:
                                        if (!x.context._errored) {
                                            t.next = 35;
                                            break
                                        }
                                        return t.abrupt("return", o());
                                    case 35:
                                        return "function" == typeof(C = y[0].options.layout) && (C = C(x.context)), t.next = 39, this.loadLayout(C);
                                    case 39:
                                        return C = t.sent, t.next = 42, S.call(this, y, x.context, C);
                                    case 42:
                                        if (!l) {
                                            t.next = 44;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 44:
                                        if (!x.context._errored) {
                                            t.next = 46;
                                            break
                                        }
                                        return t.abrupt("return", o());
                                    case 46:
                                        $ = !0, t.prev = 47, O = v(y), t.prev = 49, O.s();
                                    case 51:
                                        if ((j = O.n()).done) {
                                            t.next = 62;
                                            break
                                        }
                                        if ("function" == typeof(B = j.value).options.validate) {
                                            t.next = 55;
                                            break
                                        }
                                        return t.abrupt("continue", 60);
                                    case 55:
                                        return t.next = 57, B.options.validate(x.context);
                                    case 57:
                                        if ($ = t.sent) {
                                            t.next = 60;
                                            break
                                        }
                                        return t.abrupt("break", 62);
                                    case 60:
                                        t.next = 51;
                                        break;
                                    case 62:
                                        t.next = 67;
                                        break;
                                    case 64:
                                        t.prev = 64, t.t0 = t.catch(49), O.e(t.t0);
                                    case 67:
                                        return t.prev = 67, O.f(), t.finish(67);
                                    case 70:
                                        t.next = 76;
                                        break;
                                    case 72:
                                        return t.prev = 72, t.t1 = t.catch(47), this.error({
                                            statusCode: t.t1.statusCode || "500",
                                            message: t.t1.message
                                        }), t.abrupt("return", o());
                                    case 76:
                                        if ($) {
                                            t.next = 79;
                                            break
                                        }
                                        return this.error({
                                            statusCode: 404,
                                            message: "This page could not be found"
                                        }), t.abrupt("return", o());
                                    case 79:
                                        return t.next = 81, Promise.all(y.map(function() {
                                            var t = Object(r.a)(regeneratorRuntime.mark((function t(r, i) {
                                                var o, c, l, f, h, v, y, w, p;
                                                return regeneratorRuntime.wrap((function(t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                        case 0:
                                                            if (r._path = Object(d.c)(e.matched[m[i]].path)(e.params), r._dataRefresh = !1, o = r._path !== k[i], M._routeChanged && o ? r._dataRefresh = !0 : M._paramChanged && o ? (c = r.options.watchParam, r._dataRefresh = !1 !== c) : M._queryChanged && (!0 === (l = r.options.watchQuery) ? r._dataRefresh = !0 : Array.isArray(l) ? r._dataRefresh = l.some((function(t) {
                                                                    return M._diffQuery[t]
                                                                })) : "function" == typeof l && (E || (E = Object(d.h)(e)), r._dataRefresh = l.apply(E[i], [e.query, n.query]))), M._hadError || !M._isMounted || r._dataRefresh) {
                                                                t.next = 6;
                                                                break
                                                            }
                                                            return t.abrupt("return");
                                                        case 6:
                                                            return f = [], h = r.options.asyncData && "function" == typeof r.options.asyncData, v = Boolean(r.options.fetch) && r.options.fetch.length, y = h && v ? 30 : 45, h && ((w = Object(d.p)(r.options.asyncData, x.context)).then((function(t) {
                                                                Object(d.b)(r, t), M.$loading.increase && M.$loading.increase(y)
                                                            })), f.push(w)), M.$loading.manual = !1 === r.options.loading, v && ((p = r.options.fetch(x.context)) && (p instanceof Promise || "function" == typeof p.then) || (p = Promise.resolve(p)), p.then((function(t) {
                                                                M.$loading.increase && M.$loading.increase(y)
                                                            })), f.push(p)), t.abrupt("return", Promise.all(f));
                                                        case 14:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }), t)
                                            })));
                                            return function(e, n) {
                                                return t.apply(this, arguments)
                                            }
                                        }()));
                                    case 81:
                                        l || (this.$loading.finish && !this.$loading.manual && this.$loading.finish(), o()), t.next = 98;
                                        break;
                                    case 84:
                                        if (t.prev = 84, t.t2 = t.catch(28), "ERR_REDIRECT" !== (A = t.t2 || {}).message) {
                                            t.next = 89;
                                            break
                                        }
                                        return t.abrupt("return", this.$nuxt.$emit("routeChanged", e, n, A));
                                    case 89:
                                        return k = [], Object(d.k)(A), "function" == typeof(T = (f.a.options || f.a).layout) && (T = T(x.context)), t.next = 95, this.loadLayout(T);
                                    case 95:
                                        this.error(A), this.$nuxt.$emit("routeChanged", e, n, A), o();
                                    case 98:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [28, 84],
                                [47, 72],
                                [49, 64, 67, 70]
                            ])
                        })))).apply(this, arguments)
                    }

                    function T(t, n) {
                        Object(d.d)(t, (function(t, n, r, c) {
                            return "object" !== Object(e.a)(t) || t.options || ((t = o.default.extend(t))._Ctor = t, r.components[c] = t), t
                        }))
                    }

                    function M(t) {
                        var e = this.$options.nuxt.err ? (f.a.options || f.a).layout : t.matched[0].components.default.options.layout;
                        "function" == typeof e && (e = e(x.context)), this.setLayout(e)
                    }

                    function U(t) {
                        t._hadError && t._dateLastError === t.$options.nuxt.dateErr && t.error()
                    }

                    function N(t, e) {
                        var n = this;
                        if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                            var r = Object(d.h)(t),
                                c = Object(d.g)(t);
                            o.default.nextTick((function() {
                                r.forEach((function(t, i) {
                                    if (t && !t._isDestroyed && t.constructor._dataRefresh && c[i] === t.constructor && !0 !== t.$vnode.data.keepAlive && "function" == typeof t.constructor.options.data) {
                                        var e = t.constructor.options.data.call(t);
                                        for (var n in e) o.default.set(t.$data, n, e[n]);
                                        window.$nuxt.$nextTick((function() {
                                            window.$nuxt.$emit("triggerScroll")
                                        }))
                                    }
                                })), U(n)
                            }))
                        }
                    }

                    function D(t) {
                        window.onNuxtReadyCbs.forEach((function(e) {
                            "function" == typeof e && e(t)
                        })), "function" == typeof window._onNuxtLoaded && window._onNuxtLoaded(t), w.afterEach((function(e, n) {
                            o.default.nextTick((function() {
                                return t.$nuxt.$emit("routeChanged", e, n)
                            }))
                        }))
                    }

                    function R() {
                        return (R = Object(r.a)(regeneratorRuntime.mark((function t(e) {
                            var n, r, c, l;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return x = e.app, w = e.router, e.store, n = new o.default(x), r = function() {
                                            n.$mount("#__nuxt"), w.afterEach(T), w.afterEach(M.bind(n)), w.afterEach(N.bind(n)), o.default.nextTick((function() {
                                                D(n)
                                            }))
                                        }, t.next = 7, Promise.all(B(w));
                                    case 7:
                                        if (c = t.sent, n.setTransitions = n.$options.nuxt.setTransitions.bind(n), c.length && (n.setTransitions(P(c, w.currentRoute)), k = w.currentRoute.matched.map((function(t) {
                                                return Object(d.c)(t.path)(w.currentRoute.params)
                                            }))), n.$loading = {}, _.error && n.error(_.error), w.beforeEach($.bind(n)), w.beforeEach(E.bind(n)), _.serverRendered && "/" !== _.routePath && "/" !== _.routePath.slice(-1) && "/" === n.context.route.path.slice(-1) && (n.context.route.path = n.context.route.path.replace(/\/+$/, "")), !_.serverRendered || _.routePath !== n.context.route.path) {
                                            t.next = 18;
                                            break
                                        }
                                        return r(), t.abrupt("return");
                                    case 18:
                                        return l = function() {
                                            T(w.currentRoute, w.currentRoute), M.call(n, w.currentRoute), U(n), r()
                                        }, t.next = 21, new Promise((function(t) {
                                            return setTimeout(t, 0)
                                        }));
                                    case 21:
                                        E.call(n, w.currentRoute, w.currentRoute, (function(path) {
                                            if (path) {
                                                var t = w.afterEach((function(e, n) {
                                                    t(), l()
                                                }));
                                                w.push(path, void 0, (function(t) {
                                                    t && C(t)
                                                }))
                                            } else l()
                                        }));
                                    case 22:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))).apply(this, arguments)
                    }
                    Object(f.b)(null, _.config).then((function(t) {
                        return R.apply(this, arguments)
                    })).catch(C)
                }.call(this, n(34))
        },
        185: function(t, e, n) {
            "use strict";
            n(127)
        },
        186: function(t, e, n) {
            (e = n(55)(!1)).push([t.i, ".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}", ""]), t.exports = e
        },
        187: function(t, e, n) {
            "use strict";
            n(128)
        },
        188: function(t, e, n) {
            (e = n(55)(!1)).push([t.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#fff;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]), t.exports = e
        },
        193: function(t, e, n) {
            t.exports = n.p + "img/ethbHeader.6d29cec.png"
        },
        194: function(t, e, n) {
            var map = {
                "./": 54,
                "./development": 129,
                "./development.js": 129,
                "./index": 54,
                "./index.js": 54,
                "./production": 130,
                "./production.js": 130
            };

            function r(t) {
                var e = o(t);
                return n(e)
            }

            function o(t) {
                if (!n.o(map, t)) {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }
                return map[t]
            }
            r.keys = function() {
                return Object.keys(map)
            }, r.resolve = o, t.exports = r, r.id = 194
        },
        195: function(t, e, n) {
            "use strict";
            n(131)
        },
        196: function(t, e, n) {
            (e = n(55)(!1)).push([t.i, "a{color:#f28123}.header{background-color:#f28123;padding:.5rem;margin-bottom:2rem;color:#fff}.header a{color:#121212;font-weight:600;font-size:1rem}.nav-container{display:flex;align-items:center;justify-content:center}.logo{padding:0;height:32px}.main{min-height:calc(100vh - 144px)}.footer-body{align-items:center;display:flex;justify-content:center;height:72px;width:100%}.support img{height:16px}.link{margin:0 .5rem;text-align:center}.right{display:flex;justify-content:flex-end;align-items:center}.wallet{font-weight:700;cursor:pointer}.dropdown .btn.dropdown-toggle{margin-left:20px;padding:0;background-color:transparent;color:#fff;font-size:1.1rem;border:none;outline:none}.dropdown .btn,.dropdown .btn.dropdown-toggle:active,.dropdown .btn.dropdown-toggle:hover{border-color:transparent;background-color:transparent;box-shadow:none}.dropdown-item.active{color:#f28123;background-color:transparent}.dropdown-item:active{color:#000;background-color:transparent}.dropdown-menu a{color:#16181b}.liquidity-link{margin-top:8px;margin-left:8px;margin-right:8px}", ""]), t.exports = e
        },
        197: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "state", (function() {
                return r
            })), n.d(e, "mutations", (function() {
                return o
            }));
            var r = function() {
                    return {
                        locale: "en",
                        connectedAccount: "",
                        chainId: "",
                        isMathWallet: !1
                    }
                },
                o = {
                    updateLang: function(t, e) {
                        t.locale = e, window.localStorage.language = JSON.stringify(e)
                    },
                    updateConnectedAccount: function(t, e) {
                        t.connectedAccount = e
                    },
                    updateChainId: function(t, e) {
                        t.chainId = e
                    },
                    checkWallet: function(t, b) {
                        t.isMathWallet = b
                    }
                }
        },
        214: function(t) {
            t.exports = JSON.parse('{"navbar":{"home":"Home","market":"WBNB","contracts":"Contracts","airdrop":"Airdrop","getethb":"Get $ETHB","liquidity":"Add Liquidity","about":"About","audit":"Audit","change-to-bsc":"Change to BSC","install-wallet":"Install Wallet","exchange":"Swap","guard":"Cow Guardian","nft":"NFT (Coming Soon)"},"home":{"note":"The Contract is not audited but we have verified all our contracts. Please use at your own risk.","note-launch":"ETHBot farm begins after IDO ends!","protocol-name":"⚛️  ETHBot Farm  ⚛️","protocol-desc":"ETHBot Farm offers a sustainable set of liquidity pool, staking and yield farming system.","coming-soon":"Coming soon","select":"Select","card-desc":"Deposit {symbol}","unlockWallet":"Please unlock your wallet first and refresh the page."},"airdrop":{"airdrop-plan":"Airdrop Plan","airdrop-plan-desc":" 10 MILK will be airdropped.","how-to-get":"How to get airdrop?","join":"Join the Telegram group and follow the twitter below. Each airdrop is 0.1 MILK"},"about":{"title":"ETHBot","total-supply":"Total Supply: {0} ETHB","total-supply-number":"{0}","desc":"ETHBot offers a set of liquidity pool, staking and yield farming system that runs on the Binance Smart Chain (BSC) network that provides attractive yields to the principal liquidity. ","drop-free":"With deflationary mechanisms in-built, we envision a cyptocurrency with sustainable growth over time that rewards holders of long-term staking as well as providing a fun set of non-fungible tokens (NFTs) to enhances staking rewards. As a community-driven project, ETHB tokens will also serve as governance token for proposal and voting in latter stages of the token’s growth.","drop-free-number":"{0}","cow":"Farms Allocation (Set1)","angier":"ETHB: {0} weight","angier-number":"{0}","genxi":"ETHB-BNB: {0} weight","genxi-number":"{0}","holstein":"ETHB-BUSD: {0} weight","holstein-number":"{0}","contracts":"Contracts","milk":"ETHB: {0}","milk-address":"{0}","ethbbnb-address":"{0}","cowfactory":"ETHB Factory: {0}","cowfactory-address":"{0}","angier-cow":"ETHB: {0}","genxin-cow":"ETHB-BNB: {0}","holstein1-cow":"ETHB-BUSD: {0}","holstein2-cow":"Holstein younger sister Cow: {0}","angier-cow-address":"{0}","ethbbnb":"ETHB-BNB LP {0}","ethbbnbstaking":"ETHB-BNB Staking Contract {0}","ethbbusd":"ETHB-BUSD LP {0}","ethbbusdstaking":"ETHB-BUSD Staking Contract {0}","ethbstaking":"ETHB Staking Contract {0}"},"cow":{"earned":"ETHB earned","harvest":"Harvest","symbol-staked":"{symbol} staked","approve-symbol":"Approve {symbol}","stake":"Stake","harvest-unstake":"Unstake","exit":"Harvest and Exit","balance":"Balance: ","greater-than":"Must be greater than 0","unstake":"Unstake","staking-balance":"Your staking balance: {stakingBalance} {symbol}","amount-greater-than":"Amount must be great than 0","total":"Total","available":"Your Available Balance","staking":"is staking","warning":"Warning: Because BNB lending rate On cream.finance is very high, your staking BNB may be borrowed, it will be temporarily unable to withdraw due to insufficient liquidity, and it can be withdrawn after sufficient liquidity.","desc1":"She likes BNB, and NFT COW is required.","desc2":"Each NFT COW has a limit of 500 BNB"},"market":{"tip":"Do a small amount test first, and then do a large amount operation.","from":"From {symbol}","balance":"Balance: {balance}","greather-than":"Must be greater than 0","to":"To {symbol}","swap":"Swap {symbol}","amount":"Amount","title-swap":"Exchange","title-transaction":"Transaction","copied":"Copied","success":"Success","error":"Failed"},"footerbar":{"twitter":"Twitter","telegram":"Telegram(Chinese)","telegram_en":"Telegram","github":"GitHub"},"nft":{"about":"About Cow Guard Plan"}}')
        },
        215: function(t) {
            t.exports = JSON.parse('{"navbar":{"home":"首页","market":"WBNB兑换","airdrop":"空投","about":"关于","getethb":"获取 $ETHB","contracts":"智能合约/原始码","audit":"审计","change-to-bsc":"更换为币安智能链","install-wallet":"安装钱包","exchange":"交易","guard":"奶牛守卫","nft":"NFT(即将到来)","liquidity":"增加流动"},"home":{"note":"该合约开源但未经过审核, 请自行承担使用风险。","note-launch":"HPP农场将于2月21日UTC开始！","protocol-name":"⚛️  ETHBot Farm  ⚛️ ","protocol-desc":"ETHBot 提供了一套可持续的流动资金池和增产收益农场体系。","coming-soon":"即将到来","select":"选择","card-desc":"喜欢 {symbol}","unlockWallet":"请先解锁你的钱包并刷新页面。"},"airdrop":{"airdrop-plan":"空投计划","airdrop-plan-desc":"MILK计划空投的数量为 10","how-to-get":"如何获得空投?","join":"加入官方电报群并且关注Twitter官方账号。每次空投将有0.1 MILK"},"about":{"title":"ETHBot","total-supply":"总供应量: {0} ETHB","total-supply-number":"{0}","desc":"金瓜Defi提供一套可持续挖的流动性矿池以及Yield Farming系统，在Binance币安智能链（BSC）网络上运行，为流动性提供有吸引力的收益。","drop-free":"可持续的代币增长: 我们设想代币的供需平衡，以实$ETHB的可持续增长。随着通货紧缩机制的建立，每一$ETHB交易中的1%将从总供应中烧掉。 总供应量的一部分将被分配用于回购，以控制通胀压力。","drop-free-number":"{0}","cow":"代币排放分配","angier":"ETHB: 总量 {0} ","angier-number":"{0}","genxi":"ETHB-BNB: 总量 {0} ","genxi-number":"{0}","holstein":"ETHB-BUSD: 总量 {0}","holstein2":"荷斯坦妹妹: 总量 2000 MILK，每天 100 MILK，共20天。","holstein-number":"{0}","contracts":"合约","milk":"ETHB: {0}","milk-address":"{0}","cowfactory":"农场: {0}","cowfactory-address":"{0}","angier-cow":"昂格尔: {0}","genxin-cow":"根西: {0}","holstein1-cow":"荷斯坦姐姐: {0}","holstein2-cow":"荷斯坦妹妹: {0}","angier-cow-address":"{0}","ETHBbnb":"ETHB-BNB LP {0}","ETHBbnbstaking":"ETHB-BNB Staking Contract {0}","ETHBbusd":"ETHB-BUSD LP {0}","ethbbusdstaking":"ETHB-BUSD Staking Contract {0}","ethbstaking":"ETHB Staking Contract {0}"},"cow":{"earned":"已赚取ETHB","harvest":"收获","symbol-staked":"已质押{symbol}","approve-symbol":"批准{symbol}","stake":"质押","available":"您的可用余额","harvest-unstake":"解押","exit":"收获并退出","balance":"余额: ","greater-than":"必须大于0","unstake":"解押","staking-balance":"您的质押余额: {stakingBalance} {symbol}","amount-greater-than":"数量必须大于0","total":"总共","staking":"在挖矿","warning":"提醒: 由于近期CREAM.finance的BNB借出率很高，挖矿的BNB可能会被借走，所以取出的时候会由于流动性不足而暂时不能提出来，可以等流动性充足再提取。","desc1":"她喜欢BNB，但是必须锁定 NFT COW 才能挤奶","desc2":"每个 NFT COW 限额 500 BNB"},"market":{"tip":"提醒：先做小额测试，再做大额操作。","from":"从 {symbol}","balance":"余额: {balance}","greather-than":"必须大于0","to":"到 {symbol}","swap":"兑换为 {symbol}","amount":"数量","title-swap":"兑换","title-transaction":"交易","copied":"已复制","success":"成功","error":"Failed"},"footerbar":{"twitter":"Twitter","telegram":"电报(中文)","telegram_en":"电报","github":"GitHub"},"nft":{"about":"关于奶牛守卫计划"}}')
        },
        29: function(t, e, n) {
            "use strict";
            n.d(e, "b", (function() {
                return bt
            })), n.d(e, "a", (function() {
                return B
            }));
            n(35), n(126), n(46), n(45), n(23), n(94);
            var r = n(15),
                o = n(80),
                c = (n(49), n(12)),
                l = n(141),
                d = n(98),
                f = n.n(d),
                h = n(53),
                m = n.n(h),
                v = n(68),
                y = n(11);
            "scrollRestoration" in window.history && (window.history.scrollRestoration = "manual", window.addEventListener("beforeunload", (function() {
                window.history.scrollRestoration = "auto"
            })), window.addEventListener("load", (function() {
                window.history.scrollRestoration = "manual"
            })));
            var x = function() {},
                w = v.a.prototype.push;
            v.a.prototype.push = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : x,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                return w.call(this, t, e, n)
            }, c.default.use(v.a);
            var k = {
                mode: "history",
                base: decodeURI("/"),
                linkActiveClass: "nuxt-link-active",
                linkExactActiveClass: "nuxt-link-exact-active",
                scrollBehavior: function(t, e, n) {
                    var r = !1,
                        o = Object(y.g)(t);
                    (o.length < 2 && o.every((function(t) {
                        return !1 !== t.options.scrollToTop
                    })) || o.some((function(t) {
                        return t.options.scrollToTop
                    }))) && (r = {
                        x: 0,
                        y: 0
                    }), n && (r = n);
                    var c = window.$nuxt;
                    return t.path === e.path && t.hash !== e.hash && c.$nextTick((function() {
                        return c.$emit("triggerScroll")
                    })), new Promise((function(e) {
                        c.$once("triggerScroll", (function() {
                            if (t.hash) {
                                var n = t.hash;
                                void 0 !== window.CSS && void 0 !== window.CSS.escape && (n = "#" + window.CSS.escape(n.substr(1)));
                                try {
                                    document.querySelector(n) && (r = {
                                        selector: n
                                    })
                                } catch (t) {
                                    console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")
                                }
                            }
                            e(r)
                        }))
                    }))
                },
                routes: [{
                    path: "/about",
                    component: function() {
                        return Object(y.m)(n.e(4).then(n.bind(null, 682)))
                    },
                    name: "about"
                }, {
                    path: "/airdrop",
                    component: function() {
                        return Object(y.m)(n.e(5).then(n.bind(null, 683)))
                    },
                    name: "airdrop"
                }, {
                    path: "/audit",
                    component: function() {
                        return Object(y.m)(n.e(6).then(n.bind(null, 684)))
                    },
                    name: "audit"
                }, {
                    path: "/contracts",
                    component: function() {
                        return Object(y.m)(n.e(7).then(n.bind(null, 685)))
                    },
                    name: "contracts"
                }, {
                    path: "/guard",
                    component: function() {
                        return Object(y.m)(n.e(10).then(n.bind(null, 686)))
                    },
                    name: "guard"
                }, {
                    path: "/ethb",
                    component: function() {
                        return Object(y.m)(Promise.all([n.e(1), n.e(0), n.e(12)]).then(n.bind(null, 675)))
                    },
                    name: "ethb"
                }, {
                    path: "/ethbbnb",
                    component: function() {
                        return Object(y.m)(Promise.all([n.e(1), n.e(0), n.e(13)]).then(n.bind(null, 676)))
                    },
                    name: "ethbbnb"
                }, {
                    path: "/ethbbusd",
                    component: function() {
                        return Object(y.m)(Promise.all([n.e(1), n.e(0), n.e(14)]).then(n.bind(null, 677)))
                    },
                    name: "ethbbusd"
                }, {
                    path: "/pumpkin",
                    component: function() {
                        return Object(y.m)(Promise.all([n.e(1), n.e(0), n.e(15)]).then(n.bind(null, 678)))
                    },
                    name: "pumpkin"
                }, {
                    path: "/cow/hybird",
                    component: function() {
                        return Object(y.m)(Promise.all([n.e(1), n.e(0), n.e(9)]).then(n.bind(null, 679)))
                    },
                    name: "cow/hybird"
                }, {
                    path: "/cow/:id?",
                    component: function() {
                        return Object(y.m)(Promise.all([n.e(1), n.e(0), n.e(8)]).then(n.bind(null, 680)))
                    },
                    name: "cow/id"
                }, {
                    path: "/",
                    component: function() {
                        return Object(y.m)(Promise.all([n.e(1), n.e(0), n.e(11)]).then(n.bind(null, 681)))
                    },
                    name: "index"
                }],
                fallback: !1
            };

            function _() {
                return new v.a(k)
            }
            var C = {
                    name: "NuxtChild",
                    functional: !0,
                    props: {
                        nuxtChildKey: {
                            type: String,
                            default: ""
                        },
                        keepAlive: Boolean,
                        keepAliveProps: {
                            type: Object,
                            default: void 0
                        }
                    },
                    render: function(t, e) {
                        var n = e.parent,
                            data = e.data,
                            r = e.props,
                            o = n.$createElement;
                        data.nuxtChild = !0;
                        for (var c = n, l = n.$nuxt.nuxt.transitions, d = n.$nuxt.nuxt.defaultTransition, f = 0; n;) n.$vnode && n.$vnode.data.nuxtChild && f++, n = n.$parent;
                        data.nuxtChildDepth = f;
                        var h = l[f] || d,
                            m = {};
                        P.forEach((function(t) {
                            void 0 !== h[t] && (m[t] = h[t])
                        }));
                        var v = {};
                        $.forEach((function(t) {
                            "function" == typeof h[t] && (v[t] = h[t].bind(c))
                        }));
                        var y = v.beforeEnter;
                        if (v.beforeEnter = function(t) {
                                if (window.$nuxt.$nextTick((function() {
                                        window.$nuxt.$emit("triggerScroll")
                                    })), y) return y.call(c, t)
                            }, !1 === h.css) {
                            var x = v.leave;
                            (!x || x.length < 2) && (v.leave = function(t, e) {
                                x && x.call(c, t), c.$nextTick(e)
                            })
                        }
                        var w = o("routerView", data);
                        return r.keepAlive && (w = o("keep-alive", {
                            props: r.keepAliveProps
                        }, [w])), o("transition", {
                            props: m,
                            on: v
                        }, [w])
                    }
                },
                P = ["name", "mode", "appear", "css", "type", "duration", "enterClass", "leaveClass", "appearClass", "enterActiveClass", "enterActiveClass", "leaveActiveClass", "appearActiveClass", "enterToClass", "leaveToClass", "appearToClass"],
                $ = ["beforeEnter", "enter", "afterEnter", "enterCancelled", "beforeLeave", "leave", "afterLeave", "leaveCancelled", "beforeAppear", "appear", "afterAppear", "appearCancelled"],
                O = {
                    name: "NuxtError",
                    props: {
                        error: {
                            type: Object,
                            default: null
                        }
                    },
                    computed: {
                        statusCode: function() {
                            return this.error && this.error.statusCode || 500
                        },
                        message: function() {
                            return this.error.message || "Error"
                        }
                    },
                    head: function() {
                        return {
                            title: this.message,
                            meta: [{
                                name: "viewport",
                                content: "width=device-width,initial-scale=1.0,minimum-scale=1.0"
                            }]
                        }
                    }
                },
                j = (n(185), n(41)),
                B = Object(j.a)(O, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "__nuxt-error-page"
                    }, [n("div", {
                        staticClass: "error"
                    }, [n("svg", {
                        attrs: {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "90",
                            height: "90",
                            fill: "#DBE1EC",
                            viewBox: "0 0 48 48"
                        }
                    }, [n("path", {
                        attrs: {
                            d: "M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"
                        }
                    })]), t._v(" "), n("div", {
                        staticClass: "title"
                    }, [t._v(t._s(t.message))]), t._v(" "), 404 === t.statusCode ? n("p", {
                        staticClass: "description"
                    }, [n("NuxtLink", {
                        staticClass: "error-link",
                        attrs: {
                            to: "/"
                        }
                    }, [t._v("Back to the home page")])], 1) : t._e(), t._v(" "), t._m(0)])])
                }), [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "logo"
                    }, [e("a", {
                        attrs: {
                            href: "https://nuxtjs.org",
                            target: "_blank",
                            rel: "noopener"
                        }
                    }, [this._v("Nuxt.js")])])
                }], !1, null, null, null).exports,
                S = (n(36), n(37), n(88), n(67)),
                E = {
                    name: "Nuxt",
                    components: {
                        NuxtChild: C,
                        NuxtError: B
                    },
                    props: {
                        nuxtChildKey: {
                            type: String,
                            default: void 0
                        },
                        keepAlive: Boolean,
                        keepAliveProps: {
                            type: Object,
                            default: void 0
                        },
                        name: {
                            type: String,
                            default: "default"
                        }
                    },
                    errorCaptured: function(t) {
                        this.displayingNuxtError && (this.errorFromNuxtError = t, this.$forceUpdate())
                    },
                    computed: {
                        routerViewKey: function() {
                            if (void 0 !== this.nuxtChildKey || this.$route.matched.length > 1) return this.nuxtChildKey || Object(y.c)(this.$route.matched[0].path)(this.$route.params);
                            var t = Object(S.a)(this.$route.matched, 1)[0];
                            if (!t) return this.$route.path;
                            var e = t.components.default;
                            if (e && e.options) {
                                var n = e.options;
                                if (n.key) return "function" == typeof n.key ? n.key(this.$route) : n.key
                            }
                            return /\/$/.test(t.path) ? this.$route.path : this.$route.path.replace(/\/$/, "")
                        }
                    },
                    beforeCreate: function() {
                        c.default.util.defineReactive(this, "nuxt", this.$root.$options.nuxt)
                    },
                    render: function(t) {
                        var e = this;
                        return this.nuxt.err ? this.errorFromNuxtError ? (this.$nextTick((function() {
                            return e.errorFromNuxtError = !1
                        })), t("div", {}, [t("h2", "An error occurred while showing the error page"), t("p", "Unfortunately an error occurred and while showing the error page another error occurred"), t("p", "Error details: ".concat(this.errorFromNuxtError.toString())), t("nuxt-link", {
                            props: {
                                to: "/"
                            }
                        }, "Go back to home")])) : (this.displayingNuxtError = !0, this.$nextTick((function() {
                            return e.displayingNuxtError = !1
                        })), t(B, {
                            props: {
                                error: this.nuxt.err
                            }
                        })) : t("NuxtChild", {
                            key: this.routerViewKey,
                            props: this.$props
                        })
                    }
                },
                A = (n(58), n(63), n(57), {
                    name: "NuxtLoading",
                    data: function() {
                        return {
                            percent: 0,
                            show: !1,
                            canSucceed: !0,
                            reversed: !1,
                            skipTimerCount: 0,
                            rtl: !1,
                            throttle: 200,
                            duration: 5e3,
                            continuous: !1
                        }
                    },
                    computed: {
                        left: function() {
                            return !(!this.continuous && !this.rtl) && (this.rtl ? this.reversed ? "0px" : "auto" : this.reversed ? "auto" : "0px")
                        }
                    },
                    beforeDestroy: function() {
                        this.clear()
                    },
                    methods: {
                        clear: function() {
                            clearInterval(this._timer), clearTimeout(this._throttle), this._timer = null
                        },
                        start: function() {
                            var t = this;
                            return this.clear(), this.percent = 0, this.reversed = !1, this.skipTimerCount = 0, this.canSucceed = !0, this.throttle ? this._throttle = setTimeout((function() {
                                return t.startTimer()
                            }), this.throttle) : this.startTimer(), this
                        },
                        set: function(t) {
                            return this.show = !0, this.canSucceed = !0, this.percent = Math.min(100, Math.max(0, Math.floor(t))), this
                        },
                        get: function() {
                            return this.percent
                        },
                        increase: function(t) {
                            return this.percent = Math.min(100, Math.floor(this.percent + t)), this
                        },
                        decrease: function(t) {
                            return this.percent = Math.max(0, Math.floor(this.percent - t)), this
                        },
                        pause: function() {
                            return clearInterval(this._timer), this
                        },
                        resume: function() {
                            return this.startTimer(), this
                        },
                        finish: function() {
                            return this.percent = this.reversed ? 0 : 100, this.hide(), this
                        },
                        hide: function() {
                            var t = this;
                            return this.clear(), setTimeout((function() {
                                t.show = !1, t.$nextTick((function() {
                                    t.percent = 0, t.reversed = !1
                                }))
                            }), 500), this
                        },
                        fail: function(t) {
                            return this.canSucceed = !1, this
                        },
                        startTimer: function() {
                            var t = this;
                            this.show || (this.show = !0), void 0 === this._cut && (this._cut = 1e4 / Math.floor(this.duration)), this._timer = setInterval((function() {
                                t.skipTimerCount > 0 ? t.skipTimerCount-- : (t.reversed ? t.decrease(t._cut) : t.increase(t._cut), t.continuous && (t.percent >= 100 || t.percent <= 0) && (t.skipTimerCount = 1, t.reversed = !t.reversed))
                            }), 100)
                        }
                    },
                    render: function(t) {
                        var e = t(!1);
                        return this.show && (e = t("div", {
                            staticClass: "nuxt-progress",
                            class: {
                                "nuxt-progress-notransition": this.skipTimerCount > 0, "nuxt-progress-failed": !this.canSucceed
                            },
                            style: {
                                width: this.percent + "%",
                                left: this.left
                            }
                        })), e
                    }
                }),
                T = (n(187), Object(j.a)(A, void 0, void 0, !1, null, null, null).exports),
                M = (n(189), n(191), n(103)),
                U = n(54),
                N = {
                    data: function() {
                        return {
                            walletInstalled: !0,
                            walletLocked: !1,
                            language: {
                                en: "English",
                                zh_CN: "简体中文"
                            }
                        }
                    },
                    computed: {
                        currentLang: function() {
                            return this.$store.state.locale
                        },
                        checkChainId: function() {
                            return !!/MathWallet/i.test(window.navigator.userAgent) || (!(!window.detectProvider || !window.detectProvider.isTrust) || (!!this.$store.state.isMathWallet || U.default.chainId == this.$store.state.chainId))
                        }
                    },
                    methods: {
                        checkLanguage: function(t) {
                            this.$i18n.locale = t, this.$store.commit("updateLang", t)
                        },
                        shortAddr: function(t) {
                            return M.a.shortAddr(t)
                        },
                        onUnlock: function() {
                            var t = this;
                            return Object(r.a)(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, t.$onConnect();
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        }
                    },
                    created: function() {
                        var t = this;
                        return Object(r.a)(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, t.$onConnect();
                                    case 3:
                                        e.next = 8;
                                        break;
                                    case 5:
                                        e.prev = 5, e.t0 = e.catch(0), "Error: User rejected the signature request" == e.t0.toString() && (t.walletLocked = !0);
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 5]
                            ])
                        })))()
                    }
                },
                D = (n(195), Object(j.a)(N, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return r("div", {
                        staticStyle: {
                            "background-color": "#121212 !important"
                        }
                    }, [r("div", {
                        staticClass: "header"
                    }, [r("div", {
                        staticClass: "container"
                    }, [r("div", {
                        staticClass: "row"
                    }, [r("div", {
                        staticClass: "col-md-2 col-sm-5 nav-link text-center"
                    }, [r("router-link", {
                        attrs: {
                            to: "/"
                        }
                    }, [r("img", {
                        staticClass: "logo",
                        attrs: {
                            src: n(193)
                        }
                    })])], 1), t._v(" "), r("div", {
                        staticClass: "col-md-6 text-center nav-container"
                    }, [r("b-nav", {
                        staticClass: "justify-content-center"
                    }, [r("b-nav-item", [r("router-link", {
                        attrs: {
                            to: "/"
                        }
                    }, [t._v("\n                " + t._s(t.$t("navbar.home")) + "\n              ")])], 1), t._v(" "), r("b-nav-item", [r("router-link", {
                        attrs: {
                            to: "/about"
                        }
                    }, [t._v("\n                " + t._s(t.$t("navbar.about")) + "\n              ")])], 1), t._v(" "), r("b-nav-item", [r("router-link", {
                        attrs: {
                            to: "/contracts"
                        }
                    }, [t._v("\n                " + t._s(t.$t("navbar.contracts")) + "\n              ")])], 1), t._v(" "), r("a", {
                        staticClass: "liquidity-link",
                        attrs: {
                            href: "https://exchange.pancakeswap.finance/#/swap?outputCurrency="
                        }
                    }, [t._v("\n              " + t._s(t.$t("navbar.getethb")) + "\n            ")]), t._v(" "), r("a", {
                        staticClass: "liquidity-link",
                        attrs: {
                            href: "https://exchange.pancakeswap.finance/#/add/ETH/"
                        }
                    }, [t._v("\n              " + t._s(t.$t("navbar.liquidity")) + "\n            ")])], 1)], 1), t._v(" "), r("div", {
                        staticClass: "col-md-4 col-sm-5 text-right nav-link right"
                    }, [t.walletInstalled ? r("div", {
                        staticClass: "wallet"
                    }, [t.checkChainId ? r("span", [r("router-link", {
                        attrs: {
                            to: "/me"
                        }
                    }, [t.$store.state.connectedAccount ? r("span", {
                        staticClass: "addr"
                    }, [r("b-icon-wallet"), t._v("\n                  " + t._s(t.shortAddr(t.$store.state.connectedAccount)) + "\n                ")], 1) : t._e()])], 1) : r("a", {
                        attrs: {
                            href: "https://docs.binance.org/smart-chain/wallet/metamask.html",
                            target: "_blank"
                        }
                    }, [t._v(t._s(t.$t("navbar.change-to-bsc")))])]) : r("div", [r("a", {
                        attrs: {
                            href: "https://metamask.io/",
                            target: "_blank"
                        }
                    }, [t._v(t._s(t.$t("navbar.install-wallet")))])]), t._v(" "), r("b-dropdown", {
                        staticClass: "dropdown",
                        attrs: {
                            text: "en" == t.currentLang ? t.language.en : t.language.zh_CN
                        }
                    }, [r("b-dropdown-item", {
                        attrs: {
                            active: "en" == t.currentLang
                        },
                        on: {
                            click: function(e) {
                                return t.checkLanguage("en")
                            }
                        }
                    }, [t._v(t._s(t.language.en))]), t._v(" "), r("b-dropdown-item", {
                        attrs: {
                            active: "zh_CN" == t.currentLang
                        },
                        on: {
                            click: function(e) {
                                return t.checkLanguage("zh_CN")
                            }
                        }
                    }, [t._v(t._s(t.language.zh_CN))])], 1)], 1)])])]), t._v(" "), r("div", {
                        staticClass: "container main"
                    }, [r("b-row", [r("b-col", {
                        staticClass: "d-none d-sm-block",
                        attrs: {
                            cols: "2"
                        }
                    }), t._v(" "), r("b-col", {
                        attrs: {
                            md: "8",
                            sm: "12"
                        }
                    }, [t.walletLocked ? r("div", {
                        staticClass: "alert alert-warning"
                    }, [r("b-icon-exclamation-triangle-fill"), t._v("\n          " + t._s(t.$t("home.unlockWallet")) + "\n        ")], 1) : t._e(), t._v(" "), r("nuxt")], 1), t._v(" "), r("b-col", {
                        staticClass: "d-none d-sm-block",
                        attrs: {
                            cols: "2"
                        }
                    })], 1)], 1), t._v(" "), r("div", {
                        staticClass: "footer"
                    }, [r("div", {
                        staticClass: "footer-body"
                    }, [r("a", {
                        staticClass: "link",
                        attrs: {
                            href: "https://twitter.com/ethbot_live",
                            target: "_blank"
                        }
                    }, [t._v(t._s(t.$t("footerbar.twitter")))]), t._v(" "), r("a", {
                        staticClass: "link",
                        attrs: {
                            href: "https://t.me/ethbot_official",
                            target: "_blank"
                        }
                    },  [t._v(t._s(t.$t("footerbar.telegram_en")))]), t._v(" "), r("a", {
                        staticClass: "link",
                        attrs: {
                            href: "https://ethbot.medium.com/",
                            target: "_blank"
                        }
                    }, [t._v(t._s(t.$t("Medium")))]),t._v(" "), r("a", {
                        staticClass: "link",
                        attrs: {
                            href: "https://ethbot.live/files/anchain.pdf",
                            target: "_blank"
                        }
                    }, [t._v(t._s(t.$t("Audit1")))]), t._v(" "), r("a", {
                        staticClass: "link",
                        attrs: {
                            href: "https://ethbot.live/files/techrate.pdf",
                            target: "_blank"
                        }
                    }, [t._v(t._s(t.$t("Audit2")))]), t._v(" "), r("a", {
                        staticClass: "link",
                        attrs: {
                            href: "https://github.com/ethbotlive/ETHBot-Contracts",
                            target: "_blank"
                        }
                    }, [t._v("\n        Github\n      ")])])])])
                }), [], !1, null, null, null).exports);

            function R(t) {
                if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (t = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return L(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(n);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return L(t, e)
                        }(t))) {
                        var i = 0,
                            e = function() {};
                        return {
                            s: e,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: e
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var n, r, o = !0,
                    c = !1;
                return {
                    s: function() {
                        n = t[Symbol.iterator]()
                    },
                    n: function() {
                        var t = n.next();
                        return o = t.done, t
                    },
                    e: function(t) {
                        c = !0, r = t
                    },
                    f: function() {
                        try {
                            o || null == n.return || n.return()
                        } finally {
                            if (c) throw r
                        }
                    }
                }
            }

            function L(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n
            }
            var I = {
                    _default: Object(y.r)(D)
                },
                F = {
                    render: function(t, e) {
                        var n = t("NuxtLoading", {
                                ref: "loading"
                            }),
                            r = t(this.layout || "nuxt"),
                            o = t("div", {
                                domProps: {
                                    id: "__layout"
                                },
                                key: this.layoutName
                            }, [r]),
                            c = t("transition", {
                                props: {
                                    name: "layout",
                                    mode: "out-in"
                                },
                                on: {
                                    beforeEnter: function(t) {
                                        window.$nuxt.$nextTick((function() {
                                            window.$nuxt.$emit("triggerScroll")
                                        }))
                                    }
                                }
                            }, [o]);
                        return t("div", {
                            domProps: {
                                id: "__nuxt"
                            }
                        }, [n, c])
                    },
                    data: function() {
                        return {
                            isOnline: !0,
                            layout: null,
                            layoutName: "",
                            nbFetching: 0
                        }
                    },
                    beforeCreate: function() {
                        c.default.util.defineReactive(this, "nuxt", this.$options.nuxt)
                    },
                    created: function() {
                        c.default.prototype.$nuxt = this, window.$nuxt = this, this.refreshOnlineStatus(), window.addEventListener("online", this.refreshOnlineStatus), window.addEventListener("offline", this.refreshOnlineStatus), this.error = this.nuxt.error, this.context = this.$options.context
                    },
                    mounted: function() {
                        var t = this;
                        return Object(r.a)(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        t.$loading = t.$refs.loading;
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    watch: {
                        "nuxt.err": "errorChanged"
                    },
                    computed: {
                        isOffline: function() {
                            return !this.isOnline
                        },
                        isFetching: function() {
                            return this.nbFetching > 0
                        },
                        isPreview: function() {
                            return Boolean(this.$options.previewData)
                        }
                    },
                    methods: {
                        refreshOnlineStatus: function() {
                            void 0 === window.navigator.onLine ? this.isOnline = !0 : this.isOnline = window.navigator.onLine
                        },
                        refresh: function() {
                            var t = this;
                            return Object(r.a)(regeneratorRuntime.mark((function e() {
                                var n, r;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if ((n = Object(y.h)(t.$route)).length) {
                                                e.next = 3;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 3:
                                            return t.$loading.start(), r = n.map((function(e) {
                                                var p = [];
                                                if (e.$options.fetch && e.$options.fetch.length && p.push(Object(y.p)(e.$options.fetch, t.context)), e.$fetch) p.push(e.$fetch());
                                                else {
                                                    var n, r = R(Object(y.e)(e.$vnode.componentInstance));
                                                    try {
                                                        for (r.s(); !(n = r.n()).done;) {
                                                            var component = n.value;
                                                            p.push(component.$fetch())
                                                        }
                                                    } catch (t) {
                                                        r.e(t)
                                                    } finally {
                                                        r.f()
                                                    }
                                                }
                                                return e.$options.asyncData && p.push(Object(y.p)(e.$options.asyncData, t.context).then((function(t) {
                                                    for (var n in t) c.default.set(e.$data, n, t[n])
                                                }))), Promise.all(p)
                                            })), e.prev = 5, e.next = 8, Promise.all(r);
                                        case 8:
                                            e.next = 15;
                                            break;
                                        case 10:
                                            e.prev = 10, e.t0 = e.catch(5), t.$loading.fail(e.t0), Object(y.k)(e.t0), t.error(e.t0);
                                        case 15:
                                            t.$loading.finish();
                                        case 16:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [5, 10]
                                ])
                            })))()
                        },
                        errorChanged: function() {
                            this.nuxt.err && this.$loading && (this.$loading.fail && this.$loading.fail(this.nuxt.err), this.$loading.finish && this.$loading.finish())
                        },
                        setLayout: function(t) {
                            return t && I["_" + t] || (t = "default"), this.layoutName = t, this.layout = I["_" + t], this.layout
                        },
                        loadLayout: function(t) {
                            return t && I["_" + t] || (t = "default"), Promise.resolve(I["_" + t])
                        }
                    },
                    components: {
                        NuxtLoading: T
                    }
                },
                z = n(99);
            c.default.use(z.a);
            var K = {};
            (K = function(t, e) {
                if ((t = t.default || t).commit) throw new Error("[nuxt] ".concat(e, " should export a method that returns a Vuex instance."));
                return "function" != typeof t && (t = Object.assign({}, t)),
                    function(t, e) {
                        if (t.state && "function" != typeof t.state) {
                            console.warn("'state' should be a method that returns an object in ".concat(e));
                            var n = Object.assign({}, t.state);
                            t = Object.assign({}, t, {
                                state: function() {
                                    return n
                                }
                            })
                        }
                        return t
                    }(t, e)
            }(n(197), "store/index.js")).modules = K.modules || {};
            var H = K instanceof Function ? K : function() {
                return new z.a.Store(Object.assign({
                    strict: !1
                }, K))
            };
            var W = n(65),
                J = n.n(W),
                G = n(143),
                X = n.n(G);

            function Q(t) {
                if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (t = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return V(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(n);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return V(t, e)
                        }(t))) {
                        var i = 0,
                            e = function() {};
                        return {
                            s: e,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: e
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var n, r, o = !0,
                    c = !1;
                return {
                    s: function() {
                        n = t[Symbol.iterator]()
                    },
                    n: function() {
                        var t = n.next();
                        return o = t.done, t
                    },
                    e: function(t) {
                        c = !0, r = t
                    },
                    f: function() {
                        try {
                            o || null == n.return || n.return()
                        } finally {
                            if (c) throw r
                        }
                    }
                }
            }

            function V(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n
            }
            for (var Y = {
                    setBaseURL: function(t) {
                        this.defaults.baseURL = t
                    },
                    setHeader: function(t, e) {
                        var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
                            o = Q(Array.isArray(r) ? r : [r]);
                        try {
                            for (o.s(); !(n = o.n()).done;) {
                                var c = n.value;
                                if (!e) return void delete this.defaults.headers[c][t];
                                this.defaults.headers[c][t] = e
                            }
                        } catch (t) {
                            o.e(t)
                        } finally {
                            o.f()
                        }
                    },
                    setToken: function(t, e) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
                            r = t ? (e ? e + " " : "") + t : null;
                        this.setHeader("Authorization", r, n)
                    },
                    onRequest: function(t) {
                        this.interceptors.request.use((function(e) {
                            return t(e) || e
                        }))
                    },
                    onResponse: function(t) {
                        this.interceptors.response.use((function(e) {
                            return t(e) || e
                        }))
                    },
                    onRequestError: function(t) {
                        this.interceptors.request.use(void 0, (function(e) {
                            return t(e) || Promise.reject(e)
                        }))
                    },
                    onResponseError: function(t) {
                        this.interceptors.response.use(void 0, (function(e) {
                            return t(e) || Promise.reject(e)
                        }))
                    },
                    onError: function(t) {
                        this.onRequestError(t), this.onResponseError(t)
                    },
                    create: function(t) {
                        return nt(X()(t, this.defaults))
                    }
                }, Z = function() {
                    var t = et[tt];
                    Y["$" + t] = function() {
                        return this[t].apply(this, arguments).then((function(t) {
                            return t && t.data
                        }))
                    }
                }, tt = 0, et = ["request", "delete", "get", "head", "options", "post", "put", "patch"]; tt < et.length; tt++) Z();
            var nt = function(t) {
                    var e = J.a.create(t);
                    return e.CancelToken = J.a.CancelToken, e.isCancel = J.a.isCancel,
                        function(t) {
                            for (var e in Y) t[e] = Y[e].bind(t)
                        }(e), ot(e), e
                },
                ot = function(t) {
                    var e = {
                            finish: function() {},
                            start: function() {},
                            fail: function() {},
                            set: function() {}
                        },
                        n = function() {
                            return window.$nuxt && window.$nuxt.$loading && window.$nuxt.$loading.set ? window.$nuxt.$loading : e
                        },
                        r = 0;
                    t.onRequest((function(t) {
                        t && !1 === t.progress || r++
                    })), t.onResponse((function(t) {
                        t && t.config && !1 === t.config.progress || --r <= 0 && (r = 0, n().finish())
                    })), t.onError((function(t) {
                        t && t.config && !1 === t.config.progress || (r--, J.a.isCancel(t) || (n().fail(), n().finish()))
                    }));
                    var o = function(t) {
                        if (r) {
                            var progress = 100 * t.loaded / (t.total * r);
                            n().set(Math.min(100, progress))
                        }
                    };
                    t.defaults.onUploadProgress = o, t.defaults.onDownloadProgress = o
                },
                at = function(t, e) {
                    var n = {
                        baseURL: "http://localhost:3000/",
                        headers: {
                            common: {
                                Accept: "application/json, text/plain, */*"
                            },
                            delete: {},
                            get: {},
                            head: {},
                            post: {},
                            put: {},
                            patch: {}
                        }
                    };
                    n.headers.common = t.req && t.req.headers ? Object.assign({}, t.req.headers) : {}, delete n.headers.common.accept, delete n.headers.common.host, delete n.headers.common["cf-ray"], delete n.headers.common["cf-connecting-ip"], delete n.headers.common["content-length"], delete n.headers.common["content-md5"], delete n.headers.common["content-type"];
                    var r = nt(n);
                    t.$axios = r, e("axios", r)
                },
                it = n(145),
                st = n(96),
                ct = function() {
                    c.default.use(it.a), c.default.use(st.a)
                },
                ut = n(100);
            c.default.use(ut.a);
            var lt = function(t) {
                    var e = t.app,
                        r = t.store,
                        o = window.navigator.language;
                    "en-US" === o ? o = "en" : "zh-CN" === o || "zh-cn" === o ? o = "zh_CN" : "en" !== o && "zh" !== o && (o = "en"), r.commit("updateLang", o), e.i18n = new ut.a({
                        locale: o,
                        messages: {
                            en: n(214),
                            zh_CN: n(215)
                        }
                    })
                },
                ft = function(t, e) {
                    var n = t.store;
                    e("onConnect", Object(r.a)(regeneratorRuntime.mark((function t() {
                        var e;
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return e = function(t) {
                                        t.on && (t.on("accountsChanged", (function(e) {
                                            n.commit("updateConnectedAccount", e[0]);
                                            var r = parseInt(t.chainId, 16);
                                            n.commit("updateChainId", r)
                                        })), t.on("chainChanged", (function(t) {
                                            n.commit("updateChainId", parseInt(t, 16))
                                        })))
                                    }, t.abrupt("return", new Promise((function(t, o) {
                                        var c = 0,
                                            l = setInterval(Object(r.a)(regeneratorRuntime.mark((function r() {
                                                var d;
                                                return regeneratorRuntime.wrap((function(r) {
                                                    for (;;) switch (r.prev = r.next) {
                                                        case 0:
                                                            if (!window.ethereum && !window.BinanceChain) {
                                                                r.next = 16;
                                                                break
                                                            }
                                                            return clearInterval(l), window.detectProvider = window.ethereum || window.BinanceChain, e(window.detectProvider), r.prev = 4, r.next = 7, window.detectProvider.request({
                                                                method: "eth_requestAccounts"
                                                            });
                                                        case 7:
                                                            "" != (d = r.sent)[0] ? (n.commit("updateConnectedAccount", d[0]), n.commit("updateChainId", parseInt(window.detectProvider.chainId, 16)), t()) : o(new Error("Error: User rejected the signature request")), r.next = 14;
                                                            break;
                                                        case 11:
                                                            r.prev = 11, r.t0 = r.catch(4), o(r.t0);
                                                        case 14:
                                                            r.next = 18;
                                                            break;
                                                        case 16:
                                                            (c += 1) > 20 && (clearInterval(l), o("timeout"));
                                                        case 18:
                                                        case "end":
                                                            return r.stop()
                                                    }
                                                }), r, null, [
                                                    [4, 11]
                                                ])
                                            }))), 50)
                                    })));
                                case 2:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    }))))
                };

            function pt(object, t) {
                var e = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(object, t).enumerable
                    }))), e.push.apply(e, n)
                }
                return e
            }

            function ht(t) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? pt(Object(source), !0).forEach((function(e) {
                        Object(o.a)(t, e, source[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(source)) : pt(Object(source)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(source, e))
                    }))
                }
                return t
            }
            c.default.component(f.a.name, f.a), c.default.component(m.a.name, ht(ht({}, m.a), {}, {
                render: function(t, e) {
                    return m.a._warned || (m.a._warned = !0, console.warn("<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead")), m.a.render(t, e)
                }
            })), c.default.component(C.name, C), c.default.component("NChild", C), c.default.component(E.name, E), c.default.use(l.a, {
                keyName: "head",
                attribute: "data-n-head",
                ssrAttribute: "data-n-head-ssr",
                tagIDKeyName: "hid"
            });
            var mt = {
                name: "page",
                mode: "out-in",
                appear: !0,
                appearClass: "appear",
                appearActiveClass: "appear-active",
                appearToClass: "appear-to"
            };

            function bt(t) {
                return gt.apply(this, arguments)
            }

            function gt() {
                return (gt = Object(r.a)(regeneratorRuntime.mark((function t(e) {
                    var n, r, o, l, d, f, path, h, m = arguments;
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return h = function(t, e) {
                                    if (!t) throw new Error("inject(key, value) has no key provided");
                                    if (void 0 === e) throw new Error("inject('".concat(t, "', value) has no value provided"));
                                    l[t = "$" + t] = e, l.context[t] || (l.context[t] = e), o[t] = l[t];
                                    var n = "__nuxt_" + t + "_installed__";
                                    c.default[n] || (c.default[n] = !0, c.default.use((function() {
                                        Object.prototype.hasOwnProperty.call(c.default, t) || Object.defineProperty(c.default.prototype, t, {
                                            get: function() {
                                                return this.$root.$options[t]
                                            }
                                        })
                                    })))
                                }, n = m.length > 1 && void 0 !== m[1] ? m[1] : {}, t.next = 4, _();
                            case 4:
                                return r = t.sent, (o = H(e)).$router = r, l = ht({
                                    head: {
                                        title: "ETHBot",
                                        meta: [{
                                            charset: "utf-8"
                                        }, {
                                            name: "viewport",
                                            content: "width=device-width, initial-scale=1"
                                        }, {
                                            hid: "description",
                                            name: "description",
                                            content: "Let's get milked"
                                        }, {
                                            hid: "keywords",
                                            name: "keywords",
                                            content: "Dapp, DeFi, Staking, Token, MILK"
                                        }, {
                                            name: "twitter:title",
                                            content: "ethbot.live"
                                        }, {
                                            name: "twitter:description",
                                            content: "Let's get milked"
                                        }, {
                                            name: "twitter:image",
                                            content: "/ethblogo.png"
                                        }, {
                                            name: "twitter:card",
                                            content: "summary_large_image"
                                        }, {
                                            name: "twitter:creator",
                                            content: "@StakeCow"
                                        }],
                                        link: [{
                                            rel: "icon",
                                            type: "image/x-icon",
                                            href: "/favicon.ico"
                                        }, {
                                            rel: "apple-touch-icon",
                                            href: "/ethblogo.png"
                                        }, {
                                            rel: "shortcut icon",
                                            href: "/ethblogo.png"
                                        }],
                                        style: [],
                                        script: []
                                    },
                                    store: o,
                                    router: r,
                                    nuxt: {
                                        defaultTransition: mt,
                                        transitions: [mt],
                                        setTransitions: function(t) {
                                            return Array.isArray(t) || (t = [t]), t = t.map((function(t) {
                                                return t = t ? "string" == typeof t ? Object.assign({}, mt, {
                                                    name: t
                                                }) : Object.assign({}, mt, t) : mt
                                            })), this.$options.nuxt.transitions = t, t
                                        },
                                        err: null,
                                        dateErr: null,
                                        error: function(t) {
                                            t = t || null, l.context._errored = Boolean(t), t = t ? Object(y.o)(t) : null;
                                            var n = l.nuxt;
                                            return this && (n = this.nuxt || this.$options.nuxt), n.dateErr = Date.now(), n.err = t, e && (e.nuxt.error = t), t
                                        }
                                    }
                                }, F), o.app = l, d = e ? e.next : function(t) {
                                    return l.router.push(t)
                                }, e ? f = r.resolve(e.url).route : (path = Object(y.f)(r.options.base, r.options.mode), f = r.resolve(path).route), t.next = 13, Object(y.s)(l, {
                                    store: o,
                                    route: f,
                                    next: d,
                                    error: l.nuxt.error.bind(l),
                                    payload: e ? e.payload : void 0,
                                    req: e ? e.req : void 0,
                                    res: e ? e.res : void 0,
                                    beforeRenderFns: e ? e.beforeRenderFns : void 0,
                                    ssrContext: e
                                });
                            case 13:
                                return h("config", n), window.__NUXT__ && window.__NUXT__.state && o.replaceState(window.__NUXT__.state), l.context.enablePreview = function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    l.previewData = Object.assign({}, t), h("preview", t)
                                }, t.next = 19, at(l.context, h);
                            case 19:
                                return t.next = 22, ct(l.context);
                            case 22:
                                return t.next = 25, lt(l.context);
                            case 25:
                                return t.next = 28, ft(l.context, h);
                            case 28:
                                l.context.enablePreview = function() {
                                    console.warn("You cannot call enablePreview() outside a plugin.")
                                }, t.next = 32;
                                break;
                            case 32:
                                return t.abrupt("return", {
                                    store: o,
                                    app: l,
                                    router: r
                                });
                            case 33:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
        },
        54: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = "development";
            r = "production";
            var o = n(194)("./".concat(r));
            e.default = o
        },
        81: function(t, e, n) {
            "use strict";
            n(45), n(58), n(46), n(57), n(63), n(49), n(36), n(37), n(23), n(91), n(92);
            var r = n(12);

            function o(t) {
                if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (t = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return c(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === n && t.constructor && (n = t.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(n);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(t, e)
                        }(t))) {
                        var i = 0,
                            e = function() {};
                        return {
                            s: e,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: e
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var n, r, o = !0,
                    l = !1;
                return {
                    s: function() {
                        n = t[Symbol.iterator]()
                    },
                    n: function() {
                        var t = n.next();
                        return o = t.done, t
                    },
                    e: function(t) {
                        l = !0, r = t
                    },
                    f: function() {
                        try {
                            o || null == n.return || n.return()
                        } finally {
                            if (l) throw r
                        }
                    }
                }
            }

            function c(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n
            }
            var l = window.requestIdleCallback || function(t) {
                    var e = Date.now();
                    return setTimeout((function() {
                        t({
                            didTimeout: !1,
                            timeRemaining: function() {
                                return Math.max(0, 50 - (Date.now() - e))
                            }
                        })
                    }), 1)
                },
                d = window.cancelIdleCallback || function(t) {
                    clearTimeout(t)
                },
                f = window.IntersectionObserver && new window.IntersectionObserver((function(t) {
                    t.forEach((function(t) {
                        var e = t.intersectionRatio,
                            link = t.target;
                        e <= 0 || link.__prefetch()
                    }))
                }));
            e.a = {
                name: "NuxtLink",
                extends: r.default.component("RouterLink"),
                props: {
                    prefetch: {
                        type: Boolean,
                        default: !0
                    },
                    noPrefetch: {
                        type: Boolean,
                        default: !1
                    }
                },
                mounted: function() {
                    this.prefetch && !this.noPrefetch && (this.handleId = l(this.observe, {
                        timeout: 2e3
                    }))
                },
                beforeDestroy: function() {
                    d(this.handleId), this.__observed && (f.unobserve(this.$el), delete this.$el.__prefetch)
                },
                methods: {
                    observe: function() {
                        f && this.shouldPrefetch() && (this.$el.__prefetch = this.prefetchLink.bind(this), f.observe(this.$el), this.__observed = !0)
                    },
                    shouldPrefetch: function() {
                        return this.getPrefetchComponents().length > 0
                    },
                    canPrefetch: function() {
                        var t = navigator.connection;
                        return !(this.$nuxt.isOffline || t && ((t.effectiveType || "").includes("2g") || t.saveData))
                    },
                    getPrefetchComponents: function() {
                        return this.$router.resolve(this.to, this.$route, this.append).resolved.matched.map((function(t) {
                            return t.components.default
                        })).filter((function(t) {
                            return "function" == typeof t && !t.options && !t.__prefetched
                        }))
                    },
                    prefetchLink: function() {
                        if (this.canPrefetch()) {
                            f.unobserve(this.$el);
                            var t, e = o(this.getPrefetchComponents());
                            try {
                                for (e.s(); !(t = e.n()).done;) {
                                    var n = t.value,
                                        r = n();
                                    r instanceof Promise && r.catch((function() {})), n.__prefetched = !0
                                }
                            } catch (t) {
                                e.e(t)
                            } finally {
                                e.f()
                            }
                        }
                    }
                }
            }
        },
        97: function(t, e, n) {
            "use strict";
            e.a = {}
        }
    },
    [
        [148, 16, 3, 17]
    ]
]);
