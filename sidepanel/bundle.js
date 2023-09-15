var App=function(){"use strict";function e(){}const t=e=>e;function n(e){return e()}function s(){return Object.create(null)}function r(e){e.forEach(n)}function i(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let a;function c(e,t){return a||(a=document.createElement("a")),a.href=t,e===a.href}function l(e,t,n,s){return e[1]&&s?function(e,t){for(const n in t)e[n]=t[n];return e}(n.ctx.slice(),e[1](s(t))):n.ctx}const u="undefined"!=typeof window;let h=u?()=>window.performance.now():()=>Date.now(),d=u?e=>requestAnimationFrame(e):e;const f=new Set;function p(e){f.forEach((t=>{t.c(e)||(f.delete(t),t.f())})),0!==f.size&&d(p)}function g(e){let t;return 0===f.size&&d(p),{promise:new Promise((n=>{f.add(t={c:e,f:n})})),abort(){f.delete(t)}}}function m(e,t){e.appendChild(t)}function v(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function A(e){const t=I("style");return function(e,t){m(e.head||e,t),t.sheet}(v(e),t),t.sheet}function w(e,t,n){e.insertBefore(t,n||null)}function y(e){e.parentNode&&e.parentNode.removeChild(e)}function b(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function I(e){return document.createElement(e)}function E(e){return document.createTextNode(e)}function T(){return E(" ")}function C(){return E("")}function k(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function S(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function R(e,t){t=""+t,e.data!==t&&(e.data=t)}function D(e,t){e.value=null==t?"":t}function N(e,t,n,s){null==n?e.style.removeProperty(t):e.style.setProperty(t,n,s?"important":"")}function _(e,t,{bubbles:n=!1,cancelable:s=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,s,t),r}const x=new Map;let U,O=0;function L(e,t,n,s,r,i,o,a=0){const c=16.666/s;let l="{\n";for(let e=0;e<=1;e+=c){const s=t+(n-t)*i(e);l+=100*e+`%{${o(s,1-s)}}\n`}const u=l+`100% {${o(n,1-n)}}\n}`,h=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(u)}_${a}`,d=v(e),{stylesheet:f,rules:p}=x.get(d)||function(e,t){const n={stylesheet:A(t),rules:{}};return x.set(e,n),n}(d,e);p[h]||(p[h]=!0,f.insertRule(`@keyframes ${h} ${u}`,f.cssRules.length));const g=e.style.animation||"";return e.style.animation=`${g?`${g}, `:""}${h} ${s}ms linear ${r}ms 1 both`,O+=1,h}function M(e,t){const n=(e.style.animation||"").split(", "),s=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),r=n.length-s.length;r&&(e.style.animation=s.join(", "),O-=r,O||d((()=>{O||(x.forEach((e=>{const{ownerNode:t}=e.stylesheet;t&&y(t)})),x.clear())})))}function P(e){U=e}function F(){if(!U)throw new Error("Function called outside component initialization");return U}function B(e){F().$$.on_mount.push(e)}function $(){const e=F();return(t,n,{cancelable:s=!1}={})=>{const r=e.$$.callbacks[t];if(r){const i=_(t,n,{cancelable:s});return r.slice().forEach((t=>{t.call(e,i)})),!i.defaultPrevented}return!0}}function V(e,t){const n=e.$$.callbacks[t.type];n&&n.slice().forEach((e=>e.call(this,t)))}const G=[],j=[];let Q=[];const q=[],z=Promise.resolve();let K=!1;function W(e){Q.push(e)}function H(e){q.push(e)}const J=new Set;let X,Y=0;function Z(){if(0!==Y)return;const e=U;do{try{for(;Y<G.length;){const e=G[Y];Y++,P(e),ee(e.$$)}}catch(e){throw G.length=0,Y=0,e}for(P(null),G.length=0,Y=0;j.length;)j.pop()();for(let e=0;e<Q.length;e+=1){const t=Q[e];J.has(t)||(J.add(t),t())}Q.length=0}while(G.length);for(;q.length;)q.pop()();K=!1,J.clear(),P(e)}function ee(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(W)}}function te(){return X||(X=Promise.resolve(),X.then((()=>{X=null}))),X}function ne(e,t,n){e.dispatchEvent(_(`${t?"intro":"outro"}${n}`))}const se=new Set;let re;function ie(){re={r:0,c:[],p:re}}function oe(){re.r||r(re.c),re=re.p}function ae(e,t){e&&e.i&&(se.delete(e),e.i(t))}function ce(e,t,n,s){if(e&&e.o){if(se.has(e))return;se.add(e),re.c.push((()=>{se.delete(e),s&&(n&&e.d(1),s())})),e.o(t)}else s&&s()}const le={duration:0};function ue(n,s,r){const o={direction:"in"};let a,c,l=s(n,r,o),u=!1,d=0;function f(){a&&M(n,a)}function p(){const{delay:s=0,duration:r=300,easing:i=t,tick:o=e,css:p}=l||le;p&&(a=L(n,0,1,r,s,i,p,d++)),o(0,1);const m=h()+s,v=m+r;c&&c.abort(),u=!0,W((()=>ne(n,!0,"start"))),c=g((e=>{if(u){if(e>=v)return o(1,0),ne(n,!0,"end"),f(),u=!1;if(e>=m){const t=i((e-m)/r);o(t,1-t)}}return u}))}let m=!1;return{start(){m||(m=!0,M(n),i(l)?(l=l(o),te().then(p)):p())},invalidate(){m=!1},end(){u&&(f(),u=!1)}}}function he(n,s,o){const a={direction:"out"};let c,l=s(n,o,a),u=!0;const d=re;function f(){const{delay:s=0,duration:i=300,easing:o=t,tick:a=e,css:f}=l||le;f&&(c=L(n,1,0,i,s,o,f));const p=h()+s,m=p+i;W((()=>ne(n,!1,"start"))),g((e=>{if(u){if(e>=m)return a(0,1),ne(n,!1,"end"),--d.r||r(d.c),!1;if(e>=p){const t=o((e-p)/i);a(1-t,t)}}return u}))}return d.r+=1,i(l)?te().then((()=>{l=l(a),f()})):f(),{end(e){e&&l.tick&&l.tick(1,0),u&&(c&&M(n,c),u=!1)}}}function de(e,t){ce(e,1,1,(()=>{t.delete(e.key)}))}function fe(e,t,n,s,i,o,a,c,l,u,h,d){let f=e.length,p=o.length,g=f;const m={};for(;g--;)m[e[g].key]=g;const v=[],A=new Map,w=new Map,y=[];for(g=p;g--;){const e=d(i,o,g),r=n(e);let c=a.get(r);c?s&&y.push((()=>c.p(e,t))):(c=u(r,e),c.c()),A.set(r,v[g]=c),r in m&&w.set(r,Math.abs(g-m[r]))}const b=new Set,I=new Set;function E(e){ae(e,1),e.m(c,h),a.set(e.key,e),h=e.first,p--}for(;f&&p;){const t=v[p-1],n=e[f-1],s=t.key,r=n.key;t===n?(h=t.first,f--,p--):A.has(r)?!a.has(s)||b.has(s)?E(t):I.has(r)?f--:w.get(s)>w.get(r)?(I.add(s),E(t)):(b.add(r),f--):(l(n,a),f--)}for(;f--;){const t=e[f];A.has(t.key)||l(t,a)}for(;p;)E(v[p-1]);return r(y),v}function pe(e,t,n){const s=e.$$.props[t];void 0!==s&&(e.$$.bound[s]=n,n(e.$$.ctx[s]))}function ge(e){e&&e.c()}function me(e,t,s,o){const{fragment:a,after_update:c}=e.$$;a&&a.m(t,s),o||W((()=>{const t=e.$$.on_mount.map(n).filter(i);e.$$.on_destroy?e.$$.on_destroy.push(...t):r(t),e.$$.on_mount=[]})),c.forEach(W)}function ve(e,t){const n=e.$$;null!==n.fragment&&(!function(e){const t=[],n=[];Q.forEach((s=>-1===e.indexOf(s)?t.push(s):n.push(s))),n.forEach((e=>e())),Q=t}(n.after_update),r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ae(e,t){-1===e.$$.dirty[0]&&(G.push(e),K||(K=!0,z.then(Z)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function we(t,n,i,o,a,c,l,u=[-1]){const h=U;P(t);const d=t.$$={fragment:null,ctx:[],props:c,update:e,not_equal:a,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(h?h.$$.context:[])),callbacks:s(),dirty:u,skip_bound:!1,root:n.target||h.$$.root};l&&l(d.root);let f=!1;if(d.ctx=i?i(t,n.props||{},((e,n,...s)=>{const r=s.length?s[0]:n;return d.ctx&&a(d.ctx[e],d.ctx[e]=r)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](r),f&&Ae(t,e)),n})):[],d.update(),f=!0,r(d.before_update),d.fragment=!!o&&o(d.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);d.fragment&&d.fragment.l(e),e.forEach(y)}else d.fragment&&d.fragment.c();n.intro&&ae(t.$$.fragment),me(t,n.target,n.anchor,n.customElement),Z()}P(h)}class ye{$destroy(){ve(this,1),this.$destroy=e}$on(t,n){if(!i(n))return e;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const e=s.indexOf(n);-1!==e&&s.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const be=async()=>await chrome.permissions.contains({permissions:["bookmarks"]}),Ie=async e=>(await chrome.storage.local.get([e])??{})[e],Ee=async e=>{await chrome.storage.local.set(e)},Te=async e=>{const t=new URL(await chrome.runtime.getURL("/_favicon/"));return t.searchParams.set("pageUrl",e),t.searchParams.set("size","32"),t.toString()};async function Ce(e){return e?await Ie(De(e)):null}async function ke(e,t=!0){t&&(e.updated=Date.now());let n={};return n[De(e.id)]=e,await chrome.storage.local.set(n),e}async function Se(e){let t=[],n=await Ie("contextKeys")??[],s=!1;const r=await chrome.storage.local.get(null);for(const[i,o]of Object.entries(r))i.startsWith("c-")&&(e&&!e(o)||t.push(o),n.includes(i)||(n.push(i),s=!0));return s&&await Ee({contextKeys:n}),t}async function Re(e){await async function(e){let t=await Ie("openGroups");const n=Object.entries(t).find((([t,n])=>n==e.id));n&&delete t[n[0]],await Ee({openGroups:t})}(e);const t=De(e.id);let n=await Ie("contextKeys");const s=n.indexOf(t);s>-1&&(n.splice(s,1),await Ee({contextKeys:n})),await chrome.storage.local.remove(t);const r=Ne(e.id);await chrome.storage.local.remove(r)}function De(e){return"c-"+e}function Ne(e){return"cr-"+e}function _e(){let e="";for(let t=0;t<8;t++)e+=(65536*(1+Math.random())|0).toString(16).substring(1);return e}function xe(e){return{id:e.id,title:e.title,url:e.url&&""!=e.url?e.url:e.pendingUrl,favIconUrl:e.favIconUrl}}const Ue={search:"Search",windows:"Windows",tabs:"Tabs",saved:"Saved",workspace:"Workspace",signin:"Signin"};function Oe(t){let n,s,r,i,o,a,c,l,u,h=t[0].length+"";return{c(){n=I("div"),s=I("div"),r=I("div"),i=E(h),o=E("\n        Selected"),a=T(),c=I("div"),c.textContent="Cancel",S(r,"class","count svelte-16t0lx7"),S(s,"class","text svelte-16t0lx7"),S(c,"class","cancel svelte-16t0lx7"),S(n,"class","selected svelte-16t0lx7")},m(e,h){w(e,n,h),m(n,s),m(s,r),m(r,i),m(s,o),m(n,a),m(n,c),l||(u=k(c,"mousedown",t[1]),l=!0)},p(e,[t]){1&t&&h!==(h=e[0].length+"")&&R(i,h)},i:e,o:e,d(e){e&&y(n),l=!1,u()}}}function Le(e,t,n){let{selectedTabs:s}=t;$();return e.$$set=e=>{"selectedTabs"in e&&n(0,s=e.selectedTabs)},e.$$.update=()=>{1&e.$$.dirty&&console.log(s)},[s,()=>{n(0,s=[])}]}class Me extends ye{constructor(e){super(),we(this,e,Le,Oe,o,{selectedTabs:0})}}function Pe(e){const t=e-1;return t*t*t+1}function Fe(e,{delay:n=0,duration:s=400,easing:r=t}={}){const i=+getComputedStyle(e).opacity;return{delay:n,duration:s,easing:r,css:e=>"opacity: "+e*i}}function Be(e,{delay:t=0,duration:n=400,easing:s=Pe,axis:r="y"}={}){const i=getComputedStyle(e),o=+i.opacity,a="y"===r?"height":"width",c=parseFloat(i[a]),l="y"===r?["top","bottom"]:["left","right"],u=l.map((e=>`${e[0].toUpperCase()}${e.slice(1)}`)),h=parseFloat(i[`padding${u[0]}`]),d=parseFloat(i[`padding${u[1]}`]),f=parseFloat(i[`margin${u[0]}`]),p=parseFloat(i[`margin${u[1]}`]),g=parseFloat(i[`border${u[0]}Width`]),m=parseFloat(i[`border${u[1]}Width`]);return{delay:t,duration:n,easing:s,css:e=>`overflow: hidden;opacity: ${Math.min(20*e,1)*o};${a}: ${e*c}px;padding-${l[0]}: ${e*h}px;padding-${l[1]}: ${e*d}px;margin-${l[0]}: ${e*f}px;margin-${l[1]}: ${e*p}px;border-${l[0]}-width: ${e*g}px;border-${l[1]}-width: ${e*m}px;`}}var $e="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAActJREFUaEPtmGtuAjEMhM3JWk7WcjLak1EZZSQrXbATT3YDyv6hpd5kPnvycE/y4s/pxfXLAji6gqsC71SBTxH52RsoYyEV/FUE68/2UZDf8sX3SKgeAAivRT/SeRGRYRCtACoEWVfByLR+wj5WrI0dAtICcBURZF3FqiDP8zUwHSIKYIX0iLDvnwPg4WUTAdCsa/b16REPMbaCkXlDEJGBMLHaRbOXeW7lZcZY96E8AHbpbTUpVooC0DImIqjCLgCwT8b7teWoY3oVQLaYALAlpapRAC+uZWHbdZAe1xuA6ldzN8IJ7c3vJsYbAH6lLLgKgGLLKADFrwVg10VMXXAFgLoxeBVgXSPgZXswenO7/o+cxBrDOo2zF8JNoGgWGPchqnVAEwWwVor2ApjDvpu90f6rQhSgtlJUSN3QQABtW24B0Mm3+mHbwGvMR1Fpe2bE2BaTAtEKsLWbPNstarvVdkpD9AJYfyPTyLz+Tf+lYht9C0mFyAKE9uqNIBrEUQBYT+i19fcuOx0JQIE4GiANMQNACmIWgG6ImQC6IGYDaIaYEaCGeNp6zgpgryyPTvR7zOwA7km/ANwUDQ5YFRicYHf4VQE3RYMD/gDqYnUxDugFIgAAAABJRU5ErkJggg==",Ve="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAUtJREFUaEPtWEEOwjAMy34GLwNeBj8DRdpQN61Qx+6gUibtAk1ix0nadbLBn2lw/JYEfq1gKpAKkBnIEiITSJunAnQKSQcRBa5m5q/6OZmZv5BvlIA7v8zIz2b2ELFw4PfZ1w0hgRIoA3k8BYmtTwgTtHjOkJIE7StCwHnQgUU+qNMoQ4KxXbVdVIHFSQRIxKY6K1gCaDlJwXtwBYFWEnLwSgLfSHQBryZQI+G/L5uUau9494SqhMom22a7/E+x8UmnUG067JGQg+9RQrXxKi+dJVCW0KaG9qbNME38aVT+/RhtAdiyBv68UPQAAgxZ20SGJRABFLHpcphjgDC2ko1MAUDhI3QalQRWfZ5GeuBZaKg4HlAJQQkMf63iyXcSfh+kuhMqmxK+NEMVaJrNRy5KAkdmey9WKpAKkBnIEiITSJunAnQKSQfDK/AC3StaMa1qdpgAAAAASUVORK5CYII=";function Ge(t){let n,s,r,i;return{c(){n=I("img"),S(n,"class","clear button svelte-36lh5"),S(n,"alt","Clear"),c(n.src,s=Ve)||S(n,"src",s)},m(e,s){w(e,n,s),r||(i=k(n,"mousedown",t[3]),r=!0)},p:e,d(e){e&&y(n),r=!1,i()}}}function je(t){let n,s,r,i,o,a,l,u,h,d=t[0].length>0&&Ge(t);return{c(){n=I("div"),s=I("img"),i=T(),o=I("input"),a=T(),d&&d.c(),c(s.src,r=$e)||S(s,"src",r),S(s,"alt","Search"),S(s,"class","svelte-36lh5"),S(o,"type","text"),S(o,"placeholder",t[2]),S(o,"class","svelte-36lh5"),S(n,"class","search-box svelte-36lh5"),S(n,"style",l=t[1]?"background-color: "+t[1]:"")},m(e,r){w(e,n,r),m(n,s),m(n,i),m(n,o),D(o,t[0]),m(n,a),d&&d.m(n,null),u||(h=k(o,"input",t[4]),u=!0)},p(e,[t]){4&t&&S(o,"placeholder",e[2]),1&t&&o.value!==e[0]&&D(o,e[0]),e[0].length>0?d?d.p(e,t):(d=Ge(e),d.c(),d.m(n,null)):d&&(d.d(1),d=null),2&t&&l!==(l=e[1]?"background-color: "+e[1]:"")&&S(n,"style",l)},i:e,o:e,d(e){e&&y(n),d&&d.d(),u=!1,h()}}}function Qe(e,t,n){let{searchText:s=""}=t,{backgroundColor:r=null}=t,{placeholderText:i="Search"}=t;return e.$$set=e=>{"searchText"in e&&n(0,s=e.searchText),"backgroundColor"in e&&n(1,r=e.backgroundColor),"placeholderText"in e&&n(2,i=e.placeholderText)},[s,r,i,()=>{n(0,s="")},function(){s=this.value,n(0,s)}]}class qe extends ye{constructor(e){super(),we(this,e,Qe,je,o,{searchText:0,backgroundColor:1,placeholderText:2})}}var ze="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAR1JREFUaEPtWUEOwjAM834GLwNeBrwMZLRMUKlt2oxuk5wLB5Iujp3QhQkHt+ng+UMAtmZQDIiBYAU8EjoBuADgZ4vdAFydAXcAzwb/5dgaACbA5Hutdj7PZWEIgObx/8mlFvCavVnNRyMKr/8QAOcOAF68AlCqlElIDMxVYrOuOs28TbwGA99a9/aH+WXzHAnAkkkZsN8Zfs9CpVacZlsASBPUFNIUau3IxF8S2lpCIQL3MIUEQBIKaaAczMtk8c1uzz3gGq8C8Ef5iAEWd8QbWY5EMSAGgg0uCUlCkpBj6Vu7Stgiqme5GyTgswCzzXj3XiiyjIoCsPjQbZSHRP8j6AXChVaV+ZqEeh8+LE4AhpU68yAxIAaCFTi8hN7r7GUxQBou4gAAAABJRU5ErkJggg==",Ke="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAATtJREFUaEPtmAEKwjAMRbOb6cnUk+nNlEALpXbbb/ODBjIQRJLuv/xmM90k+LUF1y8J8GsH04F0wFiB3EIicimf+2QxNe81mfMVznDgXVZ9iAgKoXG3kmfSYEoulX82ZUEgWvGaerU4YQVQAb2gI4iZWGh3MQBQCLp4vTEL4AzCRTwbYA9Cf68Nq9+RPoG2jwfACKIVQxXvBbAHQRfvCdBDuIj3BqgQ+rY1v3H3moL5FIIbjxmYAMxqrqyVDqxUjZmTDjCrubJWOrBSNWZOOnBSzdWBHzbJ04F2iAn3Z66fwOiDTLXIw4GR+Ho/uhNsgNHsG2akPBrc/36oRwQiMfDTh9kDM8JmYiEYaw/ocz780WLow91q88pRueboZRr4rVsI2qeeQQngWV1k7XQAqZJnTDrgWV1k7fAOfABCjT8xHsNvTwAAAABJRU5ErkJggg==",We="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAWFJREFUaEPtmFEOAiEMRLs305OpJ1NPpmkCBhFYamdiiN3EDyN053Xqdssmi1/b4volAH7tYDjwDw4cROTGAmWW0FlETkn4RUT0O/xiAZTis2gKBAOgJZ4GgQYYiadAIAFa4o9J9bUqflg5oQB64vPTR59EFAgEwJ74nHwKBALgUZWHlk3vud+CcGlwbRaRWtBIfM+JmT3d/uEF0MAKoR9Lo9L12uTuxn0fIAgAeHe1BAwAS7YYa8MBRlYtMcMBS7YYa8MBRlYtMcMBS7YYa8MBRlYtMcOB9DqsA4z18Epfv7/Z92aQ14FyoFExeYjfqwKdj3WvXi4Nrs1JQDlSzkCU4jXEzyeyeqgfQdTi3ccrCAc0izMQcPHu+qsKfQRBEY8G6DmRB//M6y6bMnGoEipjLn24m0GWPl5vQUDLhl1CZfzcrKxdeq8Rvn5n/Aemb45YGACILHpihAOe7CH2Lu/AE/9YPzHJ8D1yAAAAAElFTkSuQmCC",He="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAP5JREFUaEPtmFEOgjAQRIeTiSdTT6aeTDMJ/iBgk2FqlkwTPgh025m3S0sHFG9D8fkjAv5NMARCQHQgKbRh4BXAaXp+A/AQzV7s7iTwmo1oGcsSFMAI4D4TcHZQcAng3EsToABSuAB4Ts6XqwFHzX7FdKZQBLQ4EAItLjnfCQGnuy2xQ+CHS1zM2CyLGAM7CXA3ypWYjbtR3u/eXALKb+bKC2CqlE6hT66XLuLdC3YpoKuIu0ze/RntIiIEuti8MUgIhIDogDOFuIjx4vFijhbXQLkIHGIzd5ijRdLn8WKpHxrx29Le3VUD7TMQ34wA0UC5ewjIFooBQkA0UO7+BpBsGzGQw369AAAAAElFTkSuQmCC";const Je={grey:"#dadce0",blue:"#8ab4f8",red:"#f18b82",yellow:"#fbd563",green:"#81c995",pink:"#f08aca",purple:"#c58af9",cyan:"#78d9ec",orange:"#f5ac70"};function Xe(e,t,n){const s=e.slice();return s[5]=t[n][0],s[6]=t[n][1],s}function Ye(e){let t,n,s,r,i,o;function a(){return e[3](e[5])}return{c(){t=I("div"),n=I("div"),r=T(),S(n,"class",s="color "+(e[0].color==e[5]?" selected":"")+" svelte-110xtv0"),N(n,"background-color",e[6]),S(t,"class","color-container svelte-110xtv0")},m(e,s){w(e,t,s),m(t,n),m(t,r),i||(o=k(n,"mousedown",a),i=!0)},p(t,r){e=t,1&r&&s!==(s="color "+(e[0].color==e[5]?" selected":"")+" svelte-110xtv0")&&S(n,"class",s)},d(e){e&&y(t),i=!1,o()}}}function Ze(e){let t,n=0==e[1].length||e[1].includes(e[5]),s=n&&Ye(e);return{c(){s&&s.c(),t=C()},m(e,n){s&&s.m(e,n),w(e,t,n)},p(e,r){2&r&&(n=0==e[1].length||e[1].includes(e[5])),n?s?s.p(e,r):(s=Ye(e),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null)},d(e){s&&s.d(e),e&&y(t)}}}function et(t){let n,s=Object.entries(Je),r=[];for(let e=0;e<s.length;e+=1)r[e]=Ze(Xe(t,s,e));return{c(){n=I("div");for(let e=0;e<r.length;e+=1)r[e].c();S(n,"class","colors svelte-110xtv0")},m(e,t){w(e,n,t);for(let e=0;e<r.length;e+=1)r[e]&&r[e].m(n,null)},p(e,[t]){if(7&t){let i;for(s=Object.entries(Je),i=0;i<s.length;i+=1){const o=Xe(e,s,i);r[i]?r[i].p(o,t):(r[i]=Ze(o),r[i].c(),r[i].m(n,null))}for(;i<r.length;i+=1)r[i].d(1);r.length=s.length}},i:e,o:e,d(e){e&&y(n),b(r,e)}}}function tt(e,t,n){let{group:s={}}=t,{colors:r=[]}=t,i=$();const o=e=>{i("colorSelected",e)};return e.$$set=e=>{"group"in e&&n(0,s=e.group),"colors"in e&&n(1,r=e.colors)},[s,r,o,e=>{o(e)}]}class nt extends ye{constructor(e){super(),we(this,e,tt,et,o,{group:0,colors:1})}}var st="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAZBJREFUaEPtmVEOwiAMhuvJ1JOpJ1NPpvkfSNjW0pYJ7RJJfBL0+yiUsp3o4O10cH76C0RHMCIClw7plzRmtsCdiG4dAhjyICKMX7SZApj5Zyd8GbbhPZrAlYgWy2mmAGYREejZAyUC4QIA2azjallp+yOFgLQNLNFJK2CBh3hKASt8SgEJHpnmzZwZqSLQggcod+ilEdDgS7ZaZ6UUAhb4tAJW+JQCHvh0Al54CHDFX0gx1wNfTut6bEg5vQe+SCCd4lxgLzUjq9FfwKvXh1ECU+BhN0JgGvwIganwmgDSGD6tC0i9RqfDtwTqQgq7HzVIq4XAtwQ+K9pNEVV9HwYvCXAnIHuINC7plqipKdLSgctCVoHQmRcfFAk1yDoCKeB7l1Aa+B6BVPBegbPwVG3ahuU2tXUTSwkhFN4TAU4gHH6PQAr4PQJIq1Kz1k6Wc0rts3cPhC+tEQKQatVO6qx6OkgXmnUx5/nNFAI/fxnnnQFrf+1K2fM6SHwlaoXy9NMEPL8V0vcvEDLt1Z8ePgJfJqZuMbB035gAAAAASUVORK5CYII=",rt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAA/ZJREFUaEPtmWnIjlkYx3+YkCZKBgkJIUtKIkKN7CHbBxQlW9apmclukL2QsosSoRQ+8EEzlJAQX4aZshQ+CCNbypK1v86r47znPPe5n/t5eJ/p/dfd+3Sfc1/n+p9zrvWtQomjSonrTyWB732ClSfwfz6BNkBv4DVwDrhRDLLFukI1gVNAd6P0aWAA8KbQJIpFYA6w1lF2AbC6VAhcATo5yv4LtCsFAsOAowFFJwB7CkmiGFfoIDA6oORJoG9FJtAW+CdBwW7AhUKRKPQJrALmJyi3DxhfEQn8YNxk1QTlPgI1gLeFIFHIE5gM7HSUkv+vbsWDsmGd0pqKRuAW0MJRaqwh4Hqee0DjikSgD/CXo9B9oJF59xCo74z3B/7MSiLpCjUwC+tv0m9dFRu/A+vNi+XAImdcNvCf9Tyyfj8Ayh6R128vQgR2AFMy7k5t4IWRUQd4llHeJmC2K8NHQIqLQBbsAmTUNvYDsoksKBfJfQSWAkuyrAK09qTPHYC/M8pdBki/L/ARUKiPMa73wFPreWLuqoxXmacPK4B6gadaBLl+rrMI2YAUWBkQeBxQxJXyMjD9zQLZyk/m+QMYGBC20Kz71XAuLzQR0F324RIwCHicRXPrW7lYnXrHgLxJwG7fWJIbHQIod5EXcXEX0PjVjCQ6m/TbF9ieA+OAY6E1kgjou67AXqCVR8grQPl/jM34dBgByDupBHWhGlpJ38VcGxRDQN83MyfRIyAsn0JlKrA9IE9NAO38naTTjSUgObXMSYwMCE1T88og5ZF8OGx2/mWS8hpPQ6BM3lZgmkf4ZmBWzKLARuAXz9xtwPRIGZ+n5UNA3ynQfRVQgKG5jM1RyhdrygWpGCL5EjgPqDS0IUOM7fso8XPn6t73jFHanpMvAVVVNq4D6sS56AJ8AC57xuR+2zvvU+uT+gPT71Hfx4Z7dxU3lD3KkwgKiL9a2aneqSKb68hRvnQtzSnkQ2Cep8M2CpD3EHKlITJyGbsw2GMzM4EtxSZwAlA1ZaMu0Mvsqu8q2XO1w2o9yo7cGkENMQW3aORzAipSfrRWUIp8EwjFh5Ayh4CWTgtSspXcRSMtgZjGVfTigYlKWbQhUUhLYIZ1h5MWUKqtdOEdICNvkvSBGVclF8qCy4lIS+AAMCZCkQ3Ab8489YJURyQhVecuLQGl0E1zaKDmrdxlKMVubgqlUPNXorWGkscopCWghlRZr8de4DawDlCeFIPhgFotvv8X6Oo1jBGiOWkJyM0p/7eh67IYiMoerQ+VeuhaqYy0cSSNR0tLQIaoQKOc5YzZ9bOxuxWYp4JJRH42gU3RWScdhbQEooR+y0mVBL7lbvvWKvkT+AT3eq4xgJg30gAAAABJRU5ErkJggg==",it="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAvFJREFUaEPtmUvITVEUx3+fhCRmSEiURCYmIgbkNVEeEwaUvPLIgPLMK3mVTLwiShQjDEzkUUJiYOQxQGGgPEZSIor+dT7d79xz7lnrfHtf9+iuun2nvrX++//fa5+9116ng4pbR8X50xbwrzPYzsD/nIExwHTgO/AAeBlDbKwl1Ae4A0xOSN8F5gA/QouIJWAzcDhFdjtwsCoCngATUmRfAOOqIGAecC2H6DLgfEgRMZbQZWBRDsnbwMxWFjAWeF5AcBLwKJSI0Bk4AGwrIHcRWNqKAnom22SPAnK/gd7AzxAiQmZgJXDGSEpZOmT0begWUsBrYJSR1HtgqNG3KQJmALechGYDN50xde5FGRgEDAT0t+i5l5OM3oFPNb/PNc8fgM7fx+Q5Ez5PwGlglZNQbPdjwIb0IFkCRFwCWtHqTvIsAXuA3a3IHtgLiN9fyxKgo77bL1ekCZiV3izy3gGVvvsjkSgLuwPQSd/FGu1Cy4GzZUcLHLcCOJeFWbSNzgVUuwwITMgK9wVYAlzPCygSoLiJwAVgtHXUQH66Q6voe9wIzyJA8SOSTEwJRK4IRk0AzfzbIkerAOH0TTKxsAi0m/+/ksz8NwuOR0An3klgjQW8hM8pYK0nrowA4eug63KgeAbN8a07pCyYZQU8BHQ1DGla91O9gGUF6FYVw9x83AFJv0d9nxg2HnjmAS4jYGuMDltCej1wIraAG4BuUzFMDbEFHuAyGfgK9PMM4vAVdn+Hv/sTk6Vx5Rk/y1clyysriDcD64DjRnDdZVcDvwAdUMOMcWrPmKtgr4BLwGIDkaPAppSfekF19XwGlqtz5xXwDhjeQICatxuBpzk+I5OLUl7zV2EaQ8WjybwC1JAakoH8BjgCqE6y2HxgX873Ai29wRYQ+XgFaJtT/7/WtFx2AqbqsSZQn6G0rHal8K4C5orXK0Avog4a1Sz3klm/b52tHD9dmCRkWnLz2gIo0ybzCjCBNtOpLaCZs501VuUz8Af5Em4xb/+t1AAAAABJRU5ErkJggg==",ot="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAYBJREFUaEPt2T9KA0EYhvEnl7BPbSHoGbyAdmqjhY2NBxDUwtpOEAQrK8ETWNjYWXqA9LlEGDCwLDt/9puJ+36QhVTOhOe3w86OZIbza+a8ny1g6hVsvQKnwBGwD7wA38DXJpEtAXfAbS/2CbjyABiKD91LYEcdEIsP3R/AsTIgFR+6z4A3VUAu/h4IYzZ6WR9iifhwZywAmXgLQCp+LEAufgxAMr4UIBtfAsjFh7+H7XKyK7ULycenVsBFfAzgJn4I4Cq+D3AX3wVcAs+JrWTy3SbWtt6FfoCDyCDZ+O4K/AK7EcC/HIutL5L1ClwDj4kvkUV0X2S5h1gS0X8Tu0MMHSVcIWJnITeImsOcxDOR+59YfiVygLCz5hCTvuhKANKIUoAsYgxAEjEWIIewAKQQVoAMogZQgrgAXq1H5ZJ5tYAc4hM4LAmxjmkBSCEWwNwaVzKvFSCGuAEeSkKsY1oCQsM5cALsAe9/Hzc/s1pvYtW81itQFWOZvAVY7lrLOStTMVIxhvg/OwAAAABJRU5ErkJggg==",at="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAWNJREFUaEPtWdFuxCAMc79sd1+27ct2f3aTpUZiVSkhKTSdwstJp7TYcQiGLrj5WG6OH0ngagVTgVTAmQFNCT0AfALgb894AngVD3yt7+l5h8RWcbYIeCb9BsDnZTABPxb0QL1btgi81wkJpsymBsdevEZFUbycw6yAENiWg4aAJaam0i0IbMFTda49jvAEtuCpOIesmdAE9sBz/ZT/hyVQA8/shydwBD48gRb40AQ04MMS0IIPSaAHfDgCveBDEbCAFxtCM8g9oerDtGbO6oU84FVeaiSB4eAPTdJK3+pGp4AfReBM8HJ+mLYGzgY/1Y2eCf6SNspsieTWrlV2nululD37A4Dl/LzXMqcTUPXtjqAkwGRZ94GORFdDU4FUwFlHWUL/ooRkdz1rc+qpqvKS13yx5bkS7wF7FLu9pv8T2zrQMNjzjcBDgha6qbyGgAfE8GeTwPAUNyZIBVIBZwZuX0K/di2IMRexSREAAAAASUVORK5CYII=";class ct{static users="users";static user(e){return this.users+"/"+e}static userTabs(e){return this.user(e)+"/tabs"}static userTab(e,t){return this.userTabs(e)+"/"+t}static userContexts(e){return this.user(e)+"/contexts"}static userContext(e,t){return this.userContexts(e)+"/"+t}static userResources(e){return this.user(e)+"/resources"}static userResource(e,t){return this.userResources(e)+"/"+t}}
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
     */const lt=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&s+1<e.length&&56320==(64512&e.charCodeAt(s+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++s)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},ut={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let t=0;t<e.length;t+=3){const r=e[t],i=t+1<e.length,o=i?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,l=r>>2,u=(3&r)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,i||(h=64)),s.push(n[l],n[u],n[h],n[d])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(lt(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,s=0;for(;n<e.length;){const r=e[n++];if(r<128)t[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=e[n++];t[s++]=String.fromCharCode((31&r)<<6|63&i)}else if(r>239&&r<365){const i=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[s++]=String.fromCharCode(55296+(i>>10)),t[s++]=String.fromCharCode(56320+(1023&i))}else{const i=e[n++],o=e[n++];t[s++]=String.fromCharCode((15&r)<<12|(63&i)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let t=0;t<e.length;){const r=n[e.charAt(t++)],i=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==i||null==o||null==a)throw new ht;const c=r<<2|i>>4;if(s.push(c),64!==o){const e=i<<4&240|o>>2;if(s.push(e),64!==a){const e=o<<6&192|a;s.push(e)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class ht extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const dt=function(e){return function(e){const t=lt(e);return ut.encodeByteArray(t,!0)}(e).replace(/\./g,"")},ft=function(e){try{return ut.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
const pt=()=>
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,gt=()=>{try{return pt()||(()=>{if("undefined"==typeof process||void 0===process.env)return;const e=process.env.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&ft(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},mt=e=>{var t,n;return null===(n=null===(t=gt())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},vt=e=>{const t=mt(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),s]:[t.substring(0,n),s]},At=()=>{var e;return null===(e=gt())||void 0===e?void 0:e.config},wt=e=>{var t;return null===(t=gt())||void 0===t?void 0:t[`_${e}`]};
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
class yt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
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
function bt(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}class It extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,It.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Et.prototype.create)}}class Et{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],i=r?function(e,t){return e.replace(Tt,((e,n)=>{const s=t[n];return null!=s?String(s):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${i} (${s}).`;return new It(s,o,n)}}const Tt=/\{\$([^}]+)}/g;function Ct(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const n=e[r],i=t[r];if(kt(n)&&kt(i)){if(!Ct(n,i))return!1}else if(n!==i)return!1}for(const e of s)if(!n.includes(e))return!1;return!0}function kt(e){return null!==e&&"object"==typeof e}
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
     */function St(e){const t=[];for(const[n,s]of Object.entries(e))Array.isArray(s)?s.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function Rt(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,s]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(s)}})),t}function Dt(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}class Nt{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let s;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");s=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===s.next&&(s.next=_t),void 0===s.error&&(s.error=_t),void 0===s.complete&&(s.complete=_t);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch(e){}})),this.observers.push(s),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function _t(){}
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
     */function xt(e){return e&&e._delegate?e._delegate:e}class Ut{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
     */const Ot="[DEFAULT]";
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
     */class Lt{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new yt;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),s=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(s)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(s)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
     */(e))try{this.getOrInitializeService({instanceIdentifier:Ot})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=Ot){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=Ot){return this.instances.has(e)}getOptions(e=Ot){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(s)}return s}onInit(e,t){var n;const s=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(s))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(s,r);const i=this.instances.get(s);return i&&e(i,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(s=e,s===Ot?void 0:s),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var s;return n||null}normalizeInstanceIdentifier(e=Ot){return this.component?this.component.multipleInstances?e:Ot:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Mt{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Lt(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
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
     */var Pt;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(Pt||(Pt={}));const Ft={debug:Pt.DEBUG,verbose:Pt.VERBOSE,info:Pt.INFO,warn:Pt.WARN,error:Pt.ERROR,silent:Pt.SILENT},Bt=Pt.INFO,$t={[Pt.DEBUG]:"log",[Pt.VERBOSE]:"log",[Pt.INFO]:"info",[Pt.WARN]:"warn",[Pt.ERROR]:"error"},Vt=(e,t,...n)=>{if(t<e.logLevel)return;const s=(new Date).toISOString(),r=$t[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${s}]  ${e.name}:`,...n)};class Gt{constructor(e){this.name=e,this._logLevel=Bt,this._logHandler=Vt,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pt))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Ft[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pt.DEBUG,...e),this._logHandler(this,Pt.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pt.VERBOSE,...e),this._logHandler(this,Pt.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pt.INFO,...e),this._logHandler(this,Pt.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pt.WARN,...e),this._logHandler(this,Pt.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pt.ERROR,...e),this._logHandler(this,Pt.ERROR,...e)}}const jt=(e,t)=>t.some((t=>e instanceof t));let Qt,qt;const zt=new WeakMap,Kt=new WeakMap,Wt=new WeakMap,Ht=new WeakMap,Jt=new WeakMap;let Xt={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Kt.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Wt.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return en(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Yt(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(qt||(qt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(tn(this),t),en(zt.get(this))}:function(...t){return en(e.apply(tn(this),t))}:function(t,...n){const s=e.call(tn(this),t,...n);return Wt.set(s,t.sort?t.sort():[t]),en(s)}}function Zt(e){return"function"==typeof e?Yt(e):(e instanceof IDBTransaction&&function(e){if(Kt.has(e))return;const t=new Promise(((t,n)=>{const s=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",i),e.removeEventListener("abort",i)},r=()=>{t(),s()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",r),e.addEventListener("error",i),e.addEventListener("abort",i)}));Kt.set(e,t)}(e),jt(e,Qt||(Qt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,Xt):e)}function en(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const s=()=>{e.removeEventListener("success",r),e.removeEventListener("error",i)},r=()=>{t(en(e.result)),s()},i=()=>{n(e.error),s()};e.addEventListener("success",r),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&zt.set(t,e)})).catch((()=>{})),Jt.set(t,e),t}(e);if(Ht.has(e))return Ht.get(e);const t=Zt(e);return t!==e&&(Ht.set(e,t),Jt.set(t,e)),t}const tn=e=>Jt.get(e);const nn=["get","getKey","getAll","getAllKeys","count"],sn=["put","add","delete","clear"],rn=new Map;function on(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(rn.get(t))return rn.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,r=sn.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!r&&!nn.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,r?"readwrite":"readonly");let o=i.store;return s&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&i.done]))[0]};return rn.set(t,i),i}Xt=(e=>({...e,get:(t,n,s)=>on(t,n)||e.get(t,n,s),has:(t,n)=>!!on(t,n)||e.has(t,n)}))(Xt);
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
class an{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const cn="@firebase/app",ln="0.9.13",un=new Gt("@firebase/app"),hn="[DEFAULT]",dn={[cn]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},fn=new Map,pn=new Map;function gn(e,t){try{e.container.addComponent(t)}catch(n){un.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function mn(e){const t=e.name;if(pn.has(t))return un.debug(`There were multiple attempts to register component ${t}.`),!1;pn.set(t,e);for(const t of fn.values())gn(t,e);return!0}function vn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
     */const An=new Et("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
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
class wn{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ut("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw An.create("app-deleted",{appName:this._name})}}
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
     */const yn="9.23.0";function bn(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const s=Object.assign({name:hn,automaticDataCollectionEnabled:!1},t),r=s.name;if("string"!=typeof r||!r)throw An.create("bad-app-name",{appName:String(r)});if(n||(n=At()),!n)throw An.create("no-options");const i=fn.get(r);if(i){if(Ct(n,i.options)&&Ct(s,i.config))return i;throw An.create("duplicate-app",{appName:r})}const o=new Mt(r);for(const e of pn.values())o.addComponent(e);const a=new wn(n,s,o);return fn.set(r,a),a}function In(e=hn){const t=fn.get(e);if(!t&&e===hn&&At())return bn();if(!t)throw An.create("no-app",{appName:e});return t}function En(e,t,n){var s;let r=null!==(s=dn[e])&&void 0!==s?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const e=[`Unable to register library "${r}" with version "${t}":`];return i&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void un.warn(e.join(" "))}mn(new Ut(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}
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
     */const Tn="firebase-heartbeat-database",Cn=1,kn="firebase-heartbeat-store";let Sn=null;function Rn(){return Sn||(Sn=function(e,t,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(e,t),a=en(o);return s&&o.addEventListener("upgradeneeded",(e=>{s(en(o.result),e.oldVersion,e.newVersion,en(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{i&&e.addEventListener("close",(()=>i())),r&&e.addEventListener("versionchange",(e=>r(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}(Tn,Cn,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(kn)}}).catch((e=>{throw An.create("idb-open",{originalErrorMessage:e.message})}))),Sn}async function Dn(e,t){try{const n=(await Rn()).transaction(kn,"readwrite"),s=n.objectStore(kn);await s.put(t,Nn(e)),await n.done}catch(e){if(e instanceof It)un.warn(e.message);else{const t=An.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});un.warn(t.message)}}}function Nn(e){return`${e.name}!${e.options.appId}`}
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
     */class _n{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Un(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=xn();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=xn(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let s=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),On(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),On(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}(this._heartbeatsCache.heartbeats),s=dt(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function xn(){return(new Date).toISOString().substring(0,10)}class Un{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise(((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=await Rn();return await t.transaction(kn).objectStore(kn).get(Nn(e))}catch(e){if(e instanceof It)un.warn(e.message);else{const t=An.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});un.warn(t.message)}}}(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Dn(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Dn(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function On(e){return dt(JSON.stringify({version:2,heartbeats:e})).length}
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
     */var Ln;Ln="",mn(new Ut("platform-logger",(e=>new an(e)),"PRIVATE")),mn(new Ut("heartbeat",(e=>new _n(e)),"PRIVATE")),En(cn,ln,Ln),En(cn,ln,"esm2017"),En("fire-js","");var Mn,Pn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},Fn=Fn||{},Bn=Pn||self;function $n(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function Vn(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}var Gn="closure_uid_"+(1e9*Math.random()>>>0),jn=0;function Qn(e,t,n){return e.call.apply(e.bind,arguments)}function qn(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function zn(e,t,n){return(zn=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Qn:qn).apply(null,arguments)}function Kn(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function Wn(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(e,n,s){for(var r=Array(arguments.length-2),i=2;i<arguments.length;i++)r[i-2]=arguments[i];return t.prototype[n].apply(e,r)}}function Hn(){this.s=this.s,this.o=this.o}Hn.prototype.s=!1,Hn.prototype.sa=function(){var e;!this.s&&(this.s=!0,this.N(),0)&&(e=this,Object.prototype.hasOwnProperty.call(e,Gn)&&e[Gn]||(e[Gn]=++jn))},Hn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Jn=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Xn(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function Yn(e,t){for(let t=1;t<arguments.length;t++){const n=arguments[t];if($n(n)){const t=e.length||0,s=n.length||0;e.length=t+s;for(let r=0;r<s;r++)e[t+r]=n[r]}else e.push(n)}}function Zn(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Zn.prototype.h=function(){this.defaultPrevented=!0};var es=function(){if(!Bn.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{Bn.addEventListener("test",(()=>{}),t),Bn.removeEventListener("test",(()=>{}),t)}catch(e){}return e}();function ts(e){return/^[\s\xa0]*$/.test(e)}function ns(){var e=Bn.navigator;return e&&(e=e.userAgent)?e:""}function ss(e){return-1!=ns().indexOf(e)}function rs(e){return rs[" "](e),e}rs[" "]=function(){};var is,os,as,cs=ss("Opera"),ls=ss("Trident")||ss("MSIE"),us=ss("Edge"),hs=us||ls,ds=ss("Gecko")&&!(-1!=ns().toLowerCase().indexOf("webkit")&&!ss("Edge"))&&!(ss("Trident")||ss("MSIE"))&&!ss("Edge"),fs=-1!=ns().toLowerCase().indexOf("webkit")&&!ss("Edge");function ps(){var e=Bn.document;return e?e.documentMode:void 0}e:{var gs="",ms=(os=ns(),ds?/rv:([^\);]+)(\)|;)/.exec(os):us?/Edge\/([\d\.]+)/.exec(os):ls?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(os):fs?/WebKit\/(\S+)/.exec(os):cs?/(?:Version)[ \/]?(\S+)/.exec(os):void 0);if(ms&&(gs=ms?ms[1]:""),ls){var vs=ps();if(null!=vs&&vs>parseFloat(gs)){is=String(vs);break e}}is=gs}if(Bn.document&&ls){var As=ps();as=As||(parseInt(is,10)||void 0)}else as=void 0;var ws=as;function ys(e,t){if(Zn.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(ds){e:{try{rs(t.nodeName);var r=!0;break e}catch(e){}r=!1}r||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:bs[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ys.$.h.call(this)}}Wn(ys,Zn);var bs={2:"touch",3:"pen",4:"mouse"};ys.prototype.h=function(){ys.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Is="closure_listenable_"+(1e6*Math.random()|0),Es=0;function Ts(e,t,n,s,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.la=r,this.key=++Es,this.fa=this.ia=!1}function Cs(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function ks(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function Ss(e){const t={};for(const n in e)t[n]=e[n];return t}const Rs="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ds(e,t){let n,s;for(let t=1;t<arguments.length;t++){for(n in s=arguments[t],s)e[n]=s[n];for(let t=0;t<Rs.length;t++)n=Rs[t],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function Ns(e){this.src=e,this.g={},this.h=0}function _s(e,t){var n=t.type;if(n in e.g){var s,r=e.g[n],i=Jn(r,t);(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Cs(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function xs(e,t,n,s){for(var r=0;r<e.length;++r){var i=e[r];if(!i.fa&&i.listener==t&&i.capture==!!n&&i.la==s)return r}return-1}Ns.prototype.add=function(e,t,n,s,r){var i=e.toString();(e=this.g[i])||(e=this.g[i]=[],this.h++);var o=xs(e,t,s,r);return-1<o?(t=e[o],n||(t.ia=!1)):((t=new Ts(t,this.src,i,!!s,r)).ia=n,e.push(t)),t};var Us="closure_lm_"+(1e6*Math.random()|0),Os={};function Ls(e,t,n,s,r){if(s&&s.once)return Ps(e,t,n,s,r);if(Array.isArray(t)){for(var i=0;i<t.length;i++)Ls(e,t[i],n,s,r);return null}return n=Qs(n),e&&e[Is]?e.O(t,n,Vn(s)?!!s.capture:!!s,r):Ms(e,t,n,!1,s,r)}function Ms(e,t,n,s,r,i){if(!t)throw Error("Invalid event type");var o=Vn(r)?!!r.capture:!!r,a=Gs(e);if(a||(e[Us]=a=new Ns(e)),(n=a.add(t,n,s,o,i)).proxy)return n;if(s=function(){function e(n){return t.call(e.src,e.listener,n)}const t=Vs;return e}(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)es||(r=o),void 0===r&&(r=!1),e.addEventListener(t.toString(),s,r);else if(e.attachEvent)e.attachEvent($s(t.toString()),s);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(s)}return n}function Ps(e,t,n,s,r){if(Array.isArray(t)){for(var i=0;i<t.length;i++)Ps(e,t[i],n,s,r);return null}return n=Qs(n),e&&e[Is]?e.P(t,n,Vn(s)?!!s.capture:!!s,r):Ms(e,t,n,!0,s,r)}function Fs(e,t,n,s,r){if(Array.isArray(t))for(var i=0;i<t.length;i++)Fs(e,t[i],n,s,r);else s=Vn(s)?!!s.capture:!!s,n=Qs(n),e&&e[Is]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=xs(i=e.g[t],n,s,r))&&(Cs(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete e.g[t],e.h--)))):e&&(e=Gs(e))&&(t=e.g[t.toString()],e=-1,t&&(e=xs(t,n,s,r)),(n=-1<e?t[e]:null)&&Bs(n))}function Bs(e){if("number"!=typeof e&&e&&!e.fa){var t=e.src;if(t&&t[Is])_s(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent($s(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=Gs(t))?(_s(n,e),0==n.h&&(n.src=null,t[Us]=null)):Cs(e)}}}function $s(e){return e in Os?Os[e]:Os[e]="on"+e}function Vs(e,t){if(e.fa)e=!0;else{t=new ys(t,this);var n=e.listener,s=e.la||e.src;e.ia&&Bs(e),e=n.call(s,t)}return e}function Gs(e){return(e=e[Us])instanceof Ns?e:null}var js="__closure_events_fn_"+(1e9*Math.random()>>>0);function Qs(e){return"function"==typeof e?e:(e[js]||(e[js]=function(t){return e.handleEvent(t)}),e[js])}function qs(){Hn.call(this),this.i=new Ns(this),this.S=this,this.J=null}function zs(e,t){var n,s=e.J;if(s)for(n=[];s;s=s.J)n.push(s);if(e=e.S,s=t.type||t,"string"==typeof t)t=new Zn(t,e);else if(t instanceof Zn)t.target=t.target||e;else{var r=t;Ds(t=new Zn(s,e),r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];r=Ks(o,s,!0,t)&&r}if(r=Ks(o=t.g=e,s,!0,t)&&r,r=Ks(o,s,!1,t)&&r,n)for(i=0;i<n.length;i++)r=Ks(o=t.g=n[i],s,!1,t)&&r}function Ks(e,t,n,s){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var r=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&_s(e.i,o),r=!1!==a.call(c,s)&&r}}return r&&!s.defaultPrevented}Wn(qs,Hn),qs.prototype[Is]=!0,qs.prototype.removeEventListener=function(e,t,n,s){Fs(this,e,t,n,s)},qs.prototype.N=function(){if(qs.$.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Cs(n[s]);delete t.g[e],t.h--}}this.J=null},qs.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)},qs.prototype.P=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};var Ws=Bn.JSON.stringify;function Hs(){var e=nr;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var Js=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Xs),(e=>e.reset()));class Xs{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Ys(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Zs(e){Bn.setTimeout((()=>{throw e}),0)}let er,tr=!1,nr=new class{constructor(){this.h=this.g=null}add(e,t){const n=Js.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},sr=()=>{const e=Bn.Promise.resolve(void 0);er=()=>{e.then(rr)}};var rr=()=>{for(var e;e=Hs();){try{e.h.call(e.g)}catch(e){Zs(e)}var t=Js;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}tr=!1};function ir(e,t){qs.call(this),this.h=e||1,this.g=t||Bn,this.j=zn(this.qb,this),this.l=Date.now()}function or(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}function ar(e,t,n){if("function"==typeof e)n&&(e=zn(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=zn(e.handleEvent,e)}return 2147483647<Number(t)?-1:Bn.setTimeout(e,t||0)}function cr(e){e.g=ar((()=>{e.g=null,e.i&&(e.i=!1,cr(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}Wn(ir,qs),(Mn=ir.prototype).ga=!1,Mn.T=null,Mn.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),zs(this,"tick"),this.ga&&(or(this),this.start()))}},Mn.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Mn.N=function(){ir.$.N.call(this),or(this),delete this.g};class lr extends Hn{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:cr(this)}N(){super.N(),this.g&&(Bn.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ur(e){Hn.call(this),this.h=e,this.g={}}Wn(ur,Hn);var hr=[];function dr(e,t,n,s){Array.isArray(n)||(n&&(hr[0]=n.toString()),n=hr);for(var r=0;r<n.length;r++){var i=Ls(t,n[r],s||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function fr(e){ks(e.g,(function(e,t){this.g.hasOwnProperty(t)&&Bs(e)}),e),e.g={}}function pr(){this.g=!0}function gr(e,t,n,s){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<r.length;o++)r[o]=""}}}return Ws(n)}catch(e){return t}}(e,n)+(s?" "+s:"")}))}ur.prototype.N=function(){ur.$.N.call(this),fr(this)},ur.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},pr.prototype.Ea=function(){this.g=!1},pr.prototype.info=function(){};var mr={},vr=null;function Ar(){return vr=vr||new qs}function wr(e){Zn.call(this,mr.Ta,e)}function yr(e){const t=Ar();zs(t,new wr(t))}function br(e,t){Zn.call(this,mr.STAT_EVENT,e),this.stat=t}function Ir(e){const t=Ar();zs(t,new br(t,e))}function Er(e,t){Zn.call(this,mr.Ua,e),this.size=t}function Tr(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return Bn.setTimeout((function(){e()}),t)}mr.Ta="serverreachability",Wn(wr,Zn),mr.STAT_EVENT="statevent",Wn(br,Zn),mr.Ua="timingevent",Wn(Er,Zn);var Cr={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},kr={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Sr(){}function Rr(e){return e.h||(e.h=e.i())}function Dr(){}Sr.prototype.h=null;var Nr,_r={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function xr(){Zn.call(this,"d")}function Ur(){Zn.call(this,"c")}function Or(){}function Lr(e,t,n,s){this.l=e,this.j=t,this.m=n,this.W=s||1,this.U=new ur(this),this.P=Pr,e=hs?125:void 0,this.V=new ir(e),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Mr}function Mr(){this.i=null,this.g="",this.h=!1}Wn(xr,Zn),Wn(Ur,Zn),Wn(Or,Sr),Or.prototype.g=function(){return new XMLHttpRequest},Or.prototype.i=function(){return{}},Nr=new Or;var Pr=45e3,Fr={},Br={};function $r(e,t,n){e.L=1,e.v=ii(ei(t)),e.s=n,e.S=!0,Vr(e,null)}function Vr(e,t){e.G=Date.now(),qr(e),e.A=ei(e.v);var n=e.A,s=e.W;Array.isArray(s)||(s=[String(s)]),Ai(n.i,"t",s),e.C=0,n=e.l.J,e.h=new Mr,e.g=Ao(e.l,n?t:null,!e.s),0<e.O&&(e.M=new lr(zn(e.Pa,e,e.g),e.O)),dr(e.U,e.g,"readystatechange",e.nb),t=e.I?Ss(e.I):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.A,e.u,e.s,t)):(e.u="GET",e.g.ha(e.A,e.u,null,t)),yr(),function(e,t,n,s,r,i){e.info((function(){if(e.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.W,e.s)}function Gr(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.l.Ha)}function jr(e,t,n){let s,r=!0;for(;!e.J&&e.C<n.length;){if(s=Qr(e,n),s==Br){4==t&&(e.o=4,Ir(14),r=!1),gr(e.j,e.m,null,"[Incomplete Response]");break}if(s==Fr){e.o=4,Ir(15),gr(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}gr(e.j,e.m,s,null),Jr(e,s)}Gr(e)&&s!=Br&&s!=Fr&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,Ir(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,(t=e.l).g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),lo(t),t.M=!0,Ir(11))):(gr(e.j,e.m,n,"[Invalid Chunked Response]"),Hr(e),Wr(e))}function Qr(e,t){var n=e.C,s=t.indexOf("\n",n);return-1==s?Br:(n=Number(t.substring(n,s)),isNaN(n)?Fr:(s+=1)+n>t.length?Br:(t=t.slice(s,s+n),e.C=s+n,t))}function qr(e){e.Y=Date.now()+e.P,zr(e,e.P)}function zr(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Tr(zn(e.lb,e),t)}function Kr(e){e.B&&(Bn.clearTimeout(e.B),e.B=null)}function Wr(e){0==e.l.H||e.J||fo(e.l,e)}function Hr(e){Kr(e);var t=e.M;t&&"function"==typeof t.sa&&t.sa(),e.M=null,or(e.V),fr(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function Jr(e,t){try{var n=e.l;if(0!=n.H&&(n.g==e||Ti(n.i,e)))if(!e.K&&Ti(n.i,e)&&3==n.H){try{var s=n.Ja.g.parse(t)}catch(e){s=null}if(Array.isArray(s)&&3==s.length){var r=s;if(0==r[0]){e:if(!n.u){if(n.g){if(!(n.g.G+3e3<e.G))break e;ho(n),to(n)}co(n),Ir(18)}}else n.Fa=r[1],0<n.Fa-n.V&&37500>r[2]&&n.G&&0==n.A&&!n.v&&(n.v=Tr(zn(n.ib,n),6e3));if(1>=Ei(n.i)&&n.oa){try{n.oa()}catch(e){}n.oa=void 0}}else go(n,11)}else if((e.K||n.g==e)&&ho(n),!ts(t))for(r=n.Ja.g.parse(t),t=0;t<r.length;t++){let l=r[t];if(n.V=l[0],l=l[1],2==n.H)if("c"==l[0]){n.K=l[1],n.pa=l[2];const t=l[3];null!=t&&(n.ra=t,n.l.info("VER="+n.ra));const r=l[4];null!=r&&(n.Ga=r,n.l.info("SVER="+n.Ga));const u=l[5];null!=u&&"number"==typeof u&&0<u&&(s=1.5*u,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var i=s.i;i.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(Ci(i,i.h),i.h=null))}if(s.F){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(s.Da=e,ri(s.I,s.F,e))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms"));var o=e;if((s=n).wa=vo(s,s.J?s.pa:null,s.Y),o.K){ki(s.i,o);var a=o,c=s.L;c&&a.setTimeout(c),a.B&&(Kr(a),qr(a)),s.g=o}else ao(s);0<n.j.length&&so(n)}else"stop"!=l[0]&&"close"!=l[0]||go(n,7);else 3==n.H&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?go(n,7):eo(n):"noop"!=l[0]&&n.h&&n.h.Aa(l),n.A=0)}yr()}catch(e){}}function Xr(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if($n(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.ta&&"function"==typeof e.ta)return e.ta();if(!e.Z||"function"!=typeof e.Z){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if($n(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}(e),s=function(e){if(e.Z&&"function"==typeof e.Z)return e.Z();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if($n(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}for(s in t=[],n=0,e)t[n++]=e[s];return t}(e),r=s.length,i=0;i<r;i++)t.call(void 0,s[i],n&&n[i],e)}(Mn=Lr.prototype).setTimeout=function(e){this.P=e},Mn.nb=function(e){e=e.target;const t=this.M;t&&3==Wi(e)?t.l():this.Pa(e)},Mn.Pa=function(e){try{if(e==this.g)e:{const u=Wi(this.g);var t=this.g.Ia();this.g.da();if(!(3>u)&&(3!=u||hs||this.g&&(this.h.h||this.g.ja()||Hi(this.g)))){this.J||4!=u||7==t||yr(),Kr(this);var n=this.g.da();this.ca=n;t:if(Gr(this)){var s=Hi(this.g);e="";var r=s.length,i=4==Wi(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Hr(this),Wr(this);var o="";break t}this.h.i=new Bn.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:i&&t==r-1});s.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,function(e,t,n,s,r,i,o){e.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+t+"\n"+n+"\n"+i+" "+o}))}(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ts(a)){var l=a;break t}}l=null}if(!(n=l)){this.i=!1,this.o=3,Ir(12),Hr(this),Wr(this);break e}gr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Jr(this,n)}this.S?(jr(this,u,o),hs&&this.i&&3==u&&(dr(this.U,this.V,"tick",this.mb),this.V.start())):(gr(this.j,this.m,o,null),Jr(this,o)),4==u&&Hr(this),this.i&&!this.J&&(4==u?fo(this.l,this):(this.i=!1,qr(this)))}else(function(e){const t={};e=(e.g&&2<=Wi(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let s=0;s<e.length;s++){if(ts(e[s]))continue;var n=Ys(e[s]);const r=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const i=t[r]||[];t[r]=i,i.push(n)}!function(e,t){for(const n in e)t.call(void 0,e[n],n,e)}(t,(function(e){return e.join(", ")}))})(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Ir(12)):(this.o=0,Ir(13)),Hr(this),Wr(this)}}}catch(e){}},Mn.mb=function(){if(this.g){var e=Wi(this.g),t=this.g.ja();this.C<t.length&&(Kr(this),jr(this,e,t),this.i&&4!=e&&qr(this))}},Mn.cancel=function(){this.J=!0,Hr(this)},Mn.lb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.L&&(yr(),Ir(17)),Hr(this),this.o=2,Wr(this)):zr(this,this.Y-e)};var Yr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Zr(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Zr){this.h=e.h,ti(this,e.j),this.s=e.s,this.g=e.g,ni(this,e.m),this.l=e.l;var t=e.i,n=new pi;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),si(this,n),this.o=e.o}else e&&(t=String(e).match(Yr))?(this.h=!1,ti(this,t[1]||"",!0),this.s=oi(t[2]||""),this.g=oi(t[3]||"",!0),ni(this,t[4]),this.l=oi(t[5]||"",!0),si(this,t[6]||"",!0),this.o=oi(t[7]||"")):(this.h=!1,this.i=new pi(null,this.h))}function ei(e){return new Zr(e)}function ti(e,t,n){e.j=n?oi(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function ni(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function si(e,t,n){t instanceof pi?(e.i=t,function(e,t){t&&!e.j&&(gi(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(mi(this,t),Ai(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=ai(t,di)),e.i=new pi(t,e.h))}function ri(e,t,n){e.i.set(t,n)}function ii(e){return ri(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function oi(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ai(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,ci),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function ci(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Zr.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ai(t,li,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(ai(t,li,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(ai(n,"/"==n.charAt(0)?hi:ui,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",ai(n,fi)),e.join("")};var li=/[#\/\?@]/g,ui=/[#\?:]/g,hi=/[#\?]/g,di=/[#\?@]/g,fi=/#/g;function pi(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function gi(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),r=null;if(0<=s){var i=e[n].substring(0,s);r=e[n].substring(s+1)}else i=e[n];t(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function mi(e,t){gi(e),t=wi(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function vi(e,t){return gi(e),t=wi(e,t),e.g.has(t)}function Ai(e,t,n){mi(e,t),0<n.length&&(e.i=null,e.g.set(wi(e,t),Xn(n)),e.h+=n.length)}function wi(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(Mn=pi.prototype).add=function(e,t){gi(this),this.i=null,e=wi(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},Mn.forEach=function(e,t){gi(this),this.g.forEach((function(n,s){n.forEach((function(n){e.call(t,n,s,this)}),this)}),this)},Mn.ta=function(){gi(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const r=e[s];for(let e=0;e<r.length;e++)n.push(t[s])}return n},Mn.Z=function(e){gi(this);let t=[];if("string"==typeof e)vi(this,e)&&(t=t.concat(this.g.get(wi(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},Mn.set=function(e,t){return gi(this),this.i=null,vi(this,e=wi(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},Mn.get=function(e,t){return e&&0<(e=this.Z(e)).length?String(e[0]):t},Mn.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const i=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var r=i;""!==o[s]&&(r+="="+encodeURIComponent(String(o[s]))),e.push(r)}}return this.i=e.join("&")};function yi(e){this.l=e||bi,Bn.PerformanceNavigationTiming?e=0<(e=Bn.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(Bn.g&&Bn.g.Ka&&Bn.g.Ka()&&Bn.g.Ka().ec),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var bi=10;function Ii(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Ei(e){return e.h?1:e.g?e.g.size:0}function Ti(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Ci(e,t){e.g?e.g.add(t):e.h=t}function ki(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function Si(e){if(null!=e.h)return e.i.concat(e.h.F);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Xn(e.i)}yi.prototype.cancel=function(){if(this.i=Si(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var Ri=class{stringify(e){return Bn.JSON.stringify(e,void 0)}parse(e){return Bn.JSON.parse(e,void 0)}};function Di(){this.g=new Ri}function Ni(e,t,n){const s=n||"";try{Xr(e,(function(e,n){let r=e;Vn(e)&&(r=Ws(e)),t.push(s+n+"="+encodeURIComponent(r))}))}catch(e){throw t.push(s+"type="+encodeURIComponent("_badmap")),e}}function _i(e,t,n,s,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(s)}catch(e){}}function xi(e){this.l=e.fc||null,this.j=e.ob||!1}function Ui(e,t){qs.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Oi,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Wn(xi,Sr),xi.prototype.g=function(){return new Ui(this.l,this.j)},xi.prototype.i=function(e){return function(){return e}}({}),Wn(Ui,qs);var Oi=0;function Li(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}function Mi(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Pi(e)}function Pi(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(Mn=Ui.prototype).open=function(e,t){if(this.readyState!=Oi)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Pi(this)},Mn.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||Bn).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))},Mn.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Mi(this)),this.readyState=Oi},Mn.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Pi(this)),this.g&&(this.readyState=3,Pi(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==Bn.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Li(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))},Mn.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Mi(this):Pi(this),3==this.readyState&&Li(this)}},Mn.Za=function(e){this.g&&(this.response=this.responseText=e,Mi(this))},Mn.Ya=function(e){this.g&&(this.response=e,Mi(this))},Mn.ka=function(){this.g&&Mi(this)},Mn.setRequestHeader=function(e,t){this.v.append(e,t)},Mn.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},Mn.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Ui.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Fi=Bn.JSON.parse;function Bi(e){qs.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=$i,this.L=this.M=!1}Wn(Bi,qs);var $i="",Vi=/^https?$/i,Gi=["POST","PUT"];function ji(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Qi(e),zi(e)}function Qi(e){e.F||(e.F=!0,zs(e,"complete"),zs(e,"error"))}function qi(e){if(e.h&&void 0!==Fn&&(!e.C[1]||4!=Wi(e)||2!=e.da()))if(e.v&&4==Wi(e))ar(e.La,0,e);else if(zs(e,"readystatechange"),4==Wi(e)){e.h=!1;try{const o=e.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var s;if(s=0===o){var r=String(e.I).match(Yr)[1]||null;!r&&Bn.self&&Bn.self.location&&(r=Bn.self.location.protocol.slice(0,-1)),s=!Vi.test(r?r.toLowerCase():"")}n=s}if(n)zs(e,"complete"),zs(e,"success");else{e.m=6;try{var i=2<Wi(e)?e.g.statusText:""}catch(e){i=""}e.j=i+" ["+e.da()+"]",Qi(e)}}finally{zi(e)}}}function zi(e,t){if(e.g){Ki(e);const n=e.g,s=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||zs(e,"ready");try{n.onreadystatechange=s}catch(e){}}}function Ki(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(Bn.clearTimeout(e.A),e.A=null)}function Wi(e){return e.g?e.g.readyState:0}function Hi(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case $i:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Ji(e){let t="";return ks(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Xi(e,t,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=Ji(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):ri(e,t,n))}function Yi(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Zi(e){this.Ga=0,this.j=[],this.l=new pr,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Yi("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Yi("baseRetryDelayMs",5e3,e),this.hb=Yi("retryDelaySeedMs",1e4,e),this.eb=Yi("forwardChannelMaxRetries",2,e),this.xa=Yi("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.dc||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new yi(e&&e.concurrentRequestLimit),this.Ja=new Di,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function eo(e){if(no(e),3==e.H){var t=e.W++,n=ei(e.I);if(ri(n,"SID",e.K),ri(n,"RID",t),ri(n,"TYPE","terminate"),io(e,n),(t=new Lr(e,e.l,t)).L=2,t.v=ii(ei(n)),n=!1,Bn.navigator&&Bn.navigator.sendBeacon)try{n=Bn.navigator.sendBeacon(t.v.toString(),"")}catch(e){}!n&&Bn.Image&&((new Image).src=t.v,n=!0),n||(t.g=Ao(t.l,null),t.g.ha(t.v)),t.G=Date.now(),qr(t)}mo(e)}function to(e){e.g&&(lo(e),e.g.cancel(),e.g=null)}function no(e){to(e),e.u&&(Bn.clearTimeout(e.u),e.u=null),ho(e),e.i.cancel(),e.m&&("number"==typeof e.m&&Bn.clearTimeout(e.m),e.m=null)}function so(e){if(!Ii(e.i)&&!e.m){e.m=!0;var t=e.Na;er||sr(),tr||(er(),tr=!0),nr.add(t,e),e.C=0}}function ro(e,t){var n;n=t?t.m:e.W++;const s=ei(e.I);ri(s,"SID",e.K),ri(s,"RID",n),ri(s,"AID",e.V),io(e,s),e.o&&e.s&&Xi(s,e.o,e.s),n=new Lr(e,e.l,n,e.C+1),null===e.o&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=oo(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Ci(e.i,n),$r(n,s,t)}function io(e,t){e.na&&ks(e.na,(function(e,n){ri(t,n,e)})),e.h&&Xr({},(function(e,n){ri(t,n,e)}))}function oo(e,t,n){n=Math.min(e.j.length,n);var s=e.h?zn(e.h.Va,e.h,e):null;e:{var r=e.j;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=r[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let i=!0;for(let o=0;o<n;o++){let n=r[o].g;const a=r[o].map;if(n-=t,0>n)t=Math.max(0,r[o].g-100),i=!1;else try{Ni(a,e,"req"+n+"_")}catch(e){s&&s(a)}}if(i){s=e.join("&");break e}}}return e=e.j.splice(0,n),t.F=e,s}function ao(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;er||sr(),tr||(er(),tr=!0),nr.add(t,e),e.A=0}}function co(e){return!(e.g||e.u||3<=e.A)&&(e.ba++,e.u=Tr(zn(e.Ma,e),po(e,e.A)),e.A++,!0)}function lo(e){null!=e.B&&(Bn.clearTimeout(e.B),e.B=null)}function uo(e){e.g=new Lr(e,e.l,"rpc",e.ba),null===e.o&&(e.g.I=e.s),e.g.O=0;var t=ei(e.wa);ri(t,"RID","rpc"),ri(t,"SID",e.K),ri(t,"AID",e.V),ri(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&ri(t,"TO",e.qa),ri(t,"TYPE","xmlhttp"),io(e,t),e.o&&e.s&&Xi(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.v=ii(ei(t)),n.s=null,n.S=!0,Vr(n,e)}function ho(e){null!=e.v&&(Bn.clearTimeout(e.v),e.v=null)}function fo(e,t){var n=null;if(e.g==t){ho(e),lo(e),e.g=null;var s=2}else{if(!Ti(e.i,t))return;n=t.F,ki(e.i,t),s=1}if(0!=e.H)if(t.i)if(1==s){n=t.s?t.s.length:0,t=Date.now()-t.G;var r=e.C;zs(s=Ar(),new Er(s,n)),so(e)}else ao(e);else if(3==(r=t.o)||0==r&&0<t.ca||!(1==s&&function(e,t){return!(Ei(e.i)>=e.i.j-(e.m?1:0)||(e.m?(e.j=t.F.concat(e.j),0):1==e.H||2==e.H||e.C>=(e.cb?0:e.eb)||(e.m=Tr(zn(e.Na,e,t),po(e,e.C)),e.C++,0)))}(e,t)||2==s&&co(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),r){case 1:go(e,5);break;case 4:go(e,10);break;case 3:go(e,6);break;default:go(e,2)}}function po(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function go(e,t){if(e.l.info("Error code "+t),2==t){var n=null;e.h&&(n=null);var s=zn(e.pb,e);n||(n=new Zr("//www.google.com/images/cleardot.gif"),Bn.location&&"http"==Bn.location.protocol||ti(n,"https"),ii(n)),function(e,t){const n=new pr;if(Bn.Image){const s=new Image;s.onload=Kn(_i,n,s,"TestLoadImage: loaded",!0,t),s.onerror=Kn(_i,n,s,"TestLoadImage: error",!1,t),s.onabort=Kn(_i,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=Kn(_i,n,s,"TestLoadImage: timeout",!1,t),Bn.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=e}else t(!1)}(n.toString(),s)}else Ir(2);e.H=0,e.h&&e.h.za(t),mo(e),no(e)}function mo(e){if(e.H=0,e.ma=[],e.h){const t=Si(e.i);0==t.length&&0==e.j.length||(Yn(e.ma,t),Yn(e.ma,e.j),e.i.i.length=0,Xn(e.j),e.j.length=0),e.h.ya()}}function vo(e,t,n){var s=n instanceof Zr?ei(n):new Zr(n);if(""!=s.g)t&&(s.g=t+"."+s.g),ni(s,s.m);else{var r=Bn.location;s=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var i=new Zr(null);s&&ti(i,s),t&&(i.g=t),r&&ni(i,r),n&&(i.l=n),s=i}return n=e.F,t=e.Da,n&&t&&ri(s,n,t),ri(s,"VER",e.ra),io(e,s),s}function Ao(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ha&&!e.va?new Bi(new xi({ob:!0})):new Bi(e.va)).Oa(e.J),t}function wo(){}function yo(){if(ls&&!(10<=Number(ws)))throw Error("Environmental error: no available transport.")}function bo(e,t){qs.call(this),this.g=new Zi(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!ts(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!ts(t)&&(this.g.F=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new To(this)}function Io(e){xr.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Eo(){Ur.call(this),this.status=1}function To(e){this.g=e}function Co(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function ko(e,t,n){n||(n=0);var s=Array(16);if("string"==typeof t)for(var r=0;16>r;++r)s[r]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(r=0;16>r;++r)s[r]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],r=e.g[2];var i=e.g[3],o=t+(i^n&(r^i))+s[0]+3614090360&4294967295;o=(n=(r=(i=(t=(n=(r=(i=(t=(n=(r=(i=(t=(n=(r=(i=(t=(n=(r=(i=(t=(n=(r=(i=(t=(n=(r=(i=(t=(n=(r=(i=(t=(n=(r=(i=(t=(n=(r=(i=(t=(n=(r=(i=(t=(n=(r=(i=(t=(n=(r=(i=(t=(n=(r=(i=(t=(n=(r=(i=(t=n+(o<<7&4294967295|o>>>25))+((o=i+(r^t&(n^r))+s[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^i&(t^n))+s[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^r&(i^t))+s[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=t+(i^n&(r^i))+s[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=i+(r^t&(n^r))+s[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^i&(t^n))+s[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^r&(i^t))+s[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=t+(i^n&(r^i))+s[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=i+(r^t&(n^r))+s[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^i&(t^n))+s[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^r&(i^t))+s[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=t+(i^n&(r^i))+s[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=i+(r^t&(n^r))+s[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=r+(n^i&(t^n))+s[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^r&(i^t))+s[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=t+(r^i&(n^r))+s[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=i+(n^r&(t^n))+s[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=r+(t^n&(i^t))+s[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(i^t&(r^i))+s[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=t+(r^i&(n^r))+s[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=i+(n^r&(t^n))+s[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=r+(t^n&(i^t))+s[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(i^t&(r^i))+s[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=t+(r^i&(n^r))+s[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=i+(n^r&(t^n))+s[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=r+(t^n&(i^t))+s[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(i^t&(r^i))+s[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=t+(r^i&(n^r))+s[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=i+(n^r&(t^n))+s[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=r+(t^n&(i^t))+s[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(i^t&(r^i))+s[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=t+(n^r^i)+s[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=i+(t^n^r)+s[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=r+(i^t^n)+s[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^i^t)+s[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^r^i)+s[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=i+(t^n^r)+s[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=r+(i^t^n)+s[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^i^t)+s[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^r^i)+s[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=i+(t^n^r)+s[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=r+(i^t^n)+s[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^i^t)+s[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^r^i)+s[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=i+(t^n^r)+s[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=r+(i^t^n)+s[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(r^i^t)+s[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=t+(r^(n|~i))+s[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=i+(n^(t|~r))+s[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=r+(t^(i|~n))+s[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(i^(r|~t))+s[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=t+(r^(n|~i))+s[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=i+(n^(t|~r))+s[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=r+(t^(i|~n))+s[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(i^(r|~t))+s[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=t+(r^(n|~i))+s[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=i+(n^(t|~r))+s[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=r+(t^(i|~n))+s[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(i^(r|~t))+s[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((i=(t=n+((o=t+(r^(n|~i))+s[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=i+(n^(t|~r))+s[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((r=i+((o=r+(t^(i|~n))+s[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~t))+s[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+r&4294967295,e.g[3]=e.g[3]+i&4294967295}function So(e,t){this.h=t;for(var n=[],s=!0,r=e.length-1;0<=r;r--){var i=0|e[r];s&&i==t||(n[r]=i,s=!1)}this.g=n}(Mn=Bi.prototype).Oa=function(e){this.M=e},Mn.ha=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Nr.g(),this.C=this.u?Rr(this.u):Rr(Nr),this.g.onreadystatechange=zn(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(e){return void ji(this,e)}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else{if("function"!=typeof s.keys||"function"!=typeof s.get)throw Error("Unknown input type for opt_headers: "+String(s));for(const e of s.keys())n.set(e,s.get(e))}s=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),r=Bn.FormData&&e instanceof Bn.FormData,!(0<=Jn(Gi,t))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[e,t]of n)this.g.setRequestHeader(e,t);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Ki(this),0<this.B&&((this.L=function(e){return ls&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=zn(this.ua,this)):this.A=ar(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){ji(this,e)}},Mn.ua=function(){void 0!==Fn&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,zs(this,"timeout"),this.abort(8))},Mn.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,zs(this,"complete"),zs(this,"abort"),zi(this))},Mn.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),zi(this,!0)),Bi.$.N.call(this)},Mn.La=function(){this.s||(this.G||this.v||this.l?qi(this):this.kb())},Mn.kb=function(){qi(this)},Mn.isActive=function(){return!!this.g},Mn.da=function(){try{return 2<Wi(this)?this.g.status:-1}catch(e){return-1}},Mn.ja=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},Mn.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Fi(t)}},Mn.Ia=function(){return this.m},Mn.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(Mn=Zi.prototype).ra=8,Mn.H=1,Mn.Na=function(e){if(this.m)if(this.m=null,1==this.H){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const r=new Lr(this,this.l,e);let i=this.s;if(this.U&&(i?(i=Ss(i),Ds(i,this.U)):i=this.U),null!==this.o||this.O||(r.I=i,i=null),this.P)e:{for(var t=0,n=0;n<this.j.length;n++){var s=this.j[n];if(void 0===(s="__data__"in s.map&&"string"==typeof(s=s.map.__data__)?s.length:void 0))break;if(4096<(t+=s)){t=n;break e}if(4096===t||n===this.j.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=oo(this,r,t),ri(n=ei(this.I),"RID",e),ri(n,"CVER",22),this.F&&ri(n,"X-HTTP-Session-Id",this.F),io(this,n),i&&(this.O?t="headers="+encodeURIComponent(String(Ji(i)))+"&"+t:this.o&&Xi(n,this.o,i)),Ci(this.i,r),this.bb&&ri(n,"TYPE","init"),this.P?(ri(n,"$req",t),ri(n,"SID","null"),r.aa=!0,$r(r,n,null)):$r(r,n,t),this.H=2}}else 3==this.H&&(e?ro(this,e):0==this.j.length||Ii(this.i)||ro(this))},Mn.Ma=function(){if(this.u=null,uo(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Tr(zn(this.jb,this),e)}},Mn.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ir(10),to(this),uo(this))},Mn.ib=function(){null!=this.v&&(this.v=null,to(this),co(this),Ir(19))},Mn.pb=function(e){e?(this.l.info("Successfully pinged google.com"),Ir(2)):(this.l.info("Failed to ping google.com"),Ir(1))},Mn.isActive=function(){return!!this.h&&this.h.isActive(this)},(Mn=wo.prototype).Ba=function(){},Mn.Aa=function(){},Mn.za=function(){},Mn.ya=function(){},Mn.isActive=function(){return!0},Mn.Va=function(){},yo.prototype.g=function(e,t){return new bo(e,t)},Wn(bo,qs),bo.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;Ir(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=vo(e,null,e.Y),so(e)},bo.prototype.close=function(){eo(this.g)},bo.prototype.u=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=Ws(e),e=n);t.j.push(new class{constructor(e,t){this.g=e,this.map=t}}(t.fb++,e)),3==t.H&&so(t)},bo.prototype.N=function(){this.g.h=null,delete this.j,eo(this.g),delete this.g,bo.$.N.call(this)},Wn(Io,xr),Wn(Eo,Ur),Wn(To,wo),To.prototype.Ba=function(){zs(this.g,"a")},To.prototype.Aa=function(e){zs(this.g,new Io(e))},To.prototype.za=function(e){zs(this.g,new Eo)},To.prototype.ya=function(){zs(this.g,"b")},Wn(Co,(function(){this.blockSize=-1})),Co.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},Co.prototype.j=function(e,t){void 0===t&&(t=e.length);for(var n=t-this.blockSize,s=this.m,r=this.h,i=0;i<t;){if(0==r)for(;i<=n;)ko(this,e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(s[r++]=e.charCodeAt(i++),r==this.blockSize){ko(this,s),r=0;break}}else for(;i<t;)if(s[r++]=e[i++],r==this.blockSize){ko(this,s),r=0;break}}this.h=r,this.i+=t},Co.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var s=0;32>s;s+=8)e[n++]=this.g[t]>>>s&255;return e};var Ro={};function Do(e){return-128<=e&&128>e?function(e,t){var n=Ro;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,(function(e){return new So([0|e],0>e?-1:0)})):new So([0|e],0>e?-1:0)}function No(e){if(isNaN(e)||!isFinite(e))return xo;if(0>e)return Po(No(-e));for(var t=[],n=1,s=0;e>=n;s++)t[s]=e/n|0,n*=_o;return new So(t,0)}var _o=4294967296,xo=Do(0),Uo=Do(1),Oo=Do(16777216);function Lo(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function Mo(e){return-1==e.h}function Po(e){for(var t=e.g.length,n=[],s=0;s<t;s++)n[s]=~e.g[s];return new So(n,~e.h).add(Uo)}function Fo(e,t){return e.add(Po(t))}function Bo(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function $o(e,t){this.g=e,this.h=t}function Vo(e,t){if(Lo(t))throw Error("division by zero");if(Lo(e))return new $o(xo,xo);if(Mo(e))return t=Vo(Po(e),t),new $o(Po(t.g),Po(t.h));if(Mo(t))return t=Vo(e,Po(t)),new $o(Po(t.g),t.h);if(30<e.g.length){if(Mo(e)||Mo(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Uo,s=t;0>=s.X(e);)n=Go(n),s=Go(s);var r=jo(n,1),i=jo(s,1);for(s=jo(s,2),n=jo(n,2);!Lo(s);){var o=i.add(s);0>=o.X(e)&&(r=r.add(n),i=o),s=jo(s,1),n=jo(n,1)}return t=Fo(e,r.R(t)),new $o(r,t)}for(r=xo;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),s=48>=(s=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,s-48),o=(i=No(n)).R(t);Mo(o)||0<o.X(e);)o=(i=No(n-=s)).R(t);Lo(i)&&(i=Uo),r=r.add(i),e=Fo(e,o)}return new $o(r,e)}function Go(e){for(var t=e.g.length+1,n=[],s=0;s<t;s++)n[s]=e.D(s)<<1|e.D(s-1)>>>31;return new So(n,e.h)}function jo(e,t){var n=t>>5;t%=32;for(var s=e.g.length-n,r=[],i=0;i<s;i++)r[i]=0<t?e.D(i+n)>>>t|e.D(i+n+1)<<32-t:e.D(i+n);return new So(r,e.h)}(Mn=So.prototype).ea=function(){if(Mo(this))return-Po(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var s=this.D(n);e+=(0<=s?s:_o+s)*t,t*=_o}return e},Mn.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(Lo(this))return"0";if(Mo(this))return"-"+Po(this).toString(e);for(var t=No(Math.pow(e,6)),n=this,s="";;){var r=Vo(n,t).g,i=((0<(n=Fo(n,r.R(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(Lo(n=r))return i+s;for(;6>i.length;)i="0"+i;s=i+s}},Mn.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},Mn.X=function(e){return Mo(e=Fo(this,e))?-1:Lo(e)?0:1},Mn.abs=function(){return Mo(this)?Po(this):this},Mn.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0,r=0;r<=t;r++){var i=s+(65535&this.D(r))+(65535&e.D(r)),o=(i>>>16)+(this.D(r)>>>16)+(e.D(r)>>>16);s=o>>>16,i&=65535,o&=65535,n[r]=o<<16|i}return new So(n,-2147483648&n[n.length-1]?-1:0)},Mn.R=function(e){if(Lo(this)||Lo(e))return xo;if(Mo(this))return Mo(e)?Po(this).R(Po(e)):Po(Po(this).R(e));if(Mo(e))return Po(this.R(Po(e)));if(0>this.X(Oo)&&0>e.X(Oo))return No(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],s=0;s<2*t;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<e.g.length;r++){var i=this.D(s)>>>16,o=65535&this.D(s),a=e.D(r)>>>16,c=65535&e.D(r);n[2*s+2*r]+=o*c,Bo(n,2*s+2*r),n[2*s+2*r+1]+=i*c,Bo(n,2*s+2*r+1),n[2*s+2*r+1]+=o*a,Bo(n,2*s+2*r+1),n[2*s+2*r+2]+=i*a,Bo(n,2*s+2*r+2)}for(s=0;s<t;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=t;s<2*t;s++)n[s]=0;return new So(n,0)},Mn.gb=function(e){return Vo(this,e).h},Mn.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)&e.D(s);return new So(n,this.h&e.h)},Mn.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)|e.D(s);return new So(n,this.h|e.h)},Mn.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.D(s)^e.D(s);return new So(n,this.h^e.h)},yo.prototype.createWebChannel=yo.prototype.g,bo.prototype.send=bo.prototype.u,bo.prototype.open=bo.prototype.m,bo.prototype.close=bo.prototype.close,Cr.NO_ERROR=0,Cr.TIMEOUT=8,Cr.HTTP_ERROR=6,kr.COMPLETE="complete",Dr.EventType=_r,_r.OPEN="a",_r.CLOSE="b",_r.ERROR="c",_r.MESSAGE="d",qs.prototype.listen=qs.prototype.O,Bi.prototype.listenOnce=Bi.prototype.P,Bi.prototype.getLastError=Bi.prototype.Sa,Bi.prototype.getLastErrorCode=Bi.prototype.Ia,Bi.prototype.getStatus=Bi.prototype.da,Bi.prototype.getResponseJson=Bi.prototype.Wa,Bi.prototype.getResponseText=Bi.prototype.ja,Bi.prototype.send=Bi.prototype.ha,Bi.prototype.setWithCredentials=Bi.prototype.Oa,Co.prototype.digest=Co.prototype.l,Co.prototype.reset=Co.prototype.reset,Co.prototype.update=Co.prototype.j,So.prototype.add=So.prototype.add,So.prototype.multiply=So.prototype.R,So.prototype.modulo=So.prototype.gb,So.prototype.compare=So.prototype.X,So.prototype.toNumber=So.prototype.ea,So.prototype.toString=So.prototype.toString,So.prototype.getBits=So.prototype.D,So.fromNumber=No,So.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return Po(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var s=No(Math.pow(n,8)),r=xo,i=0;i<t.length;i+=8){var o=Math.min(8,t.length-i),a=parseInt(t.substring(i,i+o),n);8>o?(o=No(Math.pow(n,o)),r=r.R(o).add(No(a))):r=(r=r.R(s)).add(No(a))}return r};var Qo=Cr,qo=kr,zo=mr,Ko=10,Wo=11,Ho=xi,Jo=Dr,Xo=Bi,Yo=Co,Zo=So;const ea="@firebase/firestore";
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
     */class ta{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ta.UNAUTHENTICATED=new ta(null),ta.GOOGLE_CREDENTIALS=new ta("google-credentials-uid"),ta.FIRST_PARTY=new ta("first-party-uid"),ta.MOCK_USER=new ta("mock-user");
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
let na="9.23.0";
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
     */const sa=new Gt("@firebase/firestore");function ra(){return sa.logLevel}function ia(e,...t){if(sa.logLevel<=Pt.DEBUG){const n=t.map(ca);sa.debug(`Firestore (${na}): ${e}`,...n)}}function oa(e,...t){if(sa.logLevel<=Pt.ERROR){const n=t.map(ca);sa.error(`Firestore (${na}): ${e}`,...n)}}function aa(e,...t){if(sa.logLevel<=Pt.WARN){const n=t.map(ca);sa.warn(`Firestore (${na}): ${e}`,...n)}}function ca(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
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
     */function la(e="Unexpected state"){const t=`FIRESTORE (${na}) INTERNAL ASSERTION FAILED: `+e;throw oa(t),new Error(t)}function ua(e,t){e||la()}function ha(e,t){return e}
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
     */const da={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class fa extends It{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
     */class pa{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
     */class ga{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ma{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(ta.UNAUTHENTICATED)))}shutdown(){}}class va{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Aa{constructor(e){this.t=e,this.currentUser=ta.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const s=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let r=new pa;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new pa,e.enqueueRetryable((()=>s(this.currentUser)))};const i=()=>{const t=r;e.enqueueRetryable((async()=>{await t.promise,await s(this.currentUser)}))},o=e=>{ia("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(ia("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new pa)}}),0),i()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(ia("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(ua("string"==typeof t.accessToken),new ga(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ua(null===e||"string"==typeof e),new ta(e)}}class wa{constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=ta.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class ya{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new wa(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(ta.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ba{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ia{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const n=e=>{null!=e.error&&ia("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.T;return this.T=e.token,ia("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const s=e=>{ia("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit((e=>s(e))),setTimeout((()=>{if(!this.appCheck){const e=this.I.getImmediate({optional:!0});e?s(e):ia("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(ua("string"==typeof e.token),this.T=e.token,new ba(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
     */function Ea(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
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
     */class Ta{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(256/62);let n="";for(;n.length<20;){const s=Ea(40);for(let r=0;r<s.length;++r)n.length<20&&s[r]<t&&(n+=e.charAt(s[r]%62))}return n}}function Ca(e,t){return e<t?-1:e>t?1:0}function ka(e,t,n){return e.length===t.length&&e.every(((e,s)=>n(e,t[s])))}
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
     */class Sa{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new fa(da.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new fa(da.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new fa(da.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new fa(da.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Sa.fromMillis(Date.now())}static fromDate(e){return Sa.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Sa(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ca(this.nanoseconds,e.nanoseconds):Ca(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
     */class Ra{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ra(e)}static min(){return new Ra(new Sa(0,0))}static max(){return new Ra(new Sa(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
     */class Da{constructor(e,t,n){void 0===t?t=0:t>e.length&&la(),void 0===n?n=e.length-t:n>e.length-t&&la(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Da.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Da?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const n=e.get(s),r=t.get(s);if(n<r)return-1;if(n>r)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Na extends Da{construct(e,t,n){return new Na(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new fa(da.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Na(t)}static emptyPath(){return new Na([])}}const _a=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xa extends Da{construct(e,t,n){return new xa(e,t,n)}static isValidIdentifier(e){return _a.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xa.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new xa(["__name__"])}static fromServerFormat(e){const t=[];let n="",s=0;const r=()=>{if(0===n.length)throw new fa(da.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let i=!1;for(;s<e.length;){const t=e[s];if("\\"===t){if(s+1===e.length)throw new fa(da.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[s+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new fa(da.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,s+=2}else"`"===t?(i=!i,s++):"."!==t||i?(n+=t,s++):(r(),s++)}if(r(),i)throw new fa(da.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xa(t)}static emptyPath(){return new xa([])}}
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
     */class Ua{constructor(e){this.path=e}static fromPath(e){return new Ua(Na.fromString(e))}static fromName(e){return new Ua(Na.fromString(e).popFirst(5))}static empty(){return new Ua(Na.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Na.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Na.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ua(new Na(e.slice()))}}function Oa(e){return new La(e.readTime,e.key,-1)}class La{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new La(Ra.min(),Ua.empty(),-1)}static max(){return new La(Ra.max(),Ua.empty(),-1)}}function Ma(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=Ua.comparator(e.documentKey,t.documentKey),0!==n?n:Ca(e.largestBatchId,t.largestBatchId))}
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
     */const Pa="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Fa{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
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
     */async function Ba(e){if(e.code!==da.FAILED_PRECONDITION||e.message!==Pa)throw e;ia("LocalStore","Unexpectedly lost primary lease")}
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
     */class $a{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&la(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new $a(((n,s)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,s)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof $a?t:$a.resolve(t)}catch(e){return $a.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):$a.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):$a.reject(t)}static resolve(e){return new $a(((t,n)=>{t(e)}))}static reject(e){return new $a(((t,n)=>{n(e)}))}static waitFor(e){return new $a(((t,n)=>{let s=0,r=0,i=!1;e.forEach((e=>{++s,e.next((()=>{++r,i&&r===s&&t()}),(e=>n(e)))})),i=!0,r===s&&t()}))}static or(e){let t=$a.resolve(!1);for(const n of e)t=t.next((e=>e?$a.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,s)=>{n.push(t.call(this,e,s))})),this.waitFor(n)}static mapArray(e,t){return new $a(((n,s)=>{const r=e.length,i=new Array(r);let o=0;for(let a=0;a<r;a++){const c=a;t(e[c]).next((e=>{i[c]=e,++o,o===r&&n(i)}),(e=>s(e)))}}))}static doWhile(e,t){return new $a(((n,s)=>{const r=()=>{!0===e()?t().next((()=>{r()}),s):n()};r()}))}}function Va(e){return"IndexedDbTransactionError"===e.name}
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
     */class Ga{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}function ja(e){return null==e}function Qa(e){return 0===e&&1/e==-1/0}
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
function qa(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function za(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Ka(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
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
     */Ga.ct=-1;class Wa{constructor(e,t){this.comparator=e,this.root=t||Ja.EMPTY}insert(e,t){return new Wa(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ja.BLACK,null,null))}remove(e){return new Wa(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ja.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(0===s)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ha(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ha(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ha(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ha(this.root,e,this.comparator,!0)}}class Ha{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,t&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(0===r){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ja{constructor(e,t,n,s,r){this.key=e,this.value=t,this.color=null!=n?n:Ja.RED,this.left=null!=s?s:Ja.EMPTY,this.right=null!=r?r:Ja.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,r){return new Ja(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const r=n(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,t,n),null):0===r?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ja.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===t(e,s.key)){if(s.right.isEmpty())return Ja.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ja.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ja.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw la();if(this.right.isRed())throw la();const e=this.left.check();if(e!==this.right.check())throw la();return e+(this.isRed()?0:1)}}Ja.EMPTY=null,Ja.RED=!0,Ja.BLACK=!1,Ja.EMPTY=new class{constructor(){this.size=0}get key(){throw la()}get value(){throw la()}get color(){throw la()}get left(){throw la()}get right(){throw la()}copy(e,t,n,s,r){return this}insert(e,t,n){return new Ja(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class Xa{constructor(e){this.comparator=e,this.data=new Wa(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ya(this.data.getIterator())}getIteratorFrom(e){return new Ya(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Xa))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,s=n.getNext().key;if(0!==this.comparator(e,s))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Xa(this.comparator);return t.data=e,t}}class Ya{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
     */class Za{constructor(e){this.fields=e,e.sort(xa.comparator)}static empty(){return new Za([])}unionWith(e){let t=new Xa(xa.comparator);for(const e of this.fields)t=t.add(e);for(const n of e)t=t.add(n);return new Za(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ka(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
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
     */class ec extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
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
     */class tc{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new ec("Invalid base64 string: "+e):e}}(e);return new tc(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new tc(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
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
     */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ca(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tc.EMPTY_BYTE_STRING=new tc("");const nc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function sc(e){if(ua(!!e),"string"==typeof e){let t=0;const n=nc.exec(e);if(ua(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:rc(e.seconds),nanos:rc(e.nanos)}}function rc(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function ic(e){return"string"==typeof e?tc.fromBase64String(e):tc.fromUint8Array(e)}
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
     */function oc(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ac(e){const t=e.mapValue.fields.__previous_value__;return oc(t)?ac(t):t}function cc(e){const t=sc(e.mapValue.fields.__local_write_time__.timestampValue);return new Sa(t.seconds,t.nanos)}
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
     */class lc{constructor(e,t,n,s,r,i,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=r,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class uc{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new uc("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof uc&&e.projectId===this.projectId&&e.database===this.database}}
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
     */const hc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function dc(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?oc(e)?4:function(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
     */(e)?9007199254740991:10:la()}function fc(e,t){if(e===t)return!0;const n=dc(e);if(n!==dc(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return cc(e).isEqual(cc(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=sc(e.timestampValue),s=sc(t.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return ic(e.bytesValue).isEqual(ic(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return rc(e.geoPointValue.latitude)===rc(t.geoPointValue.latitude)&&rc(e.geoPointValue.longitude)===rc(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return rc(e.integerValue)===rc(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=rc(e.doubleValue),s=rc(t.doubleValue);return n===s?Qa(n)===Qa(s):isNaN(n)&&isNaN(s)}return!1}(e,t);case 9:return ka(e.arrayValue.values||[],t.arrayValue.values||[],fc);case 10:return function(e,t){const n=e.mapValue.fields||{},s=t.mapValue.fields||{};if(qa(n)!==qa(s))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===s[e]||!fc(n[e],s[e])))return!1;return!0}(e,t);default:return la()}}function pc(e,t){return void 0!==(e.values||[]).find((e=>fc(e,t)))}function gc(e,t){if(e===t)return 0;const n=dc(e),s=dc(t);if(n!==s)return Ca(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ca(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=rc(e.integerValue||e.doubleValue),s=rc(t.integerValue||t.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(e,t);case 3:return mc(e.timestampValue,t.timestampValue);case 4:return mc(cc(e),cc(t));case 5:return Ca(e.stringValue,t.stringValue);case 6:return function(e,t){const n=ic(e),s=ic(t);return n.compareTo(s)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),s=t.split("/");for(let e=0;e<n.length&&e<s.length;e++){const t=Ca(n[e],s[e]);if(0!==t)return t}return Ca(n.length,s.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Ca(rc(e.latitude),rc(t.latitude));return 0!==n?n:Ca(rc(e.longitude),rc(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],s=t.values||[];for(let e=0;e<n.length&&e<s.length;++e){const t=gc(n[e],s[e]);if(t)return t}return Ca(n.length,s.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===hc.mapValue&&t===hc.mapValue)return 0;if(e===hc.mapValue)return 1;if(t===hc.mapValue)return-1;const n=e.fields||{},s=Object.keys(n),r=t.fields||{},i=Object.keys(r);s.sort(),i.sort();for(let e=0;e<s.length&&e<i.length;++e){const t=Ca(s[e],i[e]);if(0!==t)return t;const o=gc(n[s[e]],r[i[e]]);if(0!==o)return o}return Ca(s.length,i.length)}(e.mapValue,t.mapValue);default:throw la()}}function mc(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Ca(e,t);const n=sc(e),s=sc(t),r=Ca(n.seconds,s.seconds);return 0!==r?r:Ca(n.nanos,s.nanos)}function vc(e){return Ac(e)}function Ac(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=sc(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?ic(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,Ua.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const s of e.values||[])n?n=!1:t+=",",t+=Ac(s);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",s=!0;for(const r of t)s?s=!1:n+=",",n+=`${r}:${Ac(e.fields[r])}`;return n+"}"}(e.mapValue):la();var t,n}function wc(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function yc(e){return!!e&&"integerValue"in e}function bc(e){return!!e&&"arrayValue"in e}function Ic(e){return!!e&&"nullValue"in e}function Ec(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Tc(e){return!!e&&"mapValue"in e}function Cc(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return za(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Cc(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Cc(e.arrayValue.values[n]);return t}return Object.assign({},e)}class kc{constructor(e){this.value=e}static empty(){return new kc({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Tc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Cc(t)}setAll(e){let t=xa.emptyPath(),n={},s=[];e.forEach(((e,r)=>{if(!t.isImmediateParentOf(r)){const e=this.getFieldsMap(t);this.applyChanges(e,n,s),n={},s=[],t=r.popLast()}e?n[r.lastSegment()]=Cc(e):s.push(r.lastSegment())}));const r=this.getFieldsMap(t);this.applyChanges(r,n,s)}delete(e){const t=this.field(e.popLast());Tc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return fc(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];Tc(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){za(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new kc(Cc(this.value))}}function Sc(e){const t=[];return za(e.fields,((e,n)=>{const s=new xa([e]);if(Tc(n)){const e=Sc(n.mapValue).fields;if(0===e.length)t.push(s);else for(const n of e)t.push(s.child(n))}else t.push(s)})),new Za(t)
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
     */}class Rc{constructor(e,t,n,s,r,i,o){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=r,this.data=i,this.documentState=o}static newInvalidDocument(e){return new Rc(e,0,Ra.min(),Ra.min(),Ra.min(),kc.empty(),0)}static newFoundDocument(e,t,n,s){return new Rc(e,1,t,Ra.min(),n,s,0)}static newNoDocument(e,t){return new Rc(e,2,t,Ra.min(),Ra.min(),kc.empty(),0)}static newUnknownDocument(e,t){return new Rc(e,3,t,Ra.min(),Ra.min(),kc.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ra.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kc.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kc.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ra.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Rc&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Rc(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
     */class Dc{constructor(e,t){this.position=e,this.inclusive=t}}function Nc(e,t,n){let s=0;for(let r=0;r<e.position.length;r++){const i=t[r],o=e.position[r];if(s=i.field.isKeyField()?Ua.comparator(Ua.fromName(o.referenceValue),n.key):gc(o,n.data.field(i.field)),"desc"===i.dir&&(s*=-1),0!==s)break}return s}function _c(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!fc(e.position[n],t.position[n]))return!1;return!0}
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
     */class xc{constructor(e,t="asc"){this.field=e,this.dir=t}}function Uc(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
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
     */class Oc{}class Lc extends Oc{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new Gc(e,t,n):"array-contains"===t?new zc(e,n):"in"===t?new Kc(e,n):"not-in"===t?new Wc(e,n):"array-contains-any"===t?new Hc(e,n):new Lc(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new jc(e,n):new Qc(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(gc(t,this.value)):null!==t&&dc(this.value)===dc(t)&&this.matchesComparison(gc(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return la()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Mc extends Oc{constructor(e,t){super(),this.filters=e,this.op=t,this.lt=null}static create(e,t){return new Mc(e,t)}matches(e){return Pc(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.lt||(this.lt=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft((e=>e.isInequality()));return null!==e?e.field:null}ft(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function Pc(e){return"and"===e.op}function Fc(e){return function(e){for(const t of e.filters)if(t instanceof Mc)return!1;return!0}(e)&&Pc(e)}function Bc(e){if(e instanceof Lc)return e.field.canonicalString()+e.op.toString()+vc(e.value);if(Fc(e))return e.filters.map((e=>Bc(e))).join(",");{const t=e.filters.map((e=>Bc(e))).join(",");return`${e.op}(${t})`}}function $c(e,t){return e instanceof Lc?function(e,t){return t instanceof Lc&&e.op===t.op&&e.field.isEqual(t.field)&&fc(e.value,t.value)}(e,t):e instanceof Mc?function(e,t){return t instanceof Mc&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,s)=>e&&$c(n,t.filters[s])),!0)}(e,t):void la()}function Vc(e){return e instanceof Lc?function(e){return`${e.field.canonicalString()} ${e.op} ${vc(e.value)}`}(e):e instanceof Mc?function(e){return e.op.toString()+" {"+e.getFilters().map(Vc).join(" ,")+"}"}(e):"Filter"}class Gc extends Lc{constructor(e,t,n){super(e,t,n),this.key=Ua.fromName(n.referenceValue)}matches(e){const t=Ua.comparator(e.key,this.key);return this.matchesComparison(t)}}class jc extends Lc{constructor(e,t){super(e,"in",t),this.keys=qc("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Qc extends Lc{constructor(e,t){super(e,"not-in",t),this.keys=qc("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function qc(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Ua.fromName(e.referenceValue)))}class zc extends Lc{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return bc(t)&&pc(t.arrayValue,this.value)}}class Kc extends Lc{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&pc(this.value.arrayValue,t)}}class Wc extends Lc{constructor(e,t){super(e,"not-in",t)}matches(e){if(pc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!pc(this.value.arrayValue,t)}}class Hc extends Lc{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!bc(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>pc(this.value.arrayValue,e)))}}
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
     */class Jc{constructor(e,t=null,n=[],s=[],r=null,i=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=r,this.startAt=i,this.endAt=o,this.dt=null}}function Xc(e,t=null,n=[],s=[],r=null,i=null,o=null){return new Jc(e,t,n,s,r,i,o)}function Yc(e){const t=ha(e);if(null===t.dt){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>Bc(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),ja(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>vc(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>vc(e))).join(",")),t.dt=e}return t.dt}function Zc(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Uc(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!$c(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!_c(e.startAt,t.startAt)&&_c(e.endAt,t.endAt)}function el(e){return Ua.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
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
     */class tl{constructor(e,t=null,n=[],s=[],r=null,i="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=r,this.limitType=i,this.startAt=o,this.endAt=a,this.wt=null,this._t=null,this.startAt,this.endAt}}function nl(e){return new tl(e)}function sl(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function rl(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function il(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function ol(e){return null!==e.collectionGroup}function al(e){const t=ha(e);if(null===t.wt){t.wt=[];const e=il(t),n=rl(t);if(null!==e&&null===n)e.isKeyField()||t.wt.push(new xc(e)),t.wt.push(new xc(xa.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.wt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new xc(xa.keyField(),e))}}}return t.wt}function cl(e){const t=ha(e);if(!t._t)if("F"===t.limitType)t._t=Xc(t.path,t.collectionGroup,al(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of al(t)){const t="desc"===n.dir?"asc":"desc";e.push(new xc(n.field,t))}const n=t.endAt?new Dc(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new Dc(t.startAt.position,t.startAt.inclusive):null;t._t=Xc(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}return t._t}function ll(e,t){t.getFirstInequalityField(),il(e);const n=e.filters.concat([t]);return new tl(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function ul(e,t,n){return new tl(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function hl(e,t){return Zc(cl(e),cl(t))&&e.limitType===t.limitType}function dl(e){return`${Yc(cl(e))}|lt:${e.limitType}`}function fl(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>Vc(e))).join(", ")}]`),ja(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>vc(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>vc(e))).join(",")),`Target(${t})`}(cl(e))}; limitType=${e.limitType})`}function pl(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Ua.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of al(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const s=Nc(e,t,n);return e.inclusive?s<=0:s<0}(e.startAt,al(e),t))&&!(e.endAt&&!function(e,t,n){const s=Nc(e,t,n);return e.inclusive?s>=0:s>0}(e.endAt,al(e),t))}(e,t)}function gl(e){return(t,n)=>{let s=!1;for(const r of al(e)){const e=ml(r,t,n);if(0!==e)return e;s=s||r.field.isKeyField()}return 0}}function ml(e,t,n){const s=e.field.isKeyField()?Ua.comparator(t.key,n.key):function(e,t,n){const s=t.data.field(e),r=n.data.field(e);return null!==s&&null!==r?gc(s,r):la()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return la()}}
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
     */class vl{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[t,s]of n)if(this.equalsFn(t,e))return s}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(void 0===s)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<s.length;n++)if(this.equalsFn(s[n][0],e))return void(s[n]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return 1===n.length?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){za(this.inner,((t,n)=>{for(const[t,s]of n)e(t,s)}))}isEmpty(){return Ka(this.inner)}size(){return this.innerSize}}
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
     */const Al=new Wa(Ua.comparator);function wl(){return Al}const yl=new Wa(Ua.comparator);function bl(...e){let t=yl;for(const n of e)t=t.insert(n.key,n);return t}function Il(e){let t=yl;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function El(){return Cl()}function Tl(){return Cl()}function Cl(){return new vl((e=>e.toString()),((e,t)=>e.isEqual(t)))}const kl=new Wa(Ua.comparator),Sl=new Xa(Ua.comparator);function Rl(...e){let t=Sl;for(const n of e)t=t.add(n);return t}const Dl=new Xa(Ca);
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
function Nl(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qa(t)?"-0":t}}function _l(e){return{integerValue:""+e}}function xl(e,t){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!Qa(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}(t)?_l(t):Nl(e,t)}
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
     */class Ul{constructor(){this._=void 0}}function Ol(e,t,n){return e instanceof Pl?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&oc(t)&&(t=ac(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Fl?Bl(e,t):e instanceof $l?Vl(e,t):function(e,t){const n=Ml(e,t),s=jl(n)+jl(e.gt);return yc(n)&&yc(e.gt)?_l(s):Nl(e.serializer,s)}(e,t)}function Ll(e,t,n){return e instanceof Fl?Bl(e,t):e instanceof $l?Vl(e,t):n}function Ml(e,t){return e instanceof Gl?yc(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class Pl extends Ul{}class Fl extends Ul{constructor(e){super(),this.elements=e}}function Bl(e,t){const n=Ql(t);for(const t of e.elements)n.some((e=>fc(e,t)))||n.push(t);return{arrayValue:{values:n}}}class $l extends Ul{constructor(e){super(),this.elements=e}}function Vl(e,t){let n=Ql(t);for(const t of e.elements)n=n.filter((e=>!fc(e,t)));return{arrayValue:{values:n}}}class Gl extends Ul{constructor(e,t){super(),this.serializer=e,this.gt=t}}function jl(e){return rc(e.integerValue||e.doubleValue)}function Ql(e){return bc(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class ql{constructor(e,t){this.version=e,this.transformResults=t}}class zl{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new zl}static exists(e){return new zl(void 0,e)}static updateTime(e){return new zl(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Kl(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Wl{}function Hl(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new iu(e.key,zl.none()):new eu(e.key,e.data,zl.none());{const n=e.data,s=kc.empty();let r=new Xa(xa.comparator);for(let e of t.fields)if(!r.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?s.delete(e):s.set(e,t),r=r.add(e)}return new tu(e.key,s,new Za(r.toArray()),zl.none())}}function Jl(e,t,n){e instanceof eu?function(e,t,n){const s=e.value.clone(),r=su(e.fieldTransforms,t,n.transformResults);s.setAll(r),t.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(e,t,n):e instanceof tu?function(e,t,n){if(!Kl(e.precondition,t))return void t.convertToUnknownDocument(n.version);const s=su(e.fieldTransforms,t,n.transformResults),r=t.data;r.setAll(nu(e)),r.setAll(s),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Xl(e,t,n,s){return e instanceof eu?function(e,t,n,s){if(!Kl(e.precondition,t))return n;const r=e.value.clone(),i=ru(e.fieldTransforms,s,t);return r.setAll(i),t.convertToFoundDocument(t.version,r).setHasLocalMutations(),null}(e,t,n,s):e instanceof tu?function(e,t,n,s){if(!Kl(e.precondition,t))return n;const r=ru(e.fieldTransforms,s,t),i=t.data;return i.setAll(nu(e)),i.setAll(r),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,s):function(e,t,n){return Kl(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function Yl(e,t){let n=null;for(const s of e.fieldTransforms){const e=t.data.field(s.field),r=Ml(s.transform,e||null);null!=r&&(null===n&&(n=kc.empty()),n.set(s.field,r))}return n||null}function Zl(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&ka(e,t,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Fl&&t instanceof Fl||e instanceof $l&&t instanceof $l?ka(e.elements,t.elements,fc):e instanceof Gl&&t instanceof Gl?fc(e.gt,t.gt):e instanceof Pl&&t instanceof Pl}(e.transform,t.transform)}(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class eu extends Wl{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class tu extends Wl{constructor(e,t,n,s,r=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function nu(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}})),t}function su(e,t,n){const s=new Map;ua(e.length===n.length);for(let r=0;r<n.length;r++){const i=e[r],o=i.transform,a=t.data.field(i.field);s.set(i.field,Ll(o,a,n[r]))}return s}function ru(e,t,n){const s=new Map;for(const r of e){const e=r.transform,i=n.data.field(r.field);s.set(r.field,Ol(e,i,t))}return s}class iu extends Wl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ou extends Wl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
     */class au{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){const s=this.mutations[t];s.key.isEqual(e.key)&&Jl(s,e,n[t])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Xl(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Xl(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Tl();return this.mutations.forEach((s=>{const r=e.get(s.key),i=r.overlayedDocument;let o=this.applyToLocalView(i,r.mutatedFields);o=t.has(s.key)?null:o;const a=Hl(i,o);null!==a&&n.set(s.key,a),i.isValidDocument()||i.convertToNoDocument(Ra.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Rl())}isEqual(e){return this.batchId===e.batchId&&ka(this.mutations,e.mutations,((e,t)=>Zl(e,t)))&&ka(this.baseMutations,e.baseMutations,((e,t)=>Zl(e,t)))}}class cu{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){ua(e.mutations.length===n.length);let s=kl;const r=e.mutations;for(let e=0;e<r.length;e++)s=s.insert(r[e].key,n[e].version);return new cu(e,t,n,s)}}
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
     */class lu{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
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
     */class uu{constructor(e,t){this.count=e,this.unchangedNames=t}}
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
     */var hu,du;function fu(e){if(void 0===e)return oa("GRPC error has no .code"),da.UNKNOWN;switch(e){case hu.OK:return da.OK;case hu.CANCELLED:return da.CANCELLED;case hu.UNKNOWN:return da.UNKNOWN;case hu.DEADLINE_EXCEEDED:return da.DEADLINE_EXCEEDED;case hu.RESOURCE_EXHAUSTED:return da.RESOURCE_EXHAUSTED;case hu.INTERNAL:return da.INTERNAL;case hu.UNAVAILABLE:return da.UNAVAILABLE;case hu.UNAUTHENTICATED:return da.UNAUTHENTICATED;case hu.INVALID_ARGUMENT:return da.INVALID_ARGUMENT;case hu.NOT_FOUND:return da.NOT_FOUND;case hu.ALREADY_EXISTS:return da.ALREADY_EXISTS;case hu.PERMISSION_DENIED:return da.PERMISSION_DENIED;case hu.FAILED_PRECONDITION:return da.FAILED_PRECONDITION;case hu.ABORTED:return da.ABORTED;case hu.OUT_OF_RANGE:return da.OUT_OF_RANGE;case hu.UNIMPLEMENTED:return da.UNIMPLEMENTED;case hu.DATA_LOSS:return da.DATA_LOSS;default:return la()}}(du=hu||(hu={}))[du.OK=0]="OK",du[du.CANCELLED=1]="CANCELLED",du[du.UNKNOWN=2]="UNKNOWN",du[du.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",du[du.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",du[du.NOT_FOUND=5]="NOT_FOUND",du[du.ALREADY_EXISTS=6]="ALREADY_EXISTS",du[du.PERMISSION_DENIED=7]="PERMISSION_DENIED",du[du.UNAUTHENTICATED=16]="UNAUTHENTICATED",du[du.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",du[du.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",du[du.ABORTED=10]="ABORTED",du[du.OUT_OF_RANGE=11]="OUT_OF_RANGE",du[du.UNIMPLEMENTED=12]="UNIMPLEMENTED",du[du.INTERNAL=13]="INTERNAL",du[du.UNAVAILABLE=14]="UNAVAILABLE",du[du.DATA_LOSS=15]="DATA_LOSS";
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
class pu{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return gu}static getOrCreateInstance(){return null===gu&&(gu=new pu),gu}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach((t=>t(e)))}}let gu=null;
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
const mu=new Zo([4294967295,4294967295],0);function vu(e){const t=(new TextEncoder).encode(e),n=new Yo;return n.update(t),new Uint8Array(n.digest())}function Au(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),s=t.getUint32(4,!0),r=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new Zo([n,s],0),new Zo([r,i],0)]}class wu{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new yu(`Invalid padding: ${t}`);if(n<0)throw new yu(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new yu(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new yu(`Invalid padding when bitmap length is 0: ${t}`);this.It=8*e.length-t,this.Tt=Zo.fromNumber(this.It)}Et(e,t,n){let s=e.add(t.multiply(Zo.fromNumber(n)));return 1===s.compare(mu)&&(s=new Zo([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Tt).toNumber()}At(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}vt(e){if(0===this.It)return!1;const t=vu(e),[n,s]=Au(t);for(let e=0;e<this.hashCount;e++){const t=this.Et(n,s,e);if(!this.At(t))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),i=new wu(r,s,t);return n.forEach((e=>i.insert(e))),i}insert(e){if(0===this.It)return;const t=vu(e),[n,s]=Au(t);for(let e=0;e<this.hashCount;e++){const t=this.Et(n,s,e);this.Rt(t)}}Rt(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class yu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
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
     */class bu{constructor(e,t,n,s,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,Iu.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new bu(Ra.min(),s,new Wa(Ca),wl(),Rl())}}class Iu{constructor(e,t,n,s,r){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Iu(n,t,Rl(),Rl(),Rl())}}
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
     */class Eu{constructor(e,t,n,s){this.Pt=e,this.removedTargetIds=t,this.key=n,this.bt=s}}class Tu{constructor(e,t){this.targetId=e,this.Vt=t}}class Cu{constructor(e,t,n=tc.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class ku{constructor(){this.St=0,this.Dt=Du(),this.Ct=tc.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return 0!==this.St}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=Rl(),t=Rl(),n=Rl();return this.Dt.forEach(((s,r)=>{switch(r){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:la()}})),new Iu(this.Ct,this.xt,e,t,n)}Ft(){this.Nt=!1,this.Dt=Du()}Bt(e,t){this.Nt=!0,this.Dt=this.Dt.insert(e,t)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class Su{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=wl(),this.zt=Ru(),this.Wt=new Wa(Ca)}Ht(e){for(const t of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(t,e.bt):this.Yt(t,e.key,e.bt);for(const t of e.removedTargetIds)this.Yt(t,e.key,e.bt)}Xt(e){this.forEachTarget(e,(t=>{const n=this.Zt(t);switch(e.state){case 0:this.te(t)&&n.$t(e.resumeToken);break;case 1:n.Ut(),n.kt||n.Ft(),n.$t(e.resumeToken);break;case 2:n.Ut(),n.kt||this.removeTarget(t);break;case 3:this.te(t)&&(n.Kt(),n.$t(e.resumeToken));break;case 4:this.te(t)&&(this.ee(t),n.$t(e.resumeToken));break;default:la()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qt.forEach(((e,n)=>{this.te(n)&&t(n)}))}ne(e){var t;const n=e.targetId,s=e.Vt.count,r=this.se(n);if(r){const i=r.target;if(el(i))if(0===s){const e=new Ua(i.path);this.Yt(n,e,Rc.newNoDocument(e,Ra.min()))}else ua(1===s);else{const r=this.ie(n);if(r!==s){const s=this.re(e,r);if(0!==s){this.ee(n);const e=2===s?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(n,e)}null===(t=pu.instance)||void 0===t||t.notifyOnExistenceFilterMismatch(function(e,t,n){var s,r,i,o,a,c;const l={localCacheCount:t,existenceFilterCount:n.count},u=n.unchangedNames;return u&&(l.bloomFilter={applied:0===e,hashCount:null!==(s=null==u?void 0:u.hashCount)&&void 0!==s?s:0,bitmapLength:null!==(o=null===(i=null===(r=null==u?void 0:u.bits)||void 0===r?void 0:r.bitmap)||void 0===i?void 0:i.length)&&void 0!==o?o:0,padding:null!==(c=null===(a=null==u?void 0:u.bits)||void 0===a?void 0:a.padding)&&void 0!==c?c:0}),l}
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
     */(s,r,e.Vt))}}}}re(e,t){const{unchangedNames:n,count:s}=e.Vt;if(!n||!n.bits)return 1;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=n;let a,c;try{a=ic(r).toUint8Array()}catch(e){if(e instanceof ec)return aa("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw e}try{c=new wu(a,i,o)}catch(e){return aa(e instanceof yu?"BloomFilter error: ":"Applying bloom filter failed: ",e),1}return 0===c.It?1:s!==t-this.oe(e.targetId,c)?2:0}oe(e,t){const n=this.Gt.getRemoteKeysForTarget(e);let s=0;return n.forEach((n=>{const r=this.Gt.ue(),i=`projects/${r.projectId}/databases/${r.database}/documents/${n.path.canonicalString()}`;t.vt(i)||(this.Yt(e,n,null),s++)})),s}ce(e){const t=new Map;this.Qt.forEach(((n,s)=>{const r=this.se(s);if(r){if(n.current&&el(r.target)){const t=new Ua(r.target.path);null!==this.jt.get(t)||this.ae(s,t)||this.Yt(s,t,Rc.newNoDocument(t,e))}n.Mt&&(t.set(s,n.Ot()),n.Ft())}}));let n=Rl();this.zt.forEach(((e,t)=>{let s=!0;t.forEachWhile((e=>{const t=this.se(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(s=!1,!1)})),s&&(n=n.add(e))})),this.jt.forEach(((t,n)=>n.setReadTime(e)));const s=new bu(e,t,this.Wt,this.jt,n);return this.jt=wl(),this.zt=Ru(),this.Wt=new Wa(Ca),s}Jt(e,t){if(!this.te(e))return;const n=this.ae(e,t.key)?2:0;this.Zt(e).Bt(t.key,n),this.jt=this.jt.insert(t.key,t),this.zt=this.zt.insert(t.key,this.he(t.key).add(e))}Yt(e,t,n){if(!this.te(e))return;const s=this.Zt(e);this.ae(e,t)?s.Bt(t,1):s.Lt(t),this.zt=this.zt.insert(t,this.he(t).delete(e)),n&&(this.jt=this.jt.insert(t,n))}removeTarget(e){this.Qt.delete(e)}ie(e){const t=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let t=this.Qt.get(e);return t||(t=new ku,this.Qt.set(e,t)),t}he(e){let t=this.zt.get(e);return t||(t=new Xa(Ca),this.zt=this.zt.insert(e,t)),t}te(e){const t=null!==this.se(e);return t||ia("WatchChangeAggregator","Detected inactive target",e),t}se(e){const t=this.Qt.get(e);return t&&t.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new ku),this.Gt.getRemoteKeysForTarget(e).forEach((t=>{this.Yt(e,t,null)}))}ae(e,t){return this.Gt.getRemoteKeysForTarget(e).has(t)}}function Ru(){return new Wa(Ua.comparator)}function Du(){return new Wa(Ua.comparator)}const Nu={asc:"ASCENDING",desc:"DESCENDING"},_u={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},xu={and:"AND",or:"OR"};class Uu{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ou(e,t){return e.useProto3Json||ja(t)?t:{value:t}}function Lu(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Mu(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Pu(e,t){return Lu(e,t.toTimestamp())}function Fu(e){return ua(!!e),Ra.fromTimestamp(function(e){const t=sc(e);return new Sa(t.seconds,t.nanos)}(e))}function Bu(e,t){return function(e){return new Na(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function $u(e){const t=Na.fromString(e);return ua(rh(t)),t}function Vu(e,t){return Bu(e.databaseId,t.path)}function Gu(e,t){const n=$u(t);if(n.get(1)!==e.databaseId.projectId)throw new fa(da.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new fa(da.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Ua(qu(n))}function ju(e,t){return Bu(e.databaseId,t)}function Qu(e){return new Na(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function qu(e){return ua(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function zu(e,t,n){return{name:Vu(e,t),fields:n.value.mapValue.fields}}function Ku(e,t){return{documents:[ju(e,t.path)]}}function Wu(e,t){const n={structuredQuery:{}},s=t.path;null!==t.collectionGroup?(n.parent=ju(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=ju(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(e){if(0!==e.length)return nh(Mc.create(e,"and"))}(t.filters);r&&(n.structuredQuery.where=r);const i=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:eh(e.field),direction:Xu(e.dir)}}(e)))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Ou(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function Hu(e){let t=function(e){const t=$u(e);return 4===t.length?Na.emptyPath():qu(t)}(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){ua(1===s);const e=n.from[0];e.allDescendants?r=e.collectionId:t=t.child(e.collectionId)}let i=[];n.where&&(i=function(e){const t=Ju(e);return t instanceof Mc&&Fc(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new xc(th(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,ja(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new Dc(n,t)}(n.startAt));let l=null;return n.endAt&&(l=function(e){const t=!e.before,n=e.values||[];return new Dc(n,t)}(n.endAt)),function(e,t,n,s,r,i,o,a){return new tl(e,t,n,s,r,i,o,a)}(t,r,o,i,a,"F",c,l)}function Ju(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=th(e.unaryFilter.field);return Lc.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=th(e.unaryFilter.field);return Lc.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=th(e.unaryFilter.field);return Lc.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=th(e.unaryFilter.field);return Lc.create(r,"!=",{nullValue:"NULL_VALUE"});default:return la()}}(e):void 0!==e.fieldFilter?function(e){return Lc.create(th(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return la()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return Mc.create(e.compositeFilter.filters.map((e=>Ju(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return la()}}(e.compositeFilter.op))}(e):la()}function Xu(e){return Nu[e]}function Yu(e){return _u[e]}function Zu(e){return xu[e]}function eh(e){return{fieldPath:e.canonicalString()}}function th(e){return xa.fromServerFormat(e.fieldPath)}function nh(e){return e instanceof Lc?function(e){if("=="===e.op){if(Ec(e.value))return{unaryFilter:{field:eh(e.field),op:"IS_NAN"}};if(Ic(e.value))return{unaryFilter:{field:eh(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Ec(e.value))return{unaryFilter:{field:eh(e.field),op:"IS_NOT_NAN"}};if(Ic(e.value))return{unaryFilter:{field:eh(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:eh(e.field),op:Yu(e.op),value:e.value}}}(e):e instanceof Mc?function(e){const t=e.getFilters().map((e=>nh(e)));return 1===t.length?t[0]:{compositeFilter:{op:Zu(e.op),filters:t}}}(e):la()}function sh(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function rh(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
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
     */class ih{constructor(e,t,n,s,r=Ra.min(),i=Ra.min(),o=tc.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new ih(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ih(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ih(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ih(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
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
     */class oh{constructor(e){this.fe=e}}function ah(e){const t=Hu({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?ul(t,t.limit,"L"):t}
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
     */class ch{constructor(){this.rn=new lh}addToCollectionParentIndex(e,t){return this.rn.add(t),$a.resolve()}getCollectionParents(e,t){return $a.resolve(this.rn.getEntries(t))}addFieldIndex(e,t){return $a.resolve()}deleteFieldIndex(e,t){return $a.resolve()}getDocumentsMatchingTarget(e,t){return $a.resolve(null)}getIndexType(e,t){return $a.resolve(0)}getFieldIndexes(e,t){return $a.resolve([])}getNextCollectionGroupToUpdate(e){return $a.resolve(null)}getMinOffset(e,t){return $a.resolve(La.min())}getMinOffsetFromCollectionGroup(e,t){return $a.resolve(La.min())}updateCollectionGroup(e,t,n){return $a.resolve()}updateIndexEntries(e,t){return $a.resolve()}}class lh{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new Xa(Na.comparator),r=!s.has(n);return this.index[t]=s.add(n),r}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new Xa(Na.comparator)).toArray()}}
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
     */class uh{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new uh(0)}static Mn(){return new uh(-1)}}
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
     */class hh{constructor(){this.changes=new vl((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Rc.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?$a.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
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
     */class dh{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
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
     */class fh{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(n=s,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&Xl(n.mutation,e,Za.empty(),Sa.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Rl()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=Rl()){const s=El();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,n).next((e=>{let t=bl();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=El();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Rl())))}populateOverlays(e,t,n){const s=[];return n.forEach((e=>{t.has(e)||s.push(e)})),this.documentOverlayCache.getOverlays(e,s).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,s){let r=wl();const i=Cl(),o=Cl();return t.forEach(((e,t)=>{const o=n.get(t.key);s.has(t.key)&&(void 0===o||o.mutation instanceof tu)?r=r.insert(t.key,t):void 0!==o?(i.set(t.key,o.mutation.getFieldMask()),Xl(o.mutation,t,o.mutation.getFieldMask(),Sa.now())):i.set(t.key,Za.empty())})),this.recalculateAndSaveOverlays(e,r).next((e=>(e.forEach(((e,t)=>i.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new dh(t,null!==(n=i.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=Cl();let s=new Wa(((e,t)=>e-t)),r=Rl();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const r of e)r.keys().forEach((e=>{const i=t.get(e);if(null===i)return;let o=n.get(e)||Za.empty();o=r.applyToLocalView(i,o),n.set(e,o);const a=(s.get(r.batchId)||Rl()).add(e);s=s.insert(r.batchId,a)}))})).next((()=>{const i=[],o=s.getReverseIterator();for(;o.hasNext();){const s=o.getNext(),a=s.key,c=s.value,l=Tl();c.forEach((e=>{if(!r.has(e)){const s=Hl(t.get(e),n.get(e));null!==s&&l.set(e,s),r=r.add(e)}})),i.push(this.documentOverlayCache.saveOverlays(e,a,l))}return $a.waitFor(i)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return Ua.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):ol(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next((r=>{const i=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-r.size):$a.resolve(El());let o=-1,a=r;return i.next((t=>$a.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(t)?$a.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,r))).next((()=>this.computeViews(e,a,t,Rl()))).next((e=>({batchId:o,changes:Il(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Ua(t)).next((e=>{let t=bl();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const s=t.collectionGroup;let r=bl();return this.indexManager.getCollectionParents(e,s).next((i=>$a.forEach(i,(i=>{const o=function(e,t){return new tl(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,i.child(s));return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{r=r.insert(e,t)}))}))})).next((()=>r))))}getDocumentsMatchingCollectionQuery(e,t,n){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((r=>(s=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s)))).next((e=>{s.forEach(((t,n)=>{const s=n.getKey();null===e.get(s)&&(e=e.insert(s,Rc.newInvalidDocument(s)))}));let n=bl();return e.forEach(((e,r)=>{const i=s.get(e);void 0!==i&&Xl(i.mutation,r,Za.empty(),Sa.now()),pl(t,r)&&(n=n.insert(e,r))})),n}))}}
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
     */class ph{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,t){return $a.resolve(this.cs.get(t))}saveBundleMetadata(e,t){var n;return this.cs.set(t.id,{id:(n=t).id,version:n.version,createTime:Fu(n.createTime)}),$a.resolve()}getNamedQuery(e,t){return $a.resolve(this.hs.get(t))}saveNamedQuery(e,t){return this.hs.set(t.name,function(e){return{name:e.name,query:ah(e.bundledQuery),readTime:Fu(e.readTime)}}(t)),$a.resolve()}}
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
     */class gh{constructor(){this.overlays=new Wa(Ua.comparator),this.ls=new Map}getOverlay(e,t){return $a.resolve(this.overlays.get(t))}getOverlays(e,t){const n=El();return $a.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,s)=>{this.we(e,t,s)})),$a.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.ls.get(n);return void 0!==s&&(s.forEach((e=>this.overlays=this.overlays.remove(e))),this.ls.delete(n)),$a.resolve()}getOverlaysForCollection(e,t,n){const s=El(),r=t.length+1,i=new Ua(t.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const e=o.getNext().value,i=e.getKey();if(!t.isPrefixOf(i.path))break;i.path.length===r&&e.largestBatchId>n&&s.set(e.getKey(),e)}return $a.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let r=new Wa(((e,t)=>e-t));const i=this.overlays.getIterator();for(;i.hasNext();){const e=i.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=r.get(e.largestBatchId);null===t&&(t=El(),r=r.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=El(),a=r.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((e,t)=>o.set(e,t))),!(o.size()>=s)););return $a.resolve(o)}we(e,t,n){const s=this.overlays.get(n.key);if(null!==s){const e=this.ls.get(s.largestBatchId).delete(n.key);this.ls.set(s.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new lu(t,n));let r=this.ls.get(t);void 0===r&&(r=Rl(),this.ls.set(t,r)),this.ls.set(t,r.add(n.key))}}
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
     */class mh{constructor(){this.fs=new Xa(vh.ds),this.ws=new Xa(vh._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,t){const n=new vh(e,t);this.fs=this.fs.add(n),this.ws=this.ws.add(n)}gs(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.ys(new vh(e,t))}ps(e,t){e.forEach((e=>this.removeReference(e,t)))}Is(e){const t=new Ua(new Na([])),n=new vh(t,e),s=new vh(t,e+1),r=[];return this.ws.forEachInRange([n,s],(e=>{this.ys(e),r.push(e.key)})),r}Ts(){this.fs.forEach((e=>this.ys(e)))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const t=new Ua(new Na([])),n=new vh(t,e),s=new vh(t,e+1);let r=Rl();return this.ws.forEachInRange([n,s],(e=>{r=r.add(e.key)})),r}containsKey(e){const t=new vh(e,0),n=this.fs.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class vh{constructor(e,t){this.key=e,this.As=t}static ds(e,t){return Ua.comparator(e.key,t.key)||Ca(e.As,t.As)}static _s(e,t){return Ca(e.As,t.As)||Ua.comparator(e.key,t.key)}}
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
     */class Ah{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.vs=1,this.Rs=new Xa(vh.ds)}checkEmpty(e){return $a.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,s){const r=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new au(r,t,n,s);this.mutationQueue.push(i);for(const t of s)this.Rs=this.Rs.add(new vh(t.key,r)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return $a.resolve(i)}lookupMutationBatch(e,t){return $a.resolve(this.Ps(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.bs(n),r=s<0?0:s;return $a.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return $a.resolve(0===this.mutationQueue.length?-1:this.vs-1)}getAllMutationBatches(e){return $a.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new vh(t,0),s=new vh(t,Number.POSITIVE_INFINITY),r=[];return this.Rs.forEachInRange([n,s],(e=>{const t=this.Ps(e.As);r.push(t)})),$a.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Xa(Ca);return t.forEach((e=>{const t=new vh(e,0),s=new vh(e,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([t,s],(e=>{n=n.add(e.As)}))})),$a.resolve(this.Vs(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let r=n;Ua.isDocumentKey(r)||(r=r.child(""));const i=new vh(new Ua(r),0);let o=new Xa(Ca);return this.Rs.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===s&&(o=o.add(e.As)),!0)}),i),$a.resolve(this.Vs(o))}Vs(e){const t=[];return e.forEach((e=>{const n=this.Ps(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){ua(0===this.Ss(t.batchId,"removed")),this.mutationQueue.shift();let n=this.Rs;return $a.forEach(t.mutations,(s=>{const r=new vh(s.key,t.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Rs=n}))}Cn(e){}containsKey(e,t){const n=new vh(t,0),s=this.Rs.firstAfterOrEqual(n);return $a.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,$a.resolve()}Ss(e,t){return this.bs(e)}bs(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Ps(e){const t=this.bs(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
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
     */class wh{constructor(e){this.Ds=e,this.docs=new Wa(Ua.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),r=s?s.size:0,i=this.Ds(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:i}),this.size+=i-r,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return $a.resolve(n?n.document.mutableCopy():Rc.newInvalidDocument(t))}getEntries(e,t){let n=wl();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Rc.newInvalidDocument(e))})),$a.resolve(n)}getDocumentsMatchingQuery(e,t,n,s){let r=wl();const i=t.path,o=new Ua(i.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!i.isPrefixOf(e.path))break;e.path.length>i.length+1||Ma(Oa(o),n)<=0||(s.has(o.key)||pl(t,o))&&(r=r.insert(o.key,o.mutableCopy()))}return $a.resolve(r)}getAllFromCollectionGroup(e,t,n,s){la()}Cs(e,t){return $a.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new yh(this)}getSize(e){return $a.resolve(this.size)}}class yh extends hh{constructor(e){super(),this.os=e}applyChanges(e){const t=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?t.push(this.os.addEntry(e,s)):this.os.removeEntry(n)})),$a.waitFor(t)}getFromCache(e,t){return this.os.getEntry(e,t)}getAllFromCache(e,t){return this.os.getEntries(e,t)}}
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
     */class bh{constructor(e){this.persistence=e,this.xs=new vl((e=>Yc(e)),Zc),this.lastRemoteSnapshotVersion=Ra.min(),this.highestTargetId=0,this.Ns=0,this.ks=new mh,this.targetCount=0,this.Ms=uh.kn()}forEachTarget(e,t){return this.xs.forEach(((e,n)=>t(n))),$a.resolve()}getLastRemoteSnapshotVersion(e){return $a.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $a.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),$a.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Ns&&(this.Ns=t),$a.resolve()}Fn(e){this.xs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ms=new uh(t),this.highestTargetId=t),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,t){return this.Fn(t),this.targetCount+=1,$a.resolve()}updateTargetData(e,t){return this.Fn(t),$a.resolve()}removeTargetData(e,t){return this.xs.delete(t.target),this.ks.Is(t.targetId),this.targetCount-=1,$a.resolve()}removeTargets(e,t,n){let s=0;const r=[];return this.xs.forEach(((i,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.xs.delete(i),r.push(this.removeMatchingKeysForTargetId(e,o.targetId)),s++)})),$a.waitFor(r).next((()=>s))}getTargetCount(e){return $a.resolve(this.targetCount)}getTargetData(e,t){const n=this.xs.get(t)||null;return $a.resolve(n)}addMatchingKeys(e,t,n){return this.ks.gs(t,n),$a.resolve()}removeMatchingKeys(e,t,n){this.ks.ps(t,n);const s=this.persistence.referenceDelegate,r=[];return s&&t.forEach((t=>{r.push(s.markPotentiallyOrphaned(e,t))})),$a.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.ks.Is(t),$a.resolve()}getMatchingKeysForTargetId(e,t){const n=this.ks.Es(t);return $a.resolve(n)}containsKey(e,t){return $a.resolve(this.ks.containsKey(t))}}
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
     */class Ih{constructor(e,t){this.$s={},this.overlays={},this.Os=new Ga(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new bh(this),this.indexManager=new ch,this.remoteDocumentCache=function(e){return new wh(e)}((e=>this.referenceDelegate.Ls(e))),this.serializer=new oh(t),this.qs=new ph(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new gh,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.$s[e.toKey()];return n||(n=new Ah(t,this.referenceDelegate),this.$s[e.toKey()]=n),n}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,t,n){ia("MemoryPersistence","Starting transaction:",e);const s=new Eh(this.Os.next());return this.referenceDelegate.Us(),n(s).next((e=>this.referenceDelegate.Ks(s).next((()=>e)))).toPromise().then((e=>(s.raiseOnCommittedEvent(),e)))}Gs(e,t){return $a.or(Object.values(this.$s).map((n=>()=>n.containsKey(e,t))))}}class Eh extends Fa{constructor(e){super(),this.currentSequenceNumber=e}}class Th{constructor(e){this.persistence=e,this.Qs=new mh,this.js=null}static zs(e){return new Th(e)}get Ws(){if(this.js)return this.js;throw la()}addReference(e,t,n){return this.Qs.addReference(n,t),this.Ws.delete(n.toString()),$a.resolve()}removeReference(e,t,n){return this.Qs.removeReference(n,t),this.Ws.add(n.toString()),$a.resolve()}markPotentiallyOrphaned(e,t){return this.Ws.add(t.toString()),$a.resolve()}removeTarget(e,t){this.Qs.Is(t.targetId).forEach((e=>this.Ws.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Ws.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Us(){this.js=new Set}Ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $a.forEach(this.Ws,(n=>{const s=Ua.fromPath(n);return this.Hs(e,s).next((e=>{e||t.removeEntry(s,Ra.min())}))})).next((()=>(this.js=null,t.apply(e))))}updateLimboDocument(e,t){return this.Hs(e,t).next((e=>{e?this.Ws.delete(t.toString()):this.Ws.add(t.toString())}))}Ls(e){return 0}Hs(e,t){return $a.or([()=>$a.resolve(this.Qs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gs(e,t)])}}
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
     */class Ch{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.Fi=n,this.Bi=s}static Li(e,t){let n=Rl(),s=Rl();for(const e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:s=s.add(e.doc.key)}return new Ch(e,t.fromCache,n,s)}}
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
     */class kh{constructor(){this.qi=!1}initialize(e,t){this.Ui=e,this.indexManager=t,this.qi=!0}getDocumentsMatchingQuery(e,t,n,s){return this.Ki(e,t).next((r=>r||this.Gi(e,t,s,n))).next((n=>n||this.Qi(e,t)))}Ki(e,t){if(sl(t))return $a.resolve(null);let n=cl(t);return this.indexManager.getIndexType(e,n).next((s=>0===s?null:(null!==t.limit&&1===s&&(t=ul(t,null,"F"),n=cl(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((s=>{const r=Rl(...s);return this.Ui.getDocuments(e,r).next((s=>this.indexManager.getMinOffset(e,n).next((n=>{const i=this.ji(t,s);return this.zi(t,i,r,n.readTime)?this.Ki(e,ul(t,null,"F")):this.Wi(e,i,t,n)}))))})))))}Gi(e,t,n,s){return sl(t)||s.isEqual(Ra.min())?this.Qi(e,t):this.Ui.getDocuments(e,n).next((r=>{const i=this.ji(t,r);return this.zi(t,i,n,s)?this.Qi(e,t):(ra()<=Pt.DEBUG&&ia("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),fl(t)),this.Wi(e,i,t,function(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,r=Ra.fromTimestamp(1e9===s?new Sa(n+1,0):new Sa(n,s));return new La(r,Ua.empty(),t)}(s,-1)))}))}ji(e,t){let n=new Xa(gl(e));return t.forEach(((t,s)=>{pl(e,s)&&(n=n.add(s))})),n}zi(e,t,n,s){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const r="F"===e.limitType?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Qi(e,t){return ra()<=Pt.DEBUG&&ia("QueryEngine","Using full collection scan to execute query:",fl(t)),this.Ui.getDocumentsMatchingQuery(e,t,La.min())}Wi(e,t,n,s){return this.Ui.getDocumentsMatchingQuery(e,n,s).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
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
     */class Sh{constructor(e,t,n,s){this.persistence=e,this.Hi=t,this.serializer=s,this.Ji=new Wa(Ca),this.Yi=new vl((e=>Yc(e)),Zc),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(n)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new fh(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ji)))}}async function Rh(e,t){const n=ha(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let s;return n.mutationQueue.getAllMutationBatches(e).next((r=>(s=r,n.tr(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const r=[],i=[];let o=Rl();for(const e of s){r.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({er:e,removedBatchIds:r,addedBatchIds:i})))}))}))}function Dh(e){const t=ha(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Bs.getLastRemoteSnapshotVersion(e)))}function Nh(e,t){const n=ha(e),s=t.snapshotVersion;let r=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const i=n.Zi.newChangeBuffer({trackRemovals:!0});r=n.Ji;const o=[];t.targetChanges.forEach(((i,a)=>{const c=r.get(a);if(!c)return;o.push(n.Bs.removeMatchingKeys(e,i.removedDocuments,a).next((()=>n.Bs.addMatchingKeys(e,i.addedDocuments,a))));let l=c.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(a)?l=l.withResumeToken(tc.EMPTY_BYTE_STRING,Ra.min()).withLastLimboFreeSnapshotVersion(Ra.min()):i.resumeToken.approximateByteSize()>0&&(l=l.withResumeToken(i.resumeToken,s)),r=r.insert(a,l),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,l,i)&&o.push(n.Bs.updateTargetData(e,l))}));let a=wl(),c=Rl();if(t.documentUpdates.forEach((s=>{t.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,s))})),o.push(function(e,t,n){let s=Rl(),r=Rl();return n.forEach((e=>s=s.add(e))),t.getEntries(e,s).next((e=>{let s=wl();return n.forEach(((n,i)=>{const o=e.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(r=r.add(n)),i.isNoDocument()&&i.version.isEqual(Ra.min())?(t.removeEntry(n,i.readTime),s=s.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(i),s=s.insert(n,i)):ia("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)})),{nr:s,sr:r}}))}(e,i,t.documentUpdates).next((e=>{a=e.nr,c=e.sr}))),!s.isEqual(Ra.min())){const t=n.Bs.getLastRemoteSnapshotVersion(e).next((t=>n.Bs.setTargetsMetadata(e,e.currentSequenceNumber,s)));o.push(t)}return $a.waitFor(o).next((()=>i.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.Ji=r,e)))}function _h(e,t){const n=ha(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}async function xh(e,t,n){const s=ha(e),r=s.Ji.get(t),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,(e=>s.persistence.referenceDelegate.removeTarget(e,r)))}catch(e){if(!Va(e))throw e;ia("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}s.Ji=s.Ji.remove(t),s.Yi.delete(r.target)}function Uh(e,t,n){const s=ha(e);let r=Ra.min(),i=Rl();return s.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const s=ha(e),r=s.Yi.get(n);return void 0!==r?$a.resolve(s.Ji.get(r)):s.Bs.getTargetData(t,n)}(s,e,cl(t)).next((t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,s.Bs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{i=e}))})).next((()=>s.Hi.getDocumentsMatchingQuery(e,t,n?r:Ra.min(),n?i:Rl()))).next((e=>(function(e,t,n){let s=e.Xi.get(t)||Ra.min();n.forEach(((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)})),e.Xi.set(t,s)}(s,function(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}(t),e),{documents:e,ir:i})))))}class Oh{constructor(){this.activeTargetIds=Dl}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Lh{constructor(){this.Hr=new Oh,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,t,n){this.Jr[e]=t}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Oh,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
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
     */class Mh{Yr(e){}shutdown(){}}
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
     */class Ph{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){ia("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){ia("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
     */let Fh=null;function Bh(){return null===Fh?Fh=268435456+Math.round(2147483648*Math.random()):Fh++,"0x"+Fh.toString(16)
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
     */}const $h={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
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
     */class Vh{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}
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
     */const Gh="WebChannelConnection";class jh extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.mo=t+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,t,n,s,r){const i=Bh(),o=this.To(e,t);ia("RestConnection",`Sending RPC '${e}' ${i}:`,o,n);const a={};return this.Eo(a,s,r),this.Ao(e,o,a,n).then((t=>(ia("RestConnection",`Received RPC '${e}' ${i}: `,t),t)),(t=>{throw aa("RestConnection",`RPC '${e}' ${i} failed with error: `,t,"url: ",o,"request:",n),t}))}vo(e,t,n,s,r,i){return this.Io(e,t,n,s,r)}Eo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+na,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}To(e,t){const n=$h[e];return`${this.mo}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,t,n,s){const r=Bh();return new Promise(((i,o)=>{const a=new Xo;a.setWithCredentials(!0),a.listenOnce(qo.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case Qo.NO_ERROR:const t=a.getResponseJson();ia(Gh,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(t)),i(t);break;case Qo.TIMEOUT:ia(Gh,`RPC '${e}' ${r} timed out`),o(new fa(da.DEADLINE_EXCEEDED,"Request time out"));break;case Qo.HTTP_ERROR:const n=a.getStatus();if(ia(Gh,`RPC '${e}' ${r} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(da).indexOf(t)>=0?t:da.UNKNOWN}(t.status);o(new fa(e,t.message))}else o(new fa(da.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new fa(da.UNAVAILABLE,"Connection failed."));break;default:la()}}finally{ia(Gh,`RPC '${e}' ${r} completed.`)}}));const c=JSON.stringify(s);ia(Gh,`RPC '${e}' ${r} sending request:`,s),a.send(t,"POST",c,n,15)}))}Ro(e,t,n){const s=Bh(),r=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=new yo,o=Ar(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.xmlHttpFactory=new Ho({})),this.Eo(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const l=r.join("");ia(Gh,`Creating RPC '${e}' stream ${s}: ${l}`,a);const u=i.createWebChannel(l,a);let h=!1,d=!1;const f=new Vh({ro:t=>{d?ia(Gh,`Not sending because RPC '${e}' stream ${s} is closed:`,t):(h||(ia(Gh,`Opening RPC '${e}' stream ${s} transport.`),u.open(),h=!0),ia(Gh,`RPC '${e}' stream ${s} sending:`,t),u.send(t))},oo:()=>u.close()}),p=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return p(u,Jo.EventType.OPEN,(()=>{d||ia(Gh,`RPC '${e}' stream ${s} transport opened.`)})),p(u,Jo.EventType.CLOSE,(()=>{d||(d=!0,ia(Gh,`RPC '${e}' stream ${s} transport closed`),f.wo())})),p(u,Jo.EventType.ERROR,(t=>{d||(d=!0,aa(Gh,`RPC '${e}' stream ${s} transport errored:`,t),f.wo(new fa(da.UNAVAILABLE,"The operation could not be completed")))})),p(u,Jo.EventType.MESSAGE,(t=>{var n;if(!d){const r=t.data[0];ua(!!r);const i=r,o=i.error||(null===(n=i[0])||void 0===n?void 0:n.error);if(o){ia(Gh,`RPC '${e}' stream ${s} received error:`,o);const t=o.status;let n=function(e){const t=hu[e];if(void 0!==t)return fu(t)}(t),r=o.message;void 0===n&&(n=da.INTERNAL,r="Unknown error status: "+t+" with message "+o.message),d=!0,f.wo(new fa(n,r)),u.close()}else ia(Gh,`RPC '${e}' stream ${s} received:`,r),f._o(r)}})),p(o,zo.STAT_EVENT,(t=>{t.stat===Ko?ia(Gh,`RPC '${e}' stream ${s} detected buffering proxy`):t.stat===Wo&&ia(Gh,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{f.fo()}),0),f}}function Qh(){return"undefined"!=typeof document?document:null}
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
     */function qh(e){return new Uu(e,!0)}
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
     */class zh{constructor(e,t,n=1e3,s=1.5,r=6e4){this.ii=e,this.timerId=t,this.Po=n,this.bo=s,this.Vo=r,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const t=Math.floor(this.So+this.ko()),n=Math.max(0,Date.now()-this.Co),s=Math.max(0,t-n);s>0&&ia("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.So} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,s,(()=>(this.Co=Date.now(),e()))),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){null!==this.Do&&(this.Do.skipDelay(),this.Do=null)}cancel(){null!==this.Do&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}
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
     */class Kh{constructor(e,t,n,s,r,i,o,a){this.ii=e,this.$o=n,this.Oo=s,this.connection=r,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new zh(e,t)}Uo(){return 1===this.state||5===this.state||this.Ko()}Ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&null===this.Bo&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,(()=>this.zo())))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,t){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,4!==e?this.qo.reset():t&&t.code===da.RESOURCE_EXHAUSTED?(oa(t.toString()),oa("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):t&&t.code===da.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(t)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),t=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Fo===t&&this.Zo(e,n)}),(t=>{e((()=>{const e=new fa(da.UNKNOWN,"Fetching auth token failed: "+t.message);return this.tu(e)}))}))}Zo(e,t){const n=this.Xo(this.Fo);this.stream=this.eu(e,t),this.stream.uo((()=>{n((()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,(()=>(this.Ko()&&(this.state=3),Promise.resolve()))),this.listener.uo())))})),this.stream.ao((e=>{n((()=>this.tu(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}Go(){this.state=5,this.qo.No((async()=>{this.state=0,this.start()}))}tu(e){return ia("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget((()=>this.Fo===e?t():(ia("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Wh extends Kh{constructor(e,t,n,s,r,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,i),this.serializer=r}eu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.qo.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:la()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],i=function(e,t){return e.useProto3Json?(ua(void 0===t||"string"==typeof t),tc.fromBase64String(t||"")):(ua(void 0===t||t instanceof Uint8Array),tc.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?da.UNKNOWN:fu(e.code);return new fa(t,e.message||"")}(o);n=new Cu(s,r,i,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const r=Gu(e,s.document.name),i=Fu(s.document.updateTime),o=s.document.createTime?Fu(s.document.createTime):Ra.min(),a=new kc({mapValue:{fields:s.document.fields}}),c=Rc.newFoundDocument(r,i,o,a),l=s.targetIds||[],u=s.removedTargetIds||[];n=new Eu(l,u,c.key,c)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const r=Gu(e,s.document),i=s.readTime?Fu(s.readTime):Ra.min(),o=Rc.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Eu([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const r=Gu(e,s.document),i=s.removedTargetIds||[];n=new Eu([],i,r,null)}else{if(!("filter"in t))return la();{t.filter;const e=t.filter;e.targetId;const{count:s=0,unchangedNames:r}=e,i=new uu(s,r),o=e.targetId;n=new Tu(o,i)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return Ra.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Ra.min():t.readTime?Fu(t.readTime):Ra.min()}(e);return this.listener.nu(t,n)}su(e){const t={};t.database=Qu(this.serializer),t.addTarget=function(e,t){let n;const s=t.target;if(n=el(s)?{documents:Ku(e,s)}:{query:Wu(e,s)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=Mu(e,t.resumeToken);const s=Ou(e,t.expectedCount);null!==s&&(n.expectedCount=s)}else if(t.snapshotVersion.compareTo(Ra.min())>0){n.readTime=Lu(e,t.snapshotVersion.toTimestamp());const s=Ou(e,t.expectedCount);null!==s&&(n.expectedCount=s)}return n}(this.serializer,e);const n=function(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return la()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.Wo(t)}iu(e){const t={};t.database=Qu(this.serializer),t.removeTarget=e,this.Wo(t)}}class Hh extends Kh{constructor(e,t,n,s,r,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,i),this.serializer=r,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){if(ua(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const t=function(e,t){return e&&e.length>0?(ua(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Fu(e.updateTime):Fu(t);return n.isEqual(Ra.min())&&(n=Fu(t)),new ql(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=Fu(e.commitTime);return this.listener.cu(n,t)}return ua(!e.writeResults||0===e.writeResults.length),this.ru=!0,this.listener.au()}hu(){const e={};e.database=Qu(this.serializer),this.Wo(e)}uu(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>function(e,t){let n;if(t instanceof eu)n={update:zu(e,t.key,t.value)};else if(t instanceof iu)n={delete:Vu(e,t.key)};else if(t instanceof tu)n={update:zu(e,t.key,t.data),updateMask:sh(t.fieldMask)};else{if(!(t instanceof ou))return la();n={verify:Vu(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Pl)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Fl)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof $l)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Gl)return{fieldPath:t.field.canonicalString(),increment:n.gt};throw la()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Pu(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:la()}(e,t.precondition)),n}(this.serializer,e)))};this.Wo(t)}}
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
     */class Jh extends class{}{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.lu=!1}fu(){if(this.lu)throw new fa(da.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,t,n){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,r])=>this.connection.Io(e,t,n,s,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===da.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new fa(da.UNKNOWN,e.toString())}))}vo(e,t,n,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.vo(e,t,n,r,i,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===da.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new fa(da.UNKNOWN,e.toString())}))}terminate(){this.lu=!0}}class Xh{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){0===this.wu&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve()))))}Iu(e){"Online"===this.state?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,"Online"===e&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(oa(t),this.mu=!1):ia("OnlineStateTracker",t)}Tu(){null!==this._u&&(this._u.cancel(),this._u=null)}}
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
     */class Yh{constructor(e,t,n,s,r){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=r,this.Pu.Yr((e=>{n.enqueueAndForget((async()=>{ad(this)&&(ia("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=ha(e);t.vu.add(4),await ed(t),t.bu.set("Unknown"),t.vu.delete(4),await Zh(t)}(this))}))})),this.bu=new Xh(n,s)}}async function Zh(e){if(ad(e))for(const t of e.Ru)await t(!0)}async function ed(e){for(const t of e.Ru)await t(!1)}function td(e,t){const n=ha(e);n.Au.has(t.targetId)||(n.Au.set(t.targetId,t),od(n)?id(n):Td(n).Ko()&&sd(n,t))}function nd(e,t){const n=ha(e),s=Td(n);n.Au.delete(t),s.Ko()&&rd(n,t),0===n.Au.size&&(s.Ko()?s.jo():ad(n)&&n.bu.set("Unknown"))}function sd(e,t){if(e.Vu.qt(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Ra.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Td(e).su(t)}function rd(e,t){e.Vu.qt(t),Td(e).iu(t)}function id(e){e.Vu=new Su({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),le:t=>e.Au.get(t)||null,ue:()=>e.datastore.serializer.databaseId}),Td(e).start(),e.bu.gu()}function od(e){return ad(e)&&!Td(e).Uo()&&e.Au.size>0}function ad(e){return 0===ha(e).vu.size}function cd(e){e.Vu=void 0}async function ld(e){e.Au.forEach(((t,n)=>{sd(e,t)}))}async function ud(e,t){cd(e),od(e)?(e.bu.Iu(t),id(e)):e.bu.set("Unknown")}async function hd(e,t,n){if(e.bu.set("Online"),t instanceof Cu&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const s of t.targetIds)e.Au.has(s)&&(await e.remoteSyncer.rejectListen(s,n),e.Au.delete(s),e.Vu.removeTarget(s))}(e,t)}catch(n){ia("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await dd(e,n)}else if(t instanceof Eu?e.Vu.Ht(t):t instanceof Tu?e.Vu.ne(t):e.Vu.Xt(t),!n.isEqual(Ra.min()))try{const t=await Dh(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Vu.ce(t);return n.targetChanges.forEach(((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const r=e.Au.get(s);r&&e.Au.set(s,r.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const s=e.Au.get(t);if(!s)return;e.Au.set(t,s.withResumeToken(tc.EMPTY_BYTE_STRING,s.snapshotVersion)),rd(e,t);const r=new ih(s.target,t,n,s.sequenceNumber);sd(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){ia("RemoteStore","Failed to raise snapshot:",t),await dd(e,t)}}async function dd(e,t,n){if(!Va(t))throw t;e.vu.add(1),await ed(e),e.bu.set("Offline"),n||(n=()=>Dh(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{ia("RemoteStore","Retrying IndexedDB access"),await n(),e.vu.delete(1),await Zh(e)}))}function fd(e,t){return t().catch((n=>dd(e,n,t)))}async function pd(e){const t=ha(e),n=Cd(t);let s=t.Eu.length>0?t.Eu[t.Eu.length-1].batchId:-1;for(;gd(t);)try{const e=await _h(t.localStore,s);if(null===e){0===t.Eu.length&&n.jo();break}s=e.batchId,md(t,e)}catch(e){await dd(t,e)}vd(t)&&Ad(t)}function gd(e){return ad(e)&&e.Eu.length<10}function md(e,t){e.Eu.push(t);const n=Cd(e);n.Ko()&&n.ou&&n.uu(t.mutations)}function vd(e){return ad(e)&&!Cd(e).Uo()&&e.Eu.length>0}function Ad(e){Cd(e).start()}async function wd(e){Cd(e).hu()}async function yd(e){const t=Cd(e);for(const n of e.Eu)t.uu(n.mutations)}async function bd(e,t,n){const s=e.Eu.shift(),r=cu.from(s,t,n);await fd(e,(()=>e.remoteSyncer.applySuccessfulWrite(r))),await pd(e)}async function Id(e,t){t&&Cd(e).ou&&await async function(e,t){if(function(e){switch(e){default:return la();case da.CANCELLED:case da.UNKNOWN:case da.DEADLINE_EXCEEDED:case da.RESOURCE_EXHAUSTED:case da.INTERNAL:case da.UNAVAILABLE:case da.UNAUTHENTICATED:return!1;case da.INVALID_ARGUMENT:case da.NOT_FOUND:case da.ALREADY_EXISTS:case da.PERMISSION_DENIED:case da.FAILED_PRECONDITION:case da.ABORTED:case da.OUT_OF_RANGE:case da.UNIMPLEMENTED:case da.DATA_LOSS:return!0}}(n=t.code)&&n!==da.ABORTED){const n=e.Eu.shift();Cd(e).Qo(),await fd(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await pd(e)}var n}(e,t),vd(e)&&Ad(e)}async function Ed(e,t){const n=ha(e);n.asyncQueue.verifyOperationInProgress(),ia("RemoteStore","RemoteStore received new credentials");const s=ad(n);n.vu.add(3),await ed(n),s&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.vu.delete(3),await Zh(n)}function Td(e){return e.Su||(e.Su=function(e,t,n){const s=ha(e);return s.fu(),new Wh(t,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,n)
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
     */}(e.datastore,e.asyncQueue,{uo:ld.bind(null,e),ao:ud.bind(null,e),nu:hd.bind(null,e)}),e.Ru.push((async t=>{t?(e.Su.Qo(),od(e)?id(e):e.bu.set("Unknown")):(await e.Su.stop(),cd(e))}))),e.Su}function Cd(e){return e.Du||(e.Du=function(e,t,n){const s=ha(e);return s.fu(),new Hh(t,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,n)}(e.datastore,e.asyncQueue,{uo:wd.bind(null,e),ao:Id.bind(null,e),au:yd.bind(null,e),cu:bd.bind(null,e)}),e.Ru.push((async t=>{t?(e.Du.Qo(),await pd(e)):(await e.Du.stop(),e.Eu.length>0&&(ia("RemoteStore",`Stopping write stream with ${e.Eu.length} pending writes`),e.Eu=[]))}))),e.Du
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
     */}class kd{constructor(e,t,n,s,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=r,this.deferred=new pa,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,s,r){const i=Date.now()+n,o=new kd(e,t,i,s,r);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new fa(da.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Sd(e,t){if(oa("AsyncQueue",`${t}: ${e}`),Va(e))return new fa(da.UNAVAILABLE,`${t}: ${e}`);throw e}
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
     */class Rd{constructor(e){this.comparator=e?(t,n)=>e(t,n)||Ua.comparator(t.key,n.key):(e,t)=>Ua.comparator(e.key,t.key),this.keyedMap=bl(),this.sortedSet=new Wa(this.comparator)}static emptySet(e){return new Rd(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Rd))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,s=n.getNext().key;if(!e.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new Rd;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
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
     */class Dd{constructor(){this.Cu=new Wa(Ua.comparator)}track(e){const t=e.doc.key,n=this.Cu.get(t);n?0!==e.type&&3===n.type?this.Cu=this.Cu.insert(t,e):3===e.type&&1!==n.type?this.Cu=this.Cu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Cu=this.Cu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Cu=this.Cu.remove(t):1===e.type&&2===n.type?this.Cu=this.Cu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):la():this.Cu=this.Cu.insert(t,e)}xu(){const e=[];return this.Cu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Nd{constructor(e,t,n,s,r,i,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=r,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,s,r){const i=[];return t.forEach((e=>{i.push({type:0,doc:e})})),new Nd(e,t,Rd.emptySet(t),i,n,s,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&hl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}}
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
     */class _d{constructor(){this.Nu=void 0,this.listeners=[]}}class xd{constructor(){this.queries=new vl((e=>dl(e)),hl),this.onlineState="Unknown",this.ku=new Set}}async function Ud(e,t){const n=ha(e),s=t.query;let r=!1,i=n.queries.get(s);if(i||(r=!0,i=new _d),r)try{i.Nu=await n.onListen(s)}catch(e){const n=Sd(e,`Initialization of query '${fl(t.query)}' failed`);return void t.onError(n)}n.queries.set(s,i),i.listeners.push(t),t.Mu(n.onlineState),i.Nu&&t.$u(i.Nu)&&Pd(n)}async function Od(e,t){const n=ha(e),s=t.query;let r=!1;const i=n.queries.get(s);if(i){const e=i.listeners.indexOf(t);e>=0&&(i.listeners.splice(e,1),r=0===i.listeners.length)}if(r)return n.queries.delete(s),n.onUnlisten(s)}function Ld(e,t){const n=ha(e);let s=!1;for(const e of t){const t=e.query,r=n.queries.get(t);if(r){for(const t of r.listeners)t.$u(e)&&(s=!0);r.Nu=e}}s&&Pd(n)}function Md(e,t,n){const s=ha(e),r=s.queries.get(t);if(r)for(const e of r.listeners)e.onError(n);s.queries.delete(t)}function Pd(e){e.ku.forEach((e=>{e.next()}))}class Fd{constructor(e,t,n){this.query=e,this.Ou=t,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=n||{}}$u(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new Nd(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),t=!0):this.qu(e,this.onlineState)&&(this.Uu(e),t=!0),this.Bu=e,t}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let t=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),t=!0),t}qu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Ku||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Lu(e){if(e.docChanges.length>0)return!0;const t=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Uu(e){e=Nd.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}
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
     */class Bd{constructor(e){this.key=e}}class $d{constructor(e){this.key=e}}class Vd{constructor(e,t){this.query=e,this.Yu=t,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=Rl(),this.mutatedKeys=Rl(),this.tc=gl(e),this.ec=new Rd(this.tc)}get nc(){return this.Yu}sc(e,t){const n=t?t.ic:new Dd,s=t?t.ec:this.ec;let r=t?t.mutatedKeys:this.mutatedKeys,i=s,o=!1;const a="F"===this.query.limitType&&s.size===this.query.limit?s.last():null,c="L"===this.query.limitType&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((e,t)=>{const l=s.get(e),u=pl(this.query,t)?t:null,h=!!l&&this.mutatedKeys.has(l.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;l&&u?l.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.rc(l,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.tc(u,a)>0||c&&this.tc(u,c)<0)&&(o=!0)):!l&&u?(n.track({type:0,doc:u}),f=!0):l&&!u&&(n.track({type:1,doc:l}),f=!0,(a||c)&&(o=!0)),f&&(u?(i=i.add(u),r=d?r.add(e):r.delete(e)):(i=i.delete(e),r=r.delete(e)))})),null!==this.query.limit)for(;i.size>this.query.limit;){const e="F"===this.query.limitType?i.last():i.first();i=i.delete(e.key),r=r.delete(e.key),n.track({type:1,doc:e})}return{ec:i,ic:n,zi:o,mutatedKeys:r}}rc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const s=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const r=e.ic.xu();r.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return la()}};return n(e)-n(t)}
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
     */(e.type,t.type)||this.tc(e.doc,t.doc))),this.oc(n);const i=t?this.uc():[],o=0===this.Zu.size&&this.current?1:0,a=o!==this.Xu;return this.Xu=o,0!==r.length||a?{snapshot:new Nd(this.query,e.ec,s,r,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),cc:i}:{cc:i}}Mu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ec:this.ec,ic:new Dd,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach((e=>this.Yu=this.Yu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Yu=this.Yu.delete(e))),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=Rl(),this.ec.forEach((e=>{this.ac(e.key)&&(this.Zu=this.Zu.add(e.key))}));const t=[];return e.forEach((e=>{this.Zu.has(e)||t.push(new $d(e))})),this.Zu.forEach((n=>{e.has(n)||t.push(new Bd(n))})),t}hc(e){this.Yu=e.ir,this.Zu=Rl();const t=this.sc(e.documents);return this.applyChanges(t,!0)}lc(){return Nd.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,0===this.Xu,this.hasCachedResults)}}class Gd{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class jd{constructor(e){this.key=e,this.fc=!1}}class Qd{constructor(e,t,n,s,r,i){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=i,this.dc={},this.wc=new vl((e=>dl(e)),hl),this._c=new Map,this.mc=new Set,this.gc=new Wa(Ua.comparator),this.yc=new Map,this.Ic=new mh,this.Tc={},this.Ec=new Map,this.Ac=uh.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return!0===this.vc}}async function qd(e,t){const n=function(e){const t=ha(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Wd.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=lf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Jd.bind(null,t),t.dc.nu=Ld.bind(null,t.eventManager),t.dc.Pc=Md.bind(null,t.eventManager),t}(e);let s,r;const i=n.wc.get(t);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.lc();else{const e=await function(e,t){const n=ha(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let s;return n.Bs.getTargetData(e,t).next((r=>r?(s=r,$a.resolve(s)):n.Bs.allocateTargetId(e).next((r=>(s=new ih(t,r,"TargetPurposeListen",e.currentSequenceNumber),n.Bs.addTargetData(e,s).next((()=>s)))))))})).then((e=>{const s=n.Ji.get(e.targetId);return(null===s||e.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(e.targetId,e),n.Yi.set(t,e.targetId)),e}))}(n.localStore,cl(t)),i=n.sharedClientState.addLocalQueryTarget(e.targetId);s=e.targetId,r=await async function(e,t,n,s,r){e.Rc=(t,n,s)=>async function(e,t,n,s){let r=t.view.sc(n);r.zi&&(r=await Uh(e.localStore,t.query,!1).then((({documents:e})=>t.view.sc(e,r))));const i=s&&s.targetChanges.get(t.targetId),o=t.view.applyChanges(r,e.isPrimaryClient,i);return sf(e,t.targetId,o.cc),o.snapshot}(e,t,n,s);const i=await Uh(e.localStore,t,!0),o=new Vd(t,i.ir),a=o.sc(i.documents),c=Iu.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==e.onlineState,r),l=o.applyChanges(a,e.isPrimaryClient,c);sf(e,n,l.cc);const u=new Gd(t,n,o);return e.wc.set(t,u),e._c.has(n)?e._c.get(n).push(t):e._c.set(n,[t]),l.snapshot}(n,t,s,"current"===i,e.resumeToken),n.isPrimaryClient&&td(n.remoteStore,e)}return r}async function zd(e,t){const n=ha(e),s=n.wc.get(t),r=n._c.get(s.targetId);if(r.length>1)return n._c.set(s.targetId,r.filter((e=>!hl(e,t)))),void n.wc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await xh(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),nd(n.remoteStore,s.targetId),tf(n,s.targetId)})).catch(Ba)):(tf(n,s.targetId),await xh(n.localStore,s.targetId,!0))}async function Kd(e,t,n){const s=function(e){const t=ha(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Xd.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Yd.bind(null,t),t}(e);try{const e=await function(e,t){const n=ha(e),s=Sa.now(),r=t.reduce(((e,t)=>e.add(t.key)),Rl());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=wl(),c=Rl();return n.Zi.getEntries(e,r).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((r=>{i=r;const o=[];for(const e of t){const t=Yl(e,i.get(e.key).overlayedDocument);null!=t&&o.push(new tu(e.key,t,Sc(t.value.mapValue),zl.exists(!0)))}return n.mutationQueue.addMutationBatch(e,s,o,t)})).next((t=>{o=t;const s=t.applyToLocalDocumentSet(i,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,s)}))})).then((()=>({batchId:o.batchId,changes:Il(i)})))}(s.localStore,t);s.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let s=e.Tc[e.currentUser.toKey()];s||(s=new Wa(Ca)),s=s.insert(t,n),e.Tc[e.currentUser.toKey()]=s}(s,e.batchId,n),await af(s,e.changes),await pd(s.remoteStore)}catch(e){const t=Sd(e,"Failed to persist write");n.reject(t)}}async function Wd(e,t){const n=ha(e);try{const e=await Nh(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const s=n.yc.get(t);s&&(ua(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?s.fc=!0:e.modifiedDocuments.size>0?ua(s.fc):e.removedDocuments.size>0&&(ua(s.fc),s.fc=!1))})),await af(n,e,t)}catch(e){await Ba(e)}}function Hd(e,t,n){const s=ha(e);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const e=[];s.wc.forEach(((n,s)=>{const r=s.view.Mu(t);r.snapshot&&e.push(r.snapshot)})),function(e,t){const n=ha(e);n.onlineState=t;let s=!1;n.queries.forEach(((e,n)=>{for(const e of n.listeners)e.Mu(t)&&(s=!0)})),s&&Pd(n)}(s.eventManager,t),e.length&&s.dc.nu(e),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function Jd(e,t,n){const s=ha(e);s.sharedClientState.updateQueryState(t,"rejected",n);const r=s.yc.get(t),i=r&&r.key;if(i){let e=new Wa(Ua.comparator);e=e.insert(i,Rc.newNoDocument(i,Ra.min()));const n=Rl().add(i),r=new bu(Ra.min(),new Map,new Wa(Ca),e,n);await Wd(s,r),s.gc=s.gc.remove(i),s.yc.delete(t),of(s)}else await xh(s.localStore,t,!1).then((()=>tf(s,t,n))).catch(Ba)}async function Xd(e,t){const n=ha(e),s=t.batch.batchId;try{const e=await function(e,t){const n=ha(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const s=t.batch.keys(),r=n.Zi.newChangeBuffer({trackRemovals:!0});return function(e,t,n,s){const r=n.batch,i=r.keys();let o=$a.resolve();return i.forEach((e=>{o=o.next((()=>s.getEntry(t,e))).next((t=>{const i=n.docVersions.get(e);ua(null!==i),t.version.compareTo(i)<0&&(r.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),s.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,r)))}(n,e,t,r).next((()=>r.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,s,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Rl();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,s)))}))}(n.localStore,t);ef(n,s,null),Zd(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await af(n,e)}catch(e){await Ba(e)}}async function Yd(e,t,n){const s=ha(e);try{const e=await function(e,t){const n=ha(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let s;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(ua(null!==t),s=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,s,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,s))).next((()=>n.localDocuments.getDocuments(e,s)))}))}(s.localStore,t);ef(s,t,n),Zd(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await af(s,e)}catch(n){await Ba(n)}}function Zd(e,t){(e.Ec.get(t)||[]).forEach((e=>{e.resolve()})),e.Ec.delete(t)}function ef(e,t,n){const s=ha(e);let r=s.Tc[s.currentUser.toKey()];if(r){const e=r.get(t);e&&(n?e.reject(n):e.resolve(),r=r.remove(t)),s.Tc[s.currentUser.toKey()]=r}}function tf(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e._c.get(t))e.wc.delete(s),n&&e.dc.Pc(s,n);e._c.delete(t),e.isPrimaryClient&&e.Ic.Is(t).forEach((t=>{e.Ic.containsKey(t)||nf(e,t)}))}function nf(e,t){e.mc.delete(t.path.canonicalString());const n=e.gc.get(t);null!==n&&(nd(e.remoteStore,n),e.gc=e.gc.remove(t),e.yc.delete(n),of(e))}function sf(e,t,n){for(const s of n)s instanceof Bd?(e.Ic.addReference(s.key,t),rf(e,s)):s instanceof $d?(ia("SyncEngine","Document no longer in limbo: "+s.key),e.Ic.removeReference(s.key,t),e.Ic.containsKey(s.key)||nf(e,s.key)):la()}function rf(e,t){const n=t.key,s=n.path.canonicalString();e.gc.get(n)||e.mc.has(s)||(ia("SyncEngine","New document in limbo: "+n),e.mc.add(s),of(e))}function of(e){for(;e.mc.size>0&&e.gc.size<e.maxConcurrentLimboResolutions;){const t=e.mc.values().next().value;e.mc.delete(t);const n=new Ua(Na.fromString(t)),s=e.Ac.next();e.yc.set(s,new jd(n)),e.gc=e.gc.insert(n,s),td(e.remoteStore,new ih(cl(nl(n.path)),s,"TargetPurposeLimboResolution",Ga.ct))}}async function af(e,t,n){const s=ha(e),r=[],i=[],o=[];s.wc.isEmpty()||(s.wc.forEach(((e,a)=>{o.push(s.Rc(a,t,n).then((e=>{if((e||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){r.push(e);const t=Ch.Li(a.targetId,e);i.push(t)}})))})),await Promise.all(o),s.dc.nu(r),await async function(e,t){const n=ha(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>$a.forEach(t,(t=>$a.forEach(t.Fi,(s=>n.persistence.referenceDelegate.addReference(e,t.targetId,s))).next((()=>$a.forEach(t.Bi,(s=>n.persistence.referenceDelegate.removeReference(e,t.targetId,s)))))))))}catch(e){if(!Va(e))throw e;ia("LocalStore","Failed to update sequence numbers: "+e)}for(const e of t){const t=e.targetId;if(!e.fromCache){const e=n.Ji.get(t),s=e.snapshotVersion,r=e.withLastLimboFreeSnapshotVersion(s);n.Ji=n.Ji.insert(t,r)}}}(s.localStore,i))}async function cf(e,t){const n=ha(e);if(!n.currentUser.isEqual(t)){ia("SyncEngine","User change. New user:",t.toKey());const e=await Rh(n.localStore,t);n.currentUser=t,function(e,t){e.Ec.forEach((e=>{e.forEach((e=>{e.reject(new fa(da.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),e.Ec.clear()}(n),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await af(n,e.er)}}function lf(e,t){const n=ha(e),s=n.yc.get(t);if(s&&s.fc)return Rl().add(s.key);{let e=Rl();const s=n._c.get(t);if(!s)return e;for(const t of s){const s=n.wc.get(t);e=e.unionWith(s.view.nc)}return e}}class uf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=qh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return function(e,t,n,s){return new Sh(e,t,n,s)}(this.persistence,new kh,e.initialUser,this.serializer)}createPersistence(e){return new Ih(Th.zs,this.serializer)}createSharedClientState(e){return new Lh}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class hf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Hd(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=cf.bind(null,this.syncEngine),await async function(e,t){const n=ha(e);t?(n.vu.delete(2),await Zh(n)):t||(n.vu.add(2),await ed(n),n.bu.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new xd}createDatastore(e){const t=qh(e.databaseInfo.databaseId),n=(s=e.databaseInfo,new jh(s));var s;return function(e,t,n,s){return new Jh(e,t,n,s)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,s=e.asyncQueue,r=e=>Hd(this.syncEngine,e,0),i=Ph.D()?new Ph:new Mh,new Yh(t,n,s,r,i);var t,n,s,r,i}createSyncEngine(e,t){return function(e,t,n,s,r,i,o){const a=new Qd(e,t,n,s,r,i);return o&&(a.vc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=ha(e);ia("RemoteStore","RemoteStore shutting down."),t.vu.add(5),await ed(t),t.Pu.shutdown(),t.bu.set("Unknown")}(this.remoteStore)}}
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
     */class df{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):oa("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
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
     */class ff{constructor(e,t,n,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=s,this.user=ta.UNAUTHENTICATED,this.clientId=Ta.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{ia("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(ia("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new fa(da.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new pa;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=Sd(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function pf(e,t){e.asyncQueue.verifyOperationInProgress(),ia("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener((async e=>{s.isEqual(e)||(await Rh(t.localStore,e),s=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function gf(e,t){e.asyncQueue.verifyOperationInProgress();const n=await async function(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){ia("FirestoreClient","Using user provided OfflineComponentProvider");try{await pf(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!function(e){return"FirebaseError"===e.name?e.code===da.FAILED_PRECONDITION||e.code===da.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}(n))throw n;aa("Error using user provided cache. Falling back to memory cache: "+n),await pf(e,new uf)}}else ia("FirestoreClient","Using default OfflineComponentProvider"),await pf(e,new uf);return e._offlineComponents}(e);ia("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener((e=>Ed(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>Ed(t.remoteStore,n))),e._onlineComponents=t}async function mf(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(ia("FirestoreClient","Using user provided OnlineComponentProvider"),await gf(e,e._uninitializedComponentsProvider._online)):(ia("FirestoreClient","Using default OnlineComponentProvider"),await gf(e,new hf))),e._onlineComponents}async function vf(e){const t=await mf(e),n=t.eventManager;return n.onListen=qd.bind(null,t.syncEngine),n.onUnlisten=zd.bind(null,t.syncEngine),n}
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
function Af(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
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
     */}const wf=new Map;
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
     */function yf(e,t,n){if(!n)throw new fa(da.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function bf(e){if(!Ua.isDocumentKey(e))throw new fa(da.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function If(e){if(Ua.isDocumentKey(e))throw new fa(da.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Ef(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":la()}function Tf(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new fa(da.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ef(e);throw new fa(da.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
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
     */class Cf{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new fa(da.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new fa(da.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,s){if(!0===t&&!0===s)throw new fa(da.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Af(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new fa(da.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new fa(da.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new fa(da.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}
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
     */(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,n}}class kf{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new fa(da.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new fa(da.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cf(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new ma;switch(e.type){case"firstParty":return new ya(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new fa(da.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=wf.get(e);t&&(ia("ComponentProvider","Removing Datastore"),wf.delete(e),t.terminate())}(this),Promise.resolve()}}function Sf(e,t,n,s={}){var r;const i=(e=Tf(e,kf))._getSettings(),o=`${t}:${n}`;if("firestore.googleapis.com"!==i.host&&i.host!==o&&aa("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),s.mockUserToken){let t,n;if("string"==typeof s.mockUserToken)t=s.mockUserToken,n=ta.MOCK_USER;else{t=function(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",s=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e);return[dt(JSON.stringify({alg:"none",type:"JWT"})),dt(JSON.stringify(i)),""].join(".")}(s.mockUserToken,null===(r=e._app)||void 0===r?void 0:r.options.projectId);const i=s.mockUserToken.sub||s.mockUserToken.user_id;if(!i)throw new fa(da.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new ta(i)}e._authCredentials=new va(new ga(t,n))}}
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
     */class Rf{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Nf(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Rf(this.firestore,e,this._key)}}class Df{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Df(this.firestore,e,this._query)}}class Nf extends Df{constructor(e,t,n){super(e,t,nl(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Rf(this.firestore,null,new Ua(e))}withConverter(e){return new Nf(this.firestore,e,this._path)}}function _f(e,t,...n){if(e=xt(e),yf("collection","path",t),e instanceof kf){const s=Na.fromString(t,...n);return If(s),new Nf(e,null,s)}{if(!(e instanceof Rf||e instanceof Nf))throw new fa(da.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(Na.fromString(t,...n));return If(s),new Nf(e.firestore,null,s)}}function xf(e,t,...n){if(e=xt(e),1===arguments.length&&(t=Ta.A()),yf("doc","path",t),e instanceof kf){const s=Na.fromString(t,...n);return bf(s),new Rf(e,null,new Ua(s))}{if(!(e instanceof Rf||e instanceof Nf))throw new fa(da.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(Na.fromString(t,...n));return bf(s),new Rf(e.firestore,e instanceof Nf?e.converter:null,new Ua(s))}}
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
     */class Uf{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new zh(this,"async_queue_retry"),this.Xc=()=>{const e=Qh();e&&ia("AsyncQueue","Visibility state changed to "+e.visibilityState),this.qo.Mo()};const e=Qh();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const t=Qh();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise((()=>{}));const t=new pa;return this.ta((()=>this.jc&&this.Jc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Qc.push(e),this.ea())))}async ea(){if(0!==this.Qc.length){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Va(e))throw e;ia("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No((()=>this.ea()))}}ta(e){const t=this.Gc.then((()=>(this.Hc=!0,e().catch((e=>{this.Wc=e,this.Hc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
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
     */(e);throw oa("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Hc=!1,e))))));return this.Gc=t,t}enqueueAfterDelay(e,t,n){this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);const s=kd.createAndSchedule(this,e,t,n,(e=>this.na(e)));return this.zc.push(s),s}Zc(){this.Wc&&la()}verifyOperationInProgress(){}async sa(){let e;do{e=this.Gc,await e}while(e!==this.Gc)}ia(e){for(const t of this.zc)if(t.timerId===e)return!0;return!1}ra(e){return this.sa().then((()=>{this.zc.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.zc)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.sa()}))}oa(e){this.Yc.push(e)}na(e){const t=this.zc.indexOf(e);this.zc.splice(t,1)}}class Of extends kf{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new Uf,this._persistenceKey=(null==s?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Mf(this),this._firestoreClient.terminate()}}function Lf(e){return e._firestoreClient||Mf(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Mf(e){var t,n,s;const r=e._freezeSettings(),i=function(e,t,n,s){return new lc(e,t,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Af(s.experimentalLongPollingOptions),s.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,r);e._firestoreClient=new ff(e._authCredentials,e._appCheckCredentials,e._queue,i),(null===(n=r.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(s=r.cache)||void 0===s?void 0:s._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}
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
     */class Pf{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Pf(tc.fromBase64String(e))}catch(e){throw new fa(da.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Pf(tc.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
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
     */class Ff{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new fa(da.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xa(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
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
     */class Bf{constructor(e){this._methodName=e}}
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
     */class $f{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new fa(da.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new fa(da.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ca(this._lat,e._lat)||Ca(this._long,e._long)}}
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
     */const Vf=/^__.*__$/;class Gf{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new tu(e,this.data,this.fieldMask,t,this.fieldTransforms):new eu(e,this.data,t,this.fieldTransforms)}}function jf(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw la()}}class Qf{constructor(e,t,n,s,r,i){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,void 0===r&&this.ua(),this.fieldTransforms=r||[],this.fieldMask=i||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Qf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),s=this.aa({path:n,la:!1});return s.fa(e),s}da(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),s=this.aa({path:n,la:!1});return s.ua(),s}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return tp(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(0===e.length)throw this._a("Document fields must not be empty");if(jf(this.ca)&&Vf.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class qf{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||qh(e)}ya(e,t,n,s=!1){return new Qf({ca:e,methodName:t,ga:n,path:xa.emptyPath(),la:!1,ma:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function zf(e){const t=e._freezeSettings(),n=qh(e._databaseId);return new qf(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Kf(e,t,n,s,r,i={}){const o=e.ya(i.merge||i.mergeFields?2:0,t,n,r);Xf("Data must be an object, but it was:",o,s);const a=Hf(s,o);let c,l;if(i.merge)c=new Za(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const e=[];for(const s of i.mergeFields){const r=Yf(t,s,n);if(!o.contains(r))throw new fa(da.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);np(e,r)||e.push(r)}c=new Za(e),l=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,l=o.fieldTransforms;return new Gf(new kc(a),c,l)}function Wf(e,t){if(Jf(e=xt(e)))return Xf("Unsupported field value:",t,e),Hf(e,t);if(e instanceof Bf)return function(e,t){if(!jf(t.ca))throw t._a(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t._a(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.la&&4!==t.ca)throw t._a("Nested arrays are not supported");return function(e,t){const n=[];let s=0;for(const r of e){let e=Wf(r,t.wa(s));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),s++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=xt(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return xl(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Sa.fromDate(e);return{timestampValue:Lu(t.serializer,n)}}if(e instanceof Sa){const n=new Sa(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Lu(t.serializer,n)}}if(e instanceof $f)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Pf)return{bytesValue:Mu(t.serializer,e._byteString)};if(e instanceof Rf){const n=t.databaseId,s=e.firestore._databaseId;if(!s.isEqual(n))throw t._a(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Bu(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t._a(`Unsupported field value: ${Ef(e)}`)}(e,t)}function Hf(e,t){const n={};return Ka(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):za(e,((e,s)=>{const r=Wf(s,t.ha(e));null!=r&&(n[e]=r)})),{mapValue:{fields:n}}}function Jf(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Sa||e instanceof $f||e instanceof Pf||e instanceof Rf||e instanceof Bf)}function Xf(e,t,n){if(!Jf(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const s=Ef(n);throw"an object"===s?t._a(e+" a custom object"):t._a(e+" "+s)}}function Yf(e,t,n){if((t=xt(t))instanceof Ff)return t._internalPath;if("string"==typeof t)return ep(e,t);throw tp("Field path arguments must be of type string or ",e,!1,void 0,n)}const Zf=new RegExp("[~\\*/\\[\\]]");function ep(e,t,n){if(t.search(Zf)>=0)throw tp(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Ff(...t.split("."))._internalPath}catch(s){throw tp(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function tp(e,t,n,s,r){const i=s&&!s.isEmpty(),o=void 0!==r;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new fa(da.INVALID_ARGUMENT,a+e+c)}function np(e,t){return e.some((e=>e.isEqual(t)))}
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
     */class sp{constructor(e,t,n,s,r){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Rf(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new rp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ip("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class rp extends sp{data(){return super.data()}}function ip(e,t){return"string"==typeof t?ep(e,t):t instanceof Ff?t._internalPath:t._delegate._internalPath}
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
     */class op{}class ap extends op{}function cp(e,t,...n){let s=[];t instanceof op&&s.push(t),s=s.concat(n),function(e){const t=e.filter((e=>e instanceof up)).length,n=e.filter((e=>e instanceof lp)).length;if(t>1||t>0&&n>0)throw new fa(da.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
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
     */(s);for(const t of s)e=t._apply(e);return e}class lp extends ap{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new lp(e,t,n)}_apply(e){const t=this._parse(e);return fp(e._query,t),new Df(e.firestore,e.converter,ll(e._query,t))}_parse(e){const t=zf(e.firestore),n=function(e,t,n,s,r,i,o){let a;if(r.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new fa(da.INVALID_ARGUMENT,`Invalid Query. You can't perform '${i}' queries on documentId().`);if("in"===i||"not-in"===i){dp(o,i);const t=[];for(const n of o)t.push(hp(s,e,n));a={arrayValue:{values:t}}}else a=hp(s,e,o)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||dp(o,i),a=function(e,t,n,s=!1){return Wf(n,e.ya(s?4:3,t))}(n,"where",o,"in"===i||"not-in"===i);return Lc.create(r,i,a)}(e._query,0,t,e.firestore._databaseId,this._field,this._op,this._value);return n}}class up extends op{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new up(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:Mc.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const s=t.getFlattenedFilters();for(const e of s)fp(n,e),n=ll(n,e)}(e._query,t),new Df(e.firestore,e.converter,ll(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function hp(e,t,n){if("string"==typeof(n=xt(n))){if(""===n)throw new fa(da.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ol(t)&&-1!==n.indexOf("/"))throw new fa(da.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=t.path.child(Na.fromString(n));if(!Ua.isDocumentKey(s))throw new fa(da.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return wc(e,new Ua(s))}if(n instanceof Rf)return wc(e,n._key);throw new fa(da.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ef(n)}.`)}function dp(e,t){if(!Array.isArray(e)||0===e.length)throw new fa(da.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function fp(e,t){if(t.isInequality()){const n=il(e),s=t.field;if(null!==n&&!n.isEqual(s))throw new fa(da.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${s.toString()}'`);const r=rl(e);null!==r&&function(e,t,n){if(!n.isEqual(t))throw new fa(da.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}(0,s,r)}const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new fa(da.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new fa(da.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class pp{convertValue(e,t="none"){switch(dc(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rc(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ic(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw la()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return za(e,((e,s)=>{n[e]=this.convertValue(s,t)})),n}convertGeoPoint(e){return new $f(rc(e.latitude),rc(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=ac(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(cc(e));default:return null}}convertTimestamp(e){const t=sc(e);return new Sa(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Na.fromString(e);ua(rh(n));const s=new uc(n.get(1),n.get(3)),r=new Ua(n.popFirst(5));return s.isEqual(t)||oa(`Document ${r} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}
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
class gp{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class mp extends sp{constructor(e,t,n,s,r,i){super(e,t,n,s,i),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new vp(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(ip("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class vp extends mp{data(e={}){return super.data(e)}}class Ap{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new gp(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new vp(this._firestore,this._userDataWriter,n.key,n,new gp(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new fa(da.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const s=new vp(e._firestore,e._userDataWriter,n.doc.key,n.doc,new gp(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:s,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const s=new vp(e._firestore,e._userDataWriter,t.doc.key,t.doc,new gp(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let r=-1,i=-1;return 0!==t.type&&(r=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),i=n.indexOf(t.doc.key)),{type:wp(t.type),doc:s,oldIndex:r,newIndex:i}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function wp(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return la()}}
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
     */function yp(e){e=Tf(e,Rf);const t=Tf(e.firestore,Of);return function(e,t,n={}){const s=new pa;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,s,r){const i=new df({next:i=>{t.enqueueAndForget((()=>Od(e,o)));const a=i.docs.has(n);!a&&i.fromCache?r.reject(new fa(da.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&i.fromCache&&s&&"server"===s.source?r.reject(new fa(da.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):r.resolve(i)},error:e=>r.reject(e)}),o=new Fd(nl(n.path),i,{includeMetadataChanges:!0,Ku:!0});return Ud(e,o)}(await vf(e),e.asyncQueue,t,n,s))),s.promise}(Lf(t),e._key).then((n=>function(e,t,n){const s=n.docs.get(t._key),r=new bp(e);return new mp(e,r,t._key,s,new gp(n.hasPendingWrites,n.fromCache),t.converter)}(t,e,n)))}class bp extends pp{constructor(e){super(),this.firestore=e}convertBytes(e){return new Pf(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Rf(this.firestore,null,t)}}function Ip(e){e=Tf(e,Df);const t=Tf(e.firestore,Of),n=Lf(t),s=new bp(t);return function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new fa(da.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),function(e,t,n={}){const s=new pa;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,s,r){const i=new df({next:n=>{t.enqueueAndForget((()=>Od(e,o))),n.fromCache&&"server"===s.source?r.reject(new fa(da.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):r.resolve(n)},error:e=>r.reject(e)}),o=new Fd(n,i,{includeMetadataChanges:!0,Ku:!0});return Ud(e,o)}(await vf(e),e.asyncQueue,t,n,s))),s.promise}(n,e._query).then((n=>new Ap(t,s,e,n)))}function Ep(e,t,n){e=Tf(e,Rf);const s=Tf(e.firestore,Of),r=function(e,t,n){let s;return s=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,s}(e.converter,t,n);return Tp(s,[Kf(zf(s),"setDoc",e._key,r,null!==e.converter,n).toMutation(e._key,zl.none())])}function Tp(e,t){return function(e,t){const n=new pa;return e.asyncQueue.enqueueAndForget((async()=>Kd(await function(e){return mf(e).then((e=>e.syncEngine))}(e),t,n))),n.promise}(Lf(e),t)}function Cp(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(s=Object.getOwnPropertySymbols(e);r<s.length;r++)t.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(n[s[r]]=e[s[r]])}return n}function kp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}!function(e,t=!0){!function(e){na=e}(yn),mn(new Ut("firestore",((e,{instanceIdentifier:n,options:s})=>{const r=e.getProvider("app").getImmediate(),i=new Of(new Aa(e.getProvider("auth-internal")),new Ia(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new fa(da.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new uc(e.options.projectId,t)}(r,n),r);return s=Object.assign({useFetchStreams:t},s),i._setSettings(s),i}),"PUBLIC").setMultipleInstances(!0)),En(ea,"3.13.0",e),En(ea,"3.13.0","esm2017")}(),"function"==typeof SuppressedError&&SuppressedError;const Sp=kp,Rp=new Et("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Dp=new Gt("@firebase/auth");function Np(e,...t){Dp.logLevel<=Pt.ERROR&&Dp.error(`Auth (${yn}): ${e}`,...t)}
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
     */function _p(e,...t){throw Up(e,...t)}function xp(e,...t){return Up(e,...t)}function Up(e,...t){if("string"!=typeof e){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=e.name),e._errorFactory.create(n,...s)}return Rp.create(e,...t)}function Op(e,t,...n){if(!e)throw Up(t,...n)}function Lp(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Np(t),new Error(t)}function Mp(e,t){e||Lp(t)}
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
     */function Pp(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Fp(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
     */function Bp(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==Fp()&&"https:"!==Fp()&&!function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&!("connection"in navigator)||navigator.onLine}
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
class $p{constructor(e,t){this.shortDelay=e,this.longDelay=t,Mp(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(bt())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return Bp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
     */function Vp(e,t){Mp(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
     */class Gp{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Lp("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Lp("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Lp("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
     */const jp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},Qp=new $p(3e4,6e4);
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
     */function qp(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function zp(e,t,n,s,r={}){return Kp(e,r,(async()=>{let r={},i={};s&&("GET"===t?i=s:r={body:JSON.stringify(s)});const o=St(Object.assign({key:e.config.apiKey},i)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),Gp.fetch()(Hp(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},r))}))}async function Kp(e,t,n){e._canInitEmulator=!1;const s=Object.assign(Object.assign({},jp),t);try{const t=new Jp(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const i=await r.json();if("needConfirmation"in i)throw Xp(e,"account-exists-with-different-credential",i);if(r.ok&&!("errorMessage"in i))return i;{const t=r.ok?i.errorMessage:i.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Xp(e,"credential-already-in-use",i);if("EMAIL_EXISTS"===n)throw Xp(e,"email-already-in-use",i);if("USER_DISABLED"===n)throw Xp(e,"user-disabled",i);const a=s[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw function(e,t,n){const s=Object.assign(Object.assign({},Sp()),{[t]:n});return new Et("auth","Firebase",s).create(t,{appName:e.name})}(e,a,o);_p(e,a)}}catch(t){if(t instanceof It)throw t;_p(e,"network-request-failed",{message:String(t)})}}async function Wp(e,t,n,s,r={}){const i=await zp(e,t,n,s,r);return"mfaPendingCredential"in i&&_p(e,"multi-factor-auth-required",{_serverResponse:i}),i}function Hp(e,t,n,s){const r=`${t}${n}?${s}`;return e.config.emulator?Vp(e.config,r):`${e.config.apiScheme}://${r}`}class Jp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(xp(this.auth,"network-request-failed"))),Qp.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Xp(e,t,n){const s={appName:e.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=xp(e,t,s);return r.customData._tokenResponse=n,r}
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
function Yp(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}function Zp(e){return 1e3*Number(e)}function eg(e){const[t,n,s]=e.split(".");if(void 0===t||void 0===n||void 0===s)return Np("JWT malformed, contained fewer than 3 sections"),null;try{const e=ft(n);return e?JSON.parse(e):(Np("Failed to decode base64 JWT payload"),null)}catch(e){return Np("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
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
async function tg(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof It&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
     */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class ng{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
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
     */class sg{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Yp(this.lastLoginAt),this.creationTime=Yp(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
     */async function rg(e){var t;const n=e.auth,s=await e.getIdToken(),r=await tg(e,async function(e,t){return zp(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:s}));Op(null==r?void 0:r.users.length,n,"internal-error");const i=r.users[0];e._notifyReloadListener(i);const o=(null===(t=i.providerUserInfo)||void 0===t?void 0:t.length)?i.providerUserInfo.map((e=>{var{providerId:t}=e,n=Cp(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,l=o,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const u=e.isAnonymous,h=!(e.email&&i.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new sg(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
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
class ig{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Op(e.idToken,"internal-error"),Op(void 0!==e.idToken,"internal-error"),Op(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=eg(e);return Op(t,"internal-error"),Op(void 0!==t.exp,"internal-error"),Op(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Op(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:r}=
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
     */await async function(e,t){const n=await Kp(e,{},(async()=>{const n=St({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:s,apiKey:r}=e.config,i=Hp(e,s,"/v1/token",`key=${r}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Gp.fetch()(i,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,s,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:r}=t,i=new ig;return n&&(Op("string"==typeof n,"internal-error",{appName:e}),i.refreshToken=n),s&&(Op("string"==typeof s,"internal-error",{appName:e}),i.accessToken=s),r&&(Op("number"==typeof r,"internal-error",{appName:e}),i.expirationTime=r),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ig,this.toJSON())}_performRefresh(){return Lp("not implemented")}}
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
     */function og(e,t){Op("string"==typeof e||void 0===e,"internal-error",{appName:t})}class ag{constructor(e){var{uid:t,auth:n,stsTokenManager:s}=e,r=Cp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ng(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new sg(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await tg(this,this.stsTokenManager.getToken(this.auth,e));return Op(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=xt(e),s=await n.getIdToken(t),r=eg(s);Op(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i="object"==typeof r.firebase?r.firebase:void 0,o=null==i?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Yp(Zp(r.auth_time)),issuedAtTime:Yp(Zp(r.iat)),expirationTime:Yp(Zp(r.exp)),signInProvider:o||null,signInSecondFactor:(null==i?void 0:i.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=xt(e);await rg(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Op(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ag(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Op(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await rg(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await tg(this,async function(e,t){return zp(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,s,r,i,o,a,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(s=t.email)&&void 0!==s?s:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,f=null!==(i=t.photoURL)&&void 0!==i?i:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:A,emailVerified:w,isAnonymous:y,providerData:b,stsTokenManager:I}=t;Op(A&&I,e,"internal-error");const E=ig.fromJSON(this.name,I);Op("string"==typeof A,e,"internal-error"),og(u,e.name),og(h,e.name),Op("boolean"==typeof w,e,"internal-error"),Op("boolean"==typeof y,e,"internal-error"),og(d,e.name),og(f,e.name),og(p,e.name),og(g,e.name),og(m,e.name),og(v,e.name);const T=new ag({uid:A,auth:e,email:h,emailVerified:w,displayName:u,isAnonymous:y,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:m,lastLoginAt:v});return b&&Array.isArray(b)&&(T.providerData=b.map((e=>Object.assign({},e)))),g&&(T._redirectEventId=g),T}static async _fromIdTokenResponse(e,t,n=!1){const s=new ig;s.updateFromServerResponse(t);const r=new ag({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await rg(r),r}}
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
     */const cg=new Map;function lg(e){Mp(e instanceof Function,"Expected a class definition");let t=cg.get(e);return t?(Mp(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,cg.set(e,t),t)}
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
     */class ug{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ug.type="NONE";const hg=ug;
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
     */function dg(e,t,n){return`firebase:${e}:${t}:${n}`}class fg{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:r}=this.auth;this.fullUserKey=dg(this.userKey,s.apiKey,r),this.fullPersistenceKey=dg("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ag._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new fg(lg(hg),e,n);const s=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=s[0]||lg(hg);const i=dg(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(i);if(t){const s=ag._fromJSON(e,t);n!==r&&(o=s),r=n;break}}catch(e){}const a=s.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(i,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(i)}catch(e){}}))),new fg(r,e,n)):new fg(r,e,n)}}
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
     */function pg(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Ag(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(gg(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(yg(t))return"Blackberry";if(bg(t))return"Webos";if(mg(t))return"Safari";if((t.includes("chrome/")||vg(t))&&!t.includes("edge/"))return"Chrome";if(wg(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function gg(e=bt()){return/firefox\//i.test(e)}function mg(e=bt()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function vg(e=bt()){return/crios\//i.test(e)}function Ag(e=bt()){return/iemobile/i.test(e)}function wg(e=bt()){return/android/i.test(e)}function yg(e=bt()){return/blackberry/i.test(e)}function bg(e=bt()){return/webos/i.test(e)}function Ig(e=bt()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Eg(){return function(){const e=bt();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function Tg(e=bt()){return Ig(e)||wg(e)||bg(e)||yg(e)||/windows phone/i.test(e)||Ag(e)}
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
function Cg(e,t=[]){let n;switch(e){case"Browser":n=pg(bt());break;case"Worker":n=`${pg(bt())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${yn}/${s}`}async function kg(e,t){return zp(e,"GET","/v2/recaptchaConfig",qp(e,t))}function Sg(e){return void 0!==e&&void 0!==e.enterprise}class Rg{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
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
     */function Dg(e){return new Promise(((t,n)=>{const s=document.createElement("script");var r,i;s.setAttribute("src",e),s.onload=t,s.onerror=e=>{const t=xp("internal-error");t.customData=e,n(t)},s.type="text/javascript",s.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(s)}))}class Ng{constructor(e){this.type="recaptcha-enterprise",this.auth=Og(e)}async verify(e="verify",t=!1){function n(t,n,s){const r=window.grecaptcha;Sg(r)?r.enterprise.ready((()=>{r.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n("NO_RECAPTCHA")}))})):s(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,s)=>{(async function(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{kg(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((s=>{if(void 0!==s.recaptchaKey){const n=new Rg(s);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))})(this.auth).then((r=>{if(!t&&Sg(window.grecaptcha))n(r,e,s);else{if("undefined"==typeof window)return void s(new Error("RecaptchaVerifier is only supported in browser"));Dg("https://www.google.com/recaptcha/enterprise.js?render="+r).then((()=>{n(r,e,s)})).catch((e=>{s(e)}))}})).catch((e=>{s(e)}))}))}}async function _g(e,t,n,s=!1){const r=new Ng(e);let i;try{i=await r.verify(n)}catch(e){i=await r.verify(n,!0)}const o=Object.assign({},t);return s?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
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
     */class xg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,s)=>{try{n(e(t))}catch(e){s(e)}}));n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
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
     */class Ug{constructor(e,t,n,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lg(this),this.idTokenSubscription=new Lg(this),this.beforeStateQueue=new xg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Rp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=lg(t)),this._initializationPromise=this.queue((async()=>{var n,s;if(!this._deleted&&(this.persistenceManager=await fg.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(s=this.currentUser)||void 0===s?void 0:s.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let s=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null==s?void 0:s._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==i||!(null==o?void 0:o.user)||(s=o.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(e){s=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Op(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await rg(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?xt(e):null;return t&&Op(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Op(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(lg(e))}))}async initializeRecaptchaConfig(){const e=await kg(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Rg(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){new Ng(this).verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Et("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&lg(e)||this._popupRedirectResolver;Op(t,this,"argument-error"),this.redirectPersistenceManager=await fg.create(this,[lg(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const r="function"==typeof t?t:t.next.bind(t),i=this._isInitialized?Promise.resolve():this._initializationPromise;return Op(i,this,"internal-error"),i.then((()=>r(this.currentUser))),"function"==typeof t?e.addObserver(t,n,s):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Op(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Cg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){Dp.logLevel<=Pt.WARN&&Dp.warn(`Auth (${yn}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function Og(e){return xt(e)}class Lg{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new Nt(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return Op(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
     */function Mg(e,t,n){const s=Og(e);Op(s._canInitEmulator,s,"emulator-config-failed"),Op(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const r=!!(null==n?void 0:n.disableWarnings),i=Pg(t),{host:o,port:a}=function(e){const t=Pg(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const e=r[1];return{host:e,port:Fg(s.substr(e.length+1))}}{const[e,t]=s.split(":");return{host:e,port:Fg(t)}}}(t),c=null===a?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
     */()}function Pg(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Fg(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Bg{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Lp("not implemented")}_getIdTokenResponse(e){return Lp("not implemented")}_linkToIdToken(e,t){return Lp("not implemented")}_getReauthenticationResolver(e){return Lp("not implemented")}}
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
async function $g(e,t){return Wp(e,"POST","/v1/accounts:signInWithPassword",qp(e,t))}
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
class Vg extends Bg{constructor(e,t,n,s=null){super("password",n),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Vg(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Vg(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await _g(e,n,"signInWithPassword");return $g(e,t)}return $g(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await _g(e,n,"signInWithPassword");return $g(e,t)}return Promise.reject(t)}));case"emailLink":return async function(e,t){return Wp(e,"POST","/v1/accounts:signInWithEmailLink",qp(e,t))}(e,{email:this._email,oobCode:this._password});default:_p(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return async function(e,t){return zp(e,"POST","/v1/accounts:update",t)}(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Wp(e,"POST","/v1/accounts:signInWithEmailLink",qp(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:_p(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
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
     */async function Gg(e,t){return Wp(e,"POST","/v1/accounts:signInWithIdp",qp(e,t))}
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
     */class jg extends Bg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new jg(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):_p("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:s}=t,r=Cp(t,["providerId","signInMethod"]);if(!n||!s)return null;const i=new jg(n,s);return i.idToken=r.idToken||void 0,i.accessToken=r.accessToken||void 0,i.secret=r.secret,i.nonce=r.nonce,i.pendingToken=r.pendingToken||null,i}_getIdTokenResponse(e){return Gg(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Gg(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Gg(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=St(t)}return e}}
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
     */class Qg{constructor(e){var t,n,s,r,i,o;const a=Rt(Dt(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,l=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(s=a.mode)&&void 0!==s?s:null);Op(c&&l&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=l,this.continueUrl=null!==(r=a.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(i=a.languageCode)&&void 0!==i?i:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=Rt(Dt(e)).link,n=t?Rt(Dt(t)).deep_link_id:null,s=Rt(Dt(e)).deep_link_id;return(s?Rt(Dt(s)).link:null)||s||n||t||e}(e);try{return new Qg(t)}catch(e){return null}}}
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
     */class qg{constructor(){this.providerId=qg.PROVIDER_ID}static credential(e,t){return Vg._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Qg.parseLink(t);return Op(n,"argument-error"),Vg._fromEmailAndCode(e,n.code,n.tenantId)}}qg.PROVIDER_ID="password",qg.EMAIL_PASSWORD_SIGN_IN_METHOD="password",qg.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class zg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
     */class Kg extends zg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
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
     */class Wg extends Kg{constructor(){super("facebook.com")}static credential(e){return jg._fromParams({providerId:Wg.PROVIDER_ID,signInMethod:Wg.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wg.credentialFromTaggedObject(e)}static credentialFromError(e){return Wg.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Wg.credential(e.oauthAccessToken)}catch(e){return null}}}Wg.FACEBOOK_SIGN_IN_METHOD="facebook.com",Wg.PROVIDER_ID="facebook.com";
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
class Hg extends Kg{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return jg._fromParams({providerId:Hg.PROVIDER_ID,signInMethod:Hg.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Hg.credentialFromTaggedObject(e)}static credentialFromError(e){return Hg.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Hg.credential(t,n)}catch(e){return null}}}Hg.GOOGLE_SIGN_IN_METHOD="google.com",Hg.PROVIDER_ID="google.com";
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
class Jg extends Kg{constructor(){super("github.com")}static credential(e){return jg._fromParams({providerId:Jg.PROVIDER_ID,signInMethod:Jg.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jg.credentialFromTaggedObject(e)}static credentialFromError(e){return Jg.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Jg.credential(e.oauthAccessToken)}catch(e){return null}}}Jg.GITHUB_SIGN_IN_METHOD="github.com",Jg.PROVIDER_ID="github.com";
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
class Xg extends Kg{constructor(){super("twitter.com")}static credential(e,t){return jg._fromParams({providerId:Xg.PROVIDER_ID,signInMethod:Xg.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Xg.credentialFromTaggedObject(e)}static credentialFromError(e){return Xg.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Xg.credential(t,n)}catch(e){return null}}}Xg.TWITTER_SIGN_IN_METHOD="twitter.com",Xg.PROVIDER_ID="twitter.com";
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
class Yg{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){const r=await ag._fromIdTokenResponse(e,n,s),i=Zg(n);return new Yg({user:r,providerId:i,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=Zg(n);return new Yg({user:e,providerId:s,_tokenResponse:n,operationType:t})}}function Zg(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
     */class em extends It{constructor(e,t,n,s){var r;super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,em.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new em(e,t,n,s)}}function tm(e,t,n,s){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw em._fromErrorAndOperation(e,n,t,s);throw n}))}
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
async function nm(e,t,n=!1){const s="signIn",r=await tm(e,s,t),i=await Yg._fromIdTokenResponse(e,s,r);return n||await e._updateCurrentUser(i.user),i}function sm(e,t,n){return async function(e,t){return nm(Og(e),t)}(xt(e),qg.credential(t,n))}const rm="__sak";
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
     */class im{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(rm,"1"),this.storage.removeItem(rm),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
     */class om extends im{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=bt();return mg(e)||Ig(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Tg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(n);if(e.newValue!==s)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const s=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);Eg()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,10):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}om.type="LOCAL";const am=om;
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
     */class cm extends im{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}cm.type="SESSION";const lm=cm;
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
class um{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new um(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:r}=t.data,i=this.handlersMap[s];if(!(null==i?void 0:i.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const o=Array.from(i).map((async e=>e(t.origin,r))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function hm(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
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
     */um.receivers=[];class dm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,i;return new Promise(((o,a)=>{const c=hm("",20);s.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);i={messageChannel:s,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(t.data.response);break;default:clearTimeout(l),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(i),s.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])})).finally((()=>{i&&this.removeMessageHandler(i)}))}}
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
     */function fm(){return window}
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
function pm(){return void 0!==fm().WorkerGlobalScope&&"function"==typeof fm().importScripts}
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
const gm="firebaseLocalStorageDb",mm="firebaseLocalStorage",vm="fbase_key";class Am{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function wm(e,t){return e.transaction([mm],t?"readwrite":"readonly").objectStore(mm)}function ym(){const e=indexedDB.open(gm,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(mm,{keyPath:vm})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(mm)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(gm);return new Am(e).toPromise()}(),t(await ym()))}))}))}async function bm(e,t,n){const s=wm(e,!0).put({[vm]:t,value:n});return new Am(s).toPromise()}function Im(e,t){const n=wm(e,!0).delete(t);return new Am(n).toPromise()}class Em{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await ym()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return pm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=um._getInstance(pm()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new dm(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ym();return await bm(e,rm,"1"),await Im(e,rm),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>bm(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=wm(e,!1).get(t),s=await new Am(n).toPromise();return void 0===s?null:s.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Im(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=wm(e,!1).getAll();return new Am(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:s,value:r}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Em.type="LOCAL";const Tm=Em;new $p(3e4,6e4);
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
class Cm extends Bg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gg(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Gg(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Gg(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function km(e){return nm(e.auth,new Cm(e),e.bypassAuthState)}function Sm(e){const{auth:t,user:n}=e;return Op(n,t,"internal-error"),
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
async function(e,t,n=!1){const{auth:s}=e,r="reauthenticate";try{const i=await tg(e,tm(s,r,t,e),n);Op(i.idToken,s,"internal-error");const o=eg(i.idToken);Op(o,s,"internal-error");const{sub:a}=o;return Op(e.uid===a,s,"user-mismatch"),Yg._forOperation(e,r,i)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&_p(s,"user-mismatch"),e}}(n,new Cm(e),e.bypassAuthState)}async function Rm(e){const{auth:t,user:n}=e;return Op(n,t,"internal-error"),async function(e,t,n=!1){const s=await tg(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Yg._forOperation(e,"link",s)}(n,new Cm(e),e.bypassAuthState)}
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
     */class Dm{constructor(e,t,n,s,r=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:s,tenantId:r,error:i,type:o}=e;if(i)return void this.reject(i);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return km;case"linkViaPopup":case"linkViaRedirect":return Rm;case"reauthViaPopup":case"reauthViaRedirect":return Sm;default:_p(this.auth,"internal-error")}}resolve(e){Mp(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mp(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
     */const Nm=new $p(2e3,1e4);class _m extends Dm{constructor(e,t,n,s,r){super(e,t,s,r),this.provider=n,this.authWindow=null,this.pollId=null,_m.currentPopupAction&&_m.currentPopupAction.cancel(),_m.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Op(e,this.auth,"internal-error"),e}async onExecution(){Mp(1===this.filter.length,"Popup operations only handle one event");const e=hm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(xp(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(xp(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_m.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(xp(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,Nm.get())};e()}}_m.currentPopupAction=null;
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
const xm="pendingRedirect",Um=new Map;class Om extends Dm{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Um.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return dg(xm,e.config.apiKey,e.name)}(t),s=function(e){return lg(e._redirectPersistence)}(e);if(!await s._isAvailable())return!1;const r="true"===await s._get(n);return await s._remove(n),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Um.set(this.auth._key(),e)}return this.bypassAuthState||Um.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Lm(e,t){Um.set(e._key(),t)}async function Mm(e,t,n=!1){const s=Og(e),r=
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
function(e,t){return t?lg(t):(Op(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}(s,t),i=new Om(s,r,n),o=await i.execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,t)),o}
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
     */class Pm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bm(e);default:return!1}}
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
     */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Bm(e)){const s=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(xp(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fm(e))}saveEventToCache(e){this.cachedEventUids.add(Fm(e)),this.lastProcessedEventTime=Date.now()}}function Fm(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Bm({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
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
const $m=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Vm=/^https?/;async function Gm(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return zp(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(jm(e))return}catch(e){}_p(e,"unauthorized-domain")}function jm(e){const t=Pp(),{protocol:n,hostname:s}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===s?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===s}if(!Vm.test(n))return!1;if($m.test(e))return s===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}
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
     */const Qm=new $p(3e4,6e4);function qm(){const e=fm().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}function zm(e){return new Promise(((t,n)=>{var s,r,i;function o(){qm(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{qm(),n(xp(e,"network-request-failed"))},timeout:Qm.get()})}if(null===(r=null===(s=fm().gapi)||void 0===s?void 0:s.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(i=fm().gapi)||void 0===i?void 0:i.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return fm()[t]=()=>{gapi.load?o():n(xp(e,"network-request-failed"))},Dg(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Km=null,e}))}let Km=null;
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
const Wm=new $p(5e3,15e3),Hm="__/auth/iframe",Jm="emulator/auth/iframe",Xm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ym=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Zm(e){const t=e.config;Op(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Vp(t,Jm):`https://${e.config.authDomain}/${Hm}`,s={apiKey:t.apiKey,appName:e.name,v:yn},r=Ym.get(e.config.apiHost);r&&(s.eid=r);const i=e._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${St(s).slice(1)}`}async function ev(e){const t=await function(e){return Km=Km||zm(e),Km}(e),n=fm().gapi;return Op(n,e,"internal-error"),t.open({where:document.body,url:Zm(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Xm,dontclear:!0},(t=>new Promise((async(n,s)=>{await t.restyle({setHideOnLeave:!1});const r=xp(e,"network-request-failed"),i=fm().setTimeout((()=>{s(r)}),Wm.get());function o(){fm().clearTimeout(i),n(t)}t.ping(o).then(o,(()=>{s(r)}))}))))}
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
     */const tv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class nv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function sv(e,t,n,s=500,r=600){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},tv),{width:s.toString(),height:r.toString(),top:i,left:o}),l=bt().toLowerCase();n&&(a=vg(l)?"_blank":n),gg(l)&&(t=t||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=bt()){var t;return Ig(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}
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
     */(t||"",a),new nv(null);const h=window.open(t||"",a,u);Op(h,e,"popup-blocked");try{h.focus()}catch(e){}return new nv(h)}const rv="__/auth/handler",iv="emulator/auth/handler",ov=encodeURIComponent("fac");async function av(e,t,n,s,r,i){Op(e.config.authDomain,e,"auth-domain-config-required"),Op(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:yn,eventId:r};if(t instanceof zg){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(i||{}))o[e]=t}if(t instanceof Kg){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];const c=await e._getAppCheckToken(),l=c?`#${ov}=${encodeURIComponent(c)}`:"";return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${rv}`;return Vp(e,iv)}
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
     */(e)}?${St(a).slice(1)}${l}`}const cv="webStorageSupport";const lv=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=lm,this._completeRedirectFn=Mm,this._overrideRedirectResult=Lm}async _openPopup(e,t,n,s){var r;Mp(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return sv(e,await av(e,t,n,Pp(),s),hm())}async _openRedirect(e,t,n,s){await this._originValidation(e);return function(e){fm().location.href=e}(await av(e,t,n,Pp(),s)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Mp(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await ev(e),n=new Pm(e);return t.register("authEvent",(t=>{Op(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(cv,{type:cv},(n=>{var s;const r=null===(s=null==n?void 0:n[0])||void 0===s?void 0:s[cv];void 0!==r&&t(!!r),_p(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Gm(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Tg()||mg()||Ig()}};var uv="@firebase/auth",hv="0.23.2";
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
class dv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Op(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
const fv=wt("authIdTokenMaxAge")||300;let pv=null;const gv=e=>async t=>{const n=t&&await t.getIdTokenResult(),s=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>fv)return;const r=null==n?void 0:n.token;pv!==r&&(pv=r,await fetch(e,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function mv(e=In()){const t=vn(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=vn(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(Ct(n.getOptions(),null!=t?t:{}))return e;_p(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:lv,persistence:[Tm,am,lm]}),s=wt("authTokenSyncURL");if(s){const e=gv(s);!function(e,t,n){xt(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,s){xt(e).onIdTokenChanged(t,n,s)}(n,(t=>e(t)))}const r=mt("auth");return r&&Mg(n,`http://${r}`),n}var vv;vv="Browser",mn(new Ut("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:i,authDomain:o}=n.options;Op(i&&!i.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:i,authDomain:o,clientPlatform:vv,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Cg(vv)},c=new Ug(n,s,r,a);return function(e,t){const n=(null==t?void 0:t.persistence)||[],s=(Array.isArray(n)?n:[n]).map(lg);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(s,null==t?void 0:t.popupRedirectResolver)}(c,t),c}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),mn(new Ut("auth-internal",(e=>(e=>new dv(e))(Og(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),En(uv,hv,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(vv)),En(uv,hv,"esm2017");var Av="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAASVJREFUaEPtluEKwjAQg29vpk+mPtl8M+VghVLWrXdJkWEG/rIX8yW34mIXf5aL+zcB/LpBNaAGwAS0QmCA8LgagCMEBdQAGCA8rgbgCEGBv23gZmb+eYIBlvG0XqYBN/2ojN/N7J0EceNrNes6rjf8ZAA+O+oZiNZ8kQ15Ch3efmEPwL+KQPTMu07IU+jwBtCuUF3ICMSR+Vf0vcoAuOEsBNV8uK5m96MQdPMoQKSJKeYZACMQfqa+Kusiwzvf3oDZd6DVOVqn3p0Om2c1UAxGICjm2QBn61RAaeZnAJxBUM3PAuhB0M3PBGghppifDTD8jxI5yLpGEQ/QrACg+AjDaoAQIiShBqD4CMNqgBAiJKEGoPgIw2qAECIkoQag+AjDl2/gC97XKzHBcgJGAAAAAElFTkSuQmCC",wv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAARVJREFUaEPtmFEOgzAMQ8PNdrNtJ9tutinSkNBE10yxXUVK/xA09bMDBTYrPrbi+q0BVifYCXQCSQe6hZIGpqd3AmkLkwWQCVzM7JnU8/d0FMDNzK6f1e9m5seSgQBw5x9famUQCICj+0cOCQQCwEW/Bv1Ch0ABnLXRzkSFQAG42CUQSIAlEGgAOQQDQArBApBBMAEkEGyAGUR6/XSBwAvPaKf2qen10wUmAL/EQzY4JgBdPCTCQQIS8SwAmXgGgFQ8GkAuHgmwRDwSoPQHzeg7APKcn22UiH3grH0k4pEt5H8lPAkfMvFIgP2lreyPrVmr0s4j7gGauEjhBoi4xLymE2C6G6ndCURcYl7TCTDdjdQun8Ab5NQwMS0C6XAAAAAASUVORK5CYII=";const yv=e=>({}),bv=e=>({});function Iv(e,t,n){const s=e.slice();return s[9]=t[n],s}function Ev(e){let t,n=e[2],s=[];for(let t=0;t<n.length;t+=1)s[t]=Tv(Iv(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=C()},m(e,n){for(let t=0;t<s.length;t+=1)s[t]&&s[t].m(e,n);w(e,t,n)},p(e,r){if(4&r){let i;for(n=e[2],i=0;i<n.length;i+=1){const o=Iv(e,n,i);s[i]?s[i].p(o,r):(s[i]=Tv(o),s[i].c(),s[i].m(t.parentNode,t))}for(;i<s.length;i+=1)s[i].d(1);s.length=n.length}},d(e){b(s,e),e&&y(t)}}}function Tv(e){let t,n,s,r,o;return{c(){t=I("img"),S(t,"class","action svelte-1g4mcwn"),c(t.src,n=e[9].icon)||S(t,"src",n),S(t,"alt",s=e[9].title)},m(n,s){w(n,t,s),r||(o=k(t,"mousedown",(function(){i(e[9].onClick)&&e[9].onClick.apply(this,arguments)})),r=!0)},p(r,i){e=r,4&i&&!c(t.src,n=e[9].icon)&&S(t,"src",n),4&i&&s!==(s=e[9].title)&&S(t,"alt",s)},d(e){e&&y(t),r=!1,o()}}}function Cv(e){let t,n;const s=e[5].main,r=function(e,t,n,s){if(e){const r=l(e,t,n,s);return e[0](r)}}(s,e,e[4],bv);return{c(){t=I("div"),r&&r.c(),S(t,"class","main-container svelte-1g4mcwn")},m(e,s){w(e,t,s),r&&r.m(t,null),n=!0},p(e,t){r&&r.p&&(!n||16&t)&&function(e,t,n,s,r,i){if(r){const o=l(t,n,s,i);e.p(o,r)}}(r,s,e,e[4],n?function(e,t,n,s){if(e[2]&&s){const r=e[2](s(n));if(void 0===t.dirty)return r;if("object"==typeof r){const e=[],n=Math.max(t.dirty.length,r.length);for(let s=0;s<n;s+=1)e[s]=t.dirty[s]|r[s];return e}return t.dirty|r}return t.dirty}(s,e[4],t,yv):function(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}(e[4]),bv)},i(e){n||(ae(r,e),n=!0)},o(e){ce(r,e),n=!1},d(e){e&&y(t),r&&r.d(e)}}}function kv(e){let t,n,s,i,o,a,l,u,h,d,f,p,g,v=e[3]&&Ev(e),A=e[0]&&Cv(e);return{c(){t=I("div"),n=I("div"),s=I("img"),o=T(),a=I("div"),l=E(e[1]),u=T(),v&&v.c(),h=T(),A&&A.c(),S(s,"class","arrow-icon svelte-1g4mcwn"),c(s.src,i=e[0]?Av:wv)||S(s,"src",i),S(s,"alt",""),S(a,"class","title svelte-1g4mcwn"),S(n,"class","heading svelte-1g4mcwn"),S(t,"class",d="section-container"+(e[0]?" expanded":"")+" svelte-1g4mcwn")},m(r,i){w(r,t,i),m(t,n),m(n,s),m(n,o),m(n,a),m(a,l),m(n,u),v&&v.m(n,null),m(t,h),A&&A.m(t,null),f=!0,p||(g=[k(n,"mousedown",e[6]),k(t,"mouseenter",e[7]),k(t,"mouseleave",e[8])],p=!0)},p(e,[r]){(!f||1&r&&!c(s.src,i=e[0]?Av:wv))&&S(s,"src",i),(!f||2&r)&&R(l,e[1]),e[3]?v?v.p(e,r):(v=Ev(e),v.c(),v.m(n,null)):v&&(v.d(1),v=null),e[0]?A?(A.p(e,r),1&r&&ae(A,1)):(A=Cv(e),A.c(),ae(A,1),A.m(t,null)):A&&(ie(),ce(A,1,1,(()=>{A=null})),oe()),(!f||1&r&&d!==(d="section-container"+(e[0]?" expanded":"")+" svelte-1g4mcwn"))&&S(t,"class",d)},i(e){f||(ae(A),f=!0)},o(e){ce(A),f=!1},d(e){e&&y(t),v&&v.d(),A&&A.d(),p=!1,r(g)}}}function Sv(e,t,n){let s,{$$slots:r={},$$scope:i}=t,{expanded:o=!1}=t,{title:a}=t,{headingActions:c=[]}=t;return e.$$set=e=>{"expanded"in e&&n(0,o=e.expanded),"title"in e&&n(1,a=e.title),"headingActions"in e&&n(2,c=e.headingActions),"$$scope"in e&&n(4,i=e.$$scope)},[o,a,c,s,i,r,()=>n(0,o=!o),()=>n(3,s=!0),()=>n(3,s=!1)]}class Rv extends ye{constructor(e){super(),we(this,e,Sv,kv,o,{expanded:0,title:1,headingActions:2})}}var Dv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAASVJREFUaEPtmDsSQTEUhj87YxkalRqtCp2SUWtUdsHSTEjMMNfIOUmGO/OnSpHH/zq5NxnQ8zboOX5E4NcOehy4AMNGwDfA2rK2CFjUyhgrBzJEYgXP0yv0a7SgfGrNayBtFAo5FHSN5qnF+77uifEkEoFon1tI90Q58Fo5biHdE+WAHHgooAjV+IqVCCkH5EBhLSpCfY5Q+G+vdR8YA2ePGN4I1QSfcE+Bo5WEh0AL8An3DDhYSFgJtASfcC+BbS4JC4GaV8hv+EbA9dsg67+QCOQoGsfIgS6xeh8hQwLuj7/vTy7ZsbBsZDmFLOuKQK5acuCDUoqQIpSrgCJUqJROIUXoTyMUYO2AecS3BxaFWDunt6qBtNkpdiYtwFtvZK0wFK17A16SRjFoqFx8AAAAAElFTkSuQmCC",Nv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAV9JREFUaEPtmT9OAkEUxn9U3kKN2mppIpUGriCew9ZGjAln4AgKZzDY0VtYGDTx7x3syCsWN5MZsjNkd8B8k9CQ9/Z935sfs8u+Fhu+WhuuHxnIvYNVdmAb2Msk9AP4Bn5D9ZcZOAcugZNM4ouyP8AtMPTpCBm4AO4yC3fLd4EH90ufgS3gOSM2ob69AEcuTj4D+8BszbpfyDkAXsvafAZOgYlj4CaToWun7hnwmGqg37AJqycDRdMNIe1AJIJCqNwwIRSJj4ULISGUgE05RQgJISGkh7k/BnQnTvg96BjVMZqAje7E1oHQWwn9pYxESqeQTqFIZNxwIfTvEFqRiKT0pHejNlJ6TypXf9IOYGOnxQpNaJ6Aw/r1RFWYAm03I2TA5mOjqMvXH9wDxlUNWNwxMAA69WtbWuENuALufVFVxqy7gH1yrE/gK3XMmkNwdM0qOxB90SYTZKDJbvtqzQG35Y8xbLf2ywAAAABJRU5ErkJggg==",_v="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAntJREFUaEPtmc9LVUEUxz9vEboQCluIBCUlhogthIQkoSjoB9hCSC2I/oIWbgOhEIL2LlpEizZm2qIftAgyEcFFC0EhUFTQMmjRwkWLFkEcOU+uw9x35703984V7sCDx51553y+58y8mXOnxCFvpUPOTyEgdAZdMnASOB0IdBvYAf7G+a8k4DYwClwIBF92+xMYB57ZOOIEDAOvAoOb7q8Cn82HNgENwLeA0yYubmvAOXM62QScAdZzFv0yTjuwEWWzCbgEfMmpgMvAXCEgYHaKDAQM/p7rIgNpZOA5MAg0OxjPVQZWgPvAkoK/BO4liMiNAIG+A6xGgFsBOfdUarkQ8FXhD+yowAgwmXcBiwq/ZYB2AtNAV54FzAN39Xwf5exQeDmoJbVgU2hW4X8ZhFIoSeR7ksi135uABWAMWAZu6PezMRCfFP630S+V3gxw3hHe60Y2AHyIOJYIvgNOGDAfFX7XeC7jJPLVVnveMiDR+25A9QPvgaP6XATJnP9jjGvRyF+sIvLlod4ETAAPLADXNTNvFd4sxo8rvNQctTRvAsT5Y+CRhUKOBSLgn9F3TOGv1ELuexGXGeJEmIxNCn+tDnivizjKkSSiEXgD3KwTPjUBlabTEY38LQ/wqQqwiZAXBvI/L2vCV/O6iG1QL4CnQB8gb/Z8TJuon9QF+Ip0nJ1CQNoRTrJfZCApQmn3FxlIO8JJ9p0yIEdls2ZNMpxV/ylArp32W9wNjVRa3VlROfqRFwKyQR5ocQJkF33taDirYUNaxTkJkEG9wBOgnvO7D3GbwENgymbM5Zq1DZBPiCZl649ar1lDAFft0yUDVRvN8geFgCyjbfP1H1jrizENZqZUAAAAAElFTkSuQmCC",xv="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABcJJREFUaEPVmVXIbUUUx3/XLlSwsAURMVEfLOwuTBQLjAcbO/HBwu5WBBUbCwMLQcVWjAcLxFbEBBsb+X3MXNY338w++9x77r3eBQfO2bNm7fWfNSvPJGZymjST68+0ADAvsED4eEY/hs+vozy0UQCYB9gU2A7YHVhkgILfAvcAjwJPA79NDaCpAbAqcDiwWw+lWzoK5j7gauDtKQEyJQCWAY5Iynv6oyCtIIirgM+GETgsgEOA04HFhnnJELxfJ/nX9d0zDIBrAQF00e/A7MCsickrMjcwX/r9KrB2D+UEcGgPvt5R6DFgmw6BzyWnVPkzA5/OLQAdNtNewGrATsAqHTIfB7YdBKKPBa7pOI17gYuAV9LJfwfMn156FHBF+n4OcEr6/iawQYo+OwLHARs1FNXqh3WBGATAK6OQkj4FzgZuCAvHAhen37cA+xWbngU2TM/OSHc9swhWIEtX3uVVavpEF4B9gNsqAt8B9gDeDWs69RvAEunZVsCTxd5NUtz3sVFHK2iNTCsDdzeu1b7A7TVLtAAsDrwWFMp7a8q75gleFq7IWg2zPwzskNaMZloiUguEwWA94MNSbguAwk8rmI3POlU8+cziaW/RuB5RTLyS+s26FaCCMGiYbyLpiybOcVQD0Dp9X3595YVGnj/Dc6/GCw0LeMU+SJFJFh3+5wrvwY17b1R7JvLXANRO/0Fg54ZS+wM3pbW3gNUbfPmx99yaSTqoCARx6wMp1MZnD5XPagBeBtYJuzzdrTuUOjVcH/1AsF20FHBrYngKOKuD+QlgjmJ92VhulABWatzxATpN12XzwuTQXgI4Hrhwuqoz/MseCZFsQilhfW68zmRmtUrsohytjEQv9tRnfWDLxFuG0lKECS7XUnlt8sGXFjBCLB8kGE2MKi2yF7CckO4CrHP60J3AnolxQmQpBJQ6uWzH95NfSgBWk3MGAVcCR3ZodCJwflrXgY/poz1wKXB0TwAeohaLZMnxRQnAVvCbgrGsWUr9YsgdxBv3xn22oiauFt0P7FIsWsWOJdRoAdP/6zMAgBbW0i2K1so8WuSlEsCaqSCLggad6igs4LXLdVQNxCWVq2ldZL4aZ4GFAKPO9Abg9TDrtihm7sxjvfReCcDfvwDOdTJZ35sbWhTzxrRyYkOzJx5pSeDLGgAdw2ycycLJMNciaxpPSLoDsIfoQ9b2eyfGQWH0Y2C5Qqh5YWxAVobR0lxWiqVjlwrmxDeuSuyBou8+HTbWQ/YGi2b5JYB4oj10mCEs4/qCEsDCgAj/z2RHZz00RrVy2nLYaUGkLj8wozoikYznJp4uiuW07+oKodZmkTxc/WHyPLUGoNYNdTmzvYIzHMm6ZYUBAKydrKEkZ03W/DUqC0t5Jgy8agCshZwWxGjk5lZScwr3d9CgqzSwGfkImCXxzwb8U9G+1hV66jZa44bArab+BOCCiuBW0olhsasAtGy4PMlthd1WILFPsXgcRy0AFnbOebyvkX5I/uEoMVK8dl3XyBYy+1NtSNBS3qGvM9UJk+uuwdYBwI0VK3wC7FoMpcyMAs7x2QFA2RurgKMU6fOk0FdBflcIPzAMDnpZIDPV7qJr9g2WGc5FtYp0LnBy+m7y2zhny/QsRjfnpOel5wumGVTuD8oz6ywoB81GFdYC4ZoFlXfeEeQfwPeh/dOHTkraRJ96H1gxPddStqRrVCzto0HVcO/xemvIm99rd2RL+VeYQrvmtE5g9stzJWZ9YLM0Z3LM3qLOoW7e1McCmbdvmfFvCJPPJwCbJyHmkzg0aCnv8Ng/AgfSMAAUJggbjDI6DXxRTwYt6Zi+l/LKHBaAewyxjhONUmWy66nnBDZ9yfHkzcPWYlMCIL/djC0Q66CBfwU1kNnMG51UXF8ZmqYGQHyZ8X/79LHdczQeOzt5bUBMRDZNVpN+yinIDANQe7E9dp7xq7ghduQ0KguMXLG+Amd6AP8BGrcmQBeLyHIAAAAASUVORK5CYII=";function Uv(t){let n,s,r,i,o;return{c(){n=I("div"),s=I("div"),r=E(t[0]),S(s,"class","title svelte-eray5u"),S(n,"class","menu-item svelte-eray5u")},m(e,a){w(e,n,a),m(n,s),m(s,r),i||(o=k(n,"mouseup",t[1]),i=!0)},p(e,[t]){1&t&&R(r,e[0])},i:e,o:e,d(e){e&&y(n),i=!1,o()}}}function Ov(e,t,n){let{title:s}=t;return e.$$set=e=>{"title"in e&&n(0,s=e.title)},[s,function(t){V.call(this,e,t)}]}class Lv extends ye{constructor(e){super(),we(this,e,Ov,Uv,o,{title:0})}}function Mv(t){let n,s;return n=new Lv({props:{title:"Move Group to New Window"}}),n.$on("mousedown",t[6]),{c(){ge(n.$$.fragment)},m(e,t){me(n,e,t),s=!0},p:e,i(e){s||(ae(n.$$.fragment,e),s=!0)},o(e){ce(n.$$.fragment,e),s=!1},d(e){ve(n,e)}}}function Pv(t){let n,s;return n=new Lv({props:{title:"Close Group"}}),n.$on("mousedown",t[4]),{c(){ge(n.$$.fragment)},m(e,t){me(n,e,t),s=!0},p:e,i(e){s||(ae(n.$$.fragment,e),s=!0)},o(e){ce(n.$$.fragment,e),s=!1},d(e){ve(n,e)}}}function Fv(e){let t,n,s,i,o,a,l,u,h,d,f,p,g,v,A,b,E,C,R,_,x,U,O,L,M,P,F,B,$,V,G;d=new Lv({props:{title:e[0].pinned?"Unpin Tab":"Pin Tab"}}),d.$on("mouseup",e[8]),p=new Lv({props:{title:"Reload"}}),p.$on("mouseup",e[7]),v=new Lv({props:{title:"Duplicate"}}),v.$on("mouseup",e[11]),C=new Lv({props:{title:"Move Tab to Pop Up Window"}}),C.$on("mouseup",e[3]),_=new Lv({props:{title:"Move Tab to New Window"}}),_.$on("mouseup",e[2]);let j=e[0].groupId>-1&&Mv(e);M=new Lv({props:{title:"Close Tab"}}),M.$on("mousedown",e[5]);let Q=e[0].groupId>-1&&Pv(e);return{c(){t=I("div"),n=I("div"),s=I("img"),o=T(),a=I("input"),l=T(),u=I("div"),h=T(),ge(d.$$.fragment),f=T(),ge(p.$$.fragment),g=T(),ge(v.$$.fragment),A=T(),b=I("div"),E=T(),ge(C.$$.fragment),R=T(),ge(_.$$.fragment),x=T(),j&&j.c(),U=T(),O=I("div"),L=T(),ge(M.$$.fragment),P=T(),Q&&Q.c(),c(s.src,i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAcBJREFUaEPtmr8uBUEUxn+34hGEggJPQCLREBWReASRkGhE3BfAC9AIEgqt1r+oUNGodBSi8ecJRCkn2U1WzO7embN3r5Ez7e755nznfHNmds42iHw0IvcfDYENoB8YaEMQPoFH4Ao4K8IPJfAK9LbBcRfkJiDBco4QAlvAWk3Op9OMAveuOX0J9ADvNTsv0+0AK1UQGAPuOkDgEpiugsAEcN0BAjfApBEALAOB8guSkERbDLMjigzMANvAMPCU1PyLhEUUBA6AxUzYD4GlmAhImZRIpyOrvygyYAQCK02RmVcVsgxYBn5HwCSUngStjAauD5OQSShQOq7jzA8o10e9bWTKaLvMbRHbIlbKyiRkEvorEhpKbiqU/nibHwELrV4tFm1kXcBzjb2B1OfcHoHvTiyAy8CedwzDDd6AvjzzEAKCNQXsJpdf4a6VW8oFW7PotVACgtmd9Mek6VH1+AJegI8yYA2BMuxanv9LAueAXPBmz+LtiOYxsK8FdmWgzi7kHHCiIeEiMAucakA9bHMPaa1i5LVZpbG83iqI4r1x4FZhX/irwQgwDwwmJVMzj8t2FXjQgvo2urXzVW4fPYFv6fKUMS3vSekAAAAASUVORK5CYII=")||S(s,"src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAcBJREFUaEPtmr8uBUEUxn+34hGEggJPQCLREBWReASRkGhE3BfAC9AIEgqt1r+oUNGodBSi8ecJRCkn2U1WzO7embN3r5Ez7e755nznfHNmds42iHw0IvcfDYENoB8YaEMQPoFH4Ao4K8IPJfAK9LbBcRfkJiDBco4QAlvAWk3Op9OMAveuOX0J9ADvNTsv0+0AK1UQGAPuOkDgEpiugsAEcN0BAjfApBEALAOB8guSkERbDLMjigzMANvAMPCU1PyLhEUUBA6AxUzYD4GlmAhImZRIpyOrvygyYAQCK02RmVcVsgxYBn5HwCSUngStjAauD5OQSShQOq7jzA8o10e9bWTKaLvMbRHbIlbKyiRkEvorEhpKbiqU/nibHwELrV4tFm1kXcBzjb2B1OfcHoHvTiyAy8CedwzDDd6AvjzzEAKCNQXsJpdf4a6VW8oFW7PotVACgtmd9Mek6VH1+AJegI8yYA2BMuxanv9LAueAXPBmz+LtiOYxsK8FdmWgzi7kHHCiIeEiMAucakA9bHMPaa1i5LVZpbG83iqI4r1x4FZhX/irwQgwDwwmJVMzj8t2FXjQgvo2urXzVW4fPYFv6fKUMS3vSekAAAAASUVORK5CYII="),N(s,"opacity",e[1]?"1":".8"),S(s,"alt","Copy Link"),S(s,"class","svelte-1e9c6xn"),S(a,"type","text"),S(a,"class","svelte-1e9c6xn"),S(n,"class","url-field svelte-1e9c6xn"),S(u,"class","divider svelte-1e9c6xn"),S(b,"class","divider svelte-1e9c6xn"),S(O,"class","divider svelte-1e9c6xn"),S(t,"class","context-menu svelte-1e9c6xn")},m(r,i){w(r,t,i),m(t,n),m(n,s),m(n,o),m(n,a),D(a,e[0].url),m(t,l),m(t,u),m(t,h),me(d,t,null),m(t,f),me(p,t,null),m(t,g),me(v,t,null),m(t,A),m(t,b),m(t,E),me(C,t,null),m(t,R),me(_,t,null),m(t,x),j&&j.m(t,null),m(t,U),m(t,O),m(t,L),me(M,t,null),m(t,P),Q&&Q.m(t,null),$=!0,V||(G=[k(s,"mousedown",e[9]),k(a,"input",e[14]),k(a,"keydown",e[10])],V=!0)},p(e,[n]){(!$||2&n)&&N(s,"opacity",e[1]?"1":".8"),1&n&&a.value!==e[0].url&&D(a,e[0].url);const r={};1&n&&(r.title=e[0].pinned?"Unpin Tab":"Pin Tab"),d.$set(r),e[0].groupId>-1?j?(j.p(e,n),1&n&&ae(j,1)):(j=Mv(e),j.c(),ae(j,1),j.m(t,U)):j&&(ie(),ce(j,1,1,(()=>{j=null})),oe()),e[0].groupId>-1?Q?(Q.p(e,n),1&n&&ae(Q,1)):(Q=Pv(e),Q.c(),ae(Q,1),Q.m(t,null)):Q&&(ie(),ce(Q,1,1,(()=>{Q=null})),oe())},i(e){$||(ae(d.$$.fragment,e),ae(p.$$.fragment,e),ae(v.$$.fragment,e),ae(C.$$.fragment,e),ae(_.$$.fragment,e),ae(j),ae(M.$$.fragment,e),ae(Q),W((()=>{$&&(B&&B.end(1),F=ue(t,Be,{}),F.start())})),$=!0)},o(e){ce(d.$$.fragment,e),ce(p.$$.fragment,e),ce(v.$$.fragment,e),ce(C.$$.fragment,e),ce(_.$$.fragment,e),ce(j),ce(M.$$.fragment,e),ce(Q),F&&F.invalidate(),B=he(t,Be,{}),$=!1},d(e){e&&y(t),ve(d),ve(p),ve(v),ve(C),ve(_),j&&j.d(),ve(M),Q&&Q.d(),e&&B&&B.end(),V=!1,r(G)}}}function Bv(e,t,n){let s=$(),{user:r}=t,{tab:i}=t,{workspace:o}=t;let a;return e.$$set=e=>{"user"in e&&n(12,r=e.user),"tab"in e&&n(0,i=e.tab),"workspace"in e&&n(13,o=e.workspace)},[i,a,async()=>{await chrome.windows.create({tabId:i.id,focused:!0})},async()=>{chrome.windows.create({tabId:i.id,type:"popup",focused:!0})},async()=>{chrome.tabs.remove((await chrome.tabs.query({groupId:i.groupId})).map((e=>e.id)))},()=>{chrome.tabs.remove(i.id)},async()=>{const e=await chrome.windows.create();await chrome.tabGroups.move({windowId:e.id});const t=await chrome.tabs.query({windowId:e,url:"chrome://newtab/"});t&&await chrome.tabs.remove(t.id)},()=>{chrome.tabs.reload(i.id)},()=>{-1==i.groupId?chrome.tabs.update(i.id,{pinned:!i.pinned}):s("pinTab",i)},()=>{navigator.clipboard.writeText(i.url),n(1,a=!0)},e=>{"Enter"==e.key&&chrome.tabs.update(i.id,{url:"https://"+i.url})},()=>{chrome.tabs.create({url:i.url,index:i.index+1})},r,o,function(){i.url=this.value,n(0,i)}]}class $v extends ye{constructor(e){super(),we(this,e,Bv,Fv,o,{user:12,tab:0,workspace:13})}}function Vv(t){let n;return{c(){n=I("div"),S(n,"class","bookmark-menu")},m(e,t){w(e,n,t)},p:e,i:e,o:e,d(e){e&&y(n)}}}function Gv(e,t,n){let{tab:s}=t;return e.$$set=e=>{"tab"in e&&n(0,s=e.tab)},[s]}class jv extends ye{constructor(e){super(),we(this,e,Gv,Vv,o,{tab:0})}}function Qv(e){let t,n,s,i,o,a,c,l,u,h,d,f,p,g,v,A,b,C,D=e[1].title+"";function N(e,t){return e[8]?Kv:e[12]?zv:qv}let _=N(e),x=_(e),U=e[2]&&Wv(e),O=!e[8]&&!e[14]&&e[4]&&Hv(e);const L=[eA,Zv],M=[];function P(e,t){return e[13]?0:e[30]?1:-1}return~(f=P(e))&&(p=M[f]=L[f](e)),{c(){t=I("div"),n=I("div"),s=I("div"),x.c(),i=T(),U&&U.c(),o=T(),a=I("div"),c=E(D),l=T(),u=I("div"),h=T(),O&&O.c(),d=T(),p&&p.c(),S(s,"class","favicon-container svelte-mnihx5"),S(a,"class","title svelte-mnihx5"),S(u,"class","spacer svelte-mnihx5"),S(n,"class","main-container svelte-mnihx5"),S(t,"class",g="tab"+(e[8]?" selected":"")+(e[11]?" focused":"")+(e[15]?" dragged-over":"")+(e[1].active?" active":"")+(e[2]?" grouped":"")+" "+(e[5]?" start-tab":"")+" "+(e[6]?" end-tab":"")+" svelte-mnihx5"),S(t,"draggable",v=e[13]?"false":"true")},m(r,p){w(r,t,p),m(t,n),m(n,s),x.m(s,null),m(s,i),U&&U.m(s,null),m(n,o),m(n,a),m(a,c),m(n,l),m(n,u),m(n,h),O&&O.m(n,null),m(t,d),~f&&M[f].m(t,null),e[38](t),A=!0,b||(C=[k(s,"mouseleave",e[20]),k(s,"mouseenter",e[19]),k(a,"mousedown",e[29]),k(u,"mousedown",e[29]),k(t,"mouseenter",e[17]),k(t,"mouseleave",e[18]),k(t,"dragstart",e[24]),k(t,"dragover",e[25]),k(t,"dragleave",e[26]),k(t,"dragend",e[27]),k(t,"drop",e[28])],b=!0)},p(e,r){_===(_=N(e))&&x?x.p(e,r):(x.d(1),x=_(e),x&&(x.c(),x.m(s,i))),e[2]?U?U.p(e,r):(U=Wv(e),U.c(),U.m(s,null)):U&&(U.d(1),U=null),(!A||2&r[0])&&D!==(D=e[1].title+"")&&R(c,D),e[8]||e[14]||!e[4]?O&&(O.d(1),O=null):O?O.p(e,r):(O=Hv(e),O.c(),O.m(n,null));let o=f;f=P(e),f===o?~f&&M[f].p(e,r):(p&&(ie(),ce(M[o],1,1,(()=>{M[o]=null})),oe()),~f?(p=M[f],p?p.p(e,r):(p=M[f]=L[f](e),p.c()),ae(p,1),p.m(t,null)):p=null),(!A||35174&r[0]&&g!==(g="tab"+(e[8]?" selected":"")+(e[11]?" focused":"")+(e[15]?" dragged-over":"")+(e[1].active?" active":"")+(e[2]?" grouped":"")+" "+(e[5]?" start-tab":"")+" "+(e[6]?" end-tab":"")+" svelte-mnihx5"))&&S(t,"class",g),(!A||8192&r[0]&&v!==(v=e[13]?"false":"true"))&&S(t,"draggable",v)},i(e){A||(ae(p),A=!0)},o(e){ce(p),A=!1},d(n){n&&y(t),x.d(),U&&U.d(),O&&O.d(),~f&&M[f].d(),e[38](null),b=!1,r(C)}}}function qv(e){let t,n,s;return{c(){t=I("img"),S(t,"class","favicon svelte-mnihx5"),c(t.src,n=e[10])||S(t,"src",n),S(t,"alt",s=e[1].title)},m(e,n){w(e,t,n)},p(e,r){1024&r[0]&&!c(t.src,n=e[10])&&S(t,"src",n),2&r[0]&&s!==(s=e[1].title)&&S(t,"alt",s)},d(e){e&&y(t)}}}function zv(t){let n,s,r,i;return{c(){n=I("img"),S(n,"class","icon svelte-mnihx5"),c(n.src,s=Nv)||S(n,"src",s),S(n,"alt","Select")},m(e,s){w(e,n,s),r||(i=k(n,"mousedown",t[23]),r=!0)},p:e,d(e){e&&y(n),r=!1,i()}}}function Kv(t){let n,s,r,i;return{c(){n=I("img"),S(n,"class","icon svelte-mnihx5"),c(n.src,s=_v)||S(n,"src",s),S(n,"alt","Unselect")},m(e,s){w(e,n,s),r||(i=k(n,"mousedown",t[23]),r=!0)},p:e,d(e){e&&y(n),r=!1,i()}}}function Wv(e){let t;return{c(){t=I("div"),S(t,"class","group-indicator svelte-mnihx5"),N(t,"background-color",Je[e[2].color])},m(e,n){w(e,t,n)},p(e,n){4&n[0]&&N(t,"background-color",Je[e[2].color])},d(e){e&&y(t)}}}function Hv(e){let t,n,s,r=e[1].pinned&&Jv(e),i=e[11]&&Xv(e),o=e[11]&&!e[14]&&Yv(e);return{c(){t=I("div"),r&&r.c(),n=T(),i&&i.c(),s=T(),o&&o.c(),S(t,"class","actions svelte-mnihx5")},m(e,a){w(e,t,a),r&&r.m(t,null),m(t,n),i&&i.m(t,null),m(t,s),o&&o.m(t,null)},p(e,a){e[1].pinned?r?r.p(e,a):(r=Jv(e),r.c(),r.m(t,n)):r&&(r.d(1),r=null),e[11]?i?i.p(e,a):(i=Xv(e),i.c(),i.m(t,s)):i&&(i.d(1),i=null),e[11]&&!e[14]?o?o.p(e,a):(o=Yv(e),o.c(),o.m(t,null)):o&&(o.d(1),o=null)},d(e){e&&y(t),r&&r.d(),i&&i.d(),o&&o.d()}}}function Jv(t){let n,s,r,i;return{c(){n=I("img"),c(n.src,s=Dv)||S(n,"src",s),S(n,"class","icon svelte-mnihx5"),S(n,"alt","Pinned")},m(e,s){w(e,n,s),r||(i=k(n,"mouseup",t[16]),r=!0)},p:e,d(e){e&&y(n),r=!1,i()}}}function Xv(e){let t,n,s,r;return{c(){t=I("img"),S(t,"class","icon svelte-mnihx5"),c(t.src,n=e[1].bookmarks?it:rt)||S(t,"src",n),S(t,"alt","Save")},m(n,i){w(n,t,i),s||(r=k(t,"mousedown",e[31]),s=!0)},p(e,s){2&s[0]&&!c(t.src,n=e[1].bookmarks?it:rt)&&S(t,"src",n)},d(e){e&&y(t),s=!1,r()}}}function Yv(t){let n,s,i,o,a,l,u;return{c(){n=I("img"),i=T(),o=I("img"),c(n.src,s=He)||S(n,"src",s),S(n,"class","icon svelte-mnihx5"),S(n,"alt","Menu"),c(o.src,a=Ve)||S(o,"src",a),S(o,"class","icon svelte-mnihx5"),S(o,"alt","Close")},m(e,s){w(e,n,s),w(e,i,s),w(e,o,s),l||(u=[k(n,"mousedown",t[21]),k(o,"mouseup",t[22])],l=!0)},p:e,d(e){e&&y(n),e&&y(i),e&&y(o),l=!1,r(u)}}}function Zv(e){let t,n;return t=new jv({props:{tab:e[1]}}),{c(){ge(t.$$.fragment)},m(e,s){me(t,e,s),n=!0},p(e,n){const s={};2&n[0]&&(s.tab=e[1]),t.$set(s)},i(e){n||(ae(t.$$.fragment,e),n=!0)},o(e){ce(t.$$.fragment,e),n=!1},d(e){ve(t,e)}}}function eA(e){let t,n;return t=new $v({props:{user:e[0],tab:e[1],workspace:e[3]}}),t.$on("pinTab",e[37]),{c(){ge(t.$$.fragment)},m(e,s){me(t,e,s),n=!0},p(e,n){const s={};1&n[0]&&(s.user=e[0]),2&n[0]&&(s.tab=e[1]),8&n[0]&&(s.workspace=e[3]),t.$set(s)},i(e){n||(ae(t.$$.fragment,e),n=!0)},o(e){ce(t.$$.fragment,e),n=!1},d(e){ve(t,e)}}}function tA(e){let t,n,s=e[9]&&Qv(e);return{c(){s&&s.c(),t=C()},m(e,r){s&&s.m(e,r),w(e,t,r),n=!0},p(e,n){e[9]?s?(s.p(e,n),512&n[0]&&ae(s,1)):(s=Qv(e),s.c(),ae(s,1),s.m(t.parentNode,t)):s&&(ie(),ce(s,1,1,(()=>{s=null})),oe())},i(e){n||(ae(s),n=!0)},o(e){ce(s),n=!1},d(e){s&&s.d(e),e&&y(t)}}}function nA(e,t,n){let s,r,i,o,a,{db:c}=t,{user:l}=t,{tab:u}=t,{group:h=null}=t,{workspace:d=null}=t,{selectedTabs:f=[]}=t,{lastSelectionUpdate:p=null}=t,{dragoverItem:g=null}=t,{isOpen:m=!0}=t,{lastUpdatedTab:v}=t,{isStartingTab:A=!1}=t,{isEndingTab:w=!1}=t;B((()=>{y()}));const y=async()=>{b(),a=u.parentId,n(9,i=!0)},b=async()=>{n(10,o=u.favIconUrl&&!u.favIconUrl.includes("chrome:")?u.favIconUrl:await Te())};let I,E,T=$();let C;let k;let S;return e.$$set=e=>{"db"in e&&n(32,c=e.db),"user"in e&&n(0,l=e.user),"tab"in e&&n(1,u=e.tab),"group"in e&&n(2,h=e.group),"workspace"in e&&n(3,d=e.workspace),"selectedTabs"in e&&n(33,f=e.selectedTabs),"lastSelectionUpdate"in e&&n(34,p=e.lastSelectionUpdate),"dragoverItem"in e&&n(35,g=e.dragoverItem),"isOpen"in e&&n(4,m=e.isOpen),"lastUpdatedTab"in e&&n(36,v=e.lastUpdatedTab),"isStartingTab"in e&&n(5,A=e.isStartingTab),"isEndingTab"in e&&n(6,w=e.isEndingTab)},e.$$.update=()=>{2&e.$$.dirty[0]|12&e.$$.dirty[1]&&n(8,r=null!=f.find((e=>e.id==u.id))),2&e.$$.dirty[0]|32&e.$$.dirty[1]&&v&&v.id==u.id&&(b(),u.id&&u.active&&(()=>{if(u.active&&s){const e=s.getBoundingClientRect();e.top<window.innerHeight&&e.bottom>0||s.scrollIntoView({behavior:"smooth"})}})())},[l,u,h,d,m,A,w,s,r,i,o,I,E,C,k,S,()=>{chrome.tabs.update(u.id,{pinned:!u.pinned})},e=>{n(11,I=!0)},()=>{n(11,I=!1),n(13,C=!1),n(12,E=!1)},e=>{n(12,E=!0)},e=>{n(12,E=!1)},e=>{n(13,C=!C)},()=>{chrome.tabs.remove(u.id)},()=>{T("updateSelection",u)},e=>{n(14,k=!0),e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("tabId",u.id)},e=>{e.preventDefault(),S||n(15,S=!0)},e=>{e.preventDefault(),S&&n(15,S=!1)},e=>{n(14,k=!1)},async e=>{S&&n(15,S=!1);let t=e.dataTransfer.getData("tabId");const s=e.dataTransfer.getData("groupId");if(t){t=parseInt(t);const e=await chrome.tabs.get(t);e.groupId>-1&&-1==u.groupId&&await chrome.tabs.ungroup(e.id),await chrome.tabs.move(e.id,{index:u.index})}else s&&await chrome.tabGroups.move(parseInt(s),{index:u.index})},async()=>{if(m){if(r)return;if(a){const e=(await chrome.tabs.query({active:!0,currentWindow:!0}))[0],t=await chrome.tabs.create({url:u.url,index:e.index+1});e.groupId>-1&&await chrome.tabs.group({tabIds:t.id,groupId:e.groupId})}else chrome.tabs.update(u.id,{active:!0}),chrome.windows.update(u.windowId,{focused:!0})}else chrome.tabs.create({url:u.url})},undefined,async()=>{console.log(h),T("saveIconClicked",u)},c,f,p,g,v,function(t){V.call(this,e,t)},function(e){j[e?"unshift":"push"]((()=>{s=e,n(7,s)}))}]}class sA extends ye{constructor(e){super(),we(this,e,nA,tA,o,{db:32,user:0,tab:1,group:2,workspace:3,selectedTabs:33,lastSelectionUpdate:34,dragoverItem:35,isOpen:4,lastUpdatedTab:36,isStartingTab:5,isEndingTab:6},null,[-1,-1])}}var rA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAS9JREFUaEPtWVsOAiEMnL2Znkw9md5MM8mS+EELoQvdTYbE+AV0HpTS3XDxsV08fghAtoJSQAoEGeix0A3AAwD/V48XgKe3aQsAJzP4zHEH8LECaAH47hPJhLnIJHRFee5LENXRC8BlYSKA9762GacATGKfy9JCUqAc4tEzQBb5c1OhoeIpFIgQkA7gP4ARBQWA1jzKAlIg4ybWGVhxkXkldinGqL5XDFpF4vQsdGSpXTvk0wH8bxAtiWoPl+kAStCWjXotxHVqNloGwGJfWWhFFvK8LwWkgIq5jjetc4jS0yhj423NHD/SUzoFgMgNLQDRF1mEffWFCnvsjNGLmc1dxjLcGz2yZB61lPuNoNXcLakw4xsBU29T+R4Ao8wtmScAS2h2NpECUiDIwOUt9ANRvIwxkBa9rQAAAABJRU5ErkJggg==";function iA(e,t,n){const s=e.slice();return s[15]=t[n],s}function oA(e,t){let n,s,r;return s=new sA({props:{tab:t[15],selectedTabs:t[3],lastUpdatedTab:t[2],lastSelectionUpdate:t[4]}}),s.$on("updateSelection",t[6]),s.$on("toggleTabSaved",t[10]),{key:e,first:null,c(){n=C(),ge(s.$$.fragment),this.first=n},m(e,t){w(e,n,t),me(s,e,t),r=!0},p(e,n){t=e;const r={};2&n&&(r.tab=t[15]),8&n&&(r.selectedTabs=t[3]),4&n&&(r.lastUpdatedTab=t[2]),16&n&&(r.lastSelectionUpdate=t[4]),s.$set(r)},i(e){r||(ae(s.$$.fragment,e),r=!0)},o(e){ce(s.$$.fragment,e),r=!1},d(e){e&&y(n),ve(s,e)}}}function aA(e){let t,n,s=[],r=new Map,i=e[1];const o=e=>e[15];for(let t=0;t<i.length;t+=1){let n=iA(e,i,t),a=o(n);r.set(a,s[t]=oA(a,n))}return{c(){t=I("div");for(let e=0;e<s.length;e+=1)s[e].c();S(t,"class","tabs"),S(t,"slot","main")},m(e,r){w(e,t,r);for(let e=0;e<s.length;e+=1)s[e]&&s[e].m(t,null);n=!0},p(e,n){94&n&&(i=e[1],ie(),s=fe(s,n,o,1,e,i,r,t,de,oA,null,iA),oe())},i(e){if(!n){for(let e=0;e<i.length;e+=1)ae(s[e]);n=!0}},o(e){for(let e=0;e<s.length;e+=1)ce(s[e]);n=!1},d(e){e&&y(t);for(let e=0;e<s.length;e+=1)s[e].d()}}}function cA(e){let t,n,s;function r(t){e[11](t)}let i={title:"Open Tabs",headingActions:e[5],$$slots:{main:[aA]},$$scope:{ctx:e}};return void 0!==e[0]&&(i.expanded=e[0]),t=new Rv({props:i}),j.push((()=>pe(t,"expanded",r))),{c(){ge(t.$$.fragment)},m(e,n){me(t,e,n),s=!0},p(e,[s]){const r={};32&s&&(r.headingActions=e[5]),262174&s&&(r.$$scope={dirty:s,ctx:e}),!n&&1&s&&(n=!0,r.expanded=e[0],H((()=>n=!1))),t.$set(r)},i(e){s||(ae(t.$$.fragment,e),s=!0)},o(e){ce(t.$$.fragment,e),s=!1},d(e){ve(t,e)}}}function lA(e,t,n){let s,r=$(),{group:i}=t,{workspace:o}=t,{tabs:a}=t,{lastUpdatedTab:c}=t,{selectedTabs:l=[]}=t,{bookmarks:u}=t,{expanded:h=!1}=t;B((()=>{p()}));let d=[],f=[{icon:rA,title:"New Tab",condition:()=>0==l.length,onClick:async()=>{const e=(await chrome.tabs.query({active:!0,currentWindow:!0}))[0],t=await chrome.tabs.create({index:e.index+1});await chrome.tabs.group({tabIds:t.id,groupId:e.groupId})}},{icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAYZJREFUaEPtmTFKBEEQRd8ewdBE3QMoiGCsmGqouXgKTdREQ2OvoJlguKiRICJqZiLqCQQjM2lhoeltZ7umq1YXa2CCGX79qt/16Rm6Ooz51Rnz+nEBv91B78Bf7sAMEG7J9Qy8SQJqsTkLLQIHwEpL8h6wA9y0jBeFpQLWgRMRQx78AWwBpwpcjRSpgEdgVjHphrWIWMAU8KpYfJ/qUoHzDLgC7lKuWMAScJEA9oXJd4V4CfwTOAK246ASAXuCLAFrKSKUEjaIw35N2gIC7yhETADvIZmFgFGImAfuLQUIXDcUmuvoMvC9OVh1YGhVAoALkOxCgoUthnoHvAPFZskD3UJuIbfQ4A+if4krXSEK913IdyGRYQbBbiG3kFvov3/IKh2gEp6eNWV/JayOFlUUJCRd4CU9lQjPt8CCRUZFznNgNXcyF97NAQ+KySyopuMhSm7AMQkcA2sW2Ss4r4FN4CnmaBrytRkxVdTXGPrj6MqnlFZLXsrrHShdKSucd8BqZUt5vwDEOIAxEZQCowAAAABJRU5ErkJggg==",title:"Add to Folder",condition:()=>l.length>0,onClick:()=>{r("saveSelectedTabsToFolder")}},{icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAbJJREFUaEPtmQFuwzAIRd2TrTvZtpOtO9mmLw2JEbCxnUA9OVJVtU3Mf4Cxi29l8eu2uP6yAbIj6InAPVHko2W7BgDhb6WUTADoB8TH7/uBxwKA6M8WffDvrxqEBQDx2Z6X/kEkAPHnsgC+g73rNXeIggagpQ/ov7xWTrrvRcmCYQBMoveThHmHgT0UEX6FAyCazVJoEKUD8FRUK0gjFOkAXMBICm4AHuFZD84+T1pCJ/FOoegyitWbp4oVAVQnvFrrSugk1sS2vkNe13bDoQBy+4FI4KKVVH7Gb62JHQoAQdIgVmBrR9sSr42H7y6vQprX5ILrEZ8GYBkmCK/4VADLeI/4dAApoFf8UwB49/3WfeFVaFawfH4D9Hi0N8dHe07D64AXxtPpw1ijXY/LAdTejaCf6TkNA9RSRGvDUCuQ/tDTDlS2Smrjhk5izxaid0sRCgBx3n5qtVnLKMMByDb9UZFNKa9wPk56Y8tbvbT70iIwI5o/eyrAUs3dmYXmLO9b4xwWyn97wOEtiVd7nI/fdcREdX3ZQz7p2azzsubZgnf3GJkqXbY2QJe7Lrh5+Qj8AHxCvTEIDnwMAAAAAElFTkSuQmCC",title:"Stash All",onClick:()=>{r("stashSelectedTabs")}},{icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAlNJREFUaEPtWYtOBDEI7P2Zfpn6ZeqXaTBiCOExUOppspsYk73dMsNMgd7d1j+/bv8c/7oI3FvBS4ENBR7WWm8b73+9ekqB17XW+1rr2QFI4OmZ7fjbCzgAP77ve+sTeCLxEpCExDlBgLNLADyATPBPEuDsegQkwW0bn1CAs8sW0DEkwUilu1hIZ5dAPKpqQxv7SaDbstG0Ajq7VoYtkm0c7RcdfS0Cls+1zbRKkH22N5CKYmXW2wdjNppUQBKgDkuNjL2ufa4JtJM5SUDahyxBhJgAEaJ749ckAelrXte6N0piioC2D2dbWmWrXHqspwho+/CU+esEokqCSq+Toksmug4/F5ZYSwGvliOBrc1qVRxkLWjM8CzUDWplq7sWtGeiPcBlkP7Lq901jbR75CDwaPOwLDVR1y3wMHCvxXve9DLVUaOTdXf0qJRRz1KkBmUOOaBb4CM1ved/4lUIsDpVEPweMmpLB0AW6xCgILpfIFZCJ1BPaXN/dAkQCa/7evsIOQtDWZcBugS82SdrULIra9WsKSCtSl0CMvt6E0og0Xk4OiPAhWGCgASZWSBTrjx+dwggo7O2klQpAlmeXicIkBXIUtnFtpAntcxG6SmuQ0D7X89KElQ22VpNrGSjDoFovreqRjaNRt/cjVeh6MATBau8V9oHVQV2JtNKh4VtVCWg7ZNKDJ4BomNoGKNCQNugA575ZGvBNqoQ4EUnDjM8ENIXX94vNZKEi7NCgALRn/e7V9YHoiGPPrPOE2nMCoEuwKPvXQSOphdY/FIASNLRRz4BkeGwMafwiRQAAAAASUVORK5CYII=",title:"Save All",onClick:()=>{r("saveSelectedTabs")}},{icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAfVJREFUaEPtWVtSwzAMdE8GnAw4GeVkMNupPIoj2VL8TNvM9KfxY1daW49cwsmfSwX+94q53qlXbYKXAEB/hhBGgufYv0MIX/wPDwGA/vGarsN4eOOD1vUQAPhZlk/tED1hJbCK9XfqsRKA7qB9/sCVvx0kIi35JngfMrrWELgtMIiAZMDHJECHNLWsaoGVPJCC5PI6BYG/xJpc48sTkK5JHvWelgAMk7up8B6/TXognKviLdTDA1ySuxzmnpbwSyOmBysQkCzGSUhpSS6uDPeAlnqAhBRVYXTJS+SM4QSwcXqr5UJGDjzmTSFgTQA36bHCcgoBYCmRsICf5gEyZq6OKEln6hnA5pYiyEJiioQs4MnCJRLDCUgbAiw0r5WlS8UByfp0YHMxQksphnsgBZneNhKJXHU4nABdoZTMaQkdWRzvc0nfFAIti7UXgactaFrJ6CWh00tIKzlHdeaorc8luenMlWriUlrcSuuedW6Bj6JfiYC3wvIAOTJ21163ENAStCMAaufExM/jAa0yqgXjmY8zB+vHs+clQJtRQ8qzec1YAry7NI4SqAHTdO5DExj5CSn1SqlXGsfzIsLTiGoqA2Exa7slxoEVbpiUh+kbXFrGeToJvb1g+gApDVohYJXaLOIZkCw648u8K0E0uam3VmrW/wcIsPIxlUKjUgAAAABJRU5ErkJggg==",title:"Close All",onClick:async()=>{const e=l.length>0?l:await chrome.tabs.query({groupId:o.groupId}),t=await chrome.tabs.create();await chrome.tabs.group({tabIds:t.id,groupId:o.groupId}),await chrome.tabs.remove(e.map((e=>e.id)))}}];const p=()=>{n(5,d=f.filter((e=>!e.condition||e.condition())))};return e.$$set=e=>{"group"in e&&n(7,i=e.group),"workspace"in e&&n(8,o=e.workspace),"tabs"in e&&n(1,a=e.tabs),"lastUpdatedTab"in e&&n(2,c=e.lastUpdatedTab),"selectedTabs"in e&&n(3,l=e.selectedTabs),"bookmarks"in e&&n(9,u=e.bookmarks),"expanded"in e&&n(0,h=e.expanded)},[h,a,c,l,s,d,({detail:e})=>{const t=e,r=l.findIndex((e=>e.id==t.id));r>-1?l.splice(r,1):l.push(t),l.length<2&&p(),n(4,s=Date.now())},i,o,u,function(t){V.call(this,e,t)},function(e){h=e,n(0,h)}]}class uA extends ye{constructor(e){super(),we(this,e,lA,cA,o,{group:7,workspace:8,tabs:1,lastUpdatedTab:2,selectedTabs:3,bookmarks:9,expanded:0})}}var hA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAWhJREFUaEPtmbFKA0EURU8+wdJGzQcYEMFaSaul9sGv0A/Q0tpf0E6wlJhKEBG1SxPULxCs7GSEhWEZl7e7c9GBtxDIhjfnzb03TDFvQOHPoPD94wL+OkFP4D8nsAaET5tnAby3WdC3NvUX2gJOgHFH+A1wDNx3XN9qWV3APnDRipAu/gQOgcsMrEZEXcALsJ6x6YFaRCxgBXjLuPkKdZuBeQXMgMc6KxawDUwzNFMhvoAz4ChuUJKAat/hgDitXkoUEPa+BHyEL6UK2ACeShawA/wcDqUm4AJUR6WV6wlYnVLVeQIqZ61cT8DqlKrOE1A5a+V6AlanVHWegMpZK9cTsDqlqvMEVM5auZ6A1SlVXTIB1dWiQsQQeK3fSoT3B2BT0TEj8xrYTd3Mhd9GwHPGZgrUajxESQ04loFzYE/RvQfzDpgA85jRNOTrMmLqsb/Gpb+OrnxKqbLcyvUErE6p6jwBlbNW7jdlqU4x31uhmQAAAABJRU5ErkJggg==",dA="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAY5JREFUaEPtmVsSwiAMRenK1JWpK1NXpnO1MIXSQiCRMIW/zgDNSW7CazKdt6lz+80AaB3BEQHtETgTDXwS+1d3j0kIRl+NMVTjrTGAuBtj/gITAsDoR7VbfhMA4sY01+Y0IQCML/V87CfiECHAW8BjHFJ6zZJczbUE4JSPgB/isuwNYJVbPQIAwtndK8DFlukSAFQWNCQUR4JW5QsFQLwklpDkAqg03kuGeQGLrcIx41Fy7ZajxHElY6xcoX/XciIQLnbYHmCv1Kp5e60UADovibUsdk4VKYBQPtx7pZoofm3rGeC7FlAAtMjHRu14AJr074oLRUISZ4XSJCYDqNR/zkpsy2j3ACr1T4mASv3nAiBhuK5aSpN2Oc4dZg4DcGK+K6qJQri59N4HYpUGVajl1jmEJQNgAOdNXY33MdbTf04O1P6Qe/wuAH6mqVwm5RNGAN+tj4t7EVt5PwagNQqbtyISDxycukcRwc305jtD6pGvZQXKuvVLAXB6U2SuASDiVsKkIwIEZ4l07T4CH9BbazF7L1pBAAAAAElFTkSuQmCC";function fA(e,t,n){const s=e.slice();return s[12]=t[n],s}function pA(e){let t,n,s,i,o,a,l,u,h,d,f,p=e[1].title+"",g=e[0]&&gA(e);return{c(){t=I("div"),n=I("div"),s=I("img"),o=T(),a=I("div"),l=E(p),u=T(),g&&g.c(),c(s.src,i=e[5]?e[0]?dA:hA:e[4])||S(s,"src",i),S(s,"class","icon"+(e[5]?" folder":"")+" svelte-1ifym4z"),S(s,"alt",""),S(a,"class","title svelte-1ifym4z"),S(n,"class","head svelte-1ifym4z"),S(t,"class","bookmark svelte-1ifym4z")},m(r,i){w(r,t,i),m(t,n),m(n,s),m(n,o),m(n,a),m(a,l),m(t,u),g&&g.m(t,null),h=!0,d||(f=[k(s,"mousedown",e[6]),k(t,"mouseenter",e[7]),k(t,"mouseleave",e[8])],d=!0)},p(e,n){(!h||17&n&&!c(s.src,i=e[5]?e[0]?dA:hA:e[4]))&&S(s,"src",i),(!h||2&n)&&p!==(p=e[1].title+"")&&R(l,p),e[0]?g?(g.p(e,n),1&n&&ae(g,1)):(g=gA(e),g.c(),ae(g,1),g.m(t,null)):g&&(ie(),ce(g,1,1,(()=>{g=null})),oe())},i(e){h||(ae(g),h=!0)},o(e){ce(g),h=!1},d(e){e&&y(t),g&&g.d(),d=!1,r(f)}}}function gA(e){let t,n,s=e[1].children??[],r=[];for(let t=0;t<s.length;t+=1)r[t]=mA(fA(e,s,t));const i=e=>ce(r[e],1,1,(()=>{r[e]=null}));return{c(){t=I("div");for(let e=0;e<r.length;e+=1)r[e].c();S(t,"class","children svelte-1ifym4z")},m(e,s){w(e,t,s);for(let e=0;e<r.length;e+=1)r[e]&&r[e].m(t,null);n=!0},p(e,n){if(2&n){let o;for(s=e[1].children??[],o=0;o<s.length;o+=1){const i=fA(e,s,o);r[o]?(r[o].p(i,n),ae(r[o],1)):(r[o]=mA(i),r[o].c(),ae(r[o],1),r[o].m(t,null))}for(ie(),o=s.length;o<r.length;o+=1)i(o);oe()}},i(e){if(!n){for(let e=0;e<s.length;e+=1)ae(r[e]);n=!0}},o(e){r=r.filter(Boolean);for(let e=0;e<r.length;e+=1)ce(r[e]);n=!1},d(e){e&&y(t),b(r,e)}}}function mA(e){let t,n;return t=new wA({props:{bookmark:e[12]}}),{c(){ge(t.$$.fragment)},m(e,s){me(t,e,s),n=!0},p(e,n){const s={};2&n&&(s.bookmark=e[12]),t.$set(s)},i(e){n||(ae(t.$$.fragment,e),n=!0)},o(e){ce(t.$$.fragment,e),n=!1},d(e){ve(t,e)}}}function vA(e){let t,n,s=e[3]&&pA(e);return{c(){s&&s.c(),t=C()},m(e,r){s&&s.m(e,r),w(e,t,r),n=!0},p(e,[n]){e[3]?s?(s.p(e,n),8&n&&ae(s,1)):(s=pA(e),s.c(),ae(s,1),s.m(t.parentNode,t)):s&&(ie(),ce(s,1,1,(()=>{s=null})),oe())},i(e){n||(ae(s),n=!0)},o(e){ce(s),n=!1},d(e){s&&s.d(e),e&&y(t)}}}function AA(e,t,n){let{bookmark:s}=t,{isOpen:r=!1}=t,i=!s.url;let o,a,c;B((()=>{l()}));const l=async()=>{n(4,c=await Te(s.url)),n(3,a=!0)};$();return e.$$set=e=>{"bookmark"in e&&n(1,s=e.bookmark),"isOpen"in e&&n(0,r=e.isOpen)},[r,s,o,a,c,i,e=>{i&&n(0,r=!r)},()=>n(2,o=!0),()=>n(2,o=!1)]}class wA extends ye{constructor(e){super(),we(this,e,AA,vA,o,{bookmark:1,isOpen:0})}}function yA(e,t,n){const s=e.slice();return s[11]=t[n],s}function bA(e){let t,n;return t=new wA({props:{bookmark:e[11]}}),{c(){ge(t.$$.fragment)},m(e,s){me(t,e,s),n=!0},p(e,n){const s={};2&n&&(s.bookmark=e[11]),t.$set(s)},i(e){n||(ae(t.$$.fragment,e),n=!0)},o(e){ce(t.$$.fragment,e),n=!1},d(e){ve(t,e)}}}function IA(e){let t,n,s=e[1],r=[];for(let t=0;t<s.length;t+=1)r[t]=bA(yA(e,s,t));const i=e=>ce(r[e],1,1,(()=>{r[e]=null}));return{c(){t=I("div");for(let e=0;e<r.length;e+=1)r[e].c();S(t,"class","bookmarks"),S(t,"slot","main")},m(e,s){w(e,t,s);for(let e=0;e<r.length;e+=1)r[e]&&r[e].m(t,null);n=!0},p(e,n){if(2&n){let o;for(s=e[1],o=0;o<s.length;o+=1){const i=yA(e,s,o);r[o]?(r[o].p(i,n),ae(r[o],1)):(r[o]=bA(i),r[o].c(),ae(r[o],1),r[o].m(t,null))}for(ie(),o=s.length;o<r.length;o+=1)i(o);oe()}},i(e){if(!n){for(let e=0;e<s.length;e+=1)ae(r[e]);n=!0}},o(e){r=r.filter(Boolean);for(let e=0;e<r.length;e+=1)ce(r[e]);n=!1},d(e){e&&y(t),b(r,e)}}}function EA(e){let t,n,s;function r(t){e[4](t)}let i={title:"Bookmarks",$$slots:{main:[IA]},$$scope:{ctx:e}};return void 0!==e[0]&&(i.expanded=e[0]),t=new Rv({props:i}),j.push((()=>pe(t,"expanded",r))),{c(){ge(t.$$.fragment)},m(e,n){me(t,e,n),s=!0},p(e,[s]){const r={};16386&s&&(r.$$scope={dirty:s,ctx:e}),!n&&1&s&&(n=!0,r.expanded=e[0],H((()=>n=!1))),t.$set(r)},i(e){s||(ae(t.$$.fragment,e),s=!0)},o(e){ce(t.$$.fragment,e),s=!1},d(e){ve(t,e)}}}function TA(e,t,n){let{user:s}=t,{workspace:r}=t,{expanded:i}=t,{bookmarks:o}=t;return $(),B((()=>{console.log("bookmarks"),console.log(o)})),e.$$set=e=>{"user"in e&&n(2,s=e.user),"workspace"in e&&n(3,r=e.workspace),"expanded"in e&&n(0,i=e.expanded),"bookmarks"in e&&n(1,o=e.bookmarks)},[i,o,s,r,function(e){i=e,n(0,i)}]}class CA extends ye{constructor(e){super(),we(this,e,TA,EA,o,{user:2,workspace:3,expanded:0,bookmarks:1})}}function kA(e,t,n){const s=e.slice();return s[3]=t[n],s}function SA(e){let t,n;return t=new wA({props:{bookmark:e[3]}}),{c(){ge(t.$$.fragment)},m(e,s){me(t,e,s),n=!0},p(e,n){const s={};2&n&&(s.bookmark=e[3]),t.$set(s)},i(e){n||(ae(t.$$.fragment,e),n=!0)},o(e){ce(t.$$.fragment,e),n=!1},d(e){ve(t,e)}}}function RA(e){let t,n,s=e[1],r=[];for(let t=0;t<s.length;t+=1)r[t]=SA(kA(e,s,t));const i=e=>ce(r[e],1,1,(()=>{r[e]=null}));return{c(){t=I("div");for(let e=0;e<r.length;e+=1)r[e].c();S(t,"class","queue"),S(t,"slot","main")},m(e,s){w(e,t,s);for(let e=0;e<r.length;e+=1)r[e]&&r[e].m(t,null);n=!0},p(e,n){if(2&n){let o;for(s=e[1],o=0;o<s.length;o+=1){const i=kA(e,s,o);r[o]?(r[o].p(i,n),ae(r[o],1)):(r[o]=SA(i),r[o].c(),ae(r[o],1),r[o].m(t,null))}for(ie(),o=s.length;o<r.length;o+=1)i(o);oe()}},i(e){if(!n){for(let e=0;e<s.length;e+=1)ae(r[e]);n=!0}},o(e){r=r.filter(Boolean);for(let e=0;e<r.length;e+=1)ce(r[e]);n=!1},d(e){e&&y(t),b(r,e)}}}function DA(e){let t,n,s;function r(t){e[2](t)}let i={title:"Queue",$$slots:{main:[RA]},$$scope:{ctx:e}};return void 0!==e[0]&&(i.expanded=e[0]),t=new Rv({props:i}),j.push((()=>pe(t,"expanded",r))),{c(){ge(t.$$.fragment)},m(e,n){me(t,e,n),s=!0},p(e,[s]){const r={};66&s&&(r.$$scope={dirty:s,ctx:e}),!n&&1&s&&(n=!0,r.expanded=e[0],H((()=>n=!1))),t.$set(r)},i(e){s||(ae(t.$$.fragment,e),s=!0)},o(e){ce(t.$$.fragment,e),s=!1},d(e){ve(t,e)}}}function NA(e,t,n){let{queue:s}=t,{expanded:r}=t;return e.$$set=e=>{"queue"in e&&n(1,s=e.queue),"expanded"in e&&n(0,r=e.expanded)},[r,s,function(e){r=e,n(0,r)}]}class _A extends ye{constructor(e){super(),we(this,e,NA,DA,o,{queue:1,expanded:0})}}function xA(e){let t,n,s,i,o,a,l,u,h,d,f,p,g,v,A,b,C,D,_,x,U,O,L,M,P,F,B,$,V=e[1]?.title+"";function G(t){e[21](t)}function Q(t){e[22](t)}let q={workspace:e[1],tabs:e[0],lastUpdatedTab:e[3],group:e[2]};function z(t){e[26](t)}void 0!==e[8]&&(q.expanded=e[8]),void 0!==e[4]&&(q.selectedTabs=e[4]),C=new uA({props:q}),j.push((()=>pe(C,"expanded",G))),j.push((()=>pe(C,"selectedTabs",Q))),C.$on("saveSelectedTabs",e[23]),C.$on("saveSelectedTabsToFolder",e[24]),C.$on("stashSelectedTabs",e[25]),C.$on("toggleTabSaved",e[14]);let K={workspace:e[1],bookmarks:e[5]};function W(t){e[27](t)}void 0!==e[9]&&(K.expanded=e[9]),U=new CA({props:K}),j.push((()=>pe(U,"expanded",z)));let J={workspace:e[1],queue:e[6]};return void 0!==e[10]&&(J.expanded=e[10]),M=new _A({props:J}),j.push((()=>pe(M,"expanded",W))),{c(){t=I("div"),n=I("div"),s=I("div"),i=I("img"),a=T(),l=I("div"),u=E(V),h=T(),d=I("div"),f=I("img"),g=T(),v=I("img"),b=T(),ge(C.$$.fragment),x=T(),ge(U.$$.fragment),L=T(),ge(M.$$.fragment),c(i.src,o=ot)||S(i,"src",o),S(i,"class","action icon svelte-vr5p93"),S(i,"alt","back"),S(l,"class","title svelte-vr5p93"),c(f.src,p=$e)||S(f,"src",p),S(f,"class","action icon svelte-vr5p93"),S(f,"alt",""),c(v.src,A=He)||S(v,"src",A),S(v,"class","action icon svelte-vr5p93"),S(v,"alt",""),S(d,"class","actions svelte-vr5p93"),S(s,"class","main svelte-vr5p93"),S(n,"class","header svelte-vr5p93"),N(n,"color",Je[e[1].color]),S(t,"class","workspace svelte-vr5p93")},m(r,o){w(r,t,o),m(t,n),m(n,s),m(s,i),m(s,a),m(s,l),m(l,u),m(s,h),m(s,d),m(d,f),m(d,g),m(d,v),m(t,b),me(C,t,null),m(t,x),me(U,t,null),m(t,L),me(M,t,null),F=!0,B||($=[k(i,"mousedown",e[13]),k(f,"mousedown",e[20]),k(v,"mousedown",e[12])],B=!0)},p(e,t){(!F||2&t[0])&&V!==(V=e[1]?.title+"")&&R(u,V),(!F||2&t[0])&&N(n,"color",Je[e[1].color]);const s={};2&t[0]&&(s.workspace=e[1]),1&t[0]&&(s.tabs=e[0]),8&t[0]&&(s.lastUpdatedTab=e[3]),4&t[0]&&(s.group=e[2]),!D&&256&t[0]&&(D=!0,s.expanded=e[8],H((()=>D=!1))),!_&&16&t[0]&&(_=!0,s.selectedTabs=e[4],H((()=>_=!1))),C.$set(s);const r={};2&t[0]&&(r.workspace=e[1]),32&t[0]&&(r.bookmarks=e[5]),!O&&512&t[0]&&(O=!0,r.expanded=e[9],H((()=>O=!1))),U.$set(r);const i={};2&t[0]&&(i.workspace=e[1]),64&t[0]&&(i.queue=e[6]),!P&&1024&t[0]&&(P=!0,i.expanded=e[10],H((()=>P=!1))),M.$set(i)},i(e){F||(ae(C.$$.fragment,e),ae(U.$$.fragment,e),ae(M.$$.fragment,e),F=!0)},o(e){ce(C.$$.fragment,e),ce(U.$$.fragment,e),ce(M.$$.fragment,e),F=!1},d(e){e&&y(t),ve(C),ve(U),ve(M),B=!1,r($)}}}function UA(e){let t,n,s=e[7]&&xA(e);return{c(){s&&s.c(),t=C()},m(e,r){s&&s.m(e,r),w(e,t,r),n=!0},p(e,n){e[7]?s?(s.p(e,n),128&n[0]&&ae(s,1)):(s=xA(e),s.c(),ae(s,1),s.m(t.parentNode,t)):s&&(ie(),ce(s,1,1,(()=>{s=null})),oe())},i(e){n||(ae(s),n=!0)},o(e){ce(s),n=!1},d(e){s&&s.d(e),e&&y(t)}}}function OA(e,t,n){let s,r=$(),{tabs:i=null}=t,{group:o=null}=t,{lastUpdate:a=null}=t,{activeTab:c=null}=t,{lastSelectionUpdate:l=null}=t,{lastUpdatedTab:u}=t,{user:h}=t,{db:d}=t,{workspace:f=null}=t,p=[],g=[],m=[];B((()=>{b()}));let v,A=!0,w=!1,y=!1;const b=async()=>{o&&(f?await T():o?.workspaceId?await I():n(1,f={title:o.title,color:o.color}),C(),n(7,s=!0))},I=async()=>{n(1,f=await Ce(o.workspaceId)),await T()};let E=[];const T=async()=>{if(h){console.log("fetching resources from the cloud");const e=ct.userResources(h.id),t=cp(_f(d,e),function(e,t,n){const s=t,r=ip("where",e);return lp._create(r,s,n)}("contexts","array-contains",f.id));E=(await Ip(t)).docs.map((e=>e.data())),n(5,g=E.filter((e=>e.url&&!e.title.startsWith("* ")&&!e.isQueued))),n(6,m=E.filter((e=>e.url&&(e.title.startsWith("* ")||e.isQueued))))}i||n(0,i=f.tabs)},C=()=>{for(let e=0;e<i.length;e++)n(0,i[e].saved=E.find((t=>t.url==i[e].url)),i)};return e.$$set=e=>{"tabs"in e&&n(0,i=e.tabs),"group"in e&&n(2,o=e.group),"lastUpdate"in e&&n(15,a=e.lastUpdate),"activeTab"in e&&n(16,c=e.activeTab),"lastSelectionUpdate"in e&&n(17,l=e.lastSelectionUpdate),"lastUpdatedTab"in e&&n(3,u=e.lastUpdatedTab),"user"in e&&n(18,h=e.user),"db"in e&&n(19,d=e.db),"workspace"in e&&n(1,f=e.workspace)},e.$$.update=()=>{4&e.$$.dirty[0]&&o?.workspaceId&&b()},[i,f,o,u,p,g,m,s,A,w,y,v,()=>{},()=>{r("goBack")},async({detail:e})=>{const t=e;await tryToGetBookmarkFolder(f.folderId),t.saved?h?.cloudSync:(await chrome.tabs,h?.cloudStorage)},a,c,l,h,d,()=>n(11,v=!0),function(e){A=e,n(8,A)},function(e){p=e,n(4,p)},function(t){V.call(this,e,t)},function(t){V.call(this,e,t)},function(t){V.call(this,e,t)},function(e){w=e,n(9,w)},function(e){y=e,n(10,y)}]}class LA extends ye{constructor(e){super(),we(this,e,OA,UA,o,{tabs:0,group:2,lastUpdate:15,activeTab:16,lastSelectionUpdate:17,lastUpdatedTab:3,user:18,db:19,workspace:1},null,[-1,-1])}}function MA(e){let t,n,s,r,i,o,a=(e[0]?.title??"Untitled Group")+"",c=e[0].collapsed&&FA(e);return{c(){t=I("div"),n=I("span"),s=E(a),r=T(),c&&c.c(),S(n,"class","text svelte-1nzf3z2"),S(t,"class","title svelte-1nzf3z2")},m(a,l){w(a,t,l),m(t,n),m(n,s),m(t,r),c&&c.m(t,null),i||(o=k(n,"mousedown",e[25]),i=!0)},p(e,n){1&n[0]&&a!==(a=(e[0]?.title??"Untitled Group")+"")&&R(s,a),e[0].collapsed?c?c.p(e,n):(c=FA(e),c.c(),c.m(t,null)):c&&(c.d(1),c=null)},d(e){e&&y(t),c&&c.d(),i=!1,o()}}}function PA(e){let t,n,s;return{c(){t=I("input"),S(t,"type","text"),S(t,"class","title-input svelte-1nzf3z2"),S(t,"placeholder","Name this group"),t.autofocus="true"},m(r,i){w(r,t,i),D(t,e[0].title),t.focus(),n||(s=[k(t,"input",e[33]),k(t,"blur",e[17]),k(t,"keydown",e[18])],n=!0)},p(e,n){1&n[0]&&t.value!==e[0].title&&D(t,e[0].title)},d(e){e&&y(t),n=!1,r(s)}}}function FA(e){let t,n,s,r,i=e[1].length+"";return{c(){t=I("div"),n=E("("),s=E(i),r=E(")"),S(t,"class","count svelte-1nzf3z2")},m(e,i){w(e,t,i),m(t,n),m(t,s),m(t,r)},p(e,t){2&t[0]&&i!==(i=e[1].length+"")&&R(s,i)},d(e){e&&y(t)}}}function BA(e){let t,n,s,i,o,a,l,u,h;function d(e,t){return e[0].workspace?VA:$A}let f=d(e),p=f(e);return{c(){t=I("div"),p.c(),n=T(),s=I("img"),o=T(),a=I("img"),c(s.src,i=He)||S(s,"src",i),S(s,"alt","More"),S(s,"class","svelte-1nzf3z2"),c(a.src,l=Ve)||S(a,"src",l),S(a,"alt","close"),S(a,"class","svelte-1nzf3z2"),S(t,"class","actions svelte-1nzf3z2")},m(r,i){w(r,t,i),p.m(t,null),m(t,n),m(t,s),m(t,o),m(t,a),u||(h=[k(s,"mousedown",e[34]),k(a,"mouseup",e[11])],u=!0)},p(e,s){f===(f=d(e))&&p?p.p(e,s):(p.d(1),p=f(e),p&&(p.c(),p.m(t,n)))},d(e){e&&y(t),p.d(),u=!1,r(h)}}}function $A(e){let t,n,s,r;return{c(){t=I("img"),c(t.src,n=e[0].collapsed?We:Ke)||S(t,"src",n),S(t,"alt","Toggle Collapsed"),S(t,"class","svelte-1nzf3z2")},m(n,i){w(n,t,i),s||(r=k(t,"mousedown",e[12]),s=!0)},p(e,s){1&s[0]&&!c(t.src,n=e[0].collapsed?We:Ke)&&S(t,"src",n)},d(e){e&&y(t),s=!1,r()}}}function VA(t){let n,s,r,i;return{c(){n=I("img"),c(n.src,s=st)||S(n,"src",s),S(n,"alt","Fullscreen"),S(n,"class","svelte-1nzf3z2")},m(e,s){w(e,n,s),r||(i=k(n,"mousedown",t[25]),r=!0)},p:e,d(e){e&&y(n),r=!1,i()}}}function GA(e){let t,n,s,i,o,a,c,l,u,h,d,f,p,g,v,A,b,E,C,R;n=new nt({props:{group:e[0]}}),n.$on("colorSelected",e[26]);let D=e[2]&&jA(e);return{c(){t=I("div"),ge(n.$$.fragment),s=T(),i=I("div"),i.textContent="Edit title",o=T(),a=I("div"),c=T(),l=I("div"),l.textContent="Move Group to New Window",u=T(),D&&D.c(),h=T(),d=I("div"),f=T(),p=I("div"),p.textContent="Ungroup Tabs",g=T(),v=I("div"),v.textContent="Close Group",S(i,"class","action svelte-1nzf3z2"),S(a,"class","divider svelte-1nzf3z2"),S(l,"class","action svelte-1nzf3z2"),S(d,"class","divider svelte-1nzf3z2"),S(p,"class","action svelte-1nzf3z2"),S(v,"class","action svelte-1nzf3z2"),S(t,"class","more-actions svelte-1nzf3z2"),N(t,"border-color","#555555")},m(r,A){w(r,t,A),me(n,t,null),m(t,s),m(t,i),m(t,o),m(t,a),m(t,c),m(t,l),m(t,u),D&&D.m(t,null),m(t,h),m(t,d),m(t,f),m(t,p),m(t,g),m(t,v),E=!0,C||(R=[k(i,"mousedown",e[16]),k(l,"mousedown",e[14]),k(p,"mousedown",e[19]),k(v,"mousedown",e[15])],C=!0)},p(e,s){const r={};1&s[0]&&(r.group=e[0]),n.$set(r),e[2]?D?D.p(e,s):(D=jA(e),D.c(),D.m(t,h)):D&&(D.d(1),D=null)},i(e){E||(ae(n.$$.fragment,e),W((()=>{E&&(b&&b.end(1),A=ue(t,Be,{}),A.start())})),E=!0)},o(e){ce(n.$$.fragment,e),A&&A.invalidate(),b=he(t,Be,{}),E=!1},d(e){e&&y(t),ve(n),D&&D.d(),e&&b&&b.end(),C=!1,r(R)}}}function jA(t){let n,s,i,o,a,c,l;return{c(){n=I("div"),n.textContent="Open Workspace",s=T(),i=I("div"),o=T(),a=I("div"),a.textContent="Save Group",S(n,"class","action svelte-1nzf3z2"),S(i,"class","divider svelte-1nzf3z2"),S(a,"class","action svelte-1nzf3z2")},m(e,r){w(e,n,r),w(e,s,r),w(e,i,r),w(e,o,r),w(e,a,r),c||(l=[k(n,"mousedown",t[25]),k(a,"mousedown",t[13])],c=!0)},p:e,d(e){e&&y(n),e&&y(s),e&&y(i),e&&y(o),e&&y(a),c=!1,r(l)}}}function QA(e){let t,n,s,i,o,a,c,l,u;function h(e,t){return e[6]?PA:MA}let d=h(e),f=d(e),p=e[3]&&!e[7]&&BA(e),g=e[4]&&GA(e);return{c(){t=I("div"),n=I("div"),f.c(),s=T(),p&&p.c(),i=T(),g&&g.c(),S(n,"class","container svelte-1nzf3z2"),N(n,"background-color",Je[e[0].color]),S(t,"class",o="group-label"+(e[8]?" dragged-over":"")+(e[0].collapsed?" collapsed":"")+" svelte-1nzf3z2"),S(t,"draggable",a=e[6]?"false":"true")},m(r,o){w(r,t,o),m(t,n),f.m(n,null),m(n,s),p&&p.m(n,null),m(t,i),g&&g.m(t,null),e[35](t),c=!0,l||(u=[k(t,"mouseenter",e[9]),k(t,"mouseleave",e[10]),k(t,"dragleave",e[22]),k(t,"dragstart",e[20]),k(t,"dragover",e[21]),k(t,"drop",e[23]),k(t,"dragend",e[24])],l=!0)},p(e,r){d===(d=h(e))&&f?f.p(e,r):(f.d(1),f=d(e),f&&(f.c(),f.m(n,s))),e[3]&&!e[7]?p?p.p(e,r):(p=BA(e),p.c(),p.m(n,null)):p&&(p.d(1),p=null),(!c||1&r[0])&&N(n,"background-color",Je[e[0].color]),e[4]?g?(g.p(e,r),16&r[0]&&ae(g,1)):(g=GA(e),g.c(),ae(g,1),g.m(t,null)):g&&(ie(),ce(g,1,1,(()=>{g=null})),oe()),(!c||257&r[0]&&o!==(o="group-label"+(e[8]?" dragged-over":"")+(e[0].collapsed?" collapsed":"")+" svelte-1nzf3z2"))&&S(t,"class",o),(!c||64&r[0]&&a!==(a=e[6]?"false":"true"))&&S(t,"draggable",a)},i(e){c||(ae(g),c=!0)},o(e){ce(g),c=!1},d(n){n&&y(t),f.d(),p&&p.d(),g&&g.d(),e[35](null),l=!1,r(u)}}}function qA(e,t,n){let s,r,i,{group:o}=t,{isCollapsed:a=null}=t,{tabs:c=[]}=t,{lastGroupUpdate:l=null}=t,{user:u}=t,{db:h}=t,{lastUpdate:d}=t,{lastUpdatedTab:f}=t,{lastSelectionUpdate:p}=t,g=$();B((()=>{o.new&&(n(6,m=!0),i?.scrollIntoView({behavior:"smooth"}))}));let m;let v;const A=()=>{chrome.tabGroups.update(o.id,{title:o.title}),n(6,m=!1)};let w;let y;return e.$$set=e=>{"group"in e&&n(0,o=e.group),"isCollapsed"in e&&n(27,a=e.isCollapsed),"tabs"in e&&n(1,c=e.tabs),"lastGroupUpdate"in e&&n(28,l=e.lastGroupUpdate),"user"in e&&n(2,u=e.user),"db"in e&&n(29,h=e.db),"lastUpdate"in e&&n(30,d=e.lastUpdate),"lastUpdatedTab"in e&&n(31,f=e.lastUpdatedTab),"lastSelectionUpdate"in e&&n(32,p=e.lastSelectionUpdate)},[o,c,u,s,r,i,m,w,y,()=>{n(3,s=!0)},()=>{n(3,s=!1),n(4,r=!1)},()=>{chrome.tabs.remove(c.map((e=>e.id)))},()=>{g("toggleCollapse",o),chrome.tabGroups.update(o.id,{collapsed:!o.collapsed})},async()=>{},async()=>{const e=await chrome.windows.create({});await chrome.tabGroups.move(o.id,{windowId:e.id,index:0}),n(4,r=!1)},()=>{chrome.tabGroups.remove(o.id)},()=>{n(6,m=!0)},e=>{v&&A()},e=>{"Enter"==e.key&&A(),v||(v=!0)},async()=>{chrome.tabs.ungroup((await chrome.tabs.query({groupId:o.id})).map((e=>e.id)))},e=>{n(7,w=!0),e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("groupId",o.id),chrome.tabGroups.update(o.id,{collapsed:!0})},e=>{e.preventDefault(),y||n(8,y=!0)},e=>{e.preventDefault(),n(8,y=!1)},async e=>{y&&n(8,y=!1);let t=e.dataTransfer.getData("tabId");const s=e.dataTransfer.getData("groupId"),r=await chrome.tabs.query({groupId:o.id});let i=1e5,a=0;for(const e of r)e.index<i&&(i=e.index),e.index>a&&(a=e.index);if(t){t=parseInt(t);const e=await chrome.tabs.get(t);let n;e.groupId==o.id?n=i:e.index>i?(o.collapsed||await chrome.tabs.group({tabIds:e.id,groupId:o.id}),n=i):e.index<a&&(o.collapsed?n=a:(await chrome.tabs.group({tabIds:e.id,groupId:o.id}),n=i)),chrome.tabs.move(parseInt(t),{index:n})}else s&&chrome.tabGroups.move(parseInt(s),{index:i})},()=>{n(7,w=!1)},()=>{g("showWorkspaceView",o)},({detail:e})=>{const t=e;o.id?chrome.tabGroups.update(o.id,{color:t}):n(0,o.color=t,o)},a,l,h,d,f,p,function(){o.title=this.value,n(0,o)},()=>n(4,r=!r),function(e){j[e?"unshift":"push"]((()=>{i=e,n(5,i)}))}]}class zA extends ye{constructor(e){super(),we(this,e,qA,QA,o,{group:0,isCollapsed:27,tabs:1,lastGroupUpdate:28,user:2,db:29,lastUpdate:30,lastUpdatedTab:31,lastSelectionUpdate:32},null,[-1,-1])}}function KA(e){let t,n,s,i,o,a,l,u,h,d=e[1]&&WA(e);return{c(){t=I("div"),n=I("img"),a=T(),d&&d.c(),c(n.src,s=e[4]?e[0].favIconUrl:xv)||S(n,"src",s),S(n,"style",i=e[4]?"":"filter: invert(1);"),S(n,"alt",o=e[0].title),S(n,"draggable","false"),S(n,"class","svelte-zsdvv8"),S(t,"class",l="tab-icon"+(e[2]?" focus":"")+(e[0].active?" active":"")+" svelte-zsdvv8"),S(t,"draggable","true")},m(s,r){w(s,t,r),m(t,n),m(t,a),d&&d.m(t,null),u||(h=[k(t,"mouseenter",e[5]),k(t,"mouseleave",e[6]),k(t,"mouseup",e[7]),k(t,"dragstart",e[8])],u=!0)},p(e,r){17&r&&!c(n.src,s=e[4]?e[0].favIconUrl:xv)&&S(n,"src",s),16&r&&i!==(i=e[4]?"":"filter: invert(1);")&&S(n,"style",i),1&r&&o!==(o=e[0].title)&&S(n,"alt",o),e[1]?d?d.p(e,r):(d=WA(e),d.c(),d.m(t,null)):d&&(d.d(1),d=null),5&r&&l!==(l="tab-icon"+(e[2]?" focus":"")+(e[0].active?" active":"")+" svelte-zsdvv8")&&S(t,"class",l)},d(e){e&&y(t),d&&d.d(),u=!1,r(h)}}}function WA(e){let t;return{c(){t=I("div"),S(t,"class","group-indicator svelte-zsdvv8"),N(t,"background-color",Je[e[1].color])},m(e,n){w(e,t,n)},p(e,n){2&n&&N(t,"background-color",Je[e[1].color])},d(e){e&&y(t)}}}function HA(t){let n,s=t[3]&&KA(t);return{c(){s&&s.c(),n=C()},m(e,t){s&&s.m(e,t),w(e,n,t)},p(e,[t]){e[3]?s?s.p(e,t):(s=KA(e),s.c(),s.m(n.parentNode,n)):s&&(s.d(1),s=null)},i:e,o:e,d(e){s&&s.d(e),e&&y(n)}}}function JA(e,t,n){let s,r,{tab:i}=t,{group:o}=t,{isClickable:a=!0}=t,{isActive:c}=t,l=$();B((()=>{u()}));const u=async()=>{await Te(i.url),n(3,r=!0)};let h=i.favIconUrl&&""!=i.favIconUrl;return e.$$set=e=>{"tab"in e&&n(0,i=e.tab),"group"in e&&n(1,o=e.group),"isClickable"in e&&n(9,a=e.isClickable),"isActive"in e&&n(10,c=e.isActive)},e.$$.update=()=>{1&e.$$.dirty&&n(4,h=i.favIconUrl&&""!=i.favIconUrl)},[i,o,s,r,h,()=>{a&&(n(2,s=!0),l("showTabDetails",i))},()=>{a&&n(2,s=!1)},()=>{chrome.tabs.update(i.id,{active:!0}),chrome.windows.update(i.windowId,{focused:!0}),l("tabIconClicked",i)},e=>{e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("tabId",i.id)},a,c]}class XA extends ye{constructor(e){super(),we(this,e,JA,HA,o,{tab:0,group:1,isClickable:9,isActive:10})}}function YA(e,t,n){const s=e.slice();return s[34]=t[n],s}function ZA(e){let t,n,s,i,o,a,c,l,u,h;function d(e,t){return e[10]?tw:ew}let f=d(e),p=f(e),g=e[9]&&nw(e),v=e[1].length>1&&sw(e);return{c(){t=I("div"),n=I("div"),s=I("div"),i=I("div"),p.c(),o=T(),g&&g.c(),a=T(),v&&v.c(),S(i,"class","tab-details svelte-iwx5jo"),S(s,"class","active-tab svelte-iwx5jo"),S(s,"draggable","true"),S(n,"class","top-container svelte-iwx5jo"),S(t,"class",c="window"+(e[0].incognito?" incognito":"")+(e[11]?" dragover":"")+" svelte-iwx5jo")},m(r,c){w(r,t,c),m(t,n),m(n,s),m(s,i),p.m(i,null),m(i,o),g&&g.m(i,null),m(t,a),v&&v.m(t,null),l=!0,u||(h=[k(s,"dragstart",e[21]),k(t,"mouseenter",e[13]),k(t,"mouseleave",e[14]),k(t,"dragover",e[18]),k(t,"dragleave",e[19]),k(t,"drop",e[20])],u=!0)},p(e,n){f===(f=d(e))&&p?p.p(e,n):(p.d(1),p=f(e),p&&(p.c(),p.m(i,o))),e[9]?g?g.p(e,n):(g=nw(e),g.c(),g.m(i,null)):g&&(g.d(1),g=null),e[1].length>1?v?(v.p(e,n),2&n[0]&&ae(v,1)):(v=sw(e),v.c(),ae(v,1),v.m(t,null)):v&&(ie(),ce(v,1,1,(()=>{v=null})),oe()),(!l||2049&n[0]&&c!==(c="window"+(e[0].incognito?" incognito":"")+(e[11]?" dragover":"")+" svelte-iwx5jo"))&&S(t,"class",c)},i(e){l||(ae(v),l=!0)},o(e){ce(v),l=!1},d(e){e&&y(t),p.d(),g&&g.d(),v&&v.d(),u=!1,r(h)}}}function ew(e){let t,n,s,r,i,o,a,l,u,h=e[3].title+"";return{c(){t=I("img"),i=T(),o=I("span"),a=E(h),c(t.src,n=e[7]?e[3].favIconUrl:xv)||S(t,"src",n),S(t,"alt",s=e[3].url),S(t,"style",r=e[7]?"":"filter: invert(1);"),S(t,"class","svelte-iwx5jo"),S(o,"class","svelte-iwx5jo")},m(n,s){w(n,t,s),w(n,i,s),w(n,o,s),m(o,a),l||(u=k(o,"mouseup",e[17]),l=!0)},p(e,i){136&i[0]&&!c(t.src,n=e[7]?e[3].favIconUrl:xv)&&S(t,"src",n),8&i[0]&&s!==(s=e[3].url)&&S(t,"alt",s),128&i[0]&&r!==(r=e[7]?"":"filter: invert(1);")&&S(t,"style",r),8&i[0]&&h!==(h=e[3].title+"")&&R(a,h)},d(e){e&&y(t),e&&y(i),e&&y(o),l=!1,u()}}}function tw(t){let n,s,r,i;return{c(){n=I("div"),s=I("span"),s.textContent="Close Window",S(s,"class","svelte-iwx5jo"),S(n,"class","close-window-instructions svelte-iwx5jo")},m(e,o){w(e,n,o),m(n,s),r||(i=k(s,"mousedown",t[16]),r=!0)},p:e,d(e){e&&y(n),r=!1,i()}}}function nw(t){let n,s,i,o,a;return{c(){n=I("div"),s=I("img"),S(s,"class","action svelte-iwx5jo"),c(s.src,i=Ve)||S(s,"src",i),S(s,"alt","close"),S(n,"class","actions svelte-iwx5jo")},m(e,r){w(e,n,r),m(n,s),o||(a=[k(s,"mousedown",t[16]),k(s,"mouseenter",t[26]),k(s,"mouseleave",t[27])],o=!0)},p:e,d(e){e&&y(n),o=!1,r(a)}}}function sw(e){let t,n,s,r,i,o;function a(e,t){return e[4]&&!e[10]?iw:rw}let c=a(e),l=c(e),u=e[1].length>1&&ow(e),h=e[12]&&function(e){let t;return{c(){t=I("div"),t.innerHTML='<div class="action">Open New Tab</div> \n                    <div class="action">Close Window</div> \n                    <div class="action">Save Window?</div>',S(t,"class","menu")},m(e,n){w(e,t,n)},d(e){e&&y(t)}}}();return{c(){l.c(),t=T(),n=I("div"),s=I("div"),u&&u.c(),r=T(),h&&h.c(),i=C(),S(s,"class","other-tabs svelte-iwx5jo"),S(n,"class","details svelte-iwx5jo")},m(e,a){l.m(e,a),w(e,t,a),w(e,n,a),m(n,s),u&&u.m(s,null),w(e,r,a),h&&h.m(e,a),w(e,i,a),o=!0},p(e,n){c===(c=a(e))&&l?l.p(e,n):(l.d(1),l=c(e),l&&(l.c(),l.m(t.parentNode,t))),e[1].length>1?u?(u.p(e,n),2&n[0]&&ae(u,1)):(u=ow(e),u.c(),ae(u,1),u.m(s,null)):u&&(ie(),ce(u,1,1,(()=>{u=null})),oe())},i(e){o||(ae(u),o=!0)},o(e){ce(u),o=!1},d(e){l.d(e),e&&y(t),e&&y(n),u&&u.d(),e&&y(r),h&&h.d(e),e&&y(i)}}}function rw(t){let n;return{c(){n=I("div"),S(n,"class","divider svelte-iwx5jo")},m(e,t){w(e,n,t)},p:e,d(e){e&&y(n)}}}function iw(e){let t,n,s,r,i,o,a=(e[4].title.length>0?e[4].title:e[4].color)+"";return{c(){t=I("div"),n=I("div"),s=I("div"),r=E(a),i=T(),o=I("div"),S(s,"class","title svelte-iwx5jo"),S(n,"class","active-group svelte-iwx5jo"),N(n,"background-color",Je[e[4].color]),S(o,"class","spacer svelte-iwx5jo"),S(t,"class","active-group-container svelte-iwx5jo")},m(e,a){w(e,t,a),m(t,n),m(n,s),m(s,r),m(t,i),m(t,o)},p(e,t){16&t[0]&&a!==(a=(e[4].title.length>0?e[4].title:e[4].color)+"")&&R(r,a),16&t[0]&&N(n,"background-color",Je[e[4].color])},d(e){e&&y(t)}}}function ow(e){let t,n,s,r,i=e[8]?e[1]:e[5],o=[];for(let t=0;t<i.length;t+=1)o[t]=aw(YA(e,i,t));const a=e=>ce(o[e],1,1,(()=>{o[e]=null}));let c=!e[8]&&cw(e);return{c(){t=I("div");for(let e=0;e<o.length;e+=1)o[e].c();n=T(),c&&c.c(),s=C(),S(t,"class","tab-icons svelte-iwx5jo")},m(e,i){w(e,t,i);for(let e=0;e<o.length;e+=1)o[e]&&o[e].m(t,null);w(e,n,i),c&&c.m(e,i),w(e,s,i),r=!0},p(e,n){if(4227366&n[0]){let s;for(i=e[8]?e[1]:e[5],s=0;s<i.length;s+=1){const r=YA(e,i,s);o[s]?(o[s].p(r,n),ae(o[s],1)):(o[s]=aw(r),o[s].c(),ae(o[s],1),o[s].m(t,null))}for(ie(),s=i.length;s<o.length;s+=1)a(s);oe()}e[8]?c&&(c.d(1),c=null):c?c.p(e,n):(c=cw(e),c.c(),c.m(s.parentNode,s))},i(e){if(!r){for(let e=0;e<i.length;e+=1)ae(o[e]);r=!0}},o(e){o=o.filter(Boolean);for(let e=0;e<o.length;e+=1)ce(o[e]);r=!1},d(e){e&&y(t),b(o,e),e&&y(n),c&&c.d(e),e&&y(s)}}}function aw(e){let t,n;return t=new XA({props:{tab:e[34],group:e[2][e[34].groupId],isClickable:e[8]}}),t.$on("showTabDetails",e[15]),t.$on("tabIconClicked",e[22]),{c(){ge(t.$$.fragment)},m(e,s){me(t,e,s),n=!0},p(e,n){const s={};290&n[0]&&(s.tab=e[34]),294&n[0]&&(s.group=e[2][e[34].groupId]),256&n[0]&&(s.isClickable=e[8]),t.$set(s)},i(e){n||(ae(t.$$.fragment,e),n=!0)},o(e){ce(t.$$.fragment,e),n=!1},d(e){ve(t,e)}}}function cw(e){let t,n,s,r,i=e[1].length-1+"",o=e[1].length-1>1&&lw();return{c(){t=I("div"),n=E("+"),s=E(i),r=E(" Tab"),o&&o.c(),S(t,"class","count svelte-iwx5jo")},m(e,i){w(e,t,i),m(t,n),m(t,s),m(t,r),o&&o.m(t,null)},p(e,n){2&n[0]&&i!==(i=e[1].length-1+"")&&R(s,i),e[1].length-1>1?o||(o=lw(),o.c(),o.m(t,null)):o&&(o.d(1),o=null)},d(e){e&&y(t),o&&o.d()}}}function lw(e){let t;return{c(){t=E("s")},m(e,n){w(e,t,n)},d(e){e&&y(t)}}}function uw(e){let t,n,s=e[6]&&e[3]&&ZA(e);return{c(){s&&s.c(),t=C()},m(e,r){s&&s.m(e,r),w(e,t,r),n=!0},p(e,n){e[6]&&e[3]?s?(s.p(e,n),72&n[0]&&ae(s,1)):(s=ZA(e),s.c(),ae(s,1),s.m(t.parentNode,t)):s&&(ie(),ce(s,1,1,(()=>{s=null})),oe())},i(e){n||(ae(s),n=!0)},o(e){ce(s),n=!1},d(e){s&&s.d(e),e&&y(t)}}}function hw(e,t,n){let s,r,i,o,a,c=$(),{windowData:l}=t,{tabs:u}=t,{groups:h}=t,{lastUpdatedWindow:d}=t,{lastUpdatedTab:f}=t,{view:p}=t;B((()=>{g(),m(),n(6,o=!0)}));const g=()=>{n(3,s=u.find((e=>e.active))),s&&(n(4,r=h[s.groupId]),n(7,a=s.favIconUrl&&""!=s.favIconUrl))},m=()=>{n(5,i=u.filter((e=>e.index!=s.index&&e.favIconUrl&&""!=e.favIconUrl)).slice(0,5))};let v,A;let w;return e.$$set=e=>{"windowData"in e&&n(0,l=e.windowData),"tabs"in e&&n(1,u=e.tabs),"groups"in e&&n(2,h=e.groups),"lastUpdatedWindow"in e&&n(24,d=e.lastUpdatedWindow),"lastUpdatedTab"in e&&n(25,f=e.lastUpdatedTab),"view"in e&&n(23,p=e.view)},e.$$.update=()=>{50331649&e.$$.dirty[0]&&(null!=d&&d==l.id&&g(),null!=f&&f.windowId==l.id&&g())},[l,u,h,s,r,i,o,a,!0,v,A,w,undefined,()=>{n(9,v=!0)},()=>{n(9,v=!1),g()},({detail:e})=>{n(3,s=e),n(4,r=h[s.groupId]),n(7,a=s.favIconUrl&&""!=s.favIconUrl)},()=>{1==u.length?chrome.tabs.remove(u[0].id):chrome.windows.remove(l.id)},()=>{chrome.tabs.update(s.id,{active:!0}),chrome.windows.update(s.windowId,{focused:!0})},e=>{e.preventDefault(),n(11,w=!0)},e=>{e.preventDefault(),w&&n(11,w=!1)},e=>{e.preventDefault(),w&&n(11,w=!1);const t=parseInt(e.dataTransfer.getData("tabId"));chrome.tabs.move(t,{index:-1,windowId:l.id}),c("tabMoved",t)},e=>{e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("tabId",s.id)},()=>{n(23,p=Ue.tabs)},p,d,f,()=>n(10,A=!0),()=>n(10,A=!1)]}class dw extends ye{constructor(e){super(),we(this,e,hw,uw,o,{windowData:0,tabs:1,groups:2,lastUpdatedWindow:24,lastUpdatedTab:25,view:23},null,[-1,-1])}}function fw(e,t,n){const s=e.slice();return s[8]=t[n],s}function pw(t){let n,s,r,i,o,a,c=!t[4]&&mw(t);return{c(){n=I("div"),s=I("span"),r=E('No results could be found for "'),i=E(t[0]),o=E('"'),a=T(),c&&c.c(),S(s,"class","svelte-1t3adu7"),S(n,"class","no-results-container svelte-1t3adu7")},m(e,t){w(e,n,t),m(n,s),m(s,r),m(s,i),m(s,o),m(n,a),c&&c.m(n,null)},p(e,t){1&t&&R(i,e[0]),e[4]?c&&(c.d(1),c=null):c?c.p(e,t):(c=mw(e),c.c(),c.m(n,null))},i:e,o:e,d(e){e&&y(n),c&&c.d()}}}function gw(e){let t,n,s=[],r=new Map,i=e[1];const o=e=>e[8];for(let t=0;t<i.length;t+=1){let n=fw(e,i,t),a=o(n);r.set(a,s[t]=vw(a,n))}return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=C()},m(e,r){for(let t=0;t<s.length;t+=1)s[t]&&s[t].m(e,r);w(e,t,r),n=!0},p(e,n){14&n&&(i=e[1],ie(),s=fe(s,n,o,1,e,i,r,t.parentNode,de,vw,t,fw),oe())},i(e){if(!n){for(let e=0;e<i.length;e+=1)ae(s[e]);n=!0}},o(e){for(let e=0;e<s.length;e+=1)ce(s[e]);n=!1},d(e){for(let t=0;t<s.length;t+=1)s[t].d(e);e&&y(t)}}}function mw(t){let n,s,r;return{c(){n=I("div"),n.textContent="Search Bookmarks",S(n,"class","bookmarks-permission svelte-1t3adu7")},m(e,i){w(e,n,i),s||(r=k(n,"mousedown",t[5]),s=!0)},p:e,d(e){e&&y(n),s=!1,r()}}}function vw(e,t){let n,s,r;return s=new sA({props:{tab:t[8],selectedTabs:t[2],lastSelectionUpdate:t[3]}}),s.$on("updateSelection",t[6]),{key:e,first:null,c(){n=C(),ge(s.$$.fragment),this.first=n},m(e,t){w(e,n,t),me(s,e,t),r=!0},p(e,n){t=e;const r={};2&n&&(r.tab=t[8]),4&n&&(r.selectedTabs=t[2]),8&n&&(r.lastSelectionUpdate=t[3]),s.$set(r)},i(e){r||(ae(s.$$.fragment,e),r=!0)},o(e){ce(s.$$.fragment,e),r=!1},d(e){e&&y(n),ve(s,e)}}}function Aw(e){let t,n,s,r;const i=[gw,pw],o=[];function a(e,t){return e[1].length>0?0:1}return n=a(e),s=o[n]=i[n](e),{c(){t=I("div"),s.c(),S(t,"class","search-results svelte-1t3adu7")},m(e,s){w(e,t,s),o[n].m(t,null),r=!0},p(e,[r]){let c=n;n=a(e),n===c?o[n].p(e,r):(ie(),ce(o[c],1,1,(()=>{o[c]=null})),oe(),s=o[n],s?s.p(e,r):(s=o[n]=i[n](e),s.c()),ae(s,1),s.m(t,null))},i(e){r||(ae(s),r=!0)},o(e){ce(s),r=!1},d(e){e&&y(t),o[n].d()}}}function ww(e,t,n){let{searchText:s}=t,{searchResults:r}=t,{selectedTabs:i=[]}=t,{lastSelectionUpdate:o=null}=t,{hasBookmarkPermission:a}=t,c=$();return e.$$set=e=>{"searchText"in e&&n(0,s=e.searchText),"searchResults"in e&&n(1,r=e.searchResults),"selectedTabs"in e&&n(2,i=e.selectedTabs),"lastSelectionUpdate"in e&&n(3,o=e.lastSelectionUpdate),"hasBookmarkPermission"in e&&n(4,a=e.hasBookmarkPermission)},[s,r,i,o,a,async()=>{await chrome.permissions.request({permissions:["bookmarks"]})&&c("searchBookmarks")},function(t){V.call(this,e,t)}]}class yw extends ye{constructor(e){super(),we(this,e,ww,Aw,o,{searchText:0,searchResults:1,selectedTabs:2,lastSelectionUpdate:3,hasBookmarkPermission:4})}}function bw(t){let n;return{c(){n=I("div"),S(n,"class","divider svelte-1iv77rr")},m(e,t){w(e,n,t)},p:e,i:e,o:e,d(e){e&&y(n)}}}class Iw extends ye{constructor(e){super(),we(this,e,null,bw,o,{})}}var Ew="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAVJJREFUaEPtmAEKwyAMRdObbSfbdrLtZhsfGghitZofRyHCYGNa/0u+NrrJxdt2cf2SAP/OYGYgM+CMQLSFbru+j1Pn4fBIgKeIPPaZXyKC3/QWBWDFq+gQiAiAmvgwCDaAFQ/f2zWg36mZYAKUngfAew/9fYehrwkWQG3BIuIWAED0hc0C+FZ2mxoAuikEgJAZV2MBQCw+dqs8AoBg/Ed5N7AAalFsAbiibgcnQCOUmYEzPksLpYXO+KTRJy2UFkoLOSPQGI5KNOQMsKKUsG9hnQ+VJ6WAWwFgox86X8Q2WloHAHoSo5wBIiNy5PvyrOw+yCgEMwO9RRsCwQLoideA0SEYAGfFh0B4AUbF0yE8ALPiqRCzAF7xNIgZAJZ4CsQogC0RmHecdncaKjlGAfRSqrzEYpSEtcux7nNnALoPXdkhAVZGuzZXZiAz4IzA5S30A8LUZDFol1lcAAAAAElFTkSuQmCC",Tw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAXJJREFUaEPtV9FuAzEIo1+27su6fdn6Z6ssXSQWJbEbklY3kZdKdwRsMHC92MnP5eT4LQm8u4JZgaxAMAMpoWACw9fVCnyZ2U2I9mlmd2J3PXzhd3S+zQxxh0cl8MscHe+VoAD+I/qj+KjBEagmAKCtTLPsF9yt7JfKeG4UHzXoEMBjRS5ioq1XFYqPGlQEkHnfCytI1OB9DIqPGlQEABjHazhCogZf+6f4qEGDAHTeCqzq3/dBKxHeN8VHDToE8DhCYnT3ZQRmSTDiWwig1HDc0jsD5CeRYruFQJnbPZ0rwEDE75NR82MDIxbtK7UHlHmukAABgOotQiXOH5uVBGZ74mnQT63qCe9KJSbctq+srkBrxkMyZUEtA14c7SJQyymyrYekdxLwUycJ9MqQFSBdWRZXSiglNDnAU0IscTmFcgoxjZD3KaH/LiH8Nfw46+d0UN3a9d09oKEIWCWBQPKWXM0KLEljwElWIJC8JVdPX4EH2MtjMV2PcssAAAAASUVORK5CYII=";function Cw(t){let n,s,r;return{c(){n=I("div"),n.textContent="Group",S(n,"class","action svelte-1qszx3y")},m(e,i){w(e,n,i),s||(r=k(n,"mousedown",t[2]),s=!0)},p:e,d(e){e&&y(n),s=!1,r()}}}function kw(t){let n,s,r;return{c(){n=I("div"),n.textContent="Move to New Window",S(n,"class","action svelte-1qszx3y")},m(e,i){w(e,n,i),s||(r=k(n,"mousedown",t[3]),s=!0)},p:e,d(e){e&&y(n),s=!1,r()}}}function Sw(t){let n,s,i,o,a;return{c(){n=I("div"),n.textContent="Save",s=T(),i=I("div"),i.textContent="Stash",S(n,"class","action svelte-1qszx3y"),S(i,"class","action svelte-1qszx3y")},m(e,r){w(e,n,r),w(e,s,r),w(e,i,r),o||(a=[k(n,"mousedown",t[5]),k(i,"mousedown",t[6])],o=!0)},p:e,d(e){e&&y(n),e&&y(s),e&&y(i),o=!1,r(a)}}}function Rw(t){let n,s,r,i,o,a,c=1!=t[1]&&Cw(t);function l(e,t){return e[0]==Ue.workspace?Sw:kw}let u=l(t),h=u(t);return{c(){n=I("div"),c&&c.c(),s=T(),h.c(),r=T(),i=I("div"),i.textContent="Close",S(i,"class","action svelte-1qszx3y"),S(n,"class","actions svelte-1qszx3y")},m(e,l){w(e,n,l),c&&c.m(n,null),m(n,s),h.m(n,null),m(n,r),m(n,i),o||(a=k(i,"mousedown",t[4]),o=!0)},p(e,[t]){1!=e[1]?c?c.p(e,t):(c=Cw(e),c.c(),c.m(n,s)):c&&(c.d(1),c=null),u===(u=l(e))&&h?h.p(e,t):(h.d(1),h=u(e),h&&(h.c(),h.m(n,r)))},i:e,o:e,d(e){e&&y(n),c&&c.d(),h.d(),o=!1,a()}}}function Dw(e,t,n){let{lastSelectionUpdate:s}=t,{selectedTabs:r}=t,{view:i}=t,o=$(),a=0;B((()=>{c()}));const c=()=>{let e=[];for(const t of r)t.groupId>-1&&!e.includes(t.groupId)&&e.push(t.groupId);n(1,a=e.length)};return e.$$set=e=>{"lastSelectionUpdate"in e&&n(8,s=e.lastSelectionUpdate),"selectedTabs"in e&&n(7,r=e.selectedTabs),"view"in e&&n(0,i=e.view)},e.$$.update=()=>{256&e.$$.dirty&&c()},[i,a,async()=>{const e=await chrome.tabs.group({tabIds:r.map((e=>e.id))});await chrome.tabGroups.update(e,{title:r[0].title}),n(7,r=[])},async()=>{const e=r.shift(),t=await chrome.windows.create({tabId:e.id,focused:!0});await chrome.tabs.move(r.map((e=>e.id)),{windowId:t.id,index:0}),n(7,r=[])},async()=>{chrome.tabs.remove(r.map((e=>e.id))),n(7,r=[])},async()=>{o("saveSelectedTabs")},async()=>{o("stashSelectedTabs")},r,s]}class Nw extends ye{constructor(e){super(),we(this,e,Dw,Rw,o,{lastSelectionUpdate:8,selectedTabs:7,view:0})}}function _w(t){let n,s,r=t[0],i=Pw(t);return{c(){i.c(),n=C()},m(e,t){i.m(e,t),w(e,n,t),s=!0},p(t,s){1&s&&o(r,r=t[0])?(ie(),ce(i,1,1,e),oe(),i=Pw(t),i.c(),ae(i,1),i.m(n.parentNode,n)):i.p(t,s)},i(e){s||(ae(i),s=!0)},o(e){ce(i),s=!1},d(e){e&&y(n),i.d(e)}}}function xw(t){let n;return{c(){n=I("div"),S(n,"class","action spacer svelte-q6eser")},m(e,t){w(e,n,t)},p:e,d(e){e&&y(n)}}}function Uw(t){let n,s,r,i,o;return{c(){n=I("div"),s=I("img"),c(s.src,r=Ew)||S(s,"src",r),S(s,"alt","Merge Windows"),S(s,"class","svelte-q6eser"),S(n,"class","action svelte-q6eser")},m(e,r){w(e,n,r),m(n,s),i||(o=k(n,"mousedown",t[7]),i=!0)},p:e,d(e){e&&y(n),i=!1,o()}}}function Ow(t){let n,s,r,i,o;return{c(){n=I("div"),s=I("img"),c(s.src,r=Tw)||S(s,"src",r),S(s,"alt","Split Groups"),S(s,"class","svelte-q6eser"),S(n,"class","action svelte-q6eser")},m(e,r){w(e,n,r),m(n,s),i||(o=k(n,"mousedown",t[6]),i=!0)},p:e,d(e){e&&y(n),i=!1,o()}}}function Lw(e){let t;return{c(){t=E("s")},m(e,n){w(e,t,n)},d(e){e&&y(t)}}}function Mw(e){let t;return{c(){t=E("s")},m(e,n){w(e,t,n)},d(e){e&&y(t)}}}function Pw(e){let t,n,s,r,i,o,a,l,u,h,d,f,p,g,v,A,b,C,D;function N(e,t){return 1==e[1]&&e[3]>0?Ow:e[1]>1?Uw:xw}let _=N(e),x=_(e),U=e[1]>0&&Lw();l=new Iw({});let O=e[2]>0&&Mw();return{c(){t=I("div"),x.c(),n=T(),s=I("div"),r=I("div"),i=E(e[1]),o=E(" Window"),U&&U.c(),a=T(),ge(l.$$.fragment),u=T(),h=I("div"),d=E(e[2]),f=E(" Tab"),O&&O.c(),p=T(),g=I("div"),v=I("img"),S(r,"class","count"),S(h,"class","count"),S(s,"class","counts svelte-q6eser"),c(v.src,A=ze)||S(v,"src",A),S(v,"alt","Create Window"),S(v,"class","svelte-q6eser"),S(g,"class","action svelte-q6eser"),S(t,"class","home-footer svelte-q6eser")},m(c,A){w(c,t,A),x.m(t,null),m(t,n),m(t,s),m(s,r),m(r,i),m(r,o),U&&U.m(r,null),m(s,a),me(l,s,null),m(s,u),m(s,h),m(h,d),m(h,f),O&&O.m(h,null),m(t,p),m(t,g),m(g,v),b=!0,C||(D=k(g,"mousedown",e[5]),C=!0)},p(e,s){_===(_=N(e))&&x?x.p(e,s):(x.d(1),x=_(e),x&&(x.c(),x.m(t,n))),(!b||2&s)&&R(i,e[1]),e[1]>0?U||(U=Lw(),U.c(),U.m(r,null)):U&&(U.d(1),U=null),(!b||4&s)&&R(d,e[2]),e[2]>0?O||(O=Mw(),O.c(),O.m(h,null)):O&&(O.d(1),O=null)},i(e){b||(ae(l.$$.fragment,e),b=!0)},o(e){ce(l.$$.fragment,e),b=!1},d(e){e&&y(t),x.d(),U&&U.d(),ve(l),O&&O.d(),C=!1,D()}}}function Fw(e){let t,n,s=e[4]&&_w(e);return{c(){s&&s.c(),t=C()},m(e,r){s&&s.m(e,r),w(e,t,r),n=!0},p(e,[n]){e[4]?s?(s.p(e,n),16&n&&ae(s,1)):(s=_w(e),s.c(),ae(s,1),s.m(t.parentNode,t)):s&&(ie(),ce(s,1,1,(()=>{s=null})),oe())},i(e){n||(ae(s),n=!0)},o(e){ce(s),n=!1},d(e){s&&s.d(e),e&&y(t)}}}function Bw(e,t,n){let s,r=$(),{windows:i}=t,{tabs:o}=t,{groups:a}=t,{lastSelectionUpdate:c}=t,{selectedTabs:l}=t,u=0,h=0,d=0;B((()=>{f(),n(4,s=!0)}));const f=()=>{n(1,u=i.length),n(2,h=o.length),n(3,d=Object.keys(a).length),console.log("group count"),console.log(d),console.log(a)};return e.$$set=e=>{"windows"in e&&n(8,i=e.windows),"tabs"in e&&n(9,o=e.tabs),"groups"in e&&n(10,a=e.groups),"lastSelectionUpdate"in e&&n(0,c=e.lastSelectionUpdate),"selectedTabs"in e&&n(11,l=e.selectedTabs)},e.$$.update=()=>{1280&e.$$.dirty&&f()},[c,u,h,d,s,()=>{chrome.windows.create({focused:!0})},async()=>{const e=await chrome.tabGroups.query({});for(const t of e){const e=await chrome.windows.create(),n=(await chrome.tabs.query({windowId:e.id}))[0];await chrome.tabGroups.move(t.id,{windowId:e.id,index:-1}),await chrome.tabs.remove(n.id),await new Promise((e=>setTimeout(e,200)))}r("mergedWindows")},async()=>{const e={windowId:(await chrome.tabs.query({active:!0,currentWindow:!0}))[0].windowId,index:-1},t=await chrome.tabGroups.query({});for(const n of t)try{await chrome.tabGroups.move(n.id,e),await new Promise((e=>setTimeout(e,200)))}catch(e){console.log(e)}let n=await chrome.tabs.query({currentWindow:!1,groupId:-1});n.length>0&&await chrome.tabs.move(n.map((e=>e.id)),e),r("mergedWindows")},i,o,a,l]}class $w extends ye{constructor(e){super(),we(this,e,Bw,Fw,o,{windows:8,tabs:9,groups:10,lastSelectionUpdate:0,selectedTabs:11})}}function Vw(e,t,n){const s=e.slice();return s[24]=t[n],s}function Gw(e,t){let n,s,r,i;function o(...e){return t[12](t[24],...e)}function a(e){t[13](e)}let c={windowData:t[24],groups:t[3],tabs:t[2].filter(o),lastUpdatedWindow:t[5],lastUpdatedTab:t[4]};return void 0!==t[1]&&(c.view=t[1]),s=new dw({props:c}),j.push((()=>pe(s,"view",a))),s.$on("tabMoved",t[14]),{key:e,first:null,c(){n=C(),ge(s.$$.fragment),this.first=n},m(e,t){w(e,n,t),me(s,e,t),i=!0},p(e,n){t=e;const i={};1&n&&(i.windowData=t[24]),8&n&&(i.groups=t[3]),5&n&&(i.tabs=t[2].filter(o)),32&n&&(i.lastUpdatedWindow=t[5]),16&n&&(i.lastUpdatedTab=t[4]),!r&&2&n&&(r=!0,i.view=t[1],H((()=>r=!1))),s.$set(i)},i(e){i||(ae(s.$$.fragment,e),i=!0)},o(e){ce(s.$$.fragment,e),i=!1},d(e){e&&y(n),ve(s,e)}}}function jw(e){let t,n,s=[],r=new Map,i=e[0];const o=e=>e[24];for(let t=0;t<i.length;t+=1){let n=Vw(e,i,t),a=o(n);r.set(a,s[t]=Gw(a,n))}return{c(){t=I("div");for(let e=0;e<s.length;e+=1)s[e].c();S(t,"class","windows svelte-tdd1ze")},m(e,r){w(e,t,r);for(let e=0;e<s.length;e+=1)s[e]&&s[e].m(t,null);n=!0},p(e,[n]){63&n&&(i=e[0],ie(),s=fe(s,n,o,1,e,i,r,t,de,Gw,null,Vw),oe())},i(e){if(!n){for(let e=0;e<i.length;e+=1)ae(s[e]);n=!0}},o(e){for(let e=0;e<s.length;e+=1)ce(s[e]);n=!1},d(e){e&&y(t);for(let e=0;e<s.length;e+=1)s[e].d()}}}function Qw(e,t,n){let{tabs:s}=t,{activeTab:r}=t,{currentWindowId:i}=t,{windows:o}=t,{groups:a}=t,{lastUpdate:c}=t,{lastSelectionUpdate:l}=t,{lastUpdatedTab:u}=t,{lastUpdatedGroup:h}=t,{lastUpdatedWindow:d}=t,{view:f}=t,{selectedTabs:p}=t;B((()=>{g()}));const g=()=>{o.sort(((e,t)=>(t.id==i?1:0)-(e.id==i?1:0)))};return e.$$set=e=>{"tabs"in e&&n(2,s=e.tabs),"activeTab"in e&&n(6,r=e.activeTab),"currentWindowId"in e&&n(7,i=e.currentWindowId),"windows"in e&&n(0,o=e.windows),"groups"in e&&n(3,a=e.groups),"lastUpdate"in e&&n(8,c=e.lastUpdate),"lastSelectionUpdate"in e&&n(9,l=e.lastSelectionUpdate),"lastUpdatedTab"in e&&n(4,u=e.lastUpdatedTab),"lastUpdatedGroup"in e&&n(10,h=e.lastUpdatedGroup),"lastUpdatedWindow"in e&&n(5,d=e.lastUpdatedWindow),"view"in e&&n(1,f=e.view),"selectedTabs"in e&&n(11,p=e.selectedTabs)},e.$$.update=()=>{161&e.$$.dirty&&(n(0,o),n(5,d),n(7,i),o.sort(((e,t)=>(t.id==i?1:0)-(e.id==i?1:0))))},(()=>{const e="".toLowerCase();s.filter((t=>(t.title+t.url).toLowerCase().includes(e)))})(),[o,f,s,a,u,d,r,i,c,l,h,p,(e,t)=>t.windowId==e.id,function(e){f=e,n(1,f)},function(t){V.call(this,e,t)}]}class qw extends ye{constructor(e){super(),we(this,e,Qw,jw,o,{tabs:2,activeTab:6,currentWindowId:7,windows:0,groups:3,lastUpdate:8,lastSelectionUpdate:9,lastUpdatedTab:4,lastUpdatedGroup:10,lastUpdatedWindow:5,view:1,selectedTabs:11})}}var zw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAUhJREFUaEPtWe0OwjAIZE+mPpn6ZOqTaS4ZyVL7QSm1bYTE+GOFcXeUsW6jxW1bPH9yAKMVdAVcgUYGvIQaCWx2zylwJqIrEeG/xu5EdKtxaFmbAoAEkLzWnkR00TrX+KUAvPcgYBPJSI1Vw/qfgCgBAIs1AJB4qF6tf0jWK1eSPQDEQEgVzK2LktkLAIOwSPy0N5JoSfYEYJE8YmBfPfZgX/k6ACuaM3FcgdY22CrSdAogIfyk48Z0ANBRkJT0ITktAOnQ5wAsNvFxJOcRHXGhAlvqPsMV4Mm21I1SJeUAepVQ+K4xbQmFpcNt1LsQmBkxjS6vAM/40r01vAuV2mfpugOQSl1iUnv9PxU4dooZFOBTQvFL/VE2rfTWftEHX+5wt/V81AoAT63RSvDvA1Y0a+O4AlrmrPxcASsmtXFcAS1zVn7LK/ABR550MdJKcwcAAAAASUVORK5CYII=";function Kw(e,t,n){const s=e.slice();return s[14]=t[n][0],s[15]=t[n][1],s}function Ww(e){let t,n,s,r,i,o;function a(){return e[6](e[14])}return{c(){t=I("div"),n=I("div"),r=T(),S(n,"class",s="color "+(e[0].color==e[14]?" selected":"")+" svelte-1aqfk23"),N(n,"background-color",e[15]),S(t,"class","color-container svelte-1aqfk23")},m(e,s){w(e,t,s),m(t,n),m(t,r),i||(o=k(n,"mousedown",a),i=!0)},p(t,r){e=t,1&r&&s!==(s="color "+(e[0].color==e[14]?" selected":"")+" svelte-1aqfk23")&&S(n,"class",s)},d(e){e&&y(t),i=!1,o()}}}function Hw(t){let n,s,i,o,a,c,l,u,h,d,f,p,g=Object.entries(Je),v=[];for(let e=0;e<g.length;e+=1)v[e]=Ww(Kw(t,g,e));return{c(){n=I("div"),s=I("div"),i=T(),o=I("div"),a=I("div"),c=I("input"),l=T(),u=I("div");for(let e=0;e<v.length;e+=1)v[e].c();S(s,"class","background svelte-1aqfk23"),S(c,"type","text"),S(c,"class","title-input svelte-1aqfk23"),S(c,"placeholder","Add Group"),c.autofocus="true",S(a,"class","title svelte-1aqfk23"),S(u,"class","colors svelte-1aqfk23"),S(o,"class","container svelte-1aqfk23"),S(o,"style",h="background-color: "+Je[t[0].color]),S(n,"class","modal svelte-1aqfk23")},m(e,r){w(e,n,r),m(n,s),m(n,i),m(n,o),m(o,a),m(a,c),D(c,t[0].title),m(o,l),m(o,u);for(let e=0;e<v.length;e+=1)v[e]&&v[e].m(u,null);c.focus(),f||(p=[k(s,"mousedown",t[3]),k(c,"input",t[5]),k(c,"blur",t[1]),k(c,"keydown",t[2])],f=!0)},p(e,[t]){if(1&t&&c.value!==e[0].title&&D(c,e[0].title),17&t){let n;for(g=Object.entries(Je),n=0;n<g.length;n+=1){const s=Kw(e,g,n);v[n]?v[n].p(s,t):(v[n]=Ww(s),v[n].c(),v[n].m(u,null))}for(;n<v.length;n+=1)v[n].d(1);v.length=g.length}1&t&&h!==(h="background-color: "+Je[e[0].color])&&S(o,"style",h)},i(e){d||W((()=>{d=ue(n,Fe,{}),d.start()}))},o:e,d(e){e&&y(n),b(v,e),f=!1,r(p)}}}function Jw(e,t,n){let s={title:"",color:"grey"};B((()=>{o()}));let r=[],i=[];const o=async()=>{let e=await chrome.bookmarks.search({url:null});e.sort(((e,t)=>t.dateGroupModified-e.dateGroupModified));const t=Date.now()-24192e5;r=e.filter((e=>e.title.includes("[space"))),i=e.filter((e=>e.dateGroupModified>t&&!e.title.includes("[space"))),a()},a=()=>{};let c=$();const l=e=>{n(0,s.color=e,s)};return[s,()=>{},async e=>{if("Enter"==e.key){const e=await(async()=>{const e=(await chrome.tabs.query({active:!0,currentWindow:!0}))[0];return await chrome.tabs.create({index:e.index+1})})(),t=await chrome.tabs.group({tabIds:e.id});await chrome.tabGroups.update(t,{title:s.title}),c("exitModal")}},()=>{c("exitModal")},l,function(){s.title=this.value,n(0,s)},e=>l(e)]}class Xw extends ye{constructor(e){super(),we(this,e,Jw,Hw,o,{})}}function Yw(t){let n,s;return n=new Xw({}),n.$on("exitModal",t[7]),{c(){ge(n.$$.fragment)},m(e,t){me(n,e,t),s=!0},p:e,i(e){s||(ae(n.$$.fragment,e),s=!0)},o(e){ce(n.$$.fragment,e),s=!1},d(e){ve(n,e)}}}function Zw(e){let t,n,s,r,i,o,a,c,l,u=e[2]>1?"s":"";return c=new Iw({}),{c(){t=I("div"),n=E(e[2]),s=T(),r=I("span"),i=E("Group"),o=E(u),a=T(),ge(c.$$.fragment),S(t,"class","count")},m(e,u){w(e,t,u),m(t,n),m(t,s),m(t,r),m(r,i),m(r,o),w(e,a,u),me(c,e,u),l=!0},p(e,t){(!l||4&t)&&R(n,e[2]),(!l||4&t)&&u!==(u=e[2]>1?"s":"")&&R(o,u)},i(e){l||(ae(c.$$.fragment,e),l=!0)},o(e){ce(c.$$.fragment,e),l=!1},d(e){e&&y(t),e&&y(a),ve(c,e)}}}function ey(e){let t,n,s,i,o,a,l,u,h,d,f,p,g,v,A,b,C,D,N,_,x,U,O=e[0].length+"",L=e[0].length>1?"s":"",M=e[3]&&Yw(e),P=e[2]>0&&Zw(e);return{c(){M&&M.c(),t=T(),n=I("div"),s=I("div"),i=I("img"),a=T(),l=I("div"),u=I("div"),P&&P.c(),h=T(),d=I("div"),f=E(O),p=T(),g=I("span"),v=E("Tab"),A=E(L),b=T(),C=I("div"),D=I("img"),c(i.src,o=zw)||S(i,"src",o),S(i,"alt","Select All"),S(i,"class","svelte-4xqr71"),S(s,"class","action svelte-4xqr71"),S(d,"class","count"),S(u,"class","container svelte-4xqr71"),S(l,"class","counts svelte-4xqr71"),c(D.src,N=rA)||S(D,"src",N),S(D,"alt","Create new tab"),S(D,"class","svelte-4xqr71"),S(C,"class","action svelte-4xqr71"),S(n,"class","main-container svelte-4xqr71")},m(r,o){M&&M.m(r,o),w(r,t,o),w(r,n,o),m(n,s),m(s,i),m(n,a),m(n,l),m(l,u),P&&P.m(u,null),m(u,h),m(u,d),m(d,f),m(d,p),m(d,g),m(g,v),m(g,A),m(n,b),m(n,C),m(C,D),_=!0,x||(U=[k(s,"mousedown",e[5]),k(C,"mousedown",e[4])],x=!0)},p(e,n){e[3]?M?(M.p(e,n),8&n&&ae(M,1)):(M=Yw(e),M.c(),ae(M,1),M.m(t.parentNode,t)):M&&(ie(),ce(M,1,1,(()=>{M=null})),oe()),e[2]>0?P?(P.p(e,n),4&n&&ae(P,1)):(P=Zw(e),P.c(),ae(P,1),P.m(u,h)):P&&(ie(),ce(P,1,1,(()=>{P=null})),oe()),(!_||1&n)&&O!==(O=e[0].length+"")&&R(f,O),(!_||1&n)&&L!==(L=e[0].length>1?"s":"")&&R(A,L)},i(e){_||(ae(M),ae(P),_=!0)},o(e){ce(M),ce(P),_=!1},d(e){M&&M.d(e),e&&y(t),e&&y(n),P&&P.d(),x=!1,r(U)}}}function ty(t){let n,s,r=t[1],i=ey(t);return{c(){i.c(),n=C()},m(e,t){i.m(e,t),w(e,n,t),s=!0},p(t,[s]){2&s&&o(r,r=t[1])?(ie(),ce(i,1,1,e),oe(),i=ey(t),i.c(),ae(i,1),i.m(n.parentNode,n)):i.p(t,s)},i(e){s||(ae(i),s=!0)},o(e){ce(i),s=!1},d(e){e&&y(n),i.d(e)}}}function ny(e,t,n){$();let{tabs:s}=t,{selectedTabs:r}=t,{lastSelectionUpdate:i}=t;B((()=>{a()}));let o=0;const a=()=>{let e=[];for(const t of s)t.groupId>-1&&!e.includes(t.groupId)&&e.push(t.groupId);n(2,o=e.length)};let c;return e.$$set=e=>{"tabs"in e&&n(0,s=e.tabs),"selectedTabs"in e&&n(6,r=e.selectedTabs),"lastSelectionUpdate"in e&&n(1,i=e.lastSelectionUpdate)},[s,i,o,c,async()=>{const e=(await chrome.tabs.query({active:!0,currentWindow:!0}))[0],t=await chrome.tabs.create({index:e.index+1});e.groupId>-1&&await chrome.tabs.group({tabIds:t.id,groupId:e.groupId})},async()=>{const e=await chrome.tabs.query({currentWindow:!0});if(e.filter((e=>e.groupId>-1)).length>0)n(3,c=!0);else{let t=e.map((e=>e.id));await chrome.tabs.update(t[0],{active:!0}),await chrome.tabs.group({tabIds:t})}},r,()=>n(3,c=!1)]}class sy extends ye{constructor(e){super(),we(this,e,ny,ty,o,{tabs:0,selectedTabs:6,lastSelectionUpdate:1})}}function ry(e,t,n){const s=e.slice();return s[26]=t[n],s}function iy(t){let n,s,r=t[0],i=ly(t);return{c(){i.c(),n=C()},m(e,t){i.m(e,t),w(e,n,t),s=!0},p(t,s){1&s&&o(r,r=t[0])?(ie(),ce(i,1,1,e),oe(),i=ly(t),i.c(),ae(i,1),i.m(n.parentNode,n)):i.p(t,s)},i(e){s||(ae(i),s=!0)},o(e){ce(i),s=!1},d(e){e&&y(n),i.d(e)}}}function oy(e){let t,n;function s(...t){return e[18](e[26],...t)}return t=new zA({props:{group:e[5][e[26].groupId],lastGroupUpdate:e[11],lastSelectionUpdate:e[1],lastUpdate:e[0],lastUpdatedTab:e[6],user:e[2],db:e[3],isCollapsed:e[13].includes(e[26].groupId),tabs:e[4].filter(s)}}),t.$on("groupSaved",e[19]),t.$on("showWorkspaceView",e[20]),{c(){ge(t.$$.fragment)},m(e,s){me(t,e,s),n=!0},p(n,r){e=n;const i={};48&r&&(i.group=e[5][e[26].groupId]),2048&r&&(i.lastGroupUpdate=e[11]),2&r&&(i.lastSelectionUpdate=e[1]),1&r&&(i.lastUpdate=e[0]),64&r&&(i.lastUpdatedTab=e[6]),4&r&&(i.user=e[2]),8&r&&(i.db=e[3]),16&r&&(i.isCollapsed=e[13].includes(e[26].groupId)),16&r&&(i.tabs=e[4].filter(s)),t.$set(i)},i(e){n||(ae(t.$$.fragment,e),n=!0)},o(e){ce(t.$$.fragment,e),n=!1},d(e){ve(t,e)}}}function ay(e){let t,n;return t=new sA({props:{db:e[3],tab:e[26],user:e[2],group:e[5][e[26].groupId],selectedTabs:e[7],lastUpdatedTab:e[6],lastSelectionUpdate:e[1],dragoverItem:e[12],isStartingTab:e[26].groupId>-1&&e[9][e[26].groupId]==e[26].index,isEndingTab:e[26].groupId>-1&&e[10][e[26].groupId]==e[26].index}}),t.$on("updateSelection",e[21]),t.$on("saveIconClicked",e[14]),{c(){ge(t.$$.fragment)},m(e,s){me(t,e,s),n=!0},p(e,n){const s={};8&n&&(s.db=e[3]),16&n&&(s.tab=e[26]),4&n&&(s.user=e[2]),48&n&&(s.group=e[5][e[26].groupId]),128&n&&(s.selectedTabs=e[7]),64&n&&(s.lastUpdatedTab=e[6]),2&n&&(s.lastSelectionUpdate=e[1]),528&n&&(s.isStartingTab=e[26].groupId>-1&&e[9][e[26].groupId]==e[26].index),1040&n&&(s.isEndingTab=e[26].groupId>-1&&e[10][e[26].groupId]==e[26].index),t.$set(s)},i(e){n||(ae(t.$$.fragment,e),n=!0)},o(e){ce(t.$$.fragment,e),n=!1},d(e){ve(t,e)}}}function cy(e,t){let n,s,r,i,o=t[26].groupId>-1&&t[9][t[26].groupId]==t[26].index&&t[5][t[26].groupId]&&oy(t),a=!t[5][t[26].groupId]?.collapsed&&ay(t);return{key:e,first:null,c(){n=C(),o&&o.c(),s=T(),a&&a.c(),r=C(),this.first=n},m(e,t){w(e,n,t),o&&o.m(e,t),w(e,s,t),a&&a.m(e,t),w(e,r,t),i=!0},p(e,n){(t=e)[26].groupId>-1&&t[9][t[26].groupId]==t[26].index&&t[5][t[26].groupId]?o?(o.p(t,n),560&n&&ae(o,1)):(o=oy(t),o.c(),ae(o,1),o.m(s.parentNode,s)):o&&(ie(),ce(o,1,1,(()=>{o=null})),oe()),t[5][t[26].groupId]?.collapsed?a&&(ie(),ce(a,1,1,(()=>{a=null})),oe()):a?(a.p(t,n),48&n&&ae(a,1)):(a=ay(t),a.c(),ae(a,1),a.m(r.parentNode,r))},i(e){i||(ae(o),ae(a),i=!0)},o(e){ce(o),ce(a),i=!1},d(e){e&&y(n),o&&o.d(e),e&&y(s),a&&a.d(e),e&&y(r)}}}function ly(e){let t,n,s,r,i=[],o=new Map,a=e[4];const c=e=>e[26].id+""+e[26].index+e[26].updated;for(let t=0;t<a.length;t+=1){let n=ry(e,a,t),s=c(n);o.set(s,i[t]=cy(s,n))}return{c(){t=I("div"),n=T();for(let e=0;e<i.length;e+=1)i[e].c();s=C(),S(t,"class","padding svelte-170p3mb")},m(e,o){w(e,t,o),w(e,n,o);for(let t=0;t<i.length;t+=1)i[t]&&i[t].m(e,o);w(e,s,o),r=!0},p(e,t){32511&t&&(a=e[4],ie(),i=fe(i,t,c,1,e,a,o,s.parentNode,de,cy,s,ry),oe())},i(e){if(!r){for(let e=0;e<a.length;e+=1)ae(i[e]);r=!0}},o(e){for(let e=0;e<i.length;e+=1)ce(i[e]);r=!1},d(e){e&&y(t),e&&y(n);for(let t=0;t<i.length;t+=1)i[t].d(e);e&&y(s)}}}function uy(e){let t,n,s=e[8]&&iy(e);return{c(){s&&s.c(),t=C()},m(e,r){s&&s.m(e,r),w(e,t,r),n=!0},p(e,[n]){e[8]?s?(s.p(e,n),256&n&&ae(s,1)):(s=iy(e),s.c(),ae(s,1),s.m(t.parentNode,t)):s&&(ie(),ce(s,1,1,(()=>{s=null})),oe())},i(e){n||(ae(s),n=!0)},o(e){ce(s),n=!1},d(e){s&&s.d(e),e&&y(t)}}}function hy(e,t,n){let s,r=$(),{user:i}=t,{db:o}=t,{tabs:a}=t,{groups:c}=t,{workspaces:l}=t,{lastUpdatedTab:u}=t,{lastUpdate:h}=t,{lastSelectionUpdate:d}=t,{searchResults:f=[]}=t,{selectedTabs:p=[]}=t,{searchText:g}=t;B((()=>{A(),n(8,s=!0)}));let m={},v={};const A=()=>{n(9,m={}),n(10,v={}),a.sort(((e,t)=>e.index-t.index));for(const e of a)e.groupId>-1&&(null==m[e.groupId]&&n(9,m[e.groupId]=e.index,m),n(10,v[e.groupId]=e.index,v))};let w=Date.now();return e.$$set=e=>{"user"in e&&n(2,i=e.user),"db"in e&&n(3,o=e.db),"tabs"in e&&n(4,a=e.tabs),"groups"in e&&n(5,c=e.groups),"workspaces"in e&&n(15,l=e.workspaces),"lastUpdatedTab"in e&&n(6,u=e.lastUpdatedTab),"lastUpdate"in e&&n(0,h=e.lastUpdate),"lastSelectionUpdate"in e&&n(1,d=e.lastSelectionUpdate),"searchResults"in e&&n(16,f=e.searchResults),"selectedTabs"in e&&n(7,p=e.selectedTabs),"searchText"in e&&n(17,g=e.searchText)},e.$$.update=()=>{65&e.$$.dirty&&((()=>{a.sort(((e,t)=>e.index-t.index));let e=[],t=[];n(9,m={}),n(10,v={});for(const s of a)e.includes(s.index)?(t.push(s.index),r("foundDuplicates")):e.push(s.index),s.groupId>-1&&null==m[s.groupId]?n(9,m[s.groupId]=s.index,m):s.groupId>-1&&n(10,v[s.groupId]=s.index,v)})(),A())},[h,d,i,o,a,c,u,p,s,m,v,w,undefined,[],async({detail:e})=>{const t=e,n=c[t.groupId],s=l.findIndex((e=>e.id==n.workspaceId));if(s>-1){const e=Date.now(),n=l[s];if(i){let s=t.resource;if(i.settings?.saveLocally){const r=await async function(e){return await Ie(Ne(e))??{}}(n.id);r.resources||(r.resources={}),s=r.resources[t.url],s?s.deleted=e:s={...xe(t),id:_e()},s.updated=e,async function(e,t){if(!t)return;t.updated=Date.now();const n={};n[Ne(e.id)]=t,await Ee(n)}(n,r)}i.settings?.saveToCloud&&(s?s.deleted=!0:s={...xe(t),id:_e()},s.updated=e),i.settings?.saveToBookmarks&&t.bookmark}}},l,f,g,(e,t)=>t.groupId==e.groupId,function(t){V.call(this,e,t)},function(t){V.call(this,e,t)},function(t){V.call(this,e,t)}]}class dy extends ye{constructor(e){super(),we(this,e,hy,uy,o,{user:2,db:3,tabs:4,groups:5,workspaces:15,lastUpdatedTab:6,lastUpdate:0,lastSelectionUpdate:1,searchResults:16,selectedTabs:7,searchText:17})}}function fy(e,t,n){const s=e.slice();return s[7]=t[n],s}function py(e){let t,n,s,r,i,o,a,l,u,h=e[7].title+"";function d(){return e[5](e[7])}return{c(){var l;t=I("div"),n=I("img"),r=T(),i=I("span"),o=E(h),a=T(),S(n,"class",(null==(l=e[7].icon?"icon":"")?"":l)+" svelte-ndqqf8"),c(n.src,s=e[7].icon??e[7].iconUrl)||S(n,"src",s),S(n,"alt",""),S(t,"class","menu-item svelte-ndqqf8")},m(e,s){w(e,t,s),m(t,n),m(t,r),m(t,i),m(i,o),m(t,a),l||(u=k(t,"mousedown",d),l=!0)},p(t,n){e=t},d(e){e&&y(t),l=!1,u()}}}function gy(e){let t,n,s,r,i,o,a=e[1],c=[];for(let t=0;t<a.length;t+=1)c[t]=py(fy(e,a,t));return{c(){t=I("div");for(let e=0;e<c.length;e+=1)c[e].c();S(t,"class","menu svelte-ndqqf8")},m(n,s){w(n,t,s);for(let e=0;e<c.length;e+=1)c[e]&&c[e].m(t,null);r=!0,i||(o=k(t,"mouseleave",e[6]),i=!0)},p(e,[n]){if(6&n){let s;for(a=e[1],s=0;s<a.length;s+=1){const r=fy(e,a,s);c[s]?c[s].p(r,n):(c[s]=py(r),c[s].c(),c[s].m(t,null))}for(;s<c.length;s+=1)c[s].d(1);c.length=a.length}},i(e){r||(W((()=>{r&&(s&&s.end(1),n=ue(t,Be,{}),n.start())})),r=!0)},o(e){n&&n.invalidate(),s=he(t,Be,{}),r=!1},d(e){e&&y(t),b(c,e),e&&s&&s.end(),i=!1,o()}}}function my(e,t,n){let{showMenu:s}=t,{user:r}=t,{view:i}=t;const o=[{iconUrl:"https://www.google.com/images/icons/product/chrome_web_store-32.png",title:"Webstore Page",url:"https://chrome.google.com/webstore/detail/window-manager/npaccibollphhdfghmmlbmpljhdiaehh"},{icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABCNJREFUaEPtmXuoT1kUxz+XDDLGKzJDBnlE/lEIGQ3l0SAl5f2H5z9KeUbKH/zjzZQoGlODaZCSZ8gj7/KYf5jE1ESZoUQexSjN9NXet922z/mde84+F3VX/brds/dee33XXnuttdeqojz6Euhi2P8JvCpjq6oSmPYDVgIjPN4ngOXAjZh7xgYwDDgKNEgQ8g0wCjgTC0RMAE2Bh4D+ptEzoB3wOgaILAC+BToA9Sts+AOw2JnzBFhh/l8FtHLGVgMyqTR6BzwA7qdNSgMwBPgJ6JRTU4OBC2ateOU1m7+AGcC5kBxJAAYCl3IKbpf5vP8ryM9VSDWrJAB3ga4FN5wA7DM8pgK7CvLTSXT2eYQAtAEeF9zMLt9r7s74SPzaG0eRegKDHNu1E08CVyIJkZWNzFhu2aXhwCn3Q+gEvgfOegsXARuy7hxpnvZc5/EaAxypAxBJw5XY1J2Aq6GFwMaAysYCvSupssL4dd+uzfyoJxACMAvYUVB4u1yR9ueA44h2iUMAZgPbIwGYCewsE8ACYFNJJnQTOBTgHdWE6uJADlOrOwFXaZ+9CZUZB6Soy4ASRl9ppbrRmHFAiaJOuVYBxIwDpQOYD2wuKQ68NXHgVoB/H2AiMB1oCeROp5MCWQ7vmGtJI1MsO5/3PVBbAPRkbA38ngCzsV9PyvoiS/JCudTpLZoDjAb6Am3NmCp4SjEuAqohqRgWpKwAyogDLYDfAL1z0+gfYBxwNTQpK4AkE1KdU5qrRLeB/c4kXc7DjsbtkAphMh9dXFVHXFoKrPE3ygog5IVqEgcksK1KNwP+AL7xhHkJfGW+zQW2BLSi8swB93tWAKETSNrE31c10JHOx1+AaQHh/jZFXw1NAn4NzNFd6OHWrYoAaALMAxpWsB+VQfRsFMmPh3J/jWUBoHnHTIn+PcOsAGJd4tPA0ATAuqzWrCYDe1IU09FWrWsbgEqW/uW0ctYEgNyuGimZTyBGIFN/QD0D0UFA7+CnFczPHe7vlDeX2Kpd1hOIAUANv3tGomUmQNVA/vdTpQApQu5UbjV4AgNMfu4ylycJBpIKEqjLou6MJblKdS+leQlgAWn8X0fDMrOezrp6JqFTmV6kOKHKdxCAfPHzmqomZb6ySJsKKBn7LmFuVi+k5d0s+KQGx3HPdxfBo3arfW39aFxviF9WAOo3VzcSkwCoi6iQrsywKK13mn/dgTsFT0AmaZuHQROy/HVZ9IhR+FY+npdc9yge6mSuDTB7BHxtvk8BdgfmKKfq5X7P0mbVfHVLvsiLwKTGL5z16vbILfqkLv81I7xA+CThBaKasgIoIHtwqVLpbYAagT6pL6zetEv6pvzogzbXxwJghVOer1508wQNqTW71ZhdsLP/sQFYuWU6Srn1Exi9xmRK+qVG608FQG4T/R/iYfkx+v9TdwAAAABJRU5ErkJggg==",title:"Request Feature",url:"https://docs.google.com/forms/d/e/1FAIpQLSdLZCqil9YIDLXFSZoQGdpque4-tzLjL1cpoHCIR54ZJuu97A/viewform?usp=sf_link"},{icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABGVJREFUaEPtmXnIj1kUxz+vP2RkxlL2NIbsGeugkLFmTZGtZoYkNU2ZLP+MCE2NPyxlSEpRamRPkqXGDDXW8seYyS7G0BBCTDOJ6Pt2f7pd93me+9znXXrznj9/zzn3nO89yz3n/Mqo4VRWw+2nFkB1e/C998BXwGXgXIQnmgDfASeB/RHy5SJFPLAOmGcUzwa25jCiEfAL0MvIrAEW5ZB/y1oEwG2gjaV0IbA2wIgGwM9Af4v3ADAxQPYdliIAvgE2OCeuBBab3z4AugGvTJj9B9QHjgKDLLm/gOHAjaoGIH3zPbeueG4F9HMM+hWoCwx0jP8cuBVjfNEcKOlU6KyOMOBf4yF5IJqKhFBJ6SRgC9Awwgp55UvgboRs4SqkGN8FjI9VbuTkgSFAlCeKeEDJOCrD+FJits/guwr0BJTouSgWgB6gHxI0bQf2AL8BDwxPM1N5pgNTEuR+BL7NZX3gQ9YH+NA6uA6wF9BjZNM/wBzgUIYRqvebgBYePpXdi3lApHlAD84poHvAgYpfhcCTAF6xNAZ+dx7CJFHl2Uzgfx9DGgDV8bOBBo0FDgfyltjGAQcDZRLPz/LAH0DbDCU7AcV2DClXJmcI3gGGAdfyekD8Sr6uluD3ThugTyOAYzHWA6M9nlPyLzXnvTTFIPH4vFXoOuCWRCXjfUvDXGA50NLRquZvhXn0Sp9aA7phm9RWfBJ6IXkBqE7Xsw5/CDR1lKlFUNPmIyW5Etimx56KFmxXMKPR+NpRrmHE7iz1WQNOpwQAyqlPnW+ngQHOb8F2BTMmADgBqJu0Se/GAkDh4dIST0wfN62EzRtsVxajKtBUKySWORb5AISGb4nPB0C5InoB7E6qQGJIA9AuYMioLADuJXSMKaNDzdyadqNVBWAMcMRnSFYI+dxrn1MVALaZVsJ7kVkAXCG3CiUBkMs1Vtqkfummx4pKTeIYAFqvzEqIu82AHjqbqhWAWl+1wDa5j5397bnTmuubzujinBEcGcGMRsFT4KMMZYpZzbk++gn4wvnghqXmCjf8EgtJCAB7oNEg4r6ymgPU29vUIeEhU7jY1Bs47/x2wZrM9A5oJokCoIHmjCdE3MPWWyvGNF2+bxuBrzOE1Nx9BqjveofSPKDVnwCEUA9AN5eHfLefJD8hafjJGmj+BD4OsEputjduASLll2PvR5Nk5IG+wKO8HhC/O9DoN+WAcsGlfaZ8PsuwXgswLcK0EHNJe1V1pyXSHJwaBSFJ7LNnBzDN80EPlbYOapt9pHW6Nhq+gUWT2OAQ19k8sQCaA1dS1ol/m+8KQenQWyHP2et42w7ddOeY7VwsAClXXGoH5E5keS9Rb4vWk/JAbioCQMqU4Bros1aHSYZpTh4JaLUYRUUBSKn+61oFzAC08A0hhYxWKvp/wVvfQw4RT0UAKOnSw6fpTUAU8+5W4h5wCdDuVLukrGoVhKEiAbgK5Q0lpv5i0lIq9+Y5BEFlAgjRX5inFkDhKyx4QI33wBvHb7sxb4NZNQAAAABJRU5ErkJggg==",title:"Report Bug",url:"https://docs.google.com/forms/d/e/1FAIpQLSd1mztaIj3bvp0HvqMIbw1G0d_OXmbLYVRMqD8bsv-07WNt3g/viewform?usp=sf_link"}],a=e=>{e.url?chrome.tabs.create({url:e.url}):e.onClick&&e.onClick()};return e.$$set=e=>{"showMenu"in e&&n(0,s=e.showMenu),"user"in e&&n(3,r=e.user),"view"in e&&n(4,i=e.view)},[s,o,a,r,i,e=>a(e),()=>n(0,s=!1)]}class vy extends ye{constructor(e){super(),we(this,e,my,gy,o,{showMenu:0,user:3,view:4})}}function Ay(e){let t,n,s,r;function i(t){e[12](t)}function o(t){e[13](t)}let a={user:e[2]};return void 0!==e[3]&&(a.showMenu=e[3]),void 0!==e[0]&&(a.view=e[0]),t=new vy({props:a}),j.push((()=>pe(t,"showMenu",i))),j.push((()=>pe(t,"view",o))),{c(){ge(t.$$.fragment)},m(e,n){me(t,e,n),r=!0},p(e,r){const i={};4&r&&(i.user=e[2]),!n&&8&r&&(n=!0,i.showMenu=e[3],H((()=>n=!1))),!s&&1&r&&(s=!0,i.view=e[0],H((()=>s=!1))),t.$set(i)},i(e){r||(ae(t.$$.fragment,e),r=!0)},o(e){ce(t.$$.fragment,e),r=!1},d(e){ve(t,e)}}}function wy(e){let t,n,s,i,o,a,l,u,h,d,f,p,g,v,A,b,E,C,R,D,N,_,x,U,O,L,M,P;function F(t){e[7](t)}let B={placeholderText:e[0]==Ue.saved?"Search":"Search Tabs"};void 0!==e[1]&&(B.searchText=e[1]),s=new qe({props:B}),j.push((()=>pe(s,"searchText",F)));let $=e[3]&&Ay(e);return{c(){t=I("div"),n=I("div"),ge(s.$$.fragment),o=T(),a=I("div"),l=I("img"),d=T(),f=I("div"),p=I("img"),A=T(),b=I("div"),E=I("img"),D=T(),N=I("div"),_=I("img"),O=T(),$&&$.c(),c(l.src,u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAUlJREFUaEPtWVsSwiAMTE+mnkw9mXoyncyYGWwDpCmPYpdfMGQfgVQmGnxMg+dPANBbwcMrcCaia2UVXt/4N22fLQpwwNrJhzlfiOg5B+EFwMw/KjM/D8/JM4if4QXQmn1JepEvAGi+rGAttiyP4gqoviwMIKw3ABBypYihgMFusJBGEixksI4sOa6Fcp2mXC6LBmsFu8lO8xvHpUDrXudORGq7TERDAGCy1XbZC+C9wgallsZUcCnwNwC2FKhVGTkMqigQ86U1Ocs6/rJjEMMDYLXlWA2Bn1IAY19kUgMtFcippSq0JwCpeuPk1fk9AUhdZlF1ACBnXMN87hRKhoACBoZzS6CAxlCPewCnUKgEFMhVbjCPItbICllZQaZrqbzyFC3iHi8wrreK1I/kXwLux2uOaKdp2dSF2hK41RoAaMV0bB8o0FuBD+ZYfDFRgFm8AAAAAElFTkSuQmCC")||S(l,"src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAUlJREFUaEPtWVsSwiAMTE+mnkw9mXoyncyYGWwDpCmPYpdfMGQfgVQmGnxMg+dPANBbwcMrcCaia2UVXt/4N22fLQpwwNrJhzlfiOg5B+EFwMw/KjM/D8/JM4if4QXQmn1JepEvAGi+rGAttiyP4gqoviwMIKw3ABBypYihgMFusJBGEixksI4sOa6Fcp2mXC6LBmsFu8lO8xvHpUDrXudORGq7TERDAGCy1XbZC+C9wgallsZUcCnwNwC2FKhVGTkMqigQ86U1Ocs6/rJjEMMDYLXlWA2Bn1IAY19kUgMtFcippSq0JwCpeuPk1fk9AUhdZlF1ACBnXMN87hRKhoACBoZzS6CAxlCPewCnUKgEFMhVbjCPItbICllZQaZrqbzyFC3iHi8wrreK1I/kXwLux2uOaKdp2dSF2hK41RoAaMV0bB8o0FuBD+ZYfDFRgFm8AAAAAElFTkSuQmCC"),S(l,"alt","Windows"),S(l,"class","svelte-ybq2nb"),S(a,"class",h="action"+(e[0]==Ue.windows?" selected":"")+" svelte-ybq2nb"),c(p.src,g="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAANxJREFUaEPtl1EOgzAMQ92bwck2TjZuxtTPSduSYkeowv0mTv3cKqVh8tUm3z9s4OoEnYATIAn4CJEA6XInQCMkBaIEngAeZA+2fAPQ9/F1RQZeABZ2B4L6n/uMDPTeVxvY/wHIGBAArJOwgTq2OWUnkONU91WUgOeAiL3ngAikXia6A/qOYkUbEAMdlsskMPVj7hhGoi/or9H17P/A9INMz1OsmLkD4pZaORvQ8hxXu0UCngPjB+OjwnOABFhbfotLXIuQVHcCJEC63AnQCEkBJ0ACpMudAI2QFHgD1zsSMQgj6uoAAAAASUVORK5CYII=")||S(p,"src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAANxJREFUaEPtl1EOgzAMQ92bwck2TjZuxtTPSduSYkeowv0mTv3cKqVh8tUm3z9s4OoEnYATIAn4CJEA6XInQCMkBaIEngAeZA+2fAPQ9/F1RQZeABZ2B4L6n/uMDPTeVxvY/wHIGBAArJOwgTq2OWUnkONU91WUgOeAiL3ngAikXia6A/qOYkUbEAMdlsskMPVj7hhGoi/or9H17P/A9INMz1OsmLkD4pZaORvQ8hxXu0UCngPjB+OjwnOABFhbfotLXIuQVHcCJEC63AnQCEkBJ0ACpMudAI2QFHgD1zsSMQgj6uoAAAAASUVORK5CYII="),S(p,"alt","Tabs"),S(p,"class","svelte-ybq2nb"),S(f,"class",v="action"+(e[0]==Ue.tabs?" selected":"")+" svelte-ybq2nb"),c(E.src,C="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAVNJREFUaEPtWUESwiAMjD/Tl6kvU1+ms45po1KGQKBTXS5eSpLNLqlsd7Lxtdt4/UIAazP4VwycROTo6PhVRM4igt9uq5SBi4jsK6sACIDvskoAoHAAwPJ0FGwp6G4gSgCodCCFg7ONlrkuIHoDAN4W+dl+Jc/UCACRIFTG05kaBQCJa4eAsoD9OgWnuj8BKDI7NVrOgPPIZB+3w2QRwP0VAodV5zcBBNFABmreA0HNf4YhA2SgUU+UECVECc33Ev6VaFRD1XZOIU6hKuHMmyghSmhtCSF/iQnQWOfidmttul5kiKh35V7FeeK+GWSfHU1d6vU2ZK1CT8LIZ9XanAzjUgDWm4ksyBMr6XJ7AXgSDnn25wBYE+s2pIX5JJBN9gNJylr0fIUZgdG6hF/5UnPdmqgjCszlgAqyLKz5YgppDgGEtLEhCBloaF7IVjIQ0saGIA9qd5kx3jY3DgAAAABJRU5ErkJggg==")||S(E,"src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAVNJREFUaEPtWUESwiAMjD/Tl6kvU1+ms45po1KGQKBTXS5eSpLNLqlsd7Lxtdt4/UIAazP4VwycROTo6PhVRM4igt9uq5SBi4jsK6sACIDvskoAoHAAwPJ0FGwp6G4gSgCodCCFg7ONlrkuIHoDAN4W+dl+Jc/UCACRIFTG05kaBQCJa4eAsoD9OgWnuj8BKDI7NVrOgPPIZB+3w2QRwP0VAodV5zcBBNFABmreA0HNf4YhA2SgUU+UECVECc33Ev6VaFRD1XZOIU6hKuHMmyghSmhtCSF/iQnQWOfidmttul5kiKh35V7FeeK+GWSfHU1d6vU2ZK1CT8LIZ9XanAzjUgDWm4ksyBMr6XJ7AXgSDnn25wBYE+s2pIX5JJBN9gNJylr0fIUZgdG6hF/5UnPdmqgjCszlgAqyLKz5YgppDgGEtLEhCBloaF7IVjIQ0saGIA9qd5kx3jY3DgAAAABJRU5ErkJggg=="),S(E,"alt","Saved"),S(E,"class","svelte-ybq2nb"),S(b,"class",R="action"+(e[0]==Ue.saved?" selected":"")+" svelte-ybq2nb"),c(_.src,x=He)||S(_,"src",x),S(_,"alt","More"),S(_,"class","svelte-ybq2nb"),S(N,"class",U="action more"+(e[3]?" selected":"")+" svelte-ybq2nb"),S(n,"class","container svelte-ybq2nb"),S(t,"class","header svelte-ybq2nb")},m(r,i){w(r,t,i),m(t,n),me(s,n,null),m(n,o),m(n,a),m(a,l),m(n,d),m(n,f),m(f,p),m(n,A),m(n,b),m(b,E),m(n,D),m(n,N),m(N,_),m(t,O),$&&$.m(t,null),L=!0,M||(P=[k(a,"mousedown",e[8]),k(f,"mousedown",e[9]),k(b,"mousedown",e[10]),k(N,"mousedown",e[11])],M=!0)},p(e,[n]){const r={};1&n&&(r.placeholderText=e[0]==Ue.saved?"Search":"Search Tabs"),!i&&2&n&&(i=!0,r.searchText=e[1],H((()=>i=!1))),s.$set(r),(!L||1&n&&h!==(h="action"+(e[0]==Ue.windows?" selected":"")+" svelte-ybq2nb"))&&S(a,"class",h),(!L||1&n&&v!==(v="action"+(e[0]==Ue.tabs?" selected":"")+" svelte-ybq2nb"))&&S(f,"class",v),(!L||1&n&&R!==(R="action"+(e[0]==Ue.saved?" selected":"")+" svelte-ybq2nb"))&&S(b,"class",R),(!L||8&n&&U!==(U="action more"+(e[3]?" selected":"")+" svelte-ybq2nb"))&&S(N,"class",U),e[3]?$?($.p(e,n),8&n&&ae($,1)):($=Ay(e),$.c(),ae($,1),$.m(t,null)):$&&(ie(),ce($,1,1,(()=>{$=null})),oe())},i(e){L||(ae(s.$$.fragment,e),ae($),L=!0)},o(e){ce(s.$$.fragment,e),ce($),L=!1},d(e){e&&y(t),ve(s),$&&$.d(),M=!1,r(P)}}}function yy(e,t,n){let s,{user:r}=t,{view:i}=t,{windowCount:o}=t,{tabCount:a}=t,{showSearch:c}=t,{searchText:l}=t;return e.$$set=e=>{"user"in e&&n(2,r=e.user),"view"in e&&n(0,i=e.view),"windowCount"in e&&n(4,o=e.windowCount),"tabCount"in e&&n(5,a=e.tabCount),"showSearch"in e&&n(6,c=e.showSearch),"searchText"in e&&n(1,l=e.searchText)},[i,l,r,s,o,a,c,function(e){l=e,n(1,l)},()=>n(0,i=Ue.windows),()=>n(0,i=Ue.tabs),()=>n(0,i=Ue.saved),()=>n(3,s=!0),function(e){s=e,n(3,s)},function(e){i=e,n(0,i)}]}class by extends ye{constructor(e){super(),we(this,e,yy,wy,o,{user:2,view:0,windowCount:4,tabCount:5,showSearch:6,searchText:1})}}function Iy(e,t,n){const s=e.slice();return s[26]=t[n],s}function Ey(e){let t,n,s,i,o,a,c,l,u;function h(e,t){return e[6]?Cy:Ty}let d=h(e),f=d(e);function p(e,t){return e[3]?Sy:ky}let g=p(e),v=g(e),A=e[5]&&Ry(e),b=e[4]&&_y(e);return{c(){t=I("div"),n=I("div"),f.c(),s=T(),v.c(),o=T(),A&&A.c(),a=T(),b&&b.c(),S(n,"class","container svelte-1lhgecd"),S(n,"style",i="background-color: "+Je[e[0].color??"grey"]+";"+(e[5]?"border-radius: 5px 5px 0px 0px;":"")),S(t,"class","workspace svelte-1lhgecd")},m(r,i){w(r,t,i),m(t,n),f.m(n,null),m(n,s),v.m(n,null),m(t,o),A&&A.m(t,null),m(t,a),b&&b.m(t,null),c=!0,l||(u=[k(t,"mouseenter",e[20]),k(t,"mouseleave",e[21])],l=!0)},p(e,r){d===(d=h(e))&&f?f.p(e,r):(f.d(1),f=d(e),f&&(f.c(),f.m(n,s))),g===(g=p(e))&&v?v.p(e,r):(v.d(1),v=g(e),v&&(v.c(),v.m(n,null))),(!c||33&r&&i!==(i="background-color: "+Je[e[0].color??"grey"]+";"+(e[5]?"border-radius: 5px 5px 0px 0px;":"")))&&S(n,"style",i),e[5]?A?(A.p(e,r),32&r&&ae(A,1)):(A=Ry(e),A.c(),ae(A,1),A.m(t,a)):A&&(ie(),ce(A,1,1,(()=>{A=null})),oe()),e[4]?b?(b.p(e,r),16&r&&ae(b,1)):(b=_y(e),b.c(),ae(b,1),b.m(t,null)):b&&(ie(),ce(b,1,1,(()=>{b=null})),oe())},i(e){c||(ae(A),ae(b),c=!0)},o(e){ce(A),ce(b),c=!1},d(e){e&&y(t),f.d(),v.d(),A&&A.d(),b&&b.d(),l=!1,r(u)}}}function Ty(e){let t,n,s,r,i,o,a,c,l=(e[0]?.title??"Untitled Group")+"",u=e[0].tabs.length+"";return{c(){t=I("div"),n=I("span"),s=E(l),r=T(),i=I("div"),o=E("("),a=E(u),c=E(")"),S(n,"class","text svelte-1lhgecd"),S(i,"class","count svelte-1lhgecd"),S(t,"class","title svelte-1lhgecd")},m(e,l){w(e,t,l),m(t,n),m(n,s),m(t,r),m(t,i),m(i,o),m(i,a),m(i,c)},p(e,t){1&t&&l!==(l=(e[0]?.title??"Untitled Group")+"")&&R(s,l),1&t&&u!==(u=e[0].tabs.length+"")&&R(a,u)},d(e){e&&y(t)}}}function Cy(e){let t,n,s,i;return{c(){t=I("input"),S(t,"type","text"),S(t,"class","title-input svelte-1lhgecd"),S(t,"placeholder",n="Enter "+(e[0]?.size?"Workspace":"Group")),t.autofocus="true"},m(n,r){w(n,t,r),D(t,e[0].title),t.focus(),s||(i=[k(t,"input",e[18]),k(t,"blur",e[11]),k(t,"keydown",e[12])],s=!0)},p(e,s){1&s&&n!==(n="Enter "+(e[0]?.size?"Workspace":"Group"))&&S(t,"placeholder",n),1&s&&t.value!==e[0].title&&D(t,e[0].title)},d(e){e&&y(t),s=!1,r(i)}}}function ky(e){let t,n;return{c(){t=I("div"),n=E(e[2]),S(t,"class","time svelte-1lhgecd")},m(e,s){w(e,t,s),m(t,n)},p(e,t){4&t&&R(n,e[2])},d(e){e&&y(t)}}}function Sy(e){let t,n,s,i,o,a,l,u,h,d,f;return{c(){t=I("div"),n=I("img"),i=T(),o=I("img"),l=T(),u=I("img"),c(n.src,s=e[4]?Ke:We)||S(n,"src",s),S(n,"alt","Expand"),S(n,"class","svelte-1lhgecd"),c(o.src,a=He)||S(o,"src",a),S(o,"alt","More"),S(o,"class","svelte-1lhgecd"),c(u.src,h=at)||S(u,"src",h),S(u,"alt","Expand"),S(u,"class","svelte-1lhgecd"),S(t,"class","actions svelte-1lhgecd")},m(s,r){w(s,t,r),m(t,n),m(t,i),m(t,o),m(t,l),m(t,u),d||(f=[k(n,"mousedown",e[7]),k(o,"mousedown",e[8]),k(u,"mousedown",e[14])],d=!0)},p(e,t){16&t&&!c(n.src,s=e[4]?Ke:We)&&S(n,"src",s)},d(e){e&&y(t),d=!1,r(f)}}}function Ry(e){let t,n,s,i,o,a,c,l,u,h,d,f,p,g,v,A,b,C,D,_,x,U,O,L,M,P=e[0]?.size?"Workspace":"Group",F=e[0]?.size?"Workspace":"Group";function B(e,t){return e[0].deleted?Dy:Ny}s=new nt({props:{group:e[0]}}),s.$on("colorSelected",e[9]);let $=B(e),V=$(e);return{c(){t=I("div"),n=I("div"),ge(s.$$.fragment),i=T(),o=I("div"),o.textContent="Edit title",a=T(),c=I("div"),l=T(),u=I("div"),h=E("Open "),d=E(P),f=E(" in Current Window"),p=T(),g=I("div"),v=E("Open "),A=E(F),b=E(" in New Window"),C=T(),D=I("div"),_=T(),V.c(),S(n,"class","group-selection-container"),S(o,"class","action svelte-1lhgecd"),S(c,"class","divider svelte-1lhgecd"),S(u,"class","action svelte-1lhgecd"),S(g,"class","action svelte-1lhgecd"),S(D,"class","divider svelte-1lhgecd"),S(t,"class","more-actions svelte-1lhgecd"),N(t,"border-color","#555555")},m(r,y){w(r,t,y),m(t,n),me(s,n,null),m(t,i),m(t,o),m(t,a),m(t,c),m(t,l),m(t,u),m(u,h),m(u,d),m(u,f),m(t,p),m(t,g),m(g,v),m(g,A),m(g,b),m(t,C),m(t,D),m(t,_),V.m(t,null),O=!0,L||(M=[k(o,"mousedown",e[10]),k(u,"mousedown",e[13]),k(g,"mousedown",e[14]),k(t,"mouseleave",e[19])],L=!0)},p(e,n){const r={};1&n&&(r.group=e[0]),s.$set(r),(!O||1&n)&&P!==(P=e[0]?.size?"Workspace":"Group")&&R(d,P),(!O||1&n)&&F!==(F=e[0]?.size?"Workspace":"Group")&&R(A,F),$===($=B(e))&&V?V.p(e,n):(V.d(1),V=$(e),V&&(V.c(),V.m(t,null)))},i(e){O||(ae(s.$$.fragment,e),W((()=>{O&&(U&&U.end(1),x=ue(t,Be,{}),x.start())})),O=!0)},o(e){ce(s.$$.fragment,e),x&&x.invalidate(),U=he(t,Be,{}),O=!1},d(e){e&&y(t),ve(s),V.d(),e&&U&&U.end(),L=!1,r(M)}}}function Dy(e){let t,n,s,r,i,o=e[0]?.size?"Workspace":"Group";return{c(){t=I("div"),n=E("Restore "),s=E(o),S(t,"class","action svelte-1lhgecd")},m(o,a){w(o,t,a),m(t,n),m(t,s),r||(i=k(t,"mousedown",e[16]),r=!0)},p(e,t){1&t&&o!==(o=e[0]?.size?"Workspace":"Group")&&R(s,o)},d(e){e&&y(t),r=!1,i()}}}function Ny(e){let t,n,s,r,i,o,a,c,l=e[0]?.size?"Workspace":"Group";return{c(){t=I("div"),n=E("Delete "),s=E(l),r=T(),i=I("div"),o=I("span"),o.textContent="Double Click",S(i,"class","spacer svelte-1lhgecd"),S(o,"class","svelte-1lhgecd"),S(t,"class","action svelte-1lhgecd")},m(l,u){w(l,t,u),m(t,n),m(t,s),m(t,r),m(t,i),m(t,o),a||(c=k(t,"dblclick",e[15]),a=!0)},p(e,t){1&t&&l!==(l=e[0]?.size?"Workspace":"Group")&&R(s,l)},d(e){e&&y(t),a=!1,c()}}}function _y(e){let t,n,s=e[0].tabs,r=[];for(let t=0;t<s.length;t+=1)r[t]=xy(Iy(e,s,t));const i=e=>ce(r[e],1,1,(()=>{r[e]=null}));return{c(){t=I("div");for(let e=0;e<r.length;e+=1)r[e].c();S(t,"class","tabs svelte-1lhgecd")},m(e,s){w(e,t,s);for(let e=0;e<r.length;e+=1)r[e]&&r[e].m(t,null);n=!0},p(e,n){if(1&n){let o;for(s=e[0].tabs,o=0;o<s.length;o+=1){const i=Iy(e,s,o);r[o]?(r[o].p(i,n),ae(r[o],1)):(r[o]=xy(i),r[o].c(),ae(r[o],1),r[o].m(t,null))}for(ie(),o=s.length;o<r.length;o+=1)i(o);oe()}},i(e){if(!n){for(let e=0;e<s.length;e+=1)ae(r[e]);n=!0}},o(e){r=r.filter(Boolean);for(let e=0;e<r.length;e+=1)ce(r[e]);n=!1},d(e){e&&y(t),b(r,e)}}}function xy(e){let t,n;return t=new sA({props:{tab:e[26],isOpen:!1}}),{c(){ge(t.$$.fragment)},m(e,s){me(t,e,s),n=!0},p(e,n){const s={};1&n&&(s.tab=e[26]),t.$set(s)},i(e){n||(ae(t.$$.fragment,e),n=!0)},o(e){ce(t.$$.fragment,e),n=!1},d(e){ve(t,e)}}}function Uy(e){let t,n,s=e[1]&&Ey(e);return{c(){s&&s.c(),t=C()},m(e,r){s&&s.m(e,r),w(e,t,r),n=!0},p(e,[n]){e[1]?s?(s.p(e,n),2&n&&ae(s,1)):(s=Ey(e),s.c(),ae(s,1),s.m(t.parentNode,t)):s&&(ie(),ce(s,1,1,(()=>{s=null})),oe())},i(e){n||(ae(s),n=!0)},o(e){ce(s),n=!1},d(e){s&&s.d(e),e&&y(t)}}}function Oy(e,t,n){let s,r,i,{workspace:o}=t,{isOpen:a=!1}=t,c=$();B((()=>{n(2,r=((e,t)=>{if(!e)return"";let n="";const s=Date.now()-e,r=36e5,i=864e5,o=6048e5,a=s/r<1,c=s/i<1,l=s/o<1;return n=s/6e4<1?(s/1e3).toFixed(0)+(t?"s ago":" seconds ago"):a?(s/6e4).toFixed(0)+(t?"m ago":" minutes ago"):c?(s/r).toFixed(0)+(t?"h ago":" hours ago"):l?(s/i).toFixed(0)+(t?"w ago":" days ago"):"number"==typeof s?(s/o).toFixed(0)+(t?"w ago":" weeks ago"):"",n})(o.updated,!0)),n(1,s=!0)}));let l=!1;let u=!1;let h;let d;const f=()=>{c("workspaceUpdated",o),n(6,h=!1)},p=async({openInNewWindow:e})=>{await Ee({workspaceToOpen:{workspace:o,time:Date.now()}});let t,n,s=[];e&&(t=await chrome.windows.create({incognito:o.isIncognito??!1,focused:!0}),n=(await chrome.tabs.query({windowId:t.id}))[0]),0==o.tabs.length&&o.tabs.push({url:""});for(const e of o.tabs)s.push(await chrome.tabs.create({url:e.url,windowId:t?.id}));const r=await chrome.tabs.group({tabIds:s.map((e=>e.id)),createProperties:{windowId:t?.id}});await chrome.tabGroups.update(r,{title:o.title,color:o.color}),n&&await chrome.tabs.remove(n.id)};return e.$$set=e=>{"workspace"in e&&n(0,o=e.workspace),"isOpen"in e&&n(17,a=e.isOpen)},[o,s,r,i,l,u,h,()=>{n(4,l=!l)},()=>{n(5,u=!u),console.log(o)},({detail:e})=>{n(0,o.color=e,o),c("workspaceUpdated",o)},()=>{console.log("edit title"),n(6,h=!0)},e=>{d&&f()},e=>{"Enter"==e.key&&f(),d||(d=!0)},p,async()=>{if(a){if((o.groupId??0)>0){const e=await chrome.tabs.query({groupId:o.groupId});e.length>0&&(chrome.tabs.update(e[0].id,{active:!0}),chrome.windows.update(e[0].windowId,{focused:!0}))}}else p({openInNewWindow:!0})},async()=>{c("deleteWorkspace",o)},async()=>{n(0,o.deleted=null,o),c("workspaceUpdated",o)},a,function(){o.title=this.value,n(0,o)},()=>{n(5,u=!1)},()=>n(3,i=!0),()=>n(3,i=!1)]}class Ly extends ye{constructor(e){super(),we(this,e,Oy,Uy,o,{workspace:0,isOpen:17})}}var My="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAT5JREFUaEPtWdEOwiAQ6/5Mv0z9MvXLNJfMhCFw3W1hYsrz3bjSXhkwYfAxDV4/BCBj8EQy+iDj3LC9GLgCuLizLQNuACxv09gLwCtYxRnAJjZaAEwO7Kqy0slxssU/a2zVAEQkESSBTjOwxthi1ABEJUFXEwz8qrcG4A4gKotgbW5aselbPfBLMirKxyAzLnS0nJo1CoCr3O0B3RhIPb1kALnnsybRBUDeZCUDyF2EdToBYFxIDDR6XRKShGZ5yIVKfbLXr4RcSC7UWAG5kFwo2iBzniQkCUlC/rn2L3Zi+1n7jNK9qoFMY+zelTkXdzkP+BzFIwSA2Qfi6+tnioHhGWAvoHwxrI9w39GYE5lNexQLbn1uQLJoPd8LPnuG+4a2BkC6Sa0XA5/hFp1+KgKAL6VDpAB0WOTmFMMz8Abqt4Ux9FtwDAAAAABJRU5ErkJggg==";function Py(e){let t,n,s,r,i,o;function a(e,t){return e[2]>0?By:Fy}let c=a(e),l=c(e),u=!e[0]&&e[2]>0&&$y(e);return{c(){t=I("div"),n=I("div"),s=T(),r=I("div"),l.c(),i=T(),o=I("div"),u&&u.c(),S(n,"class","action spacer svelte-1c6bchw"),S(r,"class","counts svelte-1c6bchw"),S(o,"class","action svelte-1c6bchw"),S(t,"class","footer svelte-1c6bchw")},m(e,a){w(e,t,a),m(t,n),m(t,s),m(t,r),l.m(r,null),m(t,i),m(t,o),u&&u.m(o,null)},p(e,t){c===(c=a(e))&&l?l.p(e,t):(l.d(1),l=c(e),l&&(l.c(),l.m(r,null))),!e[0]&&e[2]>0?u?u.p(e,t):(u=$y(e),u.c(),u.m(o,null)):u&&(u.d(1),u=null)},d(e){e&&y(t),l.d(),u&&u.d()}}}function Fy(e){let t,n,s,r,i,o,a=e[1]>1?"s":"";return{c(){t=I("div"),n=E(e[1]),s=T(),r=I("span"),i=E("Recent Folder"),o=E(a),S(t,"class","count svelte-1c6bchw")},m(e,a){w(e,t,a),m(t,n),w(e,s,a),w(e,r,a),m(r,i),m(r,o)},p(e,t){2&t&&R(n,e[1]),2&t&&a!==(a=e[1]>1?"s":"")&&R(o,a)},d(e){e&&y(t),e&&y(s),e&&y(r)}}}function By(e){let t,n,s,r,i,o,a=e[2]>1?"s":"";return{c(){t=I("div"),n=E(e[2]),s=T(),r=I("span"),i=E("Saved Group"),o=E(a),S(t,"class","count svelte-1c6bchw")},m(e,a){w(e,t,a),m(t,n),w(e,s,a),w(e,r,a),m(r,i),m(r,o)},p(e,t){4&t&&R(n,e[2]),4&t&&a!==(a=e[2]>1?"s":"")&&R(o,a)},d(e){e&&y(t),e&&y(s),e&&y(r)}}}function $y(t){let n,s,r,i;return{c(){n=I("img"),c(n.src,s=My)||S(n,"src",s),S(n,"alt","Trash"),S(n,"class","svelte-1c6bchw")},m(e,s){w(e,n,s),r||(i=k(n,"mousedown",t[6]),r=!0)},p:e,d(e){e&&y(n),r=!1,i()}}}function Vy(t){let n,s=(t[2]||t[1])&&Py(t);return{c(){s&&s.c(),n=C()},m(e,t){s&&s.m(e,t),w(e,n,t)},p(e,[t]){e[2]||e[1]?s?s.p(e,t):(s=Py(e),s.c(),s.m(n.parentNode,n)):s&&(s.d(1),s=null)},i:e,o:e,d(e){s&&s.d(e),e&&y(n)}}}function Gy(e,t,n){let{updated:s}=t,{showTrash:r}=t,{workspaces:i}=t,{recentFolders:o}=t,a=0,c=0;B((()=>{l()}));const l=()=>{n(1,a=o?.length??0),n(2,c=i?.filter((e=>r?e.deleted:!e.deleted)).length??0)};return e.$$set=e=>{"updated"in e&&n(3,s=e.updated),"showTrash"in e&&n(0,r=e.showTrash),"workspaces"in e&&n(4,i=e.workspaces),"recentFolders"in e&&n(5,o=e.recentFolders)},e.$$.update=()=>{8&e.$$.dirty&&l()},[r,a,c,s,i,o,()=>n(0,r=!0)]}class jy extends ye{constructor(e){super(),we(this,e,Gy,Vy,o,{updated:3,showTrash:0,workspaces:4,recentFolders:5})}}function Qy(e,t,n){const s=e.slice();return s[31]=t[n],s}function qy(e){let t,n,s,r,i,o,a,c,l,u=e[9]&&zy(e);const h=[Wy,Ky],d=[];function f(e,t){return e[2].length>0?0:1}function p(t){e[21](t)}r=f(e),i=d[r]=h[r](e);let g={workspaces:e[2],recentFolders:e[8],updated:e[6]};return void 0!==e[3]&&(g.showTrash=e[3]),a=new jy({props:g}),j.push((()=>pe(a,"showTrash",p))),{c(){u&&u.c(),t=T(),n=I("div"),s=I("div"),i.c(),o=T(),ge(a.$$.fragment),S(s,"class","container svelte-1nov9ln"),S(n,"class","workspaces svelte-1nov9ln")},m(e,i){u&&u.m(e,i),w(e,t,i),w(e,n,i),m(n,s),d[r].m(s,null),m(n,o),me(a,n,null),l=!0},p(e,n){e[9]?u?(u.p(e,n),512&n[0]&&ae(u,1)):(u=zy(e),u.c(),ae(u,1),u.m(t.parentNode,t)):u&&(ie(),ce(u,1,1,(()=>{u=null})),oe());let o=r;r=f(e),r===o?d[r].p(e,n):(ie(),ce(d[o],1,1,(()=>{d[o]=null})),oe(),i=d[r],i?i.p(e,n):(i=d[r]=h[r](e),i.c()),ae(i,1),i.m(s,null));const l={};4&n[0]&&(l.workspaces=e[2]),256&n[0]&&(l.recentFolders=e[8]),64&n[0]&&(l.updated=e[6]),!c&&8&n[0]&&(c=!0,l.showTrash=e[3],H((()=>c=!1))),a.$set(l)},i(e){l||(ae(u),ae(i),ae(a.$$.fragment,e),l=!0)},o(e){ce(u),ce(i),ce(a.$$.fragment,e),l=!1},d(e){u&&u.d(e),e&&y(t),e&&y(n),d[r].d(),ve(a)}}}function zy(e){let t,n,s;return n=new LA({props:{workspace:e[9],user:e[1],db:e[0]}}),n.$on("goBack",e[19]),{c(){t=I("div"),ge(n.$$.fragment),S(t,"class","workspace-preview-container svelte-1nov9ln")},m(e,r){w(e,t,r),me(n,t,null),s=!0},p(e,t){const s={};512&t[0]&&(s.workspace=e[9]),2&t[0]&&(s.user=e[1]),1&t[0]&&(s.db=e[0]),n.$set(s)},i(e){s||(ae(n.$$.fragment,e),s=!0)},o(e){ce(n.$$.fragment,e),s=!1},d(e){e&&y(t),ve(n)}}}function Ky(t){let n;return{c(){n=I("div"),n.innerHTML='<div class="instructions svelte-1nov9ln">Create a tab group to save your first session</div>',S(n,"class","empty-state svelte-1nov9ln")},m(e,t){w(e,n,t)},p:e,i:e,o:e,d(e){e&&y(n)}}}function Wy(e){let t,n,s,r=e[3]&&Hy(e),i=Jy(e);return{c(){r&&r.c(),t=T(),i&&i.c(),n=C()},m(e,o){r&&r.m(e,o),w(e,t,o),i&&i.m(e,o),w(e,n,o),s=!0},p(e,s){e[3]?r?r.p(e,s):(r=Hy(e),r.c(),r.m(t.parentNode,t)):r&&(r.d(1),r=null),i?(i.p(e,s),8&s[0]&&ae(i,1)):(i=Jy(e),i.c(),ae(i,1),i.m(n.parentNode,n))},i(e){s||(ae(i),s=!0)},o(e){ce(i),s=!1},d(e){r&&r.d(e),e&&y(t),i&&i.d(e),e&&y(n)}}}function Hy(t){let n,s,r,i,o,a,l;return{c(){n=I("div"),s=I("img"),i=T(),o=I("span"),o.textContent="Trash",c(s.src,r=ot)||S(s,"src",r),S(s,"alt","back"),S(s,"class","back-action svelte-1nov9ln"),S(n,"class","heading svelte-1nov9ln")},m(e,r){w(e,n,r),m(n,s),m(n,i),m(n,o),a||(l=k(s,"mousedown",t[20]),a=!0)},p:e,d(e){e&&y(n),a=!1,l()}}}function Jy(e){let t,n,s=[],r=new Map,i=e[4];const o=e=>e[31];for(let t=0;t<i.length;t+=1){let n=Qy(e,i,t),a=o(n);r.set(a,s[t]=Xy(a,n))}return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=C()},m(e,r){for(let t=0;t<s.length;t+=1)s[t]&&s[t].m(e,r);w(e,t,r),n=!0},p(e,n){7312&n[0]&&(i=e[4],ie(),s=fe(s,n,o,1,e,i,r,t.parentNode,de,Xy,t,Qy),oe())},i(e){if(!n){for(let e=0;e<i.length;e+=1)ae(s[e]);n=!0}},o(e){for(let e=0;e<s.length;e+=1)ce(s[e]);n=!1},d(e){for(let t=0;t<s.length;t+=1)s[t].d(e);e&&y(t)}}}function Xy(e,t){let n,s,r;return s=new Ly({props:{workspace:t[31],isOpen:t[7].includes(t[31].id)}}),s.$on("deleteWorkspace",t[11]),s.$on("workspaceUpdated",t[10]),s.$on("expandWorkspace",t[12]),{key:e,first:null,c(){n=C(),ge(s.$$.fragment),this.first=n},m(e,t){w(e,n,t),me(s,e,t),r=!0},p(e,n){t=e;const r={};16&n[0]&&(r.workspace=t[31]),144&n[0]&&(r.isOpen=t[7].includes(t[31].id)),s.$set(r)},i(e){r||(ae(s.$$.fragment,e),r=!0)},o(e){ce(s.$$.fragment,e),r=!1},d(e){e&&y(n),ve(s,e)}}}function Yy(e){let t,n,s=e[5]&&qy(e);return{c(){s&&s.c(),t=C()},m(e,r){s&&s.m(e,r),w(e,t,r),n=!0},p(e,n){e[5]?s?(s.p(e,n),32&n[0]&&ae(s,1)):(s=qy(e),s.c(),ae(s,1),s.m(t.parentNode,t)):s&&(ie(),ce(s,1,1,(()=>{s=null})),oe())},i(e){n||(ae(s),n=!0)},o(e){ce(s),n=!1},d(e){s&&s.d(e),e&&y(t)}}}function Zy(e,t,n){let s,r,i,{db:o}=t,{user:a}=t,{searchText:c}=t,{workspaces:l}=t,{workspacesLoaded:u}=t,{activeTab:h}=t,{groups:d}=t,{lastUpdatedGroup:f}=t,p=[];B((()=>{g()}));const g=()=>{l?.sort(((e,t)=>t.updated-e.updated)),A(),n(5,r=!0)};let m=[];let v;const A=()=>{let e=c.toLowerCase(),t=[],s={};for(const n of l){if(v){n.deleted&&t.push(n);continue}if(n.deleted)continue;if((n.title??"").toLowerCase().includes(e)&&!0){t.push(n);const e=n.color??"grey";s[e]||(s[e]=0),s[e]+=1}}n(6,i=Date.now()),n(4,p=t),w=s};let w={};const y=async e=>{if(await ke(e),a){const t=xf(o,ct.userContext(a.id,e.id));await Ep(t,e,{merge:!0})}};let b;return e.$$set=e=>{"db"in e&&n(0,o=e.db),"user"in e&&n(1,a=e.user),"searchText"in e&&n(13,c=e.searchText),"workspaces"in e&&n(2,l=e.workspaces),"workspacesLoaded"in e&&n(14,u=e.workspacesLoaded),"activeTab"in e&&n(15,h=e.activeTab),"groups"in e&&n(16,d=e.groups),"lastUpdatedGroup"in e&&n(17,f=e.lastUpdatedGroup)},e.$$.update=()=>{155652&e.$$.dirty[0]&&(u&&l?.sort(((e,t)=>t.updated-e.updated)),(async()=>{n(7,m=Object.values(await Ie("openGroups")??{}))})(),A()),262152&e.$$.dirty[0]&&A()},[o,a,l,v,p,r,i,m,[],b,async({detail:e})=>{const t=e;console.log("workspace updated"),y(t)},async({detail:e})=>{const t=e;if(await Re(t),a){const e=xf(o,ct.userContext(a.id,t.id));await(n=e,Tp(Tf(n.firestore,Of),[new iu(n._key,zl.none())]))}var n;const s=l.findIndex((e=>e.id==t.id));s>-1&&l.splice(s,1),A()},({detail:e})=>{n(9,b=e)},c,u,h,d,f,s,()=>n(9,b=null),()=>n(3,v=!1),function(e){v=e,n(3,v)}]}class eb extends ye{constructor(e){super(),we(this,e,Zy,Yy,o,{db:0,user:1,searchText:13,workspaces:2,workspacesLoaded:14,activeTab:15,groups:16,lastUpdatedGroup:17},null,[-1,-1])}}function tb(e){let t,n;return{c(){t=I("div"),n=E(e[2]),S(t,"class","error svelte-1dme0dl")},m(e,s){w(e,t,s),m(t,n)},p(e,t){4&t&&R(n,e[2])},d(e){e&&y(t)}}}function nb(t){let n,s,i,o,a,c,l,u,h,d,f,p,g,v=t[2]&&tb(t);return{c(){n=I("div"),s=I("div"),i=I("div"),i.textContent="Sign in",o=T(),a=I("div"),c=I("input"),l=T(),u=I("input"),h=T(),d=I("div"),d.textContent="Sign in",f=T(),v&&v.c(),S(i,"class","title svelte-1dme0dl"),S(c,"type","email"),S(c,"placeholder","Email"),S(c,"class","svelte-1dme0dl"),S(u,"type","password"),S(u,"placeholder","Password"),S(u,"class","svelte-1dme0dl"),S(d,"class","signin button svelte-1dme0dl"),S(a,"class","signin-with-email svelte-1dme0dl"),S(s,"class","container svelte-1dme0dl"),S(n,"class","signin-page svelte-1dme0dl")},m(e,r){w(e,n,r),m(n,s),m(s,i),m(s,o),m(s,a),m(a,c),D(c,t[0]),m(a,l),m(a,u),D(u,t[1]),m(a,h),m(a,d),m(a,f),v&&v.m(a,null),p||(g=[k(c,"input",t[6]),k(u,"input",t[7]),k(d,"mousedown",t[3])],p=!0)},p(e,[t]){1&t&&c.value!==e[0]&&D(c,e[0]),2&t&&u.value!==e[1]&&D(u,e[1]),e[2]?v?v.p(e,t):(v=tb(e),v.c(),v.m(a,null)):v&&(v.d(1),v=null)},i:e,o:e,d(e){e&&y(n),v&&v.d(),p=!1,r(g)}}}function sb(e,t,n){let s,r,i,o,a,{fbApp:c}=t;new Hg,B((()=>{c&&(s=mv(c),n(5,r=!0))}));return e.$$set=e=>{"fbApp"in e&&n(4,c=e.fbApp)},e.$$.update=()=>{48&e.$$.dirty&&c&&(s=mv(c))},[i,o,a,()=>{if(i&&(i.includes("@")||i.includes(".")))if(o)try{sm(s,i,o).then((e=>{console.log(e),Ee({auth:i,password:o})}))}catch(e){console.log(e)}else n(2,a="Please provide a password");else n(2,a="Please enter a valid")},c,r,function(){i=this.value,n(0,i)},function(){o=this.value,n(1,o)}]}class rb extends ye{constructor(e){super(),we(this,e,sb,nb,o,{fbApp:4})}}function ib(e){let t,n,s,r;const i=[ab,ob],o=[];function a(e,t){return e[17].length>0?0:e[0]!=Ue.workspace?1:-1}return~(n=a(e))&&(s=o[n]=i[n](e)),{c(){t=I("div"),s&&s.c(),S(t,"class","container header svelte-62fd6d")},m(e,s){w(e,t,s),~n&&o[n].m(t,null),r=!0},p(e,r){let c=n;n=a(e),n===c?~n&&o[n].p(e,r):(s&&(ie(),ce(o[c],1,1,(()=>{o[c]=null})),oe()),~n?(s=o[n],s?s.p(e,r):(s=o[n]=i[n](e),s.c()),ae(s,1),s.m(t,null)):s=null)},i(e){r||(ae(s),r=!0)},o(e){ce(s),r=!1},d(e){e&&y(t),~n&&o[n].d()}}}function ob(e){let t,n,s,r;function i(t){e[29](t)}function o(t){e[30](t)}let a={user:e[3],windows:e[8],windowCount:e[8]?.length??0,tabCount:e[5]?.filter(e[28])?.length??0};return void 0!==e[0]&&(a.view=e[0]),void 0!==e[18]&&(a.searchText=e[18]),t=new by({props:a}),j.push((()=>pe(t,"view",i))),j.push((()=>pe(t,"searchText",o))),{c(){ge(t.$$.fragment)},m(e,n){me(t,e,n),r=!0},p(e,r){const i={};8&r[0]&&(i.user=e[3]),256&r[0]&&(i.windows=e[8]),256&r[0]&&(i.windowCount=e[8]?.length??0),1056&r[0]&&(i.tabCount=e[5]?.filter(e[28])?.length??0),!n&&1&r[0]&&(n=!0,i.view=e[0],H((()=>n=!1))),!s&&262144&r[0]&&(s=!0,i.searchText=e[18],H((()=>s=!1))),t.$set(i)},i(e){r||(ae(t.$$.fragment,e),r=!0)},o(e){ce(t.$$.fragment,e),r=!1},d(e){ve(t,e)}}}function ab(t){let n,s,r=t[21],i=cb(t);return{c(){i.c(),n=C()},m(e,t){i.m(e,t),w(e,n,t),s=!0},p(t,s){2097152&s[0]&&o(r,r=t[21])?(ie(),ce(i,1,1,e),oe(),i=cb(t),i.c(),ae(i,1),i.m(n.parentNode,n)):i.p(t,s)},i(e){s||(ae(i),s=!0)},o(e){ce(i),s=!1},d(e){e&&y(n),i.d(e)}}}function cb(e){let t,n,s;function r(t){e[27](t)}let i={};return void 0!==e[17]&&(i.selectedTabs=e[17]),t=new Me({props:i}),j.push((()=>pe(t,"selectedTabs",r))),{c(){ge(t.$$.fragment)},m(e,n){me(t,e,n),s=!0},p(e,s){const r={};!n&&131072&s[0]&&(n=!0,r.selectedTabs=e[17],H((()=>n=!1))),t.$set(r)},i(e){s||(ae(t.$$.fragment,e),s=!0)},o(e){ce(t.$$.fragment,e),s=!1},d(e){ve(t,e)}}}function lb(e){let t,n;return t=new LA({props:{tabs:e[5].filter(e[41]),group:e[19],db:e[4],user:e[3],lastUpdate:e[11],lastUpdatedTab:e[12],lastSelectionUpdate:e[21]}}),t.$on("goBack",e[42]),{c(){ge(t.$$.fragment)},m(e,s){me(t,e,s),n=!0},p(e,n){const s={};524320&n[0]&&(s.tabs=e[5].filter(e[41])),524288&n[0]&&(s.group=e[19]),16&n[0]&&(s.db=e[4]),8&n[0]&&(s.user=e[3]),2048&n[0]&&(s.lastUpdate=e[11]),4096&n[0]&&(s.lastUpdatedTab=e[12]),2097152&n[0]&&(s.lastSelectionUpdate=e[21]),t.$set(s)},i(e){n||(ae(t.$$.fragment,e),n=!0)},o(e){ce(t.$$.fragment,e),n=!1},d(e){ve(t,e)}}}function ub(e){let t,n,s;function r(t){e[40](t)}let i={user:e[3],db:e[4],groups:e[6],activeTab:e[9],lastUpdatedGroup:e[13],workspacesLoaded:e[7],searchText:e[18]};return void 0!==e[1]&&(i.workspaces=e[1]),t=new eb({props:i}),j.push((()=>pe(t,"workspaces",r))),{c(){ge(t.$$.fragment)},m(e,n){me(t,e,n),s=!0},p(e,s){const r={};8&s[0]&&(r.user=e[3]),16&s[0]&&(r.db=e[4]),64&s[0]&&(r.groups=e[6]),512&s[0]&&(r.activeTab=e[9]),8192&s[0]&&(r.lastUpdatedGroup=e[13]),128&s[0]&&(r.workspacesLoaded=e[7]),262144&s[0]&&(r.searchText=e[18]),!n&&2&s[0]&&(n=!0,r.workspaces=e[1],H((()=>n=!1))),t.$set(r)},i(e){s||(ae(t.$$.fragment,e),s=!0)},o(e){ce(t.$$.fragment,e),s=!1},d(e){ve(t,e)}}}function hb(e){let t,n,s;function r(t){e[36](t)}let i={tabs:e[5].filter(e[35]),user:e[3],db:e[4],groups:e[6],lastUpdate:e[11],selectedTabs:e[17],lastUpdatedTab:e[12],lastSelectionUpdate:e[21],workspaces:e[1],searchResults:e[22]};return void 0!==e[18]&&(i.searchText=e[18]),t=new dy({props:i}),j.push((()=>pe(t,"searchText",r))),t.$on("updateSelection",e[24]),t.$on("tabBookmarkAdded",e[37]),t.$on("foundDuplicates",e[38]),t.$on("groupSaved",e[39]),t.$on("showWorkspaceView",e[25]),{c(){ge(t.$$.fragment)},m(e,n){me(t,e,n),s=!0},p(e,s){const r={};1056&s[0]&&(r.tabs=e[5].filter(e[35])),8&s[0]&&(r.user=e[3]),16&s[0]&&(r.db=e[4]),64&s[0]&&(r.groups=e[6]),2048&s[0]&&(r.lastUpdate=e[11]),131072&s[0]&&(r.selectedTabs=e[17]),4096&s[0]&&(r.lastUpdatedTab=e[12]),2097152&s[0]&&(r.lastSelectionUpdate=e[21]),2&s[0]&&(r.workspaces=e[1]),4194304&s[0]&&(r.searchResults=e[22]),!n&&262144&s[0]&&(n=!0,r.searchText=e[18],H((()=>n=!1))),t.$set(r)},i(e){s||(ae(t.$$.fragment,e),s=!0)},o(e){ce(t.$$.fragment,e),s=!1},d(e){ve(t,e)}}}function db(e){let t,n,s,r;function i(t){e[32](t)}function o(t){e[33](t)}let a={tabs:e[5],groups:e[6],activeTab:e[9],lastUpdate:e[11],lastSelectionUpdate:e[21],lastUpdatedTab:e[12],lastUpdatedGroup:e[13],lastUpdatedWindow:e[14],windows:e[8],currentWindowId:e[10]};return void 0!==e[17]&&(a.selectedTabs=e[17]),void 0!==e[0]&&(a.view=e[0]),t=new qw({props:a}),j.push((()=>pe(t,"selectedTabs",i))),j.push((()=>pe(t,"view",o))),t.$on("updateSelection",e[24]),t.$on("tabMoved",e[34]),{c(){ge(t.$$.fragment)},m(e,n){me(t,e,n),r=!0},p(e,r){const i={};32&r[0]&&(i.tabs=e[5]),64&r[0]&&(i.groups=e[6]),512&r[0]&&(i.activeTab=e[9]),2048&r[0]&&(i.lastUpdate=e[11]),2097152&r[0]&&(i.lastSelectionUpdate=e[21]),4096&r[0]&&(i.lastUpdatedTab=e[12]),8192&r[0]&&(i.lastUpdatedGroup=e[13]),16384&r[0]&&(i.lastUpdatedWindow=e[14]),256&r[0]&&(i.windows=e[8]),1024&r[0]&&(i.currentWindowId=e[10]),!n&&131072&r[0]&&(n=!0,i.selectedTabs=e[17],H((()=>n=!1))),!s&&1&r[0]&&(s=!0,i.view=e[0],H((()=>s=!1))),t.$set(i)},i(e){r||(ae(t.$$.fragment,e),r=!0)},o(e){ce(t.$$.fragment,e),r=!1},d(e){ve(t,e)}}}function fb(e){let t,n;return t=new yw({props:{searchText:e[18],searchResults:e[22],lastSelectionUpdate:e[21],selectedTabs:e[17],hasBookmarkPermission:e[2]}}),t.$on("updateSelection",e[31]),t.$on("searchBookmarks",e[26]),{c(){ge(t.$$.fragment)},m(e,s){me(t,e,s),n=!0},p(e,n){const s={};262144&n[0]&&(s.searchText=e[18]),4194304&n[0]&&(s.searchResults=e[22]),2097152&n[0]&&(s.lastSelectionUpdate=e[21]),131072&n[0]&&(s.selectedTabs=e[17]),4&n[0]&&(s.hasBookmarkPermission=e[2]),t.$set(s)},i(e){n||(ae(t.$$.fragment,e),n=!0)},o(e){ce(t.$$.fragment,e),n=!1},d(e){ve(t,e)}}}function pb(e){let t,n,s,r;const i=[vb,mb,gb],o=[];function a(e,t){return e[17].length>0?0:e[0]==Ue.windows?1:e[0]==Ue.tabs?2:-1}return~(n=a(e))&&(s=o[n]=i[n](e)),{c(){t=I("div"),s&&s.c(),S(t,"class","container footer svelte-62fd6d")},m(e,s){w(e,t,s),~n&&o[n].m(t,null),r=!0},p(e,r){let c=n;n=a(e),n===c?~n&&o[n].p(e,r):(s&&(ie(),ce(o[c],1,1,(()=>{o[c]=null})),oe()),~n?(s=o[n],s?s.p(e,r):(s=o[n]=i[n](e),s.c()),ae(s,1),s.m(t,null)):s=null)},i(e){r||(ae(s),r=!0)},o(e){ce(s),r=!1},d(e){e&&y(t),~n&&o[n].d()}}}function gb(e){let t,n,s;function r(t){e[47](t)}let i={tabs:e[5].filter(e[46]),lastSelectionUpdate:e[21]};return void 0!==e[17]&&(i.selectedTabs=e[17]),t=new sy({props:i}),j.push((()=>pe(t,"selectedTabs",r))),{c(){ge(t.$$.fragment)},m(e,n){me(t,e,n),s=!0},p(e,s){const r={};1056&s[0]&&(r.tabs=e[5].filter(e[46])),2097152&s[0]&&(r.lastSelectionUpdate=e[21]),!n&&131072&s[0]&&(n=!0,r.selectedTabs=e[17],H((()=>n=!1))),t.$set(r)},i(e){s||(ae(t.$$.fragment,e),s=!0)},o(e){ce(t.$$.fragment,e),s=!1},d(e){ve(t,e)}}}function mb(e){let t,n;return t=new $w({props:{windows:e[8],tabs:e[5],groups:e[6],lastSelectionUpdate:e[21],selectedTabs:e[17]}}),t.$on("mergedWindows",e[45]),{c(){ge(t.$$.fragment)},m(e,s){me(t,e,s),n=!0},p(e,n){const s={};256&n[0]&&(s.windows=e[8]),32&n[0]&&(s.tabs=e[5]),64&n[0]&&(s.groups=e[6]),2097152&n[0]&&(s.lastSelectionUpdate=e[21]),131072&n[0]&&(s.selectedTabs=e[17]),t.$set(s)},i(e){n||(ae(t.$$.fragment,e),n=!0)},o(e){ce(t.$$.fragment,e),n=!1},d(e){ve(t,e)}}}function vb(e){let t,n,s;function r(t){e[44](t)}let i={lastSelectionUpdate:e[21],view:e[0]};return void 0!==e[17]&&(i.selectedTabs=e[17]),t=new Nw({props:i}),j.push((()=>pe(t,"selectedTabs",r))),{c(){ge(t.$$.fragment)},m(e,n){me(t,e,n),s=!0},p(e,s){const r={};2097152&s[0]&&(r.lastSelectionUpdate=e[21]),1&s[0]&&(r.view=e[0]),!n&&131072&s[0]&&(n=!0,r.selectedTabs=e[17],H((()=>n=!1))),t.$set(r)},i(e){s||(ae(t.$$.fragment,e),s=!0)},o(e){ce(t.$$.fragment,e),s=!1},d(e){ve(t,e)}}}function Ab(e){let t,n,s,r,i,o,a,c=ib(e);const l=[fb,db,hb,ub,lb],u=[];function h(e,t){return e[18].length>0&&e[0]!=Ue.saved?0:e[0]==Ue.windows?1:e[0]==Ue.tabs?2:e[0]==Ue.saved?3:e[0]==Ue.workspace?4:-1}~(r=h(e))&&(i=u[r]=l[r](e));let d=e[23]&&pb(e);return{c(){t=I("main"),c&&c.c(),n=T(),s=I("div"),i&&i.c(),o=T(),d&&d.c(),S(s,"class","body svelte-62fd6d"),S(t,"class","svelte-62fd6d")},m(i,l){w(i,t,l),c&&c.m(t,null),m(t,n),m(t,s),~r&&u[r].m(s,null),e[43](s),m(t,o),d&&d.m(t,null),a=!0},p(e,o){c?(c.p(e,o),229376&o[0]&&ae(c,1)):(c=ib(e),c.c(),ae(c,1),c.m(t,n));let a=r;r=h(e),r===a?~r&&u[r].p(e,o):(i&&(ie(),ce(u[a],1,1,(()=>{u[a]=null})),oe()),~r?(i=u[r],i?i.p(e,o):(i=u[r]=l[r](e),i.c()),ae(i,1),i.m(s,null)):i=null),e[23]?d?(d.p(e,o),8388608&o[0]&&ae(d,1)):(d=pb(e),d.c(),ae(d,1),d.m(t,null)):d&&(ie(),ce(d,1,1,(()=>{d=null})),oe())},i(e){a||(ae(c),ae(i),ae(d),a=!0)},o(e){ce(c),ce(i),ce(d),a=!1},d(n){n&&y(t),c&&c.d(),~r&&u[r].d(),e[43](null),d&&d.d()}}}function wb(e,t,n){let s,r,i,o,{user:a}=t,{db:c}=t,{view:l}=t,{tabs:u}=t,{groups:h}=t,{workspaces:d}=t,{workspacesLoaded:f}=t,{windows:p}=t,{activeTab:g}=t,{currentWindowId:m}=t,{lastUpdate:v}=t,{lastUpdatedTab:A}=t,{lastUpdatedGroup:w}=t,{lastUpdatedWindow:y}=t,{hasBookmarkPermission:b}=t,I=0;B((()=>{E()})),function(e){F().$$.on_destroy.push(e)}((()=>{T()}));const E=()=>{o=i.addEventListener("scroll",(e=>{const t=I-i.scrollTop;r?t<0&&n(15,r=!1):t>0&&n(15,r=!0),n(16,I=i.scrollTop)}))},T=()=>{i.removeEventListener("scroll",o)};let C,k=[];let S="",R=[];const D=async()=>{const e=S.toLowerCase();n(22,R=u.filter((t=>(t.title+" "+t.url).toLowerCase().includes(e)))),R.length>0||!b||b&&n(22,R=await chrome.bookmarks.search({query:e}))};let N;return e.$$set=e=>{"user"in e&&n(3,a=e.user),"db"in e&&n(4,c=e.db),"view"in e&&n(0,l=e.view),"tabs"in e&&n(5,u=e.tabs),"groups"in e&&n(6,h=e.groups),"workspaces"in e&&n(1,d=e.workspaces),"workspacesLoaded"in e&&n(7,f=e.workspacesLoaded),"windows"in e&&n(8,p=e.windows),"activeTab"in e&&n(9,g=e.activeTab),"currentWindowId"in e&&n(10,m=e.currentWindowId),"lastUpdate"in e&&n(11,v=e.lastUpdate),"lastUpdatedTab"in e&&n(12,A=e.lastUpdatedTab),"lastUpdatedGroup"in e&&n(13,w=e.lastUpdatedGroup),"lastUpdatedWindow"in e&&n(14,y=e.lastUpdatedWindow),"hasBookmarkPermission"in e&&n(2,b=e.hasBookmarkPermission)},e.$$.update=()=>{264192&e.$$.dirty[0]&&""!=S&&D(),229377&e.$$.dirty[0]&&n(23,N=k.length>0||l!=Ue.saved&&l!=Ue.workspace&&!0)},[l,d,b,a,c,u,h,f,p,g,m,v,A,w,y,r,I,k,S,s,i,C,R,N,({detail:e})=>{const t=e,s=k.findIndex((e=>e.id==t.id));s>-1?k.splice(s,1):k.push(t),n(21,C=Date.now())},async({detail:e})=>{if(n(19,s=e),g.groupId!=s.id){const e=(await chrome.tabs.query({groupId:s.id}))[0];await chrome.tabs.update(e.id,{active:!0})}n(0,l=Ue.workspace)},()=>{n(2,b=!0),D()},function(e){k=e,n(17,k)},e=>e.windowId==m,function(e){l=e,n(0,l)},function(e){S=e,n(18,S)},function(t){V.call(this,e,t)},function(e){k=e,n(17,k)},function(e){l=e,n(0,l)},function(t){V.call(this,e,t)},e=>e.windowId==m,function(e){S=e,n(18,S)},function(t){V.call(this,e,t)},function(t){V.call(this,e,t)},function(t){V.call(this,e,t)},function(e){d=e,n(1,d)},e=>e.groupId==s.id,()=>n(0,l=Ue.tabs),function(e){j[e?"unshift":"push"]((()=>{i=e,n(20,i)}))},function(e){k=e,n(17,k)},function(t){V.call(this,e,t)},e=>e.windowId==m,function(e){k=e,n(17,k)}]}class yb extends ye{constructor(e){super(),we(this,e,wb,Ab,o,{user:3,db:4,view:0,tabs:5,groups:6,workspaces:1,workspacesLoaded:7,windows:8,activeTab:9,currentWindowId:10,lastUpdate:11,lastUpdatedTab:12,lastUpdatedGroup:13,lastUpdatedWindow:14,hasBookmarkPermission:2},null,[-1,-1])}}
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
En("firebase","9.23.0","app");const bb={apiKey:"AIzaSyDCQVQMSqV-lEib8zxjvVc0-l4YkcfHs9A",authDomain:"tsundoku-9b453.firebaseapp.com",projectId:"tsundoku-9b453",storageBucket:"tsundoku-9b453.appspot.com",messagingSenderId:"214768069951",appId:"1:214768069951:web:d7d1a2e08f7f57d601b78a",measurementId:"G-33RVLBLNV0"};function Ib(e,t,n){let s,r,i,{user:o}=t,{db:a}=t,{userRef:c}=t,{fbApp:l}=t,{authLoaded:u}=t,{view:h}=t;$(),B((async()=>{d()}));const d=async()=>{await f(),n(4,u=Date.now())},f=async()=>{try{n(3,l=bn(bb)),s=mv(),n(1,a=function(e,t){const n="string"==typeof e?e:t||"(default)",s=vn("object"==typeof e?e:In(),"firestore").getImmediate({identifier:n});if(!s._initialized){const e=vt("firestore");e&&Sf(s,...e)}return s}(l)),e=p,xt(s).onAuthStateChanged(e,t,r),i=!0,console.log("firebase connected")}catch(t){console.log("could not connect to firebase"),console.log(t)}var e,t,r},p=async e=>{if(console.log("auth change"),r=e,r)await m();else{console.log("checking stored auth");const e=await Ie("auth");e?.password?g(e):console.log("user not logged in")}},g=e=>{try{sm(s,e.email,e.password)}catch(e){n(5,h=Ue.signin)}},m=async()=>{n(2,c=xf(a,"users",r.uid)),n(0,o=(await yp(c)).data()??{}),o?.created||(n(0,o.id=r.uid,o),n(0,o.accessCode=accessCode??createUserId(),o),n(0,o.created=Date.now(),o),n(0,o.createdOnMobile=isMobile,o),n(0,o.userAgent=navigator.userAgent,o),n(0,o.hasChrome=hasChrome,o),n(0,o.language=navigator.language,o),await Ep(c,o)),n(4,u=Date.now())};return e.$$set=e=>{"user"in e&&n(0,o=e.user),"db"in e&&n(1,a=e.db),"userRef"in e&&n(2,c=e.userRef),"fbApp"in e&&n(3,l=e.fbApp),"authLoaded"in e&&n(4,u=e.authLoaded),"view"in e&&n(5,h=e.view)},[o,a,c,l,u,h]}class Eb extends ye{constructor(e){super(),we(this,e,Ib,null,o,{user:0,db:1,userRef:2,fbApp:3,authLoaded:4,view:5})}}function Tb(e,t,n){let{db:s}=t,{user:r}=t,{userRef:i}=t,{activeTab:o}=t,{workspaces:a}=t,{authLoaded:c}=t,{groups:l}=t,{workspacesLoaded:u}=t,{lastUpdatedGroup:h}=t,{resources:d}=t;B((()=>{}));const f=async()=>{let e=[];e=r?.cloudSync?await p():await Se(),n(0,a=e.filter((e=>(e.isIncognito??!1)==o.incognito))),n(1,u=Date.now())},p=async()=>{const e=Date.now()-2592e6;let t={},n={};const i=await Se();for(const e of i)t[e.id]={context:e},n[e.id]=e,"Edvo"==e.title&&(console.log("local edvo context"),console.log(e));const o=(await Ip(_f(s,ct.userContexts(r.id)))).docs.map((e=>e.data()));for(const s of o){const r=t[s.id];if("Edvo"==s.title&&(console.log("remote edvo context"),console.log(s)),r){const e=t[s.id].context,r=e.updated??e.created;r<s.updated?(t[s.id].context=s,t[s.id].local=!0,n[s.id]=s):r>s.updated?n[s.id]=e:(delete t[s.id],n[s.id]=s)}else s.updated>e?(t[s.id]={context:s,local:!0},n[s.id]=s):n[s.id]=s}const a=Object.values(t).filter((e=>e.local)).map((e=>e.context));g(a);const c=await Ie("openGroups"),l=Object.values(c),u=a.filter((e=>l.includes(e.id)));v(u,c);const h=Object.values(t).filter((e=>!e.local)).map((e=>e.context));return console.log("server contexts to update"),console.log(h),m(h),Object.values(n)},g=async e=>{for(let t of e)await ke(t,!1)},m=async e=>{for(let t of e)await Ep(xf(s,ct.userContext(r.id,t.id)),t,{merge:!0})},v=async(e,t)=>{let n={};for(const[e,s]of Object.entries(t))n[s]=e;for(const t of e){const e=parseInt(n[t.id]),s=await chrome.tabs.query({groupId:e});let r=[],i={};for(const e of s)i[e.url]=e;for(const e of t.tabs)i[e.url]?delete i[e.url]:r.push(e);for(let t of r)t=await chrome.tabs.create({url:t.url}),await chrome.tabs.group({tabIds:t.id,groupId:e});await chrome.tabs.remove(Object.values(i).map((e=>e.id)))}};return e.$$set=e=>{"db"in e&&n(2,s=e.db),"user"in e&&n(3,r=e.user),"userRef"in e&&n(4,i=e.userRef),"activeTab"in e&&n(5,o=e.activeTab),"workspaces"in e&&n(0,a=e.workspaces),"authLoaded"in e&&n(6,c=e.authLoaded),"groups"in e&&n(7,l=e.groups),"workspacesLoaded"in e&&n(1,u=e.workspacesLoaded),"lastUpdatedGroup"in e&&n(8,h=e.lastUpdatedGroup),"resources"in e&&n(9,d=e.resources)},e.$$.update=()=>{64&e.$$.dirty&&f(),256&e.$$.dirty&&(async()=>{if(!h)return;const e=(await Ie("openGroups"))[h],t=a.findIndex((t=>t.id==e));if(t>-1){console.log("found workspace");const s=await Ce(e);n(0,a[t]=s,a)}else f()})()},[a,u,s,r,i,o,c,l,h,d]}class Cb extends ye{constructor(e){super(),we(this,e,Tb,null,o,{db:2,user:3,userRef:4,activeTab:5,workspaces:0,authLoaded:6,groups:7,workspacesLoaded:1,lastUpdatedGroup:8,resources:9})}}function kb(e,t,n){let{tabs:s=[]}=t,{groups:r=[]}=t,{windows:i=[]}=t,{activeTab:o}=t,{resources:a=[]}=t,{lastRefresh:c}=t,{lastUpdate:l}=t,{lastUpdatedTab:u}=t,{lastUpdatedWindow:h}=t,{lastUpdatedGroup:d}=t,{currentWindowId:f}=t,{view:p}=t;B((()=>{m()}));let{windowsLoaded:g}=t;const m=async()=>{await y(),await be(),await A(),b(),n(10,g=!0)};let{hasBookmarkPermission:v}=t;const A=async()=>{n(0,s=await chrome.tabs.query({})),n(2,i=await chrome.windows.getAll());const e=await chrome.tabGroups.query({}),t=await Ie("openGroups");console.log("open groups"),console.log(t);let o={};for(let n of e)o[n.id]||(n.workspaceId=t[n.id],o[n.id]=n);n(1,r=o);for(let e of i)e=w(e)},w=e=>{e.groups={},e.tabs=[];for(const t of s)t.windowId==e.id&&(e.tabs.push(t),t.groupId>-1&&!e.groups[t.groupId]&&(e.groups[t.groupId]=r[t.groupId]));return e},y=async()=>{n(3,o=(await chrome.tabs.query({active:!0,windowId:await chrome.windows.WINDOW_ID_CURRENT}))[0]),f||n(8,f=o.windowId)},b=()=>{chrome.tabs.onActivated.addListener(I),chrome.tabs.onCreated.addListener(E),chrome.tabs.onUpdated.addListener(T),chrome.tabs.onMoved.addListener(C),chrome.tabs.onRemoved.addListener(k),chrome.tabGroups.onCreated.addListener(N),chrome.tabGroups.onUpdated.addListener(_),chrome.tabGroups.onRemoved.addListener(x),chrome.windows.onCreated.addListener(R),chrome.windows.onRemoved.addListener(D),v&&(chrome.bookmarks.onCreated.addListener(U),chrome.bookmarks.onRemoved.addListener(O))},I=async({tabId:e,windowId:t})=>{const r=s.findIndex((e=>e.windowId==t&&e.active)),i=s.findIndex((t=>t.id==e));i>-1&&(r>-1&&(n(0,s[r].active=!1,s),n(5,u=s[r])),n(0,s[i].active=!0,s),n(3,o=s[i]),n(5,u=s[i])),p==Ue.windows&&t==f&&n(9,p=Ue.tabs)},E=async e=>{e.updated=Date.now(),n(0,s=[...s,e]),S(e.windowId,e.id)},T=(e,t)=>{let r=s.findIndex((t=>t.id==e));if(r>-1){let e={...s[r],...t};e.updated=Date.now(),n(0,s[r]=e,s),n(0,s),n(5,u=e)}},C=async(e,{windowId:t,toIndex:r,fromIndex:o})=>{const a=s.findIndex((t=>t.id==e));if(-1==a)return void console.log("could not find tab");s[a].windowId!=t&&n(0,s[a].windowId=t,s);const c=i.find((e=>e.id==t));c||n(2,i=[...i,await chrome.windows.get(t)]),S(t,e)},k=e=>{const t=s.findIndex((t=>t.id==e));if(t>-1){const n={...s[t]};s.splice(t,1),n&&S(n.windowId,e)}},S=async(e,t)=>{let r=await chrome.tabs.query({windowId:e});for(const e of r){const r=s.findIndex((t=>t.id==e.id));if(r>-1){let i=s[r];i.id==t&&(i.updated=Date.now()),n(0,s[r]={...i,...e},s)}else s.push(e)}s.sort(((e,t)=>e.index-t.index)),n(0,s),n(4,l=Date.now()),n(6,h=e)},R=e=>{n(2,i=[...i,e]),setTimeout((()=>{S(e.id)}),500)},D=e=>{const t=i.findIndex((t=>t.id==e));t>-1&&i.splice(t,1),n(2,i)},N=async e=>{e.new=!0,n(1,r[e.id]=e,r),(async e=>{let t=await chrome.tabs.query({groupId:e});for(const e of t){const t=s.findIndex((t=>t.id==e.id));t>-1?n(0,s[t]={...s[t],...e},s):s.push(e)}s.sort(((e,t)=>e.index-t.index)),n(0,s),n(7,d=e),t.length>0&&t[0].windowId&&n(6,h=t[0].windowId)})(e.windowId),n(7,d=e.id),n(4,l=Date.now())},_=e=>{n(1,r[e.id]={...r[e.id],...e},r),delete r[e.id].new,n(7,d=e.id)},x=e=>{delete r[e],n(7,d=e)},U=async()=>{},O=async()=>{};return e.$$set=e=>{"tabs"in e&&n(0,s=e.tabs),"groups"in e&&n(1,r=e.groups),"windows"in e&&n(2,i=e.windows),"activeTab"in e&&n(3,o=e.activeTab),"resources"in e&&n(11,a=e.resources),"lastRefresh"in e&&n(12,c=e.lastRefresh),"lastUpdate"in e&&n(4,l=e.lastUpdate),"lastUpdatedTab"in e&&n(5,u=e.lastUpdatedTab),"lastUpdatedWindow"in e&&n(6,h=e.lastUpdatedWindow),"lastUpdatedGroup"in e&&n(7,d=e.lastUpdatedGroup),"currentWindowId"in e&&n(8,f=e.currentWindowId),"view"in e&&n(9,p=e.view),"windowsLoaded"in e&&n(10,g=e.windowsLoaded),"hasBookmarkPermission"in e&&n(13,v=e.hasBookmarkPermission)},e.$$.update=()=>{4096&e.$$.dirty[0]&&A()},[s,r,i,o,l,u,h,d,f,p,g,a,c,v]}class Sb extends ye{constructor(e){super(),we(this,e,kb,null,o,{tabs:0,groups:1,windows:2,activeTab:3,resources:11,lastRefresh:12,lastUpdate:4,lastUpdatedTab:5,lastUpdatedWindow:6,lastUpdatedGroup:7,currentWindowId:8,view:9,windowsLoaded:10,hasBookmarkPermission:13},null,[-1,-1])}}function Rb(e){let t,n,s,r,i,o,a,c,l,u,h,d,f,p,g,m,v,A,b,I,E,k,S,R,D,N;function _(t){e[22](t)}function x(t){e[23](t)}function U(t){e[24](t)}function O(t){e[25](t)}function L(t){e[26](t)}function M(t){e[27](t)}let P={};function F(t){e[28](t)}function B(t){e[29](t)}function $(t){e[30](t)}function V(t){e[31](t)}function G(t){e[32](t)}function Q(t){e[33](t)}function q(t){e[34](t)}function z(t){e[35](t)}function K(t){e[36](t)}function W(t){e[37](t)}function J(t){e[38](t)}function X(t){e[39](t)}function Y(t){e[40](t)}function Z(t){e[41](t)}void 0!==e[6]&&(P.user=e[6]),void 0!==e[7]&&(P.userRef=e[7]),void 0!==e[8]&&(P.db=e[8]),void 0!==e[9]&&(P.fbApp=e[9]),void 0!==e[17]&&(P.authLoaded=e[17]),void 0!==e[16]&&(P.view=e[16]),t=new Eb({props:P}),j.push((()=>pe(t,"user",_))),j.push((()=>pe(t,"userRef",x))),j.push((()=>pe(t,"db",U))),j.push((()=>pe(t,"fbApp",O))),j.push((()=>pe(t,"authLoaded",L))),j.push((()=>pe(t,"view",M)));let ee={db:e[8]};void 0!==e[10]&&(ee.lastRefresh=e[10]),void 0!==e[18]&&(ee.windowsLoaded=e[18]),void 0!==e[5]&&(ee.activeTab=e[5]),void 0!==e[1]&&(ee.groups=e[1]),void 0!==e[2]&&(ee.windows=e[2]),void 0!==e[0]&&(ee.tabs=e[0]),void 0!==e[11]&&(ee.lastUpdate=e[11]),void 0!==e[12]&&(ee.lastUpdatedTab=e[12]),void 0!==e[14]&&(ee.lastUpdatedGroup=e[14]),void 0!==e[13]&&(ee.lastUpdatedWindow=e[13]),void 0!==e[15]&&(ee.currentWindowId=e[15]),void 0!==e[16]&&(ee.view=e[16]),void 0!==e[21]&&(ee.hasBookmarkPermission=e[21]),void 0!==e[4]&&(ee.resources=e[4]),l=new Sb({props:ee}),j.push((()=>pe(l,"lastRefresh",F))),j.push((()=>pe(l,"windowsLoaded",B))),j.push((()=>pe(l,"activeTab",$))),j.push((()=>pe(l,"groups",V))),j.push((()=>pe(l,"windows",G))),j.push((()=>pe(l,"tabs",Q))),j.push((()=>pe(l,"lastUpdate",q))),j.push((()=>pe(l,"lastUpdatedTab",z))),j.push((()=>pe(l,"lastUpdatedGroup",K))),j.push((()=>pe(l,"lastUpdatedWindow",W))),j.push((()=>pe(l,"currentWindowId",J))),j.push((()=>pe(l,"view",X))),j.push((()=>pe(l,"hasBookmarkPermission",Y))),j.push((()=>pe(l,"resources",Z)));let te=e[17]&&e[18]&&Db(e);return{c(){ge(t.$$.fragment),c=T(),ge(l.$$.fragment),R=T(),te&&te.c(),D=C()},m(e,n){me(t,e,n),w(e,c,n),me(l,e,n),w(e,R,n),te&&te.m(e,n),w(e,D,n),N=!0},p(e,c){const w={};!n&&64&c[0]&&(n=!0,w.user=e[6],H((()=>n=!1))),!s&&128&c[0]&&(s=!0,w.userRef=e[7],H((()=>s=!1))),!r&&256&c[0]&&(r=!0,w.db=e[8],H((()=>r=!1))),!i&&512&c[0]&&(i=!0,w.fbApp=e[9],H((()=>i=!1))),!o&&131072&c[0]&&(o=!0,w.authLoaded=e[17],H((()=>o=!1))),!a&&65536&c[0]&&(a=!0,w.view=e[16],H((()=>a=!1))),t.$set(w);const y={};256&c[0]&&(y.db=e[8]),!u&&1024&c[0]&&(u=!0,y.lastRefresh=e[10],H((()=>u=!1))),!h&&262144&c[0]&&(h=!0,y.windowsLoaded=e[18],H((()=>h=!1))),!d&&32&c[0]&&(d=!0,y.activeTab=e[5],H((()=>d=!1))),!f&&2&c[0]&&(f=!0,y.groups=e[1],H((()=>f=!1))),!p&&4&c[0]&&(p=!0,y.windows=e[2],H((()=>p=!1))),!g&&1&c[0]&&(g=!0,y.tabs=e[0],H((()=>g=!1))),!m&&2048&c[0]&&(m=!0,y.lastUpdate=e[11],H((()=>m=!1))),!v&&4096&c[0]&&(v=!0,y.lastUpdatedTab=e[12],H((()=>v=!1))),!A&&16384&c[0]&&(A=!0,y.lastUpdatedGroup=e[14],H((()=>A=!1))),!b&&8192&c[0]&&(b=!0,y.lastUpdatedWindow=e[13],H((()=>b=!1))),!I&&32768&c[0]&&(I=!0,y.currentWindowId=e[15],H((()=>I=!1))),!E&&65536&c[0]&&(E=!0,y.view=e[16],H((()=>E=!1))),!k&&2097152&c[0]&&(k=!0,y.hasBookmarkPermission=e[21],H((()=>k=!1))),!S&&16&c[0]&&(S=!0,y.resources=e[4],H((()=>S=!1))),l.$set(y),e[17]&&e[18]?te?(te.p(e,c),393216&c[0]&&ae(te,1)):(te=Db(e),te.c(),ae(te,1),te.m(D.parentNode,D)):te&&(ie(),ce(te,1,1,(()=>{te=null})),oe())},i(e){N||(ae(t.$$.fragment,e),ae(l.$$.fragment,e),ae(te),N=!0)},o(e){ce(t.$$.fragment,e),ce(l.$$.fragment,e),ce(te),N=!1},d(e){ve(t,e),e&&y(c),ve(l,e),e&&y(R),te&&te.d(e),e&&y(D)}}}function Db(e){let t,n,s,r,i,o,a,c,l,u,h;function d(t){e[42](t)}function f(t){e[43](t)}function p(t){e[44](t)}function g(t){e[45](t)}function m(t){e[46](t)}let v={db:e[8],userRef:e[7],authLoaded:e[17],activeTab:e[5],lastUpdatedGroup:e[14]};void 0!==e[4]&&(v.resources=e[4]),void 0!==e[6]&&(v.user=e[6]),void 0!==e[3]&&(v.workspaces=e[3]),void 0!==e[1]&&(v.groups=e[1]),void 0!==e[19]&&(v.workspacesLoaded=e[19]),t=new Cb({props:v}),j.push((()=>pe(t,"resources",d))),j.push((()=>pe(t,"user",f))),j.push((()=>pe(t,"workspaces",p))),j.push((()=>pe(t,"groups",g))),j.push((()=>pe(t,"workspacesLoaded",m)));const A=[_b,Nb],b=[];function I(e,t){return e[16]==Ue.signin?0:1}return c=I(e),l=b[c]=A[c](e),{c(){ge(t.$$.fragment),a=T(),l.c(),u=C()},m(e,n){me(t,e,n),w(e,a,n),b[c].m(e,n),w(e,u,n),h=!0},p(e,a){const h={};256&a[0]&&(h.db=e[8]),128&a[0]&&(h.userRef=e[7]),131072&a[0]&&(h.authLoaded=e[17]),32&a[0]&&(h.activeTab=e[5]),16384&a[0]&&(h.lastUpdatedGroup=e[14]),!n&&16&a[0]&&(n=!0,h.resources=e[4],H((()=>n=!1))),!s&&64&a[0]&&(s=!0,h.user=e[6],H((()=>s=!1))),!r&&8&a[0]&&(r=!0,h.workspaces=e[3],H((()=>r=!1))),!i&&2&a[0]&&(i=!0,h.groups=e[1],H((()=>i=!1))),!o&&524288&a[0]&&(o=!0,h.workspacesLoaded=e[19],H((()=>o=!1))),t.$set(h);let d=c;c=I(e),c===d?b[c].p(e,a):(ie(),ce(b[d],1,1,(()=>{b[d]=null})),oe(),l=b[c],l?l.p(e,a):(l=b[c]=A[c](e),l.c()),ae(l,1),l.m(u.parentNode,u))},i(e){h||(ae(t.$$.fragment,e),ae(l),h=!0)},o(e){ce(t.$$.fragment,e),ce(l),h=!1},d(e){ve(t,e),e&&y(a),b[c].d(e),e&&y(u)}}}function Nb(e){let t,n,s,r,i;function o(t){e[47](t)}function a(t){e[48](t)}function c(t){e[49](t)}let l={db:e[8],user:e[6],workspacesLoaded:e[19],activeTab:e[5],groups:e[1],windows:e[2],tabs:e[0],lastUpdate:e[11],lastUpdatedTab:e[12],lastUpdatedGroup:e[14],lastUpdatedWindow:e[13],currentWindowId:e[15]};return void 0!==e[16]&&(l.view=e[16]),void 0!==e[3]&&(l.workspaces=e[3]),void 0!==e[21]&&(l.hasBookmarkPermission=e[21]),t=new yb({props:l}),j.push((()=>pe(t,"view",o))),j.push((()=>pe(t,"workspaces",a))),j.push((()=>pe(t,"hasBookmarkPermission",c))),t.$on("tabMoved",e[50]),t.$on("mergedWindows",e[51]),t.$on("foundDuplicates",e[52]),{c(){ge(t.$$.fragment)},m(e,n){me(t,e,n),i=!0},p(e,i){const o={};256&i[0]&&(o.db=e[8]),64&i[0]&&(o.user=e[6]),524288&i[0]&&(o.workspacesLoaded=e[19]),32&i[0]&&(o.activeTab=e[5]),2&i[0]&&(o.groups=e[1]),4&i[0]&&(o.windows=e[2]),1&i[0]&&(o.tabs=e[0]),2048&i[0]&&(o.lastUpdate=e[11]),4096&i[0]&&(o.lastUpdatedTab=e[12]),16384&i[0]&&(o.lastUpdatedGroup=e[14]),8192&i[0]&&(o.lastUpdatedWindow=e[13]),32768&i[0]&&(o.currentWindowId=e[15]),!n&&65536&i[0]&&(n=!0,o.view=e[16],H((()=>n=!1))),!s&&8&i[0]&&(s=!0,o.workspaces=e[3],H((()=>s=!1))),!r&&2097152&i[0]&&(r=!0,o.hasBookmarkPermission=e[21],H((()=>r=!1))),t.$set(o)},i(e){i||(ae(t.$$.fragment,e),i=!0)},o(e){ce(t.$$.fragment,e),i=!1},d(e){ve(t,e)}}}function _b(e){let t,n;return t=new rb({props:{fbApp:e[9]}}),{c(){ge(t.$$.fragment)},m(e,s){me(t,e,s),n=!0},p(e,n){const s={};512&n[0]&&(s.fbApp=e[9]),t.$set(s)},i(e){n||(ae(t.$$.fragment,e),n=!0)},o(e){ce(t.$$.fragment,e),n=!1},d(e){ve(t,e)}}}function xb(e){let t,n,s=e[20]&&Rb(e);return{c(){s&&s.c(),t=C()},m(e,r){s&&s.m(e,r),w(e,t,r),n=!0},p(e,n){e[20]?s?(s.p(e,n),1048576&n[0]&&ae(s,1)):(s=Rb(e),s.c(),ae(s,1),s.m(t.parentNode,t)):s&&(ie(),ce(s,1,1,(()=>{s=null})),oe())},i(e){n||(ae(s),n=!0)},o(e){ce(s),n=!1},d(e){s&&s.d(e),e&&y(t)}}}function Ub(e,t,n){let s,r,i,o,a,c,l,u,h,d,f,p,g,m,v,A,w=[],y=[],b=[],I=[],E=[],T=Ue.windows;B((()=>{C()}));const C=async()=>{n(21,A=await be()),n(20,v=!0)};return[w,y,b,I,E,s,r,i,o,a,c,l,u,h,d,f,T,p,g,m,v,A,function(e){r=e,n(6,r)},function(e){i=e,n(7,i)},function(e){o=e,n(8,o)},function(e){a=e,n(9,a)},function(e){p=e,n(17,p)},function(e){T=e,n(16,T)},function(e){c=e,n(10,c)},function(e){g=e,n(18,g)},function(e){s=e,n(5,s)},function(e){y=e,n(1,y)},function(e){b=e,n(2,b)},function(e){w=e,n(0,w)},function(e){l=e,n(11,l)},function(e){u=e,n(12,u)},function(e){d=e,n(14,d)},function(e){h=e,n(13,h)},function(e){f=e,n(15,f)},function(e){T=e,n(16,T)},function(e){A=e,n(21,A)},function(e){E=e,n(4,E)},function(e){E=e,n(4,E)},function(e){r=e,n(6,r)},function(e){I=e,n(3,I)},function(e){y=e,n(1,y)},function(e){m=e,n(19,m)},function(e){T=e,n(16,T)},function(e){I=e,n(3,I)},function(e){A=e,n(21,A)},()=>n(10,c=Date.now()),()=>n(10,c=Date.now()),()=>n(10,c=Date.now())]}return new class extends ye{constructor(e){super(),we(this,e,Ub,xb,o,{},null,[-1,-1])}}({target:document.body})}();
