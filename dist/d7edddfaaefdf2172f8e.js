function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*!
 * vanilla-picker v2.12.1
 * https://vanilla-picker.js.org
 *
 * Copyright 2017-2021 Andreas Borgen (https://github.com/Sphinxxxx), Adam Brooks (https://github.com/dissimulate)
 * Released under the ISC license.
 */
!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Picker = t();
}(this, function () {
  "use strict";

  function u(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }
  var e = function e(_e, t, r) {
    return t && n(_e.prototype, t), r && n(_e, r), _e;
  };
  function n(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
  }
  var d = function d(e, t) {
    if (Array.isArray(e)) return e;
    if (Symbol.iterator in Object(e)) return function (e, t) {
      var r = [],
        n = !0,
        i = !1,
        o = void 0;
      try {
        for (var a, s = e[Symbol.iterator](); !(n = (a = s.next()).done) && (r.push(a.value), !t || r.length !== t); n = !0);
      } catch (e) {
        i = !0, o = e;
      } finally {
        try {
          !n && s["return"] && s["return"]();
        } finally {
          if (i) throw o;
        }
      }
      return r;
    }(e, t);
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  };
  String.prototype.startsWith = String.prototype.startsWith || function (e) {
    return 0 === this.indexOf(e);
  }, String.prototype.padStart = String.prototype.padStart || function (e, t) {
    for (var r = this; r.length < e;) r = t + r;
    return r;
  };
  var t = {
    cb: "0f8ff",
    tqw: "aebd7",
    q: "-ffff",
    qmrn: "7fffd4",
    zr: "0ffff",
    bg: "5f5dc",
    bsq: "e4c4",
    bck: "---",
    nch: "ebcd",
    b: "--ff",
    bvt: "8a2be2",
    brwn: "a52a2a",
    brw: "deb887",
    ctb: "5f9ea0",
    hrt: "7fff-",
    chcT: "d2691e",
    cr: "7f50",
    rnw: "6495ed",
    crns: "8dc",
    crms: "dc143c",
    cn: "-ffff",
    Db: "--8b",
    Dcn: "-8b8b",
    Dgnr: "b8860b",
    Dgr: "a9a9a9",
    Dgrn: "-64-",
    Dkhk: "bdb76b",
    Dmgn: "8b-8b",
    Dvgr: "556b2f",
    Drng: "8c-",
    Drch: "9932cc",
    Dr: "8b--",
    Dsmn: "e9967a",
    Dsgr: "8fbc8f",
    DsTb: "483d8b",
    DsTg: "2f4f4f",
    Dtrq: "-ced1",
    Dvt: "94-d3",
    ppnk: "1493",
    pskb: "-bfff",
    mgr: "696969",
    grb: "1e90ff",
    rbrc: "b22222",
    rwht: "af0",
    stg: "228b22",
    chs: "-ff",
    gnsb: "dcdcdc",
    st: "8f8ff",
    g: "d7-",
    gnr: "daa520",
    gr: "808080",
    grn: "-8-0",
    grnw: "adff2f",
    hnw: "0fff0",
    htpn: "69b4",
    nnr: "cd5c5c",
    ng: "4b-82",
    vr: "0",
    khk: "0e68c",
    vnr: "e6e6fa",
    nrb: "0f5",
    wngr: "7cfc-",
    mnch: "acd",
    Lb: "add8e6",
    Lcr: "08080",
    Lcn: "e0ffff",
    Lgnr: "afad2",
    Lgr: "d3d3d3",
    Lgrn: "90ee90",
    Lpnk: "b6c1",
    Lsmn: "a07a",
    Lsgr: "20b2aa",
    Lskb: "87cefa",
    LsTg: "778899",
    Lstb: "b0c4de",
    Lw: "e0",
    m: "-ff-",
    mgrn: "32cd32",
    nn: "af0e6",
    mgnt: "-ff",
    mrn: "8--0",
    mqm: "66cdaa",
    mmb: "--cd",
    mmrc: "ba55d3",
    mmpr: "9370db",
    msg: "3cb371",
    mmsT: "7b68ee",
    "": "-fa9a",
    mtr: "48d1cc",
    mmvt: "c71585",
    mnLb: "191970",
    ntc: "5fffa",
    mstr: "e4e1",
    mccs: "e4b5",
    vjw: "dead",
    nv: "--80",
    c: "df5e6",
    v: "808-0",
    vrb: "6b8e23",
    rng: "a5-",
    rngr: "45-",
    rch: "da70d6",
    pgnr: "eee8aa",
    pgrn: "98fb98",
    ptrq: "afeeee",
    pvtr: "db7093",
    ppwh: "efd5",
    pchp: "dab9",
    pr: "cd853f",
    pnk: "c0cb",
    pm: "dda0dd",
    pwrb: "b0e0e6",
    prp: "8-080",
    cc: "663399",
    r: "--",
    sbr: "bc8f8f",
    rb: "4169e1",
    sbrw: "8b4513",
    smn: "a8072",
    nbr: "4a460",
    sgrn: "2e8b57",
    ssh: "5ee",
    snn: "a0522d",
    svr: "c0c0c0",
    skb: "87ceeb",
    sTb: "6a5acd",
    sTgr: "708090",
    snw: "afa",
    n: "-ff7f",
    stb: "4682b4",
    tn: "d2b48c",
    t: "-8080",
    thst: "d8bfd8",
    tmT: "6347",
    trqs: "40e0d0",
    vt: "ee82ee",
    whT: "5deb3",
    wht: "",
    hts: "5f5f5",
    w: "-",
    wgrn: "9acd32"
  };
  function i(e, t) {
    t = 1 < arguments.length && void 0 !== t ? t : 1;
    return (0 < t ? e.toFixed(t).replace(/0+$/, "").replace(/\.$/, "") : e.toString()) || "0";
  }
  var o = (e(h, [{
    key: "printRGB",
    value: function value(e) {
      var t = (e ? this.rgba : this.rgba.slice(0, 3)).map(function (e, t) {
        return i(e, 3 === t ? 3 : 0);
      });
      return e ? "rgba(" + t + ")" : "rgb(" + t + ")";
    }
  }, {
    key: "printHSL",
    value: function value(e) {
      var r = [360, 100, 100, 1],
        n = ["", "%", "%", ""],
        t = (e ? this.hsla : this.hsla.slice(0, 3)).map(function (e, t) {
          return i(e * r[t], 3 === t ? 3 : 1) + n[t];
        });
      return e ? "hsla(" + t + ")" : "hsl(" + t + ")";
    }
  }, {
    key: "printHex",
    value: function value(e) {
      var t = this.hex;
      return e ? t : t.substring(0, 7);
    }
  }, {
    key: "rgba",
    get: function get() {
      if (this._rgba) return this._rgba;
      if (!this._hsla) throw new Error("No color is set");
      return this._rgba = h.hslToRgb(this._hsla);
    },
    set: function set(e) {
      3 === e.length && (e[3] = 1), this._rgba = e, this._hsla = null;
    }
  }, {
    key: "rgbString",
    get: function get() {
      return this.printRGB();
    }
  }, {
    key: "rgbaString",
    get: function get() {
      return this.printRGB(!0);
    }
  }, {
    key: "hsla",
    get: function get() {
      if (this._hsla) return this._hsla;
      if (!this._rgba) throw new Error("No color is set");
      return this._hsla = h.rgbToHsl(this._rgba);
    },
    set: function set(e) {
      3 === e.length && (e[3] = 1), this._hsla = e, this._rgba = null;
    }
  }, {
    key: "hslString",
    get: function get() {
      return this.printHSL();
    }
  }, {
    key: "hslaString",
    get: function get() {
      return this.printHSL(!0);
    }
  }, {
    key: "hex",
    get: function get() {
      return "#" + this.rgba.map(function (e, t) {
        return (t < 3 ? e : Math.round(255 * e)).toString(16);
      }).map(function (e) {
        return e.padStart(2, "0");
      }).join("");
    },
    set: function set(e) {
      this.rgba = h.hexToRgb(e);
    }
  }], [{
    key: "hexToRgb",
    value: function value(e) {
      var t = (e.startsWith("#") ? e.slice(1) : e).replace(/^(\w{3})$/, "$1F").replace(/^(\w)(\w)(\w)(\w)$/, "$1$1$2$2$3$3$4$4").replace(/^(\w{6})$/, "$1FF");
      if (!t.match(/^([0-9a-fA-F]{8})$/)) throw new Error("Unknown hex color; " + e);
      t = t.match(/^(\w\w)(\w\w)(\w\w)(\w\w)$/).slice(1).map(function (e) {
        return parseInt(e, 16);
      });
      return t[3] = t[3] / 255, t;
    }
  }, {
    key: "nameToRgb",
    value: function value(e) {
      e = e.toLowerCase().replace("at", "T").replace(/[aeiouyldf]/g, "").replace("ght", "L").replace("rk", "D").slice(-5, 4), e = t[e];
      return void 0 === e ? e : h.hexToRgb(e.replace(/\-/g, "00").padStart(6, "f"));
    }
  }, {
    key: "rgbToHsl",
    value: function value(e) {
      var t = d(e, 4),
        r = t[0],
        n = t[1],
        i = t[2],
        o = t[3];
      r /= 255, n /= 255, i /= 255;
      var a = Math.max(r, n, i),
        s = Math.min(r, n, i),
        p = void 0,
        e = void 0,
        t = (a + s) / 2;
      if (a === s) p = e = 0;else {
        var c = a - s,
          e = .5 < t ? c / (2 - a - s) : c / (a + s);
        switch (a) {
          case r:
            p = (n - i) / c + (n < i ? 6 : 0);
            break;
          case n:
            p = (i - r) / c + 2;
            break;
          case i:
            p = (r - n) / c + 4;
        }
        p /= 6;
      }
      return [p, e, t, o];
    }
  }, {
    key: "hslToRgb",
    value: function value(e) {
      var t = d(e, 4),
        r = t[0],
        n = t[1],
        i = t[2],
        o = t[3],
        a = void 0,
        s = void 0,
        e = void 0;
      0 === n ? a = s = e = i : (a = (t = function t(e, _t, r) {
        return r < 0 && (r += 1), 1 < r && --r, r < 1 / 6 ? e + 6 * (_t - e) * r : r < .5 ? _t : r < 2 / 3 ? e + (_t - e) * (2 / 3 - r) * 6 : e;
      })(n = 2 * i - (i = i < .5 ? i * (1 + n) : i + n - i * n), i, r + 1 / 3), s = t(n, i, r), e = t(n, i, r - 1 / 3));
      e = [255 * a, 255 * s, 255 * e].map(Math.round);
      return e[3] = o, e;
    }
  }]), h);
  function h(e, t, r, n) {
    u(this, h);
    var i,
      o,
      a,
      s,
      p,
      c,
      l = this;
    void 0 === e || (Array.isArray(e) ? this.rgba = e : void 0 === r ? (i = e && "" + e) && ((o = i.toLowerCase()).startsWith("hsl") ? (a = o.match(/([\-\d\.e]+)/g).map(Number), p = (s = d(a, 4))[0], c = s[1], a = s[2], s = s[3], l.hsla = [p /= 360, c /= 100, a /= 100, s = void 0 === s ? 1 : s]) : o.startsWith("rgb") ? (p = o.match(/([\-\d\.e]+)/g).map(Number), a = (c = d(p, 4))[0], s = c[1], p = c[2], c = c[3], l.rgba = [a, s, p, c = void 0 === c ? 1 : c]) : o.startsWith("#") ? l.rgba = h.hexToRgb(o) : l.rgba = h.nameToRgb(o) || h.hexToRgb(o)) : this.rgba = [e, t, r, void 0 === n ? 1 : n]);
  }
  var r = (e(a, [{
    key: "add",
    value: function value(e, t, r) {
      e.addEventListener(t, r, !1), this._events.push({
        target: e,
        type: t,
        handler: r
      });
    }
  }, {
    key: "remove",
    value: function value(r, n, i) {
      this._events = this._events.filter(function (e) {
        var t = !0;
        return r && r !== e.target && (t = !1), n && n !== e.type && (t = !1), (t = i && i !== e.handler ? !1 : t) && a._doRemove(e.target, e.type, e.handler), !t;
      });
    }
  }, {
    key: "destroy",
    value: function value() {
      this._events.forEach(function (e) {
        return a._doRemove(e.target, e.type, e.handler);
      }), this._events = [];
    }
  }], [{
    key: "_doRemove",
    value: function value(e, t, r) {
      e.removeEventListener(t, r, !1);
    }
  }]), a);
  function a() {
    u(this, a), this._events = [];
  }
  function s(e, o, a) {
    var s = !1;
    function p(e, t, r) {
      return Math.max(t, Math.min(e, r));
    }
    function r(e, t, r) {
      var n, i;
      (s = r ? !0 : s) && (e.preventDefault(), n = (i = o.getBoundingClientRect()).width, r = i.height, e = t.clientX, t = t.clientY, e = p(e - i.left, 0, n), i = p(t - i.top, 0, r), a(e / n, i / r));
    }
    function t(e, t) {
      1 === (void 0 === e.buttons ? e.which : e.buttons) ? r(e, e, t) : s = !1;
    }
    function n(e, t) {
      1 === e.touches.length ? r(e, e.touches[0], t) : s = !1;
    }
    e.add(o, "mousedown", function (e) {
      t(e, !0);
    }), e.add(o, "touchstart", function (e) {
      n(e, !0);
    }), e.add(window, "mousemove", t), e.add(o, "touchmove", n), e.add(window, "mouseup", function (e) {
      s = !1;
    }), e.add(o, "touchend", function (e) {
      s = !1;
    }), e.add(o, "touchcancel", function (e) {
      s = !1;
    });
  }
  var p = "keydown",
    c = "mousedown",
    l = "focusin";
  function f(e, t) {
    return (t || document).querySelector(e);
  }
  function g(e) {
    e.preventDefault(), e.stopPropagation();
  }
  function b(e, t, r, n, i) {
    e.add(t, p, function (e) {
      0 <= r.indexOf(e.key) && (i && g(e), n(e));
    });
  }
  var _ = (e(m, [{
    key: "setOptions",
    value: function value(e) {
      var t,
        r,
        n,
        i = this;
      e && (t = this.settings, e instanceof HTMLElement ? t.parent = e : (t.parent && e.parent && t.parent !== e.parent && (this._events.remove(t.parent), this._popupInited = !1), function (e, t, r) {
        for (var n in e) r && 0 <= r.indexOf(n) || (t[n] = e[n]);
      }(e, t), e.onChange && (this.onChange = e.onChange), e.onDone && (this.onDone = e.onDone), e.onOpen && (this.onOpen = e.onOpen), e.onClose && (this.onClose = e.onClose), (n = e.color || e.colour) && this._setColor(n)), (r = t.parent) && t.popup && !this._popupInited ? (this._events.add(r, "click", n = function n(e) {
        return i.openHandler(e);
      }), b(this._events, r, [" ", "Spacebar", "Enter"], n), this._popupInited = !0) : e.parent && !t.popup && this.show());
    }
  }, {
    key: "openHandler",
    value: function value(e) {
      var t;
      this.show() && (e && e.preventDefault(), this.settings.parent.style.pointerEvents = "none", t = e && e.type === p ? this._domEdit : this.domElement, setTimeout(function () {
        return t.focus();
      }, 100), this.onOpen && this.onOpen(this.colour));
    }
  }, {
    key: "closeHandler",
    value: function value(e) {
      var t,
        r = e && e.type,
        n = !1;
      e ? r === c || r === l ? (t = (this.__containedEvent || 0) + 100, e.timeStamp > t && (n = !0)) : (g(e), n = !0) : n = !0, n && this.hide() && (this.settings.parent.style.pointerEvents = "", r !== c && this.settings.parent.focus(), this.onClose && this.onClose(this.colour));
    }
  }, {
    key: "movePopup",
    value: function value(e, t) {
      this.closeHandler(), this.setOptions(e), t && this.openHandler();
    }
  }, {
    key: "setColor",
    value: function value(e, t) {
      this._setColor(e, {
        silent: t
      });
    }
  }, {
    key: "_setColor",
    value: function value(e, t) {
      if (e = "string" == typeof e ? e.trim() : e) {
        t = t || {};
        var r = void 0;
        try {
          r = new o(e);
        } catch (e) {
          if (t.failSilently) return;
          throw e;
        }
        this.settings.alpha || ((e = r.hsla)[3] = 1, r.hsla = e), this.colour = this.color = r, this._setHSLA(null, null, null, null, t);
      }
    }
  }, {
    key: "setColour",
    value: function value(e, t) {
      this.setColor(e, t);
    }
  }, {
    key: "show",
    value: function value() {
      if (!this.settings.parent) return !1;
      if (this.domElement) {
        var e = this._toggleDOM(!0);
        return this._setPosition(), e;
      }
      var t = this.settings.template || '<div class="picker_wrapper" tabindex="-1"><div class="picker_arrow"></div><div class="picker_hue picker_slider"><div class="picker_selector"></div></div><div class="picker_sl"><div class="picker_selector"></div></div><div class="picker_alpha picker_slider"><div class="picker_selector"></div></div><div class="picker_editor"><input aria-label="Type a color name or hex value"/></div><div class="picker_sample"></div><div class="picker_done"><button>Ok</button></div><div class="picker_cancel"><button>Cancel</button></div></div>',
        r = (e = t, (t = document.createElement("div")).innerHTML = e, t.firstElementChild);
      return this.domElement = r, this._domH = f(".picker_hue", r), this._domSL = f(".picker_sl", r), this._domA = f(".picker_alpha", r), this._domEdit = f(".picker_editor input", r), this._domSample = f(".picker_sample", r), this._domOkay = f(".picker_done button", r), this._domCancel = f(".picker_cancel button", r), r.classList.add("layout_" + this.settings.layout), this.settings.alpha || r.classList.add("no_alpha"), this.settings.editor || r.classList.add("no_editor"), this.settings.cancelButton || r.classList.add("no_cancel"), this._ifPopup(function () {
        return r.classList.add("popup");
      }), this._setPosition(), this.colour ? this._updateUI() : this._setColor(this.settings.defaultColor), this._bindEvents(), !0;
    }
  }, {
    key: "hide",
    value: function value() {
      return this._toggleDOM(!1);
    }
  }, {
    key: "destroy",
    value: function value() {
      this._events.destroy(), this.domElement && this.settings.parent.removeChild(this.domElement);
    }
  }, {
    key: "_bindEvents",
    value: function value() {
      var r = this,
        n = this,
        i = this.domElement,
        o = this._events;
      function a(e, t, r) {
        o.add(e, t, r);
      }
      a(i, "click", function (e) {
        return e.preventDefault();
      }), s(o, this._domH, function (e, t) {
        return n._setHSLA(e);
      }), s(o, this._domSL, function (e, t) {
        return n._setHSLA(null, e, 1 - t);
      }), this.settings.alpha && s(o, this._domA, function (e, t) {
        return n._setHSLA(null, null, null, 1 - t);
      });
      var e = this._domEdit;
      a(e, "input", function (e) {
        n._setColor(this.value, {
          fromEditor: !0,
          failSilently: !0
        });
      }), a(e, "focus", function (e) {
        this.selectionStart === this.selectionEnd && this.select();
      }), this._ifPopup(function () {
        function e(e) {
          return r.closeHandler(e);
        }
        a(window, c, e), a(window, l, e), b(o, i, ["Esc", "Escape"], e);
        function t(e) {
          r.__containedEvent = e.timeStamp;
        }
        a(i, c, t), a(i, l, t), a(r._domCancel, "click", e);
      });
      e = function e(_e2) {
        r._ifPopup(function () {
          return r.closeHandler(_e2);
        }), r.onDone && r.onDone(r.colour);
      };
      a(this._domOkay, "click", e), b(o, i, ["Enter"], e);
    }
  }, {
    key: "_setPosition",
    value: function value() {
      var r = this.settings.parent,
        n = this.domElement;
      r !== n.parentNode && r.appendChild(n), this._ifPopup(function (e) {
        "static" === getComputedStyle(r).position && (r.style.position = "relative");
        var t = !0 === e ? "popup_right" : "popup_" + e;
        ["popup_top", "popup_bottom", "popup_left", "popup_right"].forEach(function (e) {
          e === t ? n.classList.add(e) : n.classList.remove(e);
        }), n.classList.add(t);
      });
    }
  }, {
    key: "_setHSLA",
    value: function value(e, t, r, n, i) {
      i = i || {};
      var o = this.colour,
        a = o.hsla;
      [e, t, r, n].forEach(function (e, t) {
        !e && 0 !== e || (a[t] = e);
      }), o.hsla = a, this._updateUI(i), this.onChange && !i.silent && this.onChange(o);
    }
  }, {
    key: "_updateUI",
    value: function value(e) {
      if (this.domElement) {
        e = e || {};
        var t = this.colour,
          r = t.hsla,
          n = "hsl(" + 360 * r[0] + ", 100%, 50%)",
          i = t.hslString,
          o = t.hslaString,
          a = this._domH,
          s = this._domSL,
          p = this._domA,
          c = f(".picker_selector", a),
          a = f(".picker_selector", s),
          p = f(".picker_selector", p);
        d(0, c, r[0]), this._domSL.style.backgroundColor = this._domH.style.color = n, d(0, a, r[1]), h(0, a, 1 - r[2]), s.style.color = i, h(0, p, 1 - r[3]);
        r = i, i = r.replace("hsl", "hsla").replace(")", ", 0)");
        if (this._domA.style.background = "linear-gradient(" + [r, i] + ")" + ", linear-gradient(45deg, lightgrey 25%, transparent 25%, transparent 75%, lightgrey 75%) 0 0 / 2em 2em,\n                   linear-gradient(45deg, lightgrey 25%,       white 25%,       white 75%, lightgrey 75%) 1em 1em / 2em 2em", !e.fromEditor) {
          var e = this.settings.editorFormat,
            l = this.settings.alpha,
            u = void 0;
          switch (e) {
            case "rgb":
              u = t.printRGB(l);
              break;
            case "hsl":
              u = t.printHSL(l);
              break;
            default:
              u = t.printHex(l);
          }
          this._domEdit.value = u;
        }
        this._domSample.style.color = o;
      }
      function d(e, t, r) {
        t.style.left = 100 * r + "%";
      }
      function h(e, t, r) {
        t.style.top = 100 * r + "%";
      }
    }
  }, {
    key: "_ifPopup",
    value: function value(e, t) {
      this.settings.parent && this.settings.popup ? e && e(this.settings.popup) : t && t();
    }
  }, {
    key: "_toggleDOM",
    value: function value(e) {
      var t = this.domElement;
      if (!t) return !1;
      var r = e ? "" : "none",
        e = t.style.display !== r;
      return e && (t.style.display = r), e;
    }
  }]), m);
  function m(e) {
    u(this, m), this.settings = {
      popup: "right",
      layout: "default",
      alpha: !0,
      editor: !0,
      editorFormat: "hex",
      cancelButton: !1,
      defaultColor: "#0cf"
    }, this._events = new r(), this.onChange = null, this.onDone = null, this.onOpen = null, this.onClose = null, this.setOptions(e);
  }
  e = document.createElement("style");
  return e.textContent = '.picker_wrapper.no_alpha .picker_alpha{display:none}.picker_wrapper.no_editor .picker_editor{position:absolute;z-index:-1;opacity:0}.picker_wrapper.no_cancel .picker_cancel{display:none}.layout_default.picker_wrapper{display:flex;flex-flow:row wrap;justify-content:space-between;align-items:stretch;font-size:10px;width:25em;padding:.5em}.layout_default.picker_wrapper input,.layout_default.picker_wrapper button{font-size:1rem}.layout_default.picker_wrapper>*{margin:.5em}.layout_default.picker_wrapper::before{content:"";display:block;width:100%;height:0;order:1}.layout_default .picker_slider,.layout_default .picker_selector{padding:1em}.layout_default .picker_hue{width:100%}.layout_default .picker_sl{flex:1 1 auto}.layout_default .picker_sl::before{content:"";display:block;padding-bottom:100%}.layout_default .picker_editor{order:1;width:6.5rem}.layout_default .picker_editor input{width:100%;height:100%}.layout_default .picker_sample{order:1;flex:1 1 auto}.layout_default .picker_done,.layout_default .picker_cancel{order:1}.picker_wrapper{box-sizing:border-box;background:#f2f2f2;box-shadow:0 0 0 1px silver;cursor:default;font-family:sans-serif;color:#444;pointer-events:auto}.picker_wrapper:focus{outline:none}.picker_wrapper button,.picker_wrapper input{box-sizing:border-box;border:none;box-shadow:0 0 0 1px silver;outline:none}.picker_wrapper button:focus,.picker_wrapper button:active,.picker_wrapper input:focus,.picker_wrapper input:active{box-shadow:0 0 2px 1px #1e90ff}.picker_wrapper button{padding:.4em .6em;cursor:pointer;background-color:#f5f5f5;background-image:linear-gradient(0deg, gainsboro, transparent)}.picker_wrapper button:active{background-image:linear-gradient(0deg, transparent, gainsboro)}.picker_wrapper button:hover{background-color:#fff}.picker_selector{position:absolute;z-index:1;display:block;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);border:2px solid #fff;border-radius:100%;box-shadow:0 0 3px 1px #67b9ff;background:currentColor;cursor:pointer}.picker_slider .picker_selector{border-radius:2px}.picker_hue{position:relative;background-image:linear-gradient(90deg, red, yellow, lime, cyan, blue, magenta, red);box-shadow:0 0 0 1px silver}.picker_sl{position:relative;box-shadow:0 0 0 1px silver;background-image:linear-gradient(180deg, white, rgba(255, 255, 255, 0) 50%),linear-gradient(0deg, black, rgba(0, 0, 0, 0) 50%),linear-gradient(90deg, #808080, rgba(128, 128, 128, 0))}.picker_alpha,.picker_sample{position:relative;background:linear-gradient(45deg, lightgrey 25%, transparent 25%, transparent 75%, lightgrey 75%) 0 0/2em 2em,linear-gradient(45deg, lightgrey 25%, white 25%, white 75%, lightgrey 75%) 1em 1em/2em 2em;box-shadow:0 0 0 1px silver}.picker_alpha .picker_selector,.picker_sample .picker_selector{background:none}.picker_editor input{font-family:monospace;padding:.2em .4em}.picker_sample::before{content:"";position:absolute;display:block;width:100%;height:100%;background:currentColor}.picker_arrow{position:absolute;z-index:-1}.picker_wrapper.popup{position:absolute;z-index:2;margin:1.5em}.picker_wrapper.popup,.picker_wrapper.popup .picker_arrow::before,.picker_wrapper.popup .picker_arrow::after{background:#f2f2f2;box-shadow:0 0 10px 1px rgba(0,0,0,.4)}.picker_wrapper.popup .picker_arrow{width:3em;height:3em;margin:0}.picker_wrapper.popup .picker_arrow::before,.picker_wrapper.popup .picker_arrow::after{content:"";display:block;position:absolute;top:0;left:0;z-index:-99}.picker_wrapper.popup .picker_arrow::before{width:100%;height:100%;-webkit-transform:skew(45deg);transform:skew(45deg);-webkit-transform-origin:0 100%;transform-origin:0 100%}.picker_wrapper.popup .picker_arrow::after{width:150%;height:150%;box-shadow:none}.popup.popup_top{bottom:100%;left:0}.popup.popup_top .picker_arrow{bottom:0;left:0;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.popup.popup_bottom{top:100%;left:0}.popup.popup_bottom .picker_arrow{top:0;left:0;-webkit-transform:rotate(90deg) scale(1, -1);transform:rotate(90deg) scale(1, -1)}.popup.popup_left{top:0;right:100%}.popup.popup_left .picker_arrow{top:0;right:0;-webkit-transform:scale(-1, 1);transform:scale(-1, 1)}.popup.popup_right{top:0;left:100%}.popup.popup_right .picker_arrow{top:0;left:0}', document.documentElement.firstElementChild.appendChild(e), _.StyleElement = e, _;
});