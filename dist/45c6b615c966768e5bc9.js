function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var GraphLayout = /*#__PURE__*/function (_HTMLElement) {
  _inherits(GraphLayout, _HTMLElement);
  var _super = _createSuper(GraphLayout);
  function GraphLayout() {
    _classCallCheck(this, GraphLayout);
    return _super.call(this);
  }
  _createClass(GraphLayout, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.innerHTML = "\n            <div id=\"layout-dropdown-area\" class=\"layout-dropdown-area\">\n                <select id=\"layout-dropdown-list\" class=\"layout-dropdown-list\" onChange=updateLayout(value) title=\"layout-dropdown\">\n                    <option selected hidden value=\"random\" class=\"dropdown-item\">Graph Layout</option>\n                    <option value=\"breadthfirst\" class=\"dropdown-item\">BreadthFirst</option>\n                    <option value=\"circle\" class=\"dropdown-item\">Circle</option>\n                    <option value=\"concentric\" class=\"dropdown-item\">Concentric</option>\n                    <option value=\"grid\" class=\"dropdown-item\">Grid</option>\n                    <option value=\"cola\" class=\"dropdown-item\">Cola (Constraint Based)</option>\n                    <option value=\"cose\" class=\"dropdown-item\">CoSE (Compound Spring Embedder)</option>\n                    <option value=\"cose-bilkent\" class=\"dropdown-item\">CoSE Bilkent</option>\n                    <option value=\"fcose\" class=\"dropdown-item\">fCoSE (Fast Compound)</option>\n                    <option value=\"dagre\" class=\"dropdown-item\">Dagre (Top to Bottom)</option>\n                    <option value=\"euler\" class=\"dropdown-item\">Euler (Equidistant)</option>\n                    <option value=\"klay\" class=\"dropdown-item\">Klay (Left to Right)</option>\n                    <option value=\"spread\" class=\"dropdown-item\">Spread (Wide Distribution)</option>\n                    <option value=\"random\" class=\"dropdown-item\">Random</option>\n                </select>\n            </div>\n        ";
      layoutDropdown = document.getElementById('layout-dropdown-list');
      layout = layoutDropdown.options[layoutDropdown.selectedIndex].value;
      layout;
      updateLayout(layout);
    }
  }]);
  return GraphLayout;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
var layoutDropdown;
function updateLayout(value) {
  layout = value;
  layout = cy.layout({
    name: value,
    animationDuration: 1000,
    minDist: 40
  });
  layout.run();
  graphUpdate();
}
customElements.define('graph-layout', GraphLayout);