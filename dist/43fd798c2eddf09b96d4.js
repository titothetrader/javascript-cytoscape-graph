function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*!
Copyright © 2016 Max Franz

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the “Software”), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
!function (e) {
  if ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module) module.exports = e();else if ("function" == typeof define && define.amd) define([], e);else {
    var n;
    n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, n.weaver = e();
  }
}(function () {
  var define, module, exports;
  return function e(n, t, r) {
    function i(s, o) {
      if (!t[s]) {
        if (!n[s]) {
          var f = "function" == typeof require && require;
          if (!o && f) return f(s, !0);
          if (a) return a(s, !0);
          var u = new Error("Cannot find module '" + s + "'");
          throw u.code = "MODULE_NOT_FOUND", u;
        }
        var l = t[s] = {
          exports: {}
        };
        n[s][0].call(l.exports, function (e) {
          var t = n[s][1][e];
          return i(t ? t : e);
        }, l, l.exports, e, n, t, r);
      }
      return t[s].exports;
    }
    for (var a = "function" == typeof require && require, s = 0; s < r.length; s++) i(r[s]);
    return i;
  }({
    1: [function (e, n, t) {
      "use strict";

      var r = e("./is"),
        i = e("./util"),
        a = e("./promise"),
        s = e("./event"),
        o = {
          event: {
            regex: /(\w+)(\.\w+)?/,
            optionalTypeRegex: /(\w+)?(\.\w+)?/,
            falseCallback: function falseCallback() {
              return !1;
            }
          },
          on: function on(e) {
            var n = {
              unbindSelfOnTrigger: !1,
              unbindAllBindersOnTrigger: !1
            };
            return e = i.extend({}, n, e), function (n, t, i) {
              var a = this,
                s = void 0 !== a.length,
                f = s ? a : [a],
                u = r.string(n),
                l = e;
              if ((r.fn(t) || t === !1) && (i = t, t = void 0), !r.fn(i) && i !== !1 && u) return a;
              if (u) {
                var c = {};
                c[n] = i, n = c;
              }
              for (var p in n) if (i = n[p], i === !1 && (i = o.event.falseCallback), r.fn(i)) {
                p = p.split(/\s+/);
                for (var d = 0; d < p.length; d++) {
                  var v = p[d];
                  if (!r.emptyString(v)) {
                    var h = v.match(o.event.regex);
                    if (h) for (var g = h[1], m = h[2] ? h[2] : void 0, y = {
                        callback: i,
                        data: t,
                        type: g,
                        namespace: m,
                        unbindSelfOnTrigger: l.unbindSelfOnTrigger,
                        unbindAllBindersOnTrigger: l.unbindAllBindersOnTrigger,
                        binders: f
                      }, b = 0; b < f.length; b++) {
                      var _ = f[b]._private;
                      _.listeners = _.listeners || [], _.listeners.push(y);
                    }
                  }
                }
              }
              return a;
            };
          },
          eventAliasesOn: function eventAliasesOn(e) {
            var n = e;
            n.addListener = n.listen = n.bind = n.on, n.removeListener = n.unlisten = n.unbind = n.off, n.emit = n.trigger, n.pon = n.promiseOn = function (e, n) {
              var t = this,
                r = Array.prototype.slice.call(arguments, 0);
              return new a(function (e, n) {
                var i = function i(n) {
                    t.off.apply(t, s), e(n);
                  },
                  a = r.concat([i]),
                  s = a.concat([]);
                t.on.apply(t, a);
              });
            };
          },
          off: function off(e) {
            var n = {};
            return e = i.extend({}, n, e), function (e, n) {
              var t = this,
                i = void 0 !== t.length,
                a = i ? t : [t],
                s = r.string(e);
              if (0 === arguments.length) {
                for (var f = 0; f < a.length; f++) a[f]._private.listeners = [];
                return t;
              }
              if (s) {
                var u = {};
                u[e] = n, e = u;
              }
              for (var l in e) {
                n = e[l], n === !1 && (n = o.event.falseCallback), l = l.split(/\s+/);
                for (var c = 0; c < l.length; c++) {
                  var p = l[c];
                  if (!r.emptyString(p)) {
                    var d = p.match(o.event.optionalTypeRegex);
                    if (d) for (var v = d[1] ? d[1] : void 0, h = d[2] ? d[2] : void 0, f = 0; f < a.length; f++) for (var g = a[f]._private.listeners = a[f]._private.listeners || [], m = 0; m < g.length; m++) {
                      var y = g[m],
                        b = !h || h === y.namespace,
                        _ = !v || y.type === v,
                        w = !n || n === y.callback,
                        j = b && _ && w;
                      j && (g.splice(m, 1), m--);
                    }
                  }
                }
              }
              return t;
            };
          },
          trigger: function trigger(e) {
            var n = {};
            return e = i.extend({}, n, e), function (e, n, t) {
              var i = this,
                a = void 0 !== i.length,
                f = a ? i : [i],
                u = r.string(e),
                l = r.plainObject(e),
                c = r.event(e);
              if (u) {
                var p = e.split(/\s+/);
                e = [];
                for (var d = 0; d < p.length; d++) {
                  var v = p[d];
                  if (!r.emptyString(v)) {
                    var h = v.match(o.event.regex),
                      g = h[1],
                      m = h[2] ? h[2] : void 0;
                    e.push({
                      type: g,
                      namespace: m
                    });
                  }
                }
              } else if (l) {
                var y = e;
                e = [y];
              }
              n ? r.array(n) || (n = [n]) : n = [];
              for (var d = 0; d < e.length; d++) for (var b = e[d], _ = 0; _ < f.length; _++) {
                var v,
                  w = f[_],
                  j = w._private.listeners = w._private.listeners || [],
                  S = !1;
                v = c ? b : new s(b, {
                  namespace: b.namespace
                }), t && (j = [{
                  namespace: v.namespace,
                  type: v.type,
                  callback: t
                }]);
                for (var $ = 0; $ < j.length; $++) {
                  var x = j[$],
                    q = !x.namespace || x.namespace === v.namespace,
                    O = x.type === v.type,
                    T = !0,
                    A = q && O && T;
                  if (A) {
                    var P = [v];
                    if (P = P.concat(n), x.data ? v.data = x.data : v.data = void 0, (x.unbindSelfOnTrigger || x.unbindAllBindersOnTrigger) && (j.splice($, 1), $--), x.unbindAllBindersOnTrigger) for (var R = x.binders, k = 0; k < R.length; k++) {
                      var E = R[k];
                      if (E && E !== w) for (var F = E._private.listeners, M = 0; M < F.length; M++) {
                        var L = F[M];
                        L === x && (F.splice(M, 1), M--);
                      }
                    }
                    var N = w,
                      D = x.callback.apply(N, P);
                    (D === !1 || v.isPropagationStopped()) && (S = !1, D === !1 && (v.stopPropagation(), v.preventDefault()));
                  }
                }
              }
              return i;
            };
          }
        };
      n.exports = o;
    }, {
      "./event": 2,
      "./is": 5,
      "./promise": 6,
      "./util": 8
    }],
    2: [function (e, n, t) {
      "use strict";

      function r() {
        return !1;
      }
      function i() {
        return !0;
      }
      var a = function a(e, n) {
        return this instanceof a ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented ? i : r) : this.type = e, n && (this.type = void 0 !== n.type ? n.type : this.type, this.namespace = n.namespace, this.layout = n.layout, this.data = n.data, this.message = n.message), void (this.timeStamp = e && e.timeStamp || +new Date())) : new a(e, n);
      };
      a.prototype = {
        instanceString: function instanceString() {
          return "event";
        },
        preventDefault: function preventDefault() {
          this.isDefaultPrevented = i;
          var e = this.originalEvent;
          e && e.preventDefault && e.preventDefault();
        },
        stopPropagation: function stopPropagation() {
          this.isPropagationStopped = i;
          var e = this.originalEvent;
          e && e.stopPropagation && e.stopPropagation();
        },
        stopImmediatePropagation: function stopImmediatePropagation() {
          this.isImmediatePropagationStopped = i, this.stopPropagation();
        },
        isDefaultPrevented: r,
        isPropagationStopped: r,
        isImmediatePropagationStopped: r
      }, n.exports = a;
    }, {}],
    3: [function (e, n, t) {
      /*! Weaver licensed under MIT (https://tldrlegal.com/license/mit-license), copyright Max Franz */
      "use strict";

      var r = e("./is"),
        i = e("./util"),
        a = e("./thread"),
        s = e("./promise"),
        o = e("./define"),
        f = function f(n) {
          if (!(this instanceof f)) return new f(n);
          this._private = {
            pass: []
          };
          var t = 4;
          if (r.number(n), "undefined" != typeof navigator && null != navigator.hardwareConcurrency) n = navigator.hardwareConcurrency;else try {
            n = e("os").cpus().length;
          } catch (i) {
            n = t;
          }
          for (var s = 0; n > s; s++) this[s] = new a();
          this.length = n;
        },
        u = f.prototype;
      i.extend(u, {
        instanceString: function instanceString() {
          return "fabric";
        },
        require: function require(e, n) {
          for (var t = 0; t < this.length; t++) {
            var r = this[t];
            r.require(e, n);
          }
          return this;
        },
        random: function random() {
          var e = Math.round((this.length - 1) * Math.random()),
            n = this[e];
          return n;
        },
        run: function run(e) {
          var n = this._private.pass.shift();
          return this.random().pass(n).run(e);
        },
        message: function message(e) {
          return this.random().message(e);
        },
        broadcast: function broadcast(e) {
          for (var n = 0; n < this.length; n++) {
            var t = this[n];
            t.message(e);
          }
          return this;
        },
        stop: function stop() {
          for (var e = 0; e < this.length; e++) {
            var n = this[e];
            n.stop();
          }
          return this;
        },
        pass: function pass(e) {
          var n = this._private.pass;
          if (!r.array(e)) throw "Only arrays may be used with fabric.pass()";
          return n.push(e), this;
        },
        spreadSize: function spreadSize() {
          var e = Math.ceil(this._private.pass[0].length / this.length);
          return e = Math.max(1, e);
        },
        spread: function spread(e) {
          for (var n = this, t = n._private, r = n.spreadSize(), i = t.pass.shift().concat([]), a = [], o = 0; o < this.length; o++) {
            var f = this[o],
              u = i.splice(0, r),
              l = f.pass(u).run(e);
            a.push(l);
            var c = 0 === i.length;
            if (c) break;
          }
          return s.all(a).then(function (e) {
            for (var n = [], t = 0, r = 0; r < e.length; r++) for (var i = e[r], a = 0; a < i.length; a++) {
              var s = i[a];
              n[t++] = s;
            }
            return n;
          });
        },
        map: function map(e) {
          var n = this;
          return n.require(e, "_$_$_fabmap"), n.spread(function (e) {
            var n = [],
              t = resolve;
            resolve = function resolve(e) {
              n.push(e);
            };
            for (var r = 0; r < e.length; r++) {
              var i = n.length,
                a = _$_$_fabmap(e[r]),
                s = i === n.length;
              s && n.push(a);
            }
            return resolve = t, n;
          });
        },
        filter: function filter(e) {
          var n = this._private,
            t = n.pass[0];
          return this.map(e).then(function (e) {
            for (var n = [], r = 0; r < t.length; r++) {
              var i = t[r],
                a = e[r];
              a && n.push(i);
            }
            return n;
          });
        },
        sort: function sort(e) {
          var n = this,
            t = this._private.pass[0].length,
            r = this.spreadSize();
          return e = e || function (e, n) {
            return n > e ? -1 : e > n ? 1 : 0;
          }, n.require(e, "_$_$_cmp"), n.spread(function (e) {
            var n = e.sort(_$_$_cmp);
            resolve(n);
          }).then(function (n) {
            for (var i = function i(r, _i, a) {
                _i = Math.min(_i, t), a = Math.min(a, t);
                for (var s = r, o = _i, f = [], u = s; a > u; u++) {
                  var l = n[r],
                    c = n[_i];
                  o > r && (_i >= a || e(l, c) <= 0) ? (f.push(l), r++) : (f.push(c), _i++);
                }
                for (var u = 0; u < f.length; u++) {
                  var p = s + u;
                  n[p] = f[u];
                }
              }, a = r; t > a; a *= 2) for (var s = 0; t > s; s += 2 * a) i(s, s + a, s + 2 * a);
            return n;
          });
        }
      });
      var l = function l(e) {
        return e = e || {}, function (n, t) {
          var r = this._private.pass.shift();
          return this.random().pass(r)[e.threadFn](n, t);
        };
      };
      i.extend(u, {
        randomMap: l({
          threadFn: "map"
        }),
        reduce: l({
          threadFn: "reduce"
        }),
        reduceRight: l({
          threadFn: "reduceRight"
        })
      });
      var c = u;
      c.promise = c.run, c.terminate = c.halt = c.stop, c.include = c.require, i.extend(u, {
        on: o.on(),
        one: o.on({
          unbindSelfOnTrigger: !0
        }),
        off: o.off(),
        trigger: o.trigger()
      }), o.eventAliasesOn(u), n.exports = f;
    }, {
      "./define": 1,
      "./is": 5,
      "./promise": 6,
      "./thread": 7,
      "./util": 8,
      os: void 0
    }],
    4: [function (e, n, t) {
      "use strict";

      var r = e("./thread"),
        i = e("./fabric"),
        a = function a() {};
      a.version = "1.2.0", a.thread = a.Thread = a.worker = a.Worker = r, a.fabric = a.Fabric = i, n.exports = a;
    }, {
      "./fabric": 3,
      "./thread": 7
    }],
    5: [function (e, n, t) {
      "use strict";

      var r = "string",
        i = _typeof({}),
        a = "function",
        s = function s(e) {
          return e && e.instanceString && o.fn(e.instanceString) ? e.instanceString() : null;
        },
        o = {
          defined: function defined(e) {
            return null != e;
          },
          string: function string(e) {
            return null != e && _typeof(e) == r;
          },
          fn: function fn(e) {
            return null != e && _typeof(e) === a;
          },
          array: function array(e) {
            return Array.isArray ? Array.isArray(e) : null != e && e instanceof Array;
          },
          plainObject: function plainObject(e) {
            return null != e && _typeof(e) === i && !o.array(e) && e.constructor === Object;
          },
          object: function object(e) {
            return null != e && _typeof(e) === i;
          },
          number: function number(e) {
            return null != e && "number" == typeof e && !isNaN(e);
          },
          integer: function integer(e) {
            return o.number(e) && Math.floor(e) === e;
          },
          bool: function bool(e) {
            return null != e && _typeof(e) == _typeof(!0);
          },
          event: function event(e) {
            return "event" === s(e);
          },
          thread: function thread(e) {
            return "thread" === s(e);
          },
          fabric: function fabric(e) {
            return "fabric" === s(e);
          },
          emptyString: function emptyString(e) {
            return e ? o.string(e) && ("" === e || e.match(/^\s+$/)) ? !0 : !1 : !0;
          },
          nonemptyString: function nonemptyString(e) {
            return e && o.string(e) && "" !== e && !e.match(/^\s+$/) ? !0 : !1;
          }
        };
      n.exports = o;
    }, {}],
    6: [function (e, n, t) {
      "use strict";

      var r = 0,
        i = 1,
        a = 2,
        s = function s(e) {
          return this instanceof s ? (this.id = "Thenable/1.0.7", this.state = r, this.fulfillValue = void 0, this.rejectReason = void 0, this.onFulfilled = [], this.onRejected = [], this.proxy = {
            then: this.then.bind(this)
          }, void ("function" == typeof e && e.call(this, this.fulfill.bind(this), this.reject.bind(this)))) : new s(e);
        };
      s.prototype = {
        fulfill: function fulfill(e) {
          return o(this, i, "fulfillValue", e);
        },
        reject: function reject(e) {
          return o(this, a, "rejectReason", e);
        },
        then: function then(e, n) {
          var t = this,
            r = new s();
          return t.onFulfilled.push(l(e, r, "fulfill")), t.onRejected.push(l(n, r, "reject")), f(t), r.proxy;
        }
      };
      var o = function o(e, n, t, i) {
          return e.state === r && (e.state = n, e[t] = i, f(e)), e;
        },
        f = function f(e) {
          e.state === i ? u(e, "onFulfilled", e.fulfillValue) : e.state === a && u(e, "onRejected", e.rejectReason);
        },
        u = function u(e, n, t) {
          if (0 !== e[n].length) {
            var r = e[n];
            e[n] = [];
            var i = function i() {
              for (var e = 0; e < r.length; e++) r[e](t);
            };
            "function" == typeof setImmediate ? setImmediate(i) : setTimeout(i, 0);
          }
        },
        l = function l(e, n, t) {
          return function (r) {
            if ("function" != typeof e) n[t].call(n, r);else {
              var i;
              try {
                i = e(r);
              } catch (a) {
                return void n.reject(a);
              }
              c(n, i);
            }
          };
        },
        c = function c(e, n) {
          if (e === n || e.proxy === n) return void e.reject(new TypeError("cannot resolve promise with itself"));
          var t;
          if ("object" == _typeof(n) && null !== n || "function" == typeof n) try {
            t = n.then;
          } catch (r) {
            return void e.reject(r);
          }
          if ("function" != typeof t) e.fulfill(n);else {
            var i = !1;
            try {
              t.call(n, function (t) {
                i || (i = !0, t === n ? e.reject(new TypeError("circular thenable chain")) : c(e, t));
              }, function (n) {
                i || (i = !0, e.reject(n));
              });
            } catch (r) {
              i || e.reject(r);
            }
          }
        },
        p = "undefined" == typeof p ? s : p;
      p.all = p.all || function (e) {
        return new p(function (n, t) {
          for (var r = new Array(e.length), i = 0, a = function a(t, _a) {
              r[t] = _a, i++, i === e.length && n(r);
            }, s = 0; s < e.length; s++) !function (n) {
            var r = e[n],
              i = null != r.then;
            if (i) r.then(function (e) {
              a(n, e);
            }, function (e) {
              t(e);
            });else {
              var s = r;
              a(n, s);
            }
          }(s);
        });
      }, n.exports = p;
    }, {}],
    7: [function (_dereq_, module, exports) {
      /*! Weaver licensed under MIT (https://tldrlegal.com/license/mit-license), copyright Max Franz */
      "use strict";

      var window = _dereq_("./window"),
        util = _dereq_("./util"),
        Promise = _dereq_("./promise"),
        Event = _dereq_("./event"),
        define = _dereq_("./define"),
        is = _dereq_("./is"),
        Thread = function Thread(e) {
          if (!(this instanceof Thread)) return new Thread(e);
          var n = this._private = {
            requires: [],
            files: [],
            queue: null,
            pass: [],
            disabled: !1
          };
          is.plainObject(e) && null != e.disabled && (n.disabled = !!e.disabled);
        },
        thdfn = Thread.prototype,
        stringifyFieldVal = function stringifyFieldVal(e) {
          var n = is.fn(e) ? e.toString() : "JSON.parse('" + JSON.stringify(e) + "')";
          return n;
        },
        fnAsRequire = function fnAsRequire(e) {
          var n, t;
          is.object(e) && e.fn ? (n = fnAs(e.fn, e.name), t = e.name, e = e.fn) : is.fn(e) ? (n = e.toString(), t = e.name) : is.string(e) ? n = e : is.object(e) && (n = e.proto ? "" : e.name + " = {};", t = e.name, e = e.obj), n += "\n";
          var r = function r(e, t) {
            if (e.prototype) {
              var r = !1;
              for (var i in e.prototype) {
                r = !0;
                break;
              }
              r && (n += fnAsRequire({
                name: t,
                obj: e,
                proto: !0
              }, e));
            }
          };
          if (e.prototype && null != t) for (var i in e.prototype) {
            var a = "",
              s = e.prototype[i],
              o = stringifyFieldVal(s),
              f = t + ".prototype." + i;
            a += f + " = " + o + ";\n", a && (n += a), r(s, f);
          }
          if (!is.string(e)) for (var i in e) {
            var u = "";
            if (e.hasOwnProperty(i)) {
              var s = e[i],
                o = stringifyFieldVal(s),
                f = t + '["' + i + '"]';
              u += f + " = " + o + ";\n";
            }
            u && (n += u), r(s, f);
          }
          return n;
        },
        isPathStr = function isPathStr(e) {
          return is.string(e) && e.match(/\.js$/);
        };
      util.extend(thdfn, {
        instanceString: function instanceString() {
          return "thread";
        },
        require: function require(e, n) {
          var t = this._private.requires;
          if (isPathStr(e)) return this._private.files.push(e), this;
          if (n) e = is.fn(e) ? {
            name: n,
            fn: e
          } : {
            name: n,
            obj: e
          };else if (is.fn(e)) {
            if (!e.name) throw 'The function name could not be automatically determined.  Use thread.require( someFunction, "someFunction" )';
            e = {
              name: e.name,
              fn: e
            };
          }
          return t.push(e), this;
        },
        pass: function pass(e) {
          return this._private.pass.push(e), this;
        },
        run: function run(fn, pass) {
          var self = this,
            _p = this._private;
          if (pass = pass || _p.pass.shift(), _p.stopped) throw "Attempted to run a stopped thread!  Start a new thread or do not stop the existing thread and reuse it.";
          if (_p.running) return _p.queue = _p.queue.then(function () {
            return self.run(fn, pass);
          });
          var useWW = null != window && !_p.disabled,
            useNode = !window && "undefined" != typeof module && !_p.disabled;
          self.trigger("run");
          var runP = new Promise(function (resolve, reject) {
            _p.running = !0;
            var threadTechAlreadyExists = _p.ran,
              fnImplStr = is.string(fn) ? fn : fn.toString(),
              fnStr = "\n" + _p.requires.map(function (e) {
                return fnAsRequire(e);
              }).concat(_p.files.map(function (e) {
                if (useWW) {
                  var n = function n(e) {
                    return e.match(/^\.\//) || e.match(/^\.\./) ? window.location.origin + window.location.pathname + e : e.match(/^\//) ? window.location.origin + "/" + e : e;
                  };
                  return 'importScripts("' + n(e) + '");';
                }
                if (useNode) return 'eval( require("fs").readFileSync("' + e + '", { encoding: "utf8" }) );';
                throw "External file `" + e + "` can not be required without any threading technology.";
              })).concat(["( function(){", "var ret = (" + fnImplStr + ")(" + JSON.stringify(pass) + ");", "if( ret !== undefined ){ resolve(ret); }", "} )()\n"]).join("\n");
            if (_p.requires = [], _p.files = [], useWW) {
              var fnBlob, fnUrl;
              if (!threadTechAlreadyExists) {
                var fnPre = fnStr + "";
                fnStr = ["function _ref_(o){ return eval(o); };", "function broadcast(m){ return message(m); };", "function message(m){ postMessage(m); };", "function listen(fn){", '  self.addEventListener("message", function(m){ ', '    if( typeof m === "object" && (m.data.$$eval || m.data === "$$start") ){', "    } else { ", "      fn( m.data );", "    }", "  });", "};", 'self.addEventListener("message", function(m){  if( m.data.$$eval ){ eval( m.data.$$eval ); }  });', "function resolve(v){ postMessage({ $$resolve: v }); };", "function reject(v){ postMessage({ $$reject: v }); };"].join("\n"), fnStr += fnPre, fnBlob = new Blob([fnStr], {
                  type: "application/javascript"
                }), fnUrl = window.URL.createObjectURL(fnBlob);
              }
              var ww = _p.webworker = _p.webworker || new Worker(fnUrl);
              threadTechAlreadyExists && ww.postMessage({
                $$eval: fnStr
              });
              var _cb2;
              ww.addEventListener("message", _cb2 = function cb(e) {
                var n = is.object(e) && is.object(e.data);
                n && "$$resolve" in e.data ? (ww.removeEventListener("message", _cb2), resolve(e.data.$$resolve)) : n && "$$reject" in e.data ? (ww.removeEventListener("message", _cb2), reject(e.data.$$reject)) : self.trigger(new Event(e, {
                  type: "message",
                  message: e.data
                }));
              }, !1), threadTechAlreadyExists || ww.postMessage("$$start");
            } else if (useNode) {
              _p.child || (_p.child = _dereq_("child_process").fork(_dereq_("path").join(__dirname, "thread-node-fork")));
              var child = _p.child,
                _cb2;
              child.on("message", _cb2 = function _cb(e) {
                is.object(e) && "$$resolve" in e ? (child.removeListener("message", _cb2), resolve(e.$$resolve)) : is.object(e) && "$$reject" in e ? (child.removeListener("message", _cb2), reject(e.$$reject)) : self.trigger(new Event({}, {
                  type: "message",
                  message: e
                }));
              }), child.send({
                $$eval: fnStr
              });
            } else {
              var promiseResolve = resolve,
                promiseReject = reject,
                timer = _p.timer = _p.timer || {
                  listeners: [],
                  exec: function exec() {
                    fnStr = ["function _ref_(o){ return eval(o); };", "function broadcast(m){ return message(m); };", 'function message(m){ self.trigger( new Event({}, { type: "message", message: m }) ); };', "function listen(fn){ timer.listeners.push( fn ); };", "function resolve(v){ promiseResolve(v); };", "function reject(v){ promiseReject(v); };"].join("\n") + fnStr, eval(fnStr);
                  },
                  message: function message(e) {
                    for (var n = timer.listeners, t = 0; t < n.length; t++) {
                      var r = n[t];
                      r(e);
                    }
                  }
                };
              timer.exec();
            }
          }).then(function (e) {
            return _p.running = !1, _p.ran = !0, self.trigger("ran"), e;
          });
          return null == _p.queue && (_p.queue = runP), runP;
        },
        message: function message(e) {
          var n = this._private;
          return n.webworker && n.webworker.postMessage(e), n.child && n.child.send(e), n.timer && n.timer.message(e), this;
        },
        stop: function stop() {
          var e = this._private;
          return e.webworker && e.webworker.terminate(), e.child && e.child.kill(), e.timer, e.stopped = !0, this.trigger("stop");
        },
        stopped: function stopped() {
          return this._private.stopped;
        }
      });
      var fnAs = function fnAs(e, n) {
          var t = e.toString();
          return t = t.replace(/function\s*?\S*?\s*?\(/, "function " + n + "(");
        },
        defineFnal = function defineFnal(e) {
          return e = e || {}, function (n, t) {
            var r = fnAs(n, "_$_$_" + e.name);
            return this.require(r), this.run(["function( data ){", "  var origResolve = resolve;", "  var res = [];", "  ", "  resolve = function( val ){", "    res.push( val );", "  };", "  ", "  var ret = data." + e.name + "( _$_$_" + e.name + (arguments.length > 1 ? ", " + JSON.stringify(t) : "") + " );", "  ", "  resolve = origResolve;", "  resolve( res.length > 0 ? res : ret );", "}"].join("\n"));
          };
        };
      util.extend(thdfn, {
        reduce: defineFnal({
          name: "reduce"
        }),
        reduceRight: defineFnal({
          name: "reduceRight"
        }),
        map: defineFnal({
          name: "map"
        })
      });
      var fn = thdfn;
      fn.promise = fn.run, fn.terminate = fn.halt = fn.stop, fn.include = fn.require, util.extend(thdfn, {
        on: define.on(),
        one: define.on({
          unbindSelfOnTrigger: !0
        }),
        off: define.off(),
        trigger: define.trigger()
      }), define.eventAliasesOn(thdfn), module.exports = Thread;
    }, {
      "./define": 1,
      "./event": 2,
      "./is": 5,
      "./promise": 6,
      "./util": 8,
      "./window": 9,
      child_process: void 0,
      path: void 0
    }],
    8: [function (e, n, t) {
      "use strict";

      var r,
        i = e("./is");
      r = {
        extend: function extend() {
          var e,
            n,
            t,
            a,
            s,
            o,
            f = arguments[0] || {},
            u = 1,
            l = arguments.length,
            c = !1;
          for ("boolean" == typeof f && (c = f, f = arguments[1] || {}, u = 2), "object" == _typeof(f) || i.fn(f) || (f = {}), l === u && (f = this, --u); l > u; u++) if (null != (e = arguments[u])) for (n in e) t = f[n], a = e[n], f !== a && (c && a && (i.plainObject(a) || (s = i.array(a))) ? (s ? (s = !1, o = t && i.array(t) ? t : []) : o = t && i.plainObject(t) ? t : {}, f[n] = r.extend(c, o, a)) : void 0 !== a && (f[n] = a));
          return f;
        },
        error: function error(e) {
          if (!console) throw e;
          if (console.error) console.error.apply(console, arguments);else {
            if (!console.log) throw e;
            console.log.apply(console, arguments);
          }
        }
      }, n.exports = r;
    }, {
      "./is": 5
    }],
    9: [function (e, n, t) {
      n.exports = "undefined" == typeof window ? null : window;
    }, {}]
  }, {}, [4])(4);
});