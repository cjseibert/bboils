webpackHotUpdate("static/development/pages/products.js",{

/***/ "./pages/products.js":
/*!***************************!*\
  !*** ./pages/products.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var _products_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products.css */ "./pages/products.css");
/* harmony import */ var _products_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_products_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../db */ "./db.js");
var _jsxFileName = "/Users/cjseibert/Development/bboils/pages/products.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var ProductList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProductList, _React$Component);

  function ProductList(props) {
    var _this;

    _classCallCheck(this, ProductList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProductList).call(this, props));
    _this.onCategoryClick = _this.onCategoryClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onAddToCart = _this.onAddToCart.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      currentCategoryId: 0
    };
    return _this;
  }

  _createClass(ProductList, [{
    key: "onCategoryClick",
    value: function onCategoryClick(id, evt) {
      this.setState({
        currentCategoryId: id
      });
    }
  }, {
    key: "onAddToCart",
    value: function onAddToCart(id, catId, evt) {
      console.log('catid ' + catId + ' id ' + id);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var id = -1,
          itemid = -1;
      var categories = _db__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (item) {
        ++id;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: id,
          className: "category-item list-group-item d-flex justify-content-between lh-condensed",
          onClick: _this2.onCategoryClick.bind(_this2, id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
          className: "my-0",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, item.categoryName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
          className: "text-muted",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, item.description)));
      });
      var items = _db__WEBPACK_IMPORTED_MODULE_3__["default"][this.state.currentCategoryId].subProducts.map(function (item) {
        ++itemid;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: itemid,
          className: "mt-3 product-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row mt-3",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "col-lg-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "col-lg-8",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }, "Name: ", item.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, "Price: $", item.price)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "col-lg-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, "Quantity: ", item.quantity), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          color: "primary",
          onClick: _this2.onAddToCart.bind(_this2, itemid, _this2.state.currentCategoryId),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, "Add to Cart"))));
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "product-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "Our Products"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-4 mb-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "list-group mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, categories)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "product-list col-lg-8 mb-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, items, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "final-border mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }));
    }
  }]);

  return ProductList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ProductList);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/products")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=products.js.9a2bef9b7ced37e52707.hot-update.js.map