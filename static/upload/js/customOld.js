/* Ammina JS file original /bitrix/templates/avtoshkola/js/jquery.min.js */
!function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (C, e) {
    "use strict";
    var t = [], E = C.document, r = Object.getPrototypeOf, s = t.slice, g = t.concat, u = t.push, i = t.indexOf, n = {}, o = n.toString, y = n.hasOwnProperty, a = y.toString, l = a.call(Object), v = {},
        m = function e(t) {
            return "function" == typeof t && "number" != typeof t.nodeType
        }, x = function e(t) {
            return null != t && t === t.window
        }, c = {type: !0, src: !0, noModule: !0};

    function b(e, t, n) {
        var r, i = (t = t || E).createElement("script");
        if (i.text = e, n) for (r in c) n[r] && (i[r] = n[r]);
        t.head.appendChild(i).parentNode.removeChild(i)
    }

    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }

    var f = "3.3.1", k = function (e, t) {
        return new k.fn.init(e, t)
    }, p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    k.fn = k.prototype = {
        jquery: "3.3.1", constructor: k, length: 0, toArray: function () {
            return s.call(this)
        }, get: function (e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        }, pushStack: function (e) {
            var t = k.merge(this.constructor(), e);
            return t.prevObject = this, t
        }, each: function (e) {
            return k.each(this, e)
        }, map: function (n) {
            return this.pushStack(k.map(this, function (e, t) {
                return n.call(e, t, e)
            }))
        }, slice: function () {
            return this.pushStack(s.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor()
        }, push: u, sort: t.sort, splice: t.splice
    }, k.extend = k.fn.extend = function () {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) n = a[t], a !== (r = e[t]) && (l && r && (k.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && k.isPlainObject(n) ? n : {}, a[t] = k.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, k.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isPlainObject: function (e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = y.call(t, "constructor") && t.constructor) && a.call(n) === l)
        }, isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0
        }, globalEval: function (e) {
            b(e)
        }, each: function (e, t) {
            var n, r = 0;
            if (d(e)) {
                for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break
            } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(p, "")
        }, makeArray: function (e, t) {
            var n = t || [];
            return null != e && (d(Object(e)) ? k.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
        }, inArray: function (e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        }, merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        }, grep: function (e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++) (r = !t(e[o], o)) !== s && i.push(e[o]);
            return i
        }, map: function (e, t, n) {
            var r, i, o = 0, a = [];
            if (d(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i); else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return g.apply([], a)
        }, guid: 1, support: v
    }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });

    function d(e) {
        var t = !!e && "length" in e && e.length, n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    var h = function (n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, y, s, c, v, k = "sizzle" + 1 * new Date, m = n.document, S = 0, r = 0, p = ae(), x = ae(), D = ae(), N = function (e, t) {
                return e === t && (l = !0), 0
            }, A = {}.hasOwnProperty, t = [], j = t.pop, q = t.push, L = t.push, H = t.slice, O = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
                return -1
            }, P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            I = "\\[" + M + "*(" + R + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + M + "*\\]",
            W = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + I + ")*)|.*)\\)|)", $ = new RegExp(M + "+", "g"),
            B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), F = new RegExp("^" + M + "*," + M + "*"), _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"), X = new RegExp(W), U = new RegExp("^" + R + "$"), V = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + I),
                PSEUDO: new RegExp("^" + W),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + P + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            }, G = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, Q = /^[^{]+\{\s*\[native \w/, J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, K = /[+~]/, Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            ee = function (e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function (e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            }, re = function () {
                T()
            }, ie = me(function (e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {dir: "parentNode", next: "legend"});
        try {
            L.apply(t = H.call(m.childNodes), m.childNodes), t[m.childNodes.length].nodeType
        } catch (n) {
            L = {
                apply: t.length ? function (e, t) {
                    q.apply(e, H.call(t))
                } : function (e, t) {
                    var n = e.length, r = 0;
                    while (e[n++] = t[r++]) ;
                    e.length = n - 1
                }
            }
        }

        function oe(e, t, n, r) {
            var i, o, a, s, u, l, c, f = t && t.ownerDocument, p = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && ((t ? t.ownerDocument || t : m) !== C && T(t), t = t || C, E)) {
                if (11 !== p && (u = J.exec(e))) if (i = u[1]) {
                    if (9 === p) {
                        if (!(a = t.getElementById(i))) return n;
                        if (a.id === i) return n.push(a), n
                    } else if (f && (a = f.getElementById(i)) && v(t, a) && a.id === i) return n.push(a), n
                } else {
                    if (u[2]) return L.apply(n, t.getElementsByTagName(e)), n;
                    if ((i = u[3]) && d.getElementsByClassName && t.getElementsByClassName) return L.apply(n, t.getElementsByClassName(i)), n
                }
                if (d.qsa && !D[e + " "] && (!y || !y.test(e))) {
                    if (1 !== p) f = t, c = e; else if ("object" !== t.nodeName.toLowerCase()) {
                        (s = t.getAttribute("id")) ? s = s.replace(te, ne) : t.setAttribute("id", s = k), o = (l = h(e)).length;
                        while (o--) l[o] = "#" + s + " " + ve(l[o]);
                        c = l.join(","), f = K.test(e) && ge(t.parentNode) || t
                    }
                    if (c) try {
                        return L.apply(n, f.querySelectorAll(c)), n
                    } catch (e) {
                    } finally {
                        s === k && t.removeAttribute("id")
                    }
                }
            }
            return g(e.replace(B, "$1"), t, n, r)
        }

        function ae() {
            var n = [];

            function r(e, t) {
                return n.push(e + " ") > b.cacheLength && delete r[n.shift()], r[e + " "] = t
            }

            return r
        }

        function se(e) {
            return e[k] = !0, e
        }

        function ue(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function le(e, t) {
            var n = e.split("|"), r = n.length;
            while (r--) b.attrHandle[n[r]] = t
        }

        function ce(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) while (n = n.nextSibling) if (n === t) return -1;
            return e ? 1 : -1
        }

        function fe(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function pe(n) {
            return function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function de(t) {
            return function (e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ie(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function he(a) {
            return se(function (o) {
                return o = +o, se(function (e, t) {
                    var n, r = a([], e.length, o), i = r.length;
                    while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ge(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        d = oe.support = {}, i = oe.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, T = oe.setDocument = function (e) {
            var t, n, r = e ? e.ownerDocument || e : m;
            return r !== C && 9 === r.nodeType && r.documentElement ? (C = r, a = C.documentElement, E = !i(C), m !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", re, !1) : n.attachEvent && n.attachEvent("onunload", re)), d.attributes = ue(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), d.getElementsByTagName = ue(function (e) {
                return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
            }), d.getElementsByClassName = Q.test(C.getElementsByClassName), d.getById = ue(function (e) {
                return a.appendChild(e).id = k, !C.getElementsByName || !C.getElementsByName(k).length
            }), d.getById ? (b.filter.ID = function (e) {
                var t = e.replace(Z, ee);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }, b.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (b.filter.ID = function (e) {
                var n = e.replace(Z, ee);
                return function (e) {
                    var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n
                }
            }, b.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && E) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        i = t.getElementsByName(e), r = 0;
                        while (o = i[r++]) if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                    }
                    return []
                }
            }), b.find.TAG = d.getElementsByTagName ? function (e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++]) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, b.find.CLASS = d.getElementsByClassName && function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e)
            }, s = [], y = [], (d.qsa = Q.test(C.querySelectorAll)) && (ue(function (e) {
                a.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + P + ")"), e.querySelectorAll("[id~=" + k + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + k + "+*").length || y.push(".#.+[+~]")
            }), ue(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:")
            })), (d.matchesSelector = Q.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ue(function (e) {
                d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", W)
            }), y = y.length && new RegExp(y.join("|")), s = s.length && new RegExp(s.join("|")), t = Q.test(a.compareDocumentPosition), v = t || Q.test(a.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t) while (t = t.parentNode) if (t === e) return !0;
                return !1
            }, N = t ? function (e, t) {
                if (e === t) return l = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === m && v(m, e) ? -1 : t === C || t.ownerDocument === m && v(m, t) ? 1 : u ? O(u, e) - O(u, t) : 0 : 4 & n ? -1 : 1)
            } : function (e, t) {
                if (e === t) return l = !0, 0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                if (!i || !o) return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? O(u, e) - O(u, t) : 0;
                if (i === o) return ce(e, t);
                n = e;
                while (n = n.parentNode) a.unshift(n);
                n = t;
                while (n = n.parentNode) s.unshift(n);
                while (a[r] === s[r]) r++;
                return r ? ce(a[r], s[r]) : a[r] === m ? -1 : s[r] === m ? 1 : 0
            }, C) : C
        }, oe.matches = function (e, t) {
            return oe(e, null, null, t)
        }, oe.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== C && T(e), t = t.replace(z, "='$1']"), d.matchesSelector && E && !D[t + " "] && (!s || !s.test(t)) && (!y || !y.test(t))) try {
                var n = c.call(e, t);
                if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
            } catch (e) {
            }
            return oe(t, C, null, [e]).length > 0
        }, oe.contains = function (e, t) {
            return (e.ownerDocument || e) !== C && T(e), v(e, t)
        }, oe.attr = function (e, t) {
            (e.ownerDocument || e) !== C && T(e);
            var n = b.attrHandle[t.toLowerCase()], r = n && A.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
            return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, oe.escape = function (e) {
            return (e + "").replace(te, ne)
        }, oe.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, oe.uniqueSort = function (e) {
            var t, n = [], r = 0, i = 0;
            if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(N), l) {
                while (t = e[i++]) t === e[i] && (r = n.push(i));
                while (r--) e.splice(n[r], 1)
            }
            return u = null, e
        }, o = oe.getText = function (e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else while (t = e[r++]) n += o(t);
            return n
        }, (b = oe.selectors = {
            cacheLength: 50,
            createPseudo: se,
            match: V,
            attrHandle: {},
            find: {},
            relative: {">": {dir: "parentNode", first: !0}, " ": {dir: "parentNode"}, "+": {dir: "previousSibling", first: !0}, "~": {dir: "previousSibling"}},
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(Z, ee).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = p[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && p(e, function (e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                }, ATTR: function (n, r, i) {
                    return function (e) {
                        var t = oe.attr(e, n);
                        return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && t.indexOf(i) > -1 : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? (" " + t.replace($, " ") + " ").indexOf(i) > -1 : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                    }
                }, CHILD: function (h, e, t, g, y) {
                    var v = "nth" !== h.slice(0, 3), m = "last" !== h.slice(-4), x = "of-type" === e;
                    return 1 === g && 0 === y ? function (e) {
                        return !!e.parentNode
                    } : function (e, t, n) {
                        var r, i, o, a, s, u, l = v !== m ? "nextSibling" : "previousSibling", c = e.parentNode, f = x && e.nodeName.toLowerCase(), p = !n && !x, d = !1;
                        if (c) {
                            if (v) {
                                while (l) {
                                    a = e;
                                    while (a = a[l]) if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                    u = l = "only" === h && !u && "nextSibling"
                                }
                                return !0
                            }
                            if (u = [m ? c.firstChild : c.lastChild], m && p) {
                                d = (s = (r = (i = (o = (a = c)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]) && r[2], a = s && c.childNodes[s];
                                while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if (1 === a.nodeType && ++d && a === e) {
                                    i[h] = [S, s, d];
                                    break
                                }
                            } else if (p && (d = s = (r = (i = (o = (a = e)[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === S && r[1]), !1 === d) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[k] || (a[k] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [S, d]), a === e)) break;
                            return (d -= y) === g || d % g == 0 && d / g >= 0
                        }
                    }
                }, PSEUDO: function (e, o) {
                    var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                    return a[k] ? a(o) : a.length > 1 ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, t) {
                        var n, r = a(e, o), i = r.length;
                        while (i--) e[n = O(e, r[i])] = !(t[n] = r[i])
                    }) : function (e) {
                        return a(e, 0, t)
                    }) : a
                }
            },
            pseudos: {
                not: se(function (e) {
                    var r = [], i = [], s = f(e.replace(B, "$1"));
                    return s[k] ? se(function (e, t, n, r) {
                        var i, o = s(e, null, r, []), a = e.length;
                        while (a--) (i = o[a]) && (e[a] = !(t[a] = i))
                    }) : function (e, t, n) {
                        return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                    }
                }), has: se(function (t) {
                    return function (e) {
                        return oe(t, e).length > 0
                    }
                }), contains: se(function (t) {
                    return t = t.replace(Z, ee), function (e) {
                        return (e.textContent || e.innerText || o(e)).indexOf(t) > -1
                    }
                }), lang: se(function (n) {
                    return U.test(n || "") || oe.error("unsupported lang: " + n), n = n.replace(Z, ee).toLowerCase(), function (e) {
                        var t;
                        do {
                            if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }), target: function (e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id
                }, root: function (e) {
                    return e === a
                }, focus: function (e) {
                    return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: de(!1), disabled: de(!0), checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0
                }, parent: function (e) {
                    return !b.pseudos.empty(e)
                }, header: function (e) {
                    return Y.test(e.nodeName)
                }, input: function (e) {
                    return G.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: he(function () {
                    return [0]
                }), last: he(function (e, t) {
                    return [t - 1]
                }), eq: he(function (e, t, n) {
                    return [n < 0 ? n + t : n]
                }), even: he(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }), odd: he(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }), lt: he(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }), gt: he(function (e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }).pseudos.nth = b.pseudos.eq;
        for (e in {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) b.pseudos[e] = fe(e);
        for (e in {submit: !0, reset: !0}) b.pseudos[e] = pe(e);

        function ye() {
        }

        ye.prototype = b.filters = b.pseudos, b.setFilters = new ye, h = oe.tokenize = function (e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l) return t ? 0 : l.slice(0);
            a = e, s = [], u = b.preFilter;
            while (a) {
                n && !(r = F.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = _.exec(a)) && (n = r.shift(), i.push({value: n, type: r[0].replace(B, " ")}), a = a.slice(n.length));
                for (o in b.filter) !(r = V[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({value: n, type: o, matches: r}), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? oe.error(e) : x(e, s).slice(0)
        };

        function ve(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function me(s, e, t) {
            var u = e.dir, l = e.next, c = l || u, f = t && "parentNode" === c, p = r++;
            return e.first ? function (e, t, n) {
                while (e = e[u]) if (1 === e.nodeType || f) return s(e, t, n);
                return !1
            } : function (e, t, n) {
                var r, i, o, a = [S, p];
                if (n) {
                    while (e = e[u]) if ((1 === e.nodeType || f) && s(e, t, n)) return !0
                } else while (e = e[u]) if (1 === e.nodeType || f) if (o = e[k] || (e[k] = {}), i = o[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e; else {
                    if ((r = i[c]) && r[0] === S && r[1] === p) return a[2] = r[2];
                    if (i[c] = a, a[2] = s(e, t, n)) return !0
                }
                return !1
            }
        }

        function xe(i) {
            return i.length > 1 ? function (e, t, n) {
                var r = i.length;
                while (r--) if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function be(e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
            return n
        }

        function we(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function Te(d, h, g, y, v, e) {
            return y && !y[k] && (y = Te(y)), v && !v[k] && (v = Te(v, e)), se(function (e, t, n, r) {
                var i, o, a, s = [], u = [], l = t.length, c = e || be(h || "*", n.nodeType ? [n] : n, []), f = !d || !e && h ? c : we(c, s, d, n, r), p = g ? v || (e ? d : l || y) ? [] : t : f;
                if (g && g(f, p, n, r), y) {
                    i = we(p, u), y(i, [], n, r), o = i.length;
                    while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
                }
                if (e) {
                    if (v || d) {
                        if (v) {
                            i = [], o = p.length;
                            while (o--) (a = p[o]) && i.push(f[o] = a);
                            v(null, p = [], i, r)
                        }
                        o = p.length;
                        while (o--) (a = p[o]) && (i = v ? O(e, a) : s[o]) > -1 && (e[i] = !(t[i] = a))
                    }
                } else p = we(p === t ? p.splice(l, p.length) : p), v ? v(null, t, p, r) : L.apply(t, p)
            })
        }

        function Ce(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = me(function (e) {
                return e === i
            }, a, !0), l = me(function (e) {
                return O(i, e) > -1
            }, a, !0), c = [function (e, t, n) {
                var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                return i = null, r
            }]; s < r; s++) if (t = b.relative[e[s].type]) c = [me(xe(c), t)]; else {
                if ((t = b.filter[e[s].type].apply(null, e[s].matches))[k]) {
                    for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
                    return Te(s > 1 && xe(c), s > 1 && ve(e.slice(0, s - 1).concat({value: " " === e[s - 2].type ? "*" : ""})).replace(B, "$1"), t, s < n && Ce(e.slice(s, n)), n < r && Ce(e = e.slice(n)), n < r && ve(e))
                }
                c.push(t)
            }
            return xe(c)
        }

        function Ee(y, v) {
            var m = v.length > 0, x = y.length > 0, e = function (e, t, n, r, i) {
                var o, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i), h = S += null == p ? 1 : Math.random() || .1, g = d.length;
                for (i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++) {
                    if (x && o) {
                        a = 0, t || o.ownerDocument === C || (T(o), n = !E);
                        while (s = y[a++]) if (s(o, t || C, n)) {
                            r.push(o);
                            break
                        }
                        i && (S = h)
                    }
                    m && ((o = !s && o) && u--, e && c.push(o))
                }
                if (u += l, m && l !== u) {
                    a = 0;
                    while (s = v[a++]) s(c, f, t, n);
                    if (e) {
                        if (u > 0) while (l--) c[l] || f[l] || (f[l] = j.call(r));
                        f = we(f)
                    }
                    L.apply(r, f), i && !e && f.length > 0 && u + v.length > 1 && oe.uniqueSort(r)
                }
                return i && (S = h, w = p), c
            };
            return m ? se(e) : e
        }

        return f = oe.compile = function (e, t) {
            var n, r = [], i = [], o = D[e + " "];
            if (!o) {
                t || (t = h(e)), n = t.length;
                while (n--) (o = Ce(t[n]))[k] ? r.push(o) : i.push(o);
                (o = D(e, Ee(i, r))).selector = e
            }
            return o
        }, g = oe.select = function (e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e, c = !r && h(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if ((o = c[0] = c[0].slice(0)).length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(Z, ee), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                i = V.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i], b.relative[s = a.type]) break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(Z, ee), K.test(o[0].type) && ge(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && ve(o))) return L.apply(n, r), n;
                        break
                    }
                }
            }
            return (l || f(e, c))(r, t, !E, n, !t || K.test(e) && ge(t.parentNode) || t), n
        }, d.sortStable = k.split("").sort(N).join("") === k, d.detectDuplicates = !!l, T(), d.sortDetached = ue(function (e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }), ue(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || le("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), d.attributes && ue(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || le("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ue(function (e) {
            return null == e.getAttribute("disabled")
        }) || le(P, function (e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), oe
    }(C);
    k.find = h, k.expr = h.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = h.uniqueSort, k.text = h.getText, k.isXMLDoc = h.isXML, k.contains = h.contains, k.escapeSelector = h.escape;
    var T = function (e, t, n) {
        var r = [], i = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) {
            if (i && k(e).is(n)) break;
            r.push(e)
        }
        return r
    }, S = function (e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    }, D = k.expr.match.needsContext;

    function N(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function j(e, n, r) {
        return m(n) ? k.grep(e, function (e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? k.grep(e, function (e) {
            return e === n !== r
        }) : "string" != typeof n ? k.grep(e, function (e) {
            return i.call(n, e) > -1 !== r
        }) : k.filter(n, e, r)
    }

    k.filter = function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [r] : [] : k.find.matches(e, k.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, k.fn.extend({
        find: function (e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e) return this.pushStack(k(e).filter(function () {
                for (t = 0; t < r; t++) if (k.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) k.find(e, i[t], n);
            return r > 1 ? k.uniqueSort(n) : n
        }, filter: function (e) {
            return this.pushStack(j(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(j(this, e || [], !0))
        }, is: function (e) {
            return !!j(this, "string" == typeof e && D.test(e) ? k(e) : e || [], !1).length
        }
    });
    var q, L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (k.fn.init = function (e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || q, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof k ? t[0] : t, k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), A.test(r[1]) && k.isPlainObject(t)) for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this)
    }).prototype = k.fn, q = k(E);
    var H = /^(?:parents|prev(?:Until|All))/, O = {children: !0, contents: !0, next: !0, prev: !0};
    k.fn.extend({
        has: function (e) {
            var t = k(e, this), n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (k.contains(this, t[e])) return !0
            })
        }, closest: function (e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && k(e);
            if (!D.test(e)) for (; r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
                o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? k.uniqueSort(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? i.call(k(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    });

    function P(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType) ;
        return e
    }

    k.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return T(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return T(e, "parentNode", n)
        }, next: function (e) {
            return P(e, "nextSibling")
        }, prev: function (e) {
            return P(e, "previousSibling")
        }, nextAll: function (e) {
            return T(e, "nextSibling")
        }, prevAll: function (e) {
            return T(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return T(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return T(e, "previousSibling", n)
        }, siblings: function (e) {
            return S((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return S(e.firstChild)
        }, contents: function (e) {
            return N(e, "iframe") ? e.contentDocument : (N(e, "template") && (e = e.content || e), k.merge([], e.childNodes))
        }
    }, function (r, i) {
        k.fn[r] = function (e, t) {
            var n = k.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = k.filter(t, n)), this.length > 1 && (O[r] || k.uniqueSort(n), H.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var M = /[^\x20\t\r\n\f]+/g;

    function R(e) {
        var n = {};
        return k.each(e.match(M) || [], function (e, t) {
            n[t] = !0
        }), n
    }

    k.Callbacks = function (r) {
        r = "string" == typeof r ? R(r) : k.extend({}, r);
        var n, e, t, i, o = [], a = [], s = -1, u = function () {
            for (i = i || r.once, t = n = !0; a.length; s = -1) {
                e = a.shift();
                while (++s < o.length) !1 === o[s].apply(e[0], e[1]) && r.stopOnFalse && (s = o.length, e = !1)
            }
            r.memory || (e = !1), n = !1, i && (o = e ? [] : "")
        }, l = {
            add: function () {
                return o && (e && !n && (s = o.length - 1, a.push(e)), function n(e) {
                    k.each(e, function (e, t) {
                        m(t) ? r.unique && l.has(t) || o.push(t) : t && t.length && "string" !== w(t) && n(t)
                    })
                }(arguments), e && !n && u()), this
            }, remove: function () {
                return k.each(arguments, function (e, t) {
                    var n;
                    while ((n = k.inArray(t, o, n)) > -1) o.splice(n, 1), n <= s && s--
                }), this
            }, has: function (e) {
                return e ? k.inArray(e, o) > -1 : o.length > 0
            }, empty: function () {
                return o && (o = []), this
            }, disable: function () {
                return i = a = [], o = e = "", this
            }, disabled: function () {
                return !o
            }, lock: function () {
                return i = a = [], e || n || (o = e = ""), this
            }, locked: function () {
                return !!i
            }, fireWith: function (e, t) {
                return i || (t = [e, (t = t || []).slice ? t.slice() : t], a.push(t), n || u()), this
            }, fire: function () {
                return l.fireWith(this, arguments), this
            }, fired: function () {
                return !!t
            }
        };
        return l
    };

    function I(e) {
        return e
    }

    function W(e) {
        throw e
    }

    function $(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }

    k.extend({
        Deferred: function (e) {
            var o = [["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2], ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]],
                i = "pending", a = {
                    state: function () {
                        return i
                    }, always: function () {
                        return s.done(arguments).fail(arguments), this
                    }, catch: function (e) {
                        return a.then(null, e)
                    }, pipe: function () {
                        var i = arguments;
                        return k.Deferred(function (r) {
                            k.each(o, function (e, t) {
                                var n = m(i[t[4]]) && i[t[4]];
                                s[t[1]](function () {
                                    var e = n && n.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    }, then: function (t, n, r) {
                        var u = 0;

                        function l(i, o, a, s) {
                            return function () {
                                var n = this, r = arguments, e = function () {
                                    var e, t;
                                    if (!(i < u)) {
                                        if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                        t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, I, s), l(u, o, W, s)) : (u++, t.call(e, l(u, o, I, s), l(u, o, W, s), l(u, o, I, o.notifyWith))) : (a !== I && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                    }
                                }, t = s ? e : function () {
                                    try {
                                        e()
                                    } catch (e) {
                                        k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, t.stackTrace), i + 1 >= u && (a !== W && (n = void 0, r = [e]), o.rejectWith(n, r))
                                    }
                                };
                                i ? t() : (k.Deferred.getStackHook && (t.stackTrace = k.Deferred.getStackHook()), C.setTimeout(t))
                            }
                        }

                        return k.Deferred(function (e) {
                            o[0][3].add(l(0, e, m(r) ? r : I, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : I)), o[2][3].add(l(0, e, m(n) ? n : W))
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? k.extend(e, a) : a
                    }
                }, s = {};
            return k.each(o, function (e, t) {
                var n = t[2], r = t[5];
                a[t[1]] = n.add, r && n.add(function () {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function () {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        }, when: function (e) {
            var n = arguments.length, t = n, r = Array(t), i = s.call(arguments), o = k.Deferred(), a = function (t) {
                return function (e) {
                    r[t] = this, i[t] = arguments.length > 1 ? s.call(arguments) : e, --n || o.resolveWith(r, i)
                }
            };
            if (n <= 1 && ($(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
            while (t--) $(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    k.Deferred.exceptionHook = function (e, t) {
        C.console && C.console.warn && e && B.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, k.readyException = function (e) {
        C.setTimeout(function () {
            throw e
        })
    };
    var F = k.Deferred();
    k.fn.ready = function (e) {
        return F.then(e)["catch"](function (e) {
            k.readyException(e)
        }), this
    }, k.extend({
        isReady: !1, readyWait: 1, ready: function (e) {
            (!0 === e ? --k.readyWait : k.isReady) || (k.isReady = !0, !0 !== e && --k.readyWait > 0 || F.resolveWith(E, [k]))
        }
    }), k.ready.then = F.then;

    function _() {
        E.removeEventListener("DOMContentLoaded", _), C.removeEventListener("load", _), k.ready()
    }

    "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(k.ready) : (E.addEventListener("DOMContentLoaded", _), C.addEventListener("load", _));
    var z = function (e, t, n, r, i, o, a) {
        var s = 0, u = e.length, l = null == n;
        if ("object" === w(n)) {
            i = !0;
            for (s in n) z(e, t, s, n[s], !0, o, a)
        } else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function (e, t, n) {
            return l.call(k(e), n)
        })), t)) for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    }, X = /^-ms-/, U = /-([a-z])/g;

    function V(e, t) {
        return t.toUpperCase()
    }

    function G(e) {
        return e.replace(X, "ms-").replace(U, V)
    }

    var Y = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function Q() {
        this.expando = k.expando + Q.uid++
    }

    Q.uid = 1, Q.prototype = {
        cache: function (e) {
            var t = e[this.expando];
            return t || (t = {}, Y(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {value: t, configurable: !0}))), t
        }, set: function (e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[G(t)] = n; else for (r in t) i[G(r)] = t[r];
            return i
        }, get: function (e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)]
        }, access: function (e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        }, remove: function (e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in r ? [t] : t.match(M) || []).length;
                    while (n--) delete r[t[n]]
                }
                (void 0 === t || k.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        }, hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !k.isEmptyObject(t)
        }
    };
    var J = new Q, K = new Q, Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, ee = /[A-Z]/g;

    function te(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Z.test(e) ? JSON.parse(e) : e)
    }

    function ne(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(ee, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
            try {
                n = te(n)
            } catch (e) {
            }
            K.set(e, t, n)
        } else n = void 0;
        return n
    }

    k.extend({
        hasData: function (e) {
            return K.hasData(e) || J.hasData(e)
        }, data: function (e, t, n) {
            return K.access(e, t, n)
        }, removeData: function (e, t) {
            K.remove(e, t)
        }, _data: function (e, t, n) {
            return J.access(e, t, n)
        }, _removeData: function (e, t) {
            J.remove(e, t)
        }
    }), k.fn.extend({
        data: function (n, e) {
            var t, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = K.get(o), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = G(r.slice(5)), ne(o, r, i[r]));
                    J.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function () {
                K.set(this, n)
            }) : z(this, function (e) {
                var t;
                if (o && void 0 === e) {
                    if (void 0 !== (t = K.get(o, n))) return t;
                    if (void 0 !== (t = ne(o, n))) return t
                } else this.each(function () {
                    K.set(this, n, e)
                })
            }, null, e, arguments.length > 1, null, !0)
        }, removeData: function (e) {
            return this.each(function () {
                K.remove(this, e)
            })
        }
    }), k.extend({
        queue: function (e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = J.get(e, t), n && (!r || Array.isArray(n) ? r = J.access(e, t, k.makeArray(n)) : r.push(n)), r || []
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = k.queue(e, t), r = n.length, i = n.shift(), o = k._queueHooks(e, t), a = function () {
                k.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return J.get(e, n) || J.access(e, n, {
                empty: k.Callbacks("once memory").add(function () {
                    J.remove(e, [t + "queue", n])
                })
            })
        }
    }), k.fn.extend({
        queue: function (t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? k.queue(this[0], t) : void 0 === n ? this : this.each(function () {
                var e = k.queue(this, t, n);
                k._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                k.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n, r = 1, i = k.Deferred(), o = this, a = this.length, s = function () {
                --r || i.resolveWith(o, [o])
            };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--) (n = J.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ie = new RegExp("^(?:([+-])=|)(" + re + ")([a-z%]*)$", "i"), oe = ["Top", "Right", "Bottom", "Left"], ae = function (e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && k.contains(e.ownerDocument, e) && "none" === k.css(e, "display")
    }, se = function (e, t, n, r) {
        var i, o, a = {};
        for (o in t) a[o] = e.style[o], e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t) e.style[o] = a[o];
        return i
    };

    function ue(e, t, n, r) {
        var i, o, a = 20, s = r ? function () {
            return r.cur()
        } : function () {
            return k.css(e, t, "")
        }, u = s(), l = n && n[3] || (k.cssNumber[t] ? "" : "px"), c = (k.cssNumber[t] || "px" !== l && +u) && ie.exec(k.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) k.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, k.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }

    var le = {};

    function ce(e) {
        var t, n = e.ownerDocument, r = e.nodeName, i = le[r];
        return i || (t = n.body.appendChild(n.createElement(r)), i = k.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), le[r] = i, i)
    }

    function fe(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++) (r = e[o]).style && (n = r.style.display, t ? ("none" === n && (i[o] = J.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && ae(r) && (i[o] = ce(r))) : "none" !== n && (i[o] = "none", J.set(r, "display", n)));
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e
    }

    k.fn.extend({
        show: function () {
            return fe(this, !0)
        }, hide: function () {
            return fe(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                ae(this) ? k(this).show() : k(this).hide()
            })
        }
    });
    var pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, he = /^$|^module$|\/(?:java|ecma)script/i, ge = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;

    function ye(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && N(e, t) ? k.merge([e], n) : n
    }

    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++) J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"))
    }

    var me = /<|&#?\w+;/;

    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if ((o = e[d]) || 0 === o) if ("object" === w(o)) k.merge(p, o.nodeType ? [o] : o); else if (me.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            k.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++]) if (r && k.inArray(o, r) > -1) i && i.push(o); else if (l = k.contains(o.ownerDocument, o), a = ye(f.appendChild(o), "script"), l && ve(a), n) {
            c = 0;
            while (o = a[c++]) he.test(o.type || "") && n.push(o)
        }
        return f
    }

    !function () {
        var e = E.createDocumentFragment().appendChild(E.createElement("div")), t = E.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), v.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var be = E.documentElement, we = /^key/, Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Ce = /^([^.]*)(?:\.(.+)|)/;

    function Ee() {
        return !0
    }

    function ke() {
        return !1
    }

    function Se() {
        try {
            return E.activeElement
        } catch (e) {
        }
    }

    function De(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (s in t) De(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = ke; else if (!i) return e;
        return 1 === o && (a = i, (i = function (e) {
            return k().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = k.guid++)), e.each(function () {
            k.event.add(this, t, i, r, n)
        })
    }

    k.event = {
        global: {}, add: function (t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = J.get(t);
            if (y) {
                n.handler && (n = (o = n).handler, i = o.selector), i && k.find.matchesSelector(be, i), n.guid || (n.guid = k.guid++), (u = y.events) || (u = y.events = {}), (a = y.handle) || (a = y.handle = function (e) {
                    return "undefined" != typeof k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0
                }), l = (e = (e || "").match(M) || [""]).length;
                while (l--) d = g = (s = Ce.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = k.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = k.event.special[d] || {}, c = k.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && k.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), k.event.global[d] = !0)
            }
        }, remove: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = J.hasData(e) && J.get(e);
            if (y && (u = y.events)) {
                l = (t = (t || "").match(M) || [""]).length;
                while (l--) if (s = Ce.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                    f = k.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                    while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                    a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || k.removeEvent(e, d, y.handle), delete u[d])
                } else for (d in u) k.event.remove(e, d + t[l], n, r, !0);
                k.isEmptyObject(u) && J.remove(e, "handle events")
            }
        }, dispatch: function (e) {
            var t = k.event.fix(e), n, r, i, o, a, s, u = new Array(arguments.length), l = (J.get(this, "events") || {})[t.type] || [], c = k.event.special[t.type] || {};
            for (u[0] = t, n = 1; n < arguments.length; n++) u[n] = arguments[n];
            if (t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
                s = k.event.handlers.call(this, t, l), n = 0;
                while ((o = s[n++]) && !t.isPropagationStopped()) {
                    t.currentTarget = o.elem, r = 0;
                    while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped()) t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, t.data = a.data, void 0 !== (i = ((k.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, t), t.result
            }
        }, handlers: function (e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? k(i, this).index(l) > -1 : k.find(i, this, null, [l]).length), a[i] && o.push(r);
                o.length && s.push({elem: l, handlers: o})
            }
            return l = this, u < t.length && s.push({elem: l, handlers: t.slice(u)}), s
        }, addProp: function (t, e) {
            Object.defineProperty(k.Event.prototype, t, {
                enumerable: !0, configurable: !0, get: m(e) ? function () {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function () {
                    if (this.originalEvent) return this.originalEvent[t]
                }, set: function (e) {
                    Object.defineProperty(this, t, {enumerable: !0, configurable: !0, writable: !0, value: e})
                }
            })
        }, fix: function (e) {
            return e[k.expando] ? e : new k.Event(e)
        }, special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== Se() && this.focus) return this.focus(), !1
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    if (this === Se() && this.blur) return this.blur(), !1
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1
                }, _default: function (e) {
                    return N(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, k.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, k.Event = function (e, t) {
        if (!(this instanceof k.Event)) return new k.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : ke, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && k.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[k.expando] = !0
    }, k.Event.prototype = {
        constructor: k.Event, isDefaultPrevented: ke, isPropagationStopped: ke, isImmediatePropagationStopped: ke, isSimulated: !1, preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault()
        }, stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation()
        }, stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, k.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
            var t = e.button;
            return null == e.which && we.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, k.event.addProp), k.each({mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout"}, function (e, o) {
        k.event.special[e] = {
            delegateType: o, bindType: o, handle: function (e) {
                var t, n = this, r = e.relatedTarget, i = e.handleObj;
                return r && (r === n || k.contains(n, r)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = o), t
            }
        }
    }), k.fn.extend({
        on: function (e, t, n, r) {
            return De(this, e, t, n, r)
        }, one: function (e, t, n, r) {
            return De(this, e, t, n, r, 1)
        }, off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ke), this.each(function () {
                k.event.remove(this, e, n, t)
            })
        }
    });
    var Ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, Ae = /<script|<style|<link/i, je = /checked\s*(?:[^=]|=\s*.checked.)/i,
        qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Le(e, t) {
        return N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") ? k(e).children("tbody")[0] || e : e
    }

    function He(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function Oe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Pe(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (J.hasData(e) && (o = J.access(e), a = J.set(t, o), l = o.events)) {
                delete a.handle, a.events = {};
                for (i in l) for (n = 0, r = l[i].length; n < r; n++) k.event.add(t, i, l[i][n])
            }
            K.hasData(e) && (s = K.access(e), u = k.extend({}, s), K.set(t, u))
        }
    }

    function Me(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && pe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function Re(n, r, i, o) {
        r = g.apply([], r);
        var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = m(d);
        if (h || f > 1 && "string" == typeof d && !v.checkClone && je.test(d)) return n.each(function (e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), Re(t, r, i, o)
        });
        if (f && (e = xe(r, n[0].ownerDocument, !1, n, o), t = e.firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = k.map(ye(e, "script"), He)).length; c < f; c++) u = e, c !== p && (u = k.clone(u, !0, !0), s && k.merge(a, ye(u, "script"))), i.call(n[c], u, c);
            if (s) for (l = a[a.length - 1].ownerDocument, k.map(a, Oe), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !J.access(u, "globalEval") && k.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? k._evalUrl && k._evalUrl(u.src) : b(u.textContent.replace(qe, ""), l, u))
        }
        return n
    }

    function Ie(e, t, n) {
        for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || k.cleanData(ye(r)), r.parentNode && (n && k.contains(r.ownerDocument, r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
        return e
    }

    k.extend({
        htmlPrefilter: function (e) {
            return e.replace(Ne, "<$1></$2>")
        }, clone: function (e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0), u = k.contains(e.ownerDocument, e);
            if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e))) for (a = ye(s), r = 0, i = (o = ye(e)).length; r < i; r++) Me(o[r], a[r]);
            if (t) if (n) for (o = o || ye(e), a = a || ye(s), r = 0, i = o.length; r < i; r++) Pe(o[r], a[r]); else Pe(e, s);
            return (a = ye(s, "script")).length > 0 && ve(a, !u && ye(e, "script")), s
        }, cleanData: function (e) {
            for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++) if (Y(n)) {
                if (t = n[J.expando]) {
                    if (t.events) for (r in t.events) i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
                    n[J.expando] = void 0
                }
                n[K.expando] && (n[K.expando] = void 0)
            }
        }
    }), k.fn.extend({
        detach: function (e) {
            return Ie(this, e, !0)
        }, remove: function (e) {
            return Ie(this, e)
        }, text: function (e) {
            return z(this, function (e) {
                return void 0 === e ? k.text(this) : this.empty().each(function () {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        }, append: function () {
            return Re(this, arguments, function (e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
            })
        }, prepend: function () {
            return Re(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = Le(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return Re(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return Re(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (k.cleanData(ye(e, !1)), e.textContent = "");
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return k.clone(this, e, t)
            })
        }, html: function (e) {
            return z(this, function (e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Ae.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = k.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (k.cleanData(ye(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var n = [];
            return Re(this, arguments, function (e) {
                var t = this.parentNode;
                k.inArray(this, n) < 0 && (k.cleanData(ye(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), k.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function (e, a) {
        k.fn[e] = function (e) {
            for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), k(r[o])[a](t), u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var We = new RegExp("^(" + re + ")(?!px)[a-z%]+$", "i"), $e = function (e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = C), t.getComputedStyle(e)
    }, Be = new RegExp(oe.join("|"), "i");
    !function () {
        function e() {
            if (u) {
                s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", be.appendChild(s).appendChild(u);
                var e = C.getComputedStyle(u);
                n = "1%" !== e.top, a = 12 === t(e.marginLeft), u.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), u.style.position = "absolute", i = 36 === u.offsetWidth || "absolute", be.removeChild(s), u = null
            }
        }

        function t(e) {
            return Math.round(parseFloat(e))
        }

        var n, r, i, o, a, s = E.createElement("div"), u = E.createElement("div");
        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === u.style.backgroundClip, k.extend(v, {
            boxSizingReliable: function () {
                return e(), r
            }, pixelBoxStyles: function () {
                return e(), o
            }, pixelPosition: function () {
                return e(), n
            }, reliableMarginLeft: function () {
                return e(), a
            }, scrollboxSize: function () {
                return e(), i
            }
        }))
    }();

    function Fe(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || $e(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || k.contains(e.ownerDocument, e) || (a = k.style(e, t)), !v.pixelBoxStyles() && We.test(a) && Be.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function _e(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    var ze = /^(none|table(?!-c[ea]).+)/, Xe = /^--/, Ue = {position: "absolute", visibility: "hidden", display: "block"}, Ve = {letterSpacing: "0", fontWeight: "400"}, Ge = ["Webkit", "Moz", "ms"],
        Ye = E.createElement("div").style;

    function Qe(e) {
        if (e in Ye) return e;
        var t = e[0].toUpperCase() + e.slice(1), n = Ge.length;
        while (n--) if ((e = Ge[n] + t) in Ye) return e
    }

    function Je(e) {
        var t = k.cssProps[e];
        return t || (t = k.cssProps[e] = Qe(e) || e), t
    }

    function Ke(e, t, n) {
        var r = ie.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Ze(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0, s = 0, u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += k.css(e, n + oe[a], !0, i)), r ? ("content" === n && (u -= k.css(e, "padding" + oe[a], !0, i)), "margin" !== n && (u -= k.css(e, "border" + oe[a] + "Width", !0, i))) : (u += k.css(e, "padding" + oe[a], !0, i), "padding" !== n ? u += k.css(e, "border" + oe[a] + "Width", !0, i) : s += k.css(e, "border" + oe[a] + "Width", !0, i));
        return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5))), u
    }

    function et(e, t, n) {
        var r = $e(e), i = Fe(e, t, r), o = "border-box" === k.css(e, "boxSizing", !1, r), a = o;
        if (We.test(i)) {
            if (!n) return i;
            i = "auto"
        }
        return a = a && (v.boxSizingReliable() || i === e.style[t]), ("auto" === i || !parseFloat(i) && "inline" === k.css(e, "display", !1, r)) && (i = e["offset" + t[0].toUpperCase() + t.slice(1)], a = !0), (i = parseFloat(i) || 0) + Ze(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
    }

    k.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Fe(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0},
        cssProps: {},
        style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = G(t), u = Xe.test(t), l = e.style;
                if (u || (t = Je(s)), a = k.cssHooks[t] || k.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" == (o = typeof n) && (i = ie.exec(n)) && i[1] && (n = ue(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (k.cssNumber[s] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function (e, t, n, r) {
            var i, o, a, s = G(t);
            return Xe.test(t) || (t = Je(s)), (a = k.cssHooks[t] || k.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Fe(e, t, r)), "normal" === i && t in Ve && (i = Ve[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), k.each(["height", "width"], function (e, s) {
        k.cssHooks[s] = {
            get: function (e, t, n) {
                if (t) return !ze.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? et(e, s, n) : se(e, Ue, function () {
                    return et(e, s, n)
                })
            }, set: function (e, t, n) {
                var r, i = $e(e), o = "border-box" === k.css(e, "boxSizing", !1, i), a = n && Ze(e, s, n, o, i);
                return o && v.scrollboxSize() === i.position && (a -= Math.ceil(e["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(i[s]) - Ze(e, s, "border", !1, i) - .5)), a && (r = ie.exec(t)) && "px" !== (r[3] || "px") && (e.style[s] = t, t = k.css(e, s)), Ke(e, t, a)
            }
        }
    }), k.cssHooks.marginLeft = _e(v.reliableMarginLeft, function (e, t) {
        if (t) return (parseFloat(Fe(e, "marginLeft")) || e.getBoundingClientRect().left - se(e, {marginLeft: 0}, function () {
            return e.getBoundingClientRect().left
        })) + "px"
    }), k.each({margin: "", padding: "", border: "Width"}, function (i, o) {
        k.cssHooks[i + o] = {
            expand: function (e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + oe[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, "margin" !== i && (k.cssHooks[i + o].set = Ke)
    }), k.fn.extend({
        css: function (e, t) {
            return z(this, function (e, t, n) {
                var r, i, o = {}, a = 0;
                if (Array.isArray(t)) {
                    for (r = $e(e), i = t.length; a < i; a++) o[t[a]] = k.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? k.style(e, t, n) : k.css(e, t)
            }, e, t, arguments.length > 1)
        }
    });

    function tt(e, t, n, r, i) {
        return new tt.prototype.init(e, t, n, r, i)
    }

    k.Tween = tt, tt.prototype = {
        constructor: tt, init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || k.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (k.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = tt.propHooks[this.prop];
            return e && e.get ? e.get(this) : tt.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = tt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : tt.propHooks._default.set(this), this
        }
    }, tt.prototype.init.prototype = tt.prototype, tt.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            }, set: function (e) {
                k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[k.cssProps[e.prop]] && !k.cssHooks[e.prop] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, tt.propHooks.scrollTop = tt.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, k.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }, _default: "swing"
    }, k.fx = tt.prototype.init, k.fx.step = {};
    var nt, rt, it = /^(?:toggle|show|hide)$/, ot = /queueHooks$/;

    function at() {
        rt && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(at) : C.setTimeout(at, k.fx.interval), k.fx.tick())
    }

    function st() {
        return C.setTimeout(function () {
            nt = void 0
        }), nt = Date.now()
    }

    function ut(e, t) {
        var n, r = 0, i = {height: e};
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = oe[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function lt(e, t, n) {
        for (var r, i = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r
    }

    function ct(e, t, n) {
        var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t, p = this, d = {}, h = e.style, g = e.nodeType && ae(e), y = J.get(e, "fxshow");
        n.queue || (null == (a = k._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
            a.unqueued || s()
        }), a.unqueued++, p.always(function () {
            p.always(function () {
                a.unqueued--, k.queue(e, "fx").length || a.empty.fire()
            })
        }));
        for (r in t) if (i = t[r], it.test(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                if ("show" !== i || !y || void 0 === y[r]) continue;
                g = !0
            }
            d[r] = y && y[r] || k.style(e, r)
        }
        if ((u = !k.isEmptyObject(t)) || !k.isEmptyObject(d)) {
            f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = J.get(e, "display")), "none" === (c = k.css(e, "display")) && (l ? c = l : (fe([e], !0), l = e.style.display || l, c = k.css(e, "display"), fe([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === k.css(e, "float") && (u || (p.done(function () {
                h.display = l
            }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            })), u = !1;
            for (r in d) u || (y ? "hidden" in y && (g = y.hidden) : y = J.access(e, "fxshow", {display: l}), o && (y.hidden = !g), g && fe([e], !0), p.done(function () {
                g || fe([e]), J.remove(e, "fxshow");
                for (r in d) k.style(e, r, d[r])
            })), u = lt(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0))
        }
    }

    function ft(e, t) {
        var n, r, i, o, a;
        for (n in e) if (r = G(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = k.cssHooks[r]) && "expand" in a) {
            o = a.expand(o), delete e[r];
            for (n in o) n in e || (e[n] = o[n], t[n] = i)
        } else t[r] = i
    }

    function pt(o, e, t) {
        var n, a, r = 0, i = pt.prefilters.length, s = k.Deferred().always(function () {
            delete u.elem
        }), u = function () {
            if (a) return !1;
            for (var e = nt || st(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
            return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        }, l = s.promise({
            elem: o,
            props: k.extend({}, e),
            opts: k.extend(!0, {specialEasing: {}, easing: k.easing._default}, t),
            originalProperties: e,
            originalOptions: t,
            startTime: nt || st(),
            duration: t.duration,
            tweens: [],
            createTween: function (e, t) {
                var n = k.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(n), n
            },
            stop: function (e) {
                var t = 0, n = e ? l.tweens.length : 0;
                if (a) return this;
                for (a = !0; t < n; t++) l.tweens[t].run(1);
                return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
            }
        }), c = l.props;
        for (ft(c, l.opts.specialEasing); r < i; r++) if (n = pt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return k.map(c, lt, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), k.fx.timer(k.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })), l
    }

    k.Animation = k.extend(pt, {
        tweeners: {
            "*": [function (e, t) {
                var n = this.createTween(e, t);
                return ue(n.elem, e, ie.exec(t), n), n
            }]
        }, tweener: function (e, t) {
            m(e) ? (t = e, e = ["*"]) : e = e.match(M);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], pt.tweeners[n] = pt.tweeners[n] || [], pt.tweeners[n].unshift(t)
        }, prefilters: [ct], prefilter: function (e, t) {
            t ? pt.prefilters.unshift(e) : pt.prefilters.push(e)
        }
    }), k.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? k.extend({}, e) : {complete: n || !n && t || m(e) && e, duration: e, easing: n && t || t && !m(t) && t};
        return k.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            m(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue)
        }, r
    }, k.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        }, animate: function (t, e, n, r) {
            var i = k.isEmptyObject(t), o = k.speed(e, n, r), a = function () {
                var e = pt(this, k.extend({}, t), o);
                (i || J.get(this, "finish")) && e.stop(!0)
            };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        }, stop: function (i, e, o) {
            var a = function (e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(function () {
                var e = !0, t = null != i && i + "queueHooks", n = k.timers, r = J.get(this);
                if (t) r[t] && r[t].stop && a(r[t]); else for (t in r) r[t] && r[t].stop && ot.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || k.dequeue(this, i)
            })
        }, finish: function (a) {
            return !1 !== a && (a = a || "fx"), this.each(function () {
                var e, t = J.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = k.timers, o = n ? n.length : 0;
                for (t.finish = !0, k.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), k.each(["toggle", "show", "hide"], function (e, r) {
        var i = k.fn[r];
        k.fn[r] = function (e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(ut(r, !0), e, t, n)
        }
    }), k.each({slideDown: ut("show"), slideUp: ut("hide"), slideToggle: ut("toggle"), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function (e, r) {
        k.fn[e] = function (e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), k.timers = [], k.fx.tick = function () {
        var e, t = 0, n = k.timers;
        for (nt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || k.fx.stop(), nt = void 0
    }, k.fx.timer = function (e) {
        k.timers.push(e), k.fx.start()
    }, k.fx.interval = 13, k.fx.start = function () {
        rt || (rt = !0, at())
    }, k.fx.stop = function () {
        rt = null
    }, k.fx.speeds = {slow: 600, fast: 200, _default: 400}, k.fn.delay = function (r, e) {
        return r = k.fx ? k.fx.speeds[r] || r : r, e = e || "fx", this.queue(e, function (e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function () {
                C.clearTimeout(n)
            }
        })
    }, function () {
        var e = E.createElement("input"), t = E.createElement("select").appendChild(E.createElement("option"));
        e.type = "checkbox", v.checkOn = "" !== e.value, v.optSelected = t.selected, (e = E.createElement("input")).value = "t", e.type = "radio", v.radioValue = "t" === e.value
    }();
    var dt, ht = k.expr.attrHandle;
    k.fn.extend({
        attr: function (e, t) {
            return z(this, k.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                k.removeAttr(this, e)
            })
        }
    }), k.extend({
        attr: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? k.prop(e, t, n) : (1 === o && k.isXMLDoc(e) || (i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? dt : void 0)), void 0 !== n ? null === n ? void k.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = k.find.attr(e, t)) ? void 0 : r)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!v.radioValue && "radio" === t && N(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }, removeAttr: function (e, t) {
            var n, r = 0, i = t && t.match(M);
            if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n)
        }
    }), dt = {
        set: function (e, t, n) {
            return !1 === t ? k.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, k.each(k.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var a = ht[t] || k.find.attr;
        ht[t] = function (e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = ht[o], ht[o] = r, r = null != a(e, t, n) ? o : null, ht[o] = i), r
        }
    });
    var gt = /^(?:input|select|textarea|button)$/i, yt = /^(?:a|area)$/i;
    k.fn.extend({
        prop: function (e, t) {
            return z(this, k.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return this.each(function () {
                delete this[k.propFix[e] || e]
            })
        }
    }), k.extend({
        prop: function (e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && k.isXMLDoc(e) || (t = k.propFix[t] || t, i = k.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = k.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : gt.test(e.nodeName) || yt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }, propFix: {for: "htmlFor", class: "className"}
    }), v.optSelected || (k.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        }, set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        k.propFix[this.toLowerCase()] = this
    });

    function vt(e) {
        return (e.match(M) || []).join(" ")
    }

    function mt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function xt(e) {
        return Array.isArray(e) ? e : "string" == typeof e ? e.match(M) || [] : []
    }

    k.fn.extend({
        addClass: function (t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function (e) {
                k(this).addClass(t.call(this, e, mt(this)))
            });
            if ((e = xt(t)).length) while (n = this[u++]) if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                a = 0;
                while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                i !== (s = vt(r)) && n.setAttribute("class", s)
            }
            return this
        }, removeClass: function (t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function (e) {
                k(this).removeClass(t.call(this, e, mt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = xt(t)).length) while (n = this[u++]) if (i = mt(n), r = 1 === n.nodeType && " " + vt(i) + " ") {
                a = 0;
                while (o = e[a++]) while (r.indexOf(" " + o + " ") > -1) r = r.replace(" " + o + " ", " ");
                i !== (s = vt(r)) && n.setAttribute("class", s)
            }
            return this
        }, toggleClass: function (i, t) {
            var o = typeof i, a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function (e) {
                k(this).toggleClass(i.call(this, e, mt(this), t), t)
            }) : this.each(function () {
                var e, t, n, r;
                if (a) {
                    t = 0, n = k(this), r = xt(i);
                    while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
                } else void 0 !== i && "boolean" !== o || ((e = mt(this)) && J.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : J.get(this, "__className__") || ""))
            })
        }, hasClass: function (e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++]) if (1 === n.nodeType && (" " + vt(mt(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var bt = /\r/g;
    k.fn.extend({
        val: function (n) {
            var r, e, i, t = this[0];
            {
                if (arguments.length) return i = m(n), this.each(function (e) {
                    var t;
                    1 === this.nodeType && (null == (t = i ? n.call(this, e, k(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = k.map(t, function (e) {
                        return null == e ? "" : e + ""
                    })), (r = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
                });
                if (t) return (r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(bt, "") : null == e ? "" : e
            }
        }
    }), k.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = k.find.attr(e, "value");
                    return null != t ? t : vt(k.text(e))
                }
            }, select: {
                get: function (e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++) if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))) {
                        if (t = k(n).val(), a) return t;
                        s.push(t)
                    }
                    return s
                }, set: function (e, t) {
                    var n, r, i = e.options, o = k.makeArray(t), a = i.length;
                    while (a--) ((r = i[a]).selected = k.inArray(k.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), k.each(["radio", "checkbox"], function () {
        k.valHooks[this] = {
            set: function (e, t) {
                if (Array.isArray(t)) return e.checked = k.inArray(k(e).val(), t) > -1
            }
        }, v.checkOn || (k.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), v.focusin = "onfocusin" in C;
    var wt = /^(?:focusinfocus|focusoutblur)$/, Tt = function (e) {
        e.stopPropagation()
    };
    k.extend(k.event, {
        trigger: function (e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || E], d = y.call(e, "type") ? e.type : e, h = y.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !wt.test(d + k.event.triggered) && (d.indexOf(".") > -1 && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, e = e[k.expando] ? e : new k.Event(d, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : k.makeArray(t, [e]), c = k.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d, wt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = i > 1 ? s : c.bindType || d, (l = (J.get(o, "events") || {})[e.type] && J.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && Y(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !Y(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), k.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, Tt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, Tt), k.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        }, simulate: function (e, t, n) {
            var r = k.extend(new k.Event, n, {type: e, isSimulated: !0});
            k.event.trigger(r, null, t)
        }
    }), k.fn.extend({
        trigger: function (e, t) {
            return this.each(function () {
                k.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return k.event.trigger(e, t, n, !0)
        }
    }), v.focusin || k.each({focus: "focusin", blur: "focusout"}, function (n, r) {
        var i = function (e) {
            k.event.simulate(r, e.target, k.event.fix(e))
        };
        k.event.special[r] = {
            setup: function () {
                var e = this.ownerDocument || this, t = J.access(e, r);
                t || e.addEventListener(n, i, !0), J.access(e, r, (t || 0) + 1)
            }, teardown: function () {
                var e = this.ownerDocument || this, t = J.access(e, r) - 1;
                t ? J.access(e, r, t) : (e.removeEventListener(n, i, !0), J.remove(e, r))
            }
        }
    });
    var Ct = C.location, Et = Date.now(), kt = /\?/;
    k.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e), t
    };
    var St = /\[\]$/, Dt = /\r?\n/g, Nt = /^(?:submit|button|image|reset|file)$/i, At = /^(?:input|select|textarea|keygen)/i;

    function jt(n, e, r, i) {
        var t;
        if (Array.isArray(e)) k.each(e, function (e, t) {
            r || St.test(n) ? i(n, t) : jt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
        }); else if (r || "object" !== w(e)) i(n, e); else for (t in e) jt(n + "[" + t + "]", e[t], r, i)
    }

    k.param = function (e, t) {
        var n, r = [], i = function (e, t) {
            var n = m(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (Array.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e, function () {
            i(this.name, this.value)
        }); else for (n in e) jt(n, e[n], t, i);
        return r.join("&")
    }, k.fn.extend({
        serialize: function () {
            return k.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = k.prop(this, "elements");
                return e ? k.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !k(this).is(":disabled") && At.test(this.nodeName) && !Nt.test(e) && (this.checked || !pe.test(e))
            }).map(function (e, t) {
                var n = k(this).val();
                return null == n ? null : Array.isArray(n) ? k.map(n, function (e) {
                    return {name: t.name, value: e.replace(Dt, "\r\n")}
                }) : {name: t.name, value: n.replace(Dt, "\r\n")}
            }).get()
        }
    });
    var qt = /%20/g, Lt = /#.*$/, Ht = /([?&])_=[^&]*/, Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm, Pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Mt = /^(?:GET|HEAD)$/, Rt = /^\/\//, It = {}, Wt = {},
        $t = "*/".concat("*"), Bt = E.createElement("a");
    Bt.href = Ct.href;

    function Ft(o) {
        return function (e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0, i = e.toLowerCase().match(M) || [];
            if (m(t)) while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function _t(t, i, o, a) {
        var s = {}, u = t === Wt;

        function l(e) {
            var r;
            return s[e] = !0, k.each(t[e] || [], function (e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
            }), r
        }

        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function zt(e, t) {
        var n, r, i = k.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && k.extend(!0, e, r), e
    }

    function Xt(e, t, n) {
        var r, i, o, a, s = e.contents, u = e.dataTypes;
        while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r) for (i in s) if (s[i] && s[i].test(r)) {
            u.unshift(i);
            break
        }
        if (u[0] in n) o = u[0]; else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                a || (a = i)
            }
            o = o || a
        }
        if (o) return o !== u[0] && u.unshift(o), n[o]
    }

    function Ut(e, t, n, r) {
        var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
        if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
            if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                break
            }
            if (!0 !== a) if (a && e["throws"]) t = a(t); else try {
                t = a(t)
            } catch (e) {
                return {state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o}
            }
        }
        return {state: "success", data: t}
    }

    k.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ct.href,
            type: "GET",
            isLocal: Pt.test(Ct.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {"*": $t, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript"},
            contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": k.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? zt(zt(e, k.ajaxSettings), t) : zt(k.ajaxSettings, e)
        },
        ajaxPrefilter: Ft(It),
        ajaxTransport: Ft(Wt),
        ajax: function (e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, p, n, d, r, h, g, i, o, y = k.ajaxSetup({}, t), v = y.context || y, m = y.context && (v.nodeType || v.jquery) ? k(v) : k.event, x = k.Deferred(), b = k.Callbacks("once memory"),
                w = y.statusCode || {}, a = {}, s = {}, u = "canceled", T = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (h) {
                            if (!n) {
                                n = {};
                                while (t = Ot.exec(p)) n[t[1].toLowerCase()] = t[2]
                            }
                            t = n[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    }, getAllResponseHeaders: function () {
                        return h ? p : null
                    }, setRequestHeader: function (e, t) {
                        return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
                    }, overrideMimeType: function (e) {
                        return null == h && (y.mimeType = e), this
                    }, statusCode: function (e) {
                        var t;
                        if (e) if (h) T.always(e[T.status]); else for (t in e) w[t] = [w[t], e[t]];
                        return this
                    }, abort: function (e) {
                        var t = e || u;
                        return c && c.abort(t), l(0, t), this
                    }
                };
            if (x.promise(T), y.url = ((e || y.url || Ct.href) + "").replace(Rt, Ct.protocol + "//"), y.type = t.method || t.type || y.method || y.type, y.dataTypes = (y.dataType || "*").toLowerCase().match(M) || [""], null == y.crossDomain) {
                r = E.createElement("a");
                try {
                    r.href = y.url, r.href = r.href, y.crossDomain = Bt.protocol + "//" + Bt.host != r.protocol + "//" + r.host
                } catch (e) {
                    y.crossDomain = !0
                }
            }
            if (y.data && y.processData && "string" != typeof y.data && (y.data = k.param(y.data, y.traditional)), _t(It, y, t, T), h) return T;
            (g = k.event && y.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), y.type = y.type.toUpperCase(), y.hasContent = !Mt.test(y.type), f = y.url.replace(Lt, ""), y.hasContent ? y.data && y.processData && 0 === (y.contentType || "").indexOf("application/x-www-form-urlencoded") && (y.data = y.data.replace(qt, "+")) : (o = y.url.slice(f.length), y.data && (y.processData || "string" == typeof y.data) && (f += (kt.test(f) ? "&" : "?") + y.data, delete y.data), !1 === y.cache && (f = f.replace(Ht, "$1"), o = (kt.test(f) ? "&" : "?") + "_=" + Et++ + o), y.url = f + o), y.ifModified && (k.lastModified[f] && T.setRequestHeader("If-Modified-Since", k.lastModified[f]), k.etag[f] && T.setRequestHeader("If-None-Match", k.etag[f])), (y.data && y.hasContent && !1 !== y.contentType || t.contentType) && T.setRequestHeader("Content-Type", y.contentType), T.setRequestHeader("Accept", y.dataTypes[0] && y.accepts[y.dataTypes[0]] ? y.accepts[y.dataTypes[0]] + ("*" !== y.dataTypes[0] ? ", " + $t + "; q=0.01" : "") : y.accepts["*"]);
            for (i in y.headers) T.setRequestHeader(i, y.headers[i]);
            if (y.beforeSend && (!1 === y.beforeSend.call(v, T, y) || h)) return T.abort();
            if (u = "abort", b.add(y.complete), T.done(y.success), T.fail(y.error), c = _t(Wt, y, t, T)) {
                if (T.readyState = 1, g && m.trigger("ajaxSend", [T, y]), h) return T;
                y.async && y.timeout > 0 && (d = C.setTimeout(function () {
                    T.abort("timeout")
                }, y.timeout));
                try {
                    h = !1, c.send(a, l)
                } catch (e) {
                    if (h) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = e > 0 ? 4 : 0, i = e >= 200 && e < 300 || 304 === e, n && (s = Xt(y, T, n)), s = Ut(y, s, T, i), i ? (y.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (k.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (k.etag[f] = u)), 204 === e || "HEAD" === y.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(v, [o, l, T]) : x.rejectWith(v, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, y, i ? o : a]), b.fireWith(v, [T, l]), g && (m.trigger("ajaxComplete", [T, y]), --k.active || k.event.trigger("ajaxStop")))
            }

            return T
        },
        getJSON: function (e, t, n) {
            return k.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return k.get(e, void 0, t, "script")
        }
    }), k.each(["get", "post"], function (e, i) {
        k[i] = function (e, t, n, r) {
            return m(t) && (r = r || n, n = t, t = void 0), k.ajax(k.extend({url: e, type: i, dataType: r, data: t, success: n}, k.isPlainObject(e) && e))
        }
    }), k._evalUrl = function (e) {
        return k.ajax({url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0})
    }, k.fn.extend({
        wrapAll: function (e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])), t = k(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e
            }).append(this)), this
        }, wrapInner: function (n) {
            return m(n) ? this.each(function (e) {
                k(this).wrapInner(n.call(this, e))
            }) : this.each(function () {
                var e = k(this), t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        }, wrap: function (t) {
            var n = m(t);
            return this.each(function (e) {
                k(this).wrapAll(n ? t.call(this, e) : t)
            })
        }, unwrap: function (e) {
            return this.parent(e).not("body").each(function () {
                k(this).replaceWith(this.childNodes)
            }), this
        }
    }), k.expr.pseudos.hidden = function (e) {
        return !k.expr.pseudos.visible(e)
    }, k.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, k.ajaxSettings.xhr = function () {
        try {
            return new C.XMLHttpRequest
        } catch (e) {
        }
    };
    var Vt = {0: 200, 1223: 204}, Gt = k.ajaxSettings.xhr();
    v.cors = !!Gt && "withCredentials" in Gt, v.ajax = Gt = !!Gt, k.ajaxTransport(function (i) {
        var o, a;
        if (v.cors || Gt && !i.crossDomain) return {
            send: function (e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) r[n] = i.xhrFields[n];
                i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (n in e) r.setRequestHeader(n, e[n]);
                o = function (e) {
                    return function () {
                        o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Vt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {binary: r.response} : {text: r.responseText}, r.getAllResponseHeaders()))
                    }
                }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function () {
                    4 === r.readyState && C.setTimeout(function () {
                        o && a()
                    })
                }, o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null)
                } catch (e) {
                    if (o) throw e
                }
            }, abort: function () {
                o && o()
            }
        }
    }), k.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1)
    }), k.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /\b(?:java|ecma)script\b/},
        converters: {
            "text script": function (e) {
                return k.globalEval(e), e
            }
        }
    }), k.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), k.ajaxTransport("script", function (n) {
        if (n.crossDomain) {
            var r, i;
            return {
                send: function (e, t) {
                    r = k("<script>").prop({charset: n.scriptCharset, src: n.url}).on("load error", i = function (e) {
                        r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                    }), E.head.appendChild(r[0])
                }, abort: function () {
                    i && i()
                }
            }
        }
    });
    var Yt = [], Qt = /(=)\?(?=&|$)|\?\?/;
    k.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = Yt.pop() || k.expando + "_" + Et++;
            return this[e] = !0, e
        }
    }), k.ajaxPrefilter("json jsonp", function (e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Qt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Qt, "$1" + r) : !1 !== e.jsonp && (e.url += (kt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
            return o || k.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = C[r], C[r] = function () {
            o = arguments
        }, n.always(function () {
            void 0 === i ? k(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Yt.push(r)), o && m(i) && i(o[0]), o = i = void 0
        }), "script"
    }), v.createHTMLDocument = function () {
        var e = E.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), k.parseHTML = function (e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var r, i, o;
        return t || (v.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), i = A.exec(e), o = !n && [], i ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && k(o).remove(), k.merge([], i.childNodes))
    }, k.fn.load = function (e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return s > -1 && (r = vt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && k.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function (e) {
            o = arguments, a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e)
        }).always(n && function (e, t) {
            a.each(function () {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        k.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), k.expr.pseudos.animated = function (t) {
        return k.grep(k.timers, function (e) {
            return t === e.elem
        }).length
    }, k.offset = {
        setOffset: function (e, t, n) {
            var r, i, o, a, s, u, l, c = k.css(e, "position"), f = k(e), p = {};
            "static" === c && (e.style.position = "relative"), s = f.offset(), o = k.css(e, "top"), u = k.css(e, "left"), (l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1) ? (a = (r = f.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, k.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
        }
    }, k.fn.extend({
        offset: function (t) {
            if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                k.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0];
            if (r) return r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {top: e.top + n.pageYOffset, left: e.left + n.pageXOffset}) : {top: 0, left: 0}
        }, position: function () {
            if (this[0]) {
                var e, t, n, r = this[0], i = {top: 0, left: 0};
                if ("fixed" === k.css(r, "position")) t = r.getBoundingClientRect(); else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === k.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = k(e).offset()).top += k.css(e, "borderTopWidth", !0), i.left += k.css(e, "borderLeftWidth", !0))
                }
                return {top: t.top - i.top - k.css(r, "marginTop", !0), left: t.left - i.left - k.css(r, "marginLeft", !0)}
            }
        }, offsetParent: function () {
            return this.map(function () {
                var e = this.offsetParent;
                while (e && "static" === k.css(e, "position")) e = e.offsetParent;
                return e || be
            })
        }
    }), k.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, i) {
        var o = "pageYOffset" === i;
        k.fn[t] = function (e) {
            return z(this, function (e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), k.each(["top", "left"], function (e, n) {
        k.cssHooks[n] = _e(v.pixelPosition, function (e, t) {
            if (t) return t = Fe(e, n), We.test(t) ? k(e).position()[n] + "px" : t
        })
    }), k.each({Height: "height", Width: "width"}, function (a, s) {
        k.each({padding: "inner" + a, content: s, "": "outer" + a}, function (r, o) {
            k.fn[o] = function (e, t) {
                var n = arguments.length && (r || "boolean" != typeof e), i = r || (!0 === e || !0 === t ? "margin" : "border");
                return z(this, function (e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? k.css(e, t, i) : k.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
        k.fn[n] = function (e, t) {
            return arguments.length > 0 ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), k.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), k.fn.extend({
        bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), k.proxy = function (e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), i = function () {
            return e.apply(t || this, r.concat(s.call(arguments)))
        }, i.guid = e.guid = e.guid || k.guid++, i
    }, k.holdReady = function (e) {
        e ? k.readyWait++ : k.ready(!0)
    }, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = N, k.isFunction = m, k.isWindow = x, k.camelCase = G, k.type = w, k.now = Date.now, k.isNumeric = function (e) {
        var t = k.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function () {
        return k
    });
    var Jt = C.jQuery, Kt = C.$;
    return k.noConflict = function (e) {
        return C.$ === k && (C.$ = Kt), e && C.jQuery === k && (C.jQuery = Jt), k
    }, e || (C.jQuery = C.$ = k), k
});
/* Ammina JS file original /bitrix/templates/avtoshkola/js/jquery-ui.min.js */
(function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
})(function (I) {
    function h(t) {
        for (var e = t.css("visibility"); "inherit" === e;) t = t.parent(), e = t.css("visibility");
        return "hidden" !== e
    }

    function l(t) {
        for (var e, i; t.length && t[0] !== document;) {
            if (e = t.css("position"), ("absolute" === e || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
            t = t.parent()
        }
        return 0
    }

    function t() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, I.extend(this._defaults, this.regional[""]), this.regional.en = I.extend(!0, {}, this.regional[""]), this.regional["en-US"] = I.extend(!0, {}, this.regional.en), this.dpDiv = s(I("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    function s(t) {
        var e = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return t.on("mouseout", e, function () {
            I(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && I(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && I(this).removeClass("ui-datepicker-next-hover")
        }).on("mouseover", e, a)
    }

    function a() {
        I.datepicker._isDisabledDatepicker(d.inline ? d.dpDiv.parent()[0] : d.input[0]) || (I(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), I(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && I(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && I(this).addClass("ui-datepicker-next-hover"))
    }

    function u(t, e) {
        I.extend(t, e);
        for (var i in e) null == e[i] && (t[i] = e[i]);
        return t
    }

    function e(e) {
        return function () {
            var t = this.element.val();
            e.apply(this, arguments), this._refresh(), t !== this.element.val() && this._trigger("change")
        }
    }

    I.ui = I.ui || {}, I.ui.version = "1.12.1";
    var i = 0, r = Array.prototype.slice;
    I.cleanData = function (n) {
        return function (t) {
            var e, i, s;
            for (s = 0; null != (i = t[s]); s++) try {
                e = I._data(i, "events"), e && e.remove && I(i).triggerHandler("remove")
            } catch (t) {
            }
            n(t)
        }
    }(I.cleanData), I.widget = function (t, i, e) {
        var s, n, o, a = {}, r = t.split(".")[0];
        t = t.split(".")[1];
        var h = r + "-" + t;
        return e || (e = i, i = I.Widget), I.isArray(e) && (e = I.extend.apply(null, [{}].concat(e))), I.expr[":"][h.toLowerCase()] = function (t) {
            return !!I.data(t, h)
        }, I[r] = I[r] || {}, s = I[r][t], n = I[r][t] = function (t, e) {
            return this._createWidget ? (arguments.length && this._createWidget(t, e), void 0) : new n(t, e)
        }, I.extend(n, s, {version: e.version, _proto: I.extend({}, e), _childConstructors: []}), o = new i, o.options = I.widget.extend({}, o.options), I.each(e, function (e, o) {
            return I.isFunction(o) ? (a[e] = function () {
                function s() {
                    return i.prototype[e].apply(this, arguments)
                }

                function n(t) {
                    return i.prototype[e].apply(this, t)
                }

                return function () {
                    var t, e = this._super, i = this._superApply;
                    return this._super = s, this._superApply = n, t = o.apply(this, arguments), this._super = e, this._superApply = i, t
                }
            }(), void 0) : (a[e] = o, void 0)
        }), n.prototype = I.widget.extend(o, {widgetEventPrefix: s ? o.widgetEventPrefix || t : t}, a, {
            constructor: n,
            namespace: r,
            widgetName: t,
            widgetFullName: h
        }), s ? (I.each(s._childConstructors, function (t, e) {
            var i = e.prototype;
            I.widget(i.namespace + "." + i.widgetName, n, e._proto)
        }), delete s._childConstructors) : i._childConstructors.push(n), I.widget.bridge(t, n), n
    }, I.widget.extend = function (t) {
        for (var e, i, s = r.call(arguments, 1), n = 0, o = s.length; o > n; n++) for (e in s[n]) i = s[n][e], s[n].hasOwnProperty(e) && void 0 !== i && (t[e] = I.isPlainObject(i) ? I.isPlainObject(t[e]) ? I.widget.extend({}, t[e], i) : I.widget.extend({}, i) : i);
        return t
    }, I.widget.bridge = function (o, e) {
        var a = e.prototype.widgetFullName || o;
        I.fn[o] = function (i) {
            var t = "string" == typeof i, s = r.call(arguments, 1), n = this;
            return t ? this.length || "instance" !== i ? this.each(function () {
                var t, e = I.data(this, a);
                return "instance" === i ? (n = e, !1) : e ? I.isFunction(e[i]) && "_" !== i.charAt(0) ? (t = e[i].apply(e, s), t !== e && void 0 !== t ? (n = t && t.jquery ? n.pushStack(t.get()) : t, !1) : void 0) : I.error("no such method '" + i + "' for " + o + " widget instance") : I.error("cannot call methods on " + o + " prior to initialization; " + "attempted to call method '" + i + "'")
            }) : n = void 0 : (s.length && (i = I.widget.extend.apply(null, [i].concat(s))), this.each(function () {
                var t = I.data(this, a);
                t ? (t.option(i || {}), t._init && t._init()) : I.data(this, a, new e(i, this))
            })), n
        }
    }, I.Widget = function () {
    }, I.Widget._childConstructors = [], I.Widget.prototype = {
        widgetName: "widget", widgetEventPrefix: "", defaultElement: "<div>", options: {classes: {}, disabled: !1, create: null}, _createWidget: function (t, e) {
            e = I(e || this.defaultElement || this)[0], this.element = I(e), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = I(), this.hoverable = I(), this.focusable = I(), this.classesElementLookup = {}, e !== this && (I.data(e, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function (t) {
                    t.target === e && this.destroy()
                }
            }), this.document = I(e.style ? e.ownerDocument : e.document || e), this.window = I(this.document[0].defaultView || this.document[0].parentWindow)), this.options = I.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
        }, _getCreateOptions: function () {
            return {}
        }, _getCreateEventData: I.noop, _create: I.noop, _init: I.noop, destroy: function () {
            var i = this;
            this._destroy(), I.each(this.classesElementLookup, function (t, e) {
                i._removeClass(e, t)
            }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
        }, _destroy: I.noop, widget: function () {
            return this.element
        }, option: function (t, e) {
            var i, s, n, o = t;
            if (0 === arguments.length) return I.widget.extend({}, this.options);
            if ("string" == typeof t) if (o = {}, i = t.split("."), t = i.shift(), i.length) {
                for (s = o[t] = I.widget.extend({}, this.options[t]), n = 0; i.length - 1 > n; n++) s[i[n]] = s[i[n]] || {}, s = s[i[n]];
                if (t = i.pop(), 1 === arguments.length) return void 0 === s[t] ? null : s[t];
                s[t] = e
            } else {
                if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                o[t] = e
            }
            return this._setOptions(o), this
        }, _setOptions: function (t) {
            var e;
            for (e in t) this._setOption(e, t[e]);
            return this
        }, _setOption: function (t, e) {
            return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this
        }, _setOptionClasses: function (t) {
            var e, i, s;
            for (e in t) s = this.classesElementLookup[e], t[e] !== this.options.classes[e] && s && s.length && (i = I(s.get()), this._removeClass(s, e), i.addClass(this._classes({
                element: i,
                keys: e,
                classes: t,
                add: !0
            })))
        }, _setOptionDisabled: function (t) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
        }, enable: function () {
            return this._setOptions({disabled: !1})
        }, disable: function () {
            return this._setOptions({disabled: !0})
        }, _classes: function (n) {
            function t(t, e) {
                var i, s;
                for (s = 0; t.length > s; s++) i = a.classesElementLookup[t[s]] || I(), i = n.add ? I(I.unique(i.get().concat(n.element.get()))) : I(i.not(n.element).get()), a.classesElementLookup[t[s]] = i, o.push(t[s]), e && n.classes[t[s]] && o.push(n.classes[t[s]])
            }

            var o = [], a = this;
            return n = I.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, n), this._on(n.element, {remove: "_untrackClassesElement"}), n.keys && t(n.keys.match(/\S+/g) || [], !0), n.extra && t(n.extra.match(/\S+/g) || []), o.join(" ")
        }, _untrackClassesElement: function (i) {
            var s = this;
            I.each(s.classesElementLookup, function (t, e) {
                -1 !== I.inArray(i.target, e) && (s.classesElementLookup[t] = I(e.not(i.target).get()))
            })
        }, _removeClass: function (t, e, i) {
            return this._toggleClass(t, e, i, !1)
        }, _addClass: function (t, e, i) {
            return this._toggleClass(t, e, i, !0)
        }, _toggleClass: function (t, e, i, s) {
            s = "boolean" == typeof s ? s : i;
            var n = "string" == typeof t || null === t, o = {extra: n ? e : i, keys: n ? t : e, element: n ? this.element : t, add: s};
            return o.element.toggleClass(this._classes(o), s), this
        }, _on: function (a, r, t) {
            var h, l = this;
            "boolean" != typeof a && (t = r, r = a, a = !1), t ? (r = h = I(r), this.bindings = this.bindings.add(r)) : (t = r, r = this.element, h = this.widget()), I.each(t, function (t, e) {
                function i() {
                    return a || l.options.disabled !== !0 && !I(this).hasClass("ui-state-disabled") ? ("string" == typeof e ? l[e] : e).apply(l, arguments) : void 0
                }

                "string" != typeof e && (i.guid = e.guid = e.guid || i.guid || I.guid++);
                var s = t.match(/^([\w:-]*)\s*(.*)$/), n = s[1] + l.eventNamespace, o = s[2];
                o ? h.on(n, o, i) : r.on(n, i)
            })
        }, _off: function (t, e) {
            e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.off(e).off(e), this.bindings = I(this.bindings.not(t).get()), this.focusable = I(this.focusable.not(t).get()), this.hoverable = I(this.hoverable.not(t).get())
        }, _delay: function (t, e) {
            function i() {
                return ("string" == typeof t ? s[t] : t).apply(s, arguments)
            }

            var s = this;
            return setTimeout(i, e || 0)
        }, _hoverable: function (t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function (t) {
                    this._addClass(I(t.currentTarget), null, "ui-state-hover")
                }, mouseleave: function (t) {
                    this._removeClass(I(t.currentTarget), null, "ui-state-hover")
                }
            })
        }, _focusable: function (t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function (t) {
                    this._addClass(I(t.currentTarget), null, "ui-state-focus")
                }, focusout: function (t) {
                    this._removeClass(I(t.currentTarget), null, "ui-state-focus")
                }
            })
        }, _trigger: function (t, e, i) {
            var s, n, o = this.options[t];
            if (i = i || {}, e = I.Event(e), e.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), e.target = this.element[0], n = e.originalEvent) for (s in n) s in e || (e[s] = n[s]);
            return this.element.trigger(e, i), !(I.isFunction(o) && o.apply(this.element[0], [e].concat(i)) === !1 || e.isDefaultPrevented())
        }
    }, I.each({show: "fadeIn", hide: "fadeOut"}, function (o, a) {
        I.Widget.prototype["_" + o] = function (e, t, i) {
            "string" == typeof t && (t = {effect: t});
            var s, n = t ? t === !0 || "number" == typeof t ? a : t.effect || a : o;
            t = t || {}, "number" == typeof t && (t = {duration: t}), s = !I.isEmptyObject(t), t.complete = i, t.delay && e.delay(t.delay), s && I.effects && I.effects.effect[n] ? e[o](t) : n !== o && e[n] ? e[n](t.duration, t.easing, i) : e.queue(function (t) {
                I(this)[o](), i && i.call(e[0]), t()
            })
        }
    }), I.widget, function () {
        function k(t, e, i) {
            return [parseFloat(t[0]) * (h.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (h.test(t[1]) ? i / 100 : 1)]
        }

        function x(t, e) {
            return parseInt(I.css(t, e), 10) || 0
        }

        function e(t) {
            var e = t[0];
            return 9 === e.nodeType ? {width: t.width(), height: t.height(), offset: {top: 0, left: 0}} : I.isWindow(e) ? {
                width: t.width(),
                height: t.height(),
                offset: {top: t.scrollTop(), left: t.scrollLeft()}
            } : e.preventDefault ? {width: 0, height: 0, offset: {top: e.pageY, left: e.pageX}} : {width: t.outerWidth(), height: t.outerHeight(), offset: t.offset()}
        }

        var n, C = Math.max, D = Math.abs, s = /left|center|right/, o = /top|center|bottom/, a = /[\+\-]\d+(\.[\d]+)?%?/, r = /^\w+/, h = /%$/, i = I.fn.position;
        I.position = {
            scrollbarWidth: function () {
                if (void 0 !== n) return n;
                var t, e, i = I("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), s = i.children()[0];
                return I("body").append(i), t = s.offsetWidth, i.css("overflow", "scroll"), e = s.offsetWidth, t === e && (e = i[0].clientWidth), i.remove(), n = t - e
            }, getScrollInfo: function (t) {
                var e = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"), i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                    s = "scroll" === e || "auto" === e && t.width < t.element[0].scrollWidth, n = "scroll" === i || "auto" === i && t.height < t.element[0].scrollHeight;
                return {width: n ? I.position.scrollbarWidth() : 0, height: s ? I.position.scrollbarWidth() : 0}
            }, getWithinInfo: function (t) {
                var e = I(t || window), i = I.isWindow(e[0]), s = !!e[0] && 9 === e[0].nodeType, n = !i && !s;
                return {element: e, isWindow: i, isDocument: s, offset: n ? I(t).offset() : {left: 0, top: 0}, scrollLeft: e.scrollLeft(), scrollTop: e.scrollTop(), width: e.outerWidth(), height: e.outerHeight()}
            }
        }, I.fn.position = function (u) {
            if (!u || !u.of) return i.apply(this, arguments);
            u = I.extend({}, u);
            var d, p, f, g, m, t, _ = I(u.of), v = I.position.getWithinInfo(u.within), b = I.position.getScrollInfo(v), y = (u.collision || "flip").split(" "), w = {};
            return t = e(_), _[0].preventDefault && (u.at = "left top"), p = t.width, f = t.height, g = t.offset, m = I.extend({}, g), I.each(["my", "at"], function () {
                var t, e, i = (u[this] || "").split(" ");
                1 === i.length && (i = s.test(i[0]) ? i.concat(["center"]) : o.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = s.test(i[0]) ? i[0] : "center", i[1] = o.test(i[1]) ? i[1] : "center", t = a.exec(i[0]), e = a.exec(i[1]), w[this] = [t ? t[0] : 0, e ? e[0] : 0], u[this] = [r.exec(i[0])[0], r.exec(i[1])[0]]
            }), 1 === y.length && (y[1] = y[0]), "right" === u.at[0] ? m.left += p : "center" === u.at[0] && (m.left += p / 2), "bottom" === u.at[1] ? m.top += f : "center" === u.at[1] && (m.top += f / 2), d = k(w.at, p, f), m.left += d[0], m.top += d[1], this.each(function () {
                var i, t, a = I(this), r = a.outerWidth(), h = a.outerHeight(), e = x(this, "marginLeft"), s = x(this, "marginTop"), n = r + e + x(this, "marginRight") + b.width,
                    o = h + s + x(this, "marginBottom") + b.height, l = I.extend({}, m), c = k(w.my, a.outerWidth(), a.outerHeight());
                "right" === u.my[0] ? l.left -= r : "center" === u.my[0] && (l.left -= r / 2), "bottom" === u.my[1] ? l.top -= h : "center" === u.my[1] && (l.top -= h / 2), l.left += c[0], l.top += c[1], i = {
                    marginLeft: e,
                    marginTop: s
                }, I.each(["left", "top"], function (t, e) {
                    I.ui.position[y[t]] && I.ui.position[y[t]][e](l, {
                        targetWidth: p,
                        targetHeight: f,
                        elemWidth: r,
                        elemHeight: h,
                        collisionPosition: i,
                        collisionWidth: n,
                        collisionHeight: o,
                        offset: [d[0] + c[0], d[1] + c[1]],
                        my: u.my,
                        at: u.at,
                        within: v,
                        elem: a
                    })
                }), u.using && (t = function (t) {
                    var e = g.left - l.left, i = e + p - r, s = g.top - l.top, n = s + f - h, o = {
                        target: {element: _, left: g.left, top: g.top, width: p, height: f},
                        element: {element: a, left: l.left, top: l.top, width: r, height: h},
                        horizontal: 0 > i ? "left" : e > 0 ? "right" : "center",
                        vertical: 0 > n ? "top" : s > 0 ? "bottom" : "middle"
                    };
                    r > p && p > D(e + i) && (o.horizontal = "center"), h > f && f > D(s + n) && (o.vertical = "middle"), o.important = C(D(e), D(i)) > C(D(s), D(n)) ? "horizontal" : "vertical", u.using.call(this, t, o)
                }), a.offset(I.extend(l, {using: t}))
            })
        }, I.ui.position = {
            fit: {
                left: function (t, e) {
                    var i, s = e.within, n = s.isWindow ? s.scrollLeft : s.offset.left, o = s.width, a = t.left - e.collisionPosition.marginLeft, r = n - a, h = a + e.collisionWidth - o - n;
                    e.collisionWidth > o ? r > 0 && 0 >= h ? (i = t.left + r + e.collisionWidth - o - n, t.left += r - i) : t.left = h > 0 && 0 >= r ? n : r > h ? n + o - e.collisionWidth : n : r > 0 ? t.left += r : h > 0 ? t.left -= h : t.left = C(t.left - a, t.left)
                }, top: function (t, e) {
                    var i, s = e.within, n = s.isWindow ? s.scrollTop : s.offset.top, o = e.within.height, a = t.top - e.collisionPosition.marginTop, r = n - a, h = a + e.collisionHeight - o - n;
                    e.collisionHeight > o ? r > 0 && 0 >= h ? (i = t.top + r + e.collisionHeight - o - n, t.top += r - i) : t.top = h > 0 && 0 >= r ? n : r > h ? n + o - e.collisionHeight : n : r > 0 ? t.top += r : h > 0 ? t.top -= h : t.top = C(t.top - a, t.top)
                }
            }, flip: {
                left: function (t, e) {
                    var i, s, n = e.within, o = n.offset.left + n.scrollLeft, a = n.width, r = n.isWindow ? n.scrollLeft : n.offset.left, h = t.left - e.collisionPosition.marginLeft, l = h - r,
                        c = h + e.collisionWidth - a - r, u = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0, d = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                        p = -2 * e.offset[0];
                    0 > l ? (i = t.left + u + d + p + e.collisionWidth - a - o, (0 > i || D(l) > i) && (t.left += u + d + p)) : c > 0 && (s = t.left - e.collisionPosition.marginLeft + u + d + p - r, (s > 0 || c > D(s)) && (t.left += u + d + p))
                }, top: function (t, e) {
                    var i, s, n = e.within, o = n.offset.top + n.scrollTop, a = n.height, r = n.isWindow ? n.scrollTop : n.offset.top, h = t.top - e.collisionPosition.marginTop, l = h - r,
                        c = h + e.collisionHeight - a - r, u = "top" === e.my[1], d = u ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                        p = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0, f = -2 * e.offset[1];
                    0 > l ? (s = t.top + d + p + f + e.collisionHeight - a - o, (0 > s || D(l) > s) && (t.top += d + p + f)) : c > 0 && (i = t.top - e.collisionPosition.marginTop + d + p + f - r, (i > 0 || c > D(i)) && (t.top += d + p + f))
                }
            }, flipfit: {
                left: function () {
                    I.ui.position.flip.left.apply(this, arguments), I.ui.position.fit.left.apply(this, arguments)
                }, top: function () {
                    I.ui.position.flip.top.apply(this, arguments), I.ui.position.fit.top.apply(this, arguments)
                }
            }
        }
    }(), I.ui.position, I.extend(I.expr[":"], {
        data: I.expr.createPseudo ? I.expr.createPseudo(function (e) {
            return function (t) {
                return !!I.data(t, e)
            }
        }) : function (t, e, i) {
            return !!I.data(t, i[3])
        }
    }), I.fn.extend({
        disableSelection: function () {
            var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function () {
                return this.on(t + ".ui-disableSelection", function (t) {
                    t.preventDefault()
                })
            }
        }(), enableSelection: function () {
            return this.off(".ui-disableSelection")
        }
    }), I.ui.focusable = function (t, e) {
        var i, s, n, o, a, r = t.nodeName.toLowerCase();
        return "area" === r ? (i = t.parentNode, s = i.name, t.href && s && "map" === i.nodeName.toLowerCase() ? (n = I("img[usemap='#" + s + "']"), n.length > 0 && n.is(":visible")) : !1) : (/^(input|select|textarea|button|object)$/.test(r) ? (o = !t.disabled, o && (a = I(t).closest("fieldset")[0], a && (o = !a.disabled))) : o = "a" === r ? t.href || e : e, o && I(t).is(":visible") && h(I(t)))
    }, I.extend(I.expr[":"], {
        focusable: function (t) {
            return I.ui.focusable(t, null != I.attr(t, "tabindex"))
        }
    }), I.ui.focusable, I.fn.form = function () {
        return "string" == typeof this[0].form ? this.closest("form") : I(this[0].form)
    }, I.ui.formResetMixin = {
        _formResetHandler: function () {
            var e = I(this);
            setTimeout(function () {
                var t = e.data("ui-form-reset-instances");
                I.each(t, function () {
                    this.refresh()
                })
            })
        }, _bindFormResetHandler: function () {
            if (this.form = this.element.form(), this.form.length) {
                var t = this.form.data("ui-form-reset-instances") || [];
                t.length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), this.form.data("ui-form-reset-instances", t)
            }
        }, _unbindFormResetHandler: function () {
            if (this.form.length) {
                var t = this.form.data("ui-form-reset-instances");
                t.splice(I.inArray(this, t), 1), t.length ? this.form.data("ui-form-reset-instances", t) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
            }
        }
    }, "1.7" === I.fn.jquery.substring(0, 3) && (I.each(["Width", "Height"], function (t, i) {
        function s(t, e, i, s) {
            return I.each(n, function () {
                e -= parseFloat(I.css(t, "padding" + this)) || 0, i && (e -= parseFloat(I.css(t, "border" + this + "Width")) || 0), s && (e -= parseFloat(I.css(t, "margin" + this)) || 0)
            }), e
        }

        var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"], o = i.toLowerCase(), a = {innerWidth: I.fn.innerWidth, innerHeight: I.fn.innerHeight, outerWidth: I.fn.outerWidth, outerHeight: I.fn.outerHeight};
        I.fn["inner" + i] = function (t) {
            return void 0 === t ? a["inner" + i].call(this) : this.each(function () {
                I(this).css(o, s(this, t) + "px")
            })
        }, I.fn["outer" + i] = function (t, e) {
            return "number" != typeof t ? a["outer" + i].call(this, t) : this.each(function () {
                I(this).css(o, s(this, t, !0, e) + "px")
            })
        }
    }), I.fn.addBack = function (t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
    }), I.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    }, I.ui.escapeSelector = function () {
        var e = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;
        return function (t) {
            return t.replace(e, "\\$1")
        }
    }(), I.fn.labels = function () {
        var t, e, i, s, n;
        return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (s = this.eq(0).parents("label"), i = this.attr("id"), i && (t = this.eq(0).parents().last(), n = t.add(t.length ? t.siblings() : this.siblings()), e = "label[for='" + I.ui.escapeSelector(i) + "']", s = s.add(n.find(e).addBack(e))), this.pushStack(s))
    }, I.fn.scrollParent = function (t) {
        var e = this.css("position"), i = "absolute" === e, s = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/, n = this.parents().filter(function () {
            var t = I(this);
            return i && "static" === t.css("position") ? !1 : s.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
        }).eq(0);
        return "fixed" !== e && n.length ? n : I(this[0].ownerDocument || document)
    }, I.extend(I.expr[":"], {
        tabbable: function (t) {
            var e = I.attr(t, "tabindex"), i = null != e;
            return (!i || e >= 0) && I.ui.focusable(t, i)
        }
    }), I.fn.extend({
        uniqueId: function () {
            var t = 0;
            return function () {
                return this.each(function () {
                    this.id || (this.id = "ui-id-" + ++t)
                })
            }
        }(), removeUniqueId: function () {
            return this.each(function () {
                /^ui-id-\d+$/.test(this.id) && I(this).removeAttr("id")
            })
        }
    }), I.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    var n = !1;
    I(document).on("mouseup", function () {
        n = !1
    }), I.widget("ui.mouse", {
        version: "1.12.1", options: {cancel: "input, textarea, button, select, option", distance: 1, delay: 0}, _mouseInit: function () {
            var e = this;
            this.element.on("mousedown." + this.widgetName, function (t) {
                return e._mouseDown(t)
            }).on("click." + this.widgetName, function (t) {
                return !0 === I.data(t.target, e.widgetName + ".preventClickEvent") ? (I.removeData(t.target, e.widgetName + ".preventClickEvent"), t.stopImmediatePropagation(), !1) : void 0
            }), this.started = !1
        }, _mouseDestroy: function () {
            this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
        }, _mouseDown: function (t) {
            if (!n) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
                var e = this, i = 1 === t.which, s = "string" == typeof this.options.cancel && t.target.nodeName ? I(t.target).closest(this.options.cancel).length : !1;
                return i && !s && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                    e.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === I.data(t.target, this.widgetName + ".preventClickEvent") && I.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (t) {
                    return e._mouseMove(t)
                }, this._mouseUpDelegate = function (t) {
                    return e._mouseUp(t)
                }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), n = !0, !0)) : !0
            }
        }, _mouseMove: function (t) {
            if (this._mouseMoved) {
                if (I.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button) return this._mouseUp(t);
                if (!t.which) if (t.originalEvent.altKey || t.originalEvent.ctrlKey || t.originalEvent.metaKey || t.originalEvent.shiftKey) this.ignoreMissingWhich = !0; else if (!this.ignoreMissingWhich) return this._mouseUp(t)
            }
            return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
        }, _mouseUp: function (t) {
            this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && I.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, n = !1, t.preventDefault()
        }, _mouseDistanceMet: function (t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
        }, _mouseDelayMet: function () {
            return this.mouseDelayMet
        }, _mouseStart: function () {
        }, _mouseDrag: function () {
        }, _mouseStop: function () {
        }, _mouseCapture: function () {
            return !0
        }
    }), I.ui.plugin = {
        add: function (t, e, i) {
            var s, n = I.ui[t].prototype;
            for (s in i) n.plugins[s] = n.plugins[s] || [], n.plugins[s].push([e, i[s]])
        }, call: function (t, e, i, s) {
            var n, o = t.plugins[e];
            if (o && (s || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)) for (n = 0; o.length > n; n++) t.options[o[n][0]] && o[n][1].apply(t.element, i)
        }
    }, I.ui.safeActiveElement = function (e) {
        var i;
        try {
            i = e.activeElement
        } catch (t) {
            i = e.body
        }
        return i || (i = e.body), i.nodeName || (i = e.body), i
    }, I.ui.safeBlur = function (t) {
        t && "body" !== t.nodeName.toLowerCase() && I(t).trigger("blur")
    }, I.widget("ui.draggable", I.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function () {
            "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), this._setHandleClassName(), this._mouseInit()
        },
        _setOption: function (t, e) {
            this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName())
        },
        _destroy: function () {
            return (this.helper || this.element).is(".ui-draggable-dragging") ? (this.destroyOnClear = !0, void 0) : (this._removeHandleClassName(), this._mouseDestroy(), void 0)
        },
        _mouseCapture: function (t) {
            var e = this.options;
            return this.helper || e.disabled || I(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (this._blurActiveElement(t), this._blockFrames(e.iframeFix === !0 ? "iframe" : e.iframeFix), !0) : !1)
        },
        _blockFrames: function (t) {
            this.iframeBlocks = this.document.find(t).map(function () {
                var t = I(this);
                return I("<div>").css("position", "absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]
            })
        },
        _unblockFrames: function () {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _blurActiveElement: function (t) {
            var e = I.ui.safeActiveElement(this.document[0]), i = I(t.target);
            i.closest(e).length || I.ui.safeBlur(e)
        },
        _mouseStart: function (t) {
            var e = this.options;
            return this.helper = this._createHelper(t), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), I.ui.ddmanager && (I.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function () {
                return "fixed" === I(this).css("position")
            }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(t), this.originalPosition = this.position = this._generatePosition(t, !1), this.originalPageX = t.pageX, this.originalPageY = t.pageY, e.cursorAt && this._adjustOffsetFromHelper(e.cursorAt), this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), I.ui.ddmanager && !e.dropBehaviour && I.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), I.ui.ddmanager && I.ui.ddmanager.dragStart(this, t), !0)
        },
        _refreshOffsets: function (t) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: !1,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }, this.offset.click = {left: t.pageX - this.offset.left, top: t.pageY - this.offset.top}
        },
        _mouseDrag: function (t, e) {
            if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t, !0), this.positionAbs = this._convertPositionTo("absolute"), !e) {
                var i = this._uiHash();
                if (this._trigger("drag", t, i) === !1) return this._mouseUp(new I.Event("mouseup", t)), !1;
                this.position = i.position
            }
            return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", I.ui.ddmanager && I.ui.ddmanager.drag(this, t), !1
        },
        _mouseStop: function (t) {
            var e = this, i = !1;
            return I.ui.ddmanager && !this.options.dropBehaviour && (i = I.ui.ddmanager.drop(this, t)), this.dropped && (i = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !i || "valid" === this.options.revert && i || this.options.revert === !0 || I.isFunction(this.options.revert) && this.options.revert.call(this.element, i) ? I(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                e._trigger("stop", t) !== !1 && e._clear()
            }) : this._trigger("stop", t) !== !1 && this._clear(), !1
        },
        _mouseUp: function (t) {
            return this._unblockFrames(), I.ui.ddmanager && I.ui.ddmanager.dragStop(this, t), this.handleElement.is(t.target) && this.element.trigger("focus"), I.ui.mouse.prototype._mouseUp.call(this, t)
        },
        cancel: function () {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new I.Event("mouseup", {target: this.element[0]})) : this._clear(), this
        },
        _getHandle: function (t) {
            return this.options.handle ? !!I(t.target).closest(this.element.find(this.options.handle)).length : !0
        },
        _setHandleClassName: function () {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this._addClass(this.handleElement, "ui-draggable-handle")
        },
        _removeHandleClassName: function () {
            this._removeClass(this.handleElement, "ui-draggable-handle")
        },
        _createHelper: function (t) {
            var e = this.options, i = I.isFunction(e.helper), s = i ? I(e.helper.apply(this.element[0], [t])) : "clone" === e.helper ? this.element.clone().removeAttr("id") : this.element;
            return s.parents("body").length || s.appendTo("parent" === e.appendTo ? this.element[0].parentNode : e.appendTo), i && s[0] === this.element[0] && this._setPositionRelative(), s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"), s
        },
        _setPositionRelative: function () {
            /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
        },
        _adjustOffsetFromHelper: function (t) {
            "string" == typeof t && (t = t.split(" ")), I.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _isRootNode: function (t) {
            return /(html|body)/i.test(t.tagName) || t === this.document[0]
        },
        _getParentOffset: function () {
            var t = this.offsetParent.offset(), e = this.document[0];
            return "absolute" === this.cssPosition && this.scrollParent[0] !== e && I.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (t = {
                top: 0,
                left: 0
            }), {top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)}
        },
        _getRelativeOffset: function () {
            if ("relative" !== this.cssPosition) return {top: 0, left: 0};
            var t = this.element.position(), e = this._isRootNode(this.scrollParent[0]);
            return {
                top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
                left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
            }
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
        },
        _setContainment: function () {
            var t, e, i, s = this.options, n = this.document[0];
            return this.relativeContainer = null, s.containment ? "window" === s.containment ? (this.containment = [I(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, I(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, I(window).scrollLeft() + I(window).width() - this.helperProportions.width - this.margins.left, I(window).scrollTop() + (I(window).height() || n.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : "document" === s.containment ? (this.containment = [0, 0, I(n).width() - this.helperProportions.width - this.margins.left, (I(n).height() || n.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], void 0) : s.containment.constructor === Array ? (this.containment = s.containment, void 0) : ("parent" === s.containment && (s.containment = this.helper[0].parentNode), e = I(s.containment), i = e[0], i && (t = /(scroll|auto)/.test(e.css("overflow")), this.containment = [(parseInt(e.css("borderLeftWidth"), 10) || 0) + (parseInt(e.css("paddingLeft"), 10) || 0), (parseInt(e.css("borderTopWidth"), 10) || 0) + (parseInt(e.css("paddingTop"), 10) || 0), (t ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(e.css("borderRightWidth"), 10) || 0) - (parseInt(e.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(e.css("borderBottomWidth"), 10) || 0) - (parseInt(e.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = e), void 0) : (this.containment = null, void 0)
        },
        _convertPositionTo: function (t, e) {
            e || (e = this.position);
            var i = "absolute" === t ? 1 : -1, s = this._isRootNode(this.scrollParent[0]);
            return {
                top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i,
                left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i
            }
        },
        _generatePosition: function (t, e) {
            var i, s, n, o, a = this.options, r = this._isRootNode(this.scrollParent[0]), h = t.pageX, l = t.pageY;
            return r && this.offset.scroll || (this.offset.scroll = {
                top: this.scrollParent.scrollTop(),
                left: this.scrollParent.scrollLeft()
            }), e && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)), a.grid && (n = a.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / a.grid[1]) * a.grid[1] : this.originalPageY, l = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - a.grid[1] : n + a.grid[1] : n, o = a.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / a.grid[0]) * a.grid[0] : this.originalPageX, h = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - a.grid[0] : o + a.grid[0] : o), "y" === a.axis && (h = this.originalPageX), "x" === a.axis && (l = this.originalPageY)), {
                top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top),
                left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left)
            }
        },
        _clear: function () {
            this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
        },
        _trigger: function (t, e, i) {
            return i = i || this._uiHash(), I.ui.plugin.call(this, t, [e, i, this], !0), /^(drag|start|stop)/.test(t) && (this.positionAbs = this._convertPositionTo("absolute"), i.offset = this.positionAbs), I.Widget.prototype._trigger.call(this, t, e, i)
        },
        plugins: {},
        _uiHash: function () {
            return {helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs}
        }
    }), I.ui.plugin.add("draggable", "connectToSortable", {
        start: function (e, t, i) {
            var s = I.extend({}, t, {item: i.element});
            i.sortables = [], I(i.options.connectToSortable).each(function () {
                var t = I(this).sortable("instance");
                t && !t.options.disabled && (i.sortables.push(t), t.refreshPositions(), t._trigger("activate", e, s))
            })
        }, stop: function (e, t, i) {
            var s = I.extend({}, t, {item: i.element});
            i.cancelHelperRemoval = !1, I.each(i.sortables, function () {
                var t = this;
                t.isOver ? (t.isOver = 0, i.cancelHelperRemoval = !0, t.cancelHelperRemoval = !1, t._storedCSS = {
                    position: t.placeholder.css("position"),
                    top: t.placeholder.css("top"),
                    left: t.placeholder.css("left")
                }, t._mouseStop(e), t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0, t._trigger("deactivate", e, s))
            })
        }, drag: function (i, s, n) {
            I.each(n.sortables, function () {
                var t = !1, e = this;
                e.positionAbs = n.positionAbs, e.helperProportions = n.helperProportions, e.offset.click = n.offset.click, e._intersectsWith(e.containerCache) && (t = !0, I.each(n.sortables, function () {
                    return this.positionAbs = n.positionAbs, this.helperProportions = n.helperProportions, this.offset.click = n.offset.click, this !== e && this._intersectsWith(this.containerCache) && I.contains(e.element[0], this.element[0]) && (t = !1), t
                })), t ? (e.isOver || (e.isOver = 1, n._parent = s.helper.parent(), e.currentItem = s.helper.appendTo(e.element).data("ui-sortable-item", !0), e.options._helper = e.options.helper, e.options.helper = function () {
                    return s.helper[0]
                }, i.target = e.currentItem[0], e._mouseCapture(i, !0), e._mouseStart(i, !0, !0), e.offset.click.top = n.offset.click.top, e.offset.click.left = n.offset.click.left, e.offset.parent.left -= n.offset.parent.left - e.offset.parent.left, e.offset.parent.top -= n.offset.parent.top - e.offset.parent.top, n._trigger("toSortable", i), n.dropped = e.element, I.each(n.sortables, function () {
                    this.refreshPositions()
                }), n.currentItem = n.element, e.fromOutside = n), e.currentItem && (e._mouseDrag(i), s.position = e.position)) : e.isOver && (e.isOver = 0, e.cancelHelperRemoval = !0, e.options._revert = e.options.revert, e.options.revert = !1, e._trigger("out", i, e._uiHash(e)), e._mouseStop(i, !0), e.options.revert = e.options._revert, e.options.helper = e.options._helper, e.placeholder && e.placeholder.remove(), s.helper.appendTo(n._parent), n._refreshOffsets(i), s.position = n._generatePosition(i, !0), n._trigger("fromSortable", i), n.dropped = !1, I.each(n.sortables, function () {
                    this.refreshPositions()
                }))
            })
        }
    }), I.ui.plugin.add("draggable", "cursor", {
        start: function (t, e, i) {
            var s = I("body"), n = i.options;
            s.css("cursor") && (n._cursor = s.css("cursor")), s.css("cursor", n.cursor)
        }, stop: function (t, e, i) {
            var s = i.options;
            s._cursor && I("body").css("cursor", s._cursor)
        }
    }), I.ui.plugin.add("draggable", "opacity", {
        start: function (t, e, i) {
            var s = I(e.helper), n = i.options;
            s.css("opacity") && (n._opacity = s.css("opacity")), s.css("opacity", n.opacity)
        }, stop: function (t, e, i) {
            var s = i.options;
            s._opacity && I(e.helper).css("opacity", s._opacity)
        }
    }), I.ui.plugin.add("draggable", "scroll", {
        start: function (t, e, i) {
            i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
        }, drag: function (t, e, i) {
            var s = i.options, n = !1, o = i.scrollParentNotHidden[0], a = i.document[0];
            o !== a && "HTML" !== o.tagName ? (s.axis && "x" === s.axis || (i.overflowOffset.top + o.offsetHeight - t.pageY < s.scrollSensitivity ? o.scrollTop = n = o.scrollTop + s.scrollSpeed : t.pageY - i.overflowOffset.top < s.scrollSensitivity && (o.scrollTop = n = o.scrollTop - s.scrollSpeed)), s.axis && "y" === s.axis || (i.overflowOffset.left + o.offsetWidth - t.pageX < s.scrollSensitivity ? o.scrollLeft = n = o.scrollLeft + s.scrollSpeed : t.pageX - i.overflowOffset.left < s.scrollSensitivity && (o.scrollLeft = n = o.scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (t.pageY - I(a).scrollTop() < s.scrollSensitivity ? n = I(a).scrollTop(I(a).scrollTop() - s.scrollSpeed) : I(window).height() - (t.pageY - I(a).scrollTop()) < s.scrollSensitivity && (n = I(a).scrollTop(I(a).scrollTop() + s.scrollSpeed))), s.axis && "y" === s.axis || (t.pageX - I(a).scrollLeft() < s.scrollSensitivity ? n = I(a).scrollLeft(I(a).scrollLeft() - s.scrollSpeed) : I(window).width() - (t.pageX - I(a).scrollLeft()) < s.scrollSensitivity && (n = I(a).scrollLeft(I(a).scrollLeft() + s.scrollSpeed)))), n !== !1 && I.ui.ddmanager && !s.dropBehaviour && I.ui.ddmanager.prepareOffsets(i, t)
        }
    }), I.ui.plugin.add("draggable", "snap", {
        start: function (t, e, i) {
            var s = i.options;
            i.snapElements = [], I(s.snap.constructor !== String ? s.snap.items || ":data(ui-draggable)" : s.snap).each(function () {
                var t = I(this), e = t.offset();
                this !== i.element[0] && i.snapElements.push({item: this, width: t.outerWidth(), height: t.outerHeight(), top: e.top, left: e.left})
            })
        }, drag: function (t, e, i) {
            var s, n, o, a, r, h, l, c, u, d, p = i.options, f = p.snapTolerance, g = e.offset.left, m = g + i.helperProportions.width, _ = e.offset.top, v = _ + i.helperProportions.height;
            for (u = i.snapElements.length - 1; u >= 0; u--) r = i.snapElements[u].left - i.margins.left, h = r + i.snapElements[u].width, l = i.snapElements[u].top - i.margins.top, c = l + i.snapElements[u].height, r - f > m || g > h + f || l - f > v || _ > c + f || !I.contains(i.snapElements[u].item.ownerDocument, i.snapElements[u].item) ? (i.snapElements[u].snapping && i.options.snap.release && i.options.snap.release.call(i.element, t, I.extend(i._uiHash(), {snapItem: i.snapElements[u].item})), i.snapElements[u].snapping = !1) : ("inner" !== p.snapMode && (s = f >= Math.abs(l - v), n = f >= Math.abs(c - _), o = f >= Math.abs(r - m), a = f >= Math.abs(h - g), s && (e.position.top = i._convertPositionTo("relative", {
                top: l - i.helperProportions.height,
                left: 0
            }).top), n && (e.position.top = i._convertPositionTo("relative", {top: c, left: 0}).top), o && (e.position.left = i._convertPositionTo("relative", {
                top: 0,
                left: r - i.helperProportions.width
            }).left), a && (e.position.left = i._convertPositionTo("relative", {
                top: 0,
                left: h
            }).left)), d = s || n || o || a, "outer" !== p.snapMode && (s = f >= Math.abs(l - _), n = f >= Math.abs(c - v), o = f >= Math.abs(r - g), a = f >= Math.abs(h - m), s && (e.position.top = i._convertPositionTo("relative", {
                top: l,
                left: 0
            }).top), n && (e.position.top = i._convertPositionTo("relative", {top: c - i.helperProportions.height, left: 0}).top), o && (e.position.left = i._convertPositionTo("relative", {
                top: 0,
                left: r
            }).left), a && (e.position.left = i._convertPositionTo("relative", {
                top: 0,
                left: h - i.helperProportions.width
            }).left)), !i.snapElements[u].snapping && (s || n || o || a || d) && i.options.snap.snap && i.options.snap.snap.call(i.element, t, I.extend(i._uiHash(), {snapItem: i.snapElements[u].item})), i.snapElements[u].snapping = s || n || o || a || d)
        }
    }), I.ui.plugin.add("draggable", "stack", {
        start: function (t, e, i) {
            var s, n = i.options, o = I.makeArray(I(n.stack)).sort(function (t, e) {
                return (parseInt(I(t).css("zIndex"), 10) || 0) - (parseInt(I(e).css("zIndex"), 10) || 0)
            });
            o.length && (s = parseInt(I(o[0]).css("zIndex"), 10) || 0, I(o).each(function (t) {
                I(this).css("zIndex", s + t)
            }), this.css("zIndex", s + o.length))
        }
    }), I.ui.plugin.add("draggable", "zIndex", {
        start: function (t, e, i) {
            var s = I(e.helper), n = i.options;
            s.css("zIndex") && (n._zIndex = s.css("zIndex")), s.css("zIndex", n.zIndex)
        }, stop: function (t, e, i) {
            var s = i.options;
            s._zIndex && I(e.helper).css("zIndex", s._zIndex)
        }
    }), I.ui.draggable, I.widget("ui.droppable", {
        version: "1.12.1",
        widgetEventPrefix: "drop",
        options: {accept: "*", addClasses: !0, greedy: !1, scope: "default", tolerance: "intersect", activate: null, deactivate: null, drop: null, out: null, over: null},
        _create: function () {
            var t, e = this.options, i = e.accept;
            this.isover = !1, this.isout = !0, this.accept = I.isFunction(i) ? i : function (t) {
                return t.is(i)
            }, this.proportions = function () {
                return arguments.length ? (t = arguments[0], void 0) : t ? t : t = {width: this.element[0].offsetWidth, height: this.element[0].offsetHeight}
            }, this._addToManager(e.scope), e.addClasses && this._addClass("ui-droppable")
        },
        _addToManager: function (t) {
            I.ui.ddmanager.droppables[t] = I.ui.ddmanager.droppables[t] || [], I.ui.ddmanager.droppables[t].push(this)
        },
        _splice: function (t) {
            for (var e = 0; t.length > e; e++) t[e] === this && t.splice(e, 1)
        },
        _destroy: function () {
            var t = I.ui.ddmanager.droppables[this.options.scope];
            this._splice(t)
        },
        _setOption: function (t, e) {
            if ("accept" === t) this.accept = I.isFunction(e) ? e : function (t) {
                return t.is(e)
            }; else if ("scope" === t) {
                var i = I.ui.ddmanager.droppables[this.options.scope];
                this._splice(i), this._addToManager(e)
            }
            this._super(t, e)
        },
        _activate: function (t) {
            var e = I.ui.ddmanager.current;
            this._addActiveClass(), e && this._trigger("activate", t, this.ui(e))
        },
        _deactivate: function (t) {
            var e = I.ui.ddmanager.current;
            this._removeActiveClass(), e && this._trigger("deactivate", t, this.ui(e))
        },
        _over: function (t) {
            var e = I.ui.ddmanager.current;
            e && (e.currentItem || e.element)[0] !== this.element[0] && this.accept.call(this.element[0], e.currentItem || e.element) && (this._addHoverClass(), this._trigger("over", t, this.ui(e)))
        },
        _out: function (t) {
            var e = I.ui.ddmanager.current;
            e && (e.currentItem || e.element)[0] !== this.element[0] && this.accept.call(this.element[0], e.currentItem || e.element) && (this._removeHoverClass(), this._trigger("out", t, this.ui(e)))
        },
        _drop: function (e, t) {
            var i = t || I.ui.ddmanager.current, s = !1;
            return i && (i.currentItem || i.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function () {
                var t = I(this).droppable("instance");
                return t.options.greedy && !t.options.disabled && t.options.scope === i.options.scope && t.accept.call(t.element[0], i.currentItem || i.element) && c(i, I.extend(t, {offset: t.element.offset()}), t.options.tolerance, e) ? (s = !0, !1) : void 0
            }), s ? !1 : this.accept.call(this.element[0], i.currentItem || i.element) ? (this._removeActiveClass(), this._removeHoverClass(), this._trigger("drop", e, this.ui(i)), this.element) : !1) : !1
        },
        ui: function (t) {
            return {draggable: t.currentItem || t.element, helper: t.helper, position: t.position, offset: t.positionAbs}
        },
        _addHoverClass: function () {
            this._addClass("ui-droppable-hover")
        },
        _removeHoverClass: function () {
            this._removeClass("ui-droppable-hover")
        },
        _addActiveClass: function () {
            this._addClass("ui-droppable-active")
        },
        _removeActiveClass: function () {
            this._removeClass("ui-droppable-active")
        }
    });
    var c = I.ui.intersect = function () {
        function d(t, e, i) {
            return t >= e && e + i > t
        }

        return function (t, e, i, s) {
            if (!e.offset) return !1;
            var n = (t.positionAbs || t.position.absolute).left + t.margins.left, o = (t.positionAbs || t.position.absolute).top + t.margins.top, a = n + t.helperProportions.width, r = o + t.helperProportions.height,
                h = e.offset.left, l = e.offset.top, c = h + e.proportions().width, u = l + e.proportions().height;
            switch (i) {
                case"fit":
                    return n >= h && c >= a && o >= l && u >= r;
                case"intersect":
                    return n + t.helperProportions.width / 2 > h && c > a - t.helperProportions.width / 2 && o + t.helperProportions.height / 2 > l && u > r - t.helperProportions.height / 2;
                case"pointer":
                    return d(s.pageY, l, e.proportions().height) && d(s.pageX, h, e.proportions().width);
                case"touch":
                    return (o >= l && u >= o || r >= l && u >= r || l > o && r > u) && (n >= h && c >= n || a >= h && c >= a || h > n && a > c);
                default:
                    return !1
            }
        }
    }();
    I.ui.ddmanager = {
        current: null, droppables: {default: []}, prepareOffsets: function (t, e) {
            var i, s, n = I.ui.ddmanager.droppables[t.options.scope] || [], o = e ? e.type : null, a = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
            t:for (i = 0; n.length > i; i++) if (!(n[i].options.disabled || t && !n[i].accept.call(n[i].element[0], t.currentItem || t.element))) {
                for (s = 0; a.length > s; s++) if (a[s] === n[i].element[0]) {
                    n[i].proportions().height = 0;
                    continue t
                }
                n[i].visible = "none" !== n[i].element.css("display"), n[i].visible && ("mousedown" === o && n[i]._activate.call(n[i], e), n[i].offset = n[i].element.offset(), n[i].proportions({
                    width: n[i].element[0].offsetWidth,
                    height: n[i].element[0].offsetHeight
                }))
            }
        }, drop: function (t, e) {
            var i = !1;
            return I.each((I.ui.ddmanager.droppables[t.options.scope] || []).slice(), function () {
                this.options && (!this.options.disabled && this.visible && c(t, this, this.options.tolerance, e) && (i = this._drop.call(this, e) || i), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, e)))
            }), i
        }, dragStart: function (t, e) {
            t.element.parentsUntil("body").on("scroll.droppable", function () {
                t.options.refreshPositions || I.ui.ddmanager.prepareOffsets(t, e)
            })
        }, drag: function (o, a) {
            o.options.refreshPositions && I.ui.ddmanager.prepareOffsets(o, a), I.each(I.ui.ddmanager.droppables[o.options.scope] || [], function () {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var t, e, i, s = c(o, this, this.options.tolerance, a), n = !s && this.isover ? "isout" : s && !this.isover ? "isover" : null;
                    n && (this.options.greedy && (e = this.options.scope, i = this.element.parents(":data(ui-droppable)").filter(function () {
                        return I(this).droppable("instance").options.scope === e
                    }), i.length && (t = I(i[0]).droppable("instance"), t.greedyChild = "isover" === n)), t && "isover" === n && (t.isover = !1, t.isout = !0, t._out.call(t, a)), this[n] = !0, this["isout" === n ? "isover" : "isout"] = !1, this["isover" === n ? "_over" : "_out"].call(this, a), t && "isout" === n && (t.isout = !1, t.isover = !0, t._over.call(t, a)))
                }
            })
        }, dragStop: function (t, e) {
            t.element.parentsUntil("body").off("scroll.droppable"), t.options.refreshPositions || I.ui.ddmanager.prepareOffsets(t, e)
        }
    }, I.uiBackCompat !== !1 && I.widget("ui.droppable", I.ui.droppable, {
        options: {hoverClass: !1, activeClass: !1}, _addActiveClass: function () {
            this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass)
        }, _removeActiveClass: function () {
            this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass)
        }, _addHoverClass: function () {
            this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass)
        }, _removeHoverClass: function () {
            this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass)
        }
    }), I.ui.droppable, I.widget("ui.resizable", I.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            classes: {"ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"},
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _num: function (t) {
            return parseFloat(t) || 0
        },
        _isNumber: function (t) {
            return !isNaN(parseFloat(t))
        },
        _hasScroll: function (t, e) {
            if ("hidden" === I(t).css("overflow")) return !1;
            var i = e && "left" === e ? "scrollLeft" : "scrollTop", s = !1;
            return t[i] > 0 ? !0 : (t[i] = 1, s = t[i] > 0, t[i] = 0, s)
        },
        _create: function () {
            var t, e = this.options, i = this;
            this._addClass("ui-resizable"), I.extend(this, {
                _aspectRatio: !!e.aspectRatio,
                aspectRatio: e.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: e.helper || e.ghost || e.animate ? e.helper || "ui-resizable-helper" : null
            }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(I("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, t = {
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom"),
                marginLeft: this.originalElement.css("marginLeft")
            }, this.element.css(t), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })), this.originalElement.css(t), this._proportionallyResize()), this._setupHandles(), e.autoHide && I(this.element).on("mouseenter", function () {
                e.disabled || (i._removeClass("ui-resizable-autohide"), i._handles.show())
            }).on("mouseleave", function () {
                e.disabled || i.resizing || (i._addClass("ui-resizable-autohide"), i._handles.hide())
            }), this._mouseInit()
        },
        _destroy: function () {
            this._mouseDestroy();
            var t, e = function (t) {
                I(t).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (e(this.element), t = this.element, this.originalElement.css({
                position: t.css("position"),
                width: t.outerWidth(),
                height: t.outerHeight(),
                top: t.css("top"),
                left: t.css("left")
            }).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), e(this.originalElement), this
        },
        _setOption: function (t, e) {
            switch (this._super(t, e), t) {
                case"handles":
                    this._removeHandles(), this._setupHandles();
                    break;
                default:
            }
        },
        _setupHandles: function () {
            var t, e, i, s, n, o = this.options, a = this;
            if (this.handles = o.handles || (I(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            } : "e,s,se"), this._handles = I(), this.handles.constructor === String) for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), i = this.handles.split(","), this.handles = {}, e = 0; i.length > e; e++) t = I.trim(i[e]), s = "ui-resizable-" + t, n = I("<div>"), this._addClass(n, "ui-resizable-handle " + s), n.css({zIndex: o.zIndex}), this.handles[t] = ".ui-resizable-" + t, this.element.append(n);
            this._renderAxis = function (t) {
                var e, i, s, n;
                t = t || this.element;
                for (e in this.handles) this.handles[e].constructor === String ? this.handles[e] = this.element.children(this.handles[e]).first().show() : (this.handles[e].jquery || this.handles[e].nodeType) && (this.handles[e] = I(this.handles[e]), this._on(this.handles[e], {mousedown: a._mouseDown})), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (i = I(this.handles[e], this.element), n = /sw|ne|nw|se|n|s/.test(e) ? i.outerHeight() : i.outerWidth(), s = ["padding", /ne|nw|n/.test(e) ? "Top" : /se|sw|s/.test(e) ? "Bottom" : /^e$/.test(e) ? "Right" : "Left"].join(""), t.css(s, n), this._proportionallyResize()), this._handles = this._handles.add(this.handles[e])
            }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.on("mouseover", function () {
                a.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), a.axis = n && n[1] ? n[1] : "se")
            }), o.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"))
        },
        _removeHandles: function () {
            this._handles.remove()
        },
        _mouseCapture: function (t) {
            var e, i, s = !1;
            for (e in this.handles) i = I(this.handles[e])[0], (i === t.target || I.contains(i, t.target)) && (s = !0);
            return !this.options.disabled && s
        },
        _mouseStart: function (t) {
            var e, i, s, n = this.options, o = this.element;
            return this.resizing = !0, this._renderProxy(), e = this._num(this.helper.css("left")), i = this._num(this.helper.css("top")), n.containment && (e += I(n.containment).scrollLeft() || 0, i += I(n.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: e,
                top: i
            }, this.size = this._helper ? {width: this.helper.width(), height: this.helper.height()} : {width: o.width(), height: o.height()}, this.originalSize = this._helper ? {
                width: o.outerWidth(),
                height: o.outerHeight()
            } : {width: o.width(), height: o.height()}, this.sizeDiff = {width: o.outerWidth() - o.width(), height: o.outerHeight() - o.height()}, this.originalPosition = {
                left: e,
                top: i
            }, this.originalMousePosition = {
                left: t.pageX,
                top: t.pageY
            }, this.aspectRatio = "number" == typeof n.aspectRatio ? n.aspectRatio : this.originalSize.width / this.originalSize.height || 1, s = I(".ui-resizable-" + this.axis).css("cursor"), I("body").css("cursor", "auto" === s ? this.axis + "-resize" : s), this._addClass("ui-resizable-resizing"), this._propagate("start", t), !0
        },
        _mouseDrag: function (t) {
            var e, i, s = this.originalMousePosition, n = this.axis, o = t.pageX - s.left || 0, a = t.pageY - s.top || 0, r = this._change[n];
            return this._updatePrevProperties(), r ? (e = r.apply(this, [t, o, a]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (e = this._updateRatio(e, t)), e = this._respectSize(e, t), this._updateCache(e), this._propagate("resize", t), i = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), I.isEmptyObject(i) || (this._updatePrevProperties(), this._trigger("resize", t, this.ui()), this._applyChanges()), !1) : !1
        },
        _mouseStop: function (t) {
            this.resizing = !1;
            var e, i, s, n, o, a, r, h = this.options, l = this;
            return this._helper && (e = this._proportionallyResizeElements, i = e.length && /textarea/i.test(e[0].nodeName), s = i && this._hasScroll(e[0], "left") ? 0 : l.sizeDiff.height, n = i ? 0 : l.sizeDiff.width, o = {
                width: l.helper.width() - n,
                height: l.helper.height() - s
            }, a = parseFloat(l.element.css("left")) + (l.position.left - l.originalPosition.left) || null, r = parseFloat(l.element.css("top")) + (l.position.top - l.originalPosition.top) || null, h.animate || this.element.css(I.extend(o, {
                top: r,
                left: a
            })), l.helper.height(l.size.height), l.helper.width(l.size.width), this._helper && !h.animate && this._proportionallyResize()), I("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
        },
        _updatePrevProperties: function () {
            this.prevPosition = {top: this.position.top, left: this.position.left}, this.prevSize = {width: this.size.width, height: this.size.height}
        },
        _applyChanges: function () {
            var t = {};
            return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), this.helper.css(t), t
        },
        _updateVirtualBoundaries: function (t) {
            var e, i, s, n, o, a = this.options;
            o = {
                minWidth: this._isNumber(a.minWidth) ? a.minWidth : 0,
                maxWidth: this._isNumber(a.maxWidth) ? a.maxWidth : 1 / 0,
                minHeight: this._isNumber(a.minHeight) ? a.minHeight : 0,
                maxHeight: this._isNumber(a.maxHeight) ? a.maxHeight : 1 / 0
            }, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, s = o.minWidth / this.aspectRatio, i = o.maxHeight * this.aspectRatio, n = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), s > o.minHeight && (o.minHeight = s), o.maxWidth > i && (o.maxWidth = i), o.maxHeight > n && (o.maxHeight = n)), this._vBoundaries = o
        },
        _updateCache: function (t) {
            this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), this._isNumber(t.width) && (this.size.width = t.width)
        },
        _updateRatio: function (t) {
            var e = this.position, i = this.size, s = this.axis;
            return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === s && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === s && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t
        },
        _respectSize: function (t) {
            var e = this._vBoundaries, i = this.axis, s = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width, n = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
                o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width, a = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height, r = this.originalPosition.left + this.originalSize.width,
                h = this.originalPosition.top + this.originalSize.height, l = /sw|nw|w/.test(i), c = /nw|ne|n/.test(i);
            return o && (t.width = e.minWidth), a && (t.height = e.minHeight), s && (t.width = e.maxWidth), n && (t.height = e.maxHeight), o && l && (t.left = r - e.minWidth), s && l && (t.left = r - e.maxWidth), a && c && (t.top = h - e.minHeight), n && c && (t.top = h - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
        },
        _getPaddingPlusBorderDimensions: function (t) {
            for (var e = 0, i = [], s = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], n = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; 4 > e; e++) i[e] = parseFloat(s[e]) || 0, i[e] += parseFloat(n[e]) || 0;
            return {height: i[0] + i[2], width: i[1] + i[3]}
        },
        _proportionallyResize: function () {
            if (this._proportionallyResizeElements.length) for (var t, e = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > e; e++) t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css({
                height: i.height() - this.outerDimensions.height || 0,
                width: i.width() - this.outerDimensions.width || 0
            })
        },
        _renderProxy: function () {
            var t = this.element, e = this.options;
            this.elementOffset = t.offset(), this._helper ? (this.helper = this.helper || I("<div style='overflow:hidden;'></div>"), this._addClass(this.helper, this._helper), this.helper.css({
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++e.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function (t, e) {
                return {width: this.originalSize.width + e}
            }, w: function (t, e) {
                var i = this.originalSize, s = this.originalPosition;
                return {left: s.left + e, width: i.width - e}
            }, n: function (t, e, i) {
                var s = this.originalSize, n = this.originalPosition;
                return {top: n.top + i, height: s.height - i}
            }, s: function (t, e, i) {
                return {height: this.originalSize.height + i}
            }, se: function (t, e, i) {
                return I.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, e, i]))
            }, sw: function (t, e, i) {
                return I.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, e, i]))
            }, ne: function (t, e, i) {
                return I.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, e, i]))
            }, nw: function (t, e, i) {
                return I.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, e, i]))
            }
        },
        _propagate: function (t, e) {
            I.ui.plugin.call(this, t, [e, this.ui()]), "resize" !== t && this._trigger(t, e, this.ui())
        },
        plugins: {},
        ui: function () {
            return {originalElement: this.originalElement, element: this.element, helper: this.helper, position: this.position, size: this.size, originalSize: this.originalSize, originalPosition: this.originalPosition}
        }
    }), I.ui.plugin.add("resizable", "animate", {
        stop: function (e) {
            var i = I(this).resizable("instance"), t = i.options, s = i._proportionallyResizeElements, n = s.length && /textarea/i.test(s[0].nodeName), o = n && i._hasScroll(s[0], "left") ? 0 : i.sizeDiff.height,
                a = n ? 0 : i.sizeDiff.width, r = {width: i.size.width - a, height: i.size.height - o}, h = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null,
                l = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(I.extend(r, l && h ? {top: l, left: h} : {}), {
                duration: t.animateDuration, easing: t.animateEasing, step: function () {
                    var t = {width: parseFloat(i.element.css("width")), height: parseFloat(i.element.css("height")), top: parseFloat(i.element.css("top")), left: parseFloat(i.element.css("left"))};
                    s && s.length && I(s[0]).css({width: t.width, height: t.height}), i._updateCache(t), i._propagate("resize", e)
                }
            })
        }
    }), I.ui.plugin.add("resizable", "containment", {
        start: function () {
            var i, s, t, e, n, o, a, r = I(this).resizable("instance"), h = r.options, l = r.element, c = h.containment, u = c instanceof I ? c.get(0) : /parent/.test(c) ? l.parent().get(0) : c;
            u && (r.containerElement = I(u), /document/.test(c) || c === document ? (r.containerOffset = {left: 0, top: 0}, r.containerPosition = {left: 0, top: 0}, r.parentData = {
                element: I(document),
                left: 0,
                top: 0,
                width: I(document).width(),
                height: I(document).height() || document.body.parentNode.scrollHeight
            }) : (i = I(u), s = [], I(["Top", "Right", "Left", "Bottom"]).each(function (t, e) {
                s[t] = r._num(i.css("padding" + e))
            }), r.containerOffset = i.offset(), r.containerPosition = i.position(), r.containerSize = {
                height: i.innerHeight() - s[3],
                width: i.innerWidth() - s[1]
            }, t = r.containerOffset, e = r.containerSize.height, n = r.containerSize.width, o = r._hasScroll(u, "left") ? u.scrollWidth : n, a = r._hasScroll(u) ? u.scrollHeight : e, r.parentData = {
                element: u,
                left: t.left,
                top: t.top,
                width: o,
                height: a
            }))
        }, resize: function (t) {
            var e, i, s, n, o = I(this).resizable("instance"), a = o.options, r = o.containerOffset, h = o.position, l = o._aspectRatio || t.shiftKey, c = {top: 0, left: 0}, u = o.containerElement, d = !0;
            u[0] !== document && /static/.test(u.css("position")) && (c = r), h.left < (o._helper ? r.left : 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - r.left : o.position.left - c.left), l && (o.size.height = o.size.width / o.aspectRatio, d = !1), o.position.left = a.helper ? r.left : 0), h.top < (o._helper ? r.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - r.top : o.position.top), l && (o.size.width = o.size.height * o.aspectRatio, d = !1), o.position.top = o._helper ? r.top : 0), s = o.containerElement.get(0) === o.element.parent().get(0), n = /relative|absolute/.test(o.containerElement.css("position")), s && n ? (o.offset.left = o.parentData.left + o.position.left, o.offset.top = o.parentData.top + o.position.top) : (o.offset.left = o.element.offset().left, o.offset.top = o.element.offset().top), e = Math.abs(o.sizeDiff.width + (o._helper ? o.offset.left - c.left : o.offset.left - r.left)), i = Math.abs(o.sizeDiff.height + (o._helper ? o.offset.top - c.top : o.offset.top - r.top)), e + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - e, l && (o.size.height = o.size.width / o.aspectRatio, d = !1)), i + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - i, l && (o.size.width = o.size.height * o.aspectRatio, d = !1)), d || (o.position.left = o.prevPosition.left, o.position.top = o.prevPosition.top, o.size.width = o.prevSize.width, o.size.height = o.prevSize.height)
        }, stop: function () {
            var t = I(this).resizable("instance"), e = t.options, i = t.containerOffset, s = t.containerPosition, n = t.containerElement, o = I(t.helper), a = o.offset(), r = o.outerWidth() - t.sizeDiff.width,
                h = o.outerHeight() - t.sizeDiff.height;
            t._helper && !e.animate && /relative/.test(n.css("position")) && I(this).css({
                left: a.left - s.left - i.left,
                width: r,
                height: h
            }), t._helper && !e.animate && /static/.test(n.css("position")) && I(this).css({left: a.left - s.left - i.left, width: r, height: h})
        }
    }), I.ui.plugin.add("resizable", "alsoResize", {
        start: function () {
            var t = I(this).resizable("instance"), e = t.options;
            I(e.alsoResize).each(function () {
                var t = I(this);
                t.data("ui-resizable-alsoresize", {width: parseFloat(t.width()), height: parseFloat(t.height()), left: parseFloat(t.css("left")), top: parseFloat(t.css("top"))})
            })
        }, resize: function (t, i) {
            var e = I(this).resizable("instance"), s = e.options, n = e.originalSize, o = e.originalPosition,
                a = {height: e.size.height - n.height || 0, width: e.size.width - n.width || 0, top: e.position.top - o.top || 0, left: e.position.left - o.left || 0};
            I(s.alsoResize).each(function () {
                var t = I(this), s = I(this).data("ui-resizable-alsoresize"), n = {}, e = t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                I.each(e, function (t, e) {
                    var i = (s[e] || 0) + (a[e] || 0);
                    i && i >= 0 && (n[e] = i || null)
                }), t.css(n)
            })
        }, stop: function () {
            I(this).removeData("ui-resizable-alsoresize")
        }
    }), I.ui.plugin.add("resizable", "ghost", {
        start: function () {
            var t = I(this).resizable("instance"), e = t.size;
            t.ghost = t.originalElement.clone(), t.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: e.height,
                width: e.width,
                margin: 0,
                left: 0,
                top: 0
            }), t._addClass(t.ghost, "ui-resizable-ghost"), I.uiBackCompat !== !1 && "string" == typeof t.options.ghost && t.ghost.addClass(this.options.ghost), t.ghost.appendTo(t.helper)
        }, resize: function () {
            var t = I(this).resizable("instance");
            t.ghost && t.ghost.css({position: "relative", height: t.size.height, width: t.size.width})
        }, stop: function () {
            var t = I(this).resizable("instance");
            t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
        }
    }), I.ui.plugin.add("resizable", "grid", {
        resize: function () {
            var t, e = I(this).resizable("instance"), i = e.options, s = e.size, n = e.originalSize, o = e.originalPosition, a = e.axis, r = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid, h = r[0] || 1,
                l = r[1] || 1, c = Math.round((s.width - n.width) / h) * h, u = Math.round((s.height - n.height) / l) * l, d = n.width + c, p = n.height + u, f = i.maxWidth && d > i.maxWidth,
                g = i.maxHeight && p > i.maxHeight, m = i.minWidth && i.minWidth > d, _ = i.minHeight && i.minHeight > p;
            i.grid = r, m && (d += h), _ && (p += l), f && (d -= h), g && (p -= l), /^(se|s|e)$/.test(a) ? (e.size.width = d, e.size.height = p) : /^(ne)$/.test(a) ? (e.size.width = d, e.size.height = p, e.position.top = o.top - u) : /^(sw)$/.test(a) ? (e.size.width = d, e.size.height = p, e.position.left = o.left - c) : ((0 >= p - l || 0 >= d - h) && (t = e._getPaddingPlusBorderDimensions(this)), p - l > 0 ? (e.size.height = p, e.position.top = o.top - u) : (p = l - t.height, e.size.height = p, e.position.top = o.top + n.height - p), d - h > 0 ? (e.size.width = d, e.position.left = o.left - c) : (d = h - t.width, e.size.width = d, e.position.left = o.left + n.width - d))
        }
    }), I.ui.resizable, I.widget("ui.selectable", I.ui.mouse, {
        version: "1.12.1",
        options: {appendTo: "body", autoRefresh: !0, distance: 0, filter: "*", tolerance: "touch", selected: null, selecting: null, start: null, stop: null, unselected: null, unselecting: null},
        _create: function () {
            var s = this;
            this._addClass("ui-selectable"), this.dragged = !1, this.refresh = function () {
                s.elementPos = I(s.element[0]).offset(), s.selectees = I(s.options.filter, s.element[0]), s._addClass(s.selectees, "ui-selectee"), s.selectees.each(function () {
                    var t = I(this), e = t.offset(), i = {left: e.left - s.elementPos.left, top: e.top - s.elementPos.top};
                    I.data(this, "selectable-item", {
                        element: this,
                        $element: t,
                        left: i.left,
                        top: i.top,
                        right: i.left + t.outerWidth(),
                        bottom: i.top + t.outerHeight(),
                        startselected: !1,
                        selected: t.hasClass("ui-selected"),
                        selecting: t.hasClass("ui-selecting"),
                        unselecting: t.hasClass("ui-unselecting")
                    })
                })
            }, this.refresh(), this._mouseInit(), this.helper = I("<div>"), this._addClass(this.helper, "ui-selectable-helper")
        },
        _destroy: function () {
            this.selectees.removeData("selectable-item"), this._mouseDestroy()
        },
        _mouseStart: function (i) {
            var s = this, t = this.options;
            this.opos = [i.pageX, i.pageY], this.elementPos = I(this.element[0]).offset(), this.options.disabled || (this.selectees = I(t.filter, this.element[0]), this._trigger("start", i), I(t.appendTo).append(this.helper), this.helper.css({
                left: i.pageX,
                top: i.pageY,
                width: 0,
                height: 0
            }), t.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
                var t = I.data(this, "selectable-item");
                t.startselected = !0, i.metaKey || i.ctrlKey || (s._removeClass(t.$element, "ui-selected"), t.selected = !1, s._addClass(t.$element, "ui-unselecting"), t.unselecting = !0, s._trigger("unselecting", i, {unselecting: t.element}))
            }), I(i.target).parents().addBack().each(function () {
                var t, e = I.data(this, "selectable-item");
                return e ? (t = !i.metaKey && !i.ctrlKey || !e.$element.hasClass("ui-selected"), s._removeClass(e.$element, t ? "ui-unselecting" : "ui-selected")._addClass(e.$element, t ? "ui-selecting" : "ui-unselecting"), e.unselecting = !t, e.selecting = t, e.selected = t, t ? s._trigger("selecting", i, {selecting: e.element}) : s._trigger("unselecting", i, {unselecting: e.element}), !1) : void 0
            }))
        },
        _mouseDrag: function (s) {
            if (this.dragged = !0, !this.options.disabled) {
                var t, n = this, o = this.options, a = this.opos[0], r = this.opos[1], h = s.pageX, l = s.pageY;
                return a > h && (t = h, h = a, a = t), r > l && (t = l, l = r, r = t), this.helper.css({left: a, top: r, width: h - a, height: l - r}), this.selectees.each(function () {
                    var t = I.data(this, "selectable-item"), e = !1, i = {};
                    t && t.element !== n.element[0] && (i.left = t.left + n.elementPos.left, i.right = t.right + n.elementPos.left, i.top = t.top + n.elementPos.top, i.bottom = t.bottom + n.elementPos.top, "touch" === o.tolerance ? e = !(i.left > h || a > i.right || i.top > l || r > i.bottom) : "fit" === o.tolerance && (e = i.left > a && h > i.right && i.top > r && l > i.bottom), e ? (t.selected && (n._removeClass(t.$element, "ui-selected"), t.selected = !1), t.unselecting && (n._removeClass(t.$element, "ui-unselecting"), t.unselecting = !1), t.selecting || (n._addClass(t.$element, "ui-selecting"), t.selecting = !0, n._trigger("selecting", s, {selecting: t.element}))) : (t.selecting && ((s.metaKey || s.ctrlKey) && t.startselected ? (n._removeClass(t.$element, "ui-selecting"), t.selecting = !1, n._addClass(t.$element, "ui-selected"), t.selected = !0) : (n._removeClass(t.$element, "ui-selecting"), t.selecting = !1, t.startselected && (n._addClass(t.$element, "ui-unselecting"), t.unselecting = !0), n._trigger("unselecting", s, {unselecting: t.element}))), t.selected && (s.metaKey || s.ctrlKey || t.startselected || (n._removeClass(t.$element, "ui-selected"), t.selected = !1, n._addClass(t.$element, "ui-unselecting"), t.unselecting = !0, n._trigger("unselecting", s, {unselecting: t.element})))))
                }), !1
            }
        },
        _mouseStop: function (e) {
            var i = this;
            return this.dragged = !1, I(".ui-unselecting", this.element[0]).each(function () {
                var t = I.data(this, "selectable-item");
                i._removeClass(t.$element, "ui-unselecting"), t.unselecting = !1, t.startselected = !1, i._trigger("unselected", e, {unselected: t.element})
            }), I(".ui-selecting", this.element[0]).each(function () {
                var t = I.data(this, "selectable-item");
                i._removeClass(t.$element, "ui-selecting")._addClass(t.$element, "ui-selected"), t.selecting = !1, t.selected = !0, t.startselected = !0, i._trigger("selected", e, {selected: t.element})
            }), this._trigger("stop", e), this.helper.remove(), !1
        }
    }), I.widget("ui.sortable", I.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _isOverAxis: function (t, e, i) {
            return t >= e && e + i > t
        },
        _isFloating: function (t) {
            return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
        },
        _create: function () {
            this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
        },
        _setOption: function (t, e) {
            this._super(t, e), "handle" === t && this._setHandleClassName()
        },
        _setHandleClassName: function () {
            var t = this;
            this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), I.each(this.items, function () {
                t._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle")
            })
        },
        _destroy: function () {
            this._mouseDestroy();
            for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
            return this
        },
        _mouseCapture: function (t, e) {
            var i = null, s = !1, n = this;
            return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(t), I(t.target).parents().each(function () {
                return I.data(this, n.widgetName + "-item") === n ? (i = I(this), !1) : void 0
            }), I.data(t.target, n.widgetName + "-item") === n && (i = I(t.target)), i ? !this.options.handle || e || (I(this.options.handle, i).find("*").addBack().each(function () {
                this === t.target && (s = !0)
            }), s) ? (this.currentItem = i, this._removeCurrentsFromItems(), !0) : !1 : !1)
        },
        _mouseStart: function (t, e, i) {
            var s, n, o = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, I.extend(this.offset, {
                click: {left: t.pageX - this.offset.left, top: t.pageY - this.offset.top},
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt), this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), o.containment && this._setContainment(), o.cursor && "auto" !== o.cursor && (n = this.document.find("body"), this.storedCursor = n.css("cursor"), n.css("cursor", o.cursor), this.storedStylesheet = I("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(n)), o.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", o.opacity)), o.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", o.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !i) for (s = this.containers.length - 1; s >= 0; s--) this.containers[s]._trigger("activate", t, this._uiHash(this));
            return I.ui.ddmanager && (I.ui.ddmanager.current = this), I.ui.ddmanager && !o.dropBehaviour && I.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(t), !0
        },
        _mouseDrag: function (t) {
            var e, i, s, n, o = this.options, a = !1;
            for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < o.scrollSensitivity ? this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop + o.scrollSpeed : t.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop - o.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < o.scrollSensitivity ? this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft + o.scrollSpeed : t.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft - o.scrollSpeed)) : (t.pageY - this.document.scrollTop() < o.scrollSensitivity ? a = this.document.scrollTop(this.document.scrollTop() - o.scrollSpeed) : this.window.height() - (t.pageY - this.document.scrollTop()) < o.scrollSensitivity && (a = this.document.scrollTop(this.document.scrollTop() + o.scrollSpeed)), t.pageX - this.document.scrollLeft() < o.scrollSensitivity ? a = this.document.scrollLeft(this.document.scrollLeft() - o.scrollSpeed) : this.window.width() - (t.pageX - this.document.scrollLeft()) < o.scrollSensitivity && (a = this.document.scrollLeft(this.document.scrollLeft() + o.scrollSpeed))), a !== !1 && I.ui.ddmanager && !o.dropBehaviour && I.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), e = this.items.length - 1; e >= 0; e--) if (i = this.items[e], s = i.item[0], n = this._intersectsWithPointer(i), n && i.instance === this.currentContainer && s !== this.currentItem[0] && this.placeholder[1 === n ? "next" : "prev"]()[0] !== s && !I.contains(this.placeholder[0], s) && ("semi-dynamic" === this.options.type ? !I.contains(this.element[0], s) : !0)) {
                if (this.direction = 1 === n ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(i)) break;
                this._rearrange(t, i), this._trigger("change", t, this._uiHash());
                break
            }
            return this._contactContainers(t), I.ui.ddmanager && I.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function (t, e) {
            if (t) {
                if (I.ui.ddmanager && !this.options.dropBehaviour && I.ui.ddmanager.drop(this, t), this.options.revert) {
                    var i = this, s = this.placeholder.offset(), n = this.options.axis, o = {};
                    n && "x" !== n || (o.left = s.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), n && "y" !== n || (o.top = s.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, I(this.helper).animate(o, parseInt(this.options.revert, 10) || 500, function () {
                        i._clear(t)
                    })
                } else this._clear(t, e);
                return !1
            }
        },
        cancel: function () {
            if (this.dragging) {
                this._mouseUp(new I.Event("mouseup", {target: null})), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
                for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), I.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? I(this.domPosition.prev).after(this.currentItem) : I(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function (e) {
            var t = this._getItemsAsjQuery(e && e.connected), i = [];
            return e = e || {}, I(t).each(function () {
                var t = (I(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                t && i.push((e.key || t[1] + "[]") + "=" + (e.key && e.expression ? t[1] : t[2]))
            }), !i.length && e.key && i.push(e.key + "="), i.join("&")
        },
        toArray: function (t) {
            var e = this._getItemsAsjQuery(t && t.connected), i = [];
            return t = t || {}, e.each(function () {
                i.push(I(t.item || this).attr(t.attribute || "id") || "")
            }), i
        },
        _intersectsWith: function (t) {
            var e = this.positionAbs.left, i = e + this.helperProportions.width, s = this.positionAbs.top, n = s + this.helperProportions.height, o = t.left, a = o + t.width, r = t.top, h = r + t.height,
                l = this.offset.click.top, c = this.offset.click.left, u = "x" === this.options.axis || s + l > r && h > s + l, d = "y" === this.options.axis || e + c > o && a > e + c, p = u && d;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : e + this.helperProportions.width / 2 > o && a > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && h > n - this.helperProportions.height / 2
        },
        _intersectsWithPointer: function (t) {
            var e, i, s = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                n = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width), o = s && n;
            return o ? (e = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection(), this.floating ? "right" === i || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1)) : !1
        },
        _intersectsWithSides: function (t) {
            var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height), i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                s = this._getDragVerticalDirection(), n = this._getDragHorizontalDirection();
            return this.floating && n ? "right" === n && i || "left" === n && !i : s && ("down" === s && e || "up" === s && !e)
        },
        _getDragVerticalDirection: function () {
            var t = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== t && (t > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function () {
            var t = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== t && (t > 0 ? "right" : "left")
        },
        refresh: function (t) {
            return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this
        },
        _connectWith: function () {
            var t = this.options;
            return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
        },
        _getItemsAsjQuery: function (t) {
            function e() {
                a.push(this)
            }

            var i, s, n, o, a = [], r = [], h = this._connectWith();
            if (h && t) for (i = h.length - 1; i >= 0; i--) for (n = I(h[i], this.document[0]), s = n.length - 1; s >= 0; s--) o = I.data(n[s], this.widgetFullName), o && o !== this && !o.options.disabled && r.push([I.isFunction(o.options.items) ? o.options.items.call(o.element) : I(o.options.items, o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), o]);
            for (r.push([I.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : I(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), i = r.length - 1; i >= 0; i--) r[i][0].each(e);
            return I(a)
        },
        _removeCurrentsFromItems: function () {
            var i = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = I.grep(this.items, function (t) {
                for (var e = 0; i.length > e; e++) if (i[e] === t.item[0]) return !1;
                return !0
            })
        },
        _refreshItems: function (t) {
            this.items = [], this.containers = [this];
            var e, i, s, n, o, a, r, h, l = this.items, c = [[I.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {item: this.currentItem}) : I(this.options.items, this.element), this]],
                u = this._connectWith();
            if (u && this.ready) for (e = u.length - 1; e >= 0; e--) for (s = I(u[e], this.document[0]), i = s.length - 1; i >= 0; i--) n = I.data(s[i], this.widgetFullName), n && n !== this && !n.options.disabled && (c.push([I.isFunction(n.options.items) ? n.options.items.call(n.element[0], t, {item: this.currentItem}) : I(n.options.items, n.element), n]), this.containers.push(n));
            for (e = c.length - 1; e >= 0; e--) for (o = c[e][1], a = c[e][0], i = 0, h = a.length; h > i; i++) r = I(a[i]), r.data(this.widgetName + "-item", o), l.push({
                item: r,
                instance: o,
                width: 0,
                height: 0,
                left: 0,
                top: 0
            })
        },
        refreshPositions: function (t) {
            this.floating = this.items.length ? "x" === this.options.axis || this._isFloating(this.items[0].item) : !1, this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var e, i, s, n;
            for (e = this.items.length - 1; e >= 0; e--) i = this.items[e], i.instance !== this.currentContainer && this.currentContainer && i.item[0] !== this.currentItem[0] || (s = this.options.toleranceElement ? I(this.options.toleranceElement, i.item) : i.item, t || (i.width = s.outerWidth(), i.height = s.outerHeight()), n = s.offset(), i.left = n.left, i.top = n.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this); else for (e = this.containers.length - 1; e >= 0; e--) n = this.containers[e].element.offset(), this.containers[e].containerCache.left = n.left, this.containers[e].containerCache.top = n.top, this.containers[e].containerCache.width = this.containers[e].element.outerWidth(), this.containers[e].containerCache.height = this.containers[e].element.outerHeight();
            return this
        },
        _createPlaceholder: function (i) {
            i = i || this;
            var s, n = i.options;
            n.placeholder && n.placeholder.constructor !== String || (s = n.placeholder, n.placeholder = {
                element: function () {
                    var t = i.currentItem[0].nodeName.toLowerCase(), e = I("<" + t + ">", i.document[0]);
                    return i._addClass(e, "ui-sortable-placeholder", s || i.currentItem[0].className)._removeClass(e, "ui-sortable-helper"), "tbody" === t ? i._createTrPlaceholder(i.currentItem.find("tr").eq(0), I("<tr>", i.document[0]).appendTo(e)) : "tr" === t ? i._createTrPlaceholder(i.currentItem, e) : "img" === t && e.attr("src", i.currentItem.attr("src")), s || e.css("visibility", "hidden"), e
                }, update: function (t, e) {
                    (!s || n.forcePlaceholderSize) && (e.height() || e.height(i.currentItem.innerHeight() - parseInt(i.currentItem.css("paddingTop") || 0, 10) - parseInt(i.currentItem.css("paddingBottom") || 0, 10)), e.width() || e.width(i.currentItem.innerWidth() - parseInt(i.currentItem.css("paddingLeft") || 0, 10) - parseInt(i.currentItem.css("paddingRight") || 0, 10)))
                }
            }), i.placeholder = I(n.placeholder.element.call(i.element, i.currentItem)), i.currentItem.after(i.placeholder), n.placeholder.update(i, i.placeholder)
        },
        _createTrPlaceholder: function (t, e) {
            var i = this;
            t.children().each(function () {
                I("<td>&#160;</td>", i.document[0]).attr("colspan", I(this).attr("colspan") || 1).appendTo(e)
            })
        },
        _contactContainers: function (t) {
            var e, i, s, n, o, a, r, h, l, c, u = null, d = null;
            for (e = this.containers.length - 1; e >= 0; e--) if (!I.contains(this.currentItem[0], this.containers[e].element[0])) if (this._intersectsWith(this.containers[e].containerCache)) {
                if (u && I.contains(this.containers[e].element[0], u.element[0])) continue;
                u = this.containers[e], d = e
            } else this.containers[e].containerCache.over && (this.containers[e]._trigger("out", t, this._uiHash(this)), this.containers[e].containerCache.over = 0);
            if (u) if (1 === this.containers.length) this.containers[d].containerCache.over || (this.containers[d]._trigger("over", t, this._uiHash(this)), this.containers[d].containerCache.over = 1); else {
                for (s = 1e4, n = null, l = u.floating || this._isFloating(this.currentItem), o = l ? "left" : "top", a = l ? "width" : "height", c = l ? "pageX" : "pageY", i = this.items.length - 1; i >= 0; i--) I.contains(this.containers[d].element[0], this.items[i].item[0]) && this.items[i].item[0] !== this.currentItem[0] && (r = this.items[i].item.offset()[o], h = !1, t[c] - r > this.items[i][a] / 2 && (h = !0), s > Math.abs(t[c] - r) && (s = Math.abs(t[c] - r), n = this.items[i], this.direction = h ? "up" : "down"));
                if (!n && !this.options.dropOnEmpty) return;
                if (this.currentContainer === this.containers[d]) return this.currentContainer.containerCache.over || (this.containers[d]._trigger("over", t, this._uiHash()), this.currentContainer.containerCache.over = 1), void 0;
                n ? this._rearrange(t, n, null, !0) : this._rearrange(t, null, this.containers[d].element, !0), this._trigger("change", t, this._uiHash()), this.containers[d]._trigger("change", t, this._uiHash(this)), this.currentContainer = this.containers[d], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[d]._trigger("over", t, this._uiHash(this)), this.containers[d].containerCache.over = 1
            }
        },
        _createHelper: function (t) {
            var e = this.options, i = I.isFunction(e.helper) ? I(e.helper.apply(this.element[0], [t, this.currentItem])) : "clone" === e.helper ? this.currentItem.clone() : this.currentItem;
            return i.parents("body").length || I("parent" !== e.appendTo ? e.appendTo : this.currentItem[0].parentNode)[0].appendChild(i[0]), i[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (!i[0].style.width || e.forceHelperSize) && i.width(this.currentItem.width()), (!i[0].style.height || e.forceHelperSize) && i.height(this.currentItem.height()), i
        },
        _adjustOffsetFromHelper: function (t) {
            "string" == typeof t && (t = t.split(" ")), I.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && I.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && I.ui.ie) && (t = {
                top: 0,
                left: 0
            }), {top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)}
        },
        _getRelativeOffset: function () {
            if ("relative" === this.cssPosition) {
                var t = this.currentItem.position();
                return {top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()}
            }
            return {top: 0, left: 0}
        },
        _cacheMargins: function () {
            this.margins = {left: parseInt(this.currentItem.css("marginLeft"), 10) || 0, top: parseInt(this.currentItem.css("marginTop"), 10) || 0}
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
        },
        _setContainment: function () {
            var t, e, i, s = this.options;
            "parent" === s.containment && (s.containment = this.helper[0].parentNode), ("document" === s.containment || "window" === s.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === s.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === s.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(s.containment) || (t = I(s.containment)[0], e = I(s.containment).offset(), i = "hidden" !== I(t).css("overflow"), this.containment = [e.left + (parseInt(I(t).css("borderLeftWidth"), 10) || 0) + (parseInt(I(t).css("paddingLeft"), 10) || 0) - this.margins.left, e.top + (parseInt(I(t).css("borderTopWidth"), 10) || 0) + (parseInt(I(t).css("paddingTop"), 10) || 0) - this.margins.top, e.left + (i ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(I(t).css("borderLeftWidth"), 10) || 0) - (parseInt(I(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, e.top + (i ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(I(t).css("borderTopWidth"), 10) || 0) - (parseInt(I(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function (t, e) {
            e || (e = this.position);
            var i = "absolute" === t ? 1 : -1,
                s = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && I.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                n = /(html|body)/i.test(s[0].tagName);
            return {
                top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : n ? 0 : s.scrollTop()) * i,
                left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : n ? 0 : s.scrollLeft()) * i
            }
        },
        _generatePosition: function (t) {
            var e, i, s = this.options, n = t.pageX, o = t.pageY,
                a = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && I.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                r = /(html|body)/i.test(a[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (n = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (n = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), s.grid && (e = this.originalPageY + Math.round((o - this.originalPageY) / s.grid[1]) * s.grid[1], o = this.containment ? e - this.offset.click.top >= this.containment[1] && e - this.offset.click.top <= this.containment[3] ? e : e - this.offset.click.top >= this.containment[1] ? e - s.grid[1] : e + s.grid[1] : e, i = this.originalPageX + Math.round((n - this.originalPageX) / s.grid[0]) * s.grid[0], n = this.containment ? i - this.offset.click.left >= this.containment[0] && i - this.offset.click.left <= this.containment[2] ? i : i - this.offset.click.left >= this.containment[0] ? i - s.grid[0] : i + s.grid[0] : i)), {
                top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : r ? 0 : a.scrollTop()),
                left: n - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : r ? 0 : a.scrollLeft())
            }
        },
        _rearrange: function (t, e, i, s) {
            i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var n = this.counter;
            this._delay(function () {
                n === this.counter && this.refreshPositions(!s)
            })
        },
        _clear: function (t, e) {
            function i(e, i, s) {
                return function (t) {
                    s._trigger(e, t, i._uiHash(i))
                }
            }

            this.reverting = !1;
            var s, n = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (s in this._storedCSS) ("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = "");
                this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")
            } else this.currentItem.show();
            for (this.fromOutside && !e && n.push(function (t) {
                this._trigger("receive", t, this._uiHash(this.fromOutside))
            }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || n.push(function (t) {
                this._trigger("update", t, this._uiHash())
            }), this !== this.currentContainer && (e || (n.push(function (t) {
                this._trigger("remove", t, this._uiHash())
            }), n.push(function (e) {
                return function (t) {
                    e._trigger("receive", t, this._uiHash(this))
                }
            }.call(this, this.currentContainer)), n.push(function (e) {
                return function (t) {
                    e._trigger("update", t, this._uiHash(this))
                }
            }.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--) e || n.push(i("deactivate", this, this.containers[s])), this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
                for (s = 0; n.length > s; s++) n[s].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1, !this.cancelHelperRemoval
        },
        _trigger: function () {
            I.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function (t) {
            var e = t || this;
            return {helper: e.helper, placeholder: e.placeholder || I([]), position: e.position, originalPosition: e.originalPosition, offset: e.positionAbs, item: e.currentItem, sender: t ? t.element : null}
        }
    }), I.widget("ui.accordion", {
        version: "1.12.1",
        options: {
            active: 0,
            animate: {},
            classes: {"ui-accordion-header": "ui-corner-top", "ui-accordion-header-collapsed": "ui-corner-all", "ui-accordion-content": "ui-corner-bottom"},
            collapsible: !1,
            event: "click",
            header: "> li > :first-child, > :not(li):even",
            heightStyle: "auto",
            icons: {activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e"},
            activate: null,
            beforeActivate: null
        },
        hideProps: {borderTopWidth: "hide", borderBottomWidth: "hide", paddingTop: "hide", paddingBottom: "hide", height: "hide"},
        showProps: {borderTopWidth: "show", borderBottomWidth: "show", paddingTop: "show", paddingBottom: "show", height: "show"},
        _create: function () {
            var t = this.options;
            this.prevShow = this.prevHide = I(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), this.element.attr("role", "tablist"), t.collapsible || t.active !== !1 && null != t.active || (t.active = 0), this._processPanels(), 0 > t.active && (t.active += this.headers.length), this._refresh()
        },
        _getCreateEventData: function () {
            return {header: this.active, panel: this.active.length ? this.active.next() : I()}
        },
        _createIcons: function () {
            var t, e, i = this.options.icons;
            i && (t = I("<span>"), this._addClass(t, "ui-accordion-header-icon", "ui-icon " + i.header), t.prependTo(this.headers), e = this.active.children(".ui-accordion-header-icon"), this._removeClass(e, i.header)._addClass(e, null, i.activeHeader)._addClass(this.headers, "ui-accordion-icons"))
        },
        _destroyIcons: function () {
            this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove()
        },
        _destroy: function () {
            var t;
            this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t.css("height", "")
        },
        _setOption: function (t, e) {
            return "active" === t ? (this._activate(e), void 0) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || this.options.active !== !1 || this._activate(0), "icons" === t && (this._destroyIcons(), e && this._createIcons()), void 0)
        },
        _setOptionDisabled: function (t) {
            this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t), this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t)
        },
        _keydown: function (t) {
            if (!t.altKey && !t.ctrlKey) {
                var e = I.ui.keyCode, i = this.headers.length, s = this.headers.index(t.target), n = !1;
                switch (t.keyCode) {
                    case e.RIGHT:
                    case e.DOWN:
                        n = this.headers[(s + 1) % i];
                        break;
                    case e.LEFT:
                    case e.UP:
                        n = this.headers[(s - 1 + i) % i];
                        break;
                    case e.SPACE:
                    case e.ENTER:
                        this._eventHandler(t);
                        break;
                    case e.HOME:
                        n = this.headers[0];
                        break;
                    case e.END:
                        n = this.headers[i - 1]
                }
                n && (I(t.target).attr("tabIndex", -1), I(n).attr("tabIndex", 0), I(n).trigger("focus"), t.preventDefault())
            }
        },
        _panelKeyDown: function (t) {
            t.keyCode === I.ui.keyCode.UP && t.ctrlKey && I(t.currentTarget).prev().trigger("focus")
        },
        refresh: function () {
            var t = this.options;
            this._processPanels(), t.active === !1 && t.collapsible === !0 || !this.headers.length ? (t.active = !1, this.active = I()) : t.active === !1 ? this._activate(0) : this.active.length && !I.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1, this.active = I()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
        },
        _processPanels: function () {
            var t = this.headers, e = this.panels;
            this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)))
        },
        _refresh: function () {
            var i, t = this.options, e = t.heightStyle, s = this.element.parent();
            this.active = this._findActive(t.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), this.headers.attr("role", "tab").each(function () {
                var t = I(this), e = t.uniqueId().attr("id"), i = t.next(), s = i.uniqueId().attr("id");
                t.attr("aria-controls", s), i.attr("aria-labelledby", e)
            }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }).next().attr({"aria-hidden": "true"}).hide(), this.active.length ? this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }).next().attr({"aria-hidden": "false"}) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(t.event), "fill" === e ? (i = s.height(), this.element.siblings(":visible").each(function () {
                var t = I(this), e = t.css("position");
                "absolute" !== e && "fixed" !== e && (i -= t.outerHeight(!0))
            }), this.headers.each(function () {
                i -= I(this).outerHeight(!0)
            }), this.headers.next().each(function () {
                I(this).height(Math.max(0, i - I(this).innerHeight() + I(this).height()))
            }).css("overflow", "auto")) : "auto" === e && (i = 0, this.headers.next().each(function () {
                var t = I(this).is(":visible");
                t || I(this).show(), i = Math.max(i, I(this).css("height", "").height()), t || I(this).hide()
            }).height(i))
        },
        _activate: function (t) {
            var e = this._findActive(t)[0];
            e !== this.active[0] && (e = e || this.active[0], this._eventHandler({target: e, currentTarget: e, preventDefault: I.noop}))
        },
        _findActive: function (t) {
            return "number" == typeof t ? this.headers.eq(t) : I()
        },
        _setupEvents: function (t) {
            var i = {keydown: "_keydown"};
            t && I.each(t.split(" "), function (t, e) {
                i[e] = "_eventHandler"
            }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {keydown: "_panelKeyDown"}), this._hoverable(this.headers), this._focusable(this.headers)
        },
        _eventHandler: function (t) {
            var e, i, s = this.options, n = this.active, o = I(t.currentTarget), a = o[0] === n[0], r = a && s.collapsible, h = r ? I() : o.next(), l = n.next(),
                c = {oldHeader: n, oldPanel: l, newHeader: r ? I() : o, newPanel: h};
            t.preventDefault(), a && !s.collapsible || this._trigger("beforeActivate", t, c) === !1 || (s.active = r ? !1 : this.headers.index(o), this.active = a ? I() : o, this._toggle(c), this._removeClass(n, "ui-accordion-header-active", "ui-state-active"), s.icons && (e = n.children(".ui-accordion-header-icon"), this._removeClass(e, null, s.icons.activeHeader)._addClass(e, null, s.icons.header)), a || (this._removeClass(o, "ui-accordion-header-collapsed")._addClass(o, "ui-accordion-header-active", "ui-state-active"), s.icons && (i = o.children(".ui-accordion-header-icon"), this._removeClass(i, null, s.icons.header)._addClass(i, null, s.icons.activeHeader)), this._addClass(o.next(), "ui-accordion-content-active")))
        },
        _toggle: function (t) {
            var e = t.newPanel, i = this.prevShow.length ? this.prevShow : t.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = e, this.prevHide = i, this.options.animate ? this._animate(e, i, t) : (i.hide(), e.show(), this._toggleComplete(t)), i.attr({"aria-hidden": "true"}), i.prev().attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }), e.length && i.length ? i.prev().attr({tabIndex: -1, "aria-expanded": "false"}) : e.length && this.headers.filter(function () {
                return 0 === parseInt(I(this).attr("tabIndex"), 10)
            }).attr("tabIndex", -1), e.attr("aria-hidden", "false").prev().attr({"aria-selected": "true", "aria-expanded": "true", tabIndex: 0})
        },
        _animate: function (t, i, e) {
            var s, n, o, a = this, r = 0, h = t.css("box-sizing"), l = t.length && (!i.length || t.index() < i.index()), c = this.options.animate || {}, u = l && c.down || c, d = function () {
                a._toggleComplete(e)
            };
            return "number" == typeof u && (o = u), "string" == typeof u && (n = u), n = n || u.easing || c.easing, o = o || u.duration || c.duration, i.length ? t.length ? (s = t.show().outerHeight(), i.animate(this.hideProps, {
                duration: o,
                easing: n,
                step: function (t, e) {
                    e.now = Math.round(t)
                }
            }), t.hide().animate(this.showProps, {
                duration: o, easing: n, complete: d, step: function (t, e) {
                    e.now = Math.round(t), "height" !== e.prop ? "content-box" === h && (r += e.now) : "content" !== a.options.heightStyle && (e.now = Math.round(s - i.outerHeight() - r), r = 0)
                }
            }), void 0) : i.animate(this.hideProps, o, n, d) : t.animate(this.showProps, o, n, d)
        },
        _toggleComplete: function (t) {
            var e = t.oldPanel, i = e.prev();
            this._removeClass(e, "ui-accordion-content-active"), this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
        }
    }), I.widget("ui.menu", {
        version: "1.12.1",
        defaultElement: "<ul>",
        delay: 300,
        options: {icons: {submenu: "ui-icon-caret-1-e"}, items: "> *", menus: "ul", position: {my: "left top", at: "right top"}, role: "menu", blur: null, focus: null, select: null},
        _create: function () {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({role: this.options.role, tabIndex: 0}), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
                "mousedown .ui-menu-item": function (t) {
                    t.preventDefault()
                }, "click .ui-menu-item": function (t) {
                    var e = I(t.target), i = I(I.ui.safeActiveElement(this.document[0]));
                    !this.mouseHandled && e.not(".ui-state-disabled").length && (this.select(t), t.isPropagationStopped() || (this.mouseHandled = !0), e.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && i.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                }, "mouseenter .ui-menu-item": function (t) {
                    if (!this.previousFilter) {
                        var e = I(t.target).closest(".ui-menu-item"), i = I(t.currentTarget);
                        e[0] === i[0] && (this._removeClass(i.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(t, i))
                    }
                }, mouseleave: "collapseAll", "mouseleave .ui-menu": "collapseAll", focus: function (t, e) {
                    var i = this.active || this.element.find(this.options.items).eq(0);
                    e || this.focus(t, i)
                }, blur: function (e) {
                    this._delay(function () {
                        var t = !I.contains(this.element[0], I.ui.safeActiveElement(this.document[0]));
                        t && this.collapseAll(e)
                    })
                }, keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function (t) {
                    this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1
                }
            })
        },
        _destroy: function () {
            var t = this.element.find(".ui-menu-item").removeAttr("role aria-disabled"), e = t.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), e.children().each(function () {
                var t = I(this);
                t.data("ui-menu-submenu-caret") && t.remove()
            })
        },
        _keydown: function (t) {
            var e, i, s, n, o = !0;
            switch (t.keyCode) {
                case I.ui.keyCode.PAGE_UP:
                    this.previousPage(t);
                    break;
                case I.ui.keyCode.PAGE_DOWN:
                    this.nextPage(t);
                    break;
                case I.ui.keyCode.HOME:
                    this._move("first", "first", t);
                    break;
                case I.ui.keyCode.END:
                    this._move("last", "last", t);
                    break;
                case I.ui.keyCode.UP:
                    this.previous(t);
                    break;
                case I.ui.keyCode.DOWN:
                    this.next(t);
                    break;
                case I.ui.keyCode.LEFT:
                    this.collapse(t);
                    break;
                case I.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                    break;
                case I.ui.keyCode.ENTER:
                case I.ui.keyCode.SPACE:
                    this._activate(t);
                    break;
                case I.ui.keyCode.ESCAPE:
                    this.collapse(t);
                    break;
                default:
                    o = !1, i = this.previousFilter || "", n = !1, s = t.keyCode >= 96 && 105 >= t.keyCode ? "" + (t.keyCode - 96) : String.fromCharCode(t.keyCode), clearTimeout(this.filterTimer), s === i ? n = !0 : s = i + s, e = this._filterMenuItems(s), e = n && -1 !== e.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : e, e.length || (s = String.fromCharCode(t.keyCode), e = this._filterMenuItems(s)), e.length ? (this.focus(t, e), this.previousFilter = s, this.filterTimer = this._delay(function () {
                        delete this.previousFilter
                    }, 1e3)) : delete this.previousFilter
            }
            o && t.preventDefault()
        },
        _activate: function (t) {
            this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
        },
        refresh: function () {
            var t, e, i, s, n, o = this, a = this.options.icons.submenu, r = this.element.find(this.options.menus);
            this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), i = r.filter(":not(.ui-menu)").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function () {
                var t = I(this), e = t.prev(), i = I("<span>").data("ui-menu-submenu-caret", !0);
                o._addClass(i, "ui-menu-icon", "ui-icon " + a), e.attr("aria-haspopup", "true").prepend(i), t.attr("aria-labelledby", e.attr("id"))
            }), this._addClass(i, "ui-menu", "ui-widget ui-widget-content ui-front"), t = r.add(this.element), e = t.find(this.options.items), e.not(".ui-menu-item").each(function () {
                var t = I(this);
                o._isDivider(t) && o._addClass(t, "ui-menu-divider", "ui-widget-content")
            }), s = e.not(".ui-menu-item, .ui-menu-divider"), n = s.children().not(".ui-menu").uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            }), this._addClass(s, "ui-menu-item")._addClass(n, "ui-menu-item-wrapper"), e.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !I.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function () {
            return {menu: "menuitem", listbox: "option"}[this.options.role]
        },
        _setOption: function (t, e) {
            if ("icons" === t) {
                var i = this.element.find(".ui-menu-icon");
                this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu)
            }
            this._super(t, e)
        },
        _setOptionDisabled: function (t) {
            this._super(t), this.element.attr("aria-disabled", t + ""), this._toggleClass(null, "ui-state-disabled", !!t)
        },
        focus: function (t, e) {
            var i, s, n;
            this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), s = this.active.children(".ui-menu-item-wrapper"), this._addClass(s, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), n = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(n, null, "ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function () {
                this._close()
            }, this.delay), i = e.children(".ui-menu"), i.length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {item: e})
        },
        _scrollIntoView: function (t) {
            var e, i, s, n, o, a;
            this._hasScroll() && (e = parseFloat(I.css(this.activeMenu[0], "borderTopWidth")) || 0, i = parseFloat(I.css(this.activeMenu[0], "paddingTop")) || 0, s = t.offset().top - this.activeMenu.offset().top - e - i, n = this.activeMenu.scrollTop(), o = this.activeMenu.height(), a = t.outerHeight(), 0 > s ? this.activeMenu.scrollTop(n + s) : s + a > o && this.activeMenu.scrollTop(n + s - o + a))
        },
        blur: function (t, e) {
            e || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", t, {item: this.active}), this.active = null)
        },
        _startOpening: function (t) {
            clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function () {
                this._close(), this._open(t)
            }, this.delay))
        },
        _open: function (t) {
            var e = I.extend({of: this.active}, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(e)
        },
        collapseAll: function (e, i) {
            clearTimeout(this.timer), this.timer = this._delay(function () {
                var t = i ? this.element : I(e && e.target).closest(this.element.find(".ui-menu"));
                t.length || (t = this.element), this._close(t), this.blur(e), this._removeClass(t.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = t
            }, this.delay)
        },
        _close: function (t) {
            t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
        },
        _closeOnDocumentClick: function (t) {
            return !I(t.target).closest(".ui-menu").length
        },
        _isDivider: function (t) {
            return !/[^\-\u2014\u2013\s]/.test(t.text())
        },
        collapse: function (t) {
            var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            e && e.length && (this._close(), this.focus(t, e))
        },
        expand: function (t) {
            var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            e && e.length && (this._open(e.parent()), this._delay(function () {
                this.focus(t, e)
            }))
        },
        next: function (t) {
            this._move("next", "first", t)
        },
        previous: function (t) {
            this._move("prev", "last", t)
        },
        isFirstItem: function () {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function () {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function (t, e, i) {
            var s;
            this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[e]()), this.focus(i, s)
        },
        nextPage: function (t) {
            var e, i, s;
            return this.active ? (this.isLastItem() || (this._hasScroll() ? (i = this.active.offset().top, s = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
                return e = I(this), 0 > e.offset().top - i - s
            }), this.focus(t, e)) : this.focus(t, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]())), void 0) : (this.next(t), void 0)
        },
        previousPage: function (t) {
            var e, i, s;
            return this.active ? (this.isFirstItem() || (this._hasScroll() ? (i = this.active.offset().top, s = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
                return e = I(this), e.offset().top - i + s > 0
            }), this.focus(t, e)) : this.focus(t, this.activeMenu.find(this.options.items).first())), void 0) : (this.next(t), void 0)
        },
        _hasScroll: function () {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function (t) {
            this.active = this.active || I(t.target).closest(".ui-menu-item");
            var e = {item: this.active};
            this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, e)
        },
        _filterMenuItems: function (t) {
            var e = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"), i = RegExp("^" + e, "i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function () {
                return i.test(I.trim(I(this).children(".ui-menu-item-wrapper").text()))
            })
        }
    }), I.widget("ui.autocomplete", {
        version: "1.12.1",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {my: "left top", at: "left bottom", collision: "none"},
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function () {
            var i, s, n, t = this.element[0].nodeName.toLowerCase(), e = "textarea" === t, o = "input" === t;
            this.isMultiLine = e || !o && this._isContentEditable(this.element), this.valueMethod = this.element[e || o ? "val" : "text"], this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, {
                keydown: function (t) {
                    if (this.element.prop("readOnly")) return i = !0, n = !0, s = !0, void 0;
                    i = !1, n = !1, s = !1;
                    var e = I.ui.keyCode;
                    switch (t.keyCode) {
                        case e.PAGE_UP:
                            i = !0, this._move("previousPage", t);
                            break;
                        case e.PAGE_DOWN:
                            i = !0, this._move("nextPage", t);
                            break;
                        case e.UP:
                            i = !0, this._keyEvent("previous", t);
                            break;
                        case e.DOWN:
                            i = !0, this._keyEvent("next", t);
                            break;
                        case e.ENTER:
                            this.menu.active && (i = !0, t.preventDefault(), this.menu.select(t));
                            break;
                        case e.TAB:
                            this.menu.active && this.menu.select(t);
                            break;
                        case e.ESCAPE:
                            this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(t), t.preventDefault());
                            break;
                        default:
                            s = !0, this._searchTimeout(t)
                    }
                }, keypress: function (t) {
                    if (i) return i = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && t.preventDefault(), void 0;
                    if (!s) {
                        var e = I.ui.keyCode;
                        switch (t.keyCode) {
                            case e.PAGE_UP:
                                this._move("previousPage", t);
                                break;
                            case e.PAGE_DOWN:
                                this._move("nextPage", t);
                                break;
                            case e.UP:
                                this._keyEvent("previous", t);
                                break;
                            case e.DOWN:
                                this._keyEvent("next", t)
                        }
                    }
                }, input: function (t) {
                    return n ? (n = !1, t.preventDefault(), void 0) : (this._searchTimeout(t), void 0)
                }, focus: function () {
                    this.selectedItem = null, this.previous = this._value()
                }, blur: function (t) {
                    return this.cancelBlur ? (delete this.cancelBlur, void 0) : (clearTimeout(this.searching), this.close(t), this._change(t), void 0)
                }
            }), this._initSource(), this.menu = I("<ul>").appendTo(this._appendTo()).menu({role: null}).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, {
                mousedown: function (t) {
                    t.preventDefault(), this.cancelBlur = !0, this._delay(function () {
                        delete this.cancelBlur, this.element[0] !== I.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus")
                    })
                }, menufocus: function (t, e) {
                    var i, s;
                    return this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type)) ? (this.menu.blur(), this.document.one("mousemove", function () {
                        I(t.target).trigger(t.originalEvent)
                    }), void 0) : (s = e.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", t, {item: s}) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(s.value), i = e.item.attr("aria-label") || s.value, i && I.trim(i).length && (this.liveRegion.children().hide(), I("<div>").text(i).appendTo(this.liveRegion)), void 0)
                }, menuselect: function (t, e) {
                    var i = e.item.data("ui-autocomplete-item"), s = this.previous;
                    this.element[0] !== I.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = s, this._delay(function () {
                        this.previous = s, this.selectedItem = i
                    })), !1 !== this._trigger("select", t, {item: i}) && this._value(i.value), this.term = this._value(), this.close(t), this.selectedItem = i
                }
            }), this.liveRegion = I("<div>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, {
                beforeunload: function () {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function () {
            clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
        },
        _setOption: function (t, e) {
            this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort()
        },
        _isEventTargetInWidget: function (t) {
            var e = this.menu.element[0];
            return t.target === this.element[0] || t.target === e || I.contains(e, t.target)
        },
        _closeOnClickOutside: function (t) {
            this._isEventTargetInWidget(t) || this.close()
        },
        _appendTo: function () {
            var t = this.options.appendTo;
            return t && (t = t.jquery || t.nodeType ? I(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front, dialog")), t.length || (t = this.document[0].body), t
        },
        _initSource: function () {
            var i, s, n = this;
            I.isArray(this.options.source) ? (i = this.options.source, this.source = function (t, e) {
                e(I.ui.autocomplete.filter(i, t.term))
            }) : "string" == typeof this.options.source ? (s = this.options.source, this.source = function (t, e) {
                n.xhr && n.xhr.abort(), n.xhr = I.ajax({
                    url: s, data: t, dataType: "json", success: function (t) {
                        e(t)
                    }, error: function () {
                        e([])
                    }
                })
            }) : this.source = this.options.source
        },
        _searchTimeout: function (s) {
            clearTimeout(this.searching), this.searching = this._delay(function () {
                var t = this.term === this._value(), e = this.menu.element.is(":visible"), i = s.altKey || s.ctrlKey || s.metaKey || s.shiftKey;
                (!t || t && !e && !i) && (this.selectedItem = null, this.search(null, s))
            }, this.options.delay)
        },
        search: function (t, e) {
            return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : this._trigger("search", e) !== !1 ? this._search(t) : void 0
        },
        _search: function (t) {
            this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({term: t}, this._response())
        },
        _response: function () {
            var e = ++this.requestIndex;
            return I.proxy(function (t) {
                e === this.requestIndex && this.__response(t), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading")
            }, this)
        },
        __response: function (t) {
            t && (t = this._normalize(t)), this._trigger("response", null, {content: t}), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
        },
        close: function (t) {
            this.cancelSearch = !0, this._close(t)
        },
        _close: function (t) {
            this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
        },
        _change: function (t) {
            this.previous !== this._value() && this._trigger("change", t, {item: this.selectedItem})
        },
        _normalize: function (t) {
            return t.length && t[0].label && t[0].value ? t : I.map(t, function (t) {
                return "string" == typeof t ? {label: t, value: t} : I.extend({}, t, {label: t.label || t.value, value: t.value || t.label})
            })
        },
        _suggest: function (t) {
            var e = this.menu.element.empty();
            this._renderMenu(e, t), this.isNewMenu = !0, this.menu.refresh(), e.show(), this._resizeMenu(), e.position(I.extend({of: this.element}, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, {mousedown: "_closeOnClickOutside"})
        },
        _resizeMenu: function () {
            var t = this.menu.element;
            t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function (i, t) {
            var s = this;
            I.each(t, function (t, e) {
                s._renderItemData(i, e)
            })
        },
        _renderItemData: function (t, e) {
            return this._renderItem(t, e).data("ui-autocomplete-item", e)
        },
        _renderItem: function (t, e) {
            return I("<li>").append(I("<div>").text(e.label)).appendTo(t)
        },
        _move: function (t, e) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), this.menu.blur(), void 0) : (this.menu[t](e), void 0) : (this.search(null, e), void 0)
        },
        widget: function () {
            return this.menu.element
        },
        _value: function () {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function (t, e) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault())
        },
        _isContentEditable: function (t) {
            if (!t.length) return !1;
            var e = t.prop("contentEditable");
            return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e
        }
    }), I.extend(I.ui.autocomplete, {
        escapeRegex: function (t) {
            return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        }, filter: function (t, e) {
            var i = RegExp(I.ui.autocomplete.escapeRegex(e), "i");
            return I.grep(t, function (t) {
                return i.test(t.label || t.value || t)
            })
        }
    }), I.widget("ui.autocomplete", I.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.", results: function (t) {
                    return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        }, __response: function (t) {
            var e;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (e = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.children().hide(), I("<div>").text(e).appendTo(this.liveRegion))
        }
    }), I.ui.autocomplete;
    var o = /ui-corner-([a-z]){2,6}/g;
    I.widget("ui.controlgroup", {
        version: "1.12.1",
        defaultElement: "<div>",
        options: {
            direction: "horizontal",
            disabled: null,
            onlyVisible: !0,
            items: {
                button: "input[type=button], input[type=submit], input[type=reset], button, a",
                controlgroupLabel: ".ui-controlgroup-label",
                checkboxradio: "input[type='checkbox'], input[type='radio']",
                selectmenu: "select",
                spinner: ".ui-spinner-input"
            }
        },
        _create: function () {
            this._enhance()
        },
        _enhance: function () {
            this.element.attr("role", "toolbar"), this.refresh()
        },
        _destroy: function () {
            this._callChildMethod("destroy"), this.childWidgets.removeData("ui-controlgroup-data"), this.element.removeAttr("role"), this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()
        },
        _initWidgets: function () {
            var a = this, r = [];
            I.each(this.options.items, function (n, t) {
                var e, o = {};
                return t ? "controlgroupLabel" === n ? (e = a.element.find(t), e.each(function () {
                    var t = I(this);
                    t.children(".ui-controlgroup-label-contents").length || t.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
                }), a._addClass(e, null, "ui-widget ui-widget-content ui-state-default"), r = r.concat(e.get()), void 0) : (I.fn[n] && (o = a["_" + n + "Options"] ? a["_" + n + "Options"]("middle") : {classes: {}}, a.element.find(t).each(function () {
                    var t = I(this), e = t[n]("instance"), i = I.widget.extend({}, o);
                    if ("button" !== n || !t.parent(".ui-spinner").length) {
                        e || (e = t[n]()[n]("instance")), e && (i.classes = a._resolveClassesValues(i.classes, e)), t[n](i);
                        var s = t[n]("widget");
                        I.data(s[0], "ui-controlgroup-data", e ? e : t[n]("instance")), r.push(s[0])
                    }
                })), void 0) : void 0
            }), this.childWidgets = I(I.unique(r)), this._addClass(this.childWidgets, "ui-controlgroup-item")
        },
        _callChildMethod: function (i) {
            this.childWidgets.each(function () {
                var t = I(this), e = t.data("ui-controlgroup-data");
                e && e[i] && e[i]()
            })
        },
        _updateCornerClass: function (t, e) {
            var i = "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all", s = this._buildSimpleOptions(e, "label").classes.label;
            this._removeClass(t, null, i), this._addClass(t, null, s)
        },
        _buildSimpleOptions: function (t, e) {
            var i = "vertical" === this.options.direction, s = {classes: {}};
            return s.classes[e] = {middle: "", first: "ui-corner-" + (i ? "top" : "left"), last: "ui-corner-" + (i ? "bottom" : "right"), only: "ui-corner-all"}[t], s
        },
        _spinnerOptions: function (t) {
            var e = this._buildSimpleOptions(t, "ui-spinner");
            return e.classes["ui-spinner-up"] = "", e.classes["ui-spinner-down"] = "", e
        },
        _buttonOptions: function (t) {
            return this._buildSimpleOptions(t, "ui-button")
        },
        _checkboxradioOptions: function (t) {
            return this._buildSimpleOptions(t, "ui-checkboxradio-label")
        },
        _selectmenuOptions: function (t) {
            var e = "vertical" === this.options.direction;
            return {
                width: e ? "auto" : !1,
                classes: {
                    middle: {"ui-selectmenu-button-open": "", "ui-selectmenu-button-closed": ""},
                    first: {"ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"), "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left")},
                    last: {"ui-selectmenu-button-open": e ? "" : "ui-corner-tr", "ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right")},
                    only: {"ui-selectmenu-button-open": "ui-corner-top", "ui-selectmenu-button-closed": "ui-corner-all"}
                }[t]
            }
        },
        _resolveClassesValues: function (i, s) {
            var n = {};
            return I.each(i, function (t) {
                var e = s.options.classes[t] || "";
                e = I.trim(e.replace(o, "")), n[t] = (e + " " + i[t]).replace(/\s+/g, " ")
            }), n
        },
        _setOption: function (t, e) {
            return "direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction), this._super(t, e), "disabled" === t ? (this._callChildMethod(e ? "disable" : "enable"), void 0) : (this.refresh(), void 0)
        },
        refresh: function () {
            var n, o = this;
            this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), this._initWidgets(), n = this.childWidgets, this.options.onlyVisible && (n = n.filter(":visible")), n.length && (I.each(["first", "last"], function (t, e) {
                var i = n[e]().data("ui-controlgroup-data");
                if (i && o["_" + i.widgetName + "Options"]) {
                    var s = o["_" + i.widgetName + "Options"](1 === n.length ? "only" : e);
                    s.classes = o._resolveClassesValues(s.classes, i), i.element[i.widgetName](s)
                } else o._updateCornerClass(n[e](), e)
            }), this._callChildMethod("refresh"))
        }
    }), I.widget("ui.checkboxradio", [I.ui.formResetMixin, {
        version: "1.12.1", options: {disabled: null, label: null, icon: !0, classes: {"ui-checkboxradio-label": "ui-corner-all", "ui-checkboxradio-icon": "ui-corner-all"}}, _getCreateOptions: function () {
            var t, e, i = this, s = this._super() || {};
            return this._readType(), e = this.element.labels(), this.label = I(e[e.length - 1]), this.label.length || I.error("No label found for checkboxradio widget"), this.originalLabel = "", this.label.contents().not(this.element[0]).each(function () {
                i.originalLabel += 3 === this.nodeType ? I(this).text() : this.outerHTML
            }), this.originalLabel && (s.label = this.originalLabel), t = this.element[0].disabled, null != t && (s.disabled = t), s
        }, _create: function () {
            var t = this.element[0].checked;
            this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), this._enhance(), t && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), this.icon && this._addClass(this.icon, null, "ui-state-hover")), this._on({
                change: "_toggleClasses",
                focus: function () {
                    this._addClass(this.label, null, "ui-state-focus ui-visual-focus")
                },
                blur: function () {
                    this._removeClass(this.label, null, "ui-state-focus ui-visual-focus")
                }
            })
        }, _readType: function () {
            var t = this.element[0].nodeName.toLowerCase();
            this.type = this.element[0].type, "input" === t && /radio|checkbox/.test(this.type) || I.error("Can't create checkboxradio on element.nodeName=" + t + " and element.type=" + this.type)
        }, _enhance: function () {
            this._updateIcon(this.element[0].checked)
        }, widget: function () {
            return this.label
        }, _getRadioGroup: function () {
            var t, e = this.element[0].name, i = "input[name='" + I.ui.escapeSelector(e) + "']";
            return e ? (t = this.form.length ? I(this.form[0].elements).filter(i) : I(i).filter(function () {
                return 0 === I(this).form().length
            }), t.not(this.element)) : I([])
        }, _toggleClasses: function () {
            var t = this.element[0].checked;
            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", t)._toggleClass(this.icon, null, "ui-icon-blank", !t), "radio" === this.type && this._getRadioGroup().each(function () {
                var t = I(this).checkboxradio("instance");
                t && t._removeClass(t.label, "ui-checkboxradio-checked", "ui-state-active")
            })
        }, _destroy: function () {
            this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove())
        }, _setOption: function (t, e) {
            return "label" !== t || e ? (this._super(t, e), "disabled" === t ? (this._toggleClass(this.label, null, "ui-state-disabled", e), this.element[0].disabled = e, void 0) : (this.refresh(), void 0)) : void 0
        }, _updateIcon: function (t) {
            var e = "ui-icon ui-icon-background ";
            this.options.icon ? (this.icon || (this.icon = I("<span>"), this.iconSpace = I("<span> </span>"), this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (e += t ? "ui-icon-check ui-state-checked" : "ui-icon-blank", this._removeClass(this.icon, null, t ? "ui-icon-blank" : "ui-icon-check")) : e += "ui-icon-blank", this._addClass(this.icon, "ui-checkboxradio-icon", e), t || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon)
        }, _updateLabel: function () {
            var t = this.label.contents().not(this.element[0]);
            this.icon && (t = t.not(this.icon[0])), this.iconSpace && (t = t.not(this.iconSpace[0])), t.remove(), this.label.append(this.options.label)
        }, refresh: function () {
            var t = this.element[0].checked, e = this.element[0].disabled;
            this._updateIcon(t), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), null !== this.options.label && this._updateLabel(), e !== this.options.disabled && this._setOptions({disabled: e})
        }
    }]), I.ui.checkboxradio, I.widget("ui.button", {
        version: "1.12.1",
        defaultElement: "<button>",
        options: {classes: {"ui-button": "ui-corner-all"}, disabled: null, icon: null, iconPosition: "beginning", label: null, showLabel: !0},
        _getCreateOptions: function () {
            var t, e = this._super() || {};
            return this.isInput = this.element.is("input"), t = this.element[0].disabled, null != t && (e.disabled = t), this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (e.label = this.originalLabel), e
        },
        _create: function () {
            !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1), this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), this._enhance(), this.element.is("a") && this._on({
                keyup: function (t) {
                    t.keyCode === I.ui.keyCode.SPACE && (t.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click"))
                }
            })
        },
        _enhance: function () {
            this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip())
        },
        _updateTooltip: function () {
            this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label)
        },
        _updateIcon: function (t, e) {
            var i = "iconPosition" !== t, s = i ? this.options.iconPosition : e, n = "top" === s || "bottom" === s;
            this.icon ? i && this._removeClass(this.icon, null, this.options.icon) : (this.icon = I("<span>"), this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), i && this._addClass(this.icon, null, e), this._attachIcon(s), n ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = I("<span> </span>"), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(s))
        },
        _destroy: function () {
            this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), this.hasTitle || this.element.removeAttr("title")
        },
        _attachIconSpace: function (t) {
            this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace)
        },
        _attachIcon: function (t) {
            this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon)
        },
        _setOptions: function (t) {
            var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel, i = void 0 === t.icon ? this.options.icon : t.icon;
            e || i || (t.showLabel = !0), this._super(t)
        },
        _setOption: function (t, e) {
            "icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())), "iconPosition" === t && this._updateIcon(t, e), "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e), this._updateTooltip()), "label" === t && (this.isInput ? this.element.val(e) : (this.element.html(e), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))), this._super(t, e), "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e), this.element[0].disabled = e, e && this.element.blur())
        },
        refresh: function () {
            var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
            t !== this.options.disabled && this._setOptions({disabled: t}), this._updateTooltip()
        }
    }), I.uiBackCompat !== !1 && (I.widget("ui.button", I.ui.button, {
        options: {text: !0, icons: {primary: null, secondary: null}}, _create: function () {
            this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text), !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel), this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, this.options.iconPosition = "end"), this._super()
        }, _setOption: function (t, e) {
            return "text" === t ? (this._super("showLabel", e), void 0) : ("showLabel" === t && (this.options.text = e), "icon" === t && (this.options.icons.primary = e), "icons" === t && (e.primary ? (this._super("icon", e.primary), this._super("iconPosition", "beginning")) : e.secondary && (this._super("icon", e.secondary), this._super("iconPosition", "end"))), this._superApply(arguments), void 0)
        }
    }), I.fn.button = function (t) {
        return function () {
            return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? t.apply(this, arguments) : (I.ui.checkboxradio || I.error("Checkboxradio widget missing"), 0 === arguments.length ? this.checkboxradio({icon: !1}) : this.checkboxradio.apply(this, arguments))
        }
    }(I.fn.button), I.fn.buttonset = function () {
        return I.ui.controlgroup || I.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = {button: arguments[0].items}), this.controlgroup.apply(this, arguments))
    }), I.ui.button, I.extend(I.ui, {datepicker: {version: "1.12.1"}});
    var d;
    I.extend(t.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function () {
            return this.dpDiv
        },
        setDefaults: function (t) {
            return u(this._defaults, t || {}), this
        },
        _attachDatepicker: function (t, e) {
            var i, s, n;
            i = t.nodeName.toLowerCase(), s = "div" === i || "span" === i, t.id || (this.uuid += 1, t.id = "dp" + this.uuid), n = this._newInst(I(t), s), n.settings = I.extend({}, e || {}), "input" === i ? this._connectDatepicker(t, n) : s && this._inlineDatepicker(t, n)
        },
        _newInst: function (t, e) {
            var i = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: i,
                input: t,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: e,
                dpDiv: e ? s(I("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function (t, e) {
            var i = I(t);
            e.append = I([]), e.trigger = I([]), i.hasClass(this.markerClassName) || (this._attachments(i, e), i.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(e), I.data(t, "datepicker", e), e.settings.disabled && this._disableDatepicker(t))
        },
        _attachments: function (t, e) {
            var i, s, n, o = this._get(e, "appendText"), a = this._get(e, "isRTL");
            e.append && e.append.remove(), o && (e.append = I("<span class='" + this._appendClass + "'>" + o + "</span>"), t[a ? "before" : "after"](e.append)), t.off("focus", this._showDatepicker), e.trigger && e.trigger.remove(), i = this._get(e, "showOn"), ("focus" === i || "both" === i) && t.on("focus", this._showDatepicker), ("button" === i || "both" === i) && (s = this._get(e, "buttonText"), n = this._get(e, "buttonImage"), e.trigger = I(this._get(e, "buttonImageOnly") ? I("<img/>").addClass(this._triggerClass).attr({
                src: n,
                alt: s,
                title: s
            }) : I("<button type='button'></button>").addClass(this._triggerClass).html(n ? I("<img/>").attr({src: n, alt: s, title: s}) : s)), t[a ? "before" : "after"](e.trigger), e.trigger.on("click", function () {
                return I.datepicker._datepickerShowing && I.datepicker._lastInput === t[0] ? I.datepicker._hideDatepicker() : I.datepicker._datepickerShowing && I.datepicker._lastInput !== t[0] ? (I.datepicker._hideDatepicker(), I.datepicker._showDatepicker(t[0])) : I.datepicker._showDatepicker(t[0]), !1
            }))
        },
        _autoSize: function (t) {
            if (this._get(t, "autoSize") && !t.inline) {
                var e, i, s, n, o = new Date(2009, 11, 20), a = this._get(t, "dateFormat");
                a.match(/[DM]/) && (e = function (t) {
                    for (i = 0, s = 0, n = 0; t.length > n; n++) t[n].length > i && (i = t[n].length, s = n);
                    return s
                }, o.setMonth(e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), t.input.attr("size", this._formatDate(t, o).length)
            }
        },
        _inlineDatepicker: function (t, e) {
            var i = I(t);
            i.hasClass(this.markerClassName) || (i.addClass(this.markerClassName).append(e.dpDiv), I.data(t, "datepicker", e), this._setDate(e, this._getDefaultDate(e), !0), this._updateDatepicker(e), this._updateAlternate(e), e.settings.disabled && this._disableDatepicker(t), e.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function (t, e, i, s, n) {
            var o, a, r, h, l, c = this._dialogInst;
            return c || (this.uuid += 1, o = "dp" + this.uuid, this._dialogInput = I("<input type='text' id='" + o + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), I("body").append(this._dialogInput), c = this._dialogInst = this._newInst(this._dialogInput, !1), c.settings = {}, I.data(this._dialogInput[0], "datepicker", c)), u(c.settings, s || {}), e = e && e.constructor === Date ? this._formatDate(c, e) : e, this._dialogInput.val(e), this._pos = n ? n.length ? n : [n.pageX, n.pageY] : null, this._pos || (a = document.documentElement.clientWidth, r = document.documentElement.clientHeight, h = document.documentElement.scrollLeft || document.body.scrollLeft, l = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [a / 2 - 100 + h, r / 2 - 150 + l]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), c.settings.onSelect = i, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), I.blockUI && I.blockUI(this.dpDiv), I.data(this._dialogInput[0], "datepicker", c), this
        },
        _destroyDatepicker: function (t) {
            var e, i = I(t), s = I.data(t, "datepicker");
            i.hasClass(this.markerClassName) && (e = t.nodeName.toLowerCase(), I.removeData(t, "datepicker"), "input" === e ? (s.append.remove(), s.trigger.remove(), i.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : ("div" === e || "span" === e) && i.removeClass(this.markerClassName).empty(), d === s && (d = null))
        },
        _enableDatepicker: function (e) {
            var t, i, s = I(e), n = I.data(e, "datepicker");
            s.hasClass(this.markerClassName) && (t = e.nodeName.toLowerCase(), "input" === t ? (e.disabled = !1, n.trigger.filter("button").each(function () {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : ("div" === t || "span" === t) && (i = s.children("." + this._inlineClass), i.children().removeClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = I.map(this._disabledInputs, function (t) {
                return t === e ? null : t
            }))
        },
        _disableDatepicker: function (e) {
            var t, i, s = I(e), n = I.data(e, "datepicker");
            s.hasClass(this.markerClassName) && (t = e.nodeName.toLowerCase(), "input" === t ? (e.disabled = !0, n.trigger.filter("button").each(function () {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : ("div" === t || "span" === t) && (i = s.children("." + this._inlineClass), i.children().addClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = I.map(this._disabledInputs, function (t) {
                return t === e ? null : t
            }), this._disabledInputs[this._disabledInputs.length] = e)
        },
        _isDisabledDatepicker: function (t) {
            if (!t) return !1;
            for (var e = 0; this._disabledInputs.length > e; e++) if (this._disabledInputs[e] === t) return !0;
            return !1
        },
        _getInst: function (t) {
            try {
                return I.data(t, "datepicker")
            } catch (t) {
                throw"Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function (t, e, i) {
            var s, n, o, a, r = this._getInst(t);
            return 2 === arguments.length && "string" == typeof e ? "defaults" === e ? I.extend({}, I.datepicker._defaults) : r ? "all" === e ? I.extend({}, r.settings) : this._get(r, e) : null : (s = e || {}, "string" == typeof e && (s = {}, s[e] = i), r && (this._curInst === r && this._hideDatepicker(), n = this._getDateDatepicker(t, !0), o = this._getMinMaxDate(r, "min"), a = this._getMinMaxDate(r, "max"), u(r.settings, s), null !== o && void 0 !== s.dateFormat && void 0 === s.minDate && (r.settings.minDate = this._formatDate(r, o)), null !== a && void 0 !== s.dateFormat && void 0 === s.maxDate && (r.settings.maxDate = this._formatDate(r, a)), "disabled" in s && (s.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)), this._attachments(I(t), r), this._autoSize(r), this._setDate(r, n), this._updateAlternate(r), this._updateDatepicker(r)), void 0)
        },
        _changeDatepicker: function (t, e, i) {
            this._optionDatepicker(t, e, i)
        },
        _refreshDatepicker: function (t) {
            var e = this._getInst(t);
            e && this._updateDatepicker(e)
        },
        _setDateDatepicker: function (t, e) {
            var i = this._getInst(t);
            i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
        },
        _getDateDatepicker: function (t, e) {
            var i = this._getInst(t);
            return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
        },
        _doKeyDown: function (t) {
            var e, i, s, n = I.datepicker._getInst(t.target), o = !0, a = n.dpDiv.is(".ui-datepicker-rtl");
            if (n._keyEvent = !0, I.datepicker._datepickerShowing) switch (t.keyCode) {
                case 9:
                    I.datepicker._hideDatepicker(), o = !1;
                    break;
                case 13:
                    return s = I("td." + I.datepicker._dayOverClass + ":not(." + I.datepicker._currentClass + ")", n.dpDiv), s[0] && I.datepicker._selectDay(t.target, n.selectedMonth, n.selectedYear, s[0]), e = I.datepicker._get(n, "onSelect"), e ? (i = I.datepicker._formatDate(n), e.apply(n.input ? n.input[0] : null, [i, n])) : I.datepicker._hideDatepicker(), !1;
                case 27:
                    I.datepicker._hideDatepicker();
                    break;
                case 33:
                    I.datepicker._adjustDate(t.target, t.ctrlKey ? -I.datepicker._get(n, "stepBigMonths") : -I.datepicker._get(n, "stepMonths"), "M");
                    break;
                case 34:
                    I.datepicker._adjustDate(t.target, t.ctrlKey ? +I.datepicker._get(n, "stepBigMonths") : +I.datepicker._get(n, "stepMonths"), "M");
                    break;
                case 35:
                    (t.ctrlKey || t.metaKey) && I.datepicker._clearDate(t.target), o = t.ctrlKey || t.metaKey;
                    break;
                case 36:
                    (t.ctrlKey || t.metaKey) && I.datepicker._gotoToday(t.target), o = t.ctrlKey || t.metaKey;
                    break;
                case 37:
                    (t.ctrlKey || t.metaKey) && I.datepicker._adjustDate(t.target, a ? 1 : -1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && I.datepicker._adjustDate(t.target, t.ctrlKey ? -I.datepicker._get(n, "stepBigMonths") : -I.datepicker._get(n, "stepMonths"), "M");
                    break;
                case 38:
                    (t.ctrlKey || t.metaKey) && I.datepicker._adjustDate(t.target, -7, "D"), o = t.ctrlKey || t.metaKey;
                    break;
                case 39:
                    (t.ctrlKey || t.metaKey) && I.datepicker._adjustDate(t.target, a ? -1 : 1, "D"), o = t.ctrlKey || t.metaKey, t.originalEvent.altKey && I.datepicker._adjustDate(t.target, t.ctrlKey ? +I.datepicker._get(n, "stepBigMonths") : +I.datepicker._get(n, "stepMonths"), "M");
                    break;
                case 40:
                    (t.ctrlKey || t.metaKey) && I.datepicker._adjustDate(t.target, 7, "D"), o = t.ctrlKey || t.metaKey;
                    break;
                default:
                    o = !1
            } else 36 === t.keyCode && t.ctrlKey ? I.datepicker._showDatepicker(this) : o = !1;
            o && (t.preventDefault(), t.stopPropagation())
        },
        _doKeyPress: function (t) {
            var e, i, s = I.datepicker._getInst(t.target);
            return I.datepicker._get(s, "constrainInput") ? (e = I.datepicker._possibleChars(I.datepicker._get(s, "dateFormat")), i = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || " " > i || !e || e.indexOf(i) > -1) : void 0
        },
        _doKeyUp: function (t) {
            var e, i = I.datepicker._getInst(t.target);
            if (i.input.val() !== i.lastVal) try {
                e = I.datepicker.parseDate(I.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, I.datepicker._getFormatConfig(i)), e && (I.datepicker._setDateFromField(i), I.datepicker._updateAlternate(i), I.datepicker._updateDatepicker(i))
            } catch (t) {
            }
            return !0
        },
        _showDatepicker: function (t) {
            if (t = t.target || t, "input" !== t.nodeName.toLowerCase() && (t = I("input", t.parentNode)[0]), !I.datepicker._isDisabledDatepicker(t) && I.datepicker._lastInput !== t) {
                var e, i, s, n, o, a, r;
                e = I.datepicker._getInst(t), I.datepicker._curInst && I.datepicker._curInst !== e && (I.datepicker._curInst.dpDiv.stop(!0, !0), e && I.datepicker._datepickerShowing && I.datepicker._hideDatepicker(I.datepicker._curInst.input[0])), i = I.datepicker._get(e, "beforeShow"), s = i ? i.apply(t, [t, e]) : {}, s !== !1 && (u(e.settings, s), e.lastVal = null, I.datepicker._lastInput = t, I.datepicker._setDateFromField(e), I.datepicker._inDialog && (t.value = ""), I.datepicker._pos || (I.datepicker._pos = I.datepicker._findPos(t), I.datepicker._pos[1] += t.offsetHeight), n = !1, I(t).parents().each(function () {
                    return n |= "fixed" === I(this).css("position"), !n
                }), o = {left: I.datepicker._pos[0], top: I.datepicker._pos[1]}, I.datepicker._pos = null, e.dpDiv.empty(), e.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), I.datepicker._updateDatepicker(e), o = I.datepicker._checkOffset(e, o, n), e.dpDiv.css({
                    position: I.datepicker._inDialog && I.blockUI ? "static" : n ? "fixed" : "absolute",
                    display: "none",
                    left: o.left + "px",
                    top: o.top + "px"
                }), e.inline || (a = I.datepicker._get(e, "showAnim"), r = I.datepicker._get(e, "duration"), e.dpDiv.css("z-index", l(I(t)) + 1), I.datepicker._datepickerShowing = !0, I.effects && I.effects.effect[a] ? e.dpDiv.show(a, I.datepicker._get(e, "showOptions"), r) : e.dpDiv[a || "show"](a ? r : null), I.datepicker._shouldFocusInput(e) && e.input.trigger("focus"), I.datepicker._curInst = e))
            }
        },
        _updateDatepicker: function (t) {
            this.maxRows = 4, d = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t);
            var e, i = this._getNumberOfMonths(t), s = i[1], n = 17, o = t.dpDiv.find("." + this._dayOverClass + " a");
            o.length > 0 && a.apply(o.get(0)), t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), s > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", n * s + "em"), t.dpDiv[(1 !== i[0] || 1 !== i[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === I.datepicker._curInst && I.datepicker._datepickerShowing && I.datepicker._shouldFocusInput(t) && t.input.trigger("focus"), t.yearshtml && (e = t.yearshtml, setTimeout(function () {
                e === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), e = t.yearshtml = null
            }, 0))
        },
        _shouldFocusInput: function (t) {
            return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
        },
        _checkOffset: function (t, e, i) {
            var s = t.dpDiv.outerWidth(), n = t.dpDiv.outerHeight(), o = t.input ? t.input.outerWidth() : 0, a = t.input ? t.input.outerHeight() : 0,
                r = document.documentElement.clientWidth + (i ? 0 : I(document).scrollLeft()), h = document.documentElement.clientHeight + (i ? 0 : I(document).scrollTop());
            return e.left -= this._get(t, "isRTL") ? s - o : 0, e.left -= i && e.left === t.input.offset().left ? I(document).scrollLeft() : 0, e.top -= i && e.top === t.input.offset().top + a ? I(document).scrollTop() : 0, e.left -= Math.min(e.left, e.left + s > r && r > s ? Math.abs(e.left + s - r) : 0), e.top -= Math.min(e.top, e.top + n > h && h > n ? Math.abs(n + a) : 0), e
        },
        _findPos: function (t) {
            for (var e, i = this._getInst(t), s = this._get(i, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || I.expr.filters.hidden(t));) t = t[s ? "previousSibling" : "nextSibling"];
            return e = I(t).offset(), [e.left, e.top]
        },
        _hideDatepicker: function (t) {
            var e, i, s, n, o = this._curInst;
            !o || t && o !== I.data(t, "datepicker") || this._datepickerShowing && (e = this._get(o, "showAnim"), i = this._get(o, "duration"), s = function () {
                I.datepicker._tidyDialog(o)
            }, I.effects && (I.effects.effect[e] || I.effects[e]) ? o.dpDiv.hide(e, I.datepicker._get(o, "showOptions"), i, s) : o.dpDiv["slideDown" === e ? "slideUp" : "fadeIn" === e ? "fadeOut" : "hide"](e ? i : null, s), e || s(), this._datepickerShowing = !1, n = this._get(o, "onClose"), n && n.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), I.blockUI && (I.unblockUI(), I("body").append(this.dpDiv))), this._inDialog = !1)
        },
        _tidyDialog: function (t) {
            t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
        },
        _checkExternalClick: function (t) {
            if (I.datepicker._curInst) {
                var e = I(t.target), i = I.datepicker._getInst(e[0]);
                (e[0].id !== I.datepicker._mainDivId && 0 === e.parents("#" + I.datepicker._mainDivId).length && !e.hasClass(I.datepicker.markerClassName) && !e.closest("." + I.datepicker._triggerClass).length && I.datepicker._datepickerShowing && (!I.datepicker._inDialog || !I.blockUI) || e.hasClass(I.datepicker.markerClassName) && I.datepicker._curInst !== i) && I.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function (t, e, i) {
            var s = I(t), n = this._getInst(s[0]);
            this._isDisabledDatepicker(s[0]) || (this._adjustInstDate(n, e + ("M" === i ? this._get(n, "showCurrentAtPos") : 0), i), this._updateDatepicker(n))
        },
        _gotoToday: function (t) {
            var e, i = I(t), s = this._getInst(i[0]);
            this._get(s, "gotoCurrent") && s.currentDay ? (s.selectedDay = s.currentDay, s.drawMonth = s.selectedMonth = s.currentMonth, s.drawYear = s.selectedYear = s.currentYear) : (e = new Date, s.selectedDay = e.getDate(), s.drawMonth = s.selectedMonth = e.getMonth(), s.drawYear = s.selectedYear = e.getFullYear()), this._notifyChange(s), this._adjustDate(i)
        },
        _selectMonthYear: function (t, e, i) {
            var s = I(t), n = this._getInst(s[0]);
            n["selected" + ("M" === i ? "Month" : "Year")] = n["draw" + ("M" === i ? "Month" : "Year")] = parseInt(e.options[e.selectedIndex].value, 10), this._notifyChange(n), this._adjustDate(s)
        },
        _selectDay: function (t, e, i, s) {
            var n, o = I(t);
            I(s).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0]) || (n = this._getInst(o[0]), n.selectedDay = n.currentDay = I("a", s).html(), n.selectedMonth = n.currentMonth = e, n.selectedYear = n.currentYear = i, this._selectDate(t, this._formatDate(n, n.currentDay, n.currentMonth, n.currentYear)))
        },
        _clearDate: function (t) {
            var e = I(t);
            this._selectDate(e, "")
        },
        _selectDate: function (t, e) {
            var i, s = I(t), n = this._getInst(s[0]);
            e = null != e ? e : this._formatDate(n), n.input && n.input.val(e), this._updateAlternate(n), i = this._get(n, "onSelect"), i ? i.apply(n.input ? n.input[0] : null, [e, n]) : n.input && n.input.trigger("change"), n.inline ? this._updateDatepicker(n) : (this._hideDatepicker(), this._lastInput = n.input[0], "object" != typeof n.input[0] && n.input.trigger("focus"), this._lastInput = null)
        },
        _updateAlternate: function (t) {
            var e, i, s, n = this._get(t, "altField");
            n && (e = this._get(t, "altFormat") || this._get(t, "dateFormat"), i = this._getDate(t), s = this.formatDate(e, i, this._getFormatConfig(t)), I(n).val(s))
        },
        noWeekends: function (t) {
            var e = t.getDay();
            return [e > 0 && 6 > e, ""]
        },
        iso8601Week: function (t) {
            var e, i = new Date(t.getTime());
            return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1
        },
        parseDate: function (i, a, t) {
            if (null == i || null == a) throw"Invalid arguments";
            if (a = "object" == typeof a ? "" + a : a + "", "" === a) return null;
            var s, e, n, o, r = 0, h = (t ? t.shortYearCutoff : null) || this._defaults.shortYearCutoff, l = "string" != typeof h ? h : (new Date).getFullYear() % 100 + parseInt(h, 10),
                c = (t ? t.dayNamesShort : null) || this._defaults.dayNamesShort, u = (t ? t.dayNames : null) || this._defaults.dayNames, d = (t ? t.monthNamesShort : null) || this._defaults.monthNamesShort,
                p = (t ? t.monthNames : null) || this._defaults.monthNames, f = -1, g = -1, m = -1, _ = -1, v = !1, b = function (t) {
                    var e = i.length > s + 1 && i.charAt(s + 1) === t;
                    return e && s++, e
                }, y = function (t) {
                    var e = b(t), i = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2, s = "y" === t ? i : 1, n = RegExp("^\\d{" + s + "," + i + "}"), o = a.substring(r).match(n);
                    if (!o) throw"Missing number at position " + r;
                    return r += o[0].length, parseInt(o[0], 10)
                }, w = function (t, e, i) {
                    var s = -1, n = I.map(b(t) ? i : e, function (t, e) {
                        return [[e, t]]
                    }).sort(function (t, e) {
                        return -(t[1].length - e[1].length)
                    });
                    if (I.each(n, function (t, e) {
                        var i = e[1];
                        return a.substr(r, i.length).toLowerCase() === i.toLowerCase() ? (s = e[0], r += i.length, !1) : void 0
                    }), -1 !== s) return s + 1;
                    throw"Unknown name at position " + r
                }, k = function () {
                    if (a.charAt(r) !== i.charAt(s)) throw"Unexpected literal at position " + r;
                    r++
                };
            for (s = 0; i.length > s; s++) if (v) "'" !== i.charAt(s) || b("'") ? k() : v = !1; else switch (i.charAt(s)) {
                case"d":
                    m = y("d");
                    break;
                case"D":
                    w("D", c, u);
                    break;
                case"o":
                    _ = y("o");
                    break;
                case"m":
                    g = y("m");
                    break;
                case"M":
                    g = w("M", d, p);
                    break;
                case"y":
                    f = y("y");
                    break;
                case"@":
                    o = new Date(y("@")), f = o.getFullYear(), g = o.getMonth() + 1, m = o.getDate();
                    break;
                case"!":
                    o = new Date((y("!") - this._ticksTo1970) / 1e4), f = o.getFullYear(), g = o.getMonth() + 1, m = o.getDate();
                    break;
                case"'":
                    b("'") ? k() : v = !0;
                    break;
                default:
                    k()
            }
            if (a.length > r && (n = a.substr(r), !/^\s+/.test(n))) throw"Extra/unparsed characters found in date: " + n;
            if (-1 === f ? f = (new Date).getFullYear() : 100 > f && (f += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (l >= f ? 0 : -100)), _ > -1) for (g = 1, m = _; ;) {
                if (e = this._getDaysInMonth(f, g - 1), e >= m) break;
                g++, m -= e
            }
            if (o = this._daylightSavingAdjust(new Date(f, g - 1, m)), o.getFullYear() !== f || o.getMonth() + 1 !== g || o.getDate() !== m) throw"Invalid date";
            return o
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function (i, t, e) {
            if (!t) return "";
            var s, n = (e ? e.dayNamesShort : null) || this._defaults.dayNamesShort, o = (e ? e.dayNames : null) || this._defaults.dayNames, a = (e ? e.monthNamesShort : null) || this._defaults.monthNamesShort,
                r = (e ? e.monthNames : null) || this._defaults.monthNames, h = function (t) {
                    var e = i.length > s + 1 && i.charAt(s + 1) === t;
                    return e && s++, e
                }, l = function (t, e, i) {
                    var s = "" + e;
                    if (h(t)) for (; i > s.length;) s = "0" + s;
                    return s
                }, c = function (t, e, i, s) {
                    return h(t) ? s[e] : i[e]
                }, u = "", d = !1;
            if (t) for (s = 0; i.length > s; s++) if (d) "'" !== i.charAt(s) || h("'") ? u += i.charAt(s) : d = !1; else switch (i.charAt(s)) {
                case"d":
                    u += l("d", t.getDate(), 2);
                    break;
                case"D":
                    u += c("D", t.getDay(), n, o);
                    break;
                case"o":
                    u += l("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                    break;
                case"m":
                    u += l("m", t.getMonth() + 1, 2);
                    break;
                case"M":
                    u += c("M", t.getMonth(), a, r);
                    break;
                case"y":
                    u += h("y") ? t.getFullYear() : (10 > t.getFullYear() % 100 ? "0" : "") + t.getFullYear() % 100;
                    break;
                case"@":
                    u += t.getTime();
                    break;
                case"!":
                    u += 1e4 * t.getTime() + this._ticksTo1970;
                    break;
                case"'":
                    h("'") ? u += "'" : d = !0;
                    break;
                default:
                    u += i.charAt(s)
            }
            return u
        },
        _possibleChars: function (i) {
            var s, t = "", e = !1, n = function (t) {
                var e = i.length > s + 1 && i.charAt(s + 1) === t;
                return e && s++, e
            };
            for (s = 0; i.length > s; s++) if (e) "'" !== i.charAt(s) || n("'") ? t += i.charAt(s) : e = !1; else switch (i.charAt(s)) {
                case"d":
                case"m":
                case"y":
                case"@":
                    t += "0123456789";
                    break;
                case"D":
                case"M":
                    return null;
                case"'":
                    n("'") ? t += "'" : e = !0;
                    break;
                default:
                    t += i.charAt(s)
            }
            return t
        },
        _get: function (t, e) {
            return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e]
        },
        _setDateFromField: function (t, e) {
            if (t.input.val() !== t.lastVal) {
                var i = this._get(t, "dateFormat"), s = t.lastVal = t.input ? t.input.val() : null, n = this._getDefaultDate(t), o = n, a = this._getFormatConfig(t);
                try {
                    o = this.parseDate(i, s, a) || n
                } catch (t) {
                    s = e ? "" : s
                }
                t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = s ? o.getDate() : 0, t.currentMonth = s ? o.getMonth() : 0, t.currentYear = s ? o.getFullYear() : 0, this._adjustInstDate(t)
            }
        },
        _getDefaultDate: function (t) {
            return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
        },
        _determineDate: function (r, t, e) {
            var i = function (t) {
                var e = new Date;
                return e.setDate(e.getDate() + t), e
            }, s = function (t) {
                try {
                    return I.datepicker.parseDate(I.datepicker._get(r, "dateFormat"), t, I.datepicker._getFormatConfig(r))
                } catch (t) {
                }
                for (var e = (t.toLowerCase().match(/^c/) ? I.datepicker._getDate(r) : null) || new Date, i = e.getFullYear(), s = e.getMonth(), n = e.getDate(), o = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, a = o.exec(t); a;) {
                    switch (a[2] || "d") {
                        case"d":
                        case"D":
                            n += parseInt(a[1], 10);
                            break;
                        case"w":
                        case"W":
                            n += 7 * parseInt(a[1], 10);
                            break;
                        case"m":
                        case"M":
                            s += parseInt(a[1], 10), n = Math.min(n, I.datepicker._getDaysInMonth(i, s));
                            break;
                        case"y":
                        case"Y":
                            i += parseInt(a[1], 10), n = Math.min(n, I.datepicker._getDaysInMonth(i, s))
                    }
                    a = o.exec(t)
                }
                return new Date(i, s, n)
            }, n = null == t || "" === t ? e : "string" == typeof t ? s(t) : "number" == typeof t ? isNaN(t) ? e : i(t) : new Date(t.getTime());
            return n = n && "Invalid Date" == "" + n ? e : n, n && (n.setHours(0), n.setMinutes(0), n.setSeconds(0), n.setMilliseconds(0)), this._daylightSavingAdjust(n)
        },
        _daylightSavingAdjust: function (t) {
            return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
        },
        _setDate: function (t, e, i) {
            var s = !e, n = t.selectedMonth, o = t.selectedYear, a = this._restrictMinMax(t, this._determineDate(t, e, new Date));
            t.selectedDay = t.currentDay = a.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth(), t.drawYear = t.selectedYear = t.currentYear = a.getFullYear(), n === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(s ? "" : this._formatDate(t))
        },
        _getDate: function (t) {
            var e = !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
            return e
        },
        _attachHandlers: function (t) {
            var e = this._get(t, "stepMonths"), i = "#" + t.id.replace(/\\\\/g, "\\");
            t.dpDiv.find("[data-handler]").map(function () {
                var t = {
                    prev: function () {
                        I.datepicker._adjustDate(i, -e, "M")
                    }, next: function () {
                        I.datepicker._adjustDate(i, +e, "M")
                    }, hide: function () {
                        I.datepicker._hideDatepicker()
                    }, today: function () {
                        I.datepicker._gotoToday(i)
                    }, selectDay: function () {
                        return I.datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                    }, selectMonth: function () {
                        return I.datepicker._selectMonthYear(i, this, "M"), !1
                    }, selectYear: function () {
                        return I.datepicker._selectMonthYear(i, this, "Y"), !1
                    }
                };
                I(this).on(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function (t) {
            var e, i, s, n, o, a, r, h, l, c, u, d, p, f, g, m, _, v, b, y, w, k, x, C, D, I, T, P, M, S, H, z, O, A, N, W, E, F, L, R = new Date,
                B = this._daylightSavingAdjust(new Date(R.getFullYear(), R.getMonth(), R.getDate())), Y = this._get(t, "isRTL"), j = this._get(t, "showButtonPanel"), q = this._get(t, "hideIfNoPrevNext"),
                K = this._get(t, "navigationAsDateFormat"), U = this._getNumberOfMonths(t), V = this._get(t, "showCurrentAtPos"), $ = this._get(t, "stepMonths"), X = 1 !== U[0] || 1 !== U[1],
                G = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)), Q = this._getMinMaxDate(t, "min"), J = this._getMinMaxDate(t, "max"),
                Z = t.drawMonth - V, tt = t.drawYear;
            if (0 > Z && (Z += 12, tt--), J) for (e = this._daylightSavingAdjust(new Date(J.getFullYear(), J.getMonth() - U[0] * U[1] + 1, J.getDate())), e = Q && Q > e ? Q : e; this._daylightSavingAdjust(new Date(tt, Z, 1)) > e;) Z--, 0 > Z && (Z = 11, tt--);
            for (t.drawMonth = Z, t.drawYear = tt, i = this._get(t, "prevText"), i = K ? this.formatDate(i, this._daylightSavingAdjust(new Date(tt, Z - $, 1)), this._getFormatConfig(t)) : i, s = this._canAdjustMonth(t, -1, tt, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>" : q ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(t, "nextText"), n = K ? this.formatDate(n, this._daylightSavingAdjust(new Date(tt, Z + $, 1)), this._getFormatConfig(t)) : n, o = this._canAdjustMonth(t, 1, tt, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>" : q ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>", a = this._get(t, "currentText"), r = this._get(t, "gotoCurrent") && t.currentDay ? G : B, a = K ? this.formatDate(a, r, this._getFormatConfig(t)) : a, h = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", l = j ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Y ? h : "") + (this._isInRange(t, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + a + "</button>" : "") + (Y ? "" : h) + "</div>" : "", c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, u = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), g = this._get(t, "monthNamesShort"), m = this._get(t, "beforeShowDay"), _ = this._get(t, "showOtherMonths"), v = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), y = "", k = 0; U[0] > k; k++) {
                for (x = "", this.maxRows = 4, C = 0; U[1] > C; C++) {
                    if (D = this._daylightSavingAdjust(new Date(tt, Z, t.selectedDay)), I = " ui-corner-all", T = "", X) {
                        if (T += "<div class='ui-datepicker-group", U[1] > 1) switch (C) {
                            case 0:
                                T += " ui-datepicker-group-first", I = " ui-corner-" + (Y ? "right" : "left");
                                break;
                            case U[1] - 1:
                                T += " ui-datepicker-group-last", I = " ui-corner-" + (Y ? "left" : "right");
                                break;
                            default:
                                T += " ui-datepicker-group-middle", I = ""
                        }
                        T += "'>"
                    }
                    for (T += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + I + "'>" + (/all|left/.test(I) && 0 === k ? Y ? o : s : "") + (/all|right/.test(I) && 0 === k ? Y ? s : o : "") + this._generateMonthYearHeader(t, Z, tt, Q, J, k > 0 || C > 0, f, g) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", P = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; 7 > w; w++) M = (w + c) % 7, P += "<th scope='col'" + ((w + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + d[M] + "'>" + p[M] + "</span></th>";
                    for (T += P + "</tr></thead><tbody>", S = this._getDaysInMonth(tt, Z), tt === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, S)), H = (this._getFirstDayOfMonth(tt, Z) - c + 7) % 7, z = Math.ceil((H + S) / 7), O = X ? this.maxRows > z ? this.maxRows : z : z, this.maxRows = O, A = this._daylightSavingAdjust(new Date(tt, Z, 1 - H)), N = 0; O > N; N++) {
                        for (T += "<tr>", W = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(A) + "</td>" : "", w = 0; 7 > w; w++) E = m ? m.apply(t.input ? t.input[0] : null, [A]) : [!0, ""], F = A.getMonth() !== Z, L = F && !v || !E[0] || Q && Q > A || J && A > J, W += "<td class='" + ((w + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (F ? " ui-datepicker-other-month" : "") + (A.getTime() === D.getTime() && Z === t.selectedMonth && t._keyEvent || b.getTime() === A.getTime() && b.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (L ? " " + this._unselectableClass + " ui-state-disabled" : "") + (F && !_ ? "" : " " + E[1] + (A.getTime() === G.getTime() ? " " + this._currentClass : "") + (A.getTime() === B.getTime() ? " ui-datepicker-today" : "")) + "'" + (F && !_ || !E[2] ? "" : " title='" + E[2].replace(/'/g, "&#39;") + "'") + (L ? "" : " data-handler='selectDay' data-event='click' data-month='" + A.getMonth() + "' data-year='" + A.getFullYear() + "'") + ">" + (F && !_ ? "&#xa0;" : L ? "<span class='ui-state-default'>" + A.getDate() + "</span>" : "<a class='ui-state-default" + (A.getTime() === B.getTime() ? " ui-state-highlight" : "") + (A.getTime() === G.getTime() ? " ui-state-active" : "") + (F ? " ui-priority-secondary" : "") + "' href='#'>" + A.getDate() + "</a>") + "</td>", A.setDate(A.getDate() + 1), A = this._daylightSavingAdjust(A);
                        T += W + "</tr>"
                    }
                    Z++, Z > 11 && (Z = 0, tt++), T += "</tbody></table>" + (X ? "</div>" + (U[0] > 0 && C === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += T
                }
                y += x
            }
            return y += l, t._keyEvent = !1, y
        },
        _generateMonthYearHeader: function (t, e, i, s, n, o, a, r) {
            var h, l, c, u, d, p, f, g, m = this._get(t, "changeMonth"), _ = this._get(t, "changeYear"), v = this._get(t, "showMonthAfterYear"), b = "<div class='ui-datepicker-title'>", y = "";
            if (o || !m) y += "<span class='ui-datepicker-month'>" + a[e] + "</span>"; else {
                for (h = s && s.getFullYear() === i, l = n && n.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; 12 > c; c++) (!h || c >= s.getMonth()) && (!l || n.getMonth() >= c) && (y += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + r[c] + "</option>");
                y += "</select>"
            }
            if (v || (b += y + (!o && m && _ ? "" : "&#xa0;")), !t.yearshtml) if (t.yearshtml = "", o || !_) b += "<span class='ui-datepicker-year'>" + i + "</span>"; else {
                for (u = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), p = function (t) {
                    var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
                    return isNaN(e) ? d : e
                }, f = p(u[0]), g = Math.max(f, p(u[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, g = n ? Math.min(g, n.getFullYear()) : g, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; g >= f; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null
            }
            return b += this._get(t, "yearSuffix"), v && (b += (!o && m && _ ? "" : "&#xa0;") + y), b += "</div>"
        },
        _adjustInstDate: function (t, e, i) {
            var s = t.selectedYear + ("Y" === i ? e : 0), n = t.selectedMonth + ("M" === i ? e : 0), o = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0),
                a = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, o)));
            t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t)
        },
        _restrictMinMax: function (t, e) {
            var i = this._getMinMaxDate(t, "min"), s = this._getMinMaxDate(t, "max"), n = i && i > e ? i : e;
            return s && n > s ? s : n
        },
        _notifyChange: function (t) {
            var e = this._get(t, "onChangeMonthYear");
            e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
        },
        _getNumberOfMonths: function (t) {
            var e = this._get(t, "numberOfMonths");
            return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
        },
        _getMinMaxDate: function (t, e) {
            return this._determineDate(t, this._get(t, e + "Date"), null)
        },
        _getDaysInMonth: function (t, e) {
            return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
        },
        _getFirstDayOfMonth: function (t, e) {
            return new Date(t, e, 1).getDay()
        },
        _canAdjustMonth: function (t, e, i, s) {
            var n = this._getNumberOfMonths(t), o = this._daylightSavingAdjust(new Date(i, s + (0 > e ? e : n[0] * n[1]), 1));
            return 0 > e && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o)
        },
        _isInRange: function (t, e) {
            var i, s, n = this._getMinMaxDate(t, "min"), o = this._getMinMaxDate(t, "max"), a = null, r = null, h = this._get(t, "yearRange");
            return h && (i = h.split(":"), s = (new Date).getFullYear(), a = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (a += s), i[1].match(/[+\-].*/) && (r += s)), (!n || e.getTime() >= n.getTime()) && (!o || e.getTime() <= o.getTime()) && (!a || e.getFullYear() >= a) && (!r || r >= e.getFullYear())
        },
        _getFormatConfig: function (t) {
            var e = this._get(t, "shortYearCutoff");
            return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), {
                shortYearCutoff: e,
                dayNamesShort: this._get(t, "dayNamesShort"),
                dayNames: this._get(t, "dayNames"),
                monthNamesShort: this._get(t, "monthNamesShort"),
                monthNames: this._get(t, "monthNames")
            }
        },
        _formatDate: function (t, e, i, s) {
            e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
            var n = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(s, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
            return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t))
        }
    }), I.fn.datepicker = function (t) {
        if (!this.length) return this;
        I.datepicker.initialized || (I(document).on("mousedown", I.datepicker._checkExternalClick), I.datepicker.initialized = !0), 0 === I("#" + I.datepicker._mainDivId).length && I("body").append(I.datepicker.dpDiv);
        var e = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? I.datepicker["_" + t + "Datepicker"].apply(I.datepicker, [this[0]].concat(e)) : this.each(function () {
            "string" == typeof t ? I.datepicker["_" + t + "Datepicker"].apply(I.datepicker, [this].concat(e)) : I.datepicker._attachDatepicker(this, t)
        }) : I.datepicker["_" + t + "Datepicker"].apply(I.datepicker, [this[0]].concat(e))
    }, I.datepicker = new t, I.datepicker.initialized = !1, I.datepicker.uuid = (new Date).getTime(), I.datepicker.version = "1.12.1", I.datepicker, I.widget("ui.dialog", {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            classes: {"ui-dialog": "ui-corner-all", "ui-dialog-titlebar": "ui-corner-all"},
            closeOnEscape: !0,
            closeText: "Close",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center", at: "center", of: window, collision: "fit", using: function (t) {
                    var e = I(this).css(t).offset().top;
                    0 > e && I(this).css("top", t.top - e)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        sizeRelatedOptions: {buttons: !0, height: !0, maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0, width: !0},
        resizableRelatedOptions: {maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0},
        _create: function () {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            }, this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            }, this.originalTitle = this.element.attr("title"), null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle), this.options.disabled && (this.options.disabled = !1), this._createWrapper(), this.element.show().removeAttr("title").appendTo(this.uiDialog), this._addClass("ui-dialog-content", "ui-widget-content"), this._createTitlebar(), this._createButtonPane(), this.options.draggable && I.fn.draggable && this._makeDraggable(), this.options.resizable && I.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus()
        },
        _init: function () {
            this.options.autoOpen && this.open()
        },
        _appendTo: function () {
            var t = this.options.appendTo;
            return t && (t.jquery || t.nodeType) ? I(t) : this.document.find(t || "body").eq(0)
        },
        _destroy: function () {
            var t, e = this.originalPosition;
            this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().css(this.originalCss).detach(), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), t = e.parent.children().eq(e.index), t.length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
        },
        widget: function () {
            return this.uiDialog
        },
        disable: I.noop,
        enable: I.noop,
        close: function (t) {
            var e = this;
            this._isOpen && this._trigger("beforeClose", t) !== !1 && (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || I.ui.safeBlur(I.ui.safeActiveElement(this.document[0])), this._hide(this.uiDialog, this.options.hide, function () {
                e._trigger("close", t)
            }))
        },
        isOpen: function () {
            return this._isOpen
        },
        moveToTop: function () {
            this._moveToTop()
        },
        _moveToTop: function (t, e) {
            var i = !1, s = this.uiDialog.siblings(".ui-front:visible").map(function () {
                return +I(this).css("z-index")
            }).get(), n = Math.max.apply(null, s);
            return n >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", n + 1), i = !0), i && !e && this._trigger("focus", t), i
        },
        open: function () {
            var t = this;
            return this._isOpen ? (this._moveToTop() && this._focusTabbable(), void 0) : (this._isOpen = !0, this.opener = I(I.ui.safeActiveElement(this.document[0])), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function () {
                t._focusTabbable(), t._trigger("focus")
            }), this._makeFocusTarget(), this._trigger("open"), void 0)
        },
        _focusTabbable: function () {
            var t = this._focusedElement;
            t || (t = this.element.find("[autofocus]")), t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).trigger("focus")
        },
        _keepFocus: function (t) {
            function e() {
                var t = I.ui.safeActiveElement(this.document[0]), e = this.uiDialog[0] === t || I.contains(this.uiDialog[0], t);
                e || this._focusTabbable()
            }

            t.preventDefault(), e.call(this), this._delay(e)
        },
        _createWrapper: function () {
            this.uiDialog = I("<div>").hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo()), this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"), this._on(this.uiDialog, {
                keydown: function (t) {
                    if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === I.ui.keyCode.ESCAPE) return t.preventDefault(), this.close(t), void 0;
                    if (t.keyCode === I.ui.keyCode.TAB && !t.isDefaultPrevented()) {
                        var e = this.uiDialog.find(":tabbable"), i = e.filter(":first"), s = e.filter(":last");
                        t.target !== s[0] && t.target !== this.uiDialog[0] || t.shiftKey ? t.target !== i[0] && t.target !== this.uiDialog[0] || !t.shiftKey || (this._delay(function () {
                            s.trigger("focus")
                        }), t.preventDefault()) : (this._delay(function () {
                            i.trigger("focus")
                        }), t.preventDefault())
                    }
                }, mousedown: function (t) {
                    this._moveToTop(t) && this._focusTabbable()
                }
            }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({"aria-describedby": this.element.uniqueId().attr("id")})
        },
        _createTitlebar: function () {
            var t;
            this.uiDialogTitlebar = I("<div>"), this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"), this._on(this.uiDialogTitlebar, {
                mousedown: function (t) {
                    I(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus")
                }
            }), this.uiDialogTitlebarClose = I("<button type='button'></button>").button({
                label: I("<a>").text(this.options.closeText).html(),
                icon: "ui-icon-closethick",
                showLabel: !1
            }).appendTo(this.uiDialogTitlebar), this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"), this._on(this.uiDialogTitlebarClose, {
                click: function (t) {
                    t.preventDefault(), this.close(t)
                }
            }), t = I("<span>").uniqueId().prependTo(this.uiDialogTitlebar), this._addClass(t, "ui-dialog-title"), this._title(t), this.uiDialogTitlebar.prependTo(this.uiDialog), this.uiDialog.attr({"aria-labelledby": t.attr("id")})
        },
        _title: function (t) {
            this.options.title ? t.text(this.options.title) : t.html("&#160;")
        },
        _createButtonPane: function () {
            this.uiDialogButtonPane = I("<div>"), this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"), this.uiButtonSet = I("<div>").appendTo(this.uiDialogButtonPane), this._addClass(this.uiButtonSet, "ui-dialog-buttonset"), this._createButtons()
        },
        _createButtons: function () {
            var n = this, t = this.options.buttons;
            return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), I.isEmptyObject(t) || I.isArray(t) && !t.length ? (this._removeClass(this.uiDialog, "ui-dialog-buttons"), void 0) : (I.each(t, function (t, e) {
                var i, s;
                e = I.isFunction(e) ? {click: e, text: t} : e, e = I.extend({type: "button"}, e), i = e.click, s = {
                    icon: e.icon,
                    iconPosition: e.iconPosition,
                    showLabel: e.showLabel,
                    icons: e.icons,
                    text: e.text
                }, delete e.click, delete e.icon, delete e.iconPosition, delete e.showLabel, delete e.icons, "boolean" == typeof e.text && delete e.text, I("<button></button>", e).button(s).appendTo(n.uiButtonSet).on("click", function () {
                    i.apply(n.element[0], arguments)
                })
            }), this._addClass(this.uiDialog, "ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog), void 0)
        },
        _makeDraggable: function () {
            function n(t) {
                return {position: t.position, offset: t.offset}
            }

            var o = this, a = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close", handle: ".ui-dialog-titlebar", containment: "document", start: function (t, e) {
                    o._addClass(I(this), "ui-dialog-dragging"), o._blockFrames(), o._trigger("dragStart", t, n(e))
                }, drag: function (t, e) {
                    o._trigger("drag", t, n(e))
                }, stop: function (t, e) {
                    var i = e.offset.left - o.document.scrollLeft(), s = e.offset.top - o.document.scrollTop();
                    a.position = {
                        my: "left top",
                        at: "left" + (i >= 0 ? "+" : "") + i + " " + "top" + (s >= 0 ? "+" : "") + s,
                        of: o.window
                    }, o._removeClass(I(this), "ui-dialog-dragging"), o._unblockFrames(), o._trigger("dragStop", t, n(e))
                }
            })
        },
        _makeResizable: function () {
            function o(t) {
                return {originalPosition: t.originalPosition, originalSize: t.originalSize, position: t.position, size: t.size}
            }

            var a = this, r = this.options, t = r.resizable, e = this.uiDialog.css("position"), i = "string" == typeof t ? t : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: r.maxWidth,
                maxHeight: r.maxHeight,
                minWidth: r.minWidth,
                minHeight: this._minHeight(),
                handles: i,
                start: function (t, e) {
                    a._addClass(I(this), "ui-dialog-resizing"), a._blockFrames(), a._trigger("resizeStart", t, o(e))
                },
                resize: function (t, e) {
                    a._trigger("resize", t, o(e))
                },
                stop: function (t, e) {
                    var i = a.uiDialog.offset(), s = i.left - a.document.scrollLeft(), n = i.top - a.document.scrollTop();
                    r.height = a.uiDialog.height(), r.width = a.uiDialog.width(), r.position = {
                        my: "left top",
                        at: "left" + (s >= 0 ? "+" : "") + s + " " + "top" + (n >= 0 ? "+" : "") + n,
                        of: a.window
                    }, a._removeClass(I(this), "ui-dialog-resizing"), a._unblockFrames(), a._trigger("resizeStop", t, o(e))
                }
            }).css("position", e)
        },
        _trackFocus: function () {
            this._on(this.widget(), {
                focusin: function (t) {
                    this._makeFocusTarget(), this._focusedElement = I(t.target)
                }
            })
        },
        _makeFocusTarget: function () {
            this._untrackInstance(), this._trackingInstances().unshift(this)
        },
        _untrackInstance: function () {
            var t = this._trackingInstances(), e = I.inArray(this, t);
            -1 !== e && t.splice(e, 1)
        },
        _trackingInstances: function () {
            var t = this.document.data("ui-dialog-instances");
            return t || (t = [], this.document.data("ui-dialog-instances", t)), t
        },
        _minHeight: function () {
            var t = this.options;
            return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
        },
        _position: function () {
            var t = this.uiDialog.is(":visible");
            t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide()
        },
        _setOptions: function (t) {
            var i = this, s = !1, n = {};
            I.each(t, function (t, e) {
                i._setOption(t, e), t in i.sizeRelatedOptions && (s = !0), t in i.resizableRelatedOptions && (n[t] = e)
            }), s && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", n)
        },
        _setOption: function (t, e) {
            var i, s, n = this.uiDialog;
            "disabled" !== t && (this._super(t, e), "appendTo" === t && this.uiDialog.appendTo(this._appendTo()), "buttons" === t && this._createButtons(), "closeText" === t && this.uiDialogTitlebarClose.button({label: I("<a>").text("" + this.options.closeText).html()}), "draggable" === t && (i = n.is(":data(ui-draggable)"), i && !e && n.draggable("destroy"), !i && e && this._makeDraggable()), "position" === t && this._position(), "resizable" === t && (s = n.is(":data(ui-resizable)"), s && !e && n.resizable("destroy"), s && "string" == typeof e && n.resizable("option", "handles", e), s || e === !1 || this._makeResizable()), "title" === t && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        },
        _size: function () {
            var t, e, i, s = this.options;
            this.element.show().css({width: "auto", minHeight: 0, maxHeight: "none", height: 0}), s.minWidth > s.width && (s.width = s.minWidth), t = this.uiDialog.css({
                height: "auto",
                width: s.width
            }).outerHeight(), e = Math.max(0, s.minHeight - t), i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - t) : "none", "auto" === s.height ? this.element.css({
                minHeight: e,
                maxHeight: i,
                height: "auto"
            }) : this.element.height(Math.max(0, s.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function () {
            this.iframeBlocks = this.document.find("iframe").map(function () {
                var t = I(this);
                return I("<div>").css({position: "absolute", width: t.outerWidth(), height: t.outerHeight()}).appendTo(t.parent()).offset(t.offset())[0]
            })
        },
        _unblockFrames: function () {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _allowInteraction: function (t) {
            return I(t.target).closest(".ui-dialog").length ? !0 : !!I(t.target).closest(".ui-datepicker").length
        },
        _createOverlay: function () {
            if (this.options.modal) {
                var e = !0;
                this._delay(function () {
                    e = !1
                }), this.document.data("ui-dialog-overlays") || this._on(this.document, {
                    focusin: function (t) {
                        e || this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable())
                    }
                }), this.overlay = I("<div>").appendTo(this._appendTo()), this._addClass(this.overlay, null, "ui-widget-overlay ui-front"), this._on(this.overlay, {mousedown: "_keepFocus"}), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
            }
        },
        _destroyOverlay: function () {
            if (this.options.modal && this.overlay) {
                var t = this.document.data("ui-dialog-overlays") - 1;
                t ? this.document.data("ui-dialog-overlays", t) : (this._off(this.document, "focusin"), this.document.removeData("ui-dialog-overlays")), this.overlay.remove(), this.overlay = null
            }
        }
    }), I.uiBackCompat !== !1 && I.widget("ui.dialog", I.ui.dialog, {
        options: {dialogClass: ""}, _createWrapper: function () {
            this._super(), this.uiDialog.addClass(this.options.dialogClass)
        }, _setOption: function (t, e) {
            "dialogClass" === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e), this._superApply(arguments)
        }
    }), I.ui.dialog, I.widget("ui.progressbar", {
        version: "1.12.1",
        options: {classes: {"ui-progressbar": "ui-corner-all", "ui-progressbar-value": "ui-corner-left", "ui-progressbar-complete": "ui-corner-right"}, max: 100, value: 0, change: null, complete: null},
        min: 0,
        _create: function () {
            this.oldValue = this.options.value = this._constrainedValue(), this.element.attr({
                role: "progressbar",
                "aria-valuemin": this.min
            }), this._addClass("ui-progressbar", "ui-widget ui-widget-content"), this.valueDiv = I("<div>").appendTo(this.element), this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"), this._refreshValue()
        },
        _destroy: function () {
            this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"), this.valueDiv.remove()
        },
        value: function (t) {
            return void 0 === t ? this.options.value : (this.options.value = this._constrainedValue(t), this._refreshValue(), void 0)
        },
        _constrainedValue: function (t) {
            return void 0 === t && (t = this.options.value), this.indeterminate = t === !1, "number" != typeof t && (t = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, t))
        },
        _setOptions: function (t) {
            var e = t.value;
            delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue()
        },
        _setOption: function (t, e) {
            "max" === t && (e = Math.max(this.min, e)), this._super(t, e)
        },
        _setOptionDisabled: function (t) {
            this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t)
        },
        _percentage: function () {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
        },
        _refreshValue: function () {
            var t = this.options.value, e = this._percentage();
            this.valueDiv.toggle(this.indeterminate || t > this.min).width(e.toFixed(0) + "%"), this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, t === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = I("<div>").appendTo(this.valueDiv), this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": t
            }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== t && (this.oldValue = t, this._trigger("change")), t === this.options.max && this._trigger("complete")
        }
    }), I.widget("ui.selectmenu", [I.ui.formResetMixin, {
        version: "1.12.1",
        defaultElement: "<select>",
        options: {
            appendTo: null,
            classes: {"ui-selectmenu-button-open": "ui-corner-top", "ui-selectmenu-button-closed": "ui-corner-all"},
            disabled: null,
            icons: {button: "ui-icon-triangle-1-s"},
            position: {my: "left top", at: "left bottom", collision: "none"},
            width: !1,
            change: null,
            close: null,
            focus: null,
            open: null,
            select: null
        },
        _create: function () {
            var t = this.element.uniqueId().attr("id");
            this.ids = {element: t, button: t + "-button", menu: t + "-menu"}, this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), this._rendered = !1, this.menuItems = I()
        },
        _drawButton: function () {
            var t, e = this, i = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
            this.labels = this.element.labels().attr("for", this.ids.button), this._on(this.labels, {
                click: function (t) {
                    this.button.focus(), t.preventDefault()
                }
            }), this.element.hide(), this.button = I("<span>", {
                tabindex: this.options.disabled ? -1 : 0,
                id: this.ids.button,
                role: "combobox",
                "aria-expanded": "false",
                "aria-autocomplete": "list",
                "aria-owns": this.ids.menu,
                "aria-haspopup": "true",
                title: this.element.attr("title")
            }).insertAfter(this.element), this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"), t = I("<span>").appendTo(this.button), this._addClass(t, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button), this.buttonItem = this._renderButtonItem(i).appendTo(this.button), this.options.width !== !1 && this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function () {
                e._rendered || e._refreshMenu()
            })
        },
        _drawMenu: function () {
            var s = this;
            this.menu = I("<ul>", {
                "aria-hidden": "true",
                "aria-labelledby": this.ids.button,
                id: this.ids.menu
            }), this.menuWrap = I("<div>").append(this.menu), this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"), this.menuWrap.appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
                classes: {"ui-menu": "ui-corner-bottom"},
                role: "listbox",
                select: function (t, e) {
                    t.preventDefault(), s._setSelection(), s._select(e.item.data("ui-selectmenu-item"), t)
                },
                focus: function (t, e) {
                    var i = e.item.data("ui-selectmenu-item");
                    null != s.focusIndex && i.index !== s.focusIndex && (s._trigger("focus", t, {item: i}), s.isOpen || s._select(i, t)), s.focusIndex = i.index, s.button.attr("aria-activedescendant", s.menuItems.eq(i.index).attr("id"))
                }
            }).menu("instance"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function () {
                return !1
            }, this.menuInstance._isDivider = function () {
                return !1
            }
        },
        refresh: function () {
            this._refreshMenu(), this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})), null === this.options.width && this._resizeButton()
        },
        _refreshMenu: function () {
            var t, e = this.element.find("option");
            this.menu.empty(), this._parseOptions(e), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"), this._rendered = !0, e.length && (t = this._getSelectedItem(), this.menuInstance.focus(null, t), this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
        },
        open: function (t) {
            this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length && (this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", t)))
        },
        _position: function () {
            this.menuWrap.position(I.extend({of: this.button}, this.options.position))
        },
        close: function (t) {
            this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", t))
        },
        widget: function () {
            return this.button
        },
        menuWidget: function () {
            return this.menu
        },
        _renderButtonItem: function (t) {
            var e = I("<span>");
            return this._setText(e, t.label), this._addClass(e, "ui-selectmenu-text"), e
        },
        _renderMenu: function (s, t) {
            var n = this, o = "";
            I.each(t, function (t, e) {
                var i;
                e.optgroup !== o && (i = I("<li>", {text: e.optgroup}), n._addClass(i, "ui-selectmenu-optgroup", "ui-menu-divider" + (e.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), i.appendTo(s), o = e.optgroup), n._renderItemData(s, e)
            })
        },
        _renderItemData: function (t, e) {
            return this._renderItem(t, e).data("ui-selectmenu-item", e)
        },
        _renderItem: function (t, e) {
            var i = I("<li>"), s = I("<div>", {title: e.element.attr("title")});
            return e.disabled && this._addClass(i, null, "ui-state-disabled"), this._setText(s, e.label), i.append(s).appendTo(t)
        },
        _setText: function (t, e) {
            e ? t.text(e) : t.html("&#160;")
        },
        _move: function (t, e) {
            var i, s, n = ".ui-menu-item";
            this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), n += ":not(.ui-state-disabled)"), s = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](n).eq(-1) : i[t + "All"](n).eq(0), s.length && this.menuInstance.focus(e, s)
        },
        _getSelectedItem: function () {
            return this.menuItems.eq(this.element[0].selectedIndex).parent("li")
        },
        _toggle: function (t) {
            this[this.isOpen ? "close" : "open"](t)
        },
        _setSelection: function () {
            var t;
            this.range && (window.getSelection ? (t = window.getSelection(), t.removeAllRanges(), t.addRange(this.range)) : this.range.select(), this.button.focus())
        },
        _documentClick: {
            mousedown: function (t) {
                this.isOpen && (I(t.target).closest(".ui-selectmenu-menu, #" + I.ui.escapeSelector(this.ids.button)).length || this.close(t))
            }
        },
        _buttonEvents: {
            mousedown: function () {
                var t;
                window.getSelection ? (t = window.getSelection(), t.rangeCount && (this.range = t.getRangeAt(0))) : this.range = document.selection.createRange()
            }, click: function (t) {
                this._setSelection(), this._toggle(t)
            }, keydown: function (t) {
                var e = !0;
                switch (t.keyCode) {
                    case I.ui.keyCode.TAB:
                    case I.ui.keyCode.ESCAPE:
                        this.close(t), e = !1;
                        break;
                    case I.ui.keyCode.ENTER:
                        this.isOpen && this._selectFocusedItem(t);
                        break;
                    case I.ui.keyCode.UP:
                        t.altKey ? this._toggle(t) : this._move("prev", t);
                        break;
                    case I.ui.keyCode.DOWN:
                        t.altKey ? this._toggle(t) : this._move("next", t);
                        break;
                    case I.ui.keyCode.SPACE:
                        this.isOpen ? this._selectFocusedItem(t) : this._toggle(t);
                        break;
                    case I.ui.keyCode.LEFT:
                        this._move("prev", t);
                        break;
                    case I.ui.keyCode.RIGHT:
                        this._move("next", t);
                        break;
                    case I.ui.keyCode.HOME:
                    case I.ui.keyCode.PAGE_UP:
                        this._move("first", t);
                        break;
                    case I.ui.keyCode.END:
                    case I.ui.keyCode.PAGE_DOWN:
                        this._move("last", t);
                        break;
                    default:
                        this.menu.trigger(t), e = !1
                }
                e && t.preventDefault()
            }
        },
        _selectFocusedItem: function (t) {
            var e = this.menuItems.eq(this.focusIndex).parent("li");
            e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t)
        },
        _select: function (t, e) {
            var i = this.element[0].selectedIndex;
            this.element[0].selectedIndex = t.index, this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(t)), this._setAria(t), this._trigger("select", e, {item: t}), t.index !== i && this._trigger("change", e, {item: t}), this.close(e)
        },
        _setAria: function (t) {
            var e = this.menuItems.eq(t.index).attr("id");
            this.button.attr({"aria-labelledby": e, "aria-activedescendant": e}), this.menu.attr("aria-activedescendant", e)
        },
        _setOption: function (t, e) {
            if ("icons" === t) {
                var i = this.button.find("span.ui-icon");
                this._removeClass(i, null, this.options.icons.button)._addClass(i, null, e.button)
            }
            this._super(t, e), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), "width" === t && this._resizeButton()
        },
        _setOptionDisabled: function (t) {
            this._super(t), this.menuInstance.option("disabled", t), this.button.attr("aria-disabled", t), this._toggleClass(this.button, null, "ui-state-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)
        },
        _appendTo: function () {
            var t = this.options.appendTo;
            return t && (t = t.jquery || t.nodeType ? I(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front, dialog")), t.length || (t = this.document[0].body), t
        },
        _toggleAttr: function () {
            this.button.attr("aria-expanded", this.isOpen), this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen), this.menu.attr("aria-hidden", !this.isOpen)
        },
        _resizeButton: function () {
            var t = this.options.width;
            return t === !1 ? (this.button.css("width", ""), void 0) : (null === t && (t = this.element.show().outerWidth(), this.element.hide()), this.button.outerWidth(t), void 0)
        },
        _resizeMenu: function () {
            this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
        },
        _getCreateOptions: function () {
            var t = this._super();
            return t.disabled = this.element.prop("disabled"), t
        },
        _parseOptions: function (t) {
            var i = this, s = [];
            t.each(function (t, e) {
                s.push(i._parseOption(I(e), t))
            }), this.items = s
        },
        _parseOption: function (t, e) {
            var i = t.parent("optgroup");
            return {element: t, index: e, value: t.val(), label: t.text(), optgroup: i.attr("label") || "", disabled: i.prop("disabled") || t.prop("disabled")}
        },
        _destroy: function () {
            this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.labels.attr("for", this.ids.element)
        }
    }]), I.widget("ui.slider", I.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            classes: {"ui-slider": "ui-corner-all", "ui-slider-handle": "ui-corner-all", "ui-slider-range": "ui-corner-all ui-widget-header"},
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function () {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1
        },
        _refresh: function () {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
        },
        _createHandles: function () {
            var t, e, i = this.options, s = this.element.find(".ui-slider-handle"), n = "<span tabindex='0'></span>", o = [];
            for (e = i.values && i.values.length || 1, s.length > e && (s.slice(e).remove(), s = s.slice(0, e)), t = s.length; e > t; t++) o.push(n);
            this.handles = s.add(I(o.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function (t) {
                I(this).data("ui-slider-handle-index", t).attr("tabIndex", 0)
            })
        },
        _createRange: function () {
            var t = this.options;
            t.range ? (t.range === !0 && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : I.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({
                left: "",
                bottom: ""
            })) : (this.range = I("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), ("min" === t.range || "max" === t.range) && this._addClass(this.range, "ui-slider-range-" + t.range)) : (this.range && this.range.remove(), this.range = null)
        },
        _setupEvents: function () {
            this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
        },
        _destroy: function () {
            this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy()
        },
        _mouseCapture: function (t) {
            var e, i, s, n, o, a, r, h, l = this, c = this.options;
            return c.disabled ? !1 : (this.elementSize = {width: this.element.outerWidth(), height: this.element.outerHeight()}, this.elementOffset = this.element.offset(), e = {
                x: t.pageX,
                y: t.pageY
            }, i = this._normValueFromMouse(e), s = this._valueMax() - this._valueMin() + 1, this.handles.each(function (t) {
                var e = Math.abs(i - l.values(t));
                (s > e || s === e && (t === l._lastChangedValue || l.values(t) === c.min)) && (s = e, n = I(this), o = t)
            }), a = this._start(t, o), a === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, this._addClass(n, null, "ui-state-active"), n.trigger("focus"), r = n.offset(), h = !I(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = h ? {
                left: 0,
                top: 0
            } : {
                left: t.pageX - r.left - n.width() / 2,
                top: t.pageY - r.top - n.height() / 2 - (parseInt(n.css("borderTopWidth"), 10) || 0) - (parseInt(n.css("borderBottomWidth"), 10) || 0) + (parseInt(n.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(t, o, i), this._animateOff = !0, !0))
        },
        _mouseStart: function () {
            return !0
        },
        _mouseDrag: function (t) {
            var e = {x: t.pageX, y: t.pageY}, i = this._normValueFromMouse(e);
            return this._slide(t, this._handleIndex, i), !1
        },
        _mouseStop: function (t) {
            return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
        },
        _detectOrientation: function () {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function (t) {
            var e, i, s, n, o;
            return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / e, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), o = this._valueMin() + s * n, this._trimAlignValue(o)
        },
        _uiHash: function (t, e, i) {
            var s = {handle: this.handles[t], handleIndex: t, value: void 0 !== e ? e : this.value()};
            return this._hasMultipleValues() && (s.value = void 0 !== e ? e : this.values(t), s.values = i || this.values()), s
        },
        _hasMultipleValues: function () {
            return this.options.values && this.options.values.length
        },
        _start: function (t, e) {
            return this._trigger("start", t, this._uiHash(e))
        },
        _slide: function (t, e, i) {
            var s, n, o = this.value(), a = this.values();
            this._hasMultipleValues() && (n = this.values(e ? 0 : 1), o = this.values(e), 2 === this.options.values.length && this.options.range === !0 && (i = 0 === e ? Math.min(n, i) : Math.max(n, i)), a[e] = i), i !== o && (s = this._trigger("slide", t, this._uiHash(e, i, a)), s !== !1 && (this._hasMultipleValues() ? this.values(e, i) : this.value(i)))
        },
        _stop: function (t, e) {
            this._trigger("stop", t, this._uiHash(e))
        },
        _change: function (t, e) {
            this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e)))
        },
        value: function (t) {
            return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), this._change(null, 0), void 0) : this._value()
        },
        values: function (t, e) {
            var i, s, n;
            if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(e), this._refreshValue(), this._change(null, t), void 0;
            if (!arguments.length) return this._values();
            if (!I.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(t) : this.value();
            for (i = this.options.values, s = arguments[0], n = 0; i.length > n; n += 1) i[n] = this._trimAlignValue(s[n]), this._change(null, n);
            this._refreshValue()
        },
        _setOption: function (t, e) {
            var i, s = 0;
            switch ("range" === t && this.options.range === !0 && ("min" === e ? (this.options.value = this._values(0), this.options.values = null) : "max" === e && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), I.isArray(this.options.values) && (s = this.options.values.length), this._super(t, e), t) {
                case"orientation":
                    this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(e), this.handles.css("horizontal" === e ? "bottom" : "left", "");
                    break;
                case"value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case"values":
                    for (this._animateOff = !0, this._refreshValue(), i = s - 1; i >= 0; i--) this._change(null, i);
                    this._animateOff = !1;
                    break;
                case"step":
                case"min":
                case"max":
                    this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                    break;
                case"range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },
        _setOptionDisabled: function (t) {
            this._super(t), this._toggleClass(null, "ui-state-disabled", !!t)
        },
        _value: function () {
            var t = this.options.value;
            return t = this._trimAlignValue(t)
        },
        _values: function (t) {
            var e, i, s;
            if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
            if (this._hasMultipleValues()) {
                for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]);
                return i
            }
            return []
        },
        _trimAlignValue: function (t) {
            if (this._valueMin() >= t) return this._valueMin();
            if (t >= this._valueMax()) return this._valueMax();
            var e = this.options.step > 0 ? this.options.step : 1, i = (t - this._valueMin()) % e, s = t - i;
            return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5))
        },
        _calculateNewMax: function () {
            var t = this.options.max, e = this._valueMin(), i = this.options.step, s = Math.round((t - e) / i) * i;
            t = s + e, t > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision()))
        },
        _precision: function () {
            var t = this._precisionOf(this.options.step);
            return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
        },
        _precisionOf: function (t) {
            var e = "" + t, i = e.indexOf(".");
            return -1 === i ? 0 : e.length - i - 1
        },
        _valueMin: function () {
            return this.options.min
        },
        _valueMax: function () {
            return this.max
        },
        _refreshRange: function (t) {
            "vertical" === t && this.range.css({width: "", left: ""}), "horizontal" === t && this.range.css({height: "", bottom: ""})
        },
        _refreshValue: function () {
            var e, i, t, s, n, o = this.options.range, a = this.options, r = this, h = this._animateOff ? !1 : a.animate, l = {};
            this._hasMultipleValues() ? this.handles.each(function (t) {
                i = 100 * ((r.values(t) - r._valueMin()) / (r._valueMax() - r._valueMin())), l["horizontal" === r.orientation ? "left" : "bottom"] = i + "%", I(this).stop(1, 1)[h ? "animate" : "css"](l, a.animate), r.options.range === !0 && ("horizontal" === r.orientation ? (0 === t && r.range.stop(1, 1)[h ? "animate" : "css"]({left: i + "%"}, a.animate), 1 === t && r.range[h ? "animate" : "css"]({width: i - e + "%"}, {
                    queue: !1,
                    duration: a.animate
                })) : (0 === t && r.range.stop(1, 1)[h ? "animate" : "css"]({bottom: i + "%"}, a.animate), 1 === t && r.range[h ? "animate" : "css"]({height: i - e + "%"}, {queue: !1, duration: a.animate}))), e = i
            }) : (t = this.value(), s = this._valueMin(), n = this._valueMax(), i = n !== s ? 100 * ((t - s) / (n - s)) : 0, l["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[h ? "animate" : "css"](l, a.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({width: i + "%"}, a.animate), "max" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({width: 100 - i + "%"}, a.animate), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({height: i + "%"}, a.animate), "max" === o && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({height: 100 - i + "%"}, a.animate))
        },
        _handleEvents: {
            keydown: function (t) {
                var e, i, s, n, o = I(t.target).data("ui-slider-handle-index");
                switch (t.keyCode) {
                    case I.ui.keyCode.HOME:
                    case I.ui.keyCode.END:
                    case I.ui.keyCode.PAGE_UP:
                    case I.ui.keyCode.PAGE_DOWN:
                    case I.ui.keyCode.UP:
                    case I.ui.keyCode.RIGHT:
                    case I.ui.keyCode.DOWN:
                    case I.ui.keyCode.LEFT:
                        if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(I(t.target), null, "ui-state-active"), e = this._start(t, o), e === !1)) return
                }
                switch (n = this.options.step, i = s = this._hasMultipleValues() ? this.values(o) : this.value(), t.keyCode) {
                    case I.ui.keyCode.HOME:
                        s = this._valueMin();
                        break;
                    case I.ui.keyCode.END:
                        s = this._valueMax();
                        break;
                    case I.ui.keyCode.PAGE_UP:
                        s = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case I.ui.keyCode.PAGE_DOWN:
                        s = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case I.ui.keyCode.UP:
                    case I.ui.keyCode.RIGHT:
                        if (i === this._valueMax()) return;
                        s = this._trimAlignValue(i + n);
                        break;
                    case I.ui.keyCode.DOWN:
                    case I.ui.keyCode.LEFT:
                        if (i === this._valueMin()) return;
                        s = this._trimAlignValue(i - n)
                }
                this._slide(t, o, s)
            }, keyup: function (t) {
                var e = I(t.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(t, e), this._change(t, e), this._removeClass(I(t.target), null, "ui-state-active"))
            }
        }
    }), I.widget("ui.spinner", {
        version: "1.12.1",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            classes: {"ui-spinner": "ui-corner-all", "ui-spinner-down": "ui-corner-br", "ui-spinner-up": "ui-corner-tr"},
            culture: null,
            icons: {down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n"},
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function () {
            this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                beforeunload: function () {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _getCreateOptions: function () {
            var s = this._super(), n = this.element;
            return I.each(["min", "max", "step"], function (t, e) {
                var i = n.attr(e);
                null != i && i.length && (s[e] = i)
            }), s
        },
        _events: {
            keydown: function (t) {
                this._start(t) && this._keydown(t) && t.preventDefault()
            }, keyup: "_stop", focus: function () {
                this.previous = this.element.val()
            }, blur: function (t) {
                return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", t), void 0)
            }, mousewheel: function (t, e) {
                if (e) {
                    if (!this.spinning && !this._start(t)) return !1;
                    this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function () {
                        this.spinning && this._stop(t)
                    }, 100), t.preventDefault()
                }
            }, "mousedown .ui-spinner-button": function (t) {
                function e() {
                    var t = this.element[0] === I.ui.safeActiveElement(this.document[0]);
                    t || (this.element.trigger("focus"), this.previous = i, this._delay(function () {
                        this.previous = i
                    }))
                }

                var i;
                i = this.element[0] === I.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(), t.preventDefault(), e.call(this), this.cancelBlur = !0, this._delay(function () {
                    delete this.cancelBlur, e.call(this)
                }), this._start(t) !== !1 && this._repeat(null, I(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
            }, "mouseup .ui-spinner-button": "_stop", "mouseenter .ui-spinner-button": function (t) {
                return I(t.currentTarget).hasClass("ui-state-active") ? this._start(t) === !1 ? !1 : (this._repeat(null, I(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t), void 0) : void 0
            }, "mouseleave .ui-spinner-button": "_stop"
        },
        _enhance: function () {
            this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>")
        },
        _draw: function () {
            this._enhance(), this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"), this._addClass("ui-spinner-input"), this.element.attr("role", "spinbutton"), this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({classes: {"ui-button": ""}}), this._removeClass(this.buttons, "ui-corner-all"), this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"), this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"), this.buttons.first().button({
                icon: this.options.icons.up,
                showLabel: !1
            }), this.buttons.last().button({
                icon: this.options.icons.down,
                showLabel: !1
            }), this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && this.uiSpinner.height() > 0 && this.uiSpinner.height(this.uiSpinner.height())
        },
        _keydown: function (t) {
            var e = this.options, i = I.ui.keyCode;
            switch (t.keyCode) {
                case i.UP:
                    return this._repeat(null, 1, t), !0;
                case i.DOWN:
                    return this._repeat(null, -1, t), !0;
                case i.PAGE_UP:
                    return this._repeat(null, e.page, t), !0;
                case i.PAGE_DOWN:
                    return this._repeat(null, -e.page, t), !0
            }
            return !1
        },
        _start: function (t) {
            return this.spinning || this._trigger("start", t) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1
        },
        _repeat: function (t, e, i) {
            t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function () {
                this._repeat(40, e, i)
            }, t), this._spin(e * this.options.step, i)
        },
        _spin: function (t, e) {
            var i = this.value() || 0;
            this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && this._trigger("spin", e, {value: i}) === !1 || (this._value(i), this.counter++)
        },
        _increment: function (t) {
            var e = this.options.incremental;
            return e ? I.isFunction(e) ? e(t) : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1) : 1
        },
        _precision: function () {
            var t = this._precisionOf(this.options.step);
            return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
        },
        _precisionOf: function (t) {
            var e = "" + t, i = e.indexOf(".");
            return -1 === i ? 0 : e.length - i - 1
        },
        _adjustValue: function (t) {
            var e, i, s = this.options;
            return e = null !== s.min ? s.min : 0, i = t - e, i = Math.round(i / s.step) * s.step, t = e + i, t = parseFloat(t.toFixed(this._precision())), null !== s.max && t > s.max ? s.max : null !== s.min && s.min > t ? s.min : t
        },
        _stop: function (t) {
            this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
        },
        _setOption: function (t, e) {
            var i, s, n;
            return "culture" === t || "numberFormat" === t ? (i = this._parse(this.element.val()), this.options[t] = e, this.element.val(this._format(i)), void 0) : (("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), "icons" === t && (s = this.buttons.first().find(".ui-icon"), this._removeClass(s, null, this.options.icons.up), this._addClass(s, null, e.up), n = this.buttons.last().find(".ui-icon"), this._removeClass(n, null, this.options.icons.down), this._addClass(n, null, e.down)), this._super(t, e), void 0)
        },
        _setOptionDisabled: function (t) {
            this._super(t), this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable")
        },
        _setOptions: e(function (t) {
            this._super(t)
        }),
        _parse: function (t) {
            return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t
        },
        _format: function (t) {
            return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
        },
        _refresh: function () {
            this.element.attr({"aria-valuemin": this.options.min, "aria-valuemax": this.options.max, "aria-valuenow": this._parse(this.element.val())})
        },
        isValid: function () {
            var t = this.value();
            return null === t ? !1 : t === this._adjustValue(t)
        },
        _value: function (t, e) {
            var i;
            "" !== t && (i = this._parse(t), null !== i && (e || (i = this._adjustValue(i)), t = this._format(i))), this.element.val(t), this._refresh()
        },
        _destroy: function () {
            this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"), this.uiSpinner.replaceWith(this.element)
        },
        stepUp: e(function (t) {
            this._stepUp(t)
        }),
        _stepUp: function (t) {
            this._start() && (this._spin((t || 1) * this.options.step), this._stop())
        },
        stepDown: e(function (t) {
            this._stepDown(t)
        }),
        _stepDown: function (t) {
            this._start() && (this._spin((t || 1) * -this.options.step), this._stop())
        },
        pageUp: e(function (t) {
            this._stepUp((t || 1) * this.options.page)
        }),
        pageDown: e(function (t) {
            this._stepDown((t || 1) * this.options.page)
        }),
        value: function (t) {
            return arguments.length ? (e(this._value).call(this, t), void 0) : this._parse(this.element.val())
        },
        widget: function () {
            return this.uiSpinner
        }
    }), I.uiBackCompat !== !1 && I.widget("ui.spinner", I.ui.spinner, {
        _enhance: function () {
            this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())
        }, _uiSpinnerHtml: function () {
            return "<span>"
        }, _buttonHtml: function () {
            return "<a></a><a></a>"
        }
    }), I.ui.spinner, I.widget("ui.tabs", {
        version: "1.12.1",
        delay: 300,
        options: {
            active: null,
            classes: {"ui-tabs": "ui-corner-all", "ui-tabs-nav": "ui-corner-all", "ui-tabs-panel": "ui-corner-bottom", "ui-tabs-tab": "ui-corner-top"},
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _isLocal: function () {
            var s = /#.*$/;
            return function (t) {
                var e, i;
                e = t.href.replace(s, ""), i = location.href.replace(s, "");
                try {
                    e = decodeURIComponent(e)
                } catch (t) {
                }
                try {
                    i = decodeURIComponent(i)
                } catch (t) {
                }
                return t.hash.length > 1 && e === i
            }
        }(),
        _create: function () {
            var e = this, t = this.options;
            this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, t.collapsible), this._processTabs(), t.active = this._initialActive(), I.isArray(t.disabled) && (t.disabled = I.unique(t.disabled.concat(I.map(this.tabs.filter(".ui-state-disabled"), function (t) {
                return e.tabs.index(t)
            }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(t.active) : I(), this._refresh(), this.active.length && this.load(t.active)
        },
        _initialActive: function () {
            var i = this.options.active, t = this.options.collapsible, s = location.hash.substring(1);
            return null === i && (s && this.tabs.each(function (t, e) {
                return I(e).attr("aria-controls") === s ? (i = t, !1) : void 0
            }), null === i && (i = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === i || -1 === i) && (i = this.tabs.length ? 0 : !1)), i !== !1 && (i = this.tabs.index(this.tabs.eq(i)), -1 === i && (i = t ? !1 : 0)), !t && i === !1 && this.anchors.length && (i = 0), i
        },
        _getCreateEventData: function () {
            return {tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : I()}
        },
        _tabKeydown: function (t) {
            var e = I(I.ui.safeActiveElement(this.document[0])).closest("li"), i = this.tabs.index(e), s = !0;
            if (!this._handlePageNav(t)) {
                switch (t.keyCode) {
                    case I.ui.keyCode.RIGHT:
                    case I.ui.keyCode.DOWN:
                        i++;
                        break;
                    case I.ui.keyCode.UP:
                    case I.ui.keyCode.LEFT:
                        s = !1, i--;
                        break;
                    case I.ui.keyCode.END:
                        i = this.anchors.length - 1;
                        break;
                    case I.ui.keyCode.HOME:
                        i = 0;
                        break;
                    case I.ui.keyCode.SPACE:
                        return t.preventDefault(), clearTimeout(this.activating), this._activate(i), void 0;
                    case I.ui.keyCode.ENTER:
                        return t.preventDefault(), clearTimeout(this.activating), this._activate(i === this.options.active ? !1 : i), void 0;
                    default:
                        return
                }
                t.preventDefault(), clearTimeout(this.activating), i = this._focusNextTab(i, s), t.ctrlKey || t.metaKey || (e.attr("aria-selected", "false"), this.tabs.eq(i).attr("aria-selected", "true"), this.activating = this._delay(function () {
                    this.option("active", i)
                }, this.delay))
            }
        },
        _panelKeydown: function (t) {
            this._handlePageNav(t) || t.ctrlKey && t.keyCode === I.ui.keyCode.UP && (t.preventDefault(), this.active.trigger("focus"))
        },
        _handlePageNav: function (t) {
            return t.altKey && t.keyCode === I.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : t.altKey && t.keyCode === I.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
        },
        _findNextTab: function (t, e) {
            function i() {
                return t > s && (t = 0), 0 > t && (t = s), t
            }

            for (var s = this.tabs.length - 1; -1 !== I.inArray(i(), this.options.disabled);) t = e ? t + 1 : t - 1;
            return t
        },
        _focusNextTab: function (t, e) {
            return t = this._findNextTab(t, e), this.tabs.eq(t).trigger("focus"), t
        },
        _setOption: function (t, e) {
            return "active" === t ? (this._activate(e), void 0) : (this._super(t, e), "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e), e || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(e), "heightStyle" === t && this._setupHeightStyle(e), void 0)
        },
        _sanitizeSelector: function (t) {
            return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function () {
            var t = this.options, e = this.tablist.children(":has(a[href])");
            t.disabled = I.map(e.filter(".ui-state-disabled"), function (t) {
                return e.index(t)
            }), this._processTabs(), t.active !== !1 && this.anchors.length ? this.active.length && !I.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = I()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1, this.active = I()), this._refresh()
        },
        _refresh: function () {
            this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden": "true"}), this.active.length ? (this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({"aria-hidden": "false"})) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function () {
            var h = this, t = this.tabs, e = this.anchors, i = this.panels;
            this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), this.tablist.on("mousedown" + this.eventNamespace, "> li", function (t) {
                I(this).is(".ui-state-disabled") && t.preventDefault()
            }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function () {
                I(this).closest("li").is(".ui-state-disabled") && this.blur()
            }), this.tabs = this.tablist.find("> li:has(a[href])").attr({role: "tab", tabIndex: -1}), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function () {
                return I("a", this)[0]
            }).attr({role: "presentation", tabIndex: -1}), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = I(), this.anchors.each(function (t, e) {
                var i, s, n, o = I(e).uniqueId().attr("id"), a = I(e).closest("li"), r = a.attr("aria-controls");
                h._isLocal(e) ? (i = e.hash, n = i.substring(1), s = h.element.find(h._sanitizeSelector(i))) : (n = a.attr("aria-controls") || I({}).uniqueId()[0].id, i = "#" + n, s = h.element.find(i), s.length || (s = h._createPanel(n), s.insertAfter(h.panels[t - 1] || h.tablist)), s.attr("aria-live", "polite")), s.length && (h.panels = h.panels.add(s)), r && a.data("ui-tabs-aria-controls", r), a.attr({
                    "aria-controls": n,
                    "aria-labelledby": o
                }), s.attr("aria-labelledby", o)
            }), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), t && (this._off(t.not(this.tabs)), this._off(e.not(this.anchors)), this._off(i.not(this.panels)))
        },
        _getList: function () {
            return this.tablist || this.element.find("ol, ul").eq(0)
        },
        _createPanel: function (t) {
            return I("<div>").attr("id", t).data("ui-tabs-destroy", !0)
        },
        _setOptionDisabled: function (t) {
            var e, i, s;
            for (I.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1), s = 0; i = this.tabs[s]; s++) e = I(i), t === !0 || -1 !== I.inArray(s, t) ? (e.attr("aria-disabled", "true"), this._addClass(e, null, "ui-state-disabled")) : (e.removeAttr("aria-disabled"), this._removeClass(e, null, "ui-state-disabled"));
            this.options.disabled = t, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, t === !0)
        },
        _setupEvents: function (t) {
            var i = {};
            t && I.each(t.split(" "), function (t, e) {
                i[e] = "_eventHandler"
            }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                click: function (t) {
                    t.preventDefault()
                }
            }), this._on(this.anchors, i), this._on(this.tabs, {keydown: "_tabKeydown"}), this._on(this.panels, {keydown: "_panelKeydown"}), this._focusable(this.tabs), this._hoverable(this.tabs)
        },
        _setupHeightStyle: function (t) {
            var i, e = this.element.parent();
            "fill" === t ? (i = e.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () {
                var t = I(this), e = t.css("position");
                "absolute" !== e && "fixed" !== e && (i -= t.outerHeight(!0))
            }), this.element.children().not(this.panels).each(function () {
                i -= I(this).outerHeight(!0)
            }), this.panels.each(function () {
                I(this).height(Math.max(0, i - I(this).innerHeight() + I(this).height()))
            }).css("overflow", "auto")) : "auto" === t && (i = 0, this.panels.each(function () {
                i = Math.max(i, I(this).height("").height())
            }).height(i))
        },
        _eventHandler: function (t) {
            var e = this.options, i = this.active, s = I(t.currentTarget), n = s.closest("li"), o = n[0] === i[0], a = o && e.collapsible, r = a ? I() : this._getPanelForTab(n),
                h = i.length ? this._getPanelForTab(i) : I(), l = {oldTab: i, oldPanel: h, newTab: a ? I() : n, newPanel: r};
            t.preventDefault(), n.hasClass("ui-state-disabled") || n.hasClass("ui-tabs-loading") || this.running || o && !e.collapsible || this._trigger("beforeActivate", t, l) === !1 || (e.active = a ? !1 : this.tabs.index(n), this.active = o ? I() : n, this.xhr && this.xhr.abort(), h.length || r.length || I.error("jQuery UI Tabs: Mismatching fragment identifier."), r.length && this.load(this.tabs.index(n), t), this._toggle(t, l))
        },
        _toggle: function (t, e) {
            function i() {
                n.running = !1, n._trigger("activate", t, e)
            }

            function s() {
                n._addClass(e.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), o.length && n.options.show ? n._show(o, n.options.show, i) : (o.show(), i())
            }

            var n = this, o = e.newPanel, a = e.oldPanel;
            this.running = !0, a.length && this.options.hide ? this._hide(a, this.options.hide, function () {
                n._removeClass(e.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), s()
            }) : (this._removeClass(e.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), a.hide(), s()), a.attr("aria-hidden", "true"), e.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }), o.length && a.length ? e.oldTab.attr("tabIndex", -1) : o.length && this.tabs.filter(function () {
                return 0 === I(this).attr("tabIndex")
            }).attr("tabIndex", -1), o.attr("aria-hidden", "false"), e.newTab.attr({"aria-selected": "true", "aria-expanded": "true", tabIndex: 0})
        },
        _activate: function (t) {
            var e, i = this._findActive(t);
            i[0] !== this.active[0] && (i.length || (i = this.active), e = i.find(".ui-tabs-anchor")[0], this._eventHandler({target: e, currentTarget: e, preventDefault: I.noop}))
        },
        _findActive: function (t) {
            return t === !1 ? I() : this.tabs.eq(t)
        },
        _getIndex: function (t) {
            return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + I.ui.escapeSelector(t) + "']"))), t
        },
        _destroy: function () {
            this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function () {
                I.data(this, "ui-tabs-destroy") ? I(this).remove() : I(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")
            }), this.tabs.each(function () {
                var t = I(this), e = t.data("ui-tabs-aria-controls");
                e ? t.attr("aria-controls", e).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls")
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function (i) {
            var t = this.options.disabled;
            t !== !1 && (void 0 === i ? t = !1 : (i = this._getIndex(i), t = I.isArray(t) ? I.map(t, function (t) {
                return t !== i ? t : null
            }) : I.map(this.tabs, function (t, e) {
                return e !== i ? e : null
            })), this._setOptionDisabled(t))
        },
        disable: function (t) {
            var e = this.options.disabled;
            if (e !== !0) {
                if (void 0 === t) e = !0; else {
                    if (t = this._getIndex(t), -1 !== I.inArray(t, e)) return;
                    e = I.isArray(e) ? I.merge([t], e).sort() : [t]
                }
                this._setOptionDisabled(e)
            }
        },
        load: function (t, s) {
            t = this._getIndex(t);
            var n = this, i = this.tabs.eq(t), e = i.find(".ui-tabs-anchor"), o = this._getPanelForTab(i), a = {tab: i, panel: o}, r = function (t, e) {
                "abort" === e && n.panels.stop(!1, !0), n._removeClass(i, "ui-tabs-loading"), o.removeAttr("aria-busy"), t === n.xhr && delete n.xhr
            };
            this._isLocal(e[0]) || (this.xhr = I.ajax(this._ajaxSettings(e, s, a)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(i, "ui-tabs-loading"), o.attr("aria-busy", "true"), this.xhr.done(function (t, e, i) {
                setTimeout(function () {
                    o.html(t), n._trigger("load", s, a), r(i, e)
                }, 1)
            }).fail(function (t, e) {
                setTimeout(function () {
                    r(t, e)
                }, 1)
            })))
        },
        _ajaxSettings: function (t, i, s) {
            var n = this;
            return {
                url: t.attr("href").replace(/#.*$/, ""), beforeSend: function (t, e) {
                    return n._trigger("beforeLoad", i, I.extend({jqXHR: t, ajaxSettings: e}, s))
                }
            }
        },
        _getPanelForTab: function (t) {
            var e = I(t).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + e))
        }
    }), I.uiBackCompat !== !1 && I.widget("ui.tabs", I.ui.tabs, {
        _processTabs: function () {
            this._superApply(arguments), this._addClass(this.tabs, "ui-tab")
        }
    }), I.ui.tabs, I.widget("ui.tooltip", {
        version: "1.12.1", options: {
            classes: {"ui-tooltip": "ui-corner-all ui-widget-shadow"}, content: function () {
                var t = I(this).attr("title") || "";
                return I("<a>").text(t).html()
            }, hide: !0, items: "[title]:not([disabled])", position: {my: "left top+15", at: "left bottom", collision: "flipfit flip"}, show: !0, track: !1, close: null, open: null
        }, _addDescribedBy: function (t, e) {
            var i = (t.attr("aria-describedby") || "").split(/\s+/);
            i.push(e), t.data("ui-tooltip-id", e).attr("aria-describedby", I.trim(i.join(" ")))
        }, _removeDescribedBy: function (t) {
            var e = t.data("ui-tooltip-id"), i = (t.attr("aria-describedby") || "").split(/\s+/), s = I.inArray(e, i);
            -1 !== s && i.splice(s, 1), t.removeData("ui-tooltip-id"), i = I.trim(i.join(" ")), i ? t.attr("aria-describedby", i) : t.removeAttr("aria-describedby")
        }, _create: function () {
            this._on({mouseover: "open", focusin: "open"}), this.tooltips = {}, this.parents = {}, this.liveRegion = I("<div>").attr({
                role: "log",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this.disabledTitles = I([])
        }, _setOption: function (t, e) {
            var i = this;
            this._super(t, e), "content" === t && I.each(this.tooltips, function (t, e) {
                i._updateContent(e.element)
            })
        }, _setOptionDisabled: function (t) {
            this[t ? "_disable" : "_enable"]()
        }, _disable: function () {
            var s = this;
            I.each(this.tooltips, function (t, e) {
                var i = I.Event("blur");
                i.target = i.currentTarget = e.element[0], s.close(i, !0)
            }), this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function () {
                var t = I(this);
                return t.is("[title]") ? t.data("ui-tooltip-title", t.attr("title")).removeAttr("title") : void 0
            }))
        }, _enable: function () {
            this.disabledTitles.each(function () {
                var t = I(this);
                t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"))
            }), this.disabledTitles = I([])
        }, open: function (t) {
            var i = this, e = I(t ? t.target : this.element).closest(this.options.items);
            e.length && !e.data("ui-tooltip-id") && (e.attr("title") && e.data("ui-tooltip-title", e.attr("title")), e.data("ui-tooltip-open", !0), t && "mouseover" === t.type && e.parents().each(function () {
                var t, e = I(this);
                e.data("ui-tooltip-open") && (t = I.Event("blur"), t.target = t.currentTarget = this, i.close(t, !0)), e.attr("title") && (e.uniqueId(), i.parents[this.id] = {
                    element: this,
                    title: e.attr("title")
                }, e.attr("title", ""))
            }), this._registerCloseHandlers(t, e), this._updateContent(e, t))
        }, _updateContent: function (e, i) {
            var t, s = this.options.content, n = this, o = i ? i.type : null;
            return "string" == typeof s || s.nodeType || s.jquery ? this._open(i, e, s) : (t = s.call(e[0], function (t) {
                n._delay(function () {
                    e.data("ui-tooltip-open") && (i && (i.type = o), this._open(i, e, t))
                })
            }), t && this._open(i, e, t), void 0)
        }, _open: function (t, e, i) {
            function s(t) {
                h.of = t, o.is(":hidden") || o.position(h)
            }

            var n, o, a, r, h = I.extend({}, this.options.position);
            if (i) {
                if (n = this._find(e)) return n.tooltip.find(".ui-tooltip-content").html(i), void 0;
                e.is("[title]") && (t && "mouseover" === t.type ? e.attr("title", "") : e.removeAttr("title")), n = this._tooltip(e), o = n.tooltip, this._addDescribedBy(e, o.attr("id")), o.find(".ui-tooltip-content").html(i), this.liveRegion.children().hide(), r = I("<div>").html(o.find(".ui-tooltip-content").html()), r.removeAttr("name").find("[name]").removeAttr("name"), r.removeAttr("id").find("[id]").removeAttr("id"), r.appendTo(this.liveRegion), this.options.track && t && /^mouse/.test(t.type) ? (this._on(this.document, {mousemove: s}), s(t)) : o.position(I.extend({of: e}, this.options.position)), o.hide(), this._show(o, this.options.show), this.options.track && this.options.show && this.options.show.delay && (a = this.delayedShow = setInterval(function () {
                    o.is(":visible") && (s(h.of), clearInterval(a))
                }, I.fx.interval)), this._trigger("open", t, {tooltip: o})
            }
        }, _registerCloseHandlers: function (t, i) {
            var e = {
                keyup: function (t) {
                    if (t.keyCode === I.ui.keyCode.ESCAPE) {
                        var e = I.Event(t);
                        e.currentTarget = i[0], this.close(e, !0)
                    }
                }
            };
            i[0] !== this.element[0] && (e.remove = function () {
                this._removeTooltip(this._find(i).tooltip)
            }), t && "mouseover" !== t.type || (e.mouseleave = "close"), t && "focusin" !== t.type || (e.focusout = "close"), this._on(!0, i, e)
        }, close: function (t) {
            var e, i = this, s = I(t ? t.currentTarget : this.element), n = this._find(s);
            return n ? (e = n.tooltip, n.closing || (clearInterval(this.delayedShow), s.data("ui-tooltip-title") && !s.attr("title") && s.attr("title", s.data("ui-tooltip-title")), this._removeDescribedBy(s), n.hiding = !0, e.stop(!0), this._hide(e, this.options.hide, function () {
                i._removeTooltip(I(this))
            }), s.removeData("ui-tooltip-open"), this._off(s, "mouseleave focusout keyup"), s[0] !== this.element[0] && this._off(s, "remove"), this._off(this.document, "mousemove"), t && "mouseleave" === t.type && I.each(this.parents, function (t, e) {
                I(e.element).attr("title", e.title), delete i.parents[t]
            }), n.closing = !0, this._trigger("close", t, {tooltip: e}), n.hiding || (n.closing = !1)), void 0) : (s.removeData("ui-tooltip-open"), void 0)
        }, _tooltip: function (t) {
            var e = I("<div>").attr("role", "tooltip"), i = I("<div>").appendTo(e), s = e.uniqueId().attr("id");
            return this._addClass(i, "ui-tooltip-content"), this._addClass(e, "ui-tooltip", "ui-widget ui-widget-content"), e.appendTo(this._appendTo(t)), this.tooltips[s] = {element: t, tooltip: e}
        }, _find: function (t) {
            var e = t.data("ui-tooltip-id");
            return e ? this.tooltips[e] : null
        }, _removeTooltip: function (t) {
            t.remove(), delete this.tooltips[t.attr("id")]
        }, _appendTo: function (t) {
            var e = t.closest(".ui-front, dialog");
            return e.length || (e = this.document[0].body), e
        }, _destroy: function () {
            var n = this;
            I.each(this.tooltips, function (t, e) {
                var i = I.Event("blur"), s = e.element;
                i.target = i.currentTarget = s[0], n.close(i, !0), I("#" + t).remove(), s.data("ui-tooltip-title") && (s.attr("title") || s.attr("title", s.data("ui-tooltip-title")), s.removeData("ui-tooltip-title"))
            }), this.liveRegion.remove()
        }
    }), I.uiBackCompat !== !1 && I.widget("ui.tooltip", I.ui.tooltip, {
        options: {tooltipClass: null}, _tooltip: function () {
            var t = this._superApply(arguments);
            return this.options.tooltipClass && t.tooltip.addClass(this.options.tooltipClass), t
        }
    }), I.ui.tooltip;
    var p = "ui-effects-", f = "ui-effects-style", g = "ui-effects-animated", m = I;
    I.effects = {effect: {}}, function (c, u) {
        function d(t, e, i) {
            var s = m[e.type] || {};
            return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : t > s.max ? s.max : t)
        }

        function r(a) {
            var r = f(), h = r._rgba = [];
            return a = a.toLowerCase(), _(e, function (t, e) {
                var i, s = e.re.exec(a), n = s && e.parse(s), o = e.space || "rgba";
                return n ? (i = r[o](n), r[g[o].cache] = i[g[o].cache], h = r._rgba = i._rgba, !1) : u
            }), h.length ? ("0,0,0,0" === h.join() && c.extend(h, l.transparent), r) : l[a]
        }

        function h(t, e, i) {
            return i = (i + 1) % 1, 1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t
        }

        var l, t = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor", p = /^([\-+])=\s*(\d+\.?\d*)/, e = [{
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function (t) {
                return [t[1], t[2], t[3], t[4]]
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function (t) {
                return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
            }
        }, {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function (t) {
                return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
            }
        }, {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function (t) {
                return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, space: "hsla", parse: function (t) {
                return [t[1], t[2] / 100, t[3] / 100, t[4]]
            }
        }], f = c.Color = function (t, e, i, s) {
            return new c.Color.fn.parse(t, e, i, s)
        }, g = {
            rgba: {props: {red: {idx: 0, type: "byte"}, green: {idx: 1, type: "byte"}, blue: {idx: 2, type: "byte"}}},
            hsla: {props: {hue: {idx: 0, type: "degrees"}, saturation: {idx: 1, type: "percent"}, lightness: {idx: 2, type: "percent"}}}
        }, m = {byte: {floor: !0, max: 255}, percent: {max: 1}, degrees: {mod: 360, floor: !0}}, a = f.support = {}, i = c("<p>")[0], _ = c.each;
        i.style.cssText = "background-color:rgba(1,1,1,.5)", a.rgba = i.style.backgroundColor.indexOf("rgba") > -1, _(g, function (t, e) {
            e.cache = "_" + t, e.props.alpha = {idx: 3, type: "percent", def: 1}
        }), f.fn = c.extend(f.prototype, {
            parse: function (n, t, e, i) {
                if (n === u) return this._rgba = [null, null, null, null], this;
                (n.jquery || n.nodeType) && (n = c(n).css(t), t = u);
                var o = this, s = c.type(n), a = this._rgba = [];
                return t !== u && (n = [n, t, e, i], s = "array"), "string" === s ? this.parse(r(n) || l._default) : "array" === s ? (_(g.rgba.props, function (t, e) {
                    a[e.idx] = d(n[e.idx], e)
                }), this) : "object" === s ? (n instanceof f ? _(g, function (t, e) {
                    n[e.cache] && (o[e.cache] = n[e.cache].slice())
                }) : _(g, function (t, i) {
                    var s = i.cache;
                    _(i.props, function (t, e) {
                        if (!o[s] && i.to) {
                            if ("alpha" === t || null == n[t]) return;
                            o[s] = i.to(o._rgba)
                        }
                        o[s][e.idx] = d(n[t], e, !0)
                    }), o[s] && 0 > c.inArray(null, o[s].slice(0, 3)) && (o[s][3] = 1, i.from && (o._rgba = i.from(o[s])))
                }), this) : u
            }, is: function (t) {
                var n = f(t), o = !0, a = this;
                return _(g, function (t, e) {
                    var i, s = n[e.cache];
                    return s && (i = a[e.cache] || e.to && e.to(a._rgba) || [], _(e.props, function (t, e) {
                        return null != s[e.idx] ? o = s[e.idx] === i[e.idx] : u
                    })), o
                }), o
            }, _space: function () {
                var i = [], s = this;
                return _(g, function (t, e) {
                    s[e.cache] && i.push(t)
                }), i.pop()
            }, transition: function (t, a) {
                var r = f(t), e = r._space(), i = g[e], s = 0 === this.alpha() ? f("transparent") : this, h = s[i.cache] || i.to(s._rgba), l = h.slice();
                return r = r[i.cache], _(i.props, function (t, e) {
                    var i = e.idx, s = h[i], n = r[i], o = m[e.type] || {};
                    null !== n && (null === s ? l[i] = n : (o.mod && (n - s > o.mod / 2 ? s += o.mod : s - n > o.mod / 2 && (s -= o.mod)), l[i] = d((n - s) * a + s, e)))
                }), this[e](l)
            }, blend: function (t) {
                if (1 === this._rgba[3]) return this;
                var e = this._rgba.slice(), i = e.pop(), s = f(t)._rgba;
                return f(c.map(e, function (t, e) {
                    return (1 - i) * s[e] + i * t
                }))
            }, toRgbaString: function () {
                var t = "rgba(", e = c.map(this._rgba, function (t, e) {
                    return null == t ? e > 2 ? 1 : 0 : t
                });
                return 1 === e[3] && (e.pop(), t = "rgb("), t + e.join() + ")"
            }, toHslaString: function () {
                var t = "hsla(", e = c.map(this.hsla(), function (t, e) {
                    return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
                });
                return 1 === e[3] && (e.pop(), t = "hsl("), t + e.join() + ")"
            }, toHexString: function (t) {
                var e = this._rgba.slice(), i = e.pop();
                return t && e.push(~~(255 * i)), "#" + c.map(e, function (t) {
                    return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t
                }).join("")
            }, toString: function () {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
            }
        }), f.fn.parse.prototype = f.fn, g.hsla.to = function (t) {
            if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
            var e, i, s = t[0] / 255, n = t[1] / 255, o = t[2] / 255, a = t[3], r = Math.max(s, n, o), h = Math.min(s, n, o), l = r - h, c = r + h, u = .5 * c;
            return e = h === r ? 0 : s === r ? 60 * (n - o) / l + 360 : n === r ? 60 * (o - s) / l + 120 : 60 * (s - n) / l + 240, i = 0 === l ? 0 : .5 >= u ? l / c : l / (2 - c), [Math.round(e) % 360, i, u, null == a ? 1 : a]
        }, g.hsla.from = function (t) {
            if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
            var e = t[0] / 360, i = t[1], s = t[2], n = t[3], o = .5 >= s ? s * (1 + i) : s + i - s * i, a = 2 * s - o;
            return [Math.round(255 * h(a, o, e + 1 / 3)), Math.round(255 * h(a, o, e)), Math.round(255 * h(a, o, e - 1 / 3)), n]
        }, _(g, function (h, t) {
            var i = t.props, a = t.cache, r = t.to, l = t.from;
            f.fn[h] = function (t) {
                if (r && !this[a] && (this[a] = r(this._rgba)), t === u) return this[a].slice();
                var e, s = c.type(t), n = "array" === s || "object" === s ? t : arguments, o = this[a].slice();
                return _(i, function (t, e) {
                    var i = n["object" === s ? t : e.idx];
                    null == i && (i = o[e.idx]), o[e.idx] = d(i, e)
                }), l ? (e = f(l(o)), e[a] = o, e) : f(o)
            }, _(i, function (a, r) {
                f.fn[a] || (f.fn[a] = function (t) {
                    var e, i = c.type(t), s = "alpha" === a ? this._hsla ? "hsla" : "rgba" : h, n = this[s](), o = n[r.idx];
                    return "undefined" === i ? o : ("function" === i && (t = t.call(this, o), i = c.type(t)), null == t && r.empty ? this : ("string" === i && (e = p.exec(t), e && (t = o + parseFloat(e[2]) * ("+" === e[1] ? 1 : -1))), n[r.idx] = t, this[s](n)))
                })
            })
        }), f.hook = function (t) {
            var e = t.split(" ");
            _(e, function (t, o) {
                c.cssHooks[o] = {
                    set: function (t, e) {
                        var i, s, n = "";
                        if ("transparent" !== e && ("string" !== c.type(e) || (i = r(e)))) {
                            if (e = f(i || e), !a.rgba && 1 !== e._rgba[3]) {
                                for (s = "backgroundColor" === o ? t.parentNode : t; ("" === n || "transparent" === n) && s && s.style;) try {
                                    n = c.css(s, "backgroundColor"), s = s.parentNode
                                } catch (t) {
                                }
                                e = e.blend(n && "transparent" !== n ? n : "_default")
                            }
                            e = e.toRgbaString()
                        }
                        try {
                            t.style[o] = e
                        } catch (t) {
                        }
                    }
                }, c.fx.step[o] = function (t) {
                    t.colorInit || (t.start = f(t.elem, o), t.end = f(t.end), t.colorInit = !0), c.cssHooks[o].set(t.elem, t.start.transition(t.end, t.pos))
                }
            })
        }, f.hook(t), c.cssHooks.borderColor = {
            expand: function (i) {
                var s = {};
                return _(["Top", "Right", "Bottom", "Left"], function (t, e) {
                    s["border" + e + "Color"] = i
                }), s
            }
        }, l = c.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    }(m), function () {
        function a(t) {
            var e, i, s = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle, n = {};
            if (s && s.length && s[0] && s[s[0]]) for (i = s.length; i--;) e = s[i], "string" == typeof s[e] && (n[I.camelCase(e)] = s[e]); else for (e in s) "string" == typeof s[e] && (n[e] = s[e]);
            return n
        }

        function r(t, e) {
            var i, s, n = {};
            for (i in e) s = e[i], t[i] !== s && (o[i] || (I.fx.step[i] || !isNaN(parseFloat(s))) && (n[i] = s));
            return n
        }

        var h = ["add", "remove", "toggle"], o = {border: 1, borderBottom: 1, borderColor: 1, borderLeft: 1, borderRight: 1, borderTop: 1, borderWidth: 1, margin: 1, padding: 1};
        I.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (t, e) {
            I.fx.step[e] = function (t) {
                ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (m.style(t.elem, e, t.end), t.setAttr = !0)
            }
        }), I.fn.addBack || (I.fn.addBack = function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }), I.effects.animateClass = function (n, t, e, i) {
            var o = I.speed(t, e, i);
            return this.queue(function () {
                var t, i = I(this), e = i.attr("class") || "", s = o.children ? i.find("*").addBack() : i;
                s = s.map(function () {
                    var t = I(this);
                    return {el: t, start: a(this)}
                }), t = function () {
                    I.each(h, function (t, e) {
                        n[e] && i[e + "Class"](n[e])
                    })
                }, t(), s = s.map(function () {
                    return this.end = a(this.el[0]), this.diff = r(this.start, this.end), this
                }), i.attr("class", e), s = s.map(function () {
                    var t = this, e = I.Deferred(), i = I.extend({}, o, {
                        queue: !1, complete: function () {
                            e.resolve(t)
                        }
                    });
                    return this.el.animate(this.diff, i), e.promise()
                }), I.when.apply(I, s.get()).done(function () {
                    t(), I.each(arguments, function () {
                        var e = this.el;
                        I.each(this.diff, function (t) {
                            e.css(t, "")
                        })
                    }), o.complete.call(i[0])
                })
            })
        }, I.fn.extend({
            addClass: function (n) {
                return function (t, e, i, s) {
                    return e ? I.effects.animateClass.call(this, {add: t}, e, i, s) : n.apply(this, arguments)
                }
            }(I.fn.addClass), removeClass: function (n) {
                return function (t, e, i, s) {
                    return arguments.length > 1 ? I.effects.animateClass.call(this, {remove: t}, e, i, s) : n.apply(this, arguments)
                }
            }(I.fn.removeClass), toggleClass: function (o) {
                return function (t, e, i, s, n) {
                    return "boolean" == typeof e || void 0 === e ? i ? I.effects.animateClass.call(this, e ? {add: t} : {remove: t}, i, s, n) : o.apply(this, arguments) : I.effects.animateClass.call(this, {toggle: t}, e, i, s)
                }
            }(I.fn.toggleClass), switchClass: function (t, e, i, s, n) {
                return I.effects.animateClass.call(this, {add: e, remove: t}, i, s, n)
            }
        })
    }(), function () {
        function c(t, e, i, s) {
            return I.isPlainObject(t) && (e = t, t = t.effect), t = {effect: t}, null == e && (e = {}), I.isFunction(e) && (s = e, i = null, e = {}), ("number" == typeof e || I.fx.speeds[e]) && (s = i, i = e, e = {}), I.isFunction(i) && (s = i, i = null), e && I.extend(t, e), i = i || e.duration, t.duration = I.fx.off ? 0 : "number" == typeof i ? i : i in I.fx.speeds ? I.fx.speeds[i] : I.fx.speeds._default, t.complete = s || e.complete, t
        }

        function s(t) {
            return !t || "number" == typeof t || I.fx.speeds[t] ? !0 : "string" != typeof t || I.effects.effect[t] ? I.isFunction(t) ? !0 : "object" != typeof t || t.effect ? !1 : !0 : !0
        }

        function e(t, e) {
            var i = e.outerWidth(), s = e.outerHeight(), n = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,
                o = n.exec(t) || ["", 0, i, s, 0];
            return {top: parseFloat(o[1]) || 0, right: "auto" === o[2] ? i : parseFloat(o[2]), bottom: "auto" === o[3] ? s : parseFloat(o[3]), left: parseFloat(o[4]) || 0}
        }

        I.expr && I.expr.filters && I.expr.filters.animated && (I.expr.filters.animated = function (e) {
            return function (t) {
                return !!I(t).data(g) || e(t)
            }
        }(I.expr.filters.animated)), I.uiBackCompat !== !1 && I.extend(I.effects, {
            save: function (t, e) {
                for (var i = 0, s = e.length; s > i; i++) null !== e[i] && t.data(p + e[i], t[0].style[e[i]])
            }, restore: function (t, e) {
                for (var i, s = 0, n = e.length; n > s; s++) null !== e[s] && (i = t.data(p + e[s]), t.css(e[s], i))
            }, setMode: function (t, e) {
                return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
            }, createWrapper: function (i) {
                if (i.parent().is(".ui-effects-wrapper")) return i.parent();
                var s = {width: i.outerWidth(!0), height: i.outerHeight(!0), float: i.css("float")},
                    t = I("<div></div>").addClass("ui-effects-wrapper").css({fontSize: "100%", background: "transparent", border: "none", margin: 0, padding: 0}), e = {width: i.width(), height: i.height()},
                    n = document.activeElement;
                try {
                    n.id
                } catch (t) {
                    n = document.body
                }
                return i.wrap(t), (i[0] === n || I.contains(i[0], n)) && I(n).trigger("focus"), t = i.parent(), "static" === i.css("position") ? (t.css({position: "relative"}), i.css({position: "relative"})) : (I.extend(s, {
                    position: i.css("position"),
                    zIndex: i.css("z-index")
                }), I.each(["top", "left", "bottom", "right"], function (t, e) {
                    s[e] = i.css(e), isNaN(parseInt(s[e], 10)) && (s[e] = "auto")
                }), i.css({position: "relative", top: 0, left: 0, right: "auto", bottom: "auto"})), i.css(e), t.css(s).show()
            }, removeWrapper: function (t) {
                var e = document.activeElement;
                return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === e || I.contains(t[0], e)) && I(e).trigger("focus")), t
            }
        }), I.extend(I.effects, {
            version: "1.12.1", define: function (t, e, i) {
                return i || (i = e, e = "effect"), I.effects.effect[t] = i, I.effects.effect[t].mode = e, i
            }, scaledDimensions: function (t, e, i) {
                if (0 === e) return {height: 0, width: 0, outerHeight: 0, outerWidth: 0};
                var s = "horizontal" !== i ? (e || 100) / 100 : 1, n = "vertical" !== i ? (e || 100) / 100 : 1;
                return {height: t.height() * n, width: t.width() * s, outerHeight: t.outerHeight() * n, outerWidth: t.outerWidth() * s}
            }, clipToBox: function (t) {
                return {width: t.clip.right - t.clip.left, height: t.clip.bottom - t.clip.top, left: t.clip.left, top: t.clip.top}
            }, unshift: function (t, e, i) {
                var s = t.queue();
                e > 1 && s.splice.apply(s, [1, 0].concat(s.splice(e, i))), t.dequeue()
            }, saveStyle: function (t) {
                t.data(f, t[0].style.cssText)
            }, restoreStyle: function (t) {
                t[0].style.cssText = t.data(f) || "", t.removeData(f)
            }, mode: function (t, e) {
                var i = t.is(":hidden");
                return "toggle" === e && (e = i ? "show" : "hide"), (i ? "hide" === e : "show" === e) && (e = "none"), e
            }, getBaseline: function (t, e) {
                var i, s;
                switch (t[0]) {
                    case"top":
                        i = 0;
                        break;
                    case"middle":
                        i = .5;
                        break;
                    case"bottom":
                        i = 1;
                        break;
                    default:
                        i = t[0] / e.height
                }
                switch (t[1]) {
                    case"left":
                        s = 0;
                        break;
                    case"center":
                        s = .5;
                        break;
                    case"right":
                        s = 1;
                        break;
                    default:
                        s = t[1] / e.width
                }
                return {x: s, y: i}
            }, createPlaceholder: function (t) {
                var e, i = t.css("position"), s = t.position();
                return t.css({
                    marginTop: t.css("marginTop"),
                    marginBottom: t.css("marginBottom"),
                    marginLeft: t.css("marginLeft"),
                    marginRight: t.css("marginRight")
                }).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()), /^(static|relative)/.test(i) && (i = "absolute", e = I("<" + t[0].nodeName + ">").insertAfter(t).css({
                    display: /^(inline|ruby)/.test(t.css("display")) ? "inline-block" : "block",
                    visibility: "hidden",
                    marginTop: t.css("marginTop"),
                    marginBottom: t.css("marginBottom"),
                    marginLeft: t.css("marginLeft"),
                    marginRight: t.css("marginRight"),
                    float: t.css("float")
                }).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).addClass("ui-effects-placeholder"), t.data(p + "placeholder", e)), t.css({position: i, left: s.left, top: s.top}), e
            }, removePlaceholder: function (t) {
                var e = p + "placeholder", i = t.data(e);
                i && (i.remove(), t.removeData(e))
            }, cleanUp: function (t) {
                I.effects.restoreStyle(t), I.effects.removePlaceholder(t)
            }, setTransition: function (s, t, n, o) {
                return o = o || {}, I.each(t, function (t, e) {
                    var i = s.cssUnit(e);
                    i[0] > 0 && (o[e] = i[0] * n + i[1])
                }), o
            }
        }), I.fn.extend({
            effect: function () {
                function t(t) {
                    function e() {
                        s.removeData(g), I.effects.cleanUp(s), "hide" === n.mode && s.hide(), i()
                    }

                    function i() {
                        I.isFunction(r) && r.call(s[0]), I.isFunction(t) && t()
                    }

                    var s = I(this);
                    n.mode = l.shift(), I.uiBackCompat === !1 || a ? "none" === n.mode ? (s[h](), i()) : o.call(s[0], n, e) : (s.is(":hidden") ? "hide" === h : "show" === h) ? (s[h](), i()) : o.call(s[0], n, i)
                }

                var n = c.apply(this, arguments), o = I.effects.effect[n.effect], a = o.mode, e = n.queue, i = e || "fx", r = n.complete, h = n.mode, l = [], s = function (t) {
                    var e = I(this), i = I.effects.mode(e, h) || a;
                    e.data(g, !0), l.push(i), a && ("show" === i || i === a && "hide" === i) && e.show(), a && "none" === i || I.effects.saveStyle(e), I.isFunction(t) && t()
                };
                return I.fx.off || !o ? h ? this[h](n.duration, r) : this.each(function () {
                    r && r.call(this)
                }) : e === !1 ? this.each(s).each(t) : this.queue(i, s).queue(i, t)
            }, show: function (i) {
                return function (t) {
                    if (s(t)) return i.apply(this, arguments);
                    var e = c.apply(this, arguments);
                    return e.mode = "show", this.effect.call(this, e)
                }
            }(I.fn.show), hide: function (i) {
                return function (t) {
                    if (s(t)) return i.apply(this, arguments);
                    var e = c.apply(this, arguments);
                    return e.mode = "hide", this.effect.call(this, e)
                }
            }(I.fn.hide), toggle: function (i) {
                return function (t) {
                    if (s(t) || "boolean" == typeof t) return i.apply(this, arguments);
                    var e = c.apply(this, arguments);
                    return e.mode = "toggle", this.effect.call(this, e)
                }
            }(I.fn.toggle), cssUnit: function (t) {
                var i = this.css(t), s = [];
                return I.each(["em", "px", "%", "pt"], function (t, e) {
                    i.indexOf(e) > 0 && (s = [parseFloat(i), e])
                }), s
            }, cssClip: function (t) {
                return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : e(this.css("clip"), this)
            }, transfer: function (t, e) {
                var i = I(this), s = I(t.to), n = "fixed" === s.css("position"), o = I("body"), a = n ? o.scrollTop() : 0, r = n ? o.scrollLeft() : 0, h = s.offset(),
                    l = {top: h.top - a, left: h.left - r, height: s.innerHeight(), width: s.innerWidth()}, c = i.offset(), u = I("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(t.className).css({
                        top: c.top - a,
                        left: c.left - r,
                        height: i.innerHeight(),
                        width: i.innerWidth(),
                        position: n ? "fixed" : "absolute"
                    }).animate(l, t.duration, t.easing, function () {
                        u.remove(), I.isFunction(e) && e()
                    })
            }
        }), I.fx.step.clip = function (t) {
            t.clipInit || (t.start = I(t.elem).cssClip(), "string" == typeof t.end && (t.end = e(t.end, t.elem)), t.clipInit = !0), I(t.elem).cssClip({
                top: t.pos * (t.end.top - t.start.top) + t.start.top,
                right: t.pos * (t.end.right - t.start.right) + t.start.right,
                bottom: t.pos * (t.end.bottom - t.start.bottom) + t.start.bottom,
                left: t.pos * (t.end.left - t.start.left) + t.start.left
            })
        }
    }(), function () {
        var i = {};
        I.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (e, t) {
            i[t] = function (t) {
                return Math.pow(t, e + 2)
            }
        }), I.extend(i, {
            Sine: function (t) {
                return 1 - Math.cos(t * Math.PI / 2)
            }, Circ: function (t) {
                return 1 - Math.sqrt(1 - t * t)
            }, Elastic: function (t) {
                return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
            }, Back: function (t) {
                return t * t * (3 * t - 2)
            }, Bounce: function (t) {
                for (var e, i = 4; ((e = Math.pow(2, --i)) - 1) / 11 > t;) ;
                return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
            }
        }), I.each(i, function (t, e) {
            I.easing["easeIn" + t] = e, I.easing["easeOut" + t] = function (t) {
                return 1 - e(1 - t)
            }, I.easing["easeInOut" + t] = function (t) {
                return .5 > t ? e(2 * t) / 2 : 1 - e(-2 * t + 2) / 2
            }
        })
    }();
    var _ = I.effects;
    I.effects.define("blind", "hide", function (t, e) {
        var i = {up: ["bottom", "top"], vertical: ["bottom", "top"], down: ["top", "bottom"], left: ["right", "left"], horizontal: ["right", "left"], right: ["left", "right"]}, s = I(this), n = t.direction || "up",
            o = s.cssClip(), a = {clip: I.extend({}, o)}, r = I.effects.createPlaceholder(s);
        a.clip[i[n][0]] = a.clip[i[n][1]], "show" === t.mode && (s.cssClip(a.clip), r && r.css(I.effects.clipToBox(a)), a.clip = o), r && r.animate(I.effects.clipToBox(a), t.duration, t.easing), s.animate(a, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: e
        })
    }), I.effects.define("bounce", function (t, e) {
        var i, s, n, o = I(this), a = t.mode, r = "hide" === a, h = "show" === a, l = t.direction || "up", c = t.distance, u = t.times || 5, d = 2 * u + (h || r ? 1 : 0), p = t.duration / d, f = t.easing,
            g = "up" === l || "down" === l ? "top" : "left", m = "up" === l || "left" === l, _ = 0, v = o.queue().length;
        for (I.effects.createPlaceholder(o), n = o.css(g), c || (c = o["top" === g ? "outerHeight" : "outerWidth"]() / 3), h && (s = {opacity: 1}, s[g] = n, o.css("opacity", 0).css(g, m ? 2 * -c : 2 * c).animate(s, p, f)), r && (c /= Math.pow(2, u - 1)), s = {}, s[g] = n; u > _; _++) i = {}, i[g] = (m ? "-=" : "+=") + c, o.animate(i, p, f).animate(s, p, f), c = r ? 2 * c : c / 2;
        r && (i = {opacity: 0}, i[g] = (m ? "-=" : "+=") + c, o.animate(i, p, f)), o.queue(e), I.effects.unshift(o, v, d + 1)
    }), I.effects.define("clip", "hide", function (t, e) {
        var i, s = {}, n = I(this), o = t.direction || "vertical", a = "both" === o, r = a || "horizontal" === o, h = a || "vertical" === o;
        i = n.cssClip(), s.clip = {
            top: h ? (i.bottom - i.top) / 2 : i.top,
            right: r ? (i.right - i.left) / 2 : i.right,
            bottom: h ? (i.bottom - i.top) / 2 : i.bottom,
            left: r ? (i.right - i.left) / 2 : i.left
        }, I.effects.createPlaceholder(n), "show" === t.mode && (n.cssClip(s.clip), s.clip = i), n.animate(s, {queue: !1, duration: t.duration, easing: t.easing, complete: e})
    }), I.effects.define("drop", "hide", function (t, e) {
        var i, s = I(this), n = t.mode, o = "show" === n, a = t.direction || "left", r = "up" === a || "down" === a ? "top" : "left", h = "up" === a || "left" === a ? "-=" : "+=", l = "+=" === h ? "-=" : "+=",
            c = {opacity: 0};
        I.effects.createPlaceholder(s), i = t.distance || s["top" === r ? "outerHeight" : "outerWidth"](!0) / 2, c[r] = h + i, o && (s.css(c), c[r] = l + i, c.opacity = 1), s.animate(c, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: e
        })
    }), I.effects.define("explode", "hide", function (t, e) {
        function i() {
            v.push(this), v.length === c * u && s()
        }

        function s() {
            d.css({visibility: "visible"}), I(v).remove(), e()
        }

        var n, o, a, r, h, l, c = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3, u = c, d = I(this), p = t.mode, f = "show" === p, g = d.show().css("visibility", "hidden").offset(), m = Math.ceil(d.outerWidth() / u),
            _ = Math.ceil(d.outerHeight() / c), v = [];
        for (n = 0; c > n; n++) for (r = g.top + n * _, l = n - (c - 1) / 2, o = 0; u > o; o++) a = g.left + o * m, h = o - (u - 1) / 2, d.clone().appendTo("body").wrap("<div></div>").css({
            position: "absolute",
            visibility: "visible",
            left: -o * m,
            top: -n * _
        }).parent().addClass("ui-effects-explode").css({
            position: "absolute",
            overflow: "hidden",
            width: m,
            height: _,
            left: a + (f ? h * m : 0),
            top: r + (f ? l * _ : 0),
            opacity: f ? 0 : 1
        }).animate({left: a + (f ? 0 : h * m), top: r + (f ? 0 : l * _), opacity: f ? 1 : 0}, t.duration || 500, t.easing, i)
    }), I.effects.define("fade", "toggle", function (t, e) {
        var i = "show" === t.mode;
        I(this).css("opacity", i ? 0 : 1).animate({opacity: i ? 1 : 0}, {queue: !1, duration: t.duration, easing: t.easing, complete: e})
    }), I.effects.define("fold", "hide", function (e, t) {
        var i = I(this), s = e.mode, n = "show" === s, o = "hide" === s, a = e.size || 15, r = /([0-9]+)%/.exec(a), h = !!e.horizFirst, l = h ? ["right", "bottom"] : ["bottom", "right"], c = e.duration / 2,
            u = I.effects.createPlaceholder(i), d = i.cssClip(), p = {clip: I.extend({}, d)}, f = {clip: I.extend({}, d)}, g = [d[l[0]], d[l[1]]], m = i.queue().length;
        r && (a = parseInt(r[1], 10) / 100 * g[o ? 0 : 1]), p.clip[l[0]] = a, f.clip[l[0]] = a, f.clip[l[1]] = 0, n && (i.cssClip(f.clip), u && u.css(I.effects.clipToBox(f)), f.clip = d), i.queue(function (t) {
            u && u.animate(I.effects.clipToBox(p), c, e.easing).animate(I.effects.clipToBox(f), c, e.easing), t()
        }).animate(p, c, e.easing).animate(f, c, e.easing).queue(t), I.effects.unshift(i, m, 4)
    }), I.effects.define("highlight", "show", function (t, e) {
        var i = I(this), s = {backgroundColor: i.css("backgroundColor")};
        "hide" === t.mode && (s.opacity = 0), I.effects.saveStyle(i), i.css({backgroundImage: "none", backgroundColor: t.color || "#ffff99"}).animate(s, {queue: !1, duration: t.duration, easing: t.easing, complete: e})
    }), I.effects.define("size", function (n, e) {
        var t, o, i, s = I(this), a = ["fontSize"], r = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"], h = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], l = n.mode,
            c = "effect" !== l, u = n.scale || "both", d = n.origin || ["middle", "center"], p = s.css("position"), f = s.position(), g = I.effects.scaledDimensions(s), m = n.from || g,
            _ = n.to || I.effects.scaledDimensions(s, 0);
        I.effects.createPlaceholder(s), "show" === l && (i = m, m = _, _ = i), o = {
            from: {y: m.height / g.height, x: m.width / g.width},
            to: {y: _.height / g.height, x: _.width / g.width}
        }, ("box" === u || "both" === u) && (o.from.y !== o.to.y && (m = I.effects.setTransition(s, r, o.from.y, m), _ = I.effects.setTransition(s, r, o.to.y, _)), o.from.x !== o.to.x && (m = I.effects.setTransition(s, h, o.from.x, m), _ = I.effects.setTransition(s, h, o.to.x, _))), ("content" === u || "both" === u) && o.from.y !== o.to.y && (m = I.effects.setTransition(s, a, o.from.y, m), _ = I.effects.setTransition(s, a, o.to.y, _)), d && (t = I.effects.getBaseline(d, g), m.top = (g.outerHeight - m.outerHeight) * t.y + f.top, m.left = (g.outerWidth - m.outerWidth) * t.x + f.left, _.top = (g.outerHeight - _.outerHeight) * t.y + f.top, _.left = (g.outerWidth - _.outerWidth) * t.x + f.left), s.css(m), ("content" === u || "both" === u) && (r = r.concat(["marginTop", "marginBottom"]).concat(a), h = h.concat(["marginLeft", "marginRight"]), s.find("*[width]").each(function () {
            var t = I(this), e = I.effects.scaledDimensions(t), i = {height: e.height * o.from.y, width: e.width * o.from.x, outerHeight: e.outerHeight * o.from.y, outerWidth: e.outerWidth * o.from.x},
                s = {height: e.height * o.to.y, width: e.width * o.to.x, outerHeight: e.height * o.to.y, outerWidth: e.width * o.to.x};
            o.from.y !== o.to.y && (i = I.effects.setTransition(t, r, o.from.y, i), s = I.effects.setTransition(t, r, o.to.y, s)), o.from.x !== o.to.x && (i = I.effects.setTransition(t, h, o.from.x, i), s = I.effects.setTransition(t, h, o.to.x, s)), c && I.effects.saveStyle(t), t.css(i), t.animate(s, n.duration, n.easing, function () {
                c && I.effects.restoreStyle(t)
            })
        })), s.animate(_, {
            queue: !1, duration: n.duration, easing: n.easing, complete: function () {
                var t = s.offset();
                0 === _.opacity && s.css("opacity", m.opacity), c || (s.css("position", "static" === p ? "relative" : p).offset(t), I.effects.saveStyle(s)), e()
            }
        })
    }), I.effects.define("scale", function (t, e) {
        var i = I(this), s = t.mode, n = parseInt(t.percent, 10) || (0 === parseInt(t.percent, 10) ? 0 : "effect" !== s ? 0 : 100),
            o = I.extend(!0, {from: I.effects.scaledDimensions(i), to: I.effects.scaledDimensions(i, n, t.direction || "both"), origin: t.origin || ["middle", "center"]}, t);
        t.fade && (o.from.opacity = 1, o.to.opacity = 0), I.effects.effect.size.call(this, o, e)
    }), I.effects.define("puff", "hide", function (t, e) {
        var i = I.extend(!0, {}, t, {fade: !0, percent: parseInt(t.percent, 10) || 150});
        I.effects.effect.scale.call(this, i, e)
    }), I.effects.define("pulsate", "show", function (t, e) {
        var i = I(this), s = t.mode, n = "show" === s, o = "hide" === s, a = n || o, r = 2 * (t.times || 5) + (a ? 1 : 0), h = t.duration / r, l = 0, c = 1, u = i.queue().length;
        for ((n || !i.is(":visible")) && (i.css("opacity", 0).show(), l = 1); r > c; c++) i.animate({opacity: l}, h, t.easing), l = 1 - l;
        i.animate({opacity: l}, h, t.easing), i.queue(e), I.effects.unshift(i, u, r + 1)
    }), I.effects.define("shake", function (t, e) {
        var i = 1, s = I(this), n = t.direction || "left", o = t.distance || 20, a = t.times || 3, r = 2 * a + 1, h = Math.round(t.duration / r), l = "up" === n || "down" === n ? "top" : "left",
            c = "up" === n || "left" === n, u = {}, d = {}, p = {}, f = s.queue().length;
        for (I.effects.createPlaceholder(s), u[l] = (c ? "-=" : "+=") + o, d[l] = (c ? "+=" : "-=") + 2 * o, p[l] = (c ? "-=" : "+=") + 2 * o, s.animate(u, h, t.easing); a > i; i++) s.animate(d, h, t.easing).animate(p, h, t.easing);
        s.animate(d, h, t.easing).animate(u, h / 2, t.easing).queue(e), I.effects.unshift(s, f, r + 1)
    }), I.effects.define("slide", "show", function (t, e) {
        var i, s, n = I(this), o = {up: ["bottom", "top"], down: ["top", "bottom"], left: ["right", "left"], right: ["left", "right"]}, a = t.mode, r = t.direction || "left",
            h = "up" === r || "down" === r ? "top" : "left", l = "up" === r || "left" === r, c = t.distance || n["top" === h ? "outerHeight" : "outerWidth"](!0), u = {};
        I.effects.createPlaceholder(n), i = n.cssClip(), s = n.position()[h], u[h] = (l ? -1 : 1) * c + s, u.clip = n.cssClip(), u.clip[o[r][1]] = u.clip[o[r][0]], "show" === a && (n.cssClip(u.clip), n.css(h, u[h]), u.clip = i, u[h] = s), n.animate(u, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: e
        })
    });
    var _;
    I.uiBackCompat !== !1 && (_ = I.effects.define("transfer", function (t, e) {
        I(this).transfer(t, e)
    }))
});
/* Ammina JS file original /bitrix/templates/avtoshkola/js/swiper.min.js */
!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Swiper = t()
}(this, function () {
    "use strict";
    var f = "undefined" == typeof document ? {
        body: {}, addEventListener: function () {
        }, removeEventListener: function () {
        }, activeElement: {
            blur: function () {
            }, nodeName: ""
        }, querySelector: function () {
            return null
        }, querySelectorAll: function () {
            return []
        }, getElementById: function () {
            return null
        }, createEvent: function () {
            return {
                initEvent: function () {
                }
            }
        }, createElement: function () {
            return {
                children: [], childNodes: [], style: {}, setAttribute: function () {
                }, getElementsByTagName: function () {
                    return []
                }
            }
        }, location: {hash: ""}
    } : document, ae = "undefined" == typeof window ? {
        document: f, navigator: {userAgent: ""}, location: {}, history: {}, CustomEvent: function () {
            return this
        }, addEventListener: function () {
        }, removeEventListener: function () {
        }, getComputedStyle: function () {
            return {
                getPropertyValue: function () {
                    return ""
                }
            }
        }, Image: function () {
        }, Date: function () {
        }, screen: {}, setTimeout: function () {
        }, clearTimeout: function () {
        }
    } : window, l = function (e) {
        for (var t = 0; t < e.length; t += 1) this[t] = e[t];
        return this.length = e.length, this
    };

    function $(e, t) {
        var i = [], s = 0;
        if (e && !t && e instanceof l) return e;
        if (e) if ("string" == typeof e) {
            var a, r, n = e.trim();
            if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
                var o = "div";
                for (0 === n.indexOf("<li") && (o = "ul"), 0 === n.indexOf("<tr") && (o = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (o = "tr"), 0 === n.indexOf("<tbody") && (o = "table"), 0 === n.indexOf("<option") && (o = "select"), (r = f.createElement(o)).innerHTML = n, s = 0; s < r.childNodes.length; s += 1) i.push(r.childNodes[s])
            } else for (a = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || f).querySelectorAll(e.trim()) : [f.getElementById(e.trim().split("#")[1])], s = 0; s < a.length; s += 1) a[s] && i.push(a[s])
        } else if (e.nodeType || e === ae || e === f) i.push(e); else if (e.length > 0 && e[0].nodeType) for (s = 0; s < e.length; s += 1) i.push(e[s]);
        return new l(i)
    }

    function r(e) {
        for (var t = [], i = 0; i < e.length; i += 1) -1 === t.indexOf(e[i]) && t.push(e[i]);
        return t
    }

    $.fn = l.prototype, $.Class = l, $.Dom7 = l;
    var t = {
        addClass: function (e) {
            if (void 0 === e) return this;
            for (var t = e.split(" "), i = 0; i < t.length; i += 1) for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.add(t[i]);
            return this
        }, removeClass: function (e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1) for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.remove(t[i]);
            return this
        }, hasClass: function (e) {
            return !!this[0] && this[0].classList.contains(e)
        }, toggleClass: function (e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1) for (var s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.toggle(t[i]);
            return this
        }, attr: function (e, t) {
            var i = arguments;
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (var s = 0; s < this.length; s += 1) if (2 === i.length) this[s].setAttribute(e, t); else for (var a in e) this[s][a] = e[a], this[s].setAttribute(a, e[a]);
            return this
        }, removeAttr: function (e) {
            for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        }, data: function (e, t) {
            var i;
            if (void 0 !== t) {
                for (var s = 0; s < this.length; s += 1) (i = this[s]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;
                return this
            }
            if (i = this[0]) {
                if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage) return i.dom7ElementDataStorage[e];
                var a = i.getAttribute("data-" + e);
                return a || void 0
            }
        }, transform: function (e) {
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                i.webkitTransform = e, i.transform = e
            }
            return this
        }, transition: function (e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                i.webkitTransitionDuration = e, i.transitionDuration = e
            }
            return this
        }, on: function () {
            for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
            var s = t[0], r = t[1], n = t[2], a = t[3];

            function o(e) {
                var t = e.target;
                if (t) {
                    var i = e.target.dom7EventData || [];
                    if (i.indexOf(e) < 0 && i.unshift(e), $(t).is(r)) n.apply(t, i); else for (var s = $(t).parents(), a = 0; a < s.length; a += 1) $(s[a]).is(r) && n.apply(s[a], i)
                }
            }

            function l(e) {
                var t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t)
            }

            "function" == typeof t[1] && (s = (e = t)[0], n = e[1], a = e[2], r = void 0), a || (a = !1);
            for (var d, h = s.split(" "), p = 0; p < this.length; p += 1) {
                var c = this[p];
                if (r) for (d = 0; d < h.length; d += 1) {
                    var u = h[d];
                    c.dom7LiveListeners || (c.dom7LiveListeners = {}), c.dom7LiveListeners[u] || (c.dom7LiveListeners[u] = []), c.dom7LiveListeners[u].push({listener: n, proxyListener: o}), c.addEventListener(u, o, a)
                } else for (d = 0; d < h.length; d += 1) {
                    var v = h[d];
                    c.dom7Listeners || (c.dom7Listeners = {}), c.dom7Listeners[v] || (c.dom7Listeners[v] = []), c.dom7Listeners[v].push({listener: n, proxyListener: l}), c.addEventListener(v, l, a)
                }
            }
            return this
        }, off: function () {
            for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
            var s = t[0], a = t[1], r = t[2], n = t[3];
            "function" == typeof t[1] && (s = (e = t)[0], r = e[1], n = e[2], a = void 0), n || (n = !1);
            for (var o = s.split(" "), l = 0; l < o.length; l += 1) for (var d = o[l], h = 0; h < this.length; h += 1) {
                var p = this[h], c = void 0;
                if (!a && p.dom7Listeners ? c = p.dom7Listeners[d] : a && p.dom7LiveListeners && (c = p.dom7LiveListeners[d]), c && c.length) for (var u = c.length - 1; u >= 0; u -= 1) {
                    var v = c[u];
                    r && v.listener === r ? (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1)) : r && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === r ? (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1)) : r || (p.removeEventListener(d, v.proxyListener, n), c.splice(u, 1))
                }
            }
            return this
        }, trigger: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            for (var i = e[0].split(" "), s = e[1], a = 0; a < i.length; a += 1) for (var r = i[a], n = 0; n < this.length; n += 1) {
                var o = this[n], l = void 0;
                try {
                    l = new ae.CustomEvent(r, {detail: s, bubbles: !0, cancelable: !0})
                } catch (e) {
                    (l = f.createEvent("Event")).initEvent(r, !0, !0), l.detail = s
                }
                o.dom7EventData = e.filter(function (e, t) {
                    return t > 0
                }), o.dispatchEvent(l), o.dom7EventData = [], delete o.dom7EventData
            }
            return this
        }, transitionEnd: function (t) {
            var i, s = ["webkitTransitionEnd", "transitionend"], a = this;

            function r(e) {
                if (e.target === this) for (t.call(this, e), i = 0; i < s.length; i += 1) a.off(s[i], r)
            }

            if (t) for (i = 0; i < s.length; i += 1) a.on(s[i], r);
            return this
        }, outerWidth: function (e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        }, outerHeight: function (e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        }, offset: function () {
            if (this.length > 0) {
                var e = this[0], t = e.getBoundingClientRect(), i = f.body, s = e.clientTop || i.clientTop || 0, a = e.clientLeft || i.clientLeft || 0, r = e === ae ? ae.scrollY : e.scrollTop,
                    n = e === ae ? ae.scrollX : e.scrollLeft;
                return {top: t.top + r - s, left: t.left + n - a}
            }
            return null
        }, css: function (e, t) {
            var i;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (i = 0; i < this.length; i += 1) for (var s in e) this[i].style[s] = e[s];
                    return this
                }
                if (this[0]) return ae.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
                return this
            }
            return this
        }, each: function (e) {
            if (!e) return this;
            for (var t = 0; t < this.length; t += 1) if (!1 === e.call(this[t], t, this[t])) return this;
            return this
        }, html: function (e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
            for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        }, text: function (e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        }, is: function (e) {
            var t, i, s = this[0];
            if (!s || void 0 === e) return !1;
            if ("string" == typeof e) {
                if (s.matches) return s.matches(e);
                if (s.webkitMatchesSelector) return s.webkitMatchesSelector(e);
                if (s.msMatchesSelector) return s.msMatchesSelector(e);
                for (t = $(e), i = 0; i < t.length; i += 1) if (t[i] === s) return !0;
                return !1
            }
            if (e === f) return s === f;
            if (e === ae) return s === ae;
            if (e.nodeType || e instanceof l) {
                for (t = e.nodeType ? [e] : e, i = 0; i < t.length; i += 1) if (t[i] === s) return !0;
                return !1
            }
            return !1
        }, index: function () {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        }, eq: function (e) {
            if (void 0 === e) return this;
            var t, i = this.length;
            return new l(e > i - 1 ? [] : e < 0 ? (t = i + e) < 0 ? [] : [this[t]] : [this[e]])
        }, append: function () {
            for (var e, t = [], i = arguments.length; i--;) t[i] = arguments[i];
            for (var s = 0; s < t.length; s += 1) {
                e = t[s];
                for (var a = 0; a < this.length; a += 1) if ("string" == typeof e) {
                    var r = f.createElement("div");
                    for (r.innerHTML = e; r.firstChild;) this[a].appendChild(r.firstChild)
                } else if (e instanceof l) for (var n = 0; n < e.length; n += 1) this[a].appendChild(e[n]); else this[a].appendChild(e)
            }
            return this
        }, prepend: function (e) {
            var t, i;
            for (t = 0; t < this.length; t += 1) if ("string" == typeof e) {
                var s = f.createElement("div");
                for (s.innerHTML = e, i = s.childNodes.length - 1; i >= 0; i -= 1) this[t].insertBefore(s.childNodes[i], this[t].childNodes[0])
            } else if (e instanceof l) for (i = 0; i < e.length; i += 1) this[t].insertBefore(e[i], this[t].childNodes[0]); else this[t].insertBefore(e, this[t].childNodes[0]);
            return this
        }, next: function (e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && $(this[0].nextElementSibling).is(e) ? new l([this[0].nextElementSibling]) : new l([]) : this[0].nextElementSibling ? new l([this[0].nextElementSibling]) : new l([]) : new l([])
        }, nextAll: function (e) {
            var t = [], i = this[0];
            if (!i) return new l([]);
            for (; i.nextElementSibling;) {
                var s = i.nextElementSibling;
                e ? $(s).is(e) && t.push(s) : t.push(s), i = s
            }
            return new l(t)
        }, prev: function (e) {
            if (this.length > 0) {
                var t = this[0];
                return e ? t.previousElementSibling && $(t.previousElementSibling).is(e) ? new l([t.previousElementSibling]) : new l([]) : t.previousElementSibling ? new l([t.previousElementSibling]) : new l([])
            }
            return new l([])
        }, prevAll: function (e) {
            var t = [], i = this[0];
            if (!i) return new l([]);
            for (; i.previousElementSibling;) {
                var s = i.previousElementSibling;
                e ? $(s).is(e) && t.push(s) : t.push(s), i = s
            }
            return new l(t)
        }, parent: function (e) {
            for (var t = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? $(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
            return $(r(t))
        }, parents: function (e) {
            for (var t = [], i = 0; i < this.length; i += 1) for (var s = this[i].parentNode; s;) e ? $(s).is(e) && t.push(s) : t.push(s), s = s.parentNode;
            return $(r(t))
        }, closest: function (e) {
            var t = this;
            return void 0 === e ? new l([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        }, find: function (e) {
            for (var t = [], i = 0; i < this.length; i += 1) for (var s = this[i].querySelectorAll(e), a = 0; a < s.length; a += 1) t.push(s[a]);
            return new l(t)
        }, children: function (e) {
            for (var t = [], i = 0; i < this.length; i += 1) for (var s = this[i].childNodes, a = 0; a < s.length; a += 1) e ? 1 === s[a].nodeType && $(s[a]).is(e) && t.push(s[a]) : 1 === s[a].nodeType && t.push(s[a]);
            return new l(r(t))
        }, filter: function (e) {
            for (var t = [], i = 0; i < this.length; i += 1) e.call(this[i], i, this[i]) && t.push(this[i]);
            return new l(t)
        }, remove: function () {
            for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        }, add: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var i, s;
            for (i = 0; i < e.length; i += 1) {
                var a = $(e[i]);
                for (s = 0; s < a.length; s += 1) this[this.length] = a[s], this.length += 1
            }
            return this
        }, styles: function () {
            return this[0] ? ae.getComputedStyle(this[0], null) : {}
        }
    };
    Object.keys(t).forEach(function (e) {
        $.fn[e] = $.fn[e] || t[e]
    });
    var re = {
        deleteProps: function (e) {
            var t = e;
            Object.keys(t).forEach(function (e) {
                try {
                    t[e] = null
                } catch (e) {
                }
                try {
                    delete t[e]
                } catch (e) {
                }
            })
        }, nextTick: function (e, t) {
            return void 0 === t && (t = 0), setTimeout(e, t)
        }, now: function () {
            return Date.now()
        }, getTranslate: function (e, t) {
            var i, s, a;
            void 0 === t && (t = "x");
            var r = ae.getComputedStyle(e, null);
            return ae.WebKitCSSMatrix ? ((s = r.transform || r.webkitTransform).split(",").length > 6 && (s = s.split(", ").map(function (e) {
                return e.replace(",", ".")
            }).join(", ")), a = new ae.WebKitCSSMatrix("none" === s ? "" : s)) : i = (a = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (s = ae.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (s = ae.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), s || 0
        }, parseUrlQuery: function (e) {
            var t, i, s, a, r = {}, n = e || ae.location.href;
            if ("string" == typeof n && n.length) for (a = (i = (n = n.indexOf("?") > -1 ? n.replace(/\S*\?/, "") : "").split("&").filter(function (e) {
                return "" !== e
            })).length, t = 0; t < a; t += 1) s = i[t].replace(/#\S+/g, "").split("="), r[decodeURIComponent(s[0])] = void 0 === s[1] ? void 0 : decodeURIComponent(s[1]) || "";
            return r
        }, isObject: function (e) {
            return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
        }, extend: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            for (var i = Object(e[0]), s = 1; s < e.length; s += 1) {
                var a = e[s];
                if (null != a) for (var r = Object.keys(Object(a)), n = 0, o = r.length; n < o; n += 1) {
                    var l = r[n], d = Object.getOwnPropertyDescriptor(a, l);
                    void 0 !== d && d.enumerable && (re.isObject(i[l]) && re.isObject(a[l]) ? re.extend(i[l], a[l]) : !re.isObject(i[l]) && re.isObject(a[l]) ? (i[l] = {}, re.extend(i[l], a[l])) : i[l] = a[l])
                }
            }
            return i
        }
    }, S = {
        touch: ae.Modernizr && !0 === ae.Modernizr.touch || !!(ae.navigator.maxTouchPoints > 0 || "ontouchstart" in ae || ae.DocumentTouch && f instanceof ae.DocumentTouch),
        pointerEvents: !!ae.PointerEvent && "maxTouchPoints" in ae.navigator && ae.navigator.maxTouchPoints > 0,
        observer: "MutationObserver" in ae || "WebkitMutationObserver" in ae,
        passiveListener: function () {
            var e = !1;
            try {
                var t = Object.defineProperty({}, "passive", {
                    get: function () {
                        e = !0
                    }
                });
                ae.addEventListener("testPassiveListener", null, t)
            } catch (e) {
            }
            return e
        }(),
        gestures: "ongesturestart" in ae
    }, e = function (e) {
        void 0 === e && (e = {});
        var t = this;
        t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function (e) {
            t.on(e, t.params.on[e])
        })
    }, i = {components: {configurable: !0}};
    e.prototype.on = function (e, t, i) {
        var s = this;
        if ("function" != typeof t) return s;
        var a = i ? "unshift" : "push";
        return e.split(" ").forEach(function (e) {
            s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][a](t)
        }), s
    }, e.prototype.once = function (i, s, e) {
        var a = this;
        if ("function" != typeof s) return a;

        function r() {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            a.off(i, r), r.f7proxy && delete r.f7proxy, s.apply(a, e)
        }

        return r.f7proxy = s, a.on(i, r, e)
    }, e.prototype.off = function (e, s) {
        var a = this;
        return a.eventsListeners ? (e.split(" ").forEach(function (i) {
            void 0 === s ? a.eventsListeners[i] = [] : a.eventsListeners[i] && a.eventsListeners[i].length && a.eventsListeners[i].forEach(function (e, t) {
                (e === s || e.f7proxy && e.f7proxy === s) && a.eventsListeners[i].splice(t, 1)
            })
        }), a) : a
    }, e.prototype.emit = function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        var i, s, a, r = this;
        if (!r.eventsListeners) return r;
        "string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], s = e.slice(1, e.length), a = r) : (i = e[0].events, s = e[0].data, a = e[0].context || r);
        var n = Array.isArray(i) ? i : i.split(" ");
        return n.forEach(function (e) {
            if (r.eventsListeners && r.eventsListeners[e]) {
                var t = [];
                r.eventsListeners[e].forEach(function (e) {
                    t.push(e)
                }), t.forEach(function (e) {
                    e.apply(a, s)
                })
            }
        }), r
    }, e.prototype.useModulesParams = function (i) {
        var s = this;
        s.modules && Object.keys(s.modules).forEach(function (e) {
            var t = s.modules[e];
            t.params && re.extend(i, t.params)
        })
    }, e.prototype.useModules = function (s) {
        void 0 === s && (s = {});
        var a = this;
        a.modules && Object.keys(a.modules).forEach(function (e) {
            var i = a.modules[e], t = s[e] || {};
            i.instance && Object.keys(i.instance).forEach(function (e) {
                var t = i.instance[e];
                a[e] = "function" == typeof t ? t.bind(a) : t
            }), i.on && a.on && Object.keys(i.on).forEach(function (e) {
                a.on(e, i.on[e])
            }), i.create && i.create.bind(a)(t)
        })
    }, i.components.set = function (e) {
        this.use && this.use(e)
    }, e.installModule = function (t) {
        for (var e = [], i = arguments.length - 1; i-- > 0;) e[i] = arguments[i + 1];
        var s = this;
        s.prototype.modules || (s.prototype.modules = {});
        var a = t.name || Object.keys(s.prototype.modules).length + "_" + re.now();
        return s.prototype.modules[a] = t, t.proto && Object.keys(t.proto).forEach(function (e) {
            s.prototype[e] = t.proto[e]
        }), t.static && Object.keys(t.static).forEach(function (e) {
            s[e] = t.static[e]
        }), t.install && t.install.apply(s, e), s
    }, e.use = function (e) {
        for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];
        var s = this;
        return Array.isArray(e) ? (e.forEach(function (e) {
            return s.installModule(e)
        }), s) : s.installModule.apply(s, [e].concat(t))
    }, Object.defineProperties(e, i);
    var s = {
        updateSize: function () {
            var e, t, i = this.$el;
            e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), re.extend(this, {
                width: e,
                height: t,
                size: this.isHorizontal() ? e : t
            }))
        }, updateSlides: function () {
            var t = this.params, e = this.$wrapperEl, i = this.size, s = this.rtlTranslate, a = this.wrongRTL, r = this.virtual && t.virtual.enabled, n = r ? this.virtual.slides.length : this.slides.length,
                o = e.children("." + this.params.slideClass), l = r ? this.virtual.slides.length : o.length, d = [], h = [], p = [];

            function c(e) {
                return !t.cssMode || e !== o.length - 1
            }

            var u = t.slidesOffsetBefore;
            "function" == typeof u && (u = t.slidesOffsetBefore.call(this));
            var v = t.slidesOffsetAfter;
            "function" == typeof v && (v = t.slidesOffsetAfter.call(this));
            var f = this.snapGrid.length, m = this.snapGrid.length, g = t.spaceBetween, b = -u, w = 0, y = 0;
            if (void 0 !== i) {
                var x, T;
                "string" == typeof g && g.indexOf("%") >= 0 && (g = parseFloat(g.replace("%", "")) / 100 * i), this.virtualSize = -g, s ? o.css({marginLeft: "", marginTop: ""}) : o.css({
                    marginRight: "",
                    marginBottom: ""
                }), t.slidesPerColumn > 1 && (x = Math.floor(l / t.slidesPerColumn) === l / this.params.slidesPerColumn ? l : Math.ceil(l / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (x = Math.max(x, t.slidesPerView * t.slidesPerColumn)));
                for (var E, S = t.slidesPerColumn, C = x / S, M = Math.floor(l / t.slidesPerColumn), P = 0; P < l; P += 1) {
                    T = 0;
                    var z = o.eq(P);
                    if (t.slidesPerColumn > 1) {
                        var k = void 0, $ = void 0, L = void 0;
                        if ("row" === t.slidesPerColumnFill && t.slidesPerGroup > 1) {
                            var I = Math.floor(P / (t.slidesPerGroup * t.slidesPerColumn)), D = P - t.slidesPerColumn * t.slidesPerGroup * I,
                                O = 0 === I ? t.slidesPerGroup : Math.min(Math.ceil((l - I * S * t.slidesPerGroup) / S), t.slidesPerGroup);
                            k = ($ = D - (L = Math.floor(D / O)) * O + I * t.slidesPerGroup) + L * x / S, z.css({
                                "-webkit-box-ordinal-group": k,
                                "-moz-box-ordinal-group": k,
                                "-ms-flex-order": k,
                                "-webkit-order": k,
                                order: k
                            })
                        } else "column" === t.slidesPerColumnFill ? (L = P - ($ = Math.floor(P / S)) * S, ($ > M || $ === M && L === S - 1) && (L += 1) >= S && (L = 0, $ += 1)) : $ = P - (L = Math.floor(P / C)) * C;
                        z.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== L && t.spaceBetween && t.spaceBetween + "px")
                    }
                    if ("none" !== z.css("display")) {
                        if ("auto" === t.slidesPerView) {
                            var A = ae.getComputedStyle(z[0], null), G = z[0].style.transform, B = z[0].style.webkitTransform;
                            if (G && (z[0].style.transform = "none"), B && (z[0].style.webkitTransform = "none"), t.roundLengths) T = this.isHorizontal() ? z.outerWidth(!0) : z.outerHeight(!0); else if (this.isHorizontal()) {
                                var H = parseFloat(A.getPropertyValue("width")), N = parseFloat(A.getPropertyValue("padding-left")), X = parseFloat(A.getPropertyValue("padding-right")),
                                    V = parseFloat(A.getPropertyValue("margin-left")), Y = parseFloat(A.getPropertyValue("margin-right")), F = A.getPropertyValue("box-sizing");
                                T = F && "border-box" === F ? H + V + Y : H + N + X + V + Y
                            } else {
                                var W = parseFloat(A.getPropertyValue("height")), R = parseFloat(A.getPropertyValue("padding-top")), q = parseFloat(A.getPropertyValue("padding-bottom")),
                                    j = parseFloat(A.getPropertyValue("margin-top")), K = parseFloat(A.getPropertyValue("margin-bottom")), U = A.getPropertyValue("box-sizing");
                                T = U && "border-box" === U ? W + j + K : W + R + q + j + K
                            }
                            G && (z[0].style.transform = G), B && (z[0].style.webkitTransform = B), t.roundLengths && (T = Math.floor(T))
                        } else T = (i - (t.slidesPerView - 1) * g) / t.slidesPerView, t.roundLengths && (T = Math.floor(T)), o[P] && (this.isHorizontal() ? o[P].style.width = T + "px" : o[P].style.height = T + "px");
                        o[P] && (o[P].swiperSlideSize = T), p.push(T), t.centeredSlides ? (b = b + T / 2 + w / 2 + g, 0 === w && 0 !== P && (b = b - i / 2 - g), 0 === P && (b = b - i / 2 - g), Math.abs(b) < .001 && (b = 0), t.roundLengths && (b = Math.floor(b)), y % t.slidesPerGroup == 0 && d.push(b), h.push(b)) : (t.roundLengths && (b = Math.floor(b)), (y - Math.min(this.params.slidesPerGroupSkip, y)) % this.params.slidesPerGroup == 0 && d.push(b), h.push(b), b = b + T + g), this.virtualSize += T + g, w = T, y += 1
                    }
                }
                if (this.virtualSize = Math.max(this.virtualSize, i) + v, s && a && ("slide" === t.effect || "coverflow" === t.effect) && e.css({width: this.virtualSize + t.spaceBetween + "px"}), t.setWrapperSize && (this.isHorizontal() ? e.css({width: this.virtualSize + t.spaceBetween + "px"}) : e.css({height: this.virtualSize + t.spaceBetween + "px"})), t.slidesPerColumn > 1 && (this.virtualSize = (T + t.spaceBetween) * x, this.virtualSize = Math.ceil(this.virtualSize / t.slidesPerColumn) - t.spaceBetween, this.isHorizontal() ? e.css({width: this.virtualSize + t.spaceBetween + "px"}) : e.css({height: this.virtualSize + t.spaceBetween + "px"}), t.centeredSlides)) {
                    E = [];
                    for (var _ = 0; _ < d.length; _ += 1) {
                        var Z = d[_];
                        t.roundLengths && (Z = Math.floor(Z)), d[_] < this.virtualSize + d[0] && E.push(Z)
                    }
                    d = E
                }
                if (!t.centeredSlides) {
                    E = [];
                    for (var Q = 0; Q < d.length; Q += 1) {
                        var J = d[Q];
                        t.roundLengths && (J = Math.floor(J)), d[Q] <= this.virtualSize - i && E.push(J)
                    }
                    d = E, Math.floor(this.virtualSize - i) - Math.floor(d[d.length - 1]) > 1 && d.push(this.virtualSize - i)
                }
                if (0 === d.length && (d = [0]), 0 !== t.spaceBetween && (this.isHorizontal() ? s ? o.filter(c).css({marginLeft: g + "px"}) : o.filter(c).css({marginRight: g + "px"}) : o.filter(c).css({marginBottom: g + "px"})), t.centeredSlides && t.centeredSlidesBounds) {
                    var ee = 0;
                    p.forEach(function (e) {
                        ee += e + (t.spaceBetween ? t.spaceBetween : 0)
                    });
                    var te = (ee -= t.spaceBetween) - i;
                    d = d.map(function (e) {
                        return e < 0 ? -u : e > te ? te + v : e
                    })
                }
                if (t.centerInsufficientSlides) {
                    var ie = 0;
                    if (p.forEach(function (e) {
                        ie += e + (t.spaceBetween ? t.spaceBetween : 0)
                    }), (ie -= t.spaceBetween) < i) {
                        var se = (i - ie) / 2;
                        d.forEach(function (e, t) {
                            d[t] = e - se
                        }), h.forEach(function (e, t) {
                            h[t] = e + se
                        })
                    }
                }
                re.extend(this, {
                    slides: o,
                    snapGrid: d,
                    slidesGrid: h,
                    slidesSizesGrid: p
                }), l !== n && this.emit("slidesLengthChange"), d.length !== f && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), h.length !== m && this.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && this.updateSlidesOffset()
            }
        }, updateAutoHeight: function (e) {
            var t, i = [], s = 0;
            if ("number" == typeof e ? this.setTransition(e) : !0 === e && this.setTransition(this.params.speed), "auto" !== this.params.slidesPerView && this.params.slidesPerView > 1) for (t = 0; t < Math.ceil(this.params.slidesPerView); t += 1) {
                var a = this.activeIndex + t;
                if (a > this.slides.length) break;
                i.push(this.slides.eq(a)[0])
            } else i.push(this.slides.eq(this.activeIndex)[0]);
            for (t = 0; t < i.length; t += 1) if (void 0 !== i[t]) {
                var r = i[t].offsetHeight;
                s = r > s ? r : s
            }
            s && this.$wrapperEl.css("height", s + "px")
        }, updateSlidesOffset: function () {
            for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
        }, updateSlidesProgress: function (e) {
            void 0 === e && (e = this && this.translate || 0);
            var t = this.params, i = this.slides, s = this.rtlTranslate;
            if (0 !== i.length) {
                void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                var a = -e;
                s && (a = e), i.removeClass(t.slideVisibleClass), this.visibleSlidesIndexes = [], this.visibleSlides = [];
                for (var r = 0; r < i.length; r += 1) {
                    var n = i[r], o = (a + (t.centeredSlides ? this.minTranslate() : 0) - n.swiperSlideOffset) / (n.swiperSlideSize + t.spaceBetween);
                    if (t.watchSlidesVisibility) {
                        var l = -(a - n.swiperSlideOffset), d = l + this.slidesSizesGrid[r];
                        (l >= 0 && l < this.size - 1 || d > 1 && d <= this.size || l <= 0 && d >= this.size) && (this.visibleSlides.push(n), this.visibleSlidesIndexes.push(r), i.eq(r).addClass(t.slideVisibleClass))
                    }
                    n.progress = s ? -o : o
                }
                this.visibleSlides = $(this.visibleSlides)
            }
        }, updateProgress: function (e) {
            if (void 0 === e) {
                var t = this.rtlTranslate ? -1 : 1;
                e = this && this.translate && this.translate * t || 0
            }
            var i = this.params, s = this.maxTranslate() - this.minTranslate(), a = this.progress, r = this.isBeginning, n = this.isEnd, o = r, l = n;
            0 === s ? (a = 0, r = !0, n = !0) : (r = (a = (e - this.minTranslate()) / s) <= 0, n = a >= 1), re.extend(this, {
                progress: a,
                isBeginning: r,
                isEnd: n
            }), (i.watchSlidesProgress || i.watchSlidesVisibility) && this.updateSlidesProgress(e), r && !o && this.emit("reachBeginning toEdge"), n && !l && this.emit("reachEnd toEdge"), (o && !r || l && !n) && this.emit("fromEdge"), this.emit("progress", a)
        }, updateSlidesClasses: function () {
            var e, t = this.slides, i = this.params, s = this.$wrapperEl, a = this.activeIndex, r = this.realIndex, n = this.virtual && i.virtual.enabled;
            t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = n ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]') : t.eq(a)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]').addClass(i.slideDuplicateActiveClass));
            var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
            i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
            var l = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
            i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
        }, updateActiveIndex: function (e) {
            var t, i = this.rtlTranslate ? this.translate : -this.translate, s = this.slidesGrid, a = this.snapGrid, r = this.params, n = this.activeIndex, o = this.realIndex, l = this.snapIndex, d = e;
            if (void 0 === d) {
                for (var h = 0; h < s.length; h += 1) void 0 !== s[h + 1] ? i >= s[h] && i < s[h + 1] - (s[h + 1] - s[h]) / 2 ? d = h : i >= s[h] && i < s[h + 1] && (d = h + 1) : i >= s[h] && (d = h);
                r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0)
            }
            if (a.indexOf(i) >= 0) t = a.indexOf(i); else {
                var p = Math.min(r.slidesPerGroupSkip, d);
                t = p + Math.floor((d - p) / r.slidesPerGroup)
            }
            if (t >= a.length && (t = a.length - 1), d !== n) {
                var c = parseInt(this.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
                re.extend(this, {
                    snapIndex: t,
                    realIndex: c,
                    previousIndex: n,
                    activeIndex: d
                }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), o !== c && this.emit("realIndexChange"), (this.initialized || this.runCallbacksOnInit) && this.emit("slideChange")
            } else t !== l && (this.snapIndex = t, this.emit("snapIndexChange"))
        }, updateClickedSlide: function (e) {
            var t = this.params, i = $(e.target).closest("." + t.slideClass)[0], s = !1;
            if (i) for (var a = 0; a < this.slides.length; a += 1) this.slides[a] === i && (s = !0);
            if (!i || !s) return this.clickedSlide = void 0, void (this.clickedIndex = void 0);
            this.clickedSlide = i, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt($(i).attr("data-swiper-slide-index"), 10) : this.clickedIndex = $(i).index(), t.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
        }
    };
    var a = {
        getTranslate: function (e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var t = this.params, i = this.rtlTranslate, s = this.translate, a = this.$wrapperEl;
            if (t.virtualTranslate) return i ? -s : s;
            if (t.cssMode) return s;
            var r = re.getTranslate(a[0], e);
            return i && (r = -r), r || 0
        }, setTranslate: function (e, t) {
            var i = this.rtlTranslate, s = this.params, a = this.$wrapperEl, r = this.wrapperEl, n = this.progress, o = 0, l = 0;
            this.isHorizontal() ? o = i ? -e : e : l = e, s.roundLengths && (o = Math.floor(o), l = Math.floor(l)), s.cssMode ? r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -o : -l : s.virtualTranslate || a.transform("translate3d(" + o + "px, " + l + "px, 0px)"), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? o : l;
            var d = this.maxTranslate() - this.minTranslate();
            (0 === d ? 0 : (e - this.minTranslate()) / d) !== n && this.updateProgress(e), this.emit("setTranslate", this.translate, t)
        }, minTranslate: function () {
            return -this.snapGrid[0]
        }, maxTranslate: function () {
            return -this.snapGrid[this.snapGrid.length - 1]
        }, translateTo: function (e, t, i, s, a) {
            var r;
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === s && (s = !0);
            var n = this, o = n.params, l = n.wrapperEl;
            if (n.animating && o.preventInteractionOnTransition) return !1;
            var d, h = n.minTranslate(), p = n.maxTranslate();
            if (d = s && e > h ? h : s && e < p ? p : e, n.updateProgress(d), o.cssMode) {
                var c = n.isHorizontal();
                return 0 === t ? l[c ? "scrollLeft" : "scrollTop"] = -d : l.scrollTo ? l.scrollTo(((r = {})[c ? "left" : "top"] = -d, r.behavior = "smooth", r)) : l[c ? "scrollLeft" : "scrollTop"] = -d, !0
            }
            return 0 === t ? (n.setTransition(0), n.setTranslate(d), i && (n.emit("beforeTransitionStart", t, a), n.emit("transitionEnd"))) : (n.setTransition(t), n.setTranslate(d), i && (n.emit("beforeTransitionStart", t, a), n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function (e) {
                n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, i && n.emit("transitionEnd"))
            }), n.$wrapperEl[0].addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onTranslateToWrapperTransitionEnd))), !0
        }
    };
    var n = {
        setTransition: function (e, t) {
            this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
        }, transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex, s = this.params, a = this.previousIndex;
            if (!s.cssMode) {
                s.autoHeight && this.updateAutoHeight();
                var r = t;
                if (r || (r = i > a ? "next" : i < a ? "prev" : "reset"), this.emit("transitionStart"), e && i !== a) {
                    if ("reset" === r) return void this.emit("slideResetTransitionStart");
                    this.emit("slideChangeTransitionStart"), "next" === r ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")
                }
            }
        }, transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            var i = this.activeIndex, s = this.previousIndex, a = this.params;
            if (this.animating = !1, !a.cssMode) {
                this.setTransition(0);
                var r = t;
                if (r || (r = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== s) {
                    if ("reset" === r) return void this.emit("slideResetTransitionEnd");
                    this.emit("slideChangeTransitionEnd"), "next" === r ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd")
                }
            }
        }
    };
    var o = {
        slideTo: function (e, t, i, s) {
            var a;
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
            var r = this, n = e;
            n < 0 && (n = 0);
            var o = r.params, l = r.snapGrid, d = r.slidesGrid, h = r.previousIndex, p = r.activeIndex, c = r.rtlTranslate, u = r.wrapperEl;
            if (r.animating && o.preventInteractionOnTransition) return !1;
            var v = Math.min(r.params.slidesPerGroupSkip, n), f = v + Math.floor((n - v) / r.params.slidesPerGroup);
            f >= l.length && (f = l.length - 1), (p || o.initialSlide || 0) === (h || 0) && i && r.emit("beforeSlideChangeStart");
            var m, g = -l[f];
            if (r.updateProgress(g), o.normalizeSlideIndex) for (var b = 0; b < d.length; b += 1) -Math.floor(100 * g) >= Math.floor(100 * d[b]) && (n = b);
            if (r.initialized && n !== p) {
                if (!r.allowSlideNext && g < r.translate && g < r.minTranslate()) return !1;
                if (!r.allowSlidePrev && g > r.translate && g > r.maxTranslate() && (p || 0) !== n) return !1
            }
            if (m = n > p ? "next" : n < p ? "prev" : "reset", c && -g === r.translate || !c && g === r.translate) return r.updateActiveIndex(n), o.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== o.effect && r.setTranslate(g), "reset" !== m && (r.transitionStart(i, m), r.transitionEnd(i, m)), !1;
            if (o.cssMode) {
                var w = r.isHorizontal();
                return 0 === t ? u[w ? "scrollLeft" : "scrollTop"] = -g : u.scrollTo ? u.scrollTo(((a = {})[w ? "left" : "top"] = -g, a.behavior = "smooth", a)) : u[w ? "scrollLeft" : "scrollTop"] = -g, !0
            }
            return 0 === t ? (r.setTransition(0), r.setTranslate(g), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, s), r.transitionStart(i, m), r.transitionEnd(i, m)) : (r.setTransition(t), r.setTranslate(g), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, s), r.transitionStart(i, m), r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function (e) {
                r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(i, m))
            }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))), !0
        }, slideToLoop: function (e, t, i, s) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
            var a = e;
            return this.params.loop && (a += this.loopedSlides), this.slideTo(a, t, i, s)
        }, slideNext: function (e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var s = this.params, a = this.animating, r = this.activeIndex < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup;
            if (s.loop) {
                if (a) return !1;
                this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
            }
            return this.slideTo(this.activeIndex + r, e, t, i)
        }, slidePrev: function (e, t, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var s = this.params, a = this.animating, r = this.snapGrid, n = this.slidesGrid, o = this.rtlTranslate;
            if (s.loop) {
                if (a) return !1;
                this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft
            }

            function l(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }

            var d, h = l(o ? this.translate : -this.translate), p = r.map(function (e) {
                return l(e)
            }), c = (n.map(function (e) {
                return l(e)
            }), r[p.indexOf(h)], r[p.indexOf(h) - 1]);
            return void 0 === c && s.cssMode && r.forEach(function (e) {
                !c && h >= e && (c = e)
            }), void 0 !== c && (d = n.indexOf(c)) < 0 && (d = this.activeIndex - 1), this.slideTo(d, e, t, i)
        }, slideReset: function (e, t, i) {
            return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i)
        }, slideToClosest: function (e, t, i, s) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === s && (s = .5);
            var a = this.activeIndex, r = Math.min(this.params.slidesPerGroupSkip, a), n = r + Math.floor((a - r) / this.params.slidesPerGroup), o = this.rtlTranslate ? this.translate : -this.translate;
            if (o >= this.snapGrid[n]) {
                var l = this.snapGrid[n];
                o - l > (this.snapGrid[n + 1] - l) * s && (a += this.params.slidesPerGroup)
            } else {
                var d = this.snapGrid[n - 1];
                o - d <= (this.snapGrid[n] - d) * s && (a -= this.params.slidesPerGroup)
            }
            return a = Math.max(a, 0), a = Math.min(a, this.slidesGrid.length - 1), this.slideTo(a, e, t, i)
        }, slideToClickedSlide: function () {
            var e, t = this, i = t.params, s = t.$wrapperEl, a = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView, r = t.clickedIndex;
            if (i.loop) {
                if (t.animating) return;
                e = parseInt($(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? r < t.loopedSlides - a / 2 || r > t.slides.length - t.loopedSlides + a / 2 ? (t.loopFix(), r = s.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), re.nextTick(function () {
                    t.slideTo(r)
                })) : t.slideTo(r) : r > t.slides.length - a ? (t.loopFix(), r = s.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")").eq(0).index(), re.nextTick(function () {
                    t.slideTo(r)
                })) : t.slideTo(r)
            } else t.slideTo(r)
        }
    };
    var d = {
        loopCreate: function () {
            var s = this, e = s.params, t = s.$wrapperEl;
            t.children("." + e.slideClass + "." + e.slideDuplicateClass).remove();
            var a = t.children("." + e.slideClass);
            if (e.loopFillGroupWithBlank) {
                var i = e.slidesPerGroup - a.length % e.slidesPerGroup;
                if (i !== e.slidesPerGroup) {
                    for (var r = 0; r < i; r += 1) {
                        var n = $(f.createElement("div")).addClass(e.slideClass + " " + e.slideBlankClass);
                        t.append(n)
                    }
                    a = t.children("." + e.slideClass)
                }
            }
            "auto" !== e.slidesPerView || e.loopedSlides || (e.loopedSlides = a.length), s.loopedSlides = Math.ceil(parseFloat(e.loopedSlides || e.slidesPerView, 10)), s.loopedSlides += e.loopAdditionalSlides, s.loopedSlides > a.length && (s.loopedSlides = a.length);
            var o = [], l = [];
            a.each(function (e, t) {
                var i = $(t);
                e < s.loopedSlides && l.push(t), e < a.length && e >= a.length - s.loopedSlides && o.push(t), i.attr("data-swiper-slide-index", e)
            });
            for (var d = 0; d < l.length; d += 1) t.append($(l[d].cloneNode(!0)).addClass(e.slideDuplicateClass));
            for (var h = o.length - 1; h >= 0; h -= 1) t.prepend($(o[h].cloneNode(!0)).addClass(e.slideDuplicateClass))
        }, loopFix: function () {
            this.emit("beforeLoopFix");
            var e, t = this.activeIndex, i = this.slides, s = this.loopedSlides, a = this.allowSlidePrev, r = this.allowSlideNext, n = this.snapGrid, o = this.rtlTranslate;
            this.allowSlidePrev = !0, this.allowSlideNext = !0;
            var l = -n[t] - this.getTranslate();
            if (t < s) e = i.length - 3 * s + t, e += s, this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l); else if (t >= i.length - s) {
                e = -i.length + t + s, e += s, this.slideTo(e, 0, !1, !0) && 0 !== l && this.setTranslate((o ? -this.translate : this.translate) - l)
            }
            this.allowSlidePrev = a, this.allowSlideNext = r, this.emit("loopFix")
        }, loopDestroy: function () {
            var e = this.$wrapperEl, t = this.params, i = this.slides;
            e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index")
        }
    };
    var h = {
        setGrabCursor: function (e) {
            if (!(S.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode)) {
                var t = this.el;
                t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
            }
        }, unsetGrabCursor: function () {
            S.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this.el.style.cursor = "")
        }
    };
    var p, c, u, v, m, g, b, w, y, x, T, E, C, M, P, z = {
        appendSlide: function (e) {
            var t = this.$wrapperEl, i = this.params;
            if (i.loop && this.loopDestroy(), "object" == typeof e && "length" in e) for (var s = 0; s < e.length; s += 1) e[s] && t.append(e[s]); else t.append(e);
            i.loop && this.loopCreate(), i.observer && S.observer || this.update()
        }, prependSlide: function (e) {
            var t = this.params, i = this.$wrapperEl, s = this.activeIndex;
            t.loop && this.loopDestroy();
            var a = s + 1;
            if ("object" == typeof e && "length" in e) {
                for (var r = 0; r < e.length; r += 1) e[r] && i.prepend(e[r]);
                a = s + e.length
            } else i.prepend(e);
            t.loop && this.loopCreate(), t.observer && S.observer || this.update(), this.slideTo(a, 0, !1)
        }, addSlide: function (e, t) {
            var i = this.$wrapperEl, s = this.params, a = this.activeIndex;
            s.loop && (a -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + s.slideClass));
            var r = this.slides.length;
            if (e <= 0) this.prependSlide(t); else if (e >= r) this.appendSlide(t); else {
                for (var n = a > e ? a + 1 : a, o = [], l = r - 1; l >= e; l -= 1) {
                    var d = this.slides.eq(l);
                    d.remove(), o.unshift(d)
                }
                if ("object" == typeof t && "length" in t) {
                    for (var h = 0; h < t.length; h += 1) t[h] && i.append(t[h]);
                    n = a > e ? a + t.length : a
                } else i.append(t);
                for (var p = 0; p < o.length; p += 1) i.append(o[p]);
                s.loop && this.loopCreate(), s.observer && S.observer || this.update(), s.loop ? this.slideTo(n + this.loopedSlides, 0, !1) : this.slideTo(n, 0, !1)
            }
        }, removeSlide: function (e) {
            var t = this.params, i = this.$wrapperEl, s = this.activeIndex;
            t.loop && (s -= this.loopedSlides, this.loopDestroy(), this.slides = i.children("." + t.slideClass));
            var a, r = s;
            if ("object" == typeof e && "length" in e) {
                for (var n = 0; n < e.length; n += 1) a = e[n], this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1);
                r = Math.max(r, 0)
            } else a = e, this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1), r = Math.max(r, 0);
            t.loop && this.loopCreate(), t.observer && S.observer || this.update(), t.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1)
        }, removeAllSlides: function () {
            for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
            this.removeSlide(e)
        }
    }, k = (p = ae.navigator.platform, c = ae.navigator.userAgent, u = {
        ios: !1,
        android: !1,
        androidChrome: !1,
        desktop: !1,
        iphone: !1,
        ipod: !1,
        ipad: !1,
        edge: !1,
        ie: !1,
        firefox: !1,
        macos: !1,
        windows: !1,
        cordova: !(!ae.cordova && !ae.phonegap),
        phonegap: !(!ae.cordova && !ae.phonegap),
        electron: !1
    }, v = ae.screen.width, m = ae.screen.height, g = c.match(/(Android);?[\s\/]+([\d.]+)?/), b = c.match(/(iPad).*OS\s([\d_]+)/), w = c.match(/(iPod)(.*OS\s([\d_]+))?/), y = !b && c.match(/(iPhone\sOS|iOS)\s([\d_]+)/), x = c.indexOf("MSIE ") >= 0 || c.indexOf("Trident/") >= 0, T = c.indexOf("Edge/") >= 0, E = c.indexOf("Gecko/") >= 0 && c.indexOf("Firefox/") >= 0, C = "Win32" === p, M = c.toLowerCase().indexOf("electron") >= 0, P = "MacIntel" === p, !b && P && S.touch && (1024 === v && 1366 === m || 834 === v && 1194 === m || 834 === v && 1112 === m || 768 === v && 1024 === m) && (b = c.match(/(Version)\/([\d.]+)/), P = !1), u.ie = x, u.edge = T, u.firefox = E, g && !C && (u.os = "android", u.osVersion = g[2], u.android = !0, u.androidChrome = c.toLowerCase().indexOf("chrome") >= 0), (b || y || w) && (u.os = "ios", u.ios = !0), y && !w && (u.osVersion = y[2].replace(/_/g, "."), u.iphone = !0), b && (u.osVersion = b[2].replace(/_/g, "."), u.ipad = !0), w && (u.osVersion = w[3] ? w[3].replace(/_/g, ".") : null, u.ipod = !0), u.ios && u.osVersion && c.indexOf("Version/") >= 0 && "10" === u.osVersion.split(".")[0] && (u.osVersion = c.toLowerCase().split("version/")[1].split(" ")[0]), u.webView = !(!(y || b || w) || !c.match(/.*AppleWebKit(?!.*Safari)/i) && !ae.navigator.standalone) || ae.matchMedia && ae.matchMedia("(display-mode: standalone)").matches, u.webview = u.webView, u.standalone = u.webView, u.desktop = !(u.ios || u.android) || M, u.desktop && (u.electron = M, u.macos = P, u.windows = C, u.macos && (u.os = "macos"), u.windows && (u.os = "windows")), u.pixelRatio = ae.devicePixelRatio || 1, u);

    function L(e) {
        var t = this.touchEventsData, i = this.params, s = this.touches;
        if (!this.animating || !i.preventInteractionOnTransition) {
            var a = e;
            a.originalEvent && (a = a.originalEvent);
            var r = $(a.target);
            if (("wrapper" !== i.touchEventsTarget || r.closest(this.wrapperEl).length) && (t.isTouchEvent = "touchstart" === a.type, (t.isTouchEvent || !("which" in a) || 3 !== a.which) && !(!t.isTouchEvent && "button" in a && a.button > 0 || t.isTouched && t.isMoved))) if (i.noSwiping && r.closest(i.noSwipingSelector ? i.noSwipingSelector : "." + i.noSwipingClass)[0]) this.allowClick = !0; else if (!i.swipeHandler || r.closest(i.swipeHandler)[0]) {
                s.currentX = "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX, s.currentY = "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY;
                var n = s.currentX, o = s.currentY, l = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection, d = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
                if (!l || !(n <= d || n >= ae.screen.width - d)) {
                    if (re.extend(t, {
                        isTouched: !0,
                        isMoved: !1,
                        allowTouchCallbacks: !0,
                        isScrolling: void 0,
                        startMoving: void 0
                    }), s.startX = n, s.startY = o, t.touchStartTime = re.now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, i.threshold > 0 && (t.allowThresholdMove = !1), "touchstart" !== a.type) {
                        var h = !0;
                        r.is(t.formElements) && (h = !1), f.activeElement && $(f.activeElement).is(t.formElements) && f.activeElement !== r[0] && f.activeElement.blur();
                        var p = h && this.allowTouchMove && i.touchStartPreventDefault;
                        (i.touchStartForcePreventDefault || p) && a.preventDefault()
                    }
                    this.emit("touchStart", a)
                }
            }
        }
    }

    function I(e) {
        var t = this.touchEventsData, i = this.params, s = this.touches, a = this.rtlTranslate, r = e;
        if (r.originalEvent && (r = r.originalEvent), t.isTouched) {
            if (!t.isTouchEvent || "mousemove" !== r.type) {
                var n = "touchmove" === r.type && r.targetTouches && (r.targetTouches[0] || r.changedTouches[0]), o = "touchmove" === r.type ? n.pageX : r.pageX, l = "touchmove" === r.type ? n.pageY : r.pageY;
                if (r.preventedByNestedSwiper) return s.startX = o, void (s.startY = l);
                if (!this.allowTouchMove) return this.allowClick = !1, void (t.isTouched && (re.extend(s, {startX: o, startY: l, currentX: o, currentY: l}), t.touchStartTime = re.now()));
                if (t.isTouchEvent && i.touchReleaseOnEdges && !i.loop) if (this.isVertical()) {
                    if (l < s.startY && this.translate <= this.maxTranslate() || l > s.startY && this.translate >= this.minTranslate()) return t.isTouched = !1, void (t.isMoved = !1)
                } else if (o < s.startX && this.translate <= this.maxTranslate() || o > s.startX && this.translate >= this.minTranslate()) return;
                if (t.isTouchEvent && f.activeElement && r.target === f.activeElement && $(r.target).is(t.formElements)) return t.isMoved = !0, void (this.allowClick = !1);
                if (t.allowTouchCallbacks && this.emit("touchMove", r), !(r.targetTouches && r.targetTouches.length > 1)) {
                    s.currentX = o, s.currentY = l;
                    var d = s.currentX - s.startX, h = s.currentY - s.startY;
                    if (!(this.params.threshold && Math.sqrt(Math.pow(d, 2) + Math.pow(h, 2)) < this.params.threshold)) {
                        var p;
                        if (void 0 === t.isScrolling) this.isHorizontal() && s.currentY === s.startY || this.isVertical() && s.currentX === s.startX ? t.isScrolling = !1 : d * d + h * h >= 25 && (p = 180 * Math.atan2(Math.abs(h), Math.abs(d)) / Math.PI, t.isScrolling = this.isHorizontal() ? p > i.touchAngle : 90 - p > i.touchAngle);
                        if (t.isScrolling && this.emit("touchMoveOpposite", r), void 0 === t.startMoving && (s.currentX === s.startX && s.currentY === s.startY || (t.startMoving = !0)), t.isScrolling) t.isTouched = !1; else if (t.startMoving) {
                            this.allowClick = !1, i.cssMode || r.preventDefault(), i.touchMoveStopPropagation && !i.nested && r.stopPropagation(), t.isMoved || (i.loop && this.loopFix(), t.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), t.allowMomentumBounce = !1, !i.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", r)), this.emit("sliderMove", r), t.isMoved = !0;
                            var c = this.isHorizontal() ? d : h;
                            s.diff = c, c *= i.touchRatio, a && (c = -c), this.swipeDirection = c > 0 ? "prev" : "next", t.currentTranslate = c + t.startTranslate;
                            var u = !0, v = i.resistanceRatio;
                            if (i.touchReleaseOnEdges && (v = 0), c > 0 && t.currentTranslate > this.minTranslate() ? (u = !1, i.resistance && (t.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + t.startTranslate + c, v))) : c < 0 && t.currentTranslate < this.maxTranslate() && (u = !1, i.resistance && (t.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - t.startTranslate - c, v))), u && (r.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && t.currentTranslate < t.startTranslate && (t.currentTranslate = t.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && t.currentTranslate > t.startTranslate && (t.currentTranslate = t.startTranslate), i.threshold > 0) {
                                if (!(Math.abs(c) > i.threshold || t.allowThresholdMove)) return void (t.currentTranslate = t.startTranslate);
                                if (!t.allowThresholdMove) return t.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, t.currentTranslate = t.startTranslate, void (s.diff = this.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY)
                            }
                            i.followFinger && !i.cssMode && ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), i.freeMode && (0 === t.velocities.length && t.velocities.push({
                                position: s[this.isHorizontal() ? "startX" : "startY"],
                                time: t.touchStartTime
                            }), t.velocities.push({position: s[this.isHorizontal() ? "currentX" : "currentY"], time: re.now()})), this.updateProgress(t.currentTranslate), this.setTranslate(t.currentTranslate))
                        }
                    }
                }
            }
        } else t.startMoving && t.isScrolling && this.emit("touchMoveOpposite", r)
    }

    function D(e) {
        var t = this, i = t.touchEventsData, s = t.params, a = t.touches, r = t.rtlTranslate, n = t.$wrapperEl, o = t.slidesGrid, l = t.snapGrid, d = e;
        if (d.originalEvent && (d = d.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", d), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void (i.startMoving = !1);
        s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        var h, p = re.now(), c = p - i.touchStartTime;
        if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap click", d), c < 300 && p - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", d)), i.lastClickTime = re.now(), re.nextTick(function () {
            t.destroyed || (t.allowClick = !0)
        }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void (i.startMoving = !1);
        if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, h = s.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate, !s.cssMode) if (s.freeMode) {
            if (h < -t.minTranslate()) return void t.slideTo(t.activeIndex);
            if (h > -t.maxTranslate()) return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
            if (s.freeModeMomentum) {
                if (i.velocities.length > 1) {
                    var u = i.velocities.pop(), v = i.velocities.pop(), f = u.position - v.position, m = u.time - v.time;
                    t.velocity = f / m, t.velocity /= 2, Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0), (m > 150 || re.now() - u.time > 300) && (t.velocity = 0)
                } else t.velocity = 0;
                t.velocity *= s.freeModeMomentumVelocityRatio, i.velocities.length = 0;
                var g = 1e3 * s.freeModeMomentumRatio, b = t.velocity * g, w = t.translate + b;
                r && (w = -w);
                var y, x, T = !1, E = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
                if (w < t.maxTranslate()) s.freeModeMomentumBounce ? (w + t.maxTranslate() < -E && (w = t.maxTranslate() - E), y = t.maxTranslate(), T = !0, i.allowMomentumBounce = !0) : w = t.maxTranslate(), s.loop && s.centeredSlides && (x = !0); else if (w > t.minTranslate()) s.freeModeMomentumBounce ? (w - t.minTranslate() > E && (w = t.minTranslate() + E), y = t.minTranslate(), T = !0, i.allowMomentumBounce = !0) : w = t.minTranslate(), s.loop && s.centeredSlides && (x = !0); else if (s.freeModeSticky) {
                    for (var S, C = 0; C < l.length; C += 1) if (l[C] > -w) {
                        S = C;
                        break
                    }
                    w = -(w = Math.abs(l[S] - w) < Math.abs(l[S - 1] - w) || "next" === t.swipeDirection ? l[S] : l[S - 1])
                }
                if (x && t.once("transitionEnd", function () {
                    t.loopFix()
                }), 0 !== t.velocity) {
                    if (g = r ? Math.abs((-w - t.translate) / t.velocity) : Math.abs((w - t.translate) / t.velocity), s.freeModeSticky) {
                        var M = Math.abs((r ? -w : w) - t.translate), P = t.slidesSizesGrid[t.activeIndex];
                        g = M < P ? s.speed : M < 2 * P ? 1.5 * s.speed : 2.5 * s.speed
                    }
                } else if (s.freeModeSticky) return void t.slideToClosest();
                s.freeModeMomentumBounce && T ? (t.updateProgress(y), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function () {
                    t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(s.speed), t.setTranslate(y), n.transitionEnd(function () {
                        t && !t.destroyed && t.transitionEnd()
                    }))
                })) : t.velocity ? (t.updateProgress(w), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function () {
                    t && !t.destroyed && t.transitionEnd()
                }))) : t.updateProgress(w), t.updateActiveIndex(), t.updateSlidesClasses()
            } else if (s.freeModeSticky) return void t.slideToClosest();
            (!s.freeModeMomentum || c >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
        } else {
            for (var z = 0, k = t.slidesSizesGrid[0], $ = 0; $ < o.length; $ += $ < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
                var L = $ < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
                void 0 !== o[$ + L] ? h >= o[$] && h < o[$ + L] && (z = $, k = o[$ + L] - o[$]) : h >= o[$] && (z = $, k = o[o.length - 1] - o[o.length - 2])
            }
            var I = (h - o[z]) / k, D = z < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
            if (c > s.longSwipesMs) {
                if (!s.longSwipes) return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection && (I >= s.longSwipesRatio ? t.slideTo(z + D) : t.slideTo(z)), "prev" === t.swipeDirection && (I > 1 - s.longSwipesRatio ? t.slideTo(z + D) : t.slideTo(z))
            } else {
                if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
                t.navigation && (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl) ? d.target === t.navigation.nextEl ? t.slideTo(z + D) : t.slideTo(z) : ("next" === t.swipeDirection && t.slideTo(z + D), "prev" === t.swipeDirection && t.slideTo(z))
            }
        }
    }

    function O() {
        var e = this.params, t = this.el;
        if (!t || 0 !== t.offsetWidth) {
            e.breakpoints && this.setBreakpoint();
            var i = this.allowSlideNext, s = this.allowSlidePrev, a = this.snapGrid;
            this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), this.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0), this.autoplay && this.autoplay.running && this.autoplay.paused && this.autoplay.run(), this.allowSlidePrev = s, this.allowSlideNext = i, this.params.watchOverflow && a !== this.snapGrid && this.checkOverflow()
        }
    }

    function A(e) {
        this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
    }

    function G() {
        var e = this.wrapperEl;
        this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? -e.scrollLeft : -e.scrollTop, -0 === this.translate && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses();
        var t = this.maxTranslate() - this.minTranslate();
        (0 === t ? 0 : (this.translate - this.minTranslate()) / t) !== this.progress && this.updateProgress(this.translate), this.emit("setTranslate", this.translate, !1)
    }

    var B = !1;

    function H() {
    }

    var N = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        preventInteractionOnTransition: !1,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: .02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0
    }, X = {
        update: s, translate: a, transition: n, slide: o, loop: d, grabCursor: h, manipulation: z, events: {
            attachEvents: function () {
                var e = this.params, t = this.touchEvents, i = this.el, s = this.wrapperEl;
                this.onTouchStart = L.bind(this), this.onTouchMove = I.bind(this), this.onTouchEnd = D.bind(this), e.cssMode && (this.onScroll = G.bind(this)), this.onClick = A.bind(this);
                var a = !!e.nested;
                if (!S.touch && S.pointerEvents) i.addEventListener(t.start, this.onTouchStart, !1), f.addEventListener(t.move, this.onTouchMove, a), f.addEventListener(t.end, this.onTouchEnd, !1); else {
                    if (S.touch) {
                        var r = !("touchstart" !== t.start || !S.passiveListener || !e.passiveListeners) && {passive: !0, capture: !1};
                        i.addEventListener(t.start, this.onTouchStart, r), i.addEventListener(t.move, this.onTouchMove, S.passiveListener ? {
                            passive: !1,
                            capture: a
                        } : a), i.addEventListener(t.end, this.onTouchEnd, r), t.cancel && i.addEventListener(t.cancel, this.onTouchEnd, r), B || (f.addEventListener("touchstart", H), B = !0)
                    }
                    (e.simulateTouch && !k.ios && !k.android || e.simulateTouch && !S.touch && k.ios) && (i.addEventListener("mousedown", this.onTouchStart, !1), f.addEventListener("mousemove", this.onTouchMove, a), f.addEventListener("mouseup", this.onTouchEnd, !1))
                }
                (e.preventClicks || e.preventClicksPropagation) && i.addEventListener("click", this.onClick, !0), e.cssMode && s.addEventListener("scroll", this.onScroll), e.updateOnWindowResize ? this.on(k.ios || k.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", O, !0) : this.on("observerUpdate", O, !0)
            }, detachEvents: function () {
                var e = this.params, t = this.touchEvents, i = this.el, s = this.wrapperEl, a = !!e.nested;
                if (!S.touch && S.pointerEvents) i.removeEventListener(t.start, this.onTouchStart, !1), f.removeEventListener(t.move, this.onTouchMove, a), f.removeEventListener(t.end, this.onTouchEnd, !1); else {
                    if (S.touch) {
                        var r = !("onTouchStart" !== t.start || !S.passiveListener || !e.passiveListeners) && {passive: !0, capture: !1};
                        i.removeEventListener(t.start, this.onTouchStart, r), i.removeEventListener(t.move, this.onTouchMove, a), i.removeEventListener(t.end, this.onTouchEnd, r), t.cancel && i.removeEventListener(t.cancel, this.onTouchEnd, r)
                    }
                    (e.simulateTouch && !k.ios && !k.android || e.simulateTouch && !S.touch && k.ios) && (i.removeEventListener("mousedown", this.onTouchStart, !1), f.removeEventListener("mousemove", this.onTouchMove, a), f.removeEventListener("mouseup", this.onTouchEnd, !1))
                }
                (e.preventClicks || e.preventClicksPropagation) && i.removeEventListener("click", this.onClick, !0), e.cssMode && s.removeEventListener("scroll", this.onScroll), this.off(k.ios || k.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", O)
            }
        }, breakpoints: {
            setBreakpoint: function () {
                var e = this.activeIndex, t = this.initialized, i = this.loopedSlides;
                void 0 === i && (i = 0);
                var s = this.params, a = this.$el, r = s.breakpoints;
                if (r && (!r || 0 !== Object.keys(r).length)) {
                    var n = this.getBreakpoint(r);
                    if (n && this.currentBreakpoint !== n) {
                        var o = n in r ? r[n] : void 0;
                        o && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach(function (e) {
                            var t = o[e];
                            void 0 !== t && (o[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                        });
                        var l = o || this.originalParams, d = s.slidesPerColumn > 1, h = l.slidesPerColumn > 1;
                        d && !h ? a.removeClass(s.containerModifierClass + "multirow " + s.containerModifierClass + "multirow-column") : !d && h && (a.addClass(s.containerModifierClass + "multirow"), "column" === l.slidesPerColumnFill && a.addClass(s.containerModifierClass + "multirow-column"));
                        var p = l.direction && l.direction !== s.direction, c = s.loop && (l.slidesPerView !== s.slidesPerView || p);
                        p && t && this.changeDirection(), re.extend(this.params, l), re.extend(this, {
                            allowTouchMove: this.params.allowTouchMove,
                            allowSlideNext: this.params.allowSlideNext,
                            allowSlidePrev: this.params.allowSlidePrev
                        }), this.currentBreakpoint = n, c && t && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - i + this.loopedSlides, 0, !1)), this.emit("breakpoint", l)
                    }
                }
            }, getBreakpoint: function (e) {
                if (e) {
                    var t = !1, i = Object.keys(e).map(function (e) {
                        if ("string" == typeof e && e.startsWith("@")) {
                            var t = parseFloat(e.substr(1));
                            return {value: ae.innerHeight * t, point: e}
                        }
                        return {value: e, point: e}
                    });
                    i.sort(function (e, t) {
                        return parseInt(e.value, 10) - parseInt(t.value, 10)
                    });
                    for (var s = 0; s < i.length; s += 1) {
                        var a = i[s], r = a.point;
                        a.value <= ae.innerWidth && (t = r)
                    }
                    return t || "max"
                }
            }
        }, checkOverflow: {
            checkOverflow: function () {
                var e = this.params, t = this.isLocked, i = this.slides.length > 0 && e.slidesOffsetBefore + e.spaceBetween * (this.slides.length - 1) + this.slides[0].offsetWidth * this.slides.length;
                e.slidesOffsetBefore && e.slidesOffsetAfter && i ? this.isLocked = i <= this.size : this.isLocked = 1 === this.snapGrid.length, this.allowSlideNext = !this.isLocked, this.allowSlidePrev = !this.isLocked, t !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock"), t && t !== this.isLocked && (this.isEnd = !1, this.navigation.update())
            }
        }, classes: {
            addClasses: function () {
                var t = this.classNames, i = this.params, e = this.rtl, s = this.$el, a = [];
                a.push("initialized"), a.push(i.direction), i.freeMode && a.push("free-mode"), i.autoHeight && a.push("autoheight"), e && a.push("rtl"), i.slidesPerColumn > 1 && (a.push("multirow"), "column" === i.slidesPerColumnFill && a.push("multirow-column")), k.android && a.push("android"), k.ios && a.push("ios"), i.cssMode && a.push("css-mode"), a.forEach(function (e) {
                    t.push(i.containerModifierClass + e)
                }), s.addClass(t.join(" "))
            }, removeClasses: function () {
                var e = this.$el, t = this.classNames;
                e.removeClass(t.join(" "))
            }
        }, images: {
            loadImage: function (e, t, i, s, a, r) {
                var n;

                function o() {
                    r && r()
                }

                e.complete && a ? o() : t ? ((n = new ae.Image).onload = o, n.onerror = o, s && (n.sizes = s), i && (n.srcset = i), t && (n.src = t)) : o()
            }, preloadImages: function () {
                var e = this;

                function t() {
                    null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                }

                e.imagesToLoad = e.$el.find("img");
                for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                    var s = e.imagesToLoad[i];
                    e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t)
                }
            }
        }
    }, V = {}, Y = function (c) {
        function u() {
            for (var e, t, a, i = [], s = arguments.length; s--;) i[s] = arguments[s];
            1 === i.length && i[0].constructor && i[0].constructor === Object ? a = i[0] : (t = (e = i)[0], a = e[1]), a || (a = {}), a = re.extend({}, a), t && !a.el && (a.el = t), c.call(this, a), Object.keys(X).forEach(function (t) {
                Object.keys(X[t]).forEach(function (e) {
                    u.prototype[e] || (u.prototype[e] = X[t][e])
                })
            });
            var r = this;
            void 0 === r.modules && (r.modules = {}), Object.keys(r.modules).forEach(function (e) {
                var t = r.modules[e];
                if (t.params) {
                    var i = Object.keys(t.params)[0], s = t.params[i];
                    if ("object" != typeof s || null === s) return;
                    if (!(i in a && "enabled" in s)) return;
                    !0 === a[i] && (a[i] = {enabled: !0}), "object" != typeof a[i] || "enabled" in a[i] || (a[i].enabled = !0), a[i] || (a[i] = {enabled: !1})
                }
            });
            var n = re.extend({}, N);
            r.useModulesParams(n), r.params = re.extend({}, n, V, a), r.originalParams = re.extend({}, r.params), r.passedParams = re.extend({}, a), r.$ = $;
            var o = $(r.params.el);
            if (t = o[0]) {
                if (o.length > 1) {
                    var l = [];
                    return o.each(function (e, t) {
                        var i = re.extend({}, a, {el: t});
                        l.push(new u(i))
                    }), l
                }
                var d, h, p;
                return t.swiper = r, o.data("swiper", r), t && t.shadowRoot && t.shadowRoot.querySelector ? (d = $(t.shadowRoot.querySelector("." + r.params.wrapperClass))).children = function (e) {
                    return o.children(e)
                } : d = o.children("." + r.params.wrapperClass), re.extend(r, {
                    $el: o,
                    el: t,
                    $wrapperEl: d,
                    wrapperEl: d[0],
                    classNames: [],
                    slides: $(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: function () {
                        return "horizontal" === r.params.direction
                    },
                    isVertical: function () {
                        return "vertical" === r.params.direction
                    },
                    rtl: "rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction"),
                    rtlTranslate: "horizontal" === r.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction")),
                    wrongRTL: "-webkit-box" === d.css("display"),
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    allowSlideNext: r.params.allowSlideNext,
                    allowSlidePrev: r.params.allowSlidePrev,
                    touchEvents: (h = ["touchstart", "touchmove", "touchend", "touchcancel"], p = ["mousedown", "mousemove", "mouseup"], S.pointerEvents && (p = ["pointerdown", "pointermove", "pointerup"]), r.touchEventsTouch = {
                        start: h[0],
                        move: h[1],
                        end: h[2],
                        cancel: h[3]
                    }, r.touchEventsDesktop = {start: p[0], move: p[1], end: p[2]}, S.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        formElements: "input, select, option, textarea, button, video, label",
                        lastClickTime: re.now(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: !0,
                    allowTouchMove: r.params.allowTouchMove,
                    touches: {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0},
                    imagesToLoad: [],
                    imagesLoaded: 0
                }), r.useModules(), r.params.init && r.init(), r
            }
        }

        c && (u.__proto__ = c), u.prototype = Object.create(c && c.prototype), u.prototype.constructor = u;
        var e = {extendedDefaults: {configurable: !0}, defaults: {configurable: !0}, Class: {configurable: !0}, $: {configurable: !0}};
        return u.prototype.slidesPerViewDynamic = function () {
            var e = this.params, t = this.slides, i = this.slidesGrid, s = this.size, a = this.activeIndex, r = 1;
            if (e.centeredSlides) {
                for (var n, o = t[a].swiperSlideSize, l = a + 1; l < t.length; l += 1) t[l] && !n && (r += 1, (o += t[l].swiperSlideSize) > s && (n = !0));
                for (var d = a - 1; d >= 0; d -= 1) t[d] && !n && (r += 1, (o += t[d].swiperSlideSize) > s && (n = !0))
            } else for (var h = a + 1; h < t.length; h += 1) i[h] - i[a] < s && (r += 1);
            return r
        }, u.prototype.update = function () {
            var i = this;
            if (i && !i.destroyed) {
                var e = i.snapGrid, t = i.params;
                t.breakpoints && i.setBreakpoint(), i.updateSize(), i.updateSlides(), i.updateProgress(), i.updateSlidesClasses(), i.params.freeMode ? (s(), i.params.autoHeight && i.updateAutoHeight()) : (("auto" === i.params.slidesPerView || i.params.slidesPerView > 1) && i.isEnd && !i.params.centeredSlides ? i.slideTo(i.slides.length - 1, 0, !1, !0) : i.slideTo(i.activeIndex, 0, !1, !0)) || s(), t.watchOverflow && e !== i.snapGrid && i.checkOverflow(), i.emit("update")
            }

            function s() {
                var e = i.rtlTranslate ? -1 * i.translate : i.translate, t = Math.min(Math.max(e, i.maxTranslate()), i.minTranslate());
                i.setTranslate(t), i.updateActiveIndex(), i.updateSlidesClasses()
            }
        }, u.prototype.changeDirection = function (i, e) {
            void 0 === e && (e = !0);
            var t = this.params.direction;
            return i || (i = "horizontal" === t ? "vertical" : "horizontal"), i === t || "horizontal" !== i && "vertical" !== i ? this : (this.$el.removeClass("" + this.params.containerModifierClass + t).addClass("" + this.params.containerModifierClass + i), this.params.direction = i, this.slides.each(function (e, t) {
                "vertical" === i ? t.style.width = "" : t.style.height = ""
            }), this.emit("changeDirection"), e && this.update(), this)
        }, u.prototype.init = function () {
            this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"))
        }, u.prototype.destroy = function (e, t) {
            void 0 === e && (e = !0), void 0 === t && (t = !0);
            var i = this, s = i.params, a = i.$el, r = i.$wrapperEl, n = i.slides;
            return void 0 === i.params || i.destroyed ? null : (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), a.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function (e) {
                i.off(e)
            }), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), re.deleteProps(i)), i.destroyed = !0, null)
        }, u.extendDefaults = function (e) {
            re.extend(V, e)
        }, e.extendedDefaults.get = function () {
            return V
        }, e.defaults.get = function () {
            return N
        }, e.Class.get = function () {
            return c
        }, e.$.get = function () {
            return $
        }, Object.defineProperties(u, e), u
    }(e), F = {name: "device", proto: {device: k}, static: {device: k}}, W = {name: "support", proto: {support: S}, static: {support: S}}, R = {
        isEdge: !!ae.navigator.userAgent.match(/Edge/g), isSafari: function () {
            var e = ae.navigator.userAgent.toLowerCase();
            return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
        }(), isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(ae.navigator.userAgent)
    }, q = {name: "browser", proto: {browser: R}, static: {browser: R}}, j = {
        name: "resize", create: function () {
            var e = this;
            re.extend(e, {
                resize: {
                    resizeHandler: function () {
                        e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                    }, orientationChangeHandler: function () {
                        e && !e.destroyed && e.initialized && e.emit("orientationchange")
                    }
                }
            })
        }, on: {
            init: function () {
                ae.addEventListener("resize", this.resize.resizeHandler), ae.addEventListener("orientationchange", this.resize.orientationChangeHandler)
            }, destroy: function () {
                ae.removeEventListener("resize", this.resize.resizeHandler), ae.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
            }
        }
    }, K = {
        func: ae.MutationObserver || ae.WebkitMutationObserver, attach: function (e, t) {
            void 0 === t && (t = {});
            var i = this, s = new (0, K.func)(function (e) {
                if (1 !== e.length) {
                    var t = function () {
                        i.emit("observerUpdate", e[0])
                    };
                    ae.requestAnimationFrame ? ae.requestAnimationFrame(t) : ae.setTimeout(t, 0)
                } else i.emit("observerUpdate", e[0])
            });
            s.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData
            }), i.observer.observers.push(s)
        }, init: function () {
            if (S.observer && this.params.observer) {
                if (this.params.observeParents) for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);
                this.observer.attach(this.$el[0], {childList: this.params.observeSlideChildren}), this.observer.attach(this.$wrapperEl[0], {attributes: !1})
            }
        }, destroy: function () {
            this.observer.observers.forEach(function (e) {
                e.disconnect()
            }), this.observer.observers = []
        }
    }, U = {
        name: "observer", params: {observer: !1, observeParents: !1, observeSlideChildren: !1}, create: function () {
            re.extend(this, {observer: {init: K.init.bind(this), attach: K.attach.bind(this), destroy: K.destroy.bind(this), observers: []}})
        }, on: {
            init: function () {
                this.observer.init()
            }, destroy: function () {
                this.observer.destroy()
            }
        }
    }, _ = {
        update: function (e) {
            var t = this, i = t.params, s = i.slidesPerView, a = i.slidesPerGroup, r = i.centeredSlides, n = t.params.virtual, o = n.addSlidesBefore, l = n.addSlidesAfter, d = t.virtual, h = d.from, p = d.to,
                c = d.slides, u = d.slidesGrid, v = d.renderSlide, f = d.offset;
            t.updateActiveIndex();
            var m, g, b, w = t.activeIndex || 0;
            m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (g = Math.floor(s / 2) + a + o, b = Math.floor(s / 2) + a + l) : (g = s + (a - 1) + o, b = a + l);
            var y = Math.max((w || 0) - b, 0), x = Math.min((w || 0) + g, c.length - 1), T = (t.slidesGrid[y] || 0) - (t.slidesGrid[0] || 0);

            function E() {
                t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
            }

            if (re.extend(t.virtual, {from: y, to: x, offset: T, slidesGrid: t.slidesGrid}), h === y && p === x && !e) return t.slidesGrid !== u && T !== f && t.slides.css(m, T + "px"), void t.updateProgress();
            if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
                offset: T, from: y, to: x, slides: function () {
                    for (var e = [], t = y; t <= x; t += 1) e.push(c[t]);
                    return e
                }()
            }), void E();
            var S = [], C = [];
            if (e) t.$wrapperEl.find("." + t.params.slideClass).remove(); else for (var M = h; M <= p; M += 1) (M < y || M > x) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + M + '"]').remove();
            for (var P = 0; P < c.length; P += 1) P >= y && P <= x && (void 0 === p || e ? C.push(P) : (P > p && C.push(P), P < h && S.push(P)));
            C.forEach(function (e) {
                t.$wrapperEl.append(v(c[e], e))
            }), S.sort(function (e, t) {
                return t - e
            }).forEach(function (e) {
                t.$wrapperEl.prepend(v(c[e], e))
            }), t.$wrapperEl.children(".swiper-slide").css(m, T + "px"), E()
        }, renderSlide: function (e, t) {
            var i = this.params.virtual;
            if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
            var s = i.renderSlide ? $(i.renderSlide.call(this, e, t)) : $('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
            return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), i.cache && (this.virtual.cache[t] = s), s
        }, appendSlide: function (e) {
            if ("object" == typeof e && "length" in e) for (var t = 0; t < e.length; t += 1) e[t] && this.virtual.slides.push(e[t]); else this.virtual.slides.push(e);
            this.virtual.update(!0)
        }, prependSlide: function (e) {
            var t = this.activeIndex, i = t + 1, s = 1;
            if (Array.isArray(e)) {
                for (var a = 0; a < e.length; a += 1) e[a] && this.virtual.slides.unshift(e[a]);
                i = t + e.length, s = e.length
            } else this.virtual.slides.unshift(e);
            if (this.params.virtual.cache) {
                var r = this.virtual.cache, n = {};
                Object.keys(r).forEach(function (e) {
                    var t = r[e], i = t.attr("data-swiper-slide-index");
                    i && t.attr("data-swiper-slide-index", parseInt(i, 10) + 1), n[parseInt(e, 10) + s] = t
                }), this.virtual.cache = n
            }
            this.virtual.update(!0), this.slideTo(i, 0)
        }, removeSlide: function (e) {
            if (null != e) {
                var t = this.activeIndex;
                if (Array.isArray(e)) for (var i = e.length - 1; i >= 0; i -= 1) this.virtual.slides.splice(e[i], 1), this.params.virtual.cache && delete this.virtual.cache[e[i]], e[i] < t && (t -= 1), t = Math.max(t, 0); else this.virtual.slides.splice(e, 1), this.params.virtual.cache && delete this.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);
                this.virtual.update(!0), this.slideTo(t, 0)
            }
        }, removeAllSlides: function () {
            this.virtual.slides = [], this.params.virtual.cache && (this.virtual.cache = {}), this.virtual.update(!0), this.slideTo(0, 0)
        }
    }, Z = {
        name: "virtual", params: {virtual: {enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null, addSlidesBefore: 0, addSlidesAfter: 0}}, create: function () {
            re.extend(this, {
                virtual: {
                    update: _.update.bind(this),
                    appendSlide: _.appendSlide.bind(this),
                    prependSlide: _.prependSlide.bind(this),
                    removeSlide: _.removeSlide.bind(this),
                    removeAllSlides: _.removeAllSlides.bind(this),
                    renderSlide: _.renderSlide.bind(this),
                    slides: this.params.virtual.slides,
                    cache: {}
                }
            })
        }, on: {
            beforeInit: function () {
                if (this.params.virtual.enabled) {
                    this.classNames.push(this.params.containerModifierClass + "virtual");
                    var e = {watchSlidesProgress: !0};
                    re.extend(this.params, e), re.extend(this.originalParams, e), this.params.initialSlide || this.virtual.update()
                }
            }, setTranslate: function () {
                this.params.virtual.enabled && this.virtual.update()
            }
        }
    }, Q = {
        handle: function (e) {
            var t = this.rtlTranslate, i = e;
            i.originalEvent && (i = i.originalEvent);
            var s = i.keyCode || i.charCode;
            if (!this.allowSlideNext && (this.isHorizontal() && 39 === s || this.isVertical() && 40 === s || 34 === s)) return !1;
            if (!this.allowSlidePrev && (this.isHorizontal() && 37 === s || this.isVertical() && 38 === s || 33 === s)) return !1;
            if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || f.activeElement && f.activeElement.nodeName && ("input" === f.activeElement.nodeName.toLowerCase() || "textarea" === f.activeElement.nodeName.toLowerCase()))) {
                if (this.params.keyboard.onlyInViewport && (33 === s || 34 === s || 37 === s || 39 === s || 38 === s || 40 === s)) {
                    var a = !1;
                    if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
                    var r = ae.innerWidth, n = ae.innerHeight, o = this.$el.offset();
                    t && (o.left -= this.$el[0].scrollLeft);
                    for (var l = [[o.left, o.top], [o.left + this.width, o.top], [o.left, o.top + this.height], [o.left + this.width, o.top + this.height]], d = 0; d < l.length; d += 1) {
                        var h = l[d];
                        h[0] >= 0 && h[0] <= r && h[1] >= 0 && h[1] <= n && (a = !0)
                    }
                    if (!a) return
                }
                this.isHorizontal() ? (33 !== s && 34 !== s && 37 !== s && 39 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), (34 !== s && 39 !== s || t) && (33 !== s && 37 !== s || !t) || this.slideNext(), (33 !== s && 37 !== s || t) && (34 !== s && 39 !== s || !t) || this.slidePrev()) : (33 !== s && 34 !== s && 38 !== s && 40 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), 34 !== s && 40 !== s || this.slideNext(), 33 !== s && 38 !== s || this.slidePrev()), this.emit("keyPress", s)
            }
        }, enable: function () {
            this.keyboard.enabled || ($(f).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
        }, disable: function () {
            this.keyboard.enabled && ($(f).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
        }
    }, J = {
        name: "keyboard", params: {keyboard: {enabled: !1, onlyInViewport: !0}}, create: function () {
            re.extend(this, {keyboard: {enabled: !1, enable: Q.enable.bind(this), disable: Q.disable.bind(this), handle: Q.handle.bind(this)}})
        }, on: {
            init: function () {
                this.params.keyboard.enabled && this.keyboard.enable()
            }, destroy: function () {
                this.keyboard.enabled && this.keyboard.disable()
            }
        }
    };
    var ee = {
        lastScrollTime: re.now(), lastEventBeforeSnap: void 0, recentWheelEvents: [], event: function () {
            return ae.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function () {
                var e = "onwheel" in f;
                if (!e) {
                    var t = f.createElement("div");
                    t.setAttribute("onwheel", "return;"), e = "function" == typeof t.onwheel
                }
                return !e && f.implementation && f.implementation.hasFeature && !0 !== f.implementation.hasFeature("", "") && (e = f.implementation.hasFeature("Events.wheel", "3.0")), e
            }() ? "wheel" : "mousewheel"
        }, normalize: function (e) {
            var t = 0, i = 0, s = 0, a = 0;
            return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, a = 10 * i, "deltaY" in e && (a = e.deltaY), "deltaX" in e && (s = e.deltaX), e.shiftKey && !s && (s = a, a = 0), (s || a) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, a *= 40) : (s *= 800, a *= 800)), s && !t && (t = s < 1 ? -1 : 1), a && !i && (i = a < 1 ? -1 : 1), {
                spinX: t,
                spinY: i,
                pixelX: s,
                pixelY: a
            }
        }, handleMouseEnter: function () {
            this.mouseEntered = !0
        }, handleMouseLeave: function () {
            this.mouseEntered = !1
        }, handle: function (e) {
            var t = e, i = this, s = i.params.mousewheel;
            i.params.cssMode && t.preventDefault();
            var a = i.$el;
            if ("container" !== i.params.mousewheel.eventsTarged && (a = $(i.params.mousewheel.eventsTarged)), !i.mouseEntered && !a[0].contains(t.target) && !s.releaseOnEdges) return !0;
            t.originalEvent && (t = t.originalEvent);
            var r = 0, n = i.rtlTranslate ? -1 : 1, o = ee.normalize(t);
            if (s.forceToAxis) if (i.isHorizontal()) {
                if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
                r = o.pixelX * n
            } else {
                if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
                r = o.pixelY
            } else r = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * n : -o.pixelY;
            if (0 === r) return !0;
            if (s.invert && (r = -r), i.params.freeMode) {
                var l = {time: re.now(), delta: Math.abs(r), direction: Math.sign(r)}, d = i.mousewheel.lastEventBeforeSnap, h = d && l.time < d.time + 500 && l.delta <= d.delta && l.direction === d.direction;
                if (!h) {
                    i.mousewheel.lastEventBeforeSnap = void 0, i.params.loop && i.loopFix();
                    var p = i.getTranslate() + r * s.sensitivity, c = i.isBeginning, u = i.isEnd;
                    if (p >= i.minTranslate() && (p = i.minTranslate()), p <= i.maxTranslate() && (p = i.maxTranslate()), i.setTransition(0), i.setTranslate(p), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!c && i.isBeginning || !u && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky) {
                        clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = void 0;
                        var v = i.mousewheel.recentWheelEvents;
                        v.length >= 15 && v.shift();
                        var f = v.length ? v[v.length - 1] : void 0, m = v[0];
                        if (v.push(l), f && (l.delta > f.delta || l.direction !== f.direction)) v.splice(0); else if (v.length >= 15 && l.time - m.time < 500 && m.delta - l.delta >= 1 && l.delta <= 6) {
                            var g = r > 0 ? .8 : .2;
                            i.mousewheel.lastEventBeforeSnap = l, v.splice(0), i.mousewheel.timeout = re.nextTick(function () {
                                i.slideToClosest(i.params.speed, !0, void 0, g)
                            }, 0)
                        }
                        i.mousewheel.timeout || (i.mousewheel.timeout = re.nextTick(function () {
                            i.mousewheel.lastEventBeforeSnap = l, v.splice(0), i.slideToClosest(i.params.speed, !0, void 0, .5)
                        }, 500))
                    }
                    if (h || i.emit("scroll", t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(), p === i.minTranslate() || p === i.maxTranslate()) return !0
                }
            } else {
                var b = {time: re.now(), delta: Math.abs(r), direction: Math.sign(r), raw: e}, w = i.mousewheel.recentWheelEvents;
                w.length >= 2 && w.shift();
                var y = w.length ? w[w.length - 1] : void 0;
                if (w.push(b), y ? (b.direction !== y.direction || b.delta > y.delta) && i.mousewheel.animateSlider(b) : i.mousewheel.animateSlider(b), i.mousewheel.releaseScroll(b)) return !0
            }
            return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
        }, animateSlider: function (e) {
            return e.delta >= 6 && re.now() - this.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? this.isEnd && !this.params.loop || this.animating || (this.slideNext(), this.emit("scroll", e.raw)) : this.isBeginning && !this.params.loop || this.animating || (this.slidePrev(), this.emit("scroll", e.raw)), this.mousewheel.lastScrollTime = (new ae.Date).getTime(), !1)
        }, releaseScroll: function (e) {
            var t = this.params.mousewheel;
            if (e.direction < 0) {
                if (this.isEnd && !this.params.loop && t.releaseOnEdges) return !0
            } else if (this.isBeginning && !this.params.loop && t.releaseOnEdges) return !0;
            return !1
        }, enable: function () {
            var e = ee.event();
            if (this.params.cssMode) return this.wrapperEl.removeEventListener(e, this.mousewheel.handle), !0;
            if (!e) return !1;
            if (this.mousewheel.enabled) return !1;
            var t = this.$el;
            return "container" !== this.params.mousewheel.eventsTarged && (t = $(this.params.mousewheel.eventsTarged)), t.on("mouseenter", this.mousewheel.handleMouseEnter), t.on("mouseleave", this.mousewheel.handleMouseLeave), t.on(e, this.mousewheel.handle), this.mousewheel.enabled = !0, !0
        }, disable: function () {
            var e = ee.event();
            if (this.params.cssMode) return this.wrapperEl.addEventListener(e, this.mousewheel.handle), !0;
            if (!e) return !1;
            if (!this.mousewheel.enabled) return !1;
            var t = this.$el;
            return "container" !== this.params.mousewheel.eventsTarged && (t = $(this.params.mousewheel.eventsTarged)), t.off(e, this.mousewheel.handle), this.mousewheel.enabled = !1, !0
        }
    }, te = {
        update: function () {
            var e = this.params.navigation;
            if (!this.params.loop) {
                var t = this.navigation, i = t.$nextEl, s = t.$prevEl;
                s && s.length > 0 && (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass), s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass))
            }
        }, onPrevClick: function (e) {
            e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev()
        }, onNextClick: function (e) {
            e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext()
        }, init: function () {
            var e, t, i = this.params.navigation;
            (i.nextEl || i.prevEl) && (i.nextEl && (e = $(i.nextEl), this.params.uniqueNavElements && "string" == typeof i.nextEl && e.length > 1 && 1 === this.$el.find(i.nextEl).length && (e = this.$el.find(i.nextEl))), i.prevEl && (t = $(i.prevEl), this.params.uniqueNavElements && "string" == typeof i.prevEl && t.length > 1 && 1 === this.$el.find(i.prevEl).length && (t = this.$el.find(i.prevEl))), e && e.length > 0 && e.on("click", this.navigation.onNextClick), t && t.length > 0 && t.on("click", this.navigation.onPrevClick), re.extend(this.navigation, {
                $nextEl: e,
                nextEl: e && e[0],
                $prevEl: t,
                prevEl: t && t[0]
            }))
        }, destroy: function () {
            var e = this.navigation, t = e.$nextEl, i = e.$prevEl;
            t && t.length && (t.off("click", this.navigation.onNextClick), t.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click", this.navigation.onPrevClick), i.removeClass(this.params.navigation.disabledClass))
        }
    }, ie = {
        update: function () {
            var e = this.rtl, a = this.params.pagination;
            if (a.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                var r, t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length, i = this.pagination.$el,
                    s = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
                if (this.params.loop ? ((r = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > t - 1 - 2 * this.loopedSlides && (r -= t - 2 * this.loopedSlides), r > s - 1 && (r -= s), r < 0 && "bullets" !== this.params.paginationType && (r = s + r)) : r = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === a.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
                    var n, o, l, d = this.pagination.bullets;
                    if (a.dynamicBullets && (this.pagination.bulletSize = d.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), i.css(this.isHorizontal() ? "width" : "height", this.pagination.bulletSize * (a.dynamicMainBullets + 4) + "px"), a.dynamicMainBullets > 1 && void 0 !== this.previousIndex && (this.pagination.dynamicBulletIndex += r - this.previousIndex, this.pagination.dynamicBulletIndex > a.dynamicMainBullets - 1 ? this.pagination.dynamicBulletIndex = a.dynamicMainBullets - 1 : this.pagination.dynamicBulletIndex < 0 && (this.pagination.dynamicBulletIndex = 0)), n = r - this.pagination.dynamicBulletIndex, l = ((o = n + (Math.min(d.length, a.dynamicMainBullets) - 1)) + n) / 2), d.removeClass(a.bulletActiveClass + " " + a.bulletActiveClass + "-next " + a.bulletActiveClass + "-next-next " + a.bulletActiveClass + "-prev " + a.bulletActiveClass + "-prev-prev " + a.bulletActiveClass + "-main"), i.length > 1) d.each(function (e, t) {
                        var i = $(t), s = i.index();
                        s === r && i.addClass(a.bulletActiveClass), a.dynamicBullets && (s >= n && s <= o && i.addClass(a.bulletActiveClass + "-main"), s === n && i.prev().addClass(a.bulletActiveClass + "-prev").prev().addClass(a.bulletActiveClass + "-prev-prev"), s === o && i.next().addClass(a.bulletActiveClass + "-next").next().addClass(a.bulletActiveClass + "-next-next"))
                    }); else {
                        var h = d.eq(r), p = h.index();
                        if (h.addClass(a.bulletActiveClass), a.dynamicBullets) {
                            for (var c = d.eq(n), u = d.eq(o), v = n; v <= o; v += 1) d.eq(v).addClass(a.bulletActiveClass + "-main");
                            if (this.params.loop) if (p >= d.length - a.dynamicMainBullets) {
                                for (var f = a.dynamicMainBullets; f >= 0; f -= 1) d.eq(d.length - f).addClass(a.bulletActiveClass + "-main");
                                d.eq(d.length - a.dynamicMainBullets - 1).addClass(a.bulletActiveClass + "-prev")
                            } else c.prev().addClass(a.bulletActiveClass + "-prev").prev().addClass(a.bulletActiveClass + "-prev-prev"), u.next().addClass(a.bulletActiveClass + "-next").next().addClass(a.bulletActiveClass + "-next-next"); else c.prev().addClass(a.bulletActiveClass + "-prev").prev().addClass(a.bulletActiveClass + "-prev-prev"), u.next().addClass(a.bulletActiveClass + "-next").next().addClass(a.bulletActiveClass + "-next-next")
                        }
                    }
                    if (a.dynamicBullets) {
                        var m = Math.min(d.length, a.dynamicMainBullets + 4), g = (this.pagination.bulletSize * m - this.pagination.bulletSize) / 2 - l * this.pagination.bulletSize, b = e ? "right" : "left";
                        d.css(this.isHorizontal() ? b : "top", g + "px")
                    }
                }
                if ("fraction" === a.type && (i.find("." + a.currentClass).text(a.formatFractionCurrent(r + 1)), i.find("." + a.totalClass).text(a.formatFractionTotal(s))), "progressbar" === a.type) {
                    var w;
                    w = a.progressbarOpposite ? this.isHorizontal() ? "vertical" : "horizontal" : this.isHorizontal() ? "horizontal" : "vertical";
                    var y = (r + 1) / s, x = 1, T = 1;
                    "horizontal" === w ? x = y : T = y, i.find("." + a.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + x + ") scaleY(" + T + ")").transition(this.params.speed)
                }
                "custom" === a.type && a.renderCustom ? (i.html(a.renderCustom(this, r + 1, s)), this.emit("paginationRender", this, i[0])) : this.emit("paginationUpdate", this, i[0]), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](a.lockClass)
            }
        }, render: function () {
            var e = this.params.pagination;
            if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length, i = this.pagination.$el, s = "";
                if ("bullets" === e.type) {
                    for (var a = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, r = 0; r < a; r += 1) e.renderBullet ? s += e.renderBullet.call(this, r, e.bulletClass) : s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
                    i.html(s), this.pagination.bullets = i.find("." + e.bulletClass)
                }
                "fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', i.html(s)), "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', i.html(s)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0])
            }
        }, init: function () {
            var i = this, e = i.params.pagination;
            if (e.el) {
                var t = $(e.el);
                0 !== t.length && (i.params.uniqueNavElements && "string" == typeof e.el && t.length > 1 && 1 === i.$el.find(e.el).length && (t = i.$el.find(e.el)), "bullets" === e.type && e.clickable && t.addClass(e.clickableClass), t.addClass(e.modifierClass + e.type), "bullets" === e.type && e.dynamicBullets && (t.addClass("" + e.modifierClass + e.type + "-dynamic"), i.pagination.dynamicBulletIndex = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && t.addClass(e.progressbarOppositeClass), e.clickable && t.on("click", "." + e.bulletClass, function (e) {
                    e.preventDefault();
                    var t = $(this).index() * i.params.slidesPerGroup;
                    i.params.loop && (t += i.loopedSlides), i.slideTo(t)
                }), re.extend(i.pagination, {$el: t, el: t[0]}))
            }
        }, destroy: function () {
            var e = this.params.pagination;
            if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                var t = this.pagination.$el;
                t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass)
            }
        }
    }, se = {
        setTranslate: function () {
            if (this.params.scrollbar.el && this.scrollbar.el) {
                var e = this.scrollbar, t = this.rtlTranslate, i = this.progress, s = e.dragSize, a = e.trackSize, r = e.$dragEl, n = e.$el, o = this.params.scrollbar, l = s, d = (a - s) * i;
                t ? (d = -d) > 0 ? (l = s - d, d = 0) : -d + s > a && (l = a + d) : d < 0 ? (l = s + d, d = 0) : d + s > a && (l = a - d), this.isHorizontal() ? (r.transform("translate3d(" + d + "px, 0, 0)"), r[0].style.width = l + "px") : (r.transform("translate3d(0px, " + d + "px, 0)"), r[0].style.height = l + "px"), o.hide && (clearTimeout(this.scrollbar.timeout), n[0].style.opacity = 1, this.scrollbar.timeout = setTimeout(function () {
                    n[0].style.opacity = 0, n.transition(400)
                }, 1e3))
            }
        }, setTransition: function (e) {
            this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
        }, updateSize: function () {
            if (this.params.scrollbar.el && this.scrollbar.el) {
                var e = this.scrollbar, t = e.$dragEl, i = e.$el;
                t[0].style.width = "", t[0].style.height = "";
                var s, a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight, r = this.size / this.virtualSize, n = r * (a / this.size);
                s = "auto" === this.params.scrollbar.dragSize ? a * r : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px", i[0].style.display = r >= 1 ? "none" : "", this.params.scrollbar.hide && (i[0].style.opacity = 0), re.extend(e, {
                    trackSize: a,
                    divider: r,
                    moveDivider: n,
                    dragSize: s
                }), e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass)
            }
        }, getPointerPosition: function (e) {
            return this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
        }, setDragPosition: function (e) {
            var t, i = this.scrollbar, s = this.rtlTranslate, a = i.$el, r = i.dragSize, n = i.trackSize, o = i.dragStartPos;
            t = (i.getPointerPosition(e) - a.offset()[this.isHorizontal() ? "left" : "top"] - (null !== o ? o : r / 2)) / (n - r), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
            var l = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
            this.updateProgress(l), this.setTranslate(l), this.updateActiveIndex(), this.updateSlidesClasses()
        }, onDragStart: function (e) {
            var t = this.params.scrollbar, i = this.scrollbar, s = this.$wrapperEl, a = i.$el, r = i.$dragEl;
            this.scrollbar.isTouched = !0, this.scrollbar.dragStartPos = e.target === r[0] || e.target === r ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[this.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), s.transition(100), r.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), a.transition(0), t.hide && a.css("opacity", 1), this.params.cssMode && this.$wrapperEl.css("scroll-snap-type", "none"), this.emit("scrollbarDragStart", e)
        }, onDragMove: function (e) {
            var t = this.scrollbar, i = this.$wrapperEl, s = t.$el, a = t.$dragEl;
            this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), s.transition(0), a.transition(0), this.emit("scrollbarDragMove", e))
        }, onDragEnd: function (e) {
            var t = this.params.scrollbar, i = this.scrollbar, s = this.$wrapperEl, a = i.$el;
            this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, this.params.cssMode && (this.$wrapperEl.css("scroll-snap-type", ""), s.transition("")), t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = re.nextTick(function () {
                a.css("opacity", 0), a.transition(400)
            }, 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideToClosest())
        }, enableDraggable: function () {
            if (this.params.scrollbar.el) {
                var e = this.scrollbar, t = this.touchEventsTouch, i = this.touchEventsDesktop, s = this.params, a = e.$el[0], r = !(!S.passiveListener || !s.passiveListeners) && {passive: !1, capture: !1},
                    n = !(!S.passiveListener || !s.passiveListeners) && {passive: !0, capture: !1};
                S.touch ? (a.addEventListener(t.start, this.scrollbar.onDragStart, r), a.addEventListener(t.move, this.scrollbar.onDragMove, r), a.addEventListener(t.end, this.scrollbar.onDragEnd, n)) : (a.addEventListener(i.start, this.scrollbar.onDragStart, r), f.addEventListener(i.move, this.scrollbar.onDragMove, r), f.addEventListener(i.end, this.scrollbar.onDragEnd, n))
            }
        }, disableDraggable: function () {
            if (this.params.scrollbar.el) {
                var e = this.scrollbar, t = this.touchEventsTouch, i = this.touchEventsDesktop, s = this.params, a = e.$el[0], r = !(!S.passiveListener || !s.passiveListeners) && {passive: !1, capture: !1},
                    n = !(!S.passiveListener || !s.passiveListeners) && {passive: !0, capture: !1};
                S.touch ? (a.removeEventListener(t.start, this.scrollbar.onDragStart, r), a.removeEventListener(t.move, this.scrollbar.onDragMove, r), a.removeEventListener(t.end, this.scrollbar.onDragEnd, n)) : (a.removeEventListener(i.start, this.scrollbar.onDragStart, r), f.removeEventListener(i.move, this.scrollbar.onDragMove, r), f.removeEventListener(i.end, this.scrollbar.onDragEnd, n))
            }
        }, init: function () {
            if (this.params.scrollbar.el) {
                var e = this.scrollbar, t = this.$el, i = this.params.scrollbar, s = $(i.el);
                this.params.uniqueNavElements && "string" == typeof i.el && s.length > 1 && 1 === t.find(i.el).length && (s = t.find(i.el));
                var a = s.find("." + this.params.scrollbar.dragClass);
                0 === a.length && (a = $('<div class="' + this.params.scrollbar.dragClass + '"></div>'), s.append(a)), re.extend(e, {$el: s, el: s[0], $dragEl: a, dragEl: a[0]}), i.draggable && e.enableDraggable()
            }
        }, destroy: function () {
            this.scrollbar.disableDraggable()
        }
    }, ne = {
        setTransform: function (e, t) {
            var i = this.rtl, s = $(e), a = i ? -1 : 1, r = s.attr("data-swiper-parallax") || "0", n = s.attr("data-swiper-parallax-x"), o = s.attr("data-swiper-parallax-y"), l = s.attr("data-swiper-parallax-scale"),
                d = s.attr("data-swiper-parallax-opacity");
            if (n || o ? (n = n || "0", o = o || "0") : this.isHorizontal() ? (n = r, o = "0") : (o = r, n = "0"), n = n.indexOf("%") >= 0 ? parseInt(n, 10) * t * a + "%" : n * t * a + "px", o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t + "%" : o * t + "px", null != d) {
                var h = d - (d - 1) * (1 - Math.abs(t));
                s[0].style.opacity = h
            }
            if (null == l) s.transform("translate3d(" + n + ", " + o + ", 0px)"); else {
                var p = l - (l - 1) * (1 - Math.abs(t));
                s.transform("translate3d(" + n + ", " + o + ", 0px) scale(" + p + ")")
            }
        }, setTranslate: function () {
            var s = this, e = s.$el, t = s.slides, a = s.progress, r = s.snapGrid;
            e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (e, t) {
                s.parallax.setTransform(t, a)
            }), t.each(function (e, t) {
                var i = t.progress;
                s.params.slidesPerGroup > 1 && "auto" !== s.params.slidesPerView && (i += Math.ceil(e / 2) - a * (r.length - 1)), i = Math.min(Math.max(i, -1), 1), $(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (e, t) {
                    s.parallax.setTransform(t, i)
                })
            })
        }, setTransition: function (a) {
            void 0 === a && (a = this.params.speed);
            this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (e, t) {
                var i = $(t), s = parseInt(i.attr("data-swiper-parallax-duration"), 10) || a;
                0 === a && (s = 0), i.transition(s)
            })
        }
    }, oe = {
        getDistanceBetweenTouches: function (e) {
            if (e.targetTouches.length < 2) return 1;
            var t = e.targetTouches[0].pageX, i = e.targetTouches[0].pageY, s = e.targetTouches[1].pageX, a = e.targetTouches[1].pageY;
            return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2))
        }, onGestureStart: function (e) {
            var t = this.params.zoom, i = this.zoom, s = i.gesture;
            if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !S.gestures) {
                if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                i.fakeGestureTouched = !0, s.scaleStart = oe.getDistanceBetweenTouches(e)
            }
            s.$slideEl && s.$slideEl.length || (s.$slideEl = $(e.target).closest(".swiper-slide"), 0 === s.$slideEl.length && (s.$slideEl = this.slides.eq(this.activeIndex)), s.$imageEl = s.$slideEl.find("img, svg, canvas"), s.$imageWrapEl = s.$imageEl.parent("." + t.containerClass), s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio, 0 !== s.$imageWrapEl.length) ? (s.$imageEl.transition(0), this.zoom.isScaling = !0) : s.$imageEl = void 0
        }, onGestureChange: function (e) {
            var t = this.params.zoom, i = this.zoom, s = i.gesture;
            if (!S.gestures) {
                if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                i.fakeGestureMoved = !0, s.scaleMove = oe.getDistanceBetweenTouches(e)
            }
            s.$imageEl && 0 !== s.$imageEl.length && (S.gestures ? i.scale = e.scale * i.currentScale : i.scale = s.scaleMove / s.scaleStart * i.currentScale, i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, .5)), i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)), s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
        }, onGestureEnd: function (e) {
            var t = this.params.zoom, i = this.zoom, s = i.gesture;
            if (!S.gestures) {
                if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !k.android) return;
                i.fakeGestureTouched = !1, i.fakeGestureMoved = !1
            }
            s.$imageEl && 0 !== s.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio), s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (s.$slideEl = void 0))
        }, onTouchStart: function (e) {
            var t = this.zoom, i = t.gesture, s = t.image;
            i.$imageEl && 0 !== i.$imageEl.length && (s.isTouched || (k.android && e.preventDefault(), s.isTouched = !0, s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
        }, onTouchMove: function (e) {
            var t = this.zoom, i = t.gesture, s = t.image, a = t.velocity;
            if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, s.isTouched && i.$slideEl)) {
                s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = re.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = re.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (s.startX = -s.startX, s.startY = -s.startY));
                var r = s.width * t.scale, n = s.height * t.scale;
                if (!(r < i.slideWidth && n < i.slideHeight)) {
                    if (s.minX = Math.min(i.slideWidth / 2 - r / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - n / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !t.isScaling) {
                        if (this.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void (s.isTouched = !1);
                        if (!this.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void (s.isTouched = !1)
                    }
                    e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = s.touchesCurrent.x, a.prevPositionY = s.touchesCurrent.y, a.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
                }
            }
        }, onTouchEnd: function () {
            var e = this.zoom, t = e.gesture, i = e.image, s = e.velocity;
            if (t.$imageEl && 0 !== t.$imageEl.length) {
                if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void (i.isMoved = !1);
                i.isTouched = !1, i.isMoved = !1;
                var a = 300, r = 300, n = s.x * a, o = i.currentX + n, l = s.y * r, d = i.currentY + l;
                0 !== s.x && (a = Math.abs((o - i.currentX) / s.x)), 0 !== s.y && (r = Math.abs((d - i.currentY) / s.y));
                var h = Math.max(a, r);
                i.currentX = o, i.currentY = d;
                var p = i.width * e.scale, c = i.height * e.scale;
                i.minX = Math.min(t.slideWidth / 2 - p / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - c / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(h).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
            }
        }, onTransitionEnd: function () {
            var e = this.zoom, t = e.gesture;
            t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0)
        }, toggle: function (e) {
            var t = this.zoom;
            t.scale && 1 !== t.scale ? t.out() : t.in(e)
        }, in: function (e) {
            var t, i, s, a, r, n, o, l, d, h, p, c, u, v, f, m, g = this.zoom, b = this.params.zoom, w = g.gesture, y = g.image;
            (w.$slideEl || (w.$slideEl = this.clickedSlide ? $(this.clickedSlide) : this.slides.eq(this.activeIndex), w.$imageEl = w.$slideEl.find("img, svg, canvas"), w.$imageWrapEl = w.$imageEl.parent("." + b.containerClass)), w.$imageEl && 0 !== w.$imageEl.length) && (w.$slideEl.addClass("" + b.zoomedSlideClass), void 0 === y.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = y.touchesStart.x, i = y.touchesStart.y), g.scale = w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio, g.currentScale = w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio, e ? (f = w.$slideEl[0].offsetWidth, m = w.$slideEl[0].offsetHeight, s = w.$slideEl.offset().left + f / 2 - t, a = w.$slideEl.offset().top + m / 2 - i, o = w.$imageEl[0].offsetWidth, l = w.$imageEl[0].offsetHeight, d = o * g.scale, h = l * g.scale, u = -(p = Math.min(f / 2 - d / 2, 0)), v = -(c = Math.min(m / 2 - h / 2, 0)), (r = s * g.scale) < p && (r = p), r > u && (r = u), (n = a * g.scale) < c && (n = c), n > v && (n = v)) : (r = 0, n = 0), w.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"), w.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + g.scale + ")"))
        }, out: function () {
            var e = this.zoom, t = this.params.zoom, i = e.gesture;
            i.$slideEl || (i.$slideEl = this.clickedSlide ? $(this.clickedSlide) : this.slides.eq(this.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (e.scale = 1, e.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + t.zoomedSlideClass), i.$slideEl = void 0)
        }, enable: function () {
            var e = this.zoom;
            if (!e.enabled) {
                e.enabled = !0;
                var t = !("touchstart" !== this.touchEvents.start || !S.passiveListener || !this.params.passiveListeners) && {passive: !0, capture: !1}, i = !S.passiveListener || {passive: !1, capture: !0};
                S.gestures ? (this.$wrapperEl.on("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.on("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.on(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.on(this.touchEvents.move, ".swiper-slide", e.onGestureChange, i), this.$wrapperEl.on(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t), this.touchEvents.cancel && this.$wrapperEl.on(this.touchEvents.cancel, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, i)
            }
        }, disable: function () {
            var e = this.zoom;
            if (e.enabled) {
                this.zoom.enabled = !1;
                var t = !("touchstart" !== this.touchEvents.start || !S.passiveListener || !this.params.passiveListeners) && {passive: !0, capture: !1}, i = !S.passiveListener || {passive: !1, capture: !0};
                S.gestures ? (this.$wrapperEl.off("gesturestart", ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off("gesturechange", ".swiper-slide", e.onGestureChange, t), this.$wrapperEl.off("gestureend", ".swiper-slide", e.onGestureEnd, t)) : "touchstart" === this.touchEvents.start && (this.$wrapperEl.off(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t), this.$wrapperEl.off(this.touchEvents.move, ".swiper-slide", e.onGestureChange, i), this.$wrapperEl.off(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t), this.touchEvents.cancel && this.$wrapperEl.off(this.touchEvents.cancel, ".swiper-slide", e.onGestureEnd, t)), this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove, i)
            }
        }
    }, le = {
        loadInSlide: function (e, l) {
            void 0 === l && (l = !0);
            var d = this, h = d.params.lazy;
            if (void 0 !== e && 0 !== d.slides.length) {
                var p = d.virtual && d.params.virtual.enabled ? d.$wrapperEl.children("." + d.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : d.slides.eq(e),
                    t = p.find("." + h.elementClass + ":not(." + h.loadedClass + "):not(." + h.loadingClass + ")");
                !p.hasClass(h.elementClass) || p.hasClass(h.loadedClass) || p.hasClass(h.loadingClass) || (t = t.add(p[0])), 0 !== t.length && t.each(function (e, t) {
                    var s = $(t);
                    s.addClass(h.loadingClass);
                    var a = s.attr("data-background"), r = s.attr("data-src"), n = s.attr("data-srcset"), o = s.attr("data-sizes");
                    d.loadImage(s[0], r || a, n, o, !1, function () {
                        if (null != d && d && (!d || d.params) && !d.destroyed) {
                            if (a ? (s.css("background-image", 'url("' + a + '")'), s.removeAttr("data-background")) : (n && (s.attr("srcset", n), s.removeAttr("data-srcset")), o && (s.attr("sizes", o), s.removeAttr("data-sizes")), r && (s.attr("src", r), s.removeAttr("data-src"))), s.addClass(h.loadedClass).removeClass(h.loadingClass), p.find("." + h.preloaderClass).remove(), d.params.loop && l) {
                                var e = p.attr("data-swiper-slide-index");
                                if (p.hasClass(d.params.slideDuplicateClass)) {
                                    var t = d.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + d.params.slideDuplicateClass + ")");
                                    d.lazy.loadInSlide(t.index(), !1)
                                } else {
                                    var i = d.$wrapperEl.children("." + d.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                    d.lazy.loadInSlide(i.index(), !1)
                                }
                            }
                            d.emit("lazyImageReady", p[0], s[0])
                        }
                    }), d.emit("lazyImageLoad", p[0], s[0])
                })
            }
        }, load: function () {
            var s = this, t = s.$wrapperEl, i = s.params, a = s.slides, e = s.activeIndex, r = s.virtual && i.virtual.enabled, n = i.lazy, o = i.slidesPerView;

            function l(e) {
                if (r) {
                    if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
                } else if (a[e]) return !0;
                return !1
            }

            function d(e) {
                return r ? $(e).attr("data-swiper-slide-index") : $(e).index()
            }

            if ("auto" === o && (o = 0), s.lazy.initialImageLoaded || (s.lazy.initialImageLoaded = !0), s.params.watchSlidesVisibility) t.children("." + i.slideVisibleClass).each(function (e, t) {
                var i = r ? $(t).attr("data-swiper-slide-index") : $(t).index();
                s.lazy.loadInSlide(i)
            }); else if (o > 1) for (var h = e; h < e + o; h += 1) l(h) && s.lazy.loadInSlide(h); else s.lazy.loadInSlide(e);
            if (n.loadPrevNext) if (o > 1 || n.loadPrevNextAmount && n.loadPrevNextAmount > 1) {
                for (var p = n.loadPrevNextAmount, c = o, u = Math.min(e + c + Math.max(p, c), a.length), v = Math.max(e - Math.max(c, p), 0), f = e + o; f < u; f += 1) l(f) && s.lazy.loadInSlide(f);
                for (var m = v; m < e; m += 1) l(m) && s.lazy.loadInSlide(m)
            } else {
                var g = t.children("." + i.slideNextClass);
                g.length > 0 && s.lazy.loadInSlide(d(g));
                var b = t.children("." + i.slidePrevClass);
                b.length > 0 && s.lazy.loadInSlide(d(b))
            }
        }
    }, de = {
        LinearSpline: function (e, t) {
            var i, s, a, r, n, o = function (e, t) {
                for (s = -1, i = e.length; i - s > 1;) e[a = i + s >> 1] <= t ? s = a : i = a;
                return i
            };
            return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
                return e ? (n = o(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0
            }, this
        }, getInterpolateFunction: function (e) {
            this.controller.spline || (this.controller.spline = this.params.loop ? new de.LinearSpline(this.slidesGrid, e.slidesGrid) : new de.LinearSpline(this.snapGrid, e.snapGrid))
        }, setTranslate: function (e, t) {
            var i, s, a = this, r = a.controller.control;

            function n(e) {
                var t = a.rtlTranslate ? -a.translate : a.translate;
                "slide" === a.params.controller.by && (a.controller.getInterpolateFunction(e), s = -a.controller.spline.interpolate(-t)), s && "container" !== a.params.controller.by || (i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate()), s = (t - a.minTranslate()) * i + e.minTranslate()), a.params.controller.inverse && (s = e.maxTranslate() - s), e.updateProgress(s), e.setTranslate(s, a), e.updateActiveIndex(), e.updateSlidesClasses()
            }

            if (Array.isArray(r)) for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof Y && n(r[o]); else r instanceof Y && t !== r && n(r)
        }, setTransition: function (t, e) {
            var i, s = this, a = s.controller.control;

            function r(e) {
                e.setTransition(t, s), 0 !== t && (e.transitionStart(), e.params.autoHeight && re.nextTick(function () {
                    e.updateAutoHeight()
                }), e.$wrapperEl.transitionEnd(function () {
                    a && (e.params.loop && "slide" === s.params.controller.by && e.loopFix(), e.transitionEnd())
                }))
            }

            if (Array.isArray(a)) for (i = 0; i < a.length; i += 1) a[i] !== e && a[i] instanceof Y && r(a[i]); else a instanceof Y && e !== a && r(a)
        }
    }, he = {
        makeElFocusable: function (e) {
            return e.attr("tabIndex", "0"), e
        }, addElRole: function (e, t) {
            return e.attr("role", t), e
        }, addElLabel: function (e, t) {
            return e.attr("aria-label", t), e
        }, disableEl: function (e) {
            return e.attr("aria-disabled", !0), e
        }, enableEl: function (e) {
            return e.attr("aria-disabled", !1), e
        }, onEnterKey: function (e) {
            var t = this.params.a11y;
            if (13 === e.keyCode) {
                var i = $(e.target);
                this.navigation && this.navigation.$nextEl && i.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)), this.navigation && this.navigation.$prevEl && i.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)), this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click()
            }
        }, notify: function (e) {
            var t = this.a11y.liveRegion;
            0 !== t.length && (t.html(""), t.html(e))
        }, updateNavigation: function () {
            if (!this.params.loop && this.navigation) {
                var e = this.navigation, t = e.$nextEl, i = e.$prevEl;
                i && i.length > 0 && (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)), t && t.length > 0 && (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t))
            }
        }, updatePagination: function () {
            var s = this, a = s.params.a11y;
            s.pagination && s.params.pagination.clickable && s.pagination.bullets && s.pagination.bullets.length && s.pagination.bullets.each(function (e, t) {
                var i = $(t);
                s.a11y.makeElFocusable(i), s.a11y.addElRole(i, "button"), s.a11y.addElLabel(i, a.paginationBulletMessage.replace(/{{index}}/, i.index() + 1))
            })
        }, init: function () {
            this.$el.append(this.a11y.liveRegion);
            var e, t, i = this.params.a11y;
            this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, i.nextSlideMessage), e.on("keydown", this.a11y.onEnterKey)), t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, i.prevSlideMessage), t.on("keydown", this.a11y.onEnterKey)), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
        }, destroy: function () {
            var e, t;
            this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && e.off("keydown", this.a11y.onEnterKey), t && t.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
        }
    }, pe = {
        init: function () {
            if (this.params.history) {
                if (!ae.history || !ae.history.pushState) return this.params.history.enabled = !1, void (this.params.hashNavigation.enabled = !0);
                var e = this.history;
                e.initialized = !0, e.paths = pe.getPathValues(), (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || ae.addEventListener("popstate", this.history.setHistoryPopState))
            }
        }, destroy: function () {
            this.params.history.replaceState || ae.removeEventListener("popstate", this.history.setHistoryPopState)
        }, setHistoryPopState: function () {
            this.history.paths = pe.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
        }, getPathValues: function () {
            var e = ae.location.pathname.slice(1).split("/").filter(function (e) {
                return "" !== e
            }), t = e.length;
            return {key: e[t - 2], value: e[t - 1]}
        }, setHistory: function (e, t) {
            if (this.history.initialized && this.params.history.enabled) {
                var i = this.slides.eq(t), s = pe.slugify(i.attr("data-history"));
                ae.location.pathname.includes(e) || (s = e + "/" + s);
                var a = ae.history.state;
                a && a.value === s || (this.params.history.replaceState ? ae.history.replaceState({value: s}, null, s) : ae.history.pushState({value: s}, null, s))
            }
        }, slugify: function (e) {
            return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
        }, scrollToSlide: function (e, t, i) {
            if (t) for (var s = 0, a = this.slides.length; s < a; s += 1) {
                var r = this.slides.eq(s);
                if (pe.slugify(r.attr("data-history")) === t && !r.hasClass(this.params.slideDuplicateClass)) {
                    var n = r.index();
                    this.slideTo(n, e, i)
                }
            } else this.slideTo(0, e, i)
        }
    }, ce = {
        onHashCange: function () {
            var e = f.location.hash.replace("#", "");
            if (e !== this.slides.eq(this.activeIndex).attr("data-hash")) {
                var t = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + e + '"]').index();
                if (void 0 === t) return;
                this.slideTo(t)
            }
        }, setHash: function () {
            if (this.hashNavigation.initialized && this.params.hashNavigation.enabled) if (this.params.hashNavigation.replaceState && ae.history && ae.history.replaceState) ae.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || ""); else {
                var e = this.slides.eq(this.activeIndex), t = e.attr("data-hash") || e.attr("data-history");
                f.location.hash = t || ""
            }
        }, init: function () {
            if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
                this.hashNavigation.initialized = !0;
                var e = f.location.hash.replace("#", "");
                if (e) for (var t = 0, i = this.slides.length; t < i; t += 1) {
                    var s = this.slides.eq(t);
                    if ((s.attr("data-hash") || s.attr("data-history")) === e && !s.hasClass(this.params.slideDuplicateClass)) {
                        var a = s.index();
                        this.slideTo(a, 0, this.params.runCallbacksOnInit, !0)
                    }
                }
                this.params.hashNavigation.watchState && $(ae).on("hashchange", this.hashNavigation.onHashCange)
            }
        }, destroy: function () {
            this.params.hashNavigation.watchState && $(ae).off("hashchange", this.hashNavigation.onHashCange)
        }
    }, ue = {
        run: function () {
            var e = this, t = e.slides.eq(e.activeIndex), i = e.params.autoplay.delay;
            t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = re.nextTick(function () {
                e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")), e.params.cssMode && e.autoplay.running && e.autoplay.run()
            }, i)
        }, start: function () {
            return void 0 === this.autoplay.timeout && (!this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0))
        }, stop: function () {
            return !!this.autoplay.running && (void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0))
        }, pause: function (e) {
            this.autoplay.running && (this.autoplay.paused || (this.autoplay.timeout && clearTimeout(this.autoplay.timeout), this.autoplay.paused = !0, 0 !== e && this.params.autoplay.waitForTransition ? (this.$wrapperEl[0].addEventListener("transitionend", this.autoplay.onTransitionEnd), this.$wrapperEl[0].addEventListener("webkitTransitionEnd", this.autoplay.onTransitionEnd)) : (this.autoplay.paused = !1, this.autoplay.run())))
        }
    }, ve = {
        setTranslate: function () {
            for (var e = this.slides, t = 0; t < e.length; t += 1) {
                var i = this.slides.eq(t), s = -i[0].swiperSlideOffset;
                this.params.virtualTranslate || (s -= this.translate);
                var a = 0;
                this.isHorizontal() || (a = s, s = 0);
                var r = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                i.css({opacity: r}).transform("translate3d(" + s + "px, " + a + "px, 0px)")
            }
        }, setTransition: function (e) {
            var i = this, t = i.slides, s = i.$wrapperEl;
            if (t.transition(e), i.params.virtualTranslate && 0 !== e) {
                var a = !1;
                t.transitionEnd(function () {
                    if (!a && i && !i.destroyed) {
                        a = !0, i.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) s.trigger(e[t])
                    }
                })
            }
        }
    }, fe = {
        setTranslate: function () {
            var e, t = this.$el, i = this.$wrapperEl, s = this.slides, a = this.width, r = this.height, n = this.rtlTranslate, o = this.size, l = this.params.cubeEffect, d = this.isHorizontal(),
                h = this.virtual && this.params.virtual.enabled, p = 0;
            l.shadow && (d ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = $('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({height: a + "px"})) : 0 === (e = t.find(".swiper-cube-shadow")).length && (e = $('<div class="swiper-cube-shadow"></div>'), t.append(e)));
            for (var c = 0; c < s.length; c += 1) {
                var u = s.eq(c), v = c;
                h && (v = parseInt(u.attr("data-swiper-slide-index"), 10));
                var f = 90 * v, m = Math.floor(f / 360);
                n && (f = -f, m = Math.floor(-f / 360));
                var g = Math.max(Math.min(u[0].progress, 1), -1), b = 0, w = 0, y = 0;
                v % 4 == 0 ? (b = 4 * -m * o, y = 0) : (v - 1) % 4 == 0 ? (b = 0, y = 4 * -m * o) : (v - 2) % 4 == 0 ? (b = o + 4 * m * o, y = o) : (v - 3) % 4 == 0 && (b = -o, y = 3 * o + 4 * o * m), n && (b = -b), d || (w = b, b = 0);
                var x = "rotateX(" + (d ? 0 : -f) + "deg) rotateY(" + (d ? f : 0) + "deg) translate3d(" + b + "px, " + w + "px, " + y + "px)";
                if (g <= 1 && g > -1 && (p = 90 * v + 90 * g, n && (p = 90 * -v - 90 * g)), u.transform(x), l.slideShadows) {
                    var T = d ? u.find(".swiper-slide-shadow-left") : u.find(".swiper-slide-shadow-top"), E = d ? u.find(".swiper-slide-shadow-right") : u.find(".swiper-slide-shadow-bottom");
                    0 === T.length && (T = $('<div class="swiper-slide-shadow-' + (d ? "left" : "top") + '"></div>'), u.append(T)), 0 === E.length && (E = $('<div class="swiper-slide-shadow-' + (d ? "right" : "bottom") + '"></div>'), u.append(E)), T.length && (T[0].style.opacity = Math.max(-g, 0)), E.length && (E[0].style.opacity = Math.max(g, 0))
                }
            }
            if (i.css({
                "-webkit-transform-origin": "50% 50% -" + o / 2 + "px",
                "-moz-transform-origin": "50% 50% -" + o / 2 + "px",
                "-ms-transform-origin": "50% 50% -" + o / 2 + "px",
                "transform-origin": "50% 50% -" + o / 2 + "px"
            }), l.shadow) if (d) e.transform("translate3d(0px, " + (a / 2 + l.shadowOffset) + "px, " + -a / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + l.shadowScale + ")"); else {
                var S = Math.abs(p) - 90 * Math.floor(Math.abs(p) / 90), C = 1.5 - (Math.sin(2 * S * Math.PI / 360) / 2 + Math.cos(2 * S * Math.PI / 360) / 2), M = l.shadowScale, P = l.shadowScale / C,
                    z = l.shadowOffset;
                e.transform("scale3d(" + M + ", 1, " + P + ") translate3d(0px, " + (r / 2 + z) + "px, " + -r / 2 / P + "px) rotateX(-90deg)")
            }
            var k = R.isSafari || R.isUiWebView ? -o / 2 : 0;
            i.transform("translate3d(0px,0," + k + "px) rotateX(" + (this.isHorizontal() ? 0 : p) + "deg) rotateY(" + (this.isHorizontal() ? -p : 0) + "deg)")
        }, setTransition: function (e) {
            var t = this.$el;
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
        }
    }, me = {
        setTranslate: function () {
            for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
                var s = e.eq(i), a = s[0].progress;
                this.params.flipEffect.limitRotation && (a = Math.max(Math.min(s[0].progress, 1), -1));
                var r = -180 * a, n = 0, o = -s[0].swiperSlideOffset, l = 0;
                if (this.isHorizontal() ? t && (r = -r) : (l = o, o = 0, n = -r, r = 0), s[0].style.zIndex = -Math.abs(Math.round(a)) + e.length, this.params.flipEffect.slideShadows) {
                    var d = this.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
                        h = this.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                    0 === d.length && (d = $('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), s.append(d)), 0 === h.length && (h = $('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(h)), d.length && (d[0].style.opacity = Math.max(-a, 0)), h.length && (h[0].style.opacity = Math.max(a, 0))
                }
                s.transform("translate3d(" + o + "px, " + l + "px, 0px) rotateX(" + n + "deg) rotateY(" + r + "deg)")
            }
        }, setTransition: function (e) {
            var i = this, t = i.slides, s = i.activeIndex, a = i.$wrapperEl;
            if (t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), i.params.virtualTranslate && 0 !== e) {
                var r = !1;
                t.eq(s).transitionEnd(function () {
                    if (!r && i && !i.destroyed) {
                        r = !0, i.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) a.trigger(e[t])
                    }
                })
            }
        }
    }, ge = {
        setTranslate: function () {
            for (var e = this.width, t = this.height, i = this.slides, s = this.$wrapperEl, a = this.slidesSizesGrid, r = this.params.coverflowEffect, n = this.isHorizontal(), o = this.translate, l = n ? e / 2 - o : t / 2 - o, d = n ? r.rotate : -r.rotate, h = r.depth, p = 0, c = i.length; p < c; p += 1) {
                var u = i.eq(p), v = a[p], f = (l - u[0].swiperSlideOffset - v / 2) / v * r.modifier, m = n ? d * f : 0, g = n ? 0 : d * f, b = -h * Math.abs(f), w = n ? 0 : r.stretch * f, y = n ? r.stretch * f : 0;
                Math.abs(y) < .001 && (y = 0), Math.abs(w) < .001 && (w = 0), Math.abs(b) < .001 && (b = 0), Math.abs(m) < .001 && (m = 0), Math.abs(g) < .001 && (g = 0);
                var x = "translate3d(" + y + "px," + w + "px," + b + "px)  rotateX(" + g + "deg) rotateY(" + m + "deg)";
                if (u.transform(x), u[0].style.zIndex = 1 - Math.abs(Math.round(f)), r.slideShadows) {
                    var T = n ? u.find(".swiper-slide-shadow-left") : u.find(".swiper-slide-shadow-top"), E = n ? u.find(".swiper-slide-shadow-right") : u.find(".swiper-slide-shadow-bottom");
                    0 === T.length && (T = $('<div class="swiper-slide-shadow-' + (n ? "left" : "top") + '"></div>'), u.append(T)), 0 === E.length && (E = $('<div class="swiper-slide-shadow-' + (n ? "right" : "bottom") + '"></div>'), u.append(E)), T.length && (T[0].style.opacity = f > 0 ? f : 0), E.length && (E[0].style.opacity = -f > 0 ? -f : 0)
                }
            }
            (S.pointerEvents || S.prefixedPointerEvents) && (s[0].style.perspectiveOrigin = l + "px 50%")
        }, setTransition: function (e) {
            this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
        }
    }, be = {
        init: function () {
            var e = this.params.thumbs, t = this.constructor;
            e.swiper instanceof t ? (this.thumbs.swiper = e.swiper, re.extend(this.thumbs.swiper.originalParams, {
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            }), re.extend(this.thumbs.swiper.params, {watchSlidesProgress: !0, slideToClickedSlide: !1})) : re.isObject(e.swiper) && (this.thumbs.swiper = new t(re.extend({}, e.swiper, {
                watchSlidesVisibility: !0,
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
            })), this.thumbs.swiperCreated = !0), this.thumbs.swiper.$el.addClass(this.params.thumbs.thumbsContainerClass), this.thumbs.swiper.on("tap", this.thumbs.onThumbClick)
        }, onThumbClick: function () {
            var e = this.thumbs.swiper;
            if (e) {
                var t = e.clickedIndex, i = e.clickedSlide;
                if (!(i && $(i).hasClass(this.params.thumbs.slideThumbActiveClass) || null == t)) {
                    var s;
                    if (s = e.params.loop ? parseInt($(e.clickedSlide).attr("data-swiper-slide-index"), 10) : t, this.params.loop) {
                        var a = this.activeIndex;
                        this.slides.eq(a).hasClass(this.params.slideDuplicateClass) && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, a = this.activeIndex);
                        var r = this.slides.eq(a).prevAll('[data-swiper-slide-index="' + s + '"]').eq(0).index(), n = this.slides.eq(a).nextAll('[data-swiper-slide-index="' + s + '"]').eq(0).index();
                        s = void 0 === r ? n : void 0 === n ? r : n - a < a - r ? n : r
                    }
                    this.slideTo(s)
                }
            }
        }, update: function (e) {
            var t = this.thumbs.swiper;
            if (t) {
                var i = "auto" === t.params.slidesPerView ? t.slidesPerViewDynamic() : t.params.slidesPerView;
                if (this.realIndex !== t.realIndex) {
                    var s, a = t.activeIndex;
                    if (t.params.loop) {
                        t.slides.eq(a).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, a = t.activeIndex);
                        var r = t.slides.eq(a).prevAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index(), n = t.slides.eq(a).nextAll('[data-swiper-slide-index="' + this.realIndex + '"]').eq(0).index();
                        s = void 0 === r ? n : void 0 === n ? r : n - a == a - r ? a : n - a < a - r ? n : r
                    } else s = this.realIndex;
                    t.visibleSlidesIndexes && t.visibleSlidesIndexes.indexOf(s) < 0 && (t.params.centeredSlides ? s = s > a ? s - Math.floor(i / 2) + 1 : s + Math.floor(i / 2) - 1 : s > a && (s = s - i + 1), t.slideTo(s, e ? 0 : void 0))
                }
                var o = 1, l = this.params.thumbs.slideThumbActiveClass;
                if (this.params.slidesPerView > 1 && !this.params.centeredSlides && (o = this.params.slidesPerView), this.params.thumbs.multipleActiveThumbs || (o = 1), o = Math.floor(o), t.slides.removeClass(l), t.params.loop || t.params.virtual && t.params.virtual.enabled) for (var d = 0; d < o; d += 1) t.$wrapperEl.children('[data-swiper-slide-index="' + (this.realIndex + d) + '"]').addClass(l); else for (var h = 0; h < o; h += 1) t.slides.eq(this.realIndex + h).addClass(l)
            }
        }
    }, we = [F, W, q, j, U, Z, J, {
        name: "mousewheel", params: {mousewheel: {enabled: !1, releaseOnEdges: !1, invert: !1, forceToAxis: !1, sensitivity: 1, eventsTarged: "container"}}, create: function () {
            re.extend(this, {
                mousewheel: {
                    enabled: !1,
                    enable: ee.enable.bind(this),
                    disable: ee.disable.bind(this),
                    handle: ee.handle.bind(this),
                    handleMouseEnter: ee.handleMouseEnter.bind(this),
                    handleMouseLeave: ee.handleMouseLeave.bind(this),
                    animateSlider: ee.animateSlider.bind(this),
                    releaseScroll: ee.releaseScroll.bind(this),
                    lastScrollTime: re.now(),
                    lastEventBeforeSnap: void 0,
                    recentWheelEvents: []
                }
            })
        }, on: {
            init: function () {
                !this.params.mousewheel.enabled && this.params.cssMode && this.mousewheel.disable(), this.params.mousewheel.enabled && this.mousewheel.enable()
            }, destroy: function () {
                this.params.cssMode && this.mousewheel.enable(), this.mousewheel.enabled && this.mousewheel.disable()
            }
        }
    }, {
        name: "navigation",
        params: {navigation: {nextEl: null, prevEl: null, hideOnClick: !1, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock"}},
        create: function () {
            re.extend(this, {navigation: {init: te.init.bind(this), update: te.update.bind(this), destroy: te.destroy.bind(this), onNextClick: te.onNextClick.bind(this), onPrevClick: te.onPrevClick.bind(this)}})
        },
        on: {
            init: function () {
                this.navigation.init(), this.navigation.update()
            }, toEdge: function () {
                this.navigation.update()
            }, fromEdge: function () {
                this.navigation.update()
            }, destroy: function () {
                this.navigation.destroy()
            }, click: function (e) {
                var t, i = this.navigation, s = i.$nextEl, a = i.$prevEl;
                !this.params.navigation.hideOnClick || $(e.target).is(a) || $(e.target).is(s) || (s ? t = s.hasClass(this.params.navigation.hiddenClass) : a && (t = a.hasClass(this.params.navigation.hiddenClass)), !0 === t ? this.emit("navigationShow", this) : this.emit("navigationHide", this), s && s.toggleClass(this.params.navigation.hiddenClass), a && a.toggleClass(this.params.navigation.hiddenClass))
            }
        }
    }, {
        name: "pagination",
        params: {
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: function (e) {
                    return e
                },
                formatFractionTotal: function (e) {
                    return e
                },
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                modifierClass: "swiper-pagination-",
                currentClass: "swiper-pagination-current",
                totalClass: "swiper-pagination-total",
                hiddenClass: "swiper-pagination-hidden",
                progressbarFillClass: "swiper-pagination-progressbar-fill",
                progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                clickableClass: "swiper-pagination-clickable",
                lockClass: "swiper-pagination-lock"
            }
        },
        create: function () {
            re.extend(this, {pagination: {init: ie.init.bind(this), render: ie.render.bind(this), update: ie.update.bind(this), destroy: ie.destroy.bind(this), dynamicBulletIndex: 0}})
        },
        on: {
            init: function () {
                this.pagination.init(), this.pagination.render(), this.pagination.update()
            }, activeIndexChange: function () {
                this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
            }, snapIndexChange: function () {
                this.params.loop || this.pagination.update()
            }, slidesLengthChange: function () {
                this.params.loop && (this.pagination.render(), this.pagination.update())
            }, snapGridLengthChange: function () {
                this.params.loop || (this.pagination.render(), this.pagination.update())
            }, destroy: function () {
                this.pagination.destroy()
            }, click: function (e) {
                this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !$(e.target).hasClass(this.params.pagination.bulletClass) && (!0 === this.pagination.$el.hasClass(this.params.pagination.hiddenClass) ? this.emit("paginationShow", this) : this.emit("paginationHide", this), this.pagination.$el.toggleClass(this.params.pagination.hiddenClass))
            }
        }
    }, {
        name: "scrollbar", params: {scrollbar: {el: null, dragSize: "auto", hide: !1, draggable: !1, snapOnRelease: !0, lockClass: "swiper-scrollbar-lock", dragClass: "swiper-scrollbar-drag"}}, create: function () {
            re.extend(this, {
                scrollbar: {
                    init: se.init.bind(this),
                    destroy: se.destroy.bind(this),
                    updateSize: se.updateSize.bind(this),
                    setTranslate: se.setTranslate.bind(this),
                    setTransition: se.setTransition.bind(this),
                    enableDraggable: se.enableDraggable.bind(this),
                    disableDraggable: se.disableDraggable.bind(this),
                    setDragPosition: se.setDragPosition.bind(this),
                    getPointerPosition: se.getPointerPosition.bind(this),
                    onDragStart: se.onDragStart.bind(this),
                    onDragMove: se.onDragMove.bind(this),
                    onDragEnd: se.onDragEnd.bind(this),
                    isTouched: !1,
                    timeout: null,
                    dragTimeout: null
                }
            })
        }, on: {
            init: function () {
                this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
            }, update: function () {
                this.scrollbar.updateSize()
            }, resize: function () {
                this.scrollbar.updateSize()
            }, observerUpdate: function () {
                this.scrollbar.updateSize()
            }, setTranslate: function () {
                this.scrollbar.setTranslate()
            }, setTransition: function (e) {
                this.scrollbar.setTransition(e)
            }, destroy: function () {
                this.scrollbar.destroy()
            }
        }
    }, {
        name: "parallax", params: {parallax: {enabled: !1}}, create: function () {
            re.extend(this, {parallax: {setTransform: ne.setTransform.bind(this), setTranslate: ne.setTranslate.bind(this), setTransition: ne.setTransition.bind(this)}})
        }, on: {
            beforeInit: function () {
                this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
            }, init: function () {
                this.params.parallax.enabled && this.parallax.setTranslate()
            }, setTranslate: function () {
                this.params.parallax.enabled && this.parallax.setTranslate()
            }, setTransition: function (e) {
                this.params.parallax.enabled && this.parallax.setTransition(e)
            }
        }
    }, {
        name: "zoom", params: {zoom: {enabled: !1, maxRatio: 3, minRatio: 1, toggle: !0, containerClass: "swiper-zoom-container", zoomedSlideClass: "swiper-slide-zoomed"}}, create: function () {
            var s = this, t = {
                enabled: !1,
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {$slideEl: void 0, slideWidth: void 0, slideHeight: void 0, $imageEl: void 0, $imageWrapEl: void 0, maxRatio: 3},
                image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                },
                velocity: {x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0}
            };
            "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (e) {
                t[e] = oe[e].bind(s)
            }), re.extend(s, {zoom: t});
            var a = 1;
            Object.defineProperty(s.zoom, "scale", {
                get: function () {
                    return a
                }, set: function (e) {
                    if (a !== e) {
                        var t = s.zoom.gesture.$imageEl ? s.zoom.gesture.$imageEl[0] : void 0, i = s.zoom.gesture.$slideEl ? s.zoom.gesture.$slideEl[0] : void 0;
                        s.emit("zoomChange", e, t, i)
                    }
                    a = e
                }
            })
        }, on: {
            init: function () {
                this.params.zoom.enabled && this.zoom.enable()
            }, destroy: function () {
                this.zoom.disable()
            }, touchStart: function (e) {
                this.zoom.enabled && this.zoom.onTouchStart(e)
            }, touchEnd: function (e) {
                this.zoom.enabled && this.zoom.onTouchEnd(e)
            }, doubleTap: function (e) {
                this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
            }, transitionEnd: function () {
                this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
            }, slideChange: function () {
                this.zoom.enabled && this.params.zoom.enabled && this.params.cssMode && this.zoom.onTransitionEnd()
            }
        }
    }, {
        name: "lazy",
        params: {
            lazy: {
                enabled: !1,
                loadPrevNext: !1,
                loadPrevNextAmount: 1,
                loadOnTransitionStart: !1,
                elementClass: "swiper-lazy",
                loadingClass: "swiper-lazy-loading",
                loadedClass: "swiper-lazy-loaded",
                preloaderClass: "swiper-lazy-preloader"
            }
        },
        create: function () {
            re.extend(this, {lazy: {initialImageLoaded: !1, load: le.load.bind(this), loadInSlide: le.loadInSlide.bind(this)}})
        },
        on: {
            beforeInit: function () {
                this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
            }, init: function () {
                this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
            }, scroll: function () {
                this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
            }, resize: function () {
                this.params.lazy.enabled && this.lazy.load()
            }, scrollbarDragMove: function () {
                this.params.lazy.enabled && this.lazy.load()
            }, transitionStart: function () {
                this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load()
            }, transitionEnd: function () {
                this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
            }, slideChange: function () {
                this.params.lazy.enabled && this.params.cssMode && this.lazy.load()
            }
        }
    }, {
        name: "controller", params: {controller: {control: void 0, inverse: !1, by: "slide"}}, create: function () {
            re.extend(this, {
                controller: {
                    control: this.params.controller.control,
                    getInterpolateFunction: de.getInterpolateFunction.bind(this),
                    setTranslate: de.setTranslate.bind(this),
                    setTransition: de.setTransition.bind(this)
                }
            })
        }, on: {
            update: function () {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
            }, resize: function () {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
            }, observerUpdate: function () {
                this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
            }, setTranslate: function (e, t) {
                this.controller.control && this.controller.setTranslate(e, t)
            }, setTransition: function (e, t) {
                this.controller.control && this.controller.setTransition(e, t)
            }
        }
    }, {
        name: "a11y",
        params: {
            a11y: {
                enabled: !0,
                notificationClass: "swiper-notification",
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}"
            }
        },
        create: function () {
            var t = this;
            re.extend(t, {a11y: {liveRegion: $('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')}}), Object.keys(he).forEach(function (e) {
                t.a11y[e] = he[e].bind(t)
            })
        },
        on: {
            init: function () {
                this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
            }, toEdge: function () {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            }, fromEdge: function () {
                this.params.a11y.enabled && this.a11y.updateNavigation()
            }, paginationUpdate: function () {
                this.params.a11y.enabled && this.a11y.updatePagination()
            }, destroy: function () {
                this.params.a11y.enabled && this.a11y.destroy()
            }
        }
    }, {
        name: "history", params: {history: {enabled: !1, replaceState: !1, key: "slides"}}, create: function () {
            re.extend(this, {
                history: {
                    init: pe.init.bind(this),
                    setHistory: pe.setHistory.bind(this),
                    setHistoryPopState: pe.setHistoryPopState.bind(this),
                    scrollToSlide: pe.scrollToSlide.bind(this),
                    destroy: pe.destroy.bind(this)
                }
            })
        }, on: {
            init: function () {
                this.params.history.enabled && this.history.init()
            }, destroy: function () {
                this.params.history.enabled && this.history.destroy()
            }, transitionEnd: function () {
                this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
            }, slideChange: function () {
                this.history.initialized && this.params.cssMode && this.history.setHistory(this.params.history.key, this.activeIndex)
            }
        }
    }, {
        name: "hash-navigation", params: {hashNavigation: {enabled: !1, replaceState: !1, watchState: !1}}, create: function () {
            re.extend(this, {hashNavigation: {initialized: !1, init: ce.init.bind(this), destroy: ce.destroy.bind(this), setHash: ce.setHash.bind(this), onHashCange: ce.onHashCange.bind(this)}})
        }, on: {
            init: function () {
                this.params.hashNavigation.enabled && this.hashNavigation.init()
            }, destroy: function () {
                this.params.hashNavigation.enabled && this.hashNavigation.destroy()
            }, transitionEnd: function () {
                this.hashNavigation.initialized && this.hashNavigation.setHash()
            }, slideChange: function () {
                this.hashNavigation.initialized && this.params.cssMode && this.hashNavigation.setHash()
            }
        }
    }, {
        name: "autoplay", params: {autoplay: {enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !0, stopOnLastSlide: !1, reverseDirection: !1}}, create: function () {
            var t = this;
            re.extend(t, {
                autoplay: {
                    running: !1, paused: !1, run: ue.run.bind(t), start: ue.start.bind(t), stop: ue.stop.bind(t), pause: ue.pause.bind(t), onVisibilityChange: function () {
                        "hidden" === document.visibilityState && t.autoplay.running && t.autoplay.pause(), "visible" === document.visibilityState && t.autoplay.paused && (t.autoplay.run(), t.autoplay.paused = !1)
                    }, onTransitionEnd: function (e) {
                        t && !t.destroyed && t.$wrapperEl && e.target === this && (t.$wrapperEl[0].removeEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd), t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
                    }
                }
            })
        }, on: {
            init: function () {
                this.params.autoplay.enabled && (this.autoplay.start(), document.addEventListener("visibilitychange", this.autoplay.onVisibilityChange))
            }, beforeTransitionStart: function (e, t) {
                this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
            }, sliderFirstMove: function () {
                this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
            }, touchEnd: function () {
                this.params.cssMode && this.autoplay.paused && !this.params.autoplay.disableOnInteraction && this.autoplay.run()
            }, destroy: function () {
                this.autoplay.running && this.autoplay.stop(), document.removeEventListener("visibilitychange", this.autoplay.onVisibilityChange)
            }
        }
    }, {
        name: "effect-fade", params: {fadeEffect: {crossFade: !1}}, create: function () {
            re.extend(this, {fadeEffect: {setTranslate: ve.setTranslate.bind(this), setTransition: ve.setTransition.bind(this)}})
        }, on: {
            beforeInit: function () {
                if ("fade" === this.params.effect) {
                    this.classNames.push(this.params.containerModifierClass + "fade");
                    var e = {slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0};
                    re.extend(this.params, e), re.extend(this.originalParams, e)
                }
            }, setTranslate: function () {
                "fade" === this.params.effect && this.fadeEffect.setTranslate()
            }, setTransition: function (e) {
                "fade" === this.params.effect && this.fadeEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-cube", params: {cubeEffect: {slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94}}, create: function () {
            re.extend(this, {cubeEffect: {setTranslate: fe.setTranslate.bind(this), setTransition: fe.setTransition.bind(this)}})
        }, on: {
            beforeInit: function () {
                if ("cube" === this.params.effect) {
                    this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d");
                    var e = {slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, resistanceRatio: 0, spaceBetween: 0, centeredSlides: !1, virtualTranslate: !0};
                    re.extend(this.params, e), re.extend(this.originalParams, e)
                }
            }, setTranslate: function () {
                "cube" === this.params.effect && this.cubeEffect.setTranslate()
            }, setTransition: function (e) {
                "cube" === this.params.effect && this.cubeEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-flip", params: {flipEffect: {slideShadows: !0, limitRotation: !0}}, create: function () {
            re.extend(this, {flipEffect: {setTranslate: me.setTranslate.bind(this), setTransition: me.setTransition.bind(this)}})
        }, on: {
            beforeInit: function () {
                if ("flip" === this.params.effect) {
                    this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d");
                    var e = {slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0};
                    re.extend(this.params, e), re.extend(this.originalParams, e)
                }
            }, setTranslate: function () {
                "flip" === this.params.effect && this.flipEffect.setTranslate()
            }, setTransition: function (e) {
                "flip" === this.params.effect && this.flipEffect.setTransition(e)
            }
        }
    }, {
        name: "effect-coverflow", params: {coverflowEffect: {rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0}}, create: function () {
            re.extend(this, {coverflowEffect: {setTranslate: ge.setTranslate.bind(this), setTransition: ge.setTransition.bind(this)}})
        }, on: {
            beforeInit: function () {
                "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
            }, setTranslate: function () {
                "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
            }, setTransition: function (e) {
                "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
            }
        }
    }, {
        name: "thumbs", params: {thumbs: {multipleActiveThumbs: !0, swiper: null, slideThumbActiveClass: "swiper-slide-thumb-active", thumbsContainerClass: "swiper-container-thumbs"}}, create: function () {
            re.extend(this, {thumbs: {swiper: null, init: be.init.bind(this), update: be.update.bind(this), onThumbClick: be.onThumbClick.bind(this)}})
        }, on: {
            beforeInit: function () {
                var e = this.params.thumbs;
                e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0))
            }, slideChange: function () {
                this.thumbs.swiper && this.thumbs.update()
            }, update: function () {
                this.thumbs.swiper && this.thumbs.update()
            }, resize: function () {
                this.thumbs.swiper && this.thumbs.update()
            }, observerUpdate: function () {
                this.thumbs.swiper && this.thumbs.update()
            }, setTransition: function (e) {
                var t = this.thumbs.swiper;
                t && t.setTransition(e)
            }, beforeDestroy: function () {
                var e = this.thumbs.swiper;
                e && this.thumbs.swiperCreated && e && e.destroy()
            }
        }
    }];
    return void 0 === Y.use && (Y.use = Y.Class.use, Y.installModule = Y.Class.installModule), Y.use(we), Y
});
/* Ammina JS file original /bitrix/templates/avtoshkola/js/jquery.mousewheel.min.js */
!function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
}(function (d) {
    function t(e) {
        var t = e || window.event, i = v.call(arguments, 1), n = 0, o = 0, l = 0, s = 0, a = 0, h = 0;
        if (e = d.event.fix(t), e.type = "mousewheel", "detail" in t && (l = -1 * t.detail), "wheelDelta" in t && (l = t.wheelDelta), "wheelDeltaY" in t && (l = t.wheelDeltaY), "wheelDeltaX" in t && (o = -1 * t.wheelDeltaX), "axis" in t && t.axis === t.HORIZONTAL_AXIS && (o = -1 * l, l = 0), n = 0 === l ? o : l, "deltaY" in t && (l = -1 * t.deltaY, n = l), "deltaX" in t && (o = t.deltaX, 0 === l && (n = -1 * o)), 0 !== l || 0 !== o) {
            if (1 === t.deltaMode) {
                var r = d.data(this, "mousewheel-line-height");
                n *= r, l *= r, o *= r
            } else if (2 === t.deltaMode) {
                var u = d.data(this, "mousewheel-page-height");
                n *= u, l *= u, o *= u
            }
            if (s = Math.max(Math.abs(l), Math.abs(o)), (!w || w > s) && (w = s, m(t, s) && (w /= 40)), m(t, s) && (n /= 40, o /= 40, l /= 40), n = Math[n >= 1 ? "floor" : "ceil"](n / w), o = Math[o >= 1 ? "floor" : "ceil"](o / w), l = Math[l >= 1 ? "floor" : "ceil"](l / w), p.settings.normalizeOffset && this.getBoundingClientRect) {
                var f = this.getBoundingClientRect();
                a = e.clientX - f.left, h = e.clientY - f.top
            }
            return e.deltaX = o, e.deltaY = l, e.deltaFactor = w, e.offsetX = a, e.offsetY = h, e.deltaMode = 0, i.unshift(e, n, o, l), g && clearTimeout(g), g = setTimeout(c, 200), (d.event.dispatch || d.event.handle).apply(this, i)
        }
    }

    function c() {
        w = null
    }

    function m(e, t) {
        return p.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 === 0
    }

    var g, w, e = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], i = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        v = Array.prototype.slice;
    if (d.event.fixHooks) for (var n = e.length; n;) d.event.fixHooks[e[--n]] = d.event.mouseHooks;
    var p = d.event.special.mousewheel = {
        version: "3.1.12", setup: function () {
            if (this.addEventListener) for (var e = i.length; e;) this.addEventListener(i[--e], t, !1); else this.onmousewheel = t;
            d.data(this, "mousewheel-line-height", p.getLineHeight(this)), d.data(this, "mousewheel-page-height", p.getPageHeight(this))
        }, teardown: function () {
            if (this.removeEventListener) for (var e = i.length; e;) this.removeEventListener(i[--e], t, !1); else this.onmousewheel = null;
            d.removeData(this, "mousewheel-line-height"), d.removeData(this, "mousewheel-page-height")
        }, getLineHeight: function (e) {
            var t = d(e), i = t["offsetParent" in d.fn ? "offsetParent" : "parent"]();
            return i.length || (i = d("body")), parseInt(i.css("fontSize"), 10) || parseInt(t.css("fontSize"), 10) || 16
        }, getPageHeight: function (e) {
            return d(e).height()
        }, settings: {adjustOldDeltas: !0, normalizeOffset: !0}
    };
    d.fn.extend({
        mousewheel: function (e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        }, unmousewheel: function (e) {
            return this.unbind("mousewheel", e)
        }
    })
});
/* Ammina JS file original /bitrix/templates/avtoshkola/js/wow.min.js */
(function () {
    var i, e, n, a, o, r = function (t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    }, s = [].indexOf || function (t) {
        for (var e = 0, n = this.length; n > e; e++) if (e in this && this[e] === t) return e;
        return -1
    };
    e = function () {
        function t() {
        }

        return t.prototype.extend = function (t, e) {
            var n, i;
            for (n in e) i = e[n], null == t[n] && (t[n] = i);
            return t
        }, t.prototype.isMobile = function (t) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
        }, t.prototype.createEvent = function (t, e, n, i) {
            var o;
            return null == e && (e = !1), null == n && (n = !1), null == i && (i = null), null != document.createEvent ? (o = document.createEvent("CustomEvent"), o.initCustomEvent(t, e, n, i)) : null != document.createEventObject ? (o = document.createEventObject(), o.eventType = t) : o.eventName = t, o
        }, t.prototype.emitEvent = function (t, e) {
            return null != t.dispatchEvent ? t.dispatchEvent(e) : e in (null != t) ? t[e]() : "on" + e in (null != t) ? t["on" + e]() : void 0
        }, t.prototype.addEvent = function (t, e, n) {
            return null != t.addEventListener ? t.addEventListener(e, n, !1) : null != t.attachEvent ? t.attachEvent("on" + e, n) : t[e] = n
        }, t.prototype.removeEvent = function (t, e, n) {
            return null != t.removeEventListener ? t.removeEventListener(e, n, !1) : null != t.detachEvent ? t.detachEvent("on" + e, n) : delete t[e]
        }, t.prototype.innerHeight = function () {
            return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
        }, t
    }(), n = this.WeakMap || this.MozWeakMap || (n = function () {
        function t() {
            this.keys = [], this.values = []
        }

        return t.prototype.get = function (t) {
            var e, n, i, o, r;
            for (r = this.keys, e = i = 0, o = r.length; o > i; e = ++i) if (n = r[e], n === t) return this.values[e]
        }, t.prototype.set = function (t, e) {
            var n, i, o, r, s;
            for (s = this.keys, n = o = 0, r = s.length; r > o; n = ++o) if (i = s[n], i === t) return void (this.values[n] = e);
            return this.keys.push(t), this.values.push(e)
        }, t
    }()), i = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (i = function () {
        function t() {
            "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }

        return t.notSupported = !0, t.prototype.observe = function () {
        }, t
    }()), a = this.getComputedStyle || function (n, t) {
        return this.getPropertyValue = function (t) {
            var e;
            return "float" === t && (t = "styleFloat"), o.test(t) && t.replace(o, function (t, e) {
                return e.toUpperCase()
            }), (null != (e = n.currentStyle) ? e[t] : void 0) || null
        }, this
    }, o = /(\-([a-z]){1})/g, this.WOW = function () {
        function t(t) {
            null == t && (t = {}), this.scrollCallback = r(this.scrollCallback, this), this.scrollHandler = r(this.scrollHandler, this), this.resetAnimation = r(this.resetAnimation, this), this.start = r(this.start, this), this.scrolled = !0, this.config = this.util().extend(t, this.defaults), null != t.scrollContainer && (this.config.scrollContainer = document.querySelector(t.scrollContainer)), this.animationNameCache = new n, this.wowEvent = this.util().createEvent(this.config.boxClass)
        }

        return t.prototype.defaults = {boxClass: "wow", animateClass: "animated", offset: 0, mobile: !0, live: !0, callback: null, scrollContainer: null}, t.prototype.init = function () {
            var t;
            return this.element = window.document.documentElement, "interactive" === (t = document.readyState) || "complete" === t ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
        }, t.prototype.start = function () {
            var o, t, e, n;
            if (this.stopped = !1, this.boxes = function () {
                var t, e, n, i;
                for (n = this.element.querySelectorAll("." + this.config.boxClass), i = [], t = 0, e = n.length; e > t; t++) o = n[t], i.push(o);
                return i
            }.call(this), this.all = function () {
                var t, e, n, i;
                for (n = this.boxes, i = [], t = 0, e = n.length; e > t; t++) o = n[t], i.push(o);
                return i
            }.call(this), this.boxes.length) if (this.disabled()) this.resetStyle(); else for (n = this.boxes, t = 0, e = n.length; e > t; t++) o = n[t], this.applyStyle(o, !0);
            return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new i(function (s) {
                return function (t) {
                    var e, n, o, r, i;
                    for (i = [], e = 0, n = t.length; n > e; e++) r = t[e], i.push(function () {
                        var t, e, n, i;
                        for (n = r.addedNodes || [], i = [], t = 0, e = n.length; e > t; t++) o = n[t], i.push(this.doSync(o));
                        return i
                    }.call(s));
                    return i
                }
            }(this)).observe(document.body, {childList: !0, subtree: !0}) : void 0
        }, t.prototype.stop = function () {
            return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
        }, t.prototype.sync = function (t) {
            return i.notSupported ? this.doSync(this.element) : void 0
        }, t.prototype.doSync = function (t) {
            var e, n, i, o, r;
            if (null == t && (t = this.element), 1 === t.nodeType) {
                for (t = t.parentNode || t, o = t.querySelectorAll("." + this.config.boxClass), r = [], n = 0, i = o.length; i > n; n++) e = o[n], s.call(this.all, e) < 0 ? (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), r.push(this.scrolled = !0)) : r.push(void 0);
                return r
            }
        }, t.prototype.show = function (t) {
            return this.applyStyle(t), t.className = t.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(t), this.util().emitEvent(t, this.wowEvent), this.util().addEvent(t, "animationend", this.resetAnimation), this.util().addEvent(t, "oanimationend", this.resetAnimation), this.util().addEvent(t, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(t, "MSAnimationEnd", this.resetAnimation), t
        }, t.prototype.applyStyle = function (e, n) {
            var i, o, r;
            return o = e.getAttribute("data-wow-duration"), i = e.getAttribute("data-wow-delay"), r = e.getAttribute("data-wow-iteration"), this.animate(function (t) {
                return function () {
                    return t.customStyle(e, n, o, i, r)
                }
            }(this))
        }, t.prototype.animate = function () {
            return "requestAnimationFrame" in window ? function (t) {
                return window.requestAnimationFrame(t)
            } : function (t) {
                return t()
            }
        }(), t.prototype.resetStyle = function () {
            var t, e, n, i, o;
            for (i = this.boxes, o = [], e = 0, n = i.length; n > e; e++) t = i[e], o.push(t.style.visibility = "visible");
            return o
        }, t.prototype.resetAnimation = function (t) {
            var e;
            return t.type.toLowerCase().indexOf("animationend") >= 0 ? (e = t.target || t.srcElement, e.className = e.className.replace(this.config.animateClass, "").trim()) : void 0
        }, t.prototype.customStyle = function (t, e, n, i, o) {
            return e && this.cacheAnimationName(t), t.style.visibility = e ? "hidden" : "visible", n && this.vendorSet(t.style, {animationDuration: n}), i && this.vendorSet(t.style, {animationDelay: i}), o && this.vendorSet(t.style, {animationIterationCount: o}), this.vendorSet(t.style, {animationName: e ? "none" : this.cachedAnimationName(t)}), t
        }, t.prototype.vendors = ["moz", "webkit"], t.prototype.vendorSet = function (o, t) {
            var r, e, s, l;
            e = [];
            for (r in t) s = t[r], o["" + r] = s, e.push(function () {
                var t, e, n, i;
                for (n = this.vendors, i = [], t = 0, e = n.length; e > t; t++) l = n[t], i.push(o["" + l + r.charAt(0).toUpperCase() + r.substr(1)] = s);
                return i
            }.call(this));
            return e
        }, t.prototype.vendorCSS = function (t, e) {
            var n, i, o, r, s, l;
            for (s = a(t), r = s.getPropertyCSSValue(e), o = this.vendors, n = 0, i = o.length; i > n; n++) l = o[n], r = r || s.getPropertyCSSValue("-" + l + "-" + e);
            return r
        }, t.prototype.animationName = function (e) {
            var n;
            try {
                n = this.vendorCSS(e, "animation-name").cssText
            } catch (t) {
                n = a(e).getPropertyValue("animation-name")
            }
            return "none" === n ? "" : n
        }, t.prototype.cacheAnimationName = function (t) {
            return this.animationNameCache.set(t, this.animationName(t))
        }, t.prototype.cachedAnimationName = function (t) {
            return this.animationNameCache.get(t)
        }, t.prototype.scrollHandler = function () {
            return this.scrolled = !0
        }, t.prototype.scrollCallback = function () {
            var o;
            return !this.scrolled || (this.scrolled = !1, this.boxes = function () {
                var t, e, n, i;
                for (n = this.boxes, i = [], t = 0, e = n.length; e > t; t++) o = n[t], o && (this.isVisible(o) ? this.show(o) : i.push(o));
                return i
            }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
        }, t.prototype.offsetTop = function (t) {
            for (var e; void 0 === t.offsetTop;) t = t.parentNode;
            for (e = t.offsetTop; t = t.offsetParent;) e += t.offsetTop;
            return e
        }, t.prototype.isVisible = function (t) {
            var e, n, i, o, r;
            return n = t.getAttribute("data-wow-offset") || this.config.offset, r = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, o = r + Math.min(this.element.clientHeight, this.util().innerHeight()) - n, i = this.offsetTop(t), e = i + t.clientHeight, o >= i && e >= r
        }, t.prototype.util = function () {
            return null != this._util ? this._util : this._util = new e
        }, t.prototype.disabled = function () {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }, t
    }()
}).call(this);
/* Ammina JS file original /bitrix/templates/avtoshkola/js/jquery.maskedinput.min.js */
(function (y) {
    function e() {
        var e = document.createElement("input"), t = "onpaste";
        return e.setAttribute(t, ""), "function" == typeof e[t] ? "paste" : "input"
    }

    var r, x = e() + ".mask", t = navigator.userAgent, R = /iphone/i.test(t), S = /android/i.test(t);
    y.mask = {definitions: {9: "[0-9]", a: "[A-Za-z]", "*": "[A-Za-z0-9]"}, dataName: "rawMaskFn", placeholder: "_"}, y.fn.extend({
        caret: function (e, t) {
            var n;
            if (0 !== this.length && !this.is(":hidden")) return "number" == typeof e ? (t = "number" == typeof t ? t : e, this.each(function () {
                this.setSelectionRange ? this.setSelectionRange(e, t) : this.createTextRange && (n = this.createTextRange(), n.collapse(!0), n.moveEnd("character", t), n.moveStart("character", e), n.select())
            })) : (this[0].setSelectionRange ? (e = this[0].selectionStart, t = this[0].selectionEnd) : document.selection && document.selection.createRange && (n = document.selection.createRange(), e = 0 - n.duplicate().moveStart("character", -1e5), t = e + n.text.length), {
                begin: e,
                end: t
            })
        }, unmask: function () {
            return this.trigger("unmask")
        }, mask: function (n, p) {
            var e, a, g, v, k, b;
            return !n && this.length > 0 ? (e = y(this[0]), e.data(y.mask.dataName)()) : (p = y.extend({
                placeholder: y.mask.placeholder,
                completed: null
            }, p), a = y.mask.definitions, g = [], v = b = n.length, k = null, y.each(n.split(""), function (e, t) {
                "?" == t ? (b--, v = e) : a[t] ? (g.push(RegExp(a[t])), null === k && (k = g.length - 1)) : g.push(null)
            }), this.trigger("unmask").each(function () {
                function o(e) {
                    for (; b > ++e && !g[e];) ;
                    return e
                }

                function i(e) {
                    for (; --e >= 0 && !g[e];) ;
                    return e
                }

                function c(e, t) {
                    var n, a;
                    if (!(0 > e)) {
                        for (n = e, a = o(t); b > n; n++) if (g[n]) {
                            if (!(b > a && g[n].test(d[a]))) break;
                            d[n] = d[a], d[a] = p.placeholder, a = o(a)
                        }
                        u(), h.caret(Math.max(k, e))
                    }
                }

                function l(e) {
                    var t, n, a, r;
                    for (t = e, n = p.placeholder; b > t; t++) if (g[t]) {
                        if (a = o(t), r = d[t], d[t] = n, !(b > a && g[a].test(r))) break;
                        n = r
                    }
                }

                function e(e) {
                    var t, n, a, r = e.which;
                    8 === r || 46 === r || R && 127 === r ? (t = h.caret(), n = t.begin, a = t.end, 0 === a - n && (n = 46 !== r ? i(n) : a = o(n - 1), a = 46 === r ? o(a) : a), s(n, a), c(n, a - 1), e.preventDefault()) : 27 == r && (h.val(m), h.caret(0, f()), e.preventDefault())
                }

                function t(e) {
                    var t, n, a, r = e.which, i = h.caret();
                    e.ctrlKey || e.altKey || e.metaKey || 32 > r || r && (0 !== i.end - i.begin && (s(i.begin, i.end), c(i.begin, i.end - 1)), t = o(i.begin - 1), b > t && (n = String.fromCharCode(r), g[t].test(n) && (l(t), d[t] = n, u(), a = o(t), S ? setTimeout(y.proxy(y.fn.caret, h, a), 0) : h.caret(a), p.completed && a >= b && p.completed.call(h))), e.preventDefault())
                }

                function s(e, t) {
                    var n;
                    for (n = e; t > n && b > n; n++) g[n] && (d[n] = p.placeholder)
                }

                function u() {
                    h.val(d.join(""))
                }

                function f(e) {
                    var t, n, a = h.val(), r = -1;
                    for (t = 0, pos = 0; b > t; t++) if (g[t]) {
                        for (d[t] = p.placeholder; pos++ < a.length;) if (n = a.charAt(pos - 1), g[t].test(n)) {
                            d[t] = n, r = t;
                            break
                        }
                        if (pos > a.length) break
                    } else d[t] === a.charAt(pos) && t !== v && (pos++, r = t);
                    return e ? u() : v > r + 1 ? (h.val(""), s(0, b)) : (u(), h.val(h.val().substring(0, r + 1))), v ? t : k
                }

                var h = y(this), d = y.map(n.split(""), function (e) {
                    return "?" != e ? a[e] ? p.placeholder : e : void 0
                }), m = h.val();
                h.data(y.mask.dataName, function () {
                    return y.map(d, function (e, t) {
                        return g[t] && e != p.placeholder ? e : null
                    }).join("")
                }), h.attr("readonly") || h.one("unmask", function () {
                    h.unbind(".mask").removeData(y.mask.dataName)
                }).bind("focus.mask", function () {
                    clearTimeout(r);
                    var e;
                    m = h.val(), e = f(), r = setTimeout(function () {
                        u(), e == n.length ? h.caret(0, e) : h.caret(e)
                    }, 10)
                }).bind("blur.mask", function () {
                    f(), h.val() != m && h.change()
                }).bind("keydown.mask", e).bind("keypress.mask", t).bind(x, function () {
                    setTimeout(function () {
                        var e = f(!0);
                        h.caret(e), p.completed && e == h.val().length && p.completed.call(h)
                    }, 0)
                }), f()
            }))
        }
    })
})(jQuery);
/* Ammina JS file original /bitrix/templates/avtoshkola/js/jquery.fancybox.min.js */
!function (c, s, g, t) {
    "use strict";

    function n(t, e) {
        var n, o, i, a = [], s = 0;
        t && t.isDefaultPrevented() || (t.preventDefault(), e = e || {}, t && t.data && (e = u(t.data.options, e)), n = e.$target || g(t.currentTarget).trigger("blur"), (i = g.fancybox.getInstance()) && i.$trigger && i.$trigger.is(n) || (e.selector ? a = g(e.selector) : (o = n.attr("data-fancybox") || "", o ? (a = t.data ? t.data.items : [], a = a.length ? a.filter('[data-fancybox="' + o + '"]') : g('[data-fancybox="' + o + '"]')) : a = [n]), s = g(a).index(n), s < 0 && (s = 0), i = g.fancybox.open(a, e, s), i.$trigger = n))
    }

    if (c.console = c.console || {
        info: function (t) {
        }
    }, g) {
        if (g.fn.fancybox) return void console.info("fancyBox already initialized");
        var e = {
            closeExisting: !1,
            loop: !1,
            gutter: 50,
            keyboard: !0,
            preventCaptionOverlap: !0,
            arrows: !0,
            infobar: !0,
            smallBtn: "auto",
            toolbar: "auto",
            buttons: ["zoom", "slideShow", "thumbs", "close"],
            idleTime: 3,
            protect: !1,
            modal: !1,
            image: {preload: !1},
            ajax: {settings: {data: {fancybox: !0}}},
            iframe: {
                tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
                preload: !0,
                css: {},
                attr: {scrolling: "auto"}
            },
            video: {
                tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
                format: "",
                autoStart: !0
            },
            defaultType: "image",
            animationEffect: "zoom",
            animationDuration: 366,
            zoomOpacity: "auto",
            transitionEffect: "fade",
            transitionDuration: 366,
            slideClass: "",
            baseClass: "",
            baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
            spinnerTpl: '<div class="fancybox-loading"></div>',
            errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
            btnTpl: {
                download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
                zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
                close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
                arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
                arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
                smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'
            },
            parentEl: "body",
            hideScrollbar: !0,
            autoFocus: !0,
            backFocus: !0,
            trapFocus: !0,
            fullScreen: {autoStart: !1},
            touch: {vertical: !0, momentum: !0},
            hash: null,
            media: {},
            slideShow: {autoStart: !1, speed: 3e3},
            thumbs: {autoStart: !1, hideOnClose: !0, parentEl: ".fancybox-container", axis: "y"},
            wheel: "auto",
            onInit: g.noop,
            beforeLoad: g.noop,
            afterLoad: g.noop,
            beforeShow: g.noop,
            afterShow: g.noop,
            beforeClose: g.noop,
            afterClose: g.noop,
            onActivate: g.noop,
            onDeactivate: g.noop,
            clickContent: function (t, e) {
                return "image" === t.type && "zoom"
            },
            clickSlide: "close",
            clickOutside: "close",
            dblclickContent: !1,
            dblclickSlide: !1,
            dblclickOutside: !1,
            mobile: {
                preventCaptionOverlap: !1, idleTime: !1, clickContent: function (t, e) {
                    return "image" === t.type && "toggleControls"
                }, clickSlide: function (t, e) {
                    return "image" === t.type ? "toggleControls" : "close"
                }, dblclickContent: function (t, e) {
                    return "image" === t.type && "zoom"
                }, dblclickSlide: function (t, e) {
                    return "image" === t.type && "zoom"
                }
            },
            lang: "en",
            i18n: {
                en: {
                    CLOSE: "Close",
                    NEXT: "Next",
                    PREV: "Previous",
                    ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                    PLAY_START: "Start slideshow",
                    PLAY_STOP: "Pause slideshow",
                    FULL_SCREEN: "Full screen",
                    THUMBS: "Thumbnails",
                    DOWNLOAD: "Download",
                    SHARE: "Share",
                    ZOOM: "Zoom"
                },
                de: {
                    CLOSE: "Schlie&szlig;en",
                    NEXT: "Weiter",
                    PREV: "Zur&uuml;ck",
                    ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
                    PLAY_START: "Diaschau starten",
                    PLAY_STOP: "Diaschau beenden",
                    FULL_SCREEN: "Vollbild",
                    THUMBS: "Vorschaubilder",
                    DOWNLOAD: "Herunterladen",
                    SHARE: "Teilen",
                    ZOOM: "Vergr&ouml;&szlig;ern"
                }
            }
        }, a = g(c), r = g(s), i = 0, o = function (t) {
            return t && t.hasOwnProperty && t instanceof g
        }, f = function () {
            return c.requestAnimationFrame || c.webkitRequestAnimationFrame || c.mozRequestAnimationFrame || c.oRequestAnimationFrame || function (t) {
                return c.setTimeout(t, 1e3 / 60)
            }
        }(), l = function () {
            return c.cancelAnimationFrame || c.webkitCancelAnimationFrame || c.mozCancelAnimationFrame || c.oCancelAnimationFrame || function (t) {
                c.clearTimeout(t)
            }
        }(), d = function () {
            var t, e = s.createElement("fakeelement"), n = {transition: "transitionend", OTransition: "oTransitionEnd", MozTransition: "transitionend", WebkitTransition: "webkitTransitionEnd"};
            for (t in n) if (void 0 !== e.style[t]) return n[t];
            return "transitionend"
        }(), p = function (t) {
            return t && t.length && t[0].offsetHeight
        }, u = function (t, e) {
            var n = g.extend(!0, {}, t, e);
            return g.each(e, function (t, e) {
                g.isArray(e) && (n[t] = e)
            }), n
        }, h = function (t) {
            var e, n;
            return !(!t || t.ownerDocument !== s) && (g(".fancybox-container").css("pointer-events", "none"), e = {
                x: t.getBoundingClientRect().left + t.offsetWidth / 2,
                y: t.getBoundingClientRect().top + t.offsetHeight / 2
            }, n = s.elementFromPoint(e.x, e.y) === t, g(".fancybox-container").css("pointer-events", ""), n)
        }, b = function (t, e, n) {
            var o = this;
            o.opts = u({index: n}, g.fancybox.defaults), g.isPlainObject(e) && (o.opts = u(o.opts, e)), g.fancybox.isMobile && (o.opts = u(o.opts, o.opts.mobile)), o.id = o.opts.id || ++i, o.currIndex = parseInt(o.opts.index, 10) || 0, o.prevIndex = null, o.prevPos = null, o.currPos = 0, o.firstRun = !0, o.group = [], o.slides = {}, o.addContent(t), o.group.length && o.init()
        };
        g.extend(b.prototype, {
            init: function () {
                var e, n, o = this, t = o.group[o.currIndex], i = t.opts;
                i.closeExisting && g.fancybox.close(!0), g("body").addClass("fancybox-active"), !g.fancybox.getInstance() && !1 !== i.hideScrollbar && !g.fancybox.isMobile && s.body.scrollHeight > c.innerHeight && (g("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (c.innerWidth - s.documentElement.clientWidth) + "px;}</style>"), g("body").addClass("compensate-for-scrollbar")), n = "", g.each(i.buttons, function (t, e) {
                    n += i.btnTpl[e] || ""
                }), e = g(o.translate(o, i.baseTpl.replace("{{buttons}}", n).replace("{{arrows}}", i.btnTpl.arrowLeft + i.btnTpl.arrowRight))).attr("id", "fancybox-container-" + o.id).addClass(i.baseClass).data("FancyBox", o).appendTo(i.parentEl), o.$refs = {container: e}, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function (t) {
                    o.$refs[t] = e.find(".fancybox-" + t)
                }), o.trigger("onInit"), o.activate(), o.jumpTo(o.currIndex)
            }, translate: function (t, e) {
                var n = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;
                return e.replace(/\{\{(\w+)\}\}/g, function (t, e) {
                    return void 0 === n[e] ? t : n[e]
                })
            }, addContent: function (t) {
                var e, l = this, n = g.makeArray(t);
                g.each(n, function (t, e) {
                    var n, o, i, a, s, r = {}, c = {};
                    g.isPlainObject(e) ? (r = e, c = e.opts || e) : "object" === g.type(e) && g(e).length ? (n = g(e), c = n.data() || {}, c = g.extend(!0, {}, c, c.options), c.$orig = n, r.src = l.opts.src || c.src || n.attr("href"), r.type || r.src || (r.type = "inline", r.src = e)) : r = {
                        type: "html",
                        src: e + ""
                    }, r.opts = g.extend(!0, {}, l.opts, c), g.isArray(c.buttons) && (r.opts.buttons = c.buttons), g.fancybox.isMobile && r.opts.mobile && (r.opts = u(r.opts, r.opts.mobile)), o = r.type || r.opts.type, a = r.src || "", !o && a && ((i = a.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (o = "video", r.opts.video.format || (r.opts.video.format = "video/" + ("ogv" === i[1] ? "ogg" : i[1]))) : a.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? o = "image" : a.match(/\.(pdf)((\?|#).*)?$/i) ? (o = "iframe", r = g.extend(!0, r, {
                        contentType: "pdf",
                        opts: {iframe: {preload: !1}}
                    })) : "#" === a.charAt(0) && (o = "inline")), o ? r.type = o : l.trigger("objectNeedsType", r), r.contentType || (r.contentType = g.inArray(r.type, ["html", "inline", "ajax"]) > -1 ? "html" : r.type), r.index = l.group.length, "auto" == r.opts.smallBtn && (r.opts.smallBtn = g.inArray(r.type, ["html", "inline", "ajax"]) > -1), "auto" === r.opts.toolbar && (r.opts.toolbar = !r.opts.smallBtn), r.$thumb = r.opts.$thumb || null, r.opts.$trigger && r.index === l.opts.index && (r.$thumb = r.opts.$trigger.find("img:first"), r.$thumb.length && (r.opts.$orig = r.opts.$trigger)), r.$thumb && r.$thumb.length || !r.opts.$orig || (r.$thumb = r.opts.$orig.find("img:first")), r.$thumb && !r.$thumb.length && (r.$thumb = null), r.thumb = r.opts.thumb || (r.$thumb ? r.$thumb[0].src : null), "function" === g.type(r.opts.caption) && (r.opts.caption = r.opts.caption.apply(e, [l, r])), "function" === g.type(l.opts.caption) && (r.opts.caption = l.opts.caption.apply(e, [l, r])), r.opts.caption instanceof g || (r.opts.caption = void 0 === r.opts.caption ? "" : r.opts.caption + ""), "ajax" === r.type && (s = a.split(/\s+/, 2), s.length > 1 && (r.src = s.shift(), r.opts.filter = s.shift())), r.opts.modal && (r.opts = g.extend(!0, r.opts, {
                        trapFocus: !0,
                        infobar: 0,
                        toolbar: 0,
                        smallBtn: 0,
                        keyboard: 0,
                        slideShow: 0,
                        fullScreen: 0,
                        thumbs: 0,
                        touch: 0,
                        clickContent: !1,
                        clickSlide: !1,
                        clickOutside: !1,
                        dblclickContent: !1,
                        dblclickSlide: !1,
                        dblclickOutside: !1
                    })), l.group.push(r)
                }), Object.keys(l.slides).length && (l.updateControls(), (e = l.Thumbs) && e.isActive && (e.create(), e.focus()))
            }, addEvents: function () {
                var i = this;
                i.removeEvents(), i.$refs.container.on("click.fb-close", "[data-fancybox-close]", function (t) {
                    t.stopPropagation(), t.preventDefault(), i.close(t)
                }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function (t) {
                    t.stopPropagation(), t.preventDefault(), i.previous()
                }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function (t) {
                    t.stopPropagation(), t.preventDefault(), i.next()
                }).on("click.fb", "[data-fancybox-zoom]", function (t) {
                    i[i.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
                }), a.on("orientationchange.fb resize.fb", function (t) {
                    t && t.originalEvent && "resize" === t.originalEvent.type ? (i.requestId && l(i.requestId), i.requestId = f(function () {
                        i.update(t)
                    })) : (i.current && "iframe" === i.current.type && i.$refs.stage.hide(), setTimeout(function () {
                        i.$refs.stage.show(), i.update(t)
                    }, g.fancybox.isMobile ? 600 : 250))
                }), r.on("keydown.fb", function (t) {
                    var e = g.fancybox ? g.fancybox.getInstance() : null, n = e.current, o = t.keyCode || t.which;
                    if (9 == o) return void (n.opts.trapFocus && i.focus(t));
                    if (!(!n.opts.keyboard || t.ctrlKey || t.altKey || t.shiftKey || g(t.target).is("input,textarea,video,audio,select"))) return 8 === o || 27 === o ? (t.preventDefault(), void i.close(t)) : 37 === o || 38 === o ? (t.preventDefault(), void i.previous()) : 39 === o || 40 === o ? (t.preventDefault(), void i.next()) : void i.trigger("afterKeydown", t, o)
                }), i.group[i.currIndex].opts.idleTime && (i.idleSecondsCounter = 0, r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function (t) {
                    i.idleSecondsCounter = 0, i.isIdle && i.showControls(), i.isIdle = !1
                }), i.idleInterval = c.setInterval(function () {
                    ++i.idleSecondsCounter >= i.group[i.currIndex].opts.idleTime && !i.isDragging && (i.isIdle = !0, i.idleSecondsCounter = 0, i.hideControls())
                }, 1e3))
            }, removeEvents: function () {
                var t = this;
                a.off("orientationchange.fb resize.fb"), r.off("keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), t.idleInterval && (c.clearInterval(t.idleInterval), t.idleInterval = null)
            }, previous: function (t) {
                return this.jumpTo(this.currPos - 1, t)
            }, next: function (t) {
                return this.jumpTo(this.currPos + 1, t)
            }, jumpTo: function (t, o) {
                var e, n, i, a, s, r, c, l, d, u = this, f = u.group.length;
                if (!(u.isDragging || u.isClosing || u.isAnimating && u.firstRun)) {
                    if (t = parseInt(t, 10), !(i = u.current ? u.current.opts.loop : u.opts.loop) && (t < 0 || t >= f)) return !1;
                    if (e = u.firstRun = !Object.keys(u.slides).length, s = u.current, u.prevIndex = u.currIndex, u.prevPos = u.currPos, a = u.createSlide(t), f > 1 && ((i || a.index < f - 1) && u.createSlide(t + 1), (i || a.index > 0) && u.createSlide(t - 1)), u.current = a, u.currIndex = a.index, u.currPos = a.pos, u.trigger("beforeShow", e), u.updateControls(), a.forcedDuration = void 0, g.isNumeric(o) ? a.forcedDuration = o : o = a.opts[e ? "animationDuration" : "transitionDuration"], o = parseInt(o, 10), n = u.isMoved(a), a.$slide.addClass("fancybox-slide--current"), e) return a.opts.animationEffect && o && u.$refs.container.css("transition-duration", o + "ms"), u.$refs.container.addClass("fancybox-is-open").trigger("focus"), u.loadSlide(a), void u.preload("image");
                    r = g.fancybox.getTranslate(s.$slide), c = g.fancybox.getTranslate(u.$refs.stage), g.each(u.slides, function (t, e) {
                        g.fancybox.stop(e.$slide, !0)
                    }), s.pos !== a.pos && (s.isComplete = !1), s.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"), n ? (d = r.left - (s.pos * r.width + s.pos * s.opts.gutter), g.each(u.slides, function (t, e) {
                        e.$slide.removeClass("fancybox-animated").removeClass(function (t, e) {
                            return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                        });
                        var n = e.pos * r.width + e.pos * e.opts.gutter;
                        g.fancybox.setTranslate(e.$slide, {
                            top: 0,
                            left: n - c.left + d
                        }), e.pos !== a.pos && e.$slide.addClass("fancybox-slide--" + (e.pos > a.pos ? "next" : "previous")), p(e.$slide), g.fancybox.animate(e.$slide, {
                            top: 0,
                            left: (e.pos - a.pos) * r.width + (e.pos - a.pos) * e.opts.gutter
                        }, o, function () {
                            e.$slide.css({transform: "", opacity: ""}).removeClass("fancybox-slide--next fancybox-slide--previous"), e.pos === u.currPos && u.complete()
                        })
                    })) : o && a.opts.transitionEffect && (l = "fancybox-animated fancybox-fx-" + a.opts.transitionEffect, s.$slide.addClass("fancybox-slide--" + (s.pos > a.pos ? "next" : "previous")), g.fancybox.animate(s.$slide, l, o, function () {
                        s.$slide.removeClass(l).removeClass("fancybox-slide--next fancybox-slide--previous")
                    }, !1)), a.isLoaded ? u.revealContent(a) : u.loadSlide(a), u.preload("image")
                }
            }, createSlide: function (t) {
                var e, n, o = this;
                return n = t % o.group.length, n = n < 0 ? o.group.length + n : n, !o.slides[t] && o.group[n] && (e = g('<div class="fancybox-slide"></div>').appendTo(o.$refs.stage), o.slides[t] = g.extend(!0, {}, o.group[n], {
                    pos: t,
                    $slide: e,
                    isLoaded: !1
                }), o.updateSlide(o.slides[t])), o.slides[t]
            }, scaleToActual: function (t, e, n) {
                var o, i, a, s, r, c = this, l = c.current, d = l.$content, u = g.fancybox.getTranslate(l.$slide).width, f = g.fancybox.getTranslate(l.$slide).height, p = l.width, h = l.height;
                c.isAnimating || c.isMoved() || !d || "image" != l.type || !l.isLoaded || l.hasError || (c.isAnimating = !0, g.fancybox.stop(d), t = void 0 === t ? .5 * u : t, e = void 0 === e ? .5 * f : e, o = g.fancybox.getTranslate(d), o.top -= g.fancybox.getTranslate(l.$slide).top, o.left -= g.fancybox.getTranslate(l.$slide).left, s = p / o.width, r = h / o.height, i = .5 * u - .5 * p, a = .5 * f - .5 * h, p > u && (i = o.left * s - (t * s - t), i > 0 && (i = 0), i < u - p && (i = u - p)), h > f && (a = o.top * r - (e * r - e), a > 0 && (a = 0), a < f - h && (a = f - h)), c.updateCursor(p, h), g.fancybox.animate(d, {
                    top: a,
                    left: i,
                    scaleX: s,
                    scaleY: r
                }, n || 366, function () {
                    c.isAnimating = !1
                }), c.SlideShow && c.SlideShow.isActive && c.SlideShow.stop())
            }, scaleToFit: function (t) {
                var e, n = this, o = n.current, i = o.$content;
                n.isAnimating || n.isMoved() || !i || "image" != o.type || !o.isLoaded || o.hasError || (n.isAnimating = !0, g.fancybox.stop(i), e = n.getFitPos(o), n.updateCursor(e.width, e.height), g.fancybox.animate(i, {
                    top: e.top,
                    left: e.left,
                    scaleX: e.width / i.width(),
                    scaleY: e.height / i.height()
                }, t || 366, function () {
                    n.isAnimating = !1
                }))
            }, getFitPos: function (t) {
                var e, n, o, i, a = this, s = t.$content, r = t.$slide, c = t.width || t.opts.width, l = t.height || t.opts.height, d = {};
                return !!(t.isLoaded && s && s.length) && (e = g.fancybox.getTranslate(a.$refs.stage).width, n = g.fancybox.getTranslate(a.$refs.stage).height, e -= parseFloat(r.css("paddingLeft")) + parseFloat(r.css("paddingRight")) + parseFloat(s.css("marginLeft")) + parseFloat(s.css("marginRight")), n -= parseFloat(r.css("paddingTop")) + parseFloat(r.css("paddingBottom")) + parseFloat(s.css("marginTop")) + parseFloat(s.css("marginBottom")), c && l || (c = e, l = n), o = Math.min(1, e / c, n / l), c *= o, l *= o, c > e - .5 && (c = e), l > n - .5 && (l = n), "image" === t.type ? (d.top = Math.floor(.5 * (n - l)) + parseFloat(r.css("paddingTop")), d.left = Math.floor(.5 * (e - c)) + parseFloat(r.css("paddingLeft"))) : "video" === t.contentType && (i = t.opts.width && t.opts.height ? c / l : t.opts.ratio || 16 / 9, l > c / i ? l = c / i : c > l * i && (c = l * i)), d.width = c, d.height = l, d)
            }, update: function (n) {
                var o = this;
                g.each(o.slides, function (t, e) {
                    o.updateSlide(e, n)
                })
            }, updateSlide: function (t, e) {
                var n = this, o = t && t.$content, i = t.width || t.opts.width, a = t.height || t.opts.height, s = t.$slide;
                n.adjustCaption(t), o && (i || a || "video" === t.contentType) && !t.hasError && (g.fancybox.stop(o), g.fancybox.setTranslate(o, n.getFitPos(t)), t.pos === n.currPos && (n.isAnimating = !1, n.updateCursor())), n.adjustLayout(t), s.length && (s.trigger("refresh"), t.pos === n.currPos && n.$refs.toolbar.add(n.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", s.get(0).scrollHeight > s.get(0).clientHeight)), n.trigger("onUpdate", t, e)
            }, centerSlide: function (t) {
                var e = this, n = e.current, o = n.$slide;
                !e.isClosing && n && (o.siblings().css({transform: "", opacity: ""}), o.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"), g.fancybox.animate(o, {
                    top: 0,
                    left: 0,
                    opacity: 1
                }, void 0 === t ? 0 : t, function () {
                    o.css({transform: "", opacity: ""}), n.isComplete || e.complete()
                }, !1))
            }, isMoved: function (t) {
                var e, n, o = t || this.current;
                return !!o && (n = g.fancybox.getTranslate(this.$refs.stage), e = g.fancybox.getTranslate(o.$slide), !o.$slide.hasClass("fancybox-animated") && (Math.abs(e.top - n.top) > .5 || Math.abs(e.left - n.left) > .5))
            }, updateCursor: function (t, e) {
                var n, o, i = this, a = i.current, s = i.$refs.container;
                a && !i.isClosing && i.Guestures && (s.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"), n = i.canPan(t, e), o = !!n || i.isZoomable(), s.toggleClass("fancybox-is-zoomable", o), g("[data-fancybox-zoom]").prop("disabled", !o), n ? s.addClass("fancybox-can-pan") : o && ("zoom" === a.opts.clickContent || g.isFunction(a.opts.clickContent) && "zoom" == a.opts.clickContent(a)) ? s.addClass("fancybox-can-zoomIn") : a.opts.touch && (a.opts.touch.vertical || i.group.length > 1) && "video" !== a.contentType && s.addClass("fancybox-can-swipe"))
            }, isZoomable: function () {
                var t, e = this, n = e.current;
                if (n && !e.isClosing && "image" === n.type && !n.hasError) {
                    if (!n.isLoaded) return !0;
                    if ((t = e.getFitPos(n)) && (n.width > t.width || n.height > t.height)) return !0
                }
                return !1
            }, isScaledDown: function (t, e) {
                var n = this, o = !1, i = n.current, a = i.$content;
                return void 0 !== t && void 0 !== e ? o = t < i.width && e < i.height : a && (o = g.fancybox.getTranslate(a), o = o.width < i.width && o.height < i.height), o
            }, canPan: function (t, e) {
                var n = this, o = n.current, i = null, a = !1;
                return "image" === o.type && (o.isComplete || t && e) && !o.hasError && (a = n.getFitPos(o), void 0 !== t && void 0 !== e ? i = {
                    width: t,
                    height: e
                } : o.isComplete && (i = g.fancybox.getTranslate(o.$content)), i && a && (a = Math.abs(i.width - a.width) > 1.5 || Math.abs(i.height - a.height) > 1.5)), a
            }, loadSlide: function (n) {
                var t, e, o, i = this;
                if (!n.isLoading && !n.isLoaded) {
                    if (n.isLoading = !0, !1 === i.trigger("beforeLoad", n)) return n.isLoading = !1, !1;
                    switch (t = n.type, e = n.$slide, e.off("refresh").trigger("onReset").addClass(n.opts.slideClass), t) {
                        case"image":
                            i.setImage(n);
                            break;
                        case"iframe":
                            i.setIframe(n);
                            break;
                        case"html":
                            i.setContent(n, n.src || n.content);
                            break;
                        case"video":
                            i.setContent(n, n.opts.video.tpl.replace(/\{\{src\}\}/gi, n.src).replace("{{format}}", n.opts.videoFormat || n.opts.video.format || "").replace("{{poster}}", n.thumb || ""));
                            break;
                        case"inline":
                            g(n.src).length ? i.setContent(n, g(n.src)) : i.setError(n);
                            break;
                        case"ajax":
                            i.showLoading(n), o = g.ajax(g.extend({}, n.opts.ajax.settings, {
                                url: n.src, success: function (t, e) {
                                    "success" === e && i.setContent(n, t)
                                }, error: function (t, e) {
                                    t && "abort" !== e && i.setError(n)
                                }
                            })), e.one("onReset", function () {
                                o.abort()
                            });
                            break;
                        default:
                            i.setError(n)
                    }
                    return !0
                }
            }, setImage: function (e) {
                var t, n = this;
                setTimeout(function () {
                    var t = e.$image;
                    n.isClosing || !e.isLoading || t && t.length && t[0].complete || e.hasError || n.showLoading(e)
                }, 50), n.checkSrcset(e), e.$content = g('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(e.$slide.addClass("fancybox-slide--image")), !1 !== e.opts.preload && e.opts.width && e.opts.height && e.thumb && (e.width = e.opts.width, e.height = e.opts.height, t = s.createElement("img"), t.onerror = function () {
                    g(this).remove(), e.$ghost = null
                }, t.onload = function () {
                    n.afterLoad(e)
                }, e.$ghost = g(t).addClass("fancybox-image").appendTo(e.$content).attr("src", e.thumb)), n.setBigImage(e)
            }, checkSrcset: function (t) {
                var e, n, o, i, a = t.opts.srcset || t.opts.image.srcset;
                if (a) {
                    o = c.devicePixelRatio || 1, i = c.innerWidth * o, n = a.split(",").map(function (t) {
                        var o = {};
                        return t.trim().split(/\s+/).forEach(function (t, e) {
                            var n = parseInt(t.substring(0, t.length - 1), 10);
                            if (0 === e) return o.url = t;
                            n && (o.value = n, o.postfix = t[t.length - 1])
                        }), o
                    }), n.sort(function (t, e) {
                        return t.value - e.value
                    });
                    for (var s = 0; s < n.length; s++) {
                        var r = n[s];
                        if ("w" === r.postfix && r.value >= i || "x" === r.postfix && r.value >= o) {
                            e = r;
                            break
                        }
                    }
                    !e && n.length && (e = n[n.length - 1]), e && (t.src = e.url, t.width && t.height && "w" == e.postfix && (t.height = t.width / t.height * e.value, t.width = e.value), t.opts.srcset = a)
                }
            }, setBigImage: function (e) {
                var n = this, t = s.createElement("img"), o = g(t);
                e.$image = o.one("error", function () {
                    n.setError(e)
                }).one("load", function () {
                    var t;
                    e.$ghost || (n.resolveImageSlideSize(e, this.naturalWidth, this.naturalHeight), n.afterLoad(e)), n.isClosing || (e.opts.srcset && (t = e.opts.sizes, t && "auto" !== t || (t = (e.width / e.height > 1 && a.width() / a.height() > 1 ? "100" : Math.round(e.width / e.height * 100)) + "vw"), o.attr("sizes", t).attr("srcset", e.opts.srcset)), e.$ghost && setTimeout(function () {
                        e.$ghost && !n.isClosing && e.$ghost.hide()
                    }, Math.min(300, Math.max(1e3, e.height / 1600))), n.hideLoading(e))
                }).addClass("fancybox-image").attr("src", e.src).appendTo(e.$content), (t.complete || "complete" == t.readyState) && o.naturalWidth && o.naturalHeight ? o.trigger("load") : t.error && o.trigger("error")
            }, resolveImageSlideSize: function (t, e, n) {
                var o = parseInt(t.opts.width, 10), i = parseInt(t.opts.height, 10);
                t.width = e, t.height = n, o > 0 && (t.width = o, t.height = Math.floor(o * n / e)), i > 0 && (t.width = Math.floor(i * e / n), t.height = i)
            }, setIframe: function (a) {
                var s, e = this, r = a.opts.iframe, c = a.$slide;
                a.$content = g('<div class="fancybox-content' + (r.preload ? " fancybox-is-hidden" : "") + '"></div>').css(r.css).appendTo(c), c.addClass("fancybox-slide--" + a.contentType), a.$iframe = s = g(r.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(r.attr).appendTo(a.$content), r.preload ? (e.showLoading(a), s.on("load.fb error.fb", function (t) {
                    this.isReady = 1, a.$slide.trigger("refresh"), e.afterLoad(a)
                }), c.on("refresh.fb", function () {
                    var t, e, n = a.$content, o = r.css.width, i = r.css.height;
                    if (1 === s[0].isReady) {
                        try {
                            t = s.contents(), e = t.find("body")
                        } catch (t) {
                        }
                        e && e.length && e.children().length && (c.css("overflow", "visible"), n.css({
                            width: "100%",
                            "max-width": "100%",
                            height: "9999px"
                        }), void 0 === o && (o = Math.ceil(Math.max(e[0].clientWidth, e.outerWidth(!0)))), n.css("width", o || "").css("max-width", ""), void 0 === i && (i = Math.ceil(Math.max(e[0].clientHeight, e.outerHeight(!0)))), n.css("height", i || ""), c.css("overflow", "auto")), n.removeClass("fancybox-is-hidden")
                    }
                })) : e.afterLoad(a), s.attr("src", a.src), c.one("onReset", function () {
                    try {
                        g(this).find("iframe").hide().unbind().attr("src", "//about:blank")
                    } catch (t) {
                    }
                    g(this).off("refresh.fb").empty(), a.isLoaded = !1, a.isRevealed = !1
                })
            }, setContent: function (t, e) {
                var n = this;
                n.isClosing || (n.hideLoading(t), t.$content && g.fancybox.stop(t.$content), t.$slide.empty(), o(e) && e.parent().length ? ((e.hasClass("fancybox-content") || e.parent().hasClass("fancybox-content")) && e.parents(".fancybox-slide").trigger("onReset"), t.$placeholder = g("<div>").hide().insertAfter(e), e.css("display", "inline-block")) : t.hasError || ("string" === g.type(e) && (e = g("<div>").append(g.trim(e)).contents()), t.opts.filter && (e = g("<div>").html(e).find(t.opts.filter))), t.$slide.one("onReset", function () {
                    g(this).find("video,audio").trigger("pause"), t.$placeholder && (t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(), t.$placeholder = null), t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError || (g(this).empty(), t.isLoaded = !1, t.isRevealed = !1)
                }), g(e).appendTo(t.$slide), g(e).is("video,audio") && (g(e).addClass("fancybox-video"), g(e).wrap("<div></div>"), t.contentType = "video", t.opts.width = t.opts.width || g(e).attr("width"), t.opts.height = t.opts.height || g(e).attr("height")), t.$content = t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(), t.$content.siblings().hide(), t.$content.length || (t.$content = t.$slide.wrapInner("<div></div>").children().first()), t.$content.addClass("fancybox-content"), t.$slide.addClass("fancybox-slide--" + t.contentType), n.afterLoad(t))
            }, setError: function (t) {
                t.hasError = !0, t.$slide.trigger("onReset").removeClass("fancybox-slide--" + t.contentType).addClass("fancybox-slide--error"), t.contentType = "html", this.setContent(t, this.translate(t, t.opts.errorTpl)), t.pos === this.currPos && (this.isAnimating = !1)
            }, showLoading: function (t) {
                var e = this;
                (t = t || e.current) && !t.$spinner && (t.$spinner = g(e.translate(e, e.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"))
            }, hideLoading: function (t) {
                var e = this;
                (t = t || e.current) && t.$spinner && (t.$spinner.stop().remove(), delete t.$spinner)
            }, afterLoad: function (t) {
                var e = this;
                e.isClosing || (t.isLoading = !1, t.isLoaded = !0, e.trigger("afterLoad", t), e.hideLoading(t), !t.opts.smallBtn || t.$smallBtn && t.$smallBtn.length || (t.$smallBtn = g(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content)), t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function (t) {
                    return 2 == t.button && t.preventDefault(), !0
                }), "image" === t.type && g('<div class="fancybox-spaceball"></div>').appendTo(t.$content)), e.adjustCaption(t), e.adjustLayout(t), t.pos === e.currPos && e.updateCursor(), e.revealContent(t))
            }, adjustCaption: function (t) {
                var e, n = this, o = t || n.current, i = o.opts.caption, a = o.opts.preventCaptionOverlap, s = n.$refs.caption, r = !1;
                s.toggleClass("fancybox-caption--separate", a), a && i && i.length && (o.pos !== n.currPos ? (e = s.clone().appendTo(s.parent()), e.children().eq(0).empty().html(i), r = e.outerHeight(!0), e.empty().remove()) : n.$caption && (r = n.$caption.outerHeight(!0)), o.$slide.css("padding-bottom", r || ""))
            }, adjustLayout: function (t) {
                var e, n, o, i, a = this, s = t || a.current;
                s.isLoaded && !0 !== s.opts.disableLayoutFix && (s.$content.css("margin-bottom", ""), s.$content.outerHeight() > s.$slide.height() + .5 && (o = s.$slide[0].style["padding-bottom"], i = s.$slide.css("padding-bottom"), parseFloat(i) > 0 && (e = s.$slide[0].scrollHeight, s.$slide.css("padding-bottom", 0), Math.abs(e - s.$slide[0].scrollHeight) < 1 && (n = i), s.$slide.css("padding-bottom", o))), s.$content.css("margin-bottom", n))
            }, revealContent: function (t) {
                var e, n, o, i, a = this, s = t.$slide, r = !1, c = !1, l = a.isMoved(t), d = t.isRevealed;
                return t.isRevealed = !0, e = t.opts[a.firstRun ? "animationEffect" : "transitionEffect"], o = t.opts[a.firstRun ? "animationDuration" : "transitionDuration"], o = parseInt(void 0 === t.forcedDuration ? o : t.forcedDuration, 10), !l && t.pos === a.currPos && o || (e = !1), "zoom" === e && (t.pos === a.currPos && o && "image" === t.type && !t.hasError && (c = a.getThumbPos(t)) ? r = a.getFitPos(t) : e = "fade"), "zoom" === e ? (a.isAnimating = !0, r.scaleX = r.width / c.width, r.scaleY = r.height / c.height, i = t.opts.zoomOpacity, "auto" == i && (i = Math.abs(t.width / t.height - c.width / c.height) > .1), i && (c.opacity = .1, r.opacity = 1), g.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), c), p(t.$content), void g.fancybox.animate(t.$content, r, o, function () {
                    a.isAnimating = !1, a.complete()
                })) : (a.updateSlide(t), e ? (g.fancybox.stop(s), n = "fancybox-slide--" + (t.pos >= a.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + e, s.addClass(n).removeClass("fancybox-slide--current"), t.$content.removeClass("fancybox-is-hidden"), p(s), "image" !== t.type && t.$content.hide().show(0), void g.fancybox.animate(s, "fancybox-slide--current", o, function () {
                    s.removeClass(n).css({transform: "", opacity: ""}), t.pos === a.currPos && a.complete()
                }, !0)) : (t.$content.removeClass("fancybox-is-hidden"), d || !l || "image" !== t.type || t.hasError || t.$content.hide().fadeIn("fast"), void (t.pos === a.currPos && a.complete())))
            }, getThumbPos: function (t) {
                var e, n, o, i, a, s = !1, r = t.$thumb;
                return !(!r || !h(r[0])) && (e = g.fancybox.getTranslate(r), n = parseFloat(r.css("border-top-width") || 0), o = parseFloat(r.css("border-right-width") || 0), i = parseFloat(r.css("border-bottom-width") || 0), a = parseFloat(r.css("border-left-width") || 0), s = {
                    top: e.top + n,
                    left: e.left + a,
                    width: e.width - o - a,
                    height: e.height - n - i,
                    scaleX: 1,
                    scaleY: 1
                }, e.width > 0 && e.height > 0 && s)
            }, complete: function () {
                var t, n = this, e = n.current, o = {};
                !n.isMoved() && e.isLoaded && (e.isComplete || (e.isComplete = !0, e.$slide.siblings().trigger("onReset"), n.preload("inline"), p(e.$slide), e.$slide.addClass("fancybox-slide--complete"), g.each(n.slides, function (t, e) {
                    e.pos >= n.currPos - 1 && e.pos <= n.currPos + 1 ? o[e.pos] = e : e && (g.fancybox.stop(e.$slide), e.$slide.off().remove())
                }), n.slides = o), n.isAnimating = !1, n.updateCursor(), n.trigger("afterShow"), e.opts.video.autoStart && e.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", function () {
                    Document.exitFullscreen ? Document.exitFullscreen() : this.webkitExitFullscreen && this.webkitExitFullscreen(), n.next()
                }), e.opts.autoFocus && "html" === e.contentType && (t = e.$content.find("input[autofocus]:enabled:visible:first"), t.length ? t.trigger("focus") : n.focus(null, !0)), e.$slide.scrollTop(0).scrollLeft(0))
            }, preload: function (t) {
                var e, n, o = this;
                o.group.length < 2 || (n = o.slides[o.currPos + 1], e = o.slides[o.currPos - 1], e && e.type === t && o.loadSlide(e), n && n.type === t && o.loadSlide(n))
            }, focus: function (t, e) {
                var n, o, i = this,
                    a = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'].join(",");
                i.isClosing || (n = !t && i.current && i.current.isComplete ? i.current.$slide.find("*:visible" + (e ? ":not(.fancybox-close-small)" : "")) : i.$refs.container.find("*:visible"), n = n.filter(a).filter(function () {
                    return "hidden" !== g(this).css("visibility") && !g(this).hasClass("disabled")
                }), n.length ? (o = n.index(s.activeElement), t && t.shiftKey ? (o < 0 || 0 == o) && (t.preventDefault(), n.eq(n.length - 1).trigger("focus")) : (o < 0 || o == n.length - 1) && (t && t.preventDefault(), n.eq(0).trigger("focus"))) : i.$refs.container.trigger("focus"))
            }, activate: function () {
                var e = this;
                g(".fancybox-container").each(function () {
                    var t = g(this).data("FancyBox");
                    t && t.id !== e.id && !t.isClosing && (t.trigger("onDeactivate"), t.removeEvents(), t.isVisible = !1)
                }), e.isVisible = !0, (e.current || e.isIdle) && (e.update(), e.updateControls()), e.trigger("onActivate"), e.addEvents()
            }, close: function (t, e) {
                var n, o, i, a, s, r, c, l = this, d = l.current, u = function () {
                    l.cleanUp(t)
                };
                return !l.isClosing && (l.isClosing = !0, !1 === l.trigger("beforeClose", t) ? (l.isClosing = !1, f(function () {
                    l.update()
                }), !1) : (l.removeEvents(), i = d.$content, n = d.opts.animationEffect, o = g.isNumeric(e) ? e : n ? d.opts.animationDuration : 0, d.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), !0 !== t ? g.fancybox.stop(d.$slide) : n = !1, d.$slide.siblings().trigger("onReset").remove(), o && l.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", o + "ms"), l.hideLoading(d), l.hideControls(!0), l.updateCursor(), "zoom" !== n || i && o && "image" === d.type && !l.isMoved() && !d.hasError && (c = l.getThumbPos(d)) || (n = "fade"), "zoom" === n ? (g.fancybox.stop(i), a = g.fancybox.getTranslate(i), r = {
                    top: a.top,
                    left: a.left,
                    scaleX: a.width / c.width,
                    scaleY: a.height / c.height,
                    width: c.width,
                    height: c.height
                }, s = d.opts.zoomOpacity, "auto" == s && (s = Math.abs(d.width / d.height - c.width / c.height) > .1), s && (c.opacity = 0), g.fancybox.setTranslate(i, r), p(i), g.fancybox.animate(i, c, o, u), !0) : (n && o ? g.fancybox.animate(d.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + n, o, u) : !0 === t ? setTimeout(u, o) : u(), !0)))
            }, cleanUp: function (t) {
                var e, n, o, i = this, a = i.current.opts.$orig;
                i.current.$slide.trigger("onReset"), i.$refs.container.empty().remove(), i.trigger("afterClose", t), i.current.opts.backFocus && (a && a.length && a.is(":visible") || (a = i.$trigger), a && a.length && (n = c.scrollX, o = c.scrollY, a.trigger("focus"), g("html, body").scrollTop(o).scrollLeft(n))), i.current = null, e = g.fancybox.getInstance(), e ? e.activate() : (g("body").removeClass("fancybox-active compensate-for-scrollbar"), g("#fancybox-style-noscroll").remove())
            }, trigger: function (t, e) {
                var n, o = Array.prototype.slice.call(arguments, 1), i = this, a = e && e.opts ? e : i.current;
                if (a ? o.unshift(a) : a = i, o.unshift(i), g.isFunction(a.opts[t]) && (n = a.opts[t].apply(a, o)), !1 === n) return n;
                "afterClose" !== t && i.$refs ? i.$refs.container.trigger(t + ".fb", o) : r.trigger(t + ".fb", o)
            }, updateControls: function () {
                var t = this, e = t.current, n = e.index, o = t.$refs.container, i = t.$refs.caption, a = e.opts.caption;
                e.$slide.trigger("refresh"), a && a.length ? (t.$caption = i, i.children().eq(0).html(a)) : t.$caption = null, t.hasHiddenControls || t.isIdle || t.showControls(), o.find("[data-fancybox-count]").html(t.group.length), o.find("[data-fancybox-index]").html(n + 1), o.find("[data-fancybox-prev]").prop("disabled", !e.opts.loop && n <= 0), o.find("[data-fancybox-next]").prop("disabled", !e.opts.loop && n >= t.group.length - 1), "image" === e.type ? o.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", e.opts.image.src || e.src).show() : e.opts.toolbar && o.find("[data-fancybox-download],[data-fancybox-zoom]").hide(), g(s.activeElement).is(":hidden,[disabled]") && t.$refs.container.trigger("focus")
            }, hideControls: function (t) {
                var e = this, n = ["infobar", "toolbar", "nav"];
                !t && e.current.opts.preventCaptionOverlap || n.push("caption"), this.$refs.container.removeClass(n.map(function (t) {
                    return "fancybox-show-" + t
                }).join(" ")), this.hasHiddenControls = !0
            }, showControls: function () {
                var t = this, e = t.current ? t.current.opts : t.opts, n = t.$refs.container;
                t.hasHiddenControls = !1, t.idleSecondsCounter = 0, n.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && t.group.length > 1)).toggleClass("fancybox-show-caption", !!t.$caption).toggleClass("fancybox-show-nav", !!(e.arrows && t.group.length > 1)).toggleClass("fancybox-is-modal", !!e.modal)
            }, toggleControls: function () {
                this.hasHiddenControls ? this.showControls() : this.hideControls()
            }
        }), g.fancybox = {
            version: "3.5.7", defaults: e, getInstance: function (t) {
                var e = g('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"), n = Array.prototype.slice.call(arguments, 1);
                return e instanceof b && ("string" === g.type(t) ? e[t].apply(e, n) : "function" === g.type(t) && t.apply(e, n), e)
            }, open: function (t, e, n) {
                return new b(t, e, n)
            }, close: function (t) {
                var e = this.getInstance();
                e && (e.close(), !0 === t && this.close(t))
            }, destroy: function () {
                this.close(!0), r.add("body").off("click.fb-start", "**")
            }, isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), use3d: function () {
                var t = s.createElement("div");
                return c.getComputedStyle && c.getComputedStyle(t) && c.getComputedStyle(t).getPropertyValue("transform") && !(s.documentMode && s.documentMode < 11)
            }(), getTranslate: function (t) {
                var e;
                return !(!t || !t.length) && (e = t[0].getBoundingClientRect(), {top: e.top || 0, left: e.left || 0, width: e.width, height: e.height, opacity: parseFloat(t.css("opacity"))})
            }, setTranslate: function (t, e) {
                var n = "", o = {};
                if (t && e) return void 0 === e.left && void 0 === e.top || (n = (void 0 === e.left ? t.position().left : e.left) + "px, " + (void 0 === e.top ? t.position().top : e.top) + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), void 0 !== e.scaleX && void 0 !== e.scaleY ? n += " scale(" + e.scaleX + ", " + e.scaleY + ")" : void 0 !== e.scaleX && (n += " scaleX(" + e.scaleX + ")"), n.length && (o.transform = n), void 0 !== e.opacity && (o.opacity = e.opacity), void 0 !== e.width && (o.width = e.width), void 0 !== e.height && (o.height = e.height), t.css(o)
            }, animate: function (e, n, o, i, a) {
                var s, r = this;
                g.isFunction(o) && (i = o, o = null), r.stop(e), s = r.getTranslate(e), e.on(d, function (t) {
                    (!t || !t.originalEvent || e.is(t.originalEvent.target) && "z-index" != t.originalEvent.propertyName) && (r.stop(e), g.isNumeric(o) && e.css("transition-duration", ""), g.isPlainObject(n) ? void 0 !== n.scaleX && void 0 !== n.scaleY && r.setTranslate(e, {
                        top: n.top,
                        left: n.left,
                        width: s.width * n.scaleX,
                        height: s.height * n.scaleY,
                        scaleX: 1,
                        scaleY: 1
                    }) : !0 !== a && e.removeClass(n), g.isFunction(i) && i(t))
                }), g.isNumeric(o) && e.css("transition-duration", o + "ms"), g.isPlainObject(n) ? (void 0 !== n.scaleX && void 0 !== n.scaleY && (delete n.width, delete n.height, e.parent().hasClass("fancybox-slide--image") && e.parent().addClass("fancybox-is-scaling")), g.fancybox.setTranslate(e, n)) : e.addClass(n), e.data("timer", setTimeout(function () {
                    e.trigger(d)
                }, o + 33))
            }, stop: function (t, e) {
                t && t.length && (clearTimeout(t.data("timer")), e && t.trigger(d), t.off(d).css("transition-duration", ""), t.parent().removeClass("fancybox-is-scaling"))
            }
        }, g.fn.fancybox = function (t) {
            var e;
            return t = t || {}, e = t.selector || !1, e ? g("body").off("click.fb-start", e).on("click.fb-start", e, {options: t}, n) : this.off("click.fb-start").on("click.fb-start", {items: this, options: t}, n), this
        }, r.on("click.fb-start", "[data-fancybox]", n), r.on("click.fb-start", "[data-fancybox-trigger]", function (t) {
            g('[data-fancybox="' + g(this).attr("data-fancybox-trigger") + '"]').eq(g(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {$trigger: g(this)})
        }), function () {
            var e = null;
            r.on("mousedown mouseup focus blur", ".fancybox-button", function (t) {
                switch (t.type) {
                    case"mousedown":
                        e = g(this);
                        break;
                    case"mouseup":
                        e = null;
                        break;
                    case"focusin":
                        g(".fancybox-button").removeClass("fancybox-focus"), g(this).is(e) || g(this).is("[disabled]") || g(this).addClass("fancybox-focus");
                        break;
                    case"focusout":
                        g(".fancybox-button").removeClass("fancybox-focus")
                }
            })
        }()
    }
}(window, document, jQuery), function (p) {
    "use strict";
    var o = {
        youtube: {
            matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
            params: {autoplay: 1, autohide: 1, fs: 1, rel: 0, hd: 1, wmode: "transparent", enablejsapi: 1, html5: 1},
            paramPlace: 8,
            type: "iframe",
            url: "https://www.youtube-nocookie.com/embed/$4",
            thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
        },
        vimeo: {
            matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
            params: {autoplay: 1, hd: 1, show_title: 1, show_byline: 1, show_portrait: 0, fullscreen: 1},
            paramPlace: 3,
            type: "iframe",
            url: "//player.vimeo.com/video/$2"
        },
        instagram: {matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i, type: "image", url: "//$1/p/$2/media/?size=l"},
        gmap_place: {
            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i, type: "iframe", url: function (t) {
                return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12] + "").replace(/\?/, "&") + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
            }
        },
        gmap_search: {
            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i, type: "iframe", url: function (t) {
                return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
            }
        }
    }, h = function (n, t, e) {
        if (n) return e = e || "", "object" === p.type(e) && (e = p.param(e, !0)), p.each(t, function (t, e) {
            n = n.replace("$" + t, e || "")
        }), e.length && (n += (n.indexOf("?") > 0 ? "&" : "?") + e), n
    };
    p(document).on("objectNeedsType.fb", function (t, e, i) {
        var n, a, s, r, c, l, d, u = i.src || "", f = !1;
        n = p.extend(!0, {}, o, i.opts.media), p.each(n, function (t, e) {
            if (s = u.match(e.matcher)) {
                if (f = e.type, d = t, l = {}, e.paramPlace && s[e.paramPlace]) {
                    c = s[e.paramPlace], "?" == c[0] && (c = c.substring(1)), c = c.split("&");
                    for (var n = 0; n < c.length; ++n) {
                        var o = c[n].split("=", 2);
                        2 == o.length && (l[o[0]] = decodeURIComponent(o[1].replace(/\+/g, " ")))
                    }
                }
                return r = p.extend(!0, {}, e.params, i.opts[t], l), u = "function" === p.type(e.url) ? e.url.call(this, s, r, i) : h(e.url, s, r), a = "function" === p.type(e.thumb) ? e.thumb.call(this, s, r, i) : h(e.thumb, s), "youtube" === t ? u = u.replace(/&t=((\d+)m)?(\d+)s/, function (t, e, n, o) {
                    return "&start=" + ((n ? 60 * parseInt(n, 10) : 0) + parseInt(o, 10))
                }) : "vimeo" === t && (u = u.replace("&%23", "#")), !1
            }
        }), f ? (i.opts.thumb || i.opts.$thumb && i.opts.$thumb.length || (i.opts.thumb = a), "iframe" === f && (i.opts = p.extend(!0, i.opts, {iframe: {preload: !1, attr: {scrolling: "no"}}})), p.extend(i, {
            type: f,
            src: u,
            origSrc: i.src,
            contentSource: d,
            contentType: "image" === f ? "image" : "gmap_place" == d || "gmap_search" == d ? "map" : "video"
        })) : u && (i.type = i.opts.defaultType)
    });
    var i = {
        youtube: {src: "https://www.youtube.com/iframe_api", class: "YT", loading: !1, loaded: !1},
        vimeo: {src: "https://player.vimeo.com/api/player.js", class: "Vimeo", loading: !1, loaded: !1},
        load: function (t) {
            var e, n = this;
            if (this[t].loaded) return void setTimeout(function () {
                n.done(t)
            });
            this[t].loading || (this[t].loading = !0, e = document.createElement("script"), e.type = "text/javascript", e.src = this[t].src, "youtube" === t ? window.onYouTubeIframeAPIReady = function () {
                n[t].loaded = !0, n.done(t)
            } : e.onload = function () {
                n[t].loaded = !0, n.done(t)
            }, document.body.appendChild(e))
        },
        done: function (t) {
            var e, n, o;
            "youtube" === t && delete window.onYouTubeIframeAPIReady, (e = p.fancybox.getInstance()) && (n = e.current.$content.find("iframe"), "youtube" === t && void 0 !== YT && YT ? o = new YT.Player(n.attr("id"), {
                events: {
                    onStateChange: function (t) {
                        0 == t.data && e.next()
                    }
                }
            }) : "vimeo" === t && void 0 !== Vimeo && Vimeo && (o = new Vimeo.Player(n), o.on("ended", function () {
                e.next()
            })))
        }
    };
    p(document).on({
        "afterShow.fb": function (t, e, n) {
            e.group.length > 1 && ("youtube" === n.contentSource || "vimeo" === n.contentSource) && i.load(n.contentSource)
        }
    })
}(jQuery), function (y, c, x) {
    "use strict";
    var w = function () {
        return y.requestAnimationFrame || y.webkitRequestAnimationFrame || y.mozRequestAnimationFrame || y.oRequestAnimationFrame || function (t) {
            return y.setTimeout(t, 1e3 / 60)
        }
    }(), $ = function () {
        return y.cancelAnimationFrame || y.webkitCancelAnimationFrame || y.mozCancelAnimationFrame || y.oCancelAnimationFrame || function (t) {
            y.clearTimeout(t)
        }
    }(), d = function (t) {
        var e = [];
        t = t.originalEvent || t || y.e, t = t.touches && t.touches.length ? t.touches : t.changedTouches && t.changedTouches.length ? t.changedTouches : [t];
        for (var n in t) t[n].pageX ? e.push({x: t[n].pageX, y: t[n].pageY}) : t[n].clientX && e.push({x: t[n].clientX, y: t[n].clientY});
        return e
    }, S = function (t, e, n) {
        return e && t ? "x" === n ? t.x - e.x : "y" === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0
    }, l = function (t) {
        if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || x.isFunction(t.get(0).onclick) || t.data("selectable")) return !0;
        for (var e = 0, n = t[0].attributes, o = n.length; e < o; e++) if ("data-fancybox-" === n[e].nodeName.substr(0, 14)) return !0;
        return !1
    }, n = function (t) {
        var e = y.getComputedStyle(t)["overflow-y"], n = y.getComputedStyle(t)["overflow-x"], o = ("scroll" === e || "auto" === e) && t.scrollHeight > t.clientHeight,
            i = ("scroll" === n || "auto" === n) && t.scrollWidth > t.clientWidth;
        return o || i
    }, u = function (t) {
        for (var e = !1; ;) {
            if (e = n(t.get(0))) break;
            if (t = t.parent(), !t.length || t.hasClass("fancybox-stage") || t.is("body")) break
        }
        return e
    }, o = function (t) {
        var e = this;
        e.instance = t, e.$bg = t.$refs.bg, e.$stage = t.$refs.stage, e.$container = t.$refs.container, e.destroy(), e.$container.on("touchstart.fb.touch mousedown.fb.touch", x.proxy(e, "ontouchstart"))
    };
    o.prototype.destroy = function () {
        var t = this;
        t.$container.off(".fb.touch"), x(c).off(".fb.touch"), t.requestId && ($(t.requestId), t.requestId = null), t.tapped && (clearTimeout(t.tapped), t.tapped = null)
    }, o.prototype.ontouchstart = function (t) {
        var e = this, n = x(t.target), o = e.instance, i = o.current, a = i.$slide, s = i.$content, r = "touchstart" == t.type;
        if (r && e.$container.off("mousedown.fb.touch"), (!t.originalEvent || 2 != t.originalEvent.button) && a.length && n.length && !l(n) && !l(n.parent()) && (n.is("img") || !(t.originalEvent.clientX > n[0].clientWidth + n.offset().left))) {
            if (!i || o.isAnimating || i.$slide.hasClass("fancybox-animated")) return t.stopPropagation(), void t.preventDefault();
            e.realPoints = e.startPoints = d(t), e.startPoints.length && (i.touch && t.stopPropagation(), e.startEvent = t, e.canTap = !0, e.$target = n, e.$content = s, e.opts = i.opts.touch, e.isPanning = !1, e.isSwiping = !1, e.isZooming = !1, e.isScrolling = !1, e.canPan = o.canPan(), e.startTime = (new Date).getTime(), e.distanceX = e.distanceY = e.distance = 0, e.canvasWidth = Math.round(a[0].clientWidth), e.canvasHeight = Math.round(a[0].clientHeight), e.contentLastPos = null, e.contentStartPos = x.fancybox.getTranslate(e.$content) || {
                top: 0,
                left: 0
            }, e.sliderStartPos = x.fancybox.getTranslate(a), e.stagePos = x.fancybox.getTranslate(o.$refs.stage), e.sliderStartPos.top -= e.stagePos.top, e.sliderStartPos.left -= e.stagePos.left, e.contentStartPos.top -= e.stagePos.top, e.contentStartPos.left -= e.stagePos.left, x(c).off(".fb.touch").on(r ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", x.proxy(e, "ontouchend")).on(r ? "touchmove.fb.touch" : "mousemove.fb.touch", x.proxy(e, "ontouchmove")), x.fancybox.isMobile && c.addEventListener("scroll", e.onscroll, !0), ((e.opts || e.canPan) && (n.is(e.$stage) || e.$stage.find(n).length) || (n.is(".fancybox-image") && t.preventDefault(), x.fancybox.isMobile && n.parents(".fancybox-caption").length)) && (e.isScrollable = u(n) || u(n.parent()), x.fancybox.isMobile && e.isScrollable || t.preventDefault(), (1 === e.startPoints.length || i.hasError) && (e.canPan ? (x.fancybox.stop(e.$content), e.isPanning = !0) : e.isSwiping = !0, e.$container.addClass("fancybox-is-grabbing")), 2 === e.startPoints.length && "image" === i.type && (i.isLoaded || i.$ghost) && (e.canTap = !1, e.isSwiping = !1, e.isPanning = !1, e.isZooming = !0, x.fancybox.stop(e.$content), e.centerPointStartX = .5 * (e.startPoints[0].x + e.startPoints[1].x) - x(y).scrollLeft(), e.centerPointStartY = .5 * (e.startPoints[0].y + e.startPoints[1].y) - x(y).scrollTop(), e.percentageOfImageAtPinchPointX = (e.centerPointStartX - e.contentStartPos.left) / e.contentStartPos.width, e.percentageOfImageAtPinchPointY = (e.centerPointStartY - e.contentStartPos.top) / e.contentStartPos.height, e.startDistanceBetweenFingers = S(e.startPoints[0], e.startPoints[1]))))
        }
    }, o.prototype.onscroll = function (t) {
        var e = this;
        e.isScrolling = !0, c.removeEventListener("scroll", e.onscroll, !0)
    }, o.prototype.ontouchmove = function (t) {
        var e = this;
        return void 0 !== t.originalEvent.buttons && 0 === t.originalEvent.buttons ? void e.ontouchend(t) : e.isScrolling ? void (e.canTap = !1) : (e.newPoints = d(t), void ((e.opts || e.canPan) && e.newPoints.length && e.newPoints.length && (e.isSwiping && !0 === e.isSwiping || t.preventDefault(), e.distanceX = S(e.newPoints[0], e.startPoints[0], "x"), e.distanceY = S(e.newPoints[0], e.startPoints[0], "y"), e.distance = S(e.newPoints[0], e.startPoints[0]), e.distance > 0 && (e.isSwiping ? e.onSwipe(t) : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()))))
    }, o.prototype.onSwipe = function (t) {
        var e, i = this, a = i.instance, n = i.isSwiping, o = i.sliderStartPos.left || 0;
        if (!0 !== n) "x" == n && (i.distanceX > 0 && (i.instance.group.length < 2 || 0 === i.instance.current.index && !i.instance.current.opts.loop) ? o += Math.pow(i.distanceX, .8) : i.distanceX < 0 && (i.instance.group.length < 2 || i.instance.current.index === i.instance.group.length - 1 && !i.instance.current.opts.loop) ? o -= Math.pow(-i.distanceX, .8) : o += i.distanceX), i.sliderLastPos = {
            top: "x" == n ? 0 : i.sliderStartPos.top + i.distanceY,
            left: o
        }, i.requestId && ($(i.requestId), i.requestId = null), i.requestId = w(function () {
            i.sliderLastPos && (x.each(i.instance.slides, function (t, e) {
                var n = e.pos - i.instance.currPos;
                x.fancybox.setTranslate(e.$slide, {top: i.sliderLastPos.top, left: i.sliderLastPos.left + n * i.canvasWidth + n * e.opts.gutter})
            }), i.$container.addClass("fancybox-is-sliding"))
        }); else if (Math.abs(i.distance) > 10) {
            if (i.canTap = !1, a.group.length < 2 && i.opts.vertical ? i.isSwiping = "y" : a.isDragging || !1 === i.opts.vertical || "auto" === i.opts.vertical && x(y).width() > 800 ? i.isSwiping = "x" : (e = Math.abs(180 * Math.atan2(i.distanceY, i.distanceX) / Math.PI), i.isSwiping = e > 45 && e < 135 ? "y" : "x"), "y" === i.isSwiping && x.fancybox.isMobile && i.isScrollable) return void (i.isScrolling = !0);
            a.isDragging = i.isSwiping, i.startPoints = i.newPoints, x.each(a.slides, function (t, e) {
                var n, o;
                x.fancybox.stop(e.$slide), n = x.fancybox.getTranslate(e.$slide), o = x.fancybox.getTranslate(a.$refs.stage), e.$slide.css({
                    transform: "",
                    opacity: "",
                    "transition-duration": ""
                }).removeClass("fancybox-animated").removeClass(function (t, e) {
                    return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                }), e.pos === a.current.pos && (i.sliderStartPos.top = n.top - o.top, i.sliderStartPos.left = n.left - o.left), x.fancybox.setTranslate(e.$slide, {top: n.top - o.top, left: n.left - o.left})
            }), a.SlideShow && a.SlideShow.isActive && a.SlideShow.stop()
        }
    }, o.prototype.onPan = function () {
        var t = this;
        if (S(t.newPoints[0], t.realPoints[0]) < (x.fancybox.isMobile ? 10 : 5)) return void (t.startPoints = t.newPoints);
        t.canTap = !1, t.contentLastPos = t.limitMovement(), t.requestId && $(t.requestId), t.requestId = w(function () {
            x.fancybox.setTranslate(t.$content, t.contentLastPos)
        })
    }, o.prototype.limitMovement = function () {
        var t, e, n, o, i, a, s = this, r = s.canvasWidth, c = s.canvasHeight, l = s.distanceX, d = s.distanceY, u = s.contentStartPos, f = u.left, p = u.top, h = u.width, g = u.height;
        return i = h > r ? f + l : f, a = p + d, t = Math.max(0, .5 * r - .5 * h), e = Math.max(0, .5 * c - .5 * g), n = Math.min(r - h, .5 * r - .5 * h), o = Math.min(c - g, .5 * c - .5 * g), l > 0 && i > t && (i = t - 1 + Math.pow(-t + f + l, .8) || 0), l < 0 && i < n && (i = n + 1 - Math.pow(n - f - l, .8) || 0), d > 0 && a > e && (a = e - 1 + Math.pow(-e + p + d, .8) || 0), d < 0 && a < o && (a = o + 1 - Math.pow(o - p - d, .8) || 0), {
            top: a,
            left: i
        }
    }, o.prototype.limitPosition = function (t, e, n, o) {
        var i = this, a = i.canvasWidth, s = i.canvasHeight;
        return n > a ? (t = t > 0 ? 0 : t, t = t < a - n ? a - n : t) : t = Math.max(0, a / 2 - n / 2), o > s ? (e = e > 0 ? 0 : e, e = e < s - o ? s - o : e) : e = Math.max(0, s / 2 - o / 2), {top: e, left: t}
    }, o.prototype.onZoom = function () {
        var t = this, e = t.contentStartPos, n = e.width, o = e.height, i = e.left, a = e.top, s = S(t.newPoints[0], t.newPoints[1]), r = s / t.startDistanceBetweenFingers, c = Math.floor(n * r), l = Math.floor(o * r),
            d = (n - c) * t.percentageOfImageAtPinchPointX, u = (o - l) * t.percentageOfImageAtPinchPointY, f = (t.newPoints[0].x + t.newPoints[1].x) / 2 - x(y).scrollLeft(),
            p = (t.newPoints[0].y + t.newPoints[1].y) / 2 - x(y).scrollTop(), h = f - t.centerPointStartX, g = p - t.centerPointStartY, b = i + (d + h), m = a + (u + g), v = {top: m, left: b, scaleX: r, scaleY: r};
        t.canTap = !1, t.newWidth = c, t.newHeight = l, t.contentLastPos = v, t.requestId && $(t.requestId), t.requestId = w(function () {
            x.fancybox.setTranslate(t.$content, t.contentLastPos)
        })
    }, o.prototype.ontouchend = function (t) {
        var e = this, n = e.isSwiping, o = e.isPanning, i = e.isZooming, a = e.isScrolling;
        if (e.endPoints = d(t), e.dMs = Math.max((new Date).getTime() - e.startTime, 1), e.$container.removeClass("fancybox-is-grabbing"), x(c).off(".fb.touch"), c.removeEventListener("scroll", e.onscroll, !0), e.requestId && ($(e.requestId), e.requestId = null), e.isSwiping = !1, e.isPanning = !1, e.isZooming = !1, e.isScrolling = !1, e.instance.isDragging = !1, e.canTap) return e.onTap(t);
        e.speed = 100, e.velocityX = e.distanceX / e.dMs * .5, e.velocityY = e.distanceY / e.dMs * .5, o ? e.endPanning() : i ? e.endZooming() : e.endSwiping(n, a)
    }, o.prototype.endSwiping = function (t, e) {
        var n = this, o = !1, i = n.instance.group.length, a = Math.abs(n.distanceX), s = "x" == t && i > 1 && (n.dMs > 130 && a > 10 || a > 50);
        n.sliderLastPos = null, "y" == t && !e && Math.abs(n.distanceY) > 50 ? (x.fancybox.animate(n.instance.current.$slide, {
            top: n.sliderStartPos.top + n.distanceY + 150 * n.velocityY,
            opacity: 0
        }, 200), o = n.instance.close(!0, 250)) : s && n.distanceX > 0 ? o = n.instance.previous(300) : s && n.distanceX < 0 && (o = n.instance.next(300)), !1 !== o || "x" != t && "y" != t || n.instance.centerSlide(200), n.$container.removeClass("fancybox-is-sliding")
    }, o.prototype.endPanning = function () {
        var t, e, n, o = this;
        o.contentLastPos && (!1 === o.opts.momentum || o.dMs > 350 ? (t = o.contentLastPos.left, e = o.contentLastPos.top) : (t = o.contentLastPos.left + 500 * o.velocityX, e = o.contentLastPos.top + 500 * o.velocityY), n = o.limitPosition(t, e, o.contentStartPos.width, o.contentStartPos.height), n.width = o.contentStartPos.width, n.height = o.contentStartPos.height, x.fancybox.animate(o.$content, n, 366))
    }, o.prototype.endZooming = function () {
        var t, e, n, o, i = this, a = i.instance.current, s = i.newWidth, r = i.newHeight;
        i.contentLastPos && (t = i.contentLastPos.left, e = i.contentLastPos.top, o = {
            top: e,
            left: t,
            width: s,
            height: r,
            scaleX: 1,
            scaleY: 1
        }, x.fancybox.setTranslate(i.$content, o), s < i.canvasWidth && r < i.canvasHeight ? i.instance.scaleToFit(150) : s > a.width || r > a.height ? i.instance.scaleToActual(i.centerPointStartX, i.centerPointStartY, 150) : (n = i.limitPosition(t, e, s, r), x.fancybox.animate(i.$content, n, 150)))
    }, o.prototype.onTap = function (n) {
        var t, o = this, e = x(n.target), i = o.instance, a = i.current, s = n && d(n) || o.startPoints, r = s[0] ? s[0].x - x(y).scrollLeft() - o.stagePos.left : 0,
            c = s[0] ? s[0].y - x(y).scrollTop() - o.stagePos.top : 0, l = function (t) {
                var e = a.opts[t];
                if (x.isFunction(e) && (e = e.apply(i, [a, n])), e) switch (e) {
                    case"close":
                        i.close(o.startEvent);
                        break;
                    case"toggleControls":
                        i.toggleControls();
                        break;
                    case"next":
                        i.next();
                        break;
                    case"nextOrClose":
                        i.group.length > 1 ? i.next() : i.close(o.startEvent);
                        break;
                    case"zoom":
                        "image" == a.type && (a.isLoaded || a.$ghost) && (i.canPan() ? i.scaleToFit() : i.isScaledDown() ? i.scaleToActual(r, c) : i.group.length < 2 && i.close(o.startEvent))
                }
            };
        if ((!n.originalEvent || 2 != n.originalEvent.button) && (e.is("img") || !(r > e[0].clientWidth + e.offset().left))) {
            if (e.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) t = "Outside"; else if (e.is(".fancybox-slide")) t = "Slide"; else {
                if (!i.current.$content || !i.current.$content.find(e).addBack().filter(e).length) return;
                t = "Content"
            }
            if (o.tapped) {
                if (clearTimeout(o.tapped), o.tapped = null, Math.abs(r - o.tapX) > 50 || Math.abs(c - o.tapY) > 50) return this;
                l("dblclick" + t)
            } else o.tapX = r, o.tapY = c, a.opts["dblclick" + t] && a.opts["dblclick" + t] !== a.opts["click" + t] ? o.tapped = setTimeout(function () {
                o.tapped = null, i.isAnimating || l("click" + t)
            }, 500) : l("click" + t);
            return this
        }
    }, x(c).on("onActivate.fb", function (t, e) {
        e && !e.Guestures && (e.Guestures = new o(e))
    }).on("beforeClose.fb", function (t, e) {
        e && e.Guestures && e.Guestures.destroy()
    })
}(window, document, jQuery), function (s, r) {
    "use strict";
    r.extend(!0, r.fancybox.defaults, {
        btnTpl: {slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'},
        slideShow: {autoStart: !1, speed: 3e3, progress: !0}
    });
    var n = function (t) {
        this.instance = t, this.init()
    };
    r.extend(n.prototype, {
        timer: null, isActive: !1, $button: null, init: function () {
            var t = this, e = t.instance, n = e.group[e.currIndex].opts.slideShow;
            t.$button = e.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
                t.toggle()
            }), e.group.length < 2 || !n ? t.$button.hide() : n.progress && (t.$progress = r('<div class="fancybox-progress"></div>').appendTo(e.$refs.inner))
        }, set: function (t) {
            var e = this, n = e.instance, o = n.current;
            o && (!0 === t || o.opts.loop || n.currIndex < n.group.length - 1) ? e.isActive && "video" !== o.contentType && (e.$progress && r.fancybox.animate(e.$progress.show(), {scaleX: 1}, o.opts.slideShow.speed), e.timer = setTimeout(function () {
                n.current.opts.loop || n.current.index != n.group.length - 1 ? n.next() : n.jumpTo(0)
            }, o.opts.slideShow.speed)) : (e.stop(), n.idleSecondsCounter = 0, n.showControls())
        }, clear: function () {
            var t = this;
            clearTimeout(t.timer), t.timer = null, t.$progress && t.$progress.removeAttr("style").hide()
        }, start: function () {
            var t = this, e = t.instance.current;
            e && (t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), t.isActive = !0, e.isComplete && t.set(!0), t.instance.trigger("onSlideShowChange", !0))
        }, stop: function () {
            var t = this, e = t.instance.current;
            t.clear(), t.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), t.isActive = !1, t.instance.trigger("onSlideShowChange", !1), t.$progress && t.$progress.removeAttr("style").hide()
        }, toggle: function () {
            var t = this;
            t.isActive ? t.stop() : t.start()
        }
    }), r(s).on({
        "onInit.fb": function (t, e) {
            e && !e.SlideShow && (e.SlideShow = new n(e))
        }, "beforeShow.fb": function (t, e, n, o) {
            var i = e && e.SlideShow;
            o ? i && n.opts.slideShow.autoStart && i.start() : i && i.isActive && i.clear()
        }, "afterShow.fb": function (t, e, n) {
            var o = e && e.SlideShow;
            o && o.isActive && o.set()
        }, "afterKeydown.fb": function (t, e, n, o, i) {
            var a = e && e.SlideShow;
            !a || !n.opts.slideShow || 80 !== i && 32 !== i || r(s.activeElement).is("button,a,input") || (o.preventDefault(), a.toggle())
        }, "beforeClose.fb onDeactivate.fb": function (t, e) {
            var n = e && e.SlideShow;
            n && n.stop()
        }
    }), r(s).on("visibilitychange", function () {
        var t = r.fancybox.getInstance(), e = t && t.SlideShow;
        e && e.isActive && (s.hidden ? e.clear() : e.set())
    })
}(document, jQuery), function (a, n) {
    "use strict";
    var o = function () {
        for (var t = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], e = {}, n = 0; n < t.length; n++) {
            var o = t[n];
            if (o && o[1] in a) {
                for (var i = 0; i < o.length; i++) e[t[0][i]] = o[i];
                return e
            }
        }
        return !1
    }();
    if (o) {
        var i = {
            request: function (t) {
                t = t || a.documentElement, t[o.requestFullscreen](t.ALLOW_KEYBOARD_INPUT)
            }, exit: function () {
                a[o.exitFullscreen]()
            }, toggle: function (t) {
                t = t || a.documentElement, this.isFullscreen() ? this.exit() : this.request(t)
            }, isFullscreen: function () {
                return Boolean(a[o.fullscreenElement])
            }, enabled: function () {
                return Boolean(a[o.fullscreenEnabled])
            }
        };
        n.extend(!0, n.fancybox.defaults, {
            btnTpl: {fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'},
            fullScreen: {autoStart: !1}
        }), n(a).on(o.fullscreenchange, function () {
            var t = i.isFullscreen(), e = n.fancybox.getInstance();
            e && (e.current && "image" === e.current.type && e.isAnimating && (e.isAnimating = !1, e.update(!0, !0, 0), e.isComplete || e.complete()), e.trigger("onFullscreenChange", t), e.$refs.container.toggleClass("fancybox-is-fullscreen", t), e.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !t).toggleClass("fancybox-button--fsexit", t))
        })
    }
    n(a).on({
        "onInit.fb": function (t, e) {
            var n;
            if (!o) return void e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();
            e && e.group[e.currIndex].opts.fullScreen ? (n = e.$refs.container, n.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (t) {
                t.stopPropagation(), t.preventDefault(), i.toggle()
            }), e.opts.fullScreen && !0 === e.opts.fullScreen.autoStart && i.request(), e.FullScreen = i) : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()
        }, "afterKeydown.fb": function (t, e, n, o, i) {
            e && e.FullScreen && 70 === i && (o.preventDefault(), e.FullScreen.toggle())
        }, "beforeClose.fb": function (t, e) {
            e && e.FullScreen && e.$refs.container.hasClass("fancybox-is-fullscreen") && i.exit()
        }
    })
}(document, jQuery), function (t, a) {
    "use strict";
    var s = "fancybox-thumbs";
    a.fancybox.defaults = a.extend(!0, {
        btnTpl: {thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'},
        thumbs: {autoStart: !1, hideOnClose: !0, parentEl: ".fancybox-container", axis: "y"}
    }, a.fancybox.defaults);
    var o = function (t) {
        this.init(t)
    };
    a.extend(o.prototype, {
        $button: null, $grid: null, $list: null, isVisible: !1, isActive: !1, init: function (t) {
            var e = this, n = t.group, o = 0;
            e.instance = t, e.opts = n[t.currIndex].opts.thumbs, t.Thumbs = e, e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]");
            for (var i = 0, a = n.length; i < a && (n[i].thumb && o++, !(o > 1)); i++) ;
            o > 1 && e.opts ? (e.$button.removeAttr("style").on("click", function () {
                e.toggle()
            }), e.isActive = !0) : e.$button.hide()
        }, create: function () {
            var n, t = this, e = t.instance, o = t.opts.parentEl, i = [];
            t.$grid || (t.$grid = a('<div class="' + s + " " + s + "-" + t.opts.axis + '"></div>').appendTo(e.$refs.container.find(o).addBack().filter(o)), t.$grid.on("click", "a", function () {
                e.jumpTo(a(this).attr("data-index"))
            })), t.$list || (t.$list = a('<div class="' + s + '__list">').appendTo(t.$grid)), a.each(e.group, function (t, e) {
                n = e.thumb, n || "image" !== e.type || (n = e.src), i.push('<a href="javascript:;" tabindex="0" data-index="' + t + '"' + (n && n.length ? ' style="background-image:url(' + n + ')"' : 'class="fancybox-thumbs-missing"') + "></a>")
            }), t.$list[0].innerHTML = i.join(""), "x" === t.opts.axis && t.$list.width(parseInt(t.$grid.css("padding-right"), 10) + e.group.length * t.$list.children().eq(0).outerWidth(!0))
        }, focus: function (t) {
            var e, n, o = this, i = o.$list, a = o.$grid;
            o.instance.current && (e = i.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + o.instance.current.index + '"]').addClass("fancybox-thumbs-active"), n = e.position(), "y" === o.opts.axis && (n.top < 0 || n.top > i.height() - e.outerHeight()) ? i.stop().animate({scrollTop: i.scrollTop() + n.top}, t) : "x" === o.opts.axis && (n.left < a.scrollLeft() || n.left > a.scrollLeft() + (a.width() - e.outerWidth())) && i.parent().stop().animate({scrollLeft: n.left}, t))
        }, update: function () {
            var t = this;
            t.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), t.isVisible ? (t.$grid || t.create(), t.instance.trigger("onThumbsShow"), t.focus(0)) : t.$grid && t.instance.trigger("onThumbsHide"), t.instance.update()
        }, hide: function () {
            this.isVisible = !1, this.update()
        }, show: function () {
            this.isVisible = !0, this.update()
        }, toggle: function () {
            this.isVisible = !this.isVisible, this.update()
        }
    }), a(t).on({
        "onInit.fb": function (t, e) {
            var n;
            e && !e.Thumbs && (n = new o(e), n.isActive && !0 === n.opts.autoStart && n.show())
        }, "beforeShow.fb": function (t, e, n, o) {
            var i = e && e.Thumbs;
            i && i.isVisible && i.focus(o ? 0 : 250)
        }, "afterKeydown.fb": function (t, e, n, o, i) {
            var a = e && e.Thumbs;
            a && a.isActive && 71 === i && (o.preventDefault(), a.toggle())
        }, "beforeClose.fb": function (t, e) {
            var n = e && e.Thumbs;
            n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide()
        }
    })
}(document, jQuery), function (t, i) {
    "use strict";

    function a(t) {
        var e = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;", "`": "&#x60;", "=": "&#x3D;"};
        return String(t).replace(/[&<>"'`=\/]/g, function (t) {
            return e[t]
        })
    }

    i.extend(!0, i.fancybox.defaults, {
        btnTpl: {share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'},
        share: {
            url: function (t, e) {
                return !t.currentHash && "inline" !== e.type && "html" !== e.type && (e.origSrc || e.src) || window.location
            },
            tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'
        }
    }), i(t).on("click", "[data-fancybox-share]", function () {
        var t, e, n = i.fancybox.getInstance(), o = n.current || null;
        o && ("function" === i.type(o.opts.share.url) && (t = o.opts.share.url.apply(o, [n, o])), e = o.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === o.type ? encodeURIComponent(o.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g, a(t)).replace(/\{\{descr\}\}/g, n.$caption ? encodeURIComponent(n.$caption.text()) : ""), i.fancybox.open({
            src: n.translate(n, e),
            type: "html",
            opts: {
                touch: !1, animationEffect: !1, afterLoad: function (t, e) {
                    n.$refs.container.one("beforeClose.fb", function () {
                        t.close(null, 0)
                    }), e.$content.find(".fancybox-share__button").click(function () {
                        return window.open(this.href, "Share", "width=550, height=450"), !1
                    })
                }, mobile: {autoFocus: !1}
            }
        }))
    })
}(document, jQuery), function (a, s, i) {
    "use strict";

    function r() {
        var t = a.location.hash.substr(1), e = t.split("-"), n = e.length > 1 && /^\+?\d+$/.test(e[e.length - 1]) ? parseInt(e.pop(-1), 10) || 1 : 1, o = e.join("-");
        return {hash: t, index: n < 1 ? 1 : n, gallery: o}
    }

    function e(t) {
        "" !== t.gallery && i("[data-fancybox='" + i.escapeSelector(t.gallery) + "']").eq(t.index - 1).focus().trigger("click.fb-start")
    }

    function c(t) {
        var e, n;
        return !!t && (e = t.current ? t.current.opts : t.opts, "" !== (n = e.hash || (e.$orig ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger") : "")) && n)
    }

    i.escapeSelector || (i.escapeSelector = function (t) {
        return (t + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function (t, e) {
            return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
        })
    }), i(function () {
        !1 !== i.fancybox.defaults.hash && (i(s).on({
            "onInit.fb": function (t, e) {
                var n, o;
                !1 !== e.group[e.currIndex].opts.hash && (n = r(), (o = c(e)) && n.gallery && o == n.gallery && (e.currIndex = n.index - 1))
            }, "beforeShow.fb": function (t, e, n, o) {
                var i;
                n && !1 !== n.opts.hash && (i = c(e)) && (e.currentHash = i + (e.group.length > 1 ? "-" + (n.index + 1) : ""), a.location.hash !== "#" + e.currentHash && (o && !e.origHash && (e.origHash = a.location.hash), e.hashTimer && clearTimeout(e.hashTimer), e.hashTimer = setTimeout(function () {
                    "replaceState" in a.history ? (a.history[o ? "pushState" : "replaceState"]({}, s.title, a.location.pathname + a.location.search + "#" + e.currentHash), o && (e.hasCreatedHistory = !0)) : a.location.hash = e.currentHash, e.hashTimer = null
                }, 300)))
            }, "beforeClose.fb": function (t, e, n) {
                n && !1 !== n.opts.hash && (clearTimeout(e.hashTimer), e.currentHash && e.hasCreatedHistory ? a.history.back() : e.currentHash && ("replaceState" in a.history ? a.history.replaceState({}, s.title, a.location.pathname + a.location.search + (e.origHash || "")) : a.location.hash = e.origHash), e.currentHash = null)
            }
        }), i(a).on("hashchange.fb", function () {
            var t = r(), o = null;
            i.each(i(".fancybox-container").get().reverse(), function (t, e) {
                var n = i(e).data("FancyBox");
                if (n && n.currentHash) return o = n, !1
            }), o ? o.currentHash === t.gallery + "-" + t.index || 1 === t.index && o.currentHash == t.gallery || (o.currentHash = null, o.close()) : "" !== t.gallery && e(t)
        }), setTimeout(function () {
            i.fancybox.getInstance() || e(r())
        }, 50))
    })
}(window, document, jQuery), function (t, e) {
    "use strict";
    var i = (new Date).getTime();
    e(t).on({
        "onInit.fb": function (t, o, e) {
            o.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function (t) {
                var e = o.current, n = (new Date).getTime();
                o.group.length < 2 || !1 === e.opts.wheel || "auto" === e.opts.wheel && "image" !== e.type || (t.preventDefault(), t.stopPropagation(), e.$slide.hasClass("fancybox-animated") || (t = t.originalEvent || t, n - i < 250 || (i = n, o[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())))
            })
        }
    })
}(document, jQuery);/* Ammina JS file original /bitrix/templates/avtoshkola/js/script.js */
;/*Появляющееся скрытое меню в шапке*/
$(document).ready(function () {
    $('.driving-branches').click(function (event) {
        event.preventDefault();
        var btn = $(this);
        $('.overlay-half').fadeIn(200,
            function () {
                $('.hidden-menu').addClass('visible');
                $('html, header').width($('html, header').width());
                // $('html').css('overflow', 'hidden');
                // var myHeight = $('.hidden-menu').find('.hidden-menu-left ul').height() + 80 + "px";
                // var myHeight = $('.hidden-menu').find('.hidden-menu-left').height() + 80 + "px";
                var myHeight = $('.hidden-menu').find('.hidden-menu-left ul').height() + 100 + "px";
                console.log(myHeight);
                $('.hidden-menu').css('max-height', myHeight);
            });
    });
    $('.close-btn, .overlay-half, .modal-slide-btn').click(function () {
        $('.hidden-menu').removeClass('visible');
        $('.overlay-half').fadeOut(200);
        $('html').removeAttr('style');
    });
});

/*продолжение появляющегося меню - переключение табов*/
$(document).ready(function () {
    $(".hidden-menu-left li").hover(function () {
        $(".hidden-menu-addition").removeClass('active');
        $(".hidden-menu-left li a").removeClass('active');
        $(this).find("a").addClass("active");
        var selected_tab = $(this).find("a").attr("href");
        $(selected_tab).stop().addClass("active");
        return false;
    });
});

/*оставить заявку*/
// $(document).ready(function() {
//     $('body').on('click','.submit-application',function () {
//         event.preventDefault();
//         var btn = $(this);
//         $('.overlay').fadeIn(200,
//             function() {
//                 $('.modal-submit').addClass('active');
//                 $('html, header').width($('html, header').width());
//                 $('html').css('overflow', 'hidden');
//             });
//     });


//     $('.close-btn, .overlay, .modal-slide-btn').click(function() {
//         $('.modal-submit').removeClass('active');
//         $('.overlay').fadeOut(200);
//         $('html').removeAttr('style');
//     });
// });

/*заказать звонок*/
// $(document).ready(function() {
//     $('.footer-request-call').click(function(event) {
//         event.preventDefault();
//         var btn = $(this);
//         $('.overlay').fadeIn(200,
//             function() {
//                 $('.modal-callback').addClass('active');
//                 $('html, header').width($('html, header').width());
//                 $('html').css('overflow', 'hidden');
//             });
//     });
//     $('.close-btn, .overlay, .modal-slide-btn').click(function() {
//         $('.modal-callback').removeClass('active');
//         $('.overlay').fadeOut(200);
//         $('html').removeAttr('style');
//     });
// });

// модальные окна
function modalShow(clickElement, modalClass) {
    $('.' + clickElement).click(function (event) {
        event.preventDefault();
        var btn = $(this);
        $('.overlay').fadeIn(200,
            function () {
                $('.' + modalClass).addClass('active');
                $('html, header').width($('html, header').width());
                $('html').css('overflow', 'hidden');
            });
    });
    $('.close-btn, .overlay, .modal-slide-btn').click(function () {
        $('.' + modalClass).removeClass('active');
        $('.overlay').fadeOut(200);
        $('html').removeAttr('style');
    });
};
modalShow('footer-request-call', 'modal-callback');          /* оставить заявку */
// modalShow('submit-application', 'modal-submit');             /* заказать звонок */
// modalShow('offer-modal-link', 'modal-submit');               /* горячее предложение */
modalShow('aside-link-block__link-modal', 'modal-callback'); /* ссылка внизу страницы на телефоне */

modalShow('branch-btn-other', 'modal-car');                  /* другие филиалы, авто */
modalShow('branch-btn-other-moto', 'modal-moto');            /* другие филиалы, мото */

// горячее предложение
$('.offer-close-btn').click(function (event) {
    $('.offer-slide').fadeOut();
});

// маска для телефона
$(document).ready(function () {
    // $(".phone-mask").mask("+ 7 ( 999 ) 999 99 - 99");
    $(".phone-mask").mask("+ 7 (999)  999-99-99");
});

/*слайдер на главной верхний*/
var swiper = new Swiper('.main-swiper', {
    effect: 'fade',
    speed: 2000,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.main-swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="mainPagination ' + className + '">' + (index + 1) + '</span>';
        },
    },
    // autoHeight: true,
});


/*Селект форма на главной*/
// $('.filter-handler').click(function() {
//     $(this).next('.filter-dd').slideToggle(200);
//     $(this).toggleClass('active');
// });
// $('.filter-dd a').click(function() {
//     let val = $(this).text();
//     // следующие два пункта добавил для выделение активного пункта
//     $(this).closest('.filter-item').find('.filter-dd a').removeClass('active');
//     $(this).addClass('active');
//
//     $(this).closest('.filter-item').find('.filter-handler').text(val);
//     val = $(this).data('id');
//     $(this).closest('.filter-item').find('input').val(val);
//     console.log($(this).closest('.filter-item').find('input').val());
// });
// $('body').on('click', function(e) {
//     if ($(e.target).closest('.filter-handler').length === 0) {
//         $('.filter-dd').slideUp(200);
//         $('.filter-handler').removeClass('active');
//         updatePrice2();
//     }
// });

// мобильные отзывы
$(document).ready(function () {
    var width = $(window).width();
    var toggleList = $(".reviews-tab-select");
    if (width <= 768) {
        // $('.reviews-tabs').slideUp();
        $('.reviews-tab-select').click(function (evt) {
            $(this).toggleClass('active');
            $('.reviews-tabs').slideToggle();
            var val = $(this).text();
            $('.revews-tab-link').click(function () {
                val = $(this).text();
                $('.reviews-tab-select').text(val);
                $('.reviews-tab-select').removeClass('active');
                $('.reviews-tabs').slideUp();
            })

            $('body').on('click', function (e) {
                if ($(e.target).closest('.reviews-tab-select').length === 0) {
                    $('.reviews-tab-select').removeClass('active');
                    $('.reviews-tabs').slideUp();
                }
            });
        });
    }
});

// $('.reviews-tab-select').click(function() {
//     $('.reviews-tab-select-form').toggleClass('active');
// });

$('.sub-list-toggle').click(function () {
    $('.mobile-header-nav-list.sub-list').slideToggle();
});

$('body').on('click', function (e) {
    if ($(e.target).closest('.reviews-tab-select').length === 0) {
        $('.reviews-tab-select-form').removeClass('active');
    }
});

/*Смещение иконки поиска при фокусировки*/
$(".address-col-small-search").delegate("*", "focus blur", function (event) {
    var elem = $(this);
    setTimeout(function () {
        $(".address-col-small-search").toggleClass("active", elem.is(":focus"));
    }, 0);
});


/*Слайдер на главной отзывы*/
var swiper2 = new Swiper('.feedback-swiper', {
    effect: 'fade',
    watchSlidesVisibility: true,
    navigation: {
        nextEl: '.feedback-button-next',
        prevEl: '.feedback-button-prev',
    },
});


/*вопрос-ответ появление ответа по клику*/
$(document).ready(function () {
    $(".questions-question").click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
    });
    $(".questions-question").click(function (e) {
        e.preventDefault();
        $(this).next().slideToggle();
    });
});


/*слайдер на странице документы и лицензии*/
var swiper = new Swiper('.docs-swiper', {
    // cssMode: true,
    slidesPerView: 1.5,
    spaceBetween: 20,
    navigation: {
        nextEl: '.docs-button-next',
        prevEl: '.docs-button-prev',
    },
    // mousewheel: true,
    // keyboard: true,
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 25,
        }
    }
});


// вывод значения из range калькулятора
$(document).ready(function () {
    let inputRange = $('#amount1');
    let outputRange = $('#output');

    // вывод значения в поле вывода
    inputRange.mousemove(function () {
        // outputRange.val(inputRange.val());
        outputRange.text(inputRange.val());
    });

    // показ введённого числа на ползунке
    outputRange.change(function () {
        // inputRange.val(outputRange.val());
        inputRange.text(outputRange.val());
    });
})

// function updatePrice() {
//     var price = +$('#amount1').val() * 100 +
//         $('[name="format"]:checked').toArray().reduce((sum, n) => sum + +$(n).val(), 0) +
//         $('[name="category"]:checked').toArray().reduce((sum, n) => sum + +$(n).val(), 0) +
//         $('[name="transmission"]:checked').toArray().reduce((sum, n) => sum + +$(n).val(), 0);

// $( "#amount3" ).val("$" + price);

//     $("#value__result").html(price);
//     var oldPrice = +price * 1.7;
//     $("#value__result-old").html(oldPrice);
// }
// $('[name="format"]').change(updatePrice);
// $('[name="category"]').change(updatePrice);
// $('[name="transmission"]').change(updatePrice);
// $('#amount1').change(updatePrice);

// updatePrice();


/*калькулятор мобильная версии*/
function updatePrice2() {
    var price = +$('#amount2').val() * 100 +
        $('[name="formatMob"]').toArray().reduce((sum, n) => sum + +$(n).val(), 0) +
        $('[name="categoryMob"]').toArray().reduce((sum, n) => sum + +$(n).val(), 0) +
        $('[name="transmissionMob"]').toArray().reduce((sum, n) => sum + +$(n).val(), 0);
    // console.log(price);
    var rangeValue = +$('#amount2').val();

    $("#calc-mobile-range-val").html(rangeValue + ' ак/час');
    var oldPrice = +price * 1.7;
    $("#value__result-old-mob").html(oldPrice);
    $("#value__result-mob").html(price);
}

// $('#amount2').change(updatePrice2);

// updatePrice2();

/*слайдер на странице детской мотошколы*/
var swiper = new Swiper('.moto-swiper', {
    slidesPerView: 1.2,
    spaceBetween: 30,
    scrollbar: {
        el: '.moto-swiper-scrollbar',
        // hide: true,
    },
    navigation: {
        nextEl: '.moto-button-next',
        prevEl: '.moto-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 3.5,
            spaceBetween: 25,
        }
    }
});


/*запретить прокручивание страницы к input при клике на label for*/
$('label[for="form-vacancies-checkbox-hidden"]').on('click', function (e) {
    var target = window[this.htmlFor];
    target.checked = !target.checked;
    e.preventDefault();
});

/*переключение табов*/
$(document).ready(function () {
    $('.reviews-tabs a').click(function (e) {
        e.preventDefault();
        $('.reviews-tabs .active').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.reviews-tabs-blocks').not(tab).css({'display': 'none'});

        // удаляем у всех блоков класс active
        $('.reviews-tabs-blocks').not(tab).removeClass('active');

        // блоку с нужным id добавляем класс active
        $(tab).addClass('active');


        console.log(tab);
        $('.show-more').removeClass('active');

        //кнопке с нужным id добавляем класс active
        // $('#btn-'+ tab).addClass('active');
        $(tab + '-btn').addClass('active'); // новый вариант

        // console.log($('#btn-'+ tab)); - так возвращает пустой объект
        // console.log($(tab + '-btn')); - так возвращает кнопку

        $(tab).fadeIn(400);
    });

    // $('.reviews-tab-select').click(function () {
    //     var optionValue = $(this).val();
    //     console.log(optionValue);
    //     $('.reviews-tabs-blocks').not(optionValue).css({'display':'none'});
    //     $('.reviews-tabs-blocks').not(optionValue).removeClass('active');
    //     $(optionValue).addClass('active');
    //     $('.show-more').removeClass('active');
    //     $(optionValue + '-btn').addClass('active');
    //     $(optionValue).fadeIn(400);
    // });
});

/*слайдер на странице филиалы, верхний*/
var swiper = new Swiper('.branch-swiper', {
    // cssMode: true,
    slidesPerView: 1.2,
    spaceBetween: 20,
    navigation: {
        nextEl: '.branch-button-next',
        prevEl: '.branch-button-prev',
    },
    // mousewheel: true,
    keyboard: true,
    breakpoints: {
        768: {
            slidesPerView: 4,
            spaceBetween: 25,
        }
    }
});

/*слайдер на странице филиалы, нижний*/
var swiper = new Swiper('.info-swiper', {
    // cssMode: true,
    slidesPerView: 1.2,
    spaceBetween: 20,
    navigation: {
        nextEl: '.info-button-next',
        prevEl: '.info-button-prev',
    },
    // mousewheel: true,
    keyboard: true,
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    }
});

/*филиалы появления списка станций по клику*/
$(document).ready(function () {
    $(".district-line-title-btn").click(function (e) {
        e.preventDefault();
        if ($(this).hasClass('active')) {
            $(this).next().slideUp();
            $(this).removeClass('active');
        } else {
            $(this).next().slideDown();
            $(this).addClass('active');
        }
    });
});


/*mobile hamburger*/
$('#hamburger').click(function () {
    $(this).toggleClass('active');
    $('.header-desktop').toggleClass('active');
    $('html').toggleClass('noscroll');
    // $('header').toggleClass('hidden');
});

/*появление меню связь*/
$(document).ready(function () {
    $('.mobile-call').click(function () {
        $('.mobile-call-block').addClass('active');
        $('.mobile-hidden-blocks').addClass('active');
        $('html').addClass('noscroll');
        // $('header').addClass('hidden');
    });
    $('.call-close-btn').click(function () {
        $('.mobile-call-block').removeClass('active');
        $('.mobile-hidden-blocks').removeClass('active');
        $('html').removeClass('noscroll');
        // $('header').removeClass('hidden');
    })
});

/*открытие мобильного меню*/
$(document).ready(function () {
    $('#hamburger').click(function () {
        $(this).addClass('active');
        $('.mobile-hidden-blocks').addClass('active');
        $('html').addClass('noscroll');
        $('.mobile-menu-block').addClass('active');
    });
    $('.menu-close-btn').click(function () {
        $('.mobile-menu-block').removeClass('active');
        $('#hamburger').removeClass('active');
        $('.mobile-hidden-blocks').removeClass('active');
        $('html').removeClass('noscroll');
        // $('header').removeClass('hidden');
    })
});

/*открытие категории меню*/
$(document).ready(function () {
    $('.mobile-category').click(function () {
        $('.mobile-category-block').addClass('active');
        $('.mobile-hidden-blocks').addClass('active');
        $('html').addClass('noscroll');
    });
    $('.category-close-btn').click(function () {
        $('.mobile-category-block').removeClass('active');
        $('.mobile-hidden-blocks').removeClass('active');
        $('html').removeClass('noscroll');
    })
});

/*открытие адрес меню*/
$(document).ready(function () {
    $('.open-address-form').click(function () {
        $('.mobile-address-block').addClass('active');
        $('.mobile-hidden-blocks').addClass('active');
        $('html').addClass('noscroll');
    });
    $('.address-close-btn').click(function () {
        $('.mobile-address-block').removeClass('active');
        $('.mobile-hidden-blocks').removeClass('active');
        $('html').removeClass('noscroll');
    })

    $('.mobile-driving-branches').click(function () {
        $(this).removeClass('active');
        $('.mobile-address-block').addClass('active');
        $('.mobile-hidden-blocks').addClass('active');
        $('.mobile-menu-block').removeClass('active');
    })
});

/*Слайдер наше авто для мобильной версии*/
var autoSwiper = new Swiper('.auto-swiper', {
    // slidesPerView: 1.2,
    // spaceBetween: 20,
    slidesPerView: 1
});
var mql = window.matchMedia('all and (max-width: 768px)');
if (mql.matches) {

} else {
    // нет, размер окна более 1000px
    // autoSwiper.destroy(true, true);
}


/*Слайдер наша команда для мобильной версии*/
var teamSwiper = new Swiper('.team-swiper', {
    // slidesPerView: 1.2,
    // spaceBetween: 20,
    slidesPerView: 1
});
// if (mql.matches) {

// } else {
//     // нет, размер окна более 1000px
//     teamSwiper.destroy(true, true);
// }

// var autoSwiper = new Swiper('#cars-swiper', {
//     slidesPerView: 1,
//     // spaceBetween: 20,
// });
// if (mql.matches) {

// } else {
//     // нет, размер окна более 1000px
//     autoSwiper.destroy(true, true);
// }

// aside-bar
$(document).ready(function () {

    // !NB: El = Element

    let mainEl = $('.aside');

    // отмечаем элемент при попадании в поле зрения
    $(window).on('scroll', function () {

        mainEl.removeClass('hidden-top hidden-bottom');

        // mainEl = $('.aside-list');

        let scrollRelativeEl = $('section'); // сравниваем относительно этих элементов (section)
        let mainElHeight = mainEl.outerHeight();

        let relativeElCurrentPosition = $(this).scrollTop(); // текущая позиция относительного элемента (section)
        scrollRelativeEl.each(function () {
            let borderTop = $(this).offset().top - mainElHeight;
            let borderBottom = borderTop + $(this).outerHeight();

            if (relativeElCurrentPosition >= borderTop && relativeElCurrentPosition <= borderBottom) {
                mainEl.find('a').removeClass('active');
                mainEl.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    // плавный переход по якорям
    let asideАnchor = $('.aside-link').not('.aside-page-link');
    $(asideАnchor).on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 700);
    });

    // скрываем на футере
    // let target = $('footer');
    // let targetPos = target.offset().top;
    // let windowHeight = $(window).height();
    // let scrollToElem = targetPos - windowHeight;

    // $(window).scroll(function(){
    //   let winScrollTop = $(this).scrollTop();

    //   if((winScrollTop - scrollToElem) > 0 ) {
    //     mainEl.addClass('hidden-bottom');
    //   } else {
    //     mainEl.removeClass('hidden-bottom');
    //   }
    // });

    // скрываем на первом элементе после хедера
    // let firstEl = ($('main section:first'));        // первый элемент
    // let firstElHeight = firstEl.outerHeight(true);  // высота первого элемента

    // $(window).scroll(function () {
    //   if ($(window).scrollTop() < firstElHeight / 2) {
    //     mainEl.addClass('hidden-top');
    //   } else if ($(window).scrollTop() >= firstElHeight  / 2) {
    //     mainEl.removeClass('hidden-top');
    //   }
    // });
});

// появление нижнего блока меню
$(document).ready(function () {

    var headerTopBlock = $('.header-mobile-top'),
        headerMiddleBlock = $('.header-mobile-middle'),
        headerBottomBlock = $('.header-mobile-bottom'),
        scrollPrev = 0;

    $(window).scroll(function () {
        var scrolled = $(window).scrollTop();

        if (scrolled > 100 && scrolled > scrollPrev) {
            headerTopBlock.addClass('out');
            headerMiddleBlock.addClass('out');
            headerBottomBlock.addClass('out');
        } else {
            headerTopBlock.removeClass('out');
            headerMiddleBlock.removeClass('out');
            headerBottomBlock.removeClass('out');
        }
        ;
        scrollPrev = scrolled;
    })
});

// label с файлом
//   let inputFile = $('.vacancies-file');
//   let labelFile = $('.more-content-btn');
//   let labelTextField = labelFile.find($('.input__file-button-text'));
//   let labelVal = labelFile.find($('.input__file-button-text')).text();

//   inputFile.on('change', function (evt) {
//     let countFiles = '';
//     if (this.files && this.files.length >= 1) {
//       countFiles = this.files.length;
//     }
//     if (countFiles) {
//       labelTextField.text('Выбрано файлов: ' + countFiles);
//     }
//     else {
//       labelTextField.text(labelVal);
//     }

//     countFiles ? labelTextField.text('Выбрано файлов: ' + countFiles) : labelTextField.text(labelVal);
// });;/* Ammina JS file original /bitrix/templates/avtoshkola/js/index.js */
;$(function () {
    $(document).ready(function () {

        $('.question-btn').click(function () {
            if ($('.agree').is(':checked')) {
                $('.form-warning').css('color', 'black');
                $('.form-vacancies-checkbox').removeClass('active');
            } else {
                $('.form-warning').css('color', 'red');
                $('.form-vacancies-checkbox').addClass('active');
            }

            // console.log ($('input[name="FILIAL"]').val());

            if ($('.form-required-input').val() == '') {
                $('.form-required').css('color', 'red');
            } else {
                $('.form-required').css('color', 'black');
            }
        });

        $('.form-warning').click(function () {
            if ($('.agree').is(':checked')) {
                $('.form-warning').css('color', 'black');
                $('.form-vacancies-checkbox').removeClass('active');
            } else {
                $('.form-warning').css('color', 'red');
                $('.form-vacancies-checkbox').addClass('active');
            }
        });
    });
});

$(document).ready(function () {

    $('.hidden-menu-main-link').click(function (e) {
        e.preventDefault();
    });

    $('body').on('click', '.submit-application', function () {
        event.preventDefault();
        var btn = $(this);
        $('.overlay').fadeIn(200,
            function () {
                $('.modal-submit').addClass('active');
                $('html, header').width($('html, header').width());
                $('html').css('overflow', 'hidden');
            });
    });


    $('body').on('click', '.delit-file', function () {
        $(this).closest('.download-doc').remove();
    });


    function reset() {
        $('.reset-form').find('input').val('');
        $('.reset-form').find('textarea').val('');
    };

    function resetForm() {
        $('.reset-form').find('input').each(function () {
            $('input').val('');
        });
        $('.reset-form').find('textarea').val('');
    };


    function showMassege() {
        $('.message').addClass('active');
        setTimeout(function () {
            $('.message').removeClass('active');
        }, 3000);
    }


    function showMassegeAfterComment() {
        $('.message-comment').addClass('active');
        setTimeout(function () {
            $('.message-comment').removeClass('active');
        }, 3000);
    }


    $('.submit-vopros').click(function (event) {
        event.preventDefault();
        var btn = $(this);
        $('.overlay').fadeIn(200,
            function () {
                $('.modal-vopros').addClass('active');
                $('html, header').width($('html, header').width());
                $('html').css('overflow', 'hidden');
            });
    });
    $('.close-btn, .overlay, .modal-slide-btn').click(function () {
        $('#zayavka-modal').removeClass('active');
        $('.modal-vopros').removeClass('active');
        $('.overlay').fadeOut(200);
        $('html').removeAttr('style');
    });


    $('.filter-handler').click(function () {
        $('.filter-dd').not(this).slideUp(200); // закрываем уже открытые меню
        // $(this).next('.filter-dd').slideDown(200);

        $('.filter-handler').not(this).removeClass('active'); // удаляем у других меню .active
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $(this).next('.filter-dd').slideDown(200);
        }
    });
    $('.filter-dd a').click(function () {
        let val = $(this).text(),
            velText = $.trim(val);

        $(this).closest('.filter-item').find('.filter-dd a').removeClass('active');
        $(this).addClass('active');
        $(this).closest('.filter-item').find('.filter-handler').text(velText.substring(0, 19));
        $('.form-required').css('color', 'black');
        let value = $(this).text();
        $(this).closest('.filter-item').find('input').val(value);
    });
    $('body').on('click', function (e) {
        if ($(e.target).closest('.filter-handler').length === 0) {
            $('.filter-dd').slideUp(200);
            $('.filter-handler').removeClass('active');
        }
    });

    $('#calculatorMOB .filter-dd a').click(function () {
        var dataId = $(this).data('id');
        $(this).closest('.filter-item').find('input').val(dataId);

    });


//course selection
    $('.price-form .filter-dd a').click(function () {
        let value = $(this).data('id');
        $(this).closest('.filter-item').find('input').val(value);
    });

    $('#show-avtoshkola .filter-dd a').click(function () {
        let value = $(this).data('id');
        $(this).closest('.filter-item').find('input').val(value);
    });

    $('#show-avtoshkola-mob .filter-dd a').click(function () {
        let value = $(this).data('id');
        $(this).closest('.filter-item').find('input').val(value);
    });


    $("#metro-value-mob").change(function () {
        var metro_id = $('#metro option[value="' + $('#metro-value-mob').val() + '"]').data('id');
        $('input[name="METRO-MOB"]').val(metro_id);
    });


    //FILTR SHOW ADDRESS
    $("#metro-value").change(function () {
        var metro_id = $('#metro-search option[value="' + $('#metro-value').val() + '"]').data('id'),
            metro_text = $('#metro-search option[value="' + $('#metro-value').val() + '"]').val(),
            metro_vetka_id = parseInt($('#metro-search option[value="' + $('#metro-value').val() + '"]').attr('class'));
        console.log(metro_vetka_id);

        $('input[name="METRO"]').val(metro_id);
        $('input[name="VETKA_METRO"]').val(metro_vetka_id);
        $('#text').text(metro_text.slice(0, 19));
        $('#text-vetka-ID a').each(function () {
            var vetka_id = +$(this).data('id'),
                vetka_name = $(this).text(),
                vetka_icon = $(this).find('img').attr('src');

            if (vetka_id == metro_vetka_id) {
                $('#text-vetka').text(vetka_name);
                $('#vetka-icon').find('img').attr("src", vetka_icon);
            }
        });

        $('.filtr-vetka-METRO a').each(function () {
            $idVetkaMetro = $(this).attr("class");
            $idVetkaMetro = parseInt($idVetkaMetro);
            if ($idVetkaMetro !== metro_vetka_id) {
                $(this).css('display', 'none');
            } else {
                $(this).css('display', 'block');
            }
        });
    });

    $('#filtr-vetka .filtr-vetka-ID a').click(function () {
        let idVetka = $(this).data('id');
        $('#text').text('Выберите станцию');
        $('#metro-value').val('');
        $('.filtr-vetka-METRO a').each(function () {
            $idVetkaMetro = $(this).attr("class");

            $idVetkaMetro = parseInt($idVetkaMetro);

            if ($idVetkaMetro !== idVetka) {
                $(this).css('display', 'none');
            } else {
                $(this).css('display', 'block');
            }
        });

        var scrIcon = $(this).find('img').attr('src');
        $('#vetka-icon').find('img').attr("src", scrIcon);

    });

    $('#filtr-vetka .filtr-vetka-METRO a').click(function () {
        $('#metro-value').val('');

    });


    //FILTR SHOW PRICE
    //if categoriya A,A1,М,B1,C,CE hide "korobka avtomat"
    $('#kategoriya li').click(function () {
        var kategoriyaID = $(this).find('a').data('id');
        if ((+kategoriyaID == 42) || (+kategoriyaID == 43) || (+kategoriyaID == 44) || (+kategoriyaID == 46) || (+kategoriyaID == 47) || (+kategoriyaID == 62) || (+kategoriyaID == 49)) {
            $("#korobka a").not("." + kategoriyaID).addClass('disabled');
        } else {
            $("#korobka a").removeClass('disabled');
        }

        //if categoriya A1,М,B1,C, CE hide "oput"
        if ((+kategoriyaID == 43) || (+kategoriyaID == 44) || (+kategoriyaID == 46) || (+kategoriyaID == 47) || (+kategoriyaID == 62) || (+kategoriyaID == 49)) {
            $("#oput a").not("." + kategoriyaID).addClass('disabled');
        } else {
            $("#oput a").removeClass('disabled');
        }

    });


    $('.button-show-map').click(function () {
        if ($('div').is('#myMap')) {
            $('#tab-1').css('display', 'none');
            $('#tab-2').css('display', 'block');
        } else {
            $(this).closest('.show-map').append(
                '<div class="btn-hint">Чтоб показать автошколу на карте, выберите станцию метро и нажмите на кнопку "Найти"</div>'
            );
            setTimeout(function () {
                $('.btn-hint').remove('.btn-hint');
            }, 3200);
        }
    });


    // $('.main-slider-btn').each(function () {
    //     var attr = $(this).attr('href');
    //     if (attr == '#') {
    //         $(this).addClass('ostavit-zayavku');
    //     }
    // });

    // $('body').on('click', '.ostavit-zayavku', function (event) {
    //     event.preventDefault();
    //     var btn = $(this);
    //     $('#zayavka-modal').addClass('active');
    //     $('.overlay').fadeIn(200,
    //         function () {
    //             $('.modal-submit').addClass('active');
    //             $('html, header').width($('html, header').width());
    //             $('html').css('overflow', 'hidden');
    //         });
    // });


    $('.submit-application').click(function () {
        $('#zayavka-modal').addClass('active');
    });

    $(document).mouseup(function (e) { // событие клика по веб-документу
        var div = $(".modal-wrap"); // тут указываем ID элемента
        if ($("#zayavka-modal").hasClass('active') && !div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            $("#zayavka-modal").removeClass('active');
            // $('.modal').slideUp(300);
            $('.overlay').fadeOut(200);
            $('html').removeClass('noscroll');
            $('html').removeAttr('style');
        }
    });

    // $('.branch-btn-other').click(function () {
    //     $('.overlay').fadeIn('slow');
    //     $('html').toggleClass('noscroll');
    //     $('.modal-car').slideDown(500);
    // });

    // $('.branch-btn-other-moto').click(function () {
    //     $('.overlay').fadeIn('slow');
    //     $('html').toggleClass('noscroll');
    //     $('.modal-moto').slideDown(500);
    // });

    $('.modal .close-btn').click(function () {
        $('.overlay').fadeOut('slow');
        $('.modal').slideUp(300);
        $('html').toggleClass('noscroll');
    });

    $('.overlay').click(function () {
        $('.modal').slideUp(300);
        $('.overlay').fadeOut(200);
        $('html').removeClass('noscroll');
    });


    $().fancybox({
        selector: '.video-conteiner a:visible',
        loop: true,
        animationEffect: "zoom-in-out",
        buttons: [
            'fullScreen',
            'close'
        ],
        titleShow: true
    });

    $().fancybox({
        selector: '.docs-swiper a:visible',
        loop: true,
        animationEffect: "zoom-in-out",
        buttons: [
            'fullScreen',
            'close'
        ]
    });


// KALKULATOR
    $('.tab-btn').click(function () {
        var valueId = $(this).attr('id');
        $('.tab-item-block').removeClass('active');
        $(this).closest('.calc-select-block').find('#' + valueId + '-description').addClass('active');
    });


    function kalkulator() {
        $('.categoriya-block label').click(function () {
            var valueFor = $(this).attr('for');
            var valueCategoriya = $('input[id=' + valueFor + ']').val();
        });
    }


// FORMS
    $('#question-form').submit(function () {
        var data = $(this).serialize();

        $.ajax({
            type: 'post',
            url: '/ajax/question-form.php',
            // url: 'https://stimul-bvi.ru/ajax/magic/question-form.php',
            data: data,
            dataType: 'json',
            success: function (e) {
                console.log(e);
                console.log(true);
                reset();
                showMassege();
            },
            error: function (e) {
                console.log(e);
                console.log(false);
            }
        });
        // return false;
        reset();
        showMassege();
    });

    $('.zayavka').submit(function () {
        var data = $(this).serialize();

        $.ajax({
            type: 'post',
            url: '/ajax/form__zayavka.php',
            // url: 'https://stimul-bvi.ru/ajax/magic/form__zayavka.php',
            data: data,
            dataType: 'json',
            success: function (e) {
                console.log(e);
                console.log(true);
                reset();
                // $('.modal-submit').removeClass('active');
                $('#zayavka-modal').removeClass('active');
                showMassege();
                setTimeout(function () {
                    $('.overlay').fadeOut(200);
                    $('html').removeAttr('style');
                }, 2500);
            },
            error: function (e) {
                console.log(e);
                console.log(false);
            }
        });
        // return false;
        // reset();
        // $('.modal-submit').removeClass('active');
        // $('#zayavka-modal').removeClass('active');
        // showMassege();
        // setTimeout(function(){
        //     $('.overlay').fadeOut(200);
        //     $('html').removeAttr('style');
        // }, 2500);
    });

    $('#form_obratnyj-zvonok').submit(function () {
        var data = $(this).serialize();

        $.ajax({
            type: 'post',
            url: '/ajax/form__obratnyj-zvonok.php',
            // url: 'https://stimul-bvi.ru/ajax/magic/form__obratnyj-zvonok.php',
            data: data,
            dataType: 'json',
            success: function (e) {
                console.log(e);
                console.log(true);
                reset();
                $('.modal-callback').removeClass('active');
                showMassege();
                setTimeout(function () {
                    $('.overlay').fadeOut(200);
                    $('html').removeAttr('style');
                }, 3000);

            },
            error: function (e) {
                console.log(e);
                console.log(false);
            }
        });
        // return false;

        reset();
        $('.modal-callback').removeClass('active');
        showMassege();
        setTimeout(function () {
            $('.overlay').fadeOut(200);
            $('html').removeAttr('style');
        }, 3000);
    });


    $('#form_test-drive').submit(function () {
        var data = $(this).serialize();

        $.ajax({
            type: 'post',
            url: '/ajax/form__test-drive.php',
            // url: 'https://stimul-bvi.ru/ajax/magic/form__test-drive.php',
            data: data,
            dataType: 'json',
            success: function (e) {
                console.log(e);
                console.log(true);
                resetForm();
                showMassege();
            },
            error: function (e) {
                console.log(e);
                console.log(false);
            }
        });
        // return false;
        resetForm();
        showMassege();
    });


    $('#form_zayavka-na-obuchenie').submit(function () {
        var data = $(this).serialize();

        $.ajax({
            type: 'post',
            url: '/ajax/form__zayavka-na-obuchenie.php',
            // url: 'https://stimul-bvi.ru/ajax/magic/form__zayavka-na-obuchenie.php',
            data: data,
            dataType: 'json',
            success: function (e) {
                console.log(e);
                console.log(true);
                resetForm();
                showMassege();
            },
            error: function (e) {
                console.log(e);
                console.log(false);
            }
        });
        // return false;

        resetForm();
        showMassege();
    });


    $('#form1_zayavka-na-obuchenie').submit(function () {

        var data = $(this).serialize();

        $.ajax({
            type: 'post',
            url: '/ajax/form1__zayavka-na-obuchenie.php',
            // url: 'https://stimul-bvi.ru/ajax/magic/form1__zayavka-na-obuchenie.php',
            data: data,
            dataType: 'json',
            success: function (e) {
                console.log(e);
                console.log(true);
                resetForm();
                showMassege();
            },
            error: function (e) {
                console.log(e);
                console.log(false);
            }
        });
        // return false;

        // resetForm();
        // showMassege();
    });

    $('#form2_zayavka-na-vakansiyu').submit(function () {
        var data = $(this).serialize();

        $.ajax({
            type: 'post',
            url: '/ajax/form2__zayavka-na-vakansiyu.php',
            // url: 'https://stimul-bvi.ru/ajax/magic/form2__zayavka-na-vakansiyu.php',
            data: data,
            dataType: 'json',
            success: function (e) {
                console.log(e);
                console.log(true);
                resetForm();
                showMassege();
            },
            error: function (e) {
                console.log(e);
                console.log(false);
            }
        });
        // return false;

        // resetForm();
        // showMassege();
    });

    $('#form_zadat-vopros').submit(function () {
        var data = $(this).serialize();

        $.ajax({
            type: 'post',
            url: '/ajax/form__zadat-vopros.php',
            // url: 'https://stimul-bvi.ru/ajax/magic/form__zadat-vopros.php',
            data: data,
            dataType: 'json',
            success: function (e) {
                console.log(e);
                console.log(true);
                reset();
                $('.modal-vopros').removeClass('active');
                $('.overlay').fadeOut(200);
                $('html').removeAttr('style');
            },
            error: function (e) {
                console.log(e);
                console.log(false);
            }
        });
        // return false;

        // reset();
        // $('.modal-vopros').removeClass('active');
        // $('.overlay').fadeOut(200);
        // $('html').removeAttr('style');
    });

    $('#form__otzyv').submit(function () {
        var data = $(this).serialize();

        $.ajax({
            type: 'post',
            url: '/ajax/form__otzyv.php',
            // url: 'https://stimul-bvi.ru/ajax/magic/form__otzyv.php',
            data: data,
            dataType: 'json',
            success: function (e) {
                console.log(e);
                console.log(true);
                reset();
                showMassege();
            },
            error: function (e) {
                console.log(e);
                console.log(false);
            }
        });
        return false;
        //
        // reset();
        // showMassege();
    });


    $('#form__vizvat-menedzera').submit(function () {
        var data = $(this).serialize();

        $.ajax({
            type: 'post',
            url: '/ajax/form__vyzov-menedjera.php',
            // url: 'https://stimul-bvi.ru/ajax/magic/form__otzyv.php',
            data: data,
            dataType: 'json',
            success: function (e) {
                console.log(e);
                console.log(true);
                reset();
                showMassege();
            },
            error: function (e) {
                console.log(e);
                console.log(false);
            }
        });
        // return false;
    });


    // $('#form__vizvat-menedzera').submit(function(){
    //
    //     var data = $(this).serialize();

    // var formData = new FormData();
    //
    // jQuery.each($(this).find('.file_v_form')[0].files, function(i, file) {
    //     formData.append('file_v_form', file);
    // });

    //присоединяем остальные поля
    // formData.append('NAME', $(this).find('input.name_form').val());
    // formData.append('PHONE', $(this).find('input.tel_form').val());
    // formData.append('ADRES', $(this).find('input.adres_form').val());
    // formData.append('DATE', $(this).find('input.date_form').val());
    // formData.append('TIME', $(this).find('input.time_form').val());
    // formData.append('COMMENTS', $(this).find('input.text_form').val());


    //     $.ajax({
    //         url: '/ajax/form__vizvat-menedzera_.php',
    //         type: "post",
    //
    //         // cache: false,
    //         // contentType: false,
    //         // processData: false,
    //         data: data,
    //         dataType : "json",
    //         success: function (e) {
    //             console.log(e);
    //             console.log(true);
    //             reset();
    //             showMassege();
    //
    //         },
    //         error:function(e){
    //             console.log(e);
    //             console.log(false);
    //         }
    //     });
    //     // return false;
    //
    // });


    $('#pokazat-tceny').submit(function () {
        var data = $(this).serialize();

        $.ajax({
            type: 'post',
            url: '/ajax/pokazat-tceny.php',
            data: data,
            dataType: 'html',
            success: function (e) {
                console.log(e);
                console.log(true);
                $('.pokazat-tceny').empty();
                $('.pokazat-tceny').append(e);
            },
            error: function (e) {
                console.log(e);
                console.log(false);
            }
        });
        return false;
    });


    $('#show-avtoshkola').submit(function (e) {

        var kategoriya = $(this).find('input[name="KATEGORIYA"]').val(),
            metro = $(this).find('input[name="METRO"]').val();


        if ((kategoriya != '') & (metro != '')) {
            var data = $(this).serialize();

            $.ajax({
                type: 'post',
                url: '/ajax/show-avtoshkola.php',
                data: data,
                dataType: 'html',
                success: function (e) {
                    console.log(e);
                    console.log(true);
                    $('.conteiner-block').empty();
                    $('.conteiner-block').append(e);

                    $('.load-items').remove();

                },
                error: function (e) {
                    console.log(e);
                    console.log(false);
                }
            });
            return false;

        } else {
            e.preventDefault();
            $('.conteiner-block').append(
                '<div class="btn-hint">Выберите категорию и метро</div>'
            );
            setTimeout(function () {
                $('.btn-hint').remove('.btn-hint');
            }, 3000);

        }
    });


    $('#show-avtoshkola-mob').submit(function (e) {

        var kategoriya = $(this).find('input[name="KATEGORIYA"]').val();
        metro = $(this).find('input[name="METRO-MOB"]').val();


        if ((kategoriya != '') && (metro != '')) {
            var data = $(this).serialize();

            $.ajax({
                type: 'post',
                url: '/ajax/show-avtoshkola-mob.php',
                data: data,
                dataType: 'html',
                success: function (e) {
                    console.log(e);
                    console.log(true);
                    $('.address-cards').empty();
                    $('.address-cards').append(e);
                },
                error: function (e) {
                    console.log(e);
                    console.log(false);
                }
            });
            return false;

        } else {
            e.preventDefault();
            $('.address-cards').append(
                '<div class="btn-hint">' +
                '<span>! </span> ' +
                'Выберите категорию и метро' +
                '</div>'
            );
            setTimeout(function () {
                $('.btn-hint').remove('.btn-hint');
            }, 3000);

        }
    });

    $('#comments').submit(function () {
        var data = $(this).serialize();

        $.ajax({
            type: 'post',
            // url: 'https://stimul-bvi.ru/ajax/magic/comments.php',
            url: '/ajax/comments.php',
            data: data,
            dataType: 'json',
            success: function (e) {
                console.log(e);
                console.log(true);
                resetForm();
                showMassegeAfterComment();
            },
            error: function (e) {
                console.log(e);
                console.log(false);
            }
        });
        // return false;
        resetForm();
        showMassegeAfterComment();
    });


    new WOW().init();


})
;