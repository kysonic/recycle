!function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){function r(t,e){var n,r,i,a;return i=e.split("."),r=i[0],a=i[1],n=t.components[r]||AFRAME.components[r],n?a&&!n.schema[a]?null:a?n.schema[a].type:n.schema.type:null}function i(t){t.x=THREE.Math.degToRad(t.x),t.y=THREE.Math.degToRad(t.y),t.z=THREE.Math.degToRad(t.z)}function a(t,e,n){var r;for(r=0;r<e.length;r++)t.addEventListener(e[r],n)}function o(t,e,n){var r;for(r=0;r<e.length;r++)t.removeEventListener(e[r],n)}function s(t,e){var n,r,i;for(r=f(e),i=t,n=0;n<r.length;n++)i=i[r[n]];return i}function u(t,e,n,r){var i,a,o,s;for(a=f(e),s=t,i=0;i<a.length-1;i++)s=s[a[i]];return o=a[a.length-1],r===v?void("r"in s[o]?(s[o].r=n.r,s[o].g=n.g,s[o].b=n.b):(s[o].x=n.r,s[o].y=n.g,s[o].z=n.b)):void(s[o]=n)}function f(t){return t in y?y[t]:(y[t]=t.split("."),y[t])}function l(t){return t.isRawProperty||t.property.startsWith(E)||t.property.startsWith(w)}var c=n(1);if(AFRAME.anime=c,"undefined"==typeof AFRAME)throw new Error("Component attempted to register before AFRAME was available.");var p=new THREE.Color,d=new THREE.Color,h=AFRAME.utils,m=h.entity.getComponentProperty,g=h.entity.setComponentProperty,y={},v="color",b="position",A="rotation",x="scale",E="components",w="object3D";AFRAME.registerComponent("anime",{schema:{autoplay:{default:!0},delay:{default:0},dir:{default:""},dur:{default:1e3},easing:{default:"easeInQuad"},elasticity:{default:400},enabled:{default:!0},from:{default:""},loop:{default:0,parse:function(t){return t===!0||"true"===t||t!==!1&&"false"!==t&&parseInt(t,10)}},property:{default:""},startEvents:{type:"array"},pauseEvents:{type:"array"},resumeEvents:{type:"array"},to:{default:""},type:{default:""},isRawProperty:{default:!1}},multiple:!0,init:function(){var t=this;this.eventDetail={name:this.attrName},this.time=0,this.animation=null,this.animationIsPlaying=!1,this.onStartEvent=this.onStartEvent.bind(this),this.beginAnimation=this.beginAnimation.bind(this),this.pauseAnimation=this.pauseAnimation.bind(this),this.resumeAnimation=this.resumeAnimation.bind(this),this.fromColor={},this.toColor={},this.targets={},this.targetsArray=[],this.updateConfigForDefault=this.updateConfigForDefault.bind(this),this.updateConfigForRawColor=this.updateConfigForRawColor.bind(this),this.config={complete:function(){t.animationIsPlaying=!1,t.el.emit("animationcomplete",t.eventDetail),t.id&&t.el.emit("animationcomplete__"+t.id,t.eventDetail,!1)}}},update:function(t){var e=this.config,n=this.data;return this.animationIsPlaying=!1,t.enabled&&!this.data.enabled?void(this.animationIsPlaying=!1):void(n.property&&(e.autoplay=!1,e.direction=n.dir,e.duration=n.dur,e.easing=n.easing,e.elasticity=n.elasticity,e.loop=n.loop,this.createAndStartAnimation()))},tick:function(t,e){this.animationIsPlaying&&(this.time+=e,this.animation.tick(this.time))},remove:function(){this.pauseAnimation(),this.removeEventListeners()},pause:function(){this.paused=!0,this.pausedWasPlaying=this.animationIsPlaying,this.pauseAnimation(),this.removeEventListeners()},play:function(){this.paused&&(this.paused=!1,this.addEventListeners(),this.pausedWasPlaying&&(this.resumeAnimation(),this.pausedWasPlaying=!1))},createAndStartAnimation:function(){var t=this.data;if(this.updateConfig(),this.animationIsPlaying=!1,this.animation=c(this.config),this.removeEventListeners(),this.addEventListeners(),!(!t.autoplay||t.startEvents&&t.startEvents.length))return t.delay?void setTimeout(this.beginAnimation,t.delay):void this.beginAnimation()},beginAnimation:function(){this.updateConfig(),this.time=0,this.animationIsPlaying=!0,this.stopRelatedAnimations(),this.el.emit("animationbegin",this.eventDetail)},pauseAnimation:function(){this.animationIsPlaying=!1},resumeAnimation:function(){this.animationIsPlaying=!0},onStartEvent:function(){if(this.data.enabled)return this.updateConfig(),this.animation&&this.animation.pause(),this.animation=c(this.config),this.data.delay?void setTimeout(this.beginAnimation,this.data.delay):void this.beginAnimation()},updateConfigForRawColor:function(){var t,e,n,r=this.config,i=this.data,a=this.el;if(!this.waitComponentInitRawProperty(this.updateConfigForRawColor)){t=i.from||s(a,i.property),n=i.to,this.setColorConfig(t,n),t=this.fromColor,n=this.toColor,this.targetsArray.length=0,this.targetsArray.push(t),r.targets=this.targetsArray;for(e in n)r[e]=n[e];r.update=function(){var e={};return e.r=t.r,e.g=t.g,e.b=t.b,function(t){var n;n=t.animatables[0].target,n.r===e.r&&n.g===e.g&&n.b===e.b||u(a,i.property,n,i.type)}}()}},updateConfigForDefault:function(){var t,e,n,r,i=this.config,a=this.data,o=this.el;this.waitComponentInitRawProperty(this.updateConfigForDefault)||(t=a.from||(l(a)?s(o,a.property):m(o,a.property)),r=a.to,n=!isNaN(t||r),n?(t=parseFloat(t),r=parseFloat(r)):(t=t?t.toString():t,r=r?r.toString():r),e="true"===r||"false"===r,e&&(t="true"===a.from?1:0,r="true"===a.to?1:0),this.targets.aframeProperty=t,i.targets=this.targets,i.aframeProperty=r,i.update=function(){var n=t;return function(t){var r;r=t.animatables[0].target.aframeProperty,r!==n&&(n=r,e&&(r=r>=1),l(a)?u(o,a.property,r,a.type):g(o,a.property,r))}}())},updateConfigForVector:function(){var t,e,n,r=this.config,a=this.data,o=this.el;e=a.from?AFRAME.utils.coordinates.parse(a.from):m(o,a.property),n=AFRAME.utils.coordinates.parse(a.to),a.property===A&&(i(e),i(n)),this.targetsArray.length=0,this.targetsArray.push(e),r.targets=this.targetsArray;for(t in n)r[t]=n[t];return a.property===b||a.property===A||a.property===x?void(r.update=function(){var t={};return t.x=e.x,t.y=e.y,t.z=e.z,function(e){var n=e.animatables[0].target;n.x===t.x&&n.y===t.y&&n.z===t.z||(t.x=n.x,t.y=n.y,t.z=n.z,o.object3D[a.property].set(n.x,n.y,n.z))}}()):void(r.update=function(){var t={};return t.x=e.x,t.y=e.y,t.z=e.z,function(e){var n=e.animations[0].target;n.x===t.x&&n.y===t.y&&n.z===t.z||(t.x=n.x,t.y=n.y,t.z=n.z,g(o,a.property,n))}}())},updateConfig:function(){var t;t=r(this.el,this.data.property),l(this.data)&&this.data.type===v?this.updateConfigForRawColor():"vec2"===t||"vec3"===t||"vec4"===t?this.updateConfigForVector():this.updateConfigForDefault()},waitComponentInitRawProperty:function(t){var e,n=this.data,r=this.el,i=this;return!n.from&&(!!n.property.startsWith(E)&&(e=f(n.property)[1],!r.components[e]&&(r.addEventListener("componentinitialized",function n(a){a.detail.name===e&&(t(),i.animation=c(i.config),r.removeEventListener("componentinitialized",n))}),!0)))},stopRelatedAnimations:function(){var t,e;for(e in this.el.components)t=this.el.components[e],e!==this.attrName&&"animation"===t.name&&t.animationIsPlaying&&t.data.property===this.data.property&&(t.animationIsPlaying=!1)},addEventListeners:function(){var t=this.data,e=this.el;a(e,t.startEvents,this.onStartEvent),a(e,t.pauseEvents,this.pauseAnimation),a(e,t.resumeEvents,this.resumeAnimation)},removeEventListeners:function(){var t=this.data,e=this.el;o(e,t.startEvents,this.onStartEvent),o(e,t.pauseEvents,this.pauseAnimation),o(e,t.resumeEvents,this.resumeAnimation)},setColorConfig:function(t,e){p.set(t),d.set(e),t=this.fromColor,e=this.toColor,t.r=p.r,t.g=p.g,t.b=p.b,e.r=d.r,e.g=d.g,e.b=d.b}})},function(t,e,n){var r,i,a;(function(n){var o={scope:{}};o.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,n){if(n.get||n.set)throw new TypeError("ES3 does not support getters and setters.");t!=Array.prototype&&t!=Object.prototype&&(t[e]=n.value)},o.getGlobal=function(t){return"undefined"!=typeof window&&window===t?t:"undefined"!=typeof n&&null!=n?n:t},o.global=o.getGlobal(this),o.SYMBOL_PREFIX="jscomp_symbol_",o.initSymbol=function(){o.initSymbol=function(){},o.global.Symbol||(o.global.Symbol=o.Symbol)},o.symbolCounter_=0,o.Symbol=function(t){return o.SYMBOL_PREFIX+(t||"")+o.symbolCounter_++},o.initSymbolIterator=function(){o.initSymbol();var t=o.global.Symbol.iterator;t||(t=o.global.Symbol.iterator=o.global.Symbol("iterator")),"function"!=typeof Array.prototype[t]&&o.defineProperty(Array.prototype,t,{configurable:!0,writable:!0,value:function(){return o.arrayIterator(this)}}),o.initSymbolIterator=function(){}},o.arrayIterator=function(t){var e=0;return o.iteratorPrototype(function(){return e<t.length?{done:!1,value:t[e++]}:{done:!0}})},o.iteratorPrototype=function(t){return o.initSymbolIterator(),t={next:t},t[o.global.Symbol.iterator]=function(){return this},t},o.array=o.array||{},o.iteratorFromArray=function(t,e){o.initSymbolIterator(),t instanceof String&&(t+="");var n=0,r={next:function(){if(n<t.length){var i=n++;return{value:e(i,t[i]),done:!1}}return r.next=function(){return{done:!0,value:void 0}},r.next()}};return r[Symbol.iterator]=function(){return r},r},o.polyfill=function(t,e,n,r){if(e){for(n=o.global,t=t.split("."),r=0;r<t.length-1;r++){var i=t[r];i in n||(n[i]={}),n=n[i]}t=t[t.length-1],r=n[t],e=e(r),e!=r&&null!=e&&o.defineProperty(n,t,{configurable:!0,writable:!0,value:e})}},o.polyfill("Array.prototype.keys",function(t){return t?t:function(){return o.iteratorFromArray(this,function(t){return t})}},"es6-impl","es3");var s=this;!function(n,o){i=[],r=o,a="function"==typeof r?r.apply(e,i):r,!(void 0!==a&&(t.exports=a))}(this,function(){function t(t){if(!N.col(t))try{return document.querySelectorAll(t)}catch(t){}}function e(t,e){for(var n=t.length,r=2<=arguments.length?arguments[1]:void 0,i=[],a=0;a<n;a++)if(a in t){var o=t[a];e.call(r,o,a,t)&&i.push(o)}return i}function n(t){return t.reduce(function(t,e){return t.concat(N.arr(e)?n(e):e)},[])}function r(e){return N.arr(e)?e:(N.str(e)&&(e=t(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function i(t,e){return t.some(function(t){return t===e})}function a(t){var e,n={};for(e in t)n[e]=t[e];return n}function o(t,e){var n,r=a(t);for(n in t)r[n]=e.hasOwnProperty(n)?e[n]:t[n];return r}function u(t,e){var n,r=a(t);for(n in e)r[n]=N.und(t[n])?e[n]:t[n];return r}function f(t){t=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(t,e,n,r){return e+e+n+n+r+r});var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);t=parseInt(e[1],16);var n=parseInt(e[2],16),e=parseInt(e[3],16);return"rgba("+t+","+n+","+e+",1)"}function l(t){function e(t,e,n){return 0>n&&(n+=1),1<n&&--n,n<1/6?t+6*(e-t)*n:.5>n?e:n<2/3?t+(e-t)*(2/3-n)*6:t}var n=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t);t=parseInt(n[1])/360;var r=parseInt(n[2])/100,i=parseInt(n[3])/100,n=n[4]||1;if(0==r)i=r=t=i;else{var a=.5>i?i*(1+r):i+r-i*r,o=2*i-a,i=e(o,a,t+1/3),r=e(o,a,t);t=e(o,a,t-1/3)}return"rgba("+255*i+","+255*r+","+255*t+","+n+")"}function c(t){if(t=/([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t))return t[2]}function p(t){return-1<t.indexOf("translate")||"perspective"===t?"px":-1<t.indexOf("rotate")||-1<t.indexOf("skew")?"deg":void 0}function d(t,e){return N.fnc(t)?t(e.target,e.id,e.total):t}function h(t,e){if(e in t.style)return getComputedStyle(t).getPropertyValue(e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())||"0"}function m(t,e){return N.dom(t)&&i(D,e)?"transform":N.dom(t)&&(t.getAttribute(e)||N.svg(t)&&t[e])?"attribute":N.dom(t)&&"transform"!==e&&h(t,e)?"css":null!=t[e]?"object":void 0}function g(t,n){var r=p(n),r=-1<n.indexOf("scale")?1:0+r;if(t=t.style.transform,!t)return r;for(var i=[],a=[],o=[],s=/(\w+)\((.+?)\)/g;i=s.exec(t);)a.push(i[1]),o.push(i[2]);return t=e(o,function(t,e){return a[e]===n}),t.length?t[0]:r}function y(t,e){switch(m(t,e)){case"transform":return g(t,e);case"css":return h(t,e);case"attribute":return t.getAttribute(e)}return t[e]||0}function v(t,e){var n=/^(\*=|\+=|-=)/.exec(t);if(!n)return t;var r=c(t)||0;switch(e=parseFloat(e),t=parseFloat(t.replace(n[0],"")),n[0][0]){case"+":return e+t+r;case"-":return e-t+r;case"*":return e*t+r}}function b(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function A(t){t=t.points;for(var e,n=0,r=0;r<t.numberOfItems;r++){var i=t.getItem(r);0<r&&(n+=b(e,i)),e=i}return n}function x(t){if(t.getTotalLength)return t.getTotalLength();switch(t.tagName.toLowerCase()){case"circle":return 2*Math.PI*t.getAttribute("r");case"rect":return 2*t.getAttribute("width")+2*t.getAttribute("height");case"line":return b({x:t.getAttribute("x1"),y:t.getAttribute("y1")},{x:t.getAttribute("x2"),y:t.getAttribute("y2")});case"polyline":return A(t);case"polygon":var e=t.points;return A(t)+b(e.getItem(e.numberOfItems-1),e.getItem(0))}}function E(t,e){function n(n){return n=void 0===n?0:n,t.el.getPointAtLength(1<=e+n?e+n:0)}var r=n(),i=n(-1),a=n(1);switch(t.property){case"x":return r.x;case"y":return r.y;case"angle":return 180*Math.atan2(a.y-i.y,a.x-i.x)/Math.PI}}function w(t,e){var n,r=/-?\d*\.?\d+/g;if(n=N.pth(t)?t.totalLength:t,N.col(n))if(N.rgb(n)){var i=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(n);n=i?"rgba("+i[1]+",1)":n}else n=N.hex(n)?f(n):N.hsl(n)?l(n):void 0;else i=(i=c(n))?n.substr(0,n.length-i.length):n,n=e&&!/\s/g.test(n)?i+e:i;return n+="",{original:n,numbers:n.match(r)?n.match(r).map(Number):[0],strings:N.str(t)||e?n.split(r):[]}}function C(t){return t=t?n(N.arr(t)?t.map(r):r(t)):[],e(t,function(t,e,n){return n.indexOf(t)===e})}function P(t){var e=C(t);return e.map(function(t,n){return{target:t,id:n,total:e.length}})}function I(t,e){var n=a(e);if(N.arr(t)){var i=t.length;2!==i||N.obj(t[0])?N.fnc(e.duration)||(n.duration=e.duration/i):t={value:t}}return r(t).map(function(t,n){return n=n?0:e.delay,t=N.obj(t)&&!N.pth(t)?t:{value:t},N.und(t.delay)&&(t.delay=n),t}).map(function(t){return u(t,n)})}function M(t,e){var n,r={};for(n in t){var i=d(t[n],e);N.arr(i)&&(i=i.map(function(t){return d(t,e)}),1===i.length&&(i=i[0])),r[n]=i}return r.duration=parseFloat(r.duration),r.delay=parseFloat(r.delay),r}function F(t){return N.arr(t)?_.apply(this,t):$[t]}function S(t,e){var n;return t.tweens.map(function(r){r=M(r,e);var i=r.value,a=y(e.target,t.name),o=n?n.to.original:a,o=N.arr(i)?i[0]:o,s=v(N.arr(i)?i[1]:i,o),a=c(s)||c(o)||c(a);return r.from=w(o,a),r.to=w(s,a),r.start=n?n.end:t.offset,r.end=r.start+r.delay+r.duration,r.easing=F(r.easing),r.elasticity=(1e3-Math.min(Math.max(r.elasticity,1),999))/1e3,r.isPath=N.pth(i),r.isColor=N.col(r.from.original),r.isColor&&(r.round=1),n=r})}function R(t,r){return e(n(t.map(function(t){return r.map(function(e){var n=m(t.target,e.name);if(n){var r=S(e,t);e={type:n,property:e.name,animatable:t,tweens:r,duration:r[r.length-1].end,delay:r[0].delay}}else e=void 0;return e})})),function(t){return!N.und(t)})}function L(t,e,n,r){var i="delay"===t;return e.length?(i?Math.min:Math.max).apply(Math,e.map(function(e){return e[t]})):i?r.delay:n.offset+r.delay+r.duration}function O(t){var e,n=o(k,t),r=o(j,t),i=P(t.targets),a=[],s=u(n,r);for(e in t)s.hasOwnProperty(e)||"targets"===e||a.push({name:e,offset:s.offset,tweens:I(t[e],r)});return t=R(i,a),u(n,{children:[],animatables:i,animations:t,duration:L("duration",t,n,r),delay:L("delay",t,n,r)})}function T(t){function n(){return window.Promise&&new Promise(function(t){return c=t})}function r(t){return d.reversed?d.duration-t:t}function i(t){for(var n=0,r={},i=d.animations,a=i.length;n<a;){var o=i[n],s=o.animatable,u=o.tweens,f=u.length-1,l=u[f];f&&(l=e(u,function(e){return t<e.end})[0]||l);for(var u=Math.min(Math.max(t-l.start-l.delay,0),l.duration)/l.duration,c=isNaN(u)?1:l.easing(u,l.elasticity),u=l.to.strings,p=l.round,f=[],m=void 0,m=l.to.numbers.length,g=0;g<m;g++){var y=void 0,y=l.to.numbers[g],v=l.from.numbers[g],y=l.isPath?E(l.value,c*y):v+c*(y-v);p&&(l.isColor&&2<g||(y=Math.round(y*p)/p)),f.push(y)}if(l=u.length)for(m=u[0],c=0;c<l;c++)p=u[c+1],g=f[c],isNaN(g)||(m=p?m+(g+p):m+(g+" "));else m=f[0];H[o.type](s.target,o.property,m,r,s.id),o.currentValue=m,n++}if(n=Object.keys(r).length)for(i=0;i<n;i++)z||(z=h(document.body,"transform")?"transform":"-webkit-transform"),d.animatables[i].target.style[z]=r[i].join(" ");d.currentTime=t,d.progress=t/d.duration*100}function a(t){d[t]&&d[t](d)}function o(){d.remaining&&!0!==d.remaining&&d.remaining--}function s(t){var e=d.duration,s=d.offset,h=s+d.delay,m=d.currentTime,g=d.reversed,y=r(t);if(d.children.length){var v=d.children,b=v.length;if(y>=d.currentTime)for(var A=0;A<b;A++)v[A].seek(y);else for(;b--;)v[b].seek(y)}(y>=h||!e)&&(d.began||(d.began=!0,a("begin")),a("run")),y>s&&y<e?i(y):(y<=s&&0!==m&&(i(0),g&&o()),(y>=e&&m!==e||!e)&&(i(e),g||o())),a("update"),t>=e&&(d.remaining?(f=u,"alternate"===d.direction&&(d.reversed=!d.reversed)):(d.pause(),d.completed||(d.completed=!0,a("complete"),"Promise"in window&&(c(),p=n()))),l=0)}t=void 0===t?{}:t;var u,f,l=0,c=null,p=n(),d=O(t);return d.reset=function(){var t=d.direction,e=d.loop;for(d.currentTime=0,d.progress=0,d.paused=!0,d.began=!1,d.completed=!1,d.reversed="reverse"===t,d.remaining="alternate"===t&&1===e?2:e,i(0),t=d.children.length;t--;)d.children[t].reset()},d.tick=function(t){u=t,f||(f=u),s((l+u-f)*T.speed)},d.seek=function(t){s(r(t))},d.pause=function(){var t=V.indexOf(d);-1<t&&V.splice(t,1),d.paused=!0},d.play=function(){d.paused&&(d.paused=!1,f=0,l=r(d.currentTime),V.push(d),W||X())},d.reverse=function(){d.reversed=!d.reversed,f=0,l=r(d.currentTime)},d.restart=function(){d.pause(),d.reset(),d.play()},d.finished=p,d.reset(),d.autoplay&&d.play(),d}var z,k={update:void 0,begin:void 0,run:void 0,complete:void 0,loop:1,direction:"normal",autoplay:!0,offset:0},j={duration:1e3,delay:0,easing:"easeOutElastic",elasticity:500,round:0},D="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "),N={arr:function(t){return Array.isArray(t)},obj:function(t){return-1<Object.prototype.toString.call(t).indexOf("Object")},pth:function(t){return N.obj(t)&&t.hasOwnProperty("totalLength")},svg:function(t){return t instanceof SVGElement},dom:function(t){return t.nodeType||N.svg(t)},str:function(t){return"string"==typeof t},fnc:function(t){return"function"==typeof t},und:function(t){return"undefined"==typeof t},hex:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},rgb:function(t){return/^rgb/.test(t)},hsl:function(t){return/^hsl/.test(t)},col:function(t){return N.hex(t)||N.rgb(t)||N.hsl(t)}},_=function(){function t(t,e,n){return(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t}return function(e,n,r,i){if(0<=e&&1>=e&&0<=r&&1>=r){var a=new Float32Array(11);if(e!==n||r!==i)for(var o=0;11>o;++o)a[o]=t(.1*o,e,r);return function(o){if(e===n&&r===i)return o;if(0===o)return 0;if(1===o)return 1;for(var s=0,u=1;10!==u&&a[u]<=o;++u)s+=.1;--u;var u=s+(o-a[u])/(a[u+1]-a[u])*.1,f=3*(1-3*r+3*e)*u*u+2*(3*r-6*e)*u+3*e;if(.001<=f){for(s=0;4>s&&(f=3*(1-3*r+3*e)*u*u+2*(3*r-6*e)*u+3*e,0!==f);++s)var l=t(u,e,r)-o,u=u-l/f;o=u}else if(0===f)o=u;else{var u=s,s=s+.1,c=0;do l=u+(s-u)/2,f=t(l,e,r)-o,0<f?s=l:u=l;while(1e-7<Math.abs(f)&&10>++c);o=l}return t(o,n,i)}}}}(),$=function(){function t(t,e){return 0===t||1===t?t:-Math.pow(2,10*(t-1))*Math.sin(2*(t-1-e/(2*Math.PI)*Math.asin(1))*Math.PI/e)}var e,n="Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),r={In:[[.55,.085,.68,.53],[.55,.055,.675,.19],[.895,.03,.685,.22],[.755,.05,.855,.06],[.47,0,.745,.715],[.95,.05,.795,.035],[.6,.04,.98,.335],[.6,-.28,.735,.045],t],Out:[[.25,.46,.45,.94],[.215,.61,.355,1],[.165,.84,.44,1],[.23,1,.32,1],[.39,.575,.565,1],[.19,1,.22,1],[.075,.82,.165,1],[.175,.885,.32,1.275],function(e,n){return 1-t(1-e,n)}],InOut:[[.455,.03,.515,.955],[.645,.045,.355,1],[.77,0,.175,1],[.86,0,.07,1],[.445,.05,.55,.95],[1,0,0,1],[.785,.135,.15,.86],[.68,-.55,.265,1.55],function(e,n){return.5>e?t(2*e,n)/2:1-t(-2*e+2,n)/2}]},i={linear:_(.25,.25,.75,.75)},a={};for(e in r)a.type=e,r[a.type].forEach(function(t){return function(e,r){i["ease"+t.type+n[r]]=N.fnc(e)?e:_.apply(s,e)}}(a)),a={type:a.type};return i}(),H={css:function(t,e,n){return t.style[e]=n},attribute:function(t,e,n){return t.setAttribute(e,n)},object:function(t,e,n){return t[e]=n},transform:function(t,e,n,r,i){r[i]||(r[i]=[]),r[i].push(e+"("+n+")")}},V=[],W=0,X=function(){function t(){W=requestAnimationFrame(e)}function e(e){var n=V.length;if(n){for(var r=0;r<n;)V[r]&&V[r].tick(e),r++;t()}else cancelAnimationFrame(W),W=0}return t}();return T.version="2.2.0",T.speed=1,T.running=V,T.remove=function(t){t=C(t);for(var e=V.length;e--;)for(var n=V[e],r=n.animations,a=r.length;a--;)i(t,r[a].animatable.target)&&(r.splice(a,1),r.length||n.pause())},T.getValue=y,T.path=function(e,n){var r=N.str(e)?t(e)[0]:e,i=n||100;return function(t){return{el:r,property:t,totalLength:x(r)*(i/100)}}},T.setDashoffset=function(t){var e=x(t);return t.setAttribute("stroke-dasharray",e),e},T.bezier=_,T.easings=$,T.timeline=function(t){var e=T(t);return e.pause(),e.duration=0,e.add=function(n){return e.children.forEach(function(t){t.began=!0,t.completed=!0}),r(n).forEach(function(n){var r=u(n,o(j,t||{}));r.targets=r.targets||t.targets,n=e.duration;var i=r.offset;r.autoplay=!1,r.direction=e.direction,r.offset=N.und(i)?n:v(i,n),e.began=!0,e.completed=!0,e.seek(r.offset),r=T(r),r.began=!0,r.completed=!0,r.duration>n&&(e.duration=r.duration),e.children.push(r)}),e.seek(0),e.reset(),e.autoplay&&e.restart(),e},e},T.random=function(t,e){return Math.floor(Math.random()*(e-t+1))+t},T})}).call(e,function(){return this}())}]);
