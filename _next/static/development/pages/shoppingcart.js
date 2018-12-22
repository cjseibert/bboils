((window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/shoppingcart.js"],{

/***/ "./db.js":
/*!***************!*\
  !*** ./db.js ***!
  \***************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var ProductInfo = [{
  "id": "1",
  "categoryName": "Lotions",
  "description": "Lotions for your hands and feet",
  "subProducts": [{
    "id": "1",
    "name": "Peppermint Lotion",
    "quantity": "5",
    "price": "12"
  }, {
    "id": "1",
    "name": "Spearming Lotion",
    "quantity": "3",
    "price": "15"
  }]
}, {
  "id": "2",
  "categoryName": "Lip Balms",
  "description": "Lip balms for cold winters",
  "subProducts": [{
    "id": "1",
    "name": "Chocolate Lip Balm",
    "quantity": "5",
    "price": "3"
  }]
}, {
  "id": "3",
  "categoryName": "Soaps",
  "description": "Fragrant soaps that lather well",
  "subProducts": [{
    "id": "1",
    "name": "Basil Soap",
    "quantity": "5",
    "price": "5"
  }]
}, {
  "id": "4",
  "categoryName": "Creams",
  "description": "Creams for chapped skin",
  "subProducts": [{
    "id": "1",
    "name": "Mocha Cream",
    "quantity": "5",
    "price": "10"
  }]
}, {
  "id": "5",
  "categoryName": "Chests",
  "description": "Custom chests",
  "subProducts": [{
    "id": "1",
    "name": "Wooden Chest",
    "quantity": "5",
    "price": "15"
  }, {
    "id": "2",
    "name": "Another Wooden Chest",
    "quantity": "5",
    "price": "15"
  }]
}, {
  "id": "6",
  "categoryName": "Signs",
  "description": "Custom signs",
  "subProducts": [{
    "id": "1",
    "name": "Wooden Sign",
    "quantity": "5",
    "price": "12"
  }, {
    "id": "2",
    "name": "Another Wooden Sign",
    "quantity": "5",
    "price": "15"
  }]
}];
/* harmony default export */ __webpack_exports__["default"] = (ProductInfo);

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_b2d9fd95b535cd8bf589 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_b2d9fd95b535cd8bf589 */ "dll-reference dll_b2d9fd95b535cd8bf589"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/shoppingcart.js":
/*!*******************************!*\
  !*** ./pages/shoppingcart.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shoppingcart_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shoppingcart.css */ "./pages/shoppingcart.css");
/* harmony import */ var _shoppingcart_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shoppingcart_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../db */ "./db.js");
var _jsxFileName = "/Users/cjseibert/Development/bboils/pages/shoppingcart.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var ShoppingCart =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ShoppingCart, _React$Component);

  function ShoppingCart(props) {
    var _this;

    _classCallCheck(this, ShoppingCart);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ShoppingCart).call(this, props));
    _this.User = null;
    _this.state = {
      cart: []
    };
    return _this;
  }

  _createClass(ShoppingCart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setUserName();
    }
  }, {
    key: "setUserName",
    value: function setUserName() {
      this.User = __webpack_require__(/*! ../user */ "./user.js").default;
      this.setState({
        cart: this.User.getCartItems()
      });
    }
  }, {
    key: "render",
    value: function render() {
      var cart = this.state.cart.slice();
      var id = 0;
      var items = cart.map(function (item) {
        ++id;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: id,
          className: "shoppingcart-item list-group-item d-flex justify-content-between lh-condensed",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
          className: "my-0",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, _db__WEBPACK_IMPORTED_MODULE_2__["default"][item.catId].subProducts[item.prodId].name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "text-muted",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, "$", _db__WEBPACK_IMPORTED_MODULE_2__["default"][item.catId].subProducts[item.prodId].price));
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container mt-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-lg-8 offset-lg-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Shopping Cart"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "list-group mb-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, items))));
    }
  }]);

  return ShoppingCart;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ShoppingCart);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/shoppingcart")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./user.js":
/*!*****************!*\
  !*** ./user.js ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserController =
/*#__PURE__*/
function () {
  function UserController() {
    _classCallCheck(this, UserController);
  }

  _createClass(UserController, null, [{
    key: "parseJSON",
    value: function parseJSON() {
      var parse;

      try {
        parse = JSON.parse(window.document.cookie);
      } catch (ex) {
        parse = {
          email: '',
          cart: []
        };
      }

      return parse;
    }
  }, {
    key: "getEmail",
    value: function getEmail() {
      var parse = UserController.parseJSON();
      return parse.email;
    }
  }, {
    key: "signedIn",
    value: function signedIn() {
      return !!UserController.getEmail();
    }
  }, {
    key: "signIn",
    value: function signIn(email, pass) {
      window.document.cookie = JSON.stringify({
        email: email,
        cart: []
      });
    }
  }, {
    key: "signOut",
    value: function signOut() {
      window.document.cookie = '';
    }
  }, {
    key: "appendCartItem",
    value: function appendCartItem(catId, prodId, qty) {
      var parse = UserController.parseJSON();
      parse.cart.push({
        catId: catId,
        prodId: prodId,
        qty: qty
      });
      window.document.cookie = JSON.stringify(parse);
    }
  }, {
    key: "getCartItems",
    value: function getCartItems() {
      var parse = UserController.parseJSON();
      return parse.cart;
    }
  }]);

  return UserController;
}();

/* harmony default export */ __webpack_exports__["default"] = (UserController);

/***/ }),

/***/ 6:
/*!*************************************!*\
  !*** multi ./pages/shoppingcart.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__NEXT_REGISTER_PAGE('/shoppingcart', function() {
module.exports = __webpack_require__(/*! ./pages/shoppingcart.js */"./pages/shoppingcart.js");

return { page: module.exports.default }});

/***/ }),

/***/ "dll-reference dll_b2d9fd95b535cd8bf589":
/*!*******************************************!*\
  !*** external "dll_b2d9fd95b535cd8bf589" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_b2d9fd95b535cd8bf589;

/***/ })

},[[6,"static/runtime/webpack.js","styles"]]]));;
//# sourceMappingURL=shoppingcart.js.map