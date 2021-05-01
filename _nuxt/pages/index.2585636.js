(window.webpackJsonp = window.webpackJsonp || []).push([
    [11], {
        390: function(e, t, r) {
            var content = r(673);
            "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(56).default)("930f7e64", content, !0, {
                sourceMap: !1
            })
        },
        672: function(e, t, r) {
            "use strict";
            r(390)
        },
        673: function(e, t, r) {
            (t = r(55)(!1)).push([e.i, ".body[data-v-f80f0714]{background-color:#000!important}.alert-success[data-v-f80f0714]{border:4px solid #f28123}.alert-success[data-v-f80f0714],.btn-secondary[data-v-f80f0714]{background-color:#121212;color:#f28123;font-weight:700}.btn-secondary[data-v-f80f0714]{border:2px solid #f28123;font-size:.9rem}.btn-secondary[data-v-f80f0714]:active{color:#fff;background-color:#f28123!important;border-radius:4px;color:#121212;transform:scale(.95)}.btn-secondary[data-v-f80f0714]:hover{color:#fff;background-color:#f28123;border-radius:4px;color:#121212;transform:scale(1.05)}.intro[data-v-f80f0714]{background-color:#222;color:#f28123;padding:1rem;border-radius:8px}.cover[data-v-f80f0714],.intro[data-v-f80f0714]{text-align:center}.price[data-v-f80f0714]{text-align:center!important;margin:auto}.card[data-v-f80f0714]{border-radius:.88rem;background-color:#323232;color:#fff}.title[data-v-f80f0714]{margin-bottom:.1rem!important}.desc[data-v-f80f0714],.title[data-v-f80f0714]{text-align:center}.desc[data-v-f80f0714]{font-size:.9rem;color:#ff7619}.cover img[data-v-f80f0714]{display:inline-block;width:150px;text-align:center}.cow[data-v-f80f0714]{margin-bottom:1rem}.cow img[data-v-f80f0714]{width:100%;padding:1rem;display:inline-block}.avatar[data-v-f80f0714],.cow img[data-v-f80f0714]{text-align:center}.apy[data-v-f80f0714]{font-size:.9rem;color:#007bff;text-align:center}", ""]), e.exports = t
        },
        681: function(e, t, r) {
            "use strict";
            r.r(t);
            r(45), r(23), r(57), r(35);
            var n = r(15),
                o = r(54),
                c = r(245),
                d = r(221),
                l = {
                    data: function() {
                        return {
                            cows: o.default.cows,
                            priceMILKUSDT: null,
                            priceMILKBNB: null,
                            priceBNBUSDT: null,
                            hybirdCow: o.default.hybird,
                            hybirdCowAPY: "--",
                            apy: {
                                1: "--",
                                2: "--",
                                3: "--",
                                4: "--"
                            }
                        }
                    },
                    methods: {},
                    mounted: function() {
                        var e = this;
                        return Object(n.a)(regeneratorRuntime.mark((function t() {
                            var r, o, l, f, v, m, w, x;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return r = new c.j, o = [r.getPriceofETHBBNB(), r.getPriceofBNBBUSD()], t.next = 4, Promise.all(o);
                                    case 4:
                                        return l = t.sent, console.log("Prices are " + l), e.priceMILKUSDT = Object(d.BigNumber)(l[0] * l[1]), e.priceBNBUSDT = l[1], f = new c.e(e.hybirdCow.address, e.hybirdCow.stakeToken, e.hybirdCow.yieldToken), v = new c.f(c.b), t.next = 12, v.APY();
                                    case 12:
                                        return m = t.sent, t.next = 15, f.totalSupply();
                                    case 15:
                                        return w = t.sent, t.next = 18, f.rewardRate();
                                    case 18:
                                        x = t.sent, e.hybirdCowAPY = x.times(31536e3).times(e.priceMILKBNB).div(w).plus(m).times(100).toFixed(2), e.cows.map(function() {
                                            var t = Object(n.a)(regeneratorRuntime.mark((function t(r) {
                                                var n, o, l, f, v, m, w, x, k, _, y, h, C;
                                                return regeneratorRuntime.wrap((function(t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                        case 0:
                                                            if (!r.initialized) {
                                                                t.next = 32;
                                                                break
                                                            }
                                                            return n = new c.h(r.stakeToken.address, r.stakeToken.symbol, r.stakeToken.decimals), o = new c.e(r.address, r.stakeToken, r.yieldToken), t.next = 5, o.rewardRate();
                                                        case 5:
                                                            return l = t.sent, t.next = 8, n.balanceOf(r.address);
                                                        case 8:
                                                            if (f = t.sent, v = l.times(31536e3).div(f), 1 != r.id) {
                                                                t.next = 14;
                                                                break
                                                            }
                                                            e.apy[1] = v.times(10).toFixed(2), t.next = 32;
                                                            break;
                                                        case 14:
                                                            if (2 != r.id) {
                                                                t.next = 24;
                                                                break
                                                            }
                                                            return t.next = 17, n.getReserves();
                                                        case 17:
                                                            m = t.sent, w = m[0] / f * e.priceMILKUSDT, x = m[1] / f * e.priceBNBUSDT, k = new d.BigNumber(w + x).div(1e18), e.apy[2] = v.times(k).div(100).toFixed(2), t.next = 32;
                                                            break;
                                                        case 24:
                                                            if (3 != r.id) {
                                                                t.next = 32;
                                                                break
                                                            }
                                                            return t.next = 27, n.getReserves();
                                                        case 27:
                                                            _ = t.sent, y = _[0] / f * e.priceMILKUSDT, h = _[1] / f, C = new d.BigNumber(y + h).div(1e18), e.apy[3] = v.times(C).div(10).toFixed(2);
                                                        case 32:
                                                            return t.abrupt("return", r);
                                                        case 33:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }), t)
                                            })));
                                            return function(e) {
                                                return t.apply(this, arguments)
                                            }
                                        }());
                                    case 21:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }
                },
                f = (r(672), r(41)),
                component = Object(f.a)(l, (function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", [r("div", [r("p"), r("div", {
                        staticClass: "alert alert-danger title",
                        attrs: {
                            role: "alert"
                        }
                    }, [e._v("\n        " + e._s(e.$t("home.note-launch")) + "\n      ")]), e._v(" "), r("p"), e._v(" "), r("div", {
                        staticClass: "intro"
                    }, [r("h3", [e._v("\n        " + e._s(e.$t("home.protocol-name")) + "\n      ")]), e._v(" "), r("p", [e._v("\n        " + e._s(e.$t("home.protocol-desc")) + "\n      ")]), e._v(" "), r("p")])]), e._v(" "), r("br"), e._v(" "), r("div", {
                        staticClass: "row"
                    }, [r("div", {
                        staticClass: "col-md-12 col-sm-12 col-lg-12"
                    }), e._v(" "), r("div", {
                        staticClass: "price alert alert-success",
                        staticStyle: {
                            "text-align": "center"
                        }
                    }, [e._v("\n\n    1 $ETHB = $" + e._s(e.priceMILKUSDT ? e.priceMILKUSDT.toFixed(2) : "--") + " "), r("br"), e._v(" "), r("div", {
                        staticClass: "col-4"
                    })])]), e._v(" "), r("br"), e._v(" "), r("div", {
                        staticClass: "row"
                    }, e._l(e.cows, (function(t, i) {
                        return r("div", {
                            key: i,
                            staticClass: "col-md-4 col-sm-12 cow"
                        }, [r("div", {
                            staticClass: "card cow"
                        }, [r("span", {
                            staticClass: "avatar"
                        }, [r("img", {
                            staticClass: "farm-image",
                            attrs: {
                                src: t.avatar
                            }
                        })]), e._v(" "), r("div", {
                            staticClass: "card-body"
                        }, [r("h5", {
                            staticClass: "card-title title"
                        }, [e._v(e._s(t.name))]), e._v(" "), r("div", {
                            staticClass: "desc"
                        }, [e._v(e._s(e.$t("home.card-desc", {
                            symbol: t.stakeToken.symbol
                        })))]), e._v(" "), r("p", {
                            staticClass: "card-text apy"
                        }, [e._v(" APR: " + e._s(e.apy[t.id]) + "% ")]), e._v(" "), t.initialized ? r("a", {
                            staticClass: "btn btn-block btn-secondary",
                            attrs: {
                                href: t.routeLink
                            }
                        }, [e._v("\n            " + e._s(e.$t("home.select")) + "\n          ")]) : r("a", {
                            staticClass: "btn btn-secondary btn-block",
                            attrs: {
                                href: "#"
                            }
                        }, [e._v(e._s(e.$t("home.coming-soon")))])])])])
                    })), 0), e._v(" "), r("br")])
                }), [], !1, null, "f80f0714", null);
            t.default = component.exports
        }
    }
]);
