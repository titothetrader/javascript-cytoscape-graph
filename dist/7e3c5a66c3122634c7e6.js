function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*!
 * vanilla-picker v2.12.1
 * https://vanilla-picker.js.org
 *
 * Copyright 2017-2021 Andreas Borgen (https://github.com/Sphinxxxx), Adam Brooks (https://github.com/dissimulate)
 * Released under the ISC license.
 */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).Picker = e();
}(this, function () {
  "use strict";

  function u(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }
  var t = function t(_t, e, n) {
    return e && i(_t.prototype, e), n && i(_t, n), _t;
  };
  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }
  var d = function d(t, e) {
    if (Array.isArray(t)) return t;
    if (Symbol.iterator in Object(t)) return function (t, e) {
      var n = [],
        i = !0,
        r = !1,
        s = void 0;
      try {
        for (var o, a = t[Symbol.iterator](); !(i = (o = a.next()).done) && (n.push(o.value), !e || n.length !== e); i = !0);
      } catch (t) {
        r = !0, s = t;
      } finally {
        try {
          !i && a["return"] && a["return"]();
        } finally {
          if (r) throw s;
        }
      }
      return n;
    }(t, e);
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  };
  String.prototype.startsWith = String.prototype.startsWith || function (t) {
    return 0 === this.indexOf(t);
  }, String.prototype.padStart = String.prototype.padStart || function (t, e) {
    for (var n = this; n.length < t;) n = e + n;
    return n;
  };
  var e = {
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
  function r(t, e) {
    e = 1 < arguments.length && void 0 !== e ? e : 1;
    return (0 < e ? t.toFixed(e).replace(/0+$/, "").replace(/\.$/, "") : t.toString()) || "0";
  }
  var s = (t(f, [{
    key: "printRGB",
    value: function value(t) {
      var e = (t ? this.rgba : this.rgba.slice(0, 3)).map(function (t, e) {
        return r(t, 3 === e ? 3 : 0);
      });
      return t ? "rgba(" + e + ")" : "rgb(" + e + ")";
    }
  }, {
    key: "printHSL",
    value: function value(t) {
      var n = [360, 100, 100, 1],
        i = ["", "%", "%", ""],
        e = (t ? this.hsla : this.hsla.slice(0, 3)).map(function (t, e) {
          return r(t * n[e], 3 === e ? 3 : 1) + i[e];
        });
      return t ? "hsla(" + e + ")" : "hsl(" + e + ")";
    }
  }, {
    key: "printHex",
    value: function value(t) {
      var e = this.hex;
      return t ? e : e.substring(0, 7);
    }
  }, {
    key: "rgba",
    get: function get() {
      if (this._rgba) return this._rgba;
      if (!this._hsla) throw new Error("No color is set");
      return this._rgba = f.hslToRgb(this._hsla);
    },
    set: function set(t) {
      3 === t.length && (t[3] = 1), this._rgba = t, this._hsla = null;
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
      return this._hsla = f.rgbToHsl(this._rgba);
    },
    set: function set(t) {
      3 === t.length && (t[3] = 1), this._hsla = t, this._rgba = null;
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
      return "#" + this.rgba.map(function (t, e) {
        return (e < 3 ? t : Math.round(255 * t)).toString(16);
      }).map(function (t) {
        return t.padStart(2, "0");
      }).join("");
    },
    set: function set(t) {
      this.rgba = f.hexToRgb(t);
    }
  }], [{
    key: "hexToRgb",
    value: function value(t) {
      var e = (t.startsWith("#") ? t.slice(1) : t).replace(/^(\w{3})$/, "$1F").replace(/^(\w)(\w)(\w)(\w)$/, "$1$1$2$2$3$3$4$4").replace(/^(\w{6})$/, "$1FF");
      if (!e.match(/^([0-9a-fA-F]{8})$/)) throw new Error("Unknown hex color; " + t);
      e = e.match(/^(\w\w)(\w\w)(\w\w)(\w\w)$/).slice(1).map(function (t) {
        return parseInt(t, 16);
      });
      return e[3] = e[3] / 255, e;
    }
  }, {
    key: "nameToRgb",
    value: function value(t) {
      t = t.toLowerCase().replace("at", "T").replace(/[aeiouyldf]/g, "").replace("ght", "L").replace("rk", "D").slice(-5, 4), t = e[t];
      return void 0 === t ? t : f.hexToRgb(t.replace(/\-/g, "00").padStart(6, "f"));
    }
  }, {
    key: "rgbToHsl",
    value: function value(t) {
      var e = d(t, 4),
        n = e[0],
        i = e[1],
        r = e[2],
        s = e[3];
      n /= 255, i /= 255, r /= 255;
      var o = Math.max(n, i, r),
        a = Math.min(n, i, r),
        c = void 0,
        t = void 0,
        e = (o + a) / 2;
      if (o === a) c = t = 0;else {
        var l = o - a,
          t = .5 < e ? l / (2 - o - a) : l / (o + a);
        switch (o) {
          case n:
            c = (i - r) / l + (i < r ? 6 : 0);
            break;
          case i:
            c = (r - n) / l + 2;
            break;
          case r:
            c = (n - i) / l + 4;
        }
        c /= 6;
      }
      return [c, t, e, s];
    }
  }, {
    key: "hslToRgb",
    value: function value(t) {
      var e = d(t, 4),
        n = e[0],
        i = e[1],
        r = e[2],
        s = e[3],
        o = void 0,
        a = void 0,
        t = void 0;
      0 === i ? o = a = t = r : (o = (e = function e(t, _e, n) {
        return n < 0 && (n += 1), 1 < n && --n, n < 1 / 6 ? t + 6 * (_e - t) * n : n < .5 ? _e : n < 2 / 3 ? t + (_e - t) * (2 / 3 - n) * 6 : t;
      })(i = 2 * r - (r = r < .5 ? r * (1 + i) : r + i - r * i), r, n + 1 / 3), a = e(i, r, n), t = e(i, r, n - 1 / 3));
      t = [255 * o, 255 * a, 255 * t].map(Math.round);
      return t[3] = s, t;
    }
  }]), f);
  function f(t, e, n, i) {
    u(this, f);
    var r,
      s,
      o,
      a,
      c,
      l,
      h = this;
    void 0 === t || (Array.isArray(t) ? this.rgba = t : void 0 === n ? (r = t && "" + t) && ((s = r.toLowerCase()).startsWith("hsl") ? (o = s.match(/([\-\d\.e]+)/g).map(Number), c = (a = d(o, 4))[0], l = a[1], o = a[2], a = a[3], h.hsla = [c /= 360, l /= 100, o /= 100, a = void 0 === a ? 1 : a]) : s.startsWith("rgb") ? (c = s.match(/([\-\d\.e]+)/g).map(Number), o = (l = d(c, 4))[0], a = l[1], c = l[2], l = l[3], h.rgba = [o, a, c, l = void 0 === l ? 1 : l]) : s.startsWith("#") ? h.rgba = f.hexToRgb(s) : h.rgba = f.nameToRgb(s) || f.hexToRgb(s)) : this.rgba = [t, e, n, void 0 === i ? 1 : i]);
  }
  var n = (t(o, [{
    key: "add",
    value: function value(t, e, n) {
      t.addEventListener(e, n, !1), this._events.push({
        target: t,
        type: e,
        handler: n
      });
    }
  }, {
    key: "remove",
    value: function value(n, i, r) {
      this._events = this._events.filter(function (t) {
        var e = !0;
        return n && n !== t.target && (e = !1), i && i !== t.type && (e = !1), (e = r && r !== t.handler ? !1 : e) && o._doRemove(t.target, t.type, t.handler), !e;
      });
    }
  }, {
    key: "destroy",
    value: function value() {
      this._events.forEach(function (t) {
        return o._doRemove(t.target, t.type, t.handler);
      }), this._events = [];
    }
  }], [{
    key: "_doRemove",
    value: function value(t, e, n) {
      t.removeEventListener(e, n, !1);
    }
  }]), o);
  function o() {
    u(this, o), this._events = [];
  }
  function a(t, s, o) {
    var a = !1;
    function c(t, e, n) {
      return Math.max(e, Math.min(t, n));
    }
    function n(t, e, n) {
      var i, r;
      (a = n ? !0 : a) && (t.preventDefault(), i = (r = s.getBoundingClientRect()).width, n = r.height, t = e.clientX, e = e.clientY, t = c(t - r.left, 0, i), r = c(e - r.top, 0, n), o(t / i, r / n));
    }
    function e(t, e) {
      1 === (void 0 === t.buttons ? t.which : t.buttons) ? n(t, t, e) : a = !1;
    }
    function i(t, e) {
      1 === t.touches.length ? n(t, t.touches[0], e) : a = !1;
    }
    t.add(s, "mousedown", function (t) {
      e(t, !0);
    }), t.add(s, "touchstart", function (t) {
      i(t, !0);
    }), t.add(window, "mousemove", e), t.add(s, "touchmove", i), t.add(window, "mouseup", function (t) {
      a = !1;
    }), t.add(s, "touchend", function (t) {
      a = !1;
    }), t.add(s, "touchcancel", function (t) {
      a = !1;
    });
  }
  var c = "keydown",
    l = "mousedown",
    h = "focusin";
  function p(t, e) {
    return (e || document).querySelector(t);
  }
  function g(t) {
    t.preventDefault(), t.stopPropagation();
  }
  function v(t, e, n, i, r) {
    t.add(e, c, function (t) {
      0 <= n.indexOf(t.key) && (r && g(t), i(t));
    });
  }
  function b(t) {
    u(this, b), this.settings = {
      popup: "right",
      layout: "default",
      alpha: !0,
      editor: !0,
      editorFormat: "hex",
      cancelButton: !1,
      defaultColor: "#0cf"
    }, this._events = new n(), this.onChange = null, this.onDone = null, this.onOpen = null, this.onClose = null, this.setOptions(t);
  }
  return t(b, [{
    key: "setOptions",
    value: function value(t) {
      var e,
        n,
        i,
        r = this;
      t && (e = this.settings, t instanceof HTMLElement ? e.parent = t : (e.parent && t.parent && e.parent !== t.parent && (this._events.remove(e.parent), this._popupInited = !1), function (t, e, n) {
        for (var i in t) n && 0 <= n.indexOf(i) || (e[i] = t[i]);
      }(t, e), t.onChange && (this.onChange = t.onChange), t.onDone && (this.onDone = t.onDone), t.onOpen && (this.onOpen = t.onOpen), t.onClose && (this.onClose = t.onClose), (i = t.color || t.colour) && this._setColor(i)), (n = e.parent) && e.popup && !this._popupInited ? (this._events.add(n, "click", i = function i(t) {
        return r.openHandler(t);
      }), v(this._events, n, [" ", "Spacebar", "Enter"], i), this._popupInited = !0) : t.parent && !e.popup && this.show());
    }
  }, {
    key: "openHandler",
    value: function value(t) {
      var e;
      this.show() && (t && t.preventDefault(), this.settings.parent.style.pointerEvents = "none", e = t && t.type === c ? this._domEdit : this.domElement, setTimeout(function () {
        return e.focus();
      }, 100), this.onOpen && this.onOpen(this.colour));
    }
  }, {
    key: "closeHandler",
    value: function value(t) {
      var e,
        n = t && t.type,
        i = !1;
      t ? n === l || n === h ? (e = (this.__containedEvent || 0) + 100, t.timeStamp > e && (i = !0)) : (g(t), i = !0) : i = !0, i && this.hide() && (this.settings.parent.style.pointerEvents = "", n !== l && this.settings.parent.focus(), this.onClose && this.onClose(this.colour));
    }
  }, {
    key: "movePopup",
    value: function value(t, e) {
      this.closeHandler(), this.setOptions(t), e && this.openHandler();
    }
  }, {
    key: "setColor",
    value: function value(t, e) {
      this._setColor(t, {
        silent: e
      });
    }
  }, {
    key: "_setColor",
    value: function value(t, e) {
      if (t = "string" == typeof t ? t.trim() : t) {
        e = e || {};
        var n = void 0;
        try {
          n = new s(t);
        } catch (t) {
          if (e.failSilently) return;
          throw t;
        }
        this.settings.alpha || ((t = n.hsla)[3] = 1, n.hsla = t), this.colour = this.color = n, this._setHSLA(null, null, null, null, e);
      }
    }
  }, {
    key: "setColour",
    value: function value(t, e) {
      this.setColor(t, e);
    }
  }, {
    key: "show",
    value: function value() {
      if (!this.settings.parent) return !1;
      if (this.domElement) {
        var t = this._toggleDOM(!0);
        return this._setPosition(), t;
      }
      var e = this.settings.template || '<div class="picker_wrapper" tabindex="-1"><div class="picker_arrow"></div><div class="picker_hue picker_slider"><div class="picker_selector"></div></div><div class="picker_sl"><div class="picker_selector"></div></div><div class="picker_alpha picker_slider"><div class="picker_selector"></div></div><div class="picker_editor"><input aria-label="Type a color name or hex value"/></div><div class="picker_sample"></div><div class="picker_done"><button>Ok</button></div><div class="picker_cancel"><button>Cancel</button></div></div>',
        n = (t = e, (e = document.createElement("div")).innerHTML = t, e.firstElementChild);
      return this.domElement = n, this._domH = p(".picker_hue", n), this._domSL = p(".picker_sl", n), this._domA = p(".picker_alpha", n), this._domEdit = p(".picker_editor input", n), this._domSample = p(".picker_sample", n), this._domOkay = p(".picker_done button", n), this._domCancel = p(".picker_cancel button", n), n.classList.add("layout_" + this.settings.layout), this.settings.alpha || n.classList.add("no_alpha"), this.settings.editor || n.classList.add("no_editor"), this.settings.cancelButton || n.classList.add("no_cancel"), this._ifPopup(function () {
        return n.classList.add("popup");
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
      var n = this,
        i = this,
        r = this.domElement,
        s = this._events;
      function o(t, e, n) {
        s.add(t, e, n);
      }
      o(r, "click", function (t) {
        return t.preventDefault();
      }), a(s, this._domH, function (t, e) {
        return i._setHSLA(t);
      }), a(s, this._domSL, function (t, e) {
        return i._setHSLA(null, t, 1 - e);
      }), this.settings.alpha && a(s, this._domA, function (t, e) {
        return i._setHSLA(null, null, null, 1 - e);
      });
      var t = this._domEdit;
      o(t, "input", function (t) {
        i._setColor(this.value, {
          fromEditor: !0,
          failSilently: !0
        });
      }), o(t, "focus", function (t) {
        this.selectionStart === this.selectionEnd && this.select();
      }), this._ifPopup(function () {
        function t(t) {
          return n.closeHandler(t);
        }
        o(window, l, t), o(window, h, t), v(s, r, ["Esc", "Escape"], t);
        function e(t) {
          n.__containedEvent = t.timeStamp;
        }
        o(r, l, e), o(r, h, e), o(n._domCancel, "click", t);
      });
      t = function t(_t2) {
        n._ifPopup(function () {
          return n.closeHandler(_t2);
        }), n.onDone && n.onDone(n.colour);
      };
      o(this._domOkay, "click", t), v(s, r, ["Enter"], t);
    }
  }, {
    key: "_setPosition",
    value: function value() {
      var n = this.settings.parent,
        i = this.domElement;
      n !== i.parentNode && n.appendChild(i), this._ifPopup(function (t) {
        "static" === getComputedStyle(n).position && (n.style.position = "relative");
        var e = !0 === t ? "popup_right" : "popup_" + t;
        ["popup_top", "popup_bottom", "popup_left", "popup_right"].forEach(function (t) {
          t === e ? i.classList.add(t) : i.classList.remove(t);
        }), i.classList.add(e);
      });
    }
  }, {
    key: "_setHSLA",
    value: function value(t, e, n, i, r) {
      r = r || {};
      var s = this.colour,
        o = s.hsla;
      [t, e, n, i].forEach(function (t, e) {
        !t && 0 !== t || (o[e] = t);
      }), s.hsla = o, this._updateUI(r), this.onChange && !r.silent && this.onChange(s);
    }
  }, {
    key: "_updateUI",
    value: function value(t) {
      if (this.domElement) {
        t = t || {};
        var e = this.colour,
          n = e.hsla,
          i = "hsl(" + 360 * n[0] + ", 100%, 50%)",
          r = e.hslString,
          s = e.hslaString,
          o = this._domH,
          a = this._domSL,
          c = this._domA,
          l = p(".picker_selector", o),
          o = p(".picker_selector", a),
          c = p(".picker_selector", c);
        d(0, l, n[0]), this._domSL.style.backgroundColor = this._domH.style.color = i, d(0, o, n[1]), f(0, o, 1 - n[2]), a.style.color = r, f(0, c, 1 - n[3]);
        n = r, r = n.replace("hsl", "hsla").replace(")", ", 0)");
        if (this._domA.style.background = "linear-gradient(" + [n, r] + ")" + ", linear-gradient(45deg, lightgrey 25%, transparent 25%, transparent 75%, lightgrey 75%) 0 0 / 2em 2em,\n                   linear-gradient(45deg, lightgrey 25%,       white 25%,       white 75%, lightgrey 75%) 1em 1em / 2em 2em", !t.fromEditor) {
          var t = this.settings.editorFormat,
            h = this.settings.alpha,
            u = void 0;
          switch (t) {
            case "rgb":
              u = e.printRGB(h);
              break;
            case "hsl":
              u = e.printHSL(h);
              break;
            default:
              u = e.printHex(h);
          }
          this._domEdit.value = u;
        }
        this._domSample.style.color = s;
      }
      function d(t, e, n) {
        e.style.left = 100 * n + "%";
      }
      function f(t, e, n) {
        e.style.top = 100 * n + "%";
      }
    }
  }, {
    key: "_ifPopup",
    value: function value(t, e) {
      this.settings.parent && this.settings.popup ? t && t(this.settings.popup) : e && e();
    }
  }, {
    key: "_toggleDOM",
    value: function value(t) {
      var e = this.domElement;
      if (!e) return !1;
      var n = t ? "" : "none",
        t = e.style.display !== n;
      return t && (e.style.display = n), t;
    }
  }]), b;
});