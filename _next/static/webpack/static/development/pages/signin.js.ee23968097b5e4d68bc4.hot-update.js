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
      console.log('here');
      return JSON.parse(window.document.cookie).email;
    }
  }, {
    key: "signedIn",
    value: function signedIn() {
      console.log('here2');
      return !!JSON.parse(window.document.cookie).email;
    }
  }, {
    key: "signIn",
    value: function signIn(email, pass) {
      console.log('here3');
      window.document.cookie = JSON.stringify({
        email: email
      });
    }
  }, {
    key: "signOut",
    value: function signOut() {
      console.log('here4');
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
//# sourceMappingURL=signin.js.ee23968097b5e4d68bc4.hot-update.js.map