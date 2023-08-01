var App=function(){"use strict";function e(){}const t=e=>e;function n(e){return e()}function s(){return Object.create(null)}function i(e){e.forEach(n)}function r(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let a;function c(e,t){return a||(a=document.createElement("a")),a.href=t,e===a.href}function l(e,t,n,s){return e[1]&&s?function(e,t){for(const n in t)e[n]=t[n];return e}(n.ctx.slice(),e[1](s(t))):n.ctx}const u="undefined"!=typeof window;let h=u?()=>window.performance.now():()=>Date.now(),d=u?e=>requestAnimationFrame(e):e;const f=new Set;function p(e){f.forEach((t=>{t.c(e)||(f.delete(t),t.f())})),0!==f.size&&d(p)}function g(e){let t;return 0===f.size&&d(p),{promise:new Promise((n=>{f.add(t={c:e,f:n})})),abort(){f.delete(t)}}}function m(e,t){e.appendChild(t)}function v(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function A(e){const t=I("style");return function(e,t){m(e.head||e,t),t.sheet}(v(e),t),t.sheet}function w(e,t,n){e.insertBefore(t,n||null)}function y(e){e.parentNode&&e.parentNode.removeChild(e)}function b(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function I(e){return document.createElement(e)}function E(e){return document.createTextNode(e)}function T(){return E(" ")}function C(){return E("")}function k(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function S(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function D(e,t){t=""+t,e.data!==t&&(e.data=t)}function N(e,t){e.value=null==t?"":t}function R(e,t,n,s){null==n?e.style.removeProperty(t):e.style.setProperty(t,n,s?"important":"")}function U(e,t,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(e,n,s,t),i}const x=new Map;let _,O=0;function L(e,t,n,s,i,r,o,a=0){const c=16.666/s;let l="{\n";for(let e=0;e<=1;e+=c){const s=t+(n-t)*r(e);l+=100*e+`%{${o(s,1-s)}}\n`}const u=l+`100% {${o(n,1-n)}}\n}`,h=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(u)}_${a}`,d=v(e),{stylesheet:f,rules:p}=x.get(d)||function(e,t){const n={stylesheet:A(t),rules:{}};return x.set(e,n),n}(d,e);p[h]||(p[h]=!0,f.insertRule(`@keyframes ${h} ${u}`,f.cssRules.length));const g=e.style.animation||"";return e.style.animation=`${g?`${g}, `:""}${h} ${s}ms linear ${i}ms 1 both`,O+=1,h}function P(e,t){const n=(e.style.animation||"").split(", "),s=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),i=n.length-s.length;i&&(e.style.animation=s.join(", "),O-=i,O||d((()=>{O||(x.forEach((e=>{const{ownerNode:t}=e.stylesheet;t&&y(t)})),x.clear())})))}function M(e){_=e}function B(){if(!_)throw new Error("Function called outside component initialization");return _}function F(e){B().$$.on_mount.push(e)}function V(){const e=B();return(t,n,{cancelable:s=!1}={})=>{const i=e.$$.callbacks[t];if(i){const r=U(t,n,{cancelable:s});return i.slice().forEach((t=>{t.call(e,r)})),!r.defaultPrevented}return!0}}function $(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach((e=>e.call(this,t)))}const G=[],j=[];let Q=[];const q=[],K=Promise.resolve();let W=!1;function z(e){Q.push(e)}function H(e){q.push(e)}const J=new Set;let X,Y=0;function Z(){if(0!==Y)return;const e=_;do{try{for(;Y<G.length;){const e=G[Y];Y++,M(e),ee(e.$$)}}catch(e){throw G.length=0,Y=0,e}for(M(null),G.length=0,Y=0;j.length;)j.pop()();for(let e=0;e<Q.length;e+=1){const t=Q[e];J.has(t)||(J.add(t),t())}Q.length=0}while(G.length);for(;q.length;)q.pop()();W=!1,J.clear(),M(e)}function ee(e){if(null!==e.fragment){e.update(),i(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(z)}}function te(){return X||(X=Promise.resolve(),X.then((()=>{X=null}))),X}function ne(e,t,n){e.dispatchEvent(U(`${t?"intro":"outro"}${n}`))}const se=new Set;let ie;function re(){ie={r:0,c:[],p:ie}}function oe(){ie.r||i(ie.c),ie=ie.p}function ae(e,t){e&&e.i&&(se.delete(e),e.i(t))}function ce(e,t,n,s){if(e&&e.o){if(se.has(e))return;se.add(e),ie.c.push((()=>{se.delete(e),s&&(n&&e.d(1),s())})),e.o(t)}else s&&s()}const le={duration:0};function ue(n,s,i){const o={direction:"in"};let a,c,l=s(n,i,o),u=!1,d=0;function f(){a&&P(n,a)}function p(){const{delay:s=0,duration:i=300,easing:r=t,tick:o=e,css:p}=l||le;p&&(a=L(n,0,1,i,s,r,p,d++)),o(0,1);const m=h()+s,v=m+i;c&&c.abort(),u=!0,z((()=>ne(n,!0,"start"))),c=g((e=>{if(u){if(e>=v)return o(1,0),ne(n,!0,"end"),f(),u=!1;if(e>=m){const t=r((e-m)/i);o(t,1-t)}}return u}))}let m=!1;return{start(){m||(m=!0,P(n),r(l)?(l=l(o),te().then(p)):p())},invalidate(){m=!1},end(){u&&(f(),u=!1)}}}function he(n,s,o){const a={direction:"out"};let c,l=s(n,o,a),u=!0;const d=ie;function f(){const{delay:s=0,duration:r=300,easing:o=t,tick:a=e,css:f}=l||le;f&&(c=L(n,1,0,r,s,o,f));const p=h()+s,m=p+r;z((()=>ne(n,!1,"start"))),g((e=>{if(u){if(e>=m)return a(0,1),ne(n,!1,"end"),--d.r||i(d.c),!1;if(e>=p){const t=o((e-p)/r);a(1-t,t)}}return u}))}return d.r+=1,r(l)?te().then((()=>{l=l(a),f()})):f(),{end(e){e&&l.tick&&l.tick(1,0),u&&(c&&P(n,c),u=!1)}}}function de(e,t){ce(e,1,1,(()=>{t.delete(e.key)}))}function fe(e,t,n,s,r,o,a,c,l,u,h,d){let f=e.length,p=o.length,g=f;const m={};for(;g--;)m[e[g].key]=g;const v=[],A=new Map,w=new Map,y=[];for(g=p;g--;){const e=d(r,o,g),i=n(e);let c=a.get(i);c?s&&y.push((()=>c.p(e,t))):(c=u(i,e),c.c()),A.set(i,v[g]=c),i in m&&w.set(i,Math.abs(g-m[i]))}const b=new Set,I=new Set;function E(e){ae(e,1),e.m(c,h),a.set(e.key,e),h=e.first,p--}for(;f&&p;){const t=v[p-1],n=e[f-1],s=t.key,i=n.key;t===n?(h=t.first,f--,p--):A.has(i)?!a.has(s)||b.has(s)?E(t):I.has(i)?f--:w.get(s)>w.get(i)?(I.add(s),E(t)):(b.add(i),f--):(l(n,a),f--)}for(;f--;){const t=e[f];A.has(t.key)||l(t,a)}for(;p;)E(v[p-1]);return i(y),v}function pe(e,t,n){const s=e.$$.props[t];void 0!==s&&(e.$$.bound[s]=n,n(e.$$.ctx[s]))}function ge(e){e&&e.c()}function me(e,t,s,o){const{fragment:a,after_update:c}=e.$$;a&&a.m(t,s),o||z((()=>{const t=e.$$.on_mount.map(n).filter(r);e.$$.on_destroy?e.$$.on_destroy.push(...t):i(t),e.$$.on_mount=[]})),c.forEach(z)}function ve(e,t){const n=e.$$;null!==n.fragment&&(!function(e){const t=[],n=[];Q.forEach((s=>-1===e.indexOf(s)?t.push(s):n.push(s))),n.forEach((e=>e())),Q=t}(n.after_update),i(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ae(e,t){-1===e.$$.dirty[0]&&(G.push(e),W||(W=!0,K.then(Z)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function we(t,n,r,o,a,c,l,u=[-1]){const h=_;M(t);const d=t.$$={fragment:null,ctx:[],props:c,update:e,not_equal:a,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(h?h.$$.context:[])),callbacks:s(),dirty:u,skip_bound:!1,root:n.target||h.$$.root};l&&l(d.root);let f=!1;if(d.ctx=r?r(t,n.props||{},((e,n,...s)=>{const i=s.length?s[0]:n;return d.ctx&&a(d.ctx[e],d.ctx[e]=i)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](i),f&&Ae(t,e)),n})):[],d.update(),f=!0,i(d.before_update),d.fragment=!!o&&o(d.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);d.fragment&&d.fragment.l(e),e.forEach(y)}else d.fragment&&d.fragment.c();n.intro&&ae(t.$$.fragment),me(t,n.target,n.anchor,n.customElement),Z()}M(h)}class ye{$destroy(){ve(this,1),this.$destroy=e}$on(t,n){if(!r(n))return e;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const e=s.indexOf(n);-1!==e&&s.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const be=async()=>await chrome.permissions.contains({permissions:["bookmarks"]}),Ie=async e=>(await chrome.storage.local.get([e])??{})[e],Ee=async e=>{await chrome.storage.local.set(e)},Te=async e=>{const t=new URL(await chrome.runtime.getURL("/_favicon/"));return t.searchParams.set("pageUrl",e),t.searchParams.set("size","32"),t.toString()};async function Ce(e){return e?await Ie(Se(e)):null}async function ke(e){await async function(e){let t=await Ie("openGroups");const n=Object.entries(t).find((([t,n])=>n==e.id));n&&delete t[n[0]],await Ee({openGroups:t})}(e);const t=Se(e.id);let n=await Ie("contextKeys");const s=n.indexOf(t);s>-1&&(n.splice(s,1),await Ee({contextKeys:n})),await chrome.storage.local.remove(t);const i="cr-"+e.id;await chrome.storage.local.remove(i)}function Se(e){return"c-"+e}const De={search:"Search",windows:"Windows",tabs:"Tabs",saved:"Saved",workspace:"Workspace",signin:"Signin"};function Ne(t){let n,s,i,r,o,a,c,l,u,h=t[0].length+"";return{c(){n=I("div"),s=I("div"),i=I("div"),r=E(h),o=E("\n        Selected"),a=T(),c=I("div"),c.textContent="Cancel",S(i,"class","count svelte-16t0lx7"),S(s,"class","text svelte-16t0lx7"),S(c,"class","cancel svelte-16t0lx7"),S(n,"class","selected svelte-16t0lx7")},m(e,h){w(e,n,h),m(n,s),m(s,i),m(i,r),m(s,o),m(n,a),m(n,c),l||(u=k(c,"mousedown",t[1]),l=!0)},p(e,[t]){1&t&&h!==(h=e[0].length+"")&&D(r,h)},i:e,o:e,d(e){e&&y(n),l=!1,u()}}}function Re(e,t,n){let{selectedTabs:s}=t;V();return e.$$set=e=>{"selectedTabs"in e&&n(0,s=e.selectedTabs)},e.$$.update=()=>{1&e.$$.dirty&&console.log(s)},[s,()=>{n(0,s=[])}]}class Ue extends ye{constructor(e){super(),we(this,e,Re,Ne,o,{selectedTabs:0})}}function xe(e){const t=e-1;return t*t*t+1}function _e(e,{delay:n=0,duration:s=400,easing:i=t}={}){const r=+getComputedStyle(e).opacity;return{delay:n,duration:s,easing:i,css:e=>"opacity: "+e*r}}function Oe(e,{delay:t=0,duration:n=400,easing:s=xe,axis:i="y"}={}){const r=getComputedStyle(e),o=+r.opacity,a="y"===i?"height":"width",c=parseFloat(r[a]),l="y"===i?["top","bottom"]:["left","right"],u=l.map((e=>`${e[0].toUpperCase()}${e.slice(1)}`)),h=parseFloat(r[`padding${u[0]}`]),d=parseFloat(r[`padding${u[1]}`]),f=parseFloat(r[`margin${u[0]}`]),p=parseFloat(r[`margin${u[1]}`]),g=parseFloat(r[`border${u[0]}Width`]),m=parseFloat(r[`border${u[1]}Width`]);return{delay:t,duration:n,easing:s,css:e=>`overflow: hidden;opacity: ${Math.min(20*e,1)*o};${a}: ${e*c}px;padding-${l[0]}: ${e*h}px;padding-${l[1]}: ${e*d}px;margin-${l[0]}: ${e*f}px;margin-${l[1]}: ${e*p}px;border-${l[0]}-width: ${e*g}px;border-${l[1]}-width: ${e*m}px;`}}var Le="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAA6NJREFUaEPtmVnITVEUx39fUR54oIwPCFGSlHnKECIyZCahDCWU4cGDF/EiYyhFipI5Y5EhMxEiHkwRSZmSIiUe9Nc5X6fd3ufus8+93Xvzrbp96az1X+u/hzVsNVS51FR5/NQRKPcO/tc7MB4YBLQDOkW/54B+r4FrwMlS71DIDswBZgODPYK7CuwD9nroBqlkITAKWA30C/B0G1gHnAuwTTXxJbANWFIE59uBpUXAqYXwIbAJWF7A6XfgAdAdaFRAdxewsFgkChHQcbnlcHYP2A3o76OETjegJzA/+msznwgcLwaJNAINgfOOM38EmOoRwGFgikNPJO97YATfAV3YtRbrccDpDI7HAqcs+r6LEERAq/8Q6GBY6yLvyBB8rLoY0AVOyh+gM/AyAK/gJbY5PAZMzuHsKDDJsF8FrM+B6WzmbgL9DWD9W/k8VGwJQQliQCig7FyX+APQPAH8A2gC/M7hrD7wFdDxjOUj0CIHppVAU+CTAaqVN3ckxK9W3KzkzYDPIWCuHegN3DEAt3gUM58YNgPLDMU+wF0fY5uO7Qgp85iZ4SAwI9RJwu4AMN3AaQ28C8W2EagH/AR0ZmN5EbXLoX5iO7XaHRMgXwAd2WBxXeInQBcDtS3wNtgTtAHeGPaXgOE5MJ1ZSD3OPAM4b85eAWw0MFUUc3W5rh1Qbr5hWZkhgIaUrKJM8x7Q8UyKpjpbm+GNn9bM2Sqn0p2CySrKaspuSbkCDM0KZOqnERgDnLE40P0YZqkVtli04honZ1o+jgbOlpKAsOVc869NZgH7UwJQG70zquCmmo6hjmNuKTTQyIGmrWT5Tzp9BTyOpjFVWVVrTWVdgfYForsIjMjLwIeArTLn9Rvb6wjpKAWLD4EYfAOwMtiT21BvRxNCcbMQkA+d+0WA+hdfUfFak3jsstkp47lGz1Q/WQnEYNOiyz3Sgf4LeAocAvSqoelL0jdlplCfZMtWJSEQg7aMnhb1vKhLq6CfRT+RsEmP6CXD9k1Zb67v1kovdAey+LDp9kppodXGLPB1UC4Cii/tzWmPpRezcionAQU0ELjuWG09CushuaR3oBC+z3dV5MsORVV6ZT6nlHsH4sA0E1xwRKlMZk5xtaqVQkABKSW7nt+dD8KVREAkXB2wvjUGvpm7VGkEFJ+GnBNGoGooNfxXBQHFrud3/adKq4jIVstzzL9PlbgD8eI3iNKoKrtzjK1kAj4puKJ3oI6A1wqUW6nq78BfwPSLMZWtJm8AAAAASUVORK5CYII=",Pe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAZJJREFUaEPtmElSxDAMRV/fjEvAFvoSDCtgxXAJYAuX4GZQppIidDuxZH03pHCqsoos/ycpVqINK782K9dPB/jtDPYM9AwEI9BLKBjA8PJ/lYEjIN3XwBVwHw7fTweXwB1wC7wPd3ELTwaegLOJxzfgpLiDzeAVOJ6YPgNby1IPwEfGoQJiV/y4jUmbyWjwOKZ4lyMCMSfeXKIegCR8bsMaCIkvL4AKQiI+iakBiELIxEcAaiGk4qMAXgi5eAWAFaKJeBVACSI9nzap8RiuObn2WlHtS5xrknNRztlKxCszMIq0QMjEtwBYKqf0TCq+A2SKe9UlZBEvPYGUJbR0zv/5Y9TSpCw2lv8XeR/wCPPYmmEijaxGUM2aRZhagIiQyFpJCSkEKHx8wXgzINtY9XvqAXgAzjMFGfk8mAvII3BheZM9AKsfq9wMUzl5N82UU5rOpf2KlycDaax4OkznzCkuKvg2GEs0TeVeWowWHVoOZ+rJwOFUOXbqAI5gNTHtGWgSVofTngFHsJqY9gw0CavD6ScSiGIxW05heAAAAABJRU5ErkJggg==";function Me(t){let n,s,i,r;return{c(){n=I("img"),S(n,"class","clear button svelte-yvv0x5"),S(n,"alt","Clear"),c(n.src,s=Pe)||S(n,"src",s)},m(e,s){w(e,n,s),i||(r=k(n,"mousedown",t[3]),i=!0)},p:e,d(e){e&&y(n),i=!1,r()}}}function Be(t){let n,s,i,r,o,a,l,u,h,d=t[0].length>0&&Me(t);return{c(){n=I("div"),s=I("img"),r=T(),o=I("input"),a=T(),d&&d.c(),c(s.src,i=Le)||S(s,"src",i),S(s,"alt","Search"),S(s,"class","svelte-yvv0x5"),S(o,"type","text"),S(o,"placeholder",t[2]),S(o,"class","svelte-yvv0x5"),S(n,"class","search-box svelte-yvv0x5"),S(n,"style",l=t[1]?"background-color: "+t[1]:"")},m(e,i){w(e,n,i),m(n,s),m(n,r),m(n,o),N(o,t[0]),m(n,a),d&&d.m(n,null),u||(h=k(o,"input",t[4]),u=!0)},p(e,[t]){4&t&&S(o,"placeholder",e[2]),1&t&&o.value!==e[0]&&N(o,e[0]),e[0].length>0?d?d.p(e,t):(d=Me(e),d.c(),d.m(n,null)):d&&(d.d(1),d=null),2&t&&l!==(l=e[1]?"background-color: "+e[1]:"")&&S(n,"style",l)},i:e,o:e,d(e){e&&y(n),d&&d.d(),u=!1,h()}}}function Fe(e,t,n){let{searchText:s=""}=t,{backgroundColor:i=null}=t,{placeholderText:r="Search"}=t;return e.$$set=e=>{"searchText"in e&&n(0,s=e.searchText),"backgroundColor"in e&&n(1,i=e.backgroundColor),"placeholderText"in e&&n(2,r=e.placeholderText)},[s,i,r,()=>{n(0,s="")},function(){s=this.value,n(0,s)}]}class Ve extends ye{constructor(e){super(),we(this,e,Fe,Be,o,{searchText:0,backgroundColor:1,placeholderText:2})}}var $e="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAgdJREFUaEPtmatLBUEUxn83mfRP8Ak2BYugSbFa1ahg1GK9RS3+BWoSrD6i0aDNKgaDiPjCLJhscmQvDLOzd8/snbsPmIHllu+cOd95fHdnp0XDV6vh8RMJVF1BTQWGgfECgd4WsJkEnnzsuhFYAXaAOR+HFnYf2FPYjwI3gPwK8UWFzT8ki8AacKZ1koPTVPkU2DD8zAD3mv1dzgeAx4Jt49pzCPjJCUayv2BgpAKqFnQRmACeNewVmCNgW4ELSkAyIQ7NJb3suySDqiwm+wWrQBYBzTBqSZrBis2uo4VMX19Z6uRqoX4SMNVGS7aDc6pT2QRstfElkVKnsgksA1e+USf4V2DaVrSyCUgs0qLS8/Yy58Ie/m/gGji2jaog4CpAKTIaUoVsEpGAmZF+ymjW/Da+ApvAiaE2Y1qlqssQd9RpHZDXFpFM1aoTAVXAdZXRQsGLURMqMNjtPFF3AofAVlIe5/G0zgRccp6Kt84E5J/ffmdKHTUjgcLykW8YK2DmSPuBKj+vekSsQKyAvlucSJFQ+xAVZbTHpHqZxyGueoiDz4BX/QOBC70LyZXSW6AAQrsZAd5Np1m3Jw/AVOjde/R3B8xrjpSCkfuxix43DG2+ClxqCQhuFjgAlkJH4unvBWgD5y47zQWcfNOXp4r1AXwCv1mbawhUEbh6z0hAnao+ARtfgT/ApJMx3SAEhgAAAABJRU5ErkJggg==",Ge="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAiNJREFUaEPtmE0rRUEYx383JRayslJeimwVsbJiQxbylh2xwpfgO4gVZWHjLaXYsLIiylaUl2JjQxZWSo9m6nTvHeecmTn33FNndvf2zMzvP89/zswzBTLeChnnJxeQdgbzDOQZcFwBXxZqAV5isjQAXzH7lIS7ClgBRoEeYANYigi0Biyr2FVAxrFqrgIegbbAzHvAdAjJLjAViHkDmq3owekcENs8l5n4PxHF8Lp7q4UF//q6ZmAdWIwowgQfx3re90ANsA+MhYgwwR8Bk8BPGhbSc9YDB8CwQYT8HfS8DjsFJoBvW3gfFtJzNyoRgxFhzhX8Z8R4Y5jrHggO3KREDIRAXSj4d1d4nxnQLPI5PAT6DHBXwDjw6gM+CQEyZrsS0V0Eeavg5ezw1nxaKAjVBeyoE1r+F/gZ4M4buRooKQGacw6oBeQz+uEbPikLJcFZka9QRcH1ZElbKHFRuYDElzhkgjwDeQYcVyBpC8k1ug44ztpBlumrRKYvc3Kdluqs32DtS1ULVOV1OtMFjZSUUtwPRfyonKlivipKSinqBX6kDLy8EUkrV9SfKBGpFvWZf1bZBOYNK1/8xGh6G9oCFiJaryTM5SDrAO4jwuswk4hO4MFGhIsAme86UPfKb5vH3Rug1wbeR0kpz+Kz6oU6jhW09Z6A7TSf1/XCiZ3iWsCmj9c9YJt1r/1c94BXGJvBcgE2q+azT54Bn6tpM1bmM/ALFtBZMYX2Sk4AAAAASUVORK5CYII=",je="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAl1JREFUaEPt2TusDHEUx/HPDaEhIaLwKCRUNBIJSqLSoVB4BREUHgUKFChQoPAoEEG8CgU6lVAikWgohBKFCAmNhEROMjdZY2Z3dv8z92aTmfLM+Z/z+57z35n9nxkx5NfIkOvXAox3B9sO9OjAXEzGh6Y61WQHrmBnJvwmtjUB0RTAXWzICb6HjXVDNAFwvUu1b2B7nRB1A1zGrh4CY2vtrguiToDz2FdR2AXsr+jb1a0ugDM4WJDpd2abWHDvLA6lQtQBcBJHCoT8xJbMfgtTCnxO4WgKRCrAcRwrEPAVm/E4u7catzGjwPcEIs5AVyrAR8zOZQ5biH+as6/MIObk7J+Qt1WGSQGYj/e5TPHG3YTnJQqW4w5ibee1YNC3dQpACHiAtZmSV9iB1z3KtxjXsCTze4h1lUuec0wFiHDLMAuP+hSxBp/xos91/7jXAZCSP3ltC5BcwsQAbQcSC5i8vO1AcgkTA7QdSCxg8vK2A8klTAzQdgArMAFP+izmKvzBsz7X1fpnrnN49TIbp7ztIWghYryyNPO7WmGSURoyZQtNw7dc5DdYjzKIEH8fi3LrpuP7IJ1IAYiZ5xdMrQhRJv4HZuLXWANEvjjQFx3I850oEx8xxvVQHwJiNHK4oHqjEHGraNuE/XTJSKZyM1K2UGeSGFIdKIEIc37Ph+1cyTCssvhwrAsgYl3EnorZL2FvRd+ubnUCRKLOx2pZ4qTHZj5o3QARP57xW0vU1/6howmA0D7UHzhGiz/Un5hGIeZhEt7V8YMtitHUFmpK739xW4AxK3VJorYD492Bv44PUzEexY+1AAAAAElFTkSuQmCC",Qe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAW1JREFUaEPtmE0uRFEQRk+P/GxBzxixAHbAqCVsgQkDCYIlNEFiwIQtkDBiByyAETO24GcmldxOOqVb8vpVtZTUHb2kc+ueU1/dpHMbBF+N4PykwF8nmAn89wT2i+Cul6jXCI0Anwp6FPiyFvESOAXWFOwZsB5F4BWYULBvQDOKwApwrmBXgYsoAsK5BRwW4G3gyBpe6nndAQ/WnjVTYGit7nNQJpAJ1OxAjlDNBtbengn80sJZ4KT8vgE81G53jwJeCUwDj+q8GeDJWsJL4BaYV7B3wEIUgXtARqh7yQjNRREQeJHoXgJvfg+8RkjA5R4cF4NNj/nPv9PW8zxIPc8RGoSn8p4UqNwy4w2ZgHFDK5fLBCq3zHiDZwLyMr1TeA8AlxdqL4EWcK2avQjcGAfg9jL3DEwq2BdgKorAJbCkYK+A5SgCY8C7gh0HPqIIdDj3ykfbGrxTz+sSe/H+qJsCQ2t1n4MygUygZge+AWtGIjF3tB3MAAAAAElFTkSuQmCC";const qe={grey:"#dadce0",blue:"#8ab4f8",red:"#f18b82",yellow:"#fbd563",green:"#81c995",pink:"#f08aca",purple:"#c58af9",cyan:"#78d9ec",orange:"#f5ac70"};function Ke(e,t,n){const s=e.slice();return s[5]=t[n][0],s[6]=t[n][1],s}function We(e){let t,n,s,i,r,o;function a(){return e[3](e[5])}return{c(){t=I("div"),n=I("div"),i=T(),S(n,"class",s="color "+(e[0].color==e[5]?" selected":"")+" svelte-110xtv0"),R(n,"background-color",e[6]),S(t,"class","color-container svelte-110xtv0")},m(e,s){w(e,t,s),m(t,n),m(t,i),r||(o=k(n,"mousedown",a),r=!0)},p(t,i){e=t,1&i&&s!==(s="color "+(e[0].color==e[5]?" selected":"")+" svelte-110xtv0")&&S(n,"class",s)},d(e){e&&y(t),r=!1,o()}}}function ze(e){let t,n=0==e[1].length||e[1].includes(e[5]),s=n&&We(e);return{c(){s&&s.c(),t=C()},m(e,n){s&&s.m(e,n),w(e,t,n)},p(e,i){2&i&&(n=0==e[1].length||e[1].includes(e[5])),n?s?s.p(e,i):(s=We(e),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null)},d(e){s&&s.d(e),e&&y(t)}}}function He(t){let n,s=Object.entries(qe),i=[];for(let e=0;e<s.length;e+=1)i[e]=ze(Ke(t,s,e));return{c(){n=I("div");for(let e=0;e<i.length;e+=1)i[e].c();S(n,"class","colors svelte-110xtv0")},m(e,t){w(e,n,t);for(let e=0;e<i.length;e+=1)i[e]&&i[e].m(n,null)},p(e,[t]){if(7&t){let r;for(s=Object.entries(qe),r=0;r<s.length;r+=1){const o=Ke(e,s,r);i[r]?i[r].p(o,t):(i[r]=ze(o),i[r].c(),i[r].m(n,null))}for(;r<i.length;r+=1)i[r].d(1);i.length=s.length}},i:e,o:e,d(e){e&&y(n),b(i,e)}}}function Je(e,t,n){let{group:s={}}=t,{colors:i=[]}=t,r=V();const o=e=>{r("colorSelected",e)};return e.$$set=e=>{"group"in e&&n(0,s=e.group),"colors"in e&&n(1,i=e.colors)},[s,i,o,e=>{o(e)}]}class Xe extends ye{constructor(e){super(),we(this,e,Je,He,o,{group:0,colors:1})}}var Ye="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAZBJREFUaEPtmVEOwiAMhuvJ1JOpJ1NPpvkfSNjW0pYJ7RJJfBL0+yiUsp3o4O10cH76C0RHMCIClw7plzRmtsCdiG4dAhjyICKMX7SZApj5Zyd8GbbhPZrAlYgWy2mmAGYREejZAyUC4QIA2azjallp+yOFgLQNLNFJK2CBh3hKASt8SgEJHpnmzZwZqSLQggcod+ilEdDgS7ZaZ6UUAhb4tAJW+JQCHvh0Al54CHDFX0gx1wNfTut6bEg5vQe+SCCd4lxgLzUjq9FfwKvXh1ECU+BhN0JgGvwIganwmgDSGD6tC0i9RqfDtwTqQgq7HzVIq4XAtwQ+K9pNEVV9HwYvCXAnIHuINC7plqipKdLSgctCVoHQmRcfFAk1yDoCKeB7l1Aa+B6BVPBegbPwVG3ahuU2tXUTSwkhFN4TAU4gHH6PQAr4PQJIq1Kz1k6Wc0rts3cPhC+tEQKQatVO6qx6OkgXmnUx5/nNFAI/fxnnnQFrf+1K2fM6SHwlaoXy9NMEPL8V0vcvEDLt1Z8ePgJfJqZuMbB035gAAAAASUVORK5CYII=",Ze="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAYBJREFUaEPt2T9KA0EYhvEnl7BPbSHoGbyAdmqjhY2NBxDUwtpOEAQrK8ETWNjYWXqA9LlEGDCwLDt/9puJ+36QhVTOhOe3w86OZIbza+a8ny1g6hVsvQKnwBGwD7wA38DXJpEtAXfAbS/2CbjyABiKD91LYEcdEIsP3R/AsTIgFR+6z4A3VUAu/h4IYzZ6WR9iifhwZywAmXgLQCp+LEAufgxAMr4UIBtfAsjFh7+H7XKyK7ULycenVsBFfAzgJn4I4Cq+D3AX3wVcAs+JrWTy3SbWtt6FfoCDyCDZ+O4K/AK7EcC/HIutL5L1ClwDj4kvkUV0X2S5h1gS0X8Tu0MMHSVcIWJnITeImsOcxDOR+59YfiVygLCz5hCTvuhKANKIUoAsYgxAEjEWIIewAKQQVoAMogZQgrgAXq1H5ZJ5tYAc4hM4LAmxjmkBSCEWwNwaVzKvFSCGuAEeSkKsY1oCQsM5cALsAe9/Hzc/s1pvYtW81itQFWOZvAVY7lrLOStTMVIxhvg/OwAAAABJRU5ErkJggg==",et="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAuFJREFUaEPtmdurTVEUxn+nlJR7SkrIJSVSEpFESqQjuT4oefKovHrBi7+D8uCWRC4pkUjKUS4pJXIpESFKyoM+jZ115h5r77nWXmeveWrNWi9rjjnG931zzjXHmGuAUd4GRjl+GgJ1z2DMDMwC5hYEeruD/bqCvmSe668TgV3AIWBVyYDHgsDzgUfAhBL+NET+joZj8wjsAU6XDNQaJtXWZ3xcBTb36LMNr0dgLPC8xLIJsV0GtmZe3gLKLJ+sXwkybDl5BOYBL3tU6pstvxMZP/uAkz36jSIglaRWtmn9FWlnbRbDMXOA/R0cLQK09/JaTwTaNlARRl1stRLOA9u72CVJYAxwDtgWIUhyBPTBEPhBB7zeh8spKQLjDPwWB/wF4ClwJOhLhsB4A7/JAX/R9oLAJ0lgEqCv1EYHvM4ObeQ/duomR2CKKb/BAX8F2AH8tj599ZIiMM2Uz6YXLR7XTflfGWJJEZhu4Nc6yt8w5X8GfckQmGHg1zjgbxr4705fEgRmGngvJVe6ojX/NecAU9rxOtP3A5gY2nrJXF4uVDSVmA2cAVY6AO8Y+M9dTt8DgJ5PwEEvyRwpAqrgBH65A/AusBP4GJE6dDUZCQKqvAR+mRP9vin/oSuySIOqCSw08Eud+A9M+feR2KLMqiSgXF7KL3YiPzTwb6JQ/TdS7aCTWXV0WGP/s6qSwClgrwNQhbyyylcFwUuQe8BkGzfk7akqCXwBpgYgH5vyZUrUvp8Dl4K8/pmBf1FQ+ZZ53wkooNLjBcA14HhOXRzLp+8EYoHF2jUEskq513qxUpa0a2agmYGSS6e2z2iPeNuGN3sg3ANVKxzjr9SthH4pFc0aY8BUYaMq723WUd4fmifAkioiVuhDxdDq0F8eAaW/uj1Lqe22S7FhmDr95FthCZl3i9ZPYqojDlux1BY35jerrjf01NHeASpBW9eNpQjUATw6ZswMRDurw7AhUIfq2Zh/AW2FxDFkcNbsAAAAAElFTkSuQmCC";class tt{static users="users";static user(e){return this.users+"/"+e}static userTabs(e){return this.user(e)+"/tabs"}static userTab(e,t){return this.userTabs(e)+"/"+t}static userContexts(e){return this.user(e)+"/contexts"}static userContext(e,t){return this.userContexts(e)+"/"+t}static userResources(e){return this.user(e)+"/resources"}static userResource(e,t){return this.userResources(e)+"/"+t}}
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
     */const nt=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&s+1<e.length&&56320==(64512&e.charCodeAt(s+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++s)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},st={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let t=0;t<e.length;t+=3){const i=e[t],r=t+1<e.length,o=r?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,l=i>>2,u=(3&i)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,r||(h=64)),s.push(n[l],n[u],n[h],n[d])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(nt(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,s=0;for(;n<e.length;){const i=e[n++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=e[n++];t[s++]=String.fromCharCode((31&i)<<6|63&r)}else if(i>239&&i<365){const r=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[s++]=String.fromCharCode(55296+(r>>10)),t[s++]=String.fromCharCode(56320+(1023&r))}else{const r=e[n++],o=e[n++];t[s++]=String.fromCharCode((15&i)<<12|(63&r)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],r=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==r||null==o||null==a)throw new it;const c=i<<2|r>>4;if(s.push(c),64!==o){const e=r<<4&240|o>>2;if(s.push(e),64!==a){const e=o<<6&192|a;s.push(e)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class it extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rt=function(e){return function(e){const t=nt(e);return st.encodeByteArray(t,!0)}(e).replace(/\./g,"")},ot=function(e){try{return st.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
const at=()=>
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,ct=()=>{try{return at()||(()=>{if("undefined"==typeof process||void 0===process.env)return;const e=process.env.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&ot(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},lt=e=>{var t,n;return null===(n=null===(t=ct())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},ut=e=>{const t=lt(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),s]:[t.substring(0,n),s]},ht=()=>{var e;return null===(e=ct())||void 0===e?void 0:e.config},dt=e=>{var t;return null===(t=ct())||void 0===t?void 0:t[`_${e}`]};
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
class ft{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
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
function pt(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}class gt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mt.prototype.create)}}class mt{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],r=i?function(e,t){return e.replace(vt,((e,n)=>{const s=t[n];return null!=s?String(s):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${r} (${s}).`;return new gt(s,o,n)}}const vt=/\{\$([^}]+)}/g;function At(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const i of n){if(!s.includes(i))return!1;const n=e[i],r=t[i];if(wt(n)&&wt(r)){if(!At(n,r))return!1}else if(n!==r)return!1}for(const e of s)if(!n.includes(e))return!1;return!0}function wt(e){return null!==e&&"object"==typeof e}
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
     */function yt(e){const t=[];for(const[n,s]of Object.entries(e))Array.isArray(s)?s.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function bt(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,s]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(s)}})),t}function It(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}class Et{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let s;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");s=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===s.next&&(s.next=Tt),void 0===s.error&&(s.error=Tt),void 0===s.complete&&(s.complete=Tt);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch(e){}})),this.observers.push(s),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function Tt(){}
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
     */function Ct(e){return e&&e._delegate?e._delegate:e}class kt{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
     */const St="[DEFAULT]";
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
     */class Dt{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new ft;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),s=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(s)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(s)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
     */(e))try{this.getOrInitializeService({instanceIdentifier:St})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=St){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=St){return this.instances.has(e)}getOptions(e=St){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(s)}return s}onInit(e,t){var n;const s=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(s))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(s=e,s===St?void 0:s),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var s;return n||null}normalizeInstanceIdentifier(e=St){return this.component?this.component.multipleInstances?e:St:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Nt{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Dt(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
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
     */var Rt;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(Rt||(Rt={}));const Ut={debug:Rt.DEBUG,verbose:Rt.VERBOSE,info:Rt.INFO,warn:Rt.WARN,error:Rt.ERROR,silent:Rt.SILENT},xt=Rt.INFO,_t={[Rt.DEBUG]:"log",[Rt.VERBOSE]:"log",[Rt.INFO]:"info",[Rt.WARN]:"warn",[Rt.ERROR]:"error"},Ot=(e,t,...n)=>{if(t<e.logLevel)return;const s=(new Date).toISOString(),i=_t[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${s}]  ${e.name}:`,...n)};class Lt{constructor(e){this.name=e,this._logLevel=xt,this._logHandler=Ot,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Rt))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Ut[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Rt.DEBUG,...e),this._logHandler(this,Rt.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Rt.VERBOSE,...e),this._logHandler(this,Rt.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Rt.INFO,...e),this._logHandler(this,Rt.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Rt.WARN,...e),this._logHandler(this,Rt.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Rt.ERROR,...e),this._logHandler(this,Rt.ERROR,...e)}}const Pt=(e,t)=>t.some((t=>e instanceof t));let Mt,Bt;const Ft=new WeakMap,Vt=new WeakMap,$t=new WeakMap,Gt=new WeakMap,jt=new WeakMap;let Qt={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Vt.get(e);if("objectStoreNames"===t)return e.objectStoreNames||$t.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Wt(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function qt(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Bt||(Bt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(zt(this),t),Wt(Ft.get(this))}:function(...t){return Wt(e.apply(zt(this),t))}:function(t,...n){const s=e.call(zt(this),t,...n);return $t.set(s,t.sort?t.sort():[t]),Wt(s)}}function Kt(e){return"function"==typeof e?qt(e):(e instanceof IDBTransaction&&function(e){if(Vt.has(e))return;const t=new Promise(((t,n)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",r),e.removeEventListener("abort",r)},i=()=>{t(),s()},r=()=>{n(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",r),e.addEventListener("abort",r)}));Vt.set(e,t)}(e),Pt(e,Mt||(Mt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,Qt):e)}function Wt(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",r)},i=()=>{t(Wt(e.result)),s()},r=()=>{n(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&Ft.set(t,e)})).catch((()=>{})),jt.set(t,e),t}(e);if(Gt.has(e))return Gt.get(e);const t=Kt(e);return t!==e&&(Gt.set(e,t),jt.set(t,e)),t}const zt=e=>jt.get(e);const Ht=["get","getKey","getAll","getAllKeys","count"],Jt=["put","add","delete","clear"],Xt=new Map;function Yt(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Xt.get(t))return Xt.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,i=Jt.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!i&&!Ht.includes(n))return;const r=async function(e,...t){const r=this.transaction(e,i?"readwrite":"readonly");let o=r.store;return s&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&r.done]))[0]};return Xt.set(t,r),r}Qt=(e=>({...e,get:(t,n,s)=>Yt(t,n)||e.get(t,n,s),has:(t,n)=>!!Yt(t,n)||e.has(t,n)}))(Qt);
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
class Zt{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const en="@firebase/app",tn="0.9.13",nn=new Lt("@firebase/app"),sn="[DEFAULT]",rn={[en]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},on=new Map,an=new Map;function cn(e,t){try{e.container.addComponent(t)}catch(n){nn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ln(e){const t=e.name;if(an.has(t))return nn.debug(`There were multiple attempts to register component ${t}.`),!1;an.set(t,e);for(const t of on.values())cn(t,e);return!0}function un(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
     */const hn=new mt("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
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
class dn{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new kt("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hn.create("app-deleted",{appName:this._name})}}
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
     */const fn="9.23.0";function pn(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const s=Object.assign({name:sn,automaticDataCollectionEnabled:!1},t),i=s.name;if("string"!=typeof i||!i)throw hn.create("bad-app-name",{appName:String(i)});if(n||(n=ht()),!n)throw hn.create("no-options");const r=on.get(i);if(r){if(At(n,r.options)&&At(s,r.config))return r;throw hn.create("duplicate-app",{appName:i})}const o=new Nt(i);for(const e of an.values())o.addComponent(e);const a=new dn(n,s,o);return on.set(i,a),a}function gn(e=sn){const t=on.get(e);if(!t&&e===sn&&ht())return pn();if(!t)throw hn.create("no-app",{appName:e});return t}function mn(e,t,n){var s;let i=null!==(s=rn[e])&&void 0!==s?s:e;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const e=[`Unable to register library "${i}" with version "${t}":`];return r&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void nn.warn(e.join(" "))}ln(new kt(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
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
     */const vn="firebase-heartbeat-database",An=1,wn="firebase-heartbeat-store";let yn=null;function bn(){return yn||(yn=function(e,t,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(e,t),a=Wt(o);return s&&o.addEventListener("upgradeneeded",(e=>{s(Wt(o.result),e.oldVersion,e.newVersion,Wt(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{r&&e.addEventListener("close",(()=>r())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}(vn,An,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(wn)}}).catch((e=>{throw hn.create("idb-open",{originalErrorMessage:e.message})}))),yn}async function In(e,t){try{const n=(await bn()).transaction(wn,"readwrite"),s=n.objectStore(wn);await s.put(t,En(e)),await n.done}catch(e){if(e instanceof gt)nn.warn(e.message);else{const t=hn.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});nn.warn(t.message)}}}function En(e){return`${e.name}!${e.options.appId}`}
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
     */class Tn{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new kn(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Cn();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Cn(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let s=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Sn(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Sn(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}(this._heartbeatsCache.heartbeats),s=rt(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Cn(){return(new Date).toISOString().substring(0,10)}class kn{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise(((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=await bn();return await t.transaction(wn).objectStore(wn).get(En(e))}catch(e){if(e instanceof gt)nn.warn(e.message);else{const t=hn.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});nn.warn(t.message)}}}(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return In(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return In(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Sn(e){return rt(JSON.stringify({version:2,heartbeats:e})).length}
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
     */var Dn;Dn="",ln(new kt("platform-logger",(e=>new Zt(e)),"PRIVATE")),ln(new kt("heartbeat",(e=>new Tn(e)),"PRIVATE")),mn(en,tn,Dn),mn(en,tn,"esm2017"),mn("fire-js","");var Nn,Rn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Un=Un||{},xn=Rn||self;function _n(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function On(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var Ln="closure_uid_"+(1e9*Math.random()>>>0),Pn=0;function Mn(e,t,n){return e.call.apply(e.bind,arguments)}function Bn(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function Fn(e,t,n){return(Fn=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Mn:Bn).apply(null,arguments)}function Vn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function $n(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,s){for(var i=Array(arguments.length-2),r=2;r<arguments.length;r++)i[r-2]=arguments[r];return t.prototype[n].apply(e,i)}}function Gn(){this.s=this.s,this.o=this.o}Gn.prototype.s=!1,Gn.prototype.sa=function(){var e;!this.s&&(this.s=!0,this.N(),0)&&(e=this,Object.prototype.hasOwnProperty.call(e,Ln)&&e[Ln]||(e[Ln]=++Pn))},Gn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const jn=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Qn(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function qn(e,t){for(let t=1;t<arguments.length;t++){const n=arguments[t];if(_n(n)){const t=e.length||0,s=n.length||0;e.length=t+s;for(let i=0;i<s;i++)e[t+i]=n[i]}else e.push(n)}}function Kn(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Kn.prototype.h=function(){this.defaultPrevented=!0};var Wn=function(){if(!xn.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{xn.addEventListener("test",(()=>{}),t),xn.removeEventListener("test",(()=>{}),t)}catch(e){}return e}();function zn(e){return/^[\s\xa0]*$/.test(e)}function Hn(){var e=xn.navigator;return e&&(e=e.userAgent)?e:""}function Jn(e){return-1!=Hn().indexOf(e)}function Xn(e){return Xn[" "](e),e}Xn[" "]=function(){};var Yn,Zn,es,ts=Jn("Opera"),ns=Jn("Trident")||Jn("MSIE"),ss=Jn("Edge"),is=ss||ns,rs=Jn("Gecko")&&!(-1!=Hn().toLowerCase().indexOf("webkit")&&!Jn("Edge"))&&!(Jn("Trident")||Jn("MSIE"))&&!Jn("Edge"),os=-1!=Hn().toLowerCase().indexOf("webkit")&&!Jn("Edge");function as(){var e=xn.document;return e?e.documentMode:void 0}e:{var cs="",ls=(Zn=Hn(),rs?/rv:([^\);]+)(\)|;)/.exec(Zn):ss?/Edge\/([\d\.]+)/.exec(Zn):ns?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Zn):os?/WebKit\/(\S+)/.exec(Zn):ts?/(?:Version)[ \/]?(\S+)/.exec(Zn):void 0);if(ls&&(cs=ls?ls[1]:""),ns){var us=as();if(null!=us&&us>parseFloat(cs)){Yn=String(us);break e}}Yn=cs}if(xn.document&&ns){var hs=as();es=hs||(parseInt(Yn,10)||void 0)}else es=void 0;var ds=es;function fs(e,t){if(Kn.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(rs){e:{try{Xn(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:ps[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&fs.$.h.call(this)}}$n(fs,Kn);var ps={2:"touch",3:"pen",4:"mouse"};fs.prototype.h=function(){fs.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var gs="closure_listenable_"+(1e6*Math.random()|0),ms=0;function vs(e,t,n,s,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.la=i,this.key=++ms,this.fa=this.ia=!1}function As(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function ws(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function ys(e){const t={};for(const n in e)t[n]=e[n];return t}const bs="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Is(e,t){let n,s;for(let t=1;t<arguments.length;t++){for(n in s=arguments[t],s)e[n]=s[n];for(let t=0;t<bs.length;t++)n=bs[t],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function Es(e){this.src=e,this.g={},this.h=0}function Ts(e,t){var n=t.type;if(n in e.g){var s,i=e.g[n],r=jn(i,t);(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(As(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function Cs(e,t,n,s){for(var i=0;i<e.length;++i){var r=e[i];if(!r.fa&&r.listener==t&&r.capture==!!n&&r.la==s)return i}return-1}Es.prototype.add=function(e,t,n,s,i){var r=e.toString();(e=this.g[r])||(e=this.g[r]=[],this.h++);var o=Cs(e,t,s,i);return-1<o?(t=e[o],n||(t.ia=!1)):((t=new vs(t,this.src,r,!!s,i)).ia=n,e.push(t)),t};var ks="closure_lm_"+(1e6*Math.random()|0),Ss={};function Ds(e,t,n,s,i){if(s&&s.once)return Rs(e,t,n,s,i);if(Array.isArray(t)){for(var r=0;r<t.length;r++)Ds(e,t[r],n,s,i);return null}return n=Ms(n),e&&e[gs]?e.O(t,n,On(s)?!!s.capture:!!s,i):Ns(e,t,n,!1,s,i)}function Ns(e,t,n,s,i,r){if(!t)throw Error("Invalid event type");var o=On(i)?!!i.capture:!!i,a=Ls(e);if(a||(e[ks]=a=new Es(e)),(n=a.add(t,n,s,o,r)).proxy)return n;if(s=function(){function e(n){return t.call(e.src,e.listener,n)}const t=Os;return e}(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)Wn||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),s,i);else if(e.attachEvent)e.attachEvent(_s(t.toString()),s);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(s)}return n}function Rs(e,t,n,s,i){if(Array.isArray(t)){for(var r=0;r<t.length;r++)Rs(e,t[r],n,s,i);return null}return n=Ms(n),e&&e[gs]?e.P(t,n,On(s)?!!s.capture:!!s,i):Ns(e,t,n,!0,s,i)}function Us(e,t,n,s,i){if(Array.isArray(t))for(var r=0;r<t.length;r++)Us(e,t[r],n,s,i);else s=On(s)?!!s.capture:!!s,n=Ms(n),e&&e[gs]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=Cs(r=e.g[t],n,s,i))&&(As(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete e.g[t],e.h--)))):e&&(e=Ls(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Cs(t,n,s,i)),(n=-1<e?t[e]:null)&&xs(n))}function xs(e){if("number"!=typeof e&&e&&!e.fa){var t=e.src;if(t&&t[gs])Ts(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(_s(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=Ls(t))?(Ts(n,e),0==n.h&&(n.src=null,t[ks]=null)):As(e)}}}function _s(e){return e in Ss?Ss[e]:Ss[e]="on"+e}function Os(e,t){if(e.fa)e=!0;else{t=new fs(t,this);var n=e.listener,s=e.la||e.src;e.ia&&xs(e),e=n.call(s,t)}return e}function Ls(e){return(e=e[ks])instanceof Es?e:null}var Ps="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ms(e){return"function"==typeof e?e:(e[Ps]||(e[Ps]=function(t){return e.handleEvent(t)}),e[Ps])}function Bs(){Gn.call(this),this.i=new Es(this),this.S=this,this.J=null}function Fs(e,t){var n,s=e.J;if(s)for(n=[];s;s=s.J)n.push(s);if(e=e.S,s=t.type||t,"string"==typeof t)t=new Kn(t,e);else if(t instanceof Kn)t.target=t.target||e;else{var i=t;Is(t=new Kn(s,e),i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];i=Vs(o,s,!0,t)&&i}if(i=Vs(o=t.g=e,s,!0,t)&&i,i=Vs(o,s,!1,t)&&i,n)for(r=0;r<n.length;r++)i=Vs(o=t.g=n[r],s,!1,t)&&i}function Vs(e,t,n,s){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Ts(e.i,o),i=!1!==a.call(c,s)&&i}}return i&&!s.defaultPrevented}$n(Bs,Gn),Bs.prototype[gs]=!0,Bs.prototype.removeEventListener=function(e,t,n,s){Us(this,e,t,n,s)},Bs.prototype.N=function(){if(Bs.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)As(n[s]);delete t.g[e],t.h--}}this.J=null},Bs.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)},Bs.prototype.P=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};var $s=xn.JSON.stringify;function Gs(){var e=Hs;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var js=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Qs),(e=>e.reset()));class Qs{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function qs(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Ks(e){xn.setTimeout((()=>{throw e}),0)}let Ws,zs=!1,Hs=new class{constructor(){this.h=this.g=null}add(e,t){const n=js.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},Js=()=>{const e=xn.Promise.resolve(void 0);Ws=()=>{e.then(Xs)}};var Xs=()=>{for(var e;e=Gs();){try{e.h.call(e.g)}catch(e){Ks(e)}var t=js;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}zs=!1};function Ys(e,t){Bs.call(this),this.h=e||1,this.g=t||xn,this.j=Fn(this.qb,this),this.l=Date.now()}function Zs(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function ei(e,t,n){if("function"==typeof e)n&&(e=Fn(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=Fn(e.handleEvent,e)}return 2147483647<Number(t)?-1:xn.setTimeout(e,t||0)}function ti(e){e.g=ei((()=>{e.g=null,e.i&&(e.i=!1,ti(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}$n(Ys,Bs),(Nn=Ys.prototype).ga=!1,Nn.T=null,Nn.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Fs(this,"tick"),this.ga&&(Zs(this),this.start()))}},Nn.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Nn.N=function(){Ys.$.N.call(this),Zs(this),delete this.g};class ni extends Gn{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:ti(this)}N(){super.N(),this.g&&(xn.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function si(e){Gn.call(this),this.h=e,this.g={}}$n(si,Gn);var ii=[];function ri(e,t,n,s){Array.isArray(n)||(n&&(ii[0]=n.toString()),n=ii);for(var i=0;i<n.length;i++){var r=Ds(t,n[i],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function oi(e){ws(e.g,(function(e,t){this.g.hasOwnProperty(t)&&xs(e)}),e),e.g={}}function ai(){this.g=!0}function ci(e,t,n,s){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<i.length;o++)i[o]=""}}}return $s(n)}catch(e){return t}}(e,n)+(s?" "+s:"")}))}si.prototype.N=function(){si.$.N.call(this),oi(this)},si.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},ai.prototype.Ea=function(){this.g=!1},ai.prototype.info=function(){};var li={},ui=null;function hi(){return ui=ui||new Bs}function di(e){Kn.call(this,li.Ta,e)}function fi(e){const t=hi();Fs(t,new di(t))}function pi(e,t){Kn.call(this,li.STAT_EVENT,e),this.stat=t}function gi(e){const t=hi();Fs(t,new pi(t,e))}function mi(e,t){Kn.call(this,li.Ua,e),this.size=t}function vi(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return xn.setTimeout((function(){e()}),t)}li.Ta="serverreachability",$n(di,Kn),li.STAT_EVENT="statevent",$n(pi,Kn),li.Ua="timingevent",$n(mi,Kn);var Ai={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},wi={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function yi(){}function bi(e){return e.h||(e.h=e.i())}function Ii(){}yi.prototype.h=null;var Ei,Ti={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ci(){Kn.call(this,"d")}function ki(){Kn.call(this,"c")}function Si(){}function Di(e,t,n,s){this.l=e,this.j=t,this.m=n,this.W=s||1,this.U=new si(this),this.P=Ri,e=is?125:void 0,this.V=new Ys(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Ni}function Ni(){this.i=null,this.g="",this.h=!1}$n(Ci,Kn),$n(ki,Kn),$n(Si,yi),Si.prototype.g=function(){return new XMLHttpRequest},Si.prototype.i=function(){return{}},Ei=new Si;var Ri=45e3,Ui={},xi={};function _i(e,t,n){e.L=1,e.v=Yi(Wi(t)),e.s=n,e.S=!0,Oi(e,null)}function Oi(e,t){e.G=Date.now(),Bi(e),e.A=Wi(e.v);var n=e.A,s=e.W;Array.isArray(s)||(s=[String(s)]),hr(n.i,"t",s),e.C=0,n=e.l.J,e.h=new Ni,e.g=uo(e.l,n?t:null,!e.s),0<e.O&&(e.M=new ni(Fn(e.Pa,e,e.g),e.O)),ri(e.U,e.g,"readystatechange",e.nb),t=e.I?ys(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),fi(),function(e,t,n,s,i,r){e.info((function(){if(e.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.W,e.s)}function Li(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.l.Ha)}function Pi(e,t,n){let s,i=!0;for(;!e.J&&e.C<n.length;){if(s=Mi(e,n),s==xi){4==t&&(e.o=4,gi(14),i=!1),ci(e.j,e.m,null,"[Incomplete Response]");break}if(s==Ui){e.o=4,gi(15),ci(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}ci(e.j,e.m,s,null),ji(e,s)}Li(e)&&s!=xi&&s!=Ui&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,gi(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.ba&&(e.ba=!0,(t=e.l).g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),no(t),t.M=!0,gi(11))):(ci(e.j,e.m,n,"[Invalid Chunked Response]"),Gi(e),$i(e))}function Mi(e,t){var n=e.C,s=t.indexOf("\n",n);return-1==s?xi:(n=Number(t.substring(n,s)),isNaN(n)?Ui:(s+=1)+n>t.length?xi:(t=t.slice(s,s+n),e.C=s+n,t))}function Bi(e){e.Y=Date.now()+e.P,Fi(e,e.P)}function Fi(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=vi(Fn(e.lb,e),t)}function Vi(e){e.B&&(xn.clearTimeout(e.B),e.B=null)}function $i(e){0==e.l.H||e.J||ro(e.l,e)}function Gi(e){Vi(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,Zs(e.V),oi(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function ji(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||vr(n.i,e)))if(!e.K&&vr(n.i,e)&&3==n.H){try{var s=n.Ja.g.parse(t)}catch(e){s=null}if(Array.isArray(s)&&3==s.length){var i=s;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.G+3e3<e.G))break e;io(n),zr(n)}to(n),gi(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=vi(Fn(n.ib,n),6e3));if(1>=mr(n.i)&&n.oa){try{n.oa()}catch(e){}n.oa=void 0}}else ao(n,11)}else if((e.K||n.g==e)&&io(n),!zn(t))for(i=n.Ja.g.parse(t),t=0;t<i.length;t++){let l=i[t];if(n.V=l[0],l=l[1],2==n.H)if("c"==l[0]){n.K=l[1],n.pa=l[2];const t=l[3];null!=t&&(n.ra=t,n.l.info("VER="+n.ra));const i=l[4];null!=i&&(n.Ga=i,n.l.info("SVER="+n.Ga));const u=l[5];null!=u&&"number"==typeof u&&0<u&&(s=1.5*u,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var r=s.i;r.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(r.j=r.l,r.g=new Set,r.h&&(Ar(r,r.h),r.h=null))}if(s.F){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(s.Da=e,Xi(s.I,s.F,e))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms"));var o=e;if((s=n).wa=lo(s,s.J?s.pa:null,s.Y),o.K){wr(s.i,o);var a=o,c=s.L;c&&a.setTimeout(c),a.B&&(Vi(a),Bi(a)),s.g=o}else eo(s);0<n.j.length&&Jr(n)}else"stop"!=l[0]&&"close"!=l[0]||ao(n,7);else 3==n.H&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?ao(n,7):Wr(n):"noop"!=l[0]&&n.h&&n.h.Aa(l),n.A=0)}fi()}catch(e){}}function Qi(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(_n(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(_n(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}(e),s=function(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(_n(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}for(s in t=[],n=0,e)t[n++]=e[s];return t}(e),i=s.length,r=0;r<i;r++)t.call(void 0,s[r],n&&n[r],e)}(Nn=Di.prototype).setTimeout=function(e){this.P=e},Nn.nb=function(e){e=e.target;const t=this.M;t&&3==$r(e)?t.l():this.Pa(e)},Nn.Pa=function(e){try{if(e==this.g)e:{const u=$r(this.g);var t=this.g.Ia();this.g.da();if(!(3>u)&&(3!=u||is||this.g&&(this.h.h||this.g.ja()||Gr(this.g)))){this.J||4!=u||7==t||fi(),Vi(this);var n=this.g.da();this.ca=n;t:if(Li(this)){var s=Gr(this.g);e="";var i=s.length,r=4==$r(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Gi(this),$i(this);var o="";break t}this.h.i=new xn.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:r&&t==i-1});s.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,function(e,t,n,s,i,r,o){e.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+r+" "+o}))}(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!zn(a)){var l=a;break t}}l=null}if(!(n=l)){this.i=!1,this.o=3,gi(12),Gi(this),$i(this);break e}ci(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ji(this,n)}this.S?(Pi(this,u,o),is&&this.i&&3==u&&(ri(this.U,this.V,"tick",this.mb),this.V.start())):(ci(this.j,this.m,o,null),ji(this,o)),4==u&&Gi(this),this.i&&!this.J&&(4==u?ro(this.l,this):(this.i=!1,Bi(this)))}else(function(e){const t={};e=(e.g&&2<=$r(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let s=0;s<e.length;s++){if(zn(e[s]))continue;var n=qs(e[s]);const i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const r=t[i]||[];t[i]=r,r.push(n)}!function(e,t){for(const n in e)t.call(void 0,e[n],n,e)}(t,(function(e){return e.join(", ")}))})(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.o=3,gi(12)):(this.o=0,gi(13)),Gi(this),$i(this)}}}catch(e){}},Nn.mb=function(){if(this.g){var e=$r(this.g),t=this.g.ja();this.C<t.length&&(Vi(this),Pi(this,e,t),this.i&&4!=e&&Bi(this))}},Nn.cancel=function(){this.J=!0,Gi(this)},Nn.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.L&&(fi(),gi(17)),Gi(this),this.o=2,$i(this)):Fi(this,this.Y-e)};var qi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ki(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Ki){this.h=e.h,zi(this,e.j),this.s=e.s,this.g=e.g,Hi(this,e.m),this.l=e.l;var t=e.i,n=new ar;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Ji(this,n),this.o=e.o}else e&&(t=String(e).match(qi))?(this.h=!1,zi(this,t[1]||"",!0),this.s=Zi(t[2]||""),this.g=Zi(t[3]||"",!0),Hi(this,t[4]),this.l=Zi(t[5]||"",!0),Ji(this,t[6]||"",!0),this.o=Zi(t[7]||"")):(this.h=!1,this.i=new ar(null,this.h))}function Wi(e){return new Ki(e)}function zi(e,t,n){e.j=n?Zi(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Hi(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Ji(e,t,n){t instanceof ar?(e.i=t,function(e,t){t&&!e.j&&(cr(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(lr(this,t),hr(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=er(t,rr)),e.i=new ar(t,e.h))}function Xi(e,t,n){e.i.set(t,n)}function Yi(e){return Xi(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Zi(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function er(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,tr),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function tr(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Ki.prototype.toString=function(){var e=[],t=this.j;t&&e.push(er(t,nr,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(er(t,nr,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(er(n,"/"==n.charAt(0)?ir:sr,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",er(n,or)),e.join("")};var nr=/[#\/\?@]/g,sr=/[#\?:]/g,ir=/[#\?]/g,rr=/[#\?@]/g,or=/#/g;function ar(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function cr(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),i=null;if(0<=s){var r=e[n].substring(0,s);i=e[n].substring(s+1)}else r=e[n];t(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function lr(e,t){cr(e),t=dr(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function ur(e,t){return cr(e),t=dr(e,t),e.g.has(t)}function hr(e,t,n){lr(e,t),0<n.length&&(e.i=null,e.g.set(dr(e,t),Qn(n)),e.h+=n.length)}function dr(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(Nn=ar.prototype).add=function(e,t){cr(this),this.i=null,e=dr(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},Nn.forEach=function(e,t){cr(this),this.g.forEach((function(n,s){n.forEach((function(n){e.call(t,n,s,this)}),this)}),this)},Nn.ta=function(){cr(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const i=e[s];for(let e=0;e<i.length;e++)n.push(t[s])}return n},Nn.Z=function(e){cr(this);let t=[];if("string"==typeof e)ur(this,e)&&(t=t.concat(this.g.get(dr(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},Nn.set=function(e,t){return cr(this),this.i=null,ur(this,e=dr(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},Nn.get=function(e,t){return e&&0<(e=this.Z(e)).length?String(e[0]):t},Nn.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const r=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var i=r;""!==o[s]&&(i+="="+encodeURIComponent(String(o[s]))),e.push(i)}}return this.i=e.join("&")};function fr(e){this.l=e||pr,xn.PerformanceNavigationTiming?e=0<(e=xn.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(xn.g&&xn.g.Ka&&xn.g.Ka()&&xn.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var pr=10;function gr(e){return!!e.h||!!e.g&&e.g.size>=e.j}function mr(e){return e.h?1:e.g?e.g.size:0}function vr(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Ar(e,t){e.g?e.g.add(t):e.h=t}function wr(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function yr(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Qn(e.i)}fr.prototype.cancel=function(){if(this.i=yr(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var br=class{stringify(e){return xn.JSON.stringify(e,void 0)}parse(e){return xn.JSON.parse(e,void 0)}};function Ir(){this.g=new br}function Er(e,t,n){const s=n||"";try{Qi(e,(function(e,n){let i=e;On(e)&&(i=$s(e)),t.push(s+n+"="+encodeURIComponent(i))}))}catch(e){throw t.push(s+"type="+encodeURIComponent("_badmap")),e}}function Tr(e,t,n,s,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(s)}catch(e){}}function Cr(e){this.l=e.fc||null,this.j=e.ob||!1}function kr(e,t){Bs.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Sr,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}$n(Cr,yi),Cr.prototype.g=function(){return new kr(this.l,this.j)},Cr.prototype.i=function(e){return function(){return e}}({}),$n(kr,Bs);var Sr=0;function Dr(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function Nr(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Rr(e)}function Rr(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(Nn=kr.prototype).open=function(e,t){if(this.readyState!=Sr)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Rr(this)},Nn.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||xn).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},Nn.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Nr(this)),this.readyState=Sr},Nn.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Rr(this)),this.g&&(this.readyState=3,Rr(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==xn.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Dr(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},Nn.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Nr(this):Rr(this),3==this.readyState&&Dr(this)}},Nn.Za=function(e){this.g&&(this.response=this.responseText=e,Nr(this))},Nn.Ya=function(e){this.g&&(this.response=e,Nr(this))},Nn.ka=function(){this.g&&Nr(this)},Nn.setRequestHeader=function(e,t){this.v.append(e,t)},Nn.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},Nn.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(kr.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Ur=xn.JSON.parse;function xr(e){Bs.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=_r,this.L=this.M=!1}$n(xr,Bs);var _r="",Or=/^https?$/i,Lr=["POST","PUT"];function Pr(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Mr(e),Fr(e)}function Mr(e){e.F||(e.F=!0,Fs(e,"complete"),Fs(e,"error"))}function Br(e){if(e.h&&void 0!==Un&&(!e.C[1]||4!=$r(e)||2!=e.da()))if(e.v&&4==$r(e))ei(e.La,0,e);else if(Fs(e,"readystatechange"),4==$r(e)){e.h=!1;try{const o=e.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var s;if(s=0===o){var i=String(e.I).match(qi)[1]||null;!i&&xn.self&&xn.self.location&&(i=xn.self.location.protocol.slice(0,-1)),s=!Or.test(i?i.toLowerCase():"")}n=s}if(n)Fs(e,"complete"),Fs(e,"success");else{e.m=6;try{var r=2<$r(e)?e.g.statusText:""}catch(e){r=""}e.j=r+" ["+e.da()+"]",Mr(e)}}finally{Fr(e)}}}function Fr(e,t){if(e.g){Vr(e);const n=e.g,s=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Fs(e,"ready");try{n.onreadystatechange=s}catch(e){}}}function Vr(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(xn.clearTimeout(e.A),e.A=null)}function $r(e){return e.g?e.g.readyState:0}function Gr(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case _r:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function jr(e){let t="";return ws(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Qr(e,t,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=jr(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):Xi(e,t,n))}function qr(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Kr(e){this.Ga=0,this.j=[],this.l=new ai,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=qr("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=qr("baseRetryDelayMs",5e3,e),this.hb=qr("retryDelaySeedMs",1e4,e),this.eb=qr("forwardChannelMaxRetries",2,e),this.xa=qr("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new fr(e&&e.concurrentRequestLimit),this.Ja=new Ir,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function Wr(e){if(Hr(e),3==e.H){var t=e.W++,n=Wi(e.I);if(Xi(n,"SID",e.K),Xi(n,"RID",t),Xi(n,"TYPE","terminate"),Yr(e,n),(t=new Di(e,e.l,t)).L=2,t.v=Yi(Wi(n)),n=!1,xn.navigator&&xn.navigator.sendBeacon)try{n=xn.navigator.sendBeacon(t.v.toString(),"")}catch(e){}!n&&xn.Image&&((new Image).src=t.v,n=!0),n||(t.g=uo(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Bi(t)}co(e)}function zr(e){e.g&&(no(e),e.g.cancel(),e.g=null)}function Hr(e){zr(e),e.u&&(xn.clearTimeout(e.u),e.u=null),io(e),e.i.cancel(),e.m&&("number"==typeof e.m&&xn.clearTimeout(e.m),e.m=null)}function Jr(e){if(!gr(e.i)&&!e.m){e.m=!0;var t=e.Na;Ws||Js(),zs||(Ws(),zs=!0),Hs.add(t,e),e.C=0}}function Xr(e,t){var n;n=t?t.m:e.W++;const s=Wi(e.I);Xi(s,"SID",e.K),Xi(s,"RID",n),Xi(s,"AID",e.V),Yr(e,s),e.o&&e.s&&Qr(s,e.o,e.s),n=new Di(e,e.l,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=Zr(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Ar(e.i,n),_i(n,s,t)}function Yr(e,t){e.na&&ws(e.na,(function(e,n){Xi(t,n,e)})),e.h&&Qi({},(function(e,n){Xi(t,n,e)}))}function Zr(e,t,n){n=Math.min(e.j.length,n);var s=e.h?Fn(e.h.Va,e.h,e):null;e:{var i=e.j;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let r=!0;for(let o=0;o<n;o++){let n=i[o].g;const a=i[o].map;if(n-=t,0>n)t=Math.max(0,i[o].g-100),r=!1;else try{Er(a,e,"req"+n+"_")}catch(e){s&&s(a)}}if(r){s=e.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,s}function eo(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;Ws||Js(),zs||(Ws(),zs=!0),Hs.add(t,e),e.A=0}}function to(e){return!(e.g||e.u||3<=e.A)&&(e.ba++,e.u=vi(Fn(e.Ma,e),oo(e,e.A)),e.A++,!0)}function no(e){null!=e.B&&(xn.clearTimeout(e.B),e.B=null)}function so(e){e.g=new Di(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=Wi(e.wa);Xi(t,"RID","rpc"),Xi(t,"SID",e.K),Xi(t,"AID",e.V),Xi(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&Xi(t,"TO",e.qa),Xi(t,"TYPE","xmlhttp"),Yr(e,t),e.o&&e.s&&Qr(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=Yi(Wi(t)),n.s=null,n.S=!0,Oi(n,e)}function io(e){null!=e.v&&(xn.clearTimeout(e.v),e.v=null)}function ro(e,t){var n=null;if(e.g==t){io(e),no(e),e.g=null;var s=2}else{if(!vr(e.i,t))return;n=t.F,wr(e.i,t),s=1}if(0!=e.H)if(t.i)if(1==s){n=t.s?t.s.length:0,t=Date.now()-t.G;var i=e.C;Fs(s=hi(),new mi(s,n)),Jr(e)}else eo(e);else if(3==(i=t.o)||0==i&&0<t.ca||!(1==s&&function(e,t){return!(mr(e.i)>=e.i.j-(e.m?1:0)||(e.m?(e.j=t.F.concat(e.j),0):1==e.H||2==e.H||e.C>=(e.cb?0:e.eb)||(e.m=vi(Fn(e.Na,e,t),oo(e,e.C)),e.C++,0)))}(e,t)||2==s&&to(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:ao(e,5);break;case 4:ao(e,10);break;case 3:ao(e,6);break;default:ao(e,2)}}function oo(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function ao(e,t){if(e.l.info("Error code "+t),2==t){var n=null;e.h&&(n=null);var s=Fn(e.pb,e);n||(n=new Ki("//www.google.com/images/cleardot.gif"),xn.location&&"http"==xn.location.protocol||zi(n,"https"),Yi(n)),function(e,t){const n=new ai;if(xn.Image){const s=new Image;s.onload=Vn(Tr,n,s,"TestLoadImage: loaded",!0,t),s.onerror=Vn(Tr,n,s,"TestLoadImage: error",!1,t),s.onabort=Vn(Tr,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=Vn(Tr,n,s,"TestLoadImage: timeout",!1,t),xn.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=e}else t(!1)}(n.toString(),s)}else gi(2);e.H=0,e.h&&e.h.za(t),co(e),Hr(e)}function co(e){if(e.H=0,e.ma=[],e.h){const t=yr(e.i);0==t.length&&0==e.j.length||(qn(e.ma,t),qn(e.ma,e.j),e.i.i.length=0,Qn(e.j),e.j.length=0),e.h.ya()}}function lo(e,t,n){var s=n instanceof Ki?Wi(n):new Ki(n);if(""!=s.g)t&&(s.g=t+"."+s.g),Hi(s,s.m);else{var i=xn.location;s=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var r=new Ki(null);s&&zi(r,s),t&&(r.g=t),i&&Hi(r,i),n&&(r.l=n),s=r}return n=e.F,t=e.Da,n&&t&&Xi(s,n,t),Xi(s,"VER",e.ra),Yr(e,s),s}function uo(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ha&&!e.va?new xr(new Cr({ob:!0})):new xr(e.va)).Oa(e.J),t}function ho(){}function fo(){if(ns&&!(10<=Number(ds)))throw Error("Environmental error: no available transport.")}function po(e,t){Bs.call(this),this.g=new Kr(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!zn(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!zn(t)&&(this.g.F=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new vo(this)}function go(e){Ci.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function mo(){ki.call(this),this.status=1}function vo(e){this.g=e}function Ao(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function wo(e,t,n){n||(n=0);var s=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)s[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)s[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var r=e.g[3],o=t+(r^n&(i^r))+s[0]+3614090360&4294967295;o=(n=(i=(r=(t=(n=(i=(r=(t=(n=(i=(r=(t=(n=(i=(r=(t=(n=(i=(r=(t=(n=(i=(r=(t=(n=(i=(r=(t=(n=(i=(r=(t=(n=(i=(r=(t=(n=(i=(r=(t=(n=(i=(r=(t=(n=(i=(r=(t=(n=(i=(r=(t=(n=(i=(r=(t=(n=(i=(r=(t=n+(o<<7&4294967295|o>>>25))+((o=r+(i^t&(n^i))+s[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^r&(t^n))+s[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(r^t))+s[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=t+(r^n&(i^r))+s[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=r+(i^t&(n^i))+s[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^r&(t^n))+s[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(r^t))+s[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=t+(r^n&(i^r))+s[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=r+(i^t&(n^i))+s[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^r&(t^n))+s[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(r^t))+s[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=t+(r^n&(i^r))+s[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=r+(i^t&(n^i))+s[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=i+(n^r&(t^n))+s[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^i&(r^t))+s[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=t+(i^r&(n^i))+s[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^i&(t^n))+s[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(r^t))+s[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^t&(i^r))+s[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^r&(n^i))+s[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^i&(t^n))+s[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(r^t))+s[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^t&(i^r))+s[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^r&(n^i))+s[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^i&(t^n))+s[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(r^t))+s[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^t&(i^r))+s[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=t+(i^r&(n^i))+s[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=r+(n^i&(t^n))+s[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=i+(t^n&(r^t))+s[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(r^t&(i^r))+s[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=t+(n^i^r)+s[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=r+(t^n^i)+s[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=i+(r^t^n)+s[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^r^t)+s[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^r)+s[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=r+(t^n^i)+s[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=i+(r^t^n)+s[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^r^t)+s[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^r)+s[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=r+(t^n^i)+s[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=i+(r^t^n)+s[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^r^t)+s[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^i^r)+s[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=r+(t^n^i)+s[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=i+(r^t^n)+s[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(i^r^t)+s[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=t+(i^(n|~r))+s[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(t|~i))+s[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(r|~n))+s[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(r^(i|~t))+s[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=t+(i^(n|~r))+s[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(t|~i))+s[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(r|~n))+s[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(r^(i|~t))+s[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=t+(i^(n|~r))+s[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(t|~i))+s[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=i+(t^(r|~n))+s[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(r^(i|~t))+s[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((r=(t=n+((o=t+(i^(n|~r))+s[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=r+(n^(t|~i))+s[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((i=r+((o=i+(t^(r|~n))+s[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~t))+s[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+r&4294967295}function yo(e,t){this.h=t;for(var n=[],s=!0,i=e.length-1;0<=i;i--){var r=0|e[i];s&&r==t||(n[i]=r,s=!1)}this.g=n}(Nn=xr.prototype).Oa=function(e){this.M=e},Nn.ha=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ei.g(),this.C=this.u?bi(this.u):bi(Ei),this.g.onreadystatechange=Fn(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(e){return void Pr(this,e)}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else{if("function"!=typeof s.keys||"function"!=typeof s.get)throw Error("Unknown input type for opt_headers: "+String(s));for(const e of s.keys())n.set(e,s.get(e))}s=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),i=xn.FormData&&e instanceof xn.FormData,!(0<=jn(Lr,t))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[e,t]of n)this.g.setRequestHeader(e,t);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Vr(this),0<this.B&&((this.L=function(e){return ns&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Fn(this.ua,this)):this.A=ei(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){Pr(this,e)}},Nn.ua=function(){void 0!==Un&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Fs(this,"timeout"),this.abort(8))},Nn.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Fs(this,"complete"),Fs(this,"abort"),Fr(this))},Nn.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Fr(this,!0)),xr.$.N.call(this)},Nn.La=function(){this.s||(this.G||this.v||this.l?Br(this):this.kb())},Nn.kb=function(){Br(this)},Nn.isActive=function(){return!!this.g},Nn.da=function(){try{return 2<$r(this)?this.g.status:-1}catch(e){return-1}},Nn.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},Nn.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Ur(t)}},Nn.Ia=function(){return this.m},Nn.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(Nn=Kr.prototype).ra=8,Nn.H=1,Nn.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const i=new Di(this,this.l,e);let r=this.s;if(this.U&&(r?(r=ys(r),Is(r,this.U)):r=this.U),null!==this.o||this.O||(i.I=r,r=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){var s=this.j[n];if(void 0===(s="__data__"in s.map&&"string"==typeof(s=s.map.__data__)?s.length:void 0))break;if(4096<(t+=s)){t=n;break e}if(4096===t||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Zr(this,i,t),Xi(n=Wi(this.I),"RID",e),Xi(n,"CVER",22),this.F&&Xi(n,"X-HTTP-Session-Id",this.F),Yr(this,n),r&&(this.O?t="headers="+encodeURIComponent(String(jr(r)))+"&"+t:this.o&&Qr(n,this.o,r)),Ar(this.i,i),this.bb&&Xi(n,"TYPE","init"),this.P?(Xi(n,"$req",t),Xi(n,"SID","null"),i.aa=!0,_i(i,n,null)):_i(i,n,t),this.H=2}}else 3==this.H&&(e?Xr(this,e):0==this.j.length||gr(this.i)||Xr(this))},Nn.Ma=function(){if(this.u=null,so(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=vi(Fn(this.jb,this),e)}},Nn.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,gi(10),zr(this),so(this))},Nn.ib=function(){null!=this.v&&(this.v=null,zr(this),to(this),gi(19))},Nn.pb=function(e){e?(this.l.info("Successfully pinged google.com"),gi(2)):(this.l.info("Failed to ping google.com"),gi(1))},Nn.isActive=function(){return!!this.h&&this.h.isActive(this)},(Nn=ho.prototype).Ba=function(){},Nn.Aa=function(){},Nn.za=function(){},Nn.ya=function(){},Nn.isActive=function(){return!0},Nn.Va=function(){},fo.prototype.g=function(e,t){return new po(e,t)},$n(po,Bs),po.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;gi(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=lo(e,null,e.Y),Jr(e)},po.prototype.close=function(){Wr(this.g)},po.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=$s(e),e=n);t.j.push(new class{constructor(e,t){this.g=e,this.map=t}}(t.fb++,e)),3==t.H&&Jr(t)},po.prototype.N=function(){this.g.h=null,delete this.j,Wr(this.g),delete this.g,po.$.N.call(this)},$n(go,Ci),$n(mo,ki),$n(vo,ho),vo.prototype.Ba=function(){Fs(this.g,"a")},vo.prototype.Aa=function(e){Fs(this.g,new go(e))},vo.prototype.za=function(e){Fs(this.g,new mo)},vo.prototype.ya=function(){Fs(this.g,"b")},$n(Ao,(function(){this.blockSize=-1})),Ao.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},Ao.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,s=this.m,i=this.h,r=0;r<t;){if(0==i)for(;r<=n;)wo(this,e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(s[i++]=e.charCodeAt(r++),i==this.blockSize){wo(this,s),i=0;break}}else for(;r<t;)if(s[i++]=e[r++],i==this.blockSize){wo(this,s),i=0;break}}this.h=i,this.i+=t},Ao.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var s=0;32>s;s+=8)e[n++]=this.g[t]>>>s&255;return e};var bo={};function Io(e){return-128<=e&&128>e?function(e,t){var n=bo;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,(function(e){return new yo([0|e],0>e?-1:0)})):new yo([0|e],0>e?-1:0)}function Eo(e){if(isNaN(e)||!isFinite(e))return Co;if(0>e)return Ro(Eo(-e));for(var t=[],n=1,s=0;e>=n;s++)t[s]=e/n|0,n*=To;return new yo(t,0)}var To=4294967296,Co=Io(0),ko=Io(1),So=Io(16777216);function Do(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function No(e){return-1==e.h}function Ro(e){for(var t=e.g.length,n=[],s=0;s<t;s++)n[s]=~e.g[s];return new yo(n,~e.h).add(ko)}function Uo(e,t){return e.add(Ro(t))}function xo(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function _o(e,t){this.g=e,this.h=t}function Oo(e,t){if(Do(t))throw Error("division by zero");if(Do(e))return new _o(Co,Co);if(No(e))return t=Oo(Ro(e),t),new _o(Ro(t.g),Ro(t.h));if(No(t))return t=Oo(e,Ro(t)),new _o(Ro(t.g),t.h);if(30<e.g.length){if(No(e)||No(t))throw Error("slowDivide_ only works with positive integers.");for(var n=ko,s=t;0>=s.X(e);)n=Lo(n),s=Lo(s);var i=Po(n,1),r=Po(s,1);for(s=Po(s,2),n=Po(n,2);!Do(s);){var o=r.add(s);0>=o.X(e)&&(i=i.add(n),r=o),s=Po(s,1),n=Po(n,1)}return t=Uo(e,i.R(t)),new _o(i,t)}for(i=Co;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),s=48>=(s=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,s-48),o=(r=Eo(n)).R(t);No(o)||0<o.X(e);)o=(r=Eo(n-=s)).R(t);Do(r)&&(r=ko),i=i.add(r),e=Uo(e,o)}return new _o(i,e)}function Lo(e){for(var t=e.g.length+1,n=[],s=0;s<t;s++)n[s]=e.D(s)<<1|e.D(s-1)>>>31;return new yo(n,e.h)}function Po(e,t){var n=t>>5;t%=32;for(var s=e.g.length-n,i=[],r=0;r<s;r++)i[r]=0<t?e.D(r+n)>>>t|e.D(r+n+1)<<32-t:e.D(r+n);return new yo(i,e.h)}(Nn=yo.prototype).ea=function(){if(No(this))return-Ro(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var s=this.D(n);e+=(0<=s?s:To+s)*t,t*=To}return e},Nn.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(Do(this))return"0";if(No(this))return"-"+Ro(this).toString(e);for(var t=Eo(Math.pow(e,6)),n=this,s="";;){var i=Oo(n,t).g,r=((0<(n=Uo(n,i.R(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(Do(n=i))return r+s;for(;6>r.length;)r="0"+r;s=r+s}},Nn.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},Nn.X=function(e){return No(e=Uo(this,e))?-1:Do(e)?0:1},Nn.abs=function(){return No(this)?Ro(this):this},Nn.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0,i=0;i<=t;i++){var r=s+(65535&this.D(i))+(65535&e.D(i)),o=(r>>>16)+(this.D(i)>>>16)+(e.D(i)>>>16);s=o>>>16,r&=65535,o&=65535,n[i]=o<<16|r}return new yo(n,-2147483648&n[n.length-1]?-1:0)},Nn.R=function(e){if(Do(this)||Do(e))return Co;if(No(this))return No(e)?Ro(this).R(Ro(e)):Ro(Ro(this).R(e));if(No(e))return Ro(this.R(Ro(e)));if(0>this.X(So)&&0>e.X(So))return Eo(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],s=0;s<2*t;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var i=0;i<e.g.length;i++){var r=this.D(s)>>>16,o=65535&this.D(s),a=e.D(i)>>>16,c=65535&e.D(i);n[2*s+2*i]+=o*c,xo(n,2*s+2*i),n[2*s+2*i+1]+=r*c,xo(n,2*s+2*i+1),n[2*s+2*i+1]+=o*a,xo(n,2*s+2*i+1),n[2*s+2*i+2]+=r*a,xo(n,2*s+2*i+2)}for(s=0;s<t;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=t;s<2*t;s++)n[s]=0;return new yo(n,0)},Nn.gb=function(e){return Oo(this,e).h},Nn.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)&e.D(s);return new yo(n,this.h&e.h)},Nn.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)|e.D(s);return new yo(n,this.h|e.h)},Nn.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)^e.D(s);return new yo(n,this.h^e.h)},fo.prototype.createWebChannel=fo.prototype.g,po.prototype.send=po.prototype.u,po.prototype.open=po.prototype.m,po.prototype.close=po.prototype.close,Ai.NO_ERROR=0,Ai.TIMEOUT=8,Ai.HTTP_ERROR=6,wi.COMPLETE="complete",Ii.EventType=Ti,Ti.OPEN="a",Ti.CLOSE="b",Ti.ERROR="c",Ti.MESSAGE="d",Bs.prototype.listen=Bs.prototype.O,xr.prototype.listenOnce=xr.prototype.P,xr.prototype.getLastError=xr.prototype.Sa,xr.prototype.getLastErrorCode=xr.prototype.Ia,xr.prototype.getStatus=xr.prototype.da,xr.prototype.getResponseJson=xr.prototype.Wa,xr.prototype.getResponseText=xr.prototype.ja,xr.prototype.send=xr.prototype.ha,xr.prototype.setWithCredentials=xr.prototype.Oa,Ao.prototype.digest=Ao.prototype.l,Ao.prototype.reset=Ao.prototype.reset,Ao.prototype.update=Ao.prototype.j,yo.prototype.add=yo.prototype.add,yo.prototype.multiply=yo.prototype.R,yo.prototype.modulo=yo.prototype.gb,yo.prototype.compare=yo.prototype.X,yo.prototype.toNumber=yo.prototype.ea,yo.prototype.toString=yo.prototype.toString,yo.prototype.getBits=yo.prototype.D,yo.fromNumber=Eo,yo.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return Ro(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var s=Eo(Math.pow(n,8)),i=Co,r=0;r<t.length;r+=8){var o=Math.min(8,t.length-r),a=parseInt(t.substring(r,r+o),n);8>o?(o=Eo(Math.pow(n,o)),i=i.R(o).add(Eo(a))):i=(i=i.R(s)).add(Eo(a))}return i};var Mo=Ai,Bo=wi,Fo=li,Vo=10,$o=11,Go=Cr,jo=Ii,Qo=xr,qo=Ao,Ko=yo;const Wo="@firebase/firestore";
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
     */class zo{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}zo.UNAUTHENTICATED=new zo(null),zo.GOOGLE_CREDENTIALS=new zo("google-credentials-uid"),zo.FIRST_PARTY=new zo("first-party-uid"),zo.MOCK_USER=new zo("mock-user");
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
let Ho="9.23.0";
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
     */const Jo=new Lt("@firebase/firestore");function Xo(){return Jo.logLevel}function Yo(e,...t){if(Jo.logLevel<=Rt.DEBUG){const n=t.map(ta);Jo.debug(`Firestore (${Ho}): ${e}`,...n)}}function Zo(e,...t){if(Jo.logLevel<=Rt.ERROR){const n=t.map(ta);Jo.error(`Firestore (${Ho}): ${e}`,...n)}}function ea(e,...t){if(Jo.logLevel<=Rt.WARN){const n=t.map(ta);Jo.warn(`Firestore (${Ho}): ${e}`,...n)}}function ta(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
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
     */function na(e="Unexpected state"){const t=`FIRESTORE (${Ho}) INTERNAL ASSERTION FAILED: `+e;throw Zo(t),new Error(t)}function sa(e,t){e||na()}function ia(e,t){return e}
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
     */const ra={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class oa extends gt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
     */class aa{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
     */class ca{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class la{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(zo.UNAUTHENTICATED)))}shutdown(){}}class ua{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class ha{constructor(e){this.t=e,this.currentUser=zo.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const s=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new aa;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new aa,e.enqueueRetryable((()=>s(this.currentUser)))};const r=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await s(this.currentUser)}))},o=e=>{Yo("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Yo("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new aa)}}),0),r()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Yo("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(sa("string"==typeof t.accessToken),new ca(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return sa(null===e||"string"==typeof e),new zo(e)}}class da{constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=zo.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class fa{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new da(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(zo.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class pa{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ga{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const n=e=>{null!=e.error&&Yo("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.T;return this.T=e.token,Yo("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const s=e=>{Yo("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit((e=>s(e))),setTimeout((()=>{if(!this.appCheck){const e=this.I.getImmediate({optional:!0});e?s(e):Yo("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(sa("string"==typeof e.token),this.T=e.token,new pa(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
     */function ma(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
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
     */class va{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(256/62);let n="";for(;n.length<20;){const s=ma(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<t&&(n+=e.charAt(s[i]%62))}return n}}function Aa(e,t){return e<t?-1:e>t?1:0}function wa(e,t,n){return e.length===t.length&&e.every(((e,s)=>n(e,t[s])))}
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
     */class ya{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new oa(ra.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new oa(ra.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new oa(ra.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new oa(ra.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ya.fromMillis(Date.now())}static fromDate(e){return ya.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new ya(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Aa(this.nanoseconds,e.nanoseconds):Aa(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
     */class ba{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ba(e)}static min(){return new ba(new ya(0,0))}static max(){return new ba(new ya(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
     */class Ia{constructor(e,t,n){void 0===t?t=0:t>e.length&&na(),void 0===n?n=e.length-t:n>e.length-t&&na(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Ia.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ia?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const n=e.get(s),i=t.get(s);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ea extends Ia{construct(e,t,n){return new Ea(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new oa(ra.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Ea(t)}static emptyPath(){return new Ea([])}}const Ta=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ca extends Ia{construct(e,t,n){return new Ca(e,t,n)}static isValidIdentifier(e){return Ta.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ca.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Ca(["__name__"])}static fromServerFormat(e){const t=[];let n="",s=0;const i=()=>{if(0===n.length)throw new oa(ra.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let r=!1;for(;s<e.length;){const t=e[s];if("\\"===t){if(s+1===e.length)throw new oa(ra.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[s+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new oa(ra.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,s+=2}else"`"===t?(r=!r,s++):"."!==t||r?(n+=t,s++):(i(),s++)}if(i(),r)throw new oa(ra.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ca(t)}static emptyPath(){return new Ca([])}}
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
     */class ka{constructor(e){this.path=e}static fromPath(e){return new ka(Ea.fromString(e))}static fromName(e){return new ka(Ea.fromString(e).popFirst(5))}static empty(){return new ka(Ea.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Ea.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Ea.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ka(new Ea(e.slice()))}}function Sa(e){return new Da(e.readTime,e.key,-1)}class Da{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Da(ba.min(),ka.empty(),-1)}static max(){return new Da(ba.max(),ka.empty(),-1)}}function Na(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=ka.comparator(e.documentKey,t.documentKey),0!==n?n:Aa(e.largestBatchId,t.largestBatchId))}
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
     */const Ra="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ua{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
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
     */async function xa(e){if(e.code!==ra.FAILED_PRECONDITION||e.message!==Ra)throw e;Yo("LocalStore","Unexpectedly lost primary lease")}
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
     */class _a{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&na(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new _a(((n,s)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,s)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof _a?t:_a.resolve(t)}catch(e){return _a.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):_a.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):_a.reject(t)}static resolve(e){return new _a(((t,n)=>{t(e)}))}static reject(e){return new _a(((t,n)=>{n(e)}))}static waitFor(e){return new _a(((t,n)=>{let s=0,i=0,r=!1;e.forEach((e=>{++s,e.next((()=>{++i,r&&i===s&&t()}),(e=>n(e)))})),r=!0,i===s&&t()}))}static or(e){let t=_a.resolve(!1);for(const n of e)t=t.next((e=>e?_a.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,s)=>{n.push(t.call(this,e,s))})),this.waitFor(n)}static mapArray(e,t){return new _a(((n,s)=>{const i=e.length,r=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;t(e[c]).next((e=>{r[c]=e,++o,o===i&&n(r)}),(e=>s(e)))}}))}static doWhile(e,t){return new _a(((n,s)=>{const i=()=>{!0===e()?t().next((()=>{i()}),s):n()};i()}))}}function Oa(e){return"IndexedDbTransactionError"===e.name}
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
     */class La{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}function Pa(e){return null==e}function Ma(e){return 0===e&&1/e==-1/0}
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
function Ba(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Fa(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Va(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
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
     */La.ct=-1;class $a{constructor(e,t){this.comparator=e,this.root=t||ja.EMPTY}insert(e,t){return new $a(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ja.BLACK,null,null))}remove(e){return new $a(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ja.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(0===s)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ga(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ga(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ga(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ga(this.root,e,this.comparator,!0)}}class Ga{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ja{constructor(e,t,n,s,i){this.key=e,this.value=t,this.color=null!=n?n:ja.RED,this.left=null!=s?s:ja.EMPTY,this.right=null!=i?i:ja.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,i){return new ja(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const i=n(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,n),null):0===i?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ja.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===t(e,s.key)){if(s.right.isEmpty())return ja.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ja.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ja.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw na();if(this.right.isRed())throw na();const e=this.left.check();if(e!==this.right.check())throw na();return e+(this.isRed()?0:1)}}ja.EMPTY=null,ja.RED=!0,ja.BLACK=!1,ja.EMPTY=new class{constructor(){this.size=0}get key(){throw na()}get value(){throw na()}get color(){throw na()}get left(){throw na()}get right(){throw na()}copy(e,t,n,s,i){return this}insert(e,t,n){return new ja(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class Qa{constructor(e){this.comparator=e,this.data=new $a(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new qa(this.data.getIterator())}getIteratorFrom(e){return new qa(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Qa))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,s=n.getNext().key;if(0!==this.comparator(e,s))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Qa(this.comparator);return t.data=e,t}}class qa{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
     */class Ka{constructor(e){this.fields=e,e.sort(Ca.comparator)}static empty(){return new Ka([])}unionWith(e){let t=new Qa(Ca.comparator);for(const e of this.fields)t=t.add(e);for(const n of e)t=t.add(n);return new Ka(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return wa(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
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
     */class Wa extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
     */class za{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Wa("Invalid base64 string: "+e):e}}(e);return new za(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new za(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
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
     */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Aa(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}za.EMPTY_BYTE_STRING=new za("");const Ha=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ja(e){if(sa(!!e),"string"==typeof e){let t=0;const n=Ha.exec(e);if(sa(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:Xa(e.seconds),nanos:Xa(e.nanos)}}function Xa(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Ya(e){return"string"==typeof e?za.fromBase64String(e):za.fromUint8Array(e)}
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
     */function Za(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ec(e){const t=e.mapValue.fields.__previous_value__;return Za(t)?ec(t):t}function tc(e){const t=Ja(e.mapValue.fields.__local_write_time__.timestampValue);return new ya(t.seconds,t.nanos)}
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
     */class nc{constructor(e,t,n,s,i,r,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class sc{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new sc("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof sc&&e.projectId===this.projectId&&e.database===this.database}}
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
     */const ic={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function rc(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Za(e)?4:function(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
     */(e)?9007199254740991:10:na()}function oc(e,t){if(e===t)return!0;const n=rc(e);if(n!==rc(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return tc(e).isEqual(tc(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Ja(e.timestampValue),s=Ja(t.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Ya(e.bytesValue).isEqual(Ya(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Xa(e.geoPointValue.latitude)===Xa(t.geoPointValue.latitude)&&Xa(e.geoPointValue.longitude)===Xa(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Xa(e.integerValue)===Xa(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Xa(e.doubleValue),s=Xa(t.doubleValue);return n===s?Ma(n)===Ma(s):isNaN(n)&&isNaN(s)}return!1}(e,t);case 9:return wa(e.arrayValue.values||[],t.arrayValue.values||[],oc);case 10:return function(e,t){const n=e.mapValue.fields||{},s=t.mapValue.fields||{};if(Ba(n)!==Ba(s))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===s[e]||!oc(n[e],s[e])))return!1;return!0}(e,t);default:return na()}}function ac(e,t){return void 0!==(e.values||[]).find((e=>oc(e,t)))}function cc(e,t){if(e===t)return 0;const n=rc(e),s=rc(t);if(n!==s)return Aa(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Aa(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Xa(e.integerValue||e.doubleValue),s=Xa(t.integerValue||t.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(e,t);case 3:return lc(e.timestampValue,t.timestampValue);case 4:return lc(tc(e),tc(t));case 5:return Aa(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Ya(e),s=Ya(t);return n.compareTo(s)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),s=t.split("/");for(let e=0;e<n.length&&e<s.length;e++){const t=Aa(n[e],s[e]);if(0!==t)return t}return Aa(n.length,s.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Aa(Xa(e.latitude),Xa(t.latitude));return 0!==n?n:Aa(Xa(e.longitude),Xa(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],s=t.values||[];for(let e=0;e<n.length&&e<s.length;++e){const t=cc(n[e],s[e]);if(t)return t}return Aa(n.length,s.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===ic.mapValue&&t===ic.mapValue)return 0;if(e===ic.mapValue)return 1;if(t===ic.mapValue)return-1;const n=e.fields||{},s=Object.keys(n),i=t.fields||{},r=Object.keys(i);s.sort(),r.sort();for(let e=0;e<s.length&&e<r.length;++e){const t=Aa(s[e],r[e]);if(0!==t)return t;const o=cc(n[s[e]],i[r[e]]);if(0!==o)return o}return Aa(s.length,r.length)}(e.mapValue,t.mapValue);default:throw na()}}function lc(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Aa(e,t);const n=Ja(e),s=Ja(t),i=Aa(n.seconds,s.seconds);return 0!==i?i:Aa(n.nanos,s.nanos)}function uc(e){return hc(e)}function hc(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Ja(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Ya(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,ka.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const s of e.values||[])n?n=!1:t+=",",t+=hc(s);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",s=!0;for(const i of t)s?s=!1:n+=",",n+=`${i}:${hc(e.fields[i])}`;return n+"}"}(e.mapValue):na();var t,n}function dc(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function fc(e){return!!e&&"integerValue"in e}function pc(e){return!!e&&"arrayValue"in e}function gc(e){return!!e&&"nullValue"in e}function mc(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function vc(e){return!!e&&"mapValue"in e}function Ac(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Fa(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Ac(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ac(e.arrayValue.values[n]);return t}return Object.assign({},e)}class wc{constructor(e){this.value=e}static empty(){return new wc({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!vc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ac(t)}setAll(e){let t=Ca.emptyPath(),n={},s=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,s),n={},s=[],t=i.popLast()}e?n[i.lastSegment()]=Ac(e):s.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,s)}delete(e){const t=this.field(e.popLast());vc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return oc(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];vc(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){Fa(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new wc(Ac(this.value))}}function yc(e){const t=[];return Fa(e.fields,((e,n)=>{const s=new Ca([e]);if(vc(n)){const e=yc(n.mapValue).fields;if(0===e.length)t.push(s);else for(const n of e)t.push(s.child(n))}else t.push(s)})),new Ka(t)
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
     */}class bc{constructor(e,t,n,s,i,r,o){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=i,this.data=r,this.documentState=o}static newInvalidDocument(e){return new bc(e,0,ba.min(),ba.min(),ba.min(),wc.empty(),0)}static newFoundDocument(e,t,n,s){return new bc(e,1,t,ba.min(),n,s,0)}static newNoDocument(e,t){return new bc(e,2,t,ba.min(),ba.min(),wc.empty(),0)}static newUnknownDocument(e,t){return new bc(e,3,t,ba.min(),ba.min(),wc.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ba.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wc.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wc.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ba.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof bc&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new bc(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
     */class Ic{constructor(e,t){this.position=e,this.inclusive=t}}function Ec(e,t,n){let s=0;for(let i=0;i<e.position.length;i++){const r=t[i],o=e.position[i];if(s=r.field.isKeyField()?ka.comparator(ka.fromName(o.referenceValue),n.key):cc(o,n.data.field(r.field)),"desc"===r.dir&&(s*=-1),0!==s)break}return s}function Tc(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!oc(e.position[n],t.position[n]))return!1;return!0}
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
     */class Cc{constructor(e,t="asc"){this.field=e,this.dir=t}}function kc(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
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
     */class Sc{}class Dc extends Sc{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new Lc(e,t,n):"array-contains"===t?new Fc(e,n):"in"===t?new Vc(e,n):"not-in"===t?new $c(e,n):"array-contains-any"===t?new Gc(e,n):new Dc(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new Pc(e,n):new Mc(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(cc(t,this.value)):null!==t&&rc(this.value)===rc(t)&&this.matchesComparison(cc(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return na()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Nc extends Sc{constructor(e,t){super(),this.filters=e,this.op=t,this.lt=null}static create(e,t){return new Nc(e,t)}matches(e){return Rc(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.lt||(this.lt=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft((e=>e.isInequality()));return null!==e?e.field:null}ft(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function Rc(e){return"and"===e.op}function Uc(e){return function(e){for(const t of e.filters)if(t instanceof Nc)return!1;return!0}(e)&&Rc(e)}function xc(e){if(e instanceof Dc)return e.field.canonicalString()+e.op.toString()+uc(e.value);if(Uc(e))return e.filters.map((e=>xc(e))).join(",");{const t=e.filters.map((e=>xc(e))).join(",");return`${e.op}(${t})`}}function _c(e,t){return e instanceof Dc?function(e,t){return t instanceof Dc&&e.op===t.op&&e.field.isEqual(t.field)&&oc(e.value,t.value)}(e,t):e instanceof Nc?function(e,t){return t instanceof Nc&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,s)=>e&&_c(n,t.filters[s])),!0)}(e,t):void na()}function Oc(e){return e instanceof Dc?function(e){return`${e.field.canonicalString()} ${e.op} ${uc(e.value)}`}(e):e instanceof Nc?function(e){return e.op.toString()+" {"+e.getFilters().map(Oc).join(" ,")+"}"}(e):"Filter"}class Lc extends Dc{constructor(e,t,n){super(e,t,n),this.key=ka.fromName(n.referenceValue)}matches(e){const t=ka.comparator(e.key,this.key);return this.matchesComparison(t)}}class Pc extends Dc{constructor(e,t){super(e,"in",t),this.keys=Bc("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Mc extends Dc{constructor(e,t){super(e,"not-in",t),this.keys=Bc("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Bc(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>ka.fromName(e.referenceValue)))}class Fc extends Dc{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return pc(t)&&ac(t.arrayValue,this.value)}}class Vc extends Dc{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&ac(this.value.arrayValue,t)}}class $c extends Dc{constructor(e,t){super(e,"not-in",t)}matches(e){if(ac(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!ac(this.value.arrayValue,t)}}class Gc extends Dc{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!pc(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>ac(this.value.arrayValue,e)))}}
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
     */class jc{constructor(e,t=null,n=[],s=[],i=null,r=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=r,this.endAt=o,this.dt=null}}function Qc(e,t=null,n=[],s=[],i=null,r=null,o=null){return new jc(e,t,n,s,i,r,o)}function qc(e){const t=ia(e);if(null===t.dt){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>xc(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),Pa(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>uc(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>uc(e))).join(",")),t.dt=e}return t.dt}function Kc(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!kc(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!_c(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Tc(e.startAt,t.startAt)&&Tc(e.endAt,t.endAt)}function Wc(e){return ka.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
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
     */class zc{constructor(e,t=null,n=[],s=[],i=null,r="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=r,this.startAt=o,this.endAt=a,this.wt=null,this._t=null,this.startAt,this.endAt}}function Hc(e){return new zc(e)}function Jc(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Xc(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Yc(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function Zc(e){return null!==e.collectionGroup}function el(e){const t=ia(e);if(null===t.wt){t.wt=[];const e=Yc(t),n=Xc(t);if(null!==e&&null===n)e.isKeyField()||t.wt.push(new Cc(e)),t.wt.push(new Cc(Ca.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.wt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new Cc(Ca.keyField(),e))}}}return t.wt}function tl(e){const t=ia(e);if(!t._t)if("F"===t.limitType)t._t=Qc(t.path,t.collectionGroup,el(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of el(t)){const t="desc"===n.dir?"asc":"desc";e.push(new Cc(n.field,t))}const n=t.endAt?new Ic(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new Ic(t.startAt.position,t.startAt.inclusive):null;t._t=Qc(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}return t._t}function nl(e,t){t.getFirstInequalityField(),Yc(e);const n=e.filters.concat([t]);return new zc(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function sl(e,t,n){return new zc(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function il(e,t){return Kc(tl(e),tl(t))&&e.limitType===t.limitType}function rl(e){return`${qc(tl(e))}|lt:${e.limitType}`}function ol(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>Oc(e))).join(", ")}]`),Pa(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>uc(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>uc(e))).join(",")),`Target(${t})`}(tl(e))}; limitType=${e.limitType})`}function al(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):ka.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of el(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const s=Ec(e,t,n);return e.inclusive?s<=0:s<0}(e.startAt,el(e),t))&&!(e.endAt&&!function(e,t,n){const s=Ec(e,t,n);return e.inclusive?s>=0:s>0}(e.endAt,el(e),t))}(e,t)}function cl(e){return(t,n)=>{let s=!1;for(const i of el(e)){const e=ll(i,t,n);if(0!==e)return e;s=s||i.field.isKeyField()}return 0}}function ll(e,t,n){const s=e.field.isKeyField()?ka.comparator(t.key,n.key):function(e,t,n){const s=t.data.field(e),i=n.data.field(e);return null!==s&&null!==i?cc(s,i):na()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return na()}}
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
     */class ul{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,s]of n)if(this.equalsFn(t,e))return s}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(void 0===s)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<s.length;n++)if(this.equalsFn(s[n][0],e))return void(s[n]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return 1===n.length?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Fa(this.inner,((t,n)=>{for(const[t,s]of n)e(t,s)}))}isEmpty(){return Va(this.inner)}size(){return this.innerSize}}
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
     */const hl=new $a(ka.comparator);function dl(){return hl}const fl=new $a(ka.comparator);function pl(...e){let t=fl;for(const n of e)t=t.insert(n.key,n);return t}function gl(e){let t=fl;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function ml(){return Al()}function vl(){return Al()}function Al(){return new ul((e=>e.toString()),((e,t)=>e.isEqual(t)))}const wl=new $a(ka.comparator),yl=new Qa(ka.comparator);function bl(...e){let t=yl;for(const n of e)t=t.add(n);return t}const Il=new Qa(Aa);
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
function El(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ma(t)?"-0":t}}function Tl(e){return{integerValue:""+e}}function Cl(e,t){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!Ma(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}(t)?Tl(t):El(e,t)}
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
     */class kl{constructor(){this._=void 0}}function Sl(e,t,n){return e instanceof Rl?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&Za(t)&&(t=ec(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Ul?xl(e,t):e instanceof _l?Ol(e,t):function(e,t){const n=Nl(e,t),s=Pl(n)+Pl(e.gt);return fc(n)&&fc(e.gt)?Tl(s):El(e.serializer,s)}(e,t)}function Dl(e,t,n){return e instanceof Ul?xl(e,t):e instanceof _l?Ol(e,t):n}function Nl(e,t){return e instanceof Ll?fc(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class Rl extends kl{}class Ul extends kl{constructor(e){super(),this.elements=e}}function xl(e,t){const n=Ml(t);for(const t of e.elements)n.some((e=>oc(e,t)))||n.push(t);return{arrayValue:{values:n}}}class _l extends kl{constructor(e){super(),this.elements=e}}function Ol(e,t){let n=Ml(t);for(const t of e.elements)n=n.filter((e=>!oc(e,t)));return{arrayValue:{values:n}}}class Ll extends kl{constructor(e,t){super(),this.serializer=e,this.gt=t}}function Pl(e){return Xa(e.integerValue||e.doubleValue)}function Ml(e){return pc(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class Bl{constructor(e,t){this.version=e,this.transformResults=t}}class Fl{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Fl}static exists(e){return new Fl(void 0,e)}static updateTime(e){return new Fl(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Vl(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class $l{}function Gl(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Yl(e.key,Fl.none()):new Wl(e.key,e.data,Fl.none());{const n=e.data,s=wc.empty();let i=new Qa(Ca.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?s.delete(e):s.set(e,t),i=i.add(e)}return new zl(e.key,s,new Ka(i.toArray()),Fl.none())}}function jl(e,t,n){e instanceof Wl?function(e,t,n){const s=e.value.clone(),i=Jl(e.fieldTransforms,t,n.transformResults);s.setAll(i),t.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(e,t,n):e instanceof zl?function(e,t,n){if(!Vl(e.precondition,t))return void t.convertToUnknownDocument(n.version);const s=Jl(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Hl(e)),i.setAll(s),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Ql(e,t,n,s){return e instanceof Wl?function(e,t,n,s){if(!Vl(e.precondition,t))return n;const i=e.value.clone(),r=Xl(e.fieldTransforms,s,t);return i.setAll(r),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,s):e instanceof zl?function(e,t,n,s){if(!Vl(e.precondition,t))return n;const i=Xl(e.fieldTransforms,s,t),r=t.data;return r.setAll(Hl(e)),r.setAll(i),t.convertToFoundDocument(t.version,r).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,s):function(e,t,n){return Vl(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function ql(e,t){let n=null;for(const s of e.fieldTransforms){const e=t.data.field(s.field),i=Nl(s.transform,e||null);null!=i&&(null===n&&(n=wc.empty()),n.set(s.field,i))}return n||null}function Kl(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&wa(e,t,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Ul&&t instanceof Ul||e instanceof _l&&t instanceof _l?wa(e.elements,t.elements,oc):e instanceof Ll&&t instanceof Ll?oc(e.gt,t.gt):e instanceof Rl&&t instanceof Rl}(e.transform,t.transform)}(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class Wl extends $l{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class zl extends $l{constructor(e,t,n,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Hl(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}})),t}function Jl(e,t,n){const s=new Map;sa(e.length===n.length);for(let i=0;i<n.length;i++){const r=e[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,Dl(o,a,n[i]))}return s}function Xl(e,t,n){const s=new Map;for(const i of e){const e=i.transform,r=n.data.field(i.field);s.set(i.field,Sl(e,r,t))}return s}class Yl extends $l{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Zl extends $l{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
     */class eu{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const s=this.mutations[t];s.key.isEqual(e.key)&&jl(s,e,n[t])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Ql(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Ql(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=vl();return this.mutations.forEach((s=>{const i=e.get(s.key),r=i.overlayedDocument;let o=this.applyToLocalView(r,i.mutatedFields);o=t.has(s.key)?null:o;const a=Gl(r,o);null!==a&&n.set(s.key,a),r.isValidDocument()||r.convertToNoDocument(ba.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),bl())}isEqual(e){return this.batchId===e.batchId&&wa(this.mutations,e.mutations,((e,t)=>Kl(e,t)))&&wa(this.baseMutations,e.baseMutations,((e,t)=>Kl(e,t)))}}class tu{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){sa(e.mutations.length===n.length);let s=wl;const i=e.mutations;for(let e=0;e<i.length;e++)s=s.insert(i[e].key,n[e].version);return new tu(e,t,n,s)}}
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
     */class nu{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
     */class su{constructor(e,t){this.count=e,this.unchangedNames=t}}
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
     */var iu,ru;function ou(e){if(void 0===e)return Zo("GRPC error has no .code"),ra.UNKNOWN;switch(e){case iu.OK:return ra.OK;case iu.CANCELLED:return ra.CANCELLED;case iu.UNKNOWN:return ra.UNKNOWN;case iu.DEADLINE_EXCEEDED:return ra.DEADLINE_EXCEEDED;case iu.RESOURCE_EXHAUSTED:return ra.RESOURCE_EXHAUSTED;case iu.INTERNAL:return ra.INTERNAL;case iu.UNAVAILABLE:return ra.UNAVAILABLE;case iu.UNAUTHENTICATED:return ra.UNAUTHENTICATED;case iu.INVALID_ARGUMENT:return ra.INVALID_ARGUMENT;case iu.NOT_FOUND:return ra.NOT_FOUND;case iu.ALREADY_EXISTS:return ra.ALREADY_EXISTS;case iu.PERMISSION_DENIED:return ra.PERMISSION_DENIED;case iu.FAILED_PRECONDITION:return ra.FAILED_PRECONDITION;case iu.ABORTED:return ra.ABORTED;case iu.OUT_OF_RANGE:return ra.OUT_OF_RANGE;case iu.UNIMPLEMENTED:return ra.UNIMPLEMENTED;case iu.DATA_LOSS:return ra.DATA_LOSS;default:return na()}}(ru=iu||(iu={}))[ru.OK=0]="OK",ru[ru.CANCELLED=1]="CANCELLED",ru[ru.UNKNOWN=2]="UNKNOWN",ru[ru.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ru[ru.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ru[ru.NOT_FOUND=5]="NOT_FOUND",ru[ru.ALREADY_EXISTS=6]="ALREADY_EXISTS",ru[ru.PERMISSION_DENIED=7]="PERMISSION_DENIED",ru[ru.UNAUTHENTICATED=16]="UNAUTHENTICATED",ru[ru.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ru[ru.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ru[ru.ABORTED=10]="ABORTED",ru[ru.OUT_OF_RANGE=11]="OUT_OF_RANGE",ru[ru.UNIMPLEMENTED=12]="UNIMPLEMENTED",ru[ru.INTERNAL=13]="INTERNAL",ru[ru.UNAVAILABLE=14]="UNAVAILABLE",ru[ru.DATA_LOSS=15]="DATA_LOSS";
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
class au{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return cu}static getOrCreateInstance(){return null===cu&&(cu=new au),cu}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach((t=>t(e)))}}let cu=null;
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
const lu=new Ko([4294967295,4294967295],0);function uu(e){const t=(new TextEncoder).encode(e),n=new qo;return n.update(t),new Uint8Array(n.digest())}function hu(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),s=t.getUint32(4,!0),i=t.getUint32(8,!0),r=t.getUint32(12,!0);return[new Ko([n,s],0),new Ko([i,r],0)]}class du{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new fu(`Invalid padding: ${t}`);if(n<0)throw new fu(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new fu(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new fu(`Invalid padding when bitmap length is 0: ${t}`);this.It=8*e.length-t,this.Tt=Ko.fromNumber(this.It)}Et(e,t,n){let s=e.add(t.multiply(Ko.fromNumber(n)));return 1===s.compare(lu)&&(s=new Ko([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Tt).toNumber()}At(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}vt(e){if(0===this.It)return!1;const t=uu(e),[n,s]=hu(t);for(let e=0;e<this.hashCount;e++){const t=this.Et(n,s,e);if(!this.At(t))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),r=new du(i,s,t);return n.forEach((e=>r.insert(e))),r}insert(e){if(0===this.It)return;const t=uu(e),[n,s]=hu(t);for(let e=0;e<this.hashCount;e++){const t=this.Et(n,s,e);this.Rt(t)}}Rt(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class fu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
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
     */class pu{constructor(e,t,n,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,gu.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new pu(ba.min(),s,new $a(Aa),dl(),bl())}}class gu{constructor(e,t,n,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new gu(n,t,bl(),bl(),bl())}}
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
     */class mu{constructor(e,t,n,s){this.Pt=e,this.removedTargetIds=t,this.key=n,this.bt=s}}class vu{constructor(e,t){this.targetId=e,this.Vt=t}}class Au{constructor(e,t,n=za.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class wu{constructor(){this.St=0,this.Dt=Iu(),this.Ct=za.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return 0!==this.St}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=bl(),t=bl(),n=bl();return this.Dt.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:na()}})),new gu(this.Ct,this.xt,e,t,n)}Ft(){this.Nt=!1,this.Dt=Iu()}Bt(e,t){this.Nt=!0,this.Dt=this.Dt.insert(e,t)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class yu{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=dl(),this.zt=bu(),this.Wt=new $a(Aa)}Ht(e){for(const t of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(t,e.bt):this.Yt(t,e.key,e.bt);for(const t of e.removedTargetIds)this.Yt(t,e.key,e.bt)}Xt(e){this.forEachTarget(e,(t=>{const n=this.Zt(t);switch(e.state){case 0:this.te(t)&&n.$t(e.resumeToken);break;case 1:n.Ut(),n.kt||n.Ft(),n.$t(e.resumeToken);break;case 2:n.Ut(),n.kt||this.removeTarget(t);break;case 3:this.te(t)&&(n.Kt(),n.$t(e.resumeToken));break;case 4:this.te(t)&&(this.ee(t),n.$t(e.resumeToken));break;default:na()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qt.forEach(((e,n)=>{this.te(n)&&t(n)}))}ne(e){var t;const n=e.targetId,s=e.Vt.count,i=this.se(n);if(i){const r=i.target;if(Wc(r))if(0===s){const e=new ka(r.path);this.Yt(n,e,bc.newNoDocument(e,ba.min()))}else sa(1===s);else{const i=this.ie(n);if(i!==s){const s=this.re(e,i);if(0!==s){this.ee(n);const e=2===s?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(n,e)}null===(t=au.instance)||void 0===t||t.notifyOnExistenceFilterMismatch(function(e,t,n){var s,i,r,o,a,c;const l={localCacheCount:t,existenceFilterCount:n.count},u=n.unchangedNames;return u&&(l.bloomFilter={applied:0===e,hashCount:null!==(s=null==u?void 0:u.hashCount)&&void 0!==s?s:0,bitmapLength:null!==(o=null===(r=null===(i=null==u?void 0:u.bits)||void 0===i?void 0:i.bitmap)||void 0===r?void 0:r.length)&&void 0!==o?o:0,padding:null!==(c=null===(a=null==u?void 0:u.bits)||void 0===a?void 0:a.padding)&&void 0!==c?c:0}),l}
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
     */(s,i,e.Vt))}}}}re(e,t){const{unchangedNames:n,count:s}=e.Vt;if(!n||!n.bits)return 1;const{bits:{bitmap:i="",padding:r=0},hashCount:o=0}=n;let a,c;try{a=Ya(i).toUint8Array()}catch(e){if(e instanceof Wa)return ea("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw e}try{c=new du(a,r,o)}catch(e){return ea(e instanceof fu?"BloomFilter error: ":"Applying bloom filter failed: ",e),1}return 0===c.It?1:s!==t-this.oe(e.targetId,c)?2:0}oe(e,t){const n=this.Gt.getRemoteKeysForTarget(e);let s=0;return n.forEach((n=>{const i=this.Gt.ue(),r=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;t.vt(r)||(this.Yt(e,n,null),s++)})),s}ce(e){const t=new Map;this.Qt.forEach(((n,s)=>{const i=this.se(s);if(i){if(n.current&&Wc(i.target)){const t=new ka(i.target.path);null!==this.jt.get(t)||this.ae(s,t)||this.Yt(s,t,bc.newNoDocument(t,e))}n.Mt&&(t.set(s,n.Ot()),n.Ft())}}));let n=bl();this.zt.forEach(((e,t)=>{let s=!0;t.forEachWhile((e=>{const t=this.se(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(s=!1,!1)})),s&&(n=n.add(e))})),this.jt.forEach(((t,n)=>n.setReadTime(e)));const s=new pu(e,t,this.Wt,this.jt,n);return this.jt=dl(),this.zt=bu(),this.Wt=new $a(Aa),s}Jt(e,t){if(!this.te(e))return;const n=this.ae(e,t.key)?2:0;this.Zt(e).Bt(t.key,n),this.jt=this.jt.insert(t.key,t),this.zt=this.zt.insert(t.key,this.he(t.key).add(e))}Yt(e,t,n){if(!this.te(e))return;const s=this.Zt(e);this.ae(e,t)?s.Bt(t,1):s.Lt(t),this.zt=this.zt.insert(t,this.he(t).delete(e)),n&&(this.jt=this.jt.insert(t,n))}removeTarget(e){this.Qt.delete(e)}ie(e){const t=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let t=this.Qt.get(e);return t||(t=new wu,this.Qt.set(e,t)),t}he(e){let t=this.zt.get(e);return t||(t=new Qa(Aa),this.zt=this.zt.insert(e,t)),t}te(e){const t=null!==this.se(e);return t||Yo("WatchChangeAggregator","Detected inactive target",e),t}se(e){const t=this.Qt.get(e);return t&&t.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new wu),this.Gt.getRemoteKeysForTarget(e).forEach((t=>{this.Yt(e,t,null)}))}ae(e,t){return this.Gt.getRemoteKeysForTarget(e).has(t)}}function bu(){return new $a(ka.comparator)}function Iu(){return new $a(ka.comparator)}const Eu={asc:"ASCENDING",desc:"DESCENDING"},Tu={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Cu={and:"AND",or:"OR"};class ku{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Su(e,t){return e.useProto3Json||Pa(t)?t:{value:t}}function Du(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Nu(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Ru(e,t){return Du(e,t.toTimestamp())}function Uu(e){return sa(!!e),ba.fromTimestamp(function(e){const t=Ja(e);return new ya(t.seconds,t.nanos)}(e))}function xu(e,t){return function(e){return new Ea(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function _u(e){const t=Ea.fromString(e);return sa(Xu(t)),t}function Ou(e,t){return xu(e.databaseId,t.path)}function Lu(e,t){const n=_u(t);if(n.get(1)!==e.databaseId.projectId)throw new oa(ra.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new oa(ra.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new ka(Bu(n))}function Pu(e,t){return xu(e.databaseId,t)}function Mu(e){return new Ea(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Bu(e){return sa(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Fu(e,t,n){return{name:Ou(e,t),fields:n.value.mapValue.fields}}function Vu(e,t){return{documents:[Pu(e,t.path)]}}function $u(e,t){const n={structuredQuery:{}},s=t.path;null!==t.collectionGroup?(n.parent=Pu(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Pu(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(e){if(0!==e.length)return Hu(Nc.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const r=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:Wu(e.field),direction:Qu(e.dir)}}(e)))}(t.orderBy);r&&(n.structuredQuery.orderBy=r);const o=Su(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function Gu(e){let t=function(e){const t=_u(e);return 4===t.length?Ea.emptyPath():Bu(t)}(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){sa(1===s);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let r=[];n.where&&(r=function(e){const t=ju(e);return t instanceof Nc&&Uc(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new Cc(zu(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Pa(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new Ic(n,t)}(n.startAt));let l=null;return n.endAt&&(l=function(e){const t=!e.before,n=e.values||[];return new Ic(n,t)}(n.endAt)),function(e,t,n,s,i,r,o,a){return new zc(e,t,n,s,i,r,o,a)}(t,i,o,r,a,"F",c,l)}function ju(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=zu(e.unaryFilter.field);return Dc.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=zu(e.unaryFilter.field);return Dc.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=zu(e.unaryFilter.field);return Dc.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=zu(e.unaryFilter.field);return Dc.create(i,"!=",{nullValue:"NULL_VALUE"});default:return na()}}(e):void 0!==e.fieldFilter?function(e){return Dc.create(zu(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return na()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return Nc.create(e.compositeFilter.filters.map((e=>ju(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return na()}}(e.compositeFilter.op))}(e):na()}function Qu(e){return Eu[e]}function qu(e){return Tu[e]}function Ku(e){return Cu[e]}function Wu(e){return{fieldPath:e.canonicalString()}}function zu(e){return Ca.fromServerFormat(e.fieldPath)}function Hu(e){return e instanceof Dc?function(e){if("=="===e.op){if(mc(e.value))return{unaryFilter:{field:Wu(e.field),op:"IS_NAN"}};if(gc(e.value))return{unaryFilter:{field:Wu(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(mc(e.value))return{unaryFilter:{field:Wu(e.field),op:"IS_NOT_NAN"}};if(gc(e.value))return{unaryFilter:{field:Wu(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wu(e.field),op:qu(e.op),value:e.value}}}(e):e instanceof Nc?function(e){const t=e.getFilters().map((e=>Hu(e)));return 1===t.length?t[0]:{compositeFilter:{op:Ku(e.op),filters:t}}}(e):na()}function Ju(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Xu(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
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
     */class Yu{constructor(e,t,n,s,i=ba.min(),r=ba.min(),o=za.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new Yu(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Yu(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Yu(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Yu(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
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
     */class Zu{constructor(e){this.fe=e}}function eh(e){const t=Gu({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?sl(t,t.limit,"L"):t}
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
     */class th{constructor(){this.rn=new nh}addToCollectionParentIndex(e,t){return this.rn.add(t),_a.resolve()}getCollectionParents(e,t){return _a.resolve(this.rn.getEntries(t))}addFieldIndex(e,t){return _a.resolve()}deleteFieldIndex(e,t){return _a.resolve()}getDocumentsMatchingTarget(e,t){return _a.resolve(null)}getIndexType(e,t){return _a.resolve(0)}getFieldIndexes(e,t){return _a.resolve([])}getNextCollectionGroupToUpdate(e){return _a.resolve(null)}getMinOffset(e,t){return _a.resolve(Da.min())}getMinOffsetFromCollectionGroup(e,t){return _a.resolve(Da.min())}updateCollectionGroup(e,t,n){return _a.resolve()}updateIndexEntries(e,t){return _a.resolve()}}class nh{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new Qa(Ea.comparator),i=!s.has(n);return this.index[t]=s.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new Qa(Ea.comparator)).toArray()}}
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
     */class sh{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new sh(0)}static Mn(){return new sh(-1)}}
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
     */class ih{constructor(){this.changes=new ul((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,bc.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?_a.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
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
     */class rh{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
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
     */class oh{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(n=s,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&Ql(n.mutation,e,Ka.empty(),ya.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,bl()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=bl()){const s=ml();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,n).next((e=>{let t=pl();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=ml();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,bl())))}populateOverlays(e,t,n){const s=[];return n.forEach((e=>{t.has(e)||s.push(e)})),this.documentOverlayCache.getOverlays(e,s).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,s){let i=dl();const r=Al(),o=Al();return t.forEach(((e,t)=>{const o=n.get(t.key);s.has(t.key)&&(void 0===o||o.mutation instanceof zl)?i=i.insert(t.key,t):void 0!==o?(r.set(t.key,o.mutation.getFieldMask()),Ql(o.mutation,t,o.mutation.getFieldMask(),ya.now())):r.set(t.key,Ka.empty())})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>r.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new rh(t,null!==(n=r.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=Al();let s=new $a(((e,t)=>e-t)),i=bl();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const r=t.get(e);if(null===r)return;let o=n.get(e)||Ka.empty();o=i.applyToLocalView(r,o),n.set(e,o);const a=(s.get(i.batchId)||bl()).add(e);s=s.insert(i.batchId,a)}))})).next((()=>{const r=[],o=s.getReverseIterator();for(;o.hasNext();){const s=o.getNext(),a=s.key,c=s.value,l=vl();c.forEach((e=>{if(!i.has(e)){const s=Gl(t.get(e),n.get(e));null!==s&&l.set(e,s),i=i.add(e)}})),r.push(this.documentOverlayCache.saveOverlays(e,a,l))}return _a.waitFor(r)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return ka.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Zc(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next((i=>{const r=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-i.size):_a.resolve(ml());let o=-1,a=i;return r.next((t=>_a.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?_a.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,bl()))).next((e=>({batchId:o,changes:gl(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ka(t)).next((e=>{let t=pl();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const s=t.collectionGroup;let i=pl();return this.indexManager.getCollectionParents(e,s).next((r=>_a.forEach(r,(r=>{const o=function(e,t){return new zc(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,r.child(s));return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(e,t,n){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s)))).next((e=>{s.forEach(((t,n)=>{const s=n.getKey();null===e.get(s)&&(e=e.insert(s,bc.newInvalidDocument(s)))}));let n=pl();return e.forEach(((e,i)=>{const r=s.get(e);void 0!==r&&Ql(r.mutation,i,Ka.empty(),ya.now()),al(t,i)&&(n=n.insert(e,i))})),n}))}}
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
     */class ah{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,t){return _a.resolve(this.cs.get(t))}saveBundleMetadata(e,t){var n;return this.cs.set(t.id,{id:(n=t).id,version:n.version,createTime:Uu(n.createTime)}),_a.resolve()}getNamedQuery(e,t){return _a.resolve(this.hs.get(t))}saveNamedQuery(e,t){return this.hs.set(t.name,function(e){return{name:e.name,query:eh(e.bundledQuery),readTime:Uu(e.readTime)}}(t)),_a.resolve()}}
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
     */class ch{constructor(){this.overlays=new $a(ka.comparator),this.ls=new Map}getOverlay(e,t){return _a.resolve(this.overlays.get(t))}getOverlays(e,t){const n=ml();return _a.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,s)=>{this.we(e,t,s)})),_a.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.ls.get(n);return void 0!==s&&(s.forEach((e=>this.overlays=this.overlays.remove(e))),this.ls.delete(n)),_a.resolve()}getOverlaysForCollection(e,t,n){const s=ml(),i=t.length+1,r=new ka(t.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const e=o.getNext().value,r=e.getKey();if(!t.isPrefixOf(r.path))break;r.path.length===i&&e.largestBatchId>n&&s.set(e.getKey(),e)}return _a.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let i=new $a(((e,t)=>e-t));const r=this.overlays.getIterator();for(;r.hasNext();){const e=r.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=ml(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=ml(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((e,t)=>o.set(e,t))),!(o.size()>=s)););return _a.resolve(o)}we(e,t,n){const s=this.overlays.get(n.key);if(null!==s){const e=this.ls.get(s.largestBatchId).delete(n.key);this.ls.set(s.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new nu(t,n));let i=this.ls.get(t);void 0===i&&(i=bl(),this.ls.set(t,i)),this.ls.set(t,i.add(n.key))}}
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
     */class lh{constructor(){this.fs=new Qa(uh.ds),this.ws=new Qa(uh._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,t){const n=new uh(e,t);this.fs=this.fs.add(n),this.ws=this.ws.add(n)}gs(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.ys(new uh(e,t))}ps(e,t){e.forEach((e=>this.removeReference(e,t)))}Is(e){const t=new ka(new Ea([])),n=new uh(t,e),s=new uh(t,e+1),i=[];return this.ws.forEachInRange([n,s],(e=>{this.ys(e),i.push(e.key)})),i}Ts(){this.fs.forEach((e=>this.ys(e)))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const t=new ka(new Ea([])),n=new uh(t,e),s=new uh(t,e+1);let i=bl();return this.ws.forEachInRange([n,s],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new uh(e,0),n=this.fs.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class uh{constructor(e,t){this.key=e,this.As=t}static ds(e,t){return ka.comparator(e.key,t.key)||Aa(e.As,t.As)}static _s(e,t){return Aa(e.As,t.As)||ka.comparator(e.key,t.key)}}
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
     */class hh{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.vs=1,this.Rs=new Qa(uh.ds)}checkEmpty(e){return _a.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,s){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new eu(i,t,n,s);this.mutationQueue.push(r);for(const t of s)this.Rs=this.Rs.add(new uh(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return _a.resolve(r)}lookupMutationBatch(e,t){return _a.resolve(this.Ps(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.bs(n),i=s<0?0:s;return _a.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return _a.resolve(0===this.mutationQueue.length?-1:this.vs-1)}getAllMutationBatches(e){return _a.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new uh(t,0),s=new uh(t,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([n,s],(e=>{const t=this.Ps(e.As);i.push(t)})),_a.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Qa(Aa);return t.forEach((e=>{const t=new uh(e,0),s=new uh(e,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([t,s],(e=>{n=n.add(e.As)}))})),_a.resolve(this.Vs(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let i=n;ka.isDocumentKey(i)||(i=i.child(""));const r=new uh(new ka(i),0);let o=new Qa(Aa);return this.Rs.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===s&&(o=o.add(e.As)),!0)}),r),_a.resolve(this.Vs(o))}Vs(e){const t=[];return e.forEach((e=>{const n=this.Ps(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){sa(0===this.Ss(t.batchId,"removed")),this.mutationQueue.shift();let n=this.Rs;return _a.forEach(t.mutations,(s=>{const i=new uh(s.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Rs=n}))}Cn(e){}containsKey(e,t){const n=new uh(t,0),s=this.Rs.firstAfterOrEqual(n);return _a.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,_a.resolve()}Ss(e,t){return this.bs(e)}bs(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Ps(e){const t=this.bs(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
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
     */class dh{constructor(e){this.Ds=e,this.docs=new $a(ka.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),i=s?s.size:0,r=this.Ds(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:r}),this.size+=r-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return _a.resolve(n?n.document.mutableCopy():bc.newInvalidDocument(t))}getEntries(e,t){let n=dl();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():bc.newInvalidDocument(e))})),_a.resolve(n)}getDocumentsMatchingQuery(e,t,n,s){let i=dl();const r=t.path,o=new ka(r.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!r.isPrefixOf(e.path))break;e.path.length>r.length+1||Na(Sa(o),n)<=0||(s.has(o.key)||al(t,o))&&(i=i.insert(o.key,o.mutableCopy()))}return _a.resolve(i)}getAllFromCollectionGroup(e,t,n,s){na()}Cs(e,t){return _a.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new fh(this)}getSize(e){return _a.resolve(this.size)}}class fh extends ih{constructor(e){super(),this.os=e}applyChanges(e){const t=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?t.push(this.os.addEntry(e,s)):this.os.removeEntry(n)})),_a.waitFor(t)}getFromCache(e,t){return this.os.getEntry(e,t)}getAllFromCache(e,t){return this.os.getEntries(e,t)}}
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
     */class ph{constructor(e){this.persistence=e,this.xs=new ul((e=>qc(e)),Kc),this.lastRemoteSnapshotVersion=ba.min(),this.highestTargetId=0,this.Ns=0,this.ks=new lh,this.targetCount=0,this.Ms=sh.kn()}forEachTarget(e,t){return this.xs.forEach(((e,n)=>t(n))),_a.resolve()}getLastRemoteSnapshotVersion(e){return _a.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return _a.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),_a.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Ns&&(this.Ns=t),_a.resolve()}Fn(e){this.xs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ms=new sh(t),this.highestTargetId=t),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,t){return this.Fn(t),this.targetCount+=1,_a.resolve()}updateTargetData(e,t){return this.Fn(t),_a.resolve()}removeTargetData(e,t){return this.xs.delete(t.target),this.ks.Is(t.targetId),this.targetCount-=1,_a.resolve()}removeTargets(e,t,n){let s=0;const i=[];return this.xs.forEach(((r,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.xs.delete(r),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),s++)})),_a.waitFor(i).next((()=>s))}getTargetCount(e){return _a.resolve(this.targetCount)}getTargetData(e,t){const n=this.xs.get(t)||null;return _a.resolve(n)}addMatchingKeys(e,t,n){return this.ks.gs(t,n),_a.resolve()}removeMatchingKeys(e,t,n){this.ks.ps(t,n);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((t=>{i.push(s.markPotentiallyOrphaned(e,t))})),_a.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.ks.Is(t),_a.resolve()}getMatchingKeysForTargetId(e,t){const n=this.ks.Es(t);return _a.resolve(n)}containsKey(e,t){return _a.resolve(this.ks.containsKey(t))}}
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
     */class gh{constructor(e,t){this.$s={},this.overlays={},this.Os=new La(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new ph(this),this.indexManager=new th,this.remoteDocumentCache=function(e){return new dh(e)}((e=>this.referenceDelegate.Ls(e))),this.serializer=new Zu(t),this.qs=new ah(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new ch,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.$s[e.toKey()];return n||(n=new hh(t,this.referenceDelegate),this.$s[e.toKey()]=n),n}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,t,n){Yo("MemoryPersistence","Starting transaction:",e);const s=new mh(this.Os.next());return this.referenceDelegate.Us(),n(s).next((e=>this.referenceDelegate.Ks(s).next((()=>e)))).toPromise().then((e=>(s.raiseOnCommittedEvent(),e)))}Gs(e,t){return _a.or(Object.values(this.$s).map((n=>()=>n.containsKey(e,t))))}}class mh extends Ua{constructor(e){super(),this.currentSequenceNumber=e}}class vh{constructor(e){this.persistence=e,this.Qs=new lh,this.js=null}static zs(e){return new vh(e)}get Ws(){if(this.js)return this.js;throw na()}addReference(e,t,n){return this.Qs.addReference(n,t),this.Ws.delete(n.toString()),_a.resolve()}removeReference(e,t,n){return this.Qs.removeReference(n,t),this.Ws.add(n.toString()),_a.resolve()}markPotentiallyOrphaned(e,t){return this.Ws.add(t.toString()),_a.resolve()}removeTarget(e,t){this.Qs.Is(t.targetId).forEach((e=>this.Ws.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Ws.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Us(){this.js=new Set}Ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return _a.forEach(this.Ws,(n=>{const s=ka.fromPath(n);return this.Hs(e,s).next((e=>{e||t.removeEntry(s,ba.min())}))})).next((()=>(this.js=null,t.apply(e))))}updateLimboDocument(e,t){return this.Hs(e,t).next((e=>{e?this.Ws.delete(t.toString()):this.Ws.add(t.toString())}))}Ls(e){return 0}Hs(e,t){return _a.or([()=>_a.resolve(this.Qs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gs(e,t)])}}
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
     */class Ah{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.Fi=n,this.Bi=s}static Li(e,t){let n=bl(),s=bl();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:s=s.add(e.doc.key)}return new Ah(e,t.fromCache,n,s)}}
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
     */class wh{constructor(){this.qi=!1}initialize(e,t){this.Ui=e,this.indexManager=t,this.qi=!0}getDocumentsMatchingQuery(e,t,n,s){return this.Ki(e,t).next((i=>i||this.Gi(e,t,s,n))).next((n=>n||this.Qi(e,t)))}Ki(e,t){if(Jc(t))return _a.resolve(null);let n=tl(t);return this.indexManager.getIndexType(e,n).next((s=>0===s?null:(null!==t.limit&&1===s&&(t=sl(t,null,"F"),n=tl(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((s=>{const i=bl(...s);return this.Ui.getDocuments(e,i).next((s=>this.indexManager.getMinOffset(e,n).next((n=>{const r=this.ji(t,s);return this.zi(t,r,i,n.readTime)?this.Ki(e,sl(t,null,"F")):this.Wi(e,r,t,n)}))))})))))}Gi(e,t,n,s){return Jc(t)||s.isEqual(ba.min())?this.Qi(e,t):this.Ui.getDocuments(e,n).next((i=>{const r=this.ji(t,i);return this.zi(t,r,n,s)?this.Qi(e,t):(Xo()<=Rt.DEBUG&&Yo("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ol(t)),this.Wi(e,r,t,function(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,i=ba.fromTimestamp(1e9===s?new ya(n+1,0):new ya(n,s));return new Da(i,ka.empty(),t)}(s,-1)))}))}ji(e,t){let n=new Qa(cl(e));return t.forEach(((t,s)=>{al(e,s)&&(n=n.add(s))})),n}zi(e,t,n,s){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Qi(e,t){return Xo()<=Rt.DEBUG&&Yo("QueryEngine","Using full collection scan to execute query:",ol(t)),this.Ui.getDocumentsMatchingQuery(e,t,Da.min())}Wi(e,t,n,s){return this.Ui.getDocumentsMatchingQuery(e,n,s).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
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
     */class yh{constructor(e,t,n,s){this.persistence=e,this.Hi=t,this.serializer=s,this.Ji=new $a(Aa),this.Yi=new ul((e=>qc(e)),Kc),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(n)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new oh(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ji)))}}async function bh(e,t){const n=ia(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let s;return n.mutationQueue.getAllMutationBatches(e).next((i=>(s=i,n.tr(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],r=[];let o=bl();for(const e of s){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){r.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({er:e,removedBatchIds:i,addedBatchIds:r})))}))}))}function Ih(e){const t=ia(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Bs.getLastRemoteSnapshotVersion(e)))}function Eh(e,t){const n=ia(e),s=t.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const r=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const o=[];t.targetChanges.forEach(((r,a)=>{const c=i.get(a);if(!c)return;o.push(n.Bs.removeMatchingKeys(e,r.removedDocuments,a).next((()=>n.Bs.addMatchingKeys(e,r.addedDocuments,a))));let l=c.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?l=l.withResumeToken(za.EMPTY_BYTE_STRING,ba.min()).withLastLimboFreeSnapshotVersion(ba.min()):r.resumeToken.approximateByteSize()>0&&(l=l.withResumeToken(r.resumeToken,s)),i=i.insert(a,l),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,l,r)&&o.push(n.Bs.updateTargetData(e,l))}));let a=dl(),c=bl();if(t.documentUpdates.forEach((s=>{t.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,s))})),o.push(function(e,t,n){let s=bl(),i=bl();return n.forEach((e=>s=s.add(e))),t.getEntries(e,s).next((e=>{let s=dl();return n.forEach(((n,r)=>{const o=e.get(n);r.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),r.isNoDocument()&&r.version.isEqual(ba.min())?(t.removeEntry(n,r.readTime),s=s.insert(n,r)):!o.isValidDocument()||r.version.compareTo(o.version)>0||0===r.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(r),s=s.insert(n,r)):Yo("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",r.version)})),{nr:s,sr:i}}))}(e,r,t.documentUpdates).next((e=>{a=e.nr,c=e.sr}))),!s.isEqual(ba.min())){const t=n.Bs.getLastRemoteSnapshotVersion(e).next((t=>n.Bs.setTargetsMetadata(e,e.currentSequenceNumber,s)));o.push(t)}return _a.waitFor(o).next((()=>r.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.Ji=i,e)))}function Th(e,t){const n=ia(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}async function Ch(e,t,n){const s=ia(e),i=s.Ji.get(t),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,(e=>s.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!Oa(e))throw e;Yo("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}s.Ji=s.Ji.remove(t),s.Yi.delete(i.target)}function kh(e,t,n){const s=ia(e);let i=ba.min(),r=bl();return s.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const s=ia(e),i=s.Yi.get(n);return void 0!==i?_a.resolve(s.Ji.get(i)):s.Bs.getTargetData(t,n)}(s,e,tl(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,s.Bs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{r=e}))})).next((()=>s.Hi.getDocumentsMatchingQuery(e,t,n?i:ba.min(),n?r:bl()))).next((e=>(function(e,t,n){let s=e.Xi.get(t)||ba.min();n.forEach(((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)})),e.Xi.set(t,s)}(s,function(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}(t),e),{documents:e,ir:r})))))}class Sh{constructor(){this.activeTargetIds=Il}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Dh{constructor(){this.Hr=new Sh,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,t,n){this.Jr[e]=t}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Sh,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
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
     */class Nh{Yr(e){}shutdown(){}}
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
     */class Rh{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){Yo("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){Yo("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
     */let Uh=null;function xh(){return null===Uh?Uh=268435456+Math.round(2147483648*Math.random()):Uh++,"0x"+Uh.toString(16)
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
     */}const _h={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
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
     */class Oh{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}
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
     */const Lh="WebChannelConnection";class Ph extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.mo=t+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,t,n,s,i){const r=xh(),o=this.To(e,t);Yo("RestConnection",`Sending RPC '${e}' ${r}:`,o,n);const a={};return this.Eo(a,s,i),this.Ao(e,o,a,n).then((t=>(Yo("RestConnection",`Received RPC '${e}' ${r}: `,t),t)),(t=>{throw ea("RestConnection",`RPC '${e}' ${r} failed with error: `,t,"url: ",o,"request:",n),t}))}vo(e,t,n,s,i,r){return this.Io(e,t,n,s,i)}Eo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ho,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}To(e,t){const n=_h[e];return`${this.mo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,t,n,s){const i=xh();return new Promise(((r,o)=>{const a=new Qo;a.setWithCredentials(!0),a.listenOnce(Bo.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Mo.NO_ERROR:const t=a.getResponseJson();Yo(Lh,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),r(t);break;case Mo.TIMEOUT:Yo(Lh,`RPC '${e}' ${i} timed out`),o(new oa(ra.DEADLINE_EXCEEDED,"Request time out"));break;case Mo.HTTP_ERROR:const n=a.getStatus();if(Yo(Lh,`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(ra).indexOf(t)>=0?t:ra.UNKNOWN}(t.status);o(new oa(e,t.message))}else o(new oa(ra.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new oa(ra.UNAVAILABLE,"Connection failed."));break;default:na()}}finally{Yo(Lh,`RPC '${e}' ${i} completed.`)}}));const c=JSON.stringify(s);Yo(Lh,`RPC '${e}' ${i} sending request:`,s),a.send(t,"POST",c,n,15)}))}Ro(e,t,n){const s=xh(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=new fo,o=hi(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.xmlHttpFactory=new Go({})),this.Eo(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const l=i.join("");Yo(Lh,`Creating RPC '${e}' stream ${s}: ${l}`,a);const u=r.createWebChannel(l,a);let h=!1,d=!1;const f=new Oh({ro:t=>{d?Yo(Lh,`Not sending because RPC '${e}' stream ${s} is closed:`,t):(h||(Yo(Lh,`Opening RPC '${e}' stream ${s} transport.`),u.open(),h=!0),Yo(Lh,`RPC '${e}' stream ${s} sending:`,t),u.send(t))},oo:()=>u.close()}),p=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return p(u,jo.EventType.OPEN,(()=>{d||Yo(Lh,`RPC '${e}' stream ${s} transport opened.`)})),p(u,jo.EventType.CLOSE,(()=>{d||(d=!0,Yo(Lh,`RPC '${e}' stream ${s} transport closed`),f.wo())})),p(u,jo.EventType.ERROR,(t=>{d||(d=!0,ea(Lh,`RPC '${e}' stream ${s} transport errored:`,t),f.wo(new oa(ra.UNAVAILABLE,"The operation could not be completed")))})),p(u,jo.EventType.MESSAGE,(t=>{var n;if(!d){const i=t.data[0];sa(!!i);const r=i,o=r.error||(null===(n=r[0])||void 0===n?void 0:n.error);if(o){Yo(Lh,`RPC '${e}' stream ${s} received error:`,o);const t=o.status;let n=function(e){const t=iu[e];if(void 0!==t)return ou(t)}(t),i=o.message;void 0===n&&(n=ra.INTERNAL,i="Unknown error status: "+t+" with message "+o.message),d=!0,f.wo(new oa(n,i)),u.close()}else Yo(Lh,`RPC '${e}' stream ${s} received:`,i),f._o(i)}})),p(o,Fo.STAT_EVENT,(t=>{t.stat===Vo?Yo(Lh,`RPC '${e}' stream ${s} detected buffering proxy`):t.stat===$o&&Yo(Lh,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{f.fo()}),0),f}}function Mh(){return"undefined"!=typeof document?document:null}
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
     */function Bh(e){return new ku(e,!0)}
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
     */class Fh{constructor(e,t,n=1e3,s=1.5,i=6e4){this.ii=e,this.timerId=t,this.Po=n,this.bo=s,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const t=Math.floor(this.So+this.ko()),n=Math.max(0,Date.now()-this.Co),s=Math.max(0,t-n);s>0&&Yo("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.So} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,s,(()=>(this.Co=Date.now(),e()))),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){null!==this.Do&&(this.Do.skipDelay(),this.Do=null)}cancel(){null!==this.Do&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}
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
     */class Vh{constructor(e,t,n,s,i,r,o,a){this.ii=e,this.$o=n,this.Oo=s,this.connection=i,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Fh(e,t)}Uo(){return 1===this.state||5===this.state||this.Ko()}Ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&null===this.Bo&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,(()=>this.zo())))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,t){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,4!==e?this.qo.reset():t&&t.code===ra.RESOURCE_EXHAUSTED?(Zo(t.toString()),Zo("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):t&&t.code===ra.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(t)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),t=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Fo===t&&this.Zo(e,n)}),(t=>{e((()=>{const e=new oa(ra.UNKNOWN,"Fetching auth token failed: "+t.message);return this.tu(e)}))}))}Zo(e,t){const n=this.Xo(this.Fo);this.stream=this.eu(e,t),this.stream.uo((()=>{n((()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,(()=>(this.Ko()&&(this.state=3),Promise.resolve()))),this.listener.uo())))})),this.stream.ao((e=>{n((()=>this.tu(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Go(){this.state=5,this.qo.No((async()=>{this.state=0,this.start()}))}tu(e){return Yo("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget((()=>this.Fo===e?t():(Yo("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class $h extends Vh{constructor(e,t,n,s,i,r){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,r),this.serializer=i}eu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.qo.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:na()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],r=function(e,t){return e.useProto3Json?(sa(void 0===t||"string"==typeof t),za.fromBase64String(t||"")):(sa(void 0===t||t instanceof Uint8Array),za.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?ra.UNKNOWN:ou(e.code);return new oa(t,e.message||"")}(o);n=new Au(s,i,r,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const i=Lu(e,s.document.name),r=Uu(s.document.updateTime),o=s.document.createTime?Uu(s.document.createTime):ba.min(),a=new wc({mapValue:{fields:s.document.fields}}),c=bc.newFoundDocument(i,r,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new mu(l,u,c.key,c)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const i=Lu(e,s.document),r=s.readTime?Uu(s.readTime):ba.min(),o=bc.newNoDocument(i,r),a=s.removedTargetIds||[];n=new mu([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const i=Lu(e,s.document),r=s.removedTargetIds||[];n=new mu([],r,i,null)}else{if(!("filter"in t))return na();{t.filter;const e=t.filter;e.targetId;const{count:s=0,unchangedNames:i}=e,r=new su(s,i),o=e.targetId;n=new vu(o,r)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return ba.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?ba.min():t.readTime?Uu(t.readTime):ba.min()}(e);return this.listener.nu(t,n)}su(e){const t={};t.database=Mu(this.serializer),t.addTarget=function(e,t){let n;const s=t.target;if(n=Wc(s)?{documents:Vu(e,s)}:{query:$u(e,s)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=Nu(e,t.resumeToken);const s=Su(e,t.expectedCount);null!==s&&(n.expectedCount=s)}else if(t.snapshotVersion.compareTo(ba.min())>0){n.readTime=Du(e,t.snapshotVersion.toTimestamp());const s=Su(e,t.expectedCount);null!==s&&(n.expectedCount=s)}return n}(this.serializer,e);const n=function(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return na()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.Wo(t)}iu(e){const t={};t.database=Mu(this.serializer),t.removeTarget=e,this.Wo(t)}}class Gh extends Vh{constructor(e,t,n,s,i,r){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,r),this.serializer=i,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){if(sa(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const t=function(e,t){return e&&e.length>0?(sa(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Uu(e.updateTime):Uu(t);return n.isEqual(ba.min())&&(n=Uu(t)),new Bl(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=Uu(e.commitTime);return this.listener.cu(n,t)}return sa(!e.writeResults||0===e.writeResults.length),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Mu(this.serializer),this.Wo(e)}uu(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>function(e,t){let n;if(t instanceof Wl)n={update:Fu(e,t.key,t.value)};else if(t instanceof Yl)n={delete:Ou(e,t.key)};else if(t instanceof zl)n={update:Fu(e,t.key,t.data),updateMask:Ju(t.fieldMask)};else{if(!(t instanceof Zl))return na();n={verify:Ou(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Rl)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Ul)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof _l)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Ll)return{fieldPath:t.field.canonicalString(),increment:n.gt};throw na()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Ru(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:na()}(e,t.precondition)),n}(this.serializer,e)))};this.Wo(t)}}
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
     */class jh extends class{}{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.lu=!1}fu(){if(this.lu)throw new oa(ra.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,t,n){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.connection.Io(e,t,n,s,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===ra.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new oa(ra.UNKNOWN,e.toString())}))}vo(e,t,n,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.connection.vo(e,t,n,i,r,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===ra.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new oa(ra.UNKNOWN,e.toString())}))}terminate(){this.lu=!0}}class Qh{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){0===this.wu&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve()))))}Iu(e){"Online"===this.state?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,"Online"===e&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(Zo(t),this.mu=!1):Yo("OnlineStateTracker",t)}Tu(){null!==this._u&&(this._u.cancel(),this._u=null)}}
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
     */class qh{constructor(e,t,n,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr((e=>{n.enqueueAndForget((async()=>{ed(this)&&(Yo("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=ia(e);t.vu.add(4),await Wh(t),t.bu.set("Unknown"),t.vu.delete(4),await Kh(t)}(this))}))})),this.bu=new Qh(n,s)}}async function Kh(e){if(ed(e))for(const t of e.Ru)await t(!0)}async function Wh(e){for(const t of e.Ru)await t(!1)}function zh(e,t){const n=ia(e);n.Au.has(t.targetId)||(n.Au.set(t.targetId,t),Zh(n)?Yh(n):vd(n).Ko()&&Jh(n,t))}function Hh(e,t){const n=ia(e),s=vd(n);n.Au.delete(t),s.Ko()&&Xh(n,t),0===n.Au.size&&(s.Ko()?s.jo():ed(n)&&n.bu.set("Unknown"))}function Jh(e,t){if(e.Vu.qt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(ba.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}vd(e).su(t)}function Xh(e,t){e.Vu.qt(t),vd(e).iu(t)}function Yh(e){e.Vu=new yu({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),le:t=>e.Au.get(t)||null,ue:()=>e.datastore.serializer.databaseId}),vd(e).start(),e.bu.gu()}function Zh(e){return ed(e)&&!vd(e).Uo()&&e.Au.size>0}function ed(e){return 0===ia(e).vu.size}function td(e){e.Vu=void 0}async function nd(e){e.Au.forEach(((t,n)=>{Jh(e,t)}))}async function sd(e,t){td(e),Zh(e)?(e.bu.Iu(t),Yh(e)):e.bu.set("Unknown")}async function id(e,t,n){if(e.bu.set("Online"),t instanceof Au&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const s of t.targetIds)e.Au.has(s)&&(await e.remoteSyncer.rejectListen(s,n),e.Au.delete(s),e.Vu.removeTarget(s))}(e,t)}catch(n){Yo("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await rd(e,n)}else if(t instanceof mu?e.Vu.Ht(t):t instanceof vu?e.Vu.ne(t):e.Vu.Xt(t),!n.isEqual(ba.min()))try{const t=await Ih(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Vu.ce(t);return n.targetChanges.forEach(((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.Au.get(s);i&&e.Au.set(s,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const s=e.Au.get(t);if(!s)return;e.Au.set(t,s.withResumeToken(za.EMPTY_BYTE_STRING,s.snapshotVersion)),Xh(e,t);const i=new Yu(s.target,t,n,s.sequenceNumber);Jh(e,i)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Yo("RemoteStore","Failed to raise snapshot:",t),await rd(e,t)}}async function rd(e,t,n){if(!Oa(t))throw t;e.vu.add(1),await Wh(e),e.bu.set("Offline"),n||(n=()=>Ih(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Yo("RemoteStore","Retrying IndexedDB access"),await n(),e.vu.delete(1),await Kh(e)}))}function od(e,t){return t().catch((n=>rd(e,n,t)))}async function ad(e){const t=ia(e),n=Ad(t);let s=t.Eu.length>0?t.Eu[t.Eu.length-1].batchId:-1;for(;cd(t);)try{const e=await Th(t.localStore,s);if(null===e){0===t.Eu.length&&n.jo();break}s=e.batchId,ld(t,e)}catch(e){await rd(t,e)}ud(t)&&hd(t)}function cd(e){return ed(e)&&e.Eu.length<10}function ld(e,t){e.Eu.push(t);const n=Ad(e);n.Ko()&&n.ou&&n.uu(t.mutations)}function ud(e){return ed(e)&&!Ad(e).Uo()&&e.Eu.length>0}function hd(e){Ad(e).start()}async function dd(e){Ad(e).hu()}async function fd(e){const t=Ad(e);for(const n of e.Eu)t.uu(n.mutations)}async function pd(e,t,n){const s=e.Eu.shift(),i=tu.from(s,t,n);await od(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await ad(e)}async function gd(e,t){t&&Ad(e).ou&&await async function(e,t){if(function(e){switch(e){default:return na();case ra.CANCELLED:case ra.UNKNOWN:case ra.DEADLINE_EXCEEDED:case ra.RESOURCE_EXHAUSTED:case ra.INTERNAL:case ra.UNAVAILABLE:case ra.UNAUTHENTICATED:return!1;case ra.INVALID_ARGUMENT:case ra.NOT_FOUND:case ra.ALREADY_EXISTS:case ra.PERMISSION_DENIED:case ra.FAILED_PRECONDITION:case ra.ABORTED:case ra.OUT_OF_RANGE:case ra.UNIMPLEMENTED:case ra.DATA_LOSS:return!0}}(n=t.code)&&n!==ra.ABORTED){const n=e.Eu.shift();Ad(e).Qo(),await od(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await ad(e)}var n}(e,t),ud(e)&&hd(e)}async function md(e,t){const n=ia(e);n.asyncQueue.verifyOperationInProgress(),Yo("RemoteStore","RemoteStore received new credentials");const s=ed(n);n.vu.add(3),await Wh(n),s&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.vu.delete(3),await Kh(n)}function vd(e){return e.Su||(e.Su=function(e,t,n){const s=ia(e);return s.fu(),new $h(t,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,n)
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
     */}(e.datastore,e.asyncQueue,{uo:nd.bind(null,e),ao:sd.bind(null,e),nu:id.bind(null,e)}),e.Ru.push((async t=>{t?(e.Su.Qo(),Zh(e)?Yh(e):e.bu.set("Unknown")):(await e.Su.stop(),td(e))}))),e.Su}function Ad(e){return e.Du||(e.Du=function(e,t,n){const s=ia(e);return s.fu(),new Gh(t,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,n)}(e.datastore,e.asyncQueue,{uo:dd.bind(null,e),ao:gd.bind(null,e),au:fd.bind(null,e),cu:pd.bind(null,e)}),e.Ru.push((async t=>{t?(e.Du.Qo(),await ad(e)):(await e.Du.stop(),e.Eu.length>0&&(Yo("RemoteStore",`Stopping write stream with ${e.Eu.length} pending writes`),e.Eu=[]))}))),e.Du
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
     */}class wd{constructor(e,t,n,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new aa,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,s,i){const r=Date.now()+n,o=new wd(e,t,r,s,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new oa(ra.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yd(e,t){if(Zo("AsyncQueue",`${t}: ${e}`),Oa(e))return new oa(ra.UNAVAILABLE,`${t}: ${e}`);throw e}
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
     */class bd{constructor(e){this.comparator=e?(t,n)=>e(t,n)||ka.comparator(t.key,n.key):(e,t)=>ka.comparator(e.key,t.key),this.keyedMap=pl(),this.sortedSet=new $a(this.comparator)}static emptySet(e){return new bd(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof bd))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,s=n.getNext().key;if(!e.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new bd;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
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
     */class Id{constructor(){this.Cu=new $a(ka.comparator)}track(e){const t=e.doc.key,n=this.Cu.get(t);n?0!==e.type&&3===n.type?this.Cu=this.Cu.insert(t,e):3===e.type&&1!==n.type?this.Cu=this.Cu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Cu=this.Cu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Cu=this.Cu.remove(t):1===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):na():this.Cu=this.Cu.insert(t,e)}xu(){const e=[];return this.Cu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Ed{constructor(e,t,n,s,i,r,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,s,i){const r=[];return t.forEach((e=>{r.push({type:0,doc:e})})),new Ed(e,t,bd.emptySet(t),r,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&il(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}
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
     */class Td{constructor(){this.Nu=void 0,this.listeners=[]}}class Cd{constructor(){this.queries=new ul((e=>rl(e)),il),this.onlineState="Unknown",this.ku=new Set}}async function kd(e,t){const n=ia(e),s=t.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Td),i)try{r.Nu=await n.onListen(s)}catch(e){const n=yd(e,`Initialization of query '${ol(t.query)}' failed`);return void t.onError(n)}n.queries.set(s,r),r.listeners.push(t),t.Mu(n.onlineState),r.Nu&&t.$u(r.Nu)&&Rd(n)}async function Sd(e,t){const n=ia(e),s=t.query;let i=!1;const r=n.queries.get(s);if(r){const e=r.listeners.indexOf(t);e>=0&&(r.listeners.splice(e,1),i=0===r.listeners.length)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Dd(e,t){const n=ia(e);let s=!1;for(const e of t){const t=e.query,i=n.queries.get(t);if(i){for(const t of i.listeners)t.$u(e)&&(s=!0);i.Nu=e}}s&&Rd(n)}function Nd(e,t,n){const s=ia(e),i=s.queries.get(t);if(i)for(const e of i.listeners)e.onError(n);s.queries.delete(t)}function Rd(e){e.ku.forEach((e=>{e.next()}))}class Ud{constructor(e,t,n){this.query=e,this.Ou=t,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=n||{}}$u(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Ed(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),t=!0):this.qu(e,this.onlineState)&&(this.Uu(e),t=!0),this.Bu=e,t}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let t=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),t=!0),t}qu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Ku||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Lu(e){if(e.docChanges.length>0)return!0;const t=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Uu(e){e=Ed.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}
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
     */class xd{constructor(e){this.key=e}}class _d{constructor(e){this.key=e}}class Od{constructor(e,t){this.query=e,this.Yu=t,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=bl(),this.mutatedKeys=bl(),this.tc=cl(e),this.ec=new bd(this.tc)}get nc(){return this.Yu}sc(e,t){const n=t?t.ic:new Id,s=t?t.ec:this.ec;let i=t?t.mutatedKeys:this.mutatedKeys,r=s,o=!1;const a="F"===this.query.limitType&&s.size===this.query.limit?s.last():null,c="L"===this.query.limitType&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((e,t)=>{const l=s.get(e),u=al(this.query,t)?t:null,h=!!l&&this.mutatedKeys.has(l.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;l&&u?l.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.rc(l,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.tc(u,a)>0||c&&this.tc(u,c)<0)&&(o=!0)):!l&&u?(n.track({type:0,doc:u}),f=!0):l&&!u&&(n.track({type:1,doc:l}),f=!0,(a||c)&&(o=!0)),f&&(u?(r=r.add(u),i=d?i.add(e):i.delete(e)):(r=r.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;r.size>this.query.limit;){const e="F"===this.query.limitType?r.last():r.first();r=r.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{ec:r,ic:n,zi:o,mutatedKeys:i}}rc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const s=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const i=e.ic.xu();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return na()}};return n(e)-n(t)}
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
     */(e.type,t.type)||this.tc(e.doc,t.doc))),this.oc(n);const r=t?this.uc():[],o=0===this.Zu.size&&this.current?1:0,a=o!==this.Xu;return this.Xu=o,0!==i.length||a?{snapshot:new Ed(this.query,e.ec,s,i,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),cc:r}:{cc:r}}Mu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Id,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach((e=>this.Yu=this.Yu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Yu=this.Yu.delete(e))),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=bl(),this.ec.forEach((e=>{this.ac(e.key)&&(this.Zu=this.Zu.add(e.key))}));const t=[];return e.forEach((e=>{this.Zu.has(e)||t.push(new _d(e))})),this.Zu.forEach((n=>{e.has(n)||t.push(new xd(n))})),t}hc(e){this.Yu=e.ir,this.Zu=bl();const t=this.sc(e.documents);return this.applyChanges(t,!0)}lc(){return Ed.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,0===this.Xu,this.hasCachedResults)}}class Ld{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Pd{constructor(e){this.key=e,this.fc=!1}}class Md{constructor(e,t,n,s,i,r){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=r,this.dc={},this.wc=new ul((e=>rl(e)),il),this._c=new Map,this.mc=new Set,this.gc=new $a(ka.comparator),this.yc=new Map,this.Ic=new lh,this.Tc={},this.Ec=new Map,this.Ac=sh.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return!0===this.vc}}async function Bd(e,t){const n=function(e){const t=ia(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=$d.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=tf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=jd.bind(null,t),t.dc.nu=Dd.bind(null,t.eventManager),t.dc.Pc=Nd.bind(null,t.eventManager),t}(e);let s,i;const r=n.wc.get(t);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.lc();else{const e=await function(e,t){const n=ia(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let s;return n.Bs.getTargetData(e,t).next((i=>i?(s=i,_a.resolve(s)):n.Bs.allocateTargetId(e).next((i=>(s=new Yu(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.Bs.addTargetData(e,s).next((()=>s)))))))})).then((e=>{const s=n.Ji.get(e.targetId);return(null===s||e.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(e.targetId,e),n.Yi.set(t,e.targetId)),e}))}(n.localStore,tl(t)),r=n.sharedClientState.addLocalQueryTarget(e.targetId);s=e.targetId,i=await async function(e,t,n,s,i){e.Rc=(t,n,s)=>async function(e,t,n,s){let i=t.view.sc(n);i.zi&&(i=await kh(e.localStore,t.query,!1).then((({documents:e})=>t.view.sc(e,i))));const r=s&&s.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,r);return Jd(e,t.targetId,o.cc),o.snapshot}(e,t,n,s);const r=await kh(e.localStore,t,!0),o=new Od(t,r.ir),a=o.sc(r.documents),c=gu.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==e.onlineState,i),l=o.applyChanges(a,e.isPrimaryClient,c);Jd(e,n,l.cc);const u=new Ld(t,n,o);return e.wc.set(t,u),e._c.has(n)?e._c.get(n).push(t):e._c.set(n,[t]),l.snapshot}(n,t,s,"current"===r,e.resumeToken),n.isPrimaryClient&&zh(n.remoteStore,e)}return i}async function Fd(e,t){const n=ia(e),s=n.wc.get(t),i=n._c.get(s.targetId);if(i.length>1)return n._c.set(s.targetId,i.filter((e=>!il(e,t)))),void n.wc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Ch(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),Hh(n.remoteStore,s.targetId),zd(n,s.targetId)})).catch(xa)):(zd(n,s.targetId),await Ch(n.localStore,s.targetId,!0))}async function Vd(e,t,n){const s=function(e){const t=ia(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Qd.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=qd.bind(null,t),t}(e);try{const e=await function(e,t){const n=ia(e),s=ya.now(),i=t.reduce(((e,t)=>e.add(t.key)),bl());let r,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=dl(),c=bl();return n.Zi.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{r=i;const o=[];for(const e of t){const t=ql(e,r.get(e.key).overlayedDocument);null!=t&&o.push(new zl(e.key,t,yc(t.value.mapValue),Fl.exists(!0)))}return n.mutationQueue.addMutationBatch(e,s,o,t)})).next((t=>{o=t;const s=t.applyToLocalDocumentSet(r,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,s)}))})).then((()=>({batchId:o.batchId,changes:gl(r)})))}(s.localStore,t);s.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let s=e.Tc[e.currentUser.toKey()];s||(s=new $a(Aa)),s=s.insert(t,n),e.Tc[e.currentUser.toKey()]=s}(s,e.batchId,n),await Zd(s,e.changes),await ad(s.remoteStore)}catch(e){const t=yd(e,"Failed to persist write");n.reject(t)}}async function $d(e,t){const n=ia(e);try{const e=await Eh(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const s=n.yc.get(t);s&&(sa(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?s.fc=!0:e.modifiedDocuments.size>0?sa(s.fc):e.removedDocuments.size>0&&(sa(s.fc),s.fc=!1))})),await Zd(n,e,t)}catch(e){await xa(e)}}function Gd(e,t,n){const s=ia(e);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const e=[];s.wc.forEach(((n,s)=>{const i=s.view.Mu(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=ia(e);n.onlineState=t;let s=!1;n.queries.forEach(((e,n)=>{for(const e of n.listeners)e.Mu(t)&&(s=!0)})),s&&Rd(n)}(s.eventManager,t),e.length&&s.dc.nu(e),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function jd(e,t,n){const s=ia(e);s.sharedClientState.updateQueryState(t,"rejected",n);const i=s.yc.get(t),r=i&&i.key;if(r){let e=new $a(ka.comparator);e=e.insert(r,bc.newNoDocument(r,ba.min()));const n=bl().add(r),i=new pu(ba.min(),new Map,new $a(Aa),e,n);await $d(s,i),s.gc=s.gc.remove(r),s.yc.delete(t),Yd(s)}else await Ch(s.localStore,t,!1).then((()=>zd(s,t,n))).catch(xa)}async function Qd(e,t){const n=ia(e),s=t.batch.batchId;try{const e=await function(e,t){const n=ia(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const s=t.batch.keys(),i=n.Zi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,s){const i=n.batch,r=i.keys();let o=_a.resolve();return r.forEach((e=>{o=o.next((()=>s.getEntry(t,e))).next((t=>{const r=n.docVersions.get(e);sa(null!==r),t.version.compareTo(r)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),s.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,s,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=bl();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,s)))}))}(n.localStore,t);Wd(n,s,null),Kd(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Zd(n,e)}catch(e){await xa(e)}}async function qd(e,t,n){const s=ia(e);try{const e=await function(e,t){const n=ia(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let s;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(sa(null!==t),s=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,s,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,s))).next((()=>n.localDocuments.getDocuments(e,s)))}))}(s.localStore,t);Wd(s,t,n),Kd(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await Zd(s,e)}catch(n){await xa(n)}}function Kd(e,t){(e.Ec.get(t)||[]).forEach((e=>{e.resolve()})),e.Ec.delete(t)}function Wd(e,t,n){const s=ia(e);let i=s.Tc[s.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),s.Tc[s.currentUser.toKey()]=i}}function zd(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e._c.get(t))e.wc.delete(s),n&&e.dc.Pc(s,n);e._c.delete(t),e.isPrimaryClient&&e.Ic.Is(t).forEach((t=>{e.Ic.containsKey(t)||Hd(e,t)}))}function Hd(e,t){e.mc.delete(t.path.canonicalString());const n=e.gc.get(t);null!==n&&(Hh(e.remoteStore,n),e.gc=e.gc.remove(t),e.yc.delete(n),Yd(e))}function Jd(e,t,n){for(const s of n)s instanceof xd?(e.Ic.addReference(s.key,t),Xd(e,s)):s instanceof _d?(Yo("SyncEngine","Document no longer in limbo: "+s.key),e.Ic.removeReference(s.key,t),e.Ic.containsKey(s.key)||Hd(e,s.key)):na()}function Xd(e,t){const n=t.key,s=n.path.canonicalString();e.gc.get(n)||e.mc.has(s)||(Yo("SyncEngine","New document in limbo: "+n),e.mc.add(s),Yd(e))}function Yd(e){for(;e.mc.size>0&&e.gc.size<e.maxConcurrentLimboResolutions;){const t=e.mc.values().next().value;e.mc.delete(t);const n=new ka(Ea.fromString(t)),s=e.Ac.next();e.yc.set(s,new Pd(n)),e.gc=e.gc.insert(n,s),zh(e.remoteStore,new Yu(tl(Hc(n.path)),s,"TargetPurposeLimboResolution",La.ct))}}async function Zd(e,t,n){const s=ia(e),i=[],r=[],o=[];s.wc.isEmpty()||(s.wc.forEach(((e,a)=>{o.push(s.Rc(a,t,n).then((e=>{if((e||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){i.push(e);const t=Ah.Li(a.targetId,e);r.push(t)}})))})),await Promise.all(o),s.dc.nu(i),await async function(e,t){const n=ia(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>_a.forEach(t,(t=>_a.forEach(t.Fi,(s=>n.persistence.referenceDelegate.addReference(e,t.targetId,s))).next((()=>_a.forEach(t.Bi,(s=>n.persistence.referenceDelegate.removeReference(e,t.targetId,s)))))))))}catch(e){if(!Oa(e))throw e;Yo("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.Ji.get(t),s=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(s);n.Ji=n.Ji.insert(t,i)}}}(s.localStore,r))}async function ef(e,t){const n=ia(e);if(!n.currentUser.isEqual(t)){Yo("SyncEngine","User change. New user:",t.toKey());const e=await bh(n.localStore,t);n.currentUser=t,function(e,t){e.Ec.forEach((e=>{e.forEach((e=>{e.reject(new oa(ra.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),e.Ec.clear()}(n),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Zd(n,e.er)}}function tf(e,t){const n=ia(e),s=n.yc.get(t);if(s&&s.fc)return bl().add(s.key);{let e=bl();const s=n._c.get(t);if(!s)return e;for(const t of s){const s=n.wc.get(t);e=e.unionWith(s.view.nc)}return e}}class nf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Bh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return function(e,t,n,s){return new yh(e,t,n,s)}(this.persistence,new wh,e.initialUser,this.serializer)}createPersistence(e){return new gh(vh.zs,this.serializer)}createSharedClientState(e){return new Dh}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class sf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Gd(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=ef.bind(null,this.syncEngine),await async function(e,t){const n=ia(e);t?(n.vu.delete(2),await Kh(n)):t||(n.vu.add(2),await Wh(n),n.bu.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Cd}createDatastore(e){const t=Bh(e.databaseInfo.databaseId),n=(s=e.databaseInfo,new Ph(s));var s;return function(e,t,n,s){return new jh(e,t,n,s)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,s=e.asyncQueue,i=e=>Gd(this.syncEngine,e,0),r=Rh.D()?new Rh:new Nh,new qh(t,n,s,i,r);var t,n,s,i,r}createSyncEngine(e,t){return function(e,t,n,s,i,r,o){const a=new Md(e,t,n,s,i,r);return o&&(a.vc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=ia(e);Yo("RemoteStore","RemoteStore shutting down."),t.vu.add(5),await Wh(t),t.Pu.shutdown(),t.bu.set("Unknown")}(this.remoteStore)}}
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
     */class rf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):Zo("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
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
     */class of{constructor(e,t,n,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=s,this.user=zo.UNAUTHENTICATED,this.clientId=va.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Yo("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Yo("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new oa(ra.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new aa;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=yd(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function af(e,t){e.asyncQueue.verifyOperationInProgress(),Yo("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener((async e=>{s.isEqual(e)||(await bh(t.localStore,e),s=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function cf(e,t){e.asyncQueue.verifyOperationInProgress();const n=await async function(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){Yo("FirestoreClient","Using user provided OfflineComponentProvider");try{await af(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(e){return"FirebaseError"===e.name?e.code===ra.FAILED_PRECONDITION||e.code===ra.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}(n))throw n;ea("Error using user provided cache. Falling back to memory cache: "+n),await af(e,new nf)}}else Yo("FirestoreClient","Using default OfflineComponentProvider"),await af(e,new nf);return e._offlineComponents}(e);Yo("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener((e=>md(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>md(t.remoteStore,n))),e._onlineComponents=t}async function lf(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(Yo("FirestoreClient","Using user provided OnlineComponentProvider"),await cf(e,e._uninitializedComponentsProvider._online)):(Yo("FirestoreClient","Using default OnlineComponentProvider"),await cf(e,new sf))),e._onlineComponents}async function uf(e){const t=await lf(e),n=t.eventManager;return n.onListen=Bd.bind(null,t.syncEngine),n.onUnlisten=Fd.bind(null,t.syncEngine),n}
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
function hf(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
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
     */}const df=new Map;
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
     */function ff(e,t,n){if(!n)throw new oa(ra.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function pf(e){if(!ka.isDocumentKey(e))throw new oa(ra.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function gf(e){if(ka.isDocumentKey(e))throw new oa(ra.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function mf(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":na()}function vf(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new oa(ra.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=mf(e);throw new oa(ra.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
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
     */class Af{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new oa(ra.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new oa(ra.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,s){if(!0===t&&!0===s)throw new oa(ra.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hf(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new oa(ra.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new oa(ra.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new oa(ra.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
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
     */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,n}}class wf{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Af({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new oa(ra.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new oa(ra.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Af(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new la;switch(e.type){case"firstParty":return new fa(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new oa(ra.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=df.get(e);t&&(Yo("ComponentProvider","Removing Datastore"),df.delete(e),t.terminate())}(this),Promise.resolve()}}function yf(e,t,n,s={}){var i;const r=(e=vf(e,wf))._getSettings(),o=`${t}:${n}`;if("firestore.googleapis.com"!==r.host&&r.host!==o&&ea("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),s.mockUserToken){let t,n;if("string"==typeof s.mockUserToken)t=s.mockUserToken,n=zo.MOCK_USER;else{t=function(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[rt(JSON.stringify({alg:"none",type:"JWT"})),rt(JSON.stringify(r)),""].join(".")}(s.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const r=s.mockUserToken.sub||s.mockUserToken.user_id;if(!r)throw new oa(ra.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new zo(r)}e._authCredentials=new ua(new ca(t,n))}}
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
     */class bf{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ef(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new bf(this.firestore,e,this._key)}}class If{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new If(this.firestore,e,this._query)}}class Ef extends If{constructor(e,t,n){super(e,t,Hc(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new bf(this.firestore,null,new ka(e))}withConverter(e){return new Ef(this.firestore,e,this._path)}}function Tf(e,t,...n){if(e=Ct(e),ff("collection","path",t),e instanceof wf){const s=Ea.fromString(t,...n);return gf(s),new Ef(e,null,s)}{if(!(e instanceof bf||e instanceof Ef))throw new oa(ra.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(Ea.fromString(t,...n));return gf(s),new Ef(e.firestore,null,s)}}function Cf(e,t,...n){if(e=Ct(e),1===arguments.length&&(t=va.A()),ff("doc","path",t),e instanceof wf){const s=Ea.fromString(t,...n);return pf(s),new bf(e,null,new ka(s))}{if(!(e instanceof bf||e instanceof Ef))throw new oa(ra.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(Ea.fromString(t,...n));return pf(s),new bf(e.firestore,e instanceof Ef?e.converter:null,new ka(s))}}
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
     */class kf{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Fh(this,"async_queue_retry"),this.Xc=()=>{const e=Mh();e&&Yo("AsyncQueue","Visibility state changed to "+e.visibilityState),this.qo.Mo()};const e=Mh();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const t=Mh();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise((()=>{}));const t=new aa;return this.ta((()=>this.jc&&this.Jc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Qc.push(e),this.ea())))}async ea(){if(0!==this.Qc.length){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Oa(e))throw e;Yo("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No((()=>this.ea()))}}ta(e){const t=this.Gc.then((()=>(this.Hc=!0,e().catch((e=>{this.Wc=e,this.Hc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
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
     */(e);throw Zo("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Hc=!1,e))))));return this.Gc=t,t}enqueueAfterDelay(e,t,n){this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);const s=wd.createAndSchedule(this,e,t,n,(e=>this.na(e)));return this.zc.push(s),s}Zc(){this.Wc&&na()}verifyOperationInProgress(){}async sa(){let e;do{e=this.Gc,await e}while(e!==this.Gc)}ia(e){for(const t of this.zc)if(t.timerId===e)return!0;return!1}ra(e){return this.sa().then((()=>{this.zc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.zc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.sa()}))}oa(e){this.Yc.push(e)}na(e){const t=this.zc.indexOf(e);this.zc.splice(t,1)}}class Sf extends wf{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new kf,this._persistenceKey=(null==s?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Nf(this),this._firestoreClient.terminate()}}function Df(e){return e._firestoreClient||Nf(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Nf(e){var t,n,s;const i=e._freezeSettings(),r=function(e,t,n,s){return new nc(e,t,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,hf(s.experimentalLongPollingOptions),s.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,i);e._firestoreClient=new of(e._authCredentials,e._appCheckCredentials,e._queue,r),(null===(n=i.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(s=i.cache)||void 0===s?void 0:s._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}
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
     */class Rf{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Rf(za.fromBase64String(e))}catch(e){throw new oa(ra.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Rf(za.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
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
     */class Uf{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new oa(ra.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ca(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
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
     */class xf{constructor(e){this._methodName=e}}
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
     */class _f{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new oa(ra.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new oa(ra.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Aa(this._lat,e._lat)||Aa(this._long,e._long)}}
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
     */const Of=/^__.*__$/;class Lf{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new zl(e,this.data,this.fieldMask,t,this.fieldTransforms):new Wl(e,this.data,t,this.fieldTransforms)}}function Pf(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw na()}}class Mf{constructor(e,t,n,s,i,r){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,void 0===i&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=r||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Mf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),s=this.aa({path:n,la:!1});return s.fa(e),s}da(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),s=this.aa({path:n,la:!1});return s.ua(),s}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return zf(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(0===e.length)throw this._a("Document fields must not be empty");if(Pf(this.ca)&&Of.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class Bf{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Bh(e)}ya(e,t,n,s=!1){return new Mf({ca:e,methodName:t,ga:n,path:Ca.emptyPath(),la:!1,ma:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ff(e){const t=e._freezeSettings(),n=Bh(e._databaseId);return new Bf(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Vf(e,t,n,s,i,r={}){const o=e.ya(r.merge||r.mergeFields?2:0,t,n,i);Qf("Data must be an object, but it was:",o,s);const a=Gf(s,o);let c,l;if(r.merge)c=new Ka(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const e=[];for(const s of r.mergeFields){const i=qf(t,s,n);if(!o.contains(i))throw new oa(ra.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Hf(e,i)||e.push(i)}c=new Ka(e),l=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,l=o.fieldTransforms;return new Lf(new wc(a),c,l)}function $f(e,t){if(jf(e=Ct(e)))return Qf("Unsupported field value:",t,e),Gf(e,t);if(e instanceof xf)return function(e,t){if(!Pf(t.ca))throw t._a(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t._a(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.la&&4!==t.ca)throw t._a("Nested arrays are not supported");return function(e,t){const n=[];let s=0;for(const i of e){let e=$f(i,t.wa(s));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),s++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Ct(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Cl(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=ya.fromDate(e);return{timestampValue:Du(t.serializer,n)}}if(e instanceof ya){const n=new ya(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Du(t.serializer,n)}}if(e instanceof _f)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Rf)return{bytesValue:Nu(t.serializer,e._byteString)};if(e instanceof bf){const n=t.databaseId,s=e.firestore._databaseId;if(!s.isEqual(n))throw t._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:xu(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t._a(`Unsupported field value: ${mf(e)}`)}(e,t)}function Gf(e,t){const n={};return Va(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Fa(e,((e,s)=>{const i=$f(s,t.ha(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function jf(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof ya||e instanceof _f||e instanceof Rf||e instanceof bf||e instanceof xf)}function Qf(e,t,n){if(!jf(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const s=mf(n);throw"an object"===s?t._a(e+" a custom object"):t._a(e+" "+s)}}function qf(e,t,n){if((t=Ct(t))instanceof Uf)return t._internalPath;if("string"==typeof t)return Wf(e,t);throw zf("Field path arguments must be of type string or ",e,!1,void 0,n)}const Kf=new RegExp("[~\\*/\\[\\]]");function Wf(e,t,n){if(t.search(Kf)>=0)throw zf(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Uf(...t.split("."))._internalPath}catch(s){throw zf(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function zf(e,t,n,s,i){const r=s&&!s.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new oa(ra.INVALID_ARGUMENT,a+e+c)}function Hf(e,t){return e.some((e=>e.isEqual(t)))}
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
     */class Jf{constructor(e,t,n,s,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new bf(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Xf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Yf("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Xf extends Jf{data(){return super.data()}}function Yf(e,t){return"string"==typeof t?Wf(e,t):t instanceof Uf?t._internalPath:t._delegate._internalPath}
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
     */class Zf{}class ep extends Zf{}function tp(e,t,...n){let s=[];t instanceof Zf&&s.push(t),s=s.concat(n),function(e){const t=e.filter((e=>e instanceof sp)).length,n=e.filter((e=>e instanceof np)).length;if(t>1||t>0&&n>0)throw new oa(ra.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
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
     */(s);for(const t of s)e=t._apply(e);return e}class np extends ep{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new np(e,t,n)}_apply(e){const t=this._parse(e);return op(e._query,t),new If(e.firestore,e.converter,nl(e._query,t))}_parse(e){const t=Ff(e.firestore),n=function(e,t,n,s,i,r,o){let a;if(i.isKeyField()){if("array-contains"===r||"array-contains-any"===r)throw new oa(ra.INVALID_ARGUMENT,`Invalid Query. You can't perform '${r}' queries on documentId().`);if("in"===r||"not-in"===r){rp(o,r);const t=[];for(const n of o)t.push(ip(s,e,n));a={arrayValue:{values:t}}}else a=ip(s,e,o)}else"in"!==r&&"not-in"!==r&&"array-contains-any"!==r||rp(o,r),a=function(e,t,n,s=!1){return $f(n,e.ya(s?4:3,t))}(n,"where",o,"in"===r||"not-in"===r);return Dc.create(i,r,a)}(e._query,0,t,e.firestore._databaseId,this._field,this._op,this._value);return n}}class sp extends Zf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new sp(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:Nc.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const s=t.getFlattenedFilters();for(const e of s)op(n,e),n=nl(n,e)}(e._query,t),new If(e.firestore,e.converter,nl(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function ip(e,t,n){if("string"==typeof(n=Ct(n))){if(""===n)throw new oa(ra.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Zc(t)&&-1!==n.indexOf("/"))throw new oa(ra.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=t.path.child(Ea.fromString(n));if(!ka.isDocumentKey(s))throw new oa(ra.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return dc(e,new ka(s))}if(n instanceof bf)return dc(e,n._key);throw new oa(ra.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${mf(n)}.`)}function rp(e,t){if(!Array.isArray(e)||0===e.length)throw new oa(ra.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function op(e,t){if(t.isInequality()){const n=Yc(e),s=t.field;if(null!==n&&!n.isEqual(s))throw new oa(ra.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${s.toString()}'`);const i=Xc(e);null!==i&&function(e,t,n){if(!n.isEqual(t))throw new oa(ra.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}(0,s,i)}const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new oa(ra.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new oa(ra.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class ap{convertValue(e,t="none"){switch(rc(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Xa(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ya(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw na()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Fa(e,((e,s)=>{n[e]=this.convertValue(s,t)})),n}convertGeoPoint(e){return new _f(Xa(e.latitude),Xa(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=ec(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(tc(e));default:return null}}convertTimestamp(e){const t=Ja(e);return new ya(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Ea.fromString(e);sa(Xu(n));const s=new sc(n.get(1),n.get(3)),i=new ka(n.popFirst(5));return s.isEqual(t)||Zo(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
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
class cp{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class lp extends Jf{constructor(e,t,n,s,i,r){super(e,t,n,s,r),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new up(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Yf("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class up extends lp{data(e={}){return super.data(e)}}class hp{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new cp(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new up(this._firestore,this._userDataWriter,n.key,n,new cp(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new oa(ra.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const s=new up(e._firestore,e._userDataWriter,n.doc.key,n.doc,new cp(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:s,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const s=new up(e._firestore,e._userDataWriter,t.doc.key,t.doc,new cp(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,r=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),r=n.indexOf(t.doc.key)),{type:dp(t.type),doc:s,oldIndex:i,newIndex:r}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function dp(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return na()}}
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
     */function fp(e){e=vf(e,bf);const t=vf(e.firestore,Sf);return function(e,t,n={}){const s=new aa;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,s,i){const r=new rf({next:r=>{t.enqueueAndForget((()=>Sd(e,o)));const a=r.docs.has(n);!a&&r.fromCache?i.reject(new oa(ra.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&r.fromCache&&s&&"server"===s.source?i.reject(new oa(ra.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(r)},error:e=>i.reject(e)}),o=new Ud(Hc(n.path),r,{includeMetadataChanges:!0,Ku:!0});return kd(e,o)}(await uf(e),e.asyncQueue,t,n,s))),s.promise}(Df(t),e._key).then((n=>function(e,t,n){const s=n.docs.get(t._key),i=new pp(e);return new lp(e,i,t._key,s,new cp(n.hasPendingWrites,n.fromCache),t.converter)}(t,e,n)))}class pp extends ap{constructor(e){super(),this.firestore=e}convertBytes(e){return new Rf(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new bf(this.firestore,null,t)}}function gp(e){e=vf(e,If);const t=vf(e.firestore,Sf),n=Df(t),s=new pp(t);return function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new oa(ra.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),function(e,t,n={}){const s=new aa;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,s,i){const r=new rf({next:n=>{t.enqueueAndForget((()=>Sd(e,o))),n.fromCache&&"server"===s.source?i.reject(new oa(ra.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new Ud(n,r,{includeMetadataChanges:!0,Ku:!0});return kd(e,o)}(await uf(e),e.asyncQueue,t,n,s))),s.promise}(n,e._query).then((n=>new hp(t,s,e,n)))}function mp(e,t,n){e=vf(e,bf);const s=vf(e.firestore,Sf),i=function(e,t,n){let s;return s=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,s}(e.converter,t,n);return vp(s,[Vf(Ff(s),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,Fl.none())])}function vp(e,t){return function(e,t){const n=new aa;return e.asyncQueue.enqueueAndForget((async()=>Vd(await function(e){return lf(e).then((e=>e.syncEngine))}(e),t,n))),n.promise}(Df(e),t)}function Ap(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(s=Object.getOwnPropertySymbols(e);i<s.length;i++)t.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(e,s[i])&&(n[s[i]]=e[s[i]])}return n}function wp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}!function(e,t=!0){!function(e){Ho=e}(fn),ln(new kt("firestore",((e,{instanceIdentifier:n,options:s})=>{const i=e.getProvider("app").getImmediate(),r=new Sf(new ha(e.getProvider("auth-internal")),new ga(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new oa(ra.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sc(e.options.projectId,t)}(i,n),i);return s=Object.assign({useFetchStreams:t},s),r._setSettings(s),r}),"PUBLIC").setMultipleInstances(!0)),mn(Wo,"3.13.0",e),mn(Wo,"3.13.0","esm2017")}(),"function"==typeof SuppressedError&&SuppressedError;const yp=wp,bp=new mt("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Ip=new Lt("@firebase/auth");function Ep(e,...t){Ip.logLevel<=Rt.ERROR&&Ip.error(`Auth (${fn}): ${e}`,...t)}
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
     */function Tp(e,...t){throw kp(e,...t)}function Cp(e,...t){return kp(e,...t)}function kp(e,...t){if("string"!=typeof e){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=e.name),e._errorFactory.create(n,...s)}return bp.create(e,...t)}function Sp(e,t,...n){if(!e)throw kp(t,...n)}function Dp(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ep(t),new Error(t)}function Np(e,t){e||Dp(t)}
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
     */function Rp(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Up(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
     */function xp(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==Up()&&"https:"!==Up()&&!function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&!("connection"in navigator)||navigator.onLine}
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
class _p{constructor(e,t){this.shortDelay=e,this.longDelay=t,Np(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return xp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
     */function Op(e,t){Np(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
     */class Lp{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Dp("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Dp("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Dp("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
     */const Pp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},Mp=new _p(3e4,6e4);
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
     */function Bp(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Fp(e,t,n,s,i={}){return Vp(e,i,(async()=>{let i={},r={};s&&("GET"===t?r=s:i={body:JSON.stringify(s)});const o=yt(Object.assign({key:e.config.apiKey},r)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Lp.fetch()(Gp(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function Vp(e,t,n){e._canInitEmulator=!1;const s=Object.assign(Object.assign({},Pp),t);try{const t=new jp(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const r=await i.json();if("needConfirmation"in r)throw Qp(e,"account-exists-with-different-credential",r);if(i.ok&&!("errorMessage"in r))return r;{const t=i.ok?r.errorMessage:r.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Qp(e,"credential-already-in-use",r);if("EMAIL_EXISTS"===n)throw Qp(e,"email-already-in-use",r);if("USER_DISABLED"===n)throw Qp(e,"user-disabled",r);const a=s[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw function(e,t,n){const s=Object.assign(Object.assign({},yp()),{[t]:n});return new mt("auth","Firebase",s).create(t,{appName:e.name})}(e,a,o);Tp(e,a)}}catch(t){if(t instanceof gt)throw t;Tp(e,"network-request-failed",{message:String(t)})}}async function $p(e,t,n,s,i={}){const r=await Fp(e,t,n,s,i);return"mfaPendingCredential"in r&&Tp(e,"multi-factor-auth-required",{_serverResponse:r}),r}function Gp(e,t,n,s){const i=`${t}${n}?${s}`;return e.config.emulator?Op(e.config,i):`${e.config.apiScheme}://${i}`}class jp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Cp(this.auth,"network-request-failed"))),Mp.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Qp(e,t,n){const s={appName:e.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Cp(e,t,s);return i.customData._tokenResponse=n,i}
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
function qp(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}function Kp(e){return 1e3*Number(e)}function Wp(e){const[t,n,s]=e.split(".");if(void 0===t||void 0===n||void 0===s)return Ep("JWT malformed, contained fewer than 3 sections"),null;try{const e=ot(n);return e?JSON.parse(e):(Ep("Failed to decode base64 JWT payload"),null)}catch(e){return Ep("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
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
async function zp(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof gt&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
     */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Hp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
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
     */class Jp{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=qp(this.lastLoginAt),this.creationTime=qp(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
     */async function Xp(e){var t;const n=e.auth,s=await e.getIdToken(),i=await zp(e,async function(e,t){return Fp(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:s}));Sp(null==i?void 0:i.users.length,n,"internal-error");const r=i.users[0];e._notifyReloadListener(r);const o=(null===(t=r.providerUserInfo)||void 0===t?void 0:t.length)?r.providerUserInfo.map((e=>{var{providerId:t}=e,n=Ap(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,l=o,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const u=e.isAnonymous,h=!(e.email&&r.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Jp(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
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
class Yp{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Sp(e.idToken,"internal-error"),Sp(void 0!==e.idToken,"internal-error"),Sp(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Wp(e);return Sp(t,"internal-error"),Sp(void 0!==t.exp,"internal-error"),Sp(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Sp(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:i}=
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
     */await async function(e,t){const n=await Vp(e,{},(async()=>{const n=yt({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:i}=e.config,r=Gp(e,s,"/v1/token",`key=${i}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Lp.fetch()(r,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,s,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:i}=t,r=new Yp;return n&&(Sp("string"==typeof n,"internal-error",{appName:e}),r.refreshToken=n),s&&(Sp("string"==typeof s,"internal-error",{appName:e}),r.accessToken=s),i&&(Sp("number"==typeof i,"internal-error",{appName:e}),r.expirationTime=i),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Yp,this.toJSON())}_performRefresh(){return Dp("not implemented")}}
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
     */function Zp(e,t){Sp("string"==typeof e||void 0===e,"internal-error",{appName:t})}class eg{constructor(e){var{uid:t,auth:n,stsTokenManager:s}=e,i=Ap(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Hp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Jp(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await zp(this,this.stsTokenManager.getToken(this.auth,e));return Sp(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Ct(e),s=await n.getIdToken(t),i=Wp(s);Sp(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r="object"==typeof i.firebase?i.firebase:void 0,o=null==r?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:qp(Kp(i.auth_time)),issuedAtTime:qp(Kp(i.iat)),expirationTime:qp(Kp(i.exp)),signInProvider:o||null,signInSecondFactor:(null==r?void 0:r.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Ct(e);await Xp(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Sp(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new eg(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Sp(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Xp(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await zp(this,async function(e,t){return Fp(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,s,i,r,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(s=t.email)&&void 0!==s?s:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(r=t.photoURL)&&void 0!==r?r:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:A,emailVerified:w,isAnonymous:y,providerData:b,stsTokenManager:I}=t;Sp(A&&I,e,"internal-error");const E=Yp.fromJSON(this.name,I);Sp("string"==typeof A,e,"internal-error"),Zp(u,e.name),Zp(h,e.name),Sp("boolean"==typeof w,e,"internal-error"),Sp("boolean"==typeof y,e,"internal-error"),Zp(d,e.name),Zp(f,e.name),Zp(p,e.name),Zp(g,e.name),Zp(m,e.name),Zp(v,e.name);const T=new eg({uid:A,auth:e,email:h,emailVerified:w,displayName:u,isAnonymous:y,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:m,lastLoginAt:v});return b&&Array.isArray(b)&&(T.providerData=b.map((e=>Object.assign({},e)))),g&&(T._redirectEventId=g),T}static async _fromIdTokenResponse(e,t,n=!1){const s=new Yp;s.updateFromServerResponse(t);const i=new eg({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await Xp(i),i}}
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
     */const tg=new Map;function ng(e){Np(e instanceof Function,"Expected a class definition");let t=tg.get(e);return t?(Np(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,tg.set(e,t),t)}
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
     */class sg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}sg.type="NONE";const ig=sg;
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
     */function rg(e,t,n){return`firebase:${e}:${t}:${n}`}class og{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:i}=this.auth;this.fullUserKey=rg(this.userKey,s.apiKey,i),this.fullPersistenceKey=rg("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?eg._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new og(ng(ig),e,n);const s=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=s[0]||ng(ig);const r=rg(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(r);if(t){const s=eg._fromJSON(e,t);n!==i&&(o=s),i=n;break}}catch(e){}const a=s.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(r,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(r)}catch(e){}}))),new og(i,e,n)):new og(i,e,n)}}
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
     */function ag(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(hg(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(cg(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(fg(t))return"Blackberry";if(pg(t))return"Webos";if(lg(t))return"Safari";if((t.includes("chrome/")||ug(t))&&!t.includes("edge/"))return"Chrome";if(dg(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function cg(e=pt()){return/firefox\//i.test(e)}function lg(e=pt()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ug(e=pt()){return/crios\//i.test(e)}function hg(e=pt()){return/iemobile/i.test(e)}function dg(e=pt()){return/android/i.test(e)}function fg(e=pt()){return/blackberry/i.test(e)}function pg(e=pt()){return/webos/i.test(e)}function gg(e=pt()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function mg(){return function(){const e=pt();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function vg(e=pt()){return gg(e)||dg(e)||pg(e)||fg(e)||/windows phone/i.test(e)||hg(e)}
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
function Ag(e,t=[]){let n;switch(e){case"Browser":n=ag(pt());break;case"Worker":n=`${ag(pt())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${fn}/${s}`}async function wg(e,t){return Fp(e,"GET","/v2/recaptchaConfig",Bp(e,t))}function yg(e){return void 0!==e&&void 0!==e.enterprise}class bg{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
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
     */function Ig(e){return new Promise(((t,n)=>{const s=document.createElement("script");var i,r;s.setAttribute("src",e),s.onload=t,s.onerror=e=>{const t=Cp("internal-error");t.customData=e,n(t)},s.type="text/javascript",s.charset="UTF-8",(null!==(r=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==r?r:document).appendChild(s)}))}class Eg{constructor(e){this.type="recaptcha-enterprise",this.auth=Sg(e)}async verify(e="verify",t=!1){function n(t,n,s){const i=window.grecaptcha;yg(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n("NO_RECAPTCHA")}))})):s(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,s)=>{(async function(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{wg(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((s=>{if(void 0!==s.recaptchaKey){const n=new bg(s);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))})(this.auth).then((i=>{if(!t&&yg(window.grecaptcha))n(i,e,s);else{if("undefined"==typeof window)return void s(new Error("RecaptchaVerifier is only supported in browser"));Ig("https://www.google.com/recaptcha/enterprise.js?render="+i).then((()=>{n(i,e,s)})).catch((e=>{s(e)}))}})).catch((e=>{s(e)}))}))}}async function Tg(e,t,n,s=!1){const i=new Eg(e);let r;try{r=await i.verify(n)}catch(e){r=await i.verify(n,!0)}const o=Object.assign({},t);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
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
     */class Cg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,s)=>{try{n(e(t))}catch(e){s(e)}}));n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
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
     */class kg{constructor(e,t,n,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Dg(this),this.idTokenSubscription=new Dg(this),this.beforeStateQueue=new Cg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ng(t)),this._initializationPromise=this.queue((async()=>{var n,s;if(!this._deleted&&(this.persistenceManager=await og.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(s=this.currentUser)||void 0===s?void 0:s.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let s=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null==s?void 0:s._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==r||!(null==o?void 0:o.user)||(s=o.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(e){s=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Sp(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Xp(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Ct(e):null;return t&&Sp(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Sp(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(ng(e))}))}async initializeRecaptchaConfig(){const e=await wg(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new bg(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){new Eg(this).verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new mt("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ng(e)||this._popupRedirectResolver;Sp(t,this,"argument-error"),this.redirectPersistenceManager=await og.create(this,[ng(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),r=this._isInitialized?Promise.resolve():this._initializationPromise;return Sp(r,this,"internal-error"),r.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,s):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Sp(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ag(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){Ip.logLevel<=Rt.WARN&&Ip.warn(`Auth (${fn}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function Sg(e){return Ct(e)}class Dg{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new Et(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return Sp(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
     */function Ng(e,t,n){const s=Sg(e);Sp(s._canInitEmulator,s,"emulator-config-failed"),Sp(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),r=Rg(t),{host:o,port:a}=function(e){const t=Rg(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const e=i[1];return{host:e,port:Ug(s.substr(e.length+1))}}{const[e,t]=s.split(":");return{host:e,port:Ug(t)}}}(t),c=null===a?"":`:${a}`;s.config.emulator={url:`${r}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
     */()}function Rg(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ug(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class xg{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Dp("not implemented")}_getIdTokenResponse(e){return Dp("not implemented")}_linkToIdToken(e,t){return Dp("not implemented")}_getReauthenticationResolver(e){return Dp("not implemented")}}
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
async function _g(e,t){return $p(e,"POST","/v1/accounts:signInWithPassword",Bp(e,t))}
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
class Og extends xg{constructor(e,t,n,s=null){super("password",n),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Og(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Og(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await Tg(e,n,"signInWithPassword");return _g(e,t)}return _g(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await Tg(e,n,"signInWithPassword");return _g(e,t)}return Promise.reject(t)}));case"emailLink":return async function(e,t){return $p(e,"POST","/v1/accounts:signInWithEmailLink",Bp(e,t))}(e,{email:this._email,oobCode:this._password});default:Tp(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return async function(e,t){return Fp(e,"POST","/v1/accounts:update",t)}(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return $p(e,"POST","/v1/accounts:signInWithEmailLink",Bp(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Tp(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
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
     */async function Lg(e,t){return $p(e,"POST","/v1/accounts:signInWithIdp",Bp(e,t))}
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
     */class Pg extends xg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Pg(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Tp("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:s}=t,i=Ap(t,["providerId","signInMethod"]);if(!n||!s)return null;const r=new Pg(n,s);return r.idToken=i.idToken||void 0,r.accessToken=i.accessToken||void 0,r.secret=i.secret,r.nonce=i.nonce,r.pendingToken=i.pendingToken||null,r}_getIdTokenResponse(e){return Lg(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Lg(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Lg(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=yt(t)}return e}}
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
     */class Mg{constructor(e){var t,n,s,i,r,o;const a=bt(It(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,l=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(s=a.mode)&&void 0!==s?s:null);Sp(c&&l&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=l,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(r=a.languageCode)&&void 0!==r?r:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=bt(It(e)).link,n=t?bt(It(t)).deep_link_id:null,s=bt(It(e)).deep_link_id;return(s?bt(It(s)).link:null)||s||n||t||e}(e);try{return new Mg(t)}catch(e){return null}}}
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
     */class Bg{constructor(){this.providerId=Bg.PROVIDER_ID}static credential(e,t){return Og._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Mg.parseLink(t);return Sp(n,"argument-error"),Og._fromEmailAndCode(e,n.code,n.tenantId)}}Bg.PROVIDER_ID="password",Bg.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Bg.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class Fg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
     */class Vg extends Fg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
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
     */class $g extends Vg{constructor(){super("facebook.com")}static credential(e){return Pg._fromParams({providerId:$g.PROVIDER_ID,signInMethod:$g.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $g.credentialFromTaggedObject(e)}static credentialFromError(e){return $g.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return $g.credential(e.oauthAccessToken)}catch(e){return null}}}$g.FACEBOOK_SIGN_IN_METHOD="facebook.com",$g.PROVIDER_ID="facebook.com";
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
class Gg extends Vg{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Pg._fromParams({providerId:Gg.PROVIDER_ID,signInMethod:Gg.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Gg.credentialFromTaggedObject(e)}static credentialFromError(e){return Gg.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Gg.credential(t,n)}catch(e){return null}}}Gg.GOOGLE_SIGN_IN_METHOD="google.com",Gg.PROVIDER_ID="google.com";
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
class jg extends Vg{constructor(){super("github.com")}static credential(e){return Pg._fromParams({providerId:jg.PROVIDER_ID,signInMethod:jg.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jg.credentialFromTaggedObject(e)}static credentialFromError(e){return jg.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return jg.credential(e.oauthAccessToken)}catch(e){return null}}}jg.GITHUB_SIGN_IN_METHOD="github.com",jg.PROVIDER_ID="github.com";
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
class Qg extends Vg{constructor(){super("twitter.com")}static credential(e,t){return Pg._fromParams({providerId:Qg.PROVIDER_ID,signInMethod:Qg.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Qg.credentialFromTaggedObject(e)}static credentialFromError(e){return Qg.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Qg.credential(t,n)}catch(e){return null}}}Qg.TWITTER_SIGN_IN_METHOD="twitter.com",Qg.PROVIDER_ID="twitter.com";
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
class qg{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){const i=await eg._fromIdTokenResponse(e,n,s),r=Kg(n);return new qg({user:i,providerId:r,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=Kg(n);return new qg({user:e,providerId:s,_tokenResponse:n,operationType:t})}}function Kg(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
     */class Wg extends gt{constructor(e,t,n,s){var i;super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,Wg.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new Wg(e,t,n,s)}}function zg(e,t,n,s){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Wg._fromErrorAndOperation(e,n,t,s);throw n}))}
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
async function Hg(e,t,n=!1){const s="signIn",i=await zg(e,s,t),r=await qg._fromIdTokenResponse(e,s,i);return n||await e._updateCurrentUser(r.user),r}function Jg(e,t,n){return async function(e,t){return Hg(Sg(e),t)}(Ct(e),Bg.credential(t,n))}const Xg="__sak";
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
     */class Yg{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Xg,"1"),this.storage.removeItem(Xg),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
     */class Zg extends Yg{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=pt();return lg(e)||gg(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=vg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(n);if(e.newValue!==s)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const s=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);mg()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,10):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Zg.type="LOCAL";const em=Zg;
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
     */class tm extends Yg{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}tm.type="SESSION";const nm=tm;
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
class sm{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new sm(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:i}=t.data,r=this.handlersMap[s];if(!(null==r?void 0:r.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const o=Array.from(r).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function im(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
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
     */sm.receivers=[];class rm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,r;return new Promise(((o,a)=>{const c=im("",20);s.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);r={messageChannel:s,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(l),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(r),s.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])})).finally((()=>{r&&this.removeMessageHandler(r)}))}}
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
     */function om(){return window}
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
function am(){return void 0!==om().WorkerGlobalScope&&"function"==typeof om().importScripts}
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
const cm="firebaseLocalStorageDb",lm="firebaseLocalStorage",um="fbase_key";class hm{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function dm(e,t){return e.transaction([lm],t?"readwrite":"readonly").objectStore(lm)}function fm(){const e=indexedDB.open(cm,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(lm,{keyPath:um})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(lm)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(cm);return new hm(e).toPromise()}(),t(await fm()))}))}))}async function pm(e,t,n){const s=dm(e,!0).put({[um]:t,value:n});return new hm(s).toPromise()}function gm(e,t){const n=dm(e,!0).delete(t);return new hm(n).toPromise()}class mm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await fm()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return am()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=sm._getInstance(am()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new rm(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fm();return await pm(e,Xg,"1"),await gm(e,Xg),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>pm(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=dm(e,!1).get(t),s=await new hm(n).toPromise();return void 0===s?null:s.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>gm(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=dm(e,!1).getAll();return new hm(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:s,value:i}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}mm.type="LOCAL";const vm=mm;new _p(3e4,6e4);
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
class Am extends xg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Lg(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Lg(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Lg(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function wm(e){return Hg(e.auth,new Am(e),e.bypassAuthState)}function ym(e){const{auth:t,user:n}=e;return Sp(n,t,"internal-error"),
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
async function(e,t,n=!1){const{auth:s}=e,i="reauthenticate";try{const r=await zp(e,zg(s,i,t,e),n);Sp(r.idToken,s,"internal-error");const o=Wp(r.idToken);Sp(o,s,"internal-error");const{sub:a}=o;return Sp(e.uid===a,s,"user-mismatch"),qg._forOperation(e,i,r)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&Tp(s,"user-mismatch"),e}}(n,new Am(e),e.bypassAuthState)}async function bm(e){const{auth:t,user:n}=e;return Sp(n,t,"internal-error"),async function(e,t,n=!1){const s=await zp(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return qg._forOperation(e,"link",s)}(n,new Am(e),e.bypassAuthState)}
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
     */class Im{constructor(e,t,n,s,i=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:s,tenantId:i,error:r,type:o}=e;if(r)return void this.reject(r);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return wm;case"linkViaPopup":case"linkViaRedirect":return bm;case"reauthViaPopup":case"reauthViaRedirect":return ym;default:Tp(this.auth,"internal-error")}}resolve(e){Np(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Np(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
     */const Em=new _p(2e3,1e4);class Tm extends Im{constructor(e,t,n,s,i){super(e,t,s,i),this.provider=n,this.authWindow=null,this.pollId=null,Tm.currentPopupAction&&Tm.currentPopupAction.cancel(),Tm.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Sp(e,this.auth,"internal-error"),e}async onExecution(){Np(1===this.filter.length,"Popup operations only handle one event");const e=im();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Cp(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Cp(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Tm.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Cp(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Em.get())};e()}}Tm.currentPopupAction=null;
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
const Cm="pendingRedirect",km=new Map;class Sm extends Im{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=km.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return rg(Cm,e.config.apiKey,e.name)}(t),s=function(e){return ng(e._redirectPersistence)}(e);if(!await s._isAvailable())return!1;const i="true"===await s._get(n);return await s._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}km.set(this.auth._key(),e)}return this.bypassAuthState||km.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Dm(e,t){km.set(e._key(),t)}async function Nm(e,t,n=!1){const s=Sg(e),i=
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
function(e,t){return t?ng(t):(Sp(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}(s,t),r=new Sm(s,i,n),o=await r.execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,t)),o}
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
     */class Rm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xm(e);default:return!1}}
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
     */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!xm(e)){const s=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Cp(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Um(e))}saveEventToCache(e){this.cachedEventUids.add(Um(e)),this.lastProcessedEventTime=Date.now()}}function Um(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function xm({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
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
const _m=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Om=/^https?/;async function Lm(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Fp(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Pm(e))return}catch(e){}Tp(e,"unauthorized-domain")}function Pm(e){const t=Rp(),{protocol:n,hostname:s}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===s?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===s}if(!Om.test(n))return!1;if(_m.test(e))return s===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}
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
     */const Mm=new _p(3e4,6e4);function Bm(){const e=om().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}function Fm(e){return new Promise(((t,n)=>{var s,i,r;function o(){Bm(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Bm(),n(Cp(e,"network-request-failed"))},timeout:Mm.get()})}if(null===(i=null===(s=om().gapi)||void 0===s?void 0:s.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(r=om().gapi)||void 0===r?void 0:r.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return om()[t]=()=>{gapi.load?o():n(Cp(e,"network-request-failed"))},Ig(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Vm=null,e}))}let Vm=null;
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
const $m=new _p(5e3,15e3),Gm="__/auth/iframe",jm="emulator/auth/iframe",Qm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Km(e){const t=e.config;Sp(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Op(t,jm):`https://${e.config.authDomain}/${Gm}`,s={apiKey:t.apiKey,appName:e.name,v:fn},i=qm.get(e.config.apiHost);i&&(s.eid=i);const r=e._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${yt(s).slice(1)}`}async function Wm(e){const t=await function(e){return Vm=Vm||Fm(e),Vm}(e),n=om().gapi;return Sp(n,e,"internal-error"),t.open({where:document.body,url:Km(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Qm,dontclear:!0},(t=>new Promise((async(n,s)=>{await t.restyle({setHideOnLeave:!1});const i=Cp(e,"network-request-failed"),r=om().setTimeout((()=>{s(i)}),$m.get());function o(){om().clearTimeout(r),n(t)}t.ping(o).then(o,(()=>{s(i)}))}))))}
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
     */const zm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Hm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Jm(e,t,n,s=500,i=600){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},zm),{width:s.toString(),height:i.toString(),top:r,left:o}),l=pt().toLowerCase();n&&(a=ug(l)?"_blank":n),cg(l)&&(t=t||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=pt()){var t;return gg(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}
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
     */(t||"",a),new Hm(null);const h=window.open(t||"",a,u);Sp(h,e,"popup-blocked");try{h.focus()}catch(e){}return new Hm(h)}const Xm="__/auth/handler",Ym="emulator/auth/handler",Zm=encodeURIComponent("fac");async function ev(e,t,n,s,i,r){Sp(e.config.authDomain,e,"auth-domain-config-required"),Sp(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:fn,eventId:i};if(t instanceof Fg){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(r||{}))o[e]=t}if(t instanceof Vg){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];const c=await e._getAppCheckToken(),l=c?`#${Zm}=${encodeURIComponent(c)}`:"";return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${Xm}`;return Op(e,Ym)}
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
     */(e)}?${yt(a).slice(1)}${l}`}const tv="webStorageSupport";const nv=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nm,this._completeRedirectFn=Nm,this._overrideRedirectResult=Dm}async _openPopup(e,t,n,s){var i;Np(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return Jm(e,await ev(e,t,n,Rp(),s),im())}async _openRedirect(e,t,n,s){await this._originValidation(e);return function(e){om().location.href=e}(await ev(e,t,n,Rp(),s)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Np(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Wm(e),n=new Rm(e);return t.register("authEvent",(t=>{Sp(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(tv,{type:tv},(n=>{var s;const i=null===(s=null==n?void 0:n[0])||void 0===s?void 0:s[tv];void 0!==i&&t(!!i),Tp(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Lm(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return vg()||lg()||gg()}};var sv="@firebase/auth",iv="0.23.2";
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
class rv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Sp(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
const ov=dt("authIdTokenMaxAge")||300;let av=null;const cv=e=>async t=>{const n=t&&await t.getIdTokenResult(),s=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>ov)return;const i=null==n?void 0:n.token;av!==i&&(av=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function lv(e=gn()){const t=un(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=un(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(At(n.getOptions(),null!=t?t:{}))return e;Tp(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:nv,persistence:[vm,em,nm]}),s=dt("authTokenSyncURL");if(s){const e=cv(s);!function(e,t,n){Ct(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,s){Ct(e).onIdTokenChanged(t,n,s)}(n,(t=>e(t)))}const i=lt("auth");return i&&Ng(n,`http://${i}`),n}var uv;uv="Browser",ln(new kt("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:r,authDomain:o}=n.options;Sp(r&&!r.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:r,authDomain:o,clientPlatform:uv,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ag(uv)},c=new kg(n,s,i,a);return function(e,t){const n=(null==t?void 0:t.persistence)||[],s=(Array.isArray(n)?n:[n]).map(ng);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(s,null==t?void 0:t.popupRedirectResolver)}(c,t),c}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),ln(new kt("auth-internal",(e=>(e=>new rv(e))(Sg(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),mn(sv,iv,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(uv)),mn(sv,iv,"esm2017");var hv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAASVJREFUaEPtluEKwjAQg29vpk+mPtl8M+VghVLWrXdJkWEG/rIX8yW34mIXf5aL+zcB/LpBNaAGwAS0QmCA8LgagCMEBdQAGCA8rgbgCEGBv23gZmb+eYIBlvG0XqYBN/2ojN/N7J0EceNrNes6rjf8ZAA+O+oZiNZ8kQ15Ch3efmEPwL+KQPTMu07IU+jwBtCuUF3ICMSR+Vf0vcoAuOEsBNV8uK5m96MQdPMoQKSJKeYZACMQfqa+Kusiwzvf3oDZd6DVOVqn3p0Om2c1UAxGICjm2QBn61RAaeZnAJxBUM3PAuhB0M3PBGghppifDTD8jxI5yLpGEQ/QrACg+AjDaoAQIiShBqD4CMNqgBAiJKEGoPgIw2qAECIkoQag+AjDl2/gC97XKzHBcgJGAAAAAElFTkSuQmCC",dv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAARVJREFUaEPtmFEOgzAMQ8PNdrNtJ9tutinSkNBE10yxXUVK/xA09bMDBTYrPrbi+q0BVifYCXQCSQe6hZIGpqd3AmkLkwWQCVzM7JnU8/d0FMDNzK6f1e9m5seSgQBw5x9famUQCICj+0cOCQQCwEW/Bv1Ch0ABnLXRzkSFQAG42CUQSIAlEGgAOQQDQArBApBBMAEkEGyAGUR6/XSBwAvPaKf2qen10wUmAL/EQzY4JgBdPCTCQQIS8SwAmXgGgFQ8GkAuHgmwRDwSoPQHzeg7APKcn22UiH3grH0k4pEt5H8lPAkfMvFIgP2lreyPrVmr0s4j7gGauEjhBoi4xLymE2C6G6ndCURcYl7TCTDdjdQun8Ab5NQwMS0C6XAAAAAASUVORK5CYII=";const fv=e=>({}),pv=e=>({});function gv(e,t,n){const s=e.slice();return s[9]=t[n],s}function mv(e){let t,n=e[2],s=[];for(let t=0;t<n.length;t+=1)s[t]=vv(gv(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=C()},m(e,n){for(let t=0;t<s.length;t+=1)s[t]&&s[t].m(e,n);w(e,t,n)},p(e,i){if(4&i){let r;for(n=e[2],r=0;r<n.length;r+=1){const o=gv(e,n,r);s[r]?s[r].p(o,i):(s[r]=vv(o),s[r].c(),s[r].m(t.parentNode,t))}for(;r<s.length;r+=1)s[r].d(1);s.length=n.length}},d(e){b(s,e),e&&y(t)}}}function vv(e){let t,n,s,i,o;return{c(){t=I("img"),S(t,"class","action svelte-1g4mcwn"),c(t.src,n=e[9].icon)||S(t,"src",n),S(t,"alt",s=e[9].title)},m(n,s){w(n,t,s),i||(o=k(t,"mousedown",(function(){r(e[9].onClick)&&e[9].onClick.apply(this,arguments)})),i=!0)},p(i,r){e=i,4&r&&!c(t.src,n=e[9].icon)&&S(t,"src",n),4&r&&s!==(s=e[9].title)&&S(t,"alt",s)},d(e){e&&y(t),i=!1,o()}}}function Av(e){let t,n;const s=e[5].main,i=function(e,t,n,s){if(e){const i=l(e,t,n,s);return e[0](i)}}(s,e,e[4],pv);return{c(){t=I("div"),i&&i.c(),S(t,"class","main-container svelte-1g4mcwn")},m(e,s){w(e,t,s),i&&i.m(t,null),n=!0},p(e,t){i&&i.p&&(!n||16&t)&&function(e,t,n,s,i,r){if(i){const o=l(t,n,s,r);e.p(o,i)}}(i,s,e,e[4],n?function(e,t,n,s){if(e[2]&&s){const i=e[2](s(n));if(void 0===t.dirty)return i;if("object"==typeof i){const e=[],n=Math.max(t.dirty.length,i.length);for(let s=0;s<n;s+=1)e[s]=t.dirty[s]|i[s];return e}return t.dirty|i}return t.dirty}(s,e[4],t,fv):function(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}(e[4]),pv)},i(e){n||(ae(i,e),n=!0)},o(e){ce(i,e),n=!1},d(e){e&&y(t),i&&i.d(e)}}}function wv(e){let t,n,s,r,o,a,l,u,h,d,f,p,g,v=e[3]&&mv(e),A=e[0]&&Av(e);return{c(){t=I("div"),n=I("div"),s=I("img"),o=T(),a=I("div"),l=E(e[1]),u=T(),v&&v.c(),h=T(),A&&A.c(),S(s,"class","arrow-icon svelte-1g4mcwn"),c(s.src,r=e[0]?hv:dv)||S(s,"src",r),S(s,"alt",""),S(a,"class","title svelte-1g4mcwn"),S(n,"class","heading svelte-1g4mcwn"),S(t,"class",d="section-container"+(e[0]?" expanded":"")+" svelte-1g4mcwn")},m(i,r){w(i,t,r),m(t,n),m(n,s),m(n,o),m(n,a),m(a,l),m(n,u),v&&v.m(n,null),m(t,h),A&&A.m(t,null),f=!0,p||(g=[k(n,"mousedown",e[6]),k(t,"mouseenter",e[7]),k(t,"mouseleave",e[8])],p=!0)},p(e,[i]){(!f||1&i&&!c(s.src,r=e[0]?hv:dv))&&S(s,"src",r),(!f||2&i)&&D(l,e[1]),e[3]?v?v.p(e,i):(v=mv(e),v.c(),v.m(n,null)):v&&(v.d(1),v=null),e[0]?A?(A.p(e,i),1&i&&ae(A,1)):(A=Av(e),A.c(),ae(A,1),A.m(t,null)):A&&(re(),ce(A,1,1,(()=>{A=null})),oe()),(!f||1&i&&d!==(d="section-container"+(e[0]?" expanded":"")+" svelte-1g4mcwn"))&&S(t,"class",d)},i(e){f||(ae(A),f=!0)},o(e){ce(A),f=!1},d(e){e&&y(t),v&&v.d(),A&&A.d(),p=!1,i(g)}}}function yv(e,t,n){let s,{$$slots:i={},$$scope:r}=t,{expanded:o=!1}=t,{title:a}=t,{headingActions:c=[]}=t;return e.$$set=e=>{"expanded"in e&&n(0,o=e.expanded),"title"in e&&n(1,a=e.title),"headingActions"in e&&n(2,c=e.headingActions),"$$scope"in e&&n(4,r=e.$$scope)},[o,a,c,s,r,i,()=>n(0,o=!o),()=>n(3,s=!0),()=>n(3,s=!1)]}class bv extends ye{constructor(e){super(),we(this,e,yv,wv,o,{expanded:0,title:1,headingActions:2})}}var Iv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAASVJREFUaEPtmDsSQTEUhj87YxkalRqtCp2SUWtUdsHSTEjMMNfIOUmGO/OnSpHH/zq5NxnQ8zboOX5E4NcOehy4AMNGwDfA2rK2CFjUyhgrBzJEYgXP0yv0a7SgfGrNayBtFAo5FHSN5qnF+77uifEkEoFon1tI90Q58Fo5biHdE+WAHHgooAjV+IqVCCkH5EBhLSpCfY5Q+G+vdR8YA2ePGN4I1QSfcE+Bo5WEh0AL8An3DDhYSFgJtASfcC+BbS4JC4GaV8hv+EbA9dsg67+QCOQoGsfIgS6xeh8hQwLuj7/vTy7ZsbBsZDmFLOuKQK5acuCDUoqQIpSrgCJUqJROIUXoTyMUYO2AecS3BxaFWDunt6qBtNkpdiYtwFtvZK0wFK17A16SRjFoqFx8AAAAAElFTkSuQmCC",Ev="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAV9JREFUaEPtmT9OAkEUxn9U3kKN2mppIpUGriCew9ZGjAln4AgKZzDY0VtYGDTx7x3syCsWN5MZsjNkd8B8k9CQ9/Z935sfs8u+Fhu+WhuuHxnIvYNVdmAb2Msk9AP4Bn5D9ZcZOAcugZNM4ouyP8AtMPTpCBm4AO4yC3fLd4EH90ufgS3gOSM2ob69AEcuTj4D+8BszbpfyDkAXsvafAZOgYlj4CaToWun7hnwmGqg37AJqycDRdMNIe1AJIJCqNwwIRSJj4ULISGUgE05RQgJISGkh7k/BnQnTvg96BjVMZqAje7E1oHQWwn9pYxESqeQTqFIZNxwIfTvEFqRiKT0pHejNlJ6TypXf9IOYGOnxQpNaJ6Aw/r1RFWYAm03I2TA5mOjqMvXH9wDxlUNWNwxMAA69WtbWuENuALufVFVxqy7gH1yrE/gK3XMmkNwdM0qOxB90SYTZKDJbvtqzQG35Y8xbLf2ywAAAABJRU5ErkJggg==",Tv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAntJREFUaEPtmc9LVUEUxz9vEboQCluIBCUlhogthIQkoSjoB9hCSC2I/oIWbgOhEIL2LlpEizZm2qIftAgyEcFFC0EhUFTQMmjRwkWLFkEcOU+uw9x35703984V7sCDx51553y+58y8mXOnxCFvpUPOTyEgdAZdMnASOB0IdBvYAf7G+a8k4DYwClwIBF92+xMYB57ZOOIEDAOvAoOb7q8Cn82HNgENwLeA0yYubmvAOXM62QScAdZzFv0yTjuwEWWzCbgEfMmpgMvAXCEgYHaKDAQM/p7rIgNpZOA5MAg0OxjPVQZWgPvAkoK/BO4liMiNAIG+A6xGgFsBOfdUarkQ8FXhD+yowAgwmXcBiwq/ZYB2AtNAV54FzAN39Xwf5exQeDmoJbVgU2hW4X8ZhFIoSeR7ksi135uABWAMWAZu6PezMRCfFP630S+V3gxw3hHe60Y2AHyIOJYIvgNOGDAfFX7XeC7jJPLVVnveMiDR+25A9QPvgaP6XATJnP9jjGvRyF+sIvLlod4ETAAPLADXNTNvFd4sxo8rvNQctTRvAsT5Y+CRhUKOBSLgn9F3TOGv1ELuexGXGeJEmIxNCn+tDnivizjKkSSiEXgD3KwTPjUBlabTEY38LQ/wqQqwiZAXBvI/L2vCV/O6iG1QL4CnQB8gb/Z8TJuon9QF+Ip0nJ1CQNoRTrJfZCApQmn3FxlIO8JJ9p0yIEdls2ZNMpxV/ylArp32W9wNjVRa3VlROfqRFwKyQR5ocQJkF33taDirYUNaxTkJkEG9wBOgnvO7D3GbwENgymbM5Zq1DZBPiCZl649ar1lDAFft0yUDVRvN8geFgCyjbfP1H1jrizENZqZUAAAAAElFTkSuQmCC",Cv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABcJJREFUaEPVmVXIbUUUx3/XLlSwsAURMVEfLOwuTBQLjAcbO/HBwu5WBBUbCwMLQcVWjAcLxFbEBBsb+X3MXNY338w++9x77r3eBQfO2bNm7fWfNSvPJGZymjST68+0ADAvsED4eEY/hs+vozy0UQCYB9gU2A7YHVhkgILfAvcAjwJPA79NDaCpAbAqcDiwWw+lWzoK5j7gauDtKQEyJQCWAY5Iynv6oyCtIIirgM+GETgsgEOA04HFhnnJELxfJ/nX9d0zDIBrAQF00e/A7MCsickrMjcwX/r9KrB2D+UEcGgPvt5R6DFgmw6BzyWnVPkzA5/OLQAdNtNewGrATsAqHTIfB7YdBKKPBa7pOI17gYuAV9LJfwfMn156FHBF+n4OcEr6/iawQYo+OwLHARs1FNXqh3WBGATAK6OQkj4FzgZuCAvHAhen37cA+xWbngU2TM/OSHc9swhWIEtX3uVVavpEF4B9gNsqAt8B9gDeDWs69RvAEunZVsCTxd5NUtz3sVFHK2iNTCsDdzeu1b7A7TVLtAAsDrwWFMp7a8q75gleFq7IWg2zPwzskNaMZloiUguEwWA94MNSbguAwk8rmI3POlU8+cziaW/RuB5RTLyS+s26FaCCMGiYbyLpiybOcVQD0Dp9X3595YVGnj/Dc6/GCw0LeMU+SJFJFh3+5wrvwY17b1R7JvLXANRO/0Fg54ZS+wM3pbW3gNUbfPmx99yaSTqoCARx6wMp1MZnD5XPagBeBtYJuzzdrTuUOjVcH/1AsF20FHBrYngKOKuD+QlgjmJ92VhulABWatzxATpN12XzwuTQXgI4Hrhwuqoz/MseCZFsQilhfW68zmRmtUrsohytjEQv9tRnfWDLxFuG0lKECS7XUnlt8sGXFjBCLB8kGE2MKi2yF7CckO4CrHP60J3AnolxQmQpBJQ6uWzH95NfSgBWk3MGAVcCR3ZodCJwflrXgY/poz1wKXB0TwAeohaLZMnxRQnAVvCbgrGsWUr9YsgdxBv3xn22oiauFt0P7FIsWsWOJdRoAdP/6zMAgBbW0i2K1so8WuSlEsCaqSCLggad6igs4LXLdVQNxCWVq2ldZL4aZ4GFAKPO9Abg9TDrtihm7sxjvfReCcDfvwDOdTJZ35sbWhTzxrRyYkOzJx5pSeDLGgAdw2ycycLJMNciaxpPSLoDsIfoQ9b2eyfGQWH0Y2C5Qqh5YWxAVobR0lxWiqVjlwrmxDeuSuyBou8+HTbWQ/YGi2b5JYB4oj10mCEs4/qCEsDCgAj/z2RHZz00RrVy2nLYaUGkLj8wozoikYznJp4uiuW07+oKodZmkTxc/WHyPLUGoNYNdTmzvYIzHMm6ZYUBAKydrKEkZ03W/DUqC0t5Jgy8agCshZwWxGjk5lZScwr3d9CgqzSwGfkImCXxzwb8U9G+1hV66jZa44bArab+BOCCiuBW0olhsasAtGy4PMlthd1WILFPsXgcRy0AFnbOebyvkX5I/uEoMVK8dl3XyBYy+1NtSNBS3qGvM9UJk+uuwdYBwI0VK3wC7FoMpcyMAs7x2QFA2RurgKMU6fOk0FdBflcIPzAMDnpZIDPV7qJr9g2WGc5FtYp0LnBy+m7y2zhny/QsRjfnpOel5wumGVTuD8oz6ywoB81GFdYC4ZoFlXfeEeQfwPeh/dOHTkraRJ96H1gxPddStqRrVCzto0HVcO/xemvIm99rd2RL+VeYQrvmtE5g9stzJWZ9YLM0Z3LM3qLOoW7e1McCmbdvmfFvCJPPJwCbJyHmkzg0aCnv8Ng/AgfSMAAUJggbjDI6DXxRTwYt6Zi+l/LKHBaAewyxjhONUmWy66nnBDZ9yfHkzcPWYlMCIL/djC0Q66CBfwU1kNnMG51UXF8ZmqYGQHyZ8X/79LHdczQeOzt5bUBMRDZNVpN+yinIDANQe7E9dp7xq7ghduQ0KguMXLG+Amd6AP8BGrcmQBeLyHIAAAAASUVORK5CYII=";function kv(t){let n,s,i,r,o;return{c(){n=I("div"),s=I("div"),i=E(t[0]),S(s,"class","title svelte-eray5u"),S(n,"class","menu-item svelte-eray5u")},m(e,a){w(e,n,a),m(n,s),m(s,i),r||(o=k(n,"mouseup",t[1]),r=!0)},p(e,[t]){1&t&&D(i,e[0])},i:e,o:e,d(e){e&&y(n),r=!1,o()}}}function Sv(e,t,n){let{title:s}=t;return e.$$set=e=>{"title"in e&&n(0,s=e.title)},[s,function(t){$.call(this,e,t)}]}class Dv extends ye{constructor(e){super(),we(this,e,Sv,kv,o,{title:0})}}function Nv(t){let n,s;return n=new Dv({props:{title:"Move Group to New Window"}}),n.$on("mousedown",t[6]),{c(){ge(n.$$.fragment)},m(e,t){me(n,e,t),s=!0},p:e,i(e){s||(ae(n.$$.fragment,e),s=!0)},o(e){ce(n.$$.fragment,e),s=!1},d(e){ve(n,e)}}}function Rv(t){let n,s;return n=new Dv({props:{title:"Close Group"}}),n.$on("mousedown",t[4]),{c(){ge(n.$$.fragment)},m(e,t){me(n,e,t),s=!0},p:e,i(e){s||(ae(n.$$.fragment,e),s=!0)},o(e){ce(n.$$.fragment,e),s=!1},d(e){ve(n,e)}}}function Uv(e){let t,n,s,r,o,a,l,u,h,d,f,p,g,v,A,b,E,C,D,U,x,_,O,L,P,M,B,F,V,$,G;d=new Dv({props:{title:e[0].pinned?"Unpin Tab":"Pin Tab"}}),d.$on("mouseup",e[8]),p=new Dv({props:{title:"Reload"}}),p.$on("mouseup",e[7]),v=new Dv({props:{title:"Duplicate"}}),v.$on("mouseup",e[11]),C=new Dv({props:{title:"Move Tab to Pop Up Window"}}),C.$on("mouseup",e[3]),U=new Dv({props:{title:"Move Tab to New Window"}}),U.$on("mouseup",e[2]);let j=e[0].groupId>-1&&Nv(e);P=new Dv({props:{title:"Close Tab"}}),P.$on("mousedown",e[5]);let Q=e[0].groupId>-1&&Rv(e);return{c(){t=I("div"),n=I("div"),s=I("img"),o=T(),a=I("input"),l=T(),u=I("div"),h=T(),ge(d.$$.fragment),f=T(),ge(p.$$.fragment),g=T(),ge(v.$$.fragment),A=T(),b=I("div"),E=T(),ge(C.$$.fragment),D=T(),ge(U.$$.fragment),x=T(),j&&j.c(),_=T(),O=I("div"),L=T(),ge(P.$$.fragment),M=T(),Q&&Q.c(),c(s.src,r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAcBJREFUaEPtmr8uBUEUxn+34hGEggJPQCLREBWReASRkGhE3BfAC9AIEgqt1r+oUNGodBSi8ecJRCkn2U1WzO7embN3r5Ez7e755nznfHNmds42iHw0IvcfDYENoB8YaEMQPoFH4Ao4K8IPJfAK9LbBcRfkJiDBco4QAlvAWk3Op9OMAveuOX0J9ADvNTsv0+0AK1UQGAPuOkDgEpiugsAEcN0BAjfApBEALAOB8guSkERbDLMjigzMANvAMPCU1PyLhEUUBA6AxUzYD4GlmAhImZRIpyOrvygyYAQCK02RmVcVsgxYBn5HwCSUngStjAauD5OQSShQOq7jzA8o10e9bWTKaLvMbRHbIlbKyiRkEvorEhpKbiqU/nibHwELrV4tFm1kXcBzjb2B1OfcHoHvTiyAy8CedwzDDd6AvjzzEAKCNQXsJpdf4a6VW8oFW7PotVACgtmd9Mek6VH1+AJegI8yYA2BMuxanv9LAueAXPBmz+LtiOYxsK8FdmWgzi7kHHCiIeEiMAucakA9bHMPaa1i5LVZpbG83iqI4r1x4FZhX/irwQgwDwwmJVMzj8t2FXjQgvo2urXzVW4fPYFv6fKUMS3vSekAAAAASUVORK5CYII=")||S(s,"src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAcBJREFUaEPtmr8uBUEUxn+34hGEggJPQCLREBWReASRkGhE3BfAC9AIEgqt1r+oUNGodBSi8ecJRCkn2U1WzO7embN3r5Ez7e755nznfHNmds42iHw0IvcfDYENoB8YaEMQPoFH4Ao4K8IPJfAK9LbBcRfkJiDBco4QAlvAWk3Op9OMAveuOX0J9ADvNTsv0+0AK1UQGAPuOkDgEpiugsAEcN0BAjfApBEALAOB8guSkERbDLMjigzMANvAMPCU1PyLhEUUBA6AxUzYD4GlmAhImZRIpyOrvygyYAQCK02RmVcVsgxYBn5HwCSUngStjAauD5OQSShQOq7jzA8o10e9bWTKaLvMbRHbIlbKyiRkEvorEhpKbiqU/nibHwELrV4tFm1kXcBzjb2B1OfcHoHvTiyAy8CedwzDDd6AvjzzEAKCNQXsJpdf4a6VW8oFW7PotVACgtmd9Mek6VH1+AJegI8yYA2BMuxanv9LAueAXPBmz+LtiOYxsK8FdmWgzi7kHHCiIeEiMAucakA9bHMPaa1i5LVZpbG83iqI4r1x4FZhX/irwQgwDwwmJVMzj8t2FXjQgvo2urXzVW4fPYFv6fKUMS3vSekAAAAASUVORK5CYII="),R(s,"opacity",e[1]?"1":".8"),S(s,"alt","Copy Link"),S(s,"class","svelte-1e9c6xn"),S(a,"type","text"),S(a,"class","svelte-1e9c6xn"),S(n,"class","url-field svelte-1e9c6xn"),S(u,"class","divider svelte-1e9c6xn"),S(b,"class","divider svelte-1e9c6xn"),S(O,"class","divider svelte-1e9c6xn"),S(t,"class","context-menu svelte-1e9c6xn")},m(i,r){w(i,t,r),m(t,n),m(n,s),m(n,o),m(n,a),N(a,e[0].url),m(t,l),m(t,u),m(t,h),me(d,t,null),m(t,f),me(p,t,null),m(t,g),me(v,t,null),m(t,A),m(t,b),m(t,E),me(C,t,null),m(t,D),me(U,t,null),m(t,x),j&&j.m(t,null),m(t,_),m(t,O),m(t,L),me(P,t,null),m(t,M),Q&&Q.m(t,null),V=!0,$||(G=[k(s,"mousedown",e[9]),k(a,"input",e[13]),k(a,"keydown",e[10])],$=!0)},p(e,[n]){(!V||2&n)&&R(s,"opacity",e[1]?"1":".8"),1&n&&a.value!==e[0].url&&N(a,e[0].url);const i={};1&n&&(i.title=e[0].pinned?"Unpin Tab":"Pin Tab"),d.$set(i),e[0].groupId>-1?j?(j.p(e,n),1&n&&ae(j,1)):(j=Nv(e),j.c(),ae(j,1),j.m(t,_)):j&&(re(),ce(j,1,1,(()=>{j=null})),oe()),e[0].groupId>-1?Q?(Q.p(e,n),1&n&&ae(Q,1)):(Q=Rv(e),Q.c(),ae(Q,1),Q.m(t,null)):Q&&(re(),ce(Q,1,1,(()=>{Q=null})),oe())},i(e){V||(ae(d.$$.fragment,e),ae(p.$$.fragment,e),ae(v.$$.fragment,e),ae(C.$$.fragment,e),ae(U.$$.fragment,e),ae(j),ae(P.$$.fragment,e),ae(Q),z((()=>{V&&(F&&F.end(1),B=ue(t,Oe,{}),B.start())})),V=!0)},o(e){ce(d.$$.fragment,e),ce(p.$$.fragment,e),ce(v.$$.fragment,e),ce(C.$$.fragment,e),ce(U.$$.fragment,e),ce(j),ce(P.$$.fragment,e),ce(Q),B&&B.invalidate(),F=he(t,Oe,{}),V=!1},d(e){e&&y(t),ve(d),ve(p),ve(v),ve(C),ve(U),j&&j.d(),ve(P),Q&&Q.d(),e&&F&&F.end(),$=!1,i(G)}}}function xv(e,t,n){let s=V(),{tab:i}=t,{workspace:r}=t;let o;return e.$$set=e=>{"tab"in e&&n(0,i=e.tab),"workspace"in e&&n(12,r=e.workspace)},[i,o,async()=>{await chrome.windows.create({tabId:i.id,focused:!0})},async()=>{chrome.windows.create({tabId:i.id,type:"popup",focused:!0})},async()=>{chrome.tabs.remove((await chrome.tabs.query({groupId:i.groupId})).map((e=>e.id)))},()=>{chrome.tabs.remove(i.id)},async()=>{const e=await chrome.windows.create();await chrome.tabGroups.move({windowId:e.id});const t=await chrome.tabs.query({windowId:e,url:"chrome://newtab/"});t&&await chrome.tabs.remove(t.id)},()=>{chrome.tabs.reload(i.id)},()=>{-1==i.groupId?chrome.tabs.update(i.id,{pinned:!i.pinned}):s("pinTab",i)},()=>{navigator.clipboard.writeText(i.url),n(1,o=!0)},e=>{"Enter"==e.key&&chrome.tabs.update(i.id,{url:"https://"+i.url})},()=>{chrome.tabs.create({url:i.url,index:i.index+1})},r,function(){i.url=this.value,n(0,i)}]}class _v extends ye{constructor(e){super(),we(this,e,xv,Uv,o,{tab:0,workspace:12})}}function Ov(t){let n;return{c(){n=I("div"),S(n,"class","bookmark-menu")},m(e,t){w(e,n,t)},p:e,i:e,o:e,d(e){e&&y(n)}}}function Lv(e,t,n){let{tab:s}=t;return e.$$set=e=>{"tab"in e&&n(0,s=e.tab)},[s]}class Pv extends ye{constructor(e){super(),we(this,e,Lv,Ov,o,{tab:0})}}function Mv(e){let t,n,s,r,o,a,c,l,u,h,d,f,p,g,v,A,b,C,N=e[0].title+"";function R(e,t){return e[5]?Vv:e[9]?Fv:Bv}let U=R(e),x=U(e),_=e[1]&&$v(e),O=!e[5]&&!e[11]&&e[3]&&Gv(e);const L=[Kv,qv],P=[];function M(e,t){return e[10]?0:e[27]?1:-1}return~(f=M(e))&&(p=P[f]=L[f](e)),{c(){t=I("div"),n=I("div"),s=I("div"),x.c(),r=T(),_&&_.c(),o=T(),a=I("div"),c=E(N),l=T(),u=I("div"),h=T(),O&&O.c(),d=T(),p&&p.c(),S(s,"class","favicon-container svelte-lvr5fe"),S(a,"class","title svelte-lvr5fe"),S(u,"class","spacer svelte-lvr5fe"),S(n,"class","main-container svelte-lvr5fe"),S(t,"class",g="tab"+(e[5]?" selected":"")+(e[8]?" focused":"")+(e[12]?" dragged-over":"")+(e[0].active?" active":"")+(e[1]?" grouped":"")+" svelte-lvr5fe"),S(t,"draggable",v=e[10]?"false":"true")},m(i,p){w(i,t,p),m(t,n),m(n,s),x.m(s,null),m(s,r),_&&_.m(s,null),m(n,o),m(n,a),m(a,c),m(n,l),m(n,u),m(n,h),O&&O.m(n,null),m(t,d),~f&&P[f].m(t,null),e[34](t),A=!0,b||(C=[k(s,"mouseleave",e[17]),k(s,"mouseenter",e[16]),k(a,"mousedown",e[26]),k(u,"mousedown",e[26]),k(t,"mouseenter",e[14]),k(t,"mouseleave",e[15]),k(t,"dragstart",e[21]),k(t,"dragover",e[22]),k(t,"dragleave",e[23]),k(t,"dragend",e[24]),k(t,"drop",e[25])],b=!0)},p(e,i){U===(U=R(e))&&x?x.p(e,i):(x.d(1),x=U(e),x&&(x.c(),x.m(s,r))),e[1]?_?_.p(e,i):(_=$v(e),_.c(),_.m(s,null)):_&&(_.d(1),_=null),(!A||1&i[0])&&N!==(N=e[0].title+"")&&D(c,N),e[5]||e[11]||!e[3]?O&&(O.d(1),O=null):O?O.p(e,i):(O=Gv(e),O.c(),O.m(n,null));let o=f;f=M(e),f===o?~f&&P[f].p(e,i):(p&&(re(),ce(P[o],1,1,(()=>{P[o]=null})),oe()),~f?(p=P[f],p?p.p(e,i):(p=P[f]=L[f](e),p.c()),ae(p,1),p.m(t,null)):p=null),(!A||4387&i[0]&&g!==(g="tab"+(e[5]?" selected":"")+(e[8]?" focused":"")+(e[12]?" dragged-over":"")+(e[0].active?" active":"")+(e[1]?" grouped":"")+" svelte-lvr5fe"))&&S(t,"class",g),(!A||1024&i[0]&&v!==(v=e[10]?"false":"true"))&&S(t,"draggable",v)},i(e){A||(ae(p),A=!0)},o(e){ce(p),A=!1},d(n){n&&y(t),x.d(),_&&_.d(),O&&O.d(),~f&&P[f].d(),e[34](null),b=!1,i(C)}}}function Bv(e){let t,n,s;return{c(){t=I("img"),S(t,"class","favicon svelte-lvr5fe"),c(t.src,n=e[7])||S(t,"src",n),S(t,"alt",s=e[0].title)},m(e,n){w(e,t,n)},p(e,i){128&i[0]&&!c(t.src,n=e[7])&&S(t,"src",n),1&i[0]&&s!==(s=e[0].title)&&S(t,"alt",s)},d(e){e&&y(t)}}}function Fv(t){let n,s,i,r;return{c(){n=I("img"),S(n,"class","icon svelte-lvr5fe"),c(n.src,s=Ev)||S(n,"src",s),S(n,"alt","Select")},m(e,s){w(e,n,s),i||(r=k(n,"mousedown",t[20]),i=!0)},p:e,d(e){e&&y(n),i=!1,r()}}}function Vv(t){let n,s,i,r;return{c(){n=I("img"),S(n,"class","icon svelte-lvr5fe"),c(n.src,s=Tv)||S(n,"src",s),S(n,"alt","Unselect")},m(e,s){w(e,n,s),i||(r=k(n,"mousedown",t[20]),i=!0)},p:e,d(e){e&&y(n),i=!1,r()}}}function $v(e){let t;return{c(){t=I("div"),S(t,"class","group-indicator svelte-lvr5fe"),R(t,"background-color",qe[e[1].color])},m(e,n){w(e,t,n)},p(e,n){2&n[0]&&R(t,"background-color",qe[e[1].color])},d(e){e&&y(t)}}}function Gv(e){let t,n,s=e[0].pinned&&jv(e),i=e[8]&&!e[11]&&Qv(e);return{c(){t=I("div"),s&&s.c(),n=T(),i&&i.c(),S(t,"class","actions svelte-lvr5fe")},m(e,r){w(e,t,r),s&&s.m(t,null),m(t,n),i&&i.m(t,null)},p(e,r){e[0].pinned?s?s.p(e,r):(s=jv(e),s.c(),s.m(t,n)):s&&(s.d(1),s=null),e[8]&&!e[11]?i?i.p(e,r):(i=Qv(e),i.c(),i.m(t,null)):i&&(i.d(1),i=null)},d(e){e&&y(t),s&&s.d(),i&&i.d()}}}function jv(t){let n,s,i,r;return{c(){n=I("img"),c(n.src,s=Iv)||S(n,"src",s),S(n,"class","icon svelte-lvr5fe"),S(n,"alt","Pinned")},m(e,s){w(e,n,s),i||(r=k(n,"mouseup",t[13]),i=!0)},p:e,d(e){e&&y(n),i=!1,r()}}}function Qv(t){let n,s,r,o,a,l,u;return{c(){n=I("img"),r=T(),o=I("img"),c(n.src,s=Qe)||S(n,"src",s),S(n,"class","icon svelte-lvr5fe"),S(n,"alt","Menu"),c(o.src,a=Pe)||S(o,"src",a),S(o,"class","icon svelte-lvr5fe"),S(o,"alt","Close")},m(e,s){w(e,n,s),w(e,r,s),w(e,o,s),l||(u=[k(n,"mousedown",t[18]),k(o,"mouseup",t[19])],l=!0)},p:e,d(e){e&&y(n),e&&y(r),e&&y(o),l=!1,i(u)}}}function qv(e){let t,n;return t=new Pv({props:{tab:e[0]}}),{c(){ge(t.$$.fragment)},m(e,s){me(t,e,s),n=!0},p(e,n){const s={};1&n[0]&&(s.tab=e[0]),t.$set(s)},i(e){n||(ae(t.$$.fragment,e),n=!0)},o(e){ce(t.$$.fragment,e),n=!1},d(e){ve(t,e)}}}function Kv(e){let t,n;return t=new _v({props:{tab:e[0],workspace:e[2]}}),t.$on("pinTab",e[33]),{c(){ge(t.$$.fragment)},m(e,s){me(t,e,s),n=!0},p(e,n){const s={};1&n[0]&&(s.tab=e[0]),4&n[0]&&(s.workspace=e[2]),t.$set(s)},i(e){n||(ae(t.$$.fragment,e),n=!0)},o(e){ce(t.$$.fragment,e),n=!1},d(e){ve(t,e)}}}function Wv(e){let t,n,s=e[6]&&Mv(e);return{c(){s&&s.c(),t=C()},m(e,i){s&&s.m(e,i),w(e,t,i),n=!0},p(e,n){e[6]?s?(s.p(e,n),64&n[0]&&ae(s,1)):(s=Mv(e),s.c(),ae(s,1),s.m(t.parentNode,t)):s&&(re(),ce(s,1,1,(()=>{s=null})),oe())},i(e){n||(ae(s),n=!0)},o(e){ce(s),n=!1},d(e){s&&s.d(e),e&&y(t)}}}function zv(e,t,n){let s,i,r,o,a,{user:c}=t,{tab:l}=t,{group:u=null}=t,{workspace:h=null}=t,{selectedTabs:d=[]}=t,{lastSelectionUpdate:f=null}=t,{dragoverItem:p=null}=t,{isOpen:g=!0}=t,{lastUpdatedTab:m}=t;F((()=>{v()}));const v=async()=>{A(),a=l.parentId,n(6,r=!0)},A=async()=>{n(7,o=l.favIconUrl&&!l.favIconUrl.includes("chrome:")?l.favIconUrl:await Te())};let w,y,b=V();let I;let E;let T;return e.$$set=e=>{"user"in e&&n(28,c=e.user),"tab"in e&&n(0,l=e.tab),"group"in e&&n(1,u=e.group),"workspace"in e&&n(2,h=e.workspace),"selectedTabs"in e&&n(29,d=e.selectedTabs),"lastSelectionUpdate"in e&&n(30,f=e.lastSelectionUpdate),"dragoverItem"in e&&n(31,p=e.dragoverItem),"isOpen"in e&&n(3,g=e.isOpen),"lastUpdatedTab"in e&&n(32,m=e.lastUpdatedTab)},e.$$.update=()=>{1610612737&e.$$.dirty[0]&&n(5,i=null!=d.find((e=>e.id==l.id))),1&e.$$.dirty[0]|2&e.$$.dirty[1]&&m&&m.id==l.id&&(A(),console.log(l.title),l.id&&l.active&&(()=>{if(l.active&&s){const e=s.getBoundingClientRect();e.top<window.innerHeight&&e.bottom>0||s.scrollIntoView({behavior:"smooth"})}})())},[l,u,h,g,s,i,r,o,w,y,I,E,T,()=>{chrome.tabs.update(l.id,{pinned:!l.pinned})},e=>{n(8,w=!0)},()=>{n(8,w=!1),n(10,I=!1),n(9,y=!1)},e=>{n(9,y=!0)},e=>{n(9,y=!1)},e=>{n(10,I=!I)},()=>{chrome.tabs.remove(l.id)},()=>{b("updateSelection",l)},e=>{n(11,E=!0),e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("tabId",l.id)},e=>{e.preventDefault(),T||n(12,T=!0)},e=>{e.preventDefault(),T&&n(12,T=!1)},e=>{n(11,E=!1)},async e=>{T&&n(12,T=!1);let t=e.dataTransfer.getData("tabId");const s=e.dataTransfer.getData("groupId");if(t){t=parseInt(t);const e=await chrome.tabs.get(t);e.groupId>-1&&-1==l.groupId&&await chrome.tabs.ungroup(e.id),await chrome.tabs.move(e.id,{index:l.index})}else s&&await chrome.tabGroups.move(parseInt(s),{index:l.index})},async()=>{if(!i)if(a){const e=(await chrome.tabs.query({active:!0,currentWindow:!0}))[0],t=await chrome.tabs.create({url:l.url,index:e.index+1});e.groupId>-1&&await chrome.tabs.group({tabIds:t.id,groupId:e.groupId})}else chrome.tabs.update(l.id,{active:!0}),chrome.windows.update(l.windowId,{focused:!0})},undefined,c,d,f,p,m,function(t){$.call(this,e,t)},function(e){j[e?"unshift":"push"]((()=>{s=e,n(4,s)}))}]}class Hv extends ye{constructor(e){super(),we(this,e,zv,Wv,o,{user:28,tab:0,group:1,workspace:2,selectedTabs:29,lastSelectionUpdate:30,dragoverItem:31,isOpen:3,lastUpdatedTab:32},null,[-1,-1])}}var Jv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAUBJREFUaEPtWVsSwiAMpCdTT6aeTD2Zzs7oDEIwgYamccJPP6CQ3c2Dx5Kct8W5/SkAWCsoUeBoaOSdW/sXABh+TilZAoD9AHF9fys8LQAw+sah37j/RIFoAYDx1syX/EAJgPhqLQDPjdmVLlepQAGg3AfoH9JVlMYdCC8YBoAguigZJp0G6yGJ5C0ASNnTGLcLBRBPbDFqoDUHkBswEkPmAMpULNm25GIEgJyNERcIBazrQCgQCmRRTAUxleZGK7B0ftW9kPaWuzRuah2YcWIrC91UAHAV9y7E+Xuk0UijTBoNF2IYmJ6FQoG9K+D+SPkhePRgbx4DXIxw/QFg7ZmYY5jrV1XA1eUumNHe63NsS/uru6W/feCYcWCRstwa1/XEhElcP/KVLFi9l7E3270XrmvdQP3/AKBOaeeE7hV4Ae4PpjHOAybCAAAAAElFTkSuQmCC";function Xv(e,t,n){const s=e.slice();return s[15]=t[n],s}function Yv(e,t){let n,s,i;return s=new Hv({props:{tab:t[15],selectedTabs:t[3],lastUpdatedTab:t[2],lastSelectionUpdate:t[4]}}),s.$on("updateSelection",t[6]),s.$on("toggleTabSaved",t[10]),{key:e,first:null,c(){n=C(),ge(s.$$.fragment),this.first=n},m(e,t){w(e,n,t),me(s,e,t),i=!0},p(e,n){t=e;const i={};2&n&&(i.tab=t[15]),8&n&&(i.selectedTabs=t[3]),4&n&&(i.lastUpdatedTab=t[2]),16&n&&(i.lastSelectionUpdate=t[4]),s.$set(i)},i(e){i||(ae(s.$$.fragment,e),i=!0)},o(e){ce(s.$$.fragment,e),i=!1},d(e){e&&y(n),ve(s,e)}}}function Zv(e){let t,n,s=[],i=new Map,r=e[1];const o=e=>e[15];for(let t=0;t<r.length;t+=1){let n=Xv(e,r,t),a=o(n);i.set(a,s[t]=Yv(a,n))}return{c(){t=I("div");for(let e=0;e<s.length;e+=1)s[e].c();S(t,"class","tabs"),S(t,"slot","main")},m(e,i){w(e,t,i);for(let e=0;e<s.length;e+=1)s[e]&&s[e].m(t,null);n=!0},p(e,n){94&n&&(r=e[1],re(),s=fe(s,n,o,1,e,r,i,t,de,Yv,null,Xv),oe())},i(e){if(!n){for(let e=0;e<r.length;e+=1)ae(s[e]);n=!0}},o(e){for(let e=0;e<s.length;e+=1)ce(s[e]);n=!1},d(e){e&&y(t);for(let e=0;e<s.length;e+=1)s[e].d()}}}function eA(e){let t,n,s;function i(t){e[11](t)}let r={title:"Open Tabs",headingActions:e[5],$$slots:{main:[Zv]},$$scope:{ctx:e}};return void 0!==e[0]&&(r.expanded=e[0]),t=new bv({props:r}),j.push((()=>pe(t,"expanded",i))),{c(){ge(t.$$.fragment)},m(e,n){me(t,e,n),s=!0},p(e,[s]){const i={};32&s&&(i.headingActions=e[5]),262174&s&&(i.$$scope={dirty:s,ctx:e}),!n&&1&s&&(n=!0,i.expanded=e[0],H((()=>n=!1))),t.$set(i)},i(e){s||(ae(t.$$.fragment,e),s=!0)},o(e){ce(t.$$.fragment,e),s=!1},d(e){ve(t,e)}}}function tA(e,t,n){let s,i=V(),{group:r}=t,{workspace:o}=t,{tabs:a}=t,{lastUpdatedTab:c}=t,{selectedTabs:l=[]}=t,{bookmarks:u}=t,{expanded:h=!1}=t;F((()=>{p()}));let d=[],f=[{icon:Jv,title:"New Tab",condition:()=>0==l.length,onClick:async()=>{const e=(await chrome.tabs.query({active:!0,currentWindow:!0}))[0],t=await chrome.tabs.create({index:e.index+1});await chrome.tabs.group({tabIds:t.id,groupId:e.groupId})}},{icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAYZJREFUaEPtmTFKBEEQRd8ewdBE3QMoiGCsmGqouXgKTdREQ2OvoJlguKiRICJqZiLqCQQjM2lhoeltZ7umq1YXa2CCGX79qt/16Rm6Ooz51Rnz+nEBv91B78Bf7sAMEG7J9Qy8SQJqsTkLLQIHwEpL8h6wA9y0jBeFpQLWgRMRQx78AWwBpwpcjRSpgEdgVjHphrWIWMAU8KpYfJ/qUoHzDLgC7lKuWMAScJEA9oXJd4V4CfwTOAK246ASAXuCLAFrKSKUEjaIw35N2gIC7yhETADvIZmFgFGImAfuLQUIXDcUmuvoMvC9OVh1YGhVAoALkOxCgoUthnoHvAPFZskD3UJuIbfQ4A+if4krXSEK913IdyGRYQbBbiG3kFvov3/IKh2gEp6eNWV/JayOFlUUJCRd4CU9lQjPt8CCRUZFznNgNXcyF97NAQ+KySyopuMhSm7AMQkcA2sW2Ss4r4FN4CnmaBrytRkxVdTXGPrj6MqnlFZLXsrrHShdKSucd8BqZUt5vwDEOIAxEZQCowAAAABJRU5ErkJggg==",title:"Add to Folder",condition:()=>l.length>0,onClick:()=>{i("saveSelectedTabsToFolder")}},{icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAbJJREFUaEPtmQFuwzAIRd2TrTvZtpOtO9mmLw2JEbCxnUA9OVJVtU3Mf4Cxi29l8eu2uP6yAbIj6InAPVHko2W7BgDhb6WUTADoB8TH7/uBxwKA6M8WffDvrxqEBQDx2Z6X/kEkAPHnsgC+g73rNXeIggagpQ/ov7xWTrrvRcmCYQBMoveThHmHgT0UEX6FAyCazVJoEKUD8FRUK0gjFOkAXMBICm4AHuFZD84+T1pCJ/FOoegyitWbp4oVAVQnvFrrSugk1sS2vkNe13bDoQBy+4FI4KKVVH7Gb62JHQoAQdIgVmBrR9sSr42H7y6vQprX5ILrEZ8GYBkmCK/4VADLeI/4dAApoFf8UwB49/3WfeFVaFawfH4D9Hi0N8dHe07D64AXxtPpw1ijXY/LAdTejaCf6TkNA9RSRGvDUCuQ/tDTDlS2Smrjhk5izxaid0sRCgBx3n5qtVnLKMMByDb9UZFNKa9wPk56Y8tbvbT70iIwI5o/eyrAUs3dmYXmLO9b4xwWyn97wOEtiVd7nI/fdcREdX3ZQz7p2azzsubZgnf3GJkqXbY2QJe7Lrh5+Qj8AHxCvTEIDnwMAAAAAElFTkSuQmCC",title:"Stash All",onClick:()=>{i("stashSelectedTabs")}},{icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAlNJREFUaEPtWYtOBDEI7P2Zfpn6ZeqXaTBiCOExUOppspsYk73dMsNMgd7d1j+/bv8c/7oI3FvBS4ENBR7WWm8b73+9ekqB17XW+1rr2QFI4OmZ7fjbCzgAP77ve+sTeCLxEpCExDlBgLNLADyATPBPEuDsegQkwW0bn1CAs8sW0DEkwUilu1hIZ5dAPKpqQxv7SaDbstG0Ajq7VoYtkm0c7RcdfS0Cls+1zbRKkH22N5CKYmXW2wdjNppUQBKgDkuNjL2ufa4JtJM5SUDahyxBhJgAEaJ749ckAelrXte6N0piioC2D2dbWmWrXHqspwho+/CU+esEokqCSq+Toksmug4/F5ZYSwGvliOBrc1qVRxkLWjM8CzUDWplq7sWtGeiPcBlkP7Lq901jbR75CDwaPOwLDVR1y3wMHCvxXve9DLVUaOTdXf0qJRRz1KkBmUOOaBb4CM1ved/4lUIsDpVEPweMmpLB0AW6xCgILpfIFZCJ1BPaXN/dAkQCa/7evsIOQtDWZcBugS82SdrULIra9WsKSCtSl0CMvt6E0og0Xk4OiPAhWGCgASZWSBTrjx+dwggo7O2klQpAlmeXicIkBXIUtnFtpAntcxG6SmuQ0D7X89KElQ22VpNrGSjDoFovreqRjaNRt/cjVeh6MATBau8V9oHVQV2JtNKh4VtVCWg7ZNKDJ4BomNoGKNCQNugA575ZGvBNqoQ4EUnDjM8ENIXX94vNZKEi7NCgALRn/e7V9YHoiGPPrPOE2nMCoEuwKPvXQSOphdY/FIASNLRRz4BkeGwMafwiRQAAAAASUVORK5CYII=",title:"Save All",onClick:()=>{i("saveSelectedTabs")}},{icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAfVJREFUaEPtWVtSwzAMdE8GnAw4GeVkMNupPIoj2VL8TNvM9KfxY1daW49cwsmfSwX+94q53qlXbYKXAEB/hhBGgufYv0MIX/wPDwGA/vGarsN4eOOD1vUQAPhZlk/tED1hJbCK9XfqsRKA7qB9/sCVvx0kIi35JngfMrrWELgtMIiAZMDHJECHNLWsaoGVPJCC5PI6BYG/xJpc48sTkK5JHvWelgAMk7up8B6/TXognKviLdTDA1ySuxzmnpbwSyOmBysQkCzGSUhpSS6uDPeAlnqAhBRVYXTJS+SM4QSwcXqr5UJGDjzmTSFgTQA36bHCcgoBYCmRsICf5gEyZq6OKEln6hnA5pYiyEJiioQs4MnCJRLDCUgbAiw0r5WlS8UByfp0YHMxQksphnsgBZneNhKJXHU4nABdoZTMaQkdWRzvc0nfFAIti7UXgactaFrJ6CWh00tIKzlHdeaorc8luenMlWriUlrcSuuedW6Bj6JfiYC3wvIAOTJ21163ENAStCMAaufExM/jAa0yqgXjmY8zB+vHs+clQJtRQ8qzec1YAry7NI4SqAHTdO5DExj5CSn1SqlXGsfzIsLTiGoqA2Exa7slxoEVbpiUh+kbXFrGeToJvb1g+gApDVohYJXaLOIZkCw648u8K0E0uam3VmrW/wcIsPIxlUKjUgAAAABJRU5ErkJggg==",title:"Close All",onClick:async()=>{const e=l.length>0?l:await chrome.tabs.query({groupId:o.groupId}),t=await chrome.tabs.create();await chrome.tabs.group({tabIds:t.id,groupId:o.groupId}),await chrome.tabs.remove(e.map((e=>e.id)))}}];const p=()=>{n(5,d=f.filter((e=>!e.condition||e.condition())))};return e.$$set=e=>{"group"in e&&n(7,r=e.group),"workspace"in e&&n(8,o=e.workspace),"tabs"in e&&n(1,a=e.tabs),"lastUpdatedTab"in e&&n(2,c=e.lastUpdatedTab),"selectedTabs"in e&&n(3,l=e.selectedTabs),"bookmarks"in e&&n(9,u=e.bookmarks),"expanded"in e&&n(0,h=e.expanded)},[h,a,c,l,s,d,({detail:e})=>{const t=e,i=l.findIndex((e=>e.id==t.id));i>-1?l.splice(i,1):l.push(t),l.length<2&&p(),n(4,s=Date.now())},r,o,u,function(t){$.call(this,e,t)},function(e){h=e,n(0,h)}]}class nA extends ye{constructor(e){super(),we(this,e,tA,eA,o,{group:7,workspace:8,tabs:1,lastUpdatedTab:2,selectedTabs:3,bookmarks:9,expanded:0})}}var sA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAWhJREFUaEPtmbFKA0EURU8+wdJGzQcYEMFaSaul9sGv0A/Q0tpf0E6wlJhKEBG1SxPULxCs7GSEhWEZl7e7c9GBtxDIhjfnzb03TDFvQOHPoPD94wL+OkFP4D8nsAaET5tnAby3WdC3NvUX2gJOgHFH+A1wDNx3XN9qWV3APnDRipAu/gQOgcsMrEZEXcALsJ6x6YFaRCxgBXjLuPkKdZuBeQXMgMc6KxawDUwzNFMhvoAz4ChuUJKAat/hgDitXkoUEPa+BHyEL6UK2ACeShawA/wcDqUm4AJUR6WV6wlYnVLVeQIqZ61cT8DqlKrOE1A5a+V6AlanVHWegMpZK9cTsDqlqvMEVM5auZ6A1SlVXTIB1dWiQsQQeK3fSoT3B2BT0TEj8xrYTd3Mhd9GwHPGZgrUajxESQ04loFzYE/RvQfzDpgA85jRNOTrMmLqsb/Gpb+OrnxKqbLcyvUErE6p6jwBlbNW7jdlqU4x31uhmQAAAABJRU5ErkJggg==",iA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAY5JREFUaEPtmVsSwiAMRenK1JWpK1NXpnO1MIXSQiCRMIW/zgDNSW7CazKdt6lz+80AaB3BEQHtETgTDXwS+1d3j0kIRl+NMVTjrTGAuBtj/gITAsDoR7VbfhMA4sY01+Y0IQCML/V87CfiECHAW8BjHFJ6zZJczbUE4JSPgB/isuwNYJVbPQIAwtndK8DFlukSAFQWNCQUR4JW5QsFQLwklpDkAqg03kuGeQGLrcIx41Fy7ZajxHElY6xcoX/XciIQLnbYHmCv1Kp5e60UADovibUsdk4VKYBQPtx7pZoofm3rGeC7FlAAtMjHRu14AJr074oLRUISZ4XSJCYDqNR/zkpsy2j3ACr1T4mASv3nAiBhuK5aSpN2Oc4dZg4DcGK+K6qJQri59N4HYpUGVajl1jmEJQNgAOdNXY33MdbTf04O1P6Qe/wuAH6mqVwm5RNGAN+tj4t7EVt5PwagNQqbtyISDxycukcRwc305jtD6pGvZQXKuvVLAXB6U2SuASDiVsKkIwIEZ4l07T4CH9BbazF7L1pBAAAAAElFTkSuQmCC";function rA(e,t,n){const s=e.slice();return s[12]=t[n],s}function oA(e){let t,n,s,r,o,a,l,u,h,d,f,p=e[1].title+"",g=e[0]&&aA(e);return{c(){t=I("div"),n=I("div"),s=I("img"),o=T(),a=I("div"),l=E(p),u=T(),g&&g.c(),c(s.src,r=e[5]?e[0]?iA:sA:e[4])||S(s,"src",r),S(s,"class","icon"+(e[5]?" folder":"")+" svelte-1ifym4z"),S(s,"alt",""),S(a,"class","title svelte-1ifym4z"),S(n,"class","head svelte-1ifym4z"),S(t,"class","bookmark svelte-1ifym4z")},m(i,r){w(i,t,r),m(t,n),m(n,s),m(n,o),m(n,a),m(a,l),m(t,u),g&&g.m(t,null),h=!0,d||(f=[k(s,"mousedown",e[6]),k(t,"mouseenter",e[7]),k(t,"mouseleave",e[8])],d=!0)},p(e,n){(!h||17&n&&!c(s.src,r=e[5]?e[0]?iA:sA:e[4]))&&S(s,"src",r),(!h||2&n)&&p!==(p=e[1].title+"")&&D(l,p),e[0]?g?(g.p(e,n),1&n&&ae(g,1)):(g=aA(e),g.c(),ae(g,1),g.m(t,null)):g&&(re(),ce(g,1,1,(()=>{g=null})),oe())},i(e){h||(ae(g),h=!0)},o(e){ce(g),h=!1},d(e){e&&y(t),g&&g.d(),d=!1,i(f)}}}function aA(e){let t,n,s=e[1].children??[],i=[];for(let t=0;t<s.length;t+=1)i[t]=cA(rA(e,s,t));const r=e=>ce(i[e],1,1,(()=>{i[e]=null}));return{c(){t=I("div");for(let e=0;e<i.length;e+=1)i[e].c();S(t,"class","children svelte-1ifym4z")},m(e,s){w(e,t,s);for(let e=0;e<i.length;e+=1)i[e]&&i[e].m(t,null);n=!0},p(e,n){if(2&n){let o;for(s=e[1].children??[],o=0;o<s.length;o+=1){const r=rA(e,s,o);i[o]?(i[o].p(r,n),ae(i[o],1)):(i[o]=cA(r),i[o].c(),ae(i[o],1),i[o].m(t,null))}for(re(),o=s.length;o<i.length;o+=1)r(o);oe()}},i(e){if(!n){for(let e=0;e<s.length;e+=1)ae(i[e]);n=!0}},o(e){i=i.filter(Boolean);for(let e=0;e<i.length;e+=1)ce(i[e]);n=!1},d(e){e&&y(t),b(i,e)}}}function cA(e){let t,n;return t=new hA({props:{bookmark:e[12]}}),{c(){ge(t.$$.fragment)},m(e,s){me(t,e,s),n=!0},p(e,n){const s={};2&n&&(s.bookmark=e[12]),t.$set(s)},i(e){n||(ae(t.$$.fragment,e),n=!0)},o(e){ce(t.$$.fragment,e),n=!1},d(e){ve(t,e)}}}function lA(e){let t,n,s=e[3]&&oA(e);return{c(){s&&s.c(),t=C()},m(e,i){s&&s.m(e,i),w(e,t,i),n=!0},p(e,[n]){e[3]?s?(s.p(e,n),8&n&&ae(s,1)):(s=oA(e),s.c(),ae(s,1),s.m(t.parentNode,t)):s&&(re(),ce(s,1,1,(()=>{s=null})),oe())},i(e){n||(ae(s),n=!0)},o(e){ce(s),n=!1},d(e){s&&s.d(e),e&&y(t)}}}function uA(e,t,n){let{bookmark:s}=t,{isOpen:i=!1}=t,r=!s.url;let o,a,c;F((()=>{l()}));const l=async()=>{n(4,c=await Te(s.url)),n(3,a=!0)};V();return e.$$set=e=>{"bookmark"in e&&n(1,s=e.bookmark),"isOpen"in e&&n(0,i=e.isOpen)},[i,s,o,a,c,r,e=>{r&&n(0,i=!i)},()=>n(2,o=!0),()=>n(2,o=!1)]}class hA extends ye{constructor(e){super(),we(this,e,uA,lA,o,{bookmark:1,isOpen:0})}}function dA(e,t,n){const s=e.slice();return s[11]=t[n],s}function fA(e){let t,n;return t=new hA({props:{bookmark:e[11]}}),{c(){ge(t.$$.fragment)},m(e,s){me(t,e,s),n=!0},p(e,n){const s={};2&n&&(s.bookmark=e[11]),t.$set(s)},i(e){n||(ae(t.$$.fragment,e),n=!0)},o(e){ce(t.$$.fragment,e),n=!1},d(e){ve(t,e)}}}function pA(e){let t,n,s=e[1],i=[];for(let t=0;t<s.length;t+=1)i[t]=fA(dA(e,s,t));const r=e=>ce(i[e],1,1,(()=>{i[e]=null}));return{c(){t=I("div");for(let e=0;e<i.length;e+=1)i[e].c();S(t,"class","bookmarks"),S(t,"slot","main")},m(e,s){w(e,t,s);for(let e=0;e<i.length;e+=1)i[e]&&i[e].m(t,null);n=!0},p(e,n){if(2&n){let o;for(s=e[1],o=0;o<s.length;o+=1){const r=dA(e,s,o);i[o]?(i[o].p(r,n),ae(i[o],1)):(i[o]=fA(r),i[o].c(),ae(i[o],1),i[o].m(t,null))}for(re(),o=s.length;o<i.length;o+=1)r(o);oe()}},i(e){if(!n){for(let e=0;e<s.length;e+=1)ae(i[e]);n=!0}},o(e){i=i.filter(Boolean);for(let e=0;e<i.length;e+=1)ce(i[e]);n=!1},d(e){e&&y(t),b(i,e)}}}function gA(e){let t,n,s;function i(t){e[4](t)}let r={title:"Bookmarks",$$slots:{main:[pA]},$$scope:{ctx:e}};return void 0!==e[0]&&(r.expanded=e[0]),t=new bv({props:r}),j.push((()=>pe(t,"expanded",i))),{c(){ge(t.$$.fragment)},m(e,n){me(t,e,n),s=!0},p(e,[s]){const i={};16386&s&&(i.$$scope={dirty:s,ctx:e}),!n&&1&s&&(n=!0,i.expanded=e[0],H((()=>n=!1))),t.$set(i)},i(e){s||(ae(t.$$.fragment,e),s=!0)},o(e){ce(t.$$.fragment,e),s=!1},d(e){ve(t,e)}}}function mA(e,t,n){let{user:s}=t,{workspace:i}=t,{expanded:r}=t,{bookmarks:o}=t;return V(),F((()=>{console.log("bookmarks"),console.log(o)})),e.$$set=e=>{"user"in e&&n(2,s=e.user),"workspace"in e&&n(3,i=e.workspace),"expanded"in e&&n(0,r=e.expanded),"bookmarks"in e&&n(1,o=e.bookmarks)},[r,o,s,i,function(e){r=e,n(0,r)}]}class vA extends ye{constructor(e){super(),we(this,e,mA,gA,o,{user:2,workspace:3,expanded:0,bookmarks:1})}}function AA(e,t,n){const s=e.slice();return s[3]=t[n],s}function wA(e){let t,n;return t=new hA({props:{bookmark:e[3]}}),{c(){ge(t.$$.fragment)},m(e,s){me(t,e,s),n=!0},p(e,n){const s={};2&n&&(s.bookmark=e[3]),t.$set(s)},i(e){n||(ae(t.$$.fragment,e),n=!0)},o(e){ce(t.$$.fragment,e),n=!1},d(e){ve(t,e)}}}function yA(e){let t,n,s=e[1],i=[];for(let t=0;t<s.length;t+=1)i[t]=wA(AA(e,s,t));const r=e=>ce(i[e],1,1,(()=>{i[e]=null}));return{c(){t=I("div");for(let e=0;e<i.length;e+=1)i[e].c();S(t,"class","queue"),S(t,"slot","main")},m(e,s){w(e,t,s);for(let e=0;e<i.length;e+=1)i[e]&&i[e].m(t,null);n=!0},p(e,n){if(2&n){let o;for(s=e[1],o=0;o<s.length;o+=1){const r=AA(e,s,o);i[o]?(i[o].p(r,n),ae(i[o],1)):(i[o]=wA(r),i[o].c(),ae(i[o],1),i[o].m(t,null))}for(re(),o=s.length;o<i.length;o+=1)r(o);oe()}},i(e){if(!n){for(let e=0;e<s.length;e+=1)ae(i[e]);n=!0}},o(e){i=i.filter(Boolean);for(let e=0;e<i.length;e+=1)ce(i[e]);n=!1},d(e){e&&y(t),b(i,e)}}}function bA(e){let t,n,s;function i(t){e[2](t)}let r={title:"Queue",$$slots:{main:[yA]},$$scope:{ctx:e}};return void 0!==e[0]&&(r.expanded=e[0]),t=new bv({props:r}),j.push((()=>pe(t,"expanded",i))),{c(){ge(t.$$.fragment)},m(e,n){me(t,e,n),s=!0},p(e,[s]){const i={};66&s&&(i.$$scope={dirty:s,ctx:e}),!n&&1&s&&(n=!0,i.expanded=e[0],H((()=>n=!1))),t.$set(i)},i(e){s||(ae(t.$$.fragment,e),s=!0)},o(e){ce(t.$$.fragment,e),s=!1},d(e){ve(t,e)}}}function IA(e,t,n){let{queue:s}=t,{expanded:i}=t;return e.$$set=e=>{"queue"in e&&n(1,s=e.queue),"expanded"in e&&n(0,i=e.expanded)},[i,s,function(e){i=e,n(0,i)}]}class EA extends ye{constructor(e){super(),we(this,e,IA,bA,o,{queue:1,expanded:0})}}function TA(e){let t,n,s,r,o,a,l,u,h,d,f,p,g,v,A,b,C,N,U,x,_,O,L,P,M,B,F,V,$=e[1]?.title+"";function G(t){e[21](t)}function Q(t){e[22](t)}let q={workspace:e[1],tabs:e[0],lastUpdatedTab:e[3],group:e[2]};function K(t){e[26](t)}void 0!==e[8]&&(q.expanded=e[8]),void 0!==e[4]&&(q.selectedTabs=e[4]),C=new nA({props:q}),j.push((()=>pe(C,"expanded",G))),j.push((()=>pe(C,"selectedTabs",Q))),C.$on("saveSelectedTabs",e[23]),C.$on("saveSelectedTabsToFolder",e[24]),C.$on("stashSelectedTabs",e[25]),C.$on("toggleTabSaved",e[14]);let W={workspace:e[1],bookmarks:e[5]};function z(t){e[27](t)}void 0!==e[9]&&(W.expanded=e[9]),_=new vA({props:W}),j.push((()=>pe(_,"expanded",K)));let J={workspace:e[1],queue:e[6]};return void 0!==e[10]&&(J.expanded=e[10]),P=new EA({props:J}),j.push((()=>pe(P,"expanded",z))),{c(){t=I("div"),n=I("div"),s=I("div"),r=I("img"),a=T(),l=I("div"),u=E($),h=T(),d=I("div"),f=I("img"),g=T(),v=I("img"),b=T(),ge(C.$$.fragment),x=T(),ge(_.$$.fragment),L=T(),ge(P.$$.fragment),c(r.src,o=Ze)||S(r,"src",o),S(r,"class","action icon svelte-vr5p93"),S(r,"alt","back"),S(l,"class","title svelte-vr5p93"),c(f.src,p=Le)||S(f,"src",p),S(f,"class","action icon svelte-vr5p93"),S(f,"alt",""),c(v.src,A=Qe)||S(v,"src",A),S(v,"class","action icon svelte-vr5p93"),S(v,"alt",""),S(d,"class","actions svelte-vr5p93"),S(s,"class","main svelte-vr5p93"),S(n,"class","header svelte-vr5p93"),R(n,"color",qe[e[1].color]),S(t,"class","workspace svelte-vr5p93")},m(i,o){w(i,t,o),m(t,n),m(n,s),m(s,r),m(s,a),m(s,l),m(l,u),m(s,h),m(s,d),m(d,f),m(d,g),m(d,v),m(t,b),me(C,t,null),m(t,x),me(_,t,null),m(t,L),me(P,t,null),B=!0,F||(V=[k(r,"mousedown",e[13]),k(f,"mousedown",e[20]),k(v,"mousedown",e[12])],F=!0)},p(e,t){(!B||2&t[0])&&$!==($=e[1]?.title+"")&&D(u,$),(!B||2&t[0])&&R(n,"color",qe[e[1].color]);const s={};2&t[0]&&(s.workspace=e[1]),1&t[0]&&(s.tabs=e[0]),8&t[0]&&(s.lastUpdatedTab=e[3]),4&t[0]&&(s.group=e[2]),!N&&256&t[0]&&(N=!0,s.expanded=e[8],H((()=>N=!1))),!U&&16&t[0]&&(U=!0,s.selectedTabs=e[4],H((()=>U=!1))),C.$set(s);const i={};2&t[0]&&(i.workspace=e[1]),32&t[0]&&(i.bookmarks=e[5]),!O&&512&t[0]&&(O=!0,i.expanded=e[9],H((()=>O=!1))),_.$set(i);const r={};2&t[0]&&(r.workspace=e[1]),64&t[0]&&(r.queue=e[6]),!M&&1024&t[0]&&(M=!0,r.expanded=e[10],H((()=>M=!1))),P.$set(r)},i(e){B||(ae(C.$$.fragment,e),ae(_.$$.fragment,e),ae(P.$$.fragment,e),B=!0)},o(e){ce(C.$$.fragment,e),ce(_.$$.fragment,e),ce(P.$$.fragment,e),B=!1},d(e){e&&y(t),ve(C),ve(_),ve(P),F=!1,i(V)}}}function CA(e){let t,n,s=e[7]&&TA(e);return{c(){s&&s.c(),t=C()},m(e,i){s&&s.m(e,i),w(e,t,i),n=!0},p(e,n){e[7]?s?(s.p(e,n),128&n[0]&&ae(s,1)):(s=TA(e),s.c(),ae(s,1),s.m(t.parentNode,t)):s&&(re(),ce(s,1,1,(()=>{s=null})),oe())},i(e){n||(ae(s),n=!0)},o(e){ce(s),n=!1},d(e){s&&s.d(e),e&&y(t)}}}function kA(e,t,n){let s,i=V(),{tabs:r=null}=t,{group:o=null}=t,{lastUpdate:a=null}=t,{activeTab:c=null}=t,{lastSelectionUpdate:l=null}=t,{lastUpdatedTab:u}=t,{user:h}=t,{db:d}=t,{workspace:f=null}=t,p=[],g=[],m=[];F((()=>{b()}));let v,A=!0,w=!1,y=!1;const b=async()=>{console.log("rebuilding workspace page"),o&&(f?await T():o?.workspaceId?await I():n(1,f={title:o.title,color:o.color}),C(),n(7,s=!0))},I=async()=>{n(1,f=await Ce(o.workspaceId)),console.log("workspace:"),console.log(f),await T()};let E=[];const T=async()=>{if(h){console.log("fetching resources from the cloud");const e=tt.userResources(h.id),t=tp(Tf(d,e),function(e,t,n){const s=t,i=Yf("where",e);return np._create(i,s,n)}("contexts","array-contains",f.id));E=(await gp(t)).docs.map((e=>e.data())),n(5,g=E.filter((e=>e.url&&!e.title.startsWith("* ")))),n(6,m=E.filter((e=>e.url&&e.title.startsWith("* ")))),console.log("resources:"),console.log(E)}r||n(0,r=f.tabs)},C=()=>{for(let e=0;e<r.length;e++)n(0,r[e].saved=E.find((t=>t.url==r[e].url)),r)};return e.$$set=e=>{"tabs"in e&&n(0,r=e.tabs),"group"in e&&n(2,o=e.group),"lastUpdate"in e&&n(15,a=e.lastUpdate),"activeTab"in e&&n(16,c=e.activeTab),"lastSelectionUpdate"in e&&n(17,l=e.lastSelectionUpdate),"lastUpdatedTab"in e&&n(3,u=e.lastUpdatedTab),"user"in e&&n(18,h=e.user),"db"in e&&n(19,d=e.db),"workspace"in e&&n(1,f=e.workspace)},e.$$.update=()=>{4&e.$$.dirty[0]&&o?.workspaceId&&b()},[r,f,o,u,p,g,m,s,A,w,y,v,()=>{},()=>{i("goBack")},async({detail:e})=>{const t=e;await tryToGetBookmarkFolder(f.folderId),t.savedResource||await chrome.tabs,h?.cloudStorage},a,c,l,h,d,()=>n(11,v=!0),function(e){A=e,n(8,A)},function(e){p=e,n(4,p)},function(t){$.call(this,e,t)},function(t){$.call(this,e,t)},function(t){$.call(this,e,t)},function(e){w=e,n(9,w)},function(e){y=e,n(10,y)}]}class SA extends ye{constructor(e){super(),we(this,e,kA,CA,o,{tabs:0,group:2,lastUpdate:15,activeTab:16,lastSelectionUpdate:17,lastUpdatedTab:3,user:18,db:19,workspace:1},null,[-1,-1])}}function DA(e){let t,n,s,i,r=(e[0]?.title??"Untitled Group")+"",o=e[0].collapsed&&RA(e);return{c(){t=I("div"),n=I("span"),s=E(r),i=T(),o&&o.c(),S(n,"class","text svelte-1v40yc3"),S(t,"class","title svelte-1v40yc3")},m(e,r){w(e,t,r),m(t,n),m(n,s),m(t,i),o&&o.m(t,null)},p(e,n){1&n[0]&&r!==(r=(e[0]?.title??"Untitled Group")+"")&&D(s,r),e[0].collapsed?o?o.p(e,n):(o=RA(e),o.c(),o.m(t,null)):o&&(o.d(1),o=null)},d(e){e&&y(t),o&&o.d()}}}function NA(e){let t,n,s;return{c(){t=I("input"),S(t,"type","text"),S(t,"class","title-input svelte-1v40yc3"),S(t,"placeholder","Name this group"),t.autofocus="true"},m(i,r){w(i,t,r),N(t,e[0].title),t.focus(),n||(s=[k(t,"input",e[32]),k(t,"blur",e[15]),k(t,"keydown",e[16])],n=!0)},p(e,n){1&n[0]&&t.value!==e[0].title&&N(t,e[0].title)},d(e){e&&y(t),n=!1,i(s)}}}function RA(e){let t,n,s,i,r=e[1].length+"";return{c(){t=I("div"),n=E("("),s=E(r),i=E(")"),S(t,"class","count svelte-1v40yc3")},m(e,r){w(e,t,r),m(t,n),m(t,s),m(t,i)},p(e,t){2&t[0]&&r!==(r=e[1].length+"")&&D(s,r)},d(e){e&&y(t)}}}function UA(e){let t,n,s,r,o,a,l,u,h;function d(e,t){return e[0].workspace?_A:xA}let f=d(e),p=f(e);return{c(){t=I("div"),p.c(),n=T(),s=I("img"),o=T(),a=I("img"),c(s.src,r=Qe)||S(s,"src",r),S(s,"alt","More"),S(s,"class","svelte-1v40yc3"),c(a.src,l=Pe)||S(a,"src",l),S(a,"alt","close"),S(a,"class","svelte-1v40yc3"),S(t,"class","actions svelte-1v40yc3")},m(i,r){w(i,t,r),p.m(t,null),m(t,n),m(t,s),m(t,o),m(t,a),u||(h=[k(s,"mousedown",e[33]),k(a,"mouseup",e[10])],u=!0)},p(e,s){f===(f=d(e))&&p?p.p(e,s):(p.d(1),p=f(e),p&&(p.c(),p.m(t,n)))},d(e){e&&y(t),p.d(),u=!1,i(h)}}}function xA(e){let t,n,s,i;return{c(){t=I("img"),c(t.src,n=e[0].collapsed?je:Ge)||S(t,"src",n),S(t,"alt","Toggle Collapsed"),S(t,"class","svelte-1v40yc3")},m(n,r){w(n,t,r),s||(i=k(t,"mousedown",e[11]),s=!0)},p(e,s){1&s[0]&&!c(t.src,n=e[0].collapsed?je:Ge)&&S(t,"src",n)},d(e){e&&y(t),s=!1,i()}}}function _A(t){let n,s,i,r;return{c(){n=I("img"),c(n.src,s=Ye)||S(n,"src",s),S(n,"alt","Fullscreen"),S(n,"class","svelte-1v40yc3")},m(e,s){w(e,n,s),i||(r=k(n,"mousedown",t[23]),i=!0)},p:e,d(e){e&&y(n),i=!1,r()}}}function OA(e){let t,n,s,r,o,a,c,l,u,h,d,f,p,g,v,A,b,E,C;return n=new Xe({props:{group:e[0]}}),n.$on("colorSelected",e[24]),{c(){t=I("div"),ge(n.$$.fragment),s=T(),r=I("div"),r.textContent="Edit title",o=T(),a=I("div"),c=T(),l=I("div"),l.textContent="Move Group to New Window",u=T(),h=I("div"),d=T(),f=I("div"),f.textContent="Ungroup Tabs",p=T(),g=I("div"),g.textContent="Close Group",S(r,"class","action svelte-1v40yc3"),S(a,"class","divider svelte-1v40yc3"),S(l,"class","action svelte-1v40yc3"),S(h,"class","divider svelte-1v40yc3"),S(f,"class","action svelte-1v40yc3"),S(g,"class","action svelte-1v40yc3"),S(t,"class","more-actions svelte-1v40yc3"),R(t,"border-color","#555555")},m(i,v){w(i,t,v),me(n,t,null),m(t,s),m(t,r),m(t,o),m(t,a),m(t,c),m(t,l),m(t,u),m(t,h),m(t,d),m(t,f),m(t,p),m(t,g),b=!0,E||(C=[k(r,"mousedown",e[14]),k(l,"mousedown",e[12]),k(f,"mousedown",e[17]),k(g,"mousedown",e[13])],E=!0)},p(e,t){const s={};1&t[0]&&(s.group=e[0]),n.$set(s)},i(e){b||(ae(n.$$.fragment,e),z((()=>{b&&(A&&A.end(1),v=ue(t,Oe,{}),v.start())})),b=!0)},o(e){ce(n.$$.fragment,e),v&&v.invalidate(),A=he(t,Oe,{}),b=!1},d(e){e&&y(t),ve(n),e&&A&&A.end(),E=!1,i(C)}}}function LA(e){let t,n,s,r,o,a,c,l,u;function h(e,t){return e[5]?NA:DA}let d=h(e),f=d(e),p=e[2]&&!e[6]&&UA(e),g=e[3]&&OA(e);return{c(){t=I("div"),n=I("div"),f.c(),s=T(),p&&p.c(),o=T(),g&&g.c(),S(n,"class","container svelte-1v40yc3"),S(n,"style",r="background-color: "+qe[e[0].color]+";"+(e[3]?"border-radius: 5px 5px 0px 0px;":"")),S(t,"class",a="group-label"+(e[7]?" dragged-over":"")+" svelte-1v40yc3"),S(t,"draggable","true")},m(i,r){w(i,t,r),m(t,n),f.m(n,null),m(n,s),p&&p.m(n,null),m(t,o),g&&g.m(t,null),e[34](t),c=!0,l||(u=[k(t,"mouseenter",e[8]),k(t,"mouseleave",e[9]),k(t,"dragleave",e[20]),k(t,"dragstart",e[18]),k(t,"dragover",e[19]),k(t,"drop",e[21]),k(t,"dragend",e[22])],l=!0)},p(e,i){d===(d=h(e))&&f?f.p(e,i):(f.d(1),f=d(e),f&&(f.c(),f.m(n,s))),e[2]&&!e[6]?p?p.p(e,i):(p=UA(e),p.c(),p.m(n,null)):p&&(p.d(1),p=null),(!c||9&i[0]&&r!==(r="background-color: "+qe[e[0].color]+";"+(e[3]?"border-radius: 5px 5px 0px 0px;":"")))&&S(n,"style",r),e[3]?g?(g.p(e,i),8&i[0]&&ae(g,1)):(g=OA(e),g.c(),ae(g,1),g.m(t,null)):g&&(re(),ce(g,1,1,(()=>{g=null})),oe()),(!c||128&i[0]&&a!==(a="group-label"+(e[7]?" dragged-over":"")+" svelte-1v40yc3"))&&S(t,"class",a)},i(e){c||(ae(g),c=!0)},o(e){ce(g),c=!1},d(n){n&&y(t),f.d(),p&&p.d(),g&&g.d(),e[34](null),l=!1,i(u)}}}function PA(e,t,n){let s,i,r,{group:o}=t,{isCollapsed:a=null}=t,{tabs:c=[]}=t,{lastGroupUpdate:l=null}=t,{user:u}=t,{db:h}=t,{lastUpdate:d}=t,{lastUpdatedTab:f}=t,{lastSelectionUpdate:p}=t,g=V();F((()=>{o.new&&(n(5,m=!0),r?.scrollIntoView({behavior:"smooth"}))}));let m;let v;const A=()=>{chrome.tabGroups.update(o.id,{title:o.title}),n(5,m=!1)};let w;let y;return e.$$set=e=>{"group"in e&&n(0,o=e.group),"isCollapsed"in e&&n(25,a=e.isCollapsed),"tabs"in e&&n(1,c=e.tabs),"lastGroupUpdate"in e&&n(26,l=e.lastGroupUpdate),"user"in e&&n(27,u=e.user),"db"in e&&n(28,h=e.db),"lastUpdate"in e&&n(29,d=e.lastUpdate),"lastUpdatedTab"in e&&n(30,f=e.lastUpdatedTab),"lastSelectionUpdate"in e&&n(31,p=e.lastSelectionUpdate)},[o,c,s,i,r,m,w,y,()=>{n(2,s=!0),console.log(o)},()=>{n(2,s=!1),n(3,i=!1)},()=>{chrome.tabs.remove(c.map((e=>e.id)))},()=>{g("toggleCollapse",o),chrome.tabGroups.update(o.id,{collapsed:!o.collapsed})},async()=>{const e=await chrome.windows.create({});await chrome.tabGroups.move(o.id,{windowId:e.id,index:0}),n(3,i=!1)},()=>{chrome.tabGroups.remove(o.id)},()=>{n(5,m=!0)},e=>{v&&A()},e=>{"Enter"==e.key&&A(),v||(v=!0)},async()=>{chrome.tabs.ungroup((await chrome.tabs.query({groupId:o.id})).map((e=>e.id)))},e=>{n(6,w=!0),e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("groupId",o.id),chrome.tabGroups.update(o.id,{collapsed:!0})},e=>{e.preventDefault(),y||n(7,y=!0)},e=>{e.preventDefault(),n(7,y=!1)},async e=>{y&&n(7,y=!1);let t=e.dataTransfer.getData("tabId");const s=e.dataTransfer.getData("groupId"),i=await chrome.tabs.query({groupId:o.id});let r=1e5,a=0;for(const e of i)e.index<r&&(r=e.index),e.index>a&&(a=e.index);if(t){t=parseInt(t);const e=await chrome.tabs.get(t);let n;e.groupId==o.id?n=r:e.index>r?(o.collapsed||await chrome.tabs.group({tabIds:e.id,groupId:o.id}),n=r):e.index<a&&(o.collapsed?n=a:(await chrome.tabs.group({tabIds:e.id,groupId:o.id}),n=r)),chrome.tabs.move(parseInt(t),{index:n})}else s&&chrome.tabGroups.move(parseInt(s),{index:r})},()=>{n(6,w=!1)},()=>{g("showWorkspaceView",o)},({detail:e})=>{const t=e;o.id?chrome.tabGroups.update(o.id,{color:t}):n(0,o.color=t,o)},a,l,u,h,d,f,p,function(){o.title=this.value,n(0,o)},()=>n(3,i=!i),function(e){j[e?"unshift":"push"]((()=>{r=e,n(4,r)}))}]}class MA extends ye{constructor(e){super(),we(this,e,PA,LA,o,{group:0,isCollapsed:25,tabs:1,lastGroupUpdate:26,user:27,db:28,lastUpdate:29,lastUpdatedTab:30,lastSelectionUpdate:31},null,[-1,-1])}}function BA(e){let t,n,s,r,o,a,l,u,h,d=e[1]&&FA(e);return{c(){t=I("div"),n=I("img"),a=T(),d&&d.c(),c(n.src,s=e[4]?e[0].favIconUrl:Cv)||S(n,"src",s),S(n,"style",r=e[4]?"":"filter: invert(1);"),S(n,"alt",o=e[0].title),S(n,"draggable","false"),S(n,"class","svelte-zsdvv8"),S(t,"class",l="tab-icon"+(e[2]?" focus":"")+(e[0].active?" active":"")+" svelte-zsdvv8"),S(t,"draggable","true")},m(s,i){w(s,t,i),m(t,n),m(t,a),d&&d.m(t,null),u||(h=[k(t,"mouseenter",e[5]),k(t,"mouseleave",e[6]),k(t,"mouseup",e[7]),k(t,"dragstart",e[8])],u=!0)},p(e,i){17&i&&!c(n.src,s=e[4]?e[0].favIconUrl:Cv)&&S(n,"src",s),16&i&&r!==(r=e[4]?"":"filter: invert(1);")&&S(n,"style",r),1&i&&o!==(o=e[0].title)&&S(n,"alt",o),e[1]?d?d.p(e,i):(d=FA(e),d.c(),d.m(t,null)):d&&(d.d(1),d=null),5&i&&l!==(l="tab-icon"+(e[2]?" focus":"")+(e[0].active?" active":"")+" svelte-zsdvv8")&&S(t,"class",l)},d(e){e&&y(t),d&&d.d(),u=!1,i(h)}}}function FA(e){let t;return{c(){t=I("div"),S(t,"class","group-indicator svelte-zsdvv8"),R(t,"background-color",qe[e[1].color])},m(e,n){w(e,t,n)},p(e,n){2&n&&R(t,"background-color",qe[e[1].color])},d(e){e&&y(t)}}}function VA(t){let n,s=t[3]&&BA(t);return{c(){s&&s.c(),n=C()},m(e,t){s&&s.m(e,t),w(e,n,t)},p(e,[t]){e[3]?s?s.p(e,t):(s=BA(e),s.c(),s.m(n.parentNode,n)):s&&(s.d(1),s=null)},i:e,o:e,d(e){s&&s.d(e),e&&y(n)}}}function $A(e,t,n){let s,i,{tab:r}=t,{group:o}=t,{isClickable:a=!0}=t,{isActive:c}=t,l=V();F((()=>{u()}));const u=async()=>{await Te(r.url),n(3,i=!0)};let h=r.favIconUrl&&""!=r.favIconUrl;return e.$$set=e=>{"tab"in e&&n(0,r=e.tab),"group"in e&&n(1,o=e.group),"isClickable"in e&&n(9,a=e.isClickable),"isActive"in e&&n(10,c=e.isActive)},e.$$.update=()=>{1&e.$$.dirty&&n(4,h=r.favIconUrl&&""!=r.favIconUrl)},[r,o,s,i,h,()=>{a&&(n(2,s=!0),l("showTabDetails",r))},()=>{a&&n(2,s=!1)},()=>{chrome.tabs.update(r.id,{active:!0}),chrome.windows.update(r.windowId,{focused:!0}),l("tabIconClicked",r)},e=>{e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("tabId",r.id)},a,c]}class GA extends ye{constructor(e){super(),we(this,e,$A,VA,o,{tab:0,group:1,isClickable:9,isActive:10})}}function jA(e,t,n){const s=e.slice();return s[34]=t[n],s}function QA(e){let t,n,s,r,o,a,c,l,u,h;function d(e,t){return e[10]?KA:qA}let f=d(e),p=f(e),g=e[9]&&WA(e),v=e[1].length>1&&zA(e);return{c(){t=I("div"),n=I("div"),s=I("div"),r=I("div"),p.c(),o=T(),g&&g.c(),a=T(),v&&v.c(),S(r,"class","tab-details svelte-iwx5jo"),S(s,"class","active-tab svelte-iwx5jo"),S(s,"draggable","true"),S(n,"class","top-container svelte-iwx5jo"),S(t,"class",c="window"+(e[0].incognito?" incognito":"")+(e[11]?" dragover":"")+" svelte-iwx5jo")},m(i,c){w(i,t,c),m(t,n),m(n,s),m(s,r),p.m(r,null),m(r,o),g&&g.m(r,null),m(t,a),v&&v.m(t,null),l=!0,u||(h=[k(s,"dragstart",e[21]),k(t,"mouseenter",e[13]),k(t,"mouseleave",e[14]),k(t,"dragover",e[18]),k(t,"dragleave",e[19]),k(t,"drop",e[20])],u=!0)},p(e,n){f===(f=d(e))&&p?p.p(e,n):(p.d(1),p=f(e),p&&(p.c(),p.m(r,o))),e[9]?g?g.p(e,n):(g=WA(e),g.c(),g.m(r,null)):g&&(g.d(1),g=null),e[1].length>1?v?(v.p(e,n),2&n[0]&&ae(v,1)):(v=zA(e),v.c(),ae(v,1),v.m(t,null)):v&&(re(),ce(v,1,1,(()=>{v=null})),oe()),(!l||2049&n[0]&&c!==(c="window"+(e[0].incognito?" incognito":"")+(e[11]?" dragover":"")+" svelte-iwx5jo"))&&S(t,"class",c)},i(e){l||(ae(v),l=!0)},o(e){ce(v),l=!1},d(e){e&&y(t),p.d(),g&&g.d(),v&&v.d(),u=!1,i(h)}}}function qA(e){let t,n,s,i,r,o,a,l,u,h=e[3].title+"";return{c(){t=I("img"),r=T(),o=I("span"),a=E(h),c(t.src,n=e[7]?e[3].favIconUrl:Cv)||S(t,"src",n),S(t,"alt",s=e[3].url),S(t,"style",i=e[7]?"":"filter: invert(1);"),S(t,"class","svelte-iwx5jo"),S(o,"class","svelte-iwx5jo")},m(n,s){w(n,t,s),w(n,r,s),w(n,o,s),m(o,a),l||(u=k(o,"mouseup",e[17]),l=!0)},p(e,r){136&r[0]&&!c(t.src,n=e[7]?e[3].favIconUrl:Cv)&&S(t,"src",n),8&r[0]&&s!==(s=e[3].url)&&S(t,"alt",s),128&r[0]&&i!==(i=e[7]?"":"filter: invert(1);")&&S(t,"style",i),8&r[0]&&h!==(h=e[3].title+"")&&D(a,h)},d(e){e&&y(t),e&&y(r),e&&y(o),l=!1,u()}}}function KA(t){let n,s,i,r;return{c(){n=I("div"),s=I("span"),s.textContent="Close Window",S(s,"class","svelte-iwx5jo"),S(n,"class","close-window-instructions svelte-iwx5jo")},m(e,o){w(e,n,o),m(n,s),i||(r=k(s,"mousedown",t[16]),i=!0)},p:e,d(e){e&&y(n),i=!1,r()}}}function WA(t){let n,s,r,o,a;return{c(){n=I("div"),s=I("img"),S(s,"class","action svelte-iwx5jo"),c(s.src,r=Pe)||S(s,"src",r),S(s,"alt","close"),S(n,"class","actions svelte-iwx5jo")},m(e,i){w(e,n,i),m(n,s),o||(a=[k(s,"mousedown",t[16]),k(s,"mouseenter",t[26]),k(s,"mouseleave",t[27])],o=!0)},p:e,d(e){e&&y(n),o=!1,i(a)}}}function zA(e){let t,n,s,i,r,o;function a(e,t){return e[4]&&!e[10]?JA:HA}let c=a(e),l=c(e),u=e[1].length>1&&XA(e),h=e[12]&&function(e){let t;return{c(){t=I("div"),t.innerHTML='<div class="action">Open New Tab</div> \n                    <div class="action">Close Window</div> \n                    <div class="action">Save Window?</div>',S(t,"class","menu")},m(e,n){w(e,t,n)},d(e){e&&y(t)}}}();return{c(){l.c(),t=T(),n=I("div"),s=I("div"),u&&u.c(),i=T(),h&&h.c(),r=C(),S(s,"class","other-tabs svelte-iwx5jo"),S(n,"class","details svelte-iwx5jo")},m(e,a){l.m(e,a),w(e,t,a),w(e,n,a),m(n,s),u&&u.m(s,null),w(e,i,a),h&&h.m(e,a),w(e,r,a),o=!0},p(e,n){c===(c=a(e))&&l?l.p(e,n):(l.d(1),l=c(e),l&&(l.c(),l.m(t.parentNode,t))),e[1].length>1?u?(u.p(e,n),2&n[0]&&ae(u,1)):(u=XA(e),u.c(),ae(u,1),u.m(s,null)):u&&(re(),ce(u,1,1,(()=>{u=null})),oe())},i(e){o||(ae(u),o=!0)},o(e){ce(u),o=!1},d(e){l.d(e),e&&y(t),e&&y(n),u&&u.d(),e&&y(i),h&&h.d(e),e&&y(r)}}}function HA(t){let n;return{c(){n=I("div"),S(n,"class","divider svelte-iwx5jo")},m(e,t){w(e,n,t)},p:e,d(e){e&&y(n)}}}function JA(e){let t,n,s,i,r,o,a=(e[4].title.length>0?e[4].title:e[4].color)+"";return{c(){t=I("div"),n=I("div"),s=I("div"),i=E(a),r=T(),o=I("div"),S(s,"class","title svelte-iwx5jo"),S(n,"class","active-group svelte-iwx5jo"),R(n,"background-color",qe[e[4].color]),S(o,"class","spacer svelte-iwx5jo"),S(t,"class","active-group-container svelte-iwx5jo")},m(e,a){w(e,t,a),m(t,n),m(n,s),m(s,i),m(t,r),m(t,o)},p(e,t){16&t[0]&&a!==(a=(e[4].title.length>0?e[4].title:e[4].color)+"")&&D(i,a),16&t[0]&&R(n,"background-color",qe[e[4].color])},d(e){e&&y(t)}}}function XA(e){let t,n,s,i,r=e[8]?e[1]:e[5],o=[];for(let t=0;t<r.length;t+=1)o[t]=YA(jA(e,r,t));const a=e=>ce(o[e],1,1,(()=>{o[e]=null}));let c=!e[8]&&ZA(e);return{c(){t=I("div");for(let e=0;e<o.length;e+=1)o[e].c();n=T(),c&&c.c(),s=C(),S(t,"class","tab-icons svelte-iwx5jo")},m(e,r){w(e,t,r);for(let e=0;e<o.length;e+=1)o[e]&&o[e].m(t,null);w(e,n,r),c&&c.m(e,r),w(e,s,r),i=!0},p(e,n){if(4227366&n[0]){let s;for(r=e[8]?e[1]:e[5],s=0;s<r.length;s+=1){const i=jA(e,r,s);o[s]?(o[s].p(i,n),ae(o[s],1)):(o[s]=YA(i),o[s].c(),ae(o[s],1),o[s].m(t,null))}for(re(),s=r.length;s<o.length;s+=1)a(s);oe()}e[8]?c&&(c.d(1),c=null):c?c.p(e,n):(c=ZA(e),c.c(),c.m(s.parentNode,s))},i(e){if(!i){for(let e=0;e<r.length;e+=1)ae(o[e]);i=!0}},o(e){o=o.filter(Boolean);for(let e=0;e<o.length;e+=1)ce(o[e]);i=!1},d(e){e&&y(t),b(o,e),e&&y(n),c&&c.d(e),e&&y(s)}}}function YA(e){let t,n;return t=new GA({props:{tab:e[34],group:e[2][e[34].groupId],isClickable:e[8]}}),t.$on("showTabDetails",e[15]),t.$on("tabIconClicked",e[22]),{c(){ge(t.$$.fragment)},m(e,s){me(t,e,s),n=!0},p(e,n){const s={};290&n[0]&&(s.tab=e[34]),294&n[0]&&(s.group=e[2][e[34].groupId]),256&n[0]&&(s.isClickable=e[8]),t.$set(s)},i(e){n||(ae(t.$$.fragment,e),n=!0)},o(e){ce(t.$$.fragment,e),n=!1},d(e){ve(t,e)}}}function ZA(e){let t,n,s,i,r=e[1].length-1+"",o=e[1].length-1>1&&ew();return{c(){t=I("div"),n=E("+"),s=E(r),i=E(" Tab"),o&&o.c(),S(t,"class","count svelte-iwx5jo")},m(e,r){w(e,t,r),m(t,n),m(t,s),m(t,i),o&&o.m(t,null)},p(e,n){2&n[0]&&r!==(r=e[1].length-1+"")&&D(s,r),e[1].length-1>1?o||(o=ew(),o.c(),o.m(t,null)):o&&(o.d(1),o=null)},d(e){e&&y(t),o&&o.d()}}}function ew(e){let t;return{c(){t=E("s")},m(e,n){w(e,t,n)},d(e){e&&y(t)}}}function tw(e){let t,n,s=e[6]&&e[3]&&QA(e);return{c(){s&&s.c(),t=C()},m(e,i){s&&s.m(e,i),w(e,t,i),n=!0},p(e,n){e[6]&&e[3]?s?(s.p(e,n),72&n[0]&&ae(s,1)):(s=QA(e),s.c(),ae(s,1),s.m(t.parentNode,t)):s&&(re(),ce(s,1,1,(()=>{s=null})),oe())},i(e){n||(ae(s),n=!0)},o(e){ce(s),n=!1},d(e){s&&s.d(e),e&&y(t)}}}function nw(e,t,n){let s,i,r,o,a,c=V(),{windowData:l}=t,{tabs:u}=t,{groups:h}=t,{lastUpdatedWindow:d}=t,{lastUpdatedTab:f}=t,{view:p}=t;F((()=>{g(),m(),n(6,o=!0)}));const g=()=>{n(3,s=u.find((e=>e.active))),s&&(n(4,i=h[s.groupId]),n(7,a=s.favIconUrl&&""!=s.favIconUrl))},m=()=>{n(5,r=u.filter((e=>e.index!=s.index&&e.favIconUrl&&""!=e.favIconUrl)).slice(0,5))};let v,A;let w;return e.$$set=e=>{"windowData"in e&&n(0,l=e.windowData),"tabs"in e&&n(1,u=e.tabs),"groups"in e&&n(2,h=e.groups),"lastUpdatedWindow"in e&&n(24,d=e.lastUpdatedWindow),"lastUpdatedTab"in e&&n(25,f=e.lastUpdatedTab),"view"in e&&n(23,p=e.view)},e.$$.update=()=>{50331649&e.$$.dirty[0]&&(null!=d&&d==l.id&&g(),null!=f&&f.windowId==l.id&&g())},[l,u,h,s,i,r,o,a,!0,v,A,w,undefined,()=>{n(9,v=!0)},()=>{n(9,v=!1),g()},({detail:e})=>{n(3,s=e),n(4,i=h[s.groupId]),n(7,a=s.favIconUrl&&""!=s.favIconUrl)},()=>{1==u.length?chrome.tabs.remove(u[0].id):chrome.windows.remove(l.id)},()=>{chrome.tabs.update(s.id,{active:!0}),chrome.windows.update(s.windowId,{focused:!0})},e=>{e.preventDefault(),n(11,w=!0)},e=>{e.preventDefault(),w&&n(11,w=!1)},e=>{e.preventDefault(),w&&n(11,w=!1);const t=parseInt(e.dataTransfer.getData("tabId"));chrome.tabs.move(t,{index:-1,windowId:l.id}),c("tabMoved",t)},e=>{e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("tabId",s.id)},()=>{n(23,p=De.tabs)},p,d,f,()=>n(10,A=!0),()=>n(10,A=!1)]}class sw extends ye{constructor(e){super(),we(this,e,nw,tw,o,{windowData:0,tabs:1,groups:2,lastUpdatedWindow:24,lastUpdatedTab:25,view:23},null,[-1,-1])}}function iw(e,t,n){const s=e.slice();return s[8]=t[n],s}function rw(t){let n,s,i,r,o,a,c=!t[4]&&aw(t);return{c(){n=I("div"),s=I("span"),i=E('No results could be found for "'),r=E(t[0]),o=E('"'),a=T(),c&&c.c(),S(n,"class","no-results-container svelte-18o99he")},m(e,t){w(e,n,t),m(n,s),m(s,i),m(s,r),m(s,o),m(n,a),c&&c.m(n,null)},p(e,t){1&t&&D(r,e[0]),e[4]?c&&(c.d(1),c=null):c?c.p(e,t):(c=aw(e),c.c(),c.m(n,null))},i:e,o:e,d(e){e&&y(n),c&&c.d()}}}function ow(e){let t,n,s=[],i=new Map,r=e[1];const o=e=>e[8];for(let t=0;t<r.length;t+=1){let n=iw(e,r,t),a=o(n);i.set(a,s[t]=cw(a,n))}return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=C()},m(e,i){for(let t=0;t<s.length;t+=1)s[t]&&s[t].m(e,i);w(e,t,i),n=!0},p(e,n){14&n&&(r=e[1],re(),s=fe(s,n,o,1,e,r,i,t.parentNode,de,cw,t,iw),oe())},i(e){if(!n){for(let e=0;e<r.length;e+=1)ae(s[e]);n=!0}},o(e){for(let e=0;e<s.length;e+=1)ce(s[e]);n=!1},d(e){for(let t=0;t<s.length;t+=1)s[t].d(e);e&&y(t)}}}function aw(t){let n,s,i;return{c(){n=I("div"),n.textContent="Search Bookmarks",S(n,"class","bookmarks-permission svelte-18o99he")},m(e,r){w(e,n,r),s||(i=k(n,"mousedown",t[5]),s=!0)},p:e,d(e){e&&y(n),s=!1,i()}}}function cw(e,t){let n,s,i;return s=new Hv({props:{tab:t[8],selectedTabs:t[2],lastSelectionUpdate:t[3]}}),s.$on("updateSelection",t[6]),{key:e,first:null,c(){n=C(),ge(s.$$.fragment),this.first=n},m(e,t){w(e,n,t),me(s,e,t),i=!0},p(e,n){t=e;const i={};2&n&&(i.tab=t[8]),4&n&&(i.selectedTabs=t[2]),8&n&&(i.lastSelectionUpdate=t[3]),s.$set(i)},i(e){i||(ae(s.$$.fragment,e),i=!0)},o(e){ce(s.$$.fragment,e),i=!1},d(e){e&&y(n),ve(s,e)}}}function lw(e){let t,n,s,i;const r=[ow,rw],o=[];function a(e,t){return e[1].length>0?0:1}return n=a(e),s=o[n]=r[n](e),{c(){t=I("div"),s.c(),S(t,"class","search-results svelte-18o99he")},m(e,s){w(e,t,s),o[n].m(t,null),i=!0},p(e,[i]){let c=n;n=a(e),n===c?o[n].p(e,i):(re(),ce(o[c],1,1,(()=>{o[c]=null})),oe(),s=o[n],s?s.p(e,i):(s=o[n]=r[n](e),s.c()),ae(s,1),s.m(t,null))},i(e){i||(ae(s),i=!0)},o(e){ce(s),i=!1},d(e){e&&y(t),o[n].d()}}}function uw(e,t,n){let{searchText:s}=t,{searchResults:i}=t,{selectedTabs:r=[]}=t,{lastSelectionUpdate:o=null}=t,{hasBookmarkPermission:a}=t,c=V();return e.$$set=e=>{"searchText"in e&&n(0,s=e.searchText),"searchResults"in e&&n(1,i=e.searchResults),"selectedTabs"in e&&n(2,r=e.selectedTabs),"lastSelectionUpdate"in e&&n(3,o=e.lastSelectionUpdate),"hasBookmarkPermission"in e&&n(4,a=e.hasBookmarkPermission)},[s,i,r,o,a,async()=>{await chrome.permissions.request({permissions:["bookmarks"]})&&c("searchBookmarks")},function(t){$.call(this,e,t)}]}class hw extends ye{constructor(e){super(),we(this,e,uw,lw,o,{searchText:0,searchResults:1,selectedTabs:2,lastSelectionUpdate:3,hasBookmarkPermission:4})}}function dw(t){let n;return{c(){n=I("div"),S(n,"class","divider svelte-1iv77rr")},m(e,t){w(e,n,t)},p:e,i:e,o:e,d(e){e&&y(n)}}}class fw extends ye{constructor(e){super(),we(this,e,null,dw,o,{})}}var pw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAj1JREFUaEPtmTtPFUEUgD9+AHT2EE00/gAeHUYqqdFCSHgkPAqhERoooQEKH4VCfJAABVBjpYEO5QcQTCDQU/IDNOdmN7kZdpZ5nLk3kN3y7jkz33fOzO5sbgt3/Gq54/xUAs3uYNWB+9yBcWAYaAO+AO9SyKZaQvPAogG8ACxpS6QQeAusWEBngVVNCW2BaeD9LYAzwActCU2BSeCTI9gU8NkxtjRMS2AU+OoJNAZ888y5Ea4hMAhsBoIMAVuBubW0WIGXwE4MAPAK2A0dI1bgFHhcMLmImVBFv0nqX+BJMwTagQsL/BVwYNx7BjywVLsDuAyRiO3A9+xtm88tVd4Dei0Ch8CAIbEBjITAa+yBp4BAPwI+An8ykDIBCekC3gBnmcxJswRs894mEMqb5DFaBFMJuLYodhNXS8i10ra4qgOWyrwA9o17/cCP2Iqb+ak6IB8uy8ZkcyUfOsFeqQTMN7QARr1xG7kHOoGfQKsx6TXQBxwHl7sgMUUHBP65BfJXJqHmoC0gR2g5rJVdctiT85PKpSngAp9Dq0loCdjgBVSuoq6oSGgIlMHnS8UlJmhJxQr4gPnEOsvECIQAheSUyoQKxIDE5N6QCRHQANAYoybjK6A2cfYtHP108hHoBo4KFmTM49BWkB7gt8tO9hGQPyzWjEFj4POhiiQmgHVtARnvX92gGvA2CefCOgfWgb8Gzl1b7FLFLEaW6ENg2yPHexP7jN2Q2JAONATMdZJKwLVSqeKqDqSqrOu4/wGsOmox80TaTAAAAABJRU5ErkJggg==",gw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAYRJREFUaEPtmFtuQyEMRJ2VtV1Zm5WlXVmikXolhGw8BqOKynwbMmc8PG5ucvi4Ha5fCuCvO1gdOKUD74TQb6KmLUlZ04vQl4h8ksIA8EHWPkSEAcBydxGBDnV4AE9S0FUGAK8TEVOudU2dIwA4BKciY+jW70IR911jsgG8jkLQjDFmZ1cB4DgGYuNFp+9km2tvn20DiGxcK4pMpLYBXO6zp08PwYjHnK0AsxCs+FQAZP7NOMMjcbLEY40f5e5J68B1TI4EeHHy5mr3RDoA2uoJ0TatdYm13dOO2SkATWR/7EYhtJtdi15bN4wmc/HANeQe8dHO+ghE34GRONS69wsDwDwlohAwBJvVfKQxP4qaLIDZPcHqNOsyAUYQzCNvCiYbYATBPLXDEDsALIijALSzfEuMdnWgANjNUB0wnKoIVYRYBypCi07VKVQRqggtOvBfIwSu/gP+qOc0ANoP+C1P6exvYiuMeBdF/7mmg73rHqAFrBYWwKqDq/OrA6sOrs4/vgMvibx0MXzYi3AAAAAASUVORK5CYII=";function mw(t){let n,s,i;return{c(){n=I("div"),n.textContent="Group",S(n,"class","action svelte-1qszx3y")},m(e,r){w(e,n,r),s||(i=k(n,"mousedown",t[2]),s=!0)},p:e,d(e){e&&y(n),s=!1,i()}}}function vw(t){let n,s,i;return{c(){n=I("div"),n.textContent="Move to New Window",S(n,"class","action svelte-1qszx3y")},m(e,r){w(e,n,r),s||(i=k(n,"mousedown",t[3]),s=!0)},p:e,d(e){e&&y(n),s=!1,i()}}}function Aw(t){let n,s,r,o,a;return{c(){n=I("div"),n.textContent="Save",s=T(),r=I("div"),r.textContent="Stash",S(n,"class","action svelte-1qszx3y"),S(r,"class","action svelte-1qszx3y")},m(e,i){w(e,n,i),w(e,s,i),w(e,r,i),o||(a=[k(n,"mousedown",t[5]),k(r,"mousedown",t[6])],o=!0)},p:e,d(e){e&&y(n),e&&y(s),e&&y(r),o=!1,i(a)}}}function ww(t){let n,s,i,r,o,a,c=1!=t[1]&&mw(t);function l(e,t){return e[0]==De.workspace?Aw:vw}let u=l(t),h=u(t);return{c(){n=I("div"),c&&c.c(),s=T(),h.c(),i=T(),r=I("div"),r.textContent="Close",S(r,"class","action svelte-1qszx3y"),S(n,"class","actions svelte-1qszx3y")},m(e,l){w(e,n,l),c&&c.m(n,null),m(n,s),h.m(n,null),m(n,i),m(n,r),o||(a=k(r,"mousedown",t[4]),o=!0)},p(e,[t]){1!=e[1]?c?c.p(e,t):(c=mw(e),c.c(),c.m(n,s)):c&&(c.d(1),c=null),u===(u=l(e))&&h?h.p(e,t):(h.d(1),h=u(e),h&&(h.c(),h.m(n,i)))},i:e,o:e,d(e){e&&y(n),c&&c.d(),h.d(),o=!1,a()}}}function yw(e,t,n){let{lastSelectionUpdate:s}=t,{selectedTabs:i}=t,{view:r}=t,o=V(),a=0;F((()=>{c()}));const c=()=>{let e=[];for(const t of i)t.groupId>-1&&!e.includes(t.groupId)&&e.push(t.groupId);n(1,a=e.length)};return e.$$set=e=>{"lastSelectionUpdate"in e&&n(8,s=e.lastSelectionUpdate),"selectedTabs"in e&&n(7,i=e.selectedTabs),"view"in e&&n(0,r=e.view)},e.$$.update=()=>{256&e.$$.dirty&&c()},[r,a,async()=>{const e=await chrome.tabs.group({tabIds:i.map((e=>e.id))});await chrome.tabGroups.update(e,{title:i[0].title}),n(7,i=[])},async()=>{const e=i.shift(),t=await chrome.windows.create({tabId:e.id,focused:!0});await chrome.tabs.move(i.map((e=>e.id)),{windowId:t.id,index:0}),n(7,i=[])},async()=>{chrome.tabs.remove(i.map((e=>e.id))),n(7,i=[])},async()=>{o("saveSelectedTabs")},async()=>{o("stashSelectedTabs")},i,s]}class bw extends ye{constructor(e){super(),we(this,e,yw,ww,o,{lastSelectionUpdate:8,selectedTabs:7,view:0})}}function Iw(t){let n,s,i=t[0],r=Dw(t);return{c(){r.c(),n=C()},m(e,t){r.m(e,t),w(e,n,t),s=!0},p(t,s){1&s&&o(i,i=t[0])?(re(),ce(r,1,1,e),oe(),r=Dw(t),r.c(),ae(r,1),r.m(n.parentNode,n)):r.p(t,s)},i(e){s||(ae(r),s=!0)},o(e){ce(r),s=!1},d(e){e&&y(n),r.d(e)}}}function Ew(t){let n;return{c(){n=I("div"),S(n,"class","action spacer svelte-1bpbk33")},m(e,t){w(e,n,t)},p:e,d(e){e&&y(n)}}}function Tw(t){let n,s,i,r,o;return{c(){n=I("div"),s=I("img"),c(s.src,i=pw)||S(s,"src",i),S(s,"alt","Merge Windows"),S(s,"class","svelte-1bpbk33"),S(n,"class","action svelte-1bpbk33")},m(e,i){w(e,n,i),m(n,s),r||(o=k(n,"mousedown",t[7]),r=!0)},p:e,d(e){e&&y(n),r=!1,o()}}}function Cw(t){let n,s,i,r,o;return{c(){n=I("div"),s=I("img"),c(s.src,i=gw)||S(s,"src",i),S(s,"alt","Split Groups"),S(s,"class","svelte-1bpbk33"),S(n,"class","action svelte-1bpbk33")},m(e,i){w(e,n,i),m(n,s),r||(o=k(n,"mousedown",t[6]),r=!0)},p:e,d(e){e&&y(n),r=!1,o()}}}function kw(e){let t;return{c(){t=E("s")},m(e,n){w(e,t,n)},d(e){e&&y(t)}}}function Sw(e){let t;return{c(){t=E("s")},m(e,n){w(e,t,n)},d(e){e&&y(t)}}}function Dw(e){let t,n,s,i,r,o,a,l,u,h,d,f,p,g,v,A,b,C,N;function R(e,t){return 1==e[1]&&e[3]>0?Cw:e[1]>1?Tw:Ew}let U=R(e),x=U(e),_=e[1]>0&&kw();l=new fw({});let O=e[2]>0&&Sw();return{c(){t=I("div"),x.c(),n=T(),s=I("div"),i=I("div"),r=E(e[1]),o=E(" Window"),_&&_.c(),a=T(),ge(l.$$.fragment),u=T(),h=I("div"),d=E(e[2]),f=E(" Tab"),O&&O.c(),p=T(),g=I("div"),v=I("img"),S(i,"class","count"),S(h,"class","count"),S(s,"class","counts svelte-1bpbk33"),c(v.src,A=$e)||S(v,"src",A),S(v,"alt","Create Window"),S(v,"class","svelte-1bpbk33"),S(g,"class","action svelte-1bpbk33"),S(t,"class","home-footer svelte-1bpbk33")},m(c,A){w(c,t,A),x.m(t,null),m(t,n),m(t,s),m(s,i),m(i,r),m(i,o),_&&_.m(i,null),m(s,a),me(l,s,null),m(s,u),m(s,h),m(h,d),m(h,f),O&&O.m(h,null),m(t,p),m(t,g),m(g,v),b=!0,C||(N=k(g,"mousedown",e[5]),C=!0)},p(e,s){U===(U=R(e))&&x?x.p(e,s):(x.d(1),x=U(e),x&&(x.c(),x.m(t,n))),(!b||2&s)&&D(r,e[1]),e[1]>0?_||(_=kw(),_.c(),_.m(i,null)):_&&(_.d(1),_=null),(!b||4&s)&&D(d,e[2]),e[2]>0?O||(O=Sw(),O.c(),O.m(h,null)):O&&(O.d(1),O=null)},i(e){b||(ae(l.$$.fragment,e),b=!0)},o(e){ce(l.$$.fragment,e),b=!1},d(e){e&&y(t),x.d(),_&&_.d(),ve(l),O&&O.d(),C=!1,N()}}}function Nw(e){let t,n,s=e[4]&&Iw(e);return{c(){s&&s.c(),t=C()},m(e,i){s&&s.m(e,i),w(e,t,i),n=!0},p(e,[n]){e[4]?s?(s.p(e,n),16&n&&ae(s,1)):(s=Iw(e),s.c(),ae(s,1),s.m(t.parentNode,t)):s&&(re(),ce(s,1,1,(()=>{s=null})),oe())},i(e){n||(ae(s),n=!0)},o(e){ce(s),n=!1},d(e){s&&s.d(e),e&&y(t)}}}function Rw(e,t,n){let s,i=V(),{windows:r}=t,{tabs:o}=t,{groups:a}=t,{lastSelectionUpdate:c}=t,{selectedTabs:l}=t,u=0,h=0,d=0;F((()=>{f(),n(4,s=!0)}));const f=()=>{n(1,u=r.length),n(2,h=o.length),n(3,d=a.length)};return e.$$set=e=>{"windows"in e&&n(8,r=e.windows),"tabs"in e&&n(9,o=e.tabs),"groups"in e&&n(10,a=e.groups),"lastSelectionUpdate"in e&&n(0,c=e.lastSelectionUpdate),"selectedTabs"in e&&n(11,l=e.selectedTabs)},e.$$.update=()=>{256&e.$$.dirty&&f()},[c,u,h,d,s,()=>{chrome.windows.create({focused:!0})},async()=>{const e=await chrome.tabGroups.query({});for(const t of e){const e=await chrome.windows.create(),n=(await chrome.tabs.query({windowId:e.id}))[0];await chrome.tabGroups.move(t.id,{windowId:e.id,index:-1}),await chrome.tabs.remove(n.id),await new Promise((e=>setTimeout(e,200)))}i("mergedWindows")},async()=>{const e={windowId:(await chrome.tabs.query({active:!0,currentWindow:!0}))[0].windowId,index:-1},t=await chrome.tabGroups.query({});for(const n of t)try{await chrome.tabGroups.move(n.id,e),await new Promise((e=>setTimeout(e,200)))}catch(e){console.log(e)}let n=await chrome.tabs.query({currentWindow:!1,groupId:-1});await chrome.tabs.move(n.map((e=>e.id)),e),i("mergedWindows")},r,o,a,l]}class Uw extends ye{constructor(e){super(),we(this,e,Rw,Nw,o,{windows:8,tabs:9,groups:10,lastSelectionUpdate:0,selectedTabs:11})}}function xw(e,t,n){const s=e.slice();return s[24]=t[n],s}function _w(e,t){let n,s,i,r;function o(...e){return t[12](t[24],...e)}function a(e){t[13](e)}let c={windowData:t[24],groups:t[3],tabs:t[2].filter(o),lastUpdatedWindow:t[5],lastUpdatedTab:t[4]};return void 0!==t[1]&&(c.view=t[1]),s=new sw({props:c}),j.push((()=>pe(s,"view",a))),s.$on("tabMoved",t[14]),{key:e,first:null,c(){n=C(),ge(s.$$.fragment),this.first=n},m(e,t){w(e,n,t),me(s,e,t),r=!0},p(e,n){t=e;const r={};1&n&&(r.windowData=t[24]),8&n&&(r.groups=t[3]),5&n&&(r.tabs=t[2].filter(o)),32&n&&(r.lastUpdatedWindow=t[5]),16&n&&(r.lastUpdatedTab=t[4]),!i&&2&n&&(i=!0,r.view=t[1],H((()=>i=!1))),s.$set(r)},i(e){r||(ae(s.$$.fragment,e),r=!0)},o(e){ce(s.$$.fragment,e),r=!1},d(e){e&&y(n),ve(s,e)}}}function Ow(e){let t,n,s=[],i=new Map,r=e[0];const o=e=>e[24];for(let t=0;t<r.length;t+=1){let n=xw(e,r,t),a=o(n);i.set(a,s[t]=_w(a,n))}return{c(){t=I("div");for(let e=0;e<s.length;e+=1)s[e].c();S(t,"class","windows svelte-tdd1ze")},m(e,i){w(e,t,i);for(let e=0;e<s.length;e+=1)s[e]&&s[e].m(t,null);n=!0},p(e,[n]){63&n&&(r=e[0],re(),s=fe(s,n,o,1,e,r,i,t,de,_w,null,xw),oe())},i(e){if(!n){for(let e=0;e<r.length;e+=1)ae(s[e]);n=!0}},o(e){for(let e=0;e<s.length;e+=1)ce(s[e]);n=!1},d(e){e&&y(t);for(let e=0;e<s.length;e+=1)s[e].d()}}}function Lw(e,t,n){let{tabs:s}=t,{activeTab:i}=t,{currentWindowId:r}=t,{windows:o}=t,{groups:a}=t,{lastUpdate:c}=t,{lastSelectionUpdate:l}=t,{lastUpdatedTab:u}=t,{lastUpdatedGroup:h}=t,{lastUpdatedWindow:d}=t,{view:f}=t,{selectedTabs:p}=t;F((()=>{g()}));const g=()=>{o.sort(((e,t)=>(t.id==r?1:0)-(e.id==r?1:0)))};return e.$$set=e=>{"tabs"in e&&n(2,s=e.tabs),"activeTab"in e&&n(6,i=e.activeTab),"currentWindowId"in e&&n(7,r=e.currentWindowId),"windows"in e&&n(0,o=e.windows),"groups"in e&&n(3,a=e.groups),"lastUpdate"in e&&n(8,c=e.lastUpdate),"lastSelectionUpdate"in e&&n(9,l=e.lastSelectionUpdate),"lastUpdatedTab"in e&&n(4,u=e.lastUpdatedTab),"lastUpdatedGroup"in e&&n(10,h=e.lastUpdatedGroup),"lastUpdatedWindow"in e&&n(5,d=e.lastUpdatedWindow),"view"in e&&n(1,f=e.view),"selectedTabs"in e&&n(11,p=e.selectedTabs)},e.$$.update=()=>{161&e.$$.dirty&&(n(0,o),n(5,d),n(7,r),o.sort(((e,t)=>(t.id==r?1:0)-(e.id==r?1:0))))},(()=>{const e="".toLowerCase();s.filter((t=>(t.title+t.url).toLowerCase().includes(e)))})(),[o,f,s,a,u,d,i,r,c,l,h,p,(e,t)=>t.windowId==e.id,function(e){f=e,n(1,f)},function(t){$.call(this,e,t)}]}class Pw extends ye{constructor(e){super(),we(this,e,Lw,Ow,o,{tabs:2,activeTab:6,currentWindowId:7,windows:0,groups:3,lastUpdate:8,lastSelectionUpdate:9,lastUpdatedTab:4,lastUpdatedGroup:10,lastUpdatedWindow:5,view:1,selectedTabs:11})}}var Mw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAfhJREFUaEPtmc8rRUEUxz9vb8FS5NeeSCk7slLYsZednSUbbFhaUf4FrMhS2FCSUBY2QrJWVnY6uq+mad57M/fO3B+aW6/e4pzvnM+cM+fOzK1R8adW8fiJAEVnMGagzBnoA+Tn8rwA7y4OWW1NJTQGbAFTKcXPgDXgJqW/k5sOMA8cOCmYjb+BJeDQg1ZTCR3gERj0OOhCaAgVoAd48xh8XerCg+YxcAnc6VoqwARwrhlsOg6+7mjvYv4D7ACrqpMNwIbDKGIbEkJCkQaxXY/JN4Do5gHRAXzJYCEA8oAYAe5DAjhUXUtTU0Yngb/mECoDLaNyMIgALl3IYWKtTUuXgWmgDbgGPiwwSgUwDlwlQZ8Ac1UD0GfT5kBVqgxEgKTkcnkPtAOyQRzW6lzdK6mbxacGC7uwEloGdi0WqWpiWtiFAUjwAuHyfAJdmkNhANIiV5IysoGQEjpKdrOqfWEApqBjF8qzC/3LDKjXNqYFawMtNrm8B0zBdAN7wECDBVt6AJtupNuUqgtFgDRdKM2s+fbR75qMizjU1aJvGNHrB17lj36guAVGQ4zoUfMUmKnr6QBDwIPHwUJI9aofUUxHuk5gH5gNMXoGTbkEWASeVY1mZ9I0n5gyxNfUteGnK5tDdaigvOhGAC/TmEEkZiDD5HlxrXwGfgEospkxPyQ0YAAAAABJRU5ErkJggg==";function Bw(e,t,n){const s=e.slice();return s[14]=t[n][0],s[15]=t[n][1],s}function Fw(e){let t,n,s,i,r,o;function a(){return e[6](e[14])}return{c(){t=I("div"),n=I("div"),i=T(),S(n,"class",s="color "+(e[0].color==e[14]?" selected":"")+" svelte-1aqfk23"),R(n,"background-color",e[15]),S(t,"class","color-container svelte-1aqfk23")},m(e,s){w(e,t,s),m(t,n),m(t,i),r||(o=k(n,"mousedown",a),r=!0)},p(t,i){e=t,1&i&&s!==(s="color "+(e[0].color==e[14]?" selected":"")+" svelte-1aqfk23")&&S(n,"class",s)},d(e){e&&y(t),r=!1,o()}}}function Vw(t){let n,s,r,o,a,c,l,u,h,d,f,p,g=Object.entries(qe),v=[];for(let e=0;e<g.length;e+=1)v[e]=Fw(Bw(t,g,e));return{c(){n=I("div"),s=I("div"),r=T(),o=I("div"),a=I("div"),c=I("input"),l=T(),u=I("div");for(let e=0;e<v.length;e+=1)v[e].c();S(s,"class","background svelte-1aqfk23"),S(c,"type","text"),S(c,"class","title-input svelte-1aqfk23"),S(c,"placeholder","Add Group"),c.autofocus="true",S(a,"class","title svelte-1aqfk23"),S(u,"class","colors svelte-1aqfk23"),S(o,"class","container svelte-1aqfk23"),S(o,"style",h="background-color: "+qe[t[0].color]),S(n,"class","modal svelte-1aqfk23")},m(e,i){w(e,n,i),m(n,s),m(n,r),m(n,o),m(o,a),m(a,c),N(c,t[0].title),m(o,l),m(o,u);for(let e=0;e<v.length;e+=1)v[e]&&v[e].m(u,null);c.focus(),f||(p=[k(s,"mousedown",t[3]),k(c,"input",t[5]),k(c,"blur",t[1]),k(c,"keydown",t[2])],f=!0)},p(e,[t]){if(1&t&&c.value!==e[0].title&&N(c,e[0].title),17&t){let n;for(g=Object.entries(qe),n=0;n<g.length;n+=1){const s=Bw(e,g,n);v[n]?v[n].p(s,t):(v[n]=Fw(s),v[n].c(),v[n].m(u,null))}for(;n<v.length;n+=1)v[n].d(1);v.length=g.length}1&t&&h!==(h="background-color: "+qe[e[0].color])&&S(o,"style",h)},i(e){d||z((()=>{d=ue(n,_e,{}),d.start()}))},o:e,d(e){e&&y(n),b(v,e),f=!1,i(p)}}}function $w(e,t,n){let s={title:"",color:"grey"};F((()=>{o()}));let i=[],r=[];const o=async()=>{let e=await chrome.bookmarks.search({url:null});e.sort(((e,t)=>t.dateGroupModified-e.dateGroupModified));const t=Date.now()-24192e5;i=e.filter((e=>e.title.includes("[space"))),r=e.filter((e=>e.dateGroupModified>t&&!e.title.includes("[space"))),a()},a=()=>{};let c=V();const l=e=>{n(0,s.color=e,s)};return[s,()=>{},async e=>{if("Enter"==e.key){const e=await(async()=>{const e=(await chrome.tabs.query({active:!0,currentWindow:!0}))[0];return await chrome.tabs.create({index:e.index+1})})(),t=await chrome.tabs.group({tabIds:e.id});await chrome.tabGroups.update(t,{title:s.title}),c("exitModal")}},()=>{c("exitModal")},l,function(){s.title=this.value,n(0,s)},e=>l(e)]}class Gw extends ye{constructor(e){super(),we(this,e,$w,Vw,o,{})}}function jw(t){let n,s;return n=new Gw({}),n.$on("exitModal",t[7]),{c(){ge(n.$$.fragment)},m(e,t){me(n,e,t),s=!0},p:e,i(e){s||(ae(n.$$.fragment,e),s=!0)},o(e){ce(n.$$.fragment,e),s=!1},d(e){ve(n,e)}}}function Qw(e){let t,n,s,i,r,o,a,c,l,u=e[2]>1?"s":"";return c=new fw({}),{c(){t=I("div"),n=E(e[2]),s=T(),i=I("span"),r=E("Group"),o=E(u),a=T(),ge(c.$$.fragment),S(t,"class","count")},m(e,u){w(e,t,u),m(t,n),m(t,s),m(t,i),m(i,r),m(i,o),w(e,a,u),me(c,e,u),l=!0},p(e,t){(!l||4&t)&&D(n,e[2]),(!l||4&t)&&u!==(u=e[2]>1?"s":"")&&D(o,u)},i(e){l||(ae(c.$$.fragment,e),l=!0)},o(e){ce(c.$$.fragment,e),l=!1},d(e){e&&y(t),e&&y(a),ve(c,e)}}}function qw(e){let t,n,s,r,o,a,l,u,h,d,f,p,g,v,A,b,C,N,R,U,x,_,O=e[0].length+"",L=e[0].length>1?"s":"",P=e[3]&&jw(e),M=e[2]>0&&Qw(e);return{c(){P&&P.c(),t=T(),n=I("div"),s=I("div"),r=I("img"),a=T(),l=I("div"),u=I("div"),M&&M.c(),h=T(),d=I("div"),f=E(O),p=T(),g=I("span"),v=E("Tab"),A=E(L),b=T(),C=I("div"),N=I("img"),c(r.src,o=Mw)||S(r,"src",o),S(r,"alt","Select All"),S(r,"class","svelte-1pswkvf"),S(s,"class","action svelte-1pswkvf"),S(d,"class","count"),S(u,"class","container svelte-1pswkvf"),S(l,"class","counts svelte-1pswkvf"),c(N.src,R=Jv)||S(N,"src",R),S(N,"alt","Create new tab"),S(N,"class","svelte-1pswkvf"),S(C,"class","action svelte-1pswkvf"),S(n,"class","main-container svelte-1pswkvf")},m(i,o){P&&P.m(i,o),w(i,t,o),w(i,n,o),m(n,s),m(s,r),m(n,a),m(n,l),m(l,u),M&&M.m(u,null),m(u,h),m(u,d),m(d,f),m(d,p),m(d,g),m(g,v),m(g,A),m(n,b),m(n,C),m(C,N),U=!0,x||(_=[k(s,"mousedown",e[5]),k(C,"mousedown",e[4])],x=!0)},p(e,n){e[3]?P?(P.p(e,n),8&n&&ae(P,1)):(P=jw(e),P.c(),ae(P,1),P.m(t.parentNode,t)):P&&(re(),ce(P,1,1,(()=>{P=null})),oe()),e[2]>0?M?(M.p(e,n),4&n&&ae(M,1)):(M=Qw(e),M.c(),ae(M,1),M.m(u,h)):M&&(re(),ce(M,1,1,(()=>{M=null})),oe()),(!U||1&n)&&O!==(O=e[0].length+"")&&D(f,O),(!U||1&n)&&L!==(L=e[0].length>1?"s":"")&&D(A,L)},i(e){U||(ae(P),ae(M),U=!0)},o(e){ce(P),ce(M),U=!1},d(e){P&&P.d(e),e&&y(t),e&&y(n),M&&M.d(),x=!1,i(_)}}}function Kw(t){let n,s,i=t[1],r=qw(t);return{c(){r.c(),n=C()},m(e,t){r.m(e,t),w(e,n,t),s=!0},p(t,[s]){2&s&&o(i,i=t[1])?(re(),ce(r,1,1,e),oe(),r=qw(t),r.c(),ae(r,1),r.m(n.parentNode,n)):r.p(t,s)},i(e){s||(ae(r),s=!0)},o(e){ce(r),s=!1},d(e){e&&y(n),r.d(e)}}}function Ww(e,t,n){V();let{tabs:s}=t,{selectedTabs:i}=t,{lastSelectionUpdate:r}=t;F((()=>{a()}));let o=0;const a=()=>{let e=[];for(const t of s)t.groupId>-1&&!e.includes(t.groupId)&&e.push(t.groupId);n(2,o=e.length)};let c;return e.$$set=e=>{"tabs"in e&&n(0,s=e.tabs),"selectedTabs"in e&&n(6,i=e.selectedTabs),"lastSelectionUpdate"in e&&n(1,r=e.lastSelectionUpdate)},[s,r,o,c,async()=>{const e=(await chrome.tabs.query({active:!0,currentWindow:!0}))[0],t=await chrome.tabs.create({index:e.index+1});e.groupId>-1&&await chrome.tabs.group({tabIds:t.id,groupId:e.groupId})},async()=>{const e=await chrome.tabs.query({currentWindow:!0});if(e.filter((e=>e.groupId>-1)).length>0)n(3,c=!0);else{let t=e.map((e=>e.id));await chrome.tabs.update(t[0],{active:!0}),await chrome.tabs.group({tabIds:t})}},i,()=>n(3,c=!1)]}class zw extends ye{constructor(e){super(),we(this,e,Ww,Kw,o,{tabs:0,selectedTabs:6,lastSelectionUpdate:1})}}function Hw(e,t,n){const s=e.slice();return s[25]=t[n],s}function Jw(t){let n,s,i=t[0],r=ey(t);return{c(){r.c(),n=C()},m(e,t){r.m(e,t),w(e,n,t),s=!0},p(t,s){1&s&&o(i,i=t[0])?(re(),ce(r,1,1,e),oe(),r=ey(t),r.c(),ae(r,1),r.m(n.parentNode,n)):r.p(t,s)},i(e){s||(ae(r),s=!0)},o(e){ce(r),s=!1},d(e){e&&y(n),r.d(e)}}}function Xw(e){let t,n;function s(...t){return e[15](e[25],...t)}return t=new MA({props:{group:e[5][e[25].groupId],lastGroupUpdate:e[10],lastSelectionUpdate:e[1],lastUpdate:e[0],lastUpdatedTab:e[6],user:e[2],db:e[3],isCollapsed:e[12].includes(e[25].groupId),tabs:e[4].filter(s)}}),t.$on("groupSaved",e[16]),t.$on("showWorkspaceView",e[17]),{c(){ge(t.$$.fragment)},m(e,s){me(t,e,s),n=!0},p(n,i){e=n;const r={};48&i&&(r.group=e[5][e[25].groupId]),1024&i&&(r.lastGroupUpdate=e[10]),2&i&&(r.lastSelectionUpdate=e[1]),1&i&&(r.lastUpdate=e[0]),64&i&&(r.lastUpdatedTab=e[6]),4&i&&(r.user=e[2]),8&i&&(r.db=e[3]),16&i&&(r.isCollapsed=e[12].includes(e[25].groupId)),16&i&&(r.tabs=e[4].filter(s)),t.$set(r)},i(e){n||(ae(t.$$.fragment,e),n=!0)},o(e){ce(t.$$.fragment,e),n=!1},d(e){ve(t,e)}}}function Yw(e){let t,n;return t=new Hv({props:{tab:e[25],group:e[5][e[25].groupId],selectedTabs:e[7],lastUpdatedTab:e[6],lastSelectionUpdate:e[1],dragoverItem:e[11]}}),t.$on("updateSelection",e[18]),t.$on("tabBookmarkAdded",e[19]),{c(){ge(t.$$.fragment)},m(e,s){me(t,e,s),n=!0},p(e,n){const s={};16&n&&(s.tab=e[25]),48&n&&(s.group=e[5][e[25].groupId]),128&n&&(s.selectedTabs=e[7]),64&n&&(s.lastUpdatedTab=e[6]),2&n&&(s.lastSelectionUpdate=e[1]),t.$set(s)},i(e){n||(ae(t.$$.fragment,e),n=!0)},o(e){ce(t.$$.fragment,e),n=!1},d(e){ve(t,e)}}}function Zw(e,t){let n,s,i,r,o=t[25].groupId>-1&&t[9][t[25].groupId]==t[25].index&&t[5][t[25].groupId]&&Xw(t),a=!t[5][t[25].groupId]?.collapsed&&Yw(t);return{key:e,first:null,c(){n=C(),o&&o.c(),s=T(),a&&a.c(),i=C(),this.first=n},m(e,t){w(e,n,t),o&&o.m(e,t),w(e,s,t),a&&a.m(e,t),w(e,i,t),r=!0},p(e,n){(t=e)[25].groupId>-1&&t[9][t[25].groupId]==t[25].index&&t[5][t[25].groupId]?o?(o.p(t,n),560&n&&ae(o,1)):(o=Xw(t),o.c(),ae(o,1),o.m(s.parentNode,s)):o&&(re(),ce(o,1,1,(()=>{o=null})),oe()),t[5][t[25].groupId]?.collapsed?a&&(re(),ce(a,1,1,(()=>{a=null})),oe()):a?(a.p(t,n),48&n&&ae(a,1)):(a=Yw(t),a.c(),ae(a,1),a.m(i.parentNode,i))},i(e){r||(ae(o),ae(a),r=!0)},o(e){ce(o),ce(a),r=!1},d(e){e&&y(n),o&&o.d(e),e&&y(s),a&&a.d(e),e&&y(i)}}}function ey(e){let t,n,s=[],i=new Map,r=e[4];const o=e=>e[25].id+""+e[25].index+e[25].updated;for(let t=0;t<r.length;t+=1){let n=Hw(e,r,t),a=o(n);i.set(a,s[t]=Zw(a,n))}return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=C()},m(e,i){for(let t=0;t<s.length;t+=1)s[t]&&s[t].m(e,i);w(e,t,i),n=!0},p(e,n){7935&n&&(r=e[4],re(),s=fe(s,n,o,1,e,r,i,t.parentNode,de,Zw,t,Hw),oe())},i(e){if(!n){for(let e=0;e<r.length;e+=1)ae(s[e]);n=!0}},o(e){for(let e=0;e<s.length;e+=1)ce(s[e]);n=!1},d(e){for(let t=0;t<s.length;t+=1)s[t].d(e);e&&y(t)}}}function ty(e){let t,n,s=e[8]&&Jw(e);return{c(){s&&s.c(),t=C()},m(e,i){s&&s.m(e,i),w(e,t,i),n=!0},p(e,[n]){e[8]?s?(s.p(e,n),256&n&&ae(s,1)):(s=Jw(e),s.c(),ae(s,1),s.m(t.parentNode,t)):s&&(re(),ce(s,1,1,(()=>{s=null})),oe())},i(e){n||(ae(s),n=!0)},o(e){ce(s),n=!1},d(e){s&&s.d(e),e&&y(t)}}}function ny(e,t,n){let s,i=V(),{user:r}=t,{db:o}=t,{tabs:a}=t,{groups:c}=t,{lastUpdatedTab:l}=t,{lastUpdate:u}=t,{lastSelectionUpdate:h}=t,{searchResults:d=[]}=t,{selectedTabs:f=[]}=t,{searchText:p}=t;F((()=>{v(),n(8,s=!0)}));let g={},m={};const v=()=>{n(9,g={}),m={},a.sort(((e,t)=>e.index-t.index));for(const e of a)e.groupId>-1&&null==g[e.groupId]&&n(9,g[e.groupId]=e.index,g)};let A=Date.now();return e.$$set=e=>{"user"in e&&n(2,r=e.user),"db"in e&&n(3,o=e.db),"tabs"in e&&n(4,a=e.tabs),"groups"in e&&n(5,c=e.groups),"lastUpdatedTab"in e&&n(6,l=e.lastUpdatedTab),"lastUpdate"in e&&n(0,u=e.lastUpdate),"lastSelectionUpdate"in e&&n(1,h=e.lastSelectionUpdate),"searchResults"in e&&n(13,d=e.searchResults),"selectedTabs"in e&&n(7,f=e.selectedTabs),"searchText"in e&&n(14,p=e.searchText)},e.$$.update=()=>{65&e.$$.dirty&&((()=>{a.sort(((e,t)=>e.index-t.index));let e=[],t=[];n(9,g={}),m={};for(const s of a)e.includes(s.index)?(t.push(s.index),i("foundDuplicates")):e.push(s.index),s.groupId>-1&&null==g[s.groupId]?n(9,g[s.groupId]=s.index,g):s.groupId>-1&&(m[s.groupId]=s.index)})(),v())},[u,h,r,o,a,c,l,f,s,g,A,undefined,[],d,p,(e,t)=>t.groupId==e.groupId,function(t){$.call(this,e,t)},function(t){$.call(this,e,t)},function(t){$.call(this,e,t)},function(t){$.call(this,e,t)}]}class sy extends ye{constructor(e){super(),we(this,e,ny,ty,o,{user:2,db:3,tabs:4,groups:5,lastUpdatedTab:6,lastUpdate:0,lastSelectionUpdate:1,searchResults:13,selectedTabs:7,searchText:14})}}var iy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAhtJREFUaEPtWG1OBDEIZU+mnkw9mXoyDbvbpEHgPVo2k01mEv+MDLwPyra9yJM/lyfHLyeBox08HTgd2FTgiBZ6FZF3AvePiHyguC4CCkqfb1RQRH6JmBGi+d6y+F0CQ81BQItlJFRRRv2B+RO5sEPgS0QGcFaxjIBHPFVfi64QUNAK3nuQYsgB5OC/misEsh5G+RAB2POWASpo4722GYtX1UeLGBEYuWDrDGAVAhF41DazCJaAfustatoJlkCkXAW8ErF5tH6Um1oPLAGv76vgIwL6fmWiXZ1lCHgKrYDPCESTDbrAEOhSXwnMQG2fe0LBtYAIeMrApMRWQfN6E8trpdQFRKCzfQhe7oJuJwD7kkEaxJQdRw54lqJvNvBfP7VrLm1ZBOYIAqWaiEBJjV3p7997Uy/EiQiU1HgQgadqIW8Rpz+aKw48cgqVxzYiUBlrGqt/8CCetFr7D5k31vSddWFWbtWhaD+UiowcYHeK8+RY3WqU24fdjUbKzEB3CURnAigwDLj3KzrQ7BBAudPpzBKIWknf22NhpYUi8HSOCoGMxKwSWzw6Y7OtTZ/IrIVZYY1lCGQ5SlOs6sAgkwFABLKrlRL4ilVa9MVYYa8Vx79XCKBvwoXMOMBcRs0F0IHfjuWy6nMxhkB2F+opwwCqXMe3jFGvhbzEzPVi0677loZxoLVgd7KTQLei1XynA1XFuuNPB7oVreb7A3+rijGhV+h7AAAAAElFTkSuQmCC",ry="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAmpJREFUaEPtmF1OxDAMhLMnA04GnAw4GWhQjSJje8bpVtuVti99aGL782/Sy7jz53Ln9o8HwK0j+IjAGSPwthll71vbWOr3KQSjX6cdL2OMzysTPDsdmfivMQZ1ogeA8A8nkUGYQVCIp1LqHcR8w3SHbRQAMGp+MkGRQZXSLsA7i0LWhRSIzJhKaSTXHOVTFXJo+lZtVIGI1uwBQPRaD5sDHQh4ixVeFQEYTlPG0zEArFcgUDM03Iksb1MLQgFQIZTQz84wYN8wIId2H1OmAmQFKyvaFHoA7M/SSrJNWjTG+C7c24GIAKLZI9eDAqD0bhUiArDhN58AzF9UrgIQeR/5qw67OXizM3yxdlvyr1wGEHnfFCvdKco8yIQDfNeKUglrytmwAjCHdRUiK6m2PAYQCfR72kqLhtA+TDIAn/9ZSK8FEQGUg60L0D3n0C7iotGugwqgLUw8dlQT+/AI0K6wE6LqeiF4N4UUgD1np+4Fic6BPcW5sjcCKJ3MItAxIjpSd/f7+zgdtgxALeS53frOo0K085/SBUdgK6S5nXrIqHUqEMrQ/FfILALYkB13zVD/PZsVXQjpZqYAZF3Fbk72PYqO91gHQrJNWlREAQb6ozXznAKh3rFpG83O8tU0ZQB75sRSDXQhGED1a6V7dmpFwEDYFbMCYHutrpRfNNKNzLqQv69Gv0JWizhKRzkSShErXpuN6EQAnsZ6OGjlji2lEPsd6D3InAKHPG2Gz6midKflIjalVffBN+mPciGkDcG8xQw+4nsL4owA0ZxI7yFnBfAQaWM4MwAgsoL/S92zA9AaewBQFx284Adhvc0x3Bt5DgAAAABJRU5ErkJggg==";function oy(e,t,n){const s=e.slice();return s[8]=t[n],s}function ay(e){let t,n,s,i,r,o,a,l,u=e[8].title+"";function h(){return e[5](e[8])}return{c(){var a;t=I("div"),n=I("img"),i=T(),r=I("span"),o=E(u),S(n,"class",(null==(a=e[8].icon?"icon":"")?"":a)+" svelte-ndqqf8"),c(n.src,s=e[8].icon??e[8].iconUrl)||S(n,"src",s),S(n,"alt",""),S(t,"class","menu-item svelte-ndqqf8")},m(e,s){w(e,t,s),m(t,n),m(t,i),m(t,r),m(r,o),a||(l=k(t,"mousedown",h),a=!0)},p(t,n){e=t},d(e){e&&y(t),a=!1,l()}}}function cy(e){let t,n,s,r,o,a,l,u,h,d,f,p,g,v=e[2]?"Synced":" Sync Disabled",A=e[3],C=[];for(let t=0;t<A.length;t+=1)C[t]=ay(oy(e,A,t));return{c(){t=I("div");for(let e=0;e<C.length;e+=1)C[e].c();n=T(),s=I("div"),r=I("img"),a=T(),l=I("span"),u=E(v),S(r,"class","icon svelte-ndqqf8"),c(r.src,o=e[2]?iy:ry)||S(r,"src",o),S(r,"alt",""),S(s,"class","menu-item svelte-ndqqf8"),S(t,"class","menu svelte-ndqqf8")},m(i,o){w(i,t,o);for(let e=0;e<C.length;e+=1)C[e]&&C[e].m(t,null);m(t,n),m(t,s),m(s,r),m(s,a),m(s,l),m(l,u),f=!0,p||(g=[k(s,"mousedown",e[6]),k(t,"mouseleave",e[7])],p=!0)},p(e,[s]){if(24&s){let i;for(A=e[3],i=0;i<A.length;i+=1){const r=oy(e,A,i);C[i]?C[i].p(r,s):(C[i]=ay(r),C[i].c(),C[i].m(t,n))}for(;i<C.length;i+=1)C[i].d(1);C.length=A.length}(!f||4&s&&!c(r.src,o=e[2]?iy:ry))&&S(r,"src",o),(!f||4&s)&&v!==(v=e[2]?"Synced":" Sync Disabled")&&D(u,v)},i(e){f||(z((()=>{f&&(d&&d.end(1),h=ue(t,Oe,{}),h.start())})),f=!0)},o(e){h&&h.invalidate(),d=he(t,Oe,{}),f=!1},d(e){e&&y(t),b(C,e),e&&d&&d.end(),p=!1,i(g)}}}function ly(e,t,n){let{showMenu:s}=t,{user:i}=t,{view:r}=t;const o=[{iconUrl:"https://www.google.com/images/icons/product/chrome_web_store-32.png",title:"Webstore Page",url:"https://chrome.google.com/webstore/detail/window-manager/npaccibollphhdfghmmlbmpljhdiaehh"},{icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABCNJREFUaEPtmXuoT1kUxz+XDDLGKzJDBnlE/lEIGQ3l0SAl5f2H5z9KeUbKH/zjzZQoGlODaZCSZ8gj7/KYf5jE1ESZoUQexSjN9NXet922z/mde84+F3VX/brds/dee33XXnuttdeqojz6Euhi2P8JvCpjq6oSmPYDVgIjPN4ngOXAjZh7xgYwDDgKNEgQ8g0wCjgTC0RMAE2Bh4D+ptEzoB3wOgaILAC+BToA9Sts+AOw2JnzBFhh/l8FtHLGVgMyqTR6BzwA7qdNSgMwBPgJ6JRTU4OBC2ateOU1m7+AGcC5kBxJAAYCl3IKbpf5vP8ryM9VSDWrJAB3ga4FN5wA7DM8pgK7CvLTSXT2eYQAtAEeF9zMLt9r7s74SPzaG0eRegKDHNu1E08CVyIJkZWNzFhu2aXhwCn3Q+gEvgfOegsXARuy7hxpnvZc5/EaAxypAxBJw5XY1J2Aq6GFwMaAysYCvSupssL4dd+uzfyoJxACMAvYUVB4u1yR9ueA44h2iUMAZgPbIwGYCewsE8ACYFNJJnQTOBTgHdWE6uJADlOrOwFXaZ+9CZUZB6Soy4ASRl9ppbrRmHFAiaJOuVYBxIwDpQOYD2wuKQ68NXHgVoB/H2AiMB1oCeROp5MCWQ7vmGtJI1MsO5/3PVBbAPRkbA38ngCzsV9PyvoiS/JCudTpLZoDjAb6Am3NmCp4SjEuAqohqRgWpKwAyogDLYDfAL1z0+gfYBxwNTQpK4AkE1KdU5qrRLeB/c4kXc7DjsbtkAphMh9dXFVHXFoKrPE3ygog5IVqEgcksK1KNwP+AL7xhHkJfGW+zQW2BLSi8swB93tWAKETSNrE31c10JHOx1+AaQHh/jZFXw1NAn4NzNFd6OHWrYoAaALMAxpWsB+VQfRsFMmPh3J/jWUBoHnHTIn+PcOsAGJd4tPA0ATAuqzWrCYDe1IU09FWrWsbgEqW/uW0ctYEgNyuGimZTyBGIFN/QD0D0UFA7+CnFczPHe7vlDeX2Kpd1hOIAUANv3tGomUmQNVA/vdTpQApQu5UbjV4AgNMfu4ylycJBpIKEqjLou6MJblKdS+leQlgAWn8X0fDMrOezrp6JqFTmV6kOKHKdxCAfPHzmqomZb6ySJsKKBn7LmFuVi+k5d0s+KQGx3HPdxfBo3arfW39aFxviF9WAOo3VzcSkwCoi6iQrsywKK13mn/dgTsFT0AmaZuHQROy/HVZ9IhR+FY+npdc9yge6mSuDTB7BHxtvk8BdgfmKKfq5X7P0mbVfHVLvsiLwKTGL5z16vbILfqkLv81I7xA+CThBaKasgIoIHtwqVLpbYAagT6pL6zetEv6pvzogzbXxwJghVOer1508wQNqTW71ZhdsLP/sQFYuWU6Srn1Exi9xmRK+qVG608FQG4T/R/iYfkx+v9TdwAAAABJRU5ErkJggg==",title:"Request Feature",url:"https://docs.google.com/forms/d/e/1FAIpQLSdLZCqil9YIDLXFSZoQGdpque4-tzLjL1cpoHCIR54ZJuu97A/viewform?usp=sf_link"},{icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABGVJREFUaEPtmXnIj1kUxz+vP2RkxlL2NIbsGeugkLFmTZGtZoYkNU2ZLP+MCE2NPyxlSEpRamRPkqXGDDXW8seYyS7G0BBCTDOJ6Pt2f7pd93me+9znXXrznj9/zzn3nO89yz3n/Mqo4VRWw+2nFkB1e/C998BXwGXgXIQnmgDfASeB/RHy5SJFPLAOmGcUzwa25jCiEfAL0MvIrAEW5ZB/y1oEwG2gjaV0IbA2wIgGwM9Af4v3ADAxQPYdliIAvgE2OCeuBBab3z4AugGvTJj9B9QHjgKDLLm/gOHAjaoGIH3zPbeueG4F9HMM+hWoCwx0jP8cuBVjfNEcKOlU6KyOMOBf4yF5IJqKhFBJ6SRgC9Awwgp55UvgboRs4SqkGN8FjI9VbuTkgSFAlCeKeEDJOCrD+FJits/guwr0BJTouSgWgB6gHxI0bQf2AL8BDwxPM1N5pgNTEuR+BL7NZX3gQ9YH+NA6uA6wF9BjZNM/wBzgUIYRqvebgBYePpXdi3lApHlAD84poHvAgYpfhcCTAF6xNAZ+dx7CJFHl2Uzgfx9DGgDV8bOBBo0FDgfyltjGAQcDZRLPz/LAH0DbDCU7AcV2DClXJmcI3gGGAdfyekD8Sr6uluD3ThugTyOAYzHWA6M9nlPyLzXnvTTFIPH4vFXoOuCWRCXjfUvDXGA50NLRquZvhXn0Sp9aA7phm9RWfBJ6IXkBqE7Xsw5/CDR1lKlFUNPmIyW5Etimx56KFmxXMKPR+NpRrmHE7iz1WQNOpwQAyqlPnW+ngQHOb8F2BTMmADgBqJu0Se/GAkDh4dIST0wfN62EzRtsVxajKtBUKySWORb5AISGb4nPB0C5InoB7E6qQGJIA9AuYMioLADuJXSMKaNDzdyadqNVBWAMcMRnSFYI+dxrn1MVALaZVsJ7kVkAXCG3CiUBkMs1Vtqkfummx4pKTeIYAFqvzEqIu82AHjqbqhWAWl+1wDa5j5397bnTmuubzujinBEcGcGMRsFT4KMMZYpZzbk++gn4wvnghqXmCjf8EgtJCAB7oNEg4r6ymgPU29vUIeEhU7jY1Bs47/x2wZrM9A5oJokCoIHmjCdE3MPWWyvGNF2+bxuBrzOE1Nx9BqjveofSPKDVnwCEUA9AN5eHfLefJD8hafjJGmj+BD4OsEputjduASLll2PvR5Nk5IG+wKO8HhC/O9DoN+WAcsGlfaZ8PsuwXgswLcK0EHNJe1V1pyXSHJwaBSFJ7LNnBzDN80EPlbYOapt9pHW6Nhq+gUWT2OAQ19k8sQCaA1dS1ol/m+8KQenQWyHP2et42w7ddOeY7VwsAClXXGoH5E5keS9Rb4vWk/JAbioCQMqU4Bros1aHSYZpTh4JaLUYRUUBSKn+61oFzAC08A0hhYxWKvp/wVvfQw4RT0UAKOnSw6fpTUAU8+5W4h5wCdDuVLukrGoVhKEiAbgK5Q0lpv5i0lIq9+Y5BEFlAgjRX5inFkDhKyx4QI33wBvHb7sxb4NZNQAAAABJRU5ErkJggg==",title:"Report Bug",url:"https://docs.google.com/forms/d/e/1FAIpQLSd1mztaIj3bvp0HvqMIbw1G0d_OXmbLYVRMqD8bsv-07WNt3g/viewform?usp=sf_link"}],a=e=>{e.url?chrome.tabs.create({url:e.url}):e.onClick&&e.onClick()};return e.$$set=e=>{"showMenu"in e&&n(0,s=e.showMenu),"user"in e&&n(2,i=e.user),"view"in e&&n(1,r=e.view)},[s,r,i,o,a,e=>a(e),()=>n(1,r=De.signin),()=>n(0,s=!1)]}class uy extends ye{constructor(e){super(),we(this,e,ly,cy,o,{showMenu:0,user:2,view:1})}}function hy(e){let t,n,s,i;function r(t){e[12](t)}function o(t){e[13](t)}let a={};return void 0!==e[2]&&(a.showMenu=e[2]),void 0!==e[0]&&(a.view=e[0]),t=new uy({props:a}),j.push((()=>pe(t,"showMenu",r))),j.push((()=>pe(t,"view",o))),{c(){ge(t.$$.fragment)},m(e,n){me(t,e,n),i=!0},p(e,i){const r={};!n&&4&i&&(n=!0,r.showMenu=e[2],H((()=>n=!1))),!s&&1&i&&(s=!0,r.view=e[0],H((()=>s=!1))),t.$set(r)},i(e){i||(ae(t.$$.fragment,e),i=!0)},o(e){ce(t.$$.fragment,e),i=!1},d(e){ve(t,e)}}}function dy(e){let t,n,s,r,o,a,l,u,h,d,f,p,g,v,A,b,E,C,D,N,R,U,x,_,O,L,P,M;function B(t){e[7](t)}let F={};void 0!==e[1]&&(F.searchText=e[1]),s=new Ve({props:F}),j.push((()=>pe(s,"searchText",B)));let V=e[2]&&hy(e);return{c(){t=I("div"),n=I("div"),ge(s.$$.fragment),o=T(),a=I("div"),l=I("img"),d=T(),f=I("div"),p=I("img"),A=T(),b=I("div"),E=I("img"),N=T(),R=I("div"),U=I("img"),O=T(),V&&V.c(),c(l.src,u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAf1JREFUaEPtmU0rRkEUx3/PN7CyJfYiSsqClY2UrMhGPoEoS2yRpaWUBUslJSVWbFD2CLGxki9A5+m5GtPca2bue+bUU0+38/Y/5z935sxtUHNp1Dx/0gJoA3oLKMI98GqK4wugHdgGpgpIPgpxBawDh2pMHwA9wF2BieuhlltAms99AFwD/SUCkNAzwL4PgCHgsuTkJfwOMO8DYBVYqQCAC2A0ACixE5l2QFopDvOUL815AKAWJHTAgnuBQlGRTPtAoFAeFJoAugA5Luui78RrFgkkqTwCb8BZgpL1GugGNoDJlEn5mC8CWzGG1gD2gFmf6BnZzAG7Bl9WAMaAk4wS8XXzBPQBH5oDKwBVOWkKfX9NXYAVgHNgxLd0GdrJS0GKqcr/BZD3KVOqrHc90w74zMwubJLkhbqqCAC9cLqO8ThtWgNlALApwAEwLYpqgnUC8EOzOgI4BWTPakrdANwAAyrHqgjAdDh8B56BY32BVBWAvpHFLuwAwOadl6ATtw+EDpjeUimLbTQPHQiLOCWvAoX+opDPlYk+PUmM6Jn6P2qe/so0zQNWG9lCwrVGSqY4mTvd9KkdkA938gGvTJGzzrhLAvrAstS62HLxkaVuB/Di4tA0cQ0Dm8Cgi6OUukeAUPjB1U/SyNgJyC9vuQU+fYPkPfP65mVtV3sA344ikzED24CtAAAAAElFTkSuQmCC")||S(l,"src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAf1JREFUaEPtmU0rRkEUx3/PN7CyJfYiSsqClY2UrMhGPoEoS2yRpaWUBUslJSVWbFD2CLGxki9A5+m5GtPca2bue+bUU0+38/Y/5z935sxtUHNp1Dx/0gJoA3oLKMI98GqK4wugHdgGpgpIPgpxBawDh2pMHwA9wF2BieuhlltAms99AFwD/SUCkNAzwL4PgCHgsuTkJfwOMO8DYBVYqQCAC2A0ACixE5l2QFopDvOUL815AKAWJHTAgnuBQlGRTPtAoFAeFJoAugA5Luui78RrFgkkqTwCb8BZgpL1GugGNoDJlEn5mC8CWzGG1gD2gFmf6BnZzAG7Bl9WAMaAk4wS8XXzBPQBH5oDKwBVOWkKfX9NXYAVgHNgxLd0GdrJS0GKqcr/BZD3KVOqrHc90w74zMwubJLkhbqqCAC9cLqO8ThtWgNlALApwAEwLYpqgnUC8EOzOgI4BWTPakrdANwAAyrHqgjAdDh8B56BY32BVBWAvpHFLuwAwOadl6ATtw+EDpjeUimLbTQPHQiLOCWvAoX+opDPlYk+PUmM6Jn6P2qe/so0zQNWG9lCwrVGSqY4mTvd9KkdkA938gGvTJGzzrhLAvrAstS62HLxkaVuB/Di4tA0cQ0Dm8Cgi6OUukeAUPjB1U/SyNgJyC9vuQU+fYPkPfP65mVtV3sA344ikzED24CtAAAAAElFTkSuQmCC"),S(l,"alt","Windows"),S(l,"class","svelte-115sxnb"),S(a,"class",h="action"+(e[0]==De.windows?" selected":"")+" svelte-115sxnb"),c(p.src,g="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAZ1JREFUaEPtmDsvBkEUhp+vFz9BqVTT0RCRECUtjUhcGtcChWvjkoiGllJIRGjoqJVKP0H8ABnZTxQ2Z/fsbN5sMpNsN3ve93nPzuzutGj4aDXcPwlA3cHUgdSBiglYj1A/0AOMV9Tx3n4NvAHPeQUsgF1gxase6b49YNUL8ASELihHSH/ACzAHHCvdA/PAiRcgpD8E9IogXoGHKmtA5Lu4rLWIi1cSzUwAouB/ZYt2QLWV5r7A2gQWwDBwBHSLkn4HFoB77zZ6mBUQ+f+RDQEuegEugQmle+AKmPQCTAHnYoBp4MIL0An0ZZeC4wUI16cXQGG6lKa1C5UqppicABSp/9W0OtCR/VIOiow+Zr+UX95FvATsi8y3ZZeBAy/ADTAqBrgFxrwAa8C2GGAd2PECjACzQPioU4zwEXcK3HkBFKZLaVq7UKliiskJQJF6mReZ2p+pbz1CXdnZ6IxZqZ4JZ0A4G/3w7kKbwEY93gpX3QKCj3+H1YF0uFs45/yJ6XA3Qoj1lbDWQH3KkSongEhBusukDriji3Rj4zvwDVx8MTEx+quFAAAAAElFTkSuQmCC")||S(p,"src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAZ1JREFUaEPtmDsvBkEUhp+vFz9BqVTT0RCRECUtjUhcGtcChWvjkoiGllJIRGjoqJVKP0H8ABnZTxQ2Z/fsbN5sMpNsN3ve93nPzuzutGj4aDXcPwlA3cHUgdSBiglYj1A/0AOMV9Tx3n4NvAHPeQUsgF1gxase6b49YNUL8ASELihHSH/ACzAHHCvdA/PAiRcgpD8E9IogXoGHKmtA5Lu4rLWIi1cSzUwAouB/ZYt2QLWV5r7A2gQWwDBwBHSLkn4HFoB77zZ6mBUQ+f+RDQEuegEugQmle+AKmPQCTAHnYoBp4MIL0An0ZZeC4wUI16cXQGG6lKa1C5UqppicABSp/9W0OtCR/VIOiow+Zr+UX95FvATsi8y3ZZeBAy/ADTAqBrgFxrwAa8C2GGAd2PECjACzQPioU4zwEXcK3HkBFKZLaVq7UKliiskJQJF6mReZ2p+pbz1CXdnZ6IxZqZ4JZ0A4G/3w7kKbwEY93gpX3QKCj3+H1YF0uFs45/yJ6XA3Qoj1lbDWQH3KkSongEhBusukDriji3Rj4zvwDVx8MTEx+quFAAAAAElFTkSuQmCC"),S(p,"alt","Tabs"),S(p,"class","svelte-115sxnb"),S(f,"class",v="action"+(e[0]==De.tabs?" selected":"")+" svelte-115sxnb"),c(E.src,C="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAY1JREFUaEPtWVEWAiEIpJNVJ6tOVp2s3rwX5SKKspvbvvBXUUaHUWFHvnbwmXVb3SyLnTWg0H8mopPT1mN2ISKsmbWtAIDjKogtAQCIIxFNaLU1AHAeIN7NCwBBPCKQZZwtBsATiB6bhzD6PwBMk2/SBbta0vtZJ3AdxHNmiSaTbgCjnWcQUiZdAEbfsmmcyiB1AVhr9xlIKu2LAZhcHh49LNhA56VApDRaDID3wrOwanQNAFoMxAl0/CuCQkEhS3qS/lAhTV2CQkGhz/8gnhLaC7GDIebQUKFQIZMk9QFBoaBQUCivM8R/wPuYQ3YBWYb7i1ZqRUVQ7idUiB3X8qfF0lACUqbQh1Go5riM7RKQ4SfQ47QmUACCxvQaBgDHqmXR5qgogxlCoVZHkZxFEM8pwaaXqxZXZpGvNzuNCbGbskjBNOkBk5WQrJ3TnhJADSm1Wslxza51UyzVyuYupQxrIHoclwvWgHQ7j8mtnGd6GdVqWdZpyf60TLsvULBpTgtA0yRrDgoAa+4+1n4CACHJMeXNlhcAAAAASUVORK5CYII=")||S(E,"src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAY1JREFUaEPtWVEWAiEIpJNVJ6tOVp2s3rwX5SKKspvbvvBXUUaHUWFHvnbwmXVb3SyLnTWg0H8mopPT1mN2ISKsmbWtAIDjKogtAQCIIxFNaLU1AHAeIN7NCwBBPCKQZZwtBsATiB6bhzD6PwBMk2/SBbta0vtZJ3AdxHNmiSaTbgCjnWcQUiZdAEbfsmmcyiB1AVhr9xlIKu2LAZhcHh49LNhA56VApDRaDID3wrOwanQNAFoMxAl0/CuCQkEhS3qS/lAhTV2CQkGhz/8gnhLaC7GDIebQUKFQIZMk9QFBoaBQUCivM8R/wPuYQ3YBWYb7i1ZqRUVQ7idUiB3X8qfF0lACUqbQh1Go5riM7RKQ4SfQ47QmUACCxvQaBgDHqmXR5qgogxlCoVZHkZxFEM8pwaaXqxZXZpGvNzuNCbGbskjBNOkBk5WQrJ3TnhJADSm1Wslxza51UyzVyuYupQxrIHoclwvWgHQ7j8mtnGd6GdVqWdZpyf60TLsvULBpTgtA0yRrDgoAa+4+1n4CACHJMeXNlhcAAAAASUVORK5CYII="),S(E,"alt","Saved"),S(E,"class","svelte-115sxnb"),S(b,"class",D="action"+(e[0]==De.saved?" selected":"")+" svelte-115sxnb"),c(U.src,x=Qe)||S(U,"src",x),S(U,"alt","More"),S(U,"class","svelte-115sxnb"),S(R,"class",_="action more"+(e[2]?" selected":"")+" svelte-115sxnb"),S(n,"class","container svelte-115sxnb"),S(t,"class","header svelte-115sxnb")},m(i,r){w(i,t,r),m(t,n),me(s,n,null),m(n,o),m(n,a),m(a,l),m(n,d),m(n,f),m(f,p),m(n,A),m(n,b),m(b,E),m(n,N),m(n,R),m(R,U),m(t,O),V&&V.m(t,null),L=!0,P||(M=[k(a,"mousedown",e[8]),k(f,"mousedown",e[9]),k(b,"mousedown",e[10]),k(R,"mousedown",e[11])],P=!0)},p(e,[n]){const i={};!r&&2&n&&(r=!0,i.searchText=e[1],H((()=>r=!1))),s.$set(i),(!L||1&n&&h!==(h="action"+(e[0]==De.windows?" selected":"")+" svelte-115sxnb"))&&S(a,"class",h),(!L||1&n&&v!==(v="action"+(e[0]==De.tabs?" selected":"")+" svelte-115sxnb"))&&S(f,"class",v),(!L||1&n&&D!==(D="action"+(e[0]==De.saved?" selected":"")+" svelte-115sxnb"))&&S(b,"class",D),(!L||4&n&&_!==(_="action more"+(e[2]?" selected":"")+" svelte-115sxnb"))&&S(R,"class",_),e[2]?V?(V.p(e,n),4&n&&ae(V,1)):(V=hy(e),V.c(),ae(V,1),V.m(t,null)):V&&(re(),ce(V,1,1,(()=>{V=null})),oe())},i(e){L||(ae(s.$$.fragment,e),ae(V),L=!0)},o(e){ce(s.$$.fragment,e),ce(V),L=!1},d(e){e&&y(t),ve(s),V&&V.d(),P=!1,i(M)}}}function fy(e,t,n){let s,{user:i}=t,{view:r}=t,{windowCount:o}=t,{tabCount:a}=t,{showSearch:c}=t,{searchText:l}=t;return e.$$set=e=>{"user"in e&&n(3,i=e.user),"view"in e&&n(0,r=e.view),"windowCount"in e&&n(4,o=e.windowCount),"tabCount"in e&&n(5,a=e.tabCount),"showSearch"in e&&n(6,c=e.showSearch),"searchText"in e&&n(1,l=e.searchText)},[r,l,s,i,o,a,c,function(e){l=e,n(1,l)},()=>n(0,r=De.windows),()=>n(0,r=De.tabs),()=>n(0,r=De.saved),()=>n(2,s=!0),function(e){s=e,n(2,s)},function(e){r=e,n(0,r)}]}class py extends ye{constructor(e){super(),we(this,e,fy,dy,o,{user:3,view:0,windowCount:4,tabCount:5,showSearch:6,searchText:1})}}function gy(e,t,n){const s=e.slice();return s[25]=t[n],s}function my(e){let t,n,s,r,o,a,c,l,u;function h(e,t){return e[6]?Ay:vy}let d=h(e),f=d(e);function p(e,t){return e[3]?yy:wy}let g=p(e),v=g(e),A=e[5]&&by(e),b=e[4]&&Iy(e);return{c(){t=I("div"),n=I("div"),f.c(),s=T(),v.c(),o=T(),A&&A.c(),a=T(),b&&b.c(),S(n,"class","container svelte-1vgnieg"),S(n,"style",r="background-color: "+qe[e[0].color??"grey"]+";"+(e[5]?"border-radius: 5px 5px 0px 0px;":"")),S(t,"class","workspace svelte-1vgnieg")},m(i,r){w(i,t,r),m(t,n),f.m(n,null),m(n,s),v.m(n,null),m(t,o),A&&A.m(t,null),m(t,a),b&&b.m(t,null),c=!0,l||(u=[k(t,"mouseenter",e[19]),k(t,"mouseleave",e[20])],l=!0)},p(e,i){d===(d=h(e))&&f?f.p(e,i):(f.d(1),f=d(e),f&&(f.c(),f.m(n,s))),g===(g=p(e))&&v?v.p(e,i):(v.d(1),v=g(e),v&&(v.c(),v.m(n,null))),(!c||33&i&&r!==(r="background-color: "+qe[e[0].color??"grey"]+";"+(e[5]?"border-radius: 5px 5px 0px 0px;":"")))&&S(n,"style",r),e[5]?A?(A.p(e,i),32&i&&ae(A,1)):(A=by(e),A.c(),ae(A,1),A.m(t,a)):A&&(re(),ce(A,1,1,(()=>{A=null})),oe()),e[4]?b?(b.p(e,i),16&i&&ae(b,1)):(b=Iy(e),b.c(),ae(b,1),b.m(t,null)):b&&(re(),ce(b,1,1,(()=>{b=null})),oe())},i(e){c||(ae(A),ae(b),c=!0)},o(e){ce(A),ce(b),c=!1},d(e){e&&y(t),f.d(),v.d(),A&&A.d(),b&&b.d(),l=!1,i(u)}}}function vy(e){let t,n,s,i,r,o,a,c,l=(e[0]?.title??"Untitled Group")+"",u=e[0].tabs.length+"";return{c(){t=I("div"),n=I("span"),s=E(l),i=T(),r=I("div"),o=E("("),a=E(u),c=E(")"),S(n,"class","text svelte-1vgnieg"),S(r,"class","count svelte-1vgnieg"),S(t,"class","title svelte-1vgnieg")},m(e,l){w(e,t,l),m(t,n),m(n,s),m(t,i),m(t,r),m(r,o),m(r,a),m(r,c)},p(e,t){1&t&&l!==(l=(e[0]?.title??"Untitled Group")+"")&&D(s,l),1&t&&u!==(u=e[0].tabs.length+"")&&D(a,u)},d(e){e&&y(t)}}}function Ay(e){let t,n,s,r;return{c(){t=I("input"),S(t,"type","text"),S(t,"class","title-input svelte-1vgnieg"),S(t,"placeholder",n="Enter "+(e[0]?.size?"Workspace":"Group")),t.autofocus="true"},m(n,i){w(n,t,i),N(t,e[0].title),t.focus(),s||(r=[k(t,"input",e[17]),k(t,"blur",e[11]),k(t,"keydown",e[12])],s=!0)},p(e,s){1&s&&n!==(n="Enter "+(e[0]?.size?"Workspace":"Group"))&&S(t,"placeholder",n),1&s&&t.value!==e[0].title&&N(t,e[0].title)},d(e){e&&y(t),s=!1,i(r)}}}function wy(e){let t,n;return{c(){t=I("div"),n=E(e[2]),S(t,"class","time svelte-1vgnieg")},m(e,s){w(e,t,s),m(t,n)},p(e,t){4&t&&D(n,e[2])},d(e){e&&y(t)}}}function yy(e){let t,n,s,r,o,a,l,u,h,d,f;return{c(){t=I("div"),n=I("img"),r=T(),o=I("img"),l=T(),u=I("img"),c(n.src,s=e[4]?Ge:je)||S(n,"src",s),S(n,"alt","Expand"),S(n,"class","svelte-1vgnieg"),c(o.src,a=Qe)||S(o,"src",a),S(o,"alt","More"),S(o,"class","svelte-1vgnieg"),c(u.src,h=et)||S(u,"src",h),S(u,"alt","Expand"),S(u,"class","svelte-1vgnieg"),S(t,"class","actions svelte-1vgnieg")},m(s,i){w(s,t,i),m(t,n),m(t,r),m(t,o),m(t,l),m(t,u),d||(f=[k(n,"mousedown",e[7]),k(o,"mousedown",e[8]),k(u,"mousedown",e[14])],d=!0)},p(e,t){16&t&&!c(n.src,s=e[4]?Ge:je)&&S(n,"src",s)},d(e){e&&y(t),d=!1,i(f)}}}function by(e){let t,n,s,r,o,a,c,l,u,h,d,f,p,g,v,A,b,C,N,U,x,_,O,L,P,M,B,F,V,$,G,j=e[0]?.size?"Workspace":"Group",Q=e[0]?.size?"Workspace":"Group",q=e[0]?.size?"Workspace":"Group";return s=new Xe({props:{group:e[0]}}),s.$on("colorSelected",e[9]),{c(){t=I("div"),n=I("div"),ge(s.$$.fragment),r=T(),o=I("div"),o.textContent="Edit title",a=T(),c=I("div"),l=T(),u=I("div"),h=E("Open "),d=E(j),f=E(" in Current Window"),p=T(),g=I("div"),v=E("Open "),A=E(Q),b=E(" in New Window"),C=T(),N=I("div"),U=T(),x=I("div"),_=E("Delete "),O=E(q),L=T(),P=I("div"),M=I("span"),M.textContent="Double Click",S(n,"class","group-selection-container"),S(o,"class","action svelte-1vgnieg"),S(c,"class","divider svelte-1vgnieg"),S(u,"class","action svelte-1vgnieg"),S(g,"class","action svelte-1vgnieg"),S(N,"class","divider svelte-1vgnieg"),S(P,"class","spacer svelte-1vgnieg"),S(M,"class","svelte-1vgnieg"),S(x,"class","action svelte-1vgnieg"),S(t,"class","more-actions svelte-1vgnieg"),R(t,"border-color","#555555")},m(i,y){w(i,t,y),m(t,n),me(s,n,null),m(t,r),m(t,o),m(t,a),m(t,c),m(t,l),m(t,u),m(u,h),m(u,d),m(u,f),m(t,p),m(t,g),m(g,v),m(g,A),m(g,b),m(t,C),m(t,N),m(t,U),m(t,x),m(x,_),m(x,O),m(x,L),m(x,P),m(x,M),V=!0,$||(G=[k(o,"mousedown",e[10]),k(u,"mousedown",e[13]),k(g,"mousedown",e[14]),k(x,"dblclick",e[15]),k(t,"mouseleave",e[18])],$=!0)},p(e,t){const n={};1&t&&(n.group=e[0]),s.$set(n),(!V||1&t)&&j!==(j=e[0]?.size?"Workspace":"Group")&&D(d,j),(!V||1&t)&&Q!==(Q=e[0]?.size?"Workspace":"Group")&&D(A,Q),(!V||1&t)&&q!==(q=e[0]?.size?"Workspace":"Group")&&D(O,q)},i(e){V||(ae(s.$$.fragment,e),z((()=>{V&&(F&&F.end(1),B=ue(t,Oe,{}),B.start())})),V=!0)},o(e){ce(s.$$.fragment,e),B&&B.invalidate(),F=he(t,Oe,{}),V=!1},d(e){e&&y(t),ve(s),e&&F&&F.end(),$=!1,i(G)}}}function Iy(e){let t,n,s=e[0].tabs,i=[];for(let t=0;t<s.length;t+=1)i[t]=Ey(gy(e,s,t));const r=e=>ce(i[e],1,1,(()=>{i[e]=null}));return{c(){t=I("div");for(let e=0;e<i.length;e+=1)i[e].c();S(t,"class","tabs svelte-1vgnieg")},m(e,s){w(e,t,s);for(let e=0;e<i.length;e+=1)i[e]&&i[e].m(t,null);n=!0},p(e,n){if(1&n){let o;for(s=e[0].tabs,o=0;o<s.length;o+=1){const r=gy(e,s,o);i[o]?(i[o].p(r,n),ae(i[o],1)):(i[o]=Ey(r),i[o].c(),ae(i[o],1),i[o].m(t,null))}for(re(),o=s.length;o<i.length;o+=1)r(o);oe()}},i(e){if(!n){for(let e=0;e<s.length;e+=1)ae(i[e]);n=!0}},o(e){i=i.filter(Boolean);for(let e=0;e<i.length;e+=1)ce(i[e]);n=!1},d(e){e&&y(t),b(i,e)}}}function Ey(e){let t,n;return t=new Hv({props:{tab:e[25],isOpen:!1}}),{c(){ge(t.$$.fragment)},m(e,s){me(t,e,s),n=!0},p(e,n){const s={};1&n&&(s.tab=e[25]),t.$set(s)},i(e){n||(ae(t.$$.fragment,e),n=!0)},o(e){ce(t.$$.fragment,e),n=!1},d(e){ve(t,e)}}}function Ty(e){let t,n,s=e[1]&&my(e);return{c(){s&&s.c(),t=C()},m(e,i){s&&s.m(e,i),w(e,t,i),n=!0},p(e,[n]){e[1]?s?(s.p(e,n),2&n&&ae(s,1)):(s=my(e),s.c(),ae(s,1),s.m(t.parentNode,t)):s&&(re(),ce(s,1,1,(()=>{s=null})),oe())},i(e){n||(ae(s),n=!0)},o(e){ce(s),n=!1},d(e){s&&s.d(e),e&&y(t)}}}function Cy(e,t,n){let s,i,r,{workspace:o}=t,{isOpen:a=!1}=t,c=V();F((()=>{n(2,i=((e,t)=>{if(!e)return"";let n="";const s=Date.now()-e,i=36e5,r=864e5,o=6048e5,a=s/i<1,c=s/r<1,l=s/o<1;return n=s/6e4<1?(s/1e3).toFixed(0)+(t?"s ago":" seconds ago"):a?(s/6e4).toFixed(0)+(t?"m ago":" minutes ago"):c?(s/i).toFixed(0)+(t?"h ago":" hours ago"):l?(s/r).toFixed(0)+(t?"w ago":" days ago"):"number"==typeof s?(s/o).toFixed(0)+(t?"w ago":" weeks ago"):"",n})(o.updated,!0)),n(1,s=!0)}));let l=!1;let u=!1;let h;let d;const f=()=>{c("workspaceUpdated",o),n(6,h=!1)},p=async({openInNewWindow:e})=>{await Ee({workspaceToOpen:{workspace:o,time:Date.now()}});let t,n,s=[];e&&(t=await chrome.windows.create({incognito:o.isIncognito??!1,focused:!0}),n=(await chrome.tabs.query({windowId:t.id}))[0]),0==o.tabs.length&&o.tabs.push({url:""});for(const e of o.tabs)s.push(await chrome.tabs.create({url:e.url,windowId:t?.id}));const i=await chrome.tabs.group({tabIds:s.map((e=>e.id)),createProperties:{windowId:t?.id}});await chrome.tabGroups.update(i,{title:o.title,color:o.color}),n&&await chrome.tabs.remove(n.id)};return e.$$set=e=>{"workspace"in e&&n(0,o=e.workspace),"isOpen"in e&&n(16,a=e.isOpen)},[o,s,i,r,l,u,h,()=>{n(4,l=!l)},()=>{n(5,u=!u),console.log(o)},({detail:e})=>{n(0,o.color=e,o),c("workspaceUpdated",o)},()=>{console.log("edit title"),n(6,h=!0)},e=>{d&&f()},e=>{"Enter"==e.key&&f(),d||(d=!0)},p,async()=>{if(a){if((o.groupId??0)>0){const e=await chrome.tabs.query({groupId:o.groupId});e.length>0&&(chrome.tabs.update(e[0].id,{active:!0}),chrome.windows.update(e[0].windowId,{focused:!0}))}}else p({openInNewWindow:!0})},async()=>{c("deleteWorkspace",o)},a,function(){o.title=this.value,n(0,o)},()=>{n(5,u=!1)},()=>n(3,r=!0),()=>n(3,r=!1)]}class ky extends ye{constructor(e){super(),we(this,e,Cy,Ty,o,{workspace:0,isOpen:16})}}function Sy(e){let t,n,s,i,r,o;function a(e,t){return e[1]>0?Ny:Dy}let c=a(e),l=c(e);return{c(){t=I("div"),n=I("div"),s=T(),i=I("div"),l.c(),r=T(),o=I("div"),S(n,"class","action spacer svelte-y7sukq"),S(i,"class","counts svelte-y7sukq"),S(o,"class","action svelte-y7sukq"),S(t,"class","footer svelte-y7sukq")},m(e,a){w(e,t,a),m(t,n),m(t,s),m(t,i),l.m(i,null),m(t,r),m(t,o)},p(e,t){c===(c=a(e))&&l?l.p(e,t):(l.d(1),l=c(e),l&&(l.c(),l.m(i,null)))},d(e){e&&y(t),l.d()}}}function Dy(e){let t,n,s,i,r,o,a=e[0]>1?"s":"";return{c(){t=I("div"),n=E(e[0]),s=T(),i=I("span"),r=E("Recent Folder"),o=E(a),S(t,"class","count svelte-y7sukq")},m(e,a){w(e,t,a),m(t,n),w(e,s,a),w(e,i,a),m(i,r),m(i,o)},p(e,t){1&t&&D(n,e[0]),1&t&&a!==(a=e[0]>1?"s":"")&&D(o,a)},d(e){e&&y(t),e&&y(s),e&&y(i)}}}function Ny(e){let t,n,s,i,r,o,a=e[1]>1?"s":"";return{c(){t=I("div"),n=E(e[1]),s=T(),i=I("span"),r=E("Saved Group"),o=E(a),S(t,"class","count svelte-y7sukq")},m(e,a){w(e,t,a),m(t,n),w(e,s,a),w(e,i,a),m(i,r),m(i,o)},p(e,t){2&t&&D(n,e[1]),2&t&&a!==(a=e[1]>1?"s":"")&&D(o,a)},d(e){e&&y(t),e&&y(s),e&&y(i)}}}function Ry(t){let n,s=(t[1]||t[0])&&Sy(t);return{c(){s&&s.c(),n=C()},m(e,t){s&&s.m(e,t),w(e,n,t)},p(e,[t]){e[1]||e[0]?s?s.p(e,t):(s=Sy(e),s.c(),s.m(n.parentNode,n)):s&&(s.d(1),s=null)},i:e,o:e,d(e){s&&s.d(e),e&&y(n)}}}function Uy(e,t,n){let{updated:s}=t,{showTrash:i}=t,{workspaces:r}=t,{recentFolders:o}=t,a=0,c=0;F((()=>{l()}));const l=()=>{n(0,a=o?.length??0),n(1,c=r?.filter((e=>i?e.deleted:!e.deleted)).length??0)};return e.$$set=e=>{"updated"in e&&n(2,s=e.updated),"showTrash"in e&&n(3,i=e.showTrash),"workspaces"in e&&n(4,r=e.workspaces),"recentFolders"in e&&n(5,o=e.recentFolders)},e.$$.update=()=>{4&e.$$.dirty&&l()},[a,c,s,i,r,o]}class xy extends ye{constructor(e){super(),we(this,e,Uy,Ry,o,{updated:2,showTrash:3,workspaces:4,recentFolders:5})}}function _y(e,t,n){const s=e.slice();return s[31]=t[n],s}function Oy(e){let t,n,s,i,r,o,a,c,l,u=e[9]&&Ly(e);const h=[My,Py],d=[];function f(e,t){return e[2].length>0?0:1}function p(t){e[21](t)}i=f(e),r=d[i]=h[i](e);let g={workspaces:e[2],recentFolders:e[8],updated:e[6]};return void 0!==e[3]&&(g.showTrash=e[3]),a=new xy({props:g}),j.push((()=>pe(a,"showTrash",p))),{c(){u&&u.c(),t=T(),n=I("div"),s=I("div"),r.c(),o=T(),ge(a.$$.fragment),S(s,"class","container svelte-1nov9ln"),S(n,"class","workspaces svelte-1nov9ln")},m(e,r){u&&u.m(e,r),w(e,t,r),w(e,n,r),m(n,s),d[i].m(s,null),m(n,o),me(a,n,null),l=!0},p(e,n){e[9]?u?(u.p(e,n),512&n[0]&&ae(u,1)):(u=Ly(e),u.c(),ae(u,1),u.m(t.parentNode,t)):u&&(re(),ce(u,1,1,(()=>{u=null})),oe());let o=i;i=f(e),i===o?d[i].p(e,n):(re(),ce(d[o],1,1,(()=>{d[o]=null})),oe(),r=d[i],r?r.p(e,n):(r=d[i]=h[i](e),r.c()),ae(r,1),r.m(s,null));const l={};4&n[0]&&(l.workspaces=e[2]),256&n[0]&&(l.recentFolders=e[8]),64&n[0]&&(l.updated=e[6]),!c&&8&n[0]&&(c=!0,l.showTrash=e[3],H((()=>c=!1))),a.$set(l)},i(e){l||(ae(u),ae(r),ae(a.$$.fragment,e),l=!0)},o(e){ce(u),ce(r),ce(a.$$.fragment,e),l=!1},d(e){u&&u.d(e),e&&y(t),e&&y(n),d[i].d(),ve(a)}}}function Ly(e){let t,n,s;return n=new SA({props:{workspace:e[9],user:e[1],db:e[0]}}),n.$on("goBack",e[19]),{c(){t=I("div"),ge(n.$$.fragment),S(t,"class","workspace-preview-container svelte-1nov9ln")},m(e,i){w(e,t,i),me(n,t,null),s=!0},p(e,t){const s={};512&t[0]&&(s.workspace=e[9]),2&t[0]&&(s.user=e[1]),1&t[0]&&(s.db=e[0]),n.$set(s)},i(e){s||(ae(n.$$.fragment,e),s=!0)},o(e){ce(n.$$.fragment,e),s=!1},d(e){e&&y(t),ve(n)}}}function Py(t){let n;return{c(){n=I("div"),n.innerHTML='<div class="instructions svelte-1nov9ln">Create a tab group to save your first session</div>',S(n,"class","empty-state svelte-1nov9ln")},m(e,t){w(e,n,t)},p:e,i:e,o:e,d(e){e&&y(n)}}}function My(e){let t,n,s,i=e[3]&&By(e),r=Fy(e);return{c(){i&&i.c(),t=T(),r&&r.c(),n=C()},m(e,o){i&&i.m(e,o),w(e,t,o),r&&r.m(e,o),w(e,n,o),s=!0},p(e,s){e[3]?i?i.p(e,s):(i=By(e),i.c(),i.m(t.parentNode,t)):i&&(i.d(1),i=null),r?(r.p(e,s),8&s[0]&&ae(r,1)):(r=Fy(e),r.c(),ae(r,1),r.m(n.parentNode,n))},i(e){s||(ae(r),s=!0)},o(e){ce(r),s=!1},d(e){i&&i.d(e),e&&y(t),r&&r.d(e),e&&y(n)}}}function By(t){let n,s,i,r,o,a,l;return{c(){n=I("div"),s=I("img"),r=T(),o=I("span"),o.textContent="Trash",c(s.src,i=Ze)||S(s,"src",i),S(s,"alt","back"),S(s,"class","back-action svelte-1nov9ln"),S(n,"class","heading svelte-1nov9ln")},m(e,i){w(e,n,i),m(n,s),m(n,r),m(n,o),a||(l=k(s,"mousedown",t[20]),a=!0)},p:e,d(e){e&&y(n),a=!1,l()}}}function Fy(e){let t,n,s=[],i=new Map,r=e[4];const o=e=>e[31];for(let t=0;t<r.length;t+=1){let n=_y(e,r,t),a=o(n);i.set(a,s[t]=Vy(a,n))}return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=C()},m(e,i){for(let t=0;t<s.length;t+=1)s[t]&&s[t].m(e,i);w(e,t,i),n=!0},p(e,n){7312&n[0]&&(r=e[4],re(),s=fe(s,n,o,1,e,r,i,t.parentNode,de,Vy,t,_y),oe())},i(e){if(!n){for(let e=0;e<r.length;e+=1)ae(s[e]);n=!0}},o(e){for(let e=0;e<s.length;e+=1)ce(s[e]);n=!1},d(e){for(let t=0;t<s.length;t+=1)s[t].d(e);e&&y(t)}}}function Vy(e,t){let n,s,i;return s=new ky({props:{workspace:t[31],isOpen:t[7].includes(t[31].id)}}),s.$on("deleteWorkspace",t[11]),s.$on("workspaceUpdated",t[10]),s.$on("expandWorkspace",t[12]),{key:e,first:null,c(){n=C(),ge(s.$$.fragment),this.first=n},m(e,t){w(e,n,t),me(s,e,t),i=!0},p(e,n){t=e;const i={};16&n[0]&&(i.workspace=t[31]),144&n[0]&&(i.isOpen=t[7].includes(t[31].id)),s.$set(i)},i(e){i||(ae(s.$$.fragment,e),i=!0)},o(e){ce(s.$$.fragment,e),i=!1},d(e){e&&y(n),ve(s,e)}}}function $y(e){let t,n,s=e[5]&&Oy(e);return{c(){s&&s.c(),t=C()},m(e,i){s&&s.m(e,i),w(e,t,i),n=!0},p(e,n){e[5]?s?(s.p(e,n),32&n[0]&&ae(s,1)):(s=Oy(e),s.c(),ae(s,1),s.m(t.parentNode,t)):s&&(re(),ce(s,1,1,(()=>{s=null})),oe())},i(e){n||(ae(s),n=!0)},o(e){ce(s),n=!1},d(e){s&&s.d(e),e&&y(t)}}}function Gy(e,t,n){let s,i,r,{db:o}=t,{user:a}=t,{searchText:c}=t,{workspaces:l}=t,{workspacesLoaded:u}=t,{activeTab:h}=t,{groups:d}=t,{lastUpdatedGroup:f}=t,p=[];F((()=>{g()}));const g=()=>{l?.sort(((e,t)=>t.updated-e.updated)),A(),n(5,i=!0)};let m=[];let v;const A=()=>{let e=c.toLowerCase(),t=[],s={};for(const n of l){if(v){n.deleted&&t.push(n);continue}if(n.deleted)continue;if(n.title.toLowerCase().includes(e)&&!0){t.push(n);const e=n.color??"grey";s[e]||(s[e]=0),s[e]+=1}}n(6,r=Date.now()),n(4,p=t),w=s};let w={};const y=async e=>{if(await async function(e){e.updated=Date.now();let t={};return t[Se(e.id)]=e,await chrome.storage.local.set(t),e}(e),a){const t=Cf(o,tt.userContext(a.id,e.id));await mp(t,e,{merge:!0})}};let b;return e.$$set=e=>{"db"in e&&n(0,o=e.db),"user"in e&&n(1,a=e.user),"searchText"in e&&n(13,c=e.searchText),"workspaces"in e&&n(2,l=e.workspaces),"workspacesLoaded"in e&&n(14,u=e.workspacesLoaded),"activeTab"in e&&n(15,h=e.activeTab),"groups"in e&&n(16,d=e.groups),"lastUpdatedGroup"in e&&n(17,f=e.lastUpdatedGroup)},e.$$.update=()=>{155652&e.$$.dirty[0]&&(u&&l?.sort(((e,t)=>t.updated-e.updated)),(async()=>{n(7,m=Object.values(await Ie("openGroups")??{}))})(),A()),262152&e.$$.dirty[0]&&A()},[o,a,l,v,p,i,r,m,[],b,async({detail:e})=>{y(e)},async({detail:e})=>{const t=e;if(await ke(t),console.log("removing context"),a){const e=Cf(o,tt.userContext(a.id,t.id));await(n=e,vp(vf(n.firestore,Sf),[new Yl(n._key,Fl.none())])),console.log("removed from cloud")}var n;const s=l.findIndex((e=>e.id==t.id));s>-1&&l.splice(s,1),A()},({detail:e})=>{n(9,b=e)},c,u,h,d,f,s,()=>n(9,b=null),()=>n(3,v=!1),function(e){v=e,n(3,v)}]}class jy extends ye{constructor(e){super(),we(this,e,Gy,$y,o,{db:0,user:1,searchText:13,workspaces:2,workspacesLoaded:14,activeTab:15,groups:16,lastUpdatedGroup:17},null,[-1,-1])}}function Qy(e){let t,n;return{c(){t=I("div"),n=E(e[2]),S(t,"class","error svelte-1dme0dl")},m(e,s){w(e,t,s),m(t,n)},p(e,t){4&t&&D(n,e[2])},d(e){e&&y(t)}}}function qy(t){let n,s,r,o,a,c,l,u,h,d,f,p,g,v=t[2]&&Qy(t);return{c(){n=I("div"),s=I("div"),r=I("div"),r.textContent="Sign in",o=T(),a=I("div"),c=I("input"),l=T(),u=I("input"),h=T(),d=I("div"),d.textContent="Sign in",f=T(),v&&v.c(),S(r,"class","title svelte-1dme0dl"),S(c,"type","email"),S(c,"placeholder","Email"),S(c,"class","svelte-1dme0dl"),S(u,"type","password"),S(u,"placeholder","Password"),S(u,"class","svelte-1dme0dl"),S(d,"class","signin button svelte-1dme0dl"),S(a,"class","signin-with-email svelte-1dme0dl"),S(s,"class","container svelte-1dme0dl"),S(n,"class","signin-page svelte-1dme0dl")},m(e,i){w(e,n,i),m(n,s),m(s,r),m(s,o),m(s,a),m(a,c),N(c,t[0]),m(a,l),m(a,u),N(u,t[1]),m(a,h),m(a,d),m(a,f),v&&v.m(a,null),p||(g=[k(c,"input",t[6]),k(u,"input",t[7]),k(d,"mousedown",t[3])],p=!0)},p(e,[t]){1&t&&c.value!==e[0]&&N(c,e[0]),2&t&&u.value!==e[1]&&N(u,e[1]),e[2]?v?v.p(e,t):(v=Qy(e),v.c(),v.m(a,null)):v&&(v.d(1),v=null)},i:e,o:e,d(e){e&&y(n),v&&v.d(),p=!1,i(g)}}}function Ky(e,t,n){let s,i,r,o,a,{fbApp:c}=t;new Gg,F((()=>{c&&(s=lv(c),n(5,i=!0))}));return e.$$set=e=>{"fbApp"in e&&n(4,c=e.fbApp)},e.$$.update=()=>{48&e.$$.dirty&&c&&(s=lv(c))},[r,o,a,()=>{if(r&&(r.includes("@")||r.includes(".")))if(o)try{Jg(s,r,o).then((e=>{console.log(e),Ee({auth:r,password:o})}))}catch(e){console.log(e)}else n(2,a="Please provide a password");else n(2,a="Please enter a valid")},c,i,function(){r=this.value,n(0,r)},function(){o=this.value,n(1,o)}]}class Wy extends ye{constructor(e){super(),we(this,e,Ky,qy,o,{fbApp:4})}}function zy(e){let t,n,s,i;const r=[Jy,Hy],o=[];function a(e,t){return e[17].length>0?0:e[0]!=De.workspace?1:-1}return~(n=a(e))&&(s=o[n]=r[n](e)),{c(){t=I("div"),s&&s.c(),S(t,"class","container header svelte-1coiitx")},m(e,s){w(e,t,s),~n&&o[n].m(t,null),i=!0},p(e,i){let c=n;n=a(e),n===c?~n&&o[n].p(e,i):(s&&(re(),ce(o[c],1,1,(()=>{o[c]=null})),oe()),~n?(s=o[n],s?s.p(e,i):(s=o[n]=r[n](e),s.c()),ae(s,1),s.m(t,null)):s=null)},i(e){i||(ae(s),i=!0)},o(e){ce(s),i=!1},d(e){e&&y(t),~n&&o[n].d()}}}function Hy(e){let t,n,s,i;function r(t){e[29](t)}function o(t){e[30](t)}let a={user:e[3],windows:e[8],windowCount:e[8]?.length??0,tabCount:e[5]?.filter(e[28])?.length??0};return void 0!==e[0]&&(a.view=e[0]),void 0!==e[18]&&(a.searchText=e[18]),t=new py({props:a}),j.push((()=>pe(t,"view",r))),j.push((()=>pe(t,"searchText",o))),{c(){ge(t.$$.fragment)},m(e,n){me(t,e,n),i=!0},p(e,i){const r={};8&i[0]&&(r.user=e[3]),256&i[0]&&(r.windows=e[8]),256&i[0]&&(r.windowCount=e[8]?.length??0),1056&i[0]&&(r.tabCount=e[5]?.filter(e[28])?.length??0),!n&&1&i[0]&&(n=!0,r.view=e[0],H((()=>n=!1))),!s&&262144&i[0]&&(s=!0,r.searchText=e[18],H((()=>s=!1))),t.$set(r)},i(e){i||(ae(t.$$.fragment,e),i=!0)},o(e){ce(t.$$.fragment,e),i=!1},d(e){ve(t,e)}}}function Jy(t){let n,s,i=t[20],r=Xy(t);return{c(){r.c(),n=C()},m(e,t){r.m(e,t),w(e,n,t),s=!0},p(t,s){1048576&s[0]&&o(i,i=t[20])?(re(),ce(r,1,1,e),oe(),r=Xy(t),r.c(),ae(r,1),r.m(n.parentNode,n)):r.p(t,s)},i(e){s||(ae(r),s=!0)},o(e){ce(r),s=!1},d(e){e&&y(n),r.d(e)}}}function Xy(e){let t,n,s;function i(t){e[27](t)}let r={};return void 0!==e[17]&&(r.selectedTabs=e[17]),t=new Ue({props:r}),j.push((()=>pe(t,"selectedTabs",i))),{c(){ge(t.$$.fragment)},m(e,n){me(t,e,n),s=!0},p(e,s){const i={};!n&&131072&s[0]&&(n=!0,i.selectedTabs=e[17],H((()=>n=!1))),t.$set(i)},i(e){s||(ae(t.$$.fragment,e),s=!0)},o(e){ce(t.$$.fragment,e),s=!1},d(e){ve(t,e)}}}function Yy(e){let t,n;return t=new SA({props:{tabs:e[5],group:e[23],db:e[4],user:e[3],lastUpdate:e[11],lastUpdatedTab:e[12],lastSelectionUpdate:e[20]}}),t.$on("goBack",e[41]),{c(){ge(t.$$.fragment)},m(e,s){me(t,e,s),n=!0},p(e,n){const s={};32&n[0]&&(s.tabs=e[5]),16&n[0]&&(s.db=e[4]),8&n[0]&&(s.user=e[3]),2048&n[0]&&(s.lastUpdate=e[11]),4096&n[0]&&(s.lastUpdatedTab=e[12]),1048576&n[0]&&(s.lastSelectionUpdate=e[20]),t.$set(s)},i(e){n||(ae(t.$$.fragment,e),n=!0)},o(e){ce(t.$$.fragment,e),n=!1},d(e){ve(t,e)}}}function Zy(e){let t,n,s;function i(t){e[40](t)}let r={user:e[3],db:e[4],groups:e[6],activeTab:e[9],lastUpdatedGroup:e[13],workspacesLoaded:e[7],searchText:e[18]};return void 0!==e[1]&&(r.workspaces=e[1]),t=new jy({props:r}),j.push((()=>pe(t,"workspaces",i))),{c(){ge(t.$$.fragment)},m(e,n){me(t,e,n),s=!0},p(e,s){const i={};8&s[0]&&(i.user=e[3]),16&s[0]&&(i.db=e[4]),64&s[0]&&(i.groups=e[6]),512&s[0]&&(i.activeTab=e[9]),8192&s[0]&&(i.lastUpdatedGroup=e[13]),128&s[0]&&(i.workspacesLoaded=e[7]),262144&s[0]&&(i.searchText=e[18]),!n&&2&s[0]&&(n=!0,i.workspaces=e[1],H((()=>n=!1))),t.$set(i)},i(e){s||(ae(t.$$.fragment,e),s=!0)},o(e){ce(t.$$.fragment,e),s=!1},d(e){ve(t,e)}}}function eb(e){let t,n,s;function i(t){e[36](t)}let r={tabs:e[5].filter(e[35]),user:e[3],db:e[4],groups:e[6],lastUpdate:e[11],selectedTabs:e[17],lastUpdatedTab:e[12],lastSelectionUpdate:e[20],searchResults:e[21]};return void 0!==e[18]&&(r.searchText=e[18]),t=new sy({props:r}),j.push((()=>pe(t,"searchText",i))),t.$on("updateSelection",e[24]),t.$on("tabBookmarkAdded",e[37]),t.$on("foundDuplicates",e[38]),t.$on("groupSaved",e[39]),t.$on("showWorkspaceView",e[25]),{c(){ge(t.$$.fragment)},m(e,n){me(t,e,n),s=!0},p(e,s){const i={};1056&s[0]&&(i.tabs=e[5].filter(e[35])),8&s[0]&&(i.user=e[3]),16&s[0]&&(i.db=e[4]),64&s[0]&&(i.groups=e[6]),2048&s[0]&&(i.lastUpdate=e[11]),131072&s[0]&&(i.selectedTabs=e[17]),4096&s[0]&&(i.lastUpdatedTab=e[12]),1048576&s[0]&&(i.lastSelectionUpdate=e[20]),2097152&s[0]&&(i.searchResults=e[21]),!n&&262144&s[0]&&(n=!0,i.searchText=e[18],H((()=>n=!1))),t.$set(i)},i(e){s||(ae(t.$$.fragment,e),s=!0)},o(e){ce(t.$$.fragment,e),s=!1},d(e){ve(t,e)}}}function tb(e){let t,n,s,i;function r(t){e[32](t)}function o(t){e[33](t)}let a={tabs:e[5],groups:e[6],activeTab:e[9],lastUpdate:e[11],lastSelectionUpdate:e[20],lastUpdatedTab:e[12],lastUpdatedGroup:e[13],lastUpdatedWindow:e[14],windows:e[8],currentWindowId:e[10]};return void 0!==e[17]&&(a.selectedTabs=e[17]),void 0!==e[0]&&(a.view=e[0]),t=new Pw({props:a}),j.push((()=>pe(t,"selectedTabs",r))),j.push((()=>pe(t,"view",o))),t.$on("updateSelection",e[24]),t.$on("tabMoved",e[34]),{c(){ge(t.$$.fragment)},m(e,n){me(t,e,n),i=!0},p(e,i){const r={};32&i[0]&&(r.tabs=e[5]),64&i[0]&&(r.groups=e[6]),512&i[0]&&(r.activeTab=e[9]),2048&i[0]&&(r.lastUpdate=e[11]),1048576&i[0]&&(r.lastSelectionUpdate=e[20]),4096&i[0]&&(r.lastUpdatedTab=e[12]),8192&i[0]&&(r.lastUpdatedGroup=e[13]),16384&i[0]&&(r.lastUpdatedWindow=e[14]),256&i[0]&&(r.windows=e[8]),1024&i[0]&&(r.currentWindowId=e[10]),!n&&131072&i[0]&&(n=!0,r.selectedTabs=e[17],H((()=>n=!1))),!s&&1&i[0]&&(s=!0,r.view=e[0],H((()=>s=!1))),t.$set(r)},i(e){i||(ae(t.$$.fragment,e),i=!0)},o(e){ce(t.$$.fragment,e),i=!1},d(e){ve(t,e)}}}function nb(e){let t,n;return t=new hw({props:{searchText:e[18],searchResults:e[21],lastSelectionUpdate:e[20],selectedTabs:e[17],hasBookmarkPermission:e[2]}}),t.$on("updateSelection",e[31]),t.$on("searchBookmarks",e[26]),{c(){ge(t.$$.fragment)},m(e,s){me(t,e,s),n=!0},p(e,n){const s={};262144&n[0]&&(s.searchText=e[18]),2097152&n[0]&&(s.searchResults=e[21]),1048576&n[0]&&(s.lastSelectionUpdate=e[20]),131072&n[0]&&(s.selectedTabs=e[17]),4&n[0]&&(s.hasBookmarkPermission=e[2]),t.$set(s)},i(e){n||(ae(t.$$.fragment,e),n=!0)},o(e){ce(t.$$.fragment,e),n=!1},d(e){ve(t,e)}}}function sb(e){let t,n,s,i;const r=[ob,rb,ib],o=[];function a(e,t){return e[17].length>0?0:e[0]==De.windows?1:e[0]==De.tabs?2:-1}return~(n=a(e))&&(s=o[n]=r[n](e)),{c(){t=I("div"),s&&s.c(),S(t,"class","container footer svelte-1coiitx")},m(e,s){w(e,t,s),~n&&o[n].m(t,null),i=!0},p(e,i){let c=n;n=a(e),n===c?~n&&o[n].p(e,i):(s&&(re(),ce(o[c],1,1,(()=>{o[c]=null})),oe()),~n?(s=o[n],s?s.p(e,i):(s=o[n]=r[n](e),s.c()),ae(s,1),s.m(t,null)):s=null)},i(e){i||(ae(s),i=!0)},o(e){ce(s),i=!1},d(e){e&&y(t),~n&&o[n].d()}}}function ib(e){let t,n,s;function i(t){e[46](t)}let r={tabs:e[5].filter(e[45]),lastSelectionUpdate:e[20]};return void 0!==e[17]&&(r.selectedTabs=e[17]),t=new zw({props:r}),j.push((()=>pe(t,"selectedTabs",i))),{c(){ge(t.$$.fragment)},m(e,n){me(t,e,n),s=!0},p(e,s){const i={};1056&s[0]&&(i.tabs=e[5].filter(e[45])),1048576&s[0]&&(i.lastSelectionUpdate=e[20]),!n&&131072&s[0]&&(n=!0,i.selectedTabs=e[17],H((()=>n=!1))),t.$set(i)},i(e){s||(ae(t.$$.fragment,e),s=!0)},o(e){ce(t.$$.fragment,e),s=!1},d(e){ve(t,e)}}}function rb(e){let t,n;return t=new Uw({props:{windows:e[8],tabs:e[5],groups:e[6],lastSelectionUpdate:e[20],selectedTabs:e[17]}}),t.$on("mergedWindows",e[44]),{c(){ge(t.$$.fragment)},m(e,s){me(t,e,s),n=!0},p(e,n){const s={};256&n[0]&&(s.windows=e[8]),32&n[0]&&(s.tabs=e[5]),64&n[0]&&(s.groups=e[6]),1048576&n[0]&&(s.lastSelectionUpdate=e[20]),131072&n[0]&&(s.selectedTabs=e[17]),t.$set(s)},i(e){n||(ae(t.$$.fragment,e),n=!0)},o(e){ce(t.$$.fragment,e),n=!1},d(e){ve(t,e)}}}function ob(e){let t,n,s;function i(t){e[43](t)}let r={lastSelectionUpdate:e[20],view:e[0]};return void 0!==e[17]&&(r.selectedTabs=e[17]),t=new bw({props:r}),j.push((()=>pe(t,"selectedTabs",i))),{c(){ge(t.$$.fragment)},m(e,n){me(t,e,n),s=!0},p(e,s){const i={};1048576&s[0]&&(i.lastSelectionUpdate=e[20]),1&s[0]&&(i.view=e[0]),!n&&131072&s[0]&&(n=!0,i.selectedTabs=e[17],H((()=>n=!1))),t.$set(i)},i(e){s||(ae(t.$$.fragment,e),s=!0)},o(e){ce(t.$$.fragment,e),s=!1},d(e){ve(t,e)}}}function ab(e){let t,n,s,i,r,o,a,c=zy(e);const l=[nb,tb,eb,Zy,Yy],u=[];function h(e,t){return e[18].length>0&&e[0]!=De.saved?0:e[0]==De.windows?1:e[0]==De.tabs?2:e[0]==De.saved?3:e[0]==De.workspace?4:-1}~(i=h(e))&&(r=u[i]=l[i](e));let d=e[22]&&sb(e);return{c(){t=I("main"),c&&c.c(),n=T(),s=I("div"),r&&r.c(),o=T(),d&&d.c(),S(s,"class","body svelte-1coiitx"),S(t,"class","svelte-1coiitx")},m(r,l){w(r,t,l),c&&c.m(t,null),m(t,n),m(t,s),~i&&u[i].m(s,null),e[42](s),m(t,o),d&&d.m(t,null),a=!0},p(e,o){c?(c.p(e,o),229376&o[0]&&ae(c,1)):(c=zy(e),c.c(),ae(c,1),c.m(t,n));let a=i;i=h(e),i===a?~i&&u[i].p(e,o):(r&&(re(),ce(u[a],1,1,(()=>{u[a]=null})),oe()),~i?(r=u[i],r?r.p(e,o):(r=u[i]=l[i](e),r.c()),ae(r,1),r.m(s,null)):r=null),e[22]?d?(d.p(e,o),4194304&o[0]&&ae(d,1)):(d=sb(e),d.c(),ae(d,1),d.m(t,null)):d&&(re(),ce(d,1,1,(()=>{d=null})),oe())},i(e){a||(ae(c),ae(r),ae(d),a=!0)},o(e){ce(c),ce(r),ce(d),a=!1},d(n){n&&y(t),c&&c.d(),~i&&u[i].d(),e[42](null),d&&d.d()}}}function cb(e,t,n){let s,i,r,{user:o}=t,{db:a}=t,{view:c}=t,{tabs:l}=t,{groups:u}=t,{workspaces:h}=t,{workspacesLoaded:d}=t,{windows:f}=t,{activeTab:p}=t,{currentWindowId:g}=t,{lastUpdate:m}=t,{lastUpdatedTab:v}=t,{lastUpdatedGroup:A}=t,{lastUpdatedWindow:w}=t,{hasBookmarkPermission:y}=t,b=0;F((()=>{I()})),function(e){B().$$.on_destroy.push(e)}((()=>{E()}));const I=()=>{r=i.addEventListener("scroll",(e=>{const t=b-i.scrollTop;s?t<0&&n(15,s=!1):t>0&&n(15,s=!0),n(16,b=i.scrollTop)}))},E=()=>{i.removeEventListener("scroll",r)};let T,C=[];let k="",S=[];const D=async()=>{const e=k.toLowerCase();n(21,S=l.filter((t=>(t.title+" "+t.url).toLowerCase().includes(e)))),S.length>0||!y||y&&n(21,S=await chrome.bookmarks.search({query:e}))};let N;return e.$$set=e=>{"user"in e&&n(3,o=e.user),"db"in e&&n(4,a=e.db),"view"in e&&n(0,c=e.view),"tabs"in e&&n(5,l=e.tabs),"groups"in e&&n(6,u=e.groups),"workspaces"in e&&n(1,h=e.workspaces),"workspacesLoaded"in e&&n(7,d=e.workspacesLoaded),"windows"in e&&n(8,f=e.windows),"activeTab"in e&&n(9,p=e.activeTab),"currentWindowId"in e&&n(10,g=e.currentWindowId),"lastUpdate"in e&&n(11,m=e.lastUpdate),"lastUpdatedTab"in e&&n(12,v=e.lastUpdatedTab),"lastUpdatedGroup"in e&&n(13,A=e.lastUpdatedGroup),"lastUpdatedWindow"in e&&n(14,w=e.lastUpdatedWindow),"hasBookmarkPermission"in e&&n(2,y=e.hasBookmarkPermission)},e.$$.update=()=>{264192&e.$$.dirty[0]&&""!=k&&D(),229377&e.$$.dirty[0]&&n(22,N=C.length>0||c!=De.saved&&c!=De.workspace&&!0)},[c,h,y,o,a,l,u,d,f,p,g,m,v,A,w,s,b,C,k,i,T,S,N,undefined,({detail:e})=>{const t=e,s=C.findIndex((e=>e.id==t.id));s>-1?C.splice(s,1):C.push(t),n(20,T=Date.now())},async({detail:e})=>{const t=e;if(p.groupId!=t.id){const e=(await chrome.tabs.query({groupId:t.id}))[0];await chrome.tabs.update(e.id,{active:!0})}n(0,c=De.workspace)},()=>{n(2,y=!0),D()},function(e){C=e,n(17,C)},e=>e.windowId==g,function(e){c=e,n(0,c)},function(e){k=e,n(18,k)},function(t){$.call(this,e,t)},function(e){C=e,n(17,C)},function(e){c=e,n(0,c)},function(t){$.call(this,e,t)},e=>e.windowId==g,function(e){k=e,n(18,k)},function(t){$.call(this,e,t)},function(t){$.call(this,e,t)},function(t){$.call(this,e,t)},function(e){h=e,n(1,h)},()=>c==De.tabs,function(e){j[e?"unshift":"push"]((()=>{i=e,n(19,i)}))},function(e){C=e,n(17,C)},function(t){$.call(this,e,t)},e=>e.windowId==g,function(e){C=e,n(17,C)}]}class lb extends ye{constructor(e){super(),we(this,e,cb,ab,o,{user:3,db:4,view:0,tabs:5,groups:6,workspaces:1,workspacesLoaded:7,windows:8,activeTab:9,currentWindowId:10,lastUpdate:11,lastUpdatedTab:12,lastUpdatedGroup:13,lastUpdatedWindow:14,hasBookmarkPermission:2},null,[-1,-1])}}
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
mn("firebase","9.23.0","app");const ub={apiKey:"AIzaSyDCQVQMSqV-lEib8zxjvVc0-l4YkcfHs9A",authDomain:"tsundoku-9b453.firebaseapp.com",projectId:"tsundoku-9b453",storageBucket:"tsundoku-9b453.appspot.com",messagingSenderId:"214768069951",appId:"1:214768069951:web:d7d1a2e08f7f57d601b78a",measurementId:"G-33RVLBLNV0"};function hb(e,t,n){let s,i,r,{user:o}=t,{db:a}=t,{userRef:c}=t,{fbApp:l}=t,{authLoaded:u}=t,{view:h}=t;V(),F((async()=>{d()}));const d=async()=>{await f(),n(4,u=Date.now())},f=async()=>{try{n(3,l=pn(ub)),s=lv(),n(1,a=function(e,t){const n="string"==typeof e?e:t||"(default)",s=un("object"==typeof e?e:gn(),"firestore").getImmediate({identifier:n});if(!s._initialized){const e=ut("firestore");e&&yf(s,...e)}return s}(l)),e=p,Ct(s).onAuthStateChanged(e,t,i),r=!0,console.log("firebase connected")}catch(t){console.log("could not connect to firebase"),console.log(t)}var e,t,i},p=async e=>{if(console.log("auth change"),i=e,i)await m();else{console.log("checking stored auth");const e=await Ie("auth");e?.password?g(e):console.log("user not logged in")}},g=e=>{try{Jg(s,e.email,e.password)}catch(e){n(5,h=De.signin)}},m=async()=>{n(2,c=Cf(a,"users",i.uid)),n(0,o=(await fp(c)).data()??{}),o?.created||(n(0,o.id=i.uid,o),n(0,o.accessCode=accessCode??createUserId(),o),n(0,o.created=Date.now(),o),n(0,o.createdOnMobile=isMobile,o),n(0,o.userAgent=navigator.userAgent,o),n(0,o.hasChrome=hasChrome,o),n(0,o.language=navigator.language,o),await mp(c,o)),n(4,u=Date.now())};return e.$$set=e=>{"user"in e&&n(0,o=e.user),"db"in e&&n(1,a=e.db),"userRef"in e&&n(2,c=e.userRef),"fbApp"in e&&n(3,l=e.fbApp),"authLoaded"in e&&n(4,u=e.authLoaded),"view"in e&&n(5,h=e.view)},[o,a,c,l,u,h]}class db extends ye{constructor(e){super(),we(this,e,hb,null,o,{user:0,db:1,userRef:2,fbApp:3,authLoaded:4,view:5})}}function fb(e,t,n){let{db:s}=t,{user:i}=t,{userRef:r}=t,{activeTab:o}=t,{workspaces:a}=t,{authLoaded:c}=t,{groups:l}=t,{workspacesLoaded:u}=t,{lastUpdatedGroup:h}=t;F((()=>{}));const d=async()=>{let e=[];const t=await async function(e){let t=[];const n=await Ie("contextKeys")??[];if(0==n.length)return t;const s=await chrome.storage.local.get(n);for(const[n,i]of Object.entries(s))e&&!e(i)||t.push(i);return t}();if(i){i.lastSync||n(0,i.lastSync=0,i);const o=await Ie("config");o.lastSync&&(o.lastSync=0);const a=t.filter((e=>e.updated>i.lastSync||e.created>i.lastSync));for(const e of a){const t=Cf(s,tt.userContext(i.id,e.id));await mp(t,e,{merge:!0})}n(0,i.lastSync=Date.now(),i),await mp(r,i);e=(await gp(Tf(s,tt.userContexts(i.id)))).docs.map((e=>e.data()))}else e=t;n(1,a=e.filter((e=>(e.isIncognito??!1)==o.incognito))),n(2,u=Date.now())};return e.$$set=e=>{"db"in e&&n(3,s=e.db),"user"in e&&n(0,i=e.user),"userRef"in e&&n(4,r=e.userRef),"activeTab"in e&&n(5,o=e.activeTab),"workspaces"in e&&n(1,a=e.workspaces),"authLoaded"in e&&n(6,c=e.authLoaded),"groups"in e&&n(7,l=e.groups),"workspacesLoaded"in e&&n(2,u=e.workspacesLoaded),"lastUpdatedGroup"in e&&n(8,h=e.lastUpdatedGroup)},e.$$.update=()=>{64&e.$$.dirty&&d(),256&e.$$.dirty&&(async()=>{if(!h)return;console.log("updating group");const e=(await Ie("openGroups"))[h],t=a.findIndex((t=>t.id==e));if(t>-1){console.log("found workspace");const s=await Ce(e);n(1,a[t]=s,a)}else d()})()},[i,a,u,s,r,o,c,l,h]}class pb extends ye{constructor(e){super(),we(this,e,fb,null,o,{db:3,user:0,userRef:4,activeTab:5,workspaces:1,authLoaded:6,groups:7,workspacesLoaded:2,lastUpdatedGroup:8})}}function gb(e,t,n){let{tabs:s=[]}=t,{groups:i=[]}=t,{windows:r=[]}=t,{activeTab:o}=t,{lastRefresh:a}=t,{lastUpdate:c}=t,{lastUpdatedTab:l}=t,{lastUpdatedWindow:u}=t,{lastUpdatedGroup:h}=t,{currentWindowId:d}=t,{view:f}=t;F((()=>{g()}));let{windowsLoaded:p}=t;const g=async()=>{await w(),await be(),await v(),y(),n(10,p=!0)};let{hasBookmarkPermission:m}=t;const v=async()=>{n(0,s=await chrome.tabs.query({})),n(2,r=await chrome.windows.getAll());const e=await chrome.tabGroups.query({}),t=await Ie("openGroups");console.log("open groups"),console.log(t);let o={};for(let n of e)o[n.id]||(n.workspaceId=t[n.id],o[n.id]=n);n(1,i=o);for(let e of r)e=A(e)},A=e=>{e.groups={},e.tabs=[];for(const t of s)t.windowId==e.id&&(e.tabs.push(t),t.groupId>-1&&!e.groups[t.groupId]&&(e.groups[t.groupId]=i[t.groupId]));return e},w=async()=>{n(3,o=(await chrome.tabs.query({active:!0,windowId:await chrome.windows.WINDOW_ID_CURRENT}))[0]),d||n(8,d=o.windowId)},y=()=>{chrome.tabs.onActivated.addListener(b),chrome.tabs.onCreated.addListener(I),chrome.tabs.onUpdated.addListener(E),chrome.tabs.onMoved.addListener(T),chrome.tabs.onRemoved.addListener(C),chrome.tabGroups.onCreated.addListener(N),chrome.tabGroups.onUpdated.addListener(R),chrome.tabGroups.onRemoved.addListener(U),chrome.windows.onCreated.addListener(S),chrome.windows.onRemoved.addListener(D),m&&(chrome.bookmarks.onCreated.addListener(x),chrome.bookmarks.onRemoved.addListener(_))},b=async({tabId:e,windowId:t})=>{const i=s.findIndex((e=>e.windowId==t&&e.active)),r=s.findIndex((t=>t.id==e));r>-1&&(i>-1&&(n(0,s[i].active=!1,s),n(5,l=s[i])),n(0,s[r].active=!0,s),n(3,o=s[r]),n(5,l=s[r])),f==De.windows&&t==d&&n(9,f=De.tabs)},I=async e=>{e.updated=Date.now(),n(0,s=[...s,e]),k(e.windowId,e.id)},E=(e,t)=>{let i=s.findIndex((t=>t.id==e));if(i>-1){let e={...s[i],...t};e.updated=Date.now(),n(0,s[i]=e,s),n(0,s),n(5,l=e)}},T=async(e,{windowId:t,toIndex:i,fromIndex:o})=>{const a=s.findIndex((t=>t.id==e));if(-1==a)return void console.log("could not find tab");s[a].windowId!=t&&n(0,s[a].windowId=t,s);const c=r.find((e=>e.id==t));c||n(2,r=[...r,await chrome.windows.get(t)]),k(t,e)},C=e=>{const t=s.findIndex((t=>t.id==e));if(t>-1){const n={...s[t]};s.splice(t,1),n&&k(n.windowId,e)}},k=async(e,t)=>{let i=await chrome.tabs.query({windowId:e});for(const e of i){const i=s.findIndex((t=>t.id==e.id));if(i>-1){let r=s[i];r.id==t&&(r.updated=Date.now()),n(0,s[i]={...r,...e},s)}else s.push(e)}s.sort(((e,t)=>e.index-t.index)),n(0,s),n(4,c=Date.now()),n(6,u=e)},S=e=>{n(2,r=[...r,e]),setTimeout((()=>{k(e.id)}),500)},D=e=>{const t=r.findIndex((t=>t.id==e));t>-1&&r.splice(t,1),n(2,r)},N=async e=>{e.new=!0,n(1,i[e.id]=e,i),(async e=>{let t=await chrome.tabs.query({groupId:e});for(const e of t){const t=s.findIndex((t=>t.id==e.id));t>-1?n(0,s[t]={...s[t],...e},s):s.push(e)}s.sort(((e,t)=>e.index-t.index)),n(0,s),n(7,h=e),t.length>0&&t[0].windowId&&n(6,u=t[0].windowId)})(e.windowId),n(7,h=e.id),n(4,c=Date.now())},R=e=>{n(1,i[e.id]={...i[e.id],...e},i),delete i[e.id].new,n(7,h=e.id)},U=e=>{delete i[e],n(7,h=e)},x=async()=>{},_=async()=>{};return e.$$set=e=>{"tabs"in e&&n(0,s=e.tabs),"groups"in e&&n(1,i=e.groups),"windows"in e&&n(2,r=e.windows),"activeTab"in e&&n(3,o=e.activeTab),"lastRefresh"in e&&n(11,a=e.lastRefresh),"lastUpdate"in e&&n(4,c=e.lastUpdate),"lastUpdatedTab"in e&&n(5,l=e.lastUpdatedTab),"lastUpdatedWindow"in e&&n(6,u=e.lastUpdatedWindow),"lastUpdatedGroup"in e&&n(7,h=e.lastUpdatedGroup),"currentWindowId"in e&&n(8,d=e.currentWindowId),"view"in e&&n(9,f=e.view),"windowsLoaded"in e&&n(10,p=e.windowsLoaded),"hasBookmarkPermission"in e&&n(12,m=e.hasBookmarkPermission)},e.$$.update=()=>{2048&e.$$.dirty[0]&&v()},[s,i,r,o,c,l,u,h,d,f,p,a,m]}class mb extends ye{constructor(e){super(),we(this,e,gb,null,o,{tabs:0,groups:1,windows:2,activeTab:3,lastRefresh:11,lastUpdate:4,lastUpdatedTab:5,lastUpdatedWindow:6,lastUpdatedGroup:7,currentWindowId:8,view:9,windowsLoaded:10,hasBookmarkPermission:12},null,[-1,-1])}}function vb(e){let t,n,s,i,r,o,a,c,l,u,h,d,f,p,g,m,v,A,b,I,E,k,S,D,N;function R(t){e[21](t)}function U(t){e[22](t)}function x(t){e[23](t)}function _(t){e[24](t)}function O(t){e[25](t)}function L(t){e[26](t)}let P={};function M(t){e[27](t)}function B(t){e[28](t)}function F(t){e[29](t)}function V(t){e[30](t)}function $(t){e[31](t)}function G(t){e[32](t)}function Q(t){e[33](t)}function q(t){e[34](t)}function K(t){e[35](t)}function W(t){e[36](t)}function z(t){e[37](t)}function J(t){e[38](t)}function X(t){e[39](t)}void 0!==e[5]&&(P.user=e[5]),void 0!==e[6]&&(P.userRef=e[6]),void 0!==e[7]&&(P.db=e[7]),void 0!==e[8]&&(P.fbApp=e[8]),void 0!==e[16]&&(P.authLoaded=e[16]),void 0!==e[15]&&(P.view=e[15]),t=new db({props:P}),j.push((()=>pe(t,"user",R))),j.push((()=>pe(t,"userRef",U))),j.push((()=>pe(t,"db",x))),j.push((()=>pe(t,"fbApp",_))),j.push((()=>pe(t,"authLoaded",O))),j.push((()=>pe(t,"view",L)));let Y={};void 0!==e[9]&&(Y.lastRefresh=e[9]),void 0!==e[17]&&(Y.windowsLoaded=e[17]),void 0!==e[4]&&(Y.activeTab=e[4]),void 0!==e[1]&&(Y.groups=e[1]),void 0!==e[2]&&(Y.windows=e[2]),void 0!==e[0]&&(Y.tabs=e[0]),void 0!==e[10]&&(Y.lastUpdate=e[10]),void 0!==e[11]&&(Y.lastUpdatedTab=e[11]),void 0!==e[13]&&(Y.lastUpdatedGroup=e[13]),void 0!==e[12]&&(Y.lastUpdatedWindow=e[12]),void 0!==e[14]&&(Y.currentWindowId=e[14]),void 0!==e[15]&&(Y.view=e[15]),void 0!==e[20]&&(Y.hasBookmarkPermission=e[20]),l=new mb({props:Y}),j.push((()=>pe(l,"lastRefresh",M))),j.push((()=>pe(l,"windowsLoaded",B))),j.push((()=>pe(l,"activeTab",F))),j.push((()=>pe(l,"groups",V))),j.push((()=>pe(l,"windows",$))),j.push((()=>pe(l,"tabs",G))),j.push((()=>pe(l,"lastUpdate",Q))),j.push((()=>pe(l,"lastUpdatedTab",q))),j.push((()=>pe(l,"lastUpdatedGroup",K))),j.push((()=>pe(l,"lastUpdatedWindow",W))),j.push((()=>pe(l,"currentWindowId",z))),j.push((()=>pe(l,"view",J))),j.push((()=>pe(l,"hasBookmarkPermission",X)));let Z=e[16]&&e[17]&&Ab(e);return{c(){ge(t.$$.fragment),c=T(),ge(l.$$.fragment),S=T(),Z&&Z.c(),D=C()},m(e,n){me(t,e,n),w(e,c,n),me(l,e,n),w(e,S,n),Z&&Z.m(e,n),w(e,D,n),N=!0},p(e,c){const w={};!n&&32&c[0]&&(n=!0,w.user=e[5],H((()=>n=!1))),!s&&64&c[0]&&(s=!0,w.userRef=e[6],H((()=>s=!1))),!i&&128&c[0]&&(i=!0,w.db=e[7],H((()=>i=!1))),!r&&256&c[0]&&(r=!0,w.fbApp=e[8],H((()=>r=!1))),!o&&65536&c[0]&&(o=!0,w.authLoaded=e[16],H((()=>o=!1))),!a&&32768&c[0]&&(a=!0,w.view=e[15],H((()=>a=!1))),t.$set(w);const y={};!u&&512&c[0]&&(u=!0,y.lastRefresh=e[9],H((()=>u=!1))),!h&&131072&c[0]&&(h=!0,y.windowsLoaded=e[17],H((()=>h=!1))),!d&&16&c[0]&&(d=!0,y.activeTab=e[4],H((()=>d=!1))),!f&&2&c[0]&&(f=!0,y.groups=e[1],H((()=>f=!1))),!p&&4&c[0]&&(p=!0,y.windows=e[2],H((()=>p=!1))),!g&&1&c[0]&&(g=!0,y.tabs=e[0],H((()=>g=!1))),!m&&1024&c[0]&&(m=!0,y.lastUpdate=e[10],H((()=>m=!1))),!v&&2048&c[0]&&(v=!0,y.lastUpdatedTab=e[11],H((()=>v=!1))),!A&&8192&c[0]&&(A=!0,y.lastUpdatedGroup=e[13],H((()=>A=!1))),!b&&4096&c[0]&&(b=!0,y.lastUpdatedWindow=e[12],H((()=>b=!1))),!I&&16384&c[0]&&(I=!0,y.currentWindowId=e[14],H((()=>I=!1))),!E&&32768&c[0]&&(E=!0,y.view=e[15],H((()=>E=!1))),!k&&1048576&c[0]&&(k=!0,y.hasBookmarkPermission=e[20],H((()=>k=!1))),l.$set(y),e[16]&&e[17]?Z?(Z.p(e,c),196608&c[0]&&ae(Z,1)):(Z=Ab(e),Z.c(),ae(Z,1),Z.m(D.parentNode,D)):Z&&(re(),ce(Z,1,1,(()=>{Z=null})),oe())},i(e){N||(ae(t.$$.fragment,e),ae(l.$$.fragment,e),ae(Z),N=!0)},o(e){ce(t.$$.fragment,e),ce(l.$$.fragment,e),ce(Z),N=!1},d(e){ve(t,e),e&&y(c),ve(l,e),e&&y(S),Z&&Z.d(e),e&&y(D)}}}function Ab(e){let t,n,s,i,r,o,a,c,l,u;function h(t){e[40](t)}function d(t){e[41](t)}function f(t){e[42](t)}function p(t){e[43](t)}let g={db:e[7],userRef:e[6],authLoaded:e[16],activeTab:e[4],lastUpdatedGroup:e[13]};void 0!==e[5]&&(g.user=e[5]),void 0!==e[3]&&(g.workspaces=e[3]),void 0!==e[1]&&(g.groups=e[1]),void 0!==e[18]&&(g.workspacesLoaded=e[18]),t=new pb({props:g}),j.push((()=>pe(t,"user",h))),j.push((()=>pe(t,"workspaces",d))),j.push((()=>pe(t,"groups",f))),j.push((()=>pe(t,"workspacesLoaded",p)));const m=[yb,wb],v=[];function A(e,t){return e[15]==De.signin?0:1}return a=A(e),c=v[a]=m[a](e),{c(){ge(t.$$.fragment),o=T(),c.c(),l=C()},m(e,n){me(t,e,n),w(e,o,n),v[a].m(e,n),w(e,l,n),u=!0},p(e,o){const u={};128&o[0]&&(u.db=e[7]),64&o[0]&&(u.userRef=e[6]),65536&o[0]&&(u.authLoaded=e[16]),16&o[0]&&(u.activeTab=e[4]),8192&o[0]&&(u.lastUpdatedGroup=e[13]),!n&&32&o[0]&&(n=!0,u.user=e[5],H((()=>n=!1))),!s&&8&o[0]&&(s=!0,u.workspaces=e[3],H((()=>s=!1))),!i&&2&o[0]&&(i=!0,u.groups=e[1],H((()=>i=!1))),!r&&262144&o[0]&&(r=!0,u.workspacesLoaded=e[18],H((()=>r=!1))),t.$set(u);let h=a;a=A(e),a===h?v[a].p(e,o):(re(),ce(v[h],1,1,(()=>{v[h]=null})),oe(),c=v[a],c?c.p(e,o):(c=v[a]=m[a](e),c.c()),ae(c,1),c.m(l.parentNode,l))},i(e){u||(ae(t.$$.fragment,e),ae(c),u=!0)},o(e){ce(t.$$.fragment,e),ce(c),u=!1},d(e){ve(t,e),e&&y(o),v[a].d(e),e&&y(l)}}}function wb(e){let t,n,s,i,r;function o(t){e[44](t)}function a(t){e[45](t)}function c(t){e[46](t)}let l={db:e[7],user:e[5],workspacesLoaded:e[18],activeTab:e[4],groups:e[1],windows:e[2],tabs:e[0],lastUpdate:e[10],lastUpdatedTab:e[11],lastUpdatedGroup:e[13],lastUpdatedWindow:e[12],currentWindowId:e[14]};return void 0!==e[15]&&(l.view=e[15]),void 0!==e[3]&&(l.workspaces=e[3]),void 0!==e[20]&&(l.hasBookmarkPermission=e[20]),t=new lb({props:l}),j.push((()=>pe(t,"view",o))),j.push((()=>pe(t,"workspaces",a))),j.push((()=>pe(t,"hasBookmarkPermission",c))),t.$on("tabMoved",e[47]),t.$on("mergedWindows",e[48]),t.$on("foundDuplicates",e[49]),{c(){ge(t.$$.fragment)},m(e,n){me(t,e,n),r=!0},p(e,r){const o={};128&r[0]&&(o.db=e[7]),32&r[0]&&(o.user=e[5]),262144&r[0]&&(o.workspacesLoaded=e[18]),16&r[0]&&(o.activeTab=e[4]),2&r[0]&&(o.groups=e[1]),4&r[0]&&(o.windows=e[2]),1&r[0]&&(o.tabs=e[0]),1024&r[0]&&(o.lastUpdate=e[10]),2048&r[0]&&(o.lastUpdatedTab=e[11]),8192&r[0]&&(o.lastUpdatedGroup=e[13]),4096&r[0]&&(o.lastUpdatedWindow=e[12]),16384&r[0]&&(o.currentWindowId=e[14]),!n&&32768&r[0]&&(n=!0,o.view=e[15],H((()=>n=!1))),!s&&8&r[0]&&(s=!0,o.workspaces=e[3],H((()=>s=!1))),!i&&1048576&r[0]&&(i=!0,o.hasBookmarkPermission=e[20],H((()=>i=!1))),t.$set(o)},i(e){r||(ae(t.$$.fragment,e),r=!0)},o(e){ce(t.$$.fragment,e),r=!1},d(e){ve(t,e)}}}function yb(e){let t,n;return t=new Wy({props:{fbApp:e[8]}}),{c(){ge(t.$$.fragment)},m(e,s){me(t,e,s),n=!0},p(e,n){const s={};256&n[0]&&(s.fbApp=e[8]),t.$set(s)},i(e){n||(ae(t.$$.fragment,e),n=!0)},o(e){ce(t.$$.fragment,e),n=!1},d(e){ve(t,e)}}}function bb(e){let t,n,s=e[19]&&vb(e);return{c(){s&&s.c(),t=C()},m(e,i){s&&s.m(e,i),w(e,t,i),n=!0},p(e,n){e[19]?s?(s.p(e,n),524288&n[0]&&ae(s,1)):(s=vb(e),s.c(),ae(s,1),s.m(t.parentNode,t)):s&&(re(),ce(s,1,1,(()=>{s=null})),oe())},i(e){n||(ae(s),n=!0)},o(e){ce(s),n=!1},d(e){s&&s.d(e),e&&y(t)}}}function Ib(e,t,n){let s,i,r,o,a,c,l,u,h,d,f,p,g,m,v,A,w=[],y=[],b=[],I=[],E=De.windows;F((()=>{T()}));const T=async()=>{n(20,A=await be()),n(19,v=!0)};return[w,y,b,I,s,i,r,o,a,c,l,u,h,d,f,E,p,g,m,v,A,function(e){i=e,n(5,i)},function(e){r=e,n(6,r)},function(e){o=e,n(7,o)},function(e){a=e,n(8,a)},function(e){p=e,n(16,p)},function(e){E=e,n(15,E)},function(e){c=e,n(9,c)},function(e){g=e,n(17,g)},function(e){s=e,n(4,s)},function(e){y=e,n(1,y)},function(e){b=e,n(2,b)},function(e){w=e,n(0,w)},function(e){l=e,n(10,l)},function(e){u=e,n(11,u)},function(e){d=e,n(13,d)},function(e){h=e,n(12,h)},function(e){f=e,n(14,f)},function(e){E=e,n(15,E)},function(e){A=e,n(20,A)},function(e){i=e,n(5,i)},function(e){I=e,n(3,I)},function(e){y=e,n(1,y)},function(e){m=e,n(18,m)},function(e){E=e,n(15,E)},function(e){I=e,n(3,I)},function(e){A=e,n(20,A)},()=>n(9,c=Date.now()),()=>n(9,c=Date.now()),()=>n(9,c=Date.now())]}return new class extends ye{constructor(e){super(),we(this,e,Ib,bb,o,{},null,[-1,-1])}}({target:document.body})}();
