(window.webpackJsonp=window.webpackJsonp||[]).push([["e476"],{UGbB:function(e,t,r){"use strict";r.r(t);var a=r("0iUn"),n=r("sLSF"),o=r("MI3g"),s=r("a7VT"),l=r("Tit0"),i=r("q1tI"),c=r.n(i),u=(r("YFqc"),r("THng"),[{id:"1",name:"Sprout",address:"609 13th Ave NE, Door 8",address2:"Little Falls, MN 56345",date:"Jan. 26",time:"10 AM - 3 PM"},{id:"2",name:"Sprout",address:"609 13th Ave NE, Door 8",address2:"Little Falls, MN 56345",date:"Feb. 23",time:"10 AM - 3 PM"},{id:"3",name:"Sprout",address:"609 13th Ave NE, Door 8",address2:"Little Falls, MN 56345",date:"Mar. 23",time:"10 AM - 3 PM"}]),f=function(e){function t(){return Object(a.default)(this,t),Object(o.default)(this,Object(s.default)(t).apply(this,arguments))}return Object(l.default)(t,e),Object(n.default)(t,[{key:"render",value:function(){var e=u.map(function(e){return c.a.createElement("div",{key:e.id,className:"row mb-2 event-item"},c.a.createElement("div",{className:"col-lg-8"},c.a.createElement("p",{className:"h5"},e.name),c.a.createElement("p",{className:"h6"},e.address),c.a.createElement("p",{className:"h6"},e.address2)),c.a.createElement("div",{className:"col-lg-4"},c.a.createElement("p",{className:"h6"},e.date),c.a.createElement("p",{className:"h6"},e.time)))});return c.a.createElement("div",{className:"container mt-5"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-8 offset-lg-2"},c.a.createElement("h1",{className:"mb-3"},"Events"),c.a.createElement("p",{className:"lead mb-3"},"In addition to direct sales, we are available at a number of venues. Here is where you can find us next!"),e)))}}]),t}(c.a.Component);t.default=f},YFqc:function(e,t,r){e.exports=r("cTJO")},cTJO:function(e,t,r){"use strict";var a=r("KI45"),n=a(r("9Jkg")),o=a(r("/HRN")),s=a(r("WaGi")),l=a(r("ZDA2")),i=a(r("/+P4")),c=a(r("N9n2")),u=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},f=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var d=r("CxY0"),p=u(r("q1tI")),h=(f(r("17x9")),u(r("nOHt"))),m=r("Bu4q");function v(e){return e&&"object"==typeof e?m.formatWithValidation(e):e}var E=function(e){function t(){var e,r,a,n,s;return(0,o.default)(this,t),(e=(0,l.default)(this,(0,i.default)(t).apply(this,arguments))).formatUrls=(r=function(e,t){return{href:v(e),as:v(t)}},a=null,n=null,s=null,function(e,t){if(e===a&&t===n)return s;var o=r(e,t);return a=e,n=t,s=o,o}),e.linkClicked=function(t){var r=t.currentTarget,a=r.nodeName,n=r.target;if("A"!==a||!(n&&"_self"!==n||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var o=e.formatUrls(e.props.href,e.props.as),s=o.href,l=o.as;if(function(e){var t=d.parse(e,!1,!0),r=d.parse(m.getLocationOrigin(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(s)){var i=window.location.pathname;s=d.resolve(i,s),l=l?d.resolve(i,l):s,t.preventDefault();var c=e.props.scroll;null==c&&(c=l.indexOf("#")<0),h.default[e.props.replace?"replace":"push"](s,l,{shallow:e.props.shallow}).then(function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}).catch(function(t){e.props.onError&&e.props.onError(t)})}}},e}return(0,c.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,n.default)(this.props.href)!==(0,n.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,r=d.resolve(e,t);h.default.prefetch(r)}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),a=r.href,n=r.as;"string"==typeof t&&(t=p.default.createElement("a",null,t));var o=p.Children.only(t),s={onClick:function(t){o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(s.href=n||a),s.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(s.href=h.Router._rewriteUrlForNextExport(s.href)),p.default.cloneElement(o,s)}}]),t}(p.Component);t.default=E},f8ys:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/events",function(){var e=r("UGbB");return{page:e.default||e}}])}},[["f8ys","5d41","9da1","ad9d"]]]);