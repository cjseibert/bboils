webpackHotUpdate("static/development/pages/signin.js",{

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
    key: "getEmail",
    value: function getEmail() {
      return window.document.cookie.email;
    }
  }, {
    key: "signedIn",
    value: function signedIn() {
      return !!window.document.cookie.email;
    }
  }, {
    key: "signIn",
    value: function signIn(email, pass) {
      window.document.cookie = {};
      window.document.cookie.email = email;
    }
  }, {
    key: "signOut",
    value: function signOut() {
      window.document.cookie = '';
    }
  }, {
    key: "appendCartItem",
    value: function appendCartItem(catId, prodId, qty) {
      if (!window.document.cookie) window.document.cookie = {};
      if (!window.document.cookie.cart) window.document.cookie.cart = [];
      window.document.cookie.cart.push({
        catId: catId,
        prodId: prodId,
        qty: qty
      });
    }
  }]);

  return UserController;
}();

/* harmony default export */ __webpack_exports__["default"] = (UserController);

/***/ })

})
//# sourceMappingURL=signin.js.c604120fc12bc29c02db.hot-update.js.map