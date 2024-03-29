function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).CytoscapeLasso = e();
}(this, function () {
  "use strict";

  var t = function t(_t, e) {
    if (!(_t instanceof e)) throw new TypeError("Cannot call a class as a function");
  };
  function e(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }
  var n = function n(t, _n, i) {
    return _n && e(t.prototype, _n), i && e(t, i), t;
  };
  var i = function i(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t;
  };
  function o(t, e) {
    var _n2;
    if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
      if (Array.isArray(t) || (_n2 = function (t, e) {
        if (!t) return;
        if ("string" == typeof t) return r(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        "Object" === n && t.constructor && (n = t.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(t);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(t, e);
      }(t)) || e && t && "number" == typeof t.length) {
        _n2 && (t = _n2);
        var i = 0,
          o = function o() {};
        return {
          s: o,
          n: function n() {
            return i >= t.length ? {
              done: !0
            } : {
              done: !1,
              value: t[i++]
            };
          },
          e: function e(t) {
            throw t;
          },
          f: o
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var a,
      s = !0,
      c = !1;
    return {
      s: function s() {
        _n2 = t[Symbol.iterator]();
      },
      n: function n() {
        var t = _n2.next();
        return s = t.done, t;
      },
      e: function e(t) {
        c = !0, a = t;
      },
      f: function f() {
        try {
          s || null == _n2["return"] || _n2["return"]();
        } finally {
          if (c) throw a;
        }
      }
    };
  }
  function r(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
    return i;
  }
  function a(t) {
    return t.shiftKey || t.metaKey || t.ctrlKey;
  }
  function s(t) {
    return t.selected();
  }
  function c(t) {
    return t.selectable() && !t.selected();
  }
  var h = function () {
    function e(n) {
      t(this, e), i(this, "cy", void 0), i(this, "canvas", void 0), i(this, "ctx", void 0), i(this, "originalAutoungrabify", void 0), i(this, "originalUserPanningEnabled", void 0), i(this, "originalBoxSelectionEnabled", void 0), i(this, "polygon", void 0), i(this, "activated", !1), i(this, "onGraphResizeBound", this.onGraphResize.bind(this)), i(this, "onGraphContainerMouseDownBound", this.onGraphContainerMouseDown.bind(this)), i(this, "onDocumentMouseMoveBound", this.onDocumentMouseMove.bind(this)), i(this, "onDocumentMouseUpBound", this.onDocumentMouseUp.bind(this)), this.cy = n;
      var o = this.cy.container().querySelector('canvas[data-id="layer0-selectbox"]');
      this.canvas = document.createElement("canvas"), this.canvas.setAttribute("data-id", "layer0-lasso"), this.canvas.setAttribute("style", o.getAttribute("style")), this.onGraphResize(), o.parentElement.insertBefore(this.canvas, o), this.ctx = this.canvas.getContext("2d"), this.cy.on("resize", this.onGraphResizeBound), this.cy.container().addEventListener("mousedown", this.onGraphContainerMouseDownBound);
    }
    return n(e, [{
      key: "destroy",
      value: function value() {
        this.cy.off("resize", this.onGraphResizeBound), this.cy.container().removeEventListener("mousedown", this.onGraphContainerMouseDownBound), this.cy = void 0, this.canvas.remove(), this.canvas = void 0, this.ctx = void 0;
      }
    }, {
      key: "onGraphResize",
      value: function value() {
        this.canvas.width = this.cy.width() * this.cy.renderer().getPixelRatio(), this.canvas.height = this.cy.height() * this.cy.renderer().getPixelRatio(), this.canvas.style.width = "".concat(this.cy.width(), "px"), this.canvas.style.height = "".concat(this.cy.height(), "px");
      }
    }, {
      key: "onGraphContainerMouseDown",
      value: function value(t) {
        var e = [t.clientX, t.clientY];
        this.polygon = [e], document.addEventListener("mousemove", this.onDocumentMouseMoveBound), document.addEventListener("mouseup", this.onDocumentMouseUpBound);
      }
    }, {
      key: "onDocumentMouseMove",
      value: function value(t) {
        var e = [t.clientX, t.clientY];
        this.polygon.push(e);
        var n = this.activated;
        1 !== t.buttons || (null != this.cy.renderer().hoverData.down && !this.cy.renderer().hoverData.down.pannable() || this.cy.renderer().hoverData.dragging || !a(t) && this.cy.panningEnabled() && this.cy.userPanningEnabled()) && (!this.cy.renderer().hoverData.down || !a(t)) || 0 !== this.cy.$(".eh-source").length || this.activate();
        var i = !n && this.activated;
        if (this.render(), i) {
          this.originalAutoungrabify = this.cy.autoungrabify(), this.originalUserPanningEnabled = this.cy.userPanningEnabled(), this.originalBoxSelectionEnabled = this.cy.boxSelectionEnabled(), this.cy.autoungrabify(!0), this.cy.userPanningEnabled(!1), this.cy.boxSelectionEnabled(!1), this.cy.renderer().data.bgActivePosistion = void 0, this.cy.renderer().redrawHint("select", !0), this.cy.renderer().redraw();
          var o = this.getGraphPosition(e);
          this.cy.emit({
            type: "boxstart",
            originalEvent: t,
            position: {
              x: o[0],
              y: o[1]
            }
          });
        }
      }
    }, {
      key: "onDocumentMouseUp",
      value: function value(t) {
        if (document.removeEventListener("mousemove", this.onDocumentMouseMoveBound), document.removeEventListener("mouseup", this.onDocumentMouseUpBound), this.activated) {
          var e = [t.clientX, t.clientY];
          this.finish(t), this.polygon = void 0, this.render(), this.cy.autoungrabify(this.originalAutoungrabify), this.cy.userPanningEnabled(this.originalUserPanningEnabled), this.cy.boxSelectionEnabled(this.originalBoxSelectionEnabled), this.originalAutoungrabify = void 0, this.originalUserPanningEnabled = void 0, this.originalBoxSelectionEnabled = void 0, this.cy.renderer().hoverData.dragged = !0;
          var n = this.getGraphPosition(e);
          this.cy.emit({
            type: "boxend",
            originalEvent: t,
            position: {
              x: n[0],
              y: n[1]
            }
          });
        }
      }
    }, {
      key: "activate",
      value: function value() {
        if (!this.activated) {
          var t = this.polygon[0],
            e = this.polygon[this.polygon.length - 1],
            n = e[0] - t[0],
            i = n * n,
            o = e[1] - t[1];
          i + o * o >= this.cy.renderer().desktopTapThreshold2 && (this.activated = !0);
        }
      }
    }, {
      key: "finish",
      value: function value(t) {
        if (this.activated) {
          var e = this.getGraphPolygon(this.polygon),
            n = this.cy.nodes().filter(function (t) {
              var n = t.position();
              return function (t, e) {
                for (var n = t[0], i = t[1], o = !1, r = 0, a = e.length - 1; r < e.length; a = r++) {
                  var s = e[r][0],
                    c = e[r][1],
                    h = e[a][0],
                    l = e[a][1];
                  c > i != l > i && n < (h - s) * (i - c) / (l - c) + s && (o = !o);
                }
                return o;
              }([n.x, n.y], e);
            });
          a(t) || "additive" === this.cy.selectionType() || this.cy.$(s).unmerge(n).unselect(), n.emit("box").stdFilter(c).select().emit("boxselect"), this.activated = !1;
        }
      }
    }, {
      key: "render",
      value: function value() {
        if (this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this.activated) {
          var t = this.cy.style(),
            e = t.core("selection-box-color").value,
            n = t.core("selection-box-border-color").value,
            i = t.core("selection-box-border-width").value,
            r = t.core("selection-box-opacity").value,
            a = this.canvas.width / this.canvas.clientWidth;
          this.ctx.scale(a, a);
          var s = this.getCanvasPolygon(this.polygon);
          this.ctx.beginPath(), this.ctx.moveTo(s[0], s[1]);
          var c,
            h = o(s);
          try {
            for (h.s(); !(c = h.n()).done;) {
              var l = c.value;
              this.ctx.lineTo(l[0], l[1]);
            }
          } catch (t) {
            h.e(t);
          } finally {
            h.f();
          }
          i > 0 && (this.ctx.lineWidth = i, this.ctx.strokeStyle = "rgba(".concat(n[0], ", ").concat(n[1], ", ").concat(n[2], ", ").concat(r, ")"), this.ctx.stroke()), this.ctx.closePath(), this.ctx.fillStyle = "rgba(".concat(e[0], ", ").concat(e[1], ", ").concat(e[2], ", ").concat(r, ")"), this.ctx.fill(), this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        }
      }
    }, {
      key: "getCanvasPosition",
      value: function value(t) {
        var e = this.cy.renderer().findContainerClientCoords();
        return [t[0] - e[0], t[1] - e[1]];
      }
    }, {
      key: "getGraphPosition",
      value: function value(t) {
        return this.cy.renderer().projectIntoViewport(t[0], t[1]);
      }
    }, {
      key: "getCanvasPolygon",
      value: function value(t) {
        var e = this;
        return t.map(function (t) {
          return e.getCanvasPosition(t);
        });
      }
    }, {
      key: "getGraphPolygon",
      value: function value(t) {
        var e = this;
        return t.map(function (t) {
          return e.getGraphPosition(t);
        });
      }
    }]), e;
  }();
  function l(t) {
    t && t("core", "lassoSelectionEnabled", function (t) {
      return void 0 === t ? this._private.lassoSelectionEnabled : (this._private.lassoSelectionEnabled = !!t, t && !this._private.lassoHandler ? this._private.lassoHandler = new h(this) : !t && this._private.lassoHandler && (this._private.lassoHandler.destroy(), this._private.lassoHandler = void 0), this);
    });
  }
  return void 0 !== window.cytoscape && l(window.cytoscape), l;
});