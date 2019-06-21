!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueContextMenu=e():t.VueContextMenu=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p=".",e(e.s=3)}([function(t,e,n){n(8);var o=n(6)(n(2),n(7),null,null);t.exports=o.exports},function(t,e,n){"use strict";t.exports=function(t){function e(e){e.preventDefault(),"function"==typeof t&&t(e)}function n(t){27===t.keyCode&&e(t)}var o=!1;return{get isListening(){return o},start:function(t){window.addEventListener("click",e,!0),window.addEventListener("keyup",n,!0),o=!0,"function"==typeof t&&t()},stop:function(t){window.removeEventListener("click",e,!0),window.removeEventListener("keyup",n,!0),o=!1,"function"==typeof t&&t()}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default={name:"context-menu",props:{id:{type:String,default:"default-ctx"}},data:function(){var t=this;return{locals:{},align:"left",ctxTop:0,ctxLeft:0,ctxVisible:!1,bodyClickListener:(0,r.default)(function(e){if(!t.ctxVisible||t.$el.contains(e.target))t.ctxVisible=!1,t.$emit("ctx-close",t.locals);else{if(1!==e.which)return e.preventDefault(),e.stopPropagation(),!1;t.ctxVisible=!1,t.$emit("ctx-cancel",t.locals),e.stopPropagation()}})}},methods:{setPositionFromEvent:function(t){var e=this;t=t||window.event,requestAnimationFrame(function(){var n={w:window.innerWidth,h:window.innerHeight},o={l:window.scrollX,t:window.scrollY},r={w:e.$refs.ul.scrollWidth,h:e.$refs.ul.scrollHeight},i={x:t.clientX+o.l,y:t.clientY+o.t};t.clientX+r.w>n.w&&(i.x-=r.w),t.clientY+r.h>n.h&&(i.y-=r.h),e.ctxLeft=i.x,e.ctxTop=i.y})},open:function(t,e){return this.ctxVisible&&(this.ctxVisible=!1),this.ctxVisible=!0,this.$emit("ctx-open",this.locals=e||{}),this.setPositionFromEvent(t),this.$el.setAttribute("tab-index",-1),this.bodyClickListener.start(),this}},watch:{ctxVisible:function(t,e){!0===e&&!1===t&&this.bodyClickListener.stop(function(t){})}},computed:{ctxStyle:function(){return{display:this.ctxVisible?"block":"none",top:(this.ctxTop||0)+"px",left:(this.ctxLeft||0)+"px"}}}}},function(t,e,n){"use strict";var o=n(0);o.install=function(t){return t.component("context-menu",o)},window.VueContextMenu=o,t.exports=t.exports.default=o},function(t,e,n){e=t.exports=n(5)(!1),e.push([t.i,'.ctx{position:relative}.ctx-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:160px;padding:5px 0;margin:2px 0 0;font-size:.9rem;color:#373a3c;text-align:left;list-style:none;background-color:#fff;-webkit-background-clip:padding-box;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem;-moz-box-shadow:0 0 5px #ccc;-webkit-box-shadow:0 0 5px #ccc;box-shadow:0 0 5px #ccc}.ctx-divider{height:1px;margin:.5rem 0;overflow:hidden;background-color:#e5e5e5}.ctx-item{display:block;padding:3px 20px;clear:both;font-weight:400;line-height:1.5;color:#373a3c;text-align:inherit;white-space:nowrap;background:none;border:0;cursor:default}.ctx-item:focus,.ctx-item:hover{color:#2b2d2f;text-decoration:none;background-color:#f5f5f5;cursor:normal}.ctx-item.active,.ctx-item.active:focus,.ctx-item.active:hover{color:#fff;text-decoration:none;background-color:#0275d8;outline:0}.ctx-item.disabled,.ctx-item.disabled:focus,.ctx-item.disabled:hover{color:#818a91}.ctx-item.disabled:focus,.ctx-item.disabled:hover{text-decoration:none;cursor:not-allowed;background-color:transparent;background-image:none;filter:"progid:DXImageTransform.Microsoft.gradient(enabled = false)"}.open>.ctx-menu{display:block}.open>a{outline:0}.ctx-menu-right{right:0;left:auto}.ctx-menu-left{right:auto;left:0}.ctx-header{display:block;padding:3px 20px;font-size:.9rem;line-height:1.5;color:#818a91;white-space:nowrap}.ctx-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:990}.pull-right>.ctx-menu{right:0;left:auto}.ctx-menu-container{position:fixed;padding:0;border:1px solid #bbb;background-color:#f5f5f5;z-index:99999;box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15)}',""])},function(t,e){function n(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=o(r);return[n].concat(r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"})).concat([i]).join("\n")}return[n].join("\n")}function o(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o=n(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var c=t[r];"number"==typeof c[0]&&o[c[0]]||(n&&!c[2]?c[2]=n:n&&(c[2]="("+c[2]+") and ("+n+")"),e.push(c))}},e}},function(t,e){t.exports=function(t,e,n,o){var r,i=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(r=t,i=t.default);var a="function"==typeof i?i.options:i;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),n&&(a._scopeId=n),o){var s=Object.create(a.computed||null);Object.keys(o).forEach(function(t){var e=o[t];s[t]=function(){return e}}),a.computed=s}return{esModule:r,exports:i,options:a}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"contextMenu",staticClass:"ctx-menu-container",style:t.ctxStyle,attrs:{id:t.id},on:{click:function(t){t.stopPropagation()},contextmenu:function(t){t.stopPropagation()}}},[n("div",{staticClass:"ctx open",staticStyle:{"background-color":"transparent"}},[n("ul",{ref:"ul",staticClass:"ctx-menu",class:{"ctx-menu-right":"right"===t.align,"ctx-menu-left":"left"===t.align},attrs:{role:"menu"}},[t._t("default")],2)])])},staticRenderFns:[]}},function(t,e,n){var o=n(4);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);n(9)("614b7788",o,!0)},function(t,e,n){function o(t){for(var e=0;e<t.length;e++){var n=t[e],o=l[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(i(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{for(var c=[],r=0;r<n.parts.length;r++)c.push(i(n.parts[r]));l[n.id]={id:n.id,refs:1,parts:c}}}}function r(){var t=document.createElement("style");return t.type="text/css",d.appendChild(t),t}function i(t){var e,n,o=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(o){if(x)return h;o.parentNode.removeChild(o)}if(m){var i=p++;o=f||(f=r()),e=c.bind(null,o,i,!1),n=c.bind(null,o,i,!0)}else o=r(),e=a.bind(null,o),n=function(){o.parentNode.removeChild(o)};return e(t),function(o){if(o){if(o.css===t.css&&o.media===t.media&&o.sourceMap===t.sourceMap)return;e(t=o)}else n()}}function c(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=b(e,r);else{var i=document.createTextNode(r),c=t.childNodes;c[e]&&t.removeChild(c[e]),c.length?t.insertBefore(i,c[e]):t.appendChild(i)}}function a(t,e){var n=e.css,o=e.media,r=e.sourceMap;if(o&&t.setAttribute("media",o),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var s="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!s)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=n(10),l={},d=s&&(document.head||document.getElementsByTagName("head")[0]),f=null,p=0,x=!1,h=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){x=n;var r=u(t,e);return o(r),function(e){for(var n=[],i=0;i<r.length;i++){var c=r[i],a=l[c.id];a.refs--,n.push(a)}e?(r=u(t,e),o(r)):r=[];for(var i=0;i<n.length;i++){var a=n[i];if(0===a.refs){for(var s=0;s<a.parts.length;s++)a.parts[s]();delete l[a.id]}}}};var b=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var n=[],o={},r=0;r<e.length;r++){var i=e[r],c=i[0],a=i[1],s=i[2],u=i[3],l={id:t+":"+r,css:a,media:s,sourceMap:u};o[c]?o[c].parts.push(l):n.push(o[c]={id:c,parts:[l]})}return n}}])});