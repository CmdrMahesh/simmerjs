(function(){function T(a,b,c){switch(c.length){case 0:return a.call(b);case 1:return a.call(b,c[0]);case 2:return a.call(b,c[0],c[1]);case 3:return a.call(b,c[0],c[1],c[2])}return a.apply(b,c)}function U(a,b){var c;if(c=!(!a||!a.length)){a:if(b!==b)b:{b=V;c=a.length;for(var d=-1;++d<c;)if(b(a[d],d,a)){a=d;break b}a=-1}else{c=-1;for(d=a.length;++c<d;)if(a[c]===b){a=c;break a}a=-1}c=-1<a}return c}function V(a){return a!==a}function W(a,b){return a.has(b)}function X(a){var b=!1;if(null!=a&&"function"!=
typeof a.toString)try{b=!!(a+"")}catch(c){}return b}function u(a){var b=-1,c=a?a.length:0;for(this.clear();++b<c;){var d=a[b];this.set(d[0],d[1])}}function v(a){var b=-1,c=a?a.length:0;for(this.clear();++b<c;){var d=a[b];this.set(d[0],d[1])}}function w(a){var b=-1,c=a?a.length:0;for(this.clear();++b<c;){var d=a[b];this.set(d[0],d[1])}}function A(a){var b=-1,c=a?a.length:0;for(this.__data__=new w;++b<c;)this.add(a[b])}function B(a,b){for(var c=a.length;c--;){var d=a[c][0];if(d===b||d!==d&&b!==b)return c}return-1}
function K(a,b,c,d,h){var n=-1,l=a.length;c||(c=Z);for(h||(h=[]);++n<l;){var r=a[n];if(0<b&&c(r))if(1<b)K(r,b-1,c,d,h);else for(var f=h,p=-1,q=r.length,t=f.length;++p<q;)f[t+p]=r[p];else d||(h[h.length]=r)}return h}function C(a,b){a=a.__data__;var c="undefined"===typeof b?"undefined":x(b);return("string"==c||"number"==c||"symbol"==c||"boolean"==c?"__proto__"!==b:null===b)?a["string"==typeof b?"string":"hash"]:a.map}function L(a,b){a=null==a?void 0:a[b];b=!M(a)||N&&N in a?!1:(O(a)||X(a)?aa:ba).test(ca(a));
return b?a:void 0}function Z(a){var b;(b=da(a))||(b=F(a)&&D.call(a,"callee")&&(!ea.call(a,"callee")||"[object Arguments]"==P.call(a)));return b||!!(Q&&a&&a[Q])}function ca(a){if(null!=a){try{return R.call(a)}catch(b){}return a+""}return""}function F(a){var b;if(b=!!a&&"object"==("undefined"===typeof a?"undefined":x(a))){if(b=null!=a)b=a.length,b="number"==typeof b&&-1<b&&0==b%1&&9007199254740991>=b;b=b&&!O(a)}return b}function O(a){a=M(a)?P.call(a):"";return"[object Function]"==a||"[object GeneratorFunction]"==
a}function M(a){var b="undefined"===typeof a?"undefined":x(a);return!!a&&("object"==b||"function"==b)}function G(a){return{el:a,getClass:function(){var a=this.el.getAttribute("class");return a?a:""},getClasses:function(){var a=this.el.getAttribute("class");return a&&"string"===typeof a&&(a=a.replace(/^\s\s*/,"").replace(/\s\s*$/,""),""!==a)?a.split(" "):[]},prevAll:function(){return this.dir("previousSibling")},nextAll:function(){return this.dir("nextSibling")},parent:function(){var a=this.el.parentNode;
return a&&11!==a.nodeType?G(a):null},dir:function(a){for(var b=[],d=this.el[a];d&&9!==d.nodeType;)1===d.nodeType&&b.push(G(d)),d=d[a];return b}}}var l="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},x="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"===typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},ba=/^\[object .+?Constructor\]$/,l="object"==
x(l)&&l&&l.Object===Object&&l,H="object"==("undefined"===typeof self?"undefined":x(self))&&self&&self.Object===Object&&self,l=l||H||Function("return this")(),H=Array.prototype,E=Function.prototype,I=Object.prototype,J=l["__core-js_shared__"],N=function(){var a=/[^.]+$/.exec(J&&J.keys&&J.keys.IE_PROTO||"");return a?"Symbol(src)_1."+a:""}(),R=E.toString,D=I.hasOwnProperty,P=I.toString,aa=RegExp("^"+R.call(D).replace(/[\\^$.*+?()[\]{}|]/g,"\\$\x26").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
"$1.*?")+"$"),E=l.Symbol,ea=I.propertyIsEnumerable,fa=H.splice,Q=E?E.isConcatSpreadable:void 0,S=Math.max,ga=L(l,"Map"),y=L(Object,"create");u.prototype.clear=function(){this.__data__=y?y(null):{}};u.prototype["delete"]=function(a){return this.has(a)&&delete this.__data__[a]};u.prototype.get=function(a){var b=this.__data__;return y?(a=b[a],"__lodash_hash_undefined__"===a?void 0:a):D.call(b,a)?b[a]:void 0};u.prototype.has=function(a){var b=this.__data__;return y?void 0!==b[a]:D.call(b,a)};u.prototype.set=
function(a,b){this.__data__[a]=y&&void 0===b?"__lodash_hash_undefined__":b;return this};v.prototype.clear=function(){this.__data__=[]};v.prototype["delete"]=function(a){var b=this.__data__;a=B(b,a);if(0>a)return!1;a==b.length-1?b.pop():fa.call(b,a,1);return!0};v.prototype.get=function(a){var b=this.__data__;a=B(b,a);return 0>a?void 0:b[a][1]};v.prototype.has=function(a){return-1<B(this.__data__,a)};v.prototype.set=function(a,b){var c=this.__data__,d=B(c,a);0>d?c.push([a,b]):c[d][1]=b;return this};
w.prototype.clear=function(){this.__data__={hash:new u,map:new (ga||v),string:new u}};w.prototype["delete"]=function(a){return C(this,a)["delete"](a)};w.prototype.get=function(a){return C(this,a).get(a)};w.prototype.has=function(a){return C(this,a).has(a)};w.prototype.set=function(a,b){C(this,a).set(a,b);return this};A.prototype.add=A.prototype.push=function(a){this.__data__.set(a,"__lodash_hash_undefined__");return this};A.prototype.has=function(a){return this.__data__.has(a)};var ha=function(a,
b){b=S(void 0===b?a.length-1:b,0);return function(){for(var c=arguments,d=-1,h=S(c.length-b,0),n=Array(h);++d<h;)n[d]=c[b+d];d=-1;for(h=Array(b+1);++d<b;)h[d]=c[d];h[b]=n;return T(a,this,h)}}(function(a,b){if(F(a)){b=K(b,1,F,!0);var c=-1,d=U,h=!0,n=a.length,l=[],r=b.length;if(n)b:for(200<=b.length&&(d=W,h=!1,b=new A(b));++c<n;){var f=a[c],p=f,f=0!==f?f:0;if(h&&p===p){for(var q=r;q--;)if(b[q]===p)continue b;l.push(f)}else d(b,p,void 0)||l.push(f)}a=l}else a=[];return a}),da=Array.isArray;(function(a,
b,c){function d(a,b){if(!0===f.errorHandling)throw a;"function"===typeof f.errorHandling&&f.errorHandling(a,b)}function h(a,b){b=b||a.stack.length;var k=[],m=0,e;for(e=b-1;0<=e;--e)0===a.stack[e].length?e!==b-1-m?k.push("*"):m+=1:k.push(a.stack[e].join(""));return k.join(" \x3e ")}function n(a,b,g){var k=!1,e;for(e=1;e<=b.stack.length&&!k;e+=1){k=h(b,e).trim();if(!k||!k.length||g&&k.length>g)return!1;k=p.query(k);if(k=1===k.length&&(a.el!==c?k[0]===a.el:k[0]===a))b.verificationDepth=e}return k}function l(){var a=
q.getMethods();this.next=function(b,e,c){return this.finished()?!1:a.shift()(b,e,c)};this.finished=function(){return 0===a.length}}var r=a.Simmer,f={queryEngine:null,specificityThreshold:100,depth:3,errorHandling:function(a){console.log({e:a})},selectorMaxLength:512},p=new b,q={methods:[],getMethods:function(){return this.methods.slice(0)},addMethod:function(a,b){b=b&&"object"===("undefined"===typeof b?"undefined":x(b))?b:this;this.methods.push(a.bind(b))},validationHelpers:{tagName:function(a){return"string"===
typeof a&&null!==a.match(/^[a-zA-Z0-9]+$/gi)?a:!1},attr:function(a){return"string"===typeof a&&null!==a.match(/^[0-9a-zA-Z][a-zA-Z_\-\:0-9\.]*$/gi)?a:!1},className:function(a){return"string"===typeof a&&null!==a.match(/^\.?[a-zA-Z_\-\:0-9]*$/gi)?a:!1}}};var t=a.Simmer=function(a){if(!a)return d.call(t,Error("Simmer: No element was specified for parsing."),a),!1;var b=new l,g=G(a),m=f.depth,e=[],z;for(z=0;z<m&&null!==g;z+=1)e[z]=g,g=e[z].parent();g={stack:[],specificity:0};for(m=0;m<e.length;m+=1)g.stack[m]=
[];for(;!b.finished()&&!g.verified;)try{g=b.next(e,g,f),g.specificity>=f.specificityThreshold&&!g.verified&&(g.verified=n(a,g,f.selectorMaxLength))}catch(ia){d.call(t,ia,a)}if(g.verified===c||g.specificity<f.specificityThreshold)g.verified=n(a,g,f.selectorMaxLength);return g.verified?g.verificationDepth?h(g,g.verificationDepth):h(g):!1};p.attachQueryEngine(f.queryEngine,d,t);t.VERSION="0.3.0";t.noConflict=function(){a.Simmer=r;return this};t.configuration=function(a){var b,c;if(a&&a instanceof Object)for(b in a)a.hasOwnProperty(b)&&
f.hasOwnProperty(b)&&(f[b]=a[b],"queryEngine"===b&&(c=!0));c&&p.attachQueryEngine(f.queryEngine,d,t);return f};q.addMethod(function(a,b,c){var m;for(m=0;m<a.length&&!b.verified;m+=1){var d=a[m];d=this.validationHelpers.attr(d.el.getAttribute("id"));var k;if(k=d)k=1===(p.query('[id\x3d"'+d+'"]')||[]).length;k&&(b.stack[m].push("[id\x3d'"+d+"']"),b.specificity+=100,0===m?n(a[0],b,c.selectorMaxLength)?b.verified=!0:(b.stack[m].pop(),b.specificity-=100):b.specificity>=c.specificityThreshold&&n(a[0],b,
c.selectorMaxLength)&&(b.verified=!0))}return b});q.addMethod(function(a,b){var c;for(c=0;c<a.length;c+=1){var d=a[c];if(d=this.validationHelpers.tagName(d.el.nodeName))b.stack[c].splice(0,0,d),b.specificity+=10}return b});q.addMethod(function(a,b,c){var d=a[0];switch(d.el.nodeName){case "A":if(d=d.el.getAttribute("href"))b.stack[0].push('A[href\x3d"'+d+'"]'),b.specificity+=10;break;case "IMG":if(d=d.el.getAttribute("src"))b.stack[0].push('IMG[src\x3d"'+d+'"]'),b.specificity+=10;break;default:return b}n(a[0],
b,c.selectorMaxLength)?b.verified=!0:b.stack[0].pop();return b});q.addMethod(function(a,b){var c,d;for(c=0;c<a.length;c+=1){var e=a[c];if((e=e.el.getAttribute("class"))&&"string"===typeof e&&(e=e.replace(/^\s\s*/,"").replace(/\s\s*$/,""),d=e.match(/([^\s]+)/gi))){0<d.length&&(d[0]="."+d[0]);10<d.length&&d.splice(10,d.length-10);for(e=0;e<d.length;e+=1)this.validationHelpers.className(d[e])||d.splice(e,1);b.stack[c].push(d.join("."));b.specificity+=10*d.length}}return b});q.addMethod(function(a,b,
d){for(var c=0,e,g;c<a.length&&!b.verified;)e=a[c].prevAll(),g=e.length+1,e=e.concat(a[c].nextAll()),0!==e.length&&(e=this.analyzeElementSiblings(a[c],e),e||(b.stack[c].push(":nth-child("+g+")"),b.verified=n(a[0],b,d.selectorMaxLength))),c+=1;return b},{analyzeElementSiblings:function(a,b){var c=a.el.nodeName,d=a.getClasses(),e=!0,f=d[0]instanceof Array&&0<d[0].length,h;for(a=0;a<b.length&&(f||e);a+=1)f=b[a],(h=f.el.nodeName)&&h===c&&(e=!1),f=0<ha(d,f.getClasses()).length;return f||e}})})(window,
function(a){return function(){this.attachQueryEngine=function(b,c,d){var h=a.document;this.queryEngine=b&&"function"===typeof b?b:function(a){try{return h.querySelectorAll(a)}catch(Y){c.call(d,Y,null)}}};this.query=function(a){return"string"!==typeof a||"function"!==typeof this.queryEngine?[]:this.queryEngine(a)}}}(window))})();
