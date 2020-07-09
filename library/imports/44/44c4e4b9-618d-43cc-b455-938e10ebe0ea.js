"use strict";
cc._RF.push(module, '44c4eS5YY1DzLRVk44Q6+Dq', 'base64.min');
// script/tools/base64/base64.min.js

"use strict";

(function (r) {
  if (typeof exports === "object" && typeof module !== "undefined") {
    module.exports = r();
  } else if (typeof define === "function" && define.amd) {
    define([], r);
  } else {
    var e;

    if (typeof window !== "undefined") {
      e = window;
    } else if (typeof global !== "undefined") {
      e = global;
    } else if (typeof self !== "undefined") {
      e = self;
    } else {
      e = this;
    }

    e.base64js = r();
  }
})(function () {
  var r, e, n;
  return function () {
    function d(a, f, i) {
      function u(n, r) {
        if (!f[n]) {
          if (!a[n]) {
            var e = "function" == typeof require && require;
            if (!r && e) return e(n, !0);
            if (v) return v(n, !0);
            var t = new Error("Cannot find module '" + n + "'");
            throw t.code = "MODULE_NOT_FOUND", t;
          }

          var o = f[n] = {
            exports: {}
          };
          a[n][0].call(o.exports, function (r) {
            var e = a[n][1][r];
            return u(e || r);
          }, o, o.exports, d, a, f, i);
        }

        return f[n].exports;
      }

      for (var v = "function" == typeof require && require, r = 0; r < i.length; r++) {
        u(i[r]);
      }

      return u;
    }

    return d;
  }()({
    "/": [function (r, e, n) {
      "use strict";

      n.byteLength = f;
      n.toByteArray = i;
      n.fromByteArray = p;
      var u = [];
      var v = [];
      var d = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
      var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

      for (var o = 0, a = t.length; o < a; ++o) {
        u[o] = t[o];
        v[t.charCodeAt(o)] = o;
      }

      v["-".charCodeAt(0)] = 62;
      v["_".charCodeAt(0)] = 63;

      function c(r) {
        var e = r.length;

        if (e % 4 > 0) {
          throw new Error("Invalid string. Length must be a multiple of 4");
        }

        var n = r.indexOf("=");
        if (n === -1) n = e;
        var t = n === e ? 0 : 4 - n % 4;
        return [n, t];
      }

      function f(r) {
        var e = c(r);
        var n = e[0];
        var t = e[1];
        return (n + t) * 3 / 4 - t;
      }

      function h(r, e, n) {
        return (e + n) * 3 / 4 - n;
      }

      function i(r) {
        var e;
        var n = c(r);
        var t = n[0];
        var o = n[1];
        var a = new d(h(r, t, o));
        var f = 0;
        var i = o > 0 ? t - 4 : t;
        var u;

        for (u = 0; u < i; u += 4) {
          e = v[r.charCodeAt(u)] << 18 | v[r.charCodeAt(u + 1)] << 12 | v[r.charCodeAt(u + 2)] << 6 | v[r.charCodeAt(u + 3)];
          a[f++] = e >> 16 & 255;
          a[f++] = e >> 8 & 255;
          a[f++] = e & 255;
        }

        if (o === 2) {
          e = v[r.charCodeAt(u)] << 2 | v[r.charCodeAt(u + 1)] >> 4;
          a[f++] = e & 255;
        }

        if (o === 1) {
          e = v[r.charCodeAt(u)] << 10 | v[r.charCodeAt(u + 1)] << 4 | v[r.charCodeAt(u + 2)] >> 2;
          a[f++] = e >> 8 & 255;
          a[f++] = e & 255;
        }

        return a;
      }

      function s(r) {
        return u[r >> 18 & 63] + u[r >> 12 & 63] + u[r >> 6 & 63] + u[r & 63];
      }

      function l(r, e, n) {
        var t;
        var o = [];

        for (var a = e; a < n; a += 3) {
          t = (r[a] << 16 & 16711680) + (r[a + 1] << 8 & 65280) + (r[a + 2] & 255);
          o.push(s(t));
        }

        return o.join("");
      }

      function p(r) {
        var e;
        var n = r.length;
        var t = n % 3;
        var o = [];
        var a = 16383;

        for (var f = 0, i = n - t; f < i; f += a) {
          o.push(l(r, f, f + a > i ? i : f + a));
        }

        if (t === 1) {
          e = r[n - 1];
          o.push(u[e >> 2] + u[e << 4 & 63] + "==");
        } else if (t === 2) {
          e = (r[n - 2] << 8) + r[n - 1];
          o.push(u[e >> 10] + u[e >> 4 & 63] + u[e << 2 & 63] + "=");
        }

        return o.join("");
      }
    }, {}]
  }, {}, [])("/");
});

cc._RF.pop();