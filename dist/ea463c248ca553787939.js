function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e8) { throw _e8; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e9) { didErr = true; err = _e9; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/**
 * Minified by jsDelivr using Terser v5.3.5.
 * Original file: /npm/cytoscape-expand-collapse@4.1.0/cytoscape-expand-collapse.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function (e) {
  if ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module) module.exports = e();else if ("function" == typeof define && define.amd) define([], e);else {
    ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).cytoscapeExpandCollapse = e();
  }
}(function () {
  return function e(n, o, t) {
    function a(d, l) {
      if (!o[d]) {
        if (!n[d]) {
          var s = "function" == typeof require && require;
          if (!l && s) return s(d, !0);
          if (i) return i(d, !0);
          var r = new Error("Cannot find module '" + d + "'");
          throw r.code = "MODULE_NOT_FOUND", r;
        }
        var c = o[d] = {
          exports: {}
        };
        n[d][0].call(c.exports, function (e) {
          var o = n[d][1][e];
          return a(o || e);
        }, c, c.exports, e, n, o, t);
      }
      return o[d].exports;
    }
    for (var i = "function" == typeof require && require, d = 0; d < t.length; d++) a(t[d]);
    return a;
  }({
    1: [function (e, n, o) {
      var t = {
        equalBoundingBoxes: function equalBoundingBoxes(e, n) {
          return e.x1 == n.x1 && e.x2 == n.x2 && e.y1 == n.y1 && e.y2 == n.y2;
        },
        getUnion: function getUnion(e, n) {
          var o = {
            x1: Math.min(e.x1, n.x1),
            x2: Math.max(e.x2, n.x2),
            y1: Math.min(e.y1, n.y1),
            y2: Math.max(e.y2, n.y2)
          };
          return o.w = o.x2 - o.x1, o.h = o.y2 - o.y1, o;
        }
      };
      n.exports = t;
    }, {}],
    2: [function (e, n, o) {
      var t = e("./debounce"),
        a = e("./debounce2");
      n.exports = function (n, o, i) {
        var d,
          l = n;
        var s = 100;
        var r;
        var c = function c() {
            var e = o.scratch("_cyExpandCollapse");
            return e && e.cueUtilities;
          },
          p = function p(e) {
            var n = o.scratch("_cyExpandCollapse");
            null == n && (n = {}), n.cueUtilities = e, o.scratch("_cyExpandCollapse", n);
          };
        var u = {
          init: function init() {
            var n = document.createElement("canvas");
            n.classList.add("expand-collapse-canvas");
            var l = o.container(),
              c = n.getContext("2d");
            l.append(n), d = e("./elementUtilities")(o);
            var u = function u(e) {
                var n = e.getBoundingClientRect();
                return {
                  top: n.top + document.documentElement.scrollTop,
                  left: n.left + document.documentElement.scrollLeft
                };
              },
              f = t(function () {
                n.height = o.container().offsetHeight, n.width = o.container().offsetWidth, n.style.position = "absolute", n.style.top = 0, n.style.left = 0, n.style.zIndex = v().zIndex, setTimeout(function () {
                  var e = u(n),
                    t = u(l);
                  n.style.top = -(e.top - t.top), n.style.left = -(e.left - t.left), o && y();
                }, 0);
              }, 250);
            function g() {
              f();
            }
            g();
            var h = {};
            function v() {
              return o.scratch("_cyExpandCollapse").options;
            }
            function y() {
              var e = o.width(),
                n = o.height();
              c.clearRect(0, 0, e, n), r = null;
            }
            function x(e, n, o, t, a) {
              var i = new Image(t, a);
              i.src = e, i.onload = function () {
                c.drawImage(i, n, o, t, a);
              };
            }
            o.on("resize", h.eCyResize = function () {
              g();
            }), o.on("expandcollapse.clearvisualcue", function () {
              r && y();
            });
            var E,
              m = null,
              C = null;
            o.on("mousedown", h.eMouseDown = function (e) {
              m = e.renderedPosition || e.cyRenderedPosition;
            }), o.on("mouseup", h.eMouseUp = function (e) {
              C = e.renderedPosition || e.cyRenderedPosition;
            }), o.on("remove", "node", h.eRemove = function (e) {
              e.target == r && y();
            }), o.on("select unselect", h.eSelect = function () {
              r && y();
              var e = o.nodes(":selected");
              if (1 === e.length) {
                var n = e[0];
                (n.isParent() || n.hasClass("cy-expand-collapse-collapsed-node")) && function (e) {
                  var n = e.children(),
                    t = e.data("collapsedChildren");
                  if (null != n && null != n && n.length > 0 || t) {
                    var a,
                      i = e.hasClass("cy-expand-collapse-collapsed-node"),
                      l = v().expandCollapseCueSize,
                      s = v().expandCollapseCueLineSize;
                    if ("top-left" === v().expandCollapseCuePosition) {
                      var p = o.zoom() < 1 ? l / (2 * o.zoom()) : l / 2,
                        u = parseFloat(e.css("border-width"));
                      a = {
                        x: e.position("x") - e.width() / 2 - parseFloat(e.css("padding-left")) + u + p + 1,
                        y: e.position("y") - e.height() / 2 - parseFloat(e.css("padding-top")) + u + p + 1
                      };
                    } else {
                      var f = v().expandCollapseCuePosition;
                      a = "function" == typeof f ? f.call(this, e) : f;
                    }
                    var g = d.convertToRenderedPosition(a),
                      h = ((l = Math.max(l, l * o.zoom())) - (s = Math.max(s, s * o.zoom()))) / 2,
                      y = g.x,
                      E = g.y,
                      m = y - l / 2,
                      C = E - l / 2,
                      b = l;
                    if (i && v().expandCueImage) x(v().expandCueImage, m, C, l, l);else if (!i && v().collapseCueImage) x(v().collapseCueImage, m, C, l, l);else {
                      var w = c.fillStyle,
                        T = c.lineWidth,
                        N = c.strokeStyle;
                      c.fillStyle = "black", c.strokeStyle = "black", c.ellipse(y, E, l / 2, l / 2, 0, 0, 2 * Math.PI), c.fill(), c.beginPath(), c.strokeStyle = "white", c.lineWidth = Math.max(2.6, 2.6 * o.zoom()), c.moveTo(m + h, C + l / 2), c.lineTo(m + s + h, C + l / 2), i && (c.moveTo(m + l / 2, C + h), c.lineTo(m + l / 2, C + s + h)), c.closePath(), c.stroke(), c.strokeStyle = N, c.fillStyle = w, c.lineWidth = T;
                    }
                    e._private.data.expandcollapseRenderedStartX = m, e._private.data.expandcollapseRenderedStartY = C, e._private.data.expandcollapseRenderedCueSize = b, r = e;
                  }
                }(n);
              }
            }), o.on("tap", h.eTap = function (e) {
              var n = r;
              if (n) {
                var t = n.data("expandcollapseRenderedStartX"),
                  a = n.data("expandcollapseRenderedStartY"),
                  d = n.data("expandcollapseRenderedCueSize"),
                  l = t + d,
                  s = a + d,
                  c = e.renderedPosition || e.cyRenderedPosition,
                  p = c.x,
                  u = c.y,
                  f = v(),
                  g = (f.expandCollapseCueSensitivity - 1) / 2;
                Math.abs(m.x - C.x) < 5 && Math.abs(m.y - C.y) < 5 && p >= t - d * g && p <= l + d * g && u >= a - d * g && u <= s + d * g && (f.undoable && !E && (E = o.undoRedo({
                  defaultActions: !1
                })), i.isCollapsible(n) ? (y(), f.undoable ? E["do"]("collapse", {
                  nodes: n,
                  options: f
                }) : i.collapse(n, f)) : i.isExpandable(n) && (y(), f.undoable ? E["do"]("expand", {
                  nodes: n,
                  options: f
                }) : i.expand(n, f)), n.selectable() && (n.unselectify(), o.scratch("_cyExpandCollapse").selectableChanged = !0));
              }
            }), o.on("afterUndo afterRedo", h.eUndoRedo = h.eSelect), o.on("position", "node", h.ePosition = a(h.eSelect, s, y)), o.on("pan zoom", h.ePosition), h.hasEventFields = !0, p(h);
          },
          unbind: function unbind() {
            var e = c();
            e.hasEventFields ? (o.trigger("expandcollapse.clearvisualcue"), o.off("mousedown", "node", e.eMouseDown).off("mouseup", "node", e.eMouseUp).off("remove", "node", e.eRemove).off("tap", "node", e.eTap).off("add", "node", e.eAdd).off("position", "node", e.ePosition).off("pan zoom", e.ePosition).off("select unselect", e.eSelect).off("free", "node", e.eFree).off("resize", e.eCyResize).off("afterUndo afterRedo", e.eUndoRedo)) : console.log("events to unbind does not exist");
          },
          rebind: function rebind() {
            var e = c();
            e.hasEventFields ? o.on("mousedown", "node", e.eMouseDown).on("mouseup", "node", e.eMouseUp).on("remove", "node", e.eRemove).on("tap", "node", e.eTap).on("add", "node", e.eAdd).on("position", "node", e.ePosition).on("pan zoom", e.ePosition).on("select unselect", e.eSelect).on("free", "node", e.eFree).on("resize", e.eCyResize).on("afterUndo afterRedo", e.eUndoRedo) : console.log("events to rebind does not exist");
          }
        };
        if (u[l]) return u[l].apply(o.container(), Array.prototype.slice.call(arguments, 1));
        if ("object" == _typeof(l) || !l) return u.init.apply(o.container(), arguments);
        throw new Error("No such function `" + l + "` for cytoscape.js-expand-collapse");
      };
    }, {
      "./debounce": 3,
      "./debounce2": 4,
      "./elementUtilities": 5
    }],
    3: [function (e, n, o) {
      var t,
        a,
        i = (t = Math.max, a = Date.now || function () {
          return new Date().getTime();
        }, function (e, n, o) {
          var i,
            d,
            l,
            s,
            r,
            c,
            p,
            u,
            f,
            g = 0,
            h = !1,
            v = !0;
          if ("function" != typeof e) throw new TypeError("Expected a function");
          if (n = n < 0 ? 0 : +n || 0, !0 === o) {
            var y = !0;
            v = !1;
          } else f = _typeof(u = o), !u || "object" != f && "function" != f || (y = !!o.leading, h = "maxWait" in o && t(+o.maxWait || 0, n), v = "trailing" in o ? !!o.trailing : v);
          function x(n, o) {
            o && clearTimeout(o), d = c = p = void 0, n && (g = a(), l = e.apply(r, i), c || d || (i = r = void 0));
          }
          function E() {
            var e = n - (a() - s);
            e <= 0 || e > n ? x(p, d) : c = setTimeout(E, e);
          }
          function m() {
            x(v, c);
          }
          function C() {
            if (i = arguments, s = a(), r = this, p = v && (c || !y), !1 === h) var o = y && !c;else {
              d || y || (g = s);
              var t = h - (s - g),
                u = t <= 0 || t > h;
              u ? (d && (d = clearTimeout(d)), g = s, l = e.apply(r, i)) : d || (d = setTimeout(m, t));
            }
            return u && c ? c = clearTimeout(c) : c || n === h || (c = setTimeout(E, n)), o && (u = !0, l = e.apply(r, i)), !u || c || d || (i = r = void 0), l;
          }
          return C.cancel = function () {
            c && clearTimeout(c), d && clearTimeout(d), g = 0, d = c = p = void 0;
          }, C;
        });
      n.exports = i;
    }, {}],
    4: [function (e, n, o) {
      var t = function t(e, n, o) {
        var t,
          a = !0;
        return function () {
          var i = this,
            d = arguments,
            l = function l() {
              t = null, e.apply(i, d), a = !0;
            };
          clearTimeout(t), t = setTimeout(l, n), a && (o.apply(i, d), a = !1);
        };
      };
      n.exports = t;
    }, {}],
    5: [function (e, n, o) {
      n.exports = function (e) {
        return {
          moveNodes: function moveNodes(e, n, o) {
            var t = o ? n : this.getTopMostNodes(n),
              a = t.not(":parent");
            a.positions(function (n, o) {
              return {
                x: a[o].position("x") + e.x,
                y: a[o].position("y") + e.y
              };
            });
            for (var i = 0; i < t.length; i++) {
              var d = t[i].children();
              this.moveNodes(e, d, !0);
            }
          },
          getTopMostNodes: function getTopMostNodes(e) {
            for (var n = {}, o = 0; o < e.length; o++) n[e[o].id()] = !0;
            return e.filter(function (e, o) {
              "number" == typeof e && (e = o);
              for (var t = e.parent()[0]; null != t;) {
                if (n[t.id()]) return !1;
                t = t.parent()[0];
              }
              return !0;
            });
          },
          rearrange: function rearrange(n) {
            if ("function" == typeof n) n();else if (null != n) {
              var o = e.layout(n);
              o && o.run && o.run();
            }
          },
          convertToRenderedPosition: function convertToRenderedPosition(n) {
            var o = e.pan(),
              t = e.zoom();
            return {
              x: n.x * t + o.x,
              y: n.y * t + o.y
            };
          }
        };
      };
    }, {}],
    6: [function (e, n, o) {
      var t = e("./boundingBoxUtilities");
      n.exports = function (n) {
        var o = e("./elementUtilities")(n);
        return {
          animatedlyMovingNodeCount: 0,
          expandNodeBaseFunction: function expandNodeBaseFunction(e, t, a) {
            if (e._private.data.collapsedChildren) {
              var i = {
                x: e._private.position.x - e._private.data["position-before-collapse"].x,
                y: e._private.position.y - e._private.data["position-before-collapse"].y
              };
              e.removeData("infoLabel"), e.removeClass("cy-expand-collapse-collapsed-node"), e.trigger("expandcollapse.beforeexpand");
              var d = e._private.data.collapsedChildren;
              d.restore();
              for (var l = n.scratch("_cyExpandCollapse").parentData, s = 0; s < d.length; s++) delete l[d[s].id()];
              n.scratch("_cyExpandCollapse").parentData = l, this.repairEdges(e), e._private.data.collapsedChildren = null, o.moveNodes(i, e.children()), e.removeData("position-before-collapse"), e.trigger("position"), e.trigger("expandcollapse.afterexpand"), t && this.endOperation(a, e);
            }
          },
          simpleCollapseGivenNodes: function simpleCollapseGivenNodes(e) {
            e.data("collapse", !0);
            for (var n = o.getTopMostNodes(e), t = 0; t < n.length; t++) {
              var a = n[t];
              this.collapseBottomUp(a);
            }
            return e;
          },
          simpleExpandGivenNodes: function simpleExpandGivenNodes(e, n) {
            e.data("expand", !0);
            for (var t = o.getTopMostNodes(e), a = 0; a < t.length; a++) {
              var i = t[a];
              this.expandTopDown(i, n);
            }
            return e;
          },
          simpleExpandAllNodes: function simpleExpandAllNodes(e, t) {
            var a;
            void 0 === e && (e = n.nodes()), a = o.getTopMostNodes(e);
            for (var i = [], d = 0; d < a.length; d++) {
              var l = a[d];
              this.expandAllTopDown(l, i, t);
            }
            return i;
          },
          endOperation: function endOperation(e, t) {
            n.ready(function () {
              setTimeout(function () {
                o.rearrange(e), n.scratch("_cyExpandCollapse").selectableChanged && (t.selectify(), n.scratch("_cyExpandCollapse").selectableChanged = !1);
              }, 0);
            });
          },
          expandAllNodes: function expandAllNodes(e, n) {
            var o = this.simpleExpandAllNodes(e, n.fisheye);
            return this.endOperation(n.layoutBy, e), o;
          },
          expandAllTopDown: function expandAllTopDown(e, n, o) {
            null != e._private.data.collapsedChildren && (n.push(e), this.expandNode(e, o));
            for (var t = e.children(), a = 0; a < t.length; a++) {
              var i = t[a];
              this.expandAllTopDown(i, n, o);
            }
          },
          expandGivenNodes: function expandGivenNodes(e, n) {
            if (1 === e.length) {
              var o = e[0];
              null != o._private.data.collapsedChildren && this.expandNode(o, n.fisheye, !0, n.animate, n.layoutBy, n.animationDuration);
            } else this.simpleExpandGivenNodes(e, n.fisheye), this.endOperation(n.layoutBy, e);
            return e;
          },
          collapseGivenNodes: function collapseGivenNodes(e, o) {
            return n.startBatch(), this.simpleCollapseGivenNodes(e), n.endBatch(), e.trigger("position"), this.endOperation(o.layoutBy, e), n.style().update(), e;
          },
          collapseBottomUp: function collapseBottomUp(e) {
            for (var n = e.children(), o = 0; o < n.length; o++) {
              var t = n[o];
              this.collapseBottomUp(t);
            }
            e.data("collapse") && e.children().length > 0 && (this.collapseNode(e), e.removeData("collapse"));
          },
          expandTopDown: function expandTopDown(e, n) {
            e.data("expand") && null != e._private.data.collapsedChildren && (this.expandNode(e, n), e.removeData("expand"));
            for (var o = e.children(), t = 0; t < o.length; t++) {
              var a = o[t];
              this.expandTopDown(a);
            }
          },
          convertToModelPosition: function convertToModelPosition(e) {
            var o = n.pan(),
              t = n.zoom();
            return {
              x: (e.x - o.x) / t,
              y: (e.y - o.y) / t
            };
          },
          expandNode: function expandNode(e, o, a, i, d, l) {
            var s = this,
              r = function r(e, n, o, t, a, i) {
                n && (e._private.data["width-before-fisheye"] = e._private.data["size-before-collapse"].w, e._private.data["height-before-fisheye"] = e._private.data["size-before-collapse"].h, s.fishEyeViewExpandGivenNode(e, o, e, t, a, i)), o && n && t || s.expandNodeBaseFunction(e, o, a);
              };
            if (null != e._private.data.collapsedChildren) {
              this.storeWidthHeight(e);
              var c = !1;
              if (o && a) {
                var p = this.convertToModelPosition({
                    x: 0,
                    y: 0
                  }),
                  u = this.convertToModelPosition({
                    x: n.width(),
                    y: n.height()
                  }),
                  f = {
                    x1: p.x,
                    x2: u.x,
                    y1: p.y,
                    y2: u.y
                  },
                  g = {
                    x1: e._private.position.x - e._private.data["size-before-collapse"].w / 2 - 80,
                    x2: e._private.position.x + e._private.data["size-before-collapse"].w / 2 + 80,
                    y1: e._private.position.y - e._private.data["size-before-collapse"].h / 2 - 80,
                    y2: e._private.position.y + e._private.data["size-before-collapse"].h / 2 + 80
                  },
                  h = t.getUnion(g, f);
                if (!t.equalBoundingBoxes(h, f)) {
                  var v = n.getFitViewport(h, 10);
                  s = this;
                  c = i, i ? n.animate({
                    pan: v.pan,
                    zoom: v.zoom,
                    complete: function complete() {
                      r(e, o, a, i, d, l);
                    }
                  }, {
                    duration: l || 1e3
                  }) : (n.zoom(v.zoom), n.pan(v.pan));
                }
              }
              return c || r(e, o, a, i, d, l), e;
            }
          },
          collapseNode: function collapseNode(e) {
            if (null == e._private.data.collapsedChildren) {
              e.data("position-before-collapse", {
                x: e.position().x,
                y: e.position().y
              }), e.data("size-before-collapse", {
                w: e.outerWidth(),
                h: e.outerHeight()
              });
              var n = e.children();
              return n.unselect(), n.connectedEdges().unselect(), e.trigger("expandcollapse.beforecollapse"), this.barrowEdgesOfcollapsedChildren(e), this.removeChildren(e, e), e.addClass("cy-expand-collapse-collapsed-node"), e.trigger("expandcollapse.aftercollapse"), e.position(e.data("position-before-collapse")), e;
            }
          },
          storeWidthHeight: function storeWidthHeight(e) {
            null != e && (e._private.data["x-before-fisheye"] = this.xPositionInParent(e), e._private.data["y-before-fisheye"] = this.yPositionInParent(e), e._private.data["width-before-fisheye"] = e.outerWidth(), e._private.data["height-before-fisheye"] = e.outerHeight(), null != e.parent()[0] && this.storeWidthHeight(e.parent()[0]));
          },
          fishEyeViewExpandGivenNode: function fishEyeViewExpandGivenNode(e, n, o, t, a, i) {
            var d = this.getSiblings(e),
              l = this.xPositionInParent(e),
              s = this.yPositionInParent(e),
              r = Math.abs((e._private.data["width-before-fisheye"] - e.outerWidth()) / 2),
              c = Math.abs((e._private.data["width-before-fisheye"] - e.outerWidth()) / 2),
              p = Math.abs((e._private.data["height-before-fisheye"] - e.outerHeight()) / 2),
              u = Math.abs((e._private.data["height-before-fisheye"] - e.outerHeight()) / 2),
              f = Math.abs(e._private.data["x-before-fisheye"] - l),
              g = Math.abs(e._private.data["y-before-fisheye"] - s);
            e._private.data["x-before-fisheye"] > l ? (r += f, c -= f) : (r -= f, c += f), e._private.data["y-before-fisheye"] > s ? (p += g, u -= g) : (p -= g, u += g);
            for (var h = [], v = [], y = 0; y < d.length; y++) h.push(this.xPositionInParent(d[y])), v.push(this.yPositionInParent(d[y]));
            for (y = 0; y < d.length; y++) {
              var x = d[y],
                E = h[y],
                m = v[y],
                C = (m - s) / (E - l),
                b = 0,
                w = 0,
                T = 0,
                N = 0;
              b = l > E ? r : c, w = s > m ? p : u, isFinite(C) && (T = Math.min(b, w / Math.abs(C))), 0 !== C && (N = Math.min(w, b * Math.abs(C))), l > E && (T *= -1), s > m && (N *= -1), this.fishEyeViewMoveNode(x, T, N, o, n, t, a, i);
            }
            return 0 == d.length && e.same(o) && this.expandNodeBaseFunction(o, n, a), null != e.parent()[0] && this.fishEyeViewExpandGivenNode(e.parent()[0], n, o, t, a, i), e;
          },
          getSiblings: function getSiblings(e) {
            var o;
            null == e.parent()[0] ? o = n.nodes(":visible").orphans().difference(e) : o = e.siblings(":visible");
            return o;
          },
          fishEyeViewMoveNode: function fishEyeViewMoveNode(e, o, t, a, i, d, l, s) {
            var r = n.collection();
            e.isParent() && (r = e.children(":visible"));
            var c = this;
            if (0 == r.length) {
              var p = {
                x: e._private.position.x + o,
                y: e._private.position.y + t
              };
              i && d ? (this.animatedlyMovingNodeCount++, e.animate({
                position: p,
                complete: function complete() {
                  c.animatedlyMovingNodeCount--, c.animatedlyMovingNodeCount > 0 || !a.hasClass("cy-expand-collapse-collapsed-node") || c.expandNodeBaseFunction(a, i, l);
                }
              }, {
                duration: s || 1e3
              })) : e.position(p);
            } else for (var u = 0; u < r.length; u++) this.fishEyeViewMoveNode(r[u], o, t, a, i, d, l, s);
          },
          xPositionInParent: function xPositionInParent(e) {
            var n = e.parent()[0];
            return null != n ? e.relativePosition("x") + n.width() / 2 : e.position("x");
          },
          yPositionInParent: function yPositionInParent(e) {
            var n = e.parent()[0];
            return null != n ? e.relativePosition("y") + n.height() / 2 : e.position("y");
          },
          removeChildren: function removeChildren(e, o) {
            for (var t = e.children(), a = 0; a < t.length; a++) {
              var i = t[a];
              this.removeChildren(i, o);
              var d = n.scratch("_cyExpandCollapse").parentData;
              d[i.id()] = i.parent(), n.scratch("_cyExpandCollapse").parentData = d;
              var l = i.remove();
              null == o._private.data.collapsedChildren ? o._private.data.collapsedChildren = l : o._private.data.collapsedChildren = o._private.data.collapsedChildren.union(l);
            }
          },
          isMetaEdge: function isMetaEdge(e) {
            return e.hasClass("cy-expand-collapse-meta-edge");
          },
          barrowEdgesOfcollapsedChildren: function barrowEdgesOfcollapsedChildren(e) {
            var o = e.descendants(),
              t = o.edgesWith(n.nodes().not(o.union(e))),
              a = {};
            o.each(function (e, n) {
              "number" == typeof e && (e = n), a[e.id()] = !0;
            });
            for (var i = 0; i < t.length; i++) {
              var d = t[i],
                l = d.source(),
                s = d.target();
              if (!this.isMetaEdge(d)) {
                var r = {
                  source: l,
                  target: s
                };
                d.addClass("cy-expand-collapse-meta-edge"), d.data("originalEnds", r);
              }
              d.move({
                target: a[s.id()] ? e.id() : s.id(),
                source: a[l.id()] ? e.id() : l.id()
              });
            }
          },
          findNewEnd: function findNewEnd(e) {
            for (var o = e, t = n.scratch("_cyExpandCollapse").parentData, a = t[o.id()]; !o.inside();) o = a, a = t[a.id()];
            return o;
          },
          repairEdges: function repairEdges(e) {
            for (var n = e.connectedEdges(".cy-expand-collapse-meta-edge"), o = 0; o < n.length; o++) {
              var t = n[o],
                a = t.data("originalEnds"),
                i = t.data("source");
              t.data("target");
              (t = i === e.id() ? t.move({
                source: this.findNewEnd(a.source).id()
              }) : t.move({
                target: this.findNewEnd(a.target).id()
              })).data("source") === a.source.id() && t.data("target") === a.target.id() && (t.removeClass("cy-expand-collapse-meta-edge"), t.removeData("originalEnds"));
            }
          },
          isOuterNode: function isOuterNode(e, n) {
            for (var o = e; null != o;) {
              if (o == n) return !1;
              o = o.parent()[0];
            }
            return !0;
          },
          getCollapsedChildrenRecursively: function getCollapsedChildrenRecursively(e, n) {
            var o,
              t = e.data("collapsedChildren") || [];
            for (o = 0; o < t.length; o++) t[o].data("collapsedChildren") && (n = n.union(this.getCollapsedChildrenRecursively(t[o], n))), n = n.union(t[o]);
            return n;
          },
          collapseGivenEdges: function collapseGivenEdges(e, o) {
            e.unselect();
            var t = e.connectedNodes(),
              a = {};
            if (o.groupEdgesOfSameTypeOnCollapse) e.forEach(function (e) {
              var t = "unknown";
              if (void 0 !== o.edgeTypeInfo && (t = o.edgeTypeInfo instanceof Function ? o.edgeTypeInfo.call(e) : e.data()[o.edgeTypeInfo]), a.hasOwnProperty(t)) a[t].edges = a[t].edges.add(e), "unidirection" != a[t].directionType || a[t].source == e.source().id() && a[t].target == e.target().id() || (a[t].directionType = "bidirection");else {
                var i = n.collection();
                i = i.add(e), a[t] = {
                  edges: i,
                  directionType: "unidirection",
                  source: e.source().id(),
                  target: e.target().id()
                };
              }
            });else {
              a.unknown = {
                edges: e,
                directionType: "unidirection",
                source: e[0].source().id(),
                target: e[0].target().id()
              };
              for (var i = 0; i < e.length; i++) if ("unidirection" == a.unknown.directionType && (a.unknown.source != e[i].source().id() || a.unknown.target != e[i].target().id())) {
                a.unknown.directionType = "bidirection";
                break;
              }
            }
            var d = {
                edges: n.collection(),
                oldEdges: n.collection()
              },
              l = [];
            for (var _i in a) if (!(a[_i].edges.length < 2)) {
              e.trigger("expandcollapse.beforecollapseedge"), d.oldEdges = d.oldEdges.add(a[_i].edges);
              var s = {
                group: "edges",
                data: {}
              };
              s.data.source = a[_i].source, s.data.target = a[_i].target;
              var r = t[0].id(),
                c = r;
              t[1] && (c = t[1].id()), s.data.id = "collapsedEdge_" + r + "_" + c + "_" + _i + "_" + Math.floor(Math.random() * Date.now()), s.data.collapsedEdges = n.collection(), a[_i].edges.forEach(function (e) {
                s.data.collapsedEdges = s.data.collapsedEdges.add(e);
              }), s.data.collapsedEdges = this.check4nestedCollapse(s.data.collapsedEdges, o);
              var p = "edgeType";
              void 0 !== o.edgeTypeInfo && (p = o.edgeTypeInfo instanceof Function ? edgeTypeField : o.edgeTypeInfo), s.data[p] = _i, s.data.directionType = a[_i].directionType, s.classes = "cy-expand-collapse-collapsed-edge", l.push(s), n.remove(a[_i].edges), e.trigger("expandcollapse.aftercollapseedge");
            }
            return d.edges = n.add(l), d;
          },
          check4nestedCollapse: function check4nestedCollapse(e, o) {
            if (o.allowNestedEdgeCollapse) return e;
            var t = n.collection();
            for (var _n = 0; _n < e.length; _n++) {
              var _o = e[_n],
                a = _o.data("collapsedEdges");
              t = a && a.length > 0 ? t.add(a) : t.add(_o);
            }
            return t;
          },
          expandEdge: function expandEdge(e) {
            e.unselect();
            var o = {
                edges: n.collection(),
                oldEdges: n.collection()
              },
              t = e.data("collapsedEdges");
            return void 0 !== t && t.length > 0 && (e.trigger("expandcollapse.beforeexpandedge"), o.oldEdges = o.oldEdges.add(e), n.remove(e), o.edges = n.add(t), e.trigger("expandcollapse.afterexpandedge")), o;
          },
          isValidEdgesForCollapse: function isValidEdgesForCollapse(e) {
            var n = this.getEdgesDistinctEndPoints(e);
            return 2 == n.length && n;
          },
          getEdgesDistinctEndPoints: function getEdgesDistinctEndPoints(e) {
            var n = [];
            return e.forEach(function (e) {
              this.containsElement(n, e.source()) || n.push(e.source()), this.containsElement(n, e.target()) || n.push(e.target());
            }.bind(this)), n;
          },
          containsElement: function containsElement(e, n) {
            for (var o = !1, t = 0; t < e.length; t++) if (e[t].id() == n.id()) {
              o = !0;
              break;
            }
            return o;
          }
        };
      };
    }, {
      "./boundingBoxUtilities": 1,
      "./elementUtilities": 5
    }],
    7: [function (e, n, o) {
      !function () {
        "use strict";

        var o = function o(n) {
          if (n) {
            var o = e("./undoRedoUtilities"),
              t = e("./cueUtilities"),
              a = null;
            n("core", "expandCollapse", function (n) {
              var d = this,
                c = s(d, "options") || {
                  layoutBy: null,
                  fisheye: !0,
                  animate: !0,
                  animationDuration: 1e3,
                  ready: function ready() {},
                  undoable: !0,
                  cueEnabled: !0,
                  expandCollapseCuePosition: "top-left",
                  expandCollapseCueSize: 12,
                  expandCollapseCueLineSize: 8,
                  expandCueImage: void 0,
                  collapseCueImage: void 0,
                  expandCollapseCueSensitivity: 1,
                  edgeTypeInfo: "edgeType",
                  groupEdgesOfSameTypeOnCollapse: !1,
                  allowNestedEdgeCollapse: !0,
                  zIndex: 999
                };
              if ("get" !== n) {
                c = i(c, n);
                var p = l(d, e("./expandCollapseUtilities")(d));
                a = e("./saveLoadUtilities")(d, p), r(d, "api", p), o(d, p), t(c, d, p), c.cueEnabled || t("unbind", d, p), c.ready && c.ready(), r(d, "options", c);
                r(d, "parentData", {});
              }
              return s(d, "api");
            });
          }
          function i(e, n) {
            var o = {};
            for (var t in e) o[t] = e[t];
            for (var t in n) o.hasOwnProperty(t) && (o[t] = n[t]);
            return o;
          }
          function d(e) {
            var n = "function" == typeof e.animate ? e.animate.call() : e.animate,
              o = "function" == typeof e.fisheye ? e.fisheye.call() : e.fisheye;
            e.animate = n, e.fisheye = o;
          }
          function l(e, n) {
            var o = {};
            function l(n) {
              var t = s(e, "options");
              n.cueEnabled && !t.cueEnabled ? o.enableCue() : !n.cueEnabled && t.cueEnabled && o.disableCue();
            }
            return o.setOptions = function (n) {
              l(n), r(e, "options", n);
            }, o.extendOptions = function (n) {
              var o = i(s(e, "options"), n);
              l(o), r(e, "options", o);
            }, o.setOption = function (n, o) {
              var t = {};
              t[n] = o;
              var a = i(s(e, "options"), t);
              l(a), r(e, "options", a);
            }, o.collapse = function (o, t) {
              var a = this.collapsibleNodes(o),
                l = i(s(e, "options"), t);
              return d(l), n.collapseGivenNodes(a, l);
            }, o.collapseRecursively = function (n, o) {
              var t = this.collapsibleNodes(n),
                a = i(s(e, "options"), o);
              return d(a), this.collapse(t.union(t.descendants()), a);
            }, o.expand = function (o, t) {
              var a = this.expandableNodes(o),
                l = i(s(e, "options"), t);
              return d(l), n.expandGivenNodes(a, l);
            }, o.expandRecursively = function (o, t) {
              var a = this.expandableNodes(o),
                l = i(s(e, "options"), t);
              return d(l), n.expandAllNodes(a, l);
            }, o.collapseAll = function (n) {
              var o = i(s(e, "options"), n);
              return d(o), this.collapseRecursively(this.collapsibleNodes(), o);
            }, o.expandAll = function (n) {
              var o = i(s(e, "options"), n);
              return d(o), this.expandRecursively(this.expandableNodes(), o);
            }, o.isExpandable = function (e) {
              return e.hasClass("cy-expand-collapse-collapsed-node");
            }, o.isCollapsible = function (e) {
              return !this.isExpandable(e) && e.isParent();
            }, o.collapsibleNodes = function (n) {
              var o = this;
              return (n || e.nodes()).filter(function (e, n) {
                return "number" == typeof e && (e = n), o.isCollapsible(e);
              });
            }, o.expandableNodes = function (n) {
              var o = this;
              return (n || e.nodes()).filter(function (e, n) {
                return "number" == typeof e && (e = n), o.isExpandable(e);
              });
            }, o.getCollapsedChildren = function (e) {
              return e.data("collapsedChildren");
            }, o.getCollapsedChildrenRecursively = function (o) {
              var t = e.collection();
              return n.getCollapsedChildrenRecursively(o, t);
            }, o.getAllCollapsedChildrenRecursively = function () {
              var n,
                o = e.collection(),
                t = e.nodes(".cy-expand-collapse-collapsed-node");
              for (n = 0; n < t.length; n++) o = o.union(this.getCollapsedChildrenRecursively(t[n]));
              return o;
            }, o.clearVisualCue = function (n) {
              e.trigger("expandcollapse.clearvisualcue");
            }, o.disableCue = function () {
              var n = s(e, "options");
              n.cueEnabled && (t("unbind", e, o), n.cueEnabled = !1);
            }, o.enableCue = function () {
              var n = s(e, "options");
              n.cueEnabled || (t("rebind", e, o), n.cueEnabled = !0);
            }, o.getParent = function (n) {
              return void 0 === e.getElementById(n)[0] ? s(e, "parentData")[n] : e.getElementById(n).parent();
            }, o.collapseEdges = function (o, t) {
              var a = {
                edges: e.collection(),
                oldEdges: e.collection()
              };
              if (o.length < 2) return a;
              if (!function (e) {
                var n = [];
                for (var _o2 = 0; _o2 < e.length; _o2++) {
                  var _t = e[_o2].source().id(),
                    _a = e[_o2].target().id(),
                    _i2 = {};
                  _i2[_t] = !0, _i2[_a] = !0, n.push(_i2);
                }
                for (var _e = 0; _e < n.length; _e++) for (var _o3 = _e + 1; _o3 < n.length; _o3++) {
                  var _t2 = Object.keys(n[_e]),
                    _a2 = Object.keys(n[_o3]),
                    _i3 = new Set(_t2.concat(_a2));
                  if (_i3.size != _t2.length || _i3.size != _a2.length) return !1;
                }
                return !0;
              }(o)) return a;
              var d = i(s(e, "options"), t);
              return n.collapseGivenEdges(o, d);
            }, o.expandEdges = function (o) {
              var t = {
                edges: e.collection(),
                oldEdges: e.collection()
              };
              return void 0 === o || o.forEach(function (e) {
                var o = n.expandEdge(e);
                t.edges = t.edges.add(o.edges), t.oldEdges = t.oldEdges.add(o.oldEdges);
              }), t;
            }, o.collapseEdgesBetweenNodes = function (o, t) {
              var a = i(s(e, "options"), t);
              var d,
                l,
                r = (l = [], (d = o).slice(0, d.length - 1).forEach(function (e, n) {
                  d.slice(n + 1, d.length).forEach(function (n) {
                    l.push([e, n]);
                  });
                }), l);
              r.push.apply(r, _toConsumableArray(o.map(function (e) {
                return [e, e];
              })));
              var c = {
                edges: e.collection(),
                oldEdges: e.collection()
              };
              return r.forEach(function (e) {
                var o = e[1].id();
                var t = e[0].connectedEdges('[source = "' + o + '"],[target = "' + o + '"]');
                if (e[0].id() === o && (t = e[0].connectedEdges('[source = "' + o + '"][target = "' + o + '"]')), t.length >= 2) {
                  var i = n.collapseGivenEdges(t, a);
                  c.oldEdges = c.oldEdges.add(i.oldEdges), c.edges = c.edges.add(i.edges);
                }
              }.bind(this)), c;
            }, o.expandEdgesBetweenNodes = function (n) {
              var o = e.collection();
              var t,
                a,
                i = (a = [], (t = n).slice(0, t.length - 1).forEach(function (e, n) {
                  t.slice(n + 1, t.length).forEach(function (n) {
                    a.push([e, n]);
                  });
                }), a);
              return i.push.apply(i, _toConsumableArray(n.map(function (e) {
                return [e, e];
              }))), i.forEach(function (e) {
                var n = e[1].id();
                var t = e[0].connectedEdges('.cy-expand-collapse-collapsed-edge[source = "' + n + '"],[target = "' + n + '"]');
                e[0].id() === n && (t = e[0].connectedEdges('[source = "' + n + '"][target = "' + n + '"]')), o = o.union(t);
              }.bind(this)), this.expandEdges(o);
            }, o.collapseAllEdges = function (n) {
              return this.collapseEdgesBetweenNodes(e.edges().connectedNodes(), n);
            }, o.expandAllEdges = function () {
              var n = e.edges(".cy-expand-collapse-collapsed-edge"),
                o = {
                  edges: e.collection(),
                  oldEdges: e.collection()
                },
                t = this.expandEdges(n);
              return o.oldEdges = o.oldEdges.add(t.oldEdges), o.edges = o.edges.add(t.edges), o;
            }, o.loadJson = function (e) {
              a.loadJson(e);
            }, o.saveJson = function (e, n) {
              a.saveJson(e, n);
            }, o;
          }
          function s(e, n) {
            void 0 === e.scratch("_cyExpandCollapse") && e.scratch("_cyExpandCollapse", {});
            var o = e.scratch("_cyExpandCollapse");
            return void 0 === n ? o : o[n];
          }
          function r(e, n, o) {
            s(e)[n] = o;
          }
        };
        void 0 !== n && n.exports && (n.exports = o), "undefined" != typeof cytoscape && o(cytoscape);
      }();
    }, {
      "./cueUtilities": 2,
      "./expandCollapseUtilities": 6,
      "./saveLoadUtilities": 8,
      "./undoRedoUtilities": 9
    }],
    8: [function (e, n, o) {
      n.exports = function (e, n) {
        function o(n, a, i, d) {
          n.sort(function (e) {
            return "edges" === e.group ? 1 : -1;
          });
          var l = e.collection();
          for (var s = 0; s < n.length; s++) {
            var r = n[s],
              c = r.data;
            c.parent && (d[c.id] = c.parent);
            var p = {
                x: r.position.x,
                y: r.position.y
              },
              u = e.add(r);
            if (u.isNode() && a.merge(u), c.originalEnds) {
              var _e2 = a.$id(c.originalEnds.source.data.id);
              c.originalEnds.source.data.parent && (d[c.originalEnds.source.data.id] = c.originalEnds.source.data.parent);
              var _n2 = a.$id(c.originalEnds.target.data.id);
              c.originalEnds.target.data.parent && (d[c.originalEnds.target.data.id] = c.originalEnds.target.data.parent), u.data("originalEnds", {
                source: _e2,
                target: _n2
              });
            }
            c.collapsedChildren ? (i.merge(u), o(c.collapsedChildren, a, i, d), t(u)) : c.collapsedEdges && (u.data("collapsedEdges", o(c.collapsedEdges, a, i, d)), e.remove(u.data("collapsedEdges"))), u.position(p), l.merge(u);
          }
          return l;
        }
        function t(e) {
          e.data("collapsedChildren", null), e.removeClass("cy-expand-collapse-collapsed-node"), e.data("position-before-collapse", null), e.data("size-before-collapse", null), e.data("expandcollapseRenderedStartX", null), e.data("expandcollapseRenderedStartY", null), e.data("expandcollapseRenderedCueSize", null);
        }
        function a(e) {
          var n = [];
          for (var _o4 = 0; _o4 < e.length; _o4++) {
            var _t3 = e[_o4];
            var d = null;
            if (_t3.collapsedChildren || _t3.collapsedEdges ? _t3.collapsedChildren ? (_t3.collapsedChildren = a(i(_t3.collapsedChildren)), d = _t3.cy.json(), d.data.collapsedChildren = _t3.collapsedChildren) : _t3.collapsedEdges && (_t3.collapsedEdges = a(i(_t3.collapsedEdges)), d = _t3.cy.json(), d.data.collapsedEdges = _t3.collapsedEdges) : d = _t3.cy.json(), _t3.originalEnds) {
              var _e3 = _t3.originalEnds.source.json(),
                _n3 = _t3.originalEnds.target.json();
              _e3.data.collapsedChildren && (_e3.data.collapsedChildren = a(i(_e3.data.collapsedChildren))), _n3.data.collapsedChildren && (_n3.data.collapsedChildren = a(i(_n3.data.collapsedChildren))), d.data.originalEnds = {
                source: _e3,
                target: _n3
              };
            }
            n.push(d);
          }
          return n;
        }
        function i(e) {
          var n = [];
          for (var _o5 = 0; _o5 < e.length; _o5++) n.push({
            cy: e[_o5],
            collapsedEdges: e[_o5].data("collapsedEdges"),
            collapsedChildren: e[_o5].data("collapsedChildren"),
            originalEnds: e[_o5].data("originalEnds")
          });
          return n;
        }
        return {
          loadJson: function loadJson(a) {
            var i = JSON.parse(a),
              d = {},
              l = e.collection(),
              s = e.collection(),
              r = {};
            var _iterator = _createForOfIteratorHelper(i.nodes),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var _n5 = _step.value;
                d[_n5.data.id] = {
                  x: _n5.position.x,
                  y: _n5.position.y
                }, _n5.data.parent && (r[_n5.data.id] = _n5.data.parent);
                var _a3 = e.add(_n5);
                l.merge(_a3), _a3.data("collapsedChildren") && (o(_a3.data("collapsedChildren"), l, s, r), s.merge(_a3), t(_a3));
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            var _iterator2 = _createForOfIteratorHelper(i.edges),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _n6 = _step2.value;
                var _t4 = e.add(_n6);
                if (_t4.data("collapsedEdges") && (_t4.data("collapsedEdges", o(_n6.data.collapsedEdges, l, s, r)), e.remove(_t4.data("collapsedEdges"))), _t4.data("originalEnds")) {
                  var _e5 = _n6.data.originalEnds.source.data.id,
                    _o6 = _n6.data.originalEnds.target.data.id;
                  _n6.data.originalEnds = {
                    source: l.filter("#" + _e5),
                    target: l.filter("#" + _o6)
                  };
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            for (var _e4 in r) {
              var _n4 = l.$id(_e4);
              1 === _n4.length && _n4.move({
                parent: r[_e4]
              });
            }
            n.collapse(s, {
              layoutBy: null,
              fisheye: !1,
              animate: !1
            });
            var _iterator3 = _createForOfIteratorHelper(i.nodes),
              _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var _n7 = _step3.value;
                e.$id(_n7.data.id).isChildless() && e.$id(_n7.data.id).position(d[_n7.data.id]);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
            e.fit();
          },
          saveJson: function saveJson(n, o) {
            n || (n = e.$());
            var t = i(n.nodes()),
              d = i(n.edges());
            if (d.length + t.length < 1) return;
            var l = {
              nodes: [],
              edges: []
            };
            var _iterator4 = _createForOfIteratorHelper(d),
              _step4;
            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var _e6 = _step4.value;
                if (_e6.collapsedEdges && (_e6.collapsedEdges = a(i(_e6.collapsedEdges))), _e6.originalEnds) {
                  var _n8 = _e6.originalEnds.source.json(),
                    _o7 = _e6.originalEnds.target.json();
                  _n8.data.collapsedChildren && (_n8.data.collapsedChildren = a(i(_n8.data.collapsedChildren))), _o7.data.collapsedChildren && (_o7.data.collapsedChildren = a(i(_o7.data.collapsedChildren))), _e6.originalEnds = {
                    source: _n8,
                    target: _o7
                  };
                }
                var _n9 = _e6.cy.json();
                _n9.data.collapsedEdges = _e6.collapsedEdges, _n9.data.originalEnds = _e6.originalEnds, l.edges.push(_n9);
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
            var _iterator5 = _createForOfIteratorHelper(t),
              _step5;
            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var _e7 = _step5.value;
                _e7.collapsedChildren && (_e7.collapsedChildren = a(i(_e7.collapsedChildren)));
                var _n10 = _e7.cy.json();
                _n10.data.collapsedChildren = _e7.collapsedChildren, l.nodes.push(_n10);
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
            o || (o = "expand-collapse-output.json"), function (e, n) {
              var o = new Blob([e], {
                  type: "text/plain"
                }),
                t = document.createElement("a");
              t.download = n, t.href = window.URL.createObjectURL(o), t.dataset.downloadurl = ["text/plain", t.download, t.href].join(":"), t.click();
            }(JSON.stringify(l), o);
          }
        };
      };
    }, {}],
    9: [function (e, n, o) {
      n.exports = function (e, n) {
        if (null != e.undoRedo) {
          for (var o = e.undoRedo({}, !0), t = {
              layoutBy: null,
              animate: !1,
              fisheye: !1
            }, a = ["collapse", "collapseRecursively", "collapseAll", "expand", "expandRecursively", "expandAll"], i = 0; i < a.length; i++) 2 == i ? o.action("collapseAll", l("collapseAll"), l("expandRecursively")) : 5 == i ? o.action("expandAll", l("expandAll"), l("collapseRecursively")) : o.action(a[i], l(a[i]), l(a[(i + 3) % 6]));
          o.action("collapseEdges", s, p), o.action("expandEdges", p, s), o.action("collapseEdgesBetweenNodes", r, u), o.action("expandEdgesBetweenNodes", u, r), o.action("collapseAllEdges", c, f), o.action("expandAllEdges", f, c);
        }
        function d() {
          for (var n = {}, o = e.nodes(), t = 0; t < o.length; t++) {
            var a = o[t];
            n[a.id()] = {
              x: a.position("x"),
              y: a.position("y")
            };
          }
          return n;
        }
        function l(o) {
          return function (a) {
            var i,
              l,
              s,
              r = {},
              c = "string" == typeof (i = a.nodes) ? e.$(i) : i;
            return a.firstTime ? (r.oldData = d(), r.nodes = o.indexOf("All") > 0 ? n[o](a.options) : n[o](c, a.options)) : (r.oldData = d(), r.nodes = o.indexOf("All") > 0 ? n[o](t) : n[o](e.collection(c), t), l = a.oldData, s = {}, e.nodes().not(":parent").positions(function (e, n) {
              "number" == typeof e && (e = n), s[e.id()] = {
                x: e.position("x"),
                y: e.position("y")
              };
              var o = l[e.id()];
              return {
                x: o.x,
                y: o.y
              };
            })), r;
          };
        }
        function s(o) {
          var t = o.options,
            a = o.edges,
            i = {};
          if (i.options = t, o.firstTime) {
            var d = n.collapseEdges(a, t);
            i.edges = d.edges, i.oldEdges = d.oldEdges, i.firstTime = !1;
          } else i.oldEdges = a, i.edges = o.oldEdges, o.edges.length > 0 && o.oldEdges.length > 0 && (e.remove(o.edges), e.add(o.oldEdges));
          return i;
        }
        function r(o) {
          var t = o.options,
            a = {};
          if (a.options = t, o.firstTime) {
            var i = n.collapseEdgesBetweenNodes(o.nodes, t);
            a.edges = i.edges, a.oldEdges = i.oldEdges, a.firstTime = !1;
          } else a.edges = o.oldEdges, a.oldEdges = o.edges, o.edges.length > 0 && o.oldEdges.length > 0 && (e.remove(o.edges), e.add(o.oldEdges));
          return a;
        }
        function c(o) {
          var t = o.options,
            a = {};
          if (a.options = t, o.firstTime) {
            var i = n.collapseAllEdges(t);
            a.edges = i.edges, a.oldEdges = i.oldEdges, a.firstTime = !1;
          } else a.edges = o.oldEdges, a.oldEdges = o.edges, o.edges.length > 0 && o.oldEdges.length > 0 && (e.remove(o.edges), e.add(o.oldEdges));
          return a;
        }
        function p(o) {
          var t = o.options,
            a = {};
          if (a.options = t, o.firstTime) {
            var i = n.expandEdges(o.edges);
            a.edges = i.edges, a.oldEdges = i.oldEdges, a.firstTime = !1;
          } else a.oldEdges = o.edges, a.edges = o.oldEdges, o.edges.length > 0 && o.oldEdges.length > 0 && (e.remove(o.edges), e.add(o.oldEdges));
          return a;
        }
        function u(o) {
          var t = o.options,
            a = {};
          if (a.options = t, o.firstTime) {
            var i = n.expandEdgesBetweenNodes(o.nodes, t);
            a.edges = i.edges, a.oldEdges = i.oldEdges, a.firstTime = !1;
          } else a.edges = o.oldEdges, a.oldEdges = o.edges, o.edges.length > 0 && o.oldEdges.length > 0 && (e.remove(o.edges), e.add(o.oldEdges));
          return a;
        }
        function f(o) {
          var t = o.options,
            a = {};
          if (a.options = t, o.firstTime) {
            var i = n.expandAllEdges(t);
            a.edges = i.edges, a.oldEdges = i.oldEdges, a.firstTime = !1;
          } else a.edges = o.oldEdges, a.oldEdges = o.edges, o.edges.length > 0 && o.oldEdges.length > 0 && (e.remove(o.edges), e.add(o.oldEdges));
          return a;
        }
      };
    }, {}]
  }, {}, [7])(7);
});