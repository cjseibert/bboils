(window.webpackJsonp=window.webpackJsonp||[]).push([["084d"],{"2u7t":function(e,t,n){"use strict";n.r(t);var r=n("0iUn"),a=n("sLSF"),o=n("MI3g"),i=n("a7VT"),s=n("Tit0"),c=n("q1tI"),u=n.n(c),l=n("YFqc"),d=n.n(l),p=(n("uAez"),n("uGyd")),f=function(e){function t(e){var n;return Object(r.default)(this,t),(n=Object(o.default)(this,Object(i.default)(t).call(this,e))).User=null,n.state={cart:[]},n}return Object(s.default)(t,e),Object(a.default)(t,[{key:"componentDidMount",value:function(){this.setUserName()}},{key:"setUserName",value:function(){this.User=n("wKSf").default,this.setState({cart:this.User.getCartItems()})}},{key:"render",value:function(){var e=this.state.cart.slice(),t=0,n=e.map(function(e){return++t,u.a.createElement("li",{key:t,className:"shoppingcart-item list-group-item d-flex justify-content-between lh-condensed"},u.a.createElement("div",null,u.a.createElement("h6",{className:"my-0"},p.a[e.catId].subProducts[e.prodId].name)),u.a.createElement("span",{className:"text-muted"},"$",p.a[e.catId].subProducts[e.prodId].price))});return u.a.createElement("div",{className:"container mt-5"},u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-lg-8 offset-lg-2"},u.a.createElement("h1",null,"Shopping Cart"),u.a.createElement("ul",{className:"list-group mb-3"},n))),u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-lg-8 offset-lg-2"},u.a.createElement(d.a,{href:"/checkout"},u.a.createElement("a",{className:"btn btn-primary"},"Proceed to Checkout")))))}}]),t}(u.a.Component);t.default=f},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("KI45"),a=r(n("9Jkg")),o=r(n("/HRN")),i=r(n("WaGi")),s=r(n("ZDA2")),c=r(n("/+P4")),u=r(n("N9n2")),l=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},d=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var p=n("CxY0"),f=l(n("q1tI")),h=(d(n("17x9")),l(n("nOHt"))),m=n("Bu4q");function v(e){return e&&"object"==typeof e?m.formatWithValidation(e):e}var y=function(e){function t(){var e,n,r,a,i;return(0,o.default)(this,t),(e=(0,s.default)(this,(0,c.default)(t).apply(this,arguments))).formatUrls=(n=function(e,t){return{href:v(e),as:v(t)}},r=null,a=null,i=null,function(e,t){if(e===r&&t===a)return i;var o=n(e,t);return r=e,a=t,i=o,o}),e.linkClicked=function(t){var n=t.currentTarget,r=n.nodeName,a=n.target;if("A"!==r||!(a&&"_self"!==a||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var o=e.formatUrls(e.props.href,e.props.as),i=o.href,s=o.as;if(function(e){var t=p.parse(e,!1,!0),n=p.parse(m.getLocationOrigin(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var c=window.location.pathname;i=p.resolve(c,i),s=s?p.resolve(c,s):i,t.preventDefault();var u=e.props.scroll;null==u&&(u=s.indexOf("#")<0),h.default[e.props.replace?"replace":"push"](i,s,{shallow:e.props.shallow}).then(function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())}).catch(function(t){e.props.onError&&e.props.onError(t)})}}},e}return(0,u.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,a.default)(this.props.href)!==(0,a.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=p.resolve(e,t);h.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,a=n.as;"string"==typeof t&&(t=f.default.createElement("a",null,t));var o=f.Children.only(t),i={onClick:function(t){o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(i.href=a||r),i.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(i.href=h.Router._rewriteUrlForNextExport(i.href)),f.default.cloneElement(o,i)}}]),t}(f.Component);t.default=y},rxyb:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/shoppingcart",function(){var e=n("2u7t");return{page:e.default||e}}])},uGyd:function(e,t,n){"use strict";t.a=[{id:"1",categoryName:"Lip Balms",description:"Lip balms for cold winters",subProducts:[{id:"1",name:"Chocolate Lip Balm",quantity:"5",price:"3"}]},{id:"2",categoryName:"Soaps",description:"Fragrant soaps that lather well",subProducts:[{id:"1",name:"Basil Soap",quantity:"5",price:"5"}]},{id:"3",categoryName:"Creams",description:"Creams for chapped skin",subProducts:[{id:"1",name:"Mocha Cream",quantity:"5",price:"10"}]},{id:"4",categoryName:"Chests",description:"Custom chests",subProducts:[{id:"1",name:"Wooden Chest",quantity:"5",price:"15"},{id:"2",name:"Another Wooden Chest",quantity:"5",price:"15"}]},{id:"5",categoryName:"Signs",description:"Custom signs",subProducts:[{id:"1",name:"Wooden Sign",quantity:"5",price:"12"},{id:"2",name:"Another Wooden Sign",quantity:"5",price:"15"}]}]},wKSf:function(e,t,n){"use strict";n.r(t);var r=n("9Jkg"),a=n.n(r),o=n("0iUn"),i=n("sLSF"),s=function(){function e(){Object(o.default)(this,e)}return Object(i.default)(e,null,[{key:"parseJSON",value:function(){var e;try{e=JSON.parse(window.document.cookie)}catch(t){e={email:"",cart:[]}}return e}},{key:"getEmail",value:function(){return e.parseJSON().email}},{key:"signedIn",value:function(){return!!e.getEmail()}},{key:"signIn",value:function(e,t){window.document.cookie=a()({email:e,cart:[]})}},{key:"signOut",value:function(){window.document.cookie=""}},{key:"appendCartItem",value:function(t,n,r){var o=e.parseJSON();o.cart.push({catId:t,prodId:n,qty:r}),window.document.cookie=a()(o)}},{key:"getCartItems",value:function(){return e.parseJSON().cart}}]),e}();t.default=s}},[["rxyb","5d41","9da1","ad9d"]]]);