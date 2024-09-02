import './polyfills.server.mjs';
import{$ as r3,A as S1,B as u1,C as T1,D as F1,K as l3,M as a3,N as s3,O as e3,P as n3,Q as o3,R as i3,U as t3,Y as f3,a as a2,b as B2,c as h1,d as E2,e as R2,f as I2,g as U1,h as _2,i as Z2,j as j2,k as U2,l as v1,m as X,n as W2,o as G2,p as P1,q as Y2,r as X2,s as $2,t as $,u as l1,v as f1,w as K2,x as Q2,y as J2,z as c3}from"./chunk-R7KJABD7.mjs";import{a as z,b as H,e as k4,g as A4}from"./chunk-VVCT4QZE.mjs";var z3=k4((O1,s2)=>{"use strict";(function(c,l){typeof O1=="object"&&typeof s2=="object"?s2.exports=l():typeof define=="function"&&define.amd?define([],l):typeof O1=="object"?O1.AOS=l():c.AOS=l()})(O1,function(){return function(c){function l(a){if(s[a])return s[a].exports;var e=s[a]={exports:{},id:a,loaded:!1};return c[a].call(e.exports,e,e.exports,l),e.loaded=!0,e.exports}var s={};return l.m=c,l.c=s,l.p="dist/",l(0)}([function(c,l,s){"use strict";function a(h){return h&&h.__esModule?h:{default:h}}var e=Object.assign||function(h){for(var T=1;T<arguments.length;T++){var j=arguments[T];for(var n1 in j)Object.prototype.hasOwnProperty.call(j,n1)&&(h[n1]=j[n1])}return h},n=s(1),i=(a(n),s(6)),o=a(i),f=s(7),t=a(f),r=s(8),M=a(r),p=s(9),d=a(p),S=s(10),q=a(S),V=s(11),F=a(V),w=s(14),A=a(w),y=[],B=!1,g={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},O=function(){var h=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(h&&(B=!0),B)return y=(0,F.default)(y,g),(0,q.default)(y,g.once),y},U=function(){y=(0,A.default)(),O()},C=function(){y.forEach(function(h,T){h.node.removeAttribute("data-aos"),h.node.removeAttribute("data-aos-easing"),h.node.removeAttribute("data-aos-duration"),h.node.removeAttribute("data-aos-delay")})},m=function(h){return h===!0||h==="mobile"&&d.default.mobile()||h==="phone"&&d.default.phone()||h==="tablet"&&d.default.tablet()||typeof h=="function"&&h()===!0},u=function(h){g=e(g,h),y=(0,A.default)();var T=document.all&&!window.atob;return m(g.disable)||T?C():(g.disableMutationObserver||M.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),g.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",g.easing),document.querySelector("body").setAttribute("data-aos-duration",g.duration),document.querySelector("body").setAttribute("data-aos-delay",g.delay),g.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?O(!0):g.startEvent==="load"?window.addEventListener(g.startEvent,function(){O(!0)}):document.addEventListener(g.startEvent,function(){O(!0)}),window.addEventListener("resize",(0,t.default)(O,g.debounceDelay,!0)),window.addEventListener("orientationchange",(0,t.default)(O,g.debounceDelay,!0)),window.addEventListener("scroll",(0,o.default)(function(){(0,q.default)(y,g.once)},g.throttleDelay)),g.disableMutationObserver||M.default.ready("[data-aos]",U),y)};c.exports={init:u,refresh:O,refreshHard:U}},function(c,l){},,,,,function(c,l){(function(s){"use strict";function a(m,u,h){function T(x){var D=Z,t1=G;return Z=G=void 0,o1=x,P=m.apply(t1,D)}function j(x){return o1=x,k=setTimeout(C1,u),i1?T(x):P}function n1(x){var D=x-E,t1=x-o1,D2=u-D;return c1?U(D2,Y-t1):D2}function p1(x){var D=x-E,t1=x-o1;return E===void 0||D>=u||D<0||c1&&t1>=Y}function C1(){var x=C();return p1(x)?j1(x):void(k=setTimeout(C1,n1(x)))}function j1(x){return k=void 0,v&&Z?T(x):(Z=G=void 0,P)}function l2(){k!==void 0&&clearTimeout(k),o1=0,Z=E=G=k=void 0}function V1(){return k===void 0?P:j1(C())}function W(){var x=C(),D=p1(x);if(Z=arguments,G=this,E=x,D){if(k===void 0)return j(E);if(c1)return k=setTimeout(C1,u),T(E)}return k===void 0&&(k=setTimeout(C1,u)),P}var Z,G,Y,P,k,E,o1=0,i1=!1,c1=!1,v=!0;if(typeof m!="function")throw new TypeError(r);return u=f(u)||0,n(h)&&(i1=!!h.leading,c1="maxWait"in h,Y=c1?O(f(h.maxWait)||0,u):Y,v="trailing"in h?!!h.trailing:v),W.cancel=l2,W.flush=V1,W}function e(m,u,h){var T=!0,j=!0;if(typeof m!="function")throw new TypeError(r);return n(h)&&(T="leading"in h?!!h.leading:T,j="trailing"in h?!!h.trailing:j),a(m,u,{leading:T,maxWait:u,trailing:j})}function n(m){var u=typeof m>"u"?"undefined":t(m);return!!m&&(u=="object"||u=="function")}function i(m){return!!m&&(typeof m>"u"?"undefined":t(m))=="object"}function o(m){return(typeof m>"u"?"undefined":t(m))=="symbol"||i(m)&&g.call(m)==p}function f(m){if(typeof m=="number")return m;if(o(m))return M;if(n(m)){var u=typeof m.valueOf=="function"?m.valueOf():m;m=n(u)?u+"":u}if(typeof m!="string")return m===0?m:+m;m=m.replace(d,"");var h=q.test(m);return h||V.test(m)?F(m.slice(2),h?2:8):S.test(m)?M:+m}var t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(m){return typeof m}:function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},r="Expected a function",M=NaN,p="[object Symbol]",d=/^\s+|\s+$/g,S=/^[-+]0x[0-9a-f]+$/i,q=/^0b[01]+$/i,V=/^0o[0-7]+$/i,F=parseInt,w=(typeof s>"u"?"undefined":t(s))=="object"&&s&&s.Object===Object&&s,A=(typeof self>"u"?"undefined":t(self))=="object"&&self&&self.Object===Object&&self,y=w||A||Function("return this")(),B=Object.prototype,g=B.toString,O=Math.max,U=Math.min,C=function(){return y.Date.now()};c.exports=e}).call(l,function(){return this}())},function(c,l){(function(s){"use strict";function a(C,m,u){function h(v){var x=W,D=Z;return W=Z=void 0,E=v,Y=C.apply(D,x)}function T(v){return E=v,P=setTimeout(p1,m),o1?h(v):Y}function j(v){var x=v-k,D=v-E,t1=m-x;return i1?O(t1,G-D):t1}function n1(v){var x=v-k,D=v-E;return k===void 0||x>=m||x<0||i1&&D>=G}function p1(){var v=U();return n1(v)?C1(v):void(P=setTimeout(p1,j(v)))}function C1(v){return P=void 0,c1&&W?h(v):(W=Z=void 0,Y)}function j1(){P!==void 0&&clearTimeout(P),E=0,W=k=Z=P=void 0}function l2(){return P===void 0?Y:C1(U())}function V1(){var v=U(),x=n1(v);if(W=arguments,Z=this,k=v,x){if(P===void 0)return T(k);if(i1)return P=setTimeout(p1,m),h(k)}return P===void 0&&(P=setTimeout(p1,m)),Y}var W,Z,G,Y,P,k,E=0,o1=!1,i1=!1,c1=!0;if(typeof C!="function")throw new TypeError(t);return m=o(m)||0,e(u)&&(o1=!!u.leading,i1="maxWait"in u,G=i1?g(o(u.maxWait)||0,m):G,c1="trailing"in u?!!u.trailing:c1),V1.cancel=j1,V1.flush=l2,V1}function e(C){var m=typeof C>"u"?"undefined":f(C);return!!C&&(m=="object"||m=="function")}function n(C){return!!C&&(typeof C>"u"?"undefined":f(C))=="object"}function i(C){return(typeof C>"u"?"undefined":f(C))=="symbol"||n(C)&&B.call(C)==M}function o(C){if(typeof C=="number")return C;if(i(C))return r;if(e(C)){var m=typeof C.valueOf=="function"?C.valueOf():C;C=e(m)?m+"":m}if(typeof C!="string")return C===0?C:+C;C=C.replace(p,"");var u=S.test(C);return u||q.test(C)?V(C.slice(2),u?2:8):d.test(C)?r:+C}var f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(C){return typeof C}:function(C){return C&&typeof Symbol=="function"&&C.constructor===Symbol&&C!==Symbol.prototype?"symbol":typeof C},t="Expected a function",r=NaN,M="[object Symbol]",p=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,S=/^0b[01]+$/i,q=/^0o[0-7]+$/i,V=parseInt,F=(typeof s>"u"?"undefined":f(s))=="object"&&s&&s.Object===Object&&s,w=(typeof self>"u"?"undefined":f(self))=="object"&&self&&self.Object===Object&&self,A=F||w||Function("return this")(),y=Object.prototype,B=y.toString,g=Math.max,O=Math.min,U=function(){return A.Date.now()};c.exports=a}).call(l,function(){return this}())},function(c,l){"use strict";function s(f){var t=void 0,r=void 0,M=void 0;for(t=0;t<f.length;t+=1)if(r=f[t],r.dataset&&r.dataset.aos||(M=r.children&&s(r.children)))return!0;return!1}function a(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function e(){return!!a()}function n(f,t){var r=window.document,M=a(),p=new M(i);o=t,p.observe(r.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function i(f){f&&f.forEach(function(t){var r=Array.prototype.slice.call(t.addedNodes),M=Array.prototype.slice.call(t.removedNodes),p=r.concat(M);if(s(p))return o()})}Object.defineProperty(l,"__esModule",{value:!0});var o=function(){};l.default={isSupported:e,ready:n}},function(c,l){"use strict";function s(r,M){if(!(r instanceof M))throw new TypeError("Cannot call a class as a function")}function a(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(l,"__esModule",{value:!0});var e=function(){function r(M,p){for(var d=0;d<p.length;d++){var S=p[d];S.enumerable=S.enumerable||!1,S.configurable=!0,"value"in S&&(S.writable=!0),Object.defineProperty(M,S.key,S)}}return function(M,p,d){return p&&r(M.prototype,p),d&&r(M,d),M}}(),n=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,i=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,o=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,f=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,t=function(){function r(){s(this,r)}return e(r,[{key:"phone",value:function(){var M=a();return!(!n.test(M)&&!i.test(M.substr(0,4)))}},{key:"mobile",value:function(){var M=a();return!(!o.test(M)&&!f.test(M.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),r}();l.default=new t},function(c,l){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var s=function(e,n,i){var o=e.node.getAttribute("data-aos-once");n>e.position?e.node.classList.add("aos-animate"):typeof o<"u"&&(o==="false"||!i&&o!=="true")&&e.node.classList.remove("aos-animate")},a=function(e,n){var i=window.pageYOffset,o=window.innerHeight;e.forEach(function(f,t){s(f,o+i,n)})};l.default=a},function(c,l,s){"use strict";function a(o){return o&&o.__esModule?o:{default:o}}Object.defineProperty(l,"__esModule",{value:!0});var e=s(12),n=a(e),i=function(o,f){return o.forEach(function(t,r){t.node.classList.add("aos-init"),t.position=(0,n.default)(t.node,f.offset)}),o};l.default=i},function(c,l,s){"use strict";function a(o){return o&&o.__esModule?o:{default:o}}Object.defineProperty(l,"__esModule",{value:!0});var e=s(13),n=a(e),i=function(o,f){var t=0,r=0,M=window.innerHeight,p={offset:o.getAttribute("data-aos-offset"),anchor:o.getAttribute("data-aos-anchor"),anchorPlacement:o.getAttribute("data-aos-anchor-placement")};switch(p.offset&&!isNaN(p.offset)&&(r=parseInt(p.offset)),p.anchor&&document.querySelectorAll(p.anchor)&&(o=document.querySelectorAll(p.anchor)[0]),t=(0,n.default)(o).top,p.anchorPlacement){case"top-bottom":break;case"center-bottom":t+=o.offsetHeight/2;break;case"bottom-bottom":t+=o.offsetHeight;break;case"top-center":t+=M/2;break;case"bottom-center":t+=M/2+o.offsetHeight;break;case"center-center":t+=M/2+o.offsetHeight/2;break;case"top-top":t+=M;break;case"bottom-top":t+=o.offsetHeight+M;break;case"center-top":t+=o.offsetHeight/2+M}return p.anchorPlacement||p.offset||isNaN(f)||(r=f),t+r};l.default=i},function(c,l){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var s=function(a){for(var e=0,n=0;a&&!isNaN(a.offsetLeft)&&!isNaN(a.offsetTop);)e+=a.offsetLeft-(a.tagName!="BODY"?a.scrollLeft:0),n+=a.offsetTop-(a.tagName!="BODY"?a.scrollTop:0),a=a.offsetParent;return{top:n,left:e}};l.default=s},function(c,l){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var s=function(a){return a=a||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(a,function(e){return{node:e}})};l.default=s}])})});var m3=A4(z3());var L3=(()=>{let l=class l{constructor(a){this.platformId=a}ngOnInit(){a3(this.platformId)&&m3.init()}};l.\u0275fac=function(e){return new(e||l)(X(Z2))},l.\u0275cmp=h1({type:l,selectors:[["app-root"]],standalone:!0,features:[u1],decls:1,vars:0,template:function(e,n){e&1&&f1(0,"router-outlet")},dependencies:[f3]});let c=l;return c})();var M3=()=>{},S2={},B3={},E3=null,R3={mark:M3,measure:M3};try{typeof window<"u"&&(S2=window),typeof document<"u"&&(B3=document),typeof MutationObserver<"u"&&(E3=MutationObserver),typeof performance<"u"&&(R3=performance)}catch{}var{userAgent:p3=""}=S2.navigator||{},m1=S2,b=B3,C3=E3,W1=R3,E6=!!m1.document,e1=!!b.documentElement&&!!b.head&&typeof b.addEventListener=="function"&&typeof b.createElement=="function",I3=~p3.indexOf("MSIE")||~p3.indexOf("Trident/"),N="classic",_3="duotone",R="sharp",I="sharp-duotone",V4=[N,_3,R,I],P4={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},h3={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},T4=["kit"],F4=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,O4=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,q4={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},D4={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},B4={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},E4={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},R4={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},I4={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},Z3={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},_4=["solid","regular","light","thin","duotone","brands"],j3=[1,2,3,4,5,6,7,8,9,10],Z4=j3.concat([11,12,13,14,15,16,17,18,19,20]),q1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},j4=[...Object.keys(E4),..._4,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",q1.GROUP,q1.SWAP_OPACITY,q1.PRIMARY,q1.SECONDARY].concat(j3.map(c=>"".concat(c,"x"))).concat(Z4.map(c=>"w-".concat(c))),U4={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},W4={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},G4={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},u3={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},a1="___FONT_AWESOME___",r2=16,U3="fa",W3="svg-inline--fa",b1="data-fa-i2svg",z2="data-fa-pseudo-element",Y4="data-fa-pseudo-element-pending",H2="data-prefix",y2="data-icon",d3="fontawesome-i2svg",X4="async",$4=["HTML","HEAD","STYLE","SCRIPT"],G3=(()=>{try{return process.env.NODE_ENV==="production"}catch{return!1}})(),Y3=[N,R,I];function _1(c){return new Proxy(c,{get(l,s){return s in l?l[s]:l[N]}})}var X3=z({},Z3);X3[N]=z(z(z({},Z3[N]),h3.kit),h3["kit-duotone"]);var x1=_1(X3),m2=z({},I4);m2[N]=z(z(z({},m2[N]),u3.kit),u3["kit-duotone"]);var R1=_1(m2),L2=z({},R4);L2[N]=z(z({},L2[N]),G4.kit);var g1=_1(L2),M2=z({},B4);M2[N]=z(z({},M2[N]),W4.kit);var K4=_1(M2),Q4=F4,$3="fa-layers-text",J4=O4,c0=z({},P4),R6=_1(c0),l0=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],n2=q1,w1=new Set;Object.keys(R1[N]).map(w1.add.bind(w1));Object.keys(R1[R]).map(w1.add.bind(w1));Object.keys(R1[I]).map(w1.add.bind(w1));var a0=[...T4,...j4],B1=m1.FontAwesomeConfig||{};function s0(c){var l=b.querySelector("script["+c+"]");if(l)return l.getAttribute(c)}function e0(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}b&&typeof b.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(l=>{let[s,a]=l,e=e0(s0(s));e!=null&&(B1[a]=e)});var K3={styleDefault:"solid",familyDefault:"classic",cssPrefix:U3,replacementClass:W3,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};B1.familyPrefix&&(B1.cssPrefix=B1.familyPrefix);var k1=z(z({},K3),B1);k1.autoReplaceSvg||(k1.observeMutations=!1);var L={};Object.keys(K3).forEach(c=>{Object.defineProperty(L,c,{enumerable:!0,set:function(l){k1[c]=l,E1.forEach(s=>s(L))},get:function(){return k1[c]}})});Object.defineProperty(L,"familyPrefix",{enumerable:!0,set:function(c){k1.cssPrefix=c,E1.forEach(l=>l(L))},get:function(){return k1.cssPrefix}});m1.FontAwesomeConfig=L;var E1=[];function n0(c){return E1.push(c),()=>{E1.splice(E1.indexOf(c),1)}}var r1=r2,K={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function o0(c){if(!c||!e1)return;let l=b.createElement("style");l.setAttribute("type","text/css"),l.innerHTML=c;let s=b.head.childNodes,a=null;for(let e=s.length-1;e>-1;e--){let n=s[e],i=(n.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=n)}return b.head.insertBefore(l,a),c}var i0="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function I1(){let c=12,l="";for(;c-- >0;)l+=i0[Math.random()*62|0];return l}function A1(c){let l=[];for(let s=(c||[]).length>>>0;s--;)l[s]=c[s];return l}function w2(c){return c.classList?A1(c.classList):(c.getAttribute("class")||"").split(" ").filter(l=>l)}function Q3(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function t0(c){return Object.keys(c||{}).reduce((l,s)=>l+"".concat(s,'="').concat(Q3(c[s]),'" '),"").trim()}function K1(c){return Object.keys(c||{}).reduce((l,s)=>l+"".concat(s,": ").concat(c[s].trim(),";"),"")}function k2(c){return c.size!==K.size||c.x!==K.x||c.y!==K.y||c.rotate!==K.rotate||c.flipX||c.flipY}function f0(c){let{transform:l,containerWidth:s,iconWidth:a}=c,e={transform:"translate(".concat(s/2," 256)")},n="translate(".concat(l.x*32,", ").concat(l.y*32,") "),i="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),o="rotate(".concat(l.rotate," 0 0)"),f={transform:"".concat(n," ").concat(i," ").concat(o)},t={transform:"translate(".concat(a/2*-1," -256)")};return{outer:e,inner:f,path:t}}function r0(c){let{transform:l,width:s=r2,height:a=r2,startCentered:e=!1}=c,n="";return e&&I3?n+="translate(".concat(l.x/r1-s/2,"em, ").concat(l.y/r1-a/2,"em) "):e?n+="translate(calc(-50% + ".concat(l.x/r1,"em), calc(-50% + ").concat(l.y/r1,"em)) "):n+="translate(".concat(l.x/r1,"em, ").concat(l.y/r1,"em) "),n+="scale(".concat(l.size/r1*(l.flipX?-1:1),", ").concat(l.size/r1*(l.flipY?-1:1),") "),n+="rotate(".concat(l.rotate,"deg) "),n}var z0=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function J3(){let c=U3,l=W3,s=L.cssPrefix,a=L.replacementClass,e=z0;if(s!==c||a!==l){let n=new RegExp("\\.".concat(c,"\\-"),"g"),i=new RegExp("\\--".concat(c,"\\-"),"g"),o=new RegExp("\\.".concat(l),"g");e=e.replace(n,".".concat(s,"-")).replace(i,"--".concat(s,"-")).replace(o,".".concat(a))}return e}var x3=!1;function o2(){L.autoAddCss&&!x3&&(o0(J3()),x3=!0)}var m0={mixout(){return{dom:{css:J3,insertCss:o2}}},hooks(){return{beforeDOMElementCreation(){o2()},beforeI2svg(){o2()}}}},s1=m1||{};s1[a1]||(s1[a1]={});s1[a1].styles||(s1[a1].styles={});s1[a1].hooks||(s1[a1].hooks={});s1[a1].shims||(s1[a1].shims=[]);var Q=s1[a1],c4=[],l4=function(){b.removeEventListener("DOMContentLoaded",l4),X1=1,c4.map(c=>c())},X1=!1;e1&&(X1=(b.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(b.readyState),X1||b.addEventListener("DOMContentLoaded",l4));function L0(c){e1&&(X1?setTimeout(c,0):c4.push(c))}function Z1(c){let{tag:l,attributes:s={},children:a=[]}=c;return typeof c=="string"?Q3(c):"<".concat(l," ").concat(t0(s),">").concat(a.map(Z1).join(""),"</").concat(l,">")}function g3(c,l,s){if(c&&c[l]&&c[l][s])return{prefix:l,iconName:s,icon:c[l][s]}}var M0=function(l,s){return function(a,e,n,i){return l.call(s,a,e,n,i)}},i2=function(l,s,a,e){var n=Object.keys(l),i=n.length,o=e!==void 0?M0(s,e):s,f,t,r;for(a===void 0?(f=1,r=l[n[0]]):(f=0,r=a);f<i;f++)t=n[f],r=o(r,l[t],t,l);return r};function p0(c){let l=[],s=0,a=c.length;for(;s<a;){let e=c.charCodeAt(s++);if(e>=55296&&e<=56319&&s<a){let n=c.charCodeAt(s++);(n&64512)==56320?l.push(((e&1023)<<10)+(n&1023)+65536):(l.push(e),s--)}else l.push(e)}return l}function p2(c){let l=p0(c);return l.length===1?l[0].toString(16):null}function C0(c,l){let s=c.length,a=c.charCodeAt(l),e;return a>=55296&&a<=56319&&s>l+1&&(e=c.charCodeAt(l+1),e>=56320&&e<=57343)?(a-55296)*1024+e-56320+65536:a}function b3(c){return Object.keys(c).reduce((l,s)=>{let a=c[s];return!!a.icon?l[a.iconName]=a.icon:l[s]=a,l},{})}function C2(c,l){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:a=!1}=s,e=b3(l);typeof Q.hooks.addPack=="function"&&!a?Q.hooks.addPack(c,b3(l)):Q.styles[c]=z(z({},Q.styles[c]||{}),e),c==="fas"&&C2("fa",l)}var{styles:d1,shims:h0}=Q,u0={[N]:Object.values(g1[N]),[R]:Object.values(g1[R]),[I]:Object.values(g1[I])},A2=null,a4={},s4={},e4={},n4={},o4={},d0={[N]:Object.keys(x1[N]),[R]:Object.keys(x1[R]),[I]:Object.keys(x1[I])};function x0(c){return~a0.indexOf(c)}function g0(c,l){let s=l.split("-"),a=s[0],e=s.slice(1).join("-");return a===c&&e!==""&&!x0(e)?e:null}var i4=()=>{let c=a=>i2(d1,(e,n,i)=>(e[i]=i2(n,a,{}),e),{});a4=c((a,e,n)=>(e[3]&&(a[e[3]]=n),e[2]&&e[2].filter(o=>typeof o=="number").forEach(o=>{a[o.toString(16)]=n}),a)),s4=c((a,e,n)=>(a[n]=n,e[2]&&e[2].filter(o=>typeof o=="string").forEach(o=>{a[o]=n}),a)),o4=c((a,e,n)=>{let i=e[2];return a[n]=n,i.forEach(o=>{a[o]=n}),a});let l="far"in d1||L.autoFetchSvg,s=i2(h0,(a,e)=>{let n=e[0],i=e[1],o=e[2];return i==="far"&&!l&&(i="fas"),typeof n=="string"&&(a.names[n]={prefix:i,iconName:o}),typeof n=="number"&&(a.unicodes[n.toString(16)]={prefix:i,iconName:o}),a},{names:{},unicodes:{}});e4=s.names,n4=s.unicodes,A2=Q1(L.styleDefault,{family:L.familyDefault})};n0(c=>{A2=Q1(c.styleDefault,{family:L.familyDefault})});i4();function V2(c,l){return(a4[c]||{})[l]}function b0(c,l){return(s4[c]||{})[l]}function z1(c,l){return(o4[c]||{})[l]}function t4(c){return e4[c]||{prefix:null,iconName:null}}function N0(c){let l=n4[c],s=V2("fas",c);return l||(s?{prefix:"fas",iconName:s}:null)||{prefix:null,iconName:null}}function L1(){return A2}var P2=()=>({prefix:null,iconName:null,rest:[]});function Q1(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:s=N}=l,a=x1[s][c],e=R1[s][c]||R1[s][a],n=c in Q.styles?c:null;return e||n||null}var v0={[N]:Object.keys(g1[N]),[R]:Object.keys(g1[R]),[I]:Object.keys(g1[I])};function J1(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:s=!1}=l,a={[N]:"".concat(L.cssPrefix,"-").concat(N),[R]:"".concat(L.cssPrefix,"-").concat(R),[I]:"".concat(L.cssPrefix,"-").concat(I)},e=null,n=N,i=V4.filter(f=>f!==_3);i.forEach(f=>{(c.includes(a[f])||c.some(t=>v0[f].includes(t)))&&(n=f)});let o=c.reduce((f,t)=>{let r=g0(L.cssPrefix,t);if(d1[t]?(t=u0[n].includes(t)?K4[n][t]:t,e=t,f.prefix=t):d0[n].indexOf(t)>-1?(e=t,f.prefix=Q1(t,{family:n})):r?f.iconName=r:t!==L.replacementClass&&!i.some(M=>t===a[M])&&f.rest.push(t),!s&&f.prefix&&f.iconName){let M=e==="fa"?t4(f.iconName):{},p=z1(f.prefix,f.iconName);M.prefix&&(e=null),f.iconName=M.iconName||p||f.iconName,f.prefix=M.prefix||f.prefix,f.prefix==="far"&&!d1.far&&d1.fas&&!L.autoFetchSvg&&(f.prefix="fas")}return f},P2());return(c.includes("fa-brands")||c.includes("fab"))&&(o.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(o.prefix="fad"),!o.prefix&&n===R&&(d1.fass||L.autoFetchSvg)&&(o.prefix="fass",o.iconName=z1(o.prefix,o.iconName)||o.iconName),!o.prefix&&n===I&&(d1.fasds||L.autoFetchSvg)&&(o.prefix="fasds",o.iconName=z1(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||e==="fa")&&(o.prefix=L1()||"fas"),o}var h2=class{constructor(){this.definitions={}}add(){for(var l=arguments.length,s=new Array(l),a=0;a<l;a++)s[a]=arguments[a];let e=s.reduce(this._pullDefinitions,{});Object.keys(e).forEach(n=>{this.definitions[n]=z(z({},this.definitions[n]||{}),e[n]),C2(n,e[n]);let i=g1[N][n];i&&C2(i,e[n]),i4()})}reset(){this.definitions={}}_pullDefinitions(l,s){let a=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(a).map(e=>{let{prefix:n,iconName:i,icon:o}=a[e],f=o[2];l[n]||(l[n]={}),f.length>0&&f.forEach(t=>{typeof t=="string"&&(l[n][t]=o)}),l[n][i]=o}),l}},N3=[],H1={},y1={},S0=Object.keys(y1);function H0(c,l){let{mixoutsTo:s}=l;return N3=c,H1={},Object.keys(y1).forEach(a=>{S0.indexOf(a)===-1&&delete y1[a]}),N3.forEach(a=>{let e=a.mixout?a.mixout():{};if(Object.keys(e).forEach(n=>{typeof e[n]=="function"&&(s[n]=e[n]),typeof e[n]=="object"&&Object.keys(e[n]).forEach(i=>{s[n]||(s[n]={}),s[n][i]=e[n][i]})}),a.hooks){let n=a.hooks();Object.keys(n).forEach(i=>{H1[i]||(H1[i]=[]),H1[i].push(n[i])})}a.provides&&a.provides(y1)}),s}function u2(c,l){for(var s=arguments.length,a=new Array(s>2?s-2:0),e=2;e<s;e++)a[e-2]=arguments[e];return(H1[c]||[]).forEach(i=>{l=i.apply(null,[l,...a])}),l}function N1(c){for(var l=arguments.length,s=new Array(l>1?l-1:0),a=1;a<l;a++)s[a-1]=arguments[a];(H1[c]||[]).forEach(n=>{n.apply(null,s)})}function M1(){let c=arguments[0],l=Array.prototype.slice.call(arguments,1);return y1[c]?y1[c].apply(null,l):void 0}function d2(c){c.prefix==="fa"&&(c.prefix="fas");let{iconName:l}=c,s=c.prefix||L1();if(l)return l=z1(s,l)||l,g3(f4.definitions,s,l)||g3(Q.styles,s,l)}var f4=new h2,y0=()=>{L.autoReplaceSvg=!1,L.observeMutations=!1,N1("noAuto")},w0={i2svg:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return e1?(N1("beforeI2svg",c),M1("pseudoElements2svg",c),M1("i2svg",c)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:l}=c;L.autoReplaceSvg===!1&&(L.autoReplaceSvg=!0),L.observeMutations=!0,L0(()=>{A0({autoReplaceSvgRoot:l}),N1("watch",c)})}},k0={icon:c=>{if(c===null)return null;if(typeof c=="object"&&c.prefix&&c.iconName)return{prefix:c.prefix,iconName:z1(c.prefix,c.iconName)||c.iconName};if(Array.isArray(c)&&c.length===2){let l=c[1].indexOf("fa-")===0?c[1].slice(3):c[1],s=Q1(c[0]);return{prefix:s,iconName:z1(s,l)||l}}if(typeof c=="string"&&(c.indexOf("".concat(L.cssPrefix,"-"))>-1||c.match(Q4))){let l=J1(c.split(" "),{skipLookups:!0});return{prefix:l.prefix||L1(),iconName:z1(l.prefix,l.iconName)||l.iconName}}if(typeof c=="string"){let l=L1();return{prefix:l,iconName:z1(l,c)||c}}}},_={noAuto:y0,config:L,dom:w0,parse:k0,library:f4,findIconDefinition:d2,toHtml:Z1},A0=function(){let c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:l=b}=c;(Object.keys(Q.styles).length>0||L.autoFetchSvg)&&e1&&L.autoReplaceSvg&&_.dom.i2svg({node:l})};function c2(c,l){return Object.defineProperty(c,"abstract",{get:l}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(s=>Z1(s))}}),Object.defineProperty(c,"node",{get:function(){if(!e1)return;let s=b.createElement("div");return s.innerHTML=c.html,s.children}}),c}function V0(c){let{children:l,main:s,mask:a,attributes:e,styles:n,transform:i}=c;if(k2(i)&&s.found&&!a.found){let{width:o,height:f}=s,t={x:o/f/2,y:.5};e.style=K1(H(z({},n),{"transform-origin":"".concat(t.x+i.x/16,"em ").concat(t.y+i.y/16,"em")}))}return[{tag:"svg",attributes:e,children:l}]}function P0(c){let{prefix:l,iconName:s,children:a,attributes:e,symbol:n}=c,i=n===!0?"".concat(l,"-").concat(L.cssPrefix,"-").concat(s):n;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:H(z({},e),{id:i}),children:a}]}]}function T2(c){let{icons:{main:l,mask:s},prefix:a,iconName:e,transform:n,symbol:i,title:o,maskId:f,titleId:t,extra:r,watchable:M=!1}=c,{width:p,height:d}=s.found?s:l,S=a==="fak",q=[L.replacementClass,e?"".concat(L.cssPrefix,"-").concat(e):""].filter(B=>r.classes.indexOf(B)===-1).filter(B=>B!==""||!!B).concat(r.classes).join(" "),V={children:[],attributes:H(z({},r.attributes),{"data-prefix":a,"data-icon":e,class:q,role:r.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(d)})},F=S&&!~r.classes.indexOf("fa-fw")?{width:"".concat(p/d*16*.0625,"em")}:{};M&&(V.attributes[b1]=""),o&&(V.children.push({tag:"title",attributes:{id:V.attributes["aria-labelledby"]||"title-".concat(t||I1())},children:[o]}),delete V.attributes.title);let w=H(z({},V),{prefix:a,iconName:e,main:l,mask:s,maskId:f,transform:n,symbol:i,styles:z(z({},F),r.styles)}),{children:A,attributes:y}=s.found&&l.found?M1("generateAbstractMask",w)||{children:[],attributes:{}}:M1("generateAbstractIcon",w)||{children:[],attributes:{}};return w.children=A,w.attributes=y,i?P0(w):V0(w)}function v3(c){let{content:l,width:s,height:a,transform:e,title:n,extra:i,watchable:o=!1}=c,f=H(z(z({},i.attributes),n?{title:n}:{}),{class:i.classes.join(" ")});o&&(f[b1]="");let t=z({},i.styles);k2(e)&&(t.transform=r0({transform:e,startCentered:!0,width:s,height:a}),t["-webkit-transform"]=t.transform);let r=K1(t);r.length>0&&(f.style=r);let M=[];return M.push({tag:"span",attributes:f,children:[l]}),n&&M.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),M}function T0(c){let{content:l,title:s,extra:a}=c,e=H(z(z({},a.attributes),s?{title:s}:{}),{class:a.classes.join(" ")}),n=K1(a.styles);n.length>0&&(e.style=n);let i=[];return i.push({tag:"span",attributes:e,children:[l]}),s&&i.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),i}var{styles:t2}=Q;function x2(c){let l=c[0],s=c[1],[a]=c.slice(4),e=null;return Array.isArray(a)?e={tag:"g",attributes:{class:"".concat(L.cssPrefix,"-").concat(n2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(n2.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(L.cssPrefix,"-").concat(n2.PRIMARY),fill:"currentColor",d:a[1]}}]}:e={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:l,height:s,icon:e}}var F0={found:!1,width:512,height:512};function O0(c,l){!G3&&!L.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(l,'" is missing.'))}function g2(c,l){let s=l;return l==="fa"&&L.styleDefault!==null&&(l=L1()),new Promise((a,e)=>{if(s==="fa"){let n=t4(c)||{};c=n.iconName||c,l=n.prefix||l}if(c&&l&&t2[l]&&t2[l][c]){let n=t2[l][c];return a(x2(n))}O0(c,l),a(H(z({},F0),{icon:L.showMissingIcons&&c?M1("missingIconAbstract")||{}:{}}))})}var S3=()=>{},b2=L.measurePerformance&&W1&&W1.mark&&W1.measure?W1:{mark:S3,measure:S3},D1='FA "6.6.0"',q0=c=>(b2.mark("".concat(D1," ").concat(c," begins")),()=>r4(c)),r4=c=>{b2.mark("".concat(D1," ").concat(c," ends")),b2.measure("".concat(D1," ").concat(c),"".concat(D1," ").concat(c," begins"),"".concat(D1," ").concat(c," ends"))},F2={begin:q0,end:r4},G1=()=>{};function H3(c){return typeof(c.getAttribute?c.getAttribute(b1):null)=="string"}function D0(c){let l=c.getAttribute?c.getAttribute(H2):null,s=c.getAttribute?c.getAttribute(y2):null;return l&&s}function B0(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(L.replacementClass)}function E0(){return L.autoReplaceSvg===!0?Y1.replace:Y1[L.autoReplaceSvg]||Y1.replace}function R0(c){return b.createElementNS("http://www.w3.org/2000/svg",c)}function I0(c){return b.createElement(c)}function z4(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:s=c.tag==="svg"?R0:I0}=l;if(typeof c=="string")return b.createTextNode(c);let a=s(c.tag);return Object.keys(c.attributes||[]).forEach(function(n){a.setAttribute(n,c.attributes[n])}),(c.children||[]).forEach(function(n){a.appendChild(z4(n,{ceFn:s}))}),a}function _0(c){let l=" ".concat(c.outerHTML," ");return l="".concat(l,"Font Awesome fontawesome.com "),l}var Y1={replace:function(c){let l=c[0];if(l.parentNode)if(c[1].forEach(s=>{l.parentNode.insertBefore(z4(s),l)}),l.getAttribute(b1)===null&&L.keepOriginalSource){let s=b.createComment(_0(l));l.parentNode.replaceChild(s,l)}else l.remove()},nest:function(c){let l=c[0],s=c[1];if(~w2(l).indexOf(L.replacementClass))return Y1.replace(c);let a=new RegExp("".concat(L.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){let n=s[0].attributes.class.split(" ").reduce((i,o)=>(o===L.replacementClass||o.match(a)?i.toSvg.push(o):i.toNode.push(o),i),{toNode:[],toSvg:[]});s[0].attributes.class=n.toSvg.join(" "),n.toNode.length===0?l.removeAttribute("class"):l.setAttribute("class",n.toNode.join(" "))}let e=s.map(n=>Z1(n)).join(`
`);l.setAttribute(b1,""),l.innerHTML=e}};function y3(c){c()}function m4(c,l){let s=typeof l=="function"?l:G1;if(c.length===0)s();else{let a=y3;L.mutateApproach===X4&&(a=m1.requestAnimationFrame||y3),a(()=>{let e=E0(),n=F2.begin("mutate");c.map(e),n(),s()})}}var O2=!1;function L4(){O2=!0}function N2(){O2=!1}var $1=null;function w3(c){if(!C3||!L.observeMutations)return;let{treeCallback:l=G1,nodeCallback:s=G1,pseudoElementsCallback:a=G1,observeMutationsRoot:e=b}=c;$1=new C3(n=>{if(O2)return;let i=L1();A1(n).forEach(o=>{if(o.type==="childList"&&o.addedNodes.length>0&&!H3(o.addedNodes[0])&&(L.searchPseudoElements&&a(o.target),l(o.target)),o.type==="attributes"&&o.target.parentNode&&L.searchPseudoElements&&a(o.target.parentNode),o.type==="attributes"&&H3(o.target)&&~l0.indexOf(o.attributeName))if(o.attributeName==="class"&&D0(o.target)){let{prefix:f,iconName:t}=J1(w2(o.target));o.target.setAttribute(H2,f||i),t&&o.target.setAttribute(y2,t)}else B0(o.target)&&s(o.target)})}),e1&&$1.observe(e,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Z0(){$1&&$1.disconnect()}function j0(c){let l=c.getAttribute("style"),s=[];return l&&(s=l.split(";").reduce((a,e)=>{let n=e.split(":"),i=n[0],o=n.slice(1);return i&&o.length>0&&(a[i]=o.join(":").trim()),a},{})),s}function U0(c){let l=c.getAttribute("data-prefix"),s=c.getAttribute("data-icon"),a=c.innerText!==void 0?c.innerText.trim():"",e=J1(w2(c));return e.prefix||(e.prefix=L1()),l&&s&&(e.prefix=l,e.iconName=s),e.iconName&&e.prefix||(e.prefix&&a.length>0&&(e.iconName=b0(e.prefix,c.innerText)||V2(e.prefix,p2(c.innerText))),!e.iconName&&L.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(e.iconName=c.firstChild.data)),e}function W0(c){let l=A1(c.attributes).reduce((e,n)=>(e.name!=="class"&&e.name!=="style"&&(e[n.name]=n.value),e),{}),s=c.getAttribute("title"),a=c.getAttribute("data-fa-title-id");return L.autoA11y&&(s?l["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(a||I1()):(l["aria-hidden"]="true",l.focusable="false")),l}function G0(){return{iconName:null,title:null,titleId:null,prefix:null,transform:K,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function k3(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:s,prefix:a,rest:e}=U0(c),n=W0(c),i=u2("parseNodeAttributes",{},c),o=l.styleParser?j0(c):[];return z({iconName:s,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:a,transform:K,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:e,styles:o,attributes:n}},i)}var{styles:Y0}=Q;function M4(c){let l=L.autoReplaceSvg==="nest"?k3(c,{styleParser:!1}):k3(c);return~l.extra.classes.indexOf($3)?M1("generateLayersText",c,l):M1("generateSvgReplacementMutation",c,l)}var J=new Set;Y3.map(c=>{J.add("fa-".concat(c))});Object.keys(x1[N]).map(J.add.bind(J));Object.keys(x1[R]).map(J.add.bind(J));Object.keys(x1[I]).map(J.add.bind(J));J=[...J];function A3(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!e1)return Promise.resolve();let s=b.documentElement.classList,a=r=>s.add("".concat(d3,"-").concat(r)),e=r=>s.remove("".concat(d3,"-").concat(r)),n=L.autoFetchSvg?J:Y3.map(r=>"fa-".concat(r)).concat(Object.keys(Y0));n.includes("fa")||n.push("fa");let i=[".".concat($3,":not([").concat(b1,"])")].concat(n.map(r=>".".concat(r,":not([").concat(b1,"])"))).join(", ");if(i.length===0)return Promise.resolve();let o=[];try{o=A1(c.querySelectorAll(i))}catch{}if(o.length>0)a("pending"),e("complete");else return Promise.resolve();let f=F2.begin("onTree"),t=o.reduce((r,M)=>{try{let p=M4(M);p&&r.push(p)}catch(p){G3||p.name==="MissingIcon"&&console.error(p)}return r},[]);return new Promise((r,M)=>{Promise.all(t).then(p=>{m4(p,()=>{a("active"),a("complete"),e("pending"),typeof l=="function"&&l(),f(),r()})}).catch(p=>{f(),M(p)})})}function X0(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;M4(c).then(s=>{s&&m4([s],l)})}function $0(c){return function(l){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(l||{}).icon?l:d2(l||{}),{mask:e}=s;return e&&(e=(e||{}).icon?e:d2(e||{})),c(a,H(z({},s),{mask:e}))}}var K0=function(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:s=K,symbol:a=!1,mask:e=null,maskId:n=null,title:i=null,titleId:o=null,classes:f=[],attributes:t={},styles:r={}}=l;if(!c)return;let{prefix:M,iconName:p,icon:d}=c;return c2(z({type:"icon"},c),()=>(N1("beforeDOMElementCreation",{iconDefinition:c,params:l}),L.autoA11y&&(i?t["aria-labelledby"]="".concat(L.replacementClass,"-title-").concat(o||I1()):(t["aria-hidden"]="true",t.focusable="false")),T2({icons:{main:x2(d),mask:e?x2(e.icon):{found:!1,width:null,height:null,icon:{}}},prefix:M,iconName:p,transform:z(z({},K),s),symbol:a,title:i,maskId:n,titleId:o,extra:{attributes:t,styles:r,classes:f}})))},Q0={mixout(){return{icon:$0(K0)}},hooks(){return{mutationObserverCallbacks(c){return c.treeCallback=A3,c.nodeCallback=X0,c}}},provides(c){c.i2svg=function(l){let{node:s=b,callback:a=()=>{}}=l;return A3(s,a)},c.generateSvgReplacementMutation=function(l,s){let{iconName:a,title:e,titleId:n,prefix:i,transform:o,symbol:f,mask:t,maskId:r,extra:M}=s;return new Promise((p,d)=>{Promise.all([g2(a,i),t.iconName?g2(t.iconName,t.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(S=>{let[q,V]=S;p([l,T2({icons:{main:q,mask:V},prefix:i,iconName:a,transform:o,symbol:f,maskId:r,title:e,titleId:n,extra:M,watchable:!0})])}).catch(d)})},c.generateAbstractIcon=function(l){let{children:s,attributes:a,main:e,transform:n,styles:i}=l,o=K1(i);o.length>0&&(a.style=o);let f;return k2(n)&&(f=M1("generateAbstractTransformGrouping",{main:e,transform:n,containerWidth:e.width,iconWidth:e.width})),s.push(f||e.icon),{children:s,attributes:a}}}},J0={mixout(){return{layer(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:s=[]}=l;return c2({type:"layer"},()=>{N1("beforeDOMElementCreation",{assembler:c,params:l});let a=[];return c(e=>{Array.isArray(e)?e.map(n=>{a=a.concat(n.abstract)}):a=a.concat(e.abstract)}),[{tag:"span",attributes:{class:["".concat(L.cssPrefix,"-layers"),...s].join(" ")},children:a}]})}}}},c6={mixout(){return{counter(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:s=null,classes:a=[],attributes:e={},styles:n={}}=l;return c2({type:"counter",content:c},()=>(N1("beforeDOMElementCreation",{content:c,params:l}),T0({content:c.toString(),title:s,extra:{attributes:e,styles:n,classes:["".concat(L.cssPrefix,"-layers-counter"),...a]}})))}}}},l6={mixout(){return{text(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:s=K,title:a=null,classes:e=[],attributes:n={},styles:i={}}=l;return c2({type:"text",content:c},()=>(N1("beforeDOMElementCreation",{content:c,params:l}),v3({content:c,transform:z(z({},K),s),title:a,extra:{attributes:n,styles:i,classes:["".concat(L.cssPrefix,"-layers-text"),...e]}})))}}},provides(c){c.generateLayersText=function(l,s){let{title:a,transform:e,extra:n}=s,i=null,o=null;if(I3){let f=parseInt(getComputedStyle(l).fontSize,10),t=l.getBoundingClientRect();i=t.width/f,o=t.height/f}return L.autoA11y&&!a&&(n.attributes["aria-hidden"]="true"),Promise.resolve([l,v3({content:l.innerHTML,width:i,height:o,transform:e,title:a,extra:n,watchable:!0})])}}},a6=new RegExp('"',"ug"),V3=[1105920,1112319],P3=z(z(z({FontAwesome:{normal:"fas",400:"fas"}},D4),q4),U4),v2=Object.keys(P3).reduce((c,l)=>(c[l.toLowerCase()]=P3[l],c),{}),s6=Object.keys(v2).reduce((c,l)=>{let s=v2[l];return c[l]=s[900]||[...Object.entries(s)][0][1],c},{});function e6(c){let l=c.replace(a6,""),s=C0(l,0),a=s>=V3[0]&&s<=V3[1],e=l.length===2?l[0]===l[1]:!1;return{value:p2(e?l[0]:l),isSecondary:a||e}}function n6(c,l){let s=c.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(l),e=isNaN(a)?"normal":a;return(v2[s]||{})[e]||s6[s]}function T3(c,l){let s="".concat(Y4).concat(l.replace(":","-"));return new Promise((a,e)=>{if(c.getAttribute(s)!==null)return a();let i=A1(c.children).filter(p=>p.getAttribute(z2)===l)[0],o=m1.getComputedStyle(c,l),f=o.getPropertyValue("font-family"),t=f.match(J4),r=o.getPropertyValue("font-weight"),M=o.getPropertyValue("content");if(i&&!t)return c.removeChild(i),a();if(t&&M!=="none"&&M!==""){let p=o.getPropertyValue("content"),d=n6(f,r),{value:S,isSecondary:q}=e6(p),V=t[0].startsWith("FontAwesome"),F=V2(d,S),w=F;if(V){let A=N0(S);A.iconName&&A.prefix&&(F=A.iconName,d=A.prefix)}if(F&&!q&&(!i||i.getAttribute(H2)!==d||i.getAttribute(y2)!==w)){c.setAttribute(s,w),i&&c.removeChild(i);let A=G0(),{extra:y}=A;y.attributes[z2]=l,g2(F,d).then(B=>{let g=T2(H(z({},A),{icons:{main:B,mask:P2()},prefix:d,iconName:w,extra:y,watchable:!0})),O=b.createElementNS("http://www.w3.org/2000/svg","svg");l==="::before"?c.insertBefore(O,c.firstChild):c.appendChild(O),O.outerHTML=g.map(U=>Z1(U)).join(`
`),c.removeAttribute(s),a()}).catch(e)}else a()}else a()})}function o6(c){return Promise.all([T3(c,"::before"),T3(c,"::after")])}function i6(c){return c.parentNode!==document.head&&!~$4.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(z2)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function F3(c){if(e1)return new Promise((l,s)=>{let a=A1(c.querySelectorAll("*")).filter(i6).map(o6),e=F2.begin("searchPseudoElements");L4(),Promise.all(a).then(()=>{e(),N2(),l()}).catch(()=>{e(),N2(),s()})})}var t6={hooks(){return{mutationObserverCallbacks(c){return c.pseudoElementsCallback=F3,c}}},provides(c){c.pseudoElements2svg=function(l){let{node:s=b}=l;L.searchPseudoElements&&F3(s)}}},O3=!1,f6={mixout(){return{dom:{unwatch(){L4(),O3=!0}}}},hooks(){return{bootstrap(){w3(u2("mutationObserverCallbacks",{}))},noAuto(){Z0()},watch(c){let{observeMutationsRoot:l}=c;O3?N2():w3(u2("mutationObserverCallbacks",{observeMutationsRoot:l}))}}}},q3=c=>{let l={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return c.toLowerCase().split(" ").reduce((s,a)=>{let e=a.toLowerCase().split("-"),n=e[0],i=e.slice(1).join("-");if(n&&i==="h")return s.flipX=!0,s;if(n&&i==="v")return s.flipY=!0,s;if(i=parseFloat(i),isNaN(i))return s;switch(n){case"grow":s.size=s.size+i;break;case"shrink":s.size=s.size-i;break;case"left":s.x=s.x-i;break;case"right":s.x=s.x+i;break;case"up":s.y=s.y-i;break;case"down":s.y=s.y+i;break;case"rotate":s.rotate=s.rotate+i;break}return s},l)},r6={mixout(){return{parse:{transform:c=>q3(c)}}},hooks(){return{parseNodeAttributes(c,l){let s=l.getAttribute("data-fa-transform");return s&&(c.transform=q3(s)),c}}},provides(c){c.generateAbstractTransformGrouping=function(l){let{main:s,transform:a,containerWidth:e,iconWidth:n}=l,i={transform:"translate(".concat(e/2," 256)")},o="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),t="rotate(".concat(a.rotate," 0 0)"),r={transform:"".concat(o," ").concat(f," ").concat(t)},M={transform:"translate(".concat(n/2*-1," -256)")},p={outer:i,inner:r,path:M};return{tag:"g",attributes:z({},p.outer),children:[{tag:"g",attributes:z({},p.inner),children:[{tag:s.icon.tag,children:s.icon.children,attributes:z(z({},s.icon.attributes),p.path)}]}]}}}},f2={x:0,y:0,width:"100%",height:"100%"};function D3(c){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||l)&&(c.attributes.fill="black"),c}function z6(c){return c.tag==="g"?c.children:[c]}var m6={hooks(){return{parseNodeAttributes(c,l){let s=l.getAttribute("data-fa-mask"),a=s?J1(s.split(" ").map(e=>e.trim())):P2();return a.prefix||(a.prefix=L1()),c.mask=a,c.maskId=l.getAttribute("data-fa-mask-id"),c}}},provides(c){c.generateAbstractMask=function(l){let{children:s,attributes:a,main:e,mask:n,maskId:i,transform:o}=l,{width:f,icon:t}=e,{width:r,icon:M}=n,p=f0({transform:o,containerWidth:r,iconWidth:f}),d={tag:"rect",attributes:H(z({},f2),{fill:"white"})},S=t.children?{children:t.children.map(D3)}:{},q={tag:"g",attributes:z({},p.inner),children:[D3(z({tag:t.tag,attributes:z(z({},t.attributes),p.path)},S))]},V={tag:"g",attributes:z({},p.outer),children:[q]},F="mask-".concat(i||I1()),w="clip-".concat(i||I1()),A={tag:"mask",attributes:H(z({},f2),{id:F,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[d,V]},y={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:z6(M)},A]};return s.push(y,{tag:"rect",attributes:z({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(F,")")},f2)}),{children:s,attributes:a}}}},L6={provides(c){let l=!1;m1.matchMedia&&(l=m1.matchMedia("(prefers-reduced-motion: reduce)").matches),c.missingIconAbstract=function(){let s=[],a={fill:"currentColor"},e={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};s.push({tag:"path",attributes:H(z({},a),{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let n=H(z({},e),{attributeName:"opacity"}),i={tag:"circle",attributes:H(z({},a),{cx:"256",cy:"364",r:"28"}),children:[]};return l||i.children.push({tag:"animate",attributes:H(z({},e),{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:H(z({},n),{values:"1;0;1;1;0;1;"})}),s.push(i),s.push({tag:"path",attributes:H(z({},a),{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:l?[]:[{tag:"animate",attributes:H(z({},n),{values:"1;0;0;0;0;1;"})}]}),l||s.push({tag:"path",attributes:H(z({},a),{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:H(z({},n),{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:s}}}},M6={hooks(){return{parseNodeAttributes(c,l){let s=l.getAttribute("data-fa-symbol"),a=s===null?!1:s===""?!0:s;return c.symbol=a,c}}}},p6=[m0,Q0,J0,c6,l6,t6,f6,r6,m6,L6,M6];H0(p6,{mixoutsTo:_});var I6=_.noAuto,_6=_.config,Z6=_.library,j6=_.dom,p4=_.parse,U6=_.findIconDefinition,W6=_.toHtml,C4=_.icon,G6=_.layer,C6=_.text,h6=_.counter;var u6=["*"],d6=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},x6=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},g6=c=>{let l={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(l).map(s=>l[s]?s:null).filter(s=>s)},b6=c=>c.prefix!==void 0&&c.iconName!==void 0,N6=(c,l)=>b6(c)?c:typeof c=="string"?{prefix:l,iconName:c}:{prefix:c[0],iconName:c[1]},v6=(()=>{let l=class l{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};l.\u0275fac=function(e){return new(e||l)},l.\u0275prov=a2({token:l,factory:l.\u0275fac,providedIn:"root"});let c=l;return c})(),S6=(()=>{let l=class l{constructor(){this.definitions={}}addIcons(...a){for(let e of a){e.prefix in this.definitions||(this.definitions[e.prefix]={}),this.definitions[e.prefix][e.iconName]=e;for(let n of e.icon[2])typeof n=="string"&&(this.definitions[e.prefix][n]=e)}}addIconPacks(...a){for(let e of a){let n=Object.keys(e).map(i=>e[i]);this.addIcons(...n)}}getIconDefinition(a,e){return a in this.definitions&&e in this.definitions[a]?this.definitions[a][e]:null}};l.\u0275fac=function(e){return new(e||l)},l.\u0275prov=a2({token:l,factory:l.\u0275fac,providedIn:"root"});let c=l;return c})(),H6=(()=>{let l=class l{constructor(){this.stackItemSize="1x"}ngOnChanges(a){if("size"in a)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};l.\u0275fac=function(e){return new(e||l)},l.\u0275dir=R2({type:l,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[U1]});let c=l;return c})(),y6=(()=>{let l=class l{constructor(a,e){this.renderer=a,this.elementRef=e}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(a){"size"in a&&(a.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${a.size.currentValue}`),a.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${a.size.previousValue}`))}};l.\u0275fac=function(e){return new(e||l)(X(W2),X(_2))},l.\u0275cmp=h1({type:l,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[U1,u1],ngContentSelectors:u6,decls:1,vars:0,template:function(e,n){e&1&&(Q2(),J2(0))},encapsulation:2});let c=l;return c})(),h4=(()=>{let l=class l{set spin(a){this.animation=a?"spin":void 0}set pulse(a){this.animation=a?"spin-pulse":void 0}constructor(a,e,n,i,o){this.sanitizer=a,this.config=e,this.iconLibrary=n,this.stackItem=i,this.classes=[],o!=null&&i==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(a){if(this.icon==null&&this.config.fallbackIcon==null){x6();return}if(a){let e=this.icon!=null?this.icon:this.config.fallbackIcon,n=this.findIconDefinition(e);if(n!=null){let i=this.buildParams();this.renderIcon(n,i)}}}render(){this.ngOnChanges({})}findIconDefinition(a){let e=N6(a,this.config.defaultPrefix);if("icon"in e)return e;let n=this.iconLibrary.getIconDefinition(e.prefix,e.iconName);return n??(d6(e),null)}buildParams(){let a={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},e=typeof this.transform=="string"?p4.transform(this.transform):this.transform;return{title:this.title,transform:e,classes:[...g6(a),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(a,e){let n=C4(a,e);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(n.html.join(`
`))}};l.\u0275fac=function(e){return new(e||l)(X(n3),X(v6),X(S6),X(H6,8),X(y6,8))},l.\u0275cmp=h1({type:l,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(e,n){e&2&&(K2("innerHTML",n.renderedIconHTML,j2),G2("title",n.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[U1,u1],decls:0,vars:0,template:function(e,n){},encapsulation:2});let c=l;return c})();var u4=(()=>{let l=class l{};l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=E2({type:l}),l.\u0275inj=B2({});let c=l;return c})();var k6={prefix:"fas",iconName:"map-location-dot",icon:[576,512,["map-marked-alt"],"f5a0","M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152l0 270.8c0 9.8-6 18.6-15.1 22.3L416 503l0-302.6zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6l0 251.4L32.9 502.7C17.1 509 0 497.4 0 480.4L0 209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77l0 249.3L192 449.4 192 255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"]},d4=k6;var x4={prefix:"fas",iconName:"phone-volume",icon:[512,512,["volume-control-phone"],"f2a0","M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"]};var g4={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]};var q2={prefix:"fas",iconName:"utensils",icon:[448,512,[127860,61685,"cutlery"],"f2e7","M416 0C400 0 288 32 288 176l0 112c0 35.3 28.7 64 64 64l32 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 0-112 0-208c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7L80 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-224.4c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16l0 134.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8L64 16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"]};var b4={prefix:"fab",iconName:"facebook-f",icon:[320,512,[],"f39e","M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"]};var N4={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]};var v4=(()=>{let l=class l{transform(a){switch(a){case"faEnvelope":return g4;case"faFacebookF":return b4;case"faInstagram":return N4;case"faMapMarkedAlt":return d4;case"faPhoneVolume":return x4;case"faUtensils":return q2;default:return q2}}};l.\u0275fac=function(e){return new(e||l)},l.\u0275pipe=I2({name:"convertStringLabelToFontawesomeIcon",type:l,pure:!0,standalone:!0});let c=l;return c})();function A6(c,l){if(c&1&&($(0,"a",12),f1(1,"fa-icon",7),T1(2,"convertStringLabelToFontawesomeIcon"),l1()),c&2){let s=l.$implicit;c3("href",s.link,U2),v1(),P1("icon",F1(2,2,s.icon))}}var S4=(()=>{let l=class l{constructor(){this.networks=[{icon:"faInstagram",link:"https://www.instagram.com/lesopranovesinet?igsh=bG8xOGE2ZjZmNWRn"},{icon:"faFacebookF",link:"https://m.facebook.com/LeSopranoVesinet"}]}};l.\u0275fac=function(e){return new(e||l)},l.\u0275cmp=h1({type:l,selectors:[["app-coming-soon"]],standalone:!0,features:[u1],decls:25,vars:9,consts:[[1,"coming-soon"],[1,"content","my-container"],[1,"logo-wrapper"],["ngSrc","../../../assets/img/logo-soprano-vesinet.png","alt","Logo du restaurant italien Soprano Vesinet","fill","","priority",""],["data-aos","fade-up","data-aos-duration","800"],["data-aos","fade-up","data-aos-delay","200","data-aos-duration","1000"],["data-aos","fade-up","data-aos-delay","300","data-aos-duration","1000","data-aos-offset","0",1,"location"],[3,"icon"],[1,"actions"],["href","tel:+33123456789","data-aos","fade-right","data-aos-delay","800","data-aos-duration","1000","data-aos-offset","10",1,"phone"],["target","_blank","href","../../../assets/pdf/carte-restaurant-soprano-vesinet.pdf","data-aos","fade-left","data-aos-delay","800","data-aos-duration","1000","data-aos-offset","20",1,"card"],[1,"networks"],["target","_blank",1,"network",3,"href"]],template:function(e,n){e&1&&($(0,"div",0)(1,"div",1)(2,"div",2),f1(3,"img",3),l1(),$(4,"p",4),S1(5," Notre site internet est en cours de r\xE9novation pour mieux vous servir ! "),l1(),$(6,"p",5),S1(7," En attendant, venez d\xE9couvrir nos plats et partagez un moment convivial et une ambiance chaleureuse avec nous. Notre restaurant vous accueille toujours avec plaisir. "),l1(),$(8,"div",6),f1(9,"fa-icon",7),T1(10,"convertStringLabelToFontawesomeIcon"),$(11,"span"),S1(12," 19 Rue Jean Laurent, 78110 Le V\xE9sinet "),l1()(),$(13,"div",8)(14,"a",9),f1(15,"fa-icon",7),T1(16,"convertStringLabelToFontawesomeIcon"),S1(17," +33 1 39 76 85 78 "),l1(),$(18,"a",10),f1(19,"fa-icon",7),T1(20,"convertStringLabelToFontawesomeIcon"),S1(21," D\xE9couvrir La Carte "),l1()(),$(22,"div",11),X2(23,A6,3,4,"a",12,Y2),l1()()()),e&2&&(v1(9),P1("icon",F1(10,3,"faMapMarkedAlt")),v1(6),P1("icon",F1(16,5,"faPhoneVolume")),v1(4),P1("icon",F1(20,7,"faUtensils")),v1(4),$2(n.networks))},dependencies:[s3,u4,h4,v4],styles:[".coming-soon[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%;height:100vh}.coming-soon[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;height:100%}.coming-soon[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]{position:relative;width:200px;height:125px;margin-bottom:5rem}.coming-soon[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.coming-soon[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.1rem;line-height:1.8rem;color:var(--project-white-primary-color);text-align:center;max-width:900px;margin-bottom:.7rem}.coming-soon[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:2rem;align-items:center;justify-content:center;margin-top:2rem;margin-bottom:2rem}.coming-soon[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%], .coming-soon[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:1rem;text-decoration:none;transition:all .3s ease-in-out;padding:10px 25px}.coming-soon[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%], .coming-soon[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:1.4rem}.coming-soon[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]{background-color:var(--project-red-primary-color);color:var(--project-white-primary-color)}.coming-soon[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]:hover{background-color:var(--project-red-secondary-color);color:var(--project-white-primary-color)}.coming-soon[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{flex-direction:row-reverse;box-shadow:0 2px 1px var(--project-gold-primary-color);background-color:var(--project-black-secondary-color);color:var(--project-white-primary-color)}.coming-soon[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover{background-color:var(--project-gold-primary-color);color:var(--project-black-primary-color)}.coming-soon[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem;color:var(--project-white-primary-color);margin-top:2rem;margin-bottom:1rem}.coming-soon[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:1.3rem}.coming-soon[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.1rem}.coming-soon[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .networks[_ngcontent-%COMP%]{display:flex;gap:1rem}.coming-soon[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .networks[_ngcontent-%COMP%]   .network[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:50%;border:2px solid var(--project-white-secondary-color);background-color:transparent;transition:all .3s ease-in-out;text-decoration:none;color:var(--project-white-secondary-color)}.coming-soon[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .networks[_ngcontent-%COMP%]   .network[_ngcontent-%COMP%]:hover{background-color:var(--project-gold-primary-color);color:var(--project-black-primary-color);border:2px solid transparent}.coming-soon[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .networks[_ngcontent-%COMP%]   .network[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:1.3rem}@media all and (max-width: 550px){.coming-soon[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .logo-wrapper[_ngcontent-%COMP%]{width:150px;height:90px;margin-bottom:4rem}.coming-soon[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem;line-height:1.8rem;margin-bottom:.7rem}.coming-soon[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{gap:1rem;margin-top:2rem;margin-bottom:4rem;flex-direction:column}.coming-soon[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%], .coming-soon[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{display:flex;text-decoration:none}.coming-soon[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%], .coming-soon[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:1.2rem}.coming-soon[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{flex-direction:row}.coming-soon[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:1.2rem}.coming-soon[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1rem}.coming-soon[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .networks[_ngcontent-%COMP%]{display:flex;gap:1rem}.coming-soon[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .networks[_ngcontent-%COMP%]   .network[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:50%;border:2px solid var(--project-white-secondary-color);background-color:transparent;transition:all .3s ease-in-out;text-decoration:none;color:var(--project-white-secondary-color)}.coming-soon[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .networks[_ngcontent-%COMP%]   .network[_ngcontent-%COMP%]:hover{background-color:var(--project-gold-primary-color);color:var(--project-black-primary-color);border:2px solid transparent}.coming-soon[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .networks[_ngcontent-%COMP%]   .network[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:1.3rem}}"]});let c=l;return c})();var H4=[{path:"",component:S4},{path:"**",redirectTo:"/",pathMatch:"full"}];var y4={providers:[r3(H4),i3(),o3()]};var V6={providers:[t3()]},w4=l3(y4,V6);var P6=()=>e3(L3,w4),v8=P6;export{v8 as a};
