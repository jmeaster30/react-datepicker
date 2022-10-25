!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(
        exports,
        require("react"),
        require("prop-types"),
        require("classnames"),
        require("date-fns/isDate"),
        require("date-fns/isValid"),
        require("date-fns/format"),
        require("date-fns/addMinutes"),
        require("date-fns/addHours"),
        require("date-fns/addDays"),
        require("date-fns/addWeeks"),
        require("date-fns/addMonths"),
        require("date-fns/addYears"),
        require("date-fns/subMinutes"),
        require("date-fns/subHours"),
        require("date-fns/subDays"),
        require("date-fns/subWeeks"),
        require("date-fns/subMonths"),
        require("date-fns/subYears"),
        require("date-fns/getSeconds"),
        require("date-fns/getMinutes"),
        require("date-fns/getHours"),
        require("date-fns/getDay"),
        require("date-fns/getDate"),
        require("date-fns/getISOWeek"),
        require("date-fns/getMonth"),
        require("date-fns/getQuarter"),
        require("date-fns/getYear"),
        require("date-fns/getTime"),
        require("date-fns/setSeconds"),
        require("date-fns/setMinutes"),
        require("date-fns/setHours"),
        require("date-fns/setMonth"),
        require("date-fns/setQuarter"),
        require("date-fns/setYear"),
        require("date-fns/min"),
        require("date-fns/max"),
        require("date-fns/differenceInCalendarDays"),
        require("date-fns/differenceInCalendarMonths"),
        require("date-fns/differenceInCalendarWeeks"),
        require("date-fns/differenceInCalendarYears"),
        require("date-fns/startOfDay"),
        require("date-fns/startOfWeek"),
        require("date-fns/startOfMonth"),
        require("date-fns/startOfQuarter"),
        require("date-fns/startOfYear"),
        require("date-fns/endOfDay"),
        require("date-fns/endOfWeek"),
        require("date-fns/endOfMonth"),
        require("date-fns/isEqual"),
        require("date-fns/isSameDay"),
        require("date-fns/isSameMonth"),
        require("date-fns/isSameYear"),
        require("date-fns/isSameQuarter"),
        require("date-fns/isAfter"),
        require("date-fns/isBefore"),
        require("date-fns/isWithinInterval"),
        require("date-fns/toDate"),
        require("date-fns/parse"),
        require("date-fns/parseISO"),
        require("react-onclickoutside"),
        require("react-dom"),
        require("react-popper"),
        require("date-fns/set")
      )
    : "function" == typeof define && define.amd
    ? define(
        [
          "exports",
          "react",
          "prop-types",
          "classnames",
          "date-fns/isDate",
          "date-fns/isValid",
          "date-fns/format",
          "date-fns/addMinutes",
          "date-fns/addHours",
          "date-fns/addDays",
          "date-fns/addWeeks",
          "date-fns/addMonths",
          "date-fns/addYears",
          "date-fns/subMinutes",
          "date-fns/subHours",
          "date-fns/subDays",
          "date-fns/subWeeks",
          "date-fns/subMonths",
          "date-fns/subYears",
          "date-fns/getSeconds",
          "date-fns/getMinutes",
          "date-fns/getHours",
          "date-fns/getDay",
          "date-fns/getDate",
          "date-fns/getISOWeek",
          "date-fns/getMonth",
          "date-fns/getQuarter",
          "date-fns/getYear",
          "date-fns/getTime",
          "date-fns/setSeconds",
          "date-fns/setMinutes",
          "date-fns/setHours",
          "date-fns/setMonth",
          "date-fns/setQuarter",
          "date-fns/setYear",
          "date-fns/min",
          "date-fns/max",
          "date-fns/differenceInCalendarDays",
          "date-fns/differenceInCalendarMonths",
          "date-fns/differenceInCalendarWeeks",
          "date-fns/differenceInCalendarYears",
          "date-fns/startOfDay",
          "date-fns/startOfWeek",
          "date-fns/startOfMonth",
          "date-fns/startOfQuarter",
          "date-fns/startOfYear",
          "date-fns/endOfDay",
          "date-fns/endOfWeek",
          "date-fns/endOfMonth",
          "date-fns/isEqual",
          "date-fns/isSameDay",
          "date-fns/isSameMonth",
          "date-fns/isSameYear",
          "date-fns/isSameQuarter",
          "date-fns/isAfter",
          "date-fns/isBefore",
          "date-fns/isWithinInterval",
          "date-fns/toDate",
          "date-fns/parse",
          "date-fns/parseISO",
          "react-onclickoutside",
          "react-dom",
          "react-popper",
          "date-fns/set",
        ],
        t
      )
    : t(
        ((e =
          "undefined" != typeof globalThis
            ? globalThis
            : e || self).DatePicker = {}),
        e.React,
        e.PropTypes,
        e.classNames,
        e.isDate,
        e.isValidDate,
        e.format,
        e.addMinutes,
        e.addHours,
        e.addDays,
        e.addWeeks,
        e.addMonths,
        e.addYears,
        null,
        null,
        e.subDays,
        e.subWeeks,
        e.subMonths,
        e.subYears,
        e.getSeconds,
        e.getMinutes,
        e.getHours,
        e.getDay,
        e.getDate,
        e.getISOWeek,
        e.getMonth,
        e.getQuarter,
        e.getYear,
        e.getTime,
        e.setSeconds,
        e.setMinutes,
        e.setHours,
        e.setMonth,
        e.setQuarter,
        e.setYear,
        e.min,
        e.max,
        e.differenceInCalendarDays,
        e.differenceInCalendarMonths,
        null,
        e.differenceInCalendarYears,
        e.startOfDay,
        e.startOfWeek,
        e.startOfMonth,
        e.startOfQuarter,
        e.startOfYear,
        e.endOfDay,
        null,
        null,
        e.dfIsEqual,
        e.dfIsSameDay,
        e.dfIsSameMonth,
        e.dfIsSameYear,
        e.dfIsSameQuarter,
        e.isAfter,
        e.isBefore,
        e.isWithinInterval,
        e.toDate,
        e.parse,
        e.parseISO,
        e.onClickOutside,
        e.ReactDOM,
        e.ReactPopper,
        e.set
      );
})(
  this,
  function (
    e,
    t,
    r,
    a,
    n,
    o,
    s,
    i,
    p,
    l,
    d,
    c,
    u,
    f,
    h,
    m,
    y,
    D,
    v,
    w,
    g,
    k,
    b,
    S,
    C,
    _,
    M,
    P,
    E,
    N,
    O,
    x,
    Y,
    I,
    T,
    L,
    R,
    F,
    A,
    q,
    W,
    B,
    K,
    H,
    j,
    Q,
    V,
    U,
    $,
    z,
    G,
    J,
    X,
    Z,
    ee,
    te,
    re,
    ae,
    ne,
    oe,
    se,
    ie,
    pe,
    le
  ) {
    "use strict";
    function de(e) {
      return e && "object" == typeof e && "default" in e ? e : { default: e };
    }
    var ce = de(t),
      ue = de(a),
      fe = de(n),
      he = de(o),
      me = de(s),
      ye = de(i),
      De = de(p),
      ve = de(l),
      we = de(d),
      ge = de(c),
      ke = de(u),
      be = de(m),
      Se = de(y),
      Ce = de(D),
      _e = de(v),
      Me = de(w),
      Pe = de(g),
      Ee = de(k),
      Ne = de(b),
      Oe = de(S),
      xe = de(C),
      Ye = de(_),
      Ie = de(M),
      Te = de(P),
      Le = de(E),
      Re = de(N),
      Fe = de(O),
      Ae = de(x),
      qe = de(Y),
      We = de(I),
      Be = de(T),
      Ke = de(L),
      He = de(R),
      je = de(F),
      Qe = de(A),
      Ve = de(W),
      Ue = de(B),
      $e = de(K),
      ze = de(H),
      Ge = de(j),
      Je = de(Q),
      Xe = de(V),
      Ze = de(z),
      et = de(G),
      tt = de(J),
      rt = de(X),
      at = de(Z),
      nt = de(ee),
      ot = de(te),
      st = de(re),
      it = de(ae),
      pt = de(ne),
      lt = de(oe),
      dt = de(se),
      ct = de(ie),
      ut = de(le);
    function ft(e, t) {
      var r = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        t &&
          (a = a.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          r.push.apply(r, a);
      }
      return r;
    }
    function ht(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? ft(Object(r), !0).forEach(function (t) {
              wt(e, t, r[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
          : ft(Object(r)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(r, t)
              );
            });
      }
      return e;
    }
    function mt(e) {
      return (mt =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    function yt(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function Dt(e, t) {
      for (var r = 0; r < t.length; r++) {
        var a = t[r];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(e, a.key, a);
      }
    }
    function vt(e, t, r) {
      return (
        t && Dt(e.prototype, t),
        r && Dt(e, r),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        e
      );
    }
    function wt(e, t, r) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = r),
        e
      );
    }
    function gt() {
      return (gt =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var a in r)
              Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
          }
          return e;
        }).apply(this, arguments);
    }
    function kt(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
      })),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t && St(e, t);
    }
    function bt(e) {
      return (bt = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (e) {
            return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
    }
    function St(e, t) {
      return (St =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    function Ct(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    function _t(e, t) {
      if (t && ("object" == typeof t || "function" == typeof t)) return t;
      if (void 0 !== t)
        throw new TypeError(
          "Derived constructors may only return object or undefined"
        );
      return Ct(e);
    }
    function Mt(e) {
      var t = (function () {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      })();
      return function () {
        var r,
          a = bt(e);
        if (t) {
          var n = bt(this).constructor;
          r = Reflect.construct(a, arguments, n);
        } else r = a.apply(this, arguments);
        return _t(this, r);
      };
    }
    function Pt(e) {
      return (
        (function (e) {
          if (Array.isArray(e)) return Et(e);
        })(e) ||
        (function (e) {
          if (
            ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
            null != e["@@iterator"]
          )
            return Array.from(e);
        })(e) ||
        (function (e, t) {
          if (!e) return;
          if ("string" == typeof e) return Et(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === r && e.constructor && (r = e.constructor.name);
          if ("Map" === r || "Set" === r) return Array.from(e);
          if (
            "Arguments" === r ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          )
            return Et(e, t);
        })(e) ||
        (function () {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        })()
      );
    }
    function Et(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
      return a;
    }
    function Nt(e, t) {
      switch (e) {
        case "P":
          return t.date({ width: "short" });
        case "PP":
          return t.date({ width: "medium" });
        case "PPP":
          return t.date({ width: "long" });
        case "PPPP":
        default:
          return t.date({ width: "full" });
      }
    }
    function Ot(e, t) {
      switch (e) {
        case "p":
          return t.time({ width: "short" });
        case "pp":
          return t.time({ width: "medium" });
        case "ppp":
          return t.time({ width: "long" });
        case "pppp":
        default:
          return t.time({ width: "full" });
      }
    }
    var xt = {
        p: Ot,
        P: function (e, t) {
          var r,
            a = e.match(/(P+)(p+)?/) || [],
            n = a[1],
            o = a[2];
          if (!o) return Nt(e, t);
          switch (n) {
            case "P":
              r = t.dateTime({ width: "short" });
              break;
            case "PP":
              r = t.dateTime({ width: "medium" });
              break;
            case "PPP":
              r = t.dateTime({ width: "long" });
              break;
            case "PPPP":
            default:
              r = t.dateTime({ width: "full" });
          }
          return r.replace("{{date}}", Nt(n, t)).replace("{{time}}", Ot(o, t));
        },
      },
      Yt = 12,
      It = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
    function Tt(e) {
      var t = e
        ? "string" == typeof e || e instanceof String
          ? lt.default(e)
          : it.default(e)
        : new Date();
      return Rt(t) ? t : null;
    }
    function Lt(e, t, r, a, n) {
      var o = null,
        s = tr(r) || tr(er()),
        i = !0;
      return Array.isArray(t)
        ? (t.forEach(function (t) {
            var p = pt.default(e, t, new Date(), { locale: s });
            a && (i = Rt(p, n) && e === Ft(p, t, r)), Rt(p, n) && i && (o = p);
          }),
          o)
        : ((o = pt.default(e, t, new Date(), { locale: s })),
          a
            ? (i = Rt(o) && e === Ft(o, t, r))
            : Rt(o) ||
              ((t = t
                .match(It)
                .map(function (e) {
                  var t = e[0];
                  return "p" === t || "P" === t
                    ? s
                      ? (0, xt[t])(e, s.formatLong)
                      : t
                    : e;
                })
                .join("")),
              e.length > 0 &&
                (o = pt.default(e, t.slice(0, e.length), new Date())),
              Rt(o) || (o = new Date(e))),
          Rt(o) && i ? o : null);
    }
    function Rt(e, t) {
      return (
        (t = t || new Date("1/1/1000")), he.default(e) && !ot.default(e, t)
      );
    }
    function Ft(e, t, r) {
      if ("en" === r) return me.default(e, t, { awareOfUnicodeTokens: !0 });
      var a = tr(r);
      return (
        r &&
          !a &&
          console.warn(
            'A locale object was not found for the provided string ["'.concat(
              r,
              '"].'
            )
          ),
        !a && er() && tr(er()) && (a = tr(er())),
        me.default(e, t, { locale: a || null, awareOfUnicodeTokens: !0 })
      );
    }
    function At(e, t) {
      var r = t.dateFormat,
        a = t.locale;
      return (e && Ft(e, Array.isArray(r) ? r[0] : r, a)) || "";
    }
    function qt(e, t) {
      var r = t.hour,
        a = void 0 === r ? 0 : r,
        n = t.minute,
        o = void 0 === n ? 0 : n,
        s = t.second,
        i = void 0 === s ? 0 : s;
      return Ae.default(Fe.default(Re.default(e, i), o), a);
    }
    function Wt(e, t) {
      var r = (t && tr(t)) || (er() && tr(er()));
      return xe.default(e, r ? { locale: r } : null);
    }
    function Bt(e, t) {
      return Ft(e, "ddd", t);
    }
    function Kt(e) {
      return Ue.default(e);
    }
    function Ht(e, t, r) {
      var a = tr(t || er());
      return $e.default(e, { locale: a, weekStartsOn: r });
    }
    function jt(e) {
      return ze.default(e);
    }
    function Qt(e) {
      return Je.default(e);
    }
    function Vt(e) {
      return Ge.default(e);
    }
    function Ut() {
      return Ue.default(Tt());
    }
    function $t(e, t) {
      return e && t ? rt.default(e, t) : !e && !t;
    }
    function zt(e, t) {
      return e && t ? tt.default(e, t) : !e && !t;
    }
    function Gt(e, t) {
      return e && t ? at.default(e, t) : !e && !t;
    }
    function Jt(e, t) {
      return e && t ? et.default(e, t) : !e && !t;
    }
    function Xt(e, t) {
      return e && t ? Ze.default(e, t) : !e && !t;
    }
    function Zt(e, t, r) {
      var a,
        n = Ue.default(t),
        o = Xe.default(r);
      try {
        a = st.default(e, { start: n, end: o });
      } catch (e) {
        a = !1;
      }
      return a;
    }
    function er() {
      return ("undefined" != typeof window ? window : globalThis).__localeId__;
    }
    function tr(e) {
      if ("string" == typeof e) {
        var t = "undefined" != typeof window ? window : globalThis;
        return t.__localeData__ ? t.__localeData__[e] : null;
      }
      return e;
    }
    function rr(e, t) {
      return Ft(qe.default(Tt(), e), "LLLL", t);
    }
    function ar(e, t) {
      return Ft(qe.default(Tt(), e), "LLL", t);
    }
    function nr(e, t) {
      return Ft(We.default(Tt(), e), "QQQ", t);
    }
    function or(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = t.minDate,
        a = t.maxDate,
        n = t.excludeDates,
        o = t.excludeDateIntervals,
        s = t.includeDates,
        i = t.includeDateIntervals,
        p = t.filterDate;
      return (
        ur(e, { minDate: r, maxDate: a }) ||
        (n &&
          n.some(function (t) {
            return Jt(e, t);
          })) ||
        (o &&
          o.some(function (t) {
            var r = t.start,
              a = t.end;
            return st.default(e, { start: r, end: a });
          })) ||
        (s &&
          !s.some(function (t) {
            return Jt(e, t);
          })) ||
        (i &&
          !i.some(function (t) {
            var r = t.start,
              a = t.end;
            return st.default(e, { start: r, end: a });
          })) ||
        (p && !p(Tt(e))) ||
        !1
      );
    }
    function sr(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = t.excludeDates,
        a = t.excludeDateIntervals;
      return a && a.length > 0
        ? a.some(function (t) {
            var r = t.start,
              a = t.end;
            return st.default(e, { start: r, end: a });
          })
        : (r &&
            r.some(function (t) {
              return Jt(e, t);
            })) ||
            !1;
    }
    function ir(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = t.minDate,
        a = t.maxDate,
        n = t.excludeDates,
        o = t.includeDates,
        s = t.filterDate;
      return (
        ur(e, { minDate: r, maxDate: a }) ||
        (n &&
          n.some(function (t) {
            return zt(e, t);
          })) ||
        (o &&
          !o.some(function (t) {
            return zt(e, t);
          })) ||
        (s && !s(Tt(e))) ||
        !1
      );
    }
    function pr(e, t, r, a) {
      var n = Te.default(e),
        o = Ye.default(e),
        s = Te.default(t),
        i = Ye.default(t),
        p = Te.default(a);
      return n === s && n === p
        ? o <= r && r <= i
        : n < s
        ? (p === n && o <= r) || (p === s && i >= r) || (p < s && p > n)
        : void 0;
    }
    function lr(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = t.minDate,
        a = t.maxDate,
        n = t.excludeDates,
        o = t.includeDates,
        s = t.filterDate;
      return (
        ur(e, { minDate: r, maxDate: a }) ||
        (n &&
          n.some(function (t) {
            return Gt(e, t);
          })) ||
        (o &&
          !o.some(function (t) {
            return Gt(e, t);
          })) ||
        (s && !s(Tt(e))) ||
        !1
      );
    }
    function dr(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = t.minDate,
        a = t.maxDate,
        n = new Date(e, 0, 1);
      return ur(n, { minDate: r, maxDate: a }) || !1;
    }
    function cr(e, t, r, a) {
      var n = Te.default(e),
        o = Ie.default(e),
        s = Te.default(t),
        i = Ie.default(t),
        p = Te.default(a);
      return n === s && n === p
        ? o <= r && r <= i
        : n < s
        ? (p === n && o <= r) || (p === s && i >= r) || (p < s && p > n)
        : void 0;
    }
    function ur(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = t.minDate,
        a = t.maxDate;
      return (r && je.default(e, r) < 0) || (a && je.default(e, a) > 0);
    }
    function fr(e, t) {
      return t.some(function (t) {
        return (
          Ee.default(t) === Ee.default(e) && Pe.default(t) === Pe.default(e)
        );
      });
    }
    function hr(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = t.excludeTimes,
        a = t.includeTimes,
        n = t.filterTime;
      return (r && fr(e, r)) || (a && !fr(e, a)) || (n && !n(e)) || !1;
    }
    function mr(e, t) {
      var r = t.minTime,
        a = t.maxTime;
      if (!r || !a) throw new Error("Both minTime and maxTime props required");
      var n,
        o = Tt(),
        s = Ae.default(Fe.default(o, Pe.default(e)), Ee.default(e)),
        i = Ae.default(Fe.default(o, Pe.default(r)), Ee.default(r)),
        p = Ae.default(Fe.default(o, Pe.default(a)), Ee.default(a));
      try {
        n = !st.default(s, { start: i, end: p });
      } catch (e) {
        n = !1;
      }
      return n;
    }
    function yr(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = t.minDate,
        a = t.includeDates,
        n = Ce.default(e, 1);
      return (
        (r && Qe.default(r, n) > 0) ||
        (a &&
          a.every(function (e) {
            return Qe.default(e, n) > 0;
          })) ||
        !1
      );
    }
    function Dr(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = t.maxDate,
        a = t.includeDates,
        n = ge.default(e, 1);
      return (
        (r && Qe.default(n, r) > 0) ||
        (a &&
          a.every(function (e) {
            return Qe.default(n, e) > 0;
          })) ||
        !1
      );
    }
    function vr(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = t.minDate,
        a = t.includeDates,
        n = _e.default(e, 1);
      return (
        (r && Ve.default(r, n) > 0) ||
        (a &&
          a.every(function (e) {
            return Ve.default(e, n) > 0;
          })) ||
        !1
      );
    }
    function wr(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = t.maxDate,
        a = t.includeDates,
        n = ke.default(e, 1);
      return (
        (r && Ve.default(n, r) > 0) ||
        (a &&
          a.every(function (e) {
            return Ve.default(n, e) > 0;
          })) ||
        !1
      );
    }
    function gr(e) {
      var t = e.minDate,
        r = e.includeDates;
      if (r && t) {
        var a = r.filter(function (e) {
          return je.default(e, t) >= 0;
        });
        return Ke.default(a);
      }
      return r ? Ke.default(r) : t;
    }
    function kr(e) {
      var t = e.maxDate,
        r = e.includeDates;
      if (r && t) {
        var a = r.filter(function (e) {
          return je.default(e, t) <= 0;
        });
        return He.default(a);
      }
      return r ? He.default(r) : t;
    }
    function br() {
      for (
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "react-datepicker__day--highlighted",
          r = new Map(),
          a = 0,
          n = e.length;
        a < n;
        a++
      ) {
        var o = e[a];
        if (fe.default(o)) {
          var s = Ft(o, "MM.dd.yyyy"),
            i = r.get(s) || [];
          i.includes(t) || (i.push(t), r.set(s, i));
        } else if ("object" === mt(o)) {
          var p = Object.keys(o),
            l = p[0],
            d = o[p[0]];
          if ("string" == typeof l && d.constructor === Array)
            for (var c = 0, u = d.length; c < u; c++) {
              var f = Ft(d[c], "MM.dd.yyyy"),
                h = r.get(f) || [];
              h.includes(l) || (h.push(l), r.set(f, h));
            }
        }
      }
      return r;
    }
    function Sr(e, t, r, a, n) {
      for (var o = n.length, s = [], i = 0; i < o; i++) {
        var p = ye.default(De.default(e, Ee.default(n[i])), Pe.default(n[i])),
          l = ye.default(e, (r + 1) * a);
        nt.default(p, t) && ot.default(p, l) && s.push(n[i]);
      }
      return s;
    }
    function Cr(e) {
      return e < 10 ? "0".concat(e) : "".concat(e);
    }
    function _r(e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Yt,
        r = Math.ceil(Te.default(e) / t) * t,
        a = r - (t - 1);
      return { startPeriod: a, endPeriod: r };
    }
    function Mr(e, t, r, a) {
      for (var n = [], o = 0; o < 2 * t + 1; o++) {
        var s = e + t - o,
          i = !0;
        r && (i = Te.default(r) <= s),
          a && i && (i = Te.default(a) >= s),
          i && n.push(s);
      }
      return n;
    }
    var Pr = (function (e) {
        kt(a, e);
        var r = Mt(a);
        function a(e) {
          var n;
          yt(this, a),
            wt(Ct((n = r.call(this, e))), "renderOptions", function () {
              var e = n.props.year,
                t = n.state.yearsList.map(function (t) {
                  return ce.default.createElement(
                    "div",
                    {
                      className:
                        e === t
                          ? "react-datepicker__year-option react-datepicker__year-option--selected_year"
                          : "react-datepicker__year-option",
                      key: t,
                      onClick: n.onChange.bind(Ct(n), t),
                      "aria-selected": e === t ? "true" : void 0,
                    },
                    e === t
                      ? ce.default.createElement(
                          "span",
                          {
                            className:
                              "react-datepicker__year-option--selected",
                          },
                          "✓"
                        )
                      : "",
                    t
                  );
                }),
                r = n.props.minDate ? Te.default(n.props.minDate) : null,
                a = n.props.maxDate ? Te.default(n.props.maxDate) : null;
              return (
                (a &&
                  n.state.yearsList.find(function (e) {
                    return e === a;
                  })) ||
                  t.unshift(
                    ce.default.createElement(
                      "div",
                      {
                        className: "react-datepicker__year-option",
                        key: "upcoming",
                        onClick: n.incrementYears,
                      },
                      ce.default.createElement("a", {
                        className:
                          "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming",
                      })
                    )
                  ),
                (r &&
                  n.state.yearsList.find(function (e) {
                    return e === r;
                  })) ||
                  t.push(
                    ce.default.createElement(
                      "div",
                      {
                        className: "react-datepicker__year-option",
                        key: "previous",
                        onClick: n.decrementYears,
                      },
                      ce.default.createElement("a", {
                        className:
                          "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous",
                      })
                    )
                  ),
                t
              );
            }),
            wt(Ct(n), "onChange", function (e) {
              n.props.onChange(e);
            }),
            wt(Ct(n), "handleClickOutside", function () {
              n.props.onCancel();
            }),
            wt(Ct(n), "shiftYears", function (e) {
              var t = n.state.yearsList.map(function (t) {
                return t + e;
              });
              n.setState({ yearsList: t });
            }),
            wt(Ct(n), "incrementYears", function () {
              return n.shiftYears(1);
            }),
            wt(Ct(n), "decrementYears", function () {
              return n.shiftYears(-1);
            });
          var o = e.yearDropdownItemNumber,
            s = e.scrollableYearDropdown,
            i = o || (s ? 10 : 5);
          return (
            (n.state = {
              yearsList: Mr(n.props.year, i, n.props.minDate, n.props.maxDate),
            }),
            (n.dropdownRef = t.createRef()),
            n
          );
        }
        return (
          vt(a, [
            {
              key: "componentDidMount",
              value: function () {
                var e = this.dropdownRef.current;
                e && (e.scrollTop = e.scrollHeight / 2 - e.clientHeight / 2);
              },
            },
            {
              key: "render",
              value: function () {
                var e = ue.default({
                  "react-datepicker__year-dropdown": !0,
                  "react-datepicker__year-dropdown--scrollable":
                    this.props.scrollableYearDropdown,
                });
                return ce.default.createElement(
                  "div",
                  { className: e, ref: this.dropdownRef },
                  this.renderOptions()
                );
              },
            },
          ]),
          a
        );
      })(ce.default.Component),
      Er = dt.default(Pr),
      Nr = (function (e) {
        kt(r, e);
        var t = Mt(r);
        function r() {
          var e;
          yt(this, r);
          for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++)
            n[o] = arguments[o];
          return (
            wt(Ct((e = t.call.apply(t, [this].concat(n)))), "state", {
              dropdownVisible: !1,
            }),
            wt(Ct(e), "renderSelectOptions", function () {
              for (
                var t = e.props.minDate ? Te.default(e.props.minDate) : 1900,
                  r = e.props.maxDate ? Te.default(e.props.maxDate) : 2100,
                  a = [],
                  n = t;
                n <= r;
                n++
              )
                a.push(
                  ce.default.createElement("option", { key: n, value: n }, n)
                );
              return a;
            }),
            wt(Ct(e), "onSelectChange", function (t) {
              e.onChange(t.target.value);
            }),
            wt(Ct(e), "renderSelectMode", function () {
              return ce.default.createElement(
                "select",
                {
                  value: e.props.year,
                  className: "react-datepicker__year-select",
                  onChange: e.onSelectChange,
                },
                e.renderSelectOptions()
              );
            }),
            wt(Ct(e), "renderReadView", function (t) {
              return ce.default.createElement(
                "div",
                {
                  key: "read",
                  style: { visibility: t ? "visible" : "hidden" },
                  className: "react-datepicker__year-read-view",
                  onClick: function (t) {
                    return e.toggleDropdown(t);
                  },
                },
                ce.default.createElement("span", {
                  className: "react-datepicker__year-read-view--down-arrow",
                }),
                ce.default.createElement(
                  "span",
                  {
                    className:
                      "react-datepicker__year-read-view--selected-year",
                  },
                  e.props.year
                )
              );
            }),
            wt(Ct(e), "renderDropdown", function () {
              return ce.default.createElement(Er, {
                key: "dropdown",
                year: e.props.year,
                onChange: e.onChange,
                onCancel: e.toggleDropdown,
                minDate: e.props.minDate,
                maxDate: e.props.maxDate,
                scrollableYearDropdown: e.props.scrollableYearDropdown,
                yearDropdownItemNumber: e.props.yearDropdownItemNumber,
              });
            }),
            wt(Ct(e), "renderScrollMode", function () {
              var t = e.state.dropdownVisible,
                r = [e.renderReadView(!t)];
              return t && r.unshift(e.renderDropdown()), r;
            }),
            wt(Ct(e), "onChange", function (t) {
              e.toggleDropdown(), t !== e.props.year && e.props.onChange(t);
            }),
            wt(Ct(e), "toggleDropdown", function (t) {
              e.setState(
                { dropdownVisible: !e.state.dropdownVisible },
                function () {
                  e.props.adjustDateOnChange &&
                    e.handleYearChange(e.props.date, t);
                }
              );
            }),
            wt(Ct(e), "handleYearChange", function (t, r) {
              e.onSelect(t, r), e.setOpen();
            }),
            wt(Ct(e), "onSelect", function (t, r) {
              e.props.onSelect && e.props.onSelect(t, r);
            }),
            wt(Ct(e), "setOpen", function () {
              e.props.setOpen && e.props.setOpen(!0);
            }),
            e
          );
        }
        return (
          vt(r, [
            {
              key: "render",
              value: function () {
                var e;
                switch (this.props.dropdownMode) {
                  case "scroll":
                    e = this.renderScrollMode();
                    break;
                  case "select":
                    e = this.renderSelectMode();
                }
                return ce.default.createElement(
                  "div",
                  {
                    className:
                      "react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--".concat(
                        this.props.dropdownMode
                      ),
                  },
                  e
                );
              },
            },
          ]),
          r
        );
      })(ce.default.Component),
      Or = (function (e) {
        kt(r, e);
        var t = Mt(r);
        function r() {
          var e;
          yt(this, r);
          for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++)
            n[o] = arguments[o];
          return (
            wt(
              Ct((e = t.call.apply(t, [this].concat(n)))),
              "isSelectedMonth",
              function (t) {
                return e.props.month === t;
              }
            ),
            wt(Ct(e), "renderOptions", function () {
              return e.props.monthNames.map(function (t, r) {
                return ce.default.createElement(
                  "div",
                  {
                    className: e.isSelectedMonth(r)
                      ? "react-datepicker__month-option react-datepicker__month-option--selected_month"
                      : "react-datepicker__month-option",
                    key: t,
                    onClick: e.onChange.bind(Ct(e), r),
                    "aria-selected": e.isSelectedMonth(r) ? "true" : void 0,
                  },
                  e.isSelectedMonth(r)
                    ? ce.default.createElement(
                        "span",
                        {
                          className: "react-datepicker__month-option--selected",
                        },
                        "✓"
                      )
                    : "",
                  t
                );
              });
            }),
            wt(Ct(e), "onChange", function (t) {
              return e.props.onChange(t);
            }),
            wt(Ct(e), "handleClickOutside", function () {
              return e.props.onCancel();
            }),
            e
          );
        }
        return (
          vt(r, [
            {
              key: "render",
              value: function () {
                return ce.default.createElement(
                  "div",
                  { className: "react-datepicker__month-dropdown" },
                  this.renderOptions()
                );
              },
            },
          ]),
          r
        );
      })(ce.default.Component),
      xr = dt.default(Or),
      Yr = (function (e) {
        kt(r, e);
        var t = Mt(r);
        function r() {
          var e;
          yt(this, r);
          for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++)
            n[o] = arguments[o];
          return (
            wt(Ct((e = t.call.apply(t, [this].concat(n)))), "state", {
              dropdownVisible: !1,
            }),
            wt(Ct(e), "renderSelectOptions", function (e) {
              return e.map(function (e, t) {
                return ce.default.createElement(
                  "option",
                  { key: t, value: t },
                  e
                );
              });
            }),
            wt(Ct(e), "renderSelectMode", function (t) {
              return ce.default.createElement(
                "select",
                {
                  value: e.props.month,
                  className: "react-datepicker__month-select",
                  onChange: function (t) {
                    return e.onChange(t.target.value);
                  },
                },
                e.renderSelectOptions(t)
              );
            }),
            wt(Ct(e), "renderReadView", function (t, r) {
              return ce.default.createElement(
                "div",
                {
                  key: "read",
                  style: { visibility: t ? "visible" : "hidden" },
                  className: "react-datepicker__month-read-view",
                  onClick: e.toggleDropdown,
                },
                ce.default.createElement("span", {
                  className: "react-datepicker__month-read-view--down-arrow",
                }),
                ce.default.createElement(
                  "span",
                  {
                    className:
                      "react-datepicker__month-read-view--selected-month",
                  },
                  r[e.props.month]
                )
              );
            }),
            wt(Ct(e), "renderDropdown", function (t) {
              return ce.default.createElement(xr, {
                key: "dropdown",
                month: e.props.month,
                monthNames: t,
                onChange: e.onChange,
                onCancel: e.toggleDropdown,
              });
            }),
            wt(Ct(e), "renderScrollMode", function (t) {
              var r = e.state.dropdownVisible,
                a = [e.renderReadView(!r, t)];
              return r && a.unshift(e.renderDropdown(t)), a;
            }),
            wt(Ct(e), "onChange", function (t) {
              e.toggleDropdown(), t !== e.props.month && e.props.onChange(t);
            }),
            wt(Ct(e), "toggleDropdown", function () {
              return e.setState({ dropdownVisible: !e.state.dropdownVisible });
            }),
            e
          );
        }
        return (
          vt(r, [
            {
              key: "render",
              value: function () {
                var e,
                  t = this,
                  r = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
                    this.props.useShortMonthInDropdown
                      ? function (e) {
                          return ar(e, t.props.locale);
                        }
                      : function (e) {
                          return rr(e, t.props.locale);
                        }
                  );
                switch (this.props.dropdownMode) {
                  case "scroll":
                    e = this.renderScrollMode(r);
                    break;
                  case "select":
                    e = this.renderSelectMode(r);
                }
                return ce.default.createElement(
                  "div",
                  {
                    className:
                      "react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--".concat(
                        this.props.dropdownMode
                      ),
                  },
                  e
                );
              },
            },
          ]),
          r
        );
      })(ce.default.Component);
    function Ir(e, t) {
      for (var r = [], a = jt(e), n = jt(t); !nt.default(a, n); )
        r.push(Tt(a)), (a = ge.default(a, 1));
      return r;
    }
    var Tr = (function (e) {
        kt(r, e);
        var t = Mt(r);
        function r(e) {
          var a;
          return (
            yt(this, r),
            wt(Ct((a = t.call(this, e))), "renderOptions", function () {
              return a.state.monthYearsList.map(function (e) {
                var t = Le.default(e),
                  r = $t(a.props.date, e) && zt(a.props.date, e);
                return ce.default.createElement(
                  "div",
                  {
                    className: r
                      ? "react-datepicker__month-year-option--selected_month-year"
                      : "react-datepicker__month-year-option",
                    key: t,
                    onClick: a.onChange.bind(Ct(a), t),
                    "aria-selected": r ? "true" : void 0,
                  },
                  r
                    ? ce.default.createElement(
                        "span",
                        {
                          className:
                            "react-datepicker__month-year-option--selected",
                        },
                        "✓"
                      )
                    : "",
                  Ft(e, a.props.dateFormat, a.props.locale)
                );
              });
            }),
            wt(Ct(a), "onChange", function (e) {
              return a.props.onChange(e);
            }),
            wt(Ct(a), "handleClickOutside", function () {
              a.props.onCancel();
            }),
            (a.state = {
              monthYearsList: Ir(a.props.minDate, a.props.maxDate),
            }),
            a
          );
        }
        return (
          vt(r, [
            {
              key: "render",
              value: function () {
                var e = ue.default({
                  "react-datepicker__month-year-dropdown": !0,
                  "react-datepicker__month-year-dropdown--scrollable":
                    this.props.scrollableMonthYearDropdown,
                });
                return ce.default.createElement(
                  "div",
                  { className: e },
                  this.renderOptions()
                );
              },
            },
          ]),
          r
        );
      })(ce.default.Component),
      Lr = dt.default(Tr),
      Rr = (function (e) {
        kt(r, e);
        var t = Mt(r);
        function r() {
          var e;
          yt(this, r);
          for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++)
            n[o] = arguments[o];
          return (
            wt(Ct((e = t.call.apply(t, [this].concat(n)))), "state", {
              dropdownVisible: !1,
            }),
            wt(Ct(e), "renderSelectOptions", function () {
              for (
                var t = jt(e.props.minDate), r = jt(e.props.maxDate), a = [];
                !nt.default(t, r);

              ) {
                var n = Le.default(t);
                a.push(
                  ce.default.createElement(
                    "option",
                    { key: n, value: n },
                    Ft(t, e.props.dateFormat, e.props.locale)
                  )
                ),
                  (t = ge.default(t, 1));
              }
              return a;
            }),
            wt(Ct(e), "onSelectChange", function (t) {
              e.onChange(t.target.value);
            }),
            wt(Ct(e), "renderSelectMode", function () {
              return ce.default.createElement(
                "select",
                {
                  value: Le.default(jt(e.props.date)),
                  className: "react-datepicker__month-year-select",
                  onChange: e.onSelectChange,
                },
                e.renderSelectOptions()
              );
            }),
            wt(Ct(e), "renderReadView", function (t) {
              var r = Ft(e.props.date, e.props.dateFormat, e.props.locale);
              return ce.default.createElement(
                "div",
                {
                  key: "read",
                  style: { visibility: t ? "visible" : "hidden" },
                  className: "react-datepicker__month-year-read-view",
                  onClick: function (t) {
                    return e.toggleDropdown(t);
                  },
                },
                ce.default.createElement("span", {
                  className:
                    "react-datepicker__month-year-read-view--down-arrow",
                }),
                ce.default.createElement(
                  "span",
                  {
                    className:
                      "react-datepicker__month-year-read-view--selected-month-year",
                  },
                  r
                )
              );
            }),
            wt(Ct(e), "renderDropdown", function () {
              return ce.default.createElement(Lr, {
                key: "dropdown",
                date: e.props.date,
                dateFormat: e.props.dateFormat,
                onChange: e.onChange,
                onCancel: e.toggleDropdown,
                minDate: e.props.minDate,
                maxDate: e.props.maxDate,
                scrollableMonthYearDropdown:
                  e.props.scrollableMonthYearDropdown,
                locale: e.props.locale,
              });
            }),
            wt(Ct(e), "renderScrollMode", function () {
              var t = e.state.dropdownVisible,
                r = [e.renderReadView(!t)];
              return t && r.unshift(e.renderDropdown()), r;
            }),
            wt(Ct(e), "onChange", function (t) {
              e.toggleDropdown();
              var r = Tt(parseInt(t));
              ($t(e.props.date, r) && zt(e.props.date, r)) ||
                e.props.onChange(r);
            }),
            wt(Ct(e), "toggleDropdown", function () {
              return e.setState({ dropdownVisible: !e.state.dropdownVisible });
            }),
            e
          );
        }
        return (
          vt(r, [
            {
              key: "render",
              value: function () {
                var e;
                switch (this.props.dropdownMode) {
                  case "scroll":
                    e = this.renderScrollMode();
                    break;
                  case "select":
                    e = this.renderSelectMode();
                }
                return ce.default.createElement(
                  "div",
                  {
                    className:
                      "react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--".concat(
                        this.props.dropdownMode
                      ),
                  },
                  e
                );
              },
            },
          ]),
          r
        );
      })(ce.default.Component),
      Fr = (function (e) {
        kt(r, e);
        var t = Mt(r);
        function r() {
          var e;
          yt(this, r);
          for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++)
            n[o] = arguments[o];
          return (
            wt(
              Ct((e = t.call.apply(t, [this].concat(n)))),
              "dayEl",
              ce.default.createRef()
            ),
            wt(Ct(e), "handleClick", function (t) {
              !e.isDisabled() && e.props.onClick && e.props.onClick(t);
            }),
            wt(Ct(e), "handleMouseEnter", function (t) {
              !e.isDisabled() &&
                e.props.onMouseEnter &&
                e.props.onMouseEnter(t);
            }),
            wt(Ct(e), "handleOnKeyDown", function (t) {
              " " === t.key && (t.preventDefault(), (t.key = "Enter")),
                e.props.handleOnKeyDown(t);
            }),
            wt(Ct(e), "isSameDay", function (t) {
              return Jt(e.props.day, t);
            }),
            wt(Ct(e), "isKeyboardSelected", function () {
              return (
                !e.props.disabledKeyboardNavigation &&
                !e.isSameDay(e.props.selected) &&
                e.isSameDay(e.props.preSelection)
              );
            }),
            wt(Ct(e), "isDisabled", function () {
              return or(e.props.day, e.props);
            }),
            wt(Ct(e), "isExcluded", function () {
              return sr(e.props.day, e.props);
            }),
            wt(Ct(e), "getHighLightedClass", function (t) {
              var r = e.props,
                a = r.day,
                n = r.highlightDates;
              if (!n) return !1;
              var o = Ft(a, "MM.dd.yyyy");
              return n.get(o);
            }),
            wt(Ct(e), "isInRange", function () {
              var t = e.props,
                r = t.day,
                a = t.startDate,
                n = t.endDate;
              return !(!a || !n) && Zt(r, a, n);
            }),
            wt(Ct(e), "isInSelectingRange", function () {
              var t,
                r = e.props,
                a = r.day,
                n = r.selectsStart,
                o = r.selectsEnd,
                s = r.selectsRange,
                i = r.selectsDisabledDaysInRange,
                p = r.startDate,
                l = r.endDate,
                d =
                  null !== (t = e.props.selectingDate) && void 0 !== t
                    ? t
                    : e.props.preSelection;
              return (
                !(!(n || o || s) || !d || (!i && e.isDisabled())) &&
                (n && l && (ot.default(d, l) || Xt(d, l))
                  ? Zt(a, d, l)
                  : ((o && p && (nt.default(d, p) || Xt(d, p))) ||
                      !(!s || !p || l || (!nt.default(d, p) && !Xt(d, p)))) &&
                    Zt(a, p, d))
              );
            }),
            wt(Ct(e), "isSelectingRangeStart", function () {
              var t;
              if (!e.isInSelectingRange()) return !1;
              var r = e.props,
                a = r.day,
                n = r.startDate,
                o = r.selectsStart,
                s =
                  null !== (t = e.props.selectingDate) && void 0 !== t
                    ? t
                    : e.props.preSelection;
              return Jt(a, o ? s : n);
            }),
            wt(Ct(e), "isSelectingRangeEnd", function () {
              var t;
              if (!e.isInSelectingRange()) return !1;
              var r = e.props,
                a = r.day,
                n = r.endDate,
                o = r.selectsEnd,
                s = r.selectsRange,
                i =
                  null !== (t = e.props.selectingDate) && void 0 !== t
                    ? t
                    : e.props.preSelection;
              return Jt(a, o || s ? i : n);
            }),
            wt(Ct(e), "isRangeStart", function () {
              var t = e.props,
                r = t.day,
                a = t.startDate,
                n = t.endDate;
              return !(!a || !n) && Jt(a, r);
            }),
            wt(Ct(e), "isRangeEnd", function () {
              var t = e.props,
                r = t.day,
                a = t.startDate,
                n = t.endDate;
              return !(!a || !n) && Jt(n, r);
            }),
            wt(Ct(e), "isWeekend", function () {
              var t = Ne.default(e.props.day);
              return 0 === t || 6 === t;
            }),
            wt(Ct(e), "isAfterMonth", function () {
              return (
                void 0 !== e.props.month &&
                (e.props.month + 1) % 12 === Ye.default(e.props.day)
              );
            }),
            wt(Ct(e), "isBeforeMonth", function () {
              return (
                void 0 !== e.props.month &&
                (Ye.default(e.props.day) + 1) % 12 === e.props.month
              );
            }),
            wt(Ct(e), "isCurrentDay", function () {
              return e.isSameDay(Tt());
            }),
            wt(Ct(e), "isSelected", function () {
              return e.isSameDay(e.props.selected);
            }),
            wt(Ct(e), "getClassNames", function (t) {
              var r = e.props.dayClassName ? e.props.dayClassName(t) : void 0;
              return ue.default(
                "react-datepicker__day",
                r,
                "react-datepicker__day--" + Bt(e.props.day),
                {
                  "react-datepicker__day--disabled": e.isDisabled(),
                  "react-datepicker__day--excluded": e.isExcluded(),
                  "react-datepicker__day--selected": e.isSelected(),
                  "react-datepicker__day--keyboard-selected":
                    e.isKeyboardSelected(),
                  "react-datepicker__day--range-start": e.isRangeStart(),
                  "react-datepicker__day--range-end": e.isRangeEnd(),
                  "react-datepicker__day--in-range": e.isInRange(),
                  "react-datepicker__day--in-selecting-range":
                    e.isInSelectingRange(),
                  "react-datepicker__day--selecting-range-start":
                    e.isSelectingRangeStart(),
                  "react-datepicker__day--selecting-range-end":
                    e.isSelectingRangeEnd(),
                  "react-datepicker__day--today": e.isCurrentDay(),
                  "react-datepicker__day--weekend": e.isWeekend(),
                  "react-datepicker__day--outside-month":
                    e.isAfterMonth() || e.isBeforeMonth(),
                },
                e.getHighLightedClass("react-datepicker__day--highlighted")
              );
            }),
            wt(Ct(e), "getAriaLabel", function () {
              var t = e.props,
                r = t.day,
                a = t.ariaLabelPrefixWhenEnabled,
                n = void 0 === a ? "Choose" : a,
                o = t.ariaLabelPrefixWhenDisabled,
                s = void 0 === o ? "Not available" : o,
                i = e.isDisabled() || e.isExcluded() ? s : n;
              return "".concat(i, " ").concat(Ft(r, "PPPP", e.props.locale));
            }),
            wt(Ct(e), "getTabIndex", function (t, r) {
              var a = t || e.props.selected,
                n = r || e.props.preSelection;
              return e.isKeyboardSelected() || (e.isSameDay(a) && Jt(n, a))
                ? 0
                : -1;
            }),
            wt(Ct(e), "handleFocusDay", function () {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                r = !1;
              0 === e.getTabIndex() &&
                !t.isInputFocused &&
                e.isSameDay(e.props.preSelection) &&
                ((document.activeElement &&
                  document.activeElement !== document.body) ||
                  (r = !0),
                e.props.inline && !e.props.shouldFocusDayInline && (r = !1),
                e.props.containerRef &&
                  e.props.containerRef.current &&
                  e.props.containerRef.current.contains(
                    document.activeElement
                  ) &&
                  document.activeElement.classList.contains(
                    "react-datepicker__day"
                  ) &&
                  (r = !0)),
                r && e.dayEl.current.focus({ preventScroll: !0 });
            }),
            wt(Ct(e), "renderDayContents", function () {
              return (e.props.monthShowsDuplicateDaysEnd && e.isAfterMonth()) ||
                (e.props.monthShowsDuplicateDaysStart && e.isBeforeMonth())
                ? null
                : e.props.renderDayContents
                ? e.props.renderDayContents(
                    Oe.default(e.props.day),
                    e.props.day
                  )
                : Oe.default(e.props.day);
            }),
            wt(Ct(e), "render", function () {
              return ce.default.createElement(
                "div",
                {
                  ref: e.dayEl,
                  className: e.getClassNames(e.props.day),
                  onKeyDown: e.handleOnKeyDown,
                  onClick: e.handleClick,
                  onMouseEnter: e.handleMouseEnter,
                  tabIndex: e.getTabIndex(),
                  "aria-label": e.getAriaLabel(),
                  role: "option",
                  "aria-disabled": e.isDisabled(),
                  "aria-current": e.isCurrentDay() ? "date" : void 0,
                  "aria-selected": e.isSelected(),
                },
                e.renderDayContents()
              );
            }),
            e
          );
        }
        return (
          vt(r, [
            {
              key: "componentDidMount",
              value: function () {
                this.handleFocusDay();
              },
            },
            {
              key: "componentDidUpdate",
              value: function (e) {
                this.handleFocusDay(e);
              },
            },
          ]),
          r
        );
      })(ce.default.Component),
      Ar = (function (e) {
        kt(r, e);
        var t = Mt(r);
        function r() {
          var e;
          yt(this, r);
          for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++)
            n[o] = arguments[o];
          return (
            wt(
              Ct((e = t.call.apply(t, [this].concat(n)))),
              "handleClick",
              function (t) {
                e.props.onClick && e.props.onClick(t);
              }
            ),
            e
          );
        }
        return (
          vt(r, [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.weekNumber,
                  r = e.ariaLabelPrefix,
                  a = void 0 === r ? "week " : r,
                  n = {
                    "react-datepicker__week-number": !0,
                    "react-datepicker__week-number--clickable": !!e.onClick,
                  };
                return ce.default.createElement(
                  "div",
                  {
                    className: ue.default(n),
                    "aria-label": ""
                      .concat(a, " ")
                      .concat(this.props.weekNumber),
                    onClick: this.handleClick,
                  },
                  t
                );
              },
            },
          ]),
          r
        );
      })(ce.default.Component),
      qr = (function (e) {
        kt(r, e);
        var t = Mt(r);
        function r() {
          var e;
          yt(this, r);
          for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++)
            n[o] = arguments[o];
          return (
            wt(
              Ct((e = t.call.apply(t, [this].concat(n)))),
              "handleDayClick",
              function (t, r) {
                e.props.onDayClick && e.props.onDayClick(t, r);
              }
            ),
            wt(Ct(e), "handleDayMouseEnter", function (t) {
              e.props.onDayMouseEnter && e.props.onDayMouseEnter(t);
            }),
            wt(Ct(e), "handleWeekClick", function (t, r, a) {
              "function" == typeof e.props.onWeekSelect &&
                e.props.onWeekSelect(t, r, a),
                e.props.shouldCloseOnSelect && e.props.setOpen(!1);
            }),
            wt(Ct(e), "formatWeekNumber", function (t) {
              return e.props.formatWeekNumber
                ? e.props.formatWeekNumber(t)
                : Wt(t);
            }),
            wt(Ct(e), "renderDays", function () {
              var t = Ht(e.props.day, e.props.locale, e.props.calendarStartDay),
                r = [],
                a = e.formatWeekNumber(t);
              if (e.props.showWeekNumber) {
                var n = e.props.onWeekSelect
                  ? e.handleWeekClick.bind(Ct(e), t, a)
                  : void 0;
                r.push(
                  ce.default.createElement(Ar, {
                    key: "W",
                    weekNumber: a,
                    onClick: n,
                    ariaLabelPrefix: e.props.ariaLabelPrefix,
                  })
                );
              }
              return r.concat(
                [0, 1, 2, 3, 4, 5, 6].map(function (r) {
                  var a = ve.default(t, r);
                  return ce.default.createElement(Fr, {
                    ariaLabelPrefixWhenEnabled:
                      e.props.chooseDayAriaLabelPrefix,
                    ariaLabelPrefixWhenDisabled:
                      e.props.disabledDayAriaLabelPrefix,
                    key: a.valueOf(),
                    day: a,
                    month: e.props.month,
                    onClick: e.handleDayClick.bind(Ct(e), a),
                    onMouseEnter: e.handleDayMouseEnter.bind(Ct(e), a),
                    minDate: e.props.minDate,
                    maxDate: e.props.maxDate,
                    excludeDates: e.props.excludeDates,
                    excludeDateIntervals: e.props.excludeDateIntervals,
                    includeDates: e.props.includeDates,
                    includeDateIntervals: e.props.includeDateIntervals,
                    highlightDates: e.props.highlightDates,
                    selectingDate: e.props.selectingDate,
                    filterDate: e.props.filterDate,
                    preSelection: e.props.preSelection,
                    selected: e.props.selected,
                    selectsStart: e.props.selectsStart,
                    selectsEnd: e.props.selectsEnd,
                    selectsRange: e.props.selectsRange,
                    selectsDisabledDaysInRange:
                      e.props.selectsDisabledDaysInRange,
                    startDate: e.props.startDate,
                    endDate: e.props.endDate,
                    dayClassName: e.props.dayClassName,
                    renderDayContents: e.props.renderDayContents,
                    disabledKeyboardNavigation:
                      e.props.disabledKeyboardNavigation,
                    handleOnKeyDown: e.props.handleOnKeyDown,
                    isInputFocused: e.props.isInputFocused,
                    containerRef: e.props.containerRef,
                    inline: e.props.inline,
                    shouldFocusDayInline: e.props.shouldFocusDayInline,
                    monthShowsDuplicateDaysEnd:
                      e.props.monthShowsDuplicateDaysEnd,
                    monthShowsDuplicateDaysStart:
                      e.props.monthShowsDuplicateDaysStart,
                    locale: e.props.locale,
                  });
                })
              );
            }),
            e
          );
        }
        return (
          vt(
            r,
            [
              {
                key: "render",
                value: function () {
                  return ce.default.createElement(
                    "div",
                    { className: "react-datepicker__week" },
                    this.renderDays()
                  );
                },
              },
            ],
            [
              {
                key: "defaultProps",
                get: function () {
                  return { shouldCloseOnSelect: !0 };
                },
              },
            ]
          ),
          r
        );
      })(ce.default.Component),
      Wr = (function (e) {
        kt(r, e);
        var t = Mt(r);
        function r() {
          var e;
          yt(this, r);
          for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++)
            n[o] = arguments[o];
          return (
            wt(
              Ct((e = t.call.apply(t, [this].concat(n)))),
              "MONTH_REFS",
              Pt(Array(12)).map(function () {
                return ce.default.createRef();
              })
            ),
            wt(Ct(e), "isDisabled", function (t) {
              return or(t, e.props);
            }),
            wt(Ct(e), "isExcluded", function (t) {
              return sr(t, e.props);
            }),
            wt(Ct(e), "handleDayClick", function (t, r) {
              e.props.onDayClick &&
                e.props.onDayClick(t, r, e.props.orderInDisplay);
            }),
            wt(Ct(e), "handleDayMouseEnter", function (t) {
              e.props.onDayMouseEnter && e.props.onDayMouseEnter(t);
            }),
            wt(Ct(e), "handleMouseLeave", function () {
              e.props.onMouseLeave && e.props.onMouseLeave();
            }),
            wt(Ct(e), "isRangeStartMonth", function (t) {
              var r = e.props,
                a = r.day,
                n = r.startDate,
                o = r.endDate;
              return !(!n || !o) && zt(qe.default(a, t), n);
            }),
            wt(Ct(e), "isRangeStartQuarter", function (t) {
              var r = e.props,
                a = r.day,
                n = r.startDate,
                o = r.endDate;
              return !(!n || !o) && Gt(We.default(a, t), n);
            }),
            wt(Ct(e), "isRangeEndMonth", function (t) {
              var r = e.props,
                a = r.day,
                n = r.startDate,
                o = r.endDate;
              return !(!n || !o) && zt(qe.default(a, t), o);
            }),
            wt(Ct(e), "isRangeEndQuarter", function (t) {
              var r = e.props,
                a = r.day,
                n = r.startDate,
                o = r.endDate;
              return !(!n || !o) && Gt(We.default(a, t), o);
            }),
            wt(Ct(e), "isWeekInMonth", function (t) {
              var r = e.props.day,
                a = ve.default(t, 6);
              return zt(t, r) || zt(a, r);
            }),
            wt(Ct(e), "isCurrentMonth", function (e, t) {
              return (
                Te.default(e) === Te.default(Tt()) && t === Ye.default(Tt())
              );
            }),
            wt(Ct(e), "isSelectedMonth", function (e, t, r) {
              return Ye.default(e) === t && Te.default(e) === Te.default(r);
            }),
            wt(Ct(e), "isSelectedQuarter", function (e, t, r) {
              return Ie.default(e) === t && Te.default(e) === Te.default(r);
            }),
            wt(Ct(e), "renderWeeks", function () {
              for (
                var t = [],
                  r = e.props.fixedHeight,
                  a = 0,
                  n = !1,
                  o = Ht(
                    jt(e.props.day),
                    e.props.locale,
                    e.props.calendarStartDay
                  );
                t.push(
                  ce.default.createElement(qr, {
                    ariaLabelPrefix: e.props.weekAriaLabelPrefix,
                    chooseDayAriaLabelPrefix: e.props.chooseDayAriaLabelPrefix,
                    disabledDayAriaLabelPrefix:
                      e.props.disabledDayAriaLabelPrefix,
                    key: a,
                    day: o,
                    month: Ye.default(e.props.day),
                    onDayClick: e.handleDayClick,
                    onDayMouseEnter: e.handleDayMouseEnter,
                    onWeekSelect: e.props.onWeekSelect,
                    formatWeekNumber: e.props.formatWeekNumber,
                    locale: e.props.locale,
                    minDate: e.props.minDate,
                    maxDate: e.props.maxDate,
                    excludeDates: e.props.excludeDates,
                    excludeDateIntervals: e.props.excludeDateIntervals,
                    includeDates: e.props.includeDates,
                    includeDateIntervals: e.props.includeDateIntervals,
                    inline: e.props.inline,
                    shouldFocusDayInline: e.props.shouldFocusDayInline,
                    highlightDates: e.props.highlightDates,
                    selectingDate: e.props.selectingDate,
                    filterDate: e.props.filterDate,
                    preSelection: e.props.preSelection,
                    selected: e.props.selected,
                    selectsStart: e.props.selectsStart,
                    selectsEnd: e.props.selectsEnd,
                    selectsRange: e.props.selectsRange,
                    selectsDisabledDaysInRange:
                      e.props.selectsDisabledDaysInRange,
                    showWeekNumber: e.props.showWeekNumbers,
                    startDate: e.props.startDate,
                    endDate: e.props.endDate,
                    dayClassName: e.props.dayClassName,
                    setOpen: e.props.setOpen,
                    shouldCloseOnSelect: e.props.shouldCloseOnSelect,
                    disabledKeyboardNavigation:
                      e.props.disabledKeyboardNavigation,
                    renderDayContents: e.props.renderDayContents,
                    handleOnKeyDown: e.props.handleOnKeyDown,
                    isInputFocused: e.props.isInputFocused,
                    containerRef: e.props.containerRef,
                    calendarStartDay: e.props.calendarStartDay,
                    monthShowsDuplicateDaysEnd:
                      e.props.monthShowsDuplicateDaysEnd,
                    monthShowsDuplicateDaysStart:
                      e.props.monthShowsDuplicateDaysStart,
                  })
                ),
                  !n;

              ) {
                a++, (o = we.default(o, 1));
                var s = r && a >= 6,
                  i = !r && !e.isWeekInMonth(o);
                if (s || i) {
                  if (!e.props.peekNextMonth) break;
                  n = !0;
                }
              }
              return t;
            }),
            wt(Ct(e), "onMonthClick", function (t, r) {
              e.handleDayClick(jt(qe.default(e.props.day, r)), t);
            }),
            wt(Ct(e), "handleMonthNavigation", function (t, r) {
              e.isDisabled(r) ||
                e.isExcluded(r) ||
                (e.props.setPreSelection(r),
                e.MONTH_REFS[t].current && e.MONTH_REFS[t].current.focus());
            }),
            wt(Ct(e), "onMonthKeyDown", function (t, r) {
              t.preventDefault();
              var a = t.key;
              if (!e.props.disabledKeyboardNavigation)
                switch (a) {
                  case "Enter":
                    e.onMonthClick(t, r),
                      e.props.setPreSelection(e.props.selected);
                    break;
                  case "ArrowRight":
                    e.handleMonthNavigation(
                      11 === r ? 0 : r + 1,
                      ge.default(e.props.preSelection, 1)
                    );
                    break;
                  case "ArrowLeft":
                    e.handleMonthNavigation(
                      0 === r ? 11 : r - 1,
                      Ce.default(e.props.preSelection, 1)
                    );
                    break;
                  case "ArrowUp":
                    e.handleMonthNavigation(
                      r >= 0 && r <= 2 ? r + 9 : r - 3,
                      Ce.default(e.props.preSelection, 3)
                    );
                    break;
                  case "ArrowDown":
                    e.handleMonthNavigation(
                      r >= 9 && r <= 11 ? r - 9 : r + 3,
                      ge.default(e.props.preSelection, 3)
                    );
                }
            }),
            wt(Ct(e), "onQuarterClick", function (t, r) {
              e.handleDayClick(Vt(We.default(e.props.day, r)), t);
            }),
            wt(Ct(e), "getMonthClassNames", function (t) {
              var r = e.props,
                a = r.day,
                n = r.startDate,
                o = r.endDate,
                s = r.selected,
                i = r.minDate,
                p = r.maxDate,
                l = r.preSelection,
                d = r.monthClassName,
                c = d ? d(a) : void 0;
              return ue.default(
                "react-datepicker__month-text",
                "react-datepicker__month-".concat(t),
                c,
                {
                  "react-datepicker__month--disabled":
                    (i || p) && ir(qe.default(a, t), e.props),
                  "react-datepicker__month--selected": e.isSelectedMonth(
                    a,
                    t,
                    s
                  ),
                  "react-datepicker__month-text--keyboard-selected":
                    Ye.default(l) === t,
                  "react-datepicker__month--in-range": pr(n, o, t, a),
                  "react-datepicker__month--range-start":
                    e.isRangeStartMonth(t),
                  "react-datepicker__month--range-end": e.isRangeEndMonth(t),
                  "react-datepicker__month-text--today": e.isCurrentMonth(a, t),
                }
              );
            }),
            wt(Ct(e), "getTabIndex", function (t) {
              var r = Ye.default(e.props.preSelection);
              return e.props.disabledKeyboardNavigation || t !== r ? "-1" : "0";
            }),
            wt(Ct(e), "getAriaLabel", function (t) {
              var r = e.props,
                a = r.chooseDayAriaLabelPrefix,
                n = void 0 === a ? "Choose" : a,
                o = r.disabledDayAriaLabelPrefix,
                s = void 0 === o ? "Not available" : o,
                i = r.day,
                p = qe.default(i, t),
                l = e.isDisabled(p) || e.isExcluded(p) ? s : n;
              return "".concat(l, " ").concat(Ft(p, "MMMM yyyy"));
            }),
            wt(Ct(e), "getQuarterClassNames", function (t) {
              var r = e.props,
                a = r.day,
                n = r.startDate,
                o = r.endDate,
                s = r.selected,
                i = r.minDate,
                p = r.maxDate;
              return ue.default(
                "react-datepicker__quarter-text",
                "react-datepicker__quarter-".concat(t),
                {
                  "react-datepicker__quarter--disabled":
                    (i || p) && lr(We.default(a, t), e.props),
                  "react-datepicker__quarter--selected": e.isSelectedQuarter(
                    a,
                    t,
                    s
                  ),
                  "react-datepicker__quarter--in-range": cr(n, o, t, a),
                  "react-datepicker__quarter--range-start":
                    e.isRangeStartQuarter(t),
                  "react-datepicker__quarter--range-end":
                    e.isRangeEndQuarter(t),
                }
              );
            }),
            wt(Ct(e), "renderMonths", function () {
              var t = e.props,
                r = t.showFullMonthYearPicker,
                a = t.showTwoColumnMonthYearPicker,
                n = t.showFourColumnMonthYearPicker,
                o = t.locale,
                s = t.day,
                i = t.selected;
              return (
                n
                  ? [
                      [0, 1, 2, 3],
                      [4, 5, 6, 7],
                      [8, 9, 10, 11],
                    ]
                  : a
                  ? [
                      [0, 1],
                      [2, 3],
                      [4, 5],
                      [6, 7],
                      [8, 9],
                      [10, 11],
                    ]
                  : [
                      [0, 1, 2],
                      [3, 4, 5],
                      [6, 7, 8],
                      [9, 10, 11],
                    ]
              ).map(function (t, a) {
                return ce.default.createElement(
                  "div",
                  { className: "react-datepicker__month-wrapper", key: a },
                  t.map(function (t, a) {
                    return ce.default.createElement(
                      "div",
                      {
                        ref: e.MONTH_REFS[t],
                        key: a,
                        onClick: function (r) {
                          e.onMonthClick(r, t);
                        },
                        onKeyDown: function (r) {
                          e.onMonthKeyDown(r, t);
                        },
                        tabIndex: e.getTabIndex(t),
                        className: e.getMonthClassNames(t),
                        role: "option",
                        "aria-label": e.getAriaLabel(t),
                        "aria-current": e.isCurrentMonth(s, t)
                          ? "date"
                          : void 0,
                        "aria-selected": e.isSelectedMonth(s, t, i),
                      },
                      r ? rr(t, o) : ar(t, o)
                    );
                  })
                );
              });
            }),
            wt(Ct(e), "renderQuarters", function () {
              var t = e.props,
                r = t.day,
                a = t.selected;
              return ce.default.createElement(
                "div",
                { className: "react-datepicker__quarter-wrapper" },
                [1, 2, 3, 4].map(function (t, n) {
                  return ce.default.createElement(
                    "div",
                    {
                      key: n,
                      role: "option",
                      onClick: function (r) {
                        e.onQuarterClick(r, t);
                      },
                      className: e.getQuarterClassNames(t),
                      "aria-selected": e.isSelectedQuarter(r, t, a),
                    },
                    nr(t, e.props.locale)
                  );
                })
              );
            }),
            wt(Ct(e), "getClassNames", function () {
              var t = e.props;
              t.day;
              var r = t.selectingDate,
                a = t.selectsStart,
                n = t.selectsEnd,
                o = t.showMonthYearPicker,
                s = t.showQuarterYearPicker;
              return ue.default(
                "react-datepicker__month",
                { "react-datepicker__month--selecting-range": r && (a || n) },
                { "react-datepicker__monthPicker": o },
                { "react-datepicker__quarterPicker": s }
              );
            }),
            e
          );
        }
        return (
          vt(r, [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.showMonthYearPicker,
                  r = e.showQuarterYearPicker,
                  a = e.day,
                  n = e.ariaLabelPrefix,
                  o = void 0 === n ? "month " : n;
                return ce.default.createElement(
                  "div",
                  {
                    className: this.getClassNames(),
                    onMouseLeave: this.handleMouseLeave,
                    "aria-label": "".concat(o, " ").concat(Ft(a, "yyyy-MM")),
                    role: "listbox",
                  },
                  t
                    ? this.renderMonths()
                    : r
                    ? this.renderQuarters()
                    : this.renderWeeks()
                );
              },
            },
          ]),
          r
        );
      })(ce.default.Component),
      Br = (function (e) {
        kt(r, e);
        var t = Mt(r);
        function r() {
          var e;
          yt(this, r);
          for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++)
            n[o] = arguments[o];
          return (
            wt(Ct((e = t.call.apply(t, [this].concat(n)))), "state", {
              height: null,
            }),
            wt(Ct(e), "handleClick", function (t) {
              ((e.props.minTime || e.props.maxTime) && mr(t, e.props)) ||
                ((e.props.excludeTimes ||
                  e.props.includeTimes ||
                  e.props.filterTime) &&
                  hr(t, e.props)) ||
                e.props.onChange(t);
            }),
            wt(Ct(e), "isSelectedTime", function (t, r, a) {
              return (
                e.props.selected && r === Ee.default(t) && a === Pe.default(t)
              );
            }),
            wt(Ct(e), "liClasses", function (t, r, a) {
              var n = [
                "react-datepicker__time-list-item",
                e.props.timeClassName ? e.props.timeClassName(t, r, a) : void 0,
              ];
              return (
                e.isSelectedTime(t, r, a) &&
                  n.push("react-datepicker__time-list-item--selected"),
                (((e.props.minTime || e.props.maxTime) && mr(t, e.props)) ||
                  ((e.props.excludeTimes ||
                    e.props.includeTimes ||
                    e.props.filterTime) &&
                    hr(t, e.props))) &&
                  n.push("react-datepicker__time-list-item--disabled"),
                e.props.injectTimes &&
                  (60 * Ee.default(t) + Pe.default(t)) % e.props.intervals !=
                    0 &&
                  n.push("react-datepicker__time-list-item--injected"),
                n.join(" ")
              );
            }),
            wt(Ct(e), "handleOnKeyDown", function (t, r) {
              " " === t.key && (t.preventDefault(), (t.key = "Enter")),
                "Enter" === t.key && e.handleClick(r),
                e.props.handleOnKeyDown(t);
            }),
            wt(Ct(e), "renderTimes", function () {
              for (
                var t = [],
                  r = e.props.format ? e.props.format : "p",
                  a = e.props.intervals,
                  n = Kt(Tt(e.props.selected)),
                  o = 1440 / a,
                  s =
                    e.props.injectTimes &&
                    e.props.injectTimes.sort(function (e, t) {
                      return e - t;
                    }),
                  i = e.props.selected || e.props.openToDate || Tt(),
                  p = Ee.default(i),
                  l = Pe.default(i),
                  d = Ae.default(Fe.default(n, l), p),
                  c = 0;
                c < o;
                c++
              ) {
                var u = ye.default(n, c * a);
                if ((t.push(u), s)) {
                  var f = Sr(n, u, c, a, s);
                  t = t.concat(f);
                }
              }
              return t.map(function (t, a) {
                return ce.default.createElement(
                  "li",
                  {
                    key: a,
                    onClick: e.handleClick.bind(Ct(e), t),
                    className: e.liClasses(t, p, l),
                    ref: function (r) {
                      (ot.default(t, d) || Xt(t, d)) && (e.centerLi = r);
                    },
                    onKeyDown: function (r) {
                      e.handleOnKeyDown(r, t);
                    },
                    tabIndex: "0",
                    "aria-selected": e.isSelectedTime(t, p, l)
                      ? "true"
                      : void 0,
                  },
                  Ft(t, r, e.props.locale)
                );
              });
            }),
            e
          );
        }
        return (
          vt(
            r,
            [
              {
                key: "componentDidMount",
                value: function () {
                  (this.list.scrollTop = r.calcCenterPosition(
                    this.props.monthRef
                      ? this.props.monthRef.clientHeight -
                          this.header.clientHeight
                      : this.list.clientHeight,
                    this.centerLi
                  )),
                    this.props.monthRef &&
                      this.header &&
                      this.setState({
                        height:
                          this.props.monthRef.clientHeight -
                          this.header.clientHeight,
                      });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.state.height;
                  return ce.default.createElement(
                    "div",
                    {
                      className: "react-datepicker__time-container ".concat(
                        this.props.todayButton
                          ? "react-datepicker__time-container--with-today-button"
                          : ""
                      ),
                    },
                    ce.default.createElement(
                      "div",
                      {
                        className:
                          "react-datepicker__header react-datepicker__header--time ".concat(
                            this.props.showTimeSelectOnly
                              ? "react-datepicker__header--time--only"
                              : ""
                          ),
                        ref: function (t) {
                          e.header = t;
                        },
                      },
                      ce.default.createElement(
                        "div",
                        { className: "react-datepicker-time__header" },
                        this.props.timeCaption
                      )
                    ),
                    ce.default.createElement(
                      "div",
                      { className: "react-datepicker__time" },
                      ce.default.createElement(
                        "div",
                        { className: "react-datepicker__time-box" },
                        ce.default.createElement(
                          "ul",
                          {
                            className: "react-datepicker__time-list",
                            ref: function (t) {
                              e.list = t;
                            },
                            style: t ? { height: t } : {},
                            tabIndex: "0",
                          },
                          this.renderTimes()
                        )
                      )
                    )
                  );
                },
              },
            ],
            [
              {
                key: "defaultProps",
                get: function () {
                  return {
                    intervals: 30,
                    onTimeChange: function () {},
                    todayButton: null,
                    timeCaption: "Time",
                  };
                },
              },
            ]
          ),
          r
        );
      })(ce.default.Component);
    wt(Br, "calcCenterPosition", function (e, t) {
      return t.offsetTop - (e / 2 - t.clientHeight / 2);
    });
    var Kr = (function (e) {
        kt(r, e);
        var t = Mt(r);
        function r(e) {
          var a;
          return (
            yt(this, r),
            wt(
              Ct((a = t.call(this, e))),
              "YEAR_REFS",
              Pt(Array(a.props.yearItemNumber)).map(function () {
                return ce.default.createRef();
              })
            ),
            wt(Ct(a), "isDisabled", function (e) {
              return or(e, a.props);
            }),
            wt(Ct(a), "isExcluded", function (e) {
              return sr(e, a.props);
            }),
            wt(Ct(a), "updateFocusOnPaginate", function (e) {
              var t = function () {
                this.YEAR_REFS[e].current.focus();
              }.bind(Ct(a));
              window.requestAnimationFrame(t);
            }),
            wt(Ct(a), "handleYearClick", function (e, t) {
              a.props.onDayClick && a.props.onDayClick(e, t);
            }),
            wt(Ct(a), "handleYearNavigation", function (e, t) {
              var r = a.props,
                n = r.date,
                o = r.yearItemNumber,
                s = _r(n, o).startPeriod;
              a.isDisabled(t) ||
                a.isExcluded(t) ||
                (a.props.setPreSelection(t),
                e - s == -1
                  ? a.updateFocusOnPaginate(o - 1)
                  : e - s === o
                  ? a.updateFocusOnPaginate(0)
                  : a.YEAR_REFS[e - s].current.focus());
            }),
            wt(Ct(a), "isSameDay", function (e, t) {
              return Jt(e, t);
            }),
            wt(Ct(a), "isCurrentYear", function (e) {
              return e === Te.default(Tt());
            }),
            wt(Ct(a), "isKeyboardSelected", function (e) {
              var t = Qt(Be.default(a.props.date, e));
              return (
                !a.props.disabledKeyboardNavigation &&
                !a.props.inline &&
                !Jt(t, Qt(a.props.selected)) &&
                Jt(t, Qt(a.props.preSelection))
              );
            }),
            wt(Ct(a), "onYearClick", function (e, t) {
              var r = a.props.date;
              a.handleYearClick(Qt(Be.default(r, t)), e);
            }),
            wt(Ct(a), "onYearKeyDown", function (e, t) {
              var r = e.key;
              if (!a.props.disabledKeyboardNavigation)
                switch (r) {
                  case "Enter":
                    a.onYearClick(e, t),
                      a.props.setPreSelection(a.props.selected);
                    break;
                  case "ArrowRight":
                    a.handleYearNavigation(
                      t + 1,
                      ke.default(a.props.preSelection, 1)
                    );
                    break;
                  case "ArrowLeft":
                    a.handleYearNavigation(
                      t - 1,
                      _e.default(a.props.preSelection, 1)
                    );
                }
            }),
            wt(Ct(a), "getYearClassNames", function (e) {
              var t = a.props,
                r = t.minDate,
                n = t.maxDate,
                o = t.selected;
              return ue.default("react-datepicker__year-text", {
                "react-datepicker__year-text--selected": e === Te.default(o),
                "react-datepicker__year-text--disabled":
                  (r || n) && dr(e, a.props),
                "react-datepicker__year-text--keyboard-selected":
                  a.isKeyboardSelected(e),
                "react-datepicker__year-text--today": a.isCurrentYear(e),
              });
            }),
            wt(Ct(a), "getYearTabIndex", function (e) {
              return a.props.disabledKeyboardNavigation
                ? "-1"
                : e === Te.default(a.props.preSelection)
                ? "0"
                : "-1";
            }),
            a
          );
        }
        return (
          vt(r, [
            {
              key: "render",
              value: function () {
                for (
                  var e = this,
                    t = [],
                    r = this.props,
                    a = _r(r.date, r.yearItemNumber),
                    n = a.startPeriod,
                    o = a.endPeriod,
                    s = function (r) {
                      t.push(
                        ce.default.createElement(
                          "div",
                          {
                            ref: e.YEAR_REFS[r - n],
                            onClick: function (t) {
                              e.onYearClick(t, r);
                            },
                            onKeyDown: function (t) {
                              e.onYearKeyDown(t, r);
                            },
                            tabIndex: e.getYearTabIndex(r),
                            className: e.getYearClassNames(r),
                            key: r,
                            "aria-current": e.isCurrentYear(r)
                              ? "date"
                              : void 0,
                          },
                          r
                        )
                      );
                    },
                    i = n;
                  i <= o;
                  i++
                )
                  s(i);
                return ce.default.createElement(
                  "div",
                  { className: "react-datepicker__year" },
                  ce.default.createElement(
                    "div",
                    { className: "react-datepicker__year-wrapper" },
                    t
                  )
                );
              },
            },
          ]),
          r
        );
      })(ce.default.Component),
      Hr = (function (e) {
        kt(r, e);
        var t = Mt(r);
        function r(e) {
          var a;
          return (
            yt(this, r),
            wt(Ct((a = t.call(this, e))), "onTimeChange", function (e) {
              a.setState({ time: e });
              var t = new Date();
              t.setHours(e.split(":")[0]),
                t.setMinutes(e.split(":")[1]),
                a.props.onChange(t);
            }),
            wt(Ct(a), "renderTimeInput", function () {
              var e = a.state.time,
                t = a.props,
                r = t.date,
                n = t.timeString,
                o = t.customTimeInput;
              return o
                ? ce.default.cloneElement(o, {
                    date: r,
                    value: e,
                    onChange: a.onTimeChange,
                  })
                : ce.default.createElement("input", {
                    type: "time",
                    className: "react-datepicker-time__input",
                    placeholder: "Time",
                    name: "time-input",
                    required: !0,
                    value: e,
                    onChange: function (e) {
                      a.onTimeChange(e.target.value || n);
                    },
                  });
            }),
            (a.state = { time: a.props.timeString }),
            a
          );
        }
        return (
          vt(
            r,
            [
              {
                key: "render",
                value: function () {
                  return ce.default.createElement(
                    "div",
                    { className: "react-datepicker__input-time-container" },
                    ce.default.createElement(
                      "div",
                      { className: "react-datepicker-time__caption" },
                      this.props.timeInputLabel
                    ),
                    ce.default.createElement(
                      "div",
                      { className: "react-datepicker-time__input-container" },
                      ce.default.createElement(
                        "div",
                        { className: "react-datepicker-time__input" },
                        this.renderTimeInput()
                      )
                    )
                  );
                },
              },
            ],
            [
              {
                key: "getDerivedStateFromProps",
                value: function (e, t) {
                  return e.timeString !== t.time
                    ? { time: e.timeString }
                    : null;
                },
              },
            ]
          ),
          r
        );
      })(ce.default.Component);
    function jr(e) {
      var t = e.className,
        r = e.children,
        a = e.showPopperArrow,
        n = e.arrowProps,
        o = void 0 === n ? {} : n;
      return ce.default.createElement(
        "div",
        { className: t },
        a &&
          ce.default.createElement(
            "div",
            gt({ className: "react-datepicker__triangle" }, o)
          ),
        r
      );
    }
    var Qr = [
        "react-datepicker__year-select",
        "react-datepicker__month-select",
        "react-datepicker__month-year-select",
      ],
      Vr = (function (e) {
        kt(r, e);
        var t = Mt(r);
        function r(e) {
          var a;
          return (
            yt(this, r),
            wt(Ct((a = t.call(this, e))), "handleClickOutside", function (e) {
              a.props.onClickOutside(e);
            }),
            wt(Ct(a), "setClickOutsideRef", function () {
              return a.containerRef.current;
            }),
            wt(Ct(a), "handleDropdownFocus", function (e) {
              (function () {
                var e = (
                  (arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {}
                  ).className || ""
                ).split(/\s+/);
                return Qr.some(function (t) {
                  return e.indexOf(t) >= 0;
                });
              })(e.target) && a.props.onDropdownFocus();
            }),
            wt(Ct(a), "getDateInView", function () {
              var e = a.props,
                t = e.preSelection,
                r = e.selected,
                n = e.openToDate,
                o = gr(a.props),
                s = kr(a.props),
                i = Tt(),
                p = n || r || t;
              return (
                p || (o && ot.default(i, o) ? o : s && nt.default(i, s) ? s : i)
              );
            }),
            wt(Ct(a), "increaseMonth", function () {
              a.setState(
                function (e) {
                  var t = e.date;
                  return { date: ge.default(t, 1) };
                },
                function () {
                  return a.handleMonthChange(a.state.date);
                }
              );
            }),
            wt(Ct(a), "decreaseMonth", function () {
              a.setState(
                function (e) {
                  var t = e.date;
                  return { date: Ce.default(t, 1) };
                },
                function () {
                  return a.handleMonthChange(a.state.date);
                }
              );
            }),
            wt(Ct(a), "handleDayClick", function (e, t, r) {
              a.props.onSelect(e, t, r),
                a.props.setPreSelection && a.props.setPreSelection(e);
            }),
            wt(Ct(a), "handleDayMouseEnter", function (e) {
              a.setState({ selectingDate: e }),
                a.props.onDayMouseEnter && a.props.onDayMouseEnter(e);
            }),
            wt(Ct(a), "handleMonthMouseLeave", function () {
              a.setState({ selectingDate: null }),
                a.props.onMonthMouseLeave && a.props.onMonthMouseLeave();
            }),
            wt(Ct(a), "handleYearChange", function (e) {
              a.props.onYearChange && a.props.onYearChange(e),
                a.props.adjustDateOnChange &&
                  (a.props.onSelect && a.props.onSelect(e),
                  a.props.setOpen && a.props.setOpen(!0)),
                a.props.setPreSelection && a.props.setPreSelection(e);
            }),
            wt(Ct(a), "handleMonthChange", function (e) {
              a.props.onMonthChange && a.props.onMonthChange(e),
                a.props.adjustDateOnChange &&
                  (a.props.onSelect && a.props.onSelect(e),
                  a.props.setOpen && a.props.setOpen(!0)),
                a.props.setPreSelection && a.props.setPreSelection(e);
            }),
            wt(Ct(a), "handleMonthYearChange", function (e) {
              a.handleYearChange(e), a.handleMonthChange(e);
            }),
            wt(Ct(a), "changeYear", function (e) {
              a.setState(
                function (t) {
                  var r = t.date;
                  return { date: Be.default(r, e) };
                },
                function () {
                  return a.handleYearChange(a.state.date);
                }
              );
            }),
            wt(Ct(a), "changeMonth", function (e) {
              a.setState(
                function (t) {
                  var r = t.date;
                  return { date: qe.default(r, e) };
                },
                function () {
                  return a.handleMonthChange(a.state.date);
                }
              );
            }),
            wt(Ct(a), "changeMonthYear", function (e) {
              a.setState(
                function (t) {
                  var r = t.date;
                  return {
                    date: Be.default(
                      qe.default(r, Ye.default(e)),
                      Te.default(e)
                    ),
                  };
                },
                function () {
                  return a.handleMonthYearChange(a.state.date);
                }
              );
            }),
            wt(Ct(a), "header", function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : a.state.date,
                t = Ht(e, a.props.locale, a.props.calendarStartDay),
                r = [];
              return (
                a.props.showWeekNumbers &&
                  r.push(
                    ce.default.createElement(
                      "div",
                      { key: "W", className: "react-datepicker__day-name" },
                      a.props.weekLabel || "#"
                    )
                  ),
                r.concat(
                  [0, 1, 2, 3, 4, 5, 6].map(function (e) {
                    var r = ve.default(t, e),
                      n = a.formatWeekday(r, a.props.locale),
                      o = a.props.weekDayClassName
                        ? a.props.weekDayClassName(r)
                        : void 0;
                    return ce.default.createElement(
                      "div",
                      {
                        key: e,
                        className: ue.default("react-datepicker__day-name", o),
                      },
                      n
                    );
                  })
                )
              );
            }),
            wt(Ct(a), "formatWeekday", function (e, t) {
              return a.props.formatWeekDay
                ? (function (e, t, r) {
                    return "function" == typeof t ? t(e, r) : Ft(e, "EEEE", r);
                  })(e, a.props.formatWeekDay, t)
                : a.props.useWeekdaysShort
                ? (function (e, t) {
                    return Ft(e, "EEE", t);
                  })(e, t)
                : (function (e, t) {
                    return Ft(e, "EEEEEE", t);
                  })(e, t);
            }),
            wt(Ct(a), "decreaseYear", function () {
              a.setState(
                function (e) {
                  var t = e.date;
                  return {
                    date: _e.default(
                      t,
                      a.props.showYearPicker ? a.props.yearItemNumber : 1
                    ),
                  };
                },
                function () {
                  return a.handleYearChange(a.state.date);
                }
              );
            }),
            wt(Ct(a), "renderPreviousButton", function () {
              if (!a.props.renderCustomHeader) {
                var e;
                switch (!0) {
                  case a.props.showMonthYearPicker:
                    e = vr(a.state.date, a.props);
                    break;
                  case a.props.showYearPicker:
                    e = (function (e) {
                      var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                        r = t.minDate,
                        a = t.yearItemNumber,
                        n = void 0 === a ? Yt : a,
                        o = _r(Qt(_e.default(e, n)), n).endPeriod,
                        s = r && Te.default(r);
                      return (s && s > o) || !1;
                    })(a.state.date, a.props);
                    break;
                  default:
                    e = yr(a.state.date, a.props);
                }
                if (
                  (a.props.forceShowMonthNavigation ||
                    a.props.showDisabledMonthNavigation ||
                    !e) &&
                  !a.props.showTimeSelectOnly
                ) {
                  var t = [
                      "react-datepicker__navigation",
                      "react-datepicker__navigation--previous",
                    ],
                    r = a.decreaseMonth;
                  (a.props.showMonthYearPicker ||
                    a.props.showQuarterYearPicker ||
                    a.props.showYearPicker) &&
                    (r = a.decreaseYear),
                    e &&
                      a.props.showDisabledMonthNavigation &&
                      (t.push(
                        "react-datepicker__navigation--previous--disabled"
                      ),
                      (r = null));
                  var n =
                      a.props.showMonthYearPicker ||
                      a.props.showQuarterYearPicker ||
                      a.props.showYearPicker,
                    o = a.props,
                    s = o.previousMonthButtonLabel,
                    i = o.previousYearButtonLabel,
                    p = a.props,
                    l = p.previousMonthAriaLabel,
                    d =
                      void 0 === l
                        ? "string" == typeof s
                          ? s
                          : "Previous Month"
                        : l,
                    c = p.previousYearAriaLabel,
                    u =
                      void 0 === c
                        ? "string" == typeof i
                          ? i
                          : "Previous Year"
                        : c;
                  return ce.default.createElement(
                    "button",
                    {
                      type: "button",
                      className: t.join(" "),
                      onClick: r,
                      onKeyDown: a.props.handleOnKeyDown,
                      "aria-label": n ? u : d,
                    },
                    ce.default.createElement(
                      "span",
                      {
                        className: [
                          "react-datepicker__navigation-icon",
                          "react-datepicker__navigation-icon--previous",
                        ].join(" "),
                      },
                      n
                        ? a.props.previousYearButtonLabel
                        : a.props.previousMonthButtonLabel
                    )
                  );
                }
              }
            }),
            wt(Ct(a), "increaseYear", function () {
              a.setState(
                function (e) {
                  var t = e.date;
                  return {
                    date: ke.default(
                      t,
                      a.props.showYearPicker ? a.props.yearItemNumber : 1
                    ),
                  };
                },
                function () {
                  return a.handleYearChange(a.state.date);
                }
              );
            }),
            wt(Ct(a), "renderNextButton", function () {
              if (!a.props.renderCustomHeader) {
                var e;
                switch (!0) {
                  case a.props.showMonthYearPicker:
                    e = wr(a.state.date, a.props);
                    break;
                  case a.props.showYearPicker:
                    e = (function (e) {
                      var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                        r = t.maxDate,
                        a = t.yearItemNumber,
                        n = void 0 === a ? Yt : a,
                        o = _r(ke.default(e, n), n).startPeriod,
                        s = r && Te.default(r);
                      return (s && s < o) || !1;
                    })(a.state.date, a.props);
                    break;
                  default:
                    e = Dr(a.state.date, a.props);
                }
                if (
                  (a.props.forceShowMonthNavigation ||
                    a.props.showDisabledMonthNavigation ||
                    !e) &&
                  !a.props.showTimeSelectOnly
                ) {
                  var t = [
                    "react-datepicker__navigation",
                    "react-datepicker__navigation--next",
                  ];
                  a.props.showTimeSelect &&
                    t.push("react-datepicker__navigation--next--with-time"),
                    a.props.todayButton &&
                      t.push(
                        "react-datepicker__navigation--next--with-today-button"
                      );
                  var r = a.increaseMonth;
                  (a.props.showMonthYearPicker ||
                    a.props.showQuarterYearPicker ||
                    a.props.showYearPicker) &&
                    (r = a.increaseYear),
                    e &&
                      a.props.showDisabledMonthNavigation &&
                      (t.push("react-datepicker__navigation--next--disabled"),
                      (r = null));
                  var n =
                      a.props.showMonthYearPicker ||
                      a.props.showQuarterYearPicker ||
                      a.props.showYearPicker,
                    o = a.props,
                    s = o.nextMonthButtonLabel,
                    i = o.nextYearButtonLabel,
                    p = a.props,
                    l = p.nextMonthAriaLabel,
                    d =
                      void 0 === l
                        ? "string" == typeof s
                          ? s
                          : "Next Month"
                        : l,
                    c = p.nextYearAriaLabel,
                    u =
                      void 0 === c
                        ? "string" == typeof i
                          ? i
                          : "Next Year"
                        : c;
                  return ce.default.createElement(
                    "button",
                    {
                      type: "button",
                      className: t.join(" "),
                      onClick: r,
                      onKeyDown: a.props.handleOnKeyDown,
                      "aria-label": n ? u : d,
                    },
                    ce.default.createElement(
                      "span",
                      {
                        className: [
                          "react-datepicker__navigation-icon",
                          "react-datepicker__navigation-icon--next",
                        ].join(" "),
                      },
                      n
                        ? a.props.nextYearButtonLabel
                        : a.props.nextMonthButtonLabel
                    )
                  );
                }
              }
            }),
            wt(Ct(a), "renderCurrentMonth", function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : a.state.date,
                t = ["react-datepicker__current-month"];
              return (
                a.props.showYearDropdown &&
                  t.push("react-datepicker__current-month--hasYearDropdown"),
                a.props.showMonthDropdown &&
                  t.push("react-datepicker__current-month--hasMonthDropdown"),
                a.props.showMonthYearDropdown &&
                  t.push(
                    "react-datepicker__current-month--hasMonthYearDropdown"
                  ),
                ce.default.createElement(
                  "div",
                  { className: t.join(" ") },
                  Ft(e, a.props.dateFormat, a.props.locale)
                )
              );
            }),
            wt(Ct(a), "renderYearDropdown", function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (a.props.showYearDropdown && !e)
                return ce.default.createElement(Nr, {
                  adjustDateOnChange: a.props.adjustDateOnChange,
                  date: a.state.date,
                  onSelect: a.props.onSelect,
                  setOpen: a.props.setOpen,
                  dropdownMode: a.props.dropdownMode,
                  onChange: a.changeYear,
                  minDate: a.props.minDate,
                  maxDate: a.props.maxDate,
                  year: Te.default(a.state.date),
                  scrollableYearDropdown: a.props.scrollableYearDropdown,
                  yearDropdownItemNumber: a.props.yearDropdownItemNumber,
                });
            }),
            wt(Ct(a), "renderMonthDropdown", function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (a.props.showMonthDropdown && !e)
                return ce.default.createElement(Yr, {
                  dropdownMode: a.props.dropdownMode,
                  locale: a.props.locale,
                  onChange: a.changeMonth,
                  month: Ye.default(a.state.date),
                  useShortMonthInDropdown: a.props.useShortMonthInDropdown,
                });
            }),
            wt(Ct(a), "renderMonthYearDropdown", function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              if (a.props.showMonthYearDropdown && !e)
                return ce.default.createElement(Rr, {
                  dropdownMode: a.props.dropdownMode,
                  locale: a.props.locale,
                  dateFormat: a.props.dateFormat,
                  onChange: a.changeMonthYear,
                  minDate: a.props.minDate,
                  maxDate: a.props.maxDate,
                  date: a.state.date,
                  scrollableMonthYearDropdown:
                    a.props.scrollableMonthYearDropdown,
                });
            }),
            wt(Ct(a), "handleTodayButtonClick", function (e) {
              a.props.onSelect(Ut(), e),
                a.props.setPreSelection && a.props.setPreSelection(Ut());
            }),
            wt(Ct(a), "renderTodayButton", function () {
              if (a.props.todayButton && !a.props.showTimeSelectOnly)
                return ce.default.createElement(
                  "div",
                  {
                    className: "react-datepicker__today-button",
                    onClick: function (e) {
                      return a.handleTodayButtonClick(e);
                    },
                  },
                  a.props.todayButton
                );
            }),
            wt(Ct(a), "renderDefaultHeader", function (e) {
              var t = e.monthDate,
                r = e.i;
              return ce.default.createElement(
                "div",
                {
                  className: "react-datepicker__header ".concat(
                    a.props.showTimeSelect
                      ? "react-datepicker__header--has-time-select"
                      : ""
                  ),
                },
                a.renderCurrentMonth(t),
                ce.default.createElement(
                  "div",
                  {
                    className:
                      "react-datepicker__header__dropdown react-datepicker__header__dropdown--".concat(
                        a.props.dropdownMode
                      ),
                    onFocus: a.handleDropdownFocus,
                  },
                  a.renderMonthDropdown(0 !== r),
                  a.renderMonthYearDropdown(0 !== r),
                  a.renderYearDropdown(0 !== r)
                ),
                ce.default.createElement(
                  "div",
                  { className: "react-datepicker__day-names" },
                  a.header(t)
                )
              );
            }),
            wt(Ct(a), "renderCustomHeader", function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                t = e.monthDate,
                r = e.i;
              if (
                (a.props.showTimeSelect && !a.state.monthContainer) ||
                a.props.showTimeSelectOnly
              )
                return null;
              var n = yr(a.state.date, a.props),
                o = Dr(a.state.date, a.props),
                s = vr(a.state.date, a.props),
                i = wr(a.state.date, a.props),
                p =
                  !a.props.showMonthYearPicker &&
                  !a.props.showQuarterYearPicker &&
                  !a.props.showYearPicker;
              return ce.default.createElement(
                "div",
                {
                  className:
                    "react-datepicker__header react-datepicker__header--custom",
                  onFocus: a.props.onDropdownFocus,
                },
                a.props.renderCustomHeader(
                  ht(
                    ht({}, a.state),
                    {},
                    {
                      customHeaderCount: r,
                      monthDate: t,
                      changeMonth: a.changeMonth,
                      changeYear: a.changeYear,
                      decreaseMonth: a.decreaseMonth,
                      increaseMonth: a.increaseMonth,
                      decreaseYear: a.decreaseYear,
                      increaseYear: a.increaseYear,
                      prevMonthButtonDisabled: n,
                      nextMonthButtonDisabled: o,
                      prevYearButtonDisabled: s,
                      nextYearButtonDisabled: i,
                    }
                  )
                ),
                p &&
                  ce.default.createElement(
                    "div",
                    { className: "react-datepicker__day-names" },
                    a.header(t)
                  )
              );
            }),
            wt(Ct(a), "renderYearHeader", function () {
              var e = a.state.date,
                t = a.props,
                r = t.showYearPicker,
                n = _r(e, t.yearItemNumber),
                o = n.startPeriod,
                s = n.endPeriod;
              return ce.default.createElement(
                "div",
                {
                  className:
                    "react-datepicker__header react-datepicker-year-header",
                },
                r ? "".concat(o, " - ").concat(s) : Te.default(e)
              );
            }),
            wt(Ct(a), "renderHeader", function (e) {
              switch (!0) {
                case void 0 !== a.props.renderCustomHeader:
                  return a.renderCustomHeader(e);
                case a.props.showMonthYearPicker ||
                  a.props.showQuarterYearPicker ||
                  a.props.showYearPicker:
                  return a.renderYearHeader(e);
                default:
                  return a.renderDefaultHeader(e);
              }
            }),
            wt(Ct(a), "renderMonths", function () {
              if (!a.props.showTimeSelectOnly && !a.props.showYearPicker) {
                for (
                  var e = [],
                    t = a.props.showPreviousMonths
                      ? a.props.monthsShown - 1
                      : 0,
                    r = Ce.default(a.state.date, t),
                    n = 0;
                  n < a.props.monthsShown;
                  ++n
                ) {
                  var o = n - a.props.monthSelectedIn,
                    s = ge.default(r, o),
                    i = "month-".concat(n),
                    p = n < a.props.monthsShown - 1,
                    l = n > 0;
                  e.push(
                    ce.default.createElement(
                      "div",
                      {
                        key: i,
                        ref: function (e) {
                          a.monthContainer = e;
                        },
                        className: "react-datepicker__month-container",
                      },
                      a.renderHeader({ monthDate: s, i: n }),
                      ce.default.createElement(Wr, {
                        chooseDayAriaLabelPrefix:
                          a.props.chooseDayAriaLabelPrefix,
                        disabledDayAriaLabelPrefix:
                          a.props.disabledDayAriaLabelPrefix,
                        weekAriaLabelPrefix: a.props.weekAriaLabelPrefix,
                        ariaLabelPrefix: a.props.monthAriaLabelPrefix,
                        onChange: a.changeMonthYear,
                        day: s,
                        dayClassName: a.props.dayClassName,
                        calendarStartDay: a.props.calendarStartDay,
                        monthClassName: a.props.monthClassName,
                        onDayClick: a.handleDayClick,
                        handleOnKeyDown: a.props.handleOnDayKeyDown,
                        onDayMouseEnter: a.handleDayMouseEnter,
                        onMouseLeave: a.handleMonthMouseLeave,
                        onWeekSelect: a.props.onWeekSelect,
                        orderInDisplay: n,
                        formatWeekNumber: a.props.formatWeekNumber,
                        locale: a.props.locale,
                        minDate: a.props.minDate,
                        maxDate: a.props.maxDate,
                        excludeDates: a.props.excludeDates,
                        excludeDateIntervals: a.props.excludeDateIntervals,
                        highlightDates: a.props.highlightDates,
                        selectingDate: a.state.selectingDate,
                        includeDates: a.props.includeDates,
                        includeDateIntervals: a.props.includeDateIntervals,
                        inline: a.props.inline,
                        shouldFocusDayInline: a.props.shouldFocusDayInline,
                        fixedHeight: a.props.fixedHeight,
                        filterDate: a.props.filterDate,
                        preSelection: a.props.preSelection,
                        setPreSelection: a.props.setPreSelection,
                        selected: a.props.selected,
                        selectsStart: a.props.selectsStart,
                        selectsEnd: a.props.selectsEnd,
                        selectsRange: a.props.selectsRange,
                        selectsDisabledDaysInRange:
                          a.props.selectsDisabledDaysInRange,
                        showWeekNumbers: a.props.showWeekNumbers,
                        startDate: a.props.startDate,
                        endDate: a.props.endDate,
                        peekNextMonth: a.props.peekNextMonth,
                        setOpen: a.props.setOpen,
                        shouldCloseOnSelect: a.props.shouldCloseOnSelect,
                        renderDayContents: a.props.renderDayContents,
                        disabledKeyboardNavigation:
                          a.props.disabledKeyboardNavigation,
                        showMonthYearPicker: a.props.showMonthYearPicker,
                        showFullMonthYearPicker:
                          a.props.showFullMonthYearPicker,
                        showTwoColumnMonthYearPicker:
                          a.props.showTwoColumnMonthYearPicker,
                        showFourColumnMonthYearPicker:
                          a.props.showFourColumnMonthYearPicker,
                        showYearPicker: a.props.showYearPicker,
                        showQuarterYearPicker: a.props.showQuarterYearPicker,
                        isInputFocused: a.props.isInputFocused,
                        containerRef: a.containerRef,
                        monthShowsDuplicateDaysEnd: p,
                        monthShowsDuplicateDaysStart: l,
                      })
                    )
                  );
                }
                return e;
              }
            }),
            wt(Ct(a), "renderYears", function () {
              if (!a.props.showTimeSelectOnly)
                return a.props.showYearPicker
                  ? ce.default.createElement(
                      "div",
                      { className: "react-datepicker__year--container" },
                      a.renderHeader(),
                      ce.default.createElement(
                        Kr,
                        gt(
                          { onDayClick: a.handleDayClick, date: a.state.date },
                          a.props
                        )
                      )
                    )
                  : void 0;
            }),
            wt(Ct(a), "renderTimeSection", function () {
              if (
                a.props.showTimeSelect &&
                (a.state.monthContainer || a.props.showTimeSelectOnly)
              )
                return ce.default.createElement(Br, {
                  selected: a.props.selected,
                  openToDate: a.props.openToDate,
                  onChange: a.props.onTimeChange,
                  timeClassName: a.props.timeClassName,
                  format: a.props.timeFormat,
                  includeTimes: a.props.includeTimes,
                  intervals: a.props.timeIntervals,
                  minTime: a.props.minTime,
                  maxTime: a.props.maxTime,
                  excludeTimes: a.props.excludeTimes,
                  filterTime: a.props.filterTime,
                  timeCaption: a.props.timeCaption,
                  todayButton: a.props.todayButton,
                  showMonthDropdown: a.props.showMonthDropdown,
                  showMonthYearDropdown: a.props.showMonthYearDropdown,
                  showYearDropdown: a.props.showYearDropdown,
                  withPortal: a.props.withPortal,
                  monthRef: a.state.monthContainer,
                  injectTimes: a.props.injectTimes,
                  locale: a.props.locale,
                  handleOnKeyDown: a.props.handleOnKeyDown,
                  showTimeSelectOnly: a.props.showTimeSelectOnly,
                });
            }),
            wt(Ct(a), "renderInputTimeSection", function () {
              var e = new Date(a.props.selected),
                t =
                  Rt(e) && Boolean(a.props.selected)
                    ? ""
                        .concat(Cr(e.getHours()), ":")
                        .concat(Cr(e.getMinutes()))
                    : "";
              if (a.props.showTimeInput)
                return ce.default.createElement(Hr, {
                  date: e,
                  timeString: t,
                  timeInputLabel: a.props.timeInputLabel,
                  onChange: a.props.onTimeChange,
                  customTimeInput: a.props.customTimeInput,
                });
            }),
            wt(Ct(a), "renderChildren", function () {
              if (a.props.children)
                return ce.default.createElement(
                  "div",
                  { className: "react-datepicker__children-container" },
                  a.props.children
                );
            }),
            (a.containerRef = ce.default.createRef()),
            (a.state = {
              date: a.getDateInView(),
              selectingDate: null,
              monthContainer: null,
            }),
            a
          );
        }
        return (
          vt(
            r,
            [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this;
                  this.props.showTimeSelect &&
                    (this.assignMonthContainer = void e.setState({
                      monthContainer: e.monthContainer,
                    }));
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  this.props.preSelection &&
                  !Jt(this.props.preSelection, e.preSelection)
                    ? this.setState({ date: this.props.preSelection })
                    : this.props.openToDate &&
                      !Jt(this.props.openToDate, e.openToDate) &&
                      this.setState({ date: this.props.openToDate });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props.container || jr;
                  return ce.default.createElement(
                    "div",
                    { ref: this.containerRef },
                    ce.default.createElement(
                      e,
                      {
                        className: ue.default(
                          "react-datepicker",
                          this.props.className,
                          {
                            "react-datepicker--time-only":
                              this.props.showTimeSelectOnly,
                          }
                        ),
                        showPopperArrow: this.props.showPopperArrow,
                        arrowProps: this.props.arrowProps,
                      },
                      this.renderPreviousButton(),
                      this.renderNextButton(),
                      this.renderMonths(),
                      this.renderYears(),
                      this.renderTodayButton(),
                      this.renderTimeSection(),
                      this.renderInputTimeSection(),
                      this.renderChildren()
                    )
                  );
                },
              },
            ],
            [
              {
                key: "defaultProps",
                get: function () {
                  return {
                    onDropdownFocus: function () {},
                    monthsShown: 1,
                    monthSelectedIn: 0,
                    forceShowMonthNavigation: !1,
                    timeCaption: "Time",
                    previousYearButtonLabel: "Previous Year",
                    nextYearButtonLabel: "Next Year",
                    previousMonthButtonLabel: "Previous Month",
                    nextMonthButtonLabel: "Next Month",
                    customTimeInput: null,
                    yearItemNumber: Yt,
                  };
                },
              },
            ]
          ),
          r
        );
      })(ce.default.Component),
      Ur = (function (e) {
        kt(r, e);
        var t = Mt(r);
        function r(e) {
          var a;
          return (
            yt(this, r),
            ((a = t.call(this, e)).el = document.createElement("div")),
            a
          );
        }
        return (
          vt(r, [
            {
              key: "componentDidMount",
              value: function () {
                (this.portalRoot = (
                  this.props.portalHost || document
                ).getElementById(this.props.portalId)),
                  this.portalRoot ||
                    ((this.portalRoot = document.createElement("div")),
                    this.portalRoot.setAttribute("id", this.props.portalId),
                    (this.props.portalHost || document.body).appendChild(
                      this.portalRoot
                    )),
                  this.portalRoot.appendChild(this.el);
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.portalRoot.removeChild(this.el);
              },
            },
            {
              key: "render",
              value: function () {
                return ct.default.createPortal(this.props.children, this.el);
              },
            },
          ]),
          r
        );
      })(ce.default.Component),
      $r = function (e) {
        return !e.disabled && -1 !== e.tabIndex;
      },
      zr = (function (e) {
        kt(r, e);
        var t = Mt(r);
        function r(e) {
          var a;
          return (
            yt(this, r),
            wt(Ct((a = t.call(this, e))), "getTabChildren", function () {
              return Array.prototype.slice
                .call(
                  a.tabLoopRef.current.querySelectorAll(
                    "[tabindex], a, button, input, select, textarea"
                  ),
                  1,
                  -1
                )
                .filter($r);
            }),
            wt(Ct(a), "handleFocusStart", function (e) {
              var t = a.getTabChildren();
              t && t.length > 1 && t[t.length - 1].focus();
            }),
            wt(Ct(a), "handleFocusEnd", function (e) {
              var t = a.getTabChildren();
              t && t.length > 1 && t[0].focus();
            }),
            (a.tabLoopRef = ce.default.createRef()),
            a
          );
        }
        return (
          vt(
            r,
            [
              {
                key: "render",
                value: function () {
                  return this.props.enableTabLoop
                    ? ce.default.createElement(
                        "div",
                        {
                          className: "react-datepicker__tab-loop",
                          ref: this.tabLoopRef,
                        },
                        ce.default.createElement("div", {
                          className: "react-datepicker__tab-loop__start",
                          tabIndex: "0",
                          onFocus: this.handleFocusStart,
                        }),
                        this.props.children,
                        ce.default.createElement("div", {
                          className: "react-datepicker__tab-loop__end",
                          tabIndex: "0",
                          onFocus: this.handleFocusEnd,
                        })
                      )
                    : this.props.children;
                },
              },
            ],
            [
              {
                key: "defaultProps",
                get: function () {
                  return { enableTabLoop: !0 };
                },
              },
            ]
          ),
          r
        );
      })(ce.default.Component),
      Gr = (function (e) {
        kt(r, e);
        var t = Mt(r);
        function r() {
          return yt(this, r), t.apply(this, arguments);
        }
        return (
          vt(
            r,
            [
              {
                key: "render",
                value: function () {
                  var e,
                    t = this.props,
                    r = t.className,
                    a = t.wrapperClassName,
                    n = t.hidePopper,
                    o = t.popperComponent,
                    s = t.popperModifiers,
                    i = t.popperPlacement,
                    p = t.popperProps,
                    l = t.targetComponent,
                    d = t.enableTabLoop,
                    c = t.popperOnKeyDown,
                    u = t.portalId,
                    f = t.portalHost;
                  if (!n) {
                    var h = ue.default("react-datepicker-popper", r);
                    e = ce.default.createElement(
                      pe.Popper,
                      gt({ modifiers: s, placement: i }, p),
                      function (e) {
                        var t = e.ref,
                          r = e.style,
                          a = e.placement,
                          n = e.arrowProps;
                        return ce.default.createElement(
                          zr,
                          { enableTabLoop: d },
                          ce.default.createElement(
                            "div",
                            {
                              ref: t,
                              style: r,
                              className: h,
                              "data-placement": a,
                              onKeyDown: c,
                            },
                            ce.default.cloneElement(o, { arrowProps: n })
                          )
                        );
                      }
                    );
                  }
                  this.props.popperContainer &&
                    (e = ce.default.createElement(
                      this.props.popperContainer,
                      {},
                      e
                    )),
                    u &&
                      !n &&
                      (e = ce.default.createElement(
                        Ur,
                        { portalId: u, portalHost: f },
                        e
                      ));
                  var m = ue.default("react-datepicker-wrapper", a);
                  return ce.default.createElement(
                    pe.Manager,
                    { className: "react-datepicker-manager" },
                    ce.default.createElement(pe.Reference, null, function (e) {
                      var t = e.ref;
                      return ce.default.createElement(
                        "div",
                        { ref: t, className: m },
                        l
                      );
                    }),
                    e
                  );
                },
              },
            ],
            [
              {
                key: "defaultProps",
                get: function () {
                  return {
                    hidePopper: !0,
                    popperModifiers: [],
                    popperProps: {},
                    popperPlacement: "bottom-start",
                  };
                },
              },
            ]
          ),
          r
        );
      })(ce.default.Component),
      Jr = "react-datepicker-ignore-onclickoutside",
      Xr = dt.default(Vr);
    var Zr = "Date input not valid.",
      ea = (function (e) {
        kt(r, e);
        var t = Mt(r);
        function r(e) {
          var a;
          return (
            yt(this, r),
            wt(Ct((a = t.call(this, e))), "getPreSelection", function () {
              return a.props.openToDate
                ? a.props.openToDate
                : a.props.selectsEnd && a.props.startDate
                ? a.props.startDate
                : a.props.selectsStart && a.props.endDate
                ? a.props.endDate
                : Tt();
            }),
            wt(Ct(a), "calcInitialState", function () {
              var e,
                t = a.getPreSelection(),
                r = gr(a.props),
                n = kr(a.props),
                o =
                  r && ot.default(t, Ue.default(r))
                    ? r
                    : n && nt.default(t, Xe.default(n))
                    ? n
                    : t;
              return {
                open: a.props.startOpen || !1,
                preventFocus: !1,
                preSelection:
                  null !==
                    (e = a.props.selectsRange
                      ? a.props.startDate
                      : a.props.selected) && void 0 !== e
                    ? e
                    : o,
                highlightDates: br(a.props.highlightDates),
                focused: !1,
                shouldFocusDayInline: !1,
              };
            }),
            wt(Ct(a), "clearPreventFocusTimeout", function () {
              a.preventFocusTimeout && clearTimeout(a.preventFocusTimeout);
            }),
            wt(Ct(a), "setFocus", function () {
              a.input && a.input.focus && a.input.focus({ preventScroll: !0 });
            }),
            wt(Ct(a), "setBlur", function () {
              a.input && a.input.blur && a.input.blur(), a.cancelFocusInput();
            }),
            wt(Ct(a), "setOpen", function (e) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              a.setState(
                {
                  open: e,
                  preSelection:
                    e && a.state.open
                      ? a.state.preSelection
                      : a.calcInitialState().preSelection,
                  lastPreSelectChange: ra,
                },
                function () {
                  e ||
                    a.setState(
                      function (e) {
                        return { focused: !!t && e.focused };
                      },
                      function () {
                        !t && a.setBlur(), a.setState({ inputValue: null });
                      }
                    );
                }
              );
            }),
            wt(Ct(a), "inputOk", function () {
              return fe.default(a.state.preSelection);
            }),
            wt(Ct(a), "isCalendarOpen", function () {
              return void 0 === a.props.open
                ? a.state.open && !a.props.disabled && !a.props.readOnly
                : a.props.open;
            }),
            wt(Ct(a), "handleFocus", function (e) {
              a.state.preventFocus ||
                (a.props.onFocus(e),
                a.props.preventOpenOnFocus ||
                  a.props.readOnly ||
                  a.setOpen(!0)),
                a.setState({ focused: !0 });
            }),
            wt(Ct(a), "cancelFocusInput", function () {
              clearTimeout(a.inputFocusTimeout), (a.inputFocusTimeout = null);
            }),
            wt(Ct(a), "deferFocusInput", function () {
              a.cancelFocusInput(),
                (a.inputFocusTimeout = setTimeout(function () {
                  return a.setFocus();
                }, 1));
            }),
            wt(Ct(a), "handleDropdownFocus", function () {
              a.cancelFocusInput();
            }),
            wt(Ct(a), "handleBlur", function (e) {
              (!a.state.open || a.props.withPortal || a.props.showTimeInput) &&
                a.props.onBlur(e),
                a.setState({ focused: !1 });
            }),
            wt(Ct(a), "handleCalendarClickOutside", function (e) {
              a.props.inline || a.setOpen(!1),
                a.props.onClickOutside(e),
                a.props.withPortal && e.preventDefault();
            }),
            wt(Ct(a), "handleChange", function () {
              for (
                var e = arguments.length, t = new Array(e), r = 0;
                r < e;
                r++
              )
                t[r] = arguments[r];
              var n = t[0];
              if (
                !a.props.onChangeRaw ||
                (a.props.onChangeRaw.apply(Ct(a), t),
                "function" == typeof n.isDefaultPrevented &&
                  !n.isDefaultPrevented())
              ) {
                a.setState({
                  inputValue: n.target.value,
                  lastPreSelectChange: ta,
                });
                var o = Lt(
                  n.target.value,
                  a.props.dateFormat,
                  a.props.locale,
                  a.props.strictParsing,
                  a.props.minDate
                );
                a.props.showTimeSelectOnly &&
                  !Jt(o, a.props.selected) &&
                  (o = ut.default(a.props.selected, {
                    hours: Ee.default(o),
                    minutes: Pe.default(o),
                    seconds: Me.default(o),
                  })),
                  (!o && n.target.value) || a.setSelected(o, n, !0);
              }
            }),
            wt(Ct(a), "handleSelect", function (e, t, r) {
              if (
                (a.setState({ preventFocus: !0 }, function () {
                  return (
                    (a.preventFocusTimeout = setTimeout(function () {
                      return a.setState({ preventFocus: !1 });
                    }, 50)),
                    a.preventFocusTimeout
                  );
                }),
                a.props.onChangeRaw && a.props.onChangeRaw(t),
                a.setSelected(e, t, !1, r),
                !a.props.shouldCloseOnSelect || a.props.showTimeSelect)
              )
                a.setPreSelection(e);
              else if (!a.props.inline) {
                a.props.selectsRange || a.setOpen(!1);
                var n = a.props,
                  o = n.startDate,
                  s = n.endDate;
                !o || s || ot.default(e, o) || a.setOpen(!1);
              }
            }),
            wt(Ct(a), "setSelected", function (e, t, r, n) {
              var o = e;
              if (null === o || !or(o, a.props)) {
                var s = a.props,
                  i = s.onChange,
                  p = s.selectsRange,
                  l = s.startDate,
                  d = s.endDate;
                if (!Xt(a.props.selected, o) || a.props.allowSameDay || p)
                  if (
                    (null !== o &&
                      (!a.props.selected ||
                        (r &&
                          (a.props.showTimeSelect ||
                            a.props.showTimeSelectOnly ||
                            a.props.showTimeInput)) ||
                        (o = qt(o, {
                          hour: Ee.default(a.props.selected),
                          minute: Pe.default(a.props.selected),
                          second: Me.default(a.props.selected),
                        })),
                      a.props.inline || a.setState({ preSelection: o }),
                      a.props.focusSelectedMonth ||
                        a.setState({ monthSelectedIn: n })),
                    p)
                  ) {
                    var c = l && !d,
                      u = l && d;
                    !l && !d
                      ? i([o, null], t)
                      : c &&
                        (ot.default(o, l) ? i([o, null], t) : i([l, o], t)),
                      u && i([o, null], t);
                  } else i(o, t);
                r || (a.props.onSelect(o, t), a.setState({ inputValue: null }));
              }
            }),
            wt(Ct(a), "setPreSelection", function (e) {
              var t = void 0 !== a.props.minDate,
                r = void 0 !== a.props.maxDate,
                n = !0;
              if (e) {
                var o = Ue.default(e);
                if (t && r) n = Zt(e, a.props.minDate, a.props.maxDate);
                else if (t) {
                  var s = Ue.default(a.props.minDate);
                  n = nt.default(e, s) || Xt(o, s);
                } else if (r) {
                  var i = Xe.default(a.props.maxDate);
                  n = ot.default(e, i) || Xt(o, i);
                }
              }
              n && a.setState({ preSelection: e });
            }),
            wt(Ct(a), "handleTimeChange", function (e) {
              var t = qt(
                a.props.selected ? a.props.selected : a.getPreSelection(),
                { hour: Ee.default(e), minute: Pe.default(e) }
              );
              a.setState({ preSelection: t }),
                a.props.onChange(t),
                a.props.shouldCloseOnSelect && a.setOpen(!1),
                a.props.showTimeInput && a.setOpen(!0),
                a.setState({ inputValue: null });
            }),
            wt(Ct(a), "onInputClick", function () {
              a.props.disabled || a.props.readOnly || a.setOpen(!0),
                a.props.onInputClick();
            }),
            wt(Ct(a), "onInputKeyDown", function (e) {
              a.props.onKeyDown(e);
              var t = e.key;
              if (
                a.state.open ||
                a.props.inline ||
                a.props.preventOpenOnFocus
              ) {
                if (a.state.open) {
                  if ("ArrowDown" === t || "ArrowUp" === t) {
                    e.preventDefault();
                    var r =
                      a.calendar.componentNode &&
                      a.calendar.componentNode.querySelector(
                        '.react-datepicker__day[tabindex="0"]'
                      );
                    return void (r && r.focus({ preventScroll: !0 }));
                  }
                  var n = Tt(a.state.preSelection);
                  "Enter" === t
                    ? (e.preventDefault(),
                      a.inputOk() && a.state.lastPreSelectChange === ra
                        ? (a.handleSelect(n, e),
                          !a.props.shouldCloseOnSelect && a.setPreSelection(n))
                        : a.setOpen(!1))
                    : "Tab" !== t || a.props.enableTabLoop
                    ? "Escape" === t && (e.preventDefault(), a.setOpen(!1))
                    : a.setOpen(!1),
                    a.inputOk() || a.props.onInputError({ code: 1, msg: Zr });
                }
              } else ("ArrowDown" !== t && "ArrowUp" !== t && "Enter" !== t) || a.onInputClick();
            }),
            wt(Ct(a), "onPortalKeyDown", function (e) {
              "Escape" === e.key &&
                (e.preventDefault(),
                a.setState({ preventFocus: !0 }, function () {
                  a.setOpen(!1),
                    setTimeout(function () {
                      a.setFocus(), a.setState({ preventFocus: !1 });
                    });
                }));
            }),
            wt(Ct(a), "onDayKeyDown", function (e) {
              a.props.onKeyDown(e);
              var t = e.key,
                r = Tt(a.state.preSelection);
              if ("Enter" === t)
                e.preventDefault(),
                  a.handleSelect(r, e),
                  !a.props.shouldCloseOnSelect && a.setPreSelection(r);
              else if ("Escape" === t)
                e.preventDefault(),
                  a.setOpen(!1),
                  a.inputOk() || a.props.onInputError({ code: 1, msg: Zr });
              else if ("Tab" !== t || a.props.enableTabLoop) {
                if (!a.props.disabledKeyboardNavigation) {
                  var n;
                  switch (t) {
                    case "ArrowLeft":
                      n = be.default(r, 1);
                      break;
                    case "ArrowRight":
                      n = ve.default(r, 1);
                      break;
                    case "ArrowUp":
                      n = Se.default(r, 1);
                      break;
                    case "ArrowDown":
                      n = we.default(r, 1);
                      break;
                    case "PageUp":
                      n = Ce.default(r, 1);
                      break;
                    case "PageDown":
                      n = ge.default(r, 1);
                      break;
                    case "Home":
                      n = _e.default(r, 1);
                      break;
                    case "End":
                      n = ke.default(r, 1);
                  }
                  if (!n)
                    return void (
                      a.props.onInputError &&
                      a.props.onInputError({ code: 1, msg: Zr })
                    );
                  if (
                    (e.preventDefault(),
                    a.setState({ lastPreSelectChange: ra }),
                    a.props.adjustDateOnChange && a.setSelected(n),
                    a.setPreSelection(n),
                    a.props.inline)
                  ) {
                    var o = Ye.default(r),
                      s = Ye.default(n),
                      i = Te.default(r),
                      p = Te.default(n);
                    o !== s || i !== p
                      ? a.setState({ shouldFocusDayInline: !0 })
                      : a.setState({ shouldFocusDayInline: !1 });
                  }
                }
              } else
                a.setOpen(!1),
                  a.inputOk() || a.props.onInputError({ code: 1, msg: Zr });
            }),
            wt(Ct(a), "onPopperKeyDown", function (e) {
              "Escape" === e.key &&
                (e.preventDefault(),
                a.setState({ preventFocus: !0 }, function () {
                  a.setOpen(!1),
                    setTimeout(function () {
                      a.setFocus(), a.setState({ preventFocus: !1 });
                    });
                }));
            }),
            wt(Ct(a), "onClearClick", function (e) {
              e && e.preventDefault && e.preventDefault(),
                a.props.selectsRange
                  ? a.props.onChange([null, null], e)
                  : a.props.onChange(null, e),
                a.setState({ inputValue: null });
            }),
            wt(Ct(a), "clear", function () {
              a.onClearClick();
            }),
            wt(Ct(a), "onScroll", function (e) {
              "boolean" == typeof a.props.closeOnScroll && a.props.closeOnScroll
                ? (e.target !== document &&
                    e.target !== document.documentElement &&
                    e.target !== document.body) ||
                  a.setOpen(!1)
                : "function" == typeof a.props.closeOnScroll &&
                  a.props.closeOnScroll(e) &&
                  a.setOpen(!1);
            }),
            wt(Ct(a), "renderCalendar", function () {
              return a.props.inline || a.isCalendarOpen()
                ? ce.default.createElement(
                    Xr,
                    {
                      ref: function (e) {
                        a.calendar = e;
                      },
                      locale: a.props.locale,
                      calendarStartDay: a.props.calendarStartDay,
                      chooseDayAriaLabelPrefix:
                        a.props.chooseDayAriaLabelPrefix,
                      disabledDayAriaLabelPrefix:
                        a.props.disabledDayAriaLabelPrefix,
                      weekAriaLabelPrefix: a.props.weekAriaLabelPrefix,
                      monthAriaLabelPrefix: a.props.monthAriaLabelPrefix,
                      adjustDateOnChange: a.props.adjustDateOnChange,
                      setOpen: a.setOpen,
                      shouldCloseOnSelect: a.props.shouldCloseOnSelect,
                      dateFormat: a.props.dateFormatCalendar,
                      useWeekdaysShort: a.props.useWeekdaysShort,
                      formatWeekDay: a.props.formatWeekDay,
                      dropdownMode: a.props.dropdownMode,
                      selected: a.props.selected,
                      preSelection: a.state.preSelection,
                      onSelect: a.handleSelect,
                      onWeekSelect: a.props.onWeekSelect,
                      openToDate: a.props.openToDate,
                      minDate: a.props.minDate,
                      maxDate: a.props.maxDate,
                      selectsStart: a.props.selectsStart,
                      selectsEnd: a.props.selectsEnd,
                      selectsRange: a.props.selectsRange,
                      startDate: a.props.startDate,
                      endDate: a.props.endDate,
                      excludeDates: a.props.excludeDates,
                      excludeDateIntervals: a.props.excludeDateIntervals,
                      filterDate: a.props.filterDate,
                      onClickOutside: a.handleCalendarClickOutside,
                      formatWeekNumber: a.props.formatWeekNumber,
                      highlightDates: a.state.highlightDates,
                      includeDates: a.props.includeDates,
                      includeDateIntervals: a.props.includeDateIntervals,
                      includeTimes: a.props.includeTimes,
                      injectTimes: a.props.injectTimes,
                      inline: a.props.inline,
                      shouldFocusDayInline: a.state.shouldFocusDayInline,
                      peekNextMonth: a.props.peekNextMonth,
                      showMonthDropdown: a.props.showMonthDropdown,
                      showPreviousMonths: a.props.showPreviousMonths,
                      useShortMonthInDropdown: a.props.useShortMonthInDropdown,
                      showMonthYearDropdown: a.props.showMonthYearDropdown,
                      showWeekNumbers: a.props.showWeekNumbers,
                      showYearDropdown: a.props.showYearDropdown,
                      withPortal: a.props.withPortal,
                      forceShowMonthNavigation:
                        a.props.forceShowMonthNavigation,
                      showDisabledMonthNavigation:
                        a.props.showDisabledMonthNavigation,
                      scrollableYearDropdown: a.props.scrollableYearDropdown,
                      scrollableMonthYearDropdown:
                        a.props.scrollableMonthYearDropdown,
                      todayButton: a.props.todayButton,
                      weekLabel: a.props.weekLabel,
                      outsideClickIgnoreClass: Jr,
                      fixedHeight: a.props.fixedHeight,
                      monthsShown: a.props.monthsShown,
                      monthSelectedIn: a.state.monthSelectedIn,
                      onDropdownFocus: a.handleDropdownFocus,
                      onMonthChange: a.props.onMonthChange,
                      onYearChange: a.props.onYearChange,
                      dayClassName: a.props.dayClassName,
                      weekDayClassName: a.props.weekDayClassName,
                      monthClassName: a.props.monthClassName,
                      timeClassName: a.props.timeClassName,
                      showTimeSelect: a.props.showTimeSelect,
                      showTimeSelectOnly: a.props.showTimeSelectOnly,
                      onTimeChange: a.handleTimeChange,
                      timeFormat: a.props.timeFormat,
                      timeIntervals: a.props.timeIntervals,
                      minTime: a.props.minTime,
                      maxTime: a.props.maxTime,
                      excludeTimes: a.props.excludeTimes,
                      filterTime: a.props.filterTime,
                      timeCaption: a.props.timeCaption,
                      className: a.props.calendarClassName,
                      container: a.props.calendarContainer,
                      yearItemNumber: a.props.yearItemNumber,
                      yearDropdownItemNumber: a.props.yearDropdownItemNumber,
                      previousMonthAriaLabel: a.props.previousMonthAriaLabel,
                      previousMonthButtonLabel:
                        a.props.previousMonthButtonLabel,
                      nextMonthAriaLabel: a.props.nextMonthAriaLabel,
                      nextMonthButtonLabel: a.props.nextMonthButtonLabel,
                      previousYearAriaLabel: a.props.previousYearAriaLabel,
                      previousYearButtonLabel: a.props.previousYearButtonLabel,
                      nextYearAriaLabel: a.props.nextYearAriaLabel,
                      nextYearButtonLabel: a.props.nextYearButtonLabel,
                      timeInputLabel: a.props.timeInputLabel,
                      disabledKeyboardNavigation:
                        a.props.disabledKeyboardNavigation,
                      renderCustomHeader: a.props.renderCustomHeader,
                      popperProps: a.props.popperProps,
                      renderDayContents: a.props.renderDayContents,
                      onDayMouseEnter: a.props.onDayMouseEnter,
                      onMonthMouseLeave: a.props.onMonthMouseLeave,
                      selectsDisabledDaysInRange:
                        a.props.selectsDisabledDaysInRange,
                      showTimeInput: a.props.showTimeInput,
                      showMonthYearPicker: a.props.showMonthYearPicker,
                      showFullMonthYearPicker: a.props.showFullMonthYearPicker,
                      showTwoColumnMonthYearPicker:
                        a.props.showTwoColumnMonthYearPicker,
                      showFourColumnMonthYearPicker:
                        a.props.showFourColumnMonthYearPicker,
                      showYearPicker: a.props.showYearPicker,
                      showQuarterYearPicker: a.props.showQuarterYearPicker,
                      showPopperArrow: a.props.showPopperArrow,
                      excludeScrollbar: a.props.excludeScrollbar,
                      handleOnKeyDown: a.props.onKeyDown,
                      handleOnDayKeyDown: a.onDayKeyDown,
                      isInputFocused: a.state.focused,
                      customTimeInput: a.props.customTimeInput,
                      setPreSelection: a.setPreSelection,
                    },
                    a.props.children
                  )
                : null;
            }),
            wt(Ct(a), "renderDateInput", function () {
              var e,
                t = ue.default(a.props.className, wt({}, Jr, a.state.open)),
                r =
                  a.props.customInput ||
                  ce.default.createElement("input", { type: "text" }),
                n = a.props.customInputRef || "ref",
                o =
                  "string" == typeof a.props.value
                    ? a.props.value
                    : "string" == typeof a.state.inputValue
                    ? a.state.inputValue
                    : a.props.selectsRange
                    ? (function (e, t, r) {
                        if (!e) return "";
                        var a = At(e, r),
                          n = t ? At(t, r) : "";
                        return "".concat(a, " - ").concat(n);
                      })(a.props.startDate, a.props.endDate, a.props)
                    : At(a.props.selected, a.props);
              return ce.default.cloneElement(
                r,
                (wt((e = {}), n, function (e) {
                  a.input = e;
                }),
                wt(e, "value", o),
                wt(e, "onBlur", a.handleBlur),
                wt(e, "onChange", a.handleChange),
                wt(e, "onClick", a.onInputClick),
                wt(e, "onFocus", a.handleFocus),
                wt(e, "onKeyDown", a.onInputKeyDown),
                wt(e, "id", a.props.id),
                wt(e, "name", a.props.name),
                wt(e, "autoFocus", a.props.autoFocus),
                wt(e, "placeholder", a.props.placeholderText),
                wt(e, "disabled", a.props.disabled),
                wt(e, "autoComplete", a.props.autoComplete),
                wt(e, "className", ue.default(r.props.className, t)),
                wt(e, "title", a.props.title),
                wt(e, "readOnly", a.props.readOnly),
                wt(e, "required", a.props.required),
                wt(e, "tabIndex", a.props.tabIndex),
                wt(e, "aria-describedby", a.props.ariaDescribedBy),
                wt(e, "aria-invalid", a.props.ariaInvalid),
                wt(e, "aria-labelledby", a.props.ariaLabelledBy),
                wt(e, "aria-required", a.props.ariaRequired),
                e)
              );
            }),
            wt(Ct(a), "renderClearButton", function () {
              var e = a.props,
                t = e.isClearable,
                r = e.selected,
                n = e.startDate,
                o = e.endDate,
                s = e.clearButtonTitle,
                i = e.clearButtonClassName,
                p = void 0 === i ? "" : i,
                l = e.ariaLabelClose,
                d = void 0 === l ? "Close" : l;
              return !t || (null == r && null == n && null == o)
                ? null
                : ce.default.createElement("button", {
                    type: "button",
                    className: "react-datepicker__close-icon ".concat(p).trim(),
                    "aria-label": d,
                    onClick: a.onClearClick,
                    title: s,
                    tabIndex: -1,
                  });
            }),
            (a.state = a.calcInitialState()),
            a
          );
        }
        return (
          vt(
            r,
            [
              {
                key: "componentDidMount",
                value: function () {
                  window.addEventListener("scroll", this.onScroll, !0);
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e, t) {
                  var r, a;
                  e.inline &&
                    ((r = e.selected),
                    (a = this.props.selected),
                    r && a
                      ? Ye.default(r) !== Ye.default(a) ||
                        Te.default(r) !== Te.default(a)
                      : r !== a) &&
                    this.setPreSelection(this.props.selected),
                    void 0 !== this.state.monthSelectedIn &&
                      e.monthsShown !== this.props.monthsShown &&
                      this.setState({ monthSelectedIn: 0 }),
                    e.highlightDates !== this.props.highlightDates &&
                      this.setState({
                        highlightDates: br(this.props.highlightDates),
                      }),
                    t.focused ||
                      Xt(e.selected, this.props.selected) ||
                      this.setState({ inputValue: null }),
                    t.open !== this.state.open &&
                      (!1 === t.open &&
                        !0 === this.state.open &&
                        this.props.onCalendarOpen(),
                      !0 === t.open &&
                        !1 === this.state.open &&
                        this.props.onCalendarClose());
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.clearPreventFocusTimeout(),
                    window.removeEventListener("scroll", this.onScroll, !0);
                },
              },
              {
                key: "renderInputContainer",
                value: function () {
                  return ce.default.createElement(
                    "div",
                    { className: "react-datepicker__input-container" },
                    this.renderDateInput(),
                    this.renderClearButton()
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.renderCalendar();
                  if (this.props.inline) return e;
                  if (this.props.withPortal) {
                    var t = this.state.open
                      ? ce.default.createElement(
                          zr,
                          { enableTabLoop: this.props.enableTabLoop },
                          ce.default.createElement(
                            "div",
                            {
                              className: "react-datepicker__portal",
                              tabIndex: -1,
                              onKeyDown: this.onPortalKeyDown,
                            },
                            e
                          )
                        )
                      : null;
                    return (
                      this.state.open &&
                        this.props.portalId &&
                        (t = ce.default.createElement(
                          Ur,
                          {
                            portalId: this.props.portalId,
                            portalHost: this.props.portalHost,
                          },
                          t
                        )),
                      ce.default.createElement(
                        "div",
                        null,
                        this.renderInputContainer(),
                        t
                      )
                    );
                  }
                  return ce.default.createElement(Gr, {
                    className: this.props.popperClassName,
                    wrapperClassName: this.props.wrapperClassName,
                    hidePopper: !this.isCalendarOpen(),
                    portalId: this.props.portalId,
                    portalHost: this.props.portalHost,
                    popperModifiers: this.props.popperModifiers,
                    targetComponent: this.renderInputContainer(),
                    popperContainer: this.props.popperContainer,
                    popperComponent: e,
                    popperPlacement: this.props.popperPlacement,
                    popperProps: this.props.popperProps,
                    popperOnKeyDown: this.onPopperKeyDown,
                    enableTabLoop: this.props.enableTabLoop,
                  });
                },
              },
            ],
            [
              {
                key: "defaultProps",
                get: function () {
                  return {
                    allowSameDay: !1,
                    dateFormat: "MM/dd/yyyy",
                    dateFormatCalendar: "LLLL yyyy",
                    onChange: function () {},
                    disabled: !1,
                    disabledKeyboardNavigation: !1,
                    dropdownMode: "scroll",
                    onFocus: function () {},
                    onBlur: function () {},
                    onKeyDown: function () {},
                    onInputClick: function () {},
                    onSelect: function () {},
                    onClickOutside: function () {},
                    onMonthChange: function () {},
                    onCalendarOpen: function () {},
                    onCalendarClose: function () {},
                    preventOpenOnFocus: !1,
                    onYearChange: function () {},
                    onInputError: function () {},
                    monthsShown: 1,
                    readOnly: !1,
                    withPortal: !1,
                    selectsDisabledDaysInRange: !1,
                    shouldCloseOnSelect: !0,
                    showTimeSelect: !1,
                    showTimeInput: !1,
                    showPreviousMonths: !1,
                    showMonthYearPicker: !1,
                    showFullMonthYearPicker: !1,
                    showTwoColumnMonthYearPicker: !1,
                    showFourColumnMonthYearPicker: !1,
                    showYearPicker: !1,
                    showQuarterYearPicker: !1,
                    strictParsing: !1,
                    timeIntervals: 30,
                    timeCaption: "Time",
                    previousMonthAriaLabel: "Previous Month",
                    previousMonthButtonLabel: "Previous Month",
                    nextMonthAriaLabel: "Next Month",
                    nextMonthButtonLabel: "Next Month",
                    previousYearAriaLabel: "Previous Year",
                    previousYearButtonLabel: "Previous Year",
                    nextYearAriaLabel: "Next Year",
                    nextYearButtonLabel: "Next Year",
                    timeInputLabel: "Time",
                    enableTabLoop: !0,
                    yearItemNumber: Yt,
                    renderDayContents: function (e) {
                      return e;
                    },
                    focusSelectedMonth: !1,
                    showPopperArrow: !0,
                    excludeScrollbar: !0,
                    customTimeInput: null,
                    calendarStartDay: void 0,
                  };
                },
              },
            ]
          ),
          r
        );
      })(ce.default.Component),
      ta = "input",
      ra = "navigate";
    (e.CalendarContainer = jr),
      (e.default = ea),
      (e.getDefaultLocale = er),
      (e.registerLocale = function (e, t) {
        var r = "undefined" != typeof window ? window : globalThis;
        r.__localeData__ || (r.__localeData__ = {}), (r.__localeData__[e] = t);
      }),
      (e.setDefaultLocale = function (e) {
        ("undefined" != typeof window ? window : globalThis).__localeId__ = e;
      }),
      Object.defineProperty(e, "__esModule", { value: !0 });
  }
);
