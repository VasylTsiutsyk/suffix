/* eslint-disable */
/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-objectfit-touchevents-setclasses !*/
!(function(e, n, t) {
    function r(e, n) {
        return typeof e === n;
    }

    function o() {
        var e, n, t, o, i, s, a;
        for (var l in C)
            if (C.hasOwnProperty(l)) {
                if (
                    ((e = []),
                        (n = C[l]),
                        n.name &&
                        (e.push(n.name.toLowerCase()),
                            n.options && n.options.aliases && n.options.aliases.length))
                )
                    for (t = 0; t < n.options.aliases.length; t++)
                        e.push(n.options.aliases[t].toLowerCase());
                for (o = r(n.fn, "function") ? n.fn() : n.fn, i = 0; i < e.length; i++)
                    (s = e[i]),
                    (a = s.split(".")),
                    1 === a.length ?
                    (Modernizr[a[0]] = o) :
                    (!Modernizr[a[0]] ||
                        Modernizr[a[0]] instanceof Boolean ||
                        (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])),
                        (Modernizr[a[0]][a[1]] = o)),
                    g.push((o ? "" : "no-") + a.join("-"));
            }
    }

    function i(e) {
        var n = w.className,
            t = Modernizr._config.classPrefix || "";
        if ((x && (n = n.baseVal), Modernizr._config.enableJSClass)) {
            var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
            n = n.replace(r, "$1" + t + "js$2");
        }
        Modernizr._config.enableClasses &&
            ((n += " " + t + e.join(" " + t)),
                x ? (w.className.baseVal = n) : (w.className = n));
    }

    function s() {
        return "function" != typeof n.createElement ?
            n.createElement(arguments[0]) :
            x ?
            n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) :
            n.createElement.apply(n, arguments);
    }

    function a() {
        var e = n.body;
        return e || ((e = s(x ? "svg" : "body")), (e.fake = !0)), e;
    }

    function l(e, t, r, o) {
        var i,
            l,
            f,
            u,
            c = "modernizr",
            p = s("div"),
            d = a();
        if (parseInt(r, 10))
            for (; r--;)
                (f = s("div")), (f.id = o ? o[r] : c + (r + 1)), p.appendChild(f);
        return (
            (i = s("style")),
            (i.type = "text/css"),
            (i.id = "s" + c),
            (d.fake ? d : p).appendChild(i),
            d.appendChild(p),
            i.styleSheet ?
            (i.styleSheet.cssText = e) :
            i.appendChild(n.createTextNode(e)),
            (p.id = c),
            d.fake &&
            ((d.style.background = ""),
                (d.style.overflow = "hidden"),
                (u = w.style.overflow),
                (w.style.overflow = "hidden"),
                w.appendChild(d)),
            (l = t(p, e)),
            d.fake ?
            (d.parentNode.removeChild(d), (w.style.overflow = u), w.offsetHeight) :
            p.parentNode.removeChild(p), !!l
        );
    }

    function f(e) {
        return e
            .replace(/([a-z])-([a-z])/g, function(e, n, t) {
                return n + t.toUpperCase();
            })
            .replace(/^-/, "");
    }

    function u(e, n) {
        return !!~("" + e).indexOf(n);
    }

    function c(e, n) {
        return function() {
            return e.apply(n, arguments);
        };
    }

    function p(e, n, t) {
        var o;
        for (var i in e)
            if (e[i] in n)
                return t === !1 ?
                    e[i] :
                    ((o = n[e[i]]), r(o, "function") ? c(o, t || n) : o);
        return !1;
    }

    function d(e) {
        return e
            .replace(/([A-Z])/g, function(e, n) {
                return "-" + n.toLowerCase();
            })
            .replace(/^ms-/, "-ms-");
    }

    function m(n, t, r) {
        var o;
        if ("getComputedStyle" in e) {
            o = getComputedStyle.call(e, n, t);
            var i = e.console;
            if (null !== o) r && (o = o.getPropertyValue(r));
            else if (i) {
                var s = i.error ? "error" : "log";
                i[s].call(
                    i,
                    "getComputedStyle returning null, its possible modernizr test results are inaccurate"
                );
            }
        } else o = !t && n.currentStyle && n.currentStyle[r];
        return o;
    }

    function v(n, r) {
        var o = n.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; o--;)
                if (e.CSS.supports(d(n[o]), r)) return !0;
            return !1;
        }
        if ("CSSSupportsRule" in e) {
            for (var i = []; o--;) i.push("(" + d(n[o]) + ":" + r + ")");
            return (
                (i = i.join(" or ")),
                l(
                    "@supports (" + i + ") { #modernizr { position: absolute; } }",
                    function(e) {
                        return "absolute" == m(e, null, "position");
                    }
                )
            );
        }
        return t;
    }

    function h(e, n, o, i) {
        function a() {
            c && (delete N.style, delete N.modElem);
        }
        if (((i = r(i, "undefined") ? !1 : i), !r(o, "undefined"))) {
            var l = v(e, o);
            if (!r(l, "undefined")) return l;
        }
        for (
            var c, p, d, m, h, y = ["modernizr", "tspan", "samp"]; !N.style && y.length;

        )
            (c = !0), (N.modElem = s(y.shift())), (N.style = N.modElem.style);
        for (d = e.length, p = 0; d > p; p++)
            if (
                ((m = e[p]),
                    (h = N.style[m]),
                    u(m, "-") && (m = f(m)),
                    N.style[m] !== t)
            ) {
                if (i || r(o, "undefined")) return a(), "pfx" == n ? m : !0;
                try {
                    N.style[m] = o;
                } catch (g) {}
                if (N.style[m] != h) return a(), "pfx" == n ? m : !0;
            }
        return a(), !1;
    }

    function y(e, n, t, o, i) {
        var s = e.charAt(0).toUpperCase() + e.slice(1),
            a = (e + " " + j.join(s + " ") + s).split(" ");
        return r(n, "string") || r(n, "undefined") ?
            h(a, n, o, i) :
            ((a = (e + " " + E.join(s + " ") + s).split(" ")), p(a, n, t));
    }
    var g = [],
        C = [],
        S = {
            _version: "3.6.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, n) {
                var t = this;
                setTimeout(function() {
                    n(t[e]);
                }, 0);
            },
            addTest: function(e, n, t) {
                C.push({ name: e, fn: n, options: t });
            },
            addAsyncTest: function(e) {
                C.push({ name: null, fn: e });
            }
        },
        Modernizr = function() {};
    (Modernizr.prototype = S), (Modernizr = new Modernizr());
    var _ = S._config.usePrefixes ?
        " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    S._prefixes = _;
    var w = n.documentElement,
        x = "svg" === w.nodeName.toLowerCase(),
        b = (S.testStyles = l);
    Modernizr.addTest("touchevents", function() {
        var t;
        if ("ontouchstart" in e || (e.DocumentTouch && n instanceof DocumentTouch))
            t = !0;
        else {
            var r = [
                "@media (",
                _.join("touch-enabled),("),
                "heartz",
                ")",
                "{#modernizr{top:9px;position:absolute}}"
            ].join("");
            b(r, function(e) {
                t = 9 === e.offsetTop;
            });
        }
        return t;
    });
    var z = "Moz O ms Webkit",
        j = S._config.usePrefixes ? z.split(" ") : [];
    S._cssomPrefixes = j;
    var T = function(n) {
        var r,
            o = _.length,
            i = e.CSSRule;
        if ("undefined" == typeof i) return t;
        if (!n) return !1;
        if (
            ((n = n.replace(/^@/, "")),
                (r = n.replace(/-/g, "_").toUpperCase() + "_RULE"),
                r in i)
        )
            return "@" + n;
        for (var s = 0; o > s; s++) {
            var a = _[s],
                l = a.toUpperCase() + "_" + r;
            if (l in i) return "@-" + a.toLowerCase() + "-" + n;
        }
        return !1;
    };
    S.atRule = T;
    var E = S._config.usePrefixes ? z.toLowerCase().split(" ") : [];
    S._domPrefixes = E;
    var P = { elem: s("modernizr") };
    Modernizr._q.push(function() {
        delete P.elem;
    });
    var N = { style: P.elem.style };
    Modernizr._q.unshift(function() {
            delete N.style;
        }),
        (S.testAllProps = y);
    var k = (S.prefixed = function(e, n, t) {
        return 0 === e.indexOf("@") ?
            T(e) :
            (-1 != e.indexOf("-") && (e = f(e)), n ? y(e, n, t) : y(e, "pfx"));
    });
    Modernizr.addTest("objectfit", !!k("objectFit"), { aliases: ["object-fit"] }),
        o(),
        i(g),
        delete S.addTest,
        delete S.addAsyncTest;
    for (var L = 0; L < Modernizr._q.length; L++) Modernizr._q[L]();
    e.Modernizr = Modernizr;
})(window, document);