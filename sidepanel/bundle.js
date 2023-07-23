var App=function(){"use strict";function e(){}const t=e=>e;function n(e){return e()}function s(){return Object.create(null)}function r(e){e.forEach(n)}function i(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let a;function c(e,t){return a||(a=document.createElement("a")),a.href=t,e===a.href}const l="undefined"!=typeof window;let u=l?()=>window.performance.now():()=>Date.now(),h=l?e=>requestAnimationFrame(e):e;const d=new Set;function f(e){d.forEach((t=>{t.c(e)||(d.delete(t),t.f())})),0!==d.size&&h(f)}function p(e){let t;return 0===d.size&&h(f),{promise:new Promise((n=>{d.add(t={c:e,f:n})})),abort(){d.delete(t)}}}function g(e,t){e.appendChild(t)}function m(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function A(e){const t=b("style");return function(e,t){g(e.head||e,t),t.sheet}(m(e),t),t.sheet}function v(e,t,n){e.insertBefore(t,n||null)}function w(e){e.parentNode&&e.parentNode.removeChild(e)}function y(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function b(e){return document.createElement(e)}function I(e){return document.createTextNode(e)}function E(){return I(" ")}function T(){return I("")}function C(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function k(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function S(e,t){t=""+t,e.data!==t&&(e.data=t)}function R(e,t){e.value=null==t?"":t}function D(e,t,n,s){null==n?e.style.removeProperty(t):e.style.setProperty(t,n,s?"important":"")}function N(e,t,{bubbles:n=!1,cancelable:s=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,s,t),r}const U=new Map;let x,_=0;function O(e,t,n,s,r,i,o,a=0){const c=16.666/s;let l="{\n";for(let e=0;e<=1;e+=c){const s=t+(n-t)*i(e);l+=100*e+`%{${o(s,1-s)}}\n`}const u=l+`100% {${o(n,1-n)}}\n}`,h=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(u)}_${a}`,d=m(e),{stylesheet:f,rules:p}=U.get(d)||function(e,t){const n={stylesheet:A(t),rules:{}};return U.set(e,n),n}(d,e);p[h]||(p[h]=!0,f.insertRule(`@keyframes ${h} ${u}`,f.cssRules.length));const g=e.style.animation||"";return e.style.animation=`${g?`${g}, `:""}${h} ${s}ms linear ${r}ms 1 both`,_+=1,h}function L(e,t){const n=(e.style.animation||"").split(", "),s=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),r=n.length-s.length;r&&(e.style.animation=s.join(", "),_-=r,_||h((()=>{_||(U.forEach((e=>{const{ownerNode:t}=e.stylesheet;t&&w(t)})),U.clear())})))}function M(e){x=e}function P(){if(!x)throw new Error("Function called outside component initialization");return x}function B(e){P().$$.on_mount.push(e)}function F(){const e=P();return(t,n,{cancelable:s=!1}={})=>{const r=e.$$.callbacks[t];if(r){const i=N(t,n,{cancelable:s});return r.slice().forEach((t=>{t.call(e,i)})),!i.defaultPrevented}return!0}}function V(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach((e=>e.call(this,t)))}const $=[],j=[];let G=[];const K=[],Q=Promise.resolve();let q=!1;function W(e){G.push(e)}function z(e){K.push(e)}const H=new Set;let J,X=0;function Y(){if(0!==X)return;const e=x;do{try{for(;X<$.length;){const e=$[X];X++,M(e),Z(e.$$)}}catch(e){throw $.length=0,X=0,e}for(M(null),$.length=0,X=0;j.length;)j.pop()();for(let e=0;e<G.length;e+=1){const t=G[e];H.has(t)||(H.add(t),t())}G.length=0}while($.length);for(;K.length;)K.pop()();q=!1,H.clear(),M(e)}function Z(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(W)}}function ee(){return J||(J=Promise.resolve(),J.then((()=>{J=null}))),J}function te(e,t,n){e.dispatchEvent(N(`${t?"intro":"outro"}${n}`))}const ne=new Set;let se;function re(){se={r:0,c:[],p:se}}function ie(){se.r||r(se.c),se=se.p}function oe(e,t){e&&e.i&&(ne.delete(e),e.i(t))}function ae(e,t,n,s){if(e&&e.o){if(ne.has(e))return;ne.add(e),se.c.push((()=>{ne.delete(e),s&&(n&&e.d(1),s())})),e.o(t)}else s&&s()}const ce={duration:0};function le(n,s,r){const o={direction:"in"};let a,c,l=s(n,r,o),h=!1,d=0;function f(){a&&L(n,a)}function g(){const{delay:s=0,duration:r=300,easing:i=t,tick:o=e,css:g}=l||ce;g&&(a=O(n,0,1,r,s,i,g,d++)),o(0,1);const m=u()+s,A=m+r;c&&c.abort(),h=!0,W((()=>te(n,!0,"start"))),c=p((e=>{if(h){if(e>=A)return o(1,0),te(n,!0,"end"),f(),h=!1;if(e>=m){const t=i((e-m)/r);o(t,1-t)}}return h}))}let m=!1;return{start(){m||(m=!0,L(n),i(l)?(l=l(o),ee().then(g)):g())},invalidate(){m=!1},end(){h&&(f(),h=!1)}}}function ue(n,s,o){const a={direction:"out"};let c,l=s(n,o,a),h=!0;const d=se;function f(){const{delay:s=0,duration:i=300,easing:o=t,tick:a=e,css:f}=l||ce;f&&(c=O(n,1,0,i,s,o,f));const g=u()+s,m=g+i;W((()=>te(n,!1,"start"))),p((e=>{if(h){if(e>=m)return a(0,1),te(n,!1,"end"),--d.r||r(d.c),!1;if(e>=g){const t=o((e-g)/i);a(1-t,t)}}return h}))}return d.r+=1,i(l)?ee().then((()=>{l=l(a),f()})):f(),{end(e){e&&l.tick&&l.tick(1,0),h&&(c&&L(n,c),h=!1)}}}function he(e,t){ae(e,1,1,(()=>{t.delete(e.key)}))}function de(e,t,n,s,i,o,a,c,l,u,h,d){let f=e.length,p=o.length,g=f;const m={};for(;g--;)m[e[g].key]=g;const A=[],v=new Map,w=new Map,y=[];for(g=p;g--;){const e=d(i,o,g),r=n(e);let c=a.get(r);c?s&&y.push((()=>c.p(e,t))):(c=u(r,e),c.c()),v.set(r,A[g]=c),r in m&&w.set(r,Math.abs(g-m[r]))}const b=new Set,I=new Set;function E(e){oe(e,1),e.m(c,h),a.set(e.key,e),h=e.first,p--}for(;f&&p;){const t=A[p-1],n=e[f-1],s=t.key,r=n.key;t===n?(h=t.first,f--,p--):v.has(r)?!a.has(s)||b.has(s)?E(t):I.has(r)?f--:w.get(s)>w.get(r)?(I.add(s),E(t)):(b.add(r),f--):(l(n,a),f--)}for(;f--;){const t=e[f];v.has(t.key)||l(t,a)}for(;p;)E(A[p-1]);return r(y),A}function fe(e,t,n){const s=e.$$.props[t];void 0!==s&&(e.$$.bound[s]=n,n(e.$$.ctx[s]))}function pe(e){e&&e.c()}function ge(e,t,s,o){const{fragment:a,after_update:c}=e.$$;a&&a.m(t,s),o||W((()=>{const t=e.$$.on_mount.map(n).filter(i);e.$$.on_destroy?e.$$.on_destroy.push(...t):r(t),e.$$.on_mount=[]})),c.forEach(W)}function me(e,t){const n=e.$$;null!==n.fragment&&(!function(e){const t=[],n=[];G.forEach((s=>-1===e.indexOf(s)?t.push(s):n.push(s))),n.forEach((e=>e())),G=t}(n.after_update),r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ae(e,t){-1===e.$$.dirty[0]&&($.push(e),q||(q=!0,Q.then(Y)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ve(t,n,i,o,a,c,l,u=[-1]){const h=x;M(t);const d=t.$$={fragment:null,ctx:[],props:c,update:e,not_equal:a,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(h?h.$$.context:[])),callbacks:s(),dirty:u,skip_bound:!1,root:n.target||h.$$.root};l&&l(d.root);let f=!1;if(d.ctx=i?i(t,n.props||{},((e,n,...s)=>{const r=s.length?s[0]:n;return d.ctx&&a(d.ctx[e],d.ctx[e]=r)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](r),f&&Ae(t,e)),n})):[],d.update(),f=!0,r(d.before_update),d.fragment=!!o&&o(d.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);d.fragment&&d.fragment.l(e),e.forEach(w)}else d.fragment&&d.fragment.c();n.intro&&oe(t.$$.fragment),ge(t,n.target,n.anchor,n.customElement),Y()}M(h)}class we{$destroy(){me(this,1),this.$destroy=e}$on(t,n){if(!i(n))return e;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const e=s.indexOf(n);-1!==e&&s.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ye=async e=>(await chrome.storage.local.get([e])??{})[e],be=async(e,t)=>{t.folder||(t.folder=await chrome.bookmarks.create({title:t.title}));const n=await chrome.bookmarks.create({title:e.title,url:e.url,parentId:t.folder.id});return e.bookmarks||(e.bookmarks=[]),e.bookmarks.push(n),{tab:e,group:t}};const Ie={search:"Search",windows:"Windows",tabs:"Tabs",saved:"Saved",workspace:"Workspace",signin:"Signin"};function Ee(t){let n,s,r,i,o,a,c,l,u,h=t[0].length+"";return{c(){n=b("div"),s=b("div"),r=b("div"),i=I(h),o=I("\n        Selected"),a=E(),c=b("div"),c.textContent="Cancel",k(r,"class","count svelte-16t0lx7"),k(s,"class","text svelte-16t0lx7"),k(c,"class","cancel svelte-16t0lx7"),k(n,"class","selected svelte-16t0lx7")},m(e,h){v(e,n,h),g(n,s),g(s,r),g(r,i),g(s,o),g(n,a),g(n,c),l||(u=C(c,"mousedown",t[1]),l=!0)},p(e,[t]){1&t&&h!==(h=e[0].length+"")&&S(i,h)},i:e,o:e,d(e){e&&w(n),l=!1,u()}}}function Te(e,t,n){let{selectedTabs:s}=t;F();return e.$$set=e=>{"selectedTabs"in e&&n(0,s=e.selectedTabs)},e.$$.update=()=>{1&e.$$.dirty&&console.log(s)},[s,()=>{n(0,s=[])}]}class Ce extends we{constructor(e){super(),ve(this,e,Te,Ee,o,{selectedTabs:0})}}function ke(e){const t=e-1;return t*t*t+1}function Se(e,{delay:n=0,duration:s=400,easing:r=t}={}){const i=+getComputedStyle(e).opacity;return{delay:n,duration:s,easing:r,css:e=>"opacity: "+e*i}}function Re(e,{delay:t=0,duration:n=400,easing:s=ke,axis:r="y"}={}){const i=getComputedStyle(e),o=+i.opacity,a="y"===r?"height":"width",c=parseFloat(i[a]),l="y"===r?["top","bottom"]:["left","right"],u=l.map((e=>`${e[0].toUpperCase()}${e.slice(1)}`)),h=parseFloat(i[`padding${u[0]}`]),d=parseFloat(i[`padding${u[1]}`]),f=parseFloat(i[`margin${u[0]}`]),p=parseFloat(i[`margin${u[1]}`]),g=parseFloat(i[`border${u[0]}Width`]),m=parseFloat(i[`border${u[1]}Width`]);return{delay:t,duration:n,easing:s,css:e=>`overflow: hidden;opacity: ${Math.min(20*e,1)*o};${a}: ${e*c}px;padding-${l[0]}: ${e*h}px;padding-${l[1]}: ${e*d}px;margin-${l[0]}: ${e*f}px;margin-${l[1]}: ${e*p}px;border-${l[0]}-width: ${e*g}px;border-${l[1]}-width: ${e*m}px;`}}var De="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAZJJREFUaEPtmElSxDAMRV/fjEvAFvoSDCtgxXAJYAuX4GZQppIidDuxZH03pHCqsoos/ycpVqINK782K9dPB/jtDPYM9AwEI9BLKBjA8PJ/lYEjIN3XwBVwHw7fTweXwB1wC7wPd3ELTwaegLOJxzfgpLiDzeAVOJ6YPgNby1IPwEfGoQJiV/y4jUmbyWjwOKZ4lyMCMSfeXKIegCR8bsMaCIkvL4AKQiI+iakBiELIxEcAaiGk4qMAXgi5eAWAFaKJeBVACSI9nzap8RiuObn2WlHtS5xrknNRztlKxCszMIq0QMjEtwBYKqf0TCq+A2SKe9UlZBEvPYGUJbR0zv/5Y9TSpCw2lv8XeR/wCPPYmmEijaxGUM2aRZhagIiQyFpJCSkEKHx8wXgzINtY9XvqAXgAzjMFGfk8mAvII3BheZM9AKsfq9wMUzl5N82UU5rOpf2KlycDaax4OkznzCkuKvg2GEs0TeVeWowWHVoOZ+rJwOFUOXbqAI5gNTHtGWgSVofTngFHsJqY9gw0CavD6ScSiGIxW05heAAAAABJRU5ErkJggg==";function Ne(t){let n,s,r,i;return{c(){n=b("img"),k(n,"class","clear button svelte-yvv0x5"),k(n,"alt","Clear"),c(n.src,s=De)||k(n,"src",s)},m(e,s){v(e,n,s),r||(i=C(n,"mousedown",t[2]),r=!0)},p:e,d(e){e&&w(n),r=!1,i()}}}function Ue(t){let n,s,r,i,o,a,l,u,h,d=t[0].length>0&&Ne(t);return{c(){n=b("div"),s=b("img"),i=E(),o=b("input"),a=E(),d&&d.c(),c(s.src,r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAA6NJREFUaEPtmVnITVEUx39fUR54oIwPCFGSlHnKECIyZCahDCWU4cGDF/EiYyhFipI5Y5EhMxEiHkwRSZmSIiUe9Nc5X6fd3ufus8+93Xvzrbp96az1X+u/hzVsNVS51FR5/NQRKPcO/tc7MB4YBLQDOkW/54B+r4FrwMlS71DIDswBZgODPYK7CuwD9nroBqlkITAKWA30C/B0G1gHnAuwTTXxJbANWFIE59uBpUXAqYXwIbAJWF7A6XfgAdAdaFRAdxewsFgkChHQcbnlcHYP2A3o76OETjegJzA/+msznwgcLwaJNAINgfOOM38EmOoRwGFgikNPJO97YATfAV3YtRbrccDpDI7HAqcs+r6LEERAq/8Q6GBY6yLvyBB8rLoY0AVOyh+gM/AyAK/gJbY5PAZMzuHsKDDJsF8FrM+B6WzmbgL9DWD9W/k8VGwJQQliQCig7FyX+APQPAH8A2gC/M7hrD7wFdDxjOUj0CIHppVAU+CTAaqVN3ckxK9W3KzkzYDPIWCuHegN3DEAt3gUM58YNgPLDMU+wF0fY5uO7Qgp85iZ4SAwI9RJwu4AMN3AaQ28C8W2EagH/AR0ZmN5EbXLoX5iO7XaHRMgXwAd2WBxXeInQBcDtS3wNtgTtAHeGPaXgOE5MJ1ZSD3OPAM4b85eAWw0MFUUc3W5rh1Qbr5hWZkhgIaUrKJM8x7Q8UyKpjpbm+GNn9bM2Sqn0p2CySrKaspuSbkCDM0KZOqnERgDnLE40P0YZqkVtli04honZ1o+jgbOlpKAsOVc869NZgH7UwJQG70zquCmmo6hjmNuKTTQyIGmrWT5Tzp9BTyOpjFVWVVrTWVdgfYForsIjMjLwIeArTLn9Rvb6wjpKAWLD4EYfAOwMtiT21BvRxNCcbMQkA+d+0WA+hdfUfFak3jsstkp47lGz1Q/WQnEYNOiyz3Sgf4LeAocAvSqoelL0jdlplCfZMtWJSEQg7aMnhb1vKhLq6CfRT+RsEmP6CXD9k1Zb67v1kovdAey+LDp9kppodXGLPB1UC4Cii/tzWmPpRezcionAQU0ELjuWG09CushuaR3oBC+z3dV5MsORVV6ZT6nlHsH4sA0E1xwRKlMZk5xtaqVQkABKSW7nt+dD8KVREAkXB2wvjUGvpm7VGkEFJ+GnBNGoGooNfxXBQHFrud3/adKq4jIVstzzL9PlbgD8eI3iNKoKrtzjK1kAj4puKJ3oI6A1wqUW6nq78BfwPSLMZWtJm8AAAAASUVORK5CYII=")||k(s,"src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAA6NJREFUaEPtmVnITVEUx39fUR54oIwPCFGSlHnKECIyZCahDCWU4cGDF/EiYyhFipI5Y5EhMxEiHkwRSZmSIiUe9Nc5X6fd3ufus8+93Xvzrbp96az1X+u/hzVsNVS51FR5/NQRKPcO/tc7MB4YBLQDOkW/54B+r4FrwMlS71DIDswBZgODPYK7CuwD9nroBqlkITAKWA30C/B0G1gHnAuwTTXxJbANWFIE59uBpUXAqYXwIbAJWF7A6XfgAdAdaFRAdxewsFgkChHQcbnlcHYP2A3o76OETjegJzA/+msznwgcLwaJNAINgfOOM38EmOoRwGFgikNPJO97YATfAV3YtRbrccDpDI7HAqcs+r6LEERAq/8Q6GBY6yLvyBB8rLoY0AVOyh+gM/AyAK/gJbY5PAZMzuHsKDDJsF8FrM+B6WzmbgL9DWD9W/k8VGwJQQliQCig7FyX+APQPAH8A2gC/M7hrD7wFdDxjOUj0CIHppVAU+CTAaqVN3ckxK9W3KzkzYDPIWCuHegN3DEAt3gUM58YNgPLDMU+wF0fY5uO7Qgp85iZ4SAwI9RJwu4AMN3AaQ28C8W2EagH/AR0ZmN5EbXLoX5iO7XaHRMgXwAd2WBxXeInQBcDtS3wNtgTtAHeGPaXgOE5MJ1ZSD3OPAM4b85eAWw0MFUUc3W5rh1Qbr5hWZkhgIaUrKJM8x7Q8UyKpjpbm+GNn9bM2Sqn0p2CySrKaspuSbkCDM0KZOqnERgDnLE40P0YZqkVtli04honZ1o+jgbOlpKAsOVc869NZgH7UwJQG70zquCmmo6hjmNuKTTQyIGmrWT5Tzp9BTyOpjFVWVVrTWVdgfYForsIjMjLwIeArTLn9Rvb6wjpKAWLD4EYfAOwMtiT21BvRxNCcbMQkA+d+0WA+hdfUfFak3jsstkp47lGz1Q/WQnEYNOiyz3Sgf4LeAocAvSqoelL0jdlplCfZMtWJSEQg7aMnhb1vKhLq6CfRT+RsEmP6CXD9k1Zb67v1kovdAey+LDp9kppodXGLPB1UC4Cii/tzWmPpRezcionAQU0ELjuWG09CushuaR3oBC+z3dV5MsORVV6ZT6nlHsH4sA0E1xwRKlMZk5xtaqVQkABKSW7nt+dD8KVREAkXB2wvjUGvpm7VGkEFJ+GnBNGoGooNfxXBQHFrud3/adKq4jIVstzzL9PlbgD8eI3iNKoKrtzjK1kAj4puKJ3oI6A1wqUW6nq78BfwPSLMZWtJm8AAAAASUVORK5CYII="),k(s,"alt","Search"),k(s,"class","svelte-yvv0x5"),k(o,"type","text"),k(o,"placeholder","Search Tabs"),k(o,"class","svelte-yvv0x5"),k(n,"class","search-box svelte-yvv0x5"),k(n,"style",l=t[1]?"background-color: "+t[1]:"")},m(e,r){v(e,n,r),g(n,s),g(n,i),g(n,o),R(o,t[0]),g(n,a),d&&d.m(n,null),u||(h=C(o,"input",t[3]),u=!0)},p(e,[t]){1&t&&o.value!==e[0]&&R(o,e[0]),e[0].length>0?d?d.p(e,t):(d=Ne(e),d.c(),d.m(n,null)):d&&(d.d(1),d=null),2&t&&l!==(l=e[1]?"background-color: "+e[1]:"")&&k(n,"style",l)},i:e,o:e,d(e){e&&w(n),d&&d.d(),u=!1,h()}}}function xe(e,t,n){let{searchText:s=""}=t,{backgroundColor:r=null}=t;return e.$$set=e=>{"searchText"in e&&n(0,s=e.searchText),"backgroundColor"in e&&n(1,r=e.backgroundColor)},[s,r,()=>{n(0,s="")},function(){s=this.value,n(0,s)}]}class _e extends we{constructor(e){super(),ve(this,e,xe,Ue,o,{searchText:0,backgroundColor:1})}}var Oe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAgdJREFUaEPtmatLBUEUxn83mfRP8Ak2BYugSbFa1ahg1GK9RS3+BWoSrD6i0aDNKgaDiPjCLJhscmQvDLOzd8/snbsPmIHllu+cOd95fHdnp0XDV6vh8RMJVF1BTQWGgfECgd4WsJkEnnzsuhFYAXaAOR+HFnYf2FPYjwI3gPwK8UWFzT8ki8AacKZ1koPTVPkU2DD8zAD3mv1dzgeAx4Jt49pzCPjJCUayv2BgpAKqFnQRmACeNewVmCNgW4ELSkAyIQ7NJb3suySDqiwm+wWrQBYBzTBqSZrBis2uo4VMX19Z6uRqoX4SMNVGS7aDc6pT2QRstfElkVKnsgksA1e+USf4V2DaVrSyCUgs0qLS8/Yy58Ie/m/gGji2jaog4CpAKTIaUoVsEpGAmZF+ymjW/Da+ApvAiaE2Y1qlqssQd9RpHZDXFpFM1aoTAVXAdZXRQsGLURMqMNjtPFF3AofAVlIe5/G0zgRccp6Kt84E5J/ffmdKHTUjgcLykW8YK2DmSPuBKj+vekSsQKyAvlucSJFQ+xAVZbTHpHqZxyGueoiDz4BX/QOBC70LyZXSW6AAQrsZAd5Np1m3Jw/AVOjde/R3B8xrjpSCkfuxix43DG2+ClxqCQhuFjgAlkJH4unvBWgD5y47zQWcfNOXp4r1AXwCv1mbawhUEbh6z0hAnao+ARtfgT/ApJMx3SAEhgAAAABJRU5ErkJggg==",Le="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAiNJREFUaEPtmE0rRUEYx383JRayslJeimwVsbJiQxbylh2xwpfgO4gVZWHjLaXYsLIiylaUl2JjQxZWSo9m6nTvHeecmTn33FNndvf2zMzvP89/zswzBTLeChnnJxeQdgbzDOQZcFwBXxZqAV5isjQAXzH7lIS7ClgBRoEeYANYigi0Biyr2FVAxrFqrgIegbbAzHvAdAjJLjAViHkDmq3owekcENs8l5n4PxHF8Lp7q4UF//q6ZmAdWIwowgQfx3re90ANsA+MhYgwwR8Bk8BPGhbSc9YDB8CwQYT8HfS8DjsFJoBvW3gfFtJzNyoRgxFhzhX8Z8R4Y5jrHggO3KREDIRAXSj4d1d4nxnQLPI5PAT6DHBXwDjw6gM+CQEyZrsS0V0Eeavg5ezw1nxaKAjVBeyoE1r+F/gZ4M4buRooKQGacw6oBeQz+uEbPikLJcFZka9QRcH1ZElbKHFRuYDElzhkgjwDeQYcVyBpC8k1ug44ztpBlumrRKYvc3Kdluqs32DtS1ULVOV1OtMFjZSUUtwPRfyonKlivipKSinqBX6kDLy8EUkrV9SfKBGpFvWZf1bZBOYNK1/8xGh6G9oCFiJaryTM5SDrAO4jwuswk4hO4MFGhIsAme86UPfKb5vH3Rug1wbeR0kpz+Kz6oU6jhW09Z6A7TSf1/XCiZ3iWsCmj9c9YJt1r/1c94BXGJvBcgE2q+azT54Bn6tpM1bmM/ALFtBZMYX2Sk4AAAAASUVORK5CYII=",Me="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAl1JREFUaEPt2TusDHEUx/HPDaEhIaLwKCRUNBIJSqLSoVB4BREUHgUKFChQoPAoEEG8CgU6lVAikWgohBKFCAmNhEROMjdZY2Z3dv8z92aTmfLM+Z/z+57z35n9nxkx5NfIkOvXAox3B9sO9OjAXEzGh6Y61WQHrmBnJvwmtjUB0RTAXWzICb6HjXVDNAFwvUu1b2B7nRB1A1zGrh4CY2vtrguiToDz2FdR2AXsr+jb1a0ugDM4WJDpd2abWHDvLA6lQtQBcBJHCoT8xJbMfgtTCnxO4WgKRCrAcRwrEPAVm/E4u7catzGjwPcEIs5AVyrAR8zOZQ5biH+as6/MIObk7J+Qt1WGSQGYj/e5TPHG3YTnJQqW4w5ibee1YNC3dQpACHiAtZmSV9iB1z3KtxjXsCTze4h1lUuec0wFiHDLMAuP+hSxBp/xos91/7jXAZCSP3ltC5BcwsQAbQcSC5i8vO1AcgkTA7QdSCxg8vK2A8klTAzQdgArMAFP+izmKvzBsz7X1fpnrnN49TIbp7ztIWghYryyNPO7WmGSURoyZQtNw7dc5DdYjzKIEH8fi3LrpuP7IJ1IAYiZ5xdMrQhRJv4HZuLXWANEvjjQFx3I850oEx8xxvVQHwJiNHK4oHqjEHGraNuE/XTJSKZyM1K2UGeSGFIdKIEIc37Ph+1cyTCssvhwrAsgYl3EnorZL2FvRd+ubnUCRKLOx2pZ4qTHZj5o3QARP57xW0vU1/6howmA0D7UHzhGiz/Un5hGIeZhEt7V8YMtitHUFmpK739xW4AxK3VJorYD492Bv44PUzEexY+1AAAAAElFTkSuQmCC",Pe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAW1JREFUaEPtmE0uRFEQRk+P/GxBzxixAHbAqCVsgQkDCYIlNEFiwIQtkDBiByyAETO24GcmldxOOqVb8vpVtZTUHb2kc+ueU1/dpHMbBF+N4PykwF8nmAn89wT2i+Cul6jXCI0Anwp6FPiyFvESOAXWFOwZsB5F4BWYULBvQDOKwApwrmBXgYsoAsK5BRwW4G3gyBpe6nndAQ/WnjVTYGit7nNQJpAJ1OxAjlDNBtbengn80sJZ4KT8vgE81G53jwJeCUwDj+q8GeDJWsJL4BaYV7B3wEIUgXtARqh7yQjNRREQeJHoXgJvfg+8RkjA5R4cF4NNj/nPv9PW8zxIPc8RGoSn8p4UqNwy4w2ZgHFDK5fLBCq3zHiDZwLyMr1TeA8AlxdqL4EWcK2avQjcGAfg9jL3DEwq2BdgKorAJbCkYK+A5SgCY8C7gh0HPqIIdDj3ykfbGrxTz+sSe/H+qJsCQ2t1n4MygUygZge+AWtGIjF3tB3MAAAAAElFTkSuQmCC";const Be={grey:"#dadce0",blue:"#8ab4f8",red:"#f18b82",yellow:"#fbd563",green:"#81c995",pink:"#f08aca",purple:"#c58af9",cyan:"#78d9ec",orange:"#f5ac70"};function Fe(e,t,n){const s=e.slice();return s[3]=t[n][0],s[4]=t[n][1],s}function Ve(e){let t,n,s,r,i,o;function a(){return e[2](e[3])}return{c(){t=b("div"),n=b("div"),r=E(),k(n,"class",s="color "+(e[0].color==e[3]?" selected":"")+" svelte-13urf30"),D(n,"background-color",e[4]),k(t,"class","color-container svelte-13urf30")},m(e,s){v(e,t,s),g(t,n),g(t,r),i||(o=C(n,"mousedown",a),i=!0)},p(t,r){e=t,1&r&&s!==(s="color "+(e[0].color==e[3]?" selected":"")+" svelte-13urf30")&&k(n,"class",s)},d(e){e&&w(t),i=!1,o()}}}function $e(t){let n,s=Object.entries(Be),r=[];for(let e=0;e<s.length;e+=1)r[e]=Ve(Fe(t,s,e));return{c(){n=b("div");for(let e=0;e<r.length;e+=1)r[e].c();k(n,"class","colors svelte-13urf30")},m(e,t){v(e,n,t);for(let e=0;e<r.length;e+=1)r[e]&&r[e].m(n,null)},p(e,[t]){if(3&t){let i;for(s=Object.entries(Be),i=0;i<s.length;i+=1){const o=Fe(e,s,i);r[i]?r[i].p(o,t):(r[i]=Ve(o),r[i].c(),r[i].m(n,null))}for(;i<r.length;i+=1)r[i].d(1);r.length=s.length}},i:e,o:e,d(e){e&&w(n),y(r,e)}}}function je(e,t,n){let{group:s}=t;const r=e=>{s.id?chrome.tabGroups.update(s.id,{color:e}):n(0,s.color=e,s)};return e.$$set=e=>{"group"in e&&n(0,s=e.group)},[s,r,e=>{r(e)}]}class Ge extends we{constructor(e){super(),ve(this,e,je,$e,o,{group:0})}}var Ke="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAZBJREFUaEPtmVEOwiAMhuvJ1JOpJ1NPpvkfSNjW0pYJ7RJJfBL0+yiUsp3o4O10cH76C0RHMCIClw7plzRmtsCdiG4dAhjyICKMX7SZApj5Zyd8GbbhPZrAlYgWy2mmAGYREejZAyUC4QIA2azjallp+yOFgLQNLNFJK2CBh3hKASt8SgEJHpnmzZwZqSLQggcod+ilEdDgS7ZaZ6UUAhb4tAJW+JQCHvh0Al54CHDFX0gx1wNfTut6bEg5vQe+SCCd4lxgLzUjq9FfwKvXh1ECU+BhN0JgGvwIganwmgDSGD6tC0i9RqfDtwTqQgq7HzVIq4XAtwQ+K9pNEVV9HwYvCXAnIHuINC7plqipKdLSgctCVoHQmRcfFAk1yDoCKeB7l1Aa+B6BVPBegbPwVG3ahuU2tXUTSwkhFN4TAU4gHH6PQAr4PQJIq1Kz1k6Wc0rts3cPhC+tEQKQatVO6qx6OkgXmnUx5/nNFAI/fxnnnQFrf+1K2fM6SHwlaoXy9NMEPL8V0vcvEDLt1Z8ePgJfJqZuMbB035gAAAAASUVORK5CYII=",Qe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAA/ZJREFUaEPtmWnIjlkYx3+YkCZKBgkJIUtKIkKN7CHbBxQlW9apmclukL2QsosSoRQ+8EEzlJAQX4aZshQ+CCNbypK1v86r47znPPe5n/t5eJ/p/dfd+3Sfc1/n+p9zrvWtQomjSonrTyWB732ClSfwfz6BNkBv4DVwDrhRDLLFukI1gVNAd6P0aWAA8KbQJIpFYA6w1lF2AbC6VAhcATo5yv4LtCsFAsOAowFFJwB7CkmiGFfoIDA6oORJoG9FJtAW+CdBwW7AhUKRKPQJrALmJyi3DxhfEQn8YNxk1QTlPgI1gLeFIFHIE5gM7HSUkv+vbsWDsmGd0pqKRuAW0MJRaqwh4Hqee0DjikSgD/CXo9B9oJF59xCo74z3B/7MSiLpCjUwC+tv0m9dFRu/A+vNi+XAImdcNvCf9Tyyfj8Ayh6R128vQgR2AFMy7k5t4IWRUQd4llHeJmC2K8NHQIqLQBbsAmTUNvYDsoksKBfJfQSWAkuyrAK09qTPHYC/M8pdBki/L/ARUKiPMa73wFPreWLuqoxXmacPK4B6gadaBLl+rrMI2YAUWBkQeBxQxJXyMjD9zQLZyk/m+QMYGBC20Kz71XAuLzQR0F324RIwCHicRXPrW7lYnXrHgLxJwG7fWJIbHQIod5EXcXEX0PjVjCQ6m/TbF9ieA+OAY6E1kgjou67AXqCVR8grQPl/jM34dBgByDupBHWhGlpJ38VcGxRDQN83MyfRIyAsn0JlKrA9IE9NAO38naTTjSUgObXMSYwMCE1T88og5ZF8OGx2/mWS8hpPQ6BM3lZgmkf4ZmBWzKLARuAXz9xtwPRIGZ+n5UNA3ynQfRVQgKG5jM1RyhdrygWpGCL5EjgPqDS0IUOM7fso8XPn6t73jFHanpMvAVVVNq4D6sS56AJ8AC57xuR+2zvvU+uT+gPT71Hfx4Z7dxU3lD3KkwgKiL9a2aneqSKb68hRvnQtzSnkQ2Cep8M2CpD3EHKlITJyGbsw2GMzM4EtxSZwAlA1ZaMu0Mvsqu8q2XO1w2o9yo7cGkENMQW3aORzAipSfrRWUIp8EwjFh5Ayh4CWTgtSspXcRSMtgZjGVfTigYlKWbQhUUhLYIZ1h5MWUKqtdOEdICNvkvSBGVclF8qCy4lIS+AAMCZCkQ3Ab8489YJURyQhVecuLQGl0E1zaKDmrdxlKMVubgqlUPNXorWGkscopCWghlRZr8de4DawDlCeFIPhgFotvv8X6Oo1jBGiOWkJyM0p/7eh67IYiMoerQ+VeuhaqYy0cSSNR0tLQIaoQKOc5YzZ9bOxuxWYp4JJRH42gU3RWScdhbQEooR+y0mVBL7lbvvWKvkT+AT3eq4xgJg30gAAAABJRU5ErkJggg==",qe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAvFJREFUaEPtmUvITVEUx3+fhCRmSEiURCYmIgbkNVEeEwaUvPLIgPLMK3mVTLwiShQjDEzkUUJiYOQxQGGgPEZSIor+dT7d79xz7lnrfHtf9+iuun2nvrX++//fa5+9116ng4pbR8X50xbwrzPYzsD/nIExwHTgO/AAeBlDbKwl1Ae4A0xOSN8F5gA/QouIJWAzcDhFdjtwsCoCngATUmRfAOOqIGAecC2H6DLgfEgRMZbQZWBRDsnbwMxWFjAWeF5AcBLwKJSI0Bk4AGwrIHcRWNqKAnom22SPAnK/gd7AzxAiQmZgJXDGSEpZOmT0begWUsBrYJSR1HtgqNG3KQJmALechGYDN50xde5FGRgEDAT0t+i5l5OM3oFPNb/PNc8fgM7fx+Q5Ez5PwGlglZNQbPdjwIb0IFkCRFwCWtHqTvIsAXuA3a3IHtgLiN9fyxKgo77bL1ekCZiV3izy3gGVvvsjkSgLuwPQSd/FGu1Cy4GzZUcLHLcCOJeFWbSNzgVUuwwITMgK9wVYAlzPCygSoLiJwAVgtHXUQH66Q6voe9wIzyJA8SOSTEwJRK4IRk0AzfzbIkerAOH0TTKxsAi0m/+/ksz8NwuOR0An3klgjQW8hM8pYK0nrowA4eug63KgeAbN8a07pCyYZQU8BHQ1DGla91O9gGUF6FYVw9x83AFJv0d9nxg2HnjmAS4jYGuMDltCej1wIraAG4BuUzFMDbEFHuAyGfgK9PMM4vAVdn+Hv/sTk6Vx5Rk/y1clyysriDcD64DjRnDdZVcDvwAdUMOMcWrPmKtgr4BLwGIDkaPAppSfekF19XwGlqtz5xXwDhjeQICatxuBpzk+I5OLUl7zV2EaQ8WjybwC1JAakoH8BjgCqE6y2HxgX873Ai29wRYQ+XgFaJtT/7/WtFx2AqbqsSZQn6G0rHal8K4C5orXK0Avog4a1Sz3klm/b52tHD9dmCRkWnLz2gIo0ybzCjCBNtOpLaCZs501VuUz8Af5Em4xb/+t1AAAAABJRU5ErkJggg==";function We(e){let t,n,s,r,i,o,a=(e[0]?.title??"Untitled Group")+"",c=e[0].collapsed&&He(e),l=e[0].workspace&&Je();return{c(){t=b("div"),n=b("span"),s=I(a),r=E(),c&&c.c(),i=E(),l&&l.c(),o=T(),k(n,"class","text svelte-s68c7f"),k(t,"class","title svelte-s68c7f")},m(e,a){v(e,t,a),g(t,n),g(n,s),g(t,r),c&&c.m(t,null),v(e,i,a),l&&l.m(e,a),v(e,o,a)},p(e,n){1&n[0]&&a!==(a=(e[0]?.title??"Untitled Group")+"")&&S(s,a),e[0].collapsed?c?c.p(e,n):(c=He(e),c.c(),c.m(t,null)):c&&(c.d(1),c=null),e[0].workspace?l?l.p(e,n):(l=Je(),l.c(),l.m(o.parentNode,o)):l&&(l.d(1),l=null)},d(e){e&&w(t),c&&c.d(),e&&w(i),l&&l.d(e),e&&w(o)}}}function ze(e){let t,n,s;return{c(){t=b("input"),k(t,"type","text"),k(t,"class","title-input svelte-s68c7f"),k(t,"placeholder","Name this group"),t.autofocus="true"},m(r,i){v(r,t,i),R(t,e[6]),t.focus(),n||(s=[C(t,"input",e[28]),C(t,"blur",e[17]),C(t,"keydown",e[18])],n=!0)},p(e,n){64&n[0]&&t.value!==e[6]&&R(t,e[6])},d(e){e&&w(t),n=!1,r(s)}}}function He(e){let t,n,s,r,i=e[1].length+"";return{c(){t=b("div"),n=I("("),s=I(i),r=I(")"),k(t,"class","count svelte-s68c7f")},m(e,i){v(e,t,i),g(t,n),g(t,s),g(t,r)},p(e,t){2&t[0]&&i!==(i=e[1].length+"")&&S(s,i)},d(e){e&&w(t)}}}function Je(t){let n,s;return{c(){n=b("img"),c(n.src,s=qe)||k(n,"src",s),k(n,"alt","Saved"),k(n,"class","icon svelte-s68c7f")},m(e,t){v(e,n,t)},p:e,d(e){e&&w(n)}}}function Xe(e){let t,n,s,i,o,a,l,u,h;function d(e,t){return e[0].workspace?Ze:Ye}let f=d(e),p=f(e);return{c(){t=b("div"),p.c(),n=E(),s=b("img"),o=E(),a=b("img"),c(s.src,i=Pe)||k(s,"src",i),k(s,"alt","More"),k(s,"class","svelte-s68c7f"),c(a.src,l=De)||k(a,"src",l),k(a,"alt","close"),k(a,"class","svelte-s68c7f"),k(t,"class","actions svelte-s68c7f")},m(r,i){v(r,t,i),p.m(t,null),g(t,n),g(t,s),g(t,o),g(t,a),u||(h=[C(s,"mousedown",e[29]),C(a,"mouseup",e[11])],u=!0)},p(e,s){f===(f=d(e))&&p?p.p(e,s):(p.d(1),p=f(e),p&&(p.c(),p.m(t,n)))},d(e){e&&w(t),p.d(),u=!1,r(h)}}}function Ye(e){let t,n,s,i,o,a,l;return{c(){t=b("img"),s=E(),i=b("img"),c(t.src,n=Qe)||k(t,"src",n),k(t,"alt","Saved"),k(t,"class","icon svelte-s68c7f"),c(i.src,o=e[0].collapsed?Me:Le)||k(i,"src",o),k(i,"alt","Toggle Collapsed"),k(i,"class","svelte-s68c7f")},m(n,r){v(n,t,r),v(n,s,r),v(n,i,r),a||(l=[C(t,"mousedown",e[13]),C(i,"mousedown",e[12])],a=!0)},p(e,t){1&t[0]&&!c(i.src,o=e[0].collapsed?Me:Le)&&k(i,"src",o)},d(e){e&&w(t),e&&w(s),e&&w(i),a=!1,r(l)}}}function Ze(t){let n,s,r,i;return{c(){n=b("img"),c(n.src,s=Ke)||k(n,"src",s),k(n,"alt","Fullscreen"),k(n,"class","svelte-s68c7f")},m(e,s){v(e,n,s),r||(i=C(n,"mousedown",t[25]),r=!0)},p:e,d(e){e&&w(n),r=!1,i()}}}function et(e){let t,n,s,i,o,a,c,l,u,h,d,f,p,m,A,y,I,T,S,R,N,U,x,_,O;return n=new Ge({props:{group:e[0]}}),{c(){t=b("div"),pe(n.$$.fragment),s=E(),i=b("div"),i.textContent="Edit title",o=E(),a=b("div"),c=E(),l=b("div"),l.textContent="Move Group to New Window",u=E(),h=b("div"),h.textContent="Open Workspace",d=E(),f=b("div"),p=E(),m=b("div"),m.textContent="Save Group",A=E(),y=b("div"),I=E(),T=b("div"),T.textContent="Ungroup Tabs",S=E(),R=b("div"),R.textContent="Close Group",k(i,"class","action svelte-s68c7f"),k(a,"class","divider svelte-s68c7f"),k(l,"class","action svelte-s68c7f"),k(h,"class","action svelte-s68c7f"),k(f,"class","divider svelte-s68c7f"),k(m,"class","action svelte-s68c7f"),k(y,"class","divider svelte-s68c7f"),k(T,"class","action svelte-s68c7f"),k(R,"class","action svelte-s68c7f"),k(t,"class","more-actions svelte-s68c7f"),D(t,"border-color","#555555")},m(r,w){v(r,t,w),ge(n,t,null),g(t,s),g(t,i),g(t,o),g(t,a),g(t,c),g(t,l),g(t,u),g(t,h),g(t,d),g(t,f),g(t,p),g(t,m),g(t,A),g(t,y),g(t,I),g(t,T),g(t,S),g(t,R),x=!0,_||(O=[C(i,"mousedown",e[16]),C(l,"mousedown",e[14]),C(h,"mousedown",e[25]),C(m,"mousedown",e[13]),C(T,"mousedown",e[19]),C(R,"mousedown",e[15])],_=!0)},p(e,t){const s={};1&t[0]&&(s.group=e[0]),n.$set(s)},i(e){x||(oe(n.$$.fragment,e),W((()=>{x&&(U&&U.end(1),N=le(t,Re,{}),N.start())})),x=!0)},o(e){ae(n.$$.fragment,e),N&&N.invalidate(),U=ue(t,Re,{}),x=!1},d(e){e&&w(t),me(n),e&&U&&U.end(),_=!1,r(O)}}}function tt(e){let t,n,s,i,o,a,c,l,u;function h(e,t){return e[5]?ze:We}let d=h(e),f=d(e),p=e[2]&&!e[7]&&Xe(e),m=e[3]&&et(e);return{c(){t=b("div"),n=b("div"),f.c(),s=E(),p&&p.c(),o=E(),m&&m.c(),k(n,"class","container svelte-s68c7f"),k(n,"style",i="background-color: "+Be[e[0].color]+";"+(e[3]?"border-radius: 5px 5px 0px 0px;":"")),k(t,"class",a="group-label"+(e[8]?" dragged-over":"")+" svelte-s68c7f"),k(t,"draggable","true")},m(r,i){v(r,t,i),g(t,n),f.m(n,null),g(n,s),p&&p.m(n,null),g(t,o),m&&m.m(t,null),e[30](t),c=!0,l||(u=[C(t,"mouseenter",e[9]),C(t,"mouseleave",e[10]),C(t,"dragleave",e[22]),C(t,"dragstart",e[20]),C(t,"dragover",e[21]),C(t,"drop",e[23]),C(t,"dragend",e[24])],l=!0)},p(e,r){d===(d=h(e))&&f?f.p(e,r):(f.d(1),f=d(e),f&&(f.c(),f.m(n,s))),e[2]&&!e[7]?p?p.p(e,r):(p=Xe(e),p.c(),p.m(n,null)):p&&(p.d(1),p=null),(!c||9&r[0]&&i!==(i="background-color: "+Be[e[0].color]+";"+(e[3]?"border-radius: 5px 5px 0px 0px;":"")))&&k(n,"style",i),e[3]?m?(m.p(e,r),8&r[0]&&oe(m,1)):(m=et(e),m.c(),oe(m,1),m.m(t,null)):m&&(re(),ae(m,1,1,(()=>{m=null})),ie()),(!c||256&r[0]&&a!==(a="group-label"+(e[8]?" dragged-over":"")+" svelte-s68c7f"))&&k(t,"class",a)},i(e){c||(oe(m),c=!0)},o(e){ae(m),c=!1},d(n){n&&w(t),f.d(),p&&p.d(),m&&m.d(),e[30](null),l=!1,r(u)}}}function nt(e,t,n){let s,r,i,{group:o}=t,{isCollapsed:a=null}=t,{tabs:c=[]}=t,{lastGroupUpdate:l=null}=t,u=F();B((()=>{o.new&&(n(5,h=!0),i?.scrollIntoView({behavior:"smooth"}))}));let h;let d="";const f=()=>{chrome.tabGroups.update(o.id,{title:d}),n(5,h=!1)};let p;let g;return e.$$set=e=>{"group"in e&&n(0,o=e.group),"isCollapsed"in e&&n(26,a=e.isCollapsed),"tabs"in e&&n(1,c=e.tabs),"lastGroupUpdate"in e&&n(27,l=e.lastGroupUpdate)},[o,c,s,r,i,h,d,p,g,()=>{n(2,s=!0)},()=>{n(2,s=!1),n(3,r=!1)},()=>{chrome.tabs.remove(c.map((e=>e.id)))},()=>{u("toggleCollapse",o),chrome.tabGroups.update(o.id,{collapsed:!o.collapsed})},async()=>{},async()=>{const e=await chrome.windows.create({});await chrome.tabGroups.move(o.id,{windowId:e.id,index:0}),n(3,r=!1)},()=>{chrome.tabGroups.remove(o.id)},()=>{n(5,h=!0)},e=>{""!=d&&f(),n(6,d="")},e=>{"Enter"==e.key&&f()},async()=>{chrome.tabs.ungroup((await chrome.tabs.query({groupId:o.id})).map((e=>e.id)))},e=>{n(7,p=!0),e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("groupId",o.id),chrome.tabGroups.update(o.id,{collapsed:!0})},e=>{e.preventDefault(),g||n(8,g=!0)},e=>{e.preventDefault(),n(8,g=!1)},async e=>{g&&n(8,g=!1);let t=e.dataTransfer.getData("tabId");const s=e.dataTransfer.getData("groupId"),r=await chrome.tabs.query({groupId:o.id});let i=1e5,a=0;for(const e of r)e.index<i&&(i=e.index),e.index>a&&(a=e.index);if(t){t=parseInt(t);const e=await chrome.tabs.get(t);let n;e.groupId==o.id?n=i:e.index>i?(o.collapsed||await chrome.tabs.group({tabIds:e.id,groupId:o.id}),n=i):e.index<a&&(o.collapsed?n=a:(await chrome.tabs.group({tabIds:e.id,groupId:o.id}),n=i)),chrome.tabs.move(parseInt(t),{index:n})}else s&&chrome.tabGroups.move(parseInt(s),{index:i})},()=>{n(7,p=!1)},()=>{u("openGroupInFullScreen",o)},a,l,function(){d=this.value,n(6,d)},()=>n(3,r=!0),function(e){j[e?"unshift":"push"]((()=>{i=e,n(4,i)}))}]}class st extends we{constructor(e){super(),ve(this,e,nt,tt,o,{group:0,isCollapsed:26,tabs:1,lastGroupUpdate:27},null,[-1,-1])}}var rt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABcJJREFUaEPVmVXIbUUUx3/XLlSwsAURMVEfLOwuTBQLjAcbO/HBwu5WBBUbCwMLQcVWjAcLxFbEBBsb+X3MXNY338w++9x77r3eBQfO2bNm7fWfNSvPJGZymjST68+0ADAvsED4eEY/hs+vozy0UQCYB9gU2A7YHVhkgILfAvcAjwJPA79NDaCpAbAqcDiwWw+lWzoK5j7gauDtKQEyJQCWAY5Iynv6oyCtIIirgM+GETgsgEOA04HFhnnJELxfJ/nX9d0zDIBrAQF00e/A7MCsickrMjcwX/r9KrB2D+UEcGgPvt5R6DFgmw6BzyWnVPkzA5/OLQAdNtNewGrATsAqHTIfB7YdBKKPBa7pOI17gYuAV9LJfwfMn156FHBF+n4OcEr6/iawQYo+OwLHARs1FNXqh3WBGATAK6OQkj4FzgZuCAvHAhen37cA+xWbngU2TM/OSHc9swhWIEtX3uVVavpEF4B9gNsqAt8B9gDeDWs69RvAEunZVsCTxd5NUtz3sVFHK2iNTCsDdzeu1b7A7TVLtAAsDrwWFMp7a8q75gleFq7IWg2zPwzskNaMZloiUguEwWA94MNSbguAwk8rmI3POlU8+cziaW/RuB5RTLyS+s26FaCCMGiYbyLpiybOcVQD0Dp9X3595YVGnj/Dc6/GCw0LeMU+SJFJFh3+5wrvwY17b1R7JvLXANRO/0Fg54ZS+wM3pbW3gNUbfPmx99yaSTqoCARx6wMp1MZnD5XPagBeBtYJuzzdrTuUOjVcH/1AsF20FHBrYngKOKuD+QlgjmJ92VhulABWatzxATpN12XzwuTQXgI4Hrhwuqoz/MseCZFsQilhfW68zmRmtUrsohytjEQv9tRnfWDLxFuG0lKECS7XUnlt8sGXFjBCLB8kGE2MKi2yF7CckO4CrHP60J3AnolxQmQpBJQ6uWzH95NfSgBWk3MGAVcCR3ZodCJwflrXgY/poz1wKXB0TwAeohaLZMnxRQnAVvCbgrGsWUr9YsgdxBv3xn22oiauFt0P7FIsWsWOJdRoAdP/6zMAgBbW0i2K1so8WuSlEsCaqSCLggad6igs4LXLdVQNxCWVq2ldZL4aZ4GFAKPO9Abg9TDrtihm7sxjvfReCcDfvwDOdTJZ35sbWhTzxrRyYkOzJx5pSeDLGgAdw2ycycLJMNciaxpPSLoDsIfoQ9b2eyfGQWH0Y2C5Qqh5YWxAVobR0lxWiqVjlwrmxDeuSuyBou8+HTbWQ/YGi2b5JYB4oj10mCEs4/qCEsDCgAj/z2RHZz00RrVy2nLYaUGkLj8wozoikYznJp4uiuW07+oKodZmkTxc/WHyPLUGoNYNdTmzvYIzHMm6ZYUBAKydrKEkZ03W/DUqC0t5Jgy8agCshZwWxGjk5lZScwr3d9CgqzSwGfkImCXxzwb8U9G+1hV66jZa44bArab+BOCCiuBW0olhsasAtGy4PMlthd1WILFPsXgcRy0AFnbOebyvkX5I/uEoMVK8dl3XyBYy+1NtSNBS3qGvM9UJk+uuwdYBwI0VK3wC7FoMpcyMAs7x2QFA2RurgKMU6fOk0FdBflcIPzAMDnpZIDPV7qJr9g2WGc5FtYp0LnBy+m7y2zhny/QsRjfnpOel5wumGVTuD8oz6ywoB81GFdYC4ZoFlXfeEeQfwPeh/dOHTkraRJ96H1gxPddStqRrVCzto0HVcO/xemvIm99rd2RL+VeYQrvmtE5g9stzJWZ9YLM0Z3LM3qLOoW7e1McCmbdvmfFvCJPPJwCbJyHmkzg0aCnv8Ng/AgfSMAAUJggbjDI6DXxRTwYt6Zi+l/LKHBaAewyxjhONUmWy66nnBDZ9yfHkzcPWYlMCIL/djC0Q66CBfwU1kNnMG51UXF8ZmqYGQHyZ8X/79LHdczQeOzt5bUBMRDZNVpN+yinIDANQe7E9dp7xq7ghduQ0KguMXLG+Amd6AP8BGrcmQBeLyHIAAAAASUVORK5CYII=";function it(e){let t;return{c(){t=b("div"),k(t,"class","group-indicator svelte-zsdvv8"),D(t,"background-color",Be[e[1].color])},m(e,n){v(e,t,n)},p(e,n){2&n&&D(t,"background-color",Be[e[1].color])},d(e){e&&w(t)}}}function ot(t){let n,s,i,o,a,l,u,h,d,f=t[1]&&it(t);return{c(){n=b("div"),s=b("img"),l=E(),f&&f.c(),c(s.src,i=t[3]?t[0].favIconUrl:rt)||k(s,"src",i),k(s,"style",o=t[3]?"":"filter: invert(1);"),k(s,"alt",a=t[0].title),k(s,"draggable","false"),k(s,"class","svelte-zsdvv8"),k(n,"class",u="tab-icon"+(t[2]?" focus":"")+(t[0].active?" active":"")+" svelte-zsdvv8"),k(n,"draggable","true")},m(e,r){v(e,n,r),g(n,s),g(n,l),f&&f.m(n,null),h||(d=[C(n,"mouseenter",t[4]),C(n,"mouseleave",t[5]),C(n,"mouseup",t[6]),C(n,"dragstart",t[7])],h=!0)},p(e,[t]){9&t&&!c(s.src,i=e[3]?e[0].favIconUrl:rt)&&k(s,"src",i),8&t&&o!==(o=e[3]?"":"filter: invert(1);")&&k(s,"style",o),1&t&&a!==(a=e[0].title)&&k(s,"alt",a),e[1]?f?f.p(e,t):(f=it(e),f.c(),f.m(n,null)):f&&(f.d(1),f=null),5&t&&u!==(u="tab-icon"+(e[2]?" focus":"")+(e[0].active?" active":"")+" svelte-zsdvv8")&&k(n,"class",u)},i:e,o:e,d(e){e&&w(n),f&&f.d(),h=!1,r(d)}}}function at(e,t,n){let s,{tab:r}=t,{group:i}=t,{isClickable:o=!0}=t,{isActive:a}=t,c=F();let l=r.favIconUrl&&""!=r.favIconUrl;return e.$$set=e=>{"tab"in e&&n(0,r=e.tab),"group"in e&&n(1,i=e.group),"isClickable"in e&&n(8,o=e.isClickable),"isActive"in e&&n(9,a=e.isActive)},e.$$.update=()=>{1&e.$$.dirty&&n(3,l=r.favIconUrl&&""!=r.favIconUrl)},[r,i,s,l,()=>{o&&(n(2,s=!0),c("showTabDetails",r))},()=>{o&&n(2,s=!1)},()=>{chrome.tabs.update(r.id,{active:!0}),chrome.windows.update(r.windowId,{focused:!0}),c("tabIconClicked",r)},e=>{e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("tabId",r.id)},o,a]}class ct extends we{constructor(e){super(),ve(this,e,at,ot,o,{tab:0,group:1,isClickable:8,isActive:9})}}function lt(e,t,n){const s=e.slice();return s[34]=t[n],s}function ut(e){let t,n,s,i,o,a,c,l,u,h;function d(e,t){return e[10]?dt:ht}let f=d(e),p=f(e),m=e[9]&&ft(e),A=e[1].length>1&&pt(e);return{c(){t=b("div"),n=b("div"),s=b("div"),i=b("div"),p.c(),o=E(),m&&m.c(),a=E(),A&&A.c(),k(i,"class","tab-details svelte-iwx5jo"),k(s,"class","active-tab svelte-iwx5jo"),k(s,"draggable","true"),k(n,"class","top-container svelte-iwx5jo"),k(t,"class",c="window"+(e[0].incognito?" incognito":"")+(e[11]?" dragover":"")+" svelte-iwx5jo")},m(r,c){v(r,t,c),g(t,n),g(n,s),g(s,i),p.m(i,null),g(i,o),m&&m.m(i,null),g(t,a),A&&A.m(t,null),l=!0,u||(h=[C(s,"dragstart",e[21]),C(t,"mouseenter",e[13]),C(t,"mouseleave",e[14]),C(t,"dragover",e[18]),C(t,"dragleave",e[19]),C(t,"drop",e[20])],u=!0)},p(e,n){f===(f=d(e))&&p?p.p(e,n):(p.d(1),p=f(e),p&&(p.c(),p.m(i,o))),e[9]?m?m.p(e,n):(m=ft(e),m.c(),m.m(i,null)):m&&(m.d(1),m=null),e[1].length>1?A?(A.p(e,n),2&n[0]&&oe(A,1)):(A=pt(e),A.c(),oe(A,1),A.m(t,null)):A&&(re(),ae(A,1,1,(()=>{A=null})),ie()),(!l||2049&n[0]&&c!==(c="window"+(e[0].incognito?" incognito":"")+(e[11]?" dragover":"")+" svelte-iwx5jo"))&&k(t,"class",c)},i(e){l||(oe(A),l=!0)},o(e){ae(A),l=!1},d(e){e&&w(t),p.d(),m&&m.d(),A&&A.d(),u=!1,r(h)}}}function ht(e){let t,n,s,r,i,o,a,l,u,h=e[3].title+"";return{c(){t=b("img"),i=E(),o=b("span"),a=I(h),c(t.src,n=e[7]?e[3].favIconUrl:rt)||k(t,"src",n),k(t,"alt",s=e[3].url),k(t,"style",r=e[7]?"":"filter: invert(1);"),k(t,"class","svelte-iwx5jo"),k(o,"class","svelte-iwx5jo")},m(n,s){v(n,t,s),v(n,i,s),v(n,o,s),g(o,a),l||(u=C(o,"mouseup",e[17]),l=!0)},p(e,i){136&i[0]&&!c(t.src,n=e[7]?e[3].favIconUrl:rt)&&k(t,"src",n),8&i[0]&&s!==(s=e[3].url)&&k(t,"alt",s),128&i[0]&&r!==(r=e[7]?"":"filter: invert(1);")&&k(t,"style",r),8&i[0]&&h!==(h=e[3].title+"")&&S(a,h)},d(e){e&&w(t),e&&w(i),e&&w(o),l=!1,u()}}}function dt(t){let n,s,r,i;return{c(){n=b("div"),s=b("span"),s.textContent="Close Window",k(s,"class","svelte-iwx5jo"),k(n,"class","close-window-instructions svelte-iwx5jo")},m(e,o){v(e,n,o),g(n,s),r||(i=C(s,"mousedown",t[16]),r=!0)},p:e,d(e){e&&w(n),r=!1,i()}}}function ft(t){let n,s,i,o,a;return{c(){n=b("div"),s=b("img"),k(s,"class","action svelte-iwx5jo"),c(s.src,i=De)||k(s,"src",i),k(s,"alt","close"),k(n,"class","actions svelte-iwx5jo")},m(e,r){v(e,n,r),g(n,s),o||(a=[C(s,"mousedown",t[16]),C(s,"mouseenter",t[26]),C(s,"mouseleave",t[27])],o=!0)},p:e,d(e){e&&w(n),o=!1,r(a)}}}function pt(e){let t,n,s,r,i,o;function a(e,t){return e[4]&&!e[10]?mt:gt}let c=a(e),l=c(e),u=e[1].length>1&&At(e),h=e[12]&&function(e){let t;return{c(){t=b("div"),t.innerHTML='<div class="action">Open New Tab</div> \n                    <div class="action">Close Window</div> \n                    <div class="action">Save Window?</div>',k(t,"class","menu")},m(e,n){v(e,t,n)},d(e){e&&w(t)}}}();return{c(){l.c(),t=E(),n=b("div"),s=b("div"),u&&u.c(),r=E(),h&&h.c(),i=T(),k(s,"class","other-tabs svelte-iwx5jo"),k(n,"class","details svelte-iwx5jo")},m(e,a){l.m(e,a),v(e,t,a),v(e,n,a),g(n,s),u&&u.m(s,null),v(e,r,a),h&&h.m(e,a),v(e,i,a),o=!0},p(e,n){c===(c=a(e))&&l?l.p(e,n):(l.d(1),l=c(e),l&&(l.c(),l.m(t.parentNode,t))),e[1].length>1?u?(u.p(e,n),2&n[0]&&oe(u,1)):(u=At(e),u.c(),oe(u,1),u.m(s,null)):u&&(re(),ae(u,1,1,(()=>{u=null})),ie())},i(e){o||(oe(u),o=!0)},o(e){ae(u),o=!1},d(e){l.d(e),e&&w(t),e&&w(n),u&&u.d(),e&&w(r),h&&h.d(e),e&&w(i)}}}function gt(t){let n;return{c(){n=b("div"),k(n,"class","divider svelte-iwx5jo")},m(e,t){v(e,n,t)},p:e,d(e){e&&w(n)}}}function mt(e){let t,n,s,r,i,o,a=(e[4].title.length>0?e[4].title:e[4].color)+"";return{c(){t=b("div"),n=b("div"),s=b("div"),r=I(a),i=E(),o=b("div"),k(s,"class","title svelte-iwx5jo"),k(n,"class","active-group svelte-iwx5jo"),D(n,"background-color",Be[e[4].color]),k(o,"class","spacer svelte-iwx5jo"),k(t,"class","active-group-container svelte-iwx5jo")},m(e,a){v(e,t,a),g(t,n),g(n,s),g(s,r),g(t,i),g(t,o)},p(e,t){16&t[0]&&a!==(a=(e[4].title.length>0?e[4].title:e[4].color)+"")&&S(r,a),16&t[0]&&D(n,"background-color",Be[e[4].color])},d(e){e&&w(t)}}}function At(e){let t,n,s,r,i=e[8]?e[1]:e[5],o=[];for(let t=0;t<i.length;t+=1)o[t]=vt(lt(e,i,t));const a=e=>ae(o[e],1,1,(()=>{o[e]=null}));let c=!e[8]&&wt(e);return{c(){t=b("div");for(let e=0;e<o.length;e+=1)o[e].c();n=E(),c&&c.c(),s=T(),k(t,"class","tab-icons svelte-iwx5jo")},m(e,i){v(e,t,i);for(let e=0;e<o.length;e+=1)o[e]&&o[e].m(t,null);v(e,n,i),c&&c.m(e,i),v(e,s,i),r=!0},p(e,n){if(4227366&n[0]){let s;for(i=e[8]?e[1]:e[5],s=0;s<i.length;s+=1){const r=lt(e,i,s);o[s]?(o[s].p(r,n),oe(o[s],1)):(o[s]=vt(r),o[s].c(),oe(o[s],1),o[s].m(t,null))}for(re(),s=i.length;s<o.length;s+=1)a(s);ie()}e[8]?c&&(c.d(1),c=null):c?c.p(e,n):(c=wt(e),c.c(),c.m(s.parentNode,s))},i(e){if(!r){for(let e=0;e<i.length;e+=1)oe(o[e]);r=!0}},o(e){o=o.filter(Boolean);for(let e=0;e<o.length;e+=1)ae(o[e]);r=!1},d(e){e&&w(t),y(o,e),e&&w(n),c&&c.d(e),e&&w(s)}}}function vt(e){let t,n;return t=new ct({props:{tab:e[34],group:e[2][e[34].groupId],isClickable:e[8]}}),t.$on("showTabDetails",e[15]),t.$on("tabIconClicked",e[22]),{c(){pe(t.$$.fragment)},m(e,s){ge(t,e,s),n=!0},p(e,n){const s={};290&n[0]&&(s.tab=e[34]),294&n[0]&&(s.group=e[2][e[34].groupId]),256&n[0]&&(s.isClickable=e[8]),t.$set(s)},i(e){n||(oe(t.$$.fragment,e),n=!0)},o(e){ae(t.$$.fragment,e),n=!1},d(e){me(t,e)}}}function wt(e){let t,n,s,r,i=e[1].length-1+"",o=e[1].length-1>1&&yt();return{c(){t=b("div"),n=I("+"),s=I(i),r=I(" Tab"),o&&o.c(),k(t,"class","count svelte-iwx5jo")},m(e,i){v(e,t,i),g(t,n),g(t,s),g(t,r),o&&o.m(t,null)},p(e,n){2&n[0]&&i!==(i=e[1].length-1+"")&&S(s,i),e[1].length-1>1?o||(o=yt(),o.c(),o.m(t,null)):o&&(o.d(1),o=null)},d(e){e&&w(t),o&&o.d()}}}function yt(e){let t;return{c(){t=I("s")},m(e,n){v(e,t,n)},d(e){e&&w(t)}}}function bt(e){let t,n,s=e[6]&&e[3]&&ut(e);return{c(){s&&s.c(),t=T()},m(e,r){s&&s.m(e,r),v(e,t,r),n=!0},p(e,n){e[6]&&e[3]?s?(s.p(e,n),72&n[0]&&oe(s,1)):(s=ut(e),s.c(),oe(s,1),s.m(t.parentNode,t)):s&&(re(),ae(s,1,1,(()=>{s=null})),ie())},i(e){n||(oe(s),n=!0)},o(e){ae(s),n=!1},d(e){s&&s.d(e),e&&w(t)}}}function It(e,t,n){let s,r,i,o,a,c=F(),{windowData:l}=t,{tabs:u}=t,{groups:h}=t,{lastUpdatedWindow:d}=t,{lastUpdatedTab:f}=t,{view:p}=t;B((()=>{g(),m(),n(6,o=!0)}));const g=()=>{n(3,s=u.find((e=>e.active))),s&&(n(4,r=h[s.groupId]),n(7,a=s.favIconUrl&&""!=s.favIconUrl))},m=()=>{n(5,i=u.filter((e=>e.index!=s.index&&e.favIconUrl&&""!=e.favIconUrl)).slice(0,5))};let A,v;let w;return e.$$set=e=>{"windowData"in e&&n(0,l=e.windowData),"tabs"in e&&n(1,u=e.tabs),"groups"in e&&n(2,h=e.groups),"lastUpdatedWindow"in e&&n(24,d=e.lastUpdatedWindow),"lastUpdatedTab"in e&&n(25,f=e.lastUpdatedTab),"view"in e&&n(23,p=e.view)},e.$$.update=()=>{50331649&e.$$.dirty[0]&&(null!=d&&d==l.id&&g(),null!=f&&f.windowId==l.id&&g())},[l,u,h,s,r,i,o,a,!0,A,v,w,undefined,()=>{n(9,A=!0)},()=>{n(9,A=!1),g()},({detail:e})=>{n(3,s=e),n(4,r=h[s.groupId]),n(7,a=s.favIconUrl&&""!=s.favIconUrl)},()=>{1==u.length?chrome.tabs.remove(u[0].id):chrome.windows.remove(l.id)},()=>{chrome.tabs.update(s.id,{active:!0}),chrome.windows.update(s.windowId,{focused:!0})},e=>{e.preventDefault(),n(11,w=!0)},e=>{e.preventDefault(),w&&n(11,w=!1)},e=>{e.preventDefault(),w&&n(11,w=!1);const t=parseInt(e.dataTransfer.getData("tabId"));chrome.tabs.move(t,{index:-1,windowId:l.id}),c("tabMoved",t)},e=>{e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("tabId",s.id)},()=>{n(23,p=Ie.tabs)},p,d,f,()=>n(10,v=!0),()=>n(10,v=!1)]}class Et extends we{constructor(e){super(),ve(this,e,It,bt,o,{windowData:0,tabs:1,groups:2,lastUpdatedWindow:24,lastUpdatedTab:25,view:23},null,[-1,-1])}}var Tt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAASVJREFUaEPtmDsSQTEUhj87YxkalRqtCp2SUWtUdsHSTEjMMNfIOUmGO/OnSpHH/zq5NxnQ8zboOX5E4NcOehy4AMNGwDfA2rK2CFjUyhgrBzJEYgXP0yv0a7SgfGrNayBtFAo5FHSN5qnF+77uifEkEoFon1tI90Q58Fo5biHdE+WAHHgooAjV+IqVCCkH5EBhLSpCfY5Q+G+vdR8YA2ePGN4I1QSfcE+Bo5WEh0AL8An3DDhYSFgJtASfcC+BbS4JC4GaV8hv+EbA9dsg67+QCOQoGsfIgS6xeh8hQwLuj7/vTy7ZsbBsZDmFLOuKQK5acuCDUoqQIpSrgCJUqJROIUXoTyMUYO2AecS3BxaFWDunt6qBtNkpdiYtwFtvZK0wFK17A16SRjFoqFx8AAAAAElFTkSuQmCC",Ct="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAV9JREFUaEPtmT9OAkEUxn9U3kKN2mppIpUGriCew9ZGjAln4AgKZzDY0VtYGDTx7x3syCsWN5MZsjNkd8B8k9CQ9/Z935sfs8u+Fhu+WhuuHxnIvYNVdmAb2Msk9AP4Bn5D9ZcZOAcugZNM4ouyP8AtMPTpCBm4AO4yC3fLd4EH90ufgS3gOSM2ob69AEcuTj4D+8BszbpfyDkAXsvafAZOgYlj4CaToWun7hnwmGqg37AJqycDRdMNIe1AJIJCqNwwIRSJj4ULISGUgE05RQgJISGkh7k/BnQnTvg96BjVMZqAje7E1oHQWwn9pYxESqeQTqFIZNxwIfTvEFqRiKT0pHejNlJ6TypXf9IOYGOnxQpNaJ6Aw/r1RFWYAm03I2TA5mOjqMvXH9wDxlUNWNwxMAA69WtbWuENuALufVFVxqy7gH1yrE/gK3XMmkNwdM0qOxB90SYTZKDJbvtqzQG35Y8xbLf2ywAAAABJRU5ErkJggg==",kt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAntJREFUaEPtmc9LVUEUxz9vEboQCluIBCUlhogthIQkoSjoB9hCSC2I/oIWbgOhEIL2LlpEizZm2qIftAgyEcFFC0EhUFTQMmjRwkWLFkEcOU+uw9x35703984V7sCDx51553y+58y8mXOnxCFvpUPOTyEgdAZdMnASOB0IdBvYAf7G+a8k4DYwClwIBF92+xMYB57ZOOIEDAOvAoOb7q8Cn82HNgENwLeA0yYubmvAOXM62QScAdZzFv0yTjuwEWWzCbgEfMmpgMvAXCEgYHaKDAQM/p7rIgNpZOA5MAg0OxjPVQZWgPvAkoK/BO4liMiNAIG+A6xGgFsBOfdUarkQ8FXhD+yowAgwmXcBiwq/ZYB2AtNAV54FzAN39Xwf5exQeDmoJbVgU2hW4X8ZhFIoSeR7ksi135uABWAMWAZu6PezMRCfFP630S+V3gxw3hHe60Y2AHyIOJYIvgNOGDAfFX7XeC7jJPLVVnveMiDR+25A9QPvgaP6XATJnP9jjGvRyF+sIvLlod4ETAAPLADXNTNvFd4sxo8rvNQctTRvAsT5Y+CRhUKOBSLgn9F3TOGv1ELuexGXGeJEmIxNCn+tDnivizjKkSSiEXgD3KwTPjUBlabTEY38LQ/wqQqwiZAXBvI/L2vCV/O6iG1QL4CnQB8gb/Z8TJuon9QF+Ip0nJ1CQNoRTrJfZCApQmn3FxlIO8JJ9p0yIEdls2ZNMpxV/ylArp32W9wNjVRa3VlROfqRFwKyQR5ocQJkF33taDirYUNaxTkJkEG9wBOgnvO7D3GbwENgymbM5Zq1DZBPiCZl649ar1lDAFft0yUDVRvN8geFgCyjbfP1H1jrizENZqZUAAAAAElFTkSuQmCC";function St(t){let n,s,r,i,o;return{c(){n=b("div"),s=b("div"),r=I(t[0]),k(s,"class","title svelte-eray5u"),k(n,"class","menu-item svelte-eray5u")},m(e,a){v(e,n,a),g(n,s),g(s,r),i||(o=C(n,"mouseup",t[1]),i=!0)},p(e,[t]){1&t&&S(r,e[0])},i:e,o:e,d(e){e&&w(n),i=!1,o()}}}function Rt(e,t,n){let{title:s}=t;return e.$$set=e=>{"title"in e&&n(0,s=e.title)},[s,function(t){V.call(this,e,t)}]}class Dt extends we{constructor(e){super(),ve(this,e,Rt,St,o,{title:0})}}function Nt(t){let n,s;return n=new Dt({props:{title:"Move Group to New Window"}}),n.$on("mousedown",t[5]),{c(){pe(n.$$.fragment)},m(e,t){ge(n,e,t),s=!0},p:e,i(e){s||(oe(n.$$.fragment,e),s=!0)},o(e){ae(n.$$.fragment,e),s=!1},d(e){me(n,e)}}}function Ut(t){let n,s;return n=new Dt({props:{title:"Close Group"}}),n.$on("mousedown",t[3]),{c(){pe(n.$$.fragment)},m(e,t){ge(n,e,t),s=!0},p:e,i(e){s||(oe(n.$$.fragment,e),s=!0)},o(e){ae(n.$$.fragment,e),s=!1},d(e){me(n,e)}}}function xt(e){let t,n,s,i,o,a,l,u,h,d,f,p,m,A,y,I,T,S,D,N,U,x,_,O,L,M,P,B,F,V,$;d=new Dt({props:{title:"Pin"}}),d.$on("mouseup",e[7]),p=new Dt({props:{title:"Reload"}}),p.$on("mouseup",e[6]),A=new Dt({props:{title:"Duplicate"}}),A.$on("mouseup",e[10]),S=new Dt({props:{title:"Move Tab to Pop Up Window"}}),S.$on("mouseup",e[2]),N=new Dt({props:{title:"Move Tab to New Window"}}),N.$on("mouseup",e[1]);let j=e[0].groupId>-1&&Nt(e);L=new Dt({props:{title:"Close Tab"}}),L.$on("mousedown",e[4]);let G=e[0].groupId>-1&&Ut(e);return{c(){t=b("div"),n=b("div"),s=b("img"),o=E(),a=b("input"),l=E(),u=b("div"),h=E(),pe(d.$$.fragment),f=E(),pe(p.$$.fragment),m=E(),pe(A.$$.fragment),y=E(),I=b("div"),T=E(),pe(S.$$.fragment),D=E(),pe(N.$$.fragment),U=E(),j&&j.c(),x=E(),_=b("div"),O=E(),pe(L.$$.fragment),M=E(),G&&G.c(),c(s.src,i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAcBJREFUaEPtmr8uBUEUxn+34hGEggJPQCLREBWReASRkGhE3BfAC9AIEgqt1r+oUNGodBSi8ecJRCkn2U1WzO7embN3r5Ez7e755nznfHNmds42iHw0IvcfDYENoB8YaEMQPoFH4Ao4K8IPJfAK9LbBcRfkJiDBco4QAlvAWk3Op9OMAveuOX0J9ADvNTsv0+0AK1UQGAPuOkDgEpiugsAEcN0BAjfApBEALAOB8guSkERbDLMjigzMANvAMPCU1PyLhEUUBA6AxUzYD4GlmAhImZRIpyOrvygyYAQCK02RmVcVsgxYBn5HwCSUngStjAauD5OQSShQOq7jzA8o10e9bWTKaLvMbRHbIlbKyiRkEvorEhpKbiqU/nibHwELrV4tFm1kXcBzjb2B1OfcHoHvTiyAy8CedwzDDd6AvjzzEAKCNQXsJpdf4a6VW8oFW7PotVACgtmd9Mek6VH1+AJegI8yYA2BMuxanv9LAueAXPBmz+LtiOYxsK8FdmWgzi7kHHCiIeEiMAucakA9bHMPaa1i5LVZpbG83iqI4r1x4FZhX/irwQgwDwwmJVMzj8t2FXjQgvo2urXzVW4fPYFv6fKUMS3vSekAAAAASUVORK5CYII=")||k(s,"src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAcBJREFUaEPtmr8uBUEUxn+34hGEggJPQCLREBWReASRkGhE3BfAC9AIEgqt1r+oUNGodBSi8ecJRCkn2U1WzO7embN3r5Ez7e755nznfHNmds42iHw0IvcfDYENoB8YaEMQPoFH4Ao4K8IPJfAK9LbBcRfkJiDBco4QAlvAWk3Op9OMAveuOX0J9ADvNTsv0+0AK1UQGAPuOkDgEpiugsAEcN0BAjfApBEALAOB8guSkERbDLMjigzMANvAMPCU1PyLhEUUBA6AxUzYD4GlmAhImZRIpyOrvygyYAQCK02RmVcVsgxYBn5HwCSUngStjAauD5OQSShQOq7jzA8o10e9bWTKaLvMbRHbIlbKyiRkEvorEhpKbiqU/nibHwELrV4tFm1kXcBzjb2B1OfcHoHvTiyAy8CedwzDDd6AvjzzEAKCNQXsJpdf4a6VW8oFW7PotVACgtmd9Mek6VH1+AJegI8yYA2BMuxanv9LAueAXPBmz+LtiOYxsK8FdmWgzi7kHHCiIeEiMAucakA9bHMPaa1i5LVZpbG83iqI4r1x4FZhX/irwQgwDwwmJVMzj8t2FXjQgvo2urXzVW4fPYFv6fKUMS3vSekAAAAASUVORK5CYII="),k(s,"alt","Copy Link"),k(s,"class","svelte-1e9c6xn"),k(a,"type","text"),k(a,"class","svelte-1e9c6xn"),k(n,"class","url-field svelte-1e9c6xn"),k(u,"class","divider svelte-1e9c6xn"),k(I,"class","divider svelte-1e9c6xn"),k(_,"class","divider svelte-1e9c6xn"),k(t,"class","context-menu svelte-1e9c6xn")},m(r,i){v(r,t,i),g(t,n),g(n,s),g(n,o),g(n,a),R(a,e[0].url),g(t,l),g(t,u),g(t,h),ge(d,t,null),g(t,f),ge(p,t,null),g(t,m),ge(A,t,null),g(t,y),g(t,I),g(t,T),ge(S,t,null),g(t,D),ge(N,t,null),g(t,U),j&&j.m(t,null),g(t,x),g(t,_),g(t,O),ge(L,t,null),g(t,M),G&&G.m(t,null),F=!0,V||($=[C(s,"mousedown",e[8]),C(a,"input",e[11]),C(a,"keydown",e[9])],V=!0)},p(e,[n]){1&n&&a.value!==e[0].url&&R(a,e[0].url),e[0].groupId>-1?j?(j.p(e,n),1&n&&oe(j,1)):(j=Nt(e),j.c(),oe(j,1),j.m(t,x)):j&&(re(),ae(j,1,1,(()=>{j=null})),ie()),e[0].groupId>-1?G?(G.p(e,n),1&n&&oe(G,1)):(G=Ut(e),G.c(),oe(G,1),G.m(t,null)):G&&(re(),ae(G,1,1,(()=>{G=null})),ie())},i(e){F||(oe(d.$$.fragment,e),oe(p.$$.fragment,e),oe(A.$$.fragment,e),oe(S.$$.fragment,e),oe(N.$$.fragment,e),oe(j),oe(L.$$.fragment,e),oe(G),W((()=>{F&&(B&&B.end(1),P=le(t,Re,{}),P.start())})),F=!0)},o(e){ae(d.$$.fragment,e),ae(p.$$.fragment,e),ae(A.$$.fragment,e),ae(S.$$.fragment,e),ae(N.$$.fragment,e),ae(j),ae(L.$$.fragment,e),ae(G),P&&P.invalidate(),B=ue(t,Re,{}),F=!1},d(e){e&&w(t),me(d),me(p),me(A),me(S),me(N),j&&j.d(),me(L),G&&G.d(),e&&B&&B.end(),V=!1,r($)}}}function _t(e,t,n){F();let{tab:s}=t;return e.$$set=e=>{"tab"in e&&n(0,s=e.tab)},[s,async()=>{await chrome.windows.create({tabId:s.id,focused:!0})},async()=>{chrome.windows.create({tabId:s.id,type:"popup",focused:!0})},async()=>{chrome.tabs.remove((await chrome.tabs.query({groupId:s.groupId})).map((e=>e.id)))},()=>{chrome.tabs.remove(s.id)},async()=>{const e=await chrome.windows.create();await chrome.tabGroups.move({windowId:e.id});const t=await chrome.tabs.query({windowId:e,url:"chrome://newtab/"});t&&await chrome.tabs.remove(t.id)},()=>{chrome.tabs.reload(s.id)},()=>{chrome.tabs.update(s.id,{pinned:!0})},()=>{navigator.clipboard.writeText(s.url)},e=>{"Enter"==e.key&&chrome.tabs.update(s.id,{url:"https://"+s.url})},()=>{chrome.tabs.create({url:s.url,index:s.index+1})},function(){s.url=this.value,n(0,s)}]}class Ot extends we{constructor(e){super(),ve(this,e,_t,xt,o,{tab:0})}}function Lt(t){let n;return{c(){n=b("div"),k(n,"class","bookmark-menu")},m(e,t){v(e,n,t)},p:e,i:e,o:e,d(e){e&&w(n)}}}function Mt(e,t,n){let{tab:s}=t;return e.$$set=e=>{"tab"in e&&n(0,s=e.tab)},[s]}class Pt extends we{constructor(e){super(),ve(this,e,Mt,Lt,o,{tab:0})}}function Bt(e){let t,n,s;return{c(){t=b("img"),k(t,"class","favicon svelte-gnr8gs"),c(t.src,n=rt)||k(t,"src",n),k(t,"alt",s=e[0].title),D(t,"filter","invert(1)")},m(e,n){v(e,t,n)},p(e,n){1&n[0]&&s!==(s=e[0].title)&&k(t,"alt",s)},d(e){e&&w(t)}}}function Ft(e){let t,n,s;return{c(){t=b("img"),k(t,"class","favicon svelte-gnr8gs"),c(t.src,n=e[0].favIconUrl)||k(t,"src",n),k(t,"alt",s=e[0].title)},m(e,n){v(e,t,n)},p(e,r){1&r[0]&&!c(t.src,n=e[0].favIconUrl)&&k(t,"src",n),1&r[0]&&s!==(s=e[0].title)&&k(t,"alt",s)},d(e){e&&w(t)}}}function Vt(t){let n,s,r,i;return{c(){n=b("img"),k(n,"class","icon svelte-gnr8gs"),c(n.src,s=Ct)||k(n,"src",s),k(n,"alt","Select")},m(e,s){v(e,n,s),r||(i=C(n,"mousedown",t[17]),r=!0)},p:e,d(e){e&&w(n),r=!1,i()}}}function $t(t){let n,s,r,i;return{c(){n=b("img"),k(n,"class","icon svelte-gnr8gs"),c(n.src,s=kt)||k(n,"src",s),k(n,"alt","Unselect")},m(e,s){v(e,n,s),r||(i=C(n,"mousedown",t[17]),r=!0)},p:e,d(e){e&&w(n),r=!1,i()}}}function jt(e){let t;return{c(){t=b("div"),k(t,"class","group-indicator svelte-gnr8gs"),D(t,"background-color",Be[e[1].color])},m(e,n){v(e,t,n)},p(e,n){2&n[0]&&D(t,"background-color",Be[e[1].color])},d(e){e&&w(t)}}}function Gt(e){let t,n,s,r=e[0].pinned&&Kt(e),i=(e[0].bookmarks||e[4]&&e[0].groupId>-1)&&Qt(e),o=e[4]&&!e[7]&&qt(e);return{c(){t=b("div"),r&&r.c(),n=E(),i&&i.c(),s=E(),o&&o.c(),k(t,"class","actions svelte-gnr8gs")},m(e,a){v(e,t,a),r&&r.m(t,null),g(t,n),i&&i.m(t,null),g(t,s),o&&o.m(t,null)},p(e,a){e[0].pinned?r?r.p(e,a):(r=Kt(e),r.c(),r.m(t,n)):r&&(r.d(1),r=null),e[0].bookmarks||e[4]&&e[0].groupId>-1?i?i.p(e,a):(i=Qt(e),i.c(),i.m(t,s)):i&&(i.d(1),i=null),e[4]&&!e[7]?o?o.p(e,a):(o=qt(e),o.c(),o.m(t,null)):o&&(o.d(1),o=null)},d(e){e&&w(t),r&&r.d(),i&&i.d(),o&&o.d()}}}function Kt(t){let n,s,r,i;return{c(){n=b("img"),c(n.src,s=Tt)||k(n,"src",s),k(n,"class","icon svelte-gnr8gs"),k(n,"alt","Pinned")},m(e,s){v(e,n,s),r||(i=C(n,"mouseup",t[10]),r=!0)},p:e,d(e){e&&w(n),r=!1,i()}}}function Qt(e){let t,n,s,r;return{c(){t=b("img"),k(t,"class","icon svelte-gnr8gs"),c(t.src,n=e[0].bookmarks?qe:Qe)||k(t,"src",n),k(t,"alt","Save")},m(n,i){v(n,t,i),s||(r=C(t,"mousedown",e[24]),s=!0)},p(e,s){1&s[0]&&!c(t.src,n=e[0].bookmarks?qe:Qe)&&k(t,"src",n)},d(e){e&&w(t),s=!1,r()}}}function qt(t){let n,s,i,o,a,l,u;return{c(){n=b("img"),i=E(),o=b("img"),c(n.src,s=Pe)||k(n,"src",s),k(n,"class","icon svelte-gnr8gs"),k(n,"alt","Menu"),c(o.src,a=De)||k(o,"src",a),k(o,"class","icon svelte-gnr8gs"),k(o,"alt","Close")},m(e,s){v(e,n,s),v(e,i,s),v(e,o,s),l||(u=[C(n,"mousedown",t[15]),C(o,"mouseup",t[16])],l=!0)},p:e,d(e){e&&w(n),e&&w(i),e&&w(o),l=!1,r(u)}}}function Wt(e){let t,n;return t=new Pt({props:{tab:e[0]}}),{c(){pe(t.$$.fragment)},m(e,s){ge(t,e,s),n=!0},p(e,n){const s={};1&n[0]&&(s.tab=e[0]),t.$set(s)},i(e){n||(oe(t.$$.fragment,e),n=!0)},o(e){ae(t.$$.fragment,e),n=!1},d(e){me(t,e)}}}function zt(e){let t,n;return t=new Ot({props:{tab:e[0]}}),{c(){pe(t.$$.fragment)},m(e,s){ge(t,e,s),n=!0},p(e,n){const s={};1&n[0]&&(s.tab=e[0]),t.$set(s)},i(e){n||(oe(t.$$.fragment,e),n=!0)},o(e){ae(t.$$.fragment,e),n=!1},d(e){me(t,e)}}}function Ht(e){let t,n,s,i,o,a,c,l,u,h,d,f,p,m,A,y,T,R,D=e[0].title+"";function N(e,t){return e[3]?$t:e[5]?Vt:e[0].favIconUrl&&""!=e[0].favIconUrl?Ft:Bt}let U=N(e),x=U(e),_=e[1]&&jt(e),O=!e[3]&&!e[7]&&Gt(e);const L=[zt,Wt],M=[];function P(e,t){return e[6]?0:e[9]?1:-1}return~(f=P(e))&&(p=M[f]=L[f](e)),{c(){t=b("div"),n=b("div"),s=b("div"),x.c(),i=E(),_&&_.c(),o=E(),a=b("div"),c=I(D),l=E(),u=b("div"),h=E(),O&&O.c(),d=E(),p&&p.c(),k(s,"class","favicon-container svelte-gnr8gs"),k(a,"class","title svelte-gnr8gs"),k(u,"class","spacer svelte-gnr8gs"),k(n,"class","main-container svelte-gnr8gs"),k(t,"class",m="tab"+(e[3]?" selected":"")+(e[4]?" focused":"")+(e[8]?" dragged-over":"")+(e[0].active?" active":"")+(e[1]?" grouped":"")+" svelte-gnr8gs"),k(t,"draggable",A=e[6]?"false":"true")},m(r,p){v(r,t,p),g(t,n),g(n,s),x.m(s,null),g(s,i),_&&_.m(s,null),g(n,o),g(n,a),g(a,c),g(n,l),g(n,u),g(n,h),O&&O.m(n,null),g(t,d),~f&&M[f].m(t,null),e[28](t),y=!0,T||(R=[C(s,"mouseleave",e[14]),C(s,"mouseenter",e[13]),C(a,"mousedown",e[23]),C(u,"mousedown",e[23]),C(t,"mouseenter",e[11]),C(t,"mouseleave",e[12]),C(t,"dragstart",e[18]),C(t,"dragover",e[19]),C(t,"dragleave",e[20]),C(t,"dragend",e[21]),C(t,"drop",e[22])],T=!0)},p(e,r){U===(U=N(e))&&x?x.p(e,r):(x.d(1),x=U(e),x&&(x.c(),x.m(s,i))),e[1]?_?_.p(e,r):(_=jt(e),_.c(),_.m(s,null)):_&&(_.d(1),_=null),(!y||1&r[0])&&D!==(D=e[0].title+"")&&S(c,D),e[3]||e[7]?O&&(O.d(1),O=null):O?O.p(e,r):(O=Gt(e),O.c(),O.m(n,null));let o=f;f=P(e),f===o?~f&&M[f].p(e,r):(p&&(re(),ae(M[o],1,1,(()=>{M[o]=null})),ie()),~f?(p=M[f],p?p.p(e,r):(p=M[f]=L[f](e),p.c()),oe(p,1),p.m(t,null)):p=null),(!y||283&r[0]&&m!==(m="tab"+(e[3]?" selected":"")+(e[4]?" focused":"")+(e[8]?" dragged-over":"")+(e[0].active?" active":"")+(e[1]?" grouped":"")+" svelte-gnr8gs"))&&k(t,"class",m),(!y||64&r[0]&&A!==(A=e[6]?"false":"true"))&&k(t,"draggable",A)},i(e){y||(oe(p),y=!0)},o(e){ae(p),y=!1},d(n){n&&w(t),x.d(),_&&_.d(),O&&O.d(),~f&&M[f].d(),e[28](null),T=!1,r(R)}}}function Jt(e,t,n){let s,r,{tab:i}=t,{group:o=null}=t,{selectedTabs:a}=t,{lastSelectionUpdate:c}=t,{dragoverItem:l=null}=t;B((()=>{u()}));const u=()=>{if(i.active&&s){const e=s.getBoundingClientRect();e.top<window.innerHeight&&e.bottom>0||s.scrollIntoView({behavior:"smooth"})}};let h,d,f=F();let p;let g;let m;let A;return e.$$set=e=>{"tab"in e&&n(0,i=e.tab),"group"in e&&n(1,o=e.group),"selectedTabs"in e&&n(25,a=e.selectedTabs),"lastSelectionUpdate"in e&&n(26,c=e.lastSelectionUpdate),"dragoverItem"in e&&n(27,l=e.dragoverItem)},e.$$.update=()=>{100663297&e.$$.dirty[0]&&n(3,r=null!=a.find((e=>e.id==i.id))),1&e.$$.dirty[0]&&(i.active,u())},[i,o,s,r,h,d,p,g,m,A,()=>{chrome.tabs.update(i.id,{pinned:!0})},e=>{n(4,h=!0)},()=>{n(4,h=!1),n(6,p=!1),n(5,d=!1)},e=>{n(5,d=!0)},e=>{n(5,d=!1)},e=>{n(6,p=!0)},()=>{chrome.tabs.remove(i.id)},()=>{f("updateSelection",i)},e=>{n(7,g=!0),e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("tabId",i.id)},e=>{e.preventDefault(),m||n(8,m=!0)},e=>{e.preventDefault(),m&&n(8,m=!1)},e=>{n(7,g=!1)},async e=>{m&&n(8,m=!1);let t=e.dataTransfer.getData("tabId");const s=e.dataTransfer.getData("groupId");if(t){t=parseInt(t);const e=await chrome.tabs.get(t);e.groupId>-1&&-1==i.groupId&&await chrome.tabs.ungroup(e.id),await chrome.tabs.move(e.id,{index:i.index})}else s&&await chrome.tabGroups.move(parseInt(s),{index:i.index})},()=>{chrome.tabs.update(i.id,{active:!0}),chrome.windows.update(i.windowId,{focused:!0}),console.log(i)},async()=>{if(i.bookmarks)i.bookmarks.length>1?n(9,A=!0):(delete i.bookmarks,f("tabBookmarkRemoved",i));else{let e=await(async(e,t)=>{try{return await be(e,t)}catch(n){if(await chrome.permissions.request({permissions:["bookmarks"]}))return await be(e,t)}return{tab:e,group:t}})(i,o);e&&f("tabBookmarkAdded",e)}},a,c,l,function(e){j[e?"unshift":"push"]((()=>{s=e,n(2,s)}))}]}class Xt extends we{constructor(e){super(),ve(this,e,Jt,Ht,o,{tab:0,group:1,selectedTabs:25,lastSelectionUpdate:26,dragoverItem:27},null,[-1,-1])}}function Yt(e,t,n){const s=e.slice();return s[5]=t[n],s}function Zt(t){let n,s,r,i,o;return{c(){n=b("div"),s=b("span"),r=I('No results could be found for "'),i=I(t[0]),o=I('"'),k(n,"class","no-results-container svelte-xih95y")},m(e,t){v(e,n,t),g(n,s),g(s,r),g(s,i),g(s,o)},p(e,t){1&t&&S(i,e[0])},i:e,o:e,d(e){e&&w(n)}}}function en(e){let t,n,s=[],r=new Map,i=e[1];const o=e=>e[5];for(let t=0;t<i.length;t+=1){let n=Yt(e,i,t),a=o(n);r.set(a,s[t]=tn(a,n))}return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=T()},m(e,r){for(let t=0;t<s.length;t+=1)s[t]&&s[t].m(e,r);v(e,t,r),n=!0},p(e,n){14&n&&(i=e[1],re(),s=de(s,n,o,1,e,i,r,t.parentNode,he,tn,t,Yt),ie())},i(e){if(!n){for(let e=0;e<i.length;e+=1)oe(s[e]);n=!0}},o(e){for(let e=0;e<s.length;e+=1)ae(s[e]);n=!1},d(e){for(let t=0;t<s.length;t+=1)s[t].d(e);e&&w(t)}}}function tn(e,t){let n,s,r;return s=new Xt({props:{tab:t[5],selectedTabs:t[2],lastSelectionUpdate:t[3]}}),s.$on("updateSelection",t[4]),{key:e,first:null,c(){n=T(),pe(s.$$.fragment),this.first=n},m(e,t){v(e,n,t),ge(s,e,t),r=!0},p(e,n){t=e;const r={};2&n&&(r.tab=t[5]),4&n&&(r.selectedTabs=t[2]),8&n&&(r.lastSelectionUpdate=t[3]),s.$set(r)},i(e){r||(oe(s.$$.fragment,e),r=!0)},o(e){ae(s.$$.fragment,e),r=!1},d(e){e&&w(n),me(s,e)}}}function nn(e){let t,n,s,r;const i=[en,Zt],o=[];function a(e,t){return e[1].length>0?0:1}return n=a(e),s=o[n]=i[n](e),{c(){t=b("div"),s.c(),k(t,"class","search-results svelte-xih95y")},m(e,s){v(e,t,s),o[n].m(t,null),r=!0},p(e,[r]){let c=n;n=a(e),n===c?o[n].p(e,r):(re(),ae(o[c],1,1,(()=>{o[c]=null})),ie(),s=o[n],s?s.p(e,r):(s=o[n]=i[n](e),s.c()),oe(s,1),s.m(t,null))},i(e){r||(oe(s),r=!0)},o(e){ae(s),r=!1},d(e){e&&w(t),o[n].d()}}}function sn(e,t,n){let{searchText:s}=t,{searchResults:r}=t,{selectedTabs:i=[]}=t,{lastSelectionUpdate:o=null}=t;return e.$$set=e=>{"searchText"in e&&n(0,s=e.searchText),"searchResults"in e&&n(1,r=e.searchResults),"selectedTabs"in e&&n(2,i=e.selectedTabs),"lastSelectionUpdate"in e&&n(3,o=e.lastSelectionUpdate)},[s,r,i,o,function(t){V.call(this,e,t)}]}class rn extends we{constructor(e){super(),ve(this,e,sn,nn,o,{searchText:0,searchResults:1,selectedTabs:2,lastSelectionUpdate:3})}}function on(t){let n;return{c(){n=b("div"),k(n,"class","divider svelte-1iv77rr")},m(e,t){v(e,n,t)},p:e,i:e,o:e,d(e){e&&w(n)}}}class an extends we{constructor(e){super(),ve(this,e,null,on,o,{})}}var cn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAj1JREFUaEPtmTtPFUEUgD9+AHT2EE00/gAeHUYqqdFCSHgkPAqhERoooQEKH4VCfJAABVBjpYEO5QcQTCDQU/IDNOdmN7kZdpZ5nLk3kN3y7jkz33fOzO5sbgt3/Gq54/xUAs3uYNWB+9yBcWAYaAO+AO9SyKZaQvPAogG8ACxpS6QQeAusWEBngVVNCW2BaeD9LYAzwActCU2BSeCTI9gU8NkxtjRMS2AU+OoJNAZ888y5Ea4hMAhsBoIMAVuBubW0WIGXwE4MAPAK2A0dI1bgFHhcMLmImVBFv0nqX+BJMwTagQsL/BVwYNx7BjywVLsDuAyRiO3A9+xtm88tVd4Dei0Ch8CAIbEBjITAa+yBp4BAPwI+An8ykDIBCekC3gBnmcxJswRs894mEMqb5DFaBFMJuLYodhNXS8i10ra4qgOWyrwA9o17/cCP2Iqb+ak6IB8uy8ZkcyUfOsFeqQTMN7QARr1xG7kHOoGfQKsx6TXQBxwHl7sgMUUHBP65BfJXJqHmoC0gR2g5rJVdctiT85PKpSngAp9Dq0loCdjgBVSuoq6oSGgIlMHnS8UlJmhJxQr4gPnEOsvECIQAheSUyoQKxIDE5N6QCRHQANAYoybjK6A2cfYtHP108hHoBo4KFmTM49BWkB7gt8tO9hGQPyzWjEFj4POhiiQmgHVtARnvX92gGvA2CefCOgfWgb8Gzl1b7FLFLEaW6ENg2yPHexP7jN2Q2JAONATMdZJKwLVSqeKqDqSqrOu4/wGsOmox80TaTAAAAABJRU5ErkJggg==";function ln(t){let n,s,r;return{c(){n=b("div"),n.textContent="Group",k(n,"class","action svelte-1qszx3y")},m(e,i){v(e,n,i),s||(r=C(n,"mousedown",t[2]),s=!0)},p:e,d(e){e&&w(n),s=!1,r()}}}function un(t){let n,s,r;return{c(){n=b("div"),n.textContent="Move to New Window",k(n,"class","action svelte-1qszx3y")},m(e,i){v(e,n,i),s||(r=C(n,"mousedown",t[3]),s=!0)},p:e,d(e){e&&w(n),s=!1,r()}}}function hn(t){let n,s,i,o,a;return{c(){n=b("div"),n.textContent="Save",s=E(),i=b("div"),i.textContent="Stash",k(n,"class","action svelte-1qszx3y"),k(i,"class","action svelte-1qszx3y")},m(e,r){v(e,n,r),v(e,s,r),v(e,i,r),o||(a=[C(n,"mousedown",t[5]),C(i,"mousedown",t[6])],o=!0)},p:e,d(e){e&&w(n),e&&w(s),e&&w(i),o=!1,r(a)}}}function dn(t){let n,s,r,i,o,a,c=1!=t[1]&&ln(t);function l(e,t){return e[0]==Ie.workspace?hn:un}let u=l(t),h=u(t);return{c(){n=b("div"),c&&c.c(),s=E(),h.c(),r=E(),i=b("div"),i.textContent="Close",k(i,"class","action svelte-1qszx3y"),k(n,"class","actions svelte-1qszx3y")},m(e,l){v(e,n,l),c&&c.m(n,null),g(n,s),h.m(n,null),g(n,r),g(n,i),o||(a=C(i,"mousedown",t[4]),o=!0)},p(e,[t]){1!=e[1]?c?c.p(e,t):(c=ln(e),c.c(),c.m(n,s)):c&&(c.d(1),c=null),u===(u=l(e))&&h?h.p(e,t):(h.d(1),h=u(e),h&&(h.c(),h.m(n,r)))},i:e,o:e,d(e){e&&w(n),c&&c.d(),h.d(),o=!1,a()}}}function fn(e,t,n){let{lastSelectionUpdate:s}=t,{selectedTabs:r}=t,{view:i}=t,o=F(),a=0;B((()=>{c()}));const c=()=>{let e=[];for(const t of r)t.groupId>-1&&!e.includes(t.groupId)&&e.push(t.groupId);n(1,a=e.length)};return e.$$set=e=>{"lastSelectionUpdate"in e&&n(8,s=e.lastSelectionUpdate),"selectedTabs"in e&&n(7,r=e.selectedTabs),"view"in e&&n(0,i=e.view)},e.$$.update=()=>{256&e.$$.dirty&&c()},[i,a,async()=>{const e=await chrome.tabs.group({tabIds:r.map((e=>e.id))});await chrome.tabGroups.update(e,{title:r[0].title}),n(7,r=[])},async()=>{const e=r.shift(),t=await chrome.windows.create({tabId:e.id,focused:!0});await chrome.tabs.move(r.map((e=>e.id)),{windowId:t.id,index:0}),n(7,r=[])},async()=>{chrome.tabs.remove(r.map((e=>e.id))),n(7,r=[])},async()=>{o("saveSelectedTabs")},async()=>{o("stashSelectedTabs")},r,s]}class pn extends we{constructor(e){super(),ve(this,e,fn,dn,o,{lastSelectionUpdate:8,selectedTabs:7,view:0})}}function gn(t){let n,s,r=t[0],i=vn(t);return{c(){i.c(),n=T()},m(e,t){i.m(e,t),v(e,n,t),s=!0},p(t,s){1&s&&o(r,r=t[0])?(re(),ae(i,1,1,e),ie(),i=vn(t),i.c(),oe(i,1),i.m(n.parentNode,n)):i.p(t,s)},i(e){s||(oe(i),s=!0)},o(e){ae(i),s=!1},d(e){e&&w(n),i.d(e)}}}function mn(e){let t;return{c(){t=I("s")},m(e,n){v(e,t,n)},d(e){e&&w(t)}}}function An(e){let t;return{c(){t=I("s")},m(e,n){v(e,t,n)},d(e){e&&w(t)}}}function vn(e){let t,n,s,i,o,a,l,u,h,d,f,p,m,A,y,T,R,D,N,U,x,_,O=e[1]>0&&mn();f=new an({});let L=e[2]>0&&An();return{c(){t=b("div"),n=b("div"),s=b("img"),o=E(),a=b("div"),l=b("div"),u=I(e[1]),h=I(" Window"),O&&O.c(),d=E(),pe(f.$$.fragment),p=E(),m=b("div"),A=I(e[2]),y=I(" Tab"),L&&L.c(),T=E(),R=b("div"),D=b("img"),c(s.src,i=cn)||k(s,"src",i),k(s,"alt","Merge Windows"),k(s,"class","svelte-1bpbk33"),k(n,"class","action svelte-1bpbk33"),k(l,"class","count"),k(m,"class","count"),k(a,"class","counts svelte-1bpbk33"),c(D.src,N=Oe)||k(D,"src",N),k(D,"alt","Create Window"),k(D,"class","svelte-1bpbk33"),k(R,"class","action svelte-1bpbk33"),k(t,"class","home-footer svelte-1bpbk33")},m(r,i){v(r,t,i),g(t,n),g(n,s),g(t,o),g(t,a),g(a,l),g(l,u),g(l,h),O&&O.m(l,null),g(a,d),ge(f,a,null),g(a,p),g(a,m),g(m,A),g(m,y),L&&L.m(m,null),g(t,T),g(t,R),g(R,D),U=!0,x||(_=[C(n,"mousedown",e[5]),C(R,"mousedown",e[4])],x=!0)},p(e,t){(!U||2&t)&&S(u,e[1]),e[1]>0?O||(O=mn(),O.c(),O.m(l,null)):O&&(O.d(1),O=null),(!U||4&t)&&S(A,e[2]),e[2]>0?L||(L=An(),L.c(),L.m(m,null)):L&&(L.d(1),L=null)},i(e){U||(oe(f.$$.fragment,e),U=!0)},o(e){ae(f.$$.fragment,e),U=!1},d(e){e&&w(t),O&&O.d(),me(f),L&&L.d(),x=!1,r(_)}}}function wn(e){let t,n,s=e[3]&&gn(e);return{c(){s&&s.c(),t=T()},m(e,r){s&&s.m(e,r),v(e,t,r),n=!0},p(e,[n]){e[3]?s?(s.p(e,n),8&n&&oe(s,1)):(s=gn(e),s.c(),oe(s,1),s.m(t.parentNode,t)):s&&(re(),ae(s,1,1,(()=>{s=null})),ie())},i(e){n||(oe(s),n=!0)},o(e){ae(s),n=!1},d(e){s&&s.d(e),e&&w(t)}}}function yn(e,t,n){let s,r=F(),{windows:i}=t,{tabs:o}=t,{lastSelectionUpdate:a}=t,{selectedTabs:c}=t,l=0,u=0;B((()=>{h(),n(3,s=!0)}));const h=()=>{n(1,l=i.length),n(2,u=o.length)};return e.$$set=e=>{"windows"in e&&n(6,i=e.windows),"tabs"in e&&n(7,o=e.tabs),"lastSelectionUpdate"in e&&n(0,a=e.lastSelectionUpdate),"selectedTabs"in e&&n(8,c=e.selectedTabs)},e.$$.update=()=>{64&e.$$.dirty&&h()},[a,l,u,s,()=>{chrome.windows.create({focused:!0})},async()=>{const e={windowId:(await chrome.tabs.query({active:!0,currentWindow:!0}))[0].windowId,index:-1},t=await chrome.tabGroups.query({});for(const n of t)try{await chrome.tabGroups.move(n.id,e),await new Promise((e=>setTimeout(e,200)))}catch(e){console.log(e)}const n=await chrome.tabs.query({currentWindow:!1,groupId:-1});await chrome.tabs.move(n.map((e=>e.id)),e),r("mergedWindows")},i,o,c]}class bn extends we{constructor(e){super(),ve(this,e,yn,wn,o,{windows:6,tabs:7,lastSelectionUpdate:0,selectedTabs:8})}}function In(e,t,n){const s=e.slice();return s[24]=t[n],s}function En(e,t){let n,s,r,i;function o(...e){return t[12](t[24],...e)}function a(e){t[13](e)}let c={windowData:t[24],groups:t[3],tabs:t[2].filter(o),lastUpdatedWindow:t[5],lastUpdatedTab:t[4]};return void 0!==t[1]&&(c.view=t[1]),s=new Et({props:c}),j.push((()=>fe(s,"view",a))),s.$on("tabMoved",t[14]),{key:e,first:null,c(){n=T(),pe(s.$$.fragment),this.first=n},m(e,t){v(e,n,t),ge(s,e,t),i=!0},p(e,n){t=e;const i={};1&n&&(i.windowData=t[24]),8&n&&(i.groups=t[3]),5&n&&(i.tabs=t[2].filter(o)),32&n&&(i.lastUpdatedWindow=t[5]),16&n&&(i.lastUpdatedTab=t[4]),!r&&2&n&&(r=!0,i.view=t[1],z((()=>r=!1))),s.$set(i)},i(e){i||(oe(s.$$.fragment,e),i=!0)},o(e){ae(s.$$.fragment,e),i=!1},d(e){e&&w(n),me(s,e)}}}function Tn(e){let t,n,s=[],r=new Map,i=e[0];const o=e=>e[24];for(let t=0;t<i.length;t+=1){let n=In(e,i,t),a=o(n);r.set(a,s[t]=En(a,n))}return{c(){t=b("div");for(let e=0;e<s.length;e+=1)s[e].c();k(t,"class","windows svelte-tdd1ze")},m(e,r){v(e,t,r);for(let e=0;e<s.length;e+=1)s[e]&&s[e].m(t,null);n=!0},p(e,[n]){63&n&&(i=e[0],re(),s=de(s,n,o,1,e,i,r,t,he,En,null,In),ie())},i(e){if(!n){for(let e=0;e<i.length;e+=1)oe(s[e]);n=!0}},o(e){for(let e=0;e<s.length;e+=1)ae(s[e]);n=!1},d(e){e&&w(t);for(let e=0;e<s.length;e+=1)s[e].d()}}}function Cn(e,t,n){let{tabs:s}=t,{activeTab:r}=t,{currentWindowId:i}=t,{windows:o}=t,{groups:a}=t,{lastUpdate:c}=t,{lastSelectionUpdate:l}=t,{lastUpdatedTab:u}=t,{lastUpdatedGroup:h}=t,{lastUpdatedWindow:d}=t,{view:f}=t,{selectedTabs:p}=t;B((()=>{g()}));const g=()=>{o.sort(((e,t)=>(t.id==i?1:0)-(e.id==i?1:0)))};return e.$$set=e=>{"tabs"in e&&n(2,s=e.tabs),"activeTab"in e&&n(6,r=e.activeTab),"currentWindowId"in e&&n(7,i=e.currentWindowId),"windows"in e&&n(0,o=e.windows),"groups"in e&&n(3,a=e.groups),"lastUpdate"in e&&n(8,c=e.lastUpdate),"lastSelectionUpdate"in e&&n(9,l=e.lastSelectionUpdate),"lastUpdatedTab"in e&&n(4,u=e.lastUpdatedTab),"lastUpdatedGroup"in e&&n(10,h=e.lastUpdatedGroup),"lastUpdatedWindow"in e&&n(5,d=e.lastUpdatedWindow),"view"in e&&n(1,f=e.view),"selectedTabs"in e&&n(11,p=e.selectedTabs)},e.$$.update=()=>{161&e.$$.dirty&&(n(0,o),n(5,d),n(7,i),o.sort(((e,t)=>(t.id==i?1:0)-(e.id==i?1:0))))},(()=>{const e="".toLowerCase();s.filter((t=>(t.title+t.url).toLowerCase().includes(e)))})(),[o,f,s,a,u,d,r,i,c,l,h,p,(e,t)=>t.windowId==e.id,function(e){f=e,n(1,f)},function(t){V.call(this,e,t)}]}class kn extends we{constructor(e){super(),ve(this,e,Cn,Tn,o,{tabs:2,activeTab:6,currentWindowId:7,windows:0,groups:3,lastUpdate:8,lastSelectionUpdate:9,lastUpdatedTab:4,lastUpdatedGroup:10,lastUpdatedWindow:5,view:1,selectedTabs:11})}}var Sn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAARZJREFUaEPtlCEOwkAURF8VlnPAAdA4FFyAGyAwhASHBBKQKC6CQ4LEcBUkZBMEaWh3mxFLk1n9Z3Zn3m8LWn6Klr8fB8hN0ARMQGzAKyQWKMtNQK5QNDABsUBZbgJyhaKBCYgFynITkCsUDUxALFCWxwh0gAMwAdbAqcGNvY+2C8yBWwPt+KO9A7s6bSzAq3TpAtgnPGQAXEtzfeCRoN0Cy9LcELj80tYF+GUUPGKhw0x4fAjxfc7AKCFAubQgOQKzNgdYAZumAcL8v6xQJfXYOvzDRzwFnlWrFwuQsLJ5Rxwgb/9pv8Tcb6y93yuUG48JmIDYgFdILFCWm4BcoWhgAmKBstwE5ApFAxMQC5TlJiBXKBq8AfyAIzHD7TbtAAAAAElFTkSuQmCC",Rn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAcpJREFUaEPtmWFOBDEIhbsnU0+mnkw9meYlw6ayMEALmzXSxPhjpu37gALTvYw/Pi7F+p/HGPh7q9qnCgCiXw/x0P45xnipgKgAgPgPQWwJRDaAJp540iGyAb4dYZIKkQmAsIEHPCMNIgsgIj41nDIAVsSnQewCIL8jXXoGwkYKsa1w2gWQDu37QcPBUAeoPnDgZR3LEw8FPHwgHl6RPAMAWJs/ozkeL968swtArcLTGANCIBDjDGB+jvfneWGIXQBtQwsgLFSb8G8AtMMHw3xNYUOG8ngguqboBI8HvHmeDmnkDFihZB5wCyCS5+fNLA+srhvOQp7mjBaNeMDqWt114swD0iaUJvkGPBVaHqAww3+k4HlI1Xo2zq+XowBmTDrrwFnse+Cv8xtAMWXIimyN0Nz2QHvg1gIdQmQTqQ50GrWaH8e3xF0KmeQ9tZo+YhqFJt5HWY1jpBUvr8S814l8Nj5EFnKEuvpKA2Sk0fYAs8DdvwfaA+2B4yKW/9bl7YU6hDqElBCi2+SdELHmSleOaWnU2rzq+RIAxHjvRauE07pqJ2u1uNErwAqQ08xnAVBb7P0hLxvATNsegPlDI1ugth7dwWp3sdd5PxaJwDGu8KqzAAAAAElFTkSuQmCC",Dn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAYBJREFUaEPt2T9KA0EYhvEnl7BPbSHoGbyAdmqjhY2NBxDUwtpOEAQrK8ETWNjYWXqA9LlEGDCwLDt/9puJ+36QhVTOhOe3w86OZIbza+a8ny1g6hVsvQKnwBGwD7wA38DXJpEtAXfAbS/2CbjyABiKD91LYEcdEIsP3R/AsTIgFR+6z4A3VUAu/h4IYzZ6WR9iifhwZywAmXgLQCp+LEAufgxAMr4UIBtfAsjFh7+H7XKyK7ULycenVsBFfAzgJn4I4Cq+D3AX3wVcAs+JrWTy3SbWtt6FfoCDyCDZ+O4K/AK7EcC/HIutL5L1ClwDj4kvkUV0X2S5h1gS0X8Tu0MMHSVcIWJnITeImsOcxDOR+59YfiVygLCz5hCTvuhKANKIUoAsYgxAEjEWIIewAKQQVoAMogZQgrgAXq1H5ZJ5tYAc4hM4LAmxjmkBSCEWwNwaVzKvFSCGuAEeSkKsY1oCQsM5cALsAe9/Hzc/s1pvYtW81itQFWOZvAVY7lrLOStTMVIxhvg/OwAAAABJRU5ErkJggg==",Nn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAhFJREFUaEPtmr8vREEQxz/XqRBCoZAIESUKLaJQCJ0/QCJ+tSoVKgqJjpBIdEoFEp3rtBpRSRAViUKlI3N5J8/z3M6+fbd3J7vdZb+z+/3OzO6+nb0CDd4KGfk3A8MZbbOaFdMMbQX0ArvAdFYWDnavwCmwGB/DRkA38OhAIE/Tb942As6BqTxZOIy1DayJvVbAGHDlMGHepm9Au42ADWA9wWLTktUoII7Iq40DRW0E0gSUBrBgIxEMAmIOS43AIDACHCY82xAR2AeWYsR7gIfod90L6ACegKaYgDnguFEEpG2TssuI56XVfQR8CFgFdix2LRP0xyL2IUA2iBNgwMRM2e9dgPCStTYLdCpJxmHJg7QmAjLwrrwGyyexjxTKSr7iJhIEuLjVwvbPbTxEwMKLLtAQgTw+JUIEEh4IB5ntlTKkUEihNA+45IWFbTgHwjlgkS5p0KqlkCMvtbncV5xuZJPApXo6P8AW4F37OS0vMndAlx9uxlnOgBlBaQUIVqp2Ur2rh9YH3NsKEPwEsAf010jFBbASVRFLFGwiUObcGpXJpc7js0kp/1c5P4sAn6SNc/17AUYPVAFwC1wDz5qx409ML1HpT2PnA6N6/oqDDoAFH8yUc8wDRyZsUuWnycBj/xBwY5ovLUxbUSTaTMZV6v+IXoaWNeNXyrM8n0Q1XMoYWcTyvwhVUy0U1Ug1An0BvgTPMf+0FOAAAAAASUVORK5CYII=",Un="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAYZJREFUaEPtmTFKBEEQRd8ewdBE3QMoiGCsmGqouXgKTdREQ2OvoJlguKiRICJqZiLqCQQjM2lhoeltZ7umq1YXa2CCGX79qt/16Rm6Ooz51Rnz+nEBv91B78Bf7sAMEG7J9Qy8SQJqsTkLLQIHwEpL8h6wA9y0jBeFpQLWgRMRQx78AWwBpwpcjRSpgEdgVjHphrWIWMAU8KpYfJ/qUoHzDLgC7lKuWMAScJEA9oXJd4V4CfwTOAK246ASAXuCLAFrKSKUEjaIw35N2gIC7yhETADvIZmFgFGImAfuLQUIXDcUmuvoMvC9OVh1YGhVAoALkOxCgoUthnoHvAPFZskD3UJuIbfQ4A+if4krXSEK913IdyGRYQbBbiG3kFvov3/IKh2gEp6eNWV/JayOFlUUJCRd4CU9lQjPt8CCRUZFznNgNXcyF97NAQ+KySyopuMhSm7AMQkcA2sW2Ss4r4FN4CnmaBrytRkxVdTXGPrj6MqnlFZLXsrrHShdKSucd8BqZUt5vwDEOIAxEZQCowAAAABJRU5ErkJggg==",xn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAThJREFUaEPtWVsSwiAMpCdTT6aeTD2Zzs7ItFIoSXhZXX760UB2kwXaZHI7H9PO8TsSGJ1BSQaOA0Hec763CAD42Tk3kgDwg8T1/VzxSREA6FuOfef3pxiJFAGAHx35MD7IBEh8jBSBZ+foSt2tshAjEJMP2D+kXirZHSIqMBPAJrpUAiZdBv5wiCwHCUijV8OOGVhGkXvAoClKiBIyyGY5hRKihCghfgvNGuBNbNgPPEZ5jBpk0+wmzmHRbnJrzcn8S5kj4N9HazfB5JKaU3MCwLpFogR8dG1pWUWaAW8HSWH4SoZVMqHfLhnQktXYk4AmWi1smYEWUdWs+R8ZQES+tby+OvZ/tsFRemNqdC21VbWYsGit21MKMGVnavKFi43qlxW1WUsj12W+pNHdBYjVCQlYI1dr3gsJHH8xUQLcdQAAAABJRU5ErkJggg==",_n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAbpJREFUaEPtmT0yRUEQhb+3B5kF+M1IlABLELAEpDIiRGyBSCyxAoVARua3SiCR2QPVVXfK1Lg/86Z7EtUTvjtz+pzu0/Peuz2i3poAJhv4T+CrRqhRBdAlYBfYSLDPgSPgwzKmtQAhfdFD8B3YAa6sRFgKWADuM4ktAg+Ze3u3WQo4BbYySZ0B25l7VQKE1DIwVxBM/B7stAkcFGA8AXd9Yvsq8F0QMD6yBtw0H6wC10q8Vq5dAo6BPWVAqdpzgzELSDY16wTYTwG6BLwCU5pozZUZV6DEQjGFN2A6V0BqH/FzWCuAWKLGEsG3EXAq+k/CuyrQJuCwARYv1xQgvSNL4rmAUE2xUKhAW2as7DQUx8RC0kgvVowTnBlALpCqFgoxQ0WstKR41XrAivAQjguIMxQ311DmrJ57BbwCSi+5hdxCbqFKv0aVic0+7k3sTZxtlvaNbiG3kFvIvwd+PeB/aAr6wa/Rf3eNFrhAfaT43ehj4VRGzbgHQOYL8+nzrrfT48y7apKOsVvnajVHTNbCxhoxheAyalo3mNaUipGpzGXbaCkAWo5ZS0mqzrkAVfoMDnsFDJKogvgB6DSHMdl6YJ4AAAAASUVORK5CYII=",On="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAqVJREFUaEPVmWtOAzEMhNOTAScDTgacDOSqrrxejz1OdlVaCfUHu858fsVJL+PJP5cn1z/OBHh1zvk+w1lHAYhY+Xu5fWdaBeRnjCHfy1CrAB+k6Azoc4whdqY+swCy4PvUivilKZAugKSJCPf5fSTLWye1OgBneB2B09FgARjxWpBVdMTDGsnl2mAAKvHqreo5FWtTpHqnjEQFkC1gjYtHv8hCiHKcXWe3RAaQifKeEfFV6kQRsIIyCFjYGcAv8KgXX6WBN5N1GWRL6kveoyOADEU5iUBnO0xnbTgLRaIi8Z3c90BZgaKU3GVMlELIAyjduhGwIAgCOWb3fCSK9b4K6daAjwRyTGR3VwssANNuRRgzjXaKOnLmpgl4YRF1uZkYRTM1kXWlyN4mCh4gKh67QNTr7Uz/cIAoZAqJOoMASJTk+2gACW6maddG0cNVoWpY/x2ACmMBxGOdsYJpqWla2xqIvMdOmrawVg490ciwBEAOmNcaqM617IbHzFr3xuK7ELuIBYODlqPv2K7ODIcBsOJRN0ERtnajFLo7fjUCZwEImKZSq412OwiT++rlTgrpO2LfX9+kO3G3j58NEKXYZk2fQl2AaMhDNw7skbPqfOkwx25EKPe7KViJLU+R7IFG5x0xiC5kq916Rmx5ikNzfuTJquPMFGkXijpSilH6SHdT0K2drnDbVjfvZictlM9HH+5ZmFDrURdbGjUkZvVGe+piS8RMX/k5kpUUS/ea6rBeQcDcDEIx06XKjZIBYCBYkM4+UYqXRVkAFkIdr3uF/Jinn86VCyW+C5C1V7aTVM/ZC4Lq2ev/OxGwBmfyuRLU+m1Mjc0C6PurIPqbcXUchfCrAD4qTJ4zc1UVrfv/jwSIFtURevkXeUR0NgDtydkHnx7gD+jSwTGyavmJAAAAAElFTkSuQmCC",Ln="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAUBJREFUaEPtWVsSwiAMpCdTT6aeTD2Zzs7oDEIwgYamccJPP6CQ3c2Dx5Kct8W5/SkAWCsoUeBoaOSdW/sXABh+TilZAoD9AHF9fys8LQAw+sah37j/RIFoAYDx1syX/EAJgPhqLQDPjdmVLlepQAGg3AfoH9JVlMYdCC8YBoAguigZJp0G6yGJ5C0ASNnTGLcLBRBPbDFqoDUHkBswEkPmAMpULNm25GIEgJyNERcIBazrQCgQCmRRTAUxleZGK7B0ftW9kPaWuzRuah2YcWIrC91UAHAV9y7E+Xuk0UijTBoNF2IYmJ6FQoG9K+D+SPkhePRgbx4DXIxw/QFg7ZmYY5jrV1XA1eUumNHe63NsS/uru6W/feCYcWCRstwa1/XEhElcP/KVLFi9l7E3270XrmvdQP3/AKBOaeeE7hV4Ae4PpjHOAybCAAAAAElFTkSuQmCC";function Mn(e,t,n){const s=e.slice();return s[6]=t[n],s}function Pn(e){let t,n;return t=new Xt({props:{tab:e[6],selectedTabs:e[1],lastSelectionUpdate:e[2]}}),t.$on("updateSelection",e[5]),{c(){pe(t.$$.fragment)},m(e,s){ge(t,e,s),n=!0},p(e,n){const s={};1&n&&(s.tab=e[6]),2&n&&(s.selectedTabs=e[1]),4&n&&(s.lastSelectionUpdate=e[2]),t.$set(s)},i(e){n||(oe(t.$$.fragment,e),n=!0)},o(e){ae(t.$$.fragment,e),n=!1},d(e){me(t,e)}}}function Bn(e){let t,n,s,r,i,o,a,l,u,h,d,f,p,m,A,y,T,R=e[0].length+"",D=e[0].length>1?"s":"";return{c(){t=b("div"),n=b("div"),s=E(),r=b("div"),i=b("div"),o=b("div"),a=I(R),l=E(),u=b("span"),h=I("Tab"),d=I(D),f=E(),p=b("div"),m=b("img"),k(n,"class","action spacer svelte-15rm01k"),k(o,"class","count"),k(i,"class","container svelte-15rm01k"),k(r,"class","counts svelte-15rm01k"),c(m.src,A=Ln)||k(m,"src",A),k(m,"alt","Create new tab"),k(m,"class","svelte-15rm01k"),k(p,"class","action svelte-15rm01k"),k(t,"class","footer svelte-15rm01k")},m(c,A){v(c,t,A),g(t,n),g(t,s),g(t,r),g(r,i),g(i,o),g(o,a),g(o,l),g(o,u),g(u,h),g(u,d),g(t,f),g(t,p),g(p,m),y||(T=C(p,"mousedown",e[3]),y=!0)},p(e,t){1&t&&R!==(R=e[0].length+"")&&S(a,R),1&t&&D!==(D=e[0].length>1?"s":"")&&S(d,D)},d(e){e&&w(t),y=!1,T()}}}function Fn(e){let t,n,s,r,i=e[0],o=[];for(let t=0;t<i.length;t+=1)o[t]=Pn(Mn(e,i,t));const a=e=>ae(o[e],1,1,(()=>{o[e]=null}));let c=0==e[1].length&&Bn(e);return{c(){t=b("div"),n=b("div");for(let e=0;e<o.length;e+=1)o[e].c();s=E(),c&&c.c(),k(n,"class","container svelte-15rm01k"),k(t,"class","tabs svelte-15rm01k")},m(e,i){v(e,t,i),g(t,n);for(let e=0;e<o.length;e+=1)o[e]&&o[e].m(n,null);g(t,s),c&&c.m(t,null),r=!0},p(e,[s]){if(7&s){let t;for(i=e[0],t=0;t<i.length;t+=1){const r=Mn(e,i,t);o[t]?(o[t].p(r,s),oe(o[t],1)):(o[t]=Pn(r),o[t].c(),oe(o[t],1),o[t].m(n,null))}for(re(),t=i.length;t<o.length;t+=1)a(t);ie()}0==e[1].length?c?c.p(e,s):(c=Bn(e),c.c(),c.m(t,null)):c&&(c.d(1),c=null)},i(e){if(!r){for(let e=0;e<i.length;e+=1)oe(o[e]);r=!0}},o(e){o=o.filter(Boolean);for(let e=0;e<o.length;e+=1)ae(o[e]);r=!1},d(e){e&&w(t),y(o,e),c&&c.d()}}}function Vn(e,t,n){let{tabs:s}=t,{group:r}=t,{selectedTabs:i=[]}=t,{lastSelectionUpdate:o}=t;return e.$$set=e=>{"tabs"in e&&n(0,s=e.tabs),"group"in e&&n(4,r=e.group),"selectedTabs"in e&&n(1,i=e.selectedTabs),"lastSelectionUpdate"in e&&n(2,o=e.lastSelectionUpdate)},[s,i,o,async()=>{const e=(await chrome.tabs.query({active:!0,currentWindow:!0}))[0];return await chrome.tabs.create({index:e.index+1})},r,function(t){V.call(this,e,t)}]}class $n extends we{constructor(e){super(),ve(this,e,Vn,Fn,o,{tabs:0,group:4,selectedTabs:1,lastSelectionUpdate:2})}}function jn(e){let t,n,s,r,i,o,a,l,u=e[0].title.replace("* ","")+"";return{c(){t=b("div"),n=b("img"),r=E(),i=b("div"),o=I(u),c(n.src,s=e[2])||k(n,"src",s),k(n,"alt",""),k(n,"class","svelte-ctlp0z"),k(i,"class","title svelte-ctlp0z"),k(t,"class","bookmark svelte-ctlp0z")},m(s,c){v(s,t,c),g(t,n),g(t,r),g(t,i),g(i,o),a||(l=C(t,"mousedown",e[3]),a=!0)},p(e,t){4&t&&!c(n.src,s=e[2])&&k(n,"src",s),1&t&&u!==(u=e[0].title.replace("* ","")+"")&&S(o,u)},d(e){e&&w(t),a=!1,l()}}}function Gn(t){let n,s=t[1]&&jn(t);return{c(){s&&s.c(),n=T()},m(e,t){s&&s.m(e,t),v(e,n,t)},p(e,[t]){e[1]?s?s.p(e,t):(s=jn(e),s.c(),s.m(n.parentNode,n)):s&&(s.d(1),s=null)},i:e,o:e,d(e){s&&s.d(e),e&&w(n)}}}function Kn(e,t,n){let s,r,{bookmark:i}=t;B((()=>{o()}));const o=async()=>{n(2,r=await(async e=>{const t=new URL(await chrome.runtime.getURL("/_favicon/"));return t.searchParams.set("pageUrl",e),t.searchParams.set("size","32"),t.toString()})(i.url)),n(1,s=!0)};let a=F();return e.$$set=e=>{"bookmark"in e&&n(0,i=e.bookmark)},[i,s,r,()=>{a("bookmarkClicked",i)}]}class Qn extends we{constructor(e){super(),ve(this,e,Kn,Gn,o,{bookmark:0})}}function qn(e,t,n){const s=e.slice();return s[2]=t[n],s}function Wn(t){let n;return{c(){n=b("div"),n.innerHTML='<div class="title svelte-19gjt2b">Bookmarks</div>',k(n,"class","empty-container svelte-19gjt2b")},m(e,t){v(e,n,t)},p:e,i:e,o:e,d(e){e&&w(n)}}}function zn(e){let t,n,s=e[0],r=[];for(let t=0;t<s.length;t+=1)r[t]=Hn(qn(e,s,t));const i=e=>ae(r[e],1,1,(()=>{r[e]=null}));return{c(){t=b("div");for(let e=0;e<r.length;e+=1)r[e].c();k(t,"class","bookmarks-container svelte-19gjt2b")},m(e,s){v(e,t,s);for(let e=0;e<r.length;e+=1)r[e]&&r[e].m(t,null);n=!0},p(e,n){if(1&n){let o;for(s=e[0],o=0;o<s.length;o+=1){const i=qn(e,s,o);r[o]?(r[o].p(i,n),oe(r[o],1)):(r[o]=Hn(i),r[o].c(),oe(r[o],1),r[o].m(t,null))}for(re(),o=s.length;o<r.length;o+=1)i(o);ie()}},i(e){if(!n){for(let e=0;e<s.length;e+=1)oe(r[e]);n=!0}},o(e){r=r.filter(Boolean);for(let e=0;e<r.length;e+=1)ae(r[e]);n=!1},d(e){e&&w(t),y(r,e)}}}function Hn(e){let t,n;return t=new Qn({props:{bookmark:e[2]}}),t.$on("bookmarkClicked",e[1]),{c(){pe(t.$$.fragment)},m(e,s){ge(t,e,s),n=!0},p(e,n){const s={};1&n&&(s.bookmark=e[2]),t.$set(s)},i(e){n||(oe(t.$$.fragment,e),n=!0)},o(e){ae(t.$$.fragment,e),n=!1},d(e){me(t,e)}}}function Jn(e){let t,n,s,r;const i=[zn,Wn],o=[];function a(e,t){return e[0].length>0?0:1}return n=a(e),s=o[n]=i[n](e),{c(){t=b("div"),s.c(),k(t,"class","container svelte-19gjt2b")},m(e,s){v(e,t,s),o[n].m(t,null),r=!0},p(e,[r]){let c=n;n=a(e),n===c?o[n].p(e,r):(re(),ae(o[c],1,1,(()=>{o[c]=null})),ie(),s=o[n],s?s.p(e,r):(s=o[n]=i[n](e),s.c()),oe(s,1),s.m(t,null))},i(e){r||(oe(s),r=!0)},o(e){ae(s),r=!1},d(e){e&&w(t),o[n].d()}}}function Xn(e,t,n){let{bookmarks:s=[]}=t;return e.$$set=e=>{"bookmarks"in e&&n(0,s=e.bookmarks)},[s,function(t){V.call(this,e,t)}]}class Yn extends we{constructor(e){super(),ve(this,e,Xn,Jn,o,{bookmarks:0})}}function Zn(e,t,n){const s=e.slice();return s[2]=t[n],s}function es(t){let n;return{c(){n=b("div"),n.innerHTML='<div class="title svelte-1hzn7jm">Reading List</div>',k(n,"class","empty-container svelte-1hzn7jm")},m(e,t){v(e,n,t)},p:e,i:e,o:e,d(e){e&&w(n)}}}function ts(e){let t,n,s=e[0],r=[];for(let t=0;t<s.length;t+=1)r[t]=ns(Zn(e,s,t));const i=e=>ae(r[e],1,1,(()=>{r[e]=null}));return{c(){t=b("div");for(let e=0;e<r.length;e+=1)r[e].c();k(t,"class","bookmarks-container svelte-1hzn7jm")},m(e,s){v(e,t,s);for(let e=0;e<r.length;e+=1)r[e]&&r[e].m(t,null);n=!0},p(e,n){if(1&n){let o;for(s=e[0],o=0;o<s.length;o+=1){const i=Zn(e,s,o);r[o]?(r[o].p(i,n),oe(r[o],1)):(r[o]=ns(i),r[o].c(),oe(r[o],1),r[o].m(t,null))}for(re(),o=s.length;o<r.length;o+=1)i(o);ie()}},i(e){if(!n){for(let e=0;e<s.length;e+=1)oe(r[e]);n=!0}},o(e){r=r.filter(Boolean);for(let e=0;e<r.length;e+=1)ae(r[e]);n=!1},d(e){e&&w(t),y(r,e)}}}function ns(e){let t,n;return t=new Qn({props:{bookmark:e[2]}}),t.$on("bookmarkClicked",e[1]),{c(){pe(t.$$.fragment)},m(e,s){ge(t,e,s),n=!0},p(e,n){const s={};1&n&&(s.bookmark=e[2]),t.$set(s)},i(e){n||(oe(t.$$.fragment,e),n=!0)},o(e){ae(t.$$.fragment,e),n=!1},d(e){me(t,e)}}}function ss(e){let t,n,s,r;const i=[ts,es],o=[];function a(e,t){return e[0].length>0?0:1}return n=a(e),s=o[n]=i[n](e),{c(){t=b("div"),s.c(),k(t,"class","container svelte-1hzn7jm")},m(e,s){v(e,t,s),o[n].m(t,null),r=!0},p(e,[r]){let c=n;n=a(e),n===c?o[n].p(e,r):(re(),ae(o[c],1,1,(()=>{o[c]=null})),ie(),s=o[n],s?s.p(e,r):(s=o[n]=i[n](e),s.c()),oe(s,1),s.m(t,null))},i(e){r||(oe(s),r=!0)},o(e){ae(s),r=!1},d(e){e&&w(t),o[n].d()}}}function rs(e,t,n){let{queue:s=[]}=t;return console.log(s),console.log(s.length),e.$$set=e=>{"queue"in e&&n(0,s=e.queue)},[s,function(t){V.call(this,e,t)}]}class is extends we{constructor(e){super(),ve(this,e,rs,ss,o,{queue:0})}}function os(e){let t;return{c(){t=b("div"),t.innerHTML='<div class="title svelte-dzr49f">Clipboard</div>',k(t,"class","empty-container svelte-dzr49f")},m(e,n){v(e,t,n)},d(e){e&&w(t)}}}function as(t){let n;let s=os(t);return{c(){n=b("div"),s.c(),k(n,"class","clipboard svelte-dzr49f")},m(e,t){v(e,n,t),s.m(n,null)},p:e,i:e,o:e,d(e){e&&w(n),s.d()}}}class cs extends we{constructor(e){super(),ve(this,e,null,as,o,{})}}class ls{static users="users";static user(e){return this.users+"/"+e}static userTabs(e){return this.user(e)+"/tabs"}static userTab(e,t){return this.userTabs(e)+"/"+t}static userContexts(e){return this.user(e)+"/contexts"}static userContext(e,t){return this.userContexts(e)+"/"+t}static userResources(e){return this.user(e)+"/resources"}static userResource(e,t){return this.userResources(e)+"/"+t}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const us=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&s+1<e.length&&56320==(64512&e.charCodeAt(s+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++s)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},hs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let t=0;t<e.length;t+=3){const r=e[t],i=t+1<e.length,o=i?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,l=r>>2,u=(3&r)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,i||(h=64)),s.push(n[l],n[u],n[h],n[d])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(us(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,s=0;for(;n<e.length;){const r=e[n++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[s++]=String.fromCharCode((31&r)<<6|63&i)}else if(r>239&&r<365){const i=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[s++]=String.fromCharCode(55296+(i>>10)),t[s++]=String.fromCharCode(56320+(1023&i))}else{const i=e[n++],o=e[n++];t[s++]=String.fromCharCode((15&r)<<12|(63&i)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let t=0;t<e.length;){const r=n[e.charAt(t++)],i=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==i||null==o||null==a)throw new ds;const c=r<<2|i>>4;if(s.push(c),64!==o){const e=i<<4&240|o>>2;if(s.push(e),64!==a){const e=o<<6&192|a;s.push(e)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class ds extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fs=function(e){return function(e){const t=us(e);return hs.encodeByteArray(t,!0)}(e).replace(/\./g,"")},ps=function(e){try{return hs.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const gs=()=>
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,ms=()=>{try{return gs()||(()=>{if("undefined"==typeof process||void 0===process.env)return;const e=process.env.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&ps(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},As=e=>{var t,n;return null===(n=null===(t=ms())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},vs=e=>{const t=As(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),s]:[t.substring(0,n),s]},ws=()=>{var e;return null===(e=ms())||void 0===e?void 0:e.config},ys=e=>{var t;return null===(t=ms())||void 0===t?void 0:t[`_${e}`]};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class bs{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Is(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}class Es extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Es.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ts.prototype.create)}}class Ts{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],i=r?function(e,t){return e.replace(Cs,((e,n)=>{const s=t[n];return null!=s?String(s):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${i} (${s}).`;return new Es(s,o,n)}}const Cs=/\{\$([^}]+)}/g;function ks(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const n=e[r],i=t[r];if(Ss(n)&&Ss(i)){if(!ks(n,i))return!1}else if(n!==i)return!1}for(const e of s)if(!n.includes(e))return!1;return!0}function Ss(e){return null!==e&&"object"==typeof e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Rs(e){const t=[];for(const[n,s]of Object.entries(e))Array.isArray(s)?s.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function Ds(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,s]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(s)}})),t}function Ns(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}class Us{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let s;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");s=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===s.next&&(s.next=xs),void 0===s.error&&(s.error=xs),void 0===s.complete&&(s.complete=xs);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch(e){}})),this.observers.push(s),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function xs(){}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function _s(e){return e&&e._delegate?e._delegate:e}class Os{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Ls="[DEFAULT]";
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ms{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new bs;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),s=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(s)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(s)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e))try{this.getOrInitializeService({instanceIdentifier:Ls})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=Ls){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=Ls){return this.instances.has(e)}getOptions(e=Ls){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(s)}return s}onInit(e,t){var n;const s=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(s))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(s=e,s===Ls?void 0:s),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var s;return n||null}normalizeInstanceIdentifier(e=Ls){return this.component?this.component.multipleInstances?e:Ls:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Ps{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ms(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var Bs;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(Bs||(Bs={}));const Fs={debug:Bs.DEBUG,verbose:Bs.VERBOSE,info:Bs.INFO,warn:Bs.WARN,error:Bs.ERROR,silent:Bs.SILENT},Vs=Bs.INFO,$s={[Bs.DEBUG]:"log",[Bs.VERBOSE]:"log",[Bs.INFO]:"info",[Bs.WARN]:"warn",[Bs.ERROR]:"error"},js=(e,t,...n)=>{if(t<e.logLevel)return;const s=(new Date).toISOString(),r=$s[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${s}]  ${e.name}:`,...n)};class Gs{constructor(e){this.name=e,this._logLevel=Vs,this._logHandler=js,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Bs))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Fs[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Bs.DEBUG,...e),this._logHandler(this,Bs.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Bs.VERBOSE,...e),this._logHandler(this,Bs.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Bs.INFO,...e),this._logHandler(this,Bs.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Bs.WARN,...e),this._logHandler(this,Bs.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Bs.ERROR,...e),this._logHandler(this,Bs.ERROR,...e)}}const Ks=(e,t)=>t.some((t=>e instanceof t));let Qs,qs;const Ws=new WeakMap,zs=new WeakMap,Hs=new WeakMap,Js=new WeakMap,Xs=new WeakMap;let Ys={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return zs.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Hs.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return tr(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Zs(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(qs||(qs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(nr(this),t),tr(Ws.get(this))}:function(...t){return tr(e.apply(nr(this),t))}:function(t,...n){const s=e.call(nr(this),t,...n);return Hs.set(s,t.sort?t.sort():[t]),tr(s)}}function er(e){return"function"==typeof e?Zs(e):(e instanceof IDBTransaction&&function(e){if(zs.has(e))return;const t=new Promise(((t,n)=>{const s=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",i),e.removeEventListener("abort",i)},r=()=>{t(),s()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",r),e.addEventListener("error",i),e.addEventListener("abort",i)}));zs.set(e,t)}(e),Ks(e,Qs||(Qs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,Ys):e)}function tr(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const s=()=>{e.removeEventListener("success",r),e.removeEventListener("error",i)},r=()=>{t(tr(e.result)),s()},i=()=>{n(e.error),s()};e.addEventListener("success",r),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&Ws.set(t,e)})).catch((()=>{})),Xs.set(t,e),t}(e);if(Js.has(e))return Js.get(e);const t=er(e);return t!==e&&(Js.set(e,t),Xs.set(t,e)),t}const nr=e=>Xs.get(e);const sr=["get","getKey","getAll","getAllKeys","count"],rr=["put","add","delete","clear"],ir=new Map;function or(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(ir.get(t))return ir.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,r=rr.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!r&&!sr.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,r?"readwrite":"readonly");let o=i.store;return s&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&i.done]))[0]};return ir.set(t,i),i}Ys=(e=>({...e,get:(t,n,s)=>or(t,n)||e.get(t,n,s),has:(t,n)=>!!or(t,n)||e.has(t,n)}))(Ys);
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class ar{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const cr="@firebase/app",lr="0.9.13",ur=new Gs("@firebase/app"),hr="[DEFAULT]",dr={[cr]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},fr=new Map,pr=new Map;function gr(e,t){try{e.container.addComponent(t)}catch(n){ur.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function mr(e){const t=e.name;if(pr.has(t))return ur.debug(`There were multiple attempts to register component ${t}.`),!1;pr.set(t,e);for(const t of fr.values())gr(t,e);return!0}function Ar(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const vr=new Ts("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class wr{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Os("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vr.create("app-deleted",{appName:this._name})}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const yr="9.23.0";function br(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const s=Object.assign({name:hr,automaticDataCollectionEnabled:!1},t),r=s.name;if("string"!=typeof r||!r)throw vr.create("bad-app-name",{appName:String(r)});if(n||(n=ws()),!n)throw vr.create("no-options");const i=fr.get(r);if(i){if(ks(n,i.options)&&ks(s,i.config))return i;throw vr.create("duplicate-app",{appName:r})}const o=new Ps(r);for(const e of pr.values())o.addComponent(e);const a=new wr(n,s,o);return fr.set(r,a),a}function Ir(e=hr){const t=fr.get(e);if(!t&&e===hr&&ws())return br();if(!t)throw vr.create("no-app",{appName:e});return t}function Er(e,t,n){var s;let r=null!==(s=dr[e])&&void 0!==s?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const e=[`Unable to register library "${r}" with version "${t}":`];return i&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void ur.warn(e.join(" "))}mr(new Os(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Tr="firebase-heartbeat-database",Cr=1,kr="firebase-heartbeat-store";let Sr=null;function Rr(){return Sr||(Sr=function(e,t,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(e,t),a=tr(o);return s&&o.addEventListener("upgradeneeded",(e=>{s(tr(o.result),e.oldVersion,e.newVersion,tr(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{i&&e.addEventListener("close",(()=>i())),r&&e.addEventListener("versionchange",(e=>r(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}(Tr,Cr,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(kr)}}).catch((e=>{throw vr.create("idb-open",{originalErrorMessage:e.message})}))),Sr}async function Dr(e,t){try{const n=(await Rr()).transaction(kr,"readwrite"),s=n.objectStore(kr);await s.put(t,Nr(e)),await n.done}catch(e){if(e instanceof Es)ur.warn(e.message);else{const t=vr.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});ur.warn(t.message)}}}function Nr(e){return`${e.name}!${e.options.appId}`}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ur{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new _r(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=xr();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=xr(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let s=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),Or(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Or(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}(this._heartbeatsCache.heartbeats),s=fs(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function xr(){return(new Date).toISOString().substring(0,10)}class _r{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise(((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=await Rr();return await t.transaction(kr).objectStore(kr).get(Nr(e))}catch(e){if(e instanceof Es)ur.warn(e.message);else{const t=vr.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});ur.warn(t.message)}}}(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Dr(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Dr(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Or(e){return fs(JSON.stringify({version:2,heartbeats:e})).length}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var Lr;Lr="",mr(new Os("platform-logger",(e=>new ar(e)),"PRIVATE")),mr(new Os("heartbeat",(e=>new Ur(e)),"PRIVATE")),Er(cr,lr,Lr),Er(cr,lr,"esm2017"),Er("fire-js","");var Mr,Pr="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Br=Br||{},Fr=Pr||self;function Vr(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function $r(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var jr="closure_uid_"+(1e9*Math.random()>>>0),Gr=0;function Kr(e,t,n){return e.call.apply(e.bind,arguments)}function Qr(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function qr(e,t,n){return(qr=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Kr:Qr).apply(null,arguments)}function Wr(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function zr(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,s){for(var r=Array(arguments.length-2),i=2;i<arguments.length;i++)r[i-2]=arguments[i];return t.prototype[n].apply(e,r)}}function Hr(){this.s=this.s,this.o=this.o}Hr.prototype.s=!1,Hr.prototype.sa=function(){var e;!this.s&&(this.s=!0,this.N(),0)&&(e=this,Object.prototype.hasOwnProperty.call(e,jr)&&e[jr]||(e[jr]=++Gr))},Hr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Jr=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Xr(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function Yr(e,t){for(let t=1;t<arguments.length;t++){const n=arguments[t];if(Vr(n)){const t=e.length||0,s=n.length||0;e.length=t+s;for(let r=0;r<s;r++)e[t+r]=n[r]}else e.push(n)}}function Zr(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Zr.prototype.h=function(){this.defaultPrevented=!0};var ei=function(){if(!Fr.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{Fr.addEventListener("test",(()=>{}),t),Fr.removeEventListener("test",(()=>{}),t)}catch(e){}return e}();function ti(e){return/^[\s\xa0]*$/.test(e)}function ni(){var e=Fr.navigator;return e&&(e=e.userAgent)?e:""}function si(e){return-1!=ni().indexOf(e)}function ri(e){return ri[" "](e),e}ri[" "]=function(){};var ii,oi,ai,ci=si("Opera"),li=si("Trident")||si("MSIE"),ui=si("Edge"),hi=ui||li,di=si("Gecko")&&!(-1!=ni().toLowerCase().indexOf("webkit")&&!si("Edge"))&&!(si("Trident")||si("MSIE"))&&!si("Edge"),fi=-1!=ni().toLowerCase().indexOf("webkit")&&!si("Edge");function pi(){var e=Fr.document;return e?e.documentMode:void 0}e:{var gi="",mi=(oi=ni(),di?/rv:([^\);]+)(\)|;)/.exec(oi):ui?/Edge\/([\d\.]+)/.exec(oi):li?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(oi):fi?/WebKit\/(\S+)/.exec(oi):ci?/(?:Version)[ \/]?(\S+)/.exec(oi):void 0);if(mi&&(gi=mi?mi[1]:""),li){var Ai=pi();if(null!=Ai&&Ai>parseFloat(gi)){ii=String(Ai);break e}}ii=gi}if(Fr.document&&li){var vi=pi();ai=vi||(parseInt(ii,10)||void 0)}else ai=void 0;var wi=ai;function yi(e,t){if(Zr.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(di){e:{try{ri(t.nodeName);var r=!0;break e}catch(e){}r=!1}r||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:bi[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&yi.$.h.call(this)}}zr(yi,Zr);var bi={2:"touch",3:"pen",4:"mouse"};yi.prototype.h=function(){yi.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Ii="closure_listenable_"+(1e6*Math.random()|0),Ei=0;function Ti(e,t,n,s,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.la=r,this.key=++Ei,this.fa=this.ia=!1}function Ci(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function ki(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function Si(e){const t={};for(const n in e)t[n]=e[n];return t}const Ri="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Di(e,t){let n,s;for(let t=1;t<arguments.length;t++){for(n in s=arguments[t],s)e[n]=s[n];for(let t=0;t<Ri.length;t++)n=Ri[t],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function Ni(e){this.src=e,this.g={},this.h=0}function Ui(e,t){var n=t.type;if(n in e.g){var s,r=e.g[n],i=Jr(r,t);(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Ci(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function xi(e,t,n,s){for(var r=0;r<e.length;++r){var i=e[r];if(!i.fa&&i.listener==t&&i.capture==!!n&&i.la==s)return r}return-1}Ni.prototype.add=function(e,t,n,s,r){var i=e.toString();(e=this.g[i])||(e=this.g[i]=[],this.h++);var o=xi(e,t,s,r);return-1<o?(t=e[o],n||(t.ia=!1)):((t=new Ti(t,this.src,i,!!s,r)).ia=n,e.push(t)),t};var _i="closure_lm_"+(1e6*Math.random()|0),Oi={};function Li(e,t,n,s,r){if(s&&s.once)return Pi(e,t,n,s,r);if(Array.isArray(t)){for(var i=0;i<t.length;i++)Li(e,t[i],n,s,r);return null}return n=Ki(n),e&&e[Ii]?e.O(t,n,$r(s)?!!s.capture:!!s,r):Mi(e,t,n,!1,s,r)}function Mi(e,t,n,s,r,i){if(!t)throw Error("Invalid event type");var o=$r(r)?!!r.capture:!!r,a=ji(e);if(a||(e[_i]=a=new Ni(e)),(n=a.add(t,n,s,o,i)).proxy)return n;if(s=function(){function e(n){return t.call(e.src,e.listener,n)}const t=$i;return e}(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)ei||(r=o),void 0===r&&(r=!1),e.addEventListener(t.toString(),s,r);else if(e.attachEvent)e.attachEvent(Vi(t.toString()),s);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(s)}return n}function Pi(e,t,n,s,r){if(Array.isArray(t)){for(var i=0;i<t.length;i++)Pi(e,t[i],n,s,r);return null}return n=Ki(n),e&&e[Ii]?e.P(t,n,$r(s)?!!s.capture:!!s,r):Mi(e,t,n,!0,s,r)}function Bi(e,t,n,s,r){if(Array.isArray(t))for(var i=0;i<t.length;i++)Bi(e,t[i],n,s,r);else s=$r(s)?!!s.capture:!!s,n=Ki(n),e&&e[Ii]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=xi(i=e.g[t],n,s,r))&&(Ci(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete e.g[t],e.h--)))):e&&(e=ji(e))&&(t=e.g[t.toString()],e=-1,t&&(e=xi(t,n,s,r)),(n=-1<e?t[e]:null)&&Fi(n))}function Fi(e){if("number"!=typeof e&&e&&!e.fa){var t=e.src;if(t&&t[Ii])Ui(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(Vi(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=ji(t))?(Ui(n,e),0==n.h&&(n.src=null,t[_i]=null)):Ci(e)}}}function Vi(e){return e in Oi?Oi[e]:Oi[e]="on"+e}function $i(e,t){if(e.fa)e=!0;else{t=new yi(t,this);var n=e.listener,s=e.la||e.src;e.ia&&Fi(e),e=n.call(s,t)}return e}function ji(e){return(e=e[_i])instanceof Ni?e:null}var Gi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ki(e){return"function"==typeof e?e:(e[Gi]||(e[Gi]=function(t){return e.handleEvent(t)}),e[Gi])}function Qi(){Hr.call(this),this.i=new Ni(this),this.S=this,this.J=null}function qi(e,t){var n,s=e.J;if(s)for(n=[];s;s=s.J)n.push(s);if(e=e.S,s=t.type||t,"string"==typeof t)t=new Zr(t,e);else if(t instanceof Zr)t.target=t.target||e;else{var r=t;Di(t=new Zr(s,e),r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];r=Wi(o,s,!0,t)&&r}if(r=Wi(o=t.g=e,s,!0,t)&&r,r=Wi(o,s,!1,t)&&r,n)for(i=0;i<n.length;i++)r=Wi(o=t.g=n[i],s,!1,t)&&r}function Wi(e,t,n,s){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var r=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Ui(e.i,o),r=!1!==a.call(c,s)&&r}}return r&&!s.defaultPrevented}zr(Qi,Hr),Qi.prototype[Ii]=!0,Qi.prototype.removeEventListener=function(e,t,n,s){Bi(this,e,t,n,s)},Qi.prototype.N=function(){if(Qi.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Ci(n[s]);delete t.g[e],t.h--}}this.J=null},Qi.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)},Qi.prototype.P=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};var zi=Fr.JSON.stringify;function Hi(){var e=no;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var Ji=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Xi),(e=>e.reset()));class Xi{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Yi(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Zi(e){Fr.setTimeout((()=>{throw e}),0)}let eo,to=!1,no=new class{constructor(){this.h=this.g=null}add(e,t){const n=Ji.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},so=()=>{const e=Fr.Promise.resolve(void 0);eo=()=>{e.then(ro)}};var ro=()=>{for(var e;e=Hi();){try{e.h.call(e.g)}catch(e){Zi(e)}var t=Ji;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}to=!1};function io(e,t){Qi.call(this),this.h=e||1,this.g=t||Fr,this.j=qr(this.qb,this),this.l=Date.now()}function oo(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function ao(e,t,n){if("function"==typeof e)n&&(e=qr(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=qr(e.handleEvent,e)}return 2147483647<Number(t)?-1:Fr.setTimeout(e,t||0)}function co(e){e.g=ao((()=>{e.g=null,e.i&&(e.i=!1,co(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}zr(io,Qi),(Mr=io.prototype).ga=!1,Mr.T=null,Mr.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),qi(this,"tick"),this.ga&&(oo(this),this.start()))}},Mr.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Mr.N=function(){io.$.N.call(this),oo(this),delete this.g};class lo extends Hr{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:co(this)}N(){super.N(),this.g&&(Fr.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function uo(e){Hr.call(this),this.h=e,this.g={}}zr(uo,Hr);var ho=[];function fo(e,t,n,s){Array.isArray(n)||(n&&(ho[0]=n.toString()),n=ho);for(var r=0;r<n.length;r++){var i=Li(t,n[r],s||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function po(e){ki(e.g,(function(e,t){this.g.hasOwnProperty(t)&&Fi(e)}),e),e.g={}}function go(){this.g=!0}function mo(e,t,n,s){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<r.length;o++)r[o]=""}}}return zi(n)}catch(e){return t}}(e,n)+(s?" "+s:"")}))}uo.prototype.N=function(){uo.$.N.call(this),po(this)},uo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},go.prototype.Ea=function(){this.g=!1},go.prototype.info=function(){};var Ao={},vo=null;function wo(){return vo=vo||new Qi}function yo(e){Zr.call(this,Ao.Ta,e)}function bo(e){const t=wo();qi(t,new yo(t))}function Io(e,t){Zr.call(this,Ao.STAT_EVENT,e),this.stat=t}function Eo(e){const t=wo();qi(t,new Io(t,e))}function To(e,t){Zr.call(this,Ao.Ua,e),this.size=t}function Co(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return Fr.setTimeout((function(){e()}),t)}Ao.Ta="serverreachability",zr(yo,Zr),Ao.STAT_EVENT="statevent",zr(Io,Zr),Ao.Ua="timingevent",zr(To,Zr);var ko={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},So={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ro(){}function Do(e){return e.h||(e.h=e.i())}function No(){}Ro.prototype.h=null;var Uo,xo={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function _o(){Zr.call(this,"d")}function Oo(){Zr.call(this,"c")}function Lo(){}function Mo(e,t,n,s){this.l=e,this.j=t,this.m=n,this.W=s||1,this.U=new uo(this),this.P=Bo,e=hi?125:void 0,this.V=new io(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Po}function Po(){this.i=null,this.g="",this.h=!1}zr(_o,Zr),zr(Oo,Zr),zr(Lo,Ro),Lo.prototype.g=function(){return new XMLHttpRequest},Lo.prototype.i=function(){return{}},Uo=new Lo;var Bo=45e3,Fo={},Vo={};function $o(e,t,n){e.L=1,e.v=oa(ta(t)),e.s=n,e.S=!0,jo(e,null)}function jo(e,t){e.G=Date.now(),qo(e),e.A=ta(e.v);var n=e.A,s=e.W;Array.isArray(s)||(s=[String(s)]),wa(n.i,"t",s),e.C=0,n=e.l.J,e.h=new Po,e.g=vc(e.l,n?t:null,!e.s),0<e.O&&(e.M=new lo(qr(e.Pa,e,e.g),e.O)),fo(e.U,e.g,"readystatechange",e.nb),t=e.I?Si(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),bo(),function(e,t,n,s,r,i){e.info((function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.W,e.s)}function Go(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.l.Ha)}function Ko(e,t,n){let s,r=!0;for(;!e.J&&e.C<n.length;){if(s=Qo(e,n),s==Vo){4==t&&(e.o=4,Eo(14),r=!1),mo(e.j,e.m,null,"[Incomplete Response]");break}if(s==Fo){e.o=4,Eo(15),mo(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}mo(e.j,e.m,s,null),Xo(e,s)}Go(e)&&s!=Vo&&s!=Fo&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,Eo(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,(t=e.l).g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),uc(t),t.M=!0,Eo(11))):(mo(e.j,e.m,n,"[Invalid Chunked Response]"),Jo(e),Ho(e))}function Qo(e,t){var n=e.C,s=t.indexOf("\n",n);return-1==s?Vo:(n=Number(t.substring(n,s)),isNaN(n)?Fo:(s+=1)+n>t.length?Vo:(t=t.slice(s,s+n),e.C=s+n,t))}function qo(e){e.Y=Date.now()+e.P,Wo(e,e.P)}function Wo(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Co(qr(e.lb,e),t)}function zo(e){e.B&&(Fr.clearTimeout(e.B),e.B=null)}function Ho(e){0==e.l.H||e.J||fc(e.l,e)}function Jo(e){zo(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,oo(e.V),po(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Xo(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||Ca(n.i,e)))if(!e.K&&Ca(n.i,e)&&3==n.H){try{var s=n.Ja.g.parse(t)}catch(e){s=null}if(Array.isArray(s)&&3==s.length){var r=s;if(0==r[0]){e:if(!n.u){if(n.g){if(!(n.g.G+3e3<e.G))break e;dc(n),nc(n)}lc(n),Eo(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&0==n.A&&!n.v&&(n.v=Co(qr(n.ib,n),6e3));if(1>=Ta(n.i)&&n.oa){try{n.oa()}catch(e){}n.oa=void 0}}else gc(n,11)}else if((e.K||n.g==e)&&dc(n),!ti(t))for(r=n.Ja.g.parse(t),t=0;t<r.length;t++){let l=r[t];if(n.V=l[0],l=l[1],2==n.H)if("c"==l[0]){n.K=l[1],n.pa=l[2];const t=l[3];null!=t&&(n.ra=t,n.l.info("VER="+n.ra));const r=l[4];null!=r&&(n.Ga=r,n.l.info("SVER="+n.Ga));const u=l[5];null!=u&&"number"==typeof u&&0<u&&(s=1.5*u,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var i=s.i;i.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(ka(i,i.h),i.h=null))}if(s.F){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(s.Da=e,ia(s.I,s.F,e))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms"));var o=e;if((s=n).wa=Ac(s,s.J?s.pa:null,s.Y),o.K){Sa(s.i,o);var a=o,c=s.L;c&&a.setTimeout(c),a.B&&(zo(a),qo(a)),s.g=o}else cc(s);0<n.j.length&&rc(n)}else"stop"!=l[0]&&"close"!=l[0]||gc(n,7);else 3==n.H&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?gc(n,7):tc(n):"noop"!=l[0]&&n.h&&n.h.Aa(l),n.A=0)}bo()}catch(e){}}function Yo(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(Vr(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(Vr(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}(e),s=function(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(Vr(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}for(s in t=[],n=0,e)t[n++]=e[s];return t}(e),r=s.length,i=0;i<r;i++)t.call(void 0,s[i],n&&n[i],e)}(Mr=Mo.prototype).setTimeout=function(e){this.P=e},Mr.nb=function(e){e=e.target;const t=this.M;t&&3==Ha(e)?t.l():this.Pa(e)},Mr.Pa=function(e){try{if(e==this.g)e:{const u=Ha(this.g);var t=this.g.Ia();this.g.da();if(!(3>u)&&(3!=u||hi||this.g&&(this.h.h||this.g.ja()||Ja(this.g)))){this.J||4!=u||7==t||bo(),zo(this);var n=this.g.da();this.ca=n;t:if(Go(this)){var s=Ja(this.g);e="";var r=s.length,i=4==Ha(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Jo(this),Ho(this);var o="";break t}this.h.i=new Fr.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:i&&t==r-1});s.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,function(e,t,n,s,r,i,o){e.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+t+"\n"+n+"\n"+i+" "+o}))}(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ti(a)){var l=a;break t}}l=null}if(!(n=l)){this.i=!1,this.o=3,Eo(12),Jo(this),Ho(this);break e}mo(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Xo(this,n)}this.S?(Ko(this,u,o),hi&&this.i&&3==u&&(fo(this.U,this.V,"tick",this.mb),this.V.start())):(mo(this.j,this.m,o,null),Xo(this,o)),4==u&&Jo(this),this.i&&!this.J&&(4==u?fc(this.l,this):(this.i=!1,qo(this)))}else(function(e){const t={};e=(e.g&&2<=Ha(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let s=0;s<e.length;s++){if(ti(e[s]))continue;var n=Yi(e[s]);const r=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const i=t[r]||[];t[r]=i,i.push(n)}!function(e,t){for(const n in e)t.call(void 0,e[n],n,e)}(t,(function(e){return e.join(", ")}))})(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Eo(12)):(this.o=0,Eo(13)),Jo(this),Ho(this)}}}catch(e){}},Mr.mb=function(){if(this.g){var e=Ha(this.g),t=this.g.ja();this.C<t.length&&(zo(this),Ko(this,e,t),this.i&&4!=e&&qo(this))}},Mr.cancel=function(){this.J=!0,Jo(this)},Mr.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.L&&(bo(),Eo(17)),Jo(this),this.o=2,Ho(this)):Wo(this,this.Y-e)};var Zo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ea(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof ea){this.h=e.h,na(this,e.j),this.s=e.s,this.g=e.g,sa(this,e.m),this.l=e.l;var t=e.i,n=new ga;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),ra(this,n),this.o=e.o}else e&&(t=String(e).match(Zo))?(this.h=!1,na(this,t[1]||"",!0),this.s=aa(t[2]||""),this.g=aa(t[3]||"",!0),sa(this,t[4]),this.l=aa(t[5]||"",!0),ra(this,t[6]||"",!0),this.o=aa(t[7]||"")):(this.h=!1,this.i=new ga(null,this.h))}function ta(e){return new ea(e)}function na(e,t,n){e.j=n?aa(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function sa(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function ra(e,t,n){t instanceof ga?(e.i=t,function(e,t){t&&!e.j&&(ma(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Aa(this,t),wa(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=ca(t,fa)),e.i=new ga(t,e.h))}function ia(e,t,n){e.i.set(t,n)}function oa(e){return ia(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function aa(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ca(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,la),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function la(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}ea.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ca(t,ua,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(ca(t,ua,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(ca(n,"/"==n.charAt(0)?da:ha,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",ca(n,pa)),e.join("")};var ua=/[#\/\?@]/g,ha=/[#\?:]/g,da=/[#\?]/g,fa=/[#\?@]/g,pa=/#/g;function ga(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function ma(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),r=null;if(0<=s){var i=e[n].substring(0,s);r=e[n].substring(s+1)}else i=e[n];t(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Aa(e,t){ma(e),t=ya(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function va(e,t){return ma(e),t=ya(e,t),e.g.has(t)}function wa(e,t,n){Aa(e,t),0<n.length&&(e.i=null,e.g.set(ya(e,t),Xr(n)),e.h+=n.length)}function ya(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(Mr=ga.prototype).add=function(e,t){ma(this),this.i=null,e=ya(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},Mr.forEach=function(e,t){ma(this),this.g.forEach((function(n,s){n.forEach((function(n){e.call(t,n,s,this)}),this)}),this)},Mr.ta=function(){ma(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const r=e[s];for(let e=0;e<r.length;e++)n.push(t[s])}return n},Mr.Z=function(e){ma(this);let t=[];if("string"==typeof e)va(this,e)&&(t=t.concat(this.g.get(ya(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},Mr.set=function(e,t){return ma(this),this.i=null,va(this,e=ya(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},Mr.get=function(e,t){return e&&0<(e=this.Z(e)).length?String(e[0]):t},Mr.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const i=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var r=i;""!==o[s]&&(r+="="+encodeURIComponent(String(o[s]))),e.push(r)}}return this.i=e.join("&")};function ba(e){this.l=e||Ia,Fr.PerformanceNavigationTiming?e=0<(e=Fr.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(Fr.g&&Fr.g.Ka&&Fr.g.Ka()&&Fr.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Ia=10;function Ea(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Ta(e){return e.h?1:e.g?e.g.size:0}function Ca(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function ka(e,t){e.g?e.g.add(t):e.h=t}function Sa(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Ra(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Xr(e.i)}ba.prototype.cancel=function(){if(this.i=Ra(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var Da=class{stringify(e){return Fr.JSON.stringify(e,void 0)}parse(e){return Fr.JSON.parse(e,void 0)}};function Na(){this.g=new Da}function Ua(e,t,n){const s=n||"";try{Yo(e,(function(e,n){let r=e;$r(e)&&(r=zi(e)),t.push(s+n+"="+encodeURIComponent(r))}))}catch(e){throw t.push(s+"type="+encodeURIComponent("_badmap")),e}}function xa(e,t,n,s,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(s)}catch(e){}}function _a(e){this.l=e.fc||null,this.j=e.ob||!1}function Oa(e,t){Qi.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=La,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}zr(_a,Ro),_a.prototype.g=function(){return new Oa(this.l,this.j)},_a.prototype.i=function(e){return function(){return e}}({}),zr(Oa,Qi);var La=0;function Ma(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function Pa(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Ba(e)}function Ba(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(Mr=Oa.prototype).open=function(e,t){if(this.readyState!=La)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Ba(this)},Mr.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||Fr).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},Mr.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Pa(this)),this.readyState=La},Mr.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Ba(this)),this.g&&(this.readyState=3,Ba(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==Fr.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ma(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},Mr.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Pa(this):Ba(this),3==this.readyState&&Ma(this)}},Mr.Za=function(e){this.g&&(this.response=this.responseText=e,Pa(this))},Mr.Ya=function(e){this.g&&(this.response=e,Pa(this))},Mr.ka=function(){this.g&&Pa(this)},Mr.setRequestHeader=function(e,t){this.v.append(e,t)},Mr.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},Mr.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Oa.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Fa=Fr.JSON.parse;function Va(e){Qi.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=$a,this.L=this.M=!1}zr(Va,Qi);var $a="",ja=/^https?$/i,Ga=["POST","PUT"];function Ka(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Qa(e),Wa(e)}function Qa(e){e.F||(e.F=!0,qi(e,"complete"),qi(e,"error"))}function qa(e){if(e.h&&void 0!==Br&&(!e.C[1]||4!=Ha(e)||2!=e.da()))if(e.v&&4==Ha(e))ao(e.La,0,e);else if(qi(e,"readystatechange"),4==Ha(e)){e.h=!1;try{const o=e.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var s;if(s=0===o){var r=String(e.I).match(Zo)[1]||null;!r&&Fr.self&&Fr.self.location&&(r=Fr.self.location.protocol.slice(0,-1)),s=!ja.test(r?r.toLowerCase():"")}n=s}if(n)qi(e,"complete"),qi(e,"success");else{e.m=6;try{var i=2<Ha(e)?e.g.statusText:""}catch(e){i=""}e.j=i+" ["+e.da()+"]",Qa(e)}}finally{Wa(e)}}}function Wa(e,t){if(e.g){za(e);const n=e.g,s=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||qi(e,"ready");try{n.onreadystatechange=s}catch(e){}}}function za(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(Fr.clearTimeout(e.A),e.A=null)}function Ha(e){return e.g?e.g.readyState:0}function Ja(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case $a:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Xa(e){let t="";return ki(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Ya(e,t,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Xa(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):ia(e,t,n))}function Za(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function ec(e){this.Ga=0,this.j=[],this.l=new go,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Za("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Za("baseRetryDelayMs",5e3,e),this.hb=Za("retryDelaySeedMs",1e4,e),this.eb=Za("forwardChannelMaxRetries",2,e),this.xa=Za("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new ba(e&&e.concurrentRequestLimit),this.Ja=new Na,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function tc(e){if(sc(e),3==e.H){var t=e.W++,n=ta(e.I);if(ia(n,"SID",e.K),ia(n,"RID",t),ia(n,"TYPE","terminate"),oc(e,n),(t=new Mo(e,e.l,t)).L=2,t.v=oa(ta(n)),n=!1,Fr.navigator&&Fr.navigator.sendBeacon)try{n=Fr.navigator.sendBeacon(t.v.toString(),"")}catch(e){}!n&&Fr.Image&&((new Image).src=t.v,n=!0),n||(t.g=vc(t.l,null),t.g.ha(t.v)),t.G=Date.now(),qo(t)}mc(e)}function nc(e){e.g&&(uc(e),e.g.cancel(),e.g=null)}function sc(e){nc(e),e.u&&(Fr.clearTimeout(e.u),e.u=null),dc(e),e.i.cancel(),e.m&&("number"==typeof e.m&&Fr.clearTimeout(e.m),e.m=null)}function rc(e){if(!Ea(e.i)&&!e.m){e.m=!0;var t=e.Na;eo||so(),to||(eo(),to=!0),no.add(t,e),e.C=0}}function ic(e,t){var n;n=t?t.m:e.W++;const s=ta(e.I);ia(s,"SID",e.K),ia(s,"RID",n),ia(s,"AID",e.V),oc(e,s),e.o&&e.s&&Ya(s,e.o,e.s),n=new Mo(e,e.l,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=ac(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),ka(e.i,n),$o(n,s,t)}function oc(e,t){e.na&&ki(e.na,(function(e,n){ia(t,n,e)})),e.h&&Yo({},(function(e,n){ia(t,n,e)}))}function ac(e,t,n){n=Math.min(e.j.length,n);var s=e.h?qr(e.h.Va,e.h,e):null;e:{var r=e.j;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=r[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let i=!0;for(let o=0;o<n;o++){let n=r[o].g;const a=r[o].map;if(n-=t,0>n)t=Math.max(0,r[o].g-100),i=!1;else try{Ua(a,e,"req"+n+"_")}catch(e){s&&s(a)}}if(i){s=e.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,s}function cc(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;eo||so(),to||(eo(),to=!0),no.add(t,e),e.A=0}}function lc(e){return!(e.g||e.u||3<=e.A)&&(e.ba++,e.u=Co(qr(e.Ma,e),pc(e,e.A)),e.A++,!0)}function uc(e){null!=e.B&&(Fr.clearTimeout(e.B),e.B=null)}function hc(e){e.g=new Mo(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=ta(e.wa);ia(t,"RID","rpc"),ia(t,"SID",e.K),ia(t,"AID",e.V),ia(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&ia(t,"TO",e.qa),ia(t,"TYPE","xmlhttp"),oc(e,t),e.o&&e.s&&Ya(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=oa(ta(t)),n.s=null,n.S=!0,jo(n,e)}function dc(e){null!=e.v&&(Fr.clearTimeout(e.v),e.v=null)}function fc(e,t){var n=null;if(e.g==t){dc(e),uc(e),e.g=null;var s=2}else{if(!Ca(e.i,t))return;n=t.F,Sa(e.i,t),s=1}if(0!=e.H)if(t.i)if(1==s){n=t.s?t.s.length:0,t=Date.now()-t.G;var r=e.C;qi(s=wo(),new To(s,n)),rc(e)}else cc(e);else if(3==(r=t.o)||0==r&&0<t.ca||!(1==s&&function(e,t){return!(Ta(e.i)>=e.i.j-(e.m?1:0)||(e.m?(e.j=t.F.concat(e.j),0):1==e.H||2==e.H||e.C>=(e.cb?0:e.eb)||(e.m=Co(qr(e.Na,e,t),pc(e,e.C)),e.C++,0)))}(e,t)||2==s&&lc(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),r){case 1:gc(e,5);break;case 4:gc(e,10);break;case 3:gc(e,6);break;default:gc(e,2)}}function pc(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function gc(e,t){if(e.l.info("Error code "+t),2==t){var n=null;e.h&&(n=null);var s=qr(e.pb,e);n||(n=new ea("//www.google.com/images/cleardot.gif"),Fr.location&&"http"==Fr.location.protocol||na(n,"https"),oa(n)),function(e,t){const n=new go;if(Fr.Image){const s=new Image;s.onload=Wr(xa,n,s,"TestLoadImage: loaded",!0,t),s.onerror=Wr(xa,n,s,"TestLoadImage: error",!1,t),s.onabort=Wr(xa,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=Wr(xa,n,s,"TestLoadImage: timeout",!1,t),Fr.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=e}else t(!1)}(n.toString(),s)}else Eo(2);e.H=0,e.h&&e.h.za(t),mc(e),sc(e)}function mc(e){if(e.H=0,e.ma=[],e.h){const t=Ra(e.i);0==t.length&&0==e.j.length||(Yr(e.ma,t),Yr(e.ma,e.j),e.i.i.length=0,Xr(e.j),e.j.length=0),e.h.ya()}}function Ac(e,t,n){var s=n instanceof ea?ta(n):new ea(n);if(""!=s.g)t&&(s.g=t+"."+s.g),sa(s,s.m);else{var r=Fr.location;s=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var i=new ea(null);s&&na(i,s),t&&(i.g=t),r&&sa(i,r),n&&(i.l=n),s=i}return n=e.F,t=e.Da,n&&t&&ia(s,n,t),ia(s,"VER",e.ra),oc(e,s),s}function vc(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ha&&!e.va?new Va(new _a({ob:!0})):new Va(e.va)).Oa(e.J),t}function wc(){}function yc(){if(li&&!(10<=Number(wi)))throw Error("Environmental error: no available transport.")}function bc(e,t){Qi.call(this),this.g=new ec(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!ti(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!ti(t)&&(this.g.F=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new Tc(this)}function Ic(e){_o.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Ec(){Oo.call(this),this.status=1}function Tc(e){this.g=e}function Cc(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function kc(e,t,n){n||(n=0);var s=Array(16);if("string"==typeof t)for(var r=0;16>r;++r)s[r]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(r=0;16>r;++r)s[r]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],r=e.g[2];var i=e.g[3],o=t+(i^n&(r^i))+s[0]+3614090360&4294967295;o=(n=(r=(i=(t=(n=(r=(i=(t=(n=(r=(i=(t=(n=(r=(i=(t=(n=(r=(i=(t=(n=(r=(i=(t=(n=(r=(i=(t=(n=(r=(i=(t=(n=(r=(i=(t=(n=(r=(i=(t=(n=(r=(i=(t=(n=(r=(i=(t=(n=(r=(i=(t=(n=(r=(i=(t=(n=(r=(i=(t=n+(o<<7&4294967295|o>>>25))+((o=i+(r^t&(n^r))+s[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^i&(t^n))+s[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^r&(i^t))+s[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=t+(i^n&(r^i))+s[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=i+(r^t&(n^r))+s[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^i&(t^n))+s[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^r&(i^t))+s[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=t+(i^n&(r^i))+s[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=i+(r^t&(n^r))+s[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^i&(t^n))+s[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^r&(i^t))+s[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=t+(i^n&(r^i))+s[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=i+(r^t&(n^r))+s[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^i&(t^n))+s[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^r&(i^t))+s[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=t+(r^i&(n^r))+s[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=i+(n^r&(t^n))+s[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=r+(t^n&(i^t))+s[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(i^t&(r^i))+s[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=t+(r^i&(n^r))+s[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=i+(n^r&(t^n))+s[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=r+(t^n&(i^t))+s[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(i^t&(r^i))+s[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=t+(r^i&(n^r))+s[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=i+(n^r&(t^n))+s[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=r+(t^n&(i^t))+s[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(i^t&(r^i))+s[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=t+(r^i&(n^r))+s[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=i+(n^r&(t^n))+s[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=r+(t^n&(i^t))+s[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(i^t&(r^i))+s[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=t+(n^r^i)+s[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=i+(t^n^r)+s[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=r+(i^t^n)+s[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^i^t)+s[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^r^i)+s[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=i+(t^n^r)+s[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=r+(i^t^n)+s[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^i^t)+s[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^r^i)+s[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=i+(t^n^r)+s[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=r+(i^t^n)+s[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^i^t)+s[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^r^i)+s[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=i+(t^n^r)+s[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=r+(i^t^n)+s[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^i^t)+s[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=t+(r^(n|~i))+s[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=i+(n^(t|~r))+s[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=r+(t^(i|~n))+s[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(i^(r|~t))+s[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=t+(r^(n|~i))+s[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=i+(n^(t|~r))+s[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=r+(t^(i|~n))+s[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(i^(r|~t))+s[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=t+(r^(n|~i))+s[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=i+(n^(t|~r))+s[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=r+(t^(i|~n))+s[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(i^(r|~t))+s[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((i=(t=n+((o=t+(r^(n|~i))+s[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=i+(n^(t|~r))+s[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((r=i+((o=r+(t^(i|~n))+s[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~t))+s[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+r&4294967295,e.g[3]=e.g[3]+i&4294967295}function Sc(e,t){this.h=t;for(var n=[],s=!0,r=e.length-1;0<=r;r--){var i=0|e[r];s&&i==t||(n[r]=i,s=!1)}this.g=n}(Mr=Va.prototype).Oa=function(e){this.M=e},Mr.ha=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Uo.g(),this.C=this.u?Do(this.u):Do(Uo),this.g.onreadystatechange=qr(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(e){return void Ka(this,e)}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else{if("function"!=typeof s.keys||"function"!=typeof s.get)throw Error("Unknown input type for opt_headers: "+String(s));for(const e of s.keys())n.set(e,s.get(e))}s=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),r=Fr.FormData&&e instanceof Fr.FormData,!(0<=Jr(Ga,t))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[e,t]of n)this.g.setRequestHeader(e,t);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{za(this),0<this.B&&((this.L=function(e){return li&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=qr(this.ua,this)):this.A=ao(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){Ka(this,e)}},Mr.ua=function(){void 0!==Br&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,qi(this,"timeout"),this.abort(8))},Mr.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,qi(this,"complete"),qi(this,"abort"),Wa(this))},Mr.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Wa(this,!0)),Va.$.N.call(this)},Mr.La=function(){this.s||(this.G||this.v||this.l?qa(this):this.kb())},Mr.kb=function(){qa(this)},Mr.isActive=function(){return!!this.g},Mr.da=function(){try{return 2<Ha(this)?this.g.status:-1}catch(e){return-1}},Mr.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},Mr.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Fa(t)}},Mr.Ia=function(){return this.m},Mr.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(Mr=ec.prototype).ra=8,Mr.H=1,Mr.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const r=new Mo(this,this.l,e);let i=this.s;if(this.U&&(i?(i=Si(i),Di(i,this.U)):i=this.U),null!==this.o||this.O||(r.I=i,i=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){var s=this.j[n];if(void 0===(s="__data__"in s.map&&"string"==typeof(s=s.map.__data__)?s.length:void 0))break;if(4096<(t+=s)){t=n;break e}if(4096===t||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=ac(this,r,t),ia(n=ta(this.I),"RID",e),ia(n,"CVER",22),this.F&&ia(n,"X-HTTP-Session-Id",this.F),oc(this,n),i&&(this.O?t="headers="+encodeURIComponent(String(Xa(i)))+"&"+t:this.o&&Ya(n,this.o,i)),ka(this.i,r),this.bb&&ia(n,"TYPE","init"),this.P?(ia(n,"$req",t),ia(n,"SID","null"),r.aa=!0,$o(r,n,null)):$o(r,n,t),this.H=2}}else 3==this.H&&(e?ic(this,e):0==this.j.length||Ea(this.i)||ic(this))},Mr.Ma=function(){if(this.u=null,hc(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Co(qr(this.jb,this),e)}},Mr.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Eo(10),nc(this),hc(this))},Mr.ib=function(){null!=this.v&&(this.v=null,nc(this),lc(this),Eo(19))},Mr.pb=function(e){e?(this.l.info("Successfully pinged google.com"),Eo(2)):(this.l.info("Failed to ping google.com"),Eo(1))},Mr.isActive=function(){return!!this.h&&this.h.isActive(this)},(Mr=wc.prototype).Ba=function(){},Mr.Aa=function(){},Mr.za=function(){},Mr.ya=function(){},Mr.isActive=function(){return!0},Mr.Va=function(){},yc.prototype.g=function(e,t){return new bc(e,t)},zr(bc,Qi),bc.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;Eo(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Ac(e,null,e.Y),rc(e)},bc.prototype.close=function(){tc(this.g)},bc.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=zi(e),e=n);t.j.push(new class{constructor(e,t){this.g=e,this.map=t}}(t.fb++,e)),3==t.H&&rc(t)},bc.prototype.N=function(){this.g.h=null,delete this.j,tc(this.g),delete this.g,bc.$.N.call(this)},zr(Ic,_o),zr(Ec,Oo),zr(Tc,wc),Tc.prototype.Ba=function(){qi(this.g,"a")},Tc.prototype.Aa=function(e){qi(this.g,new Ic(e))},Tc.prototype.za=function(e){qi(this.g,new Ec)},Tc.prototype.ya=function(){qi(this.g,"b")},zr(Cc,(function(){this.blockSize=-1})),Cc.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},Cc.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,s=this.m,r=this.h,i=0;i<t;){if(0==r)for(;i<=n;)kc(this,e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(s[r++]=e.charCodeAt(i++),r==this.blockSize){kc(this,s),r=0;break}}else for(;i<t;)if(s[r++]=e[i++],r==this.blockSize){kc(this,s),r=0;break}}this.h=r,this.i+=t},Cc.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var s=0;32>s;s+=8)e[n++]=this.g[t]>>>s&255;return e};var Rc={};function Dc(e){return-128<=e&&128>e?function(e,t){var n=Rc;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,(function(e){return new Sc([0|e],0>e?-1:0)})):new Sc([0|e],0>e?-1:0)}function Nc(e){if(isNaN(e)||!isFinite(e))return xc;if(0>e)return Pc(Nc(-e));for(var t=[],n=1,s=0;e>=n;s++)t[s]=e/n|0,n*=Uc;return new Sc(t,0)}var Uc=4294967296,xc=Dc(0),_c=Dc(1),Oc=Dc(16777216);function Lc(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function Mc(e){return-1==e.h}function Pc(e){for(var t=e.g.length,n=[],s=0;s<t;s++)n[s]=~e.g[s];return new Sc(n,~e.h).add(_c)}function Bc(e,t){return e.add(Pc(t))}function Fc(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function Vc(e,t){this.g=e,this.h=t}function $c(e,t){if(Lc(t))throw Error("division by zero");if(Lc(e))return new Vc(xc,xc);if(Mc(e))return t=$c(Pc(e),t),new Vc(Pc(t.g),Pc(t.h));if(Mc(t))return t=$c(e,Pc(t)),new Vc(Pc(t.g),t.h);if(30<e.g.length){if(Mc(e)||Mc(t))throw Error("slowDivide_ only works with positive integers.");for(var n=_c,s=t;0>=s.X(e);)n=jc(n),s=jc(s);var r=Gc(n,1),i=Gc(s,1);for(s=Gc(s,2),n=Gc(n,2);!Lc(s);){var o=i.add(s);0>=o.X(e)&&(r=r.add(n),i=o),s=Gc(s,1),n=Gc(n,1)}return t=Bc(e,r.R(t)),new Vc(r,t)}for(r=xc;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),s=48>=(s=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,s-48),o=(i=Nc(n)).R(t);Mc(o)||0<o.X(e);)o=(i=Nc(n-=s)).R(t);Lc(i)&&(i=_c),r=r.add(i),e=Bc(e,o)}return new Vc(r,e)}function jc(e){for(var t=e.g.length+1,n=[],s=0;s<t;s++)n[s]=e.D(s)<<1|e.D(s-1)>>>31;return new Sc(n,e.h)}function Gc(e,t){var n=t>>5;t%=32;for(var s=e.g.length-n,r=[],i=0;i<s;i++)r[i]=0<t?e.D(i+n)>>>t|e.D(i+n+1)<<32-t:e.D(i+n);return new Sc(r,e.h)}(Mr=Sc.prototype).ea=function(){if(Mc(this))return-Pc(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var s=this.D(n);e+=(0<=s?s:Uc+s)*t,t*=Uc}return e},Mr.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(Lc(this))return"0";if(Mc(this))return"-"+Pc(this).toString(e);for(var t=Nc(Math.pow(e,6)),n=this,s="";;){var r=$c(n,t).g,i=((0<(n=Bc(n,r.R(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(Lc(n=r))return i+s;for(;6>i.length;)i="0"+i;s=i+s}},Mr.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},Mr.X=function(e){return Mc(e=Bc(this,e))?-1:Lc(e)?0:1},Mr.abs=function(){return Mc(this)?Pc(this):this},Mr.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0,r=0;r<=t;r++){var i=s+(65535&this.D(r))+(65535&e.D(r)),o=(i>>>16)+(this.D(r)>>>16)+(e.D(r)>>>16);s=o>>>16,i&=65535,o&=65535,n[r]=o<<16|i}return new Sc(n,-2147483648&n[n.length-1]?-1:0)},Mr.R=function(e){if(Lc(this)||Lc(e))return xc;if(Mc(this))return Mc(e)?Pc(this).R(Pc(e)):Pc(Pc(this).R(e));if(Mc(e))return Pc(this.R(Pc(e)));if(0>this.X(Oc)&&0>e.X(Oc))return Nc(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],s=0;s<2*t;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<e.g.length;r++){var i=this.D(s)>>>16,o=65535&this.D(s),a=e.D(r)>>>16,c=65535&e.D(r);n[2*s+2*r]+=o*c,Fc(n,2*s+2*r),n[2*s+2*r+1]+=i*c,Fc(n,2*s+2*r+1),n[2*s+2*r+1]+=o*a,Fc(n,2*s+2*r+1),n[2*s+2*r+2]+=i*a,Fc(n,2*s+2*r+2)}for(s=0;s<t;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=t;s<2*t;s++)n[s]=0;return new Sc(n,0)},Mr.gb=function(e){return $c(this,e).h},Mr.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)&e.D(s);return new Sc(n,this.h&e.h)},Mr.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)|e.D(s);return new Sc(n,this.h|e.h)},Mr.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)^e.D(s);return new Sc(n,this.h^e.h)},yc.prototype.createWebChannel=yc.prototype.g,bc.prototype.send=bc.prototype.u,bc.prototype.open=bc.prototype.m,bc.prototype.close=bc.prototype.close,ko.NO_ERROR=0,ko.TIMEOUT=8,ko.HTTP_ERROR=6,So.COMPLETE="complete",No.EventType=xo,xo.OPEN="a",xo.CLOSE="b",xo.ERROR="c",xo.MESSAGE="d",Qi.prototype.listen=Qi.prototype.O,Va.prototype.listenOnce=Va.prototype.P,Va.prototype.getLastError=Va.prototype.Sa,Va.prototype.getLastErrorCode=Va.prototype.Ia,Va.prototype.getStatus=Va.prototype.da,Va.prototype.getResponseJson=Va.prototype.Wa,Va.prototype.getResponseText=Va.prototype.ja,Va.prototype.send=Va.prototype.ha,Va.prototype.setWithCredentials=Va.prototype.Oa,Cc.prototype.digest=Cc.prototype.l,Cc.prototype.reset=Cc.prototype.reset,Cc.prototype.update=Cc.prototype.j,Sc.prototype.add=Sc.prototype.add,Sc.prototype.multiply=Sc.prototype.R,Sc.prototype.modulo=Sc.prototype.gb,Sc.prototype.compare=Sc.prototype.X,Sc.prototype.toNumber=Sc.prototype.ea,Sc.prototype.toString=Sc.prototype.toString,Sc.prototype.getBits=Sc.prototype.D,Sc.fromNumber=Nc,Sc.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return Pc(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var s=Nc(Math.pow(n,8)),r=xc,i=0;i<t.length;i+=8){var o=Math.min(8,t.length-i),a=parseInt(t.substring(i,i+o),n);8>o?(o=Nc(Math.pow(n,o)),r=r.R(o).add(Nc(a))):r=(r=r.R(s)).add(Nc(a))}return r};var Kc=ko,Qc=So,qc=Ao,Wc=10,zc=11,Hc=_a,Jc=No,Xc=Va,Yc=Cc,Zc=Sc;const el="@firebase/firestore";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class tl{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tl.UNAUTHENTICATED=new tl(null),tl.GOOGLE_CREDENTIALS=new tl("google-credentials-uid"),tl.FIRST_PARTY=new tl("first-party-uid"),tl.MOCK_USER=new tl("mock-user");
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
let nl="9.23.0";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const sl=new Gs("@firebase/firestore");function rl(){return sl.logLevel}function il(e,...t){if(sl.logLevel<=Bs.DEBUG){const n=t.map(cl);sl.debug(`Firestore (${nl}): ${e}`,...n)}}function ol(e,...t){if(sl.logLevel<=Bs.ERROR){const n=t.map(cl);sl.error(`Firestore (${nl}): ${e}`,...n)}}function al(e,...t){if(sl.logLevel<=Bs.WARN){const n=t.map(cl);sl.warn(`Firestore (${nl}): ${e}`,...n)}}function cl(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var t}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ll(e="Unexpected state"){const t=`FIRESTORE (${nl}) INTERNAL ASSERTION FAILED: `+e;throw ol(t),new Error(t)}function ul(e,t){e||ll()}function hl(e,t){return e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const dl={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class fl extends Es{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class pl{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class gl{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ml{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(tl.UNAUTHENTICATED)))}shutdown(){}}class Al{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class vl{constructor(e){this.t=e,this.currentUser=tl.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const s=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let r=new pl;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new pl,e.enqueueRetryable((()=>s(this.currentUser)))};const i=()=>{const t=r;e.enqueueRetryable((async()=>{await t.promise,await s(this.currentUser)}))},o=e=>{il("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(il("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new pl)}}),0),i()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(il("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(ul("string"==typeof t.accessToken),new gl(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ul(null===e||"string"==typeof e),new tl(e)}}class wl{constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=tl.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class yl{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new wl(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(tl.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class bl{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Il{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const n=e=>{null!=e.error&&il("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.T;return this.T=e.token,il("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const s=e=>{il("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit((e=>s(e))),setTimeout((()=>{if(!this.appCheck){const e=this.I.getImmediate({optional:!0});e?s(e):il("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(ul("string"==typeof e.token),this.T=e.token,new bl(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function El(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Tl{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(256/62);let n="";for(;n.length<20;){const s=El(40);for(let r=0;r<s.length;++r)n.length<20&&s[r]<t&&(n+=e.charAt(s[r]%62))}return n}}function Cl(e,t){return e<t?-1:e>t?1:0}function kl(e,t,n){return e.length===t.length&&e.every(((e,s)=>n(e,t[s])))}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Sl{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new fl(dl.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new fl(dl.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new fl(dl.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new fl(dl.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Sl.fromMillis(Date.now())}static fromDate(e){return Sl.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Sl(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Cl(this.nanoseconds,e.nanoseconds):Cl(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Rl{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Rl(e)}static min(){return new Rl(new Sl(0,0))}static max(){return new Rl(new Sl(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Dl{constructor(e,t,n){void 0===t?t=0:t>e.length&&ll(),void 0===n?n=e.length-t:n>e.length-t&&ll(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Dl.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Dl?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const n=e.get(s),r=t.get(s);if(n<r)return-1;if(n>r)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Nl extends Dl{construct(e,t,n){return new Nl(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new fl(dl.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Nl(t)}static emptyPath(){return new Nl([])}}const Ul=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xl extends Dl{construct(e,t,n){return new xl(e,t,n)}static isValidIdentifier(e){return Ul.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xl.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new xl(["__name__"])}static fromServerFormat(e){const t=[];let n="",s=0;const r=()=>{if(0===n.length)throw new fl(dl.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let i=!1;for(;s<e.length;){const t=e[s];if("\\"===t){if(s+1===e.length)throw new fl(dl.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[s+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new fl(dl.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,s+=2}else"`"===t?(i=!i,s++):"."!==t||i?(n+=t,s++):(r(),s++)}if(r(),i)throw new fl(dl.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xl(t)}static emptyPath(){return new xl([])}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class _l{constructor(e){this.path=e}static fromPath(e){return new _l(Nl.fromString(e))}static fromName(e){return new _l(Nl.fromString(e).popFirst(5))}static empty(){return new _l(Nl.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Nl.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Nl.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new _l(new Nl(e.slice()))}}function Ol(e){return new Ll(e.readTime,e.key,-1)}class Ll{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Ll(Rl.min(),_l.empty(),-1)}static max(){return new Ll(Rl.max(),_l.empty(),-1)}}function Ml(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=_l.comparator(e.documentKey,t.documentKey),0!==n?n:Cl(e.largestBatchId,t.largestBatchId))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Pl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Bl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function Fl(e){if(e.code!==dl.FAILED_PRECONDITION||e.message!==Pl)throw e;il("LocalStore","Unexpectedly lost primary lease")}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Vl{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ll(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Vl(((n,s)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,s)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Vl?t:Vl.resolve(t)}catch(e){return Vl.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Vl.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Vl.reject(t)}static resolve(e){return new Vl(((t,n)=>{t(e)}))}static reject(e){return new Vl(((t,n)=>{n(e)}))}static waitFor(e){return new Vl(((t,n)=>{let s=0,r=0,i=!1;e.forEach((e=>{++s,e.next((()=>{++r,i&&r===s&&t()}),(e=>n(e)))})),i=!0,r===s&&t()}))}static or(e){let t=Vl.resolve(!1);for(const n of e)t=t.next((e=>e?Vl.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,s)=>{n.push(t.call(this,e,s))})),this.waitFor(n)}static mapArray(e,t){return new Vl(((n,s)=>{const r=e.length,i=new Array(r);let o=0;for(let a=0;a<r;a++){const c=a;t(e[c]).next((e=>{i[c]=e,++o,o===r&&n(i)}),(e=>s(e)))}}))}static doWhile(e,t){return new Vl(((n,s)=>{const r=()=>{!0===e()?t().next((()=>{r()}),s):n()};r()}))}}function $l(e){return"IndexedDbTransactionError"===e.name}
/**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class jl{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}function Gl(e){return null==e}function Kl(e){return 0===e&&1/e==-1/0}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Ql(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function ql(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Wl(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */jl.ct=-1;class zl{constructor(e,t){this.comparator=e,this.root=t||Jl.EMPTY}insert(e,t){return new zl(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Jl.BLACK,null,null))}remove(e){return new zl(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Jl.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(0===s)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Hl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Hl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Hl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Hl(this.root,e,this.comparator,!0)}}class Hl{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,t&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(0===r){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Jl{constructor(e,t,n,s,r){this.key=e,this.value=t,this.color=null!=n?n:Jl.RED,this.left=null!=s?s:Jl.EMPTY,this.right=null!=r?r:Jl.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,r){return new Jl(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const r=n(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,t,n),null):0===r?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Jl.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===t(e,s.key)){if(s.right.isEmpty())return Jl.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Jl.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Jl.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ll();if(this.right.isRed())throw ll();const e=this.left.check();if(e!==this.right.check())throw ll();return e+(this.isRed()?0:1)}}Jl.EMPTY=null,Jl.RED=!0,Jl.BLACK=!1,Jl.EMPTY=new class{constructor(){this.size=0}get key(){throw ll()}get value(){throw ll()}get color(){throw ll()}get left(){throw ll()}get right(){throw ll()}copy(e,t,n,s,r){return this}insert(e,t,n){return new Jl(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Xl{constructor(e){this.comparator=e,this.data=new zl(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Yl(this.data.getIterator())}getIteratorFrom(e){return new Yl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Xl))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,s=n.getNext().key;if(0!==this.comparator(e,s))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Xl(this.comparator);return t.data=e,t}}class Yl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Zl{constructor(e){this.fields=e,e.sort(xl.comparator)}static empty(){return new Zl([])}unionWith(e){let t=new Xl(xl.comparator);for(const e of this.fields)t=t.add(e);for(const n of e)t=t.add(n);return new Zl(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return kl(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
     * @license
     * Copyright 2023 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class eu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class tu{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new eu("Invalid base64 string: "+e):e}}(e);return new tu(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new tu(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Cl(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tu.EMPTY_BYTE_STRING=new tu("");const nu=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function su(e){if(ul(!!e),"string"==typeof e){let t=0;const n=nu.exec(e);if(ul(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:ru(e.seconds),nanos:ru(e.nanos)}}function ru(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function iu(e){return"string"==typeof e?tu.fromBase64String(e):tu.fromUint8Array(e)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ou(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function au(e){const t=e.mapValue.fields.__previous_value__;return ou(t)?au(t):t}function cu(e){const t=su(e.mapValue.fields.__local_write_time__.timestampValue);return new Sl(t.seconds,t.nanos)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class lu{constructor(e,t,n,s,r,i,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=r,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class uu{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new uu("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof uu&&e.projectId===this.projectId&&e.database===this.database}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const hu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function du(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?ou(e)?4:function(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e)?9007199254740991:10:ll()}function fu(e,t){if(e===t)return!0;const n=du(e);if(n!==du(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return cu(e).isEqual(cu(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=su(e.timestampValue),s=su(t.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return iu(e.bytesValue).isEqual(iu(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return ru(e.geoPointValue.latitude)===ru(t.geoPointValue.latitude)&&ru(e.geoPointValue.longitude)===ru(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return ru(e.integerValue)===ru(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=ru(e.doubleValue),s=ru(t.doubleValue);return n===s?Kl(n)===Kl(s):isNaN(n)&&isNaN(s)}return!1}(e,t);case 9:return kl(e.arrayValue.values||[],t.arrayValue.values||[],fu);case 10:return function(e,t){const n=e.mapValue.fields||{},s=t.mapValue.fields||{};if(Ql(n)!==Ql(s))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===s[e]||!fu(n[e],s[e])))return!1;return!0}(e,t);default:return ll()}}function pu(e,t){return void 0!==(e.values||[]).find((e=>fu(e,t)))}function gu(e,t){if(e===t)return 0;const n=du(e),s=du(t);if(n!==s)return Cl(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Cl(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=ru(e.integerValue||e.doubleValue),s=ru(t.integerValue||t.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(e,t);case 3:return mu(e.timestampValue,t.timestampValue);case 4:return mu(cu(e),cu(t));case 5:return Cl(e.stringValue,t.stringValue);case 6:return function(e,t){const n=iu(e),s=iu(t);return n.compareTo(s)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),s=t.split("/");for(let e=0;e<n.length&&e<s.length;e++){const t=Cl(n[e],s[e]);if(0!==t)return t}return Cl(n.length,s.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Cl(ru(e.latitude),ru(t.latitude));return 0!==n?n:Cl(ru(e.longitude),ru(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],s=t.values||[];for(let e=0;e<n.length&&e<s.length;++e){const t=gu(n[e],s[e]);if(t)return t}return Cl(n.length,s.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===hu.mapValue&&t===hu.mapValue)return 0;if(e===hu.mapValue)return 1;if(t===hu.mapValue)return-1;const n=e.fields||{},s=Object.keys(n),r=t.fields||{},i=Object.keys(r);s.sort(),i.sort();for(let e=0;e<s.length&&e<i.length;++e){const t=Cl(s[e],i[e]);if(0!==t)return t;const o=gu(n[s[e]],r[i[e]]);if(0!==o)return o}return Cl(s.length,i.length)}(e.mapValue,t.mapValue);default:throw ll()}}function mu(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Cl(e,t);const n=su(e),s=su(t),r=Cl(n.seconds,s.seconds);return 0!==r?r:Cl(n.nanos,s.nanos)}function Au(e){return vu(e)}function vu(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=su(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?iu(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,_l.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const s of e.values||[])n?n=!1:t+=",",t+=vu(s);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",s=!0;for(const r of t)s?s=!1:n+=",",n+=`${r}:${vu(e.fields[r])}`;return n+"}"}(e.mapValue):ll();var t,n}function wu(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function yu(e){return!!e&&"integerValue"in e}function bu(e){return!!e&&"arrayValue"in e}function Iu(e){return!!e&&"nullValue"in e}function Eu(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Tu(e){return!!e&&"mapValue"in e}function Cu(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return ql(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Cu(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Cu(e.arrayValue.values[n]);return t}return Object.assign({},e)}class ku{constructor(e){this.value=e}static empty(){return new ku({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Tu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Cu(t)}setAll(e){let t=xl.emptyPath(),n={},s=[];e.forEach(((e,r)=>{if(!t.isImmediateParentOf(r)){const e=this.getFieldsMap(t);this.applyChanges(e,n,s),n={},s=[],t=r.popLast()}e?n[r.lastSegment()]=Cu(e):s.push(r.lastSegment())}));const r=this.getFieldsMap(t);this.applyChanges(r,n,s)}delete(e){const t=this.field(e.popLast());Tu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return fu(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];Tu(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){ql(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new ku(Cu(this.value))}}function Su(e){const t=[];return ql(e.fields,((e,n)=>{const s=new xl([e]);if(Tu(n)){const e=Su(n.mapValue).fields;if(0===e.length)t.push(s);else for(const n of e)t.push(s.child(n))}else t.push(s)})),new Zl(t)
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}class Ru{constructor(e,t,n,s,r,i,o){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new Ru(e,0,Rl.min(),Rl.min(),Rl.min(),ku.empty(),0)}static newFoundDocument(e,t,n,s){return new Ru(e,1,t,Rl.min(),n,s,0)}static newNoDocument(e,t){return new Ru(e,2,t,Rl.min(),Rl.min(),ku.empty(),0)}static newUnknownDocument(e,t){return new Ru(e,3,t,Rl.min(),Rl.min(),ku.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Rl.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ku.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ku.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Rl.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Ru&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ru(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Du{constructor(e,t){this.position=e,this.inclusive=t}}function Nu(e,t,n){let s=0;for(let r=0;r<e.position.length;r++){const i=t[r],o=e.position[r];if(s=i.field.isKeyField()?_l.comparator(_l.fromName(o.referenceValue),n.key):gu(o,n.data.field(i.field)),"desc"===i.dir&&(s*=-1),0!==s)break}return s}function Uu(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!fu(e.position[n],t.position[n]))return!1;return!0}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class xu{constructor(e,t="asc"){this.field=e,this.dir=t}}function _u(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ou{}class Lu extends Ou{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new ju(e,t,n):"array-contains"===t?new qu(e,n):"in"===t?new Wu(e,n):"not-in"===t?new zu(e,n):"array-contains-any"===t?new Hu(e,n):new Lu(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new Gu(e,n):new Ku(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(gu(t,this.value)):null!==t&&du(this.value)===du(t)&&this.matchesComparison(gu(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return ll()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Mu extends Ou{constructor(e,t){super(),this.filters=e,this.op=t,this.lt=null}static create(e,t){return new Mu(e,t)}matches(e){return Pu(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.lt||(this.lt=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft((e=>e.isInequality()));return null!==e?e.field:null}ft(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function Pu(e){return"and"===e.op}function Bu(e){return function(e){for(const t of e.filters)if(t instanceof Mu)return!1;return!0}(e)&&Pu(e)}function Fu(e){if(e instanceof Lu)return e.field.canonicalString()+e.op.toString()+Au(e.value);if(Bu(e))return e.filters.map((e=>Fu(e))).join(",");{const t=e.filters.map((e=>Fu(e))).join(",");return`${e.op}(${t})`}}function Vu(e,t){return e instanceof Lu?function(e,t){return t instanceof Lu&&e.op===t.op&&e.field.isEqual(t.field)&&fu(e.value,t.value)}(e,t):e instanceof Mu?function(e,t){return t instanceof Mu&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,s)=>e&&Vu(n,t.filters[s])),!0)}(e,t):void ll()}function $u(e){return e instanceof Lu?function(e){return`${e.field.canonicalString()} ${e.op} ${Au(e.value)}`}(e):e instanceof Mu?function(e){return e.op.toString()+" {"+e.getFilters().map($u).join(" ,")+"}"}(e):"Filter"}class ju extends Lu{constructor(e,t,n){super(e,t,n),this.key=_l.fromName(n.referenceValue)}matches(e){const t=_l.comparator(e.key,this.key);return this.matchesComparison(t)}}class Gu extends Lu{constructor(e,t){super(e,"in",t),this.keys=Qu("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Ku extends Lu{constructor(e,t){super(e,"not-in",t),this.keys=Qu("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Qu(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>_l.fromName(e.referenceValue)))}class qu extends Lu{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return bu(t)&&pu(t.arrayValue,this.value)}}class Wu extends Lu{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&pu(this.value.arrayValue,t)}}class zu extends Lu{constructor(e,t){super(e,"not-in",t)}matches(e){if(pu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!pu(this.value.arrayValue,t)}}class Hu extends Lu{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!bu(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>pu(this.value.arrayValue,e)))}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ju{constructor(e,t=null,n=[],s=[],r=null,i=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=r,this.startAt=i,this.endAt=o,this.dt=null}}function Xu(e,t=null,n=[],s=[],r=null,i=null,o=null){return new Ju(e,t,n,s,r,i,o)}function Yu(e){const t=hl(e);if(null===t.dt){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>Fu(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),Gl(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>Au(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>Au(e))).join(",")),t.dt=e}return t.dt}function Zu(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!_u(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Vu(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Uu(e.startAt,t.startAt)&&Uu(e.endAt,t.endAt)}function eh(e){return _l.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class th{constructor(e,t=null,n=[],s=[],r=null,i="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=r,this.limitType=i,this.startAt=o,this.endAt=a,this.wt=null,this._t=null,this.startAt,this.endAt}}function nh(e){return new th(e)}function sh(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function rh(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function ih(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function oh(e){return null!==e.collectionGroup}function ah(e){const t=hl(e);if(null===t.wt){t.wt=[];const e=ih(t),n=rh(t);if(null!==e&&null===n)e.isKeyField()||t.wt.push(new xu(e)),t.wt.push(new xu(xl.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.wt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new xu(xl.keyField(),e))}}}return t.wt}function ch(e){const t=hl(e);if(!t._t)if("F"===t.limitType)t._t=Xu(t.path,t.collectionGroup,ah(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of ah(t)){const t="desc"===n.dir?"asc":"desc";e.push(new xu(n.field,t))}const n=t.endAt?new Du(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new Du(t.startAt.position,t.startAt.inclusive):null;t._t=Xu(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}return t._t}function lh(e,t){t.getFirstInequalityField(),ih(e);const n=e.filters.concat([t]);return new th(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function uh(e,t,n){return new th(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function hh(e,t){return Zu(ch(e),ch(t))&&e.limitType===t.limitType}function dh(e){return`${Yu(ch(e))}|lt:${e.limitType}`}function fh(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>$u(e))).join(", ")}]`),Gl(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>Au(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>Au(e))).join(",")),`Target(${t})`}(ch(e))}; limitType=${e.limitType})`}function ph(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):_l.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of ah(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const s=Nu(e,t,n);return e.inclusive?s<=0:s<0}(e.startAt,ah(e),t))&&!(e.endAt&&!function(e,t,n){const s=Nu(e,t,n);return e.inclusive?s>=0:s>0}(e.endAt,ah(e),t))}(e,t)}function gh(e){return(t,n)=>{let s=!1;for(const r of ah(e)){const e=mh(r,t,n);if(0!==e)return e;s=s||r.field.isKeyField()}return 0}}function mh(e,t,n){const s=e.field.isKeyField()?_l.comparator(t.key,n.key):function(e,t,n){const s=t.data.field(e),r=n.data.field(e);return null!==s&&null!==r?gu(s,r):ll()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return ll()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ah{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,s]of n)if(this.equalsFn(t,e))return s}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(void 0===s)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<s.length;n++)if(this.equalsFn(s[n][0],e))return void(s[n]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return 1===n.length?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ql(this.inner,((t,n)=>{for(const[t,s]of n)e(t,s)}))}isEmpty(){return Wl(this.inner)}size(){return this.innerSize}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const vh=new zl(_l.comparator);function wh(){return vh}const yh=new zl(_l.comparator);function bh(...e){let t=yh;for(const n of e)t=t.insert(n.key,n);return t}function Ih(e){let t=yh;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function Eh(){return Ch()}function Th(){return Ch()}function Ch(){return new Ah((e=>e.toString()),((e,t)=>e.isEqual(t)))}const kh=new zl(_l.comparator),Sh=new Xl(_l.comparator);function Rh(...e){let t=Sh;for(const n of e)t=t.add(n);return t}const Dh=new Xl(Cl);
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Nh(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Kl(t)?"-0":t}}function Uh(e){return{integerValue:""+e}}function xh(e,t){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!Kl(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}(t)?Uh(t):Nh(e,t)}
/**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class _h{constructor(){this._=void 0}}function Oh(e,t,n){return e instanceof Ph?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&ou(t)&&(t=au(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Bh?Fh(e,t):e instanceof Vh?$h(e,t):function(e,t){const n=Mh(e,t),s=Gh(n)+Gh(e.gt);return yu(n)&&yu(e.gt)?Uh(s):Nh(e.serializer,s)}(e,t)}function Lh(e,t,n){return e instanceof Bh?Fh(e,t):e instanceof Vh?$h(e,t):n}function Mh(e,t){return e instanceof jh?yu(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class Ph extends _h{}class Bh extends _h{constructor(e){super(),this.elements=e}}function Fh(e,t){const n=Kh(t);for(const t of e.elements)n.some((e=>fu(e,t)))||n.push(t);return{arrayValue:{values:n}}}class Vh extends _h{constructor(e){super(),this.elements=e}}function $h(e,t){let n=Kh(t);for(const t of e.elements)n=n.filter((e=>!fu(e,t)));return{arrayValue:{values:n}}}class jh extends _h{constructor(e,t){super(),this.serializer=e,this.gt=t}}function Gh(e){return ru(e.integerValue||e.doubleValue)}function Kh(e){return bu(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class Qh{constructor(e,t){this.version=e,this.transformResults=t}}class qh{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new qh}static exists(e){return new qh(void 0,e)}static updateTime(e){return new qh(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Wh(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class zh{}function Hh(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new id(e.key,qh.none()):new ed(e.key,e.data,qh.none());{const n=e.data,s=ku.empty();let r=new Xl(xl.comparator);for(let e of t.fields)if(!r.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?s.delete(e):s.set(e,t),r=r.add(e)}return new td(e.key,s,new Zl(r.toArray()),qh.none())}}function Jh(e,t,n){e instanceof ed?function(e,t,n){const s=e.value.clone(),r=sd(e.fieldTransforms,t,n.transformResults);s.setAll(r),t.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(e,t,n):e instanceof td?function(e,t,n){if(!Wh(e.precondition,t))return void t.convertToUnknownDocument(n.version);const s=sd(e.fieldTransforms,t,n.transformResults),r=t.data;r.setAll(nd(e)),r.setAll(s),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Xh(e,t,n,s){return e instanceof ed?function(e,t,n,s){if(!Wh(e.precondition,t))return n;const r=e.value.clone(),i=rd(e.fieldTransforms,s,t);return r.setAll(i),t.convertToFoundDocument(t.version,r).setHasLocalMutations(),null}(e,t,n,s):e instanceof td?function(e,t,n,s){if(!Wh(e.precondition,t))return n;const r=rd(e.fieldTransforms,s,t),i=t.data;return i.setAll(nd(e)),i.setAll(r),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,s):function(e,t,n){return Wh(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function Yh(e,t){let n=null;for(const s of e.fieldTransforms){const e=t.data.field(s.field),r=Mh(s.transform,e||null);null!=r&&(null===n&&(n=ku.empty()),n.set(s.field,r))}return n||null}function Zh(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&kl(e,t,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Bh&&t instanceof Bh||e instanceof Vh&&t instanceof Vh?kl(e.elements,t.elements,fu):e instanceof jh&&t instanceof jh?fu(e.gt,t.gt):e instanceof Ph&&t instanceof Ph}(e.transform,t.transform)}(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class ed extends zh{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class td extends zh{constructor(e,t,n,s,r=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function nd(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}})),t}function sd(e,t,n){const s=new Map;ul(e.length===n.length);for(let r=0;r<n.length;r++){const i=e[r],o=i.transform,a=t.data.field(i.field);s.set(i.field,Lh(o,a,n[r]))}return s}function rd(e,t,n){const s=new Map;for(const r of e){const e=r.transform,i=n.data.field(r.field);s.set(r.field,Oh(e,i,t))}return s}class id extends zh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class od extends zh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ad{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const s=this.mutations[t];s.key.isEqual(e.key)&&Jh(s,e,n[t])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Xh(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Xh(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Th();return this.mutations.forEach((s=>{const r=e.get(s.key),i=r.overlayedDocument;let o=this.applyToLocalView(i,r.mutatedFields);o=t.has(s.key)?null:o;const a=Hh(i,o);null!==a&&n.set(s.key,a),i.isValidDocument()||i.convertToNoDocument(Rl.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Rh())}isEqual(e){return this.batchId===e.batchId&&kl(this.mutations,e.mutations,((e,t)=>Zh(e,t)))&&kl(this.baseMutations,e.baseMutations,((e,t)=>Zh(e,t)))}}class cd{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){ul(e.mutations.length===n.length);let s=kh;const r=e.mutations;for(let e=0;e<r.length;e++)s=s.insert(r[e].key,n[e].version);return new cd(e,t,n,s)}}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ld{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ud{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var hd,dd;function fd(e){if(void 0===e)return ol("GRPC error has no .code"),dl.UNKNOWN;switch(e){case hd.OK:return dl.OK;case hd.CANCELLED:return dl.CANCELLED;case hd.UNKNOWN:return dl.UNKNOWN;case hd.DEADLINE_EXCEEDED:return dl.DEADLINE_EXCEEDED;case hd.RESOURCE_EXHAUSTED:return dl.RESOURCE_EXHAUSTED;case hd.INTERNAL:return dl.INTERNAL;case hd.UNAVAILABLE:return dl.UNAVAILABLE;case hd.UNAUTHENTICATED:return dl.UNAUTHENTICATED;case hd.INVALID_ARGUMENT:return dl.INVALID_ARGUMENT;case hd.NOT_FOUND:return dl.NOT_FOUND;case hd.ALREADY_EXISTS:return dl.ALREADY_EXISTS;case hd.PERMISSION_DENIED:return dl.PERMISSION_DENIED;case hd.FAILED_PRECONDITION:return dl.FAILED_PRECONDITION;case hd.ABORTED:return dl.ABORTED;case hd.OUT_OF_RANGE:return dl.OUT_OF_RANGE;case hd.UNIMPLEMENTED:return dl.UNIMPLEMENTED;case hd.DATA_LOSS:return dl.DATA_LOSS;default:return ll()}}(dd=hd||(hd={}))[dd.OK=0]="OK",dd[dd.CANCELLED=1]="CANCELLED",dd[dd.UNKNOWN=2]="UNKNOWN",dd[dd.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",dd[dd.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",dd[dd.NOT_FOUND=5]="NOT_FOUND",dd[dd.ALREADY_EXISTS=6]="ALREADY_EXISTS",dd[dd.PERMISSION_DENIED=7]="PERMISSION_DENIED",dd[dd.UNAUTHENTICATED=16]="UNAUTHENTICATED",dd[dd.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",dd[dd.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",dd[dd.ABORTED=10]="ABORTED",dd[dd.OUT_OF_RANGE=11]="OUT_OF_RANGE",dd[dd.UNIMPLEMENTED=12]="UNIMPLEMENTED",dd[dd.INTERNAL=13]="INTERNAL",dd[dd.UNAVAILABLE=14]="UNAVAILABLE",dd[dd.DATA_LOSS=15]="DATA_LOSS";
/**
     * @license
     * Copyright 2023 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class pd{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return gd}static getOrCreateInstance(){return null===gd&&(gd=new pd),gd}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach((t=>t(e)))}}let gd=null;
/**
     * @license
     * Copyright 2023 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const md=new Zc([4294967295,4294967295],0);function Ad(e){const t=(new TextEncoder).encode(e),n=new Yc;return n.update(t),new Uint8Array(n.digest())}function vd(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),s=t.getUint32(4,!0),r=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new Zc([n,s],0),new Zc([r,i],0)]}class wd{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new yd(`Invalid padding: ${t}`);if(n<0)throw new yd(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new yd(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new yd(`Invalid padding when bitmap length is 0: ${t}`);this.It=8*e.length-t,this.Tt=Zc.fromNumber(this.It)}Et(e,t,n){let s=e.add(t.multiply(Zc.fromNumber(n)));return 1===s.compare(md)&&(s=new Zc([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Tt).toNumber()}At(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}vt(e){if(0===this.It)return!1;const t=Ad(e),[n,s]=vd(t);for(let e=0;e<this.hashCount;e++){const t=this.Et(n,s,e);if(!this.At(t))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),i=new wd(r,s,t);return n.forEach((e=>i.insert(e))),i}insert(e){if(0===this.It)return;const t=Ad(e),[n,s]=vd(t);for(let e=0;e<this.hashCount;e++){const t=this.Et(n,s,e);this.Rt(t)}}Rt(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class yd extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class bd{constructor(e,t,n,s,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,Id.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new bd(Rl.min(),s,new zl(Cl),wh(),Rh())}}class Id{constructor(e,t,n,s,r){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Id(n,t,Rh(),Rh(),Rh())}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ed{constructor(e,t,n,s){this.Pt=e,this.removedTargetIds=t,this.key=n,this.bt=s}}class Td{constructor(e,t){this.targetId=e,this.Vt=t}}class Cd{constructor(e,t,n=tu.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class kd{constructor(){this.St=0,this.Dt=Dd(),this.Ct=tu.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return 0!==this.St}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=Rh(),t=Rh(),n=Rh();return this.Dt.forEach(((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:ll()}})),new Id(this.Ct,this.xt,e,t,n)}Ft(){this.Nt=!1,this.Dt=Dd()}Bt(e,t){this.Nt=!0,this.Dt=this.Dt.insert(e,t)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class Sd{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=wh(),this.zt=Rd(),this.Wt=new zl(Cl)}Ht(e){for(const t of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(t,e.bt):this.Yt(t,e.key,e.bt);for(const t of e.removedTargetIds)this.Yt(t,e.key,e.bt)}Xt(e){this.forEachTarget(e,(t=>{const n=this.Zt(t);switch(e.state){case 0:this.te(t)&&n.$t(e.resumeToken);break;case 1:n.Ut(),n.kt||n.Ft(),n.$t(e.resumeToken);break;case 2:n.Ut(),n.kt||this.removeTarget(t);break;case 3:this.te(t)&&(n.Kt(),n.$t(e.resumeToken));break;case 4:this.te(t)&&(this.ee(t),n.$t(e.resumeToken));break;default:ll()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qt.forEach(((e,n)=>{this.te(n)&&t(n)}))}ne(e){var t;const n=e.targetId,s=e.Vt.count,r=this.se(n);if(r){const i=r.target;if(eh(i))if(0===s){const e=new _l(i.path);this.Yt(n,e,Ru.newNoDocument(e,Rl.min()))}else ul(1===s);else{const r=this.ie(n);if(r!==s){const s=this.re(e,r);if(0!==s){this.ee(n);const e=2===s?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(n,e)}null===(t=pd.instance)||void 0===t||t.notifyOnExistenceFilterMismatch(function(e,t,n){var s,r,i,o,a,c;const l={localCacheCount:t,existenceFilterCount:n.count},u=n.unchangedNames;return u&&(l.bloomFilter={applied:0===e,hashCount:null!==(s=null==u?void 0:u.hashCount)&&void 0!==s?s:0,bitmapLength:null!==(o=null===(i=null===(r=null==u?void 0:u.bits)||void 0===r?void 0:r.bitmap)||void 0===i?void 0:i.length)&&void 0!==o?o:0,padding:null!==(c=null===(a=null==u?void 0:u.bits)||void 0===a?void 0:a.padding)&&void 0!==c?c:0}),l}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(s,r,e.Vt))}}}}re(e,t){const{unchangedNames:n,count:s}=e.Vt;if(!n||!n.bits)return 1;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=n;let a,c;try{a=iu(r).toUint8Array()}catch(e){if(e instanceof eu)return al("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw e}try{c=new wd(a,i,o)}catch(e){return al(e instanceof yd?"BloomFilter error: ":"Applying bloom filter failed: ",e),1}return 0===c.It?1:s!==t-this.oe(e.targetId,c)?2:0}oe(e,t){const n=this.Gt.getRemoteKeysForTarget(e);let s=0;return n.forEach((n=>{const r=this.Gt.ue(),i=`projects/${r.projectId}/databases/${r.database}/documents/${n.path.canonicalString()}`;t.vt(i)||(this.Yt(e,n,null),s++)})),s}ce(e){const t=new Map;this.Qt.forEach(((n,s)=>{const r=this.se(s);if(r){if(n.current&&eh(r.target)){const t=new _l(r.target.path);null!==this.jt.get(t)||this.ae(s,t)||this.Yt(s,t,Ru.newNoDocument(t,e))}n.Mt&&(t.set(s,n.Ot()),n.Ft())}}));let n=Rh();this.zt.forEach(((e,t)=>{let s=!0;t.forEachWhile((e=>{const t=this.se(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(s=!1,!1)})),s&&(n=n.add(e))})),this.jt.forEach(((t,n)=>n.setReadTime(e)));const s=new bd(e,t,this.Wt,this.jt,n);return this.jt=wh(),this.zt=Rd(),this.Wt=new zl(Cl),s}Jt(e,t){if(!this.te(e))return;const n=this.ae(e,t.key)?2:0;this.Zt(e).Bt(t.key,n),this.jt=this.jt.insert(t.key,t),this.zt=this.zt.insert(t.key,this.he(t.key).add(e))}Yt(e,t,n){if(!this.te(e))return;const s=this.Zt(e);this.ae(e,t)?s.Bt(t,1):s.Lt(t),this.zt=this.zt.insert(t,this.he(t).delete(e)),n&&(this.jt=this.jt.insert(t,n))}removeTarget(e){this.Qt.delete(e)}ie(e){const t=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let t=this.Qt.get(e);return t||(t=new kd,this.Qt.set(e,t)),t}he(e){let t=this.zt.get(e);return t||(t=new Xl(Cl),this.zt=this.zt.insert(e,t)),t}te(e){const t=null!==this.se(e);return t||il("WatchChangeAggregator","Detected inactive target",e),t}se(e){const t=this.Qt.get(e);return t&&t.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new kd),this.Gt.getRemoteKeysForTarget(e).forEach((t=>{this.Yt(e,t,null)}))}ae(e,t){return this.Gt.getRemoteKeysForTarget(e).has(t)}}function Rd(){return new zl(_l.comparator)}function Dd(){return new zl(_l.comparator)}const Nd={asc:"ASCENDING",desc:"DESCENDING"},Ud={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},xd={and:"AND",or:"OR"};class _d{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Od(e,t){return e.useProto3Json||Gl(t)?t:{value:t}}function Ld(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Md(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Pd(e,t){return Ld(e,t.toTimestamp())}function Bd(e){return ul(!!e),Rl.fromTimestamp(function(e){const t=su(e);return new Sl(t.seconds,t.nanos)}(e))}function Fd(e,t){return function(e){return new Nl(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function Vd(e){const t=Nl.fromString(e);return ul(rf(t)),t}function $d(e,t){return Fd(e.databaseId,t.path)}function jd(e,t){const n=Vd(t);if(n.get(1)!==e.databaseId.projectId)throw new fl(dl.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new fl(dl.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new _l(Qd(n))}function Gd(e,t){return Fd(e.databaseId,t)}function Kd(e){return new Nl(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Qd(e){return ul(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function qd(e,t,n){return{name:$d(e,t),fields:n.value.mapValue.fields}}function Wd(e,t){return{documents:[Gd(e,t.path)]}}function zd(e,t){const n={structuredQuery:{}},s=t.path;null!==t.collectionGroup?(n.parent=Gd(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Gd(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(e){if(0!==e.length)return nf(Mu.create(e,"and"))}(t.filters);r&&(n.structuredQuery.where=r);const i=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:ef(e.field),direction:Xd(e.dir)}}(e)))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Od(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function Hd(e){let t=function(e){const t=Vd(e);return 4===t.length?Nl.emptyPath():Qd(t)}(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){ul(1===s);const e=n.from[0];e.allDescendants?r=e.collectionId:t=t.child(e.collectionId)}let i=[];n.where&&(i=function(e){const t=Jd(e);return t instanceof Mu&&Bu(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new xu(tf(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Gl(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new Du(n,t)}(n.startAt));let l=null;return n.endAt&&(l=function(e){const t=!e.before,n=e.values||[];return new Du(n,t)}(n.endAt)),function(e,t,n,s,r,i,o,a){return new th(e,t,n,s,r,i,o,a)}(t,r,o,i,a,"F",c,l)}function Jd(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=tf(e.unaryFilter.field);return Lu.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=tf(e.unaryFilter.field);return Lu.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=tf(e.unaryFilter.field);return Lu.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=tf(e.unaryFilter.field);return Lu.create(r,"!=",{nullValue:"NULL_VALUE"});default:return ll()}}(e):void 0!==e.fieldFilter?function(e){return Lu.create(tf(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ll()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return Mu.create(e.compositeFilter.filters.map((e=>Jd(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return ll()}}(e.compositeFilter.op))}(e):ll()}function Xd(e){return Nd[e]}function Yd(e){return Ud[e]}function Zd(e){return xd[e]}function ef(e){return{fieldPath:e.canonicalString()}}function tf(e){return xl.fromServerFormat(e.fieldPath)}function nf(e){return e instanceof Lu?function(e){if("=="===e.op){if(Eu(e.value))return{unaryFilter:{field:ef(e.field),op:"IS_NAN"}};if(Iu(e.value))return{unaryFilter:{field:ef(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Eu(e.value))return{unaryFilter:{field:ef(e.field),op:"IS_NOT_NAN"}};if(Iu(e.value))return{unaryFilter:{field:ef(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ef(e.field),op:Yd(e.op),value:e.value}}}(e):e instanceof Mu?function(e){const t=e.getFilters().map((e=>nf(e)));return 1===t.length?t[0]:{compositeFilter:{op:Zd(e.op),filters:t}}}(e):ll()}function sf(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function rf(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class of{constructor(e,t,n,s,r=Rl.min(),i=Rl.min(),o=tu.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new of(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new of(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new of(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new of(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class af{constructor(e){this.fe=e}}function cf(e){const t=Hd({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?uh(t,t.limit,"L"):t}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class lf{constructor(){this.rn=new uf}addToCollectionParentIndex(e,t){return this.rn.add(t),Vl.resolve()}getCollectionParents(e,t){return Vl.resolve(this.rn.getEntries(t))}addFieldIndex(e,t){return Vl.resolve()}deleteFieldIndex(e,t){return Vl.resolve()}getDocumentsMatchingTarget(e,t){return Vl.resolve(null)}getIndexType(e,t){return Vl.resolve(0)}getFieldIndexes(e,t){return Vl.resolve([])}getNextCollectionGroupToUpdate(e){return Vl.resolve(null)}getMinOffset(e,t){return Vl.resolve(Ll.min())}getMinOffsetFromCollectionGroup(e,t){return Vl.resolve(Ll.min())}updateCollectionGroup(e,t,n){return Vl.resolve()}updateIndexEntries(e,t){return Vl.resolve()}}class uf{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new Xl(Nl.comparator),r=!s.has(n);return this.index[t]=s.add(n),r}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new Xl(Nl.comparator)).toArray()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class hf{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new hf(0)}static Mn(){return new hf(-1)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class df{constructor(){this.changes=new Ah((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ru.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Vl.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ff{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class pf{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(n=s,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&Xh(n.mutation,e,Zl.empty(),Sl.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Rh()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=Rh()){const s=Eh();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,n).next((e=>{let t=bh();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=Eh();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Rh())))}populateOverlays(e,t,n){const s=[];return n.forEach((e=>{t.has(e)||s.push(e)})),this.documentOverlayCache.getOverlays(e,s).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,s){let r=wh();const i=Ch(),o=Ch();return t.forEach(((e,t)=>{const o=n.get(t.key);s.has(t.key)&&(void 0===o||o.mutation instanceof td)?r=r.insert(t.key,t):void 0!==o?(i.set(t.key,o.mutation.getFieldMask()),Xh(o.mutation,t,o.mutation.getFieldMask(),Sl.now())):i.set(t.key,Zl.empty())})),this.recalculateAndSaveOverlays(e,r).next((e=>(e.forEach(((e,t)=>i.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new ff(t,null!==(n=i.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=Ch();let s=new zl(((e,t)=>e-t)),r=Rh();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const r of e)r.keys().forEach((e=>{const i=t.get(e);if(null===i)return;let o=n.get(e)||Zl.empty();o=r.applyToLocalView(i,o),n.set(e,o);const a=(s.get(r.batchId)||Rh()).add(e);s=s.insert(r.batchId,a)}))})).next((()=>{const i=[],o=s.getReverseIterator();for(;o.hasNext();){const s=o.getNext(),a=s.key,c=s.value,l=Th();c.forEach((e=>{if(!r.has(e)){const s=Hh(t.get(e),n.get(e));null!==s&&l.set(e,s),r=r.add(e)}})),i.push(this.documentOverlayCache.saveOverlays(e,a,l))}return Vl.waitFor(i)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return _l.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):oh(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next((r=>{const i=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-r.size):Vl.resolve(Eh());let o=-1,a=r;return i.next((t=>Vl.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(t)?Vl.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,r))).next((()=>this.computeViews(e,a,t,Rh()))).next((e=>({batchId:o,changes:Ih(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new _l(t)).next((e=>{let t=bh();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const s=t.collectionGroup;let r=bh();return this.indexManager.getCollectionParents(e,s).next((i=>Vl.forEach(i,(i=>{const o=function(e,t){return new th(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,i.child(s));return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{r=r.insert(e,t)}))}))})).next((()=>r))))}getDocumentsMatchingCollectionQuery(e,t,n){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((r=>(s=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s)))).next((e=>{s.forEach(((t,n)=>{const s=n.getKey();null===e.get(s)&&(e=e.insert(s,Ru.newInvalidDocument(s)))}));let n=bh();return e.forEach(((e,r)=>{const i=s.get(e);void 0!==i&&Xh(i.mutation,r,Zl.empty(),Sl.now()),ph(t,r)&&(n=n.insert(e,r))})),n}))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class gf{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,t){return Vl.resolve(this.cs.get(t))}saveBundleMetadata(e,t){var n;return this.cs.set(t.id,{id:(n=t).id,version:n.version,createTime:Bd(n.createTime)}),Vl.resolve()}getNamedQuery(e,t){return Vl.resolve(this.hs.get(t))}saveNamedQuery(e,t){return this.hs.set(t.name,function(e){return{name:e.name,query:cf(e.bundledQuery),readTime:Bd(e.readTime)}}(t)),Vl.resolve()}}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class mf{constructor(){this.overlays=new zl(_l.comparator),this.ls=new Map}getOverlay(e,t){return Vl.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Eh();return Vl.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,s)=>{this.we(e,t,s)})),Vl.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.ls.get(n);return void 0!==s&&(s.forEach((e=>this.overlays=this.overlays.remove(e))),this.ls.delete(n)),Vl.resolve()}getOverlaysForCollection(e,t,n){const s=Eh(),r=t.length+1,i=new _l(t.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const e=o.getNext().value,i=e.getKey();if(!t.isPrefixOf(i.path))break;i.path.length===r&&e.largestBatchId>n&&s.set(e.getKey(),e)}return Vl.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let r=new zl(((e,t)=>e-t));const i=this.overlays.getIterator();for(;i.hasNext();){const e=i.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=r.get(e.largestBatchId);null===t&&(t=Eh(),r=r.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=Eh(),a=r.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((e,t)=>o.set(e,t))),!(o.size()>=s)););return Vl.resolve(o)}we(e,t,n){const s=this.overlays.get(n.key);if(null!==s){const e=this.ls.get(s.largestBatchId).delete(n.key);this.ls.set(s.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new ld(t,n));let r=this.ls.get(t);void 0===r&&(r=Rh(),this.ls.set(t,r)),this.ls.set(t,r.add(n.key))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Af{constructor(){this.fs=new Xl(vf.ds),this.ws=new Xl(vf._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,t){const n=new vf(e,t);this.fs=this.fs.add(n),this.ws=this.ws.add(n)}gs(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.ys(new vf(e,t))}ps(e,t){e.forEach((e=>this.removeReference(e,t)))}Is(e){const t=new _l(new Nl([])),n=new vf(t,e),s=new vf(t,e+1),r=[];return this.ws.forEachInRange([n,s],(e=>{this.ys(e),r.push(e.key)})),r}Ts(){this.fs.forEach((e=>this.ys(e)))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const t=new _l(new Nl([])),n=new vf(t,e),s=new vf(t,e+1);let r=Rh();return this.ws.forEachInRange([n,s],(e=>{r=r.add(e.key)})),r}containsKey(e){const t=new vf(e,0),n=this.fs.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class vf{constructor(e,t){this.key=e,this.As=t}static ds(e,t){return _l.comparator(e.key,t.key)||Cl(e.As,t.As)}static _s(e,t){return Cl(e.As,t.As)||_l.comparator(e.key,t.key)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class wf{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.vs=1,this.Rs=new Xl(vf.ds)}checkEmpty(e){return Vl.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,s){const r=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new ad(r,t,n,s);this.mutationQueue.push(i);for(const t of s)this.Rs=this.Rs.add(new vf(t.key,r)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return Vl.resolve(i)}lookupMutationBatch(e,t){return Vl.resolve(this.Ps(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.bs(n),r=s<0?0:s;return Vl.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return Vl.resolve(0===this.mutationQueue.length?-1:this.vs-1)}getAllMutationBatches(e){return Vl.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new vf(t,0),s=new vf(t,Number.POSITIVE_INFINITY),r=[];return this.Rs.forEachInRange([n,s],(e=>{const t=this.Ps(e.As);r.push(t)})),Vl.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Xl(Cl);return t.forEach((e=>{const t=new vf(e,0),s=new vf(e,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([t,s],(e=>{n=n.add(e.As)}))})),Vl.resolve(this.Vs(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let r=n;_l.isDocumentKey(r)||(r=r.child(""));const i=new vf(new _l(r),0);let o=new Xl(Cl);return this.Rs.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===s&&(o=o.add(e.As)),!0)}),i),Vl.resolve(this.Vs(o))}Vs(e){const t=[];return e.forEach((e=>{const n=this.Ps(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){ul(0===this.Ss(t.batchId,"removed")),this.mutationQueue.shift();let n=this.Rs;return Vl.forEach(t.mutations,(s=>{const r=new vf(s.key,t.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Rs=n}))}Cn(e){}containsKey(e,t){const n=new vf(t,0),s=this.Rs.firstAfterOrEqual(n);return Vl.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,Vl.resolve()}Ss(e,t){return this.bs(e)}bs(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Ps(e){const t=this.bs(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class yf{constructor(e){this.Ds=e,this.docs=new zl(_l.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),r=s?s.size:0,i=this.Ds(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:i}),this.size+=i-r,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Vl.resolve(n?n.document.mutableCopy():Ru.newInvalidDocument(t))}getEntries(e,t){let n=wh();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Ru.newInvalidDocument(e))})),Vl.resolve(n)}getDocumentsMatchingQuery(e,t,n,s){let r=wh();const i=t.path,o=new _l(i.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!i.isPrefixOf(e.path))break;e.path.length>i.length+1||Ml(Ol(o),n)<=0||(s.has(o.key)||ph(t,o))&&(r=r.insert(o.key,o.mutableCopy()))}return Vl.resolve(r)}getAllFromCollectionGroup(e,t,n,s){ll()}Cs(e,t){return Vl.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new bf(this)}getSize(e){return Vl.resolve(this.size)}}class bf extends df{constructor(e){super(),this.os=e}applyChanges(e){const t=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?t.push(this.os.addEntry(e,s)):this.os.removeEntry(n)})),Vl.waitFor(t)}getFromCache(e,t){return this.os.getEntry(e,t)}getAllFromCache(e,t){return this.os.getEntries(e,t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class If{constructor(e){this.persistence=e,this.xs=new Ah((e=>Yu(e)),Zu),this.lastRemoteSnapshotVersion=Rl.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Af,this.targetCount=0,this.Ms=hf.kn()}forEachTarget(e,t){return this.xs.forEach(((e,n)=>t(n))),Vl.resolve()}getLastRemoteSnapshotVersion(e){return Vl.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Vl.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),Vl.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Ns&&(this.Ns=t),Vl.resolve()}Fn(e){this.xs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ms=new hf(t),this.highestTargetId=t),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,t){return this.Fn(t),this.targetCount+=1,Vl.resolve()}updateTargetData(e,t){return this.Fn(t),Vl.resolve()}removeTargetData(e,t){return this.xs.delete(t.target),this.ks.Is(t.targetId),this.targetCount-=1,Vl.resolve()}removeTargets(e,t,n){let s=0;const r=[];return this.xs.forEach(((i,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.xs.delete(i),r.push(this.removeMatchingKeysForTargetId(e,o.targetId)),s++)})),Vl.waitFor(r).next((()=>s))}getTargetCount(e){return Vl.resolve(this.targetCount)}getTargetData(e,t){const n=this.xs.get(t)||null;return Vl.resolve(n)}addMatchingKeys(e,t,n){return this.ks.gs(t,n),Vl.resolve()}removeMatchingKeys(e,t,n){this.ks.ps(t,n);const s=this.persistence.referenceDelegate,r=[];return s&&t.forEach((t=>{r.push(s.markPotentiallyOrphaned(e,t))})),Vl.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.ks.Is(t),Vl.resolve()}getMatchingKeysForTargetId(e,t){const n=this.ks.Es(t);return Vl.resolve(n)}containsKey(e,t){return Vl.resolve(this.ks.containsKey(t))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ef{constructor(e,t){this.$s={},this.overlays={},this.Os=new jl(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new If(this),this.indexManager=new lf,this.remoteDocumentCache=function(e){return new yf(e)}((e=>this.referenceDelegate.Ls(e))),this.serializer=new af(t),this.qs=new gf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new mf,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.$s[e.toKey()];return n||(n=new wf(t,this.referenceDelegate),this.$s[e.toKey()]=n),n}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,t,n){il("MemoryPersistence","Starting transaction:",e);const s=new Tf(this.Os.next());return this.referenceDelegate.Us(),n(s).next((e=>this.referenceDelegate.Ks(s).next((()=>e)))).toPromise().then((e=>(s.raiseOnCommittedEvent(),e)))}Gs(e,t){return Vl.or(Object.values(this.$s).map((n=>()=>n.containsKey(e,t))))}}class Tf extends Bl{constructor(e){super(),this.currentSequenceNumber=e}}class Cf{constructor(e){this.persistence=e,this.Qs=new Af,this.js=null}static zs(e){return new Cf(e)}get Ws(){if(this.js)return this.js;throw ll()}addReference(e,t,n){return this.Qs.addReference(n,t),this.Ws.delete(n.toString()),Vl.resolve()}removeReference(e,t,n){return this.Qs.removeReference(n,t),this.Ws.add(n.toString()),Vl.resolve()}markPotentiallyOrphaned(e,t){return this.Ws.add(t.toString()),Vl.resolve()}removeTarget(e,t){this.Qs.Is(t.targetId).forEach((e=>this.Ws.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Ws.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Us(){this.js=new Set}Ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Vl.forEach(this.Ws,(n=>{const s=_l.fromPath(n);return this.Hs(e,s).next((e=>{e||t.removeEntry(s,Rl.min())}))})).next((()=>(this.js=null,t.apply(e))))}updateLimboDocument(e,t){return this.Hs(e,t).next((e=>{e?this.Ws.delete(t.toString()):this.Ws.add(t.toString())}))}Ls(e){return 0}Hs(e,t){return Vl.or([()=>Vl.resolve(this.Qs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gs(e,t)])}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class kf{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.Fi=n,this.Bi=s}static Li(e,t){let n=Rh(),s=Rh();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:s=s.add(e.doc.key)}return new kf(e,t.fromCache,n,s)}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Sf{constructor(){this.qi=!1}initialize(e,t){this.Ui=e,this.indexManager=t,this.qi=!0}getDocumentsMatchingQuery(e,t,n,s){return this.Ki(e,t).next((r=>r||this.Gi(e,t,s,n))).next((n=>n||this.Qi(e,t)))}Ki(e,t){if(sh(t))return Vl.resolve(null);let n=ch(t);return this.indexManager.getIndexType(e,n).next((s=>0===s?null:(null!==t.limit&&1===s&&(t=uh(t,null,"F"),n=ch(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((s=>{const r=Rh(...s);return this.Ui.getDocuments(e,r).next((s=>this.indexManager.getMinOffset(e,n).next((n=>{const i=this.ji(t,s);return this.zi(t,i,r,n.readTime)?this.Ki(e,uh(t,null,"F")):this.Wi(e,i,t,n)}))))})))))}Gi(e,t,n,s){return sh(t)||s.isEqual(Rl.min())?this.Qi(e,t):this.Ui.getDocuments(e,n).next((r=>{const i=this.ji(t,r);return this.zi(t,i,n,s)?this.Qi(e,t):(rl()<=Bs.DEBUG&&il("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),fh(t)),this.Wi(e,i,t,function(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,r=Rl.fromTimestamp(1e9===s?new Sl(n+1,0):new Sl(n,s));return new Ll(r,_l.empty(),t)}(s,-1)))}))}ji(e,t){let n=new Xl(gh(e));return t.forEach(((t,s)=>{ph(e,s)&&(n=n.add(s))})),n}zi(e,t,n,s){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const r="F"===e.limitType?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Qi(e,t){return rl()<=Bs.DEBUG&&il("QueryEngine","Using full collection scan to execute query:",fh(t)),this.Ui.getDocumentsMatchingQuery(e,t,Ll.min())}Wi(e,t,n,s){return this.Ui.getDocumentsMatchingQuery(e,n,s).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Rf{constructor(e,t,n,s){this.persistence=e,this.Hi=t,this.serializer=s,this.Ji=new zl(Cl),this.Yi=new Ah((e=>Yu(e)),Zu),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(n)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new pf(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ji)))}}async function Df(e,t){const n=hl(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let s;return n.mutationQueue.getAllMutationBatches(e).next((r=>(s=r,n.tr(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const r=[],i=[];let o=Rh();for(const e of s){r.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({er:e,removedBatchIds:r,addedBatchIds:i})))}))}))}function Nf(e){const t=hl(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Bs.getLastRemoteSnapshotVersion(e)))}function Uf(e,t){const n=hl(e),s=t.snapshotVersion;let r=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const i=n.Zi.newChangeBuffer({trackRemovals:!0});r=n.Ji;const o=[];t.targetChanges.forEach(((i,a)=>{const c=r.get(a);if(!c)return;o.push(n.Bs.removeMatchingKeys(e,i.removedDocuments,a).next((()=>n.Bs.addMatchingKeys(e,i.addedDocuments,a))));let l=c.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?l=l.withResumeToken(tu.EMPTY_BYTE_STRING,Rl.min()).withLastLimboFreeSnapshotVersion(Rl.min()):i.resumeToken.approximateByteSize()>0&&(l=l.withResumeToken(i.resumeToken,s)),r=r.insert(a,l),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,l,i)&&o.push(n.Bs.updateTargetData(e,l))}));let a=wh(),c=Rh();if(t.documentUpdates.forEach((s=>{t.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,s))})),o.push(function(e,t,n){let s=Rh(),r=Rh();return n.forEach((e=>s=s.add(e))),t.getEntries(e,s).next((e=>{let s=wh();return n.forEach(((n,i)=>{const o=e.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(r=r.add(n)),i.isNoDocument()&&i.version.isEqual(Rl.min())?(t.removeEntry(n,i.readTime),s=s.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(i),s=s.insert(n,i)):il("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)})),{nr:s,sr:r}}))}(e,i,t.documentUpdates).next((e=>{a=e.nr,c=e.sr}))),!s.isEqual(Rl.min())){const t=n.Bs.getLastRemoteSnapshotVersion(e).next((t=>n.Bs.setTargetsMetadata(e,e.currentSequenceNumber,s)));o.push(t)}return Vl.waitFor(o).next((()=>i.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.Ji=r,e)))}function xf(e,t){const n=hl(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}async function _f(e,t,n){const s=hl(e),r=s.Ji.get(t),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,(e=>s.persistence.referenceDelegate.removeTarget(e,r)))}catch(e){if(!$l(e))throw e;il("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}s.Ji=s.Ji.remove(t),s.Yi.delete(r.target)}function Of(e,t,n){const s=hl(e);let r=Rl.min(),i=Rh();return s.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const s=hl(e),r=s.Yi.get(n);return void 0!==r?Vl.resolve(s.Ji.get(r)):s.Bs.getTargetData(t,n)}(s,e,ch(t)).next((t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,s.Bs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{i=e}))})).next((()=>s.Hi.getDocumentsMatchingQuery(e,t,n?r:Rl.min(),n?i:Rh()))).next((e=>(function(e,t,n){let s=e.Xi.get(t)||Rl.min();n.forEach(((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)})),e.Xi.set(t,s)}(s,function(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}(t),e),{documents:e,ir:i})))))}class Lf{constructor(){this.activeTargetIds=Dh}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Mf{constructor(){this.Hr=new Lf,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,t,n){this.Jr[e]=t}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Lf,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Pf{Yr(e){}shutdown(){}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Bf{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){il("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){il("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
     * @license
     * Copyright 2023 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */let Ff=null;function Vf(){return null===Ff?Ff=268435456+Math.round(2147483648*Math.random()):Ff++,"0x"+Ff.toString(16)
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}const $f={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class jf{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Gf="WebChannelConnection";class Kf extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.mo=t+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,t,n,s,r){const i=Vf(),o=this.To(e,t);il("RestConnection",`Sending RPC '${e}' ${i}:`,o,n);const a={};return this.Eo(a,s,r),this.Ao(e,o,a,n).then((t=>(il("RestConnection",`Received RPC '${e}' ${i}: `,t),t)),(t=>{throw al("RestConnection",`RPC '${e}' ${i} failed with error: `,t,"url: ",o,"request:",n),t}))}vo(e,t,n,s,r,i){return this.Io(e,t,n,s,r)}Eo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+nl,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}To(e,t){const n=$f[e];return`${this.mo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,t,n,s){const r=Vf();return new Promise(((i,o)=>{const a=new Xc;a.setWithCredentials(!0),a.listenOnce(Qc.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Kc.NO_ERROR:const t=a.getResponseJson();il(Gf,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(t)),i(t);break;case Kc.TIMEOUT:il(Gf,`RPC '${e}' ${r} timed out`),o(new fl(dl.DEADLINE_EXCEEDED,"Request time out"));break;case Kc.HTTP_ERROR:const n=a.getStatus();if(il(Gf,`RPC '${e}' ${r} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(dl).indexOf(t)>=0?t:dl.UNKNOWN}(t.status);o(new fl(e,t.message))}else o(new fl(dl.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new fl(dl.UNAVAILABLE,"Connection failed."));break;default:ll()}}finally{il(Gf,`RPC '${e}' ${r} completed.`)}}));const c=JSON.stringify(s);il(Gf,`RPC '${e}' ${r} sending request:`,s),a.send(t,"POST",c,n,15)}))}Ro(e,t,n){const s=Vf(),r=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=new yc,o=wo(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.xmlHttpFactory=new Hc({})),this.Eo(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const l=r.join("");il(Gf,`Creating RPC '${e}' stream ${s}: ${l}`,a);const u=i.createWebChannel(l,a);let h=!1,d=!1;const f=new jf({ro:t=>{d?il(Gf,`Not sending because RPC '${e}' stream ${s} is closed:`,t):(h||(il(Gf,`Opening RPC '${e}' stream ${s} transport.`),u.open(),h=!0),il(Gf,`RPC '${e}' stream ${s} sending:`,t),u.send(t))},oo:()=>u.close()}),p=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return p(u,Jc.EventType.OPEN,(()=>{d||il(Gf,`RPC '${e}' stream ${s} transport opened.`)})),p(u,Jc.EventType.CLOSE,(()=>{d||(d=!0,il(Gf,`RPC '${e}' stream ${s} transport closed`),f.wo())})),p(u,Jc.EventType.ERROR,(t=>{d||(d=!0,al(Gf,`RPC '${e}' stream ${s} transport errored:`,t),f.wo(new fl(dl.UNAVAILABLE,"The operation could not be completed")))})),p(u,Jc.EventType.MESSAGE,(t=>{var n;if(!d){const r=t.data[0];ul(!!r);const i=r,o=i.error||(null===(n=i[0])||void 0===n?void 0:n.error);if(o){il(Gf,`RPC '${e}' stream ${s} received error:`,o);const t=o.status;let n=function(e){const t=hd[e];if(void 0!==t)return fd(t)}(t),r=o.message;void 0===n&&(n=dl.INTERNAL,r="Unknown error status: "+t+" with message "+o.message),d=!0,f.wo(new fl(n,r)),u.close()}else il(Gf,`RPC '${e}' stream ${s} received:`,r),f._o(r)}})),p(o,qc.STAT_EVENT,(t=>{t.stat===Wc?il(Gf,`RPC '${e}' stream ${s} detected buffering proxy`):t.stat===zc&&il(Gf,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{f.fo()}),0),f}}function Qf(){return"undefined"!=typeof document?document:null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function qf(e){return new _d(e,!0)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Wf{constructor(e,t,n=1e3,s=1.5,r=6e4){this.ii=e,this.timerId=t,this.Po=n,this.bo=s,this.Vo=r,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const t=Math.floor(this.So+this.ko()),n=Math.max(0,Date.now()-this.Co),s=Math.max(0,t-n);s>0&&il("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.So} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,s,(()=>(this.Co=Date.now(),e()))),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){null!==this.Do&&(this.Do.skipDelay(),this.Do=null)}cancel(){null!==this.Do&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class zf{constructor(e,t,n,s,r,i,o,a){this.ii=e,this.$o=n,this.Oo=s,this.connection=r,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Wf(e,t)}Uo(){return 1===this.state||5===this.state||this.Ko()}Ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&null===this.Bo&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,(()=>this.zo())))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,t){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,4!==e?this.qo.reset():t&&t.code===dl.RESOURCE_EXHAUSTED?(ol(t.toString()),ol("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):t&&t.code===dl.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(t)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),t=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Fo===t&&this.Zo(e,n)}),(t=>{e((()=>{const e=new fl(dl.UNKNOWN,"Fetching auth token failed: "+t.message);return this.tu(e)}))}))}Zo(e,t){const n=this.Xo(this.Fo);this.stream=this.eu(e,t),this.stream.uo((()=>{n((()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,(()=>(this.Ko()&&(this.state=3),Promise.resolve()))),this.listener.uo())))})),this.stream.ao((e=>{n((()=>this.tu(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Go(){this.state=5,this.qo.No((async()=>{this.state=0,this.start()}))}tu(e){return il("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget((()=>this.Fo===e?t():(il("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Hf extends zf{constructor(e,t,n,s,r,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,i),this.serializer=r}eu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.qo.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:ll()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],i=function(e,t){return e.useProto3Json?(ul(void 0===t||"string"==typeof t),tu.fromBase64String(t||"")):(ul(void 0===t||t instanceof Uint8Array),tu.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?dl.UNKNOWN:fd(e.code);return new fl(t,e.message||"")}(o);n=new Cd(s,r,i,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const r=jd(e,s.document.name),i=Bd(s.document.updateTime),o=s.document.createTime?Bd(s.document.createTime):Rl.min(),a=new ku({mapValue:{fields:s.document.fields}}),c=Ru.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new Ed(l,u,c.key,c)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const r=jd(e,s.document),i=s.readTime?Bd(s.readTime):Rl.min(),o=Ru.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Ed([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const r=jd(e,s.document),i=s.removedTargetIds||[];n=new Ed([],i,r,null)}else{if(!("filter"in t))return ll();{t.filter;const e=t.filter;e.targetId;const{count:s=0,unchangedNames:r}=e,i=new ud(s,r),o=e.targetId;n=new Td(o,i)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return Rl.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Rl.min():t.readTime?Bd(t.readTime):Rl.min()}(e);return this.listener.nu(t,n)}su(e){const t={};t.database=Kd(this.serializer),t.addTarget=function(e,t){let n;const s=t.target;if(n=eh(s)?{documents:Wd(e,s)}:{query:zd(e,s)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=Md(e,t.resumeToken);const s=Od(e,t.expectedCount);null!==s&&(n.expectedCount=s)}else if(t.snapshotVersion.compareTo(Rl.min())>0){n.readTime=Ld(e,t.snapshotVersion.toTimestamp());const s=Od(e,t.expectedCount);null!==s&&(n.expectedCount=s)}return n}(this.serializer,e);const n=function(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ll()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.Wo(t)}iu(e){const t={};t.database=Kd(this.serializer),t.removeTarget=e,this.Wo(t)}}class Jf extends zf{constructor(e,t,n,s,r,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,i),this.serializer=r,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){if(ul(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const t=function(e,t){return e&&e.length>0?(ul(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Bd(e.updateTime):Bd(t);return n.isEqual(Rl.min())&&(n=Bd(t)),new Qh(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=Bd(e.commitTime);return this.listener.cu(n,t)}return ul(!e.writeResults||0===e.writeResults.length),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Kd(this.serializer),this.Wo(e)}uu(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>function(e,t){let n;if(t instanceof ed)n={update:qd(e,t.key,t.value)};else if(t instanceof id)n={delete:$d(e,t.key)};else if(t instanceof td)n={update:qd(e,t.key,t.data),updateMask:sf(t.fieldMask)};else{if(!(t instanceof od))return ll();n={verify:$d(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Ph)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Bh)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Vh)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof jh)return{fieldPath:t.field.canonicalString(),increment:n.gt};throw ll()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Pd(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:ll()}(e,t.precondition)),n}(this.serializer,e)))};this.Wo(t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Xf extends class{}{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.lu=!1}fu(){if(this.lu)throw new fl(dl.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,t,n){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,r])=>this.connection.Io(e,t,n,s,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===dl.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new fl(dl.UNKNOWN,e.toString())}))}vo(e,t,n,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.vo(e,t,n,r,i,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===dl.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new fl(dl.UNKNOWN,e.toString())}))}terminate(){this.lu=!0}}class Yf{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){0===this.wu&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve()))))}Iu(e){"Online"===this.state?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,"Online"===e&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(ol(t),this.mu=!1):il("OnlineStateTracker",t)}Tu(){null!==this._u&&(this._u.cancel(),this._u=null)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Zf{constructor(e,t,n,s,r){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=r,this.Pu.Yr((e=>{n.enqueueAndForget((async()=>{cp(this)&&(il("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=hl(e);t.vu.add(4),await tp(t),t.bu.set("Unknown"),t.vu.delete(4),await ep(t)}(this))}))})),this.bu=new Yf(n,s)}}async function ep(e){if(cp(e))for(const t of e.Ru)await t(!0)}async function tp(e){for(const t of e.Ru)await t(!1)}function np(e,t){const n=hl(e);n.Au.has(t.targetId)||(n.Au.set(t.targetId,t),ap(n)?op(n):Cp(n).Ko()&&rp(n,t))}function sp(e,t){const n=hl(e),s=Cp(n);n.Au.delete(t),s.Ko()&&ip(n,t),0===n.Au.size&&(s.Ko()?s.jo():cp(n)&&n.bu.set("Unknown"))}function rp(e,t){if(e.Vu.qt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Rl.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Cp(e).su(t)}function ip(e,t){e.Vu.qt(t),Cp(e).iu(t)}function op(e){e.Vu=new Sd({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),le:t=>e.Au.get(t)||null,ue:()=>e.datastore.serializer.databaseId}),Cp(e).start(),e.bu.gu()}function ap(e){return cp(e)&&!Cp(e).Uo()&&e.Au.size>0}function cp(e){return 0===hl(e).vu.size}function lp(e){e.Vu=void 0}async function up(e){e.Au.forEach(((t,n)=>{rp(e,t)}))}async function hp(e,t){lp(e),ap(e)?(e.bu.Iu(t),op(e)):e.bu.set("Unknown")}async function dp(e,t,n){if(e.bu.set("Online"),t instanceof Cd&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const s of t.targetIds)e.Au.has(s)&&(await e.remoteSyncer.rejectListen(s,n),e.Au.delete(s),e.Vu.removeTarget(s))}(e,t)}catch(n){il("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await fp(e,n)}else if(t instanceof Ed?e.Vu.Ht(t):t instanceof Td?e.Vu.ne(t):e.Vu.Xt(t),!n.isEqual(Rl.min()))try{const t=await Nf(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Vu.ce(t);return n.targetChanges.forEach(((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const r=e.Au.get(s);r&&e.Au.set(s,r.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const s=e.Au.get(t);if(!s)return;e.Au.set(t,s.withResumeToken(tu.EMPTY_BYTE_STRING,s.snapshotVersion)),ip(e,t);const r=new of(s.target,t,n,s.sequenceNumber);rp(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){il("RemoteStore","Failed to raise snapshot:",t),await fp(e,t)}}async function fp(e,t,n){if(!$l(t))throw t;e.vu.add(1),await tp(e),e.bu.set("Offline"),n||(n=()=>Nf(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{il("RemoteStore","Retrying IndexedDB access"),await n(),e.vu.delete(1),await ep(e)}))}function pp(e,t){return t().catch((n=>fp(e,n,t)))}async function gp(e){const t=hl(e),n=kp(t);let s=t.Eu.length>0?t.Eu[t.Eu.length-1].batchId:-1;for(;mp(t);)try{const e=await xf(t.localStore,s);if(null===e){0===t.Eu.length&&n.jo();break}s=e.batchId,Ap(t,e)}catch(e){await fp(t,e)}vp(t)&&wp(t)}function mp(e){return cp(e)&&e.Eu.length<10}function Ap(e,t){e.Eu.push(t);const n=kp(e);n.Ko()&&n.ou&&n.uu(t.mutations)}function vp(e){return cp(e)&&!kp(e).Uo()&&e.Eu.length>0}function wp(e){kp(e).start()}async function yp(e){kp(e).hu()}async function bp(e){const t=kp(e);for(const n of e.Eu)t.uu(n.mutations)}async function Ip(e,t,n){const s=e.Eu.shift(),r=cd.from(s,t,n);await pp(e,(()=>e.remoteSyncer.applySuccessfulWrite(r))),await gp(e)}async function Ep(e,t){t&&kp(e).ou&&await async function(e,t){if(function(e){switch(e){default:return ll();case dl.CANCELLED:case dl.UNKNOWN:case dl.DEADLINE_EXCEEDED:case dl.RESOURCE_EXHAUSTED:case dl.INTERNAL:case dl.UNAVAILABLE:case dl.UNAUTHENTICATED:return!1;case dl.INVALID_ARGUMENT:case dl.NOT_FOUND:case dl.ALREADY_EXISTS:case dl.PERMISSION_DENIED:case dl.FAILED_PRECONDITION:case dl.ABORTED:case dl.OUT_OF_RANGE:case dl.UNIMPLEMENTED:case dl.DATA_LOSS:return!0}}(n=t.code)&&n!==dl.ABORTED){const n=e.Eu.shift();kp(e).Qo(),await pp(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await gp(e)}var n}(e,t),vp(e)&&wp(e)}async function Tp(e,t){const n=hl(e);n.asyncQueue.verifyOperationInProgress(),il("RemoteStore","RemoteStore received new credentials");const s=cp(n);n.vu.add(3),await tp(n),s&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.vu.delete(3),await ep(n)}function Cp(e){return e.Su||(e.Su=function(e,t,n){const s=hl(e);return s.fu(),new Hf(t,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,n)
/**
     * @license
     * Copyright 2018 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}(e.datastore,e.asyncQueue,{uo:up.bind(null,e),ao:hp.bind(null,e),nu:dp.bind(null,e)}),e.Ru.push((async t=>{t?(e.Su.Qo(),ap(e)?op(e):e.bu.set("Unknown")):(await e.Su.stop(),lp(e))}))),e.Su}function kp(e){return e.Du||(e.Du=function(e,t,n){const s=hl(e);return s.fu(),new Jf(t,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,n)}(e.datastore,e.asyncQueue,{uo:yp.bind(null,e),ao:Ep.bind(null,e),au:bp.bind(null,e),cu:Ip.bind(null,e)}),e.Ru.push((async t=>{t?(e.Du.Qo(),await gp(e)):(await e.Du.stop(),e.Eu.length>0&&(il("RemoteStore",`Stopping write stream with ${e.Eu.length} pending writes`),e.Eu=[]))}))),e.Du
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}class Sp{constructor(e,t,n,s,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=r,this.deferred=new pl,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,s,r){const i=Date.now()+n,o=new Sp(e,t,i,s,r);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new fl(dl.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Rp(e,t){if(ol("AsyncQueue",`${t}: ${e}`),$l(e))return new fl(dl.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Dp{constructor(e){this.comparator=e?(t,n)=>e(t,n)||_l.comparator(t.key,n.key):(e,t)=>_l.comparator(e.key,t.key),this.keyedMap=bh(),this.sortedSet=new zl(this.comparator)}static emptySet(e){return new Dp(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Dp))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,s=n.getNext().key;if(!e.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Dp;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Np{constructor(){this.Cu=new zl(_l.comparator)}track(e){const t=e.doc.key,n=this.Cu.get(t);n?0!==e.type&&3===n.type?this.Cu=this.Cu.insert(t,e):3===e.type&&1!==n.type?this.Cu=this.Cu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Cu=this.Cu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Cu=this.Cu.remove(t):1===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):ll():this.Cu=this.Cu.insert(t,e)}xu(){const e=[];return this.Cu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Up{constructor(e,t,n,s,r,i,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=r,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,s,r){const i=[];return t.forEach((e=>{i.push({type:0,doc:e})})),new Up(e,t,Dp.emptySet(t),i,n,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&hh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class xp{constructor(){this.Nu=void 0,this.listeners=[]}}class _p{constructor(){this.queries=new Ah((e=>dh(e)),hh),this.onlineState="Unknown",this.ku=new Set}}async function Op(e,t){const n=hl(e),s=t.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new xp),r)try{i.Nu=await n.onListen(s)}catch(e){const n=Rp(e,`Initialization of query '${fh(t.query)}' failed`);return void t.onError(n)}n.queries.set(s,i),i.listeners.push(t),t.Mu(n.onlineState),i.Nu&&t.$u(i.Nu)&&Bp(n)}async function Lp(e,t){const n=hl(e),s=t.query;let r=!1;const i=n.queries.get(s);if(i){const e=i.listeners.indexOf(t);e>=0&&(i.listeners.splice(e,1),r=0===i.listeners.length)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function Mp(e,t){const n=hl(e);let s=!1;for(const e of t){const t=e.query,r=n.queries.get(t);if(r){for(const t of r.listeners)t.$u(e)&&(s=!0);r.Nu=e}}s&&Bp(n)}function Pp(e,t,n){const s=hl(e),r=s.queries.get(t);if(r)for(const e of r.listeners)e.onError(n);s.queries.delete(t)}function Bp(e){e.ku.forEach((e=>{e.next()}))}class Fp{constructor(e,t,n){this.query=e,this.Ou=t,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=n||{}}$u(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Up(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),t=!0):this.qu(e,this.onlineState)&&(this.Uu(e),t=!0),this.Bu=e,t}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let t=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),t=!0),t}qu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Ku||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Lu(e){if(e.docChanges.length>0)return!0;const t=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Uu(e){e=Up.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Vp{constructor(e){this.key=e}}class $p{constructor(e){this.key=e}}class jp{constructor(e,t){this.query=e,this.Yu=t,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=Rh(),this.mutatedKeys=Rh(),this.tc=gh(e),this.ec=new Dp(this.tc)}get nc(){return this.Yu}sc(e,t){const n=t?t.ic:new Np,s=t?t.ec:this.ec;let r=t?t.mutatedKeys:this.mutatedKeys,i=s,o=!1;const a="F"===this.query.limitType&&s.size===this.query.limit?s.last():null,c="L"===this.query.limitType&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((e,t)=>{const l=s.get(e),u=ph(this.query,t)?t:null,h=!!l&&this.mutatedKeys.has(l.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;l&&u?l.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.rc(l,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.tc(u,a)>0||c&&this.tc(u,c)<0)&&(o=!0)):!l&&u?(n.track({type:0,doc:u}),f=!0):l&&!u&&(n.track({type:1,doc:l}),f=!0,(a||c)&&(o=!0)),f&&(u?(i=i.add(u),r=d?r.add(e):r.delete(e)):(i=i.delete(e),r=r.delete(e)))})),null!==this.query.limit)for(;i.size>this.query.limit;){const e="F"===this.query.limitType?i.last():i.first();i=i.delete(e.key),r=r.delete(e.key),n.track({type:1,doc:e})}return{ec:i,ic:n,zi:o,mutatedKeys:r}}rc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const s=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const r=e.ic.xu();r.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ll()}};return n(e)-n(t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e.type,t.type)||this.tc(e.doc,t.doc))),this.oc(n);const i=t?this.uc():[],o=0===this.Zu.size&&this.current?1:0,a=o!==this.Xu;return this.Xu=o,0!==r.length||a?{snapshot:new Up(this.query,e.ec,s,r,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),cc:i}:{cc:i}}Mu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Np,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach((e=>this.Yu=this.Yu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Yu=this.Yu.delete(e))),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=Rh(),this.ec.forEach((e=>{this.ac(e.key)&&(this.Zu=this.Zu.add(e.key))}));const t=[];return e.forEach((e=>{this.Zu.has(e)||t.push(new $p(e))})),this.Zu.forEach((n=>{e.has(n)||t.push(new Vp(n))})),t}hc(e){this.Yu=e.ir,this.Zu=Rh();const t=this.sc(e.documents);return this.applyChanges(t,!0)}lc(){return Up.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,0===this.Xu,this.hasCachedResults)}}class Gp{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Kp{constructor(e){this.key=e,this.fc=!1}}class Qp{constructor(e,t,n,s,r,i){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=i,this.dc={},this.wc=new Ah((e=>dh(e)),hh),this._c=new Map,this.mc=new Set,this.gc=new zl(_l.comparator),this.yc=new Map,this.Ic=new Af,this.Tc={},this.Ec=new Map,this.Ac=hf.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return!0===this.vc}}async function qp(e,t){const n=function(e){const t=hl(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Hp.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=lg.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Xp.bind(null,t),t.dc.nu=Mp.bind(null,t.eventManager),t.dc.Pc=Pp.bind(null,t.eventManager),t}(e);let s,r;const i=n.wc.get(t);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.lc();else{const e=await function(e,t){const n=hl(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let s;return n.Bs.getTargetData(e,t).next((r=>r?(s=r,Vl.resolve(s)):n.Bs.allocateTargetId(e).next((r=>(s=new of(t,r,"TargetPurposeListen",e.currentSequenceNumber),n.Bs.addTargetData(e,s).next((()=>s)))))))})).then((e=>{const s=n.Ji.get(e.targetId);return(null===s||e.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(e.targetId,e),n.Yi.set(t,e.targetId)),e}))}(n.localStore,ch(t)),i=n.sharedClientState.addLocalQueryTarget(e.targetId);s=e.targetId,r=await async function(e,t,n,s,r){e.Rc=(t,n,s)=>async function(e,t,n,s){let r=t.view.sc(n);r.zi&&(r=await Of(e.localStore,t.query,!1).then((({documents:e})=>t.view.sc(e,r))));const i=s&&s.targetChanges.get(t.targetId),o=t.view.applyChanges(r,e.isPrimaryClient,i);return rg(e,t.targetId,o.cc),o.snapshot}(e,t,n,s);const i=await Of(e.localStore,t,!0),o=new jp(t,i.ir),a=o.sc(i.documents),c=Id.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==e.onlineState,r),l=o.applyChanges(a,e.isPrimaryClient,c);rg(e,n,l.cc);const u=new Gp(t,n,o);return e.wc.set(t,u),e._c.has(n)?e._c.get(n).push(t):e._c.set(n,[t]),l.snapshot}(n,t,s,"current"===i,e.resumeToken),n.isPrimaryClient&&np(n.remoteStore,e)}return r}async function Wp(e,t){const n=hl(e),s=n.wc.get(t),r=n._c.get(s.targetId);if(r.length>1)return n._c.set(s.targetId,r.filter((e=>!hh(e,t)))),void n.wc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await _f(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),sp(n.remoteStore,s.targetId),ng(n,s.targetId)})).catch(Fl)):(ng(n,s.targetId),await _f(n.localStore,s.targetId,!0))}async function zp(e,t,n){const s=function(e){const t=hl(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Yp.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Zp.bind(null,t),t}(e);try{const e=await function(e,t){const n=hl(e),s=Sl.now(),r=t.reduce(((e,t)=>e.add(t.key)),Rh());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=wh(),c=Rh();return n.Zi.getEntries(e,r).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((r=>{i=r;const o=[];for(const e of t){const t=Yh(e,i.get(e.key).overlayedDocument);null!=t&&o.push(new td(e.key,t,Su(t.value.mapValue),qh.exists(!0)))}return n.mutationQueue.addMutationBatch(e,s,o,t)})).next((t=>{o=t;const s=t.applyToLocalDocumentSet(i,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,s)}))})).then((()=>({batchId:o.batchId,changes:Ih(i)})))}(s.localStore,t);s.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let s=e.Tc[e.currentUser.toKey()];s||(s=new zl(Cl)),s=s.insert(t,n),e.Tc[e.currentUser.toKey()]=s}(s,e.batchId,n),await ag(s,e.changes),await gp(s.remoteStore)}catch(e){const t=Rp(e,"Failed to persist write");n.reject(t)}}async function Hp(e,t){const n=hl(e);try{const e=await Uf(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const s=n.yc.get(t);s&&(ul(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?s.fc=!0:e.modifiedDocuments.size>0?ul(s.fc):e.removedDocuments.size>0&&(ul(s.fc),s.fc=!1))})),await ag(n,e,t)}catch(e){await Fl(e)}}function Jp(e,t,n){const s=hl(e);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const e=[];s.wc.forEach(((n,s)=>{const r=s.view.Mu(t);r.snapshot&&e.push(r.snapshot)})),function(e,t){const n=hl(e);n.onlineState=t;let s=!1;n.queries.forEach(((e,n)=>{for(const e of n.listeners)e.Mu(t)&&(s=!0)})),s&&Bp(n)}(s.eventManager,t),e.length&&s.dc.nu(e),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function Xp(e,t,n){const s=hl(e);s.sharedClientState.updateQueryState(t,"rejected",n);const r=s.yc.get(t),i=r&&r.key;if(i){let e=new zl(_l.comparator);e=e.insert(i,Ru.newNoDocument(i,Rl.min()));const n=Rh().add(i),r=new bd(Rl.min(),new Map,new zl(Cl),e,n);await Hp(s,r),s.gc=s.gc.remove(i),s.yc.delete(t),og(s)}else await _f(s.localStore,t,!1).then((()=>ng(s,t,n))).catch(Fl)}async function Yp(e,t){const n=hl(e),s=t.batch.batchId;try{const e=await function(e,t){const n=hl(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const s=t.batch.keys(),r=n.Zi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,s){const r=n.batch,i=r.keys();let o=Vl.resolve();return i.forEach((e=>{o=o.next((()=>s.getEntry(t,e))).next((t=>{const i=n.docVersions.get(e);ul(null!==i),t.version.compareTo(i)<0&&(r.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),s.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,r)))}(n,e,t,r).next((()=>r.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,s,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Rh();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,s)))}))}(n.localStore,t);tg(n,s,null),eg(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await ag(n,e)}catch(e){await Fl(e)}}async function Zp(e,t,n){const s=hl(e);try{const e=await function(e,t){const n=hl(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let s;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(ul(null!==t),s=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,s,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,s))).next((()=>n.localDocuments.getDocuments(e,s)))}))}(s.localStore,t);tg(s,t,n),eg(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await ag(s,e)}catch(n){await Fl(n)}}function eg(e,t){(e.Ec.get(t)||[]).forEach((e=>{e.resolve()})),e.Ec.delete(t)}function tg(e,t,n){const s=hl(e);let r=s.Tc[s.currentUser.toKey()];if(r){const e=r.get(t);e&&(n?e.reject(n):e.resolve(),r=r.remove(t)),s.Tc[s.currentUser.toKey()]=r}}function ng(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e._c.get(t))e.wc.delete(s),n&&e.dc.Pc(s,n);e._c.delete(t),e.isPrimaryClient&&e.Ic.Is(t).forEach((t=>{e.Ic.containsKey(t)||sg(e,t)}))}function sg(e,t){e.mc.delete(t.path.canonicalString());const n=e.gc.get(t);null!==n&&(sp(e.remoteStore,n),e.gc=e.gc.remove(t),e.yc.delete(n),og(e))}function rg(e,t,n){for(const s of n)s instanceof Vp?(e.Ic.addReference(s.key,t),ig(e,s)):s instanceof $p?(il("SyncEngine","Document no longer in limbo: "+s.key),e.Ic.removeReference(s.key,t),e.Ic.containsKey(s.key)||sg(e,s.key)):ll()}function ig(e,t){const n=t.key,s=n.path.canonicalString();e.gc.get(n)||e.mc.has(s)||(il("SyncEngine","New document in limbo: "+n),e.mc.add(s),og(e))}function og(e){for(;e.mc.size>0&&e.gc.size<e.maxConcurrentLimboResolutions;){const t=e.mc.values().next().value;e.mc.delete(t);const n=new _l(Nl.fromString(t)),s=e.Ac.next();e.yc.set(s,new Kp(n)),e.gc=e.gc.insert(n,s),np(e.remoteStore,new of(ch(nh(n.path)),s,"TargetPurposeLimboResolution",jl.ct))}}async function ag(e,t,n){const s=hl(e),r=[],i=[],o=[];s.wc.isEmpty()||(s.wc.forEach(((e,a)=>{o.push(s.Rc(a,t,n).then((e=>{if((e||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){r.push(e);const t=kf.Li(a.targetId,e);i.push(t)}})))})),await Promise.all(o),s.dc.nu(r),await async function(e,t){const n=hl(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Vl.forEach(t,(t=>Vl.forEach(t.Fi,(s=>n.persistence.referenceDelegate.addReference(e,t.targetId,s))).next((()=>Vl.forEach(t.Bi,(s=>n.persistence.referenceDelegate.removeReference(e,t.targetId,s)))))))))}catch(e){if(!$l(e))throw e;il("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.Ji.get(t),s=e.snapshotVersion,r=e.withLastLimboFreeSnapshotVersion(s);n.Ji=n.Ji.insert(t,r)}}}(s.localStore,i))}async function cg(e,t){const n=hl(e);if(!n.currentUser.isEqual(t)){il("SyncEngine","User change. New user:",t.toKey());const e=await Df(n.localStore,t);n.currentUser=t,function(e,t){e.Ec.forEach((e=>{e.forEach((e=>{e.reject(new fl(dl.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),e.Ec.clear()}(n),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await ag(n,e.er)}}function lg(e,t){const n=hl(e),s=n.yc.get(t);if(s&&s.fc)return Rh().add(s.key);{let e=Rh();const s=n._c.get(t);if(!s)return e;for(const t of s){const s=n.wc.get(t);e=e.unionWith(s.view.nc)}return e}}class ug{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=qf(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return function(e,t,n,s){return new Rf(e,t,n,s)}(this.persistence,new Sf,e.initialUser,this.serializer)}createPersistence(e){return new Ef(Cf.zs,this.serializer)}createSharedClientState(e){return new Mf}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class hg{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Jp(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=cg.bind(null,this.syncEngine),await async function(e,t){const n=hl(e);t?(n.vu.delete(2),await ep(n)):t||(n.vu.add(2),await tp(n),n.bu.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new _p}createDatastore(e){const t=qf(e.databaseInfo.databaseId),n=(s=e.databaseInfo,new Kf(s));var s;return function(e,t,n,s){return new Xf(e,t,n,s)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,s=e.asyncQueue,r=e=>Jp(this.syncEngine,e,0),i=Bf.D()?new Bf:new Pf,new Zf(t,n,s,r,i);var t,n,s,r,i}createSyncEngine(e,t){return function(e,t,n,s,r,i,o){const a=new Qp(e,t,n,s,r,i);return o&&(a.vc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=hl(e);il("RemoteStore","RemoteStore shutting down."),t.vu.add(5),await tp(t),t.Pu.shutdown(),t.bu.set("Unknown")}(this.remoteStore)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class dg{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):ol("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class fg{constructor(e,t,n,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=s,this.user=tl.UNAUTHENTICATED,this.clientId=Tl.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{il("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(il("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new fl(dl.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new pl;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Rp(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function pg(e,t){e.asyncQueue.verifyOperationInProgress(),il("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener((async e=>{s.isEqual(e)||(await Df(t.localStore,e),s=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function gg(e,t){e.asyncQueue.verifyOperationInProgress();const n=await async function(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){il("FirestoreClient","Using user provided OfflineComponentProvider");try{await pg(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(e){return"FirebaseError"===e.name?e.code===dl.FAILED_PRECONDITION||e.code===dl.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}(n))throw n;al("Error using user provided cache. Falling back to memory cache: "+n),await pg(e,new ug)}}else il("FirestoreClient","Using default OfflineComponentProvider"),await pg(e,new ug);return e._offlineComponents}(e);il("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener((e=>Tp(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>Tp(t.remoteStore,n))),e._onlineComponents=t}async function mg(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(il("FirestoreClient","Using user provided OnlineComponentProvider"),await gg(e,e._uninitializedComponentsProvider._online)):(il("FirestoreClient","Using default OnlineComponentProvider"),await gg(e,new hg))),e._onlineComponents}async function Ag(e){const t=await mg(e),n=t.eventManager;return n.onListen=qp.bind(null,t.syncEngine),n.onUnlisten=Wp.bind(null,t.syncEngine),n}
/**
     * @license
     * Copyright 2023 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function vg(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}const wg=new Map;
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function yg(e,t,n){if(!n)throw new fl(dl.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function bg(e){if(!_l.isDocumentKey(e))throw new fl(dl.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ig(e){if(_l.isDocumentKey(e))throw new fl(dl.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Eg(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":ll()}function Tg(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new fl(dl.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Eg(e);throw new fl(dl.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Cg{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new fl(dl.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new fl(dl.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,s){if(!0===t&&!0===s)throw new fl(dl.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=vg(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new fl(dl.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new fl(dl.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new fl(dl.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,n}}class kg{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new fl(dl.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new fl(dl.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cg(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new ml;switch(e.type){case"firstParty":return new yl(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new fl(dl.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=wg.get(e);t&&(il("ComponentProvider","Removing Datastore"),wg.delete(e),t.terminate())}(this),Promise.resolve()}}function Sg(e,t,n,s={}){var r;const i=(e=Tg(e,kg))._getSettings(),o=`${t}:${n}`;if("firestore.googleapis.com"!==i.host&&i.host!==o&&al("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),s.mockUserToken){let t,n;if("string"==typeof s.mockUserToken)t=s.mockUserToken,n=tl.MOCK_USER;else{t=function(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",s=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e);return[fs(JSON.stringify({alg:"none",type:"JWT"})),fs(JSON.stringify(i)),""].join(".")}(s.mockUserToken,null===(r=e._app)||void 0===r?void 0:r.options.projectId);const i=s.mockUserToken.sub||s.mockUserToken.user_id;if(!i)throw new fl(dl.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new tl(i)}e._authCredentials=new Al(new gl(t,n))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Rg{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ng(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Rg(this.firestore,e,this._key)}}class Dg{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Dg(this.firestore,e,this._query)}}class Ng extends Dg{constructor(e,t,n){super(e,t,nh(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Rg(this.firestore,null,new _l(e))}withConverter(e){return new Ng(this.firestore,e,this._path)}}function Ug(e,t,...n){if(e=_s(e),yg("collection","path",t),e instanceof kg){const s=Nl.fromString(t,...n);return Ig(s),new Ng(e,null,s)}{if(!(e instanceof Rg||e instanceof Ng))throw new fl(dl.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(Nl.fromString(t,...n));return Ig(s),new Ng(e.firestore,null,s)}}function xg(e,t,...n){if(e=_s(e),1===arguments.length&&(t=Tl.A()),yg("doc","path",t),e instanceof kg){const s=Nl.fromString(t,...n);return bg(s),new Rg(e,null,new _l(s))}{if(!(e instanceof Rg||e instanceof Ng))throw new fl(dl.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(Nl.fromString(t,...n));return bg(s),new Rg(e.firestore,e instanceof Ng?e.converter:null,new _l(s))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class _g{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Wf(this,"async_queue_retry"),this.Xc=()=>{const e=Qf();e&&il("AsyncQueue","Visibility state changed to "+e.visibilityState),this.qo.Mo()};const e=Qf();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const t=Qf();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise((()=>{}));const t=new pl;return this.ta((()=>this.jc&&this.Jc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Qc.push(e),this.ea())))}async ea(){if(0!==this.Qc.length){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!$l(e))throw e;il("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No((()=>this.ea()))}}ta(e){const t=this.Gc.then((()=>(this.Hc=!0,e().catch((e=>{this.Wc=e,this.Hc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e);throw ol("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Hc=!1,e))))));return this.Gc=t,t}enqueueAfterDelay(e,t,n){this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);const s=Sp.createAndSchedule(this,e,t,n,(e=>this.na(e)));return this.zc.push(s),s}Zc(){this.Wc&&ll()}verifyOperationInProgress(){}async sa(){let e;do{e=this.Gc,await e}while(e!==this.Gc)}ia(e){for(const t of this.zc)if(t.timerId===e)return!0;return!1}ra(e){return this.sa().then((()=>{this.zc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.zc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.sa()}))}oa(e){this.Yc.push(e)}na(e){const t=this.zc.indexOf(e);this.zc.splice(t,1)}}class Og extends kg{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new _g,this._persistenceKey=(null==s?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Mg(this),this._firestoreClient.terminate()}}function Lg(e){return e._firestoreClient||Mg(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Mg(e){var t,n,s;const r=e._freezeSettings(),i=function(e,t,n,s){return new lu(e,t,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,vg(s.experimentalLongPollingOptions),s.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,r);e._firestoreClient=new fg(e._authCredentials,e._appCheckCredentials,e._queue,i),(null===(n=r.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(s=r.cache)||void 0===s?void 0:s._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Pg{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Pg(tu.fromBase64String(e))}catch(e){throw new fl(dl.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Pg(tu.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Bg{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new fl(dl.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xl(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Fg{constructor(e){this._methodName=e}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Vg{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new fl(dl.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new fl(dl.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Cl(this._lat,e._lat)||Cl(this._long,e._long)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const $g=/^__.*__$/;class jg{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new td(e,this.data,this.fieldMask,t,this.fieldTransforms):new ed(e,this.data,t,this.fieldTransforms)}}function Gg(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ll()}}class Kg{constructor(e,t,n,s,r,i){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,void 0===r&&this.ua(),this.fieldTransforms=r||[],this.fieldMask=i||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Kg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),s=this.aa({path:n,la:!1});return s.fa(e),s}da(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),s=this.aa({path:n,la:!1});return s.ua(),s}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return tm(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(0===e.length)throw this._a("Document fields must not be empty");if(Gg(this.ca)&&$g.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class Qg{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||qf(e)}ya(e,t,n,s=!1){return new Kg({ca:e,methodName:t,ga:n,path:xl.emptyPath(),la:!1,ma:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function qg(e){const t=e._freezeSettings(),n=qf(e._databaseId);return new Qg(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Wg(e,t,n,s,r,i={}){const o=e.ya(i.merge||i.mergeFields?2:0,t,n,r);Xg("Data must be an object, but it was:",o,s);const a=Hg(s,o);let c,l;if(i.merge)c=new Zl(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const e=[];for(const s of i.mergeFields){const r=Yg(t,s,n);if(!o.contains(r))throw new fl(dl.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);nm(e,r)||e.push(r)}c=new Zl(e),l=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,l=o.fieldTransforms;return new jg(new ku(a),c,l)}function zg(e,t){if(Jg(e=_s(e)))return Xg("Unsupported field value:",t,e),Hg(e,t);if(e instanceof Fg)return function(e,t){if(!Gg(t.ca))throw t._a(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t._a(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.la&&4!==t.ca)throw t._a("Nested arrays are not supported");return function(e,t){const n=[];let s=0;for(const r of e){let e=zg(r,t.wa(s));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),s++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=_s(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return xh(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Sl.fromDate(e);return{timestampValue:Ld(t.serializer,n)}}if(e instanceof Sl){const n=new Sl(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Ld(t.serializer,n)}}if(e instanceof Vg)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Pg)return{bytesValue:Md(t.serializer,e._byteString)};if(e instanceof Rg){const n=t.databaseId,s=e.firestore._databaseId;if(!s.isEqual(n))throw t._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Fd(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t._a(`Unsupported field value: ${Eg(e)}`)}(e,t)}function Hg(e,t){const n={};return Wl(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ql(e,((e,s)=>{const r=zg(s,t.ha(e));null!=r&&(n[e]=r)})),{mapValue:{fields:n}}}function Jg(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Sl||e instanceof Vg||e instanceof Pg||e instanceof Rg||e instanceof Fg)}function Xg(e,t,n){if(!Jg(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const s=Eg(n);throw"an object"===s?t._a(e+" a custom object"):t._a(e+" "+s)}}function Yg(e,t,n){if((t=_s(t))instanceof Bg)return t._internalPath;if("string"==typeof t)return em(e,t);throw tm("Field path arguments must be of type string or ",e,!1,void 0,n)}const Zg=new RegExp("[~\\*/\\[\\]]");function em(e,t,n){if(t.search(Zg)>=0)throw tm(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Bg(...t.split("."))._internalPath}catch(s){throw tm(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function tm(e,t,n,s,r){const i=s&&!s.isEmpty(),o=void 0!==r;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new fl(dl.INVALID_ARGUMENT,a+e+c)}function nm(e,t){return e.some((e=>e.isEqual(t)))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class sm{constructor(e,t,n,s,r){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Rg(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new rm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(im("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class rm extends sm{data(){return super.data()}}function im(e,t){return"string"==typeof t?em(e,t):t instanceof Bg?t._internalPath:t._delegate._internalPath}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class om{}class am extends om{}function cm(e,t,...n){let s=[];t instanceof om&&s.push(t),s=s.concat(n),function(e){const t=e.filter((e=>e instanceof um)).length,n=e.filter((e=>e instanceof lm)).length;if(t>1||t>0&&n>0)throw new fl(dl.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(s);for(const t of s)e=t._apply(e);return e}class lm extends am{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new lm(e,t,n)}_apply(e){const t=this._parse(e);return fm(e._query,t),new Dg(e.firestore,e.converter,lh(e._query,t))}_parse(e){const t=qg(e.firestore),n=function(e,t,n,s,r,i,o){let a;if(r.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new fl(dl.INVALID_ARGUMENT,`Invalid Query. You can't perform '${i}' queries on documentId().`);if("in"===i||"not-in"===i){dm(o,i);const t=[];for(const n of o)t.push(hm(s,e,n));a={arrayValue:{values:t}}}else a=hm(s,e,o)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||dm(o,i),a=function(e,t,n,s=!1){return zg(n,e.ya(s?4:3,t))}(n,"where",o,"in"===i||"not-in"===i);return Lu.create(r,i,a)}(e._query,0,t,e.firestore._databaseId,this._field,this._op,this._value);return n}}class um extends om{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new um(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:Mu.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const s=t.getFlattenedFilters();for(const e of s)fm(n,e),n=lh(n,e)}(e._query,t),new Dg(e.firestore,e.converter,lh(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function hm(e,t,n){if("string"==typeof(n=_s(n))){if(""===n)throw new fl(dl.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!oh(t)&&-1!==n.indexOf("/"))throw new fl(dl.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=t.path.child(Nl.fromString(n));if(!_l.isDocumentKey(s))throw new fl(dl.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return wu(e,new _l(s))}if(n instanceof Rg)return wu(e,n._key);throw new fl(dl.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Eg(n)}.`)}function dm(e,t){if(!Array.isArray(e)||0===e.length)throw new fl(dl.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function fm(e,t){if(t.isInequality()){const n=ih(e),s=t.field;if(null!==n&&!n.isEqual(s))throw new fl(dl.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${s.toString()}'`);const r=rh(e);null!==r&&function(e,t,n){if(!n.isEqual(t))throw new fl(dl.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}(0,s,r)}const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new fl(dl.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new fl(dl.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class pm{convertValue(e,t="none"){switch(du(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ru(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(iu(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw ll()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return ql(e,((e,s)=>{n[e]=this.convertValue(s,t)})),n}convertGeoPoint(e){return new Vg(ru(e.latitude),ru(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=au(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(cu(e));default:return null}}convertTimestamp(e){const t=su(e);return new Sl(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Nl.fromString(e);ul(rf(n));const s=new uu(n.get(1),n.get(3)),r=new _l(n.popFirst(5));return s.isEqual(t)||ol(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class gm{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class mm extends sm{constructor(e,t,n,s,r,i){super(e,t,n,s,i),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Am(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(im("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Am extends mm{data(e={}){return super.data(e)}}class vm{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new gm(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Am(this._firestore,this._userDataWriter,n.key,n,new gm(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new fl(dl.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const s=new Am(e._firestore,e._userDataWriter,n.doc.key,n.doc,new gm(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:s,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const s=new Am(e._firestore,e._userDataWriter,t.doc.key,t.doc,new gm(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let r=-1,i=-1;return 0!==t.type&&(r=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),i=n.indexOf(t.doc.key)),{type:wm(t.type),doc:s,oldIndex:r,newIndex:i}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function wm(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ll()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ym(e){e=Tg(e,Rg);const t=Tg(e.firestore,Og);return function(e,t,n={}){const s=new pl;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,s,r){const i=new dg({next:i=>{t.enqueueAndForget((()=>Lp(e,o)));const a=i.docs.has(n);!a&&i.fromCache?r.reject(new fl(dl.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&i.fromCache&&s&&"server"===s.source?r.reject(new fl(dl.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):r.resolve(i)},error:e=>r.reject(e)}),o=new Fp(nh(n.path),i,{includeMetadataChanges:!0,Ku:!0});return Op(e,o)}(await Ag(e),e.asyncQueue,t,n,s))),s.promise}(Lg(t),e._key).then((n=>function(e,t,n){const s=n.docs.get(t._key),r=new bm(e);return new mm(e,r,t._key,s,new gm(n.hasPendingWrites,n.fromCache),t.converter)}(t,e,n)))}class bm extends pm{constructor(e){super(),this.firestore=e}convertBytes(e){return new Pg(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Rg(this.firestore,null,t)}}function Im(e){e=Tg(e,Dg);const t=Tg(e.firestore,Og),n=Lg(t),s=new bm(t);return function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new fl(dl.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),function(e,t,n={}){const s=new pl;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,s,r){const i=new dg({next:n=>{t.enqueueAndForget((()=>Lp(e,o))),n.fromCache&&"server"===s.source?r.reject(new fl(dl.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):r.resolve(n)},error:e=>r.reject(e)}),o=new Fp(n,i,{includeMetadataChanges:!0,Ku:!0});return Op(e,o)}(await Ag(e),e.asyncQueue,t,n,s))),s.promise}(n,e._query).then((n=>new vm(t,s,e,n)))}function Em(e,t,n){e=Tg(e,Rg);const s=Tg(e.firestore,Og),r=function(e,t,n){let s;return s=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,s}(e.converter,t,n);return function(e,t){return function(e,t){const n=new pl;return e.asyncQueue.enqueueAndForget((async()=>zp(await function(e){return mg(e).then((e=>e.syncEngine))}(e),t,n))),n.promise}(Lg(e),t)}(s,[Wg(qg(s),"setDoc",e._key,r,null!==e.converter,n).toMutation(e._key,qh.none())])}function Tm(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(s=Object.getOwnPropertySymbols(e);r<s.length;r++)t.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(n[s[r]]=e[s[r]])}return n}function Cm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}!function(e,t=!0){!function(e){nl=e}(yr),mr(new Os("firestore",((e,{instanceIdentifier:n,options:s})=>{const r=e.getProvider("app").getImmediate(),i=new Og(new vl(e.getProvider("auth-internal")),new Il(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new fl(dl.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new uu(e.options.projectId,t)}(r,n),r);return s=Object.assign({useFetchStreams:t},s),i._setSettings(s),i}),"PUBLIC").setMultipleInstances(!0)),Er(el,"3.13.0",e),Er(el,"3.13.0","esm2017")}(),"function"==typeof SuppressedError&&SuppressedError;const km=Cm,Sm=new Ts("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Rm=new Gs("@firebase/auth");function Dm(e,...t){Rm.logLevel<=Bs.ERROR&&Rm.error(`Auth (${yr}): ${e}`,...t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Nm(e,...t){throw xm(e,...t)}function Um(e,...t){return xm(e,...t)}function xm(e,...t){if("string"!=typeof e){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=e.name),e._errorFactory.create(n,...s)}return Sm.create(e,...t)}function _m(e,t,...n){if(!e)throw xm(t,...n)}function Om(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Dm(t),new Error(t)}function Lm(e,t){e||Om(t)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Mm(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Pm(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Bm(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==Pm()&&"https:"!==Pm()&&!function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&!("connection"in navigator)||navigator.onLine}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Fm{constructor(e,t){this.shortDelay=e,this.longDelay=t,Lm(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Is())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return Bm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Vm(e,t){Lm(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class $m{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Om("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Om("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Om("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const jm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},Gm=new Fm(3e4,6e4);
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Km(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Qm(e,t,n,s,r={}){return qm(e,r,(async()=>{let r={},i={};s&&("GET"===t?i=s:r={body:JSON.stringify(s)});const o=Rs(Object.assign({key:e.config.apiKey},i)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),$m.fetch()(zm(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},r))}))}async function qm(e,t,n){e._canInitEmulator=!1;const s=Object.assign(Object.assign({},jm),t);try{const t=new Hm(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const i=await r.json();if("needConfirmation"in i)throw Jm(e,"account-exists-with-different-credential",i);if(r.ok&&!("errorMessage"in i))return i;{const t=r.ok?i.errorMessage:i.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Jm(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw Jm(e,"email-already-in-use",i);if("USER_DISABLED"===n)throw Jm(e,"user-disabled",i);const a=s[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw function(e,t,n){const s=Object.assign(Object.assign({},km()),{[t]:n});return new Ts("auth","Firebase",s).create(t,{appName:e.name})}(e,a,o);Nm(e,a)}}catch(t){if(t instanceof Es)throw t;Nm(e,"network-request-failed",{message:String(t)})}}async function Wm(e,t,n,s,r={}){const i=await Qm(e,t,n,s,r);return"mfaPendingCredential"in i&&Nm(e,"multi-factor-auth-required",{_serverResponse:i}),i}function zm(e,t,n,s){const r=`${t}${n}?${s}`;return e.config.emulator?Vm(e.config,r):`${e.config.apiScheme}://${r}`}class Hm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Um(this.auth,"network-request-failed"))),Gm.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Jm(e,t,n){const s={appName:e.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Um(e,t,s);return r.customData._tokenResponse=n,r}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Xm(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}function Ym(e){return 1e3*Number(e)}function Zm(e){const[t,n,s]=e.split(".");if(void 0===t||void 0===n||void 0===s)return Dm("JWT malformed, contained fewer than 3 sections"),null;try{const e=ps(n);return e?JSON.parse(e):(Dm("Failed to decode base64 JWT payload"),null)}catch(e){return Dm("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function eA(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof Es&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class tA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class nA{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xm(this.lastLoginAt),this.creationTime=Xm(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function sA(e){var t;const n=e.auth,s=await e.getIdToken(),r=await eA(e,async function(e,t){return Qm(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:s}));_m(null==r?void 0:r.users.length,n,"internal-error");const i=r.users[0];e._notifyReloadListener(i);const o=(null===(t=i.providerUserInfo)||void 0===t?void 0:t.length)?i.providerUserInfo.map((e=>{var{providerId:t}=e,n=Tm(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,l=o,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const u=e.isAnonymous,h=!(e.email&&i.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new nA(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class rA{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_m(e.idToken,"internal-error"),_m(void 0!==e.idToken,"internal-error"),_m(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Zm(e);return _m(t,"internal-error"),_m(void 0!==t.exp,"internal-error"),_m(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return _m(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:r}=
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */await async function(e,t){const n=await qm(e,{},(async()=>{const n=Rs({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:r}=e.config,i=zm(e,s,"/v1/token",`key=${r}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",$m.fetch()(i,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,s,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:r}=t,i=new rA;return n&&(_m("string"==typeof n,"internal-error",{appName:e}),i.refreshToken=n),s&&(_m("string"==typeof s,"internal-error",{appName:e}),i.accessToken=s),r&&(_m("number"==typeof r,"internal-error",{appName:e}),i.expirationTime=r),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new rA,this.toJSON())}_performRefresh(){return Om("not implemented")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function iA(e,t){_m("string"==typeof e||void 0===e,"internal-error",{appName:t})}class oA{constructor(e){var{uid:t,auth:n,stsTokenManager:s}=e,r=Tm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new tA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new nA(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await eA(this,this.stsTokenManager.getToken(this.auth,e));return _m(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=_s(e),s=await n.getIdToken(t),r=Zm(s);_m(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i="object"==typeof r.firebase?r.firebase:void 0,o=null==i?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Xm(Ym(r.auth_time)),issuedAtTime:Xm(Ym(r.iat)),expirationTime:Xm(Ym(r.exp)),signInProvider:o||null,signInSecondFactor:(null==i?void 0:i.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=_s(e);await sA(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(_m(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new oA(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){_m(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await sA(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await eA(this,async function(e,t){return Qm(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,s,r,i,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(s=t.email)&&void 0!==s?s:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,f=null!==(i=t.photoURL)&&void 0!==i?i:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,A=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:v,emailVerified:w,isAnonymous:y,providerData:b,stsTokenManager:I}=t;_m(v&&I,e,"internal-error");const E=rA.fromJSON(this.name,I);_m("string"==typeof v,e,"internal-error"),iA(u,e.name),iA(h,e.name),_m("boolean"==typeof w,e,"internal-error"),_m("boolean"==typeof y,e,"internal-error"),iA(d,e.name),iA(f,e.name),iA(p,e.name),iA(g,e.name),iA(m,e.name),iA(A,e.name);const T=new oA({uid:v,auth:e,email:h,emailVerified:w,displayName:u,isAnonymous:y,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:m,lastLoginAt:A});return b&&Array.isArray(b)&&(T.providerData=b.map((e=>Object.assign({},e)))),g&&(T._redirectEventId=g),T}static async _fromIdTokenResponse(e,t,n=!1){const s=new rA;s.updateFromServerResponse(t);const r=new oA({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await sA(r),r}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const aA=new Map;function cA(e){Lm(e instanceof Function,"Expected a class definition");let t=aA.get(e);return t?(Lm(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,aA.set(e,t),t)}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class lA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}lA.type="NONE";const uA=lA;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function hA(e,t,n){return`firebase:${e}:${t}:${n}`}class dA{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:r}=this.auth;this.fullUserKey=hA(this.userKey,s.apiKey,r),this.fullPersistenceKey=hA("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?oA._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new dA(cA(uA),e,n);const s=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=s[0]||cA(uA);const i=hA(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(i);if(t){const s=oA._fromJSON(e,t);n!==r&&(o=s),r=n;break}}catch(e){}const a=s.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(i,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(i)}catch(e){}}))),new dA(r,e,n)):new dA(r,e,n)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function fA(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(AA(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(pA(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(wA(t))return"Blackberry";if(yA(t))return"Webos";if(gA(t))return"Safari";if((t.includes("chrome/")||mA(t))&&!t.includes("edge/"))return"Chrome";if(vA(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function pA(e=Is()){return/firefox\//i.test(e)}function gA(e=Is()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function mA(e=Is()){return/crios\//i.test(e)}function AA(e=Is()){return/iemobile/i.test(e)}function vA(e=Is()){return/android/i.test(e)}function wA(e=Is()){return/blackberry/i.test(e)}function yA(e=Is()){return/webos/i.test(e)}function bA(e=Is()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function IA(){return function(){const e=Is();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function EA(e=Is()){return bA(e)||vA(e)||yA(e)||wA(e)||/windows phone/i.test(e)||AA(e)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function TA(e,t=[]){let n;switch(e){case"Browser":n=fA(Is());break;case"Worker":n=`${fA(Is())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${yr}/${s}`}async function CA(e,t){return Qm(e,"GET","/v2/recaptchaConfig",Km(e,t))}function kA(e){return void 0!==e&&void 0!==e.enterprise}class SA{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function RA(e){return new Promise(((t,n)=>{const s=document.createElement("script");var r,i;s.setAttribute("src",e),s.onload=t,s.onerror=e=>{const t=Um("internal-error");t.customData=e,n(t)},s.type="text/javascript",s.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(s)}))}class DA{constructor(e){this.type="recaptcha-enterprise",this.auth=_A(e)}async verify(e="verify",t=!1){function n(t,n,s){const r=window.grecaptcha;kA(r)?r.enterprise.ready((()=>{r.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n("NO_RECAPTCHA")}))})):s(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,s)=>{(async function(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{CA(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((s=>{if(void 0!==s.recaptchaKey){const n=new SA(s);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))})(this.auth).then((r=>{if(!t&&kA(window.grecaptcha))n(r,e,s);else{if("undefined"==typeof window)return void s(new Error("RecaptchaVerifier is only supported in browser"));RA("https://www.google.com/recaptcha/enterprise.js?render="+r).then((()=>{n(r,e,s)})).catch((e=>{s(e)}))}})).catch((e=>{s(e)}))}))}}async function NA(e,t,n,s=!1){const r=new DA(e);let i;try{i=await r.verify(n)}catch(e){i=await r.verify(n,!0)}const o=Object.assign({},t);return s?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
/**
     * @license
     * Copyright 2022 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class UA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,s)=>{try{n(e(t))}catch(e){s(e)}}));n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class xA{constructor(e,t,n,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new OA(this),this.idTokenSubscription=new OA(this),this.beforeStateQueue=new UA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Sm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=cA(t)),this._initializationPromise=this.queue((async()=>{var n,s;if(!this._deleted&&(this.persistenceManager=await dA.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(s=this.currentUser)||void 0===s?void 0:s.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let s=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null==s?void 0:s._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==i||!(null==o?void 0:o.user)||(s=o.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(e){s=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return _m(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await sA(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?_s(e):null;return t&&_m(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_m(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(cA(e))}))}async initializeRecaptchaConfig(){const e=await CA(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new SA(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){new DA(this).verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ts("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&cA(e)||this._popupRedirectResolver;_m(t,this,"argument-error"),this.redirectPersistenceManager=await dA.create(this,[cA(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const r="function"==typeof t?t:t.next.bind(t),i=this._isInitialized?Promise.resolve():this._initializationPromise;return _m(i,this,"internal-error"),i.then((()=>r(this.currentUser))),"function"==typeof t?e.addObserver(t,n,s):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _m(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=TA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){Rm.logLevel<=Bs.WARN&&Rm.warn(`Auth (${yr}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function _A(e){return _s(e)}class OA{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new Us(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return _m(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function LA(e,t,n){const s=_A(e);_m(s._canInitEmulator,s,"emulator-config-failed"),_m(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const r=!!(null==n?void 0:n.disableWarnings),i=MA(t),{host:o,port:a}=function(e){const t=MA(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const e=r[1];return{host:e,port:PA(s.substr(e.length+1))}}{const[e,t]=s.split(":");return{host:e,port:PA(t)}}}(t),c=null===a?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */()}function MA(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function PA(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class BA{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Om("not implemented")}_getIdTokenResponse(e){return Om("not implemented")}_linkToIdToken(e,t){return Om("not implemented")}_getReauthenticationResolver(e){return Om("not implemented")}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function FA(e,t){return Wm(e,"POST","/v1/accounts:signInWithPassword",Km(e,t))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class VA extends BA{constructor(e,t,n,s=null){super("password",n),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new VA(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new VA(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await NA(e,n,"signInWithPassword");return FA(e,t)}return FA(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await NA(e,n,"signInWithPassword");return FA(e,t)}return Promise.reject(t)}));case"emailLink":return async function(e,t){return Wm(e,"POST","/v1/accounts:signInWithEmailLink",Km(e,t))}(e,{email:this._email,oobCode:this._password});default:Nm(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return async function(e,t){return Qm(e,"POST","/v1/accounts:update",t)}(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Wm(e,"POST","/v1/accounts:signInWithEmailLink",Km(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Nm(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function $A(e,t){return Wm(e,"POST","/v1/accounts:signInWithIdp",Km(e,t))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class jA extends BA{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new jA(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Nm("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:s}=t,r=Tm(t,["providerId","signInMethod"]);if(!n||!s)return null;const i=new jA(n,s);return i.idToken=r.idToken||void 0,i.accessToken=r.accessToken||void 0,i.secret=r.secret,i.nonce=r.nonce,i.pendingToken=r.pendingToken||null,i}_getIdTokenResponse(e){return $A(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,$A(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,$A(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Rs(t)}return e}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class GA{constructor(e){var t,n,s,r,i,o;const a=Ds(Ns(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,l=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(s=a.mode)&&void 0!==s?s:null);_m(c&&l&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=l,this.continueUrl=null!==(r=a.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(i=a.languageCode)&&void 0!==i?i:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=Ds(Ns(e)).link,n=t?Ds(Ns(t)).deep_link_id:null,s=Ds(Ns(e)).deep_link_id;return(s?Ds(Ns(s)).link:null)||s||n||t||e}(e);try{return new GA(t)}catch(e){return null}}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class KA{constructor(){this.providerId=KA.PROVIDER_ID}static credential(e,t){return VA._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=GA.parseLink(t);return _m(n,"argument-error"),VA._fromEmailAndCode(e,n.code,n.tenantId)}}KA.PROVIDER_ID="password",KA.EMAIL_PASSWORD_SIGN_IN_METHOD="password",KA.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class QA{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class qA extends QA{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class WA extends qA{constructor(){super("facebook.com")}static credential(e){return jA._fromParams({providerId:WA.PROVIDER_ID,signInMethod:WA.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return WA.credentialFromTaggedObject(e)}static credentialFromError(e){return WA.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return WA.credential(e.oauthAccessToken)}catch(e){return null}}}WA.FACEBOOK_SIGN_IN_METHOD="facebook.com",WA.PROVIDER_ID="facebook.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class zA extends qA{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return jA._fromParams({providerId:zA.PROVIDER_ID,signInMethod:zA.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return zA.credentialFromTaggedObject(e)}static credentialFromError(e){return zA.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return zA.credential(t,n)}catch(e){return null}}}zA.GOOGLE_SIGN_IN_METHOD="google.com",zA.PROVIDER_ID="google.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class HA extends qA{constructor(){super("github.com")}static credential(e){return jA._fromParams({providerId:HA.PROVIDER_ID,signInMethod:HA.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return HA.credentialFromTaggedObject(e)}static credentialFromError(e){return HA.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return HA.credential(e.oauthAccessToken)}catch(e){return null}}}HA.GITHUB_SIGN_IN_METHOD="github.com",HA.PROVIDER_ID="github.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class JA extends qA{constructor(){super("twitter.com")}static credential(e,t){return jA._fromParams({providerId:JA.PROVIDER_ID,signInMethod:JA.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return JA.credentialFromTaggedObject(e)}static credentialFromError(e){return JA.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return JA.credential(t,n)}catch(e){return null}}}JA.TWITTER_SIGN_IN_METHOD="twitter.com",JA.PROVIDER_ID="twitter.com";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class XA{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){const r=await oA._fromIdTokenResponse(e,n,s),i=YA(n);return new XA({user:r,providerId:i,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=YA(n);return new XA({user:e,providerId:s,_tokenResponse:n,operationType:t})}}function YA(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ZA extends Es{constructor(e,t,n,s){var r;super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,ZA.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new ZA(e,t,n,s)}}function ev(e,t,n,s){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw ZA._fromErrorAndOperation(e,n,t,s);throw n}))}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function tv(e,t,n=!1){const s="signIn",r=await ev(e,s,t),i=await XA._fromIdTokenResponse(e,s,r);return n||await e._updateCurrentUser(i.user),i}function nv(e,t,n){return async function(e,t){return tv(_A(e),t)}(_s(e),KA.credential(t,n))}const sv="__sak";
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class rv{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(sv,"1"),this.storage.removeItem(sv),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class iv extends rv{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Is();return gA(e)||bA(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=EA(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(n);if(e.newValue!==s)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const s=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);IA()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,10):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}iv.type="LOCAL";const ov=iv;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class av extends rv{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}av.type="SESSION";const cv=av;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class lv{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new lv(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:r}=t.data,i=this.handlersMap[s];if(!(null==i?void 0:i.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const o=Array.from(i).map((async e=>e(t.origin,r))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function uv(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */lv.receivers=[];class hv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,i;return new Promise(((o,a)=>{const c=uv("",20);s.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);i={messageChannel:s,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(t.data.response);break;default:clearTimeout(l),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(i),s.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])})).finally((()=>{i&&this.removeMessageHandler(i)}))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function dv(){return window}
/**
     * @license
     * Copyright 2020 Google LLC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function fv(){return void 0!==dv().WorkerGlobalScope&&"function"==typeof dv().importScripts}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const pv="firebaseLocalStorageDb",gv="firebaseLocalStorage",mv="fbase_key";class Av{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function vv(e,t){return e.transaction([gv],t?"readwrite":"readonly").objectStore(gv)}function wv(){const e=indexedDB.open(pv,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(gv,{keyPath:mv})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(gv)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(pv);return new Av(e).toPromise()}(),t(await wv()))}))}))}async function yv(e,t,n){const s=vv(e,!0).put({[mv]:t,value:n});return new Av(s).toPromise()}function bv(e,t){const n=vv(e,!0).delete(t);return new Av(n).toPromise()}class Iv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await wv()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=lv._getInstance(fv()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new hv(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wv();return await yv(e,sv,"1"),await bv(e,sv),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>yv(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=vv(e,!1).get(t),s=await new Av(n).toPromise();return void 0===s?null:s.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>bv(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=vv(e,!1).getAll();return new Av(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:s,value:r}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Iv.type="LOCAL";const Ev=Iv;new Fm(3e4,6e4);
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Tv extends BA{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $A(e,this._buildIdpRequest())}_linkToIdToken(e,t){return $A(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return $A(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Cv(e){return tv(e.auth,new Tv(e),e.bypassAuthState)}function kv(e){const{auth:t,user:n}=e;return _m(n,t,"internal-error"),
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function(e,t,n=!1){const{auth:s}=e,r="reauthenticate";try{const i=await eA(e,ev(s,r,t,e),n);_m(i.idToken,s,"internal-error");const o=Zm(i.idToken);_m(o,s,"internal-error");const{sub:a}=o;return _m(e.uid===a,s,"user-mismatch"),XA._forOperation(e,r,i)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&Nm(s,"user-mismatch"),e}}(n,new Tv(e),e.bypassAuthState)}async function Sv(e){const{auth:t,user:n}=e;return _m(n,t,"internal-error"),async function(e,t,n=!1){const s=await eA(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return XA._forOperation(e,"link",s)}(n,new Tv(e),e.bypassAuthState)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Rv{constructor(e,t,n,s,r=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:s,tenantId:r,error:i,type:o}=e;if(i)return void this.reject(i);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Cv;case"linkViaPopup":case"linkViaRedirect":return Sv;case"reauthViaPopup":case"reauthViaRedirect":return kv;default:Nm(this.auth,"internal-error")}}resolve(e){Lm(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Lm(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Dv=new Fm(2e3,1e4);class Nv extends Rv{constructor(e,t,n,s,r){super(e,t,s,r),this.provider=n,this.authWindow=null,this.pollId=null,Nv.currentPopupAction&&Nv.currentPopupAction.cancel(),Nv.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _m(e,this.auth,"internal-error"),e}async onExecution(){Lm(1===this.filter.length,"Popup operations only handle one event");const e=uv();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Um(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Um(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Nv.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Um(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Dv.get())};e()}}Nv.currentPopupAction=null;
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Uv="pendingRedirect",xv=new Map;class _v extends Rv{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=xv.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return hA(Uv,e.config.apiKey,e.name)}(t),s=function(e){return cA(e._redirectPersistence)}(e);if(!await s._isAvailable())return!1;const r="true"===await s._get(n);return await s._remove(n),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}xv.set(this.auth._key(),e)}return this.bypassAuthState||xv.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Ov(e,t){xv.set(e._key(),t)}async function Lv(e,t,n=!1){const s=_A(e),r=
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function(e,t){return t?cA(t):(_m(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}(s,t),i=new _v(s,r,n),o=await i.execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,t)),o}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Mv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bv(e);default:return!1}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Bv(e)){const s=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Um(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pv(e))}saveEventToCache(e){this.cachedEventUids.add(Pv(e)),this.lastProcessedEventTime=Date.now()}}function Pv(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Bv({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Fv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Vv=/^https?/;async function $v(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Qm(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(jv(e))return}catch(e){}Nm(e,"unauthorized-domain")}function jv(e){const t=Mm(),{protocol:n,hostname:s}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===s?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===s}if(!Vv.test(n))return!1;if(Fv.test(e))return s===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}
/**
     * @license
     * Copyright 2020 Google LLC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Gv=new Fm(3e4,6e4);function Kv(){const e=dv().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}function Qv(e){return new Promise(((t,n)=>{var s,r,i;function o(){Kv(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Kv(),n(Um(e,"network-request-failed"))},timeout:Gv.get()})}if(null===(r=null===(s=dv().gapi)||void 0===s?void 0:s.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(i=dv().gapi)||void 0===i?void 0:i.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return dv()[t]=()=>{gapi.load?o():n(Um(e,"network-request-failed"))},RA(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw qv=null,e}))}let qv=null;
/**
     * @license
     * Copyright 2020 Google LLC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Wv=new Fm(5e3,15e3),zv="__/auth/iframe",Hv="emulator/auth/iframe",Jv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Xv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Yv(e){const t=e.config;_m(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Vm(t,Hv):`https://${e.config.authDomain}/${zv}`,s={apiKey:t.apiKey,appName:e.name,v:yr},r=Xv.get(e.config.apiHost);r&&(s.eid=r);const i=e._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Rs(s).slice(1)}`}async function Zv(e){const t=await function(e){return qv=qv||Qv(e),qv}(e),n=dv().gapi;return _m(n,e,"internal-error"),t.open({where:document.body,url:Yv(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Jv,dontclear:!0},(t=>new Promise((async(n,s)=>{await t.restyle({setHideOnLeave:!1});const r=Um(e,"network-request-failed"),i=dv().setTimeout((()=>{s(r)}),Wv.get());function o(){dv().clearTimeout(i),n(t)}t.ping(o).then(o,(()=>{s(r)}))}))))}
/**
     * @license
     * Copyright 2020 Google LLC.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const ew={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class tw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function nw(e,t,n,s=500,r=600){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},ew),{width:s.toString(),height:r.toString(),top:i,left:o}),l=Is().toLowerCase();n&&(a=mA(l)?"_blank":n),pA(l)&&(t=t||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Is()){var t;return bA(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t||"",a),new tw(null);const h=window.open(t||"",a,u);_m(h,e,"popup-blocked");try{h.focus()}catch(e){}return new tw(h)}const sw="__/auth/handler",rw="emulator/auth/handler",iw=encodeURIComponent("fac");async function ow(e,t,n,s,r,i){_m(e.config.authDomain,e,"auth-domain-config-required"),_m(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:yr,eventId:r};if(t instanceof QA){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(i||{}))o[e]=t}if(t instanceof qA){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];const c=await e._getAppCheckToken(),l=c?`#${iw}=${encodeURIComponent(c)}`:"";return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${sw}`;return Vm(e,rw)}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e)}?${Rs(a).slice(1)}${l}`}const aw="webStorageSupport";const cw=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cv,this._completeRedirectFn=Lv,this._overrideRedirectResult=Ov}async _openPopup(e,t,n,s){var r;Lm(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return nw(e,await ow(e,t,n,Mm(),s),uv())}async _openRedirect(e,t,n,s){await this._originValidation(e);return function(e){dv().location.href=e}(await ow(e,t,n,Mm(),s)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Lm(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Zv(e),n=new Mv(e);return t.register("authEvent",(t=>{_m(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(aw,{type:aw},(n=>{var s;const r=null===(s=null==n?void 0:n[0])||void 0===s?void 0:s[aw];void 0!==r&&t(!!r),Nm(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=$v(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return EA()||gA()||bA()}};var lw="@firebase/auth",uw="0.23.2";
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class hw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_m(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const dw=ys("authIdTokenMaxAge")||300;let fw=null;const pw=e=>async t=>{const n=t&&await t.getIdTokenResult(),s=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>dw)return;const r=null==n?void 0:n.token;fw!==r&&(fw=r,await fetch(e,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function gw(e=Ir()){const t=Ar(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=Ar(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(ks(n.getOptions(),null!=t?t:{}))return e;Nm(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:cw,persistence:[Ev,ov,cv]}),s=ys("authTokenSyncURL");if(s){const e=pw(s);!function(e,t,n){_s(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,s){_s(e).onIdTokenChanged(t,n,s)}(n,(t=>e(t)))}const r=As("auth");return r&&LA(n,`http://${r}`),n}var mw;function Aw(t){let n,s,i,o,a,l,u,h,d,f,p,m,A,y,I,T,S,R,N,U,x,_,O,L,M,P,B,F,V,$,j=0==t[0].length&&vw(t),G=function(t){let n,s,r;return{c(){n=b("div"),s=b("img"),c(s.src,r=On)||k(s,"src",r),k(s,"alt","Related Spaces"),k(s,"class","svelte-xwtl7u"),k(n,"class","page-selector svelte-xwtl7u")},m(e,t){v(e,n,t),g(n,s)},p:e,d(e){e&&w(n)}}}();const K=[Ew,Iw,bw,yw],Q=[];function q(e,t){return e[5]==e[10].tabs?0:e[5]==e[10].bookmarks?1:e[5]==e[10].readingList?2:e[5]==e[10].clipboard?3:-1}return~(P=q(t))&&(B=Q[P]=K[P](t)),{c(){n=b("div"),j&&j.c(),s=E(),i=b("div"),o=b("div"),a=b("img"),h=E(),d=b("div"),f=b("img"),A=E(),y=b("div"),I=b("img"),R=E(),N=b("div"),U=b("img"),O=E(),G&&G.c(),L=E(),M=b("div"),B&&B.c(),c(a.src,l=Nn)||k(a,"src",l),k(a,"alt","Tabs"),k(a,"class","svelte-xwtl7u"),k(o,"class",u="page-selector"+(t[5]==t[10].tabs?" selected":"")+" svelte-xwtl7u"),c(f.src,p=Un)||k(f,"src",p),k(f,"alt","Bookmarks"),k(f,"class","svelte-xwtl7u"),k(d,"class",m="page-selector"+(t[5]==t[10].bookmarks?" selected":"")+" svelte-xwtl7u"),c(I.src,T=xn)||k(I,"src",T),k(I,"alt","Queue"),k(I,"class","svelte-xwtl7u"),k(y,"class",S="page-selector"+(t[5]==t[10].readingList?" selected":"")+" svelte-xwtl7u"),c(U.src,x=_n)||k(U,"src",x),k(U,"alt","Clipboard"),k(U,"class","svelte-xwtl7u"),k(N,"class",_="page-selector"+(t[5]==t[10].clipboard?" selected":"")+" svelte-xwtl7u"),k(i,"class","page-selection svelte-xwtl7u"),D(i,"border-color",Be[t[2].color]),k(M,"class","container svelte-xwtl7u"),k(n,"class","workspace svelte-xwtl7u")},m(e,r){v(e,n,r),j&&j.m(n,null),g(n,s),g(n,i),g(i,o),g(o,a),g(i,h),g(i,d),g(d,f),g(i,A),g(i,y),g(y,I),g(i,R),g(i,N),g(N,U),g(i,O),G&&G.m(i,null),g(n,L),g(n,M),~P&&Q[P].m(M,null),F=!0,V||($=[C(o,"mousedown",t[19]),C(d,"mousedown",t[20]),C(y,"mousedown",t[21]),C(N,"mousedown",t[22])],V=!0)},p(e,t){0==e[0].length?j?j.p(e,t):(j=vw(e),j.c(),j.m(n,s)):j&&(j.d(1),j=null),(!F||32&t&&u!==(u="page-selector"+(e[5]==e[10].tabs?" selected":"")+" svelte-xwtl7u"))&&k(o,"class",u),(!F||32&t&&m!==(m="page-selector"+(e[5]==e[10].bookmarks?" selected":"")+" svelte-xwtl7u"))&&k(d,"class",m),(!F||32&t&&S!==(S="page-selector"+(e[5]==e[10].readingList?" selected":"")+" svelte-xwtl7u"))&&k(y,"class",S),(!F||32&t&&_!==(_="page-selector"+(e[5]==e[10].clipboard?" selected":"")+" svelte-xwtl7u"))&&k(N,"class",_),(!F||4&t)&&D(i,"border-color",Be[e[2].color]);let r=P;P=q(e),P===r?~P&&Q[P].p(e,t):(B&&(re(),ae(Q[r],1,1,(()=>{Q[r]=null})),ie()),~P?(B=Q[P],B?B.p(e,t):(B=Q[P]=K[P](e),B.c()),oe(B,1),B.m(M,null)):B=null)},i(e){F||(oe(B),F=!0)},o(e){ae(B),F=!1},d(e){e&&w(n),j&&j.d(),G&&G.d(),~P&&Q[P].d(),V=!1,r($)}}}function vw(e){let t,n,s,i,o,a,l,u,h,d,f,p,m,A,y,T,R,N=e[2].title+"",U=e[9]&&ww();return{c(){t=b("div"),n=b("div"),s=b("img"),o=E(),a=b("div"),l=I(N),u=E(),h=b("div"),d=b("img"),p=E(),m=b("img"),y=E(),U&&U.c(),c(s.src,i=Dn)||k(s,"src",i),k(s,"class","action icon svelte-xwtl7u"),k(s,"alt","back"),k(a,"class","title svelte-xwtl7u"),c(d.src,f=Rn)||k(d,"src",f),k(d,"class","action icon svelte-xwtl7u"),k(d,"alt",""),c(m.src,A=Sn)||k(m,"src",A),k(m,"class","action icon svelte-xwtl7u"),k(m,"alt",""),k(h,"class","actions svelte-xwtl7u"),k(n,"class","main svelte-xwtl7u"),k(t,"class","header svelte-xwtl7u"),D(t,"background-color",Be[e[2].color])},m(r,i){v(r,t,i),g(t,n),g(n,s),g(n,o),g(n,a),g(a,l),g(n,u),g(n,h),g(h,d),g(h,p),g(h,m),g(t,y),U&&U.m(t,null),T||(R=[C(s,"mousedown",e[13]),C(d,"mousedown",e[12]),C(m,"mousedown",e[11])],T=!0)},p(e,n){4&n&&N!==(N=e[2].title+"")&&S(l,N),e[9]?U||(U=ww(),U.c(),U.m(t,null)):U&&(U.d(1),U=null),4&n&&D(t,"background-color",Be[e[2].color])},d(e){e&&w(t),U&&U.d(),T=!1,r(R)}}}function ww(t){return{c:e,m:e,d:e}}function yw(t){let n,s;return n=new cs({}),{c(){pe(n.$$.fragment)},m(e,t){ge(n,e,t),s=!0},p:e,i(e){s||(oe(n.$$.fragment,e),s=!0)},o(e){ae(n.$$.fragment,e),s=!1},d(e){me(n,e)}}}function bw(e){let t,n;return t=new is({props:{queue:e[7]}}),t.$on("bookmarkClicked",e[14]),{c(){pe(t.$$.fragment)},m(e,s){ge(t,e,s),n=!0},p(e,n){const s={};128&n&&(s.queue=e[7]),t.$set(s)},i(e){n||(oe(t.$$.fragment,e),n=!0)},o(e){ae(t.$$.fragment,e),n=!1},d(e){me(t,e)}}}function Iw(e){let t,n;return t=new Yn({props:{bookmarks:e[6]}}),t.$on("bookmarkClicked",e[14]),{c(){pe(t.$$.fragment)},m(e,s){ge(t,e,s),n=!0},p(e,n){const s={};64&n&&(s.bookmarks=e[6]),t.$set(s)},i(e){n||(oe(t.$$.fragment,e),n=!0)},o(e){ae(t.$$.fragment,e),n=!1},d(e){me(t,e)}}}function Ew(e){let t,n,s;function r(t){e[23](t)}let i={tabs:e[1],group:e[2],lastUpdate:e[3],lastSelectionUpdate:e[4]};return void 0!==e[0]&&(i.selectedTabs=e[0]),t=new $n({props:i}),j.push((()=>fe(t,"selectedTabs",r))),t.$on("updateSelection",e[24]),{c(){pe(t.$$.fragment)},m(e,n){ge(t,e,n),s=!0},p(e,s){const r={};2&s&&(r.tabs=e[1]),4&s&&(r.group=e[2]),8&s&&(r.lastUpdate=e[3]),16&s&&(r.lastSelectionUpdate=e[4]),!n&&1&s&&(n=!0,r.selectedTabs=e[0],z((()=>n=!1))),t.$set(r)},i(e){s||(oe(t.$$.fragment,e),s=!0)},o(e){ae(t.$$.fragment,e),s=!1},d(e){me(t,e)}}}function Tw(e){let t,n,s=e[8]&&Aw(e);return{c(){s&&s.c(),t=T()},m(e,r){s&&s.m(e,r),v(e,t,r),n=!0},p(e,[n]){e[8]?s?(s.p(e,n),256&n&&oe(s,1)):(s=Aw(e),s.c(),oe(s,1),s.m(t.parentNode,t)):s&&(re(),ae(s,1,1,(()=>{s=null})),ie())},i(e){n||(oe(s),n=!0)},o(e){ae(s),n=!1},d(e){s&&s.d(e),e&&w(t)}}}function Cw(e,t,n){let s=F(),{tabs:r}=t,{group:i}=t,{lastUpdate:o}=t,{activeTab:a}=t,{selectedTabs:c}=t,{lastSelectionUpdate:l}=t,{user:u}=t,{db:h}=t,{workspace:d}=t;const f={tabs:"tabs",bookmarks:"bookmarks",readingList:"readingList",clipboard:"clipboard",related:"related"};let p,g=f.tabs,m=[],A=[];B((()=>{v()}));const v=async()=>{d?await y():n(15,d=i?.workspace?i.workspace:{title:i.title}),n(8,p=!0)};let w=[];const y=async()=>{const e=ls.userResources(u.id),t=cm(Ug(h,e),function(e,t,n){const s=t,r=im("where",e);return lm._create(r,s,n)}("contexts","array-contains",d.id));w=(await Im(t)).docs.map((e=>e.data())),n(6,m=w.filter((e=>e.url&&!e.title.startsWith("* ")))),n(7,A=w.filter((e=>e.url&&e.title.startsWith("* "))))};let b;return e.$$set=e=>{"tabs"in e&&n(1,r=e.tabs),"group"in e&&n(2,i=e.group),"lastUpdate"in e&&n(3,o=e.lastUpdate),"activeTab"in e&&n(16,a=e.activeTab),"selectedTabs"in e&&n(0,c=e.selectedTabs),"lastSelectionUpdate"in e&&n(4,l=e.lastSelectionUpdate),"user"in e&&n(17,u=e.user),"db"in e&&n(18,h=e.db),"workspace"in e&&n(15,d=e.workspace)},[c,r,i,o,l,g,m,A,p,b,f,()=>{n(9,b=!0)},()=>{chrome.tabGroups.remove(i.id)},()=>{s("showWindowView")},async({detail:e})=>{const t=e,n=await chrome.tabs.create({url:t.url});await chrome.tabs.group({tabIds:n.id,groupId:i.id})},d,a,u,h,()=>n(5,g=f.tabs),()=>n(5,g=f.bookmarks),()=>n(5,g=f.readingList),()=>n(5,g=f.clipboard),function(e){c=e,n(0,c)},function(t){V.call(this,e,t)}]}mw="Browser",mr(new Os("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:i,authDomain:o}=n.options;_m(i&&!i.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:i,authDomain:o,clientPlatform:mw,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:TA(mw)},c=new xA(n,s,r,a);return function(e,t){const n=(null==t?void 0:t.persistence)||[],s=(Array.isArray(n)?n:[n]).map(cA);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(s,null==t?void 0:t.popupRedirectResolver)}(c,t),c}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),mr(new Os("auth-internal",(e=>(e=>new hw(e))(_A(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),Er(lw,uw,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(mw)),Er(lw,uw,"esm2017");class kw extends we{constructor(e){super(),ve(this,e,Cw,Tw,o,{tabs:1,group:2,lastUpdate:3,activeTab:16,selectedTabs:0,lastSelectionUpdate:4,user:17,db:18,workspace:15})}}var Sw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAfhJREFUaEPtmc8rRUEUxz9vb8FS5NeeSCk7slLYsZednSUbbFhaUf4FrMhS2FCSUBY2QrJWVnY6uq+mad57M/fO3B+aW6/e4pzvnM+cM+fOzK1R8adW8fiJAEVnMGagzBnoA+Tn8rwA7y4OWW1NJTQGbAFTKcXPgDXgJqW/k5sOMA8cOCmYjb+BJeDQg1ZTCR3gERj0OOhCaAgVoAd48xh8XerCg+YxcAnc6VoqwARwrhlsOg6+7mjvYv4D7ACrqpMNwIbDKGIbEkJCkQaxXY/JN4Do5gHRAXzJYCEA8oAYAe5DAjhUXUtTU0Yngb/mECoDLaNyMIgALl3IYWKtTUuXgWmgDbgGPiwwSgUwDlwlQZ8Ac1UD0GfT5kBVqgxEgKTkcnkPtAOyQRzW6lzdK6mbxacGC7uwEloGdi0WqWpiWtiFAUjwAuHyfAJdmkNhANIiV5IysoGQEjpKdrOqfWEApqBjF8qzC/3LDKjXNqYFawMtNrm8B0zBdAN7wECDBVt6AJtupNuUqgtFgDRdKM2s+fbR75qMizjU1aJvGNHrB17lj36guAVGQ4zoUfMUmKnr6QBDwIPHwUJI9aofUUxHuk5gH5gNMXoGTbkEWASeVY1mZ9I0n5gyxNfUteGnK5tDdaigvOhGAC/TmEEkZiDD5HlxrXwGfgEospkxPyQ0YAAAAABJRU5ErkJggg==";function Rw(e,t,n){const s=e.slice();return s[14]=t[n][0],s[15]=t[n][1],s}function Dw(e){let t,n,s,r,i,o;function a(){return e[6](e[14])}return{c(){t=b("div"),n=b("div"),r=E(),k(n,"class",s="color "+(e[0].color==e[14]?" selected":"")+" svelte-1aqfk23"),D(n,"background-color",e[15]),k(t,"class","color-container svelte-1aqfk23")},m(e,s){v(e,t,s),g(t,n),g(t,r),i||(o=C(n,"mousedown",a),i=!0)},p(t,r){e=t,1&r&&s!==(s="color "+(e[0].color==e[14]?" selected":"")+" svelte-1aqfk23")&&k(n,"class",s)},d(e){e&&w(t),i=!1,o()}}}function Nw(t){let n,s,i,o,a,c,l,u,h,d,f,p,m=Object.entries(Be),A=[];for(let e=0;e<m.length;e+=1)A[e]=Dw(Rw(t,m,e));return{c(){n=b("div"),s=b("div"),i=E(),o=b("div"),a=b("div"),c=b("input"),l=E(),u=b("div");for(let e=0;e<A.length;e+=1)A[e].c();k(s,"class","background svelte-1aqfk23"),k(c,"type","text"),k(c,"class","title-input svelte-1aqfk23"),k(c,"placeholder","Add Group"),c.autofocus="true",k(a,"class","title svelte-1aqfk23"),k(u,"class","colors svelte-1aqfk23"),k(o,"class","container svelte-1aqfk23"),k(o,"style",h="background-color: "+Be[t[0].color]),k(n,"class","modal svelte-1aqfk23")},m(e,r){v(e,n,r),g(n,s),g(n,i),g(n,o),g(o,a),g(a,c),R(c,t[0].title),g(o,l),g(o,u);for(let e=0;e<A.length;e+=1)A[e]&&A[e].m(u,null);c.focus(),f||(p=[C(s,"mousedown",t[3]),C(c,"input",t[5]),C(c,"blur",t[1]),C(c,"keydown",t[2])],f=!0)},p(e,[t]){if(1&t&&c.value!==e[0].title&&R(c,e[0].title),17&t){let n;for(m=Object.entries(Be),n=0;n<m.length;n+=1){const s=Rw(e,m,n);A[n]?A[n].p(s,t):(A[n]=Dw(s),A[n].c(),A[n].m(u,null))}for(;n<A.length;n+=1)A[n].d(1);A.length=m.length}1&t&&h!==(h="background-color: "+Be[e[0].color])&&k(o,"style",h)},i(e){d||W((()=>{d=le(n,Se,{}),d.start()}))},o:e,d(e){e&&w(n),y(A,e),f=!1,r(p)}}}function Uw(e,t,n){let s={title:"",color:"grey"};B((()=>{o()}));let r=[],i=[];const o=async()=>{let e=await chrome.bookmarks.search({url:null});e.sort(((e,t)=>t.dateGroupModified-e.dateGroupModified));const t=Date.now()-24192e5;r=e.filter((e=>e.title.includes("[space"))),i=e.filter((e=>e.dateGroupModified>t&&!e.title.includes("[space"))),a()},a=()=>{};let c=F();const l=e=>{n(0,s.color=e,s)};return[s,()=>{},async e=>{if("Enter"==e.key){const e=await(async()=>{const e=(await chrome.tabs.query({active:!0,currentWindow:!0}))[0];return await chrome.tabs.create({index:e.index+1})})(),t=await chrome.tabs.group({tabIds:e.id});await chrome.tabGroups.update(t,{title:s.title}),c("exitModal")}},()=>{c("exitModal")},l,function(){s.title=this.value,n(0,s)},e=>l(e)]}class xw extends we{constructor(e){super(),ve(this,e,Uw,Nw,o,{})}}function _w(t){let n,s;return n=new xw({}),n.$on("exitModal",t[7]),{c(){pe(n.$$.fragment)},m(e,t){ge(n,e,t),s=!0},p:e,i(e){s||(oe(n.$$.fragment,e),s=!0)},o(e){ae(n.$$.fragment,e),s=!1},d(e){me(n,e)}}}function Ow(e){let t,n,s,r,i,o,a,c,l,u=e[2]>1?"s":"";return c=new an({}),{c(){t=b("div"),n=I(e[2]),s=E(),r=b("span"),i=I("Group"),o=I(u),a=E(),pe(c.$$.fragment),k(t,"class","count")},m(e,u){v(e,t,u),g(t,n),g(t,s),g(t,r),g(r,i),g(r,o),v(e,a,u),ge(c,e,u),l=!0},p(e,t){(!l||4&t)&&S(n,e[2]),(!l||4&t)&&u!==(u=e[2]>1?"s":"")&&S(o,u)},i(e){l||(oe(c.$$.fragment,e),l=!0)},o(e){ae(c.$$.fragment,e),l=!1},d(e){e&&w(t),e&&w(a),me(c,e)}}}function Lw(e){let t,n,s,i,o,a,l,u,h,d,f,p,m,A,y,T,R,D,N,U,x,_,O=e[0].length+"",L=e[0].length>1?"s":"",M=e[3]&&_w(e),P=e[2]>0&&Ow(e);return{c(){M&&M.c(),t=E(),n=b("div"),s=b("div"),i=b("img"),a=E(),l=b("div"),u=b("div"),P&&P.c(),h=E(),d=b("div"),f=I(O),p=E(),m=b("span"),A=I("Tab"),y=I(L),T=E(),R=b("div"),D=b("img"),c(i.src,o=Sw)||k(i,"src",o),k(i,"alt","Select All"),k(i,"class","svelte-1pswkvf"),k(s,"class","action svelte-1pswkvf"),k(d,"class","count"),k(u,"class","container svelte-1pswkvf"),k(l,"class","counts svelte-1pswkvf"),c(D.src,N=Ln)||k(D,"src",N),k(D,"alt","Create new tab"),k(D,"class","svelte-1pswkvf"),k(R,"class","action svelte-1pswkvf"),k(n,"class","main-container svelte-1pswkvf")},m(r,o){M&&M.m(r,o),v(r,t,o),v(r,n,o),g(n,s),g(s,i),g(n,a),g(n,l),g(l,u),P&&P.m(u,null),g(u,h),g(u,d),g(d,f),g(d,p),g(d,m),g(m,A),g(m,y),g(n,T),g(n,R),g(R,D),U=!0,x||(_=[C(s,"mousedown",e[5]),C(R,"mousedown",e[4])],x=!0)},p(e,n){e[3]?M?(M.p(e,n),8&n&&oe(M,1)):(M=_w(e),M.c(),oe(M,1),M.m(t.parentNode,t)):M&&(re(),ae(M,1,1,(()=>{M=null})),ie()),e[2]>0?P?(P.p(e,n),4&n&&oe(P,1)):(P=Ow(e),P.c(),oe(P,1),P.m(u,h)):P&&(re(),ae(P,1,1,(()=>{P=null})),ie()),(!U||1&n)&&O!==(O=e[0].length+"")&&S(f,O),(!U||1&n)&&L!==(L=e[0].length>1?"s":"")&&S(y,L)},i(e){U||(oe(M),oe(P),U=!0)},o(e){ae(M),ae(P),U=!1},d(e){M&&M.d(e),e&&w(t),e&&w(n),P&&P.d(),x=!1,r(_)}}}function Mw(t){let n,s,r=t[1],i=Lw(t);return{c(){i.c(),n=T()},m(e,t){i.m(e,t),v(e,n,t),s=!0},p(t,[s]){2&s&&o(r,r=t[1])?(re(),ae(i,1,1,e),ie(),i=Lw(t),i.c(),oe(i,1),i.m(n.parentNode,n)):i.p(t,s)},i(e){s||(oe(i),s=!0)},o(e){ae(i),s=!1},d(e){e&&w(n),i.d(e)}}}function Pw(e,t,n){F();let{tabs:s}=t,{selectedTabs:r}=t,{lastSelectionUpdate:i}=t;B((()=>{a()}));let o=0;const a=()=>{let e=[];for(const t of s)t.groupId>-1&&!e.includes(t.groupId)&&e.push(t.groupId);n(2,o=e.length)};let c;return e.$$set=e=>{"tabs"in e&&n(0,s=e.tabs),"selectedTabs"in e&&n(6,r=e.selectedTabs),"lastSelectionUpdate"in e&&n(1,i=e.lastSelectionUpdate)},[s,i,o,c,async()=>{const e=(await chrome.tabs.query({active:!0,currentWindow:!0}))[0];return await chrome.tabs.create({index:e.index+1})},async()=>{const e=await chrome.tabs.query({currentWindow:!0});if(e.filter((e=>e.groupId>-1)).length>0)n(3,c=!0);else{let t=e.map((e=>e.id));await chrome.tabs.update(t[0],{active:!0}),await chrome.tabs.group({tabIds:t})}},r,()=>n(3,c=!1)]}class Bw extends we{constructor(e){super(),ve(this,e,Pw,Mw,o,{tabs:0,selectedTabs:6,lastSelectionUpdate:1})}}function Fw(e,t,n){const s=e.slice();return s[23]=t[n],s}function Vw(t){let n,s,r=t[0],i=Kw(t);return{c(){i.c(),n=T()},m(e,t){i.m(e,t),v(e,n,t),s=!0},p(t,s){1&s&&o(r,r=t[0])?(re(),ae(i,1,1,e),ie(),i=Kw(t),i.c(),oe(i,1),i.m(n.parentNode,n)):i.p(t,s)},i(e){s||(oe(i),s=!0)},o(e){ae(i),s=!1},d(e){e&&w(n),i.d(e)}}}function $w(e){let t,n;function s(...t){return e[13](e[23],...t)}return t=new st({props:{group:e[3][e[23].groupId],lastGroupUpdate:e[7],isCollapsed:e[9].includes(e[23].groupId),tabs:e[2].filter(s)}}),t.$on("groupSaved",e[14]),t.$on("openGroupInFullScreen",e[15]),{c(){pe(t.$$.fragment)},m(e,s){ge(t,e,s),n=!0},p(n,r){e=n;const i={};12&r&&(i.group=e[3][e[23].groupId]),128&r&&(i.lastGroupUpdate=e[7]),4&r&&(i.isCollapsed=e[9].includes(e[23].groupId)),4&r&&(i.tabs=e[2].filter(s)),t.$set(i)},i(e){n||(oe(t.$$.fragment,e),n=!0)},o(e){ae(t.$$.fragment,e),n=!1},d(e){me(t,e)}}}function jw(e){let t,n;return t=new Xt({props:{tab:e[23],group:e[3][e[23].groupId],selectedTabs:e[4],lastSelectionUpdate:e[1],dragoverItem:e[8]}}),t.$on("updateSelection",e[16]),t.$on("tabBookmarkAdded",e[17]),{c(){pe(t.$$.fragment)},m(e,s){ge(t,e,s),n=!0},p(e,n){const s={};4&n&&(s.tab=e[23]),12&n&&(s.group=e[3][e[23].groupId]),16&n&&(s.selectedTabs=e[4]),2&n&&(s.lastSelectionUpdate=e[1]),t.$set(s)},i(e){n||(oe(t.$$.fragment,e),n=!0)},o(e){ae(t.$$.fragment,e),n=!1},d(e){me(t,e)}}}function Gw(e,t){let n,s,r,i,o=t[23].groupId>-1&&t[6][t[23].groupId]==t[23].index&&t[3][t[23].groupId]&&$w(t),a=!t[3][t[23].groupId]?.collapsed&&jw(t);return{key:e,first:null,c(){n=T(),o&&o.c(),s=E(),a&&a.c(),r=T(),this.first=n},m(e,t){v(e,n,t),o&&o.m(e,t),v(e,s,t),a&&a.m(e,t),v(e,r,t),i=!0},p(e,n){(t=e)[23].groupId>-1&&t[6][t[23].groupId]==t[23].index&&t[3][t[23].groupId]?o?(o.p(t,n),76&n&&oe(o,1)):(o=$w(t),o.c(),oe(o,1),o.m(s.parentNode,s)):o&&(re(),ae(o,1,1,(()=>{o=null})),ie()),t[3][t[23].groupId]?.collapsed?a&&(re(),ae(a,1,1,(()=>{a=null})),ie()):a?(a.p(t,n),12&n&&oe(a,1)):(a=jw(t),a.c(),oe(a,1),a.m(r.parentNode,r))},i(e){i||(oe(o),oe(a),i=!0)},o(e){ae(o),ae(a),i=!1},d(e){e&&w(n),o&&o.d(e),e&&w(s),a&&a.d(e),e&&w(r)}}}function Kw(e){let t,n,s=[],r=new Map,i=e[2];const o=e=>e[23].id+""+e[23].index+e[23].updated;for(let t=0;t<i.length;t+=1){let n=Fw(e,i,t),a=o(n);r.set(a,s[t]=Gw(a,n))}return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=T()},m(e,r){for(let t=0;t<s.length;t+=1)s[t]&&s[t].m(e,r);v(e,t,r),n=!0},p(e,n){990&n&&(i=e[2],re(),s=de(s,n,o,1,e,i,r,t.parentNode,he,Gw,t,Fw),ie())},i(e){if(!n){for(let e=0;e<i.length;e+=1)oe(s[e]);n=!0}},o(e){for(let e=0;e<s.length;e+=1)ae(s[e]);n=!1},d(e){for(let t=0;t<s.length;t+=1)s[t].d(e);e&&w(t)}}}function Qw(e){let t,n,s=e[5]&&Vw(e);return{c(){s&&s.c(),t=T()},m(e,r){s&&s.m(e,r),v(e,t,r),n=!0},p(e,[n]){e[5]?s?(s.p(e,n),32&n&&oe(s,1)):(s=Vw(e),s.c(),oe(s,1),s.m(t.parentNode,t)):s&&(re(),ae(s,1,1,(()=>{s=null})),ie())},i(e){n||(oe(s),n=!0)},o(e){ae(s),n=!1},d(e){s&&s.d(e),e&&w(t)}}}function qw(e,t,n){let s,r=F(),{tabs:i}=t,{groups:o}=t,{lastUpdatedTab:a}=t,{lastUpdate:c}=t,{lastSelectionUpdate:l}=t,{searchResults:u=[]}=t,{selectedTabs:h=[]}=t,{searchText:d}=t;B((()=>{g(),n(5,s=!0)}));let f={},p={};const g=()=>{n(6,f={}),p={},i.sort(((e,t)=>e.index-t.index));for(const e of i)e.groupId>-1&&null==f[e.groupId]&&n(6,f[e.groupId]=e.index,f)};let m=Date.now();return e.$$set=e=>{"tabs"in e&&n(2,i=e.tabs),"groups"in e&&n(3,o=e.groups),"lastUpdatedTab"in e&&n(10,a=e.lastUpdatedTab),"lastUpdate"in e&&n(0,c=e.lastUpdate),"lastSelectionUpdate"in e&&n(1,l=e.lastSelectionUpdate),"searchResults"in e&&n(11,u=e.searchResults),"selectedTabs"in e&&n(4,h=e.selectedTabs),"searchText"in e&&n(12,d=e.searchText)},e.$$.update=()=>{1025&e.$$.dirty&&((()=>{i.sort(((e,t)=>e.index-t.index));let e=[],t=[];n(6,f={}),p={};for(const s of i)e.includes(s.index)?(t.push(s.index),r("foundDuplicates")):e.push(s.index),s.groupId>-1&&null==f[s.groupId]?n(6,f[s.groupId]=s.index,f):s.groupId>-1&&(p[s.groupId]=s.index)})(),g())},[c,l,i,o,h,s,f,m,undefined,[],a,u,d,(e,t)=>t.groupId==e.groupId,function(t){V.call(this,e,t)},function(t){V.call(this,e,t)},function(t){V.call(this,e,t)},function(t){V.call(this,e,t)}]}class Ww extends we{constructor(e){super(),ve(this,e,qw,Qw,o,{tabs:2,groups:3,lastUpdatedTab:10,lastUpdate:0,lastSelectionUpdate:1,searchResults:11,selectedTabs:4,searchText:12})}}function zw(e,t,n){const s=e.slice();return s[5]=t[n],s}function Hw(e){let t,n,s,r,i,o,a,l,u,h=e[5].title+"";function d(){return e[3](e[5])}return{c(){var l;t=b("div"),n=b("img"),r=E(),i=b("span"),o=I(h),a=E(),k(n,"class",(null==(l=e[5].icon?"icon":"")?"":l)+" svelte-ndqqf8"),c(n.src,s=e[5].icon??e[5].iconUrl)||k(n,"src",s),k(n,"alt",""),k(t,"class","menu-item svelte-ndqqf8")},m(e,s){v(e,t,s),g(t,n),g(t,r),g(t,i),g(i,o),g(t,a),l||(u=C(t,"mousedown",d),l=!0)},p(t,n){e=t},d(e){e&&w(t),l=!1,u()}}}function Jw(e){let t,n,s,r,i,o,a=e[1],c=[];for(let t=0;t<a.length;t+=1)c[t]=Hw(zw(e,a,t));return{c(){t=b("div");for(let e=0;e<c.length;e+=1)c[e].c();k(t,"class","menu svelte-ndqqf8")},m(n,s){v(n,t,s);for(let e=0;e<c.length;e+=1)c[e]&&c[e].m(t,null);r=!0,i||(o=C(t,"mouseleave",e[4]),i=!0)},p(e,[n]){if(6&n){let s;for(a=e[1],s=0;s<a.length;s+=1){const r=zw(e,a,s);c[s]?c[s].p(r,n):(c[s]=Hw(r),c[s].c(),c[s].m(t,null))}for(;s<c.length;s+=1)c[s].d(1);c.length=a.length}},i(e){r||(W((()=>{r&&(s&&s.end(1),n=le(t,Re,{}),n.start())})),r=!0)},o(e){n&&n.invalidate(),s=ue(t,Re,{}),r=!1},d(e){e&&w(t),y(c,e),e&&s&&s.end(),i=!1,o()}}}function Xw(e,t,n){let{showMenu:s}=t;const r=[{iconUrl:"https://www.google.com/images/icons/product/chrome_web_store-32.png",title:"Webstore Page",url:"https://chrome.google.com/webstore/detail/window-manager/npaccibollphhdfghmmlbmpljhdiaehh"},{icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABCNJREFUaEPtmXuoT1kUxz+XDDLGKzJDBnlE/lEIGQ3l0SAl5f2H5z9KeUbKH/zjzZQoGlODaZCSZ8gj7/KYf5jE1ESZoUQexSjN9NXet922z/mde84+F3VX/brds/dee33XXnuttdeqojz6Euhi2P8JvCpjq6oSmPYDVgIjPN4ngOXAjZh7xgYwDDgKNEgQ8g0wCjgTC0RMAE2Bh4D+ptEzoB3wOgaILAC+BToA9Sts+AOw2JnzBFhh/l8FtHLGVgMyqTR6BzwA7qdNSgMwBPgJ6JRTU4OBC2ateOU1m7+AGcC5kBxJAAYCl3IKbpf5vP8ryM9VSDWrJAB3ga4FN5wA7DM8pgK7CvLTSXT2eYQAtAEeF9zMLt9r7s74SPzaG0eRegKDHNu1E08CVyIJkZWNzFhu2aXhwCn3Q+gEvgfOegsXARuy7hxpnvZc5/EaAxypAxBJw5XY1J2Aq6GFwMaAysYCvSupssL4dd+uzfyoJxACMAvYUVB4u1yR9ueA44h2iUMAZgPbIwGYCewsE8ACYFNJJnQTOBTgHdWE6uJADlOrOwFXaZ+9CZUZB6Soy4ASRl9ppbrRmHFAiaJOuVYBxIwDpQOYD2wuKQ68NXHgVoB/H2AiMB1oCeROp5MCWQ7vmGtJI1MsO5/3PVBbAPRkbA38ngCzsV9PyvoiS/JCudTpLZoDjAb6Am3NmCp4SjEuAqohqRgWpKwAyogDLYDfAL1z0+gfYBxwNTQpK4AkE1KdU5qrRLeB/c4kXc7DjsbtkAphMh9dXFVHXFoKrPE3ygog5IVqEgcksK1KNwP+AL7xhHkJfGW+zQW2BLSi8swB93tWAKETSNrE31c10JHOx1+AaQHh/jZFXw1NAn4NzNFd6OHWrYoAaALMAxpWsB+VQfRsFMmPh3J/jWUBoHnHTIn+PcOsAGJd4tPA0ATAuqzWrCYDe1IU09FWrWsbgEqW/uW0ctYEgNyuGimZTyBGIFN/QD0D0UFA7+CnFczPHe7vlDeX2Kpd1hOIAUANv3tGomUmQNVA/vdTpQApQu5UbjV4AgNMfu4ylycJBpIKEqjLou6MJblKdS+leQlgAWn8X0fDMrOezrp6JqFTmV6kOKHKdxCAfPHzmqomZb6ySJsKKBn7LmFuVi+k5d0s+KQGx3HPdxfBo3arfW39aFxviF9WAOo3VzcSkwCoi6iQrsywKK13mn/dgTsFT0AmaZuHQROy/HVZ9IhR+FY+npdc9yge6mSuDTB7BHxtvk8BdgfmKKfq5X7P0mbVfHVLvsiLwKTGL5z16vbILfqkLv81I7xA+CThBaKasgIoIHtwqVLpbYAagT6pL6zetEv6pvzogzbXxwJghVOer1508wQNqTW71ZhdsLP/sQFYuWU6Srn1Exi9xmRK+qVG608FQG4T/R/iYfkx+v9TdwAAAABJRU5ErkJggg==",title:"Request Feature",url:"https://docs.google.com/forms/d/e/1FAIpQLSdLZCqil9YIDLXFSZoQGdpque4-tzLjL1cpoHCIR54ZJuu97A/viewform?usp=sf_link"},{icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABGVJREFUaEPtmXnIj1kUxz+vP2RkxlL2NIbsGeugkLFmTZGtZoYkNU2ZLP+MCE2NPyxlSEpRamRPkqXGDDXW8seYyS7G0BBCTDOJ6Pt2f7pd93me+9znXXrznj9/zzn3nO89yz3n/Mqo4VRWw+2nFkB1e/C998BXwGXgXIQnmgDfASeB/RHy5SJFPLAOmGcUzwa25jCiEfAL0MvIrAEW5ZB/y1oEwG2gjaV0IbA2wIgGwM9Af4v3ADAxQPYdliIAvgE2OCeuBBab3z4AugGvTJj9B9QHjgKDLLm/gOHAjaoGIH3zPbeueG4F9HMM+hWoCwx0jP8cuBVjfNEcKOlU6KyOMOBf4yF5IJqKhFBJ6SRgC9Awwgp55UvgboRs4SqkGN8FjI9VbuTkgSFAlCeKeEDJOCrD+FJits/guwr0BJTouSgWgB6gHxI0bQf2AL8BDwxPM1N5pgNTEuR+BL7NZX3gQ9YH+NA6uA6wF9BjZNM/wBzgUIYRqvebgBYePpXdi3lApHlAD84poHvAgYpfhcCTAF6xNAZ+dx7CJFHl2Uzgfx9DGgDV8bOBBo0FDgfyltjGAQcDZRLPz/LAH0DbDCU7AcV2DClXJmcI3gGGAdfyekD8Sr6uluD3ThugTyOAYzHWA6M9nlPyLzXnvTTFIPH4vFXoOuCWRCXjfUvDXGA50NLRquZvhXn0Sp9aA7phm9RWfBJ6IXkBqE7Xsw5/CDR1lKlFUNPmIyW5Etimx56KFmxXMKPR+NpRrmHE7iz1WQNOpwQAyqlPnW+ngQHOb8F2BTMmADgBqJu0Se/GAkDh4dIST0wfN62EzRtsVxajKtBUKySWORb5AISGb4nPB0C5InoB7E6qQGJIA9AuYMioLADuJXSMKaNDzdyadqNVBWAMcMRnSFYI+dxrn1MVALaZVsJ7kVkAXCG3CiUBkMs1Vtqkfummx4pKTeIYAFqvzEqIu82AHjqbqhWAWl+1wDa5j5397bnTmuubzujinBEcGcGMRsFT4KMMZYpZzbk++gn4wvnghqXmCjf8EgtJCAB7oNEg4r6ymgPU29vUIeEhU7jY1Bs47/x2wZrM9A5oJokCoIHmjCdE3MPWWyvGNF2+bxuBrzOE1Nx9BqjveofSPKDVnwCEUA9AN5eHfLefJD8hafjJGmj+BD4OsEputjduASLll2PvR5Nk5IG+wKO8HhC/O9DoN+WAcsGlfaZ8PsuwXgswLcK0EHNJe1V1pyXSHJwaBSFJ7LNnBzDN80EPlbYOapt9pHW6Nhq+gUWT2OAQ19k8sQCaA1dS1ol/m+8KQenQWyHP2et42w7ddOeY7VwsAClXXGoH5E5keS9Rb4vWk/JAbioCQMqU4Bros1aHSYZpTh4JaLUYRUUBSKn+61oFzAC08A0hhYxWKvp/wVvfQw4RT0UAKOnSw6fpTUAU8+5W4h5wCdDuVLukrGoVhKEiAbgK5Q0lpv5i0lIq9+Y5BEFlAgjRX5inFkDhKyx4QI33wBvHb7sxb4NZNQAAAABJRU5ErkJggg==",title:"Report bug",url:"https://docs.google.com/forms/d/e/1FAIpQLSd1mztaIj3bvp0HvqMIbw1G0d_OXmbLYVRMqD8bsv-07WNt3g/viewform?usp=sf_link"}],i=e=>{e.url?chrome.tabs.create({url:e.url}):e.onClick&&e.onClick()};return e.$$set=e=>{"showMenu"in e&&n(0,s=e.showMenu)},[s,r,i,e=>i(e),()=>n(0,s=!1)]}class Yw extends we{constructor(e){super(),ve(this,e,Xw,Jw,o,{showMenu:0})}}function Zw(e){let t,n,s;function r(t){e[11](t)}let i={};return void 0!==e[2]&&(i.showMenu=e[2]),t=new Yw({props:i}),j.push((()=>fe(t,"showMenu",r))),{c(){pe(t.$$.fragment)},m(e,n){ge(t,e,n),s=!0},p(e,s){const r={};!n&&4&s&&(n=!0,r.showMenu=e[2],z((()=>n=!1))),t.$set(r)},i(e){s||(oe(t.$$.fragment,e),s=!0)},o(e){ae(t.$$.fragment,e),s=!1},d(e){me(t,e)}}}function ey(e){let t,n,s,i,o,a,l,u,h,d,f,p,m,A,y,I,T,S,R,D,N,U,x,_,O,L,M,P;function B(t){e[6](t)}let F={};void 0!==e[1]&&(F.searchText=e[1]),s=new _e({props:F}),j.push((()=>fe(s,"searchText",B)));let V=e[2]&&Zw(e);return{c(){t=b("div"),n=b("div"),pe(s.$$.fragment),o=E(),a=b("div"),l=b("img"),d=E(),f=b("div"),p=b("img"),y=E(),I=b("div"),T=b("img"),D=E(),N=b("div"),U=b("img"),O=E(),V&&V.c(),c(l.src,u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAf1JREFUaEPtmU0rRkEUx3/PN7CyJfYiSsqClY2UrMhGPoEoS2yRpaWUBUslJSVWbFD2CLGxki9A5+m5GtPca2bue+bUU0+38/Y/5z935sxtUHNp1Dx/0gJoA3oLKMI98GqK4wugHdgGpgpIPgpxBawDh2pMHwA9wF2BieuhlltAms99AFwD/SUCkNAzwL4PgCHgsuTkJfwOMO8DYBVYqQCAC2A0ACixE5l2QFopDvOUL815AKAWJHTAgnuBQlGRTPtAoFAeFJoAugA5Luui78RrFgkkqTwCb8BZgpL1GugGNoDJlEn5mC8CWzGG1gD2gFmf6BnZzAG7Bl9WAMaAk4wS8XXzBPQBH5oDKwBVOWkKfX9NXYAVgHNgxLd0GdrJS0GKqcr/BZD3KVOqrHc90w74zMwubJLkhbqqCAC9cLqO8ThtWgNlALApwAEwLYpqgnUC8EOzOgI4BWTPakrdANwAAyrHqgjAdDh8B56BY32BVBWAvpHFLuwAwOadl6ATtw+EDpjeUimLbTQPHQiLOCWvAoX+opDPlYk+PUmM6Jn6P2qe/so0zQNWG9lCwrVGSqY4mTvd9KkdkA938gGvTJGzzrhLAvrAstS62HLxkaVuB/Di4tA0cQ0Dm8Cgi6OUukeAUPjB1U/SyNgJyC9vuQU+fYPkPfP65mVtV3sA344ikzED24CtAAAAAElFTkSuQmCC")||k(l,"src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAf1JREFUaEPtmU0rRkEUx3/PN7CyJfYiSsqClY2UrMhGPoEoS2yRpaWUBUslJSVWbFD2CLGxki9A5+m5GtPca2bue+bUU0+38/Y/5z935sxtUHNp1Dx/0gJoA3oLKMI98GqK4wugHdgGpgpIPgpxBawDh2pMHwA9wF2BieuhlltAms99AFwD/SUCkNAzwL4PgCHgsuTkJfwOMO8DYBVYqQCAC2A0ACixE5l2QFopDvOUL815AKAWJHTAgnuBQlGRTPtAoFAeFJoAugA5Luui78RrFgkkqTwCb8BZgpL1GugGNoDJlEn5mC8CWzGG1gD2gFmf6BnZzAG7Bl9WAMaAk4wS8XXzBPQBH5oDKwBVOWkKfX9NXYAVgHNgxLd0GdrJS0GKqcr/BZD3KVOqrHc90w74zMwubJLkhbqqCAC9cLqO8ThtWgNlALApwAEwLYpqgnUC8EOzOgI4BWTPakrdANwAAyrHqgjAdDh8B56BY32BVBWAvpHFLuwAwOadl6ATtw+EDpjeUimLbTQPHQiLOCWvAoX+opDPlYk+PUmM6Jn6P2qe/so0zQNWG9lCwrVGSqY4mTvd9KkdkA938gGvTJGzzrhLAvrAstS62HLxkaVuB/Di4tA0cQ0Dm8Cgi6OUukeAUPjB1U/SyNgJyC9vuQU+fYPkPfP65mVtV3sA344ikzED24CtAAAAAElFTkSuQmCC"),k(l,"alt","Windows"),k(l,"class","svelte-115sxnb"),k(a,"class",h="action"+(e[0]==Ie.windows?" selected":"")+" svelte-115sxnb"),c(p.src,m="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAZ1JREFUaEPtmDsvBkEUhp+vFz9BqVTT0RCRECUtjUhcGtcChWvjkoiGllJIRGjoqJVKP0H8ABnZTxQ2Z/fsbN5sMpNsN3ve93nPzuzutGj4aDXcPwlA3cHUgdSBiglYj1A/0AOMV9Tx3n4NvAHPeQUsgF1gxase6b49YNUL8ASELihHSH/ACzAHHCvdA/PAiRcgpD8E9IogXoGHKmtA5Lu4rLWIi1cSzUwAouB/ZYt2QLWV5r7A2gQWwDBwBHSLkn4HFoB77zZ6mBUQ+f+RDQEuegEugQmle+AKmPQCTAHnYoBp4MIL0An0ZZeC4wUI16cXQGG6lKa1C5UqppicABSp/9W0OtCR/VIOiow+Zr+UX95FvATsi8y3ZZeBAy/ADTAqBrgFxrwAa8C2GGAd2PECjACzQPioU4zwEXcK3HkBFKZLaVq7UKliiskJQJF6mReZ2p+pbz1CXdnZ6IxZqZ4JZ0A4G/3w7kKbwEY93gpX3QKCj3+H1YF0uFs45/yJ6XA3Qoj1lbDWQH3KkSongEhBusukDriji3Rj4zvwDVx8MTEx+quFAAAAAElFTkSuQmCC")||k(p,"src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAZ1JREFUaEPtmDsvBkEUhp+vFz9BqVTT0RCRECUtjUhcGtcChWvjkoiGllJIRGjoqJVKP0H8ABnZTxQ2Z/fsbN5sMpNsN3ve93nPzuzutGj4aDXcPwlA3cHUgdSBiglYj1A/0AOMV9Tx3n4NvAHPeQUsgF1gxase6b49YNUL8ASELihHSH/ACzAHHCvdA/PAiRcgpD8E9IogXoGHKmtA5Lu4rLWIi1cSzUwAouB/ZYt2QLWV5r7A2gQWwDBwBHSLkn4HFoB77zZ6mBUQ+f+RDQEuegEugQmle+AKmPQCTAHnYoBp4MIL0An0ZZeC4wUI16cXQGG6lKa1C5UqppicABSp/9W0OtCR/VIOiow+Zr+UX95FvATsi8y3ZZeBAy/ADTAqBrgFxrwAa8C2GGAd2PECjACzQPioU4zwEXcK3HkBFKZLaVq7UKliiskJQJF6mReZ2p+pbz1CXdnZ6IxZqZ4JZ0A4G/3w7kKbwEY93gpX3QKCj3+H1YF0uFs45/yJ6XA3Qoj1lbDWQH3KkSongEhBusukDriji3Rj4zvwDVx8MTEx+quFAAAAAElFTkSuQmCC"),k(p,"alt","Tabs"),k(p,"class","svelte-115sxnb"),k(f,"class",A="action"+(e[0]==Ie.tabs?" selected":"")+" svelte-115sxnb"),c(T.src,S="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAY1JREFUaEPtWVEWAiEIpJNVJ6tOVp2s3rwX5SKKspvbvvBXUUaHUWFHvnbwmXVb3SyLnTWg0H8mopPT1mN2ISKsmbWtAIDjKogtAQCIIxFNaLU1AHAeIN7NCwBBPCKQZZwtBsATiB6bhzD6PwBMk2/SBbta0vtZJ3AdxHNmiSaTbgCjnWcQUiZdAEbfsmmcyiB1AVhr9xlIKu2LAZhcHh49LNhA56VApDRaDID3wrOwanQNAFoMxAl0/CuCQkEhS3qS/lAhTV2CQkGhz/8gnhLaC7GDIebQUKFQIZMk9QFBoaBQUCivM8R/wPuYQ3YBWYb7i1ZqRUVQ7idUiB3X8qfF0lACUqbQh1Go5riM7RKQ4SfQ47QmUACCxvQaBgDHqmXR5qgogxlCoVZHkZxFEM8pwaaXqxZXZpGvNzuNCbGbskjBNOkBk5WQrJ3TnhJADSm1Wslxza51UyzVyuYupQxrIHoclwvWgHQ7j8mtnGd6GdVqWdZpyf60TLsvULBpTgtA0yRrDgoAa+4+1n4CACHJMeXNlhcAAAAASUVORK5CYII=")||k(T,"src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAY1JREFUaEPtWVEWAiEIpJNVJ6tOVp2s3rwX5SKKspvbvvBXUUaHUWFHvnbwmXVb3SyLnTWg0H8mopPT1mN2ISKsmbWtAIDjKogtAQCIIxFNaLU1AHAeIN7NCwBBPCKQZZwtBsATiB6bhzD6PwBMk2/SBbta0vtZJ3AdxHNmiSaTbgCjnWcQUiZdAEbfsmmcyiB1AVhr9xlIKu2LAZhcHh49LNhA56VApDRaDID3wrOwanQNAFoMxAl0/CuCQkEhS3qS/lAhTV2CQkGhz/8gnhLaC7GDIebQUKFQIZMk9QFBoaBQUCivM8R/wPuYQ3YBWYb7i1ZqRUVQ7idUiB3X8qfF0lACUqbQh1Go5riM7RKQ4SfQ47QmUACCxvQaBgDHqmXR5qgogxlCoVZHkZxFEM8pwaaXqxZXZpGvNzuNCbGbskjBNOkBk5WQrJ3TnhJADSm1Wslxza51UyzVyuYupQxrIHoclwvWgHQ7j8mtnGd6GdVqWdZpyf60TLsvULBpTgtA0yRrDgoAa+4+1n4CACHJMeXNlhcAAAAASUVORK5CYII="),k(T,"alt","Saved"),k(T,"class","svelte-115sxnb"),k(I,"class",R="action"+(e[0]==Ie.saved?" selected":"")+" svelte-115sxnb"),c(U.src,x=Pe)||k(U,"src",x),k(U,"alt","More"),k(U,"class","svelte-115sxnb"),k(N,"class",_="action more"+(e[2]?" selected":"")+" svelte-115sxnb"),k(n,"class","container svelte-115sxnb"),k(t,"class","header svelte-115sxnb")},m(r,i){v(r,t,i),g(t,n),ge(s,n,null),g(n,o),g(n,a),g(a,l),g(n,d),g(n,f),g(f,p),g(n,y),g(n,I),g(I,T),g(n,D),g(n,N),g(N,U),g(t,O),V&&V.m(t,null),L=!0,M||(P=[C(a,"mousedown",e[7]),C(f,"mousedown",e[8]),C(I,"mousedown",e[9]),C(N,"mousedown",e[10])],M=!0)},p(e,[n]){const r={};!i&&2&n&&(i=!0,r.searchText=e[1],z((()=>i=!1))),s.$set(r),(!L||1&n&&h!==(h="action"+(e[0]==Ie.windows?" selected":"")+" svelte-115sxnb"))&&k(a,"class",h),(!L||1&n&&A!==(A="action"+(e[0]==Ie.tabs?" selected":"")+" svelte-115sxnb"))&&k(f,"class",A),(!L||1&n&&R!==(R="action"+(e[0]==Ie.saved?" selected":"")+" svelte-115sxnb"))&&k(I,"class",R),(!L||4&n&&_!==(_="action more"+(e[2]?" selected":"")+" svelte-115sxnb"))&&k(N,"class",_),e[2]?V?(V.p(e,n),4&n&&oe(V,1)):(V=Zw(e),V.c(),oe(V,1),V.m(t,null)):V&&(re(),ae(V,1,1,(()=>{V=null})),ie())},i(e){L||(oe(s.$$.fragment,e),oe(V),L=!0)},o(e){ae(s.$$.fragment,e),ae(V),L=!1},d(e){e&&w(t),me(s),V&&V.d(),M=!1,r(P)}}}function ty(e,t,n){let s,{view:r}=t,{windowCount:i}=t,{tabCount:o}=t,{showSearch:a}=t,{searchText:c}=t;return e.$$set=e=>{"view"in e&&n(0,r=e.view),"windowCount"in e&&n(3,i=e.windowCount),"tabCount"in e&&n(4,o=e.tabCount),"showSearch"in e&&n(5,a=e.showSearch),"searchText"in e&&n(1,c=e.searchText)},[r,c,s,i,o,a,function(e){c=e,n(1,c)},()=>n(0,r=Ie.windows),()=>n(0,r=Ie.tabs),()=>n(0,r=Ie.saved),()=>n(2,s=!0),function(e){s=e,n(2,s)}]}class ny extends we{constructor(e){super(),ve(this,e,ty,ey,o,{view:0,windowCount:3,tabCount:4,showSearch:5,searchText:1})}}var sy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAuFJREFUaEPtmdurTVEUxn+nlJR7SkrIJSVSEpFESqQjuT4oefKovHrBi7+D8uCWRC4pkUjKUS4pJXIpESFKyoM+jZ115h5r77nWXmeveWrNWi9rjjnG931zzjXHmGuAUd4GRjl+GgJ1z2DMDMwC5hYEeruD/bqCvmSe668TgV3AIWBVyYDHgsDzgUfAhBL+NET+joZj8wjsAU6XDNQaJtXWZ3xcBTb36LMNr0dgLPC8xLIJsV0GtmZe3gLKLJ+sXwkybDl5BOYBL3tU6pstvxMZP/uAkz36jSIglaRWtmn9FWlnbRbDMXOA/R0cLQK09/JaTwTaNlARRl1stRLOA9u72CVJYAxwDtgWIUhyBPTBEPhBB7zeh8spKQLjDPwWB/wF4ClwJOhLhsB4A7/JAX/R9oLAJ0lgEqCv1EYHvM4ObeQ/duomR2CKKb/BAX8F2AH8tj599ZIiMM2Uz6YXLR7XTflfGWJJEZhu4Nc6yt8w5X8GfckQmGHg1zjgbxr4705fEgRmGngvJVe6ojX/NecAU9rxOtP3A5gY2nrJXF4uVDSVmA2cAVY6AO8Y+M9dTt8DgJ5PwEEvyRwpAqrgBH65A/AusBP4GJE6dDUZCQKqvAR+mRP9vin/oSuySIOqCSw08Eud+A9M+feR2KLMqiSgXF7KL3YiPzTwb6JQ/TdS7aCTWXV0WGP/s6qSwClgrwNQhbyyylcFwUuQe8BkGzfk7akqCXwBpgYgH5vyZUrUvp8Dl4K8/pmBf1FQ+ZZ53wkooNLjBcA14HhOXRzLp+8EYoHF2jUEskq513qxUpa0a2agmYGSS6e2z2iPeNuGN3sg3ANVKxzjr9SthH4pFc0aY8BUYaMq723WUd4fmifAkioiVuhDxdDq0F8eAaW/uj1Lqe22S7FhmDr95FthCZl3i9ZPYqojDlux1BY35jerrjf01NHeASpBW9eNpQjUATw6ZswMRDurw7AhUIfq2Zh/AW2FxDFkcNbsAAAAAElFTkSuQmCC";function ry(t){return{c:e,m:e,d:e}}function iy(t){return{c:e,m:e,d:e}}function oy(t){let n,s,i,o,a,l,u,h;return{c(){n=b("div"),s=b("img"),o=E(),a=b("img"),c(s.src,i=Pe)||k(s,"src",i),k(s,"alt","More"),k(s,"class","svelte-16d66wk"),c(a.src,l=sy)||k(a,"src",l),k(a,"alt","Open"),k(a,"class","svelte-16d66wk"),k(n,"class","actions svelte-16d66wk")},m(e,r){v(e,n,r),g(n,s),g(n,o),g(n,a),u||(h=[C(s,"mousedown",t[2]),C(a,"mousedown",t[3])],u=!0)},p:e,d(e){e&&w(n),u=!1,r(h)}}}function ay(t){let n,s,i,o,a,c,l,u,h,d=t[0].title+"",f=t[0].size&&ry(),p=t[0].queuSize&&iy(),m=t[1]&&oy(t);return{c(){n=b("div"),s=b("div"),i=I(d),o=E(),a=b("div"),f&&f.c(),c=E(),p&&p.c(),l=E(),m&&m.c(),k(s,"class","title svelte-16d66wk"),k(a,"class","counts"),k(n,"class","workspace svelte-16d66wk"),D(n,"background-color",Be[t[0].color??"grey"])},m(e,r){v(e,n,r),g(n,s),g(s,i),g(n,o),g(n,a),f&&f.m(a,null),g(a,c),p&&p.m(a,null),g(n,l),m&&m.m(n,null),u||(h=[C(s,"mousedown",t[4]),C(n,"mouseenter",t[5]),C(n,"mouseleave",t[6])],u=!0)},p(e,[t]){1&t&&d!==(d=e[0].title+"")&&S(i,d),e[0].size?f||(f=ry(),f.c(),f.m(a,c)):f&&(f.d(1),f=null),e[0].queuSize?p||(p=iy(),p.c(),p.m(a,null)):p&&(p.d(1),p=null),e[1]?m?m.p(e,t):(m=oy(e),m.c(),m.m(n,null)):m&&(m.d(1),m=null),1&t&&D(n,"background-color",Be[e[0].color??"grey"])},i:e,o:e,d(e){e&&w(n),f&&f.d(),p&&p.d(),m&&m.d(),u=!1,r(h)}}}function cy(e,t,n){let s,{workspace:r}=t;return e.$$set=e=>{"workspace"in e&&n(0,r=e.workspace)},[r,s,()=>{},async()=>{let e=[];for(const t of r.tabs)e.push(await chrome.tabs.create({url:t.url}));const t=await chrome.tabs.group({tabIds:e.map((e=>e.id))});await chrome.tabGroups.update(t,{title:r.title})},()=>console.log(r),()=>n(1,s=!0),()=>n(1,s=!1)]}class ly extends we{constructor(e){super(),ve(this,e,cy,ay,o,{workspace:0})}}function uy(t){let n;return{c(){n=b("div"),k(n,"class","time-ago")},m(e,t){v(e,n,t)},p:e,d(e){e&&w(n)}}}function hy(t){let n,s,r,i,o,a;return{c(){n=b("div"),s=b("div"),r=b("img"),c(r.src,i=sy)||k(r,"src",i),k(r,"alt","Open Folder"),k(r,"class","svelte-1thwdpj"),k(s,"class","action svelte-1thwdpj"),k(n,"class","actions")},m(e,i){v(e,n,i),g(n,s),g(s,r),o||(a=C(s,"mousedown",t[2]),o=!0)},p:e,d(e){e&&w(n),o=!1,a()}}}function dy(t){let n,s,i,o,a,l,u,h,d,f=t[0].title+"";function p(e,t){return e[1]?hy:uy}let m=p(t),A=m(t);return{c(){n=b("div"),s=b("img"),o=E(),a=b("div"),l=I(f),u=E(),A.c(),k(s,"class","folder-icon svelte-1thwdpj"),c(s.src,i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAWhJREFUaEPtmbFKA0EURU8+wdJGzQcYEMFaSaul9sGv0A/Q0tpf0E6wlJhKEBG1SxPULxCs7GSEhWEZl7e7c9GBtxDIhjfnzb03TDFvQOHPoPD94wL+OkFP4D8nsAaET5tnAby3WdC3NvUX2gJOgHFH+A1wDNx3XN9qWV3APnDRipAu/gQOgcsMrEZEXcALsJ6x6YFaRCxgBXjLuPkKdZuBeQXMgMc6KxawDUwzNFMhvoAz4ChuUJKAat/hgDitXkoUEPa+BHyEL6UK2ACeShawA/wcDqUm4AJUR6WV6wlYnVLVeQIqZ61cT8DqlKrOE1A5a+V6AlanVHWegMpZK9cTsDqlqvMEVM5auZ6A1SlVXTIB1dWiQsQQeK3fSoT3B2BT0TEj8xrYTd3Mhd9GwHPGZgrUajxESQ04loFzYE/RvQfzDpgA85jRNOTrMmLqsb/Gpb+OrnxKqbLcyvUErE6p6jwBlbNW7jdlqU4x31uhmQAAAABJRU5ErkJggg==")||k(s,"src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAWhJREFUaEPtmbFKA0EURU8+wdJGzQcYEMFaSaul9sGv0A/Q0tpf0E6wlJhKEBG1SxPULxCs7GSEhWEZl7e7c9GBtxDIhjfnzb03TDFvQOHPoPD94wL+OkFP4D8nsAaET5tnAby3WdC3NvUX2gJOgHFH+A1wDNx3XN9qWV3APnDRipAu/gQOgcsMrEZEXcALsJ6x6YFaRCxgBXjLuPkKdZuBeQXMgMc6KxawDUwzNFMhvoAz4ChuUJKAat/hgDitXkoUEPa+BHyEL6UK2ACeShawA/wcDqUm4AJUR6WV6wlYnVLVeQIqZ61cT8DqlKrOE1A5a+V6AlanVHWegMpZK9cTsDqlqvMEVM5auZ6A1SlVXTIB1dWiQsQQeK3fSoT3B2BT0TEj8xrYTd3Mhd9GwHPGZgrUajxESQ04loFzYE/RvQfzDpgA85jRNOTrMmLqsb/Gpb+OrnxKqbLcyvUErE6p6jwBlbNW7jdlqU4x31uhmQAAAABJRU5ErkJggg=="),k(s,"alt",""),k(a,"class","title svelte-1thwdpj"),k(n,"class","folder svelte-1thwdpj")},m(e,r){v(e,n,r),g(n,s),g(n,o),g(n,a),g(a,l),g(n,u),A.m(n,null),h||(d=[C(n,"mouseenter",t[3]),C(n,"mouseleave",t[4])],h=!0)},p(e,[t]){1&t&&f!==(f=e[0].title+"")&&S(l,f),m===(m=p(e))&&A?A.p(e,t):(A.d(1),A=m(e),A&&(A.c(),A.m(n,null)))},i:e,o:e,d(e){e&&w(n),A.d(),h=!1,r(d)}}}function fy(e,t,n){let s,{folder:r}=t;return e.$$set=e=>{"folder"in e&&n(0,r=e.folder)},[r,s,()=>{},()=>n(1,s=!0),()=>n(1,s=!1)]}class py extends we{constructor(e){super(),ve(this,e,fy,dy,o,{folder:0})}}function gy(e){let t;function n(e,t){return e[0].length>0?Ay:my}let s=n(e),r=s(e);return{c(){t=b("div"),r.c(),k(t,"class","counts svelte-1ox9f5r")},m(e,n){v(e,t,n),r.m(t,null)},p(e,i){s===(s=n(e))&&r?r.p(e,i):(r.d(1),r=s(e),r&&(r.c(),r.m(t,null)))},d(e){e&&w(t),r.d()}}}function my(e){let t,n,s,r,i,o,a=e[1].length+"",c=e[1].length>1?"s":"";return{c(){t=b("div"),n=I(a),s=E(),r=b("span"),i=I("Recent Folder"),o=I(c),k(t,"class","count svelte-1ox9f5r")},m(e,a){v(e,t,a),g(t,n),v(e,s,a),v(e,r,a),g(r,i),g(r,o)},p(e,t){2&t&&a!==(a=e[1].length+"")&&S(n,a),2&t&&c!==(c=e[1].length>1?"s":"")&&S(o,c)},d(e){e&&w(t),e&&w(s),e&&w(r)}}}function Ay(e){let t,n,s,r,i,o,a=e[0].length+"",c=e[0].length>1?"s":"";return{c(){t=b("div"),n=I(a),s=E(),r=b("span"),i=I("Workspace"),o=I(c),k(t,"class","count svelte-1ox9f5r")},m(e,a){v(e,t,a),g(t,n),v(e,s,a),v(e,r,a),g(r,i),g(r,o)},p(e,t){1&t&&a!==(a=e[0].length+"")&&S(n,a),1&t&&c!==(c=e[0].length>1?"s":"")&&S(o,c)},d(e){e&&w(t),e&&w(s),e&&w(r)}}}function vy(t){let n,s,r,i,o,a,l,u,h,d=(t[0].length>0||t[1].length>0)&&gy(t);return{c(){n=b("div"),s=b("div"),r=b("img"),o=E(),d&&d.c(),a=E(),l=b("div"),u=b("img"),c(r.src,i=On)||k(r,"src",i),k(r,"alt","Explore"),k(r,"class","svelte-1ox9f5r"),k(s,"class","action svelte-1ox9f5r"),c(u.src,h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAVxJREFUaEPtmesOwjAIhdmTqU+mPpn6ZJoT16XrWEov9JLQ3w3wcWCl60KTr2Xy+MkAeitoCoyuwDUxwHfi/uLtXAkh6DsRpQbvggHEk4iawIQACPpVnJa/AUA8Ktk6NRMCIPjczHNO1CFCgK9CxmqU0mctyYMtH6Bm+SjkgS/L2QAOvTUjACC2uGcFuLnPtAFodWvErinQKfGb264KuMOo5MTvBoDg4RwLcxKGxpzVDSCcjXJHFwPIkZ0bsYdXACXjL/SAP1H694VLwijfpIT8hpUqJm3sJgC5lxlJWTUBQNY3R0IJhlJAcsWUZJuz00yB0LmdA2tGhlCg5A7eDcBvbGnDDtUDwo9RdFtXBaLRCTYYgCBJqltYBeAx92BRjZYxfgpQ8mVoBbEbErn3gdFV2M1XGg8cWkqw43nska/kz0FNkNNf9DGAmkGo2DIAlbQmGDUFEpKlsnV6BX6F92Qx/FW4dwAAAABJRU5ErkJggg==")||k(u,"src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAVxJREFUaEPtmesOwjAIhdmTqU+mPpn6ZJoT16XrWEov9JLQ3w3wcWCl60KTr2Xy+MkAeitoCoyuwDUxwHfi/uLtXAkh6DsRpQbvggHEk4iawIQACPpVnJa/AUA8Ktk6NRMCIPjczHNO1CFCgK9CxmqU0mctyYMtH6Bm+SjkgS/L2QAOvTUjACC2uGcFuLnPtAFodWvErinQKfGb264KuMOo5MTvBoDg4RwLcxKGxpzVDSCcjXJHFwPIkZ0bsYdXACXjL/SAP1H694VLwijfpIT8hpUqJm3sJgC5lxlJWTUBQNY3R0IJhlJAcsWUZJuz00yB0LmdA2tGhlCg5A7eDcBvbGnDDtUDwo9RdFtXBaLRCTYYgCBJqltYBeAx92BRjZYxfgpQ8mVoBbEbErn3gdFV2M1XGg8cWkqw43nska/kz0FNkNNf9DGAmkGo2DIAlbQmGDUFEpKlsnV6BX6F92Qx/FW4dwAAAABJRU5ErkJggg=="),k(u,"alt",""),k(u,"class","svelte-1ox9f5r"),k(l,"class","action svelte-1ox9f5r"),k(n,"class","footer svelte-1ox9f5r")},m(e,t){v(e,n,t),g(n,s),g(s,r),g(n,o),d&&d.m(n,null),g(n,a),g(n,l),g(l,u)},p(e,[t]){e[0].length>0||e[1].length>0?d?d.p(e,t):(d=gy(e),d.c(),d.m(n,a)):d&&(d.d(1),d=null)},i:e,o:e,d(e){e&&w(n),d&&d.d()}}}function wy(e,t,n){let{workspaces:s}=t,{recentFolders:r}=t;return e.$$set=e=>{"workspaces"in e&&n(0,s=e.workspaces),"recentFolders"in e&&n(1,r=e.recentFolders)},[s,r]}class yy extends we{constructor(e){super(),ve(this,e,wy,vy,o,{workspaces:0,recentFolders:1})}}function by(e,t,n){const s=e.slice();return s[12]=t[n],s}function Iy(e,t,n){const s=e.slice();return s[15]=t[n],s}function Ey(e){let t,n,s,r,i,o,a=e[0],c=[];for(let t=0;t<a.length;t+=1)c[t]=Ty(Iy(e,a,t));const l=e=>ae(c[e],1,1,(()=>{c[e]=null}));let u=e[2].length>0&&Cy(e);return i=new yy({props:{workspaces:e[0],recentFolders:e[2]}}),{c(){t=b("div"),n=b("div");for(let e=0;e<c.length;e+=1)c[e].c();s=E(),u&&u.c(),r=E(),pe(i.$$.fragment),k(n,"class","container svelte-1ts0ft3"),k(t,"class","workspaces svelte-1ts0ft3")},m(e,a){v(e,t,a),g(t,n);for(let e=0;e<c.length;e+=1)c[e]&&c[e].m(n,null);g(n,s),u&&u.m(n,null),g(t,r),ge(i,t,null),o=!0},p(e,t){if(1&t){let r;for(a=e[0],r=0;r<a.length;r+=1){const i=Iy(e,a,r);c[r]?(c[r].p(i,t),oe(c[r],1)):(c[r]=Ty(i),c[r].c(),oe(c[r],1),c[r].m(n,s))}for(re(),r=a.length;r<c.length;r+=1)l(r);ie()}e[2].length>0?u?(u.p(e,t),4&t&&oe(u,1)):(u=Cy(e),u.c(),oe(u,1),u.m(n,null)):u&&(re(),ae(u,1,1,(()=>{u=null})),ie());const r={};1&t&&(r.workspaces=e[0]),4&t&&(r.recentFolders=e[2]),i.$set(r)},i(e){if(!o){for(let e=0;e<a.length;e+=1)oe(c[e]);oe(u),oe(i.$$.fragment,e),o=!0}},o(e){c=c.filter(Boolean);for(let e=0;e<c.length;e+=1)ae(c[e]);ae(u),ae(i.$$.fragment,e),o=!1},d(e){e&&w(t),y(c,e),u&&u.d(),me(i)}}}function Ty(e){let t,n;return t=new ly({props:{workspace:e[15]}}),{c(){pe(t.$$.fragment)},m(e,s){ge(t,e,s),n=!0},p(e,n){const s={};1&n&&(s.workspace=e[15]),t.$set(s)},i(e){n||(oe(t.$$.fragment,e),n=!0)},o(e){ae(t.$$.fragment,e),n=!1},d(e){me(t,e)}}}function Cy(e){let t,n,s,r,i=e[2],o=[];for(let t=0;t<i.length;t+=1)o[t]=ky(by(e,i,t));const a=e=>ae(o[e],1,1,(()=>{o[e]=null}));return{c(){t=b("div"),t.innerHTML="<span>Recent Folders</span>",n=E();for(let e=0;e<o.length;e+=1)o[e].c();s=T(),k(t,"class","heading")},m(e,i){v(e,t,i),v(e,n,i);for(let t=0;t<o.length;t+=1)o[t]&&o[t].m(e,i);v(e,s,i),r=!0},p(e,t){if(4&t){let n;for(i=e[2],n=0;n<i.length;n+=1){const r=by(e,i,n);o[n]?(o[n].p(r,t),oe(o[n],1)):(o[n]=ky(r),o[n].c(),oe(o[n],1),o[n].m(s.parentNode,s))}for(re(),n=i.length;n<o.length;n+=1)a(n);ie()}},i(e){if(!r){for(let e=0;e<i.length;e+=1)oe(o[e]);r=!0}},o(e){o=o.filter(Boolean);for(let e=0;e<o.length;e+=1)ae(o[e]);r=!1},d(e){e&&w(t),e&&w(n),y(o,e),e&&w(s)}}}function ky(e){let t,n;return t=new py({props:{folder:e[12]}}),{c(){pe(t.$$.fragment)},m(e,s){ge(t,e,s),n=!0},p(e,n){const s={};4&n&&(s.folder=e[12]),t.$set(s)},i(e){n||(oe(t.$$.fragment,e),n=!0)},o(e){ae(t.$$.fragment,e),n=!1},d(e){me(t,e)}}}function Sy(e){let t,n,s=e[1]&&Ey(e);return{c(){s&&s.c(),t=T()},m(e,r){s&&s.m(e,r),v(e,t,r),n=!0},p(e,[n]){e[1]?s?(s.p(e,n),2&n&&oe(s,1)):(s=Ey(e),s.c(),oe(s,1),s.m(t.parentNode,t)):s&&(re(),ae(s,1,1,(()=>{s=null})),ie())},i(e){n||(oe(s),n=!0)},o(e){ae(s),n=!1},d(e){s&&s.d(e),e&&w(t)}}}function Ry(e,t,n){let s,{searchText:r}=t,{workspaces:i}=t,{activeTab:o}=t;B((()=>{i?.sort(((e,t)=>t.updated-e.updated)),n(0,i=i.filter((e=>(e.isIncognito??!1)==o.incognito))),n(1,s=!0)}));let{groups:a}=t;return e.$$set=e=>{"searchText"in e&&n(3,r=e.searchText),"workspaces"in e&&n(0,i=e.workspaces),"activeTab"in e&&n(4,o=e.activeTab),"groups"in e&&n(5,a=e.groups)},[i,s,[],r,o,a]}class Dy extends we{constructor(e){super(),ve(this,e,Ry,Sy,o,{searchText:3,workspaces:0,activeTab:4,groups:5})}}function Ny(e){let t,n;return{c(){t=b("div"),n=I(e[2]),k(t,"class","error svelte-1dme0dl")},m(e,s){v(e,t,s),g(t,n)},p(e,t){4&t&&S(n,e[2])},d(e){e&&w(t)}}}function Uy(t){let n,s,i,o,a,c,l,u,h,d,f,p,m,A=t[2]&&Ny(t);return{c(){n=b("div"),s=b("div"),i=b("div"),i.textContent="Sign in",o=E(),a=b("div"),c=b("input"),l=E(),u=b("input"),h=E(),d=b("div"),d.textContent="Sign in",f=E(),A&&A.c(),k(i,"class","title svelte-1dme0dl"),k(c,"type","email"),k(c,"placeholder","Email"),k(c,"class","svelte-1dme0dl"),k(u,"type","password"),k(u,"placeholder","Password"),k(u,"class","svelte-1dme0dl"),k(d,"class","signin button svelte-1dme0dl"),k(a,"class","signin-with-email svelte-1dme0dl"),k(s,"class","container svelte-1dme0dl"),k(n,"class","signin-page svelte-1dme0dl")},m(e,r){v(e,n,r),g(n,s),g(s,i),g(s,o),g(s,a),g(a,c),R(c,t[0]),g(a,l),g(a,u),R(u,t[1]),g(a,h),g(a,d),g(a,f),A&&A.m(a,null),p||(m=[C(c,"input",t[6]),C(u,"input",t[7]),C(d,"mousedown",t[3])],p=!0)},p(e,[t]){1&t&&c.value!==e[0]&&R(c,e[0]),2&t&&u.value!==e[1]&&R(u,e[1]),e[2]?A?A.p(e,t):(A=Ny(e),A.c(),A.m(a,null)):A&&(A.d(1),A=null)},i:e,o:e,d(e){e&&w(n),A&&A.d(),p=!1,r(m)}}}function xy(e,t,n){let s,r,i,o,a,{fbApp:c}=t;new zA,B((()=>{c&&(s=gw(c),n(5,r=!0))}));return e.$$set=e=>{"fbApp"in e&&n(4,c=e.fbApp)},e.$$.update=()=>{48&e.$$.dirty&&c&&(s=gw(c))},[i,o,a,()=>{if(i&&(i.includes("@")||i.includes(".")))if(o)try{nv(s,i,o)}catch(e){console.log(e)}else n(2,a="Please provide a password");else n(2,a="Please enter a valid")},c,r,function(){i=this.value,n(0,i)},function(){o=this.value,n(1,o)}]}class _y extends we{constructor(e){super(),ve(this,e,xy,Uy,o,{fbApp:4})}}function Oy(e){let t,n,s,r;const i=[My,Ly],o=[];function a(e,t){return e[15].length>0?0:e[0]!=Ie.workspace?1:-1}return~(n=a(e))&&(s=o[n]=i[n](e)),{c(){t=b("div"),s&&s.c(),k(t,"class","container header svelte-1coiitx")},m(e,s){v(e,t,s),~n&&o[n].m(t,null),r=!0},p(e,r){let c=n;n=a(e),n===c?~n&&o[n].p(e,r):(s&&(re(),ae(o[c],1,1,(()=>{o[c]=null})),ie()),~n?(s=o[n],s?s.p(e,r):(s=o[n]=i[n](e),s.c()),oe(s,1),s.m(t,null)):s=null)},i(e){r||(oe(s),r=!0)},o(e){ae(s),r=!1},d(e){e&&w(t),~n&&o[n].d()}}}function Ly(e){let t,n,s,r;function i(t){e[25](t)}function o(t){e[26](t)}let a={windows:e[6],windowCount:e[6]?.length??0,tabCount:e[3]?.filter(e[24])?.length??0};return void 0!==e[0]&&(a.view=e[0]),void 0!==e[16]&&(a.searchText=e[16]),t=new ny({props:a}),j.push((()=>fe(t,"view",i))),j.push((()=>fe(t,"searchText",o))),{c(){pe(t.$$.fragment)},m(e,n){ge(t,e,n),r=!0},p(e,r){const i={};64&r[0]&&(i.windows=e[6]),64&r[0]&&(i.windowCount=e[6]?.length??0),264&r[0]&&(i.tabCount=e[3]?.filter(e[24])?.length??0),!n&&1&r[0]&&(n=!0,i.view=e[0],z((()=>n=!1))),!s&&65536&r[0]&&(s=!0,i.searchText=e[16],z((()=>s=!1))),t.$set(i)},i(e){r||(oe(t.$$.fragment,e),r=!0)},o(e){ae(t.$$.fragment,e),r=!1},d(e){me(t,e)}}}function My(t){let n,s,r=t[18],i=Py(t);return{c(){i.c(),n=T()},m(e,t){i.m(e,t),v(e,n,t),s=!0},p(t,s){262144&s[0]&&o(r,r=t[18])?(re(),ae(i,1,1,e),ie(),i=Py(t),i.c(),oe(i,1),i.m(n.parentNode,n)):i.p(t,s)},i(e){s||(oe(i),s=!0)},o(e){ae(i),s=!1},d(e){e&&w(n),i.d(e)}}}function Py(e){let t,n,s;function r(t){e[23](t)}let i={};return void 0!==e[15]&&(i.selectedTabs=e[15]),t=new Ce({props:i}),j.push((()=>fe(t,"selectedTabs",r))),{c(){pe(t.$$.fragment)},m(e,n){ge(t,e,n),s=!0},p(e,s){const r={};!n&&32768&s[0]&&(n=!0,r.selectedTabs=e[15],z((()=>n=!1))),t.$set(r)},i(e){s||(oe(t.$$.fragment,e),s=!0)},o(e){ae(t.$$.fragment,e),s=!1},d(e){me(t,e)}}}function By(e){let t,n;return t=new Dy({props:{activeTab:e[7],groups:e[4],workspaces:e[5]}}),{c(){pe(t.$$.fragment)},m(e,s){ge(t,e,s),n=!0},p(e,n){const s={};128&n[0]&&(s.activeTab=e[7]),16&n[0]&&(s.groups=e[4]),32&n[0]&&(s.workspaces=e[5]),t.$set(s)},i(e){n||(oe(t.$$.fragment,e),n=!0)},o(e){ae(t.$$.fragment,e),n=!1},d(e){me(t,e)}}}function Fy(e){let t,n,s;function r(t){e[38](t)}let i={tabs:e[3].filter(e[36]),activeTab:e[7],group:e[4][e[7].groupId],db:e[2],user:e[1],workspace:e[5].find(e[37]),lastUpdate:e[9],lastSelectionUpdate:e[18]};return void 0!==e[15]&&(i.selectedTabs=e[15]),t=new kw({props:i}),j.push((()=>fe(t,"selectedTabs",r))),t.$on("updateSelection",e[21]),t.$on("showWindowView",e[39]),{c(){pe(t.$$.fragment)},m(e,n){ge(t,e,n),s=!0},p(e,s){const r={};136&s[0]&&(r.tabs=e[3].filter(e[36])),128&s[0]&&(r.activeTab=e[7]),144&s[0]&&(r.group=e[4][e[7].groupId]),4&s[0]&&(r.db=e[2]),2&s[0]&&(r.user=e[1]),176&s[0]&&(r.workspace=e[5].find(e[37])),512&s[0]&&(r.lastUpdate=e[9]),262144&s[0]&&(r.lastSelectionUpdate=e[18]),!n&&32768&s[0]&&(n=!0,r.selectedTabs=e[15],z((()=>n=!1))),t.$set(r)},i(e){s||(oe(t.$$.fragment,e),s=!0)},o(e){ae(t.$$.fragment,e),s=!1},d(e){me(t,e)}}}function Vy(e){let t,n,s;function r(t){e[32](t)}let i={tabs:e[3].filter(e[31]),groups:e[4],lastUpdate:e[9],selectedTabs:e[15],lastUpdatedTab:e[10],lastSelectionUpdate:e[18],searchResults:e[19]};return void 0!==e[16]&&(i.searchText=e[16]),t=new Ww({props:i}),j.push((()=>fe(t,"searchText",r))),t.$on("updateSelection",e[21]),t.$on("tabBookmarkAdded",e[33]),t.$on("foundDuplicates",e[34]),t.$on("groupSaved",e[35]),t.$on("openGroupInFullScreen",e[22]),{c(){pe(t.$$.fragment)},m(e,n){ge(t,e,n),s=!0},p(e,s){const r={};264&s[0]&&(r.tabs=e[3].filter(e[31])),16&s[0]&&(r.groups=e[4]),512&s[0]&&(r.lastUpdate=e[9]),32768&s[0]&&(r.selectedTabs=e[15]),1024&s[0]&&(r.lastUpdatedTab=e[10]),262144&s[0]&&(r.lastSelectionUpdate=e[18]),524288&s[0]&&(r.searchResults=e[19]),!n&&65536&s[0]&&(n=!0,r.searchText=e[16],z((()=>n=!1))),t.$set(r)},i(e){s||(oe(t.$$.fragment,e),s=!0)},o(e){ae(t.$$.fragment,e),s=!1},d(e){me(t,e)}}}function $y(e){let t,n,s,r;function i(t){e[28](t)}function o(t){e[29](t)}let a={tabs:e[3],groups:e[4],activeTab:e[7],lastUpdate:e[9],lastSelectionUpdate:e[18],lastUpdatedTab:e[10],lastUpdatedGroup:e[11],lastUpdatedWindow:e[12],windows:e[6],currentWindowId:e[8]};return void 0!==e[15]&&(a.selectedTabs=e[15]),void 0!==e[0]&&(a.view=e[0]),t=new kn({props:a}),j.push((()=>fe(t,"selectedTabs",i))),j.push((()=>fe(t,"view",o))),t.$on("updateSelection",e[21]),t.$on("tabMoved",e[30]),{c(){pe(t.$$.fragment)},m(e,n){ge(t,e,n),r=!0},p(e,r){const i={};8&r[0]&&(i.tabs=e[3]),16&r[0]&&(i.groups=e[4]),128&r[0]&&(i.activeTab=e[7]),512&r[0]&&(i.lastUpdate=e[9]),262144&r[0]&&(i.lastSelectionUpdate=e[18]),1024&r[0]&&(i.lastUpdatedTab=e[10]),2048&r[0]&&(i.lastUpdatedGroup=e[11]),4096&r[0]&&(i.lastUpdatedWindow=e[12]),64&r[0]&&(i.windows=e[6]),256&r[0]&&(i.currentWindowId=e[8]),!n&&32768&r[0]&&(n=!0,i.selectedTabs=e[15],z((()=>n=!1))),!s&&1&r[0]&&(s=!0,i.view=e[0],z((()=>s=!1))),t.$set(i)},i(e){r||(oe(t.$$.fragment,e),r=!0)},o(e){ae(t.$$.fragment,e),r=!1},d(e){me(t,e)}}}function jy(e){let t,n;return t=new rn({props:{searchText:e[16],searchResults:e[19],lastSelectionUpdate:e[18],selectedTabs:e[15]}}),t.$on("updateSelection",e[27]),{c(){pe(t.$$.fragment)},m(e,s){ge(t,e,s),n=!0},p(e,n){const s={};65536&n[0]&&(s.searchText=e[16]),524288&n[0]&&(s.searchResults=e[19]),262144&n[0]&&(s.lastSelectionUpdate=e[18]),32768&n[0]&&(s.selectedTabs=e[15]),t.$set(s)},i(e){n||(oe(t.$$.fragment,e),n=!0)},o(e){ae(t.$$.fragment,e),n=!1},d(e){me(t,e)}}}function Gy(e){let t,n,s,r;const i=[qy,Qy,Ky],o=[];function a(e,t){return e[15].length>0?0:e[0]==Ie.windows?1:e[0]==Ie.tabs?2:-1}return~(n=a(e))&&(s=o[n]=i[n](e)),{c(){t=b("div"),s&&s.c(),k(t,"class","container footer svelte-1coiitx")},m(e,s){v(e,t,s),~n&&o[n].m(t,null),r=!0},p(e,r){let c=n;n=a(e),n===c?~n&&o[n].p(e,r):(s&&(re(),ae(o[c],1,1,(()=>{o[c]=null})),ie()),~n?(s=o[n],s?s.p(e,r):(s=o[n]=i[n](e),s.c()),oe(s,1),s.m(t,null)):s=null)},i(e){r||(oe(s),r=!0)},o(e){ae(s),r=!1},d(e){e&&w(t),~n&&o[n].d()}}}function Ky(e){let t,n,s;function r(t){e[44](t)}let i={tabs:e[3].filter(e[43]),lastSelectionUpdate:e[18]};return void 0!==e[15]&&(i.selectedTabs=e[15]),t=new Bw({props:i}),j.push((()=>fe(t,"selectedTabs",r))),{c(){pe(t.$$.fragment)},m(e,n){ge(t,e,n),s=!0},p(e,s){const r={};264&s[0]&&(r.tabs=e[3].filter(e[43])),262144&s[0]&&(r.lastSelectionUpdate=e[18]),!n&&32768&s[0]&&(n=!0,r.selectedTabs=e[15],z((()=>n=!1))),t.$set(r)},i(e){s||(oe(t.$$.fragment,e),s=!0)},o(e){ae(t.$$.fragment,e),s=!1},d(e){me(t,e)}}}function Qy(e){let t,n;return t=new bn({props:{windows:e[6],tabs:e[3],lastSelectionUpdate:e[18],selectedTabs:e[15]}}),t.$on("mergedWindows",e[42]),{c(){pe(t.$$.fragment)},m(e,s){ge(t,e,s),n=!0},p(e,n){const s={};64&n[0]&&(s.windows=e[6]),8&n[0]&&(s.tabs=e[3]),262144&n[0]&&(s.lastSelectionUpdate=e[18]),32768&n[0]&&(s.selectedTabs=e[15]),t.$set(s)},i(e){n||(oe(t.$$.fragment,e),n=!0)},o(e){ae(t.$$.fragment,e),n=!1},d(e){me(t,e)}}}function qy(e){let t,n,s;function r(t){e[41](t)}let i={lastSelectionUpdate:e[18],view:e[0]};return void 0!==e[15]&&(i.selectedTabs=e[15]),t=new pn({props:i}),j.push((()=>fe(t,"selectedTabs",r))),{c(){pe(t.$$.fragment)},m(e,n){ge(t,e,n),s=!0},p(e,s){const r={};262144&s[0]&&(r.lastSelectionUpdate=e[18]),1&s[0]&&(r.view=e[0]),!n&&32768&s[0]&&(n=!0,r.selectedTabs=e[15],z((()=>n=!1))),t.$set(r)},i(e){s||(oe(t.$$.fragment,e),s=!0)},o(e){ae(t.$$.fragment,e),s=!1},d(e){me(t,e)}}}function Wy(e){let t,n,s,r,i,o,a,c=Oy(e);const l=[jy,$y,Vy,Fy,By],u=[];function h(e,t){return e[16].length>0?0:e[0]==Ie.windows?1:e[0]==Ie.tabs?2:e[0]==Ie.workspace?3:e[0]==Ie.saved?4:-1}~(r=h(e))&&(i=u[r]=l[r](e));let d=e[20]&&Gy(e);return{c(){t=b("main"),c&&c.c(),n=E(),s=b("div"),i&&i.c(),o=E(),d&&d.c(),k(s,"class","body svelte-1coiitx"),k(t,"class","svelte-1coiitx")},m(i,l){v(i,t,l),c&&c.m(t,null),g(t,n),g(t,s),~r&&u[r].m(s,null),e[40](s),g(t,o),d&&d.m(t,null),a=!0},p(e,o){c?(c.p(e,o),57344&o[0]&&oe(c,1)):(c=Oy(e),c.c(),oe(c,1),c.m(t,n));let a=r;r=h(e),r===a?~r&&u[r].p(e,o):(i&&(re(),ae(u[a],1,1,(()=>{u[a]=null})),ie()),~r?(i=u[r],i?i.p(e,o):(i=u[r]=l[r](e),i.c()),oe(i,1),i.m(s,null)):i=null),e[20]?d?(d.p(e,o),1048576&o[0]&&oe(d,1)):(d=Gy(e),d.c(),oe(d,1),d.m(t,null)):d&&(re(),ae(d,1,1,(()=>{d=null})),ie())},i(e){a||(oe(c),oe(i),oe(d),a=!0)},o(e){ae(c),ae(i),ae(d),a=!1},d(n){n&&w(t),c&&c.d(),~r&&u[r].d(),e[40](null),d&&d.d()}}}function zy(e,t,n){let s,r,i,{user:o}=t,{db:a}=t,{view:c}=t,{tabs:l}=t,{groups:u}=t,{workspaces:h}=t,{windows:d}=t,{activeTab:f}=t,{currentWindowId:p}=t,{lastUpdate:g}=t,{lastUpdatedTab:m}=t,{lastUpdatedGroup:A}=t,{lastUpdatedWindow:v}=t,w=0;B((()=>{console.log(l),y()})),function(e){P().$$.on_destroy.push(e)}((()=>{b()}));const y=()=>{i=r.addEventListener("scroll",(e=>{const t=w-r.scrollTop;s?t<0&&n(13,s=!1):t>0&&n(13,s=!0),n(14,w=r.scrollTop)}))},b=()=>{r.removeEventListener("scroll",i)};let I,E=[];let T="",C=[];let k;return e.$$set=e=>{"user"in e&&n(1,o=e.user),"db"in e&&n(2,a=e.db),"view"in e&&n(0,c=e.view),"tabs"in e&&n(3,l=e.tabs),"groups"in e&&n(4,u=e.groups),"workspaces"in e&&n(5,h=e.workspaces),"windows"in e&&n(6,d=e.windows),"activeTab"in e&&n(7,f=e.activeTab),"currentWindowId"in e&&n(8,p=e.currentWindowId),"lastUpdate"in e&&n(9,g=e.lastUpdate),"lastUpdatedTab"in e&&n(10,m=e.lastUpdatedTab),"lastUpdatedGroup"in e&&n(11,A=e.lastUpdatedGroup),"lastUpdatedWindow"in e&&n(12,v=e.lastUpdatedWindow)},e.$$.update=()=>{66048&e.$$.dirty[0]&&""!=T&&(()=>{const e=T.toLowerCase();n(19,C=l.filter((t=>(t.title+" "+t.url).toLowerCase().includes(e))))})(),57345&e.$$.dirty[0]&&n(20,k=E.length>0||c!=Ie.saved&&c!=Ie.workspace&&!0)},[c,o,a,l,u,h,d,f,p,g,m,A,v,s,w,E,T,r,I,C,k,({detail:e})=>{const t=e,s=E.findIndex((e=>e.id==t.id));s>-1?E.splice(s,1):E.push(t),n(18,I=Date.now())},async({detail:e})=>{const t=e;if(f.groupId!=t.id){const e=(await chrome.tabs.query({groupId:t.id}))[0];await chrome.tabs.update(e.id,{active:!0})}n(0,c=Ie.workspace)},function(e){E=e,n(15,E)},e=>e.windowId==p,function(e){c=e,n(0,c)},function(e){T=e,n(16,T)},function(t){V.call(this,e,t)},function(e){E=e,n(15,E)},function(e){c=e,n(0,c)},function(t){V.call(this,e,t)},e=>e.windowId==p,function(e){T=e,n(16,T)},function(t){V.call(this,e,t)},function(t){V.call(this,e,t)},function(t){V.call(this,e,t)},e=>e.groupId==f.groupId,e=>e.title==u[f.groupId]?.title,function(e){E=e,n(15,E)},()=>n(0,c=Ie.tabs),function(e){j[e?"unshift":"push"]((()=>{r=e,n(17,r)}))},function(e){E=e,n(15,E)},function(t){V.call(this,e,t)},e=>e.windowId==p,function(e){E=e,n(15,E)}]}class Hy extends we{constructor(e){super(),ve(this,e,zy,Wy,o,{user:1,db:2,view:0,tabs:3,groups:4,workspaces:5,windows:6,activeTab:7,currentWindowId:8,lastUpdate:9,lastUpdatedTab:10,lastUpdatedGroup:11,lastUpdatedWindow:12},null,[-1,-1])}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
Er("firebase","9.23.0","app");const Jy={apiKey:"AIzaSyDCQVQMSqV-lEib8zxjvVc0-l4YkcfHs9A",authDomain:"tsundoku-9b453.firebaseapp.com",projectId:"tsundoku-9b453",storageBucket:"tsundoku-9b453.appspot.com",messagingSenderId:"214768069951",appId:"1:214768069951:web:d7d1a2e08f7f57d601b78a",measurementId:"G-33RVLBLNV0"};function Xy(e,t,n){let s,r,i,{user:o}=t,{db:a}=t,{userRef:c}=t,{fbApp:l}=t,{authLoaded:u}=t;B((async()=>{h()}));const h=async()=>{console.log("loading auth"),await d(),n(4,u=!0)},d=async()=>{try{n(3,l=br(Jy)),s=gw(),n(1,a=function(e,t){const n="string"==typeof e?e:t||"(default)",s=Ar("object"==typeof e?e:Ir(),"firestore").getImmediate({identifier:n});if(!s._initialized){const e=vs("firestore");e&&Sg(s,...e)}return s}(l)),e=f,_s(s).onAuthStateChanged(e,t,r),i=!0,console.log("firebase connected")}catch(t){console.log("could not connect to firebase"),console.log(t)}var e,t,r},f=async e=>{console.log("auth change");const t=r&&!e;r=e,console.log(r),t||(navigator.onLine?r?await p():console.log("user not logged in"):(console.log("offline"),loaded=!0))},p=async()=>{n(2,c=xg(a,"users",r.uid)),n(0,o=(await ym(c)).data()??{}),o?.created||(n(0,o.id=r.uid,o),n(0,o.accessCode=accessCode??createUserId(),o),n(0,o.created=Date.now(),o),n(0,o.createdOnMobile=isMobile,o),n(0,o.userAgent=navigator.userAgent,o),n(0,o.hasChrome=hasChrome,o),n(0,o.language=navigator.language,o),await Em(c,o)),loaded=!0};return e.$$set=e=>{"user"in e&&n(0,o=e.user),"db"in e&&n(1,a=e.db),"userRef"in e&&n(2,c=e.userRef),"fbApp"in e&&n(3,l=e.fbApp),"authLoaded"in e&&n(4,u=e.authLoaded)},[o,a,c,l,u]}class Yy extends we{constructor(e){super(),ve(this,e,Xy,null,o,{user:0,db:1,userRef:2,fbApp:3,authLoaded:4})}}function Zy(e,t,n){let{user:s}=t,{workspaces:r}=t;const i=async()=>{console.log("loading user contexts");const e=await async function(e){let t=[];const n=await ye("contextKeys")??[];if(0==n.length)return t;const s=await chrome.storage.local.get(n);for(const[n,r]of Object.entries(s))e&&!e(r)||t.push(r);return t}();if(s){s.lastSync||n(0,s.lastSync=0,s);const t=await get("config");t.lastSync&&(t.lastSync=0);const i=e.filter((e=>e.updated>s.lastSync||e.created>s.lastSync));for(const e of i){const t=xg(db,ls.userContext(s.id));await Em(t,e,{merge:!0})}n(0,s.lastSync=Date.now(),s),await Em(userRef,s);const o=await Im(Ug(db,ls.userContexts(s.id)));n(1,r=o.docs.map((e=>e.data())))}else n(1,r=e)};return e.$$set=e=>{"user"in e&&n(0,s=e.user),"workspaces"in e&&n(1,r=e.workspaces)},e.$$.update=()=>{1&e.$$.dirty&&(s?.id,i())},[s,r]}class eb extends we{constructor(e){super(),ve(this,e,Zy,null,o,{user:0,workspaces:1})}}function tb(e,t,n){let{tabs:s=[]}=t,{groups:r=[]}=t,{windows:i=[]}=t,{activeTab:o}=t,{lastRefresh:a}=t,{lastUpdate:c}=t,{lastUpdatedTab:l}=t,{lastUpdatedWindow:u}=t,{lastUpdatedGroup:h}=t,{currentWindowId:d}=t,{view:f}=t;B((()=>{g()}));let{windowsLoaded:p}=t;const g=async()=>{await b(),await A(),await w(),I(),v(),n(10,p=!0),console.log(s)};let m;const A=async()=>{m=await chrome.permissions.contains({permissions:["bookmarks"]})},v=async()=>{const e=!s.find((e=>-1==o.groupId||e.windowId==o.windowId&&e.groupId!=o.groupId));n(9,f=e?Ie.workspace:Ie.tabs)},w=async()=>{n(0,s=await chrome.tabs.query({})),n(2,i=await chrome.windows.getAll());const e=await chrome.tabGroups.query({});let t={};for(let n of e)t[n.id]||(m&&(n.workspace=workspaces.find((e=>e.groupId==n.id))),t[n.id]=n);n(1,r=t);for(let e of i)e=y(e)},y=e=>{e.groups={},e.tabs=[];for(const t of s)t.windowId==e.id&&(e.tabs.push(t),t.groupId>-1&&!e.groups[t.groupId]&&(e.groups[t.groupId]=r[t.groupId]));return e},b=async()=>{n(3,o=(await chrome.tabs.query({active:!0,windowId:await chrome.windows.WINDOW_ID_CURRENT}))[0]),d||n(8,d=o.windowId)},I=()=>{chrome.tabs.onActivated.addListener(E),chrome.tabs.onCreated.addListener(T),chrome.tabs.onUpdated.addListener(C),chrome.tabs.onMoved.addListener(k),chrome.tabs.onRemoved.addListener(S),chrome.tabGroups.onCreated.addListener(U),chrome.tabGroups.onUpdated.addListener(x),chrome.tabGroups.onRemoved.addListener(_),chrome.windows.onCreated.addListener(D),chrome.windows.onRemoved.addListener(N),m&&(chrome.bookmarks.onCreated.addListener(O),chrome.bookmarks.onRemoved.addListener(L))},E=async({tabId:e,windowId:t})=>{const r=s.findIndex((e=>e.windowId==t&&e.active)),i=s.findIndex((t=>t.id==e));i>-1&&(r>-1&&(n(0,s[r].active=!1,s),n(5,l=s[r])),n(0,s[i].active=!0,s),n(3,o=s[i]),n(5,l=s[i])),f==Ie.windows&&t==d&&n(9,f=Ie.tabs)},T=async e=>{e.updated=Date.now(),n(0,s=[...s,e]),R(e.windowId,e.id)},C=(e,t)=>{let r=s.findIndex((t=>t.id==e));if(r>-1){let e={...s[r],...t};e.updated=Date.now(),n(0,s[r]=e,s),n(0,s),n(5,l=e)}},k=async(e,{windowId:t,toIndex:r,fromIndex:o})=>{const a=s.findIndex((t=>t.id==e));if(-1==a)return void console.log("could not find tab");s[a].windowId!=t&&n(0,s[a].windowId=t,s);const c=i.find((e=>e.id==t));c||n(2,i=[...i,await chrome.windows.get(t)]),R(t,e)},S=e=>{const t=s.findIndex((t=>t.id==e));if(t>-1){const n={...s[t]};s.splice(t,1),n&&R(n.windowId,e)}},R=async(e,t)=>{let r=await chrome.tabs.query({windowId:e});for(const e of r){const r=s.findIndex((t=>t.id==e.id));if(r>-1){let i=s[r];i.id==t&&(i.updated=Date.now()),n(0,s[r]={...i,...e},s)}else s.push(e)}s.sort(((e,t)=>e.index-t.index)),n(0,s),n(4,c=Date.now()),n(6,u=e)},D=e=>{n(2,i=[...i,e]),setTimeout((()=>{R(e.id)}),500)},N=e=>{const t=i.findIndex((t=>t.id==e));t>-1&&i.splice(t,1),n(2,i)},U=async e=>{e.new=!0,n(1,r[e.id]=e,r),(async e=>{let t=await chrome.tabs.query({groupId:e});for(const e of t){const t=s.findIndex((t=>t.id==e.id));t>-1?n(0,s[t]={...s[t],...e},s):s.push(e)}s.sort(((e,t)=>e.index-t.index)),n(0,s),n(7,h=e),t.length>0&&t[0].windowId&&n(6,u=t[0].windowId)})(e.windowId),n(7,h=e.id),n(4,c=Date.now())},x=e=>{n(1,r[e.id]={...r[e.id],...e},r),delete r[e.id].new,n(7,h=e.id)},_=e=>{delete r[e]},O=async()=>{},L=async()=>{};return e.$$set=e=>{"tabs"in e&&n(0,s=e.tabs),"groups"in e&&n(1,r=e.groups),"windows"in e&&n(2,i=e.windows),"activeTab"in e&&n(3,o=e.activeTab),"lastRefresh"in e&&n(11,a=e.lastRefresh),"lastUpdate"in e&&n(4,c=e.lastUpdate),"lastUpdatedTab"in e&&n(5,l=e.lastUpdatedTab),"lastUpdatedWindow"in e&&n(6,u=e.lastUpdatedWindow),"lastUpdatedGroup"in e&&n(7,h=e.lastUpdatedGroup),"currentWindowId"in e&&n(8,d=e.currentWindowId),"view"in e&&n(9,f=e.view),"windowsLoaded"in e&&n(10,p=e.windowsLoaded)},e.$$.update=()=>{2048&e.$$.dirty[0]&&w()},[s,r,i,o,c,l,u,h,d,f,p,a]}class nb extends we{constructor(e){super(),ve(this,e,tb,null,o,{tabs:0,groups:1,windows:2,activeTab:3,lastRefresh:11,lastUpdate:4,lastUpdatedTab:5,lastUpdatedWindow:6,lastUpdatedGroup:7,currentWindowId:8,view:9,windowsLoaded:10},null,[-1,-1])}}function sb(e){let t,n,s,r;const i=[ib,rb],o=[];function a(e,t){return e[15]==Ie.signin?0:1}return t=a(e),n=o[t]=i[t](e),{c(){n.c(),s=T()},m(e,n){o[t].m(e,n),v(e,s,n),r=!0},p(e,r){let c=t;t=a(e),t===c?o[t].p(e,r):(re(),ae(o[c],1,1,(()=>{o[c]=null})),ie(),n=o[t],n?n.p(e,r):(n=o[t]=i[t](e),n.c()),oe(n,1),n.m(s.parentNode,s))},i(e){r||(oe(n),r=!0)},o(e){ae(n),r=!1},d(e){o[t].d(e),e&&w(s)}}}function rb(e){let t,n,s;function r(t){e[36](t)}let i={db:e[7],user:e[5],workspaces:e[3],activeTab:e[4],groups:e[1],windows:e[2],tabs:e[0],lastUpdate:e[10],lastUpdatedTab:e[11],lastUpdatedGroup:e[13],lastUpdatedWindow:e[12],currentWindowId:e[14]};return void 0!==e[15]&&(i.view=e[15]),t=new Hy({props:i}),j.push((()=>fe(t,"view",r))),t.$on("tabMoved",e[37]),t.$on("mergedWindows",e[38]),t.$on("foundDuplicates",e[39]),{c(){pe(t.$$.fragment)},m(e,n){ge(t,e,n),s=!0},p(e,s){const r={};128&s[0]&&(r.db=e[7]),32&s[0]&&(r.user=e[5]),8&s[0]&&(r.workspaces=e[3]),16&s[0]&&(r.activeTab=e[4]),2&s[0]&&(r.groups=e[1]),4&s[0]&&(r.windows=e[2]),1&s[0]&&(r.tabs=e[0]),1024&s[0]&&(r.lastUpdate=e[10]),2048&s[0]&&(r.lastUpdatedTab=e[11]),8192&s[0]&&(r.lastUpdatedGroup=e[13]),4096&s[0]&&(r.lastUpdatedWindow=e[12]),16384&s[0]&&(r.currentWindowId=e[14]),!n&&32768&s[0]&&(n=!0,r.view=e[15],z((()=>n=!1))),t.$set(r)},i(e){s||(oe(t.$$.fragment,e),s=!0)},o(e){ae(t.$$.fragment,e),s=!1},d(e){me(t,e)}}}function ib(e){let t,n;return t=new _y({props:{fbApp:e[8]}}),{c(){pe(t.$$.fragment)},m(e,s){ge(t,e,s),n=!0},p(e,n){const s={};256&n[0]&&(s.fbApp=e[8]),t.$set(s)},i(e){n||(oe(t.$$.fragment,e),n=!0)},o(e){ae(t.$$.fragment,e),n=!1},d(e){me(t,e)}}}function ob(e){let t,n,s,r,i,o,a,c,l,u,h,d,f,p,g,m,A,y,b,I,C,k,S,R,D,N;function U(t){e[18](t)}function x(t){e[19](t)}function _(t){e[20](t)}function O(t){e[21](t)}function L(t){e[22](t)}let M={};function P(t){e[23](t)}function B(t){e[24](t)}function F(t){e[25](t)}function V(t){e[26](t)}function $(t){e[27](t)}function G(t){e[28](t)}function K(t){e[29](t)}function Q(t){e[30](t)}function q(t){e[31](t)}function W(t){e[32](t)}function H(t){e[33](t)}void 0!==e[5]&&(M.user=e[5]),void 0!==e[6]&&(M.userRef=e[6]),void 0!==e[7]&&(M.db=e[7]),void 0!==e[8]&&(M.fbApp=e[8]),void 0!==e[16]&&(M.authLoaded=e[16]),t=new Yy({props:M}),j.push((()=>fe(t,"user",U))),j.push((()=>fe(t,"userRef",x))),j.push((()=>fe(t,"db",_))),j.push((()=>fe(t,"fbApp",O))),j.push((()=>fe(t,"authLoaded",L)));let J={};function X(t){e[34](t)}function Y(t){e[35](t)}void 0!==e[9]&&(J.lastRefresh=e[9]),void 0!==e[17]&&(J.windowsLoaded=e[17]),void 0!==e[4]&&(J.activeTab=e[4]),void 0!==e[1]&&(J.groups=e[1]),void 0!==e[2]&&(J.windows=e[2]),void 0!==e[0]&&(J.tabs=e[0]),void 0!==e[10]&&(J.lastUpdate=e[10]),void 0!==e[11]&&(J.lastUpdatedTab=e[11]),void 0!==e[13]&&(J.lastUpdatedGroup=e[13]),void 0!==e[12]&&(J.lastUpdatedWindow=e[12]),void 0!==e[14]&&(J.currentWindowId=e[14]),c=new nb({props:J}),j.push((()=>fe(c,"lastRefresh",P))),j.push((()=>fe(c,"windowsLoaded",B))),j.push((()=>fe(c,"activeTab",F))),j.push((()=>fe(c,"groups",V))),j.push((()=>fe(c,"windows",$))),j.push((()=>fe(c,"tabs",G))),j.push((()=>fe(c,"lastUpdate",K))),j.push((()=>fe(c,"lastUpdatedTab",Q))),j.push((()=>fe(c,"lastUpdatedGroup",q))),j.push((()=>fe(c,"lastUpdatedWindow",W))),j.push((()=>fe(c,"currentWindowId",H)));let Z={};void 0!==e[5]&&(Z.user=e[5]),void 0!==e[3]&&(Z.workspaces=e[3]),C=new eb({props:Z}),j.push((()=>fe(C,"user",X))),j.push((()=>fe(C,"workspaces",Y)));let ee=e[16]&&e[17]&&sb(e);return{c(){pe(t.$$.fragment),a=E(),pe(c.$$.fragment),I=E(),pe(C.$$.fragment),R=E(),ee&&ee.c(),D=T()},m(e,n){ge(t,e,n),v(e,a,n),ge(c,e,n),v(e,I,n),ge(C,e,n),v(e,R,n),ee&&ee.m(e,n),v(e,D,n),N=!0},p(e,a){const v={};!n&&32&a[0]&&(n=!0,v.user=e[5],z((()=>n=!1))),!s&&64&a[0]&&(s=!0,v.userRef=e[6],z((()=>s=!1))),!r&&128&a[0]&&(r=!0,v.db=e[7],z((()=>r=!1))),!i&&256&a[0]&&(i=!0,v.fbApp=e[8],z((()=>i=!1))),!o&&65536&a[0]&&(o=!0,v.authLoaded=e[16],z((()=>o=!1))),t.$set(v);const w={};!l&&512&a[0]&&(l=!0,w.lastRefresh=e[9],z((()=>l=!1))),!u&&131072&a[0]&&(u=!0,w.windowsLoaded=e[17],z((()=>u=!1))),!h&&16&a[0]&&(h=!0,w.activeTab=e[4],z((()=>h=!1))),!d&&2&a[0]&&(d=!0,w.groups=e[1],z((()=>d=!1))),!f&&4&a[0]&&(f=!0,w.windows=e[2],z((()=>f=!1))),!p&&1&a[0]&&(p=!0,w.tabs=e[0],z((()=>p=!1))),!g&&1024&a[0]&&(g=!0,w.lastUpdate=e[10],z((()=>g=!1))),!m&&2048&a[0]&&(m=!0,w.lastUpdatedTab=e[11],z((()=>m=!1))),!A&&8192&a[0]&&(A=!0,w.lastUpdatedGroup=e[13],z((()=>A=!1))),!y&&4096&a[0]&&(y=!0,w.lastUpdatedWindow=e[12],z((()=>y=!1))),!b&&16384&a[0]&&(b=!0,w.currentWindowId=e[14],z((()=>b=!1))),c.$set(w);const I={};!k&&32&a[0]&&(k=!0,I.user=e[5],z((()=>k=!1))),!S&&8&a[0]&&(S=!0,I.workspaces=e[3],z((()=>S=!1))),C.$set(I),e[16]&&e[17]?ee?(ee.p(e,a),196608&a[0]&&oe(ee,1)):(ee=sb(e),ee.c(),oe(ee,1),ee.m(D.parentNode,D)):ee&&(re(),ae(ee,1,1,(()=>{ee=null})),ie())},i(e){N||(oe(t.$$.fragment,e),oe(c.$$.fragment,e),oe(C.$$.fragment,e),oe(ee),N=!0)},o(e){ae(t.$$.fragment,e),ae(c.$$.fragment,e),ae(C.$$.fragment,e),ae(ee),N=!1},d(e){me(t,e),e&&w(a),me(c,e),e&&w(I),me(C,e),e&&w(R),ee&&ee.d(e),e&&w(D)}}}function ab(e,t,n){let s,r,i,o,a,c,l,u,h,d,f,p,g,m,A=[],v=[],w=[],y=[];B((()=>{console.log("hey")}));return[A,v,w,y,s,r,i,o,a,c,l,u,h,d,f,p,g,m,function(e){r=e,n(5,r)},function(e){i=e,n(6,i)},function(e){o=e,n(7,o)},function(e){a=e,n(8,a)},function(e){g=e,n(16,g)},function(e){c=e,n(9,c)},function(e){m=e,n(17,m)},function(e){s=e,n(4,s)},function(e){v=e,n(1,v)},function(e){w=e,n(2,w)},function(e){A=e,n(0,A)},function(e){l=e,n(10,l)},function(e){u=e,n(11,u)},function(e){d=e,n(13,d)},function(e){h=e,n(12,h)},function(e){f=e,n(14,f)},function(e){r=e,n(5,r)},function(e){y=e,n(3,y)},function(e){p=e,n(15,p)},()=>n(9,c=Date.now()),()=>n(9,c=Date.now()),()=>n(9,c=Date.now())]}return new class extends we{constructor(e){super(),ve(this,e,ab,ob,o,{},null,[-1,-1])}}({target:document.body})}();
