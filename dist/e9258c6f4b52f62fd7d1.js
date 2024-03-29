function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
!function (a) {
  if ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module) module.exports = a();else if ("function" == typeof define && define.amd) define([], a);else {
    var b;
    b = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, b.cola = a();
  }
}(function () {
  return function () {
    function a(b, c, d) {
      function e(g, h) {
        if (!c[g]) {
          if (!b[g]) {
            var i = "function" == typeof require && require;
            if (!h && i) return i(g, !0);
            if (f) return f(g, !0);
            var j = new Error("Cannot find module '" + g + "'");
            throw j.code = "MODULE_NOT_FOUND", j;
          }
          var k = c[g] = {
            exports: {}
          };
          b[g][0].call(k.exports, function (a) {
            return e(b[g][1][a] || a);
          }, k, k.exports, a, b, c, d);
        }
        return c[g].exports;
      }
      for (var f = "function" == typeof require && require, g = 0; g < d.length; g++) e(d[g]);
      return e;
    }
    return a;
  }()({
    1: [function (a, b, c) {
      "use strict";

      function d(a) {
        for (var b in a) c.hasOwnProperty(b) || (c[b] = a[b]);
      }
      Object.defineProperty(c, "__esModule", {
        value: !0
      }), d(a("./src/adaptor")), d(a("./src/d3adaptor")), d(a("./src/descent")), d(a("./src/geom")), d(a("./src/gridrouter")), d(a("./src/handledisconnected")), d(a("./src/layout")), d(a("./src/layout3d")), d(a("./src/linklengths")), d(a("./src/powergraph")), d(a("./src/pqueue")), d(a("./src/rbtree")), d(a("./src/rectangle")), d(a("./src/shortestpaths")), d(a("./src/vpsc")), d(a("./src/batch"));
    }, {
      "./src/adaptor": 2,
      "./src/batch": 3,
      "./src/d3adaptor": 4,
      "./src/descent": 7,
      "./src/geom": 8,
      "./src/gridrouter": 9,
      "./src/handledisconnected": 10,
      "./src/layout": 11,
      "./src/layout3d": 12,
      "./src/linklengths": 13,
      "./src/powergraph": 14,
      "./src/pqueue": 15,
      "./src/rbtree": 16,
      "./src/rectangle": 17,
      "./src/shortestpaths": 18,
      "./src/vpsc": 19
    }],
    2: [function (a, b, c) {
      "use strict";

      function d(a) {
        return new g(a);
      }
      var e = this && this.__extends || function () {
        var _a = function a(b, c) {
          return (_a = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (a, b) {
            a.__proto__ = b;
          } || function (a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
          })(b, c);
        };
        return function (b, c) {
          function d() {
            this.constructor = b;
          }
          _a(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d());
        };
      }();
      Object.defineProperty(c, "__esModule", {
        value: !0
      });
      var f = a("./layout"),
        g = function (a) {
          function b(b) {
            var c = a.call(this) || this,
              d = b;
            return d.trigger && (c.trigger = d.trigger), d.kick && (c.kick = d.kick), d.drag && (c.drag = d.drag), d.on && (c.on = d.on), c.dragstart = c.dragStart = f.Layout.dragStart, c.dragend = c.dragEnd = f.Layout.dragEnd, c;
          }
          return e(b, a), b.prototype.trigger = function (a) {}, b.prototype.kick = function () {}, b.prototype.drag = function () {}, b.prototype.on = function (a, b) {
            return this;
          }, b;
        }(f.Layout);
      c.LayoutAdaptor = g, c.adaptor = d;
    }, {
      "./layout": 11
    }],
    3: [function (a, b, c) {
      "use strict";

      function d(a, b, c, d) {
        return a.cola.start(0, 0, 0, 10, !1), e(a.cola.nodes(), a.cola.groups(), c, d).routeEdges(a.powerGraph.powerEdges, b, function (a) {
          return a.source.routerNode.id;
        }, function (a) {
          return a.target.routerNode.id;
        });
      }
      function e(a, b, c, d) {
        a.forEach(function (a) {
          a.routerNode = {
            name: a.name,
            bounds: a.bounds.inflate(-c)
          };
        }), b.forEach(function (b) {
          b.routerNode = {
            bounds: b.bounds.inflate(-d),
            children: (void 0 !== b.groups ? b.groups.map(function (b) {
              return a.length + b.id;
            }) : []).concat(void 0 !== b.leaves ? b.leaves.map(function (a) {
              return a.index;
            }) : [])
          };
        });
        var e = a.concat(b).map(function (a, b) {
          return a.routerNode.id = b, a.routerNode;
        });
        return new h.GridRouter(e, {
          getChildren: function getChildren(a) {
            return a.children;
          },
          getBounds: function getBounds(a) {
            return a.bounds;
          }
        }, c - d);
      }
      function f(a, b, c) {
        var d;
        a.nodes.forEach(function (a, b) {
          return a.index = b;
        }), new g.Layout().avoidOverlaps(!1).nodes(a.nodes).links(a.links).powerGraphGroups(function (a) {
          d = a, d.groups.forEach(function (a) {
            return a.padding = c;
          });
        });
        var e = a.nodes.length,
          f = [],
          h = a.nodes.slice(0);
        return h.forEach(function (a, b) {
          return a.index = b;
        }), d.groups.forEach(function (a) {
          var b = a.index = a.id + e;
          h.push(a), void 0 !== a.leaves && a.leaves.forEach(function (a) {
            return f.push({
              source: b,
              target: a.index
            });
          }), void 0 !== a.groups && a.groups.forEach(function (a) {
            return f.push({
              source: b,
              target: a.id + e
            });
          });
        }), d.powerEdges.forEach(function (a) {
          f.push({
            source: a.source.index,
            target: a.target.index
          });
        }), new g.Layout().size(b).nodes(h).links(f).avoidOverlaps(!1).linkDistance(30).symmetricDiffLinkLengths(5).convergenceThreshold(1e-4).start(100, 0, 0, 0, !1), {
          cola: new g.Layout().convergenceThreshold(.001).size(b).avoidOverlaps(!0).nodes(a.nodes).links(a.links).groupCompactness(1e-4).linkDistance(30).symmetricDiffLinkLengths(5).powerGraphGroups(function (a) {
            d = a, d.groups.forEach(function (a) {
              a.padding = c;
            });
          }).start(50, 0, 100, 0, !1),
          powerGraph: d
        };
      }
      Object.defineProperty(c, "__esModule", {
        value: !0
      });
      var g = a("./layout"),
        h = a("./gridrouter");
      c.gridify = d, c.powerGraphGridLayout = f;
    }, {
      "./gridrouter": 9,
      "./layout": 11
    }],
    4: [function (a, b, c) {
      "use strict";

      function d(a) {
        return !a || e(a) ? new f.D3StyleLayoutAdaptor() : new g.D3StyleLayoutAdaptor(a);
      }
      function e(a) {
        var b = /^3\./;
        return a.version && null !== a.version.match(b);
      }
      Object.defineProperty(c, "__esModule", {
        value: !0
      });
      var f = a("./d3v3adaptor"),
        g = a("./d3v4adaptor");
      c.d3adaptor = d;
    }, {
      "./d3v3adaptor": 5,
      "./d3v4adaptor": 6
    }],
    5: [function (a, b, c) {
      "use strict";

      function d() {
        return new g();
      }
      var e = this && this.__extends || function () {
        var _a2 = function a(b, c) {
          return (_a2 = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (a, b) {
            a.__proto__ = b;
          } || function (a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
          })(b, c);
        };
        return function (b, c) {
          function d() {
            this.constructor = b;
          }
          _a2(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d());
        };
      }();
      Object.defineProperty(c, "__esModule", {
        value: !0
      });
      var f = a("./layout"),
        g = function (a) {
          function b() {
            var b = a.call(this) || this;
            b.event = d3.dispatch(f.EventType[f.EventType.start], f.EventType[f.EventType.tick], f.EventType[f.EventType.end]);
            var c = b;
            return b.drag = function () {
              if (!a) var a = d3.behavior.drag().origin(f.Layout.dragOrigin).on("dragstart.d3adaptor", f.Layout.dragStart).on("drag.d3adaptor", function (a) {
                f.Layout.drag(a, d3.event), c.resume();
              }).on("dragend.d3adaptor", f.Layout.dragEnd);
              if (!arguments.length) return a;
              this.call(a);
            }, b;
          }
          return e(b, a), b.prototype.trigger = function (a) {
            var b = {
              type: f.EventType[a.type],
              alpha: a.alpha,
              stress: a.stress
            };
            this.event[b.type](b);
          }, b.prototype.kick = function () {
            var b = this;
            d3.timer(function () {
              return a.prototype.tick.call(b);
            });
          }, b.prototype.on = function (a, b) {
            return "string" == typeof a ? this.event.on(a, b) : this.event.on(f.EventType[a], b), this;
          }, b;
        }(f.Layout);
      c.D3StyleLayoutAdaptor = g, c.d3adaptor = d;
    }, {
      "./layout": 11
    }],
    6: [function (a, b, c) {
      "use strict";

      var d = this && this.__extends || function () {
        var _a3 = function a(b, c) {
          return (_a3 = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (a, b) {
            a.__proto__ = b;
          } || function (a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
          })(b, c);
        };
        return function (b, c) {
          function d() {
            this.constructor = b;
          }
          _a3(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d());
        };
      }();
      Object.defineProperty(c, "__esModule", {
        value: !0
      });
      var e = a("./layout"),
        f = function (a) {
          function b(b) {
            var c = a.call(this) || this;
            c.d3Context = b, c.event = b.dispatch(e.EventType[e.EventType.start], e.EventType[e.EventType.tick], e.EventType[e.EventType.end]);
            var d = c;
            return c.drag = function () {
              if (!a) var a = b.drag().subject(e.Layout.dragOrigin).on("start.d3adaptor", e.Layout.dragStart).on("drag.d3adaptor", function (a) {
                e.Layout.drag(a, b.event), d.resume();
              }).on("end.d3adaptor", e.Layout.dragEnd);
              if (!arguments.length) return a;
              arguments[0].call(a);
            }, c;
          }
          return d(b, a), b.prototype.trigger = function (a) {
            var b = {
              type: e.EventType[a.type],
              alpha: a.alpha,
              stress: a.stress
            };
            this.event.call(b.type, b);
          }, b.prototype.kick = function () {
            var b = this,
              c = this.d3Context.timer(function () {
                return a.prototype.tick.call(b) && c.stop();
              });
          }, b.prototype.on = function (a, b) {
            return "string" == typeof a ? this.event.on(a, b) : this.event.on(e.EventType[a], b), this;
          }, b;
        }(e.Layout);
      c.D3StyleLayoutAdaptor = f;
    }, {
      "./layout": 11
    }],
    7: [function (a, b, c) {
      "use strict";

      Object.defineProperty(c, "__esModule", {
        value: !0
      });
      var d = function () {
        function a() {
          this.locks = {};
        }
        return a.prototype.add = function (a, b) {
          this.locks[a] = b;
        }, a.prototype.clear = function () {
          this.locks = {};
        }, a.prototype.isEmpty = function () {
          for (var a in this.locks) return !1;
          return !0;
        }, a.prototype.apply = function (a) {
          for (var b in this.locks) a(Number(b), this.locks[b]);
        }, a;
      }();
      c.Locks = d;
      var e = function () {
        function a(a, b, c) {
          void 0 === c && (c = null), this.D = b, this.G = c, this.threshold = 1e-4, this.numGridSnapNodes = 0, this.snapGridSize = 100, this.snapStrength = 1e3, this.scaleSnapByMaxH = !1, this.random = new f(), this.project = null, this.x = a, this.k = a.length;
          var e = this.n = a[0].length;
          this.H = new Array(this.k), this.g = new Array(this.k), this.Hd = new Array(this.k), this.a = new Array(this.k), this.b = new Array(this.k), this.c = new Array(this.k), this.d = new Array(this.k), this.e = new Array(this.k), this.ia = new Array(this.k), this.ib = new Array(this.k), this.xtmp = new Array(this.k), this.locks = new d(), this.minD = Number.MAX_VALUE;
          for (var g, h = e; h--;) for (g = e; --g > h;) {
            var i = b[h][g];
            i > 0 && i < this.minD && (this.minD = i);
          }
          for (this.minD === Number.MAX_VALUE && (this.minD = 1), h = this.k; h--;) {
            for (this.g[h] = new Array(e), this.H[h] = new Array(e), g = e; g--;) this.H[h][g] = new Array(e);
            this.Hd[h] = new Array(e), this.a[h] = new Array(e), this.b[h] = new Array(e), this.c[h] = new Array(e), this.d[h] = new Array(e), this.e[h] = new Array(e), this.ia[h] = new Array(e), this.ib[h] = new Array(e), this.xtmp[h] = new Array(e);
          }
        }
        return a.createSquareMatrix = function (a, b) {
          for (var c = new Array(a), d = 0; d < a; ++d) {
            c[d] = new Array(a);
            for (var e = 0; e < a; ++e) c[d][e] = b(d, e);
          }
          return c;
        }, a.prototype.offsetDir = function () {
          for (var a = this, b = new Array(this.k), c = 0, d = 0; d < this.k; ++d) {
            var e = b[d] = this.random.getNextBetween(.01, 1) - .5;
            c += e * e;
          }
          return c = Math.sqrt(c), b.map(function (b) {
            return b *= a.minD / c;
          });
        }, a.prototype.computeDerivatives = function (a) {
          var b = this,
            c = this.n;
          if (!(c < 1)) {
            for (var d, e = new Array(this.k), f = new Array(this.k), g = new Array(this.k), h = 0, i = 0; i < c; ++i) {
              for (d = 0; d < this.k; ++d) g[d] = this.g[d][i] = 0;
              for (var j = 0; j < c; ++j) if (i !== j) {
                for (var k = c; k--;) {
                  var l = 0;
                  for (d = 0; d < this.k; ++d) {
                    var m = e[d] = a[d][i] - a[d][j];
                    l += f[d] = m * m;
                  }
                  if (l > 1e-9) break;
                  var n = this.offsetDir();
                  for (d = 0; d < this.k; ++d) a[d][j] += n[d];
                }
                var o = Math.sqrt(l),
                  p = this.D[i][j],
                  q = null != this.G ? this.G[i][j] : 1;
                if (q > 1 && o > p || !isFinite(p)) for (d = 0; d < this.k; ++d) this.H[d][i][j] = 0;else {
                  q > 1 && (q = 1);
                  var r = p * p,
                    s = 2 * q * (o - p) / (r * o),
                    t = o * o * o,
                    u = 2 * -q / (r * t);
                  for (isFinite(s) || console.log(s), d = 0; d < this.k; ++d) this.g[d][i] += e[d] * s, g[d] -= this.H[d][i][j] = u * (t + p * (f[d] - l) + o * l);
                }
              }
              for (d = 0; d < this.k; ++d) h = Math.max(h, this.H[d][i][i] = g[d]);
            }
            for (var v = this.snapGridSize / 2, w = this.snapGridSize, x = this.snapStrength, y = x / (v * v), z = this.numGridSnapNodes, i = 0; i < z; ++i) for (d = 0; d < this.k; ++d) {
              var A = this.x[d][i],
                B = A / w,
                C = B % 1,
                D = B - C,
                E = Math.abs(C),
                m = E <= .5 ? A - D * w : A > 0 ? A - (D + 1) * w : A - (D - 1) * w;
              -v < m && m <= v && (this.scaleSnapByMaxH ? (this.g[d][i] += h * y * m, this.H[d][i][i] += h * y) : (this.g[d][i] += y * m, this.H[d][i][i] += y));
            }
            this.locks.isEmpty() || this.locks.apply(function (c, e) {
              for (d = 0; d < b.k; ++d) b.H[d][c][c] += h, b.g[d][c] -= h * (e[d] - a[d][c]);
            });
          }
        }, a.dotProd = function (a, b) {
          for (var c = 0, d = a.length; d--;) c += a[d] * b[d];
          return c;
        }, a.rightMultiply = function (b, c, d) {
          for (var e = b.length; e--;) d[e] = a.dotProd(b[e], c);
        }, a.prototype.computeStepSize = function (b) {
          for (var c = 0, d = 0, e = 0; e < this.k; ++e) c += a.dotProd(this.g[e], b[e]), a.rightMultiply(this.H[e], b[e], this.Hd[e]), d += a.dotProd(b[e], this.Hd[e]);
          return 0 !== d && isFinite(d) ? 1 * c / d : 0;
        }, a.prototype.reduceStress = function () {
          this.computeDerivatives(this.x);
          for (var a = this.computeStepSize(this.g), b = 0; b < this.k; ++b) this.takeDescentStep(this.x[b], this.g[b], a);
          return this.computeStress();
        }, a.copy = function (a, b) {
          for (var c = a.length, d = b[0].length, e = 0; e < c; ++e) for (var f = 0; f < d; ++f) b[e][f] = a[e][f];
        }, a.prototype.stepAndProject = function (b, c, d, e) {
          a.copy(b, c), this.takeDescentStep(c[0], d[0], e), this.project && this.project[0](b[0], b[1], c[0]), this.takeDescentStep(c[1], d[1], e), this.project && this.project[1](c[0], b[1], c[1]);
          for (var f = 2; f < this.k; f++) this.takeDescentStep(c[f], d[f], e);
        }, a.mApply = function (a, b, c) {
          for (var d = a; d-- > 0;) for (var e = b; e-- > 0;) c(d, e);
        }, a.prototype.matrixApply = function (b) {
          a.mApply(this.k, this.n, b);
        }, a.prototype.computeNextPosition = function (a, b) {
          var c = this;
          this.computeDerivatives(a);
          var d = this.computeStepSize(this.g);
          if (this.stepAndProject(a, b, this.g, d), this.project) {
            this.matrixApply(function (d, e) {
              return c.e[d][e] = a[d][e] - b[d][e];
            });
            var e = this.computeStepSize(this.e);
            e = Math.max(.2, Math.min(e, 1)), this.stepAndProject(a, b, this.e, e);
          }
        }, a.prototype.run = function (a) {
          for (var b = Number.MAX_VALUE, c = !1; !c && a-- > 0;) {
            var d = this.rungeKutta();
            c = Math.abs(b / d - 1) < this.threshold, b = d;
          }
          return b;
        }, a.prototype.rungeKutta = function () {
          var b = this;
          this.computeNextPosition(this.x, this.a), a.mid(this.x, this.a, this.ia), this.computeNextPosition(this.ia, this.b), a.mid(this.x, this.b, this.ib), this.computeNextPosition(this.ib, this.c), this.computeNextPosition(this.c, this.d);
          var c = 0;
          return this.matrixApply(function (a, d) {
            var e = (b.a[a][d] + 2 * b.b[a][d] + 2 * b.c[a][d] + b.d[a][d]) / 6,
              f = b.x[a][d] - e;
            c += f * f, b.x[a][d] = e;
          }), c;
        }, a.mid = function (b, c, d) {
          a.mApply(b.length, b[0].length, function (a, e) {
            return d[a][e] = b[a][e] + (c[a][e] - b[a][e]) / 2;
          });
        }, a.prototype.takeDescentStep = function (a, b, c) {
          for (var d = 0; d < this.n; ++d) a[d] = a[d] - c * b[d];
        }, a.prototype.computeStress = function () {
          for (var a = 0, b = 0, c = this.n - 1; b < c; ++b) for (var d = b + 1, e = this.n; d < e; ++d) {
            for (var f = 0, g = 0; g < this.k; ++g) {
              var h = this.x[g][b] - this.x[g][d];
              f += h * h;
            }
            f = Math.sqrt(f);
            var i = this.D[b][d];
            if (isFinite(i)) {
              var j = i - f,
                k = i * i;
              a += j * j / k;
            }
          }
          return a;
        }, a.zeroDistance = 1e-10, a;
      }();
      c.Descent = e;
      var f = function () {
        function a(a) {
          void 0 === a && (a = 1), this.seed = a, this.a = 214013, this.c = 2531011, this.m = 2147483648, this.range = 32767;
        }
        return a.prototype.getNext = function () {
          return this.seed = (this.seed * this.a + this.c) % this.m, (this.seed >> 16) / this.range;
        }, a.prototype.getNextBetween = function (a, b) {
          return a + this.getNext() * (b - a);
        }, a;
      }();
      c.PseudoRandom = f;
    }, {}],
    8: [function (a, b, c) {
      "use strict";

      function d(a, b, c) {
        return (b.x - a.x) * (c.y - a.y) - (c.x - a.x) * (b.y - a.y);
      }
      function e(a, b, c) {
        return d(a, b, c) > 0;
      }
      function f(a, b, c) {
        return d(a, b, c) < 0;
      }
      function g(a) {
        var b,
          c = a.slice(0).sort(function (a, b) {
            return a.x !== b.x ? b.x - a.x : b.y - a.y;
          }),
          e = a.length,
          f = c[0].x;
        for (b = 1; b < e && c[b].x === f; ++b);
        var g = b - 1,
          h = [];
        if (h.push(c[0]), g === e - 1) c[g].y !== c[0].y && h.push(c[g]);else {
          var i,
            j = e - 1,
            k = c[e - 1].x;
          for (b = e - 2; b >= 0 && c[b].x === k; b--);
          for (i = b + 1, b = g; ++b <= i;) if (!(d(c[0], c[i], c[b]) >= 0 && b < i)) {
            for (; h.length > 1 && !(d(h[h.length - 2], h[h.length - 1], c[b]) > 0);) h.length -= 1;
            0 != b && h.push(c[b]);
          }
          j != i && h.push(c[j]);
          var l = h.length;
          for (b = i; --b >= g;) if (!(d(c[j], c[g], c[b]) >= 0 && b > g)) {
            for (; h.length > l && !(d(h[h.length - 2], h[h.length - 1], c[b]) > 0);) h.length -= 1;
            0 != b && h.push(c[b]);
          }
        }
        return h;
      }
      function h(a, b, c) {
        b.slice(0).sort(function (b, c) {
          return Math.atan2(b.y - a.y, b.x - a.x) - Math.atan2(c.y - a.y, c.x - a.x);
        }).forEach(c);
      }
      function i(a, b) {
        var c = b.slice(0);
        return c.push(b[0]), {
          rtan: j(a, c),
          ltan: k(a, c)
        };
      }
      function j(a, b) {
        var c,
          d,
          g,
          h,
          i,
          j = b.length - 1;
        if (f(a, b[1], b[0]) && !e(a, b[j - 1], b[0])) return 0;
        for (c = 0, d = j;;) {
          if (d - c == 1) return e(a, b[c], b[d]) ? c : d;
          if (g = Math.floor((c + d) / 2), (i = f(a, b[g + 1], b[g])) && !e(a, b[g - 1], b[g])) return g;
          h = e(a, b[c + 1], b[c]), h ? i ? d = g : e(a, b[c], b[g]) ? d = g : c = g : i && f(a, b[c], b[g]) ? d = g : c = g;
        }
      }
      function k(a, b) {
        var c,
          d,
          g,
          h,
          i,
          j = b.length - 1;
        if (e(a, b[j - 1], b[0]) && !f(a, b[1], b[0])) return 0;
        for (c = 0, d = j;;) {
          if (d - c == 1) return f(a, b[c], b[d]) ? c : d;
          if (g = Math.floor((c + d) / 2), i = f(a, b[g + 1], b[g]), e(a, b[g - 1], b[g]) && !i) return g;
          h = f(a, b[c + 1], b[c]), h ? i ? f(a, b[c], b[g]) ? d = g : c = g : d = g : i ? c = g : e(a, b[c], b[g]) ? d = g : c = g;
        }
      }
      function l(a, b, c, d, e, f) {
        var g, h;
        g = c(b[0], a), h = d(a[g], b);
        for (var i = !1; !i;) {
          for (i = !0;;) {
            if (g === a.length - 1 && (g = 0), e(b[h], a[g], a[g + 1])) break;
            ++g;
          }
          for (;;) {
            if (0 === h && (h = b.length - 1), f(a[g], b[h], b[h - 1])) break;
            --h, i = !1;
          }
        }
        return {
          t1: g,
          t2: h
        };
      }
      function m(a, b) {
        var c = n(b, a);
        return {
          t1: c.t2,
          t2: c.t1
        };
      }
      function n(a, b) {
        return l(a, b, j, k, e, f);
      }
      function o(a, b) {
        return l(a, b, k, k, f, f);
      }
      function p(a, b) {
        return l(a, b, j, j, e, e);
      }
      function q(a, b) {
        for (var c = [], d = 1, e = b.length; d < e; ++d) {
          var f = w.Rectangle.lineIntersection(a.x1, a.y1, a.x2, a.y2, b[d - 1].x, b[d - 1].y, b[d].x, b[d].y);
          f && c.push(f);
        }
        return c;
      }
      function r(a, b) {
        for (var c = a.length - 1, e = b.length - 1, f = new B(), g = 0; g < c; ++g) for (var h = 0; h < e; ++h) {
          var i = a[0 == g ? c - 1 : g - 1],
            j = a[g],
            k = a[g + 1],
            l = b[0 == h ? e - 1 : h - 1],
            m = b[h],
            n = b[h + 1],
            o = d(i, j, m),
            p = d(j, l, m),
            q = d(j, m, n),
            r = d(l, m, j),
            s = d(m, i, j),
            t = d(m, j, k);
          o >= 0 && p >= 0 && q < 0 && r >= 0 && s >= 0 && t < 0 ? f.ll = new A(g, h) : o <= 0 && p <= 0 && q > 0 && r <= 0 && s <= 0 && t > 0 ? f.rr = new A(g, h) : o <= 0 && p > 0 && q <= 0 && r >= 0 && s < 0 && t >= 0 ? f.rl = new A(g, h) : o >= 0 && p < 0 && q >= 0 && r <= 0 && s > 0 && t <= 0 && (f.lr = new A(g, h));
        }
        return f;
      }
      function s(a, b) {
        for (var c = 1, d = b.length; c < d; ++c) if (f(b[c - 1], b[c], a)) return !1;
        return !0;
      }
      function t(a, b) {
        return !a.every(function (a) {
          return !s(a, b);
        });
      }
      function u(a, b) {
        if (t(a, b)) return !0;
        if (t(b, a)) return !0;
        for (var c = 1, d = a.length; c < d; ++c) {
          var e = a[c],
            f = a[c - 1];
          if (q(new y(f.x, f.y, e.x, e.y), b).length > 0) return !0;
        }
        return !1;
      }
      var v = this && this.__extends || function () {
        var _a4 = function a(b, c) {
          return (_a4 = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (a, b) {
            a.__proto__ = b;
          } || function (a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
          })(b, c);
        };
        return function (b, c) {
          function d() {
            this.constructor = b;
          }
          _a4(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d());
        };
      }();
      Object.defineProperty(c, "__esModule", {
        value: !0
      });
      var w = a("./rectangle"),
        x = function () {
          function a() {}
          return a;
        }();
      c.Point = x;
      var y = function () {
        function a(a, b, c, d) {
          this.x1 = a, this.y1 = b, this.x2 = c, this.y2 = d;
        }
        return a;
      }();
      c.LineSegment = y;
      var z = function (a) {
        function b() {
          return null !== a && a.apply(this, arguments) || this;
        }
        return v(b, a), b;
      }(x);
      c.PolyPoint = z, c.isLeft = d, c.ConvexHull = g, c.clockwiseRadialSweep = h, c.tangent_PolyPolyC = l, c.LRtangent_PolyPolyC = m, c.RLtangent_PolyPolyC = n, c.LLtangent_PolyPolyC = o, c.RRtangent_PolyPolyC = p;
      var A = function () {
        function a(a, b) {
          this.t1 = a, this.t2 = b;
        }
        return a;
      }();
      c.BiTangent = A;
      var B = function () {
        function a() {}
        return a;
      }();
      c.BiTangents = B;
      var C = function (a) {
        function b() {
          return null !== a && a.apply(this, arguments) || this;
        }
        return v(b, a), b;
      }(x);
      c.TVGPoint = C;
      var D = function () {
        function a(a, b, c, d) {
          this.id = a, this.polyid = b, this.polyvertid = c, this.p = d, d.vv = this;
        }
        return a;
      }();
      c.VisibilityVertex = D;
      var E = function () {
        function a(a, b) {
          this.source = a, this.target = b;
        }
        return a.prototype.length = function () {
          var a = this.source.p.x - this.target.p.x,
            b = this.source.p.y - this.target.p.y;
          return Math.sqrt(a * a + b * b);
        }, a;
      }();
      c.VisibilityEdge = E;
      var F = function () {
        function a(a, b) {
          if (this.P = a, this.V = [], this.E = [], b) this.V = b.V.slice(0), this.E = b.E.slice(0);else {
            for (var c = a.length, d = 0; d < c; d++) {
              for (var e = a[d], f = 0; f < e.length; ++f) {
                var g = e[f],
                  h = new D(this.V.length, d, f, g);
                this.V.push(h), f > 0 && this.E.push(new E(e[f - 1].vv, h));
              }
              e.length > 1 && this.E.push(new E(e[0].vv, e[e.length - 1].vv));
            }
            for (var d = 0; d < c - 1; d++) for (var i = a[d], f = d + 1; f < c; f++) {
              var j = a[f],
                k = r(i, j);
              for (var l in k) {
                var m = k[l],
                  n = i[m.t1],
                  o = j[m.t2];
                this.addEdgeIfVisible(n, o, d, f);
              }
            }
          }
        }
        return a.prototype.addEdgeIfVisible = function (a, b, c, d) {
          this.intersectsPolys(new y(a.x, a.y, b.x, b.y), c, d) || this.E.push(new E(a.vv, b.vv));
        }, a.prototype.addPoint = function (a, b) {
          var c = this.P.length;
          this.V.push(new D(this.V.length, c, 0, a));
          for (var d = 0; d < c; ++d) if (d !== b) {
            var e = this.P[d],
              f = i(a, e);
            this.addEdgeIfVisible(a, e[f.ltan], b, d), this.addEdgeIfVisible(a, e[f.rtan], b, d);
          }
          return a.vv;
        }, a.prototype.intersectsPolys = function (a, b, c) {
          for (var d = 0, e = this.P.length; d < e; ++d) if (d != b && d != c && q(a, this.P[d]).length > 0) return !0;
          return !1;
        }, a;
      }();
      c.TangentVisibilityGraph = F, c.tangents = r, c.polysOverlap = u;
    }, {
      "./rectangle": 17
    }],
    9: [function (a, b, c) {
      "use strict";

      Object.defineProperty(c, "__esModule", {
        value: !0
      });
      var d = a("./rectangle"),
        e = a("./vpsc"),
        f = a("./shortestpaths"),
        g = function () {
          function a(a, b, c) {
            this.id = a, this.rect = b, this.children = c, this.leaf = void 0 === c || 0 === c.length;
          }
          return a;
        }();
      c.NodeWrapper = g;
      var h = function () {
        function a(a, b, c, d, e) {
          void 0 === d && (d = null), void 0 === e && (e = null), this.id = a, this.x = b, this.y = c, this.node = d, this.line = e;
        }
        return a;
      }();
      c.Vert = h;
      var i = function () {
        function a(b, c) {
          this.s = b, this.t = c;
          var d = a.findMatch(b, c),
            e = c.slice(0).reverse(),
            f = a.findMatch(b, e);
          d.length >= f.length ? (this.length = d.length, this.si = d.si, this.ti = d.ti, this.reversed = !1) : (this.length = f.length, this.si = f.si, this.ti = c.length - f.ti - f.length, this.reversed = !0);
        }
        return a.findMatch = function (a, b) {
          for (var c = a.length, d = b.length, e = {
              length: 0,
              si: -1,
              ti: -1
            }, f = new Array(c), g = 0; g < c; g++) {
            f[g] = new Array(d);
            for (var h = 0; h < d; h++) if (a[g] === b[h]) {
              var i = f[g][h] = 0 === g || 0 === h ? 1 : f[g - 1][h - 1] + 1;
              i > e.length && (e.length = i, e.si = g - i + 1, e.ti = h - i + 1);
            } else f[g][h] = 0;
          }
          return e;
        }, a.prototype.getSequence = function () {
          return this.length >= 0 ? this.s.slice(this.si, this.si + this.length) : [];
        }, a;
      }();
      c.LongestCommonSubsequence = i;
      var j = function () {
        function a(a, b, c) {
          var e = this;
          void 0 === c && (c = 12), this.originalnodes = a, this.groupPadding = c, this.leaves = null, this.nodes = a.map(function (a, c) {
            return new g(c, b.getBounds(a), b.getChildren(a));
          }), this.leaves = this.nodes.filter(function (a) {
            return a.leaf;
          }), this.groups = this.nodes.filter(function (a) {
            return !a.leaf;
          }), this.cols = this.getGridLines("x"), this.rows = this.getGridLines("y"), this.groups.forEach(function (a) {
            return a.children.forEach(function (b) {
              return e.nodes[b].parent = a;
            });
          }), this.root = {
            children: []
          }, this.nodes.forEach(function (a) {
            void 0 === a.parent && (a.parent = e.root, e.root.children.push(a.id)), a.ports = [];
          }), this.backToFront = this.nodes.slice(0), this.backToFront.sort(function (a, b) {
            return e.getDepth(a) - e.getDepth(b);
          }), this.backToFront.slice(0).reverse().filter(function (a) {
            return !a.leaf;
          }).forEach(function (a) {
            var b = d.Rectangle.empty();
            a.children.forEach(function (a) {
              return b = b.union(e.nodes[a].rect);
            }), a.rect = b.inflate(e.groupPadding);
          });
          var f = this.midPoints(this.cols.map(function (a) {
              return a.pos;
            })),
            i = this.midPoints(this.rows.map(function (a) {
              return a.pos;
            })),
            j = f[0],
            k = f[f.length - 1],
            l = i[0],
            m = i[i.length - 1],
            n = this.rows.map(function (a) {
              return {
                x1: j,
                x2: k,
                y1: a.pos,
                y2: a.pos
              };
            }).concat(i.map(function (a) {
              return {
                x1: j,
                x2: k,
                y1: a,
                y2: a
              };
            })),
            o = this.cols.map(function (a) {
              return {
                x1: a.pos,
                x2: a.pos,
                y1: l,
                y2: m
              };
            }).concat(f.map(function (a) {
              return {
                x1: a,
                x2: a,
                y1: l,
                y2: m
              };
            })),
            p = n.concat(o);
          p.forEach(function (a) {
            return a.verts = [];
          }), this.verts = [], this.edges = [], n.forEach(function (a) {
            return o.forEach(function (b) {
              var c = new h(e.verts.length, b.x1, a.y1);
              a.verts.push(c), b.verts.push(c), e.verts.push(c);
              for (var d = e.backToFront.length; d-- > 0;) {
                var f = e.backToFront[d],
                  g = f.rect,
                  i = Math.abs(c.x - g.cx()),
                  j = Math.abs(c.y - g.cy());
                if (i < g.width() / 2 && j < g.height() / 2) {
                  c.node = f;
                  break;
                }
              }
            });
          }), p.forEach(function (a, b) {
            e.nodes.forEach(function (b, c) {
              b.rect.lineIntersections(a.x1, a.y1, a.x2, a.y2).forEach(function (c, d) {
                var f = new h(e.verts.length, c.x, c.y, b, a);
                e.verts.push(f), a.verts.push(f), b.ports.push(f);
              });
            });
            var c = Math.abs(a.y1 - a.y2) < .1,
              d = function d(a, b) {
                return c ? b.x - a.x : b.y - a.y;
              };
            a.verts.sort(d);
            for (var f = 1; f < a.verts.length; f++) {
              var g = a.verts[f - 1],
                i = a.verts[f];
              g.node && g.node === i.node && g.node.leaf || e.edges.push({
                source: g.id,
                target: i.id,
                length: Math.abs(d(g, i))
              });
            }
          });
        }
        return a.prototype.avg = function (a) {
          return a.reduce(function (a, b) {
            return a + b;
          }) / a.length;
        }, a.prototype.getGridLines = function (a) {
          for (var b = [], c = this.leaves.slice(0, this.leaves.length); c.length > 0;) {
            var d = c.filter(function (b) {
                return b.rect["overlap" + a.toUpperCase()](c[0].rect);
              }),
              e = {
                nodes: d,
                pos: this.avg(d.map(function (b) {
                  return b.rect["c" + a]();
                }))
              };
            b.push(e), e.nodes.forEach(function (a) {
              return c.splice(c.indexOf(a), 1);
            });
          }
          return b.sort(function (a, b) {
            return a.pos - b.pos;
          }), b;
        }, a.prototype.getDepth = function (a) {
          for (var b = 0; a.parent !== this.root;) b++, a = a.parent;
          return b;
        }, a.prototype.midPoints = function (a) {
          for (var b = a[1] - a[0], c = [a[0] - b / 2], d = 1; d < a.length; d++) c.push((a[d] + a[d - 1]) / 2);
          return c.push(a[a.length - 1] + b / 2), c;
        }, a.prototype.findLineage = function (a) {
          var b = [a];
          do {
            a = a.parent, b.push(a);
          } while (a !== this.root);
          return b.reverse();
        }, a.prototype.findAncestorPathBetween = function (a, b) {
          for (var c = this.findLineage(a), d = this.findLineage(b), e = 0; c[e] === d[e];) e++;
          return {
            commonAncestor: c[e - 1],
            lineages: c.slice(e).concat(d.slice(e))
          };
        }, a.prototype.siblingObstacles = function (a, b) {
          var c = this,
            d = this.findAncestorPathBetween(a, b),
            e = {};
          d.lineages.forEach(function (a) {
            return e[a.id] = {};
          });
          var f = d.commonAncestor.children.filter(function (a) {
            return !(a in e);
          });
          return d.lineages.filter(function (a) {
            return a.parent !== d.commonAncestor;
          }).forEach(function (a) {
            return f = f.concat(a.parent.children.filter(function (b) {
              return b !== a.id;
            }));
          }), f.map(function (a) {
            return c.nodes[a];
          });
        }, a.getSegmentSets = function (a, b, c) {
          for (var d = [], e = 0; e < a.length; e++) for (var f = a[e], g = 0; g < f.length; g++) {
            var h = f[g];
            h.edgeid = e, h.i = g;
            var i = h[1][b] - h[0][b];
            Math.abs(i) < .1 && d.push(h);
          }
          d.sort(function (a, c) {
            return a[0][b] - c[0][b];
          });
          for (var j = [], k = null, l = 0; l < d.length; l++) {
            var h = d[l];
            (!k || Math.abs(h[0][b] - k.pos) > .1) && (k = {
              pos: h[0][b],
              segments: []
            }, j.push(k)), k.segments.push(h);
          }
          return j;
        }, a.nudgeSegs = function (a, b, c, d, f, g) {
          var h = d.length;
          if (!(h <= 1)) {
            for (var i = d.map(function (b) {
                return new e.Variable(b[0][a]);
              }), j = [], k = 0; k < h; k++) for (var l = 0; l < h; l++) if (k !== l) {
              var m = d[k],
                n = d[l],
                o = m.edgeid,
                p = n.edgeid,
                q = -1,
                r = -1;
              "x" == a ? f(o, p) && (m[0][b] < m[1][b] ? (q = l, r = k) : (q = k, r = l)) : f(o, p) && (m[0][b] < m[1][b] ? (q = k, r = l) : (q = l, r = k)), q >= 0 && j.push(new e.Constraint(i[q], i[r], g));
            }
            new e.Solver(i, j).solve(), i.forEach(function (b, e) {
              var f = d[e],
                g = b.position();
              f[0][a] = f[1][a] = g;
              var h = c[f.edgeid];
              f.i > 0 && (h[f.i - 1][1][a] = g), f.i < h.length - 1 && (h[f.i + 1][0][a] = g);
            });
          }
        }, a.nudgeSegments = function (b, c, d, e, f) {
          for (var g = a.getSegmentSets(b, c, d), h = 0; h < g.length; h++) {
            for (var i = g[h], j = [], k = 0; k < i.segments.length; k++) {
              var l = i.segments[k];
              j.push({
                type: 0,
                s: l,
                pos: Math.min(l[0][d], l[1][d])
              }), j.push({
                type: 1,
                s: l,
                pos: Math.max(l[0][d], l[1][d])
              });
            }
            j.sort(function (a, b) {
              return a.pos - b.pos + a.type - b.type;
            });
            var m = [],
              n = 0;
            j.forEach(function (g) {
              0 === g.type ? (m.push(g.s), n++) : n--, 0 == n && (a.nudgeSegs(c, d, b, m, e, f), m = []);
            });
          }
        }, a.prototype.routeEdges = function (b, c, d, e) {
          var f = this,
            g = b.map(function (a) {
              return f.route(d(a), e(a));
            }),
            h = a.orderEdges(g),
            i = g.map(function (b) {
              return a.makeSegments(b);
            });
          return a.nudgeSegments(i, "x", "y", h, c), a.nudgeSegments(i, "y", "x", h, c), a.unreverseEdges(i, g), i;
        }, a.unreverseEdges = function (a, b) {
          a.forEach(function (a, c) {
            b[c].reversed && (a.reverse(), a.forEach(function (a) {
              a.reverse();
            }));
          });
        }, a.angleBetween2Lines = function (a, b) {
          var c = Math.atan2(a[0].y - a[1].y, a[0].x - a[1].x),
            d = Math.atan2(b[0].y - b[1].y, b[0].x - b[1].x),
            e = c - d;
          return (e > Math.PI || e < -Math.PI) && (e = d - c), e;
        }, a.isLeft = function (a, b, c) {
          return (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x) <= 0;
        }, a.getOrder = function (a) {
          for (var b = {}, c = 0; c < a.length; c++) {
            var d = a[c];
            void 0 === b[d.l] && (b[d.l] = {}), b[d.l][d.r] = !0;
          }
          return function (a, c) {
            return void 0 !== b[a] && b[a][c];
          };
        }, a.orderEdges = function (b) {
          for (var c = [], d = 0; d < b.length - 1; d++) for (var e = d + 1; e < b.length; e++) {
            var f,
              g,
              h,
              j = b[d],
              k = b[e],
              l = new i(j, k);
            0 !== l.length && (l.reversed && (k.reverse(), k.reversed = !0, l = new i(j, k)), (l.si <= 0 || l.ti <= 0) && (l.si + l.length >= j.length || l.ti + l.length >= k.length) ? c.push({
              l: d,
              r: e
            }) : (l.si + l.length >= j.length || l.ti + l.length >= k.length ? (f = j[l.si + 1], h = j[l.si - 1], g = k[l.ti - 1]) : (f = j[l.si + l.length - 2], g = j[l.si + l.length], h = k[l.ti + l.length]), a.isLeft(f, g, h) ? c.push({
              l: e,
              r: d
            }) : c.push({
              l: d,
              r: e
            })));
          }
          return a.getOrder(c);
        }, a.makeSegments = function (a) {
          function b(a) {
            return {
              x: a.x,
              y: a.y
            };
          }
          for (var c = [], d = b(a[0]), e = 1; e < a.length; e++) {
            var f = b(a[e]),
              g = e < a.length - 1 ? a[e + 1] : null;
            g && function (a, b, c) {
              return Math.abs((b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x)) < .001;
            }(d, f, g) || (c.push([d, f]), d = f);
          }
          return c;
        }, a.prototype.route = function (a, b) {
          var c = this,
            d = this.nodes[a],
            e = this.nodes[b];
          this.obstacles = this.siblingObstacles(d, e);
          var g = {};
          this.obstacles.forEach(function (a) {
            return g[a.id] = a;
          }), this.passableEdges = this.edges.filter(function (a) {
            var b = c.verts[a.source],
              d = c.verts[a.target];
            return !(b.node && b.node.id in g || d.node && d.node.id in g);
          });
          for (var h = 1; h < d.ports.length; h++) {
            var i = d.ports[0].id,
              j = d.ports[h].id;
            this.passableEdges.push({
              source: i,
              target: j,
              length: 0
            });
          }
          for (var h = 1; h < e.ports.length; h++) {
            var i = e.ports[0].id,
              j = e.ports[h].id;
            this.passableEdges.push({
              source: i,
              target: j,
              length: 0
            });
          }
          var k = function k(a) {
              return a.source;
            },
            l = function l(a) {
              return a.target;
            },
            m = function m(a) {
              return a.length;
            },
            n = new f.Calculator(this.verts.length, this.passableEdges, k, l, m),
            o = function o(a, b, f) {
              var g = c.verts[a],
                h = c.verts[b],
                i = c.verts[f],
                j = Math.abs(i.x - g.x),
                k = Math.abs(i.y - g.y);
              return g.node === d && g.node === h.node || h.node === e && h.node === i.node ? 0 : j > 1 && k > 1 ? 1e3 : 0;
            },
            p = n.PathFromNodeToNodeWithPrevCost(d.ports[0].id, e.ports[0].id, o),
            q = p.reverse().map(function (a) {
              return c.verts[a];
            });
          return q.push(this.nodes[e.id].ports[0]), q.filter(function (a, b) {
            return !(b < q.length - 1 && q[b + 1].node === d && a.node === d || b > 0 && a.node === e && q[b - 1].node === e);
          });
        }, a.getRoutePath = function (b, c, d, e) {
          var f = {
            routepath: "M " + b[0][0].x + " " + b[0][0].y + " ",
            arrowpath: ""
          };
          if (b.length > 1) for (var g = 0; g < b.length; g++) {
            var h = b[g],
              i = h[1].x,
              j = h[1].y,
              k = i - h[0].x,
              l = j - h[0].y;
            if (g < b.length - 1) {
              Math.abs(k) > 0 ? i -= k / Math.abs(k) * c : j -= l / Math.abs(l) * c, f.routepath += "L " + i + " " + j + " ";
              var m = b[g + 1],
                n = m[0].x,
                o = m[0].y,
                p = m[1].x,
                q = m[1].y;
              k = p - n, l = q - o;
              var r,
                s,
                t = a.angleBetween2Lines(h, m) < 0 ? 1 : 0;
              Math.abs(k) > 0 ? (r = n + k / Math.abs(k) * c, s = o) : (r = n, s = o + l / Math.abs(l) * c);
              var u = Math.abs(r - i),
                v = Math.abs(s - j);
              f.routepath += "A " + u + " " + v + " 0 0 " + t + " " + r + " " + s + " ";
            } else {
              var w,
                x,
                y = [i, j];
              Math.abs(k) > 0 ? (i -= k / Math.abs(k) * e, w = [i, j + d], x = [i, j - d]) : (j -= l / Math.abs(l) * e, w = [i + d, j], x = [i - d, j]), f.routepath += "L " + i + " " + j + " ", e > 0 && (f.arrowpath = "M " + y[0] + " " + y[1] + " L " + w[0] + " " + w[1] + " L " + x[0] + " " + x[1]);
            }
          } else {
            var w,
              x,
              h = b[0],
              i = h[1].x,
              j = h[1].y,
              k = i - h[0].x,
              l = j - h[0].y,
              y = [i, j];
            Math.abs(k) > 0 ? (i -= k / Math.abs(k) * e, w = [i, j + d], x = [i, j - d]) : (j -= l / Math.abs(l) * e, w = [i + d, j], x = [i - d, j]), f.routepath += "L " + i + " " + j + " ", e > 0 && (f.arrowpath = "M " + y[0] + " " + y[1] + " L " + w[0] + " " + w[1] + " L " + x[0] + " " + x[1]);
          }
          return f;
        }, a;
      }();
      c.GridRouter = j;
    }, {
      "./rectangle": 17,
      "./shortestpaths": 18,
      "./vpsc": 19
    }],
    10: [function (a, b, c) {
      "use strict";

      function d(a, b, c, d, e, g) {
        function h(a, b) {
          t = [], p = 0, q = 0, s = m;
          for (var c = 0; c < a.length; c++) {
            i(a[c], b);
          }
          return Math.abs(k() - e);
        }
        function i(a, b) {
          for (var c = void 0, d = 0; d < t.length; d++) if (t[d].space_left >= a.height && t[d].x + t[d].width + a.width + f.PADDING - b <= f.FLOAT_EPSILON) {
            c = t[d];
            break;
          }
          t.push(a), void 0 !== c ? (a.x = c.x + c.width + f.PADDING, a.y = c.bottom, a.space_left = a.height, a.bottom = a.y, c.space_left -= a.height + f.PADDING, c.bottom += a.height + f.PADDING) : (a.y = s, s += a.height + f.PADDING, a.x = l, a.bottom = a.y, a.space_left = a.height), a.y + a.height - q > -f.FLOAT_EPSILON && (q = a.y + a.height - m), a.x + a.width - p > -f.FLOAT_EPSILON && (p = a.x + a.width - l);
        }
        function j(a) {
          var b = 0;
          return a.forEach(function (a) {
            return b += a.width + f.PADDING;
          }), b;
        }
        function k() {
          return p / q;
        }
        void 0 === e && (e = 1), void 0 === g && (g = !0);
        var l = 0,
          m = 0,
          n = b,
          o = c,
          e = void 0 !== e ? e : 1,
          d = void 0 !== d ? d : 0,
          p = 0,
          q = 0,
          r = 0,
          s = 0,
          t = [];
        0 != a.length && (function (a) {
          function b(a) {
            var b = Number.MAX_VALUE,
              c = Number.MAX_VALUE,
              e = 0,
              f = 0;
            a.array.forEach(function (a) {
              var g = void 0 !== a.width ? a.width : d,
                h = void 0 !== a.height ? a.height : d;
              g /= 2, h /= 2, e = Math.max(a.x + g, e), b = Math.min(a.x - g, b), f = Math.max(a.y + h, f), c = Math.min(a.y - h, c);
            }), a.width = e - b, a.height = f - c;
          }
          a.forEach(function (a) {
            b(a);
          });
        }(a), function (a, b) {
          var c = Number.POSITIVE_INFINITY,
            d = 0;
          a.sort(function (a, b) {
            return b.height - a.height;
          }), r = a.reduce(function (a, b) {
            return a.width < b.width ? a.width : b.width;
          });
          for (var e = p = r, g = q = j(a), i = 0, k = Number.MAX_VALUE, l = Number.MAX_VALUE, m = -1, n = Number.MAX_VALUE, o = Number.MAX_VALUE; n > r || o > f.FLOAT_EPSILON;) {
            if (1 != m) var p = g - (g - e) / f.GOLDEN_SECTION,
              k = h(a, p);
            if (0 != m) var q = e + (g - e) / f.GOLDEN_SECTION,
              l = h(a, q);
            if (n = Math.abs(p - q), o = Math.abs(k - l), k < c && (c = k, d = p), l < c && (c = l, d = q), k > l ? (e = p, p = q, k = l, m = 1) : (g = q, q = p, l = k, m = 0), i++ > 100) break;
          }
          h(a, d);
        }(a), g && function (a) {
          a.forEach(function (a) {
            var b = {
              x: 0,
              y: 0
            };
            a.array.forEach(function (a) {
              b.x += a.x, b.y += a.y;
            }), b.x /= a.array.length, b.y /= a.array.length;
            var c = {
                x: b.x - a.width / 2,
                y: b.y - a.height / 2
              },
              d = {
                x: a.x - c.x + n / 2 - p / 2,
                y: a.y - c.y + o / 2 - q / 2
              };
            a.array.forEach(function (a) {
              a.x += d.x, a.y += d.y;
            });
          });
        }(a));
      }
      function e(a, b) {
        function c(a, b) {
          if (void 0 === d[a.index]) {
            b && (g++, f.push({
              array: []
            })), d[a.index] = g, f[g - 1].array.push(a);
            var h = e[a.index];
            if (h) for (var i = 0; i < h.length; i++) c(h[i], !1);
          }
        }
        for (var d = {}, e = {}, f = [], g = 0, h = 0; h < b.length; h++) {
          var i = b[h],
            j = i.source,
            k = i.target;
          e[j.index] ? e[j.index].push(k) : e[j.index] = [k], e[k.index] ? e[k.index].push(j) : e[k.index] = [j];
        }
        for (var h = 0; h < a.length; h++) {
          var l = a[h];
          d[l.index] || c(l, !0);
        }
        return f;
      }
      Object.defineProperty(c, "__esModule", {
        value: !0
      });
      var f = {
        PADDING: 10,
        GOLDEN_SECTION: (1 + Math.sqrt(5)) / 2,
        FLOAT_EPSILON: 1e-4,
        MAX_INERATIONS: 100
      };
      c.applyPacking = d, c.separateGraphs = e;
    }, {}],
    11: [function (a, b, c) {
      "use strict";

      function d(a) {
        return void 0 !== a.leaves || void 0 !== a.groups;
      }
      Object.defineProperty(c, "__esModule", {
        value: !0
      });
      var e,
        f = a("./powergraph"),
        g = a("./linklengths"),
        h = a("./descent"),
        i = a("./rectangle"),
        j = a("./shortestpaths"),
        k = a("./geom"),
        l = a("./handledisconnected");
      !function (a) {
        a[a.start = 0] = "start", a[a.tick = 1] = "tick", a[a.end = 2] = "end";
      }(e = c.EventType || (c.EventType = {}));
      var m = function () {
        function a() {
          var b = this;
          this._canvasSize = [1, 1], this._linkDistance = 20, this._defaultNodeSize = 10, this._linkLengthCalculator = null, this._linkType = null, this._avoidOverlaps = !1, this._handleDisconnected = !0, this._running = !1, this._nodes = [], this._groups = [], this._rootGroup = null, this._links = [], this._constraints = [], this._distanceMatrix = null, this._descent = null, this._directedLinkConstraints = null, this._threshold = .01, this._visibilityGraph = null, this._groupCompactness = 1e-6, this.event = null, this.linkAccessor = {
            getSourceIndex: a.getSourceIndex,
            getTargetIndex: a.getTargetIndex,
            setLength: a.setLinkLength,
            getType: function getType(a) {
              return "function" == typeof b._linkType ? b._linkType(a) : 0;
            }
          };
        }
        return a.prototype.on = function (a, b) {
          return this.event || (this.event = {}), "string" == typeof a ? this.event[e[a]] = b : this.event[a] = b, this;
        }, a.prototype.trigger = function (a) {
          this.event && void 0 !== this.event[a.type] && this.event[a.type](a);
        }, a.prototype.kick = function () {
          for (; !this.tick(););
        }, a.prototype.tick = function () {
          if (this._alpha < this._threshold) return this._running = !1, this.trigger({
            type: e.end,
            alpha: this._alpha = 0,
            stress: this._lastStress
          }), !0;
          var a,
            b,
            c = this._nodes.length;
          this._links.length;
          for (this._descent.locks.clear(), b = 0; b < c; ++b) if (a = this._nodes[b], a.fixed) {
            void 0 !== a.px && void 0 !== a.py || (a.px = a.x, a.py = a.y);
            var d = [a.px, a.py];
            this._descent.locks.add(b, d);
          }
          var f = this._descent.rungeKutta();
          return 0 === f ? this._alpha = 0 : void 0 !== this._lastStress && (this._alpha = f), this._lastStress = f, this.updateNodePositions(), this.trigger({
            type: e.tick,
            alpha: this._alpha,
            stress: this._lastStress
          }), !1;
        }, a.prototype.updateNodePositions = function () {
          for (var a, b = this._descent.x[0], c = this._descent.x[1], d = this._nodes.length; d--;) a = this._nodes[d], a.x = b[d], a.y = c[d];
        }, a.prototype.nodes = function (a) {
          if (!a) {
            if (0 === this._nodes.length && this._links.length > 0) {
              var b = 0;
              this._links.forEach(function (a) {
                b = Math.max(b, a.source, a.target);
              }), this._nodes = new Array(++b);
              for (var c = 0; c < b; ++c) this._nodes[c] = {};
            }
            return this._nodes;
          }
          return this._nodes = a, this;
        }, a.prototype.groups = function (a) {
          var b = this;
          return a ? (this._groups = a, this._rootGroup = {}, this._groups.forEach(function (a) {
            void 0 === a.padding && (a.padding = 1), void 0 !== a.leaves && a.leaves.forEach(function (c, d) {
              "number" == typeof c && ((a.leaves[d] = b._nodes[c]).parent = a);
            }), void 0 !== a.groups && a.groups.forEach(function (c, d) {
              "number" == typeof c && ((a.groups[d] = b._groups[c]).parent = a);
            });
          }), this._rootGroup.leaves = this._nodes.filter(function (a) {
            return void 0 === a.parent;
          }), this._rootGroup.groups = this._groups.filter(function (a) {
            return void 0 === a.parent;
          }), this) : this._groups;
        }, a.prototype.powerGraphGroups = function (a) {
          var b = f.getGroups(this._nodes, this._links, this.linkAccessor, this._rootGroup);
          return this.groups(b.groups), a(b), this;
        }, a.prototype.avoidOverlaps = function (a) {
          return arguments.length ? (this._avoidOverlaps = a, this) : this._avoidOverlaps;
        }, a.prototype.handleDisconnected = function (a) {
          return arguments.length ? (this._handleDisconnected = a, this) : this._handleDisconnected;
        }, a.prototype.flowLayout = function (a, b) {
          return arguments.length || (a = "y"), this._directedLinkConstraints = {
            axis: a,
            getMinSeparation: "number" == typeof b ? function () {
              return b;
            } : b
          }, this;
        }, a.prototype.links = function (a) {
          return arguments.length ? (this._links = a, this) : this._links;
        }, a.prototype.constraints = function (a) {
          return arguments.length ? (this._constraints = a, this) : this._constraints;
        }, a.prototype.distanceMatrix = function (a) {
          return arguments.length ? (this._distanceMatrix = a, this) : this._distanceMatrix;
        }, a.prototype.size = function (a) {
          return a ? (this._canvasSize = a, this) : this._canvasSize;
        }, a.prototype.defaultNodeSize = function (a) {
          return a ? (this._defaultNodeSize = a, this) : this._defaultNodeSize;
        }, a.prototype.groupCompactness = function (a) {
          return a ? (this._groupCompactness = a, this) : this._groupCompactness;
        }, a.prototype.linkDistance = function (a) {
          return a ? (this._linkDistance = "function" == typeof a ? a : +a, this._linkLengthCalculator = null, this) : this._linkDistance;
        }, a.prototype.linkType = function (a) {
          return this._linkType = a, this;
        }, a.prototype.convergenceThreshold = function (a) {
          return a ? (this._threshold = "function" == typeof a ? a : +a, this) : this._threshold;
        }, a.prototype.alpha = function (a) {
          return arguments.length ? (a = +a, this._alpha ? this._alpha = a > 0 ? a : 0 : a > 0 && (this._running || (this._running = !0, this.trigger({
            type: e.start,
            alpha: this._alpha = a
          }), this.kick())), this) : this._alpha;
        }, a.prototype.getLinkLength = function (a) {
          return "function" == typeof this._linkDistance ? +this._linkDistance(a) : this._linkDistance;
        }, a.setLinkLength = function (a, b) {
          a.length = b;
        }, a.prototype.getLinkType = function (a) {
          return "function" == typeof this._linkType ? this._linkType(a) : 0;
        }, a.prototype.symmetricDiffLinkLengths = function (a, b) {
          var c = this;
          return void 0 === b && (b = 1), this.linkDistance(function (b) {
            return a * b.length;
          }), this._linkLengthCalculator = function () {
            return g.symmetricDiffLinkLengths(c._links, c.linkAccessor, b);
          }, this;
        }, a.prototype.jaccardLinkLengths = function (a, b) {
          var c = this;
          return void 0 === b && (b = 1), this.linkDistance(function (b) {
            return a * b.length;
          }), this._linkLengthCalculator = function () {
            return g.jaccardLinkLengths(c._links, c.linkAccessor, b);
          }, this;
        }, a.prototype.start = function (b, c, d, e, f, k) {
          var l = this;
          void 0 === b && (b = 0), void 0 === c && (c = 0), void 0 === d && (d = 0), void 0 === e && (e = 0), void 0 === f && (f = !0), void 0 === k && (k = !0);
          var m,
            n = this.nodes().length,
            o = n + 2 * this._groups.length,
            p = (this._links.length, this._canvasSize[0]),
            q = this._canvasSize[1],
            r = new Array(o),
            s = new Array(o),
            t = null,
            u = this._avoidOverlaps;
          this._nodes.forEach(function (a, b) {
            a.index = b, void 0 === a.x && (a.x = p / 2, a.y = q / 2), r[b] = a.x, s[b] = a.y;
          }), this._linkLengthCalculator && this._linkLengthCalculator();
          var v;
          this._distanceMatrix ? v = this._distanceMatrix : (v = new j.Calculator(o, this._links, a.getSourceIndex, a.getTargetIndex, function (a) {
            return l.getLinkLength(a);
          }).DistanceMatrix(), t = h.Descent.createSquareMatrix(o, function () {
            return 2;
          }), this._links.forEach(function (a) {
            "number" == typeof a.source && (a.source = l._nodes[a.source]), "number" == typeof a.target && (a.target = l._nodes[a.target]);
          }), this._links.forEach(function (b) {
            var c = a.getSourceIndex(b),
              d = a.getTargetIndex(b);
            t[c][d] = t[d][c] = b.weight || 1;
          }));
          var w = h.Descent.createSquareMatrix(o, function (a, b) {
            return v[a][b];
          });
          if (this._rootGroup && void 0 !== this._rootGroup.groups) {
            var m = n,
              x = function x(a, b, c, d) {
                t[a][b] = t[b][a] = c, w[a][b] = w[b][a] = d;
              };
            this._groups.forEach(function (a) {
              x(m, m + 1, l._groupCompactness, .1), r[m] = 0, s[m++] = 0, r[m] = 0, s[m++] = 0;
            });
          } else this._rootGroup = {
            leaves: this._nodes,
            groups: []
          };
          var y = this._constraints || [];
          this._directedLinkConstraints && (this.linkAccessor.getMinSeparation = this._directedLinkConstraints.getMinSeparation, y = y.concat(g.generateDirectedEdgeConstraints(n, this._links, this._directedLinkConstraints.axis, this.linkAccessor))), this.avoidOverlaps(!1), this._descent = new h.Descent([r, s], w), this._descent.locks.clear();
          for (var m = 0; m < n; ++m) {
            var z = this._nodes[m];
            if (z.fixed) {
              z.px = z.x, z.py = z.y;
              var A = [z.x, z.y];
              this._descent.locks.add(m, A);
            }
          }
          if (this._descent.threshold = this._threshold, this.initialLayout(b, r, s), y.length > 0 && (this._descent.project = new i.Projection(this._nodes, this._groups, this._rootGroup, y).projectFunctions()), this._descent.run(c), this.separateOverlappingComponents(p, q, k), this.avoidOverlaps(u), u && (this._nodes.forEach(function (a, b) {
            a.x = r[b], a.y = s[b];
          }), this._descent.project = new i.Projection(this._nodes, this._groups, this._rootGroup, y, !0).projectFunctions(), this._nodes.forEach(function (a, b) {
            r[b] = a.x, s[b] = a.y;
          })), this._descent.G = t, this._descent.run(d), e) {
            this._descent.snapStrength = 1e3, this._descent.snapGridSize = this._nodes[0].width, this._descent.numGridSnapNodes = n, this._descent.scaleSnapByMaxH = n != o;
            var B = h.Descent.createSquareMatrix(o, function (a, b) {
              return a >= n || b >= n ? t[a][b] : 0;
            });
            this._descent.G = B, this._descent.run(e);
          }
          return this.updateNodePositions(), this.separateOverlappingComponents(p, q, k), f ? this.resume() : this;
        }, a.prototype.initialLayout = function (b, c, d) {
          if (this._groups.length > 0 && b > 0) {
            var e = this._nodes.length,
              f = this._links.map(function (a) {
                return {
                  source: a.source.index,
                  target: a.target.index
                };
              }),
              g = this._nodes.map(function (a) {
                return {
                  index: a.index
                };
              });
            this._groups.forEach(function (a, b) {
              g.push({
                index: a.index = e + b
              });
            }), this._groups.forEach(function (a, b) {
              void 0 !== a.leaves && a.leaves.forEach(function (b) {
                return f.push({
                  source: a.index,
                  target: b.index
                });
              }), void 0 !== a.groups && a.groups.forEach(function (b) {
                return f.push({
                  source: a.index,
                  target: b.index
                });
              });
            }), new a().size(this.size()).nodes(g).links(f).avoidOverlaps(!1).linkDistance(this.linkDistance()).symmetricDiffLinkLengths(5).convergenceThreshold(1e-4).start(b, 0, 0, 0, !1), this._nodes.forEach(function (a) {
              c[a.index] = g[a.index].x, d[a.index] = g[a.index].y;
            });
          } else this._descent.run(b);
        }, a.prototype.separateOverlappingComponents = function (a, b, c) {
          var d = this;
          if (void 0 === c && (c = !0), !this._distanceMatrix && this._handleDisconnected) {
            var e = this._descent.x[0],
              f = this._descent.x[1];
            this._nodes.forEach(function (a, b) {
              a.x = e[b], a.y = f[b];
            });
            var g = l.separateGraphs(this._nodes, this._links);
            l.applyPacking(g, a, b, this._defaultNodeSize, 1, c), this._nodes.forEach(function (a, b) {
              d._descent.x[0][b] = a.x, d._descent.x[1][b] = a.y, a.bounds && (a.bounds.setXCentre(a.x), a.bounds.setYCentre(a.y));
            });
          }
        }, a.prototype.resume = function () {
          return this.alpha(.1);
        }, a.prototype.stop = function () {
          return this.alpha(0);
        }, a.prototype.prepareEdgeRouting = function (a) {
          void 0 === a && (a = 0), this._visibilityGraph = new k.TangentVisibilityGraph(this._nodes.map(function (b) {
            return b.bounds.inflate(-a).vertices();
          }));
        }, a.prototype.routeEdge = function (a, b, c) {
          void 0 === b && (b = 5);
          var d = [],
            e = new k.TangentVisibilityGraph(this._visibilityGraph.P, {
              V: this._visibilityGraph.V,
              E: this._visibilityGraph.E
            }),
            f = {
              x: a.source.x,
              y: a.source.y
            },
            g = {
              x: a.target.x,
              y: a.target.y
            },
            h = e.addPoint(f, a.source.index),
            l = e.addPoint(g, a.target.index);
          e.addEdgeIfVisible(f, g, a.source.index, a.target.index), void 0 !== c && c(e);
          var m = function m(a) {
              return a.source.id;
            },
            n = function n(a) {
              return a.target.id;
            },
            o = function o(a) {
              return a.length();
            },
            p = new j.Calculator(e.V.length, e.E, m, n, o),
            q = p.PathFromNodeToNode(h.id, l.id);
          if (1 === q.length || q.length === e.V.length) {
            var r = i.makeEdgeBetween(a.source.innerBounds, a.target.innerBounds, b);
            d = [r.sourceIntersection, r.arrowStart];
          } else {
            for (var s = q.length - 2, t = e.V[q[s]].p, u = e.V[q[0]].p, d = [a.source.innerBounds.rayIntersection(t.x, t.y)], v = s; v >= 0; --v) d.push(e.V[q[v]].p);
            d.push(i.makeEdgeTo(u, a.target.innerBounds, b));
          }
          return d;
        }, a.getSourceIndex = function (a) {
          return "number" == typeof a.source ? a.source : a.source.index;
        }, a.getTargetIndex = function (a) {
          return "number" == typeof a.target ? a.target : a.target.index;
        }, a.linkId = function (b) {
          return a.getSourceIndex(b) + "-" + a.getTargetIndex(b);
        }, a.dragStart = function (b) {
          d(b) ? a.storeOffset(b, a.dragOrigin(b)) : (a.stopNode(b), b.fixed |= 2);
        }, a.stopNode = function (a) {
          a.px = a.x, a.py = a.y;
        }, a.storeOffset = function (b, c) {
          void 0 !== b.leaves && b.leaves.forEach(function (b) {
            b.fixed |= 2, a.stopNode(b), b._dragGroupOffsetX = b.x - c.x, b._dragGroupOffsetY = b.y - c.y;
          }), void 0 !== b.groups && b.groups.forEach(function (b) {
            return a.storeOffset(b, c);
          });
        }, a.dragOrigin = function (a) {
          return d(a) ? {
            x: a.bounds.cx(),
            y: a.bounds.cy()
          } : a;
        }, a.drag = function (b, c) {
          d(b) ? (void 0 !== b.leaves && b.leaves.forEach(function (a) {
            b.bounds.setXCentre(c.x), b.bounds.setYCentre(c.y), a.px = a._dragGroupOffsetX + c.x, a.py = a._dragGroupOffsetY + c.y;
          }), void 0 !== b.groups && b.groups.forEach(function (b) {
            return a.drag(b, c);
          })) : (b.px = c.x, b.py = c.y);
        }, a.dragEnd = function (b) {
          d(b) ? (void 0 !== b.leaves && b.leaves.forEach(function (b) {
            a.dragEnd(b), delete b._dragGroupOffsetX, delete b._dragGroupOffsetY;
          }), void 0 !== b.groups && b.groups.forEach(a.dragEnd)) : b.fixed &= -7;
        }, a.mouseOver = function (a) {
          a.fixed |= 4, a.px = a.x, a.py = a.y;
        }, a.mouseOut = function (a) {
          a.fixed &= -5;
        }, a;
      }();
      c.Layout = m;
    }, {
      "./descent": 7,
      "./geom": 8,
      "./handledisconnected": 10,
      "./linklengths": 13,
      "./powergraph": 14,
      "./rectangle": 17,
      "./shortestpaths": 18
    }],
    12: [function (a, b, c) {
      "use strict";

      Object.defineProperty(c, "__esModule", {
        value: !0
      });
      var d = a("./shortestpaths"),
        e = a("./descent"),
        f = a("./rectangle"),
        g = a("./linklengths"),
        h = function () {
          function a(a, b) {
            this.source = a, this.target = b;
          }
          return a.prototype.actualLength = function (a) {
            var b = this;
            return Math.sqrt(a.reduce(function (a, c) {
              var d = c[b.target] - c[b.source];
              return a + d * d;
            }, 0));
          }, a;
        }();
      c.Link3D = h;
      var i = function () {
        function a(a, b, c) {
          void 0 === a && (a = 0), void 0 === b && (b = 0), void 0 === c && (c = 0), this.x = a, this.y = b, this.z = c;
        }
        return a;
      }();
      c.Node3D = i;
      var j = function () {
        function a(b, c, d) {
          var e = this;
          void 0 === d && (d = 1), this.nodes = b, this.links = c, this.idealLinkLength = d, this.constraints = null, this.useJaccardLinkLengths = !0, this.result = new Array(a.k);
          for (var f = 0; f < a.k; ++f) this.result[f] = new Array(b.length);
          b.forEach(function (b, c) {
            for (var d = 0, f = a.dims; d < f.length; d++) {
              var g = f[d];
              void 0 === b[g] && (b[g] = Math.random());
            }
            e.result[0][c] = b.x, e.result[1][c] = b.y, e.result[2][c] = b.z;
          });
        }
        return a.prototype.linkLength = function (a) {
          return a.actualLength(this.result);
        }, a.prototype.start = function (a) {
          var b = this;
          void 0 === a && (a = 100);
          var c = this.nodes.length,
            h = new k();
          this.useJaccardLinkLengths && g.jaccardLinkLengths(this.links, h, 1.5), this.links.forEach(function (a) {
            return a.length *= b.idealLinkLength;
          });
          var i = new d.Calculator(c, this.links, function (a) {
              return a.source;
            }, function (a) {
              return a.target;
            }, function (a) {
              return a.length;
            }).DistanceMatrix(),
            j = e.Descent.createSquareMatrix(c, function (a, b) {
              return i[a][b];
            }),
            l = e.Descent.createSquareMatrix(c, function () {
              return 2;
            });
          this.links.forEach(function (a) {
            var b = a.source,
              c = a.target;
            return l[b][c] = l[c][b] = 1;
          }), this.descent = new e.Descent(this.result, j), this.descent.threshold = .001, this.descent.G = l, this.constraints && (this.descent.project = new f.Projection(this.nodes, null, null, this.constraints).projectFunctions());
          for (var m = 0; m < this.nodes.length; m++) {
            var n = this.nodes[m];
            n.fixed && this.descent.locks.add(m, [n.x, n.y, n.z]);
          }
          return this.descent.run(a), this;
        }, a.prototype.tick = function () {
          this.descent.locks.clear();
          for (var a = 0; a < this.nodes.length; a++) {
            var b = this.nodes[a];
            b.fixed && this.descent.locks.add(a, [b.x, b.y, b.z]);
          }
          return this.descent.rungeKutta();
        }, a.dims = ["x", "y", "z"], a.k = a.dims.length, a;
      }();
      c.Layout3D = j;
      var k = function () {
        function a() {}
        return a.prototype.getSourceIndex = function (a) {
          return a.source;
        }, a.prototype.getTargetIndex = function (a) {
          return a.target;
        }, a.prototype.getLength = function (a) {
          return a.length;
        }, a.prototype.setLength = function (a, b) {
          a.length = b;
        }, a;
      }();
    }, {
      "./descent": 7,
      "./linklengths": 13,
      "./rectangle": 17,
      "./shortestpaths": 18
    }],
    13: [function (a, b, c) {
      "use strict";

      function d(a, b) {
        var c = {};
        for (var d in a) c[d] = {};
        for (var d in b) c[d] = {};
        return Object.keys(c).length;
      }
      function e(a, b) {
        var c = 0;
        for (var d in a) void 0 !== b[d] && ++c;
        return c;
      }
      function f(a, b) {
        var c = {},
          d = function d(a, b) {
            void 0 === c[a] && (c[a] = {}), c[a][b] = {};
          };
        return a.forEach(function (a) {
          var c = b.getSourceIndex(a),
            e = b.getTargetIndex(a);
          d(c, e), d(e, c);
        }), c;
      }
      function g(a, b, c, d) {
        var e = f(a, d);
        a.forEach(function (a) {
          var f = e[d.getSourceIndex(a)],
            g = e[d.getTargetIndex(a)];
          d.setLength(a, 1 + b * c(f, g));
        });
      }
      function h(a, b, c) {
        void 0 === c && (c = 1), g(a, c, function (a, b) {
          return Math.sqrt(d(a, b) - e(a, b));
        }, b);
      }
      function i(a, b, c) {
        void 0 === c && (c = 1), g(a, c, function (a, b) {
          return Math.min(Object.keys(a).length, Object.keys(b).length) < 1.1 ? 0 : e(a, b) / d(a, b);
        }, b);
      }
      function j(a, b, c, d) {
        var e = k(a, b, d),
          f = {};
        e.forEach(function (a, b) {
          return a.forEach(function (a) {
            return f[a] = b;
          });
        });
        var g = [];
        return b.forEach(function (a) {
          var b = d.getSourceIndex(a),
            e = d.getTargetIndex(a);
          f[b] !== f[e] && g.push({
            axis: c,
            left: b,
            right: e,
            gap: d.getMinSeparation(a)
          });
        }), g;
      }
      function k(a, b, c) {
        function d(a) {
          a.index = a.lowlink = f++, g.push(a), a.onStack = !0;
          for (var b = 0, c = a.out; b < c.length; b++) {
            var e = c[b];
            void 0 === e.index ? (d(e), a.lowlink = Math.min(a.lowlink, e.lowlink)) : e.onStack && (a.lowlink = Math.min(a.lowlink, e.index));
          }
          if (a.lowlink === a.index) {
            for (var i = []; g.length && (e = g.pop(), e.onStack = !1, i.push(e), e !== a););
            h.push(i.map(function (a) {
              return a.id;
            }));
          }
        }
        for (var e = [], f = 0, g = [], h = [], i = 0; i < a; i++) e.push({
          id: i,
          out: []
        });
        for (var j = 0, k = b; j < k.length; j++) {
          var l = k[j],
            m = e[c.getSourceIndex(l)],
            n = e[c.getTargetIndex(l)];
          m.out.push(n);
        }
        for (var o = 0, p = e; o < p.length; o++) {
          var q = p[o];
          void 0 === q.index && d(q);
        }
        return h;
      }
      Object.defineProperty(c, "__esModule", {
        value: !0
      }), c.symmetricDiffLinkLengths = h, c.jaccardLinkLengths = i, c.generateDirectedEdgeConstraints = j, c.stronglyConnectedComponents = k;
    }, {}],
    14: [function (a, b, c) {
      "use strict";

      function d(a, b, c) {
        a.forAll(function (a) {
          if (a.isLeaf()) b.leaves || (b.leaves = []), b.leaves.push(a.id);else {
            var e = b;
            if (a.gid = c.length, !a.isIsland() || a.isPredefined()) {
              if (e = {
                id: a.gid
              }, a.isPredefined()) for (var f in a.definition) e[f] = a.definition[f];
              b.groups || (b.groups = []), b.groups.push(a.gid), c.push(e);
            }
            d(a.children, e, c);
          }
        });
      }
      function e(a, b) {
        var c = {};
        for (var d in a) d in b && (c[d] = a[d]);
        return c;
      }
      function f(a, b, c, d) {
        for (var e = a.length, f = new h(e, b, c, d); f.greedyMerge(););
        var g = [],
          i = f.getGroupHierarchy(g);
        return g.forEach(function (b) {
          var c = function c(_c) {
            var d = b[_c];
            "number" == typeof d && (b[_c] = a[d]);
          };
          c("source"), c("target");
        }), {
          groups: i,
          powerEdges: g
        };
      }
      Object.defineProperty(c, "__esModule", {
        value: !0
      });
      var g = function () {
        function a(a, b, c) {
          this.source = a, this.target = b, this.type = c;
        }
        return a;
      }();
      c.PowerEdge = g;
      var h = function () {
        function a(a, b, c, d) {
          var e = this;
          if (this.linkAccessor = c, this.modules = new Array(a), this.roots = [], d) this.initModulesFromGroup(d);else {
            this.roots.push(new j());
            for (var f = 0; f < a; ++f) this.roots[0].add(this.modules[f] = new i(f));
          }
          this.R = b.length, b.forEach(function (a) {
            var b = e.modules[c.getSourceIndex(a)],
              d = e.modules[c.getTargetIndex(a)],
              f = c.getType(a);
            b.outgoing.add(f, d), d.incoming.add(f, b);
          });
        }
        return a.prototype.initModulesFromGroup = function (a) {
          var b = new j();
          this.roots.push(b);
          for (var c = 0; c < a.leaves.length; ++c) {
            var d = a.leaves[c],
              e = new i(d.id);
            this.modules[d.id] = e, b.add(e);
          }
          if (a.groups) for (var f = 0; f < a.groups.length; ++f) {
            var g = a.groups[f],
              h = {};
            for (var l in g) "leaves" !== l && "groups" !== l && g.hasOwnProperty(l) && (h[l] = g[l]);
            b.add(new i(-1 - f, new k(), new k(), this.initModulesFromGroup(g), h));
          }
          return b;
        }, a.prototype.merge = function (a, b, c) {
          void 0 === c && (c = 0);
          var d = a.incoming.intersection(b.incoming),
            e = a.outgoing.intersection(b.outgoing),
            f = new j();
          f.add(a), f.add(b);
          var g = new i(this.modules.length, e, d, f);
          this.modules.push(g);
          var h = function h(c, d, e) {
            c.forAll(function (c, f) {
              c.forAll(function (c) {
                var h = c[d];
                h.add(f, g), h.remove(f, a), h.remove(f, b), a[e].remove(f, c), b[e].remove(f, c);
              });
            });
          };
          return h(e, "incoming", "outgoing"), h(d, "outgoing", "incoming"), this.R -= d.count() + e.count(), this.roots[c].remove(a), this.roots[c].remove(b), this.roots[c].add(g), g;
        }, a.prototype.rootMerges = function (a) {
          void 0 === a && (a = 0);
          for (var b = this.roots[a].modules(), c = b.length, d = new Array(c * (c - 1)), e = 0, f = 0, g = c - 1; f < g; ++f) for (var h = f + 1; h < c; ++h) {
            var i = b[f],
              j = b[h];
            d[e] = {
              id: e,
              nEdges: this.nEdges(i, j),
              a: i,
              b: j
            }, e++;
          }
          return d;
        }, a.prototype.greedyMerge = function () {
          for (var a = 0; a < this.roots.length; ++a) if (!(this.roots[a].modules().length < 2)) {
            var b = this.rootMerges(a).sort(function (a, b) {
                return a.nEdges == b.nEdges ? a.id - b.id : a.nEdges - b.nEdges;
              }),
              c = b[0];
            if (!(c.nEdges >= this.R)) return this.merge(c.a, c.b, a), !0;
          }
        }, a.prototype.nEdges = function (a, b) {
          var c = a.incoming.intersection(b.incoming),
            d = a.outgoing.intersection(b.outgoing);
          return this.R - c.count() - d.count();
        }, a.prototype.getGroupHierarchy = function (a) {
          var b = this,
            c = [],
            e = {};
          return d(this.roots[0], e, c), this.allEdges().forEach(function (d) {
            var e = b.modules[d.source],
              f = b.modules[d.target];
            a.push(new g(void 0 === e.gid ? d.source : c[e.gid], void 0 === f.gid ? d.target : c[f.gid], d.type));
          }), c;
        }, a.prototype.allEdges = function () {
          var b = [];
          return a.getEdges(this.roots[0], b), b;
        }, a.getEdges = function (b, c) {
          b.forAll(function (b) {
            b.getEdges(c), a.getEdges(b.children, c);
          });
        }, a;
      }();
      c.Configuration = h;
      var i = function () {
        function a(a, b, c, d, e) {
          void 0 === b && (b = new k()), void 0 === c && (c = new k()), void 0 === d && (d = new j()), this.id = a, this.outgoing = b, this.incoming = c, this.children = d, this.definition = e;
        }
        return a.prototype.getEdges = function (a) {
          var b = this;
          this.outgoing.forAll(function (c, d) {
            c.forAll(function (c) {
              a.push(new g(b.id, c.id, d));
            });
          });
        }, a.prototype.isLeaf = function () {
          return 0 === this.children.count();
        }, a.prototype.isIsland = function () {
          return 0 === this.outgoing.count() && 0 === this.incoming.count();
        }, a.prototype.isPredefined = function () {
          return void 0 !== this.definition;
        }, a;
      }();
      c.Module = i;
      var j = function () {
        function a() {
          this.table = {};
        }
        return a.prototype.count = function () {
          return Object.keys(this.table).length;
        }, a.prototype.intersection = function (b) {
          var c = new a();
          return c.table = e(this.table, b.table), c;
        }, a.prototype.intersectionCount = function (a) {
          return this.intersection(a).count();
        }, a.prototype.contains = function (a) {
          return a in this.table;
        }, a.prototype.add = function (a) {
          this.table[a.id] = a;
        }, a.prototype.remove = function (a) {
          delete this.table[a.id];
        }, a.prototype.forAll = function (a) {
          for (var b in this.table) a(this.table[b]);
        }, a.prototype.modules = function () {
          var a = [];
          return this.forAll(function (b) {
            b.isPredefined() || a.push(b);
          }), a;
        }, a;
      }();
      c.ModuleSet = j;
      var k = function () {
        function a() {
          this.sets = {}, this.n = 0;
        }
        return a.prototype.count = function () {
          return this.n;
        }, a.prototype.contains = function (a) {
          var b = !1;
          return this.forAllModules(function (c) {
            b || c.id != a || (b = !0);
          }), b;
        }, a.prototype.add = function (a, b) {
          (a in this.sets ? this.sets[a] : this.sets[a] = new j()).add(b), ++this.n;
        }, a.prototype.remove = function (a, b) {
          var c = this.sets[a];
          c.remove(b), 0 === c.count() && delete this.sets[a], --this.n;
        }, a.prototype.forAll = function (a) {
          for (var b in this.sets) a(this.sets[b], Number(b));
        }, a.prototype.forAllModules = function (a) {
          this.forAll(function (b, c) {
            return b.forAll(a);
          });
        }, a.prototype.intersection = function (b) {
          var c = new a();
          return this.forAll(function (a, d) {
            if (d in b.sets) {
              var e = a.intersection(b.sets[d]),
                f = e.count();
              f > 0 && (c.sets[d] = e, c.n += f);
            }
          }), c;
        }, a;
      }();
      c.LinkSets = k, c.getGroups = f;
    }, {}],
    15: [function (a, b, c) {
      "use strict";

      Object.defineProperty(c, "__esModule", {
        value: !0
      });
      var d = function () {
        function a(a) {
          this.elem = a, this.subheaps = [];
        }
        return a.prototype.toString = function (a) {
          for (var b = "", c = !1, d = 0; d < this.subheaps.length; ++d) {
            var e = this.subheaps[d];
            e.elem ? (c && (b += ","), b += e.toString(a), c = !0) : c = !1;
          }
          return "" !== b && (b = "(" + b + ")"), (this.elem ? a(this.elem) : "") + b;
        }, a.prototype.forEach = function (a) {
          this.empty() || (a(this.elem, this), this.subheaps.forEach(function (b) {
            return b.forEach(a);
          }));
        }, a.prototype.count = function () {
          return this.empty() ? 0 : 1 + this.subheaps.reduce(function (a, b) {
            return a + b.count();
          }, 0);
        }, a.prototype.min = function () {
          return this.elem;
        }, a.prototype.empty = function () {
          return null == this.elem;
        }, a.prototype.contains = function (a) {
          if (this === a) return !0;
          for (var b = 0; b < this.subheaps.length; b++) if (this.subheaps[b].contains(a)) return !0;
          return !1;
        }, a.prototype.isHeap = function (a) {
          var b = this;
          return this.subheaps.every(function (c) {
            return a(b.elem, c.elem) && c.isHeap(a);
          });
        }, a.prototype.insert = function (b, c) {
          return this.merge(new a(b), c);
        }, a.prototype.merge = function (a, b) {
          return this.empty() ? a : a.empty() ? this : b(this.elem, a.elem) ? (this.subheaps.push(a), this) : (a.subheaps.push(this), a);
        }, a.prototype.removeMin = function (a) {
          return this.empty() ? null : this.mergePairs(a);
        }, a.prototype.mergePairs = function (b) {
          if (0 == this.subheaps.length) return new a(null);
          if (1 == this.subheaps.length) return this.subheaps[0];
          var c = this.subheaps.pop().merge(this.subheaps.pop(), b),
            d = this.mergePairs(b);
          return c.merge(d, b);
        }, a.prototype.decreaseKey = function (b, c, d, e) {
          var f = b.removeMin(e);
          b.elem = f.elem, b.subheaps = f.subheaps, null !== d && null !== f.elem && d(b.elem, b);
          var g = new a(c);
          return null !== d && d(c, g), this.merge(g, e);
        }, a;
      }();
      c.PairingHeap = d;
      var e = function () {
        function a(a) {
          this.lessThan = a;
        }
        return a.prototype.top = function () {
          return this.empty() ? null : this.root.elem;
        }, a.prototype.push = function () {
          for (var a = [], b = 0; b < arguments.length; b++) a[b] = arguments[b];
          for (var c, e, f = 0; e = a[f]; ++f) c = new d(e), this.root = this.empty() ? c : this.root.merge(c, this.lessThan);
          return c;
        }, a.prototype.empty = function () {
          return !this.root || !this.root.elem;
        }, a.prototype.isHeap = function () {
          return this.root.isHeap(this.lessThan);
        }, a.prototype.forEach = function (a) {
          this.root.forEach(a);
        }, a.prototype.pop = function () {
          if (this.empty()) return null;
          var a = this.root.min();
          return this.root = this.root.removeMin(this.lessThan), a;
        }, a.prototype.reduceKey = function (a, b, c) {
          void 0 === c && (c = null), this.root = this.root.decreaseKey(a, b, c, this.lessThan);
        }, a.prototype.toString = function (a) {
          return this.root.toString(a);
        }, a.prototype.count = function () {
          return this.root.count();
        }, a;
      }();
      c.PriorityQueue = e;
    }, {}],
    16: [function (a, b, c) {
      "use strict";

      var d = this && this.__extends || function () {
        var _a5 = function a(b, c) {
          return (_a5 = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (a, b) {
            a.__proto__ = b;
          } || function (a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
          })(b, c);
        };
        return function (b, c) {
          function d() {
            this.constructor = b;
          }
          _a5(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d());
        };
      }();
      Object.defineProperty(c, "__esModule", {
        value: !0
      });
      var e = function () {
        function a() {
          this.findIter = function (a) {
            for (var b = this._root, c = this.iterator(); null !== b;) {
              var d = this._comparator(a, b.data);
              if (0 === d) return c._cursor = b, c;
              c._ancestors.push(b), b = b.get_child(d > 0);
            }
            return null;
          };
        }
        return a.prototype.clear = function () {
          this._root = null, this.size = 0;
        }, a.prototype.find = function (a) {
          for (var b = this._root; null !== b;) {
            var c = this._comparator(a, b.data);
            if (0 === c) return b.data;
            b = b.get_child(c > 0);
          }
          return null;
        }, a.prototype.lowerBound = function (a) {
          return this._bound(a, this._comparator);
        }, a.prototype.upperBound = function (a) {
          function b(a, b) {
            return c(b, a);
          }
          var c = this._comparator;
          return this._bound(a, b);
        }, a.prototype.min = function () {
          var a = this._root;
          if (null === a) return null;
          for (; null !== a.left;) a = a.left;
          return a.data;
        }, a.prototype.max = function () {
          var a = this._root;
          if (null === a) return null;
          for (; null !== a.right;) a = a.right;
          return a.data;
        }, a.prototype.iterator = function () {
          return new f(this);
        }, a.prototype.each = function (a) {
          for (var b, c = this.iterator(); null !== (b = c.next());) a(b);
        }, a.prototype.reach = function (a) {
          for (var b, c = this.iterator(); null !== (b = c.prev());) a(b);
        }, a.prototype._bound = function (a, b) {
          for (var c = this._root, d = this.iterator(); null !== c;) {
            var e = this._comparator(a, c.data);
            if (0 === e) return d._cursor = c, d;
            d._ancestors.push(c), c = c.get_child(e > 0);
          }
          for (var f = d._ancestors.length - 1; f >= 0; --f) if (c = d._ancestors[f], b(a, c.data) > 0) return d._cursor = c, d._ancestors.length = f, d;
          return d._ancestors.length = 0, d;
        }, a;
      }();
      c.TreeBase = e;
      var f = function () {
        function a(a) {
          this._tree = a, this._ancestors = [], this._cursor = null;
        }
        return a.prototype.data = function () {
          return null !== this._cursor ? this._cursor.data : null;
        }, a.prototype.next = function () {
          if (null === this._cursor) {
            var a = this._tree._root;
            null !== a && this._minNode(a);
          } else if (null === this._cursor.right) {
            var b;
            do {
              if (b = this._cursor, !this._ancestors.length) {
                this._cursor = null;
                break;
              }
              this._cursor = this._ancestors.pop();
            } while (this._cursor.right === b);
          } else this._ancestors.push(this._cursor), this._minNode(this._cursor.right);
          return null !== this._cursor ? this._cursor.data : null;
        }, a.prototype.prev = function () {
          if (null === this._cursor) {
            var a = this._tree._root;
            null !== a && this._maxNode(a);
          } else if (null === this._cursor.left) {
            var b;
            do {
              if (b = this._cursor, !this._ancestors.length) {
                this._cursor = null;
                break;
              }
              this._cursor = this._ancestors.pop();
            } while (this._cursor.left === b);
          } else this._ancestors.push(this._cursor), this._maxNode(this._cursor.left);
          return null !== this._cursor ? this._cursor.data : null;
        }, a.prototype._minNode = function (a) {
          for (; null !== a.left;) this._ancestors.push(a), a = a.left;
          this._cursor = a;
        }, a.prototype._maxNode = function (a) {
          for (; null !== a.right;) this._ancestors.push(a), a = a.right;
          this._cursor = a;
        }, a;
      }();
      c.Iterator = f;
      var g = function () {
          function a(a) {
            this.data = a, this.left = null, this.right = null, this.red = !0;
          }
          return a.prototype.get_child = function (a) {
            return a ? this.right : this.left;
          }, a.prototype.set_child = function (a, b) {
            a ? this.right = b : this.left = b;
          }, a;
        }(),
        h = function (a) {
          function b(b) {
            var c = a.call(this) || this;
            return c._root = null, c._comparator = b, c.size = 0, c;
          }
          return d(b, a), b.prototype.insert = function (a) {
            var c = !1;
            if (null === this._root) this._root = new g(a), c = !0, this.size++;else {
              var d = new g(void 0),
                e = !1,
                f = !1,
                h = null,
                i = d,
                j = null,
                k = this._root;
              for (i.right = this._root;;) {
                if (null === k ? (k = new g(a), j.set_child(e, k), c = !0, this.size++) : b.is_red(k.left) && b.is_red(k.right) && (k.red = !0, k.left.red = !1, k.right.red = !1), b.is_red(k) && b.is_red(j)) {
                  var l = i.right === h;
                  k === j.get_child(f) ? i.set_child(l, b.single_rotate(h, !f)) : i.set_child(l, b.double_rotate(h, !f));
                }
                var m = this._comparator(k.data, a);
                if (0 === m) break;
                f = e, e = m < 0, null !== h && (i = h), h = j, j = k, k = k.get_child(e);
              }
              this._root = d.right;
            }
            return this._root.red = !1, c;
          }, b.prototype.remove = function (a) {
            if (null === this._root) return !1;
            var c = new g(void 0),
              d = c;
            d.right = this._root;
            for (var e = null, f = null, h = null, i = !0; null !== d.get_child(i);) {
              var j = i;
              f = e, e = d, d = d.get_child(i);
              var k = this._comparator(a, d.data);
              if (i = k > 0, 0 === k && (h = d), !b.is_red(d) && !b.is_red(d.get_child(i))) if (b.is_red(d.get_child(!i))) {
                var l = b.single_rotate(d, i);
                e.set_child(j, l), e = l;
              } else if (!b.is_red(d.get_child(!i))) {
                var m = e.get_child(!j);
                if (null !== m) if (b.is_red(m.get_child(!j)) || b.is_red(m.get_child(j))) {
                  var n = f.right === e;
                  b.is_red(m.get_child(j)) ? f.set_child(n, b.double_rotate(e, j)) : b.is_red(m.get_child(!j)) && f.set_child(n, b.single_rotate(e, j));
                  var o = f.get_child(n);
                  o.red = !0, d.red = !0, o.left.red = !1, o.right.red = !1;
                } else e.red = !1, m.red = !0, d.red = !0;
              }
            }
            return null !== h && (h.data = d.data, e.set_child(e.right === d, d.get_child(null === d.left)), this.size--), this._root = c.right, null !== this._root && (this._root.red = !1), null !== h;
          }, b.is_red = function (a) {
            return null !== a && a.red;
          }, b.single_rotate = function (a, b) {
            var c = a.get_child(!b);
            return a.set_child(!b, c.get_child(b)), c.set_child(b, a), a.red = !0, c.red = !1, c;
          }, b.double_rotate = function (a, c) {
            return a.set_child(!c, b.single_rotate(a.get_child(!c), !c)), b.single_rotate(a, c);
          }, b;
        }(e);
      c.RBTree = h;
    }, {}],
    17: [function (a, b, c) {
      "use strict";

      function d(a) {
        return a.bounds = void 0 !== a.leaves ? a.leaves.reduce(function (a, b) {
          return b.bounds.union(a);
        }, u.empty()) : u.empty(), void 0 !== a.groups && (a.bounds = a.groups.reduce(function (a, b) {
          return d(b).union(a);
        }, a.bounds)), a.bounds = a.bounds.inflate(a.padding), a.bounds;
      }
      function e(a, b, c) {
        var d = a.rayIntersection(b.cx(), b.cy()) || {
            x: a.cx(),
            y: a.cy()
          },
          e = b.rayIntersection(a.cx(), a.cy()) || {
            x: b.cx(),
            y: b.cy()
          },
          f = e.x - d.x,
          g = e.y - d.y,
          h = Math.sqrt(f * f + g * g),
          i = h - c;
        return {
          sourceIntersection: d,
          targetIntersection: e,
          arrowStart: {
            x: d.x + i * f / h,
            y: d.y + i * g / h
          }
        };
      }
      function f(a, b, c) {
        var d = b.rayIntersection(a.x, a.y);
        d || (d = {
          x: b.cx(),
          y: b.cy()
        });
        var e = d.x - a.x,
          f = d.y - a.y,
          g = Math.sqrt(e * e + f * f);
        return {
          x: d.x - c * e / g,
          y: d.y - c * f / g
        };
      }
      function g(a, b) {
        return a.pos > b.pos ? 1 : a.pos < b.pos ? -1 : a.isOpen ? -1 : b.isOpen ? 1 : 0;
      }
      function h() {
        return new t.RBTree(function (a, b) {
          return a.pos - b.pos;
        });
      }
      function i(a, b, c, d) {
        void 0 === d && (d = !1);
        var e = a.padding,
          f = void 0 !== a.groups ? a.groups.length : 0,
          g = void 0 !== a.leaves ? a.leaves.length : 0,
          h = f ? a.groups.reduce(function (a, d) {
            return a.concat(i(d, b, c, !0));
          }, []) : [],
          k = (d ? 2 : 0) + g + f,
          l = new Array(k),
          m = new Array(k),
          n = 0,
          o = function o(a, b) {
            m[n] = a, l[n++] = b;
          };
        if (d) {
          var p = a.bounds,
            q = b.getCentre(p),
            r = b.getSize(p) / 2,
            s = b.getOpen(p),
            t = b.getClose(p),
            u = q - r + e / 2,
            v = q + r - e / 2;
          a.minVar.desiredPosition = u, o(b.makeRect(s, t, u, e), a.minVar), a.maxVar.desiredPosition = v, o(b.makeRect(s, t, v, e), a.maxVar);
        }
        g && a.leaves.forEach(function (a) {
          return o(a.bounds, a.variable);
        }), f && a.groups.forEach(function (a) {
          var c = a.bounds;
          o(b.makeRect(b.getOpen(c), b.getClose(c), b.getCentre(c), b.getSize(c)), a.minVar);
        });
        var w = j(m, l, b, c);
        return f && (l.forEach(function (a) {
          a.cOut = [], a.cIn = [];
        }), w.forEach(function (a) {
          a.left.cOut.push(a), a.right.cIn.push(a);
        }), a.groups.forEach(function (a) {
          var c = (a.padding - b.getSize(a.bounds)) / 2;
          a.minVar.cIn.forEach(function (a) {
            return a.gap += c;
          }), a.minVar.cOut.forEach(function (b) {
            b.left = a.maxVar, b.gap += c;
          });
        })), h.concat(w);
      }
      function j(a, b, c, d) {
        var e,
          f = a.length,
          i = 2 * f;
        console.assert(b.length >= f);
        var j = new Array(i);
        for (e = 0; e < f; ++e) {
          var k = a[e],
            l = new v(b[e], k, c.getCentre(k));
          j[e] = new w(!0, l, c.getOpen(k)), j[e + f] = new w(!1, l, c.getClose(k));
        }
        j.sort(g);
        var m = new Array(),
          n = h();
        for (e = 0; e < i; ++e) {
          var o = j[e],
            l = o.v;
          if (o.isOpen) n.insert(l), c.findNeighbours(l, n);else {
            n.remove(l);
            var p = function p(a, b) {
                var e = (c.getSize(a.r) + c.getSize(b.r)) / 2 + d;
                m.push(new s.Constraint(a.v, b.v, e));
              },
              q = function q(a, b, c) {
                for (var d, e = l[a].iterator(); null !== (d = e[a]());) c(d, l), d[b].remove(l);
              };
            q("prev", "next", function (a, b) {
              return p(a, b);
            }), q("next", "prev", function (a, b) {
              return p(b, a);
            });
          }
        }
        return console.assert(0 === n.size), m;
      }
      function k(a, b) {
        var c = function c(_c2, d) {
          for (var e, f = b.findIter(a); null !== (e = f[_c2]());) {
            var g = e.r.overlapX(a.r);
            if ((g <= 0 || g <= e.r.overlapY(a.r)) && (a[_c2].insert(e), e[d].insert(a)), g <= 0) break;
          }
        };
        c("next", "prev"), c("prev", "next");
      }
      function l(a, b) {
        var c = function c(_c3, d) {
          var e = b.findIter(a)[_c3]();
          null !== e && e.r.overlapX(a.r) > 0 && (a[_c3].insert(e), e[d].insert(a));
        };
        c("next", "prev"), c("prev", "next");
      }
      function m(a, b) {
        return j(a, b, x, 1e-6);
      }
      function n(a, b) {
        return j(a, b, y, 1e-6);
      }
      function o(a) {
        return i(a, x, 1e-6);
      }
      function p(a) {
        return i(a, y, 1e-6);
      }
      function q(a) {
        var b = a.map(function (a) {
            return new s.Variable(a.cx());
          }),
          c = m(a, b),
          d = new s.Solver(b, c);
        d.solve(), b.forEach(function (b, c) {
          return a[c].setXCentre(b.position());
        }), b = a.map(function (a) {
          return new s.Variable(a.cy());
        }), c = n(a, b), d = new s.Solver(b, c), d.solve(), b.forEach(function (b, c) {
          return a[c].setYCentre(b.position());
        });
      }
      var r = this && this.__extends || function () {
        var _a6 = function a(b, c) {
          return (_a6 = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (a, b) {
            a.__proto__ = b;
          } || function (a, b) {
            for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
          })(b, c);
        };
        return function (b, c) {
          function d() {
            this.constructor = b;
          }
          _a6(b, c), b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d());
        };
      }();
      Object.defineProperty(c, "__esModule", {
        value: !0
      });
      var s = a("./vpsc"),
        t = a("./rbtree");
      c.computeGroupBounds = d;
      var u = function () {
        function a(a, b, c, d) {
          this.x = a, this.X = b, this.y = c, this.Y = d;
        }
        return a.empty = function () {
          return new a(Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY);
        }, a.prototype.cx = function () {
          return (this.x + this.X) / 2;
        }, a.prototype.cy = function () {
          return (this.y + this.Y) / 2;
        }, a.prototype.overlapX = function (a) {
          var b = this.cx(),
            c = a.cx();
          return b <= c && a.x < this.X ? this.X - a.x : c <= b && this.x < a.X ? a.X - this.x : 0;
        }, a.prototype.overlapY = function (a) {
          var b = this.cy(),
            c = a.cy();
          return b <= c && a.y < this.Y ? this.Y - a.y : c <= b && this.y < a.Y ? a.Y - this.y : 0;
        }, a.prototype.setXCentre = function (a) {
          var b = a - this.cx();
          this.x += b, this.X += b;
        }, a.prototype.setYCentre = function (a) {
          var b = a - this.cy();
          this.y += b, this.Y += b;
        }, a.prototype.width = function () {
          return this.X - this.x;
        }, a.prototype.height = function () {
          return this.Y - this.y;
        }, a.prototype.union = function (b) {
          return new a(Math.min(this.x, b.x), Math.max(this.X, b.X), Math.min(this.y, b.y), Math.max(this.Y, b.Y));
        }, a.prototype.lineIntersections = function (b, c, d, e) {
          for (var f = [[this.x, this.y, this.X, this.y], [this.X, this.y, this.X, this.Y], [this.X, this.Y, this.x, this.Y], [this.x, this.Y, this.x, this.y]], g = [], h = 0; h < 4; ++h) {
            var i = a.lineIntersection(b, c, d, e, f[h][0], f[h][1], f[h][2], f[h][3]);
            null !== i && g.push({
              x: i.x,
              y: i.y
            });
          }
          return g;
        }, a.prototype.rayIntersection = function (a, b) {
          var c = this.lineIntersections(this.cx(), this.cy(), a, b);
          return c.length > 0 ? c[0] : null;
        }, a.prototype.vertices = function () {
          return [{
            x: this.x,
            y: this.y
          }, {
            x: this.X,
            y: this.y
          }, {
            x: this.X,
            y: this.Y
          }, {
            x: this.x,
            y: this.Y
          }];
        }, a.lineIntersection = function (a, b, c, d, e, f, g, h) {
          var i = c - a,
            j = g - e,
            k = d - b,
            l = h - f,
            m = l * i - j * k;
          if (0 == m) return null;
          var n = a - e,
            o = b - f,
            p = j * o - l * n,
            q = p / m,
            r = i * o - k * n,
            s = r / m;
          return q >= 0 && q <= 1 && s >= 0 && s <= 1 ? {
            x: a + q * i,
            y: b + q * k
          } : null;
        }, a.prototype.inflate = function (b) {
          return new a(this.x - b, this.X + b, this.y - b, this.Y + b);
        }, a;
      }();
      c.Rectangle = u, c.makeEdgeBetween = e, c.makeEdgeTo = f;
      var v = function () {
          function a(a, b, c) {
            this.v = a, this.r = b, this.pos = c, this.prev = h(), this.next = h();
          }
          return a;
        }(),
        w = function () {
          function a(a, b, c) {
            this.isOpen = a, this.v = b, this.pos = c;
          }
          return a;
        }(),
        x = {
          getCentre: function getCentre(a) {
            return a.cx();
          },
          getOpen: function getOpen(a) {
            return a.y;
          },
          getClose: function getClose(a) {
            return a.Y;
          },
          getSize: function getSize(a) {
            return a.width();
          },
          makeRect: function makeRect(a, b, c, d) {
            return new u(c - d / 2, c + d / 2, a, b);
          },
          findNeighbours: k
        },
        y = {
          getCentre: function getCentre(a) {
            return a.cy();
          },
          getOpen: function getOpen(a) {
            return a.x;
          },
          getClose: function getClose(a) {
            return a.X;
          },
          getSize: function getSize(a) {
            return a.height();
          },
          makeRect: function makeRect(a, b, c, d) {
            return new u(a, b, c - d / 2, c + d / 2);
          },
          findNeighbours: l
        };
      c.generateXConstraints = m, c.generateYConstraints = n, c.generateXGroupConstraints = o, c.generateYGroupConstraints = p, c.removeOverlaps = q;
      var z = function (a) {
        function b(b, c) {
          var d = a.call(this, 0, c) || this;
          return d.index = b, d;
        }
        return r(b, a), b;
      }(s.Variable);
      c.IndexedVariable = z;
      var A = function () {
        function a(a, b, c, e, f) {
          var g = this;
          if (void 0 === c && (c = null), void 0 === e && (e = null), void 0 === f && (f = !1), this.nodes = a, this.groups = b, this.rootGroup = c, this.avoidOverlaps = f, this.variables = a.map(function (a, b) {
            return a.variable = new z(b, 1);
          }), e && this.createConstraints(e), f && c && void 0 !== c.groups) {
            a.forEach(function (a) {
              if (!a.width || !a.height) return void (a.bounds = new u(a.x, a.x, a.y, a.y));
              var b = a.width / 2,
                c = a.height / 2;
              a.bounds = new u(a.x - b, a.x + b, a.y - c, a.y + c);
            }), d(c);
            var h = a.length;
            b.forEach(function (a) {
              g.variables[h] = a.minVar = new z(h++, void 0 !== a.stiffness ? a.stiffness : .01), g.variables[h] = a.maxVar = new z(h++, void 0 !== a.stiffness ? a.stiffness : .01);
            });
          }
        }
        return a.prototype.createSeparation = function (a) {
          return new s.Constraint(this.nodes[a.left].variable, this.nodes[a.right].variable, a.gap, void 0 !== a.equality && a.equality);
        }, a.prototype.makeFeasible = function (a) {
          var b = this;
          if (this.avoidOverlaps) {
            var c = "x",
              d = "width";
            "x" === a.axis && (c = "y", d = "height");
            var e = a.offsets.map(function (a) {
                return b.nodes[a.node];
              }).sort(function (a, b) {
                return a[c] - b[c];
              }),
              f = null;
            e.forEach(function (a) {
              if (f) {
                var b = f[c] + f[d];
                b > a[c] && (a[c] = b);
              }
              f = a;
            });
          }
        }, a.prototype.createAlignment = function (a) {
          var b = this,
            c = this.nodes[a.offsets[0].node].variable;
          this.makeFeasible(a);
          var d = "x" === a.axis ? this.xConstraints : this.yConstraints;
          a.offsets.slice(1).forEach(function (a) {
            var e = b.nodes[a.node].variable;
            d.push(new s.Constraint(c, e, a.offset, !0));
          });
        }, a.prototype.createConstraints = function (a) {
          var b = this,
            c = function c(a) {
              return void 0 === a.type || "separation" === a.type;
            };
          this.xConstraints = a.filter(function (a) {
            return "x" === a.axis && c(a);
          }).map(function (a) {
            return b.createSeparation(a);
          }), this.yConstraints = a.filter(function (a) {
            return "y" === a.axis && c(a);
          }).map(function (a) {
            return b.createSeparation(a);
          }), a.filter(function (a) {
            return "alignment" === a.type;
          }).forEach(function (a) {
            return b.createAlignment(a);
          });
        }, a.prototype.setupVariablesAndBounds = function (a, b, c, d) {
          this.nodes.forEach(function (e, f) {
            e.fixed ? (e.variable.weight = e.fixedWeight ? e.fixedWeight : 1e3, c[f] = d(e)) : e.variable.weight = 1;
            var g = (e.width || 0) / 2,
              h = (e.height || 0) / 2,
              i = a[f],
              j = b[f];
            e.bounds = new u(i - g, i + g, j - h, j + h);
          });
        }, a.prototype.xProject = function (a, b, c) {
          (this.rootGroup || this.avoidOverlaps || this.xConstraints) && this.project(a, b, a, c, function (a) {
            return a.px;
          }, this.xConstraints, o, function (a) {
            return a.bounds.setXCentre(c[a.variable.index] = a.variable.position());
          }, function (a) {
            var b = c[a.minVar.index] = a.minVar.position(),
              d = c[a.maxVar.index] = a.maxVar.position(),
              e = a.padding / 2;
            a.bounds.x = b - e, a.bounds.X = d + e;
          });
        }, a.prototype.yProject = function (a, b, c) {
          (this.rootGroup || this.yConstraints) && this.project(a, b, b, c, function (a) {
            return a.py;
          }, this.yConstraints, p, function (a) {
            return a.bounds.setYCentre(c[a.variable.index] = a.variable.position());
          }, function (a) {
            var b = c[a.minVar.index] = a.minVar.position(),
              d = c[a.maxVar.index] = a.maxVar.position(),
              e = a.padding / 2;
            a.bounds.y = b - e, a.bounds.Y = d + e;
          });
        }, a.prototype.projectFunctions = function () {
          var a = this;
          return [function (b, c, d) {
            return a.xProject(b, c, d);
          }, function (b, c, d) {
            return a.yProject(b, c, d);
          }];
        }, a.prototype.project = function (a, b, c, e, f, g, h, i, j) {
          this.setupVariablesAndBounds(a, b, e, f), this.rootGroup && this.avoidOverlaps && (d(this.rootGroup), g = g.concat(h(this.rootGroup))), this.solve(this.variables, g, c, e), this.nodes.forEach(i), this.rootGroup && this.avoidOverlaps && (this.groups.forEach(j), d(this.rootGroup));
        }, a.prototype.solve = function (a, b, c, d) {
          var e = new s.Solver(a, b);
          e.setStartingPositions(c), e.setDesiredPositions(d), e.solve();
        }, a;
      }();
      c.Projection = A;
    }, {
      "./rbtree": 16,
      "./vpsc": 19
    }],
    18: [function (a, b, c) {
      "use strict";

      Object.defineProperty(c, "__esModule", {
        value: !0
      });
      var d = a("./pqueue"),
        e = function () {
          function a(a, b) {
            this.id = a, this.distance = b;
          }
          return a;
        }(),
        f = function () {
          function a(a) {
            this.id = a, this.neighbours = [];
          }
          return a;
        }(),
        g = function () {
          function a(a, b, c) {
            this.node = a, this.prev = b, this.d = c;
          }
          return a;
        }(),
        h = function () {
          function a(a, b, c, d, g) {
            this.n = a, this.es = b, this.neighbours = new Array(this.n);
            for (var h = this.n; h--;) this.neighbours[h] = new f(h);
            for (h = this.es.length; h--;) {
              var i = this.es[h],
                j = c(i),
                k = d(i),
                l = g(i);
              this.neighbours[j].neighbours.push(new e(k, l)), this.neighbours[k].neighbours.push(new e(j, l));
            }
          }
          return a.prototype.DistanceMatrix = function () {
            for (var a = new Array(this.n), b = 0; b < this.n; ++b) a[b] = this.dijkstraNeighbours(b);
            return a;
          }, a.prototype.DistancesFromNode = function (a) {
            return this.dijkstraNeighbours(a);
          }, a.prototype.PathFromNodeToNode = function (a, b) {
            return this.dijkstraNeighbours(a, b);
          }, a.prototype.PathFromNodeToNodeWithPrevCost = function (a, b, c) {
            var e = new d.PriorityQueue(function (a, b) {
                return a.d <= b.d;
              }),
              f = this.neighbours[a],
              h = new g(f, null, 0),
              i = {};
            for (e.push(h); !e.empty() && (h = e.pop(), f = h.node, f.id !== b);) for (var j = f.neighbours.length; j--;) {
              var k = f.neighbours[j],
                l = this.neighbours[k.id];
              if (!h.prev || l.id !== h.prev.node.id) {
                var m = l.id + "," + f.id;
                if (!(m in i && i[m] <= h.d)) {
                  var n = h.prev ? c(h.prev.node.id, f.id, l.id) : 0,
                    o = h.d + k.distance + n;
                  i[m] = o, e.push(new g(l, h, o));
                }
              }
            }
            for (var p = []; h.prev;) h = h.prev, p.push(h.node.id);
            return p;
          }, a.prototype.dijkstraNeighbours = function (a, b) {
            void 0 === b && (b = -1);
            for (var c = new d.PriorityQueue(function (a, b) {
                return a.d <= b.d;
              }), e = this.neighbours.length, f = new Array(e); e--;) {
              var g = this.neighbours[e];
              g.d = e === a ? 0 : Number.POSITIVE_INFINITY, g.q = c.push(g);
            }
            for (; !c.empty();) {
              var h = c.pop();
              if (f[h.id] = h.d, h.id === b) {
                for (var i = [], j = h; void 0 !== j.prev;) i.push(j.prev.id), j = j.prev;
                return i;
              }
              for (e = h.neighbours.length; e--;) {
                var k = h.neighbours[e],
                  j = this.neighbours[k.id],
                  l = h.d + k.distance;
                h.d !== Number.MAX_VALUE && j.d > l && (j.d = l, j.prev = h, c.reduceKey(j.q, j, function (a, b) {
                  return a.q = b;
                }));
              }
            }
            return f;
          }, a;
        }();
      c.Calculator = h;
    }, {
      "./pqueue": 15
    }],
    19: [function (a, b, c) {
      "use strict";

      function d(a, b, c) {
        for (var d = a.map(function (a) {
            return new g(a.desiredCenter);
          }), e = [], h = a.length, i = 0; i < h - 1; i++) {
          var k = a[i],
            l = a[i + 1];
          e.push(new f(d[i], d[i + 1], (k.size + l.size) / 2));
        }
        var m = d[0],
          n = d[h - 1],
          o = a[0].size / 2,
          p = a[h - 1].size / 2,
          q = null,
          r = null;
        return b && (q = new g(b, 1e3 * m.weight), d.push(q), e.push(new f(q, m, o))), c && (r = new g(c, 1e3 * n.weight), d.push(r), e.push(new f(n, r, p))), new j(d, e).solve(), {
          newCenters: d.slice(0, a.length).map(function (a) {
            return a.position();
          }),
          lowerBound: q ? q.position() : m.position() - o,
          upperBound: r ? r.position() : n.position() + p
        };
      }
      Object.defineProperty(c, "__esModule", {
        value: !0
      });
      var e = function () {
        function a(a) {
          this.scale = a, this.AB = 0, this.AD = 0, this.A2 = 0;
        }
        return a.prototype.addVariable = function (a) {
          var b = this.scale / a.scale,
            c = a.offset / a.scale,
            d = a.weight;
          this.AB += d * b * c, this.AD += d * b * a.desiredPosition, this.A2 += d * b * b;
        }, a.prototype.getPosn = function () {
          return (this.AD - this.AB) / this.A2;
        }, a;
      }();
      c.PositionStats = e;
      var f = function () {
        function a(a, b, c, d) {
          void 0 === d && (d = !1), this.left = a, this.right = b, this.gap = c, this.equality = d, this.active = !1, this.unsatisfiable = !1, this.left = a, this.right = b, this.gap = c, this.equality = d;
        }
        return a.prototype.slack = function () {
          return this.unsatisfiable ? Number.MAX_VALUE : this.right.scale * this.right.position() - this.gap - this.left.scale * this.left.position();
        }, a;
      }();
      c.Constraint = f;
      var g = function () {
        function a(a, b, c) {
          void 0 === b && (b = 1), void 0 === c && (c = 1), this.desiredPosition = a, this.weight = b, this.scale = c, this.offset = 0;
        }
        return a.prototype.dfdv = function () {
          return 2 * this.weight * (this.position() - this.desiredPosition);
        }, a.prototype.position = function () {
          return (this.block.ps.scale * this.block.posn + this.offset) / this.scale;
        }, a.prototype.visitNeighbours = function (a, b) {
          var c = function c(_c4, d) {
            return _c4.active && a !== d && b(_c4, d);
          };
          this.cOut.forEach(function (a) {
            return c(a, a.right);
          }), this.cIn.forEach(function (a) {
            return c(a, a.left);
          });
        }, a;
      }();
      c.Variable = g;
      var h = function () {
        function a(a) {
          this.vars = [], a.offset = 0, this.ps = new e(a.scale), this.addVariable(a);
        }
        return a.prototype.addVariable = function (a) {
          a.block = this, this.vars.push(a), this.ps.addVariable(a), this.posn = this.ps.getPosn();
        }, a.prototype.updateWeightedPosition = function () {
          this.ps.AB = this.ps.AD = this.ps.A2 = 0;
          for (var a = 0, b = this.vars.length; a < b; ++a) this.ps.addVariable(this.vars[a]);
          this.posn = this.ps.getPosn();
        }, a.prototype.compute_lm = function (a, b, c) {
          var d = this,
            e = a.dfdv();
          return a.visitNeighbours(b, function (b, f) {
            var g = d.compute_lm(f, a, c);
            f === b.right ? (e += g * b.left.scale, b.lm = g) : (e += g * b.right.scale, b.lm = -g), c(b);
          }), e / a.scale;
        }, a.prototype.populateSplitBlock = function (a, b) {
          var c = this;
          a.visitNeighbours(b, function (b, d) {
            d.offset = a.offset + (d === b.right ? b.gap : -b.gap), c.addVariable(d), c.populateSplitBlock(d, a);
          });
        }, a.prototype.traverse = function (a, b, c, d) {
          var e = this;
          void 0 === c && (c = this.vars[0]), void 0 === d && (d = null), c.visitNeighbours(d, function (d, f) {
            b.push(a(d)), e.traverse(a, b, f, c);
          });
        }, a.prototype.findMinLM = function () {
          var a = null;
          return this.compute_lm(this.vars[0], null, function (b) {
            !b.equality && (null === a || b.lm < a.lm) && (a = b);
          }), a;
        }, a.prototype.findMinLMBetween = function (a, b) {
          this.compute_lm(a, null, function () {});
          var c = null;
          return this.findPath(a, null, b, function (a, b) {
            !a.equality && a.right === b && (null === c || a.lm < c.lm) && (c = a);
          }), c;
        }, a.prototype.findPath = function (a, b, c, d) {
          var e = this,
            f = !1;
          return a.visitNeighbours(b, function (b, g) {
            f || g !== c && !e.findPath(g, a, c, d) || (f = !0, d(b, g));
          }), f;
        }, a.prototype.isActiveDirectedPathBetween = function (a, b) {
          if (a === b) return !0;
          for (var c = a.cOut.length; c--;) {
            var d = a.cOut[c];
            if (d.active && this.isActiveDirectedPathBetween(d.right, b)) return !0;
          }
          return !1;
        }, a.split = function (b) {
          return b.active = !1, [a.createSplitBlock(b.left), a.createSplitBlock(b.right)];
        }, a.createSplitBlock = function (b) {
          var c = new a(b);
          return c.populateSplitBlock(b, null), c;
        }, a.prototype.splitBetween = function (b, c) {
          var d = this.findMinLMBetween(b, c);
          if (null !== d) {
            var e = a.split(d);
            return {
              constraint: d,
              lb: e[0],
              rb: e[1]
            };
          }
          return null;
        }, a.prototype.mergeAcross = function (a, b, c) {
          b.active = !0;
          for (var d = 0, e = a.vars.length; d < e; ++d) {
            var f = a.vars[d];
            f.offset += c, this.addVariable(f);
          }
          this.posn = this.ps.getPosn();
        }, a.prototype.cost = function () {
          for (var a = 0, b = this.vars.length; b--;) {
            var c = this.vars[b],
              d = c.position() - c.desiredPosition;
            a += d * d * c.weight;
          }
          return a;
        }, a;
      }();
      c.Block = h;
      var i = function () {
        function a(a) {
          this.vs = a;
          var b = a.length;
          for (this.list = new Array(b); b--;) {
            var c = new h(a[b]);
            this.list[b] = c, c.blockInd = b;
          }
        }
        return a.prototype.cost = function () {
          for (var a = 0, b = this.list.length; b--;) a += this.list[b].cost();
          return a;
        }, a.prototype.insert = function (a) {
          a.blockInd = this.list.length, this.list.push(a);
        }, a.prototype.remove = function (a) {
          var b = this.list.length - 1,
            c = this.list[b];
          this.list.length = b, a !== c && (this.list[a.blockInd] = c, c.blockInd = a.blockInd);
        }, a.prototype.merge = function (a) {
          var b = a.left.block,
            c = a.right.block,
            d = a.right.offset - a.left.offset - a.gap;
          b.vars.length < c.vars.length ? (c.mergeAcross(b, a, d), this.remove(b)) : (b.mergeAcross(c, a, -d), this.remove(c));
        }, a.prototype.forEach = function (a) {
          this.list.forEach(a);
        }, a.prototype.updateBlockPositions = function () {
          this.list.forEach(function (a) {
            return a.updateWeightedPosition();
          });
        }, a.prototype.split = function (a) {
          var b = this;
          this.updateBlockPositions(), this.list.forEach(function (c) {
            var d = c.findMinLM();
            null !== d && d.lm < j.LAGRANGIAN_TOLERANCE && (c = d.left.block, h.split(d).forEach(function (a) {
              return b.insert(a);
            }), b.remove(c), a.push(d));
          });
        }, a;
      }();
      c.Blocks = i;
      var j = function () {
        function a(a, b) {
          this.vs = a, this.cs = b, this.vs = a, a.forEach(function (a) {
            a.cIn = [], a.cOut = [];
          }), this.cs = b, b.forEach(function (a) {
            a.left.cOut.push(a), a.right.cIn.push(a);
          }), this.inactive = b.map(function (a) {
            return a.active = !1, a;
          }), this.bs = null;
        }
        return a.prototype.cost = function () {
          return this.bs.cost();
        }, a.prototype.setStartingPositions = function (a) {
          this.inactive = this.cs.map(function (a) {
            return a.active = !1, a;
          }), this.bs = new i(this.vs), this.bs.forEach(function (b, c) {
            return b.posn = a[c];
          });
        }, a.prototype.setDesiredPositions = function (a) {
          this.vs.forEach(function (b, c) {
            return b.desiredPosition = a[c];
          });
        }, a.prototype.mostViolated = function () {
          for (var b = Number.MAX_VALUE, c = null, d = this.inactive, e = d.length, f = e, g = 0; g < e; ++g) {
            var h = d[g];
            if (!h.unsatisfiable) {
              var i = h.slack();
              if ((h.equality || i < b) && (b = i, c = h, f = g, h.equality)) break;
            }
          }
          return f !== e && (b < a.ZERO_UPPERBOUND && !c.active || c.equality) && (d[f] = d[e - 1], d.length = e - 1), c;
        }, a.prototype.satisfy = function () {
          null == this.bs && (this.bs = new i(this.vs)), this.bs.split(this.inactive);
          for (var b = null; (b = this.mostViolated()) && (b.equality || b.slack() < a.ZERO_UPPERBOUND && !b.active);) {
            var c = b.left.block;
            if (c !== b.right.block) this.bs.merge(b);else {
              if (c.isActiveDirectedPathBetween(b.right, b.left)) {
                b.unsatisfiable = !0;
                continue;
              }
              var d = c.splitBetween(b.left, b.right);
              if (null === d) {
                b.unsatisfiable = !0;
                continue;
              }
              this.bs.insert(d.lb), this.bs.insert(d.rb), this.bs.remove(c), this.inactive.push(d.constraint), b.slack() >= 0 ? this.inactive.push(b) : this.bs.merge(b);
            }
          }
        }, a.prototype.solve = function () {
          this.satisfy();
          for (var a = Number.MAX_VALUE, b = this.bs.cost(); Math.abs(a - b) > 1e-4;) this.satisfy(), a = b, b = this.bs.cost();
          return b;
        }, a.LAGRANGIAN_TOLERANCE = -1e-4, a.ZERO_UPPERBOUND = -1e-10, a;
      }();
      c.Solver = j, c.removeOverlapInOneDimension = d;
    }, {}]
  }, {}, [1])(1);
});