/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 711:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():0}(this,function(){"use strict";var e="undefined"!=typeof window?window:"undefined"!=typeof __webpack_require__.g?__webpack_require__.g:"undefined"!=typeof self?self:{},t="Expected a function",n=NaN,o="[object Symbol]",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,l=u||d||Function("return this")(),f=Object.prototype.toString,m=Math.max,p=Math.min,b=function(){return l.Date.now()};function v(e,n,o){var i,a,r,c,s,u,d=0,l=!1,f=!1,v=!0;if("function"!=typeof e)throw new TypeError(t);function y(t){var n=i,o=a;return i=a=void 0,d=t,c=e.apply(o,n)}function h(e){var t=e-u;return void 0===u||t>=n||t<0||f&&e-d>=r}function k(){var e=b();if(h(e))return x(e);s=setTimeout(k,function(e){var t=n-(e-u);return f?p(t,r-(e-d)):t}(e))}function x(e){return s=void 0,v&&i?y(e):(i=a=void 0,c)}function O(){var e=b(),t=h(e);if(i=arguments,a=this,u=e,t){if(void 0===s)return function(e){return d=e,s=setTimeout(k,n),l?y(e):c}(u);if(f)return s=setTimeout(k,n),y(u)}return void 0===s&&(s=setTimeout(k,n)),c}return n=w(n)||0,g(o)&&(l=!!o.leading,r=(f="maxWait"in o)?m(w(o.maxWait)||0,n):r,v="trailing"in o?!!o.trailing:v),O.cancel=function(){void 0!==s&&clearTimeout(s),d=0,i=u=a=s=void 0},O.flush=function(){return void 0===s?c:x(b())},O}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function w(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&f.call(e)==o}(e))return n;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var u=r.test(e);return u||c.test(e)?s(e.slice(2),u?2:8):a.test(e)?n:+e}var y=function(e,n,o){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError(t);return g(o)&&(i="leading"in o?!!o.leading:i,a="trailing"in o?!!o.trailing:a),v(e,n,{leading:i,maxWait:n,trailing:a})},h="Expected a function",k=NaN,x="[object Symbol]",O=/^\s+|\s+$/g,j=/^[-+]0x[0-9a-f]+$/i,E=/^0b[01]+$/i,N=/^0o[0-7]+$/i,z=parseInt,C="object"==typeof e&&e&&e.Object===Object&&e,A="object"==typeof self&&self&&self.Object===Object&&self,q=C||A||Function("return this")(),L=Object.prototype.toString,T=Math.max,M=Math.min,S=function(){return q.Date.now()};function D(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function H(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&L.call(e)==x}(e))return k;if(D(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=D(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(O,"");var n=E.test(e);return n||N.test(e)?z(e.slice(2),n?2:8):j.test(e)?k:+e}var $=function(e,t,n){var o,i,a,r,c,s,u=0,d=!1,l=!1,f=!0;if("function"!=typeof e)throw new TypeError(h);function m(t){var n=o,a=i;return o=i=void 0,u=t,r=e.apply(a,n)}function p(e){var n=e-s;return void 0===s||n>=t||n<0||l&&e-u>=a}function b(){var e=S();if(p(e))return v(e);c=setTimeout(b,function(e){var n=t-(e-s);return l?M(n,a-(e-u)):n}(e))}function v(e){return c=void 0,f&&o?m(e):(o=i=void 0,r)}function g(){var e=S(),n=p(e);if(o=arguments,i=this,s=e,n){if(void 0===c)return function(e){return u=e,c=setTimeout(b,t),d?m(e):r}(s);if(l)return c=setTimeout(b,t),m(s)}return void 0===c&&(c=setTimeout(b,t)),r}return t=H(t)||0,D(n)&&(d=!!n.leading,a=(l="maxWait"in n)?T(H(n.maxWait)||0,t):a,f="trailing"in n?!!n.trailing:f),g.cancel=function(){void 0!==c&&clearTimeout(c),u=0,o=s=i=c=void 0},g.flush=function(){return void 0===c?r:v(S())},g},W=function(){};function P(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes);if(function e(t){var n=void 0,o=void 0;for(n=0;n<t.length;n+=1){if((o=t[n]).dataset&&o.dataset.aos)return!0;if(o.children&&e(o.children))return!0}return!1}(t.concat(n)))return W()})}function Y(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}var _={isSupported:function(){return!!Y()},ready:function(e,t){var n=window.document,o=new(Y())(P);W=t,o.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}},B=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},K=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,G=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,J=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,Q=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function R(){return navigator.userAgent||navigator.vendor||window.opera||""}var U=new(function(){function e(){B(this,e)}return F(e,[{key:"phone",value:function(){var e=R();return!(!K.test(e)&&!G.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=R();return!(!J.test(e)&&!Q.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),e}()),V=function(e,t){var n=void 0;return U.ie11()?(n=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,{detail:t}):n=new CustomEvent(e,{detail:t}),document.dispatchEvent(n)},X=function(e){return e.forEach(function(e,t){return function(e,t){var n=e.options,o=e.position,i=e.node,a=(e.data,function(){e.animated&&(function(e,t){t&&t.forEach(function(t){return e.classList.remove(t)})}(i,n.animatedClassNames),V("aos:out",i),e.options.id&&V("aos:in:"+e.options.id,i),e.animated=!1)});n.mirror&&t>=o.out&&!n.once?a():t>=o.in?e.animated||(function(e,t){t&&t.forEach(function(t){return e.classList.add(t)})}(i,n.animatedClassNames),V("aos:in",i),e.options.id&&V("aos:in:"+e.options.id,i),e.animated=!0):e.animated&&!n.once&&a()}(e,window.pageYOffset)})},Z=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}},ee=function(e,t,n){var o=e.getAttribute("data-aos-"+t);if(void 0!==o){if("true"===o)return!0;if("false"===o)return!1}return o||n},te=function(e,t){return e.forEach(function(e,n){var o=ee(e.node,"mirror",t.mirror),i=ee(e.node,"once",t.once),a=ee(e.node,"id"),r=t.useClassNames&&e.node.getAttribute("data-aos"),c=[t.animatedClassName].concat(r?r.split(" "):[]).filter(function(e){return"string"==typeof e});t.initClassName&&e.node.classList.add(t.initClassName),e.position={in:function(e,t,n){var o=window.innerHeight,i=ee(e,"anchor"),a=ee(e,"anchor-placement"),r=Number(ee(e,"offset",a?0:t)),c=a||n,s=e;i&&document.querySelectorAll(i)&&(s=document.querySelectorAll(i)[0]);var u=Z(s).top-o;switch(c){case"top-bottom":break;case"center-bottom":u+=s.offsetHeight/2;break;case"bottom-bottom":u+=s.offsetHeight;break;case"top-center":u+=o/2;break;case"center-center":u+=o/2+s.offsetHeight/2;break;case"bottom-center":u+=o/2+s.offsetHeight;break;case"top-top":u+=o;break;case"bottom-top":u+=o+s.offsetHeight;break;case"center-top":u+=o+s.offsetHeight/2}return u+r}(e.node,t.offset,t.anchorPlacement),out:o&&function(e,t){window.innerHeight;var n=ee(e,"anchor"),o=ee(e,"offset",t),i=e;return n&&document.querySelectorAll(n)&&(i=document.querySelectorAll(n)[0]),Z(i).top+i.offsetHeight-o}(e.node,t.offset)},e.options={once:i,mirror:o,animatedClassNames:c,id:a}}),e},ne=function(){var e=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(e,function(e){return{node:e}})},oe=[],ie=!1,ae={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},re=function(){return document.all&&!window.atob},ce=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(ie=!0),ie&&(oe=te(oe,ae),X(oe),window.addEventListener("scroll",y(function(){X(oe,ae.once)},ae.throttleDelay)))},se=function(){if(oe=ne(),de(ae.disable)||re())return ue();ce()},ue=function(){oe.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay"),ae.initClassName&&e.node.classList.remove(ae.initClassName),ae.animatedClassName&&e.node.classList.remove(ae.animatedClassName)})},de=function(e){return!0===e||"mobile"===e&&U.mobile()||"phone"===e&&U.phone()||"tablet"===e&&U.tablet()||"function"==typeof e&&!0===e()};return{init:function(e){return ae=I(ae,e),oe=ne(),ae.disableMutationObserver||_.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),ae.disableMutationObserver=!0),ae.disableMutationObserver||_.ready("[data-aos]",se),de(ae.disable)||re()?ue():(document.querySelector("body").setAttribute("data-aos-easing",ae.easing),document.querySelector("body").setAttribute("data-aos-duration",ae.duration),document.querySelector("body").setAttribute("data-aos-delay",ae.delay),-1===["DOMContentLoaded","load"].indexOf(ae.startEvent)?document.addEventListener(ae.startEvent,function(){ce(!0)}):window.addEventListener("load",function(){ce(!0)}),"DOMContentLoaded"===ae.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1&&ce(!0),window.addEventListener("resize",$(ce,ae.debounceDelay,!0)),window.addEventListener("orientationchange",$(ce,ae.debounceDelay,!0)),oe)},refresh:ce,refreshHard:se}});


/***/ }),

/***/ 659:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "[data-aos][data-aos][data-aos-duration=\"50\"],body[data-aos-duration=\"50\"] [data-aos]{transition-duration:50ms}[data-aos][data-aos][data-aos-delay=\"50\"],body[data-aos-delay=\"50\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"50\"].aos-animate,body[data-aos-delay=\"50\"] [data-aos].aos-animate{transition-delay:50ms}[data-aos][data-aos][data-aos-duration=\"100\"],body[data-aos-duration=\"100\"] [data-aos]{transition-duration:.1s}[data-aos][data-aos][data-aos-delay=\"100\"],body[data-aos-delay=\"100\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"100\"].aos-animate,body[data-aos-delay=\"100\"] [data-aos].aos-animate{transition-delay:.1s}[data-aos][data-aos][data-aos-duration=\"150\"],body[data-aos-duration=\"150\"] [data-aos]{transition-duration:.15s}[data-aos][data-aos][data-aos-delay=\"150\"],body[data-aos-delay=\"150\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"150\"].aos-animate,body[data-aos-delay=\"150\"] [data-aos].aos-animate{transition-delay:.15s}[data-aos][data-aos][data-aos-duration=\"200\"],body[data-aos-duration=\"200\"] [data-aos]{transition-duration:.2s}[data-aos][data-aos][data-aos-delay=\"200\"],body[data-aos-delay=\"200\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"200\"].aos-animate,body[data-aos-delay=\"200\"] [data-aos].aos-animate{transition-delay:.2s}[data-aos][data-aos][data-aos-duration=\"250\"],body[data-aos-duration=\"250\"] [data-aos]{transition-duration:.25s}[data-aos][data-aos][data-aos-delay=\"250\"],body[data-aos-delay=\"250\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"250\"].aos-animate,body[data-aos-delay=\"250\"] [data-aos].aos-animate{transition-delay:.25s}[data-aos][data-aos][data-aos-duration=\"300\"],body[data-aos-duration=\"300\"] [data-aos]{transition-duration:.3s}[data-aos][data-aos][data-aos-delay=\"300\"],body[data-aos-delay=\"300\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"300\"].aos-animate,body[data-aos-delay=\"300\"] [data-aos].aos-animate{transition-delay:.3s}[data-aos][data-aos][data-aos-duration=\"350\"],body[data-aos-duration=\"350\"] [data-aos]{transition-duration:.35s}[data-aos][data-aos][data-aos-delay=\"350\"],body[data-aos-delay=\"350\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"350\"].aos-animate,body[data-aos-delay=\"350\"] [data-aos].aos-animate{transition-delay:.35s}[data-aos][data-aos][data-aos-duration=\"400\"],body[data-aos-duration=\"400\"] [data-aos]{transition-duration:.4s}[data-aos][data-aos][data-aos-delay=\"400\"],body[data-aos-delay=\"400\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"400\"].aos-animate,body[data-aos-delay=\"400\"] [data-aos].aos-animate{transition-delay:.4s}[data-aos][data-aos][data-aos-duration=\"450\"],body[data-aos-duration=\"450\"] [data-aos]{transition-duration:.45s}[data-aos][data-aos][data-aos-delay=\"450\"],body[data-aos-delay=\"450\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"450\"].aos-animate,body[data-aos-delay=\"450\"] [data-aos].aos-animate{transition-delay:.45s}[data-aos][data-aos][data-aos-duration=\"500\"],body[data-aos-duration=\"500\"] [data-aos]{transition-duration:.5s}[data-aos][data-aos][data-aos-delay=\"500\"],body[data-aos-delay=\"500\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"500\"].aos-animate,body[data-aos-delay=\"500\"] [data-aos].aos-animate{transition-delay:.5s}[data-aos][data-aos][data-aos-duration=\"550\"],body[data-aos-duration=\"550\"] [data-aos]{transition-duration:.55s}[data-aos][data-aos][data-aos-delay=\"550\"],body[data-aos-delay=\"550\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"550\"].aos-animate,body[data-aos-delay=\"550\"] [data-aos].aos-animate{transition-delay:.55s}[data-aos][data-aos][data-aos-duration=\"600\"],body[data-aos-duration=\"600\"] [data-aos]{transition-duration:.6s}[data-aos][data-aos][data-aos-delay=\"600\"],body[data-aos-delay=\"600\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"600\"].aos-animate,body[data-aos-delay=\"600\"] [data-aos].aos-animate{transition-delay:.6s}[data-aos][data-aos][data-aos-duration=\"650\"],body[data-aos-duration=\"650\"] [data-aos]{transition-duration:.65s}[data-aos][data-aos][data-aos-delay=\"650\"],body[data-aos-delay=\"650\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"650\"].aos-animate,body[data-aos-delay=\"650\"] [data-aos].aos-animate{transition-delay:.65s}[data-aos][data-aos][data-aos-duration=\"700\"],body[data-aos-duration=\"700\"] [data-aos]{transition-duration:.7s}[data-aos][data-aos][data-aos-delay=\"700\"],body[data-aos-delay=\"700\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"700\"].aos-animate,body[data-aos-delay=\"700\"] [data-aos].aos-animate{transition-delay:.7s}[data-aos][data-aos][data-aos-duration=\"750\"],body[data-aos-duration=\"750\"] [data-aos]{transition-duration:.75s}[data-aos][data-aos][data-aos-delay=\"750\"],body[data-aos-delay=\"750\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"750\"].aos-animate,body[data-aos-delay=\"750\"] [data-aos].aos-animate{transition-delay:.75s}[data-aos][data-aos][data-aos-duration=\"800\"],body[data-aos-duration=\"800\"] [data-aos]{transition-duration:.8s}[data-aos][data-aos][data-aos-delay=\"800\"],body[data-aos-delay=\"800\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"800\"].aos-animate,body[data-aos-delay=\"800\"] [data-aos].aos-animate{transition-delay:.8s}[data-aos][data-aos][data-aos-duration=\"850\"],body[data-aos-duration=\"850\"] [data-aos]{transition-duration:.85s}[data-aos][data-aos][data-aos-delay=\"850\"],body[data-aos-delay=\"850\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"850\"].aos-animate,body[data-aos-delay=\"850\"] [data-aos].aos-animate{transition-delay:.85s}[data-aos][data-aos][data-aos-duration=\"900\"],body[data-aos-duration=\"900\"] [data-aos]{transition-duration:.9s}[data-aos][data-aos][data-aos-delay=\"900\"],body[data-aos-delay=\"900\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"900\"].aos-animate,body[data-aos-delay=\"900\"] [data-aos].aos-animate{transition-delay:.9s}[data-aos][data-aos][data-aos-duration=\"950\"],body[data-aos-duration=\"950\"] [data-aos]{transition-duration:.95s}[data-aos][data-aos][data-aos-delay=\"950\"],body[data-aos-delay=\"950\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"950\"].aos-animate,body[data-aos-delay=\"950\"] [data-aos].aos-animate{transition-delay:.95s}[data-aos][data-aos][data-aos-duration=\"1000\"],body[data-aos-duration=\"1000\"] [data-aos]{transition-duration:1s}[data-aos][data-aos][data-aos-delay=\"1000\"],body[data-aos-delay=\"1000\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1000\"].aos-animate,body[data-aos-delay=\"1000\"] [data-aos].aos-animate{transition-delay:1s}[data-aos][data-aos][data-aos-duration=\"1050\"],body[data-aos-duration=\"1050\"] [data-aos]{transition-duration:1.05s}[data-aos][data-aos][data-aos-delay=\"1050\"],body[data-aos-delay=\"1050\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1050\"].aos-animate,body[data-aos-delay=\"1050\"] [data-aos].aos-animate{transition-delay:1.05s}[data-aos][data-aos][data-aos-duration=\"1100\"],body[data-aos-duration=\"1100\"] [data-aos]{transition-duration:1.1s}[data-aos][data-aos][data-aos-delay=\"1100\"],body[data-aos-delay=\"1100\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1100\"].aos-animate,body[data-aos-delay=\"1100\"] [data-aos].aos-animate{transition-delay:1.1s}[data-aos][data-aos][data-aos-duration=\"1150\"],body[data-aos-duration=\"1150\"] [data-aos]{transition-duration:1.15s}[data-aos][data-aos][data-aos-delay=\"1150\"],body[data-aos-delay=\"1150\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1150\"].aos-animate,body[data-aos-delay=\"1150\"] [data-aos].aos-animate{transition-delay:1.15s}[data-aos][data-aos][data-aos-duration=\"1200\"],body[data-aos-duration=\"1200\"] [data-aos]{transition-duration:1.2s}[data-aos][data-aos][data-aos-delay=\"1200\"],body[data-aos-delay=\"1200\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1200\"].aos-animate,body[data-aos-delay=\"1200\"] [data-aos].aos-animate{transition-delay:1.2s}[data-aos][data-aos][data-aos-duration=\"1250\"],body[data-aos-duration=\"1250\"] [data-aos]{transition-duration:1.25s}[data-aos][data-aos][data-aos-delay=\"1250\"],body[data-aos-delay=\"1250\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1250\"].aos-animate,body[data-aos-delay=\"1250\"] [data-aos].aos-animate{transition-delay:1.25s}[data-aos][data-aos][data-aos-duration=\"1300\"],body[data-aos-duration=\"1300\"] [data-aos]{transition-duration:1.3s}[data-aos][data-aos][data-aos-delay=\"1300\"],body[data-aos-delay=\"1300\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1300\"].aos-animate,body[data-aos-delay=\"1300\"] [data-aos].aos-animate{transition-delay:1.3s}[data-aos][data-aos][data-aos-duration=\"1350\"],body[data-aos-duration=\"1350\"] [data-aos]{transition-duration:1.35s}[data-aos][data-aos][data-aos-delay=\"1350\"],body[data-aos-delay=\"1350\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1350\"].aos-animate,body[data-aos-delay=\"1350\"] [data-aos].aos-animate{transition-delay:1.35s}[data-aos][data-aos][data-aos-duration=\"1400\"],body[data-aos-duration=\"1400\"] [data-aos]{transition-duration:1.4s}[data-aos][data-aos][data-aos-delay=\"1400\"],body[data-aos-delay=\"1400\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1400\"].aos-animate,body[data-aos-delay=\"1400\"] [data-aos].aos-animate{transition-delay:1.4s}[data-aos][data-aos][data-aos-duration=\"1450\"],body[data-aos-duration=\"1450\"] [data-aos]{transition-duration:1.45s}[data-aos][data-aos][data-aos-delay=\"1450\"],body[data-aos-delay=\"1450\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1450\"].aos-animate,body[data-aos-delay=\"1450\"] [data-aos].aos-animate{transition-delay:1.45s}[data-aos][data-aos][data-aos-duration=\"1500\"],body[data-aos-duration=\"1500\"] [data-aos]{transition-duration:1.5s}[data-aos][data-aos][data-aos-delay=\"1500\"],body[data-aos-delay=\"1500\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1500\"].aos-animate,body[data-aos-delay=\"1500\"] [data-aos].aos-animate{transition-delay:1.5s}[data-aos][data-aos][data-aos-duration=\"1550\"],body[data-aos-duration=\"1550\"] [data-aos]{transition-duration:1.55s}[data-aos][data-aos][data-aos-delay=\"1550\"],body[data-aos-delay=\"1550\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1550\"].aos-animate,body[data-aos-delay=\"1550\"] [data-aos].aos-animate{transition-delay:1.55s}[data-aos][data-aos][data-aos-duration=\"1600\"],body[data-aos-duration=\"1600\"] [data-aos]{transition-duration:1.6s}[data-aos][data-aos][data-aos-delay=\"1600\"],body[data-aos-delay=\"1600\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1600\"].aos-animate,body[data-aos-delay=\"1600\"] [data-aos].aos-animate{transition-delay:1.6s}[data-aos][data-aos][data-aos-duration=\"1650\"],body[data-aos-duration=\"1650\"] [data-aos]{transition-duration:1.65s}[data-aos][data-aos][data-aos-delay=\"1650\"],body[data-aos-delay=\"1650\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1650\"].aos-animate,body[data-aos-delay=\"1650\"] [data-aos].aos-animate{transition-delay:1.65s}[data-aos][data-aos][data-aos-duration=\"1700\"],body[data-aos-duration=\"1700\"] [data-aos]{transition-duration:1.7s}[data-aos][data-aos][data-aos-delay=\"1700\"],body[data-aos-delay=\"1700\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1700\"].aos-animate,body[data-aos-delay=\"1700\"] [data-aos].aos-animate{transition-delay:1.7s}[data-aos][data-aos][data-aos-duration=\"1750\"],body[data-aos-duration=\"1750\"] [data-aos]{transition-duration:1.75s}[data-aos][data-aos][data-aos-delay=\"1750\"],body[data-aos-delay=\"1750\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1750\"].aos-animate,body[data-aos-delay=\"1750\"] [data-aos].aos-animate{transition-delay:1.75s}[data-aos][data-aos][data-aos-duration=\"1800\"],body[data-aos-duration=\"1800\"] [data-aos]{transition-duration:1.8s}[data-aos][data-aos][data-aos-delay=\"1800\"],body[data-aos-delay=\"1800\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1800\"].aos-animate,body[data-aos-delay=\"1800\"] [data-aos].aos-animate{transition-delay:1.8s}[data-aos][data-aos][data-aos-duration=\"1850\"],body[data-aos-duration=\"1850\"] [data-aos]{transition-duration:1.85s}[data-aos][data-aos][data-aos-delay=\"1850\"],body[data-aos-delay=\"1850\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1850\"].aos-animate,body[data-aos-delay=\"1850\"] [data-aos].aos-animate{transition-delay:1.85s}[data-aos][data-aos][data-aos-duration=\"1900\"],body[data-aos-duration=\"1900\"] [data-aos]{transition-duration:1.9s}[data-aos][data-aos][data-aos-delay=\"1900\"],body[data-aos-delay=\"1900\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1900\"].aos-animate,body[data-aos-delay=\"1900\"] [data-aos].aos-animate{transition-delay:1.9s}[data-aos][data-aos][data-aos-duration=\"1950\"],body[data-aos-duration=\"1950\"] [data-aos]{transition-duration:1.95s}[data-aos][data-aos][data-aos-delay=\"1950\"],body[data-aos-delay=\"1950\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"1950\"].aos-animate,body[data-aos-delay=\"1950\"] [data-aos].aos-animate{transition-delay:1.95s}[data-aos][data-aos][data-aos-duration=\"2000\"],body[data-aos-duration=\"2000\"] [data-aos]{transition-duration:2s}[data-aos][data-aos][data-aos-delay=\"2000\"],body[data-aos-delay=\"2000\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2000\"].aos-animate,body[data-aos-delay=\"2000\"] [data-aos].aos-animate{transition-delay:2s}[data-aos][data-aos][data-aos-duration=\"2050\"],body[data-aos-duration=\"2050\"] [data-aos]{transition-duration:2.05s}[data-aos][data-aos][data-aos-delay=\"2050\"],body[data-aos-delay=\"2050\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2050\"].aos-animate,body[data-aos-delay=\"2050\"] [data-aos].aos-animate{transition-delay:2.05s}[data-aos][data-aos][data-aos-duration=\"2100\"],body[data-aos-duration=\"2100\"] [data-aos]{transition-duration:2.1s}[data-aos][data-aos][data-aos-delay=\"2100\"],body[data-aos-delay=\"2100\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2100\"].aos-animate,body[data-aos-delay=\"2100\"] [data-aos].aos-animate{transition-delay:2.1s}[data-aos][data-aos][data-aos-duration=\"2150\"],body[data-aos-duration=\"2150\"] [data-aos]{transition-duration:2.15s}[data-aos][data-aos][data-aos-delay=\"2150\"],body[data-aos-delay=\"2150\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2150\"].aos-animate,body[data-aos-delay=\"2150\"] [data-aos].aos-animate{transition-delay:2.15s}[data-aos][data-aos][data-aos-duration=\"2200\"],body[data-aos-duration=\"2200\"] [data-aos]{transition-duration:2.2s}[data-aos][data-aos][data-aos-delay=\"2200\"],body[data-aos-delay=\"2200\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2200\"].aos-animate,body[data-aos-delay=\"2200\"] [data-aos].aos-animate{transition-delay:2.2s}[data-aos][data-aos][data-aos-duration=\"2250\"],body[data-aos-duration=\"2250\"] [data-aos]{transition-duration:2.25s}[data-aos][data-aos][data-aos-delay=\"2250\"],body[data-aos-delay=\"2250\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2250\"].aos-animate,body[data-aos-delay=\"2250\"] [data-aos].aos-animate{transition-delay:2.25s}[data-aos][data-aos][data-aos-duration=\"2300\"],body[data-aos-duration=\"2300\"] [data-aos]{transition-duration:2.3s}[data-aos][data-aos][data-aos-delay=\"2300\"],body[data-aos-delay=\"2300\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2300\"].aos-animate,body[data-aos-delay=\"2300\"] [data-aos].aos-animate{transition-delay:2.3s}[data-aos][data-aos][data-aos-duration=\"2350\"],body[data-aos-duration=\"2350\"] [data-aos]{transition-duration:2.35s}[data-aos][data-aos][data-aos-delay=\"2350\"],body[data-aos-delay=\"2350\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2350\"].aos-animate,body[data-aos-delay=\"2350\"] [data-aos].aos-animate{transition-delay:2.35s}[data-aos][data-aos][data-aos-duration=\"2400\"],body[data-aos-duration=\"2400\"] [data-aos]{transition-duration:2.4s}[data-aos][data-aos][data-aos-delay=\"2400\"],body[data-aos-delay=\"2400\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2400\"].aos-animate,body[data-aos-delay=\"2400\"] [data-aos].aos-animate{transition-delay:2.4s}[data-aos][data-aos][data-aos-duration=\"2450\"],body[data-aos-duration=\"2450\"] [data-aos]{transition-duration:2.45s}[data-aos][data-aos][data-aos-delay=\"2450\"],body[data-aos-delay=\"2450\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2450\"].aos-animate,body[data-aos-delay=\"2450\"] [data-aos].aos-animate{transition-delay:2.45s}[data-aos][data-aos][data-aos-duration=\"2500\"],body[data-aos-duration=\"2500\"] [data-aos]{transition-duration:2.5s}[data-aos][data-aos][data-aos-delay=\"2500\"],body[data-aos-delay=\"2500\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2500\"].aos-animate,body[data-aos-delay=\"2500\"] [data-aos].aos-animate{transition-delay:2.5s}[data-aos][data-aos][data-aos-duration=\"2550\"],body[data-aos-duration=\"2550\"] [data-aos]{transition-duration:2.55s}[data-aos][data-aos][data-aos-delay=\"2550\"],body[data-aos-delay=\"2550\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2550\"].aos-animate,body[data-aos-delay=\"2550\"] [data-aos].aos-animate{transition-delay:2.55s}[data-aos][data-aos][data-aos-duration=\"2600\"],body[data-aos-duration=\"2600\"] [data-aos]{transition-duration:2.6s}[data-aos][data-aos][data-aos-delay=\"2600\"],body[data-aos-delay=\"2600\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2600\"].aos-animate,body[data-aos-delay=\"2600\"] [data-aos].aos-animate{transition-delay:2.6s}[data-aos][data-aos][data-aos-duration=\"2650\"],body[data-aos-duration=\"2650\"] [data-aos]{transition-duration:2.65s}[data-aos][data-aos][data-aos-delay=\"2650\"],body[data-aos-delay=\"2650\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2650\"].aos-animate,body[data-aos-delay=\"2650\"] [data-aos].aos-animate{transition-delay:2.65s}[data-aos][data-aos][data-aos-duration=\"2700\"],body[data-aos-duration=\"2700\"] [data-aos]{transition-duration:2.7s}[data-aos][data-aos][data-aos-delay=\"2700\"],body[data-aos-delay=\"2700\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2700\"].aos-animate,body[data-aos-delay=\"2700\"] [data-aos].aos-animate{transition-delay:2.7s}[data-aos][data-aos][data-aos-duration=\"2750\"],body[data-aos-duration=\"2750\"] [data-aos]{transition-duration:2.75s}[data-aos][data-aos][data-aos-delay=\"2750\"],body[data-aos-delay=\"2750\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2750\"].aos-animate,body[data-aos-delay=\"2750\"] [data-aos].aos-animate{transition-delay:2.75s}[data-aos][data-aos][data-aos-duration=\"2800\"],body[data-aos-duration=\"2800\"] [data-aos]{transition-duration:2.8s}[data-aos][data-aos][data-aos-delay=\"2800\"],body[data-aos-delay=\"2800\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2800\"].aos-animate,body[data-aos-delay=\"2800\"] [data-aos].aos-animate{transition-delay:2.8s}[data-aos][data-aos][data-aos-duration=\"2850\"],body[data-aos-duration=\"2850\"] [data-aos]{transition-duration:2.85s}[data-aos][data-aos][data-aos-delay=\"2850\"],body[data-aos-delay=\"2850\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2850\"].aos-animate,body[data-aos-delay=\"2850\"] [data-aos].aos-animate{transition-delay:2.85s}[data-aos][data-aos][data-aos-duration=\"2900\"],body[data-aos-duration=\"2900\"] [data-aos]{transition-duration:2.9s}[data-aos][data-aos][data-aos-delay=\"2900\"],body[data-aos-delay=\"2900\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2900\"].aos-animate,body[data-aos-delay=\"2900\"] [data-aos].aos-animate{transition-delay:2.9s}[data-aos][data-aos][data-aos-duration=\"2950\"],body[data-aos-duration=\"2950\"] [data-aos]{transition-duration:2.95s}[data-aos][data-aos][data-aos-delay=\"2950\"],body[data-aos-delay=\"2950\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"2950\"].aos-animate,body[data-aos-delay=\"2950\"] [data-aos].aos-animate{transition-delay:2.95s}[data-aos][data-aos][data-aos-duration=\"3000\"],body[data-aos-duration=\"3000\"] [data-aos]{transition-duration:3s}[data-aos][data-aos][data-aos-delay=\"3000\"],body[data-aos-delay=\"3000\"] [data-aos]{transition-delay:0s}[data-aos][data-aos][data-aos-delay=\"3000\"].aos-animate,body[data-aos-delay=\"3000\"] [data-aos].aos-animate{transition-delay:3s}[data-aos]{pointer-events:none}[data-aos].aos-animate{pointer-events:auto}[data-aos][data-aos][data-aos-easing=linear],body[data-aos-easing=linear] [data-aos]{transition-timing-function:cubic-bezier(.25,.25,.75,.75)}[data-aos][data-aos][data-aos-easing=ease],body[data-aos-easing=ease] [data-aos]{transition-timing-function:ease}[data-aos][data-aos][data-aos-easing=ease-in],body[data-aos-easing=ease-in] [data-aos]{transition-timing-function:ease-in}[data-aos][data-aos][data-aos-easing=ease-out],body[data-aos-easing=ease-out] [data-aos]{transition-timing-function:ease-out}[data-aos][data-aos][data-aos-easing=ease-in-out],body[data-aos-easing=ease-in-out] [data-aos]{transition-timing-function:ease-in-out}[data-aos][data-aos][data-aos-easing=ease-in-back],body[data-aos-easing=ease-in-back] [data-aos]{transition-timing-function:cubic-bezier(.6,-.28,.735,.045)}[data-aos][data-aos][data-aos-easing=ease-out-back],body[data-aos-easing=ease-out-back] [data-aos]{transition-timing-function:cubic-bezier(.175,.885,.32,1.275)}[data-aos][data-aos][data-aos-easing=ease-in-out-back],body[data-aos-easing=ease-in-out-back] [data-aos]{transition-timing-function:cubic-bezier(.68,-.55,.265,1.55)}[data-aos][data-aos][data-aos-easing=ease-in-sine],body[data-aos-easing=ease-in-sine] [data-aos]{transition-timing-function:cubic-bezier(.47,0,.745,.715)}[data-aos][data-aos][data-aos-easing=ease-out-sine],body[data-aos-easing=ease-out-sine] [data-aos]{transition-timing-function:cubic-bezier(.39,.575,.565,1)}[data-aos][data-aos][data-aos-easing=ease-in-out-sine],body[data-aos-easing=ease-in-out-sine] [data-aos]{transition-timing-function:cubic-bezier(.445,.05,.55,.95)}[data-aos][data-aos][data-aos-easing=ease-in-quad],body[data-aos-easing=ease-in-quad] [data-aos]{transition-timing-function:cubic-bezier(.55,.085,.68,.53)}[data-aos][data-aos][data-aos-easing=ease-out-quad],body[data-aos-easing=ease-out-quad] [data-aos]{transition-timing-function:cubic-bezier(.25,.46,.45,.94)}[data-aos][data-aos][data-aos-easing=ease-in-out-quad],body[data-aos-easing=ease-in-out-quad] [data-aos]{transition-timing-function:cubic-bezier(.455,.03,.515,.955)}[data-aos][data-aos][data-aos-easing=ease-in-cubic],body[data-aos-easing=ease-in-cubic] [data-aos]{transition-timing-function:cubic-bezier(.55,.085,.68,.53)}[data-aos][data-aos][data-aos-easing=ease-out-cubic],body[data-aos-easing=ease-out-cubic] [data-aos]{transition-timing-function:cubic-bezier(.25,.46,.45,.94)}[data-aos][data-aos][data-aos-easing=ease-in-out-cubic],body[data-aos-easing=ease-in-out-cubic] [data-aos]{transition-timing-function:cubic-bezier(.455,.03,.515,.955)}[data-aos][data-aos][data-aos-easing=ease-in-quart],body[data-aos-easing=ease-in-quart] [data-aos]{transition-timing-function:cubic-bezier(.55,.085,.68,.53)}[data-aos][data-aos][data-aos-easing=ease-out-quart],body[data-aos-easing=ease-out-quart] [data-aos]{transition-timing-function:cubic-bezier(.25,.46,.45,.94)}[data-aos][data-aos][data-aos-easing=ease-in-out-quart],body[data-aos-easing=ease-in-out-quart] [data-aos]{transition-timing-function:cubic-bezier(.455,.03,.515,.955)}@media screen{html:not(.no-js) [data-aos^=fade][data-aos^=fade]{opacity:0;transition-property:opacity,-webkit-transform;transition-property:opacity,transform;transition-property:opacity,transform,-webkit-transform}html:not(.no-js) [data-aos^=fade][data-aos^=fade].aos-animate{opacity:1;-webkit-transform:none;transform:none}html:not(.no-js) [data-aos=fade-up]{-webkit-transform:translate3d(0,100px,0);transform:translate3d(0,100px,0)}html:not(.no-js) [data-aos=fade-down]{-webkit-transform:translate3d(0,-100px,0);transform:translate3d(0,-100px,0)}html:not(.no-js) [data-aos=fade-right]{-webkit-transform:translate3d(-100px,0,0);transform:translate3d(-100px,0,0)}html:not(.no-js) [data-aos=fade-left]{-webkit-transform:translate3d(100px,0,0);transform:translate3d(100px,0,0)}html:not(.no-js) [data-aos=fade-up-right]{-webkit-transform:translate3d(-100px,100px,0);transform:translate3d(-100px,100px,0)}html:not(.no-js) [data-aos=fade-up-left]{-webkit-transform:translate3d(100px,100px,0);transform:translate3d(100px,100px,0)}html:not(.no-js) [data-aos=fade-down-right]{-webkit-transform:translate3d(-100px,-100px,0);transform:translate3d(-100px,-100px,0)}html:not(.no-js) [data-aos=fade-down-left]{-webkit-transform:translate3d(100px,-100px,0);transform:translate3d(100px,-100px,0)}html:not(.no-js) [data-aos^=zoom][data-aos^=zoom]{opacity:0;transition-property:opacity,-webkit-transform;transition-property:opacity,transform;transition-property:opacity,transform,-webkit-transform}html:not(.no-js) [data-aos^=zoom][data-aos^=zoom].aos-animate{opacity:1;-webkit-transform:translateZ(0) scale(1);transform:translateZ(0) scale(1)}html:not(.no-js) [data-aos=zoom-in]{-webkit-transform:scale(.6);transform:scale(.6)}html:not(.no-js) [data-aos=zoom-in-up]{-webkit-transform:translate3d(0,100px,0) scale(.6);transform:translate3d(0,100px,0) scale(.6)}html:not(.no-js) [data-aos=zoom-in-down]{-webkit-transform:translate3d(0,-100px,0) scale(.6);transform:translate3d(0,-100px,0) scale(.6)}html:not(.no-js) [data-aos=zoom-in-right]{-webkit-transform:translate3d(-100px,0,0) scale(.6);transform:translate3d(-100px,0,0) scale(.6)}html:not(.no-js) [data-aos=zoom-in-left]{-webkit-transform:translate3d(100px,0,0) scale(.6);transform:translate3d(100px,0,0) scale(.6)}html:not(.no-js) [data-aos=zoom-out]{-webkit-transform:scale(1.2);transform:scale(1.2)}html:not(.no-js) [data-aos=zoom-out-up]{-webkit-transform:translate3d(0,100px,0) scale(1.2);transform:translate3d(0,100px,0) scale(1.2)}html:not(.no-js) [data-aos=zoom-out-down]{-webkit-transform:translate3d(0,-100px,0) scale(1.2);transform:translate3d(0,-100px,0) scale(1.2)}html:not(.no-js) [data-aos=zoom-out-right]{-webkit-transform:translate3d(-100px,0,0) scale(1.2);transform:translate3d(-100px,0,0) scale(1.2)}html:not(.no-js) [data-aos=zoom-out-left]{-webkit-transform:translate3d(100px,0,0) scale(1.2);transform:translate3d(100px,0,0) scale(1.2)}html:not(.no-js) [data-aos^=slide][data-aos^=slide]{transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;visibility:hidden}html:not(.no-js) [data-aos^=slide][data-aos^=slide].aos-animate{visibility:visible;-webkit-transform:translateZ(0);transform:translateZ(0)}html:not(.no-js) [data-aos=slide-up]{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}html:not(.no-js) [data-aos=slide-down]{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}html:not(.no-js) [data-aos=slide-right]{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}html:not(.no-js) [data-aos=slide-left]{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}html:not(.no-js) [data-aos^=flip][data-aos^=flip]{-webkit-backface-visibility:hidden;backface-visibility:hidden;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}html:not(.no-js) [data-aos=flip-left]{-webkit-transform:perspective(2500px) rotateY(-100deg);transform:perspective(2500px) rotateY(-100deg)}html:not(.no-js) [data-aos=flip-left].aos-animate{-webkit-transform:perspective(2500px) rotateY(0);transform:perspective(2500px) rotateY(0)}html:not(.no-js) [data-aos=flip-right]{-webkit-transform:perspective(2500px) rotateY(100deg);transform:perspective(2500px) rotateY(100deg)}html:not(.no-js) [data-aos=flip-right].aos-animate{-webkit-transform:perspective(2500px) rotateY(0);transform:perspective(2500px) rotateY(0)}html:not(.no-js) [data-aos=flip-up]{-webkit-transform:perspective(2500px) rotateX(-100deg);transform:perspective(2500px) rotateX(-100deg)}html:not(.no-js) [data-aos=flip-up].aos-animate{-webkit-transform:perspective(2500px) rotateX(0);transform:perspective(2500px) rotateX(0)}html:not(.no-js) [data-aos=flip-down]{-webkit-transform:perspective(2500px) rotateX(100deg);transform:perspective(2500px) rotateX(100deg)}html:not(.no-js) [data-aos=flip-down].aos-animate{-webkit-transform:perspective(2500px) rotateX(0);transform:perspective(2500px) rotateX(0)}}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 902:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    font-family: \"Sometype Mono\", monospace;\n    font-weight: 400;\n}\n\n.custom-small-tech-icon {\n    font-size: 20px;\n    margin-right: 6px;\n}\n\nbody {\n    /* padding-top: 40px; */\n    /* background-color: #ffeca5 !important; */\n}\n\n.main {\n    background-color: white;\n}\n\nhtml body .disabled-project-box:hover {\n    cursor: not-allowed !important;\n    box-shadow: none !important;\n    background-color: #e2e2e2 !important;\n    color: black;\n}\n\n#main-content-box {\n    min-height: 100vh;\n}\n\n/* @media screen and (min-width: 400px) {\n    #main-content-box {\n        margin-top: 70px;\n    }\n} */\n\n#arrowText {\n    position: absolute;\n    top: 41px;\n    left: 221px;\n    font-weight: 700;\n    transform: rotate(-19deg);\n    text-align: center;\n}\n\n#arrowPng {\n    position: absolute;\n    width: 72px;\n    transform: rotate(169deg) scalex(-1);\n    top: 37px;\n    left: 143px;\n}\n\nhtml body .disabled-project-box {\n    background-color: #e2e2e2;\n    cursor: not-allowed;\n}\n\n.left-def-padding {\n    padding-left: 60px;\n}\n\n.def-padding {\n    padding-left: 60px;\n    padding-right: 60px;\n}\n\n@media only screen and (max-width: 1200px) {\n    .def-padding {\n        padding: 0;\n    }\n    .left-def-padding {\n        padding: 0;\n    }\n    #mainImage {\n        /* transform: translateY(-210px) translateX(96px) scale(0.45);\n        position: absolute; */\n        display: none;\n    }\n}\n\n/* .welcome-content {\n    padding-top: 110px;\n} */\n\n/* old color */\n/* #86abdb */\n\n.btn-custom-mine {\n    background-color: #86abdb !important;\n    color: white;\n}\n\n#mainImage {\n    /* margin-top: 85px; */\n    height: 550px;\n}\n\n/* .content-category-option:hover, .content-category-option.selected {\n    background-color: rgb(25,135,84) !important;\n    color: white;\n} */\n\n.custom-btn-flex-centered {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.btn-custom-mine:hover {\n    background-color: #3c7dd2 !important;\n    color: white;\n}\n\n#image-background-circle {\n    position: absolute;\n    top: 260px;\n    right: 290px;\n    background: #ffeca5;\n    border-radius: 50%;\n    width: 350px;\n    height: 350px;\n}\n\n.message-box {\n    line-height: 2;\n    font-weight: 700;\n}\n\n.contacts-box {\n    font-weight: 700;\n}\n\n#scroll-down-arrow {\n    animation: arrowAnimation 2s ease-in infinite normal forwards;\n}\n\n@keyframes arrowAnimation {\n    0% {\n        transform: translateY(0px);\n    }\n    50% {\n        transform: translateY(-20px);\n    }\n    100% {\n        transform: translateY(0px);\n    }\n}\n\n#projects-list {\n    min-height: 280px;\n}\n\n.experience-box h4 {\n    font-weight: 300;\n}\n\nspan.undeline {\n    text-decoration: underline;\n}\n\n.single-project-box {\n    /* fcf8e9 */\n    position: relative;\n    background-color: white;\n    border: 1px solid black;\n    /* border: 2px solid #ffeca5; */\n    /* height: 180px; */\n    padding: 10px;\n    /* border-radius: 10px; */\n    cursor: pointer;\n    margin-top: 15px !important;\n\n    transition: all 0.3s ease;\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n\n    border-radius: 5px;\n}\n\n.single-project-box.link-empty {\n    cursor: not-allowed;\n}\n\n.background-white-icon {\n    padding: 20px;\n    font-size: 2.5em;\n    /* border-right: 1px solid black; */\n}\n\n.background-white-icon-mobile {\n    display: none;\n}\n\np.project-description-item-title {\n    font-size: 1.3em;\n}\n\n.project-box-parent .single-project-box {\n    height: 100%;\n}\n\n.single-project-box p {\n    margin: 0;\n}\n\n.single-project-box.link-empty:hover {\n    /* background-color: ; */\n}\n\n.single-project-box:hover {\n    cursor: pointer;\n    background-color: #2d62a8;\n    color: white;\n}\n\n.proj-category.selected {\n    color: white;\n    background-color: rgb(25, 135, 84) !important;\n    cursor: default !important;\n}\n\n.proj-category {\n    transition: all 0.3s ease;\n    display: inline-block;\n}\n\n@media (max-width: 430px) {\n    .proj-category {\n        display: block;\n    }\n}\n\n.proj-category:hover {\n    background-color: rgba(25, 135, 84, 0.6);\n    color: white;\n    cursor: pointer;\n}\n\n.description-small {\n    font-size: small;\n    margin-top: 8px;\n}\n\n#menu {\n    position: fixed;\n    top: 20px;\n    left: 20px;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    /* align-items: center; */\n}\n\n#menu .menu-item p {\n    margin: 0 !important;\n}\n\n#menu .menu-item {\n    padding: 15px;\n    text-align: center;\n    margin: 3px;\n\n    transition: all 0.3s ease;\n}\n\n#menu .menu-item:hover {\n    background-color: rgba(25, 135, 84, 0.6);\n    color: white;\n    cursor: pointer;\n}\n\n#menu .menu-item.selected {\n    color: white;\n    background-color: rgb(25, 135, 84) !important;\n    cursor: default !important;\n}\n\n.pallete-top {\n    background: rgb(255, 255, 255);\n    background: linear-gradient(\n        180deg,\n        rgba(255, 255, 255, 1) 30%,\n        rgba(255, 236, 165, 1) 100%\n    );\n    height: 250px;\n}\n\n@media (min-width: 401px) {\n    #ArrowContainer {\n        transform: translateY(50px);\n    }\n}\n\n.pallete-bottom {\n    background: rgb(255, 255, 255);\n    background: linear-gradient(\n        0deg,\n        rgba(255, 255, 255, 1) 30%,\n        rgba(255, 236, 165, 1) 100%\n    );\n    height: 250px;\n}\n\n.def-padding-botttom {\n    padding-bottom: 260px;\n}\n\n#content-categories-box {\n    /* background-color: #ffeca5; */\n    /* margin-top: 250px; */\n    padding-bottom: 200px;\n}\n\n#works-content-box {\n    /* min-height: 890px !important; */\n}\n\n.content-category-option {\n    padding: 25px !important;\n    border: none !important;\n    text-decoration: none;\n    color: white;\n\n    font-weight: bold;\n\n    transition: all 0.3s ease;\n}\n\n.content-category-option:hover {\n    /* background-color:#86abdb; */\n    background-color: #86abdb;\n}\n\n.content-category-option.selected {\n    /* background-color: #ffeca5; */\n    background-color: #86abdb;\n}\n\n.content-category-legend > div {\n    /* background-color:#ffeca5; */\n    border-radius: 5px;\n    background-color: #2d62a8;\n    min-height: 210px;\n    color: white;\n    -webkit-box-shadow: 0px 40px 79px -47px rgba(0, 0, 0, 0.75);\n    -moz-box-shadow: 0px 40px 79px -47px rgba(0, 0, 0, 0.75);\n    box-shadow: 0px 40px 79px -47px rgba(0, 0, 0, 0.75);\n}\n\n.content-category-legend p {\n    font-size: 1.3em;\n}\n\n#github-icon {\n    font-size: 2em;\n}\n\n#footer-box:hover {\n    color: rgb(25, 135, 84);\n    cursor: pointer;\n}\n\n#footer-box {\n    transition: all 0.3s ease;\n}\n\n.td-none {\n    text-decoration: none;\n}\n\n.color-main-green {\n    color: rgb(25, 135, 84);\n}\n\n.color-main-blue {\n    color: #86abdb;\n}\n\n.color-main-blue:hover {\n    color: #3c7dd2;\n}\n\n/* link */\n.link__box .link {\n    width: 100%;\n}\n.link__box span {\n    padding-right: 4px;\n}\n\n/* software section */\n.icon-software-bar {\n    font-size: 3em;\n}\n\n/* Modal */\n.modal {\n    display: none;\n}\n\n.modal.is-open {\n    display: block;\n}\n\n.mobile-display-none {\n    display: initial;\n}\n\n.desktop-display-none {\n    display: none;\n}\n\n.single-proj-handle {\n    position: absolute;\n    width: 10px;\n    right: 15px;\n}\n\n@media only screen and (min-width: 575px) and (max-width: 990px) {\n    .single-project-box .row {\n        margin: 0;\n    }\n\n    /* .badges {\n        display: flex;\n        justify-content: center;\n    } */\n}\n\n@media only screen and (min-width: 431px) and (max-width: 575px) {\n    .project-description > p,\n    .project-description > span,\n    .project-description span {\n        text-align: center;\n    }\n\n    .single-project-box .row {\n        margin: 0;\n    }\n\n    .badges {\n        display: flex;\n        justify-content: center;\n    }\n}\n\n@media only screen and (max-width: 430px),\n    only screen and (max-height: 430px) and (orientation: landscape) {\n    #mainImage {\n        display: none;\n    }\n\n    .desktop-display-none {\n        display: initial;\n    }\n\n    /* .welcome-content {\n        padding-top: 0px !important;\n    } */\n    #technologies-box div h1 {\n        font-size: 8vw;\n    }\n\n    #technologies-box .subtext {\n        font-size: 16px;\n    }\n\n    #technologies-box-items-box a {\n        margin-bottom: 3px;\n    }\n\n    .mobile-display-none {\n        display: none;\n    }\n\n    #arrowText {\n        top: 91px;\n        left: 10px;\n        font-weight: 700;\n        transform: rotate(-19deg);\n        text-align: center;\n    }\n\n    #content-categories-box {\n        margin-top: 160px;\n    }\n\n    #arrowPng {\n        position: absolute;\n        width: 72px;\n        transform: rotate(169deg);\n        top: 50px;\n        left: 100px;\n    }\n    .background-white-icon {\n        display: none;\n    }\n\n    .background-white-icon-mobile {\n        display: inline-block;\n    }\n\n    p.project-description-item-title {\n        font-size: 16px;\n        font-weight: bold;\n    }\n\n    .single-project-box:hover {\n        cursor: default;\n        background-color: white;\n        color: black;\n    }\n\n    .action-box-title {\n        font-size: 1.6em;\n    }\n\n    .action-box-subtext {\n        font-size: 1em;\n    }\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 81:
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 379:
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 569:
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ 216:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ 565:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 795:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ 589:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./node_modules/aos/dist/aos.js
var aos = __webpack_require__(711);
var aos_default = /*#__PURE__*/__webpack_require__.n(aos);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/aos/dist/aos.css
var dist_aos = __webpack_require__(659);
;// CONCATENATED MODULE: ./node_modules/aos/dist/aos.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(dist_aos/* default */.Z, options);




       /* harmony default export */ const aos_dist_aos = (dist_aos/* default */.Z && dist_aos/* default.locals */.Z.locals ? dist_aos/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./style.css
var cjs_js_style = __webpack_require__(902);
;// CONCATENATED MODULE: ./style.css

      
      
      
      
      
      
      
      
      

var style_options = {};

style_options.styleTagTransform = (styleTagTransform_default());
style_options.setAttributes = (setAttributesWithoutAttributes_default());

      style_options.insert = insertBySelector_default().bind(null, "head");
    
style_options.domAPI = (styleDomAPI_default());
style_options.insertStyleElement = (insertStyleElement_default());

var style_update = injectStylesIntoStyleTag_default()(cjs_js_style/* default */.Z, style_options);




       /* harmony default export */ const style = (cjs_js_style/* default */.Z && cjs_js_style/* default.locals */.Z.locals ? cjs_js_style/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./CV.pdf
/* harmony default export */ const CV = (__webpack_require__.p + "CV.pdf");
;// CONCATENATED MODULE: ./main.jpg
/* harmony default export */ const main = (__webpack_require__.p + "main.jpg");
;// CONCATENATED MODULE: ./arrow.png
/* harmony default export */ const arrow = (__webpack_require__.p + "arrow.png");
;// CONCATENATED MODULE: ./src/assets/eDiploma.pdf
/* harmony default export */ const eDiploma = (__webpack_require__.p + "eDiploma.pdf");
;// CONCATENATED MODULE: ./src/assets/diplomaPNG.png
/* harmony default export */ const diplomaPNG = (__webpack_require__.p + "diplomaPNG.png");
;// CONCATENATED MODULE: ./src/projectsUI.js
function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    );
}

function getSingleBadgeHTML([badgeClasses, status]) {
    return `<span class="description-small ${badgeClasses}">${status}</span>`;
}
function ___singeProjectHandle(isOpen) {
    return `
        <div class="single-proj-handle desktop-display-none">${
            isOpen ? "-" : "+"
        }</div>
    `;
}
function ___singleProjectDescription(title, desc, badgeElems, icon) {
    return `
        <span class="description-small">${desc}</span>
        <div class="badges">
            ${badgeElems.map((el) => getSingleBadgeHTML(el)).join(" ")}
        </div>`;
}
function __singleProjHTMl(props) {
    const { title, icon, desc, type, status, id, link, isOpen } = props;
    const badgeElems = [];
    const boxClasses = ["single-project-box"];

    if (status.includes("deployed")) {
        badgeElems.push(["badge bg-success", ""]);
    }

    if (status.includes("in process")) {
        badgeElems.push(["badge bg-warning", "in process"]);
    }

    if (props.private) {
        badgeElems.push(["badge bg-secondary", "private"]);
    }

    if (status.includes("on pause")) {
        badgeElems.push(["badge bg-secondary", "on pause"]);
    }

    if (status.includes("on pause") || props.private === true) {
        boxClasses.push("disabled-project-box");
    }

    if (!link) {
        boxClasses.push("link-empty");
    }

    const isMobileVal = isMobile();

    return `<div class="project-box-parent col-lg-6 col-md-12 col-sm-12 my-2">
                <div class="${boxClasses.join(
                    " "
                )}" data-title="${title}" data-id="${id}">
                    <div class="row w-100">
                        <div class="col-xs-12 col-sm-3 d-flex justify-content-center align-items-center">
                            <i class="background-white-icon bi bi-${icon}"></i>
                        </div>
                        <div class="project-description col-xs-12 col-sm-9 d-flex flex-column justify-content-center">
                            <p class="project-description-item-title">
                                <i class="background-white-icon-mobile bi bi-${icon}"></i>
                                ${title}
                            </p>
                            ${
                                isMobileVal === false
                                    ? ___singleProjectDescription(
                                          title,
                                          desc,
                                          badgeElems,
                                          icon
                                      )
                                    : ""
                            }
                            ${
                                isOpen === true && isMobileVal === true
                                    ? ___singleProjectDescription(
                                          title,
                                          desc,
                                          badgeElems,
                                          icon
                                      )
                                    : ""
                            }
                        </div>
                    ${___singeProjectHandle(isOpen)}
            </div>`;
}
function __popWork(proj) {
    document
        .getElementById("projects-list")
        .insertAdjacentHTML("beforeend", __singleProjHTMl(proj));
}

function addProjEventListeners(projects, selectedCategory) {
    document.querySelectorAll(".single-project-box").forEach((el) => {
        // determine if mobile - expand
        // if desktop - visit link
        el.addEventListener("click", (e) =>
            onProjectClickHandler(e, projects, selectedCategory)
        );
    });
}

function onProjectClickHandler(e, projects, selectedCategory) {
    const projID = parseInt(e.currentTarget.getAttribute("data-id"));
    const proj = projects.find((el) => el.id === projID);
    const { link, private: _private, status } = proj;

    console.log("Clicked!!!!", projects[1]);

    if (isMobile()) {
        projects = projects.map((projData) => {
            if (proj.id === projData.id) {
                projData.isOpen = !projData.isOpen;
            }
            return projData;
        });
        renderProjects(projects, selectedCategory);
    } else {
        const redirect = (l) => window.open(l, "_blank");
        link && !_private && status !== "on pause" && redirect(link);
    }
}

function renderProjects(projects, selectedCategory) {
    // remove event listeners
    document.querySelectorAll(".single-project-box").forEach((el) => {
        // determine if mobile - expand
        // if desktop - visit link
        el.removeEventListener("click", onProjectClickHandler);
    });

    document
        .querySelectorAll(".project-box-parent")
        .forEach((el) => el.remove());

    const projectsToDisplay = selectedCategory
        ? projects.filter(({ category }) => selectedCategory == category)
        : [...projects];

    if (projectsToDisplay.length > 0) {
        projectsToDisplay.forEach((proj) => __popWork(proj));
    }

    addProjEventListeners(projects, selectedCategory);
}

;// CONCATENATED MODULE: ./src/index.js













function src_isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    );
}

// assets setup
document.getElementById("resumeDownloadBtn").href = CV;
document.getElementById("mainImage").src = main;
document.getElementById("arrowPng").src = arrow;
document.getElementById("diplomaImg").src = diplomaPNG;
document.getElementById("download-diplomaPDF").href = eDiploma;

// animations
aos_default().init({ delay: 100 });

let DEBUG_ON = true;
const debug = (msg, ...args) => {
    DEBUG_ON && console.log(msg);
    DEBUG_ON && args && args.forEach((arg) => console.log(arg));
};

function generateRandNum(min, max) {
    return Math.floor(Math.random() * max) + min;
}

const CATEGORIES = {
    SOFTWARE: "SOFTWARE",
    CODE: "CODE",
    MOBILE_APPS: "MOBILE_APPS",
};

let selectedCategory = CATEGORIES.SOFTWARE;

let projects = [
    {
        category: CATEGORIES.SOFTWARE,
        isOpen: false,
        id: null,
        title: "'HEAT' ltd.",
        icon: "window-sidebar",
        desc: "Air Ticket Selling Company landing page.",
        link: "http://seaman-air-tickets.aviapromo.com.ua/",
        private: false,
        status: "",
    },
    {
        category: CATEGORIES.SOFTWARE,
        isOpen: true,
        id: null,
        title: "'HEAT' ltd.",
        icon: "window-sidebar",
        desc: "Air Ticket Selling Company Website.",
        status: "",
        link: "http://www.aviapromo.com.ua/",
        private: false,
    },
    {
        category: CATEGORIES.SOFTWARE,
        isOpen: false,
        id: null,
        title: "PNR Converter",
        icon: "window-sidebar",
        desc: "Web App Converter (PNR to Human Readable Text).",
        link: "https://nickparov.github.io/PRN_heat/",
        private: false,
        status: "",
    },
    {
        category: CATEGORIES.SOFTWARE,
        isOpen: false,
        id: null,
        title: "Hotel",
        icon: "window-sidebar",
        desc: "Web App for Hotel with custom CMS",
        link: "https://github.com/nickparov/Hotel-Website-PHP",
        private: false,
        status: "",
    },
    {
        category: CATEGORIES.SOFTWARE,
        isOpen: false,
        id: null,
        title: "PHD Evaluation",
        icon: "window-sidebar",
        desc: "Web App for PHD Evaluation Processes for University staff.",
        link: "https://phd-eval.engr.uic.edu/dgs?page=ControlPanel",
        private: false,
        status: "",
    },
    {
        category: CATEGORIES.SOFTWARE,
        isOpen: false,
        id: null,
        title: "'Pathways'",
        icon: "phone",
        desc: "Mobile app built using ReactNative. LinkedIn like app.",
        link: "https://github.com/nickparov/pathways-project-mobile",
        private: false,
        status: "",
    },
    {
        category: CATEGORIES.SOFTWARE,
        isOpen: false,
        id: null,
        title: "Knights Game",
        icon: "window-sidebar",
        desc: "Web Online Card Based Game",
        link: "https://knight-app-backend-3.herokuapp.com/",
        private: false,
        status: "on pause",
    },
    {
        category: CATEGORIES.SOFTWARE,
        isOpen: false,
        id: null,
        title: "Town Data Visualization",
        icon: "window-sidebar",
        desc: "Rich Graph Respresentation and Parsing script of Public Chicago Dataset",
        link: "https://nickparov.github.io/cs424-doc-website/project2.html",
        private: true,
        status: "",
    },
    {
        category: CATEGORIES.SOFTWARE,
        isOpen: false,
        id: null,
        title: "DB Export",
        icon: "code-slash",
        desc: "Laravel DB Excel export module",
        link: null,
        private: true,
        status: "",
    },
    {
        category: CATEGORIES.SOFTWARE,
        isOpen: false,
        id: null,
        title: "Custom JS Framework",
        icon: "code-slash",
        desc: "Built for Admin Panel Side of PHDEval Web App",
        link: null,
        private: true,
        status: "",
    },
    {
        category: CATEGORIES.SOFTWARE,
        isOpen: false,
        id: null,
        title: "Matrices Visualization",
        icon: "window-sidebar",
        desc: "Visualizing tool for matrix transformation.",
        link: "https://volodymyrvakhniuk.github.io/Linear-Transformation/",
        private: false,
        status: "",
    },
    {
        category: CATEGORIES.SOFTWARE,
        isOpen: false,
        id: null,
        title: "Building Game",
        icon: "window-sidebar",
        desc: "Web Based Building Park Game.",
        link: null,
        private: false,
        status: "on pause",
    },
];

projects = projects.map((el, index) => {
    return { ...el, id: index };
});

const onLoad = {
    populateWorks: () => {
        // render all projects elements
        renderProjects(projects, selectedCategory);
    },
    projCategoryHandlers: () => {
        function txtToCatID(category) {
            if (category.includes("ALL")) return "ALL";
            // which cat?
            let categoryID = category.toUpperCase().substr(1, category.length);
            categoryID =
                categoryID.split(" ").length > 1
                    ? categoryID.split(" ").join("_")
                    : categoryID;

            return categoryID;
        }

        document.querySelectorAll("span.proj-category").forEach((_node) => {
            _node.addEventListener("click", (e) => {
                e.preventDefault();

                if (!e.target.tagName.includes("SPAN")) return;

                let catID = txtToCatID(e.target.innerText);
                // change selectedCat
                selectedCategory = CATEGORIES[catID];
                // update works
                onLoad.populateWorks();
                onLoad.singleProjModalHandlers();
                // remove the other selected item
                document
                    .querySelector("span.proj-category.selected")
                    .classList.remove("selected");
                // add to curr node
                _node.classList.add("selected");
            });
        });
    },
    footerLinkClickHandler: () => {
        // when clicked
        // go to my github account in new tab
    },
    containerResponsivenessHandler: () => {
        // when < 1200px
        // remove class p-5
        // add class p-1
    },
    ignore_commonHandlers: () => {
        // Arrow Handler
        const doContentBoxElem = document.getElementById(
            "content-categories-box"
        );
        document
            .getElementById("ArrowContainer")
            .addEventListener("click", (e) => {
                e.preventDefault();

                window.scrollTo({
                    top: doContentBoxElem.offsetTop - 50,
                    behavior: "smooth",
                });
            });
    },
};

// ONLOAD Handler
document.addEventListener("DOMContentLoaded", function () {
    debug("Setup start...");
    Object.keys(onLoad).forEach((_key) => {
        if (_key.includes("ignore")) return;
        // exec func
        onLoad[_key]();
    });
    debug("Setup Done...");
});

})();

/******/ })()
;