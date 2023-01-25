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
var SingleNodeEdit = /*#__PURE__*/function (_HTMLElement) {
  _inherits(SingleNodeEdit, _HTMLElement);
  var _super = _createSuper(SingleNodeEdit);
  function SingleNodeEdit() {
    _classCallCheck(this, SingleNodeEdit);
    return _super.call(this);
  }
  _createClass(SingleNodeEdit, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.innerHTML = "\n            <div class=\"two-column\">\n                <button id=\"selected-node-colorpicker-area\" class=\"btn colorpicker-area\">Node Color</button>\n                <div id=\"sne-dropdown-area\" class=\"dropdown-area\">\n                    <select id=\"sne-dropdown-list\" class=\"dropdown-list\" onChange=updateSingleNodeShape(value) title=\"node-shape-dropdown\">\n                        <option selected hidden class=\"dropdown-item\">Node Shape</option>\n                        <option value=\"ellipse\" class=\"dropdown-item\">Ellipse</option>\n                        <option value=\"triangle\" class=\"dropdown-item\">Triangle</option>\n                        <option value=\"round-triangle\" class=\"dropdown-item\">Round Triangle</option>\n                        <option value=\"rectangle\" class=\"dropdown-item\">Rectangle</option>\n                        <option value=\"round-rectangle\" class=\"dropdown-item\">Round Rectangle</option>\n                        <option value=\"bottom-round-rectangle\" class=\"dropdown-item\">Bottom Round Rectangle</option>\n                        <option value=\"cut-rectangle\" class=\"dropdown-item\">Cut Rectangle</option>\n                        <option value=\"barrel\" class=\"dropdown-item\">Barrel</option>\n                        <option value=\"rhomboid\" class=\"dropdown-item\">Rhomboid</option>\n                        <option value=\"diamond\" class=\"dropdown-item\">Diamond</option>\n                        <option value=\"round-diamond\" class=\"dropdown-item\">Round Diamond</option>\n                        <option value=\"square\" class=\"dropdown-item\">Square</option>\n                        <option value=\"pentagon\" class=\"dropdown-item\">Pentagon</option>\n                        <option value=\"round-pentagon\" class=\"dropdown-item\">Round Pentagon</option>\n                        <option value=\"hexagon\" class=\"dropdown-item\">Hexagon</option>\n                        <option value=\"concave-hexagon\" class=\"dropdown-item\">Concave Hexagon</option>\n                        <option value=\"round-hexagon\" class=\"dropdown-item\">Round Hexagon</option>\n                        <option value=\"heptagon\" class=\"dropdown-item\">Heptagon</option>\n                        <option value=\"round-heptagon\" class=\"dropdown-item\">Round Heptagon</option>\n                        <option value=\"octagon\" class=\"dropdown-item\">Octagon</option>\n                        <option value=\"round-octagon\" class=\"dropdown-item\">Round Octagon</option>\n                        <option value=\"star\" class=\"dropdown-item\">Star</option>\n                        <option value=\"tag\" class=\"dropdown-item\">Tag</option>\n                        <option value=\"vee\" class=\"dropdown-item\">Vee</option>\n                    </select>\n                </div>\n            </div>\n        ";
      singleNodeShapeDropdown = document.getElementById('sne-dropdown-list');
      singleNodeColorPicker = document.getElementById('selected-node-colorpicker-area');
      selectedNodeEdgeBox = document.getElementById('selected-node-edge');
      singleNodeShapeDropdown.classList.add("hidden");
      singleNodeColorPicker.classList.add("hidden");
      singleNodeShape = singleNodeShapeDropdown.options[singleNodeShapeDropdown.selectedIndex].value;
      document.getElementById('selected-node-edge').innerHTML = '<b>Nothing Selected</b>';
      selectedNodeEdgeBox.classList.add("no-selection");
      nodeParent = document.querySelector('#selected-node-colorpicker-area');
      nodePicker = new Picker(nodeParent);
      nodePicker.onChange = function (singleNodeColor) {
        var selectedNodeColor = singleNodeColor.rgbaString;
        cy.style().selector(cy.$(':selected')).style('background-color', selectedNodeColor).update();
      };
    }
  }]);
  return SingleNodeEdit;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
var singleNodeShape;
var singleNodeShapeDropdown;
var singleNodeColorPicker;
var selectedNodeEdgeBox;
var nodeTapped;
var nodeParent;
var nodePicker;
var selectedNodeColor;
cy.on('tap', 'node', function (e) {
  nodeTapped = e.target;
  nodeSelected = nodeTapped.id();
  document.getElementById('selected-node-edge').innerHTML = '<b>Selected Node:</b> ' + nodeSelected;
  selectedNodeEdgeBox.classList.remove("no-selection");
  singleNodeShapeDropdown.classList.remove("hidden");
  singleNodeColorPicker.classList.remove("hidden");
  singleEdgeLineDropdown.classList.add("hidden");
  singleEdgeColorPicker.classList.add("hidden");
});
cy.on('tap', function (e) {
  if (e.target.id === undefined) {
    nodeSelected = '';
    document.getElementById('selected-node-edge').innerHTML = '<b>Nothing Selected</b>';
    selectedNodeEdgeBox.classList.add("no-selection");
    singleNodeShapeDropdown.classList.add("hidden");
    singleNodeColorPicker.classList.add("hidden");
  }
});
function updateSingleNodeShape(shape) {
  cy.style().selector(cy.$(':selected')).style('shape', shape).update();
}
customElements.define('single-node-edit', SingleNodeEdit);