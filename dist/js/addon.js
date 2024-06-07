(()=>{"use strict";var t,r={247:()=>{},43:()=>{function t(r){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(r)}function r(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function e(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(r){n(t,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(o,r))}))}return t}function n(r,e,n){var o;return o=function(r,e){if("object"!=t(r)||!r)return r;var n=r[Symbol.toPrimitive];if(void 0!==n){var o=n.call(r,e||"default");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(r)}(e,"string"),(e="symbol"==t(o)?o:o+"")in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}var o=function(t,r,e,n,o,a,i,s){var u,l="function"==typeof t?t.options:t;if(r&&(l.render=r,l.staticRenderFns=e,l._compiled=!0),n&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),i?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=u):o&&(u=s?function(){o.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:o),u)if(l.functional){l._injectStyles=u;var f=l.render;l.render=function(t,r){return u.call(r),f(t,r)}}else{var c=l.beforeCreate;l.beforeCreate=c?[].concat(c,u):[u]}return{exports:t,options:l}}({mixins:[BardToolbarButton],data:function(){return{colorPickerConfig:{allow_any:!0,swatches:[]},textColor:null}},computed:{currentColor:function(){var t;return null===(t=this.editor.getAttributes("textColor"))||void 0===t?void 0:t.color}},methods:{handleColorSelected:function(t){this.textColor=t.target.value},setColor:function(t){this.editor.state.selection.empty&&this.editor.commands.extendMarkRange("textColor"),this.editor.commands.setColor({color:t}),this.$refs.popover.close()}},mounted:function(){this.colorPickerConfig=e(e({},this.colorPickerConfig),Statamic.$config.get("bard-color-picker"))}},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("popover",{ref:"popover",attrs:{placement:"bottom-start"},scopedSlots:t._u([{key:"trigger",fn:function(){return[e("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.button.text,expression:"button.text"}],staticClass:"bard-toolbar-button",class:{active:t.currentColor},style:"color: "+(t.currentColor||"inherit")+";",attrs:{"aria-label":t.button.text},domProps:{innerHTML:t._s(t.button.html)}})]},proxy:!0},{key:"default",fn:function(){return[e("div",{staticClass:"ndx-text-color"},[t.colorPickerConfig.swatches.length?e("div",{staticClass:"ndx-text-color-swatches"},t._l(t.colorPickerConfig.swatches,(function(r){return e("button",{key:r,style:{"background-color":r},on:{click:function(){return t.setColor(r)}}},[r===t.currentColor?e("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 12 12",fill:"#fff"}},[e("path",{attrs:{d:"M11.1897 3.79018C11.1897 3.96875 11.1272 4.12054 11.0022 4.24554L6.15402 9.09375L5.2433 10.0045C5.1183 10.1295 4.96652 10.192 4.78795 10.192C4.60938 10.192 4.45759 10.1295 4.33259 10.0045L3.42188 9.09375L0.997768 6.66964C0.872768 6.54464 0.810268 6.39286 0.810268 6.21429C0.810268 6.03571 0.872768 5.88393 0.997768 5.75893L1.90848 4.84821C2.03348 4.72321 2.18527 4.66071 2.36384 4.66071C2.54241 4.66071 2.6942 4.72321 2.8192 4.84821L4.78795 6.82366L9.1808 2.42411C9.3058 2.29911 9.45759 2.23661 9.63616 2.23661C9.81473 2.23661 9.96652 2.29911 10.0915 2.42411L11.0022 3.33482C11.1272 3.45982 11.1897 3.61161 11.1897 3.79018Z"}})]):t._e()])})),0):t._e(),t._v(" "),t.colorPickerConfig.allow_any?e("div",{staticClass:"ndx-text-color-input"},[e("div",{staticClass:"input-text"},[e("input",{attrs:{type:"color"},domProps:{value:t.currentColor||"#000000"},on:{input:t.handleColorSelected}}),t._v(" "),e("button",{staticClass:"ndx-text-color-reset",attrs:{"aria-label":t.__("Remove"),disabled:!t.currentColor},on:{click:function(){return t.setColor(null)}}},[t._v("×")])]),t._v(" "),e("button",{staticClass:"btn btn-primary",domProps:{textContent:t._s(t.__("OK"))},on:{click:function(){return t.setColor(t.textColor)}}})]):t._e()])]},proxy:!0}])})}),[],!1,null,null,null);const a=o.exports;function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}var s=/^\s+/,u=/\s+$/;function l(t,r){if(r=r||{},(t=t||"")instanceof l)return t;if(!(this instanceof l))return new l(t,r);var e=function(t){var r={r:0,g:0,b:0},e=1,n=null,o=null,a=null,l=!1,f=!1;"string"==typeof t&&(t=function(t){t=t.replace(s,"").replace(u,"").toLowerCase();var r,e=!1;if(S[t])t=S[t],e=!0;else if("transparent"==t)return{r:0,g:0,b:0,a:0,format:"name"};if(r=q.rgb.exec(t))return{r:r[1],g:r[2],b:r[3]};if(r=q.rgba.exec(t))return{r:r[1],g:r[2],b:r[3],a:r[4]};if(r=q.hsl.exec(t))return{h:r[1],s:r[2],l:r[3]};if(r=q.hsla.exec(t))return{h:r[1],s:r[2],l:r[3],a:r[4]};if(r=q.hsv.exec(t))return{h:r[1],s:r[2],v:r[3]};if(r=q.hsva.exec(t))return{h:r[1],s:r[2],v:r[3],a:r[4]};if(r=q.hex8.exec(t))return{r:H(r[1]),g:H(r[2]),b:H(r[3]),a:T(r[4]),format:e?"name":"hex8"};if(r=q.hex6.exec(t))return{r:H(r[1]),g:H(r[2]),b:H(r[3]),format:e?"name":"hex"};if(r=q.hex4.exec(t))return{r:H(r[1]+""+r[1]),g:H(r[2]+""+r[2]),b:H(r[3]+""+r[3]),a:T(r[4]+""+r[4]),format:e?"name":"hex8"};if(r=q.hex3.exec(t))return{r:H(r[1]+""+r[1]),g:H(r[2]+""+r[2]),b:H(r[3]+""+r[3]),format:e?"name":"hex"};return!1}(t));"object"==i(t)&&(I(t.r)&&I(t.g)&&I(t.b)?(c=t.r,h=t.g,d=t.b,r={r:255*P(c,255),g:255*P(h,255),b:255*P(d,255)},l=!0,f="%"===String(t.r).substr(-1)?"prgb":"rgb"):I(t.h)&&I(t.s)&&I(t.v)?(n=L(t.s),o=L(t.v),r=function(t,r,e){t=6*P(t,360),r=P(r,100),e=P(e,100);var n=Math.floor(t),o=t-n,a=e*(1-r),i=e*(1-o*r),s=e*(1-(1-o)*r),u=n%6,l=[e,i,a,a,s,e][u],f=[s,e,e,i,a,a][u],c=[a,a,s,e,e,i][u];return{r:255*l,g:255*f,b:255*c}}(t.h,n,o),l=!0,f="hsv"):I(t.h)&&I(t.s)&&I(t.l)&&(n=L(t.s),a=L(t.l),r=function(t,r,e){var n,o,a;function i(t,r,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?t+6*(r-t)*e:e<.5?r:e<2/3?t+(r-t)*(2/3-e)*6:t}if(t=P(t,360),r=P(r,100),e=P(e,100),0===r)n=o=a=e;else{var s=e<.5?e*(1+r):e+r-e*r,u=2*e-s;n=i(u,s,t+1/3),o=i(u,s,t),a=i(u,s,t-1/3)}return{r:255*n,g:255*o,b:255*a}}(t.h,n,a),l=!0,f="hsl"),t.hasOwnProperty("a")&&(e=t.a));var c,h,d;return e=j(e),{ok:l,format:t.format||f,r:Math.min(255,Math.max(r.r,0)),g:Math.min(255,Math.max(r.g,0)),b:Math.min(255,Math.max(r.b,0)),a:e}}(t);this._originalInput=t,this._r=e.r,this._g=e.g,this._b=e.b,this._a=e.a,this._roundA=Math.round(100*this._a)/100,this._format=r.format||e.format,this._gradientType=r.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=e.ok}function f(t,r,e){t=P(t,255),r=P(r,255),e=P(e,255);var n,o,a=Math.max(t,r,e),i=Math.min(t,r,e),s=(a+i)/2;if(a==i)n=o=0;else{var u=a-i;switch(o=s>.5?u/(2-a-i):u/(a+i),a){case t:n=(r-e)/u+(r<e?6:0);break;case r:n=(e-t)/u+2;break;case e:n=(t-r)/u+4}n/=6}return{h:n,s:o,l:s}}function c(t,r,e){t=P(t,255),r=P(r,255),e=P(e,255);var n,o,a=Math.max(t,r,e),i=Math.min(t,r,e),s=a,u=a-i;if(o=0===a?0:u/a,a==i)n=0;else{switch(a){case t:n=(r-e)/u+(r<e?6:0);break;case r:n=(e-t)/u+2;break;case e:n=(t-r)/u+4}n/=6}return{h:n,s:o,v:s}}function h(t,r,e,n){var o=[F(Math.round(t).toString(16)),F(Math.round(r).toString(16)),F(Math.round(e).toString(16))];return n&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function d(t,r,e,n){return[F(E(n)),F(Math.round(t).toString(16)),F(Math.round(r).toString(16)),F(Math.round(e).toString(16))].join("")}function b(t,r){r=0===r?0:r||10;var e=l(t).toHsl();return e.s-=r/100,e.s=R(e.s),l(e)}function g(t,r){r=0===r?0:r||10;var e=l(t).toHsl();return e.s+=r/100,e.s=R(e.s),l(e)}function p(t){return l(t).desaturate(100)}function m(t,r){r=0===r?0:r||10;var e=l(t).toHsl();return e.l+=r/100,e.l=R(e.l),l(e)}function v(t,r){r=0===r?0:r||10;var e=l(t).toRgb();return e.r=Math.max(0,Math.min(255,e.r-Math.round(-r/100*255))),e.g=Math.max(0,Math.min(255,e.g-Math.round(-r/100*255))),e.b=Math.max(0,Math.min(255,e.b-Math.round(-r/100*255))),l(e)}function y(t,r){r=0===r?0:r||10;var e=l(t).toHsl();return e.l-=r/100,e.l=R(e.l),l(e)}function x(t,r){var e=l(t).toHsl(),n=(e.h+r)%360;return e.h=n<0?360+n:n,l(e)}function M(t){var r=l(t).toHsl();return r.h=(r.h+180)%360,l(r)}function C(t,r){if(isNaN(r)||r<=0)throw new Error("Argument to polyad must be a positive number");for(var e=l(t).toHsl(),n=[l(t)],o=360/r,a=1;a<r;a++)n.push(l({h:(e.h+a*o)%360,s:e.s,l:e.l}));return n}function k(t){var r=l(t).toHsl(),e=r.h;return[l(t),l({h:(e+72)%360,s:r.s,l:r.l}),l({h:(e+216)%360,s:r.s,l:r.l})]}function w(t,r,e){r=r||6,e=e||30;var n=l(t).toHsl(),o=360/e,a=[l(t)];for(n.h=(n.h-(o*r>>1)+720)%360;--r;)n.h=(n.h+o)%360,a.push(l(n));return a}function A(t,r){r=r||6;for(var e=l(t).toHsv(),n=e.h,o=e.s,a=e.v,i=[],s=1/r;r--;)i.push(l({h:n,s:o,v:a})),a=(a+s)%1;return i}l.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},getLuminance:function(){var t,r,e,n=this.toRgb();return t=n.r/255,r=n.g/255,e=n.b/255,.2126*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.7152*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))+.0722*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))},setAlpha:function(t){return this._a=j(t),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var t=c(this._r,this._g,this._b);return{h:360*t.h,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=c(this._r,this._g,this._b),r=Math.round(360*t.h),e=Math.round(100*t.s),n=Math.round(100*t.v);return 1==this._a?"hsv("+r+", "+e+"%, "+n+"%)":"hsva("+r+", "+e+"%, "+n+"%, "+this._roundA+")"},toHsl:function(){var t=f(this._r,this._g,this._b);return{h:360*t.h,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=f(this._r,this._g,this._b),r=Math.round(360*t.h),e=Math.round(100*t.s),n=Math.round(100*t.l);return 1==this._a?"hsl("+r+", "+e+"%, "+n+"%)":"hsla("+r+", "+e+"%, "+n+"%, "+this._roundA+")"},toHex:function(t){return h(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(t){return function(t,r,e,n,o){var a=[F(Math.round(t).toString(16)),F(Math.round(r).toString(16)),F(Math.round(e).toString(16)),F(E(n))];if(o&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)&&a[3].charAt(0)==a[3].charAt(1))return a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0);return a.join("")}(this._r,this._g,this._b,this._a,t)},toHex8String:function(t){return"#"+this.toHex8(t)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*P(this._r,255))+"%",g:Math.round(100*P(this._g,255))+"%",b:Math.round(100*P(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+Math.round(100*P(this._r,255))+"%, "+Math.round(100*P(this._g,255))+"%, "+Math.round(100*P(this._b,255))+"%)":"rgba("+Math.round(100*P(this._r,255))+"%, "+Math.round(100*P(this._g,255))+"%, "+Math.round(100*P(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(O[h(this._r,this._g,this._b,!0)]||!1)},toFilter:function(t){var r="#"+d(this._r,this._g,this._b,this._a),e=r,n=this._gradientType?"GradientType = 1, ":"";if(t){var o=l(t);e="#"+d(o._r,o._g,o._b,o._a)}return"progid:DXImageTransform.Microsoft.gradient("+n+"startColorstr="+r+",endColorstr="+e+")"},toString:function(t){var r=!!t;t=t||this._format;var e=!1,n=this._a<1&&this._a>=0;return r||!n||"hex"!==t&&"hex6"!==t&&"hex3"!==t&&"hex4"!==t&&"hex8"!==t&&"name"!==t?("rgb"===t&&(e=this.toRgbString()),"prgb"===t&&(e=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(e=this.toHexString()),"hex3"===t&&(e=this.toHexString(!0)),"hex4"===t&&(e=this.toHex8String(!0)),"hex8"===t&&(e=this.toHex8String()),"name"===t&&(e=this.toName()),"hsl"===t&&(e=this.toHslString()),"hsv"===t&&(e=this.toHsvString()),e||this.toHexString()):"name"===t&&0===this._a?this.toName():this.toRgbString()},clone:function(){return l(this.toString())},_applyModification:function(t,r){var e=t.apply(null,[this].concat([].slice.call(r)));return this._r=e._r,this._g=e._g,this._b=e._b,this.setAlpha(e._a),this},lighten:function(){return this._applyModification(m,arguments)},brighten:function(){return this._applyModification(v,arguments)},darken:function(){return this._applyModification(y,arguments)},desaturate:function(){return this._applyModification(b,arguments)},saturate:function(){return this._applyModification(g,arguments)},greyscale:function(){return this._applyModification(p,arguments)},spin:function(){return this._applyModification(x,arguments)},_applyCombination:function(t,r){return t.apply(null,[this].concat([].slice.call(r)))},analogous:function(){return this._applyCombination(w,arguments)},complement:function(){return this._applyCombination(M,arguments)},monochromatic:function(){return this._applyCombination(A,arguments)},splitcomplement:function(){return this._applyCombination(k,arguments)},triad:function(){return this._applyCombination(C,[3])},tetrad:function(){return this._applyCombination(C,[4])}},l.fromRatio=function(t,r){if("object"==i(t)){var e={};for(var n in t)t.hasOwnProperty(n)&&(e[n]="a"===n?t[n]:L(t[n]));t=e}return l(t,r)},l.equals=function(t,r){return!(!t||!r)&&l(t).toRgbString()==l(r).toRgbString()},l.random=function(){return l.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},l.mix=function(t,r,e){e=0===e?0:e||50;var n=l(t).toRgb(),o=l(r).toRgb(),a=e/100;return l({r:(o.r-n.r)*a+n.r,g:(o.g-n.g)*a+n.g,b:(o.b-n.b)*a+n.b,a:(o.a-n.a)*a+n.a})},l.readability=function(t,r){var e=l(t),n=l(r);return(Math.max(e.getLuminance(),n.getLuminance())+.05)/(Math.min(e.getLuminance(),n.getLuminance())+.05)},l.isReadable=function(t,r,e){var n,o,a=l.readability(t,r);switch(o=!1,(n=function(t){var r,e;r=((t=t||{level:"AA",size:"small"}).level||"AA").toUpperCase(),e=(t.size||"small").toLowerCase(),"AA"!==r&&"AAA"!==r&&(r="AA");"small"!==e&&"large"!==e&&(e="small");return{level:r,size:e}}(e)).level+n.size){case"AAsmall":case"AAAlarge":o=a>=4.5;break;case"AAlarge":o=a>=3;break;case"AAAsmall":o=a>=7}return o},l.mostReadable=function(t,r,e){var n,o,a,i,s=null,u=0;o=(e=e||{}).includeFallbackColors,a=e.level,i=e.size;for(var f=0;f<r.length;f++)(n=l.readability(t,r[f]))>u&&(u=n,s=l(r[f]));return l.isReadable(t,s,{level:a,size:i})||!o?s:(e.includeFallbackColors=!1,l.mostReadable(t,["#fff","#000"],e))};var S=l.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},O=l.hexNames=function(t){var r={};for(var e in t)t.hasOwnProperty(e)&&(r[t[e]]=e);return r}(S);function j(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function P(t,r){(function(t){return"string"==typeof t&&-1!=t.indexOf(".")&&1===parseFloat(t)})(t)&&(t="100%");var e=function(t){return"string"==typeof t&&-1!=t.indexOf("%")}(t);return t=Math.min(r,Math.max(0,parseFloat(t))),e&&(t=parseInt(t*r,10)/100),Math.abs(t-r)<1e-6?1:t%r/parseFloat(r)}function R(t){return Math.min(1,Math.max(0,t))}function H(t){return parseInt(t,16)}function F(t){return 1==t.length?"0"+t:""+t}function L(t){return t<=1&&(t=100*t+"%"),t}function E(t){return Math.round(255*parseFloat(t)).toString(16)}function T(t){return H(t)/255}var $,N,D,q=(N="[\\s|\\(]+("+($="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+$+")[,|\\s]+("+$+")\\s*\\)?",D="[\\s|\\(]+("+$+")[,|\\s]+("+$+")[,|\\s]+("+$+")[,|\\s]+("+$+")\\s*\\)?",{CSS_UNIT:new RegExp($),rgb:new RegExp("rgb"+N),rgba:new RegExp("rgba"+D),hsl:new RegExp("hsl"+N),hsla:new RegExp("hsla"+D),hsv:new RegExp("hsv"+N),hsva:new RegExp("hsva"+D),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function I(t){return!!q.CSS_UNIT.exec(t)}function B(t){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B(t)}function z(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function U(t){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?z(Object(e),!0).forEach((function(r){V(t,r,e[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):z(Object(e)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(e,r))}))}return t}function V(t,r,e){var n;return n=function(t,r){if("object"!=B(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,r||"default");if("object"!=B(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(r,"string"),(r="symbol"==B(n)?n:n+"")in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}const X=Statamic.$bard.tiptap.core.Mark.create({name:"textColor",addAttributes:function(){return{color:{default:null,parseHTML:function(t){var r;return null===(r=t.style.color)||void 0===r?void 0:r.replace(/['"]+/g,"")}}}},renderHTML:function(t){var r,e,n=t.HTMLAttributes,o=(r=n.color,(e=l(r)).isValid()?{isDarkColor:e.getBrightness()<55||e.getAlpha()<.25,isLightColor:e.getBrightness()>200||e.getAlpha()<.25}:{isDarkColor:!1,isLightColor:!1}),a=o.isDarkColor,i=o.isLightColor;return["span",U(U({style:"color: ".concat(n.color,";")},a&&{"data-dark-color":!0}),i&&{"data-light-color":!0}),0]},addCommands:function(){var t=this;return{setColor:function(r){return function(e){var n=e.chain;return r.color?n().setMark(t.name,r).run():n().unsetMark(t.name,{extendEmptyMarkRange:!0}).run()}}}}});Statamic.booting((function(){Statamic.$bard.addExtension((function(){return X})),Statamic.$bard.buttons((function(t,r){var e=_.findIndex(t,(function(t){return"color"===t}));t.splice(e+1,0,r({name:"color",text:__("bard-color-picker::general.text_color"),html:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M5.2 9.7c-1.2 0-2.4.5-3 2.2-.1.2-.3.3-.5.3-.3 0-1.4-.8-1.7-1C0 13.8 1.2 16 4 16c2.4 0 4-1.4 4-3.8V12L5.2 9.7ZM14.3 0a2 2 0 0 0-1.2.5C6.7 6.2 6 6.3 6 8c0 .5 0 .9.3 1.3l2 1.6.7.1c2 0 3-1.4 6.6-8 .2-.5.4-1 .4-1.4 0-1-.8-1.6-1.7-1.6Z"/></svg>',command:function(t){return t.commands.setColor()},component:a}))}))}))}},e={};function n(t){var o=e[t];if(void 0!==o)return o.exports;var a=e[t]={exports:{}};return r[t](a,a.exports,n),a.exports}n.m=r,t=[],n.O=(r,e,o,a)=>{if(!e){var i=1/0;for(f=0;f<t.length;f++){for(var[e,o,a]=t[f],s=!0,u=0;u<e.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((t=>n.O[t](e[u])))?e.splice(u--,1):(s=!1,a<i&&(i=a));if(s){t.splice(f--,1);var l=o();void 0!==l&&(r=l)}}return r}a=a||0;for(var f=t.length;f>0&&t[f-1][2]>a;f--)t[f]=t[f-1];t[f]=[e,o,a]},n.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),(()=>{var t={59:0,836:0};n.O.j=r=>0===t[r];var r=(r,e)=>{var o,a,[i,s,u]=e,l=0;if(i.some((r=>0!==t[r]))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(u)var f=u(n)}for(r&&r(e);l<i.length;l++)a=i[l],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(f)},e=globalThis.webpackChunk=globalThis.webpackChunk||[];e.forEach(r.bind(null,0)),e.push=r.bind(null,e.push.bind(e))})(),n.O(void 0,[836],(()=>n(43)));var o=n.O(void 0,[836],(()=>n(247)));o=n.O(o)})();