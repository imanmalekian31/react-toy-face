"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var GROUPS = [{
  rows: 3,
  cols: 6,
  img: "url('https://user-images.githubusercontent.com/58827166/184355357-0b278997-c163-45cf-a575-19f532b07864.jpg')"
}, {
  rows: 3,
  cols: 6,
  img: "url('https://user-images.githubusercontent.com/58827166/184355612-a8b12e00-a815-4456-8892-30836b4d1c2c.jpg')"
}];
var ReactToyFace = function ReactToyFace(_ref) {
  var size = _ref.size,
    toyNumber = _ref.toyNumber,
    _ref$group = _ref.group,
    group = _ref$group === void 0 ? 1 : _ref$group,
    rounded = _ref.rounded;
  var currentGroup = function currentGroup() {
    return GROUPS[group - 1];
  };
  var posX = function posX() {
    return (toyNumber - 1) % currentGroup().cols;
  };
  var posY = function posY() {
    return Math.floor((toyNumber - 1) / currentGroup().cols);
  };
  return /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      display: "inline-block",
      width: "".concat(size, "px"),
      height: "".concat(size, "px"),
      backgroundImage: currentGroup().img,
      backgroundRepeat: "no-repeat",
      backgroundSize: size * currentGroup().cols + "px " + size * currentGroup().rows + "px",
      borderRadius: rounded + "px",
      backgroundPositionX: "-".concat(posX() * size, "px"),
      backgroundPositionY: "-".concat(posY() * size, "px")
    }
  });
};
var _default = ReactToyFace;
exports["default"] = _default;